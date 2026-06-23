import { readFileSync, writeFileSync } from "node:fs";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = resolve(__dirname, "..");
const dataPath = resolve(root, "public/data/reports.json");
const slotOrder = ["09:00", "15:30", "22:00"];

const kstSlotScheduledAt = (date, slot) => {
  const [year, month, day] = date.split("-").map(Number);
  const [hour, minute] = slot.split(":").map(Number);
  return new Date(Date.UTC(year, month - 1, day, hour - 9, minute));
};

const args = new Map();
for (let index = 2; index < process.argv.length; index += 2) {
  const key = process.argv[index];
  const value = process.argv[index + 1];
  if (!key || !key.startsWith("--")) continue;
  args.set(key.slice(2), value);
}

const slot = args.get("slot");
const title = args.get("title");
const summary = args.get("summary") || "";
const markdownPath = args.get("markdown-file");
const status = args.get("status") || "done";
const date = args.get("date") || new Intl.DateTimeFormat("en-CA", {
  timeZone: "Asia/Seoul",
  year: "numeric",
  month: "2-digit",
  day: "2-digit",
}).format(new Date());

if (!slot || !title || !markdownPath) {
  throw new Error("Usage: node scripts/update-report.mjs --slot HH:MM --title TITLE --summary SUMMARY --markdown-file PATH");
}

if (!slotOrder.includes(slot)) {
  throw new Error(`Unknown slot: ${slot}`);
}

const markdown = readFileSync(resolve(process.cwd(), markdownPath), "utf8");
const data = JSON.parse(readFileSync(dataPath, "utf8"));
let report = data.reports.find((item) => item.date === date);

if (!report) {
  report = { date, slots: {} };
  data.reports.unshift(report);
}

for (const defaultSlot of slotOrder) {
  report.slots[defaultSlot] ||= {
    title: defaultSlot === "09:00"
      ? "장시작 Thesis 리포트"
      : defaultSlot === "15:30"
        ? "장마감 Thesis 리포트"
        : "신규 Thesis 후보군 리포트",
    status: "pending",
    scheduledAt: kstSlotScheduledAt(date, defaultSlot).toISOString(),
    summary: "자동화 실행 대기 중입니다.",
    markdown: "",
  };
  report.slots[defaultSlot].scheduledAt ||= kstSlotScheduledAt(date, defaultSlot).toISOString();
}

const now = new Date();
const scheduledAt = kstSlotScheduledAt(date, slot);
if (status === "done" && now < scheduledAt) {
  throw new Error(`${date} ${slot} KST is not due yet. Refusing to mark future report as done.`);
}

report.slots[slot] = {
  title,
  status,
  scheduledAt: scheduledAt.toISOString(),
  completedAt: status === "done" ? now.toISOString() : undefined,
  summary,
  markdown,
};

data.updatedAt = new Date().toISOString();
data.latestDate = date;
data.reports = data.reports.sort((a, b) => b.date.localeCompare(a.date));

writeFileSync(dataPath, `${JSON.stringify(data, null, 2)}\n`);
