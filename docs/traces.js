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
subgraph block_1["Block 1"]
	direction TB
	b1_0[/"Start"\\]
	b1_3["eff__0 trapUnreachable"]
	b1_1[\\"Finish"/]
	b1_0 --> b1_3
	b1_3 --> b1_1
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
subgraph block_2["Block 2"]
	direction TB
	b2_0[/"Start"\\]
	b2_1[\\"Finish"/]
	b2_0 --> b2_1
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
subgraph block_3["Block 3"]
	direction TB
	b3_0[/"Start"\\]
	b3_3["bt imm_readBlockType"]
	b3_5["eff__2 doBlock"]
	b3_1[\\"Finish"/]
	b3_0 --> b3_3
	b3_3 --> b3_5
	b3_5 --> b3_1
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
subgraph block_4["Block 4"]
	direction TB
	b4_0[/"Start"\\]
	b4_3["bt imm_readBlockType"]
	b4_5["eff__4 doLoop"]
	b4_1[\\"Finish"/]
	b4_0 --> b4_3
	b4_3 --> b4_5
	b4_5 --> b4_1
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
subgraph block_5["Block 5"]
	direction TB
	b5_1[\\"Finish"/]
end

</pre>`;
window.traces.IF["sched ctlxfer.put_IF [eff_st_put__13]"] = `<pre class='graph'>graph TD
subgraph block_5["Block 5"]
	direction TB
	b5_1[\\"Finish"/]
	b5_14["eff_st_put__13 ctlxfer.put_IF"]
	b5_14 --> b5_1
end

</pre>`;
window.traces.IF["sched StatePhi"] = `<pre class='graph'>graph TD
subgraph block_5["Block 5"]
	direction TB
	b5_1[\\"Finish"/]
	b5_14["eff_st_put__13 ctlxfer.put_IF"]
	b5_14 --> b5_1
end
phi_7 --> block_5
subgraph phi_7["Phi 7"]
	p7_13{{"Sϕ Codeptr Stack Trap Locals Globals Tables Memory Extra "}}
end
block_8 --> phi_7
block_9 --> phi_7
subgraph block_8["Block 8"]
	direction TB
end
branch_6 --> block_8
subgraph branch_6["Branch 6"]
	br6_9["cond__6 U32_equals"]

end
subgraph block_9["Block 9"]
	direction TB
end
branch_6 --> block_9

</pre>`;
window.traces.IF["sched doBranch [eff__7]"] = `<pre class='graph'>graph TD
subgraph block_5["Block 5"]
	direction TB
	b5_1[\\"Finish"/]
	b5_14["eff_st_put__13 ctlxfer.put_IF"]
	b5_14 --> b5_1
end
phi_7 --> block_5
subgraph phi_7["Phi 7"]
	p7_13{{"Sϕ Codeptr Stack Trap Locals Globals Tables Memory Extra "}}
	p7_13{{"Sϕ Codeptr Stack Trap Locals Globals Tables Memory Extra "}}
end
block_8 --> phi_7
block_9 --> phi_7
subgraph block_8["Block 8"]
	direction TB
	b8_12["eff__7 doBranch"]
end
branch_6 --> block_8
subgraph branch_6["Branch 6"]
	br6_9["cond__6 U32_equals"]

end
subgraph block_9["Block 9"]
	direction TB
end
branch_6 --> block_9

</pre>`;
window.traces.IF["sched doFallthru [eff__9]"] = `<pre class='graph'>graph TD
subgraph block_5["Block 5"]
	direction TB
	b5_1[\\"Finish"/]
	b5_14["eff_st_put__13 ctlxfer.put_IF"]
	b5_14 --> b5_1
end
phi_7 --> block_5
subgraph phi_7["Phi 7"]
	p7_13{{"Sϕ Codeptr Stack Trap Locals Globals Tables Memory Extra "}}
	p7_13{{"Sϕ Codeptr Stack Trap Locals Globals Tables Memory Extra "}}
end
block_8 --> phi_7
block_9 --> phi_7
subgraph block_8["Block 8"]
	direction TB
	b8_12["eff__7 doBranch"]
end
branch_6 --> block_8
subgraph branch_6["Branch 6"]
	br6_9["cond__6 U32_equals"]

end
subgraph block_9["Block 9"]
	direction TB
	b9_10["eff__9 doFallthru"]
end
branch_6 --> block_9

</pre>`;
window.traces.IF["sched doIf [label]"] = `<pre class='graph'>graph TD
subgraph block_5["Block 5"]
	direction TB
	b5_1[\\"Finish"/]
	b5_14["eff_st_put__13 ctlxfer.put_IF"]
	b5_14 --> b5_1
end
phi_7 --> block_5
subgraph phi_7["Phi 7"]
	p7_13{{"Sϕ Codeptr Stack Trap Locals Globals Tables Memory Extra "}}
	p7_13{{"Sϕ Codeptr Stack Trap Locals Globals Tables Memory Extra "}}
end
block_8 --> phi_7
block_9 --> phi_7
subgraph block_8["Block 8"]
	direction TB
	b8_12["eff__7 doBranch"]
end
branch_6 --> block_8
subgraph branch_6["Branch 6"]
	br6_9["cond__6 U32_equals"]

end
block_10 --> branch_6
subgraph block_10["Block 10"]
	direction TB
	b10_9["cond__6 U32_equals"]
	b10_6["label doIf"]
	b10_6 --> b10_9
end
subgraph block_9["Block 9"]
	direction TB
	b9_10["eff__9 doFallthru"]
end
branch_6 --> block_9

</pre>`;
window.traces.IF["sched pop_u32 [cond]"] = `<pre class='graph'>graph TD
subgraph block_5["Block 5"]
	direction TB
	b5_1[\\"Finish"/]
	b5_14["eff_st_put__13 ctlxfer.put_IF"]
	b5_14 --> b5_1
end
phi_7 --> block_5
subgraph phi_7["Phi 7"]
	p7_13{{"Sϕ Codeptr Stack Trap Locals Globals Tables Memory Extra "}}
	p7_13{{"Sϕ Codeptr Stack Trap Locals Globals Tables Memory Extra "}}
end
block_8 --> phi_7
block_9 --> phi_7
subgraph block_8["Block 8"]
	direction TB
	b8_12["eff__7 doBranch"]
end
branch_6 --> block_8
subgraph branch_6["Branch 6"]
	br6_9["cond__6 U32_equals"]

end
block_10 --> branch_6
subgraph block_10["Block 10"]
	direction TB
	b10_9["cond__6 U32_equals"]
	b10_6["label doIf"]
	b10_4["cond pop_u32"]
	b10_6 --> b10_9
	b10_4 --> b10_6
end
subgraph block_9["Block 9"]
	direction TB
	b9_10["eff__9 doFallthru"]
end
branch_6 --> block_9

</pre>`;
window.traces.IF["sched lift_u32 [abs__14]"] = `<pre class='graph'>graph TD
subgraph block_5["Block 5"]
	direction TB
	b5_1[\\"Finish"/]
	b5_14["eff_st_put__13 ctlxfer.put_IF"]
	b5_14 --> b5_1
end
phi_7 --> block_5
subgraph phi_7["Phi 7"]
	p7_13{{"Sϕ Codeptr Stack Trap Locals Globals Tables Memory Extra "}}
	p7_13{{"Sϕ Codeptr Stack Trap Locals Globals Tables Memory Extra "}}
end
block_8 --> phi_7
block_9 --> phi_7
subgraph block_8["Block 8"]
	direction TB
	b8_12["eff__7 doBranch"]
end
branch_6 --> block_8
subgraph branch_6["Branch 6"]
	br6_9["cond__6 U32_equals"]

end
block_10 --> branch_6
subgraph block_10["Block 10"]
	direction TB
	b10_9["cond__6 U32_equals"]
	b10_6["label doIf"]
	b10_4["cond pop_u32"]
	b10_15["abs__14 lift_u32"]
	b10_6 --> b10_9
	b10_4 --> b10_6
	b10_15 --> b10_4
end
subgraph block_9["Block 9"]
	direction TB
	b9_10["eff__9 doFallthru"]
end
branch_6 --> block_9

</pre>`;
window.traces.IF["sched imm_readBlockType [bt]"] = `<pre class='graph'>graph TD
subgraph block_5["Block 5"]
	direction TB
	b5_1[\\"Finish"/]
	b5_14["eff_st_put__13 ctlxfer.put_IF"]
	b5_14 --> b5_1
end
phi_7 --> block_5
subgraph phi_7["Phi 7"]
	p7_13{{"Sϕ Codeptr Stack Trap Locals Globals Tables Memory Extra "}}
	p7_13{{"Sϕ Codeptr Stack Trap Locals Globals Tables Memory Extra "}}
end
block_8 --> phi_7
block_9 --> phi_7
subgraph block_8["Block 8"]
	direction TB
	b8_12["eff__7 doBranch"]
end
branch_6 --> block_8
subgraph branch_6["Branch 6"]
	br6_9["cond__6 U32_equals"]

end
block_10 --> branch_6
subgraph block_10["Block 10"]
	direction TB
	b10_9["cond__6 U32_equals"]
	b10_6["label doIf"]
	b10_4["cond pop_u32"]
	b10_15["abs__14 lift_u32"]
	b10_3["bt imm_readBlockType"]
	b10_6 --> b10_9
	b10_4 --> b10_6
	b10_15 --> b10_4
	b10_3 --> b10_15
end
subgraph block_9["Block 9"]
	direction TB
	b9_10["eff__9 doFallthru"]
end
branch_6 --> block_9

</pre>`;
window.traces.IF["sched 0"] = `<pre class='graph'>graph TD
subgraph block_5["Block 5"]
	direction TB
	b5_1[\\"Finish"/]
	b5_14["eff_st_put__13 ctlxfer.put_IF"]
	b5_14 --> b5_1
end
phi_7 --> block_5
subgraph phi_7["Phi 7"]
	p7_13{{"Sϕ Codeptr Stack Trap Locals Globals Tables Memory Extra "}}
	p7_13{{"Sϕ Codeptr Stack Trap Locals Globals Tables Memory Extra "}}
end
block_8 --> phi_7
block_9 --> phi_7
subgraph block_8["Block 8"]
	direction TB
	b8_12["eff__7 doBranch"]
end
branch_6 --> block_8
subgraph branch_6["Branch 6"]
	br6_9["cond__6 U32_equals"]

end
block_10 --> branch_6
subgraph block_10["Block 10"]
	direction TB
	b10_9["cond__6 U32_equals"]
	b10_6["label doIf"]
	b10_4["cond pop_u32"]
	b10_15["abs__14 lift_u32"]
	b10_3["bt imm_readBlockType"]
	b10_7["arg__11 0"]
	b10_6 --> b10_9
	b10_4 --> b10_6
	b10_15 --> b10_4
	b10_3 --> b10_15
	b10_7 --> b10_3
end
subgraph block_9["Block 9"]
	direction TB
	b9_10["eff__9 doFallthru"]
end
branch_6 --> block_9

</pre>`;
window.traces.IF["sched Start"] = `<pre class='graph'>graph TD
subgraph block_5["Block 5"]
	direction TB
	b5_1[\\"Finish"/]
	b5_14["eff_st_put__13 ctlxfer.put_IF"]
	b5_14 --> b5_1
end
phi_7 --> block_5
subgraph phi_7["Phi 7"]
	p7_13{{"Sϕ Codeptr Stack Trap Locals Globals Tables Memory Extra "}}
	p7_13{{"Sϕ Codeptr Stack Trap Locals Globals Tables Memory Extra "}}
end
block_8 --> phi_7
block_9 --> phi_7
subgraph block_8["Block 8"]
	direction TB
	b8_12["eff__7 doBranch"]
end
branch_6 --> block_8
subgraph branch_6["Branch 6"]
	br6_9["cond__6 U32_equals"]

end
block_10 --> branch_6
subgraph block_10["Block 10"]
	direction TB
	b10_9["cond__6 U32_equals"]
	b10_6["label doIf"]
	b10_4["cond pop_u32"]
	b10_15["abs__14 lift_u32"]
	b10_3["bt imm_readBlockType"]
	b10_7["arg__11 0"]
	b10_0[/"Start"\\]
	b10_6 --> b10_9
	b10_4 --> b10_6
	b10_15 --> b10_4
	b10_3 --> b10_15
	b10_7 --> b10_3
	b10_0 --> b10_7
end
subgraph block_9["Block 9"]
	direction TB
	b9_10["eff__9 doFallthru"]
end
branch_6 --> block_9

</pre>`;
window.traces.IF["schedulerMermaid"] = `<pre class='graph'>graph TD
subgraph block_5["Block 5"]
	direction TB
	b5_14["eff_st_put__13 ctlxfer.put_IF"]
	b5_1[\\"Finish"/]
	b5_14 --> b5_1
end
phi_7 --> block_5
subgraph phi_7["Phi 7"]
	p7_13{{"Sϕ Codeptr Stack Trap Locals Globals Tables Memory Extra "}}
	p7_13{{"Sϕ Codeptr Stack Trap Locals Globals Tables Memory Extra "}}
end
block_8 --> phi_7
block_9 --> phi_7
subgraph block_8["Block 8"]
	direction TB
	b8_12["eff__7 doBranch"]
end
branch_6 --> block_8
subgraph branch_6["Branch 6"]
	br6_9["cond__6 U32_equals"]

end
block_10 --> branch_6
subgraph block_10["Block 10"]
	direction TB
	b10_0[/"Start"\\]
	b10_7["arg__11 0"]
	b10_3["bt imm_readBlockType"]
	b10_15["abs__14 lift_u32"]
	b10_4["cond pop_u32"]
	b10_6["label doIf"]
	b10_9["cond__6 U32_equals"]
	b10_0 --> b10_7
	b10_7 --> b10_3
	b10_3 --> b10_15
	b10_15 --> b10_4
	b10_4 --> b10_6
	b10_6 --> b10_9
end
subgraph block_9["Block 9"]
	direction TB
	b9_10["eff__9 doFallthru"]
end
branch_6 --> block_9

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
	22 --> 13
	24 --> 13
	23 --> 13
	23{{"Sϕ Codeptr Stack Trap Locals Globals Tables Memory Extra "}}
	20 --> 23
	12 --> 23
	10 --> 23
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
	20["mt__15 U32_maybeTrue"]
	9 --> 20
	9["cond__6 U32_equals"]
	4 --> 9
	15 --> 9
	15["abs__14 lift_u32"]
	7 --> 15
	7["arg__11 0"]
	24["eff_merge__18 merge"]
	12 --> 24
	10 --> 24
	22["mb__17 bool.&&"]
	20 --> 22
	21 --> 22
	21["mf__16 U32_maybeFalse"]
	9 --> 21
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
	24 -. Extra .-> 14
	24["eff_merge__18 merge"]
	12 --> 24
	10 --> 24
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
	24 -. Extra .-> 14
	24["eff_merge__18 merge"]
	12 --> 24
	10 --> 24
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
subgraph block_11["Block 11"]
	direction TB
	b11_0[/"Start"\\]
	b11_3["label doElse"]
	b11_5["eff__19 doBranch"]
	b11_6["eff_st_put__21 ctlxfer.put_ELSE"]
	b11_1[\\"Finish"/]
	b11_0 --> b11_3
	b11_3 --> b11_5
	b11_5 --> b11_6
	b11_6 --> b11_1
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
subgraph block_12["Block 12"]
	direction TB
	b12_0[/"Start"\\]
	b12_3["bt imm_readBlockType"]
	b12_5["eff__22 doTry"]
	b12_1[\\"Finish"/]
	b12_0 --> b12_3
	b12_3 --> b12_5
	b12_5 --> b12_1
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
