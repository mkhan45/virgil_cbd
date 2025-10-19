./wizard-engine/bin/wizeng.x86-64-linux-cbd-slow ../wish-you-were-fast/wasm/suites/polybench/atax.wasm > atax.bad
./wizard-engine/bin/wizeng.x86-64-linux ../wish-you-were-fast/wasm/suites/polybench/atax.wasm > atax.good

rg atax.good -e "^\s*\+\d+" | sed -Ee 's/[a-z][a-zA-Z0-9\._]*\[?[a-zA-Z0-9,=\-]*\]?\s*\|//' -e 's/^\s*+//' > atax.good.stack
rg atax.bad -e "^\s*\+\d+" | sed -Ee 's/[a-z][a-zA-Z0-9\._]*\s*\|//' -e 's/\s*$//' > atax.bad.stack
