# Challenge 1 — FizzBuzz

**Difficulty:** Warm-up

## Problem

Print the numbers from 1 to 100, one per line. But:

- For multiples of **3**, print `Fizz` instead of the number
- For multiples of **5**, print `Buzz` instead of the number
- For multiples of **both 3 and 5**, print `FizzBuzz` instead of the number

## Input

None. The range 1-100 is hardcoded.

## Output

100 lines, each containing either a number, `Fizz`, `Buzz`, or `FizzBuzz`.

## Expected Output (first 20 lines)

```
1
2
Fizz
4
Buzz
Fizz
7
8
Fizz
Buzz
11
Fizz
13
14
FizzBuzz
16
17
Fizz
19
Buzz
```

## Verify Your Solution

From the project root:

```bash
./check.sh 01-fizzbuzz "python solution.py"
./check.sh 01-fizzbuzz "node solution.js"
```

Replace the command with however you run your solution.

**Can't run from terminal?** Save your program's output to `challenges/01-fizzbuzz/output.txt` and run:

```bash
diff -u challenges/01-fizzbuzz/expected.txt challenges/01-fizzbuzz/output.txt
```

No output = correct. Otherwise the diff shows where your output differs.

## Solutions

Put your solution in a file named `solution.<ext>` in this directory.
