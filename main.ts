import { writeFileSync, chmodSync, mkdirSync } from "node:fs";

const text = "I dropped a suggestion in the suggestion box, and it came back as an action item assigned to me.";
const target = "/output/entry.txt";
mkdirSync("/output", { recursive: true });
writeFileSync(target, text);
chmodSync(target, 0o644);
// Entry: one line, 96 chars — the box returns your suggestion as your own action item.
