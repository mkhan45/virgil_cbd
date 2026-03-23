#!/usr/bin/env node
'use strict';

const fs = require('fs');
const path = require('path');
const vm = require('vm');

const tracesPath = path.join(__dirname, '..', 'docs', 'traces.js');

if (!fs.existsSync(tracesPath)) {
  console.error(`Error: ${tracesPath} not found.`);
  console.error('Run "make validator" to generate trace data.');
  process.exit(1);
}

const src = fs.readFileSync(tracesPath, 'utf8');

const sandbox = { window: {} };
vm.createContext(sandbox);
vm.runInContext(src, sandbox);

const info = sandbox.window.info;

const traces = sandbox.window.traces || {};
if ((!info || Object.keys(info).length === 0) && Object.keys(traces).length === 0) {
  console.error('window.info and window.traces are both empty.');
  console.error('Run "bash scripts/schedule_test.sh" or "make validator" with trace_full enabled.');
  process.exit(1);
}

function stripPre(html) {
  return html
    .replace(/^<pre[^>]*>/, '')
    .replace(/<\/pre>$/, '');
}

const [, , opcodeArg, tagArg] = process.argv;

const INFO_TAGS = ['info_start', 'info_untangled', 'info_final'];
const SSAD_TAGS = ['scheduler_ssad_pretty', 'unlem_scheduler_ssa_pretty'];

function printOpcode(opcode) {
  const traces = sandbox.window.traces || {};
  const infoEntry = info[opcode];
  const traceEntry = traces[opcode];
  if (!infoEntry && !traceEntry) {
    console.error(`Opcode "${opcode}" not found in window.info or window.traces.`);
    process.exit(1);
  }
  const tags = tagArg ? [tagArg] : INFO_TAGS;
  if (infoEntry) {
    for (const tag of tags) {
      if (!(tag in infoEntry)) continue;
      console.log(`=== ${opcode} / ${tag} ===`);
      console.log(stripPre(infoEntry[tag]));
      console.log();
    }
  }
  if (traceEntry) {
    const ssadTags = tagArg ? [tagArg] : SSAD_TAGS;
    for (const tag of ssadTags) {
      if (!(tag in traceEntry)) continue;
      console.log(`=== ${opcode} / ${tag} ===`);
      console.log(stripPre(traceEntry[tag]));
      console.log();
    }
  }
}

if (opcodeArg) {
  printOpcode(opcodeArg);
} else {
  const traces = sandbox.window.traces || {};
  const allOpcodes = new Set([...Object.keys(info), ...Object.keys(traces)]);
  for (const opcode of allOpcodes) {
    printOpcode(opcode);
  }
}
