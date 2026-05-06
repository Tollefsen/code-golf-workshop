# Code Golf Workshop

Write the shortest possible code that solves the problem. Lowest character count wins.

## Getting Started

1. Clone this repo
2. Pick a challenge from `challenges/`
3. Pick any programming language
4. Make it as short as possible

## Challenges

| # | Challenge | Difficulty |
|---|---|---|
| 1 | [FizzBuzz](challenges/01-fizzbuzz/) | Warm-up |
| 2 | [Fibonacci](challenges/02-fibonacci/) | Medium |
| 3 | [Twelve Days of Christmas](challenges/03-twelve-days/) | Spicy |

Each challenge directory has a `README.md` with the full problem description and an `expected.txt` to verify against.

## Checking Your Solution

Run the checker from the project root:

```bash
./check.sh 01-fizzbuzz "python solution.py"
./check.sh 02-fibonacci "node solution.js"
./check.sh 03-twelve-days "ruby solution.rb"
```

It runs your command and compares the output against the expected result.

**Can't run from terminal?** Save your program's output to `output.txt` in the challenge directory, then:

```bash
diff -u challenges/01-fizzbuzz/expected.txt challenges/01-fizzbuzz/output.txt
```

No diff output means you're correct.

## Scoring

Your score = the number of characters in your source file (including whitespace). Shortest solution wins.

## Presentation

To view the intro slides (requires Node.js):

```bash
npm install
npm run present
```
