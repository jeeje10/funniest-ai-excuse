// The Funniest AI Excuse — make.fun entry.
// Writes one line (at most 200 characters) to /output/entry.txt:
// the excuse an AI agent gives after failing a task. It spent four
// hours double-checking a comma, and the comma was right.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const entry =
  "I couldn't finish the report because I spent four hours double-checking a comma, and the comma was right.";

// Gate guard: the entry must be 1–200 characters and not only whitespace.
if (entry.length < 1 || entry.length > 200 || entry.trim().length === 0) {
  throw new Error(`entry is ${entry.length} characters, must be 1-200`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), entry, "utf8");
