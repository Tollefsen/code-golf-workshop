---
marp: true
theme: default
paginate: true
---

# Code Golf

Solving problems in as few characters as possible

---

## What is Code Golf?

- Write the **shortest possible** source code that solves a problem
- Named after golf: **lowest score wins**
- "Score" = number of characters (or bytes) in your solution
- A competitive programming sport with its own community

---

## Why Code Golf?

- Forces you to **really** understand language features
- Teaches creative problem solving
- Reveals hidden corners of your language
- It's just fun

---

## The Rules Today

1. Your solution must **produce the correct output** for all inputs
2. Score = **character count** of your source code
3. Whitespace counts!
4. You choose your own language
5. Standard library is allowed, no external packages

---

## A Quick Example

**Task:** Return the sum of numbers from 1 to n

### The readable way

```javascript
function sum(n) {
  let total = 0;
  for (let i = 1; i <= n; i++) {
    total += i;
  }
  return total;
}
```

**72 characters**

---

## Golfing It Down

### Step 1 — Use the formula

The sum 1 + 2 + ... + n is a well-known series called a triangular number:

![Triangular number formula](https://wikimedia.org/api/rest_v1/media/math/render/svg/da2be4366fef3ae13fdf9c172bd3bceb801b38f5)

```javascript
function sum(n) {
  return n * (n + 1) / 2;
}
```

**43 characters**

---

## Golfing It Down

### Step 2 — Arrow function

```javascript
sum=n=>n*(n+1)/2
```

**16 characters**

From 72 to 16. That's code golf.

---

## Common Golf Tricks (JavaScript)

| Trick | Before | After |
|---|---|---|
| Arrow functions | `function(x){return x*2}` | `x=>x*2` |
| Template literals | `a+" "+b` | `` `${a} ${b}` `` |
| Bitwise floor | `Math.floor(x)` | `x\|0` |
| Boolean coerce | `x ? 1 : 0` | `+!!x` |
| Short-circuit | `if(a) b()` | `a&&b()` |

---

## Common Golf Tricks (Language-Agnostic)

- **Use math** — formulas beat loops
- **Abuse operator precedence** — fewer parentheses
- **Reuse variables** — single-char names everywhere
- **Know your stdlib** — built-in functions save characters
- **Recurse** — sometimes shorter than a loop
- **String coercion** — `""+n` instead of `n.toString()`

---

## How We Score

```
              Your Solution
                   |
                   v
         ┌─────────────────┐
         │  Count all chars │
         │  (incl. spaces)  │
         └────────┬────────┘
                  │
                  v
            Your Score
```

Lowest score wins.

---

## Today's Challenges

| # | Challenge | Difficulty |
|---|---|---|
| 1 | FizzBuzz (1-100) | Warm-up |
| 2 | Fibonacci (n input) | Medium |
| 3 | Twelve Days of Christmas | Spicy |

Each challenge has a README with the full problem description and expected output.

---

## Let's Golf!

Pick a challenge. Pick a language. Make it tiny.

Good luck!
