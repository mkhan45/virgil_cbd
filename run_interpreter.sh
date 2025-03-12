#!/bin/sh

VIRGIL_STD="../virgil/lib/util/*.v3"

WIZARD="../wizard-engine"
ENGINE="$WIZARD/src/engine/*.v3"
V3TARGET="$WIZARD/src/engine/v3/*.v3"
UTIL="$WIZARD/src/util/*.v3"

virgil $VIRGIL_STD $ENGINE $V3TARGET $UTIL Interpreter.v3 InterpreterMain.v3 $@
