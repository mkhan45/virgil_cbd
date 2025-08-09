#!/bin/sh
wasm-tools parse $1 > $1.wasm
./InterpreterMain $1.wasm
rm $1.wasm
