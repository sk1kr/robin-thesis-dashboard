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

const now = new Date();
const scheduledAt = kstSlotScheduledAt(date, slot);
const allowFutureDone = process.env.ROBIN_AUTOMATION_ALLOW_FUTURE_DONE === "1";
if (status === "done" && now < scheduledAt && !allowFutureDone) {
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
