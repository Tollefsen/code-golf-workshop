# Challenge 2 — Fibonacci

**Difficulty:** Medium

## Problem

Given an input number **n**, print the first **n** numbers of the Fibonacci sequence, one per line.

The sequence starts with `0, 1` and each subsequent number is the sum of the two preceding ones.

## Input

A single integer `n` (n >= 1), read from standard input (or command-line argument — your choice).

**Stuck on reading input?** See [hints-js-input.md](hints-js-input.md) for JavaScript examples.

## Output

The first `n` Fibonacci numbers, one per line.

## Examples

**Input:** `1`
```
0
```

**Input:** `5`
```
0
1
1
2
3
```

**Input:** `10`
```
0
1
1
2
3
5
8
13
21
34
```

## Verify Your Solution

The checker will pipe `15` as input to your program. From the project root:

```bash
./check.sh 02-fibonacci "python solution.py"
./check.sh 02-fibonacci "node solution.js"
```

Replace the command with however you run your solution. Your program should read `n` from stdin.

**Can't run from terminal?** Run your program with input `15`, save the output to `challenges/02-fibonacci/output.txt`, and run:

```bash
diff -u challenges/02-fibonacci/expected.txt challenges/02-fibonacci/output.txt
```

No output = correct. Otherwise the diff shows where your output differs.

## Solutions

Put your solution in a file named `solution.<ext>` in this directory.
