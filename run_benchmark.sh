#!/bin/sh
wat2wasm $1 -o $1.wasm
./InterpreterMain $1.wasm
rm $1.wasm
