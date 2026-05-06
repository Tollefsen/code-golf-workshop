# Reading Input in JavaScript (Node.js)

A few ways to read input when running `node solution.js`:

## Option 1 — Command-line argument

```javascript
const n = +process.argv[2];
// Run: echo 15 | node solution.js
// Or:  node solution.js 15
```

## Option 2 — Read from stdin (piped input)

```javascript
let data = "";
process.stdin.on("data", (chunk) => (data += chunk));
process.stdin.on("end", () => {
  const n = +data.trim();
  // your logic here
});
// Run: echo 15 | node solution.js
```

## Option 3 — Synchronous stdin read (shortest for golf)

```javascript
const n = +require("fs").readFileSync(0, "utf8");
// Run: echo 15 | node solution.js
```

Option 3 is popular in code golf because it's the most compact.
