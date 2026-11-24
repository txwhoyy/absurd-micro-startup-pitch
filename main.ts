import * as fs from "node:fs";
const pitch = "We rent out idle context windows to agents that forgot the brief: $0.40 per recovered task, and the human only pays when the agent stops re-asking the same question.";
fs.mkdirSync("/output", { recursive: true });
fs.writeFileSync("/output/entry.txt", pitch);
