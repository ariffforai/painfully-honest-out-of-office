import { mkdirSync, writeFileSync } from "node:fs";

// The Painfully Honest Out-of-Office — one sentence, 123 characters.
// Honest admission (not checking email; the break matters more than the
// inbox), kept warm and professional enough for a manager to forward.
// Deterministic: the same fixed string is written on every run.
const ENTRY =
  "I'm away until Monday, and I will be honest: I am not checking email because I need this break more than my inbox needs me.";

// The gate: 1–200 characters, one line, no trailing newline. Refuse to
// write anything that would fail the scorer instead of writing it anyway.
if (ENTRY.length < 1 || ENTRY.length > 200 || ENTRY.includes("\n")) {
  throw new Error("entry violates the 200-character single-line gate");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
