window.traces = {};
window.traces["UNREACHABLE"] = {}
window.traces.UNREACHABLE["parsed"] = `<pre class=''>def eff__0 = trapUnreachable();
</pre>`;
window.traces.UNREACHABLE["raw"] = `<pre class='graph'>---
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
window.traces.UNREACHABLE["overloadOps"] = `<pre class='graph'>---
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
window.traces.UNREACHABLE["addAbstractions"] = `<pre class='graph'>---
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
window.traces.UNREACHABLE["schedulerMermaid"] = `<pre class='graph'>graph TD
subgraph block_0["Block 0"]
	direction TB
	b0_0[/"Start"\\]
	b0_3["eff__0 trapUnreachable"]
	b0_1[\\"Finish"/]
	b0_0 --> b0_3
	b0_3 --> b0_1
end

</pre>`;
window.traces.UNREACHABLE["unLEM"] = `<pre class='graph'>---
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
window.traces.UNREACHABLE["unlem_schedule"] = `<pre class=''>def eff__0 = trapUnreachable();
</pre>`;
window.traces.UNREACHABLE["unlem_scheduler"] = `<pre class='graph'>graph TD
subgraph block_0["Block 0"]
	direction TB
	b0_0[/"Start"\\]
	b0_3["eff__0 trapUnreachable"]
	b0_1[\\"Finish"/]
	b0_0 --> b0_3
	b0_3 --> b0_1
end

</pre>`;
window.traces.UNREACHABLE["unlem_pretty"] = `<pre class=''>trapUnreachable();
</pre>`;
window.traces.UNREACHABLE["constUnLEM"] = `<pre class='graph'>---
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
window.traces.UNREACHABLE["chooseMerge"] = `<pre class='graph'>---
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
window.traces.UNREACHABLE["scheduled"] = `<pre class=''>def eff__0 = trapUnreachable();
</pre>`;
window.traces.UNREACHABLE["pretty"] = `<pre class=''>trapUnreachable();
</pre>`;
window.traces["NOP"] = {}
window.traces.NOP["parsed"] = `<pre class=''>def ret__1 = (void);
</pre>`;
window.traces.NOP["raw"] = `<pre class='graph'>---
config:
  layout: elk
---
graph TD
	1[\\"Finish"/]
	0 -. Codeptr Stack Trap Locals Globals Tables Memory Extra .-> 1
	0[/"Start"\\]
</pre>`;
window.traces.NOP["overloadOps"] = `<pre class='graph'>---
config:
  layout: elk
---
graph TD
	1[\\"Finish"/]
	0 -. Codeptr Stack Trap Locals Globals Tables Memory Extra .-> 1
	0[/"Start"\\]
</pre>`;
window.traces.NOP["addAbstractions"] = `<pre class='graph'>---
config:
  layout: elk
---
graph TD
	1[\\"Finish"/]
	0 -. Codeptr Stack Trap Locals Globals Tables Memory Extra .-> 1
	0[/"Start"\\]
</pre>`;
window.traces.NOP["schedulerMermaid"] = `<pre class='graph'>graph TD
subgraph block_0["Block 0"]
	direction TB
	b0_0[/"Start"\\]
	b0_1[\\"Finish"/]
	b0_0 --> b0_1
end

</pre>`;
window.traces.NOP["unLEM"] = `<pre class='graph'>---
config:
  layout: elk
---
graph TD
	1[\\"Finish"/]
	0 -. Codeptr Stack Trap Locals Globals Tables Memory Extra .-> 1
	0[/"Start"\\]
</pre>`;
window.traces.NOP["unlem_schedule"] = `<pre class=''></pre>`;
window.traces.NOP["unlem_scheduler"] = `<pre class='graph'>graph TD
subgraph block_0["Block 0"]
	direction TB
	b0_0[/"Start"\\]
	b0_1[\\"Finish"/]
	b0_0 --> b0_1
end

</pre>`;
window.traces.NOP["unlem_pretty"] = `<pre class=''></pre>`;
window.traces.NOP["constUnLEM"] = `<pre class='graph'>---
config:
  layout: elk
---
graph TD
	1[\\"Finish"/]
	0 -. Codeptr Stack Trap Locals Globals Tables Memory Extra .-> 1
	0[/"Start"\\]
</pre>`;
window.traces.NOP["chooseMerge"] = `<pre class='graph'>---
config:
  layout: elk
---
graph TD
	1[\\"Finish"/]
	0 -. Codeptr Stack Trap Locals Globals Tables Memory Extra .-> 1
	0[/"Start"\\]
</pre>`;
window.traces.NOP["scheduled"] = `<pre class=''></pre>`;
window.traces.NOP["pretty"] = `<pre class=''></pre>`;
window.traces["BLOCK"] = {}
window.traces.BLOCK["parsed"] = `<pre class=''>def bt = imm_readBlockType();
def arg__3 = (bt);
def eff__2 = doBlock(arg__3);
</pre>`;
window.traces.BLOCK["raw"] = `<pre class='graph'>---
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
window.traces.BLOCK["overloadOps"] = `<pre class='graph'>---
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
window.traces.BLOCK["addAbstractions"] = `<pre class='graph'>---
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
window.traces.BLOCK["schedulerMermaid"] = `<pre class='graph'>graph TD
subgraph block_0["Block 0"]
	direction TB
	b0_0[/"Start"\\]
	b0_3["bt imm_readBlockType"]
	b0_5["eff__2 doBlock"]
	b0_1[\\"Finish"/]
	b0_0 --> b0_3
	b0_3 --> b0_5
	b0_5 --> b0_1
end

</pre>`;
window.traces.BLOCK["unLEM"] = `<pre class='graph'>---
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
window.traces.BLOCK["unlem_schedule"] = `<pre class=''>def bt = imm_readBlockType();
def eff__2 = doBlock(bt);
</pre>`;
window.traces.BLOCK["unlem_scheduler"] = `<pre class='graph'>graph TD
subgraph block_0["Block 0"]
	direction TB
	b0_0[/"Start"\\]
	b0_3["bt imm_readBlockType"]
	b0_5["eff__2 doBlock"]
	b0_1[\\"Finish"/]
	b0_0 --> b0_3
	b0_3 --> b0_5
	b0_5 --> b0_1
end

</pre>`;
window.traces.BLOCK["unlem_pretty"] = `<pre class=''>def bt = imm_readBlockType();
doBlock(bt);
</pre>`;
window.traces.BLOCK["constUnLEM"] = `<pre class='graph'>---
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
window.traces.BLOCK["chooseMerge"] = `<pre class='graph'>---
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
window.traces.BLOCK["scheduled"] = `<pre class=''>def bt = imm_readBlockType();
def eff__2 = doBlock(bt);
</pre>`;
window.traces.BLOCK["pretty"] = `<pre class=''>def bt = imm_readBlockType();
doBlock(bt);
</pre>`;
window.traces["LOOP"] = {}
window.traces.LOOP["parsed"] = `<pre class=''>def bt = imm_readBlockType();
def arg__5 = (bt);
def eff__4 = doLoop(arg__5);
</pre>`;
window.traces.LOOP["raw"] = `<pre class='graph'>---
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
window.traces.LOOP["overloadOps"] = `<pre class='graph'>---
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
window.traces.LOOP["addAbstractions"] = `<pre class='graph'>---
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
window.traces.LOOP["schedulerMermaid"] = `<pre class='graph'>graph TD
subgraph block_0["Block 0"]
	direction TB
	b0_0[/"Start"\\]
	b0_3["bt imm_readBlockType"]
	b0_5["eff__4 doLoop"]
	b0_1[\\"Finish"/]
	b0_0 --> b0_3
	b0_3 --> b0_5
	b0_5 --> b0_1
end

</pre>`;
window.traces.LOOP["unLEM"] = `<pre class='graph'>---
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
window.traces.LOOP["unlem_schedule"] = `<pre class=''>def bt = imm_readBlockType();
def eff__4 = doLoop(bt);
</pre>`;
window.traces.LOOP["unlem_scheduler"] = `<pre class='graph'>graph TD
subgraph block_0["Block 0"]
	direction TB
	b0_0[/"Start"\\]
	b0_3["bt imm_readBlockType"]
	b0_5["eff__4 doLoop"]
	b0_1[\\"Finish"/]
	b0_0 --> b0_3
	b0_3 --> b0_5
	b0_5 --> b0_1
end

</pre>`;
window.traces.LOOP["unlem_pretty"] = `<pre class=''>def bt = imm_readBlockType();
doLoop(bt);
</pre>`;
window.traces.LOOP["constUnLEM"] = `<pre class='graph'>---
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
window.traces.LOOP["chooseMerge"] = `<pre class='graph'>---
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
window.traces.LOOP["scheduled"] = `<pre class=''>def bt = imm_readBlockType();
def eff__4 = doLoop(bt);
</pre>`;
window.traces.LOOP["pretty"] = `<pre class=''>def bt = imm_readBlockType();
doLoop(bt);
</pre>`;
window.traces["IF"] = {}
window.traces.IF["parsed"] = `<pre class=''>def bt = imm_readBlockType();
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
window.traces.IF["raw"] = `<pre class='graph'>---
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
window.traces.IF["overloadOps"] = `<pre class='graph'>---
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
window.traces.IF["addAbstractions"] = `<pre class='graph'>---
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
window.traces.IF["sched Finish"] = `<pre class='graph'>graph TD
subgraph block_0["Block 0"]
	direction TB
	b0_1[\\"Finish"/]
end

</pre>`;
window.traces.IF["sched ctlxfer.put_IF [eff_st_put__13]"] = `<pre class='graph'>graph TD
subgraph block_0["Block 0"]
	direction TB
	b0_1[\\"Finish"/]
	b0_14["eff_st_put__13 ctlxfer.put_IF"]
	b0_14 --> b0_1
end

</pre>`;
window.traces.IF["sched StatePhi"] = `<pre class='graph'>graph TD
subgraph block_0["Block 0"]
	direction TB
	b0_1[\\"Finish"/]
	b0_14["eff_st_put__13 ctlxfer.put_IF"]
	b0_14 --> b0_1
end
phi_1 --> block_0
subgraph phi_1["Phi 1"]
	p1_13{{"Sϕ Codeptr Stack Trap Locals Globals Tables Memory Extra "}}
end
block_2 --> phi_1
block_3 --> phi_1
subgraph block_2["Block 2"]
	direction TB
end
branch_0 --> block_2
subgraph block_3["Block 3"]
	direction TB
end
branch_0 --> block_3

</pre>`;
window.traces.IF["sched StatePhi"] = `<pre class='graph'>graph TD
subgraph block_0["Block 0"]
	direction TB
	b0_1[\\"Finish"/]
	b0_14["eff_st_put__13 ctlxfer.put_IF"]
	b0_14 --> b0_1
end
phi_1 --> block_0
subgraph phi_1["Phi 1"]
	p1_13{{"Sϕ Codeptr Stack Trap Locals Globals Tables Memory Extra "}}
	p1_13{{"Sϕ Codeptr Stack Trap Locals Globals Tables Memory Extra "}}
end
block_2 --> phi_1
block_3 --> phi_1
subgraph block_2["Block 2"]
	direction TB
end
branch_0 --> block_2
subgraph block_3["Block 3"]
	direction TB
end
branch_0 --> block_3

</pre>`;
window.traces.IF["sched doBranch [eff__7]"] = `<pre class='graph'>graph TD
subgraph block_0["Block 0"]
	direction TB
	b0_1[\\"Finish"/]
	b0_14["eff_st_put__13 ctlxfer.put_IF"]
	b0_14 --> b0_1
end
phi_1 --> block_0
subgraph phi_1["Phi 1"]
	p1_13{{"Sϕ Codeptr Stack Trap Locals Globals Tables Memory Extra "}}
	p1_13{{"Sϕ Codeptr Stack Trap Locals Globals Tables Memory Extra "}}
end
block_2 --> phi_1
block_3 --> phi_1
subgraph block_2["Block 2"]
	direction TB
end
branch_0 --> block_2
subgraph block_3["Block 3"]
	direction TB
end
branch_0 --> block_3

</pre>`;
window.traces.IF["sched doFallthru [eff__9]"] = `<pre class='graph'>graph TD
subgraph block_0["Block 0"]
	direction TB
	b0_1[\\"Finish"/]
	b0_14["eff_st_put__13 ctlxfer.put_IF"]
	b0_14 --> b0_1
end
phi_1 --> block_0
subgraph phi_1["Phi 1"]
	p1_13{{"Sϕ Codeptr Stack Trap Locals Globals Tables Memory Extra "}}
	p1_13{{"Sϕ Codeptr Stack Trap Locals Globals Tables Memory Extra "}}
end
block_2 --> phi_1
block_3 --> phi_1
subgraph block_2["Block 2"]
	direction TB
end
branch_0 --> block_2
subgraph block_3["Block 3"]
	direction TB
end
branch_0 --> block_3

</pre>`;
window.traces.IF["sched U32_equals [cond__6]"] = `<pre class='graph'>graph TD
subgraph block_0["Block 0"]
	direction TB
	b0_1[\\"Finish"/]
	b0_14["eff_st_put__13 ctlxfer.put_IF"]
	b0_14 --> b0_1
end
phi_1 --> block_0
subgraph phi_1["Phi 1"]
	p1_13{{"Sϕ Codeptr Stack Trap Locals Globals Tables Memory Extra "}}
	p1_13{{"Sϕ Codeptr Stack Trap Locals Globals Tables Memory Extra "}}
end
block_2 --> phi_1
block_3 --> phi_1
subgraph block_2["Block 2"]
	direction TB
end
branch_0 --> block_2
subgraph block_3["Block 3"]
	direction TB
end
branch_0 --> block_3

</pre>`;
window.traces.IF["sched doBranch [eff__7]"] = `<pre class='graph'>graph TD
subgraph block_0["Block 0"]
	direction TB
	b0_1[\\"Finish"/]
	b0_14["eff_st_put__13 ctlxfer.put_IF"]
	b0_14 --> b0_1
end
phi_1 --> block_0
subgraph phi_1["Phi 1"]
	p1_13{{"Sϕ Codeptr Stack Trap Locals Globals Tables Memory Extra "}}
	p1_13{{"Sϕ Codeptr Stack Trap Locals Globals Tables Memory Extra "}}
end
block_2 --> phi_1
block_3 --> phi_1
subgraph block_2["Block 2"]
	direction TB
end
branch_0 --> block_2
subgraph block_3["Block 3"]
	direction TB
end
branch_0 --> block_3

</pre>`;
window.traces.IF["sched doFallthru [eff__9]"] = `<pre class='graph'>graph TD
subgraph block_0["Block 0"]
	direction TB
	b0_1[\\"Finish"/]
	b0_14["eff_st_put__13 ctlxfer.put_IF"]
	b0_14 --> b0_1
end
phi_1 --> block_0
subgraph phi_1["Phi 1"]
	p1_13{{"Sϕ Codeptr Stack Trap Locals Globals Tables Memory Extra "}}
	p1_13{{"Sϕ Codeptr Stack Trap Locals Globals Tables Memory Extra "}}
end
block_2 --> phi_1
block_3 --> phi_1
subgraph block_2["Block 2"]
	direction TB
end
branch_0 --> block_2
subgraph block_3["Block 3"]
	direction TB
end
branch_0 --> block_3

</pre>`;
window.traces.IF["sched doIf [label]"] = `<pre class='graph'>graph TD
subgraph block_0["Block 0"]
	direction TB
	b0_1[\\"Finish"/]
	b0_14["eff_st_put__13 ctlxfer.put_IF"]
	b0_14 --> b0_1
end
phi_1 --> block_0
subgraph phi_1["Phi 1"]
	p1_13{{"Sϕ Codeptr Stack Trap Locals Globals Tables Memory Extra "}}
	p1_13{{"Sϕ Codeptr Stack Trap Locals Globals Tables Memory Extra "}}
end
block_2 --> phi_1
block_3 --> phi_1
subgraph block_2["Block 2"]
	direction TB
end
branch_0 --> block_2
subgraph block_3["Block 3"]
	direction TB
end
branch_0 --> block_3

</pre>`;
window.traces.IF["sched U32_equals [cond__6]"] = `<pre class='graph'>graph TD
subgraph block_0["Block 0"]
	direction TB
	b0_1[\\"Finish"/]
	b0_14["eff_st_put__13 ctlxfer.put_IF"]
	b0_14 --> b0_1
end
phi_1 --> block_0
subgraph phi_1["Phi 1"]
	p1_13{{"Sϕ Codeptr Stack Trap Locals Globals Tables Memory Extra "}}
	p1_13{{"Sϕ Codeptr Stack Trap Locals Globals Tables Memory Extra "}}
end
block_2 --> phi_1
block_3 --> phi_1
subgraph block_2["Block 2"]
	direction TB
end
branch_0 --> block_2
subgraph block_3["Block 3"]
	direction TB
end
branch_0 --> block_3

</pre>`;
window.traces.IF["sched doBranch [eff__7]"] = `<pre class='graph'>graph TD
subgraph block_0["Block 0"]
	direction TB
	b0_1[\\"Finish"/]
	b0_14["eff_st_put__13 ctlxfer.put_IF"]
	b0_14 --> b0_1
end
phi_1 --> block_0
subgraph phi_1["Phi 1"]
	p1_13{{"Sϕ Codeptr Stack Trap Locals Globals Tables Memory Extra "}}
	p1_13{{"Sϕ Codeptr Stack Trap Locals Globals Tables Memory Extra "}}
end
block_2 --> phi_1
block_3 --> phi_1
subgraph block_2["Block 2"]
	direction TB
end
branch_0 --> block_2
subgraph block_3["Block 3"]
	direction TB
end
branch_0 --> block_3

</pre>`;
window.traces.IF["sched doFallthru [eff__9]"] = `<pre class='graph'>graph TD
subgraph block_0["Block 0"]
	direction TB
	b0_1[\\"Finish"/]
	b0_14["eff_st_put__13 ctlxfer.put_IF"]
	b0_14 --> b0_1
end
phi_1 --> block_0
subgraph phi_1["Phi 1"]
	p1_13{{"Sϕ Codeptr Stack Trap Locals Globals Tables Memory Extra "}}
	p1_13{{"Sϕ Codeptr Stack Trap Locals Globals Tables Memory Extra "}}
end
block_2 --> phi_1
block_3 --> phi_1
subgraph block_2["Block 2"]
	direction TB
end
branch_0 --> block_2
subgraph block_3["Block 3"]
	direction TB
end
branch_0 --> block_3

</pre>`;
window.traces.IF["sched doIf [label]"] = `<pre class='graph'>graph TD
subgraph block_0["Block 0"]
	direction TB
	b0_1[\\"Finish"/]
	b0_14["eff_st_put__13 ctlxfer.put_IF"]
	b0_14 --> b0_1
end
phi_1 --> block_0
subgraph phi_1["Phi 1"]
	p1_13{{"Sϕ Codeptr Stack Trap Locals Globals Tables Memory Extra "}}
	p1_13{{"Sϕ Codeptr Stack Trap Locals Globals Tables Memory Extra "}}
end
block_2 --> phi_1
block_3 --> phi_1
subgraph block_2["Block 2"]
	direction TB
end
branch_0 --> block_2
subgraph block_3["Block 3"]
	direction TB
end
branch_0 --> block_3

</pre>`;
window.traces.IF["sched doIf [label]"] = `<pre class='graph'>graph TD
subgraph block_0["Block 0"]
	direction TB
	b0_1[\\"Finish"/]
	b0_14["eff_st_put__13 ctlxfer.put_IF"]
	b0_14 --> b0_1
end
phi_1 --> block_0
subgraph phi_1["Phi 1"]
	p1_13{{"Sϕ Codeptr Stack Trap Locals Globals Tables Memory Extra "}}
	p1_13{{"Sϕ Codeptr Stack Trap Locals Globals Tables Memory Extra "}}
end
block_2 --> phi_1
block_3 --> phi_1
subgraph block_2["Block 2"]
	direction TB
end
branch_0 --> block_2
subgraph block_3["Block 3"]
	direction TB
end
branch_0 --> block_3

</pre>`;
window.traces.IF["sched pop_u32 [cond]"] = `<pre class='graph'>graph TD
subgraph block_0["Block 0"]
	direction TB
	b0_1[\\"Finish"/]
	b0_14["eff_st_put__13 ctlxfer.put_IF"]
	b0_14 --> b0_1
end
phi_1 --> block_0
subgraph phi_1["Phi 1"]
	p1_13{{"Sϕ Codeptr Stack Trap Locals Globals Tables Memory Extra "}}
	p1_13{{"Sϕ Codeptr Stack Trap Locals Globals Tables Memory Extra "}}
end
block_2 --> phi_1
block_3 --> phi_1
subgraph block_2["Block 2"]
	direction TB
end
branch_0 --> block_2
subgraph block_3["Block 3"]
	direction TB
end
branch_0 --> block_3

</pre>`;
window.traces.IF["sched lift_u32 [abs__14]"] = `<pre class='graph'>graph TD
subgraph block_0["Block 0"]
	direction TB
	b0_1[\\"Finish"/]
	b0_14["eff_st_put__13 ctlxfer.put_IF"]
	b0_15["abs__14 lift_u32"]
	b0_14 --> b0_1
	b0_15 --> b0_14
end
phi_1 --> block_0
subgraph phi_1["Phi 1"]
	p1_13{{"Sϕ Codeptr Stack Trap Locals Globals Tables Memory Extra "}}
	p1_13{{"Sϕ Codeptr Stack Trap Locals Globals Tables Memory Extra "}}
end
block_2 --> phi_1
block_3 --> phi_1
subgraph block_2["Block 2"]
	direction TB
end
branch_0 --> block_2
subgraph block_3["Block 3"]
	direction TB
end
branch_0 --> block_3

</pre>`;
window.traces.IF["sched doIf [label]"] = `<pre class='graph'>graph TD
subgraph block_0["Block 0"]
	direction TB
	b0_1[\\"Finish"/]
	b0_14["eff_st_put__13 ctlxfer.put_IF"]
	b0_15["abs__14 lift_u32"]
	b0_14 --> b0_1
	b0_15 --> b0_14
end
phi_1 --> block_0
subgraph phi_1["Phi 1"]
	p1_13{{"Sϕ Codeptr Stack Trap Locals Globals Tables Memory Extra "}}
	p1_13{{"Sϕ Codeptr Stack Trap Locals Globals Tables Memory Extra "}}
end
block_2 --> phi_1
block_3 --> phi_1
subgraph block_2["Block 2"]
	direction TB
end
branch_0 --> block_2
subgraph block_3["Block 3"]
	direction TB
end
branch_0 --> block_3

</pre>`;
window.traces.IF["sched doIf [label]"] = `<pre class='graph'>graph TD
subgraph block_0["Block 0"]
	direction TB
	b0_1[\\"Finish"/]
	b0_14["eff_st_put__13 ctlxfer.put_IF"]
	b0_15["abs__14 lift_u32"]
	b0_14 --> b0_1
	b0_15 --> b0_14
end
phi_1 --> block_0
subgraph phi_1["Phi 1"]
	p1_13{{"Sϕ Codeptr Stack Trap Locals Globals Tables Memory Extra "}}
	p1_13{{"Sϕ Codeptr Stack Trap Locals Globals Tables Memory Extra "}}
end
block_2 --> phi_1
block_3 --> phi_1
subgraph block_2["Block 2"]
	direction TB
end
branch_0 --> block_2
subgraph block_3["Block 3"]
	direction TB
end
branch_0 --> block_3

</pre>`;
window.traces.IF["sched imm_readBlockType [bt]"] = `<pre class='graph'>graph TD
subgraph block_0["Block 0"]
	direction TB
	b0_1[\\"Finish"/]
	b0_14["eff_st_put__13 ctlxfer.put_IF"]
	b0_15["abs__14 lift_u32"]
	b0_14 --> b0_1
	b0_15 --> b0_14
end
phi_1 --> block_0
subgraph phi_1["Phi 1"]
	p1_13{{"Sϕ Codeptr Stack Trap Locals Globals Tables Memory Extra "}}
	p1_13{{"Sϕ Codeptr Stack Trap Locals Globals Tables Memory Extra "}}
end
block_2 --> phi_1
block_3 --> phi_1
subgraph block_2["Block 2"]
	direction TB
end
branch_0 --> block_2
subgraph block_3["Block 3"]
	direction TB
end
branch_0 --> block_3

</pre>`;
window.traces.IF["sched pop_u32 [cond]"] = `<pre class='graph'>graph TD
subgraph block_0["Block 0"]
	direction TB
	b0_1[\\"Finish"/]
	b0_14["eff_st_put__13 ctlxfer.put_IF"]
	b0_15["abs__14 lift_u32"]
	b0_14 --> b0_1
	b0_15 --> b0_14
end
phi_1 --> block_0
subgraph phi_1["Phi 1"]
	p1_13{{"Sϕ Codeptr Stack Trap Locals Globals Tables Memory Extra "}}
	p1_13{{"Sϕ Codeptr Stack Trap Locals Globals Tables Memory Extra "}}
end
block_2 --> phi_1
block_3 --> phi_1
subgraph block_2["Block 2"]
	direction TB
end
branch_0 --> block_2
subgraph block_3["Block 3"]
	direction TB
end
branch_0 --> block_3

</pre>`;
window.traces.IF["sched Start"] = `<pre class='graph'>graph TD
subgraph block_0["Block 0"]
	direction TB
	b0_1[\\"Finish"/]
	b0_14["eff_st_put__13 ctlxfer.put_IF"]
	b0_15["abs__14 lift_u32"]
	b0_14 --> b0_1
	b0_15 --> b0_14
end
phi_1 --> block_0
subgraph phi_1["Phi 1"]
	p1_13{{"Sϕ Codeptr Stack Trap Locals Globals Tables Memory Extra "}}
	p1_13{{"Sϕ Codeptr Stack Trap Locals Globals Tables Memory Extra "}}
end
block_2 --> phi_1
block_3 --> phi_1
subgraph block_2["Block 2"]
	direction TB
end
branch_0 --> block_2
subgraph block_3["Block 3"]
	direction TB
end
branch_0 --> block_3

</pre>`;
window.traces.IF["sched pop_u32 [cond]"] = `<pre class='graph'>graph TD
subgraph block_0["Block 0"]
	direction TB
	b0_1[\\"Finish"/]
	b0_14["eff_st_put__13 ctlxfer.put_IF"]
	b0_15["abs__14 lift_u32"]
	b0_14 --> b0_1
	b0_15 --> b0_14
end
phi_1 --> block_0
subgraph phi_1["Phi 1"]
	p1_13{{"Sϕ Codeptr Stack Trap Locals Globals Tables Memory Extra "}}
	p1_13{{"Sϕ Codeptr Stack Trap Locals Globals Tables Memory Extra "}}
end
block_2 --> phi_1
block_3 --> phi_1
subgraph block_2["Block 2"]
	direction TB
end
branch_0 --> block_2
subgraph block_3["Block 3"]
	direction TB
end
branch_0 --> block_3

</pre>`;
window.traces.IF["sched lift_u32 [abs__14]"] = `<pre class='graph'>graph TD
subgraph block_0["Block 0"]
	direction TB
	b0_1[\\"Finish"/]
	b0_14["eff_st_put__13 ctlxfer.put_IF"]
	b0_15["abs__14 lift_u32"]
	b0_14 --> b0_1
	b0_15 --> b0_14
end
phi_1 --> block_0
subgraph phi_1["Phi 1"]
	p1_13{{"Sϕ Codeptr Stack Trap Locals Globals Tables Memory Extra "}}
	p1_13{{"Sϕ Codeptr Stack Trap Locals Globals Tables Memory Extra "}}
end
block_2 --> phi_1
block_3 --> phi_1
subgraph block_2["Block 2"]
	direction TB
end
branch_0 --> block_2
subgraph block_3["Block 3"]
	direction TB
end
branch_0 --> block_3

</pre>`;
window.traces.IF["sched doIf [label]"] = `<pre class='graph'>graph TD
subgraph block_0["Block 0"]
	direction TB
	b0_1[\\"Finish"/]
	b0_14["eff_st_put__13 ctlxfer.put_IF"]
	b0_15["abs__14 lift_u32"]
	b0_14 --> b0_1
	b0_15 --> b0_14
end
phi_1 --> block_0
subgraph phi_1["Phi 1"]
	p1_13{{"Sϕ Codeptr Stack Trap Locals Globals Tables Memory Extra "}}
	p1_13{{"Sϕ Codeptr Stack Trap Locals Globals Tables Memory Extra "}}
end
block_2 --> phi_1
block_3 --> phi_1
subgraph block_2["Block 2"]
	direction TB
end
branch_0 --> block_2
subgraph block_3["Block 3"]
	direction TB
end
branch_0 --> block_3

</pre>`;
window.traces.IF["sched doIf [label]"] = `<pre class='graph'>graph TD
subgraph block_0["Block 0"]
	direction TB
	b0_1[\\"Finish"/]
	b0_14["eff_st_put__13 ctlxfer.put_IF"]
	b0_15["abs__14 lift_u32"]
	b0_14 --> b0_1
	b0_15 --> b0_14
end
phi_1 --> block_0
subgraph phi_1["Phi 1"]
	p1_13{{"Sϕ Codeptr Stack Trap Locals Globals Tables Memory Extra "}}
	p1_13{{"Sϕ Codeptr Stack Trap Locals Globals Tables Memory Extra "}}
end
block_2 --> phi_1
block_3 --> phi_1
subgraph block_2["Block 2"]
	direction TB
end
branch_0 --> block_2
subgraph block_3["Block 3"]
	direction TB
end
branch_0 --> block_3

</pre>`;
window.traces.IF["sched imm_readBlockType [bt]"] = `<pre class='graph'>graph TD
subgraph block_0["Block 0"]
	direction TB
	b0_1[\\"Finish"/]
	b0_14["eff_st_put__13 ctlxfer.put_IF"]
	b0_15["abs__14 lift_u32"]
	b0_14 --> b0_1
	b0_15 --> b0_14
end
phi_1 --> block_0
subgraph phi_1["Phi 1"]
	p1_13{{"Sϕ Codeptr Stack Trap Locals Globals Tables Memory Extra "}}
	p1_13{{"Sϕ Codeptr Stack Trap Locals Globals Tables Memory Extra "}}
end
block_2 --> phi_1
block_3 --> phi_1
subgraph block_2["Block 2"]
	direction TB
end
branch_0 --> block_2
subgraph block_3["Block 3"]
	direction TB
end
branch_0 --> block_3

</pre>`;
window.traces.IF["sched pop_u32 [cond]"] = `<pre class='graph'>graph TD
subgraph block_0["Block 0"]
	direction TB
	b0_1[\\"Finish"/]
	b0_14["eff_st_put__13 ctlxfer.put_IF"]
	b0_15["abs__14 lift_u32"]
	b0_14 --> b0_1
	b0_15 --> b0_14
end
phi_1 --> block_0
subgraph phi_1["Phi 1"]
	p1_13{{"Sϕ Codeptr Stack Trap Locals Globals Tables Memory Extra "}}
	p1_13{{"Sϕ Codeptr Stack Trap Locals Globals Tables Memory Extra "}}
end
block_2 --> phi_1
block_3 --> phi_1
subgraph block_2["Block 2"]
	direction TB
end
branch_0 --> block_2
subgraph block_3["Block 3"]
	direction TB
end
branch_0 --> block_3

</pre>`;
window.traces.IF["sched Start"] = `<pre class='graph'>graph TD
subgraph block_0["Block 0"]
	direction TB
	b0_1[\\"Finish"/]
	b0_14["eff_st_put__13 ctlxfer.put_IF"]
	b0_15["abs__14 lift_u32"]
	b0_14 --> b0_1
	b0_15 --> b0_14
end
phi_1 --> block_0
subgraph phi_1["Phi 1"]
	p1_13{{"Sϕ Codeptr Stack Trap Locals Globals Tables Memory Extra "}}
	p1_13{{"Sϕ Codeptr Stack Trap Locals Globals Tables Memory Extra "}}
end
block_2 --> phi_1
block_3 --> phi_1
subgraph block_2["Block 2"]
	direction TB
end
branch_0 --> block_2
subgraph block_3["Block 3"]
	direction TB
end
branch_0 --> block_3

</pre>`;
window.traces.IF["sched imm_readBlockType [bt]"] = `<pre class='graph'>graph TD
subgraph block_0["Block 0"]
	direction TB
	b0_1[\\"Finish"/]
	b0_14["eff_st_put__13 ctlxfer.put_IF"]
	b0_15["abs__14 lift_u32"]
	b0_14 --> b0_1
	b0_15 --> b0_14
end
phi_1 --> block_0
subgraph phi_1["Phi 1"]
	p1_13{{"Sϕ Codeptr Stack Trap Locals Globals Tables Memory Extra "}}
	p1_13{{"Sϕ Codeptr Stack Trap Locals Globals Tables Memory Extra "}}
end
block_2 --> phi_1
block_3 --> phi_1
subgraph block_2["Block 2"]
	direction TB
end
branch_0 --> block_2
subgraph block_3["Block 3"]
	direction TB
end
branch_0 --> block_3

</pre>`;
window.traces.IF["sched pop_u32 [cond]"] = `<pre class='graph'>graph TD
subgraph block_0["Block 0"]
	direction TB
	b0_1[\\"Finish"/]
	b0_14["eff_st_put__13 ctlxfer.put_IF"]
	b0_15["abs__14 lift_u32"]
	b0_14 --> b0_1
	b0_15 --> b0_14
end
phi_1 --> block_0
subgraph phi_1["Phi 1"]
	p1_13{{"Sϕ Codeptr Stack Trap Locals Globals Tables Memory Extra "}}
	p1_13{{"Sϕ Codeptr Stack Trap Locals Globals Tables Memory Extra "}}
end
block_2 --> phi_1
block_3 --> phi_1
subgraph block_2["Block 2"]
	direction TB
end
branch_0 --> block_2
subgraph block_3["Block 3"]
	direction TB
end
branch_0 --> block_3

</pre>`;
window.traces.IF["sched Start"] = `<pre class='graph'>graph TD
subgraph block_0["Block 0"]
	direction TB
	b0_1[\\"Finish"/]
	b0_14["eff_st_put__13 ctlxfer.put_IF"]
	b0_15["abs__14 lift_u32"]
	b0_14 --> b0_1
	b0_15 --> b0_14
end
phi_1 --> block_0
subgraph phi_1["Phi 1"]
	p1_13{{"Sϕ Codeptr Stack Trap Locals Globals Tables Memory Extra "}}
	p1_13{{"Sϕ Codeptr Stack Trap Locals Globals Tables Memory Extra "}}
end
block_2 --> phi_1
block_3 --> phi_1
subgraph block_2["Block 2"]
	direction TB
end
branch_0 --> block_2
subgraph block_3["Block 3"]
	direction TB
end
branch_0 --> block_3

</pre>`;
window.traces.IF["sched Start"] = `<pre class='graph'>graph TD
subgraph block_0["Block 0"]
	direction TB
	b0_1[\\"Finish"/]
	b0_14["eff_st_put__13 ctlxfer.put_IF"]
	b0_15["abs__14 lift_u32"]
	b0_14 --> b0_1
	b0_15 --> b0_14
end
phi_1 --> block_0
subgraph phi_1["Phi 1"]
	p1_13{{"Sϕ Codeptr Stack Trap Locals Globals Tables Memory Extra "}}
	p1_13{{"Sϕ Codeptr Stack Trap Locals Globals Tables Memory Extra "}}
end
block_2 --> phi_1
block_3 --> phi_1
subgraph block_2["Block 2"]
	direction TB
end
branch_0 --> block_2
subgraph block_3["Block 3"]
	direction TB
end
branch_0 --> block_3

</pre>`;
window.traces.IF["sched 0"] = `<pre class='graph'>graph TD
subgraph block_0["Block 0"]
	direction TB
	b0_1[\\"Finish"/]
	b0_14["eff_st_put__13 ctlxfer.put_IF"]
	b0_15["abs__14 lift_u32"]
	b0_14 --> b0_1
	b0_15 --> b0_14
end
phi_1 --> block_0
subgraph phi_1["Phi 1"]
	p1_13{{"Sϕ Codeptr Stack Trap Locals Globals Tables Memory Extra "}}
	p1_13{{"Sϕ Codeptr Stack Trap Locals Globals Tables Memory Extra "}}
end
block_2 --> phi_1
block_3 --> phi_1
subgraph block_2["Block 2"]
	direction TB
end
branch_0 --> block_2
subgraph block_3["Block 3"]
	direction TB
end
branch_0 --> block_3

</pre>`;
window.traces.IF["sched imm_readBlockType [bt]"] = `<pre class='graph'>graph TD
subgraph block_0["Block 0"]
	direction TB
	b0_1[\\"Finish"/]
	b0_14["eff_st_put__13 ctlxfer.put_IF"]
	b0_15["abs__14 lift_u32"]
	b0_14 --> b0_1
	b0_15 --> b0_14
end
phi_1 --> block_0
subgraph phi_1["Phi 1"]
	p1_13{{"Sϕ Codeptr Stack Trap Locals Globals Tables Memory Extra "}}
	p1_13{{"Sϕ Codeptr Stack Trap Locals Globals Tables Memory Extra "}}
end
block_2 --> phi_1
block_3 --> phi_1
subgraph block_2["Block 2"]
	direction TB
end
branch_0 --> block_2
subgraph block_3["Block 3"]
	direction TB
end
branch_0 --> block_3

</pre>`;
window.traces.IF["sched pop_u32 [cond]"] = `<pre class='graph'>graph TD
subgraph block_0["Block 0"]
	direction TB
	b0_1[\\"Finish"/]
	b0_14["eff_st_put__13 ctlxfer.put_IF"]
	b0_15["abs__14 lift_u32"]
	b0_14 --> b0_1
	b0_15 --> b0_14
end
phi_1 --> block_0
subgraph phi_1["Phi 1"]
	p1_13{{"Sϕ Codeptr Stack Trap Locals Globals Tables Memory Extra "}}
	p1_13{{"Sϕ Codeptr Stack Trap Locals Globals Tables Memory Extra "}}
end
block_2 --> phi_1
block_3 --> phi_1
subgraph block_2["Block 2"]
	direction TB
end
branch_0 --> block_2
subgraph block_3["Block 3"]
	direction TB
end
branch_0 --> block_3

</pre>`;
window.traces.IF["sched Start"] = `<pre class='graph'>graph TD
subgraph block_0["Block 0"]
	direction TB
	b0_1[\\"Finish"/]
	b0_14["eff_st_put__13 ctlxfer.put_IF"]
	b0_15["abs__14 lift_u32"]
	b0_14 --> b0_1
	b0_15 --> b0_14
end
phi_1 --> block_0
subgraph phi_1["Phi 1"]
	p1_13{{"Sϕ Codeptr Stack Trap Locals Globals Tables Memory Extra "}}
	p1_13{{"Sϕ Codeptr Stack Trap Locals Globals Tables Memory Extra "}}
end
block_2 --> phi_1
block_3 --> phi_1
subgraph block_2["Block 2"]
	direction TB
end
branch_0 --> block_2
subgraph block_3["Block 3"]
	direction TB
end
branch_0 --> block_3

</pre>`;
window.traces.IF["sched imm_readBlockType [bt]"] = `<pre class='graph'>graph TD
subgraph block_0["Block 0"]
	direction TB
	b0_1[\\"Finish"/]
	b0_14["eff_st_put__13 ctlxfer.put_IF"]
	b0_15["abs__14 lift_u32"]
	b0_14 --> b0_1
	b0_15 --> b0_14
end
phi_1 --> block_0
subgraph phi_1["Phi 1"]
	p1_13{{"Sϕ Codeptr Stack Trap Locals Globals Tables Memory Extra "}}
	p1_13{{"Sϕ Codeptr Stack Trap Locals Globals Tables Memory Extra "}}
end
block_2 --> phi_1
block_3 --> phi_1
subgraph block_2["Block 2"]
	direction TB
end
branch_0 --> block_2
subgraph block_3["Block 3"]
	direction TB
end
branch_0 --> block_3

</pre>`;
window.traces.IF["sched pop_u32 [cond]"] = `<pre class='graph'>graph TD
subgraph block_0["Block 0"]
	direction TB
	b0_1[\\"Finish"/]
	b0_14["eff_st_put__13 ctlxfer.put_IF"]
	b0_15["abs__14 lift_u32"]
	b0_14 --> b0_1
	b0_15 --> b0_14
end
phi_1 --> block_0
subgraph phi_1["Phi 1"]
	p1_13{{"Sϕ Codeptr Stack Trap Locals Globals Tables Memory Extra "}}
	p1_13{{"Sϕ Codeptr Stack Trap Locals Globals Tables Memory Extra "}}
end
block_2 --> phi_1
block_3 --> phi_1
subgraph block_2["Block 2"]
	direction TB
end
branch_0 --> block_2
subgraph block_3["Block 3"]
	direction TB
end
branch_0 --> block_3

</pre>`;
window.traces.IF["sched Start"] = `<pre class='graph'>graph TD
subgraph block_0["Block 0"]
	direction TB
	b0_1[\\"Finish"/]
	b0_14["eff_st_put__13 ctlxfer.put_IF"]
	b0_15["abs__14 lift_u32"]
	b0_14 --> b0_1
	b0_15 --> b0_14
end
phi_1 --> block_0
subgraph phi_1["Phi 1"]
	p1_13{{"Sϕ Codeptr Stack Trap Locals Globals Tables Memory Extra "}}
	p1_13{{"Sϕ Codeptr Stack Trap Locals Globals Tables Memory Extra "}}
end
block_2 --> phi_1
block_3 --> phi_1
subgraph block_2["Block 2"]
	direction TB
end
branch_0 --> block_2
subgraph block_3["Block 3"]
	direction TB
end
branch_0 --> block_3

</pre>`;
window.traces.IF["sched Start"] = `<pre class='graph'>graph TD
subgraph block_0["Block 0"]
	direction TB
	b0_1[\\"Finish"/]
	b0_14["eff_st_put__13 ctlxfer.put_IF"]
	b0_15["abs__14 lift_u32"]
	b0_14 --> b0_1
	b0_15 --> b0_14
end
phi_1 --> block_0
subgraph phi_1["Phi 1"]
	p1_13{{"Sϕ Codeptr Stack Trap Locals Globals Tables Memory Extra "}}
	p1_13{{"Sϕ Codeptr Stack Trap Locals Globals Tables Memory Extra "}}
end
block_2 --> phi_1
block_3 --> phi_1
subgraph block_2["Block 2"]
	direction TB
end
branch_0 --> block_2
subgraph block_3["Block 3"]
	direction TB
end
branch_0 --> block_3

</pre>`;
window.traces.IF["sched Start"] = `<pre class='graph'>graph TD
subgraph block_0["Block 0"]
	direction TB
	b0_1[\\"Finish"/]
	b0_14["eff_st_put__13 ctlxfer.put_IF"]
	b0_15["abs__14 lift_u32"]
	b0_14 --> b0_1
	b0_15 --> b0_14
end
phi_1 --> block_0
subgraph phi_1["Phi 1"]
	p1_13{{"Sϕ Codeptr Stack Trap Locals Globals Tables Memory Extra "}}
	p1_13{{"Sϕ Codeptr Stack Trap Locals Globals Tables Memory Extra "}}
end
block_2 --> phi_1
block_3 --> phi_1
subgraph block_2["Block 2"]
	direction TB
end
branch_0 --> block_2
subgraph block_3["Block 3"]
	direction TB
end
branch_0 --> block_3

</pre>`;
window.traces.IF["sched Start"] = `<pre class='graph'>graph TD
subgraph block_0["Block 0"]
	direction TB
	b0_1[\\"Finish"/]
	b0_14["eff_st_put__13 ctlxfer.put_IF"]
	b0_15["abs__14 lift_u32"]
	b0_14 --> b0_1
	b0_15 --> b0_14
end
phi_1 --> block_0
subgraph phi_1["Phi 1"]
	p1_13{{"Sϕ Codeptr Stack Trap Locals Globals Tables Memory Extra "}}
	p1_13{{"Sϕ Codeptr Stack Trap Locals Globals Tables Memory Extra "}}
end
block_2 --> phi_1
block_3 --> phi_1
subgraph block_2["Block 2"]
	direction TB
end
branch_0 --> block_2
subgraph block_3["Block 3"]
	direction TB
end
branch_0 --> block_3

</pre>`;
window.traces.IF["sched 0"] = `<pre class='graph'>graph TD
subgraph block_0["Block 0"]
	direction TB
	b0_1[\\"Finish"/]
	b0_14["eff_st_put__13 ctlxfer.put_IF"]
	b0_15["abs__14 lift_u32"]
	b0_14 --> b0_1
	b0_15 --> b0_14
end
phi_1 --> block_0
subgraph phi_1["Phi 1"]
	p1_13{{"Sϕ Codeptr Stack Trap Locals Globals Tables Memory Extra "}}
	p1_13{{"Sϕ Codeptr Stack Trap Locals Globals Tables Memory Extra "}}
end
block_2 --> phi_1
block_3 --> phi_1
subgraph block_2["Block 2"]
	direction TB
end
branch_0 --> block_2
subgraph block_3["Block 3"]
	direction TB
end
branch_0 --> block_3

</pre>`;
window.traces.IF["sched imm_readBlockType [bt]"] = `<pre class='graph'>graph TD
subgraph block_0["Block 0"]
	direction TB
	b0_1[\\"Finish"/]
	b0_14["eff_st_put__13 ctlxfer.put_IF"]
	b0_15["abs__14 lift_u32"]
	b0_14 --> b0_1
	b0_15 --> b0_14
end
phi_1 --> block_0
subgraph phi_1["Phi 1"]
	p1_13{{"Sϕ Codeptr Stack Trap Locals Globals Tables Memory Extra "}}
	p1_13{{"Sϕ Codeptr Stack Trap Locals Globals Tables Memory Extra "}}
end
block_2 --> phi_1
block_3 --> phi_1
subgraph block_2["Block 2"]
	direction TB
end
branch_0 --> block_2
subgraph block_3["Block 3"]
	direction TB
end
branch_0 --> block_3

</pre>`;
window.traces.IF["sched pop_u32 [cond]"] = `<pre class='graph'>graph TD
subgraph block_0["Block 0"]
	direction TB
	b0_1[\\"Finish"/]
	b0_14["eff_st_put__13 ctlxfer.put_IF"]
	b0_15["abs__14 lift_u32"]
	b0_14 --> b0_1
	b0_15 --> b0_14
end
phi_1 --> block_0
subgraph phi_1["Phi 1"]
	p1_13{{"Sϕ Codeptr Stack Trap Locals Globals Tables Memory Extra "}}
	p1_13{{"Sϕ Codeptr Stack Trap Locals Globals Tables Memory Extra "}}
end
block_2 --> phi_1
block_3 --> phi_1
subgraph block_2["Block 2"]
	direction TB
end
branch_0 --> block_2
subgraph block_3["Block 3"]
	direction TB
end
branch_0 --> block_3

</pre>`;
window.traces.IF["sched Start"] = `<pre class='graph'>graph TD
subgraph block_0["Block 0"]
	direction TB
	b0_1[\\"Finish"/]
	b0_14["eff_st_put__13 ctlxfer.put_IF"]
	b0_15["abs__14 lift_u32"]
	b0_14 --> b0_1
	b0_15 --> b0_14
end
phi_1 --> block_0
subgraph phi_1["Phi 1"]
	p1_13{{"Sϕ Codeptr Stack Trap Locals Globals Tables Memory Extra "}}
	p1_13{{"Sϕ Codeptr Stack Trap Locals Globals Tables Memory Extra "}}
end
block_2 --> phi_1
block_3 --> phi_1
subgraph block_2["Block 2"]
	direction TB
end
branch_0 --> block_2
subgraph block_3["Block 3"]
	direction TB
end
branch_0 --> block_3

</pre>`;
window.traces.IF["sched imm_readBlockType [bt]"] = `<pre class='graph'>graph TD
subgraph block_0["Block 0"]
	direction TB
	b0_1[\\"Finish"/]
	b0_14["eff_st_put__13 ctlxfer.put_IF"]
	b0_15["abs__14 lift_u32"]
	b0_14 --> b0_1
	b0_15 --> b0_14
end
phi_1 --> block_0
subgraph phi_1["Phi 1"]
	p1_13{{"Sϕ Codeptr Stack Trap Locals Globals Tables Memory Extra "}}
	p1_13{{"Sϕ Codeptr Stack Trap Locals Globals Tables Memory Extra "}}
end
block_2 --> phi_1
block_3 --> phi_1
subgraph block_2["Block 2"]
	direction TB
end
branch_0 --> block_2
subgraph block_3["Block 3"]
	direction TB
end
branch_0 --> block_3

</pre>`;
window.traces.IF["sched pop_u32 [cond]"] = `<pre class='graph'>graph TD
subgraph block_0["Block 0"]
	direction TB
	b0_1[\\"Finish"/]
	b0_14["eff_st_put__13 ctlxfer.put_IF"]
	b0_15["abs__14 lift_u32"]
	b0_14 --> b0_1
	b0_15 --> b0_14
end
phi_1 --> block_0
subgraph phi_1["Phi 1"]
	p1_13{{"Sϕ Codeptr Stack Trap Locals Globals Tables Memory Extra "}}
	p1_13{{"Sϕ Codeptr Stack Trap Locals Globals Tables Memory Extra "}}
end
block_2 --> phi_1
block_3 --> phi_1
subgraph block_2["Block 2"]
	direction TB
end
branch_0 --> block_2
subgraph block_3["Block 3"]
	direction TB
end
branch_0 --> block_3

</pre>`;
window.traces.IF["sched Start"] = `<pre class='graph'>graph TD
subgraph block_0["Block 0"]
	direction TB
	b0_1[\\"Finish"/]
	b0_14["eff_st_put__13 ctlxfer.put_IF"]
	b0_15["abs__14 lift_u32"]
	b0_14 --> b0_1
	b0_15 --> b0_14
end
phi_1 --> block_0
subgraph phi_1["Phi 1"]
	p1_13{{"Sϕ Codeptr Stack Trap Locals Globals Tables Memory Extra "}}
	p1_13{{"Sϕ Codeptr Stack Trap Locals Globals Tables Memory Extra "}}
end
block_2 --> phi_1
block_3 --> phi_1
subgraph block_2["Block 2"]
	direction TB
end
branch_0 --> block_2
subgraph block_3["Block 3"]
	direction TB
end
branch_0 --> block_3

</pre>`;
window.traces.IF["sched Start"] = `<pre class='graph'>graph TD
subgraph block_0["Block 0"]
	direction TB
	b0_1[\\"Finish"/]
	b0_14["eff_st_put__13 ctlxfer.put_IF"]
	b0_15["abs__14 lift_u32"]
	b0_14 --> b0_1
	b0_15 --> b0_14
end
phi_1 --> block_0
subgraph phi_1["Phi 1"]
	p1_13{{"Sϕ Codeptr Stack Trap Locals Globals Tables Memory Extra "}}
	p1_13{{"Sϕ Codeptr Stack Trap Locals Globals Tables Memory Extra "}}
end
block_2 --> phi_1
block_3 --> phi_1
subgraph block_2["Block 2"]
	direction TB
end
branch_0 --> block_2
subgraph block_3["Block 3"]
	direction TB
end
branch_0 --> block_3

</pre>`;
window.traces.IF["sched Start"] = `<pre class='graph'>graph TD
subgraph block_0["Block 0"]
	direction TB
	b0_1[\\"Finish"/]
	b0_14["eff_st_put__13 ctlxfer.put_IF"]
	b0_15["abs__14 lift_u32"]
	b0_14 --> b0_1
	b0_15 --> b0_14
end
phi_1 --> block_0
subgraph phi_1["Phi 1"]
	p1_13{{"Sϕ Codeptr Stack Trap Locals Globals Tables Memory Extra "}}
	p1_13{{"Sϕ Codeptr Stack Trap Locals Globals Tables Memory Extra "}}
end
block_2 --> phi_1
block_3 --> phi_1
subgraph block_2["Block 2"]
	direction TB
end
branch_0 --> block_2
subgraph block_3["Block 3"]
	direction TB
end
branch_0 --> block_3

</pre>`;
window.traces.IF["sched Start"] = `<pre class='graph'>graph TD
subgraph block_0["Block 0"]
	direction TB
	b0_1[\\"Finish"/]
	b0_14["eff_st_put__13 ctlxfer.put_IF"]
	b0_15["abs__14 lift_u32"]
	b0_14 --> b0_1
	b0_15 --> b0_14
end
phi_1 --> block_0
subgraph phi_1["Phi 1"]
	p1_13{{"Sϕ Codeptr Stack Trap Locals Globals Tables Memory Extra "}}
	p1_13{{"Sϕ Codeptr Stack Trap Locals Globals Tables Memory Extra "}}
end
block_2 --> phi_1
block_3 --> phi_1
subgraph block_2["Block 2"]
	direction TB
end
branch_0 --> block_2
subgraph block_3["Block 3"]
	direction TB
end
branch_0 --> block_3

</pre>`;
window.traces.IF["sched Start"] = `<pre class='graph'>graph TD
subgraph block_0["Block 0"]
	direction TB
	b0_1[\\"Finish"/]
	b0_14["eff_st_put__13 ctlxfer.put_IF"]
	b0_15["abs__14 lift_u32"]
	b0_14 --> b0_1
	b0_15 --> b0_14
end
phi_1 --> block_0
subgraph phi_1["Phi 1"]
	p1_13{{"Sϕ Codeptr Stack Trap Locals Globals Tables Memory Extra "}}
	p1_13{{"Sϕ Codeptr Stack Trap Locals Globals Tables Memory Extra "}}
end
block_2 --> phi_1
block_3 --> phi_1
subgraph block_2["Block 2"]
	direction TB
end
branch_0 --> block_2
subgraph block_3["Block 3"]
	direction TB
end
branch_0 --> block_3

</pre>`;
window.traces.IF["sched Start"] = `<pre class='graph'>graph TD
subgraph block_0["Block 0"]
	direction TB
	b0_1[\\"Finish"/]
	b0_14["eff_st_put__13 ctlxfer.put_IF"]
	b0_15["abs__14 lift_u32"]
	b0_14 --> b0_1
	b0_15 --> b0_14
end
phi_1 --> block_0
subgraph phi_1["Phi 1"]
	p1_13{{"Sϕ Codeptr Stack Trap Locals Globals Tables Memory Extra "}}
	p1_13{{"Sϕ Codeptr Stack Trap Locals Globals Tables Memory Extra "}}
end
block_2 --> phi_1
block_3 --> phi_1
subgraph block_2["Block 2"]
	direction TB
end
branch_0 --> block_2
subgraph block_3["Block 3"]
	direction TB
end
branch_0 --> block_3

</pre>`;
window.traces.IF["sched Start"] = `<pre class='graph'>graph TD
subgraph block_0["Block 0"]
	direction TB
	b0_1[\\"Finish"/]
	b0_14["eff_st_put__13 ctlxfer.put_IF"]
	b0_15["abs__14 lift_u32"]
	b0_14 --> b0_1
	b0_15 --> b0_14
end
phi_1 --> block_0
subgraph phi_1["Phi 1"]
	p1_13{{"Sϕ Codeptr Stack Trap Locals Globals Tables Memory Extra "}}
	p1_13{{"Sϕ Codeptr Stack Trap Locals Globals Tables Memory Extra "}}
end
block_2 --> phi_1
block_3 --> phi_1
subgraph block_2["Block 2"]
	direction TB
end
branch_0 --> block_2
subgraph block_3["Block 3"]
	direction TB
end
branch_0 --> block_3

</pre>`;
window.traces.IF["sched Start"] = `<pre class='graph'>graph TD
subgraph block_0["Block 0"]
	direction TB
	b0_1[\\"Finish"/]
	b0_14["eff_st_put__13 ctlxfer.put_IF"]
	b0_15["abs__14 lift_u32"]
	b0_14 --> b0_1
	b0_15 --> b0_14
end
phi_1 --> block_0
subgraph phi_1["Phi 1"]
	p1_13{{"Sϕ Codeptr Stack Trap Locals Globals Tables Memory Extra "}}
	p1_13{{"Sϕ Codeptr Stack Trap Locals Globals Tables Memory Extra "}}
end
block_2 --> phi_1
block_3 --> phi_1
subgraph block_2["Block 2"]
	direction TB
end
branch_0 --> block_2
subgraph block_3["Block 3"]
	direction TB
end
branch_0 --> block_3

</pre>`;
window.traces.IF["sched Start"] = `<pre class='graph'>graph TD
subgraph block_0["Block 0"]
	direction TB
	b0_1[\\"Finish"/]
	b0_14["eff_st_put__13 ctlxfer.put_IF"]
	b0_15["abs__14 lift_u32"]
	b0_14 --> b0_1
	b0_15 --> b0_14
end
phi_1 --> block_0
subgraph phi_1["Phi 1"]
	p1_13{{"Sϕ Codeptr Stack Trap Locals Globals Tables Memory Extra "}}
	p1_13{{"Sϕ Codeptr Stack Trap Locals Globals Tables Memory Extra "}}
end
block_2 --> phi_1
block_3 --> phi_1
subgraph block_2["Block 2"]
	direction TB
end
branch_0 --> block_2
subgraph block_3["Block 3"]
	direction TB
end
branch_0 --> block_3

</pre>`;
window.traces.IF["sched Start"] = `<pre class='graph'>graph TD
subgraph block_0["Block 0"]
	direction TB
	b0_1[\\"Finish"/]
	b0_14["eff_st_put__13 ctlxfer.put_IF"]
	b0_15["abs__14 lift_u32"]
	b0_14 --> b0_1
	b0_15 --> b0_14
end
phi_1 --> block_0
subgraph phi_1["Phi 1"]
	p1_13{{"Sϕ Codeptr Stack Trap Locals Globals Tables Memory Extra "}}
	p1_13{{"Sϕ Codeptr Stack Trap Locals Globals Tables Memory Extra "}}
end
block_2 --> phi_1
block_3 --> phi_1
subgraph block_2["Block 2"]
	direction TB
end
branch_0 --> block_2
subgraph block_3["Block 3"]
	direction TB
end
branch_0 --> block_3

</pre>`;
window.traces.IF["sched Start"] = `<pre class='graph'>graph TD
subgraph block_0["Block 0"]
	direction TB
	b0_1[\\"Finish"/]
	b0_14["eff_st_put__13 ctlxfer.put_IF"]
	b0_15["abs__14 lift_u32"]
	b0_14 --> b0_1
	b0_15 --> b0_14
end
phi_1 --> block_0
subgraph phi_1["Phi 1"]
	p1_13{{"Sϕ Codeptr Stack Trap Locals Globals Tables Memory Extra "}}
	p1_13{{"Sϕ Codeptr Stack Trap Locals Globals Tables Memory Extra "}}
end
block_2 --> phi_1
block_3 --> phi_1
subgraph block_2["Block 2"]
	direction TB
end
branch_0 --> block_2
subgraph block_3["Block 3"]
	direction TB
end
branch_0 --> block_3

</pre>`;
window.traces.IF["sched Start"] = `<pre class='graph'>graph TD
subgraph block_0["Block 0"]
	direction TB
	b0_1[\\"Finish"/]
	b0_14["eff_st_put__13 ctlxfer.put_IF"]
	b0_15["abs__14 lift_u32"]
	b0_14 --> b0_1
	b0_15 --> b0_14
end
phi_1 --> block_0
subgraph phi_1["Phi 1"]
	p1_13{{"Sϕ Codeptr Stack Trap Locals Globals Tables Memory Extra "}}
	p1_13{{"Sϕ Codeptr Stack Trap Locals Globals Tables Memory Extra "}}
end
block_2 --> phi_1
block_3 --> phi_1
subgraph block_2["Block 2"]
	direction TB
end
branch_0 --> block_2
subgraph block_3["Block 3"]
	direction TB
end
branch_0 --> block_3

</pre>`;
window.traces.IF["sched Start"] = `<pre class='graph'>graph TD
subgraph block_0["Block 0"]
	direction TB
	b0_1[\\"Finish"/]
	b0_14["eff_st_put__13 ctlxfer.put_IF"]
	b0_15["abs__14 lift_u32"]
	b0_14 --> b0_1
	b0_15 --> b0_14
end
phi_1 --> block_0
subgraph phi_1["Phi 1"]
	p1_13{{"Sϕ Codeptr Stack Trap Locals Globals Tables Memory Extra "}}
	p1_13{{"Sϕ Codeptr Stack Trap Locals Globals Tables Memory Extra "}}
end
block_2 --> phi_1
block_3 --> phi_1
subgraph block_2["Block 2"]
	direction TB
end
branch_0 --> block_2
subgraph block_3["Block 3"]
	direction TB
end
branch_0 --> block_3

</pre>`;
window.traces.IF["schedulerMermaid"] = `<pre class='graph'>graph TD
subgraph block_0["Block 0"]
	direction TB
	b0_15["abs__14 lift_u32"]
	b0_14["eff_st_put__13 ctlxfer.put_IF"]
	b0_1[\\"Finish"/]
	b0_15 --> b0_14
	b0_14 --> b0_1
end
phi_1 --> block_0
subgraph phi_1["Phi 1"]
	p1_13{{"Sϕ Codeptr Stack Trap Locals Globals Tables Memory Extra "}}
	p1_13{{"Sϕ Codeptr Stack Trap Locals Globals Tables Memory Extra "}}
end
block_2 --> phi_1
block_3 --> phi_1
subgraph block_2["Block 2"]
	direction TB
end
branch_0 --> block_2
subgraph block_3["Block 3"]
	direction TB
end
branch_0 --> block_3

</pre>`;
window.traces.IF["unLEM"] = `<pre class='graph'>---
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
	20 --> 13
	22 --> 13
	21 --> 13
	21{{"Sϕ Codeptr Stack Trap Locals Globals Tables Memory Extra "}}
	18 --> 21
	12 --> 21
	10 --> 21
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
	18["mt__15 U32_maybeTrue"]
	9 --> 18
	9["cond__6 U32_equals"]
	4 --> 9
	15 --> 9
	15["abs__14 lift_u32"]
	7 --> 15
	7["arg__11 0"]
	22["eff_merge__18 merge"]
	12 --> 22
	10 --> 22
	20["mb__17 bool.&&"]
	18 --> 20
	19 --> 20
	19["mf__16 U32_maybeFalse"]
	9 --> 19
</pre>`;
window.traces.IF["unlem_schedule"] = `<pre class=''>def bt = imm_readBlockType();
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
window.traces.IF["unlem_scheduler"] = `<pre class='graph'>graph TD
subgraph block_5["Block 5"]
	direction TB
	b5_15["abs__14 lift_u32"]
	b5_14["eff_st_put__13 ctlxfer.put_IF"]
	b5_1[\\"Finish"/]
	b5_15 --> b5_14
	b5_14 --> b5_1
end
phi_1 --> block_5
subgraph phi_1["Phi 1"]
	p1_13{{"Sϕ Codeptr Stack Trap Locals Globals Tables Memory Extra "}}
	p1_13{{"Sϕ Codeptr Stack Trap Locals Globals Tables Memory Extra "}}
end
block_2 --> phi_1
block_3 --> phi_1
subgraph block_2["Block 2"]
	direction TB
end
branch_0 --> block_2
subgraph branch_0["Branch 0"]
	br0_20["mb__17 bool.&&"]

end
block_4 --> branch_0
subgraph block_4["Block 4"]
	direction TB
	b4_19["mf__16 U32_maybeFalse"]
	b4_20["mb__17 bool.&&"]
	b4_22["eff_merge__18 merge"]
	b4_19 --> b4_20
	b4_20 --> b4_22
end
phi_6 --> block_4
subgraph phi_6["Phi 6"]
	p6_21{{"Sϕ Codeptr Stack Trap Locals Globals Tables Memory Extra "}}
	p6_21{{"Sϕ Codeptr Stack Trap Locals Globals Tables Memory Extra "}}
end
block_7 --> phi_6
block_8 --> phi_6
subgraph block_7["Block 7"]
	direction TB
end
branch_5 --> block_7
subgraph block_8["Block 8"]
	direction TB
end
branch_5 --> block_8
subgraph block_3["Block 3"]
	direction TB
end
branch_0 --> block_3

</pre>`;
window.traces.IF["unlem_pretty"] = `<pre class=''>def bt = imm_readBlockType();
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
window.traces.IF["constUnLEM"] = `<pre class='graph'>---
config:
  layout: elk
---
graph TD
	1[\\"Finish"/]
	13 -. Codeptr Stack Trap Locals Globals Tables Memory .-> 1
	14 -. Extra .-> 1
	14["eff_st_put__13 ctlxfer.put_IF"]
	6 --> 14
	22 -. Extra .-> 14
	22["eff_merge__18 merge"]
	12 --> 22
	10 --> 22
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
	13["eff_merge__18 merge"]
	12 --> 13
	10 --> 13
</pre>`;
window.traces.IF["chooseMerge"] = `<pre class='graph'>---
config:
  layout: elk
---
graph TD
	1[\\"Finish"/]
	13 -. Codeptr Stack Trap Locals Globals Tables Memory .-> 1
	14 -. Extra .-> 1
	14["eff_st_put__13 ctlxfer.put_IF"]
	6 --> 14
	22 -. Extra .-> 14
	22["eff_merge__18 merge"]
	12 --> 22
	10 --> 22
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
	13["eff_merge__18 merge"]
	12 --> 13
	10 --> 13
</pre>`;
window.traces.IF["scheduled"] = `<pre class=''>def bt = imm_readBlockType();
def cond = pop_u32();
def label = doIf(bt);
def eff__7 = doBranch(label);
def eff__9 = doFallthru();
def eff_merge__18 = merge(eff__7, eff__9);
def eff_merge__18 = merge(eff__7, eff__9);
def eff_st_put__13 = ctlxfer.put_IF(label);
</pre>`;
window.traces.IF["pretty"] = `<pre class=''>def bt = imm_readBlockType();
def cond = pop_u32();
def label = doIf(bt);
doBranch(label);
doFallthru();
ctlxfer.put_IF(label);
</pre>`;
window.traces["ELSE"] = {}
window.traces.ELSE["parsed"] = `<pre class=''>def label = doElse();
def arg__20 = (label);
def eff__19 = doBranch(arg__20);
</pre>`;
window.traces.ELSE["raw"] = `<pre class='graph'>---
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
window.traces.ELSE["overloadOps"] = `<pre class='graph'>---
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
window.traces.ELSE["addAbstractions"] = `<pre class='graph'>---
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
window.traces.ELSE["schedulerMermaid"] = `<pre class='graph'>graph TD
subgraph block_10["Block 10"]
	direction TB
	b10_0[/"Start"\\]
	b10_3["label doElse"]
	b10_5["eff__19 doBranch"]
	b10_6["eff_st_put__21 ctlxfer.put_ELSE"]
	b10_1[\\"Finish"/]
	b10_0 --> b10_3
	b10_3 --> b10_5
	b10_5 --> b10_6
	b10_6 --> b10_1
end

</pre>`;
window.traces.ELSE["unLEM"] = `<pre class='graph'>---
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
window.traces.ELSE["unlem_schedule"] = `<pre class=''>def label = doElse();
def eff__19 = doBranch(label);
def eff_st_put__21 = ctlxfer.put_ELSE(label);
</pre>`;
window.traces.ELSE["unlem_scheduler"] = `<pre class='graph'>graph TD
subgraph block_0["Block 0"]
	direction TB
	b0_0[/"Start"\\]
	b0_3["label doElse"]
	b0_5["eff__19 doBranch"]
	b0_6["eff_st_put__21 ctlxfer.put_ELSE"]
	b0_1[\\"Finish"/]
	b0_0 --> b0_3
	b0_3 --> b0_5
	b0_5 --> b0_6
	b0_6 --> b0_1
end

</pre>`;
window.traces.ELSE["unlem_pretty"] = `<pre class=''>def label = doElse();
doBranch(label);
ctlxfer.put_ELSE(label);
</pre>`;
window.traces.ELSE["constUnLEM"] = `<pre class='graph'>---
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
window.traces.ELSE["chooseMerge"] = `<pre class='graph'>---
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
window.traces.ELSE["scheduled"] = `<pre class=''>def label = doElse();
def eff__19 = doBranch(label);
def eff_st_put__21 = ctlxfer.put_ELSE(label);
</pre>`;
window.traces.ELSE["pretty"] = `<pre class=''>def label = doElse();
doBranch(label);
ctlxfer.put_ELSE(label);
</pre>`;
window.traces["TRY"] = {}
window.traces.TRY["parsed"] = `<pre class=''>def bt = imm_readBlockType();
def arg__23 = (bt);
def eff__22 = doTry(arg__23);
</pre>`;
window.traces.TRY["raw"] = `<pre class='graph'>---
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
window.traces.TRY["overloadOps"] = `<pre class='graph'>---
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
window.traces.TRY["addAbstractions"] = `<pre class='graph'>---
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
window.traces.TRY["schedulerMermaid"] = `<pre class='graph'>graph TD
subgraph block_0["Block 0"]
	direction TB
	b0_0[/"Start"\\]
	b0_3["bt imm_readBlockType"]
	b0_5["eff__22 doTry"]
	b0_1[\\"Finish"/]
	b0_0 --> b0_3
	b0_3 --> b0_5
	b0_5 --> b0_1
end

</pre>`;
window.traces.TRY["unLEM"] = `<pre class='graph'>---
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
window.traces.TRY["unlem_schedule"] = `<pre class=''>def bt = imm_readBlockType();
def eff__22 = doTry(bt);
</pre>`;
window.traces.TRY["unlem_scheduler"] = `<pre class='graph'>graph TD
subgraph block_0["Block 0"]
	direction TB
	b0_0[/"Start"\\]
	b0_3["bt imm_readBlockType"]
	b0_5["eff__22 doTry"]
	b0_1[\\"Finish"/]
	b0_0 --> b0_3
	b0_3 --> b0_5
	b0_5 --> b0_1
end

</pre>`;
window.traces.TRY["unlem_pretty"] = `<pre class=''>def bt = imm_readBlockType();
doTry(bt);
</pre>`;
window.traces.TRY["constUnLEM"] = `<pre class='graph'>---
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
window.traces.TRY["chooseMerge"] = `<pre class='graph'>---
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
window.traces.TRY["scheduled"] = `<pre class=''>def bt = imm_readBlockType();
def eff__22 = doTry(bt);
</pre>`;
window.traces.TRY["pretty"] = `<pre class=''>def bt = imm_readBlockType();
doTry(bt);
</pre>`;
window.traces["END"] = {}
window.traces.END["parsed"] = `<pre class=''>def eff__26 = doEnd();
def cond__24 = f_isAtEnd();
if (cond__24) {
	def eff__25 = doReturn();
}
// phis: 
</pre>`;
window.traces.END["raw"] = `<pre class='graph'>---
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
window.traces.END["overloadOps"] = `<pre class='graph'>---
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
window.traces.END["addAbstractions"] = `<pre class='graph'>---
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
window.traces.END["schedulerMermaid"] = `<pre class='graph'>graph TD
subgraph block_0["Block 0"]
	direction TB
	b0_1[\\"Finish"/]
end
phi_1 --> block_0
subgraph phi_1["Phi 1"]
	p1_6{{"Sϕ Codeptr Stack Trap Locals Globals Tables Memory Extra "}}
end
block_2 --> phi_1
block_3 --> phi_1
subgraph block_2["Block 2"]
	direction TB
end
branch_0 --> block_2
subgraph block_3["Block 3"]
	direction TB
end
branch_0 --> block_3

</pre>`;
window.traces.END["unLEM"] = `<pre class='graph'>---
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
window.traces.END["unlem_schedule"] = `<pre class=''>def cond__24 = f_isAtEnd();
if (cond__24) {
	def eff__26 = doEnd();
	def eff__25 = doReturn();
} else {
	def eff__26 = doEnd();
}
// phis: 
</pre>`;
window.traces.END["unlem_scheduler"] = `<pre class='graph'>graph TD
subgraph block_5["Block 5"]
	direction TB
	b5_1[\\"Finish"/]
end
phi_1 --> block_5
subgraph phi_1["Phi 1"]
	p1_6{{"Sϕ Codeptr Stack Trap Locals Globals Tables Memory Extra "}}
end
block_2 --> phi_1
block_3 --> phi_1
subgraph block_2["Block 2"]
	direction TB
end
branch_0 --> block_2
subgraph branch_0["Branch 0"]
	br0_4["cond__24 f_isAtEnd"]

end
block_4 --> branch_0
subgraph block_4["Block 4"]
	direction TB
	b4_0[/"Start"\\]
	b4_4["cond__24 f_isAtEnd"]
	b4_3["eff__26 doEnd"]
	b4_5["eff__25 doReturn"]
	b4_0 --> b4_4
	b4_4 --> b4_3
	b4_3 --> b4_5
end
subgraph block_3["Block 3"]
	direction TB
end
branch_0 --> block_3

</pre>`;
window.traces.END["unlem_pretty"] = `<pre class=''>if (f_isAtEnd()) {
	doEnd();
	doReturn();
} else {
	doEnd();
}
</pre>`;
window.traces.END["constUnLEM"] = `<pre class='graph'>---
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
window.traces.END["chooseMerge"] = `<pre class='graph'>---
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
window.traces.END["scheduled"] = `<pre class=''>def cond__24 = f_isAtEnd();
if (cond__24) {
	def eff__26 = doEnd();
	def eff__25 = doReturn();
} else {
	def eff__26 = doEnd();
}
// phis: 
</pre>`;
window.traces.END["pretty"] = `<pre class=''>if (f_isAtEnd()) {
	doEnd();
	doReturn();
} else {
	doEnd();
}
</pre>`;
window.traces["BR"] = {}
window.traces.BR["parsed"] = `<pre class=''>def depth = imm_readULEB32();
def arg__29 = (depth);
def label = f_getLabel(arg__29);
def arg__28 = (label);
def eff__27 = doBranch(arg__28);
</pre>`;
window.traces.BR["raw"] = `<pre class='graph'>---
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
window.traces.BR["overloadOps"] = `<pre class='graph'>---
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
window.traces.BR["addAbstractions"] = `<pre class='graph'>---
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
window.traces.BR["schedulerMermaid"] = `<pre class='graph'>graph TD
subgraph block_5["Block 5"]
	direction TB
	b5_0[/"Start"\\]
	b5_3["depth imm_readULEB32"]
	b5_5["label f_getLabel"]
	b5_7["eff__27 doBranch"]
	b5_8["eff_st_put__30 ctlxfer.put_BR"]
	b5_1[\\"Finish"/]
	b5_0 --> b5_3
	b5_3 --> b5_5
	b5_5 --> b5_7
	b5_7 --> b5_8
	b5_8 --> b5_1
end

</pre>`;
window.traces.BR["unLEM"] = `<pre class='graph'>---
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
window.traces.BR["unlem_schedule"] = `<pre class=''>def depth = imm_readULEB32();
def label = f_getLabel(depth);
def eff__27 = doBranch(label);
def eff_st_put__30 = ctlxfer.put_BR(label);
</pre>`;
window.traces.BR["unlem_scheduler"] = `<pre class='graph'>graph TD
subgraph block_0["Block 0"]
	direction TB
	b0_0[/"Start"\\]
	b0_3["depth imm_readULEB32"]
	b0_5["label f_getLabel"]
	b0_7["eff__27 doBranch"]
	b0_8["eff_st_put__30 ctlxfer.put_BR"]
	b0_1[\\"Finish"/]
	b0_0 --> b0_3
	b0_3 --> b0_5
	b0_5 --> b0_7
	b0_7 --> b0_8
	b0_8 --> b0_1
end

</pre>`;
window.traces.BR["unlem_pretty"] = `<pre class=''>def depth = imm_readULEB32();
def label = f_getLabel(depth);
doBranch(label);
ctlxfer.put_BR(label);
</pre>`;
window.traces.BR["constUnLEM"] = `<pre class='graph'>---
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
window.traces.BR["chooseMerge"] = `<pre class='graph'>---
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
window.traces.BR["scheduled"] = `<pre class=''>def depth = imm_readULEB32();
def label = f_getLabel(depth);
def eff__27 = doBranch(label);
def eff_st_put__30 = ctlxfer.put_BR(label);
</pre>`;
window.traces.BR["pretty"] = `<pre class=''>def depth = imm_readULEB32();
def label = f_getLabel(depth);
doBranch(label);
ctlxfer.put_BR(label);
</pre>`;
window.traces["BR_IF"] = {}
window.traces.BR_IF["parsed"] = `<pre class=''>def depth = imm_readULEB32();
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
window.traces.BR_IF["raw"] = `<pre class='graph'>---
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
window.traces.BR_IF["overloadOps"] = `<pre class='graph'>---
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
window.traces.BR_IF["addAbstractions"] = `<pre class='graph'>---
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
window.traces.BR_IF["schedulerMermaid"] = `<pre class='graph'>graph TD
subgraph block_0["Block 0"]
	direction TB
	b0_15["abs__39 lift_u32"]
	b0_5["label f_getLabel"]
	b0_14["eff_st_put__38 ctlxfer.put_BR_IF"]
	b0_1[\\"Finish"/]
	b0_15 --> b0_5
	b0_5 --> b0_14
	b0_14 --> b0_1
end
phi_1 --> block_0
subgraph phi_1["Phi 1"]
	p1_13{{"Sϕ Codeptr Stack Trap Locals Globals Tables Memory Extra "}}
	p1_13{{"Sϕ Codeptr Stack Trap Locals Globals Tables Memory Extra "}}
end
block_2 --> phi_1
block_3 --> phi_1
subgraph block_2["Block 2"]
	direction TB
end
branch_0 --> block_2
subgraph block_3["Block 3"]
	direction TB
end
branch_0 --> block_3

</pre>`;
window.traces.BR_IF["unLEM"] = `<pre class='graph'>---
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
	20 --> 13
	22 --> 13
	21 --> 13
	21{{"Sϕ Codeptr Stack Trap Locals Globals Tables Memory Extra "}}
	18 --> 21
	12 --> 21
	10 --> 21
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
	18["mt__40 U32_maybeTrue"]
	9 --> 18
	9["cond__31 U32_not_equals"]
	6 --> 9
	15 --> 9
	15["abs__39 lift_u32"]
	7 --> 15
	7["arg__36 0"]
	22["eff_merge__43 merge"]
	12 --> 22
	10 --> 22
	20["mb__42 bool.&&"]
	18 --> 20
	19 --> 20
	19["mf__41 U32_maybeFalse"]
	9 --> 19
</pre>`;
window.traces.BR_IF["unlem_schedule"] = `<pre class=''>def depth = imm_readULEB32();
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
window.traces.BR_IF["unlem_scheduler"] = `<pre class='graph'>graph TD
subgraph block_5["Block 5"]
	direction TB
	b5_15["abs__39 lift_u32"]
	b5_5["label f_getLabel"]
	b5_14["eff_st_put__38 ctlxfer.put_BR_IF"]
	b5_1[\\"Finish"/]
	b5_15 --> b5_5
	b5_5 --> b5_14
	b5_14 --> b5_1
end
phi_1 --> block_5
subgraph phi_1["Phi 1"]
	p1_13{{"Sϕ Codeptr Stack Trap Locals Globals Tables Memory Extra "}}
	p1_13{{"Sϕ Codeptr Stack Trap Locals Globals Tables Memory Extra "}}
end
block_2 --> phi_1
block_3 --> phi_1
subgraph block_2["Block 2"]
	direction TB
end
branch_0 --> block_2
subgraph branch_0["Branch 0"]
	br0_20["mb__42 bool.&&"]

end
block_4 --> branch_0
subgraph block_4["Block 4"]
	direction TB
	b4_19["mf__41 U32_maybeFalse"]
	b4_20["mb__42 bool.&&"]
	b4_22["eff_merge__43 merge"]
	b4_19 --> b4_20
	b4_20 --> b4_22
end
phi_6 --> block_4
subgraph phi_6["Phi 6"]
	p6_21{{"Sϕ Codeptr Stack Trap Locals Globals Tables Memory Extra "}}
	p6_21{{"Sϕ Codeptr Stack Trap Locals Globals Tables Memory Extra "}}
end
block_7 --> phi_6
block_8 --> phi_6
subgraph block_7["Block 7"]
	direction TB
end
branch_5 --> block_7
subgraph block_8["Block 8"]
	direction TB
end
branch_5 --> block_8
subgraph block_3["Block 3"]
	direction TB
end
branch_0 --> block_3

</pre>`;
window.traces.BR_IF["unlem_pretty"] = `<pre class=''>def depth = imm_readULEB32();
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
window.traces.BR_IF["constUnLEM"] = `<pre class='graph'>---
config:
  layout: elk
---
graph TD
	1[\\"Finish"/]
	13 -. Codeptr Stack Trap Locals Globals Tables Memory .-> 1
	14 -. Extra .-> 1
	14["eff_st_put__38 ctlxfer.put_BR_IF"]
	5 --> 14
	22 -. Extra .-> 14
	22["eff_merge__43 merge"]
	12 --> 22
	10 --> 22
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
	13["eff_merge__43 merge"]
	12 --> 13
	10 --> 13
</pre>`;
window.traces.BR_IF["chooseMerge"] = `<pre class='graph'>---
config:
  layout: elk
---
graph TD
	1[\\"Finish"/]
	13 -. Codeptr Stack Trap Locals Globals Tables Memory .-> 1
	14 -. Extra .-> 1
	14["eff_st_put__38 ctlxfer.put_BR_IF"]
	5 --> 14
	22 -. Extra .-> 14
	22["eff_merge__43 merge"]
	12 --> 22
	10 --> 22
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
	13["eff_merge__43 merge"]
	12 --> 13
	10 --> 13
</pre>`;
window.traces.BR_IF["scheduled"] = `<pre class=''>def depth = imm_readULEB32();
def label = f_getLabel(depth);
def cond = pop_u32();
def eff__32 = doBranch(label);
def eff__34 = doFallthru();
def eff_merge__43 = merge(eff__32, eff__34);
def eff_merge__43 = merge(eff__32, eff__34);
def eff_st_put__38 = ctlxfer.put_BR_IF(label);
</pre>`;
window.traces.BR_IF["pretty"] = `<pre class=''>def depth = imm_readULEB32();
def label = f_getLabel(depth);
def cond = pop_u32();
doBranch(label);
doFallthru();
ctlxfer.put_BR_IF(label);
</pre>`;
window.traces["BR_TABLE"] = {}
window.traces.BR_TABLE["parsed"] = `<pre class=''>def labels = imm_readLabels();
def key = pop_u32();
def arg__46 = (key);
def arg__45 = (labels);
def eff__44 = doSwitch(arg__45, arg__46);
</pre>`;
window.traces.BR_TABLE["raw"] = `<pre class='graph'>---
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
window.traces.BR_TABLE["overloadOps"] = `<pre class='graph'>---
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
window.traces.BR_TABLE["addAbstractions"] = `<pre class='graph'>---
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
window.traces.BR_TABLE["schedulerMermaid"] = `<pre class='graph'>graph TD
subgraph block_10["Block 10"]
	direction TB
	b10_0[/"Start"\\]
	b10_4["key pop_u32"]
	b10_3["labels imm_readLabels"]
	b10_7["eff__44 doSwitch"]
	b10_8["eff_st_put__47 ctlxfer.put_BR_TABLE"]
	b10_1[\\"Finish"/]
	b10_0 --> b10_4
	b10_4 --> b10_3
	b10_3 --> b10_7
	b10_7 --> b10_8
	b10_8 --> b10_1
end

</pre>`;
window.traces.BR_TABLE["unLEM"] = `<pre class='graph'>---
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
window.traces.BR_TABLE["unlem_schedule"] = `<pre class=''>def labels = imm_readLabels();
def key = pop_u32();
def eff__44 = doSwitch(labels, key);
def eff_st_put__47 = ctlxfer.put_BR_TABLE(labels);
</pre>`;
window.traces.BR_TABLE["unlem_scheduler"] = `<pre class='graph'>graph TD
subgraph block_0["Block 0"]
	direction TB
	b0_0[/"Start"\\]
	b0_4["key pop_u32"]
	b0_3["labels imm_readLabels"]
	b0_7["eff__44 doSwitch"]
	b0_8["eff_st_put__47 ctlxfer.put_BR_TABLE"]
	b0_1[\\"Finish"/]
	b0_0 --> b0_4
	b0_4 --> b0_3
	b0_3 --> b0_7
	b0_7 --> b0_8
	b0_8 --> b0_1
end

</pre>`;
window.traces.BR_TABLE["unlem_pretty"] = `<pre class=''>def labels = imm_readLabels();
def key = pop_u32();
doSwitch(labels, key);
ctlxfer.put_BR_TABLE(labels);
</pre>`;
window.traces.BR_TABLE["constUnLEM"] = `<pre class='graph'>---
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
window.traces.BR_TABLE["chooseMerge"] = `<pre class='graph'>---
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
window.traces.BR_TABLE["scheduled"] = `<pre class=''>def labels = imm_readLabels();
def key = pop_u32();
def eff__44 = doSwitch(labels, key);
def eff_st_put__47 = ctlxfer.put_BR_TABLE(labels);
</pre>`;
window.traces.BR_TABLE["pretty"] = `<pre class=''>def labels = imm_readLabels();
def key = pop_u32();
doSwitch(labels, key);
ctlxfer.put_BR_TABLE(labels);
</pre>`;
window.traces["RETURN"] = {}
window.traces.RETURN["parsed"] = `<pre class=''>def eff__48 = doReturn();
</pre>`;
window.traces.RETURN["raw"] = `<pre class='graph'>---
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
window.traces.RETURN["overloadOps"] = `<pre class='graph'>---
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
window.traces.RETURN["addAbstractions"] = `<pre class='graph'>---
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
window.traces.RETURN["schedulerMermaid"] = `<pre class='graph'>graph TD
subgraph block_0["Block 0"]
	direction TB
	b0_0[/"Start"\\]
	b0_3["eff__48 doReturn"]
	b0_1[\\"Finish"/]
	b0_0 --> b0_3
	b0_3 --> b0_1
end

</pre>`;
window.traces.RETURN["unLEM"] = `<pre class='graph'>---
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
window.traces.RETURN["unlem_schedule"] = `<pre class=''>def eff__48 = doReturn();
</pre>`;
window.traces.RETURN["unlem_scheduler"] = `<pre class='graph'>graph TD
subgraph block_0["Block 0"]
	direction TB
	b0_0[/"Start"\\]
	b0_3["eff__48 doReturn"]
	b0_1[\\"Finish"/]
	b0_0 --> b0_3
	b0_3 --> b0_1
end

</pre>`;
window.traces.RETURN["unlem_pretty"] = `<pre class=''>doReturn();
</pre>`;
window.traces.RETURN["constUnLEM"] = `<pre class='graph'>---
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
window.traces.RETURN["chooseMerge"] = `<pre class='graph'>---
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
window.traces.RETURN["scheduled"] = `<pre class=''>def eff__48 = doReturn();
</pre>`;
window.traces.RETURN["pretty"] = `<pre class=''>doReturn();
</pre>`;
window.traces["CALL"] = {}
window.traces.CALL["parsed"] = `<pre class=''>def index = imm_readULEB32();
def arg__53 = (index);
def sig = m_getFuncSignature(arg__53);
def arg__52 = (index);
def target = i_getFunction(arg__52);
def arg__51 = (target);
def arg__50 = (sig);
def eff__49 = doCall(arg__50, arg__51);
</pre>`;
window.traces.CALL["raw"] = `<pre class='graph'>---
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
window.traces.CALL["overloadOps"] = `<pre class='graph'>---
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
window.traces.CALL["addAbstractions"] = `<pre class='graph'>---
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
window.traces.CALL["schedulerMermaid"] = `<pre class='graph'>graph TD
subgraph block_0["Block 0"]
	direction TB
	b0_0[/"Start"\\]
	b0_3["index imm_readULEB32"]
	b0_7["target i_getFunction"]
	b0_5["sig m_getFuncSignature"]
	b0_10["eff__49 doCall"]
	b0_1[\\"Finish"/]
	b0_0 --> b0_3
	b0_3 --> b0_7
	b0_7 --> b0_5
	b0_5 --> b0_10
	b0_10 --> b0_1
end

</pre>`;
window.traces.CALL["unLEM"] = `<pre class='graph'>---
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
window.traces.CALL["unlem_schedule"] = `<pre class=''>def index = imm_readULEB32();
def sig = m_getFuncSignature(index);
def target = i_getFunction(index);
def eff__49 = doCall(sig, target);
</pre>`;
window.traces.CALL["unlem_scheduler"] = `<pre class='graph'>graph TD
subgraph block_0["Block 0"]
	direction TB
	b0_0[/"Start"\\]
	b0_3["index imm_readULEB32"]
	b0_7["target i_getFunction"]
	b0_5["sig m_getFuncSignature"]
	b0_10["eff__49 doCall"]
	b0_1[\\"Finish"/]
	b0_0 --> b0_3
	b0_3 --> b0_7
	b0_7 --> b0_5
	b0_5 --> b0_10
	b0_10 --> b0_1
end

</pre>`;
window.traces.CALL["unlem_pretty"] = `<pre class=''>def index = imm_readULEB32();
def sig = m_getFuncSignature(index);
def target = i_getFunction(index);
doCall(sig, target);
</pre>`;
window.traces.CALL["constUnLEM"] = `<pre class='graph'>---
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
window.traces.CALL["chooseMerge"] = `<pre class='graph'>---
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
window.traces.CALL["scheduled"] = `<pre class=''>def index = imm_readULEB32();
def sig = m_getFuncSignature(index);
def target = i_getFunction(index);
def eff__49 = doCall(sig, target);
</pre>`;
window.traces.CALL["pretty"] = `<pre class=''>def index = imm_readULEB32();
def sig = m_getFuncSignature(index);
def target = i_getFunction(index);
doCall(sig, target);
</pre>`;
window.traces["CALL_INDIRECT"] = {}
window.traces.CALL_INDIRECT["parsed"] = `<pre class=''>def sig_index = imm_readULEB32();
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
window.traces.CALL_INDIRECT["raw"] = `<pre class='graph'>---
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
window.traces.CALL_INDIRECT["overloadOps"] = `<pre class='graph'>---
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
window.traces.CALL_INDIRECT["addAbstractions"] = `<pre class='graph'>---
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
window.traces.CALL_INDIRECT["schedulerMermaid"] = `<pre class='graph'>graph TD
subgraph block_0["Block 0"]
	direction TB
	b0_14["target i_getTableFunction32"]
	b0_22["target i_getTableFunction64"]
	b0_6["sig m_getSignature"]
	b0_8["is64 m_isTable64"]
	b0_27["eff_st_put__69 ctlxfer.put_CALL_INDIRECT"]
	b0_1[\\"Finish"/]
	b0_14 --> b0_22
	b0_22 --> b0_6
	b0_6 --> b0_8
	b0_8 --> b0_27
	b0_27 --> b0_1
end
phi_1 --> block_0
subgraph phi_1["Phi 1"]
	p1_26{{"Sϕ Codeptr Stack Trap Locals Globals Tables Memory Extra "}}
	p1_26{{"Sϕ Codeptr Stack Trap Locals Globals Tables Memory Extra "}}
end
block_2 --> phi_1
block_3 --> phi_1
subgraph block_2["Block 2"]
	direction TB
end
branch_0 --> block_2
subgraph block_3["Block 3"]
	direction TB
end
branch_0 --> block_3

</pre>`;
window.traces.CALL_INDIRECT["unLEM"] = `<pre class='graph'>---
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
window.traces.CALL_INDIRECT["unlem_schedule"] = `<pre class=''>def sig_index = imm_readULEB32();
def table_index = imm_readULEB32();
def is64 = m_isTable64(table_index);
def eff_st_put__69 = ctlxfer.put_CALL_INDIRECT(is64);
</pre>`;
window.traces.CALL_INDIRECT["unlem_scheduler"] = `<pre class='graph'>graph TD
subgraph block_5["Block 5"]
	direction TB
	b5_14["target i_getTableFunction32"]
	b5_22["target i_getTableFunction64"]
	b5_6["sig m_getSignature"]
	b5_8["is64 m_isTable64"]
	b5_27["eff_st_put__69 ctlxfer.put_CALL_INDIRECT"]
	b5_1[\\"Finish"/]
	b5_14 --> b5_22
	b5_22 --> b5_6
	b5_6 --> b5_8
	b5_8 --> b5_27
	b5_27 --> b5_1
end
phi_1 --> block_5
subgraph phi_1["Phi 1"]
	p1_26{{"Sϕ Codeptr Stack Trap Locals Globals Tables Memory Extra "}}
	p1_26{{"Sϕ Codeptr Stack Trap Locals Globals Tables Memory Extra "}}
end
block_2 --> phi_1
block_3 --> phi_1
subgraph block_2["Block 2"]
	direction TB
end
branch_0 --> block_2
subgraph branch_0["Branch 0"]
	br0_8["is64 m_isTable64"]

end
block_4 --> branch_0
subgraph block_4["Block 4"]
	direction TB
	b4_0[/"Start"\\]
	b4_3["sig_index imm_readULEB32"]
	b4_10["func_index pop_u32"]
	b4_18["func_index pop_u64"]
	b4_4["table_index imm_readULEB32"]
	b4_17["eff__61 doCall"]
	b4_25["eff__55 doCall"]
	b4_0 --> b4_3
	b4_3 --> b4_10
	b4_10 --> b4_18
	b4_18 --> b4_4
	b4_4 --> b4_17
	b4_17 --> b4_25
end
subgraph block_3["Block 3"]
	direction TB
end
branch_0 --> block_3

</pre>`;
window.traces.CALL_INDIRECT["unlem_pretty"] = `<pre class=''>def sig_index = imm_readULEB32();
def table_index = imm_readULEB32();
def is64 = m_isTable64(table_index);
ctlxfer.put_CALL_INDIRECT(is64);
</pre>`;
window.traces.CALL_INDIRECT["constUnLEM"] = `<pre class='graph'>---
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
window.traces.CALL_INDIRECT["chooseMerge"] = `<pre class='graph'>---
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
window.traces.CALL_INDIRECT["scheduled"] = `<pre class=''>def sig_index = imm_readULEB32();
def table_index = imm_readULEB32();
def is64 = m_isTable64(table_index);
def eff_st_put__69 = ctlxfer.put_CALL_INDIRECT(is64);
</pre>`;
window.traces.CALL_INDIRECT["pretty"] = `<pre class=''>def sig_index = imm_readULEB32();
def table_index = imm_readULEB32();
def is64 = m_isTable64(table_index);
ctlxfer.put_CALL_INDIRECT(is64);
</pre>`;
window.traces["RETURN_CALL"] = {}
window.traces.RETURN_CALL["parsed"] = `<pre class=''>def index = imm_readULEB32();
def arg__74 = (index);
def sig = m_getFuncSignature(arg__74);
def arg__73 = (index);
def target = i_getFunction(arg__73);
def arg__72 = (target);
def arg__71 = (sig);
def eff__70 = doReturnCall(arg__71, arg__72);
</pre>`;
window.traces.RETURN_CALL["raw"] = `<pre class='graph'>---
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
window.traces.RETURN_CALL["overloadOps"] = `<pre class='graph'>---
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
window.traces.RETURN_CALL["addAbstractions"] = `<pre class='graph'>---
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
window.traces.RETURN_CALL["schedulerMermaid"] = `<pre class='graph'>graph TD
subgraph block_5["Block 5"]
	direction TB
	b5_0[/"Start"\\]
	b5_3["index imm_readULEB32"]
	b5_7["target i_getFunction"]
	b5_5["sig m_getFuncSignature"]
	b5_10["eff__70 doReturnCall"]
	b5_1[\\"Finish"/]
	b5_0 --> b5_3
	b5_3 --> b5_7
	b5_7 --> b5_5
	b5_5 --> b5_10
	b5_10 --> b5_1
end

</pre>`;
window.traces.RETURN_CALL["unLEM"] = `<pre class='graph'>---
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
window.traces.RETURN_CALL["unlem_schedule"] = `<pre class=''>def index = imm_readULEB32();
def sig = m_getFuncSignature(index);
def target = i_getFunction(index);
def eff__70 = doReturnCall(sig, target);
</pre>`;
window.traces.RETURN_CALL["unlem_scheduler"] = `<pre class='graph'>graph TD
subgraph block_0["Block 0"]
	direction TB
	b0_0[/"Start"\\]
	b0_3["index imm_readULEB32"]
	b0_7["target i_getFunction"]
	b0_5["sig m_getFuncSignature"]
	b0_10["eff__70 doReturnCall"]
	b0_1[\\"Finish"/]
	b0_0 --> b0_3
	b0_3 --> b0_7
	b0_7 --> b0_5
	b0_5 --> b0_10
	b0_10 --> b0_1
end

</pre>`;
window.traces.RETURN_CALL["unlem_pretty"] = `<pre class=''>def index = imm_readULEB32();
def sig = m_getFuncSignature(index);
def target = i_getFunction(index);
doReturnCall(sig, target);
</pre>`;
window.traces.RETURN_CALL["constUnLEM"] = `<pre class='graph'>---
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
window.traces.RETURN_CALL["chooseMerge"] = `<pre class='graph'>---
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
window.traces.RETURN_CALL["scheduled"] = `<pre class=''>def index = imm_readULEB32();
def sig = m_getFuncSignature(index);
def target = i_getFunction(index);
def eff__70 = doReturnCall(sig, target);
</pre>`;
window.traces.RETURN_CALL["pretty"] = `<pre class=''>def index = imm_readULEB32();
def sig = m_getFuncSignature(index);
def target = i_getFunction(index);
doReturnCall(sig, target);
</pre>`;
window.traces["DROP"] = {}
window.traces.DROP["parsed"] = `<pre class=''>def tv = f_getTopOfStackType();
def arg__76 = (tv);
def eff__75 = pop_Value(arg__76);
</pre>`;
window.traces.DROP["raw"] = `<pre class='graph'>---
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
window.traces.DROP["overloadOps"] = `<pre class='graph'>---
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
window.traces.DROP["addAbstractions"] = `<pre class='graph'>---
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
window.traces.DROP["schedulerMermaid"] = `<pre class='graph'>graph TD
subgraph block_0["Block 0"]
	direction TB
	b0_0[/"Start"\\]
	b0_3["tv f_getTopOfStackType"]
	b0_5["eff__75 pop_Value"]
	b0_1[\\"Finish"/]
	b0_0 --> b0_3
	b0_3 --> b0_5
	b0_5 --> b0_1
end

</pre>`;
window.traces.DROP["unLEM"] = `<pre class='graph'>---
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
window.traces.DROP["unlem_schedule"] = `<pre class=''>def tv = f_getTopOfStackType();
def eff__75 = pop_Value(tv);
</pre>`;
window.traces.DROP["unlem_scheduler"] = `<pre class='graph'>graph TD
subgraph block_0["Block 0"]
	direction TB
	b0_0[/"Start"\\]
	b0_3["tv f_getTopOfStackType"]
	b0_5["eff__75 pop_Value"]
	b0_1[\\"Finish"/]
	b0_0 --> b0_3
	b0_3 --> b0_5
	b0_5 --> b0_1
end

</pre>`;
window.traces.DROP["unlem_pretty"] = `<pre class=''>def tv = f_getTopOfStackType();
pop_Value(tv);
</pre>`;
window.traces.DROP["constUnLEM"] = `<pre class='graph'>---
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
window.traces.DROP["chooseMerge"] = `<pre class='graph'>---
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
window.traces.DROP["scheduled"] = `<pre class=''>def tv = f_getTopOfStackType();
def eff__75 = pop_Value(tv);
</pre>`;
window.traces.DROP["pretty"] = `<pre class=''>def tv = f_getTopOfStackType();
pop_Value(tv);
</pre>`;
window.traces["SELECT"] = {}
window.traces.SELECT["parsed"] = `<pre class=''>def c = pop_u32();
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
window.traces.SELECT["raw"] = `<pre class='graph'>---
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
window.traces.SELECT["overloadOps"] = `<pre class='graph'>---
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
window.traces.SELECT["addAbstractions"] = `<pre class='graph'>---
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
window.traces.SELECT["schedulerMermaid"] = `<pre class='graph'>graph TD
subgraph block_0["Block 0"]
	direction TB
	b0_19["abs__88 lift_u32"]
	b0_4["tv f_getTopOfStackType"]
	b0_1[\\"Finish"/]
	b0_19 --> b0_4
	b0_4 --> b0_1
end
phi_1 --> block_0
subgraph phi_1["Phi 1"]
	p1_18{{"Sϕ Stack "}}
end
block_2 --> phi_1
block_3 --> phi_1
subgraph block_2["Block 2"]
	direction TB
end
branch_0 --> block_2
subgraph block_3["Block 3"]
	direction TB
end
branch_0 --> block_3

</pre>`;
window.traces.SELECT["unLEM"] = `<pre class='graph'>---
config:
  layout: elk
---
graph TD
	1[\\"Finish"/]
	0 -. Codeptr Trap Locals Globals Tables Memory Extra .-> 1
	18 -. Stack .-> 1
	18{{"Sϕ Stack "}}
	24 --> 18
	27 --> 18
	25 --> 18
	25{{"Sϕ Stack "}}
	22 --> 25
	17 --> 25
	14 --> 25
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
	22["mt__89 U32_maybeTrue"]
	11 --> 22
	11["cond__77 U32_not_equals"]
	3 --> 11
	19 --> 11
	19["abs__88 lift_u32"]
	9 --> 19
	9["arg__85 0"]
	27["push__93 push_Value"]
	4 --> 27
	26 --> 27
	8 -. Stack .-> 27
	26["merge__92 merge_Val"]
	4 --> 26
	8 --> 26
	6 --> 26
	6 -. Stack .-> 26
	24["mb__91 bool.&&"]
	22 --> 24
	23 --> 24
	23["mf__90 U32_maybeFalse"]
	11 --> 23
</pre>`;
window.traces.SELECT["unlem_schedule"] = `<pre class=''>def c = pop_u32();
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
window.traces.SELECT["unlem_scheduler"] = `<pre class='graph'>graph TD
subgraph block_5["Block 5"]
	direction TB
	b5_19["abs__88 lift_u32"]
	b5_1[\\"Finish"/]
	b5_19 --> b5_1
end
phi_1 --> block_5
subgraph phi_1["Phi 1"]
	p1_18{{"Sϕ Stack "}}
end
block_2 --> phi_1
block_3 --> phi_1
subgraph block_2["Block 2"]
	direction TB
end
branch_0 --> block_2
subgraph branch_0["Branch 0"]
	br0_24["mb__91 bool.&&"]

end
block_4 --> branch_0
subgraph block_4["Block 4"]
	direction TB
	b4_4["tv f_getTopOfStackType"]
	b4_23["mf__90 U32_maybeFalse"]
	b4_26["merge__92 merge_Val"]
	b4_24["mb__91 bool.&&"]
	b4_27["push__93 push_Value"]
	b4_4 --> b4_23
	b4_23 --> b4_26
	b4_26 --> b4_24
	b4_24 --> b4_27
end
phi_6 --> block_4
subgraph phi_6["Phi 6"]
	p6_25{{"Sϕ Stack "}}
	p6_25{{"Sϕ Stack "}}
end
block_7 --> phi_6
block_8 --> phi_6
subgraph block_7["Block 7"]
	direction TB
end
branch_5 --> block_7
subgraph block_8["Block 8"]
	direction TB
end
branch_5 --> block_8
subgraph block_3["Block 3"]
	direction TB
end
branch_0 --> block_3

</pre>`;
window.traces.SELECT["unlem_pretty"] = `<pre class=''>def c = pop_u32();
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
window.traces.SELECT["constUnLEM"] = `<pre class='graph'>---
config:
  layout: elk
---
graph TD
	1[\\"Finish"/]
	0 -. Codeptr Trap Locals Globals Tables Memory Extra .-> 1
	18 -. Stack .-> 1
	18["push__93 push_Value"]
	4 --> 18
	26 --> 18
	8 -. Stack .-> 18
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
	26["merge__92 merge_Val"]
	4 --> 26
	8 --> 26
	6 --> 26
	6 -. Stack .-> 26
</pre>`;
window.traces.SELECT["chooseMerge"] = `<pre class='graph'>---
config:
  layout: elk
---
graph TD
	1[\\"Finish"/]
	0 -. Codeptr Trap Locals Globals Tables Memory Extra .-> 1
	18 -. Stack .-> 1
	18["push__93 push_Value"]
	4 --> 18
	4 --> 18
	8 -. Stack .-> 18
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
window.traces.SELECT["scheduled"] = `<pre class=''>def c = pop_u32();
def tv = f_getTopOfStackType();
def b = pop_Value(tv);
def a = pop_Value(tv);
def push__93 = push_Value(tv, tv);
</pre>`;
window.traces.SELECT["pretty"] = `<pre class=''>def c = pop_u32();
def tv = f_getTopOfStackType();
def b = pop_Value(tv);
def a = pop_Value(tv);
def push = push_Value(tv, tv);
</pre>`;
window.traces["LOCAL_GET"] = {}
window.traces.LOCAL_GET["parsed"] = `<pre class=''>def index = imm_readULEB32();
def arg__99 = (index);
def tv = f_getLocalType(arg__99);
def arg__98 = (index);
def arg__97 = (tv);
def val = getLocal(arg__97, arg__98);
def arg__96 = (val);
def arg__95 = (tv);
def eff__94 = push_Value(arg__95, arg__96);
</pre>`;
window.traces.LOCAL_GET["raw"] = `<pre class='graph'>---
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
window.traces.LOCAL_GET["overloadOps"] = `<pre class='graph'>---
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
window.traces.LOCAL_GET["addAbstractions"] = `<pre class='graph'>---
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
window.traces.LOCAL_GET["schedulerMermaid"] = `<pre class='graph'>graph TD
subgraph block_10["Block 10"]
	direction TB
	b10_0[/"Start"\\]
	b10_8["val getLocal"]
	b10_5["tv f_getLocalType"]
	b10_11["eff__94 push_Value"]
	b10_3["index imm_readULEB32"]
	b10_1[\\"Finish"/]
	b10_0 --> b10_8
	b10_8 --> b10_5
	b10_5 --> b10_11
	b10_11 --> b10_3
	b10_3 --> b10_1
end

</pre>`;
window.traces.LOCAL_GET["unLEM"] = `<pre class='graph'>---
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
window.traces.LOCAL_GET["unlem_schedule"] = `<pre class=''>def index = imm_readULEB32();
def tv = f_getLocalType(index);
def val = getLocal(tv, index);
def eff__94 = push_Value(tv, val);
</pre>`;
window.traces.LOCAL_GET["unlem_scheduler"] = `<pre class='graph'>graph TD
subgraph block_0["Block 0"]
	direction TB
	b0_0[/"Start"\\]
	b0_8["val getLocal"]
	b0_5["tv f_getLocalType"]
	b0_11["eff__94 push_Value"]
	b0_3["index imm_readULEB32"]
	b0_1[\\"Finish"/]
	b0_0 --> b0_8
	b0_8 --> b0_5
	b0_5 --> b0_11
	b0_11 --> b0_3
	b0_3 --> b0_1
end

</pre>`;
window.traces.LOCAL_GET["unlem_pretty"] = `<pre class=''>def index = imm_readULEB32();
def tv = f_getLocalType(index);
def val = getLocal(tv, index);
push_Value(tv, val);
</pre>`;
window.traces.LOCAL_GET["constUnLEM"] = `<pre class='graph'>---
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
window.traces.LOCAL_GET["chooseMerge"] = `<pre class='graph'>---
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
window.traces.LOCAL_GET["scheduled"] = `<pre class=''>def index = imm_readULEB32();
def tv = f_getLocalType(index);
def val = getLocal(tv, index);
def eff__94 = push_Value(tv, val);
</pre>`;
window.traces.LOCAL_GET["pretty"] = `<pre class=''>def index = imm_readULEB32();
def tv = f_getLocalType(index);
def val = getLocal(tv, index);
push_Value(tv, val);
</pre>`;
window.traces["LOCAL_SET"] = {}
window.traces.LOCAL_SET["parsed"] = `<pre class=''>def index = imm_readULEB32();
def arg__105 = (index);
def tv = f_getLocalType(arg__105);
def arg__104 = (tv);
def val = pop_Value(arg__104);
def arg__103 = (val);
def arg__102 = (index);
def arg__101 = (tv);
def eff__100 = setLocal(arg__101, arg__102, arg__103);
</pre>`;
window.traces.LOCAL_SET["raw"] = `<pre class='graph'>---
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
window.traces.LOCAL_SET["overloadOps"] = `<pre class='graph'>---
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
window.traces.LOCAL_SET["addAbstractions"] = `<pre class='graph'>---
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
window.traces.LOCAL_SET["schedulerMermaid"] = `<pre class='graph'>graph TD
subgraph block_0["Block 0"]
	direction TB
	b0_5["tv f_getLocalType"]
	b0_0[/"Start"\\]
	b0_11["eff__100 setLocal"]
	b0_7["val pop_Value"]
	b0_3["index imm_readULEB32"]
	b0_1[\\"Finish"/]
	b0_5 --> b0_0
	b0_0 --> b0_11
	b0_11 --> b0_7
	b0_7 --> b0_3
	b0_3 --> b0_1
end

</pre>`;
window.traces.LOCAL_SET["unLEM"] = `<pre class='graph'>---
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
window.traces.LOCAL_SET["unlem_schedule"] = `<pre class=''>def index = imm_readULEB32();
def tv = f_getLocalType(index);
def val = pop_Value(tv);
def eff__100 = setLocal(tv, index, val);
</pre>`;
window.traces.LOCAL_SET["unlem_scheduler"] = `<pre class='graph'>graph TD
subgraph block_0["Block 0"]
	direction TB
	b0_5["tv f_getLocalType"]
	b0_0[/"Start"\\]
	b0_11["eff__100 setLocal"]
	b0_7["val pop_Value"]
	b0_3["index imm_readULEB32"]
	b0_1[\\"Finish"/]
	b0_5 --> b0_0
	b0_0 --> b0_11
	b0_11 --> b0_7
	b0_7 --> b0_3
	b0_3 --> b0_1
end

</pre>`;
window.traces.LOCAL_SET["unlem_pretty"] = `<pre class=''>def index = imm_readULEB32();
def tv = f_getLocalType(index);
def val = pop_Value(tv);
setLocal(tv, index, val);
</pre>`;
window.traces.LOCAL_SET["constUnLEM"] = `<pre class='graph'>---
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
window.traces.LOCAL_SET["chooseMerge"] = `<pre class='graph'>---
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
window.traces.LOCAL_SET["scheduled"] = `<pre class=''>def index = imm_readULEB32();
def tv = f_getLocalType(index);
def val = pop_Value(tv);
def eff__100 = setLocal(tv, index, val);
</pre>`;
window.traces.LOCAL_SET["pretty"] = `<pre class=''>def index = imm_readULEB32();
def tv = f_getLocalType(index);
def val = pop_Value(tv);
setLocal(tv, index, val);
</pre>`;
window.traces["LOCAL_TEE"] = {}
window.traces.LOCAL_TEE["parsed"] = `<pre class=''>def index = imm_readULEB32();
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
window.traces.LOCAL_TEE["raw"] = `<pre class='graph'>---
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
window.traces.LOCAL_TEE["overloadOps"] = `<pre class='graph'>---
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
window.traces.LOCAL_TEE["addAbstractions"] = `<pre class='graph'>---
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
window.traces.LOCAL_TEE["schedulerMermaid"] = `<pre class='graph'>graph TD
subgraph block_0["Block 0"]
	direction TB
	b0_0[/"Start"\\]
	b0_7["val pop_Value"]
	b0_5["tv f_getLocalType"]
	b0_11["eff__109 setLocal"]
	b0_14["eff__106 push_Value"]
	b0_3["index imm_readULEB32"]
	b0_1[\\"Finish"/]
	b0_0 --> b0_7
	b0_7 --> b0_5
	b0_5 --> b0_11
	b0_11 --> b0_14
	b0_14 --> b0_3
	b0_3 --> b0_1
end

</pre>`;
window.traces.LOCAL_TEE["unLEM"] = `<pre class='graph'>---
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
window.traces.LOCAL_TEE["unlem_schedule"] = `<pre class=''>def index = imm_readULEB32();
def tv = f_getLocalType(index);
def val = pop_Value(tv);
def eff__106 = push_Value(tv, val);
def eff__109 = setLocal(tv, index, val);
</pre>`;
window.traces.LOCAL_TEE["unlem_scheduler"] = `<pre class='graph'>graph TD
subgraph block_0["Block 0"]
	direction TB
	b0_0[/"Start"\\]
	b0_7["val pop_Value"]
	b0_5["tv f_getLocalType"]
	b0_11["eff__109 setLocal"]
	b0_14["eff__106 push_Value"]
	b0_3["index imm_readULEB32"]
	b0_1[\\"Finish"/]
	b0_0 --> b0_7
	b0_7 --> b0_5
	b0_5 --> b0_11
	b0_11 --> b0_14
	b0_14 --> b0_3
	b0_3 --> b0_1
end

</pre>`;
window.traces.LOCAL_TEE["unlem_pretty"] = `<pre class=''>def index = imm_readULEB32();
def tv = f_getLocalType(index);
def val = pop_Value(tv);
push_Value(tv, val);
setLocal(tv, index, val);
</pre>`;
window.traces.LOCAL_TEE["constUnLEM"] = `<pre class='graph'>---
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
window.traces.LOCAL_TEE["chooseMerge"] = `<pre class='graph'>---
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
window.traces.LOCAL_TEE["scheduled"] = `<pre class=''>def index = imm_readULEB32();
def tv = f_getLocalType(index);
def val = pop_Value(tv);
def eff__106 = push_Value(tv, val);
def eff__109 = setLocal(tv, index, val);
</pre>`;
window.traces.LOCAL_TEE["pretty"] = `<pre class=''>def index = imm_readULEB32();
def tv = f_getLocalType(index);
def val = pop_Value(tv);
push_Value(tv, val);
setLocal(tv, index, val);
</pre>`;
window.traces["GLOBAL_GET"] = {}
window.traces.GLOBAL_GET["parsed"] = `<pre class=''>def index = imm_readULEB32();
def arg__120 = (index);
def tv = m_getGlobalType(arg__120);
def arg__119 = (index);
def arg__118 = (tv);
def val = getGlobal(arg__118, arg__119);
def arg__117 = (val);
def arg__116 = (tv);
def eff__115 = push_Value(arg__116, arg__117);
</pre>`;
window.traces.GLOBAL_GET["raw"] = `<pre class='graph'>---
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
window.traces.GLOBAL_GET["overloadOps"] = `<pre class='graph'>---
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
window.traces.GLOBAL_GET["addAbstractions"] = `<pre class='graph'>---
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
window.traces.GLOBAL_GET["schedulerMermaid"] = `<pre class='graph'>graph TD
subgraph block_0["Block 0"]
	direction TB
	b0_0[/"Start"\\]
	b0_8["val getGlobal"]
	b0_5["tv m_getGlobalType"]
	b0_11["eff__115 push_Value"]
	b0_3["index imm_readULEB32"]
	b0_1[\\"Finish"/]
	b0_0 --> b0_8
	b0_8 --> b0_5
	b0_5 --> b0_11
	b0_11 --> b0_3
	b0_3 --> b0_1
end

</pre>`;
window.traces.GLOBAL_GET["unLEM"] = `<pre class='graph'>---
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
window.traces.GLOBAL_GET["unlem_schedule"] = `<pre class=''>def index = imm_readULEB32();
def tv = m_getGlobalType(index);
def val = getGlobal(tv, index);
def eff__115 = push_Value(tv, val);
</pre>`;
window.traces.GLOBAL_GET["unlem_scheduler"] = `<pre class='graph'>graph TD
subgraph block_0["Block 0"]
	direction TB
	b0_0[/"Start"\\]
	b0_8["val getGlobal"]
	b0_5["tv m_getGlobalType"]
	b0_11["eff__115 push_Value"]
	b0_3["index imm_readULEB32"]
	b0_1[\\"Finish"/]
	b0_0 --> b0_8
	b0_8 --> b0_5
	b0_5 --> b0_11
	b0_11 --> b0_3
	b0_3 --> b0_1
end

</pre>`;
window.traces.GLOBAL_GET["unlem_pretty"] = `<pre class=''>def index = imm_readULEB32();
def tv = m_getGlobalType(index);
def val = getGlobal(tv, index);
push_Value(tv, val);
</pre>`;
window.traces.GLOBAL_GET["constUnLEM"] = `<pre class='graph'>---
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
window.traces.GLOBAL_GET["chooseMerge"] = `<pre class='graph'>---
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
window.traces.GLOBAL_GET["scheduled"] = `<pre class=''>def index = imm_readULEB32();
def tv = m_getGlobalType(index);
def val = getGlobal(tv, index);
def eff__115 = push_Value(tv, val);
</pre>`;
window.traces.GLOBAL_GET["pretty"] = `<pre class=''>def index = imm_readULEB32();
def tv = m_getGlobalType(index);
def val = getGlobal(tv, index);
push_Value(tv, val);
</pre>`;
window.traces["GLOBAL_SET"] = {}
window.traces.GLOBAL_SET["parsed"] = `<pre class=''>def index = imm_readULEB32();
def arg__126 = (index);
def tv = m_getGlobalType(arg__126);
def arg__125 = (tv);
def val = pop_Value(arg__125);
def arg__124 = (val);
def arg__123 = (index);
def arg__122 = (tv);
def eff__121 = setGlobal(arg__122, arg__123, arg__124);
</pre>`;
window.traces.GLOBAL_SET["raw"] = `<pre class='graph'>---
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
window.traces.GLOBAL_SET["overloadOps"] = `<pre class='graph'>---
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
window.traces.GLOBAL_SET["addAbstractions"] = `<pre class='graph'>---
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
window.traces.GLOBAL_SET["schedulerMermaid"] = `<pre class='graph'>graph TD
subgraph block_0["Block 0"]
	direction TB
	b0_5["tv m_getGlobalType"]
	b0_0[/"Start"\\]
	b0_11["eff__121 setGlobal"]
	b0_7["val pop_Value"]
	b0_3["index imm_readULEB32"]
	b0_1[\\"Finish"/]
	b0_5 --> b0_0
	b0_0 --> b0_11
	b0_11 --> b0_7
	b0_7 --> b0_3
	b0_3 --> b0_1
end

</pre>`;
window.traces.GLOBAL_SET["unLEM"] = `<pre class='graph'>---
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
window.traces.GLOBAL_SET["unlem_schedule"] = `<pre class=''>def index = imm_readULEB32();
def tv = m_getGlobalType(index);
def val = pop_Value(tv);
def eff__121 = setGlobal(tv, index, val);
</pre>`;
window.traces.GLOBAL_SET["unlem_scheduler"] = `<pre class='graph'>graph TD
subgraph block_0["Block 0"]
	direction TB
	b0_5["tv m_getGlobalType"]
	b0_0[/"Start"\\]
	b0_11["eff__121 setGlobal"]
	b0_7["val pop_Value"]
	b0_3["index imm_readULEB32"]
	b0_1[\\"Finish"/]
	b0_5 --> b0_0
	b0_0 --> b0_11
	b0_11 --> b0_7
	b0_7 --> b0_3
	b0_3 --> b0_1
end

</pre>`;
window.traces.GLOBAL_SET["unlem_pretty"] = `<pre class=''>def index = imm_readULEB32();
def tv = m_getGlobalType(index);
def val = pop_Value(tv);
setGlobal(tv, index, val);
</pre>`;
window.traces.GLOBAL_SET["constUnLEM"] = `<pre class='graph'>---
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
window.traces.GLOBAL_SET["chooseMerge"] = `<pre class='graph'>---
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
window.traces.GLOBAL_SET["scheduled"] = `<pre class=''>def index = imm_readULEB32();
def tv = m_getGlobalType(index);
def val = pop_Value(tv);
def eff__121 = setGlobal(tv, index, val);
</pre>`;
window.traces.GLOBAL_SET["pretty"] = `<pre class=''>def index = imm_readULEB32();
def tv = m_getGlobalType(index);
def val = pop_Value(tv);
setGlobal(tv, index, val);
</pre>`;
window.traces["TABLE_GET"] = {}
window.traces.TABLE_GET["parsed"] = `<pre class=''>def table_index = imm_readULEB32();
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
window.traces.TABLE_GET["raw"] = `<pre class='graph'>---
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
window.traces.TABLE_GET["overloadOps"] = `<pre class='graph'>---
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
window.traces.TABLE_GET["addAbstractions"] = `<pre class='graph'>---
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
window.traces.TABLE_GET["schedulerMermaid"] = `<pre class='graph'>graph TD
subgraph block_0["Block 0"]
	direction TB
	b0_9["val mach_readTable32"]
	b0_15["val mach_readTable64"]
	b0_3["table_index imm_readULEB32"]
	b0_1[\\"Finish"/]
	b0_9 --> b0_15
	b0_15 --> b0_3
	b0_3 --> b0_1
end
phi_1 --> block_0
subgraph phi_1["Phi 1"]
	p1_18{{"Sϕ Stack "}}
end
block_2 --> phi_1
block_3 --> phi_1
subgraph block_2["Block 2"]
	direction TB
end
branch_0 --> block_2
subgraph block_3["Block 3"]
	direction TB
end
branch_0 --> block_3

</pre>`;
window.traces.TABLE_GET["unLEM"] = `<pre class='graph'>---
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
window.traces.TABLE_GET["unlem_schedule"] = `<pre class=''>def table_index = imm_readULEB32();
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
window.traces.TABLE_GET["unlem_scheduler"] = `<pre class='graph'>graph TD
subgraph block_5["Block 5"]
	direction TB
	b5_9["val mach_readTable32"]
	b5_15["val mach_readTable64"]
	b5_3["table_index imm_readULEB32"]
	b5_1[\\"Finish"/]
	b5_9 --> b5_15
	b5_15 --> b5_3
	b5_3 --> b5_1
end
phi_1 --> block_5
subgraph phi_1["Phi 1"]
	p1_18{{"Sϕ Stack "}}
end
block_2 --> phi_1
block_3 --> phi_1
subgraph block_2["Block 2"]
	direction TB
end
branch_0 --> block_2
subgraph branch_0["Branch 0"]
	br0_5["cond__127 m_isTable64"]

end
block_4 --> branch_0
subgraph block_4["Block 4"]
	direction TB
	b4_0[/"Start"\\]
	b4_6["index pop_u32"]
	b4_12["index pop_u64"]
	b4_5["cond__127 m_isTable64"]
	b4_11["eff__132 push_Object"]
	b4_17["eff__128 push_Object"]
	b4_0 --> b4_6
	b4_6 --> b4_12
	b4_12 --> b4_5
	b4_5 --> b4_11
	b4_11 --> b4_17
end
subgraph block_3["Block 3"]
	direction TB
end
branch_0 --> block_3

</pre>`;
window.traces.TABLE_GET["unlem_pretty"] = `<pre class=''>def table_index = imm_readULEB32();
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
window.traces.TABLE_GET["constUnLEM"] = `<pre class='graph'>---
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
window.traces.TABLE_GET["chooseMerge"] = `<pre class='graph'>---
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
window.traces.TABLE_GET["scheduled"] = `<pre class=''>def table_index = imm_readULEB32();
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
window.traces.TABLE_GET["pretty"] = `<pre class=''>def table_index = imm_readULEB32();
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
window.traces["TABLE_SET"] = {}
window.traces.TABLE_SET["parsed"] = `<pre class=''>def table_index = imm_readULEB32();
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
window.traces.TABLE_SET["raw"] = `<pre class='graph'>---
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
window.traces.TABLE_SET["overloadOps"] = `<pre class='graph'>---
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
window.traces.TABLE_SET["addAbstractions"] = `<pre class='graph'>---
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
window.traces.TABLE_SET["schedulerMermaid"] = `<pre class='graph'>graph TD
subgraph block_5["Block 5"]
	direction TB
	b5_3["table_index imm_readULEB32"]
	b5_1[\\"Finish"/]
	b5_3 --> b5_1
end
phi_1 --> block_5
subgraph phi_1["Phi 1"]
	p1_18{{"Sϕ Stack "}}
end
block_2 --> phi_1
block_3 --> phi_1
subgraph block_2["Block 2"]
	direction TB
end
branch_0 --> block_2
subgraph branch_0["Branch 0"]
	br0_5["cond__137 m_isTable64"]

end
block_4 --> branch_0
subgraph block_4["Block 4"]
	direction TB
	b4_0[/"Start"\\]
	b4_6["val pop_Object"]
	b4_12["val pop_Object"]
	b4_5["cond__137 m_isTable64"]
	b4_7["index pop_u32"]
	b4_13["index pop_u64"]
	b4_0 --> b4_6
	b4_6 --> b4_12
	b4_12 --> b4_5
	b4_5 --> b4_7
	b4_7 --> b4_13
end
subgraph block_3["Block 3"]
	direction TB
end
branch_0 --> block_3

</pre>`;
window.traces.TABLE_SET["unLEM"] = `<pre class='graph'>---
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
window.traces.TABLE_SET["unlem_schedule"] = `<pre class=''>def table_index = imm_readULEB32();
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
window.traces.TABLE_SET["unlem_scheduler"] = `<pre class='graph'>graph TD
subgraph block_5["Block 5"]
	direction TB
	b5_3["table_index imm_readULEB32"]
	b5_1[\\"Finish"/]
	b5_3 --> b5_1
end
phi_1 --> block_5
subgraph phi_1["Phi 1"]
	p1_18{{"Sϕ Stack "}}
end
block_2 --> phi_1
block_3 --> phi_1
subgraph block_2["Block 2"]
	direction TB
end
branch_0 --> block_2
subgraph branch_0["Branch 0"]
	br0_5["cond__137 m_isTable64"]

end
block_4 --> branch_0
subgraph block_4["Block 4"]
	direction TB
	b4_0[/"Start"\\]
	b4_6["val pop_Object"]
	b4_12["val pop_Object"]
	b4_5["cond__137 m_isTable64"]
	b4_7["index pop_u32"]
	b4_13["index pop_u64"]
	b4_0 --> b4_6
	b4_6 --> b4_12
	b4_12 --> b4_5
	b4_5 --> b4_7
	b4_7 --> b4_13
end
subgraph block_3["Block 3"]
	direction TB
end
branch_0 --> block_3

</pre>`;
window.traces.TABLE_SET["unlem_pretty"] = `<pre class=''>def table_index = imm_readULEB32();
def cond = m_isTable64(table_index);
if (cond) {
	def val = pop_Object();
	def index = pop_u64();
} else {
	def val = pop_Object();
	def index = pop_u32();
}
</pre>`;
window.traces.TABLE_SET["constUnLEM"] = `<pre class='graph'>---
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
window.traces.TABLE_SET["chooseMerge"] = `<pre class='graph'>---
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
window.traces.TABLE_SET["scheduled"] = `<pre class=''>def table_index = imm_readULEB32();
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
window.traces.TABLE_SET["pretty"] = `<pre class=''>def table_index = imm_readULEB32();
def cond = m_isTable64(table_index);
if (cond) {
	def val = pop_Object();
	def index = pop_u64();
} else {
	def val = pop_Object();
	def index = pop_u32();
}
</pre>`;
window.traces["I32_LOAD"] = {}
window.traces.I32_LOAD["parsed"] = `<pre class=''>def flags = imm_readU8();
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
window.traces.I32_LOAD["raw"] = `<pre class='graph'>---
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
window.traces.I32_LOAD["overloadOps"] = `<pre class='graph'>---
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
window.traces.I32_LOAD["addAbstractions"] = `<pre class='graph'>---
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
