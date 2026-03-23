#!/bin/bash
# Run schedule tests on synthetic opcodes.
# Usage:
#   bash scripts/schedule_test.sh              # test all synthetic opcodes
#   bash scripts/schedule_test.sh MOCK_TEST    # test specific opcode(s)

set -e

# Ensure sexp is up to date
make tests/SyntheticDefs.v3.sexp --quiet

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
