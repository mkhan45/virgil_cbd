#!/bin/sh
# Run WebAssembly files with Wizard fast interpreter

exec ./wizard-engine/bin/wizeng.x86-64-linux --mode=cbd-fast "$@"
