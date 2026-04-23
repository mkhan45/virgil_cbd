#!/bin/bash

set -euo pipefail

ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
cd "$ROOT"

usage() {
  cat <<'EOF'
Usage:
  bash scripts/instanced_scheduler_golden_test.sh
  bash scripts/instanced_scheduler_golden_test.sh if same_scope outer_q trivial_phi bundle
  bash scripts/instanced_scheduler_golden_test.sh --update

Cases:
  if
  same_scope
  outer_q
  trivial_phi
  bundle

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
    if|same_scope|outer_q|trivial_phi|bundle)
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
  CASES=(if same_scope outer_q trivial_phi bundle)
fi

needs_canonical=false
for case_name in "${CASES[@]}"; do
  if [ "$case_name" = "if" ]; then
    needs_canonical=true
  fi
done

make tests/SyntheticDefs.v3.sexp --quiet
if [ "$needs_canonical" = true ]; then
  make wizard-engine/src/bytecode/CanonicalDefs.v3.sexp --quiet
fi
make InstancedSchedulerTest --quiet

tmpdir="$(mktemp -d)"
trap 'rm -rf "$tmpdir"' EXIT

golden_path() {
  case "$1" in
    if) echo "tests/golden/instanced_phase0_if_unlem.txt" ;;
    same_scope) echo "tests/golden/instanced_phase0_same_scope_q_on_both_p_sides.txt" ;;
    outer_q) echo "tests/golden/instanced_phase0_outer_q_and_both_p_sides_q.txt" ;;
    trivial_phi) echo "tests/golden/instanced_phase0_trivial_phi_stack_shared_effect.txt" ;;
    bundle) echo "tests/golden/instanced_phase0_unlem_impossible_assignment_bundle.txt" ;;
  esac
}

run_case() {
  local case_name="$1"
  local out="$tmpdir/${case_name}.txt"

  case "$case_name" in
    if)
      ./InstancedSchedulerTest --canonical --unlem IF > "$out"
      ;;
    same_scope)
      ./InstancedSchedulerTest SAME_SCOPE_Q_ON_BOTH_P_SIDES > "$out"
      ;;
    outer_q)
      ./InstancedSchedulerTest OUTER_Q_AND_BOTH_P_SIDES_Q > "$out"
      ;;
    trivial_phi)
      ./InstancedSchedulerTest TRIVIAL_PHI_STACK_SHARED_EFFECT > "$out"
      ;;
    bundle)
      ./InstancedSchedulerTest UNLEM_IMPOSSIBLE_ASSIGNMENT_BUNDLE > "$out"
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
