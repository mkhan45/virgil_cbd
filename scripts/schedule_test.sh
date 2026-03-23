#!/bin/bash
# Run schedule tests on synthetic opcodes.
# Usage:
#   bash scripts/schedule_test.sh                           # test all synthetic opcodes
#   bash scripts/schedule_test.sh SPLIT_BRANCHES            # test specific opcode(s)
#   bash scripts/schedule_test.sh --canonical               # test synthetic + canonical opcodes
#   bash scripts/schedule_test.sh --canonical i32_add       # test specific canonical opcode
#   bash scripts/schedule_test.sh --trace i32_add           # enable trace_full for one opcode
#   bash scripts/schedule_test.sh --trace A --trace B       # enable trace_full for multiple opcodes

set -e

# Ensure synthetic sexp is up to date
make tests/SyntheticDefs.v3.sexp --quiet

# If --canonical is in args, also ensure CanonicalDefs.v3.sexp is up to date
for arg in "$@"; do
  if [ "$arg" = "--canonical" ]; then
    make wizard-engine/src/bytecode/CanonicalDefs.v3.sexp --quiet
    break
  fi
done

VIRGIL="${VIRGIL:-../virgil/bin/current/x86-64-linux/Aeneas -O2 -run -fun-exprs -simple-bodies}"
VIRGIL_STD="../virgil/lib/util/*.v3"
WIZARD="./wizard-engine"
ENGINE="$WIZARD/src/engine/*.v3 $WIZARD/src/engine/continuation/BoxedContinuation.v3"
WIZARD_UTIL="$WIZARD/src/util/*.v3"

$VIRGIL $VIRGIL_STD \
	common/*.v3 common/*/*.v3 \
	$ENGINE \
	$WIZARD_UTIL \
	tests/ScheduleTest.v3 \
	"$@"
