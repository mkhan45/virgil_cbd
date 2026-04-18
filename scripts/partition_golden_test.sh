#!/bin/bash

set -euo pipefail

ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
cd "$ROOT"

usage() {
  cat <<'EOF'
Usage:
  bash scripts/partition_golden_test.sh
  bash scripts/partition_golden_test.sh if_raw if_unlem
  bash scripts/partition_golden_test.sh --update

Cases:
  if_raw
  if_unlem
  same_scope
  outer_q

Options:
  --update   Refresh the golden files with current output
  --help     Show this message
EOF
}

UPDATE=false
CASES=()

while [ "$#" -gt 0 ]; do
  case "$1" in
    --update)
      UPDATE=true
      ;;
    --help)
      usage
      exit 0
      ;;
    if_raw|if_unlem|same_scope|outer_q)
      CASES+=("$1")
      ;;
    *)
      echo "Unknown case: $1" >&2
      usage >&2
      exit 1
      ;;
  esac
  shift
done

if [ "${#CASES[@]}" -eq 0 ]; then
  CASES=(if_raw if_unlem same_scope outer_q)
fi

needs_canonical=false
for case_name in "${CASES[@]}"; do
  if [ "$case_name" = "if_raw" ] || [ "$case_name" = "if_unlem" ]; then
    needs_canonical=true
  fi
done

make tests/SyntheticDefs.v3.sexp --quiet
if [ "$needs_canonical" = true ]; then
  make wizard-engine/src/bytecode/CanonicalDefs.v3.sexp --quiet
fi
make PartitionTest --quiet

tmpdir="$(mktemp -d)"
trap 'rm -rf "$tmpdir"' EXIT

golden_path() {
  case "$1" in
    if_raw) echo "tests/golden/partition_if_raw.txt" ;;
    if_unlem) echo "tests/golden/partition_if_unlem.txt" ;;
    same_scope) echo "tests/golden/partition_same_scope_q_on_both_p_sides.txt" ;;
    outer_q) echo "tests/golden/partition_outer_q_and_both_p_sides_q.txt" ;;
  esac
}

run_case() {
  local case_name="$1"
  local out="$tmpdir/${case_name}.txt"

  case "$case_name" in
    if_raw)
      ./PartitionTest --canonical --details IF > "$out"
      ;;
    if_unlem)
      ./PartitionTest --canonical --unlem --details IF > "$out"
      ;;
    same_scope)
      ./PartitionTest --details SAME_SCOPE_Q_ON_BOTH_P_SIDES > "$out"
      ;;
    outer_q)
      ./PartitionTest --details OUTER_Q_AND_BOTH_P_SIDES_Q > "$out"
      ;;
  esac

  local golden
  golden="$(golden_path "$case_name")"

  if [ "$UPDATE" = true ]; then
    cp "$out" "$golden"
    echo "updated $golden"
  else
    diff -u "$golden" "$out"
    echo "ok $case_name"
  fi
}

for case_name in "${CASES[@]}"; do
  run_case "$case_name"
done
