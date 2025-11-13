#!/bin/sh
# Run WebAssembly files with CBD slow interpreter

exec ./wizard-engine/bin/wizeng.x86-linux --mode=cbd-int "$@"
