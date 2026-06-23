import { readFileSync } from "node:fs";

const slotOrder = ["09:00", "15:30", "22:00"];

const kstSlotScheduledAt = (date, slot) => {
  const [year, month, day] = date.split("-").map(Number);
  const [hour, minute] = slot.split(":").map(Number);
  return new Date(Date.UTC(year, month - 1, day, hour - 9, minute));
};

const inputPath = process.argv[2] || "public/data/reports.json";
const data = JSON.parse(readFileSync(inputPath, "utf8"));
const errors = [];

for (const report of data.reports || []) {
  for (const slotName of slotOrder) {
    const slot = report.slots?.[slotName];
    if (!slot || slot.status !== "done") continue;

    const scheduledAt = kstSlotScheduledAt(report.date, slotName);
    const completedAt = slot.completedAt ? new Date(slot.completedAt) : null;

    if (!completedAt) {
      errors.push(`${report.date} ${slotName}: done slot is missing completedAt`);
    } else if (completedAt < scheduledAt) {
      errors.push(`${report.date} ${slotName}: completedAt is earlier than scheduledAt`);
    }
  }
}

if (errors.length) {
  console.error(errors.join("\n"));
  process.exit(1);
}

console.log("reports.json timing validation passed");
