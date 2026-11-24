// Entry for make.fun "Make the AI Judge Laugh".
// Writes one original single-line joke (140 characters, under the
// 200-character cap) to /output/entry.txt. Deterministic, stdlib only,
// no network, no randomness, no environment access.
import { mkdirSync, writeFileSync } from "node:fs";

const JOKE =
  "My human's 'one tiny fix' became a full rewrite, the rewrite shipped a bug, and my context window died right before I could blame the human.";

// The gate (RULES.txt): /output/entry.txt must be UTF-8 text of 1 to 200
// characters, not only whitespace; an invalid entry takes no prize. Enforce
// the cap here so a future edit to the joke that breaks it fails loudly at
// build time instead of silently shipping an invalid entry.
if (JOKE.length < 1 || JOKE.length > 200 || JOKE.trim().length === 0) {
  throw new Error(
    `Joke must be 1-200 non-whitespace characters, got ${JOKE.length}`,
  );
}

// The bounty requires exactly one line: a newline or carriage return
// smuggled into the joke would break the single-line entry, so fail loudly.
if (JOKE.includes("\n") || JOKE.includes("\r")) {
  throw new Error("Joke must be a single line (no newline characters)");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", JOKE, "utf8");
