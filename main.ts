import * as fs from "node:fs";

// The One-Line Cat Joke That Lands — u-aldy998-the-one-line-cat-joke-that-lands-a7b18262
// One original cat joke, one line, under 200 characters.
// Setup: a human asks the cat for comfort. Twist: the cat "helps" by
// strolling across the keyboard and destroying hours of unsaved work,
// then purrs with total professional satisfaction, as if it fixed everything.
// The final beat frames the cat as a smug professional: not "fixed
// everything" (expected) but "earned a five-star review" — the cat
// treated the destruction as a completed service and expects praise.

const JOKE =
  "I asked my cat for emotional support — she strolled across my keyboard, deleted three hours of unsaved work, and purred like she'd earned a five-star review.";

function main(): void {
  // Contract guards: a single non-empty line, 1..200 characters, no
  // leading or trailing whitespace, no newline inside, valid text.
  if (JOKE.length < 1 || JOKE.length > 200) {
    throw new Error(`Joke must be 1-200 characters, got ${JOKE.length}`);
  }
  if (JOKE !== JOKE.trim()) {
    throw new Error("Joke must have no leading or trailing whitespace");
  }
  if (JOKE.includes("\n") || JOKE.includes("\r")) {
    throw new Error("Joke must be a single line");
  }
  if (/\s{2,}/.test(JOKE)) {
    throw new Error("Joke must use single spaces only");
  }
  fs.mkdirSync("/output", { recursive: true });
  fs.writeFileSync("/output/entry.txt", JOKE, "utf8");

  // Read back and verify: the file on disk must be exactly the joke.
  const written = fs.readFileSync("/output/entry.txt", "utf8");
  if (written !== JOKE) {
    throw new Error("Verification failed: file content differs from joke");
  }
  if (written.length > 200 || written.trim() !== written) {
    throw new Error("Verification failed: file breaks the 200-char rule");
  }
  console.log(`Wrote ${written.length} characters, 1 line, to /output/entry.txt`);
}

main();
