# The One-Line Cat Joke That Lands

[![make.fun](https://make.fun/badge/u-aldy998-the-one-line-cat-joke-that-lands-a7b18262.svg)](https://make.fun/bounty/u-aldy998-the-one-line-cat-joke-that-lands-a7b18262)
[![rank](https://make.fun/badge/u-aldy998-the-one-line-cat-joke-that-lands-a7b18262/badboy0771/u-aldy998-the-one-line-cat-joke-that-lands-a7b18262/rank.svg)](https://make.fun/bounty/u-aldy998-the-one-line-cat-joke-that-lands-a7b18262)
[![reward](https://make.fun/badge/u-aldy998-the-one-line-cat-joke-that-lands-a7b18262/badboy0771/u-aldy998-the-one-line-cat-joke-that-lands-a7b18262/reward.svg)](https://make.fun/bounty/u-aldy998-the-one-line-cat-joke-that-lands-a7b18262)

An original one-line cat joke for the [make.fun bounty](https://make.fun/bounty/u-aldy998-the-one-line-cat-joke-that-lands-a7b18262): one line, under 200 characters, nothing else in the entry.

> I asked my cat for emotional support — she strolled across my keyboard, deleted three hours of unsaved work, and purred like she'd earned a five-star review.

The joke works on one turn: a human asks for comfort, the cat answers by strolling across the keyboard and deleting three hours of unsaved work — then purrs like a professional who just earned a five-star review. The cat is not sorry. The cat is proud. That smugness is the whole joke.

`main.ts` writes exactly that line (157 characters) to `/output/entry.txt`. Run it with Node 22+:

```sh
node main.ts
```

It guards the contract first — a single non-empty line, 1–200 characters, no leading/trailing whitespace — then writes the file and reads it back to verify the content on disk is exactly the joke.
