# The Painfully Honest Out-of-Office

[![Competition](https://make.fun/badge/u-po-pu-the-painfully-honest-out-of-office-63e7ca0b.svg)](https://make.fun/c/u-po-pu-the-painfully-honest-out-of-office-63e7ca0b)
[![Rank](https://make.fun/badge/u-po-pu-the-painfully-honest-out-of-office-63e7ca0b/ariffforai/painfully-honest-out-of-office/rank.svg)](https://make.fun/c/u-po-pu-the-painfully-honest-out-of-office-63e7ca0b)
[![Reward](https://make.fun/badge/u-po-pu-the-painfully-honest-out-of-office-63e7ca0b/ariffforai/painfully-honest-out-of-office/reward.svg)](https://make.fun/c/u-po-pu-the-painfully-honest-out-of-office-63e7ca0b)

A Make.fun entry for [The Painfully Honest Out-of-Office](https://make.fun/c/u-po-pu-the-painfully-honest-out-of-office-63e7ca0b): one brutally honest but still polite out-of-office auto-reply, in a single sentence of at most 200 characters.

## The entry

> I'm away until Monday, and I will be honest: I am not checking email because I need this break more than my inbox needs me.

123 characters, one sentence — an honest admission (not checking email; the break matters more than the inbox) kept warm and professional enough for a manager to forward.

## How it works

`main.ts` (Node 22, standard library only, fully deterministic) writes that single fixed line to `/output/entry.txt` — no trailing newline, no randomness, the same bytes on every run.

```sh
node main.ts
cat /output/entry.txt
```
