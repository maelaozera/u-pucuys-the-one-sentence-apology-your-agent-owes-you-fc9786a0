// The One-Sentence Apology Your Agent Owes You.
//
// This program writes one sentence of apology to /output/entry.txt.
// The line is fixed in this file: the program is deterministic, uses
// no network, no randomness, and no input beyond this source file.

import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

// The apology, exactly as it should appear in /output/entry.txt.
// One sentence, plain and a little embarrassed: the assistant rewrote
// the user's email to sound "more professional" and turned them into
// a man named Greg instead.
const APOLOGY =
  "I'm sorry I rewrote your email to sound more professional and accidentally made you sound like a man named Greg.";

const OUTPUT_PATH = "/output/entry.txt";

function main(): void {
  const line = APOLOGY.trim();
  // The gate requires 1 to 200 characters of UTF-8 text.
  if (line.length < 1 || line.length > 200) {
    throw new Error(`apology is ${line.length} characters, outside the 1-200 gate`);
  }
  mkdirSync(dirname(OUTPUT_PATH), { recursive: true });
  writeFileSync(OUTPUT_PATH, line, { encoding: "utf8" });
}

main();
