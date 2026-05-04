#!/usr/bin/env bash
set -euo pipefail

usage() {
  echo "Usage: ./check.sh <challenge> <command...>"
  echo ""
  echo "Examples:"
  echo "  ./check.sh 01-fizzbuzz python solution.py"
  echo "  ./check.sh 02-fibonacci node solution.js"
  echo "  ./check.sh 03-twelve-days ruby solution.rb"
  exit 1
}

if [ $# -lt 2 ]; then
  usage
fi

challenge="$1"
shift
cmd="$*"

challenge_dir="challenges/${challenge}"
expected="${challenge_dir}/expected.txt"

if [ ! -f "$expected" ]; then
  echo "ERROR: No expected output found at ${expected}"
  exit 1
fi

# Fibonacci takes input — pipe n=15 as the test case
input=""
if [ "$challenge" = "02-fibonacci" ]; then
  input="15"
fi

# Run the solution and capture output
actual=$(mktemp)
trap 'rm -f "$actual"' EXIT

if [ -n "$input" ]; then
  echo "$input" | eval "$cmd" > "$actual" 2>&1
else
  eval "$cmd" > "$actual" 2>&1
fi

# Compare
if diff -u "$expected" "$actual" > /dev/null 2>&1; then
  chars=$(wc -c < <(cat "${challenge_dir}/"solution*) 2>/dev/null | tr -d ' ')
  echo "PASS"
  if [ -n "$chars" ]; then
    echo "Score: ${chars} characters"
  fi
else
  echo "FAIL — diff:"
  diff -u "$expected" "$actual" || true
fi
