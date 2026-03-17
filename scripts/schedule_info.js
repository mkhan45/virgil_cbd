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

if (!info || Object.keys(info).length === 0) {
  console.error('window.info is empty or undefined.');
  console.error('Run "make validator" with trace_full enabled for the target opcode to generate scheduler info traces.');
  process.exit(1);
}

function stripPre(html) {
  return html
    .replace(/^<pre[^>]*>/, '')
    .replace(/<\/pre>$/, '');
}

const [, , opcodeArg, tagArg] = process.argv;

const INFO_TAGS = ['info_start', 'info_untangled', 'info_final'];

function printOpcode(opcode) {
  const entry = info[opcode];
  if (!entry) {
    console.error(`Opcode "${opcode}" not found in window.info.`);
    process.exit(1);
  }
  const tags = tagArg ? [tagArg] : INFO_TAGS;
  for (const tag of tags) {
    if (!(tag in entry)) continue;
    console.log(`=== ${opcode} / ${tag} ===`);
    console.log(stripPre(entry[tag]));
    console.log();
  }
}

if (opcodeArg) {
  printOpcode(opcodeArg);
} else {
  for (const opcode of Object.keys(info)) {
    printOpcode(opcode);
  }
}
