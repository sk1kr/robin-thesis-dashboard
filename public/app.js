const slotOrder = ["09:00", "15:30", "22:00"];
const slotLabels = {
  "09:00": "장시작",
  "15:30": "장마감",
  "22:00": "신규 후보군",
};

const slotTitleLabels = {
  "09:00": "장시작 thesis 리포트",
  "15:30": "장마감 thesis 리포트",
  "22:00": "thesis candidate 리포트",
};

const SEOUL_TIME_ZONE = "Asia/Seoul";

let appState = {
  reports: [],
  selectedDate: "",
  selectedSlot: "09:00",
  updatedAt: "",
};

const escapeHtml = (value) =>
  String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");

const kstSlotScheduledAt = (date, slot) => {
  const [year, month, day] = date.split("-").map(Number);
  const [hour, minute] = slot.split(":").map(Number);
  return new Date(Date.UTC(year, month - 1, day, hour - 9, minute));
};

const normalizeSlotForDisplay = (report, slotName, rootUpdatedAt = "", now = new Date()) => {
  const slot = report?.slots?.[slotName] || {};
  const scheduledAt = slot.scheduledAt ? new Date(slot.scheduledAt) : kstSlotScheduledAt(report.date, slotName);
  const completedAt = slot.completedAt ? new Date(slot.completedAt) : null;
  const fallbackUpdatedAt = rootUpdatedAt ? new Date(rootUpdatedAt) : null;
  const status = slot.status || "pending";

  const isBeforeSchedule = now < scheduledAt;
  const completedTooEarly = completedAt && completedAt < scheduledAt;
  const legacyUpdatedTooEarly = status === "done" && !completedAt && fallbackUpdatedAt && fallbackUpdatedAt < scheduledAt;
  const shouldHideDone = isBeforeSchedule || completedTooEarly || legacyUpdatedTooEarly;

  if (status === "done" && shouldHideDone) {
    return {
      ...slot,
      status: isBeforeSchedule ? "pending" : "invalid",
      summary: isBeforeSchedule
        ? `${slotName} KST 실행 대기 중입니다.`
        : `${slotName} KST 이전에 생성된 리포트라 검증 대기 중입니다.`,
      markdown: "",
      scheduledAt: scheduledAt.toISOString(),
    };
  }

  return {
    ...slot,
    status,
    scheduledAt: scheduledAt.toISOString(),
  };
};

const getDisplaySlot = (report, slotName) =>
  normalizeSlotForDisplay(report, slotName, appState.updatedAt);

const inlineMarkdown = (value) =>
  escapeHtml(value)
    .replaceAll(/\*\*(.*?)\*\*/g, "<strong>$1</strong>")
    .replaceAll(/`([^`]+)`/g, "<code>$1</code>")
    .replaceAll(/강화/g, '<span class="signal signal-strong"><span class="signal-dot"></span>강화</span>')
    .replaceAll(/유지/g, '<span class="signal signal-hold"><span class="signal-dot"></span>유지</span>')
    .replaceAll(/약화/g, '<span class="signal signal-weak"><span class="signal-dot"></span>약화</span>')
    .replaceAll(/긍정/g, '<span class="signal signal-strong">긍정</span>')
    .replaceAll(/중립/g, '<span class="signal signal-hold">중립</span>')
    .replaceAll(/부정/g, '<span class="signal signal-weak">부정</span>')
    .replaceAll(/\b(Buy|BUY|Hold|HOLD)\b/g, '<span class="signal signal-strong">$1</span>')
    .replaceAll(/\b(Watch|WATCH)\b/g, '<span class="signal signal-hold">$1</span>')
    .replaceAll(/\b(Trim|TRIM|Sell|SELL)\b/g, '<span class="signal signal-weak">$1</span>')
    .replaceAll(/\b(Kill Condition)\b/g, '<span class="signal signal-kill">$1</span>');

const tableToHtml = (lines) => {
  const rows = lines
    .filter((line) => !/^\s*\|?\s*:?-{3,}:?\s*(\|\s*:?-{3,}:?\s*)+\|?\s*$/.test(line))
    .map((line) =>
      line
        .trim()
        .replace(/^\|/, "")
        .replace(/\|$/, "")
        .split("|")
        .map((cell) => inlineMarkdown(cell.trim()))
    );

  if (!rows.length) return "";

  const [head, ...body] = rows;
  return [
    '<div class="table-wrap"><table>',
    "<thead><tr>",
    ...head.map((cell) => `<th>${cell}</th>`),
    "</tr></thead>",
    "<tbody>",
    ...body.map((row) => `<tr>${row.map((cell) => `<td>${cell}</td>`).join("")}</tr>`),
    "</tbody></table></div>",
  ].join("");
};

const markdownToHtml = (markdown) => {
  if (!markdown) return "";

  const lines = markdown.split("\n");
  const firstHeadingIndex = lines.findIndex((line) => /^#\s+/.test(line));
  if (firstHeadingIndex !== -1) {
    lines.splice(firstHeadingIndex, 1);
  }
  const blocks = [];
  let sectionBlocks = [];
  let tableBuffer = [];
  let listBuffer = [];

  const pushBlock = (block) => {
    if (sectionBlocks) {
      sectionBlocks.push(block);
    } else {
      blocks.push(block);
    }
  };

  const flushList = () => {
    if (listBuffer.length) {
      pushBlock(
        `<ul>${listBuffer
          .map((item) => `<li class="${item.level > 0 ? "nested" : ""}">${inlineMarkdown(item.text)}</li>`)
          .join("")}</ul>`
      );
      listBuffer = [];
    }
  };

  const flushTable = () => {
    if (tableBuffer.length) {
      flushList();
      pushBlock(tableToHtml(tableBuffer));
      tableBuffer = [];
    }
  };

  const closeSection = () => {
    flushTable();
    flushList();
    if (sectionBlocks.length) {
      blocks.push(`<section class="md-section">${sectionBlocks.join("")}</section>`);
      sectionBlocks = [];
    }
  };

  for (const line of lines) {
    if (/^\s*\|.*\|\s*$/.test(line)) {
      flushList();
      tableBuffer.push(line);
      continue;
    }

    flushTable();

    if (/^###\s+/.test(line)) {
      flushList();
      pushBlock(`<h3>${inlineMarkdown(line.replace(/^###\s+/, ""))}</h3>`);
    } else if (/^##\s+/.test(line)) {
      closeSection();
      sectionBlocks = [`<h2>${inlineMarkdown(line.replace(/^##\s+/, ""))}</h2>`];
    } else if (/^#\s+/.test(line)) {
      closeSection();
      blocks.push(`<h1>${inlineMarkdown(line.replace(/^#\s+/, ""))}</h1>`);
      sectionBlocks = [];
    } else if (/^>\s?/.test(line)) {
      flushList();
      pushBlock(`<blockquote>${inlineMarkdown(line.replace(/^>\s?/, ""))}</blockquote>`);
    } else if (/^(\s*)[-*]\s+/.test(line)) {
      const [, indent = ""] = line.match(/^(\s*)[-*]\s+/) || [];
      listBuffer.push({
        level: indent.length >= 2 ? 1 : 0,
        text: line.replace(/^\s*[-*]\s+/, ""),
      });
    } else if (/^\s*---+\s*$/.test(line)) {
      closeSection();
      blocks.push("<hr />");
      sectionBlocks = [];
    } else if (line.trim()) {
      flushList();
      pushBlock(`<p>${inlineMarkdown(line)}</p>`);
    } else {
      flushList();
    }
  }

  flushTable();
  closeSection();
  return blocks.join("");
};

const formatUpdatedAt = (value) => {
  if (!value) return "업데이트 대기";
  return new Intl.DateTimeFormat("ko-KR", {
    dateStyle: "medium",
    timeStyle: "short",
    timeZone: SEOUL_TIME_ZONE,
  }).format(new Date(value));
};

const getReportByDate = (date) => appState.reports.find((report) => report.date === date);

const firstAvailableSlot = (report) =>
  slotOrder.find((time) => getDisplaySlot(report, time)?.status === "done") || slotOrder[0];

const renderDateList = () => {
  document.querySelector("#date-list").innerHTML = appState.reports
    .map((report) => {
      return `
        <button class="date-button ${report.date === appState.selectedDate ? "active" : ""}" data-date="${escapeHtml(report.date)}" type="button">
          <span class="date-main">${escapeHtml(report.date)}</span>
        </button>
      `;
    })
    .join("");

  document.querySelectorAll(".date-button").forEach((button) => {
    button.addEventListener("click", () => {
      appState.selectedDate = button.dataset.date;
      appState.selectedSlot = firstAvailableSlot(getReportByDate(appState.selectedDate));
      renderDashboard();
    });
  });
};

const renderSlotTabs = (report) => {
  document.querySelector("#slot-tabs").innerHTML = slotOrder
    .map((time) => {
      const slot = getDisplaySlot(report, time);
      return `
        <button class="slot-tab ${time === appState.selectedSlot ? "active" : ""}" data-slot="${time}" type="button" role="tab" aria-selected="${time === appState.selectedSlot}">
          <span class="slot-tab-time">${time}</span>
          <span class="slot-tab-label">${escapeHtml(slotLabels[time])} · ${escapeHtml(slot?.status || "pending")}</span>
        </button>
      `;
    })
    .join("");

  document.querySelectorAll(".slot-tab").forEach((button) => {
    button.addEventListener("click", () => {
      appState.selectedSlot = button.dataset.slot;
      renderDashboard();
    });
  });
};

const renderReader = (report) => {
  const slot = getDisplaySlot(report, appState.selectedSlot);
  const hour = appState.selectedSlot.split(":")[0].replace(/^0/, "");

  document.querySelector("#selected-title").textContent =
    report?.date && slotTitleLabels[appState.selectedSlot]
      ? `${report.date} ${hour}시 ${slotTitleLabels[appState.selectedSlot]}`
      : slot.title || "리포트";
  document.querySelector("#selected-summary").textContent = slot.summary || "업데이트 대기 중입니다.";
  document.querySelector("#selected-markdown").innerHTML =
    markdownToHtml(slot.markdown || "") || "<p>아직 리포트가 없습니다.</p>";
};

const renderStatus = (report) => {
  document.querySelector("#status-grid").innerHTML = slotOrder
    .map((time) => {
      const slot = getDisplaySlot(report, time);
      const status = slot?.status || "pending";
      return `
        <article class="status-card">
          <div class="status-title">
            <span>${time} · ${escapeHtml(slotLabels[time])}</span>
            <span class="badge ${escapeHtml(status)}">${escapeHtml(status)}</span>
          </div>
          <p>${escapeHtml(slot?.summary || "업데이트 대기 중입니다.")}</p>
        </article>
      `;
    })
    .join("");
};

const renderDashboard = () => {
  const report = getReportByDate(appState.selectedDate) || appState.reports[0];

  renderDateList();
  renderSlotTabs(report);
  renderReader(report);
  renderStatus(report);
};

const init = async () => {
  const response = await fetch(`/data/reports.json?ts=${Date.now()}`);
  const data = await response.json();
  appState.reports = [...data.reports].sort((a, b) => b.date.localeCompare(a.date));
  appState.updatedAt = data.updatedAt || "";
  const latest = appState.reports.find((report) => report.date === data.latestDate) || appState.reports[0];
  appState.selectedDate = latest?.date || "";
  appState.selectedSlot = firstAvailableSlot(latest);

  document.querySelector("#latest-date").textContent = data.latestDate || "-";
  document.querySelector("#updated-at").textContent = formatUpdatedAt(data.updatedAt);
  renderDashboard();
};

init().catch((error) => {
  document.querySelector("main").innerHTML = `<p>리포트를 불러오지 못했습니다: ${escapeHtml(error.message)}</p>`;
});
