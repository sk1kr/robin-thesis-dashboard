import { readFileSync, writeFileSync } from "node:fs";

const slotOrder = ["09:00", "15:30", "22:00"];

const kstSlotScheduledAt = (date, slot) => {
  const [year, month, day] = date.split("-").map(Number);
  const [hour, minute] = slot.split(":").map(Number);
  return new Date(Date.UTC(year, month - 1, day, hour - 9, minute));
};

const inputPath = process.argv[2] || "public/data/reports.json";
const now = process.env.NOW ? new Date(process.env.NOW) : new Date();
const allowFutureDone = process.env.ROBIN_AUTOMATION_ALLOW_FUTURE_DONE === "1";
const data = JSON.parse(readFileSync(inputPath, "utf8"));
const rootUpdatedAt = data.updatedAt ? new Date(data.updatedAt) : now;

for (const report of data.reports || []) {
  report.slots ||= {};

  for (const slotName of slotOrder) {
    const scheduledAt = kstSlotScheduledAt(report.date, slotName);
    const slot = report.slots[slotName] || {};
    slot.scheduledAt = scheduledAt.toISOString();

    if (slot.status === "done") {
      const completedAt = slot.completedAt ? new Date(slot.completedAt) : rootUpdatedAt;
      const generatedTooEarly = completedAt < scheduledAt;
      const scheduledInFuture = now < scheduledAt;

      if ((generatedTooEarly || scheduledInFuture) && !allowFutureDone) {
        slot.status = "pending";
        slot.summary = `${slotName} KST 실행 대기 중입니다.`;
        slot.markdown = "";
        delete slot.completedAt;
      } else if (!slot.completedAt) {
        slot.completedAt = completedAt.toISOString();
      }
    }

    report.slots[slotName] = slot.status
      ? slot
      : {
          status: "pending",
          scheduledAt: scheduledAt.toISOString(),
          summary: `${slotName} KST 실행 대기 중입니다.`,
          markdown: "",
        };
  }
}

writeFileSync(inputPath, `${JSON.stringify(data, null, 2)}\n`);
