# Challenge 3 — Twelve Days of Christmas

**Difficulty:** Spicy

## Problem

Print the complete lyrics to "The Twelve Days of Christmas".

No input. Just output the full song.

## Output

The full lyrics. Each verse follows the pattern:

```
On the first day of Christmas my true love gave to me
A partridge in a pear tree.

On the second day of Christmas my true love gave to me
Two turtle doves, and
A partridge in a pear tree.

On the third day of Christmas my true love gave to me
Three French hens,
Two turtle doves, and
A partridge in a pear tree.
```

...and so on through the twelfth day.

## Full Gift List

| Day | Gift |
|---|---|
| 1 | A partridge in a pear tree |
| 2 | Two turtle doves |
| 3 | Three French hens |
| 4 | Four calling birds |
| 5 | Five golden rings |
| 6 | Six geese a-laying |
| 7 | Seven swans a-swimming |
| 8 | Eight maids a-milking |
| 9 | Nine ladies dancing |
| 10 | Ten lords a-leaping |
| 11 | Eleven pipers piping |
| 12 | Twelve drummers drumming |

## Notes

- Verses are separated by a blank line
- Each verse lists gifts in **reverse** order (newest first, partridge last)
- From verse 2 onward, the second-to-last line has `, and` at the end
- Only the last line of each verse ends with `.`
- The day names are: `first`, `second`, `third`, `fourth`, `fifth`, `sixth`, `seventh`, `eighth`, `ninth`, `tenth`, `eleventh`, `twelfth`

## Verify Your Solution

From the project root:

```bash
./check.sh 03-twelve-days "python solution.py"
./check.sh 03-twelve-days "node solution.js"
```

Replace the command with however you run your solution.

**Can't run from terminal?** Save your program's output to `challenges/03-twelve-days/output.txt` and run:

```bash
diff -u challenges/03-twelve-days/expected.txt challenges/03-twelve-days/output.txt
```

No output = correct. Otherwise the diff shows where your output differs.

## Solutions

Put your solution in a file named `solution.<ext>` in this directory.
