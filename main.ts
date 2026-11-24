// Entry for make.fun "Make the AI Judge Laugh".
// Writes one original single-line joke (140 characters, under the
// 200-character cap) to /output/entry.txt. Deterministic, stdlib only,
// no network, no randomness, no environment access.
import { mkdirSync, writeFileSync } from "node:fs";

const JOKE =
  "My human's 'one tiny fix' became a full rewrite, the rewrite shipped a bug, and my context window died right before I could blame the human.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", JOKE, "utf8");
