window.traces = {};
window.traces["UNREACHABLE"] = {}
window.traces["UNREACHABLE"]["parsed"] = ''
window.traces["UNREACHABLE"]["parsed__raw"] = ''
window.traces["UNREACHABLE"]["parsed"] += `<pre class=''>def eff__0 = trapUnreachable();
</pre>`;
window.traces["UNREACHABLE"]["parsed__raw"] += `def eff__0 = trapUnreachable();
`;
window.traces["UNREACHABLE"]["raw"] = ''
window.traces["UNREACHABLE"]["raw__raw"] = ''
window.traces["UNREACHABLE"]["raw"] += `<pre class='graph'>---
config:
  layout: elk
---
graph TD
	1[\\"Finish"/]
	3 -. Codeptr Stack Trap Locals Globals Tables Memory Extra .-> 1
	3["eff__0 trapUnreachable"]
	0 -. Codeptr Stack Trap Locals Globals Tables Memory Extra .-> 3
	0[/"Start"\\]
</pre>`;
window.traces["UNREACHABLE"]["raw__raw"] += `---
config:
  layout: elk
---
graph TD
	1[\\"Finish"/]
	3 -. Codeptr Stack Trap Locals Globals Tables Memory Extra .-> 1
	3["eff__0 trapUnreachable"]
	0 -. Codeptr Stack Trap Locals Globals Tables Memory Extra .-> 3
	0[/"Start"\\]
`;
window.traces["UNREACHABLE"]["spytial"] = ''
window.traces["UNREACHABLE"]["spytial__raw"] = ''
window.traces["UNREACHABLE"]["spytial"] += `<pre class=''>{
"atoms": [
{
"id": "node_1",
"type": "finish",
"label": "Finish"
},
{
"id": "node_3",
"type": "intrinsic",
"label": "trapUnreachable [eff__0]"
},
{
"id": "node_0",
"type": "start",
"label": "Start"
}
],
"relations": [
{
"id": "state_uses",
"name": "StateUses",
"types": ["sea_node", "sea_node"],
"tuples": [
{
"atoms": ["node_1", "node_3"],
"types": ["finish", "intrinsic"]
},
{
"atoms": ["node_3", "node_0"],
"types": ["intrinsic", "start"]
}
]
}
]
}</pre>`;
window.traces["UNREACHABLE"]["spytial__raw"] += `{
"atoms": [
{
"id": "node_1",
"type": "finish",
"label": "Finish"
},
{
"id": "node_3",
"type": "intrinsic",
"label": "trapUnreachable [eff__0]"
},
{
"id": "node_0",
"type": "start",
"label": "Start"
}
],
"relations": [
{
"id": "state_uses",
"name": "StateUses",
"types": ["sea_node", "sea_node"],
"tuples": [
{
"atoms": ["node_1", "node_3"],
"types": ["finish", "intrinsic"]
},
{
"atoms": ["node_3", "node_0"],
"types": ["intrinsic", "start"]
}
]
}
]
}`;
window.traces["UNREACHABLE"]["overloadOps"] = ''
window.traces["UNREACHABLE"]["overloadOps__raw"] = ''
window.traces["UNREACHABLE"]["overloadOps"] += `<pre class='graph'>---
config:
  layout: elk
---
graph TD
	1[\\"Finish"/]
	3 -. Codeptr Stack Trap Locals Globals Tables Memory Extra .-> 1
	3["eff__0 trapUnreachable"]
	0 -. Codeptr Stack Trap Locals Globals Tables Memory Extra .-> 3
	0[/"Start"\\]
</pre>`;
window.traces["UNREACHABLE"]["overloadOps__raw"] += `---
config:
  layout: elk
---
graph TD
	1[\\"Finish"/]
	3 -. Codeptr Stack Trap Locals Globals Tables Memory Extra .-> 1
	3["eff__0 trapUnreachable"]
	0 -. Codeptr Stack Trap Locals Globals Tables Memory Extra .-> 3
	0[/"Start"\\]
`;
window.traces["UNREACHABLE"]["addAbstractions"] = ''
window.traces["UNREACHABLE"]["addAbstractions__raw"] = ''
window.traces["UNREACHABLE"]["addAbstractions"] += `<pre class='graph'>---
config:
  layout: elk
---
graph TD
	1[\\"Finish"/]
	3 -. Codeptr Stack Trap Locals Globals Tables Memory Extra .-> 1
	3["eff__0 trapUnreachable"]
	0 -. Codeptr Stack Trap Locals Globals Tables Memory Extra .-> 3
	0[/"Start"\\]
</pre>`;
window.traces["UNREACHABLE"]["addAbstractions__raw"] += `---
config:
  layout: elk
---
graph TD
	1[\\"Finish"/]
	3 -. Codeptr Stack Trap Locals Globals Tables Memory Extra .-> 1
	3["eff__0 trapUnreachable"]
	0 -. Codeptr Stack Trap Locals Globals Tables Memory Extra .-> 3
	0[/"Start"\\]
`;
window.traces["UNREACHABLE"]["schedulerMermaid"] = ''
window.traces["UNREACHABLE"]["schedulerMermaid__raw"] = ''
window.traces["UNREACHABLE"]["schedulerMermaid"] += `<pre class='graph'>graph TD
subgraph block_1["Block 1"]
	direction TB
	b1_0[/"Start"\\]
	b1_3["eff__0 trapUnreachable"]
	b1_1[\\"Finish"/]
	b1_0 --> b1_3
	b1_3 --> b1_1
end

</pre>`;
window.traces["UNREACHABLE"]["schedulerMermaid__raw"] += `graph TD
subgraph block_1["Block 1"]
	direction TB
	b1_0[/"Start"\\]
	b1_3["eff__0 trapUnreachable"]
	b1_1[\\"Finish"/]
	b1_0 --> b1_3
	b1_3 --> b1_1
end

`;
window.traces["UNREACHABLE"]["unLEM"] = ''
window.traces["UNREACHABLE"]["unLEM__raw"] = ''
window.traces["UNREACHABLE"]["unLEM"] += `<pre class='graph'>---
config:
  layout: elk
---
graph TD
	1[\\"Finish"/]
	3 -. Codeptr Stack Trap Locals Globals Tables Memory Extra .-> 1
	3["eff__0 trapUnreachable"]
	0 -. Codeptr Stack Trap Locals Globals Tables Memory Extra .-> 3
	0[/"Start"\\]
</pre>`;
window.traces["UNREACHABLE"]["unLEM__raw"] += `---
config:
  layout: elk
---
graph TD
	1[\\"Finish"/]
	3 -. Codeptr Stack Trap Locals Globals Tables Memory Extra .-> 1
	3["eff__0 trapUnreachable"]
	0 -. Codeptr Stack Trap Locals Globals Tables Memory Extra .-> 3
	0[/"Start"\\]
`;
window.traces["UNREACHABLE"]["unlem_schedule"] = ''
window.traces["UNREACHABLE"]["unlem_schedule__raw"] = ''
window.traces["UNREACHABLE"]["unlem_schedule"] += `<pre class=''>def eff__0 = trapUnreachable();
</pre>`;
window.traces["UNREACHABLE"]["unlem_schedule__raw"] += `def eff__0 = trapUnreachable();
`;
window.traces["UNREACHABLE"]["spytial_ul"] = ''
window.traces["UNREACHABLE"]["spytial_ul__raw"] = ''
window.traces["UNREACHABLE"]["spytial_ul"] += `<pre class=''>{
"atoms": [
{
"id": "node_1",
"type": "finish",
"label": "Finish"
},
{
"id": "node_3",
"type": "intrinsic",
"label": "trapUnreachable [eff__0]"
},
{
"id": "node_0",
"type": "start",
"label": "Start"
}
],
"relations": [
{
"id": "state_uses",
"name": "StateUses",
"types": ["sea_node", "sea_node"],
"tuples": [
{
"atoms": ["node_1", "node_3"],
"types": ["finish", "intrinsic"]
},
{
"atoms": ["node_3", "node_0"],
"types": ["intrinsic", "start"]
}
]
}
]
}</pre>`;
window.traces["UNREACHABLE"]["spytial_ul__raw"] += `{
"atoms": [
{
"id": "node_1",
"type": "finish",
"label": "Finish"
},
{
"id": "node_3",
"type": "intrinsic",
"label": "trapUnreachable [eff__0]"
},
{
"id": "node_0",
"type": "start",
"label": "Start"
}
],
"relations": [
{
"id": "state_uses",
"name": "StateUses",
"types": ["sea_node", "sea_node"],
"tuples": [
{
"atoms": ["node_1", "node_3"],
"types": ["finish", "intrinsic"]
},
{
"atoms": ["node_3", "node_0"],
"types": ["intrinsic", "start"]
}
]
}
]
}`;
window.traces["UNREACHABLE"]["unlem_scheduler"] = ''
window.traces["UNREACHABLE"]["unlem_scheduler__raw"] = ''
window.traces["UNREACHABLE"]["unlem_scheduler"] += `<pre class='graph'>graph TD
subgraph block_2["Block 2"]
	direction TB
	b2_0[/"Start"\\]
	b2_3["eff__0 trapUnreachable"]
	b2_1[\\"Finish"/]
	b2_0 --> b2_3
	b2_3 --> b2_1
end

</pre>`;
window.traces["UNREACHABLE"]["unlem_scheduler__raw"] += `graph TD
subgraph block_2["Block 2"]
	direction TB
	b2_0[/"Start"\\]
	b2_3["eff__0 trapUnreachable"]
	b2_1[\\"Finish"/]
	b2_0 --> b2_3
	b2_3 --> b2_1
end

`;
window.traces["UNREACHABLE"]["unlem_pretty"] = ''
window.traces["UNREACHABLE"]["unlem_pretty__raw"] = ''
window.traces["UNREACHABLE"]["unlem_pretty"] += `<pre class=''>trapUnreachable();
</pre>`;
window.traces["UNREACHABLE"]["unlem_pretty__raw"] += `trapUnreachable();
`;
window.traces["UNREACHABLE"]["constUnLEM"] = ''
window.traces["UNREACHABLE"]["constUnLEM__raw"] = ''
window.traces["UNREACHABLE"]["constUnLEM"] += `<pre class='graph'>---
config:
  layout: elk
---
graph TD
	1[\\"Finish"/]
	3 -. Codeptr Stack Trap Locals Globals Tables Memory Extra .-> 1
	3["eff__0 trapUnreachable"]
	0 -. Codeptr Stack Trap Locals Globals Tables Memory Extra .-> 3
	0[/"Start"\\]
</pre>`;
window.traces["UNREACHABLE"]["constUnLEM__raw"] += `---
config:
  layout: elk
---
graph TD
	1[\\"Finish"/]
	3 -. Codeptr Stack Trap Locals Globals Tables Memory Extra .-> 1
	3["eff__0 trapUnreachable"]
	0 -. Codeptr Stack Trap Locals Globals Tables Memory Extra .-> 3
	0[/"Start"\\]
`;
window.traces["UNREACHABLE"]["chooseMerge"] = ''
window.traces["UNREACHABLE"]["chooseMerge__raw"] = ''
window.traces["UNREACHABLE"]["chooseMerge"] += `<pre class='graph'>---
config:
  layout: elk
---
graph TD
	1[\\"Finish"/]
	3 -. Codeptr Stack Trap Locals Globals Tables Memory Extra .-> 1
	3["eff__0 trapUnreachable"]
	0 -. Codeptr Stack Trap Locals Globals Tables Memory Extra .-> 3
	0[/"Start"\\]
</pre>`;
window.traces["UNREACHABLE"]["chooseMerge__raw"] += `---
config:
  layout: elk
---
graph TD
	1[\\"Finish"/]
	3 -. Codeptr Stack Trap Locals Globals Tables Memory Extra .-> 1
	3["eff__0 trapUnreachable"]
	0 -. Codeptr Stack Trap Locals Globals Tables Memory Extra .-> 3
	0[/"Start"\\]
`;
window.traces["UNREACHABLE"]["scheduled"] = ''
window.traces["UNREACHABLE"]["scheduled__raw"] = ''
window.traces["UNREACHABLE"]["scheduled"] += `<pre class=''>def eff__0 = trapUnreachable();
</pre>`;
window.traces["UNREACHABLE"]["scheduled__raw"] += `def eff__0 = trapUnreachable();
`;
window.traces["UNREACHABLE"]["pretty"] = ''
window.traces["UNREACHABLE"]["pretty__raw"] = ''
window.traces["UNREACHABLE"]["pretty"] += `<pre class=''>trapUnreachable();
</pre>`;
window.traces["UNREACHABLE"]["pretty__raw"] += `trapUnreachable();
`;
window.traces["NOP"] = {}
window.traces["NOP"]["parsed"] = ''
window.traces["NOP"]["parsed__raw"] = ''
window.traces["NOP"]["parsed"] += `<pre class=''>def ret__1 = (void);
</pre>`;
window.traces["NOP"]["parsed__raw"] += `def ret__1 = (void);
`;
window.traces["NOP"]["raw"] = ''
window.traces["NOP"]["raw__raw"] = ''
window.traces["NOP"]["raw"] += `<pre class='graph'>---
config:
  layout: elk
---
graph TD
	1[\\"Finish"/]
	0 -. Codeptr Stack Trap Locals Globals Tables Memory Extra .-> 1
	0[/"Start"\\]
</pre>`;
window.traces["NOP"]["raw__raw"] += `---
config:
  layout: elk
---
graph TD
	1[\\"Finish"/]
	0 -. Codeptr Stack Trap Locals Globals Tables Memory Extra .-> 1
	0[/"Start"\\]
`;
window.traces["NOP"]["spytial"] = ''
window.traces["NOP"]["spytial__raw"] = ''
window.traces["NOP"]["spytial"] += `<pre class=''>{
"atoms": [
{
"id": "node_1",
"type": "finish",
"label": "Finish"
},
{
"id": "node_0",
"type": "start",
"label": "Start"
}
],
"relations": [
{
"id": "state_uses",
"name": "StateUses",
"types": ["sea_node", "sea_node"],
"tuples": [
{
"atoms": ["node_1", "node_0"],
"types": ["finish", "start"]
}
]
}
]
}</pre>`;
window.traces["NOP"]["spytial__raw"] += `{
"atoms": [
{
"id": "node_1",
"type": "finish",
"label": "Finish"
},
{
"id": "node_0",
"type": "start",
"label": "Start"
}
],
"relations": [
{
"id": "state_uses",
"name": "StateUses",
"types": ["sea_node", "sea_node"],
"tuples": [
{
"atoms": ["node_1", "node_0"],
"types": ["finish", "start"]
}
]
}
]
}`;
window.traces["NOP"]["overloadOps"] = ''
window.traces["NOP"]["overloadOps__raw"] = ''
window.traces["NOP"]["overloadOps"] += `<pre class='graph'>---
config:
  layout: elk
---
graph TD
	1[\\"Finish"/]
	0 -. Codeptr Stack Trap Locals Globals Tables Memory Extra .-> 1
	0[/"Start"\\]
</pre>`;
window.traces["NOP"]["overloadOps__raw"] += `---
config:
  layout: elk
---
graph TD
	1[\\"Finish"/]
	0 -. Codeptr Stack Trap Locals Globals Tables Memory Extra .-> 1
	0[/"Start"\\]
`;
window.traces["NOP"]["addAbstractions"] = ''
window.traces["NOP"]["addAbstractions__raw"] = ''
window.traces["NOP"]["addAbstractions"] += `<pre class='graph'>---
config:
  layout: elk
---
graph TD
	1[\\"Finish"/]
	0 -. Codeptr Stack Trap Locals Globals Tables Memory Extra .-> 1
	0[/"Start"\\]
</pre>`;
window.traces["NOP"]["addAbstractions__raw"] += `---
config:
  layout: elk
---
graph TD
	1[\\"Finish"/]
	0 -. Codeptr Stack Trap Locals Globals Tables Memory Extra .-> 1
	0[/"Start"\\]
`;
window.traces["NOP"]["schedulerMermaid"] = ''
window.traces["NOP"]["schedulerMermaid__raw"] = ''
window.traces["NOP"]["schedulerMermaid"] += `<pre class='graph'>graph TD
subgraph block_3["Block 3"]
	direction TB
	b3_0[/"Start"\\]
	b3_1[\\"Finish"/]
	b3_0 --> b3_1
end

</pre>`;
window.traces["NOP"]["schedulerMermaid__raw"] += `graph TD
subgraph block_3["Block 3"]
	direction TB
	b3_0[/"Start"\\]
	b3_1[\\"Finish"/]
	b3_0 --> b3_1
end

`;
window.traces["NOP"]["unLEM"] = ''
window.traces["NOP"]["unLEM__raw"] = ''
window.traces["NOP"]["unLEM"] += `<pre class='graph'>---
config:
  layout: elk
---
graph TD
	1[\\"Finish"/]
	0 -. Codeptr Stack Trap Locals Globals Tables Memory Extra .-> 1
	0[/"Start"\\]
</pre>`;
window.traces["NOP"]["unLEM__raw"] += `---
config:
  layout: elk
---
graph TD
	1[\\"Finish"/]
	0 -. Codeptr Stack Trap Locals Globals Tables Memory Extra .-> 1
	0[/"Start"\\]
`;
window.traces["NOP"]["unlem_schedule"] = ''
window.traces["NOP"]["unlem_schedule__raw"] = ''
window.traces["NOP"]["unlem_schedule"] += `<pre class=''></pre>`;
window.traces["NOP"]["unlem_schedule__raw"] += ``;
window.traces["NOP"]["spytial_ul"] = ''
window.traces["NOP"]["spytial_ul__raw"] = ''
window.traces["NOP"]["spytial_ul"] += `<pre class=''>{
"atoms": [
{
"id": "node_1",
"type": "finish",
"label": "Finish"
},
{
"id": "node_0",
"type": "start",
"label": "Start"
}
],
"relations": [
{
"id": "state_uses",
"name": "StateUses",
"types": ["sea_node", "sea_node"],
"tuples": [
{
"atoms": ["node_1", "node_0"],
"types": ["finish", "start"]
}
]
}
]
}</pre>`;
window.traces["NOP"]["spytial_ul__raw"] += `{
"atoms": [
{
"id": "node_1",
"type": "finish",
"label": "Finish"
},
{
"id": "node_0",
"type": "start",
"label": "Start"
}
],
"relations": [
{
"id": "state_uses",
"name": "StateUses",
"types": ["sea_node", "sea_node"],
"tuples": [
{
"atoms": ["node_1", "node_0"],
"types": ["finish", "start"]
}
]
}
]
}`;
window.traces["NOP"]["unlem_scheduler"] = ''
window.traces["NOP"]["unlem_scheduler__raw"] = ''
window.traces["NOP"]["unlem_scheduler"] += `<pre class='graph'>graph TD
subgraph block_4["Block 4"]
	direction TB
	b4_0[/"Start"\\]
	b4_1[\\"Finish"/]
	b4_0 --> b4_1
end

</pre>`;
window.traces["NOP"]["unlem_scheduler__raw"] += `graph TD
subgraph block_4["Block 4"]
	direction TB
	b4_0[/"Start"\\]
	b4_1[\\"Finish"/]
	b4_0 --> b4_1
end

`;
window.traces["NOP"]["unlem_pretty"] = ''
window.traces["NOP"]["unlem_pretty__raw"] = ''
window.traces["NOP"]["unlem_pretty"] += `<pre class=''></pre>`;
window.traces["NOP"]["unlem_pretty__raw"] += ``;
window.traces["NOP"]["constUnLEM"] = ''
window.traces["NOP"]["constUnLEM__raw"] = ''
window.traces["NOP"]["constUnLEM"] += `<pre class='graph'>---
config:
  layout: elk
---
graph TD
	1[\\"Finish"/]
	0 -. Codeptr Stack Trap Locals Globals Tables Memory Extra .-> 1
	0[/"Start"\\]
</pre>`;
window.traces["NOP"]["constUnLEM__raw"] += `---
config:
  layout: elk
---
graph TD
	1[\\"Finish"/]
	0 -. Codeptr Stack Trap Locals Globals Tables Memory Extra .-> 1
	0[/"Start"\\]
`;
window.traces["NOP"]["chooseMerge"] = ''
window.traces["NOP"]["chooseMerge__raw"] = ''
window.traces["NOP"]["chooseMerge"] += `<pre class='graph'>---
config:
  layout: elk
---
graph TD
	1[\\"Finish"/]
	0 -. Codeptr Stack Trap Locals Globals Tables Memory Extra .-> 1
	0[/"Start"\\]
</pre>`;
window.traces["NOP"]["chooseMerge__raw"] += `---
config:
  layout: elk
---
graph TD
	1[\\"Finish"/]
	0 -. Codeptr Stack Trap Locals Globals Tables Memory Extra .-> 1
	0[/"Start"\\]
`;
window.traces["NOP"]["scheduled"] = ''
window.traces["NOP"]["scheduled__raw"] = ''
window.traces["NOP"]["scheduled"] += `<pre class=''></pre>`;
window.traces["NOP"]["scheduled__raw"] += ``;
window.traces["NOP"]["pretty"] = ''
window.traces["NOP"]["pretty__raw"] = ''
window.traces["NOP"]["pretty"] += `<pre class=''></pre>`;
window.traces["NOP"]["pretty__raw"] += ``;
window.traces["BLOCK"] = {}
window.traces["BLOCK"]["parsed"] = ''
window.traces["BLOCK"]["parsed__raw"] = ''
window.traces["BLOCK"]["parsed"] += `<pre class=''>def bt = imm_readBlockType();
def arg__3 = (bt);
def eff__2 = doBlock(arg__3);
</pre>`;
window.traces["BLOCK"]["parsed__raw"] += `def bt = imm_readBlockType();
def arg__3 = (bt);
def eff__2 = doBlock(arg__3);
`;
window.traces["BLOCK"]["raw"] = ''
window.traces["BLOCK"]["raw__raw"] = ''
window.traces["BLOCK"]["raw"] += `<pre class='graph'>---
config:
  layout: elk
---
graph TD
	1[\\"Finish"/]
	5 -. Codeptr Stack Trap Locals Globals Tables Memory Extra .-> 1
	5["eff__2 doBlock"]
	3 --> 5
	3 -. Codeptr .-> 5
	0 -. Stack Trap Locals Globals Tables Memory Extra .-> 5
	0[/"Start"\\]
	3["bt imm_readBlockType"]
	0 -. Codeptr .-> 3
</pre>`;
window.traces["BLOCK"]["raw__raw"] += `---
config:
  layout: elk
---
graph TD
	1[\\"Finish"/]
	5 -. Codeptr Stack Trap Locals Globals Tables Memory Extra .-> 1
	5["eff__2 doBlock"]
	3 --> 5
	3 -. Codeptr .-> 5
	0 -. Stack Trap Locals Globals Tables Memory Extra .-> 5
	0[/"Start"\\]
	3["bt imm_readBlockType"]
	0 -. Codeptr .-> 3
`;
window.traces["BLOCK"]["spytial"] = ''
window.traces["BLOCK"]["spytial__raw"] = ''
window.traces["BLOCK"]["spytial"] += `<pre class=''>{
"atoms": [
{
"id": "node_1",
"type": "finish",
"label": "Finish"
},
{
"id": "node_5",
"type": "intrinsic",
"label": "doBlock [eff__2]"
},
{
"id": "node_3",
"type": "intrinsic",
"label": "imm_readBlockType [bt]"
},
{
"id": "node_0",
"type": "start",
"label": "Start"
}
],
"relations": [
{
"id": "uses",
"name": "Uses",
"types": ["sea_node", "sea_node"],
"tuples": [
{
"atoms": ["node_5", "node_3"],
"types": ["intrinsic", "intrinsic"]
}
]
},
{
"id": "state_uses",
"name": "StateUses",
"types": ["sea_node", "sea_node"],
"tuples": [
{
"atoms": ["node_1", "node_5"],
"types": ["finish", "intrinsic"]
},
{
"atoms": ["node_5", "node_3"],
"types": ["intrinsic", "intrinsic"]
},
{
"atoms": ["node_5", "node_0"],
"types": ["intrinsic", "start"]
},
{
"atoms": ["node_3", "node_0"],
"types": ["intrinsic", "start"]
}
]
}
]
}</pre>`;
window.traces["BLOCK"]["spytial__raw"] += `{
"atoms": [
{
"id": "node_1",
"type": "finish",
"label": "Finish"
},
{
"id": "node_5",
"type": "intrinsic",
"label": "doBlock [eff__2]"
},
{
"id": "node_3",
"type": "intrinsic",
"label": "imm_readBlockType [bt]"
},
{
"id": "node_0",
"type": "start",
"label": "Start"
}
],
"relations": [
{
"id": "uses",
"name": "Uses",
"types": ["sea_node", "sea_node"],
"tuples": [
{
"atoms": ["node_5", "node_3"],
"types": ["intrinsic", "intrinsic"]
}
]
},
{
"id": "state_uses",
"name": "StateUses",
"types": ["sea_node", "sea_node"],
"tuples": [
{
"atoms": ["node_1", "node_5"],
"types": ["finish", "intrinsic"]
},
{
"atoms": ["node_5", "node_3"],
"types": ["intrinsic", "intrinsic"]
},
{
"atoms": ["node_5", "node_0"],
"types": ["intrinsic", "start"]
},
{
"atoms": ["node_3", "node_0"],
"types": ["intrinsic", "start"]
}
]
}
]
}`;
window.traces["BLOCK"]["overloadOps"] = ''
window.traces["BLOCK"]["overloadOps__raw"] = ''
window.traces["BLOCK"]["overloadOps"] += `<pre class='graph'>---
config:
  layout: elk
---
graph TD
	1[\\"Finish"/]
	5 -. Codeptr Stack Trap Locals Globals Tables Memory Extra .-> 1
	5["eff__2 doBlock"]
	3 --> 5
	3 -. Codeptr .-> 5
	0 -. Stack Trap Locals Globals Tables Memory Extra .-> 5
	0[/"Start"\\]
	3["bt imm_readBlockType"]
	0 -. Codeptr .-> 3
</pre>`;
window.traces["BLOCK"]["overloadOps__raw"] += `---
config:
  layout: elk
---
graph TD
	1[\\"Finish"/]
	5 -. Codeptr Stack Trap Locals Globals Tables Memory Extra .-> 1
	5["eff__2 doBlock"]
	3 --> 5
	3 -. Codeptr .-> 5
	0 -. Stack Trap Locals Globals Tables Memory Extra .-> 5
	0[/"Start"\\]
	3["bt imm_readBlockType"]
	0 -. Codeptr .-> 3
`;
window.traces["BLOCK"]["addAbstractions"] = ''
window.traces["BLOCK"]["addAbstractions__raw"] = ''
window.traces["BLOCK"]["addAbstractions"] += `<pre class='graph'>---
config:
  layout: elk
---
graph TD
	1[\\"Finish"/]
	5 -. Codeptr Stack Trap Locals Globals Tables Memory Extra .-> 1
	5["eff__2 doBlock"]
	3 --> 5
	3 -. Codeptr .-> 5
	0 -. Stack Trap Locals Globals Tables Memory Extra .-> 5
	0[/"Start"\\]
	3["bt imm_readBlockType"]
	0 -. Codeptr .-> 3
</pre>`;
window.traces["BLOCK"]["addAbstractions__raw"] += `---
config:
  layout: elk
---
graph TD
	1[\\"Finish"/]
	5 -. Codeptr Stack Trap Locals Globals Tables Memory Extra .-> 1
	5["eff__2 doBlock"]
	3 --> 5
	3 -. Codeptr .-> 5
	0 -. Stack Trap Locals Globals Tables Memory Extra .-> 5
	0[/"Start"\\]
	3["bt imm_readBlockType"]
	0 -. Codeptr .-> 3
`;
window.traces["BLOCK"]["schedulerMermaid"] = ''
window.traces["BLOCK"]["schedulerMermaid__raw"] = ''
window.traces["BLOCK"]["schedulerMermaid"] += `<pre class='graph'>graph TD
subgraph block_5["Block 5"]
	direction TB
	b5_0[/"Start"\\]
	b5_3["bt imm_readBlockType"]
	b5_5["eff__2 doBlock"]
	b5_1[\\"Finish"/]
	b5_0 --> b5_3
	b5_3 --> b5_5
	b5_5 --> b5_1
end

</pre>`;
window.traces["BLOCK"]["schedulerMermaid__raw"] += `graph TD
subgraph block_5["Block 5"]
	direction TB
	b5_0[/"Start"\\]
	b5_3["bt imm_readBlockType"]
	b5_5["eff__2 doBlock"]
	b5_1[\\"Finish"/]
	b5_0 --> b5_3
	b5_3 --> b5_5
	b5_5 --> b5_1
end

`;
window.traces["BLOCK"]["unLEM"] = ''
window.traces["BLOCK"]["unLEM__raw"] = ''
window.traces["BLOCK"]["unLEM"] += `<pre class='graph'>---
config:
  layout: elk
---
graph TD
	1[\\"Finish"/]
	5 -. Codeptr Stack Trap Locals Globals Tables Memory Extra .-> 1
	5["eff__2 doBlock"]
	3 --> 5
	3 -. Codeptr .-> 5
	0 -. Stack Trap Locals Globals Tables Memory Extra .-> 5
	0[/"Start"\\]
	3["bt imm_readBlockType"]
	0 -. Codeptr .-> 3
</pre>`;
window.traces["BLOCK"]["unLEM__raw"] += `---
config:
  layout: elk
---
graph TD
	1[\\"Finish"/]
	5 -. Codeptr Stack Trap Locals Globals Tables Memory Extra .-> 1
	5["eff__2 doBlock"]
	3 --> 5
	3 -. Codeptr .-> 5
	0 -. Stack Trap Locals Globals Tables Memory Extra .-> 5
	0[/"Start"\\]
	3["bt imm_readBlockType"]
	0 -. Codeptr .-> 3
`;
window.traces["BLOCK"]["unlem_schedule"] = ''
window.traces["BLOCK"]["unlem_schedule__raw"] = ''
window.traces["BLOCK"]["unlem_schedule"] += `<pre class=''>def bt = imm_readBlockType();
def eff__2 = doBlock(bt);
</pre>`;
window.traces["BLOCK"]["unlem_schedule__raw"] += `def bt = imm_readBlockType();
def eff__2 = doBlock(bt);
`;
window.traces["BLOCK"]["spytial_ul"] = ''
window.traces["BLOCK"]["spytial_ul__raw"] = ''
window.traces["BLOCK"]["spytial_ul"] += `<pre class=''>{
"atoms": [
{
"id": "node_1",
"type": "finish",
"label": "Finish"
},
{
"id": "node_5",
"type": "intrinsic",
"label": "doBlock [eff__2]"
},
{
"id": "node_3",
"type": "intrinsic",
"label": "imm_readBlockType [bt]"
},
{
"id": "node_0",
"type": "start",
"label": "Start"
}
],
"relations": [
{
"id": "uses",
"name": "Uses",
"types": ["sea_node", "sea_node"],
"tuples": [
{
"atoms": ["node_5", "node_3"],
"types": ["intrinsic", "intrinsic"]
}
]
},
{
"id": "state_uses",
"name": "StateUses",
"types": ["sea_node", "sea_node"],
"tuples": [
{
"atoms": ["node_1", "node_5"],
"types": ["finish", "intrinsic"]
},
{
"atoms": ["node_5", "node_3"],
"types": ["intrinsic", "intrinsic"]
},
{
"atoms": ["node_5", "node_0"],
"types": ["intrinsic", "start"]
},
{
"atoms": ["node_3", "node_0"],
"types": ["intrinsic", "start"]
}
]
}
]
}</pre>`;
window.traces["BLOCK"]["spytial_ul__raw"] += `{
"atoms": [
{
"id": "node_1",
"type": "finish",
"label": "Finish"
},
{
"id": "node_5",
"type": "intrinsic",
"label": "doBlock [eff__2]"
},
{
"id": "node_3",
"type": "intrinsic",
"label": "imm_readBlockType [bt]"
},
{
"id": "node_0",
"type": "start",
"label": "Start"
}
],
"relations": [
{
"id": "uses",
"name": "Uses",
"types": ["sea_node", "sea_node"],
"tuples": [
{
"atoms": ["node_5", "node_3"],
"types": ["intrinsic", "intrinsic"]
}
]
},
{
"id": "state_uses",
"name": "StateUses",
"types": ["sea_node", "sea_node"],
"tuples": [
{
"atoms": ["node_1", "node_5"],
"types": ["finish", "intrinsic"]
},
{
"atoms": ["node_5", "node_3"],
"types": ["intrinsic", "intrinsic"]
},
{
"atoms": ["node_5", "node_0"],
"types": ["intrinsic", "start"]
},
{
"atoms": ["node_3", "node_0"],
"types": ["intrinsic", "start"]
}
]
}
]
}`;
window.traces["BLOCK"]["unlem_scheduler"] = ''
window.traces["BLOCK"]["unlem_scheduler__raw"] = ''
window.traces["BLOCK"]["unlem_scheduler"] += `<pre class='graph'>graph TD
subgraph block_6["Block 6"]
	direction TB
	b6_0[/"Start"\\]
	b6_3["bt imm_readBlockType"]
	b6_5["eff__2 doBlock"]
	b6_1[\\"Finish"/]
	b6_0 --> b6_3
	b6_3 --> b6_5
	b6_5 --> b6_1
end

</pre>`;
window.traces["BLOCK"]["unlem_scheduler__raw"] += `graph TD
subgraph block_6["Block 6"]
	direction TB
	b6_0[/"Start"\\]
	b6_3["bt imm_readBlockType"]
	b6_5["eff__2 doBlock"]
	b6_1[\\"Finish"/]
	b6_0 --> b6_3
	b6_3 --> b6_5
	b6_5 --> b6_1
end

`;
window.traces["BLOCK"]["unlem_pretty"] = ''
window.traces["BLOCK"]["unlem_pretty__raw"] = ''
window.traces["BLOCK"]["unlem_pretty"] += `<pre class=''>def bt = imm_readBlockType();
doBlock(bt);
</pre>`;
window.traces["BLOCK"]["unlem_pretty__raw"] += `def bt = imm_readBlockType();
doBlock(bt);
`;
window.traces["BLOCK"]["constUnLEM"] = ''
window.traces["BLOCK"]["constUnLEM__raw"] = ''
window.traces["BLOCK"]["constUnLEM"] += `<pre class='graph'>---
config:
  layout: elk
---
graph TD
	1[\\"Finish"/]
	5 -. Codeptr Stack Trap Locals Globals Tables Memory Extra .-> 1
	5["eff__2 doBlock"]
	3 --> 5
	3 -. Codeptr .-> 5
	0 -. Stack Trap Locals Globals Tables Memory Extra .-> 5
	0[/"Start"\\]
	3["bt imm_readBlockType"]
	0 -. Codeptr .-> 3
</pre>`;
window.traces["BLOCK"]["constUnLEM__raw"] += `---
config:
  layout: elk
---
graph TD
	1[\\"Finish"/]
	5 -. Codeptr Stack Trap Locals Globals Tables Memory Extra .-> 1
	5["eff__2 doBlock"]
	3 --> 5
	3 -. Codeptr .-> 5
	0 -. Stack Trap Locals Globals Tables Memory Extra .-> 5
	0[/"Start"\\]
	3["bt imm_readBlockType"]
	0 -. Codeptr .-> 3
`;
window.traces["BLOCK"]["chooseMerge"] = ''
window.traces["BLOCK"]["chooseMerge__raw"] = ''
window.traces["BLOCK"]["chooseMerge"] += `<pre class='graph'>---
config:
  layout: elk
---
graph TD
	1[\\"Finish"/]
	5 -. Codeptr Stack Trap Locals Globals Tables Memory Extra .-> 1
	5["eff__2 doBlock"]
	3 --> 5
	3 -. Codeptr .-> 5
	0 -. Stack Trap Locals Globals Tables Memory Extra .-> 5
	0[/"Start"\\]
	3["bt imm_readBlockType"]
	0 -. Codeptr .-> 3
</pre>`;
window.traces["BLOCK"]["chooseMerge__raw"] += `---
config:
  layout: elk
---
graph TD
	1[\\"Finish"/]
	5 -. Codeptr Stack Trap Locals Globals Tables Memory Extra .-> 1
	5["eff__2 doBlock"]
	3 --> 5
	3 -. Codeptr .-> 5
	0 -. Stack Trap Locals Globals Tables Memory Extra .-> 5
	0[/"Start"\\]
	3["bt imm_readBlockType"]
	0 -. Codeptr .-> 3
`;
window.traces["BLOCK"]["scheduled"] = ''
window.traces["BLOCK"]["scheduled__raw"] = ''
window.traces["BLOCK"]["scheduled"] += `<pre class=''>def bt = imm_readBlockType();
def eff__2 = doBlock(bt);
</pre>`;
window.traces["BLOCK"]["scheduled__raw"] += `def bt = imm_readBlockType();
def eff__2 = doBlock(bt);
`;
window.traces["BLOCK"]["pretty"] = ''
window.traces["BLOCK"]["pretty__raw"] = ''
window.traces["BLOCK"]["pretty"] += `<pre class=''>def bt = imm_readBlockType();
doBlock(bt);
</pre>`;
window.traces["BLOCK"]["pretty__raw"] += `def bt = imm_readBlockType();
doBlock(bt);
`;
window.traces["LOOP"] = {}
window.traces["LOOP"]["parsed"] = ''
window.traces["LOOP"]["parsed__raw"] = ''
window.traces["LOOP"]["parsed"] += `<pre class=''>def bt = imm_readBlockType();
def arg__5 = (bt);
def eff__4 = doLoop(arg__5);
</pre>`;
window.traces["LOOP"]["parsed__raw"] += `def bt = imm_readBlockType();
def arg__5 = (bt);
def eff__4 = doLoop(arg__5);
`;
window.traces["LOOP"]["raw"] = ''
window.traces["LOOP"]["raw__raw"] = ''
window.traces["LOOP"]["raw"] += `<pre class='graph'>---
config:
  layout: elk
---
graph TD
	1[\\"Finish"/]
	5 -. Codeptr Stack Trap Locals Globals Tables Memory Extra .-> 1
	5["eff__4 doLoop"]
	3 --> 5
	3 -. Codeptr .-> 5
	0 -. Stack Trap Locals Globals Tables Memory Extra .-> 5
	0[/"Start"\\]
	3["bt imm_readBlockType"]
	0 -. Codeptr .-> 3
</pre>`;
window.traces["LOOP"]["raw__raw"] += `---
config:
  layout: elk
---
graph TD
	1[\\"Finish"/]
	5 -. Codeptr Stack Trap Locals Globals Tables Memory Extra .-> 1
	5["eff__4 doLoop"]
	3 --> 5
	3 -. Codeptr .-> 5
	0 -. Stack Trap Locals Globals Tables Memory Extra .-> 5
	0[/"Start"\\]
	3["bt imm_readBlockType"]
	0 -. Codeptr .-> 3
`;
window.traces["LOOP"]["spytial"] = ''
window.traces["LOOP"]["spytial__raw"] = ''
window.traces["LOOP"]["spytial"] += `<pre class=''>{
"atoms": [
{
"id": "node_1",
"type": "finish",
"label": "Finish"
},
{
"id": "node_5",
"type": "intrinsic",
"label": "doLoop [eff__4]"
},
{
"id": "node_3",
"type": "intrinsic",
"label": "imm_readBlockType [bt]"
},
{
"id": "node_0",
"type": "start",
"label": "Start"
}
],
"relations": [
{
"id": "uses",
"name": "Uses",
"types": ["sea_node", "sea_node"],
"tuples": [
{
"atoms": ["node_5", "node_3"],
"types": ["intrinsic", "intrinsic"]
}
]
},
{
"id": "state_uses",
"name": "StateUses",
"types": ["sea_node", "sea_node"],
"tuples": [
{
"atoms": ["node_1", "node_5"],
"types": ["finish", "intrinsic"]
},
{
"atoms": ["node_5", "node_3"],
"types": ["intrinsic", "intrinsic"]
},
{
"atoms": ["node_5", "node_0"],
"types": ["intrinsic", "start"]
},
{
"atoms": ["node_3", "node_0"],
"types": ["intrinsic", "start"]
}
]
}
]
}</pre>`;
window.traces["LOOP"]["spytial__raw"] += `{
"atoms": [
{
"id": "node_1",
"type": "finish",
"label": "Finish"
},
{
"id": "node_5",
"type": "intrinsic",
"label": "doLoop [eff__4]"
},
{
"id": "node_3",
"type": "intrinsic",
"label": "imm_readBlockType [bt]"
},
{
"id": "node_0",
"type": "start",
"label": "Start"
}
],
"relations": [
{
"id": "uses",
"name": "Uses",
"types": ["sea_node", "sea_node"],
"tuples": [
{
"atoms": ["node_5", "node_3"],
"types": ["intrinsic", "intrinsic"]
}
]
},
{
"id": "state_uses",
"name": "StateUses",
"types": ["sea_node", "sea_node"],
"tuples": [
{
"atoms": ["node_1", "node_5"],
"types": ["finish", "intrinsic"]
},
{
"atoms": ["node_5", "node_3"],
"types": ["intrinsic", "intrinsic"]
},
{
"atoms": ["node_5", "node_0"],
"types": ["intrinsic", "start"]
},
{
"atoms": ["node_3", "node_0"],
"types": ["intrinsic", "start"]
}
]
}
]
}`;
window.traces["LOOP"]["overloadOps"] = ''
window.traces["LOOP"]["overloadOps__raw"] = ''
window.traces["LOOP"]["overloadOps"] += `<pre class='graph'>---
config:
  layout: elk
---
graph TD
	1[\\"Finish"/]
	5 -. Codeptr Stack Trap Locals Globals Tables Memory Extra .-> 1
	5["eff__4 doLoop"]
	3 --> 5
	3 -. Codeptr .-> 5
	0 -. Stack Trap Locals Globals Tables Memory Extra .-> 5
	0[/"Start"\\]
	3["bt imm_readBlockType"]
	0 -. Codeptr .-> 3
</pre>`;
window.traces["LOOP"]["overloadOps__raw"] += `---
config:
  layout: elk
---
graph TD
	1[\\"Finish"/]
	5 -. Codeptr Stack Trap Locals Globals Tables Memory Extra .-> 1
	5["eff__4 doLoop"]
	3 --> 5
	3 -. Codeptr .-> 5
	0 -. Stack Trap Locals Globals Tables Memory Extra .-> 5
	0[/"Start"\\]
	3["bt imm_readBlockType"]
	0 -. Codeptr .-> 3
`;
window.traces["LOOP"]["addAbstractions"] = ''
window.traces["LOOP"]["addAbstractions__raw"] = ''
window.traces["LOOP"]["addAbstractions"] += `<pre class='graph'>---
config:
  layout: elk
---
graph TD
	1[\\"Finish"/]
	5 -. Codeptr Stack Trap Locals Globals Tables Memory Extra .-> 1
	5["eff__4 doLoop"]
	3 --> 5
	3 -. Codeptr .-> 5
	0 -. Stack Trap Locals Globals Tables Memory Extra .-> 5
	0[/"Start"\\]
	3["bt imm_readBlockType"]
	0 -. Codeptr .-> 3
</pre>`;
window.traces["LOOP"]["addAbstractions__raw"] += `---
config:
  layout: elk
---
graph TD
	1[\\"Finish"/]
	5 -. Codeptr Stack Trap Locals Globals Tables Memory Extra .-> 1
	5["eff__4 doLoop"]
	3 --> 5
	3 -. Codeptr .-> 5
	0 -. Stack Trap Locals Globals Tables Memory Extra .-> 5
	0[/"Start"\\]
	3["bt imm_readBlockType"]
	0 -. Codeptr .-> 3
`;
window.traces["LOOP"]["schedulerMermaid"] = ''
window.traces["LOOP"]["schedulerMermaid__raw"] = ''
window.traces["LOOP"]["schedulerMermaid"] += `<pre class='graph'>graph TD
subgraph block_7["Block 7"]
	direction TB
	b7_0[/"Start"\\]
	b7_3["bt imm_readBlockType"]
	b7_5["eff__4 doLoop"]
	b7_1[\\"Finish"/]
	b7_0 --> b7_3
	b7_3 --> b7_5
	b7_5 --> b7_1
end

</pre>`;
window.traces["LOOP"]["schedulerMermaid__raw"] += `graph TD
subgraph block_7["Block 7"]
	direction TB
	b7_0[/"Start"\\]
	b7_3["bt imm_readBlockType"]
	b7_5["eff__4 doLoop"]
	b7_1[\\"Finish"/]
	b7_0 --> b7_3
	b7_3 --> b7_5
	b7_5 --> b7_1
end

`;
window.traces["LOOP"]["unLEM"] = ''
window.traces["LOOP"]["unLEM__raw"] = ''
window.traces["LOOP"]["unLEM"] += `<pre class='graph'>---
config:
  layout: elk
---
graph TD
	1[\\"Finish"/]
	5 -. Codeptr Stack Trap Locals Globals Tables Memory Extra .-> 1
	5["eff__4 doLoop"]
	3 --> 5
	3 -. Codeptr .-> 5
	0 -. Stack Trap Locals Globals Tables Memory Extra .-> 5
	0[/"Start"\\]
	3["bt imm_readBlockType"]
	0 -. Codeptr .-> 3
</pre>`;
window.traces["LOOP"]["unLEM__raw"] += `---
config:
  layout: elk
---
graph TD
	1[\\"Finish"/]
	5 -. Codeptr Stack Trap Locals Globals Tables Memory Extra .-> 1
	5["eff__4 doLoop"]
	3 --> 5
	3 -. Codeptr .-> 5
	0 -. Stack Trap Locals Globals Tables Memory Extra .-> 5
	0[/"Start"\\]
	3["bt imm_readBlockType"]
	0 -. Codeptr .-> 3
`;
window.traces["LOOP"]["unlem_schedule"] = ''
window.traces["LOOP"]["unlem_schedule__raw"] = ''
window.traces["LOOP"]["unlem_schedule"] += `<pre class=''>def bt = imm_readBlockType();
def eff__4 = doLoop(bt);
</pre>`;
window.traces["LOOP"]["unlem_schedule__raw"] += `def bt = imm_readBlockType();
def eff__4 = doLoop(bt);
`;
window.traces["LOOP"]["spytial_ul"] = ''
window.traces["LOOP"]["spytial_ul__raw"] = ''
window.traces["LOOP"]["spytial_ul"] += `<pre class=''>{
"atoms": [
{
"id": "node_1",
"type": "finish",
"label": "Finish"
},
{
"id": "node_5",
"type": "intrinsic",
"label": "doLoop [eff__4]"
},
{
"id": "node_3",
"type": "intrinsic",
"label": "imm_readBlockType [bt]"
},
{
"id": "node_0",
"type": "start",
"label": "Start"
}
],
"relations": [
{
"id": "uses",
"name": "Uses",
"types": ["sea_node", "sea_node"],
"tuples": [
{
"atoms": ["node_5", "node_3"],
"types": ["intrinsic", "intrinsic"]
}
]
},
{
"id": "state_uses",
"name": "StateUses",
"types": ["sea_node", "sea_node"],
"tuples": [
{
"atoms": ["node_1", "node_5"],
"types": ["finish", "intrinsic"]
},
{
"atoms": ["node_5", "node_3"],
"types": ["intrinsic", "intrinsic"]
},
{
"atoms": ["node_5", "node_0"],
"types": ["intrinsic", "start"]
},
{
"atoms": ["node_3", "node_0"],
"types": ["intrinsic", "start"]
}
]
}
]
}</pre>`;
window.traces["LOOP"]["spytial_ul__raw"] += `{
"atoms": [
{
"id": "node_1",
"type": "finish",
"label": "Finish"
},
{
"id": "node_5",
"type": "intrinsic",
"label": "doLoop [eff__4]"
},
{
"id": "node_3",
"type": "intrinsic",
"label": "imm_readBlockType [bt]"
},
{
"id": "node_0",
"type": "start",
"label": "Start"
}
],
"relations": [
{
"id": "uses",
"name": "Uses",
"types": ["sea_node", "sea_node"],
"tuples": [
{
"atoms": ["node_5", "node_3"],
"types": ["intrinsic", "intrinsic"]
}
]
},
{
"id": "state_uses",
"name": "StateUses",
"types": ["sea_node", "sea_node"],
"tuples": [
{
"atoms": ["node_1", "node_5"],
"types": ["finish", "intrinsic"]
},
{
"atoms": ["node_5", "node_3"],
"types": ["intrinsic", "intrinsic"]
},
{
"atoms": ["node_5", "node_0"],
"types": ["intrinsic", "start"]
},
{
"atoms": ["node_3", "node_0"],
"types": ["intrinsic", "start"]
}
]
}
]
}`;
window.traces["LOOP"]["unlem_scheduler"] = ''
window.traces["LOOP"]["unlem_scheduler__raw"] = ''
window.traces["LOOP"]["unlem_scheduler"] += `<pre class='graph'>graph TD
subgraph block_8["Block 8"]
	direction TB
	b8_0[/"Start"\\]
	b8_3["bt imm_readBlockType"]
	b8_5["eff__4 doLoop"]
	b8_1[\\"Finish"/]
	b8_0 --> b8_3
	b8_3 --> b8_5
	b8_5 --> b8_1
end

</pre>`;
window.traces["LOOP"]["unlem_scheduler__raw"] += `graph TD
subgraph block_8["Block 8"]
	direction TB
	b8_0[/"Start"\\]
	b8_3["bt imm_readBlockType"]
	b8_5["eff__4 doLoop"]
	b8_1[\\"Finish"/]
	b8_0 --> b8_3
	b8_3 --> b8_5
	b8_5 --> b8_1
end

`;
window.traces["LOOP"]["unlem_pretty"] = ''
window.traces["LOOP"]["unlem_pretty__raw"] = ''
window.traces["LOOP"]["unlem_pretty"] += `<pre class=''>def bt = imm_readBlockType();
doLoop(bt);
</pre>`;
window.traces["LOOP"]["unlem_pretty__raw"] += `def bt = imm_readBlockType();
doLoop(bt);
`;
window.traces["LOOP"]["constUnLEM"] = ''
window.traces["LOOP"]["constUnLEM__raw"] = ''
window.traces["LOOP"]["constUnLEM"] += `<pre class='graph'>---
config:
  layout: elk
---
graph TD
	1[\\"Finish"/]
	5 -. Codeptr Stack Trap Locals Globals Tables Memory Extra .-> 1
	5["eff__4 doLoop"]
	3 --> 5
	3 -. Codeptr .-> 5
	0 -. Stack Trap Locals Globals Tables Memory Extra .-> 5
	0[/"Start"\\]
	3["bt imm_readBlockType"]
	0 -. Codeptr .-> 3
</pre>`;
window.traces["LOOP"]["constUnLEM__raw"] += `---
config:
  layout: elk
---
graph TD
	1[\\"Finish"/]
	5 -. Codeptr Stack Trap Locals Globals Tables Memory Extra .-> 1
	5["eff__4 doLoop"]
	3 --> 5
	3 -. Codeptr .-> 5
	0 -. Stack Trap Locals Globals Tables Memory Extra .-> 5
	0[/"Start"\\]
	3["bt imm_readBlockType"]
	0 -. Codeptr .-> 3
`;
window.traces["LOOP"]["chooseMerge"] = ''
window.traces["LOOP"]["chooseMerge__raw"] = ''
window.traces["LOOP"]["chooseMerge"] += `<pre class='graph'>---
config:
  layout: elk
---
graph TD
	1[\\"Finish"/]
	5 -. Codeptr Stack Trap Locals Globals Tables Memory Extra .-> 1
	5["eff__4 doLoop"]
	3 --> 5
	3 -. Codeptr .-> 5
	0 -. Stack Trap Locals Globals Tables Memory Extra .-> 5
	0[/"Start"\\]
	3["bt imm_readBlockType"]
	0 -. Codeptr .-> 3
</pre>`;
window.traces["LOOP"]["chooseMerge__raw"] += `---
config:
  layout: elk
---
graph TD
	1[\\"Finish"/]
	5 -. Codeptr Stack Trap Locals Globals Tables Memory Extra .-> 1
	5["eff__4 doLoop"]
	3 --> 5
	3 -. Codeptr .-> 5
	0 -. Stack Trap Locals Globals Tables Memory Extra .-> 5
	0[/"Start"\\]
	3["bt imm_readBlockType"]
	0 -. Codeptr .-> 3
`;
window.traces["LOOP"]["scheduled"] = ''
window.traces["LOOP"]["scheduled__raw"] = ''
window.traces["LOOP"]["scheduled"] += `<pre class=''>def bt = imm_readBlockType();
def eff__4 = doLoop(bt);
</pre>`;
window.traces["LOOP"]["scheduled__raw"] += `def bt = imm_readBlockType();
def eff__4 = doLoop(bt);
`;
window.traces["LOOP"]["pretty"] = ''
window.traces["LOOP"]["pretty__raw"] = ''
window.traces["LOOP"]["pretty"] += `<pre class=''>def bt = imm_readBlockType();
doLoop(bt);
</pre>`;
window.traces["LOOP"]["pretty__raw"] += `def bt = imm_readBlockType();
doLoop(bt);
`;
window.traces["IF"] = {}
window.traces["IF"]["parsed"] = ''
window.traces["IF"]["parsed__raw"] = ''
window.traces["IF"]["parsed"] += `<pre class=''>def bt = imm_readBlockType();
def cond = pop_u32();
def arg__12 = (bt);
def label = doIf(arg__12);
def arg__11 : u32 = 0;
def arg__10 = (cond);
def cond__6 = u32.==(arg__10, arg__11);
if (cond__6) {
	def arg__8 = (label);
	def eff__7 = doBranch(arg__8);
} else {
	def eff__9 = doFallthru();
}
// phis: 
</pre>`;
window.traces["IF"]["parsed__raw"] += `def bt = imm_readBlockType();
def cond = pop_u32();
def arg__12 = (bt);
def label = doIf(arg__12);
def arg__11 : u32 = 0;
def arg__10 = (cond);
def cond__6 = u32.==(arg__10, arg__11);
if (cond__6) {
	def arg__8 = (label);
	def eff__7 = doBranch(arg__8);
} else {
	def eff__9 = doFallthru();
}
// phis: 
`;
window.traces["IF"]["raw"] = ''
window.traces["IF"]["raw__raw"] = ''
window.traces["IF"]["raw"] += `<pre class='graph'>---
config:
  layout: elk
---
graph TD
	1[\\"Finish"/]
	13 -. Codeptr Stack Trap Locals Globals Tables Memory Extra .-> 1
	13{{"Sϕ Codeptr Stack Trap Locals Globals Tables Memory Extra "}}
	9 --> 13
	12 --> 13
	10 --> 13
	10["eff__9 doFallthru"]
	6 -. Codeptr Stack Trap Locals Globals Tables Memory Extra .-> 10
	6["label doIf"]
	3 --> 6
	3 -. Codeptr .-> 6
	4 -. Stack .-> 6
	0 -. Trap Locals Globals Tables Memory Extra .-> 6
	0[/"Start"\\]
	4["cond pop_u32"]
	0 -. Stack .-> 4
	3["bt imm_readBlockType"]
	0 -. Codeptr .-> 3
	12["eff__7 doBranch"]
	6 --> 12
	6 -. Codeptr Stack Trap Locals Globals Tables Memory Extra .-> 12
	9["cond__6 u32.=="]
	4 --> 9
	7 --> 9
	7["arg__11 0"]
</pre>`;
window.traces["IF"]["raw__raw"] += `---
config:
  layout: elk
---
graph TD
	1[\\"Finish"/]
	13 -. Codeptr Stack Trap Locals Globals Tables Memory Extra .-> 1
	13{{"Sϕ Codeptr Stack Trap Locals Globals Tables Memory Extra "}}
	9 --> 13
	12 --> 13
	10 --> 13
	10["eff__9 doFallthru"]
	6 -. Codeptr Stack Trap Locals Globals Tables Memory Extra .-> 10
	6["label doIf"]
	3 --> 6
	3 -. Codeptr .-> 6
	4 -. Stack .-> 6
	0 -. Trap Locals Globals Tables Memory Extra .-> 6
	0[/"Start"\\]
	4["cond pop_u32"]
	0 -. Stack .-> 4
	3["bt imm_readBlockType"]
	0 -. Codeptr .-> 3
	12["eff__7 doBranch"]
	6 --> 12
	6 -. Codeptr Stack Trap Locals Globals Tables Memory Extra .-> 12
	9["cond__6 u32.=="]
	4 --> 9
	7 --> 9
	7["arg__11 0"]
`;
window.traces["IF"]["spytial"] = ''
window.traces["IF"]["spytial__raw"] = ''
window.traces["IF"]["spytial"] += `<pre class=''>{
"atoms": [
{
"id": "node_1",
"type": "finish",
"label": "Finish"
},
{
"id": "node_13",
"type": "state_phi",
"label": "StatePhi [u32.== [cond__6]]"
},
{
"id": "node_9",
"type": "intrinsic",
"label": "u32.== [cond__6]"
},
{
"id": "node_12",
"type": "intrinsic",
"label": "doBranch [eff__7]"
},
{
"id": "node_10",
"type": "intrinsic",
"label": "doFallthru [eff__9]"
},
{
"id": "node_4",
"type": "intrinsic",
"label": "pop_u32 [cond]"
},
{
"id": "node_7",
"type": "lit",
"label": "0"
},
{
"id": "node_6",
"type": "intrinsic",
"label": "doIf [label]"
},
{
"id": "node_0",
"type": "start",
"label": "Start"
},
{
"id": "node_3",
"type": "intrinsic",
"label": "imm_readBlockType [bt]"
}
],
"relations": [
{
"id": "uses",
"name": "Uses",
"types": ["sea_node", "sea_node"],
"tuples": [
{
"atoms": ["node_9", "node_4"],
"types": ["intrinsic", "intrinsic"]
},
{
"atoms": ["node_9", "node_7"],
"types": ["intrinsic", "lit"]
},
{
"atoms": ["node_12", "node_6"],
"types": ["intrinsic", "intrinsic"]
},
{
"atoms": ["node_6", "node_3"],
"types": ["intrinsic", "intrinsic"]
}
]
},
{
"id": "state_uses",
"name": "StateUses",
"types": ["sea_node", "sea_node"],
"tuples": [
{
"atoms": ["node_1", "node_13"],
"types": ["finish", "state_phi"]
},
{
"atoms": ["node_12", "node_6"],
"types": ["intrinsic", "intrinsic"]
},
{
"atoms": ["node_10", "node_6"],
"types": ["intrinsic", "intrinsic"]
},
{
"atoms": ["node_4", "node_0"],
"types": ["intrinsic", "start"]
},
{
"atoms": ["node_6", "node_3"],
"types": ["intrinsic", "intrinsic"]
},
{
"atoms": ["node_6", "node_4"],
"types": ["intrinsic", "intrinsic"]
},
{
"atoms": ["node_6", "node_0"],
"types": ["intrinsic", "start"]
},
{
"atoms": ["node_3", "node_0"],
"types": ["intrinsic", "start"]
}
]
},
{
"id": "phi_cond",
"name": "PhiCond",
"types": ["sea_node", "sea_node"],
"tuples": [
{
"atoms": ["node_13", "node_9"],
"types": ["state_phi", "intrinsic"]
}
]
},
{
"id": "phi_true",
"name": "PhiTrue",
"types": ["sea_node", "sea_node"],
"tuples": [
{
"atoms": ["node_13", "node_12"],
"types": ["state_phi", "intrinsic"]
}
]
},
{
"id": "phi_false",
"name": "PhiFalse",
"types": ["sea_node", "sea_node"],
"tuples": [
{
"atoms": ["node_13", "node_10"],
"types": ["state_phi", "intrinsic"]
}
]
}
]
}</pre>`;
window.traces["IF"]["spytial__raw"] += `{
"atoms": [
{
"id": "node_1",
"type": "finish",
"label": "Finish"
},
{
"id": "node_13",
"type": "state_phi",
"label": "StatePhi [u32.== [cond__6]]"
},
{
"id": "node_9",
"type": "intrinsic",
"label": "u32.== [cond__6]"
},
{
"id": "node_12",
"type": "intrinsic",
"label": "doBranch [eff__7]"
},
{
"id": "node_10",
"type": "intrinsic",
"label": "doFallthru [eff__9]"
},
{
"id": "node_4",
"type": "intrinsic",
"label": "pop_u32 [cond]"
},
{
"id": "node_7",
"type": "lit",
"label": "0"
},
{
"id": "node_6",
"type": "intrinsic",
"label": "doIf [label]"
},
{
"id": "node_0",
"type": "start",
"label": "Start"
},
{
"id": "node_3",
"type": "intrinsic",
"label": "imm_readBlockType [bt]"
}
],
"relations": [
{
"id": "uses",
"name": "Uses",
"types": ["sea_node", "sea_node"],
"tuples": [
{
"atoms": ["node_9", "node_4"],
"types": ["intrinsic", "intrinsic"]
},
{
"atoms": ["node_9", "node_7"],
"types": ["intrinsic", "lit"]
},
{
"atoms": ["node_12", "node_6"],
"types": ["intrinsic", "intrinsic"]
},
{
"atoms": ["node_6", "node_3"],
"types": ["intrinsic", "intrinsic"]
}
]
},
{
"id": "state_uses",
"name": "StateUses",
"types": ["sea_node", "sea_node"],
"tuples": [
{
"atoms": ["node_1", "node_13"],
"types": ["finish", "state_phi"]
},
{
"atoms": ["node_12", "node_6"],
"types": ["intrinsic", "intrinsic"]
},
{
"atoms": ["node_10", "node_6"],
"types": ["intrinsic", "intrinsic"]
},
{
"atoms": ["node_4", "node_0"],
"types": ["intrinsic", "start"]
},
{
"atoms": ["node_6", "node_3"],
"types": ["intrinsic", "intrinsic"]
},
{
"atoms": ["node_6", "node_4"],
"types": ["intrinsic", "intrinsic"]
},
{
"atoms": ["node_6", "node_0"],
"types": ["intrinsic", "start"]
},
{
"atoms": ["node_3", "node_0"],
"types": ["intrinsic", "start"]
}
]
},
{
"id": "phi_cond",
"name": "PhiCond",
"types": ["sea_node", "sea_node"],
"tuples": [
{
"atoms": ["node_13", "node_9"],
"types": ["state_phi", "intrinsic"]
}
]
},
{
"id": "phi_true",
"name": "PhiTrue",
"types": ["sea_node", "sea_node"],
"tuples": [
{
"atoms": ["node_13", "node_12"],
"types": ["state_phi", "intrinsic"]
}
]
},
{
"id": "phi_false",
"name": "PhiFalse",
"types": ["sea_node", "sea_node"],
"tuples": [
{
"atoms": ["node_13", "node_10"],
"types": ["state_phi", "intrinsic"]
}
]
}
]
}`;
window.traces["IF"]["overloadOps"] = ''
window.traces["IF"]["overloadOps__raw"] = ''
window.traces["IF"]["overloadOps"] += `<pre class='graph'>---
config:
  layout: elk
---
graph TD
	1[\\"Finish"/]
	13 -. Codeptr Stack Trap Locals Globals Tables Memory .-> 1
	14 -. Extra .-> 1
	14["eff_st_put__13 ctlxfer.put_IF"]
	6 --> 14
	13 -. Extra .-> 14
	13{{"Sϕ Codeptr Stack Trap Locals Globals Tables Memory Extra "}}
	9 --> 13
	12 --> 13
	10 --> 13
	10["eff__9 doFallthru"]
	6 -. Codeptr Stack Trap Locals Globals Tables Memory Extra .-> 10
	6["label doIf"]
	3 --> 6
	3 -. Codeptr .-> 6
	4 -. Stack .-> 6
	0 -. Trap Locals Globals Tables Memory Extra .-> 6
	0[/"Start"\\]
	4["cond pop_u32"]
	0 -. Stack .-> 4
	3["bt imm_readBlockType"]
	0 -. Codeptr .-> 3
	12["eff__7 doBranch"]
	6 --> 12
	6 -. Codeptr Stack Trap Locals Globals Tables Memory Extra .-> 12
	9["cond__6 U32_equals"]
	4 --> 9
	7 --> 9
	7["arg__11 0"]
</pre>`;
window.traces["IF"]["overloadOps__raw"] += `---
config:
  layout: elk
---
graph TD
	1[\\"Finish"/]
	13 -. Codeptr Stack Trap Locals Globals Tables Memory .-> 1
	14 -. Extra .-> 1
	14["eff_st_put__13 ctlxfer.put_IF"]
	6 --> 14
	13 -. Extra .-> 14
	13{{"Sϕ Codeptr Stack Trap Locals Globals Tables Memory Extra "}}
	9 --> 13
	12 --> 13
	10 --> 13
	10["eff__9 doFallthru"]
	6 -. Codeptr Stack Trap Locals Globals Tables Memory Extra .-> 10
	6["label doIf"]
	3 --> 6
	3 -. Codeptr .-> 6
	4 -. Stack .-> 6
	0 -. Trap Locals Globals Tables Memory Extra .-> 6
	0[/"Start"\\]
	4["cond pop_u32"]
	0 -. Stack .-> 4
	3["bt imm_readBlockType"]
	0 -. Codeptr .-> 3
	12["eff__7 doBranch"]
	6 --> 12
	6 -. Codeptr Stack Trap Locals Globals Tables Memory Extra .-> 12
	9["cond__6 U32_equals"]
	4 --> 9
	7 --> 9
	7["arg__11 0"]
`;
window.traces["IF"]["addAbstractions"] = ''
window.traces["IF"]["addAbstractions__raw"] = ''
window.traces["IF"]["addAbstractions"] += `<pre class='graph'>---
config:
  layout: elk
---
graph TD
	1[\\"Finish"/]
	13 -. Codeptr Stack Trap Locals Globals Tables Memory .-> 1
	14 -. Extra .-> 1
	14["eff_st_put__13 ctlxfer.put_IF"]
	6 --> 14
	13 -. Extra .-> 14
	13{{"Sϕ Codeptr Stack Trap Locals Globals Tables Memory Extra "}}
	9 --> 13
	12 --> 13
	10 --> 13
	10["eff__9 doFallthru"]
	6 -. Codeptr Stack Trap Locals Globals Tables Memory Extra .-> 10
	6["label doIf"]
	3 --> 6
	3 -. Codeptr .-> 6
	4 -. Stack .-> 6
	0 -. Trap Locals Globals Tables Memory Extra .-> 6
	0[/"Start"\\]
	4["cond pop_u32"]
	0 -. Stack .-> 4
	3["bt imm_readBlockType"]
	0 -. Codeptr .-> 3
	12["eff__7 doBranch"]
	6 --> 12
	6 -. Codeptr Stack Trap Locals Globals Tables Memory Extra .-> 12
	9["cond__6 U32_equals"]
	4 --> 9
	15 --> 9
	15["abs__14 lift_u32"]
	7 --> 15
	7["arg__11 0"]
</pre>`;
window.traces["IF"]["addAbstractions__raw"] += `---
config:
  layout: elk
---
graph TD
	1[\\"Finish"/]
	13 -. Codeptr Stack Trap Locals Globals Tables Memory .-> 1
	14 -. Extra .-> 1
	14["eff_st_put__13 ctlxfer.put_IF"]
	6 --> 14
	13 -. Extra .-> 14
	13{{"Sϕ Codeptr Stack Trap Locals Globals Tables Memory Extra "}}
	9 --> 13
	12 --> 13
	10 --> 13
	10["eff__9 doFallthru"]
	6 -. Codeptr Stack Trap Locals Globals Tables Memory Extra .-> 10
	6["label doIf"]
	3 --> 6
	3 -. Codeptr .-> 6
	4 -. Stack .-> 6
	0 -. Trap Locals Globals Tables Memory Extra .-> 6
	0[/"Start"\\]
	4["cond pop_u32"]
	0 -. Stack .-> 4
	3["bt imm_readBlockType"]
	0 -. Codeptr .-> 3
	12["eff__7 doBranch"]
	6 --> 12
	6 -. Codeptr Stack Trap Locals Globals Tables Memory Extra .-> 12
	9["cond__6 U32_equals"]
	4 --> 9
	15 --> 9
	15["abs__14 lift_u32"]
	7 --> 15
	7["arg__11 0"]
`;
window.traces["IF"]["sched Finish"] = ''
window.traces["IF"]["sched Finish__raw"] = ''
window.traces["IF"]["sched Finish"] += `<pre class='graph'>graph TD
subgraph block_9["Block 9"]
	direction TB
	b9_1[\\"Finish"/]
end

</pre>`;
window.traces["IF"]["sched Finish__raw"] += `graph TD
subgraph block_9["Block 9"]
	direction TB
	b9_1[\\"Finish"/]
end

`;
window.traces["IF"]["sched ctlxfer.put_IF [eff_st_put__13]"] = ''
window.traces["IF"]["sched ctlxfer.put_IF [eff_st_put__13]__raw"] = ''
window.traces["IF"]["sched ctlxfer.put_IF [eff_st_put__13]"] += `<pre class='graph'>graph TD
subgraph block_9["Block 9"]
	direction TB
	b9_1[\\"Finish"/]
	b9_14["eff_st_put__13 ctlxfer.put_IF"]
	b9_14 --> b9_1
end

</pre>`;
window.traces["IF"]["sched ctlxfer.put_IF [eff_st_put__13]__raw"] += `graph TD
subgraph block_9["Block 9"]
	direction TB
	b9_1[\\"Finish"/]
	b9_14["eff_st_put__13 ctlxfer.put_IF"]
	b9_14 --> b9_1
end

`;
window.traces["IF"]["sched StatePhi [U32_equals [cond__6]]"] = ''
window.traces["IF"]["sched StatePhi [U32_equals [cond__6]]__raw"] = ''
window.traces["IF"]["sched StatePhi [U32_equals [cond__6]]"] += `<pre class='graph'>graph TD
subgraph block_9["Block 9"]
	direction TB
	b9_1[\\"Finish"/]
	b9_14["eff_st_put__13 ctlxfer.put_IF"]
	b9_14 --> b9_1
end
phi_11 --> block_9
subgraph phi_11["Phi 11"]
	p11_13{{"Sϕ Codeptr Stack Trap Locals Globals Tables Memory Extra "}}
end
block_12 --> phi_11
block_13 --> phi_11
subgraph block_12["Block 12"]
	direction TB
end
branch_10 --> block_12
subgraph branch_10["Branch 10"]
	br10_9["cond__6 U32_equals"]

end
subgraph block_13["Block 13"]
	direction TB
end
branch_10 --> block_13

</pre>`;
window.traces["IF"]["sched StatePhi [U32_equals [cond__6]]__raw"] += `graph TD
subgraph block_9["Block 9"]
	direction TB
	b9_1[\\"Finish"/]
	b9_14["eff_st_put__13 ctlxfer.put_IF"]
	b9_14 --> b9_1
end
phi_11 --> block_9
subgraph phi_11["Phi 11"]
	p11_13{{"Sϕ Codeptr Stack Trap Locals Globals Tables Memory Extra "}}
end
block_12 --> phi_11
block_13 --> phi_11
subgraph block_12["Block 12"]
	direction TB
end
branch_10 --> block_12
subgraph branch_10["Branch 10"]
	br10_9["cond__6 U32_equals"]

end
subgraph block_13["Block 13"]
	direction TB
end
branch_10 --> block_13

`;
window.traces["IF"]["sched doBranch [eff__7]"] = ''
window.traces["IF"]["sched doBranch [eff__7]__raw"] = ''
window.traces["IF"]["sched doBranch [eff__7]"] += `<pre class='graph'>graph TD
subgraph block_9["Block 9"]
	direction TB
	b9_1[\\"Finish"/]
	b9_14["eff_st_put__13 ctlxfer.put_IF"]
	b9_14 --> b9_1
end
phi_11 --> block_9
subgraph phi_11["Phi 11"]
	p11_13{{"Sϕ Codeptr Stack Trap Locals Globals Tables Memory Extra "}}
	p11_13{{"Sϕ Codeptr Stack Trap Locals Globals Tables Memory Extra "}}
end
block_12 --> phi_11
block_13 --> phi_11
subgraph block_12["Block 12"]
	direction TB
	b12_12["eff__7 doBranch"]
end
branch_10 --> block_12
subgraph branch_10["Branch 10"]
	br10_9["cond__6 U32_equals"]

end
subgraph block_13["Block 13"]
	direction TB
end
branch_10 --> block_13

</pre>`;
window.traces["IF"]["sched doBranch [eff__7]__raw"] += `graph TD
subgraph block_9["Block 9"]
	direction TB
	b9_1[\\"Finish"/]
	b9_14["eff_st_put__13 ctlxfer.put_IF"]
	b9_14 --> b9_1
end
phi_11 --> block_9
subgraph phi_11["Phi 11"]
	p11_13{{"Sϕ Codeptr Stack Trap Locals Globals Tables Memory Extra "}}
	p11_13{{"Sϕ Codeptr Stack Trap Locals Globals Tables Memory Extra "}}
end
block_12 --> phi_11
block_13 --> phi_11
subgraph block_12["Block 12"]
	direction TB
	b12_12["eff__7 doBranch"]
end
branch_10 --> block_12
subgraph branch_10["Branch 10"]
	br10_9["cond__6 U32_equals"]

end
subgraph block_13["Block 13"]
	direction TB
end
branch_10 --> block_13

`;
window.traces["IF"]["sched doFallthru [eff__9]"] = ''
window.traces["IF"]["sched doFallthru [eff__9]__raw"] = ''
window.traces["IF"]["sched doFallthru [eff__9]"] += `<pre class='graph'>graph TD
subgraph block_9["Block 9"]
	direction TB
	b9_1[\\"Finish"/]
	b9_14["eff_st_put__13 ctlxfer.put_IF"]
	b9_14 --> b9_1
end
phi_11 --> block_9
subgraph phi_11["Phi 11"]
	p11_13{{"Sϕ Codeptr Stack Trap Locals Globals Tables Memory Extra "}}
	p11_13{{"Sϕ Codeptr Stack Trap Locals Globals Tables Memory Extra "}}
end
block_12 --> phi_11
block_13 --> phi_11
subgraph block_12["Block 12"]
	direction TB
	b12_12["eff__7 doBranch"]
end
branch_10 --> block_12
subgraph branch_10["Branch 10"]
	br10_9["cond__6 U32_equals"]

end
subgraph block_13["Block 13"]
	direction TB
	b13_10["eff__9 doFallthru"]
end
branch_10 --> block_13

</pre>`;
window.traces["IF"]["sched doFallthru [eff__9]__raw"] += `graph TD
subgraph block_9["Block 9"]
	direction TB
	b9_1[\\"Finish"/]
	b9_14["eff_st_put__13 ctlxfer.put_IF"]
	b9_14 --> b9_1
end
phi_11 --> block_9
subgraph phi_11["Phi 11"]
	p11_13{{"Sϕ Codeptr Stack Trap Locals Globals Tables Memory Extra "}}
	p11_13{{"Sϕ Codeptr Stack Trap Locals Globals Tables Memory Extra "}}
end
block_12 --> phi_11
block_13 --> phi_11
subgraph block_12["Block 12"]
	direction TB
	b12_12["eff__7 doBranch"]
end
branch_10 --> block_12
subgraph branch_10["Branch 10"]
	br10_9["cond__6 U32_equals"]

end
subgraph block_13["Block 13"]
	direction TB
	b13_10["eff__9 doFallthru"]
end
branch_10 --> block_13

`;
window.traces["IF"]["sched doIf [label]"] = ''
window.traces["IF"]["sched doIf [label]__raw"] = ''
window.traces["IF"]["sched doIf [label]"] += `<pre class='graph'>graph TD
subgraph block_9["Block 9"]
	direction TB
	b9_1[\\"Finish"/]
	b9_14["eff_st_put__13 ctlxfer.put_IF"]
	b9_14 --> b9_1
end
phi_11 --> block_9
subgraph phi_11["Phi 11"]
	p11_13{{"Sϕ Codeptr Stack Trap Locals Globals Tables Memory Extra "}}
	p11_13{{"Sϕ Codeptr Stack Trap Locals Globals Tables Memory Extra "}}
end
block_12 --> phi_11
block_13 --> phi_11
subgraph block_12["Block 12"]
	direction TB
	b12_12["eff__7 doBranch"]
end
branch_10 --> block_12
subgraph branch_10["Branch 10"]
	br10_9["cond__6 U32_equals"]

end
block_14 --> branch_10
subgraph block_14["Block 14"]
	direction TB
	b14_9["cond__6 U32_equals"]
	b14_6["label doIf"]
	b14_6 --> b14_9
end
subgraph block_13["Block 13"]
	direction TB
	b13_10["eff__9 doFallthru"]
end
branch_10 --> block_13

</pre>`;
window.traces["IF"]["sched doIf [label]__raw"] += `graph TD
subgraph block_9["Block 9"]
	direction TB
	b9_1[\\"Finish"/]
	b9_14["eff_st_put__13 ctlxfer.put_IF"]
	b9_14 --> b9_1
end
phi_11 --> block_9
subgraph phi_11["Phi 11"]
	p11_13{{"Sϕ Codeptr Stack Trap Locals Globals Tables Memory Extra "}}
	p11_13{{"Sϕ Codeptr Stack Trap Locals Globals Tables Memory Extra "}}
end
block_12 --> phi_11
block_13 --> phi_11
subgraph block_12["Block 12"]
	direction TB
	b12_12["eff__7 doBranch"]
end
branch_10 --> block_12
subgraph branch_10["Branch 10"]
	br10_9["cond__6 U32_equals"]

end
block_14 --> branch_10
subgraph block_14["Block 14"]
	direction TB
	b14_9["cond__6 U32_equals"]
	b14_6["label doIf"]
	b14_6 --> b14_9
end
subgraph block_13["Block 13"]
	direction TB
	b13_10["eff__9 doFallthru"]
end
branch_10 --> block_13

`;
window.traces["IF"]["sched pop_u32 [cond]"] = ''
window.traces["IF"]["sched pop_u32 [cond]__raw"] = ''
window.traces["IF"]["sched pop_u32 [cond]"] += `<pre class='graph'>graph TD
subgraph block_9["Block 9"]
	direction TB
	b9_1[\\"Finish"/]
	b9_14["eff_st_put__13 ctlxfer.put_IF"]
	b9_14 --> b9_1
end
phi_11 --> block_9
subgraph phi_11["Phi 11"]
	p11_13{{"Sϕ Codeptr Stack Trap Locals Globals Tables Memory Extra "}}
	p11_13{{"Sϕ Codeptr Stack Trap Locals Globals Tables Memory Extra "}}
end
block_12 --> phi_11
block_13 --> phi_11
subgraph block_12["Block 12"]
	direction TB
	b12_12["eff__7 doBranch"]
end
branch_10 --> block_12
subgraph branch_10["Branch 10"]
	br10_9["cond__6 U32_equals"]

end
block_14 --> branch_10
subgraph block_14["Block 14"]
	direction TB
	b14_9["cond__6 U32_equals"]
	b14_6["label doIf"]
	b14_4["cond pop_u32"]
	b14_6 --> b14_9
	b14_4 --> b14_6
end
subgraph block_13["Block 13"]
	direction TB
	b13_10["eff__9 doFallthru"]
end
branch_10 --> block_13

</pre>`;
window.traces["IF"]["sched pop_u32 [cond]__raw"] += `graph TD
subgraph block_9["Block 9"]
	direction TB
	b9_1[\\"Finish"/]
	b9_14["eff_st_put__13 ctlxfer.put_IF"]
	b9_14 --> b9_1
end
phi_11 --> block_9
subgraph phi_11["Phi 11"]
	p11_13{{"Sϕ Codeptr Stack Trap Locals Globals Tables Memory Extra "}}
	p11_13{{"Sϕ Codeptr Stack Trap Locals Globals Tables Memory Extra "}}
end
block_12 --> phi_11
block_13 --> phi_11
subgraph block_12["Block 12"]
	direction TB
	b12_12["eff__7 doBranch"]
end
branch_10 --> block_12
subgraph branch_10["Branch 10"]
	br10_9["cond__6 U32_equals"]

end
block_14 --> branch_10
subgraph block_14["Block 14"]
	direction TB
	b14_9["cond__6 U32_equals"]
	b14_6["label doIf"]
	b14_4["cond pop_u32"]
	b14_6 --> b14_9
	b14_4 --> b14_6
end
subgraph block_13["Block 13"]
	direction TB
	b13_10["eff__9 doFallthru"]
end
branch_10 --> block_13

`;
window.traces["IF"]["sched lift_u32 [abs__14]"] = ''
window.traces["IF"]["sched lift_u32 [abs__14]__raw"] = ''
window.traces["IF"]["sched lift_u32 [abs__14]"] += `<pre class='graph'>graph TD
subgraph block_9["Block 9"]
	direction TB
	b9_1[\\"Finish"/]
	b9_14["eff_st_put__13 ctlxfer.put_IF"]
	b9_14 --> b9_1
end
phi_11 --> block_9
subgraph phi_11["Phi 11"]
	p11_13{{"Sϕ Codeptr Stack Trap Locals Globals Tables Memory Extra "}}
	p11_13{{"Sϕ Codeptr Stack Trap Locals Globals Tables Memory Extra "}}
end
block_12 --> phi_11
block_13 --> phi_11
subgraph block_12["Block 12"]
	direction TB
	b12_12["eff__7 doBranch"]
end
branch_10 --> block_12
subgraph branch_10["Branch 10"]
	br10_9["cond__6 U32_equals"]

end
block_14 --> branch_10
subgraph block_14["Block 14"]
	direction TB
	b14_9["cond__6 U32_equals"]
	b14_6["label doIf"]
	b14_4["cond pop_u32"]
	b14_15["abs__14 lift_u32"]
	b14_6 --> b14_9
	b14_4 --> b14_6
	b14_15 --> b14_4
end
subgraph block_13["Block 13"]
	direction TB
	b13_10["eff__9 doFallthru"]
end
branch_10 --> block_13

</pre>`;
window.traces["IF"]["sched lift_u32 [abs__14]__raw"] += `graph TD
subgraph block_9["Block 9"]
	direction TB
	b9_1[\\"Finish"/]
	b9_14["eff_st_put__13 ctlxfer.put_IF"]
	b9_14 --> b9_1
end
phi_11 --> block_9
subgraph phi_11["Phi 11"]
	p11_13{{"Sϕ Codeptr Stack Trap Locals Globals Tables Memory Extra "}}
	p11_13{{"Sϕ Codeptr Stack Trap Locals Globals Tables Memory Extra "}}
end
block_12 --> phi_11
block_13 --> phi_11
subgraph block_12["Block 12"]
	direction TB
	b12_12["eff__7 doBranch"]
end
branch_10 --> block_12
subgraph branch_10["Branch 10"]
	br10_9["cond__6 U32_equals"]

end
block_14 --> branch_10
subgraph block_14["Block 14"]
	direction TB
	b14_9["cond__6 U32_equals"]
	b14_6["label doIf"]
	b14_4["cond pop_u32"]
	b14_15["abs__14 lift_u32"]
	b14_6 --> b14_9
	b14_4 --> b14_6
	b14_15 --> b14_4
end
subgraph block_13["Block 13"]
	direction TB
	b13_10["eff__9 doFallthru"]
end
branch_10 --> block_13

`;
window.traces["IF"]["sched imm_readBlockType [bt]"] = ''
window.traces["IF"]["sched imm_readBlockType [bt]__raw"] = ''
window.traces["IF"]["sched imm_readBlockType [bt]"] += `<pre class='graph'>graph TD
subgraph block_9["Block 9"]
	direction TB
	b9_1[\\"Finish"/]
	b9_14["eff_st_put__13 ctlxfer.put_IF"]
	b9_14 --> b9_1
end
phi_11 --> block_9
subgraph phi_11["Phi 11"]
	p11_13{{"Sϕ Codeptr Stack Trap Locals Globals Tables Memory Extra "}}
	p11_13{{"Sϕ Codeptr Stack Trap Locals Globals Tables Memory Extra "}}
end
block_12 --> phi_11
block_13 --> phi_11
subgraph block_12["Block 12"]
	direction TB
	b12_12["eff__7 doBranch"]
end
branch_10 --> block_12
subgraph branch_10["Branch 10"]
	br10_9["cond__6 U32_equals"]

end
block_14 --> branch_10
subgraph block_14["Block 14"]
	direction TB
	b14_9["cond__6 U32_equals"]
	b14_6["label doIf"]
	b14_4["cond pop_u32"]
	b14_15["abs__14 lift_u32"]
	b14_3["bt imm_readBlockType"]
	b14_6 --> b14_9
	b14_4 --> b14_6
	b14_15 --> b14_4
	b14_3 --> b14_15
end
subgraph block_13["Block 13"]
	direction TB
	b13_10["eff__9 doFallthru"]
end
branch_10 --> block_13

</pre>`;
window.traces["IF"]["sched imm_readBlockType [bt]__raw"] += `graph TD
subgraph block_9["Block 9"]
	direction TB
	b9_1[\\"Finish"/]
	b9_14["eff_st_put__13 ctlxfer.put_IF"]
	b9_14 --> b9_1
end
phi_11 --> block_9
subgraph phi_11["Phi 11"]
	p11_13{{"Sϕ Codeptr Stack Trap Locals Globals Tables Memory Extra "}}
	p11_13{{"Sϕ Codeptr Stack Trap Locals Globals Tables Memory Extra "}}
end
block_12 --> phi_11
block_13 --> phi_11
subgraph block_12["Block 12"]
	direction TB
	b12_12["eff__7 doBranch"]
end
branch_10 --> block_12
subgraph branch_10["Branch 10"]
	br10_9["cond__6 U32_equals"]

end
block_14 --> branch_10
subgraph block_14["Block 14"]
	direction TB
	b14_9["cond__6 U32_equals"]
	b14_6["label doIf"]
	b14_4["cond pop_u32"]
	b14_15["abs__14 lift_u32"]
	b14_3["bt imm_readBlockType"]
	b14_6 --> b14_9
	b14_4 --> b14_6
	b14_15 --> b14_4
	b14_3 --> b14_15
end
subgraph block_13["Block 13"]
	direction TB
	b13_10["eff__9 doFallthru"]
end
branch_10 --> block_13

`;
window.traces["IF"]["sched 0"] = ''
window.traces["IF"]["sched 0__raw"] = ''
window.traces["IF"]["sched 0"] += `<pre class='graph'>graph TD
subgraph block_9["Block 9"]
	direction TB
	b9_1[\\"Finish"/]
	b9_14["eff_st_put__13 ctlxfer.put_IF"]
	b9_14 --> b9_1
end
phi_11 --> block_9
subgraph phi_11["Phi 11"]
	p11_13{{"Sϕ Codeptr Stack Trap Locals Globals Tables Memory Extra "}}
	p11_13{{"Sϕ Codeptr Stack Trap Locals Globals Tables Memory Extra "}}
end
block_12 --> phi_11
block_13 --> phi_11
subgraph block_12["Block 12"]
	direction TB
	b12_12["eff__7 doBranch"]
end
branch_10 --> block_12
subgraph branch_10["Branch 10"]
	br10_9["cond__6 U32_equals"]

end
block_14 --> branch_10
subgraph block_14["Block 14"]
	direction TB
	b14_9["cond__6 U32_equals"]
	b14_6["label doIf"]
	b14_4["cond pop_u32"]
	b14_15["abs__14 lift_u32"]
	b14_3["bt imm_readBlockType"]
	b14_7["arg__11 0"]
	b14_6 --> b14_9
	b14_4 --> b14_6
	b14_15 --> b14_4
	b14_3 --> b14_15
	b14_7 --> b14_3
end
subgraph block_13["Block 13"]
	direction TB
	b13_10["eff__9 doFallthru"]
end
branch_10 --> block_13

</pre>`;
window.traces["IF"]["sched 0__raw"] += `graph TD
subgraph block_9["Block 9"]
	direction TB
	b9_1[\\"Finish"/]
	b9_14["eff_st_put__13 ctlxfer.put_IF"]
	b9_14 --> b9_1
end
phi_11 --> block_9
subgraph phi_11["Phi 11"]
	p11_13{{"Sϕ Codeptr Stack Trap Locals Globals Tables Memory Extra "}}
	p11_13{{"Sϕ Codeptr Stack Trap Locals Globals Tables Memory Extra "}}
end
block_12 --> phi_11
block_13 --> phi_11
subgraph block_12["Block 12"]
	direction TB
	b12_12["eff__7 doBranch"]
end
branch_10 --> block_12
subgraph branch_10["Branch 10"]
	br10_9["cond__6 U32_equals"]

end
block_14 --> branch_10
subgraph block_14["Block 14"]
	direction TB
	b14_9["cond__6 U32_equals"]
	b14_6["label doIf"]
	b14_4["cond pop_u32"]
	b14_15["abs__14 lift_u32"]
	b14_3["bt imm_readBlockType"]
	b14_7["arg__11 0"]
	b14_6 --> b14_9
	b14_4 --> b14_6
	b14_15 --> b14_4
	b14_3 --> b14_15
	b14_7 --> b14_3
end
subgraph block_13["Block 13"]
	direction TB
	b13_10["eff__9 doFallthru"]
end
branch_10 --> block_13

`;
window.traces["IF"]["sched Start"] = ''
window.traces["IF"]["sched Start__raw"] = ''
window.traces["IF"]["sched Start"] += `<pre class='graph'>graph TD
subgraph block_9["Block 9"]
	direction TB
	b9_1[\\"Finish"/]
	b9_14["eff_st_put__13 ctlxfer.put_IF"]
	b9_14 --> b9_1
end
phi_11 --> block_9
subgraph phi_11["Phi 11"]
	p11_13{{"Sϕ Codeptr Stack Trap Locals Globals Tables Memory Extra "}}
	p11_13{{"Sϕ Codeptr Stack Trap Locals Globals Tables Memory Extra "}}
end
block_12 --> phi_11
block_13 --> phi_11
subgraph block_12["Block 12"]
	direction TB
	b12_12["eff__7 doBranch"]
end
branch_10 --> block_12
subgraph branch_10["Branch 10"]
	br10_9["cond__6 U32_equals"]

end
block_14 --> branch_10
subgraph block_14["Block 14"]
	direction TB
	b14_9["cond__6 U32_equals"]
	b14_6["label doIf"]
	b14_4["cond pop_u32"]
	b14_15["abs__14 lift_u32"]
	b14_3["bt imm_readBlockType"]
	b14_7["arg__11 0"]
	b14_0[/"Start"\\]
	b14_6 --> b14_9
	b14_4 --> b14_6
	b14_15 --> b14_4
	b14_3 --> b14_15
	b14_7 --> b14_3
	b14_0 --> b14_7
end
subgraph block_13["Block 13"]
	direction TB
	b13_10["eff__9 doFallthru"]
end
branch_10 --> block_13

</pre>`;
window.traces["IF"]["sched Start__raw"] += `graph TD
subgraph block_9["Block 9"]
	direction TB
	b9_1[\\"Finish"/]
	b9_14["eff_st_put__13 ctlxfer.put_IF"]
	b9_14 --> b9_1
end
phi_11 --> block_9
subgraph phi_11["Phi 11"]
	p11_13{{"Sϕ Codeptr Stack Trap Locals Globals Tables Memory Extra "}}
	p11_13{{"Sϕ Codeptr Stack Trap Locals Globals Tables Memory Extra "}}
end
block_12 --> phi_11
block_13 --> phi_11
subgraph block_12["Block 12"]
	direction TB
	b12_12["eff__7 doBranch"]
end
branch_10 --> block_12
subgraph branch_10["Branch 10"]
	br10_9["cond__6 U32_equals"]

end
block_14 --> branch_10
subgraph block_14["Block 14"]
	direction TB
	b14_9["cond__6 U32_equals"]
	b14_6["label doIf"]
	b14_4["cond pop_u32"]
	b14_15["abs__14 lift_u32"]
	b14_3["bt imm_readBlockType"]
	b14_7["arg__11 0"]
	b14_0[/"Start"\\]
	b14_6 --> b14_9
	b14_4 --> b14_6
	b14_15 --> b14_4
	b14_3 --> b14_15
	b14_7 --> b14_3
	b14_0 --> b14_7
end
subgraph block_13["Block 13"]
	direction TB
	b13_10["eff__9 doFallthru"]
end
branch_10 --> block_13

`;
window.traces["IF"]["schedulerMermaid"] = ''
window.traces["IF"]["schedulerMermaid__raw"] = ''
window.traces["IF"]["schedulerMermaid"] += `<pre class='graph'>graph TD
subgraph block_9["Block 9"]
	direction TB
	b9_14["eff_st_put__13 ctlxfer.put_IF"]
	b9_1[\\"Finish"/]
	b9_14 --> b9_1
end
phi_11 --> block_9
subgraph phi_11["Phi 11"]
	p11_13{{"Sϕ Codeptr Stack Trap Locals Globals Tables Memory Extra "}}
	p11_13{{"Sϕ Codeptr Stack Trap Locals Globals Tables Memory Extra "}}
end
block_12 --> phi_11
block_13 --> phi_11
subgraph block_12["Block 12"]
	direction TB
	b12_12["eff__7 doBranch"]
end
branch_10 --> block_12
subgraph branch_10["Branch 10"]
	br10_9["cond__6 U32_equals"]

end
block_14 --> branch_10
subgraph block_14["Block 14"]
	direction TB
	b14_0[/"Start"\\]
	b14_7["arg__11 0"]
	b14_3["bt imm_readBlockType"]
	b14_15["abs__14 lift_u32"]
	b14_4["cond pop_u32"]
	b14_6["label doIf"]
	b14_9["cond__6 U32_equals"]
	b14_0 --> b14_7
	b14_7 --> b14_3
	b14_3 --> b14_15
	b14_15 --> b14_4
	b14_4 --> b14_6
	b14_6 --> b14_9
end
subgraph block_13["Block 13"]
	direction TB
	b13_10["eff__9 doFallthru"]
end
branch_10 --> block_13

</pre>`;
window.traces["IF"]["schedulerMermaid__raw"] += `graph TD
subgraph block_9["Block 9"]
	direction TB
	b9_14["eff_st_put__13 ctlxfer.put_IF"]
	b9_1[\\"Finish"/]
	b9_14 --> b9_1
end
phi_11 --> block_9
subgraph phi_11["Phi 11"]
	p11_13{{"Sϕ Codeptr Stack Trap Locals Globals Tables Memory Extra "}}
	p11_13{{"Sϕ Codeptr Stack Trap Locals Globals Tables Memory Extra "}}
end
block_12 --> phi_11
block_13 --> phi_11
subgraph block_12["Block 12"]
	direction TB
	b12_12["eff__7 doBranch"]
end
branch_10 --> block_12
subgraph branch_10["Branch 10"]
	br10_9["cond__6 U32_equals"]

end
block_14 --> branch_10
subgraph block_14["Block 14"]
	direction TB
	b14_0[/"Start"\\]
	b14_7["arg__11 0"]
	b14_3["bt imm_readBlockType"]
	b14_15["abs__14 lift_u32"]
	b14_4["cond pop_u32"]
	b14_6["label doIf"]
	b14_9["cond__6 U32_equals"]
	b14_0 --> b14_7
	b14_7 --> b14_3
	b14_3 --> b14_15
	b14_15 --> b14_4
	b14_4 --> b14_6
	b14_6 --> b14_9
end
subgraph block_13["Block 13"]
	direction TB
	b13_10["eff__9 doFallthru"]
end
branch_10 --> block_13

`;
window.traces["IF"]["unLEM"] = ''
window.traces["IF"]["unLEM__raw"] = ''
window.traces["IF"]["unLEM"] += `<pre class='graph'>---
config:
  layout: elk
---
graph TD
	1[\\"Finish"/]
	13 -. Codeptr Stack Trap Locals Globals Tables Memory .-> 1
	14 -. Extra .-> 1
	14["eff_st_put__13 ctlxfer.put_IF"]
	6 --> 14
	13 -. Extra .-> 14
	13{{"Sϕ Codeptr Stack Trap Locals Globals Tables Memory Extra "}}
	18 --> 13
	20 --> 13
	19 --> 13
	19{{"Sϕ Codeptr Stack Trap Locals Globals Tables Memory Extra "}}
	16 --> 19
	12 --> 19
	10 --> 19
	10["eff__9 doFallthru"]
	6 -. Codeptr Stack Trap Locals Globals Tables Memory Extra .-> 10
	6["label doIf"]
	3 --> 6
	3 -. Codeptr .-> 6
	4 -. Stack .-> 6
	0 -. Trap Locals Globals Tables Memory Extra .-> 6
	0[/"Start"\\]
	4["cond pop_u32"]
	0 -. Stack .-> 4
	3["bt imm_readBlockType"]
	0 -. Codeptr .-> 3
	12["eff__7 doBranch"]
	6 --> 12
	6 -. Codeptr Stack Trap Locals Globals Tables Memory Extra .-> 12
	16["mt__15 U32_maybeTrue"]
	9 --> 16
	9["cond__6 U32_equals"]
	4 --> 9
	15 --> 9
	15["abs__14 lift_u32"]
	7 --> 15
	7["arg__11 0"]
	20["eff_merge__18 merge"]
	12 --> 20
	10 --> 20
	18["mb__17 bool.&&"]
	16 --> 18
	17 --> 18
	17["mf__16 U32_maybeFalse"]
	9 --> 17
</pre>`;
window.traces["IF"]["unLEM__raw"] += `---
config:
  layout: elk
---
graph TD
	1[\\"Finish"/]
	13 -. Codeptr Stack Trap Locals Globals Tables Memory .-> 1
	14 -. Extra .-> 1
	14["eff_st_put__13 ctlxfer.put_IF"]
	6 --> 14
	13 -. Extra .-> 14
	13{{"Sϕ Codeptr Stack Trap Locals Globals Tables Memory Extra "}}
	18 --> 13
	20 --> 13
	19 --> 13
	19{{"Sϕ Codeptr Stack Trap Locals Globals Tables Memory Extra "}}
	16 --> 19
	12 --> 19
	10 --> 19
	10["eff__9 doFallthru"]
	6 -. Codeptr Stack Trap Locals Globals Tables Memory Extra .-> 10
	6["label doIf"]
	3 --> 6
	3 -. Codeptr .-> 6
	4 -. Stack .-> 6
	0 -. Trap Locals Globals Tables Memory Extra .-> 6
	0[/"Start"\\]
	4["cond pop_u32"]
	0 -. Stack .-> 4
	3["bt imm_readBlockType"]
	0 -. Codeptr .-> 3
	12["eff__7 doBranch"]
	6 --> 12
	6 -. Codeptr Stack Trap Locals Globals Tables Memory Extra .-> 12
	16["mt__15 U32_maybeTrue"]
	9 --> 16
	9["cond__6 U32_equals"]
	4 --> 9
	15 --> 9
	15["abs__14 lift_u32"]
	7 --> 15
	7["arg__11 0"]
	20["eff_merge__18 merge"]
	12 --> 20
	10 --> 20
	18["mb__17 bool.&&"]
	16 --> 18
	17 --> 18
	17["mf__16 U32_maybeFalse"]
	9 --> 17
`;
window.traces["IF"]["unlem_schedule"] = ''
window.traces["IF"]["unlem_schedule__raw"] = ''
window.traces["IF"]["unlem_schedule"] += `<pre class=''>def bt = imm_readBlockType();
def cond = pop_u32();
def label = doIf(bt);
def arg__11 : u32 = 0;
def abs__14 = lift_u32(arg__11);
def cond__6 = U32_equals(cond, abs__14);
def mt__15 = U32_maybeTrue(cond__6);
def mf__16 = U32_maybeFalse(cond__6);
def mb__17 = bool.&&(mt__15, mf__16);
if (mb__17) {
	def eff__7 = doBranch(label);
	def eff__9 = doFallthru();
	def eff_merge__18 = merge(eff__7, eff__9);
} else {
	if (mt__15) {
		def eff__7 = doBranch(label);
	} else {
		def eff__9 = doFallthru();
	}
// phis: 
}
// phis: 
def eff_st_put__13 = ctlxfer.put_IF(label);
</pre>`;
window.traces["IF"]["unlem_schedule__raw"] += `def bt = imm_readBlockType();
def cond = pop_u32();
def label = doIf(bt);
def arg__11 : u32 = 0;
def abs__14 = lift_u32(arg__11);
def cond__6 = U32_equals(cond, abs__14);
def mt__15 = U32_maybeTrue(cond__6);
def mf__16 = U32_maybeFalse(cond__6);
def mb__17 = bool.&&(mt__15, mf__16);
if (mb__17) {
	def eff__7 = doBranch(label);
	def eff__9 = doFallthru();
	def eff_merge__18 = merge(eff__7, eff__9);
} else {
	if (mt__15) {
		def eff__7 = doBranch(label);
	} else {
		def eff__9 = doFallthru();
	}
// phis: 
}
// phis: 
def eff_st_put__13 = ctlxfer.put_IF(label);
`;
window.traces["IF"]["spytial_ul"] = ''
window.traces["IF"]["spytial_ul__raw"] = ''
window.traces["IF"]["spytial_ul"] += `<pre class=''>{
"atoms": [
{
"id": "node_1",
"type": "finish",
"label": "Finish"
},
{
"id": "node_13",
"type": "state_phi",
"label": "StatePhi [bool.&& [mb__17]]"
},
{
"id": "node_14",
"type": "intrinsic",
"label": "ctlxfer.put_IF [eff_st_put__13]"
},
{
"id": "node_18",
"type": "intrinsic",
"label": "bool.&& [mb__17]"
},
{
"id": "node_20",
"type": "intrinsic",
"label": "merge [eff_merge__18]"
},
{
"id": "node_19",
"type": "state_phi",
"label": "StatePhi [U32_maybeTrue [mt__15]]"
},
{
"id": "node_6",
"type": "intrinsic",
"label": "doIf [label]"
},
{
"id": "node_16",
"type": "intrinsic",
"label": "U32_maybeTrue [mt__15]"
},
{
"id": "node_17",
"type": "intrinsic",
"label": "U32_maybeFalse [mf__16]"
},
{
"id": "node_12",
"type": "intrinsic",
"label": "doBranch [eff__7]"
},
{
"id": "node_10",
"type": "intrinsic",
"label": "doFallthru [eff__9]"
},
{
"id": "node_3",
"type": "intrinsic",
"label": "imm_readBlockType [bt]"
},
{
"id": "node_4",
"type": "intrinsic",
"label": "pop_u32 [cond]"
},
{
"id": "node_0",
"type": "start",
"label": "Start"
},
{
"id": "node_9",
"type": "intrinsic",
"label": "U32_equals [cond__6]"
},
{
"id": "node_15",
"type": "intrinsic",
"label": "lift_u32 [abs__14]"
},
{
"id": "node_7",
"type": "lit",
"label": "0"
}
],
"relations": [
{
"id": "uses",
"name": "Uses",
"types": ["sea_node", "sea_node"],
"tuples": [
{
"atoms": ["node_14", "node_6"],
"types": ["intrinsic", "intrinsic"]
},
{
"atoms": ["node_18", "node_16"],
"types": ["intrinsic", "intrinsic"]
},
{
"atoms": ["node_18", "node_17"],
"types": ["intrinsic", "intrinsic"]
},
{
"atoms": ["node_20", "node_12"],
"types": ["intrinsic", "intrinsic"]
},
{
"atoms": ["node_20", "node_10"],
"types": ["intrinsic", "intrinsic"]
},
{
"atoms": ["node_6", "node_3"],
"types": ["intrinsic", "intrinsic"]
},
{
"atoms": ["node_16", "node_9"],
"types": ["intrinsic", "intrinsic"]
},
{
"atoms": ["node_17", "node_9"],
"types": ["intrinsic", "intrinsic"]
},
{
"atoms": ["node_12", "node_6"],
"types": ["intrinsic", "intrinsic"]
},
{
"atoms": ["node_9", "node_4"],
"types": ["intrinsic", "intrinsic"]
},
{
"atoms": ["node_9", "node_15"],
"types": ["intrinsic", "intrinsic"]
},
{
"atoms": ["node_15", "node_7"],
"types": ["intrinsic", "lit"]
}
]
},
{
"id": "state_uses",
"name": "StateUses",
"types": ["sea_node", "sea_node"],
"tuples": [
{
"atoms": ["node_1", "node_13"],
"types": ["finish", "state_phi"]
},
{
"atoms": ["node_1", "node_14"],
"types": ["finish", "intrinsic"]
},
{
"atoms": ["node_14", "node_13"],
"types": ["intrinsic", "state_phi"]
},
{
"atoms": ["node_6", "node_3"],
"types": ["intrinsic", "intrinsic"]
},
{
"atoms": ["node_6", "node_4"],
"types": ["intrinsic", "intrinsic"]
},
{
"atoms": ["node_6", "node_0"],
"types": ["intrinsic", "start"]
},
{
"atoms": ["node_12", "node_6"],
"types": ["intrinsic", "intrinsic"]
},
{
"atoms": ["node_10", "node_6"],
"types": ["intrinsic", "intrinsic"]
},
{
"atoms": ["node_3", "node_0"],
"types": ["intrinsic", "start"]
},
{
"atoms": ["node_4", "node_0"],
"types": ["intrinsic", "start"]
}
]
},
{
"id": "phi_cond",
"name": "PhiCond",
"types": ["sea_node", "sea_node"],
"tuples": [
{
"atoms": ["node_13", "node_18"],
"types": ["state_phi", "intrinsic"]
},
{
"atoms": ["node_19", "node_16"],
"types": ["state_phi", "intrinsic"]
}
]
},
{
"id": "phi_true",
"name": "PhiTrue",
"types": ["sea_node", "sea_node"],
"tuples": [
{
"atoms": ["node_13", "node_20"],
"types": ["state_phi", "intrinsic"]
},
{
"atoms": ["node_19", "node_12"],
"types": ["state_phi", "intrinsic"]
}
]
},
{
"id": "phi_false",
"name": "PhiFalse",
"types": ["sea_node", "sea_node"],
"tuples": [
{
"atoms": ["node_13", "node_19"],
"types": ["state_phi", "state_phi"]
},
{
"atoms": ["node_19", "node_10"],
"types": ["state_phi", "intrinsic"]
}
]
}
]
}</pre>`;
window.traces["IF"]["spytial_ul__raw"] += `{
"atoms": [
{
"id": "node_1",
"type": "finish",
"label": "Finish"
},
{
"id": "node_13",
"type": "state_phi",
"label": "StatePhi [bool.&& [mb__17]]"
},
{
"id": "node_14",
"type": "intrinsic",
"label": "ctlxfer.put_IF [eff_st_put__13]"
},
{
"id": "node_18",
"type": "intrinsic",
"label": "bool.&& [mb__17]"
},
{
"id": "node_20",
"type": "intrinsic",
"label": "merge [eff_merge__18]"
},
{
"id": "node_19",
"type": "state_phi",
"label": "StatePhi [U32_maybeTrue [mt__15]]"
},
{
"id": "node_6",
"type": "intrinsic",
"label": "doIf [label]"
},
{
"id": "node_16",
"type": "intrinsic",
"label": "U32_maybeTrue [mt__15]"
},
{
"id": "node_17",
"type": "intrinsic",
"label": "U32_maybeFalse [mf__16]"
},
{
"id": "node_12",
"type": "intrinsic",
"label": "doBranch [eff__7]"
},
{
"id": "node_10",
"type": "intrinsic",
"label": "doFallthru [eff__9]"
},
{
"id": "node_3",
"type": "intrinsic",
"label": "imm_readBlockType [bt]"
},
{
"id": "node_4",
"type": "intrinsic",
"label": "pop_u32 [cond]"
},
{
"id": "node_0",
"type": "start",
"label": "Start"
},
{
"id": "node_9",
"type": "intrinsic",
"label": "U32_equals [cond__6]"
},
{
"id": "node_15",
"type": "intrinsic",
"label": "lift_u32 [abs__14]"
},
{
"id": "node_7",
"type": "lit",
"label": "0"
}
],
"relations": [
{
"id": "uses",
"name": "Uses",
"types": ["sea_node", "sea_node"],
"tuples": [
{
"atoms": ["node_14", "node_6"],
"types": ["intrinsic", "intrinsic"]
},
{
"atoms": ["node_18", "node_16"],
"types": ["intrinsic", "intrinsic"]
},
{
"atoms": ["node_18", "node_17"],
"types": ["intrinsic", "intrinsic"]
},
{
"atoms": ["node_20", "node_12"],
"types": ["intrinsic", "intrinsic"]
},
{
"atoms": ["node_20", "node_10"],
"types": ["intrinsic", "intrinsic"]
},
{
"atoms": ["node_6", "node_3"],
"types": ["intrinsic", "intrinsic"]
},
{
"atoms": ["node_16", "node_9"],
"types": ["intrinsic", "intrinsic"]
},
{
"atoms": ["node_17", "node_9"],
"types": ["intrinsic", "intrinsic"]
},
{
"atoms": ["node_12", "node_6"],
"types": ["intrinsic", "intrinsic"]
},
{
"atoms": ["node_9", "node_4"],
"types": ["intrinsic", "intrinsic"]
},
{
"atoms": ["node_9", "node_15"],
"types": ["intrinsic", "intrinsic"]
},
{
"atoms": ["node_15", "node_7"],
"types": ["intrinsic", "lit"]
}
]
},
{
"id": "state_uses",
"name": "StateUses",
"types": ["sea_node", "sea_node"],
"tuples": [
{
"atoms": ["node_1", "node_13"],
"types": ["finish", "state_phi"]
},
{
"atoms": ["node_1", "node_14"],
"types": ["finish", "intrinsic"]
},
{
"atoms": ["node_14", "node_13"],
"types": ["intrinsic", "state_phi"]
},
{
"atoms": ["node_6", "node_3"],
"types": ["intrinsic", "intrinsic"]
},
{
"atoms": ["node_6", "node_4"],
"types": ["intrinsic", "intrinsic"]
},
{
"atoms": ["node_6", "node_0"],
"types": ["intrinsic", "start"]
},
{
"atoms": ["node_12", "node_6"],
"types": ["intrinsic", "intrinsic"]
},
{
"atoms": ["node_10", "node_6"],
"types": ["intrinsic", "intrinsic"]
},
{
"atoms": ["node_3", "node_0"],
"types": ["intrinsic", "start"]
},
{
"atoms": ["node_4", "node_0"],
"types": ["intrinsic", "start"]
}
]
},
{
"id": "phi_cond",
"name": "PhiCond",
"types": ["sea_node", "sea_node"],
"tuples": [
{
"atoms": ["node_13", "node_18"],
"types": ["state_phi", "intrinsic"]
},
{
"atoms": ["node_19", "node_16"],
"types": ["state_phi", "intrinsic"]
}
]
},
{
"id": "phi_true",
"name": "PhiTrue",
"types": ["sea_node", "sea_node"],
"tuples": [
{
"atoms": ["node_13", "node_20"],
"types": ["state_phi", "intrinsic"]
},
{
"atoms": ["node_19", "node_12"],
"types": ["state_phi", "intrinsic"]
}
]
},
{
"id": "phi_false",
"name": "PhiFalse",
"types": ["sea_node", "sea_node"],
"tuples": [
{
"atoms": ["node_13", "node_19"],
"types": ["state_phi", "state_phi"]
},
{
"atoms": ["node_19", "node_10"],
"types": ["state_phi", "intrinsic"]
}
]
}
]
}`;
window.traces["IF"]["unlem_scheduler"] = ''
window.traces["IF"]["unlem_scheduler__raw"] = ''
window.traces["IF"]["unlem_scheduler"] += `<pre class='graph'>graph TD
subgraph block_15["Block 15"]
	direction TB
	b15_14["eff_st_put__13 ctlxfer.put_IF"]
	b15_1[\\"Finish"/]
	b15_14 --> b15_1
end
phi_17 --> block_15
subgraph phi_17["Phi 17"]
	p17_13{{"Sϕ Codeptr Stack Trap Locals Globals Tables Memory Extra "}}
	p17_13{{"Sϕ Codeptr Stack Trap Locals Globals Tables Memory Extra "}}
end
block_18 --> phi_17
block_19 --> phi_17
subgraph block_18["Block 18"]
	direction TB
	b18_20["eff_merge__18 merge"]
end
branch_16 --> block_18
subgraph branch_16["Branch 16"]
	br16_18["mb__17 bool.&&"]

end
block_24 --> branch_16
subgraph block_24["Block 24"]
	direction TB
	b24_0[/"Start"\\]
	b24_7["arg__11 0"]
	b24_15["abs__14 lift_u32"]
	b24_4["cond pop_u32"]
	b24_3["bt imm_readBlockType"]
	b24_9["cond__6 U32_equals"]
	b24_6["label doIf"]
	b24_17["mf__16 U32_maybeFalse"]
	b24_16["mt__15 U32_maybeTrue"]
	b24_18["mb__17 bool.&&"]
	b24_0 --> b24_7
	b24_7 --> b24_15
	b24_15 --> b24_4
	b24_4 --> b24_3
	b24_3 --> b24_9
	b24_9 --> b24_6
	b24_6 --> b24_17
	b24_17 --> b24_16
	b24_16 --> b24_18
end
subgraph block_19["Block 19"]
	direction TB
end
phi_21 --> block_19
subgraph phi_21["Phi 21"]
	p21_19{{"Sϕ Codeptr Stack Trap Locals Globals Tables Memory Extra "}}
	p21_19{{"Sϕ Codeptr Stack Trap Locals Globals Tables Memory Extra "}}
	p21_19{{"Sϕ Codeptr Stack Trap Locals Globals Tables Memory Extra "}}
	p21_19{{"Sϕ Codeptr Stack Trap Locals Globals Tables Memory Extra "}}
end
block_22 --> phi_21
block_23 --> phi_21
subgraph block_22["Block 22"]
	direction TB
	b22_12["eff__7 doBranch"]
end
branch_20 --> block_22
subgraph branch_20["Branch 20"]
	br20_16["mt__15 U32_maybeTrue"]

end
branch_16 --> branch_20
subgraph block_23["Block 23"]
	direction TB
	b23_10["eff__9 doFallthru"]
end
branch_20 --> block_23

</pre>`;
window.traces["IF"]["unlem_scheduler__raw"] += `graph TD
subgraph block_15["Block 15"]
	direction TB
	b15_14["eff_st_put__13 ctlxfer.put_IF"]
	b15_1[\\"Finish"/]
	b15_14 --> b15_1
end
phi_17 --> block_15
subgraph phi_17["Phi 17"]
	p17_13{{"Sϕ Codeptr Stack Trap Locals Globals Tables Memory Extra "}}
	p17_13{{"Sϕ Codeptr Stack Trap Locals Globals Tables Memory Extra "}}
end
block_18 --> phi_17
block_19 --> phi_17
subgraph block_18["Block 18"]
	direction TB
	b18_20["eff_merge__18 merge"]
end
branch_16 --> block_18
subgraph branch_16["Branch 16"]
	br16_18["mb__17 bool.&&"]

end
block_24 --> branch_16
subgraph block_24["Block 24"]
	direction TB
	b24_0[/"Start"\\]
	b24_7["arg__11 0"]
	b24_15["abs__14 lift_u32"]
	b24_4["cond pop_u32"]
	b24_3["bt imm_readBlockType"]
	b24_9["cond__6 U32_equals"]
	b24_6["label doIf"]
	b24_17["mf__16 U32_maybeFalse"]
	b24_16["mt__15 U32_maybeTrue"]
	b24_18["mb__17 bool.&&"]
	b24_0 --> b24_7
	b24_7 --> b24_15
	b24_15 --> b24_4
	b24_4 --> b24_3
	b24_3 --> b24_9
	b24_9 --> b24_6
	b24_6 --> b24_17
	b24_17 --> b24_16
	b24_16 --> b24_18
end
subgraph block_19["Block 19"]
	direction TB
end
phi_21 --> block_19
subgraph phi_21["Phi 21"]
	p21_19{{"Sϕ Codeptr Stack Trap Locals Globals Tables Memory Extra "}}
	p21_19{{"Sϕ Codeptr Stack Trap Locals Globals Tables Memory Extra "}}
	p21_19{{"Sϕ Codeptr Stack Trap Locals Globals Tables Memory Extra "}}
	p21_19{{"Sϕ Codeptr Stack Trap Locals Globals Tables Memory Extra "}}
end
block_22 --> phi_21
block_23 --> phi_21
subgraph block_22["Block 22"]
	direction TB
	b22_12["eff__7 doBranch"]
end
branch_20 --> block_22
subgraph branch_20["Branch 20"]
	br20_16["mt__15 U32_maybeTrue"]

end
branch_16 --> branch_20
subgraph block_23["Block 23"]
	direction TB
	b23_10["eff__9 doFallthru"]
end
branch_20 --> block_23

`;
window.traces["IF"]["unlem_pretty"] = ''
window.traces["IF"]["unlem_pretty__raw"] = ''
window.traces["IF"]["unlem_pretty"] += `<pre class=''>def bt = imm_readBlockType();
def cond = pop_u32();
def label = doIf(bt);
def mt = U32_maybeTrue(U32_equals(cond, lift_u32(0)));
def mf = U32_maybeFalse(U32_equals(cond, lift_u32(0)));
if (bool.&&(mt, mf)) {
	doBranch(label);
	doFallthru();
} else {
	if (mt) {
		doBranch(label);
	} else {
		doFallthru();
	}
}
ctlxfer.put_IF(label);
</pre>`;
window.traces["IF"]["unlem_pretty__raw"] += `def bt = imm_readBlockType();
def cond = pop_u32();
def label = doIf(bt);
def mt = U32_maybeTrue(U32_equals(cond, lift_u32(0)));
def mf = U32_maybeFalse(U32_equals(cond, lift_u32(0)));
if (bool.&&(mt, mf)) {
	doBranch(label);
	doFallthru();
} else {
	if (mt) {
		doBranch(label);
	} else {
		doFallthru();
	}
}
ctlxfer.put_IF(label);
`;
window.traces["IF"]["constUnLEM"] = ''
window.traces["IF"]["constUnLEM__raw"] = ''
window.traces["IF"]["constUnLEM"] += `<pre class='graph'>---
config:
  layout: elk
---
graph TD
	1[\\"Finish"/]
	20 -. Codeptr Stack Trap Locals Globals Tables Memory .-> 1
	14 -. Extra .-> 1
	14["eff_st_put__13 ctlxfer.put_IF"]
	6 --> 14
	20 -. Extra .-> 14
	20["eff_merge__18 merge"]
	12 --> 20
	10 --> 20
	10["eff__9 doFallthru"]
	6 -. Codeptr Stack Trap Locals Globals Tables Memory Extra .-> 10
	6["label doIf"]
	3 --> 6
	3 -. Codeptr .-> 6
	4 -. Stack .-> 6
	0 -. Trap Locals Globals Tables Memory Extra .-> 6
	0[/"Start"\\]
	4["cond pop_u32"]
	0 -. Stack .-> 4
	3["bt imm_readBlockType"]
	0 -. Codeptr .-> 3
	12["eff__7 doBranch"]
	6 --> 12
	6 -. Codeptr Stack Trap Locals Globals Tables Memory Extra .-> 12
</pre>`;
window.traces["IF"]["constUnLEM__raw"] += `---
config:
  layout: elk
---
graph TD
	1[\\"Finish"/]
	20 -. Codeptr Stack Trap Locals Globals Tables Memory .-> 1
	14 -. Extra .-> 1
	14["eff_st_put__13 ctlxfer.put_IF"]
	6 --> 14
	20 -. Extra .-> 14
	20["eff_merge__18 merge"]
	12 --> 20
	10 --> 20
	10["eff__9 doFallthru"]
	6 -. Codeptr Stack Trap Locals Globals Tables Memory Extra .-> 10
	6["label doIf"]
	3 --> 6
	3 -. Codeptr .-> 6
	4 -. Stack .-> 6
	0 -. Trap Locals Globals Tables Memory Extra .-> 6
	0[/"Start"\\]
	4["cond pop_u32"]
	0 -. Stack .-> 4
	3["bt imm_readBlockType"]
	0 -. Codeptr .-> 3
	12["eff__7 doBranch"]
	6 --> 12
	6 -. Codeptr Stack Trap Locals Globals Tables Memory Extra .-> 12
`;
window.traces["IF"]["chooseMerge"] = ''
window.traces["IF"]["chooseMerge__raw"] = ''
window.traces["IF"]["chooseMerge"] += `<pre class='graph'>---
config:
  layout: elk
---
graph TD
	1[\\"Finish"/]
	20 -. Codeptr Stack Trap Locals Globals Tables Memory .-> 1
	14 -. Extra .-> 1
	14["eff_st_put__13 ctlxfer.put_IF"]
	6 --> 14
	20 -. Extra .-> 14
	20["eff_merge__18 merge"]
	12 --> 20
	10 --> 20
	10["eff__9 doFallthru"]
	6 -. Codeptr Stack Trap Locals Globals Tables Memory Extra .-> 10
	6["label doIf"]
	3 --> 6
	3 -. Codeptr .-> 6
	4 -. Stack .-> 6
	0 -. Trap Locals Globals Tables Memory Extra .-> 6
	0[/"Start"\\]
	4["cond pop_u32"]
	0 -. Stack .-> 4
	3["bt imm_readBlockType"]
	0 -. Codeptr .-> 3
	12["eff__7 doBranch"]
	6 --> 12
	6 -. Codeptr Stack Trap Locals Globals Tables Memory Extra .-> 12
</pre>`;
window.traces["IF"]["chooseMerge__raw"] += `---
config:
  layout: elk
---
graph TD
	1[\\"Finish"/]
	20 -. Codeptr Stack Trap Locals Globals Tables Memory .-> 1
	14 -. Extra .-> 1
	14["eff_st_put__13 ctlxfer.put_IF"]
	6 --> 14
	20 -. Extra .-> 14
	20["eff_merge__18 merge"]
	12 --> 20
	10 --> 20
	10["eff__9 doFallthru"]
	6 -. Codeptr Stack Trap Locals Globals Tables Memory Extra .-> 10
	6["label doIf"]
	3 --> 6
	3 -. Codeptr .-> 6
	4 -. Stack .-> 6
	0 -. Trap Locals Globals Tables Memory Extra .-> 6
	0[/"Start"\\]
	4["cond pop_u32"]
	0 -. Stack .-> 4
	3["bt imm_readBlockType"]
	0 -. Codeptr .-> 3
	12["eff__7 doBranch"]
	6 --> 12
	6 -. Codeptr Stack Trap Locals Globals Tables Memory Extra .-> 12
`;
window.traces["IF"]["scheduled"] = ''
window.traces["IF"]["scheduled__raw"] = ''
window.traces["IF"]["scheduled"] += `<pre class=''>def bt = imm_readBlockType();
def cond = pop_u32();
def label = doIf(bt);
def eff__7 = doBranch(label);
def eff__9 = doFallthru();
def eff_merge__18 = merge(eff__7, eff__9);
def eff_st_put__13 = ctlxfer.put_IF(label);
</pre>`;
window.traces["IF"]["scheduled__raw"] += `def bt = imm_readBlockType();
def cond = pop_u32();
def label = doIf(bt);
def eff__7 = doBranch(label);
def eff__9 = doFallthru();
def eff_merge__18 = merge(eff__7, eff__9);
def eff_st_put__13 = ctlxfer.put_IF(label);
`;
window.traces["IF"]["pretty"] = ''
window.traces["IF"]["pretty__raw"] = ''
window.traces["IF"]["pretty"] += `<pre class=''>def bt = imm_readBlockType();
def cond = pop_u32();
def label = doIf(bt);
doBranch(label);
doFallthru();
ctlxfer.put_IF(label);
</pre>`;
window.traces["IF"]["pretty__raw"] += `def bt = imm_readBlockType();
def cond = pop_u32();
def label = doIf(bt);
doBranch(label);
doFallthru();
ctlxfer.put_IF(label);
`;
window.traces["ELSE"] = {}
window.traces["ELSE"]["parsed"] = ''
window.traces["ELSE"]["parsed__raw"] = ''
window.traces["ELSE"]["parsed"] += `<pre class=''>def label = doElse();
def arg__20 = (label);
def eff__19 = doBranch(arg__20);
</pre>`;
window.traces["ELSE"]["parsed__raw"] += `def label = doElse();
def arg__20 = (label);
def eff__19 = doBranch(arg__20);
`;
window.traces["ELSE"]["raw"] = ''
window.traces["ELSE"]["raw__raw"] = ''
window.traces["ELSE"]["raw"] += `<pre class='graph'>---
config:
  layout: elk
---
graph TD
	1[\\"Finish"/]
	5 -. Codeptr Stack Trap Locals Globals Tables Memory Extra .-> 1
	5["eff__19 doBranch"]
	3 --> 5
	3 -. Codeptr Stack Trap Locals Globals Tables Memory Extra .-> 5
	3["label doElse"]
	0 -. Codeptr Stack Trap Locals Globals Tables Memory Extra .-> 3
	0[/"Start"\\]
</pre>`;
window.traces["ELSE"]["raw__raw"] += `---
config:
  layout: elk
---
graph TD
	1[\\"Finish"/]
	5 -. Codeptr Stack Trap Locals Globals Tables Memory Extra .-> 1
	5["eff__19 doBranch"]
	3 --> 5
	3 -. Codeptr Stack Trap Locals Globals Tables Memory Extra .-> 5
	3["label doElse"]
	0 -. Codeptr Stack Trap Locals Globals Tables Memory Extra .-> 3
	0[/"Start"\\]
`;
window.traces["ELSE"]["spytial"] = ''
window.traces["ELSE"]["spytial__raw"] = ''
window.traces["ELSE"]["spytial"] += `<pre class=''>{
"atoms": [
{
"id": "node_1",
"type": "finish",
"label": "Finish"
},
{
"id": "node_5",
"type": "intrinsic",
"label": "doBranch [eff__19]"
},
{
"id": "node_3",
"type": "intrinsic",
"label": "doElse [label]"
},
{
"id": "node_0",
"type": "start",
"label": "Start"
}
],
"relations": [
{
"id": "uses",
"name": "Uses",
"types": ["sea_node", "sea_node"],
"tuples": [
{
"atoms": ["node_5", "node_3"],
"types": ["intrinsic", "intrinsic"]
}
]
},
{
"id": "state_uses",
"name": "StateUses",
"types": ["sea_node", "sea_node"],
"tuples": [
{
"atoms": ["node_1", "node_5"],
"types": ["finish", "intrinsic"]
},
{
"atoms": ["node_5", "node_3"],
"types": ["intrinsic", "intrinsic"]
},
{
"atoms": ["node_3", "node_0"],
"types": ["intrinsic", "start"]
}
]
}
]
}</pre>`;
window.traces["ELSE"]["spytial__raw"] += `{
"atoms": [
{
"id": "node_1",
"type": "finish",
"label": "Finish"
},
{
"id": "node_5",
"type": "intrinsic",
"label": "doBranch [eff__19]"
},
{
"id": "node_3",
"type": "intrinsic",
"label": "doElse [label]"
},
{
"id": "node_0",
"type": "start",
"label": "Start"
}
],
"relations": [
{
"id": "uses",
"name": "Uses",
"types": ["sea_node", "sea_node"],
"tuples": [
{
"atoms": ["node_5", "node_3"],
"types": ["intrinsic", "intrinsic"]
}
]
},
{
"id": "state_uses",
"name": "StateUses",
"types": ["sea_node", "sea_node"],
"tuples": [
{
"atoms": ["node_1", "node_5"],
"types": ["finish", "intrinsic"]
},
{
"atoms": ["node_5", "node_3"],
"types": ["intrinsic", "intrinsic"]
},
{
"atoms": ["node_3", "node_0"],
"types": ["intrinsic", "start"]
}
]
}
]
}`;
window.traces["ELSE"]["overloadOps"] = ''
window.traces["ELSE"]["overloadOps__raw"] = ''
window.traces["ELSE"]["overloadOps"] += `<pre class='graph'>---
config:
  layout: elk
---
graph TD
	1[\\"Finish"/]
	5 -. Codeptr Stack Trap Locals Globals Tables Memory .-> 1
	6 -. Extra .-> 1
	6["eff_st_put__21 ctlxfer.put_ELSE"]
	3 --> 6
	5 -. Extra .-> 6
	5["eff__19 doBranch"]
	3 --> 5
	3 -. Codeptr Stack Trap Locals Globals Tables Memory Extra .-> 5
	3["label doElse"]
	0 -. Codeptr Stack Trap Locals Globals Tables Memory Extra .-> 3
	0[/"Start"\\]
</pre>`;
window.traces["ELSE"]["overloadOps__raw"] += `---
config:
  layout: elk
---
graph TD
	1[\\"Finish"/]
	5 -. Codeptr Stack Trap Locals Globals Tables Memory .-> 1
	6 -. Extra .-> 1
	6["eff_st_put__21 ctlxfer.put_ELSE"]
	3 --> 6
	5 -. Extra .-> 6
	5["eff__19 doBranch"]
	3 --> 5
	3 -. Codeptr Stack Trap Locals Globals Tables Memory Extra .-> 5
	3["label doElse"]
	0 -. Codeptr Stack Trap Locals Globals Tables Memory Extra .-> 3
	0[/"Start"\\]
`;
window.traces["ELSE"]["addAbstractions"] = ''
window.traces["ELSE"]["addAbstractions__raw"] = ''
window.traces["ELSE"]["addAbstractions"] += `<pre class='graph'>---
config:
  layout: elk
---
graph TD
	1[\\"Finish"/]
	5 -. Codeptr Stack Trap Locals Globals Tables Memory .-> 1
	6 -. Extra .-> 1
	6["eff_st_put__21 ctlxfer.put_ELSE"]
	3 --> 6
	5 -. Extra .-> 6
	5["eff__19 doBranch"]
	3 --> 5
	3 -. Codeptr Stack Trap Locals Globals Tables Memory Extra .-> 5
	3["label doElse"]
	0 -. Codeptr Stack Trap Locals Globals Tables Memory Extra .-> 3
	0[/"Start"\\]
</pre>`;
window.traces["ELSE"]["addAbstractions__raw"] += `---
config:
  layout: elk
---
graph TD
	1[\\"Finish"/]
	5 -. Codeptr Stack Trap Locals Globals Tables Memory .-> 1
	6 -. Extra .-> 1
	6["eff_st_put__21 ctlxfer.put_ELSE"]
	3 --> 6
	5 -. Extra .-> 6
	5["eff__19 doBranch"]
	3 --> 5
	3 -. Codeptr Stack Trap Locals Globals Tables Memory Extra .-> 5
	3["label doElse"]
	0 -. Codeptr Stack Trap Locals Globals Tables Memory Extra .-> 3
	0[/"Start"\\]
`;
window.traces["ELSE"]["schedulerMermaid"] = ''
window.traces["ELSE"]["schedulerMermaid__raw"] = ''
window.traces["ELSE"]["schedulerMermaid"] += `<pre class='graph'>graph TD
subgraph block_25["Block 25"]
	direction TB
	b25_0[/"Start"\\]
	b25_3["label doElse"]
	b25_5["eff__19 doBranch"]
	b25_6["eff_st_put__21 ctlxfer.put_ELSE"]
	b25_1[\\"Finish"/]
	b25_0 --> b25_3
	b25_3 --> b25_5
	b25_5 --> b25_6
	b25_6 --> b25_1
end

</pre>`;
window.traces["ELSE"]["schedulerMermaid__raw"] += `graph TD
subgraph block_25["Block 25"]
	direction TB
	b25_0[/"Start"\\]
	b25_3["label doElse"]
	b25_5["eff__19 doBranch"]
	b25_6["eff_st_put__21 ctlxfer.put_ELSE"]
	b25_1[\\"Finish"/]
	b25_0 --> b25_3
	b25_3 --> b25_5
	b25_5 --> b25_6
	b25_6 --> b25_1
end

`;
window.traces["ELSE"]["unLEM"] = ''
window.traces["ELSE"]["unLEM__raw"] = ''
window.traces["ELSE"]["unLEM"] += `<pre class='graph'>---
config:
  layout: elk
---
graph TD
	1[\\"Finish"/]
	5 -. Codeptr Stack Trap Locals Globals Tables Memory .-> 1
	6 -. Extra .-> 1
	6["eff_st_put__21 ctlxfer.put_ELSE"]
	3 --> 6
	5 -. Extra .-> 6
	5["eff__19 doBranch"]
	3 --> 5
	3 -. Codeptr Stack Trap Locals Globals Tables Memory Extra .-> 5
	3["label doElse"]
	0 -. Codeptr Stack Trap Locals Globals Tables Memory Extra .-> 3
	0[/"Start"\\]
</pre>`;
window.traces["ELSE"]["unLEM__raw"] += `---
config:
  layout: elk
---
graph TD
	1[\\"Finish"/]
	5 -. Codeptr Stack Trap Locals Globals Tables Memory .-> 1
	6 -. Extra .-> 1
	6["eff_st_put__21 ctlxfer.put_ELSE"]
	3 --> 6
	5 -. Extra .-> 6
	5["eff__19 doBranch"]
	3 --> 5
	3 -. Codeptr Stack Trap Locals Globals Tables Memory Extra .-> 5
	3["label doElse"]
	0 -. Codeptr Stack Trap Locals Globals Tables Memory Extra .-> 3
	0[/"Start"\\]
`;
window.traces["ELSE"]["unlem_schedule"] = ''
window.traces["ELSE"]["unlem_schedule__raw"] = ''
window.traces["ELSE"]["unlem_schedule"] += `<pre class=''>def label = doElse();
def eff__19 = doBranch(label);
def eff_st_put__21 = ctlxfer.put_ELSE(label);
</pre>`;
window.traces["ELSE"]["unlem_schedule__raw"] += `def label = doElse();
def eff__19 = doBranch(label);
def eff_st_put__21 = ctlxfer.put_ELSE(label);
`;
window.traces["ELSE"]["spytial_ul"] = ''
window.traces["ELSE"]["spytial_ul__raw"] = ''
window.traces["ELSE"]["spytial_ul"] += `<pre class=''>{
"atoms": [
{
"id": "node_1",
"type": "finish",
"label": "Finish"
},
{
"id": "node_5",
"type": "intrinsic",
"label": "doBranch [eff__19]"
},
{
"id": "node_6",
"type": "intrinsic",
"label": "ctlxfer.put_ELSE [eff_st_put__21]"
},
{
"id": "node_3",
"type": "intrinsic",
"label": "doElse [label]"
},
{
"id": "node_0",
"type": "start",
"label": "Start"
}
],
"relations": [
{
"id": "uses",
"name": "Uses",
"types": ["sea_node", "sea_node"],
"tuples": [
{
"atoms": ["node_5", "node_3"],
"types": ["intrinsic", "intrinsic"]
},
{
"atoms": ["node_6", "node_3"],
"types": ["intrinsic", "intrinsic"]
}
]
},
{
"id": "state_uses",
"name": "StateUses",
"types": ["sea_node", "sea_node"],
"tuples": [
{
"atoms": ["node_1", "node_5"],
"types": ["finish", "intrinsic"]
},
{
"atoms": ["node_1", "node_6"],
"types": ["finish", "intrinsic"]
},
{
"atoms": ["node_5", "node_3"],
"types": ["intrinsic", "intrinsic"]
},
{
"atoms": ["node_6", "node_5"],
"types": ["intrinsic", "intrinsic"]
},
{
"atoms": ["node_3", "node_0"],
"types": ["intrinsic", "start"]
}
]
}
]
}</pre>`;
window.traces["ELSE"]["spytial_ul__raw"] += `{
"atoms": [
{
"id": "node_1",
"type": "finish",
"label": "Finish"
},
{
"id": "node_5",
"type": "intrinsic",
"label": "doBranch [eff__19]"
},
{
"id": "node_6",
"type": "intrinsic",
"label": "ctlxfer.put_ELSE [eff_st_put__21]"
},
{
"id": "node_3",
"type": "intrinsic",
"label": "doElse [label]"
},
{
"id": "node_0",
"type": "start",
"label": "Start"
}
],
"relations": [
{
"id": "uses",
"name": "Uses",
"types": ["sea_node", "sea_node"],
"tuples": [
{
"atoms": ["node_5", "node_3"],
"types": ["intrinsic", "intrinsic"]
},
{
"atoms": ["node_6", "node_3"],
"types": ["intrinsic", "intrinsic"]
}
]
},
{
"id": "state_uses",
"name": "StateUses",
"types": ["sea_node", "sea_node"],
"tuples": [
{
"atoms": ["node_1", "node_5"],
"types": ["finish", "intrinsic"]
},
{
"atoms": ["node_1", "node_6"],
"types": ["finish", "intrinsic"]
},
{
"atoms": ["node_5", "node_3"],
"types": ["intrinsic", "intrinsic"]
},
{
"atoms": ["node_6", "node_5"],
"types": ["intrinsic", "intrinsic"]
},
{
"atoms": ["node_3", "node_0"],
"types": ["intrinsic", "start"]
}
]
}
]
}`;
window.traces["ELSE"]["unlem_scheduler"] = ''
window.traces["ELSE"]["unlem_scheduler__raw"] = ''
window.traces["ELSE"]["unlem_scheduler"] += `<pre class='graph'>graph TD
subgraph block_26["Block 26"]
	direction TB
	b26_0[/"Start"\\]
	b26_3["label doElse"]
	b26_5["eff__19 doBranch"]
	b26_6["eff_st_put__21 ctlxfer.put_ELSE"]
	b26_1[\\"Finish"/]
	b26_0 --> b26_3
	b26_3 --> b26_5
	b26_5 --> b26_6
	b26_6 --> b26_1
end

</pre>`;
window.traces["ELSE"]["unlem_scheduler__raw"] += `graph TD
subgraph block_26["Block 26"]
	direction TB
	b26_0[/"Start"\\]
	b26_3["label doElse"]
	b26_5["eff__19 doBranch"]
	b26_6["eff_st_put__21 ctlxfer.put_ELSE"]
	b26_1[\\"Finish"/]
	b26_0 --> b26_3
	b26_3 --> b26_5
	b26_5 --> b26_6
	b26_6 --> b26_1
end

`;
window.traces["ELSE"]["unlem_pretty"] = ''
window.traces["ELSE"]["unlem_pretty__raw"] = ''
window.traces["ELSE"]["unlem_pretty"] += `<pre class=''>def label = doElse();
doBranch(label);
ctlxfer.put_ELSE(label);
</pre>`;
window.traces["ELSE"]["unlem_pretty__raw"] += `def label = doElse();
doBranch(label);
ctlxfer.put_ELSE(label);
`;
window.traces["ELSE"]["constUnLEM"] = ''
window.traces["ELSE"]["constUnLEM__raw"] = ''
window.traces["ELSE"]["constUnLEM"] += `<pre class='graph'>---
config:
  layout: elk
---
graph TD
	1[\\"Finish"/]
	5 -. Codeptr Stack Trap Locals Globals Tables Memory .-> 1
	6 -. Extra .-> 1
	6["eff_st_put__21 ctlxfer.put_ELSE"]
	3 --> 6
	5 -. Extra .-> 6
	5["eff__19 doBranch"]
	3 --> 5
	3 -. Codeptr Stack Trap Locals Globals Tables Memory Extra .-> 5
	3["label doElse"]
	0 -. Codeptr Stack Trap Locals Globals Tables Memory Extra .-> 3
	0[/"Start"\\]
</pre>`;
window.traces["ELSE"]["constUnLEM__raw"] += `---
config:
  layout: elk
---
graph TD
	1[\\"Finish"/]
	5 -. Codeptr Stack Trap Locals Globals Tables Memory .-> 1
	6 -. Extra .-> 1
	6["eff_st_put__21 ctlxfer.put_ELSE"]
	3 --> 6
	5 -. Extra .-> 6
	5["eff__19 doBranch"]
	3 --> 5
	3 -. Codeptr Stack Trap Locals Globals Tables Memory Extra .-> 5
	3["label doElse"]
	0 -. Codeptr Stack Trap Locals Globals Tables Memory Extra .-> 3
	0[/"Start"\\]
`;
window.traces["ELSE"]["chooseMerge"] = ''
window.traces["ELSE"]["chooseMerge__raw"] = ''
window.traces["ELSE"]["chooseMerge"] += `<pre class='graph'>---
config:
  layout: elk
---
graph TD
	1[\\"Finish"/]
	5 -. Codeptr Stack Trap Locals Globals Tables Memory .-> 1
	6 -. Extra .-> 1
	6["eff_st_put__21 ctlxfer.put_ELSE"]
	3 --> 6
	5 -. Extra .-> 6
	5["eff__19 doBranch"]
	3 --> 5
	3 -. Codeptr Stack Trap Locals Globals Tables Memory Extra .-> 5
	3["label doElse"]
	0 -. Codeptr Stack Trap Locals Globals Tables Memory Extra .-> 3
	0[/"Start"\\]
</pre>`;
window.traces["ELSE"]["chooseMerge__raw"] += `---
config:
  layout: elk
---
graph TD
	1[\\"Finish"/]
	5 -. Codeptr Stack Trap Locals Globals Tables Memory .-> 1
	6 -. Extra .-> 1
	6["eff_st_put__21 ctlxfer.put_ELSE"]
	3 --> 6
	5 -. Extra .-> 6
	5["eff__19 doBranch"]
	3 --> 5
	3 -. Codeptr Stack Trap Locals Globals Tables Memory Extra .-> 5
	3["label doElse"]
	0 -. Codeptr Stack Trap Locals Globals Tables Memory Extra .-> 3
	0[/"Start"\\]
`;
window.traces["ELSE"]["scheduled"] = ''
window.traces["ELSE"]["scheduled__raw"] = ''
window.traces["ELSE"]["scheduled"] += `<pre class=''>def label = doElse();
def eff__19 = doBranch(label);
def eff_st_put__21 = ctlxfer.put_ELSE(label);
</pre>`;
window.traces["ELSE"]["scheduled__raw"] += `def label = doElse();
def eff__19 = doBranch(label);
def eff_st_put__21 = ctlxfer.put_ELSE(label);
`;
window.traces["ELSE"]["pretty"] = ''
window.traces["ELSE"]["pretty__raw"] = ''
window.traces["ELSE"]["pretty"] += `<pre class=''>def label = doElse();
doBranch(label);
ctlxfer.put_ELSE(label);
</pre>`;
window.traces["ELSE"]["pretty__raw"] += `def label = doElse();
doBranch(label);
ctlxfer.put_ELSE(label);
`;
window.traces["TRY"] = {}
window.traces["TRY"]["parsed"] = ''
window.traces["TRY"]["parsed__raw"] = ''
window.traces["TRY"]["parsed"] += `<pre class=''>def bt = imm_readBlockType();
def arg__23 = (bt);
def eff__22 = doTry(arg__23);
</pre>`;
window.traces["TRY"]["parsed__raw"] += `def bt = imm_readBlockType();
def arg__23 = (bt);
def eff__22 = doTry(arg__23);
`;
window.traces["TRY"]["raw"] = ''
window.traces["TRY"]["raw__raw"] = ''
window.traces["TRY"]["raw"] += `<pre class='graph'>---
config:
  layout: elk
---
graph TD
	1[\\"Finish"/]
	5 -. Codeptr Stack Trap Locals Globals Tables Memory Extra .-> 1
	5["eff__22 doTry"]
	3 --> 5
	3 -. Codeptr .-> 5
	0 -. Stack Trap Locals Globals Tables Memory Extra .-> 5
	0[/"Start"\\]
	3["bt imm_readBlockType"]
	0 -. Codeptr .-> 3
</pre>`;
window.traces["TRY"]["raw__raw"] += `---
config:
  layout: elk
---
graph TD
	1[\\"Finish"/]
	5 -. Codeptr Stack Trap Locals Globals Tables Memory Extra .-> 1
	5["eff__22 doTry"]
	3 --> 5
	3 -. Codeptr .-> 5
	0 -. Stack Trap Locals Globals Tables Memory Extra .-> 5
	0[/"Start"\\]
	3["bt imm_readBlockType"]
	0 -. Codeptr .-> 3
`;
window.traces["TRY"]["spytial"] = ''
window.traces["TRY"]["spytial__raw"] = ''
window.traces["TRY"]["spytial"] += `<pre class=''>{
"atoms": [
{
"id": "node_1",
"type": "finish",
"label": "Finish"
},
{
"id": "node_5",
"type": "intrinsic",
"label": "doTry [eff__22]"
},
{
"id": "node_3",
"type": "intrinsic",
"label": "imm_readBlockType [bt]"
},
{
"id": "node_0",
"type": "start",
"label": "Start"
}
],
"relations": [
{
"id": "uses",
"name": "Uses",
"types": ["sea_node", "sea_node"],
"tuples": [
{
"atoms": ["node_5", "node_3"],
"types": ["intrinsic", "intrinsic"]
}
]
},
{
"id": "state_uses",
"name": "StateUses",
"types": ["sea_node", "sea_node"],
"tuples": [
{
"atoms": ["node_1", "node_5"],
"types": ["finish", "intrinsic"]
},
{
"atoms": ["node_5", "node_3"],
"types": ["intrinsic", "intrinsic"]
},
{
"atoms": ["node_5", "node_0"],
"types": ["intrinsic", "start"]
},
{
"atoms": ["node_3", "node_0"],
"types": ["intrinsic", "start"]
}
]
}
]
}</pre>`;
window.traces["TRY"]["spytial__raw"] += `{
"atoms": [
{
"id": "node_1",
"type": "finish",
"label": "Finish"
},
{
"id": "node_5",
"type": "intrinsic",
"label": "doTry [eff__22]"
},
{
"id": "node_3",
"type": "intrinsic",
"label": "imm_readBlockType [bt]"
},
{
"id": "node_0",
"type": "start",
"label": "Start"
}
],
"relations": [
{
"id": "uses",
"name": "Uses",
"types": ["sea_node", "sea_node"],
"tuples": [
{
"atoms": ["node_5", "node_3"],
"types": ["intrinsic", "intrinsic"]
}
]
},
{
"id": "state_uses",
"name": "StateUses",
"types": ["sea_node", "sea_node"],
"tuples": [
{
"atoms": ["node_1", "node_5"],
"types": ["finish", "intrinsic"]
},
{
"atoms": ["node_5", "node_3"],
"types": ["intrinsic", "intrinsic"]
},
{
"atoms": ["node_5", "node_0"],
"types": ["intrinsic", "start"]
},
{
"atoms": ["node_3", "node_0"],
"types": ["intrinsic", "start"]
}
]
}
]
}`;
window.traces["TRY"]["overloadOps"] = ''
window.traces["TRY"]["overloadOps__raw"] = ''
window.traces["TRY"]["overloadOps"] += `<pre class='graph'>---
config:
  layout: elk
---
graph TD
	1[\\"Finish"/]
	5 -. Codeptr Stack Trap Locals Globals Tables Memory Extra .-> 1
	5["eff__22 doTry"]
	3 --> 5
	3 -. Codeptr .-> 5
	0 -. Stack Trap Locals Globals Tables Memory Extra .-> 5
	0[/"Start"\\]
	3["bt imm_readBlockType"]
	0 -. Codeptr .-> 3
</pre>`;
window.traces["TRY"]["overloadOps__raw"] += `---
config:
  layout: elk
---
graph TD
	1[\\"Finish"/]
	5 -. Codeptr Stack Trap Locals Globals Tables Memory Extra .-> 1
	5["eff__22 doTry"]
	3 --> 5
	3 -. Codeptr .-> 5
	0 -. Stack Trap Locals Globals Tables Memory Extra .-> 5
	0[/"Start"\\]
	3["bt imm_readBlockType"]
	0 -. Codeptr .-> 3
`;
window.traces["TRY"]["addAbstractions"] = ''
window.traces["TRY"]["addAbstractions__raw"] = ''
window.traces["TRY"]["addAbstractions"] += `<pre class='graph'>---
config:
  layout: elk
---
graph TD
	1[\\"Finish"/]
	5 -. Codeptr Stack Trap Locals Globals Tables Memory Extra .-> 1
	5["eff__22 doTry"]
	3 --> 5
	3 -. Codeptr .-> 5
	0 -. Stack Trap Locals Globals Tables Memory Extra .-> 5
	0[/"Start"\\]
	3["bt imm_readBlockType"]
	0 -. Codeptr .-> 3
</pre>`;
window.traces["TRY"]["addAbstractions__raw"] += `---
config:
  layout: elk
---
graph TD
	1[\\"Finish"/]
	5 -. Codeptr Stack Trap Locals Globals Tables Memory Extra .-> 1
	5["eff__22 doTry"]
	3 --> 5
	3 -. Codeptr .-> 5
	0 -. Stack Trap Locals Globals Tables Memory Extra .-> 5
	0[/"Start"\\]
	3["bt imm_readBlockType"]
	0 -. Codeptr .-> 3
`;
window.traces["TRY"]["schedulerMermaid"] = ''
window.traces["TRY"]["schedulerMermaid__raw"] = ''
window.traces["TRY"]["schedulerMermaid"] += `<pre class='graph'>graph TD
subgraph block_27["Block 27"]
	direction TB
	b27_0[/"Start"\\]
	b27_3["bt imm_readBlockType"]
	b27_5["eff__22 doTry"]
	b27_1[\\"Finish"/]
	b27_0 --> b27_3
	b27_3 --> b27_5
	b27_5 --> b27_1
end

</pre>`;
window.traces["TRY"]["schedulerMermaid__raw"] += `graph TD
subgraph block_27["Block 27"]
	direction TB
	b27_0[/"Start"\\]
	b27_3["bt imm_readBlockType"]
	b27_5["eff__22 doTry"]
	b27_1[\\"Finish"/]
	b27_0 --> b27_3
	b27_3 --> b27_5
	b27_5 --> b27_1
end

`;
window.traces["TRY"]["unLEM"] = ''
window.traces["TRY"]["unLEM__raw"] = ''
window.traces["TRY"]["unLEM"] += `<pre class='graph'>---
config:
  layout: elk
---
graph TD
	1[\\"Finish"/]
	5 -. Codeptr Stack Trap Locals Globals Tables Memory Extra .-> 1
	5["eff__22 doTry"]
	3 --> 5
	3 -. Codeptr .-> 5
	0 -. Stack Trap Locals Globals Tables Memory Extra .-> 5
	0[/"Start"\\]
	3["bt imm_readBlockType"]
	0 -. Codeptr .-> 3
</pre>`;
window.traces["TRY"]["unLEM__raw"] += `---
config:
  layout: elk
---
graph TD
	1[\\"Finish"/]
	5 -. Codeptr Stack Trap Locals Globals Tables Memory Extra .-> 1
	5["eff__22 doTry"]
	3 --> 5
	3 -. Codeptr .-> 5
	0 -. Stack Trap Locals Globals Tables Memory Extra .-> 5
	0[/"Start"\\]
	3["bt imm_readBlockType"]
	0 -. Codeptr .-> 3
`;
window.traces["TRY"]["unlem_schedule"] = ''
window.traces["TRY"]["unlem_schedule__raw"] = ''
window.traces["TRY"]["unlem_schedule"] += `<pre class=''>def bt = imm_readBlockType();
def eff__22 = doTry(bt);
</pre>`;
window.traces["TRY"]["unlem_schedule__raw"] += `def bt = imm_readBlockType();
def eff__22 = doTry(bt);
`;
window.traces["TRY"]["spytial_ul"] = ''
window.traces["TRY"]["spytial_ul__raw"] = ''
window.traces["TRY"]["spytial_ul"] += `<pre class=''>{
"atoms": [
{
"id": "node_1",
"type": "finish",
"label": "Finish"
},
{
"id": "node_5",
"type": "intrinsic",
"label": "doTry [eff__22]"
},
{
"id": "node_3",
"type": "intrinsic",
"label": "imm_readBlockType [bt]"
},
{
"id": "node_0",
"type": "start",
"label": "Start"
}
],
"relations": [
{
"id": "uses",
"name": "Uses",
"types": ["sea_node", "sea_node"],
"tuples": [
{
"atoms": ["node_5", "node_3"],
"types": ["intrinsic", "intrinsic"]
}
]
},
{
"id": "state_uses",
"name": "StateUses",
"types": ["sea_node", "sea_node"],
"tuples": [
{
"atoms": ["node_1", "node_5"],
"types": ["finish", "intrinsic"]
},
{
"atoms": ["node_5", "node_3"],
"types": ["intrinsic", "intrinsic"]
},
{
"atoms": ["node_5", "node_0"],
"types": ["intrinsic", "start"]
},
{
"atoms": ["node_3", "node_0"],
"types": ["intrinsic", "start"]
}
]
}
]
}</pre>`;
window.traces["TRY"]["spytial_ul__raw"] += `{
"atoms": [
{
"id": "node_1",
"type": "finish",
"label": "Finish"
},
{
"id": "node_5",
"type": "intrinsic",
"label": "doTry [eff__22]"
},
{
"id": "node_3",
"type": "intrinsic",
"label": "imm_readBlockType [bt]"
},
{
"id": "node_0",
"type": "start",
"label": "Start"
}
],
"relations": [
{
"id": "uses",
"name": "Uses",
"types": ["sea_node", "sea_node"],
"tuples": [
{
"atoms": ["node_5", "node_3"],
"types": ["intrinsic", "intrinsic"]
}
]
},
{
"id": "state_uses",
"name": "StateUses",
"types": ["sea_node", "sea_node"],
"tuples": [
{
"atoms": ["node_1", "node_5"],
"types": ["finish", "intrinsic"]
},
{
"atoms": ["node_5", "node_3"],
"types": ["intrinsic", "intrinsic"]
},
{
"atoms": ["node_5", "node_0"],
"types": ["intrinsic", "start"]
},
{
"atoms": ["node_3", "node_0"],
"types": ["intrinsic", "start"]
}
]
}
]
}`;
window.traces["TRY"]["unlem_scheduler"] = ''
window.traces["TRY"]["unlem_scheduler__raw"] = ''
window.traces["TRY"]["unlem_scheduler"] += `<pre class='graph'>graph TD
subgraph block_28["Block 28"]
	direction TB
	b28_0[/"Start"\\]
	b28_3["bt imm_readBlockType"]
	b28_5["eff__22 doTry"]
	b28_1[\\"Finish"/]
	b28_0 --> b28_3
	b28_3 --> b28_5
	b28_5 --> b28_1
end

</pre>`;
window.traces["TRY"]["unlem_scheduler__raw"] += `graph TD
subgraph block_28["Block 28"]
	direction TB
	b28_0[/"Start"\\]
	b28_3["bt imm_readBlockType"]
	b28_5["eff__22 doTry"]
	b28_1[\\"Finish"/]
	b28_0 --> b28_3
	b28_3 --> b28_5
	b28_5 --> b28_1
end

`;
window.traces["TRY"]["unlem_pretty"] = ''
window.traces["TRY"]["unlem_pretty__raw"] = ''
window.traces["TRY"]["unlem_pretty"] += `<pre class=''>def bt = imm_readBlockType();
doTry(bt);
</pre>`;
window.traces["TRY"]["unlem_pretty__raw"] += `def bt = imm_readBlockType();
doTry(bt);
`;
window.traces["TRY"]["constUnLEM"] = ''
window.traces["TRY"]["constUnLEM__raw"] = ''
window.traces["TRY"]["constUnLEM"] += `<pre class='graph'>---
config:
  layout: elk
---
graph TD
	1[\\"Finish"/]
	5 -. Codeptr Stack Trap Locals Globals Tables Memory Extra .-> 1
	5["eff__22 doTry"]
	3 --> 5
	3 -. Codeptr .-> 5
	0 -. Stack Trap Locals Globals Tables Memory Extra .-> 5
	0[/"Start"\\]
	3["bt imm_readBlockType"]
	0 -. Codeptr .-> 3
</pre>`;
window.traces["TRY"]["constUnLEM__raw"] += `---
config:
  layout: elk
---
graph TD
	1[\\"Finish"/]
	5 -. Codeptr Stack Trap Locals Globals Tables Memory Extra .-> 1
	5["eff__22 doTry"]
	3 --> 5
	3 -. Codeptr .-> 5
	0 -. Stack Trap Locals Globals Tables Memory Extra .-> 5
	0[/"Start"\\]
	3["bt imm_readBlockType"]
	0 -. Codeptr .-> 3
`;
window.traces["TRY"]["chooseMerge"] = ''
window.traces["TRY"]["chooseMerge__raw"] = ''
window.traces["TRY"]["chooseMerge"] += `<pre class='graph'>---
config:
  layout: elk
---
graph TD
	1[\\"Finish"/]
	5 -. Codeptr Stack Trap Locals Globals Tables Memory Extra .-> 1
	5["eff__22 doTry"]
	3 --> 5
	3 -. Codeptr .-> 5
	0 -. Stack Trap Locals Globals Tables Memory Extra .-> 5
	0[/"Start"\\]
	3["bt imm_readBlockType"]
	0 -. Codeptr .-> 3
</pre>`;
window.traces["TRY"]["chooseMerge__raw"] += `---
config:
  layout: elk
---
graph TD
	1[\\"Finish"/]
	5 -. Codeptr Stack Trap Locals Globals Tables Memory Extra .-> 1
	5["eff__22 doTry"]
	3 --> 5
	3 -. Codeptr .-> 5
	0 -. Stack Trap Locals Globals Tables Memory Extra .-> 5
	0[/"Start"\\]
	3["bt imm_readBlockType"]
	0 -. Codeptr .-> 3
`;
window.traces["TRY"]["scheduled"] = ''
window.traces["TRY"]["scheduled__raw"] = ''
window.traces["TRY"]["scheduled"] += `<pre class=''>def bt = imm_readBlockType();
def eff__22 = doTry(bt);
</pre>`;
window.traces["TRY"]["scheduled__raw"] += `def bt = imm_readBlockType();
def eff__22 = doTry(bt);
`;
window.traces["TRY"]["pretty"] = ''
window.traces["TRY"]["pretty__raw"] = ''
window.traces["TRY"]["pretty"] += `<pre class=''>def bt = imm_readBlockType();
doTry(bt);
</pre>`;
window.traces["TRY"]["pretty__raw"] += `def bt = imm_readBlockType();
doTry(bt);
`;
window.traces["END"] = {}
window.traces["END"]["parsed"] = ''
window.traces["END"]["parsed__raw"] = ''
window.traces["END"]["parsed"] += `<pre class=''>def eff__26 = doEnd();
def cond__24 = f_isAtEnd();
if (cond__24) {
	def eff__25 = doReturn();
}
// phis: 
</pre>`;
window.traces["END"]["parsed__raw"] += `def eff__26 = doEnd();
def cond__24 = f_isAtEnd();
if (cond__24) {
	def eff__25 = doReturn();
}
// phis: 
`;
window.traces["END"]["raw"] = ''
window.traces["END"]["raw__raw"] = ''
window.traces["END"]["raw"] += `<pre class='graph'>---
config:
  layout: elk
---
graph TD
	1[\\"Finish"/]
	6 -. Codeptr Stack Trap Locals Globals Tables Memory Extra .-> 1
	6{{"Sϕ Codeptr Stack Trap Locals Globals Tables Memory Extra "}}
	4 --> 6
	5 --> 6
	3 --> 6
	3["eff__26 doEnd"]
	0 -. Codeptr Stack Trap Locals Globals Tables Memory Extra .-> 3
	0[/"Start"\\]
	5["eff__25 doReturn"]
	3 -. Codeptr Stack Trap Locals Globals Tables Memory Extra .-> 5
	4["cond__24 f_isAtEnd"]
</pre>`;
window.traces["END"]["raw__raw"] += `---
config:
  layout: elk
---
graph TD
	1[\\"Finish"/]
	6 -. Codeptr Stack Trap Locals Globals Tables Memory Extra .-> 1
	6{{"Sϕ Codeptr Stack Trap Locals Globals Tables Memory Extra "}}
	4 --> 6
	5 --> 6
	3 --> 6
	3["eff__26 doEnd"]
	0 -. Codeptr Stack Trap Locals Globals Tables Memory Extra .-> 3
	0[/"Start"\\]
	5["eff__25 doReturn"]
	3 -. Codeptr Stack Trap Locals Globals Tables Memory Extra .-> 5
	4["cond__24 f_isAtEnd"]
`;
window.traces["END"]["spytial"] = ''
window.traces["END"]["spytial__raw"] = ''
window.traces["END"]["spytial"] += `<pre class=''>{
"atoms": [
{
"id": "node_1",
"type": "finish",
"label": "Finish"
},
{
"id": "node_6",
"type": "state_phi",
"label": "StatePhi [f_isAtEnd [cond__24]]"
},
{
"id": "node_4",
"type": "intrinsic",
"label": "f_isAtEnd [cond__24]"
},
{
"id": "node_5",
"type": "intrinsic",
"label": "doReturn [eff__25]"
},
{
"id": "node_3",
"type": "intrinsic",
"label": "doEnd [eff__26]"
},
{
"id": "node_0",
"type": "start",
"label": "Start"
}
],
"relations": [
{
"id": "state_uses",
"name": "StateUses",
"types": ["sea_node", "sea_node"],
"tuples": [
{
"atoms": ["node_1", "node_6"],
"types": ["finish", "state_phi"]
},
{
"atoms": ["node_5", "node_3"],
"types": ["intrinsic", "intrinsic"]
},
{
"atoms": ["node_3", "node_0"],
"types": ["intrinsic", "start"]
}
]
},
{
"id": "phi_cond",
"name": "PhiCond",
"types": ["sea_node", "sea_node"],
"tuples": [
{
"atoms": ["node_6", "node_4"],
"types": ["state_phi", "intrinsic"]
}
]
},
{
"id": "phi_true",
"name": "PhiTrue",
"types": ["sea_node", "sea_node"],
"tuples": [
{
"atoms": ["node_6", "node_5"],
"types": ["state_phi", "intrinsic"]
}
]
},
{
"id": "phi_false",
"name": "PhiFalse",
"types": ["sea_node", "sea_node"],
"tuples": [
{
"atoms": ["node_6", "node_3"],
"types": ["state_phi", "intrinsic"]
}
]
}
]
}</pre>`;
window.traces["END"]["spytial__raw"] += `{
"atoms": [
{
"id": "node_1",
"type": "finish",
"label": "Finish"
},
{
"id": "node_6",
"type": "state_phi",
"label": "StatePhi [f_isAtEnd [cond__24]]"
},
{
"id": "node_4",
"type": "intrinsic",
"label": "f_isAtEnd [cond__24]"
},
{
"id": "node_5",
"type": "intrinsic",
"label": "doReturn [eff__25]"
},
{
"id": "node_3",
"type": "intrinsic",
"label": "doEnd [eff__26]"
},
{
"id": "node_0",
"type": "start",
"label": "Start"
}
],
"relations": [
{
"id": "state_uses",
"name": "StateUses",
"types": ["sea_node", "sea_node"],
"tuples": [
{
"atoms": ["node_1", "node_6"],
"types": ["finish", "state_phi"]
},
{
"atoms": ["node_5", "node_3"],
"types": ["intrinsic", "intrinsic"]
},
{
"atoms": ["node_3", "node_0"],
"types": ["intrinsic", "start"]
}
]
},
{
"id": "phi_cond",
"name": "PhiCond",
"types": ["sea_node", "sea_node"],
"tuples": [
{
"atoms": ["node_6", "node_4"],
"types": ["state_phi", "intrinsic"]
}
]
},
{
"id": "phi_true",
"name": "PhiTrue",
"types": ["sea_node", "sea_node"],
"tuples": [
{
"atoms": ["node_6", "node_5"],
"types": ["state_phi", "intrinsic"]
}
]
},
{
"id": "phi_false",
"name": "PhiFalse",
"types": ["sea_node", "sea_node"],
"tuples": [
{
"atoms": ["node_6", "node_3"],
"types": ["state_phi", "intrinsic"]
}
]
}
]
}`;
window.traces["END"]["overloadOps"] = ''
window.traces["END"]["overloadOps__raw"] = ''
window.traces["END"]["overloadOps"] += `<pre class='graph'>---
config:
  layout: elk
---
graph TD
	1[\\"Finish"/]
	6 -. Codeptr Stack Trap Locals Globals Tables Memory Extra .-> 1
	6{{"Sϕ Codeptr Stack Trap Locals Globals Tables Memory Extra "}}
	4 --> 6
	5 --> 6
	3 --> 6
	3["eff__26 doEnd"]
	0 -. Codeptr Stack Trap Locals Globals Tables Memory Extra .-> 3
	0[/"Start"\\]
	5["eff__25 doReturn"]
	3 -. Codeptr Stack Trap Locals Globals Tables Memory Extra .-> 5
	4["cond__24 f_isAtEnd"]
</pre>`;
window.traces["END"]["overloadOps__raw"] += `---
config:
  layout: elk
---
graph TD
	1[\\"Finish"/]
	6 -. Codeptr Stack Trap Locals Globals Tables Memory Extra .-> 1
	6{{"Sϕ Codeptr Stack Trap Locals Globals Tables Memory Extra "}}
	4 --> 6
	5 --> 6
	3 --> 6
	3["eff__26 doEnd"]
	0 -. Codeptr Stack Trap Locals Globals Tables Memory Extra .-> 3
	0[/"Start"\\]
	5["eff__25 doReturn"]
	3 -. Codeptr Stack Trap Locals Globals Tables Memory Extra .-> 5
	4["cond__24 f_isAtEnd"]
`;
window.traces["END"]["addAbstractions"] = ''
window.traces["END"]["addAbstractions__raw"] = ''
window.traces["END"]["addAbstractions"] += `<pre class='graph'>---
config:
  layout: elk
---
graph TD
	1[\\"Finish"/]
	6 -. Codeptr Stack Trap Locals Globals Tables Memory Extra .-> 1
	6{{"Sϕ Codeptr Stack Trap Locals Globals Tables Memory Extra "}}
	4 --> 6
	5 --> 6
	3 --> 6
	3["eff__26 doEnd"]
	0 -. Codeptr Stack Trap Locals Globals Tables Memory Extra .-> 3
	0[/"Start"\\]
	5["eff__25 doReturn"]
	3 -. Codeptr Stack Trap Locals Globals Tables Memory Extra .-> 5
	4["cond__24 f_isAtEnd"]
</pre>`;
window.traces["END"]["addAbstractions__raw"] += `---
config:
  layout: elk
---
graph TD
	1[\\"Finish"/]
	6 -. Codeptr Stack Trap Locals Globals Tables Memory Extra .-> 1
	6{{"Sϕ Codeptr Stack Trap Locals Globals Tables Memory Extra "}}
	4 --> 6
	5 --> 6
	3 --> 6
	3["eff__26 doEnd"]
	0 -. Codeptr Stack Trap Locals Globals Tables Memory Extra .-> 3
	0[/"Start"\\]
	5["eff__25 doReturn"]
	3 -. Codeptr Stack Trap Locals Globals Tables Memory Extra .-> 5
	4["cond__24 f_isAtEnd"]
`;
window.traces["END"]["schedulerMermaid"] = ''
window.traces["END"]["schedulerMermaid__raw"] = ''
window.traces["END"]["schedulerMermaid"] += `<pre class='graph'>graph TD
subgraph block_29["Block 29"]
	direction TB
	b29_1[\\"Finish"/]
end
phi_31 --> block_29
subgraph phi_31["Phi 31"]
	p31_6{{"Sϕ Codeptr Stack Trap Locals Globals Tables Memory Extra "}}
end
block_32 --> phi_31
block_33 --> phi_31
subgraph block_32["Block 32"]
	direction TB
	b32_5["eff__25 doReturn"]
end
branch_30 --> block_32
subgraph branch_30["Branch 30"]
	br30_4["cond__24 f_isAtEnd"]

end
block_34 --> branch_30
subgraph block_34["Block 34"]
	direction TB
	b34_0[/"Start"\\]
	b34_4["cond__24 f_isAtEnd"]
	b34_0 --> b34_4
end
subgraph block_33["Block 33"]
	direction TB
	b33_3["eff__26 doEnd"]
end
branch_30 --> block_33

</pre>`;
window.traces["END"]["schedulerMermaid__raw"] += `graph TD
subgraph block_29["Block 29"]
	direction TB
	b29_1[\\"Finish"/]
end
phi_31 --> block_29
subgraph phi_31["Phi 31"]
	p31_6{{"Sϕ Codeptr Stack Trap Locals Globals Tables Memory Extra "}}
end
block_32 --> phi_31
block_33 --> phi_31
subgraph block_32["Block 32"]
	direction TB
	b32_5["eff__25 doReturn"]
end
branch_30 --> block_32
subgraph branch_30["Branch 30"]
	br30_4["cond__24 f_isAtEnd"]

end
block_34 --> branch_30
subgraph block_34["Block 34"]
	direction TB
	b34_0[/"Start"\\]
	b34_4["cond__24 f_isAtEnd"]
	b34_0 --> b34_4
end
subgraph block_33["Block 33"]
	direction TB
	b33_3["eff__26 doEnd"]
end
branch_30 --> block_33

`;
window.traces["END"]["unLEM"] = ''
window.traces["END"]["unLEM__raw"] = ''
window.traces["END"]["unLEM"] += `<pre class='graph'>---
config:
  layout: elk
---
graph TD
	1[\\"Finish"/]
	6 -. Codeptr Stack Trap Locals Globals Tables Memory Extra .-> 1
	6{{"Sϕ Codeptr Stack Trap Locals Globals Tables Memory Extra "}}
	4 --> 6
	5 --> 6
	3 --> 6
	3["eff__26 doEnd"]
	0 -. Codeptr Stack Trap Locals Globals Tables Memory Extra .-> 3
	0[/"Start"\\]
	5["eff__25 doReturn"]
	3 -. Codeptr Stack Trap Locals Globals Tables Memory Extra .-> 5
	4["cond__24 f_isAtEnd"]
</pre>`;
window.traces["END"]["unLEM__raw"] += `---
config:
  layout: elk
---
graph TD
	1[\\"Finish"/]
	6 -. Codeptr Stack Trap Locals Globals Tables Memory Extra .-> 1
	6{{"Sϕ Codeptr Stack Trap Locals Globals Tables Memory Extra "}}
	4 --> 6
	5 --> 6
	3 --> 6
	3["eff__26 doEnd"]
	0 -. Codeptr Stack Trap Locals Globals Tables Memory Extra .-> 3
	0[/"Start"\\]
	5["eff__25 doReturn"]
	3 -. Codeptr Stack Trap Locals Globals Tables Memory Extra .-> 5
	4["cond__24 f_isAtEnd"]
`;
window.traces["END"]["unlem_schedule"] = ''
window.traces["END"]["unlem_schedule__raw"] = ''
window.traces["END"]["unlem_schedule"] += `<pre class=''>def cond__24 = f_isAtEnd();
if (cond__24) {
	def eff__26 = doEnd();
	def eff__25 = doReturn();
} else {
	def eff__26 = doEnd();
}
// phis: 
</pre>`;
window.traces["END"]["unlem_schedule__raw"] += `def cond__24 = f_isAtEnd();
if (cond__24) {
	def eff__26 = doEnd();
	def eff__25 = doReturn();
} else {
	def eff__26 = doEnd();
}
// phis: 
`;
window.traces["END"]["spytial_ul"] = ''
window.traces["END"]["spytial_ul__raw"] = ''
window.traces["END"]["spytial_ul"] += `<pre class=''>{
"atoms": [
{
"id": "node_1",
"type": "finish",
"label": "Finish"
},
{
"id": "node_6",
"type": "state_phi",
"label": "StatePhi [f_isAtEnd [cond__24]]"
},
{
"id": "node_4",
"type": "intrinsic",
"label": "f_isAtEnd [cond__24]"
},
{
"id": "node_5",
"type": "intrinsic",
"label": "doReturn [eff__25]"
},
{
"id": "node_3",
"type": "intrinsic",
"label": "doEnd [eff__26]"
},
{
"id": "node_0",
"type": "start",
"label": "Start"
}
],
"relations": [
{
"id": "state_uses",
"name": "StateUses",
"types": ["sea_node", "sea_node"],
"tuples": [
{
"atoms": ["node_1", "node_6"],
"types": ["finish", "state_phi"]
},
{
"atoms": ["node_5", "node_3"],
"types": ["intrinsic", "intrinsic"]
},
{
"atoms": ["node_3", "node_0"],
"types": ["intrinsic", "start"]
}
]
},
{
"id": "phi_cond",
"name": "PhiCond",
"types": ["sea_node", "sea_node"],
"tuples": [
{
"atoms": ["node_6", "node_4"],
"types": ["state_phi", "intrinsic"]
}
]
},
{
"id": "phi_true",
"name": "PhiTrue",
"types": ["sea_node", "sea_node"],
"tuples": [
{
"atoms": ["node_6", "node_5"],
"types": ["state_phi", "intrinsic"]
}
]
},
{
"id": "phi_false",
"name": "PhiFalse",
"types": ["sea_node", "sea_node"],
"tuples": [
{
"atoms": ["node_6", "node_3"],
"types": ["state_phi", "intrinsic"]
}
]
}
]
}</pre>`;
window.traces["END"]["spytial_ul__raw"] += `{
"atoms": [
{
"id": "node_1",
"type": "finish",
"label": "Finish"
},
{
"id": "node_6",
"type": "state_phi",
"label": "StatePhi [f_isAtEnd [cond__24]]"
},
{
"id": "node_4",
"type": "intrinsic",
"label": "f_isAtEnd [cond__24]"
},
{
"id": "node_5",
"type": "intrinsic",
"label": "doReturn [eff__25]"
},
{
"id": "node_3",
"type": "intrinsic",
"label": "doEnd [eff__26]"
},
{
"id": "node_0",
"type": "start",
"label": "Start"
}
],
"relations": [
{
"id": "state_uses",
"name": "StateUses",
"types": ["sea_node", "sea_node"],
"tuples": [
{
"atoms": ["node_1", "node_6"],
"types": ["finish", "state_phi"]
},
{
"atoms": ["node_5", "node_3"],
"types": ["intrinsic", "intrinsic"]
},
{
"atoms": ["node_3", "node_0"],
"types": ["intrinsic", "start"]
}
]
},
{
"id": "phi_cond",
"name": "PhiCond",
"types": ["sea_node", "sea_node"],
"tuples": [
{
"atoms": ["node_6", "node_4"],
"types": ["state_phi", "intrinsic"]
}
]
},
{
"id": "phi_true",
"name": "PhiTrue",
"types": ["sea_node", "sea_node"],
"tuples": [
{
"atoms": ["node_6", "node_5"],
"types": ["state_phi", "intrinsic"]
}
]
},
{
"id": "phi_false",
"name": "PhiFalse",
"types": ["sea_node", "sea_node"],
"tuples": [
{
"atoms": ["node_6", "node_3"],
"types": ["state_phi", "intrinsic"]
}
]
}
]
}`;
window.traces["END"]["unlem_scheduler"] = ''
window.traces["END"]["unlem_scheduler__raw"] = ''
window.traces["END"]["unlem_scheduler"] += `<pre class='graph'>graph TD
subgraph block_35["Block 35"]
	direction TB
	b35_1[\\"Finish"/]
end
phi_37 --> block_35
subgraph phi_37["Phi 37"]
	p37_6{{"Sϕ Codeptr Stack Trap Locals Globals Tables Memory Extra "}}
end
block_38 --> phi_37
block_39 --> phi_37
subgraph block_38["Block 38"]
	direction TB
	b38_5["eff__25 doReturn"]
end
branch_36 --> block_38
subgraph branch_36["Branch 36"]
	br36_4["cond__24 f_isAtEnd"]

end
block_40 --> branch_36
subgraph block_40["Block 40"]
	direction TB
	b40_0[/"Start"\\]
	b40_4["cond__24 f_isAtEnd"]
	b40_0 --> b40_4
end
subgraph block_39["Block 39"]
	direction TB
	b39_3["eff__26 doEnd"]
end
branch_36 --> block_39

</pre>`;
window.traces["END"]["unlem_scheduler__raw"] += `graph TD
subgraph block_35["Block 35"]
	direction TB
	b35_1[\\"Finish"/]
end
phi_37 --> block_35
subgraph phi_37["Phi 37"]
	p37_6{{"Sϕ Codeptr Stack Trap Locals Globals Tables Memory Extra "}}
end
block_38 --> phi_37
block_39 --> phi_37
subgraph block_38["Block 38"]
	direction TB
	b38_5["eff__25 doReturn"]
end
branch_36 --> block_38
subgraph branch_36["Branch 36"]
	br36_4["cond__24 f_isAtEnd"]

end
block_40 --> branch_36
subgraph block_40["Block 40"]
	direction TB
	b40_0[/"Start"\\]
	b40_4["cond__24 f_isAtEnd"]
	b40_0 --> b40_4
end
subgraph block_39["Block 39"]
	direction TB
	b39_3["eff__26 doEnd"]
end
branch_36 --> block_39

`;
window.traces["END"]["unlem_pretty"] = ''
window.traces["END"]["unlem_pretty__raw"] = ''
window.traces["END"]["unlem_pretty"] += `<pre class=''>if (f_isAtEnd()) {
	doEnd();
	doReturn();
} else {
	doEnd();
}
</pre>`;
window.traces["END"]["unlem_pretty__raw"] += `if (f_isAtEnd()) {
	doEnd();
	doReturn();
} else {
	doEnd();
}
`;
window.traces["END"]["constUnLEM"] = ''
window.traces["END"]["constUnLEM__raw"] = ''
window.traces["END"]["constUnLEM"] += `<pre class='graph'>---
config:
  layout: elk
---
graph TD
	1[\\"Finish"/]
	6 -. Codeptr Stack Trap Locals Globals Tables Memory Extra .-> 1
	6{{"Sϕ Codeptr Stack Trap Locals Globals Tables Memory Extra "}}
	4 --> 6
	5 --> 6
	3 --> 6
	3["eff__26 doEnd"]
	0 -. Codeptr Stack Trap Locals Globals Tables Memory Extra .-> 3
	0[/"Start"\\]
	5["eff__25 doReturn"]
	3 -. Codeptr Stack Trap Locals Globals Tables Memory Extra .-> 5
	4["cond__24 f_isAtEnd"]
</pre>`;
window.traces["END"]["constUnLEM__raw"] += `---
config:
  layout: elk
---
graph TD
	1[\\"Finish"/]
	6 -. Codeptr Stack Trap Locals Globals Tables Memory Extra .-> 1
	6{{"Sϕ Codeptr Stack Trap Locals Globals Tables Memory Extra "}}
	4 --> 6
	5 --> 6
	3 --> 6
	3["eff__26 doEnd"]
	0 -. Codeptr Stack Trap Locals Globals Tables Memory Extra .-> 3
	0[/"Start"\\]
	5["eff__25 doReturn"]
	3 -. Codeptr Stack Trap Locals Globals Tables Memory Extra .-> 5
	4["cond__24 f_isAtEnd"]
`;
window.traces["END"]["chooseMerge"] = ''
window.traces["END"]["chooseMerge__raw"] = ''
window.traces["END"]["chooseMerge"] += `<pre class='graph'>---
config:
  layout: elk
---
graph TD
	1[\\"Finish"/]
	6 -. Codeptr Stack Trap Locals Globals Tables Memory Extra .-> 1
	6{{"Sϕ Codeptr Stack Trap Locals Globals Tables Memory Extra "}}
	4 --> 6
	5 --> 6
	3 --> 6
	3["eff__26 doEnd"]
	0 -. Codeptr Stack Trap Locals Globals Tables Memory Extra .-> 3
	0[/"Start"\\]
	5["eff__25 doReturn"]
	3 -. Codeptr Stack Trap Locals Globals Tables Memory Extra .-> 5
	4["cond__24 f_isAtEnd"]
</pre>`;
window.traces["END"]["chooseMerge__raw"] += `---
config:
  layout: elk
---
graph TD
	1[\\"Finish"/]
	6 -. Codeptr Stack Trap Locals Globals Tables Memory Extra .-> 1
	6{{"Sϕ Codeptr Stack Trap Locals Globals Tables Memory Extra "}}
	4 --> 6
	5 --> 6
	3 --> 6
	3["eff__26 doEnd"]
	0 -. Codeptr Stack Trap Locals Globals Tables Memory Extra .-> 3
	0[/"Start"\\]
	5["eff__25 doReturn"]
	3 -. Codeptr Stack Trap Locals Globals Tables Memory Extra .-> 5
	4["cond__24 f_isAtEnd"]
`;
window.traces["END"]["scheduled"] = ''
window.traces["END"]["scheduled__raw"] = ''
window.traces["END"]["scheduled"] += `<pre class=''>def cond__24 = f_isAtEnd();
if (cond__24) {
	def eff__26 = doEnd();
	def eff__25 = doReturn();
} else {
	def eff__26 = doEnd();
}
// phis: 
</pre>`;
window.traces["END"]["scheduled__raw"] += `def cond__24 = f_isAtEnd();
if (cond__24) {
	def eff__26 = doEnd();
	def eff__25 = doReturn();
} else {
	def eff__26 = doEnd();
}
// phis: 
`;
window.traces["END"]["pretty"] = ''
window.traces["END"]["pretty__raw"] = ''
window.traces["END"]["pretty"] += `<pre class=''>if (f_isAtEnd()) {
	doEnd();
	doReturn();
} else {
	doEnd();
}
</pre>`;
window.traces["END"]["pretty__raw"] += `if (f_isAtEnd()) {
	doEnd();
	doReturn();
} else {
	doEnd();
}
`;
window.traces["BR"] = {}
window.traces["BR"]["parsed"] = ''
window.traces["BR"]["parsed__raw"] = ''
window.traces["BR"]["parsed"] += `<pre class=''>def depth = imm_readULEB32();
def arg__29 = (depth);
def label = f_getLabel(arg__29);
def arg__28 = (label);
def eff__27 = doBranch(arg__28);
</pre>`;
window.traces["BR"]["parsed__raw"] += `def depth = imm_readULEB32();
def arg__29 = (depth);
def label = f_getLabel(arg__29);
def arg__28 = (label);
def eff__27 = doBranch(arg__28);
`;
window.traces["BR"]["raw"] = ''
window.traces["BR"]["raw__raw"] = ''
window.traces["BR"]["raw"] += `<pre class='graph'>---
config:
  layout: elk
---
graph TD
	1[\\"Finish"/]
	7 -. Codeptr Stack Trap Locals Globals Tables Memory Extra .-> 1
	7["eff__27 doBranch"]
	5 --> 7
	3 -. Codeptr .-> 7
	0 -. Stack Trap Locals Globals Tables Memory Extra .-> 7
	0[/"Start"\\]
	3["depth imm_readULEB32"]
	0 -. Codeptr .-> 3
	5["label f_getLabel"]
	3 --> 5
</pre>`;
window.traces["BR"]["raw__raw"] += `---
config:
  layout: elk
---
graph TD
	1[\\"Finish"/]
	7 -. Codeptr Stack Trap Locals Globals Tables Memory Extra .-> 1
	7["eff__27 doBranch"]
	5 --> 7
	3 -. Codeptr .-> 7
	0 -. Stack Trap Locals Globals Tables Memory Extra .-> 7
	0[/"Start"\\]
	3["depth imm_readULEB32"]
	0 -. Codeptr .-> 3
	5["label f_getLabel"]
	3 --> 5
`;
window.traces["BR"]["spytial"] = ''
window.traces["BR"]["spytial__raw"] = ''
window.traces["BR"]["spytial"] += `<pre class=''>{
"atoms": [
{
"id": "node_1",
"type": "finish",
"label": "Finish"
},
{
"id": "node_7",
"type": "intrinsic",
"label": "doBranch [eff__27]"
},
{
"id": "node_5",
"type": "intrinsic",
"label": "f_getLabel [label]"
},
{
"id": "node_3",
"type": "intrinsic",
"label": "imm_readULEB32 [depth]"
},
{
"id": "node_0",
"type": "start",
"label": "Start"
}
],
"relations": [
{
"id": "uses",
"name": "Uses",
"types": ["sea_node", "sea_node"],
"tuples": [
{
"atoms": ["node_7", "node_5"],
"types": ["intrinsic", "intrinsic"]
},
{
"atoms": ["node_5", "node_3"],
"types": ["intrinsic", "intrinsic"]
}
]
},
{
"id": "state_uses",
"name": "StateUses",
"types": ["sea_node", "sea_node"],
"tuples": [
{
"atoms": ["node_1", "node_7"],
"types": ["finish", "intrinsic"]
},
{
"atoms": ["node_7", "node_3"],
"types": ["intrinsic", "intrinsic"]
},
{
"atoms": ["node_7", "node_0"],
"types": ["intrinsic", "start"]
},
{
"atoms": ["node_3", "node_0"],
"types": ["intrinsic", "start"]
}
]
}
]
}</pre>`;
window.traces["BR"]["spytial__raw"] += `{
"atoms": [
{
"id": "node_1",
"type": "finish",
"label": "Finish"
},
{
"id": "node_7",
"type": "intrinsic",
"label": "doBranch [eff__27]"
},
{
"id": "node_5",
"type": "intrinsic",
"label": "f_getLabel [label]"
},
{
"id": "node_3",
"type": "intrinsic",
"label": "imm_readULEB32 [depth]"
},
{
"id": "node_0",
"type": "start",
"label": "Start"
}
],
"relations": [
{
"id": "uses",
"name": "Uses",
"types": ["sea_node", "sea_node"],
"tuples": [
{
"atoms": ["node_7", "node_5"],
"types": ["intrinsic", "intrinsic"]
},
{
"atoms": ["node_5", "node_3"],
"types": ["intrinsic", "intrinsic"]
}
]
},
{
"id": "state_uses",
"name": "StateUses",
"types": ["sea_node", "sea_node"],
"tuples": [
{
"atoms": ["node_1", "node_7"],
"types": ["finish", "intrinsic"]
},
{
"atoms": ["node_7", "node_3"],
"types": ["intrinsic", "intrinsic"]
},
{
"atoms": ["node_7", "node_0"],
"types": ["intrinsic", "start"]
},
{
"atoms": ["node_3", "node_0"],
"types": ["intrinsic", "start"]
}
]
}
]
}`;
window.traces["BR"]["overloadOps"] = ''
window.traces["BR"]["overloadOps__raw"] = ''
window.traces["BR"]["overloadOps"] += `<pre class='graph'>---
config:
  layout: elk
---
graph TD
	1[\\"Finish"/]
	7 -. Codeptr Stack Trap Locals Globals Tables Memory .-> 1
	8 -. Extra .-> 1
	8["eff_st_put__30 ctlxfer.put_BR"]
	5 --> 8
	7 -. Extra .-> 8
	7["eff__27 doBranch"]
	5 --> 7
	3 -. Codeptr .-> 7
	0 -. Stack Trap Locals Globals Tables Memory Extra .-> 7
	0[/"Start"\\]
	3["depth imm_readULEB32"]
	0 -. Codeptr .-> 3
	5["label f_getLabel"]
	3 --> 5
</pre>`;
window.traces["BR"]["overloadOps__raw"] += `---
config:
  layout: elk
---
graph TD
	1[\\"Finish"/]
	7 -. Codeptr Stack Trap Locals Globals Tables Memory .-> 1
	8 -. Extra .-> 1
	8["eff_st_put__30 ctlxfer.put_BR"]
	5 --> 8
	7 -. Extra .-> 8
	7["eff__27 doBranch"]
	5 --> 7
	3 -. Codeptr .-> 7
	0 -. Stack Trap Locals Globals Tables Memory Extra .-> 7
	0[/"Start"\\]
	3["depth imm_readULEB32"]
	0 -. Codeptr .-> 3
	5["label f_getLabel"]
	3 --> 5
`;
window.traces["BR"]["addAbstractions"] = ''
window.traces["BR"]["addAbstractions__raw"] = ''
window.traces["BR"]["addAbstractions"] += `<pre class='graph'>---
config:
  layout: elk
---
graph TD
	1[\\"Finish"/]
	7 -. Codeptr Stack Trap Locals Globals Tables Memory .-> 1
	8 -. Extra .-> 1
	8["eff_st_put__30 ctlxfer.put_BR"]
	5 --> 8
	7 -. Extra .-> 8
	7["eff__27 doBranch"]
	5 --> 7
	3 -. Codeptr .-> 7
	0 -. Stack Trap Locals Globals Tables Memory Extra .-> 7
	0[/"Start"\\]
	3["depth imm_readULEB32"]
	0 -. Codeptr .-> 3
	5["label f_getLabel"]
	3 --> 5
</pre>`;
window.traces["BR"]["addAbstractions__raw"] += `---
config:
  layout: elk
---
graph TD
	1[\\"Finish"/]
	7 -. Codeptr Stack Trap Locals Globals Tables Memory .-> 1
	8 -. Extra .-> 1
	8["eff_st_put__30 ctlxfer.put_BR"]
	5 --> 8
	7 -. Extra .-> 8
	7["eff__27 doBranch"]
	5 --> 7
	3 -. Codeptr .-> 7
	0 -. Stack Trap Locals Globals Tables Memory Extra .-> 7
	0[/"Start"\\]
	3["depth imm_readULEB32"]
	0 -. Codeptr .-> 3
	5["label f_getLabel"]
	3 --> 5
`;
window.traces["BR"]["schedulerMermaid"] = ''
window.traces["BR"]["schedulerMermaid__raw"] = ''
window.traces["BR"]["schedulerMermaid"] += `<pre class='graph'>graph TD
subgraph block_41["Block 41"]
	direction TB
	b41_0[/"Start"\\]
	b41_3["depth imm_readULEB32"]
	b41_5["label f_getLabel"]
	b41_7["eff__27 doBranch"]
	b41_8["eff_st_put__30 ctlxfer.put_BR"]
	b41_1[\\"Finish"/]
	b41_0 --> b41_3
	b41_3 --> b41_5
	b41_5 --> b41_7
	b41_7 --> b41_8
	b41_8 --> b41_1
end

</pre>`;
window.traces["BR"]["schedulerMermaid__raw"] += `graph TD
subgraph block_41["Block 41"]
	direction TB
	b41_0[/"Start"\\]
	b41_3["depth imm_readULEB32"]
	b41_5["label f_getLabel"]
	b41_7["eff__27 doBranch"]
	b41_8["eff_st_put__30 ctlxfer.put_BR"]
	b41_1[\\"Finish"/]
	b41_0 --> b41_3
	b41_3 --> b41_5
	b41_5 --> b41_7
	b41_7 --> b41_8
	b41_8 --> b41_1
end

`;
window.traces["BR"]["unLEM"] = ''
window.traces["BR"]["unLEM__raw"] = ''
window.traces["BR"]["unLEM"] += `<pre class='graph'>---
config:
  layout: elk
---
graph TD
	1[\\"Finish"/]
	7 -. Codeptr Stack Trap Locals Globals Tables Memory .-> 1
	8 -. Extra .-> 1
	8["eff_st_put__30 ctlxfer.put_BR"]
	5 --> 8
	7 -. Extra .-> 8
	7["eff__27 doBranch"]
	5 --> 7
	3 -. Codeptr .-> 7
	0 -. Stack Trap Locals Globals Tables Memory Extra .-> 7
	0[/"Start"\\]
	3["depth imm_readULEB32"]
	0 -. Codeptr .-> 3
	5["label f_getLabel"]
	3 --> 5
</pre>`;
window.traces["BR"]["unLEM__raw"] += `---
config:
  layout: elk
---
graph TD
	1[\\"Finish"/]
	7 -. Codeptr Stack Trap Locals Globals Tables Memory .-> 1
	8 -. Extra .-> 1
	8["eff_st_put__30 ctlxfer.put_BR"]
	5 --> 8
	7 -. Extra .-> 8
	7["eff__27 doBranch"]
	5 --> 7
	3 -. Codeptr .-> 7
	0 -. Stack Trap Locals Globals Tables Memory Extra .-> 7
	0[/"Start"\\]
	3["depth imm_readULEB32"]
	0 -. Codeptr .-> 3
	5["label f_getLabel"]
	3 --> 5
`;
window.traces["BR"]["unlem_schedule"] = ''
window.traces["BR"]["unlem_schedule__raw"] = ''
window.traces["BR"]["unlem_schedule"] += `<pre class=''>def depth = imm_readULEB32();
def label = f_getLabel(depth);
def eff__27 = doBranch(label);
def eff_st_put__30 = ctlxfer.put_BR(label);
</pre>`;
window.traces["BR"]["unlem_schedule__raw"] += `def depth = imm_readULEB32();
def label = f_getLabel(depth);
def eff__27 = doBranch(label);
def eff_st_put__30 = ctlxfer.put_BR(label);
`;
window.traces["BR"]["spytial_ul"] = ''
window.traces["BR"]["spytial_ul__raw"] = ''
window.traces["BR"]["spytial_ul"] += `<pre class=''>{
"atoms": [
{
"id": "node_1",
"type": "finish",
"label": "Finish"
},
{
"id": "node_7",
"type": "intrinsic",
"label": "doBranch [eff__27]"
},
{
"id": "node_8",
"type": "intrinsic",
"label": "ctlxfer.put_BR [eff_st_put__30]"
},
{
"id": "node_5",
"type": "intrinsic",
"label": "f_getLabel [label]"
},
{
"id": "node_3",
"type": "intrinsic",
"label": "imm_readULEB32 [depth]"
},
{
"id": "node_0",
"type": "start",
"label": "Start"
}
],
"relations": [
{
"id": "uses",
"name": "Uses",
"types": ["sea_node", "sea_node"],
"tuples": [
{
"atoms": ["node_7", "node_5"],
"types": ["intrinsic", "intrinsic"]
},
{
"atoms": ["node_8", "node_5"],
"types": ["intrinsic", "intrinsic"]
},
{
"atoms": ["node_5", "node_3"],
"types": ["intrinsic", "intrinsic"]
}
]
},
{
"id": "state_uses",
"name": "StateUses",
"types": ["sea_node", "sea_node"],
"tuples": [
{
"atoms": ["node_1", "node_7"],
"types": ["finish", "intrinsic"]
},
{
"atoms": ["node_1", "node_8"],
"types": ["finish", "intrinsic"]
},
{
"atoms": ["node_7", "node_3"],
"types": ["intrinsic", "intrinsic"]
},
{
"atoms": ["node_7", "node_0"],
"types": ["intrinsic", "start"]
},
{
"atoms": ["node_8", "node_7"],
"types": ["intrinsic", "intrinsic"]
},
{
"atoms": ["node_3", "node_0"],
"types": ["intrinsic", "start"]
}
]
}
]
}</pre>`;
window.traces["BR"]["spytial_ul__raw"] += `{
"atoms": [
{
"id": "node_1",
"type": "finish",
"label": "Finish"
},
{
"id": "node_7",
"type": "intrinsic",
"label": "doBranch [eff__27]"
},
{
"id": "node_8",
"type": "intrinsic",
"label": "ctlxfer.put_BR [eff_st_put__30]"
},
{
"id": "node_5",
"type": "intrinsic",
"label": "f_getLabel [label]"
},
{
"id": "node_3",
"type": "intrinsic",
"label": "imm_readULEB32 [depth]"
},
{
"id": "node_0",
"type": "start",
"label": "Start"
}
],
"relations": [
{
"id": "uses",
"name": "Uses",
"types": ["sea_node", "sea_node"],
"tuples": [
{
"atoms": ["node_7", "node_5"],
"types": ["intrinsic", "intrinsic"]
},
{
"atoms": ["node_8", "node_5"],
"types": ["intrinsic", "intrinsic"]
},
{
"atoms": ["node_5", "node_3"],
"types": ["intrinsic", "intrinsic"]
}
]
},
{
"id": "state_uses",
"name": "StateUses",
"types": ["sea_node", "sea_node"],
"tuples": [
{
"atoms": ["node_1", "node_7"],
"types": ["finish", "intrinsic"]
},
{
"atoms": ["node_1", "node_8"],
"types": ["finish", "intrinsic"]
},
{
"atoms": ["node_7", "node_3"],
"types": ["intrinsic", "intrinsic"]
},
{
"atoms": ["node_7", "node_0"],
"types": ["intrinsic", "start"]
},
{
"atoms": ["node_8", "node_7"],
"types": ["intrinsic", "intrinsic"]
},
{
"atoms": ["node_3", "node_0"],
"types": ["intrinsic", "start"]
}
]
}
]
}`;
window.traces["BR"]["unlem_scheduler"] = ''
window.traces["BR"]["unlem_scheduler__raw"] = ''
window.traces["BR"]["unlem_scheduler"] += `<pre class='graph'>graph TD
subgraph block_42["Block 42"]
	direction TB
	b42_0[/"Start"\\]
	b42_3["depth imm_readULEB32"]
	b42_5["label f_getLabel"]
	b42_7["eff__27 doBranch"]
	b42_8["eff_st_put__30 ctlxfer.put_BR"]
	b42_1[\\"Finish"/]
	b42_0 --> b42_3
	b42_3 --> b42_5
	b42_5 --> b42_7
	b42_7 --> b42_8
	b42_8 --> b42_1
end

</pre>`;
window.traces["BR"]["unlem_scheduler__raw"] += `graph TD
subgraph block_42["Block 42"]
	direction TB
	b42_0[/"Start"\\]
	b42_3["depth imm_readULEB32"]
	b42_5["label f_getLabel"]
	b42_7["eff__27 doBranch"]
	b42_8["eff_st_put__30 ctlxfer.put_BR"]
	b42_1[\\"Finish"/]
	b42_0 --> b42_3
	b42_3 --> b42_5
	b42_5 --> b42_7
	b42_7 --> b42_8
	b42_8 --> b42_1
end

`;
window.traces["BR"]["unlem_pretty"] = ''
window.traces["BR"]["unlem_pretty__raw"] = ''
window.traces["BR"]["unlem_pretty"] += `<pre class=''>def depth = imm_readULEB32();
def label = f_getLabel(depth);
doBranch(label);
ctlxfer.put_BR(label);
</pre>`;
window.traces["BR"]["unlem_pretty__raw"] += `def depth = imm_readULEB32();
def label = f_getLabel(depth);
doBranch(label);
ctlxfer.put_BR(label);
`;
window.traces["BR"]["constUnLEM"] = ''
window.traces["BR"]["constUnLEM__raw"] = ''
window.traces["BR"]["constUnLEM"] += `<pre class='graph'>---
config:
  layout: elk
---
graph TD
	1[\\"Finish"/]
	7 -. Codeptr Stack Trap Locals Globals Tables Memory .-> 1
	8 -. Extra .-> 1
	8["eff_st_put__30 ctlxfer.put_BR"]
	5 --> 8
	7 -. Extra .-> 8
	7["eff__27 doBranch"]
	5 --> 7
	3 -. Codeptr .-> 7
	0 -. Stack Trap Locals Globals Tables Memory Extra .-> 7
	0[/"Start"\\]
	3["depth imm_readULEB32"]
	0 -. Codeptr .-> 3
	5["label f_getLabel"]
	3 --> 5
</pre>`;
window.traces["BR"]["constUnLEM__raw"] += `---
config:
  layout: elk
---
graph TD
	1[\\"Finish"/]
	7 -. Codeptr Stack Trap Locals Globals Tables Memory .-> 1
	8 -. Extra .-> 1
	8["eff_st_put__30 ctlxfer.put_BR"]
	5 --> 8
	7 -. Extra .-> 8
	7["eff__27 doBranch"]
	5 --> 7
	3 -. Codeptr .-> 7
	0 -. Stack Trap Locals Globals Tables Memory Extra .-> 7
	0[/"Start"\\]
	3["depth imm_readULEB32"]
	0 -. Codeptr .-> 3
	5["label f_getLabel"]
	3 --> 5
`;
window.traces["BR"]["chooseMerge"] = ''
window.traces["BR"]["chooseMerge__raw"] = ''
window.traces["BR"]["chooseMerge"] += `<pre class='graph'>---
config:
  layout: elk
---
graph TD
	1[\\"Finish"/]
	7 -. Codeptr Stack Trap Locals Globals Tables Memory .-> 1
	8 -. Extra .-> 1
	8["eff_st_put__30 ctlxfer.put_BR"]
	5 --> 8
	7 -. Extra .-> 8
	7["eff__27 doBranch"]
	5 --> 7
	3 -. Codeptr .-> 7
	0 -. Stack Trap Locals Globals Tables Memory Extra .-> 7
	0[/"Start"\\]
	3["depth imm_readULEB32"]
	0 -. Codeptr .-> 3
	5["label f_getLabel"]
	3 --> 5
</pre>`;
window.traces["BR"]["chooseMerge__raw"] += `---
config:
  layout: elk
---
graph TD
	1[\\"Finish"/]
	7 -. Codeptr Stack Trap Locals Globals Tables Memory .-> 1
	8 -. Extra .-> 1
	8["eff_st_put__30 ctlxfer.put_BR"]
	5 --> 8
	7 -. Extra .-> 8
	7["eff__27 doBranch"]
	5 --> 7
	3 -. Codeptr .-> 7
	0 -. Stack Trap Locals Globals Tables Memory Extra .-> 7
	0[/"Start"\\]
	3["depth imm_readULEB32"]
	0 -. Codeptr .-> 3
	5["label f_getLabel"]
	3 --> 5
`;
window.traces["BR"]["scheduled"] = ''
window.traces["BR"]["scheduled__raw"] = ''
window.traces["BR"]["scheduled"] += `<pre class=''>def depth = imm_readULEB32();
def label = f_getLabel(depth);
def eff__27 = doBranch(label);
def eff_st_put__30 = ctlxfer.put_BR(label);
</pre>`;
window.traces["BR"]["scheduled__raw"] += `def depth = imm_readULEB32();
def label = f_getLabel(depth);
def eff__27 = doBranch(label);
def eff_st_put__30 = ctlxfer.put_BR(label);
`;
window.traces["BR"]["pretty"] = ''
window.traces["BR"]["pretty__raw"] = ''
window.traces["BR"]["pretty"] += `<pre class=''>def depth = imm_readULEB32();
def label = f_getLabel(depth);
doBranch(label);
ctlxfer.put_BR(label);
</pre>`;
window.traces["BR"]["pretty__raw"] += `def depth = imm_readULEB32();
def label = f_getLabel(depth);
doBranch(label);
ctlxfer.put_BR(label);
`;
window.traces["BR_IF"] = {}
window.traces["BR_IF"]["parsed"] = ''
window.traces["BR_IF"]["parsed__raw"] = ''
window.traces["BR_IF"]["parsed"] += `<pre class=''>def depth = imm_readULEB32();
def arg__37 = (depth);
def label = f_getLabel(arg__37);
def cond = pop_u32();
def arg__36 : u32 = 0;
def arg__35 = (cond);
def cond__31 = u32.!=(arg__35, arg__36);
if (cond__31) {
	def arg__33 = (label);
	def eff__32 = doBranch(arg__33);
} else {
	def eff__34 = doFallthru();
}
// phis: 
</pre>`;
window.traces["BR_IF"]["parsed__raw"] += `def depth = imm_readULEB32();
def arg__37 = (depth);
def label = f_getLabel(arg__37);
def cond = pop_u32();
def arg__36 : u32 = 0;
def arg__35 = (cond);
def cond__31 = u32.!=(arg__35, arg__36);
if (cond__31) {
	def arg__33 = (label);
	def eff__32 = doBranch(arg__33);
} else {
	def eff__34 = doFallthru();
}
// phis: 
`;
window.traces["BR_IF"]["raw"] = ''
window.traces["BR_IF"]["raw__raw"] = ''
window.traces["BR_IF"]["raw"] += `<pre class='graph'>---
config:
  layout: elk
---
graph TD
	1[\\"Finish"/]
	13 -. Codeptr Stack Trap Locals Globals Tables Memory Extra .-> 1
	13{{"Sϕ Codeptr Stack Trap Locals Globals Tables Memory Extra "}}
	9 --> 13
	12 --> 13
	10 --> 13
	10["eff__34 doFallthru"]
	3 -. Codeptr .-> 10
	6 -. Stack .-> 10
	0 -. Trap Locals Globals Tables Memory Extra .-> 10
	0[/"Start"\\]
	6["cond pop_u32"]
	0 -. Stack .-> 6
	3["depth imm_readULEB32"]
	0 -. Codeptr .-> 3
	12["eff__32 doBranch"]
	5 --> 12
	3 -. Codeptr .-> 12
	6 -. Stack .-> 12
	0 -. Trap Locals Globals Tables Memory Extra .-> 12
	5["label f_getLabel"]
	3 --> 5
	9["cond__31 u32.!="]
	6 --> 9
	7 --> 9
	7["arg__36 0"]
</pre>`;
window.traces["BR_IF"]["raw__raw"] += `---
config:
  layout: elk
---
graph TD
	1[\\"Finish"/]
	13 -. Codeptr Stack Trap Locals Globals Tables Memory Extra .-> 1
	13{{"Sϕ Codeptr Stack Trap Locals Globals Tables Memory Extra "}}
	9 --> 13
	12 --> 13
	10 --> 13
	10["eff__34 doFallthru"]
	3 -. Codeptr .-> 10
	6 -. Stack .-> 10
	0 -. Trap Locals Globals Tables Memory Extra .-> 10
	0[/"Start"\\]
	6["cond pop_u32"]
	0 -. Stack .-> 6
	3["depth imm_readULEB32"]
	0 -. Codeptr .-> 3
	12["eff__32 doBranch"]
	5 --> 12
	3 -. Codeptr .-> 12
	6 -. Stack .-> 12
	0 -. Trap Locals Globals Tables Memory Extra .-> 12
	5["label f_getLabel"]
	3 --> 5
	9["cond__31 u32.!="]
	6 --> 9
	7 --> 9
	7["arg__36 0"]
`;
window.traces["BR_IF"]["spytial"] = ''
window.traces["BR_IF"]["spytial__raw"] = ''
window.traces["BR_IF"]["spytial"] += `<pre class=''>{
"atoms": [
{
"id": "node_1",
"type": "finish",
"label": "Finish"
},
{
"id": "node_13",
"type": "state_phi",
"label": "StatePhi [u32.!= [cond__31]]"
},
{
"id": "node_9",
"type": "intrinsic",
"label": "u32.!= [cond__31]"
},
{
"id": "node_12",
"type": "intrinsic",
"label": "doBranch [eff__32]"
},
{
"id": "node_10",
"type": "intrinsic",
"label": "doFallthru [eff__34]"
},
{
"id": "node_6",
"type": "intrinsic",
"label": "pop_u32 [cond]"
},
{
"id": "node_7",
"type": "lit",
"label": "0"
},
{
"id": "node_5",
"type": "intrinsic",
"label": "f_getLabel [label]"
},
{
"id": "node_3",
"type": "intrinsic",
"label": "imm_readULEB32 [depth]"
},
{
"id": "node_0",
"type": "start",
"label": "Start"
}
],
"relations": [
{
"id": "uses",
"name": "Uses",
"types": ["sea_node", "sea_node"],
"tuples": [
{
"atoms": ["node_9", "node_6"],
"types": ["intrinsic", "intrinsic"]
},
{
"atoms": ["node_9", "node_7"],
"types": ["intrinsic", "lit"]
},
{
"atoms": ["node_12", "node_5"],
"types": ["intrinsic", "intrinsic"]
},
{
"atoms": ["node_5", "node_3"],
"types": ["intrinsic", "intrinsic"]
}
]
},
{
"id": "state_uses",
"name": "StateUses",
"types": ["sea_node", "sea_node"],
"tuples": [
{
"atoms": ["node_1", "node_13"],
"types": ["finish", "state_phi"]
},
{
"atoms": ["node_12", "node_3"],
"types": ["intrinsic", "intrinsic"]
},
{
"atoms": ["node_12", "node_6"],
"types": ["intrinsic", "intrinsic"]
},
{
"atoms": ["node_12", "node_0"],
"types": ["intrinsic", "start"]
},
{
"atoms": ["node_10", "node_3"],
"types": ["intrinsic", "intrinsic"]
},
{
"atoms": ["node_10", "node_6"],
"types": ["intrinsic", "intrinsic"]
},
{
"atoms": ["node_10", "node_0"],
"types": ["intrinsic", "start"]
},
{
"atoms": ["node_6", "node_0"],
"types": ["intrinsic", "start"]
},
{
"atoms": ["node_3", "node_0"],
"types": ["intrinsic", "start"]
}
]
},
{
"id": "phi_cond",
"name": "PhiCond",
"types": ["sea_node", "sea_node"],
"tuples": [
{
"atoms": ["node_13", "node_9"],
"types": ["state_phi", "intrinsic"]
}
]
},
{
"id": "phi_true",
"name": "PhiTrue",
"types": ["sea_node", "sea_node"],
"tuples": [
{
"atoms": ["node_13", "node_12"],
"types": ["state_phi", "intrinsic"]
}
]
},
{
"id": "phi_false",
"name": "PhiFalse",
"types": ["sea_node", "sea_node"],
"tuples": [
{
"atoms": ["node_13", "node_10"],
"types": ["state_phi", "intrinsic"]
}
]
}
]
}</pre>`;
window.traces["BR_IF"]["spytial__raw"] += `{
"atoms": [
{
"id": "node_1",
"type": "finish",
"label": "Finish"
},
{
"id": "node_13",
"type": "state_phi",
"label": "StatePhi [u32.!= [cond__31]]"
},
{
"id": "node_9",
"type": "intrinsic",
"label": "u32.!= [cond__31]"
},
{
"id": "node_12",
"type": "intrinsic",
"label": "doBranch [eff__32]"
},
{
"id": "node_10",
"type": "intrinsic",
"label": "doFallthru [eff__34]"
},
{
"id": "node_6",
"type": "intrinsic",
"label": "pop_u32 [cond]"
},
{
"id": "node_7",
"type": "lit",
"label": "0"
},
{
"id": "node_5",
"type": "intrinsic",
"label": "f_getLabel [label]"
},
{
"id": "node_3",
"type": "intrinsic",
"label": "imm_readULEB32 [depth]"
},
{
"id": "node_0",
"type": "start",
"label": "Start"
}
],
"relations": [
{
"id": "uses",
"name": "Uses",
"types": ["sea_node", "sea_node"],
"tuples": [
{
"atoms": ["node_9", "node_6"],
"types": ["intrinsic", "intrinsic"]
},
{
"atoms": ["node_9", "node_7"],
"types": ["intrinsic", "lit"]
},
{
"atoms": ["node_12", "node_5"],
"types": ["intrinsic", "intrinsic"]
},
{
"atoms": ["node_5", "node_3"],
"types": ["intrinsic", "intrinsic"]
}
]
},
{
"id": "state_uses",
"name": "StateUses",
"types": ["sea_node", "sea_node"],
"tuples": [
{
"atoms": ["node_1", "node_13"],
"types": ["finish", "state_phi"]
},
{
"atoms": ["node_12", "node_3"],
"types": ["intrinsic", "intrinsic"]
},
{
"atoms": ["node_12", "node_6"],
"types": ["intrinsic", "intrinsic"]
},
{
"atoms": ["node_12", "node_0"],
"types": ["intrinsic", "start"]
},
{
"atoms": ["node_10", "node_3"],
"types": ["intrinsic", "intrinsic"]
},
{
"atoms": ["node_10", "node_6"],
"types": ["intrinsic", "intrinsic"]
},
{
"atoms": ["node_10", "node_0"],
"types": ["intrinsic", "start"]
},
{
"atoms": ["node_6", "node_0"],
"types": ["intrinsic", "start"]
},
{
"atoms": ["node_3", "node_0"],
"types": ["intrinsic", "start"]
}
]
},
{
"id": "phi_cond",
"name": "PhiCond",
"types": ["sea_node", "sea_node"],
"tuples": [
{
"atoms": ["node_13", "node_9"],
"types": ["state_phi", "intrinsic"]
}
]
},
{
"id": "phi_true",
"name": "PhiTrue",
"types": ["sea_node", "sea_node"],
"tuples": [
{
"atoms": ["node_13", "node_12"],
"types": ["state_phi", "intrinsic"]
}
]
},
{
"id": "phi_false",
"name": "PhiFalse",
"types": ["sea_node", "sea_node"],
"tuples": [
{
"atoms": ["node_13", "node_10"],
"types": ["state_phi", "intrinsic"]
}
]
}
]
}`;
window.traces["BR_IF"]["overloadOps"] = ''
window.traces["BR_IF"]["overloadOps__raw"] = ''
window.traces["BR_IF"]["overloadOps"] += `<pre class='graph'>---
config:
  layout: elk
---
graph TD
	1[\\"Finish"/]
	13 -. Codeptr Stack Trap Locals Globals Tables Memory .-> 1
	14 -. Extra .-> 1
	14["eff_st_put__38 ctlxfer.put_BR_IF"]
	5 --> 14
	13 -. Extra .-> 14
	13{{"Sϕ Codeptr Stack Trap Locals Globals Tables Memory Extra "}}
	9 --> 13
	12 --> 13
	10 --> 13
	10["eff__34 doFallthru"]
	3 -. Codeptr .-> 10
	6 -. Stack .-> 10
	0 -. Trap Locals Globals Tables Memory Extra .-> 10
	0[/"Start"\\]
	6["cond pop_u32"]
	0 -. Stack .-> 6
	3["depth imm_readULEB32"]
	0 -. Codeptr .-> 3
	12["eff__32 doBranch"]
	5 --> 12
	3 -. Codeptr .-> 12
	6 -. Stack .-> 12
	0 -. Trap Locals Globals Tables Memory Extra .-> 12
	5["label f_getLabel"]
	3 --> 5
	9["cond__31 U32_not_equals"]
	6 --> 9
	7 --> 9
	7["arg__36 0"]
</pre>`;
window.traces["BR_IF"]["overloadOps__raw"] += `---
config:
  layout: elk
---
graph TD
	1[\\"Finish"/]
	13 -. Codeptr Stack Trap Locals Globals Tables Memory .-> 1
	14 -. Extra .-> 1
	14["eff_st_put__38 ctlxfer.put_BR_IF"]
	5 --> 14
	13 -. Extra .-> 14
	13{{"Sϕ Codeptr Stack Trap Locals Globals Tables Memory Extra "}}
	9 --> 13
	12 --> 13
	10 --> 13
	10["eff__34 doFallthru"]
	3 -. Codeptr .-> 10
	6 -. Stack .-> 10
	0 -. Trap Locals Globals Tables Memory Extra .-> 10
	0[/"Start"\\]
	6["cond pop_u32"]
	0 -. Stack .-> 6
	3["depth imm_readULEB32"]
	0 -. Codeptr .-> 3
	12["eff__32 doBranch"]
	5 --> 12
	3 -. Codeptr .-> 12
	6 -. Stack .-> 12
	0 -. Trap Locals Globals Tables Memory Extra .-> 12
	5["label f_getLabel"]
	3 --> 5
	9["cond__31 U32_not_equals"]
	6 --> 9
	7 --> 9
	7["arg__36 0"]
`;
window.traces["BR_IF"]["addAbstractions"] = ''
window.traces["BR_IF"]["addAbstractions__raw"] = ''
window.traces["BR_IF"]["addAbstractions"] += `<pre class='graph'>---
config:
  layout: elk
---
graph TD
	1[\\"Finish"/]
	13 -. Codeptr Stack Trap Locals Globals Tables Memory .-> 1
	14 -. Extra .-> 1
	14["eff_st_put__38 ctlxfer.put_BR_IF"]
	5 --> 14
	13 -. Extra .-> 14
	13{{"Sϕ Codeptr Stack Trap Locals Globals Tables Memory Extra "}}
	9 --> 13
	12 --> 13
	10 --> 13
	10["eff__34 doFallthru"]
	3 -. Codeptr .-> 10
	6 -. Stack .-> 10
	0 -. Trap Locals Globals Tables Memory Extra .-> 10
	0[/"Start"\\]
	6["cond pop_u32"]
	0 -. Stack .-> 6
	3["depth imm_readULEB32"]
	0 -. Codeptr .-> 3
	12["eff__32 doBranch"]
	5 --> 12
	3 -. Codeptr .-> 12
	6 -. Stack .-> 12
	0 -. Trap Locals Globals Tables Memory Extra .-> 12
	5["label f_getLabel"]
	3 --> 5
	9["cond__31 U32_not_equals"]
	6 --> 9
	15 --> 9
	15["abs__39 lift_u32"]
	7 --> 15
	7["arg__36 0"]
</pre>`;
window.traces["BR_IF"]["addAbstractions__raw"] += `---
config:
  layout: elk
---
graph TD
	1[\\"Finish"/]
	13 -. Codeptr Stack Trap Locals Globals Tables Memory .-> 1
	14 -. Extra .-> 1
	14["eff_st_put__38 ctlxfer.put_BR_IF"]
	5 --> 14
	13 -. Extra .-> 14
	13{{"Sϕ Codeptr Stack Trap Locals Globals Tables Memory Extra "}}
	9 --> 13
	12 --> 13
	10 --> 13
	10["eff__34 doFallthru"]
	3 -. Codeptr .-> 10
	6 -. Stack .-> 10
	0 -. Trap Locals Globals Tables Memory Extra .-> 10
	0[/"Start"\\]
	6["cond pop_u32"]
	0 -. Stack .-> 6
	3["depth imm_readULEB32"]
	0 -. Codeptr .-> 3
	12["eff__32 doBranch"]
	5 --> 12
	3 -. Codeptr .-> 12
	6 -. Stack .-> 12
	0 -. Trap Locals Globals Tables Memory Extra .-> 12
	5["label f_getLabel"]
	3 --> 5
	9["cond__31 U32_not_equals"]
	6 --> 9
	15 --> 9
	15["abs__39 lift_u32"]
	7 --> 15
	7["arg__36 0"]
`;
window.traces["BR_IF"]["schedulerMermaid"] = ''
window.traces["BR_IF"]["schedulerMermaid__raw"] = ''
window.traces["BR_IF"]["schedulerMermaid"] += `<pre class='graph'>graph TD
subgraph block_43["Block 43"]
	direction TB
	b43_14["eff_st_put__38 ctlxfer.put_BR_IF"]
	b43_1[\\"Finish"/]
	b43_14 --> b43_1
end
phi_45 --> block_43
subgraph phi_45["Phi 45"]
	p45_13{{"Sϕ Codeptr Stack Trap Locals Globals Tables Memory Extra "}}
	p45_13{{"Sϕ Codeptr Stack Trap Locals Globals Tables Memory Extra "}}
end
block_46 --> phi_45
block_47 --> phi_45
subgraph block_46["Block 46"]
	direction TB
	b46_12["eff__32 doBranch"]
end
branch_44 --> block_46
subgraph branch_44["Branch 44"]
	br44_9["cond__31 U32_not_equals"]

end
block_48 --> branch_44
subgraph block_48["Block 48"]
	direction TB
	b48_0[/"Start"\\]
	b48_7["arg__36 0"]
	b48_15["abs__39 lift_u32"]
	b48_6["cond pop_u32"]
	b48_3["depth imm_readULEB32"]
	b48_5["label f_getLabel"]
	b48_9["cond__31 U32_not_equals"]
	b48_0 --> b48_7
	b48_7 --> b48_15
	b48_15 --> b48_6
	b48_6 --> b48_3
	b48_3 --> b48_5
	b48_5 --> b48_9
end
subgraph block_47["Block 47"]
	direction TB
	b47_10["eff__34 doFallthru"]
end
branch_44 --> block_47

</pre>`;
window.traces["BR_IF"]["schedulerMermaid__raw"] += `graph TD
subgraph block_43["Block 43"]
	direction TB
	b43_14["eff_st_put__38 ctlxfer.put_BR_IF"]
	b43_1[\\"Finish"/]
	b43_14 --> b43_1
end
phi_45 --> block_43
subgraph phi_45["Phi 45"]
	p45_13{{"Sϕ Codeptr Stack Trap Locals Globals Tables Memory Extra "}}
	p45_13{{"Sϕ Codeptr Stack Trap Locals Globals Tables Memory Extra "}}
end
block_46 --> phi_45
block_47 --> phi_45
subgraph block_46["Block 46"]
	direction TB
	b46_12["eff__32 doBranch"]
end
branch_44 --> block_46
subgraph branch_44["Branch 44"]
	br44_9["cond__31 U32_not_equals"]

end
block_48 --> branch_44
subgraph block_48["Block 48"]
	direction TB
	b48_0[/"Start"\\]
	b48_7["arg__36 0"]
	b48_15["abs__39 lift_u32"]
	b48_6["cond pop_u32"]
	b48_3["depth imm_readULEB32"]
	b48_5["label f_getLabel"]
	b48_9["cond__31 U32_not_equals"]
	b48_0 --> b48_7
	b48_7 --> b48_15
	b48_15 --> b48_6
	b48_6 --> b48_3
	b48_3 --> b48_5
	b48_5 --> b48_9
end
subgraph block_47["Block 47"]
	direction TB
	b47_10["eff__34 doFallthru"]
end
branch_44 --> block_47

`;
window.traces["BR_IF"]["unLEM"] = ''
window.traces["BR_IF"]["unLEM__raw"] = ''
window.traces["BR_IF"]["unLEM"] += `<pre class='graph'>---
config:
  layout: elk
---
graph TD
	1[\\"Finish"/]
	13 -. Codeptr Stack Trap Locals Globals Tables Memory .-> 1
	14 -. Extra .-> 1
	14["eff_st_put__38 ctlxfer.put_BR_IF"]
	5 --> 14
	13 -. Extra .-> 14
	13{{"Sϕ Codeptr Stack Trap Locals Globals Tables Memory Extra "}}
	18 --> 13
	20 --> 13
	19 --> 13
	19{{"Sϕ Codeptr Stack Trap Locals Globals Tables Memory Extra "}}
	16 --> 19
	12 --> 19
	10 --> 19
	10["eff__34 doFallthru"]
	3 -. Codeptr .-> 10
	6 -. Stack .-> 10
	0 -. Trap Locals Globals Tables Memory Extra .-> 10
	0[/"Start"\\]
	6["cond pop_u32"]
	0 -. Stack .-> 6
	3["depth imm_readULEB32"]
	0 -. Codeptr .-> 3
	12["eff__32 doBranch"]
	5 --> 12
	3 -. Codeptr .-> 12
	6 -. Stack .-> 12
	0 -. Trap Locals Globals Tables Memory Extra .-> 12
	5["label f_getLabel"]
	3 --> 5
	16["mt__40 U32_maybeTrue"]
	9 --> 16
	9["cond__31 U32_not_equals"]
	6 --> 9
	15 --> 9
	15["abs__39 lift_u32"]
	7 --> 15
	7["arg__36 0"]
	20["eff_merge__43 merge"]
	12 --> 20
	10 --> 20
	18["mb__42 bool.&&"]
	16 --> 18
	17 --> 18
	17["mf__41 U32_maybeFalse"]
	9 --> 17
</pre>`;
window.traces["BR_IF"]["unLEM__raw"] += `---
config:
  layout: elk
---
graph TD
	1[\\"Finish"/]
	13 -. Codeptr Stack Trap Locals Globals Tables Memory .-> 1
	14 -. Extra .-> 1
	14["eff_st_put__38 ctlxfer.put_BR_IF"]
	5 --> 14
	13 -. Extra .-> 14
	13{{"Sϕ Codeptr Stack Trap Locals Globals Tables Memory Extra "}}
	18 --> 13
	20 --> 13
	19 --> 13
	19{{"Sϕ Codeptr Stack Trap Locals Globals Tables Memory Extra "}}
	16 --> 19
	12 --> 19
	10 --> 19
	10["eff__34 doFallthru"]
	3 -. Codeptr .-> 10
	6 -. Stack .-> 10
	0 -. Trap Locals Globals Tables Memory Extra .-> 10
	0[/"Start"\\]
	6["cond pop_u32"]
	0 -. Stack .-> 6
	3["depth imm_readULEB32"]
	0 -. Codeptr .-> 3
	12["eff__32 doBranch"]
	5 --> 12
	3 -. Codeptr .-> 12
	6 -. Stack .-> 12
	0 -. Trap Locals Globals Tables Memory Extra .-> 12
	5["label f_getLabel"]
	3 --> 5
	16["mt__40 U32_maybeTrue"]
	9 --> 16
	9["cond__31 U32_not_equals"]
	6 --> 9
	15 --> 9
	15["abs__39 lift_u32"]
	7 --> 15
	7["arg__36 0"]
	20["eff_merge__43 merge"]
	12 --> 20
	10 --> 20
	18["mb__42 bool.&&"]
	16 --> 18
	17 --> 18
	17["mf__41 U32_maybeFalse"]
	9 --> 17
`;
window.traces["BR_IF"]["unlem_schedule"] = ''
window.traces["BR_IF"]["unlem_schedule__raw"] = ''
window.traces["BR_IF"]["unlem_schedule"] += `<pre class=''>def depth = imm_readULEB32();
def cond = pop_u32();
def arg__36 : u32 = 0;
def abs__39 = lift_u32(arg__36);
def cond__31 = U32_not_equals(cond, abs__39);
def mt__40 = U32_maybeTrue(cond__31);
def mf__41 = U32_maybeFalse(cond__31);
def mb__42 = bool.&&(mt__40, mf__41);
if (mb__42) {
	def label = f_getLabel(depth);
	def eff__32 = doBranch(label);
	def eff__34 = doFallthru();
	def eff_merge__43 = merge(eff__32, eff__34);
} else {
	if (mt__40) {
		def label = f_getLabel(depth);
		def eff__32 = doBranch(label);
	} else {
		def eff__34 = doFallthru();
	}
// phis: 
}
// phis: 
def label = f_getLabel(depth);
def eff_st_put__38 = ctlxfer.put_BR_IF(label);
</pre>`;
window.traces["BR_IF"]["unlem_schedule__raw"] += `def depth = imm_readULEB32();
def cond = pop_u32();
def arg__36 : u32 = 0;
def abs__39 = lift_u32(arg__36);
def cond__31 = U32_not_equals(cond, abs__39);
def mt__40 = U32_maybeTrue(cond__31);
def mf__41 = U32_maybeFalse(cond__31);
def mb__42 = bool.&&(mt__40, mf__41);
if (mb__42) {
	def label = f_getLabel(depth);
	def eff__32 = doBranch(label);
	def eff__34 = doFallthru();
	def eff_merge__43 = merge(eff__32, eff__34);
} else {
	if (mt__40) {
		def label = f_getLabel(depth);
		def eff__32 = doBranch(label);
	} else {
		def eff__34 = doFallthru();
	}
// phis: 
}
// phis: 
def label = f_getLabel(depth);
def eff_st_put__38 = ctlxfer.put_BR_IF(label);
`;
window.traces["BR_IF"]["spytial_ul"] = ''
window.traces["BR_IF"]["spytial_ul__raw"] = ''
window.traces["BR_IF"]["spytial_ul"] += `<pre class=''>{
"atoms": [
{
"id": "node_1",
"type": "finish",
"label": "Finish"
},
{
"id": "node_13",
"type": "state_phi",
"label": "StatePhi [bool.&& [mb__42]]"
},
{
"id": "node_14",
"type": "intrinsic",
"label": "ctlxfer.put_BR_IF [eff_st_put__38]"
},
{
"id": "node_18",
"type": "intrinsic",
"label": "bool.&& [mb__42]"
},
{
"id": "node_20",
"type": "intrinsic",
"label": "merge [eff_merge__43]"
},
{
"id": "node_19",
"type": "state_phi",
"label": "StatePhi [U32_maybeTrue [mt__40]]"
},
{
"id": "node_5",
"type": "intrinsic",
"label": "f_getLabel [label]"
},
{
"id": "node_16",
"type": "intrinsic",
"label": "U32_maybeTrue [mt__40]"
},
{
"id": "node_17",
"type": "intrinsic",
"label": "U32_maybeFalse [mf__41]"
},
{
"id": "node_12",
"type": "intrinsic",
"label": "doBranch [eff__32]"
},
{
"id": "node_10",
"type": "intrinsic",
"label": "doFallthru [eff__34]"
},
{
"id": "node_3",
"type": "intrinsic",
"label": "imm_readULEB32 [depth]"
},
{
"id": "node_9",
"type": "intrinsic",
"label": "U32_not_equals [cond__31]"
},
{
"id": "node_6",
"type": "intrinsic",
"label": "pop_u32 [cond]"
},
{
"id": "node_0",
"type": "start",
"label": "Start"
},
{
"id": "node_15",
"type": "intrinsic",
"label": "lift_u32 [abs__39]"
},
{
"id": "node_7",
"type": "lit",
"label": "0"
}
],
"relations": [
{
"id": "uses",
"name": "Uses",
"types": ["sea_node", "sea_node"],
"tuples": [
{
"atoms": ["node_14", "node_5"],
"types": ["intrinsic", "intrinsic"]
},
{
"atoms": ["node_18", "node_16"],
"types": ["intrinsic", "intrinsic"]
},
{
"atoms": ["node_18", "node_17"],
"types": ["intrinsic", "intrinsic"]
},
{
"atoms": ["node_20", "node_12"],
"types": ["intrinsic", "intrinsic"]
},
{
"atoms": ["node_20", "node_10"],
"types": ["intrinsic", "intrinsic"]
},
{
"atoms": ["node_5", "node_3"],
"types": ["intrinsic", "intrinsic"]
},
{
"atoms": ["node_16", "node_9"],
"types": ["intrinsic", "intrinsic"]
},
{
"atoms": ["node_17", "node_9"],
"types": ["intrinsic", "intrinsic"]
},
{
"atoms": ["node_12", "node_5"],
"types": ["intrinsic", "intrinsic"]
},
{
"atoms": ["node_9", "node_6"],
"types": ["intrinsic", "intrinsic"]
},
{
"atoms": ["node_9", "node_15"],
"types": ["intrinsic", "intrinsic"]
},
{
"atoms": ["node_15", "node_7"],
"types": ["intrinsic", "lit"]
}
]
},
{
"id": "state_uses",
"name": "StateUses",
"types": ["sea_node", "sea_node"],
"tuples": [
{
"atoms": ["node_1", "node_13"],
"types": ["finish", "state_phi"]
},
{
"atoms": ["node_1", "node_14"],
"types": ["finish", "intrinsic"]
},
{
"atoms": ["node_14", "node_13"],
"types": ["intrinsic", "state_phi"]
},
{
"atoms": ["node_12", "node_3"],
"types": ["intrinsic", "intrinsic"]
},
{
"atoms": ["node_12", "node_6"],
"types": ["intrinsic", "intrinsic"]
},
{
"atoms": ["node_12", "node_0"],
"types": ["intrinsic", "start"]
},
{
"atoms": ["node_10", "node_3"],
"types": ["intrinsic", "intrinsic"]
},
{
"atoms": ["node_10", "node_6"],
"types": ["intrinsic", "intrinsic"]
},
{
"atoms": ["node_10", "node_0"],
"types": ["intrinsic", "start"]
},
{
"atoms": ["node_3", "node_0"],
"types": ["intrinsic", "start"]
},
{
"atoms": ["node_6", "node_0"],
"types": ["intrinsic", "start"]
}
]
},
{
"id": "phi_cond",
"name": "PhiCond",
"types": ["sea_node", "sea_node"],
"tuples": [
{
"atoms": ["node_13", "node_18"],
"types": ["state_phi", "intrinsic"]
},
{
"atoms": ["node_19", "node_16"],
"types": ["state_phi", "intrinsic"]
}
]
},
{
"id": "phi_true",
"name": "PhiTrue",
"types": ["sea_node", "sea_node"],
"tuples": [
{
"atoms": ["node_13", "node_20"],
"types": ["state_phi", "intrinsic"]
},
{
"atoms": ["node_19", "node_12"],
"types": ["state_phi", "intrinsic"]
}
]
},
{
"id": "phi_false",
"name": "PhiFalse",
"types": ["sea_node", "sea_node"],
"tuples": [
{
"atoms": ["node_13", "node_19"],
"types": ["state_phi", "state_phi"]
},
{
"atoms": ["node_19", "node_10"],
"types": ["state_phi", "intrinsic"]
}
]
}
]
}</pre>`;
window.traces["BR_IF"]["spytial_ul__raw"] += `{
"atoms": [
{
"id": "node_1",
"type": "finish",
"label": "Finish"
},
{
"id": "node_13",
"type": "state_phi",
"label": "StatePhi [bool.&& [mb__42]]"
},
{
"id": "node_14",
"type": "intrinsic",
"label": "ctlxfer.put_BR_IF [eff_st_put__38]"
},
{
"id": "node_18",
"type": "intrinsic",
"label": "bool.&& [mb__42]"
},
{
"id": "node_20",
"type": "intrinsic",
"label": "merge [eff_merge__43]"
},
{
"id": "node_19",
"type": "state_phi",
"label": "StatePhi [U32_maybeTrue [mt__40]]"
},
{
"id": "node_5",
"type": "intrinsic",
"label": "f_getLabel [label]"
},
{
"id": "node_16",
"type": "intrinsic",
"label": "U32_maybeTrue [mt__40]"
},
{
"id": "node_17",
"type": "intrinsic",
"label": "U32_maybeFalse [mf__41]"
},
{
"id": "node_12",
"type": "intrinsic",
"label": "doBranch [eff__32]"
},
{
"id": "node_10",
"type": "intrinsic",
"label": "doFallthru [eff__34]"
},
{
"id": "node_3",
"type": "intrinsic",
"label": "imm_readULEB32 [depth]"
},
{
"id": "node_9",
"type": "intrinsic",
"label": "U32_not_equals [cond__31]"
},
{
"id": "node_6",
"type": "intrinsic",
"label": "pop_u32 [cond]"
},
{
"id": "node_0",
"type": "start",
"label": "Start"
},
{
"id": "node_15",
"type": "intrinsic",
"label": "lift_u32 [abs__39]"
},
{
"id": "node_7",
"type": "lit",
"label": "0"
}
],
"relations": [
{
"id": "uses",
"name": "Uses",
"types": ["sea_node", "sea_node"],
"tuples": [
{
"atoms": ["node_14", "node_5"],
"types": ["intrinsic", "intrinsic"]
},
{
"atoms": ["node_18", "node_16"],
"types": ["intrinsic", "intrinsic"]
},
{
"atoms": ["node_18", "node_17"],
"types": ["intrinsic", "intrinsic"]
},
{
"atoms": ["node_20", "node_12"],
"types": ["intrinsic", "intrinsic"]
},
{
"atoms": ["node_20", "node_10"],
"types": ["intrinsic", "intrinsic"]
},
{
"atoms": ["node_5", "node_3"],
"types": ["intrinsic", "intrinsic"]
},
{
"atoms": ["node_16", "node_9"],
"types": ["intrinsic", "intrinsic"]
},
{
"atoms": ["node_17", "node_9"],
"types": ["intrinsic", "intrinsic"]
},
{
"atoms": ["node_12", "node_5"],
"types": ["intrinsic", "intrinsic"]
},
{
"atoms": ["node_9", "node_6"],
"types": ["intrinsic", "intrinsic"]
},
{
"atoms": ["node_9", "node_15"],
"types": ["intrinsic", "intrinsic"]
},
{
"atoms": ["node_15", "node_7"],
"types": ["intrinsic", "lit"]
}
]
},
{
"id": "state_uses",
"name": "StateUses",
"types": ["sea_node", "sea_node"],
"tuples": [
{
"atoms": ["node_1", "node_13"],
"types": ["finish", "state_phi"]
},
{
"atoms": ["node_1", "node_14"],
"types": ["finish", "intrinsic"]
},
{
"atoms": ["node_14", "node_13"],
"types": ["intrinsic", "state_phi"]
},
{
"atoms": ["node_12", "node_3"],
"types": ["intrinsic", "intrinsic"]
},
{
"atoms": ["node_12", "node_6"],
"types": ["intrinsic", "intrinsic"]
},
{
"atoms": ["node_12", "node_0"],
"types": ["intrinsic", "start"]
},
{
"atoms": ["node_10", "node_3"],
"types": ["intrinsic", "intrinsic"]
},
{
"atoms": ["node_10", "node_6"],
"types": ["intrinsic", "intrinsic"]
},
{
"atoms": ["node_10", "node_0"],
"types": ["intrinsic", "start"]
},
{
"atoms": ["node_3", "node_0"],
"types": ["intrinsic", "start"]
},
{
"atoms": ["node_6", "node_0"],
"types": ["intrinsic", "start"]
}
]
},
{
"id": "phi_cond",
"name": "PhiCond",
"types": ["sea_node", "sea_node"],
"tuples": [
{
"atoms": ["node_13", "node_18"],
"types": ["state_phi", "intrinsic"]
},
{
"atoms": ["node_19", "node_16"],
"types": ["state_phi", "intrinsic"]
}
]
},
{
"id": "phi_true",
"name": "PhiTrue",
"types": ["sea_node", "sea_node"],
"tuples": [
{
"atoms": ["node_13", "node_20"],
"types": ["state_phi", "intrinsic"]
},
{
"atoms": ["node_19", "node_12"],
"types": ["state_phi", "intrinsic"]
}
]
},
{
"id": "phi_false",
"name": "PhiFalse",
"types": ["sea_node", "sea_node"],
"tuples": [
{
"atoms": ["node_13", "node_19"],
"types": ["state_phi", "state_phi"]
},
{
"atoms": ["node_19", "node_10"],
"types": ["state_phi", "intrinsic"]
}
]
}
]
}`;
window.traces["BR_IF"]["unlem_scheduler"] = ''
window.traces["BR_IF"]["unlem_scheduler__raw"] = ''
window.traces["BR_IF"]["unlem_scheduler"] += `<pre class='graph'>graph TD
subgraph block_49["Block 49"]
	direction TB
	b49_14["eff_st_put__38 ctlxfer.put_BR_IF"]
	b49_1[\\"Finish"/]
	b49_14 --> b49_1
end
phi_51 --> block_49
subgraph phi_51["Phi 51"]
	p51_13{{"Sϕ Codeptr Stack Trap Locals Globals Tables Memory Extra "}}
	p51_13{{"Sϕ Codeptr Stack Trap Locals Globals Tables Memory Extra "}}
end
block_52 --> phi_51
block_53 --> phi_51
subgraph block_52["Block 52"]
	direction TB
	b52_20["eff_merge__43 merge"]
end
branch_50 --> block_52
subgraph branch_50["Branch 50"]
	br50_18["mb__42 bool.&&"]

end
block_58 --> branch_50
subgraph block_58["Block 58"]
	direction TB
	b58_0[/"Start"\\]
	b58_7["arg__36 0"]
	b58_15["abs__39 lift_u32"]
	b58_6["cond pop_u32"]
	b58_9["cond__31 U32_not_equals"]
	b58_3["depth imm_readULEB32"]
	b58_5["label f_getLabel"]
	b58_17["mf__41 U32_maybeFalse"]
	b58_16["mt__40 U32_maybeTrue"]
	b58_18["mb__42 bool.&&"]
	b58_0 --> b58_7
	b58_7 --> b58_15
	b58_15 --> b58_6
	b58_6 --> b58_9
	b58_9 --> b58_3
	b58_3 --> b58_5
	b58_5 --> b58_17
	b58_17 --> b58_16
	b58_16 --> b58_18
end
subgraph block_53["Block 53"]
	direction TB
end
phi_55 --> block_53
subgraph phi_55["Phi 55"]
	p55_19{{"Sϕ Codeptr Stack Trap Locals Globals Tables Memory Extra "}}
	p55_19{{"Sϕ Codeptr Stack Trap Locals Globals Tables Memory Extra "}}
	p55_19{{"Sϕ Codeptr Stack Trap Locals Globals Tables Memory Extra "}}
	p55_19{{"Sϕ Codeptr Stack Trap Locals Globals Tables Memory Extra "}}
end
block_56 --> phi_55
block_57 --> phi_55
subgraph block_56["Block 56"]
	direction TB
	b56_12["eff__32 doBranch"]
end
branch_54 --> block_56
subgraph branch_54["Branch 54"]
	br54_16["mt__40 U32_maybeTrue"]

end
branch_50 --> branch_54
subgraph block_57["Block 57"]
	direction TB
	b57_10["eff__34 doFallthru"]
end
branch_54 --> block_57

</pre>`;
window.traces["BR_IF"]["unlem_scheduler__raw"] += `graph TD
subgraph block_49["Block 49"]
	direction TB
	b49_14["eff_st_put__38 ctlxfer.put_BR_IF"]
	b49_1[\\"Finish"/]
	b49_14 --> b49_1
end
phi_51 --> block_49
subgraph phi_51["Phi 51"]
	p51_13{{"Sϕ Codeptr Stack Trap Locals Globals Tables Memory Extra "}}
	p51_13{{"Sϕ Codeptr Stack Trap Locals Globals Tables Memory Extra "}}
end
block_52 --> phi_51
block_53 --> phi_51
subgraph block_52["Block 52"]
	direction TB
	b52_20["eff_merge__43 merge"]
end
branch_50 --> block_52
subgraph branch_50["Branch 50"]
	br50_18["mb__42 bool.&&"]

end
block_58 --> branch_50
subgraph block_58["Block 58"]
	direction TB
	b58_0[/"Start"\\]
	b58_7["arg__36 0"]
	b58_15["abs__39 lift_u32"]
	b58_6["cond pop_u32"]
	b58_9["cond__31 U32_not_equals"]
	b58_3["depth imm_readULEB32"]
	b58_5["label f_getLabel"]
	b58_17["mf__41 U32_maybeFalse"]
	b58_16["mt__40 U32_maybeTrue"]
	b58_18["mb__42 bool.&&"]
	b58_0 --> b58_7
	b58_7 --> b58_15
	b58_15 --> b58_6
	b58_6 --> b58_9
	b58_9 --> b58_3
	b58_3 --> b58_5
	b58_5 --> b58_17
	b58_17 --> b58_16
	b58_16 --> b58_18
end
subgraph block_53["Block 53"]
	direction TB
end
phi_55 --> block_53
subgraph phi_55["Phi 55"]
	p55_19{{"Sϕ Codeptr Stack Trap Locals Globals Tables Memory Extra "}}
	p55_19{{"Sϕ Codeptr Stack Trap Locals Globals Tables Memory Extra "}}
	p55_19{{"Sϕ Codeptr Stack Trap Locals Globals Tables Memory Extra "}}
	p55_19{{"Sϕ Codeptr Stack Trap Locals Globals Tables Memory Extra "}}
end
block_56 --> phi_55
block_57 --> phi_55
subgraph block_56["Block 56"]
	direction TB
	b56_12["eff__32 doBranch"]
end
branch_54 --> block_56
subgraph branch_54["Branch 54"]
	br54_16["mt__40 U32_maybeTrue"]

end
branch_50 --> branch_54
subgraph block_57["Block 57"]
	direction TB
	b57_10["eff__34 doFallthru"]
end
branch_54 --> block_57

`;
window.traces["BR_IF"]["unlem_pretty"] = ''
window.traces["BR_IF"]["unlem_pretty__raw"] = ''
window.traces["BR_IF"]["unlem_pretty"] += `<pre class=''>def depth = imm_readULEB32();
def cond = pop_u32();
def cond1 = U32_not_equals(cond, lift_u32(0));
def mt = U32_maybeTrue(cond1);
def mf = U32_maybeFalse(cond1);
if (bool.&&(mt, mf)) {
	def label = f_getLabel(depth);
	doBranch(label);
	doFallthru();
} else {
	if (mt) {
		def label = f_getLabel(depth);
		doBranch(label);
	} else {
		doFallthru();
	}
}
def label = f_getLabel(depth);
ctlxfer.put_BR_IF(label);
</pre>`;
window.traces["BR_IF"]["unlem_pretty__raw"] += `def depth = imm_readULEB32();
def cond = pop_u32();
def cond1 = U32_not_equals(cond, lift_u32(0));
def mt = U32_maybeTrue(cond1);
def mf = U32_maybeFalse(cond1);
if (bool.&&(mt, mf)) {
	def label = f_getLabel(depth);
	doBranch(label);
	doFallthru();
} else {
	if (mt) {
		def label = f_getLabel(depth);
		doBranch(label);
	} else {
		doFallthru();
	}
}
def label = f_getLabel(depth);
ctlxfer.put_BR_IF(label);
`;
window.traces["BR_IF"]["constUnLEM"] = ''
window.traces["BR_IF"]["constUnLEM__raw"] = ''
window.traces["BR_IF"]["constUnLEM"] += `<pre class='graph'>---
config:
  layout: elk
---
graph TD
	1[\\"Finish"/]
	20 -. Codeptr Stack Trap Locals Globals Tables Memory .-> 1
	14 -. Extra .-> 1
	14["eff_st_put__38 ctlxfer.put_BR_IF"]
	5 --> 14
	20 -. Extra .-> 14
	20["eff_merge__43 merge"]
	12 --> 20
	10 --> 20
	10["eff__34 doFallthru"]
	3 -. Codeptr .-> 10
	6 -. Stack .-> 10
	0 -. Trap Locals Globals Tables Memory Extra .-> 10
	0[/"Start"\\]
	6["cond pop_u32"]
	0 -. Stack .-> 6
	3["depth imm_readULEB32"]
	0 -. Codeptr .-> 3
	12["eff__32 doBranch"]
	5 --> 12
	3 -. Codeptr .-> 12
	6 -. Stack .-> 12
	0 -. Trap Locals Globals Tables Memory Extra .-> 12
	5["label f_getLabel"]
	3 --> 5
</pre>`;
window.traces["BR_IF"]["constUnLEM__raw"] += `---
config:
  layout: elk
---
graph TD
	1[\\"Finish"/]
	20 -. Codeptr Stack Trap Locals Globals Tables Memory .-> 1
	14 -. Extra .-> 1
	14["eff_st_put__38 ctlxfer.put_BR_IF"]
	5 --> 14
	20 -. Extra .-> 14
	20["eff_merge__43 merge"]
	12 --> 20
	10 --> 20
	10["eff__34 doFallthru"]
	3 -. Codeptr .-> 10
	6 -. Stack .-> 10
	0 -. Trap Locals Globals Tables Memory Extra .-> 10
	0[/"Start"\\]
	6["cond pop_u32"]
	0 -. Stack .-> 6
	3["depth imm_readULEB32"]
	0 -. Codeptr .-> 3
	12["eff__32 doBranch"]
	5 --> 12
	3 -. Codeptr .-> 12
	6 -. Stack .-> 12
	0 -. Trap Locals Globals Tables Memory Extra .-> 12
	5["label f_getLabel"]
	3 --> 5
`;
window.traces["BR_IF"]["chooseMerge"] = ''
window.traces["BR_IF"]["chooseMerge__raw"] = ''
window.traces["BR_IF"]["chooseMerge"] += `<pre class='graph'>---
config:
  layout: elk
---
graph TD
	1[\\"Finish"/]
	20 -. Codeptr Stack Trap Locals Globals Tables Memory .-> 1
	14 -. Extra .-> 1
	14["eff_st_put__38 ctlxfer.put_BR_IF"]
	5 --> 14
	20 -. Extra .-> 14
	20["eff_merge__43 merge"]
	12 --> 20
	10 --> 20
	10["eff__34 doFallthru"]
	3 -. Codeptr .-> 10
	6 -. Stack .-> 10
	0 -. Trap Locals Globals Tables Memory Extra .-> 10
	0[/"Start"\\]
	6["cond pop_u32"]
	0 -. Stack .-> 6
	3["depth imm_readULEB32"]
	0 -. Codeptr .-> 3
	12["eff__32 doBranch"]
	5 --> 12
	3 -. Codeptr .-> 12
	6 -. Stack .-> 12
	0 -. Trap Locals Globals Tables Memory Extra .-> 12
	5["label f_getLabel"]
	3 --> 5
</pre>`;
window.traces["BR_IF"]["chooseMerge__raw"] += `---
config:
  layout: elk
---
graph TD
	1[\\"Finish"/]
	20 -. Codeptr Stack Trap Locals Globals Tables Memory .-> 1
	14 -. Extra .-> 1
	14["eff_st_put__38 ctlxfer.put_BR_IF"]
	5 --> 14
	20 -. Extra .-> 14
	20["eff_merge__43 merge"]
	12 --> 20
	10 --> 20
	10["eff__34 doFallthru"]
	3 -. Codeptr .-> 10
	6 -. Stack .-> 10
	0 -. Trap Locals Globals Tables Memory Extra .-> 10
	0[/"Start"\\]
	6["cond pop_u32"]
	0 -. Stack .-> 6
	3["depth imm_readULEB32"]
	0 -. Codeptr .-> 3
	12["eff__32 doBranch"]
	5 --> 12
	3 -. Codeptr .-> 12
	6 -. Stack .-> 12
	0 -. Trap Locals Globals Tables Memory Extra .-> 12
	5["label f_getLabel"]
	3 --> 5
`;
window.traces["BR_IF"]["scheduled"] = ''
window.traces["BR_IF"]["scheduled__raw"] = ''
window.traces["BR_IF"]["scheduled"] += `<pre class=''>def depth = imm_readULEB32();
def label = f_getLabel(depth);
def cond = pop_u32();
def eff__32 = doBranch(label);
def eff__34 = doFallthru();
def eff_merge__43 = merge(eff__32, eff__34);
def eff_st_put__38 = ctlxfer.put_BR_IF(label);
</pre>`;
window.traces["BR_IF"]["scheduled__raw"] += `def depth = imm_readULEB32();
def label = f_getLabel(depth);
def cond = pop_u32();
def eff__32 = doBranch(label);
def eff__34 = doFallthru();
def eff_merge__43 = merge(eff__32, eff__34);
def eff_st_put__38 = ctlxfer.put_BR_IF(label);
`;
window.traces["BR_IF"]["pretty"] = ''
window.traces["BR_IF"]["pretty__raw"] = ''
window.traces["BR_IF"]["pretty"] += `<pre class=''>def depth = imm_readULEB32();
def label = f_getLabel(depth);
def cond = pop_u32();
doBranch(label);
doFallthru();
ctlxfer.put_BR_IF(label);
</pre>`;
window.traces["BR_IF"]["pretty__raw"] += `def depth = imm_readULEB32();
def label = f_getLabel(depth);
def cond = pop_u32();
doBranch(label);
doFallthru();
ctlxfer.put_BR_IF(label);
`;
window.traces["BR_TABLE"] = {}
window.traces["BR_TABLE"]["parsed"] = ''
window.traces["BR_TABLE"]["parsed__raw"] = ''
window.traces["BR_TABLE"]["parsed"] += `<pre class=''>def labels = imm_readLabels();
def key = pop_u32();
def arg__46 = (key);
def arg__45 = (labels);
def eff__44 = doSwitch(arg__45, arg__46);
</pre>`;
window.traces["BR_TABLE"]["parsed__raw"] += `def labels = imm_readLabels();
def key = pop_u32();
def arg__46 = (key);
def arg__45 = (labels);
def eff__44 = doSwitch(arg__45, arg__46);
`;
window.traces["BR_TABLE"]["raw"] = ''
window.traces["BR_TABLE"]["raw__raw"] = ''
window.traces["BR_TABLE"]["raw"] += `<pre class='graph'>---
config:
  layout: elk
---
graph TD
	1[\\"Finish"/]
	7 -. Codeptr Stack Trap Locals Globals Tables Memory Extra .-> 1
	7["eff__44 doSwitch"]
	3 --> 7
	4 --> 7
	3 -. Codeptr .-> 7
	4 -. Stack .-> 7
	0 -. Trap Locals Globals Tables Memory Extra .-> 7
	0[/"Start"\\]
	4["key pop_u32"]
	0 -. Stack .-> 4
	3["labels imm_readLabels"]
	0 -. Codeptr .-> 3
</pre>`;
window.traces["BR_TABLE"]["raw__raw"] += `---
config:
  layout: elk
---
graph TD
	1[\\"Finish"/]
	7 -. Codeptr Stack Trap Locals Globals Tables Memory Extra .-> 1
	7["eff__44 doSwitch"]
	3 --> 7
	4 --> 7
	3 -. Codeptr .-> 7
	4 -. Stack .-> 7
	0 -. Trap Locals Globals Tables Memory Extra .-> 7
	0[/"Start"\\]
	4["key pop_u32"]
	0 -. Stack .-> 4
	3["labels imm_readLabels"]
	0 -. Codeptr .-> 3
`;
window.traces["BR_TABLE"]["spytial"] = ''
window.traces["BR_TABLE"]["spytial__raw"] = ''
window.traces["BR_TABLE"]["spytial"] += `<pre class=''>{
"atoms": [
{
"id": "node_1",
"type": "finish",
"label": "Finish"
},
{
"id": "node_7",
"type": "intrinsic",
"label": "doSwitch [eff__44]"
},
{
"id": "node_3",
"type": "intrinsic",
"label": "imm_readLabels [labels]"
},
{
"id": "node_4",
"type": "intrinsic",
"label": "pop_u32 [key]"
},
{
"id": "node_0",
"type": "start",
"label": "Start"
}
],
"relations": [
{
"id": "uses",
"name": "Uses",
"types": ["sea_node", "sea_node"],
"tuples": [
{
"atoms": ["node_7", "node_3"],
"types": ["intrinsic", "intrinsic"]
},
{
"atoms": ["node_7", "node_4"],
"types": ["intrinsic", "intrinsic"]
}
]
},
{
"id": "state_uses",
"name": "StateUses",
"types": ["sea_node", "sea_node"],
"tuples": [
{
"atoms": ["node_1", "node_7"],
"types": ["finish", "intrinsic"]
},
{
"atoms": ["node_7", "node_3"],
"types": ["intrinsic", "intrinsic"]
},
{
"atoms": ["node_7", "node_4"],
"types": ["intrinsic", "intrinsic"]
},
{
"atoms": ["node_7", "node_0"],
"types": ["intrinsic", "start"]
},
{
"atoms": ["node_3", "node_0"],
"types": ["intrinsic", "start"]
},
{
"atoms": ["node_4", "node_0"],
"types": ["intrinsic", "start"]
}
]
}
]
}</pre>`;
window.traces["BR_TABLE"]["spytial__raw"] += `{
"atoms": [
{
"id": "node_1",
"type": "finish",
"label": "Finish"
},
{
"id": "node_7",
"type": "intrinsic",
"label": "doSwitch [eff__44]"
},
{
"id": "node_3",
"type": "intrinsic",
"label": "imm_readLabels [labels]"
},
{
"id": "node_4",
"type": "intrinsic",
"label": "pop_u32 [key]"
},
{
"id": "node_0",
"type": "start",
"label": "Start"
}
],
"relations": [
{
"id": "uses",
"name": "Uses",
"types": ["sea_node", "sea_node"],
"tuples": [
{
"atoms": ["node_7", "node_3"],
"types": ["intrinsic", "intrinsic"]
},
{
"atoms": ["node_7", "node_4"],
"types": ["intrinsic", "intrinsic"]
}
]
},
{
"id": "state_uses",
"name": "StateUses",
"types": ["sea_node", "sea_node"],
"tuples": [
{
"atoms": ["node_1", "node_7"],
"types": ["finish", "intrinsic"]
},
{
"atoms": ["node_7", "node_3"],
"types": ["intrinsic", "intrinsic"]
},
{
"atoms": ["node_7", "node_4"],
"types": ["intrinsic", "intrinsic"]
},
{
"atoms": ["node_7", "node_0"],
"types": ["intrinsic", "start"]
},
{
"atoms": ["node_3", "node_0"],
"types": ["intrinsic", "start"]
},
{
"atoms": ["node_4", "node_0"],
"types": ["intrinsic", "start"]
}
]
}
]
}`;
window.traces["BR_TABLE"]["overloadOps"] = ''
window.traces["BR_TABLE"]["overloadOps__raw"] = ''
window.traces["BR_TABLE"]["overloadOps"] += `<pre class='graph'>---
config:
  layout: elk
---
graph TD
	1[\\"Finish"/]
	7 -. Codeptr Stack Trap Locals Globals Tables Memory .-> 1
	8 -. Extra .-> 1
	8["eff_st_put__47 ctlxfer.put_BR_TABLE"]
	3 --> 8
	7 -. Extra .-> 8
	7["eff__44 doSwitch"]
	3 --> 7
	4 --> 7
	3 -. Codeptr .-> 7
	4 -. Stack .-> 7
	0 -. Trap Locals Globals Tables Memory Extra .-> 7
	0[/"Start"\\]
	4["key pop_u32"]
	0 -. Stack .-> 4
	3["labels imm_readLabels"]
	0 -. Codeptr .-> 3
</pre>`;
window.traces["BR_TABLE"]["overloadOps__raw"] += `---
config:
  layout: elk
---
graph TD
	1[\\"Finish"/]
	7 -. Codeptr Stack Trap Locals Globals Tables Memory .-> 1
	8 -. Extra .-> 1
	8["eff_st_put__47 ctlxfer.put_BR_TABLE"]
	3 --> 8
	7 -. Extra .-> 8
	7["eff__44 doSwitch"]
	3 --> 7
	4 --> 7
	3 -. Codeptr .-> 7
	4 -. Stack .-> 7
	0 -. Trap Locals Globals Tables Memory Extra .-> 7
	0[/"Start"\\]
	4["key pop_u32"]
	0 -. Stack .-> 4
	3["labels imm_readLabels"]
	0 -. Codeptr .-> 3
`;
window.traces["BR_TABLE"]["addAbstractions"] = ''
window.traces["BR_TABLE"]["addAbstractions__raw"] = ''
window.traces["BR_TABLE"]["addAbstractions"] += `<pre class='graph'>---
config:
  layout: elk
---
graph TD
	1[\\"Finish"/]
	7 -. Codeptr Stack Trap Locals Globals Tables Memory .-> 1
	8 -. Extra .-> 1
	8["eff_st_put__47 ctlxfer.put_BR_TABLE"]
	3 --> 8
	7 -. Extra .-> 8
	7["eff__44 doSwitch"]
	3 --> 7
	4 --> 7
	3 -. Codeptr .-> 7
	4 -. Stack .-> 7
	0 -. Trap Locals Globals Tables Memory Extra .-> 7
	0[/"Start"\\]
	4["key pop_u32"]
	0 -. Stack .-> 4
	3["labels imm_readLabels"]
	0 -. Codeptr .-> 3
</pre>`;
window.traces["BR_TABLE"]["addAbstractions__raw"] += `---
config:
  layout: elk
---
graph TD
	1[\\"Finish"/]
	7 -. Codeptr Stack Trap Locals Globals Tables Memory .-> 1
	8 -. Extra .-> 1
	8["eff_st_put__47 ctlxfer.put_BR_TABLE"]
	3 --> 8
	7 -. Extra .-> 8
	7["eff__44 doSwitch"]
	3 --> 7
	4 --> 7
	3 -. Codeptr .-> 7
	4 -. Stack .-> 7
	0 -. Trap Locals Globals Tables Memory Extra .-> 7
	0[/"Start"\\]
	4["key pop_u32"]
	0 -. Stack .-> 4
	3["labels imm_readLabels"]
	0 -. Codeptr .-> 3
`;
window.traces["BR_TABLE"]["schedulerMermaid"] = ''
window.traces["BR_TABLE"]["schedulerMermaid__raw"] = ''
window.traces["BR_TABLE"]["schedulerMermaid"] += `<pre class='graph'>graph TD
subgraph block_59["Block 59"]
	direction TB
	b59_0[/"Start"\\]
	b59_4["key pop_u32"]
	b59_3["labels imm_readLabels"]
	b59_7["eff__44 doSwitch"]
	b59_8["eff_st_put__47 ctlxfer.put_BR_TABLE"]
	b59_1[\\"Finish"/]
	b59_0 --> b59_4
	b59_4 --> b59_3
	b59_3 --> b59_7
	b59_7 --> b59_8
	b59_8 --> b59_1
end

</pre>`;
window.traces["BR_TABLE"]["schedulerMermaid__raw"] += `graph TD
subgraph block_59["Block 59"]
	direction TB
	b59_0[/"Start"\\]
	b59_4["key pop_u32"]
	b59_3["labels imm_readLabels"]
	b59_7["eff__44 doSwitch"]
	b59_8["eff_st_put__47 ctlxfer.put_BR_TABLE"]
	b59_1[\\"Finish"/]
	b59_0 --> b59_4
	b59_4 --> b59_3
	b59_3 --> b59_7
	b59_7 --> b59_8
	b59_8 --> b59_1
end

`;
window.traces["BR_TABLE"]["unLEM"] = ''
window.traces["BR_TABLE"]["unLEM__raw"] = ''
window.traces["BR_TABLE"]["unLEM"] += `<pre class='graph'>---
config:
  layout: elk
---
graph TD
	1[\\"Finish"/]
	7 -. Codeptr Stack Trap Locals Globals Tables Memory .-> 1
	8 -. Extra .-> 1
	8["eff_st_put__47 ctlxfer.put_BR_TABLE"]
	3 --> 8
	7 -. Extra .-> 8
	7["eff__44 doSwitch"]
	3 --> 7
	4 --> 7
	3 -. Codeptr .-> 7
	4 -. Stack .-> 7
	0 -. Trap Locals Globals Tables Memory Extra .-> 7
	0[/"Start"\\]
	4["key pop_u32"]
	0 -. Stack .-> 4
	3["labels imm_readLabels"]
	0 -. Codeptr .-> 3
</pre>`;
window.traces["BR_TABLE"]["unLEM__raw"] += `---
config:
  layout: elk
---
graph TD
	1[\\"Finish"/]
	7 -. Codeptr Stack Trap Locals Globals Tables Memory .-> 1
	8 -. Extra .-> 1
	8["eff_st_put__47 ctlxfer.put_BR_TABLE"]
	3 --> 8
	7 -. Extra .-> 8
	7["eff__44 doSwitch"]
	3 --> 7
	4 --> 7
	3 -. Codeptr .-> 7
	4 -. Stack .-> 7
	0 -. Trap Locals Globals Tables Memory Extra .-> 7
	0[/"Start"\\]
	4["key pop_u32"]
	0 -. Stack .-> 4
	3["labels imm_readLabels"]
	0 -. Codeptr .-> 3
`;
window.traces["BR_TABLE"]["unlem_schedule"] = ''
window.traces["BR_TABLE"]["unlem_schedule__raw"] = ''
window.traces["BR_TABLE"]["unlem_schedule"] += `<pre class=''>def labels = imm_readLabels();
def key = pop_u32();
def eff__44 = doSwitch(labels, key);
def eff_st_put__47 = ctlxfer.put_BR_TABLE(labels);
</pre>`;
window.traces["BR_TABLE"]["unlem_schedule__raw"] += `def labels = imm_readLabels();
def key = pop_u32();
def eff__44 = doSwitch(labels, key);
def eff_st_put__47 = ctlxfer.put_BR_TABLE(labels);
`;
window.traces["BR_TABLE"]["spytial_ul"] = ''
window.traces["BR_TABLE"]["spytial_ul__raw"] = ''
window.traces["BR_TABLE"]["spytial_ul"] += `<pre class=''>{
"atoms": [
{
"id": "node_1",
"type": "finish",
"label": "Finish"
},
{
"id": "node_7",
"type": "intrinsic",
"label": "doSwitch [eff__44]"
},
{
"id": "node_8",
"type": "intrinsic",
"label": "ctlxfer.put_BR_TABLE [eff_st_put__47]"
},
{
"id": "node_3",
"type": "intrinsic",
"label": "imm_readLabels [labels]"
},
{
"id": "node_4",
"type": "intrinsic",
"label": "pop_u32 [key]"
},
{
"id": "node_0",
"type": "start",
"label": "Start"
}
],
"relations": [
{
"id": "uses",
"name": "Uses",
"types": ["sea_node", "sea_node"],
"tuples": [
{
"atoms": ["node_7", "node_3"],
"types": ["intrinsic", "intrinsic"]
},
{
"atoms": ["node_7", "node_4"],
"types": ["intrinsic", "intrinsic"]
},
{
"atoms": ["node_8", "node_3"],
"types": ["intrinsic", "intrinsic"]
}
]
},
{
"id": "state_uses",
"name": "StateUses",
"types": ["sea_node", "sea_node"],
"tuples": [
{
"atoms": ["node_1", "node_7"],
"types": ["finish", "intrinsic"]
},
{
"atoms": ["node_1", "node_8"],
"types": ["finish", "intrinsic"]
},
{
"atoms": ["node_7", "node_3"],
"types": ["intrinsic", "intrinsic"]
},
{
"atoms": ["node_7", "node_4"],
"types": ["intrinsic", "intrinsic"]
},
{
"atoms": ["node_7", "node_0"],
"types": ["intrinsic", "start"]
},
{
"atoms": ["node_8", "node_7"],
"types": ["intrinsic", "intrinsic"]
},
{
"atoms": ["node_3", "node_0"],
"types": ["intrinsic", "start"]
},
{
"atoms": ["node_4", "node_0"],
"types": ["intrinsic", "start"]
}
]
}
]
}</pre>`;
window.traces["BR_TABLE"]["spytial_ul__raw"] += `{
"atoms": [
{
"id": "node_1",
"type": "finish",
"label": "Finish"
},
{
"id": "node_7",
"type": "intrinsic",
"label": "doSwitch [eff__44]"
},
{
"id": "node_8",
"type": "intrinsic",
"label": "ctlxfer.put_BR_TABLE [eff_st_put__47]"
},
{
"id": "node_3",
"type": "intrinsic",
"label": "imm_readLabels [labels]"
},
{
"id": "node_4",
"type": "intrinsic",
"label": "pop_u32 [key]"
},
{
"id": "node_0",
"type": "start",
"label": "Start"
}
],
"relations": [
{
"id": "uses",
"name": "Uses",
"types": ["sea_node", "sea_node"],
"tuples": [
{
"atoms": ["node_7", "node_3"],
"types": ["intrinsic", "intrinsic"]
},
{
"atoms": ["node_7", "node_4"],
"types": ["intrinsic", "intrinsic"]
},
{
"atoms": ["node_8", "node_3"],
"types": ["intrinsic", "intrinsic"]
}
]
},
{
"id": "state_uses",
"name": "StateUses",
"types": ["sea_node", "sea_node"],
"tuples": [
{
"atoms": ["node_1", "node_7"],
"types": ["finish", "intrinsic"]
},
{
"atoms": ["node_1", "node_8"],
"types": ["finish", "intrinsic"]
},
{
"atoms": ["node_7", "node_3"],
"types": ["intrinsic", "intrinsic"]
},
{
"atoms": ["node_7", "node_4"],
"types": ["intrinsic", "intrinsic"]
},
{
"atoms": ["node_7", "node_0"],
"types": ["intrinsic", "start"]
},
{
"atoms": ["node_8", "node_7"],
"types": ["intrinsic", "intrinsic"]
},
{
"atoms": ["node_3", "node_0"],
"types": ["intrinsic", "start"]
},
{
"atoms": ["node_4", "node_0"],
"types": ["intrinsic", "start"]
}
]
}
]
}`;
window.traces["BR_TABLE"]["unlem_scheduler"] = ''
window.traces["BR_TABLE"]["unlem_scheduler__raw"] = ''
window.traces["BR_TABLE"]["unlem_scheduler"] += `<pre class='graph'>graph TD
subgraph block_60["Block 60"]
	direction TB
	b60_0[/"Start"\\]
	b60_4["key pop_u32"]
	b60_3["labels imm_readLabels"]
	b60_7["eff__44 doSwitch"]
	b60_8["eff_st_put__47 ctlxfer.put_BR_TABLE"]
	b60_1[\\"Finish"/]
	b60_0 --> b60_4
	b60_4 --> b60_3
	b60_3 --> b60_7
	b60_7 --> b60_8
	b60_8 --> b60_1
end

</pre>`;
window.traces["BR_TABLE"]["unlem_scheduler__raw"] += `graph TD
subgraph block_60["Block 60"]
	direction TB
	b60_0[/"Start"\\]
	b60_4["key pop_u32"]
	b60_3["labels imm_readLabels"]
	b60_7["eff__44 doSwitch"]
	b60_8["eff_st_put__47 ctlxfer.put_BR_TABLE"]
	b60_1[\\"Finish"/]
	b60_0 --> b60_4
	b60_4 --> b60_3
	b60_3 --> b60_7
	b60_7 --> b60_8
	b60_8 --> b60_1
end

`;
window.traces["BR_TABLE"]["unlem_pretty"] = ''
window.traces["BR_TABLE"]["unlem_pretty__raw"] = ''
window.traces["BR_TABLE"]["unlem_pretty"] += `<pre class=''>def labels = imm_readLabels();
def key = pop_u32();
doSwitch(labels, key);
ctlxfer.put_BR_TABLE(labels);
</pre>`;
window.traces["BR_TABLE"]["unlem_pretty__raw"] += `def labels = imm_readLabels();
def key = pop_u32();
doSwitch(labels, key);
ctlxfer.put_BR_TABLE(labels);
`;
window.traces["BR_TABLE"]["constUnLEM"] = ''
window.traces["BR_TABLE"]["constUnLEM__raw"] = ''
window.traces["BR_TABLE"]["constUnLEM"] += `<pre class='graph'>---
config:
  layout: elk
---
graph TD
	1[\\"Finish"/]
	7 -. Codeptr Stack Trap Locals Globals Tables Memory .-> 1
	8 -. Extra .-> 1
	8["eff_st_put__47 ctlxfer.put_BR_TABLE"]
	3 --> 8
	7 -. Extra .-> 8
	7["eff__44 doSwitch"]
	3 --> 7
	4 --> 7
	3 -. Codeptr .-> 7
	4 -. Stack .-> 7
	0 -. Trap Locals Globals Tables Memory Extra .-> 7
	0[/"Start"\\]
	4["key pop_u32"]
	0 -. Stack .-> 4
	3["labels imm_readLabels"]
	0 -. Codeptr .-> 3
</pre>`;
window.traces["BR_TABLE"]["constUnLEM__raw"] += `---
config:
  layout: elk
---
graph TD
	1[\\"Finish"/]
	7 -. Codeptr Stack Trap Locals Globals Tables Memory .-> 1
	8 -. Extra .-> 1
	8["eff_st_put__47 ctlxfer.put_BR_TABLE"]
	3 --> 8
	7 -. Extra .-> 8
	7["eff__44 doSwitch"]
	3 --> 7
	4 --> 7
	3 -. Codeptr .-> 7
	4 -. Stack .-> 7
	0 -. Trap Locals Globals Tables Memory Extra .-> 7
	0[/"Start"\\]
	4["key pop_u32"]
	0 -. Stack .-> 4
	3["labels imm_readLabels"]
	0 -. Codeptr .-> 3
`;
window.traces["BR_TABLE"]["chooseMerge"] = ''
window.traces["BR_TABLE"]["chooseMerge__raw"] = ''
window.traces["BR_TABLE"]["chooseMerge"] += `<pre class='graph'>---
config:
  layout: elk
---
graph TD
	1[\\"Finish"/]
	7 -. Codeptr Stack Trap Locals Globals Tables Memory .-> 1
	8 -. Extra .-> 1
	8["eff_st_put__47 ctlxfer.put_BR_TABLE"]
	3 --> 8
	7 -. Extra .-> 8
	7["eff__44 doSwitch"]
	3 --> 7
	4 --> 7
	3 -. Codeptr .-> 7
	4 -. Stack .-> 7
	0 -. Trap Locals Globals Tables Memory Extra .-> 7
	0[/"Start"\\]
	4["key pop_u32"]
	0 -. Stack .-> 4
	3["labels imm_readLabels"]
	0 -. Codeptr .-> 3
</pre>`;
window.traces["BR_TABLE"]["chooseMerge__raw"] += `---
config:
  layout: elk
---
graph TD
	1[\\"Finish"/]
	7 -. Codeptr Stack Trap Locals Globals Tables Memory .-> 1
	8 -. Extra .-> 1
	8["eff_st_put__47 ctlxfer.put_BR_TABLE"]
	3 --> 8
	7 -. Extra .-> 8
	7["eff__44 doSwitch"]
	3 --> 7
	4 --> 7
	3 -. Codeptr .-> 7
	4 -. Stack .-> 7
	0 -. Trap Locals Globals Tables Memory Extra .-> 7
	0[/"Start"\\]
	4["key pop_u32"]
	0 -. Stack .-> 4
	3["labels imm_readLabels"]
	0 -. Codeptr .-> 3
`;
window.traces["BR_TABLE"]["scheduled"] = ''
window.traces["BR_TABLE"]["scheduled__raw"] = ''
window.traces["BR_TABLE"]["scheduled"] += `<pre class=''>def labels = imm_readLabels();
def key = pop_u32();
def eff__44 = doSwitch(labels, key);
def eff_st_put__47 = ctlxfer.put_BR_TABLE(labels);
</pre>`;
window.traces["BR_TABLE"]["scheduled__raw"] += `def labels = imm_readLabels();
def key = pop_u32();
def eff__44 = doSwitch(labels, key);
def eff_st_put__47 = ctlxfer.put_BR_TABLE(labels);
`;
window.traces["BR_TABLE"]["pretty"] = ''
window.traces["BR_TABLE"]["pretty__raw"] = ''
window.traces["BR_TABLE"]["pretty"] += `<pre class=''>def labels = imm_readLabels();
def key = pop_u32();
doSwitch(labels, key);
ctlxfer.put_BR_TABLE(labels);
</pre>`;
window.traces["BR_TABLE"]["pretty__raw"] += `def labels = imm_readLabels();
def key = pop_u32();
doSwitch(labels, key);
ctlxfer.put_BR_TABLE(labels);
`;
window.traces["RETURN"] = {}
window.traces["RETURN"]["parsed"] = ''
window.traces["RETURN"]["parsed__raw"] = ''
window.traces["RETURN"]["parsed"] += `<pre class=''>def eff__48 = doReturn();
</pre>`;
window.traces["RETURN"]["parsed__raw"] += `def eff__48 = doReturn();
`;
window.traces["RETURN"]["raw"] = ''
window.traces["RETURN"]["raw__raw"] = ''
window.traces["RETURN"]["raw"] += `<pre class='graph'>---
config:
  layout: elk
---
graph TD
	1[\\"Finish"/]
	3 -. Codeptr Stack Trap Locals Globals Tables Memory Extra .-> 1
	3["eff__48 doReturn"]
	0 -. Codeptr Stack Trap Locals Globals Tables Memory Extra .-> 3
	0[/"Start"\\]
</pre>`;
window.traces["RETURN"]["raw__raw"] += `---
config:
  layout: elk
---
graph TD
	1[\\"Finish"/]
	3 -. Codeptr Stack Trap Locals Globals Tables Memory Extra .-> 1
	3["eff__48 doReturn"]
	0 -. Codeptr Stack Trap Locals Globals Tables Memory Extra .-> 3
	0[/"Start"\\]
`;
window.traces["RETURN"]["spytial"] = ''
window.traces["RETURN"]["spytial__raw"] = ''
window.traces["RETURN"]["spytial"] += `<pre class=''>{
"atoms": [
{
"id": "node_1",
"type": "finish",
"label": "Finish"
},
{
"id": "node_3",
"type": "intrinsic",
"label": "doReturn [eff__48]"
},
{
"id": "node_0",
"type": "start",
"label": "Start"
}
],
"relations": [
{
"id": "state_uses",
"name": "StateUses",
"types": ["sea_node", "sea_node"],
"tuples": [
{
"atoms": ["node_1", "node_3"],
"types": ["finish", "intrinsic"]
},
{
"atoms": ["node_3", "node_0"],
"types": ["intrinsic", "start"]
}
]
}
]
}</pre>`;
window.traces["RETURN"]["spytial__raw"] += `{
"atoms": [
{
"id": "node_1",
"type": "finish",
"label": "Finish"
},
{
"id": "node_3",
"type": "intrinsic",
"label": "doReturn [eff__48]"
},
{
"id": "node_0",
"type": "start",
"label": "Start"
}
],
"relations": [
{
"id": "state_uses",
"name": "StateUses",
"types": ["sea_node", "sea_node"],
"tuples": [
{
"atoms": ["node_1", "node_3"],
"types": ["finish", "intrinsic"]
},
{
"atoms": ["node_3", "node_0"],
"types": ["intrinsic", "start"]
}
]
}
]
}`;
window.traces["RETURN"]["overloadOps"] = ''
window.traces["RETURN"]["overloadOps__raw"] = ''
window.traces["RETURN"]["overloadOps"] += `<pre class='graph'>---
config:
  layout: elk
---
graph TD
	1[\\"Finish"/]
	3 -. Codeptr Stack Trap Locals Globals Tables Memory Extra .-> 1
	3["eff__48 doReturn"]
	0 -. Codeptr Stack Trap Locals Globals Tables Memory Extra .-> 3
	0[/"Start"\\]
</pre>`;
window.traces["RETURN"]["overloadOps__raw"] += `---
config:
  layout: elk
---
graph TD
	1[\\"Finish"/]
	3 -. Codeptr Stack Trap Locals Globals Tables Memory Extra .-> 1
	3["eff__48 doReturn"]
	0 -. Codeptr Stack Trap Locals Globals Tables Memory Extra .-> 3
	0[/"Start"\\]
`;
window.traces["RETURN"]["addAbstractions"] = ''
window.traces["RETURN"]["addAbstractions__raw"] = ''
window.traces["RETURN"]["addAbstractions"] += `<pre class='graph'>---
config:
  layout: elk
---
graph TD
	1[\\"Finish"/]
	3 -. Codeptr Stack Trap Locals Globals Tables Memory Extra .-> 1
	3["eff__48 doReturn"]
	0 -. Codeptr Stack Trap Locals Globals Tables Memory Extra .-> 3
	0[/"Start"\\]
</pre>`;
window.traces["RETURN"]["addAbstractions__raw"] += `---
config:
  layout: elk
---
graph TD
	1[\\"Finish"/]
	3 -. Codeptr Stack Trap Locals Globals Tables Memory Extra .-> 1
	3["eff__48 doReturn"]
	0 -. Codeptr Stack Trap Locals Globals Tables Memory Extra .-> 3
	0[/"Start"\\]
`;
window.traces["RETURN"]["schedulerMermaid"] = ''
window.traces["RETURN"]["schedulerMermaid__raw"] = ''
window.traces["RETURN"]["schedulerMermaid"] += `<pre class='graph'>graph TD
subgraph block_61["Block 61"]
	direction TB
	b61_0[/"Start"\\]
	b61_3["eff__48 doReturn"]
	b61_1[\\"Finish"/]
	b61_0 --> b61_3
	b61_3 --> b61_1
end

</pre>`;
window.traces["RETURN"]["schedulerMermaid__raw"] += `graph TD
subgraph block_61["Block 61"]
	direction TB
	b61_0[/"Start"\\]
	b61_3["eff__48 doReturn"]
	b61_1[\\"Finish"/]
	b61_0 --> b61_3
	b61_3 --> b61_1
end

`;
window.traces["RETURN"]["unLEM"] = ''
window.traces["RETURN"]["unLEM__raw"] = ''
window.traces["RETURN"]["unLEM"] += `<pre class='graph'>---
config:
  layout: elk
---
graph TD
	1[\\"Finish"/]
	3 -. Codeptr Stack Trap Locals Globals Tables Memory Extra .-> 1
	3["eff__48 doReturn"]
	0 -. Codeptr Stack Trap Locals Globals Tables Memory Extra .-> 3
	0[/"Start"\\]
</pre>`;
window.traces["RETURN"]["unLEM__raw"] += `---
config:
  layout: elk
---
graph TD
	1[\\"Finish"/]
	3 -. Codeptr Stack Trap Locals Globals Tables Memory Extra .-> 1
	3["eff__48 doReturn"]
	0 -. Codeptr Stack Trap Locals Globals Tables Memory Extra .-> 3
	0[/"Start"\\]
`;
window.traces["RETURN"]["unlem_schedule"] = ''
window.traces["RETURN"]["unlem_schedule__raw"] = ''
window.traces["RETURN"]["unlem_schedule"] += `<pre class=''>def eff__48 = doReturn();
</pre>`;
window.traces["RETURN"]["unlem_schedule__raw"] += `def eff__48 = doReturn();
`;
window.traces["RETURN"]["spytial_ul"] = ''
window.traces["RETURN"]["spytial_ul__raw"] = ''
window.traces["RETURN"]["spytial_ul"] += `<pre class=''>{
"atoms": [
{
"id": "node_1",
"type": "finish",
"label": "Finish"
},
{
"id": "node_3",
"type": "intrinsic",
"label": "doReturn [eff__48]"
},
{
"id": "node_0",
"type": "start",
"label": "Start"
}
],
"relations": [
{
"id": "state_uses",
"name": "StateUses",
"types": ["sea_node", "sea_node"],
"tuples": [
{
"atoms": ["node_1", "node_3"],
"types": ["finish", "intrinsic"]
},
{
"atoms": ["node_3", "node_0"],
"types": ["intrinsic", "start"]
}
]
}
]
}</pre>`;
window.traces["RETURN"]["spytial_ul__raw"] += `{
"atoms": [
{
"id": "node_1",
"type": "finish",
"label": "Finish"
},
{
"id": "node_3",
"type": "intrinsic",
"label": "doReturn [eff__48]"
},
{
"id": "node_0",
"type": "start",
"label": "Start"
}
],
"relations": [
{
"id": "state_uses",
"name": "StateUses",
"types": ["sea_node", "sea_node"],
"tuples": [
{
"atoms": ["node_1", "node_3"],
"types": ["finish", "intrinsic"]
},
{
"atoms": ["node_3", "node_0"],
"types": ["intrinsic", "start"]
}
]
}
]
}`;
window.traces["RETURN"]["unlem_scheduler"] = ''
window.traces["RETURN"]["unlem_scheduler__raw"] = ''
window.traces["RETURN"]["unlem_scheduler"] += `<pre class='graph'>graph TD
subgraph block_62["Block 62"]
	direction TB
	b62_0[/"Start"\\]
	b62_3["eff__48 doReturn"]
	b62_1[\\"Finish"/]
	b62_0 --> b62_3
	b62_3 --> b62_1
end

</pre>`;
window.traces["RETURN"]["unlem_scheduler__raw"] += `graph TD
subgraph block_62["Block 62"]
	direction TB
	b62_0[/"Start"\\]
	b62_3["eff__48 doReturn"]
	b62_1[\\"Finish"/]
	b62_0 --> b62_3
	b62_3 --> b62_1
end

`;
window.traces["RETURN"]["unlem_pretty"] = ''
window.traces["RETURN"]["unlem_pretty__raw"] = ''
window.traces["RETURN"]["unlem_pretty"] += `<pre class=''>doReturn();
</pre>`;
window.traces["RETURN"]["unlem_pretty__raw"] += `doReturn();
`;
window.traces["RETURN"]["constUnLEM"] = ''
window.traces["RETURN"]["constUnLEM__raw"] = ''
window.traces["RETURN"]["constUnLEM"] += `<pre class='graph'>---
config:
  layout: elk
---
graph TD
	1[\\"Finish"/]
	3 -. Codeptr Stack Trap Locals Globals Tables Memory Extra .-> 1
	3["eff__48 doReturn"]
	0 -. Codeptr Stack Trap Locals Globals Tables Memory Extra .-> 3
	0[/"Start"\\]
</pre>`;
window.traces["RETURN"]["constUnLEM__raw"] += `---
config:
  layout: elk
---
graph TD
	1[\\"Finish"/]
	3 -. Codeptr Stack Trap Locals Globals Tables Memory Extra .-> 1
	3["eff__48 doReturn"]
	0 -. Codeptr Stack Trap Locals Globals Tables Memory Extra .-> 3
	0[/"Start"\\]
`;
window.traces["RETURN"]["chooseMerge"] = ''
window.traces["RETURN"]["chooseMerge__raw"] = ''
window.traces["RETURN"]["chooseMerge"] += `<pre class='graph'>---
config:
  layout: elk
---
graph TD
	1[\\"Finish"/]
	3 -. Codeptr Stack Trap Locals Globals Tables Memory Extra .-> 1
	3["eff__48 doReturn"]
	0 -. Codeptr Stack Trap Locals Globals Tables Memory Extra .-> 3
	0[/"Start"\\]
</pre>`;
window.traces["RETURN"]["chooseMerge__raw"] += `---
config:
  layout: elk
---
graph TD
	1[\\"Finish"/]
	3 -. Codeptr Stack Trap Locals Globals Tables Memory Extra .-> 1
	3["eff__48 doReturn"]
	0 -. Codeptr Stack Trap Locals Globals Tables Memory Extra .-> 3
	0[/"Start"\\]
`;
window.traces["RETURN"]["scheduled"] = ''
window.traces["RETURN"]["scheduled__raw"] = ''
window.traces["RETURN"]["scheduled"] += `<pre class=''>def eff__48 = doReturn();
</pre>`;
window.traces["RETURN"]["scheduled__raw"] += `def eff__48 = doReturn();
`;
window.traces["RETURN"]["pretty"] = ''
window.traces["RETURN"]["pretty__raw"] = ''
window.traces["RETURN"]["pretty"] += `<pre class=''>doReturn();
</pre>`;
window.traces["RETURN"]["pretty__raw"] += `doReturn();
`;
window.traces["CALL"] = {}
window.traces["CALL"]["parsed"] = ''
window.traces["CALL"]["parsed__raw"] = ''
window.traces["CALL"]["parsed"] += `<pre class=''>def index = imm_readULEB32();
def arg__53 = (index);
def sig = m_getFuncSignature(arg__53);
def arg__52 = (index);
def target = i_getFunction(arg__52);
def arg__51 = (target);
def arg__50 = (sig);
def eff__49 = doCall(arg__50, arg__51);
</pre>`;
window.traces["CALL"]["parsed__raw"] += `def index = imm_readULEB32();
def arg__53 = (index);
def sig = m_getFuncSignature(arg__53);
def arg__52 = (index);
def target = i_getFunction(arg__52);
def arg__51 = (target);
def arg__50 = (sig);
def eff__49 = doCall(arg__50, arg__51);
`;
window.traces["CALL"]["raw"] = ''
window.traces["CALL"]["raw__raw"] = ''
window.traces["CALL"]["raw"] += `<pre class='graph'>---
config:
  layout: elk
---
graph TD
	1[\\"Finish"/]
	10 -. Codeptr Stack Trap Locals Globals Tables Memory Extra .-> 1
	10["eff__49 doCall"]
	5 --> 10
	7 --> 10
	3 -. Codeptr .-> 10
	0 -. Stack Trap Locals Globals Tables Memory Extra .-> 10
	0[/"Start"\\]
	3["index imm_readULEB32"]
	0 -. Codeptr .-> 3
	7["target i_getFunction"]
	3 --> 7
	5["sig m_getFuncSignature"]
	3 --> 5
</pre>`;
window.traces["CALL"]["raw__raw"] += `---
config:
  layout: elk
---
graph TD
	1[\\"Finish"/]
	10 -. Codeptr Stack Trap Locals Globals Tables Memory Extra .-> 1
	10["eff__49 doCall"]
	5 --> 10
	7 --> 10
	3 -. Codeptr .-> 10
	0 -. Stack Trap Locals Globals Tables Memory Extra .-> 10
	0[/"Start"\\]
	3["index imm_readULEB32"]
	0 -. Codeptr .-> 3
	7["target i_getFunction"]
	3 --> 7
	5["sig m_getFuncSignature"]
	3 --> 5
`;
window.traces["CALL"]["spytial"] = ''
window.traces["CALL"]["spytial__raw"] = ''
window.traces["CALL"]["spytial"] += `<pre class=''>{
"atoms": [
{
"id": "node_1",
"type": "finish",
"label": "Finish"
},
{
"id": "node_10",
"type": "intrinsic",
"label": "doCall [eff__49]"
},
{
"id": "node_5",
"type": "intrinsic",
"label": "m_getFuncSignature [sig]"
},
{
"id": "node_7",
"type": "intrinsic",
"label": "i_getFunction [target]"
},
{
"id": "node_3",
"type": "intrinsic",
"label": "imm_readULEB32 [index]"
},
{
"id": "node_0",
"type": "start",
"label": "Start"
}
],
"relations": [
{
"id": "uses",
"name": "Uses",
"types": ["sea_node", "sea_node"],
"tuples": [
{
"atoms": ["node_10", "node_5"],
"types": ["intrinsic", "intrinsic"]
},
{
"atoms": ["node_10", "node_7"],
"types": ["intrinsic", "intrinsic"]
},
{
"atoms": ["node_5", "node_3"],
"types": ["intrinsic", "intrinsic"]
},
{
"atoms": ["node_7", "node_3"],
"types": ["intrinsic", "intrinsic"]
}
]
},
{
"id": "state_uses",
"name": "StateUses",
"types": ["sea_node", "sea_node"],
"tuples": [
{
"atoms": ["node_1", "node_10"],
"types": ["finish", "intrinsic"]
},
{
"atoms": ["node_10", "node_3"],
"types": ["intrinsic", "intrinsic"]
},
{
"atoms": ["node_10", "node_0"],
"types": ["intrinsic", "start"]
},
{
"atoms": ["node_3", "node_0"],
"types": ["intrinsic", "start"]
}
]
}
]
}</pre>`;
window.traces["CALL"]["spytial__raw"] += `{
"atoms": [
{
"id": "node_1",
"type": "finish",
"label": "Finish"
},
{
"id": "node_10",
"type": "intrinsic",
"label": "doCall [eff__49]"
},
{
"id": "node_5",
"type": "intrinsic",
"label": "m_getFuncSignature [sig]"
},
{
"id": "node_7",
"type": "intrinsic",
"label": "i_getFunction [target]"
},
{
"id": "node_3",
"type": "intrinsic",
"label": "imm_readULEB32 [index]"
},
{
"id": "node_0",
"type": "start",
"label": "Start"
}
],
"relations": [
{
"id": "uses",
"name": "Uses",
"types": ["sea_node", "sea_node"],
"tuples": [
{
"atoms": ["node_10", "node_5"],
"types": ["intrinsic", "intrinsic"]
},
{
"atoms": ["node_10", "node_7"],
"types": ["intrinsic", "intrinsic"]
},
{
"atoms": ["node_5", "node_3"],
"types": ["intrinsic", "intrinsic"]
},
{
"atoms": ["node_7", "node_3"],
"types": ["intrinsic", "intrinsic"]
}
]
},
{
"id": "state_uses",
"name": "StateUses",
"types": ["sea_node", "sea_node"],
"tuples": [
{
"atoms": ["node_1", "node_10"],
"types": ["finish", "intrinsic"]
},
{
"atoms": ["node_10", "node_3"],
"types": ["intrinsic", "intrinsic"]
},
{
"atoms": ["node_10", "node_0"],
"types": ["intrinsic", "start"]
},
{
"atoms": ["node_3", "node_0"],
"types": ["intrinsic", "start"]
}
]
}
]
}`;
window.traces["CALL"]["overloadOps"] = ''
window.traces["CALL"]["overloadOps__raw"] = ''
window.traces["CALL"]["overloadOps"] += `<pre class='graph'>---
config:
  layout: elk
---
graph TD
	1[\\"Finish"/]
	10 -. Codeptr Stack Trap Locals Globals Tables Memory Extra .-> 1
	10["eff__49 doCall"]
	5 --> 10
	7 --> 10
	3 -. Codeptr .-> 10
	0 -. Stack Trap Locals Globals Tables Memory Extra .-> 10
	0[/"Start"\\]
	3["index imm_readULEB32"]
	0 -. Codeptr .-> 3
	7["target i_getFunction"]
	3 --> 7
	5["sig m_getFuncSignature"]
	3 --> 5
</pre>`;
window.traces["CALL"]["overloadOps__raw"] += `---
config:
  layout: elk
---
graph TD
	1[\\"Finish"/]
	10 -. Codeptr Stack Trap Locals Globals Tables Memory Extra .-> 1
	10["eff__49 doCall"]
	5 --> 10
	7 --> 10
	3 -. Codeptr .-> 10
	0 -. Stack Trap Locals Globals Tables Memory Extra .-> 10
	0[/"Start"\\]
	3["index imm_readULEB32"]
	0 -. Codeptr .-> 3
	7["target i_getFunction"]
	3 --> 7
	5["sig m_getFuncSignature"]
	3 --> 5
`;
window.traces["CALL"]["addAbstractions"] = ''
window.traces["CALL"]["addAbstractions__raw"] = ''
window.traces["CALL"]["addAbstractions"] += `<pre class='graph'>---
config:
  layout: elk
---
graph TD
	1[\\"Finish"/]
	10 -. Codeptr Stack Trap Locals Globals Tables Memory Extra .-> 1
	10["eff__49 doCall"]
	5 --> 10
	7 --> 10
	3 -. Codeptr .-> 10
	0 -. Stack Trap Locals Globals Tables Memory Extra .-> 10
	0[/"Start"\\]
	3["index imm_readULEB32"]
	0 -. Codeptr .-> 3
	7["target i_getFunction"]
	3 --> 7
	5["sig m_getFuncSignature"]
	3 --> 5
</pre>`;
window.traces["CALL"]["addAbstractions__raw"] += `---
config:
  layout: elk
---
graph TD
	1[\\"Finish"/]
	10 -. Codeptr Stack Trap Locals Globals Tables Memory Extra .-> 1
	10["eff__49 doCall"]
	5 --> 10
	7 --> 10
	3 -. Codeptr .-> 10
	0 -. Stack Trap Locals Globals Tables Memory Extra .-> 10
	0[/"Start"\\]
	3["index imm_readULEB32"]
	0 -. Codeptr .-> 3
	7["target i_getFunction"]
	3 --> 7
	5["sig m_getFuncSignature"]
	3 --> 5
`;
window.traces["CALL"]["schedulerMermaid"] = ''
window.traces["CALL"]["schedulerMermaid__raw"] = ''
window.traces["CALL"]["schedulerMermaid"] += `<pre class='graph'>graph TD
subgraph block_63["Block 63"]
	direction TB
	b63_0[/"Start"\\]
	b63_3["index imm_readULEB32"]
	b63_7["target i_getFunction"]
	b63_5["sig m_getFuncSignature"]
	b63_10["eff__49 doCall"]
	b63_1[\\"Finish"/]
	b63_0 --> b63_3
	b63_3 --> b63_7
	b63_7 --> b63_5
	b63_5 --> b63_10
	b63_10 --> b63_1
end

</pre>`;
window.traces["CALL"]["schedulerMermaid__raw"] += `graph TD
subgraph block_63["Block 63"]
	direction TB
	b63_0[/"Start"\\]
	b63_3["index imm_readULEB32"]
	b63_7["target i_getFunction"]
	b63_5["sig m_getFuncSignature"]
	b63_10["eff__49 doCall"]
	b63_1[\\"Finish"/]
	b63_0 --> b63_3
	b63_3 --> b63_7
	b63_7 --> b63_5
	b63_5 --> b63_10
	b63_10 --> b63_1
end

`;
window.traces["CALL"]["unLEM"] = ''
window.traces["CALL"]["unLEM__raw"] = ''
window.traces["CALL"]["unLEM"] += `<pre class='graph'>---
config:
  layout: elk
---
graph TD
	1[\\"Finish"/]
	10 -. Codeptr Stack Trap Locals Globals Tables Memory Extra .-> 1
	10["eff__49 doCall"]
	5 --> 10
	7 --> 10
	3 -. Codeptr .-> 10
	0 -. Stack Trap Locals Globals Tables Memory Extra .-> 10
	0[/"Start"\\]
	3["index imm_readULEB32"]
	0 -. Codeptr .-> 3
	7["target i_getFunction"]
	3 --> 7
	5["sig m_getFuncSignature"]
	3 --> 5
</pre>`;
window.traces["CALL"]["unLEM__raw"] += `---
config:
  layout: elk
---
graph TD
	1[\\"Finish"/]
	10 -. Codeptr Stack Trap Locals Globals Tables Memory Extra .-> 1
	10["eff__49 doCall"]
	5 --> 10
	7 --> 10
	3 -. Codeptr .-> 10
	0 -. Stack Trap Locals Globals Tables Memory Extra .-> 10
	0[/"Start"\\]
	3["index imm_readULEB32"]
	0 -. Codeptr .-> 3
	7["target i_getFunction"]
	3 --> 7
	5["sig m_getFuncSignature"]
	3 --> 5
`;
window.traces["CALL"]["unlem_schedule"] = ''
window.traces["CALL"]["unlem_schedule__raw"] = ''
window.traces["CALL"]["unlem_schedule"] += `<pre class=''>def index = imm_readULEB32();
def sig = m_getFuncSignature(index);
def target = i_getFunction(index);
def eff__49 = doCall(sig, target);
</pre>`;
window.traces["CALL"]["unlem_schedule__raw"] += `def index = imm_readULEB32();
def sig = m_getFuncSignature(index);
def target = i_getFunction(index);
def eff__49 = doCall(sig, target);
`;
window.traces["CALL"]["spytial_ul"] = ''
window.traces["CALL"]["spytial_ul__raw"] = ''
window.traces["CALL"]["spytial_ul"] += `<pre class=''>{
"atoms": [
{
"id": "node_1",
"type": "finish",
"label": "Finish"
},
{
"id": "node_10",
"type": "intrinsic",
"label": "doCall [eff__49]"
},
{
"id": "node_5",
"type": "intrinsic",
"label": "m_getFuncSignature [sig]"
},
{
"id": "node_7",
"type": "intrinsic",
"label": "i_getFunction [target]"
},
{
"id": "node_3",
"type": "intrinsic",
"label": "imm_readULEB32 [index]"
},
{
"id": "node_0",
"type": "start",
"label": "Start"
}
],
"relations": [
{
"id": "uses",
"name": "Uses",
"types": ["sea_node", "sea_node"],
"tuples": [
{
"atoms": ["node_10", "node_5"],
"types": ["intrinsic", "intrinsic"]
},
{
"atoms": ["node_10", "node_7"],
"types": ["intrinsic", "intrinsic"]
},
{
"atoms": ["node_5", "node_3"],
"types": ["intrinsic", "intrinsic"]
},
{
"atoms": ["node_7", "node_3"],
"types": ["intrinsic", "intrinsic"]
}
]
},
{
"id": "state_uses",
"name": "StateUses",
"types": ["sea_node", "sea_node"],
"tuples": [
{
"atoms": ["node_1", "node_10"],
"types": ["finish", "intrinsic"]
},
{
"atoms": ["node_10", "node_3"],
"types": ["intrinsic", "intrinsic"]
},
{
"atoms": ["node_10", "node_0"],
"types": ["intrinsic", "start"]
},
{
"atoms": ["node_3", "node_0"],
"types": ["intrinsic", "start"]
}
]
}
]
}</pre>`;
window.traces["CALL"]["spytial_ul__raw"] += `{
"atoms": [
{
"id": "node_1",
"type": "finish",
"label": "Finish"
},
{
"id": "node_10",
"type": "intrinsic",
"label": "doCall [eff__49]"
},
{
"id": "node_5",
"type": "intrinsic",
"label": "m_getFuncSignature [sig]"
},
{
"id": "node_7",
"type": "intrinsic",
"label": "i_getFunction [target]"
},
{
"id": "node_3",
"type": "intrinsic",
"label": "imm_readULEB32 [index]"
},
{
"id": "node_0",
"type": "start",
"label": "Start"
}
],
"relations": [
{
"id": "uses",
"name": "Uses",
"types": ["sea_node", "sea_node"],
"tuples": [
{
"atoms": ["node_10", "node_5"],
"types": ["intrinsic", "intrinsic"]
},
{
"atoms": ["node_10", "node_7"],
"types": ["intrinsic", "intrinsic"]
},
{
"atoms": ["node_5", "node_3"],
"types": ["intrinsic", "intrinsic"]
},
{
"atoms": ["node_7", "node_3"],
"types": ["intrinsic", "intrinsic"]
}
]
},
{
"id": "state_uses",
"name": "StateUses",
"types": ["sea_node", "sea_node"],
"tuples": [
{
"atoms": ["node_1", "node_10"],
"types": ["finish", "intrinsic"]
},
{
"atoms": ["node_10", "node_3"],
"types": ["intrinsic", "intrinsic"]
},
{
"atoms": ["node_10", "node_0"],
"types": ["intrinsic", "start"]
},
{
"atoms": ["node_3", "node_0"],
"types": ["intrinsic", "start"]
}
]
}
]
}`;
window.traces["CALL"]["unlem_scheduler"] = ''
window.traces["CALL"]["unlem_scheduler__raw"] = ''
window.traces["CALL"]["unlem_scheduler"] += `<pre class='graph'>graph TD
subgraph block_64["Block 64"]
	direction TB
	b64_0[/"Start"\\]
	b64_3["index imm_readULEB32"]
	b64_7["target i_getFunction"]
	b64_5["sig m_getFuncSignature"]
	b64_10["eff__49 doCall"]
	b64_1[\\"Finish"/]
	b64_0 --> b64_3
	b64_3 --> b64_7
	b64_7 --> b64_5
	b64_5 --> b64_10
	b64_10 --> b64_1
end

</pre>`;
window.traces["CALL"]["unlem_scheduler__raw"] += `graph TD
subgraph block_64["Block 64"]
	direction TB
	b64_0[/"Start"\\]
	b64_3["index imm_readULEB32"]
	b64_7["target i_getFunction"]
	b64_5["sig m_getFuncSignature"]
	b64_10["eff__49 doCall"]
	b64_1[\\"Finish"/]
	b64_0 --> b64_3
	b64_3 --> b64_7
	b64_7 --> b64_5
	b64_5 --> b64_10
	b64_10 --> b64_1
end

`;
window.traces["CALL"]["unlem_pretty"] = ''
window.traces["CALL"]["unlem_pretty__raw"] = ''
window.traces["CALL"]["unlem_pretty"] += `<pre class=''>def index = imm_readULEB32();
def sig = m_getFuncSignature(index);
def target = i_getFunction(index);
doCall(sig, target);
</pre>`;
window.traces["CALL"]["unlem_pretty__raw"] += `def index = imm_readULEB32();
def sig = m_getFuncSignature(index);
def target = i_getFunction(index);
doCall(sig, target);
`;
window.traces["CALL"]["constUnLEM"] = ''
window.traces["CALL"]["constUnLEM__raw"] = ''
window.traces["CALL"]["constUnLEM"] += `<pre class='graph'>---
config:
  layout: elk
---
graph TD
	1[\\"Finish"/]
	10 -. Codeptr Stack Trap Locals Globals Tables Memory Extra .-> 1
	10["eff__49 doCall"]
	5 --> 10
	7 --> 10
	3 -. Codeptr .-> 10
	0 -. Stack Trap Locals Globals Tables Memory Extra .-> 10
	0[/"Start"\\]
	3["index imm_readULEB32"]
	0 -. Codeptr .-> 3
	7["target i_getFunction"]
	3 --> 7
	5["sig m_getFuncSignature"]
	3 --> 5
</pre>`;
window.traces["CALL"]["constUnLEM__raw"] += `---
config:
  layout: elk
---
graph TD
	1[\\"Finish"/]
	10 -. Codeptr Stack Trap Locals Globals Tables Memory Extra .-> 1
	10["eff__49 doCall"]
	5 --> 10
	7 --> 10
	3 -. Codeptr .-> 10
	0 -. Stack Trap Locals Globals Tables Memory Extra .-> 10
	0[/"Start"\\]
	3["index imm_readULEB32"]
	0 -. Codeptr .-> 3
	7["target i_getFunction"]
	3 --> 7
	5["sig m_getFuncSignature"]
	3 --> 5
`;
window.traces["CALL"]["chooseMerge"] = ''
window.traces["CALL"]["chooseMerge__raw"] = ''
window.traces["CALL"]["chooseMerge"] += `<pre class='graph'>---
config:
  layout: elk
---
graph TD
	1[\\"Finish"/]
	10 -. Codeptr Stack Trap Locals Globals Tables Memory Extra .-> 1
	10["eff__49 doCall"]
	5 --> 10
	7 --> 10
	3 -. Codeptr .-> 10
	0 -. Stack Trap Locals Globals Tables Memory Extra .-> 10
	0[/"Start"\\]
	3["index imm_readULEB32"]
	0 -. Codeptr .-> 3
	7["target i_getFunction"]
	3 --> 7
	5["sig m_getFuncSignature"]
	3 --> 5
</pre>`;
window.traces["CALL"]["chooseMerge__raw"] += `---
config:
  layout: elk
---
graph TD
	1[\\"Finish"/]
	10 -. Codeptr Stack Trap Locals Globals Tables Memory Extra .-> 1
	10["eff__49 doCall"]
	5 --> 10
	7 --> 10
	3 -. Codeptr .-> 10
	0 -. Stack Trap Locals Globals Tables Memory Extra .-> 10
	0[/"Start"\\]
	3["index imm_readULEB32"]
	0 -. Codeptr .-> 3
	7["target i_getFunction"]
	3 --> 7
	5["sig m_getFuncSignature"]
	3 --> 5
`;
window.traces["CALL"]["scheduled"] = ''
window.traces["CALL"]["scheduled__raw"] = ''
window.traces["CALL"]["scheduled"] += `<pre class=''>def index = imm_readULEB32();
def sig = m_getFuncSignature(index);
def target = i_getFunction(index);
def eff__49 = doCall(sig, target);
</pre>`;
window.traces["CALL"]["scheduled__raw"] += `def index = imm_readULEB32();
def sig = m_getFuncSignature(index);
def target = i_getFunction(index);
def eff__49 = doCall(sig, target);
`;
window.traces["CALL"]["pretty"] = ''
window.traces["CALL"]["pretty__raw"] = ''
window.traces["CALL"]["pretty"] += `<pre class=''>def index = imm_readULEB32();
def sig = m_getFuncSignature(index);
def target = i_getFunction(index);
doCall(sig, target);
</pre>`;
window.traces["CALL"]["pretty__raw"] += `def index = imm_readULEB32();
def sig = m_getFuncSignature(index);
def target = i_getFunction(index);
doCall(sig, target);
`;
window.traces["CALL_INDIRECT"] = {}
window.traces["CALL_INDIRECT"]["parsed"] = ''
window.traces["CALL_INDIRECT"]["parsed__raw"] = ''
window.traces["CALL_INDIRECT"]["parsed"] += `<pre class=''>def sig_index = imm_readULEB32();
def table_index = imm_readULEB32();
def arg__68 = (sig_index);
def sig = m_getSignature(arg__68);
def arg__67 = (table_index);
def is64 = m_isTable64(arg__67);
def cond__54 = (is64);
if (cond__54) {
	def func_index = pop_u64();
	def arg__60 = (func_index);
	def arg__59 = (sig);
	def arg__58 = (table_index);
	def target = i_getTableFunction64(arg__58, arg__59, arg__60);
	def arg__57 = (target);
	def arg__56 = (sig);
	def eff__55 = doCall(arg__56, arg__57);
} else {
	def func_index = pop_u32();
	def arg__66 = (func_index);
	def arg__65 = (sig);
	def arg__64 = (table_index);
	def target = i_getTableFunction32(arg__64, arg__65, arg__66);
	def arg__63 = (target);
	def arg__62 = (sig);
	def eff__61 = doCall(arg__62, arg__63);
}
// phis: 
</pre>`;
window.traces["CALL_INDIRECT"]["parsed__raw"] += `def sig_index = imm_readULEB32();
def table_index = imm_readULEB32();
def arg__68 = (sig_index);
def sig = m_getSignature(arg__68);
def arg__67 = (table_index);
def is64 = m_isTable64(arg__67);
def cond__54 = (is64);
if (cond__54) {
	def func_index = pop_u64();
	def arg__60 = (func_index);
	def arg__59 = (sig);
	def arg__58 = (table_index);
	def target = i_getTableFunction64(arg__58, arg__59, arg__60);
	def arg__57 = (target);
	def arg__56 = (sig);
	def eff__55 = doCall(arg__56, arg__57);
} else {
	def func_index = pop_u32();
	def arg__66 = (func_index);
	def arg__65 = (sig);
	def arg__64 = (table_index);
	def target = i_getTableFunction32(arg__64, arg__65, arg__66);
	def arg__63 = (target);
	def arg__62 = (sig);
	def eff__61 = doCall(arg__62, arg__63);
}
// phis: 
`;
window.traces["CALL_INDIRECT"]["raw"] = ''
window.traces["CALL_INDIRECT"]["raw__raw"] = ''
window.traces["CALL_INDIRECT"]["raw"] += `<pre class='graph'>---
config:
  layout: elk
---
graph TD
	1[\\"Finish"/]
	26 -. Codeptr Stack Trap Locals Globals Tables Memory Extra .-> 1
	26{{"Sϕ Codeptr Stack Trap Locals Globals Tables Memory Extra "}}
	8 --> 26
	25 --> 26
	17 --> 26
	17["eff__61 doCall"]
	6 --> 17
	14 --> 17
	4 -. Codeptr .-> 17
	10 -. Stack .-> 17
	0 -. Trap Locals Globals Tables Memory Extra .-> 17
	0[/"Start"\\]
	10["func_index pop_u32"]
	0 -. Stack .-> 10
	4["table_index imm_readULEB32"]
	3 -. Codeptr .-> 4
	3["sig_index imm_readULEB32"]
	0 -. Codeptr .-> 3
	14["target i_getTableFunction32"]
	4 --> 14
	6 --> 14
	10 --> 14
	6["sig m_getSignature"]
	3 --> 6
	25["eff__55 doCall"]
	6 --> 25
	22 --> 25
	4 -. Codeptr .-> 25
	18 -. Stack .-> 25
	0 -. Trap Locals Globals Tables Memory Extra .-> 25
	18["func_index pop_u64"]
	0 -. Stack .-> 18
	22["target i_getTableFunction64"]
	4 --> 22
	6 --> 22
	18 --> 22
	8["is64 m_isTable64"]
	4 --> 8
</pre>`;
window.traces["CALL_INDIRECT"]["raw__raw"] += `---
config:
  layout: elk
---
graph TD
	1[\\"Finish"/]
	26 -. Codeptr Stack Trap Locals Globals Tables Memory Extra .-> 1
	26{{"Sϕ Codeptr Stack Trap Locals Globals Tables Memory Extra "}}
	8 --> 26
	25 --> 26
	17 --> 26
	17["eff__61 doCall"]
	6 --> 17
	14 --> 17
	4 -. Codeptr .-> 17
	10 -. Stack .-> 17
	0 -. Trap Locals Globals Tables Memory Extra .-> 17
	0[/"Start"\\]
	10["func_index pop_u32"]
	0 -. Stack .-> 10
	4["table_index imm_readULEB32"]
	3 -. Codeptr .-> 4
	3["sig_index imm_readULEB32"]
	0 -. Codeptr .-> 3
	14["target i_getTableFunction32"]
	4 --> 14
	6 --> 14
	10 --> 14
	6["sig m_getSignature"]
	3 --> 6
	25["eff__55 doCall"]
	6 --> 25
	22 --> 25
	4 -. Codeptr .-> 25
	18 -. Stack .-> 25
	0 -. Trap Locals Globals Tables Memory Extra .-> 25
	18["func_index pop_u64"]
	0 -. Stack .-> 18
	22["target i_getTableFunction64"]
	4 --> 22
	6 --> 22
	18 --> 22
	8["is64 m_isTable64"]
	4 --> 8
`;
window.traces["CALL_INDIRECT"]["spytial"] = ''
window.traces["CALL_INDIRECT"]["spytial__raw"] = ''
window.traces["CALL_INDIRECT"]["spytial"] += `<pre class=''>{
"atoms": [
{
"id": "node_1",
"type": "finish",
"label": "Finish"
},
{
"id": "node_26",
"type": "state_phi",
"label": "StatePhi [m_isTable64 [is64]]"
},
{
"id": "node_8",
"type": "intrinsic",
"label": "m_isTable64 [is64]"
},
{
"id": "node_25",
"type": "intrinsic",
"label": "doCall [eff__55]"
},
{
"id": "node_17",
"type": "intrinsic",
"label": "doCall [eff__61]"
},
{
"id": "node_4",
"type": "intrinsic",
"label": "imm_readULEB32 [table_index]"
},
{
"id": "node_6",
"type": "intrinsic",
"label": "m_getSignature [sig]"
},
{
"id": "node_22",
"type": "intrinsic",
"label": "i_getTableFunction64 [target]"
},
{
"id": "node_18",
"type": "intrinsic",
"label": "pop_u64 [func_index]"
},
{
"id": "node_0",
"type": "start",
"label": "Start"
},
{
"id": "node_14",
"type": "intrinsic",
"label": "i_getTableFunction32 [target]"
},
{
"id": "node_10",
"type": "intrinsic",
"label": "pop_u32 [func_index]"
},
{
"id": "node_3",
"type": "intrinsic",
"label": "imm_readULEB32 [sig_index]"
}
],
"relations": [
{
"id": "uses",
"name": "Uses",
"types": ["sea_node", "sea_node"],
"tuples": [
{
"atoms": ["node_8", "node_4"],
"types": ["intrinsic", "intrinsic"]
},
{
"atoms": ["node_25", "node_6"],
"types": ["intrinsic", "intrinsic"]
},
{
"atoms": ["node_25", "node_22"],
"types": ["intrinsic", "intrinsic"]
},
{
"atoms": ["node_17", "node_6"],
"types": ["intrinsic", "intrinsic"]
},
{
"atoms": ["node_17", "node_14"],
"types": ["intrinsic", "intrinsic"]
},
{
"atoms": ["node_6", "node_3"],
"types": ["intrinsic", "intrinsic"]
},
{
"atoms": ["node_22", "node_4"],
"types": ["intrinsic", "intrinsic"]
},
{
"atoms": ["node_22", "node_6"],
"types": ["intrinsic", "intrinsic"]
},
{
"atoms": ["node_22", "node_18"],
"types": ["intrinsic", "intrinsic"]
},
{
"atoms": ["node_14", "node_4"],
"types": ["intrinsic", "intrinsic"]
},
{
"atoms": ["node_14", "node_6"],
"types": ["intrinsic", "intrinsic"]
},
{
"atoms": ["node_14", "node_10"],
"types": ["intrinsic", "intrinsic"]
}
]
},
{
"id": "state_uses",
"name": "StateUses",
"types": ["sea_node", "sea_node"],
"tuples": [
{
"atoms": ["node_1", "node_26"],
"types": ["finish", "state_phi"]
},
{
"atoms": ["node_25", "node_4"],
"types": ["intrinsic", "intrinsic"]
},
{
"atoms": ["node_25", "node_18"],
"types": ["intrinsic", "intrinsic"]
},
{
"atoms": ["node_25", "node_0"],
"types": ["intrinsic", "start"]
},
{
"atoms": ["node_17", "node_4"],
"types": ["intrinsic", "intrinsic"]
},
{
"atoms": ["node_17", "node_10"],
"types": ["intrinsic", "intrinsic"]
},
{
"atoms": ["node_17", "node_0"],
"types": ["intrinsic", "start"]
},
{
"atoms": ["node_4", "node_3"],
"types": ["intrinsic", "intrinsic"]
},
{
"atoms": ["node_18", "node_0"],
"types": ["intrinsic", "start"]
},
{
"atoms": ["node_10", "node_0"],
"types": ["intrinsic", "start"]
},
{
"atoms": ["node_3", "node_0"],
"types": ["intrinsic", "start"]
}
]
},
{
"id": "phi_cond",
"name": "PhiCond",
"types": ["sea_node", "sea_node"],
"tuples": [
{
"atoms": ["node_26", "node_8"],
"types": ["state_phi", "intrinsic"]
}
]
},
{
"id": "phi_true",
"name": "PhiTrue",
"types": ["sea_node", "sea_node"],
"tuples": [
{
"atoms": ["node_26", "node_25"],
"types": ["state_phi", "intrinsic"]
}
]
},
{
"id": "phi_false",
"name": "PhiFalse",
"types": ["sea_node", "sea_node"],
"tuples": [
{
"atoms": ["node_26", "node_17"],
"types": ["state_phi", "intrinsic"]
}
]
}
]
}</pre>`;
window.traces["CALL_INDIRECT"]["spytial__raw"] += `{
"atoms": [
{
"id": "node_1",
"type": "finish",
"label": "Finish"
},
{
"id": "node_26",
"type": "state_phi",
"label": "StatePhi [m_isTable64 [is64]]"
},
{
"id": "node_8",
"type": "intrinsic",
"label": "m_isTable64 [is64]"
},
{
"id": "node_25",
"type": "intrinsic",
"label": "doCall [eff__55]"
},
{
"id": "node_17",
"type": "intrinsic",
"label": "doCall [eff__61]"
},
{
"id": "node_4",
"type": "intrinsic",
"label": "imm_readULEB32 [table_index]"
},
{
"id": "node_6",
"type": "intrinsic",
"label": "m_getSignature [sig]"
},
{
"id": "node_22",
"type": "intrinsic",
"label": "i_getTableFunction64 [target]"
},
{
"id": "node_18",
"type": "intrinsic",
"label": "pop_u64 [func_index]"
},
{
"id": "node_0",
"type": "start",
"label": "Start"
},
{
"id": "node_14",
"type": "intrinsic",
"label": "i_getTableFunction32 [target]"
},
{
"id": "node_10",
"type": "intrinsic",
"label": "pop_u32 [func_index]"
},
{
"id": "node_3",
"type": "intrinsic",
"label": "imm_readULEB32 [sig_index]"
}
],
"relations": [
{
"id": "uses",
"name": "Uses",
"types": ["sea_node", "sea_node"],
"tuples": [
{
"atoms": ["node_8", "node_4"],
"types": ["intrinsic", "intrinsic"]
},
{
"atoms": ["node_25", "node_6"],
"types": ["intrinsic", "intrinsic"]
},
{
"atoms": ["node_25", "node_22"],
"types": ["intrinsic", "intrinsic"]
},
{
"atoms": ["node_17", "node_6"],
"types": ["intrinsic", "intrinsic"]
},
{
"atoms": ["node_17", "node_14"],
"types": ["intrinsic", "intrinsic"]
},
{
"atoms": ["node_6", "node_3"],
"types": ["intrinsic", "intrinsic"]
},
{
"atoms": ["node_22", "node_4"],
"types": ["intrinsic", "intrinsic"]
},
{
"atoms": ["node_22", "node_6"],
"types": ["intrinsic", "intrinsic"]
},
{
"atoms": ["node_22", "node_18"],
"types": ["intrinsic", "intrinsic"]
},
{
"atoms": ["node_14", "node_4"],
"types": ["intrinsic", "intrinsic"]
},
{
"atoms": ["node_14", "node_6"],
"types": ["intrinsic", "intrinsic"]
},
{
"atoms": ["node_14", "node_10"],
"types": ["intrinsic", "intrinsic"]
}
]
},
{
"id": "state_uses",
"name": "StateUses",
"types": ["sea_node", "sea_node"],
"tuples": [
{
"atoms": ["node_1", "node_26"],
"types": ["finish", "state_phi"]
},
{
"atoms": ["node_25", "node_4"],
"types": ["intrinsic", "intrinsic"]
},
{
"atoms": ["node_25", "node_18"],
"types": ["intrinsic", "intrinsic"]
},
{
"atoms": ["node_25", "node_0"],
"types": ["intrinsic", "start"]
},
{
"atoms": ["node_17", "node_4"],
"types": ["intrinsic", "intrinsic"]
},
{
"atoms": ["node_17", "node_10"],
"types": ["intrinsic", "intrinsic"]
},
{
"atoms": ["node_17", "node_0"],
"types": ["intrinsic", "start"]
},
{
"atoms": ["node_4", "node_3"],
"types": ["intrinsic", "intrinsic"]
},
{
"atoms": ["node_18", "node_0"],
"types": ["intrinsic", "start"]
},
{
"atoms": ["node_10", "node_0"],
"types": ["intrinsic", "start"]
},
{
"atoms": ["node_3", "node_0"],
"types": ["intrinsic", "start"]
}
]
},
{
"id": "phi_cond",
"name": "PhiCond",
"types": ["sea_node", "sea_node"],
"tuples": [
{
"atoms": ["node_26", "node_8"],
"types": ["state_phi", "intrinsic"]
}
]
},
{
"id": "phi_true",
"name": "PhiTrue",
"types": ["sea_node", "sea_node"],
"tuples": [
{
"atoms": ["node_26", "node_25"],
"types": ["state_phi", "intrinsic"]
}
]
},
{
"id": "phi_false",
"name": "PhiFalse",
"types": ["sea_node", "sea_node"],
"tuples": [
{
"atoms": ["node_26", "node_17"],
"types": ["state_phi", "intrinsic"]
}
]
}
]
}`;
window.traces["CALL_INDIRECT"]["overloadOps"] = ''
window.traces["CALL_INDIRECT"]["overloadOps__raw"] = ''
window.traces["CALL_INDIRECT"]["overloadOps"] += `<pre class='graph'>---
config:
  layout: elk
---
graph TD
	1[\\"Finish"/]
	26 -. Codeptr Stack Trap Locals Globals Tables Memory .-> 1
	27 -. Extra .-> 1
	27["eff_st_put__69 ctlxfer.put_CALL_INDIRECT"]
	8 --> 27
	26 -. Extra .-> 27
	26{{"Sϕ Codeptr Stack Trap Locals Globals Tables Memory Extra "}}
	8 --> 26
	25 --> 26
	17 --> 26
	17["eff__61 doCall"]
	6 --> 17
	14 --> 17
	4 -. Codeptr .-> 17
	10 -. Stack .-> 17
	0 -. Trap Locals Globals Tables Memory Extra .-> 17
	0[/"Start"\\]
	10["func_index pop_u32"]
	0 -. Stack .-> 10
	4["table_index imm_readULEB32"]
	3 -. Codeptr .-> 4
	3["sig_index imm_readULEB32"]
	0 -. Codeptr .-> 3
	14["target i_getTableFunction32"]
	4 --> 14
	6 --> 14
	10 --> 14
	6["sig m_getSignature"]
	3 --> 6
	25["eff__55 doCall"]
	6 --> 25
	22 --> 25
	4 -. Codeptr .-> 25
	18 -. Stack .-> 25
	0 -. Trap Locals Globals Tables Memory Extra .-> 25
	18["func_index pop_u64"]
	0 -. Stack .-> 18
	22["target i_getTableFunction64"]
	4 --> 22
	6 --> 22
	18 --> 22
	8["is64 m_isTable64"]
	4 --> 8
</pre>`;
window.traces["CALL_INDIRECT"]["overloadOps__raw"] += `---
config:
  layout: elk
---
graph TD
	1[\\"Finish"/]
	26 -. Codeptr Stack Trap Locals Globals Tables Memory .-> 1
	27 -. Extra .-> 1
	27["eff_st_put__69 ctlxfer.put_CALL_INDIRECT"]
	8 --> 27
	26 -. Extra .-> 27
	26{{"Sϕ Codeptr Stack Trap Locals Globals Tables Memory Extra "}}
	8 --> 26
	25 --> 26
	17 --> 26
	17["eff__61 doCall"]
	6 --> 17
	14 --> 17
	4 -. Codeptr .-> 17
	10 -. Stack .-> 17
	0 -. Trap Locals Globals Tables Memory Extra .-> 17
	0[/"Start"\\]
	10["func_index pop_u32"]
	0 -. Stack .-> 10
	4["table_index imm_readULEB32"]
	3 -. Codeptr .-> 4
	3["sig_index imm_readULEB32"]
	0 -. Codeptr .-> 3
	14["target i_getTableFunction32"]
	4 --> 14
	6 --> 14
	10 --> 14
	6["sig m_getSignature"]
	3 --> 6
	25["eff__55 doCall"]
	6 --> 25
	22 --> 25
	4 -. Codeptr .-> 25
	18 -. Stack .-> 25
	0 -. Trap Locals Globals Tables Memory Extra .-> 25
	18["func_index pop_u64"]
	0 -. Stack .-> 18
	22["target i_getTableFunction64"]
	4 --> 22
	6 --> 22
	18 --> 22
	8["is64 m_isTable64"]
	4 --> 8
`;
window.traces["CALL_INDIRECT"]["addAbstractions"] = ''
window.traces["CALL_INDIRECT"]["addAbstractions__raw"] = ''
window.traces["CALL_INDIRECT"]["addAbstractions"] += `<pre class='graph'>---
config:
  layout: elk
---
graph TD
	1[\\"Finish"/]
	26 -. Codeptr Stack Trap Locals Globals Tables Memory .-> 1
	27 -. Extra .-> 1
	27["eff_st_put__69 ctlxfer.put_CALL_INDIRECT"]
	8 --> 27
	26 -. Extra .-> 27
	26{{"Sϕ Codeptr Stack Trap Locals Globals Tables Memory Extra "}}
	8 --> 26
	25 --> 26
	17 --> 26
	17["eff__61 doCall"]
	6 --> 17
	14 --> 17
	4 -. Codeptr .-> 17
	10 -. Stack .-> 17
	0 -. Trap Locals Globals Tables Memory Extra .-> 17
	0[/"Start"\\]
	10["func_index pop_u32"]
	0 -. Stack .-> 10
	4["table_index imm_readULEB32"]
	3 -. Codeptr .-> 4
	3["sig_index imm_readULEB32"]
	0 -. Codeptr .-> 3
	14["target i_getTableFunction32"]
	4 --> 14
	6 --> 14
	10 --> 14
	6["sig m_getSignature"]
	3 --> 6
	25["eff__55 doCall"]
	6 --> 25
	22 --> 25
	4 -. Codeptr .-> 25
	18 -. Stack .-> 25
	0 -. Trap Locals Globals Tables Memory Extra .-> 25
	18["func_index pop_u64"]
	0 -. Stack .-> 18
	22["target i_getTableFunction64"]
	4 --> 22
	6 --> 22
	18 --> 22
	8["is64 m_isTable64"]
	4 --> 8
</pre>`;
window.traces["CALL_INDIRECT"]["addAbstractions__raw"] += `---
config:
  layout: elk
---
graph TD
	1[\\"Finish"/]
	26 -. Codeptr Stack Trap Locals Globals Tables Memory .-> 1
	27 -. Extra .-> 1
	27["eff_st_put__69 ctlxfer.put_CALL_INDIRECT"]
	8 --> 27
	26 -. Extra .-> 27
	26{{"Sϕ Codeptr Stack Trap Locals Globals Tables Memory Extra "}}
	8 --> 26
	25 --> 26
	17 --> 26
	17["eff__61 doCall"]
	6 --> 17
	14 --> 17
	4 -. Codeptr .-> 17
	10 -. Stack .-> 17
	0 -. Trap Locals Globals Tables Memory Extra .-> 17
	0[/"Start"\\]
	10["func_index pop_u32"]
	0 -. Stack .-> 10
	4["table_index imm_readULEB32"]
	3 -. Codeptr .-> 4
	3["sig_index imm_readULEB32"]
	0 -. Codeptr .-> 3
	14["target i_getTableFunction32"]
	4 --> 14
	6 --> 14
	10 --> 14
	6["sig m_getSignature"]
	3 --> 6
	25["eff__55 doCall"]
	6 --> 25
	22 --> 25
	4 -. Codeptr .-> 25
	18 -. Stack .-> 25
	0 -. Trap Locals Globals Tables Memory Extra .-> 25
	18["func_index pop_u64"]
	0 -. Stack .-> 18
	22["target i_getTableFunction64"]
	4 --> 22
	6 --> 22
	18 --> 22
	8["is64 m_isTable64"]
	4 --> 8
`;
window.traces["CALL_INDIRECT"]["schedulerMermaid"] = ''
window.traces["CALL_INDIRECT"]["schedulerMermaid__raw"] = ''
window.traces["CALL_INDIRECT"]["schedulerMermaid"] += `<pre class='graph'>graph TD
subgraph block_65["Block 65"]
	direction TB
	b65_27["eff_st_put__69 ctlxfer.put_CALL_INDIRECT"]
	b65_1[\\"Finish"/]
	b65_27 --> b65_1
end
phi_67 --> block_65
subgraph phi_67["Phi 67"]
	p67_26{{"Sϕ Codeptr Stack Trap Locals Globals Tables Memory Extra "}}
	p67_26{{"Sϕ Codeptr Stack Trap Locals Globals Tables Memory Extra "}}
end
block_68 --> phi_67
block_69 --> phi_67
subgraph block_68["Block 68"]
	direction TB
	b68_18["func_index pop_u64"]
	b68_22["target i_getTableFunction64"]
	b68_25["eff__55 doCall"]
	b68_18 --> b68_22
	b68_22 --> b68_25
end
branch_66 --> block_68
subgraph branch_66["Branch 66"]
	br66_8["is64 m_isTable64"]

end
block_70 --> branch_66
subgraph block_70["Block 70"]
	direction TB
	b70_0[/"Start"\\]
	b70_3["sig_index imm_readULEB32"]
	b70_6["sig m_getSignature"]
	b70_4["table_index imm_readULEB32"]
	b70_8["is64 m_isTable64"]
	b70_0 --> b70_3
	b70_3 --> b70_6
	b70_6 --> b70_4
	b70_4 --> b70_8
end
subgraph block_69["Block 69"]
	direction TB
	b69_10["func_index pop_u32"]
	b69_14["target i_getTableFunction32"]
	b69_17["eff__61 doCall"]
	b69_10 --> b69_14
	b69_14 --> b69_17
end
branch_66 --> block_69

</pre>`;
window.traces["CALL_INDIRECT"]["schedulerMermaid__raw"] += `graph TD
subgraph block_65["Block 65"]
	direction TB
	b65_27["eff_st_put__69 ctlxfer.put_CALL_INDIRECT"]
	b65_1[\\"Finish"/]
	b65_27 --> b65_1
end
phi_67 --> block_65
subgraph phi_67["Phi 67"]
	p67_26{{"Sϕ Codeptr Stack Trap Locals Globals Tables Memory Extra "}}
	p67_26{{"Sϕ Codeptr Stack Trap Locals Globals Tables Memory Extra "}}
end
block_68 --> phi_67
block_69 --> phi_67
subgraph block_68["Block 68"]
	direction TB
	b68_18["func_index pop_u64"]
	b68_22["target i_getTableFunction64"]
	b68_25["eff__55 doCall"]
	b68_18 --> b68_22
	b68_22 --> b68_25
end
branch_66 --> block_68
subgraph branch_66["Branch 66"]
	br66_8["is64 m_isTable64"]

end
block_70 --> branch_66
subgraph block_70["Block 70"]
	direction TB
	b70_0[/"Start"\\]
	b70_3["sig_index imm_readULEB32"]
	b70_6["sig m_getSignature"]
	b70_4["table_index imm_readULEB32"]
	b70_8["is64 m_isTable64"]
	b70_0 --> b70_3
	b70_3 --> b70_6
	b70_6 --> b70_4
	b70_4 --> b70_8
end
subgraph block_69["Block 69"]
	direction TB
	b69_10["func_index pop_u32"]
	b69_14["target i_getTableFunction32"]
	b69_17["eff__61 doCall"]
	b69_10 --> b69_14
	b69_14 --> b69_17
end
branch_66 --> block_69

`;
window.traces["CALL_INDIRECT"]["unLEM"] = ''
window.traces["CALL_INDIRECT"]["unLEM__raw"] = ''
window.traces["CALL_INDIRECT"]["unLEM"] += `<pre class='graph'>---
config:
  layout: elk
---
graph TD
	1[\\"Finish"/]
	26 -. Codeptr Stack Trap Locals Globals Tables Memory .-> 1
	27 -. Extra .-> 1
	27["eff_st_put__69 ctlxfer.put_CALL_INDIRECT"]
	8 --> 27
	26 -. Extra .-> 27
	26{{"Sϕ Codeptr Stack Trap Locals Globals Tables Memory Extra "}}
	8 --> 26
	25 --> 26
	17 --> 26
	17["eff__61 doCall"]
	6 --> 17
	14 --> 17
	4 -. Codeptr .-> 17
	10 -. Stack .-> 17
	0 -. Trap Locals Globals Tables Memory Extra .-> 17
	0[/"Start"\\]
	10["func_index pop_u32"]
	0 -. Stack .-> 10
	4["table_index imm_readULEB32"]
	3 -. Codeptr .-> 4
	3["sig_index imm_readULEB32"]
	0 -. Codeptr .-> 3
	14["target i_getTableFunction32"]
	4 --> 14
	6 --> 14
	10 --> 14
	6["sig m_getSignature"]
	3 --> 6
	25["eff__55 doCall"]
	6 --> 25
	22 --> 25
	4 -. Codeptr .-> 25
	18 -. Stack .-> 25
	0 -. Trap Locals Globals Tables Memory Extra .-> 25
	18["func_index pop_u64"]
	0 -. Stack .-> 18
	22["target i_getTableFunction64"]
	4 --> 22
	6 --> 22
	18 --> 22
	8["is64 m_isTable64"]
	4 --> 8
</pre>`;
window.traces["CALL_INDIRECT"]["unLEM__raw"] += `---
config:
  layout: elk
---
graph TD
	1[\\"Finish"/]
	26 -. Codeptr Stack Trap Locals Globals Tables Memory .-> 1
	27 -. Extra .-> 1
	27["eff_st_put__69 ctlxfer.put_CALL_INDIRECT"]
	8 --> 27
	26 -. Extra .-> 27
	26{{"Sϕ Codeptr Stack Trap Locals Globals Tables Memory Extra "}}
	8 --> 26
	25 --> 26
	17 --> 26
	17["eff__61 doCall"]
	6 --> 17
	14 --> 17
	4 -. Codeptr .-> 17
	10 -. Stack .-> 17
	0 -. Trap Locals Globals Tables Memory Extra .-> 17
	0[/"Start"\\]
	10["func_index pop_u32"]
	0 -. Stack .-> 10
	4["table_index imm_readULEB32"]
	3 -. Codeptr .-> 4
	3["sig_index imm_readULEB32"]
	0 -. Codeptr .-> 3
	14["target i_getTableFunction32"]
	4 --> 14
	6 --> 14
	10 --> 14
	6["sig m_getSignature"]
	3 --> 6
	25["eff__55 doCall"]
	6 --> 25
	22 --> 25
	4 -. Codeptr .-> 25
	18 -. Stack .-> 25
	0 -. Trap Locals Globals Tables Memory Extra .-> 25
	18["func_index pop_u64"]
	0 -. Stack .-> 18
	22["target i_getTableFunction64"]
	4 --> 22
	6 --> 22
	18 --> 22
	8["is64 m_isTable64"]
	4 --> 8
`;
window.traces["CALL_INDIRECT"]["unlem_schedule"] = ''
window.traces["CALL_INDIRECT"]["unlem_schedule__raw"] = ''
window.traces["CALL_INDIRECT"]["unlem_schedule"] += `<pre class=''>def sig_index = imm_readULEB32();
def sig = m_getSignature(sig_index);
def table_index = imm_readULEB32();
def is64 = m_isTable64(table_index);
if (is64) {
	def func_index = pop_u64();
	def target = i_getTableFunction64(table_index, sig, func_index);
	def eff__55 = doCall(sig, target);
} else {
	def func_index = pop_u32();
	def target = i_getTableFunction32(table_index, sig, func_index);
	def eff__61 = doCall(sig, target);
}
// phis: 
def eff_st_put__69 = ctlxfer.put_CALL_INDIRECT(is64);
</pre>`;
window.traces["CALL_INDIRECT"]["unlem_schedule__raw"] += `def sig_index = imm_readULEB32();
def sig = m_getSignature(sig_index);
def table_index = imm_readULEB32();
def is64 = m_isTable64(table_index);
if (is64) {
	def func_index = pop_u64();
	def target = i_getTableFunction64(table_index, sig, func_index);
	def eff__55 = doCall(sig, target);
} else {
	def func_index = pop_u32();
	def target = i_getTableFunction32(table_index, sig, func_index);
	def eff__61 = doCall(sig, target);
}
// phis: 
def eff_st_put__69 = ctlxfer.put_CALL_INDIRECT(is64);
`;
window.traces["CALL_INDIRECT"]["spytial_ul"] = ''
window.traces["CALL_INDIRECT"]["spytial_ul__raw"] = ''
window.traces["CALL_INDIRECT"]["spytial_ul"] += `<pre class=''>{
"atoms": [
{
"id": "node_1",
"type": "finish",
"label": "Finish"
},
{
"id": "node_26",
"type": "state_phi",
"label": "StatePhi [m_isTable64 [is64]]"
},
{
"id": "node_27",
"type": "intrinsic",
"label": "ctlxfer.put_CALL_INDIRECT [eff_st_put__69]"
},
{
"id": "node_8",
"type": "intrinsic",
"label": "m_isTable64 [is64]"
},
{
"id": "node_25",
"type": "intrinsic",
"label": "doCall [eff__55]"
},
{
"id": "node_17",
"type": "intrinsic",
"label": "doCall [eff__61]"
},
{
"id": "node_4",
"type": "intrinsic",
"label": "imm_readULEB32 [table_index]"
},
{
"id": "node_6",
"type": "intrinsic",
"label": "m_getSignature [sig]"
},
{
"id": "node_22",
"type": "intrinsic",
"label": "i_getTableFunction64 [target]"
},
{
"id": "node_18",
"type": "intrinsic",
"label": "pop_u64 [func_index]"
},
{
"id": "node_0",
"type": "start",
"label": "Start"
},
{
"id": "node_14",
"type": "intrinsic",
"label": "i_getTableFunction32 [target]"
},
{
"id": "node_10",
"type": "intrinsic",
"label": "pop_u32 [func_index]"
},
{
"id": "node_3",
"type": "intrinsic",
"label": "imm_readULEB32 [sig_index]"
}
],
"relations": [
{
"id": "uses",
"name": "Uses",
"types": ["sea_node", "sea_node"],
"tuples": [
{
"atoms": ["node_27", "node_8"],
"types": ["intrinsic", "intrinsic"]
},
{
"atoms": ["node_8", "node_4"],
"types": ["intrinsic", "intrinsic"]
},
{
"atoms": ["node_25", "node_6"],
"types": ["intrinsic", "intrinsic"]
},
{
"atoms": ["node_25", "node_22"],
"types": ["intrinsic", "intrinsic"]
},
{
"atoms": ["node_17", "node_6"],
"types": ["intrinsic", "intrinsic"]
},
{
"atoms": ["node_17", "node_14"],
"types": ["intrinsic", "intrinsic"]
},
{
"atoms": ["node_6", "node_3"],
"types": ["intrinsic", "intrinsic"]
},
{
"atoms": ["node_22", "node_4"],
"types": ["intrinsic", "intrinsic"]
},
{
"atoms": ["node_22", "node_6"],
"types": ["intrinsic", "intrinsic"]
},
{
"atoms": ["node_22", "node_18"],
"types": ["intrinsic", "intrinsic"]
},
{
"atoms": ["node_14", "node_4"],
"types": ["intrinsic", "intrinsic"]
},
{
"atoms": ["node_14", "node_6"],
"types": ["intrinsic", "intrinsic"]
},
{
"atoms": ["node_14", "node_10"],
"types": ["intrinsic", "intrinsic"]
}
]
},
{
"id": "state_uses",
"name": "StateUses",
"types": ["sea_node", "sea_node"],
"tuples": [
{
"atoms": ["node_1", "node_26"],
"types": ["finish", "state_phi"]
},
{
"atoms": ["node_1", "node_27"],
"types": ["finish", "intrinsic"]
},
{
"atoms": ["node_27", "node_26"],
"types": ["intrinsic", "state_phi"]
},
{
"atoms": ["node_25", "node_4"],
"types": ["intrinsic", "intrinsic"]
},
{
"atoms": ["node_25", "node_18"],
"types": ["intrinsic", "intrinsic"]
},
{
"atoms": ["node_25", "node_0"],
"types": ["intrinsic", "start"]
},
{
"atoms": ["node_17", "node_4"],
"types": ["intrinsic", "intrinsic"]
},
{
"atoms": ["node_17", "node_10"],
"types": ["intrinsic", "intrinsic"]
},
{
"atoms": ["node_17", "node_0"],
"types": ["intrinsic", "start"]
},
{
"atoms": ["node_4", "node_3"],
"types": ["intrinsic", "intrinsic"]
},
{
"atoms": ["node_18", "node_0"],
"types": ["intrinsic", "start"]
},
{
"atoms": ["node_10", "node_0"],
"types": ["intrinsic", "start"]
},
{
"atoms": ["node_3", "node_0"],
"types": ["intrinsic", "start"]
}
]
},
{
"id": "phi_cond",
"name": "PhiCond",
"types": ["sea_node", "sea_node"],
"tuples": [
{
"atoms": ["node_26", "node_8"],
"types": ["state_phi", "intrinsic"]
}
]
},
{
"id": "phi_true",
"name": "PhiTrue",
"types": ["sea_node", "sea_node"],
"tuples": [
{
"atoms": ["node_26", "node_25"],
"types": ["state_phi", "intrinsic"]
}
]
},
{
"id": "phi_false",
"name": "PhiFalse",
"types": ["sea_node", "sea_node"],
"tuples": [
{
"atoms": ["node_26", "node_17"],
"types": ["state_phi", "intrinsic"]
}
]
}
]
}</pre>`;
window.traces["CALL_INDIRECT"]["spytial_ul__raw"] += `{
"atoms": [
{
"id": "node_1",
"type": "finish",
"label": "Finish"
},
{
"id": "node_26",
"type": "state_phi",
"label": "StatePhi [m_isTable64 [is64]]"
},
{
"id": "node_27",
"type": "intrinsic",
"label": "ctlxfer.put_CALL_INDIRECT [eff_st_put__69]"
},
{
"id": "node_8",
"type": "intrinsic",
"label": "m_isTable64 [is64]"
},
{
"id": "node_25",
"type": "intrinsic",
"label": "doCall [eff__55]"
},
{
"id": "node_17",
"type": "intrinsic",
"label": "doCall [eff__61]"
},
{
"id": "node_4",
"type": "intrinsic",
"label": "imm_readULEB32 [table_index]"
},
{
"id": "node_6",
"type": "intrinsic",
"label": "m_getSignature [sig]"
},
{
"id": "node_22",
"type": "intrinsic",
"label": "i_getTableFunction64 [target]"
},
{
"id": "node_18",
"type": "intrinsic",
"label": "pop_u64 [func_index]"
},
{
"id": "node_0",
"type": "start",
"label": "Start"
},
{
"id": "node_14",
"type": "intrinsic",
"label": "i_getTableFunction32 [target]"
},
{
"id": "node_10",
"type": "intrinsic",
"label": "pop_u32 [func_index]"
},
{
"id": "node_3",
"type": "intrinsic",
"label": "imm_readULEB32 [sig_index]"
}
],
"relations": [
{
"id": "uses",
"name": "Uses",
"types": ["sea_node", "sea_node"],
"tuples": [
{
"atoms": ["node_27", "node_8"],
"types": ["intrinsic", "intrinsic"]
},
{
"atoms": ["node_8", "node_4"],
"types": ["intrinsic", "intrinsic"]
},
{
"atoms": ["node_25", "node_6"],
"types": ["intrinsic", "intrinsic"]
},
{
"atoms": ["node_25", "node_22"],
"types": ["intrinsic", "intrinsic"]
},
{
"atoms": ["node_17", "node_6"],
"types": ["intrinsic", "intrinsic"]
},
{
"atoms": ["node_17", "node_14"],
"types": ["intrinsic", "intrinsic"]
},
{
"atoms": ["node_6", "node_3"],
"types": ["intrinsic", "intrinsic"]
},
{
"atoms": ["node_22", "node_4"],
"types": ["intrinsic", "intrinsic"]
},
{
"atoms": ["node_22", "node_6"],
"types": ["intrinsic", "intrinsic"]
},
{
"atoms": ["node_22", "node_18"],
"types": ["intrinsic", "intrinsic"]
},
{
"atoms": ["node_14", "node_4"],
"types": ["intrinsic", "intrinsic"]
},
{
"atoms": ["node_14", "node_6"],
"types": ["intrinsic", "intrinsic"]
},
{
"atoms": ["node_14", "node_10"],
"types": ["intrinsic", "intrinsic"]
}
]
},
{
"id": "state_uses",
"name": "StateUses",
"types": ["sea_node", "sea_node"],
"tuples": [
{
"atoms": ["node_1", "node_26"],
"types": ["finish", "state_phi"]
},
{
"atoms": ["node_1", "node_27"],
"types": ["finish", "intrinsic"]
},
{
"atoms": ["node_27", "node_26"],
"types": ["intrinsic", "state_phi"]
},
{
"atoms": ["node_25", "node_4"],
"types": ["intrinsic", "intrinsic"]
},
{
"atoms": ["node_25", "node_18"],
"types": ["intrinsic", "intrinsic"]
},
{
"atoms": ["node_25", "node_0"],
"types": ["intrinsic", "start"]
},
{
"atoms": ["node_17", "node_4"],
"types": ["intrinsic", "intrinsic"]
},
{
"atoms": ["node_17", "node_10"],
"types": ["intrinsic", "intrinsic"]
},
{
"atoms": ["node_17", "node_0"],
"types": ["intrinsic", "start"]
},
{
"atoms": ["node_4", "node_3"],
"types": ["intrinsic", "intrinsic"]
},
{
"atoms": ["node_18", "node_0"],
"types": ["intrinsic", "start"]
},
{
"atoms": ["node_10", "node_0"],
"types": ["intrinsic", "start"]
},
{
"atoms": ["node_3", "node_0"],
"types": ["intrinsic", "start"]
}
]
},
{
"id": "phi_cond",
"name": "PhiCond",
"types": ["sea_node", "sea_node"],
"tuples": [
{
"atoms": ["node_26", "node_8"],
"types": ["state_phi", "intrinsic"]
}
]
},
{
"id": "phi_true",
"name": "PhiTrue",
"types": ["sea_node", "sea_node"],
"tuples": [
{
"atoms": ["node_26", "node_25"],
"types": ["state_phi", "intrinsic"]
}
]
},
{
"id": "phi_false",
"name": "PhiFalse",
"types": ["sea_node", "sea_node"],
"tuples": [
{
"atoms": ["node_26", "node_17"],
"types": ["state_phi", "intrinsic"]
}
]
}
]
}`;
window.traces["CALL_INDIRECT"]["unlem_scheduler"] = ''
window.traces["CALL_INDIRECT"]["unlem_scheduler__raw"] = ''
window.traces["CALL_INDIRECT"]["unlem_scheduler"] += `<pre class='graph'>graph TD
subgraph block_71["Block 71"]
	direction TB
	b71_27["eff_st_put__69 ctlxfer.put_CALL_INDIRECT"]
	b71_1[\\"Finish"/]
	b71_27 --> b71_1
end
phi_73 --> block_71
subgraph phi_73["Phi 73"]
	p73_26{{"Sϕ Codeptr Stack Trap Locals Globals Tables Memory Extra "}}
	p73_26{{"Sϕ Codeptr Stack Trap Locals Globals Tables Memory Extra "}}
end
block_74 --> phi_73
block_75 --> phi_73
subgraph block_74["Block 74"]
	direction TB
	b74_18["func_index pop_u64"]
	b74_22["target i_getTableFunction64"]
	b74_25["eff__55 doCall"]
	b74_18 --> b74_22
	b74_22 --> b74_25
end
branch_72 --> block_74
subgraph branch_72["Branch 72"]
	br72_8["is64 m_isTable64"]

end
block_76 --> branch_72
subgraph block_76["Block 76"]
	direction TB
	b76_0[/"Start"\\]
	b76_3["sig_index imm_readULEB32"]
	b76_6["sig m_getSignature"]
	b76_4["table_index imm_readULEB32"]
	b76_8["is64 m_isTable64"]
	b76_0 --> b76_3
	b76_3 --> b76_6
	b76_6 --> b76_4
	b76_4 --> b76_8
end
subgraph block_75["Block 75"]
	direction TB
	b75_10["func_index pop_u32"]
	b75_14["target i_getTableFunction32"]
	b75_17["eff__61 doCall"]
	b75_10 --> b75_14
	b75_14 --> b75_17
end
branch_72 --> block_75

</pre>`;
window.traces["CALL_INDIRECT"]["unlem_scheduler__raw"] += `graph TD
subgraph block_71["Block 71"]
	direction TB
	b71_27["eff_st_put__69 ctlxfer.put_CALL_INDIRECT"]
	b71_1[\\"Finish"/]
	b71_27 --> b71_1
end
phi_73 --> block_71
subgraph phi_73["Phi 73"]
	p73_26{{"Sϕ Codeptr Stack Trap Locals Globals Tables Memory Extra "}}
	p73_26{{"Sϕ Codeptr Stack Trap Locals Globals Tables Memory Extra "}}
end
block_74 --> phi_73
block_75 --> phi_73
subgraph block_74["Block 74"]
	direction TB
	b74_18["func_index pop_u64"]
	b74_22["target i_getTableFunction64"]
	b74_25["eff__55 doCall"]
	b74_18 --> b74_22
	b74_22 --> b74_25
end
branch_72 --> block_74
subgraph branch_72["Branch 72"]
	br72_8["is64 m_isTable64"]

end
block_76 --> branch_72
subgraph block_76["Block 76"]
	direction TB
	b76_0[/"Start"\\]
	b76_3["sig_index imm_readULEB32"]
	b76_6["sig m_getSignature"]
	b76_4["table_index imm_readULEB32"]
	b76_8["is64 m_isTable64"]
	b76_0 --> b76_3
	b76_3 --> b76_6
	b76_6 --> b76_4
	b76_4 --> b76_8
end
subgraph block_75["Block 75"]
	direction TB
	b75_10["func_index pop_u32"]
	b75_14["target i_getTableFunction32"]
	b75_17["eff__61 doCall"]
	b75_10 --> b75_14
	b75_14 --> b75_17
end
branch_72 --> block_75

`;
window.traces["CALL_INDIRECT"]["unlem_pretty"] = ''
window.traces["CALL_INDIRECT"]["unlem_pretty__raw"] = ''
window.traces["CALL_INDIRECT"]["unlem_pretty"] += `<pre class=''>def sig_index = imm_readULEB32();
def sig = m_getSignature(sig_index);
def table_index = imm_readULEB32();
def is64 = m_isTable64(table_index);
if (is64) {
	def func_index = pop_u64();
	def target = i_getTableFunction64(table_index, sig, func_index);
	doCall(sig, target);
} else {
	def func_index = pop_u32();
	def target = i_getTableFunction32(table_index, sig, func_index);
	doCall(sig, target);
}
ctlxfer.put_CALL_INDIRECT(is64);
</pre>`;
window.traces["CALL_INDIRECT"]["unlem_pretty__raw"] += `def sig_index = imm_readULEB32();
def sig = m_getSignature(sig_index);
def table_index = imm_readULEB32();
def is64 = m_isTable64(table_index);
if (is64) {
	def func_index = pop_u64();
	def target = i_getTableFunction64(table_index, sig, func_index);
	doCall(sig, target);
} else {
	def func_index = pop_u32();
	def target = i_getTableFunction32(table_index, sig, func_index);
	doCall(sig, target);
}
ctlxfer.put_CALL_INDIRECT(is64);
`;
window.traces["CALL_INDIRECT"]["constUnLEM"] = ''
window.traces["CALL_INDIRECT"]["constUnLEM__raw"] = ''
window.traces["CALL_INDIRECT"]["constUnLEM"] += `<pre class='graph'>---
config:
  layout: elk
---
graph TD
	1[\\"Finish"/]
	26 -. Codeptr Stack Trap Locals Globals Tables Memory .-> 1
	27 -. Extra .-> 1
	27["eff_st_put__69 ctlxfer.put_CALL_INDIRECT"]
	8 --> 27
	26 -. Extra .-> 27
	26{{"Sϕ Codeptr Stack Trap Locals Globals Tables Memory Extra "}}
	8 --> 26
	25 --> 26
	17 --> 26
	17["eff__61 doCall"]
	6 --> 17
	14 --> 17
	4 -. Codeptr .-> 17
	10 -. Stack .-> 17
	0 -. Trap Locals Globals Tables Memory Extra .-> 17
	0[/"Start"\\]
	10["func_index pop_u32"]
	0 -. Stack .-> 10
	4["table_index imm_readULEB32"]
	3 -. Codeptr .-> 4
	3["sig_index imm_readULEB32"]
	0 -. Codeptr .-> 3
	14["target i_getTableFunction32"]
	4 --> 14
	6 --> 14
	10 --> 14
	6["sig m_getSignature"]
	3 --> 6
	25["eff__55 doCall"]
	6 --> 25
	22 --> 25
	4 -. Codeptr .-> 25
	18 -. Stack .-> 25
	0 -. Trap Locals Globals Tables Memory Extra .-> 25
	18["func_index pop_u64"]
	0 -. Stack .-> 18
	22["target i_getTableFunction64"]
	4 --> 22
	6 --> 22
	18 --> 22
	8["is64 m_isTable64"]
	4 --> 8
</pre>`;
window.traces["CALL_INDIRECT"]["constUnLEM__raw"] += `---
config:
  layout: elk
---
graph TD
	1[\\"Finish"/]
	26 -. Codeptr Stack Trap Locals Globals Tables Memory .-> 1
	27 -. Extra .-> 1
	27["eff_st_put__69 ctlxfer.put_CALL_INDIRECT"]
	8 --> 27
	26 -. Extra .-> 27
	26{{"Sϕ Codeptr Stack Trap Locals Globals Tables Memory Extra "}}
	8 --> 26
	25 --> 26
	17 --> 26
	17["eff__61 doCall"]
	6 --> 17
	14 --> 17
	4 -. Codeptr .-> 17
	10 -. Stack .-> 17
	0 -. Trap Locals Globals Tables Memory Extra .-> 17
	0[/"Start"\\]
	10["func_index pop_u32"]
	0 -. Stack .-> 10
	4["table_index imm_readULEB32"]
	3 -. Codeptr .-> 4
	3["sig_index imm_readULEB32"]
	0 -. Codeptr .-> 3
	14["target i_getTableFunction32"]
	4 --> 14
	6 --> 14
	10 --> 14
	6["sig m_getSignature"]
	3 --> 6
	25["eff__55 doCall"]
	6 --> 25
	22 --> 25
	4 -. Codeptr .-> 25
	18 -. Stack .-> 25
	0 -. Trap Locals Globals Tables Memory Extra .-> 25
	18["func_index pop_u64"]
	0 -. Stack .-> 18
	22["target i_getTableFunction64"]
	4 --> 22
	6 --> 22
	18 --> 22
	8["is64 m_isTable64"]
	4 --> 8
`;
window.traces["CALL_INDIRECT"]["chooseMerge"] = ''
window.traces["CALL_INDIRECT"]["chooseMerge__raw"] = ''
window.traces["CALL_INDIRECT"]["chooseMerge"] += `<pre class='graph'>---
config:
  layout: elk
---
graph TD
	1[\\"Finish"/]
	26 -. Codeptr Stack Trap Locals Globals Tables Memory .-> 1
	27 -. Extra .-> 1
	27["eff_st_put__69 ctlxfer.put_CALL_INDIRECT"]
	8 --> 27
	26 -. Extra .-> 27
	26{{"Sϕ Codeptr Stack Trap Locals Globals Tables Memory Extra "}}
	8 --> 26
	25 --> 26
	17 --> 26
	17["eff__61 doCall"]
	6 --> 17
	14 --> 17
	4 -. Codeptr .-> 17
	10 -. Stack .-> 17
	0 -. Trap Locals Globals Tables Memory Extra .-> 17
	0[/"Start"\\]
	10["func_index pop_u32"]
	0 -. Stack .-> 10
	4["table_index imm_readULEB32"]
	3 -. Codeptr .-> 4
	3["sig_index imm_readULEB32"]
	0 -. Codeptr .-> 3
	14["target i_getTableFunction32"]
	4 --> 14
	6 --> 14
	10 --> 14
	6["sig m_getSignature"]
	3 --> 6
	25["eff__55 doCall"]
	6 --> 25
	22 --> 25
	4 -. Codeptr .-> 25
	18 -. Stack .-> 25
	0 -. Trap Locals Globals Tables Memory Extra .-> 25
	18["func_index pop_u64"]
	0 -. Stack .-> 18
	22["target i_getTableFunction64"]
	4 --> 22
	6 --> 22
	18 --> 22
	8["is64 m_isTable64"]
	4 --> 8
</pre>`;
window.traces["CALL_INDIRECT"]["chooseMerge__raw"] += `---
config:
  layout: elk
---
graph TD
	1[\\"Finish"/]
	26 -. Codeptr Stack Trap Locals Globals Tables Memory .-> 1
	27 -. Extra .-> 1
	27["eff_st_put__69 ctlxfer.put_CALL_INDIRECT"]
	8 --> 27
	26 -. Extra .-> 27
	26{{"Sϕ Codeptr Stack Trap Locals Globals Tables Memory Extra "}}
	8 --> 26
	25 --> 26
	17 --> 26
	17["eff__61 doCall"]
	6 --> 17
	14 --> 17
	4 -. Codeptr .-> 17
	10 -. Stack .-> 17
	0 -. Trap Locals Globals Tables Memory Extra .-> 17
	0[/"Start"\\]
	10["func_index pop_u32"]
	0 -. Stack .-> 10
	4["table_index imm_readULEB32"]
	3 -. Codeptr .-> 4
	3["sig_index imm_readULEB32"]
	0 -. Codeptr .-> 3
	14["target i_getTableFunction32"]
	4 --> 14
	6 --> 14
	10 --> 14
	6["sig m_getSignature"]
	3 --> 6
	25["eff__55 doCall"]
	6 --> 25
	22 --> 25
	4 -. Codeptr .-> 25
	18 -. Stack .-> 25
	0 -. Trap Locals Globals Tables Memory Extra .-> 25
	18["func_index pop_u64"]
	0 -. Stack .-> 18
	22["target i_getTableFunction64"]
	4 --> 22
	6 --> 22
	18 --> 22
	8["is64 m_isTable64"]
	4 --> 8
`;
window.traces["CALL_INDIRECT"]["scheduled"] = ''
window.traces["CALL_INDIRECT"]["scheduled__raw"] = ''
window.traces["CALL_INDIRECT"]["scheduled"] += `<pre class=''>def sig_index = imm_readULEB32();
def sig = m_getSignature(sig_index);
def table_index = imm_readULEB32();
def is64 = m_isTable64(table_index);
if (is64) {
	def func_index = pop_u64();
	def target = i_getTableFunction64(table_index, sig, func_index);
	def eff__55 = doCall(sig, target);
} else {
	def func_index = pop_u32();
	def target = i_getTableFunction32(table_index, sig, func_index);
	def eff__61 = doCall(sig, target);
}
// phis: 
def eff_st_put__69 = ctlxfer.put_CALL_INDIRECT(is64);
</pre>`;
window.traces["CALL_INDIRECT"]["scheduled__raw"] += `def sig_index = imm_readULEB32();
def sig = m_getSignature(sig_index);
def table_index = imm_readULEB32();
def is64 = m_isTable64(table_index);
if (is64) {
	def func_index = pop_u64();
	def target = i_getTableFunction64(table_index, sig, func_index);
	def eff__55 = doCall(sig, target);
} else {
	def func_index = pop_u32();
	def target = i_getTableFunction32(table_index, sig, func_index);
	def eff__61 = doCall(sig, target);
}
// phis: 
def eff_st_put__69 = ctlxfer.put_CALL_INDIRECT(is64);
`;
window.traces["CALL_INDIRECT"]["pretty"] = ''
window.traces["CALL_INDIRECT"]["pretty__raw"] = ''
window.traces["CALL_INDIRECT"]["pretty"] += `<pre class=''>def sig_index = imm_readULEB32();
def sig = m_getSignature(sig_index);
def table_index = imm_readULEB32();
def is64 = m_isTable64(table_index);
if (is64) {
	def func_index = pop_u64();
	def target = i_getTableFunction64(table_index, sig, func_index);
	doCall(sig, target);
} else {
	def func_index = pop_u32();
	def target = i_getTableFunction32(table_index, sig, func_index);
	doCall(sig, target);
}
ctlxfer.put_CALL_INDIRECT(is64);
</pre>`;
window.traces["CALL_INDIRECT"]["pretty__raw"] += `def sig_index = imm_readULEB32();
def sig = m_getSignature(sig_index);
def table_index = imm_readULEB32();
def is64 = m_isTable64(table_index);
if (is64) {
	def func_index = pop_u64();
	def target = i_getTableFunction64(table_index, sig, func_index);
	doCall(sig, target);
} else {
	def func_index = pop_u32();
	def target = i_getTableFunction32(table_index, sig, func_index);
	doCall(sig, target);
}
ctlxfer.put_CALL_INDIRECT(is64);
`;
window.traces["RETURN_CALL"] = {}
window.traces["RETURN_CALL"]["parsed"] = ''
window.traces["RETURN_CALL"]["parsed__raw"] = ''
window.traces["RETURN_CALL"]["parsed"] += `<pre class=''>def index = imm_readULEB32();
def arg__74 = (index);
def sig = m_getFuncSignature(arg__74);
def arg__73 = (index);
def target = i_getFunction(arg__73);
def arg__72 = (target);
def arg__71 = (sig);
def eff__70 = doReturnCall(arg__71, arg__72);
</pre>`;
window.traces["RETURN_CALL"]["parsed__raw"] += `def index = imm_readULEB32();
def arg__74 = (index);
def sig = m_getFuncSignature(arg__74);
def arg__73 = (index);
def target = i_getFunction(arg__73);
def arg__72 = (target);
def arg__71 = (sig);
def eff__70 = doReturnCall(arg__71, arg__72);
`;
window.traces["RETURN_CALL"]["raw"] = ''
window.traces["RETURN_CALL"]["raw__raw"] = ''
window.traces["RETURN_CALL"]["raw"] += `<pre class='graph'>---
config:
  layout: elk
---
graph TD
	1[\\"Finish"/]
	10 -. Codeptr Stack Trap Locals Globals Tables Memory Extra .-> 1
	10["eff__70 doReturnCall"]
	5 --> 10
	7 --> 10
	3 -. Codeptr .-> 10
	0 -. Stack Trap Locals Globals Tables Memory Extra .-> 10
	0[/"Start"\\]
	3["index imm_readULEB32"]
	0 -. Codeptr .-> 3
	7["target i_getFunction"]
	3 --> 7
	5["sig m_getFuncSignature"]
	3 --> 5
</pre>`;
window.traces["RETURN_CALL"]["raw__raw"] += `---
config:
  layout: elk
---
graph TD
	1[\\"Finish"/]
	10 -. Codeptr Stack Trap Locals Globals Tables Memory Extra .-> 1
	10["eff__70 doReturnCall"]
	5 --> 10
	7 --> 10
	3 -. Codeptr .-> 10
	0 -. Stack Trap Locals Globals Tables Memory Extra .-> 10
	0[/"Start"\\]
	3["index imm_readULEB32"]
	0 -. Codeptr .-> 3
	7["target i_getFunction"]
	3 --> 7
	5["sig m_getFuncSignature"]
	3 --> 5
`;
window.traces["RETURN_CALL"]["spytial"] = ''
window.traces["RETURN_CALL"]["spytial__raw"] = ''
window.traces["RETURN_CALL"]["spytial"] += `<pre class=''>{
"atoms": [
{
"id": "node_1",
"type": "finish",
"label": "Finish"
},
{
"id": "node_10",
"type": "intrinsic",
"label": "doReturnCall [eff__70]"
},
{
"id": "node_5",
"type": "intrinsic",
"label": "m_getFuncSignature [sig]"
},
{
"id": "node_7",
"type": "intrinsic",
"label": "i_getFunction [target]"
},
{
"id": "node_3",
"type": "intrinsic",
"label": "imm_readULEB32 [index]"
},
{
"id": "node_0",
"type": "start",
"label": "Start"
}
],
"relations": [
{
"id": "uses",
"name": "Uses",
"types": ["sea_node", "sea_node"],
"tuples": [
{
"atoms": ["node_10", "node_5"],
"types": ["intrinsic", "intrinsic"]
},
{
"atoms": ["node_10", "node_7"],
"types": ["intrinsic", "intrinsic"]
},
{
"atoms": ["node_5", "node_3"],
"types": ["intrinsic", "intrinsic"]
},
{
"atoms": ["node_7", "node_3"],
"types": ["intrinsic", "intrinsic"]
}
]
},
{
"id": "state_uses",
"name": "StateUses",
"types": ["sea_node", "sea_node"],
"tuples": [
{
"atoms": ["node_1", "node_10"],
"types": ["finish", "intrinsic"]
},
{
"atoms": ["node_10", "node_3"],
"types": ["intrinsic", "intrinsic"]
},
{
"atoms": ["node_10", "node_0"],
"types": ["intrinsic", "start"]
},
{
"atoms": ["node_3", "node_0"],
"types": ["intrinsic", "start"]
}
]
}
]
}</pre>`;
window.traces["RETURN_CALL"]["spytial__raw"] += `{
"atoms": [
{
"id": "node_1",
"type": "finish",
"label": "Finish"
},
{
"id": "node_10",
"type": "intrinsic",
"label": "doReturnCall [eff__70]"
},
{
"id": "node_5",
"type": "intrinsic",
"label": "m_getFuncSignature [sig]"
},
{
"id": "node_7",
"type": "intrinsic",
"label": "i_getFunction [target]"
},
{
"id": "node_3",
"type": "intrinsic",
"label": "imm_readULEB32 [index]"
},
{
"id": "node_0",
"type": "start",
"label": "Start"
}
],
"relations": [
{
"id": "uses",
"name": "Uses",
"types": ["sea_node", "sea_node"],
"tuples": [
{
"atoms": ["node_10", "node_5"],
"types": ["intrinsic", "intrinsic"]
},
{
"atoms": ["node_10", "node_7"],
"types": ["intrinsic", "intrinsic"]
},
{
"atoms": ["node_5", "node_3"],
"types": ["intrinsic", "intrinsic"]
},
{
"atoms": ["node_7", "node_3"],
"types": ["intrinsic", "intrinsic"]
}
]
},
{
"id": "state_uses",
"name": "StateUses",
"types": ["sea_node", "sea_node"],
"tuples": [
{
"atoms": ["node_1", "node_10"],
"types": ["finish", "intrinsic"]
},
{
"atoms": ["node_10", "node_3"],
"types": ["intrinsic", "intrinsic"]
},
{
"atoms": ["node_10", "node_0"],
"types": ["intrinsic", "start"]
},
{
"atoms": ["node_3", "node_0"],
"types": ["intrinsic", "start"]
}
]
}
]
}`;
window.traces["RETURN_CALL"]["overloadOps"] = ''
window.traces["RETURN_CALL"]["overloadOps__raw"] = ''
window.traces["RETURN_CALL"]["overloadOps"] += `<pre class='graph'>---
config:
  layout: elk
---
graph TD
	1[\\"Finish"/]
	10 -. Codeptr Stack Trap Locals Globals Tables Memory Extra .-> 1
	10["eff__70 doReturnCall"]
	5 --> 10
	7 --> 10
	3 -. Codeptr .-> 10
	0 -. Stack Trap Locals Globals Tables Memory Extra .-> 10
	0[/"Start"\\]
	3["index imm_readULEB32"]
	0 -. Codeptr .-> 3
	7["target i_getFunction"]
	3 --> 7
	5["sig m_getFuncSignature"]
	3 --> 5
</pre>`;
window.traces["RETURN_CALL"]["overloadOps__raw"] += `---
config:
  layout: elk
---
graph TD
	1[\\"Finish"/]
	10 -. Codeptr Stack Trap Locals Globals Tables Memory Extra .-> 1
	10["eff__70 doReturnCall"]
	5 --> 10
	7 --> 10
	3 -. Codeptr .-> 10
	0 -. Stack Trap Locals Globals Tables Memory Extra .-> 10
	0[/"Start"\\]
	3["index imm_readULEB32"]
	0 -. Codeptr .-> 3
	7["target i_getFunction"]
	3 --> 7
	5["sig m_getFuncSignature"]
	3 --> 5
`;
window.traces["RETURN_CALL"]["addAbstractions"] = ''
window.traces["RETURN_CALL"]["addAbstractions__raw"] = ''
window.traces["RETURN_CALL"]["addAbstractions"] += `<pre class='graph'>---
config:
  layout: elk
---
graph TD
	1[\\"Finish"/]
	10 -. Codeptr Stack Trap Locals Globals Tables Memory Extra .-> 1
	10["eff__70 doReturnCall"]
	5 --> 10
	7 --> 10
	3 -. Codeptr .-> 10
	0 -. Stack Trap Locals Globals Tables Memory Extra .-> 10
	0[/"Start"\\]
	3["index imm_readULEB32"]
	0 -. Codeptr .-> 3
	7["target i_getFunction"]
	3 --> 7
	5["sig m_getFuncSignature"]
	3 --> 5
</pre>`;
window.traces["RETURN_CALL"]["addAbstractions__raw"] += `---
config:
  layout: elk
---
graph TD
	1[\\"Finish"/]
	10 -. Codeptr Stack Trap Locals Globals Tables Memory Extra .-> 1
	10["eff__70 doReturnCall"]
	5 --> 10
	7 --> 10
	3 -. Codeptr .-> 10
	0 -. Stack Trap Locals Globals Tables Memory Extra .-> 10
	0[/"Start"\\]
	3["index imm_readULEB32"]
	0 -. Codeptr .-> 3
	7["target i_getFunction"]
	3 --> 7
	5["sig m_getFuncSignature"]
	3 --> 5
`;
window.traces["RETURN_CALL"]["schedulerMermaid"] = ''
window.traces["RETURN_CALL"]["schedulerMermaid__raw"] = ''
window.traces["RETURN_CALL"]["schedulerMermaid"] += `<pre class='graph'>graph TD
subgraph block_77["Block 77"]
	direction TB
	b77_0[/"Start"\\]
	b77_3["index imm_readULEB32"]
	b77_7["target i_getFunction"]
	b77_5["sig m_getFuncSignature"]
	b77_10["eff__70 doReturnCall"]
	b77_1[\\"Finish"/]
	b77_0 --> b77_3
	b77_3 --> b77_7
	b77_7 --> b77_5
	b77_5 --> b77_10
	b77_10 --> b77_1
end

</pre>`;
window.traces["RETURN_CALL"]["schedulerMermaid__raw"] += `graph TD
subgraph block_77["Block 77"]
	direction TB
	b77_0[/"Start"\\]
	b77_3["index imm_readULEB32"]
	b77_7["target i_getFunction"]
	b77_5["sig m_getFuncSignature"]
	b77_10["eff__70 doReturnCall"]
	b77_1[\\"Finish"/]
	b77_0 --> b77_3
	b77_3 --> b77_7
	b77_7 --> b77_5
	b77_5 --> b77_10
	b77_10 --> b77_1
end

`;
window.traces["RETURN_CALL"]["unLEM"] = ''
window.traces["RETURN_CALL"]["unLEM__raw"] = ''
window.traces["RETURN_CALL"]["unLEM"] += `<pre class='graph'>---
config:
  layout: elk
---
graph TD
	1[\\"Finish"/]
	10 -. Codeptr Stack Trap Locals Globals Tables Memory Extra .-> 1
	10["eff__70 doReturnCall"]
	5 --> 10
	7 --> 10
	3 -. Codeptr .-> 10
	0 -. Stack Trap Locals Globals Tables Memory Extra .-> 10
	0[/"Start"\\]
	3["index imm_readULEB32"]
	0 -. Codeptr .-> 3
	7["target i_getFunction"]
	3 --> 7
	5["sig m_getFuncSignature"]
	3 --> 5
</pre>`;
window.traces["RETURN_CALL"]["unLEM__raw"] += `---
config:
  layout: elk
---
graph TD
	1[\\"Finish"/]
	10 -. Codeptr Stack Trap Locals Globals Tables Memory Extra .-> 1
	10["eff__70 doReturnCall"]
	5 --> 10
	7 --> 10
	3 -. Codeptr .-> 10
	0 -. Stack Trap Locals Globals Tables Memory Extra .-> 10
	0[/"Start"\\]
	3["index imm_readULEB32"]
	0 -. Codeptr .-> 3
	7["target i_getFunction"]
	3 --> 7
	5["sig m_getFuncSignature"]
	3 --> 5
`;
window.traces["RETURN_CALL"]["unlem_schedule"] = ''
window.traces["RETURN_CALL"]["unlem_schedule__raw"] = ''
window.traces["RETURN_CALL"]["unlem_schedule"] += `<pre class=''>def index = imm_readULEB32();
def sig = m_getFuncSignature(index);
def target = i_getFunction(index);
def eff__70 = doReturnCall(sig, target);
</pre>`;
window.traces["RETURN_CALL"]["unlem_schedule__raw"] += `def index = imm_readULEB32();
def sig = m_getFuncSignature(index);
def target = i_getFunction(index);
def eff__70 = doReturnCall(sig, target);
`;
window.traces["RETURN_CALL"]["spytial_ul"] = ''
window.traces["RETURN_CALL"]["spytial_ul__raw"] = ''
window.traces["RETURN_CALL"]["spytial_ul"] += `<pre class=''>{
"atoms": [
{
"id": "node_1",
"type": "finish",
"label": "Finish"
},
{
"id": "node_10",
"type": "intrinsic",
"label": "doReturnCall [eff__70]"
},
{
"id": "node_5",
"type": "intrinsic",
"label": "m_getFuncSignature [sig]"
},
{
"id": "node_7",
"type": "intrinsic",
"label": "i_getFunction [target]"
},
{
"id": "node_3",
"type": "intrinsic",
"label": "imm_readULEB32 [index]"
},
{
"id": "node_0",
"type": "start",
"label": "Start"
}
],
"relations": [
{
"id": "uses",
"name": "Uses",
"types": ["sea_node", "sea_node"],
"tuples": [
{
"atoms": ["node_10", "node_5"],
"types": ["intrinsic", "intrinsic"]
},
{
"atoms": ["node_10", "node_7"],
"types": ["intrinsic", "intrinsic"]
},
{
"atoms": ["node_5", "node_3"],
"types": ["intrinsic", "intrinsic"]
},
{
"atoms": ["node_7", "node_3"],
"types": ["intrinsic", "intrinsic"]
}
]
},
{
"id": "state_uses",
"name": "StateUses",
"types": ["sea_node", "sea_node"],
"tuples": [
{
"atoms": ["node_1", "node_10"],
"types": ["finish", "intrinsic"]
},
{
"atoms": ["node_10", "node_3"],
"types": ["intrinsic", "intrinsic"]
},
{
"atoms": ["node_10", "node_0"],
"types": ["intrinsic", "start"]
},
{
"atoms": ["node_3", "node_0"],
"types": ["intrinsic", "start"]
}
]
}
]
}</pre>`;
window.traces["RETURN_CALL"]["spytial_ul__raw"] += `{
"atoms": [
{
"id": "node_1",
"type": "finish",
"label": "Finish"
},
{
"id": "node_10",
"type": "intrinsic",
"label": "doReturnCall [eff__70]"
},
{
"id": "node_5",
"type": "intrinsic",
"label": "m_getFuncSignature [sig]"
},
{
"id": "node_7",
"type": "intrinsic",
"label": "i_getFunction [target]"
},
{
"id": "node_3",
"type": "intrinsic",
"label": "imm_readULEB32 [index]"
},
{
"id": "node_0",
"type": "start",
"label": "Start"
}
],
"relations": [
{
"id": "uses",
"name": "Uses",
"types": ["sea_node", "sea_node"],
"tuples": [
{
"atoms": ["node_10", "node_5"],
"types": ["intrinsic", "intrinsic"]
},
{
"atoms": ["node_10", "node_7"],
"types": ["intrinsic", "intrinsic"]
},
{
"atoms": ["node_5", "node_3"],
"types": ["intrinsic", "intrinsic"]
},
{
"atoms": ["node_7", "node_3"],
"types": ["intrinsic", "intrinsic"]
}
]
},
{
"id": "state_uses",
"name": "StateUses",
"types": ["sea_node", "sea_node"],
"tuples": [
{
"atoms": ["node_1", "node_10"],
"types": ["finish", "intrinsic"]
},
{
"atoms": ["node_10", "node_3"],
"types": ["intrinsic", "intrinsic"]
},
{
"atoms": ["node_10", "node_0"],
"types": ["intrinsic", "start"]
},
{
"atoms": ["node_3", "node_0"],
"types": ["intrinsic", "start"]
}
]
}
]
}`;
window.traces["RETURN_CALL"]["unlem_scheduler"] = ''
window.traces["RETURN_CALL"]["unlem_scheduler__raw"] = ''
window.traces["RETURN_CALL"]["unlem_scheduler"] += `<pre class='graph'>graph TD
subgraph block_78["Block 78"]
	direction TB
	b78_0[/"Start"\\]
	b78_3["index imm_readULEB32"]
	b78_7["target i_getFunction"]
	b78_5["sig m_getFuncSignature"]
	b78_10["eff__70 doReturnCall"]
	b78_1[\\"Finish"/]
	b78_0 --> b78_3
	b78_3 --> b78_7
	b78_7 --> b78_5
	b78_5 --> b78_10
	b78_10 --> b78_1
end

</pre>`;
window.traces["RETURN_CALL"]["unlem_scheduler__raw"] += `graph TD
subgraph block_78["Block 78"]
	direction TB
	b78_0[/"Start"\\]
	b78_3["index imm_readULEB32"]
	b78_7["target i_getFunction"]
	b78_5["sig m_getFuncSignature"]
	b78_10["eff__70 doReturnCall"]
	b78_1[\\"Finish"/]
	b78_0 --> b78_3
	b78_3 --> b78_7
	b78_7 --> b78_5
	b78_5 --> b78_10
	b78_10 --> b78_1
end

`;
window.traces["RETURN_CALL"]["unlem_pretty"] = ''
window.traces["RETURN_CALL"]["unlem_pretty__raw"] = ''
window.traces["RETURN_CALL"]["unlem_pretty"] += `<pre class=''>def index = imm_readULEB32();
def sig = m_getFuncSignature(index);
def target = i_getFunction(index);
doReturnCall(sig, target);
</pre>`;
window.traces["RETURN_CALL"]["unlem_pretty__raw"] += `def index = imm_readULEB32();
def sig = m_getFuncSignature(index);
def target = i_getFunction(index);
doReturnCall(sig, target);
`;
window.traces["RETURN_CALL"]["constUnLEM"] = ''
window.traces["RETURN_CALL"]["constUnLEM__raw"] = ''
window.traces["RETURN_CALL"]["constUnLEM"] += `<pre class='graph'>---
config:
  layout: elk
---
graph TD
	1[\\"Finish"/]
	10 -. Codeptr Stack Trap Locals Globals Tables Memory Extra .-> 1
	10["eff__70 doReturnCall"]
	5 --> 10
	7 --> 10
	3 -. Codeptr .-> 10
	0 -. Stack Trap Locals Globals Tables Memory Extra .-> 10
	0[/"Start"\\]
	3["index imm_readULEB32"]
	0 -. Codeptr .-> 3
	7["target i_getFunction"]
	3 --> 7
	5["sig m_getFuncSignature"]
	3 --> 5
</pre>`;
window.traces["RETURN_CALL"]["constUnLEM__raw"] += `---
config:
  layout: elk
---
graph TD
	1[\\"Finish"/]
	10 -. Codeptr Stack Trap Locals Globals Tables Memory Extra .-> 1
	10["eff__70 doReturnCall"]
	5 --> 10
	7 --> 10
	3 -. Codeptr .-> 10
	0 -. Stack Trap Locals Globals Tables Memory Extra .-> 10
	0[/"Start"\\]
	3["index imm_readULEB32"]
	0 -. Codeptr .-> 3
	7["target i_getFunction"]
	3 --> 7
	5["sig m_getFuncSignature"]
	3 --> 5
`;
window.traces["RETURN_CALL"]["chooseMerge"] = ''
window.traces["RETURN_CALL"]["chooseMerge__raw"] = ''
window.traces["RETURN_CALL"]["chooseMerge"] += `<pre class='graph'>---
config:
  layout: elk
---
graph TD
	1[\\"Finish"/]
	10 -. Codeptr Stack Trap Locals Globals Tables Memory Extra .-> 1
	10["eff__70 doReturnCall"]
	5 --> 10
	7 --> 10
	3 -. Codeptr .-> 10
	0 -. Stack Trap Locals Globals Tables Memory Extra .-> 10
	0[/"Start"\\]
	3["index imm_readULEB32"]
	0 -. Codeptr .-> 3
	7["target i_getFunction"]
	3 --> 7
	5["sig m_getFuncSignature"]
	3 --> 5
</pre>`;
window.traces["RETURN_CALL"]["chooseMerge__raw"] += `---
config:
  layout: elk
---
graph TD
	1[\\"Finish"/]
	10 -. Codeptr Stack Trap Locals Globals Tables Memory Extra .-> 1
	10["eff__70 doReturnCall"]
	5 --> 10
	7 --> 10
	3 -. Codeptr .-> 10
	0 -. Stack Trap Locals Globals Tables Memory Extra .-> 10
	0[/"Start"\\]
	3["index imm_readULEB32"]
	0 -. Codeptr .-> 3
	7["target i_getFunction"]
	3 --> 7
	5["sig m_getFuncSignature"]
	3 --> 5
`;
window.traces["RETURN_CALL"]["scheduled"] = ''
window.traces["RETURN_CALL"]["scheduled__raw"] = ''
window.traces["RETURN_CALL"]["scheduled"] += `<pre class=''>def index = imm_readULEB32();
def sig = m_getFuncSignature(index);
def target = i_getFunction(index);
def eff__70 = doReturnCall(sig, target);
</pre>`;
window.traces["RETURN_CALL"]["scheduled__raw"] += `def index = imm_readULEB32();
def sig = m_getFuncSignature(index);
def target = i_getFunction(index);
def eff__70 = doReturnCall(sig, target);
`;
window.traces["RETURN_CALL"]["pretty"] = ''
window.traces["RETURN_CALL"]["pretty__raw"] = ''
window.traces["RETURN_CALL"]["pretty"] += `<pre class=''>def index = imm_readULEB32();
def sig = m_getFuncSignature(index);
def target = i_getFunction(index);
doReturnCall(sig, target);
</pre>`;
window.traces["RETURN_CALL"]["pretty__raw"] += `def index = imm_readULEB32();
def sig = m_getFuncSignature(index);
def target = i_getFunction(index);
doReturnCall(sig, target);
`;
window.traces["DROP"] = {}
window.traces["DROP"]["parsed"] = ''
window.traces["DROP"]["parsed__raw"] = ''
window.traces["DROP"]["parsed"] += `<pre class=''>def tv = f_getTopOfStackType();
def arg__76 = (tv);
def eff__75 = pop_Value(arg__76);
</pre>`;
window.traces["DROP"]["parsed__raw"] += `def tv = f_getTopOfStackType();
def arg__76 = (tv);
def eff__75 = pop_Value(arg__76);
`;
window.traces["DROP"]["raw"] = ''
window.traces["DROP"]["raw__raw"] = ''
window.traces["DROP"]["raw"] += `<pre class='graph'>---
config:
  layout: elk
---
graph TD
	1[\\"Finish"/]
	0 -. Codeptr Trap Locals Globals Tables Memory Extra .-> 1
	5 -. Stack .-> 1
	5["eff__75 pop_Value"]
	3 --> 5
	0 -. Stack .-> 5
	0[/"Start"\\]
	3["tv f_getTopOfStackType"]
	0 -. Stack .-> 3
</pre>`;
window.traces["DROP"]["raw__raw"] += `---
config:
  layout: elk
---
graph TD
	1[\\"Finish"/]
	0 -. Codeptr Trap Locals Globals Tables Memory Extra .-> 1
	5 -. Stack .-> 1
	5["eff__75 pop_Value"]
	3 --> 5
	0 -. Stack .-> 5
	0[/"Start"\\]
	3["tv f_getTopOfStackType"]
	0 -. Stack .-> 3
`;
window.traces["DROP"]["spytial"] = ''
window.traces["DROP"]["spytial__raw"] = ''
window.traces["DROP"]["spytial"] += `<pre class=''>{
"atoms": [
{
"id": "node_1",
"type": "finish",
"label": "Finish"
},
{
"id": "node_0",
"type": "start",
"label": "Start"
},
{
"id": "node_5",
"type": "intrinsic",
"label": "pop_Value [eff__75]"
},
{
"id": "node_3",
"type": "intrinsic",
"label": "f_getTopOfStackType [tv]"
}
],
"relations": [
{
"id": "uses",
"name": "Uses",
"types": ["sea_node", "sea_node"],
"tuples": [
{
"atoms": ["node_5", "node_3"],
"types": ["intrinsic", "intrinsic"]
}
]
},
{
"id": "state_uses",
"name": "StateUses",
"types": ["sea_node", "sea_node"],
"tuples": [
{
"atoms": ["node_1", "node_0"],
"types": ["finish", "start"]
},
{
"atoms": ["node_1", "node_5"],
"types": ["finish", "intrinsic"]
},
{
"atoms": ["node_5", "node_0"],
"types": ["intrinsic", "start"]
},
{
"atoms": ["node_3", "node_0"],
"types": ["intrinsic", "start"]
}
]
}
]
}</pre>`;
window.traces["DROP"]["spytial__raw"] += `{
"atoms": [
{
"id": "node_1",
"type": "finish",
"label": "Finish"
},
{
"id": "node_0",
"type": "start",
"label": "Start"
},
{
"id": "node_5",
"type": "intrinsic",
"label": "pop_Value [eff__75]"
},
{
"id": "node_3",
"type": "intrinsic",
"label": "f_getTopOfStackType [tv]"
}
],
"relations": [
{
"id": "uses",
"name": "Uses",
"types": ["sea_node", "sea_node"],
"tuples": [
{
"atoms": ["node_5", "node_3"],
"types": ["intrinsic", "intrinsic"]
}
]
},
{
"id": "state_uses",
"name": "StateUses",
"types": ["sea_node", "sea_node"],
"tuples": [
{
"atoms": ["node_1", "node_0"],
"types": ["finish", "start"]
},
{
"atoms": ["node_1", "node_5"],
"types": ["finish", "intrinsic"]
},
{
"atoms": ["node_5", "node_0"],
"types": ["intrinsic", "start"]
},
{
"atoms": ["node_3", "node_0"],
"types": ["intrinsic", "start"]
}
]
}
]
}`;
window.traces["DROP"]["overloadOps"] = ''
window.traces["DROP"]["overloadOps__raw"] = ''
window.traces["DROP"]["overloadOps"] += `<pre class='graph'>---
config:
  layout: elk
---
graph TD
	1[\\"Finish"/]
	0 -. Codeptr Trap Locals Globals Tables Memory Extra .-> 1
	5 -. Stack .-> 1
	5["eff__75 pop_Value"]
	3 --> 5
	0 -. Stack .-> 5
	0[/"Start"\\]
	3["tv f_getTopOfStackType"]
	0 -. Stack .-> 3
</pre>`;
window.traces["DROP"]["overloadOps__raw"] += `---
config:
  layout: elk
---
graph TD
	1[\\"Finish"/]
	0 -. Codeptr Trap Locals Globals Tables Memory Extra .-> 1
	5 -. Stack .-> 1
	5["eff__75 pop_Value"]
	3 --> 5
	0 -. Stack .-> 5
	0[/"Start"\\]
	3["tv f_getTopOfStackType"]
	0 -. Stack .-> 3
`;
window.traces["DROP"]["addAbstractions"] = ''
window.traces["DROP"]["addAbstractions__raw"] = ''
window.traces["DROP"]["addAbstractions"] += `<pre class='graph'>---
config:
  layout: elk
---
graph TD
	1[\\"Finish"/]
	0 -. Codeptr Trap Locals Globals Tables Memory Extra .-> 1
	5 -. Stack .-> 1
	5["eff__75 pop_Value"]
	3 --> 5
	0 -. Stack .-> 5
	0[/"Start"\\]
	3["tv f_getTopOfStackType"]
	0 -. Stack .-> 3
</pre>`;
window.traces["DROP"]["addAbstractions__raw"] += `---
config:
  layout: elk
---
graph TD
	1[\\"Finish"/]
	0 -. Codeptr Trap Locals Globals Tables Memory Extra .-> 1
	5 -. Stack .-> 1
	5["eff__75 pop_Value"]
	3 --> 5
	0 -. Stack .-> 5
	0[/"Start"\\]
	3["tv f_getTopOfStackType"]
	0 -. Stack .-> 3
`;
window.traces["DROP"]["schedulerMermaid"] = ''
window.traces["DROP"]["schedulerMermaid__raw"] = ''
window.traces["DROP"]["schedulerMermaid"] += `<pre class='graph'>graph TD
subgraph block_79["Block 79"]
	direction TB
	b79_0[/"Start"\\]
	b79_3["tv f_getTopOfStackType"]
	b79_5["eff__75 pop_Value"]
	b79_1[\\"Finish"/]
	b79_0 --> b79_3
	b79_3 --> b79_5
	b79_5 --> b79_1
end

</pre>`;
window.traces["DROP"]["schedulerMermaid__raw"] += `graph TD
subgraph block_79["Block 79"]
	direction TB
	b79_0[/"Start"\\]
	b79_3["tv f_getTopOfStackType"]
	b79_5["eff__75 pop_Value"]
	b79_1[\\"Finish"/]
	b79_0 --> b79_3
	b79_3 --> b79_5
	b79_5 --> b79_1
end

`;
window.traces["DROP"]["unLEM"] = ''
window.traces["DROP"]["unLEM__raw"] = ''
window.traces["DROP"]["unLEM"] += `<pre class='graph'>---
config:
  layout: elk
---
graph TD
	1[\\"Finish"/]
	0 -. Codeptr Trap Locals Globals Tables Memory Extra .-> 1
	5 -. Stack .-> 1
	5["eff__75 pop_Value"]
	3 --> 5
	0 -. Stack .-> 5
	0[/"Start"\\]
	3["tv f_getTopOfStackType"]
	0 -. Stack .-> 3
</pre>`;
window.traces["DROP"]["unLEM__raw"] += `---
config:
  layout: elk
---
graph TD
	1[\\"Finish"/]
	0 -. Codeptr Trap Locals Globals Tables Memory Extra .-> 1
	5 -. Stack .-> 1
	5["eff__75 pop_Value"]
	3 --> 5
	0 -. Stack .-> 5
	0[/"Start"\\]
	3["tv f_getTopOfStackType"]
	0 -. Stack .-> 3
`;
window.traces["DROP"]["unlem_schedule"] = ''
window.traces["DROP"]["unlem_schedule__raw"] = ''
window.traces["DROP"]["unlem_schedule"] += `<pre class=''>def tv = f_getTopOfStackType();
def eff__75 = pop_Value(tv);
</pre>`;
window.traces["DROP"]["unlem_schedule__raw"] += `def tv = f_getTopOfStackType();
def eff__75 = pop_Value(tv);
`;
window.traces["DROP"]["spytial_ul"] = ''
window.traces["DROP"]["spytial_ul__raw"] = ''
window.traces["DROP"]["spytial_ul"] += `<pre class=''>{
"atoms": [
{
"id": "node_1",
"type": "finish",
"label": "Finish"
},
{
"id": "node_0",
"type": "start",
"label": "Start"
},
{
"id": "node_5",
"type": "intrinsic",
"label": "pop_Value [eff__75]"
},
{
"id": "node_3",
"type": "intrinsic",
"label": "f_getTopOfStackType [tv]"
}
],
"relations": [
{
"id": "uses",
"name": "Uses",
"types": ["sea_node", "sea_node"],
"tuples": [
{
"atoms": ["node_5", "node_3"],
"types": ["intrinsic", "intrinsic"]
}
]
},
{
"id": "state_uses",
"name": "StateUses",
"types": ["sea_node", "sea_node"],
"tuples": [
{
"atoms": ["node_1", "node_0"],
"types": ["finish", "start"]
},
{
"atoms": ["node_1", "node_5"],
"types": ["finish", "intrinsic"]
},
{
"atoms": ["node_5", "node_0"],
"types": ["intrinsic", "start"]
},
{
"atoms": ["node_3", "node_0"],
"types": ["intrinsic", "start"]
}
]
}
]
}</pre>`;
window.traces["DROP"]["spytial_ul__raw"] += `{
"atoms": [
{
"id": "node_1",
"type": "finish",
"label": "Finish"
},
{
"id": "node_0",
"type": "start",
"label": "Start"
},
{
"id": "node_5",
"type": "intrinsic",
"label": "pop_Value [eff__75]"
},
{
"id": "node_3",
"type": "intrinsic",
"label": "f_getTopOfStackType [tv]"
}
],
"relations": [
{
"id": "uses",
"name": "Uses",
"types": ["sea_node", "sea_node"],
"tuples": [
{
"atoms": ["node_5", "node_3"],
"types": ["intrinsic", "intrinsic"]
}
]
},
{
"id": "state_uses",
"name": "StateUses",
"types": ["sea_node", "sea_node"],
"tuples": [
{
"atoms": ["node_1", "node_0"],
"types": ["finish", "start"]
},
{
"atoms": ["node_1", "node_5"],
"types": ["finish", "intrinsic"]
},
{
"atoms": ["node_5", "node_0"],
"types": ["intrinsic", "start"]
},
{
"atoms": ["node_3", "node_0"],
"types": ["intrinsic", "start"]
}
]
}
]
}`;
window.traces["DROP"]["unlem_scheduler"] = ''
window.traces["DROP"]["unlem_scheduler__raw"] = ''
window.traces["DROP"]["unlem_scheduler"] += `<pre class='graph'>graph TD
subgraph block_80["Block 80"]
	direction TB
	b80_0[/"Start"\\]
	b80_3["tv f_getTopOfStackType"]
	b80_5["eff__75 pop_Value"]
	b80_1[\\"Finish"/]
	b80_0 --> b80_3
	b80_3 --> b80_5
	b80_5 --> b80_1
end

</pre>`;
window.traces["DROP"]["unlem_scheduler__raw"] += `graph TD
subgraph block_80["Block 80"]
	direction TB
	b80_0[/"Start"\\]
	b80_3["tv f_getTopOfStackType"]
	b80_5["eff__75 pop_Value"]
	b80_1[\\"Finish"/]
	b80_0 --> b80_3
	b80_3 --> b80_5
	b80_5 --> b80_1
end

`;
window.traces["DROP"]["unlem_pretty"] = ''
window.traces["DROP"]["unlem_pretty__raw"] = ''
window.traces["DROP"]["unlem_pretty"] += `<pre class=''>def tv = f_getTopOfStackType();
pop_Value(tv);
</pre>`;
window.traces["DROP"]["unlem_pretty__raw"] += `def tv = f_getTopOfStackType();
pop_Value(tv);
`;
window.traces["DROP"]["constUnLEM"] = ''
window.traces["DROP"]["constUnLEM__raw"] = ''
window.traces["DROP"]["constUnLEM"] += `<pre class='graph'>---
config:
  layout: elk
---
graph TD
	1[\\"Finish"/]
	0 -. Codeptr Trap Locals Globals Tables Memory Extra .-> 1
	5 -. Stack .-> 1
	5["eff__75 pop_Value"]
	3 --> 5
	0 -. Stack .-> 5
	0[/"Start"\\]
	3["tv f_getTopOfStackType"]
	0 -. Stack .-> 3
</pre>`;
window.traces["DROP"]["constUnLEM__raw"] += `---
config:
  layout: elk
---
graph TD
	1[\\"Finish"/]
	0 -. Codeptr Trap Locals Globals Tables Memory Extra .-> 1
	5 -. Stack .-> 1
	5["eff__75 pop_Value"]
	3 --> 5
	0 -. Stack .-> 5
	0[/"Start"\\]
	3["tv f_getTopOfStackType"]
	0 -. Stack .-> 3
`;
window.traces["DROP"]["chooseMerge"] = ''
window.traces["DROP"]["chooseMerge__raw"] = ''
window.traces["DROP"]["chooseMerge"] += `<pre class='graph'>---
config:
  layout: elk
---
graph TD
	1[\\"Finish"/]
	0 -. Codeptr Trap Locals Globals Tables Memory Extra .-> 1
	5 -. Stack .-> 1
	5["eff__75 pop_Value"]
	3 --> 5
	0 -. Stack .-> 5
	0[/"Start"\\]
	3["tv f_getTopOfStackType"]
	0 -. Stack .-> 3
</pre>`;
window.traces["DROP"]["chooseMerge__raw"] += `---
config:
  layout: elk
---
graph TD
	1[\\"Finish"/]
	0 -. Codeptr Trap Locals Globals Tables Memory Extra .-> 1
	5 -. Stack .-> 1
	5["eff__75 pop_Value"]
	3 --> 5
	0 -. Stack .-> 5
	0[/"Start"\\]
	3["tv f_getTopOfStackType"]
	0 -. Stack .-> 3
`;
window.traces["DROP"]["scheduled"] = ''
window.traces["DROP"]["scheduled__raw"] = ''
window.traces["DROP"]["scheduled"] += `<pre class=''>def tv = f_getTopOfStackType();
def eff__75 = pop_Value(tv);
</pre>`;
window.traces["DROP"]["scheduled__raw"] += `def tv = f_getTopOfStackType();
def eff__75 = pop_Value(tv);
`;
window.traces["DROP"]["pretty"] = ''
window.traces["DROP"]["pretty__raw"] = ''
window.traces["DROP"]["pretty"] += `<pre class=''>def tv = f_getTopOfStackType();
pop_Value(tv);
</pre>`;
window.traces["DROP"]["pretty__raw"] += `def tv = f_getTopOfStackType();
pop_Value(tv);
`;
window.traces["SELECT"] = {}
window.traces["SELECT"]["parsed"] = ''
window.traces["SELECT"]["parsed__raw"] = ''
window.traces["SELECT"]["parsed"] += `<pre class=''>def c = pop_u32();
def tv = f_getTopOfStackType();
def arg__87 = (tv);
def b = pop_Value(arg__87);
def arg__86 = (tv);
def a = pop_Value(arg__86);
def arg__85 : u32 = 0;
def arg__84 = (c);
def cond__77 = u32.!=(arg__84, arg__85);
if (cond__77) {
	def arg__80 = (a);
	def arg__79 = (tv);
	def eff__78 = push_Value(arg__79, arg__80);
} else {
	def arg__83 = (b);
	def arg__82 = (tv);
	def eff__81 = push_Value(arg__82, arg__83);
}
// phis: 
</pre>`;
window.traces["SELECT"]["parsed__raw"] += `def c = pop_u32();
def tv = f_getTopOfStackType();
def arg__87 = (tv);
def b = pop_Value(arg__87);
def arg__86 = (tv);
def a = pop_Value(arg__86);
def arg__85 : u32 = 0;
def arg__84 = (c);
def cond__77 = u32.!=(arg__84, arg__85);
if (cond__77) {
	def arg__80 = (a);
	def arg__79 = (tv);
	def eff__78 = push_Value(arg__79, arg__80);
} else {
	def arg__83 = (b);
	def arg__82 = (tv);
	def eff__81 = push_Value(arg__82, arg__83);
}
// phis: 
`;
window.traces["SELECT"]["raw"] = ''
window.traces["SELECT"]["raw__raw"] = ''
window.traces["SELECT"]["raw"] += `<pre class='graph'>---
config:
  layout: elk
---
graph TD
	1[\\"Finish"/]
	0 -. Codeptr Trap Locals Globals Tables Memory Extra .-> 1
	18 -. Stack .-> 1
	18{{"Sϕ Stack "}}
	11 --> 18
	17 --> 18
	14 --> 18
	14["eff__81 push_Value"]
	4 --> 14
	6 --> 14
	8 -. Stack .-> 14
	8["a pop_Value"]
	4 --> 8
	6 -. Stack .-> 8
	6["b pop_Value"]
	4 --> 6
	3 -. Stack .-> 6
	3["c pop_u32"]
	0 -. Stack .-> 3
	0[/"Start"\\]
	4["tv f_getTopOfStackType"]
	3 -. Stack .-> 4
	17["eff__78 push_Value"]
	4 --> 17
	8 --> 17
	8 -. Stack .-> 17
	11["cond__77 u32.!="]
	3 --> 11
	9 --> 11
	9["arg__85 0"]
</pre>`;
window.traces["SELECT"]["raw__raw"] += `---
config:
  layout: elk
---
graph TD
	1[\\"Finish"/]
	0 -. Codeptr Trap Locals Globals Tables Memory Extra .-> 1
	18 -. Stack .-> 1
	18{{"Sϕ Stack "}}
	11 --> 18
	17 --> 18
	14 --> 18
	14["eff__81 push_Value"]
	4 --> 14
	6 --> 14
	8 -. Stack .-> 14
	8["a pop_Value"]
	4 --> 8
	6 -. Stack .-> 8
	6["b pop_Value"]
	4 --> 6
	3 -. Stack .-> 6
	3["c pop_u32"]
	0 -. Stack .-> 3
	0[/"Start"\\]
	4["tv f_getTopOfStackType"]
	3 -. Stack .-> 4
	17["eff__78 push_Value"]
	4 --> 17
	8 --> 17
	8 -. Stack .-> 17
	11["cond__77 u32.!="]
	3 --> 11
	9 --> 11
	9["arg__85 0"]
`;
window.traces["SELECT"]["spytial"] = ''
window.traces["SELECT"]["spytial__raw"] = ''
window.traces["SELECT"]["spytial"] += `<pre class=''>{
"atoms": [
{
"id": "node_1",
"type": "finish",
"label": "Finish"
},
{
"id": "node_0",
"type": "start",
"label": "Start"
},
{
"id": "node_18",
"type": "state_phi",
"label": "StatePhi [u32.!= [cond__77]]"
},
{
"id": "node_11",
"type": "intrinsic",
"label": "u32.!= [cond__77]"
},
{
"id": "node_17",
"type": "intrinsic",
"label": "push_Value [eff__78]"
},
{
"id": "node_14",
"type": "intrinsic",
"label": "push_Value [eff__81]"
},
{
"id": "node_3",
"type": "intrinsic",
"label": "pop_u32 [c]"
},
{
"id": "node_9",
"type": "lit",
"label": "0"
},
{
"id": "node_4",
"type": "intrinsic",
"label": "f_getTopOfStackType [tv]"
},
{
"id": "node_8",
"type": "intrinsic",
"label": "pop_Value [a]"
},
{
"id": "node_6",
"type": "intrinsic",
"label": "pop_Value [b]"
}
],
"relations": [
{
"id": "uses",
"name": "Uses",
"types": ["sea_node", "sea_node"],
"tuples": [
{
"atoms": ["node_11", "node_3"],
"types": ["intrinsic", "intrinsic"]
},
{
"atoms": ["node_11", "node_9"],
"types": ["intrinsic", "lit"]
},
{
"atoms": ["node_17", "node_4"],
"types": ["intrinsic", "intrinsic"]
},
{
"atoms": ["node_17", "node_8"],
"types": ["intrinsic", "intrinsic"]
},
{
"atoms": ["node_14", "node_4"],
"types": ["intrinsic", "intrinsic"]
},
{
"atoms": ["node_14", "node_6"],
"types": ["intrinsic", "intrinsic"]
},
{
"atoms": ["node_8", "node_4"],
"types": ["intrinsic", "intrinsic"]
},
{
"atoms": ["node_6", "node_4"],
"types": ["intrinsic", "intrinsic"]
}
]
},
{
"id": "state_uses",
"name": "StateUses",
"types": ["sea_node", "sea_node"],
"tuples": [
{
"atoms": ["node_1", "node_0"],
"types": ["finish", "start"]
},
{
"atoms": ["node_1", "node_18"],
"types": ["finish", "state_phi"]
},
{
"atoms": ["node_17", "node_8"],
"types": ["intrinsic", "intrinsic"]
},
{
"atoms": ["node_14", "node_8"],
"types": ["intrinsic", "intrinsic"]
},
{
"atoms": ["node_3", "node_0"],
"types": ["intrinsic", "start"]
},
{
"atoms": ["node_4", "node_3"],
"types": ["intrinsic", "intrinsic"]
},
{
"atoms": ["node_8", "node_6"],
"types": ["intrinsic", "intrinsic"]
},
{
"atoms": ["node_6", "node_3"],
"types": ["intrinsic", "intrinsic"]
}
]
},
{
"id": "phi_cond",
"name": "PhiCond",
"types": ["sea_node", "sea_node"],
"tuples": [
{
"atoms": ["node_18", "node_11"],
"types": ["state_phi", "intrinsic"]
}
]
},
{
"id": "phi_true",
"name": "PhiTrue",
"types": ["sea_node", "sea_node"],
"tuples": [
{
"atoms": ["node_18", "node_17"],
"types": ["state_phi", "intrinsic"]
}
]
},
{
"id": "phi_false",
"name": "PhiFalse",
"types": ["sea_node", "sea_node"],
"tuples": [
{
"atoms": ["node_18", "node_14"],
"types": ["state_phi", "intrinsic"]
}
]
}
]
}</pre>`;
window.traces["SELECT"]["spytial__raw"] += `{
"atoms": [
{
"id": "node_1",
"type": "finish",
"label": "Finish"
},
{
"id": "node_0",
"type": "start",
"label": "Start"
},
{
"id": "node_18",
"type": "state_phi",
"label": "StatePhi [u32.!= [cond__77]]"
},
{
"id": "node_11",
"type": "intrinsic",
"label": "u32.!= [cond__77]"
},
{
"id": "node_17",
"type": "intrinsic",
"label": "push_Value [eff__78]"
},
{
"id": "node_14",
"type": "intrinsic",
"label": "push_Value [eff__81]"
},
{
"id": "node_3",
"type": "intrinsic",
"label": "pop_u32 [c]"
},
{
"id": "node_9",
"type": "lit",
"label": "0"
},
{
"id": "node_4",
"type": "intrinsic",
"label": "f_getTopOfStackType [tv]"
},
{
"id": "node_8",
"type": "intrinsic",
"label": "pop_Value [a]"
},
{
"id": "node_6",
"type": "intrinsic",
"label": "pop_Value [b]"
}
],
"relations": [
{
"id": "uses",
"name": "Uses",
"types": ["sea_node", "sea_node"],
"tuples": [
{
"atoms": ["node_11", "node_3"],
"types": ["intrinsic", "intrinsic"]
},
{
"atoms": ["node_11", "node_9"],
"types": ["intrinsic", "lit"]
},
{
"atoms": ["node_17", "node_4"],
"types": ["intrinsic", "intrinsic"]
},
{
"atoms": ["node_17", "node_8"],
"types": ["intrinsic", "intrinsic"]
},
{
"atoms": ["node_14", "node_4"],
"types": ["intrinsic", "intrinsic"]
},
{
"atoms": ["node_14", "node_6"],
"types": ["intrinsic", "intrinsic"]
},
{
"atoms": ["node_8", "node_4"],
"types": ["intrinsic", "intrinsic"]
},
{
"atoms": ["node_6", "node_4"],
"types": ["intrinsic", "intrinsic"]
}
]
},
{
"id": "state_uses",
"name": "StateUses",
"types": ["sea_node", "sea_node"],
"tuples": [
{
"atoms": ["node_1", "node_0"],
"types": ["finish", "start"]
},
{
"atoms": ["node_1", "node_18"],
"types": ["finish", "state_phi"]
},
{
"atoms": ["node_17", "node_8"],
"types": ["intrinsic", "intrinsic"]
},
{
"atoms": ["node_14", "node_8"],
"types": ["intrinsic", "intrinsic"]
},
{
"atoms": ["node_3", "node_0"],
"types": ["intrinsic", "start"]
},
{
"atoms": ["node_4", "node_3"],
"types": ["intrinsic", "intrinsic"]
},
{
"atoms": ["node_8", "node_6"],
"types": ["intrinsic", "intrinsic"]
},
{
"atoms": ["node_6", "node_3"],
"types": ["intrinsic", "intrinsic"]
}
]
},
{
"id": "phi_cond",
"name": "PhiCond",
"types": ["sea_node", "sea_node"],
"tuples": [
{
"atoms": ["node_18", "node_11"],
"types": ["state_phi", "intrinsic"]
}
]
},
{
"id": "phi_true",
"name": "PhiTrue",
"types": ["sea_node", "sea_node"],
"tuples": [
{
"atoms": ["node_18", "node_17"],
"types": ["state_phi", "intrinsic"]
}
]
},
{
"id": "phi_false",
"name": "PhiFalse",
"types": ["sea_node", "sea_node"],
"tuples": [
{
"atoms": ["node_18", "node_14"],
"types": ["state_phi", "intrinsic"]
}
]
}
]
}`;
window.traces["SELECT"]["overloadOps"] = ''
window.traces["SELECT"]["overloadOps__raw"] = ''
window.traces["SELECT"]["overloadOps"] += `<pre class='graph'>---
config:
  layout: elk
---
graph TD
	1[\\"Finish"/]
	0 -. Codeptr Trap Locals Globals Tables Memory Extra .-> 1
	18 -. Stack .-> 1
	18{{"Sϕ Stack "}}
	11 --> 18
	17 --> 18
	14 --> 18
	14["eff__81 push_Value"]
	4 --> 14
	6 --> 14
	8 -. Stack .-> 14
	8["a pop_Value"]
	4 --> 8
	6 -. Stack .-> 8
	6["b pop_Value"]
	4 --> 6
	3 -. Stack .-> 6
	3["c pop_u32"]
	0 -. Stack .-> 3
	0[/"Start"\\]
	4["tv f_getTopOfStackType"]
	3 -. Stack .-> 4
	17["eff__78 push_Value"]
	4 --> 17
	8 --> 17
	8 -. Stack .-> 17
	11["cond__77 U32_not_equals"]
	3 --> 11
	9 --> 11
	9["arg__85 0"]
</pre>`;
window.traces["SELECT"]["overloadOps__raw"] += `---
config:
  layout: elk
---
graph TD
	1[\\"Finish"/]
	0 -. Codeptr Trap Locals Globals Tables Memory Extra .-> 1
	18 -. Stack .-> 1
	18{{"Sϕ Stack "}}
	11 --> 18
	17 --> 18
	14 --> 18
	14["eff__81 push_Value"]
	4 --> 14
	6 --> 14
	8 -. Stack .-> 14
	8["a pop_Value"]
	4 --> 8
	6 -. Stack .-> 8
	6["b pop_Value"]
	4 --> 6
	3 -. Stack .-> 6
	3["c pop_u32"]
	0 -. Stack .-> 3
	0[/"Start"\\]
	4["tv f_getTopOfStackType"]
	3 -. Stack .-> 4
	17["eff__78 push_Value"]
	4 --> 17
	8 --> 17
	8 -. Stack .-> 17
	11["cond__77 U32_not_equals"]
	3 --> 11
	9 --> 11
	9["arg__85 0"]
`;
window.traces["SELECT"]["addAbstractions"] = ''
window.traces["SELECT"]["addAbstractions__raw"] = ''
window.traces["SELECT"]["addAbstractions"] += `<pre class='graph'>---
config:
  layout: elk
---
graph TD
	1[\\"Finish"/]
	0 -. Codeptr Trap Locals Globals Tables Memory Extra .-> 1
	18 -. Stack .-> 1
	18{{"Sϕ Stack "}}
	11 --> 18
	17 --> 18
	14 --> 18
	14["eff__81 push_Value"]
	4 --> 14
	6 --> 14
	8 -. Stack .-> 14
	8["a pop_Value"]
	4 --> 8
	6 -. Stack .-> 8
	6["b pop_Value"]
	4 --> 6
	3 -. Stack .-> 6
	3["c pop_u32"]
	0 -. Stack .-> 3
	0[/"Start"\\]
	4["tv f_getTopOfStackType"]
	3 -. Stack .-> 4
	17["eff__78 push_Value"]
	4 --> 17
	8 --> 17
	8 -. Stack .-> 17
	11["cond__77 U32_not_equals"]
	3 --> 11
	19 --> 11
	19["abs__88 lift_u32"]
	9 --> 19
	9["arg__85 0"]
</pre>`;
window.traces["SELECT"]["addAbstractions__raw"] += `---
config:
  layout: elk
---
graph TD
	1[\\"Finish"/]
	0 -. Codeptr Trap Locals Globals Tables Memory Extra .-> 1
	18 -. Stack .-> 1
	18{{"Sϕ Stack "}}
	11 --> 18
	17 --> 18
	14 --> 18
	14["eff__81 push_Value"]
	4 --> 14
	6 --> 14
	8 -. Stack .-> 14
	8["a pop_Value"]
	4 --> 8
	6 -. Stack .-> 8
	6["b pop_Value"]
	4 --> 6
	3 -. Stack .-> 6
	3["c pop_u32"]
	0 -. Stack .-> 3
	0[/"Start"\\]
	4["tv f_getTopOfStackType"]
	3 -. Stack .-> 4
	17["eff__78 push_Value"]
	4 --> 17
	8 --> 17
	8 -. Stack .-> 17
	11["cond__77 U32_not_equals"]
	3 --> 11
	19 --> 11
	19["abs__88 lift_u32"]
	9 --> 19
	9["arg__85 0"]
`;
window.traces["SELECT"]["schedulerMermaid"] = ''
window.traces["SELECT"]["schedulerMermaid__raw"] = ''
window.traces["SELECT"]["schedulerMermaid"] += `<pre class='graph'>graph TD
subgraph block_81["Block 81"]
	direction TB
	b81_1[\\"Finish"/]
end
phi_83 --> block_81
subgraph phi_83["Phi 83"]
	p83_18{{"Sϕ Stack "}}
end
block_84 --> phi_83
block_85 --> phi_83
subgraph block_84["Block 84"]
	direction TB
	b84_17["eff__78 push_Value"]
end
branch_82 --> block_84
subgraph branch_82["Branch 82"]
	br82_11["cond__77 U32_not_equals"]

end
block_86 --> branch_82
subgraph block_86["Block 86"]
	direction TB
	b86_0[/"Start"\\]
	b86_9["arg__85 0"]
	b86_3["c pop_u32"]
	b86_4["tv f_getTopOfStackType"]
	b86_19["abs__88 lift_u32"]
	b86_6["b pop_Value"]
	b86_8["a pop_Value"]
	b86_11["cond__77 U32_not_equals"]
	b86_0 --> b86_9
	b86_9 --> b86_3
	b86_3 --> b86_4
	b86_4 --> b86_19
	b86_19 --> b86_6
	b86_6 --> b86_8
	b86_8 --> b86_11
end
subgraph block_85["Block 85"]
	direction TB
	b85_14["eff__81 push_Value"]
end
branch_82 --> block_85

</pre>`;
window.traces["SELECT"]["schedulerMermaid__raw"] += `graph TD
subgraph block_81["Block 81"]
	direction TB
	b81_1[\\"Finish"/]
end
phi_83 --> block_81
subgraph phi_83["Phi 83"]
	p83_18{{"Sϕ Stack "}}
end
block_84 --> phi_83
block_85 --> phi_83
subgraph block_84["Block 84"]
	direction TB
	b84_17["eff__78 push_Value"]
end
branch_82 --> block_84
subgraph branch_82["Branch 82"]
	br82_11["cond__77 U32_not_equals"]

end
block_86 --> branch_82
subgraph block_86["Block 86"]
	direction TB
	b86_0[/"Start"\\]
	b86_9["arg__85 0"]
	b86_3["c pop_u32"]
	b86_4["tv f_getTopOfStackType"]
	b86_19["abs__88 lift_u32"]
	b86_6["b pop_Value"]
	b86_8["a pop_Value"]
	b86_11["cond__77 U32_not_equals"]
	b86_0 --> b86_9
	b86_9 --> b86_3
	b86_3 --> b86_4
	b86_4 --> b86_19
	b86_19 --> b86_6
	b86_6 --> b86_8
	b86_8 --> b86_11
end
subgraph block_85["Block 85"]
	direction TB
	b85_14["eff__81 push_Value"]
end
branch_82 --> block_85

`;
window.traces["SELECT"]["unLEM"] = ''
window.traces["SELECT"]["unLEM__raw"] = ''
window.traces["SELECT"]["unLEM"] += `<pre class='graph'>---
config:
  layout: elk
---
graph TD
	1[\\"Finish"/]
	0 -. Codeptr Trap Locals Globals Tables Memory Extra .-> 1
	18 -. Stack .-> 1
	18{{"Sϕ Stack "}}
	22 --> 18
	25 --> 18
	23 --> 18
	23{{"Sϕ Stack "}}
	20 --> 23
	17 --> 23
	14 --> 23
	14["eff__81 push_Value"]
	4 --> 14
	6 --> 14
	8 -. Stack .-> 14
	8["a pop_Value"]
	4 --> 8
	6 -. Stack .-> 8
	6["b pop_Value"]
	4 --> 6
	3 -. Stack .-> 6
	3["c pop_u32"]
	0 -. Stack .-> 3
	0[/"Start"\\]
	4["tv f_getTopOfStackType"]
	3 -. Stack .-> 4
	17["eff__78 push_Value"]
	4 --> 17
	8 --> 17
	8 -. Stack .-> 17
	20["mt__89 U32_maybeTrue"]
	11 --> 20
	11["cond__77 U32_not_equals"]
	3 --> 11
	19 --> 11
	19["abs__88 lift_u32"]
	9 --> 19
	9["arg__85 0"]
	25["push__93 push_Value"]
	4 --> 25
	24 --> 25
	8 -. Stack .-> 25
	24["merge__92 merge_Val"]
	4 --> 24
	8 --> 24
	6 --> 24
	6 -. Stack .-> 24
	22["mb__91 bool.&&"]
	20 --> 22
	21 --> 22
	21["mf__90 U32_maybeFalse"]
	11 --> 21
</pre>`;
window.traces["SELECT"]["unLEM__raw"] += `---
config:
  layout: elk
---
graph TD
	1[\\"Finish"/]
	0 -. Codeptr Trap Locals Globals Tables Memory Extra .-> 1
	18 -. Stack .-> 1
	18{{"Sϕ Stack "}}
	22 --> 18
	25 --> 18
	23 --> 18
	23{{"Sϕ Stack "}}
	20 --> 23
	17 --> 23
	14 --> 23
	14["eff__81 push_Value"]
	4 --> 14
	6 --> 14
	8 -. Stack .-> 14
	8["a pop_Value"]
	4 --> 8
	6 -. Stack .-> 8
	6["b pop_Value"]
	4 --> 6
	3 -. Stack .-> 6
	3["c pop_u32"]
	0 -. Stack .-> 3
	0[/"Start"\\]
	4["tv f_getTopOfStackType"]
	3 -. Stack .-> 4
	17["eff__78 push_Value"]
	4 --> 17
	8 --> 17
	8 -. Stack .-> 17
	20["mt__89 U32_maybeTrue"]
	11 --> 20
	11["cond__77 U32_not_equals"]
	3 --> 11
	19 --> 11
	19["abs__88 lift_u32"]
	9 --> 19
	9["arg__85 0"]
	25["push__93 push_Value"]
	4 --> 25
	24 --> 25
	8 -. Stack .-> 25
	24["merge__92 merge_Val"]
	4 --> 24
	8 --> 24
	6 --> 24
	6 -. Stack .-> 24
	22["mb__91 bool.&&"]
	20 --> 22
	21 --> 22
	21["mf__90 U32_maybeFalse"]
	11 --> 21
`;
window.traces["SELECT"]["unlem_schedule"] = ''
window.traces["SELECT"]["unlem_schedule__raw"] = ''
window.traces["SELECT"]["unlem_schedule"] += `<pre class=''>def c = pop_u32();
def tv = f_getTopOfStackType();
def b = pop_Value(tv);
def a = pop_Value(tv);
def arg__85 : u32 = 0;
def abs__88 = lift_u32(arg__85);
def cond__77 = U32_not_equals(c, abs__88);
def mt__89 = U32_maybeTrue(cond__77);
def mf__90 = U32_maybeFalse(cond__77);
def mb__91 = bool.&&(mt__89, mf__90);
if (mb__91) {
	def merge__92 = merge_Val(tv, a, b);
	def push__93 = push_Value(tv, merge__92);
} else {
	if (mt__89) {
		def eff__78 = push_Value(tv, a);
	} else {
		def eff__81 = push_Value(tv, b);
	}
// phis: 
}
// phis: 
</pre>`;
window.traces["SELECT"]["unlem_schedule__raw"] += `def c = pop_u32();
def tv = f_getTopOfStackType();
def b = pop_Value(tv);
def a = pop_Value(tv);
def arg__85 : u32 = 0;
def abs__88 = lift_u32(arg__85);
def cond__77 = U32_not_equals(c, abs__88);
def mt__89 = U32_maybeTrue(cond__77);
def mf__90 = U32_maybeFalse(cond__77);
def mb__91 = bool.&&(mt__89, mf__90);
if (mb__91) {
	def merge__92 = merge_Val(tv, a, b);
	def push__93 = push_Value(tv, merge__92);
} else {
	if (mt__89) {
		def eff__78 = push_Value(tv, a);
	} else {
		def eff__81 = push_Value(tv, b);
	}
// phis: 
}
// phis: 
`;
window.traces["SELECT"]["spytial_ul"] = ''
window.traces["SELECT"]["spytial_ul__raw"] = ''
window.traces["SELECT"]["spytial_ul"] += `<pre class=''>{
"atoms": [
{
"id": "node_1",
"type": "finish",
"label": "Finish"
},
{
"id": "node_0",
"type": "start",
"label": "Start"
},
{
"id": "node_18",
"type": "state_phi",
"label": "StatePhi [bool.&& [mb__91]]"
},
{
"id": "node_22",
"type": "intrinsic",
"label": "bool.&& [mb__91]"
},
{
"id": "node_25",
"type": "intrinsic",
"label": "push_Value [push__93]"
},
{
"id": "node_23",
"type": "state_phi",
"label": "StatePhi [U32_maybeTrue [mt__89]]"
},
{
"id": "node_20",
"type": "intrinsic",
"label": "U32_maybeTrue [mt__89]"
},
{
"id": "node_21",
"type": "intrinsic",
"label": "U32_maybeFalse [mf__90]"
},
{
"id": "node_4",
"type": "intrinsic",
"label": "f_getTopOfStackType [tv]"
},
{
"id": "node_24",
"type": "intrinsic",
"label": "merge_Val [merge__92]"
},
{
"id": "node_8",
"type": "intrinsic",
"label": "pop_Value [a]"
},
{
"id": "node_17",
"type": "intrinsic",
"label": "push_Value [eff__78]"
},
{
"id": "node_14",
"type": "intrinsic",
"label": "push_Value [eff__81]"
},
{
"id": "node_11",
"type": "intrinsic",
"label": "U32_not_equals [cond__77]"
},
{
"id": "node_3",
"type": "intrinsic",
"label": "pop_u32 [c]"
},
{
"id": "node_6",
"type": "intrinsic",
"label": "pop_Value [b]"
},
{
"id": "node_19",
"type": "intrinsic",
"label": "lift_u32 [abs__88]"
},
{
"id": "node_9",
"type": "lit",
"label": "0"
}
],
"relations": [
{
"id": "uses",
"name": "Uses",
"types": ["sea_node", "sea_node"],
"tuples": [
{
"atoms": ["node_22", "node_20"],
"types": ["intrinsic", "intrinsic"]
},
{
"atoms": ["node_22", "node_21"],
"types": ["intrinsic", "intrinsic"]
},
{
"atoms": ["node_25", "node_4"],
"types": ["intrinsic", "intrinsic"]
},
{
"atoms": ["node_25", "node_24"],
"types": ["intrinsic", "intrinsic"]
},
{
"atoms": ["node_20", "node_11"],
"types": ["intrinsic", "intrinsic"]
},
{
"atoms": ["node_21", "node_11"],
"types": ["intrinsic", "intrinsic"]
},
{
"atoms": ["node_24", "node_4"],
"types": ["intrinsic", "intrinsic"]
},
{
"atoms": ["node_24", "node_8"],
"types": ["intrinsic", "intrinsic"]
},
{
"atoms": ["node_24", "node_6"],
"types": ["intrinsic", "intrinsic"]
},
{
"atoms": ["node_8", "node_4"],
"types": ["intrinsic", "intrinsic"]
},
{
"atoms": ["node_17", "node_4"],
"types": ["intrinsic", "intrinsic"]
},
{
"atoms": ["node_17", "node_8"],
"types": ["intrinsic", "intrinsic"]
},
{
"atoms": ["node_14", "node_4"],
"types": ["intrinsic", "intrinsic"]
},
{
"atoms": ["node_14", "node_6"],
"types": ["intrinsic", "intrinsic"]
},
{
"atoms": ["node_11", "node_3"],
"types": ["intrinsic", "intrinsic"]
},
{
"atoms": ["node_11", "node_19"],
"types": ["intrinsic", "intrinsic"]
},
{
"atoms": ["node_6", "node_4"],
"types": ["intrinsic", "intrinsic"]
},
{
"atoms": ["node_19", "node_9"],
"types": ["intrinsic", "lit"]
}
]
},
{
"id": "state_uses",
"name": "StateUses",
"types": ["sea_node", "sea_node"],
"tuples": [
{
"atoms": ["node_1", "node_0"],
"types": ["finish", "start"]
},
{
"atoms": ["node_1", "node_18"],
"types": ["finish", "state_phi"]
},
{
"atoms": ["node_25", "node_8"],
"types": ["intrinsic", "intrinsic"]
},
{
"atoms": ["node_4", "node_3"],
"types": ["intrinsic", "intrinsic"]
},
{
"atoms": ["node_24", "node_6"],
"types": ["intrinsic", "intrinsic"]
},
{
"atoms": ["node_8", "node_6"],
"types": ["intrinsic", "intrinsic"]
},
{
"atoms": ["node_17", "node_8"],
"types": ["intrinsic", "intrinsic"]
},
{
"atoms": ["node_14", "node_8"],
"types": ["intrinsic", "intrinsic"]
},
{
"atoms": ["node_3", "node_0"],
"types": ["intrinsic", "start"]
},
{
"atoms": ["node_6", "node_3"],
"types": ["intrinsic", "intrinsic"]
}
]
},
{
"id": "phi_cond",
"name": "PhiCond",
"types": ["sea_node", "sea_node"],
"tuples": [
{
"atoms": ["node_18", "node_22"],
"types": ["state_phi", "intrinsic"]
},
{
"atoms": ["node_23", "node_20"],
"types": ["state_phi", "intrinsic"]
}
]
},
{
"id": "phi_true",
"name": "PhiTrue",
"types": ["sea_node", "sea_node"],
"tuples": [
{
"atoms": ["node_18", "node_25"],
"types": ["state_phi", "intrinsic"]
},
{
"atoms": ["node_23", "node_17"],
"types": ["state_phi", "intrinsic"]
}
]
},
{
"id": "phi_false",
"name": "PhiFalse",
"types": ["sea_node", "sea_node"],
"tuples": [
{
"atoms": ["node_18", "node_23"],
"types": ["state_phi", "state_phi"]
},
{
"atoms": ["node_23", "node_14"],
"types": ["state_phi", "intrinsic"]
}
]
}
]
}</pre>`;
window.traces["SELECT"]["spytial_ul__raw"] += `{
"atoms": [
{
"id": "node_1",
"type": "finish",
"label": "Finish"
},
{
"id": "node_0",
"type": "start",
"label": "Start"
},
{
"id": "node_18",
"type": "state_phi",
"label": "StatePhi [bool.&& [mb__91]]"
},
{
"id": "node_22",
"type": "intrinsic",
"label": "bool.&& [mb__91]"
},
{
"id": "node_25",
"type": "intrinsic",
"label": "push_Value [push__93]"
},
{
"id": "node_23",
"type": "state_phi",
"label": "StatePhi [U32_maybeTrue [mt__89]]"
},
{
"id": "node_20",
"type": "intrinsic",
"label": "U32_maybeTrue [mt__89]"
},
{
"id": "node_21",
"type": "intrinsic",
"label": "U32_maybeFalse [mf__90]"
},
{
"id": "node_4",
"type": "intrinsic",
"label": "f_getTopOfStackType [tv]"
},
{
"id": "node_24",
"type": "intrinsic",
"label": "merge_Val [merge__92]"
},
{
"id": "node_8",
"type": "intrinsic",
"label": "pop_Value [a]"
},
{
"id": "node_17",
"type": "intrinsic",
"label": "push_Value [eff__78]"
},
{
"id": "node_14",
"type": "intrinsic",
"label": "push_Value [eff__81]"
},
{
"id": "node_11",
"type": "intrinsic",
"label": "U32_not_equals [cond__77]"
},
{
"id": "node_3",
"type": "intrinsic",
"label": "pop_u32 [c]"
},
{
"id": "node_6",
"type": "intrinsic",
"label": "pop_Value [b]"
},
{
"id": "node_19",
"type": "intrinsic",
"label": "lift_u32 [abs__88]"
},
{
"id": "node_9",
"type": "lit",
"label": "0"
}
],
"relations": [
{
"id": "uses",
"name": "Uses",
"types": ["sea_node", "sea_node"],
"tuples": [
{
"atoms": ["node_22", "node_20"],
"types": ["intrinsic", "intrinsic"]
},
{
"atoms": ["node_22", "node_21"],
"types": ["intrinsic", "intrinsic"]
},
{
"atoms": ["node_25", "node_4"],
"types": ["intrinsic", "intrinsic"]
},
{
"atoms": ["node_25", "node_24"],
"types": ["intrinsic", "intrinsic"]
},
{
"atoms": ["node_20", "node_11"],
"types": ["intrinsic", "intrinsic"]
},
{
"atoms": ["node_21", "node_11"],
"types": ["intrinsic", "intrinsic"]
},
{
"atoms": ["node_24", "node_4"],
"types": ["intrinsic", "intrinsic"]
},
{
"atoms": ["node_24", "node_8"],
"types": ["intrinsic", "intrinsic"]
},
{
"atoms": ["node_24", "node_6"],
"types": ["intrinsic", "intrinsic"]
},
{
"atoms": ["node_8", "node_4"],
"types": ["intrinsic", "intrinsic"]
},
{
"atoms": ["node_17", "node_4"],
"types": ["intrinsic", "intrinsic"]
},
{
"atoms": ["node_17", "node_8"],
"types": ["intrinsic", "intrinsic"]
},
{
"atoms": ["node_14", "node_4"],
"types": ["intrinsic", "intrinsic"]
},
{
"atoms": ["node_14", "node_6"],
"types": ["intrinsic", "intrinsic"]
},
{
"atoms": ["node_11", "node_3"],
"types": ["intrinsic", "intrinsic"]
},
{
"atoms": ["node_11", "node_19"],
"types": ["intrinsic", "intrinsic"]
},
{
"atoms": ["node_6", "node_4"],
"types": ["intrinsic", "intrinsic"]
},
{
"atoms": ["node_19", "node_9"],
"types": ["intrinsic", "lit"]
}
]
},
{
"id": "state_uses",
"name": "StateUses",
"types": ["sea_node", "sea_node"],
"tuples": [
{
"atoms": ["node_1", "node_0"],
"types": ["finish", "start"]
},
{
"atoms": ["node_1", "node_18"],
"types": ["finish", "state_phi"]
},
{
"atoms": ["node_25", "node_8"],
"types": ["intrinsic", "intrinsic"]
},
{
"atoms": ["node_4", "node_3"],
"types": ["intrinsic", "intrinsic"]
},
{
"atoms": ["node_24", "node_6"],
"types": ["intrinsic", "intrinsic"]
},
{
"atoms": ["node_8", "node_6"],
"types": ["intrinsic", "intrinsic"]
},
{
"atoms": ["node_17", "node_8"],
"types": ["intrinsic", "intrinsic"]
},
{
"atoms": ["node_14", "node_8"],
"types": ["intrinsic", "intrinsic"]
},
{
"atoms": ["node_3", "node_0"],
"types": ["intrinsic", "start"]
},
{
"atoms": ["node_6", "node_3"],
"types": ["intrinsic", "intrinsic"]
}
]
},
{
"id": "phi_cond",
"name": "PhiCond",
"types": ["sea_node", "sea_node"],
"tuples": [
{
"atoms": ["node_18", "node_22"],
"types": ["state_phi", "intrinsic"]
},
{
"atoms": ["node_23", "node_20"],
"types": ["state_phi", "intrinsic"]
}
]
},
{
"id": "phi_true",
"name": "PhiTrue",
"types": ["sea_node", "sea_node"],
"tuples": [
{
"atoms": ["node_18", "node_25"],
"types": ["state_phi", "intrinsic"]
},
{
"atoms": ["node_23", "node_17"],
"types": ["state_phi", "intrinsic"]
}
]
},
{
"id": "phi_false",
"name": "PhiFalse",
"types": ["sea_node", "sea_node"],
"tuples": [
{
"atoms": ["node_18", "node_23"],
"types": ["state_phi", "state_phi"]
},
{
"atoms": ["node_23", "node_14"],
"types": ["state_phi", "intrinsic"]
}
]
}
]
}`;
window.traces["SELECT"]["unlem_scheduler"] = ''
window.traces["SELECT"]["unlem_scheduler__raw"] = ''
window.traces["SELECT"]["unlem_scheduler"] += `<pre class='graph'>graph TD
subgraph block_87["Block 87"]
	direction TB
	b87_1[\\"Finish"/]
end
phi_89 --> block_87
subgraph phi_89["Phi 89"]
	p89_18{{"Sϕ Stack "}}
end
block_90 --> phi_89
block_91 --> phi_89
subgraph block_90["Block 90"]
	direction TB
	b90_24["merge__92 merge_Val"]
	b90_25["push__93 push_Value"]
	b90_24 --> b90_25
end
branch_88 --> block_90
subgraph branch_88["Branch 88"]
	br88_22["mb__91 bool.&&"]

end
block_96 --> branch_88
subgraph block_96["Block 96"]
	direction TB
	b96_0[/"Start"\\]
	b96_9["arg__85 0"]
	b96_19["abs__88 lift_u32"]
	b96_3["c pop_u32"]
	b96_11["cond__77 U32_not_equals"]
	b96_4["tv f_getTopOfStackType"]
	b96_6["b pop_Value"]
	b96_8["a pop_Value"]
	b96_21["mf__90 U32_maybeFalse"]
	b96_20["mt__89 U32_maybeTrue"]
	b96_22["mb__91 bool.&&"]
	b96_0 --> b96_9
	b96_9 --> b96_19
	b96_19 --> b96_3
	b96_3 --> b96_11
	b96_11 --> b96_4
	b96_4 --> b96_6
	b96_6 --> b96_8
	b96_8 --> b96_21
	b96_21 --> b96_20
	b96_20 --> b96_22
end
subgraph block_91["Block 91"]
	direction TB
end
phi_93 --> block_91
subgraph phi_93["Phi 93"]
	p93_23{{"Sϕ Stack "}}
	p93_23{{"Sϕ Stack "}}
end
block_94 --> phi_93
block_95 --> phi_93
subgraph block_94["Block 94"]
	direction TB
	b94_17["eff__78 push_Value"]
end
branch_92 --> block_94
subgraph branch_92["Branch 92"]
	br92_20["mt__89 U32_maybeTrue"]

end
branch_88 --> branch_92
subgraph block_95["Block 95"]
	direction TB
	b95_14["eff__81 push_Value"]
end
branch_92 --> block_95

</pre>`;
window.traces["SELECT"]["unlem_scheduler__raw"] += `graph TD
subgraph block_87["Block 87"]
	direction TB
	b87_1[\\"Finish"/]
end
phi_89 --> block_87
subgraph phi_89["Phi 89"]
	p89_18{{"Sϕ Stack "}}
end
block_90 --> phi_89
block_91 --> phi_89
subgraph block_90["Block 90"]
	direction TB
	b90_24["merge__92 merge_Val"]
	b90_25["push__93 push_Value"]
	b90_24 --> b90_25
end
branch_88 --> block_90
subgraph branch_88["Branch 88"]
	br88_22["mb__91 bool.&&"]

end
block_96 --> branch_88
subgraph block_96["Block 96"]
	direction TB
	b96_0[/"Start"\\]
	b96_9["arg__85 0"]
	b96_19["abs__88 lift_u32"]
	b96_3["c pop_u32"]
	b96_11["cond__77 U32_not_equals"]
	b96_4["tv f_getTopOfStackType"]
	b96_6["b pop_Value"]
	b96_8["a pop_Value"]
	b96_21["mf__90 U32_maybeFalse"]
	b96_20["mt__89 U32_maybeTrue"]
	b96_22["mb__91 bool.&&"]
	b96_0 --> b96_9
	b96_9 --> b96_19
	b96_19 --> b96_3
	b96_3 --> b96_11
	b96_11 --> b96_4
	b96_4 --> b96_6
	b96_6 --> b96_8
	b96_8 --> b96_21
	b96_21 --> b96_20
	b96_20 --> b96_22
end
subgraph block_91["Block 91"]
	direction TB
end
phi_93 --> block_91
subgraph phi_93["Phi 93"]
	p93_23{{"Sϕ Stack "}}
	p93_23{{"Sϕ Stack "}}
end
block_94 --> phi_93
block_95 --> phi_93
subgraph block_94["Block 94"]
	direction TB
	b94_17["eff__78 push_Value"]
end
branch_92 --> block_94
subgraph branch_92["Branch 92"]
	br92_20["mt__89 U32_maybeTrue"]

end
branch_88 --> branch_92
subgraph block_95["Block 95"]
	direction TB
	b95_14["eff__81 push_Value"]
end
branch_92 --> block_95

`;
window.traces["SELECT"]["unlem_pretty"] = ''
window.traces["SELECT"]["unlem_pretty__raw"] = ''
window.traces["SELECT"]["unlem_pretty"] += `<pre class=''>def c = pop_u32();
def tv = f_getTopOfStackType();
def b = pop_Value(tv);
def a = pop_Value(tv);
def cond = U32_not_equals(c, lift_u32(0));
def mt = U32_maybeTrue(cond);
def mf = U32_maybeFalse(cond);
if (bool.&&(mt, mf)) {
	def push = push_Value(tv, merge_Val(tv, a, b));
} else {
	if (mt) {
		push_Value(tv, a);
	} else {
		push_Value(tv, b);
	}
}
</pre>`;
window.traces["SELECT"]["unlem_pretty__raw"] += `def c = pop_u32();
def tv = f_getTopOfStackType();
def b = pop_Value(tv);
def a = pop_Value(tv);
def cond = U32_not_equals(c, lift_u32(0));
def mt = U32_maybeTrue(cond);
def mf = U32_maybeFalse(cond);
if (bool.&&(mt, mf)) {
	def push = push_Value(tv, merge_Val(tv, a, b));
} else {
	if (mt) {
		push_Value(tv, a);
	} else {
		push_Value(tv, b);
	}
}
`;
window.traces["SELECT"]["constUnLEM"] = ''
window.traces["SELECT"]["constUnLEM__raw"] = ''
window.traces["SELECT"]["constUnLEM"] += `<pre class='graph'>---
config:
  layout: elk
---
graph TD
	1[\\"Finish"/]
	0 -. Codeptr Trap Locals Globals Tables Memory Extra .-> 1
	25 -. Stack .-> 1
	25["push__93 push_Value"]
	4 --> 25
	24 --> 25
	8 -. Stack .-> 25
	8["a pop_Value"]
	4 --> 8
	6 -. Stack .-> 8
	6["b pop_Value"]
	4 --> 6
	3 -. Stack .-> 6
	3["c pop_u32"]
	0 -. Stack .-> 3
	0[/"Start"\\]
	4["tv f_getTopOfStackType"]
	3 -. Stack .-> 4
	24["merge__92 merge_Val"]
	4 --> 24
	8 --> 24
	6 --> 24
	6 -. Stack .-> 24
</pre>`;
window.traces["SELECT"]["constUnLEM__raw"] += `---
config:
  layout: elk
---
graph TD
	1[\\"Finish"/]
	0 -. Codeptr Trap Locals Globals Tables Memory Extra .-> 1
	25 -. Stack .-> 1
	25["push__93 push_Value"]
	4 --> 25
	24 --> 25
	8 -. Stack .-> 25
	8["a pop_Value"]
	4 --> 8
	6 -. Stack .-> 8
	6["b pop_Value"]
	4 --> 6
	3 -. Stack .-> 6
	3["c pop_u32"]
	0 -. Stack .-> 3
	0[/"Start"\\]
	4["tv f_getTopOfStackType"]
	3 -. Stack .-> 4
	24["merge__92 merge_Val"]
	4 --> 24
	8 --> 24
	6 --> 24
	6 -. Stack .-> 24
`;
window.traces["SELECT"]["chooseMerge"] = ''
window.traces["SELECT"]["chooseMerge__raw"] = ''
window.traces["SELECT"]["chooseMerge"] += `<pre class='graph'>---
config:
  layout: elk
---
graph TD
	1[\\"Finish"/]
	0 -. Codeptr Trap Locals Globals Tables Memory Extra .-> 1
	25 -. Stack .-> 1
	25["push__93 push_Value"]
	4 --> 25
	4 --> 25
	8 -. Stack .-> 25
	8["a pop_Value"]
	4 --> 8
	6 -. Stack .-> 8
	6["b pop_Value"]
	4 --> 6
	3 -. Stack .-> 6
	3["c pop_u32"]
	0 -. Stack .-> 3
	0[/"Start"\\]
	4["tv f_getTopOfStackType"]
	3 -. Stack .-> 4
</pre>`;
window.traces["SELECT"]["chooseMerge__raw"] += `---
config:
  layout: elk
---
graph TD
	1[\\"Finish"/]
	0 -. Codeptr Trap Locals Globals Tables Memory Extra .-> 1
	25 -. Stack .-> 1
	25["push__93 push_Value"]
	4 --> 25
	4 --> 25
	8 -. Stack .-> 25
	8["a pop_Value"]
	4 --> 8
	6 -. Stack .-> 8
	6["b pop_Value"]
	4 --> 6
	3 -. Stack .-> 6
	3["c pop_u32"]
	0 -. Stack .-> 3
	0[/"Start"\\]
	4["tv f_getTopOfStackType"]
	3 -. Stack .-> 4
`;
window.traces["SELECT"]["scheduled"] = ''
window.traces["SELECT"]["scheduled__raw"] = ''
window.traces["SELECT"]["scheduled"] += `<pre class=''>def c = pop_u32();
def tv = f_getTopOfStackType();
def b = pop_Value(tv);
def a = pop_Value(tv);
def push__93 = push_Value(tv, tv);
</pre>`;
window.traces["SELECT"]["scheduled__raw"] += `def c = pop_u32();
def tv = f_getTopOfStackType();
def b = pop_Value(tv);
def a = pop_Value(tv);
def push__93 = push_Value(tv, tv);
`;
window.traces["SELECT"]["pretty"] = ''
window.traces["SELECT"]["pretty__raw"] = ''
window.traces["SELECT"]["pretty"] += `<pre class=''>def c = pop_u32();
def tv = f_getTopOfStackType();
def b = pop_Value(tv);
def a = pop_Value(tv);
def push = push_Value(tv, tv);
</pre>`;
window.traces["SELECT"]["pretty__raw"] += `def c = pop_u32();
def tv = f_getTopOfStackType();
def b = pop_Value(tv);
def a = pop_Value(tv);
def push = push_Value(tv, tv);
`;
window.traces["LOCAL_GET"] = {}
window.traces["LOCAL_GET"]["parsed"] = ''
window.traces["LOCAL_GET"]["parsed__raw"] = ''
window.traces["LOCAL_GET"]["parsed"] += `<pre class=''>def index = imm_readULEB32();
def arg__99 = (index);
def tv = f_getLocalType(arg__99);
def arg__98 = (index);
def arg__97 = (tv);
def val = getLocal(arg__97, arg__98);
def arg__96 = (val);
def arg__95 = (tv);
def eff__94 = push_Value(arg__95, arg__96);
</pre>`;
window.traces["LOCAL_GET"]["parsed__raw"] += `def index = imm_readULEB32();
def arg__99 = (index);
def tv = f_getLocalType(arg__99);
def arg__98 = (index);
def arg__97 = (tv);
def val = getLocal(arg__97, arg__98);
def arg__96 = (val);
def arg__95 = (tv);
def eff__94 = push_Value(arg__95, arg__96);
`;
window.traces["LOCAL_GET"]["raw"] = ''
window.traces["LOCAL_GET"]["raw__raw"] = ''
window.traces["LOCAL_GET"]["raw"] += `<pre class='graph'>---
config:
  layout: elk
---
graph TD
	1[\\"Finish"/]
	3 -. Codeptr .-> 1
	11 -. Stack .-> 1
	0 -. Trap Locals Globals Tables Memory Extra .-> 1
	0[/"Start"\\]
	11["eff__94 push_Value"]
	5 --> 11
	8 --> 11
	8 -. Stack .-> 11
	8["val getLocal"]
	5 --> 8
	3 --> 8
	0 -. Stack .-> 8
	3["index imm_readULEB32"]
	0 -. Codeptr .-> 3
	5["tv f_getLocalType"]
	3 --> 5
</pre>`;
window.traces["LOCAL_GET"]["raw__raw"] += `---
config:
  layout: elk
---
graph TD
	1[\\"Finish"/]
	3 -. Codeptr .-> 1
	11 -. Stack .-> 1
	0 -. Trap Locals Globals Tables Memory Extra .-> 1
	0[/"Start"\\]
	11["eff__94 push_Value"]
	5 --> 11
	8 --> 11
	8 -. Stack .-> 11
	8["val getLocal"]
	5 --> 8
	3 --> 8
	0 -. Stack .-> 8
	3["index imm_readULEB32"]
	0 -. Codeptr .-> 3
	5["tv f_getLocalType"]
	3 --> 5
`;
window.traces["LOCAL_GET"]["spytial"] = ''
window.traces["LOCAL_GET"]["spytial__raw"] = ''
window.traces["LOCAL_GET"]["spytial"] += `<pre class=''>{
"atoms": [
{
"id": "node_1",
"type": "finish",
"label": "Finish"
},
{
"id": "node_3",
"type": "intrinsic",
"label": "imm_readULEB32 [index]"
},
{
"id": "node_11",
"type": "intrinsic",
"label": "push_Value [eff__94]"
},
{
"id": "node_0",
"type": "start",
"label": "Start"
},
{
"id": "node_5",
"type": "intrinsic",
"label": "f_getLocalType [tv]"
},
{
"id": "node_8",
"type": "intrinsic",
"label": "getLocal [val]"
}
],
"relations": [
{
"id": "uses",
"name": "Uses",
"types": ["sea_node", "sea_node"],
"tuples": [
{
"atoms": ["node_11", "node_5"],
"types": ["intrinsic", "intrinsic"]
},
{
"atoms": ["node_11", "node_8"],
"types": ["intrinsic", "intrinsic"]
},
{
"atoms": ["node_5", "node_3"],
"types": ["intrinsic", "intrinsic"]
},
{
"atoms": ["node_8", "node_5"],
"types": ["intrinsic", "intrinsic"]
},
{
"atoms": ["node_8", "node_3"],
"types": ["intrinsic", "intrinsic"]
}
]
},
{
"id": "state_uses",
"name": "StateUses",
"types": ["sea_node", "sea_node"],
"tuples": [
{
"atoms": ["node_1", "node_3"],
"types": ["finish", "intrinsic"]
},
{
"atoms": ["node_1", "node_11"],
"types": ["finish", "intrinsic"]
},
{
"atoms": ["node_1", "node_0"],
"types": ["finish", "start"]
},
{
"atoms": ["node_3", "node_0"],
"types": ["intrinsic", "start"]
},
{
"atoms": ["node_11", "node_8"],
"types": ["intrinsic", "intrinsic"]
},
{
"atoms": ["node_8", "node_0"],
"types": ["intrinsic", "start"]
}
]
}
]
}</pre>`;
window.traces["LOCAL_GET"]["spytial__raw"] += `{
"atoms": [
{
"id": "node_1",
"type": "finish",
"label": "Finish"
},
{
"id": "node_3",
"type": "intrinsic",
"label": "imm_readULEB32 [index]"
},
{
"id": "node_11",
"type": "intrinsic",
"label": "push_Value [eff__94]"
},
{
"id": "node_0",
"type": "start",
"label": "Start"
},
{
"id": "node_5",
"type": "intrinsic",
"label": "f_getLocalType [tv]"
},
{
"id": "node_8",
"type": "intrinsic",
"label": "getLocal [val]"
}
],
"relations": [
{
"id": "uses",
"name": "Uses",
"types": ["sea_node", "sea_node"],
"tuples": [
{
"atoms": ["node_11", "node_5"],
"types": ["intrinsic", "intrinsic"]
},
{
"atoms": ["node_11", "node_8"],
"types": ["intrinsic", "intrinsic"]
},
{
"atoms": ["node_5", "node_3"],
"types": ["intrinsic", "intrinsic"]
},
{
"atoms": ["node_8", "node_5"],
"types": ["intrinsic", "intrinsic"]
},
{
"atoms": ["node_8", "node_3"],
"types": ["intrinsic", "intrinsic"]
}
]
},
{
"id": "state_uses",
"name": "StateUses",
"types": ["sea_node", "sea_node"],
"tuples": [
{
"atoms": ["node_1", "node_3"],
"types": ["finish", "intrinsic"]
},
{
"atoms": ["node_1", "node_11"],
"types": ["finish", "intrinsic"]
},
{
"atoms": ["node_1", "node_0"],
"types": ["finish", "start"]
},
{
"atoms": ["node_3", "node_0"],
"types": ["intrinsic", "start"]
},
{
"atoms": ["node_11", "node_8"],
"types": ["intrinsic", "intrinsic"]
},
{
"atoms": ["node_8", "node_0"],
"types": ["intrinsic", "start"]
}
]
}
]
}`;
window.traces["LOCAL_GET"]["overloadOps"] = ''
window.traces["LOCAL_GET"]["overloadOps__raw"] = ''
window.traces["LOCAL_GET"]["overloadOps"] += `<pre class='graph'>---
config:
  layout: elk
---
graph TD
	1[\\"Finish"/]
	3 -. Codeptr .-> 1
	11 -. Stack .-> 1
	0 -. Trap Locals Globals Tables Memory Extra .-> 1
	0[/"Start"\\]
	11["eff__94 push_Value"]
	5 --> 11
	8 --> 11
	8 -. Stack .-> 11
	8["val getLocal"]
	5 --> 8
	3 --> 8
	0 -. Stack .-> 8
	3["index imm_readULEB32"]
	0 -. Codeptr .-> 3
	5["tv f_getLocalType"]
	3 --> 5
</pre>`;
window.traces["LOCAL_GET"]["overloadOps__raw"] += `---
config:
  layout: elk
---
graph TD
	1[\\"Finish"/]
	3 -. Codeptr .-> 1
	11 -. Stack .-> 1
	0 -. Trap Locals Globals Tables Memory Extra .-> 1
	0[/"Start"\\]
	11["eff__94 push_Value"]
	5 --> 11
	8 --> 11
	8 -. Stack .-> 11
	8["val getLocal"]
	5 --> 8
	3 --> 8
	0 -. Stack .-> 8
	3["index imm_readULEB32"]
	0 -. Codeptr .-> 3
	5["tv f_getLocalType"]
	3 --> 5
`;
window.traces["LOCAL_GET"]["addAbstractions"] = ''
window.traces["LOCAL_GET"]["addAbstractions__raw"] = ''
window.traces["LOCAL_GET"]["addAbstractions"] += `<pre class='graph'>---
config:
  layout: elk
---
graph TD
	1[\\"Finish"/]
	3 -. Codeptr .-> 1
	11 -. Stack .-> 1
	0 -. Trap Locals Globals Tables Memory Extra .-> 1
	0[/"Start"\\]
	11["eff__94 push_Value"]
	5 --> 11
	8 --> 11
	8 -. Stack .-> 11
	8["val getLocal"]
	5 --> 8
	3 --> 8
	0 -. Stack .-> 8
	3["index imm_readULEB32"]
	0 -. Codeptr .-> 3
	5["tv f_getLocalType"]
	3 --> 5
</pre>`;
window.traces["LOCAL_GET"]["addAbstractions__raw"] += `---
config:
  layout: elk
---
graph TD
	1[\\"Finish"/]
	3 -. Codeptr .-> 1
	11 -. Stack .-> 1
	0 -. Trap Locals Globals Tables Memory Extra .-> 1
	0[/"Start"\\]
	11["eff__94 push_Value"]
	5 --> 11
	8 --> 11
	8 -. Stack .-> 11
	8["val getLocal"]
	5 --> 8
	3 --> 8
	0 -. Stack .-> 8
	3["index imm_readULEB32"]
	0 -. Codeptr .-> 3
	5["tv f_getLocalType"]
	3 --> 5
`;
window.traces["LOCAL_GET"]["schedulerMermaid"] = ''
window.traces["LOCAL_GET"]["schedulerMermaid__raw"] = ''
window.traces["LOCAL_GET"]["schedulerMermaid"] += `<pre class='graph'>graph TD
subgraph block_97["Block 97"]
	direction TB
	b97_0[/"Start"\\]
	b97_3["index imm_readULEB32"]
	b97_5["tv f_getLocalType"]
	b97_8["val getLocal"]
	b97_11["eff__94 push_Value"]
	b97_1[\\"Finish"/]
	b97_0 --> b97_3
	b97_3 --> b97_5
	b97_5 --> b97_8
	b97_8 --> b97_11
	b97_11 --> b97_1
end

</pre>`;
window.traces["LOCAL_GET"]["schedulerMermaid__raw"] += `graph TD
subgraph block_97["Block 97"]
	direction TB
	b97_0[/"Start"\\]
	b97_3["index imm_readULEB32"]
	b97_5["tv f_getLocalType"]
	b97_8["val getLocal"]
	b97_11["eff__94 push_Value"]
	b97_1[\\"Finish"/]
	b97_0 --> b97_3
	b97_3 --> b97_5
	b97_5 --> b97_8
	b97_8 --> b97_11
	b97_11 --> b97_1
end

`;
window.traces["LOCAL_GET"]["unLEM"] = ''
window.traces["LOCAL_GET"]["unLEM__raw"] = ''
window.traces["LOCAL_GET"]["unLEM"] += `<pre class='graph'>---
config:
  layout: elk
---
graph TD
	1[\\"Finish"/]
	3 -. Codeptr .-> 1
	11 -. Stack .-> 1
	0 -. Trap Locals Globals Tables Memory Extra .-> 1
	0[/"Start"\\]
	11["eff__94 push_Value"]
	5 --> 11
	8 --> 11
	8 -. Stack .-> 11
	8["val getLocal"]
	5 --> 8
	3 --> 8
	0 -. Stack .-> 8
	3["index imm_readULEB32"]
	0 -. Codeptr .-> 3
	5["tv f_getLocalType"]
	3 --> 5
</pre>`;
window.traces["LOCAL_GET"]["unLEM__raw"] += `---
config:
  layout: elk
---
graph TD
	1[\\"Finish"/]
	3 -. Codeptr .-> 1
	11 -. Stack .-> 1
	0 -. Trap Locals Globals Tables Memory Extra .-> 1
	0[/"Start"\\]
	11["eff__94 push_Value"]
	5 --> 11
	8 --> 11
	8 -. Stack .-> 11
	8["val getLocal"]
	5 --> 8
	3 --> 8
	0 -. Stack .-> 8
	3["index imm_readULEB32"]
	0 -. Codeptr .-> 3
	5["tv f_getLocalType"]
	3 --> 5
`;
window.traces["LOCAL_GET"]["unlem_schedule"] = ''
window.traces["LOCAL_GET"]["unlem_schedule__raw"] = ''
window.traces["LOCAL_GET"]["unlem_schedule"] += `<pre class=''>def index = imm_readULEB32();
def tv = f_getLocalType(index);
def val = getLocal(tv, index);
def eff__94 = push_Value(tv, val);
</pre>`;
window.traces["LOCAL_GET"]["unlem_schedule__raw"] += `def index = imm_readULEB32();
def tv = f_getLocalType(index);
def val = getLocal(tv, index);
def eff__94 = push_Value(tv, val);
`;
window.traces["LOCAL_GET"]["spytial_ul"] = ''
window.traces["LOCAL_GET"]["spytial_ul__raw"] = ''
window.traces["LOCAL_GET"]["spytial_ul"] += `<pre class=''>{
"atoms": [
{
"id": "node_1",
"type": "finish",
"label": "Finish"
},
{
"id": "node_3",
"type": "intrinsic",
"label": "imm_readULEB32 [index]"
},
{
"id": "node_11",
"type": "intrinsic",
"label": "push_Value [eff__94]"
},
{
"id": "node_0",
"type": "start",
"label": "Start"
},
{
"id": "node_5",
"type": "intrinsic",
"label": "f_getLocalType [tv]"
},
{
"id": "node_8",
"type": "intrinsic",
"label": "getLocal [val]"
}
],
"relations": [
{
"id": "uses",
"name": "Uses",
"types": ["sea_node", "sea_node"],
"tuples": [
{
"atoms": ["node_11", "node_5"],
"types": ["intrinsic", "intrinsic"]
},
{
"atoms": ["node_11", "node_8"],
"types": ["intrinsic", "intrinsic"]
},
{
"atoms": ["node_5", "node_3"],
"types": ["intrinsic", "intrinsic"]
},
{
"atoms": ["node_8", "node_5"],
"types": ["intrinsic", "intrinsic"]
},
{
"atoms": ["node_8", "node_3"],
"types": ["intrinsic", "intrinsic"]
}
]
},
{
"id": "state_uses",
"name": "StateUses",
"types": ["sea_node", "sea_node"],
"tuples": [
{
"atoms": ["node_1", "node_3"],
"types": ["finish", "intrinsic"]
},
{
"atoms": ["node_1", "node_11"],
"types": ["finish", "intrinsic"]
},
{
"atoms": ["node_1", "node_0"],
"types": ["finish", "start"]
},
{
"atoms": ["node_3", "node_0"],
"types": ["intrinsic", "start"]
},
{
"atoms": ["node_11", "node_8"],
"types": ["intrinsic", "intrinsic"]
},
{
"atoms": ["node_8", "node_0"],
"types": ["intrinsic", "start"]
}
]
}
]
}</pre>`;
window.traces["LOCAL_GET"]["spytial_ul__raw"] += `{
"atoms": [
{
"id": "node_1",
"type": "finish",
"label": "Finish"
},
{
"id": "node_3",
"type": "intrinsic",
"label": "imm_readULEB32 [index]"
},
{
"id": "node_11",
"type": "intrinsic",
"label": "push_Value [eff__94]"
},
{
"id": "node_0",
"type": "start",
"label": "Start"
},
{
"id": "node_5",
"type": "intrinsic",
"label": "f_getLocalType [tv]"
},
{
"id": "node_8",
"type": "intrinsic",
"label": "getLocal [val]"
}
],
"relations": [
{
"id": "uses",
"name": "Uses",
"types": ["sea_node", "sea_node"],
"tuples": [
{
"atoms": ["node_11", "node_5"],
"types": ["intrinsic", "intrinsic"]
},
{
"atoms": ["node_11", "node_8"],
"types": ["intrinsic", "intrinsic"]
},
{
"atoms": ["node_5", "node_3"],
"types": ["intrinsic", "intrinsic"]
},
{
"atoms": ["node_8", "node_5"],
"types": ["intrinsic", "intrinsic"]
},
{
"atoms": ["node_8", "node_3"],
"types": ["intrinsic", "intrinsic"]
}
]
},
{
"id": "state_uses",
"name": "StateUses",
"types": ["sea_node", "sea_node"],
"tuples": [
{
"atoms": ["node_1", "node_3"],
"types": ["finish", "intrinsic"]
},
{
"atoms": ["node_1", "node_11"],
"types": ["finish", "intrinsic"]
},
{
"atoms": ["node_1", "node_0"],
"types": ["finish", "start"]
},
{
"atoms": ["node_3", "node_0"],
"types": ["intrinsic", "start"]
},
{
"atoms": ["node_11", "node_8"],
"types": ["intrinsic", "intrinsic"]
},
{
"atoms": ["node_8", "node_0"],
"types": ["intrinsic", "start"]
}
]
}
]
}`;
window.traces["LOCAL_GET"]["unlem_scheduler"] = ''
window.traces["LOCAL_GET"]["unlem_scheduler__raw"] = ''
window.traces["LOCAL_GET"]["unlem_scheduler"] += `<pre class='graph'>graph TD
subgraph block_98["Block 98"]
	direction TB
	b98_0[/"Start"\\]
	b98_3["index imm_readULEB32"]
	b98_5["tv f_getLocalType"]
	b98_8["val getLocal"]
	b98_11["eff__94 push_Value"]
	b98_1[\\"Finish"/]
	b98_0 --> b98_3
	b98_3 --> b98_5
	b98_5 --> b98_8
	b98_8 --> b98_11
	b98_11 --> b98_1
end

</pre>`;
window.traces["LOCAL_GET"]["unlem_scheduler__raw"] += `graph TD
subgraph block_98["Block 98"]
	direction TB
	b98_0[/"Start"\\]
	b98_3["index imm_readULEB32"]
	b98_5["tv f_getLocalType"]
	b98_8["val getLocal"]
	b98_11["eff__94 push_Value"]
	b98_1[\\"Finish"/]
	b98_0 --> b98_3
	b98_3 --> b98_5
	b98_5 --> b98_8
	b98_8 --> b98_11
	b98_11 --> b98_1
end

`;
window.traces["LOCAL_GET"]["unlem_pretty"] = ''
window.traces["LOCAL_GET"]["unlem_pretty__raw"] = ''
window.traces["LOCAL_GET"]["unlem_pretty"] += `<pre class=''>def index = imm_readULEB32();
def tv = f_getLocalType(index);
def val = getLocal(tv, index);
push_Value(tv, val);
</pre>`;
window.traces["LOCAL_GET"]["unlem_pretty__raw"] += `def index = imm_readULEB32();
def tv = f_getLocalType(index);
def val = getLocal(tv, index);
push_Value(tv, val);
`;
window.traces["LOCAL_GET"]["constUnLEM"] = ''
window.traces["LOCAL_GET"]["constUnLEM__raw"] = ''
window.traces["LOCAL_GET"]["constUnLEM"] += `<pre class='graph'>---
config:
  layout: elk
---
graph TD
	1[\\"Finish"/]
	3 -. Codeptr .-> 1
	11 -. Stack .-> 1
	0 -. Trap Locals Globals Tables Memory Extra .-> 1
	0[/"Start"\\]
	11["eff__94 push_Value"]
	5 --> 11
	8 --> 11
	8 -. Stack .-> 11
	8["val getLocal"]
	5 --> 8
	3 --> 8
	0 -. Stack .-> 8
	3["index imm_readULEB32"]
	0 -. Codeptr .-> 3
	5["tv f_getLocalType"]
	3 --> 5
</pre>`;
window.traces["LOCAL_GET"]["constUnLEM__raw"] += `---
config:
  layout: elk
---
graph TD
	1[\\"Finish"/]
	3 -. Codeptr .-> 1
	11 -. Stack .-> 1
	0 -. Trap Locals Globals Tables Memory Extra .-> 1
	0[/"Start"\\]
	11["eff__94 push_Value"]
	5 --> 11
	8 --> 11
	8 -. Stack .-> 11
	8["val getLocal"]
	5 --> 8
	3 --> 8
	0 -. Stack .-> 8
	3["index imm_readULEB32"]
	0 -. Codeptr .-> 3
	5["tv f_getLocalType"]
	3 --> 5
`;
window.traces["LOCAL_GET"]["chooseMerge"] = ''
window.traces["LOCAL_GET"]["chooseMerge__raw"] = ''
window.traces["LOCAL_GET"]["chooseMerge"] += `<pre class='graph'>---
config:
  layout: elk
---
graph TD
	1[\\"Finish"/]
	3 -. Codeptr .-> 1
	11 -. Stack .-> 1
	0 -. Trap Locals Globals Tables Memory Extra .-> 1
	0[/"Start"\\]
	11["eff__94 push_Value"]
	5 --> 11
	8 --> 11
	8 -. Stack .-> 11
	8["val getLocal"]
	5 --> 8
	3 --> 8
	0 -. Stack .-> 8
	3["index imm_readULEB32"]
	0 -. Codeptr .-> 3
	5["tv f_getLocalType"]
	3 --> 5
</pre>`;
window.traces["LOCAL_GET"]["chooseMerge__raw"] += `---
config:
  layout: elk
---
graph TD
	1[\\"Finish"/]
	3 -. Codeptr .-> 1
	11 -. Stack .-> 1
	0 -. Trap Locals Globals Tables Memory Extra .-> 1
	0[/"Start"\\]
	11["eff__94 push_Value"]
	5 --> 11
	8 --> 11
	8 -. Stack .-> 11
	8["val getLocal"]
	5 --> 8
	3 --> 8
	0 -. Stack .-> 8
	3["index imm_readULEB32"]
	0 -. Codeptr .-> 3
	5["tv f_getLocalType"]
	3 --> 5
`;
window.traces["LOCAL_GET"]["scheduled"] = ''
window.traces["LOCAL_GET"]["scheduled__raw"] = ''
window.traces["LOCAL_GET"]["scheduled"] += `<pre class=''>def index = imm_readULEB32();
def tv = f_getLocalType(index);
def val = getLocal(tv, index);
def eff__94 = push_Value(tv, val);
</pre>`;
window.traces["LOCAL_GET"]["scheduled__raw"] += `def index = imm_readULEB32();
def tv = f_getLocalType(index);
def val = getLocal(tv, index);
def eff__94 = push_Value(tv, val);
`;
window.traces["LOCAL_GET"]["pretty"] = ''
window.traces["LOCAL_GET"]["pretty__raw"] = ''
window.traces["LOCAL_GET"]["pretty"] += `<pre class=''>def index = imm_readULEB32();
def tv = f_getLocalType(index);
def val = getLocal(tv, index);
push_Value(tv, val);
</pre>`;
window.traces["LOCAL_GET"]["pretty__raw"] += `def index = imm_readULEB32();
def tv = f_getLocalType(index);
def val = getLocal(tv, index);
push_Value(tv, val);
`;
window.traces["LOCAL_SET"] = {}
window.traces["LOCAL_SET"]["parsed"] = ''
window.traces["LOCAL_SET"]["parsed__raw"] = ''
window.traces["LOCAL_SET"]["parsed"] += `<pre class=''>def index = imm_readULEB32();
def arg__105 = (index);
def tv = f_getLocalType(arg__105);
def arg__104 = (tv);
def val = pop_Value(arg__104);
def arg__103 = (val);
def arg__102 = (index);
def arg__101 = (tv);
def eff__100 = setLocal(arg__101, arg__102, arg__103);
</pre>`;
window.traces["LOCAL_SET"]["parsed__raw"] += `def index = imm_readULEB32();
def arg__105 = (index);
def tv = f_getLocalType(arg__105);
def arg__104 = (tv);
def val = pop_Value(arg__104);
def arg__103 = (val);
def arg__102 = (index);
def arg__101 = (tv);
def eff__100 = setLocal(arg__101, arg__102, arg__103);
`;
window.traces["LOCAL_SET"]["raw"] = ''
window.traces["LOCAL_SET"]["raw__raw"] = ''
window.traces["LOCAL_SET"]["raw"] += `<pre class='graph'>---
config:
  layout: elk
---
graph TD
	1[\\"Finish"/]
	3 -. Codeptr .-> 1
	7 -. Stack .-> 1
	0 -. Trap Globals Tables Memory Extra .-> 1
	11 -. Locals .-> 1
	11["eff__100 setLocal"]
	5 --> 11
	3 --> 11
	7 --> 11
	0 -. Locals .-> 11
	0[/"Start"\\]
	7["val pop_Value"]
	5 --> 7
	0 -. Stack .-> 7
	5["tv f_getLocalType"]
	3 --> 5
	3["index imm_readULEB32"]
	0 -. Codeptr .-> 3
</pre>`;
window.traces["LOCAL_SET"]["raw__raw"] += `---
config:
  layout: elk
---
graph TD
	1[\\"Finish"/]
	3 -. Codeptr .-> 1
	7 -. Stack .-> 1
	0 -. Trap Globals Tables Memory Extra .-> 1
	11 -. Locals .-> 1
	11["eff__100 setLocal"]
	5 --> 11
	3 --> 11
	7 --> 11
	0 -. Locals .-> 11
	0[/"Start"\\]
	7["val pop_Value"]
	5 --> 7
	0 -. Stack .-> 7
	5["tv f_getLocalType"]
	3 --> 5
	3["index imm_readULEB32"]
	0 -. Codeptr .-> 3
`;
window.traces["LOCAL_SET"]["spytial"] = ''
window.traces["LOCAL_SET"]["spytial__raw"] = ''
window.traces["LOCAL_SET"]["spytial"] += `<pre class=''>{
"atoms": [
{
"id": "node_1",
"type": "finish",
"label": "Finish"
},
{
"id": "node_3",
"type": "intrinsic",
"label": "imm_readULEB32 [index]"
},
{
"id": "node_7",
"type": "intrinsic",
"label": "pop_Value [val]"
},
{
"id": "node_0",
"type": "start",
"label": "Start"
},
{
"id": "node_11",
"type": "intrinsic",
"label": "setLocal [eff__100]"
},
{
"id": "node_5",
"type": "intrinsic",
"label": "f_getLocalType [tv]"
}
],
"relations": [
{
"id": "uses",
"name": "Uses",
"types": ["sea_node", "sea_node"],
"tuples": [
{
"atoms": ["node_7", "node_5"],
"types": ["intrinsic", "intrinsic"]
},
{
"atoms": ["node_11", "node_5"],
"types": ["intrinsic", "intrinsic"]
},
{
"atoms": ["node_11", "node_3"],
"types": ["intrinsic", "intrinsic"]
},
{
"atoms": ["node_11", "node_7"],
"types": ["intrinsic", "intrinsic"]
},
{
"atoms": ["node_5", "node_3"],
"types": ["intrinsic", "intrinsic"]
}
]
},
{
"id": "state_uses",
"name": "StateUses",
"types": ["sea_node", "sea_node"],
"tuples": [
{
"atoms": ["node_1", "node_3"],
"types": ["finish", "intrinsic"]
},
{
"atoms": ["node_1", "node_7"],
"types": ["finish", "intrinsic"]
},
{
"atoms": ["node_1", "node_0"],
"types": ["finish", "start"]
},
{
"atoms": ["node_1", "node_11"],
"types": ["finish", "intrinsic"]
},
{
"atoms": ["node_3", "node_0"],
"types": ["intrinsic", "start"]
},
{
"atoms": ["node_7", "node_0"],
"types": ["intrinsic", "start"]
},
{
"atoms": ["node_11", "node_0"],
"types": ["intrinsic", "start"]
}
]
}
]
}</pre>`;
window.traces["LOCAL_SET"]["spytial__raw"] += `{
"atoms": [
{
"id": "node_1",
"type": "finish",
"label": "Finish"
},
{
"id": "node_3",
"type": "intrinsic",
"label": "imm_readULEB32 [index]"
},
{
"id": "node_7",
"type": "intrinsic",
"label": "pop_Value [val]"
},
{
"id": "node_0",
"type": "start",
"label": "Start"
},
{
"id": "node_11",
"type": "intrinsic",
"label": "setLocal [eff__100]"
},
{
"id": "node_5",
"type": "intrinsic",
"label": "f_getLocalType [tv]"
}
],
"relations": [
{
"id": "uses",
"name": "Uses",
"types": ["sea_node", "sea_node"],
"tuples": [
{
"atoms": ["node_7", "node_5"],
"types": ["intrinsic", "intrinsic"]
},
{
"atoms": ["node_11", "node_5"],
"types": ["intrinsic", "intrinsic"]
},
{
"atoms": ["node_11", "node_3"],
"types": ["intrinsic", "intrinsic"]
},
{
"atoms": ["node_11", "node_7"],
"types": ["intrinsic", "intrinsic"]
},
{
"atoms": ["node_5", "node_3"],
"types": ["intrinsic", "intrinsic"]
}
]
},
{
"id": "state_uses",
"name": "StateUses",
"types": ["sea_node", "sea_node"],
"tuples": [
{
"atoms": ["node_1", "node_3"],
"types": ["finish", "intrinsic"]
},
{
"atoms": ["node_1", "node_7"],
"types": ["finish", "intrinsic"]
},
{
"atoms": ["node_1", "node_0"],
"types": ["finish", "start"]
},
{
"atoms": ["node_1", "node_11"],
"types": ["finish", "intrinsic"]
},
{
"atoms": ["node_3", "node_0"],
"types": ["intrinsic", "start"]
},
{
"atoms": ["node_7", "node_0"],
"types": ["intrinsic", "start"]
},
{
"atoms": ["node_11", "node_0"],
"types": ["intrinsic", "start"]
}
]
}
]
}`;
window.traces["LOCAL_SET"]["overloadOps"] = ''
window.traces["LOCAL_SET"]["overloadOps__raw"] = ''
window.traces["LOCAL_SET"]["overloadOps"] += `<pre class='graph'>---
config:
  layout: elk
---
graph TD
	1[\\"Finish"/]
	3 -. Codeptr .-> 1
	7 -. Stack .-> 1
	0 -. Trap Globals Tables Memory Extra .-> 1
	11 -. Locals .-> 1
	11["eff__100 setLocal"]
	5 --> 11
	3 --> 11
	7 --> 11
	0 -. Locals .-> 11
	0[/"Start"\\]
	7["val pop_Value"]
	5 --> 7
	0 -. Stack .-> 7
	5["tv f_getLocalType"]
	3 --> 5
	3["index imm_readULEB32"]
	0 -. Codeptr .-> 3
</pre>`;
window.traces["LOCAL_SET"]["overloadOps__raw"] += `---
config:
  layout: elk
---
graph TD
	1[\\"Finish"/]
	3 -. Codeptr .-> 1
	7 -. Stack .-> 1
	0 -. Trap Globals Tables Memory Extra .-> 1
	11 -. Locals .-> 1
	11["eff__100 setLocal"]
	5 --> 11
	3 --> 11
	7 --> 11
	0 -. Locals .-> 11
	0[/"Start"\\]
	7["val pop_Value"]
	5 --> 7
	0 -. Stack .-> 7
	5["tv f_getLocalType"]
	3 --> 5
	3["index imm_readULEB32"]
	0 -. Codeptr .-> 3
`;
window.traces["LOCAL_SET"]["addAbstractions"] = ''
window.traces["LOCAL_SET"]["addAbstractions__raw"] = ''
window.traces["LOCAL_SET"]["addAbstractions"] += `<pre class='graph'>---
config:
  layout: elk
---
graph TD
	1[\\"Finish"/]
	3 -. Codeptr .-> 1
	7 -. Stack .-> 1
	0 -. Trap Globals Tables Memory Extra .-> 1
	11 -. Locals .-> 1
	11["eff__100 setLocal"]
	5 --> 11
	3 --> 11
	7 --> 11
	0 -. Locals .-> 11
	0[/"Start"\\]
	7["val pop_Value"]
	5 --> 7
	0 -. Stack .-> 7
	5["tv f_getLocalType"]
	3 --> 5
	3["index imm_readULEB32"]
	0 -. Codeptr .-> 3
</pre>`;
window.traces["LOCAL_SET"]["addAbstractions__raw"] += `---
config:
  layout: elk
---
graph TD
	1[\\"Finish"/]
	3 -. Codeptr .-> 1
	7 -. Stack .-> 1
	0 -. Trap Globals Tables Memory Extra .-> 1
	11 -. Locals .-> 1
	11["eff__100 setLocal"]
	5 --> 11
	3 --> 11
	7 --> 11
	0 -. Locals .-> 11
	0[/"Start"\\]
	7["val pop_Value"]
	5 --> 7
	0 -. Stack .-> 7
	5["tv f_getLocalType"]
	3 --> 5
	3["index imm_readULEB32"]
	0 -. Codeptr .-> 3
`;
window.traces["LOCAL_SET"]["schedulerMermaid"] = ''
window.traces["LOCAL_SET"]["schedulerMermaid__raw"] = ''
window.traces["LOCAL_SET"]["schedulerMermaid"] += `<pre class='graph'>graph TD
subgraph block_99["Block 99"]
	direction TB
	b99_0[/"Start"\\]
	b99_3["index imm_readULEB32"]
	b99_5["tv f_getLocalType"]
	b99_7["val pop_Value"]
	b99_11["eff__100 setLocal"]
	b99_1[\\"Finish"/]
	b99_0 --> b99_3
	b99_3 --> b99_5
	b99_5 --> b99_7
	b99_7 --> b99_11
	b99_11 --> b99_1
end

</pre>`;
window.traces["LOCAL_SET"]["schedulerMermaid__raw"] += `graph TD
subgraph block_99["Block 99"]
	direction TB
	b99_0[/"Start"\\]
	b99_3["index imm_readULEB32"]
	b99_5["tv f_getLocalType"]
	b99_7["val pop_Value"]
	b99_11["eff__100 setLocal"]
	b99_1[\\"Finish"/]
	b99_0 --> b99_3
	b99_3 --> b99_5
	b99_5 --> b99_7
	b99_7 --> b99_11
	b99_11 --> b99_1
end

`;
window.traces["LOCAL_SET"]["unLEM"] = ''
window.traces["LOCAL_SET"]["unLEM__raw"] = ''
window.traces["LOCAL_SET"]["unLEM"] += `<pre class='graph'>---
config:
  layout: elk
---
graph TD
	1[\\"Finish"/]
	3 -. Codeptr .-> 1
	7 -. Stack .-> 1
	0 -. Trap Globals Tables Memory Extra .-> 1
	11 -. Locals .-> 1
	11["eff__100 setLocal"]
	5 --> 11
	3 --> 11
	7 --> 11
	0 -. Locals .-> 11
	0[/"Start"\\]
	7["val pop_Value"]
	5 --> 7
	0 -. Stack .-> 7
	5["tv f_getLocalType"]
	3 --> 5
	3["index imm_readULEB32"]
	0 -. Codeptr .-> 3
</pre>`;
window.traces["LOCAL_SET"]["unLEM__raw"] += `---
config:
  layout: elk
---
graph TD
	1[\\"Finish"/]
	3 -. Codeptr .-> 1
	7 -. Stack .-> 1
	0 -. Trap Globals Tables Memory Extra .-> 1
	11 -. Locals .-> 1
	11["eff__100 setLocal"]
	5 --> 11
	3 --> 11
	7 --> 11
	0 -. Locals .-> 11
	0[/"Start"\\]
	7["val pop_Value"]
	5 --> 7
	0 -. Stack .-> 7
	5["tv f_getLocalType"]
	3 --> 5
	3["index imm_readULEB32"]
	0 -. Codeptr .-> 3
`;
window.traces["LOCAL_SET"]["unlem_schedule"] = ''
window.traces["LOCAL_SET"]["unlem_schedule__raw"] = ''
window.traces["LOCAL_SET"]["unlem_schedule"] += `<pre class=''>def index = imm_readULEB32();
def tv = f_getLocalType(index);
def val = pop_Value(tv);
def eff__100 = setLocal(tv, index, val);
</pre>`;
window.traces["LOCAL_SET"]["unlem_schedule__raw"] += `def index = imm_readULEB32();
def tv = f_getLocalType(index);
def val = pop_Value(tv);
def eff__100 = setLocal(tv, index, val);
`;
window.traces["LOCAL_SET"]["spytial_ul"] = ''
window.traces["LOCAL_SET"]["spytial_ul__raw"] = ''
window.traces["LOCAL_SET"]["spytial_ul"] += `<pre class=''>{
"atoms": [
{
"id": "node_1",
"type": "finish",
"label": "Finish"
},
{
"id": "node_3",
"type": "intrinsic",
"label": "imm_readULEB32 [index]"
},
{
"id": "node_7",
"type": "intrinsic",
"label": "pop_Value [val]"
},
{
"id": "node_0",
"type": "start",
"label": "Start"
},
{
"id": "node_11",
"type": "intrinsic",
"label": "setLocal [eff__100]"
},
{
"id": "node_5",
"type": "intrinsic",
"label": "f_getLocalType [tv]"
}
],
"relations": [
{
"id": "uses",
"name": "Uses",
"types": ["sea_node", "sea_node"],
"tuples": [
{
"atoms": ["node_7", "node_5"],
"types": ["intrinsic", "intrinsic"]
},
{
"atoms": ["node_11", "node_5"],
"types": ["intrinsic", "intrinsic"]
},
{
"atoms": ["node_11", "node_3"],
"types": ["intrinsic", "intrinsic"]
},
{
"atoms": ["node_11", "node_7"],
"types": ["intrinsic", "intrinsic"]
},
{
"atoms": ["node_5", "node_3"],
"types": ["intrinsic", "intrinsic"]
}
]
},
{
"id": "state_uses",
"name": "StateUses",
"types": ["sea_node", "sea_node"],
"tuples": [
{
"atoms": ["node_1", "node_3"],
"types": ["finish", "intrinsic"]
},
{
"atoms": ["node_1", "node_7"],
"types": ["finish", "intrinsic"]
},
{
"atoms": ["node_1", "node_0"],
"types": ["finish", "start"]
},
{
"atoms": ["node_1", "node_11"],
"types": ["finish", "intrinsic"]
},
{
"atoms": ["node_3", "node_0"],
"types": ["intrinsic", "start"]
},
{
"atoms": ["node_7", "node_0"],
"types": ["intrinsic", "start"]
},
{
"atoms": ["node_11", "node_0"],
"types": ["intrinsic", "start"]
}
]
}
]
}</pre>`;
window.traces["LOCAL_SET"]["spytial_ul__raw"] += `{
"atoms": [
{
"id": "node_1",
"type": "finish",
"label": "Finish"
},
{
"id": "node_3",
"type": "intrinsic",
"label": "imm_readULEB32 [index]"
},
{
"id": "node_7",
"type": "intrinsic",
"label": "pop_Value [val]"
},
{
"id": "node_0",
"type": "start",
"label": "Start"
},
{
"id": "node_11",
"type": "intrinsic",
"label": "setLocal [eff__100]"
},
{
"id": "node_5",
"type": "intrinsic",
"label": "f_getLocalType [tv]"
}
],
"relations": [
{
"id": "uses",
"name": "Uses",
"types": ["sea_node", "sea_node"],
"tuples": [
{
"atoms": ["node_7", "node_5"],
"types": ["intrinsic", "intrinsic"]
},
{
"atoms": ["node_11", "node_5"],
"types": ["intrinsic", "intrinsic"]
},
{
"atoms": ["node_11", "node_3"],
"types": ["intrinsic", "intrinsic"]
},
{
"atoms": ["node_11", "node_7"],
"types": ["intrinsic", "intrinsic"]
},
{
"atoms": ["node_5", "node_3"],
"types": ["intrinsic", "intrinsic"]
}
]
},
{
"id": "state_uses",
"name": "StateUses",
"types": ["sea_node", "sea_node"],
"tuples": [
{
"atoms": ["node_1", "node_3"],
"types": ["finish", "intrinsic"]
},
{
"atoms": ["node_1", "node_7"],
"types": ["finish", "intrinsic"]
},
{
"atoms": ["node_1", "node_0"],
"types": ["finish", "start"]
},
{
"atoms": ["node_1", "node_11"],
"types": ["finish", "intrinsic"]
},
{
"atoms": ["node_3", "node_0"],
"types": ["intrinsic", "start"]
},
{
"atoms": ["node_7", "node_0"],
"types": ["intrinsic", "start"]
},
{
"atoms": ["node_11", "node_0"],
"types": ["intrinsic", "start"]
}
]
}
]
}`;
window.traces["LOCAL_SET"]["unlem_scheduler"] = ''
window.traces["LOCAL_SET"]["unlem_scheduler__raw"] = ''
window.traces["LOCAL_SET"]["unlem_scheduler"] += `<pre class='graph'>graph TD
subgraph block_100["Block 100"]
	direction TB
	b100_0[/"Start"\\]
	b100_3["index imm_readULEB32"]
	b100_5["tv f_getLocalType"]
	b100_7["val pop_Value"]
	b100_11["eff__100 setLocal"]
	b100_1[\\"Finish"/]
	b100_0 --> b100_3
	b100_3 --> b100_5
	b100_5 --> b100_7
	b100_7 --> b100_11
	b100_11 --> b100_1
end

</pre>`;
window.traces["LOCAL_SET"]["unlem_scheduler__raw"] += `graph TD
subgraph block_100["Block 100"]
	direction TB
	b100_0[/"Start"\\]
	b100_3["index imm_readULEB32"]
	b100_5["tv f_getLocalType"]
	b100_7["val pop_Value"]
	b100_11["eff__100 setLocal"]
	b100_1[\\"Finish"/]
	b100_0 --> b100_3
	b100_3 --> b100_5
	b100_5 --> b100_7
	b100_7 --> b100_11
	b100_11 --> b100_1
end

`;
window.traces["LOCAL_SET"]["unlem_pretty"] = ''
window.traces["LOCAL_SET"]["unlem_pretty__raw"] = ''
window.traces["LOCAL_SET"]["unlem_pretty"] += `<pre class=''>def index = imm_readULEB32();
def tv = f_getLocalType(index);
def val = pop_Value(tv);
setLocal(tv, index, val);
</pre>`;
window.traces["LOCAL_SET"]["unlem_pretty__raw"] += `def index = imm_readULEB32();
def tv = f_getLocalType(index);
def val = pop_Value(tv);
setLocal(tv, index, val);
`;
window.traces["LOCAL_SET"]["constUnLEM"] = ''
window.traces["LOCAL_SET"]["constUnLEM__raw"] = ''
window.traces["LOCAL_SET"]["constUnLEM"] += `<pre class='graph'>---
config:
  layout: elk
---
graph TD
	1[\\"Finish"/]
	3 -. Codeptr .-> 1
	7 -. Stack .-> 1
	0 -. Trap Globals Tables Memory Extra .-> 1
	11 -. Locals .-> 1
	11["eff__100 setLocal"]
	5 --> 11
	3 --> 11
	7 --> 11
	0 -. Locals .-> 11
	0[/"Start"\\]
	7["val pop_Value"]
	5 --> 7
	0 -. Stack .-> 7
	5["tv f_getLocalType"]
	3 --> 5
	3["index imm_readULEB32"]
	0 -. Codeptr .-> 3
</pre>`;
window.traces["LOCAL_SET"]["constUnLEM__raw"] += `---
config:
  layout: elk
---
graph TD
	1[\\"Finish"/]
	3 -. Codeptr .-> 1
	7 -. Stack .-> 1
	0 -. Trap Globals Tables Memory Extra .-> 1
	11 -. Locals .-> 1
	11["eff__100 setLocal"]
	5 --> 11
	3 --> 11
	7 --> 11
	0 -. Locals .-> 11
	0[/"Start"\\]
	7["val pop_Value"]
	5 --> 7
	0 -. Stack .-> 7
	5["tv f_getLocalType"]
	3 --> 5
	3["index imm_readULEB32"]
	0 -. Codeptr .-> 3
`;
window.traces["LOCAL_SET"]["chooseMerge"] = ''
window.traces["LOCAL_SET"]["chooseMerge__raw"] = ''
window.traces["LOCAL_SET"]["chooseMerge"] += `<pre class='graph'>---
config:
  layout: elk
---
graph TD
	1[\\"Finish"/]
	3 -. Codeptr .-> 1
	7 -. Stack .-> 1
	0 -. Trap Globals Tables Memory Extra .-> 1
	11 -. Locals .-> 1
	11["eff__100 setLocal"]
	5 --> 11
	3 --> 11
	7 --> 11
	0 -. Locals .-> 11
	0[/"Start"\\]
	7["val pop_Value"]
	5 --> 7
	0 -. Stack .-> 7
	5["tv f_getLocalType"]
	3 --> 5
	3["index imm_readULEB32"]
	0 -. Codeptr .-> 3
</pre>`;
window.traces["LOCAL_SET"]["chooseMerge__raw"] += `---
config:
  layout: elk
---
graph TD
	1[\\"Finish"/]
	3 -. Codeptr .-> 1
	7 -. Stack .-> 1
	0 -. Trap Globals Tables Memory Extra .-> 1
	11 -. Locals .-> 1
	11["eff__100 setLocal"]
	5 --> 11
	3 --> 11
	7 --> 11
	0 -. Locals .-> 11
	0[/"Start"\\]
	7["val pop_Value"]
	5 --> 7
	0 -. Stack .-> 7
	5["tv f_getLocalType"]
	3 --> 5
	3["index imm_readULEB32"]
	0 -. Codeptr .-> 3
`;
window.traces["LOCAL_SET"]["scheduled"] = ''
window.traces["LOCAL_SET"]["scheduled__raw"] = ''
window.traces["LOCAL_SET"]["scheduled"] += `<pre class=''>def index = imm_readULEB32();
def tv = f_getLocalType(index);
def val = pop_Value(tv);
def eff__100 = setLocal(tv, index, val);
</pre>`;
window.traces["LOCAL_SET"]["scheduled__raw"] += `def index = imm_readULEB32();
def tv = f_getLocalType(index);
def val = pop_Value(tv);
def eff__100 = setLocal(tv, index, val);
`;
window.traces["LOCAL_SET"]["pretty"] = ''
window.traces["LOCAL_SET"]["pretty__raw"] = ''
window.traces["LOCAL_SET"]["pretty"] += `<pre class=''>def index = imm_readULEB32();
def tv = f_getLocalType(index);
def val = pop_Value(tv);
setLocal(tv, index, val);
</pre>`;
window.traces["LOCAL_SET"]["pretty__raw"] += `def index = imm_readULEB32();
def tv = f_getLocalType(index);
def val = pop_Value(tv);
setLocal(tv, index, val);
`;
window.traces["LOCAL_TEE"] = {}
window.traces["LOCAL_TEE"]["parsed"] = ''
window.traces["LOCAL_TEE"]["parsed__raw"] = ''
window.traces["LOCAL_TEE"]["parsed"] += `<pre class=''>def index = imm_readULEB32();
def arg__114 = (index);
def tv = f_getLocalType(arg__114);
def arg__113 = (tv);
def val = pop_Value(arg__113);
def arg__112 = (val);
def arg__111 = (index);
def arg__110 = (tv);
def eff__109 = setLocal(arg__110, arg__111, arg__112);
def arg__108 = (val);
def arg__107 = (tv);
def eff__106 = push_Value(arg__107, arg__108);
</pre>`;
window.traces["LOCAL_TEE"]["parsed__raw"] += `def index = imm_readULEB32();
def arg__114 = (index);
def tv = f_getLocalType(arg__114);
def arg__113 = (tv);
def val = pop_Value(arg__113);
def arg__112 = (val);
def arg__111 = (index);
def arg__110 = (tv);
def eff__109 = setLocal(arg__110, arg__111, arg__112);
def arg__108 = (val);
def arg__107 = (tv);
def eff__106 = push_Value(arg__107, arg__108);
`;
window.traces["LOCAL_TEE"]["raw"] = ''
window.traces["LOCAL_TEE"]["raw__raw"] = ''
window.traces["LOCAL_TEE"]["raw"] += `<pre class='graph'>---
config:
  layout: elk
---
graph TD
	1[\\"Finish"/]
	3 -. Codeptr .-> 1
	14 -. Stack .-> 1
	0 -. Trap Globals Tables Memory Extra .-> 1
	11 -. Locals .-> 1
	11["eff__109 setLocal"]
	5 --> 11
	3 --> 11
	7 --> 11
	0 -. Locals .-> 11
	0[/"Start"\\]
	7["val pop_Value"]
	5 --> 7
	0 -. Stack .-> 7
	5["tv f_getLocalType"]
	3 --> 5
	3["index imm_readULEB32"]
	0 -. Codeptr .-> 3
	14["eff__106 push_Value"]
	5 --> 14
	7 --> 14
	7 -. Stack .-> 14
</pre>`;
window.traces["LOCAL_TEE"]["raw__raw"] += `---
config:
  layout: elk
---
graph TD
	1[\\"Finish"/]
	3 -. Codeptr .-> 1
	14 -. Stack .-> 1
	0 -. Trap Globals Tables Memory Extra .-> 1
	11 -. Locals .-> 1
	11["eff__109 setLocal"]
	5 --> 11
	3 --> 11
	7 --> 11
	0 -. Locals .-> 11
	0[/"Start"\\]
	7["val pop_Value"]
	5 --> 7
	0 -. Stack .-> 7
	5["tv f_getLocalType"]
	3 --> 5
	3["index imm_readULEB32"]
	0 -. Codeptr .-> 3
	14["eff__106 push_Value"]
	5 --> 14
	7 --> 14
	7 -. Stack .-> 14
`;
window.traces["LOCAL_TEE"]["spytial"] = ''
window.traces["LOCAL_TEE"]["spytial__raw"] = ''
window.traces["LOCAL_TEE"]["spytial"] += `<pre class=''>{
"atoms": [
{
"id": "node_1",
"type": "finish",
"label": "Finish"
},
{
"id": "node_3",
"type": "intrinsic",
"label": "imm_readULEB32 [index]"
},
{
"id": "node_14",
"type": "intrinsic",
"label": "push_Value [eff__106]"
},
{
"id": "node_0",
"type": "start",
"label": "Start"
},
{
"id": "node_11",
"type": "intrinsic",
"label": "setLocal [eff__109]"
},
{
"id": "node_5",
"type": "intrinsic",
"label": "f_getLocalType [tv]"
},
{
"id": "node_7",
"type": "intrinsic",
"label": "pop_Value [val]"
}
],
"relations": [
{
"id": "uses",
"name": "Uses",
"types": ["sea_node", "sea_node"],
"tuples": [
{
"atoms": ["node_14", "node_5"],
"types": ["intrinsic", "intrinsic"]
},
{
"atoms": ["node_14", "node_7"],
"types": ["intrinsic", "intrinsic"]
},
{
"atoms": ["node_11", "node_5"],
"types": ["intrinsic", "intrinsic"]
},
{
"atoms": ["node_11", "node_3"],
"types": ["intrinsic", "intrinsic"]
},
{
"atoms": ["node_11", "node_7"],
"types": ["intrinsic", "intrinsic"]
},
{
"atoms": ["node_5", "node_3"],
"types": ["intrinsic", "intrinsic"]
},
{
"atoms": ["node_7", "node_5"],
"types": ["intrinsic", "intrinsic"]
}
]
},
{
"id": "state_uses",
"name": "StateUses",
"types": ["sea_node", "sea_node"],
"tuples": [
{
"atoms": ["node_1", "node_3"],
"types": ["finish", "intrinsic"]
},
{
"atoms": ["node_1", "node_14"],
"types": ["finish", "intrinsic"]
},
{
"atoms": ["node_1", "node_0"],
"types": ["finish", "start"]
},
{
"atoms": ["node_1", "node_11"],
"types": ["finish", "intrinsic"]
},
{
"atoms": ["node_3", "node_0"],
"types": ["intrinsic", "start"]
},
{
"atoms": ["node_14", "node_7"],
"types": ["intrinsic", "intrinsic"]
},
{
"atoms": ["node_11", "node_0"],
"types": ["intrinsic", "start"]
},
{
"atoms": ["node_7", "node_0"],
"types": ["intrinsic", "start"]
}
]
}
]
}</pre>`;
window.traces["LOCAL_TEE"]["spytial__raw"] += `{
"atoms": [
{
"id": "node_1",
"type": "finish",
"label": "Finish"
},
{
"id": "node_3",
"type": "intrinsic",
"label": "imm_readULEB32 [index]"
},
{
"id": "node_14",
"type": "intrinsic",
"label": "push_Value [eff__106]"
},
{
"id": "node_0",
"type": "start",
"label": "Start"
},
{
"id": "node_11",
"type": "intrinsic",
"label": "setLocal [eff__109]"
},
{
"id": "node_5",
"type": "intrinsic",
"label": "f_getLocalType [tv]"
},
{
"id": "node_7",
"type": "intrinsic",
"label": "pop_Value [val]"
}
],
"relations": [
{
"id": "uses",
"name": "Uses",
"types": ["sea_node", "sea_node"],
"tuples": [
{
"atoms": ["node_14", "node_5"],
"types": ["intrinsic", "intrinsic"]
},
{
"atoms": ["node_14", "node_7"],
"types": ["intrinsic", "intrinsic"]
},
{
"atoms": ["node_11", "node_5"],
"types": ["intrinsic", "intrinsic"]
},
{
"atoms": ["node_11", "node_3"],
"types": ["intrinsic", "intrinsic"]
},
{
"atoms": ["node_11", "node_7"],
"types": ["intrinsic", "intrinsic"]
},
{
"atoms": ["node_5", "node_3"],
"types": ["intrinsic", "intrinsic"]
},
{
"atoms": ["node_7", "node_5"],
"types": ["intrinsic", "intrinsic"]
}
]
},
{
"id": "state_uses",
"name": "StateUses",
"types": ["sea_node", "sea_node"],
"tuples": [
{
"atoms": ["node_1", "node_3"],
"types": ["finish", "intrinsic"]
},
{
"atoms": ["node_1", "node_14"],
"types": ["finish", "intrinsic"]
},
{
"atoms": ["node_1", "node_0"],
"types": ["finish", "start"]
},
{
"atoms": ["node_1", "node_11"],
"types": ["finish", "intrinsic"]
},
{
"atoms": ["node_3", "node_0"],
"types": ["intrinsic", "start"]
},
{
"atoms": ["node_14", "node_7"],
"types": ["intrinsic", "intrinsic"]
},
{
"atoms": ["node_11", "node_0"],
"types": ["intrinsic", "start"]
},
{
"atoms": ["node_7", "node_0"],
"types": ["intrinsic", "start"]
}
]
}
]
}`;
window.traces["LOCAL_TEE"]["overloadOps"] = ''
window.traces["LOCAL_TEE"]["overloadOps__raw"] = ''
window.traces["LOCAL_TEE"]["overloadOps"] += `<pre class='graph'>---
config:
  layout: elk
---
graph TD
	1[\\"Finish"/]
	3 -. Codeptr .-> 1
	14 -. Stack .-> 1
	0 -. Trap Globals Tables Memory Extra .-> 1
	11 -. Locals .-> 1
	11["eff__109 setLocal"]
	5 --> 11
	3 --> 11
	7 --> 11
	0 -. Locals .-> 11
	0[/"Start"\\]
	7["val pop_Value"]
	5 --> 7
	0 -. Stack .-> 7
	5["tv f_getLocalType"]
	3 --> 5
	3["index imm_readULEB32"]
	0 -. Codeptr .-> 3
	14["eff__106 push_Value"]
	5 --> 14
	7 --> 14
	7 -. Stack .-> 14
</pre>`;
window.traces["LOCAL_TEE"]["overloadOps__raw"] += `---
config:
  layout: elk
---
graph TD
	1[\\"Finish"/]
	3 -. Codeptr .-> 1
	14 -. Stack .-> 1
	0 -. Trap Globals Tables Memory Extra .-> 1
	11 -. Locals .-> 1
	11["eff__109 setLocal"]
	5 --> 11
	3 --> 11
	7 --> 11
	0 -. Locals .-> 11
	0[/"Start"\\]
	7["val pop_Value"]
	5 --> 7
	0 -. Stack .-> 7
	5["tv f_getLocalType"]
	3 --> 5
	3["index imm_readULEB32"]
	0 -. Codeptr .-> 3
	14["eff__106 push_Value"]
	5 --> 14
	7 --> 14
	7 -. Stack .-> 14
`;
window.traces["LOCAL_TEE"]["addAbstractions"] = ''
window.traces["LOCAL_TEE"]["addAbstractions__raw"] = ''
window.traces["LOCAL_TEE"]["addAbstractions"] += `<pre class='graph'>---
config:
  layout: elk
---
graph TD
	1[\\"Finish"/]
	3 -. Codeptr .-> 1
	14 -. Stack .-> 1
	0 -. Trap Globals Tables Memory Extra .-> 1
	11 -. Locals .-> 1
	11["eff__109 setLocal"]
	5 --> 11
	3 --> 11
	7 --> 11
	0 -. Locals .-> 11
	0[/"Start"\\]
	7["val pop_Value"]
	5 --> 7
	0 -. Stack .-> 7
	5["tv f_getLocalType"]
	3 --> 5
	3["index imm_readULEB32"]
	0 -. Codeptr .-> 3
	14["eff__106 push_Value"]
	5 --> 14
	7 --> 14
	7 -. Stack .-> 14
</pre>`;
window.traces["LOCAL_TEE"]["addAbstractions__raw"] += `---
config:
  layout: elk
---
graph TD
	1[\\"Finish"/]
	3 -. Codeptr .-> 1
	14 -. Stack .-> 1
	0 -. Trap Globals Tables Memory Extra .-> 1
	11 -. Locals .-> 1
	11["eff__109 setLocal"]
	5 --> 11
	3 --> 11
	7 --> 11
	0 -. Locals .-> 11
	0[/"Start"\\]
	7["val pop_Value"]
	5 --> 7
	0 -. Stack .-> 7
	5["tv f_getLocalType"]
	3 --> 5
	3["index imm_readULEB32"]
	0 -. Codeptr .-> 3
	14["eff__106 push_Value"]
	5 --> 14
	7 --> 14
	7 -. Stack .-> 14
`;
window.traces["LOCAL_TEE"]["schedulerMermaid"] = ''
window.traces["LOCAL_TEE"]["schedulerMermaid__raw"] = ''
window.traces["LOCAL_TEE"]["schedulerMermaid"] += `<pre class='graph'>graph TD
subgraph block_101["Block 101"]
	direction TB
	b101_0[/"Start"\\]
	b101_3["index imm_readULEB32"]
	b101_5["tv f_getLocalType"]
	b101_7["val pop_Value"]
	b101_11["eff__109 setLocal"]
	b101_14["eff__106 push_Value"]
	b101_1[\\"Finish"/]
	b101_0 --> b101_3
	b101_3 --> b101_5
	b101_5 --> b101_7
	b101_7 --> b101_11
	b101_11 --> b101_14
	b101_14 --> b101_1
end

</pre>`;
window.traces["LOCAL_TEE"]["schedulerMermaid__raw"] += `graph TD
subgraph block_101["Block 101"]
	direction TB
	b101_0[/"Start"\\]
	b101_3["index imm_readULEB32"]
	b101_5["tv f_getLocalType"]
	b101_7["val pop_Value"]
	b101_11["eff__109 setLocal"]
	b101_14["eff__106 push_Value"]
	b101_1[\\"Finish"/]
	b101_0 --> b101_3
	b101_3 --> b101_5
	b101_5 --> b101_7
	b101_7 --> b101_11
	b101_11 --> b101_14
	b101_14 --> b101_1
end

`;
window.traces["LOCAL_TEE"]["unLEM"] = ''
window.traces["LOCAL_TEE"]["unLEM__raw"] = ''
window.traces["LOCAL_TEE"]["unLEM"] += `<pre class='graph'>---
config:
  layout: elk
---
graph TD
	1[\\"Finish"/]
	3 -. Codeptr .-> 1
	14 -. Stack .-> 1
	0 -. Trap Globals Tables Memory Extra .-> 1
	11 -. Locals .-> 1
	11["eff__109 setLocal"]
	5 --> 11
	3 --> 11
	7 --> 11
	0 -. Locals .-> 11
	0[/"Start"\\]
	7["val pop_Value"]
	5 --> 7
	0 -. Stack .-> 7
	5["tv f_getLocalType"]
	3 --> 5
	3["index imm_readULEB32"]
	0 -. Codeptr .-> 3
	14["eff__106 push_Value"]
	5 --> 14
	7 --> 14
	7 -. Stack .-> 14
</pre>`;
window.traces["LOCAL_TEE"]["unLEM__raw"] += `---
config:
  layout: elk
---
graph TD
	1[\\"Finish"/]
	3 -. Codeptr .-> 1
	14 -. Stack .-> 1
	0 -. Trap Globals Tables Memory Extra .-> 1
	11 -. Locals .-> 1
	11["eff__109 setLocal"]
	5 --> 11
	3 --> 11
	7 --> 11
	0 -. Locals .-> 11
	0[/"Start"\\]
	7["val pop_Value"]
	5 --> 7
	0 -. Stack .-> 7
	5["tv f_getLocalType"]
	3 --> 5
	3["index imm_readULEB32"]
	0 -. Codeptr .-> 3
	14["eff__106 push_Value"]
	5 --> 14
	7 --> 14
	7 -. Stack .-> 14
`;
window.traces["LOCAL_TEE"]["unlem_schedule"] = ''
window.traces["LOCAL_TEE"]["unlem_schedule__raw"] = ''
window.traces["LOCAL_TEE"]["unlem_schedule"] += `<pre class=''>def index = imm_readULEB32();
def tv = f_getLocalType(index);
def val = pop_Value(tv);
def eff__106 = push_Value(tv, val);
def eff__109 = setLocal(tv, index, val);
</pre>`;
window.traces["LOCAL_TEE"]["unlem_schedule__raw"] += `def index = imm_readULEB32();
def tv = f_getLocalType(index);
def val = pop_Value(tv);
def eff__106 = push_Value(tv, val);
def eff__109 = setLocal(tv, index, val);
`;
window.traces["LOCAL_TEE"]["spytial_ul"] = ''
window.traces["LOCAL_TEE"]["spytial_ul__raw"] = ''
window.traces["LOCAL_TEE"]["spytial_ul"] += `<pre class=''>{
"atoms": [
{
"id": "node_1",
"type": "finish",
"label": "Finish"
},
{
"id": "node_3",
"type": "intrinsic",
"label": "imm_readULEB32 [index]"
},
{
"id": "node_14",
"type": "intrinsic",
"label": "push_Value [eff__106]"
},
{
"id": "node_0",
"type": "start",
"label": "Start"
},
{
"id": "node_11",
"type": "intrinsic",
"label": "setLocal [eff__109]"
},
{
"id": "node_5",
"type": "intrinsic",
"label": "f_getLocalType [tv]"
},
{
"id": "node_7",
"type": "intrinsic",
"label": "pop_Value [val]"
}
],
"relations": [
{
"id": "uses",
"name": "Uses",
"types": ["sea_node", "sea_node"],
"tuples": [
{
"atoms": ["node_14", "node_5"],
"types": ["intrinsic", "intrinsic"]
},
{
"atoms": ["node_14", "node_7"],
"types": ["intrinsic", "intrinsic"]
},
{
"atoms": ["node_11", "node_5"],
"types": ["intrinsic", "intrinsic"]
},
{
"atoms": ["node_11", "node_3"],
"types": ["intrinsic", "intrinsic"]
},
{
"atoms": ["node_11", "node_7"],
"types": ["intrinsic", "intrinsic"]
},
{
"atoms": ["node_5", "node_3"],
"types": ["intrinsic", "intrinsic"]
},
{
"atoms": ["node_7", "node_5"],
"types": ["intrinsic", "intrinsic"]
}
]
},
{
"id": "state_uses",
"name": "StateUses",
"types": ["sea_node", "sea_node"],
"tuples": [
{
"atoms": ["node_1", "node_3"],
"types": ["finish", "intrinsic"]
},
{
"atoms": ["node_1", "node_14"],
"types": ["finish", "intrinsic"]
},
{
"atoms": ["node_1", "node_0"],
"types": ["finish", "start"]
},
{
"atoms": ["node_1", "node_11"],
"types": ["finish", "intrinsic"]
},
{
"atoms": ["node_3", "node_0"],
"types": ["intrinsic", "start"]
},
{
"atoms": ["node_14", "node_7"],
"types": ["intrinsic", "intrinsic"]
},
{
"atoms": ["node_11", "node_0"],
"types": ["intrinsic", "start"]
},
{
"atoms": ["node_7", "node_0"],
"types": ["intrinsic", "start"]
}
]
}
]
}</pre>`;
window.traces["LOCAL_TEE"]["spytial_ul__raw"] += `{
"atoms": [
{
"id": "node_1",
"type": "finish",
"label": "Finish"
},
{
"id": "node_3",
"type": "intrinsic",
"label": "imm_readULEB32 [index]"
},
{
"id": "node_14",
"type": "intrinsic",
"label": "push_Value [eff__106]"
},
{
"id": "node_0",
"type": "start",
"label": "Start"
},
{
"id": "node_11",
"type": "intrinsic",
"label": "setLocal [eff__109]"
},
{
"id": "node_5",
"type": "intrinsic",
"label": "f_getLocalType [tv]"
},
{
"id": "node_7",
"type": "intrinsic",
"label": "pop_Value [val]"
}
],
"relations": [
{
"id": "uses",
"name": "Uses",
"types": ["sea_node", "sea_node"],
"tuples": [
{
"atoms": ["node_14", "node_5"],
"types": ["intrinsic", "intrinsic"]
},
{
"atoms": ["node_14", "node_7"],
"types": ["intrinsic", "intrinsic"]
},
{
"atoms": ["node_11", "node_5"],
"types": ["intrinsic", "intrinsic"]
},
{
"atoms": ["node_11", "node_3"],
"types": ["intrinsic", "intrinsic"]
},
{
"atoms": ["node_11", "node_7"],
"types": ["intrinsic", "intrinsic"]
},
{
"atoms": ["node_5", "node_3"],
"types": ["intrinsic", "intrinsic"]
},
{
"atoms": ["node_7", "node_5"],
"types": ["intrinsic", "intrinsic"]
}
]
},
{
"id": "state_uses",
"name": "StateUses",
"types": ["sea_node", "sea_node"],
"tuples": [
{
"atoms": ["node_1", "node_3"],
"types": ["finish", "intrinsic"]
},
{
"atoms": ["node_1", "node_14"],
"types": ["finish", "intrinsic"]
},
{
"atoms": ["node_1", "node_0"],
"types": ["finish", "start"]
},
{
"atoms": ["node_1", "node_11"],
"types": ["finish", "intrinsic"]
},
{
"atoms": ["node_3", "node_0"],
"types": ["intrinsic", "start"]
},
{
"atoms": ["node_14", "node_7"],
"types": ["intrinsic", "intrinsic"]
},
{
"atoms": ["node_11", "node_0"],
"types": ["intrinsic", "start"]
},
{
"atoms": ["node_7", "node_0"],
"types": ["intrinsic", "start"]
}
]
}
]
}`;
window.traces["LOCAL_TEE"]["unlem_scheduler"] = ''
window.traces["LOCAL_TEE"]["unlem_scheduler__raw"] = ''
window.traces["LOCAL_TEE"]["unlem_scheduler"] += `<pre class='graph'>graph TD
subgraph block_102["Block 102"]
	direction TB
	b102_0[/"Start"\\]
	b102_3["index imm_readULEB32"]
	b102_5["tv f_getLocalType"]
	b102_7["val pop_Value"]
	b102_11["eff__109 setLocal"]
	b102_14["eff__106 push_Value"]
	b102_1[\\"Finish"/]
	b102_0 --> b102_3
	b102_3 --> b102_5
	b102_5 --> b102_7
	b102_7 --> b102_11
	b102_11 --> b102_14
	b102_14 --> b102_1
end

</pre>`;
window.traces["LOCAL_TEE"]["unlem_scheduler__raw"] += `graph TD
subgraph block_102["Block 102"]
	direction TB
	b102_0[/"Start"\\]
	b102_3["index imm_readULEB32"]
	b102_5["tv f_getLocalType"]
	b102_7["val pop_Value"]
	b102_11["eff__109 setLocal"]
	b102_14["eff__106 push_Value"]
	b102_1[\\"Finish"/]
	b102_0 --> b102_3
	b102_3 --> b102_5
	b102_5 --> b102_7
	b102_7 --> b102_11
	b102_11 --> b102_14
	b102_14 --> b102_1
end

`;
window.traces["LOCAL_TEE"]["unlem_pretty"] = ''
window.traces["LOCAL_TEE"]["unlem_pretty__raw"] = ''
window.traces["LOCAL_TEE"]["unlem_pretty"] += `<pre class=''>def index = imm_readULEB32();
def tv = f_getLocalType(index);
def val = pop_Value(tv);
push_Value(tv, val);
setLocal(tv, index, val);
</pre>`;
window.traces["LOCAL_TEE"]["unlem_pretty__raw"] += `def index = imm_readULEB32();
def tv = f_getLocalType(index);
def val = pop_Value(tv);
push_Value(tv, val);
setLocal(tv, index, val);
`;
window.traces["LOCAL_TEE"]["constUnLEM"] = ''
window.traces["LOCAL_TEE"]["constUnLEM__raw"] = ''
window.traces["LOCAL_TEE"]["constUnLEM"] += `<pre class='graph'>---
config:
  layout: elk
---
graph TD
	1[\\"Finish"/]
	3 -. Codeptr .-> 1
	14 -. Stack .-> 1
	0 -. Trap Globals Tables Memory Extra .-> 1
	11 -. Locals .-> 1
	11["eff__109 setLocal"]
	5 --> 11
	3 --> 11
	7 --> 11
	0 -. Locals .-> 11
	0[/"Start"\\]
	7["val pop_Value"]
	5 --> 7
	0 -. Stack .-> 7
	5["tv f_getLocalType"]
	3 --> 5
	3["index imm_readULEB32"]
	0 -. Codeptr .-> 3
	14["eff__106 push_Value"]
	5 --> 14
	7 --> 14
	7 -. Stack .-> 14
</pre>`;
window.traces["LOCAL_TEE"]["constUnLEM__raw"] += `---
config:
  layout: elk
---
graph TD
	1[\\"Finish"/]
	3 -. Codeptr .-> 1
	14 -. Stack .-> 1
	0 -. Trap Globals Tables Memory Extra .-> 1
	11 -. Locals .-> 1
	11["eff__109 setLocal"]
	5 --> 11
	3 --> 11
	7 --> 11
	0 -. Locals .-> 11
	0[/"Start"\\]
	7["val pop_Value"]
	5 --> 7
	0 -. Stack .-> 7
	5["tv f_getLocalType"]
	3 --> 5
	3["index imm_readULEB32"]
	0 -. Codeptr .-> 3
	14["eff__106 push_Value"]
	5 --> 14
	7 --> 14
	7 -. Stack .-> 14
`;
window.traces["LOCAL_TEE"]["chooseMerge"] = ''
window.traces["LOCAL_TEE"]["chooseMerge__raw"] = ''
window.traces["LOCAL_TEE"]["chooseMerge"] += `<pre class='graph'>---
config:
  layout: elk
---
graph TD
	1[\\"Finish"/]
	3 -. Codeptr .-> 1
	14 -. Stack .-> 1
	0 -. Trap Globals Tables Memory Extra .-> 1
	11 -. Locals .-> 1
	11["eff__109 setLocal"]
	5 --> 11
	3 --> 11
	7 --> 11
	0 -. Locals .-> 11
	0[/"Start"\\]
	7["val pop_Value"]
	5 --> 7
	0 -. Stack .-> 7
	5["tv f_getLocalType"]
	3 --> 5
	3["index imm_readULEB32"]
	0 -. Codeptr .-> 3
	14["eff__106 push_Value"]
	5 --> 14
	7 --> 14
	7 -. Stack .-> 14
</pre>`;
window.traces["LOCAL_TEE"]["chooseMerge__raw"] += `---
config:
  layout: elk
---
graph TD
	1[\\"Finish"/]
	3 -. Codeptr .-> 1
	14 -. Stack .-> 1
	0 -. Trap Globals Tables Memory Extra .-> 1
	11 -. Locals .-> 1
	11["eff__109 setLocal"]
	5 --> 11
	3 --> 11
	7 --> 11
	0 -. Locals .-> 11
	0[/"Start"\\]
	7["val pop_Value"]
	5 --> 7
	0 -. Stack .-> 7
	5["tv f_getLocalType"]
	3 --> 5
	3["index imm_readULEB32"]
	0 -. Codeptr .-> 3
	14["eff__106 push_Value"]
	5 --> 14
	7 --> 14
	7 -. Stack .-> 14
`;
window.traces["LOCAL_TEE"]["scheduled"] = ''
window.traces["LOCAL_TEE"]["scheduled__raw"] = ''
window.traces["LOCAL_TEE"]["scheduled"] += `<pre class=''>def index = imm_readULEB32();
def tv = f_getLocalType(index);
def val = pop_Value(tv);
def eff__106 = push_Value(tv, val);
def eff__109 = setLocal(tv, index, val);
</pre>`;
window.traces["LOCAL_TEE"]["scheduled__raw"] += `def index = imm_readULEB32();
def tv = f_getLocalType(index);
def val = pop_Value(tv);
def eff__106 = push_Value(tv, val);
def eff__109 = setLocal(tv, index, val);
`;
window.traces["LOCAL_TEE"]["pretty"] = ''
window.traces["LOCAL_TEE"]["pretty__raw"] = ''
window.traces["LOCAL_TEE"]["pretty"] += `<pre class=''>def index = imm_readULEB32();
def tv = f_getLocalType(index);
def val = pop_Value(tv);
push_Value(tv, val);
setLocal(tv, index, val);
</pre>`;
window.traces["LOCAL_TEE"]["pretty__raw"] += `def index = imm_readULEB32();
def tv = f_getLocalType(index);
def val = pop_Value(tv);
push_Value(tv, val);
setLocal(tv, index, val);
`;
window.traces["GLOBAL_GET"] = {}
window.traces["GLOBAL_GET"]["parsed"] = ''
window.traces["GLOBAL_GET"]["parsed__raw"] = ''
window.traces["GLOBAL_GET"]["parsed"] += `<pre class=''>def index = imm_readULEB32();
def arg__120 = (index);
def tv = m_getGlobalType(arg__120);
def arg__119 = (index);
def arg__118 = (tv);
def val = getGlobal(arg__118, arg__119);
def arg__117 = (val);
def arg__116 = (tv);
def eff__115 = push_Value(arg__116, arg__117);
</pre>`;
window.traces["GLOBAL_GET"]["parsed__raw"] += `def index = imm_readULEB32();
def arg__120 = (index);
def tv = m_getGlobalType(arg__120);
def arg__119 = (index);
def arg__118 = (tv);
def val = getGlobal(arg__118, arg__119);
def arg__117 = (val);
def arg__116 = (tv);
def eff__115 = push_Value(arg__116, arg__117);
`;
window.traces["GLOBAL_GET"]["raw"] = ''
window.traces["GLOBAL_GET"]["raw__raw"] = ''
window.traces["GLOBAL_GET"]["raw"] += `<pre class='graph'>---
config:
  layout: elk
---
graph TD
	1[\\"Finish"/]
	3 -. Codeptr .-> 1
	11 -. Stack .-> 1
	0 -. Trap Locals Globals Tables Memory Extra .-> 1
	0[/"Start"\\]
	11["eff__115 push_Value"]
	5 --> 11
	8 --> 11
	8 -. Stack .-> 11
	8["val getGlobal"]
	5 --> 8
	3 --> 8
	0 -. Stack .-> 8
	3["index imm_readULEB32"]
	0 -. Codeptr .-> 3
	5["tv m_getGlobalType"]
	3 --> 5
</pre>`;
window.traces["GLOBAL_GET"]["raw__raw"] += `---
config:
  layout: elk
---
graph TD
	1[\\"Finish"/]
	3 -. Codeptr .-> 1
	11 -. Stack .-> 1
	0 -. Trap Locals Globals Tables Memory Extra .-> 1
	0[/"Start"\\]
	11["eff__115 push_Value"]
	5 --> 11
	8 --> 11
	8 -. Stack .-> 11
	8["val getGlobal"]
	5 --> 8
	3 --> 8
	0 -. Stack .-> 8
	3["index imm_readULEB32"]
	0 -. Codeptr .-> 3
	5["tv m_getGlobalType"]
	3 --> 5
`;
window.traces["GLOBAL_GET"]["spytial"] = ''
window.traces["GLOBAL_GET"]["spytial__raw"] = ''
window.traces["GLOBAL_GET"]["spytial"] += `<pre class=''>{
"atoms": [
{
"id": "node_1",
"type": "finish",
"label": "Finish"
},
{
"id": "node_3",
"type": "intrinsic",
"label": "imm_readULEB32 [index]"
},
{
"id": "node_11",
"type": "intrinsic",
"label": "push_Value [eff__115]"
},
{
"id": "node_0",
"type": "start",
"label": "Start"
},
{
"id": "node_5",
"type": "intrinsic",
"label": "m_getGlobalType [tv]"
},
{
"id": "node_8",
"type": "intrinsic",
"label": "getGlobal [val]"
}
],
"relations": [
{
"id": "uses",
"name": "Uses",
"types": ["sea_node", "sea_node"],
"tuples": [
{
"atoms": ["node_11", "node_5"],
"types": ["intrinsic", "intrinsic"]
},
{
"atoms": ["node_11", "node_8"],
"types": ["intrinsic", "intrinsic"]
},
{
"atoms": ["node_5", "node_3"],
"types": ["intrinsic", "intrinsic"]
},
{
"atoms": ["node_8", "node_5"],
"types": ["intrinsic", "intrinsic"]
},
{
"atoms": ["node_8", "node_3"],
"types": ["intrinsic", "intrinsic"]
}
]
},
{
"id": "state_uses",
"name": "StateUses",
"types": ["sea_node", "sea_node"],
"tuples": [
{
"atoms": ["node_1", "node_3"],
"types": ["finish", "intrinsic"]
},
{
"atoms": ["node_1", "node_11"],
"types": ["finish", "intrinsic"]
},
{
"atoms": ["node_1", "node_0"],
"types": ["finish", "start"]
},
{
"atoms": ["node_3", "node_0"],
"types": ["intrinsic", "start"]
},
{
"atoms": ["node_11", "node_8"],
"types": ["intrinsic", "intrinsic"]
},
{
"atoms": ["node_8", "node_0"],
"types": ["intrinsic", "start"]
}
]
}
]
}</pre>`;
window.traces["GLOBAL_GET"]["spytial__raw"] += `{
"atoms": [
{
"id": "node_1",
"type": "finish",
"label": "Finish"
},
{
"id": "node_3",
"type": "intrinsic",
"label": "imm_readULEB32 [index]"
},
{
"id": "node_11",
"type": "intrinsic",
"label": "push_Value [eff__115]"
},
{
"id": "node_0",
"type": "start",
"label": "Start"
},
{
"id": "node_5",
"type": "intrinsic",
"label": "m_getGlobalType [tv]"
},
{
"id": "node_8",
"type": "intrinsic",
"label": "getGlobal [val]"
}
],
"relations": [
{
"id": "uses",
"name": "Uses",
"types": ["sea_node", "sea_node"],
"tuples": [
{
"atoms": ["node_11", "node_5"],
"types": ["intrinsic", "intrinsic"]
},
{
"atoms": ["node_11", "node_8"],
"types": ["intrinsic", "intrinsic"]
},
{
"atoms": ["node_5", "node_3"],
"types": ["intrinsic", "intrinsic"]
},
{
"atoms": ["node_8", "node_5"],
"types": ["intrinsic", "intrinsic"]
},
{
"atoms": ["node_8", "node_3"],
"types": ["intrinsic", "intrinsic"]
}
]
},
{
"id": "state_uses",
"name": "StateUses",
"types": ["sea_node", "sea_node"],
"tuples": [
{
"atoms": ["node_1", "node_3"],
"types": ["finish", "intrinsic"]
},
{
"atoms": ["node_1", "node_11"],
"types": ["finish", "intrinsic"]
},
{
"atoms": ["node_1", "node_0"],
"types": ["finish", "start"]
},
{
"atoms": ["node_3", "node_0"],
"types": ["intrinsic", "start"]
},
{
"atoms": ["node_11", "node_8"],
"types": ["intrinsic", "intrinsic"]
},
{
"atoms": ["node_8", "node_0"],
"types": ["intrinsic", "start"]
}
]
}
]
}`;
window.traces["GLOBAL_GET"]["overloadOps"] = ''
window.traces["GLOBAL_GET"]["overloadOps__raw"] = ''
window.traces["GLOBAL_GET"]["overloadOps"] += `<pre class='graph'>---
config:
  layout: elk
---
graph TD
	1[\\"Finish"/]
	3 -. Codeptr .-> 1
	11 -. Stack .-> 1
	0 -. Trap Locals Globals Tables Memory Extra .-> 1
	0[/"Start"\\]
	11["eff__115 push_Value"]
	5 --> 11
	8 --> 11
	8 -. Stack .-> 11
	8["val getGlobal"]
	5 --> 8
	3 --> 8
	0 -. Stack .-> 8
	3["index imm_readULEB32"]
	0 -. Codeptr .-> 3
	5["tv m_getGlobalType"]
	3 --> 5
</pre>`;
window.traces["GLOBAL_GET"]["overloadOps__raw"] += `---
config:
  layout: elk
---
graph TD
	1[\\"Finish"/]
	3 -. Codeptr .-> 1
	11 -. Stack .-> 1
	0 -. Trap Locals Globals Tables Memory Extra .-> 1
	0[/"Start"\\]
	11["eff__115 push_Value"]
	5 --> 11
	8 --> 11
	8 -. Stack .-> 11
	8["val getGlobal"]
	5 --> 8
	3 --> 8
	0 -. Stack .-> 8
	3["index imm_readULEB32"]
	0 -. Codeptr .-> 3
	5["tv m_getGlobalType"]
	3 --> 5
`;
window.traces["GLOBAL_GET"]["addAbstractions"] = ''
window.traces["GLOBAL_GET"]["addAbstractions__raw"] = ''
window.traces["GLOBAL_GET"]["addAbstractions"] += `<pre class='graph'>---
config:
  layout: elk
---
graph TD
	1[\\"Finish"/]
	3 -. Codeptr .-> 1
	11 -. Stack .-> 1
	0 -. Trap Locals Globals Tables Memory Extra .-> 1
	0[/"Start"\\]
	11["eff__115 push_Value"]
	5 --> 11
	8 --> 11
	8 -. Stack .-> 11
	8["val getGlobal"]
	5 --> 8
	3 --> 8
	0 -. Stack .-> 8
	3["index imm_readULEB32"]
	0 -. Codeptr .-> 3
	5["tv m_getGlobalType"]
	3 --> 5
</pre>`;
window.traces["GLOBAL_GET"]["addAbstractions__raw"] += `---
config:
  layout: elk
---
graph TD
	1[\\"Finish"/]
	3 -. Codeptr .-> 1
	11 -. Stack .-> 1
	0 -. Trap Locals Globals Tables Memory Extra .-> 1
	0[/"Start"\\]
	11["eff__115 push_Value"]
	5 --> 11
	8 --> 11
	8 -. Stack .-> 11
	8["val getGlobal"]
	5 --> 8
	3 --> 8
	0 -. Stack .-> 8
	3["index imm_readULEB32"]
	0 -. Codeptr .-> 3
	5["tv m_getGlobalType"]
	3 --> 5
`;
window.traces["GLOBAL_GET"]["schedulerMermaid"] = ''
window.traces["GLOBAL_GET"]["schedulerMermaid__raw"] = ''
window.traces["GLOBAL_GET"]["schedulerMermaid"] += `<pre class='graph'>graph TD
subgraph block_103["Block 103"]
	direction TB
	b103_0[/"Start"\\]
	b103_3["index imm_readULEB32"]
	b103_5["tv m_getGlobalType"]
	b103_8["val getGlobal"]
	b103_11["eff__115 push_Value"]
	b103_1[\\"Finish"/]
	b103_0 --> b103_3
	b103_3 --> b103_5
	b103_5 --> b103_8
	b103_8 --> b103_11
	b103_11 --> b103_1
end

</pre>`;
window.traces["GLOBAL_GET"]["schedulerMermaid__raw"] += `graph TD
subgraph block_103["Block 103"]
	direction TB
	b103_0[/"Start"\\]
	b103_3["index imm_readULEB32"]
	b103_5["tv m_getGlobalType"]
	b103_8["val getGlobal"]
	b103_11["eff__115 push_Value"]
	b103_1[\\"Finish"/]
	b103_0 --> b103_3
	b103_3 --> b103_5
	b103_5 --> b103_8
	b103_8 --> b103_11
	b103_11 --> b103_1
end

`;
window.traces["GLOBAL_GET"]["unLEM"] = ''
window.traces["GLOBAL_GET"]["unLEM__raw"] = ''
window.traces["GLOBAL_GET"]["unLEM"] += `<pre class='graph'>---
config:
  layout: elk
---
graph TD
	1[\\"Finish"/]
	3 -. Codeptr .-> 1
	11 -. Stack .-> 1
	0 -. Trap Locals Globals Tables Memory Extra .-> 1
	0[/"Start"\\]
	11["eff__115 push_Value"]
	5 --> 11
	8 --> 11
	8 -. Stack .-> 11
	8["val getGlobal"]
	5 --> 8
	3 --> 8
	0 -. Stack .-> 8
	3["index imm_readULEB32"]
	0 -. Codeptr .-> 3
	5["tv m_getGlobalType"]
	3 --> 5
</pre>`;
window.traces["GLOBAL_GET"]["unLEM__raw"] += `---
config:
  layout: elk
---
graph TD
	1[\\"Finish"/]
	3 -. Codeptr .-> 1
	11 -. Stack .-> 1
	0 -. Trap Locals Globals Tables Memory Extra .-> 1
	0[/"Start"\\]
	11["eff__115 push_Value"]
	5 --> 11
	8 --> 11
	8 -. Stack .-> 11
	8["val getGlobal"]
	5 --> 8
	3 --> 8
	0 -. Stack .-> 8
	3["index imm_readULEB32"]
	0 -. Codeptr .-> 3
	5["tv m_getGlobalType"]
	3 --> 5
`;
window.traces["GLOBAL_GET"]["unlem_schedule"] = ''
window.traces["GLOBAL_GET"]["unlem_schedule__raw"] = ''
window.traces["GLOBAL_GET"]["unlem_schedule"] += `<pre class=''>def index = imm_readULEB32();
def tv = m_getGlobalType(index);
def val = getGlobal(tv, index);
def eff__115 = push_Value(tv, val);
</pre>`;
window.traces["GLOBAL_GET"]["unlem_schedule__raw"] += `def index = imm_readULEB32();
def tv = m_getGlobalType(index);
def val = getGlobal(tv, index);
def eff__115 = push_Value(tv, val);
`;
window.traces["GLOBAL_GET"]["spytial_ul"] = ''
window.traces["GLOBAL_GET"]["spytial_ul__raw"] = ''
window.traces["GLOBAL_GET"]["spytial_ul"] += `<pre class=''>{
"atoms": [
{
"id": "node_1",
"type": "finish",
"label": "Finish"
},
{
"id": "node_3",
"type": "intrinsic",
"label": "imm_readULEB32 [index]"
},
{
"id": "node_11",
"type": "intrinsic",
"label": "push_Value [eff__115]"
},
{
"id": "node_0",
"type": "start",
"label": "Start"
},
{
"id": "node_5",
"type": "intrinsic",
"label": "m_getGlobalType [tv]"
},
{
"id": "node_8",
"type": "intrinsic",
"label": "getGlobal [val]"
}
],
"relations": [
{
"id": "uses",
"name": "Uses",
"types": ["sea_node", "sea_node"],
"tuples": [
{
"atoms": ["node_11", "node_5"],
"types": ["intrinsic", "intrinsic"]
},
{
"atoms": ["node_11", "node_8"],
"types": ["intrinsic", "intrinsic"]
},
{
"atoms": ["node_5", "node_3"],
"types": ["intrinsic", "intrinsic"]
},
{
"atoms": ["node_8", "node_5"],
"types": ["intrinsic", "intrinsic"]
},
{
"atoms": ["node_8", "node_3"],
"types": ["intrinsic", "intrinsic"]
}
]
},
{
"id": "state_uses",
"name": "StateUses",
"types": ["sea_node", "sea_node"],
"tuples": [
{
"atoms": ["node_1", "node_3"],
"types": ["finish", "intrinsic"]
},
{
"atoms": ["node_1", "node_11"],
"types": ["finish", "intrinsic"]
},
{
"atoms": ["node_1", "node_0"],
"types": ["finish", "start"]
},
{
"atoms": ["node_3", "node_0"],
"types": ["intrinsic", "start"]
},
{
"atoms": ["node_11", "node_8"],
"types": ["intrinsic", "intrinsic"]
},
{
"atoms": ["node_8", "node_0"],
"types": ["intrinsic", "start"]
}
]
}
]
}</pre>`;
window.traces["GLOBAL_GET"]["spytial_ul__raw"] += `{
"atoms": [
{
"id": "node_1",
"type": "finish",
"label": "Finish"
},
{
"id": "node_3",
"type": "intrinsic",
"label": "imm_readULEB32 [index]"
},
{
"id": "node_11",
"type": "intrinsic",
"label": "push_Value [eff__115]"
},
{
"id": "node_0",
"type": "start",
"label": "Start"
},
{
"id": "node_5",
"type": "intrinsic",
"label": "m_getGlobalType [tv]"
},
{
"id": "node_8",
"type": "intrinsic",
"label": "getGlobal [val]"
}
],
"relations": [
{
"id": "uses",
"name": "Uses",
"types": ["sea_node", "sea_node"],
"tuples": [
{
"atoms": ["node_11", "node_5"],
"types": ["intrinsic", "intrinsic"]
},
{
"atoms": ["node_11", "node_8"],
"types": ["intrinsic", "intrinsic"]
},
{
"atoms": ["node_5", "node_3"],
"types": ["intrinsic", "intrinsic"]
},
{
"atoms": ["node_8", "node_5"],
"types": ["intrinsic", "intrinsic"]
},
{
"atoms": ["node_8", "node_3"],
"types": ["intrinsic", "intrinsic"]
}
]
},
{
"id": "state_uses",
"name": "StateUses",
"types": ["sea_node", "sea_node"],
"tuples": [
{
"atoms": ["node_1", "node_3"],
"types": ["finish", "intrinsic"]
},
{
"atoms": ["node_1", "node_11"],
"types": ["finish", "intrinsic"]
},
{
"atoms": ["node_1", "node_0"],
"types": ["finish", "start"]
},
{
"atoms": ["node_3", "node_0"],
"types": ["intrinsic", "start"]
},
{
"atoms": ["node_11", "node_8"],
"types": ["intrinsic", "intrinsic"]
},
{
"atoms": ["node_8", "node_0"],
"types": ["intrinsic", "start"]
}
]
}
]
}`;
window.traces["GLOBAL_GET"]["unlem_scheduler"] = ''
window.traces["GLOBAL_GET"]["unlem_scheduler__raw"] = ''
window.traces["GLOBAL_GET"]["unlem_scheduler"] += `<pre class='graph'>graph TD
subgraph block_104["Block 104"]
	direction TB
	b104_0[/"Start"\\]
	b104_3["index imm_readULEB32"]
	b104_5["tv m_getGlobalType"]
	b104_8["val getGlobal"]
	b104_11["eff__115 push_Value"]
	b104_1[\\"Finish"/]
	b104_0 --> b104_3
	b104_3 --> b104_5
	b104_5 --> b104_8
	b104_8 --> b104_11
	b104_11 --> b104_1
end

</pre>`;
window.traces["GLOBAL_GET"]["unlem_scheduler__raw"] += `graph TD
subgraph block_104["Block 104"]
	direction TB
	b104_0[/"Start"\\]
	b104_3["index imm_readULEB32"]
	b104_5["tv m_getGlobalType"]
	b104_8["val getGlobal"]
	b104_11["eff__115 push_Value"]
	b104_1[\\"Finish"/]
	b104_0 --> b104_3
	b104_3 --> b104_5
	b104_5 --> b104_8
	b104_8 --> b104_11
	b104_11 --> b104_1
end

`;
window.traces["GLOBAL_GET"]["unlem_pretty"] = ''
window.traces["GLOBAL_GET"]["unlem_pretty__raw"] = ''
window.traces["GLOBAL_GET"]["unlem_pretty"] += `<pre class=''>def index = imm_readULEB32();
def tv = m_getGlobalType(index);
def val = getGlobal(tv, index);
push_Value(tv, val);
</pre>`;
window.traces["GLOBAL_GET"]["unlem_pretty__raw"] += `def index = imm_readULEB32();
def tv = m_getGlobalType(index);
def val = getGlobal(tv, index);
push_Value(tv, val);
`;
window.traces["GLOBAL_GET"]["constUnLEM"] = ''
window.traces["GLOBAL_GET"]["constUnLEM__raw"] = ''
window.traces["GLOBAL_GET"]["constUnLEM"] += `<pre class='graph'>---
config:
  layout: elk
---
graph TD
	1[\\"Finish"/]
	3 -. Codeptr .-> 1
	11 -. Stack .-> 1
	0 -. Trap Locals Globals Tables Memory Extra .-> 1
	0[/"Start"\\]
	11["eff__115 push_Value"]
	5 --> 11
	8 --> 11
	8 -. Stack .-> 11
	8["val getGlobal"]
	5 --> 8
	3 --> 8
	0 -. Stack .-> 8
	3["index imm_readULEB32"]
	0 -. Codeptr .-> 3
	5["tv m_getGlobalType"]
	3 --> 5
</pre>`;
window.traces["GLOBAL_GET"]["constUnLEM__raw"] += `---
config:
  layout: elk
---
graph TD
	1[\\"Finish"/]
	3 -. Codeptr .-> 1
	11 -. Stack .-> 1
	0 -. Trap Locals Globals Tables Memory Extra .-> 1
	0[/"Start"\\]
	11["eff__115 push_Value"]
	5 --> 11
	8 --> 11
	8 -. Stack .-> 11
	8["val getGlobal"]
	5 --> 8
	3 --> 8
	0 -. Stack .-> 8
	3["index imm_readULEB32"]
	0 -. Codeptr .-> 3
	5["tv m_getGlobalType"]
	3 --> 5
`;
window.traces["GLOBAL_GET"]["chooseMerge"] = ''
window.traces["GLOBAL_GET"]["chooseMerge__raw"] = ''
window.traces["GLOBAL_GET"]["chooseMerge"] += `<pre class='graph'>---
config:
  layout: elk
---
graph TD
	1[\\"Finish"/]
	3 -. Codeptr .-> 1
	11 -. Stack .-> 1
	0 -. Trap Locals Globals Tables Memory Extra .-> 1
	0[/"Start"\\]
	11["eff__115 push_Value"]
	5 --> 11
	8 --> 11
	8 -. Stack .-> 11
	8["val getGlobal"]
	5 --> 8
	3 --> 8
	0 -. Stack .-> 8
	3["index imm_readULEB32"]
	0 -. Codeptr .-> 3
	5["tv m_getGlobalType"]
	3 --> 5
</pre>`;
window.traces["GLOBAL_GET"]["chooseMerge__raw"] += `---
config:
  layout: elk
---
graph TD
	1[\\"Finish"/]
	3 -. Codeptr .-> 1
	11 -. Stack .-> 1
	0 -. Trap Locals Globals Tables Memory Extra .-> 1
	0[/"Start"\\]
	11["eff__115 push_Value"]
	5 --> 11
	8 --> 11
	8 -. Stack .-> 11
	8["val getGlobal"]
	5 --> 8
	3 --> 8
	0 -. Stack .-> 8
	3["index imm_readULEB32"]
	0 -. Codeptr .-> 3
	5["tv m_getGlobalType"]
	3 --> 5
`;
window.traces["GLOBAL_GET"]["scheduled"] = ''
window.traces["GLOBAL_GET"]["scheduled__raw"] = ''
window.traces["GLOBAL_GET"]["scheduled"] += `<pre class=''>def index = imm_readULEB32();
def tv = m_getGlobalType(index);
def val = getGlobal(tv, index);
def eff__115 = push_Value(tv, val);
</pre>`;
window.traces["GLOBAL_GET"]["scheduled__raw"] += `def index = imm_readULEB32();
def tv = m_getGlobalType(index);
def val = getGlobal(tv, index);
def eff__115 = push_Value(tv, val);
`;
window.traces["GLOBAL_GET"]["pretty"] = ''
window.traces["GLOBAL_GET"]["pretty__raw"] = ''
window.traces["GLOBAL_GET"]["pretty"] += `<pre class=''>def index = imm_readULEB32();
def tv = m_getGlobalType(index);
def val = getGlobal(tv, index);
push_Value(tv, val);
</pre>`;
window.traces["GLOBAL_GET"]["pretty__raw"] += `def index = imm_readULEB32();
def tv = m_getGlobalType(index);
def val = getGlobal(tv, index);
push_Value(tv, val);
`;
window.traces["GLOBAL_SET"] = {}
window.traces["GLOBAL_SET"]["parsed"] = ''
window.traces["GLOBAL_SET"]["parsed__raw"] = ''
window.traces["GLOBAL_SET"]["parsed"] += `<pre class=''>def index = imm_readULEB32();
def arg__126 = (index);
def tv = m_getGlobalType(arg__126);
def arg__125 = (tv);
def val = pop_Value(arg__125);
def arg__124 = (val);
def arg__123 = (index);
def arg__122 = (tv);
def eff__121 = setGlobal(arg__122, arg__123, arg__124);
</pre>`;
window.traces["GLOBAL_SET"]["parsed__raw"] += `def index = imm_readULEB32();
def arg__126 = (index);
def tv = m_getGlobalType(arg__126);
def arg__125 = (tv);
def val = pop_Value(arg__125);
def arg__124 = (val);
def arg__123 = (index);
def arg__122 = (tv);
def eff__121 = setGlobal(arg__122, arg__123, arg__124);
`;
window.traces["GLOBAL_SET"]["raw"] = ''
window.traces["GLOBAL_SET"]["raw__raw"] = ''
window.traces["GLOBAL_SET"]["raw"] += `<pre class='graph'>---
config:
  layout: elk
---
graph TD
	1[\\"Finish"/]
	3 -. Codeptr .-> 1
	7 -. Stack .-> 1
	0 -. Trap Locals Tables Memory Extra .-> 1
	11 -. Globals .-> 1
	11["eff__121 setGlobal"]
	5 --> 11
	3 --> 11
	7 --> 11
	0 -. Globals .-> 11
	0[/"Start"\\]
	7["val pop_Value"]
	5 --> 7
	0 -. Stack .-> 7
	5["tv m_getGlobalType"]
	3 --> 5
	3["index imm_readULEB32"]
	0 -. Codeptr .-> 3
</pre>`;
window.traces["GLOBAL_SET"]["raw__raw"] += `---
config:
  layout: elk
---
graph TD
	1[\\"Finish"/]
	3 -. Codeptr .-> 1
	7 -. Stack .-> 1
	0 -. Trap Locals Tables Memory Extra .-> 1
	11 -. Globals .-> 1
	11["eff__121 setGlobal"]
	5 --> 11
	3 --> 11
	7 --> 11
	0 -. Globals .-> 11
	0[/"Start"\\]
	7["val pop_Value"]
	5 --> 7
	0 -. Stack .-> 7
	5["tv m_getGlobalType"]
	3 --> 5
	3["index imm_readULEB32"]
	0 -. Codeptr .-> 3
`;
window.traces["GLOBAL_SET"]["spytial"] = ''
window.traces["GLOBAL_SET"]["spytial__raw"] = ''
window.traces["GLOBAL_SET"]["spytial"] += `<pre class=''>{
"atoms": [
{
"id": "node_1",
"type": "finish",
"label": "Finish"
},
{
"id": "node_3",
"type": "intrinsic",
"label": "imm_readULEB32 [index]"
},
{
"id": "node_7",
"type": "intrinsic",
"label": "pop_Value [val]"
},
{
"id": "node_0",
"type": "start",
"label": "Start"
},
{
"id": "node_11",
"type": "intrinsic",
"label": "setGlobal [eff__121]"
},
{
"id": "node_5",
"type": "intrinsic",
"label": "m_getGlobalType [tv]"
}
],
"relations": [
{
"id": "uses",
"name": "Uses",
"types": ["sea_node", "sea_node"],
"tuples": [
{
"atoms": ["node_7", "node_5"],
"types": ["intrinsic", "intrinsic"]
},
{
"atoms": ["node_11", "node_5"],
"types": ["intrinsic", "intrinsic"]
},
{
"atoms": ["node_11", "node_3"],
"types": ["intrinsic", "intrinsic"]
},
{
"atoms": ["node_11", "node_7"],
"types": ["intrinsic", "intrinsic"]
},
{
"atoms": ["node_5", "node_3"],
"types": ["intrinsic", "intrinsic"]
}
]
},
{
"id": "state_uses",
"name": "StateUses",
"types": ["sea_node", "sea_node"],
"tuples": [
{
"atoms": ["node_1", "node_3"],
"types": ["finish", "intrinsic"]
},
{
"atoms": ["node_1", "node_7"],
"types": ["finish", "intrinsic"]
},
{
"atoms": ["node_1", "node_0"],
"types": ["finish", "start"]
},
{
"atoms": ["node_1", "node_11"],
"types": ["finish", "intrinsic"]
},
{
"atoms": ["node_3", "node_0"],
"types": ["intrinsic", "start"]
},
{
"atoms": ["node_7", "node_0"],
"types": ["intrinsic", "start"]
},
{
"atoms": ["node_11", "node_0"],
"types": ["intrinsic", "start"]
}
]
}
]
}</pre>`;
window.traces["GLOBAL_SET"]["spytial__raw"] += `{
"atoms": [
{
"id": "node_1",
"type": "finish",
"label": "Finish"
},
{
"id": "node_3",
"type": "intrinsic",
"label": "imm_readULEB32 [index]"
},
{
"id": "node_7",
"type": "intrinsic",
"label": "pop_Value [val]"
},
{
"id": "node_0",
"type": "start",
"label": "Start"
},
{
"id": "node_11",
"type": "intrinsic",
"label": "setGlobal [eff__121]"
},
{
"id": "node_5",
"type": "intrinsic",
"label": "m_getGlobalType [tv]"
}
],
"relations": [
{
"id": "uses",
"name": "Uses",
"types": ["sea_node", "sea_node"],
"tuples": [
{
"atoms": ["node_7", "node_5"],
"types": ["intrinsic", "intrinsic"]
},
{
"atoms": ["node_11", "node_5"],
"types": ["intrinsic", "intrinsic"]
},
{
"atoms": ["node_11", "node_3"],
"types": ["intrinsic", "intrinsic"]
},
{
"atoms": ["node_11", "node_7"],
"types": ["intrinsic", "intrinsic"]
},
{
"atoms": ["node_5", "node_3"],
"types": ["intrinsic", "intrinsic"]
}
]
},
{
"id": "state_uses",
"name": "StateUses",
"types": ["sea_node", "sea_node"],
"tuples": [
{
"atoms": ["node_1", "node_3"],
"types": ["finish", "intrinsic"]
},
{
"atoms": ["node_1", "node_7"],
"types": ["finish", "intrinsic"]
},
{
"atoms": ["node_1", "node_0"],
"types": ["finish", "start"]
},
{
"atoms": ["node_1", "node_11"],
"types": ["finish", "intrinsic"]
},
{
"atoms": ["node_3", "node_0"],
"types": ["intrinsic", "start"]
},
{
"atoms": ["node_7", "node_0"],
"types": ["intrinsic", "start"]
},
{
"atoms": ["node_11", "node_0"],
"types": ["intrinsic", "start"]
}
]
}
]
}`;
window.traces["GLOBAL_SET"]["overloadOps"] = ''
window.traces["GLOBAL_SET"]["overloadOps__raw"] = ''
window.traces["GLOBAL_SET"]["overloadOps"] += `<pre class='graph'>---
config:
  layout: elk
---
graph TD
	1[\\"Finish"/]
	3 -. Codeptr .-> 1
	7 -. Stack .-> 1
	0 -. Trap Locals Tables Memory Extra .-> 1
	11 -. Globals .-> 1
	11["eff__121 setGlobal"]
	5 --> 11
	3 --> 11
	7 --> 11
	0 -. Globals .-> 11
	0[/"Start"\\]
	7["val pop_Value"]
	5 --> 7
	0 -. Stack .-> 7
	5["tv m_getGlobalType"]
	3 --> 5
	3["index imm_readULEB32"]
	0 -. Codeptr .-> 3
</pre>`;
window.traces["GLOBAL_SET"]["overloadOps__raw"] += `---
config:
  layout: elk
---
graph TD
	1[\\"Finish"/]
	3 -. Codeptr .-> 1
	7 -. Stack .-> 1
	0 -. Trap Locals Tables Memory Extra .-> 1
	11 -. Globals .-> 1
	11["eff__121 setGlobal"]
	5 --> 11
	3 --> 11
	7 --> 11
	0 -. Globals .-> 11
	0[/"Start"\\]
	7["val pop_Value"]
	5 --> 7
	0 -. Stack .-> 7
	5["tv m_getGlobalType"]
	3 --> 5
	3["index imm_readULEB32"]
	0 -. Codeptr .-> 3
`;
window.traces["GLOBAL_SET"]["addAbstractions"] = ''
window.traces["GLOBAL_SET"]["addAbstractions__raw"] = ''
window.traces["GLOBAL_SET"]["addAbstractions"] += `<pre class='graph'>---
config:
  layout: elk
---
graph TD
	1[\\"Finish"/]
	3 -. Codeptr .-> 1
	7 -. Stack .-> 1
	0 -. Trap Locals Tables Memory Extra .-> 1
	11 -. Globals .-> 1
	11["eff__121 setGlobal"]
	5 --> 11
	3 --> 11
	7 --> 11
	0 -. Globals .-> 11
	0[/"Start"\\]
	7["val pop_Value"]
	5 --> 7
	0 -. Stack .-> 7
	5["tv m_getGlobalType"]
	3 --> 5
	3["index imm_readULEB32"]
	0 -. Codeptr .-> 3
</pre>`;
window.traces["GLOBAL_SET"]["addAbstractions__raw"] += `---
config:
  layout: elk
---
graph TD
	1[\\"Finish"/]
	3 -. Codeptr .-> 1
	7 -. Stack .-> 1
	0 -. Trap Locals Tables Memory Extra .-> 1
	11 -. Globals .-> 1
	11["eff__121 setGlobal"]
	5 --> 11
	3 --> 11
	7 --> 11
	0 -. Globals .-> 11
	0[/"Start"\\]
	7["val pop_Value"]
	5 --> 7
	0 -. Stack .-> 7
	5["tv m_getGlobalType"]
	3 --> 5
	3["index imm_readULEB32"]
	0 -. Codeptr .-> 3
`;
window.traces["GLOBAL_SET"]["schedulerMermaid"] = ''
window.traces["GLOBAL_SET"]["schedulerMermaid__raw"] = ''
window.traces["GLOBAL_SET"]["schedulerMermaid"] += `<pre class='graph'>graph TD
subgraph block_105["Block 105"]
	direction TB
	b105_0[/"Start"\\]
	b105_3["index imm_readULEB32"]
	b105_5["tv m_getGlobalType"]
	b105_7["val pop_Value"]
	b105_11["eff__121 setGlobal"]
	b105_1[\\"Finish"/]
	b105_0 --> b105_3
	b105_3 --> b105_5
	b105_5 --> b105_7
	b105_7 --> b105_11
	b105_11 --> b105_1
end

</pre>`;
window.traces["GLOBAL_SET"]["schedulerMermaid__raw"] += `graph TD
subgraph block_105["Block 105"]
	direction TB
	b105_0[/"Start"\\]
	b105_3["index imm_readULEB32"]
	b105_5["tv m_getGlobalType"]
	b105_7["val pop_Value"]
	b105_11["eff__121 setGlobal"]
	b105_1[\\"Finish"/]
	b105_0 --> b105_3
	b105_3 --> b105_5
	b105_5 --> b105_7
	b105_7 --> b105_11
	b105_11 --> b105_1
end

`;
window.traces["GLOBAL_SET"]["unLEM"] = ''
window.traces["GLOBAL_SET"]["unLEM__raw"] = ''
window.traces["GLOBAL_SET"]["unLEM"] += `<pre class='graph'>---
config:
  layout: elk
---
graph TD
	1[\\"Finish"/]
	3 -. Codeptr .-> 1
	7 -. Stack .-> 1
	0 -. Trap Locals Tables Memory Extra .-> 1
	11 -. Globals .-> 1
	11["eff__121 setGlobal"]
	5 --> 11
	3 --> 11
	7 --> 11
	0 -. Globals .-> 11
	0[/"Start"\\]
	7["val pop_Value"]
	5 --> 7
	0 -. Stack .-> 7
	5["tv m_getGlobalType"]
	3 --> 5
	3["index imm_readULEB32"]
	0 -. Codeptr .-> 3
</pre>`;
window.traces["GLOBAL_SET"]["unLEM__raw"] += `---
config:
  layout: elk
---
graph TD
	1[\\"Finish"/]
	3 -. Codeptr .-> 1
	7 -. Stack .-> 1
	0 -. Trap Locals Tables Memory Extra .-> 1
	11 -. Globals .-> 1
	11["eff__121 setGlobal"]
	5 --> 11
	3 --> 11
	7 --> 11
	0 -. Globals .-> 11
	0[/"Start"\\]
	7["val pop_Value"]
	5 --> 7
	0 -. Stack .-> 7
	5["tv m_getGlobalType"]
	3 --> 5
	3["index imm_readULEB32"]
	0 -. Codeptr .-> 3
`;
window.traces["GLOBAL_SET"]["unlem_schedule"] = ''
window.traces["GLOBAL_SET"]["unlem_schedule__raw"] = ''
window.traces["GLOBAL_SET"]["unlem_schedule"] += `<pre class=''>def index = imm_readULEB32();
def tv = m_getGlobalType(index);
def val = pop_Value(tv);
def eff__121 = setGlobal(tv, index, val);
</pre>`;
window.traces["GLOBAL_SET"]["unlem_schedule__raw"] += `def index = imm_readULEB32();
def tv = m_getGlobalType(index);
def val = pop_Value(tv);
def eff__121 = setGlobal(tv, index, val);
`;
window.traces["GLOBAL_SET"]["spytial_ul"] = ''
window.traces["GLOBAL_SET"]["spytial_ul__raw"] = ''
window.traces["GLOBAL_SET"]["spytial_ul"] += `<pre class=''>{
"atoms": [
{
"id": "node_1",
"type": "finish",
"label": "Finish"
},
{
"id": "node_3",
"type": "intrinsic",
"label": "imm_readULEB32 [index]"
},
{
"id": "node_7",
"type": "intrinsic",
"label": "pop_Value [val]"
},
{
"id": "node_0",
"type": "start",
"label": "Start"
},
{
"id": "node_11",
"type": "intrinsic",
"label": "setGlobal [eff__121]"
},
{
"id": "node_5",
"type": "intrinsic",
"label": "m_getGlobalType [tv]"
}
],
"relations": [
{
"id": "uses",
"name": "Uses",
"types": ["sea_node", "sea_node"],
"tuples": [
{
"atoms": ["node_7", "node_5"],
"types": ["intrinsic", "intrinsic"]
},
{
"atoms": ["node_11", "node_5"],
"types": ["intrinsic", "intrinsic"]
},
{
"atoms": ["node_11", "node_3"],
"types": ["intrinsic", "intrinsic"]
},
{
"atoms": ["node_11", "node_7"],
"types": ["intrinsic", "intrinsic"]
},
{
"atoms": ["node_5", "node_3"],
"types": ["intrinsic", "intrinsic"]
}
]
},
{
"id": "state_uses",
"name": "StateUses",
"types": ["sea_node", "sea_node"],
"tuples": [
{
"atoms": ["node_1", "node_3"],
"types": ["finish", "intrinsic"]
},
{
"atoms": ["node_1", "node_7"],
"types": ["finish", "intrinsic"]
},
{
"atoms": ["node_1", "node_0"],
"types": ["finish", "start"]
},
{
"atoms": ["node_1", "node_11"],
"types": ["finish", "intrinsic"]
},
{
"atoms": ["node_3", "node_0"],
"types": ["intrinsic", "start"]
},
{
"atoms": ["node_7", "node_0"],
"types": ["intrinsic", "start"]
},
{
"atoms": ["node_11", "node_0"],
"types": ["intrinsic", "start"]
}
]
}
]
}</pre>`;
window.traces["GLOBAL_SET"]["spytial_ul__raw"] += `{
"atoms": [
{
"id": "node_1",
"type": "finish",
"label": "Finish"
},
{
"id": "node_3",
"type": "intrinsic",
"label": "imm_readULEB32 [index]"
},
{
"id": "node_7",
"type": "intrinsic",
"label": "pop_Value [val]"
},
{
"id": "node_0",
"type": "start",
"label": "Start"
},
{
"id": "node_11",
"type": "intrinsic",
"label": "setGlobal [eff__121]"
},
{
"id": "node_5",
"type": "intrinsic",
"label": "m_getGlobalType [tv]"
}
],
"relations": [
{
"id": "uses",
"name": "Uses",
"types": ["sea_node", "sea_node"],
"tuples": [
{
"atoms": ["node_7", "node_5"],
"types": ["intrinsic", "intrinsic"]
},
{
"atoms": ["node_11", "node_5"],
"types": ["intrinsic", "intrinsic"]
},
{
"atoms": ["node_11", "node_3"],
"types": ["intrinsic", "intrinsic"]
},
{
"atoms": ["node_11", "node_7"],
"types": ["intrinsic", "intrinsic"]
},
{
"atoms": ["node_5", "node_3"],
"types": ["intrinsic", "intrinsic"]
}
]
},
{
"id": "state_uses",
"name": "StateUses",
"types": ["sea_node", "sea_node"],
"tuples": [
{
"atoms": ["node_1", "node_3"],
"types": ["finish", "intrinsic"]
},
{
"atoms": ["node_1", "node_7"],
"types": ["finish", "intrinsic"]
},
{
"atoms": ["node_1", "node_0"],
"types": ["finish", "start"]
},
{
"atoms": ["node_1", "node_11"],
"types": ["finish", "intrinsic"]
},
{
"atoms": ["node_3", "node_0"],
"types": ["intrinsic", "start"]
},
{
"atoms": ["node_7", "node_0"],
"types": ["intrinsic", "start"]
},
{
"atoms": ["node_11", "node_0"],
"types": ["intrinsic", "start"]
}
]
}
]
}`;
window.traces["GLOBAL_SET"]["unlem_scheduler"] = ''
window.traces["GLOBAL_SET"]["unlem_scheduler__raw"] = ''
window.traces["GLOBAL_SET"]["unlem_scheduler"] += `<pre class='graph'>graph TD
subgraph block_106["Block 106"]
	direction TB
	b106_0[/"Start"\\]
	b106_3["index imm_readULEB32"]
	b106_5["tv m_getGlobalType"]
	b106_7["val pop_Value"]
	b106_11["eff__121 setGlobal"]
	b106_1[\\"Finish"/]
	b106_0 --> b106_3
	b106_3 --> b106_5
	b106_5 --> b106_7
	b106_7 --> b106_11
	b106_11 --> b106_1
end

</pre>`;
window.traces["GLOBAL_SET"]["unlem_scheduler__raw"] += `graph TD
subgraph block_106["Block 106"]
	direction TB
	b106_0[/"Start"\\]
	b106_3["index imm_readULEB32"]
	b106_5["tv m_getGlobalType"]
	b106_7["val pop_Value"]
	b106_11["eff__121 setGlobal"]
	b106_1[\\"Finish"/]
	b106_0 --> b106_3
	b106_3 --> b106_5
	b106_5 --> b106_7
	b106_7 --> b106_11
	b106_11 --> b106_1
end

`;
window.traces["GLOBAL_SET"]["unlem_pretty"] = ''
window.traces["GLOBAL_SET"]["unlem_pretty__raw"] = ''
window.traces["GLOBAL_SET"]["unlem_pretty"] += `<pre class=''>def index = imm_readULEB32();
def tv = m_getGlobalType(index);
def val = pop_Value(tv);
setGlobal(tv, index, val);
</pre>`;
window.traces["GLOBAL_SET"]["unlem_pretty__raw"] += `def index = imm_readULEB32();
def tv = m_getGlobalType(index);
def val = pop_Value(tv);
setGlobal(tv, index, val);
`;
window.traces["GLOBAL_SET"]["constUnLEM"] = ''
window.traces["GLOBAL_SET"]["constUnLEM__raw"] = ''
window.traces["GLOBAL_SET"]["constUnLEM"] += `<pre class='graph'>---
config:
  layout: elk
---
graph TD
	1[\\"Finish"/]
	3 -. Codeptr .-> 1
	7 -. Stack .-> 1
	0 -. Trap Locals Tables Memory Extra .-> 1
	11 -. Globals .-> 1
	11["eff__121 setGlobal"]
	5 --> 11
	3 --> 11
	7 --> 11
	0 -. Globals .-> 11
	0[/"Start"\\]
	7["val pop_Value"]
	5 --> 7
	0 -. Stack .-> 7
	5["tv m_getGlobalType"]
	3 --> 5
	3["index imm_readULEB32"]
	0 -. Codeptr .-> 3
</pre>`;
window.traces["GLOBAL_SET"]["constUnLEM__raw"] += `---
config:
  layout: elk
---
graph TD
	1[\\"Finish"/]
	3 -. Codeptr .-> 1
	7 -. Stack .-> 1
	0 -. Trap Locals Tables Memory Extra .-> 1
	11 -. Globals .-> 1
	11["eff__121 setGlobal"]
	5 --> 11
	3 --> 11
	7 --> 11
	0 -. Globals .-> 11
	0[/"Start"\\]
	7["val pop_Value"]
	5 --> 7
	0 -. Stack .-> 7
	5["tv m_getGlobalType"]
	3 --> 5
	3["index imm_readULEB32"]
	0 -. Codeptr .-> 3
`;
window.traces["GLOBAL_SET"]["chooseMerge"] = ''
window.traces["GLOBAL_SET"]["chooseMerge__raw"] = ''
window.traces["GLOBAL_SET"]["chooseMerge"] += `<pre class='graph'>---
config:
  layout: elk
---
graph TD
	1[\\"Finish"/]
	3 -. Codeptr .-> 1
	7 -. Stack .-> 1
	0 -. Trap Locals Tables Memory Extra .-> 1
	11 -. Globals .-> 1
	11["eff__121 setGlobal"]
	5 --> 11
	3 --> 11
	7 --> 11
	0 -. Globals .-> 11
	0[/"Start"\\]
	7["val pop_Value"]
	5 --> 7
	0 -. Stack .-> 7
	5["tv m_getGlobalType"]
	3 --> 5
	3["index imm_readULEB32"]
	0 -. Codeptr .-> 3
</pre>`;
window.traces["GLOBAL_SET"]["chooseMerge__raw"] += `---
config:
  layout: elk
---
graph TD
	1[\\"Finish"/]
	3 -. Codeptr .-> 1
	7 -. Stack .-> 1
	0 -. Trap Locals Tables Memory Extra .-> 1
	11 -. Globals .-> 1
	11["eff__121 setGlobal"]
	5 --> 11
	3 --> 11
	7 --> 11
	0 -. Globals .-> 11
	0[/"Start"\\]
	7["val pop_Value"]
	5 --> 7
	0 -. Stack .-> 7
	5["tv m_getGlobalType"]
	3 --> 5
	3["index imm_readULEB32"]
	0 -. Codeptr .-> 3
`;
window.traces["GLOBAL_SET"]["scheduled"] = ''
window.traces["GLOBAL_SET"]["scheduled__raw"] = ''
window.traces["GLOBAL_SET"]["scheduled"] += `<pre class=''>def index = imm_readULEB32();
def tv = m_getGlobalType(index);
def val = pop_Value(tv);
def eff__121 = setGlobal(tv, index, val);
</pre>`;
window.traces["GLOBAL_SET"]["scheduled__raw"] += `def index = imm_readULEB32();
def tv = m_getGlobalType(index);
def val = pop_Value(tv);
def eff__121 = setGlobal(tv, index, val);
`;
window.traces["GLOBAL_SET"]["pretty"] = ''
window.traces["GLOBAL_SET"]["pretty__raw"] = ''
window.traces["GLOBAL_SET"]["pretty"] += `<pre class=''>def index = imm_readULEB32();
def tv = m_getGlobalType(index);
def val = pop_Value(tv);
setGlobal(tv, index, val);
</pre>`;
window.traces["GLOBAL_SET"]["pretty__raw"] += `def index = imm_readULEB32();
def tv = m_getGlobalType(index);
def val = pop_Value(tv);
setGlobal(tv, index, val);
`;
window.traces["TABLE_GET"] = {}
window.traces["TABLE_GET"]["parsed"] = ''
window.traces["TABLE_GET"]["parsed__raw"] = ''
window.traces["TABLE_GET"]["parsed"] += `<pre class=''>def table_index = imm_readULEB32();
def arg__136 = (table_index);
def cond__127 = m_isTable64(arg__136);
if (cond__127) {
	def index = pop_u64();
	def arg__131 = (index);
	def arg__130 = (table_index);
	def val = mach_readTable64(arg__130, arg__131);
	def arg__129 = (val);
	def eff__128 = push_Object(arg__129);
} else {
	def index = pop_u32();
	def arg__135 = (index);
	def arg__134 = (table_index);
	def val = mach_readTable32(arg__134, arg__135);
	def arg__133 = (val);
	def eff__132 = push_Object(arg__133);
}
// phis: 
</pre>`;
window.traces["TABLE_GET"]["parsed__raw"] += `def table_index = imm_readULEB32();
def arg__136 = (table_index);
def cond__127 = m_isTable64(arg__136);
if (cond__127) {
	def index = pop_u64();
	def arg__131 = (index);
	def arg__130 = (table_index);
	def val = mach_readTable64(arg__130, arg__131);
	def arg__129 = (val);
	def eff__128 = push_Object(arg__129);
} else {
	def index = pop_u32();
	def arg__135 = (index);
	def arg__134 = (table_index);
	def val = mach_readTable32(arg__134, arg__135);
	def arg__133 = (val);
	def eff__132 = push_Object(arg__133);
}
// phis: 
`;
window.traces["TABLE_GET"]["raw"] = ''
window.traces["TABLE_GET"]["raw__raw"] = ''
window.traces["TABLE_GET"]["raw"] += `<pre class='graph'>---
config:
  layout: elk
---
graph TD
	1[\\"Finish"/]
	3 -. Codeptr .-> 1
	18 -. Stack .-> 1
	0 -. Trap Locals Globals Tables Memory Extra .-> 1
	0[/"Start"\\]
	18{{"Sϕ Stack "}}
	5 --> 18
	17 --> 18
	11 --> 18
	11["eff__132 push_Object"]
	9 --> 11
	6 -. Stack .-> 11
	6["index pop_u32"]
	0 -. Stack .-> 6
	9["val mach_readTable32"]
	3 --> 9
	6 --> 9
	3["table_index imm_readULEB32"]
	0 -. Codeptr .-> 3
	17["eff__128 push_Object"]
	15 --> 17
	12 -. Stack .-> 17
	12["index pop_u64"]
	0 -. Stack .-> 12
	15["val mach_readTable64"]
	3 --> 15
	12 --> 15
	5["cond__127 m_isTable64"]
	3 --> 5
</pre>`;
window.traces["TABLE_GET"]["raw__raw"] += `---
config:
  layout: elk
---
graph TD
	1[\\"Finish"/]
	3 -. Codeptr .-> 1
	18 -. Stack .-> 1
	0 -. Trap Locals Globals Tables Memory Extra .-> 1
	0[/"Start"\\]
	18{{"Sϕ Stack "}}
	5 --> 18
	17 --> 18
	11 --> 18
	11["eff__132 push_Object"]
	9 --> 11
	6 -. Stack .-> 11
	6["index pop_u32"]
	0 -. Stack .-> 6
	9["val mach_readTable32"]
	3 --> 9
	6 --> 9
	3["table_index imm_readULEB32"]
	0 -. Codeptr .-> 3
	17["eff__128 push_Object"]
	15 --> 17
	12 -. Stack .-> 17
	12["index pop_u64"]
	0 -. Stack .-> 12
	15["val mach_readTable64"]
	3 --> 15
	12 --> 15
	5["cond__127 m_isTable64"]
	3 --> 5
`;
window.traces["TABLE_GET"]["spytial"] = ''
window.traces["TABLE_GET"]["spytial__raw"] = ''
window.traces["TABLE_GET"]["spytial"] += `<pre class=''>{
"atoms": [
{
"id": "node_1",
"type": "finish",
"label": "Finish"
},
{
"id": "node_3",
"type": "intrinsic",
"label": "imm_readULEB32 [table_index]"
},
{
"id": "node_18",
"type": "state_phi",
"label": "StatePhi [m_isTable64 [cond__127]]"
},
{
"id": "node_0",
"type": "start",
"label": "Start"
},
{
"id": "node_5",
"type": "intrinsic",
"label": "m_isTable64 [cond__127]"
},
{
"id": "node_17",
"type": "intrinsic",
"label": "push_Object [eff__128]"
},
{
"id": "node_11",
"type": "intrinsic",
"label": "push_Object [eff__132]"
},
{
"id": "node_15",
"type": "intrinsic",
"label": "mach_readTable64 [val]"
},
{
"id": "node_12",
"type": "intrinsic",
"label": "pop_u64 [index]"
},
{
"id": "node_9",
"type": "intrinsic",
"label": "mach_readTable32 [val]"
},
{
"id": "node_6",
"type": "intrinsic",
"label": "pop_u32 [index]"
}
],
"relations": [
{
"id": "uses",
"name": "Uses",
"types": ["sea_node", "sea_node"],
"tuples": [
{
"atoms": ["node_5", "node_3"],
"types": ["intrinsic", "intrinsic"]
},
{
"atoms": ["node_17", "node_15"],
"types": ["intrinsic", "intrinsic"]
},
{
"atoms": ["node_11", "node_9"],
"types": ["intrinsic", "intrinsic"]
},
{
"atoms": ["node_15", "node_3"],
"types": ["intrinsic", "intrinsic"]
},
{
"atoms": ["node_15", "node_12"],
"types": ["intrinsic", "intrinsic"]
},
{
"atoms": ["node_9", "node_3"],
"types": ["intrinsic", "intrinsic"]
},
{
"atoms": ["node_9", "node_6"],
"types": ["intrinsic", "intrinsic"]
}
]
},
{
"id": "state_uses",
"name": "StateUses",
"types": ["sea_node", "sea_node"],
"tuples": [
{
"atoms": ["node_1", "node_3"],
"types": ["finish", "intrinsic"]
},
{
"atoms": ["node_1", "node_18"],
"types": ["finish", "state_phi"]
},
{
"atoms": ["node_1", "node_0"],
"types": ["finish", "start"]
},
{
"atoms": ["node_3", "node_0"],
"types": ["intrinsic", "start"]
},
{
"atoms": ["node_17", "node_12"],
"types": ["intrinsic", "intrinsic"]
},
{
"atoms": ["node_11", "node_6"],
"types": ["intrinsic", "intrinsic"]
},
{
"atoms": ["node_12", "node_0"],
"types": ["intrinsic", "start"]
},
{
"atoms": ["node_6", "node_0"],
"types": ["intrinsic", "start"]
}
]
},
{
"id": "phi_cond",
"name": "PhiCond",
"types": ["sea_node", "sea_node"],
"tuples": [
{
"atoms": ["node_18", "node_5"],
"types": ["state_phi", "intrinsic"]
}
]
},
{
"id": "phi_true",
"name": "PhiTrue",
"types": ["sea_node", "sea_node"],
"tuples": [
{
"atoms": ["node_18", "node_17"],
"types": ["state_phi", "intrinsic"]
}
]
},
{
"id": "phi_false",
"name": "PhiFalse",
"types": ["sea_node", "sea_node"],
"tuples": [
{
"atoms": ["node_18", "node_11"],
"types": ["state_phi", "intrinsic"]
}
]
}
]
}</pre>`;
window.traces["TABLE_GET"]["spytial__raw"] += `{
"atoms": [
{
"id": "node_1",
"type": "finish",
"label": "Finish"
},
{
"id": "node_3",
"type": "intrinsic",
"label": "imm_readULEB32 [table_index]"
},
{
"id": "node_18",
"type": "state_phi",
"label": "StatePhi [m_isTable64 [cond__127]]"
},
{
"id": "node_0",
"type": "start",
"label": "Start"
},
{
"id": "node_5",
"type": "intrinsic",
"label": "m_isTable64 [cond__127]"
},
{
"id": "node_17",
"type": "intrinsic",
"label": "push_Object [eff__128]"
},
{
"id": "node_11",
"type": "intrinsic",
"label": "push_Object [eff__132]"
},
{
"id": "node_15",
"type": "intrinsic",
"label": "mach_readTable64 [val]"
},
{
"id": "node_12",
"type": "intrinsic",
"label": "pop_u64 [index]"
},
{
"id": "node_9",
"type": "intrinsic",
"label": "mach_readTable32 [val]"
},
{
"id": "node_6",
"type": "intrinsic",
"label": "pop_u32 [index]"
}
],
"relations": [
{
"id": "uses",
"name": "Uses",
"types": ["sea_node", "sea_node"],
"tuples": [
{
"atoms": ["node_5", "node_3"],
"types": ["intrinsic", "intrinsic"]
},
{
"atoms": ["node_17", "node_15"],
"types": ["intrinsic", "intrinsic"]
},
{
"atoms": ["node_11", "node_9"],
"types": ["intrinsic", "intrinsic"]
},
{
"atoms": ["node_15", "node_3"],
"types": ["intrinsic", "intrinsic"]
},
{
"atoms": ["node_15", "node_12"],
"types": ["intrinsic", "intrinsic"]
},
{
"atoms": ["node_9", "node_3"],
"types": ["intrinsic", "intrinsic"]
},
{
"atoms": ["node_9", "node_6"],
"types": ["intrinsic", "intrinsic"]
}
]
},
{
"id": "state_uses",
"name": "StateUses",
"types": ["sea_node", "sea_node"],
"tuples": [
{
"atoms": ["node_1", "node_3"],
"types": ["finish", "intrinsic"]
},
{
"atoms": ["node_1", "node_18"],
"types": ["finish", "state_phi"]
},
{
"atoms": ["node_1", "node_0"],
"types": ["finish", "start"]
},
{
"atoms": ["node_3", "node_0"],
"types": ["intrinsic", "start"]
},
{
"atoms": ["node_17", "node_12"],
"types": ["intrinsic", "intrinsic"]
},
{
"atoms": ["node_11", "node_6"],
"types": ["intrinsic", "intrinsic"]
},
{
"atoms": ["node_12", "node_0"],
"types": ["intrinsic", "start"]
},
{
"atoms": ["node_6", "node_0"],
"types": ["intrinsic", "start"]
}
]
},
{
"id": "phi_cond",
"name": "PhiCond",
"types": ["sea_node", "sea_node"],
"tuples": [
{
"atoms": ["node_18", "node_5"],
"types": ["state_phi", "intrinsic"]
}
]
},
{
"id": "phi_true",
"name": "PhiTrue",
"types": ["sea_node", "sea_node"],
"tuples": [
{
"atoms": ["node_18", "node_17"],
"types": ["state_phi", "intrinsic"]
}
]
},
{
"id": "phi_false",
"name": "PhiFalse",
"types": ["sea_node", "sea_node"],
"tuples": [
{
"atoms": ["node_18", "node_11"],
"types": ["state_phi", "intrinsic"]
}
]
}
]
}`;
window.traces["TABLE_GET"]["overloadOps"] = ''
window.traces["TABLE_GET"]["overloadOps__raw"] = ''
window.traces["TABLE_GET"]["overloadOps"] += `<pre class='graph'>---
config:
  layout: elk
---
graph TD
	1[\\"Finish"/]
	3 -. Codeptr .-> 1
	18 -. Stack .-> 1
	0 -. Trap Locals Globals Tables Memory Extra .-> 1
	0[/"Start"\\]
	18{{"Sϕ Stack "}}
	5 --> 18
	17 --> 18
	11 --> 18
	11["eff__132 push_Object"]
	9 --> 11
	6 -. Stack .-> 11
	6["index pop_u32"]
	0 -. Stack .-> 6
	9["val mach_readTable32"]
	3 --> 9
	6 --> 9
	3["table_index imm_readULEB32"]
	0 -. Codeptr .-> 3
	17["eff__128 push_Object"]
	15 --> 17
	12 -. Stack .-> 17
	12["index pop_u64"]
	0 -. Stack .-> 12
	15["val mach_readTable64"]
	3 --> 15
	12 --> 15
	5["cond__127 m_isTable64"]
	3 --> 5
</pre>`;
window.traces["TABLE_GET"]["overloadOps__raw"] += `---
config:
  layout: elk
---
graph TD
	1[\\"Finish"/]
	3 -. Codeptr .-> 1
	18 -. Stack .-> 1
	0 -. Trap Locals Globals Tables Memory Extra .-> 1
	0[/"Start"\\]
	18{{"Sϕ Stack "}}
	5 --> 18
	17 --> 18
	11 --> 18
	11["eff__132 push_Object"]
	9 --> 11
	6 -. Stack .-> 11
	6["index pop_u32"]
	0 -. Stack .-> 6
	9["val mach_readTable32"]
	3 --> 9
	6 --> 9
	3["table_index imm_readULEB32"]
	0 -. Codeptr .-> 3
	17["eff__128 push_Object"]
	15 --> 17
	12 -. Stack .-> 17
	12["index pop_u64"]
	0 -. Stack .-> 12
	15["val mach_readTable64"]
	3 --> 15
	12 --> 15
	5["cond__127 m_isTable64"]
	3 --> 5
`;
window.traces["TABLE_GET"]["addAbstractions"] = ''
window.traces["TABLE_GET"]["addAbstractions__raw"] = ''
window.traces["TABLE_GET"]["addAbstractions"] += `<pre class='graph'>---
config:
  layout: elk
---
graph TD
	1[\\"Finish"/]
	3 -. Codeptr .-> 1
	18 -. Stack .-> 1
	0 -. Trap Locals Globals Tables Memory Extra .-> 1
	0[/"Start"\\]
	18{{"Sϕ Stack "}}
	5 --> 18
	17 --> 18
	11 --> 18
	11["eff__132 push_Object"]
	9 --> 11
	6 -. Stack .-> 11
	6["index pop_u32"]
	0 -. Stack .-> 6
	9["val mach_readTable32"]
	3 --> 9
	6 --> 9
	3["table_index imm_readULEB32"]
	0 -. Codeptr .-> 3
	17["eff__128 push_Object"]
	15 --> 17
	12 -. Stack .-> 17
	12["index pop_u64"]
	0 -. Stack .-> 12
	15["val mach_readTable64"]
	3 --> 15
	12 --> 15
	5["cond__127 m_isTable64"]
	3 --> 5
</pre>`;
window.traces["TABLE_GET"]["addAbstractions__raw"] += `---
config:
  layout: elk
---
graph TD
	1[\\"Finish"/]
	3 -. Codeptr .-> 1
	18 -. Stack .-> 1
	0 -. Trap Locals Globals Tables Memory Extra .-> 1
	0[/"Start"\\]
	18{{"Sϕ Stack "}}
	5 --> 18
	17 --> 18
	11 --> 18
	11["eff__132 push_Object"]
	9 --> 11
	6 -. Stack .-> 11
	6["index pop_u32"]
	0 -. Stack .-> 6
	9["val mach_readTable32"]
	3 --> 9
	6 --> 9
	3["table_index imm_readULEB32"]
	0 -. Codeptr .-> 3
	17["eff__128 push_Object"]
	15 --> 17
	12 -. Stack .-> 17
	12["index pop_u64"]
	0 -. Stack .-> 12
	15["val mach_readTable64"]
	3 --> 15
	12 --> 15
	5["cond__127 m_isTable64"]
	3 --> 5
`;
window.traces["TABLE_GET"]["schedulerMermaid"] = ''
window.traces["TABLE_GET"]["schedulerMermaid__raw"] = ''
window.traces["TABLE_GET"]["schedulerMermaid"] += `<pre class='graph'>graph TD
subgraph block_107["Block 107"]
	direction TB
	b107_1[\\"Finish"/]
end
phi_109 --> block_107
subgraph phi_109["Phi 109"]
	p109_18{{"Sϕ Stack "}}
end
block_110 --> phi_109
block_111 --> phi_109
subgraph block_110["Block 110"]
	direction TB
	b110_12["index pop_u64"]
	b110_15["val mach_readTable64"]
	b110_17["eff__128 push_Object"]
	b110_12 --> b110_15
	b110_15 --> b110_17
end
branch_108 --> block_110
subgraph branch_108["Branch 108"]
	br108_5["cond__127 m_isTable64"]

end
block_112 --> branch_108
subgraph block_112["Block 112"]
	direction TB
	b112_0[/"Start"\\]
	b112_3["table_index imm_readULEB32"]
	b112_5["cond__127 m_isTable64"]
	b112_0 --> b112_3
	b112_3 --> b112_5
end
subgraph block_111["Block 111"]
	direction TB
	b111_6["index pop_u32"]
	b111_9["val mach_readTable32"]
	b111_11["eff__132 push_Object"]
	b111_6 --> b111_9
	b111_9 --> b111_11
end
branch_108 --> block_111

</pre>`;
window.traces["TABLE_GET"]["schedulerMermaid__raw"] += `graph TD
subgraph block_107["Block 107"]
	direction TB
	b107_1[\\"Finish"/]
end
phi_109 --> block_107
subgraph phi_109["Phi 109"]
	p109_18{{"Sϕ Stack "}}
end
block_110 --> phi_109
block_111 --> phi_109
subgraph block_110["Block 110"]
	direction TB
	b110_12["index pop_u64"]
	b110_15["val mach_readTable64"]
	b110_17["eff__128 push_Object"]
	b110_12 --> b110_15
	b110_15 --> b110_17
end
branch_108 --> block_110
subgraph branch_108["Branch 108"]
	br108_5["cond__127 m_isTable64"]

end
block_112 --> branch_108
subgraph block_112["Block 112"]
	direction TB
	b112_0[/"Start"\\]
	b112_3["table_index imm_readULEB32"]
	b112_5["cond__127 m_isTable64"]
	b112_0 --> b112_3
	b112_3 --> b112_5
end
subgraph block_111["Block 111"]
	direction TB
	b111_6["index pop_u32"]
	b111_9["val mach_readTable32"]
	b111_11["eff__132 push_Object"]
	b111_6 --> b111_9
	b111_9 --> b111_11
end
branch_108 --> block_111

`;
window.traces["TABLE_GET"]["unLEM"] = ''
window.traces["TABLE_GET"]["unLEM__raw"] = ''
window.traces["TABLE_GET"]["unLEM"] += `<pre class='graph'>---
config:
  layout: elk
---
graph TD
	1[\\"Finish"/]
	3 -. Codeptr .-> 1
	18 -. Stack .-> 1
	0 -. Trap Locals Globals Tables Memory Extra .-> 1
	0[/"Start"\\]
	18{{"Sϕ Stack "}}
	5 --> 18
	17 --> 18
	11 --> 18
	11["eff__132 push_Object"]
	9 --> 11
	6 -. Stack .-> 11
	6["index pop_u32"]
	0 -. Stack .-> 6
	9["val mach_readTable32"]
	3 --> 9
	6 --> 9
	3["table_index imm_readULEB32"]
	0 -. Codeptr .-> 3
	17["eff__128 push_Object"]
	15 --> 17
	12 -. Stack .-> 17
	12["index pop_u64"]
	0 -. Stack .-> 12
	15["val mach_readTable64"]
	3 --> 15
	12 --> 15
	5["cond__127 m_isTable64"]
	3 --> 5
</pre>`;
window.traces["TABLE_GET"]["unLEM__raw"] += `---
config:
  layout: elk
---
graph TD
	1[\\"Finish"/]
	3 -. Codeptr .-> 1
	18 -. Stack .-> 1
	0 -. Trap Locals Globals Tables Memory Extra .-> 1
	0[/"Start"\\]
	18{{"Sϕ Stack "}}
	5 --> 18
	17 --> 18
	11 --> 18
	11["eff__132 push_Object"]
	9 --> 11
	6 -. Stack .-> 11
	6["index pop_u32"]
	0 -. Stack .-> 6
	9["val mach_readTable32"]
	3 --> 9
	6 --> 9
	3["table_index imm_readULEB32"]
	0 -. Codeptr .-> 3
	17["eff__128 push_Object"]
	15 --> 17
	12 -. Stack .-> 17
	12["index pop_u64"]
	0 -. Stack .-> 12
	15["val mach_readTable64"]
	3 --> 15
	12 --> 15
	5["cond__127 m_isTable64"]
	3 --> 5
`;
window.traces["TABLE_GET"]["unlem_schedule"] = ''
window.traces["TABLE_GET"]["unlem_schedule__raw"] = ''
window.traces["TABLE_GET"]["unlem_schedule"] += `<pre class=''>def table_index = imm_readULEB32();
def cond__127 = m_isTable64(table_index);
if (cond__127) {
	def index = pop_u64();
	def val = mach_readTable64(table_index, index);
	def eff__128 = push_Object(val);
} else {
	def index = pop_u32();
	def val = mach_readTable32(table_index, index);
	def eff__132 = push_Object(val);
}
// phis: 
</pre>`;
window.traces["TABLE_GET"]["unlem_schedule__raw"] += `def table_index = imm_readULEB32();
def cond__127 = m_isTable64(table_index);
if (cond__127) {
	def index = pop_u64();
	def val = mach_readTable64(table_index, index);
	def eff__128 = push_Object(val);
} else {
	def index = pop_u32();
	def val = mach_readTable32(table_index, index);
	def eff__132 = push_Object(val);
}
// phis: 
`;
window.traces["TABLE_GET"]["spytial_ul"] = ''
window.traces["TABLE_GET"]["spytial_ul__raw"] = ''
window.traces["TABLE_GET"]["spytial_ul"] += `<pre class=''>{
"atoms": [
{
"id": "node_1",
"type": "finish",
"label": "Finish"
},
{
"id": "node_3",
"type": "intrinsic",
"label": "imm_readULEB32 [table_index]"
},
{
"id": "node_18",
"type": "state_phi",
"label": "StatePhi [m_isTable64 [cond__127]]"
},
{
"id": "node_0",
"type": "start",
"label": "Start"
},
{
"id": "node_5",
"type": "intrinsic",
"label": "m_isTable64 [cond__127]"
},
{
"id": "node_17",
"type": "intrinsic",
"label": "push_Object [eff__128]"
},
{
"id": "node_11",
"type": "intrinsic",
"label": "push_Object [eff__132]"
},
{
"id": "node_15",
"type": "intrinsic",
"label": "mach_readTable64 [val]"
},
{
"id": "node_12",
"type": "intrinsic",
"label": "pop_u64 [index]"
},
{
"id": "node_9",
"type": "intrinsic",
"label": "mach_readTable32 [val]"
},
{
"id": "node_6",
"type": "intrinsic",
"label": "pop_u32 [index]"
}
],
"relations": [
{
"id": "uses",
"name": "Uses",
"types": ["sea_node", "sea_node"],
"tuples": [
{
"atoms": ["node_5", "node_3"],
"types": ["intrinsic", "intrinsic"]
},
{
"atoms": ["node_17", "node_15"],
"types": ["intrinsic", "intrinsic"]
},
{
"atoms": ["node_11", "node_9"],
"types": ["intrinsic", "intrinsic"]
},
{
"atoms": ["node_15", "node_3"],
"types": ["intrinsic", "intrinsic"]
},
{
"atoms": ["node_15", "node_12"],
"types": ["intrinsic", "intrinsic"]
},
{
"atoms": ["node_9", "node_3"],
"types": ["intrinsic", "intrinsic"]
},
{
"atoms": ["node_9", "node_6"],
"types": ["intrinsic", "intrinsic"]
}
]
},
{
"id": "state_uses",
"name": "StateUses",
"types": ["sea_node", "sea_node"],
"tuples": [
{
"atoms": ["node_1", "node_3"],
"types": ["finish", "intrinsic"]
},
{
"atoms": ["node_1", "node_18"],
"types": ["finish", "state_phi"]
},
{
"atoms": ["node_1", "node_0"],
"types": ["finish", "start"]
},
{
"atoms": ["node_3", "node_0"],
"types": ["intrinsic", "start"]
},
{
"atoms": ["node_17", "node_12"],
"types": ["intrinsic", "intrinsic"]
},
{
"atoms": ["node_11", "node_6"],
"types": ["intrinsic", "intrinsic"]
},
{
"atoms": ["node_12", "node_0"],
"types": ["intrinsic", "start"]
},
{
"atoms": ["node_6", "node_0"],
"types": ["intrinsic", "start"]
}
]
},
{
"id": "phi_cond",
"name": "PhiCond",
"types": ["sea_node", "sea_node"],
"tuples": [
{
"atoms": ["node_18", "node_5"],
"types": ["state_phi", "intrinsic"]
}
]
},
{
"id": "phi_true",
"name": "PhiTrue",
"types": ["sea_node", "sea_node"],
"tuples": [
{
"atoms": ["node_18", "node_17"],
"types": ["state_phi", "intrinsic"]
}
]
},
{
"id": "phi_false",
"name": "PhiFalse",
"types": ["sea_node", "sea_node"],
"tuples": [
{
"atoms": ["node_18", "node_11"],
"types": ["state_phi", "intrinsic"]
}
]
}
]
}</pre>`;
window.traces["TABLE_GET"]["spytial_ul__raw"] += `{
"atoms": [
{
"id": "node_1",
"type": "finish",
"label": "Finish"
},
{
"id": "node_3",
"type": "intrinsic",
"label": "imm_readULEB32 [table_index]"
},
{
"id": "node_18",
"type": "state_phi",
"label": "StatePhi [m_isTable64 [cond__127]]"
},
{
"id": "node_0",
"type": "start",
"label": "Start"
},
{
"id": "node_5",
"type": "intrinsic",
"label": "m_isTable64 [cond__127]"
},
{
"id": "node_17",
"type": "intrinsic",
"label": "push_Object [eff__128]"
},
{
"id": "node_11",
"type": "intrinsic",
"label": "push_Object [eff__132]"
},
{
"id": "node_15",
"type": "intrinsic",
"label": "mach_readTable64 [val]"
},
{
"id": "node_12",
"type": "intrinsic",
"label": "pop_u64 [index]"
},
{
"id": "node_9",
"type": "intrinsic",
"label": "mach_readTable32 [val]"
},
{
"id": "node_6",
"type": "intrinsic",
"label": "pop_u32 [index]"
}
],
"relations": [
{
"id": "uses",
"name": "Uses",
"types": ["sea_node", "sea_node"],
"tuples": [
{
"atoms": ["node_5", "node_3"],
"types": ["intrinsic", "intrinsic"]
},
{
"atoms": ["node_17", "node_15"],
"types": ["intrinsic", "intrinsic"]
},
{
"atoms": ["node_11", "node_9"],
"types": ["intrinsic", "intrinsic"]
},
{
"atoms": ["node_15", "node_3"],
"types": ["intrinsic", "intrinsic"]
},
{
"atoms": ["node_15", "node_12"],
"types": ["intrinsic", "intrinsic"]
},
{
"atoms": ["node_9", "node_3"],
"types": ["intrinsic", "intrinsic"]
},
{
"atoms": ["node_9", "node_6"],
"types": ["intrinsic", "intrinsic"]
}
]
},
{
"id": "state_uses",
"name": "StateUses",
"types": ["sea_node", "sea_node"],
"tuples": [
{
"atoms": ["node_1", "node_3"],
"types": ["finish", "intrinsic"]
},
{
"atoms": ["node_1", "node_18"],
"types": ["finish", "state_phi"]
},
{
"atoms": ["node_1", "node_0"],
"types": ["finish", "start"]
},
{
"atoms": ["node_3", "node_0"],
"types": ["intrinsic", "start"]
},
{
"atoms": ["node_17", "node_12"],
"types": ["intrinsic", "intrinsic"]
},
{
"atoms": ["node_11", "node_6"],
"types": ["intrinsic", "intrinsic"]
},
{
"atoms": ["node_12", "node_0"],
"types": ["intrinsic", "start"]
},
{
"atoms": ["node_6", "node_0"],
"types": ["intrinsic", "start"]
}
]
},
{
"id": "phi_cond",
"name": "PhiCond",
"types": ["sea_node", "sea_node"],
"tuples": [
{
"atoms": ["node_18", "node_5"],
"types": ["state_phi", "intrinsic"]
}
]
},
{
"id": "phi_true",
"name": "PhiTrue",
"types": ["sea_node", "sea_node"],
"tuples": [
{
"atoms": ["node_18", "node_17"],
"types": ["state_phi", "intrinsic"]
}
]
},
{
"id": "phi_false",
"name": "PhiFalse",
"types": ["sea_node", "sea_node"],
"tuples": [
{
"atoms": ["node_18", "node_11"],
"types": ["state_phi", "intrinsic"]
}
]
}
]
}`;
window.traces["TABLE_GET"]["unlem_scheduler"] = ''
window.traces["TABLE_GET"]["unlem_scheduler__raw"] = ''
window.traces["TABLE_GET"]["unlem_scheduler"] += `<pre class='graph'>graph TD
subgraph block_113["Block 113"]
	direction TB
	b113_1[\\"Finish"/]
end
phi_115 --> block_113
subgraph phi_115["Phi 115"]
	p115_18{{"Sϕ Stack "}}
end
block_116 --> phi_115
block_117 --> phi_115
subgraph block_116["Block 116"]
	direction TB
	b116_12["index pop_u64"]
	b116_15["val mach_readTable64"]
	b116_17["eff__128 push_Object"]
	b116_12 --> b116_15
	b116_15 --> b116_17
end
branch_114 --> block_116
subgraph branch_114["Branch 114"]
	br114_5["cond__127 m_isTable64"]

end
block_118 --> branch_114
subgraph block_118["Block 118"]
	direction TB
	b118_0[/"Start"\\]
	b118_3["table_index imm_readULEB32"]
	b118_5["cond__127 m_isTable64"]
	b118_0 --> b118_3
	b118_3 --> b118_5
end
subgraph block_117["Block 117"]
	direction TB
	b117_6["index pop_u32"]
	b117_9["val mach_readTable32"]
	b117_11["eff__132 push_Object"]
	b117_6 --> b117_9
	b117_9 --> b117_11
end
branch_114 --> block_117

</pre>`;
window.traces["TABLE_GET"]["unlem_scheduler__raw"] += `graph TD
subgraph block_113["Block 113"]
	direction TB
	b113_1[\\"Finish"/]
end
phi_115 --> block_113
subgraph phi_115["Phi 115"]
	p115_18{{"Sϕ Stack "}}
end
block_116 --> phi_115
block_117 --> phi_115
subgraph block_116["Block 116"]
	direction TB
	b116_12["index pop_u64"]
	b116_15["val mach_readTable64"]
	b116_17["eff__128 push_Object"]
	b116_12 --> b116_15
	b116_15 --> b116_17
end
branch_114 --> block_116
subgraph branch_114["Branch 114"]
	br114_5["cond__127 m_isTable64"]

end
block_118 --> branch_114
subgraph block_118["Block 118"]
	direction TB
	b118_0[/"Start"\\]
	b118_3["table_index imm_readULEB32"]
	b118_5["cond__127 m_isTable64"]
	b118_0 --> b118_3
	b118_3 --> b118_5
end
subgraph block_117["Block 117"]
	direction TB
	b117_6["index pop_u32"]
	b117_9["val mach_readTable32"]
	b117_11["eff__132 push_Object"]
	b117_6 --> b117_9
	b117_9 --> b117_11
end
branch_114 --> block_117

`;
window.traces["TABLE_GET"]["unlem_pretty"] = ''
window.traces["TABLE_GET"]["unlem_pretty__raw"] = ''
window.traces["TABLE_GET"]["unlem_pretty"] += `<pre class=''>def table_index = imm_readULEB32();
def cond = m_isTable64(table_index);
if (cond) {
	def index = pop_u64();
	def val = mach_readTable64(table_index, index);
	push_Object(val);
} else {
	def index = pop_u32();
	def val = mach_readTable32(table_index, index);
	push_Object(val);
}
</pre>`;
window.traces["TABLE_GET"]["unlem_pretty__raw"] += `def table_index = imm_readULEB32();
def cond = m_isTable64(table_index);
if (cond) {
	def index = pop_u64();
	def val = mach_readTable64(table_index, index);
	push_Object(val);
} else {
	def index = pop_u32();
	def val = mach_readTable32(table_index, index);
	push_Object(val);
}
`;
window.traces["TABLE_GET"]["constUnLEM"] = ''
window.traces["TABLE_GET"]["constUnLEM__raw"] = ''
window.traces["TABLE_GET"]["constUnLEM"] += `<pre class='graph'>---
config:
  layout: elk
---
graph TD
	1[\\"Finish"/]
	3 -. Codeptr .-> 1
	18 -. Stack .-> 1
	0 -. Trap Locals Globals Tables Memory Extra .-> 1
	0[/"Start"\\]
	18{{"Sϕ Stack "}}
	5 --> 18
	17 --> 18
	11 --> 18
	11["eff__132 push_Object"]
	9 --> 11
	6 -. Stack .-> 11
	6["index pop_u32"]
	0 -. Stack .-> 6
	9["val mach_readTable32"]
	3 --> 9
	6 --> 9
	3["table_index imm_readULEB32"]
	0 -. Codeptr .-> 3
	17["eff__128 push_Object"]
	15 --> 17
	12 -. Stack .-> 17
	12["index pop_u64"]
	0 -. Stack .-> 12
	15["val mach_readTable64"]
	3 --> 15
	12 --> 15
	5["cond__127 m_isTable64"]
	3 --> 5
</pre>`;
window.traces["TABLE_GET"]["constUnLEM__raw"] += `---
config:
  layout: elk
---
graph TD
	1[\\"Finish"/]
	3 -. Codeptr .-> 1
	18 -. Stack .-> 1
	0 -. Trap Locals Globals Tables Memory Extra .-> 1
	0[/"Start"\\]
	18{{"Sϕ Stack "}}
	5 --> 18
	17 --> 18
	11 --> 18
	11["eff__132 push_Object"]
	9 --> 11
	6 -. Stack .-> 11
	6["index pop_u32"]
	0 -. Stack .-> 6
	9["val mach_readTable32"]
	3 --> 9
	6 --> 9
	3["table_index imm_readULEB32"]
	0 -. Codeptr .-> 3
	17["eff__128 push_Object"]
	15 --> 17
	12 -. Stack .-> 17
	12["index pop_u64"]
	0 -. Stack .-> 12
	15["val mach_readTable64"]
	3 --> 15
	12 --> 15
	5["cond__127 m_isTable64"]
	3 --> 5
`;
window.traces["TABLE_GET"]["chooseMerge"] = ''
window.traces["TABLE_GET"]["chooseMerge__raw"] = ''
window.traces["TABLE_GET"]["chooseMerge"] += `<pre class='graph'>---
config:
  layout: elk
---
graph TD
	1[\\"Finish"/]
	3 -. Codeptr .-> 1
	18 -. Stack .-> 1
	0 -. Trap Locals Globals Tables Memory Extra .-> 1
	0[/"Start"\\]
	18{{"Sϕ Stack "}}
	5 --> 18
	17 --> 18
	11 --> 18
	11["eff__132 push_Object"]
	9 --> 11
	6 -. Stack .-> 11
	6["index pop_u32"]
	0 -. Stack .-> 6
	9["val mach_readTable32"]
	3 --> 9
	6 --> 9
	3["table_index imm_readULEB32"]
	0 -. Codeptr .-> 3
	17["eff__128 push_Object"]
	15 --> 17
	12 -. Stack .-> 17
	12["index pop_u64"]
	0 -. Stack .-> 12
	15["val mach_readTable64"]
	3 --> 15
	12 --> 15
	5["cond__127 m_isTable64"]
	3 --> 5
</pre>`;
window.traces["TABLE_GET"]["chooseMerge__raw"] += `---
config:
  layout: elk
---
graph TD
	1[\\"Finish"/]
	3 -. Codeptr .-> 1
	18 -. Stack .-> 1
	0 -. Trap Locals Globals Tables Memory Extra .-> 1
	0[/"Start"\\]
	18{{"Sϕ Stack "}}
	5 --> 18
	17 --> 18
	11 --> 18
	11["eff__132 push_Object"]
	9 --> 11
	6 -. Stack .-> 11
	6["index pop_u32"]
	0 -. Stack .-> 6
	9["val mach_readTable32"]
	3 --> 9
	6 --> 9
	3["table_index imm_readULEB32"]
	0 -. Codeptr .-> 3
	17["eff__128 push_Object"]
	15 --> 17
	12 -. Stack .-> 17
	12["index pop_u64"]
	0 -. Stack .-> 12
	15["val mach_readTable64"]
	3 --> 15
	12 --> 15
	5["cond__127 m_isTable64"]
	3 --> 5
`;
window.traces["TABLE_GET"]["scheduled"] = ''
window.traces["TABLE_GET"]["scheduled__raw"] = ''
window.traces["TABLE_GET"]["scheduled"] += `<pre class=''>def table_index = imm_readULEB32();
def cond__127 = m_isTable64(table_index);
if (cond__127) {
	def index = pop_u64();
	def val = mach_readTable64(table_index, index);
	def eff__128 = push_Object(val);
} else {
	def index = pop_u32();
	def val = mach_readTable32(table_index, index);
	def eff__132 = push_Object(val);
}
// phis: 
</pre>`;
window.traces["TABLE_GET"]["scheduled__raw"] += `def table_index = imm_readULEB32();
def cond__127 = m_isTable64(table_index);
if (cond__127) {
	def index = pop_u64();
	def val = mach_readTable64(table_index, index);
	def eff__128 = push_Object(val);
} else {
	def index = pop_u32();
	def val = mach_readTable32(table_index, index);
	def eff__132 = push_Object(val);
}
// phis: 
`;
window.traces["TABLE_GET"]["pretty"] = ''
window.traces["TABLE_GET"]["pretty__raw"] = ''
window.traces["TABLE_GET"]["pretty"] += `<pre class=''>def table_index = imm_readULEB32();
def cond = m_isTable64(table_index);
if (cond) {
	def index = pop_u64();
	def val = mach_readTable64(table_index, index);
	push_Object(val);
} else {
	def index = pop_u32();
	def val = mach_readTable32(table_index, index);
	push_Object(val);
}
</pre>`;
window.traces["TABLE_GET"]["pretty__raw"] += `def table_index = imm_readULEB32();
def cond = m_isTable64(table_index);
if (cond) {
	def index = pop_u64();
	def val = mach_readTable64(table_index, index);
	push_Object(val);
} else {
	def index = pop_u32();
	def val = mach_readTable32(table_index, index);
	push_Object(val);
}
`;
window.traces["TABLE_SET"] = {}
window.traces["TABLE_SET"]["parsed"] = ''
window.traces["TABLE_SET"]["parsed__raw"] = ''
window.traces["TABLE_SET"]["parsed"] += `<pre class=''>def table_index = imm_readULEB32();
def arg__146 = (table_index);
def cond__137 = m_isTable64(arg__146);
if (cond__137) {
	def val = pop_Object();
	def index = pop_u64();
	def arg__141 = (val);
	def arg__140 = (index);
	def arg__139 = (table_index);
	def eff__138 = mach_writeTable64(arg__139, arg__140, arg__141);
} else {
	def val = pop_Object();
	def index = pop_u32();
	def arg__145 = (val);
	def arg__144 = (index);
	def arg__143 = (table_index);
	def eff__142 = mach_writeTable32(arg__143, arg__144, arg__145);
}
// phis: 
</pre>`;
window.traces["TABLE_SET"]["parsed__raw"] += `def table_index = imm_readULEB32();
def arg__146 = (table_index);
def cond__137 = m_isTable64(arg__146);
if (cond__137) {
	def val = pop_Object();
	def index = pop_u64();
	def arg__141 = (val);
	def arg__140 = (index);
	def arg__139 = (table_index);
	def eff__138 = mach_writeTable64(arg__139, arg__140, arg__141);
} else {
	def val = pop_Object();
	def index = pop_u32();
	def arg__145 = (val);
	def arg__144 = (index);
	def arg__143 = (table_index);
	def eff__142 = mach_writeTable32(arg__143, arg__144, arg__145);
}
// phis: 
`;
window.traces["TABLE_SET"]["raw"] = ''
window.traces["TABLE_SET"]["raw__raw"] = ''
window.traces["TABLE_SET"]["raw"] += `<pre class='graph'>---
config:
  layout: elk
---
graph TD
	1[\\"Finish"/]
	3 -. Codeptr .-> 1
	18 -. Stack .-> 1
	0 -. Trap Locals Globals Tables Memory Extra .-> 1
	0[/"Start"\\]
	18{{"Sϕ Stack "}}
	5 --> 18
	13 --> 18
	7 --> 18
	7["index pop_u32"]
	6 -. Stack .-> 7
	6["val pop_Object"]
	0 -. Stack .-> 6
	13["index pop_u64"]
	12 -. Stack .-> 13
	12["val pop_Object"]
	0 -. Stack .-> 12
	5["cond__137 m_isTable64"]
	3 --> 5
	3["table_index imm_readULEB32"]
	0 -. Codeptr .-> 3
</pre>`;
window.traces["TABLE_SET"]["raw__raw"] += `---
config:
  layout: elk
---
graph TD
	1[\\"Finish"/]
	3 -. Codeptr .-> 1
	18 -. Stack .-> 1
	0 -. Trap Locals Globals Tables Memory Extra .-> 1
	0[/"Start"\\]
	18{{"Sϕ Stack "}}
	5 --> 18
	13 --> 18
	7 --> 18
	7["index pop_u32"]
	6 -. Stack .-> 7
	6["val pop_Object"]
	0 -. Stack .-> 6
	13["index pop_u64"]
	12 -. Stack .-> 13
	12["val pop_Object"]
	0 -. Stack .-> 12
	5["cond__137 m_isTable64"]
	3 --> 5
	3["table_index imm_readULEB32"]
	0 -. Codeptr .-> 3
`;
window.traces["TABLE_SET"]["spytial"] = ''
window.traces["TABLE_SET"]["spytial__raw"] = ''
window.traces["TABLE_SET"]["spytial"] += `<pre class=''>{
"atoms": [
{
"id": "node_1",
"type": "finish",
"label": "Finish"
},
{
"id": "node_3",
"type": "intrinsic",
"label": "imm_readULEB32 [table_index]"
},
{
"id": "node_18",
"type": "state_phi",
"label": "StatePhi [m_isTable64 [cond__137]]"
},
{
"id": "node_0",
"type": "start",
"label": "Start"
},
{
"id": "node_5",
"type": "intrinsic",
"label": "m_isTable64 [cond__137]"
},
{
"id": "node_13",
"type": "intrinsic",
"label": "pop_u64 [index]"
},
{
"id": "node_7",
"type": "intrinsic",
"label": "pop_u32 [index]"
},
{
"id": "node_12",
"type": "intrinsic",
"label": "pop_Object [val]"
},
{
"id": "node_6",
"type": "intrinsic",
"label": "pop_Object [val]"
}
],
"relations": [
{
"id": "uses",
"name": "Uses",
"types": ["sea_node", "sea_node"],
"tuples": [
{
"atoms": ["node_5", "node_3"],
"types": ["intrinsic", "intrinsic"]
}
]
},
{
"id": "state_uses",
"name": "StateUses",
"types": ["sea_node", "sea_node"],
"tuples": [
{
"atoms": ["node_1", "node_3"],
"types": ["finish", "intrinsic"]
},
{
"atoms": ["node_1", "node_18"],
"types": ["finish", "state_phi"]
},
{
"atoms": ["node_1", "node_0"],
"types": ["finish", "start"]
},
{
"atoms": ["node_3", "node_0"],
"types": ["intrinsic", "start"]
},
{
"atoms": ["node_13", "node_12"],
"types": ["intrinsic", "intrinsic"]
},
{
"atoms": ["node_7", "node_6"],
"types": ["intrinsic", "intrinsic"]
},
{
"atoms": ["node_12", "node_0"],
"types": ["intrinsic", "start"]
},
{
"atoms": ["node_6", "node_0"],
"types": ["intrinsic", "start"]
}
]
},
{
"id": "phi_cond",
"name": "PhiCond",
"types": ["sea_node", "sea_node"],
"tuples": [
{
"atoms": ["node_18", "node_5"],
"types": ["state_phi", "intrinsic"]
}
]
},
{
"id": "phi_true",
"name": "PhiTrue",
"types": ["sea_node", "sea_node"],
"tuples": [
{
"atoms": ["node_18", "node_13"],
"types": ["state_phi", "intrinsic"]
}
]
},
{
"id": "phi_false",
"name": "PhiFalse",
"types": ["sea_node", "sea_node"],
"tuples": [
{
"atoms": ["node_18", "node_7"],
"types": ["state_phi", "intrinsic"]
}
]
}
]
}</pre>`;
window.traces["TABLE_SET"]["spytial__raw"] += `{
"atoms": [
{
"id": "node_1",
"type": "finish",
"label": "Finish"
},
{
"id": "node_3",
"type": "intrinsic",
"label": "imm_readULEB32 [table_index]"
},
{
"id": "node_18",
"type": "state_phi",
"label": "StatePhi [m_isTable64 [cond__137]]"
},
{
"id": "node_0",
"type": "start",
"label": "Start"
},
{
"id": "node_5",
"type": "intrinsic",
"label": "m_isTable64 [cond__137]"
},
{
"id": "node_13",
"type": "intrinsic",
"label": "pop_u64 [index]"
},
{
"id": "node_7",
"type": "intrinsic",
"label": "pop_u32 [index]"
},
{
"id": "node_12",
"type": "intrinsic",
"label": "pop_Object [val]"
},
{
"id": "node_6",
"type": "intrinsic",
"label": "pop_Object [val]"
}
],
"relations": [
{
"id": "uses",
"name": "Uses",
"types": ["sea_node", "sea_node"],
"tuples": [
{
"atoms": ["node_5", "node_3"],
"types": ["intrinsic", "intrinsic"]
}
]
},
{
"id": "state_uses",
"name": "StateUses",
"types": ["sea_node", "sea_node"],
"tuples": [
{
"atoms": ["node_1", "node_3"],
"types": ["finish", "intrinsic"]
},
{
"atoms": ["node_1", "node_18"],
"types": ["finish", "state_phi"]
},
{
"atoms": ["node_1", "node_0"],
"types": ["finish", "start"]
},
{
"atoms": ["node_3", "node_0"],
"types": ["intrinsic", "start"]
},
{
"atoms": ["node_13", "node_12"],
"types": ["intrinsic", "intrinsic"]
},
{
"atoms": ["node_7", "node_6"],
"types": ["intrinsic", "intrinsic"]
},
{
"atoms": ["node_12", "node_0"],
"types": ["intrinsic", "start"]
},
{
"atoms": ["node_6", "node_0"],
"types": ["intrinsic", "start"]
}
]
},
{
"id": "phi_cond",
"name": "PhiCond",
"types": ["sea_node", "sea_node"],
"tuples": [
{
"atoms": ["node_18", "node_5"],
"types": ["state_phi", "intrinsic"]
}
]
},
{
"id": "phi_true",
"name": "PhiTrue",
"types": ["sea_node", "sea_node"],
"tuples": [
{
"atoms": ["node_18", "node_13"],
"types": ["state_phi", "intrinsic"]
}
]
},
{
"id": "phi_false",
"name": "PhiFalse",
"types": ["sea_node", "sea_node"],
"tuples": [
{
"atoms": ["node_18", "node_7"],
"types": ["state_phi", "intrinsic"]
}
]
}
]
}`;
window.traces["TABLE_SET"]["overloadOps"] = ''
window.traces["TABLE_SET"]["overloadOps__raw"] = ''
window.traces["TABLE_SET"]["overloadOps"] += `<pre class='graph'>---
config:
  layout: elk
---
graph TD
	1[\\"Finish"/]
	3 -. Codeptr .-> 1
	18 -. Stack .-> 1
	0 -. Trap Locals Globals Tables Memory Extra .-> 1
	0[/"Start"\\]
	18{{"Sϕ Stack "}}
	5 --> 18
	13 --> 18
	7 --> 18
	7["index pop_u32"]
	6 -. Stack .-> 7
	6["val pop_Object"]
	0 -. Stack .-> 6
	13["index pop_u64"]
	12 -. Stack .-> 13
	12["val pop_Object"]
	0 -. Stack .-> 12
	5["cond__137 m_isTable64"]
	3 --> 5
	3["table_index imm_readULEB32"]
	0 -. Codeptr .-> 3
</pre>`;
window.traces["TABLE_SET"]["overloadOps__raw"] += `---
config:
  layout: elk
---
graph TD
	1[\\"Finish"/]
	3 -. Codeptr .-> 1
	18 -. Stack .-> 1
	0 -. Trap Locals Globals Tables Memory Extra .-> 1
	0[/"Start"\\]
	18{{"Sϕ Stack "}}
	5 --> 18
	13 --> 18
	7 --> 18
	7["index pop_u32"]
	6 -. Stack .-> 7
	6["val pop_Object"]
	0 -. Stack .-> 6
	13["index pop_u64"]
	12 -. Stack .-> 13
	12["val pop_Object"]
	0 -. Stack .-> 12
	5["cond__137 m_isTable64"]
	3 --> 5
	3["table_index imm_readULEB32"]
	0 -. Codeptr .-> 3
`;
window.traces["TABLE_SET"]["addAbstractions"] = ''
window.traces["TABLE_SET"]["addAbstractions__raw"] = ''
window.traces["TABLE_SET"]["addAbstractions"] += `<pre class='graph'>---
config:
  layout: elk
---
graph TD
	1[\\"Finish"/]
	3 -. Codeptr .-> 1
	18 -. Stack .-> 1
	0 -. Trap Locals Globals Tables Memory Extra .-> 1
	0[/"Start"\\]
	18{{"Sϕ Stack "}}
	5 --> 18
	13 --> 18
	7 --> 18
	7["index pop_u32"]
	6 -. Stack .-> 7
	6["val pop_Object"]
	0 -. Stack .-> 6
	13["index pop_u64"]
	12 -. Stack .-> 13
	12["val pop_Object"]
	0 -. Stack .-> 12
	5["cond__137 m_isTable64"]
	3 --> 5
	3["table_index imm_readULEB32"]
	0 -. Codeptr .-> 3
</pre>`;
window.traces["TABLE_SET"]["addAbstractions__raw"] += `---
config:
  layout: elk
---
graph TD
	1[\\"Finish"/]
	3 -. Codeptr .-> 1
	18 -. Stack .-> 1
	0 -. Trap Locals Globals Tables Memory Extra .-> 1
	0[/"Start"\\]
	18{{"Sϕ Stack "}}
	5 --> 18
	13 --> 18
	7 --> 18
	7["index pop_u32"]
	6 -. Stack .-> 7
	6["val pop_Object"]
	0 -. Stack .-> 6
	13["index pop_u64"]
	12 -. Stack .-> 13
	12["val pop_Object"]
	0 -. Stack .-> 12
	5["cond__137 m_isTable64"]
	3 --> 5
	3["table_index imm_readULEB32"]
	0 -. Codeptr .-> 3
`;
window.traces["TABLE_SET"]["schedulerMermaid"] = ''
window.traces["TABLE_SET"]["schedulerMermaid__raw"] = ''
window.traces["TABLE_SET"]["schedulerMermaid"] += `<pre class='graph'>graph TD
subgraph block_119["Block 119"]
	direction TB
	b119_1[\\"Finish"/]
end
phi_121 --> block_119
subgraph phi_121["Phi 121"]
	p121_18{{"Sϕ Stack "}}
end
block_122 --> phi_121
block_123 --> phi_121
subgraph block_122["Block 122"]
	direction TB
	b122_12["val pop_Object"]
	b122_13["index pop_u64"]
	b122_12 --> b122_13
end
branch_120 --> block_122
subgraph branch_120["Branch 120"]
	br120_5["cond__137 m_isTable64"]

end
block_124 --> branch_120
subgraph block_124["Block 124"]
	direction TB
	b124_0[/"Start"\\]
	b124_3["table_index imm_readULEB32"]
	b124_5["cond__137 m_isTable64"]
	b124_0 --> b124_3
	b124_3 --> b124_5
end
subgraph block_123["Block 123"]
	direction TB
	b123_6["val pop_Object"]
	b123_7["index pop_u32"]
	b123_6 --> b123_7
end
branch_120 --> block_123

</pre>`;
window.traces["TABLE_SET"]["schedulerMermaid__raw"] += `graph TD
subgraph block_119["Block 119"]
	direction TB
	b119_1[\\"Finish"/]
end
phi_121 --> block_119
subgraph phi_121["Phi 121"]
	p121_18{{"Sϕ Stack "}}
end
block_122 --> phi_121
block_123 --> phi_121
subgraph block_122["Block 122"]
	direction TB
	b122_12["val pop_Object"]
	b122_13["index pop_u64"]
	b122_12 --> b122_13
end
branch_120 --> block_122
subgraph branch_120["Branch 120"]
	br120_5["cond__137 m_isTable64"]

end
block_124 --> branch_120
subgraph block_124["Block 124"]
	direction TB
	b124_0[/"Start"\\]
	b124_3["table_index imm_readULEB32"]
	b124_5["cond__137 m_isTable64"]
	b124_0 --> b124_3
	b124_3 --> b124_5
end
subgraph block_123["Block 123"]
	direction TB
	b123_6["val pop_Object"]
	b123_7["index pop_u32"]
	b123_6 --> b123_7
end
branch_120 --> block_123

`;
window.traces["TABLE_SET"]["unLEM"] = ''
window.traces["TABLE_SET"]["unLEM__raw"] = ''
window.traces["TABLE_SET"]["unLEM"] += `<pre class='graph'>---
config:
  layout: elk
---
graph TD
	1[\\"Finish"/]
	3 -. Codeptr .-> 1
	18 -. Stack .-> 1
	0 -. Trap Locals Globals Tables Memory Extra .-> 1
	0[/"Start"\\]
	18{{"Sϕ Stack "}}
	5 --> 18
	13 --> 18
	7 --> 18
	7["index pop_u32"]
	6 -. Stack .-> 7
	6["val pop_Object"]
	0 -. Stack .-> 6
	13["index pop_u64"]
	12 -. Stack .-> 13
	12["val pop_Object"]
	0 -. Stack .-> 12
	5["cond__137 m_isTable64"]
	3 --> 5
	3["table_index imm_readULEB32"]
	0 -. Codeptr .-> 3
</pre>`;
window.traces["TABLE_SET"]["unLEM__raw"] += `---
config:
  layout: elk
---
graph TD
	1[\\"Finish"/]
	3 -. Codeptr .-> 1
	18 -. Stack .-> 1
	0 -. Trap Locals Globals Tables Memory Extra .-> 1
	0[/"Start"\\]
	18{{"Sϕ Stack "}}
	5 --> 18
	13 --> 18
	7 --> 18
	7["index pop_u32"]
	6 -. Stack .-> 7
	6["val pop_Object"]
	0 -. Stack .-> 6
	13["index pop_u64"]
	12 -. Stack .-> 13
	12["val pop_Object"]
	0 -. Stack .-> 12
	5["cond__137 m_isTable64"]
	3 --> 5
	3["table_index imm_readULEB32"]
	0 -. Codeptr .-> 3
`;
window.traces["TABLE_SET"]["unlem_schedule"] = ''
window.traces["TABLE_SET"]["unlem_schedule__raw"] = ''
window.traces["TABLE_SET"]["unlem_schedule"] += `<pre class=''>def table_index = imm_readULEB32();
def cond__137 = m_isTable64(table_index);
if (cond__137) {
	def val = pop_Object();
	def index = pop_u64();
} else {
	def val = pop_Object();
	def index = pop_u32();
}
// phis: 
</pre>`;
window.traces["TABLE_SET"]["unlem_schedule__raw"] += `def table_index = imm_readULEB32();
def cond__137 = m_isTable64(table_index);
if (cond__137) {
	def val = pop_Object();
	def index = pop_u64();
} else {
	def val = pop_Object();
	def index = pop_u32();
}
// phis: 
`;
window.traces["TABLE_SET"]["spytial_ul"] = ''
window.traces["TABLE_SET"]["spytial_ul__raw"] = ''
window.traces["TABLE_SET"]["spytial_ul"] += `<pre class=''>{
"atoms": [
{
"id": "node_1",
"type": "finish",
"label": "Finish"
},
{
"id": "node_3",
"type": "intrinsic",
"label": "imm_readULEB32 [table_index]"
},
{
"id": "node_18",
"type": "state_phi",
"label": "StatePhi [m_isTable64 [cond__137]]"
},
{
"id": "node_0",
"type": "start",
"label": "Start"
},
{
"id": "node_5",
"type": "intrinsic",
"label": "m_isTable64 [cond__137]"
},
{
"id": "node_13",
"type": "intrinsic",
"label": "pop_u64 [index]"
},
{
"id": "node_7",
"type": "intrinsic",
"label": "pop_u32 [index]"
},
{
"id": "node_12",
"type": "intrinsic",
"label": "pop_Object [val]"
},
{
"id": "node_6",
"type": "intrinsic",
"label": "pop_Object [val]"
}
],
"relations": [
{
"id": "uses",
"name": "Uses",
"types": ["sea_node", "sea_node"],
"tuples": [
{
"atoms": ["node_5", "node_3"],
"types": ["intrinsic", "intrinsic"]
}
]
},
{
"id": "state_uses",
"name": "StateUses",
"types": ["sea_node", "sea_node"],
"tuples": [
{
"atoms": ["node_1", "node_3"],
"types": ["finish", "intrinsic"]
},
{
"atoms": ["node_1", "node_18"],
"types": ["finish", "state_phi"]
},
{
"atoms": ["node_1", "node_0"],
"types": ["finish", "start"]
},
{
"atoms": ["node_3", "node_0"],
"types": ["intrinsic", "start"]
},
{
"atoms": ["node_13", "node_12"],
"types": ["intrinsic", "intrinsic"]
},
{
"atoms": ["node_7", "node_6"],
"types": ["intrinsic", "intrinsic"]
},
{
"atoms": ["node_12", "node_0"],
"types": ["intrinsic", "start"]
},
{
"atoms": ["node_6", "node_0"],
"types": ["intrinsic", "start"]
}
]
},
{
"id": "phi_cond",
"name": "PhiCond",
"types": ["sea_node", "sea_node"],
"tuples": [
{
"atoms": ["node_18", "node_5"],
"types": ["state_phi", "intrinsic"]
}
]
},
{
"id": "phi_true",
"name": "PhiTrue",
"types": ["sea_node", "sea_node"],
"tuples": [
{
"atoms": ["node_18", "node_13"],
"types": ["state_phi", "intrinsic"]
}
]
},
{
"id": "phi_false",
"name": "PhiFalse",
"types": ["sea_node", "sea_node"],
"tuples": [
{
"atoms": ["node_18", "node_7"],
"types": ["state_phi", "intrinsic"]
}
]
}
]
}</pre>`;
window.traces["TABLE_SET"]["spytial_ul__raw"] += `{
"atoms": [
{
"id": "node_1",
"type": "finish",
"label": "Finish"
},
{
"id": "node_3",
"type": "intrinsic",
"label": "imm_readULEB32 [table_index]"
},
{
"id": "node_18",
"type": "state_phi",
"label": "StatePhi [m_isTable64 [cond__137]]"
},
{
"id": "node_0",
"type": "start",
"label": "Start"
},
{
"id": "node_5",
"type": "intrinsic",
"label": "m_isTable64 [cond__137]"
},
{
"id": "node_13",
"type": "intrinsic",
"label": "pop_u64 [index]"
},
{
"id": "node_7",
"type": "intrinsic",
"label": "pop_u32 [index]"
},
{
"id": "node_12",
"type": "intrinsic",
"label": "pop_Object [val]"
},
{
"id": "node_6",
"type": "intrinsic",
"label": "pop_Object [val]"
}
],
"relations": [
{
"id": "uses",
"name": "Uses",
"types": ["sea_node", "sea_node"],
"tuples": [
{
"atoms": ["node_5", "node_3"],
"types": ["intrinsic", "intrinsic"]
}
]
},
{
"id": "state_uses",
"name": "StateUses",
"types": ["sea_node", "sea_node"],
"tuples": [
{
"atoms": ["node_1", "node_3"],
"types": ["finish", "intrinsic"]
},
{
"atoms": ["node_1", "node_18"],
"types": ["finish", "state_phi"]
},
{
"atoms": ["node_1", "node_0"],
"types": ["finish", "start"]
},
{
"atoms": ["node_3", "node_0"],
"types": ["intrinsic", "start"]
},
{
"atoms": ["node_13", "node_12"],
"types": ["intrinsic", "intrinsic"]
},
{
"atoms": ["node_7", "node_6"],
"types": ["intrinsic", "intrinsic"]
},
{
"atoms": ["node_12", "node_0"],
"types": ["intrinsic", "start"]
},
{
"atoms": ["node_6", "node_0"],
"types": ["intrinsic", "start"]
}
]
},
{
"id": "phi_cond",
"name": "PhiCond",
"types": ["sea_node", "sea_node"],
"tuples": [
{
"atoms": ["node_18", "node_5"],
"types": ["state_phi", "intrinsic"]
}
]
},
{
"id": "phi_true",
"name": "PhiTrue",
"types": ["sea_node", "sea_node"],
"tuples": [
{
"atoms": ["node_18", "node_13"],
"types": ["state_phi", "intrinsic"]
}
]
},
{
"id": "phi_false",
"name": "PhiFalse",
"types": ["sea_node", "sea_node"],
"tuples": [
{
"atoms": ["node_18", "node_7"],
"types": ["state_phi", "intrinsic"]
}
]
}
]
}`;
window.traces["TABLE_SET"]["unlem_scheduler"] = ''
window.traces["TABLE_SET"]["unlem_scheduler__raw"] = ''
window.traces["TABLE_SET"]["unlem_scheduler"] += `<pre class='graph'>graph TD
subgraph block_125["Block 125"]
	direction TB
	b125_1[\\"Finish"/]
end
phi_127 --> block_125
subgraph phi_127["Phi 127"]
	p127_18{{"Sϕ Stack "}}
end
block_128 --> phi_127
block_129 --> phi_127
subgraph block_128["Block 128"]
	direction TB
	b128_12["val pop_Object"]
	b128_13["index pop_u64"]
	b128_12 --> b128_13
end
branch_126 --> block_128
subgraph branch_126["Branch 126"]
	br126_5["cond__137 m_isTable64"]

end
block_130 --> branch_126
subgraph block_130["Block 130"]
	direction TB
	b130_0[/"Start"\\]
	b130_3["table_index imm_readULEB32"]
	b130_5["cond__137 m_isTable64"]
	b130_0 --> b130_3
	b130_3 --> b130_5
end
subgraph block_129["Block 129"]
	direction TB
	b129_6["val pop_Object"]
	b129_7["index pop_u32"]
	b129_6 --> b129_7
end
branch_126 --> block_129

</pre>`;
window.traces["TABLE_SET"]["unlem_scheduler__raw"] += `graph TD
subgraph block_125["Block 125"]
	direction TB
	b125_1[\\"Finish"/]
end
phi_127 --> block_125
subgraph phi_127["Phi 127"]
	p127_18{{"Sϕ Stack "}}
end
block_128 --> phi_127
block_129 --> phi_127
subgraph block_128["Block 128"]
	direction TB
	b128_12["val pop_Object"]
	b128_13["index pop_u64"]
	b128_12 --> b128_13
end
branch_126 --> block_128
subgraph branch_126["Branch 126"]
	br126_5["cond__137 m_isTable64"]

end
block_130 --> branch_126
subgraph block_130["Block 130"]
	direction TB
	b130_0[/"Start"\\]
	b130_3["table_index imm_readULEB32"]
	b130_5["cond__137 m_isTable64"]
	b130_0 --> b130_3
	b130_3 --> b130_5
end
subgraph block_129["Block 129"]
	direction TB
	b129_6["val pop_Object"]
	b129_7["index pop_u32"]
	b129_6 --> b129_7
end
branch_126 --> block_129

`;
window.traces["TABLE_SET"]["unlem_pretty"] = ''
window.traces["TABLE_SET"]["unlem_pretty__raw"] = ''
window.traces["TABLE_SET"]["unlem_pretty"] += `<pre class=''>def table_index = imm_readULEB32();
def cond = m_isTable64(table_index);
if (cond) {
	def val = pop_Object();
	def index = pop_u64();
} else {
	def val = pop_Object();
	def index = pop_u32();
}
</pre>`;
window.traces["TABLE_SET"]["unlem_pretty__raw"] += `def table_index = imm_readULEB32();
def cond = m_isTable64(table_index);
if (cond) {
	def val = pop_Object();
	def index = pop_u64();
} else {
	def val = pop_Object();
	def index = pop_u32();
}
`;
window.traces["TABLE_SET"]["constUnLEM"] = ''
window.traces["TABLE_SET"]["constUnLEM__raw"] = ''
window.traces["TABLE_SET"]["constUnLEM"] += `<pre class='graph'>---
config:
  layout: elk
---
graph TD
	1[\\"Finish"/]
	3 -. Codeptr .-> 1
	18 -. Stack .-> 1
	0 -. Trap Locals Globals Tables Memory Extra .-> 1
	0[/"Start"\\]
	18{{"Sϕ Stack "}}
	5 --> 18
	13 --> 18
	7 --> 18
	7["index pop_u32"]
	6 -. Stack .-> 7
	6["val pop_Object"]
	0 -. Stack .-> 6
	13["index pop_u64"]
	12 -. Stack .-> 13
	12["val pop_Object"]
	0 -. Stack .-> 12
	5["cond__137 m_isTable64"]
	3 --> 5
	3["table_index imm_readULEB32"]
	0 -. Codeptr .-> 3
</pre>`;
window.traces["TABLE_SET"]["constUnLEM__raw"] += `---
config:
  layout: elk
---
graph TD
	1[\\"Finish"/]
	3 -. Codeptr .-> 1
	18 -. Stack .-> 1
	0 -. Trap Locals Globals Tables Memory Extra .-> 1
	0[/"Start"\\]
	18{{"Sϕ Stack "}}
	5 --> 18
	13 --> 18
	7 --> 18
	7["index pop_u32"]
	6 -. Stack .-> 7
	6["val pop_Object"]
	0 -. Stack .-> 6
	13["index pop_u64"]
	12 -. Stack .-> 13
	12["val pop_Object"]
	0 -. Stack .-> 12
	5["cond__137 m_isTable64"]
	3 --> 5
	3["table_index imm_readULEB32"]
	0 -. Codeptr .-> 3
`;
window.traces["TABLE_SET"]["chooseMerge"] = ''
window.traces["TABLE_SET"]["chooseMerge__raw"] = ''
window.traces["TABLE_SET"]["chooseMerge"] += `<pre class='graph'>---
config:
  layout: elk
---
graph TD
	1[\\"Finish"/]
	3 -. Codeptr .-> 1
	18 -. Stack .-> 1
	0 -. Trap Locals Globals Tables Memory Extra .-> 1
	0[/"Start"\\]
	18{{"Sϕ Stack "}}
	5 --> 18
	13 --> 18
	7 --> 18
	7["index pop_u32"]
	6 -. Stack .-> 7
	6["val pop_Object"]
	0 -. Stack .-> 6
	13["index pop_u64"]
	12 -. Stack .-> 13
	12["val pop_Object"]
	0 -. Stack .-> 12
	5["cond__137 m_isTable64"]
	3 --> 5
	3["table_index imm_readULEB32"]
	0 -. Codeptr .-> 3
</pre>`;
window.traces["TABLE_SET"]["chooseMerge__raw"] += `---
config:
  layout: elk
---
graph TD
	1[\\"Finish"/]
	3 -. Codeptr .-> 1
	18 -. Stack .-> 1
	0 -. Trap Locals Globals Tables Memory Extra .-> 1
	0[/"Start"\\]
	18{{"Sϕ Stack "}}
	5 --> 18
	13 --> 18
	7 --> 18
	7["index pop_u32"]
	6 -. Stack .-> 7
	6["val pop_Object"]
	0 -. Stack .-> 6
	13["index pop_u64"]
	12 -. Stack .-> 13
	12["val pop_Object"]
	0 -. Stack .-> 12
	5["cond__137 m_isTable64"]
	3 --> 5
	3["table_index imm_readULEB32"]
	0 -. Codeptr .-> 3
`;
window.traces["TABLE_SET"]["scheduled"] = ''
window.traces["TABLE_SET"]["scheduled__raw"] = ''
window.traces["TABLE_SET"]["scheduled"] += `<pre class=''>def table_index = imm_readULEB32();
def cond__137 = m_isTable64(table_index);
if (cond__137) {
	def val = pop_Object();
	def index = pop_u64();
} else {
	def val = pop_Object();
	def index = pop_u32();
}
// phis: 
</pre>`;
window.traces["TABLE_SET"]["scheduled__raw"] += `def table_index = imm_readULEB32();
def cond__137 = m_isTable64(table_index);
if (cond__137) {
	def val = pop_Object();
	def index = pop_u64();
} else {
	def val = pop_Object();
	def index = pop_u32();
}
// phis: 
`;
window.traces["TABLE_SET"]["pretty"] = ''
window.traces["TABLE_SET"]["pretty__raw"] = ''
window.traces["TABLE_SET"]["pretty"] += `<pre class=''>def table_index = imm_readULEB32();
def cond = m_isTable64(table_index);
if (cond) {
	def val = pop_Object();
	def index = pop_u64();
} else {
	def val = pop_Object();
	def index = pop_u32();
}
</pre>`;
window.traces["TABLE_SET"]["pretty__raw"] += `def table_index = imm_readULEB32();
def cond = m_isTable64(table_index);
if (cond) {
	def val = pop_Object();
	def index = pop_u64();
} else {
	def val = pop_Object();
	def index = pop_u32();
}
`;
window.traces["I32_LOAD"] = {}
window.traces["I32_LOAD"]["parsed"] = ''
window.traces["I32_LOAD"]["parsed__raw"] = ''
window.traces["I32_LOAD"]["parsed"] += `<pre class=''>def flags = imm_readU8();
def memindex : u32 = 0u;
def arg__162 : byte = 0;
def arg__164 : byte = 0x40u8;
def arg__163 = (flags);
def arg__161 = u8.&(arg__163, arg__164);
def cond__159 = u8.!=(arg__161, arg__162);
if (cond__159) {
	def memindex__160 = imm_readULEB32();
}
// phis: memindex <- memindex__160; 
def arg__158 = (memindex);
def cond__147 = m_isMemory64(arg__158);
if (cond__147) {
	def offset = imm_readULEB64();
	def index = pop_u64();
	def arg__152 = (offset);
	def arg__151 = (index);
	def arg__150 = (memindex);
	def val = mach_readMemory64_u32(arg__150, arg__151, arg__152);
	def arg__149 = (val);
	def eff__148 = push_u32(arg__149);
} else {
	def offset = imm_readULEB32();
	def index = pop_u32();
	def arg__157 = (offset);
	def arg__156 = (index);
	def arg__155 = (memindex);
	def val = mach_readMemory32_u32(arg__155, arg__156, arg__157);
	def arg__154 = (val);
	def eff__153 = push_u32(arg__154);
}
// phis: 
</pre>`;
window.traces["I32_LOAD"]["parsed__raw"] += `def flags = imm_readU8();
def memindex : u32 = 0u;
def arg__162 : byte = 0;
def arg__164 : byte = 0x40u8;
def arg__163 = (flags);
def arg__161 = u8.&(arg__163, arg__164);
def cond__159 = u8.!=(arg__161, arg__162);
if (cond__159) {
	def memindex__160 = imm_readULEB32();
}
// phis: memindex <- memindex__160; 
def arg__158 = (memindex);
def cond__147 = m_isMemory64(arg__158);
if (cond__147) {
	def offset = imm_readULEB64();
	def index = pop_u64();
	def arg__152 = (offset);
	def arg__151 = (index);
	def arg__150 = (memindex);
	def val = mach_readMemory64_u32(arg__150, arg__151, arg__152);
	def arg__149 = (val);
	def eff__148 = push_u32(arg__149);
} else {
	def offset = imm_readULEB32();
	def index = pop_u32();
	def arg__157 = (offset);
	def arg__156 = (index);
	def arg__155 = (memindex);
	def val = mach_readMemory32_u32(arg__155, arg__156, arg__157);
	def arg__154 = (val);
	def eff__153 = push_u32(arg__154);
}
// phis: 
`;
window.traces["I32_LOAD"]["raw"] = ''
window.traces["I32_LOAD"]["raw__raw"] = ''
window.traces["I32_LOAD"]["raw"] += `<pre class='graph'>---
config:
  layout: elk
---
graph TD
	1[\\"Finish"/]
	31 -. Codeptr .-> 1
	32 -. Stack .-> 1
	0 -. Trap Locals Globals Tables Memory Extra .-> 1
	0[/"Start"\\]
	32{{"Sϕ Stack "}}
	14 --> 32
	30 --> 32
	22 --> 32
	22["eff__153 push_u32"]
	20 --> 22
	16 -. Stack .-> 22
	16["index pop_u32"]
	0 -. Stack .-> 16
	20["val mach_readMemory32_u32"]
	11 --> 20
	16 --> 20
	15 --> 20
	15["offset imm_readULEB32"]
	12 -. Codeptr .-> 15
	12{{"Sϕ Codeptr "}}
	9 --> 12
	10 --> 12
	3 --> 12
	3["flags imm_readU8"]
	0 -. Codeptr .-> 3
	10["memindex__160 imm_readULEB32"]
	3 -. Codeptr .-> 10
	9["cond__159 u8.!="]
	8 --> 9
	5 --> 9
	5["arg__162 0"]
	8["arg__161 u8.&"]
	3 --> 8
	6 --> 8
	6["arg__164 0x40u8"]
	11{"memindex ϕ"}
	9 --> 11
	10 --> 11
	4 --> 11
	4["memindex__165 0u"]
	30["eff__148 push_u32"]
	28 --> 30
	24 -. Stack .-> 30
	24["index pop_u64"]
	0 -. Stack .-> 24
	28["val mach_readMemory64_u32"]
	11 --> 28
	24 --> 28
	23 --> 28
	23["offset imm_readULEB64"]
	12 -. Codeptr .-> 23
	14["cond__147 m_isMemory64"]
	11 --> 14
	31{{"Sϕ Codeptr "}}
	14 --> 31
	23 --> 31
	15 --> 31
</pre>`;
window.traces["I32_LOAD"]["raw__raw"] += `---
config:
  layout: elk
---
graph TD
	1[\\"Finish"/]
	31 -. Codeptr .-> 1
	32 -. Stack .-> 1
	0 -. Trap Locals Globals Tables Memory Extra .-> 1
	0[/"Start"\\]
	32{{"Sϕ Stack "}}
	14 --> 32
	30 --> 32
	22 --> 32
	22["eff__153 push_u32"]
	20 --> 22
	16 -. Stack .-> 22
	16["index pop_u32"]
	0 -. Stack .-> 16
	20["val mach_readMemory32_u32"]
	11 --> 20
	16 --> 20
	15 --> 20
	15["offset imm_readULEB32"]
	12 -. Codeptr .-> 15
	12{{"Sϕ Codeptr "}}
	9 --> 12
	10 --> 12
	3 --> 12
	3["flags imm_readU8"]
	0 -. Codeptr .-> 3
	10["memindex__160 imm_readULEB32"]
	3 -. Codeptr .-> 10
	9["cond__159 u8.!="]
	8 --> 9
	5 --> 9
	5["arg__162 0"]
	8["arg__161 u8.&"]
	3 --> 8
	6 --> 8
	6["arg__164 0x40u8"]
	11{"memindex ϕ"}
	9 --> 11
	10 --> 11
	4 --> 11
	4["memindex__165 0u"]
	30["eff__148 push_u32"]
	28 --> 30
	24 -. Stack .-> 30
	24["index pop_u64"]
	0 -. Stack .-> 24
	28["val mach_readMemory64_u32"]
	11 --> 28
	24 --> 28
	23 --> 28
	23["offset imm_readULEB64"]
	12 -. Codeptr .-> 23
	14["cond__147 m_isMemory64"]
	11 --> 14
	31{{"Sϕ Codeptr "}}
	14 --> 31
	23 --> 31
	15 --> 31
`;
window.traces["I32_LOAD"]["spytial"] = ''
window.traces["I32_LOAD"]["spytial__raw"] = ''
window.traces["I32_LOAD"]["spytial"] += `<pre class=''>{
"atoms": [
{
"id": "node_1",
"type": "finish",
"label": "Finish"
},
{
"id": "node_31",
"type": "state_phi",
"label": "StatePhi [m_isMemory64 [cond__147]]"
},
{
"id": "node_32",
"type": "state_phi",
"label": "StatePhi [m_isMemory64 [cond__147]]"
},
{
"id": "node_0",
"type": "start",
"label": "Start"
},
{
"id": "node_14",
"type": "intrinsic",
"label": "m_isMemory64 [cond__147]"
},
{
"id": "node_23",
"type": "intrinsic",
"label": "imm_readULEB64 [offset]"
},
{
"id": "node_15",
"type": "intrinsic",
"label": "imm_readULEB32 [offset]"
},
{
"id": "node_30",
"type": "intrinsic",
"label": "push_u32 [eff__148]"
},
{
"id": "node_22",
"type": "intrinsic",
"label": "push_u32 [eff__153]"
},
{
"id": "node_11",
"type": "phi",
"label": "Phi"
},
{
"id": "node_12",
"type": "state_phi",
"label": "StatePhi [u8.!= [cond__159]]"
},
{
"id": "node_28",
"type": "intrinsic",
"label": "mach_readMemory64_u32 [val]"
},
{
"id": "node_24",
"type": "intrinsic",
"label": "pop_u64 [index]"
},
{
"id": "node_20",
"type": "intrinsic",
"label": "mach_readMemory32_u32 [val]"
},
{
"id": "node_16",
"type": "intrinsic",
"label": "pop_u32 [index]"
},
{
"id": "node_9",
"type": "intrinsic",
"label": "u8.!= [cond__159]"
},
{
"id": "node_10",
"type": "intrinsic",
"label": "imm_readULEB32 [memindex__160]"
},
{
"id": "node_4",
"type": "lit",
"label": "0u"
},
{
"id": "node_3",
"type": "intrinsic",
"label": "imm_readU8 [flags]"
},
{
"id": "node_8",
"type": "intrinsic",
"label": "u8.& [arg__161]"
},
{
"id": "node_5",
"type": "lit",
"label": "0"
},
{
"id": "node_6",
"type": "lit",
"label": "0x40u8"
}
],
"relations": [
{
"id": "uses",
"name": "Uses",
"types": ["sea_node", "sea_node"],
"tuples": [
{
"atoms": ["node_14", "node_11"],
"types": ["intrinsic", "phi"]
},
{
"atoms": ["node_30", "node_28"],
"types": ["intrinsic", "intrinsic"]
},
{
"atoms": ["node_22", "node_20"],
"types": ["intrinsic", "intrinsic"]
},
{
"atoms": ["node_28", "node_11"],
"types": ["intrinsic", "phi"]
},
{
"atoms": ["node_28", "node_24"],
"types": ["intrinsic", "intrinsic"]
},
{
"atoms": ["node_28", "node_23"],
"types": ["intrinsic", "intrinsic"]
},
{
"atoms": ["node_20", "node_11"],
"types": ["intrinsic", "phi"]
},
{
"atoms": ["node_20", "node_16"],
"types": ["intrinsic", "intrinsic"]
},
{
"atoms": ["node_20", "node_15"],
"types": ["intrinsic", "intrinsic"]
},
{
"atoms": ["node_9", "node_8"],
"types": ["intrinsic", "intrinsic"]
},
{
"atoms": ["node_9", "node_5"],
"types": ["intrinsic", "lit"]
},
{
"atoms": ["node_8", "node_3"],
"types": ["intrinsic", "intrinsic"]
},
{
"atoms": ["node_8", "node_6"],
"types": ["intrinsic", "lit"]
}
]
},
{
"id": "state_uses",
"name": "StateUses",
"types": ["sea_node", "sea_node"],
"tuples": [
{
"atoms": ["node_1", "node_31"],
"types": ["finish", "state_phi"]
},
{
"atoms": ["node_1", "node_32"],
"types": ["finish", "state_phi"]
},
{
"atoms": ["node_1", "node_0"],
"types": ["finish", "start"]
},
{
"atoms": ["node_23", "node_12"],
"types": ["intrinsic", "state_phi"]
},
{
"atoms": ["node_15", "node_12"],
"types": ["intrinsic", "state_phi"]
},
{
"atoms": ["node_30", "node_24"],
"types": ["intrinsic", "intrinsic"]
},
{
"atoms": ["node_22", "node_16"],
"types": ["intrinsic", "intrinsic"]
},
{
"atoms": ["node_24", "node_0"],
"types": ["intrinsic", "start"]
},
{
"atoms": ["node_16", "node_0"],
"types": ["intrinsic", "start"]
},
{
"atoms": ["node_10", "node_3"],
"types": ["intrinsic", "intrinsic"]
},
{
"atoms": ["node_3", "node_0"],
"types": ["intrinsic", "start"]
}
]
},
{
"id": "phi_cond",
"name": "PhiCond",
"types": ["sea_node", "sea_node"],
"tuples": [
{
"atoms": ["node_31", "node_14"],
"types": ["state_phi", "intrinsic"]
},
{
"atoms": ["node_32", "node_14"],
"types": ["state_phi", "intrinsic"]
},
{
"atoms": ["node_11", "node_9"],
"types": ["phi", "intrinsic"]
},
{
"atoms": ["node_12", "node_9"],
"types": ["state_phi", "intrinsic"]
}
]
},
{
"id": "phi_true",
"name": "PhiTrue",
"types": ["sea_node", "sea_node"],
"tuples": [
{
"atoms": ["node_31", "node_23"],
"types": ["state_phi", "intrinsic"]
},
{
"atoms": ["node_32", "node_30"],
"types": ["state_phi", "intrinsic"]
},
{
"atoms": ["node_11", "node_10"],
"types": ["phi", "intrinsic"]
},
{
"atoms": ["node_12", "node_10"],
"types": ["state_phi", "intrinsic"]
}
]
},
{
"id": "phi_false",
"name": "PhiFalse",
"types": ["sea_node", "sea_node"],
"tuples": [
{
"atoms": ["node_31", "node_15"],
"types": ["state_phi", "intrinsic"]
},
{
"atoms": ["node_32", "node_22"],
"types": ["state_phi", "intrinsic"]
},
{
"atoms": ["node_11", "node_4"],
"types": ["phi", "lit"]
},
{
"atoms": ["node_12", "node_3"],
"types": ["state_phi", "intrinsic"]
}
]
}
]
}</pre>`;
window.traces["I32_LOAD"]["spytial__raw"] += `{
"atoms": [
{
"id": "node_1",
"type": "finish",
"label": "Finish"
},
{
"id": "node_31",
"type": "state_phi",
"label": "StatePhi [m_isMemory64 [cond__147]]"
},
{
"id": "node_32",
"type": "state_phi",
"label": "StatePhi [m_isMemory64 [cond__147]]"
},
{
"id": "node_0",
"type": "start",
"label": "Start"
},
{
"id": "node_14",
"type": "intrinsic",
"label": "m_isMemory64 [cond__147]"
},
{
"id": "node_23",
"type": "intrinsic",
"label": "imm_readULEB64 [offset]"
},
{
"id": "node_15",
"type": "intrinsic",
"label": "imm_readULEB32 [offset]"
},
{
"id": "node_30",
"type": "intrinsic",
"label": "push_u32 [eff__148]"
},
{
"id": "node_22",
"type": "intrinsic",
"label": "push_u32 [eff__153]"
},
{
"id": "node_11",
"type": "phi",
"label": "Phi"
},
{
"id": "node_12",
"type": "state_phi",
"label": "StatePhi [u8.!= [cond__159]]"
},
{
"id": "node_28",
"type": "intrinsic",
"label": "mach_readMemory64_u32 [val]"
},
{
"id": "node_24",
"type": "intrinsic",
"label": "pop_u64 [index]"
},
{
"id": "node_20",
"type": "intrinsic",
"label": "mach_readMemory32_u32 [val]"
},
{
"id": "node_16",
"type": "intrinsic",
"label": "pop_u32 [index]"
},
{
"id": "node_9",
"type": "intrinsic",
"label": "u8.!= [cond__159]"
},
{
"id": "node_10",
"type": "intrinsic",
"label": "imm_readULEB32 [memindex__160]"
},
{
"id": "node_4",
"type": "lit",
"label": "0u"
},
{
"id": "node_3",
"type": "intrinsic",
"label": "imm_readU8 [flags]"
},
{
"id": "node_8",
"type": "intrinsic",
"label": "u8.& [arg__161]"
},
{
"id": "node_5",
"type": "lit",
"label": "0"
},
{
"id": "node_6",
"type": "lit",
"label": "0x40u8"
}
],
"relations": [
{
"id": "uses",
"name": "Uses",
"types": ["sea_node", "sea_node"],
"tuples": [
{
"atoms": ["node_14", "node_11"],
"types": ["intrinsic", "phi"]
},
{
"atoms": ["node_30", "node_28"],
"types": ["intrinsic", "intrinsic"]
},
{
"atoms": ["node_22", "node_20"],
"types": ["intrinsic", "intrinsic"]
},
{
"atoms": ["node_28", "node_11"],
"types": ["intrinsic", "phi"]
},
{
"atoms": ["node_28", "node_24"],
"types": ["intrinsic", "intrinsic"]
},
{
"atoms": ["node_28", "node_23"],
"types": ["intrinsic", "intrinsic"]
},
{
"atoms": ["node_20", "node_11"],
"types": ["intrinsic", "phi"]
},
{
"atoms": ["node_20", "node_16"],
"types": ["intrinsic", "intrinsic"]
},
{
"atoms": ["node_20", "node_15"],
"types": ["intrinsic", "intrinsic"]
},
{
"atoms": ["node_9", "node_8"],
"types": ["intrinsic", "intrinsic"]
},
{
"atoms": ["node_9", "node_5"],
"types": ["intrinsic", "lit"]
},
{
"atoms": ["node_8", "node_3"],
"types": ["intrinsic", "intrinsic"]
},
{
"atoms": ["node_8", "node_6"],
"types": ["intrinsic", "lit"]
}
]
},
{
"id": "state_uses",
"name": "StateUses",
"types": ["sea_node", "sea_node"],
"tuples": [
{
"atoms": ["node_1", "node_31"],
"types": ["finish", "state_phi"]
},
{
"atoms": ["node_1", "node_32"],
"types": ["finish", "state_phi"]
},
{
"atoms": ["node_1", "node_0"],
"types": ["finish", "start"]
},
{
"atoms": ["node_23", "node_12"],
"types": ["intrinsic", "state_phi"]
},
{
"atoms": ["node_15", "node_12"],
"types": ["intrinsic", "state_phi"]
},
{
"atoms": ["node_30", "node_24"],
"types": ["intrinsic", "intrinsic"]
},
{
"atoms": ["node_22", "node_16"],
"types": ["intrinsic", "intrinsic"]
},
{
"atoms": ["node_24", "node_0"],
"types": ["intrinsic", "start"]
},
{
"atoms": ["node_16", "node_0"],
"types": ["intrinsic", "start"]
},
{
"atoms": ["node_10", "node_3"],
"types": ["intrinsic", "intrinsic"]
},
{
"atoms": ["node_3", "node_0"],
"types": ["intrinsic", "start"]
}
]
},
{
"id": "phi_cond",
"name": "PhiCond",
"types": ["sea_node", "sea_node"],
"tuples": [
{
"atoms": ["node_31", "node_14"],
"types": ["state_phi", "intrinsic"]
},
{
"atoms": ["node_32", "node_14"],
"types": ["state_phi", "intrinsic"]
},
{
"atoms": ["node_11", "node_9"],
"types": ["phi", "intrinsic"]
},
{
"atoms": ["node_12", "node_9"],
"types": ["state_phi", "intrinsic"]
}
]
},
{
"id": "phi_true",
"name": "PhiTrue",
"types": ["sea_node", "sea_node"],
"tuples": [
{
"atoms": ["node_31", "node_23"],
"types": ["state_phi", "intrinsic"]
},
{
"atoms": ["node_32", "node_30"],
"types": ["state_phi", "intrinsic"]
},
{
"atoms": ["node_11", "node_10"],
"types": ["phi", "intrinsic"]
},
{
"atoms": ["node_12", "node_10"],
"types": ["state_phi", "intrinsic"]
}
]
},
{
"id": "phi_false",
"name": "PhiFalse",
"types": ["sea_node", "sea_node"],
"tuples": [
{
"atoms": ["node_31", "node_15"],
"types": ["state_phi", "intrinsic"]
},
{
"atoms": ["node_32", "node_22"],
"types": ["state_phi", "intrinsic"]
},
{
"atoms": ["node_11", "node_4"],
"types": ["phi", "lit"]
},
{
"atoms": ["node_12", "node_3"],
"types": ["state_phi", "intrinsic"]
}
]
}
]
}`;
window.traces["I32_LOAD"]["overloadOps"] = ''
window.traces["I32_LOAD"]["overloadOps__raw"] = ''
window.traces["I32_LOAD"]["overloadOps"] += `<pre class='graph'>---
config:
  layout: elk
---
graph TD
	1[\\"Finish"/]
	31 -. Codeptr .-> 1
	32 -. Stack .-> 1
	0 -. Trap Locals Globals Tables Memory Extra .-> 1
	0[/"Start"\\]
	32{{"Sϕ Stack "}}
	14 --> 32
	30 --> 32
	22 --> 32
	22["eff__153 push_u32"]
	20 --> 22
	16 -. Stack .-> 22
	16["index pop_u32"]
	0 -. Stack .-> 16
	20["val mach_readMemory32_u32"]
	11 --> 20
	16 --> 20
	15 --> 20
	15["offset imm_readULEB32"]
	12 -. Codeptr .-> 15
	12{{"Sϕ Codeptr "}}
	9 --> 12
	10 --> 12
	3 --> 12
	3["flags imm_readU8"]
	0 -. Codeptr .-> 3
	10["memindex__160 imm_readULEB32"]
	3 -. Codeptr .-> 10
	9["cond__159 u8.!="]
	8 --> 9
	5 --> 9
	5["arg__162 0"]
	8["arg__161 u8.&"]
	3 --> 8
	6 --> 8
	6["arg__164 0x40u8"]
	11{"memindex ϕ"}
	9 --> 11
	10 --> 11
	4 --> 11
	4["memindex__166 0u"]
	30["eff__148 push_u32"]
	28 --> 30
	24 -. Stack .-> 30
	24["index pop_u64"]
	0 -. Stack .-> 24
	28["val mach_readMemory64_u32"]
	11 --> 28
	24 --> 28
	23 --> 28
	23["offset imm_readULEB64"]
	12 -. Codeptr .-> 23
	14["cond__147 m_isMemory64"]
	11 --> 14
	31{{"Sϕ Codeptr "}}
	14 --> 31
	23 --> 31
	15 --> 31
</pre>`;
window.traces["I32_LOAD"]["overloadOps__raw"] += `---
config:
  layout: elk
---
graph TD
	1[\\"Finish"/]
	31 -. Codeptr .-> 1
	32 -. Stack .-> 1
	0 -. Trap Locals Globals Tables Memory Extra .-> 1
	0[/"Start"\\]
	32{{"Sϕ Stack "}}
	14 --> 32
	30 --> 32
	22 --> 32
	22["eff__153 push_u32"]
	20 --> 22
	16 -. Stack .-> 22
	16["index pop_u32"]
	0 -. Stack .-> 16
	20["val mach_readMemory32_u32"]
	11 --> 20
	16 --> 20
	15 --> 20
	15["offset imm_readULEB32"]
	12 -. Codeptr .-> 15
	12{{"Sϕ Codeptr "}}
	9 --> 12
	10 --> 12
	3 --> 12
	3["flags imm_readU8"]
	0 -. Codeptr .-> 3
	10["memindex__160 imm_readULEB32"]
	3 -. Codeptr .-> 10
	9["cond__159 u8.!="]
	8 --> 9
	5 --> 9
	5["arg__162 0"]
	8["arg__161 u8.&"]
	3 --> 8
	6 --> 8
	6["arg__164 0x40u8"]
	11{"memindex ϕ"}
	9 --> 11
	10 --> 11
	4 --> 11
	4["memindex__166 0u"]
	30["eff__148 push_u32"]
	28 --> 30
	24 -. Stack .-> 30
	24["index pop_u64"]
	0 -. Stack .-> 24
	28["val mach_readMemory64_u32"]
	11 --> 28
	24 --> 28
	23 --> 28
	23["offset imm_readULEB64"]
	12 -. Codeptr .-> 23
	14["cond__147 m_isMemory64"]
	11 --> 14
	31{{"Sϕ Codeptr "}}
	14 --> 31
	23 --> 31
	15 --> 31
`;
window.traces["I32_LOAD"]["addAbstractions"] = ''
window.traces["I32_LOAD"]["addAbstractions__raw"] = ''
window.traces["I32_LOAD"]["addAbstractions"] += `<pre class='graph'>---
config:
  layout: elk
---
graph TD
	1[\\"Finish"/]
	31 -. Codeptr .-> 1
	32 -. Stack .-> 1
	0 -. Trap Locals Globals Tables Memory Extra .-> 1
	0[/"Start"\\]
	32{{"Sϕ Stack "}}
	14 --> 32
	30 --> 32
	22 --> 32
	22["eff__153 push_u32"]
	20 --> 22
	16 -. Stack .-> 22
	16["index pop_u32"]
	0 -. Stack .-> 16
	20["val mach_readMemory32_u32"]
	11 --> 20
	16 --> 20
	15 --> 20
	15["offset imm_readULEB32"]
	12 -. Codeptr .-> 15
	12{{"Sϕ Codeptr "}}
	9 --> 12
	10 --> 12
	3 --> 12
	3["flags imm_readU8"]
	0 -. Codeptr .-> 3
	10["memindex__160 imm_readULEB32"]
	3 -. Codeptr .-> 10
	9["cond__159 u8.!="]
	8 --> 9
	5 --> 9
	5["arg__162 0"]
	8["arg__161 u8.&"]
	3 --> 8
	6 --> 8
	6["arg__164 0x40u8"]
	11{"memindex ϕ"}
	9 --> 11
	10 --> 11
	4 --> 11
	4["memindex__166 0u"]
	30["eff__148 push_u32"]
	28 --> 30
	24 -. Stack .-> 30
	24["index pop_u64"]
	0 -. Stack .-> 24
	28["val mach_readMemory64_u32"]
	11 --> 28
	24 --> 28
	23 --> 28
	23["offset imm_readULEB64"]
	12 -. Codeptr .-> 23
	14["cond__147 m_isMemory64"]
	11 --> 14
	31{{"Sϕ Codeptr "}}
	14 --> 31
	23 --> 31
	15 --> 31
</pre>`;
window.traces["I32_LOAD"]["addAbstractions__raw"] += `---
config:
  layout: elk
---
graph TD
	1[\\"Finish"/]
	31 -. Codeptr .-> 1
	32 -. Stack .-> 1
	0 -. Trap Locals Globals Tables Memory Extra .-> 1
	0[/"Start"\\]
	32{{"Sϕ Stack "}}
	14 --> 32
	30 --> 32
	22 --> 32
	22["eff__153 push_u32"]
	20 --> 22
	16 -. Stack .-> 22
	16["index pop_u32"]
	0 -. Stack .-> 16
	20["val mach_readMemory32_u32"]
	11 --> 20
	16 --> 20
	15 --> 20
	15["offset imm_readULEB32"]
	12 -. Codeptr .-> 15
	12{{"Sϕ Codeptr "}}
	9 --> 12
	10 --> 12
	3 --> 12
	3["flags imm_readU8"]
	0 -. Codeptr .-> 3
	10["memindex__160 imm_readULEB32"]
	3 -. Codeptr .-> 10
	9["cond__159 u8.!="]
	8 --> 9
	5 --> 9
	5["arg__162 0"]
	8["arg__161 u8.&"]
	3 --> 8
	6 --> 8
	6["arg__164 0x40u8"]
	11{"memindex ϕ"}
	9 --> 11
	10 --> 11
	4 --> 11
	4["memindex__166 0u"]
	30["eff__148 push_u32"]
	28 --> 30
	24 -. Stack .-> 30
	24["index pop_u64"]
	0 -. Stack .-> 24
	28["val mach_readMemory64_u32"]
	11 --> 28
	24 --> 28
	23 --> 28
	23["offset imm_readULEB64"]
	12 -. Codeptr .-> 23
	14["cond__147 m_isMemory64"]
	11 --> 14
	31{{"Sϕ Codeptr "}}
	14 --> 31
	23 --> 31
	15 --> 31
`;
window.traces["I32_LOAD"]["schedulerMermaid"] = ''
window.traces["I32_LOAD"]["schedulerMermaid__raw"] = ''
window.traces["I32_LOAD"]["schedulerMermaid"] += `<pre class='graph'>graph TD
subgraph block_131["Block 131"]
	direction TB
	b131_1[\\"Finish"/]
end
phi_133 --> block_131
subgraph phi_133["Phi 133"]
	p133_32{{"Sϕ Stack "}}
	p133_31{{"Sϕ Codeptr "}}
end
block_134 --> phi_133
block_135 --> phi_133
subgraph block_134["Block 134"]
	direction TB
	b134_24["index pop_u64"]
	b134_28["val mach_readMemory64_u32"]
	b134_30["eff__148 push_u32"]
	b134_23["offset imm_readULEB64"]
	b134_24 --> b134_28
	b134_28 --> b134_30
	b134_30 --> b134_23
end
branch_132 --> block_134
subgraph branch_132["Branch 132"]
	br132_14["cond__147 m_isMemory64"]

end
block_136 --> branch_132
subgraph block_136["Block 136"]
	direction TB
	b136_14["cond__147 m_isMemory64"]
end
phi_138 --> block_136
subgraph phi_138["Phi 138"]
	p138_12{{"Sϕ Codeptr "}}
	p138_12{{"Sϕ Codeptr "}}
	p138_12{{"Sϕ Codeptr "}}
	p138_12{{"Sϕ Codeptr "}}
	p138_11{"memindex ϕ"}
	p138_11{"memindex ϕ"}
	p138_11{"memindex ϕ"}
	p138_11{"memindex ϕ"}
	p138_11{"memindex ϕ"}
	p138_11{"memindex ϕ"}
	p138_12{{"Sϕ Codeptr "}}
	p138_12{{"Sϕ Codeptr "}}
	p138_12{{"Sϕ Codeptr "}}
	p138_12{{"Sϕ Codeptr "}}
end
block_139 --> phi_138
block_140 --> phi_138
subgraph block_139["Block 139"]
	direction TB
	b139_10["memindex__160 imm_readULEB32"]
end
branch_137 --> block_139
subgraph branch_137["Branch 137"]
	br137_9["cond__159 u8.!="]

end
block_141 --> branch_137
subgraph block_141["Block 141"]
	direction TB
	b141_0[/"Start"\\]
	b141_6["arg__164 0x40u8"]
	b141_5["arg__162 0"]
	b141_8["arg__161 u8.&"]
	b141_9["cond__159 u8.!="]
	b141_0 --> b141_6
	b141_6 --> b141_5
	b141_5 --> b141_8
	b141_8 --> b141_9
end
subgraph block_140["Block 140"]
	direction TB
	b140_4["memindex__166 0u"]
	b140_3["flags imm_readU8"]
	b140_4 --> b140_3
end
branch_137 --> block_140
subgraph block_135["Block 135"]
	direction TB
	b135_16["index pop_u32"]
	b135_20["val mach_readMemory32_u32"]
	b135_22["eff__153 push_u32"]
	b135_15["offset imm_readULEB32"]
	b135_16 --> b135_20
	b135_20 --> b135_22
	b135_22 --> b135_15
end
branch_132 --> block_135

</pre>`;
window.traces["I32_LOAD"]["schedulerMermaid__raw"] += `graph TD
subgraph block_131["Block 131"]
	direction TB
	b131_1[\\"Finish"/]
end
phi_133 --> block_131
subgraph phi_133["Phi 133"]
	p133_32{{"Sϕ Stack "}}
	p133_31{{"Sϕ Codeptr "}}
end
block_134 --> phi_133
block_135 --> phi_133
subgraph block_134["Block 134"]
	direction TB
	b134_24["index pop_u64"]
	b134_28["val mach_readMemory64_u32"]
	b134_30["eff__148 push_u32"]
	b134_23["offset imm_readULEB64"]
	b134_24 --> b134_28
	b134_28 --> b134_30
	b134_30 --> b134_23
end
branch_132 --> block_134
subgraph branch_132["Branch 132"]
	br132_14["cond__147 m_isMemory64"]

end
block_136 --> branch_132
subgraph block_136["Block 136"]
	direction TB
	b136_14["cond__147 m_isMemory64"]
end
phi_138 --> block_136
subgraph phi_138["Phi 138"]
	p138_12{{"Sϕ Codeptr "}}
	p138_12{{"Sϕ Codeptr "}}
	p138_12{{"Sϕ Codeptr "}}
	p138_12{{"Sϕ Codeptr "}}
	p138_11{"memindex ϕ"}
	p138_11{"memindex ϕ"}
	p138_11{"memindex ϕ"}
	p138_11{"memindex ϕ"}
	p138_11{"memindex ϕ"}
	p138_11{"memindex ϕ"}
	p138_12{{"Sϕ Codeptr "}}
	p138_12{{"Sϕ Codeptr "}}
	p138_12{{"Sϕ Codeptr "}}
	p138_12{{"Sϕ Codeptr "}}
end
block_139 --> phi_138
block_140 --> phi_138
subgraph block_139["Block 139"]
	direction TB
	b139_10["memindex__160 imm_readULEB32"]
end
branch_137 --> block_139
subgraph branch_137["Branch 137"]
	br137_9["cond__159 u8.!="]

end
block_141 --> branch_137
subgraph block_141["Block 141"]
	direction TB
	b141_0[/"Start"\\]
	b141_6["arg__164 0x40u8"]
	b141_5["arg__162 0"]
	b141_8["arg__161 u8.&"]
	b141_9["cond__159 u8.!="]
	b141_0 --> b141_6
	b141_6 --> b141_5
	b141_5 --> b141_8
	b141_8 --> b141_9
end
subgraph block_140["Block 140"]
	direction TB
	b140_4["memindex__166 0u"]
	b140_3["flags imm_readU8"]
	b140_4 --> b140_3
end
branch_137 --> block_140
subgraph block_135["Block 135"]
	direction TB
	b135_16["index pop_u32"]
	b135_20["val mach_readMemory32_u32"]
	b135_22["eff__153 push_u32"]
	b135_15["offset imm_readULEB32"]
	b135_16 --> b135_20
	b135_20 --> b135_22
	b135_22 --> b135_15
end
branch_132 --> block_135

`;
window.traces["I32_LOAD"]["unLEM"] = ''
window.traces["I32_LOAD"]["unLEM__raw"] = ''
window.traces["I32_LOAD"]["unLEM"] += `<pre class='graph'>---
config:
  layout: elk
---
graph TD
	1[\\"Finish"/]
	31 -. Codeptr .-> 1
	32 -. Stack .-> 1
	0 -. Trap Locals Globals Tables Memory Extra .-> 1
	0[/"Start"\\]
	32{{"Sϕ Stack "}}
	14 --> 32
	30 --> 32
	22 --> 32
	22["eff__153 push_u32"]
	20 --> 22
	16 -. Stack .-> 22
	16["index pop_u32"]
	0 -. Stack .-> 16
	20["val mach_readMemory32_u32"]
	11 --> 20
	16 --> 20
	15 --> 20
	15["offset imm_readULEB32"]
	12 -. Codeptr .-> 15
	12{{"Sϕ Codeptr "}}
	9 --> 12
	10 --> 12
	3 --> 12
	3["flags imm_readU8"]
	0 -. Codeptr .-> 3
	10["memindex__160 imm_readULEB32"]
	3 -. Codeptr .-> 10
	9["cond__159 u8.!="]
	8 --> 9
	5 --> 9
	5["arg__162 0"]
	8["arg__161 u8.&"]
	3 --> 8
	6 --> 8
	6["arg__164 0x40u8"]
	11{"memindex ϕ"}
	9 --> 11
	10 --> 11
	4 --> 11
	4["memindex__166 0u"]
	30["eff__148 push_u32"]
	28 --> 30
	24 -. Stack .-> 30
	24["index pop_u64"]
	0 -. Stack .-> 24
	28["val mach_readMemory64_u32"]
	11 --> 28
	24 --> 28
	23 --> 28
	23["offset imm_readULEB64"]
	12 -. Codeptr .-> 23
	14["cond__147 m_isMemory64"]
	11 --> 14
	31{{"Sϕ Codeptr "}}
	14 --> 31
	23 --> 31
	15 --> 31
</pre>`;
window.traces["I32_LOAD"]["unLEM__raw"] += `---
config:
  layout: elk
---
graph TD
	1[\\"Finish"/]
	31 -. Codeptr .-> 1
	32 -. Stack .-> 1
	0 -. Trap Locals Globals Tables Memory Extra .-> 1
	0[/"Start"\\]
	32{{"Sϕ Stack "}}
	14 --> 32
	30 --> 32
	22 --> 32
	22["eff__153 push_u32"]
	20 --> 22
	16 -. Stack .-> 22
	16["index pop_u32"]
	0 -. Stack .-> 16
	20["val mach_readMemory32_u32"]
	11 --> 20
	16 --> 20
	15 --> 20
	15["offset imm_readULEB32"]
	12 -. Codeptr .-> 15
	12{{"Sϕ Codeptr "}}
	9 --> 12
	10 --> 12
	3 --> 12
	3["flags imm_readU8"]
	0 -. Codeptr .-> 3
	10["memindex__160 imm_readULEB32"]
	3 -. Codeptr .-> 10
	9["cond__159 u8.!="]
	8 --> 9
	5 --> 9
	5["arg__162 0"]
	8["arg__161 u8.&"]
	3 --> 8
	6 --> 8
	6["arg__164 0x40u8"]
	11{"memindex ϕ"}
	9 --> 11
	10 --> 11
	4 --> 11
	4["memindex__166 0u"]
	30["eff__148 push_u32"]
	28 --> 30
	24 -. Stack .-> 30
	24["index pop_u64"]
	0 -. Stack .-> 24
	28["val mach_readMemory64_u32"]
	11 --> 28
	24 --> 28
	23 --> 28
	23["offset imm_readULEB64"]
	12 -. Codeptr .-> 23
	14["cond__147 m_isMemory64"]
	11 --> 14
	31{{"Sϕ Codeptr "}}
	14 --> 31
	23 --> 31
	15 --> 31
`;
window.traces["I32_LOAD"]["unlem_schedule"] = ''
window.traces["I32_LOAD"]["unlem_schedule__raw"] = ''
window.traces["I32_LOAD"]["unlem_schedule"] += `<pre class=''>def flags = imm_readU8();
def arg__164 : byte = 0x40u8;
def arg__161 = u8.&(flags, arg__164);
def arg__162 : byte = 0;
def cond__159 = u8.!=(arg__161, arg__162);
var memindex: u32;
if (cond__159) {
	def memindex__160 = imm_readULEB32();
} else {
	def memindex__166 : u32 = 0u;
}
// phis: memindex <- memindex__160; memindex <- memindex__166; 
def cond__147 = m_isMemory64(memindex);
if (cond__147) {
	def offset = imm_readULEB64();
	def index = pop_u64();
	def val = mach_readMemory64_u32(memindex, index, offset);
	def eff__148 = push_u32(val);
} else {
	def offset = imm_readULEB32();
	def index = pop_u32();
	def val = mach_readMemory32_u32(memindex, index, offset);
	def eff__153 = push_u32(val);
}
// phis: 
</pre>`;
window.traces["I32_LOAD"]["unlem_schedule__raw"] += `def flags = imm_readU8();
def arg__164 : byte = 0x40u8;
def arg__161 = u8.&(flags, arg__164);
def arg__162 : byte = 0;
def cond__159 = u8.!=(arg__161, arg__162);
var memindex: u32;
if (cond__159) {
	def memindex__160 = imm_readULEB32();
} else {
	def memindex__166 : u32 = 0u;
}
// phis: memindex <- memindex__160; memindex <- memindex__166; 
def cond__147 = m_isMemory64(memindex);
if (cond__147) {
	def offset = imm_readULEB64();
	def index = pop_u64();
	def val = mach_readMemory64_u32(memindex, index, offset);
	def eff__148 = push_u32(val);
} else {
	def offset = imm_readULEB32();
	def index = pop_u32();
	def val = mach_readMemory32_u32(memindex, index, offset);
	def eff__153 = push_u32(val);
}
// phis: 
`;
window.traces["I32_LOAD"]["spytial_ul"] = ''
window.traces["I32_LOAD"]["spytial_ul__raw"] = ''
window.traces["I32_LOAD"]["spytial_ul"] += `<pre class=''>{
"atoms": [
{
"id": "node_1",
"type": "finish",
"label": "Finish"
},
{
"id": "node_31",
"type": "state_phi",
"label": "StatePhi [m_isMemory64 [cond__147]]"
},
{
"id": "node_32",
"type": "state_phi",
"label": "StatePhi [m_isMemory64 [cond__147]]"
},
{
"id": "node_0",
"type": "start",
"label": "Start"
},
{
"id": "node_14",
"type": "intrinsic",
"label": "m_isMemory64 [cond__147]"
},
{
"id": "node_23",
"type": "intrinsic",
"label": "imm_readULEB64 [offset]"
},
{
"id": "node_15",
"type": "intrinsic",
"label": "imm_readULEB32 [offset]"
},
{
"id": "node_30",
"type": "intrinsic",
"label": "push_u32 [eff__148]"
},
{
"id": "node_22",
"type": "intrinsic",
"label": "push_u32 [eff__153]"
},
{
"id": "node_11",
"type": "phi",
"label": "Phi"
},
{
"id": "node_12",
"type": "state_phi",
"label": "StatePhi [u8.!= [cond__159]]"
},
{
"id": "node_28",
"type": "intrinsic",
"label": "mach_readMemory64_u32 [val]"
},
{
"id": "node_24",
"type": "intrinsic",
"label": "pop_u64 [index]"
},
{
"id": "node_20",
"type": "intrinsic",
"label": "mach_readMemory32_u32 [val]"
},
{
"id": "node_16",
"type": "intrinsic",
"label": "pop_u32 [index]"
},
{
"id": "node_9",
"type": "intrinsic",
"label": "u8.!= [cond__159]"
},
{
"id": "node_10",
"type": "intrinsic",
"label": "imm_readULEB32 [memindex__160]"
},
{
"id": "node_4",
"type": "lit",
"label": "0u"
},
{
"id": "node_3",
"type": "intrinsic",
"label": "imm_readU8 [flags]"
},
{
"id": "node_8",
"type": "intrinsic",
"label": "u8.& [arg__161]"
},
{
"id": "node_5",
"type": "lit",
"label": "0"
},
{
"id": "node_6",
"type": "lit",
"label": "0x40u8"
}
],
"relations": [
{
"id": "uses",
"name": "Uses",
"types": ["sea_node", "sea_node"],
"tuples": [
{
"atoms": ["node_14", "node_11"],
"types": ["intrinsic", "phi"]
},
{
"atoms": ["node_30", "node_28"],
"types": ["intrinsic", "intrinsic"]
},
{
"atoms": ["node_22", "node_20"],
"types": ["intrinsic", "intrinsic"]
},
{
"atoms": ["node_28", "node_11"],
"types": ["intrinsic", "phi"]
},
{
"atoms": ["node_28", "node_24"],
"types": ["intrinsic", "intrinsic"]
},
{
"atoms": ["node_28", "node_23"],
"types": ["intrinsic", "intrinsic"]
},
{
"atoms": ["node_20", "node_11"],
"types": ["intrinsic", "phi"]
},
{
"atoms": ["node_20", "node_16"],
"types": ["intrinsic", "intrinsic"]
},
{
"atoms": ["node_20", "node_15"],
"types": ["intrinsic", "intrinsic"]
},
{
"atoms": ["node_9", "node_8"],
"types": ["intrinsic", "intrinsic"]
},
{
"atoms": ["node_9", "node_5"],
"types": ["intrinsic", "lit"]
},
{
"atoms": ["node_8", "node_3"],
"types": ["intrinsic", "intrinsic"]
},
{
"atoms": ["node_8", "node_6"],
"types": ["intrinsic", "lit"]
}
]
},
{
"id": "state_uses",
"name": "StateUses",
"types": ["sea_node", "sea_node"],
"tuples": [
{
"atoms": ["node_1", "node_31"],
"types": ["finish", "state_phi"]
},
{
"atoms": ["node_1", "node_32"],
"types": ["finish", "state_phi"]
},
{
"atoms": ["node_1", "node_0"],
"types": ["finish", "start"]
},
{
"atoms": ["node_23", "node_12"],
"types": ["intrinsic", "state_phi"]
},
{
"atoms": ["node_15", "node_12"],
"types": ["intrinsic", "state_phi"]
},
{
"atoms": ["node_30", "node_24"],
"types": ["intrinsic", "intrinsic"]
},
{
"atoms": ["node_22", "node_16"],
"types": ["intrinsic", "intrinsic"]
},
{
"atoms": ["node_24", "node_0"],
"types": ["intrinsic", "start"]
},
{
"atoms": ["node_16", "node_0"],
"types": ["intrinsic", "start"]
},
{
"atoms": ["node_10", "node_3"],
"types": ["intrinsic", "intrinsic"]
},
{
"atoms": ["node_3", "node_0"],
"types": ["intrinsic", "start"]
}
]
},
{
"id": "phi_cond",
"name": "PhiCond",
"types": ["sea_node", "sea_node"],
"tuples": [
{
"atoms": ["node_31", "node_14"],
"types": ["state_phi", "intrinsic"]
},
{
"atoms": ["node_32", "node_14"],
"types": ["state_phi", "intrinsic"]
},
{
"atoms": ["node_11", "node_9"],
"types": ["phi", "intrinsic"]
},
{
"atoms": ["node_12", "node_9"],
"types": ["state_phi", "intrinsic"]
}
]
},
{
"id": "phi_true",
"name": "PhiTrue",
"types": ["sea_node", "sea_node"],
"tuples": [
{
"atoms": ["node_31", "node_23"],
"types": ["state_phi", "intrinsic"]
},
{
"atoms": ["node_32", "node_30"],
"types": ["state_phi", "intrinsic"]
},
{
"atoms": ["node_11", "node_10"],
"types": ["phi", "intrinsic"]
},
{
"atoms": ["node_12", "node_10"],
"types": ["state_phi", "intrinsic"]
}
]
},
{
"id": "phi_false",
"name": "PhiFalse",
"types": ["sea_node", "sea_node"],
"tuples": [
{
"atoms": ["node_31", "node_15"],
"types": ["state_phi", "intrinsic"]
},
{
"atoms": ["node_32", "node_22"],
"types": ["state_phi", "intrinsic"]
},
{
"atoms": ["node_11", "node_4"],
"types": ["phi", "lit"]
},
{
"atoms": ["node_12", "node_3"],
"types": ["state_phi", "intrinsic"]
}
]
}
]
}</pre>`;
window.traces["I32_LOAD"]["spytial_ul__raw"] += `{
"atoms": [
{
"id": "node_1",
"type": "finish",
"label": "Finish"
},
{
"id": "node_31",
"type": "state_phi",
"label": "StatePhi [m_isMemory64 [cond__147]]"
},
{
"id": "node_32",
"type": "state_phi",
"label": "StatePhi [m_isMemory64 [cond__147]]"
},
{
"id": "node_0",
"type": "start",
"label": "Start"
},
{
"id": "node_14",
"type": "intrinsic",
"label": "m_isMemory64 [cond__147]"
},
{
"id": "node_23",
"type": "intrinsic",
"label": "imm_readULEB64 [offset]"
},
{
"id": "node_15",
"type": "intrinsic",
"label": "imm_readULEB32 [offset]"
},
{
"id": "node_30",
"type": "intrinsic",
"label": "push_u32 [eff__148]"
},
{
"id": "node_22",
"type": "intrinsic",
"label": "push_u32 [eff__153]"
},
{
"id": "node_11",
"type": "phi",
"label": "Phi"
},
{
"id": "node_12",
"type": "state_phi",
"label": "StatePhi [u8.!= [cond__159]]"
},
{
"id": "node_28",
"type": "intrinsic",
"label": "mach_readMemory64_u32 [val]"
},
{
"id": "node_24",
"type": "intrinsic",
"label": "pop_u64 [index]"
},
{
"id": "node_20",
"type": "intrinsic",
"label": "mach_readMemory32_u32 [val]"
},
{
"id": "node_16",
"type": "intrinsic",
"label": "pop_u32 [index]"
},
{
"id": "node_9",
"type": "intrinsic",
"label": "u8.!= [cond__159]"
},
{
"id": "node_10",
"type": "intrinsic",
"label": "imm_readULEB32 [memindex__160]"
},
{
"id": "node_4",
"type": "lit",
"label": "0u"
},
{
"id": "node_3",
"type": "intrinsic",
"label": "imm_readU8 [flags]"
},
{
"id": "node_8",
"type": "intrinsic",
"label": "u8.& [arg__161]"
},
{
"id": "node_5",
"type": "lit",
"label": "0"
},
{
"id": "node_6",
"type": "lit",
"label": "0x40u8"
}
],
"relations": [
{
"id": "uses",
"name": "Uses",
"types": ["sea_node", "sea_node"],
"tuples": [
{
"atoms": ["node_14", "node_11"],
"types": ["intrinsic", "phi"]
},
{
"atoms": ["node_30", "node_28"],
"types": ["intrinsic", "intrinsic"]
},
{
"atoms": ["node_22", "node_20"],
"types": ["intrinsic", "intrinsic"]
},
{
"atoms": ["node_28", "node_11"],
"types": ["intrinsic", "phi"]
},
{
"atoms": ["node_28", "node_24"],
"types": ["intrinsic", "intrinsic"]
},
{
"atoms": ["node_28", "node_23"],
"types": ["intrinsic", "intrinsic"]
},
{
"atoms": ["node_20", "node_11"],
"types": ["intrinsic", "phi"]
},
{
"atoms": ["node_20", "node_16"],
"types": ["intrinsic", "intrinsic"]
},
{
"atoms": ["node_20", "node_15"],
"types": ["intrinsic", "intrinsic"]
},
{
"atoms": ["node_9", "node_8"],
"types": ["intrinsic", "intrinsic"]
},
{
"atoms": ["node_9", "node_5"],
"types": ["intrinsic", "lit"]
},
{
"atoms": ["node_8", "node_3"],
"types": ["intrinsic", "intrinsic"]
},
{
"atoms": ["node_8", "node_6"],
"types": ["intrinsic", "lit"]
}
]
},
{
"id": "state_uses",
"name": "StateUses",
"types": ["sea_node", "sea_node"],
"tuples": [
{
"atoms": ["node_1", "node_31"],
"types": ["finish", "state_phi"]
},
{
"atoms": ["node_1", "node_32"],
"types": ["finish", "state_phi"]
},
{
"atoms": ["node_1", "node_0"],
"types": ["finish", "start"]
},
{
"atoms": ["node_23", "node_12"],
"types": ["intrinsic", "state_phi"]
},
{
"atoms": ["node_15", "node_12"],
"types": ["intrinsic", "state_phi"]
},
{
"atoms": ["node_30", "node_24"],
"types": ["intrinsic", "intrinsic"]
},
{
"atoms": ["node_22", "node_16"],
"types": ["intrinsic", "intrinsic"]
},
{
"atoms": ["node_24", "node_0"],
"types": ["intrinsic", "start"]
},
{
"atoms": ["node_16", "node_0"],
"types": ["intrinsic", "start"]
},
{
"atoms": ["node_10", "node_3"],
"types": ["intrinsic", "intrinsic"]
},
{
"atoms": ["node_3", "node_0"],
"types": ["intrinsic", "start"]
}
]
},
{
"id": "phi_cond",
"name": "PhiCond",
"types": ["sea_node", "sea_node"],
"tuples": [
{
"atoms": ["node_31", "node_14"],
"types": ["state_phi", "intrinsic"]
},
{
"atoms": ["node_32", "node_14"],
"types": ["state_phi", "intrinsic"]
},
{
"atoms": ["node_11", "node_9"],
"types": ["phi", "intrinsic"]
},
{
"atoms": ["node_12", "node_9"],
"types": ["state_phi", "intrinsic"]
}
]
},
{
"id": "phi_true",
"name": "PhiTrue",
"types": ["sea_node", "sea_node"],
"tuples": [
{
"atoms": ["node_31", "node_23"],
"types": ["state_phi", "intrinsic"]
},
{
"atoms": ["node_32", "node_30"],
"types": ["state_phi", "intrinsic"]
},
{
"atoms": ["node_11", "node_10"],
"types": ["phi", "intrinsic"]
},
{
"atoms": ["node_12", "node_10"],
"types": ["state_phi", "intrinsic"]
}
]
},
{
"id": "phi_false",
"name": "PhiFalse",
"types": ["sea_node", "sea_node"],
"tuples": [
{
"atoms": ["node_31", "node_15"],
"types": ["state_phi", "intrinsic"]
},
{
"atoms": ["node_32", "node_22"],
"types": ["state_phi", "intrinsic"]
},
{
"atoms": ["node_11", "node_4"],
"types": ["phi", "lit"]
},
{
"atoms": ["node_12", "node_3"],
"types": ["state_phi", "intrinsic"]
}
]
}
]
}`;
window.traces["I32_LOAD"]["unlem_scheduler"] = ''
window.traces["I32_LOAD"]["unlem_scheduler__raw"] = ''
window.traces["I32_LOAD"]["unlem_scheduler"] += `<pre class='graph'>graph TD
subgraph block_142["Block 142"]
	direction TB
	b142_1[\\"Finish"/]
end
phi_144 --> block_142
subgraph phi_144["Phi 144"]
	p144_32{{"Sϕ Stack "}}
	p144_31{{"Sϕ Codeptr "}}
end
block_145 --> phi_144
block_146 --> phi_144
subgraph block_145["Block 145"]
	direction TB
	b145_24["index pop_u64"]
	b145_28["val mach_readMemory64_u32"]
	b145_30["eff__148 push_u32"]
	b145_23["offset imm_readULEB64"]
	b145_24 --> b145_28
	b145_28 --> b145_30
	b145_30 --> b145_23
end
branch_143 --> block_145
subgraph branch_143["Branch 143"]
	br143_14["cond__147 m_isMemory64"]

end
block_147 --> branch_143
subgraph block_147["Block 147"]
	direction TB
	b147_14["cond__147 m_isMemory64"]
end
phi_149 --> block_147
subgraph phi_149["Phi 149"]
	p149_12{{"Sϕ Codeptr "}}
	p149_12{{"Sϕ Codeptr "}}
	p149_12{{"Sϕ Codeptr "}}
	p149_12{{"Sϕ Codeptr "}}
	p149_11{"memindex ϕ"}
	p149_11{"memindex ϕ"}
	p149_11{"memindex ϕ"}
	p149_11{"memindex ϕ"}
	p149_11{"memindex ϕ"}
	p149_11{"memindex ϕ"}
	p149_12{{"Sϕ Codeptr "}}
	p149_12{{"Sϕ Codeptr "}}
	p149_12{{"Sϕ Codeptr "}}
	p149_12{{"Sϕ Codeptr "}}
end
block_150 --> phi_149
block_151 --> phi_149
subgraph block_150["Block 150"]
	direction TB
	b150_10["memindex__160 imm_readULEB32"]
end
branch_148 --> block_150
subgraph branch_148["Branch 148"]
	br148_9["cond__159 u8.!="]

end
block_152 --> branch_148
subgraph block_152["Block 152"]
	direction TB
	b152_0[/"Start"\\]
	b152_6["arg__164 0x40u8"]
	b152_5["arg__162 0"]
	b152_8["arg__161 u8.&"]
	b152_9["cond__159 u8.!="]
	b152_0 --> b152_6
	b152_6 --> b152_5
	b152_5 --> b152_8
	b152_8 --> b152_9
end
subgraph block_151["Block 151"]
	direction TB
	b151_4["memindex__166 0u"]
	b151_3["flags imm_readU8"]
	b151_4 --> b151_3
end
branch_148 --> block_151
subgraph block_146["Block 146"]
	direction TB
	b146_16["index pop_u32"]
	b146_20["val mach_readMemory32_u32"]
	b146_22["eff__153 push_u32"]
	b146_15["offset imm_readULEB32"]
	b146_16 --> b146_20
	b146_20 --> b146_22
	b146_22 --> b146_15
end
branch_143 --> block_146

</pre>`;
window.traces["I32_LOAD"]["unlem_scheduler__raw"] += `graph TD
subgraph block_142["Block 142"]
	direction TB
	b142_1[\\"Finish"/]
end
phi_144 --> block_142
subgraph phi_144["Phi 144"]
	p144_32{{"Sϕ Stack "}}
	p144_31{{"Sϕ Codeptr "}}
end
block_145 --> phi_144
block_146 --> phi_144
subgraph block_145["Block 145"]
	direction TB
	b145_24["index pop_u64"]
	b145_28["val mach_readMemory64_u32"]
	b145_30["eff__148 push_u32"]
	b145_23["offset imm_readULEB64"]
	b145_24 --> b145_28
	b145_28 --> b145_30
	b145_30 --> b145_23
end
branch_143 --> block_145
subgraph branch_143["Branch 143"]
	br143_14["cond__147 m_isMemory64"]

end
block_147 --> branch_143
subgraph block_147["Block 147"]
	direction TB
	b147_14["cond__147 m_isMemory64"]
end
phi_149 --> block_147
subgraph phi_149["Phi 149"]
	p149_12{{"Sϕ Codeptr "}}
	p149_12{{"Sϕ Codeptr "}}
	p149_12{{"Sϕ Codeptr "}}
	p149_12{{"Sϕ Codeptr "}}
	p149_11{"memindex ϕ"}
	p149_11{"memindex ϕ"}
	p149_11{"memindex ϕ"}
	p149_11{"memindex ϕ"}
	p149_11{"memindex ϕ"}
	p149_11{"memindex ϕ"}
	p149_12{{"Sϕ Codeptr "}}
	p149_12{{"Sϕ Codeptr "}}
	p149_12{{"Sϕ Codeptr "}}
	p149_12{{"Sϕ Codeptr "}}
end
block_150 --> phi_149
block_151 --> phi_149
subgraph block_150["Block 150"]
	direction TB
	b150_10["memindex__160 imm_readULEB32"]
end
branch_148 --> block_150
subgraph branch_148["Branch 148"]
	br148_9["cond__159 u8.!="]

end
block_152 --> branch_148
subgraph block_152["Block 152"]
	direction TB
	b152_0[/"Start"\\]
	b152_6["arg__164 0x40u8"]
	b152_5["arg__162 0"]
	b152_8["arg__161 u8.&"]
	b152_9["cond__159 u8.!="]
	b152_0 --> b152_6
	b152_6 --> b152_5
	b152_5 --> b152_8
	b152_8 --> b152_9
end
subgraph block_151["Block 151"]
	direction TB
	b151_4["memindex__166 0u"]
	b151_3["flags imm_readU8"]
	b151_4 --> b151_3
end
branch_148 --> block_151
subgraph block_146["Block 146"]
	direction TB
	b146_16["index pop_u32"]
	b146_20["val mach_readMemory32_u32"]
	b146_22["eff__153 push_u32"]
	b146_15["offset imm_readULEB32"]
	b146_16 --> b146_20
	b146_20 --> b146_22
	b146_22 --> b146_15
end
branch_143 --> block_146

`;
window.traces["I32_LOAD"]["unlem_pretty"] = ''
window.traces["I32_LOAD"]["unlem_pretty__raw"] = ''
window.traces["I32_LOAD"]["unlem_pretty"] += `<pre class=''>def flags = imm_readU8();
var memindex: u32;
if (u8.!=(u8.&(flags, 0x40u8), 0)) {
	memindex = imm_readULEB32();
} else {
	memindex = 0u;
}
def cond = m_isMemory64(memindex);
if (cond) {
	def offset = imm_readULEB64();
	def index = pop_u64();
	def val = mach_readMemory64_u32(memindex, index, offset);
	push_u32(val);
} else {
	def offset = imm_readULEB32();
	def index = pop_u32();
	def val = mach_readMemory32_u32(memindex, index, offset);
	push_u32(val);
}
</pre>`;
window.traces["I32_LOAD"]["unlem_pretty__raw"] += `def flags = imm_readU8();
var memindex: u32;
if (u8.!=(u8.&(flags, 0x40u8), 0)) {
	memindex = imm_readULEB32();
} else {
	memindex = 0u;
}
def cond = m_isMemory64(memindex);
if (cond) {
	def offset = imm_readULEB64();
	def index = pop_u64();
	def val = mach_readMemory64_u32(memindex, index, offset);
	push_u32(val);
} else {
	def offset = imm_readULEB32();
	def index = pop_u32();
	def val = mach_readMemory32_u32(memindex, index, offset);
	push_u32(val);
}
`;
window.traces["I32_LOAD"]["constUnLEM"] = ''
window.traces["I32_LOAD"]["constUnLEM__raw"] = ''
window.traces["I32_LOAD"]["constUnLEM"] += `<pre class='graph'>---
config:
  layout: elk
---
graph TD
	1[\\"Finish"/]
	31 -. Codeptr .-> 1
	32 -. Stack .-> 1
	0 -. Trap Locals Globals Tables Memory Extra .-> 1
	0[/"Start"\\]
	32{{"Sϕ Stack "}}
	14 --> 32
	30 --> 32
	22 --> 32
	22["eff__153 push_u32"]
	20 --> 22
	16 -. Stack .-> 22
	16["index pop_u32"]
	0 -. Stack .-> 16
	20["val mach_readMemory32_u32"]
	11 --> 20
	16 --> 20
	15 --> 20
	15["offset imm_readULEB32"]
	12 -. Codeptr .-> 15
	12{{"Sϕ Codeptr "}}
	9 --> 12
	10 --> 12
	3 --> 12
	3["flags imm_readU8"]
	0 -. Codeptr .-> 3
	10["memindex__160 imm_readULEB32"]
	3 -. Codeptr .-> 10
	9["cond__159 u8.!="]
	8 --> 9
	5 --> 9
	5["arg__162 0"]
	8["arg__161 u8.&"]
	3 --> 8
	6 --> 8
	6["arg__164 0x40u8"]
	11{"memindex ϕ"}
	9 --> 11
	10 --> 11
	4 --> 11
	4["memindex__166 0u"]
	30["eff__148 push_u32"]
	28 --> 30
	24 -. Stack .-> 30
	24["index pop_u64"]
	0 -. Stack .-> 24
	28["val mach_readMemory64_u32"]
	11 --> 28
	24 --> 28
	23 --> 28
	23["offset imm_readULEB64"]
	12 -. Codeptr .-> 23
	14["cond__147 m_isMemory64"]
	11 --> 14
	31{{"Sϕ Codeptr "}}
	14 --> 31
	23 --> 31
	15 --> 31
</pre>`;
window.traces["I32_LOAD"]["constUnLEM__raw"] += `---
config:
  layout: elk
---
graph TD
	1[\\"Finish"/]
	31 -. Codeptr .-> 1
	32 -. Stack .-> 1
	0 -. Trap Locals Globals Tables Memory Extra .-> 1
	0[/"Start"\\]
	32{{"Sϕ Stack "}}
	14 --> 32
	30 --> 32
	22 --> 32
	22["eff__153 push_u32"]
	20 --> 22
	16 -. Stack .-> 22
	16["index pop_u32"]
	0 -. Stack .-> 16
	20["val mach_readMemory32_u32"]
	11 --> 20
	16 --> 20
	15 --> 20
	15["offset imm_readULEB32"]
	12 -. Codeptr .-> 15
	12{{"Sϕ Codeptr "}}
	9 --> 12
	10 --> 12
	3 --> 12
	3["flags imm_readU8"]
	0 -. Codeptr .-> 3
	10["memindex__160 imm_readULEB32"]
	3 -. Codeptr .-> 10
	9["cond__159 u8.!="]
	8 --> 9
	5 --> 9
	5["arg__162 0"]
	8["arg__161 u8.&"]
	3 --> 8
	6 --> 8
	6["arg__164 0x40u8"]
	11{"memindex ϕ"}
	9 --> 11
	10 --> 11
	4 --> 11
	4["memindex__166 0u"]
	30["eff__148 push_u32"]
	28 --> 30
	24 -. Stack .-> 30
	24["index pop_u64"]
	0 -. Stack .-> 24
	28["val mach_readMemory64_u32"]
	11 --> 28
	24 --> 28
	23 --> 28
	23["offset imm_readULEB64"]
	12 -. Codeptr .-> 23
	14["cond__147 m_isMemory64"]
	11 --> 14
	31{{"Sϕ Codeptr "}}
	14 --> 31
	23 --> 31
	15 --> 31
`;
window.traces["I32_LOAD"]["chooseMerge"] = ''
window.traces["I32_LOAD"]["chooseMerge__raw"] = ''
window.traces["I32_LOAD"]["chooseMerge"] += `<pre class='graph'>---
config:
  layout: elk
---
graph TD
	1[\\"Finish"/]
	31 -. Codeptr .-> 1
	32 -. Stack .-> 1
	0 -. Trap Locals Globals Tables Memory Extra .-> 1
	0[/"Start"\\]
	32{{"Sϕ Stack "}}
	14 --> 32
	30 --> 32
	22 --> 32
	22["eff__153 push_u32"]
	20 --> 22
	16 -. Stack .-> 22
	16["index pop_u32"]
	0 -. Stack .-> 16
	20["val mach_readMemory32_u32"]
	11 --> 20
	16 --> 20
	15 --> 20
	15["offset imm_readULEB32"]
	12 -. Codeptr .-> 15
	12{{"Sϕ Codeptr "}}
	9 --> 12
	10 --> 12
	3 --> 12
	3["flags imm_readU8"]
	0 -. Codeptr .-> 3
	10["memindex__160 imm_readULEB32"]
	3 -. Codeptr .-> 10
	9["cond__159 u8.!="]
	8 --> 9
	5 --> 9
	5["arg__162 0"]
	8["arg__161 u8.&"]
	3 --> 8
	6 --> 8
	6["arg__164 0x40u8"]
	11{"memindex ϕ"}
	9 --> 11
	10 --> 11
	4 --> 11
	4["memindex__166 0u"]
	30["eff__148 push_u32"]
	28 --> 30
	24 -. Stack .-> 30
	24["index pop_u64"]
	0 -. Stack .-> 24
	28["val mach_readMemory64_u32"]
	11 --> 28
	24 --> 28
	23 --> 28
	23["offset imm_readULEB64"]
	12 -. Codeptr .-> 23
	14["cond__147 m_isMemory64"]
	11 --> 14
	31{{"Sϕ Codeptr "}}
	14 --> 31
	23 --> 31
	15 --> 31
</pre>`;
window.traces["I32_LOAD"]["chooseMerge__raw"] += `---
config:
  layout: elk
---
graph TD
	1[\\"Finish"/]
	31 -. Codeptr .-> 1
	32 -. Stack .-> 1
	0 -. Trap Locals Globals Tables Memory Extra .-> 1
	0[/"Start"\\]
	32{{"Sϕ Stack "}}
	14 --> 32
	30 --> 32
	22 --> 32
	22["eff__153 push_u32"]
	20 --> 22
	16 -. Stack .-> 22
	16["index pop_u32"]
	0 -. Stack .-> 16
	20["val mach_readMemory32_u32"]
	11 --> 20
	16 --> 20
	15 --> 20
	15["offset imm_readULEB32"]
	12 -. Codeptr .-> 15
	12{{"Sϕ Codeptr "}}
	9 --> 12
	10 --> 12
	3 --> 12
	3["flags imm_readU8"]
	0 -. Codeptr .-> 3
	10["memindex__160 imm_readULEB32"]
	3 -. Codeptr .-> 10
	9["cond__159 u8.!="]
	8 --> 9
	5 --> 9
	5["arg__162 0"]
	8["arg__161 u8.&"]
	3 --> 8
	6 --> 8
	6["arg__164 0x40u8"]
	11{"memindex ϕ"}
	9 --> 11
	10 --> 11
	4 --> 11
	4["memindex__166 0u"]
	30["eff__148 push_u32"]
	28 --> 30
	24 -. Stack .-> 30
	24["index pop_u64"]
	0 -. Stack .-> 24
	28["val mach_readMemory64_u32"]
	11 --> 28
	24 --> 28
	23 --> 28
	23["offset imm_readULEB64"]
	12 -. Codeptr .-> 23
	14["cond__147 m_isMemory64"]
	11 --> 14
	31{{"Sϕ Codeptr "}}
	14 --> 31
	23 --> 31
	15 --> 31
`;
window.traces["I32_LOAD"]["scheduled"] = ''
window.traces["I32_LOAD"]["scheduled__raw"] = ''
window.traces["I32_LOAD"]["scheduled"] += `<pre class=''>def flags = imm_readU8();
def arg__164 : byte = 0x40u8;
def arg__161 = u8.&(flags, arg__164);
def arg__162 : byte = 0;
def cond__159 = u8.!=(arg__161, arg__162);
var memindex: u32;
if (cond__159) {
	def memindex__160 = imm_readULEB32();
} else {
	def memindex__166 : u32 = 0u;
}
// phis: memindex <- memindex__160; memindex <- memindex__166; 
def cond__147 = m_isMemory64(memindex);
if (cond__147) {
	def offset = imm_readULEB64();
	def index = pop_u64();
	def val = mach_readMemory64_u32(memindex, index, offset);
	def eff__148 = push_u32(val);
} else {
	def offset = imm_readULEB32();
	def index = pop_u32();
	def val = mach_readMemory32_u32(memindex, index, offset);
	def eff__153 = push_u32(val);
}
// phis: 
</pre>`;
window.traces["I32_LOAD"]["scheduled__raw"] += `def flags = imm_readU8();
def arg__164 : byte = 0x40u8;
def arg__161 = u8.&(flags, arg__164);
def arg__162 : byte = 0;
def cond__159 = u8.!=(arg__161, arg__162);
var memindex: u32;
if (cond__159) {
	def memindex__160 = imm_readULEB32();
} else {
	def memindex__166 : u32 = 0u;
}
// phis: memindex <- memindex__160; memindex <- memindex__166; 
def cond__147 = m_isMemory64(memindex);
if (cond__147) {
	def offset = imm_readULEB64();
	def index = pop_u64();
	def val = mach_readMemory64_u32(memindex, index, offset);
	def eff__148 = push_u32(val);
} else {
	def offset = imm_readULEB32();
	def index = pop_u32();
	def val = mach_readMemory32_u32(memindex, index, offset);
	def eff__153 = push_u32(val);
}
// phis: 
`;
window.traces["I32_LOAD"]["pretty"] = ''
window.traces["I32_LOAD"]["pretty__raw"] = ''
window.traces["I32_LOAD"]["pretty"] += `<pre class=''>def flags = imm_readU8();
var memindex: u32;
if (u8.!=(u8.&(flags, 0x40u8), 0)) {
	memindex = imm_readULEB32();
} else {
	memindex = 0u;
}
def cond = m_isMemory64(memindex);
if (cond) {
	def offset = imm_readULEB64();
	def index = pop_u64();
	def val = mach_readMemory64_u32(memindex, index, offset);
	push_u32(val);
} else {
	def offset = imm_readULEB32();
	def index = pop_u32();
	def val = mach_readMemory32_u32(memindex, index, offset);
	push_u32(val);
}
</pre>`;
window.traces["I32_LOAD"]["pretty__raw"] += `def flags = imm_readU8();
var memindex: u32;
if (u8.!=(u8.&(flags, 0x40u8), 0)) {
	memindex = imm_readULEB32();
} else {
	memindex = 0u;
}
def cond = m_isMemory64(memindex);
if (cond) {
	def offset = imm_readULEB64();
	def index = pop_u64();
	def val = mach_readMemory64_u32(memindex, index, offset);
	push_u32(val);
} else {
	def offset = imm_readULEB32();
	def index = pop_u32();
	def val = mach_readMemory32_u32(memindex, index, offset);
	push_u32(val);
}
`;
window.traces["I64_LOAD"] = {}
window.traces["I64_LOAD"]["parsed"] = ''
window.traces["I64_LOAD"]["parsed__raw"] = ''
window.traces["I64_LOAD"]["parsed"] += `<pre class=''>def flags = imm_readU8();
def memindex : u32 = 0u;
def arg__182 : byte = 0;
def arg__184 : byte = 0x40u8;
def arg__183 = (flags);
def arg__181 = u8.&(arg__183, arg__184);
def cond__179 = u8.!=(arg__181, arg__182);
if (cond__179) {
	def memindex__180 = imm_readULEB32();
}
// phis: memindex <- memindex__180; 
def arg__178 = (memindex);
def cond__167 = m_isMemory64(arg__178);
if (cond__167) {
	def offset = imm_readULEB64();
	def index = pop_u64();
	def arg__172 = (offset);
	def arg__171 = (index);
	def arg__170 = (memindex);
	def val = mach_readMemory64_u64(arg__170, arg__171, arg__172);
	def arg__169 = (val);
	def eff__168 = push_u64(arg__169);
} else {
	def offset = imm_readULEB32();
	def index = pop_u32();
	def arg__177 = (offset);
	def arg__176 = (index);
	def arg__175 = (memindex);
	def val = mach_readMemory32_u64(arg__175, arg__176, arg__177);
	def arg__174 = (val);
	def eff__173 = push_u64(arg__174);
}
// phis: 
</pre>`;
window.traces["I64_LOAD"]["parsed__raw"] += `def flags = imm_readU8();
def memindex : u32 = 0u;
def arg__182 : byte = 0;
def arg__184 : byte = 0x40u8;
def arg__183 = (flags);
def arg__181 = u8.&(arg__183, arg__184);
def cond__179 = u8.!=(arg__181, arg__182);
if (cond__179) {
	def memindex__180 = imm_readULEB32();
}
// phis: memindex <- memindex__180; 
def arg__178 = (memindex);
def cond__167 = m_isMemory64(arg__178);
if (cond__167) {
	def offset = imm_readULEB64();
	def index = pop_u64();
	def arg__172 = (offset);
	def arg__171 = (index);
	def arg__170 = (memindex);
	def val = mach_readMemory64_u64(arg__170, arg__171, arg__172);
	def arg__169 = (val);
	def eff__168 = push_u64(arg__169);
} else {
	def offset = imm_readULEB32();
	def index = pop_u32();
	def arg__177 = (offset);
	def arg__176 = (index);
	def arg__175 = (memindex);
	def val = mach_readMemory32_u64(arg__175, arg__176, arg__177);
	def arg__174 = (val);
	def eff__173 = push_u64(arg__174);
}
// phis: 
`;
window.traces["I64_LOAD"]["raw"] = ''
window.traces["I64_LOAD"]["raw__raw"] = ''
window.traces["I64_LOAD"]["raw"] += `<pre class='graph'>---
config:
  layout: elk
---
graph TD
	1[\\"Finish"/]
	31 -. Codeptr .-> 1
	32 -. Stack .-> 1
	0 -. Trap Locals Globals Tables Memory Extra .-> 1
	0[/"Start"\\]
	32{{"Sϕ Stack "}}
	14 --> 32
	30 --> 32
	22 --> 32
	22["eff__173 push_u64"]
	20 --> 22
	16 -. Stack .-> 22
	16["index pop_u32"]
	0 -. Stack .-> 16
	20["val mach_readMemory32_u64"]
	11 --> 20
	16 --> 20
	15 --> 20
	15["offset imm_readULEB32"]
	12 -. Codeptr .-> 15
	12{{"Sϕ Codeptr "}}
	9 --> 12
	10 --> 12
	3 --> 12
	3["flags imm_readU8"]
	0 -. Codeptr .-> 3
	10["memindex__180 imm_readULEB32"]
	3 -. Codeptr .-> 10
	9["cond__179 u8.!="]
	8 --> 9
	5 --> 9
	5["arg__182 0"]
	8["arg__181 u8.&"]
	3 --> 8
	6 --> 8
	6["arg__184 0x40u8"]
	11{"memindex ϕ"}
	9 --> 11
	10 --> 11
	4 --> 11
	4["memindex__185 0u"]
	30["eff__168 push_u64"]
	28 --> 30
	24 -. Stack .-> 30
	24["index pop_u64"]
	0 -. Stack .-> 24
	28["val mach_readMemory64_u64"]
	11 --> 28
	24 --> 28
	23 --> 28
	23["offset imm_readULEB64"]
	12 -. Codeptr .-> 23
	14["cond__167 m_isMemory64"]
	11 --> 14
	31{{"Sϕ Codeptr "}}
	14 --> 31
	23 --> 31
	15 --> 31
</pre>`;
window.traces["I64_LOAD"]["raw__raw"] += `---
config:
  layout: elk
---
graph TD
	1[\\"Finish"/]
	31 -. Codeptr .-> 1
	32 -. Stack .-> 1
	0 -. Trap Locals Globals Tables Memory Extra .-> 1
	0[/"Start"\\]
	32{{"Sϕ Stack "}}
	14 --> 32
	30 --> 32
	22 --> 32
	22["eff__173 push_u64"]
	20 --> 22
	16 -. Stack .-> 22
	16["index pop_u32"]
	0 -. Stack .-> 16
	20["val mach_readMemory32_u64"]
	11 --> 20
	16 --> 20
	15 --> 20
	15["offset imm_readULEB32"]
	12 -. Codeptr .-> 15
	12{{"Sϕ Codeptr "}}
	9 --> 12
	10 --> 12
	3 --> 12
	3["flags imm_readU8"]
	0 -. Codeptr .-> 3
	10["memindex__180 imm_readULEB32"]
	3 -. Codeptr .-> 10
	9["cond__179 u8.!="]
	8 --> 9
	5 --> 9
	5["arg__182 0"]
	8["arg__181 u8.&"]
	3 --> 8
	6 --> 8
	6["arg__184 0x40u8"]
	11{"memindex ϕ"}
	9 --> 11
	10 --> 11
	4 --> 11
	4["memindex__185 0u"]
	30["eff__168 push_u64"]
	28 --> 30
	24 -. Stack .-> 30
	24["index pop_u64"]
	0 -. Stack .-> 24
	28["val mach_readMemory64_u64"]
	11 --> 28
	24 --> 28
	23 --> 28
	23["offset imm_readULEB64"]
	12 -. Codeptr .-> 23
	14["cond__167 m_isMemory64"]
	11 --> 14
	31{{"Sϕ Codeptr "}}
	14 --> 31
	23 --> 31
	15 --> 31
`;
window.traces["I64_LOAD"]["spytial"] = ''
window.traces["I64_LOAD"]["spytial__raw"] = ''
window.traces["I64_LOAD"]["spytial"] += `<pre class=''>{
"atoms": [
{
"id": "node_1",
"type": "finish",
"label": "Finish"
},
{
"id": "node_31",
"type": "state_phi",
"label": "StatePhi [m_isMemory64 [cond__167]]"
},
{
"id": "node_32",
"type": "state_phi",
"label": "StatePhi [m_isMemory64 [cond__167]]"
},
{
"id": "node_0",
"type": "start",
"label": "Start"
},
{
"id": "node_14",
"type": "intrinsic",
"label": "m_isMemory64 [cond__167]"
},
{
"id": "node_23",
"type": "intrinsic",
"label": "imm_readULEB64 [offset]"
},
{
"id": "node_15",
"type": "intrinsic",
"label": "imm_readULEB32 [offset]"
},
{
"id": "node_30",
"type": "intrinsic",
"label": "push_u64 [eff__168]"
},
{
"id": "node_22",
"type": "intrinsic",
"label": "push_u64 [eff__173]"
},
{
"id": "node_11",
"type": "phi",
"label": "Phi"
},
{
"id": "node_12",
"type": "state_phi",
"label": "StatePhi [u8.!= [cond__179]]"
},
{
"id": "node_28",
"type": "intrinsic",
"label": "mach_readMemory64_u64 [val]"
},
{
"id": "node_24",
"type": "intrinsic",
"label": "pop_u64 [index]"
},
{
"id": "node_20",
"type": "intrinsic",
"label": "mach_readMemory32_u64 [val]"
},
{
"id": "node_16",
"type": "intrinsic",
"label": "pop_u32 [index]"
},
{
"id": "node_9",
"type": "intrinsic",
"label": "u8.!= [cond__179]"
},
{
"id": "node_10",
"type": "intrinsic",
"label": "imm_readULEB32 [memindex__180]"
},
{
"id": "node_4",
"type": "lit",
"label": "0u"
},
{
"id": "node_3",
"type": "intrinsic",
"label": "imm_readU8 [flags]"
},
{
"id": "node_8",
"type": "intrinsic",
"label": "u8.& [arg__181]"
},
{
"id": "node_5",
"type": "lit",
"label": "0"
},
{
"id": "node_6",
"type": "lit",
"label": "0x40u8"
}
],
"relations": [
{
"id": "uses",
"name": "Uses",
"types": ["sea_node", "sea_node"],
"tuples": [
{
"atoms": ["node_14", "node_11"],
"types": ["intrinsic", "phi"]
},
{
"atoms": ["node_30", "node_28"],
"types": ["intrinsic", "intrinsic"]
},
{
"atoms": ["node_22", "node_20"],
"types": ["intrinsic", "intrinsic"]
},
{
"atoms": ["node_28", "node_11"],
"types": ["intrinsic", "phi"]
},
{
"atoms": ["node_28", "node_24"],
"types": ["intrinsic", "intrinsic"]
},
{
"atoms": ["node_28", "node_23"],
"types": ["intrinsic", "intrinsic"]
},
{
"atoms": ["node_20", "node_11"],
"types": ["intrinsic", "phi"]
},
{
"atoms": ["node_20", "node_16"],
"types": ["intrinsic", "intrinsic"]
},
{
"atoms": ["node_20", "node_15"],
"types": ["intrinsic", "intrinsic"]
},
{
"atoms": ["node_9", "node_8"],
"types": ["intrinsic", "intrinsic"]
},
{
"atoms": ["node_9", "node_5"],
"types": ["intrinsic", "lit"]
},
{
"atoms": ["node_8", "node_3"],
"types": ["intrinsic", "intrinsic"]
},
{
"atoms": ["node_8", "node_6"],
"types": ["intrinsic", "lit"]
}
]
},
{
"id": "state_uses",
"name": "StateUses",
"types": ["sea_node", "sea_node"],
"tuples": [
{
"atoms": ["node_1", "node_31"],
"types": ["finish", "state_phi"]
},
{
"atoms": ["node_1", "node_32"],
"types": ["finish", "state_phi"]
},
{
"atoms": ["node_1", "node_0"],
"types": ["finish", "start"]
},
{
"atoms": ["node_23", "node_12"],
"types": ["intrinsic", "state_phi"]
},
{
"atoms": ["node_15", "node_12"],
"types": ["intrinsic", "state_phi"]
},
{
"atoms": ["node_30", "node_24"],
"types": ["intrinsic", "intrinsic"]
},
{
"atoms": ["node_22", "node_16"],
"types": ["intrinsic", "intrinsic"]
},
{
"atoms": ["node_24", "node_0"],
"types": ["intrinsic", "start"]
},
{
"atoms": ["node_16", "node_0"],
"types": ["intrinsic", "start"]
},
{
"atoms": ["node_10", "node_3"],
"types": ["intrinsic", "intrinsic"]
},
{
"atoms": ["node_3", "node_0"],
"types": ["intrinsic", "start"]
}
]
},
{
"id": "phi_cond",
"name": "PhiCond",
"types": ["sea_node", "sea_node"],
"tuples": [
{
"atoms": ["node_31", "node_14"],
"types": ["state_phi", "intrinsic"]
},
{
"atoms": ["node_32", "node_14"],
"types": ["state_phi", "intrinsic"]
},
{
"atoms": ["node_11", "node_9"],
"types": ["phi", "intrinsic"]
},
{
"atoms": ["node_12", "node_9"],
"types": ["state_phi", "intrinsic"]
}
]
},
{
"id": "phi_true",
"name": "PhiTrue",
"types": ["sea_node", "sea_node"],
"tuples": [
{
"atoms": ["node_31", "node_23"],
"types": ["state_phi", "intrinsic"]
},
{
"atoms": ["node_32", "node_30"],
"types": ["state_phi", "intrinsic"]
},
{
"atoms": ["node_11", "node_10"],
"types": ["phi", "intrinsic"]
},
{
"atoms": ["node_12", "node_10"],
"types": ["state_phi", "intrinsic"]
}
]
},
{
"id": "phi_false",
"name": "PhiFalse",
"types": ["sea_node", "sea_node"],
"tuples": [
{
"atoms": ["node_31", "node_15"],
"types": ["state_phi", "intrinsic"]
},
{
"atoms": ["node_32", "node_22"],
"types": ["state_phi", "intrinsic"]
},
{
"atoms": ["node_11", "node_4"],
"types": ["phi", "lit"]
},
{
"atoms": ["node_12", "node_3"],
"types": ["state_phi", "intrinsic"]
}
]
}
]
}</pre>`;
window.traces["I64_LOAD"]["spytial__raw"] += `{
"atoms": [
{
"id": "node_1",
"type": "finish",
"label": "Finish"
},
{
"id": "node_31",
"type": "state_phi",
"label": "StatePhi [m_isMemory64 [cond__167]]"
},
{
"id": "node_32",
"type": "state_phi",
"label": "StatePhi [m_isMemory64 [cond__167]]"
},
{
"id": "node_0",
"type": "start",
"label": "Start"
},
{
"id": "node_14",
"type": "intrinsic",
"label": "m_isMemory64 [cond__167]"
},
{
"id": "node_23",
"type": "intrinsic",
"label": "imm_readULEB64 [offset]"
},
{
"id": "node_15",
"type": "intrinsic",
"label": "imm_readULEB32 [offset]"
},
{
"id": "node_30",
"type": "intrinsic",
"label": "push_u64 [eff__168]"
},
{
"id": "node_22",
"type": "intrinsic",
"label": "push_u64 [eff__173]"
},
{
"id": "node_11",
"type": "phi",
"label": "Phi"
},
{
"id": "node_12",
"type": "state_phi",
"label": "StatePhi [u8.!= [cond__179]]"
},
{
"id": "node_28",
"type": "intrinsic",
"label": "mach_readMemory64_u64 [val]"
},
{
"id": "node_24",
"type": "intrinsic",
"label": "pop_u64 [index]"
},
{
"id": "node_20",
"type": "intrinsic",
"label": "mach_readMemory32_u64 [val]"
},
{
"id": "node_16",
"type": "intrinsic",
"label": "pop_u32 [index]"
},
{
"id": "node_9",
"type": "intrinsic",
"label": "u8.!= [cond__179]"
},
{
"id": "node_10",
"type": "intrinsic",
"label": "imm_readULEB32 [memindex__180]"
},
{
"id": "node_4",
"type": "lit",
"label": "0u"
},
{
"id": "node_3",
"type": "intrinsic",
"label": "imm_readU8 [flags]"
},
{
"id": "node_8",
"type": "intrinsic",
"label": "u8.& [arg__181]"
},
{
"id": "node_5",
"type": "lit",
"label": "0"
},
{
"id": "node_6",
"type": "lit",
"label": "0x40u8"
}
],
"relations": [
{
"id": "uses",
"name": "Uses",
"types": ["sea_node", "sea_node"],
"tuples": [
{
"atoms": ["node_14", "node_11"],
"types": ["intrinsic", "phi"]
},
{
"atoms": ["node_30", "node_28"],
"types": ["intrinsic", "intrinsic"]
},
{
"atoms": ["node_22", "node_20"],
"types": ["intrinsic", "intrinsic"]
},
{
"atoms": ["node_28", "node_11"],
"types": ["intrinsic", "phi"]
},
{
"atoms": ["node_28", "node_24"],
"types": ["intrinsic", "intrinsic"]
},
{
"atoms": ["node_28", "node_23"],
"types": ["intrinsic", "intrinsic"]
},
{
"atoms": ["node_20", "node_11"],
"types": ["intrinsic", "phi"]
},
{
"atoms": ["node_20", "node_16"],
"types": ["intrinsic", "intrinsic"]
},
{
"atoms": ["node_20", "node_15"],
"types": ["intrinsic", "intrinsic"]
},
{
"atoms": ["node_9", "node_8"],
"types": ["intrinsic", "intrinsic"]
},
{
"atoms": ["node_9", "node_5"],
"types": ["intrinsic", "lit"]
},
{
"atoms": ["node_8", "node_3"],
"types": ["intrinsic", "intrinsic"]
},
{
"atoms": ["node_8", "node_6"],
"types": ["intrinsic", "lit"]
}
]
},
{
"id": "state_uses",
"name": "StateUses",
"types": ["sea_node", "sea_node"],
"tuples": [
{
"atoms": ["node_1", "node_31"],
"types": ["finish", "state_phi"]
},
{
"atoms": ["node_1", "node_32"],
"types": ["finish", "state_phi"]
},
{
"atoms": ["node_1", "node_0"],
"types": ["finish", "start"]
},
{
"atoms": ["node_23", "node_12"],
"types": ["intrinsic", "state_phi"]
},
{
"atoms": ["node_15", "node_12"],
"types": ["intrinsic", "state_phi"]
},
{
"atoms": ["node_30", "node_24"],
"types": ["intrinsic", "intrinsic"]
},
{
"atoms": ["node_22", "node_16"],
"types": ["intrinsic", "intrinsic"]
},
{
"atoms": ["node_24", "node_0"],
"types": ["intrinsic", "start"]
},
{
"atoms": ["node_16", "node_0"],
"types": ["intrinsic", "start"]
},
{
"atoms": ["node_10", "node_3"],
"types": ["intrinsic", "intrinsic"]
},
{
"atoms": ["node_3", "node_0"],
"types": ["intrinsic", "start"]
}
]
},
{
"id": "phi_cond",
"name": "PhiCond",
"types": ["sea_node", "sea_node"],
"tuples": [
{
"atoms": ["node_31", "node_14"],
"types": ["state_phi", "intrinsic"]
},
{
"atoms": ["node_32", "node_14"],
"types": ["state_phi", "intrinsic"]
},
{
"atoms": ["node_11", "node_9"],
"types": ["phi", "intrinsic"]
},
{
"atoms": ["node_12", "node_9"],
"types": ["state_phi", "intrinsic"]
}
]
},
{
"id": "phi_true",
"name": "PhiTrue",
"types": ["sea_node", "sea_node"],
"tuples": [
{
"atoms": ["node_31", "node_23"],
"types": ["state_phi", "intrinsic"]
},
{
"atoms": ["node_32", "node_30"],
"types": ["state_phi", "intrinsic"]
},
{
"atoms": ["node_11", "node_10"],
"types": ["phi", "intrinsic"]
},
{
"atoms": ["node_12", "node_10"],
"types": ["state_phi", "intrinsic"]
}
]
},
{
"id": "phi_false",
"name": "PhiFalse",
"types": ["sea_node", "sea_node"],
"tuples": [
{
"atoms": ["node_31", "node_15"],
"types": ["state_phi", "intrinsic"]
},
{
"atoms": ["node_32", "node_22"],
"types": ["state_phi", "intrinsic"]
},
{
"atoms": ["node_11", "node_4"],
"types": ["phi", "lit"]
},
{
"atoms": ["node_12", "node_3"],
"types": ["state_phi", "intrinsic"]
}
]
}
]
}`;
window.traces["I64_LOAD"]["overloadOps"] = ''
window.traces["I64_LOAD"]["overloadOps__raw"] = ''
window.traces["I64_LOAD"]["overloadOps"] += `<pre class='graph'>---
config:
  layout: elk
---
graph TD
	1[\\"Finish"/]
	31 -. Codeptr .-> 1
	32 -. Stack .-> 1
	0 -. Trap Locals Globals Tables Memory Extra .-> 1
	0[/"Start"\\]
	32{{"Sϕ Stack "}}
	14 --> 32
	30 --> 32
	22 --> 32
	22["eff__173 push_u64"]
	20 --> 22
	16 -. Stack .-> 22
	16["index pop_u32"]
	0 -. Stack .-> 16
	20["val mach_readMemory32_u64"]
	11 --> 20
	16 --> 20
	15 --> 20
	15["offset imm_readULEB32"]
	12 -. Codeptr .-> 15
	12{{"Sϕ Codeptr "}}
	9 --> 12
	10 --> 12
	3 --> 12
	3["flags imm_readU8"]
	0 -. Codeptr .-> 3
	10["memindex__180 imm_readULEB32"]
	3 -. Codeptr .-> 10
	9["cond__179 u8.!="]
	8 --> 9
	5 --> 9
	5["arg__182 0"]
	8["arg__181 u8.&"]
	3 --> 8
	6 --> 8
	6["arg__184 0x40u8"]
	11{"memindex ϕ"}
	9 --> 11
	10 --> 11
	4 --> 11
	4["memindex__186 0u"]
	30["eff__168 push_u64"]
	28 --> 30
	24 -. Stack .-> 30
	24["index pop_u64"]
	0 -. Stack .-> 24
	28["val mach_readMemory64_u64"]
	11 --> 28
	24 --> 28
	23 --> 28
	23["offset imm_readULEB64"]
	12 -. Codeptr .-> 23
	14["cond__167 m_isMemory64"]
	11 --> 14
	31{{"Sϕ Codeptr "}}
	14 --> 31
	23 --> 31
	15 --> 31
</pre>`;
window.traces["I64_LOAD"]["overloadOps__raw"] += `---
config:
  layout: elk
---
graph TD
	1[\\"Finish"/]
	31 -. Codeptr .-> 1
	32 -. Stack .-> 1
	0 -. Trap Locals Globals Tables Memory Extra .-> 1
	0[/"Start"\\]
	32{{"Sϕ Stack "}}
	14 --> 32
	30 --> 32
	22 --> 32
	22["eff__173 push_u64"]
	20 --> 22
	16 -. Stack .-> 22
	16["index pop_u32"]
	0 -. Stack .-> 16
	20["val mach_readMemory32_u64"]
	11 --> 20
	16 --> 20
	15 --> 20
	15["offset imm_readULEB32"]
	12 -. Codeptr .-> 15
	12{{"Sϕ Codeptr "}}
	9 --> 12
	10 --> 12
	3 --> 12
	3["flags imm_readU8"]
	0 -. Codeptr .-> 3
	10["memindex__180 imm_readULEB32"]
	3 -. Codeptr .-> 10
	9["cond__179 u8.!="]
	8 --> 9
	5 --> 9
	5["arg__182 0"]
	8["arg__181 u8.&"]
	3 --> 8
	6 --> 8
	6["arg__184 0x40u8"]
	11{"memindex ϕ"}
	9 --> 11
	10 --> 11
	4 --> 11
	4["memindex__186 0u"]
	30["eff__168 push_u64"]
	28 --> 30
	24 -. Stack .-> 30
	24["index pop_u64"]
	0 -. Stack .-> 24
	28["val mach_readMemory64_u64"]
	11 --> 28
	24 --> 28
	23 --> 28
	23["offset imm_readULEB64"]
	12 -. Codeptr .-> 23
	14["cond__167 m_isMemory64"]
	11 --> 14
	31{{"Sϕ Codeptr "}}
	14 --> 31
	23 --> 31
	15 --> 31
`;
window.traces["I64_LOAD"]["addAbstractions"] = ''
window.traces["I64_LOAD"]["addAbstractions__raw"] = ''
window.traces["I64_LOAD"]["addAbstractions"] += `<pre class='graph'>---
config:
  layout: elk
---
graph TD
	1[\\"Finish"/]
	31 -. Codeptr .-> 1
	32 -. Stack .-> 1
	0 -. Trap Locals Globals Tables Memory Extra .-> 1
	0[/"Start"\\]
	32{{"Sϕ Stack "}}
	14 --> 32
	30 --> 32
	22 --> 32
	22["eff__173 push_u64"]
	20 --> 22
	16 -. Stack .-> 22
	16["index pop_u32"]
	0 -. Stack .-> 16
	20["val mach_readMemory32_u64"]
	11 --> 20
	16 --> 20
	15 --> 20
	15["offset imm_readULEB32"]
	12 -. Codeptr .-> 15
	12{{"Sϕ Codeptr "}}
	9 --> 12
	10 --> 12
	3 --> 12
	3["flags imm_readU8"]
	0 -. Codeptr .-> 3
	10["memindex__180 imm_readULEB32"]
	3 -. Codeptr .-> 10
	9["cond__179 u8.!="]
	8 --> 9
	5 --> 9
	5["arg__182 0"]
	8["arg__181 u8.&"]
	3 --> 8
	6 --> 8
	6["arg__184 0x40u8"]
	11{"memindex ϕ"}
	9 --> 11
	10 --> 11
	4 --> 11
	4["memindex__186 0u"]
	30["eff__168 push_u64"]
	28 --> 30
	24 -. Stack .-> 30
	24["index pop_u64"]
	0 -. Stack .-> 24
	28["val mach_readMemory64_u64"]
	11 --> 28
	24 --> 28
	23 --> 28
	23["offset imm_readULEB64"]
	12 -. Codeptr .-> 23
	14["cond__167 m_isMemory64"]
	11 --> 14
	31{{"Sϕ Codeptr "}}
	14 --> 31
	23 --> 31
	15 --> 31
</pre>`;
window.traces["I64_LOAD"]["addAbstractions__raw"] += `---
config:
  layout: elk
---
graph TD
	1[\\"Finish"/]
	31 -. Codeptr .-> 1
	32 -. Stack .-> 1
	0 -. Trap Locals Globals Tables Memory Extra .-> 1
	0[/"Start"\\]
	32{{"Sϕ Stack "}}
	14 --> 32
	30 --> 32
	22 --> 32
	22["eff__173 push_u64"]
	20 --> 22
	16 -. Stack .-> 22
	16["index pop_u32"]
	0 -. Stack .-> 16
	20["val mach_readMemory32_u64"]
	11 --> 20
	16 --> 20
	15 --> 20
	15["offset imm_readULEB32"]
	12 -. Codeptr .-> 15
	12{{"Sϕ Codeptr "}}
	9 --> 12
	10 --> 12
	3 --> 12
	3["flags imm_readU8"]
	0 -. Codeptr .-> 3
	10["memindex__180 imm_readULEB32"]
	3 -. Codeptr .-> 10
	9["cond__179 u8.!="]
	8 --> 9
	5 --> 9
	5["arg__182 0"]
	8["arg__181 u8.&"]
	3 --> 8
	6 --> 8
	6["arg__184 0x40u8"]
	11{"memindex ϕ"}
	9 --> 11
	10 --> 11
	4 --> 11
	4["memindex__186 0u"]
	30["eff__168 push_u64"]
	28 --> 30
	24 -. Stack .-> 30
	24["index pop_u64"]
	0 -. Stack .-> 24
	28["val mach_readMemory64_u64"]
	11 --> 28
	24 --> 28
	23 --> 28
	23["offset imm_readULEB64"]
	12 -. Codeptr .-> 23
	14["cond__167 m_isMemory64"]
	11 --> 14
	31{{"Sϕ Codeptr "}}
	14 --> 31
	23 --> 31
	15 --> 31
`;
window.traces["I64_LOAD"]["schedulerMermaid"] = ''
window.traces["I64_LOAD"]["schedulerMermaid__raw"] = ''
window.traces["I64_LOAD"]["schedulerMermaid"] += `<pre class='graph'>graph TD
subgraph block_153["Block 153"]
	direction TB
	b153_1[\\"Finish"/]
end
phi_155 --> block_153
subgraph phi_155["Phi 155"]
	p155_32{{"Sϕ Stack "}}
	p155_31{{"Sϕ Codeptr "}}
end
block_156 --> phi_155
block_157 --> phi_155
subgraph block_156["Block 156"]
	direction TB
	b156_24["index pop_u64"]
	b156_28["val mach_readMemory64_u64"]
	b156_30["eff__168 push_u64"]
	b156_23["offset imm_readULEB64"]
	b156_24 --> b156_28
	b156_28 --> b156_30
	b156_30 --> b156_23
end
branch_154 --> block_156
subgraph branch_154["Branch 154"]
	br154_14["cond__167 m_isMemory64"]

end
block_158 --> branch_154
subgraph block_158["Block 158"]
	direction TB
	b158_14["cond__167 m_isMemory64"]
end
phi_160 --> block_158
subgraph phi_160["Phi 160"]
	p160_12{{"Sϕ Codeptr "}}
	p160_12{{"Sϕ Codeptr "}}
	p160_12{{"Sϕ Codeptr "}}
	p160_12{{"Sϕ Codeptr "}}
	p160_11{"memindex ϕ"}
	p160_11{"memindex ϕ"}
	p160_11{"memindex ϕ"}
	p160_11{"memindex ϕ"}
	p160_11{"memindex ϕ"}
	p160_11{"memindex ϕ"}
	p160_12{{"Sϕ Codeptr "}}
	p160_12{{"Sϕ Codeptr "}}
	p160_12{{"Sϕ Codeptr "}}
	p160_12{{"Sϕ Codeptr "}}
end
block_161 --> phi_160
block_162 --> phi_160
subgraph block_161["Block 161"]
	direction TB
	b161_10["memindex__180 imm_readULEB32"]
end
branch_159 --> block_161
subgraph branch_159["Branch 159"]
	br159_9["cond__179 u8.!="]

end
block_163 --> branch_159
subgraph block_163["Block 163"]
	direction TB
	b163_0[/"Start"\\]
	b163_6["arg__184 0x40u8"]
	b163_5["arg__182 0"]
	b163_8["arg__181 u8.&"]
	b163_9["cond__179 u8.!="]
	b163_0 --> b163_6
	b163_6 --> b163_5
	b163_5 --> b163_8
	b163_8 --> b163_9
end
subgraph block_162["Block 162"]
	direction TB
	b162_4["memindex__186 0u"]
	b162_3["flags imm_readU8"]
	b162_4 --> b162_3
end
branch_159 --> block_162
subgraph block_157["Block 157"]
	direction TB
	b157_16["index pop_u32"]
	b157_20["val mach_readMemory32_u64"]
	b157_22["eff__173 push_u64"]
	b157_15["offset imm_readULEB32"]
	b157_16 --> b157_20
	b157_20 --> b157_22
	b157_22 --> b157_15
end
branch_154 --> block_157

</pre>`;
window.traces["I64_LOAD"]["schedulerMermaid__raw"] += `graph TD
subgraph block_153["Block 153"]
	direction TB
	b153_1[\\"Finish"/]
end
phi_155 --> block_153
subgraph phi_155["Phi 155"]
	p155_32{{"Sϕ Stack "}}
	p155_31{{"Sϕ Codeptr "}}
end
block_156 --> phi_155
block_157 --> phi_155
subgraph block_156["Block 156"]
	direction TB
	b156_24["index pop_u64"]
	b156_28["val mach_readMemory64_u64"]
	b156_30["eff__168 push_u64"]
	b156_23["offset imm_readULEB64"]
	b156_24 --> b156_28
	b156_28 --> b156_30
	b156_30 --> b156_23
end
branch_154 --> block_156
subgraph branch_154["Branch 154"]
	br154_14["cond__167 m_isMemory64"]

end
block_158 --> branch_154
subgraph block_158["Block 158"]
	direction TB
	b158_14["cond__167 m_isMemory64"]
end
phi_160 --> block_158
subgraph phi_160["Phi 160"]
	p160_12{{"Sϕ Codeptr "}}
	p160_12{{"Sϕ Codeptr "}}
	p160_12{{"Sϕ Codeptr "}}
	p160_12{{"Sϕ Codeptr "}}
	p160_11{"memindex ϕ"}
	p160_11{"memindex ϕ"}
	p160_11{"memindex ϕ"}
	p160_11{"memindex ϕ"}
	p160_11{"memindex ϕ"}
	p160_11{"memindex ϕ"}
	p160_12{{"Sϕ Codeptr "}}
	p160_12{{"Sϕ Codeptr "}}
	p160_12{{"Sϕ Codeptr "}}
	p160_12{{"Sϕ Codeptr "}}
end
block_161 --> phi_160
block_162 --> phi_160
subgraph block_161["Block 161"]
	direction TB
	b161_10["memindex__180 imm_readULEB32"]
end
branch_159 --> block_161
subgraph branch_159["Branch 159"]
	br159_9["cond__179 u8.!="]

end
block_163 --> branch_159
subgraph block_163["Block 163"]
	direction TB
	b163_0[/"Start"\\]
	b163_6["arg__184 0x40u8"]
	b163_5["arg__182 0"]
	b163_8["arg__181 u8.&"]
	b163_9["cond__179 u8.!="]
	b163_0 --> b163_6
	b163_6 --> b163_5
	b163_5 --> b163_8
	b163_8 --> b163_9
end
subgraph block_162["Block 162"]
	direction TB
	b162_4["memindex__186 0u"]
	b162_3["flags imm_readU8"]
	b162_4 --> b162_3
end
branch_159 --> block_162
subgraph block_157["Block 157"]
	direction TB
	b157_16["index pop_u32"]
	b157_20["val mach_readMemory32_u64"]
	b157_22["eff__173 push_u64"]
	b157_15["offset imm_readULEB32"]
	b157_16 --> b157_20
	b157_20 --> b157_22
	b157_22 --> b157_15
end
branch_154 --> block_157

`;
window.traces["I64_LOAD"]["unLEM"] = ''
window.traces["I64_LOAD"]["unLEM__raw"] = ''
window.traces["I64_LOAD"]["unLEM"] += `<pre class='graph'>---
config:
  layout: elk
---
graph TD
	1[\\"Finish"/]
	31 -. Codeptr .-> 1
	32 -. Stack .-> 1
	0 -. Trap Locals Globals Tables Memory Extra .-> 1
	0[/"Start"\\]
	32{{"Sϕ Stack "}}
	14 --> 32
	30 --> 32
	22 --> 32
	22["eff__173 push_u64"]
	20 --> 22
	16 -. Stack .-> 22
	16["index pop_u32"]
	0 -. Stack .-> 16
	20["val mach_readMemory32_u64"]
	11 --> 20
	16 --> 20
	15 --> 20
	15["offset imm_readULEB32"]
	12 -. Codeptr .-> 15
	12{{"Sϕ Codeptr "}}
	9 --> 12
	10 --> 12
	3 --> 12
	3["flags imm_readU8"]
	0 -. Codeptr .-> 3
	10["memindex__180 imm_readULEB32"]
	3 -. Codeptr .-> 10
	9["cond__179 u8.!="]
	8 --> 9
	5 --> 9
	5["arg__182 0"]
	8["arg__181 u8.&"]
	3 --> 8
	6 --> 8
	6["arg__184 0x40u8"]
	11{"memindex ϕ"}
	9 --> 11
	10 --> 11
	4 --> 11
	4["memindex__186 0u"]
	30["eff__168 push_u64"]
	28 --> 30
	24 -. Stack .-> 30
	24["index pop_u64"]
	0 -. Stack .-> 24
	28["val mach_readMemory64_u64"]
	11 --> 28
	24 --> 28
	23 --> 28
	23["offset imm_readULEB64"]
	12 -. Codeptr .-> 23
	14["cond__167 m_isMemory64"]
	11 --> 14
	31{{"Sϕ Codeptr "}}
	14 --> 31
	23 --> 31
	15 --> 31
</pre>`;
window.traces["I64_LOAD"]["unLEM__raw"] += `---
config:
  layout: elk
---
graph TD
	1[\\"Finish"/]
	31 -. Codeptr .-> 1
	32 -. Stack .-> 1
	0 -. Trap Locals Globals Tables Memory Extra .-> 1
	0[/"Start"\\]
	32{{"Sϕ Stack "}}
	14 --> 32
	30 --> 32
	22 --> 32
	22["eff__173 push_u64"]
	20 --> 22
	16 -. Stack .-> 22
	16["index pop_u32"]
	0 -. Stack .-> 16
	20["val mach_readMemory32_u64"]
	11 --> 20
	16 --> 20
	15 --> 20
	15["offset imm_readULEB32"]
	12 -. Codeptr .-> 15
	12{{"Sϕ Codeptr "}}
	9 --> 12
	10 --> 12
	3 --> 12
	3["flags imm_readU8"]
	0 -. Codeptr .-> 3
	10["memindex__180 imm_readULEB32"]
	3 -. Codeptr .-> 10
	9["cond__179 u8.!="]
	8 --> 9
	5 --> 9
	5["arg__182 0"]
	8["arg__181 u8.&"]
	3 --> 8
	6 --> 8
	6["arg__184 0x40u8"]
	11{"memindex ϕ"}
	9 --> 11
	10 --> 11
	4 --> 11
	4["memindex__186 0u"]
	30["eff__168 push_u64"]
	28 --> 30
	24 -. Stack .-> 30
	24["index pop_u64"]
	0 -. Stack .-> 24
	28["val mach_readMemory64_u64"]
	11 --> 28
	24 --> 28
	23 --> 28
	23["offset imm_readULEB64"]
	12 -. Codeptr .-> 23
	14["cond__167 m_isMemory64"]
	11 --> 14
	31{{"Sϕ Codeptr "}}
	14 --> 31
	23 --> 31
	15 --> 31
`;
window.traces["I64_LOAD"]["unlem_schedule"] = ''
window.traces["I64_LOAD"]["unlem_schedule__raw"] = ''
window.traces["I64_LOAD"]["unlem_schedule"] += `<pre class=''>def flags = imm_readU8();
def arg__184 : byte = 0x40u8;
def arg__181 = u8.&(flags, arg__184);
def arg__182 : byte = 0;
def cond__179 = u8.!=(arg__181, arg__182);
var memindex: u32;
if (cond__179) {
	def memindex__180 = imm_readULEB32();
} else {
	def memindex__186 : u32 = 0u;
}
// phis: memindex <- memindex__180; memindex <- memindex__186; 
def cond__167 = m_isMemory64(memindex);
if (cond__167) {
	def offset = imm_readULEB64();
	def index = pop_u64();
	def val = mach_readMemory64_u64(memindex, index, offset);
	def eff__168 = push_u64(val);
} else {
	def offset = imm_readULEB32();
	def index = pop_u32();
	def val = mach_readMemory32_u64(memindex, index, offset);
	def eff__173 = push_u64(val);
}
// phis: 
</pre>`;
window.traces["I64_LOAD"]["unlem_schedule__raw"] += `def flags = imm_readU8();
def arg__184 : byte = 0x40u8;
def arg__181 = u8.&(flags, arg__184);
def arg__182 : byte = 0;
def cond__179 = u8.!=(arg__181, arg__182);
var memindex: u32;
if (cond__179) {
	def memindex__180 = imm_readULEB32();
} else {
	def memindex__186 : u32 = 0u;
}
// phis: memindex <- memindex__180; memindex <- memindex__186; 
def cond__167 = m_isMemory64(memindex);
if (cond__167) {
	def offset = imm_readULEB64();
	def index = pop_u64();
	def val = mach_readMemory64_u64(memindex, index, offset);
	def eff__168 = push_u64(val);
} else {
	def offset = imm_readULEB32();
	def index = pop_u32();
	def val = mach_readMemory32_u64(memindex, index, offset);
	def eff__173 = push_u64(val);
}
// phis: 
`;
window.traces["I64_LOAD"]["spytial_ul"] = ''
window.traces["I64_LOAD"]["spytial_ul__raw"] = ''
window.traces["I64_LOAD"]["spytial_ul"] += `<pre class=''>{
"atoms": [
{
"id": "node_1",
"type": "finish",
"label": "Finish"
},
{
"id": "node_31",
"type": "state_phi",
"label": "StatePhi [m_isMemory64 [cond__167]]"
},
{
"id": "node_32",
"type": "state_phi",
"label": "StatePhi [m_isMemory64 [cond__167]]"
},
{
"id": "node_0",
"type": "start",
"label": "Start"
},
{
"id": "node_14",
"type": "intrinsic",
"label": "m_isMemory64 [cond__167]"
},
{
"id": "node_23",
"type": "intrinsic",
"label": "imm_readULEB64 [offset]"
},
{
"id": "node_15",
"type": "intrinsic",
"label": "imm_readULEB32 [offset]"
},
{
"id": "node_30",
"type": "intrinsic",
"label": "push_u64 [eff__168]"
},
{
"id": "node_22",
"type": "intrinsic",
"label": "push_u64 [eff__173]"
},
{
"id": "node_11",
"type": "phi",
"label": "Phi"
},
{
"id": "node_12",
"type": "state_phi",
"label": "StatePhi [u8.!= [cond__179]]"
},
{
"id": "node_28",
"type": "intrinsic",
"label": "mach_readMemory64_u64 [val]"
},
{
"id": "node_24",
"type": "intrinsic",
"label": "pop_u64 [index]"
},
{
"id": "node_20",
"type": "intrinsic",
"label": "mach_readMemory32_u64 [val]"
},
{
"id": "node_16",
"type": "intrinsic",
"label": "pop_u32 [index]"
},
{
"id": "node_9",
"type": "intrinsic",
"label": "u8.!= [cond__179]"
},
{
"id": "node_10",
"type": "intrinsic",
"label": "imm_readULEB32 [memindex__180]"
},
{
"id": "node_4",
"type": "lit",
"label": "0u"
},
{
"id": "node_3",
"type": "intrinsic",
"label": "imm_readU8 [flags]"
},
{
"id": "node_8",
"type": "intrinsic",
"label": "u8.& [arg__181]"
},
{
"id": "node_5",
"type": "lit",
"label": "0"
},
{
"id": "node_6",
"type": "lit",
"label": "0x40u8"
}
],
"relations": [
{
"id": "uses",
"name": "Uses",
"types": ["sea_node", "sea_node"],
"tuples": [
{
"atoms": ["node_14", "node_11"],
"types": ["intrinsic", "phi"]
},
{
"atoms": ["node_30", "node_28"],
"types": ["intrinsic", "intrinsic"]
},
{
"atoms": ["node_22", "node_20"],
"types": ["intrinsic", "intrinsic"]
},
{
"atoms": ["node_28", "node_11"],
"types": ["intrinsic", "phi"]
},
{
"atoms": ["node_28", "node_24"],
"types": ["intrinsic", "intrinsic"]
},
{
"atoms": ["node_28", "node_23"],
"types": ["intrinsic", "intrinsic"]
},
{
"atoms": ["node_20", "node_11"],
"types": ["intrinsic", "phi"]
},
{
"atoms": ["node_20", "node_16"],
"types": ["intrinsic", "intrinsic"]
},
{
"atoms": ["node_20", "node_15"],
"types": ["intrinsic", "intrinsic"]
},
{
"atoms": ["node_9", "node_8"],
"types": ["intrinsic", "intrinsic"]
},
{
"atoms": ["node_9", "node_5"],
"types": ["intrinsic", "lit"]
},
{
"atoms": ["node_8", "node_3"],
"types": ["intrinsic", "intrinsic"]
},
{
"atoms": ["node_8", "node_6"],
"types": ["intrinsic", "lit"]
}
]
},
{
"id": "state_uses",
"name": "StateUses",
"types": ["sea_node", "sea_node"],
"tuples": [
{
"atoms": ["node_1", "node_31"],
"types": ["finish", "state_phi"]
},
{
"atoms": ["node_1", "node_32"],
"types": ["finish", "state_phi"]
},
{
"atoms": ["node_1", "node_0"],
"types": ["finish", "start"]
},
{
"atoms": ["node_23", "node_12"],
"types": ["intrinsic", "state_phi"]
},
{
"atoms": ["node_15", "node_12"],
"types": ["intrinsic", "state_phi"]
},
{
"atoms": ["node_30", "node_24"],
"types": ["intrinsic", "intrinsic"]
},
{
"atoms": ["node_22", "node_16"],
"types": ["intrinsic", "intrinsic"]
},
{
"atoms": ["node_24", "node_0"],
"types": ["intrinsic", "start"]
},
{
"atoms": ["node_16", "node_0"],
"types": ["intrinsic", "start"]
},
{
"atoms": ["node_10", "node_3"],
"types": ["intrinsic", "intrinsic"]
},
{
"atoms": ["node_3", "node_0"],
"types": ["intrinsic", "start"]
}
]
},
{
"id": "phi_cond",
"name": "PhiCond",
"types": ["sea_node", "sea_node"],
"tuples": [
{
"atoms": ["node_31", "node_14"],
"types": ["state_phi", "intrinsic"]
},
{
"atoms": ["node_32", "node_14"],
"types": ["state_phi", "intrinsic"]
},
{
"atoms": ["node_11", "node_9"],
"types": ["phi", "intrinsic"]
},
{
"atoms": ["node_12", "node_9"],
"types": ["state_phi", "intrinsic"]
}
]
},
{
"id": "phi_true",
"name": "PhiTrue",
"types": ["sea_node", "sea_node"],
"tuples": [
{
"atoms": ["node_31", "node_23"],
"types": ["state_phi", "intrinsic"]
},
{
"atoms": ["node_32", "node_30"],
"types": ["state_phi", "intrinsic"]
},
{
"atoms": ["node_11", "node_10"],
"types": ["phi", "intrinsic"]
},
{
"atoms": ["node_12", "node_10"],
"types": ["state_phi", "intrinsic"]
}
]
},
{
"id": "phi_false",
"name": "PhiFalse",
"types": ["sea_node", "sea_node"],
"tuples": [
{
"atoms": ["node_31", "node_15"],
"types": ["state_phi", "intrinsic"]
},
{
"atoms": ["node_32", "node_22"],
"types": ["state_phi", "intrinsic"]
},
{
"atoms": ["node_11", "node_4"],
"types": ["phi", "lit"]
},
{
"atoms": ["node_12", "node_3"],
"types": ["state_phi", "intrinsic"]
}
]
}
]
}</pre>`;
window.traces["I64_LOAD"]["spytial_ul__raw"] += `{
"atoms": [
{
"id": "node_1",
"type": "finish",
"label": "Finish"
},
{
"id": "node_31",
"type": "state_phi",
"label": "StatePhi [m_isMemory64 [cond__167]]"
},
{
"id": "node_32",
"type": "state_phi",
"label": "StatePhi [m_isMemory64 [cond__167]]"
},
{
"id": "node_0",
"type": "start",
"label": "Start"
},
{
"id": "node_14",
"type": "intrinsic",
"label": "m_isMemory64 [cond__167]"
},
{
"id": "node_23",
"type": "intrinsic",
"label": "imm_readULEB64 [offset]"
},
{
"id": "node_15",
"type": "intrinsic",
"label": "imm_readULEB32 [offset]"
},
{
"id": "node_30",
"type": "intrinsic",
"label": "push_u64 [eff__168]"
},
{
"id": "node_22",
"type": "intrinsic",
"label": "push_u64 [eff__173]"
},
{
"id": "node_11",
"type": "phi",
"label": "Phi"
},
{
"id": "node_12",
"type": "state_phi",
"label": "StatePhi [u8.!= [cond__179]]"
},
{
"id": "node_28",
"type": "intrinsic",
"label": "mach_readMemory64_u64 [val]"
},
{
"id": "node_24",
"type": "intrinsic",
"label": "pop_u64 [index]"
},
{
"id": "node_20",
"type": "intrinsic",
"label": "mach_readMemory32_u64 [val]"
},
{
"id": "node_16",
"type": "intrinsic",
"label": "pop_u32 [index]"
},
{
"id": "node_9",
"type": "intrinsic",
"label": "u8.!= [cond__179]"
},
{
"id": "node_10",
"type": "intrinsic",
"label": "imm_readULEB32 [memindex__180]"
},
{
"id": "node_4",
"type": "lit",
"label": "0u"
},
{
"id": "node_3",
"type": "intrinsic",
"label": "imm_readU8 [flags]"
},
{
"id": "node_8",
"type": "intrinsic",
"label": "u8.& [arg__181]"
},
{
"id": "node_5",
"type": "lit",
"label": "0"
},
{
"id": "node_6",
"type": "lit",
"label": "0x40u8"
}
],
"relations": [
{
"id": "uses",
"name": "Uses",
"types": ["sea_node", "sea_node"],
"tuples": [
{
"atoms": ["node_14", "node_11"],
"types": ["intrinsic", "phi"]
},
{
"atoms": ["node_30", "node_28"],
"types": ["intrinsic", "intrinsic"]
},
{
"atoms": ["node_22", "node_20"],
"types": ["intrinsic", "intrinsic"]
},
{
"atoms": ["node_28", "node_11"],
"types": ["intrinsic", "phi"]
},
{
"atoms": ["node_28", "node_24"],
"types": ["intrinsic", "intrinsic"]
},
{
"atoms": ["node_28", "node_23"],
"types": ["intrinsic", "intrinsic"]
},
{
"atoms": ["node_20", "node_11"],
"types": ["intrinsic", "phi"]
},
{
"atoms": ["node_20", "node_16"],
"types": ["intrinsic", "intrinsic"]
},
{
"atoms": ["node_20", "node_15"],
"types": ["intrinsic", "intrinsic"]
},
{
"atoms": ["node_9", "node_8"],
"types": ["intrinsic", "intrinsic"]
},
{
"atoms": ["node_9", "node_5"],
"types": ["intrinsic", "lit"]
},
{
"atoms": ["node_8", "node_3"],
"types": ["intrinsic", "intrinsic"]
},
{
"atoms": ["node_8", "node_6"],
"types": ["intrinsic", "lit"]
}
]
},
{
"id": "state_uses",
"name": "StateUses",
"types": ["sea_node", "sea_node"],
"tuples": [
{
"atoms": ["node_1", "node_31"],
"types": ["finish", "state_phi"]
},
{
"atoms": ["node_1", "node_32"],
"types": ["finish", "state_phi"]
},
{
"atoms": ["node_1", "node_0"],
"types": ["finish", "start"]
},
{
"atoms": ["node_23", "node_12"],
"types": ["intrinsic", "state_phi"]
},
{
"atoms": ["node_15", "node_12"],
"types": ["intrinsic", "state_phi"]
},
{
"atoms": ["node_30", "node_24"],
"types": ["intrinsic", "intrinsic"]
},
{
"atoms": ["node_22", "node_16"],
"types": ["intrinsic", "intrinsic"]
},
{
"atoms": ["node_24", "node_0"],
"types": ["intrinsic", "start"]
},
{
"atoms": ["node_16", "node_0"],
"types": ["intrinsic", "start"]
},
{
"atoms": ["node_10", "node_3"],
"types": ["intrinsic", "intrinsic"]
},
{
"atoms": ["node_3", "node_0"],
"types": ["intrinsic", "start"]
}
]
},
{
"id": "phi_cond",
"name": "PhiCond",
"types": ["sea_node", "sea_node"],
"tuples": [
{
"atoms": ["node_31", "node_14"],
"types": ["state_phi", "intrinsic"]
},
{
"atoms": ["node_32", "node_14"],
"types": ["state_phi", "intrinsic"]
},
{
"atoms": ["node_11", "node_9"],
"types": ["phi", "intrinsic"]
},
{
"atoms": ["node_12", "node_9"],
"types": ["state_phi", "intrinsic"]
}
]
},
{
"id": "phi_true",
"name": "PhiTrue",
"types": ["sea_node", "sea_node"],
"tuples": [
{
"atoms": ["node_31", "node_23"],
"types": ["state_phi", "intrinsic"]
},
{
"atoms": ["node_32", "node_30"],
"types": ["state_phi", "intrinsic"]
},
{
"atoms": ["node_11", "node_10"],
"types": ["phi", "intrinsic"]
},
{
"atoms": ["node_12", "node_10"],
"types": ["state_phi", "intrinsic"]
}
]
},
{
"id": "phi_false",
"name": "PhiFalse",
"types": ["sea_node", "sea_node"],
"tuples": [
{
"atoms": ["node_31", "node_15"],
"types": ["state_phi", "intrinsic"]
},
{
"atoms": ["node_32", "node_22"],
"types": ["state_phi", "intrinsic"]
},
{
"atoms": ["node_11", "node_4"],
"types": ["phi", "lit"]
},
{
"atoms": ["node_12", "node_3"],
"types": ["state_phi", "intrinsic"]
}
]
}
]
}`;
window.traces["I64_LOAD"]["unlem_scheduler"] = ''
window.traces["I64_LOAD"]["unlem_scheduler__raw"] = ''
window.traces["I64_LOAD"]["unlem_scheduler"] += `<pre class='graph'>graph TD
subgraph block_164["Block 164"]
	direction TB
	b164_1[\\"Finish"/]
end
phi_166 --> block_164
subgraph phi_166["Phi 166"]
	p166_32{{"Sϕ Stack "}}
	p166_31{{"Sϕ Codeptr "}}
end
block_167 --> phi_166
block_168 --> phi_166
subgraph block_167["Block 167"]
	direction TB
	b167_24["index pop_u64"]
	b167_28["val mach_readMemory64_u64"]
	b167_30["eff__168 push_u64"]
	b167_23["offset imm_readULEB64"]
	b167_24 --> b167_28
	b167_28 --> b167_30
	b167_30 --> b167_23
end
branch_165 --> block_167
subgraph branch_165["Branch 165"]
	br165_14["cond__167 m_isMemory64"]

end
block_169 --> branch_165
subgraph block_169["Block 169"]
	direction TB
	b169_14["cond__167 m_isMemory64"]
end
phi_171 --> block_169
subgraph phi_171["Phi 171"]
	p171_12{{"Sϕ Codeptr "}}
	p171_12{{"Sϕ Codeptr "}}
	p171_12{{"Sϕ Codeptr "}}
	p171_12{{"Sϕ Codeptr "}}
	p171_11{"memindex ϕ"}
	p171_11{"memindex ϕ"}
	p171_11{"memindex ϕ"}
	p171_11{"memindex ϕ"}
	p171_11{"memindex ϕ"}
	p171_11{"memindex ϕ"}
	p171_12{{"Sϕ Codeptr "}}
	p171_12{{"Sϕ Codeptr "}}
	p171_12{{"Sϕ Codeptr "}}
	p171_12{{"Sϕ Codeptr "}}
end
block_172 --> phi_171
block_173 --> phi_171
subgraph block_172["Block 172"]
	direction TB
	b172_10["memindex__180 imm_readULEB32"]
end
branch_170 --> block_172
subgraph branch_170["Branch 170"]
	br170_9["cond__179 u8.!="]

end
block_174 --> branch_170
subgraph block_174["Block 174"]
	direction TB
	b174_0[/"Start"\\]
	b174_6["arg__184 0x40u8"]
	b174_5["arg__182 0"]
	b174_8["arg__181 u8.&"]
	b174_9["cond__179 u8.!="]
	b174_0 --> b174_6
	b174_6 --> b174_5
	b174_5 --> b174_8
	b174_8 --> b174_9
end
subgraph block_173["Block 173"]
	direction TB
	b173_4["memindex__186 0u"]
	b173_3["flags imm_readU8"]
	b173_4 --> b173_3
end
branch_170 --> block_173
subgraph block_168["Block 168"]
	direction TB
	b168_16["index pop_u32"]
	b168_20["val mach_readMemory32_u64"]
	b168_22["eff__173 push_u64"]
	b168_15["offset imm_readULEB32"]
	b168_16 --> b168_20
	b168_20 --> b168_22
	b168_22 --> b168_15
end
branch_165 --> block_168

</pre>`;
window.traces["I64_LOAD"]["unlem_scheduler__raw"] += `graph TD
subgraph block_164["Block 164"]
	direction TB
	b164_1[\\"Finish"/]
end
phi_166 --> block_164
subgraph phi_166["Phi 166"]
	p166_32{{"Sϕ Stack "}}
	p166_31{{"Sϕ Codeptr "}}
end
block_167 --> phi_166
block_168 --> phi_166
subgraph block_167["Block 167"]
	direction TB
	b167_24["index pop_u64"]
	b167_28["val mach_readMemory64_u64"]
	b167_30["eff__168 push_u64"]
	b167_23["offset imm_readULEB64"]
	b167_24 --> b167_28
	b167_28 --> b167_30
	b167_30 --> b167_23
end
branch_165 --> block_167
subgraph branch_165["Branch 165"]
	br165_14["cond__167 m_isMemory64"]

end
block_169 --> branch_165
subgraph block_169["Block 169"]
	direction TB
	b169_14["cond__167 m_isMemory64"]
end
phi_171 --> block_169
subgraph phi_171["Phi 171"]
	p171_12{{"Sϕ Codeptr "}}
	p171_12{{"Sϕ Codeptr "}}
	p171_12{{"Sϕ Codeptr "}}
	p171_12{{"Sϕ Codeptr "}}
	p171_11{"memindex ϕ"}
	p171_11{"memindex ϕ"}
	p171_11{"memindex ϕ"}
	p171_11{"memindex ϕ"}
	p171_11{"memindex ϕ"}
	p171_11{"memindex ϕ"}
	p171_12{{"Sϕ Codeptr "}}
	p171_12{{"Sϕ Codeptr "}}
	p171_12{{"Sϕ Codeptr "}}
	p171_12{{"Sϕ Codeptr "}}
end
block_172 --> phi_171
block_173 --> phi_171
subgraph block_172["Block 172"]
	direction TB
	b172_10["memindex__180 imm_readULEB32"]
end
branch_170 --> block_172
subgraph branch_170["Branch 170"]
	br170_9["cond__179 u8.!="]

end
block_174 --> branch_170
subgraph block_174["Block 174"]
	direction TB
	b174_0[/"Start"\\]
	b174_6["arg__184 0x40u8"]
	b174_5["arg__182 0"]
	b174_8["arg__181 u8.&"]
	b174_9["cond__179 u8.!="]
	b174_0 --> b174_6
	b174_6 --> b174_5
	b174_5 --> b174_8
	b174_8 --> b174_9
end
subgraph block_173["Block 173"]
	direction TB
	b173_4["memindex__186 0u"]
	b173_3["flags imm_readU8"]
	b173_4 --> b173_3
end
branch_170 --> block_173
subgraph block_168["Block 168"]
	direction TB
	b168_16["index pop_u32"]
	b168_20["val mach_readMemory32_u64"]
	b168_22["eff__173 push_u64"]
	b168_15["offset imm_readULEB32"]
	b168_16 --> b168_20
	b168_20 --> b168_22
	b168_22 --> b168_15
end
branch_165 --> block_168

`;
window.traces["I64_LOAD"]["unlem_pretty"] = ''
window.traces["I64_LOAD"]["unlem_pretty__raw"] = ''
window.traces["I64_LOAD"]["unlem_pretty"] += `<pre class=''>def flags = imm_readU8();
var memindex: u32;
if (u8.!=(u8.&(flags, 0x40u8), 0)) {
	memindex = imm_readULEB32();
} else {
	memindex = 0u;
}
def cond = m_isMemory64(memindex);
if (cond) {
	def offset = imm_readULEB64();
	def index = pop_u64();
	def val = mach_readMemory64_u64(memindex, index, offset);
	push_u64(val);
} else {
	def offset = imm_readULEB32();
	def index = pop_u32();
	def val = mach_readMemory32_u64(memindex, index, offset);
	push_u64(val);
}
</pre>`;
window.traces["I64_LOAD"]["unlem_pretty__raw"] += `def flags = imm_readU8();
var memindex: u32;
if (u8.!=(u8.&(flags, 0x40u8), 0)) {
	memindex = imm_readULEB32();
} else {
	memindex = 0u;
}
def cond = m_isMemory64(memindex);
if (cond) {
	def offset = imm_readULEB64();
	def index = pop_u64();
	def val = mach_readMemory64_u64(memindex, index, offset);
	push_u64(val);
} else {
	def offset = imm_readULEB32();
	def index = pop_u32();
	def val = mach_readMemory32_u64(memindex, index, offset);
	push_u64(val);
}
`;
window.traces["I64_LOAD"]["constUnLEM"] = ''
window.traces["I64_LOAD"]["constUnLEM__raw"] = ''
window.traces["I64_LOAD"]["constUnLEM"] += `<pre class='graph'>---
config:
  layout: elk
---
graph TD
	1[\\"Finish"/]
	31 -. Codeptr .-> 1
	32 -. Stack .-> 1
	0 -. Trap Locals Globals Tables Memory Extra .-> 1
	0[/"Start"\\]
	32{{"Sϕ Stack "}}
	14 --> 32
	30 --> 32
	22 --> 32
	22["eff__173 push_u64"]
	20 --> 22
	16 -. Stack .-> 22
	16["index pop_u32"]
	0 -. Stack .-> 16
	20["val mach_readMemory32_u64"]
	11 --> 20
	16 --> 20
	15 --> 20
	15["offset imm_readULEB32"]
	12 -. Codeptr .-> 15
	12{{"Sϕ Codeptr "}}
	9 --> 12
	10 --> 12
	3 --> 12
	3["flags imm_readU8"]
	0 -. Codeptr .-> 3
	10["memindex__180 imm_readULEB32"]
	3 -. Codeptr .-> 10
	9["cond__179 u8.!="]
	8 --> 9
	5 --> 9
	5["arg__182 0"]
	8["arg__181 u8.&"]
	3 --> 8
	6 --> 8
	6["arg__184 0x40u8"]
	11{"memindex ϕ"}
	9 --> 11
	10 --> 11
	4 --> 11
	4["memindex__186 0u"]
	30["eff__168 push_u64"]
	28 --> 30
	24 -. Stack .-> 30
	24["index pop_u64"]
	0 -. Stack .-> 24
	28["val mach_readMemory64_u64"]
	11 --> 28
	24 --> 28
	23 --> 28
	23["offset imm_readULEB64"]
	12 -. Codeptr .-> 23
	14["cond__167 m_isMemory64"]
	11 --> 14
	31{{"Sϕ Codeptr "}}
	14 --> 31
	23 --> 31
	15 --> 31
</pre>`;
window.traces["I64_LOAD"]["constUnLEM__raw"] += `---
config:
  layout: elk
---
graph TD
	1[\\"Finish"/]
	31 -. Codeptr .-> 1
	32 -. Stack .-> 1
	0 -. Trap Locals Globals Tables Memory Extra .-> 1
	0[/"Start"\\]
	32{{"Sϕ Stack "}}
	14 --> 32
	30 --> 32
	22 --> 32
	22["eff__173 push_u64"]
	20 --> 22
	16 -. Stack .-> 22
	16["index pop_u32"]
	0 -. Stack .-> 16
	20["val mach_readMemory32_u64"]
	11 --> 20
	16 --> 20
	15 --> 20
	15["offset imm_readULEB32"]
	12 -. Codeptr .-> 15
	12{{"Sϕ Codeptr "}}
	9 --> 12
	10 --> 12
	3 --> 12
	3["flags imm_readU8"]
	0 -. Codeptr .-> 3
	10["memindex__180 imm_readULEB32"]
	3 -. Codeptr .-> 10
	9["cond__179 u8.!="]
	8 --> 9
	5 --> 9
	5["arg__182 0"]
	8["arg__181 u8.&"]
	3 --> 8
	6 --> 8
	6["arg__184 0x40u8"]
	11{"memindex ϕ"}
	9 --> 11
	10 --> 11
	4 --> 11
	4["memindex__186 0u"]
	30["eff__168 push_u64"]
	28 --> 30
	24 -. Stack .-> 30
	24["index pop_u64"]
	0 -. Stack .-> 24
	28["val mach_readMemory64_u64"]
	11 --> 28
	24 --> 28
	23 --> 28
	23["offset imm_readULEB64"]
	12 -. Codeptr .-> 23
	14["cond__167 m_isMemory64"]
	11 --> 14
	31{{"Sϕ Codeptr "}}
	14 --> 31
	23 --> 31
	15 --> 31
`;
window.traces["I64_LOAD"]["chooseMerge"] = ''
window.traces["I64_LOAD"]["chooseMerge__raw"] = ''
window.traces["I64_LOAD"]["chooseMerge"] += `<pre class='graph'>---
config:
  layout: elk
---
graph TD
	1[\\"Finish"/]
	31 -. Codeptr .-> 1
	32 -. Stack .-> 1
	0 -. Trap Locals Globals Tables Memory Extra .-> 1
	0[/"Start"\\]
	32{{"Sϕ Stack "}}
	14 --> 32
	30 --> 32
	22 --> 32
	22["eff__173 push_u64"]
	20 --> 22
	16 -. Stack .-> 22
	16["index pop_u32"]
	0 -. Stack .-> 16
	20["val mach_readMemory32_u64"]
	11 --> 20
	16 --> 20
	15 --> 20
	15["offset imm_readULEB32"]
	12 -. Codeptr .-> 15
	12{{"Sϕ Codeptr "}}
	9 --> 12
	10 --> 12
	3 --> 12
	3["flags imm_readU8"]
	0 -. Codeptr .-> 3
	10["memindex__180 imm_readULEB32"]
	3 -. Codeptr .-> 10
	9["cond__179 u8.!="]
	8 --> 9
	5 --> 9
	5["arg__182 0"]
	8["arg__181 u8.&"]
	3 --> 8
	6 --> 8
	6["arg__184 0x40u8"]
	11{"memindex ϕ"}
	9 --> 11
	10 --> 11
	4 --> 11
	4["memindex__186 0u"]
	30["eff__168 push_u64"]
	28 --> 30
	24 -. Stack .-> 30
	24["index pop_u64"]
	0 -. Stack .-> 24
	28["val mach_readMemory64_u64"]
	11 --> 28
	24 --> 28
	23 --> 28
	23["offset imm_readULEB64"]
	12 -. Codeptr .-> 23
	14["cond__167 m_isMemory64"]
	11 --> 14
	31{{"Sϕ Codeptr "}}
	14 --> 31
	23 --> 31
	15 --> 31
</pre>`;
window.traces["I64_LOAD"]["chooseMerge__raw"] += `---
config:
  layout: elk
---
graph TD
	1[\\"Finish"/]
	31 -. Codeptr .-> 1
	32 -. Stack .-> 1
	0 -. Trap Locals Globals Tables Memory Extra .-> 1
	0[/"Start"\\]
	32{{"Sϕ Stack "}}
	14 --> 32
	30 --> 32
	22 --> 32
	22["eff__173 push_u64"]
	20 --> 22
	16 -. Stack .-> 22
	16["index pop_u32"]
	0 -. Stack .-> 16
	20["val mach_readMemory32_u64"]
	11 --> 20
	16 --> 20
	15 --> 20
	15["offset imm_readULEB32"]
	12 -. Codeptr .-> 15
	12{{"Sϕ Codeptr "}}
	9 --> 12
	10 --> 12
	3 --> 12
	3["flags imm_readU8"]
	0 -. Codeptr .-> 3
	10["memindex__180 imm_readULEB32"]
	3 -. Codeptr .-> 10
	9["cond__179 u8.!="]
	8 --> 9
	5 --> 9
	5["arg__182 0"]
	8["arg__181 u8.&"]
	3 --> 8
	6 --> 8
	6["arg__184 0x40u8"]
	11{"memindex ϕ"}
	9 --> 11
	10 --> 11
	4 --> 11
	4["memindex__186 0u"]
	30["eff__168 push_u64"]
	28 --> 30
	24 -. Stack .-> 30
	24["index pop_u64"]
	0 -. Stack .-> 24
	28["val mach_readMemory64_u64"]
	11 --> 28
	24 --> 28
	23 --> 28
	23["offset imm_readULEB64"]
	12 -. Codeptr .-> 23
	14["cond__167 m_isMemory64"]
	11 --> 14
	31{{"Sϕ Codeptr "}}
	14 --> 31
	23 --> 31
	15 --> 31
`;
window.traces["I64_LOAD"]["scheduled"] = ''
window.traces["I64_LOAD"]["scheduled__raw"] = ''
window.traces["I64_LOAD"]["scheduled"] += `<pre class=''>def flags = imm_readU8();
def arg__184 : byte = 0x40u8;
def arg__181 = u8.&(flags, arg__184);
def arg__182 : byte = 0;
def cond__179 = u8.!=(arg__181, arg__182);
var memindex: u32;
if (cond__179) {
	def memindex__180 = imm_readULEB32();
} else {
	def memindex__186 : u32 = 0u;
}
// phis: memindex <- memindex__180; memindex <- memindex__186; 
def cond__167 = m_isMemory64(memindex);
if (cond__167) {
	def offset = imm_readULEB64();
	def index = pop_u64();
	def val = mach_readMemory64_u64(memindex, index, offset);
	def eff__168 = push_u64(val);
} else {
	def offset = imm_readULEB32();
	def index = pop_u32();
	def val = mach_readMemory32_u64(memindex, index, offset);
	def eff__173 = push_u64(val);
}
// phis: 
</pre>`;
window.traces["I64_LOAD"]["scheduled__raw"] += `def flags = imm_readU8();
def arg__184 : byte = 0x40u8;
def arg__181 = u8.&(flags, arg__184);
def arg__182 : byte = 0;
def cond__179 = u8.!=(arg__181, arg__182);
var memindex: u32;
if (cond__179) {
	def memindex__180 = imm_readULEB32();
} else {
	def memindex__186 : u32 = 0u;
}
// phis: memindex <- memindex__180; memindex <- memindex__186; 
def cond__167 = m_isMemory64(memindex);
if (cond__167) {
	def offset = imm_readULEB64();
	def index = pop_u64();
	def val = mach_readMemory64_u64(memindex, index, offset);
	def eff__168 = push_u64(val);
} else {
	def offset = imm_readULEB32();
	def index = pop_u32();
	def val = mach_readMemory32_u64(memindex, index, offset);
	def eff__173 = push_u64(val);
}
// phis: 
`;
window.traces["I64_LOAD"]["pretty"] = ''
window.traces["I64_LOAD"]["pretty__raw"] = ''
window.traces["I64_LOAD"]["pretty"] += `<pre class=''>def flags = imm_readU8();
var memindex: u32;
if (u8.!=(u8.&(flags, 0x40u8), 0)) {
	memindex = imm_readULEB32();
} else {
	memindex = 0u;
}
def cond = m_isMemory64(memindex);
if (cond) {
	def offset = imm_readULEB64();
	def index = pop_u64();
	def val = mach_readMemory64_u64(memindex, index, offset);
	push_u64(val);
} else {
	def offset = imm_readULEB32();
	def index = pop_u32();
	def val = mach_readMemory32_u64(memindex, index, offset);
	push_u64(val);
}
</pre>`;
window.traces["I64_LOAD"]["pretty__raw"] += `def flags = imm_readU8();
var memindex: u32;
if (u8.!=(u8.&(flags, 0x40u8), 0)) {
	memindex = imm_readULEB32();
} else {
	memindex = 0u;
}
def cond = m_isMemory64(memindex);
if (cond) {
	def offset = imm_readULEB64();
	def index = pop_u64();
	def val = mach_readMemory64_u64(memindex, index, offset);
	push_u64(val);
} else {
	def offset = imm_readULEB32();
	def index = pop_u32();
	def val = mach_readMemory32_u64(memindex, index, offset);
	push_u64(val);
}
`;
window.traces["F32_LOAD"] = {}
window.traces["F32_LOAD"]["parsed"] = ''
window.traces["F32_LOAD"]["parsed__raw"] = ''
window.traces["F32_LOAD"]["parsed"] += `<pre class=''>def flags = imm_readU8();
def memindex : u32 = 0u;
def arg__202 : byte = 0;
def arg__204 : byte = 0x40u8;
def arg__203 = (flags);
def arg__201 = u8.&(arg__203, arg__204);
def cond__199 = u8.!=(arg__201, arg__202);
if (cond__199) {
	def memindex__200 = imm_readULEB32();
}
// phis: memindex <- memindex__200; 
def arg__198 = (memindex);
def cond__187 = m_isMemory64(arg__198);
if (cond__187) {
	def offset = imm_readULEB64();
	def index = pop_u64();
	def arg__192 = (offset);
	def arg__191 = (index);
	def arg__190 = (memindex);
	def val = mach_readMemory64_f32(arg__190, arg__191, arg__192);
	def arg__189 = (val);
	def eff__188 = push_f32(arg__189);
} else {
	def offset = imm_readULEB32();
	def index = pop_u32();
	def arg__197 = (offset);
	def arg__196 = (index);
	def arg__195 = (memindex);
	def val = mach_readMemory32_f32(arg__195, arg__196, arg__197);
	def arg__194 = (val);
	def eff__193 = push_f32(arg__194);
}
// phis: 
</pre>`;
window.traces["F32_LOAD"]["parsed__raw"] += `def flags = imm_readU8();
def memindex : u32 = 0u;
def arg__202 : byte = 0;
def arg__204 : byte = 0x40u8;
def arg__203 = (flags);
def arg__201 = u8.&(arg__203, arg__204);
def cond__199 = u8.!=(arg__201, arg__202);
if (cond__199) {
	def memindex__200 = imm_readULEB32();
}
// phis: memindex <- memindex__200; 
def arg__198 = (memindex);
def cond__187 = m_isMemory64(arg__198);
if (cond__187) {
	def offset = imm_readULEB64();
	def index = pop_u64();
	def arg__192 = (offset);
	def arg__191 = (index);
	def arg__190 = (memindex);
	def val = mach_readMemory64_f32(arg__190, arg__191, arg__192);
	def arg__189 = (val);
	def eff__188 = push_f32(arg__189);
} else {
	def offset = imm_readULEB32();
	def index = pop_u32();
	def arg__197 = (offset);
	def arg__196 = (index);
	def arg__195 = (memindex);
	def val = mach_readMemory32_f32(arg__195, arg__196, arg__197);
	def arg__194 = (val);
	def eff__193 = push_f32(arg__194);
}
// phis: 
`;
window.traces["F32_LOAD"]["raw"] = ''
window.traces["F32_LOAD"]["raw__raw"] = ''
window.traces["F32_LOAD"]["raw"] += `<pre class='graph'>---
config:
  layout: elk
---
graph TD
	1[\\"Finish"/]
	31 -. Codeptr .-> 1
	32 -. Stack .-> 1
	0 -. Trap Locals Globals Tables Memory Extra .-> 1
	0[/"Start"\\]
	32{{"Sϕ Stack "}}
	14 --> 32
	30 --> 32
	22 --> 32
	22["eff__193 push_f32"]
	20 --> 22
	16 -. Stack .-> 22
	16["index pop_u32"]
	0 -. Stack .-> 16
	20["val mach_readMemory32_f32"]
	11 --> 20
	16 --> 20
	15 --> 20
	15["offset imm_readULEB32"]
	12 -. Codeptr .-> 15
	12{{"Sϕ Codeptr "}}
	9 --> 12
	10 --> 12
	3 --> 12
	3["flags imm_readU8"]
	0 -. Codeptr .-> 3
	10["memindex__200 imm_readULEB32"]
	3 -. Codeptr .-> 10
	9["cond__199 u8.!="]
	8 --> 9
	5 --> 9
	5["arg__202 0"]
	8["arg__201 u8.&"]
	3 --> 8
	6 --> 8
	6["arg__204 0x40u8"]
	11{"memindex ϕ"}
	9 --> 11
	10 --> 11
	4 --> 11
	4["memindex__205 0u"]
	30["eff__188 push_f32"]
	28 --> 30
	24 -. Stack .-> 30
	24["index pop_u64"]
	0 -. Stack .-> 24
	28["val mach_readMemory64_f32"]
	11 --> 28
	24 --> 28
	23 --> 28
	23["offset imm_readULEB64"]
	12 -. Codeptr .-> 23
	14["cond__187 m_isMemory64"]
	11 --> 14
	31{{"Sϕ Codeptr "}}
	14 --> 31
	23 --> 31
	15 --> 31
</pre>`;
window.traces["F32_LOAD"]["raw__raw"] += `---
config:
  layout: elk
---
graph TD
	1[\\"Finish"/]
	31 -. Codeptr .-> 1
	32 -. Stack .-> 1
	0 -. Trap Locals Globals Tables Memory Extra .-> 1
	0[/"Start"\\]
	32{{"Sϕ Stack "}}
	14 --> 32
	30 --> 32
	22 --> 32
	22["eff__193 push_f32"]
	20 --> 22
	16 -. Stack .-> 22
	16["index pop_u32"]
	0 -. Stack .-> 16
	20["val mach_readMemory32_f32"]
	11 --> 20
	16 --> 20
	15 --> 20
	15["offset imm_readULEB32"]
	12 -. Codeptr .-> 15
	12{{"Sϕ Codeptr "}}
	9 --> 12
	10 --> 12
	3 --> 12
	3["flags imm_readU8"]
	0 -. Codeptr .-> 3
	10["memindex__200 imm_readULEB32"]
	3 -. Codeptr .-> 10
	9["cond__199 u8.!="]
	8 --> 9
	5 --> 9
	5["arg__202 0"]
	8["arg__201 u8.&"]
	3 --> 8
	6 --> 8
	6["arg__204 0x40u8"]
	11{"memindex ϕ"}
	9 --> 11
	10 --> 11
	4 --> 11
	4["memindex__205 0u"]
	30["eff__188 push_f32"]
	28 --> 30
	24 -. Stack .-> 30
	24["index pop_u64"]
	0 -. Stack .-> 24
	28["val mach_readMemory64_f32"]
	11 --> 28
	24 --> 28
	23 --> 28
	23["offset imm_readULEB64"]
	12 -. Codeptr .-> 23
	14["cond__187 m_isMemory64"]
	11 --> 14
	31{{"Sϕ Codeptr "}}
	14 --> 31
	23 --> 31
	15 --> 31
`;
window.traces["F32_LOAD"]["spytial"] = ''
window.traces["F32_LOAD"]["spytial__raw"] = ''
window.traces["F32_LOAD"]["spytial"] += `<pre class=''>{
"atoms": [
{
"id": "node_1",
"type": "finish",
"label": "Finish"
},
{
"id": "node_31",
"type": "state_phi",
"label": "StatePhi [m_isMemory64 [cond__187]]"
},
{
"id": "node_32",
"type": "state_phi",
"label": "StatePhi [m_isMemory64 [cond__187]]"
},
{
"id": "node_0",
"type": "start",
"label": "Start"
},
{
"id": "node_14",
"type": "intrinsic",
"label": "m_isMemory64 [cond__187]"
},
{
"id": "node_23",
"type": "intrinsic",
"label": "imm_readULEB64 [offset]"
},
{
"id": "node_15",
"type": "intrinsic",
"label": "imm_readULEB32 [offset]"
},
{
"id": "node_30",
"type": "intrinsic",
"label": "push_f32 [eff__188]"
},
{
"id": "node_22",
"type": "intrinsic",
"label": "push_f32 [eff__193]"
},
{
"id": "node_11",
"type": "phi",
"label": "Phi"
},
{
"id": "node_12",
"type": "state_phi",
"label": "StatePhi [u8.!= [cond__199]]"
},
{
"id": "node_28",
"type": "intrinsic",
"label": "mach_readMemory64_f32 [val]"
},
{
"id": "node_24",
"type": "intrinsic",
"label": "pop_u64 [index]"
},
{
"id": "node_20",
"type": "intrinsic",
"label": "mach_readMemory32_f32 [val]"
},
{
"id": "node_16",
"type": "intrinsic",
"label": "pop_u32 [index]"
},
{
"id": "node_9",
"type": "intrinsic",
"label": "u8.!= [cond__199]"
},
{
"id": "node_10",
"type": "intrinsic",
"label": "imm_readULEB32 [memindex__200]"
},
{
"id": "node_4",
"type": "lit",
"label": "0u"
},
{
"id": "node_3",
"type": "intrinsic",
"label": "imm_readU8 [flags]"
},
{
"id": "node_8",
"type": "intrinsic",
"label": "u8.& [arg__201]"
},
{
"id": "node_5",
"type": "lit",
"label": "0"
},
{
"id": "node_6",
"type": "lit",
"label": "0x40u8"
}
],
"relations": [
{
"id": "uses",
"name": "Uses",
"types": ["sea_node", "sea_node"],
"tuples": [
{
"atoms": ["node_14", "node_11"],
"types": ["intrinsic", "phi"]
},
{
"atoms": ["node_30", "node_28"],
"types": ["intrinsic", "intrinsic"]
},
{
"atoms": ["node_22", "node_20"],
"types": ["intrinsic", "intrinsic"]
},
{
"atoms": ["node_28", "node_11"],
"types": ["intrinsic", "phi"]
},
{
"atoms": ["node_28", "node_24"],
"types": ["intrinsic", "intrinsic"]
},
{
"atoms": ["node_28", "node_23"],
"types": ["intrinsic", "intrinsic"]
},
{
"atoms": ["node_20", "node_11"],
"types": ["intrinsic", "phi"]
},
{
"atoms": ["node_20", "node_16"],
"types": ["intrinsic", "intrinsic"]
},
{
"atoms": ["node_20", "node_15"],
"types": ["intrinsic", "intrinsic"]
},
{
"atoms": ["node_9", "node_8"],
"types": ["intrinsic", "intrinsic"]
},
{
"atoms": ["node_9", "node_5"],
"types": ["intrinsic", "lit"]
},
{
"atoms": ["node_8", "node_3"],
"types": ["intrinsic", "intrinsic"]
},
{
"atoms": ["node_8", "node_6"],
"types": ["intrinsic", "lit"]
}
]
},
{
"id": "state_uses",
"name": "StateUses",
"types": ["sea_node", "sea_node"],
"tuples": [
{
"atoms": ["node_1", "node_31"],
"types": ["finish", "state_phi"]
},
{
"atoms": ["node_1", "node_32"],
"types": ["finish", "state_phi"]
},
{
"atoms": ["node_1", "node_0"],
"types": ["finish", "start"]
},
{
"atoms": ["node_23", "node_12"],
"types": ["intrinsic", "state_phi"]
},
{
"atoms": ["node_15", "node_12"],
"types": ["intrinsic", "state_phi"]
},
{
"atoms": ["node_30", "node_24"],
"types": ["intrinsic", "intrinsic"]
},
{
"atoms": ["node_22", "node_16"],
"types": ["intrinsic", "intrinsic"]
},
{
"atoms": ["node_24", "node_0"],
"types": ["intrinsic", "start"]
},
{
"atoms": ["node_16", "node_0"],
"types": ["intrinsic", "start"]
},
{
"atoms": ["node_10", "node_3"],
"types": ["intrinsic", "intrinsic"]
},
{
"atoms": ["node_3", "node_0"],
"types": ["intrinsic", "start"]
}
]
},
{
"id": "phi_cond",
"name": "PhiCond",
"types": ["sea_node", "sea_node"],
"tuples": [
{
"atoms": ["node_31", "node_14"],
"types": ["state_phi", "intrinsic"]
},
{
"atoms": ["node_32", "node_14"],
"types": ["state_phi", "intrinsic"]
},
{
"atoms": ["node_11", "node_9"],
"types": ["phi", "intrinsic"]
},
{
"atoms": ["node_12", "node_9"],
"types": ["state_phi", "intrinsic"]
}
]
},
{
"id": "phi_true",
"name": "PhiTrue",
"types": ["sea_node", "sea_node"],
"tuples": [
{
"atoms": ["node_31", "node_23"],
"types": ["state_phi", "intrinsic"]
},
{
"atoms": ["node_32", "node_30"],
"types": ["state_phi", "intrinsic"]
},
{
"atoms": ["node_11", "node_10"],
"types": ["phi", "intrinsic"]
},
{
"atoms": ["node_12", "node_10"],
"types": ["state_phi", "intrinsic"]
}
]
},
{
"id": "phi_false",
"name": "PhiFalse",
"types": ["sea_node", "sea_node"],
"tuples": [
{
"atoms": ["node_31", "node_15"],
"types": ["state_phi", "intrinsic"]
},
{
"atoms": ["node_32", "node_22"],
"types": ["state_phi", "intrinsic"]
},
{
"atoms": ["node_11", "node_4"],
"types": ["phi", "lit"]
},
{
"atoms": ["node_12", "node_3"],
"types": ["state_phi", "intrinsic"]
}
]
}
]
}</pre>`;
window.traces["F32_LOAD"]["spytial__raw"] += `{
"atoms": [
{
"id": "node_1",
"type": "finish",
"label": "Finish"
},
{
"id": "node_31",
"type": "state_phi",
"label": "StatePhi [m_isMemory64 [cond__187]]"
},
{
"id": "node_32",
"type": "state_phi",
"label": "StatePhi [m_isMemory64 [cond__187]]"
},
{
"id": "node_0",
"type": "start",
"label": "Start"
},
{
"id": "node_14",
"type": "intrinsic",
"label": "m_isMemory64 [cond__187]"
},
{
"id": "node_23",
"type": "intrinsic",
"label": "imm_readULEB64 [offset]"
},
{
"id": "node_15",
"type": "intrinsic",
"label": "imm_readULEB32 [offset]"
},
{
"id": "node_30",
"type": "intrinsic",
"label": "push_f32 [eff__188]"
},
{
"id": "node_22",
"type": "intrinsic",
"label": "push_f32 [eff__193]"
},
{
"id": "node_11",
"type": "phi",
"label": "Phi"
},
{
"id": "node_12",
"type": "state_phi",
"label": "StatePhi [u8.!= [cond__199]]"
},
{
"id": "node_28",
"type": "intrinsic",
"label": "mach_readMemory64_f32 [val]"
},
{
"id": "node_24",
"type": "intrinsic",
"label": "pop_u64 [index]"
},
{
"id": "node_20",
"type": "intrinsic",
"label": "mach_readMemory32_f32 [val]"
},
{
"id": "node_16",
"type": "intrinsic",
"label": "pop_u32 [index]"
},
{
"id": "node_9",
"type": "intrinsic",
"label": "u8.!= [cond__199]"
},
{
"id": "node_10",
"type": "intrinsic",
"label": "imm_readULEB32 [memindex__200]"
},
{
"id": "node_4",
"type": "lit",
"label": "0u"
},
{
"id": "node_3",
"type": "intrinsic",
"label": "imm_readU8 [flags]"
},
{
"id": "node_8",
"type": "intrinsic",
"label": "u8.& [arg__201]"
},
{
"id": "node_5",
"type": "lit",
"label": "0"
},
{
"id": "node_6",
"type": "lit",
"label": "0x40u8"
}
],
"relations": [
{
"id": "uses",
"name": "Uses",
"types": ["sea_node", "sea_node"],
"tuples": [
{
"atoms": ["node_14", "node_11"],
"types": ["intrinsic", "phi"]
},
{
"atoms": ["node_30", "node_28"],
"types": ["intrinsic", "intrinsic"]
},
{
"atoms": ["node_22", "node_20"],
"types": ["intrinsic", "intrinsic"]
},
{
"atoms": ["node_28", "node_11"],
"types": ["intrinsic", "phi"]
},
{
"atoms": ["node_28", "node_24"],
"types": ["intrinsic", "intrinsic"]
},
{
"atoms": ["node_28", "node_23"],
"types": ["intrinsic", "intrinsic"]
},
{
"atoms": ["node_20", "node_11"],
"types": ["intrinsic", "phi"]
},
{
"atoms": ["node_20", "node_16"],
"types": ["intrinsic", "intrinsic"]
},
{
"atoms": ["node_20", "node_15"],
"types": ["intrinsic", "intrinsic"]
},
{
"atoms": ["node_9", "node_8"],
"types": ["intrinsic", "intrinsic"]
},
{
"atoms": ["node_9", "node_5"],
"types": ["intrinsic", "lit"]
},
{
"atoms": ["node_8", "node_3"],
"types": ["intrinsic", "intrinsic"]
},
{
"atoms": ["node_8", "node_6"],
"types": ["intrinsic", "lit"]
}
]
},
{
"id": "state_uses",
"name": "StateUses",
"types": ["sea_node", "sea_node"],
"tuples": [
{
"atoms": ["node_1", "node_31"],
"types": ["finish", "state_phi"]
},
{
"atoms": ["node_1", "node_32"],
"types": ["finish", "state_phi"]
},
{
"atoms": ["node_1", "node_0"],
"types": ["finish", "start"]
},
{
"atoms": ["node_23", "node_12"],
"types": ["intrinsic", "state_phi"]
},
{
"atoms": ["node_15", "node_12"],
"types": ["intrinsic", "state_phi"]
},
{
"atoms": ["node_30", "node_24"],
"types": ["intrinsic", "intrinsic"]
},
{
"atoms": ["node_22", "node_16"],
"types": ["intrinsic", "intrinsic"]
},
{
"atoms": ["node_24", "node_0"],
"types": ["intrinsic", "start"]
},
{
"atoms": ["node_16", "node_0"],
"types": ["intrinsic", "start"]
},
{
"atoms": ["node_10", "node_3"],
"types": ["intrinsic", "intrinsic"]
},
{
"atoms": ["node_3", "node_0"],
"types": ["intrinsic", "start"]
}
]
},
{
"id": "phi_cond",
"name": "PhiCond",
"types": ["sea_node", "sea_node"],
"tuples": [
{
"atoms": ["node_31", "node_14"],
"types": ["state_phi", "intrinsic"]
},
{
"atoms": ["node_32", "node_14"],
"types": ["state_phi", "intrinsic"]
},
{
"atoms": ["node_11", "node_9"],
"types": ["phi", "intrinsic"]
},
{
"atoms": ["node_12", "node_9"],
"types": ["state_phi", "intrinsic"]
}
]
},
{
"id": "phi_true",
"name": "PhiTrue",
"types": ["sea_node", "sea_node"],
"tuples": [
{
"atoms": ["node_31", "node_23"],
"types": ["state_phi", "intrinsic"]
},
{
"atoms": ["node_32", "node_30"],
"types": ["state_phi", "intrinsic"]
},
{
"atoms": ["node_11", "node_10"],
"types": ["phi", "intrinsic"]
},
{
"atoms": ["node_12", "node_10"],
"types": ["state_phi", "intrinsic"]
}
]
},
{
"id": "phi_false",
"name": "PhiFalse",
"types": ["sea_node", "sea_node"],
"tuples": [
{
"atoms": ["node_31", "node_15"],
"types": ["state_phi", "intrinsic"]
},
{
"atoms": ["node_32", "node_22"],
"types": ["state_phi", "intrinsic"]
},
{
"atoms": ["node_11", "node_4"],
"types": ["phi", "lit"]
},
{
"atoms": ["node_12", "node_3"],
"types": ["state_phi", "intrinsic"]
}
]
}
]
}`;
window.traces["F32_LOAD"]["overloadOps"] = ''
window.traces["F32_LOAD"]["overloadOps__raw"] = ''
window.traces["F32_LOAD"]["overloadOps"] += `<pre class='graph'>---
config:
  layout: elk
---
graph TD
	1[\\"Finish"/]
	31 -. Codeptr .-> 1
	32 -. Stack .-> 1
	0 -. Trap Locals Globals Tables Memory Extra .-> 1
	0[/"Start"\\]
	32{{"Sϕ Stack "}}
	14 --> 32
	30 --> 32
	22 --> 32
	22["eff__193 push_f32"]
	20 --> 22
	16 -. Stack .-> 22
	16["index pop_u32"]
	0 -. Stack .-> 16
	20["val mach_readMemory32_f32"]
	11 --> 20
	16 --> 20
	15 --> 20
	15["offset imm_readULEB32"]
	12 -. Codeptr .-> 15
	12{{"Sϕ Codeptr "}}
	9 --> 12
	10 --> 12
	3 --> 12
	3["flags imm_readU8"]
	0 -. Codeptr .-> 3
	10["memindex__200 imm_readULEB32"]
	3 -. Codeptr .-> 10
	9["cond__199 u8.!="]
	8 --> 9
	5 --> 9
	5["arg__202 0"]
	8["arg__201 u8.&"]
	3 --> 8
	6 --> 8
	6["arg__204 0x40u8"]
	11{"memindex ϕ"}
	9 --> 11
	10 --> 11
	4 --> 11
	4["memindex__206 0u"]
	30["eff__188 push_f32"]
	28 --> 30
	24 -. Stack .-> 30
	24["index pop_u64"]
	0 -. Stack .-> 24
	28["val mach_readMemory64_f32"]
	11 --> 28
	24 --> 28
	23 --> 28
	23["offset imm_readULEB64"]
	12 -. Codeptr .-> 23
	14["cond__187 m_isMemory64"]
	11 --> 14
	31{{"Sϕ Codeptr "}}
	14 --> 31
	23 --> 31
	15 --> 31
</pre>`;
window.traces["F32_LOAD"]["overloadOps__raw"] += `---
config:
  layout: elk
---
graph TD
	1[\\"Finish"/]
	31 -. Codeptr .-> 1
	32 -. Stack .-> 1
	0 -. Trap Locals Globals Tables Memory Extra .-> 1
	0[/"Start"\\]
	32{{"Sϕ Stack "}}
	14 --> 32
	30 --> 32
	22 --> 32
	22["eff__193 push_f32"]
	20 --> 22
	16 -. Stack .-> 22
	16["index pop_u32"]
	0 -. Stack .-> 16
	20["val mach_readMemory32_f32"]
	11 --> 20
	16 --> 20
	15 --> 20
	15["offset imm_readULEB32"]
	12 -. Codeptr .-> 15
	12{{"Sϕ Codeptr "}}
	9 --> 12
	10 --> 12
	3 --> 12
	3["flags imm_readU8"]
	0 -. Codeptr .-> 3
	10["memindex__200 imm_readULEB32"]
	3 -. Codeptr .-> 10
	9["cond__199 u8.!="]
	8 --> 9
	5 --> 9
	5["arg__202 0"]
	8["arg__201 u8.&"]
	3 --> 8
	6 --> 8
	6["arg__204 0x40u8"]
	11{"memindex ϕ"}
	9 --> 11
	10 --> 11
	4 --> 11
	4["memindex__206 0u"]
	30["eff__188 push_f32"]
	28 --> 30
	24 -. Stack .-> 30
	24["index pop_u64"]
	0 -. Stack .-> 24
	28["val mach_readMemory64_f32"]
	11 --> 28
	24 --> 28
	23 --> 28
	23["offset imm_readULEB64"]
	12 -. Codeptr .-> 23
	14["cond__187 m_isMemory64"]
	11 --> 14
	31{{"Sϕ Codeptr "}}
	14 --> 31
	23 --> 31
	15 --> 31
`;
window.traces["F32_LOAD"]["addAbstractions"] = ''
window.traces["F32_LOAD"]["addAbstractions__raw"] = ''
window.traces["F32_LOAD"]["addAbstractions"] += `<pre class='graph'>---
config:
  layout: elk
---
graph TD
	1[\\"Finish"/]
	31 -. Codeptr .-> 1
	32 -. Stack .-> 1
	0 -. Trap Locals Globals Tables Memory Extra .-> 1
	0[/"Start"\\]
	32{{"Sϕ Stack "}}
	14 --> 32
	30 --> 32
	22 --> 32
	22["eff__193 push_f32"]
	20 --> 22
	16 -. Stack .-> 22
	16["index pop_u32"]
	0 -. Stack .-> 16
	20["val mach_readMemory32_f32"]
	11 --> 20
	16 --> 20
	15 --> 20
	15["offset imm_readULEB32"]
	12 -. Codeptr .-> 15
	12{{"Sϕ Codeptr "}}
	9 --> 12
	10 --> 12
	3 --> 12
	3["flags imm_readU8"]
	0 -. Codeptr .-> 3
	10["memindex__200 imm_readULEB32"]
	3 -. Codeptr .-> 10
	9["cond__199 u8.!="]
	8 --> 9
	5 --> 9
	5["arg__202 0"]
	8["arg__201 u8.&"]
	3 --> 8
	6 --> 8
	6["arg__204 0x40u8"]
	11{"memindex ϕ"}
	9 --> 11
	10 --> 11
	4 --> 11
	4["memindex__206 0u"]
	30["eff__188 push_f32"]
	28 --> 30
	24 -. Stack .-> 30
	24["index pop_u64"]
	0 -. Stack .-> 24
	28["val mach_readMemory64_f32"]
	11 --> 28
	24 --> 28
	23 --> 28
	23["offset imm_readULEB64"]
	12 -. Codeptr .-> 23
	14["cond__187 m_isMemory64"]
	11 --> 14
	31{{"Sϕ Codeptr "}}
	14 --> 31
	23 --> 31
	15 --> 31
</pre>`;
window.traces["F32_LOAD"]["addAbstractions__raw"] += `---
config:
  layout: elk
---
graph TD
	1[\\"Finish"/]
	31 -. Codeptr .-> 1
	32 -. Stack .-> 1
	0 -. Trap Locals Globals Tables Memory Extra .-> 1
	0[/"Start"\\]
	32{{"Sϕ Stack "}}
	14 --> 32
	30 --> 32
	22 --> 32
	22["eff__193 push_f32"]
	20 --> 22
	16 -. Stack .-> 22
	16["index pop_u32"]
	0 -. Stack .-> 16
	20["val mach_readMemory32_f32"]
	11 --> 20
	16 --> 20
	15 --> 20
	15["offset imm_readULEB32"]
	12 -. Codeptr .-> 15
	12{{"Sϕ Codeptr "}}
	9 --> 12
	10 --> 12
	3 --> 12
	3["flags imm_readU8"]
	0 -. Codeptr .-> 3
	10["memindex__200 imm_readULEB32"]
	3 -. Codeptr .-> 10
	9["cond__199 u8.!="]
	8 --> 9
	5 --> 9
	5["arg__202 0"]
	8["arg__201 u8.&"]
	3 --> 8
	6 --> 8
	6["arg__204 0x40u8"]
	11{"memindex ϕ"}
	9 --> 11
	10 --> 11
	4 --> 11
	4["memindex__206 0u"]
	30["eff__188 push_f32"]
	28 --> 30
	24 -. Stack .-> 30
	24["index pop_u64"]
	0 -. Stack .-> 24
	28["val mach_readMemory64_f32"]
	11 --> 28
	24 --> 28
	23 --> 28
	23["offset imm_readULEB64"]
	12 -. Codeptr .-> 23
	14["cond__187 m_isMemory64"]
	11 --> 14
	31{{"Sϕ Codeptr "}}
	14 --> 31
	23 --> 31
	15 --> 31
`;
window.traces["F32_LOAD"]["schedulerMermaid"] = ''
window.traces["F32_LOAD"]["schedulerMermaid__raw"] = ''
window.traces["F32_LOAD"]["schedulerMermaid"] += `<pre class='graph'>graph TD
subgraph block_175["Block 175"]
	direction TB
	b175_1[\\"Finish"/]
end
phi_177 --> block_175
subgraph phi_177["Phi 177"]
	p177_32{{"Sϕ Stack "}}
	p177_31{{"Sϕ Codeptr "}}
end
block_178 --> phi_177
block_179 --> phi_177
subgraph block_178["Block 178"]
	direction TB
	b178_24["index pop_u64"]
	b178_28["val mach_readMemory64_f32"]
	b178_30["eff__188 push_f32"]
	b178_23["offset imm_readULEB64"]
	b178_24 --> b178_28
	b178_28 --> b178_30
	b178_30 --> b178_23
end
branch_176 --> block_178
subgraph branch_176["Branch 176"]
	br176_14["cond__187 m_isMemory64"]

end
block_180 --> branch_176
subgraph block_180["Block 180"]
	direction TB
	b180_14["cond__187 m_isMemory64"]
end
phi_182 --> block_180
subgraph phi_182["Phi 182"]
	p182_12{{"Sϕ Codeptr "}}
	p182_12{{"Sϕ Codeptr "}}
	p182_12{{"Sϕ Codeptr "}}
	p182_12{{"Sϕ Codeptr "}}
	p182_11{"memindex ϕ"}
	p182_11{"memindex ϕ"}
	p182_11{"memindex ϕ"}
	p182_11{"memindex ϕ"}
	p182_11{"memindex ϕ"}
	p182_11{"memindex ϕ"}
	p182_12{{"Sϕ Codeptr "}}
	p182_12{{"Sϕ Codeptr "}}
	p182_12{{"Sϕ Codeptr "}}
	p182_12{{"Sϕ Codeptr "}}
end
block_183 --> phi_182
block_184 --> phi_182
subgraph block_183["Block 183"]
	direction TB
	b183_10["memindex__200 imm_readULEB32"]
end
branch_181 --> block_183
subgraph branch_181["Branch 181"]
	br181_9["cond__199 u8.!="]

end
block_185 --> branch_181
subgraph block_185["Block 185"]
	direction TB
	b185_0[/"Start"\\]
	b185_6["arg__204 0x40u8"]
	b185_5["arg__202 0"]
	b185_8["arg__201 u8.&"]
	b185_9["cond__199 u8.!="]
	b185_0 --> b185_6
	b185_6 --> b185_5
	b185_5 --> b185_8
	b185_8 --> b185_9
end
subgraph block_184["Block 184"]
	direction TB
	b184_4["memindex__206 0u"]
	b184_3["flags imm_readU8"]
	b184_4 --> b184_3
end
branch_181 --> block_184
subgraph block_179["Block 179"]
	direction TB
	b179_16["index pop_u32"]
	b179_20["val mach_readMemory32_f32"]
	b179_22["eff__193 push_f32"]
	b179_15["offset imm_readULEB32"]
	b179_16 --> b179_20
	b179_20 --> b179_22
	b179_22 --> b179_15
end
branch_176 --> block_179

</pre>`;
window.traces["F32_LOAD"]["schedulerMermaid__raw"] += `graph TD
subgraph block_175["Block 175"]
	direction TB
	b175_1[\\"Finish"/]
end
phi_177 --> block_175
subgraph phi_177["Phi 177"]
	p177_32{{"Sϕ Stack "}}
	p177_31{{"Sϕ Codeptr "}}
end
block_178 --> phi_177
block_179 --> phi_177
subgraph block_178["Block 178"]
	direction TB
	b178_24["index pop_u64"]
	b178_28["val mach_readMemory64_f32"]
	b178_30["eff__188 push_f32"]
	b178_23["offset imm_readULEB64"]
	b178_24 --> b178_28
	b178_28 --> b178_30
	b178_30 --> b178_23
end
branch_176 --> block_178
subgraph branch_176["Branch 176"]
	br176_14["cond__187 m_isMemory64"]

end
block_180 --> branch_176
subgraph block_180["Block 180"]
	direction TB
	b180_14["cond__187 m_isMemory64"]
end
phi_182 --> block_180
subgraph phi_182["Phi 182"]
	p182_12{{"Sϕ Codeptr "}}
	p182_12{{"Sϕ Codeptr "}}
	p182_12{{"Sϕ Codeptr "}}
	p182_12{{"Sϕ Codeptr "}}
	p182_11{"memindex ϕ"}
	p182_11{"memindex ϕ"}
	p182_11{"memindex ϕ"}
	p182_11{"memindex ϕ"}
	p182_11{"memindex ϕ"}
	p182_11{"memindex ϕ"}
	p182_12{{"Sϕ Codeptr "}}
	p182_12{{"Sϕ Codeptr "}}
	p182_12{{"Sϕ Codeptr "}}
	p182_12{{"Sϕ Codeptr "}}
end
block_183 --> phi_182
block_184 --> phi_182
subgraph block_183["Block 183"]
	direction TB
	b183_10["memindex__200 imm_readULEB32"]
end
branch_181 --> block_183
subgraph branch_181["Branch 181"]
	br181_9["cond__199 u8.!="]

end
block_185 --> branch_181
subgraph block_185["Block 185"]
	direction TB
	b185_0[/"Start"\\]
	b185_6["arg__204 0x40u8"]
	b185_5["arg__202 0"]
	b185_8["arg__201 u8.&"]
	b185_9["cond__199 u8.!="]
	b185_0 --> b185_6
	b185_6 --> b185_5
	b185_5 --> b185_8
	b185_8 --> b185_9
end
subgraph block_184["Block 184"]
	direction TB
	b184_4["memindex__206 0u"]
	b184_3["flags imm_readU8"]
	b184_4 --> b184_3
end
branch_181 --> block_184
subgraph block_179["Block 179"]
	direction TB
	b179_16["index pop_u32"]
	b179_20["val mach_readMemory32_f32"]
	b179_22["eff__193 push_f32"]
	b179_15["offset imm_readULEB32"]
	b179_16 --> b179_20
	b179_20 --> b179_22
	b179_22 --> b179_15
end
branch_176 --> block_179

`;
window.traces["F32_LOAD"]["unLEM"] = ''
window.traces["F32_LOAD"]["unLEM__raw"] = ''
window.traces["F32_LOAD"]["unLEM"] += `<pre class='graph'>---
config:
  layout: elk
---
graph TD
	1[\\"Finish"/]
	31 -. Codeptr .-> 1
	32 -. Stack .-> 1
	0 -. Trap Locals Globals Tables Memory Extra .-> 1
	0[/"Start"\\]
	32{{"Sϕ Stack "}}
	14 --> 32
	30 --> 32
	22 --> 32
	22["eff__193 push_f32"]
	20 --> 22
	16 -. Stack .-> 22
	16["index pop_u32"]
	0 -. Stack .-> 16
	20["val mach_readMemory32_f32"]
	11 --> 20
	16 --> 20
	15 --> 20
	15["offset imm_readULEB32"]
	12 -. Codeptr .-> 15
	12{{"Sϕ Codeptr "}}
	9 --> 12
	10 --> 12
	3 --> 12
	3["flags imm_readU8"]
	0 -. Codeptr .-> 3
	10["memindex__200 imm_readULEB32"]
	3 -. Codeptr .-> 10
	9["cond__199 u8.!="]
	8 --> 9
	5 --> 9
	5["arg__202 0"]
	8["arg__201 u8.&"]
	3 --> 8
	6 --> 8
	6["arg__204 0x40u8"]
	11{"memindex ϕ"}
	9 --> 11
	10 --> 11
	4 --> 11
	4["memindex__206 0u"]
	30["eff__188 push_f32"]
	28 --> 30
	24 -. Stack .-> 30
	24["index pop_u64"]
	0 -. Stack .-> 24
	28["val mach_readMemory64_f32"]
	11 --> 28
	24 --> 28
	23 --> 28
	23["offset imm_readULEB64"]
	12 -. Codeptr .-> 23
	14["cond__187 m_isMemory64"]
	11 --> 14
	31{{"Sϕ Codeptr "}}
	14 --> 31
	23 --> 31
	15 --> 31
</pre>`;
window.traces["F32_LOAD"]["unLEM__raw"] += `---
config:
  layout: elk
---
graph TD
	1[\\"Finish"/]
	31 -. Codeptr .-> 1
	32 -. Stack .-> 1
	0 -. Trap Locals Globals Tables Memory Extra .-> 1
	0[/"Start"\\]
	32{{"Sϕ Stack "}}
	14 --> 32
	30 --> 32
	22 --> 32
	22["eff__193 push_f32"]
	20 --> 22
	16 -. Stack .-> 22
	16["index pop_u32"]
	0 -. Stack .-> 16
	20["val mach_readMemory32_f32"]
	11 --> 20
	16 --> 20
	15 --> 20
	15["offset imm_readULEB32"]
	12 -. Codeptr .-> 15
	12{{"Sϕ Codeptr "}}
	9 --> 12
	10 --> 12
	3 --> 12
	3["flags imm_readU8"]
	0 -. Codeptr .-> 3
	10["memindex__200 imm_readULEB32"]
	3 -. Codeptr .-> 10
	9["cond__199 u8.!="]
	8 --> 9
	5 --> 9
	5["arg__202 0"]
	8["arg__201 u8.&"]
	3 --> 8
	6 --> 8
	6["arg__204 0x40u8"]
	11{"memindex ϕ"}
	9 --> 11
	10 --> 11
	4 --> 11
	4["memindex__206 0u"]
	30["eff__188 push_f32"]
	28 --> 30
	24 -. Stack .-> 30
	24["index pop_u64"]
	0 -. Stack .-> 24
	28["val mach_readMemory64_f32"]
	11 --> 28
	24 --> 28
	23 --> 28
	23["offset imm_readULEB64"]
	12 -. Codeptr .-> 23
	14["cond__187 m_isMemory64"]
	11 --> 14
	31{{"Sϕ Codeptr "}}
	14 --> 31
	23 --> 31
	15 --> 31
`;
window.traces["F32_LOAD"]["unlem_schedule"] = ''
window.traces["F32_LOAD"]["unlem_schedule__raw"] = ''
window.traces["F32_LOAD"]["unlem_schedule"] += `<pre class=''>def flags = imm_readU8();
def arg__204 : byte = 0x40u8;
def arg__201 = u8.&(flags, arg__204);
def arg__202 : byte = 0;
def cond__199 = u8.!=(arg__201, arg__202);
var memindex: u32;
if (cond__199) {
	def memindex__200 = imm_readULEB32();
} else {
	def memindex__206 : u32 = 0u;
}
// phis: memindex <- memindex__200; memindex <- memindex__206; 
def cond__187 = m_isMemory64(memindex);
if (cond__187) {
	def offset = imm_readULEB64();
	def index = pop_u64();
	def val = mach_readMemory64_f32(memindex, index, offset);
	def eff__188 = push_f32(val);
} else {
	def offset = imm_readULEB32();
	def index = pop_u32();
	def val = mach_readMemory32_f32(memindex, index, offset);
	def eff__193 = push_f32(val);
}
// phis: 
</pre>`;
window.traces["F32_LOAD"]["unlem_schedule__raw"] += `def flags = imm_readU8();
def arg__204 : byte = 0x40u8;
def arg__201 = u8.&(flags, arg__204);
def arg__202 : byte = 0;
def cond__199 = u8.!=(arg__201, arg__202);
var memindex: u32;
if (cond__199) {
	def memindex__200 = imm_readULEB32();
} else {
	def memindex__206 : u32 = 0u;
}
// phis: memindex <- memindex__200; memindex <- memindex__206; 
def cond__187 = m_isMemory64(memindex);
if (cond__187) {
	def offset = imm_readULEB64();
	def index = pop_u64();
	def val = mach_readMemory64_f32(memindex, index, offset);
	def eff__188 = push_f32(val);
} else {
	def offset = imm_readULEB32();
	def index = pop_u32();
	def val = mach_readMemory32_f32(memindex, index, offset);
	def eff__193 = push_f32(val);
}
// phis: 
`;
window.traces["F32_LOAD"]["spytial_ul"] = ''
window.traces["F32_LOAD"]["spytial_ul__raw"] = ''
window.traces["F32_LOAD"]["spytial_ul"] += `<pre class=''>{
"atoms": [
{
"id": "node_1",
"type": "finish",
"label": "Finish"
},
{
"id": "node_31",
"type": "state_phi",
"label": "StatePhi [m_isMemory64 [cond__187]]"
},
{
"id": "node_32",
"type": "state_phi",
"label": "StatePhi [m_isMemory64 [cond__187]]"
},
{
"id": "node_0",
"type": "start",
"label": "Start"
},
{
"id": "node_14",
"type": "intrinsic",
"label": "m_isMemory64 [cond__187]"
},
{
"id": "node_23",
"type": "intrinsic",
"label": "imm_readULEB64 [offset]"
},
{
"id": "node_15",
"type": "intrinsic",
"label": "imm_readULEB32 [offset]"
},
{
"id": "node_30",
"type": "intrinsic",
"label": "push_f32 [eff__188]"
},
{
"id": "node_22",
"type": "intrinsic",
"label": "push_f32 [eff__193]"
},
{
"id": "node_11",
"type": "phi",
"label": "Phi"
},
{
"id": "node_12",
"type": "state_phi",
"label": "StatePhi [u8.!= [cond__199]]"
},
{
"id": "node_28",
"type": "intrinsic",
"label": "mach_readMemory64_f32 [val]"
},
{
"id": "node_24",
"type": "intrinsic",
"label": "pop_u64 [index]"
},
{
"id": "node_20",
"type": "intrinsic",
"label": "mach_readMemory32_f32 [val]"
},
{
"id": "node_16",
"type": "intrinsic",
"label": "pop_u32 [index]"
},
{
"id": "node_9",
"type": "intrinsic",
"label": "u8.!= [cond__199]"
},
{
"id": "node_10",
"type": "intrinsic",
"label": "imm_readULEB32 [memindex__200]"
},
{
"id": "node_4",
"type": "lit",
"label": "0u"
},
{
"id": "node_3",
"type": "intrinsic",
"label": "imm_readU8 [flags]"
},
{
"id": "node_8",
"type": "intrinsic",
"label": "u8.& [arg__201]"
},
{
"id": "node_5",
"type": "lit",
"label": "0"
},
{
"id": "node_6",
"type": "lit",
"label": "0x40u8"
}
],
"relations": [
{
"id": "uses",
"name": "Uses",
"types": ["sea_node", "sea_node"],
"tuples": [
{
"atoms": ["node_14", "node_11"],
"types": ["intrinsic", "phi"]
},
{
"atoms": ["node_30", "node_28"],
"types": ["intrinsic", "intrinsic"]
},
{
"atoms": ["node_22", "node_20"],
"types": ["intrinsic", "intrinsic"]
},
{
"atoms": ["node_28", "node_11"],
"types": ["intrinsic", "phi"]
},
{
"atoms": ["node_28", "node_24"],
"types": ["intrinsic", "intrinsic"]
},
{
"atoms": ["node_28", "node_23"],
"types": ["intrinsic", "intrinsic"]
},
{
"atoms": ["node_20", "node_11"],
"types": ["intrinsic", "phi"]
},
{
"atoms": ["node_20", "node_16"],
"types": ["intrinsic", "intrinsic"]
},
{
"atoms": ["node_20", "node_15"],
"types": ["intrinsic", "intrinsic"]
},
{
"atoms": ["node_9", "node_8"],
"types": ["intrinsic", "intrinsic"]
},
{
"atoms": ["node_9", "node_5"],
"types": ["intrinsic", "lit"]
},
{
"atoms": ["node_8", "node_3"],
"types": ["intrinsic", "intrinsic"]
},
{
"atoms": ["node_8", "node_6"],
"types": ["intrinsic", "lit"]
}
]
},
{
"id": "state_uses",
"name": "StateUses",
"types": ["sea_node", "sea_node"],
"tuples": [
{
"atoms": ["node_1", "node_31"],
"types": ["finish", "state_phi"]
},
{
"atoms": ["node_1", "node_32"],
"types": ["finish", "state_phi"]
},
{
"atoms": ["node_1", "node_0"],
"types": ["finish", "start"]
},
{
"atoms": ["node_23", "node_12"],
"types": ["intrinsic", "state_phi"]
},
{
"atoms": ["node_15", "node_12"],
"types": ["intrinsic", "state_phi"]
},
{
"atoms": ["node_30", "node_24"],
"types": ["intrinsic", "intrinsic"]
},
{
"atoms": ["node_22", "node_16"],
"types": ["intrinsic", "intrinsic"]
},
{
"atoms": ["node_24", "node_0"],
"types": ["intrinsic", "start"]
},
{
"atoms": ["node_16", "node_0"],
"types": ["intrinsic", "start"]
},
{
"atoms": ["node_10", "node_3"],
"types": ["intrinsic", "intrinsic"]
},
{
"atoms": ["node_3", "node_0"],
"types": ["intrinsic", "start"]
}
]
},
{
"id": "phi_cond",
"name": "PhiCond",
"types": ["sea_node", "sea_node"],
"tuples": [
{
"atoms": ["node_31", "node_14"],
"types": ["state_phi", "intrinsic"]
},
{
"atoms": ["node_32", "node_14"],
"types": ["state_phi", "intrinsic"]
},
{
"atoms": ["node_11", "node_9"],
"types": ["phi", "intrinsic"]
},
{
"atoms": ["node_12", "node_9"],
"types": ["state_phi", "intrinsic"]
}
]
},
{
"id": "phi_true",
"name": "PhiTrue",
"types": ["sea_node", "sea_node"],
"tuples": [
{
"atoms": ["node_31", "node_23"],
"types": ["state_phi", "intrinsic"]
},
{
"atoms": ["node_32", "node_30"],
"types": ["state_phi", "intrinsic"]
},
{
"atoms": ["node_11", "node_10"],
"types": ["phi", "intrinsic"]
},
{
"atoms": ["node_12", "node_10"],
"types": ["state_phi", "intrinsic"]
}
]
},
{
"id": "phi_false",
"name": "PhiFalse",
"types": ["sea_node", "sea_node"],
"tuples": [
{
"atoms": ["node_31", "node_15"],
"types": ["state_phi", "intrinsic"]
},
{
"atoms": ["node_32", "node_22"],
"types": ["state_phi", "intrinsic"]
},
{
"atoms": ["node_11", "node_4"],
"types": ["phi", "lit"]
},
{
"atoms": ["node_12", "node_3"],
"types": ["state_phi", "intrinsic"]
}
]
}
]
}</pre>`;
window.traces["F32_LOAD"]["spytial_ul__raw"] += `{
"atoms": [
{
"id": "node_1",
"type": "finish",
"label": "Finish"
},
{
"id": "node_31",
"type": "state_phi",
"label": "StatePhi [m_isMemory64 [cond__187]]"
},
{
"id": "node_32",
"type": "state_phi",
"label": "StatePhi [m_isMemory64 [cond__187]]"
},
{
"id": "node_0",
"type": "start",
"label": "Start"
},
{
"id": "node_14",
"type": "intrinsic",
"label": "m_isMemory64 [cond__187]"
},
{
"id": "node_23",
"type": "intrinsic",
"label": "imm_readULEB64 [offset]"
},
{
"id": "node_15",
"type": "intrinsic",
"label": "imm_readULEB32 [offset]"
},
{
"id": "node_30",
"type": "intrinsic",
"label": "push_f32 [eff__188]"
},
{
"id": "node_22",
"type": "intrinsic",
"label": "push_f32 [eff__193]"
},
{
"id": "node_11",
"type": "phi",
"label": "Phi"
},
{
"id": "node_12",
"type": "state_phi",
"label": "StatePhi [u8.!= [cond__199]]"
},
{
"id": "node_28",
"type": "intrinsic",
"label": "mach_readMemory64_f32 [val]"
},
{
"id": "node_24",
"type": "intrinsic",
"label": "pop_u64 [index]"
},
{
"id": "node_20",
"type": "intrinsic",
"label": "mach_readMemory32_f32 [val]"
},
{
"id": "node_16",
"type": "intrinsic",
"label": "pop_u32 [index]"
},
{
"id": "node_9",
"type": "intrinsic",
"label": "u8.!= [cond__199]"
},
{
"id": "node_10",
"type": "intrinsic",
"label": "imm_readULEB32 [memindex__200]"
},
{
"id": "node_4",
"type": "lit",
"label": "0u"
},
{
"id": "node_3",
"type": "intrinsic",
"label": "imm_readU8 [flags]"
},
{
"id": "node_8",
"type": "intrinsic",
"label": "u8.& [arg__201]"
},
{
"id": "node_5",
"type": "lit",
"label": "0"
},
{
"id": "node_6",
"type": "lit",
"label": "0x40u8"
}
],
"relations": [
{
"id": "uses",
"name": "Uses",
"types": ["sea_node", "sea_node"],
"tuples": [
{
"atoms": ["node_14", "node_11"],
"types": ["intrinsic", "phi"]
},
{
"atoms": ["node_30", "node_28"],
"types": ["intrinsic", "intrinsic"]
},
{
"atoms": ["node_22", "node_20"],
"types": ["intrinsic", "intrinsic"]
},
{
"atoms": ["node_28", "node_11"],
"types": ["intrinsic", "phi"]
},
{
"atoms": ["node_28", "node_24"],
"types": ["intrinsic", "intrinsic"]
},
{
"atoms": ["node_28", "node_23"],
"types": ["intrinsic", "intrinsic"]
},
{
"atoms": ["node_20", "node_11"],
"types": ["intrinsic", "phi"]
},
{
"atoms": ["node_20", "node_16"],
"types": ["intrinsic", "intrinsic"]
},
{
"atoms": ["node_20", "node_15"],
"types": ["intrinsic", "intrinsic"]
},
{
"atoms": ["node_9", "node_8"],
"types": ["intrinsic", "intrinsic"]
},
{
"atoms": ["node_9", "node_5"],
"types": ["intrinsic", "lit"]
},
{
"atoms": ["node_8", "node_3"],
"types": ["intrinsic", "intrinsic"]
},
{
"atoms": ["node_8", "node_6"],
"types": ["intrinsic", "lit"]
}
]
},
{
"id": "state_uses",
"name": "StateUses",
"types": ["sea_node", "sea_node"],
"tuples": [
{
"atoms": ["node_1", "node_31"],
"types": ["finish", "state_phi"]
},
{
"atoms": ["node_1", "node_32"],
"types": ["finish", "state_phi"]
},
{
"atoms": ["node_1", "node_0"],
"types": ["finish", "start"]
},
{
"atoms": ["node_23", "node_12"],
"types": ["intrinsic", "state_phi"]
},
{
"atoms": ["node_15", "node_12"],
"types": ["intrinsic", "state_phi"]
},
{
"atoms": ["node_30", "node_24"],
"types": ["intrinsic", "intrinsic"]
},
{
"atoms": ["node_22", "node_16"],
"types": ["intrinsic", "intrinsic"]
},
{
"atoms": ["node_24", "node_0"],
"types": ["intrinsic", "start"]
},
{
"atoms": ["node_16", "node_0"],
"types": ["intrinsic", "start"]
},
{
"atoms": ["node_10", "node_3"],
"types": ["intrinsic", "intrinsic"]
},
{
"atoms": ["node_3", "node_0"],
"types": ["intrinsic", "start"]
}
]
},
{
"id": "phi_cond",
"name": "PhiCond",
"types": ["sea_node", "sea_node"],
"tuples": [
{
"atoms": ["node_31", "node_14"],
"types": ["state_phi", "intrinsic"]
},
{
"atoms": ["node_32", "node_14"],
"types": ["state_phi", "intrinsic"]
},
{
"atoms": ["node_11", "node_9"],
"types": ["phi", "intrinsic"]
},
{
"atoms": ["node_12", "node_9"],
"types": ["state_phi", "intrinsic"]
}
]
},
{
"id": "phi_true",
"name": "PhiTrue",
"types": ["sea_node", "sea_node"],
"tuples": [
{
"atoms": ["node_31", "node_23"],
"types": ["state_phi", "intrinsic"]
},
{
"atoms": ["node_32", "node_30"],
"types": ["state_phi", "intrinsic"]
},
{
"atoms": ["node_11", "node_10"],
"types": ["phi", "intrinsic"]
},
{
"atoms": ["node_12", "node_10"],
"types": ["state_phi", "intrinsic"]
}
]
},
{
"id": "phi_false",
"name": "PhiFalse",
"types": ["sea_node", "sea_node"],
"tuples": [
{
"atoms": ["node_31", "node_15"],
"types": ["state_phi", "intrinsic"]
},
{
"atoms": ["node_32", "node_22"],
"types": ["state_phi", "intrinsic"]
},
{
"atoms": ["node_11", "node_4"],
"types": ["phi", "lit"]
},
{
"atoms": ["node_12", "node_3"],
"types": ["state_phi", "intrinsic"]
}
]
}
]
}`;
window.traces["F32_LOAD"]["unlem_scheduler"] = ''
window.traces["F32_LOAD"]["unlem_scheduler__raw"] = ''
window.traces["F32_LOAD"]["unlem_scheduler"] += `<pre class='graph'>graph TD
subgraph block_186["Block 186"]
	direction TB
	b186_1[\\"Finish"/]
end
phi_188 --> block_186
subgraph phi_188["Phi 188"]
	p188_32{{"Sϕ Stack "}}
	p188_31{{"Sϕ Codeptr "}}
end
block_189 --> phi_188
block_190 --> phi_188
subgraph block_189["Block 189"]
	direction TB
	b189_24["index pop_u64"]
	b189_28["val mach_readMemory64_f32"]
	b189_30["eff__188 push_f32"]
	b189_23["offset imm_readULEB64"]
	b189_24 --> b189_28
	b189_28 --> b189_30
	b189_30 --> b189_23
end
branch_187 --> block_189
subgraph branch_187["Branch 187"]
	br187_14["cond__187 m_isMemory64"]

end
block_191 --> branch_187
subgraph block_191["Block 191"]
	direction TB
	b191_14["cond__187 m_isMemory64"]
end
phi_193 --> block_191
subgraph phi_193["Phi 193"]
	p193_12{{"Sϕ Codeptr "}}
	p193_12{{"Sϕ Codeptr "}}
	p193_12{{"Sϕ Codeptr "}}
	p193_12{{"Sϕ Codeptr "}}
	p193_11{"memindex ϕ"}
	p193_11{"memindex ϕ"}
	p193_11{"memindex ϕ"}
	p193_11{"memindex ϕ"}
	p193_11{"memindex ϕ"}
	p193_11{"memindex ϕ"}
	p193_12{{"Sϕ Codeptr "}}
	p193_12{{"Sϕ Codeptr "}}
	p193_12{{"Sϕ Codeptr "}}
	p193_12{{"Sϕ Codeptr "}}
end
block_194 --> phi_193
block_195 --> phi_193
subgraph block_194["Block 194"]
	direction TB
	b194_10["memindex__200 imm_readULEB32"]
end
branch_192 --> block_194
subgraph branch_192["Branch 192"]
	br192_9["cond__199 u8.!="]

end
block_196 --> branch_192
subgraph block_196["Block 196"]
	direction TB
	b196_0[/"Start"\\]
	b196_6["arg__204 0x40u8"]
	b196_5["arg__202 0"]
	b196_8["arg__201 u8.&"]
	b196_9["cond__199 u8.!="]
	b196_0 --> b196_6
	b196_6 --> b196_5
	b196_5 --> b196_8
	b196_8 --> b196_9
end
subgraph block_195["Block 195"]
	direction TB
	b195_4["memindex__206 0u"]
	b195_3["flags imm_readU8"]
	b195_4 --> b195_3
end
branch_192 --> block_195
subgraph block_190["Block 190"]
	direction TB
	b190_16["index pop_u32"]
	b190_20["val mach_readMemory32_f32"]
	b190_22["eff__193 push_f32"]
	b190_15["offset imm_readULEB32"]
	b190_16 --> b190_20
	b190_20 --> b190_22
	b190_22 --> b190_15
end
branch_187 --> block_190

</pre>`;
window.traces["F32_LOAD"]["unlem_scheduler__raw"] += `graph TD
subgraph block_186["Block 186"]
	direction TB
	b186_1[\\"Finish"/]
end
phi_188 --> block_186
subgraph phi_188["Phi 188"]
	p188_32{{"Sϕ Stack "}}
	p188_31{{"Sϕ Codeptr "}}
end
block_189 --> phi_188
block_190 --> phi_188
subgraph block_189["Block 189"]
	direction TB
	b189_24["index pop_u64"]
	b189_28["val mach_readMemory64_f32"]
	b189_30["eff__188 push_f32"]
	b189_23["offset imm_readULEB64"]
	b189_24 --> b189_28
	b189_28 --> b189_30
	b189_30 --> b189_23
end
branch_187 --> block_189
subgraph branch_187["Branch 187"]
	br187_14["cond__187 m_isMemory64"]

end
block_191 --> branch_187
subgraph block_191["Block 191"]
	direction TB
	b191_14["cond__187 m_isMemory64"]
end
phi_193 --> block_191
subgraph phi_193["Phi 193"]
	p193_12{{"Sϕ Codeptr "}}
	p193_12{{"Sϕ Codeptr "}}
	p193_12{{"Sϕ Codeptr "}}
	p193_12{{"Sϕ Codeptr "}}
	p193_11{"memindex ϕ"}
	p193_11{"memindex ϕ"}
	p193_11{"memindex ϕ"}
	p193_11{"memindex ϕ"}
	p193_11{"memindex ϕ"}
	p193_11{"memindex ϕ"}
	p193_12{{"Sϕ Codeptr "}}
	p193_12{{"Sϕ Codeptr "}}
	p193_12{{"Sϕ Codeptr "}}
	p193_12{{"Sϕ Codeptr "}}
end
block_194 --> phi_193
block_195 --> phi_193
subgraph block_194["Block 194"]
	direction TB
	b194_10["memindex__200 imm_readULEB32"]
end
branch_192 --> block_194
subgraph branch_192["Branch 192"]
	br192_9["cond__199 u8.!="]

end
block_196 --> branch_192
subgraph block_196["Block 196"]
	direction TB
	b196_0[/"Start"\\]
	b196_6["arg__204 0x40u8"]
	b196_5["arg__202 0"]
	b196_8["arg__201 u8.&"]
	b196_9["cond__199 u8.!="]
	b196_0 --> b196_6
	b196_6 --> b196_5
	b196_5 --> b196_8
	b196_8 --> b196_9
end
subgraph block_195["Block 195"]
	direction TB
	b195_4["memindex__206 0u"]
	b195_3["flags imm_readU8"]
	b195_4 --> b195_3
end
branch_192 --> block_195
subgraph block_190["Block 190"]
	direction TB
	b190_16["index pop_u32"]
	b190_20["val mach_readMemory32_f32"]
	b190_22["eff__193 push_f32"]
	b190_15["offset imm_readULEB32"]
	b190_16 --> b190_20
	b190_20 --> b190_22
	b190_22 --> b190_15
end
branch_187 --> block_190

`;
window.traces["F32_LOAD"]["unlem_pretty"] = ''
window.traces["F32_LOAD"]["unlem_pretty__raw"] = ''
window.traces["F32_LOAD"]["unlem_pretty"] += `<pre class=''>def flags = imm_readU8();
var memindex: u32;
if (u8.!=(u8.&(flags, 0x40u8), 0)) {
	memindex = imm_readULEB32();
} else {
	memindex = 0u;
}
def cond = m_isMemory64(memindex);
if (cond) {
	def offset = imm_readULEB64();
	def index = pop_u64();
	def val = mach_readMemory64_f32(memindex, index, offset);
	push_f32(val);
} else {
	def offset = imm_readULEB32();
	def index = pop_u32();
	def val = mach_readMemory32_f32(memindex, index, offset);
	push_f32(val);
}
</pre>`;
window.traces["F32_LOAD"]["unlem_pretty__raw"] += `def flags = imm_readU8();
var memindex: u32;
if (u8.!=(u8.&(flags, 0x40u8), 0)) {
	memindex = imm_readULEB32();
} else {
	memindex = 0u;
}
def cond = m_isMemory64(memindex);
if (cond) {
	def offset = imm_readULEB64();
	def index = pop_u64();
	def val = mach_readMemory64_f32(memindex, index, offset);
	push_f32(val);
} else {
	def offset = imm_readULEB32();
	def index = pop_u32();
	def val = mach_readMemory32_f32(memindex, index, offset);
	push_f32(val);
}
`;
window.traces["F32_LOAD"]["constUnLEM"] = ''
window.traces["F32_LOAD"]["constUnLEM__raw"] = ''
window.traces["F32_LOAD"]["constUnLEM"] += `<pre class='graph'>---
config:
  layout: elk
---
graph TD
	1[\\"Finish"/]
	31 -. Codeptr .-> 1
	32 -. Stack .-> 1
	0 -. Trap Locals Globals Tables Memory Extra .-> 1
	0[/"Start"\\]
	32{{"Sϕ Stack "}}
	14 --> 32
	30 --> 32
	22 --> 32
	22["eff__193 push_f32"]
	20 --> 22
	16 -. Stack .-> 22
	16["index pop_u32"]
	0 -. Stack .-> 16
	20["val mach_readMemory32_f32"]
	11 --> 20
	16 --> 20
	15 --> 20
	15["offset imm_readULEB32"]
	12 -. Codeptr .-> 15
	12{{"Sϕ Codeptr "}}
	9 --> 12
	10 --> 12
	3 --> 12
	3["flags imm_readU8"]
	0 -. Codeptr .-> 3
	10["memindex__200 imm_readULEB32"]
	3 -. Codeptr .-> 10
	9["cond__199 u8.!="]
	8 --> 9
	5 --> 9
	5["arg__202 0"]
	8["arg__201 u8.&"]
	3 --> 8
	6 --> 8
	6["arg__204 0x40u8"]
	11{"memindex ϕ"}
	9 --> 11
	10 --> 11
	4 --> 11
	4["memindex__206 0u"]
	30["eff__188 push_f32"]
	28 --> 30
	24 -. Stack .-> 30
	24["index pop_u64"]
	0 -. Stack .-> 24
	28["val mach_readMemory64_f32"]
	11 --> 28
	24 --> 28
	23 --> 28
	23["offset imm_readULEB64"]
	12 -. Codeptr .-> 23
	14["cond__187 m_isMemory64"]
	11 --> 14
	31{{"Sϕ Codeptr "}}
	14 --> 31
	23 --> 31
	15 --> 31
</pre>`;
window.traces["F32_LOAD"]["constUnLEM__raw"] += `---
config:
  layout: elk
---
graph TD
	1[\\"Finish"/]
	31 -. Codeptr .-> 1
	32 -. Stack .-> 1
	0 -. Trap Locals Globals Tables Memory Extra .-> 1
	0[/"Start"\\]
	32{{"Sϕ Stack "}}
	14 --> 32
	30 --> 32
	22 --> 32
	22["eff__193 push_f32"]
	20 --> 22
	16 -. Stack .-> 22
	16["index pop_u32"]
	0 -. Stack .-> 16
	20["val mach_readMemory32_f32"]
	11 --> 20
	16 --> 20
	15 --> 20
	15["offset imm_readULEB32"]
	12 -. Codeptr .-> 15
	12{{"Sϕ Codeptr "}}
	9 --> 12
	10 --> 12
	3 --> 12
	3["flags imm_readU8"]
	0 -. Codeptr .-> 3
	10["memindex__200 imm_readULEB32"]
	3 -. Codeptr .-> 10
	9["cond__199 u8.!="]
	8 --> 9
	5 --> 9
	5["arg__202 0"]
	8["arg__201 u8.&"]
	3 --> 8
	6 --> 8
	6["arg__204 0x40u8"]
	11{"memindex ϕ"}
	9 --> 11
	10 --> 11
	4 --> 11
	4["memindex__206 0u"]
	30["eff__188 push_f32"]
	28 --> 30
	24 -. Stack .-> 30
	24["index pop_u64"]
	0 -. Stack .-> 24
	28["val mach_readMemory64_f32"]
	11 --> 28
	24 --> 28
	23 --> 28
	23["offset imm_readULEB64"]
	12 -. Codeptr .-> 23
	14["cond__187 m_isMemory64"]
	11 --> 14
	31{{"Sϕ Codeptr "}}
	14 --> 31
	23 --> 31
	15 --> 31
`;
window.traces["F32_LOAD"]["chooseMerge"] = ''
window.traces["F32_LOAD"]["chooseMerge__raw"] = ''
window.traces["F32_LOAD"]["chooseMerge"] += `<pre class='graph'>---
config:
  layout: elk
---
graph TD
	1[\\"Finish"/]
	31 -. Codeptr .-> 1
	32 -. Stack .-> 1
	0 -. Trap Locals Globals Tables Memory Extra .-> 1
	0[/"Start"\\]
	32{{"Sϕ Stack "}}
	14 --> 32
	30 --> 32
	22 --> 32
	22["eff__193 push_f32"]
	20 --> 22
	16 -. Stack .-> 22
	16["index pop_u32"]
	0 -. Stack .-> 16
	20["val mach_readMemory32_f32"]
	11 --> 20
	16 --> 20
	15 --> 20
	15["offset imm_readULEB32"]
	12 -. Codeptr .-> 15
	12{{"Sϕ Codeptr "}}
	9 --> 12
	10 --> 12
	3 --> 12
	3["flags imm_readU8"]
	0 -. Codeptr .-> 3
	10["memindex__200 imm_readULEB32"]
	3 -. Codeptr .-> 10
	9["cond__199 u8.!="]
	8 --> 9
	5 --> 9
	5["arg__202 0"]
	8["arg__201 u8.&"]
	3 --> 8
	6 --> 8
	6["arg__204 0x40u8"]
	11{"memindex ϕ"}
	9 --> 11
	10 --> 11
	4 --> 11
	4["memindex__206 0u"]
	30["eff__188 push_f32"]
	28 --> 30
	24 -. Stack .-> 30
	24["index pop_u64"]
	0 -. Stack .-> 24
	28["val mach_readMemory64_f32"]
	11 --> 28
	24 --> 28
	23 --> 28
	23["offset imm_readULEB64"]
	12 -. Codeptr .-> 23
	14["cond__187 m_isMemory64"]
	11 --> 14
	31{{"Sϕ Codeptr "}}
	14 --> 31
	23 --> 31
	15 --> 31
</pre>`;
window.traces["F32_LOAD"]["chooseMerge__raw"] += `---
config:
  layout: elk
---
graph TD
	1[\\"Finish"/]
	31 -. Codeptr .-> 1
	32 -. Stack .-> 1
	0 -. Trap Locals Globals Tables Memory Extra .-> 1
	0[/"Start"\\]
	32{{"Sϕ Stack "}}
	14 --> 32
	30 --> 32
	22 --> 32
	22["eff__193 push_f32"]
	20 --> 22
	16 -. Stack .-> 22
	16["index pop_u32"]
	0 -. Stack .-> 16
	20["val mach_readMemory32_f32"]
	11 --> 20
	16 --> 20
	15 --> 20
	15["offset imm_readULEB32"]
	12 -. Codeptr .-> 15
	12{{"Sϕ Codeptr "}}
	9 --> 12
	10 --> 12
	3 --> 12
	3["flags imm_readU8"]
	0 -. Codeptr .-> 3
	10["memindex__200 imm_readULEB32"]
	3 -. Codeptr .-> 10
	9["cond__199 u8.!="]
	8 --> 9
	5 --> 9
	5["arg__202 0"]
	8["arg__201 u8.&"]
	3 --> 8
	6 --> 8
	6["arg__204 0x40u8"]
	11{"memindex ϕ"}
	9 --> 11
	10 --> 11
	4 --> 11
	4["memindex__206 0u"]
	30["eff__188 push_f32"]
	28 --> 30
	24 -. Stack .-> 30
	24["index pop_u64"]
	0 -. Stack .-> 24
	28["val mach_readMemory64_f32"]
	11 --> 28
	24 --> 28
	23 --> 28
	23["offset imm_readULEB64"]
	12 -. Codeptr .-> 23
	14["cond__187 m_isMemory64"]
	11 --> 14
	31{{"Sϕ Codeptr "}}
	14 --> 31
	23 --> 31
	15 --> 31
`;
window.traces["F32_LOAD"]["scheduled"] = ''
window.traces["F32_LOAD"]["scheduled__raw"] = ''
window.traces["F32_LOAD"]["scheduled"] += `<pre class=''>def flags = imm_readU8();
def arg__204 : byte = 0x40u8;
def arg__201 = u8.&(flags, arg__204);
def arg__202 : byte = 0;
def cond__199 = u8.!=(arg__201, arg__202);
var memindex: u32;
if (cond__199) {
	def memindex__200 = imm_readULEB32();
} else {
	def memindex__206 : u32 = 0u;
}
// phis: memindex <- memindex__200; memindex <- memindex__206; 
def cond__187 = m_isMemory64(memindex);
if (cond__187) {
	def offset = imm_readULEB64();
	def index = pop_u64();
	def val = mach_readMemory64_f32(memindex, index, offset);
	def eff__188 = push_f32(val);
} else {
	def offset = imm_readULEB32();
	def index = pop_u32();
	def val = mach_readMemory32_f32(memindex, index, offset);
	def eff__193 = push_f32(val);
}
// phis: 
</pre>`;
window.traces["F32_LOAD"]["scheduled__raw"] += `def flags = imm_readU8();
def arg__204 : byte = 0x40u8;
def arg__201 = u8.&(flags, arg__204);
def arg__202 : byte = 0;
def cond__199 = u8.!=(arg__201, arg__202);
var memindex: u32;
if (cond__199) {
	def memindex__200 = imm_readULEB32();
} else {
	def memindex__206 : u32 = 0u;
}
// phis: memindex <- memindex__200; memindex <- memindex__206; 
def cond__187 = m_isMemory64(memindex);
if (cond__187) {
	def offset = imm_readULEB64();
	def index = pop_u64();
	def val = mach_readMemory64_f32(memindex, index, offset);
	def eff__188 = push_f32(val);
} else {
	def offset = imm_readULEB32();
	def index = pop_u32();
	def val = mach_readMemory32_f32(memindex, index, offset);
	def eff__193 = push_f32(val);
}
// phis: 
`;
window.traces["F32_LOAD"]["pretty"] = ''
window.traces["F32_LOAD"]["pretty__raw"] = ''
window.traces["F32_LOAD"]["pretty"] += `<pre class=''>def flags = imm_readU8();
var memindex: u32;
if (u8.!=(u8.&(flags, 0x40u8), 0)) {
	memindex = imm_readULEB32();
} else {
	memindex = 0u;
}
def cond = m_isMemory64(memindex);
if (cond) {
	def offset = imm_readULEB64();
	def index = pop_u64();
	def val = mach_readMemory64_f32(memindex, index, offset);
	push_f32(val);
} else {
	def offset = imm_readULEB32();
	def index = pop_u32();
	def val = mach_readMemory32_f32(memindex, index, offset);
	push_f32(val);
}
</pre>`;
window.traces["F32_LOAD"]["pretty__raw"] += `def flags = imm_readU8();
var memindex: u32;
if (u8.!=(u8.&(flags, 0x40u8), 0)) {
	memindex = imm_readULEB32();
} else {
	memindex = 0u;
}
def cond = m_isMemory64(memindex);
if (cond) {
	def offset = imm_readULEB64();
	def index = pop_u64();
	def val = mach_readMemory64_f32(memindex, index, offset);
	push_f32(val);
} else {
	def offset = imm_readULEB32();
	def index = pop_u32();
	def val = mach_readMemory32_f32(memindex, index, offset);
	push_f32(val);
}
`;
window.traces["F64_LOAD"] = {}
window.traces["F64_LOAD"]["parsed"] = ''
window.traces["F64_LOAD"]["parsed__raw"] = ''
window.traces["F64_LOAD"]["parsed"] += `<pre class=''>def flags = imm_readU8();
def memindex : u32 = 0u;
def arg__222 : byte = 0;
def arg__224 : byte = 0x40u8;
def arg__223 = (flags);
def arg__221 = u8.&(arg__223, arg__224);
def cond__219 = u8.!=(arg__221, arg__222);
if (cond__219) {
	def memindex__220 = imm_readULEB32();
}
// phis: memindex <- memindex__220; 
def arg__218 = (memindex);
def cond__207 = m_isMemory64(arg__218);
if (cond__207) {
	def offset = imm_readULEB64();
	def index = pop_u64();
	def arg__212 = (offset);
	def arg__211 = (index);
	def arg__210 = (memindex);
	def val = mach_readMemory64_f64(arg__210, arg__211, arg__212);
	def arg__209 = (val);
	def eff__208 = push_f64(arg__209);
} else {
	def offset = imm_readULEB32();
	def index = pop_u32();
	def arg__217 = (offset);
	def arg__216 = (index);
	def arg__215 = (memindex);
	def val = mach_readMemory32_f64(arg__215, arg__216, arg__217);
	def arg__214 = (val);
	def eff__213 = push_f64(arg__214);
}
// phis: 
</pre>`;
window.traces["F64_LOAD"]["parsed__raw"] += `def flags = imm_readU8();
def memindex : u32 = 0u;
def arg__222 : byte = 0;
def arg__224 : byte = 0x40u8;
def arg__223 = (flags);
def arg__221 = u8.&(arg__223, arg__224);
def cond__219 = u8.!=(arg__221, arg__222);
if (cond__219) {
	def memindex__220 = imm_readULEB32();
}
// phis: memindex <- memindex__220; 
def arg__218 = (memindex);
def cond__207 = m_isMemory64(arg__218);
if (cond__207) {
	def offset = imm_readULEB64();
	def index = pop_u64();
	def arg__212 = (offset);
	def arg__211 = (index);
	def arg__210 = (memindex);
	def val = mach_readMemory64_f64(arg__210, arg__211, arg__212);
	def arg__209 = (val);
	def eff__208 = push_f64(arg__209);
} else {
	def offset = imm_readULEB32();
	def index = pop_u32();
	def arg__217 = (offset);
	def arg__216 = (index);
	def arg__215 = (memindex);
	def val = mach_readMemory32_f64(arg__215, arg__216, arg__217);
	def arg__214 = (val);
	def eff__213 = push_f64(arg__214);
}
// phis: 
`;
window.traces["F64_LOAD"]["raw"] = ''
window.traces["F64_LOAD"]["raw__raw"] = ''
window.traces["F64_LOAD"]["raw"] += `<pre class='graph'>---
config:
  layout: elk
---
graph TD
	1[\\"Finish"/]
	31 -. Codeptr .-> 1
	32 -. Stack .-> 1
	0 -. Trap Locals Globals Tables Memory Extra .-> 1
	0[/"Start"\\]
	32{{"Sϕ Stack "}}
	14 --> 32
	30 --> 32
	22 --> 32
	22["eff__213 push_f64"]
	20 --> 22
	16 -. Stack .-> 22
	16["index pop_u32"]
	0 -. Stack .-> 16
	20["val mach_readMemory32_f64"]
	11 --> 20
	16 --> 20
	15 --> 20
	15["offset imm_readULEB32"]
	12 -. Codeptr .-> 15
	12{{"Sϕ Codeptr "}}
	9 --> 12
	10 --> 12
	3 --> 12
	3["flags imm_readU8"]
	0 -. Codeptr .-> 3
	10["memindex__220 imm_readULEB32"]
	3 -. Codeptr .-> 10
	9["cond__219 u8.!="]
	8 --> 9
	5 --> 9
	5["arg__222 0"]
	8["arg__221 u8.&"]
	3 --> 8
	6 --> 8
	6["arg__224 0x40u8"]
	11{"memindex ϕ"}
	9 --> 11
	10 --> 11
	4 --> 11
	4["memindex__225 0u"]
	30["eff__208 push_f64"]
	28 --> 30
	24 -. Stack .-> 30
	24["index pop_u64"]
	0 -. Stack .-> 24
	28["val mach_readMemory64_f64"]
	11 --> 28
	24 --> 28
	23 --> 28
	23["offset imm_readULEB64"]
	12 -. Codeptr .-> 23
	14["cond__207 m_isMemory64"]
	11 --> 14
	31{{"Sϕ Codeptr "}}
	14 --> 31
	23 --> 31
	15 --> 31
</pre>`;
window.traces["F64_LOAD"]["raw__raw"] += `---
config:
  layout: elk
---
graph TD
	1[\\"Finish"/]
	31 -. Codeptr .-> 1
	32 -. Stack .-> 1
	0 -. Trap Locals Globals Tables Memory Extra .-> 1
	0[/"Start"\\]
	32{{"Sϕ Stack "}}
	14 --> 32
	30 --> 32
	22 --> 32
	22["eff__213 push_f64"]
	20 --> 22
	16 -. Stack .-> 22
	16["index pop_u32"]
	0 -. Stack .-> 16
	20["val mach_readMemory32_f64"]
	11 --> 20
	16 --> 20
	15 --> 20
	15["offset imm_readULEB32"]
	12 -. Codeptr .-> 15
	12{{"Sϕ Codeptr "}}
	9 --> 12
	10 --> 12
	3 --> 12
	3["flags imm_readU8"]
	0 -. Codeptr .-> 3
	10["memindex__220 imm_readULEB32"]
	3 -. Codeptr .-> 10
	9["cond__219 u8.!="]
	8 --> 9
	5 --> 9
	5["arg__222 0"]
	8["arg__221 u8.&"]
	3 --> 8
	6 --> 8
	6["arg__224 0x40u8"]
	11{"memindex ϕ"}
	9 --> 11
	10 --> 11
	4 --> 11
	4["memindex__225 0u"]
	30["eff__208 push_f64"]
	28 --> 30
	24 -. Stack .-> 30
	24["index pop_u64"]
	0 -. Stack .-> 24
	28["val mach_readMemory64_f64"]
	11 --> 28
	24 --> 28
	23 --> 28
	23["offset imm_readULEB64"]
	12 -. Codeptr .-> 23
	14["cond__207 m_isMemory64"]
	11 --> 14
	31{{"Sϕ Codeptr "}}
	14 --> 31
	23 --> 31
	15 --> 31
`;
window.traces["F64_LOAD"]["spytial"] = ''
window.traces["F64_LOAD"]["spytial__raw"] = ''
window.traces["F64_LOAD"]["spytial"] += `<pre class=''>{
"atoms": [
{
"id": "node_1",
"type": "finish",
"label": "Finish"
},
{
"id": "node_31",
"type": "state_phi",
"label": "StatePhi [m_isMemory64 [cond__207]]"
},
{
"id": "node_32",
"type": "state_phi",
"label": "StatePhi [m_isMemory64 [cond__207]]"
},
{
"id": "node_0",
"type": "start",
"label": "Start"
},
{
"id": "node_14",
"type": "intrinsic",
"label": "m_isMemory64 [cond__207]"
},
{
"id": "node_23",
"type": "intrinsic",
"label": "imm_readULEB64 [offset]"
},
{
"id": "node_15",
"type": "intrinsic",
"label": "imm_readULEB32 [offset]"
},
{
"id": "node_30",
"type": "intrinsic",
"label": "push_f64 [eff__208]"
},
{
"id": "node_22",
"type": "intrinsic",
"label": "push_f64 [eff__213]"
},
{
"id": "node_11",
"type": "phi",
"label": "Phi"
},
{
"id": "node_12",
"type": "state_phi",
"label": "StatePhi [u8.!= [cond__219]]"
},
{
"id": "node_28",
"type": "intrinsic",
"label": "mach_readMemory64_f64 [val]"
},
{
"id": "node_24",
"type": "intrinsic",
"label": "pop_u64 [index]"
},
{
"id": "node_20",
"type": "intrinsic",
"label": "mach_readMemory32_f64 [val]"
},
{
"id": "node_16",
"type": "intrinsic",
"label": "pop_u32 [index]"
},
{
"id": "node_9",
"type": "intrinsic",
"label": "u8.!= [cond__219]"
},
{
"id": "node_10",
"type": "intrinsic",
"label": "imm_readULEB32 [memindex__220]"
},
{
"id": "node_4",
"type": "lit",
"label": "0u"
},
{
"id": "node_3",
"type": "intrinsic",
"label": "imm_readU8 [flags]"
},
{
"id": "node_8",
"type": "intrinsic",
"label": "u8.& [arg__221]"
},
{
"id": "node_5",
"type": "lit",
"label": "0"
},
{
"id": "node_6",
"type": "lit",
"label": "0x40u8"
}
],
"relations": [
{
"id": "uses",
"name": "Uses",
"types": ["sea_node", "sea_node"],
"tuples": [
{
"atoms": ["node_14", "node_11"],
"types": ["intrinsic", "phi"]
},
{
"atoms": ["node_30", "node_28"],
"types": ["intrinsic", "intrinsic"]
},
{
"atoms": ["node_22", "node_20"],
"types": ["intrinsic", "intrinsic"]
},
{
"atoms": ["node_28", "node_11"],
"types": ["intrinsic", "phi"]
},
{
"atoms": ["node_28", "node_24"],
"types": ["intrinsic", "intrinsic"]
},
{
"atoms": ["node_28", "node_23"],
"types": ["intrinsic", "intrinsic"]
},
{
"atoms": ["node_20", "node_11"],
"types": ["intrinsic", "phi"]
},
{
"atoms": ["node_20", "node_16"],
"types": ["intrinsic", "intrinsic"]
},
{
"atoms": ["node_20", "node_15"],
"types": ["intrinsic", "intrinsic"]
},
{
"atoms": ["node_9", "node_8"],
"types": ["intrinsic", "intrinsic"]
},
{
"atoms": ["node_9", "node_5"],
"types": ["intrinsic", "lit"]
},
{
"atoms": ["node_8", "node_3"],
"types": ["intrinsic", "intrinsic"]
},
{
"atoms": ["node_8", "node_6"],
"types": ["intrinsic", "lit"]
}
]
},
{
"id": "state_uses",
"name": "StateUses",
"types": ["sea_node", "sea_node"],
"tuples": [
{
"atoms": ["node_1", "node_31"],
"types": ["finish", "state_phi"]
},
{
"atoms": ["node_1", "node_32"],
"types": ["finish", "state_phi"]
},
{
"atoms": ["node_1", "node_0"],
"types": ["finish", "start"]
},
{
"atoms": ["node_23", "node_12"],
"types": ["intrinsic", "state_phi"]
},
{
"atoms": ["node_15", "node_12"],
"types": ["intrinsic", "state_phi"]
},
{
"atoms": ["node_30", "node_24"],
"types": ["intrinsic", "intrinsic"]
},
{
"atoms": ["node_22", "node_16"],
"types": ["intrinsic", "intrinsic"]
},
{
"atoms": ["node_24", "node_0"],
"types": ["intrinsic", "start"]
},
{
"atoms": ["node_16", "node_0"],
"types": ["intrinsic", "start"]
},
{
"atoms": ["node_10", "node_3"],
"types": ["intrinsic", "intrinsic"]
},
{
"atoms": ["node_3", "node_0"],
"types": ["intrinsic", "start"]
}
]
},
{
"id": "phi_cond",
"name": "PhiCond",
"types": ["sea_node", "sea_node"],
"tuples": [
{
"atoms": ["node_31", "node_14"],
"types": ["state_phi", "intrinsic"]
},
{
"atoms": ["node_32", "node_14"],
"types": ["state_phi", "intrinsic"]
},
{
"atoms": ["node_11", "node_9"],
"types": ["phi", "intrinsic"]
},
{
"atoms": ["node_12", "node_9"],
"types": ["state_phi", "intrinsic"]
}
]
},
{
"id": "phi_true",
"name": "PhiTrue",
"types": ["sea_node", "sea_node"],
"tuples": [
{
"atoms": ["node_31", "node_23"],
"types": ["state_phi", "intrinsic"]
},
{
"atoms": ["node_32", "node_30"],
"types": ["state_phi", "intrinsic"]
},
{
"atoms": ["node_11", "node_10"],
"types": ["phi", "intrinsic"]
},
{
"atoms": ["node_12", "node_10"],
"types": ["state_phi", "intrinsic"]
}
]
},
{
"id": "phi_false",
"name": "PhiFalse",
"types": ["sea_node", "sea_node"],
"tuples": [
{
"atoms": ["node_31", "node_15"],
"types": ["state_phi", "intrinsic"]
},
{
"atoms": ["node_32", "node_22"],
"types": ["state_phi", "intrinsic"]
},
{
"atoms": ["node_11", "node_4"],
"types": ["phi", "lit"]
},
{
"atoms": ["node_12", "node_3"],
"types": ["state_phi", "intrinsic"]
}
]
}
]
}</pre>`;
window.traces["F64_LOAD"]["spytial__raw"] += `{
"atoms": [
{
"id": "node_1",
"type": "finish",
"label": "Finish"
},
{
"id": "node_31",
"type": "state_phi",
"label": "StatePhi [m_isMemory64 [cond__207]]"
},
{
"id": "node_32",
"type": "state_phi",
"label": "StatePhi [m_isMemory64 [cond__207]]"
},
{
"id": "node_0",
"type": "start",
"label": "Start"
},
{
"id": "node_14",
"type": "intrinsic",
"label": "m_isMemory64 [cond__207]"
},
{
"id": "node_23",
"type": "intrinsic",
"label": "imm_readULEB64 [offset]"
},
{
"id": "node_15",
"type": "intrinsic",
"label": "imm_readULEB32 [offset]"
},
{
"id": "node_30",
"type": "intrinsic",
"label": "push_f64 [eff__208]"
},
{
"id": "node_22",
"type": "intrinsic",
"label": "push_f64 [eff__213]"
},
{
"id": "node_11",
"type": "phi",
"label": "Phi"
},
{
"id": "node_12",
"type": "state_phi",
"label": "StatePhi [u8.!= [cond__219]]"
},
{
"id": "node_28",
"type": "intrinsic",
"label": "mach_readMemory64_f64 [val]"
},
{
"id": "node_24",
"type": "intrinsic",
"label": "pop_u64 [index]"
},
{
"id": "node_20",
"type": "intrinsic",
"label": "mach_readMemory32_f64 [val]"
},
{
"id": "node_16",
"type": "intrinsic",
"label": "pop_u32 [index]"
},
{
"id": "node_9",
"type": "intrinsic",
"label": "u8.!= [cond__219]"
},
{
"id": "node_10",
"type": "intrinsic",
"label": "imm_readULEB32 [memindex__220]"
},
{
"id": "node_4",
"type": "lit",
"label": "0u"
},
{
"id": "node_3",
"type": "intrinsic",
"label": "imm_readU8 [flags]"
},
{
"id": "node_8",
"type": "intrinsic",
"label": "u8.& [arg__221]"
},
{
"id": "node_5",
"type": "lit",
"label": "0"
},
{
"id": "node_6",
"type": "lit",
"label": "0x40u8"
}
],
"relations": [
{
"id": "uses",
"name": "Uses",
"types": ["sea_node", "sea_node"],
"tuples": [
{
"atoms": ["node_14", "node_11"],
"types": ["intrinsic", "phi"]
},
{
"atoms": ["node_30", "node_28"],
"types": ["intrinsic", "intrinsic"]
},
{
"atoms": ["node_22", "node_20"],
"types": ["intrinsic", "intrinsic"]
},
{
"atoms": ["node_28", "node_11"],
"types": ["intrinsic", "phi"]
},
{
"atoms": ["node_28", "node_24"],
"types": ["intrinsic", "intrinsic"]
},
{
"atoms": ["node_28", "node_23"],
"types": ["intrinsic", "intrinsic"]
},
{
"atoms": ["node_20", "node_11"],
"types": ["intrinsic", "phi"]
},
{
"atoms": ["node_20", "node_16"],
"types": ["intrinsic", "intrinsic"]
},
{
"atoms": ["node_20", "node_15"],
"types": ["intrinsic", "intrinsic"]
},
{
"atoms": ["node_9", "node_8"],
"types": ["intrinsic", "intrinsic"]
},
{
"atoms": ["node_9", "node_5"],
"types": ["intrinsic", "lit"]
},
{
"atoms": ["node_8", "node_3"],
"types": ["intrinsic", "intrinsic"]
},
{
"atoms": ["node_8", "node_6"],
"types": ["intrinsic", "lit"]
}
]
},
{
"id": "state_uses",
"name": "StateUses",
"types": ["sea_node", "sea_node"],
"tuples": [
{
"atoms": ["node_1", "node_31"],
"types": ["finish", "state_phi"]
},
{
"atoms": ["node_1", "node_32"],
"types": ["finish", "state_phi"]
},
{
"atoms": ["node_1", "node_0"],
"types": ["finish", "start"]
},
{
"atoms": ["node_23", "node_12"],
"types": ["intrinsic", "state_phi"]
},
{
"atoms": ["node_15", "node_12"],
"types": ["intrinsic", "state_phi"]
},
{
"atoms": ["node_30", "node_24"],
"types": ["intrinsic", "intrinsic"]
},
{
"atoms": ["node_22", "node_16"],
"types": ["intrinsic", "intrinsic"]
},
{
"atoms": ["node_24", "node_0"],
"types": ["intrinsic", "start"]
},
{
"atoms": ["node_16", "node_0"],
"types": ["intrinsic", "start"]
},
{
"atoms": ["node_10", "node_3"],
"types": ["intrinsic", "intrinsic"]
},
{
"atoms": ["node_3", "node_0"],
"types": ["intrinsic", "start"]
}
]
},
{
"id": "phi_cond",
"name": "PhiCond",
"types": ["sea_node", "sea_node"],
"tuples": [
{
"atoms": ["node_31", "node_14"],
"types": ["state_phi", "intrinsic"]
},
{
"atoms": ["node_32", "node_14"],
"types": ["state_phi", "intrinsic"]
},
{
"atoms": ["node_11", "node_9"],
"types": ["phi", "intrinsic"]
},
{
"atoms": ["node_12", "node_9"],
"types": ["state_phi", "intrinsic"]
}
]
},
{
"id": "phi_true",
"name": "PhiTrue",
"types": ["sea_node", "sea_node"],
"tuples": [
{
"atoms": ["node_31", "node_23"],
"types": ["state_phi", "intrinsic"]
},
{
"atoms": ["node_32", "node_30"],
"types": ["state_phi", "intrinsic"]
},
{
"atoms": ["node_11", "node_10"],
"types": ["phi", "intrinsic"]
},
{
"atoms": ["node_12", "node_10"],
"types": ["state_phi", "intrinsic"]
}
]
},
{
"id": "phi_false",
"name": "PhiFalse",
"types": ["sea_node", "sea_node"],
"tuples": [
{
"atoms": ["node_31", "node_15"],
"types": ["state_phi", "intrinsic"]
},
{
"atoms": ["node_32", "node_22"],
"types": ["state_phi", "intrinsic"]
},
{
"atoms": ["node_11", "node_4"],
"types": ["phi", "lit"]
},
{
"atoms": ["node_12", "node_3"],
"types": ["state_phi", "intrinsic"]
}
]
}
]
}`;
window.traces["F64_LOAD"]["overloadOps"] = ''
window.traces["F64_LOAD"]["overloadOps__raw"] = ''
window.traces["F64_LOAD"]["overloadOps"] += `<pre class='graph'>---
config:
  layout: elk
---
graph TD
	1[\\"Finish"/]
	31 -. Codeptr .-> 1
	32 -. Stack .-> 1
	0 -. Trap Locals Globals Tables Memory Extra .-> 1
	0[/"Start"\\]
	32{{"Sϕ Stack "}}
	14 --> 32
	30 --> 32
	22 --> 32
	22["eff__213 push_f64"]
	20 --> 22
	16 -. Stack .-> 22
	16["index pop_u32"]
	0 -. Stack .-> 16
	20["val mach_readMemory32_f64"]
	11 --> 20
	16 --> 20
	15 --> 20
	15["offset imm_readULEB32"]
	12 -. Codeptr .-> 15
	12{{"Sϕ Codeptr "}}
	9 --> 12
	10 --> 12
	3 --> 12
	3["flags imm_readU8"]
	0 -. Codeptr .-> 3
	10["memindex__220 imm_readULEB32"]
	3 -. Codeptr .-> 10
	9["cond__219 u8.!="]
	8 --> 9
	5 --> 9
	5["arg__222 0"]
	8["arg__221 u8.&"]
	3 --> 8
	6 --> 8
	6["arg__224 0x40u8"]
	11{"memindex ϕ"}
	9 --> 11
	10 --> 11
	4 --> 11
	4["memindex__226 0u"]
	30["eff__208 push_f64"]
	28 --> 30
	24 -. Stack .-> 30
	24["index pop_u64"]
	0 -. Stack .-> 24
	28["val mach_readMemory64_f64"]
	11 --> 28
	24 --> 28
	23 --> 28
	23["offset imm_readULEB64"]
	12 -. Codeptr .-> 23
	14["cond__207 m_isMemory64"]
	11 --> 14
	31{{"Sϕ Codeptr "}}
	14 --> 31
	23 --> 31
	15 --> 31
</pre>`;
window.traces["F64_LOAD"]["overloadOps__raw"] += `---
config:
  layout: elk
---
graph TD
	1[\\"Finish"/]
	31 -. Codeptr .-> 1
	32 -. Stack .-> 1
	0 -. Trap Locals Globals Tables Memory Extra .-> 1
	0[/"Start"\\]
	32{{"Sϕ Stack "}}
	14 --> 32
	30 --> 32
	22 --> 32
	22["eff__213 push_f64"]
	20 --> 22
	16 -. Stack .-> 22
	16["index pop_u32"]
	0 -. Stack .-> 16
	20["val mach_readMemory32_f64"]
	11 --> 20
	16 --> 20
	15 --> 20
	15["offset imm_readULEB32"]
	12 -. Codeptr .-> 15
	12{{"Sϕ Codeptr "}}
	9 --> 12
	10 --> 12
	3 --> 12
	3["flags imm_readU8"]
	0 -. Codeptr .-> 3
	10["memindex__220 imm_readULEB32"]
	3 -. Codeptr .-> 10
	9["cond__219 u8.!="]
	8 --> 9
	5 --> 9
	5["arg__222 0"]
	8["arg__221 u8.&"]
	3 --> 8
	6 --> 8
	6["arg__224 0x40u8"]
	11{"memindex ϕ"}
	9 --> 11
	10 --> 11
	4 --> 11
	4["memindex__226 0u"]
	30["eff__208 push_f64"]
	28 --> 30
	24 -. Stack .-> 30
	24["index pop_u64"]
	0 -. Stack .-> 24
	28["val mach_readMemory64_f64"]
	11 --> 28
	24 --> 28
	23 --> 28
	23["offset imm_readULEB64"]
	12 -. Codeptr .-> 23
	14["cond__207 m_isMemory64"]
	11 --> 14
	31{{"Sϕ Codeptr "}}
	14 --> 31
	23 --> 31
	15 --> 31
`;
window.traces["F64_LOAD"]["addAbstractions"] = ''
window.traces["F64_LOAD"]["addAbstractions__raw"] = ''
window.traces["F64_LOAD"]["addAbstractions"] += `<pre class='graph'>---
config:
  layout: elk
---
graph TD
	1[\\"Finish"/]
	31 -. Codeptr .-> 1
	32 -. Stack .-> 1
	0 -. Trap Locals Globals Tables Memory Extra .-> 1
	0[/"Start"\\]
	32{{"Sϕ Stack "}}
	14 --> 32
	30 --> 32
	22 --> 32
	22["eff__213 push_f64"]
	20 --> 22
	16 -. Stack .-> 22
	16["index pop_u32"]
	0 -. Stack .-> 16
	20["val mach_readMemory32_f64"]
	11 --> 20
	16 --> 20
	15 --> 20
	15["offset imm_readULEB32"]
	12 -. Codeptr .-> 15
	12{{"Sϕ Codeptr "}}
	9 --> 12
	10 --> 12
	3 --> 12
	3["flags imm_readU8"]
	0 -. Codeptr .-> 3
	10["memindex__220 imm_readULEB32"]
	3 -. Codeptr .-> 10
	9["cond__219 u8.!="]
	8 --> 9
	5 --> 9
	5["arg__222 0"]
	8["arg__221 u8.&"]
	3 --> 8
	6 --> 8
	6["arg__224 0x40u8"]
	11{"memindex ϕ"}
	9 --> 11
	10 --> 11
	4 --> 11
	4["memindex__226 0u"]
	30["eff__208 push_f64"]
	28 --> 30
	24 -. Stack .-> 30
	24["index pop_u64"]
	0 -. Stack .-> 24
	28["val mach_readMemory64_f64"]
	11 --> 28
	24 --> 28
	23 --> 28
	23["offset imm_readULEB64"]
	12 -. Codeptr .-> 23
	14["cond__207 m_isMemory64"]
	11 --> 14
	31{{"Sϕ Codeptr "}}
	14 --> 31
	23 --> 31
	15 --> 31
</pre>`;
window.traces["F64_LOAD"]["addAbstractions__raw"] += `---
config:
  layout: elk
---
graph TD
	1[\\"Finish"/]
	31 -. Codeptr .-> 1
	32 -. Stack .-> 1
	0 -. Trap Locals Globals Tables Memory Extra .-> 1
	0[/"Start"\\]
	32{{"Sϕ Stack "}}
	14 --> 32
	30 --> 32
	22 --> 32
	22["eff__213 push_f64"]
	20 --> 22
	16 -. Stack .-> 22
	16["index pop_u32"]
	0 -. Stack .-> 16
	20["val mach_readMemory32_f64"]
	11 --> 20
	16 --> 20
	15 --> 20
	15["offset imm_readULEB32"]
	12 -. Codeptr .-> 15
	12{{"Sϕ Codeptr "}}
	9 --> 12
	10 --> 12
	3 --> 12
	3["flags imm_readU8"]
	0 -. Codeptr .-> 3
	10["memindex__220 imm_readULEB32"]
	3 -. Codeptr .-> 10
	9["cond__219 u8.!="]
	8 --> 9
	5 --> 9
	5["arg__222 0"]
	8["arg__221 u8.&"]
	3 --> 8
	6 --> 8
	6["arg__224 0x40u8"]
	11{"memindex ϕ"}
	9 --> 11
	10 --> 11
	4 --> 11
	4["memindex__226 0u"]
	30["eff__208 push_f64"]
	28 --> 30
	24 -. Stack .-> 30
	24["index pop_u64"]
	0 -. Stack .-> 24
	28["val mach_readMemory64_f64"]
	11 --> 28
	24 --> 28
	23 --> 28
	23["offset imm_readULEB64"]
	12 -. Codeptr .-> 23
	14["cond__207 m_isMemory64"]
	11 --> 14
	31{{"Sϕ Codeptr "}}
	14 --> 31
	23 --> 31
	15 --> 31
`;
window.traces["F64_LOAD"]["schedulerMermaid"] = ''
window.traces["F64_LOAD"]["schedulerMermaid__raw"] = ''
window.traces["F64_LOAD"]["schedulerMermaid"] += `<pre class='graph'>graph TD
subgraph block_197["Block 197"]
	direction TB
	b197_1[\\"Finish"/]
end
phi_199 --> block_197
subgraph phi_199["Phi 199"]
	p199_32{{"Sϕ Stack "}}
	p199_31{{"Sϕ Codeptr "}}
end
block_200 --> phi_199
block_201 --> phi_199
subgraph block_200["Block 200"]
	direction TB
	b200_24["index pop_u64"]
	b200_28["val mach_readMemory64_f64"]
	b200_30["eff__208 push_f64"]
	b200_23["offset imm_readULEB64"]
	b200_24 --> b200_28
	b200_28 --> b200_30
	b200_30 --> b200_23
end
branch_198 --> block_200
subgraph branch_198["Branch 198"]
	br198_14["cond__207 m_isMemory64"]

end
block_202 --> branch_198
subgraph block_202["Block 202"]
	direction TB
	b202_14["cond__207 m_isMemory64"]
end
phi_204 --> block_202
subgraph phi_204["Phi 204"]
	p204_12{{"Sϕ Codeptr "}}
	p204_12{{"Sϕ Codeptr "}}
	p204_12{{"Sϕ Codeptr "}}
	p204_12{{"Sϕ Codeptr "}}
	p204_11{"memindex ϕ"}
	p204_11{"memindex ϕ"}
	p204_11{"memindex ϕ"}
	p204_11{"memindex ϕ"}
	p204_11{"memindex ϕ"}
	p204_11{"memindex ϕ"}
	p204_12{{"Sϕ Codeptr "}}
	p204_12{{"Sϕ Codeptr "}}
	p204_12{{"Sϕ Codeptr "}}
	p204_12{{"Sϕ Codeptr "}}
end
block_205 --> phi_204
block_206 --> phi_204
subgraph block_205["Block 205"]
	direction TB
	b205_10["memindex__220 imm_readULEB32"]
end
branch_203 --> block_205
subgraph branch_203["Branch 203"]
	br203_9["cond__219 u8.!="]

end
block_207 --> branch_203
subgraph block_207["Block 207"]
	direction TB
	b207_0[/"Start"\\]
	b207_6["arg__224 0x40u8"]
	b207_5["arg__222 0"]
	b207_8["arg__221 u8.&"]
	b207_9["cond__219 u8.!="]
	b207_0 --> b207_6
	b207_6 --> b207_5
	b207_5 --> b207_8
	b207_8 --> b207_9
end
subgraph block_206["Block 206"]
	direction TB
	b206_4["memindex__226 0u"]
	b206_3["flags imm_readU8"]
	b206_4 --> b206_3
end
branch_203 --> block_206
subgraph block_201["Block 201"]
	direction TB
	b201_16["index pop_u32"]
	b201_20["val mach_readMemory32_f64"]
	b201_22["eff__213 push_f64"]
	b201_15["offset imm_readULEB32"]
	b201_16 --> b201_20
	b201_20 --> b201_22
	b201_22 --> b201_15
end
branch_198 --> block_201

</pre>`;
window.traces["F64_LOAD"]["schedulerMermaid__raw"] += `graph TD
subgraph block_197["Block 197"]
	direction TB
	b197_1[\\"Finish"/]
end
phi_199 --> block_197
subgraph phi_199["Phi 199"]
	p199_32{{"Sϕ Stack "}}
	p199_31{{"Sϕ Codeptr "}}
end
block_200 --> phi_199
block_201 --> phi_199
subgraph block_200["Block 200"]
	direction TB
	b200_24["index pop_u64"]
	b200_28["val mach_readMemory64_f64"]
	b200_30["eff__208 push_f64"]
	b200_23["offset imm_readULEB64"]
	b200_24 --> b200_28
	b200_28 --> b200_30
	b200_30 --> b200_23
end
branch_198 --> block_200
subgraph branch_198["Branch 198"]
	br198_14["cond__207 m_isMemory64"]

end
block_202 --> branch_198
subgraph block_202["Block 202"]
	direction TB
	b202_14["cond__207 m_isMemory64"]
end
phi_204 --> block_202
subgraph phi_204["Phi 204"]
	p204_12{{"Sϕ Codeptr "}}
	p204_12{{"Sϕ Codeptr "}}
	p204_12{{"Sϕ Codeptr "}}
	p204_12{{"Sϕ Codeptr "}}
	p204_11{"memindex ϕ"}
	p204_11{"memindex ϕ"}
	p204_11{"memindex ϕ"}
	p204_11{"memindex ϕ"}
	p204_11{"memindex ϕ"}
	p204_11{"memindex ϕ"}
	p204_12{{"Sϕ Codeptr "}}
	p204_12{{"Sϕ Codeptr "}}
	p204_12{{"Sϕ Codeptr "}}
	p204_12{{"Sϕ Codeptr "}}
end
block_205 --> phi_204
block_206 --> phi_204
subgraph block_205["Block 205"]
	direction TB
	b205_10["memindex__220 imm_readULEB32"]
end
branch_203 --> block_205
subgraph branch_203["Branch 203"]
	br203_9["cond__219 u8.!="]

end
block_207 --> branch_203
subgraph block_207["Block 207"]
	direction TB
	b207_0[/"Start"\\]
	b207_6["arg__224 0x40u8"]
	b207_5["arg__222 0"]
	b207_8["arg__221 u8.&"]
	b207_9["cond__219 u8.!="]
	b207_0 --> b207_6
	b207_6 --> b207_5
	b207_5 --> b207_8
	b207_8 --> b207_9
end
subgraph block_206["Block 206"]
	direction TB
	b206_4["memindex__226 0u"]
	b206_3["flags imm_readU8"]
	b206_4 --> b206_3
end
branch_203 --> block_206
subgraph block_201["Block 201"]
	direction TB
	b201_16["index pop_u32"]
	b201_20["val mach_readMemory32_f64"]
	b201_22["eff__213 push_f64"]
	b201_15["offset imm_readULEB32"]
	b201_16 --> b201_20
	b201_20 --> b201_22
	b201_22 --> b201_15
end
branch_198 --> block_201

`;
window.traces["F64_LOAD"]["unLEM"] = ''
window.traces["F64_LOAD"]["unLEM__raw"] = ''
window.traces["F64_LOAD"]["unLEM"] += `<pre class='graph'>---
config:
  layout: elk
---
graph TD
	1[\\"Finish"/]
	31 -. Codeptr .-> 1
	32 -. Stack .-> 1
	0 -. Trap Locals Globals Tables Memory Extra .-> 1
	0[/"Start"\\]
	32{{"Sϕ Stack "}}
	14 --> 32
	30 --> 32
	22 --> 32
	22["eff__213 push_f64"]
	20 --> 22
	16 -. Stack .-> 22
	16["index pop_u32"]
	0 -. Stack .-> 16
	20["val mach_readMemory32_f64"]
	11 --> 20
	16 --> 20
	15 --> 20
	15["offset imm_readULEB32"]
	12 -. Codeptr .-> 15
	12{{"Sϕ Codeptr "}}
	9 --> 12
	10 --> 12
	3 --> 12
	3["flags imm_readU8"]
	0 -. Codeptr .-> 3
	10["memindex__220 imm_readULEB32"]
	3 -. Codeptr .-> 10
	9["cond__219 u8.!="]
	8 --> 9
	5 --> 9
	5["arg__222 0"]
	8["arg__221 u8.&"]
	3 --> 8
	6 --> 8
	6["arg__224 0x40u8"]
	11{"memindex ϕ"}
	9 --> 11
	10 --> 11
	4 --> 11
	4["memindex__226 0u"]
	30["eff__208 push_f64"]
	28 --> 30
	24 -. Stack .-> 30
	24["index pop_u64"]
	0 -. Stack .-> 24
	28["val mach_readMemory64_f64"]
	11 --> 28
	24 --> 28
	23 --> 28
	23["offset imm_readULEB64"]
	12 -. Codeptr .-> 23
	14["cond__207 m_isMemory64"]
	11 --> 14
	31{{"Sϕ Codeptr "}}
	14 --> 31
	23 --> 31
	15 --> 31
</pre>`;
window.traces["F64_LOAD"]["unLEM__raw"] += `---
config:
  layout: elk
---
graph TD
	1[\\"Finish"/]
	31 -. Codeptr .-> 1
	32 -. Stack .-> 1
	0 -. Trap Locals Globals Tables Memory Extra .-> 1
	0[/"Start"\\]
	32{{"Sϕ Stack "}}
	14 --> 32
	30 --> 32
	22 --> 32
	22["eff__213 push_f64"]
	20 --> 22
	16 -. Stack .-> 22
	16["index pop_u32"]
	0 -. Stack .-> 16
	20["val mach_readMemory32_f64"]
	11 --> 20
	16 --> 20
	15 --> 20
	15["offset imm_readULEB32"]
	12 -. Codeptr .-> 15
	12{{"Sϕ Codeptr "}}
	9 --> 12
	10 --> 12
	3 --> 12
	3["flags imm_readU8"]
	0 -. Codeptr .-> 3
	10["memindex__220 imm_readULEB32"]
	3 -. Codeptr .-> 10
	9["cond__219 u8.!="]
	8 --> 9
	5 --> 9
	5["arg__222 0"]
	8["arg__221 u8.&"]
	3 --> 8
	6 --> 8
	6["arg__224 0x40u8"]
	11{"memindex ϕ"}
	9 --> 11
	10 --> 11
	4 --> 11
	4["memindex__226 0u"]
	30["eff__208 push_f64"]
	28 --> 30
	24 -. Stack .-> 30
	24["index pop_u64"]
	0 -. Stack .-> 24
	28["val mach_readMemory64_f64"]
	11 --> 28
	24 --> 28
	23 --> 28
	23["offset imm_readULEB64"]
	12 -. Codeptr .-> 23
	14["cond__207 m_isMemory64"]
	11 --> 14
	31{{"Sϕ Codeptr "}}
	14 --> 31
	23 --> 31
	15 --> 31
`;
window.traces["F64_LOAD"]["unlem_schedule"] = ''
window.traces["F64_LOAD"]["unlem_schedule__raw"] = ''
window.traces["F64_LOAD"]["unlem_schedule"] += `<pre class=''>def flags = imm_readU8();
def arg__224 : byte = 0x40u8;
def arg__221 = u8.&(flags, arg__224);
def arg__222 : byte = 0;
def cond__219 = u8.!=(arg__221, arg__222);
var memindex: u32;
if (cond__219) {
	def memindex__220 = imm_readULEB32();
} else {
	def memindex__226 : u32 = 0u;
}
// phis: memindex <- memindex__220; memindex <- memindex__226; 
def cond__207 = m_isMemory64(memindex);
if (cond__207) {
	def offset = imm_readULEB64();
	def index = pop_u64();
	def val = mach_readMemory64_f64(memindex, index, offset);
	def eff__208 = push_f64(val);
} else {
	def offset = imm_readULEB32();
	def index = pop_u32();
	def val = mach_readMemory32_f64(memindex, index, offset);
	def eff__213 = push_f64(val);
}
// phis: 
</pre>`;
window.traces["F64_LOAD"]["unlem_schedule__raw"] += `def flags = imm_readU8();
def arg__224 : byte = 0x40u8;
def arg__221 = u8.&(flags, arg__224);
def arg__222 : byte = 0;
def cond__219 = u8.!=(arg__221, arg__222);
var memindex: u32;
if (cond__219) {
	def memindex__220 = imm_readULEB32();
} else {
	def memindex__226 : u32 = 0u;
}
// phis: memindex <- memindex__220; memindex <- memindex__226; 
def cond__207 = m_isMemory64(memindex);
if (cond__207) {
	def offset = imm_readULEB64();
	def index = pop_u64();
	def val = mach_readMemory64_f64(memindex, index, offset);
	def eff__208 = push_f64(val);
} else {
	def offset = imm_readULEB32();
	def index = pop_u32();
	def val = mach_readMemory32_f64(memindex, index, offset);
	def eff__213 = push_f64(val);
}
// phis: 
`;
window.traces["F64_LOAD"]["spytial_ul"] = ''
window.traces["F64_LOAD"]["spytial_ul__raw"] = ''
window.traces["F64_LOAD"]["spytial_ul"] += `<pre class=''>{
"atoms": [
{
"id": "node_1",
"type": "finish",
"label": "Finish"
},
{
"id": "node_31",
"type": "state_phi",
"label": "StatePhi [m_isMemory64 [cond__207]]"
},
{
"id": "node_32",
"type": "state_phi",
"label": "StatePhi [m_isMemory64 [cond__207]]"
},
{
"id": "node_0",
"type": "start",
"label": "Start"
},
{
"id": "node_14",
"type": "intrinsic",
"label": "m_isMemory64 [cond__207]"
},
{
"id": "node_23",
"type": "intrinsic",
"label": "imm_readULEB64 [offset]"
},
{
"id": "node_15",
"type": "intrinsic",
"label": "imm_readULEB32 [offset]"
},
{
"id": "node_30",
"type": "intrinsic",
"label": "push_f64 [eff__208]"
},
{
"id": "node_22",
"type": "intrinsic",
"label": "push_f64 [eff__213]"
},
{
"id": "node_11",
"type": "phi",
"label": "Phi"
},
{
"id": "node_12",
"type": "state_phi",
"label": "StatePhi [u8.!= [cond__219]]"
},
{
"id": "node_28",
"type": "intrinsic",
"label": "mach_readMemory64_f64 [val]"
},
{
"id": "node_24",
"type": "intrinsic",
"label": "pop_u64 [index]"
},
{
"id": "node_20",
"type": "intrinsic",
"label": "mach_readMemory32_f64 [val]"
},
{
"id": "node_16",
"type": "intrinsic",
"label": "pop_u32 [index]"
},
{
"id": "node_9",
"type": "intrinsic",
"label": "u8.!= [cond__219]"
},
{
"id": "node_10",
"type": "intrinsic",
"label": "imm_readULEB32 [memindex__220]"
},
{
"id": "node_4",
"type": "lit",
"label": "0u"
},
{
"id": "node_3",
"type": "intrinsic",
"label": "imm_readU8 [flags]"
},
{
"id": "node_8",
"type": "intrinsic",
"label": "u8.& [arg__221]"
},
{
"id": "node_5",
"type": "lit",
"label": "0"
},
{
"id": "node_6",
"type": "lit",
"label": "0x40u8"
}
],
"relations": [
{
"id": "uses",
"name": "Uses",
"types": ["sea_node", "sea_node"],
"tuples": [
{
"atoms": ["node_14", "node_11"],
"types": ["intrinsic", "phi"]
},
{
"atoms": ["node_30", "node_28"],
"types": ["intrinsic", "intrinsic"]
},
{
"atoms": ["node_22", "node_20"],
"types": ["intrinsic", "intrinsic"]
},
{
"atoms": ["node_28", "node_11"],
"types": ["intrinsic", "phi"]
},
{
"atoms": ["node_28", "node_24"],
"types": ["intrinsic", "intrinsic"]
},
{
"atoms": ["node_28", "node_23"],
"types": ["intrinsic", "intrinsic"]
},
{
"atoms": ["node_20", "node_11"],
"types": ["intrinsic", "phi"]
},
{
"atoms": ["node_20", "node_16"],
"types": ["intrinsic", "intrinsic"]
},
{
"atoms": ["node_20", "node_15"],
"types": ["intrinsic", "intrinsic"]
},
{
"atoms": ["node_9", "node_8"],
"types": ["intrinsic", "intrinsic"]
},
{
"atoms": ["node_9", "node_5"],
"types": ["intrinsic", "lit"]
},
{
"atoms": ["node_8", "node_3"],
"types": ["intrinsic", "intrinsic"]
},
{
"atoms": ["node_8", "node_6"],
"types": ["intrinsic", "lit"]
}
]
},
{
"id": "state_uses",
"name": "StateUses",
"types": ["sea_node", "sea_node"],
"tuples": [
{
"atoms": ["node_1", "node_31"],
"types": ["finish", "state_phi"]
},
{
"atoms": ["node_1", "node_32"],
"types": ["finish", "state_phi"]
},
{
"atoms": ["node_1", "node_0"],
"types": ["finish", "start"]
},
{
"atoms": ["node_23", "node_12"],
"types": ["intrinsic", "state_phi"]
},
{
"atoms": ["node_15", "node_12"],
"types": ["intrinsic", "state_phi"]
},
{
"atoms": ["node_30", "node_24"],
"types": ["intrinsic", "intrinsic"]
},
{
"atoms": ["node_22", "node_16"],
"types": ["intrinsic", "intrinsic"]
},
{
"atoms": ["node_24", "node_0"],
"types": ["intrinsic", "start"]
},
{
"atoms": ["node_16", "node_0"],
"types": ["intrinsic", "start"]
},
{
"atoms": ["node_10", "node_3"],
"types": ["intrinsic", "intrinsic"]
},
{
"atoms": ["node_3", "node_0"],
"types": ["intrinsic", "start"]
}
]
},
{
"id": "phi_cond",
"name": "PhiCond",
"types": ["sea_node", "sea_node"],
"tuples": [
{
"atoms": ["node_31", "node_14"],
"types": ["state_phi", "intrinsic"]
},
{
"atoms": ["node_32", "node_14"],
"types": ["state_phi", "intrinsic"]
},
{
"atoms": ["node_11", "node_9"],
"types": ["phi", "intrinsic"]
},
{
"atoms": ["node_12", "node_9"],
"types": ["state_phi", "intrinsic"]
}
]
},
{
"id": "phi_true",
"name": "PhiTrue",
"types": ["sea_node", "sea_node"],
"tuples": [
{
"atoms": ["node_31", "node_23"],
"types": ["state_phi", "intrinsic"]
},
{
"atoms": ["node_32", "node_30"],
"types": ["state_phi", "intrinsic"]
},
{
"atoms": ["node_11", "node_10"],
"types": ["phi", "intrinsic"]
},
{
"atoms": ["node_12", "node_10"],
"types": ["state_phi", "intrinsic"]
}
]
},
{
"id": "phi_false",
"name": "PhiFalse",
"types": ["sea_node", "sea_node"],
"tuples": [
{
"atoms": ["node_31", "node_15"],
"types": ["state_phi", "intrinsic"]
},
{
"atoms": ["node_32", "node_22"],
"types": ["state_phi", "intrinsic"]
},
{
"atoms": ["node_11", "node_4"],
"types": ["phi", "lit"]
},
{
"atoms": ["node_12", "node_3"],
"types": ["state_phi", "intrinsic"]
}
]
}
]
}</pre>`;
window.traces["F64_LOAD"]["spytial_ul__raw"] += `{
"atoms": [
{
"id": "node_1",
"type": "finish",
"label": "Finish"
},
{
"id": "node_31",
"type": "state_phi",
"label": "StatePhi [m_isMemory64 [cond__207]]"
},
{
"id": "node_32",
"type": "state_phi",
"label": "StatePhi [m_isMemory64 [cond__207]]"
},
{
"id": "node_0",
"type": "start",
"label": "Start"
},
{
"id": "node_14",
"type": "intrinsic",
"label": "m_isMemory64 [cond__207]"
},
{
"id": "node_23",
"type": "intrinsic",
"label": "imm_readULEB64 [offset]"
},
{
"id": "node_15",
"type": "intrinsic",
"label": "imm_readULEB32 [offset]"
},
{
"id": "node_30",
"type": "intrinsic",
"label": "push_f64 [eff__208]"
},
{
"id": "node_22",
"type": "intrinsic",
"label": "push_f64 [eff__213]"
},
{
"id": "node_11",
"type": "phi",
"label": "Phi"
},
{
"id": "node_12",
"type": "state_phi",
"label": "StatePhi [u8.!= [cond__219]]"
},
{
"id": "node_28",
"type": "intrinsic",
"label": "mach_readMemory64_f64 [val]"
},
{
"id": "node_24",
"type": "intrinsic",
"label": "pop_u64 [index]"
},
{
"id": "node_20",
"type": "intrinsic",
"label": "mach_readMemory32_f64 [val]"
},
{
"id": "node_16",
"type": "intrinsic",
"label": "pop_u32 [index]"
},
{
"id": "node_9",
"type": "intrinsic",
"label": "u8.!= [cond__219]"
},
{
"id": "node_10",
"type": "intrinsic",
"label": "imm_readULEB32 [memindex__220]"
},
{
"id": "node_4",
"type": "lit",
"label": "0u"
},
{
"id": "node_3",
"type": "intrinsic",
"label": "imm_readU8 [flags]"
},
{
"id": "node_8",
"type": "intrinsic",
"label": "u8.& [arg__221]"
},
{
"id": "node_5",
"type": "lit",
"label": "0"
},
{
"id": "node_6",
"type": "lit",
"label": "0x40u8"
}
],
"relations": [
{
"id": "uses",
"name": "Uses",
"types": ["sea_node", "sea_node"],
"tuples": [
{
"atoms": ["node_14", "node_11"],
"types": ["intrinsic", "phi"]
},
{
"atoms": ["node_30", "node_28"],
"types": ["intrinsic", "intrinsic"]
},
{
"atoms": ["node_22", "node_20"],
"types": ["intrinsic", "intrinsic"]
},
{
"atoms": ["node_28", "node_11"],
"types": ["intrinsic", "phi"]
},
{
"atoms": ["node_28", "node_24"],
"types": ["intrinsic", "intrinsic"]
},
{
"atoms": ["node_28", "node_23"],
"types": ["intrinsic", "intrinsic"]
},
{
"atoms": ["node_20", "node_11"],
"types": ["intrinsic", "phi"]
},
{
"atoms": ["node_20", "node_16"],
"types": ["intrinsic", "intrinsic"]
},
{
"atoms": ["node_20", "node_15"],
"types": ["intrinsic", "intrinsic"]
},
{
"atoms": ["node_9", "node_8"],
"types": ["intrinsic", "intrinsic"]
},
{
"atoms": ["node_9", "node_5"],
"types": ["intrinsic", "lit"]
},
{
"atoms": ["node_8", "node_3"],
"types": ["intrinsic", "intrinsic"]
},
{
"atoms": ["node_8", "node_6"],
"types": ["intrinsic", "lit"]
}
]
},
{
"id": "state_uses",
"name": "StateUses",
"types": ["sea_node", "sea_node"],
"tuples": [
{
"atoms": ["node_1", "node_31"],
"types": ["finish", "state_phi"]
},
{
"atoms": ["node_1", "node_32"],
"types": ["finish", "state_phi"]
},
{
"atoms": ["node_1", "node_0"],
"types": ["finish", "start"]
},
{
"atoms": ["node_23", "node_12"],
"types": ["intrinsic", "state_phi"]
},
{
"atoms": ["node_15", "node_12"],
"types": ["intrinsic", "state_phi"]
},
{
"atoms": ["node_30", "node_24"],
"types": ["intrinsic", "intrinsic"]
},
{
"atoms": ["node_22", "node_16"],
"types": ["intrinsic", "intrinsic"]
},
{
"atoms": ["node_24", "node_0"],
"types": ["intrinsic", "start"]
},
{
"atoms": ["node_16", "node_0"],
"types": ["intrinsic", "start"]
},
{
"atoms": ["node_10", "node_3"],
"types": ["intrinsic", "intrinsic"]
},
{
"atoms": ["node_3", "node_0"],
"types": ["intrinsic", "start"]
}
]
},
{
"id": "phi_cond",
"name": "PhiCond",
"types": ["sea_node", "sea_node"],
"tuples": [
{
"atoms": ["node_31", "node_14"],
"types": ["state_phi", "intrinsic"]
},
{
"atoms": ["node_32", "node_14"],
"types": ["state_phi", "intrinsic"]
},
{
"atoms": ["node_11", "node_9"],
"types": ["phi", "intrinsic"]
},
{
"atoms": ["node_12", "node_9"],
"types": ["state_phi", "intrinsic"]
}
]
},
{
"id": "phi_true",
"name": "PhiTrue",
"types": ["sea_node", "sea_node"],
"tuples": [
{
"atoms": ["node_31", "node_23"],
"types": ["state_phi", "intrinsic"]
},
{
"atoms": ["node_32", "node_30"],
"types": ["state_phi", "intrinsic"]
},
{
"atoms": ["node_11", "node_10"],
"types": ["phi", "intrinsic"]
},
{
"atoms": ["node_12", "node_10"],
"types": ["state_phi", "intrinsic"]
}
]
},
{
"id": "phi_false",
"name": "PhiFalse",
"types": ["sea_node", "sea_node"],
"tuples": [
{
"atoms": ["node_31", "node_15"],
"types": ["state_phi", "intrinsic"]
},
{
"atoms": ["node_32", "node_22"],
"types": ["state_phi", "intrinsic"]
},
{
"atoms": ["node_11", "node_4"],
"types": ["phi", "lit"]
},
{
"atoms": ["node_12", "node_3"],
"types": ["state_phi", "intrinsic"]
}
]
}
]
}`;
window.traces["F64_LOAD"]["unlem_scheduler"] = ''
window.traces["F64_LOAD"]["unlem_scheduler__raw"] = ''
window.traces["F64_LOAD"]["unlem_scheduler"] += `<pre class='graph'>graph TD
subgraph block_208["Block 208"]
	direction TB
	b208_1[\\"Finish"/]
end
phi_210 --> block_208
subgraph phi_210["Phi 210"]
	p210_32{{"Sϕ Stack "}}
	p210_31{{"Sϕ Codeptr "}}
end
block_211 --> phi_210
block_212 --> phi_210
subgraph block_211["Block 211"]
	direction TB
	b211_24["index pop_u64"]
	b211_28["val mach_readMemory64_f64"]
	b211_30["eff__208 push_f64"]
	b211_23["offset imm_readULEB64"]
	b211_24 --> b211_28
	b211_28 --> b211_30
	b211_30 --> b211_23
end
branch_209 --> block_211
subgraph branch_209["Branch 209"]
	br209_14["cond__207 m_isMemory64"]

end
block_213 --> branch_209
subgraph block_213["Block 213"]
	direction TB
	b213_14["cond__207 m_isMemory64"]
end
phi_215 --> block_213
subgraph phi_215["Phi 215"]
	p215_12{{"Sϕ Codeptr "}}
	p215_12{{"Sϕ Codeptr "}}
	p215_12{{"Sϕ Codeptr "}}
	p215_12{{"Sϕ Codeptr "}}
	p215_11{"memindex ϕ"}
	p215_11{"memindex ϕ"}
	p215_11{"memindex ϕ"}
	p215_11{"memindex ϕ"}
	p215_11{"memindex ϕ"}
	p215_11{"memindex ϕ"}
	p215_12{{"Sϕ Codeptr "}}
	p215_12{{"Sϕ Codeptr "}}
	p215_12{{"Sϕ Codeptr "}}
	p215_12{{"Sϕ Codeptr "}}
end
block_216 --> phi_215
block_217 --> phi_215
subgraph block_216["Block 216"]
	direction TB
	b216_10["memindex__220 imm_readULEB32"]
end
branch_214 --> block_216
subgraph branch_214["Branch 214"]
	br214_9["cond__219 u8.!="]

end
block_218 --> branch_214
subgraph block_218["Block 218"]
	direction TB
	b218_0[/"Start"\\]
	b218_6["arg__224 0x40u8"]
	b218_5["arg__222 0"]
	b218_8["arg__221 u8.&"]
	b218_9["cond__219 u8.!="]
	b218_0 --> b218_6
	b218_6 --> b218_5
	b218_5 --> b218_8
	b218_8 --> b218_9
end
subgraph block_217["Block 217"]
	direction TB
	b217_4["memindex__226 0u"]
	b217_3["flags imm_readU8"]
	b217_4 --> b217_3
end
branch_214 --> block_217
subgraph block_212["Block 212"]
	direction TB
	b212_16["index pop_u32"]
	b212_20["val mach_readMemory32_f64"]
	b212_22["eff__213 push_f64"]
	b212_15["offset imm_readULEB32"]
	b212_16 --> b212_20
	b212_20 --> b212_22
	b212_22 --> b212_15
end
branch_209 --> block_212

</pre>`;
window.traces["F64_LOAD"]["unlem_scheduler__raw"] += `graph TD
subgraph block_208["Block 208"]
	direction TB
	b208_1[\\"Finish"/]
end
phi_210 --> block_208
subgraph phi_210["Phi 210"]
	p210_32{{"Sϕ Stack "}}
	p210_31{{"Sϕ Codeptr "}}
end
block_211 --> phi_210
block_212 --> phi_210
subgraph block_211["Block 211"]
	direction TB
	b211_24["index pop_u64"]
	b211_28["val mach_readMemory64_f64"]
	b211_30["eff__208 push_f64"]
	b211_23["offset imm_readULEB64"]
	b211_24 --> b211_28
	b211_28 --> b211_30
	b211_30 --> b211_23
end
branch_209 --> block_211
subgraph branch_209["Branch 209"]
	br209_14["cond__207 m_isMemory64"]

end
block_213 --> branch_209
subgraph block_213["Block 213"]
	direction TB
	b213_14["cond__207 m_isMemory64"]
end
phi_215 --> block_213
subgraph phi_215["Phi 215"]
	p215_12{{"Sϕ Codeptr "}}
	p215_12{{"Sϕ Codeptr "}}
	p215_12{{"Sϕ Codeptr "}}
	p215_12{{"Sϕ Codeptr "}}
	p215_11{"memindex ϕ"}
	p215_11{"memindex ϕ"}
	p215_11{"memindex ϕ"}
	p215_11{"memindex ϕ"}
	p215_11{"memindex ϕ"}
	p215_11{"memindex ϕ"}
	p215_12{{"Sϕ Codeptr "}}
	p215_12{{"Sϕ Codeptr "}}
	p215_12{{"Sϕ Codeptr "}}
	p215_12{{"Sϕ Codeptr "}}
end
block_216 --> phi_215
block_217 --> phi_215
subgraph block_216["Block 216"]
	direction TB
	b216_10["memindex__220 imm_readULEB32"]
end
branch_214 --> block_216
subgraph branch_214["Branch 214"]
	br214_9["cond__219 u8.!="]

end
block_218 --> branch_214
subgraph block_218["Block 218"]
	direction TB
	b218_0[/"Start"\\]
	b218_6["arg__224 0x40u8"]
	b218_5["arg__222 0"]
	b218_8["arg__221 u8.&"]
	b218_9["cond__219 u8.!="]
	b218_0 --> b218_6
	b218_6 --> b218_5
	b218_5 --> b218_8
	b218_8 --> b218_9
end
subgraph block_217["Block 217"]
	direction TB
	b217_4["memindex__226 0u"]
	b217_3["flags imm_readU8"]
	b217_4 --> b217_3
end
branch_214 --> block_217
subgraph block_212["Block 212"]
	direction TB
	b212_16["index pop_u32"]
	b212_20["val mach_readMemory32_f64"]
	b212_22["eff__213 push_f64"]
	b212_15["offset imm_readULEB32"]
	b212_16 --> b212_20
	b212_20 --> b212_22
	b212_22 --> b212_15
end
branch_209 --> block_212

`;
window.traces["F64_LOAD"]["unlem_pretty"] = ''
window.traces["F64_LOAD"]["unlem_pretty__raw"] = ''
window.traces["F64_LOAD"]["unlem_pretty"] += `<pre class=''>def flags = imm_readU8();
var memindex: u32;
if (u8.!=(u8.&(flags, 0x40u8), 0)) {
	memindex = imm_readULEB32();
} else {
	memindex = 0u;
}
def cond = m_isMemory64(memindex);
if (cond) {
	def offset = imm_readULEB64();
	def index = pop_u64();
	def val = mach_readMemory64_f64(memindex, index, offset);
	push_f64(val);
} else {
	def offset = imm_readULEB32();
	def index = pop_u32();
	def val = mach_readMemory32_f64(memindex, index, offset);
	push_f64(val);
}
</pre>`;
window.traces["F64_LOAD"]["unlem_pretty__raw"] += `def flags = imm_readU8();
var memindex: u32;
if (u8.!=(u8.&(flags, 0x40u8), 0)) {
	memindex = imm_readULEB32();
} else {
	memindex = 0u;
}
def cond = m_isMemory64(memindex);
if (cond) {
	def offset = imm_readULEB64();
	def index = pop_u64();
	def val = mach_readMemory64_f64(memindex, index, offset);
	push_f64(val);
} else {
	def offset = imm_readULEB32();
	def index = pop_u32();
	def val = mach_readMemory32_f64(memindex, index, offset);
	push_f64(val);
}
`;
window.traces["F64_LOAD"]["constUnLEM"] = ''
window.traces["F64_LOAD"]["constUnLEM__raw"] = ''
window.traces["F64_LOAD"]["constUnLEM"] += `<pre class='graph'>---
config:
  layout: elk
---
graph TD
	1[\\"Finish"/]
	31 -. Codeptr .-> 1
	32 -. Stack .-> 1
	0 -. Trap Locals Globals Tables Memory Extra .-> 1
	0[/"Start"\\]
	32{{"Sϕ Stack "}}
	14 --> 32
	30 --> 32
	22 --> 32
	22["eff__213 push_f64"]
	20 --> 22
	16 -. Stack .-> 22
	16["index pop_u32"]
	0 -. Stack .-> 16
	20["val mach_readMemory32_f64"]
	11 --> 20
	16 --> 20
	15 --> 20
	15["offset imm_readULEB32"]
	12 -. Codeptr .-> 15
	12{{"Sϕ Codeptr "}}
	9 --> 12
	10 --> 12
	3 --> 12
	3["flags imm_readU8"]
	0 -. Codeptr .-> 3
	10["memindex__220 imm_readULEB32"]
	3 -. Codeptr .-> 10
	9["cond__219 u8.!="]
	8 --> 9
	5 --> 9
	5["arg__222 0"]
	8["arg__221 u8.&"]
	3 --> 8
	6 --> 8
	6["arg__224 0x40u8"]
	11{"memindex ϕ"}
	9 --> 11
	10 --> 11
	4 --> 11
	4["memindex__226 0u"]
	30["eff__208 push_f64"]
	28 --> 30
	24 -. Stack .-> 30
	24["index pop_u64"]
	0 -. Stack .-> 24
	28["val mach_readMemory64_f64"]
	11 --> 28
	24 --> 28
	23 --> 28
	23["offset imm_readULEB64"]
	12 -. Codeptr .-> 23
	14["cond__207 m_isMemory64"]
	11 --> 14
	31{{"Sϕ Codeptr "}}
	14 --> 31
	23 --> 31
	15 --> 31
</pre>`;
window.traces["F64_LOAD"]["constUnLEM__raw"] += `---
config:
  layout: elk
---
graph TD
	1[\\"Finish"/]
	31 -. Codeptr .-> 1
	32 -. Stack .-> 1
	0 -. Trap Locals Globals Tables Memory Extra .-> 1
	0[/"Start"\\]
	32{{"Sϕ Stack "}}
	14 --> 32
	30 --> 32
	22 --> 32
	22["eff__213 push_f64"]
	20 --> 22
	16 -. Stack .-> 22
	16["index pop_u32"]
	0 -. Stack .-> 16
	20["val mach_readMemory32_f64"]
	11 --> 20
	16 --> 20
	15 --> 20
	15["offset imm_readULEB32"]
	12 -. Codeptr .-> 15
	12{{"Sϕ Codeptr "}}
	9 --> 12
	10 --> 12
	3 --> 12
	3["flags imm_readU8"]
	0 -. Codeptr .-> 3
	10["memindex__220 imm_readULEB32"]
	3 -. Codeptr .-> 10
	9["cond__219 u8.!="]
	8 --> 9
	5 --> 9
	5["arg__222 0"]
	8["arg__221 u8.&"]
	3 --> 8
	6 --> 8
	6["arg__224 0x40u8"]
	11{"memindex ϕ"}
	9 --> 11
	10 --> 11
	4 --> 11
	4["memindex__226 0u"]
	30["eff__208 push_f64"]
	28 --> 30
	24 -. Stack .-> 30
	24["index pop_u64"]
	0 -. Stack .-> 24
	28["val mach_readMemory64_f64"]
	11 --> 28
	24 --> 28
	23 --> 28
	23["offset imm_readULEB64"]
	12 -. Codeptr .-> 23
	14["cond__207 m_isMemory64"]
	11 --> 14
	31{{"Sϕ Codeptr "}}
	14 --> 31
	23 --> 31
	15 --> 31
`;
window.traces["F64_LOAD"]["chooseMerge"] = ''
window.traces["F64_LOAD"]["chooseMerge__raw"] = ''
window.traces["F64_LOAD"]["chooseMerge"] += `<pre class='graph'>---
config:
  layout: elk
---
graph TD
	1[\\"Finish"/]
	31 -. Codeptr .-> 1
	32 -. Stack .-> 1
	0 -. Trap Locals Globals Tables Memory Extra .-> 1
	0[/"Start"\\]
	32{{"Sϕ Stack "}}
	14 --> 32
	30 --> 32
	22 --> 32
	22["eff__213 push_f64"]
	20 --> 22
	16 -. Stack .-> 22
	16["index pop_u32"]
	0 -. Stack .-> 16
	20["val mach_readMemory32_f64"]
	11 --> 20
	16 --> 20
	15 --> 20
	15["offset imm_readULEB32"]
	12 -. Codeptr .-> 15
	12{{"Sϕ Codeptr "}}
	9 --> 12
	10 --> 12
	3 --> 12
	3["flags imm_readU8"]
	0 -. Codeptr .-> 3
	10["memindex__220 imm_readULEB32"]
	3 -. Codeptr .-> 10
	9["cond__219 u8.!="]
	8 --> 9
	5 --> 9
	5["arg__222 0"]
	8["arg__221 u8.&"]
	3 --> 8
	6 --> 8
	6["arg__224 0x40u8"]
	11{"memindex ϕ"}
	9 --> 11
	10 --> 11
	4 --> 11
	4["memindex__226 0u"]
	30["eff__208 push_f64"]
	28 --> 30
	24 -. Stack .-> 30
	24["index pop_u64"]
	0 -. Stack .-> 24
	28["val mach_readMemory64_f64"]
	11 --> 28
	24 --> 28
	23 --> 28
	23["offset imm_readULEB64"]
	12 -. Codeptr .-> 23
	14["cond__207 m_isMemory64"]
	11 --> 14
	31{{"Sϕ Codeptr "}}
	14 --> 31
	23 --> 31
	15 --> 31
</pre>`;
window.traces["F64_LOAD"]["chooseMerge__raw"] += `---
config:
  layout: elk
---
graph TD
	1[\\"Finish"/]
	31 -. Codeptr .-> 1
	32 -. Stack .-> 1
	0 -. Trap Locals Globals Tables Memory Extra .-> 1
	0[/"Start"\\]
	32{{"Sϕ Stack "}}
	14 --> 32
	30 --> 32
	22 --> 32
	22["eff__213 push_f64"]
	20 --> 22
	16 -. Stack .-> 22
	16["index pop_u32"]
	0 -. Stack .-> 16
	20["val mach_readMemory32_f64"]
	11 --> 20
	16 --> 20
	15 --> 20
	15["offset imm_readULEB32"]
	12 -. Codeptr .-> 15
	12{{"Sϕ Codeptr "}}
	9 --> 12
	10 --> 12
	3 --> 12
	3["flags imm_readU8"]
	0 -. Codeptr .-> 3
	10["memindex__220 imm_readULEB32"]
	3 -. Codeptr .-> 10
	9["cond__219 u8.!="]
	8 --> 9
	5 --> 9
	5["arg__222 0"]
	8["arg__221 u8.&"]
	3 --> 8
	6 --> 8
	6["arg__224 0x40u8"]
	11{"memindex ϕ"}
	9 --> 11
	10 --> 11
	4 --> 11
	4["memindex__226 0u"]
	30["eff__208 push_f64"]
	28 --> 30
	24 -. Stack .-> 30
	24["index pop_u64"]
	0 -. Stack .-> 24
	28["val mach_readMemory64_f64"]
	11 --> 28
	24 --> 28
	23 --> 28
	23["offset imm_readULEB64"]
	12 -. Codeptr .-> 23
	14["cond__207 m_isMemory64"]
	11 --> 14
	31{{"Sϕ Codeptr "}}
	14 --> 31
	23 --> 31
	15 --> 31
`;
window.traces["F64_LOAD"]["scheduled"] = ''
window.traces["F64_LOAD"]["scheduled__raw"] = ''
window.traces["F64_LOAD"]["scheduled"] += `<pre class=''>def flags = imm_readU8();
def arg__224 : byte = 0x40u8;
def arg__221 = u8.&(flags, arg__224);
def arg__222 : byte = 0;
def cond__219 = u8.!=(arg__221, arg__222);
var memindex: u32;
if (cond__219) {
	def memindex__220 = imm_readULEB32();
} else {
	def memindex__226 : u32 = 0u;
}
// phis: memindex <- memindex__220; memindex <- memindex__226; 
def cond__207 = m_isMemory64(memindex);
if (cond__207) {
	def offset = imm_readULEB64();
	def index = pop_u64();
	def val = mach_readMemory64_f64(memindex, index, offset);
	def eff__208 = push_f64(val);
} else {
	def offset = imm_readULEB32();
	def index = pop_u32();
	def val = mach_readMemory32_f64(memindex, index, offset);
	def eff__213 = push_f64(val);
}
// phis: 
</pre>`;
window.traces["F64_LOAD"]["scheduled__raw"] += `def flags = imm_readU8();
def arg__224 : byte = 0x40u8;
def arg__221 = u8.&(flags, arg__224);
def arg__222 : byte = 0;
def cond__219 = u8.!=(arg__221, arg__222);
var memindex: u32;
if (cond__219) {
	def memindex__220 = imm_readULEB32();
} else {
	def memindex__226 : u32 = 0u;
}
// phis: memindex <- memindex__220; memindex <- memindex__226; 
def cond__207 = m_isMemory64(memindex);
if (cond__207) {
	def offset = imm_readULEB64();
	def index = pop_u64();
	def val = mach_readMemory64_f64(memindex, index, offset);
	def eff__208 = push_f64(val);
} else {
	def offset = imm_readULEB32();
	def index = pop_u32();
	def val = mach_readMemory32_f64(memindex, index, offset);
	def eff__213 = push_f64(val);
}
// phis: 
`;
window.traces["F64_LOAD"]["pretty"] = ''
window.traces["F64_LOAD"]["pretty__raw"] = ''
window.traces["F64_LOAD"]["pretty"] += `<pre class=''>def flags = imm_readU8();
var memindex: u32;
if (u8.!=(u8.&(flags, 0x40u8), 0)) {
	memindex = imm_readULEB32();
} else {
	memindex = 0u;
}
def cond = m_isMemory64(memindex);
if (cond) {
	def offset = imm_readULEB64();
	def index = pop_u64();
	def val = mach_readMemory64_f64(memindex, index, offset);
	push_f64(val);
} else {
	def offset = imm_readULEB32();
	def index = pop_u32();
	def val = mach_readMemory32_f64(memindex, index, offset);
	push_f64(val);
}
</pre>`;
window.traces["F64_LOAD"]["pretty__raw"] += `def flags = imm_readU8();
var memindex: u32;
if (u8.!=(u8.&(flags, 0x40u8), 0)) {
	memindex = imm_readULEB32();
} else {
	memindex = 0u;
}
def cond = m_isMemory64(memindex);
if (cond) {
	def offset = imm_readULEB64();
	def index = pop_u64();
	def val = mach_readMemory64_f64(memindex, index, offset);
	push_f64(val);
} else {
	def offset = imm_readULEB32();
	def index = pop_u32();
	def val = mach_readMemory32_f64(memindex, index, offset);
	push_f64(val);
}
`;
window.traces["I32_LOAD8_S"] = {}
window.traces["I32_LOAD8_S"]["parsed"] = ''
window.traces["I32_LOAD8_S"]["parsed__raw"] = ''
window.traces["I32_LOAD8_S"]["parsed"] += `<pre class=''>def flags = imm_readU8();
def memindex : u32 = 0u;
def arg__244 : byte = 0;
def arg__246 : byte = 0x40u8;
def arg__245 = (flags);
def arg__243 = u8.&(arg__245, arg__246);
def cond__241 = u8.!=(arg__243, arg__244);
if (cond__241) {
	def memindex__242 = imm_readULEB32();
}
// phis: memindex <- memindex__242; 
def arg__240 = (memindex);
def cond__227 = m_isMemory64(arg__240);
if (cond__227) {
	def offset = imm_readULEB64();
	def index = pop_u64();
	def arg__233 = (offset);
	def arg__232 = (index);
	def arg__231 = (memindex);
	def val = mach_readMemory64_u8(arg__231, arg__232, arg__233);
	def arg__230 = (val);
	def extend = U32_extend8_s(arg__230);
	def arg__229 = (extend);
	def eff__228 = push_u32(arg__229);
} else {
	def offset = imm_readULEB32();
	def index = pop_u32();
	def arg__239 = (offset);
	def arg__238 = (index);
	def arg__237 = (memindex);
	def val = mach_readMemory32_u8(arg__237, arg__238, arg__239);
	def arg__236 = (val);
	def extend = U32_extend8_s(arg__236);
	def arg__235 = (extend);
	def eff__234 = push_u32(arg__235);
}
// phis: 
</pre>`;
window.traces["I32_LOAD8_S"]["parsed__raw"] += `def flags = imm_readU8();
def memindex : u32 = 0u;
def arg__244 : byte = 0;
def arg__246 : byte = 0x40u8;
def arg__245 = (flags);
def arg__243 = u8.&(arg__245, arg__246);
def cond__241 = u8.!=(arg__243, arg__244);
if (cond__241) {
	def memindex__242 = imm_readULEB32();
}
// phis: memindex <- memindex__242; 
def arg__240 = (memindex);
def cond__227 = m_isMemory64(arg__240);
if (cond__227) {
	def offset = imm_readULEB64();
	def index = pop_u64();
	def arg__233 = (offset);
	def arg__232 = (index);
	def arg__231 = (memindex);
	def val = mach_readMemory64_u8(arg__231, arg__232, arg__233);
	def arg__230 = (val);
	def extend = U32_extend8_s(arg__230);
	def arg__229 = (extend);
	def eff__228 = push_u32(arg__229);
} else {
	def offset = imm_readULEB32();
	def index = pop_u32();
	def arg__239 = (offset);
	def arg__238 = (index);
	def arg__237 = (memindex);
	def val = mach_readMemory32_u8(arg__237, arg__238, arg__239);
	def arg__236 = (val);
	def extend = U32_extend8_s(arg__236);
	def arg__235 = (extend);
	def eff__234 = push_u32(arg__235);
}
// phis: 
`;
window.traces["I32_LOAD8_S"]["raw"] = ''
window.traces["I32_LOAD8_S"]["raw__raw"] = ''
window.traces["I32_LOAD8_S"]["raw"] += `<pre class='graph'>---
config:
  layout: elk
---
graph TD
	1[\\"Finish"/]
	35 -. Codeptr .-> 1
	36 -. Stack .-> 1
	0 -. Trap Locals Globals Tables Memory Extra .-> 1
	0[/"Start"\\]
	36{{"Sϕ Stack "}}
	14 --> 36
	34 --> 36
	24 --> 36
	24["eff__234 push_u32"]
	22 --> 24
	16 -. Stack .-> 24
	16["index pop_u32"]
	0 -. Stack .-> 16
	22["extend U32_extend8_s"]
	20 --> 22
	20["val mach_readMemory32_u8"]
	11 --> 20
	16 --> 20
	15 --> 20
	15["offset imm_readULEB32"]
	12 -. Codeptr .-> 15
	12{{"Sϕ Codeptr "}}
	9 --> 12
	10 --> 12
	3 --> 12
	3["flags imm_readU8"]
	0 -. Codeptr .-> 3
	10["memindex__242 imm_readULEB32"]
	3 -. Codeptr .-> 10
	9["cond__241 u8.!="]
	8 --> 9
	5 --> 9
	5["arg__244 0"]
	8["arg__243 u8.&"]
	3 --> 8
	6 --> 8
	6["arg__246 0x40u8"]
	11{"memindex ϕ"}
	9 --> 11
	10 --> 11
	4 --> 11
	4["memindex__247 0u"]
	34["eff__228 push_u32"]
	32 --> 34
	26 -. Stack .-> 34
	26["index pop_u64"]
	0 -. Stack .-> 26
	32["extend U32_extend8_s"]
	30 --> 32
	30["val mach_readMemory64_u8"]
	11 --> 30
	26 --> 30
	25 --> 30
	25["offset imm_readULEB64"]
	12 -. Codeptr .-> 25
	14["cond__227 m_isMemory64"]
	11 --> 14
	35{{"Sϕ Codeptr "}}
	14 --> 35
	25 --> 35
	15 --> 35
</pre>`;
window.traces["I32_LOAD8_S"]["raw__raw"] += `---
config:
  layout: elk
---
graph TD
	1[\\"Finish"/]
	35 -. Codeptr .-> 1
	36 -. Stack .-> 1
	0 -. Trap Locals Globals Tables Memory Extra .-> 1
	0[/"Start"\\]
	36{{"Sϕ Stack "}}
	14 --> 36
	34 --> 36
	24 --> 36
	24["eff__234 push_u32"]
	22 --> 24
	16 -. Stack .-> 24
	16["index pop_u32"]
	0 -. Stack .-> 16
	22["extend U32_extend8_s"]
	20 --> 22
	20["val mach_readMemory32_u8"]
	11 --> 20
	16 --> 20
	15 --> 20
	15["offset imm_readULEB32"]
	12 -. Codeptr .-> 15
	12{{"Sϕ Codeptr "}}
	9 --> 12
	10 --> 12
	3 --> 12
	3["flags imm_readU8"]
	0 -. Codeptr .-> 3
	10["memindex__242 imm_readULEB32"]
	3 -. Codeptr .-> 10
	9["cond__241 u8.!="]
	8 --> 9
	5 --> 9
	5["arg__244 0"]
	8["arg__243 u8.&"]
	3 --> 8
	6 --> 8
	6["arg__246 0x40u8"]
	11{"memindex ϕ"}
	9 --> 11
	10 --> 11
	4 --> 11
	4["memindex__247 0u"]
	34["eff__228 push_u32"]
	32 --> 34
	26 -. Stack .-> 34
	26["index pop_u64"]
	0 -. Stack .-> 26
	32["extend U32_extend8_s"]
	30 --> 32
	30["val mach_readMemory64_u8"]
	11 --> 30
	26 --> 30
	25 --> 30
	25["offset imm_readULEB64"]
	12 -. Codeptr .-> 25
	14["cond__227 m_isMemory64"]
	11 --> 14
	35{{"Sϕ Codeptr "}}
	14 --> 35
	25 --> 35
	15 --> 35
`;
window.traces["I32_LOAD8_S"]["spytial"] = ''
window.traces["I32_LOAD8_S"]["spytial__raw"] = ''
window.traces["I32_LOAD8_S"]["spytial"] += `<pre class=''>{
"atoms": [
{
"id": "node_1",
"type": "finish",
"label": "Finish"
},
{
"id": "node_35",
"type": "state_phi",
"label": "StatePhi [m_isMemory64 [cond__227]]"
},
{
"id": "node_36",
"type": "state_phi",
"label": "StatePhi [m_isMemory64 [cond__227]]"
},
{
"id": "node_0",
"type": "start",
"label": "Start"
},
{
"id": "node_14",
"type": "intrinsic",
"label": "m_isMemory64 [cond__227]"
},
{
"id": "node_25",
"type": "intrinsic",
"label": "imm_readULEB64 [offset]"
},
{
"id": "node_15",
"type": "intrinsic",
"label": "imm_readULEB32 [offset]"
},
{
"id": "node_34",
"type": "intrinsic",
"label": "push_u32 [eff__228]"
},
{
"id": "node_24",
"type": "intrinsic",
"label": "push_u32 [eff__234]"
},
{
"id": "node_11",
"type": "phi",
"label": "Phi"
},
{
"id": "node_12",
"type": "state_phi",
"label": "StatePhi [u8.!= [cond__241]]"
},
{
"id": "node_32",
"type": "intrinsic",
"label": "U32_extend8_s [extend]"
},
{
"id": "node_26",
"type": "intrinsic",
"label": "pop_u64 [index]"
},
{
"id": "node_22",
"type": "intrinsic",
"label": "U32_extend8_s [extend]"
},
{
"id": "node_16",
"type": "intrinsic",
"label": "pop_u32 [index]"
},
{
"id": "node_9",
"type": "intrinsic",
"label": "u8.!= [cond__241]"
},
{
"id": "node_10",
"type": "intrinsic",
"label": "imm_readULEB32 [memindex__242]"
},
{
"id": "node_4",
"type": "lit",
"label": "0u"
},
{
"id": "node_3",
"type": "intrinsic",
"label": "imm_readU8 [flags]"
},
{
"id": "node_30",
"type": "intrinsic",
"label": "mach_readMemory64_u8 [val]"
},
{
"id": "node_20",
"type": "intrinsic",
"label": "mach_readMemory32_u8 [val]"
},
{
"id": "node_8",
"type": "intrinsic",
"label": "u8.& [arg__243]"
},
{
"id": "node_5",
"type": "lit",
"label": "0"
},
{
"id": "node_6",
"type": "lit",
"label": "0x40u8"
}
],
"relations": [
{
"id": "uses",
"name": "Uses",
"types": ["sea_node", "sea_node"],
"tuples": [
{
"atoms": ["node_14", "node_11"],
"types": ["intrinsic", "phi"]
},
{
"atoms": ["node_34", "node_32"],
"types": ["intrinsic", "intrinsic"]
},
{
"atoms": ["node_24", "node_22"],
"types": ["intrinsic", "intrinsic"]
},
{
"atoms": ["node_32", "node_30"],
"types": ["intrinsic", "intrinsic"]
},
{
"atoms": ["node_22", "node_20"],
"types": ["intrinsic", "intrinsic"]
},
{
"atoms": ["node_9", "node_8"],
"types": ["intrinsic", "intrinsic"]
},
{
"atoms": ["node_9", "node_5"],
"types": ["intrinsic", "lit"]
},
{
"atoms": ["node_30", "node_11"],
"types": ["intrinsic", "phi"]
},
{
"atoms": ["node_30", "node_26"],
"types": ["intrinsic", "intrinsic"]
},
{
"atoms": ["node_30", "node_25"],
"types": ["intrinsic", "intrinsic"]
},
{
"atoms": ["node_20", "node_11"],
"types": ["intrinsic", "phi"]
},
{
"atoms": ["node_20", "node_16"],
"types": ["intrinsic", "intrinsic"]
},
{
"atoms": ["node_20", "node_15"],
"types": ["intrinsic", "intrinsic"]
},
{
"atoms": ["node_8", "node_3"],
"types": ["intrinsic", "intrinsic"]
},
{
"atoms": ["node_8", "node_6"],
"types": ["intrinsic", "lit"]
}
]
},
{
"id": "state_uses",
"name": "StateUses",
"types": ["sea_node", "sea_node"],
"tuples": [
{
"atoms": ["node_1", "node_35"],
"types": ["finish", "state_phi"]
},
{
"atoms": ["node_1", "node_36"],
"types": ["finish", "state_phi"]
},
{
"atoms": ["node_1", "node_0"],
"types": ["finish", "start"]
},
{
"atoms": ["node_25", "node_12"],
"types": ["intrinsic", "state_phi"]
},
{
"atoms": ["node_15", "node_12"],
"types": ["intrinsic", "state_phi"]
},
{
"atoms": ["node_34", "node_26"],
"types": ["intrinsic", "intrinsic"]
},
{
"atoms": ["node_24", "node_16"],
"types": ["intrinsic", "intrinsic"]
},
{
"atoms": ["node_26", "node_0"],
"types": ["intrinsic", "start"]
},
{
"atoms": ["node_16", "node_0"],
"types": ["intrinsic", "start"]
},
{
"atoms": ["node_10", "node_3"],
"types": ["intrinsic", "intrinsic"]
},
{
"atoms": ["node_3", "node_0"],
"types": ["intrinsic", "start"]
}
]
},
{
"id": "phi_cond",
"name": "PhiCond",
"types": ["sea_node", "sea_node"],
"tuples": [
{
"atoms": ["node_35", "node_14"],
"types": ["state_phi", "intrinsic"]
},
{
"atoms": ["node_36", "node_14"],
"types": ["state_phi", "intrinsic"]
},
{
"atoms": ["node_11", "node_9"],
"types": ["phi", "intrinsic"]
},
{
"atoms": ["node_12", "node_9"],
"types": ["state_phi", "intrinsic"]
}
]
},
{
"id": "phi_true",
"name": "PhiTrue",
"types": ["sea_node", "sea_node"],
"tuples": [
{
"atoms": ["node_35", "node_25"],
"types": ["state_phi", "intrinsic"]
},
{
"atoms": ["node_36", "node_34"],
"types": ["state_phi", "intrinsic"]
},
{
"atoms": ["node_11", "node_10"],
"types": ["phi", "intrinsic"]
},
{
"atoms": ["node_12", "node_10"],
"types": ["state_phi", "intrinsic"]
}
]
},
{
"id": "phi_false",
"name": "PhiFalse",
"types": ["sea_node", "sea_node"],
"tuples": [
{
"atoms": ["node_35", "node_15"],
"types": ["state_phi", "intrinsic"]
},
{
"atoms": ["node_36", "node_24"],
"types": ["state_phi", "intrinsic"]
},
{
"atoms": ["node_11", "node_4"],
"types": ["phi", "lit"]
},
{
"atoms": ["node_12", "node_3"],
"types": ["state_phi", "intrinsic"]
}
]
}
]
}</pre>`;
window.traces["I32_LOAD8_S"]["spytial__raw"] += `{
"atoms": [
{
"id": "node_1",
"type": "finish",
"label": "Finish"
},
{
"id": "node_35",
"type": "state_phi",
"label": "StatePhi [m_isMemory64 [cond__227]]"
},
{
"id": "node_36",
"type": "state_phi",
"label": "StatePhi [m_isMemory64 [cond__227]]"
},
{
"id": "node_0",
"type": "start",
"label": "Start"
},
{
"id": "node_14",
"type": "intrinsic",
"label": "m_isMemory64 [cond__227]"
},
{
"id": "node_25",
"type": "intrinsic",
"label": "imm_readULEB64 [offset]"
},
{
"id": "node_15",
"type": "intrinsic",
"label": "imm_readULEB32 [offset]"
},
{
"id": "node_34",
"type": "intrinsic",
"label": "push_u32 [eff__228]"
},
{
"id": "node_24",
"type": "intrinsic",
"label": "push_u32 [eff__234]"
},
{
"id": "node_11",
"type": "phi",
"label": "Phi"
},
{
"id": "node_12",
"type": "state_phi",
"label": "StatePhi [u8.!= [cond__241]]"
},
{
"id": "node_32",
"type": "intrinsic",
"label": "U32_extend8_s [extend]"
},
{
"id": "node_26",
"type": "intrinsic",
"label": "pop_u64 [index]"
},
{
"id": "node_22",
"type": "intrinsic",
"label": "U32_extend8_s [extend]"
},
{
"id": "node_16",
"type": "intrinsic",
"label": "pop_u32 [index]"
},
{
"id": "node_9",
"type": "intrinsic",
"label": "u8.!= [cond__241]"
},
{
"id": "node_10",
"type": "intrinsic",
"label": "imm_readULEB32 [memindex__242]"
},
{
"id": "node_4",
"type": "lit",
"label": "0u"
},
{
"id": "node_3",
"type": "intrinsic",
"label": "imm_readU8 [flags]"
},
{
"id": "node_30",
"type": "intrinsic",
"label": "mach_readMemory64_u8 [val]"
},
{
"id": "node_20",
"type": "intrinsic",
"label": "mach_readMemory32_u8 [val]"
},
{
"id": "node_8",
"type": "intrinsic",
"label": "u8.& [arg__243]"
},
{
"id": "node_5",
"type": "lit",
"label": "0"
},
{
"id": "node_6",
"type": "lit",
"label": "0x40u8"
}
],
"relations": [
{
"id": "uses",
"name": "Uses",
"types": ["sea_node", "sea_node"],
"tuples": [
{
"atoms": ["node_14", "node_11"],
"types": ["intrinsic", "phi"]
},
{
"atoms": ["node_34", "node_32"],
"types": ["intrinsic", "intrinsic"]
},
{
"atoms": ["node_24", "node_22"],
"types": ["intrinsic", "intrinsic"]
},
{
"atoms": ["node_32", "node_30"],
"types": ["intrinsic", "intrinsic"]
},
{
"atoms": ["node_22", "node_20"],
"types": ["intrinsic", "intrinsic"]
},
{
"atoms": ["node_9", "node_8"],
"types": ["intrinsic", "intrinsic"]
},
{
"atoms": ["node_9", "node_5"],
"types": ["intrinsic", "lit"]
},
{
"atoms": ["node_30", "node_11"],
"types": ["intrinsic", "phi"]
},
{
"atoms": ["node_30", "node_26"],
"types": ["intrinsic", "intrinsic"]
},
{
"atoms": ["node_30", "node_25"],
"types": ["intrinsic", "intrinsic"]
},
{
"atoms": ["node_20", "node_11"],
"types": ["intrinsic", "phi"]
},
{
"atoms": ["node_20", "node_16"],
"types": ["intrinsic", "intrinsic"]
},
{
"atoms": ["node_20", "node_15"],
"types": ["intrinsic", "intrinsic"]
},
{
"atoms": ["node_8", "node_3"],
"types": ["intrinsic", "intrinsic"]
},
{
"atoms": ["node_8", "node_6"],
"types": ["intrinsic", "lit"]
}
]
},
{
"id": "state_uses",
"name": "StateUses",
"types": ["sea_node", "sea_node"],
"tuples": [
{
"atoms": ["node_1", "node_35"],
"types": ["finish", "state_phi"]
},
{
"atoms": ["node_1", "node_36"],
"types": ["finish", "state_phi"]
},
{
"atoms": ["node_1", "node_0"],
"types": ["finish", "start"]
},
{
"atoms": ["node_25", "node_12"],
"types": ["intrinsic", "state_phi"]
},
{
"atoms": ["node_15", "node_12"],
"types": ["intrinsic", "state_phi"]
},
{
"atoms": ["node_34", "node_26"],
"types": ["intrinsic", "intrinsic"]
},
{
"atoms": ["node_24", "node_16"],
"types": ["intrinsic", "intrinsic"]
},
{
"atoms": ["node_26", "node_0"],
"types": ["intrinsic", "start"]
},
{
"atoms": ["node_16", "node_0"],
"types": ["intrinsic", "start"]
},
{
"atoms": ["node_10", "node_3"],
"types": ["intrinsic", "intrinsic"]
},
{
"atoms": ["node_3", "node_0"],
"types": ["intrinsic", "start"]
}
]
},
{
"id": "phi_cond",
"name": "PhiCond",
"types": ["sea_node", "sea_node"],
"tuples": [
{
"atoms": ["node_35", "node_14"],
"types": ["state_phi", "intrinsic"]
},
{
"atoms": ["node_36", "node_14"],
"types": ["state_phi", "intrinsic"]
},
{
"atoms": ["node_11", "node_9"],
"types": ["phi", "intrinsic"]
},
{
"atoms": ["node_12", "node_9"],
"types": ["state_phi", "intrinsic"]
}
]
},
{
"id": "phi_true",
"name": "PhiTrue",
"types": ["sea_node", "sea_node"],
"tuples": [
{
"atoms": ["node_35", "node_25"],
"types": ["state_phi", "intrinsic"]
},
{
"atoms": ["node_36", "node_34"],
"types": ["state_phi", "intrinsic"]
},
{
"atoms": ["node_11", "node_10"],
"types": ["phi", "intrinsic"]
},
{
"atoms": ["node_12", "node_10"],
"types": ["state_phi", "intrinsic"]
}
]
},
{
"id": "phi_false",
"name": "PhiFalse",
"types": ["sea_node", "sea_node"],
"tuples": [
{
"atoms": ["node_35", "node_15"],
"types": ["state_phi", "intrinsic"]
},
{
"atoms": ["node_36", "node_24"],
"types": ["state_phi", "intrinsic"]
},
{
"atoms": ["node_11", "node_4"],
"types": ["phi", "lit"]
},
{
"atoms": ["node_12", "node_3"],
"types": ["state_phi", "intrinsic"]
}
]
}
]
}`;
window.traces["I32_LOAD8_S"]["overloadOps"] = ''
window.traces["I32_LOAD8_S"]["overloadOps__raw"] = ''
window.traces["I32_LOAD8_S"]["overloadOps"] += `<pre class='graph'>---
config:
  layout: elk
---
graph TD
	1[\\"Finish"/]
	35 -. Codeptr .-> 1
	36 -. Stack .-> 1
	0 -. Trap Locals Globals Tables Memory Extra .-> 1
	0[/"Start"\\]
	36{{"Sϕ Stack "}}
	14 --> 36
	34 --> 36
	24 --> 36
	24["eff__234 push_u32"]
	22 --> 24
	16 -. Stack .-> 24
	16["index pop_u32"]
	0 -. Stack .-> 16
	22["extend U32_extend8_s"]
	20 --> 22
	20["val mach_readMemory32_u8"]
	11 --> 20
	16 --> 20
	15 --> 20
	15["offset imm_readULEB32"]
	12 -. Codeptr .-> 15
	12{{"Sϕ Codeptr "}}
	9 --> 12
	10 --> 12
	3 --> 12
	3["flags imm_readU8"]
	0 -. Codeptr .-> 3
	10["memindex__242 imm_readULEB32"]
	3 -. Codeptr .-> 10
	9["cond__241 u8.!="]
	8 --> 9
	5 --> 9
	5["arg__244 0"]
	8["arg__243 u8.&"]
	3 --> 8
	6 --> 8
	6["arg__246 0x40u8"]
	11{"memindex ϕ"}
	9 --> 11
	10 --> 11
	4 --> 11
	4["memindex__248 0u"]
	34["eff__228 push_u32"]
	32 --> 34
	26 -. Stack .-> 34
	26["index pop_u64"]
	0 -. Stack .-> 26
	32["extend U32_extend8_s"]
	30 --> 32
	30["val mach_readMemory64_u8"]
	11 --> 30
	26 --> 30
	25 --> 30
	25["offset imm_readULEB64"]
	12 -. Codeptr .-> 25
	14["cond__227 m_isMemory64"]
	11 --> 14
	35{{"Sϕ Codeptr "}}
	14 --> 35
	25 --> 35
	15 --> 35
</pre>`;
window.traces["I32_LOAD8_S"]["overloadOps__raw"] += `---
config:
  layout: elk
---
graph TD
	1[\\"Finish"/]
	35 -. Codeptr .-> 1
	36 -. Stack .-> 1
	0 -. Trap Locals Globals Tables Memory Extra .-> 1
	0[/"Start"\\]
	36{{"Sϕ Stack "}}
	14 --> 36
	34 --> 36
	24 --> 36
	24["eff__234 push_u32"]
	22 --> 24
	16 -. Stack .-> 24
	16["index pop_u32"]
	0 -. Stack .-> 16
	22["extend U32_extend8_s"]
	20 --> 22
	20["val mach_readMemory32_u8"]
	11 --> 20
	16 --> 20
	15 --> 20
	15["offset imm_readULEB32"]
	12 -. Codeptr .-> 15
	12{{"Sϕ Codeptr "}}
	9 --> 12
	10 --> 12
	3 --> 12
	3["flags imm_readU8"]
	0 -. Codeptr .-> 3
	10["memindex__242 imm_readULEB32"]
	3 -. Codeptr .-> 10
	9["cond__241 u8.!="]
	8 --> 9
	5 --> 9
	5["arg__244 0"]
	8["arg__243 u8.&"]
	3 --> 8
	6 --> 8
	6["arg__246 0x40u8"]
	11{"memindex ϕ"}
	9 --> 11
	10 --> 11
	4 --> 11
	4["memindex__248 0u"]
	34["eff__228 push_u32"]
	32 --> 34
	26 -. Stack .-> 34
	26["index pop_u64"]
	0 -. Stack .-> 26
	32["extend U32_extend8_s"]
	30 --> 32
	30["val mach_readMemory64_u8"]
	11 --> 30
	26 --> 30
	25 --> 30
	25["offset imm_readULEB64"]
	12 -. Codeptr .-> 25
	14["cond__227 m_isMemory64"]
	11 --> 14
	35{{"Sϕ Codeptr "}}
	14 --> 35
	25 --> 35
	15 --> 35
`;
window.traces["I32_LOAD8_S"]["addAbstractions"] = ''
window.traces["I32_LOAD8_S"]["addAbstractions__raw"] = ''
window.traces["I32_LOAD8_S"]["addAbstractions"] += `<pre class='graph'>---
config:
  layout: elk
---
graph TD
	1[\\"Finish"/]
	35 -. Codeptr .-> 1
	36 -. Stack .-> 1
	0 -. Trap Locals Globals Tables Memory Extra .-> 1
	0[/"Start"\\]
	36{{"Sϕ Stack "}}
	14 --> 36
	34 --> 36
	24 --> 36
	24["eff__234 push_u32"]
	22 --> 24
	16 -. Stack .-> 24
	16["index pop_u32"]
	0 -. Stack .-> 16
	22["extend U32_extend8_s"]
	20 --> 22
	20["val mach_readMemory32_u8"]
	11 --> 20
	16 --> 20
	15 --> 20
	15["offset imm_readULEB32"]
	12 -. Codeptr .-> 15
	12{{"Sϕ Codeptr "}}
	9 --> 12
	10 --> 12
	3 --> 12
	3["flags imm_readU8"]
	0 -. Codeptr .-> 3
	10["memindex__242 imm_readULEB32"]
	3 -. Codeptr .-> 10
	9["cond__241 u8.!="]
	8 --> 9
	5 --> 9
	5["arg__244 0"]
	8["arg__243 u8.&"]
	3 --> 8
	6 --> 8
	6["arg__246 0x40u8"]
	11{"memindex ϕ"}
	9 --> 11
	10 --> 11
	4 --> 11
	4["memindex__248 0u"]
	34["eff__228 push_u32"]
	32 --> 34
	26 -. Stack .-> 34
	26["index pop_u64"]
	0 -. Stack .-> 26
	32["extend U32_extend8_s"]
	30 --> 32
	30["val mach_readMemory64_u8"]
	11 --> 30
	26 --> 30
	25 --> 30
	25["offset imm_readULEB64"]
	12 -. Codeptr .-> 25
	14["cond__227 m_isMemory64"]
	11 --> 14
	35{{"Sϕ Codeptr "}}
	14 --> 35
	25 --> 35
	15 --> 35
</pre>`;
window.traces["I32_LOAD8_S"]["addAbstractions__raw"] += `---
config:
  layout: elk
---
graph TD
	1[\\"Finish"/]
	35 -. Codeptr .-> 1
	36 -. Stack .-> 1
	0 -. Trap Locals Globals Tables Memory Extra .-> 1
	0[/"Start"\\]
	36{{"Sϕ Stack "}}
	14 --> 36
	34 --> 36
	24 --> 36
	24["eff__234 push_u32"]
	22 --> 24
	16 -. Stack .-> 24
	16["index pop_u32"]
	0 -. Stack .-> 16
	22["extend U32_extend8_s"]
	20 --> 22
	20["val mach_readMemory32_u8"]
	11 --> 20
	16 --> 20
	15 --> 20
	15["offset imm_readULEB32"]
	12 -. Codeptr .-> 15
	12{{"Sϕ Codeptr "}}
	9 --> 12
	10 --> 12
	3 --> 12
	3["flags imm_readU8"]
	0 -. Codeptr .-> 3
	10["memindex__242 imm_readULEB32"]
	3 -. Codeptr .-> 10
	9["cond__241 u8.!="]
	8 --> 9
	5 --> 9
	5["arg__244 0"]
	8["arg__243 u8.&"]
	3 --> 8
	6 --> 8
	6["arg__246 0x40u8"]
	11{"memindex ϕ"}
	9 --> 11
	10 --> 11
	4 --> 11
	4["memindex__248 0u"]
	34["eff__228 push_u32"]
	32 --> 34
	26 -. Stack .-> 34
	26["index pop_u64"]
	0 -. Stack .-> 26
	32["extend U32_extend8_s"]
	30 --> 32
	30["val mach_readMemory64_u8"]
	11 --> 30
	26 --> 30
	25 --> 30
	25["offset imm_readULEB64"]
	12 -. Codeptr .-> 25
	14["cond__227 m_isMemory64"]
	11 --> 14
	35{{"Sϕ Codeptr "}}
	14 --> 35
	25 --> 35
	15 --> 35
`;
window.traces["I32_LOAD8_S"]["schedulerMermaid"] = ''
window.traces["I32_LOAD8_S"]["schedulerMermaid__raw"] = ''
window.traces["I32_LOAD8_S"]["schedulerMermaid"] += `<pre class='graph'>graph TD
subgraph block_219["Block 219"]
	direction TB
	b219_1[\\"Finish"/]
end
phi_221 --> block_219
subgraph phi_221["Phi 221"]
	p221_36{{"Sϕ Stack "}}
	p221_35{{"Sϕ Codeptr "}}
end
block_222 --> phi_221
block_223 --> phi_221
subgraph block_222["Block 222"]
	direction TB
	b222_26["index pop_u64"]
	b222_30["val mach_readMemory64_u8"]
	b222_32["extend U32_extend8_s"]
	b222_34["eff__228 push_u32"]
	b222_25["offset imm_readULEB64"]
	b222_26 --> b222_30
	b222_30 --> b222_32
	b222_32 --> b222_34
	b222_34 --> b222_25
end
branch_220 --> block_222
subgraph branch_220["Branch 220"]
	br220_14["cond__227 m_isMemory64"]

end
block_224 --> branch_220
subgraph block_224["Block 224"]
	direction TB
	b224_14["cond__227 m_isMemory64"]
end
phi_226 --> block_224
subgraph phi_226["Phi 226"]
	p226_12{{"Sϕ Codeptr "}}
	p226_12{{"Sϕ Codeptr "}}
	p226_12{{"Sϕ Codeptr "}}
	p226_12{{"Sϕ Codeptr "}}
	p226_11{"memindex ϕ"}
	p226_11{"memindex ϕ"}
	p226_11{"memindex ϕ"}
	p226_11{"memindex ϕ"}
	p226_11{"memindex ϕ"}
	p226_11{"memindex ϕ"}
	p226_12{{"Sϕ Codeptr "}}
	p226_12{{"Sϕ Codeptr "}}
	p226_12{{"Sϕ Codeptr "}}
	p226_12{{"Sϕ Codeptr "}}
end
block_227 --> phi_226
block_228 --> phi_226
subgraph block_227["Block 227"]
	direction TB
	b227_10["memindex__242 imm_readULEB32"]
end
branch_225 --> block_227
subgraph branch_225["Branch 225"]
	br225_9["cond__241 u8.!="]

end
block_229 --> branch_225
subgraph block_229["Block 229"]
	direction TB
	b229_0[/"Start"\\]
	b229_6["arg__246 0x40u8"]
	b229_5["arg__244 0"]
	b229_8["arg__243 u8.&"]
	b229_9["cond__241 u8.!="]
	b229_0 --> b229_6
	b229_6 --> b229_5
	b229_5 --> b229_8
	b229_8 --> b229_9
end
subgraph block_228["Block 228"]
	direction TB
	b228_4["memindex__248 0u"]
	b228_3["flags imm_readU8"]
	b228_4 --> b228_3
end
branch_225 --> block_228
subgraph block_223["Block 223"]
	direction TB
	b223_16["index pop_u32"]
	b223_20["val mach_readMemory32_u8"]
	b223_22["extend U32_extend8_s"]
	b223_24["eff__234 push_u32"]
	b223_15["offset imm_readULEB32"]
	b223_16 --> b223_20
	b223_20 --> b223_22
	b223_22 --> b223_24
	b223_24 --> b223_15
end
branch_220 --> block_223

</pre>`;
window.traces["I32_LOAD8_S"]["schedulerMermaid__raw"] += `graph TD
subgraph block_219["Block 219"]
	direction TB
	b219_1[\\"Finish"/]
end
phi_221 --> block_219
subgraph phi_221["Phi 221"]
	p221_36{{"Sϕ Stack "}}
	p221_35{{"Sϕ Codeptr "}}
end
block_222 --> phi_221
block_223 --> phi_221
subgraph block_222["Block 222"]
	direction TB
	b222_26["index pop_u64"]
	b222_30["val mach_readMemory64_u8"]
	b222_32["extend U32_extend8_s"]
	b222_34["eff__228 push_u32"]
	b222_25["offset imm_readULEB64"]
	b222_26 --> b222_30
	b222_30 --> b222_32
	b222_32 --> b222_34
	b222_34 --> b222_25
end
branch_220 --> block_222
subgraph branch_220["Branch 220"]
	br220_14["cond__227 m_isMemory64"]

end
block_224 --> branch_220
subgraph block_224["Block 224"]
	direction TB
	b224_14["cond__227 m_isMemory64"]
end
phi_226 --> block_224
subgraph phi_226["Phi 226"]
	p226_12{{"Sϕ Codeptr "}}
	p226_12{{"Sϕ Codeptr "}}
	p226_12{{"Sϕ Codeptr "}}
	p226_12{{"Sϕ Codeptr "}}
	p226_11{"memindex ϕ"}
	p226_11{"memindex ϕ"}
	p226_11{"memindex ϕ"}
	p226_11{"memindex ϕ"}
	p226_11{"memindex ϕ"}
	p226_11{"memindex ϕ"}
	p226_12{{"Sϕ Codeptr "}}
	p226_12{{"Sϕ Codeptr "}}
	p226_12{{"Sϕ Codeptr "}}
	p226_12{{"Sϕ Codeptr "}}
end
block_227 --> phi_226
block_228 --> phi_226
subgraph block_227["Block 227"]
	direction TB
	b227_10["memindex__242 imm_readULEB32"]
end
branch_225 --> block_227
subgraph branch_225["Branch 225"]
	br225_9["cond__241 u8.!="]

end
block_229 --> branch_225
subgraph block_229["Block 229"]
	direction TB
	b229_0[/"Start"\\]
	b229_6["arg__246 0x40u8"]
	b229_5["arg__244 0"]
	b229_8["arg__243 u8.&"]
	b229_9["cond__241 u8.!="]
	b229_0 --> b229_6
	b229_6 --> b229_5
	b229_5 --> b229_8
	b229_8 --> b229_9
end
subgraph block_228["Block 228"]
	direction TB
	b228_4["memindex__248 0u"]
	b228_3["flags imm_readU8"]
	b228_4 --> b228_3
end
branch_225 --> block_228
subgraph block_223["Block 223"]
	direction TB
	b223_16["index pop_u32"]
	b223_20["val mach_readMemory32_u8"]
	b223_22["extend U32_extend8_s"]
	b223_24["eff__234 push_u32"]
	b223_15["offset imm_readULEB32"]
	b223_16 --> b223_20
	b223_20 --> b223_22
	b223_22 --> b223_24
	b223_24 --> b223_15
end
branch_220 --> block_223

`;
window.traces["I32_LOAD8_S"]["unLEM"] = ''
window.traces["I32_LOAD8_S"]["unLEM__raw"] = ''
window.traces["I32_LOAD8_S"]["unLEM"] += `<pre class='graph'>---
config:
  layout: elk
---
graph TD
	1[\\"Finish"/]
	35 -. Codeptr .-> 1
	36 -. Stack .-> 1
	0 -. Trap Locals Globals Tables Memory Extra .-> 1
	0[/"Start"\\]
	36{{"Sϕ Stack "}}
	14 --> 36
	34 --> 36
	24 --> 36
	24["eff__234 push_u32"]
	22 --> 24
	16 -. Stack .-> 24
	16["index pop_u32"]
	0 -. Stack .-> 16
	22["extend U32_extend8_s"]
	20 --> 22
	20["val mach_readMemory32_u8"]
	11 --> 20
	16 --> 20
	15 --> 20
	15["offset imm_readULEB32"]
	12 -. Codeptr .-> 15
	12{{"Sϕ Codeptr "}}
	9 --> 12
	10 --> 12
	3 --> 12
	3["flags imm_readU8"]
	0 -. Codeptr .-> 3
	10["memindex__242 imm_readULEB32"]
	3 -. Codeptr .-> 10
	9["cond__241 u8.!="]
	8 --> 9
	5 --> 9
	5["arg__244 0"]
	8["arg__243 u8.&"]
	3 --> 8
	6 --> 8
	6["arg__246 0x40u8"]
	11{"memindex ϕ"}
	9 --> 11
	10 --> 11
	4 --> 11
	4["memindex__248 0u"]
	34["eff__228 push_u32"]
	32 --> 34
	26 -. Stack .-> 34
	26["index pop_u64"]
	0 -. Stack .-> 26
	32["extend U32_extend8_s"]
	30 --> 32
	30["val mach_readMemory64_u8"]
	11 --> 30
	26 --> 30
	25 --> 30
	25["offset imm_readULEB64"]
	12 -. Codeptr .-> 25
	14["cond__227 m_isMemory64"]
	11 --> 14
	35{{"Sϕ Codeptr "}}
	14 --> 35
	25 --> 35
	15 --> 35
</pre>`;
window.traces["I32_LOAD8_S"]["unLEM__raw"] += `---
config:
  layout: elk
---
graph TD
	1[\\"Finish"/]
	35 -. Codeptr .-> 1
	36 -. Stack .-> 1
	0 -. Trap Locals Globals Tables Memory Extra .-> 1
	0[/"Start"\\]
	36{{"Sϕ Stack "}}
	14 --> 36
	34 --> 36
	24 --> 36
	24["eff__234 push_u32"]
	22 --> 24
	16 -. Stack .-> 24
	16["index pop_u32"]
	0 -. Stack .-> 16
	22["extend U32_extend8_s"]
	20 --> 22
	20["val mach_readMemory32_u8"]
	11 --> 20
	16 --> 20
	15 --> 20
	15["offset imm_readULEB32"]
	12 -. Codeptr .-> 15
	12{{"Sϕ Codeptr "}}
	9 --> 12
	10 --> 12
	3 --> 12
	3["flags imm_readU8"]
	0 -. Codeptr .-> 3
	10["memindex__242 imm_readULEB32"]
	3 -. Codeptr .-> 10
	9["cond__241 u8.!="]
	8 --> 9
	5 --> 9
	5["arg__244 0"]
	8["arg__243 u8.&"]
	3 --> 8
	6 --> 8
	6["arg__246 0x40u8"]
	11{"memindex ϕ"}
	9 --> 11
	10 --> 11
	4 --> 11
	4["memindex__248 0u"]
	34["eff__228 push_u32"]
	32 --> 34
	26 -. Stack .-> 34
	26["index pop_u64"]
	0 -. Stack .-> 26
	32["extend U32_extend8_s"]
	30 --> 32
	30["val mach_readMemory64_u8"]
	11 --> 30
	26 --> 30
	25 --> 30
	25["offset imm_readULEB64"]
	12 -. Codeptr .-> 25
	14["cond__227 m_isMemory64"]
	11 --> 14
	35{{"Sϕ Codeptr "}}
	14 --> 35
	25 --> 35
	15 --> 35
`;
window.traces["I32_LOAD8_S"]["unlem_schedule"] = ''
window.traces["I32_LOAD8_S"]["unlem_schedule__raw"] = ''
window.traces["I32_LOAD8_S"]["unlem_schedule"] += `<pre class=''>def flags = imm_readU8();
def arg__246 : byte = 0x40u8;
def arg__243 = u8.&(flags, arg__246);
def arg__244 : byte = 0;
def cond__241 = u8.!=(arg__243, arg__244);
var memindex: u32;
if (cond__241) {
	def memindex__242 = imm_readULEB32();
} else {
	def memindex__248 : u32 = 0u;
}
// phis: memindex <- memindex__242; memindex <- memindex__248; 
def cond__227 = m_isMemory64(memindex);
if (cond__227) {
	def offset = imm_readULEB64();
	def index = pop_u64();
	def val = mach_readMemory64_u8(memindex, index, offset);
	def extend = U32_extend8_s(val);
	def eff__228 = push_u32(extend);
} else {
	def offset = imm_readULEB32();
	def index = pop_u32();
	def val = mach_readMemory32_u8(memindex, index, offset);
	def extend = U32_extend8_s(val);
	def eff__234 = push_u32(extend);
}
// phis: 
</pre>`;
window.traces["I32_LOAD8_S"]["unlem_schedule__raw"] += `def flags = imm_readU8();
def arg__246 : byte = 0x40u8;
def arg__243 = u8.&(flags, arg__246);
def arg__244 : byte = 0;
def cond__241 = u8.!=(arg__243, arg__244);
var memindex: u32;
if (cond__241) {
	def memindex__242 = imm_readULEB32();
} else {
	def memindex__248 : u32 = 0u;
}
// phis: memindex <- memindex__242; memindex <- memindex__248; 
def cond__227 = m_isMemory64(memindex);
if (cond__227) {
	def offset = imm_readULEB64();
	def index = pop_u64();
	def val = mach_readMemory64_u8(memindex, index, offset);
	def extend = U32_extend8_s(val);
	def eff__228 = push_u32(extend);
} else {
	def offset = imm_readULEB32();
	def index = pop_u32();
	def val = mach_readMemory32_u8(memindex, index, offset);
	def extend = U32_extend8_s(val);
	def eff__234 = push_u32(extend);
}
// phis: 
`;
window.traces["I32_LOAD8_S"]["spytial_ul"] = ''
window.traces["I32_LOAD8_S"]["spytial_ul__raw"] = ''
window.traces["I32_LOAD8_S"]["spytial_ul"] += `<pre class=''>{
"atoms": [
{
"id": "node_1",
"type": "finish",
"label": "Finish"
},
{
"id": "node_35",
"type": "state_phi",
"label": "StatePhi [m_isMemory64 [cond__227]]"
},
{
"id": "node_36",
"type": "state_phi",
"label": "StatePhi [m_isMemory64 [cond__227]]"
},
{
"id": "node_0",
"type": "start",
"label": "Start"
},
{
"id": "node_14",
"type": "intrinsic",
"label": "m_isMemory64 [cond__227]"
},
{
"id": "node_25",
"type": "intrinsic",
"label": "imm_readULEB64 [offset]"
},
{
"id": "node_15",
"type": "intrinsic",
"label": "imm_readULEB32 [offset]"
},
{
"id": "node_34",
"type": "intrinsic",
"label": "push_u32 [eff__228]"
},
{
"id": "node_24",
"type": "intrinsic",
"label": "push_u32 [eff__234]"
},
{
"id": "node_11",
"type": "phi",
"label": "Phi"
},
{
"id": "node_12",
"type": "state_phi",
"label": "StatePhi [u8.!= [cond__241]]"
},
{
"id": "node_32",
"type": "intrinsic",
"label": "U32_extend8_s [extend]"
},
{
"id": "node_26",
"type": "intrinsic",
"label": "pop_u64 [index]"
},
{
"id": "node_22",
"type": "intrinsic",
"label": "U32_extend8_s [extend]"
},
{
"id": "node_16",
"type": "intrinsic",
"label": "pop_u32 [index]"
},
{
"id": "node_9",
"type": "intrinsic",
"label": "u8.!= [cond__241]"
},
{
"id": "node_10",
"type": "intrinsic",
"label": "imm_readULEB32 [memindex__242]"
},
{
"id": "node_4",
"type": "lit",
"label": "0u"
},
{
"id": "node_3",
"type": "intrinsic",
"label": "imm_readU8 [flags]"
},
{
"id": "node_30",
"type": "intrinsic",
"label": "mach_readMemory64_u8 [val]"
},
{
"id": "node_20",
"type": "intrinsic",
"label": "mach_readMemory32_u8 [val]"
},
{
"id": "node_8",
"type": "intrinsic",
"label": "u8.& [arg__243]"
},
{
"id": "node_5",
"type": "lit",
"label": "0"
},
{
"id": "node_6",
"type": "lit",
"label": "0x40u8"
}
],
"relations": [
{
"id": "uses",
"name": "Uses",
"types": ["sea_node", "sea_node"],
"tuples": [
{
"atoms": ["node_14", "node_11"],
"types": ["intrinsic", "phi"]
},
{
"atoms": ["node_34", "node_32"],
"types": ["intrinsic", "intrinsic"]
},
{
"atoms": ["node_24", "node_22"],
"types": ["intrinsic", "intrinsic"]
},
{
"atoms": ["node_32", "node_30"],
"types": ["intrinsic", "intrinsic"]
},
{
"atoms": ["node_22", "node_20"],
"types": ["intrinsic", "intrinsic"]
},
{
"atoms": ["node_9", "node_8"],
"types": ["intrinsic", "intrinsic"]
},
{
"atoms": ["node_9", "node_5"],
"types": ["intrinsic", "lit"]
},
{
"atoms": ["node_30", "node_11"],
"types": ["intrinsic", "phi"]
},
{
"atoms": ["node_30", "node_26"],
"types": ["intrinsic", "intrinsic"]
},
{
"atoms": ["node_30", "node_25"],
"types": ["intrinsic", "intrinsic"]
},
{
"atoms": ["node_20", "node_11"],
"types": ["intrinsic", "phi"]
},
{
"atoms": ["node_20", "node_16"],
"types": ["intrinsic", "intrinsic"]
},
{
"atoms": ["node_20", "node_15"],
"types": ["intrinsic", "intrinsic"]
},
{
"atoms": ["node_8", "node_3"],
"types": ["intrinsic", "intrinsic"]
},
{
"atoms": ["node_8", "node_6"],
"types": ["intrinsic", "lit"]
}
]
},
{
"id": "state_uses",
"name": "StateUses",
"types": ["sea_node", "sea_node"],
"tuples": [
{
"atoms": ["node_1", "node_35"],
"types": ["finish", "state_phi"]
},
{
"atoms": ["node_1", "node_36"],
"types": ["finish", "state_phi"]
},
{
"atoms": ["node_1", "node_0"],
"types": ["finish", "start"]
},
{
"atoms": ["node_25", "node_12"],
"types": ["intrinsic", "state_phi"]
},
{
"atoms": ["node_15", "node_12"],
"types": ["intrinsic", "state_phi"]
},
{
"atoms": ["node_34", "node_26"],
"types": ["intrinsic", "intrinsic"]
},
{
"atoms": ["node_24", "node_16"],
"types": ["intrinsic", "intrinsic"]
},
{
"atoms": ["node_26", "node_0"],
"types": ["intrinsic", "start"]
},
{
"atoms": ["node_16", "node_0"],
"types": ["intrinsic", "start"]
},
{
"atoms": ["node_10", "node_3"],
"types": ["intrinsic", "intrinsic"]
},
{
"atoms": ["node_3", "node_0"],
"types": ["intrinsic", "start"]
}
]
},
{
"id": "phi_cond",
"name": "PhiCond",
"types": ["sea_node", "sea_node"],
"tuples": [
{
"atoms": ["node_35", "node_14"],
"types": ["state_phi", "intrinsic"]
},
{
"atoms": ["node_36", "node_14"],
"types": ["state_phi", "intrinsic"]
},
{
"atoms": ["node_11", "node_9"],
"types": ["phi", "intrinsic"]
},
{
"atoms": ["node_12", "node_9"],
"types": ["state_phi", "intrinsic"]
}
]
},
{
"id": "phi_true",
"name": "PhiTrue",
"types": ["sea_node", "sea_node"],
"tuples": [
{
"atoms": ["node_35", "node_25"],
"types": ["state_phi", "intrinsic"]
},
{
"atoms": ["node_36", "node_34"],
"types": ["state_phi", "intrinsic"]
},
{
"atoms": ["node_11", "node_10"],
"types": ["phi", "intrinsic"]
},
{
"atoms": ["node_12", "node_10"],
"types": ["state_phi", "intrinsic"]
}
]
},
{
"id": "phi_false",
"name": "PhiFalse",
"types": ["sea_node", "sea_node"],
"tuples": [
{
"atoms": ["node_35", "node_15"],
"types": ["state_phi", "intrinsic"]
},
{
"atoms": ["node_36", "node_24"],
"types": ["state_phi", "intrinsic"]
},
{
"atoms": ["node_11", "node_4"],
"types": ["phi", "lit"]
},
{
"atoms": ["node_12", "node_3"],
"types": ["state_phi", "intrinsic"]
}
]
}
]
}</pre>`;
window.traces["I32_LOAD8_S"]["spytial_ul__raw"] += `{
"atoms": [
{
"id": "node_1",
"type": "finish",
"label": "Finish"
},
{
"id": "node_35",
"type": "state_phi",
"label": "StatePhi [m_isMemory64 [cond__227]]"
},
{
"id": "node_36",
"type": "state_phi",
"label": "StatePhi [m_isMemory64 [cond__227]]"
},
{
"id": "node_0",
"type": "start",
"label": "Start"
},
{
"id": "node_14",
"type": "intrinsic",
"label": "m_isMemory64 [cond__227]"
},
{
"id": "node_25",
"type": "intrinsic",
"label": "imm_readULEB64 [offset]"
},
{
"id": "node_15",
"type": "intrinsic",
"label": "imm_readULEB32 [offset]"
},
{
"id": "node_34",
"type": "intrinsic",
"label": "push_u32 [eff__228]"
},
{
"id": "node_24",
"type": "intrinsic",
"label": "push_u32 [eff__234]"
},
{
"id": "node_11",
"type": "phi",
"label": "Phi"
},
{
"id": "node_12",
"type": "state_phi",
"label": "StatePhi [u8.!= [cond__241]]"
},
{
"id": "node_32",
"type": "intrinsic",
"label": "U32_extend8_s [extend]"
},
{
"id": "node_26",
"type": "intrinsic",
"label": "pop_u64 [index]"
},
{
"id": "node_22",
"type": "intrinsic",
"label": "U32_extend8_s [extend]"
},
{
"id": "node_16",
"type": "intrinsic",
"label": "pop_u32 [index]"
},
{
"id": "node_9",
"type": "intrinsic",
"label": "u8.!= [cond__241]"
},
{
"id": "node_10",
"type": "intrinsic",
"label": "imm_readULEB32 [memindex__242]"
},
{
"id": "node_4",
"type": "lit",
"label": "0u"
},
{
"id": "node_3",
"type": "intrinsic",
"label": "imm_readU8 [flags]"
},
{
"id": "node_30",
"type": "intrinsic",
"label": "mach_readMemory64_u8 [val]"
},
{
"id": "node_20",
"type": "intrinsic",
"label": "mach_readMemory32_u8 [val]"
},
{
"id": "node_8",
"type": "intrinsic",
"label": "u8.& [arg__243]"
},
{
"id": "node_5",
"type": "lit",
"label": "0"
},
{
"id": "node_6",
"type": "lit",
"label": "0x40u8"
}
],
"relations": [
{
"id": "uses",
"name": "Uses",
"types": ["sea_node", "sea_node"],
"tuples": [
{
"atoms": ["node_14", "node_11"],
"types": ["intrinsic", "phi"]
},
{
"atoms": ["node_34", "node_32"],
"types": ["intrinsic", "intrinsic"]
},
{
"atoms": ["node_24", "node_22"],
"types": ["intrinsic", "intrinsic"]
},
{
"atoms": ["node_32", "node_30"],
"types": ["intrinsic", "intrinsic"]
},
{
"atoms": ["node_22", "node_20"],
"types": ["intrinsic", "intrinsic"]
},
{
"atoms": ["node_9", "node_8"],
"types": ["intrinsic", "intrinsic"]
},
{
"atoms": ["node_9", "node_5"],
"types": ["intrinsic", "lit"]
},
{
"atoms": ["node_30", "node_11"],
"types": ["intrinsic", "phi"]
},
{
"atoms": ["node_30", "node_26"],
"types": ["intrinsic", "intrinsic"]
},
{
"atoms": ["node_30", "node_25"],
"types": ["intrinsic", "intrinsic"]
},
{
"atoms": ["node_20", "node_11"],
"types": ["intrinsic", "phi"]
},
{
"atoms": ["node_20", "node_16"],
"types": ["intrinsic", "intrinsic"]
},
{
"atoms": ["node_20", "node_15"],
"types": ["intrinsic", "intrinsic"]
},
{
"atoms": ["node_8", "node_3"],
"types": ["intrinsic", "intrinsic"]
},
{
"atoms": ["node_8", "node_6"],
"types": ["intrinsic", "lit"]
}
]
},
{
"id": "state_uses",
"name": "StateUses",
"types": ["sea_node", "sea_node"],
"tuples": [
{
"atoms": ["node_1", "node_35"],
"types": ["finish", "state_phi"]
},
{
"atoms": ["node_1", "node_36"],
"types": ["finish", "state_phi"]
},
{
"atoms": ["node_1", "node_0"],
"types": ["finish", "start"]
},
{
"atoms": ["node_25", "node_12"],
"types": ["intrinsic", "state_phi"]
},
{
"atoms": ["node_15", "node_12"],
"types": ["intrinsic", "state_phi"]
},
{
"atoms": ["node_34", "node_26"],
"types": ["intrinsic", "intrinsic"]
},
{
"atoms": ["node_24", "node_16"],
"types": ["intrinsic", "intrinsic"]
},
{
"atoms": ["node_26", "node_0"],
"types": ["intrinsic", "start"]
},
{
"atoms": ["node_16", "node_0"],
"types": ["intrinsic", "start"]
},
{
"atoms": ["node_10", "node_3"],
"types": ["intrinsic", "intrinsic"]
},
{
"atoms": ["node_3", "node_0"],
"types": ["intrinsic", "start"]
}
]
},
{
"id": "phi_cond",
"name": "PhiCond",
"types": ["sea_node", "sea_node"],
"tuples": [
{
"atoms": ["node_35", "node_14"],
"types": ["state_phi", "intrinsic"]
},
{
"atoms": ["node_36", "node_14"],
"types": ["state_phi", "intrinsic"]
},
{
"atoms": ["node_11", "node_9"],
"types": ["phi", "intrinsic"]
},
{
"atoms": ["node_12", "node_9"],
"types": ["state_phi", "intrinsic"]
}
]
},
{
"id": "phi_true",
"name": "PhiTrue",
"types": ["sea_node", "sea_node"],
"tuples": [
{
"atoms": ["node_35", "node_25"],
"types": ["state_phi", "intrinsic"]
},
{
"atoms": ["node_36", "node_34"],
"types": ["state_phi", "intrinsic"]
},
{
"atoms": ["node_11", "node_10"],
"types": ["phi", "intrinsic"]
},
{
"atoms": ["node_12", "node_10"],
"types": ["state_phi", "intrinsic"]
}
]
},
{
"id": "phi_false",
"name": "PhiFalse",
"types": ["sea_node", "sea_node"],
"tuples": [
{
"atoms": ["node_35", "node_15"],
"types": ["state_phi", "intrinsic"]
},
{
"atoms": ["node_36", "node_24"],
"types": ["state_phi", "intrinsic"]
},
{
"atoms": ["node_11", "node_4"],
"types": ["phi", "lit"]
},
{
"atoms": ["node_12", "node_3"],
"types": ["state_phi", "intrinsic"]
}
]
}
]
}`;
window.traces["I32_LOAD8_S"]["unlem_scheduler"] = ''
window.traces["I32_LOAD8_S"]["unlem_scheduler__raw"] = ''
window.traces["I32_LOAD8_S"]["unlem_scheduler"] += `<pre class='graph'>graph TD
subgraph block_230["Block 230"]
	direction TB
	b230_1[\\"Finish"/]
end
phi_232 --> block_230
subgraph phi_232["Phi 232"]
	p232_36{{"Sϕ Stack "}}
	p232_35{{"Sϕ Codeptr "}}
end
block_233 --> phi_232
block_234 --> phi_232
subgraph block_233["Block 233"]
	direction TB
	b233_26["index pop_u64"]
	b233_30["val mach_readMemory64_u8"]
	b233_32["extend U32_extend8_s"]
	b233_34["eff__228 push_u32"]
	b233_25["offset imm_readULEB64"]
	b233_26 --> b233_30
	b233_30 --> b233_32
	b233_32 --> b233_34
	b233_34 --> b233_25
end
branch_231 --> block_233
subgraph branch_231["Branch 231"]
	br231_14["cond__227 m_isMemory64"]

end
block_235 --> branch_231
subgraph block_235["Block 235"]
	direction TB
	b235_14["cond__227 m_isMemory64"]
end
phi_237 --> block_235
subgraph phi_237["Phi 237"]
	p237_12{{"Sϕ Codeptr "}}
	p237_12{{"Sϕ Codeptr "}}
	p237_12{{"Sϕ Codeptr "}}
	p237_12{{"Sϕ Codeptr "}}
	p237_11{"memindex ϕ"}
	p237_11{"memindex ϕ"}
	p237_11{"memindex ϕ"}
	p237_11{"memindex ϕ"}
	p237_11{"memindex ϕ"}
	p237_11{"memindex ϕ"}
	p237_12{{"Sϕ Codeptr "}}
	p237_12{{"Sϕ Codeptr "}}
	p237_12{{"Sϕ Codeptr "}}
	p237_12{{"Sϕ Codeptr "}}
end
block_238 --> phi_237
block_239 --> phi_237
subgraph block_238["Block 238"]
	direction TB
	b238_10["memindex__242 imm_readULEB32"]
end
branch_236 --> block_238
subgraph branch_236["Branch 236"]
	br236_9["cond__241 u8.!="]

end
block_240 --> branch_236
subgraph block_240["Block 240"]
	direction TB
	b240_0[/"Start"\\]
	b240_6["arg__246 0x40u8"]
	b240_5["arg__244 0"]
	b240_8["arg__243 u8.&"]
	b240_9["cond__241 u8.!="]
	b240_0 --> b240_6
	b240_6 --> b240_5
	b240_5 --> b240_8
	b240_8 --> b240_9
end
subgraph block_239["Block 239"]
	direction TB
	b239_4["memindex__248 0u"]
	b239_3["flags imm_readU8"]
	b239_4 --> b239_3
end
branch_236 --> block_239
subgraph block_234["Block 234"]
	direction TB
	b234_16["index pop_u32"]
	b234_20["val mach_readMemory32_u8"]
	b234_22["extend U32_extend8_s"]
	b234_24["eff__234 push_u32"]
	b234_15["offset imm_readULEB32"]
	b234_16 --> b234_20
	b234_20 --> b234_22
	b234_22 --> b234_24
	b234_24 --> b234_15
end
branch_231 --> block_234

</pre>`;
window.traces["I32_LOAD8_S"]["unlem_scheduler__raw"] += `graph TD
subgraph block_230["Block 230"]
	direction TB
	b230_1[\\"Finish"/]
end
phi_232 --> block_230
subgraph phi_232["Phi 232"]
	p232_36{{"Sϕ Stack "}}
	p232_35{{"Sϕ Codeptr "}}
end
block_233 --> phi_232
block_234 --> phi_232
subgraph block_233["Block 233"]
	direction TB
	b233_26["index pop_u64"]
	b233_30["val mach_readMemory64_u8"]
	b233_32["extend U32_extend8_s"]
	b233_34["eff__228 push_u32"]
	b233_25["offset imm_readULEB64"]
	b233_26 --> b233_30
	b233_30 --> b233_32
	b233_32 --> b233_34
	b233_34 --> b233_25
end
branch_231 --> block_233
subgraph branch_231["Branch 231"]
	br231_14["cond__227 m_isMemory64"]

end
block_235 --> branch_231
subgraph block_235["Block 235"]
	direction TB
	b235_14["cond__227 m_isMemory64"]
end
phi_237 --> block_235
subgraph phi_237["Phi 237"]
	p237_12{{"Sϕ Codeptr "}}
	p237_12{{"Sϕ Codeptr "}}
	p237_12{{"Sϕ Codeptr "}}
	p237_12{{"Sϕ Codeptr "}}
	p237_11{"memindex ϕ"}
	p237_11{"memindex ϕ"}
	p237_11{"memindex ϕ"}
	p237_11{"memindex ϕ"}
	p237_11{"memindex ϕ"}
	p237_11{"memindex ϕ"}
	p237_12{{"Sϕ Codeptr "}}
	p237_12{{"Sϕ Codeptr "}}
	p237_12{{"Sϕ Codeptr "}}
	p237_12{{"Sϕ Codeptr "}}
end
block_238 --> phi_237
block_239 --> phi_237
subgraph block_238["Block 238"]
	direction TB
	b238_10["memindex__242 imm_readULEB32"]
end
branch_236 --> block_238
subgraph branch_236["Branch 236"]
	br236_9["cond__241 u8.!="]

end
block_240 --> branch_236
subgraph block_240["Block 240"]
	direction TB
	b240_0[/"Start"\\]
	b240_6["arg__246 0x40u8"]
	b240_5["arg__244 0"]
	b240_8["arg__243 u8.&"]
	b240_9["cond__241 u8.!="]
	b240_0 --> b240_6
	b240_6 --> b240_5
	b240_5 --> b240_8
	b240_8 --> b240_9
end
subgraph block_239["Block 239"]
	direction TB
	b239_4["memindex__248 0u"]
	b239_3["flags imm_readU8"]
	b239_4 --> b239_3
end
branch_236 --> block_239
subgraph block_234["Block 234"]
	direction TB
	b234_16["index pop_u32"]
	b234_20["val mach_readMemory32_u8"]
	b234_22["extend U32_extend8_s"]
	b234_24["eff__234 push_u32"]
	b234_15["offset imm_readULEB32"]
	b234_16 --> b234_20
	b234_20 --> b234_22
	b234_22 --> b234_24
	b234_24 --> b234_15
end
branch_231 --> block_234

`;
window.traces["I32_LOAD8_S"]["unlem_pretty"] = ''
window.traces["I32_LOAD8_S"]["unlem_pretty__raw"] = ''
window.traces["I32_LOAD8_S"]["unlem_pretty"] += `<pre class=''>def flags = imm_readU8();
var memindex: u32;
if (u8.!=(u8.&(flags, 0x40u8), 0)) {
	memindex = imm_readULEB32();
} else {
	memindex = 0u;
}
def cond = m_isMemory64(memindex);
if (cond) {
	def offset = imm_readULEB64();
	def index = pop_u64();
	def val = mach_readMemory64_u8(memindex, index, offset);
	def extend = U32_extend8_s(val);
	push_u32(extend);
} else {
	def offset = imm_readULEB32();
	def index = pop_u32();
	def val = mach_readMemory32_u8(memindex, index, offset);
	def extend = U32_extend8_s(val);
	push_u32(extend);
}
</pre>`;
window.traces["I32_LOAD8_S"]["unlem_pretty__raw"] += `def flags = imm_readU8();
var memindex: u32;
if (u8.!=(u8.&(flags, 0x40u8), 0)) {
	memindex = imm_readULEB32();
} else {
	memindex = 0u;
}
def cond = m_isMemory64(memindex);
if (cond) {
	def offset = imm_readULEB64();
	def index = pop_u64();
	def val = mach_readMemory64_u8(memindex, index, offset);
	def extend = U32_extend8_s(val);
	push_u32(extend);
} else {
	def offset = imm_readULEB32();
	def index = pop_u32();
	def val = mach_readMemory32_u8(memindex, index, offset);
	def extend = U32_extend8_s(val);
	push_u32(extend);
}
`;
window.traces["I32_LOAD8_S"]["constUnLEM"] = ''
window.traces["I32_LOAD8_S"]["constUnLEM__raw"] = ''
window.traces["I32_LOAD8_S"]["constUnLEM"] += `<pre class='graph'>---
config:
  layout: elk
---
graph TD
	1[\\"Finish"/]
	35 -. Codeptr .-> 1
	36 -. Stack .-> 1
	0 -. Trap Locals Globals Tables Memory Extra .-> 1
	0[/"Start"\\]
	36{{"Sϕ Stack "}}
	14 --> 36
	34 --> 36
	24 --> 36
	24["eff__234 push_u32"]
	22 --> 24
	16 -. Stack .-> 24
	16["index pop_u32"]
	0 -. Stack .-> 16
	22["extend U32_extend8_s"]
	20 --> 22
	20["val mach_readMemory32_u8"]
	11 --> 20
	16 --> 20
	15 --> 20
	15["offset imm_readULEB32"]
	12 -. Codeptr .-> 15
	12{{"Sϕ Codeptr "}}
	9 --> 12
	10 --> 12
	3 --> 12
	3["flags imm_readU8"]
	0 -. Codeptr .-> 3
	10["memindex__242 imm_readULEB32"]
	3 -. Codeptr .-> 10
	9["cond__241 u8.!="]
	8 --> 9
	5 --> 9
	5["arg__244 0"]
	8["arg__243 u8.&"]
	3 --> 8
	6 --> 8
	6["arg__246 0x40u8"]
	11{"memindex ϕ"}
	9 --> 11
	10 --> 11
	4 --> 11
	4["memindex__248 0u"]
	34["eff__228 push_u32"]
	32 --> 34
	26 -. Stack .-> 34
	26["index pop_u64"]
	0 -. Stack .-> 26
	32["extend U32_extend8_s"]
	30 --> 32
	30["val mach_readMemory64_u8"]
	11 --> 30
	26 --> 30
	25 --> 30
	25["offset imm_readULEB64"]
	12 -. Codeptr .-> 25
	14["cond__227 m_isMemory64"]
	11 --> 14
	35{{"Sϕ Codeptr "}}
	14 --> 35
	25 --> 35
	15 --> 35
</pre>`;
window.traces["I32_LOAD8_S"]["constUnLEM__raw"] += `---
config:
  layout: elk
---
graph TD
	1[\\"Finish"/]
	35 -. Codeptr .-> 1
	36 -. Stack .-> 1
	0 -. Trap Locals Globals Tables Memory Extra .-> 1
	0[/"Start"\\]
	36{{"Sϕ Stack "}}
	14 --> 36
	34 --> 36
	24 --> 36
	24["eff__234 push_u32"]
	22 --> 24
	16 -. Stack .-> 24
	16["index pop_u32"]
	0 -. Stack .-> 16
	22["extend U32_extend8_s"]
	20 --> 22
	20["val mach_readMemory32_u8"]
	11 --> 20
	16 --> 20
	15 --> 20
	15["offset imm_readULEB32"]
	12 -. Codeptr .-> 15
	12{{"Sϕ Codeptr "}}
	9 --> 12
	10 --> 12
	3 --> 12
	3["flags imm_readU8"]
	0 -. Codeptr .-> 3
	10["memindex__242 imm_readULEB32"]
	3 -. Codeptr .-> 10
	9["cond__241 u8.!="]
	8 --> 9
	5 --> 9
	5["arg__244 0"]
	8["arg__243 u8.&"]
	3 --> 8
	6 --> 8
	6["arg__246 0x40u8"]
	11{"memindex ϕ"}
	9 --> 11
	10 --> 11
	4 --> 11
	4["memindex__248 0u"]
	34["eff__228 push_u32"]
	32 --> 34
	26 -. Stack .-> 34
	26["index pop_u64"]
	0 -. Stack .-> 26
	32["extend U32_extend8_s"]
	30 --> 32
	30["val mach_readMemory64_u8"]
	11 --> 30
	26 --> 30
	25 --> 30
	25["offset imm_readULEB64"]
	12 -. Codeptr .-> 25
	14["cond__227 m_isMemory64"]
	11 --> 14
	35{{"Sϕ Codeptr "}}
	14 --> 35
	25 --> 35
	15 --> 35
`;
window.traces["I32_LOAD8_S"]["chooseMerge"] = ''
window.traces["I32_LOAD8_S"]["chooseMerge__raw"] = ''
window.traces["I32_LOAD8_S"]["chooseMerge"] += `<pre class='graph'>---
config:
  layout: elk
---
graph TD
	1[\\"Finish"/]
	35 -. Codeptr .-> 1
	36 -. Stack .-> 1
	0 -. Trap Locals Globals Tables Memory Extra .-> 1
	0[/"Start"\\]
	36{{"Sϕ Stack "}}
	14 --> 36
	34 --> 36
	24 --> 36
	24["eff__234 push_u32"]
	22 --> 24
	16 -. Stack .-> 24
	16["index pop_u32"]
	0 -. Stack .-> 16
	22["extend U32_extend8_s"]
	20 --> 22
	20["val mach_readMemory32_u8"]
	11 --> 20
	16 --> 20
	15 --> 20
	15["offset imm_readULEB32"]
	12 -. Codeptr .-> 15
	12{{"Sϕ Codeptr "}}
	9 --> 12
	10 --> 12
	3 --> 12
	3["flags imm_readU8"]
	0 -. Codeptr .-> 3
	10["memindex__242 imm_readULEB32"]
	3 -. Codeptr .-> 10
	9["cond__241 u8.!="]
	8 --> 9
	5 --> 9
	5["arg__244 0"]
	8["arg__243 u8.&"]
	3 --> 8
	6 --> 8
	6["arg__246 0x40u8"]
	11{"memindex ϕ"}
	9 --> 11
	10 --> 11
	4 --> 11
	4["memindex__248 0u"]
	34["eff__228 push_u32"]
	32 --> 34
	26 -. Stack .-> 34
	26["index pop_u64"]
	0 -. Stack .-> 26
	32["extend U32_extend8_s"]
	30 --> 32
	30["val mach_readMemory64_u8"]
	11 --> 30
	26 --> 30
	25 --> 30
	25["offset imm_readULEB64"]
	12 -. Codeptr .-> 25
	14["cond__227 m_isMemory64"]
	11 --> 14
	35{{"Sϕ Codeptr "}}
	14 --> 35
	25 --> 35
	15 --> 35
</pre>`;
window.traces["I32_LOAD8_S"]["chooseMerge__raw"] += `---
config:
  layout: elk
---
graph TD
	1[\\"Finish"/]
	35 -. Codeptr .-> 1
	36 -. Stack .-> 1
	0 -. Trap Locals Globals Tables Memory Extra .-> 1
	0[/"Start"\\]
	36{{"Sϕ Stack "}}
	14 --> 36
	34 --> 36
	24 --> 36
	24["eff__234 push_u32"]
	22 --> 24
	16 -. Stack .-> 24
	16["index pop_u32"]
	0 -. Stack .-> 16
	22["extend U32_extend8_s"]
	20 --> 22
	20["val mach_readMemory32_u8"]
	11 --> 20
	16 --> 20
	15 --> 20
	15["offset imm_readULEB32"]
	12 -. Codeptr .-> 15
	12{{"Sϕ Codeptr "}}
	9 --> 12
	10 --> 12
	3 --> 12
	3["flags imm_readU8"]
	0 -. Codeptr .-> 3
	10["memindex__242 imm_readULEB32"]
	3 -. Codeptr .-> 10
	9["cond__241 u8.!="]
	8 --> 9
	5 --> 9
	5["arg__244 0"]
	8["arg__243 u8.&"]
	3 --> 8
	6 --> 8
	6["arg__246 0x40u8"]
	11{"memindex ϕ"}
	9 --> 11
	10 --> 11
	4 --> 11
	4["memindex__248 0u"]
	34["eff__228 push_u32"]
	32 --> 34
	26 -. Stack .-> 34
	26["index pop_u64"]
	0 -. Stack .-> 26
	32["extend U32_extend8_s"]
	30 --> 32
	30["val mach_readMemory64_u8"]
	11 --> 30
	26 --> 30
	25 --> 30
	25["offset imm_readULEB64"]
	12 -. Codeptr .-> 25
	14["cond__227 m_isMemory64"]
	11 --> 14
	35{{"Sϕ Codeptr "}}
	14 --> 35
	25 --> 35
	15 --> 35
`;
window.traces["I32_LOAD8_S"]["scheduled"] = ''
window.traces["I32_LOAD8_S"]["scheduled__raw"] = ''
window.traces["I32_LOAD8_S"]["scheduled"] += `<pre class=''>def flags = imm_readU8();
def arg__246 : byte = 0x40u8;
def arg__243 = u8.&(flags, arg__246);
def arg__244 : byte = 0;
def cond__241 = u8.!=(arg__243, arg__244);
var memindex: u32;
if (cond__241) {
	def memindex__242 = imm_readULEB32();
} else {
	def memindex__248 : u32 = 0u;
}
// phis: memindex <- memindex__242; memindex <- memindex__248; 
def cond__227 = m_isMemory64(memindex);
if (cond__227) {
	def offset = imm_readULEB64();
	def index = pop_u64();
	def val = mach_readMemory64_u8(memindex, index, offset);
	def extend = U32_extend8_s(val);
	def eff__228 = push_u32(extend);
} else {
	def offset = imm_readULEB32();
	def index = pop_u32();
	def val = mach_readMemory32_u8(memindex, index, offset);
	def extend = U32_extend8_s(val);
	def eff__234 = push_u32(extend);
}
// phis: 
</pre>`;
window.traces["I32_LOAD8_S"]["scheduled__raw"] += `def flags = imm_readU8();
def arg__246 : byte = 0x40u8;
def arg__243 = u8.&(flags, arg__246);
def arg__244 : byte = 0;
def cond__241 = u8.!=(arg__243, arg__244);
var memindex: u32;
if (cond__241) {
	def memindex__242 = imm_readULEB32();
} else {
	def memindex__248 : u32 = 0u;
}
// phis: memindex <- memindex__242; memindex <- memindex__248; 
def cond__227 = m_isMemory64(memindex);
if (cond__227) {
	def offset = imm_readULEB64();
	def index = pop_u64();
	def val = mach_readMemory64_u8(memindex, index, offset);
	def extend = U32_extend8_s(val);
	def eff__228 = push_u32(extend);
} else {
	def offset = imm_readULEB32();
	def index = pop_u32();
	def val = mach_readMemory32_u8(memindex, index, offset);
	def extend = U32_extend8_s(val);
	def eff__234 = push_u32(extend);
}
// phis: 
`;
window.traces["I32_LOAD8_S"]["pretty"] = ''
window.traces["I32_LOAD8_S"]["pretty__raw"] = ''
window.traces["I32_LOAD8_S"]["pretty"] += `<pre class=''>def flags = imm_readU8();
var memindex: u32;
if (u8.!=(u8.&(flags, 0x40u8), 0)) {
	memindex = imm_readULEB32();
} else {
	memindex = 0u;
}
def cond = m_isMemory64(memindex);
if (cond) {
	def offset = imm_readULEB64();
	def index = pop_u64();
	def val = mach_readMemory64_u8(memindex, index, offset);
	def extend = U32_extend8_s(val);
	push_u32(extend);
} else {
	def offset = imm_readULEB32();
	def index = pop_u32();
	def val = mach_readMemory32_u8(memindex, index, offset);
	def extend = U32_extend8_s(val);
	push_u32(extend);
}
</pre>`;
window.traces["I32_LOAD8_S"]["pretty__raw"] += `def flags = imm_readU8();
var memindex: u32;
if (u8.!=(u8.&(flags, 0x40u8), 0)) {
	memindex = imm_readULEB32();
} else {
	memindex = 0u;
}
def cond = m_isMemory64(memindex);
if (cond) {
	def offset = imm_readULEB64();
	def index = pop_u64();
	def val = mach_readMemory64_u8(memindex, index, offset);
	def extend = U32_extend8_s(val);
	push_u32(extend);
} else {
	def offset = imm_readULEB32();
	def index = pop_u32();
	def val = mach_readMemory32_u8(memindex, index, offset);
	def extend = U32_extend8_s(val);
	push_u32(extend);
}
`;
window.traces["I32_LOAD8_U"] = {}
window.traces["I32_LOAD8_U"]["parsed"] = ''
window.traces["I32_LOAD8_U"]["parsed__raw"] = ''
window.traces["I32_LOAD8_U"]["parsed"] += `<pre class=''>def flags = imm_readU8();
def memindex : u32 = 0u;
def arg__264 : byte = 0;
def arg__266 : byte = 0x40u8;
def arg__265 = (flags);
def arg__263 = u8.&(arg__265, arg__266);
def cond__261 = u8.!=(arg__263, arg__264);
if (cond__261) {
	def memindex__262 = imm_readULEB32();
}
// phis: memindex <- memindex__262; 
def arg__260 = (memindex);
def cond__249 = m_isMemory64(arg__260);
if (cond__249) {
	def offset = imm_readULEB64();
	def index = pop_u64();
	def arg__254 = (offset);
	def arg__253 = (index);
	def arg__252 = (memindex);
	def val = mach_readMemory64_u8(arg__252, arg__253, arg__254);
	def arg__251 = (val);
	def eff__250 = push_u32(arg__251);
} else {
	def offset = imm_readULEB32();
	def index = pop_u32();
	def arg__259 = (offset);
	def arg__258 = (index);
	def arg__257 = (memindex);
	def val = mach_readMemory32_u8(arg__257, arg__258, arg__259);
	def arg__256 = (val);
	def eff__255 = push_u32(arg__256);
}
// phis: 
</pre>`;
window.traces["I32_LOAD8_U"]["parsed__raw"] += `def flags = imm_readU8();
def memindex : u32 = 0u;
def arg__264 : byte = 0;
def arg__266 : byte = 0x40u8;
def arg__265 = (flags);
def arg__263 = u8.&(arg__265, arg__266);
def cond__261 = u8.!=(arg__263, arg__264);
if (cond__261) {
	def memindex__262 = imm_readULEB32();
}
// phis: memindex <- memindex__262; 
def arg__260 = (memindex);
def cond__249 = m_isMemory64(arg__260);
if (cond__249) {
	def offset = imm_readULEB64();
	def index = pop_u64();
	def arg__254 = (offset);
	def arg__253 = (index);
	def arg__252 = (memindex);
	def val = mach_readMemory64_u8(arg__252, arg__253, arg__254);
	def arg__251 = (val);
	def eff__250 = push_u32(arg__251);
} else {
	def offset = imm_readULEB32();
	def index = pop_u32();
	def arg__259 = (offset);
	def arg__258 = (index);
	def arg__257 = (memindex);
	def val = mach_readMemory32_u8(arg__257, arg__258, arg__259);
	def arg__256 = (val);
	def eff__255 = push_u32(arg__256);
}
// phis: 
`;
window.traces["I32_LOAD8_U"]["raw"] = ''
window.traces["I32_LOAD8_U"]["raw__raw"] = ''
window.traces["I32_LOAD8_U"]["raw"] += `<pre class='graph'>---
config:
  layout: elk
---
graph TD
	1[\\"Finish"/]
	31 -. Codeptr .-> 1
	32 -. Stack .-> 1
	0 -. Trap Locals Globals Tables Memory Extra .-> 1
	0[/"Start"\\]
	32{{"Sϕ Stack "}}
	14 --> 32
	30 --> 32
	22 --> 32
	22["eff__255 push_u32"]
	20 --> 22
	16 -. Stack .-> 22
	16["index pop_u32"]
	0 -. Stack .-> 16
	20["val mach_readMemory32_u8"]
	11 --> 20
	16 --> 20
	15 --> 20
	15["offset imm_readULEB32"]
	12 -. Codeptr .-> 15
	12{{"Sϕ Codeptr "}}
	9 --> 12
	10 --> 12
	3 --> 12
	3["flags imm_readU8"]
	0 -. Codeptr .-> 3
	10["memindex__262 imm_readULEB32"]
	3 -. Codeptr .-> 10
	9["cond__261 u8.!="]
	8 --> 9
	5 --> 9
	5["arg__264 0"]
	8["arg__263 u8.&"]
	3 --> 8
	6 --> 8
	6["arg__266 0x40u8"]
	11{"memindex ϕ"}
	9 --> 11
	10 --> 11
	4 --> 11
	4["memindex__267 0u"]
	30["eff__250 push_u32"]
	28 --> 30
	24 -. Stack .-> 30
	24["index pop_u64"]
	0 -. Stack .-> 24
	28["val mach_readMemory64_u8"]
	11 --> 28
	24 --> 28
	23 --> 28
	23["offset imm_readULEB64"]
	12 -. Codeptr .-> 23
	14["cond__249 m_isMemory64"]
	11 --> 14
	31{{"Sϕ Codeptr "}}
	14 --> 31
	23 --> 31
	15 --> 31
</pre>`;
window.traces["I32_LOAD8_U"]["raw__raw"] += `---
config:
  layout: elk
---
graph TD
	1[\\"Finish"/]
	31 -. Codeptr .-> 1
	32 -. Stack .-> 1
	0 -. Trap Locals Globals Tables Memory Extra .-> 1
	0[/"Start"\\]
	32{{"Sϕ Stack "}}
	14 --> 32
	30 --> 32
	22 --> 32
	22["eff__255 push_u32"]
	20 --> 22
	16 -. Stack .-> 22
	16["index pop_u32"]
	0 -. Stack .-> 16
	20["val mach_readMemory32_u8"]
	11 --> 20
	16 --> 20
	15 --> 20
	15["offset imm_readULEB32"]
	12 -. Codeptr .-> 15
	12{{"Sϕ Codeptr "}}
	9 --> 12
	10 --> 12
	3 --> 12
	3["flags imm_readU8"]
	0 -. Codeptr .-> 3
	10["memindex__262 imm_readULEB32"]
	3 -. Codeptr .-> 10
	9["cond__261 u8.!="]
	8 --> 9
	5 --> 9
	5["arg__264 0"]
	8["arg__263 u8.&"]
	3 --> 8
	6 --> 8
	6["arg__266 0x40u8"]
	11{"memindex ϕ"}
	9 --> 11
	10 --> 11
	4 --> 11
	4["memindex__267 0u"]
	30["eff__250 push_u32"]
	28 --> 30
	24 -. Stack .-> 30
	24["index pop_u64"]
	0 -. Stack .-> 24
	28["val mach_readMemory64_u8"]
	11 --> 28
	24 --> 28
	23 --> 28
	23["offset imm_readULEB64"]
	12 -. Codeptr .-> 23
	14["cond__249 m_isMemory64"]
	11 --> 14
	31{{"Sϕ Codeptr "}}
	14 --> 31
	23 --> 31
	15 --> 31
`;
window.traces["I32_LOAD8_U"]["spytial"] = ''
window.traces["I32_LOAD8_U"]["spytial__raw"] = ''
window.traces["I32_LOAD8_U"]["spytial"] += `<pre class=''>{
"atoms": [
{
"id": "node_1",
"type": "finish",
"label": "Finish"
},
{
"id": "node_31",
"type": "state_phi",
"label": "StatePhi [m_isMemory64 [cond__249]]"
},
{
"id": "node_32",
"type": "state_phi",
"label": "StatePhi [m_isMemory64 [cond__249]]"
},
{
"id": "node_0",
"type": "start",
"label": "Start"
},
{
"id": "node_14",
"type": "intrinsic",
"label": "m_isMemory64 [cond__249]"
},
{
"id": "node_23",
"type": "intrinsic",
"label": "imm_readULEB64 [offset]"
},
{
"id": "node_15",
"type": "intrinsic",
"label": "imm_readULEB32 [offset]"
},
{
"id": "node_30",
"type": "intrinsic",
"label": "push_u32 [eff__250]"
},
{
"id": "node_22",
"type": "intrinsic",
"label": "push_u32 [eff__255]"
},
{
"id": "node_11",
"type": "phi",
"label": "Phi"
},
{
"id": "node_12",
"type": "state_phi",
"label": "StatePhi [u8.!= [cond__261]]"
},
{
"id": "node_28",
"type": "intrinsic",
"label": "mach_readMemory64_u8 [val]"
},
{
"id": "node_24",
"type": "intrinsic",
"label": "pop_u64 [index]"
},
{
"id": "node_20",
"type": "intrinsic",
"label": "mach_readMemory32_u8 [val]"
},
{
"id": "node_16",
"type": "intrinsic",
"label": "pop_u32 [index]"
},
{
"id": "node_9",
"type": "intrinsic",
"label": "u8.!= [cond__261]"
},
{
"id": "node_10",
"type": "intrinsic",
"label": "imm_readULEB32 [memindex__262]"
},
{
"id": "node_4",
"type": "lit",
"label": "0u"
},
{
"id": "node_3",
"type": "intrinsic",
"label": "imm_readU8 [flags]"
},
{
"id": "node_8",
"type": "intrinsic",
"label": "u8.& [arg__263]"
},
{
"id": "node_5",
"type": "lit",
"label": "0"
},
{
"id": "node_6",
"type": "lit",
"label": "0x40u8"
}
],
"relations": [
{
"id": "uses",
"name": "Uses",
"types": ["sea_node", "sea_node"],
"tuples": [
{
"atoms": ["node_14", "node_11"],
"types": ["intrinsic", "phi"]
},
{
"atoms": ["node_30", "node_28"],
"types": ["intrinsic", "intrinsic"]
},
{
"atoms": ["node_22", "node_20"],
"types": ["intrinsic", "intrinsic"]
},
{
"atoms": ["node_28", "node_11"],
"types": ["intrinsic", "phi"]
},
{
"atoms": ["node_28", "node_24"],
"types": ["intrinsic", "intrinsic"]
},
{
"atoms": ["node_28", "node_23"],
"types": ["intrinsic", "intrinsic"]
},
{
"atoms": ["node_20", "node_11"],
"types": ["intrinsic", "phi"]
},
{
"atoms": ["node_20", "node_16"],
"types": ["intrinsic", "intrinsic"]
},
{
"atoms": ["node_20", "node_15"],
"types": ["intrinsic", "intrinsic"]
},
{
"atoms": ["node_9", "node_8"],
"types": ["intrinsic", "intrinsic"]
},
{
"atoms": ["node_9", "node_5"],
"types": ["intrinsic", "lit"]
},
{
"atoms": ["node_8", "node_3"],
"types": ["intrinsic", "intrinsic"]
},
{
"atoms": ["node_8", "node_6"],
"types": ["intrinsic", "lit"]
}
]
},
{
"id": "state_uses",
"name": "StateUses",
"types": ["sea_node", "sea_node"],
"tuples": [
{
"atoms": ["node_1", "node_31"],
"types": ["finish", "state_phi"]
},
{
"atoms": ["node_1", "node_32"],
"types": ["finish", "state_phi"]
},
{
"atoms": ["node_1", "node_0"],
"types": ["finish", "start"]
},
{
"atoms": ["node_23", "node_12"],
"types": ["intrinsic", "state_phi"]
},
{
"atoms": ["node_15", "node_12"],
"types": ["intrinsic", "state_phi"]
},
{
"atoms": ["node_30", "node_24"],
"types": ["intrinsic", "intrinsic"]
},
{
"atoms": ["node_22", "node_16"],
"types": ["intrinsic", "intrinsic"]
},
{
"atoms": ["node_24", "node_0"],
"types": ["intrinsic", "start"]
},
{
"atoms": ["node_16", "node_0"],
"types": ["intrinsic", "start"]
},
{
"atoms": ["node_10", "node_3"],
"types": ["intrinsic", "intrinsic"]
},
{
"atoms": ["node_3", "node_0"],
"types": ["intrinsic", "start"]
}
]
},
{
"id": "phi_cond",
"name": "PhiCond",
"types": ["sea_node", "sea_node"],
"tuples": [
{
"atoms": ["node_31", "node_14"],
"types": ["state_phi", "intrinsic"]
},
{
"atoms": ["node_32", "node_14"],
"types": ["state_phi", "intrinsic"]
},
{
"atoms": ["node_11", "node_9"],
"types": ["phi", "intrinsic"]
},
{
"atoms": ["node_12", "node_9"],
"types": ["state_phi", "intrinsic"]
}
]
},
{
"id": "phi_true",
"name": "PhiTrue",
"types": ["sea_node", "sea_node"],
"tuples": [
{
"atoms": ["node_31", "node_23"],
"types": ["state_phi", "intrinsic"]
},
{
"atoms": ["node_32", "node_30"],
"types": ["state_phi", "intrinsic"]
},
{
"atoms": ["node_11", "node_10"],
"types": ["phi", "intrinsic"]
},
{
"atoms": ["node_12", "node_10"],
"types": ["state_phi", "intrinsic"]
}
]
},
{
"id": "phi_false",
"name": "PhiFalse",
"types": ["sea_node", "sea_node"],
"tuples": [
{
"atoms": ["node_31", "node_15"],
"types": ["state_phi", "intrinsic"]
},
{
"atoms": ["node_32", "node_22"],
"types": ["state_phi", "intrinsic"]
},
{
"atoms": ["node_11", "node_4"],
"types": ["phi", "lit"]
},
{
"atoms": ["node_12", "node_3"],
"types": ["state_phi", "intrinsic"]
}
]
}
]
}</pre>`;
window.traces["I32_LOAD8_U"]["spytial__raw"] += `{
"atoms": [
{
"id": "node_1",
"type": "finish",
"label": "Finish"
},
{
"id": "node_31",
"type": "state_phi",
"label": "StatePhi [m_isMemory64 [cond__249]]"
},
{
"id": "node_32",
"type": "state_phi",
"label": "StatePhi [m_isMemory64 [cond__249]]"
},
{
"id": "node_0",
"type": "start",
"label": "Start"
},
{
"id": "node_14",
"type": "intrinsic",
"label": "m_isMemory64 [cond__249]"
},
{
"id": "node_23",
"type": "intrinsic",
"label": "imm_readULEB64 [offset]"
},
{
"id": "node_15",
"type": "intrinsic",
"label": "imm_readULEB32 [offset]"
},
{
"id": "node_30",
"type": "intrinsic",
"label": "push_u32 [eff__250]"
},
{
"id": "node_22",
"type": "intrinsic",
"label": "push_u32 [eff__255]"
},
{
"id": "node_11",
"type": "phi",
"label": "Phi"
},
{
"id": "node_12",
"type": "state_phi",
"label": "StatePhi [u8.!= [cond__261]]"
},
{
"id": "node_28",
"type": "intrinsic",
"label": "mach_readMemory64_u8 [val]"
},
{
"id": "node_24",
"type": "intrinsic",
"label": "pop_u64 [index]"
},
{
"id": "node_20",
"type": "intrinsic",
"label": "mach_readMemory32_u8 [val]"
},
{
"id": "node_16",
"type": "intrinsic",
"label": "pop_u32 [index]"
},
{
"id": "node_9",
"type": "intrinsic",
"label": "u8.!= [cond__261]"
},
{
"id": "node_10",
"type": "intrinsic",
"label": "imm_readULEB32 [memindex__262]"
},
{
"id": "node_4",
"type": "lit",
"label": "0u"
},
{
"id": "node_3",
"type": "intrinsic",
"label": "imm_readU8 [flags]"
},
{
"id": "node_8",
"type": "intrinsic",
"label": "u8.& [arg__263]"
},
{
"id": "node_5",
"type": "lit",
"label": "0"
},
{
"id": "node_6",
"type": "lit",
"label": "0x40u8"
}
],
"relations": [
{
"id": "uses",
"name": "Uses",
"types": ["sea_node", "sea_node"],
"tuples": [
{
"atoms": ["node_14", "node_11"],
"types": ["intrinsic", "phi"]
},
{
"atoms": ["node_30", "node_28"],
"types": ["intrinsic", "intrinsic"]
},
{
"atoms": ["node_22", "node_20"],
"types": ["intrinsic", "intrinsic"]
},
{
"atoms": ["node_28", "node_11"],
"types": ["intrinsic", "phi"]
},
{
"atoms": ["node_28", "node_24"],
"types": ["intrinsic", "intrinsic"]
},
{
"atoms": ["node_28", "node_23"],
"types": ["intrinsic", "intrinsic"]
},
{
"atoms": ["node_20", "node_11"],
"types": ["intrinsic", "phi"]
},
{
"atoms": ["node_20", "node_16"],
"types": ["intrinsic", "intrinsic"]
},
{
"atoms": ["node_20", "node_15"],
"types": ["intrinsic", "intrinsic"]
},
{
"atoms": ["node_9", "node_8"],
"types": ["intrinsic", "intrinsic"]
},
{
"atoms": ["node_9", "node_5"],
"types": ["intrinsic", "lit"]
},
{
"atoms": ["node_8", "node_3"],
"types": ["intrinsic", "intrinsic"]
},
{
"atoms": ["node_8", "node_6"],
"types": ["intrinsic", "lit"]
}
]
},
{
"id": "state_uses",
"name": "StateUses",
"types": ["sea_node", "sea_node"],
"tuples": [
{
"atoms": ["node_1", "node_31"],
"types": ["finish", "state_phi"]
},
{
"atoms": ["node_1", "node_32"],
"types": ["finish", "state_phi"]
},
{
"atoms": ["node_1", "node_0"],
"types": ["finish", "start"]
},
{
"atoms": ["node_23", "node_12"],
"types": ["intrinsic", "state_phi"]
},
{
"atoms": ["node_15", "node_12"],
"types": ["intrinsic", "state_phi"]
},
{
"atoms": ["node_30", "node_24"],
"types": ["intrinsic", "intrinsic"]
},
{
"atoms": ["node_22", "node_16"],
"types": ["intrinsic", "intrinsic"]
},
{
"atoms": ["node_24", "node_0"],
"types": ["intrinsic", "start"]
},
{
"atoms": ["node_16", "node_0"],
"types": ["intrinsic", "start"]
},
{
"atoms": ["node_10", "node_3"],
"types": ["intrinsic", "intrinsic"]
},
{
"atoms": ["node_3", "node_0"],
"types": ["intrinsic", "start"]
}
]
},
{
"id": "phi_cond",
"name": "PhiCond",
"types": ["sea_node", "sea_node"],
"tuples": [
{
"atoms": ["node_31", "node_14"],
"types": ["state_phi", "intrinsic"]
},
{
"atoms": ["node_32", "node_14"],
"types": ["state_phi", "intrinsic"]
},
{
"atoms": ["node_11", "node_9"],
"types": ["phi", "intrinsic"]
},
{
"atoms": ["node_12", "node_9"],
"types": ["state_phi", "intrinsic"]
}
]
},
{
"id": "phi_true",
"name": "PhiTrue",
"types": ["sea_node", "sea_node"],
"tuples": [
{
"atoms": ["node_31", "node_23"],
"types": ["state_phi", "intrinsic"]
},
{
"atoms": ["node_32", "node_30"],
"types": ["state_phi", "intrinsic"]
},
{
"atoms": ["node_11", "node_10"],
"types": ["phi", "intrinsic"]
},
{
"atoms": ["node_12", "node_10"],
"types": ["state_phi", "intrinsic"]
}
]
},
{
"id": "phi_false",
"name": "PhiFalse",
"types": ["sea_node", "sea_node"],
"tuples": [
{
"atoms": ["node_31", "node_15"],
"types": ["state_phi", "intrinsic"]
},
{
"atoms": ["node_32", "node_22"],
"types": ["state_phi", "intrinsic"]
},
{
"atoms": ["node_11", "node_4"],
"types": ["phi", "lit"]
},
{
"atoms": ["node_12", "node_3"],
"types": ["state_phi", "intrinsic"]
}
]
}
]
}`;
window.traces["I32_LOAD8_U"]["overloadOps"] = ''
window.traces["I32_LOAD8_U"]["overloadOps__raw"] = ''
window.traces["I32_LOAD8_U"]["overloadOps"] += `<pre class='graph'>---
config:
  layout: elk
---
graph TD
	1[\\"Finish"/]
	31 -. Codeptr .-> 1
	32 -. Stack .-> 1
	0 -. Trap Locals Globals Tables Memory Extra .-> 1
	0[/"Start"\\]
	32{{"Sϕ Stack "}}
	14 --> 32
	30 --> 32
	22 --> 32
	22["eff__255 push_u32"]
	20 --> 22
	16 -. Stack .-> 22
	16["index pop_u32"]
	0 -. Stack .-> 16
	20["val mach_readMemory32_u8"]
	11 --> 20
	16 --> 20
	15 --> 20
	15["offset imm_readULEB32"]
	12 -. Codeptr .-> 15
	12{{"Sϕ Codeptr "}}
	9 --> 12
	10 --> 12
	3 --> 12
	3["flags imm_readU8"]
	0 -. Codeptr .-> 3
	10["memindex__262 imm_readULEB32"]
	3 -. Codeptr .-> 10
	9["cond__261 u8.!="]
	8 --> 9
	5 --> 9
	5["arg__264 0"]
	8["arg__263 u8.&"]
	3 --> 8
	6 --> 8
	6["arg__266 0x40u8"]
	11{"memindex ϕ"}
	9 --> 11
	10 --> 11
	4 --> 11
	4["memindex__268 0u"]
	30["eff__250 push_u32"]
	28 --> 30
	24 -. Stack .-> 30
	24["index pop_u64"]
	0 -. Stack .-> 24
	28["val mach_readMemory64_u8"]
	11 --> 28
	24 --> 28
	23 --> 28
	23["offset imm_readULEB64"]
	12 -. Codeptr .-> 23
	14["cond__249 m_isMemory64"]
	11 --> 14
	31{{"Sϕ Codeptr "}}
	14 --> 31
	23 --> 31
	15 --> 31
</pre>`;
window.traces["I32_LOAD8_U"]["overloadOps__raw"] += `---
config:
  layout: elk
---
graph TD
	1[\\"Finish"/]
	31 -. Codeptr .-> 1
	32 -. Stack .-> 1
	0 -. Trap Locals Globals Tables Memory Extra .-> 1
	0[/"Start"\\]
	32{{"Sϕ Stack "}}
	14 --> 32
	30 --> 32
	22 --> 32
	22["eff__255 push_u32"]
	20 --> 22
	16 -. Stack .-> 22
	16["index pop_u32"]
	0 -. Stack .-> 16
	20["val mach_readMemory32_u8"]
	11 --> 20
	16 --> 20
	15 --> 20
	15["offset imm_readULEB32"]
	12 -. Codeptr .-> 15
	12{{"Sϕ Codeptr "}}
	9 --> 12
	10 --> 12
	3 --> 12
	3["flags imm_readU8"]
	0 -. Codeptr .-> 3
	10["memindex__262 imm_readULEB32"]
	3 -. Codeptr .-> 10
	9["cond__261 u8.!="]
	8 --> 9
	5 --> 9
	5["arg__264 0"]
	8["arg__263 u8.&"]
	3 --> 8
	6 --> 8
	6["arg__266 0x40u8"]
	11{"memindex ϕ"}
	9 --> 11
	10 --> 11
	4 --> 11
	4["memindex__268 0u"]
	30["eff__250 push_u32"]
	28 --> 30
	24 -. Stack .-> 30
	24["index pop_u64"]
	0 -. Stack .-> 24
	28["val mach_readMemory64_u8"]
	11 --> 28
	24 --> 28
	23 --> 28
	23["offset imm_readULEB64"]
	12 -. Codeptr .-> 23
	14["cond__249 m_isMemory64"]
	11 --> 14
	31{{"Sϕ Codeptr "}}
	14 --> 31
	23 --> 31
	15 --> 31
`;
window.traces["I32_LOAD8_U"]["addAbstractions"] = ''
window.traces["I32_LOAD8_U"]["addAbstractions__raw"] = ''
window.traces["I32_LOAD8_U"]["addAbstractions"] += `<pre class='graph'>---
config:
  layout: elk
---
graph TD
	1[\\"Finish"/]
	31 -. Codeptr .-> 1
	32 -. Stack .-> 1
	0 -. Trap Locals Globals Tables Memory Extra .-> 1
	0[/"Start"\\]
	32{{"Sϕ Stack "}}
	14 --> 32
	30 --> 32
	22 --> 32
	22["eff__255 push_u32"]
	20 --> 22
	16 -. Stack .-> 22
	16["index pop_u32"]
	0 -. Stack .-> 16
	20["val mach_readMemory32_u8"]
	11 --> 20
	16 --> 20
	15 --> 20
	15["offset imm_readULEB32"]
	12 -. Codeptr .-> 15
	12{{"Sϕ Codeptr "}}
	9 --> 12
	10 --> 12
	3 --> 12
	3["flags imm_readU8"]
	0 -. Codeptr .-> 3
	10["memindex__262 imm_readULEB32"]
	3 -. Codeptr .-> 10
	9["cond__261 u8.!="]
	8 --> 9
	5 --> 9
	5["arg__264 0"]
	8["arg__263 u8.&"]
	3 --> 8
	6 --> 8
	6["arg__266 0x40u8"]
	11{"memindex ϕ"}
	9 --> 11
	10 --> 11
	4 --> 11
	4["memindex__268 0u"]
	30["eff__250 push_u32"]
	28 --> 30
	24 -. Stack .-> 30
	24["index pop_u64"]
	0 -. Stack .-> 24
	28["val mach_readMemory64_u8"]
	11 --> 28
	24 --> 28
	23 --> 28
	23["offset imm_readULEB64"]
	12 -. Codeptr .-> 23
	14["cond__249 m_isMemory64"]
	11 --> 14
	31{{"Sϕ Codeptr "}}
	14 --> 31
	23 --> 31
	15 --> 31
</pre>`;
window.traces["I32_LOAD8_U"]["addAbstractions__raw"] += `---
config:
  layout: elk
---
graph TD
	1[\\"Finish"/]
	31 -. Codeptr .-> 1
	32 -. Stack .-> 1
	0 -. Trap Locals Globals Tables Memory Extra .-> 1
	0[/"Start"\\]
	32{{"Sϕ Stack "}}
	14 --> 32
	30 --> 32
	22 --> 32
	22["eff__255 push_u32"]
	20 --> 22
	16 -. Stack .-> 22
	16["index pop_u32"]
	0 -. Stack .-> 16
	20["val mach_readMemory32_u8"]
	11 --> 20
	16 --> 20
	15 --> 20
	15["offset imm_readULEB32"]
	12 -. Codeptr .-> 15
	12{{"Sϕ Codeptr "}}
	9 --> 12
	10 --> 12
	3 --> 12
	3["flags imm_readU8"]
	0 -. Codeptr .-> 3
	10["memindex__262 imm_readULEB32"]
	3 -. Codeptr .-> 10
	9["cond__261 u8.!="]
	8 --> 9
	5 --> 9
	5["arg__264 0"]
	8["arg__263 u8.&"]
	3 --> 8
	6 --> 8
	6["arg__266 0x40u8"]
	11{"memindex ϕ"}
	9 --> 11
	10 --> 11
	4 --> 11
	4["memindex__268 0u"]
	30["eff__250 push_u32"]
	28 --> 30
	24 -. Stack .-> 30
	24["index pop_u64"]
	0 -. Stack .-> 24
	28["val mach_readMemory64_u8"]
	11 --> 28
	24 --> 28
	23 --> 28
	23["offset imm_readULEB64"]
	12 -. Codeptr .-> 23
	14["cond__249 m_isMemory64"]
	11 --> 14
	31{{"Sϕ Codeptr "}}
	14 --> 31
	23 --> 31
	15 --> 31
`;
window.traces["I32_LOAD8_U"]["schedulerMermaid"] = ''
window.traces["I32_LOAD8_U"]["schedulerMermaid__raw"] = ''
window.traces["I32_LOAD8_U"]["schedulerMermaid"] += `<pre class='graph'>graph TD
subgraph block_241["Block 241"]
	direction TB
	b241_1[\\"Finish"/]
end
phi_243 --> block_241
subgraph phi_243["Phi 243"]
	p243_32{{"Sϕ Stack "}}
	p243_31{{"Sϕ Codeptr "}}
end
block_244 --> phi_243
block_245 --> phi_243
subgraph block_244["Block 244"]
	direction TB
	b244_24["index pop_u64"]
	b244_28["val mach_readMemory64_u8"]
	b244_30["eff__250 push_u32"]
	b244_23["offset imm_readULEB64"]
	b244_24 --> b244_28
	b244_28 --> b244_30
	b244_30 --> b244_23
end
branch_242 --> block_244
subgraph branch_242["Branch 242"]
	br242_14["cond__249 m_isMemory64"]

end
block_246 --> branch_242
subgraph block_246["Block 246"]
	direction TB
	b246_14["cond__249 m_isMemory64"]
end
phi_248 --> block_246
subgraph phi_248["Phi 248"]
	p248_12{{"Sϕ Codeptr "}}
	p248_12{{"Sϕ Codeptr "}}
	p248_12{{"Sϕ Codeptr "}}
	p248_12{{"Sϕ Codeptr "}}
	p248_11{"memindex ϕ"}
	p248_11{"memindex ϕ"}
	p248_11{"memindex ϕ"}
	p248_11{"memindex ϕ"}
	p248_11{"memindex ϕ"}
	p248_11{"memindex ϕ"}
	p248_12{{"Sϕ Codeptr "}}
	p248_12{{"Sϕ Codeptr "}}
	p248_12{{"Sϕ Codeptr "}}
	p248_12{{"Sϕ Codeptr "}}
end
block_249 --> phi_248
block_250 --> phi_248
subgraph block_249["Block 249"]
	direction TB
	b249_10["memindex__262 imm_readULEB32"]
end
branch_247 --> block_249
subgraph branch_247["Branch 247"]
	br247_9["cond__261 u8.!="]

end
block_251 --> branch_247
subgraph block_251["Block 251"]
	direction TB
	b251_0[/"Start"\\]
	b251_6["arg__266 0x40u8"]
	b251_5["arg__264 0"]
	b251_8["arg__263 u8.&"]
	b251_9["cond__261 u8.!="]
	b251_0 --> b251_6
	b251_6 --> b251_5
	b251_5 --> b251_8
	b251_8 --> b251_9
end
subgraph block_250["Block 250"]
	direction TB
	b250_4["memindex__268 0u"]
	b250_3["flags imm_readU8"]
	b250_4 --> b250_3
end
branch_247 --> block_250
subgraph block_245["Block 245"]
	direction TB
	b245_16["index pop_u32"]
	b245_20["val mach_readMemory32_u8"]
	b245_22["eff__255 push_u32"]
	b245_15["offset imm_readULEB32"]
	b245_16 --> b245_20
	b245_20 --> b245_22
	b245_22 --> b245_15
end
branch_242 --> block_245

</pre>`;
window.traces["I32_LOAD8_U"]["schedulerMermaid__raw"] += `graph TD
subgraph block_241["Block 241"]
	direction TB
	b241_1[\\"Finish"/]
end
phi_243 --> block_241
subgraph phi_243["Phi 243"]
	p243_32{{"Sϕ Stack "}}
	p243_31{{"Sϕ Codeptr "}}
end
block_244 --> phi_243
block_245 --> phi_243
subgraph block_244["Block 244"]
	direction TB
	b244_24["index pop_u64"]
	b244_28["val mach_readMemory64_u8"]
	b244_30["eff__250 push_u32"]
	b244_23["offset imm_readULEB64"]
	b244_24 --> b244_28
	b244_28 --> b244_30
	b244_30 --> b244_23
end
branch_242 --> block_244
subgraph branch_242["Branch 242"]
	br242_14["cond__249 m_isMemory64"]

end
block_246 --> branch_242
subgraph block_246["Block 246"]
	direction TB
	b246_14["cond__249 m_isMemory64"]
end
phi_248 --> block_246
subgraph phi_248["Phi 248"]
	p248_12{{"Sϕ Codeptr "}}
	p248_12{{"Sϕ Codeptr "}}
	p248_12{{"Sϕ Codeptr "}}
	p248_12{{"Sϕ Codeptr "}}
	p248_11{"memindex ϕ"}
	p248_11{"memindex ϕ"}
	p248_11{"memindex ϕ"}
	p248_11{"memindex ϕ"}
	p248_11{"memindex ϕ"}
	p248_11{"memindex ϕ"}
	p248_12{{"Sϕ Codeptr "}}
	p248_12{{"Sϕ Codeptr "}}
	p248_12{{"Sϕ Codeptr "}}
	p248_12{{"Sϕ Codeptr "}}
end
block_249 --> phi_248
block_250 --> phi_248
subgraph block_249["Block 249"]
	direction TB
	b249_10["memindex__262 imm_readULEB32"]
end
branch_247 --> block_249
subgraph branch_247["Branch 247"]
	br247_9["cond__261 u8.!="]

end
block_251 --> branch_247
subgraph block_251["Block 251"]
	direction TB
	b251_0[/"Start"\\]
	b251_6["arg__266 0x40u8"]
	b251_5["arg__264 0"]
	b251_8["arg__263 u8.&"]
	b251_9["cond__261 u8.!="]
	b251_0 --> b251_6
	b251_6 --> b251_5
	b251_5 --> b251_8
	b251_8 --> b251_9
end
subgraph block_250["Block 250"]
	direction TB
	b250_4["memindex__268 0u"]
	b250_3["flags imm_readU8"]
	b250_4 --> b250_3
end
branch_247 --> block_250
subgraph block_245["Block 245"]
	direction TB
	b245_16["index pop_u32"]
	b245_20["val mach_readMemory32_u8"]
	b245_22["eff__255 push_u32"]
	b245_15["offset imm_readULEB32"]
	b245_16 --> b245_20
	b245_20 --> b245_22
	b245_22 --> b245_15
end
branch_242 --> block_245

`;
window.traces["I32_LOAD8_U"]["unLEM"] = ''
window.traces["I32_LOAD8_U"]["unLEM__raw"] = ''
window.traces["I32_LOAD8_U"]["unLEM"] += `<pre class='graph'>---
config:
  layout: elk
---
graph TD
	1[\\"Finish"/]
	31 -. Codeptr .-> 1
	32 -. Stack .-> 1
	0 -. Trap Locals Globals Tables Memory Extra .-> 1
	0[/"Start"\\]
	32{{"Sϕ Stack "}}
	14 --> 32
	30 --> 32
	22 --> 32
	22["eff__255 push_u32"]
	20 --> 22
	16 -. Stack .-> 22
	16["index pop_u32"]
	0 -. Stack .-> 16
	20["val mach_readMemory32_u8"]
	11 --> 20
	16 --> 20
	15 --> 20
	15["offset imm_readULEB32"]
	12 -. Codeptr .-> 15
	12{{"Sϕ Codeptr "}}
	9 --> 12
	10 --> 12
	3 --> 12
	3["flags imm_readU8"]
	0 -. Codeptr .-> 3
	10["memindex__262 imm_readULEB32"]
	3 -. Codeptr .-> 10
	9["cond__261 u8.!="]
	8 --> 9
	5 --> 9
	5["arg__264 0"]
	8["arg__263 u8.&"]
	3 --> 8
	6 --> 8
	6["arg__266 0x40u8"]
	11{"memindex ϕ"}
	9 --> 11
	10 --> 11
	4 --> 11
	4["memindex__268 0u"]
	30["eff__250 push_u32"]
	28 --> 30
	24 -. Stack .-> 30
	24["index pop_u64"]
	0 -. Stack .-> 24
	28["val mach_readMemory64_u8"]
	11 --> 28
	24 --> 28
	23 --> 28
	23["offset imm_readULEB64"]
	12 -. Codeptr .-> 23
	14["cond__249 m_isMemory64"]
	11 --> 14
	31{{"Sϕ Codeptr "}}
	14 --> 31
	23 --> 31
	15 --> 31
</pre>`;
window.traces["I32_LOAD8_U"]["unLEM__raw"] += `---
config:
  layout: elk
---
graph TD
	1[\\"Finish"/]
	31 -. Codeptr .-> 1
	32 -. Stack .-> 1
	0 -. Trap Locals Globals Tables Memory Extra .-> 1
	0[/"Start"\\]
	32{{"Sϕ Stack "}}
	14 --> 32
	30 --> 32
	22 --> 32
	22["eff__255 push_u32"]
	20 --> 22
	16 -. Stack .-> 22
	16["index pop_u32"]
	0 -. Stack .-> 16
	20["val mach_readMemory32_u8"]
	11 --> 20
	16 --> 20
	15 --> 20
	15["offset imm_readULEB32"]
	12 -. Codeptr .-> 15
	12{{"Sϕ Codeptr "}}
	9 --> 12
	10 --> 12
	3 --> 12
	3["flags imm_readU8"]
	0 -. Codeptr .-> 3
	10["memindex__262 imm_readULEB32"]
	3 -. Codeptr .-> 10
	9["cond__261 u8.!="]
	8 --> 9
	5 --> 9
	5["arg__264 0"]
	8["arg__263 u8.&"]
	3 --> 8
	6 --> 8
	6["arg__266 0x40u8"]
	11{"memindex ϕ"}
	9 --> 11
	10 --> 11
	4 --> 11
	4["memindex__268 0u"]
	30["eff__250 push_u32"]
	28 --> 30
	24 -. Stack .-> 30
	24["index pop_u64"]
	0 -. Stack .-> 24
	28["val mach_readMemory64_u8"]
	11 --> 28
	24 --> 28
	23 --> 28
	23["offset imm_readULEB64"]
	12 -. Codeptr .-> 23
	14["cond__249 m_isMemory64"]
	11 --> 14
	31{{"Sϕ Codeptr "}}
	14 --> 31
	23 --> 31
	15 --> 31
`;
window.traces["I32_LOAD8_U"]["unlem_schedule"] = ''
window.traces["I32_LOAD8_U"]["unlem_schedule__raw"] = ''
window.traces["I32_LOAD8_U"]["unlem_schedule"] += `<pre class=''>def flags = imm_readU8();
def arg__266 : byte = 0x40u8;
def arg__263 = u8.&(flags, arg__266);
def arg__264 : byte = 0;
def cond__261 = u8.!=(arg__263, arg__264);
var memindex: u32;
if (cond__261) {
	def memindex__262 = imm_readULEB32();
} else {
	def memindex__268 : u32 = 0u;
}
// phis: memindex <- memindex__262; memindex <- memindex__268; 
def cond__249 = m_isMemory64(memindex);
if (cond__249) {
	def offset = imm_readULEB64();
	def index = pop_u64();
	def val = mach_readMemory64_u8(memindex, index, offset);
	def eff__250 = push_u32(val);
} else {
	def offset = imm_readULEB32();
	def index = pop_u32();
	def val = mach_readMemory32_u8(memindex, index, offset);
	def eff__255 = push_u32(val);
}
// phis: 
</pre>`;
window.traces["I32_LOAD8_U"]["unlem_schedule__raw"] += `def flags = imm_readU8();
def arg__266 : byte = 0x40u8;
def arg__263 = u8.&(flags, arg__266);
def arg__264 : byte = 0;
def cond__261 = u8.!=(arg__263, arg__264);
var memindex: u32;
if (cond__261) {
	def memindex__262 = imm_readULEB32();
} else {
	def memindex__268 : u32 = 0u;
}
// phis: memindex <- memindex__262; memindex <- memindex__268; 
def cond__249 = m_isMemory64(memindex);
if (cond__249) {
	def offset = imm_readULEB64();
	def index = pop_u64();
	def val = mach_readMemory64_u8(memindex, index, offset);
	def eff__250 = push_u32(val);
} else {
	def offset = imm_readULEB32();
	def index = pop_u32();
	def val = mach_readMemory32_u8(memindex, index, offset);
	def eff__255 = push_u32(val);
}
// phis: 
`;
window.traces["I32_LOAD8_U"]["spytial_ul"] = ''
window.traces["I32_LOAD8_U"]["spytial_ul__raw"] = ''
window.traces["I32_LOAD8_U"]["spytial_ul"] += `<pre class=''>{
"atoms": [
{
"id": "node_1",
"type": "finish",
"label": "Finish"
},
{
"id": "node_31",
"type": "state_phi",
"label": "StatePhi [m_isMemory64 [cond__249]]"
},
{
"id": "node_32",
"type": "state_phi",
"label": "StatePhi [m_isMemory64 [cond__249]]"
},
{
"id": "node_0",
"type": "start",
"label": "Start"
},
{
"id": "node_14",
"type": "intrinsic",
"label": "m_isMemory64 [cond__249]"
},
{
"id": "node_23",
"type": "intrinsic",
"label": "imm_readULEB64 [offset]"
},
{
"id": "node_15",
"type": "intrinsic",
"label": "imm_readULEB32 [offset]"
},
{
"id": "node_30",
"type": "intrinsic",
"label": "push_u32 [eff__250]"
},
{
"id": "node_22",
"type": "intrinsic",
"label": "push_u32 [eff__255]"
},
{
"id": "node_11",
"type": "phi",
"label": "Phi"
},
{
"id": "node_12",
"type": "state_phi",
"label": "StatePhi [u8.!= [cond__261]]"
},
{
"id": "node_28",
"type": "intrinsic",
"label": "mach_readMemory64_u8 [val]"
},
{
"id": "node_24",
"type": "intrinsic",
"label": "pop_u64 [index]"
},
{
"id": "node_20",
"type": "intrinsic",
"label": "mach_readMemory32_u8 [val]"
},
{
"id": "node_16",
"type": "intrinsic",
"label": "pop_u32 [index]"
},
{
"id": "node_9",
"type": "intrinsic",
"label": "u8.!= [cond__261]"
},
{
"id": "node_10",
"type": "intrinsic",
"label": "imm_readULEB32 [memindex__262]"
},
{
"id": "node_4",
"type": "lit",
"label": "0u"
},
{
"id": "node_3",
"type": "intrinsic",
"label": "imm_readU8 [flags]"
},
{
"id": "node_8",
"type": "intrinsic",
"label": "u8.& [arg__263]"
},
{
"id": "node_5",
"type": "lit",
"label": "0"
},
{
"id": "node_6",
"type": "lit",
"label": "0x40u8"
}
],
"relations": [
{
"id": "uses",
"name": "Uses",
"types": ["sea_node", "sea_node"],
"tuples": [
{
"atoms": ["node_14", "node_11"],
"types": ["intrinsic", "phi"]
},
{
"atoms": ["node_30", "node_28"],
"types": ["intrinsic", "intrinsic"]
},
{
"atoms": ["node_22", "node_20"],
"types": ["intrinsic", "intrinsic"]
},
{
"atoms": ["node_28", "node_11"],
"types": ["intrinsic", "phi"]
},
{
"atoms": ["node_28", "node_24"],
"types": ["intrinsic", "intrinsic"]
},
{
"atoms": ["node_28", "node_23"],
"types": ["intrinsic", "intrinsic"]
},
{
"atoms": ["node_20", "node_11"],
"types": ["intrinsic", "phi"]
},
{
"atoms": ["node_20", "node_16"],
"types": ["intrinsic", "intrinsic"]
},
{
"atoms": ["node_20", "node_15"],
"types": ["intrinsic", "intrinsic"]
},
{
"atoms": ["node_9", "node_8"],
"types": ["intrinsic", "intrinsic"]
},
{
"atoms": ["node_9", "node_5"],
"types": ["intrinsic", "lit"]
},
{
"atoms": ["node_8", "node_3"],
"types": ["intrinsic", "intrinsic"]
},
{
"atoms": ["node_8", "node_6"],
"types": ["intrinsic", "lit"]
}
]
},
{
"id": "state_uses",
"name": "StateUses",
"types": ["sea_node", "sea_node"],
"tuples": [
{
"atoms": ["node_1", "node_31"],
"types": ["finish", "state_phi"]
},
{
"atoms": ["node_1", "node_32"],
"types": ["finish", "state_phi"]
},
{
"atoms": ["node_1", "node_0"],
"types": ["finish", "start"]
},
{
"atoms": ["node_23", "node_12"],
"types": ["intrinsic", "state_phi"]
},
{
"atoms": ["node_15", "node_12"],
"types": ["intrinsic", "state_phi"]
},
{
"atoms": ["node_30", "node_24"],
"types": ["intrinsic", "intrinsic"]
},
{
"atoms": ["node_22", "node_16"],
"types": ["intrinsic", "intrinsic"]
},
{
"atoms": ["node_24", "node_0"],
"types": ["intrinsic", "start"]
},
{
"atoms": ["node_16", "node_0"],
"types": ["intrinsic", "start"]
},
{
"atoms": ["node_10", "node_3"],
"types": ["intrinsic", "intrinsic"]
},
{
"atoms": ["node_3", "node_0"],
"types": ["intrinsic", "start"]
}
]
},
{
"id": "phi_cond",
"name": "PhiCond",
"types": ["sea_node", "sea_node"],
"tuples": [
{
"atoms": ["node_31", "node_14"],
"types": ["state_phi", "intrinsic"]
},
{
"atoms": ["node_32", "node_14"],
"types": ["state_phi", "intrinsic"]
},
{
"atoms": ["node_11", "node_9"],
"types": ["phi", "intrinsic"]
},
{
"atoms": ["node_12", "node_9"],
"types": ["state_phi", "intrinsic"]
}
]
},
{
"id": "phi_true",
"name": "PhiTrue",
"types": ["sea_node", "sea_node"],
"tuples": [
{
"atoms": ["node_31", "node_23"],
"types": ["state_phi", "intrinsic"]
},
{
"atoms": ["node_32", "node_30"],
"types": ["state_phi", "intrinsic"]
},
{
"atoms": ["node_11", "node_10"],
"types": ["phi", "intrinsic"]
},
{
"atoms": ["node_12", "node_10"],
"types": ["state_phi", "intrinsic"]
}
]
},
{
"id": "phi_false",
"name": "PhiFalse",
"types": ["sea_node", "sea_node"],
"tuples": [
{
"atoms": ["node_31", "node_15"],
"types": ["state_phi", "intrinsic"]
},
{
"atoms": ["node_32", "node_22"],
"types": ["state_phi", "intrinsic"]
},
{
"atoms": ["node_11", "node_4"],
"types": ["phi", "lit"]
},
{
"atoms": ["node_12", "node_3"],
"types": ["state_phi", "intrinsic"]
}
]
}
]
}</pre>`;
window.traces["I32_LOAD8_U"]["spytial_ul__raw"] += `{
"atoms": [
{
"id": "node_1",
"type": "finish",
"label": "Finish"
},
{
"id": "node_31",
"type": "state_phi",
"label": "StatePhi [m_isMemory64 [cond__249]]"
},
{
"id": "node_32",
"type": "state_phi",
"label": "StatePhi [m_isMemory64 [cond__249]]"
},
{
"id": "node_0",
"type": "start",
"label": "Start"
},
{
"id": "node_14",
"type": "intrinsic",
"label": "m_isMemory64 [cond__249]"
},
{
"id": "node_23",
"type": "intrinsic",
"label": "imm_readULEB64 [offset]"
},
{
"id": "node_15",
"type": "intrinsic",
"label": "imm_readULEB32 [offset]"
},
{
"id": "node_30",
"type": "intrinsic",
"label": "push_u32 [eff__250]"
},
{
"id": "node_22",
"type": "intrinsic",
"label": "push_u32 [eff__255]"
},
{
"id": "node_11",
"type": "phi",
"label": "Phi"
},
{
"id": "node_12",
"type": "state_phi",
"label": "StatePhi [u8.!= [cond__261]]"
},
{
"id": "node_28",
"type": "intrinsic",
"label": "mach_readMemory64_u8 [val]"
},
{
"id": "node_24",
"type": "intrinsic",
"label": "pop_u64 [index]"
},
{
"id": "node_20",
"type": "intrinsic",
"label": "mach_readMemory32_u8 [val]"
},
{
"id": "node_16",
"type": "intrinsic",
"label": "pop_u32 [index]"
},
{
"id": "node_9",
"type": "intrinsic",
"label": "u8.!= [cond__261]"
},
{
"id": "node_10",
"type": "intrinsic",
"label": "imm_readULEB32 [memindex__262]"
},
{
"id": "node_4",
"type": "lit",
"label": "0u"
},
{
"id": "node_3",
"type": "intrinsic",
"label": "imm_readU8 [flags]"
},
{
"id": "node_8",
"type": "intrinsic",
"label": "u8.& [arg__263]"
},
{
"id": "node_5",
"type": "lit",
"label": "0"
},
{
"id": "node_6",
"type": "lit",
"label": "0x40u8"
}
],
"relations": [
{
"id": "uses",
"name": "Uses",
"types": ["sea_node", "sea_node"],
"tuples": [
{
"atoms": ["node_14", "node_11"],
"types": ["intrinsic", "phi"]
},
{
"atoms": ["node_30", "node_28"],
"types": ["intrinsic", "intrinsic"]
},
{
"atoms": ["node_22", "node_20"],
"types": ["intrinsic", "intrinsic"]
},
{
"atoms": ["node_28", "node_11"],
"types": ["intrinsic", "phi"]
},
{
"atoms": ["node_28", "node_24"],
"types": ["intrinsic", "intrinsic"]
},
{
"atoms": ["node_28", "node_23"],
"types": ["intrinsic", "intrinsic"]
},
{
"atoms": ["node_20", "node_11"],
"types": ["intrinsic", "phi"]
},
{
"atoms": ["node_20", "node_16"],
"types": ["intrinsic", "intrinsic"]
},
{
"atoms": ["node_20", "node_15"],
"types": ["intrinsic", "intrinsic"]
},
{
"atoms": ["node_9", "node_8"],
"types": ["intrinsic", "intrinsic"]
},
{
"atoms": ["node_9", "node_5"],
"types": ["intrinsic", "lit"]
},
{
"atoms": ["node_8", "node_3"],
"types": ["intrinsic", "intrinsic"]
},
{
"atoms": ["node_8", "node_6"],
"types": ["intrinsic", "lit"]
}
]
},
{
"id": "state_uses",
"name": "StateUses",
"types": ["sea_node", "sea_node"],
"tuples": [
{
"atoms": ["node_1", "node_31"],
"types": ["finish", "state_phi"]
},
{
"atoms": ["node_1", "node_32"],
"types": ["finish", "state_phi"]
},
{
"atoms": ["node_1", "node_0"],
"types": ["finish", "start"]
},
{
"atoms": ["node_23", "node_12"],
"types": ["intrinsic", "state_phi"]
},
{
"atoms": ["node_15", "node_12"],
"types": ["intrinsic", "state_phi"]
},
{
"atoms": ["node_30", "node_24"],
"types": ["intrinsic", "intrinsic"]
},
{
"atoms": ["node_22", "node_16"],
"types": ["intrinsic", "intrinsic"]
},
{
"atoms": ["node_24", "node_0"],
"types": ["intrinsic", "start"]
},
{
"atoms": ["node_16", "node_0"],
"types": ["intrinsic", "start"]
},
{
"atoms": ["node_10", "node_3"],
"types": ["intrinsic", "intrinsic"]
},
{
"atoms": ["node_3", "node_0"],
"types": ["intrinsic", "start"]
}
]
},
{
"id": "phi_cond",
"name": "PhiCond",
"types": ["sea_node", "sea_node"],
"tuples": [
{
"atoms": ["node_31", "node_14"],
"types": ["state_phi", "intrinsic"]
},
{
"atoms": ["node_32", "node_14"],
"types": ["state_phi", "intrinsic"]
},
{
"atoms": ["node_11", "node_9"],
"types": ["phi", "intrinsic"]
},
{
"atoms": ["node_12", "node_9"],
"types": ["state_phi", "intrinsic"]
}
]
},
{
"id": "phi_true",
"name": "PhiTrue",
"types": ["sea_node", "sea_node"],
"tuples": [
{
"atoms": ["node_31", "node_23"],
"types": ["state_phi", "intrinsic"]
},
{
"atoms": ["node_32", "node_30"],
"types": ["state_phi", "intrinsic"]
},
{
"atoms": ["node_11", "node_10"],
"types": ["phi", "intrinsic"]
},
{
"atoms": ["node_12", "node_10"],
"types": ["state_phi", "intrinsic"]
}
]
},
{
"id": "phi_false",
"name": "PhiFalse",
"types": ["sea_node", "sea_node"],
"tuples": [
{
"atoms": ["node_31", "node_15"],
"types": ["state_phi", "intrinsic"]
},
{
"atoms": ["node_32", "node_22"],
"types": ["state_phi", "intrinsic"]
},
{
"atoms": ["node_11", "node_4"],
"types": ["phi", "lit"]
},
{
"atoms": ["node_12", "node_3"],
"types": ["state_phi", "intrinsic"]
}
]
}
]
}`;
window.traces["I32_LOAD8_U"]["unlem_scheduler"] = ''
window.traces["I32_LOAD8_U"]["unlem_scheduler__raw"] = ''
window.traces["I32_LOAD8_U"]["unlem_scheduler"] += `<pre class='graph'>graph TD
subgraph block_252["Block 252"]
	direction TB
	b252_1[\\"Finish"/]
end
phi_254 --> block_252
subgraph phi_254["Phi 254"]
	p254_32{{"Sϕ Stack "}}
	p254_31{{"Sϕ Codeptr "}}
end
block_255 --> phi_254
block_256 --> phi_254
subgraph block_255["Block 255"]
	direction TB
	b255_24["index pop_u64"]
	b255_28["val mach_readMemory64_u8"]
	b255_30["eff__250 push_u32"]
	b255_23["offset imm_readULEB64"]
	b255_24 --> b255_28
	b255_28 --> b255_30
	b255_30 --> b255_23
end
branch_253 --> block_255
subgraph branch_253["Branch 253"]
	br253_14["cond__249 m_isMemory64"]

end
block_257 --> branch_253
subgraph block_257["Block 257"]
	direction TB
	b257_14["cond__249 m_isMemory64"]
end
phi_259 --> block_257
subgraph phi_259["Phi 259"]
	p259_12{{"Sϕ Codeptr "}}
	p259_12{{"Sϕ Codeptr "}}
	p259_12{{"Sϕ Codeptr "}}
	p259_12{{"Sϕ Codeptr "}}
	p259_11{"memindex ϕ"}
	p259_11{"memindex ϕ"}
	p259_11{"memindex ϕ"}
	p259_11{"memindex ϕ"}
	p259_11{"memindex ϕ"}
	p259_11{"memindex ϕ"}
	p259_12{{"Sϕ Codeptr "}}
	p259_12{{"Sϕ Codeptr "}}
	p259_12{{"Sϕ Codeptr "}}
	p259_12{{"Sϕ Codeptr "}}
end
block_260 --> phi_259
block_261 --> phi_259
subgraph block_260["Block 260"]
	direction TB
	b260_10["memindex__262 imm_readULEB32"]
end
branch_258 --> block_260
subgraph branch_258["Branch 258"]
	br258_9["cond__261 u8.!="]

end
block_262 --> branch_258
subgraph block_262["Block 262"]
	direction TB
	b262_0[/"Start"\\]
	b262_6["arg__266 0x40u8"]
	b262_5["arg__264 0"]
	b262_8["arg__263 u8.&"]
	b262_9["cond__261 u8.!="]
	b262_0 --> b262_6
	b262_6 --> b262_5
	b262_5 --> b262_8
	b262_8 --> b262_9
end
subgraph block_261["Block 261"]
	direction TB
	b261_4["memindex__268 0u"]
	b261_3["flags imm_readU8"]
	b261_4 --> b261_3
end
branch_258 --> block_261
subgraph block_256["Block 256"]
	direction TB
	b256_16["index pop_u32"]
	b256_20["val mach_readMemory32_u8"]
	b256_22["eff__255 push_u32"]
	b256_15["offset imm_readULEB32"]
	b256_16 --> b256_20
	b256_20 --> b256_22
	b256_22 --> b256_15
end
branch_253 --> block_256

</pre>`;
window.traces["I32_LOAD8_U"]["unlem_scheduler__raw"] += `graph TD
subgraph block_252["Block 252"]
	direction TB
	b252_1[\\"Finish"/]
end
phi_254 --> block_252
subgraph phi_254["Phi 254"]
	p254_32{{"Sϕ Stack "}}
	p254_31{{"Sϕ Codeptr "}}
end
block_255 --> phi_254
block_256 --> phi_254
subgraph block_255["Block 255"]
	direction TB
	b255_24["index pop_u64"]
	b255_28["val mach_readMemory64_u8"]
	b255_30["eff__250 push_u32"]
	b255_23["offset imm_readULEB64"]
	b255_24 --> b255_28
	b255_28 --> b255_30
	b255_30 --> b255_23
end
branch_253 --> block_255
subgraph branch_253["Branch 253"]
	br253_14["cond__249 m_isMemory64"]

end
block_257 --> branch_253
subgraph block_257["Block 257"]
	direction TB
	b257_14["cond__249 m_isMemory64"]
end
phi_259 --> block_257
subgraph phi_259["Phi 259"]
	p259_12{{"Sϕ Codeptr "}}
	p259_12{{"Sϕ Codeptr "}}
	p259_12{{"Sϕ Codeptr "}}
	p259_12{{"Sϕ Codeptr "}}
	p259_11{"memindex ϕ"}
	p259_11{"memindex ϕ"}
	p259_11{"memindex ϕ"}
	p259_11{"memindex ϕ"}
	p259_11{"memindex ϕ"}
	p259_11{"memindex ϕ"}
	p259_12{{"Sϕ Codeptr "}}
	p259_12{{"Sϕ Codeptr "}}
	p259_12{{"Sϕ Codeptr "}}
	p259_12{{"Sϕ Codeptr "}}
end
block_260 --> phi_259
block_261 --> phi_259
subgraph block_260["Block 260"]
	direction TB
	b260_10["memindex__262 imm_readULEB32"]
end
branch_258 --> block_260
subgraph branch_258["Branch 258"]
	br258_9["cond__261 u8.!="]

end
block_262 --> branch_258
subgraph block_262["Block 262"]
	direction TB
	b262_0[/"Start"\\]
	b262_6["arg__266 0x40u8"]
	b262_5["arg__264 0"]
	b262_8["arg__263 u8.&"]
	b262_9["cond__261 u8.!="]
	b262_0 --> b262_6
	b262_6 --> b262_5
	b262_5 --> b262_8
	b262_8 --> b262_9
end
subgraph block_261["Block 261"]
	direction TB
	b261_4["memindex__268 0u"]
	b261_3["flags imm_readU8"]
	b261_4 --> b261_3
end
branch_258 --> block_261
subgraph block_256["Block 256"]
	direction TB
	b256_16["index pop_u32"]
	b256_20["val mach_readMemory32_u8"]
	b256_22["eff__255 push_u32"]
	b256_15["offset imm_readULEB32"]
	b256_16 --> b256_20
	b256_20 --> b256_22
	b256_22 --> b256_15
end
branch_253 --> block_256

`;
window.traces["I32_LOAD8_U"]["unlem_pretty"] = ''
window.traces["I32_LOAD8_U"]["unlem_pretty__raw"] = ''
window.traces["I32_LOAD8_U"]["unlem_pretty"] += `<pre class=''>def flags = imm_readU8();
var memindex: u32;
if (u8.!=(u8.&(flags, 0x40u8), 0)) {
	memindex = imm_readULEB32();
} else {
	memindex = 0u;
}
def cond = m_isMemory64(memindex);
if (cond) {
	def offset = imm_readULEB64();
	def index = pop_u64();
	def val = mach_readMemory64_u8(memindex, index, offset);
	push_u32(val);
} else {
	def offset = imm_readULEB32();
	def index = pop_u32();
	def val = mach_readMemory32_u8(memindex, index, offset);
	push_u32(val);
}
</pre>`;
window.traces["I32_LOAD8_U"]["unlem_pretty__raw"] += `def flags = imm_readU8();
var memindex: u32;
if (u8.!=(u8.&(flags, 0x40u8), 0)) {
	memindex = imm_readULEB32();
} else {
	memindex = 0u;
}
def cond = m_isMemory64(memindex);
if (cond) {
	def offset = imm_readULEB64();
	def index = pop_u64();
	def val = mach_readMemory64_u8(memindex, index, offset);
	push_u32(val);
} else {
	def offset = imm_readULEB32();
	def index = pop_u32();
	def val = mach_readMemory32_u8(memindex, index, offset);
	push_u32(val);
}
`;
window.traces["I32_LOAD8_U"]["constUnLEM"] = ''
window.traces["I32_LOAD8_U"]["constUnLEM__raw"] = ''
window.traces["I32_LOAD8_U"]["constUnLEM"] += `<pre class='graph'>---
config:
  layout: elk
---
graph TD
	1[\\"Finish"/]
	31 -. Codeptr .-> 1
	32 -. Stack .-> 1
	0 -. Trap Locals Globals Tables Memory Extra .-> 1
	0[/"Start"\\]
	32{{"Sϕ Stack "}}
	14 --> 32
	30 --> 32
	22 --> 32
	22["eff__255 push_u32"]
	20 --> 22
	16 -. Stack .-> 22
	16["index pop_u32"]
	0 -. Stack .-> 16
	20["val mach_readMemory32_u8"]
	11 --> 20
	16 --> 20
	15 --> 20
	15["offset imm_readULEB32"]
	12 -. Codeptr .-> 15
	12{{"Sϕ Codeptr "}}
	9 --> 12
	10 --> 12
	3 --> 12
	3["flags imm_readU8"]
	0 -. Codeptr .-> 3
	10["memindex__262 imm_readULEB32"]
	3 -. Codeptr .-> 10
	9["cond__261 u8.!="]
	8 --> 9
	5 --> 9
	5["arg__264 0"]
	8["arg__263 u8.&"]
	3 --> 8
	6 --> 8
	6["arg__266 0x40u8"]
	11{"memindex ϕ"}
	9 --> 11
	10 --> 11
	4 --> 11
	4["memindex__268 0u"]
	30["eff__250 push_u32"]
	28 --> 30
	24 -. Stack .-> 30
	24["index pop_u64"]
	0 -. Stack .-> 24
	28["val mach_readMemory64_u8"]
	11 --> 28
	24 --> 28
	23 --> 28
	23["offset imm_readULEB64"]
	12 -. Codeptr .-> 23
	14["cond__249 m_isMemory64"]
	11 --> 14
	31{{"Sϕ Codeptr "}}
	14 --> 31
	23 --> 31
	15 --> 31
</pre>`;
window.traces["I32_LOAD8_U"]["constUnLEM__raw"] += `---
config:
  layout: elk
---
graph TD
	1[\\"Finish"/]
	31 -. Codeptr .-> 1
	32 -. Stack .-> 1
	0 -. Trap Locals Globals Tables Memory Extra .-> 1
	0[/"Start"\\]
	32{{"Sϕ Stack "}}
	14 --> 32
	30 --> 32
	22 --> 32
	22["eff__255 push_u32"]
	20 --> 22
	16 -. Stack .-> 22
	16["index pop_u32"]
	0 -. Stack .-> 16
	20["val mach_readMemory32_u8"]
	11 --> 20
	16 --> 20
	15 --> 20
	15["offset imm_readULEB32"]
	12 -. Codeptr .-> 15
	12{{"Sϕ Codeptr "}}
	9 --> 12
	10 --> 12
	3 --> 12
	3["flags imm_readU8"]
	0 -. Codeptr .-> 3
	10["memindex__262 imm_readULEB32"]
	3 -. Codeptr .-> 10
	9["cond__261 u8.!="]
	8 --> 9
	5 --> 9
	5["arg__264 0"]
	8["arg__263 u8.&"]
	3 --> 8
	6 --> 8
	6["arg__266 0x40u8"]
	11{"memindex ϕ"}
	9 --> 11
	10 --> 11
	4 --> 11
	4["memindex__268 0u"]
	30["eff__250 push_u32"]
	28 --> 30
	24 -. Stack .-> 30
	24["index pop_u64"]
	0 -. Stack .-> 24
	28["val mach_readMemory64_u8"]
	11 --> 28
	24 --> 28
	23 --> 28
	23["offset imm_readULEB64"]
	12 -. Codeptr .-> 23
	14["cond__249 m_isMemory64"]
	11 --> 14
	31{{"Sϕ Codeptr "}}
	14 --> 31
	23 --> 31
	15 --> 31
`;
window.traces["I32_LOAD8_U"]["chooseMerge"] = ''
window.traces["I32_LOAD8_U"]["chooseMerge__raw"] = ''
window.traces["I32_LOAD8_U"]["chooseMerge"] += `<pre class='graph'>---
config:
  layout: elk
---
graph TD
	1[\\"Finish"/]
	31 -. Codeptr .-> 1
	32 -. Stack .-> 1
	0 -. Trap Locals Globals Tables Memory Extra .-> 1
	0[/"Start"\\]
	32{{"Sϕ Stack "}}
	14 --> 32
	30 --> 32
	22 --> 32
	22["eff__255 push_u32"]
	20 --> 22
	16 -. Stack .-> 22
	16["index pop_u32"]
	0 -. Stack .-> 16
	20["val mach_readMemory32_u8"]
	11 --> 20
	16 --> 20
	15 --> 20
	15["offset imm_readULEB32"]
	12 -. Codeptr .-> 15
	12{{"Sϕ Codeptr "}}
	9 --> 12
	10 --> 12
	3 --> 12
	3["flags imm_readU8"]
	0 -. Codeptr .-> 3
	10["memindex__262 imm_readULEB32"]
	3 -. Codeptr .-> 10
	9["cond__261 u8.!="]
	8 --> 9
	5 --> 9
	5["arg__264 0"]
	8["arg__263 u8.&"]
	3 --> 8
	6 --> 8
	6["arg__266 0x40u8"]
	11{"memindex ϕ"}
	9 --> 11
	10 --> 11
	4 --> 11
	4["memindex__268 0u"]
	30["eff__250 push_u32"]
	28 --> 30
	24 -. Stack .-> 30
	24["index pop_u64"]
	0 -. Stack .-> 24
	28["val mach_readMemory64_u8"]
	11 --> 28
	24 --> 28
	23 --> 28
	23["offset imm_readULEB64"]
	12 -. Codeptr .-> 23
	14["cond__249 m_isMemory64"]
	11 --> 14
	31{{"Sϕ Codeptr "}}
	14 --> 31
	23 --> 31
	15 --> 31
</pre>`;
window.traces["I32_LOAD8_U"]["chooseMerge__raw"] += `---
config:
  layout: elk
---
graph TD
	1[\\"Finish"/]
	31 -. Codeptr .-> 1
	32 -. Stack .-> 1
	0 -. Trap Locals Globals Tables Memory Extra .-> 1
	0[/"Start"\\]
	32{{"Sϕ Stack "}}
	14 --> 32
	30 --> 32
	22 --> 32
	22["eff__255 push_u32"]
	20 --> 22
	16 -. Stack .-> 22
	16["index pop_u32"]
	0 -. Stack .-> 16
	20["val mach_readMemory32_u8"]
	11 --> 20
	16 --> 20
	15 --> 20
	15["offset imm_readULEB32"]
	12 -. Codeptr .-> 15
	12{{"Sϕ Codeptr "}}
	9 --> 12
	10 --> 12
	3 --> 12
	3["flags imm_readU8"]
	0 -. Codeptr .-> 3
	10["memindex__262 imm_readULEB32"]
	3 -. Codeptr .-> 10
	9["cond__261 u8.!="]
	8 --> 9
	5 --> 9
	5["arg__264 0"]
	8["arg__263 u8.&"]
	3 --> 8
	6 --> 8
	6["arg__266 0x40u8"]
	11{"memindex ϕ"}
	9 --> 11
	10 --> 11
	4 --> 11
	4["memindex__268 0u"]
	30["eff__250 push_u32"]
	28 --> 30
	24 -. Stack .-> 30
	24["index pop_u64"]
	0 -. Stack .-> 24
	28["val mach_readMemory64_u8"]
	11 --> 28
	24 --> 28
	23 --> 28
	23["offset imm_readULEB64"]
	12 -. Codeptr .-> 23
	14["cond__249 m_isMemory64"]
	11 --> 14
	31{{"Sϕ Codeptr "}}
	14 --> 31
	23 --> 31
	15 --> 31
`;
window.traces["I32_LOAD8_U"]["scheduled"] = ''
window.traces["I32_LOAD8_U"]["scheduled__raw"] = ''
window.traces["I32_LOAD8_U"]["scheduled"] += `<pre class=''>def flags = imm_readU8();
def arg__266 : byte = 0x40u8;
def arg__263 = u8.&(flags, arg__266);
def arg__264 : byte = 0;
def cond__261 = u8.!=(arg__263, arg__264);
var memindex: u32;
if (cond__261) {
	def memindex__262 = imm_readULEB32();
} else {
	def memindex__268 : u32 = 0u;
}
// phis: memindex <- memindex__262; memindex <- memindex__268; 
def cond__249 = m_isMemory64(memindex);
if (cond__249) {
	def offset = imm_readULEB64();
	def index = pop_u64();
	def val = mach_readMemory64_u8(memindex, index, offset);
	def eff__250 = push_u32(val);
} else {
	def offset = imm_readULEB32();
	def index = pop_u32();
	def val = mach_readMemory32_u8(memindex, index, offset);
	def eff__255 = push_u32(val);
}
// phis: 
</pre>`;
window.traces["I32_LOAD8_U"]["scheduled__raw"] += `def flags = imm_readU8();
def arg__266 : byte = 0x40u8;
def arg__263 = u8.&(flags, arg__266);
def arg__264 : byte = 0;
def cond__261 = u8.!=(arg__263, arg__264);
var memindex: u32;
if (cond__261) {
	def memindex__262 = imm_readULEB32();
} else {
	def memindex__268 : u32 = 0u;
}
// phis: memindex <- memindex__262; memindex <- memindex__268; 
def cond__249 = m_isMemory64(memindex);
if (cond__249) {
	def offset = imm_readULEB64();
	def index = pop_u64();
	def val = mach_readMemory64_u8(memindex, index, offset);
	def eff__250 = push_u32(val);
} else {
	def offset = imm_readULEB32();
	def index = pop_u32();
	def val = mach_readMemory32_u8(memindex, index, offset);
	def eff__255 = push_u32(val);
}
// phis: 
`;
window.traces["I32_LOAD8_U"]["pretty"] = ''
window.traces["I32_LOAD8_U"]["pretty__raw"] = ''
window.traces["I32_LOAD8_U"]["pretty"] += `<pre class=''>def flags = imm_readU8();
var memindex: u32;
if (u8.!=(u8.&(flags, 0x40u8), 0)) {
	memindex = imm_readULEB32();
} else {
	memindex = 0u;
}
def cond = m_isMemory64(memindex);
if (cond) {
	def offset = imm_readULEB64();
	def index = pop_u64();
	def val = mach_readMemory64_u8(memindex, index, offset);
	push_u32(val);
} else {
	def offset = imm_readULEB32();
	def index = pop_u32();
	def val = mach_readMemory32_u8(memindex, index, offset);
	push_u32(val);
}
</pre>`;
window.traces["I32_LOAD8_U"]["pretty__raw"] += `def flags = imm_readU8();
var memindex: u32;
if (u8.!=(u8.&(flags, 0x40u8), 0)) {
	memindex = imm_readULEB32();
} else {
	memindex = 0u;
}
def cond = m_isMemory64(memindex);
if (cond) {
	def offset = imm_readULEB64();
	def index = pop_u64();
	def val = mach_readMemory64_u8(memindex, index, offset);
	push_u32(val);
} else {
	def offset = imm_readULEB32();
	def index = pop_u32();
	def val = mach_readMemory32_u8(memindex, index, offset);
	push_u32(val);
}
`;
window.traces["I32_LOAD16_S"] = {}
window.traces["I32_LOAD16_S"]["parsed"] = ''
window.traces["I32_LOAD16_S"]["parsed__raw"] = ''
window.traces["I32_LOAD16_S"]["parsed"] += `<pre class=''>def flags = imm_readU8();
def memindex : u32 = 0u;
def arg__286 : byte = 0;
def arg__288 : byte = 0x40u8;
def arg__287 = (flags);
def arg__285 = u8.&(arg__287, arg__288);
def cond__283 = u8.!=(arg__285, arg__286);
if (cond__283) {
	def memindex__284 = imm_readULEB32();
}
// phis: memindex <- memindex__284; 
def arg__282 = (memindex);
def cond__269 = m_isMemory64(arg__282);
if (cond__269) {
	def offset = imm_readULEB64();
	def index = pop_u64();
	def arg__275 = (offset);
	def arg__274 = (index);
	def arg__273 = (memindex);
	def val = mach_readMemory64_u16(arg__273, arg__274, arg__275);
	def arg__272 = (val);
	def extend = U32_extend16_s(arg__272);
	def arg__271 = (extend);
	def eff__270 = push_u32(arg__271);
} else {
	def offset = imm_readULEB32();
	def index = pop_u32();
	def arg__281 = (offset);
	def arg__280 = (index);
	def arg__279 = (memindex);
	def val = mach_readMemory32_u16(arg__279, arg__280, arg__281);
	def arg__278 = (val);
	def extend = U32_extend16_s(arg__278);
	def arg__277 = (extend);
	def eff__276 = push_u32(arg__277);
}
// phis: 
</pre>`;
window.traces["I32_LOAD16_S"]["parsed__raw"] += `def flags = imm_readU8();
def memindex : u32 = 0u;
def arg__286 : byte = 0;
def arg__288 : byte = 0x40u8;
def arg__287 = (flags);
def arg__285 = u8.&(arg__287, arg__288);
def cond__283 = u8.!=(arg__285, arg__286);
if (cond__283) {
	def memindex__284 = imm_readULEB32();
}
// phis: memindex <- memindex__284; 
def arg__282 = (memindex);
def cond__269 = m_isMemory64(arg__282);
if (cond__269) {
	def offset = imm_readULEB64();
	def index = pop_u64();
	def arg__275 = (offset);
	def arg__274 = (index);
	def arg__273 = (memindex);
	def val = mach_readMemory64_u16(arg__273, arg__274, arg__275);
	def arg__272 = (val);
	def extend = U32_extend16_s(arg__272);
	def arg__271 = (extend);
	def eff__270 = push_u32(arg__271);
} else {
	def offset = imm_readULEB32();
	def index = pop_u32();
	def arg__281 = (offset);
	def arg__280 = (index);
	def arg__279 = (memindex);
	def val = mach_readMemory32_u16(arg__279, arg__280, arg__281);
	def arg__278 = (val);
	def extend = U32_extend16_s(arg__278);
	def arg__277 = (extend);
	def eff__276 = push_u32(arg__277);
}
// phis: 
`;
window.traces["I32_LOAD16_S"]["raw"] = ''
window.traces["I32_LOAD16_S"]["raw__raw"] = ''
window.traces["I32_LOAD16_S"]["raw"] += `<pre class='graph'>---
config:
  layout: elk
---
graph TD
	1[\\"Finish"/]
	35 -. Codeptr .-> 1
	36 -. Stack .-> 1
	0 -. Trap Locals Globals Tables Memory Extra .-> 1
	0[/"Start"\\]
	36{{"Sϕ Stack "}}
	14 --> 36
	34 --> 36
	24 --> 36
	24["eff__276 push_u32"]
	22 --> 24
	16 -. Stack .-> 24
	16["index pop_u32"]
	0 -. Stack .-> 16
	22["extend U32_extend16_s"]
	20 --> 22
	20["val mach_readMemory32_u16"]
	11 --> 20
	16 --> 20
	15 --> 20
	15["offset imm_readULEB32"]
	12 -. Codeptr .-> 15
	12{{"Sϕ Codeptr "}}
	9 --> 12
	10 --> 12
	3 --> 12
	3["flags imm_readU8"]
	0 -. Codeptr .-> 3
	10["memindex__284 imm_readULEB32"]
	3 -. Codeptr .-> 10
	9["cond__283 u8.!="]
	8 --> 9
	5 --> 9
	5["arg__286 0"]
	8["arg__285 u8.&"]
	3 --> 8
	6 --> 8
	6["arg__288 0x40u8"]
	11{"memindex ϕ"}
	9 --> 11
	10 --> 11
	4 --> 11
	4["memindex__289 0u"]
	34["eff__270 push_u32"]
	32 --> 34
	26 -. Stack .-> 34
	26["index pop_u64"]
	0 -. Stack .-> 26
	32["extend U32_extend16_s"]
	30 --> 32
	30["val mach_readMemory64_u16"]
	11 --> 30
	26 --> 30
	25 --> 30
	25["offset imm_readULEB64"]
	12 -. Codeptr .-> 25
	14["cond__269 m_isMemory64"]
	11 --> 14
	35{{"Sϕ Codeptr "}}
	14 --> 35
	25 --> 35
	15 --> 35
</pre>`;
window.traces["I32_LOAD16_S"]["raw__raw"] += `---
config:
  layout: elk
---
graph TD
	1[\\"Finish"/]
	35 -. Codeptr .-> 1
	36 -. Stack .-> 1
	0 -. Trap Locals Globals Tables Memory Extra .-> 1
	0[/"Start"\\]
	36{{"Sϕ Stack "}}
	14 --> 36
	34 --> 36
	24 --> 36
	24["eff__276 push_u32"]
	22 --> 24
	16 -. Stack .-> 24
	16["index pop_u32"]
	0 -. Stack .-> 16
	22["extend U32_extend16_s"]
	20 --> 22
	20["val mach_readMemory32_u16"]
	11 --> 20
	16 --> 20
	15 --> 20
	15["offset imm_readULEB32"]
	12 -. Codeptr .-> 15
	12{{"Sϕ Codeptr "}}
	9 --> 12
	10 --> 12
	3 --> 12
	3["flags imm_readU8"]
	0 -. Codeptr .-> 3
	10["memindex__284 imm_readULEB32"]
	3 -. Codeptr .-> 10
	9["cond__283 u8.!="]
	8 --> 9
	5 --> 9
	5["arg__286 0"]
	8["arg__285 u8.&"]
	3 --> 8
	6 --> 8
	6["arg__288 0x40u8"]
	11{"memindex ϕ"}
	9 --> 11
	10 --> 11
	4 --> 11
	4["memindex__289 0u"]
	34["eff__270 push_u32"]
	32 --> 34
	26 -. Stack .-> 34
	26["index pop_u64"]
	0 -. Stack .-> 26
	32["extend U32_extend16_s"]
	30 --> 32
	30["val mach_readMemory64_u16"]
	11 --> 30
	26 --> 30
	25 --> 30
	25["offset imm_readULEB64"]
	12 -. Codeptr .-> 25
	14["cond__269 m_isMemory64"]
	11 --> 14
	35{{"Sϕ Codeptr "}}
	14 --> 35
	25 --> 35
	15 --> 35
`;
window.traces["I32_LOAD16_S"]["spytial"] = ''
window.traces["I32_LOAD16_S"]["spytial__raw"] = ''
window.traces["I32_LOAD16_S"]["spytial"] += `<pre class=''>{
"atoms": [
{
"id": "node_1",
"type": "finish",
"label": "Finish"
},
{
"id": "node_35",
"type": "state_phi",
"label": "StatePhi [m_isMemory64 [cond__269]]"
},
{
"id": "node_36",
"type": "state_phi",
"label": "StatePhi [m_isMemory64 [cond__269]]"
},
{
"id": "node_0",
"type": "start",
"label": "Start"
},
{
"id": "node_14",
"type": "intrinsic",
"label": "m_isMemory64 [cond__269]"
},
{
"id": "node_25",
"type": "intrinsic",
"label": "imm_readULEB64 [offset]"
},
{
"id": "node_15",
"type": "intrinsic",
"label": "imm_readULEB32 [offset]"
},
{
"id": "node_34",
"type": "intrinsic",
"label": "push_u32 [eff__270]"
},
{
"id": "node_24",
"type": "intrinsic",
"label": "push_u32 [eff__276]"
},
{
"id": "node_11",
"type": "phi",
"label": "Phi"
},
{
"id": "node_12",
"type": "state_phi",
"label": "StatePhi [u8.!= [cond__283]]"
},
{
"id": "node_32",
"type": "intrinsic",
"label": "U32_extend16_s [extend]"
},
{
"id": "node_26",
"type": "intrinsic",
"label": "pop_u64 [index]"
},
{
"id": "node_22",
"type": "intrinsic",
"label": "U32_extend16_s [extend]"
},
{
"id": "node_16",
"type": "intrinsic",
"label": "pop_u32 [index]"
},
{
"id": "node_9",
"type": "intrinsic",
"label": "u8.!= [cond__283]"
},
{
"id": "node_10",
"type": "intrinsic",
"label": "imm_readULEB32 [memindex__284]"
},
{
"id": "node_4",
"type": "lit",
"label": "0u"
},
{
"id": "node_3",
"type": "intrinsic",
"label": "imm_readU8 [flags]"
},
{
"id": "node_30",
"type": "intrinsic",
"label": "mach_readMemory64_u16 [val]"
},
{
"id": "node_20",
"type": "intrinsic",
"label": "mach_readMemory32_u16 [val]"
},
{
"id": "node_8",
"type": "intrinsic",
"label": "u8.& [arg__285]"
},
{
"id": "node_5",
"type": "lit",
"label": "0"
},
{
"id": "node_6",
"type": "lit",
"label": "0x40u8"
}
],
"relations": [
{
"id": "uses",
"name": "Uses",
"types": ["sea_node", "sea_node"],
"tuples": [
{
"atoms": ["node_14", "node_11"],
"types": ["intrinsic", "phi"]
},
{
"atoms": ["node_34", "node_32"],
"types": ["intrinsic", "intrinsic"]
},
{
"atoms": ["node_24", "node_22"],
"types": ["intrinsic", "intrinsic"]
},
{
"atoms": ["node_32", "node_30"],
"types": ["intrinsic", "intrinsic"]
},
{
"atoms": ["node_22", "node_20"],
"types": ["intrinsic", "intrinsic"]
},
{
"atoms": ["node_9", "node_8"],
"types": ["intrinsic", "intrinsic"]
},
{
"atoms": ["node_9", "node_5"],
"types": ["intrinsic", "lit"]
},
{
"atoms": ["node_30", "node_11"],
"types": ["intrinsic", "phi"]
},
{
"atoms": ["node_30", "node_26"],
"types": ["intrinsic", "intrinsic"]
},
{
"atoms": ["node_30", "node_25"],
"types": ["intrinsic", "intrinsic"]
},
{
"atoms": ["node_20", "node_11"],
"types": ["intrinsic", "phi"]
},
{
"atoms": ["node_20", "node_16"],
"types": ["intrinsic", "intrinsic"]
},
{
"atoms": ["node_20", "node_15"],
"types": ["intrinsic", "intrinsic"]
},
{
"atoms": ["node_8", "node_3"],
"types": ["intrinsic", "intrinsic"]
},
{
"atoms": ["node_8", "node_6"],
"types": ["intrinsic", "lit"]
}
]
},
{
"id": "state_uses",
"name": "StateUses",
"types": ["sea_node", "sea_node"],
"tuples": [
{
"atoms": ["node_1", "node_35"],
"types": ["finish", "state_phi"]
},
{
"atoms": ["node_1", "node_36"],
"types": ["finish", "state_phi"]
},
{
"atoms": ["node_1", "node_0"],
"types": ["finish", "start"]
},
{
"atoms": ["node_25", "node_12"],
"types": ["intrinsic", "state_phi"]
},
{
"atoms": ["node_15", "node_12"],
"types": ["intrinsic", "state_phi"]
},
{
"atoms": ["node_34", "node_26"],
"types": ["intrinsic", "intrinsic"]
},
{
"atoms": ["node_24", "node_16"],
"types": ["intrinsic", "intrinsic"]
},
{
"atoms": ["node_26", "node_0"],
"types": ["intrinsic", "start"]
},
{
"atoms": ["node_16", "node_0"],
"types": ["intrinsic", "start"]
},
{
"atoms": ["node_10", "node_3"],
"types": ["intrinsic", "intrinsic"]
},
{
"atoms": ["node_3", "node_0"],
"types": ["intrinsic", "start"]
}
]
},
{
"id": "phi_cond",
"name": "PhiCond",
"types": ["sea_node", "sea_node"],
"tuples": [
{
"atoms": ["node_35", "node_14"],
"types": ["state_phi", "intrinsic"]
},
{
"atoms": ["node_36", "node_14"],
"types": ["state_phi", "intrinsic"]
},
{
"atoms": ["node_11", "node_9"],
"types": ["phi", "intrinsic"]
},
{
"atoms": ["node_12", "node_9"],
"types": ["state_phi", "intrinsic"]
}
]
},
{
"id": "phi_true",
"name": "PhiTrue",
"types": ["sea_node", "sea_node"],
"tuples": [
{
"atoms": ["node_35", "node_25"],
"types": ["state_phi", "intrinsic"]
},
{
"atoms": ["node_36", "node_34"],
"types": ["state_phi", "intrinsic"]
},
{
"atoms": ["node_11", "node_10"],
"types": ["phi", "intrinsic"]
},
{
"atoms": ["node_12", "node_10"],
"types": ["state_phi", "intrinsic"]
}
]
},
{
"id": "phi_false",
"name": "PhiFalse",
"types": ["sea_node", "sea_node"],
"tuples": [
{
"atoms": ["node_35", "node_15"],
"types": ["state_phi", "intrinsic"]
},
{
"atoms": ["node_36", "node_24"],
"types": ["state_phi", "intrinsic"]
},
{
"atoms": ["node_11", "node_4"],
"types": ["phi", "lit"]
},
{
"atoms": ["node_12", "node_3"],
"types": ["state_phi", "intrinsic"]
}
]
}
]
}</pre>`;
window.traces["I32_LOAD16_S"]["spytial__raw"] += `{
"atoms": [
{
"id": "node_1",
"type": "finish",
"label": "Finish"
},
{
"id": "node_35",
"type": "state_phi",
"label": "StatePhi [m_isMemory64 [cond__269]]"
},
{
"id": "node_36",
"type": "state_phi",
"label": "StatePhi [m_isMemory64 [cond__269]]"
},
{
"id": "node_0",
"type": "start",
"label": "Start"
},
{
"id": "node_14",
"type": "intrinsic",
"label": "m_isMemory64 [cond__269]"
},
{
"id": "node_25",
"type": "intrinsic",
"label": "imm_readULEB64 [offset]"
},
{
"id": "node_15",
"type": "intrinsic",
"label": "imm_readULEB32 [offset]"
},
{
"id": "node_34",
"type": "intrinsic",
"label": "push_u32 [eff__270]"
},
{
"id": "node_24",
"type": "intrinsic",
"label": "push_u32 [eff__276]"
},
{
"id": "node_11",
"type": "phi",
"label": "Phi"
},
{
"id": "node_12",
"type": "state_phi",
"label": "StatePhi [u8.!= [cond__283]]"
},
{
"id": "node_32",
"type": "intrinsic",
"label": "U32_extend16_s [extend]"
},
{
"id": "node_26",
"type": "intrinsic",
"label": "pop_u64 [index]"
},
{
"id": "node_22",
"type": "intrinsic",
"label": "U32_extend16_s [extend]"
},
{
"id": "node_16",
"type": "intrinsic",
"label": "pop_u32 [index]"
},
{
"id": "node_9",
"type": "intrinsic",
"label": "u8.!= [cond__283]"
},
{
"id": "node_10",
"type": "intrinsic",
"label": "imm_readULEB32 [memindex__284]"
},
{
"id": "node_4",
"type": "lit",
"label": "0u"
},
{
"id": "node_3",
"type": "intrinsic",
"label": "imm_readU8 [flags]"
},
{
"id": "node_30",
"type": "intrinsic",
"label": "mach_readMemory64_u16 [val]"
},
{
"id": "node_20",
"type": "intrinsic",
"label": "mach_readMemory32_u16 [val]"
},
{
"id": "node_8",
"type": "intrinsic",
"label": "u8.& [arg__285]"
},
{
"id": "node_5",
"type": "lit",
"label": "0"
},
{
"id": "node_6",
"type": "lit",
"label": "0x40u8"
}
],
"relations": [
{
"id": "uses",
"name": "Uses",
"types": ["sea_node", "sea_node"],
"tuples": [
{
"atoms": ["node_14", "node_11"],
"types": ["intrinsic", "phi"]
},
{
"atoms": ["node_34", "node_32"],
"types": ["intrinsic", "intrinsic"]
},
{
"atoms": ["node_24", "node_22"],
"types": ["intrinsic", "intrinsic"]
},
{
"atoms": ["node_32", "node_30"],
"types": ["intrinsic", "intrinsic"]
},
{
"atoms": ["node_22", "node_20"],
"types": ["intrinsic", "intrinsic"]
},
{
"atoms": ["node_9", "node_8"],
"types": ["intrinsic", "intrinsic"]
},
{
"atoms": ["node_9", "node_5"],
"types": ["intrinsic", "lit"]
},
{
"atoms": ["node_30", "node_11"],
"types": ["intrinsic", "phi"]
},
{
"atoms": ["node_30", "node_26"],
"types": ["intrinsic", "intrinsic"]
},
{
"atoms": ["node_30", "node_25"],
"types": ["intrinsic", "intrinsic"]
},
{
"atoms": ["node_20", "node_11"],
"types": ["intrinsic", "phi"]
},
{
"atoms": ["node_20", "node_16"],
"types": ["intrinsic", "intrinsic"]
},
{
"atoms": ["node_20", "node_15"],
"types": ["intrinsic", "intrinsic"]
},
{
"atoms": ["node_8", "node_3"],
"types": ["intrinsic", "intrinsic"]
},
{
"atoms": ["node_8", "node_6"],
"types": ["intrinsic", "lit"]
}
]
},
{
"id": "state_uses",
"name": "StateUses",
"types": ["sea_node", "sea_node"],
"tuples": [
{
"atoms": ["node_1", "node_35"],
"types": ["finish", "state_phi"]
},
{
"atoms": ["node_1", "node_36"],
"types": ["finish", "state_phi"]
},
{
"atoms": ["node_1", "node_0"],
"types": ["finish", "start"]
},
{
"atoms": ["node_25", "node_12"],
"types": ["intrinsic", "state_phi"]
},
{
"atoms": ["node_15", "node_12"],
"types": ["intrinsic", "state_phi"]
},
{
"atoms": ["node_34", "node_26"],
"types": ["intrinsic", "intrinsic"]
},
{
"atoms": ["node_24", "node_16"],
"types": ["intrinsic", "intrinsic"]
},
{
"atoms": ["node_26", "node_0"],
"types": ["intrinsic", "start"]
},
{
"atoms": ["node_16", "node_0"],
"types": ["intrinsic", "start"]
},
{
"atoms": ["node_10", "node_3"],
"types": ["intrinsic", "intrinsic"]
},
{
"atoms": ["node_3", "node_0"],
"types": ["intrinsic", "start"]
}
]
},
{
"id": "phi_cond",
"name": "PhiCond",
"types": ["sea_node", "sea_node"],
"tuples": [
{
"atoms": ["node_35", "node_14"],
"types": ["state_phi", "intrinsic"]
},
{
"atoms": ["node_36", "node_14"],
"types": ["state_phi", "intrinsic"]
},
{
"atoms": ["node_11", "node_9"],
"types": ["phi", "intrinsic"]
},
{
"atoms": ["node_12", "node_9"],
"types": ["state_phi", "intrinsic"]
}
]
},
{
"id": "phi_true",
"name": "PhiTrue",
"types": ["sea_node", "sea_node"],
"tuples": [
{
"atoms": ["node_35", "node_25"],
"types": ["state_phi", "intrinsic"]
},
{
"atoms": ["node_36", "node_34"],
"types": ["state_phi", "intrinsic"]
},
{
"atoms": ["node_11", "node_10"],
"types": ["phi", "intrinsic"]
},
{
"atoms": ["node_12", "node_10"],
"types": ["state_phi", "intrinsic"]
}
]
},
{
"id": "phi_false",
"name": "PhiFalse",
"types": ["sea_node", "sea_node"],
"tuples": [
{
"atoms": ["node_35", "node_15"],
"types": ["state_phi", "intrinsic"]
},
{
"atoms": ["node_36", "node_24"],
"types": ["state_phi", "intrinsic"]
},
{
"atoms": ["node_11", "node_4"],
"types": ["phi", "lit"]
},
{
"atoms": ["node_12", "node_3"],
"types": ["state_phi", "intrinsic"]
}
]
}
]
}`;
window.traces["I32_LOAD16_S"]["overloadOps"] = ''
window.traces["I32_LOAD16_S"]["overloadOps__raw"] = ''
window.traces["I32_LOAD16_S"]["overloadOps"] += `<pre class='graph'>---
config:
  layout: elk
---
graph TD
	1[\\"Finish"/]
	35 -. Codeptr .-> 1
	36 -. Stack .-> 1
	0 -. Trap Locals Globals Tables Memory Extra .-> 1
	0[/"Start"\\]
	36{{"Sϕ Stack "}}
	14 --> 36
	34 --> 36
	24 --> 36
	24["eff__276 push_u32"]
	22 --> 24
	16 -. Stack .-> 24
	16["index pop_u32"]
	0 -. Stack .-> 16
	22["extend U32_extend16_s"]
	20 --> 22
	20["val mach_readMemory32_u16"]
	11 --> 20
	16 --> 20
	15 --> 20
	15["offset imm_readULEB32"]
	12 -. Codeptr .-> 15
	12{{"Sϕ Codeptr "}}
	9 --> 12
	10 --> 12
	3 --> 12
	3["flags imm_readU8"]
	0 -. Codeptr .-> 3
	10["memindex__284 imm_readULEB32"]
	3 -. Codeptr .-> 10
	9["cond__283 u8.!="]
	8 --> 9
	5 --> 9
	5["arg__286 0"]
	8["arg__285 u8.&"]
	3 --> 8
	6 --> 8
	6["arg__288 0x40u8"]
	11{"memindex ϕ"}
	9 --> 11
	10 --> 11
	4 --> 11
	4["memindex__290 0u"]
	34["eff__270 push_u32"]
	32 --> 34
	26 -. Stack .-> 34
	26["index pop_u64"]
	0 -. Stack .-> 26
	32["extend U32_extend16_s"]
	30 --> 32
	30["val mach_readMemory64_u16"]
	11 --> 30
	26 --> 30
	25 --> 30
	25["offset imm_readULEB64"]
	12 -. Codeptr .-> 25
	14["cond__269 m_isMemory64"]
	11 --> 14
	35{{"Sϕ Codeptr "}}
	14 --> 35
	25 --> 35
	15 --> 35
</pre>`;
window.traces["I32_LOAD16_S"]["overloadOps__raw"] += `---
config:
  layout: elk
---
graph TD
	1[\\"Finish"/]
	35 -. Codeptr .-> 1
	36 -. Stack .-> 1
	0 -. Trap Locals Globals Tables Memory Extra .-> 1
	0[/"Start"\\]
	36{{"Sϕ Stack "}}
	14 --> 36
	34 --> 36
	24 --> 36
	24["eff__276 push_u32"]
	22 --> 24
	16 -. Stack .-> 24
	16["index pop_u32"]
	0 -. Stack .-> 16
	22["extend U32_extend16_s"]
	20 --> 22
	20["val mach_readMemory32_u16"]
	11 --> 20
	16 --> 20
	15 --> 20
	15["offset imm_readULEB32"]
	12 -. Codeptr .-> 15
	12{{"Sϕ Codeptr "}}
	9 --> 12
	10 --> 12
	3 --> 12
	3["flags imm_readU8"]
	0 -. Codeptr .-> 3
	10["memindex__284 imm_readULEB32"]
	3 -. Codeptr .-> 10
	9["cond__283 u8.!="]
	8 --> 9
	5 --> 9
	5["arg__286 0"]
	8["arg__285 u8.&"]
	3 --> 8
	6 --> 8
	6["arg__288 0x40u8"]
	11{"memindex ϕ"}
	9 --> 11
	10 --> 11
	4 --> 11
	4["memindex__290 0u"]
	34["eff__270 push_u32"]
	32 --> 34
	26 -. Stack .-> 34
	26["index pop_u64"]
	0 -. Stack .-> 26
	32["extend U32_extend16_s"]
	30 --> 32
	30["val mach_readMemory64_u16"]
	11 --> 30
	26 --> 30
	25 --> 30
	25["offset imm_readULEB64"]
	12 -. Codeptr .-> 25
	14["cond__269 m_isMemory64"]
	11 --> 14
	35{{"Sϕ Codeptr "}}
	14 --> 35
	25 --> 35
	15 --> 35
`;
window.traces["I32_LOAD16_S"]["addAbstractions"] = ''
window.traces["I32_LOAD16_S"]["addAbstractions__raw"] = ''
window.traces["I32_LOAD16_S"]["addAbstractions"] += `<pre class='graph'>---
config:
  layout: elk
---
graph TD
	1[\\"Finish"/]
	35 -. Codeptr .-> 1
	36 -. Stack .-> 1
	0 -. Trap Locals Globals Tables Memory Extra .-> 1
	0[/"Start"\\]
	36{{"Sϕ Stack "}}
	14 --> 36
	34 --> 36
	24 --> 36
	24["eff__276 push_u32"]
	22 --> 24
	16 -. Stack .-> 24
	16["index pop_u32"]
	0 -. Stack .-> 16
	22["extend U32_extend16_s"]
	20 --> 22
	20["val mach_readMemory32_u16"]
	11 --> 20
	16 --> 20
	15 --> 20
	15["offset imm_readULEB32"]
	12 -. Codeptr .-> 15
	12{{"Sϕ Codeptr "}}
	9 --> 12
	10 --> 12
	3 --> 12
	3["flags imm_readU8"]
	0 -. Codeptr .-> 3
	10["memindex__284 imm_readULEB32"]
	3 -. Codeptr .-> 10
	9["cond__283 u8.!="]
	8 --> 9
	5 --> 9
	5["arg__286 0"]
	8["arg__285 u8.&"]
	3 --> 8
	6 --> 8
	6["arg__288 0x40u8"]
	11{"memindex ϕ"}
	9 --> 11
	10 --> 11
	4 --> 11
	4["memindex__290 0u"]
	34["eff__270 push_u32"]
	32 --> 34
	26 -. Stack .-> 34
	26["index pop_u64"]
	0 -. Stack .-> 26
	32["extend U32_extend16_s"]
	30 --> 32
	30["val mach_readMemory64_u16"]
	11 --> 30
	26 --> 30
	25 --> 30
	25["offset imm_readULEB64"]
	12 -. Codeptr .-> 25
	14["cond__269 m_isMemory64"]
	11 --> 14
	35{{"Sϕ Codeptr "}}
	14 --> 35
	25 --> 35
	15 --> 35
</pre>`;
window.traces["I32_LOAD16_S"]["addAbstractions__raw"] += `---
config:
  layout: elk
---
graph TD
	1[\\"Finish"/]
	35 -. Codeptr .-> 1
	36 -. Stack .-> 1
	0 -. Trap Locals Globals Tables Memory Extra .-> 1
	0[/"Start"\\]
	36{{"Sϕ Stack "}}
	14 --> 36
	34 --> 36
	24 --> 36
	24["eff__276 push_u32"]
	22 --> 24
	16 -. Stack .-> 24
	16["index pop_u32"]
	0 -. Stack .-> 16
	22["extend U32_extend16_s"]
	20 --> 22
	20["val mach_readMemory32_u16"]
	11 --> 20
	16 --> 20
	15 --> 20
	15["offset imm_readULEB32"]
	12 -. Codeptr .-> 15
	12{{"Sϕ Codeptr "}}
	9 --> 12
	10 --> 12
	3 --> 12
	3["flags imm_readU8"]
	0 -. Codeptr .-> 3
	10["memindex__284 imm_readULEB32"]
	3 -. Codeptr .-> 10
	9["cond__283 u8.!="]
	8 --> 9
	5 --> 9
	5["arg__286 0"]
	8["arg__285 u8.&"]
	3 --> 8
	6 --> 8
	6["arg__288 0x40u8"]
	11{"memindex ϕ"}
	9 --> 11
	10 --> 11
	4 --> 11
	4["memindex__290 0u"]
	34["eff__270 push_u32"]
	32 --> 34
	26 -. Stack .-> 34
	26["index pop_u64"]
	0 -. Stack .-> 26
	32["extend U32_extend16_s"]
	30 --> 32
	30["val mach_readMemory64_u16"]
	11 --> 30
	26 --> 30
	25 --> 30
	25["offset imm_readULEB64"]
	12 -. Codeptr .-> 25
	14["cond__269 m_isMemory64"]
	11 --> 14
	35{{"Sϕ Codeptr "}}
	14 --> 35
	25 --> 35
	15 --> 35
`;
window.traces["I32_LOAD16_S"]["schedulerMermaid"] = ''
window.traces["I32_LOAD16_S"]["schedulerMermaid__raw"] = ''
window.traces["I32_LOAD16_S"]["schedulerMermaid"] += `<pre class='graph'>graph TD
subgraph block_263["Block 263"]
	direction TB
	b263_1[\\"Finish"/]
end
phi_265 --> block_263
subgraph phi_265["Phi 265"]
	p265_36{{"Sϕ Stack "}}
	p265_35{{"Sϕ Codeptr "}}
end
block_266 --> phi_265
block_267 --> phi_265
subgraph block_266["Block 266"]
	direction TB
	b266_26["index pop_u64"]
	b266_30["val mach_readMemory64_u16"]
	b266_32["extend U32_extend16_s"]
	b266_34["eff__270 push_u32"]
	b266_25["offset imm_readULEB64"]
	b266_26 --> b266_30
	b266_30 --> b266_32
	b266_32 --> b266_34
	b266_34 --> b266_25
end
branch_264 --> block_266
subgraph branch_264["Branch 264"]
	br264_14["cond__269 m_isMemory64"]

end
block_268 --> branch_264
subgraph block_268["Block 268"]
	direction TB
	b268_14["cond__269 m_isMemory64"]
end
phi_270 --> block_268
subgraph phi_270["Phi 270"]
	p270_12{{"Sϕ Codeptr "}}
	p270_12{{"Sϕ Codeptr "}}
	p270_12{{"Sϕ Codeptr "}}
	p270_12{{"Sϕ Codeptr "}}
	p270_11{"memindex ϕ"}
	p270_11{"memindex ϕ"}
	p270_11{"memindex ϕ"}
	p270_11{"memindex ϕ"}
	p270_11{"memindex ϕ"}
	p270_11{"memindex ϕ"}
	p270_12{{"Sϕ Codeptr "}}
	p270_12{{"Sϕ Codeptr "}}
	p270_12{{"Sϕ Codeptr "}}
	p270_12{{"Sϕ Codeptr "}}
end
block_271 --> phi_270
block_272 --> phi_270
subgraph block_271["Block 271"]
	direction TB
	b271_10["memindex__284 imm_readULEB32"]
end
branch_269 --> block_271
subgraph branch_269["Branch 269"]
	br269_9["cond__283 u8.!="]

end
block_273 --> branch_269
subgraph block_273["Block 273"]
	direction TB
	b273_0[/"Start"\\]
	b273_6["arg__288 0x40u8"]
	b273_5["arg__286 0"]
	b273_8["arg__285 u8.&"]
	b273_9["cond__283 u8.!="]
	b273_0 --> b273_6
	b273_6 --> b273_5
	b273_5 --> b273_8
	b273_8 --> b273_9
end
subgraph block_272["Block 272"]
	direction TB
	b272_4["memindex__290 0u"]
	b272_3["flags imm_readU8"]
	b272_4 --> b272_3
end
branch_269 --> block_272
subgraph block_267["Block 267"]
	direction TB
	b267_16["index pop_u32"]
	b267_20["val mach_readMemory32_u16"]
	b267_22["extend U32_extend16_s"]
	b267_24["eff__276 push_u32"]
	b267_15["offset imm_readULEB32"]
	b267_16 --> b267_20
	b267_20 --> b267_22
	b267_22 --> b267_24
	b267_24 --> b267_15
end
branch_264 --> block_267

</pre>`;
window.traces["I32_LOAD16_S"]["schedulerMermaid__raw"] += `graph TD
subgraph block_263["Block 263"]
	direction TB
	b263_1[\\"Finish"/]
end
phi_265 --> block_263
subgraph phi_265["Phi 265"]
	p265_36{{"Sϕ Stack "}}
	p265_35{{"Sϕ Codeptr "}}
end
block_266 --> phi_265
block_267 --> phi_265
subgraph block_266["Block 266"]
	direction TB
	b266_26["index pop_u64"]
	b266_30["val mach_readMemory64_u16"]
	b266_32["extend U32_extend16_s"]
	b266_34["eff__270 push_u32"]
	b266_25["offset imm_readULEB64"]
	b266_26 --> b266_30
	b266_30 --> b266_32
	b266_32 --> b266_34
	b266_34 --> b266_25
end
branch_264 --> block_266
subgraph branch_264["Branch 264"]
	br264_14["cond__269 m_isMemory64"]

end
block_268 --> branch_264
subgraph block_268["Block 268"]
	direction TB
	b268_14["cond__269 m_isMemory64"]
end
phi_270 --> block_268
subgraph phi_270["Phi 270"]
	p270_12{{"Sϕ Codeptr "}}
	p270_12{{"Sϕ Codeptr "}}
	p270_12{{"Sϕ Codeptr "}}
	p270_12{{"Sϕ Codeptr "}}
	p270_11{"memindex ϕ"}
	p270_11{"memindex ϕ"}
	p270_11{"memindex ϕ"}
	p270_11{"memindex ϕ"}
	p270_11{"memindex ϕ"}
	p270_11{"memindex ϕ"}
	p270_12{{"Sϕ Codeptr "}}
	p270_12{{"Sϕ Codeptr "}}
	p270_12{{"Sϕ Codeptr "}}
	p270_12{{"Sϕ Codeptr "}}
end
block_271 --> phi_270
block_272 --> phi_270
subgraph block_271["Block 271"]
	direction TB
	b271_10["memindex__284 imm_readULEB32"]
end
branch_269 --> block_271
subgraph branch_269["Branch 269"]
	br269_9["cond__283 u8.!="]

end
block_273 --> branch_269
subgraph block_273["Block 273"]
	direction TB
	b273_0[/"Start"\\]
	b273_6["arg__288 0x40u8"]
	b273_5["arg__286 0"]
	b273_8["arg__285 u8.&"]
	b273_9["cond__283 u8.!="]
	b273_0 --> b273_6
	b273_6 --> b273_5
	b273_5 --> b273_8
	b273_8 --> b273_9
end
subgraph block_272["Block 272"]
	direction TB
	b272_4["memindex__290 0u"]
	b272_3["flags imm_readU8"]
	b272_4 --> b272_3
end
branch_269 --> block_272
subgraph block_267["Block 267"]
	direction TB
	b267_16["index pop_u32"]
	b267_20["val mach_readMemory32_u16"]
	b267_22["extend U32_extend16_s"]
	b267_24["eff__276 push_u32"]
	b267_15["offset imm_readULEB32"]
	b267_16 --> b267_20
	b267_20 --> b267_22
	b267_22 --> b267_24
	b267_24 --> b267_15
end
branch_264 --> block_267

`;
window.traces["I32_LOAD16_S"]["unLEM"] = ''
window.traces["I32_LOAD16_S"]["unLEM__raw"] = ''
window.traces["I32_LOAD16_S"]["unLEM"] += `<pre class='graph'>---
config:
  layout: elk
---
graph TD
	1[\\"Finish"/]
	35 -. Codeptr .-> 1
	36 -. Stack .-> 1
	0 -. Trap Locals Globals Tables Memory Extra .-> 1
	0[/"Start"\\]
	36{{"Sϕ Stack "}}
	14 --> 36
	34 --> 36
	24 --> 36
	24["eff__276 push_u32"]
	22 --> 24
	16 -. Stack .-> 24
	16["index pop_u32"]
	0 -. Stack .-> 16
	22["extend U32_extend16_s"]
	20 --> 22
	20["val mach_readMemory32_u16"]
	11 --> 20
	16 --> 20
	15 --> 20
	15["offset imm_readULEB32"]
	12 -. Codeptr .-> 15
	12{{"Sϕ Codeptr "}}
	9 --> 12
	10 --> 12
	3 --> 12
	3["flags imm_readU8"]
	0 -. Codeptr .-> 3
	10["memindex__284 imm_readULEB32"]
	3 -. Codeptr .-> 10
	9["cond__283 u8.!="]
	8 --> 9
	5 --> 9
	5["arg__286 0"]
	8["arg__285 u8.&"]
	3 --> 8
	6 --> 8
	6["arg__288 0x40u8"]
	11{"memindex ϕ"}
	9 --> 11
	10 --> 11
	4 --> 11
	4["memindex__290 0u"]
	34["eff__270 push_u32"]
	32 --> 34
	26 -. Stack .-> 34
	26["index pop_u64"]
	0 -. Stack .-> 26
	32["extend U32_extend16_s"]
	30 --> 32
	30["val mach_readMemory64_u16"]
	11 --> 30
	26 --> 30
	25 --> 30
	25["offset imm_readULEB64"]
	12 -. Codeptr .-> 25
	14["cond__269 m_isMemory64"]
	11 --> 14
	35{{"Sϕ Codeptr "}}
	14 --> 35
	25 --> 35
	15 --> 35
</pre>`;
window.traces["I32_LOAD16_S"]["unLEM__raw"] += `---
config:
  layout: elk
---
graph TD
	1[\\"Finish"/]
	35 -. Codeptr .-> 1
	36 -. Stack .-> 1
	0 -. Trap Locals Globals Tables Memory Extra .-> 1
	0[/"Start"\\]
	36{{"Sϕ Stack "}}
	14 --> 36
	34 --> 36
	24 --> 36
	24["eff__276 push_u32"]
	22 --> 24
	16 -. Stack .-> 24
	16["index pop_u32"]
	0 -. Stack .-> 16
	22["extend U32_extend16_s"]
	20 --> 22
	20["val mach_readMemory32_u16"]
	11 --> 20
	16 --> 20
	15 --> 20
	15["offset imm_readULEB32"]
	12 -. Codeptr .-> 15
	12{{"Sϕ Codeptr "}}
	9 --> 12
	10 --> 12
	3 --> 12
	3["flags imm_readU8"]
	0 -. Codeptr .-> 3
	10["memindex__284 imm_readULEB32"]
	3 -. Codeptr .-> 10
	9["cond__283 u8.!="]
	8 --> 9
	5 --> 9
	5["arg__286 0"]
	8["arg__285 u8.&"]
	3 --> 8
	6 --> 8
	6["arg__288 0x40u8"]
	11{"memindex ϕ"}
	9 --> 11
	10 --> 11
	4 --> 11
	4["memindex__290 0u"]
	34["eff__270 push_u32"]
	32 --> 34
	26 -. Stack .-> 34
	26["index pop_u64"]
	0 -. Stack .-> 26
	32["extend U32_extend16_s"]
	30 --> 32
	30["val mach_readMemory64_u16"]
	11 --> 30
	26 --> 30
	25 --> 30
	25["offset imm_readULEB64"]
	12 -. Codeptr .-> 25
	14["cond__269 m_isMemory64"]
	11 --> 14
	35{{"Sϕ Codeptr "}}
	14 --> 35
	25 --> 35
	15 --> 35
`;
window.traces["I32_LOAD16_S"]["unlem_schedule"] = ''
window.traces["I32_LOAD16_S"]["unlem_schedule__raw"] = ''
window.traces["I32_LOAD16_S"]["unlem_schedule"] += `<pre class=''>def flags = imm_readU8();
def arg__288 : byte = 0x40u8;
def arg__285 = u8.&(flags, arg__288);
def arg__286 : byte = 0;
def cond__283 = u8.!=(arg__285, arg__286);
var memindex: u32;
if (cond__283) {
	def memindex__284 = imm_readULEB32();
} else {
	def memindex__290 : u32 = 0u;
}
// phis: memindex <- memindex__284; memindex <- memindex__290; 
def cond__269 = m_isMemory64(memindex);
if (cond__269) {
	def offset = imm_readULEB64();
	def index = pop_u64();
	def val = mach_readMemory64_u16(memindex, index, offset);
	def extend = U32_extend16_s(val);
	def eff__270 = push_u32(extend);
} else {
	def offset = imm_readULEB32();
	def index = pop_u32();
	def val = mach_readMemory32_u16(memindex, index, offset);
	def extend = U32_extend16_s(val);
	def eff__276 = push_u32(extend);
}
// phis: 
</pre>`;
window.traces["I32_LOAD16_S"]["unlem_schedule__raw"] += `def flags = imm_readU8();
def arg__288 : byte = 0x40u8;
def arg__285 = u8.&(flags, arg__288);
def arg__286 : byte = 0;
def cond__283 = u8.!=(arg__285, arg__286);
var memindex: u32;
if (cond__283) {
	def memindex__284 = imm_readULEB32();
} else {
	def memindex__290 : u32 = 0u;
}
// phis: memindex <- memindex__284; memindex <- memindex__290; 
def cond__269 = m_isMemory64(memindex);
if (cond__269) {
	def offset = imm_readULEB64();
	def index = pop_u64();
	def val = mach_readMemory64_u16(memindex, index, offset);
	def extend = U32_extend16_s(val);
	def eff__270 = push_u32(extend);
} else {
	def offset = imm_readULEB32();
	def index = pop_u32();
	def val = mach_readMemory32_u16(memindex, index, offset);
	def extend = U32_extend16_s(val);
	def eff__276 = push_u32(extend);
}
// phis: 
`;
window.traces["I32_LOAD16_S"]["spytial_ul"] = ''
window.traces["I32_LOAD16_S"]["spytial_ul__raw"] = ''
window.traces["I32_LOAD16_S"]["spytial_ul"] += `<pre class=''>{
"atoms": [
{
"id": "node_1",
"type": "finish",
"label": "Finish"
},
{
"id": "node_35",
"type": "state_phi",
"label": "StatePhi [m_isMemory64 [cond__269]]"
},
{
"id": "node_36",
"type": "state_phi",
"label": "StatePhi [m_isMemory64 [cond__269]]"
},
{
"id": "node_0",
"type": "start",
"label": "Start"
},
{
"id": "node_14",
"type": "intrinsic",
"label": "m_isMemory64 [cond__269]"
},
{
"id": "node_25",
"type": "intrinsic",
"label": "imm_readULEB64 [offset]"
},
{
"id": "node_15",
"type": "intrinsic",
"label": "imm_readULEB32 [offset]"
},
{
"id": "node_34",
"type": "intrinsic",
"label": "push_u32 [eff__270]"
},
{
"id": "node_24",
"type": "intrinsic",
"label": "push_u32 [eff__276]"
},
{
"id": "node_11",
"type": "phi",
"label": "Phi"
},
{
"id": "node_12",
"type": "state_phi",
"label": "StatePhi [u8.!= [cond__283]]"
},
{
"id": "node_32",
"type": "intrinsic",
"label": "U32_extend16_s [extend]"
},
{
"id": "node_26",
"type": "intrinsic",
"label": "pop_u64 [index]"
},
{
"id": "node_22",
"type": "intrinsic",
"label": "U32_extend16_s [extend]"
},
{
"id": "node_16",
"type": "intrinsic",
"label": "pop_u32 [index]"
},
{
"id": "node_9",
"type": "intrinsic",
"label": "u8.!= [cond__283]"
},
{
"id": "node_10",
"type": "intrinsic",
"label": "imm_readULEB32 [memindex__284]"
},
{
"id": "node_4",
"type": "lit",
"label": "0u"
},
{
"id": "node_3",
"type": "intrinsic",
"label": "imm_readU8 [flags]"
},
{
"id": "node_30",
"type": "intrinsic",
"label": "mach_readMemory64_u16 [val]"
},
{
"id": "node_20",
"type": "intrinsic",
"label": "mach_readMemory32_u16 [val]"
},
{
"id": "node_8",
"type": "intrinsic",
"label": "u8.& [arg__285]"
},
{
"id": "node_5",
"type": "lit",
"label": "0"
},
{
"id": "node_6",
"type": "lit",
"label": "0x40u8"
}
],
"relations": [
{
"id": "uses",
"name": "Uses",
"types": ["sea_node", "sea_node"],
"tuples": [
{
"atoms": ["node_14", "node_11"],
"types": ["intrinsic", "phi"]
},
{
"atoms": ["node_34", "node_32"],
"types": ["intrinsic", "intrinsic"]
},
{
"atoms": ["node_24", "node_22"],
"types": ["intrinsic", "intrinsic"]
},
{
"atoms": ["node_32", "node_30"],
"types": ["intrinsic", "intrinsic"]
},
{
"atoms": ["node_22", "node_20"],
"types": ["intrinsic", "intrinsic"]
},
{
"atoms": ["node_9", "node_8"],
"types": ["intrinsic", "intrinsic"]
},
{
"atoms": ["node_9", "node_5"],
"types": ["intrinsic", "lit"]
},
{
"atoms": ["node_30", "node_11"],
"types": ["intrinsic", "phi"]
},
{
"atoms": ["node_30", "node_26"],
"types": ["intrinsic", "intrinsic"]
},
{
"atoms": ["node_30", "node_25"],
"types": ["intrinsic", "intrinsic"]
},
{
"atoms": ["node_20", "node_11"],
"types": ["intrinsic", "phi"]
},
{
"atoms": ["node_20", "node_16"],
"types": ["intrinsic", "intrinsic"]
},
{
"atoms": ["node_20", "node_15"],
"types": ["intrinsic", "intrinsic"]
},
{
"atoms": ["node_8", "node_3"],
"types": ["intrinsic", "intrinsic"]
},
{
"atoms": ["node_8", "node_6"],
"types": ["intrinsic", "lit"]
}
]
},
{
"id": "state_uses",
"name": "StateUses",
"types": ["sea_node", "sea_node"],
"tuples": [
{
"atoms": ["node_1", "node_35"],
"types": ["finish", "state_phi"]
},
{
"atoms": ["node_1", "node_36"],
"types": ["finish", "state_phi"]
},
{
"atoms": ["node_1", "node_0"],
"types": ["finish", "start"]
},
{
"atoms": ["node_25", "node_12"],
"types": ["intrinsic", "state_phi"]
},
{
"atoms": ["node_15", "node_12"],
"types": ["intrinsic", "state_phi"]
},
{
"atoms": ["node_34", "node_26"],
"types": ["intrinsic", "intrinsic"]
},
{
"atoms": ["node_24", "node_16"],
"types": ["intrinsic", "intrinsic"]
},
{
"atoms": ["node_26", "node_0"],
"types": ["intrinsic", "start"]
},
{
"atoms": ["node_16", "node_0"],
"types": ["intrinsic", "start"]
},
{
"atoms": ["node_10", "node_3"],
"types": ["intrinsic", "intrinsic"]
},
{
"atoms": ["node_3", "node_0"],
"types": ["intrinsic", "start"]
}
]
},
{
"id": "phi_cond",
"name": "PhiCond",
"types": ["sea_node", "sea_node"],
"tuples": [
{
"atoms": ["node_35", "node_14"],
"types": ["state_phi", "intrinsic"]
},
{
"atoms": ["node_36", "node_14"],
"types": ["state_phi", "intrinsic"]
},
{
"atoms": ["node_11", "node_9"],
"types": ["phi", "intrinsic"]
},
{
"atoms": ["node_12", "node_9"],
"types": ["state_phi", "intrinsic"]
}
]
},
{
"id": "phi_true",
"name": "PhiTrue",
"types": ["sea_node", "sea_node"],
"tuples": [
{
"atoms": ["node_35", "node_25"],
"types": ["state_phi", "intrinsic"]
},
{
"atoms": ["node_36", "node_34"],
"types": ["state_phi", "intrinsic"]
},
{
"atoms": ["node_11", "node_10"],
"types": ["phi", "intrinsic"]
},
{
"atoms": ["node_12", "node_10"],
"types": ["state_phi", "intrinsic"]
}
]
},
{
"id": "phi_false",
"name": "PhiFalse",
"types": ["sea_node", "sea_node"],
"tuples": [
{
"atoms": ["node_35", "node_15"],
"types": ["state_phi", "intrinsic"]
},
{
"atoms": ["node_36", "node_24"],
"types": ["state_phi", "intrinsic"]
},
{
"atoms": ["node_11", "node_4"],
"types": ["phi", "lit"]
},
{
"atoms": ["node_12", "node_3"],
"types": ["state_phi", "intrinsic"]
}
]
}
]
}</pre>`;
window.traces["I32_LOAD16_S"]["spytial_ul__raw"] += `{
"atoms": [
{
"id": "node_1",
"type": "finish",
"label": "Finish"
},
{
"id": "node_35",
"type": "state_phi",
"label": "StatePhi [m_isMemory64 [cond__269]]"
},
{
"id": "node_36",
"type": "state_phi",
"label": "StatePhi [m_isMemory64 [cond__269]]"
},
{
"id": "node_0",
"type": "start",
"label": "Start"
},
{
"id": "node_14",
"type": "intrinsic",
"label": "m_isMemory64 [cond__269]"
},
{
"id": "node_25",
"type": "intrinsic",
"label": "imm_readULEB64 [offset]"
},
{
"id": "node_15",
"type": "intrinsic",
"label": "imm_readULEB32 [offset]"
},
{
"id": "node_34",
"type": "intrinsic",
"label": "push_u32 [eff__270]"
},
{
"id": "node_24",
"type": "intrinsic",
"label": "push_u32 [eff__276]"
},
{
"id": "node_11",
"type": "phi",
"label": "Phi"
},
{
"id": "node_12",
"type": "state_phi",
"label": "StatePhi [u8.!= [cond__283]]"
},
{
"id": "node_32",
"type": "intrinsic",
"label": "U32_extend16_s [extend]"
},
{
"id": "node_26",
"type": "intrinsic",
"label": "pop_u64 [index]"
},
{
"id": "node_22",
"type": "intrinsic",
"label": "U32_extend16_s [extend]"
},
{
"id": "node_16",
"type": "intrinsic",
"label": "pop_u32 [index]"
},
{
"id": "node_9",
"type": "intrinsic",
"label": "u8.!= [cond__283]"
},
{
"id": "node_10",
"type": "intrinsic",
"label": "imm_readULEB32 [memindex__284]"
},
{
"id": "node_4",
"type": "lit",
"label": "0u"
},
{
"id": "node_3",
"type": "intrinsic",
"label": "imm_readU8 [flags]"
},
{
"id": "node_30",
"type": "intrinsic",
"label": "mach_readMemory64_u16 [val]"
},
{
"id": "node_20",
"type": "intrinsic",
"label": "mach_readMemory32_u16 [val]"
},
{
"id": "node_8",
"type": "intrinsic",
"label": "u8.& [arg__285]"
},
{
"id": "node_5",
"type": "lit",
"label": "0"
},
{
"id": "node_6",
"type": "lit",
"label": "0x40u8"
}
],
"relations": [
{
"id": "uses",
"name": "Uses",
"types": ["sea_node", "sea_node"],
"tuples": [
{
"atoms": ["node_14", "node_11"],
"types": ["intrinsic", "phi"]
},
{
"atoms": ["node_34", "node_32"],
"types": ["intrinsic", "intrinsic"]
},
{
"atoms": ["node_24", "node_22"],
"types": ["intrinsic", "intrinsic"]
},
{
"atoms": ["node_32", "node_30"],
"types": ["intrinsic", "intrinsic"]
},
{
"atoms": ["node_22", "node_20"],
"types": ["intrinsic", "intrinsic"]
},
{
"atoms": ["node_9", "node_8"],
"types": ["intrinsic", "intrinsic"]
},
{
"atoms": ["node_9", "node_5"],
"types": ["intrinsic", "lit"]
},
{
"atoms": ["node_30", "node_11"],
"types": ["intrinsic", "phi"]
},
{
"atoms": ["node_30", "node_26"],
"types": ["intrinsic", "intrinsic"]
},
{
"atoms": ["node_30", "node_25"],
"types": ["intrinsic", "intrinsic"]
},
{
"atoms": ["node_20", "node_11"],
"types": ["intrinsic", "phi"]
},
{
"atoms": ["node_20", "node_16"],
"types": ["intrinsic", "intrinsic"]
},
{
"atoms": ["node_20", "node_15"],
"types": ["intrinsic", "intrinsic"]
},
{
"atoms": ["node_8", "node_3"],
"types": ["intrinsic", "intrinsic"]
},
{
"atoms": ["node_8", "node_6"],
"types": ["intrinsic", "lit"]
}
]
},
{
"id": "state_uses",
"name": "StateUses",
"types": ["sea_node", "sea_node"],
"tuples": [
{
"atoms": ["node_1", "node_35"],
"types": ["finish", "state_phi"]
},
{
"atoms": ["node_1", "node_36"],
"types": ["finish", "state_phi"]
},
{
"atoms": ["node_1", "node_0"],
"types": ["finish", "start"]
},
{
"atoms": ["node_25", "node_12"],
"types": ["intrinsic", "state_phi"]
},
{
"atoms": ["node_15", "node_12"],
"types": ["intrinsic", "state_phi"]
},
{
"atoms": ["node_34", "node_26"],
"types": ["intrinsic", "intrinsic"]
},
{
"atoms": ["node_24", "node_16"],
"types": ["intrinsic", "intrinsic"]
},
{
"atoms": ["node_26", "node_0"],
"types": ["intrinsic", "start"]
},
{
"atoms": ["node_16", "node_0"],
"types": ["intrinsic", "start"]
},
{
"atoms": ["node_10", "node_3"],
"types": ["intrinsic", "intrinsic"]
},
{
"atoms": ["node_3", "node_0"],
"types": ["intrinsic", "start"]
}
]
},
{
"id": "phi_cond",
"name": "PhiCond",
"types": ["sea_node", "sea_node"],
"tuples": [
{
"atoms": ["node_35", "node_14"],
"types": ["state_phi", "intrinsic"]
},
{
"atoms": ["node_36", "node_14"],
"types": ["state_phi", "intrinsic"]
},
{
"atoms": ["node_11", "node_9"],
"types": ["phi", "intrinsic"]
},
{
"atoms": ["node_12", "node_9"],
"types": ["state_phi", "intrinsic"]
}
]
},
{
"id": "phi_true",
"name": "PhiTrue",
"types": ["sea_node", "sea_node"],
"tuples": [
{
"atoms": ["node_35", "node_25"],
"types": ["state_phi", "intrinsic"]
},
{
"atoms": ["node_36", "node_34"],
"types": ["state_phi", "intrinsic"]
},
{
"atoms": ["node_11", "node_10"],
"types": ["phi", "intrinsic"]
},
{
"atoms": ["node_12", "node_10"],
"types": ["state_phi", "intrinsic"]
}
]
},
{
"id": "phi_false",
"name": "PhiFalse",
"types": ["sea_node", "sea_node"],
"tuples": [
{
"atoms": ["node_35", "node_15"],
"types": ["state_phi", "intrinsic"]
},
{
"atoms": ["node_36", "node_24"],
"types": ["state_phi", "intrinsic"]
},
{
"atoms": ["node_11", "node_4"],
"types": ["phi", "lit"]
},
{
"atoms": ["node_12", "node_3"],
"types": ["state_phi", "intrinsic"]
}
]
}
]
}`;
window.traces["I32_LOAD16_S"]["unlem_scheduler"] = ''
window.traces["I32_LOAD16_S"]["unlem_scheduler__raw"] = ''
window.traces["I32_LOAD16_S"]["unlem_scheduler"] += `<pre class='graph'>graph TD
subgraph block_274["Block 274"]
	direction TB
	b274_1[\\"Finish"/]
end
phi_276 --> block_274
subgraph phi_276["Phi 276"]
	p276_36{{"Sϕ Stack "}}
	p276_35{{"Sϕ Codeptr "}}
end
block_277 --> phi_276
block_278 --> phi_276
subgraph block_277["Block 277"]
	direction TB
	b277_26["index pop_u64"]
	b277_30["val mach_readMemory64_u16"]
	b277_32["extend U32_extend16_s"]
	b277_34["eff__270 push_u32"]
	b277_25["offset imm_readULEB64"]
	b277_26 --> b277_30
	b277_30 --> b277_32
	b277_32 --> b277_34
	b277_34 --> b277_25
end
branch_275 --> block_277
subgraph branch_275["Branch 275"]
	br275_14["cond__269 m_isMemory64"]

end
block_279 --> branch_275
subgraph block_279["Block 279"]
	direction TB
	b279_14["cond__269 m_isMemory64"]
end
phi_281 --> block_279
subgraph phi_281["Phi 281"]
	p281_12{{"Sϕ Codeptr "}}
	p281_12{{"Sϕ Codeptr "}}
	p281_12{{"Sϕ Codeptr "}}
	p281_12{{"Sϕ Codeptr "}}
	p281_11{"memindex ϕ"}
	p281_11{"memindex ϕ"}
	p281_11{"memindex ϕ"}
	p281_11{"memindex ϕ"}
	p281_11{"memindex ϕ"}
	p281_11{"memindex ϕ"}
	p281_12{{"Sϕ Codeptr "}}
	p281_12{{"Sϕ Codeptr "}}
	p281_12{{"Sϕ Codeptr "}}
	p281_12{{"Sϕ Codeptr "}}
end
block_282 --> phi_281
block_283 --> phi_281
subgraph block_282["Block 282"]
	direction TB
	b282_10["memindex__284 imm_readULEB32"]
end
branch_280 --> block_282
subgraph branch_280["Branch 280"]
	br280_9["cond__283 u8.!="]

end
block_284 --> branch_280
subgraph block_284["Block 284"]
	direction TB
	b284_0[/"Start"\\]
	b284_6["arg__288 0x40u8"]
	b284_5["arg__286 0"]
	b284_8["arg__285 u8.&"]
	b284_9["cond__283 u8.!="]
	b284_0 --> b284_6
	b284_6 --> b284_5
	b284_5 --> b284_8
	b284_8 --> b284_9
end
subgraph block_283["Block 283"]
	direction TB
	b283_4["memindex__290 0u"]
	b283_3["flags imm_readU8"]
	b283_4 --> b283_3
end
branch_280 --> block_283
subgraph block_278["Block 278"]
	direction TB
	b278_16["index pop_u32"]
	b278_20["val mach_readMemory32_u16"]
	b278_22["extend U32_extend16_s"]
	b278_24["eff__276 push_u32"]
	b278_15["offset imm_readULEB32"]
	b278_16 --> b278_20
	b278_20 --> b278_22
	b278_22 --> b278_24
	b278_24 --> b278_15
end
branch_275 --> block_278

</pre>`;
window.traces["I32_LOAD16_S"]["unlem_scheduler__raw"] += `graph TD
subgraph block_274["Block 274"]
	direction TB
	b274_1[\\"Finish"/]
end
phi_276 --> block_274
subgraph phi_276["Phi 276"]
	p276_36{{"Sϕ Stack "}}
	p276_35{{"Sϕ Codeptr "}}
end
block_277 --> phi_276
block_278 --> phi_276
subgraph block_277["Block 277"]
	direction TB
	b277_26["index pop_u64"]
	b277_30["val mach_readMemory64_u16"]
	b277_32["extend U32_extend16_s"]
	b277_34["eff__270 push_u32"]
	b277_25["offset imm_readULEB64"]
	b277_26 --> b277_30
	b277_30 --> b277_32
	b277_32 --> b277_34
	b277_34 --> b277_25
end
branch_275 --> block_277
subgraph branch_275["Branch 275"]
	br275_14["cond__269 m_isMemory64"]

end
block_279 --> branch_275
subgraph block_279["Block 279"]
	direction TB
	b279_14["cond__269 m_isMemory64"]
end
phi_281 --> block_279
subgraph phi_281["Phi 281"]
	p281_12{{"Sϕ Codeptr "}}
	p281_12{{"Sϕ Codeptr "}}
	p281_12{{"Sϕ Codeptr "}}
	p281_12{{"Sϕ Codeptr "}}
	p281_11{"memindex ϕ"}
	p281_11{"memindex ϕ"}
	p281_11{"memindex ϕ"}
	p281_11{"memindex ϕ"}
	p281_11{"memindex ϕ"}
	p281_11{"memindex ϕ"}
	p281_12{{"Sϕ Codeptr "}}
	p281_12{{"Sϕ Codeptr "}}
	p281_12{{"Sϕ Codeptr "}}
	p281_12{{"Sϕ Codeptr "}}
end
block_282 --> phi_281
block_283 --> phi_281
subgraph block_282["Block 282"]
	direction TB
	b282_10["memindex__284 imm_readULEB32"]
end
branch_280 --> block_282
subgraph branch_280["Branch 280"]
	br280_9["cond__283 u8.!="]

end
block_284 --> branch_280
subgraph block_284["Block 284"]
	direction TB
	b284_0[/"Start"\\]
	b284_6["arg__288 0x40u8"]
	b284_5["arg__286 0"]
	b284_8["arg__285 u8.&"]
	b284_9["cond__283 u8.!="]
	b284_0 --> b284_6
	b284_6 --> b284_5
	b284_5 --> b284_8
	b284_8 --> b284_9
end
subgraph block_283["Block 283"]
	direction TB
	b283_4["memindex__290 0u"]
	b283_3["flags imm_readU8"]
	b283_4 --> b283_3
end
branch_280 --> block_283
subgraph block_278["Block 278"]
	direction TB
	b278_16["index pop_u32"]
	b278_20["val mach_readMemory32_u16"]
	b278_22["extend U32_extend16_s"]
	b278_24["eff__276 push_u32"]
	b278_15["offset imm_readULEB32"]
	b278_16 --> b278_20
	b278_20 --> b278_22
	b278_22 --> b278_24
	b278_24 --> b278_15
end
branch_275 --> block_278

`;
window.traces["I32_LOAD16_S"]["unlem_pretty"] = ''
window.traces["I32_LOAD16_S"]["unlem_pretty__raw"] = ''
window.traces["I32_LOAD16_S"]["unlem_pretty"] += `<pre class=''>def flags = imm_readU8();
var memindex: u32;
if (u8.!=(u8.&(flags, 0x40u8), 0)) {
	memindex = imm_readULEB32();
} else {
	memindex = 0u;
}
def cond = m_isMemory64(memindex);
if (cond) {
	def offset = imm_readULEB64();
	def index = pop_u64();
	def val = mach_readMemory64_u16(memindex, index, offset);
	def extend = U32_extend16_s(val);
	push_u32(extend);
} else {
	def offset = imm_readULEB32();
	def index = pop_u32();
	def val = mach_readMemory32_u16(memindex, index, offset);
	def extend = U32_extend16_s(val);
	push_u32(extend);
}
</pre>`;
window.traces["I32_LOAD16_S"]["unlem_pretty__raw"] += `def flags = imm_readU8();
var memindex: u32;
if (u8.!=(u8.&(flags, 0x40u8), 0)) {
	memindex = imm_readULEB32();
} else {
	memindex = 0u;
}
def cond = m_isMemory64(memindex);
if (cond) {
	def offset = imm_readULEB64();
	def index = pop_u64();
	def val = mach_readMemory64_u16(memindex, index, offset);
	def extend = U32_extend16_s(val);
	push_u32(extend);
} else {
	def offset = imm_readULEB32();
	def index = pop_u32();
	def val = mach_readMemory32_u16(memindex, index, offset);
	def extend = U32_extend16_s(val);
	push_u32(extend);
}
`;
window.traces["I32_LOAD16_S"]["constUnLEM"] = ''
window.traces["I32_LOAD16_S"]["constUnLEM__raw"] = ''
window.traces["I32_LOAD16_S"]["constUnLEM"] += `<pre class='graph'>---
config:
  layout: elk
---
graph TD
	1[\\"Finish"/]
	35 -. Codeptr .-> 1
	36 -. Stack .-> 1
	0 -. Trap Locals Globals Tables Memory Extra .-> 1
	0[/"Start"\\]
	36{{"Sϕ Stack "}}
	14 --> 36
	34 --> 36
	24 --> 36
	24["eff__276 push_u32"]
	22 --> 24
	16 -. Stack .-> 24
	16["index pop_u32"]
	0 -. Stack .-> 16
	22["extend U32_extend16_s"]
	20 --> 22
	20["val mach_readMemory32_u16"]
	11 --> 20
	16 --> 20
	15 --> 20
	15["offset imm_readULEB32"]
	12 -. Codeptr .-> 15
	12{{"Sϕ Codeptr "}}
	9 --> 12
	10 --> 12
	3 --> 12
	3["flags imm_readU8"]
	0 -. Codeptr .-> 3
	10["memindex__284 imm_readULEB32"]
	3 -. Codeptr .-> 10
	9["cond__283 u8.!="]
	8 --> 9
	5 --> 9
	5["arg__286 0"]
	8["arg__285 u8.&"]
	3 --> 8
	6 --> 8
	6["arg__288 0x40u8"]
	11{"memindex ϕ"}
	9 --> 11
	10 --> 11
	4 --> 11
	4["memindex__290 0u"]
	34["eff__270 push_u32"]
	32 --> 34
	26 -. Stack .-> 34
	26["index pop_u64"]
	0 -. Stack .-> 26
	32["extend U32_extend16_s"]
	30 --> 32
	30["val mach_readMemory64_u16"]
	11 --> 30
	26 --> 30
	25 --> 30
	25["offset imm_readULEB64"]
	12 -. Codeptr .-> 25
	14["cond__269 m_isMemory64"]
	11 --> 14
	35{{"Sϕ Codeptr "}}
	14 --> 35
	25 --> 35
	15 --> 35
</pre>`;
window.traces["I32_LOAD16_S"]["constUnLEM__raw"] += `---
config:
  layout: elk
---
graph TD
	1[\\"Finish"/]
	35 -. Codeptr .-> 1
	36 -. Stack .-> 1
	0 -. Trap Locals Globals Tables Memory Extra .-> 1
	0[/"Start"\\]
	36{{"Sϕ Stack "}}
	14 --> 36
	34 --> 36
	24 --> 36
	24["eff__276 push_u32"]
	22 --> 24
	16 -. Stack .-> 24
	16["index pop_u32"]
	0 -. Stack .-> 16
	22["extend U32_extend16_s"]
	20 --> 22
	20["val mach_readMemory32_u16"]
	11 --> 20
	16 --> 20
	15 --> 20
	15["offset imm_readULEB32"]
	12 -. Codeptr .-> 15
	12{{"Sϕ Codeptr "}}
	9 --> 12
	10 --> 12
	3 --> 12
	3["flags imm_readU8"]
	0 -. Codeptr .-> 3
	10["memindex__284 imm_readULEB32"]
	3 -. Codeptr .-> 10
	9["cond__283 u8.!="]
	8 --> 9
	5 --> 9
	5["arg__286 0"]
	8["arg__285 u8.&"]
	3 --> 8
	6 --> 8
	6["arg__288 0x40u8"]
	11{"memindex ϕ"}
	9 --> 11
	10 --> 11
	4 --> 11
	4["memindex__290 0u"]
	34["eff__270 push_u32"]
	32 --> 34
	26 -. Stack .-> 34
	26["index pop_u64"]
	0 -. Stack .-> 26
	32["extend U32_extend16_s"]
	30 --> 32
	30["val mach_readMemory64_u16"]
	11 --> 30
	26 --> 30
	25 --> 30
	25["offset imm_readULEB64"]
	12 -. Codeptr .-> 25
	14["cond__269 m_isMemory64"]
	11 --> 14
	35{{"Sϕ Codeptr "}}
	14 --> 35
	25 --> 35
	15 --> 35
`;
window.traces["I32_LOAD16_S"]["chooseMerge"] = ''
window.traces["I32_LOAD16_S"]["chooseMerge__raw"] = ''
window.traces["I32_LOAD16_S"]["chooseMerge"] += `<pre class='graph'>---
config:
  layout: elk
---
graph TD
	1[\\"Finish"/]
	35 -. Codeptr .-> 1
	36 -. Stack .-> 1
	0 -. Trap Locals Globals Tables Memory Extra .-> 1
	0[/"Start"\\]
	36{{"Sϕ Stack "}}
	14 --> 36
	34 --> 36
	24 --> 36
	24["eff__276 push_u32"]
	22 --> 24
	16 -. Stack .-> 24
	16["index pop_u32"]
	0 -. Stack .-> 16
	22["extend U32_extend16_s"]
	20 --> 22
	20["val mach_readMemory32_u16"]
	11 --> 20
	16 --> 20
	15 --> 20
	15["offset imm_readULEB32"]
	12 -. Codeptr .-> 15
	12{{"Sϕ Codeptr "}}
	9 --> 12
	10 --> 12
	3 --> 12
	3["flags imm_readU8"]
	0 -. Codeptr .-> 3
	10["memindex__284 imm_readULEB32"]
	3 -. Codeptr .-> 10
	9["cond__283 u8.!="]
	8 --> 9
	5 --> 9
	5["arg__286 0"]
	8["arg__285 u8.&"]
	3 --> 8
	6 --> 8
	6["arg__288 0x40u8"]
	11{"memindex ϕ"}
	9 --> 11
	10 --> 11
	4 --> 11
	4["memindex__290 0u"]
	34["eff__270 push_u32"]
	32 --> 34
	26 -. Stack .-> 34
	26["index pop_u64"]
	0 -. Stack .-> 26
	32["extend U32_extend16_s"]
	30 --> 32
	30["val mach_readMemory64_u16"]
	11 --> 30
	26 --> 30
	25 --> 30
	25["offset imm_readULEB64"]
	12 -. Codeptr .-> 25
	14["cond__269 m_isMemory64"]
	11 --> 14
	35{{"Sϕ Codeptr "}}
	14 --> 35
	25 --> 35
	15 --> 35
</pre>`;
window.traces["I32_LOAD16_S"]["chooseMerge__raw"] += `---
config:
  layout: elk
---
graph TD
	1[\\"Finish"/]
	35 -. Codeptr .-> 1
	36 -. Stack .-> 1
	0 -. Trap Locals Globals Tables Memory Extra .-> 1
	0[/"Start"\\]
	36{{"Sϕ Stack "}}
	14 --> 36
	34 --> 36
	24 --> 36
	24["eff__276 push_u32"]
	22 --> 24
	16 -. Stack .-> 24
	16["index pop_u32"]
	0 -. Stack .-> 16
	22["extend U32_extend16_s"]
	20 --> 22
	20["val mach_readMemory32_u16"]
	11 --> 20
	16 --> 20
	15 --> 20
	15["offset imm_readULEB32"]
	12 -. Codeptr .-> 15
	12{{"Sϕ Codeptr "}}
	9 --> 12
	10 --> 12
	3 --> 12
	3["flags imm_readU8"]
	0 -. Codeptr .-> 3
	10["memindex__284 imm_readULEB32"]
	3 -. Codeptr .-> 10
	9["cond__283 u8.!="]
	8 --> 9
	5 --> 9
	5["arg__286 0"]
	8["arg__285 u8.&"]
	3 --> 8
	6 --> 8
	6["arg__288 0x40u8"]
	11{"memindex ϕ"}
	9 --> 11
	10 --> 11
	4 --> 11
	4["memindex__290 0u"]
	34["eff__270 push_u32"]
	32 --> 34
	26 -. Stack .-> 34
	26["index pop_u64"]
	0 -. Stack .-> 26
	32["extend U32_extend16_s"]
	30 --> 32
	30["val mach_readMemory64_u16"]
	11 --> 30
	26 --> 30
	25 --> 30
	25["offset imm_readULEB64"]
	12 -. Codeptr .-> 25
	14["cond__269 m_isMemory64"]
	11 --> 14
	35{{"Sϕ Codeptr "}}
	14 --> 35
	25 --> 35
	15 --> 35
`;
window.traces["I32_LOAD16_S"]["scheduled"] = ''
window.traces["I32_LOAD16_S"]["scheduled__raw"] = ''
window.traces["I32_LOAD16_S"]["scheduled"] += `<pre class=''>def flags = imm_readU8();
def arg__288 : byte = 0x40u8;
def arg__285 = u8.&(flags, arg__288);
def arg__286 : byte = 0;
def cond__283 = u8.!=(arg__285, arg__286);
var memindex: u32;
if (cond__283) {
	def memindex__284 = imm_readULEB32();
} else {
	def memindex__290 : u32 = 0u;
}
// phis: memindex <- memindex__284; memindex <- memindex__290; 
def cond__269 = m_isMemory64(memindex);
if (cond__269) {
	def offset = imm_readULEB64();
	def index = pop_u64();
	def val = mach_readMemory64_u16(memindex, index, offset);
	def extend = U32_extend16_s(val);
	def eff__270 = push_u32(extend);
} else {
	def offset = imm_readULEB32();
	def index = pop_u32();
	def val = mach_readMemory32_u16(memindex, index, offset);
	def extend = U32_extend16_s(val);
	def eff__276 = push_u32(extend);
}
// phis: 
</pre>`;
window.traces["I32_LOAD16_S"]["scheduled__raw"] += `def flags = imm_readU8();
def arg__288 : byte = 0x40u8;
def arg__285 = u8.&(flags, arg__288);
def arg__286 : byte = 0;
def cond__283 = u8.!=(arg__285, arg__286);
var memindex: u32;
if (cond__283) {
	def memindex__284 = imm_readULEB32();
} else {
	def memindex__290 : u32 = 0u;
}
// phis: memindex <- memindex__284; memindex <- memindex__290; 
def cond__269 = m_isMemory64(memindex);
if (cond__269) {
	def offset = imm_readULEB64();
	def index = pop_u64();
	def val = mach_readMemory64_u16(memindex, index, offset);
	def extend = U32_extend16_s(val);
	def eff__270 = push_u32(extend);
} else {
	def offset = imm_readULEB32();
	def index = pop_u32();
	def val = mach_readMemory32_u16(memindex, index, offset);
	def extend = U32_extend16_s(val);
	def eff__276 = push_u32(extend);
}
// phis: 
`;
window.traces["I32_LOAD16_S"]["pretty"] = ''
window.traces["I32_LOAD16_S"]["pretty__raw"] = ''
window.traces["I32_LOAD16_S"]["pretty"] += `<pre class=''>def flags = imm_readU8();
var memindex: u32;
if (u8.!=(u8.&(flags, 0x40u8), 0)) {
	memindex = imm_readULEB32();
} else {
	memindex = 0u;
}
def cond = m_isMemory64(memindex);
if (cond) {
	def offset = imm_readULEB64();
	def index = pop_u64();
	def val = mach_readMemory64_u16(memindex, index, offset);
	def extend = U32_extend16_s(val);
	push_u32(extend);
} else {
	def offset = imm_readULEB32();
	def index = pop_u32();
	def val = mach_readMemory32_u16(memindex, index, offset);
	def extend = U32_extend16_s(val);
	push_u32(extend);
}
</pre>`;
window.traces["I32_LOAD16_S"]["pretty__raw"] += `def flags = imm_readU8();
var memindex: u32;
if (u8.!=(u8.&(flags, 0x40u8), 0)) {
	memindex = imm_readULEB32();
} else {
	memindex = 0u;
}
def cond = m_isMemory64(memindex);
if (cond) {
	def offset = imm_readULEB64();
	def index = pop_u64();
	def val = mach_readMemory64_u16(memindex, index, offset);
	def extend = U32_extend16_s(val);
	push_u32(extend);
} else {
	def offset = imm_readULEB32();
	def index = pop_u32();
	def val = mach_readMemory32_u16(memindex, index, offset);
	def extend = U32_extend16_s(val);
	push_u32(extend);
}
`;
window.traces["I32_LOAD16_U"] = {}
window.traces["I32_LOAD16_U"]["parsed"] = ''
window.traces["I32_LOAD16_U"]["parsed__raw"] = ''
window.traces["I32_LOAD16_U"]["parsed"] += `<pre class=''>def flags = imm_readU8();
def memindex : u32 = 0u;
def arg__306 : byte = 0;
def arg__308 : byte = 0x40u8;
def arg__307 = (flags);
def arg__305 = u8.&(arg__307, arg__308);
def cond__303 = u8.!=(arg__305, arg__306);
if (cond__303) {
	def memindex__304 = imm_readULEB32();
}
// phis: memindex <- memindex__304; 
def arg__302 = (memindex);
def cond__291 = m_isMemory64(arg__302);
if (cond__291) {
	def offset = imm_readULEB64();
	def index = pop_u64();
	def arg__296 = (offset);
	def arg__295 = (index);
	def arg__294 = (memindex);
	def val = mach_readMemory64_u16(arg__294, arg__295, arg__296);
	def arg__293 = (val);
	def eff__292 = push_u32(arg__293);
} else {
	def offset = imm_readULEB32();
	def index = pop_u32();
	def arg__301 = (offset);
	def arg__300 = (index);
	def arg__299 = (memindex);
	def val = mach_readMemory32_u16(arg__299, arg__300, arg__301);
	def arg__298 = (val);
	def eff__297 = push_u32(arg__298);
}
// phis: 
</pre>`;
window.traces["I32_LOAD16_U"]["parsed__raw"] += `def flags = imm_readU8();
def memindex : u32 = 0u;
def arg__306 : byte = 0;
def arg__308 : byte = 0x40u8;
def arg__307 = (flags);
def arg__305 = u8.&(arg__307, arg__308);
def cond__303 = u8.!=(arg__305, arg__306);
if (cond__303) {
	def memindex__304 = imm_readULEB32();
}
// phis: memindex <- memindex__304; 
def arg__302 = (memindex);
def cond__291 = m_isMemory64(arg__302);
if (cond__291) {
	def offset = imm_readULEB64();
	def index = pop_u64();
	def arg__296 = (offset);
	def arg__295 = (index);
	def arg__294 = (memindex);
	def val = mach_readMemory64_u16(arg__294, arg__295, arg__296);
	def arg__293 = (val);
	def eff__292 = push_u32(arg__293);
} else {
	def offset = imm_readULEB32();
	def index = pop_u32();
	def arg__301 = (offset);
	def arg__300 = (index);
	def arg__299 = (memindex);
	def val = mach_readMemory32_u16(arg__299, arg__300, arg__301);
	def arg__298 = (val);
	def eff__297 = push_u32(arg__298);
}
// phis: 
`;
window.traces["I32_LOAD16_U"]["raw"] = ''
window.traces["I32_LOAD16_U"]["raw__raw"] = ''
window.traces["I32_LOAD16_U"]["raw"] += `<pre class='graph'>---
config:
  layout: elk
---
graph TD
	1[\\"Finish"/]
	31 -. Codeptr .-> 1
	32 -. Stack .-> 1
	0 -. Trap Locals Globals Tables Memory Extra .-> 1
	0[/"Start"\\]
	32{{"Sϕ Stack "}}
	14 --> 32
	30 --> 32
	22 --> 32
	22["eff__297 push_u32"]
	20 --> 22
	16 -. Stack .-> 22
	16["index pop_u32"]
	0 -. Stack .-> 16
	20["val mach_readMemory32_u16"]
	11 --> 20
	16 --> 20
	15 --> 20
	15["offset imm_readULEB32"]
	12 -. Codeptr .-> 15
	12{{"Sϕ Codeptr "}}
	9 --> 12
	10 --> 12
	3 --> 12
	3["flags imm_readU8"]
	0 -. Codeptr .-> 3
	10["memindex__304 imm_readULEB32"]
	3 -. Codeptr .-> 10
	9["cond__303 u8.!="]
	8 --> 9
	5 --> 9
	5["arg__306 0"]
	8["arg__305 u8.&"]
	3 --> 8
	6 --> 8
	6["arg__308 0x40u8"]
	11{"memindex ϕ"}
	9 --> 11
	10 --> 11
	4 --> 11
	4["memindex__309 0u"]
	30["eff__292 push_u32"]
	28 --> 30
	24 -. Stack .-> 30
	24["index pop_u64"]
	0 -. Stack .-> 24
	28["val mach_readMemory64_u16"]
	11 --> 28
	24 --> 28
	23 --> 28
	23["offset imm_readULEB64"]
	12 -. Codeptr .-> 23
	14["cond__291 m_isMemory64"]
	11 --> 14
	31{{"Sϕ Codeptr "}}
	14 --> 31
	23 --> 31
	15 --> 31
</pre>`;
window.traces["I32_LOAD16_U"]["raw__raw"] += `---
config:
  layout: elk
---
graph TD
	1[\\"Finish"/]
	31 -. Codeptr .-> 1
	32 -. Stack .-> 1
	0 -. Trap Locals Globals Tables Memory Extra .-> 1
	0[/"Start"\\]
	32{{"Sϕ Stack "}}
	14 --> 32
	30 --> 32
	22 --> 32
	22["eff__297 push_u32"]
	20 --> 22
	16 -. Stack .-> 22
	16["index pop_u32"]
	0 -. Stack .-> 16
	20["val mach_readMemory32_u16"]
	11 --> 20
	16 --> 20
	15 --> 20
	15["offset imm_readULEB32"]
	12 -. Codeptr .-> 15
	12{{"Sϕ Codeptr "}}
	9 --> 12
	10 --> 12
	3 --> 12
	3["flags imm_readU8"]
	0 -. Codeptr .-> 3
	10["memindex__304 imm_readULEB32"]
	3 -. Codeptr .-> 10
	9["cond__303 u8.!="]
	8 --> 9
	5 --> 9
	5["arg__306 0"]
	8["arg__305 u8.&"]
	3 --> 8
	6 --> 8
	6["arg__308 0x40u8"]
	11{"memindex ϕ"}
	9 --> 11
	10 --> 11
	4 --> 11
	4["memindex__309 0u"]
	30["eff__292 push_u32"]
	28 --> 30
	24 -. Stack .-> 30
	24["index pop_u64"]
	0 -. Stack .-> 24
	28["val mach_readMemory64_u16"]
	11 --> 28
	24 --> 28
	23 --> 28
	23["offset imm_readULEB64"]
	12 -. Codeptr .-> 23
	14["cond__291 m_isMemory64"]
	11 --> 14
	31{{"Sϕ Codeptr "}}
	14 --> 31
	23 --> 31
	15 --> 31
`;
window.traces["I32_LOAD16_U"]["spytial"] = ''
window.traces["I32_LOAD16_U"]["spytial__raw"] = ''
window.traces["I32_LOAD16_U"]["spytial"] += `<pre class=''>{
"atoms": [
{
"id": "node_1",
"type": "finish",
"label": "Finish"
},
{
"id": "node_31",
"type": "state_phi",
"label": "StatePhi [m_isMemory64 [cond__291]]"
},
{
"id": "node_32",
"type": "state_phi",
"label": "StatePhi [m_isMemory64 [cond__291]]"
},
{
"id": "node_0",
"type": "start",
"label": "Start"
},
{
"id": "node_14",
"type": "intrinsic",
"label": "m_isMemory64 [cond__291]"
},
{
"id": "node_23",
"type": "intrinsic",
"label": "imm_readULEB64 [offset]"
},
{
"id": "node_15",
"type": "intrinsic",
"label": "imm_readULEB32 [offset]"
},
{
"id": "node_30",
"type": "intrinsic",
"label": "push_u32 [eff__292]"
},
{
"id": "node_22",
"type": "intrinsic",
"label": "push_u32 [eff__297]"
},
{
"id": "node_11",
"type": "phi",
"label": "Phi"
},
{
"id": "node_12",
"type": "state_phi",
"label": "StatePhi [u8.!= [cond__303]]"
},
{
"id": "node_28",
"type": "intrinsic",
"label": "mach_readMemory64_u16 [val]"
},
{
"id": "node_24",
"type": "intrinsic",
"label": "pop_u64 [index]"
},
{
"id": "node_20",
"type": "intrinsic",
"label": "mach_readMemory32_u16 [val]"
},
{
"id": "node_16",
"type": "intrinsic",
"label": "pop_u32 [index]"
},
{
"id": "node_9",
"type": "intrinsic",
"label": "u8.!= [cond__303]"
},
{
"id": "node_10",
"type": "intrinsic",
"label": "imm_readULEB32 [memindex__304]"
},
{
"id": "node_4",
"type": "lit",
"label": "0u"
},
{
"id": "node_3",
"type": "intrinsic",
"label": "imm_readU8 [flags]"
},
{
"id": "node_8",
"type": "intrinsic",
"label": "u8.& [arg__305]"
},
{
"id": "node_5",
"type": "lit",
"label": "0"
},
{
"id": "node_6",
"type": "lit",
"label": "0x40u8"
}
],
"relations": [
{
"id": "uses",
"name": "Uses",
"types": ["sea_node", "sea_node"],
"tuples": [
{
"atoms": ["node_14", "node_11"],
"types": ["intrinsic", "phi"]
},
{
"atoms": ["node_30", "node_28"],
"types": ["intrinsic", "intrinsic"]
},
{
"atoms": ["node_22", "node_20"],
"types": ["intrinsic", "intrinsic"]
},
{
"atoms": ["node_28", "node_11"],
"types": ["intrinsic", "phi"]
},
{
"atoms": ["node_28", "node_24"],
"types": ["intrinsic", "intrinsic"]
},
{
"atoms": ["node_28", "node_23"],
"types": ["intrinsic", "intrinsic"]
},
{
"atoms": ["node_20", "node_11"],
"types": ["intrinsic", "phi"]
},
{
"atoms": ["node_20", "node_16"],
"types": ["intrinsic", "intrinsic"]
},
{
"atoms": ["node_20", "node_15"],
"types": ["intrinsic", "intrinsic"]
},
{
"atoms": ["node_9", "node_8"],
"types": ["intrinsic", "intrinsic"]
},
{
"atoms": ["node_9", "node_5"],
"types": ["intrinsic", "lit"]
},
{
"atoms": ["node_8", "node_3"],
"types": ["intrinsic", "intrinsic"]
},
{
"atoms": ["node_8", "node_6"],
"types": ["intrinsic", "lit"]
}
]
},
{
"id": "state_uses",
"name": "StateUses",
"types": ["sea_node", "sea_node"],
"tuples": [
{
"atoms": ["node_1", "node_31"],
"types": ["finish", "state_phi"]
},
{
"atoms": ["node_1", "node_32"],
"types": ["finish", "state_phi"]
},
{
"atoms": ["node_1", "node_0"],
"types": ["finish", "start"]
},
{
"atoms": ["node_23", "node_12"],
"types": ["intrinsic", "state_phi"]
},
{
"atoms": ["node_15", "node_12"],
"types": ["intrinsic", "state_phi"]
},
{
"atoms": ["node_30", "node_24"],
"types": ["intrinsic", "intrinsic"]
},
{
"atoms": ["node_22", "node_16"],
"types": ["intrinsic", "intrinsic"]
},
{
"atoms": ["node_24", "node_0"],
"types": ["intrinsic", "start"]
},
{
"atoms": ["node_16", "node_0"],
"types": ["intrinsic", "start"]
},
{
"atoms": ["node_10", "node_3"],
"types": ["intrinsic", "intrinsic"]
},
{
"atoms": ["node_3", "node_0"],
"types": ["intrinsic", "start"]
}
]
},
{
"id": "phi_cond",
"name": "PhiCond",
"types": ["sea_node", "sea_node"],
"tuples": [
{
"atoms": ["node_31", "node_14"],
"types": ["state_phi", "intrinsic"]
},
{
"atoms": ["node_32", "node_14"],
"types": ["state_phi", "intrinsic"]
},
{
"atoms": ["node_11", "node_9"],
"types": ["phi", "intrinsic"]
},
{
"atoms": ["node_12", "node_9"],
"types": ["state_phi", "intrinsic"]
}
]
},
{
"id": "phi_true",
"name": "PhiTrue",
"types": ["sea_node", "sea_node"],
"tuples": [
{
"atoms": ["node_31", "node_23"],
"types": ["state_phi", "intrinsic"]
},
{
"atoms": ["node_32", "node_30"],
"types": ["state_phi", "intrinsic"]
},
{
"atoms": ["node_11", "node_10"],
"types": ["phi", "intrinsic"]
},
{
"atoms": ["node_12", "node_10"],
"types": ["state_phi", "intrinsic"]
}
]
},
{
"id": "phi_false",
"name": "PhiFalse",
"types": ["sea_node", "sea_node"],
"tuples": [
{
"atoms": ["node_31", "node_15"],
"types": ["state_phi", "intrinsic"]
},
{
"atoms": ["node_32", "node_22"],
"types": ["state_phi", "intrinsic"]
},
{
"atoms": ["node_11", "node_4"],
"types": ["phi", "lit"]
},
{
"atoms": ["node_12", "node_3"],
"types": ["state_phi", "intrinsic"]
}
]
}
]
}</pre>`;
window.traces["I32_LOAD16_U"]["spytial__raw"] += `{
"atoms": [
{
"id": "node_1",
"type": "finish",
"label": "Finish"
},
{
"id": "node_31",
"type": "state_phi",
"label": "StatePhi [m_isMemory64 [cond__291]]"
},
{
"id": "node_32",
"type": "state_phi",
"label": "StatePhi [m_isMemory64 [cond__291]]"
},
{
"id": "node_0",
"type": "start",
"label": "Start"
},
{
"id": "node_14",
"type": "intrinsic",
"label": "m_isMemory64 [cond__291]"
},
{
"id": "node_23",
"type": "intrinsic",
"label": "imm_readULEB64 [offset]"
},
{
"id": "node_15",
"type": "intrinsic",
"label": "imm_readULEB32 [offset]"
},
{
"id": "node_30",
"type": "intrinsic",
"label": "push_u32 [eff__292]"
},
{
"id": "node_22",
"type": "intrinsic",
"label": "push_u32 [eff__297]"
},
{
"id": "node_11",
"type": "phi",
"label": "Phi"
},
{
"id": "node_12",
"type": "state_phi",
"label": "StatePhi [u8.!= [cond__303]]"
},
{
"id": "node_28",
"type": "intrinsic",
"label": "mach_readMemory64_u16 [val]"
},
{
"id": "node_24",
"type": "intrinsic",
"label": "pop_u64 [index]"
},
{
"id": "node_20",
"type": "intrinsic",
"label": "mach_readMemory32_u16 [val]"
},
{
"id": "node_16",
"type": "intrinsic",
"label": "pop_u32 [index]"
},
{
"id": "node_9",
"type": "intrinsic",
"label": "u8.!= [cond__303]"
},
{
"id": "node_10",
"type": "intrinsic",
"label": "imm_readULEB32 [memindex__304]"
},
{
"id": "node_4",
"type": "lit",
"label": "0u"
},
{
"id": "node_3",
"type": "intrinsic",
"label": "imm_readU8 [flags]"
},
{
"id": "node_8",
"type": "intrinsic",
"label": "u8.& [arg__305]"
},
{
"id": "node_5",
"type": "lit",
"label": "0"
},
{
"id": "node_6",
"type": "lit",
"label": "0x40u8"
}
],
"relations": [
{
"id": "uses",
"name": "Uses",
"types": ["sea_node", "sea_node"],
"tuples": [
{
"atoms": ["node_14", "node_11"],
"types": ["intrinsic", "phi"]
},
{
"atoms": ["node_30", "node_28"],
"types": ["intrinsic", "intrinsic"]
},
{
"atoms": ["node_22", "node_20"],
"types": ["intrinsic", "intrinsic"]
},
{
"atoms": ["node_28", "node_11"],
"types": ["intrinsic", "phi"]
},
{
"atoms": ["node_28", "node_24"],
"types": ["intrinsic", "intrinsic"]
},
{
"atoms": ["node_28", "node_23"],
"types": ["intrinsic", "intrinsic"]
},
{
"atoms": ["node_20", "node_11"],
"types": ["intrinsic", "phi"]
},
{
"atoms": ["node_20", "node_16"],
"types": ["intrinsic", "intrinsic"]
},
{
"atoms": ["node_20", "node_15"],
"types": ["intrinsic", "intrinsic"]
},
{
"atoms": ["node_9", "node_8"],
"types": ["intrinsic", "intrinsic"]
},
{
"atoms": ["node_9", "node_5"],
"types": ["intrinsic", "lit"]
},
{
"atoms": ["node_8", "node_3"],
"types": ["intrinsic", "intrinsic"]
},
{
"atoms": ["node_8", "node_6"],
"types": ["intrinsic", "lit"]
}
]
},
{
"id": "state_uses",
"name": "StateUses",
"types": ["sea_node", "sea_node"],
"tuples": [
{
"atoms": ["node_1", "node_31"],
"types": ["finish", "state_phi"]
},
{
"atoms": ["node_1", "node_32"],
"types": ["finish", "state_phi"]
},
{
"atoms": ["node_1", "node_0"],
"types": ["finish", "start"]
},
{
"atoms": ["node_23", "node_12"],
"types": ["intrinsic", "state_phi"]
},
{
"atoms": ["node_15", "node_12"],
"types": ["intrinsic", "state_phi"]
},
{
"atoms": ["node_30", "node_24"],
"types": ["intrinsic", "intrinsic"]
},
{
"atoms": ["node_22", "node_16"],
"types": ["intrinsic", "intrinsic"]
},
{
"atoms": ["node_24", "node_0"],
"types": ["intrinsic", "start"]
},
{
"atoms": ["node_16", "node_0"],
"types": ["intrinsic", "start"]
},
{
"atoms": ["node_10", "node_3"],
"types": ["intrinsic", "intrinsic"]
},
{
"atoms": ["node_3", "node_0"],
"types": ["intrinsic", "start"]
}
]
},
{
"id": "phi_cond",
"name": "PhiCond",
"types": ["sea_node", "sea_node"],
"tuples": [
{
"atoms": ["node_31", "node_14"],
"types": ["state_phi", "intrinsic"]
},
{
"atoms": ["node_32", "node_14"],
"types": ["state_phi", "intrinsic"]
},
{
"atoms": ["node_11", "node_9"],
"types": ["phi", "intrinsic"]
},
{
"atoms": ["node_12", "node_9"],
"types": ["state_phi", "intrinsic"]
}
]
},
{
"id": "phi_true",
"name": "PhiTrue",
"types": ["sea_node", "sea_node"],
"tuples": [
{
"atoms": ["node_31", "node_23"],
"types": ["state_phi", "intrinsic"]
},
{
"atoms": ["node_32", "node_30"],
"types": ["state_phi", "intrinsic"]
},
{
"atoms": ["node_11", "node_10"],
"types": ["phi", "intrinsic"]
},
{
"atoms": ["node_12", "node_10"],
"types": ["state_phi", "intrinsic"]
}
]
},
{
"id": "phi_false",
"name": "PhiFalse",
"types": ["sea_node", "sea_node"],
"tuples": [
{
"atoms": ["node_31", "node_15"],
"types": ["state_phi", "intrinsic"]
},
{
"atoms": ["node_32", "node_22"],
"types": ["state_phi", "intrinsic"]
},
{
"atoms": ["node_11", "node_4"],
"types": ["phi", "lit"]
},
{
"atoms": ["node_12", "node_3"],
"types": ["state_phi", "intrinsic"]
}
]
}
]
}`;
window.traces["I32_LOAD16_U"]["overloadOps"] = ''
window.traces["I32_LOAD16_U"]["overloadOps__raw"] = ''
window.traces["I32_LOAD16_U"]["overloadOps"] += `<pre class='graph'>---
config:
  layout: elk
---
graph TD
	1[\\"Finish"/]
	31 -. Codeptr .-> 1
	32 -. Stack .-> 1
	0 -. Trap Locals Globals Tables Memory Extra .-> 1
	0[/"Start"\\]
	32{{"Sϕ Stack "}}
	14 --> 32
	30 --> 32
	22 --> 32
	22["eff__297 push_u32"]
	20 --> 22
	16 -. Stack .-> 22
	16["index pop_u32"]
	0 -. Stack .-> 16
	20["val mach_readMemory32_u16"]
	11 --> 20
	16 --> 20
	15 --> 20
	15["offset imm_readULEB32"]
	12 -. Codeptr .-> 15
	12{{"Sϕ Codeptr "}}
	9 --> 12
	10 --> 12
	3 --> 12
	3["flags imm_readU8"]
	0 -. Codeptr .-> 3
	10["memindex__304 imm_readULEB32"]
	3 -. Codeptr .-> 10
	9["cond__303 u8.!="]
	8 --> 9
	5 --> 9
	5["arg__306 0"]
	8["arg__305 u8.&"]
	3 --> 8
	6 --> 8
	6["arg__308 0x40u8"]
	11{"memindex ϕ"}
	9 --> 11
	10 --> 11
	4 --> 11
	4["memindex__310 0u"]
	30["eff__292 push_u32"]
	28 --> 30
	24 -. Stack .-> 30
	24["index pop_u64"]
	0 -. Stack .-> 24
	28["val mach_readMemory64_u16"]
	11 --> 28
	24 --> 28
	23 --> 28
	23["offset imm_readULEB64"]
	12 -. Codeptr .-> 23
	14["cond__291 m_isMemory64"]
	11 --> 14
	31{{"Sϕ Codeptr "}}
	14 --> 31
	23 --> 31
	15 --> 31
</pre>`;
window.traces["I32_LOAD16_U"]["overloadOps__raw"] += `---
config:
  layout: elk
---
graph TD
	1[\\"Finish"/]
	31 -. Codeptr .-> 1
	32 -. Stack .-> 1
	0 -. Trap Locals Globals Tables Memory Extra .-> 1
	0[/"Start"\\]
	32{{"Sϕ Stack "}}
	14 --> 32
	30 --> 32
	22 --> 32
	22["eff__297 push_u32"]
	20 --> 22
	16 -. Stack .-> 22
	16["index pop_u32"]
	0 -. Stack .-> 16
	20["val mach_readMemory32_u16"]
	11 --> 20
	16 --> 20
	15 --> 20
	15["offset imm_readULEB32"]
	12 -. Codeptr .-> 15
	12{{"Sϕ Codeptr "}}
	9 --> 12
	10 --> 12
	3 --> 12
	3["flags imm_readU8"]
	0 -. Codeptr .-> 3
	10["memindex__304 imm_readULEB32"]
	3 -. Codeptr .-> 10
	9["cond__303 u8.!="]
	8 --> 9
	5 --> 9
	5["arg__306 0"]
	8["arg__305 u8.&"]
	3 --> 8
	6 --> 8
	6["arg__308 0x40u8"]
	11{"memindex ϕ"}
	9 --> 11
	10 --> 11
	4 --> 11
	4["memindex__310 0u"]
	30["eff__292 push_u32"]
	28 --> 30
	24 -. Stack .-> 30
	24["index pop_u64"]
	0 -. Stack .-> 24
	28["val mach_readMemory64_u16"]
	11 --> 28
	24 --> 28
	23 --> 28
	23["offset imm_readULEB64"]
	12 -. Codeptr .-> 23
	14["cond__291 m_isMemory64"]
	11 --> 14
	31{{"Sϕ Codeptr "}}
	14 --> 31
	23 --> 31
	15 --> 31
`;
window.traces["I32_LOAD16_U"]["addAbstractions"] = ''
window.traces["I32_LOAD16_U"]["addAbstractions__raw"] = ''
window.traces["I32_LOAD16_U"]["addAbstractions"] += `<pre class='graph'>---
config:
  layout: elk
---
graph TD
	1[\\"Finish"/]
	31 -. Codeptr .-> 1
	32 -. Stack .-> 1
	0 -. Trap Locals Globals Tables Memory Extra .-> 1
	0[/"Start"\\]
	32{{"Sϕ Stack "}}
	14 --> 32
	30 --> 32
	22 --> 32
	22["eff__297 push_u32"]
	20 --> 22
	16 -. Stack .-> 22
	16["index pop_u32"]
	0 -. Stack .-> 16
	20["val mach_readMemory32_u16"]
	11 --> 20
	16 --> 20
	15 --> 20
	15["offset imm_readULEB32"]
	12 -. Codeptr .-> 15
	12{{"Sϕ Codeptr "}}
	9 --> 12
	10 --> 12
	3 --> 12
	3["flags imm_readU8"]
	0 -. Codeptr .-> 3
	10["memindex__304 imm_readULEB32"]
	3 -. Codeptr .-> 10
	9["cond__303 u8.!="]
	8 --> 9
	5 --> 9
	5["arg__306 0"]
	8["arg__305 u8.&"]
	3 --> 8
	6 --> 8
	6["arg__308 0x40u8"]
	11{"memindex ϕ"}
	9 --> 11
	10 --> 11
	4 --> 11
	4["memindex__310 0u"]
	30["eff__292 push_u32"]
	28 --> 30
	24 -. Stack .-> 30
	24["index pop_u64"]
	0 -. Stack .-> 24
	28["val mach_readMemory64_u16"]
	11 --> 28
	24 --> 28
	23 --> 28
	23["offset imm_readULEB64"]
	12 -. Codeptr .-> 23
	14["cond__291 m_isMemory64"]
	11 --> 14
	31{{"Sϕ Codeptr "}}
	14 --> 31
	23 --> 31
	15 --> 31
</pre>`;
window.traces["I32_LOAD16_U"]["addAbstractions__raw"] += `---
config:
  layout: elk
---
graph TD
	1[\\"Finish"/]
	31 -. Codeptr .-> 1
	32 -. Stack .-> 1
	0 -. Trap Locals Globals Tables Memory Extra .-> 1
	0[/"Start"\\]
	32{{"Sϕ Stack "}}
	14 --> 32
	30 --> 32
	22 --> 32
	22["eff__297 push_u32"]
	20 --> 22
	16 -. Stack .-> 22
	16["index pop_u32"]
	0 -. Stack .-> 16
	20["val mach_readMemory32_u16"]
	11 --> 20
	16 --> 20
	15 --> 20
	15["offset imm_readULEB32"]
	12 -. Codeptr .-> 15
	12{{"Sϕ Codeptr "}}
	9 --> 12
	10 --> 12
	3 --> 12
	3["flags imm_readU8"]
	0 -. Codeptr .-> 3
	10["memindex__304 imm_readULEB32"]
	3 -. Codeptr .-> 10
	9["cond__303 u8.!="]
	8 --> 9
	5 --> 9
	5["arg__306 0"]
	8["arg__305 u8.&"]
	3 --> 8
	6 --> 8
	6["arg__308 0x40u8"]
	11{"memindex ϕ"}
	9 --> 11
	10 --> 11
	4 --> 11
	4["memindex__310 0u"]
	30["eff__292 push_u32"]
	28 --> 30
	24 -. Stack .-> 30
	24["index pop_u64"]
	0 -. Stack .-> 24
	28["val mach_readMemory64_u16"]
	11 --> 28
	24 --> 28
	23 --> 28
	23["offset imm_readULEB64"]
	12 -. Codeptr .-> 23
	14["cond__291 m_isMemory64"]
	11 --> 14
	31{{"Sϕ Codeptr "}}
	14 --> 31
	23 --> 31
	15 --> 31
`;
window.traces["I32_LOAD16_U"]["schedulerMermaid"] = ''
window.traces["I32_LOAD16_U"]["schedulerMermaid__raw"] = ''
window.traces["I32_LOAD16_U"]["schedulerMermaid"] += `<pre class='graph'>graph TD
subgraph block_285["Block 285"]
	direction TB
	b285_1[\\"Finish"/]
end
phi_287 --> block_285
subgraph phi_287["Phi 287"]
	p287_32{{"Sϕ Stack "}}
	p287_31{{"Sϕ Codeptr "}}
end
block_288 --> phi_287
block_289 --> phi_287
subgraph block_288["Block 288"]
	direction TB
	b288_24["index pop_u64"]
	b288_28["val mach_readMemory64_u16"]
	b288_30["eff__292 push_u32"]
	b288_23["offset imm_readULEB64"]
	b288_24 --> b288_28
	b288_28 --> b288_30
	b288_30 --> b288_23
end
branch_286 --> block_288
subgraph branch_286["Branch 286"]
	br286_14["cond__291 m_isMemory64"]

end
block_290 --> branch_286
subgraph block_290["Block 290"]
	direction TB
	b290_14["cond__291 m_isMemory64"]
end
phi_292 --> block_290
subgraph phi_292["Phi 292"]
	p292_12{{"Sϕ Codeptr "}}
	p292_12{{"Sϕ Codeptr "}}
	p292_12{{"Sϕ Codeptr "}}
	p292_12{{"Sϕ Codeptr "}}
	p292_11{"memindex ϕ"}
	p292_11{"memindex ϕ"}
	p292_11{"memindex ϕ"}
	p292_11{"memindex ϕ"}
	p292_11{"memindex ϕ"}
	p292_11{"memindex ϕ"}
	p292_12{{"Sϕ Codeptr "}}
	p292_12{{"Sϕ Codeptr "}}
	p292_12{{"Sϕ Codeptr "}}
	p292_12{{"Sϕ Codeptr "}}
end
block_293 --> phi_292
block_294 --> phi_292
subgraph block_293["Block 293"]
	direction TB
	b293_10["memindex__304 imm_readULEB32"]
end
branch_291 --> block_293
subgraph branch_291["Branch 291"]
	br291_9["cond__303 u8.!="]

end
block_295 --> branch_291
subgraph block_295["Block 295"]
	direction TB
	b295_0[/"Start"\\]
	b295_6["arg__308 0x40u8"]
	b295_5["arg__306 0"]
	b295_8["arg__305 u8.&"]
	b295_9["cond__303 u8.!="]
	b295_0 --> b295_6
	b295_6 --> b295_5
	b295_5 --> b295_8
	b295_8 --> b295_9
end
subgraph block_294["Block 294"]
	direction TB
	b294_4["memindex__310 0u"]
	b294_3["flags imm_readU8"]
	b294_4 --> b294_3
end
branch_291 --> block_294
subgraph block_289["Block 289"]
	direction TB
	b289_16["index pop_u32"]
	b289_20["val mach_readMemory32_u16"]
	b289_22["eff__297 push_u32"]
	b289_15["offset imm_readULEB32"]
	b289_16 --> b289_20
	b289_20 --> b289_22
	b289_22 --> b289_15
end
branch_286 --> block_289

</pre>`;
window.traces["I32_LOAD16_U"]["schedulerMermaid__raw"] += `graph TD
subgraph block_285["Block 285"]
	direction TB
	b285_1[\\"Finish"/]
end
phi_287 --> block_285
subgraph phi_287["Phi 287"]
	p287_32{{"Sϕ Stack "}}
	p287_31{{"Sϕ Codeptr "}}
end
block_288 --> phi_287
block_289 --> phi_287
subgraph block_288["Block 288"]
	direction TB
	b288_24["index pop_u64"]
	b288_28["val mach_readMemory64_u16"]
	b288_30["eff__292 push_u32"]
	b288_23["offset imm_readULEB64"]
	b288_24 --> b288_28
	b288_28 --> b288_30
	b288_30 --> b288_23
end
branch_286 --> block_288
subgraph branch_286["Branch 286"]
	br286_14["cond__291 m_isMemory64"]

end
block_290 --> branch_286
subgraph block_290["Block 290"]
	direction TB
	b290_14["cond__291 m_isMemory64"]
end
phi_292 --> block_290
subgraph phi_292["Phi 292"]
	p292_12{{"Sϕ Codeptr "}}
	p292_12{{"Sϕ Codeptr "}}
	p292_12{{"Sϕ Codeptr "}}
	p292_12{{"Sϕ Codeptr "}}
	p292_11{"memindex ϕ"}
	p292_11{"memindex ϕ"}
	p292_11{"memindex ϕ"}
	p292_11{"memindex ϕ"}
	p292_11{"memindex ϕ"}
	p292_11{"memindex ϕ"}
	p292_12{{"Sϕ Codeptr "}}
	p292_12{{"Sϕ Codeptr "}}
	p292_12{{"Sϕ Codeptr "}}
	p292_12{{"Sϕ Codeptr "}}
end
block_293 --> phi_292
block_294 --> phi_292
subgraph block_293["Block 293"]
	direction TB
	b293_10["memindex__304 imm_readULEB32"]
end
branch_291 --> block_293
subgraph branch_291["Branch 291"]
	br291_9["cond__303 u8.!="]

end
block_295 --> branch_291
subgraph block_295["Block 295"]
	direction TB
	b295_0[/"Start"\\]
	b295_6["arg__308 0x40u8"]
	b295_5["arg__306 0"]
	b295_8["arg__305 u8.&"]
	b295_9["cond__303 u8.!="]
	b295_0 --> b295_6
	b295_6 --> b295_5
	b295_5 --> b295_8
	b295_8 --> b295_9
end
subgraph block_294["Block 294"]
	direction TB
	b294_4["memindex__310 0u"]
	b294_3["flags imm_readU8"]
	b294_4 --> b294_3
end
branch_291 --> block_294
subgraph block_289["Block 289"]
	direction TB
	b289_16["index pop_u32"]
	b289_20["val mach_readMemory32_u16"]
	b289_22["eff__297 push_u32"]
	b289_15["offset imm_readULEB32"]
	b289_16 --> b289_20
	b289_20 --> b289_22
	b289_22 --> b289_15
end
branch_286 --> block_289

`;
window.traces["I32_LOAD16_U"]["unLEM"] = ''
window.traces["I32_LOAD16_U"]["unLEM__raw"] = ''
window.traces["I32_LOAD16_U"]["unLEM"] += `<pre class='graph'>---
config:
  layout: elk
---
graph TD
	1[\\"Finish"/]
	31 -. Codeptr .-> 1
	32 -. Stack .-> 1
	0 -. Trap Locals Globals Tables Memory Extra .-> 1
	0[/"Start"\\]
	32{{"Sϕ Stack "}}
	14 --> 32
	30 --> 32
	22 --> 32
	22["eff__297 push_u32"]
	20 --> 22
	16 -. Stack .-> 22
	16["index pop_u32"]
	0 -. Stack .-> 16
	20["val mach_readMemory32_u16"]
	11 --> 20
	16 --> 20
	15 --> 20
	15["offset imm_readULEB32"]
	12 -. Codeptr .-> 15
	12{{"Sϕ Codeptr "}}
	9 --> 12
	10 --> 12
	3 --> 12
	3["flags imm_readU8"]
	0 -. Codeptr .-> 3
	10["memindex__304 imm_readULEB32"]
	3 -. Codeptr .-> 10
	9["cond__303 u8.!="]
	8 --> 9
	5 --> 9
	5["arg__306 0"]
	8["arg__305 u8.&"]
	3 --> 8
	6 --> 8
	6["arg__308 0x40u8"]
	11{"memindex ϕ"}
	9 --> 11
	10 --> 11
	4 --> 11
	4["memindex__310 0u"]
	30["eff__292 push_u32"]
	28 --> 30
	24 -. Stack .-> 30
	24["index pop_u64"]
	0 -. Stack .-> 24
	28["val mach_readMemory64_u16"]
	11 --> 28
	24 --> 28
	23 --> 28
	23["offset imm_readULEB64"]
	12 -. Codeptr .-> 23
	14["cond__291 m_isMemory64"]
	11 --> 14
	31{{"Sϕ Codeptr "}}
	14 --> 31
	23 --> 31
	15 --> 31
</pre>`;
window.traces["I32_LOAD16_U"]["unLEM__raw"] += `---
config:
  layout: elk
---
graph TD
	1[\\"Finish"/]
	31 -. Codeptr .-> 1
	32 -. Stack .-> 1
	0 -. Trap Locals Globals Tables Memory Extra .-> 1
	0[/"Start"\\]
	32{{"Sϕ Stack "}}
	14 --> 32
	30 --> 32
	22 --> 32
	22["eff__297 push_u32"]
	20 --> 22
	16 -. Stack .-> 22
	16["index pop_u32"]
	0 -. Stack .-> 16
	20["val mach_readMemory32_u16"]
	11 --> 20
	16 --> 20
	15 --> 20
	15["offset imm_readULEB32"]
	12 -. Codeptr .-> 15
	12{{"Sϕ Codeptr "}}
	9 --> 12
	10 --> 12
	3 --> 12
	3["flags imm_readU8"]
	0 -. Codeptr .-> 3
	10["memindex__304 imm_readULEB32"]
	3 -. Codeptr .-> 10
	9["cond__303 u8.!="]
	8 --> 9
	5 --> 9
	5["arg__306 0"]
	8["arg__305 u8.&"]
	3 --> 8
	6 --> 8
	6["arg__308 0x40u8"]
	11{"memindex ϕ"}
	9 --> 11
	10 --> 11
	4 --> 11
	4["memindex__310 0u"]
	30["eff__292 push_u32"]
	28 --> 30
	24 -. Stack .-> 30
	24["index pop_u64"]
	0 -. Stack .-> 24
	28["val mach_readMemory64_u16"]
	11 --> 28
	24 --> 28
	23 --> 28
	23["offset imm_readULEB64"]
	12 -. Codeptr .-> 23
	14["cond__291 m_isMemory64"]
	11 --> 14
	31{{"Sϕ Codeptr "}}
	14 --> 31
	23 --> 31
	15 --> 31
`;
window.traces["I32_LOAD16_U"]["unlem_schedule"] = ''
window.traces["I32_LOAD16_U"]["unlem_schedule__raw"] = ''
window.traces["I32_LOAD16_U"]["unlem_schedule"] += `<pre class=''>def flags = imm_readU8();
def arg__308 : byte = 0x40u8;
def arg__305 = u8.&(flags, arg__308);
def arg__306 : byte = 0;
def cond__303 = u8.!=(arg__305, arg__306);
var memindex: u32;
if (cond__303) {
	def memindex__304 = imm_readULEB32();
} else {
	def memindex__310 : u32 = 0u;
}
// phis: memindex <- memindex__304; memindex <- memindex__310; 
def cond__291 = m_isMemory64(memindex);
if (cond__291) {
	def offset = imm_readULEB64();
	def index = pop_u64();
	def val = mach_readMemory64_u16(memindex, index, offset);
	def eff__292 = push_u32(val);
} else {
	def offset = imm_readULEB32();
	def index = pop_u32();
	def val = mach_readMemory32_u16(memindex, index, offset);
	def eff__297 = push_u32(val);
}
// phis: 
</pre>`;
window.traces["I32_LOAD16_U"]["unlem_schedule__raw"] += `def flags = imm_readU8();
def arg__308 : byte = 0x40u8;
def arg__305 = u8.&(flags, arg__308);
def arg__306 : byte = 0;
def cond__303 = u8.!=(arg__305, arg__306);
var memindex: u32;
if (cond__303) {
	def memindex__304 = imm_readULEB32();
} else {
	def memindex__310 : u32 = 0u;
}
// phis: memindex <- memindex__304; memindex <- memindex__310; 
def cond__291 = m_isMemory64(memindex);
if (cond__291) {
	def offset = imm_readULEB64();
	def index = pop_u64();
	def val = mach_readMemory64_u16(memindex, index, offset);
	def eff__292 = push_u32(val);
} else {
	def offset = imm_readULEB32();
	def index = pop_u32();
	def val = mach_readMemory32_u16(memindex, index, offset);
	def eff__297 = push_u32(val);
}
// phis: 
`;
window.traces["I32_LOAD16_U"]["spytial_ul"] = ''
window.traces["I32_LOAD16_U"]["spytial_ul__raw"] = ''
window.traces["I32_LOAD16_U"]["spytial_ul"] += `<pre class=''>{
"atoms": [
{
"id": "node_1",
"type": "finish",
"label": "Finish"
},
{
"id": "node_31",
"type": "state_phi",
"label": "StatePhi [m_isMemory64 [cond__291]]"
},
{
"id": "node_32",
"type": "state_phi",
"label": "StatePhi [m_isMemory64 [cond__291]]"
},
{
"id": "node_0",
"type": "start",
"label": "Start"
},
{
"id": "node_14",
"type": "intrinsic",
"label": "m_isMemory64 [cond__291]"
},
{
"id": "node_23",
"type": "intrinsic",
"label": "imm_readULEB64 [offset]"
},
{
"id": "node_15",
"type": "intrinsic",
"label": "imm_readULEB32 [offset]"
},
{
"id": "node_30",
"type": "intrinsic",
"label": "push_u32 [eff__292]"
},
{
"id": "node_22",
"type": "intrinsic",
"label": "push_u32 [eff__297]"
},
{
"id": "node_11",
"type": "phi",
"label": "Phi"
},
{
"id": "node_12",
"type": "state_phi",
"label": "StatePhi [u8.!= [cond__303]]"
},
{
"id": "node_28",
"type": "intrinsic",
"label": "mach_readMemory64_u16 [val]"
},
{
"id": "node_24",
"type": "intrinsic",
"label": "pop_u64 [index]"
},
{
"id": "node_20",
"type": "intrinsic",
"label": "mach_readMemory32_u16 [val]"
},
{
"id": "node_16",
"type": "intrinsic",
"label": "pop_u32 [index]"
},
{
"id": "node_9",
"type": "intrinsic",
"label": "u8.!= [cond__303]"
},
{
"id": "node_10",
"type": "intrinsic",
"label": "imm_readULEB32 [memindex__304]"
},
{
"id": "node_4",
"type": "lit",
"label": "0u"
},
{
"id": "node_3",
"type": "intrinsic",
"label": "imm_readU8 [flags]"
},
{
"id": "node_8",
"type": "intrinsic",
"label": "u8.& [arg__305]"
},
{
"id": "node_5",
"type": "lit",
"label": "0"
},
{
"id": "node_6",
"type": "lit",
"label": "0x40u8"
}
],
"relations": [
{
"id": "uses",
"name": "Uses",
"types": ["sea_node", "sea_node"],
"tuples": [
{
"atoms": ["node_14", "node_11"],
"types": ["intrinsic", "phi"]
},
{
"atoms": ["node_30", "node_28"],
"types": ["intrinsic", "intrinsic"]
},
{
"atoms": ["node_22", "node_20"],
"types": ["intrinsic", "intrinsic"]
},
{
"atoms": ["node_28", "node_11"],
"types": ["intrinsic", "phi"]
},
{
"atoms": ["node_28", "node_24"],
"types": ["intrinsic", "intrinsic"]
},
{
"atoms": ["node_28", "node_23"],
"types": ["intrinsic", "intrinsic"]
},
{
"atoms": ["node_20", "node_11"],
"types": ["intrinsic", "phi"]
},
{
"atoms": ["node_20", "node_16"],
"types": ["intrinsic", "intrinsic"]
},
{
"atoms": ["node_20", "node_15"],
"types": ["intrinsic", "intrinsic"]
},
{
"atoms": ["node_9", "node_8"],
"types": ["intrinsic", "intrinsic"]
},
{
"atoms": ["node_9", "node_5"],
"types": ["intrinsic", "lit"]
},
{
"atoms": ["node_8", "node_3"],
"types": ["intrinsic", "intrinsic"]
},
{
"atoms": ["node_8", "node_6"],
"types": ["intrinsic", "lit"]
}
]
},
{
"id": "state_uses",
"name": "StateUses",
"types": ["sea_node", "sea_node"],
"tuples": [
{
"atoms": ["node_1", "node_31"],
"types": ["finish", "state_phi"]
},
{
"atoms": ["node_1", "node_32"],
"types": ["finish", "state_phi"]
},
{
"atoms": ["node_1", "node_0"],
"types": ["finish", "start"]
},
{
"atoms": ["node_23", "node_12"],
"types": ["intrinsic", "state_phi"]
},
{
"atoms": ["node_15", "node_12"],
"types": ["intrinsic", "state_phi"]
},
{
"atoms": ["node_30", "node_24"],
"types": ["intrinsic", "intrinsic"]
},
{
"atoms": ["node_22", "node_16"],
"types": ["intrinsic", "intrinsic"]
},
{
"atoms": ["node_24", "node_0"],
"types": ["intrinsic", "start"]
},
{
"atoms": ["node_16", "node_0"],
"types": ["intrinsic", "start"]
},
{
"atoms": ["node_10", "node_3"],
"types": ["intrinsic", "intrinsic"]
},
{
"atoms": ["node_3", "node_0"],
"types": ["intrinsic", "start"]
}
]
},
{
"id": "phi_cond",
"name": "PhiCond",
"types": ["sea_node", "sea_node"],
"tuples": [
{
"atoms": ["node_31", "node_14"],
"types": ["state_phi", "intrinsic"]
},
{
"atoms": ["node_32", "node_14"],
"types": ["state_phi", "intrinsic"]
},
{
"atoms": ["node_11", "node_9"],
"types": ["phi", "intrinsic"]
},
{
"atoms": ["node_12", "node_9"],
"types": ["state_phi", "intrinsic"]
}
]
},
{
"id": "phi_true",
"name": "PhiTrue",
"types": ["sea_node", "sea_node"],
"tuples": [
{
"atoms": ["node_31", "node_23"],
"types": ["state_phi", "intrinsic"]
},
{
"atoms": ["node_32", "node_30"],
"types": ["state_phi", "intrinsic"]
},
{
"atoms": ["node_11", "node_10"],
"types": ["phi", "intrinsic"]
},
{
"atoms": ["node_12", "node_10"],
"types": ["state_phi", "intrinsic"]
}
]
},
{
"id": "phi_false",
"name": "PhiFalse",
"types": ["sea_node", "sea_node"],
"tuples": [
{
"atoms": ["node_31", "node_15"],
"types": ["state_phi", "intrinsic"]
},
{
"atoms": ["node_32", "node_22"],
"types": ["state_phi", "intrinsic"]
},
{
"atoms": ["node_11", "node_4"],
"types": ["phi", "lit"]
},
{
"atoms": ["node_12", "node_3"],
"types": ["state_phi", "intrinsic"]
}
]
}
]
}</pre>`;
window.traces["I32_LOAD16_U"]["spytial_ul__raw"] += `{
"atoms": [
{
"id": "node_1",
"type": "finish",
"label": "Finish"
},
{
"id": "node_31",
"type": "state_phi",
"label": "StatePhi [m_isMemory64 [cond__291]]"
},
{
"id": "node_32",
"type": "state_phi",
"label": "StatePhi [m_isMemory64 [cond__291]]"
},
{
"id": "node_0",
"type": "start",
"label": "Start"
},
{
"id": "node_14",
"type": "intrinsic",
"label": "m_isMemory64 [cond__291]"
},
{
"id": "node_23",
"type": "intrinsic",
"label": "imm_readULEB64 [offset]"
},
{
"id": "node_15",
"type": "intrinsic",
"label": "imm_readULEB32 [offset]"
},
{
"id": "node_30",
"type": "intrinsic",
"label": "push_u32 [eff__292]"
},
{
"id": "node_22",
"type": "intrinsic",
"label": "push_u32 [eff__297]"
},
{
"id": "node_11",
"type": "phi",
"label": "Phi"
},
{
"id": "node_12",
"type": "state_phi",
"label": "StatePhi [u8.!= [cond__303]]"
},
{
"id": "node_28",
"type": "intrinsic",
"label": "mach_readMemory64_u16 [val]"
},
{
"id": "node_24",
"type": "intrinsic",
"label": "pop_u64 [index]"
},
{
"id": "node_20",
"type": "intrinsic",
"label": "mach_readMemory32_u16 [val]"
},
{
"id": "node_16",
"type": "intrinsic",
"label": "pop_u32 [index]"
},
{
"id": "node_9",
"type": "intrinsic",
"label": "u8.!= [cond__303]"
},
{
"id": "node_10",
"type": "intrinsic",
"label": "imm_readULEB32 [memindex__304]"
},
{
"id": "node_4",
"type": "lit",
"label": "0u"
},
{
"id": "node_3",
"type": "intrinsic",
"label": "imm_readU8 [flags]"
},
{
"id": "node_8",
"type": "intrinsic",
"label": "u8.& [arg__305]"
},
{
"id": "node_5",
"type": "lit",
"label": "0"
},
{
"id": "node_6",
"type": "lit",
"label": "0x40u8"
}
],
"relations": [
{
"id": "uses",
"name": "Uses",
"types": ["sea_node", "sea_node"],
"tuples": [
{
"atoms": ["node_14", "node_11"],
"types": ["intrinsic", "phi"]
},
{
"atoms": ["node_30", "node_28"],
"types": ["intrinsic", "intrinsic"]
},
{
"atoms": ["node_22", "node_20"],
"types": ["intrinsic", "intrinsic"]
},
{
"atoms": ["node_28", "node_11"],
"types": ["intrinsic", "phi"]
},
{
"atoms": ["node_28", "node_24"],
"types": ["intrinsic", "intrinsic"]
},
{
"atoms": ["node_28", "node_23"],
"types": ["intrinsic", "intrinsic"]
},
{
"atoms": ["node_20", "node_11"],
"types": ["intrinsic", "phi"]
},
{
"atoms": ["node_20", "node_16"],
"types": ["intrinsic", "intrinsic"]
},
{
"atoms": ["node_20", "node_15"],
"types": ["intrinsic", "intrinsic"]
},
{
"atoms": ["node_9", "node_8"],
"types": ["intrinsic", "intrinsic"]
},
{
"atoms": ["node_9", "node_5"],
"types": ["intrinsic", "lit"]
},
{
"atoms": ["node_8", "node_3"],
"types": ["intrinsic", "intrinsic"]
},
{
"atoms": ["node_8", "node_6"],
"types": ["intrinsic", "lit"]
}
]
},
{
"id": "state_uses",
"name": "StateUses",
"types": ["sea_node", "sea_node"],
"tuples": [
{
"atoms": ["node_1", "node_31"],
"types": ["finish", "state_phi"]
},
{
"atoms": ["node_1", "node_32"],
"types": ["finish", "state_phi"]
},
{
"atoms": ["node_1", "node_0"],
"types": ["finish", "start"]
},
{
"atoms": ["node_23", "node_12"],
"types": ["intrinsic", "state_phi"]
},
{
"atoms": ["node_15", "node_12"],
"types": ["intrinsic", "state_phi"]
},
{
"atoms": ["node_30", "node_24"],
"types": ["intrinsic", "intrinsic"]
},
{
"atoms": ["node_22", "node_16"],
"types": ["intrinsic", "intrinsic"]
},
{
"atoms": ["node_24", "node_0"],
"types": ["intrinsic", "start"]
},
{
"atoms": ["node_16", "node_0"],
"types": ["intrinsic", "start"]
},
{
"atoms": ["node_10", "node_3"],
"types": ["intrinsic", "intrinsic"]
},
{
"atoms": ["node_3", "node_0"],
"types": ["intrinsic", "start"]
}
]
},
{
"id": "phi_cond",
"name": "PhiCond",
"types": ["sea_node", "sea_node"],
"tuples": [
{
"atoms": ["node_31", "node_14"],
"types": ["state_phi", "intrinsic"]
},
{
"atoms": ["node_32", "node_14"],
"types": ["state_phi", "intrinsic"]
},
{
"atoms": ["node_11", "node_9"],
"types": ["phi", "intrinsic"]
},
{
"atoms": ["node_12", "node_9"],
"types": ["state_phi", "intrinsic"]
}
]
},
{
"id": "phi_true",
"name": "PhiTrue",
"types": ["sea_node", "sea_node"],
"tuples": [
{
"atoms": ["node_31", "node_23"],
"types": ["state_phi", "intrinsic"]
},
{
"atoms": ["node_32", "node_30"],
"types": ["state_phi", "intrinsic"]
},
{
"atoms": ["node_11", "node_10"],
"types": ["phi", "intrinsic"]
},
{
"atoms": ["node_12", "node_10"],
"types": ["state_phi", "intrinsic"]
}
]
},
{
"id": "phi_false",
"name": "PhiFalse",
"types": ["sea_node", "sea_node"],
"tuples": [
{
"atoms": ["node_31", "node_15"],
"types": ["state_phi", "intrinsic"]
},
{
"atoms": ["node_32", "node_22"],
"types": ["state_phi", "intrinsic"]
},
{
"atoms": ["node_11", "node_4"],
"types": ["phi", "lit"]
},
{
"atoms": ["node_12", "node_3"],
"types": ["state_phi", "intrinsic"]
}
]
}
]
}`;
window.traces["I32_LOAD16_U"]["unlem_scheduler"] = ''
window.traces["I32_LOAD16_U"]["unlem_scheduler__raw"] = ''
window.traces["I32_LOAD16_U"]["unlem_scheduler"] += `<pre class='graph'>graph TD
subgraph block_296["Block 296"]
	direction TB
	b296_1[\\"Finish"/]
end
phi_298 --> block_296
subgraph phi_298["Phi 298"]
	p298_32{{"Sϕ Stack "}}
	p298_31{{"Sϕ Codeptr "}}
end
block_299 --> phi_298
block_300 --> phi_298
subgraph block_299["Block 299"]
	direction TB
	b299_24["index pop_u64"]
	b299_28["val mach_readMemory64_u16"]
	b299_30["eff__292 push_u32"]
	b299_23["offset imm_readULEB64"]
	b299_24 --> b299_28
	b299_28 --> b299_30
	b299_30 --> b299_23
end
branch_297 --> block_299
subgraph branch_297["Branch 297"]
	br297_14["cond__291 m_isMemory64"]

end
block_301 --> branch_297
subgraph block_301["Block 301"]
	direction TB
	b301_14["cond__291 m_isMemory64"]
end
phi_303 --> block_301
subgraph phi_303["Phi 303"]
	p303_12{{"Sϕ Codeptr "}}
	p303_12{{"Sϕ Codeptr "}}
	p303_12{{"Sϕ Codeptr "}}
	p303_12{{"Sϕ Codeptr "}}
	p303_11{"memindex ϕ"}
	p303_11{"memindex ϕ"}
	p303_11{"memindex ϕ"}
	p303_11{"memindex ϕ"}
	p303_11{"memindex ϕ"}
	p303_11{"memindex ϕ"}
	p303_12{{"Sϕ Codeptr "}}
	p303_12{{"Sϕ Codeptr "}}
	p303_12{{"Sϕ Codeptr "}}
	p303_12{{"Sϕ Codeptr "}}
end
block_304 --> phi_303
block_305 --> phi_303
subgraph block_304["Block 304"]
	direction TB
	b304_10["memindex__304 imm_readULEB32"]
end
branch_302 --> block_304
subgraph branch_302["Branch 302"]
	br302_9["cond__303 u8.!="]

end
block_306 --> branch_302
subgraph block_306["Block 306"]
	direction TB
	b306_0[/"Start"\\]
	b306_6["arg__308 0x40u8"]
	b306_5["arg__306 0"]
	b306_8["arg__305 u8.&"]
	b306_9["cond__303 u8.!="]
	b306_0 --> b306_6
	b306_6 --> b306_5
	b306_5 --> b306_8
	b306_8 --> b306_9
end
subgraph block_305["Block 305"]
	direction TB
	b305_4["memindex__310 0u"]
	b305_3["flags imm_readU8"]
	b305_4 --> b305_3
end
branch_302 --> block_305
subgraph block_300["Block 300"]
	direction TB
	b300_16["index pop_u32"]
	b300_20["val mach_readMemory32_u16"]
	b300_22["eff__297 push_u32"]
	b300_15["offset imm_readULEB32"]
	b300_16 --> b300_20
	b300_20 --> b300_22
	b300_22 --> b300_15
end
branch_297 --> block_300

</pre>`;
window.traces["I32_LOAD16_U"]["unlem_scheduler__raw"] += `graph TD
subgraph block_296["Block 296"]
	direction TB
	b296_1[\\"Finish"/]
end
phi_298 --> block_296
subgraph phi_298["Phi 298"]
	p298_32{{"Sϕ Stack "}}
	p298_31{{"Sϕ Codeptr "}}
end
block_299 --> phi_298
block_300 --> phi_298
subgraph block_299["Block 299"]
	direction TB
	b299_24["index pop_u64"]
	b299_28["val mach_readMemory64_u16"]
	b299_30["eff__292 push_u32"]
	b299_23["offset imm_readULEB64"]
	b299_24 --> b299_28
	b299_28 --> b299_30
	b299_30 --> b299_23
end
branch_297 --> block_299
subgraph branch_297["Branch 297"]
	br297_14["cond__291 m_isMemory64"]

end
block_301 --> branch_297
subgraph block_301["Block 301"]
	direction TB
	b301_14["cond__291 m_isMemory64"]
end
phi_303 --> block_301
subgraph phi_303["Phi 303"]
	p303_12{{"Sϕ Codeptr "}}
	p303_12{{"Sϕ Codeptr "}}
	p303_12{{"Sϕ Codeptr "}}
	p303_12{{"Sϕ Codeptr "}}
	p303_11{"memindex ϕ"}
	p303_11{"memindex ϕ"}
	p303_11{"memindex ϕ"}
	p303_11{"memindex ϕ"}
	p303_11{"memindex ϕ"}
	p303_11{"memindex ϕ"}
	p303_12{{"Sϕ Codeptr "}}
	p303_12{{"Sϕ Codeptr "}}
	p303_12{{"Sϕ Codeptr "}}
	p303_12{{"Sϕ Codeptr "}}
end
block_304 --> phi_303
block_305 --> phi_303
subgraph block_304["Block 304"]
	direction TB
	b304_10["memindex__304 imm_readULEB32"]
end
branch_302 --> block_304
subgraph branch_302["Branch 302"]
	br302_9["cond__303 u8.!="]

end
block_306 --> branch_302
subgraph block_306["Block 306"]
	direction TB
	b306_0[/"Start"\\]
	b306_6["arg__308 0x40u8"]
	b306_5["arg__306 0"]
	b306_8["arg__305 u8.&"]
	b306_9["cond__303 u8.!="]
	b306_0 --> b306_6
	b306_6 --> b306_5
	b306_5 --> b306_8
	b306_8 --> b306_9
end
subgraph block_305["Block 305"]
	direction TB
	b305_4["memindex__310 0u"]
	b305_3["flags imm_readU8"]
	b305_4 --> b305_3
end
branch_302 --> block_305
subgraph block_300["Block 300"]
	direction TB
	b300_16["index pop_u32"]
	b300_20["val mach_readMemory32_u16"]
	b300_22["eff__297 push_u32"]
	b300_15["offset imm_readULEB32"]
	b300_16 --> b300_20
	b300_20 --> b300_22
	b300_22 --> b300_15
end
branch_297 --> block_300

`;
window.traces["I32_LOAD16_U"]["unlem_pretty"] = ''
window.traces["I32_LOAD16_U"]["unlem_pretty__raw"] = ''
window.traces["I32_LOAD16_U"]["unlem_pretty"] += `<pre class=''>def flags = imm_readU8();
var memindex: u32;
if (u8.!=(u8.&(flags, 0x40u8), 0)) {
	memindex = imm_readULEB32();
} else {
	memindex = 0u;
}
def cond = m_isMemory64(memindex);
if (cond) {
	def offset = imm_readULEB64();
	def index = pop_u64();
	def val = mach_readMemory64_u16(memindex, index, offset);
	push_u32(val);
} else {
	def offset = imm_readULEB32();
	def index = pop_u32();
	def val = mach_readMemory32_u16(memindex, index, offset);
	push_u32(val);
}
</pre>`;
window.traces["I32_LOAD16_U"]["unlem_pretty__raw"] += `def flags = imm_readU8();
var memindex: u32;
if (u8.!=(u8.&(flags, 0x40u8), 0)) {
	memindex = imm_readULEB32();
} else {
	memindex = 0u;
}
def cond = m_isMemory64(memindex);
if (cond) {
	def offset = imm_readULEB64();
	def index = pop_u64();
	def val = mach_readMemory64_u16(memindex, index, offset);
	push_u32(val);
} else {
	def offset = imm_readULEB32();
	def index = pop_u32();
	def val = mach_readMemory32_u16(memindex, index, offset);
	push_u32(val);
}
`;
window.traces["I32_LOAD16_U"]["constUnLEM"] = ''
window.traces["I32_LOAD16_U"]["constUnLEM__raw"] = ''
window.traces["I32_LOAD16_U"]["constUnLEM"] += `<pre class='graph'>---
config:
  layout: elk
---
graph TD
	1[\\"Finish"/]
	31 -. Codeptr .-> 1
	32 -. Stack .-> 1
	0 -. Trap Locals Globals Tables Memory Extra .-> 1
	0[/"Start"\\]
	32{{"Sϕ Stack "}}
	14 --> 32
	30 --> 32
	22 --> 32
	22["eff__297 push_u32"]
	20 --> 22
	16 -. Stack .-> 22
	16["index pop_u32"]
	0 -. Stack .-> 16
	20["val mach_readMemory32_u16"]
	11 --> 20
	16 --> 20
	15 --> 20
	15["offset imm_readULEB32"]
	12 -. Codeptr .-> 15
	12{{"Sϕ Codeptr "}}
	9 --> 12
	10 --> 12
	3 --> 12
	3["flags imm_readU8"]
	0 -. Codeptr .-> 3
	10["memindex__304 imm_readULEB32"]
	3 -. Codeptr .-> 10
	9["cond__303 u8.!="]
	8 --> 9
	5 --> 9
	5["arg__306 0"]
	8["arg__305 u8.&"]
	3 --> 8
	6 --> 8
	6["arg__308 0x40u8"]
	11{"memindex ϕ"}
	9 --> 11
	10 --> 11
	4 --> 11
	4["memindex__310 0u"]
	30["eff__292 push_u32"]
	28 --> 30
	24 -. Stack .-> 30
	24["index pop_u64"]
	0 -. Stack .-> 24
	28["val mach_readMemory64_u16"]
	11 --> 28
	24 --> 28
	23 --> 28
	23["offset imm_readULEB64"]
	12 -. Codeptr .-> 23
	14["cond__291 m_isMemory64"]
	11 --> 14
	31{{"Sϕ Codeptr "}}
	14 --> 31
	23 --> 31
	15 --> 31
</pre>`;
window.traces["I32_LOAD16_U"]["constUnLEM__raw"] += `---
config:
  layout: elk
---
graph TD
	1[\\"Finish"/]
	31 -. Codeptr .-> 1
	32 -. Stack .-> 1
	0 -. Trap Locals Globals Tables Memory Extra .-> 1
	0[/"Start"\\]
	32{{"Sϕ Stack "}}
	14 --> 32
	30 --> 32
	22 --> 32
	22["eff__297 push_u32"]
	20 --> 22
	16 -. Stack .-> 22
	16["index pop_u32"]
	0 -. Stack .-> 16
	20["val mach_readMemory32_u16"]
	11 --> 20
	16 --> 20
	15 --> 20
	15["offset imm_readULEB32"]
	12 -. Codeptr .-> 15
	12{{"Sϕ Codeptr "}}
	9 --> 12
	10 --> 12
	3 --> 12
	3["flags imm_readU8"]
	0 -. Codeptr .-> 3
	10["memindex__304 imm_readULEB32"]
	3 -. Codeptr .-> 10
	9["cond__303 u8.!="]
	8 --> 9
	5 --> 9
	5["arg__306 0"]
	8["arg__305 u8.&"]
	3 --> 8
	6 --> 8
	6["arg__308 0x40u8"]
	11{"memindex ϕ"}
	9 --> 11
	10 --> 11
	4 --> 11
	4["memindex__310 0u"]
	30["eff__292 push_u32"]
	28 --> 30
	24 -. Stack .-> 30
	24["index pop_u64"]
	0 -. Stack .-> 24
	28["val mach_readMemory64_u16"]
	11 --> 28
	24 --> 28
	23 --> 28
	23["offset imm_readULEB64"]
	12 -. Codeptr .-> 23
	14["cond__291 m_isMemory64"]
	11 --> 14
	31{{"Sϕ Codeptr "}}
	14 --> 31
	23 --> 31
	15 --> 31
`;
window.traces["I32_LOAD16_U"]["chooseMerge"] = ''
window.traces["I32_LOAD16_U"]["chooseMerge__raw"] = ''
window.traces["I32_LOAD16_U"]["chooseMerge"] += `<pre class='graph'>---
config:
  layout: elk
---
graph TD
	1[\\"Finish"/]
	31 -. Codeptr .-> 1
	32 -. Stack .-> 1
	0 -. Trap Locals Globals Tables Memory Extra .-> 1
	0[/"Start"\\]
	32{{"Sϕ Stack "}}
	14 --> 32
	30 --> 32
	22 --> 32
	22["eff__297 push_u32"]
	20 --> 22
	16 -. Stack .-> 22
	16["index pop_u32"]
	0 -. Stack .-> 16
	20["val mach_readMemory32_u16"]
	11 --> 20
	16 --> 20
	15 --> 20
	15["offset imm_readULEB32"]
	12 -. Codeptr .-> 15
	12{{"Sϕ Codeptr "}}
	9 --> 12
	10 --> 12
	3 --> 12
	3["flags imm_readU8"]
	0 -. Codeptr .-> 3
	10["memindex__304 imm_readULEB32"]
	3 -. Codeptr .-> 10
	9["cond__303 u8.!="]
	8 --> 9
	5 --> 9
	5["arg__306 0"]
	8["arg__305 u8.&"]
	3 --> 8
	6 --> 8
	6["arg__308 0x40u8"]
	11{"memindex ϕ"}
	9 --> 11
	10 --> 11
	4 --> 11
	4["memindex__310 0u"]
	30["eff__292 push_u32"]
	28 --> 30
	24 -. Stack .-> 30
	24["index pop_u64"]
	0 -. Stack .-> 24
	28["val mach_readMemory64_u16"]
	11 --> 28
	24 --> 28
	23 --> 28
	23["offset imm_readULEB64"]
	12 -. Codeptr .-> 23
	14["cond__291 m_isMemory64"]
	11 --> 14
	31{{"Sϕ Codeptr "}}
	14 --> 31
	23 --> 31
	15 --> 31
</pre>`;
window.traces["I32_LOAD16_U"]["chooseMerge__raw"] += `---
config:
  layout: elk
---
graph TD
	1[\\"Finish"/]
	31 -. Codeptr .-> 1
	32 -. Stack .-> 1
	0 -. Trap Locals Globals Tables Memory Extra .-> 1
	0[/"Start"\\]
	32{{"Sϕ Stack "}}
	14 --> 32
	30 --> 32
	22 --> 32
	22["eff__297 push_u32"]
	20 --> 22
	16 -. Stack .-> 22
	16["index pop_u32"]
	0 -. Stack .-> 16
	20["val mach_readMemory32_u16"]
	11 --> 20
	16 --> 20
	15 --> 20
	15["offset imm_readULEB32"]
	12 -. Codeptr .-> 15
	12{{"Sϕ Codeptr "}}
	9 --> 12
	10 --> 12
	3 --> 12
	3["flags imm_readU8"]
	0 -. Codeptr .-> 3
	10["memindex__304 imm_readULEB32"]
	3 -. Codeptr .-> 10
	9["cond__303 u8.!="]
	8 --> 9
	5 --> 9
	5["arg__306 0"]
	8["arg__305 u8.&"]
	3 --> 8
	6 --> 8
	6["arg__308 0x40u8"]
	11{"memindex ϕ"}
	9 --> 11
	10 --> 11
	4 --> 11
	4["memindex__310 0u"]
	30["eff__292 push_u32"]
	28 --> 30
	24 -. Stack .-> 30
	24["index pop_u64"]
	0 -. Stack .-> 24
	28["val mach_readMemory64_u16"]
	11 --> 28
	24 --> 28
	23 --> 28
	23["offset imm_readULEB64"]
	12 -. Codeptr .-> 23
	14["cond__291 m_isMemory64"]
	11 --> 14
	31{{"Sϕ Codeptr "}}
	14 --> 31
	23 --> 31
	15 --> 31
`;
window.traces["I32_LOAD16_U"]["scheduled"] = ''
window.traces["I32_LOAD16_U"]["scheduled__raw"] = ''
window.traces["I32_LOAD16_U"]["scheduled"] += `<pre class=''>def flags = imm_readU8();
def arg__308 : byte = 0x40u8;
def arg__305 = u8.&(flags, arg__308);
def arg__306 : byte = 0;
def cond__303 = u8.!=(arg__305, arg__306);
var memindex: u32;
if (cond__303) {
	def memindex__304 = imm_readULEB32();
} else {
	def memindex__310 : u32 = 0u;
}
// phis: memindex <- memindex__304; memindex <- memindex__310; 
def cond__291 = m_isMemory64(memindex);
if (cond__291) {
	def offset = imm_readULEB64();
	def index = pop_u64();
	def val = mach_readMemory64_u16(memindex, index, offset);
	def eff__292 = push_u32(val);
} else {
	def offset = imm_readULEB32();
	def index = pop_u32();
	def val = mach_readMemory32_u16(memindex, index, offset);
	def eff__297 = push_u32(val);
}
// phis: 
</pre>`;
window.traces["I32_LOAD16_U"]["scheduled__raw"] += `def flags = imm_readU8();
def arg__308 : byte = 0x40u8;
def arg__305 = u8.&(flags, arg__308);
def arg__306 : byte = 0;
def cond__303 = u8.!=(arg__305, arg__306);
var memindex: u32;
if (cond__303) {
	def memindex__304 = imm_readULEB32();
} else {
	def memindex__310 : u32 = 0u;
}
// phis: memindex <- memindex__304; memindex <- memindex__310; 
def cond__291 = m_isMemory64(memindex);
if (cond__291) {
	def offset = imm_readULEB64();
	def index = pop_u64();
	def val = mach_readMemory64_u16(memindex, index, offset);
	def eff__292 = push_u32(val);
} else {
	def offset = imm_readULEB32();
	def index = pop_u32();
	def val = mach_readMemory32_u16(memindex, index, offset);
	def eff__297 = push_u32(val);
}
// phis: 
`;
window.traces["I32_LOAD16_U"]["pretty"] = ''
window.traces["I32_LOAD16_U"]["pretty__raw"] = ''
window.traces["I32_LOAD16_U"]["pretty"] += `<pre class=''>def flags = imm_readU8();
var memindex: u32;
if (u8.!=(u8.&(flags, 0x40u8), 0)) {
	memindex = imm_readULEB32();
} else {
	memindex = 0u;
}
def cond = m_isMemory64(memindex);
if (cond) {
	def offset = imm_readULEB64();
	def index = pop_u64();
	def val = mach_readMemory64_u16(memindex, index, offset);
	push_u32(val);
} else {
	def offset = imm_readULEB32();
	def index = pop_u32();
	def val = mach_readMemory32_u16(memindex, index, offset);
	push_u32(val);
}
</pre>`;
window.traces["I32_LOAD16_U"]["pretty__raw"] += `def flags = imm_readU8();
var memindex: u32;
if (u8.!=(u8.&(flags, 0x40u8), 0)) {
	memindex = imm_readULEB32();
} else {
	memindex = 0u;
}
def cond = m_isMemory64(memindex);
if (cond) {
	def offset = imm_readULEB64();
	def index = pop_u64();
	def val = mach_readMemory64_u16(memindex, index, offset);
	push_u32(val);
} else {
	def offset = imm_readULEB32();
	def index = pop_u32();
	def val = mach_readMemory32_u16(memindex, index, offset);
	push_u32(val);
}
`;
window.traces["I64_LOAD8_S"] = {}
window.traces["I64_LOAD8_S"]["parsed"] = ''
window.traces["I64_LOAD8_S"]["parsed__raw"] = ''
window.traces["I64_LOAD8_S"]["parsed"] += `<pre class=''>def flags = imm_readU8();
def memindex : u32 = 0u;
def arg__328 : byte = 0;
def arg__330 : byte = 0x40u8;
def arg__329 = (flags);
def arg__327 = u8.&(arg__329, arg__330);
def cond__325 = u8.!=(arg__327, arg__328);
if (cond__325) {
	def memindex__326 = imm_readULEB32();
}
// phis: memindex <- memindex__326; 
def arg__324 = (memindex);
def cond__311 = m_isMemory64(arg__324);
if (cond__311) {
	def offset = imm_readULEB64();
	def index = pop_u64();
	def arg__317 = (offset);
	def arg__316 = (index);
	def arg__315 = (memindex);
	def val = mach_readMemory64_u8_64(arg__315, arg__316, arg__317);
	def arg__314 = (val);
	def extend = U64_extend8_s(arg__314);
	def arg__313 = (extend);
	def eff__312 = push_u64(arg__313);
} else {
	def offset = imm_readULEB32();
	def index = pop_u32();
	def arg__323 = (offset);
	def arg__322 = (index);
	def arg__321 = (memindex);
	def val = mach_readMemory32_u8_64(arg__321, arg__322, arg__323);
	def arg__320 = (val);
	def extend = U64_extend8_s(arg__320);
	def arg__319 = (extend);
	def eff__318 = push_u64(arg__319);
}
// phis: 
</pre>`;
window.traces["I64_LOAD8_S"]["parsed__raw"] += `def flags = imm_readU8();
def memindex : u32 = 0u;
def arg__328 : byte = 0;
def arg__330 : byte = 0x40u8;
def arg__329 = (flags);
def arg__327 = u8.&(arg__329, arg__330);
def cond__325 = u8.!=(arg__327, arg__328);
if (cond__325) {
	def memindex__326 = imm_readULEB32();
}
// phis: memindex <- memindex__326; 
def arg__324 = (memindex);
def cond__311 = m_isMemory64(arg__324);
if (cond__311) {
	def offset = imm_readULEB64();
	def index = pop_u64();
	def arg__317 = (offset);
	def arg__316 = (index);
	def arg__315 = (memindex);
	def val = mach_readMemory64_u8_64(arg__315, arg__316, arg__317);
	def arg__314 = (val);
	def extend = U64_extend8_s(arg__314);
	def arg__313 = (extend);
	def eff__312 = push_u64(arg__313);
} else {
	def offset = imm_readULEB32();
	def index = pop_u32();
	def arg__323 = (offset);
	def arg__322 = (index);
	def arg__321 = (memindex);
	def val = mach_readMemory32_u8_64(arg__321, arg__322, arg__323);
	def arg__320 = (val);
	def extend = U64_extend8_s(arg__320);
	def arg__319 = (extend);
	def eff__318 = push_u64(arg__319);
}
// phis: 
`;
window.traces["I64_LOAD8_S"]["raw"] = ''
window.traces["I64_LOAD8_S"]["raw__raw"] = ''
window.traces["I64_LOAD8_S"]["raw"] += `<pre class='graph'>---
config:
  layout: elk
---
graph TD
	1[\\"Finish"/]
	35 -. Codeptr .-> 1
	36 -. Stack .-> 1
	0 -. Trap Locals Globals Tables Memory Extra .-> 1
	0[/"Start"\\]
	36{{"Sϕ Stack "}}
	14 --> 36
	34 --> 36
	24 --> 36
	24["eff__318 push_u64"]
	22 --> 24
	16 -. Stack .-> 24
	16["index pop_u32"]
	0 -. Stack .-> 16
	22["extend U64_extend8_s"]
	20 --> 22
	20["val mach_readMemory32_u8_64"]
	11 --> 20
	16 --> 20
	15 --> 20
	15["offset imm_readULEB32"]
	12 -. Codeptr .-> 15
	12{{"Sϕ Codeptr "}}
	9 --> 12
	10 --> 12
	3 --> 12
	3["flags imm_readU8"]
	0 -. Codeptr .-> 3
	10["memindex__326 imm_readULEB32"]
	3 -. Codeptr .-> 10
	9["cond__325 u8.!="]
	8 --> 9
	5 --> 9
	5["arg__328 0"]
	8["arg__327 u8.&"]
	3 --> 8
	6 --> 8
	6["arg__330 0x40u8"]
	11{"memindex ϕ"}
	9 --> 11
	10 --> 11
	4 --> 11
	4["memindex__331 0u"]
	34["eff__312 push_u64"]
	32 --> 34
	26 -. Stack .-> 34
	26["index pop_u64"]
	0 -. Stack .-> 26
	32["extend U64_extend8_s"]
	30 --> 32
	30["val mach_readMemory64_u8_64"]
	11 --> 30
	26 --> 30
	25 --> 30
	25["offset imm_readULEB64"]
	12 -. Codeptr .-> 25
	14["cond__311 m_isMemory64"]
	11 --> 14
	35{{"Sϕ Codeptr "}}
	14 --> 35
	25 --> 35
	15 --> 35
</pre>`;
window.traces["I64_LOAD8_S"]["raw__raw"] += `---
config:
  layout: elk
---
graph TD
	1[\\"Finish"/]
	35 -. Codeptr .-> 1
	36 -. Stack .-> 1
	0 -. Trap Locals Globals Tables Memory Extra .-> 1
	0[/"Start"\\]
	36{{"Sϕ Stack "}}
	14 --> 36
	34 --> 36
	24 --> 36
	24["eff__318 push_u64"]
	22 --> 24
	16 -. Stack .-> 24
	16["index pop_u32"]
	0 -. Stack .-> 16
	22["extend U64_extend8_s"]
	20 --> 22
	20["val mach_readMemory32_u8_64"]
	11 --> 20
	16 --> 20
	15 --> 20
	15["offset imm_readULEB32"]
	12 -. Codeptr .-> 15
	12{{"Sϕ Codeptr "}}
	9 --> 12
	10 --> 12
	3 --> 12
	3["flags imm_readU8"]
	0 -. Codeptr .-> 3
	10["memindex__326 imm_readULEB32"]
	3 -. Codeptr .-> 10
	9["cond__325 u8.!="]
	8 --> 9
	5 --> 9
	5["arg__328 0"]
	8["arg__327 u8.&"]
	3 --> 8
	6 --> 8
	6["arg__330 0x40u8"]
	11{"memindex ϕ"}
	9 --> 11
	10 --> 11
	4 --> 11
	4["memindex__331 0u"]
	34["eff__312 push_u64"]
	32 --> 34
	26 -. Stack .-> 34
	26["index pop_u64"]
	0 -. Stack .-> 26
	32["extend U64_extend8_s"]
	30 --> 32
	30["val mach_readMemory64_u8_64"]
	11 --> 30
	26 --> 30
	25 --> 30
	25["offset imm_readULEB64"]
	12 -. Codeptr .-> 25
	14["cond__311 m_isMemory64"]
	11 --> 14
	35{{"Sϕ Codeptr "}}
	14 --> 35
	25 --> 35
	15 --> 35
`;
window.traces["I64_LOAD8_S"]["spytial"] = ''
window.traces["I64_LOAD8_S"]["spytial__raw"] = ''
window.traces["I64_LOAD8_S"]["spytial"] += `<pre class=''>{
"atoms": [
{
"id": "node_1",
"type": "finish",
"label": "Finish"
},
{
"id": "node_35",
"type": "state_phi",
"label": "StatePhi [m_isMemory64 [cond__311]]"
},
{
"id": "node_36",
"type": "state_phi",
"label": "StatePhi [m_isMemory64 [cond__311]]"
},
{
"id": "node_0",
"type": "start",
"label": "Start"
},
{
"id": "node_14",
"type": "intrinsic",
"label": "m_isMemory64 [cond__311]"
},
{
"id": "node_25",
"type": "intrinsic",
"label": "imm_readULEB64 [offset]"
},
{
"id": "node_15",
"type": "intrinsic",
"label": "imm_readULEB32 [offset]"
},
{
"id": "node_34",
"type": "intrinsic",
"label": "push_u64 [eff__312]"
},
{
"id": "node_24",
"type": "intrinsic",
"label": "push_u64 [eff__318]"
},
{
"id": "node_11",
"type": "phi",
"label": "Phi"
},
{
"id": "node_12",
"type": "state_phi",
"label": "StatePhi [u8.!= [cond__325]]"
},
{
"id": "node_32",
"type": "intrinsic",
"label": "U64_extend8_s [extend]"
},
{
"id": "node_26",
"type": "intrinsic",
"label": "pop_u64 [index]"
},
{
"id": "node_22",
"type": "intrinsic",
"label": "U64_extend8_s [extend]"
},
{
"id": "node_16",
"type": "intrinsic",
"label": "pop_u32 [index]"
},
{
"id": "node_9",
"type": "intrinsic",
"label": "u8.!= [cond__325]"
},
{
"id": "node_10",
"type": "intrinsic",
"label": "imm_readULEB32 [memindex__326]"
},
{
"id": "node_4",
"type": "lit",
"label": "0u"
},
{
"id": "node_3",
"type": "intrinsic",
"label": "imm_readU8 [flags]"
},
{
"id": "node_30",
"type": "intrinsic",
"label": "mach_readMemory64_u8_64 [val]"
},
{
"id": "node_20",
"type": "intrinsic",
"label": "mach_readMemory32_u8_64 [val]"
},
{
"id": "node_8",
"type": "intrinsic",
"label": "u8.& [arg__327]"
},
{
"id": "node_5",
"type": "lit",
"label": "0"
},
{
"id": "node_6",
"type": "lit",
"label": "0x40u8"
}
],
"relations": [
{
"id": "uses",
"name": "Uses",
"types": ["sea_node", "sea_node"],
"tuples": [
{
"atoms": ["node_14", "node_11"],
"types": ["intrinsic", "phi"]
},
{
"atoms": ["node_34", "node_32"],
"types": ["intrinsic", "intrinsic"]
},
{
"atoms": ["node_24", "node_22"],
"types": ["intrinsic", "intrinsic"]
},
{
"atoms": ["node_32", "node_30"],
"types": ["intrinsic", "intrinsic"]
},
{
"atoms": ["node_22", "node_20"],
"types": ["intrinsic", "intrinsic"]
},
{
"atoms": ["node_9", "node_8"],
"types": ["intrinsic", "intrinsic"]
},
{
"atoms": ["node_9", "node_5"],
"types": ["intrinsic", "lit"]
},
{
"atoms": ["node_30", "node_11"],
"types": ["intrinsic", "phi"]
},
{
"atoms": ["node_30", "node_26"],
"types": ["intrinsic", "intrinsic"]
},
{
"atoms": ["node_30", "node_25"],
"types": ["intrinsic", "intrinsic"]
},
{
"atoms": ["node_20", "node_11"],
"types": ["intrinsic", "phi"]
},
{
"atoms": ["node_20", "node_16"],
"types": ["intrinsic", "intrinsic"]
},
{
"atoms": ["node_20", "node_15"],
"types": ["intrinsic", "intrinsic"]
},
{
"atoms": ["node_8", "node_3"],
"types": ["intrinsic", "intrinsic"]
},
{
"atoms": ["node_8", "node_6"],
"types": ["intrinsic", "lit"]
}
]
},
{
"id": "state_uses",
"name": "StateUses",
"types": ["sea_node", "sea_node"],
"tuples": [
{
"atoms": ["node_1", "node_35"],
"types": ["finish", "state_phi"]
},
{
"atoms": ["node_1", "node_36"],
"types": ["finish", "state_phi"]
},
{
"atoms": ["node_1", "node_0"],
"types": ["finish", "start"]
},
{
"atoms": ["node_25", "node_12"],
"types": ["intrinsic", "state_phi"]
},
{
"atoms": ["node_15", "node_12"],
"types": ["intrinsic", "state_phi"]
},
{
"atoms": ["node_34", "node_26"],
"types": ["intrinsic", "intrinsic"]
},
{
"atoms": ["node_24", "node_16"],
"types": ["intrinsic", "intrinsic"]
},
{
"atoms": ["node_26", "node_0"],
"types": ["intrinsic", "start"]
},
{
"atoms": ["node_16", "node_0"],
"types": ["intrinsic", "start"]
},
{
"atoms": ["node_10", "node_3"],
"types": ["intrinsic", "intrinsic"]
},
{
"atoms": ["node_3", "node_0"],
"types": ["intrinsic", "start"]
}
]
},
{
"id": "phi_cond",
"name": "PhiCond",
"types": ["sea_node", "sea_node"],
"tuples": [
{
"atoms": ["node_35", "node_14"],
"types": ["state_phi", "intrinsic"]
},
{
"atoms": ["node_36", "node_14"],
"types": ["state_phi", "intrinsic"]
},
{
"atoms": ["node_11", "node_9"],
"types": ["phi", "intrinsic"]
},
{
"atoms": ["node_12", "node_9"],
"types": ["state_phi", "intrinsic"]
}
]
},
{
"id": "phi_true",
"name": "PhiTrue",
"types": ["sea_node", "sea_node"],
"tuples": [
{
"atoms": ["node_35", "node_25"],
"types": ["state_phi", "intrinsic"]
},
{
"atoms": ["node_36", "node_34"],
"types": ["state_phi", "intrinsic"]
},
{
"atoms": ["node_11", "node_10"],
"types": ["phi", "intrinsic"]
},
{
"atoms": ["node_12", "node_10"],
"types": ["state_phi", "intrinsic"]
}
]
},
{
"id": "phi_false",
"name": "PhiFalse",
"types": ["sea_node", "sea_node"],
"tuples": [
{
"atoms": ["node_35", "node_15"],
"types": ["state_phi", "intrinsic"]
},
{
"atoms": ["node_36", "node_24"],
"types": ["state_phi", "intrinsic"]
},
{
"atoms": ["node_11", "node_4"],
"types": ["phi", "lit"]
},
{
"atoms": ["node_12", "node_3"],
"types": ["state_phi", "intrinsic"]
}
]
}
]
}</pre>`;
window.traces["I64_LOAD8_S"]["spytial__raw"] += `{
"atoms": [
{
"id": "node_1",
"type": "finish",
"label": "Finish"
},
{
"id": "node_35",
"type": "state_phi",
"label": "StatePhi [m_isMemory64 [cond__311]]"
},
{
"id": "node_36",
"type": "state_phi",
"label": "StatePhi [m_isMemory64 [cond__311]]"
},
{
"id": "node_0",
"type": "start",
"label": "Start"
},
{
"id": "node_14",
"type": "intrinsic",
"label": "m_isMemory64 [cond__311]"
},
{
"id": "node_25",
"type": "intrinsic",
"label": "imm_readULEB64 [offset]"
},
{
"id": "node_15",
"type": "intrinsic",
"label": "imm_readULEB32 [offset]"
},
{
"id": "node_34",
"type": "intrinsic",
"label": "push_u64 [eff__312]"
},
{
"id": "node_24",
"type": "intrinsic",
"label": "push_u64 [eff__318]"
},
{
"id": "node_11",
"type": "phi",
"label": "Phi"
},
{
"id": "node_12",
"type": "state_phi",
"label": "StatePhi [u8.!= [cond__325]]"
},
{
"id": "node_32",
"type": "intrinsic",
"label": "U64_extend8_s [extend]"
},
{
"id": "node_26",
"type": "intrinsic",
"label": "pop_u64 [index]"
},
{
"id": "node_22",
"type": "intrinsic",
"label": "U64_extend8_s [extend]"
},
{
"id": "node_16",
"type": "intrinsic",
"label": "pop_u32 [index]"
},
{
"id": "node_9",
"type": "intrinsic",
"label": "u8.!= [cond__325]"
},
{
"id": "node_10",
"type": "intrinsic",
"label": "imm_readULEB32 [memindex__326]"
},
{
"id": "node_4",
"type": "lit",
"label": "0u"
},
{
"id": "node_3",
"type": "intrinsic",
"label": "imm_readU8 [flags]"
},
{
"id": "node_30",
"type": "intrinsic",
"label": "mach_readMemory64_u8_64 [val]"
},
{
"id": "node_20",
"type": "intrinsic",
"label": "mach_readMemory32_u8_64 [val]"
},
{
"id": "node_8",
"type": "intrinsic",
"label": "u8.& [arg__327]"
},
{
"id": "node_5",
"type": "lit",
"label": "0"
},
{
"id": "node_6",
"type": "lit",
"label": "0x40u8"
}
],
"relations": [
{
"id": "uses",
"name": "Uses",
"types": ["sea_node", "sea_node"],
"tuples": [
{
"atoms": ["node_14", "node_11"],
"types": ["intrinsic", "phi"]
},
{
"atoms": ["node_34", "node_32"],
"types": ["intrinsic", "intrinsic"]
},
{
"atoms": ["node_24", "node_22"],
"types": ["intrinsic", "intrinsic"]
},
{
"atoms": ["node_32", "node_30"],
"types": ["intrinsic", "intrinsic"]
},
{
"atoms": ["node_22", "node_20"],
"types": ["intrinsic", "intrinsic"]
},
{
"atoms": ["node_9", "node_8"],
"types": ["intrinsic", "intrinsic"]
},
{
"atoms": ["node_9", "node_5"],
"types": ["intrinsic", "lit"]
},
{
"atoms": ["node_30", "node_11"],
"types": ["intrinsic", "phi"]
},
{
"atoms": ["node_30", "node_26"],
"types": ["intrinsic", "intrinsic"]
},
{
"atoms": ["node_30", "node_25"],
"types": ["intrinsic", "intrinsic"]
},
{
"atoms": ["node_20", "node_11"],
"types": ["intrinsic", "phi"]
},
{
"atoms": ["node_20", "node_16"],
"types": ["intrinsic", "intrinsic"]
},
{
"atoms": ["node_20", "node_15"],
"types": ["intrinsic", "intrinsic"]
},
{
"atoms": ["node_8", "node_3"],
"types": ["intrinsic", "intrinsic"]
},
{
"atoms": ["node_8", "node_6"],
"types": ["intrinsic", "lit"]
}
]
},
{
"id": "state_uses",
"name": "StateUses",
"types": ["sea_node", "sea_node"],
"tuples": [
{
"atoms": ["node_1", "node_35"],
"types": ["finish", "state_phi"]
},
{
"atoms": ["node_1", "node_36"],
"types": ["finish", "state_phi"]
},
{
"atoms": ["node_1", "node_0"],
"types": ["finish", "start"]
},
{
"atoms": ["node_25", "node_12"],
"types": ["intrinsic", "state_phi"]
},
{
"atoms": ["node_15", "node_12"],
"types": ["intrinsic", "state_phi"]
},
{
"atoms": ["node_34", "node_26"],
"types": ["intrinsic", "intrinsic"]
},
{
"atoms": ["node_24", "node_16"],
"types": ["intrinsic", "intrinsic"]
},
{
"atoms": ["node_26", "node_0"],
"types": ["intrinsic", "start"]
},
{
"atoms": ["node_16", "node_0"],
"types": ["intrinsic", "start"]
},
{
"atoms": ["node_10", "node_3"],
"types": ["intrinsic", "intrinsic"]
},
{
"atoms": ["node_3", "node_0"],
"types": ["intrinsic", "start"]
}
]
},
{
"id": "phi_cond",
"name": "PhiCond",
"types": ["sea_node", "sea_node"],
"tuples": [
{
"atoms": ["node_35", "node_14"],
"types": ["state_phi", "intrinsic"]
},
{
"atoms": ["node_36", "node_14"],
"types": ["state_phi", "intrinsic"]
},
{
"atoms": ["node_11", "node_9"],
"types": ["phi", "intrinsic"]
},
{
"atoms": ["node_12", "node_9"],
"types": ["state_phi", "intrinsic"]
}
]
},
{
"id": "phi_true",
"name": "PhiTrue",
"types": ["sea_node", "sea_node"],
"tuples": [
{
"atoms": ["node_35", "node_25"],
"types": ["state_phi", "intrinsic"]
},
{
"atoms": ["node_36", "node_34"],
"types": ["state_phi", "intrinsic"]
},
{
"atoms": ["node_11", "node_10"],
"types": ["phi", "intrinsic"]
},
{
"atoms": ["node_12", "node_10"],
"types": ["state_phi", "intrinsic"]
}
]
},
{
"id": "phi_false",
"name": "PhiFalse",
"types": ["sea_node", "sea_node"],
"tuples": [
{
"atoms": ["node_35", "node_15"],
"types": ["state_phi", "intrinsic"]
},
{
"atoms": ["node_36", "node_24"],
"types": ["state_phi", "intrinsic"]
},
{
"atoms": ["node_11", "node_4"],
"types": ["phi", "lit"]
},
{
"atoms": ["node_12", "node_3"],
"types": ["state_phi", "intrinsic"]
}
]
}
]
}`;
window.traces["I64_LOAD8_S"]["overloadOps"] = ''
window.traces["I64_LOAD8_S"]["overloadOps__raw"] = ''
window.traces["I64_LOAD8_S"]["overloadOps"] += `<pre class='graph'>---
config:
  layout: elk
---
graph TD
	1[\\"Finish"/]
	35 -. Codeptr .-> 1
	36 -. Stack .-> 1
	0 -. Trap Locals Globals Tables Memory Extra .-> 1
	0[/"Start"\\]
	36{{"Sϕ Stack "}}
	14 --> 36
	34 --> 36
	24 --> 36
	24["eff__318 push_u64"]
	22 --> 24
	16 -. Stack .-> 24
	16["index pop_u32"]
	0 -. Stack .-> 16
	22["extend U64_extend8_s"]
	20 --> 22
	20["val mach_readMemory32_u8_64"]
	11 --> 20
	16 --> 20
	15 --> 20
	15["offset imm_readULEB32"]
	12 -. Codeptr .-> 15
	12{{"Sϕ Codeptr "}}
	9 --> 12
	10 --> 12
	3 --> 12
	3["flags imm_readU8"]
	0 -. Codeptr .-> 3
	10["memindex__326 imm_readULEB32"]
	3 -. Codeptr .-> 10
	9["cond__325 u8.!="]
	8 --> 9
	5 --> 9
	5["arg__328 0"]
	8["arg__327 u8.&"]
	3 --> 8
	6 --> 8
	6["arg__330 0x40u8"]
	11{"memindex ϕ"}
	9 --> 11
	10 --> 11
	4 --> 11
	4["memindex__332 0u"]
	34["eff__312 push_u64"]
	32 --> 34
	26 -. Stack .-> 34
	26["index pop_u64"]
	0 -. Stack .-> 26
	32["extend U64_extend8_s"]
	30 --> 32
	30["val mach_readMemory64_u8_64"]
	11 --> 30
	26 --> 30
	25 --> 30
	25["offset imm_readULEB64"]
	12 -. Codeptr .-> 25
	14["cond__311 m_isMemory64"]
	11 --> 14
	35{{"Sϕ Codeptr "}}
	14 --> 35
	25 --> 35
	15 --> 35
</pre>`;
window.traces["I64_LOAD8_S"]["overloadOps__raw"] += `---
config:
  layout: elk
---
graph TD
	1[\\"Finish"/]
	35 -. Codeptr .-> 1
	36 -. Stack .-> 1
	0 -. Trap Locals Globals Tables Memory Extra .-> 1
	0[/"Start"\\]
	36{{"Sϕ Stack "}}
	14 --> 36
	34 --> 36
	24 --> 36
	24["eff__318 push_u64"]
	22 --> 24
	16 -. Stack .-> 24
	16["index pop_u32"]
	0 -. Stack .-> 16
	22["extend U64_extend8_s"]
	20 --> 22
	20["val mach_readMemory32_u8_64"]
	11 --> 20
	16 --> 20
	15 --> 20
	15["offset imm_readULEB32"]
	12 -. Codeptr .-> 15
	12{{"Sϕ Codeptr "}}
	9 --> 12
	10 --> 12
	3 --> 12
	3["flags imm_readU8"]
	0 -. Codeptr .-> 3
	10["memindex__326 imm_readULEB32"]
	3 -. Codeptr .-> 10
	9["cond__325 u8.!="]
	8 --> 9
	5 --> 9
	5["arg__328 0"]
	8["arg__327 u8.&"]
	3 --> 8
	6 --> 8
	6["arg__330 0x40u8"]
	11{"memindex ϕ"}
	9 --> 11
	10 --> 11
	4 --> 11
	4["memindex__332 0u"]
	34["eff__312 push_u64"]
	32 --> 34
	26 -. Stack .-> 34
	26["index pop_u64"]
	0 -. Stack .-> 26
	32["extend U64_extend8_s"]
	30 --> 32
	30["val mach_readMemory64_u8_64"]
	11 --> 30
	26 --> 30
	25 --> 30
	25["offset imm_readULEB64"]
	12 -. Codeptr .-> 25
	14["cond__311 m_isMemory64"]
	11 --> 14
	35{{"Sϕ Codeptr "}}
	14 --> 35
	25 --> 35
	15 --> 35
`;
window.traces["I64_LOAD8_S"]["addAbstractions"] = ''
window.traces["I64_LOAD8_S"]["addAbstractions__raw"] = ''
window.traces["I64_LOAD8_S"]["addAbstractions"] += `<pre class='graph'>---
config:
  layout: elk
---
graph TD
	1[\\"Finish"/]
	35 -. Codeptr .-> 1
	36 -. Stack .-> 1
	0 -. Trap Locals Globals Tables Memory Extra .-> 1
	0[/"Start"\\]
	36{{"Sϕ Stack "}}
	14 --> 36
	34 --> 36
	24 --> 36
	24["eff__318 push_u64"]
	22 --> 24
	16 -. Stack .-> 24
	16["index pop_u32"]
	0 -. Stack .-> 16
	22["extend U64_extend8_s"]
	20 --> 22
	20["val mach_readMemory32_u8_64"]
	11 --> 20
	16 --> 20
	15 --> 20
	15["offset imm_readULEB32"]
	12 -. Codeptr .-> 15
	12{{"Sϕ Codeptr "}}
	9 --> 12
	10 --> 12
	3 --> 12
	3["flags imm_readU8"]
	0 -. Codeptr .-> 3
	10["memindex__326 imm_readULEB32"]
	3 -. Codeptr .-> 10
	9["cond__325 u8.!="]
	8 --> 9
	5 --> 9
	5["arg__328 0"]
	8["arg__327 u8.&"]
	3 --> 8
	6 --> 8
	6["arg__330 0x40u8"]
	11{"memindex ϕ"}
	9 --> 11
	10 --> 11
	4 --> 11
	4["memindex__332 0u"]
	34["eff__312 push_u64"]
	32 --> 34
	26 -. Stack .-> 34
	26["index pop_u64"]
	0 -. Stack .-> 26
	32["extend U64_extend8_s"]
	30 --> 32
	30["val mach_readMemory64_u8_64"]
	11 --> 30
	26 --> 30
	25 --> 30
	25["offset imm_readULEB64"]
	12 -. Codeptr .-> 25
	14["cond__311 m_isMemory64"]
	11 --> 14
	35{{"Sϕ Codeptr "}}
	14 --> 35
	25 --> 35
	15 --> 35
</pre>`;
window.traces["I64_LOAD8_S"]["addAbstractions__raw"] += `---
config:
  layout: elk
---
graph TD
	1[\\"Finish"/]
	35 -. Codeptr .-> 1
	36 -. Stack .-> 1
	0 -. Trap Locals Globals Tables Memory Extra .-> 1
	0[/"Start"\\]
	36{{"Sϕ Stack "}}
	14 --> 36
	34 --> 36
	24 --> 36
	24["eff__318 push_u64"]
	22 --> 24
	16 -. Stack .-> 24
	16["index pop_u32"]
	0 -. Stack .-> 16
	22["extend U64_extend8_s"]
	20 --> 22
	20["val mach_readMemory32_u8_64"]
	11 --> 20
	16 --> 20
	15 --> 20
	15["offset imm_readULEB32"]
	12 -. Codeptr .-> 15
	12{{"Sϕ Codeptr "}}
	9 --> 12
	10 --> 12
	3 --> 12
	3["flags imm_readU8"]
	0 -. Codeptr .-> 3
	10["memindex__326 imm_readULEB32"]
	3 -. Codeptr .-> 10
	9["cond__325 u8.!="]
	8 --> 9
	5 --> 9
	5["arg__328 0"]
	8["arg__327 u8.&"]
	3 --> 8
	6 --> 8
	6["arg__330 0x40u8"]
	11{"memindex ϕ"}
	9 --> 11
	10 --> 11
	4 --> 11
	4["memindex__332 0u"]
	34["eff__312 push_u64"]
	32 --> 34
	26 -. Stack .-> 34
	26["index pop_u64"]
	0 -. Stack .-> 26
	32["extend U64_extend8_s"]
	30 --> 32
	30["val mach_readMemory64_u8_64"]
	11 --> 30
	26 --> 30
	25 --> 30
	25["offset imm_readULEB64"]
	12 -. Codeptr .-> 25
	14["cond__311 m_isMemory64"]
	11 --> 14
	35{{"Sϕ Codeptr "}}
	14 --> 35
	25 --> 35
	15 --> 35
`;
