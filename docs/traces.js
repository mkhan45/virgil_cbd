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
window.traces.UNREACHABLE["unlem_scheduler"] = `<pre class='graph'>graph TD
subgraph block_2["Block 2"]
	direction TB
	b2_0[/"Start"\\]
	b2_3["eff__0 trapUnreachable"]
	b2_1[\\"Finish"/]
	b2_0 --> b2_3
	b2_3 --> b2_1
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
subgraph block_3["Block 3"]
	direction TB
	b3_0[/"Start"\\]
	b3_1[\\"Finish"/]
	b3_0 --> b3_1
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
subgraph block_4["Block 4"]
	direction TB
	b4_0[/"Start"\\]
	b4_1[\\"Finish"/]
	b4_0 --> b4_1
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
subgraph block_9["Block 9"]
	direction TB
	b9_1[\\"Finish"/]
end

</pre>`;
window.traces.IF["sched ctlxfer.put_IF [eff_st_put__13]"] = `<pre class='graph'>graph TD
subgraph block_9["Block 9"]
	direction TB
	b9_1[\\"Finish"/]
	b9_14["eff_st_put__13 ctlxfer.put_IF"]
	b9_14 --> b9_1
end

</pre>`;
window.traces.IF["sched doBranch [eff__7]"] = `<pre class='graph'>graph TD
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
window.traces.IF["sched doFallthru [eff__9]"] = `<pre class='graph'>graph TD
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
window.traces.IF["sched StatePhi"] = `<pre class='graph'>graph TD
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
window.traces.IF["sched U32_equals [cond__6]"] = `<pre class='graph'>graph TD
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
	b14_6["label doIf"]
	b14_9["cond__6 U32_equals"]
	b14_9 --> b14_6
end
subgraph block_13["Block 13"]
	direction TB
	b13_10["eff__9 doFallthru"]
end
branch_10 --> block_13

</pre>`;
window.traces.IF["sched imm_readBlockType [bt]"] = `<pre class='graph'>graph TD
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
	b14_6["label doIf"]
	b14_9["cond__6 U32_equals"]
	b14_3["bt imm_readBlockType"]
	b14_9 --> b14_6
	b14_3 --> b14_9
end
subgraph block_13["Block 13"]
	direction TB
	b13_10["eff__9 doFallthru"]
end
branch_10 --> block_13

</pre>`;
window.traces.IF["sched pop_u32 [cond]"] = `<pre class='graph'>graph TD
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
	b14_6["label doIf"]
	b14_9["cond__6 U32_equals"]
	b14_3["bt imm_readBlockType"]
	b14_4["cond pop_u32"]
	b14_9 --> b14_6
	b14_3 --> b14_9
	b14_4 --> b14_3
end
subgraph block_13["Block 13"]
	direction TB
	b13_10["eff__9 doFallthru"]
end
branch_10 --> block_13

</pre>`;
window.traces.IF["sched lift_u32 [abs__14]"] = `<pre class='graph'>graph TD
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
	b14_6["label doIf"]
	b14_9["cond__6 U32_equals"]
	b14_3["bt imm_readBlockType"]
	b14_4["cond pop_u32"]
	b14_15["abs__14 lift_u32"]
	b14_9 --> b14_6
	b14_3 --> b14_9
	b14_4 --> b14_3
	b14_15 --> b14_4
end
subgraph block_13["Block 13"]
	direction TB
	b13_10["eff__9 doFallthru"]
end
branch_10 --> block_13

</pre>`;
window.traces.IF["sched 0"] = `<pre class='graph'>graph TD
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
	b14_6["label doIf"]
	b14_9["cond__6 U32_equals"]
	b14_3["bt imm_readBlockType"]
	b14_4["cond pop_u32"]
	b14_15["abs__14 lift_u32"]
	b14_7["arg__11 0"]
	b14_9 --> b14_6
	b14_3 --> b14_9
	b14_4 --> b14_3
	b14_15 --> b14_4
	b14_7 --> b14_15
end
subgraph block_13["Block 13"]
	direction TB
	b13_10["eff__9 doFallthru"]
end
branch_10 --> block_13

</pre>`;
window.traces.IF["sched Start"] = `<pre class='graph'>graph TD
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
	b14_6["label doIf"]
	b14_9["cond__6 U32_equals"]
	b14_3["bt imm_readBlockType"]
	b14_4["cond pop_u32"]
	b14_15["abs__14 lift_u32"]
	b14_7["arg__11 0"]
	b14_0[/"Start"\\]
	b14_9 --> b14_6
	b14_3 --> b14_9
	b14_4 --> b14_3
	b14_15 --> b14_4
	b14_7 --> b14_15
	b14_0 --> b14_7
end
subgraph block_13["Block 13"]
	direction TB
	b13_10["eff__9 doFallthru"]
end
branch_10 --> block_13

</pre>`;
window.traces.IF["schedulerMermaid"] = `<pre class='graph'>graph TD
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
	b14_15["abs__14 lift_u32"]
	b14_4["cond pop_u32"]
	b14_3["bt imm_readBlockType"]
	b14_9["cond__6 U32_equals"]
	b14_6["label doIf"]
	b14_0 --> b14_7
	b14_7 --> b14_15
	b14_15 --> b14_4
	b14_4 --> b14_3
	b14_3 --> b14_9
	b14_9 --> b14_6
end
subgraph block_13["Block 13"]
	direction TB
	b13_10["eff__9 doFallthru"]
end
branch_10 --> block_13

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
window.traces["IF_ul"] = {}
window.traces.IF_ul["sched Finish"] = `<pre class='graph'>graph TD
subgraph block_15["Block 15"]
	direction TB
	b15_1[\\"Finish"/]
end

</pre>`;
window.traces.IF_ul["sched ctlxfer.put_IF [eff_st_put__13]"] = `<pre class='graph'>graph TD
subgraph block_15["Block 15"]
	direction TB
	b15_1[\\"Finish"/]
	b15_14["eff_st_put__13 ctlxfer.put_IF"]
	b15_14 --> b15_1
end

</pre>`;
window.traces.IF_ul["sched merge [eff_merge__18]"] = `<pre class='graph'>graph TD
subgraph block_15["Block 15"]
	direction TB
	b15_1[\\"Finish"/]
	b15_14["eff_st_put__13 ctlxfer.put_IF"]
	b15_14 --> b15_1
end
phi_17 --> block_15
subgraph phi_17["Phi 17"]
	p17_13{{"Sϕ Codeptr Stack Trap Locals Globals Tables Memory Extra "}}
end
block_18 --> phi_17
block_19 --> phi_17
subgraph block_18["Block 18"]
	direction TB
	b18_24["eff_merge__18 merge"]
end
branch_16 --> block_18
subgraph branch_16["Branch 16"]
	br16_22["mb__17 bool.&&"]

end
subgraph block_19["Block 19"]
	direction TB
end
branch_16 --> block_19

</pre>`;
window.traces.IF_ul["sched doBranch [eff__7]"] = `<pre class='graph'>graph TD
subgraph block_15["Block 15"]
	direction TB
	b15_1[\\"Finish"/]
	b15_14["eff_st_put__13 ctlxfer.put_IF"]
	b15_14 --> b15_1
end
phi_17 --> block_15
subgraph phi_17["Phi 17"]
	p17_13{{"Sϕ Codeptr Stack Trap Locals Globals Tables Memory Extra "}}
end
block_18 --> phi_17
block_19 --> phi_17
subgraph block_18["Block 18"]
	direction TB
	b18_24["eff_merge__18 merge"]
end
branch_16 --> block_18
subgraph branch_16["Branch 16"]
	br16_22["mb__17 bool.&&"]

end
subgraph block_19["Block 19"]
	direction TB
end
phi_21 --> block_19
subgraph phi_21["Phi 21"]
	p21_23{{"Sϕ Codeptr Stack Trap Locals Globals Tables Memory Extra "}}
end
block_22 --> phi_21
block_23 --> phi_21
subgraph block_22["Block 22"]
	direction TB
	b22_12["eff__7 doBranch"]
end
branch_20 --> block_22
subgraph branch_20["Branch 20"]
	br20_20["mt__15 U32_maybeTrue"]

end
branch_16 --> branch_20
subgraph block_23["Block 23"]
	direction TB
end
branch_20 --> block_23

</pre>`;
window.traces.IF_ul["sched doFallthru [eff__9]"] = `<pre class='graph'>graph TD
subgraph block_15["Block 15"]
	direction TB
	b15_1[\\"Finish"/]
	b15_14["eff_st_put__13 ctlxfer.put_IF"]
	b15_14 --> b15_1
end
phi_17 --> block_15
subgraph phi_17["Phi 17"]
	p17_13{{"Sϕ Codeptr Stack Trap Locals Globals Tables Memory Extra "}}
end
block_18 --> phi_17
block_19 --> phi_17
subgraph block_18["Block 18"]
	direction TB
	b18_24["eff_merge__18 merge"]
end
branch_16 --> block_18
subgraph branch_16["Branch 16"]
	br16_22["mb__17 bool.&&"]

end
subgraph block_19["Block 19"]
	direction TB
end
phi_21 --> block_19
subgraph phi_21["Phi 21"]
	p21_23{{"Sϕ Codeptr Stack Trap Locals Globals Tables Memory Extra "}}
end
block_22 --> phi_21
block_23 --> phi_21
subgraph block_22["Block 22"]
	direction TB
	b22_12["eff__7 doBranch"]
end
branch_20 --> block_22
subgraph branch_20["Branch 20"]
	br20_20["mt__15 U32_maybeTrue"]

end
branch_16 --> branch_20
subgraph block_23["Block 23"]
	direction TB
	b23_10["eff__9 doFallthru"]
end
branch_20 --> block_23

</pre>`;
window.traces.IF_ul["sched StatePhi"] = `<pre class='graph'>graph TD
subgraph block_15["Block 15"]
	direction TB
	b15_1[\\"Finish"/]
	b15_14["eff_st_put__13 ctlxfer.put_IF"]
	b15_14 --> b15_1
end
phi_17 --> block_15
subgraph phi_17["Phi 17"]
	p17_13{{"Sϕ Codeptr Stack Trap Locals Globals Tables Memory Extra "}}
end
block_18 --> phi_17
block_19 --> phi_17
subgraph block_18["Block 18"]
	direction TB
	b18_24["eff_merge__18 merge"]
end
branch_16 --> block_18
subgraph branch_16["Branch 16"]
	br16_22["mb__17 bool.&&"]

end
subgraph block_19["Block 19"]
	direction TB
end
phi_21 --> block_19
subgraph phi_21["Phi 21"]
	p21_23{{"Sϕ Codeptr Stack Trap Locals Globals Tables Memory Extra "}}
end
block_22 --> phi_21
block_23 --> phi_21
subgraph block_22["Block 22"]
	direction TB
	b22_12["eff__7 doBranch"]
end
branch_20 --> block_22
subgraph branch_20["Branch 20"]
	br20_20["mt__15 U32_maybeTrue"]

end
branch_16 --> branch_20
subgraph block_23["Block 23"]
	direction TB
	b23_10["eff__9 doFallthru"]
end
branch_20 --> block_23

</pre>`;
window.traces.IF_ul["sched StatePhi"] = `<pre class='graph'>graph TD
subgraph block_15["Block 15"]
	direction TB
	b15_1[\\"Finish"/]
	b15_14["eff_st_put__13 ctlxfer.put_IF"]
	b15_14 --> b15_1
end
phi_17 --> block_15
subgraph phi_17["Phi 17"]
	p17_13{{"Sϕ Codeptr Stack Trap Locals Globals Tables Memory Extra "}}
end
block_18 --> phi_17
block_19 --> phi_17
subgraph block_18["Block 18"]
	direction TB
	b18_24["eff_merge__18 merge"]
end
branch_16 --> block_18
subgraph branch_16["Branch 16"]
	br16_22["mb__17 bool.&&"]

end
subgraph block_19["Block 19"]
	direction TB
end
phi_21 --> block_19
subgraph phi_21["Phi 21"]
	p21_23{{"Sϕ Codeptr Stack Trap Locals Globals Tables Memory Extra "}}
end
block_22 --> phi_21
block_23 --> phi_21
subgraph block_22["Block 22"]
	direction TB
	b22_12["eff__7 doBranch"]
end
branch_20 --> block_22
subgraph branch_20["Branch 20"]
	br20_20["mt__15 U32_maybeTrue"]

end
branch_16 --> branch_20
subgraph block_23["Block 23"]
	direction TB
	b23_10["eff__9 doFallthru"]
end
branch_20 --> block_23

</pre>`;
window.traces.IF_ul["sched bool.&& [mb__17]"] = `<pre class='graph'>graph TD
subgraph block_15["Block 15"]
	direction TB
	b15_1[\\"Finish"/]
	b15_14["eff_st_put__13 ctlxfer.put_IF"]
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
	b18_24["eff_merge__18 merge"]
end
branch_16 --> block_18
subgraph branch_16["Branch 16"]
	br16_22["mb__17 bool.&&"]

end
block_24 --> branch_16
subgraph block_24["Block 24"]
	direction TB
	b24_6["label doIf"]
	b24_22["mb__17 bool.&&"]
	b24_22 --> b24_6
end
subgraph block_19["Block 19"]
	direction TB
end
phi_21 --> block_19
subgraph phi_21["Phi 21"]
	p21_23{{"Sϕ Codeptr Stack Trap Locals Globals Tables Memory Extra "}}
	p21_23{{"Sϕ Codeptr Stack Trap Locals Globals Tables Memory Extra "}}
end
block_22 --> phi_21
block_23 --> phi_21
subgraph block_22["Block 22"]
	direction TB
	b22_12["eff__7 doBranch"]
end
branch_20 --> block_22
subgraph branch_20["Branch 20"]
	br20_20["mt__15 U32_maybeTrue"]

end
branch_16 --> branch_20
subgraph block_23["Block 23"]
	direction TB
	b23_10["eff__9 doFallthru"]
end
branch_20 --> block_23

</pre>`;
window.traces.IF_ul["sched imm_readBlockType [bt]"] = `<pre class='graph'>graph TD
subgraph block_15["Block 15"]
	direction TB
	b15_1[\\"Finish"/]
	b15_14["eff_st_put__13 ctlxfer.put_IF"]
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
	b18_24["eff_merge__18 merge"]
end
branch_16 --> block_18
subgraph branch_16["Branch 16"]
	br16_22["mb__17 bool.&&"]

end
block_24 --> branch_16
subgraph block_24["Block 24"]
	direction TB
	b24_6["label doIf"]
	b24_22["mb__17 bool.&&"]
	b24_3["bt imm_readBlockType"]
	b24_22 --> b24_6
	b24_3 --> b24_22
end
subgraph block_19["Block 19"]
	direction TB
end
phi_21 --> block_19
subgraph phi_21["Phi 21"]
	p21_23{{"Sϕ Codeptr Stack Trap Locals Globals Tables Memory Extra "}}
	p21_23{{"Sϕ Codeptr Stack Trap Locals Globals Tables Memory Extra "}}
end
block_22 --> phi_21
block_23 --> phi_21
subgraph block_22["Block 22"]
	direction TB
	b22_12["eff__7 doBranch"]
end
branch_20 --> block_22
subgraph branch_20["Branch 20"]
	br20_20["mt__15 U32_maybeTrue"]

end
branch_16 --> branch_20
subgraph block_23["Block 23"]
	direction TB
	b23_10["eff__9 doFallthru"]
end
branch_20 --> block_23

</pre>`;
window.traces.IF_ul["sched pop_u32 [cond]"] = `<pre class='graph'>graph TD
subgraph block_15["Block 15"]
	direction TB
	b15_1[\\"Finish"/]
	b15_14["eff_st_put__13 ctlxfer.put_IF"]
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
	b18_24["eff_merge__18 merge"]
end
branch_16 --> block_18
subgraph branch_16["Branch 16"]
	br16_22["mb__17 bool.&&"]

end
block_24 --> branch_16
subgraph block_24["Block 24"]
	direction TB
	b24_6["label doIf"]
	b24_22["mb__17 bool.&&"]
	b24_3["bt imm_readBlockType"]
	b24_4["cond pop_u32"]
	b24_22 --> b24_6
	b24_3 --> b24_22
	b24_4 --> b24_3
end
subgraph block_19["Block 19"]
	direction TB
end
phi_21 --> block_19
subgraph phi_21["Phi 21"]
	p21_23{{"Sϕ Codeptr Stack Trap Locals Globals Tables Memory Extra "}}
	p21_23{{"Sϕ Codeptr Stack Trap Locals Globals Tables Memory Extra "}}
end
block_22 --> phi_21
block_23 --> phi_21
subgraph block_22["Block 22"]
	direction TB
	b22_12["eff__7 doBranch"]
end
branch_20 --> block_22
subgraph branch_20["Branch 20"]
	br20_20["mt__15 U32_maybeTrue"]

end
branch_16 --> branch_20
subgraph block_23["Block 23"]
	direction TB
	b23_10["eff__9 doFallthru"]
end
branch_20 --> block_23

</pre>`;
window.traces.IF_ul["sched U32_maybeTrue [mt__15]"] = `<pre class='graph'>graph TD
subgraph block_15["Block 15"]
	direction TB
	b15_1[\\"Finish"/]
	b15_14["eff_st_put__13 ctlxfer.put_IF"]
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
	b18_24["eff_merge__18 merge"]
end
branch_16 --> block_18
subgraph branch_16["Branch 16"]
	br16_22["mb__17 bool.&&"]

end
block_24 --> branch_16
subgraph block_24["Block 24"]
	direction TB
	b24_6["label doIf"]
	b24_22["mb__17 bool.&&"]
	b24_3["bt imm_readBlockType"]
	b24_4["cond pop_u32"]
	b24_20["mt__15 U32_maybeTrue"]
	b24_22 --> b24_6
	b24_3 --> b24_22
	b24_4 --> b24_3
	b24_20 --> b24_4
end
subgraph block_19["Block 19"]
	direction TB
end
phi_21 --> block_19
subgraph phi_21["Phi 21"]
	p21_23{{"Sϕ Codeptr Stack Trap Locals Globals Tables Memory Extra "}}
	p21_23{{"Sϕ Codeptr Stack Trap Locals Globals Tables Memory Extra "}}
end
block_22 --> phi_21
block_23 --> phi_21
subgraph block_22["Block 22"]
	direction TB
	b22_12["eff__7 doBranch"]
end
branch_20 --> block_22
subgraph branch_20["Branch 20"]
	br20_20["mt__15 U32_maybeTrue"]

end
branch_16 --> branch_20
subgraph block_23["Block 23"]
	direction TB
	b23_10["eff__9 doFallthru"]
end
branch_20 --> block_23

</pre>`;
window.traces.IF_ul["sched U32_maybeFalse [mf__16]"] = `<pre class='graph'>graph TD
subgraph block_15["Block 15"]
	direction TB
	b15_1[\\"Finish"/]
	b15_14["eff_st_put__13 ctlxfer.put_IF"]
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
	b18_24["eff_merge__18 merge"]
end
branch_16 --> block_18
subgraph branch_16["Branch 16"]
	br16_22["mb__17 bool.&&"]

end
block_24 --> branch_16
subgraph block_24["Block 24"]
	direction TB
	b24_6["label doIf"]
	b24_22["mb__17 bool.&&"]
	b24_3["bt imm_readBlockType"]
	b24_4["cond pop_u32"]
	b24_20["mt__15 U32_maybeTrue"]
	b24_21["mf__16 U32_maybeFalse"]
	b24_22 --> b24_6
	b24_3 --> b24_22
	b24_4 --> b24_3
	b24_20 --> b24_4
	b24_21 --> b24_20
end
subgraph block_19["Block 19"]
	direction TB
end
phi_21 --> block_19
subgraph phi_21["Phi 21"]
	p21_23{{"Sϕ Codeptr Stack Trap Locals Globals Tables Memory Extra "}}
	p21_23{{"Sϕ Codeptr Stack Trap Locals Globals Tables Memory Extra "}}
end
block_22 --> phi_21
block_23 --> phi_21
subgraph block_22["Block 22"]
	direction TB
	b22_12["eff__7 doBranch"]
end
branch_20 --> block_22
subgraph branch_20["Branch 20"]
	br20_20["mt__15 U32_maybeTrue"]

end
branch_16 --> branch_20
subgraph block_23["Block 23"]
	direction TB
	b23_10["eff__9 doFallthru"]
end
branch_20 --> block_23

</pre>`;
window.traces.IF_ul["sched U32_equals [cond__6]"] = `<pre class='graph'>graph TD
subgraph block_15["Block 15"]
	direction TB
	b15_1[\\"Finish"/]
	b15_14["eff_st_put__13 ctlxfer.put_IF"]
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
	b18_24["eff_merge__18 merge"]
end
branch_16 --> block_18
subgraph branch_16["Branch 16"]
	br16_22["mb__17 bool.&&"]

end
block_24 --> branch_16
subgraph block_24["Block 24"]
	direction TB
	b24_6["label doIf"]
	b24_22["mb__17 bool.&&"]
	b24_3["bt imm_readBlockType"]
	b24_4["cond pop_u32"]
	b24_20["mt__15 U32_maybeTrue"]
	b24_21["mf__16 U32_maybeFalse"]
	b24_9["cond__6 U32_equals"]
	b24_22 --> b24_6
	b24_3 --> b24_22
	b24_4 --> b24_3
	b24_20 --> b24_4
	b24_21 --> b24_20
	b24_9 --> b24_21
end
subgraph block_19["Block 19"]
	direction TB
end
phi_21 --> block_19
subgraph phi_21["Phi 21"]
	p21_23{{"Sϕ Codeptr Stack Trap Locals Globals Tables Memory Extra "}}
	p21_23{{"Sϕ Codeptr Stack Trap Locals Globals Tables Memory Extra "}}
end
block_22 --> phi_21
block_23 --> phi_21
subgraph block_22["Block 22"]
	direction TB
	b22_12["eff__7 doBranch"]
end
branch_20 --> block_22
subgraph branch_20["Branch 20"]
	br20_20["mt__15 U32_maybeTrue"]

end
branch_16 --> branch_20
subgraph block_23["Block 23"]
	direction TB
	b23_10["eff__9 doFallthru"]
end
branch_20 --> block_23

</pre>`;
window.traces.IF_ul["sched lift_u32 [abs__14]"] = `<pre class='graph'>graph TD
subgraph block_15["Block 15"]
	direction TB
	b15_1[\\"Finish"/]
	b15_14["eff_st_put__13 ctlxfer.put_IF"]
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
	b18_24["eff_merge__18 merge"]
end
branch_16 --> block_18
subgraph branch_16["Branch 16"]
	br16_22["mb__17 bool.&&"]

end
block_24 --> branch_16
subgraph block_24["Block 24"]
	direction TB
	b24_6["label doIf"]
	b24_22["mb__17 bool.&&"]
	b24_3["bt imm_readBlockType"]
	b24_4["cond pop_u32"]
	b24_20["mt__15 U32_maybeTrue"]
	b24_21["mf__16 U32_maybeFalse"]
	b24_9["cond__6 U32_equals"]
	b24_15["abs__14 lift_u32"]
	b24_22 --> b24_6
	b24_3 --> b24_22
	b24_4 --> b24_3
	b24_20 --> b24_4
	b24_21 --> b24_20
	b24_9 --> b24_21
	b24_15 --> b24_9
end
subgraph block_19["Block 19"]
	direction TB
end
phi_21 --> block_19
subgraph phi_21["Phi 21"]
	p21_23{{"Sϕ Codeptr Stack Trap Locals Globals Tables Memory Extra "}}
	p21_23{{"Sϕ Codeptr Stack Trap Locals Globals Tables Memory Extra "}}
end
block_22 --> phi_21
block_23 --> phi_21
subgraph block_22["Block 22"]
	direction TB
	b22_12["eff__7 doBranch"]
end
branch_20 --> block_22
subgraph branch_20["Branch 20"]
	br20_20["mt__15 U32_maybeTrue"]

end
branch_16 --> branch_20
subgraph block_23["Block 23"]
	direction TB
	b23_10["eff__9 doFallthru"]
end
branch_20 --> block_23

</pre>`;
window.traces.IF_ul["sched 0"] = `<pre class='graph'>graph TD
subgraph block_15["Block 15"]
	direction TB
	b15_1[\\"Finish"/]
	b15_14["eff_st_put__13 ctlxfer.put_IF"]
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
	b18_24["eff_merge__18 merge"]
end
branch_16 --> block_18
subgraph branch_16["Branch 16"]
	br16_22["mb__17 bool.&&"]

end
block_24 --> branch_16
subgraph block_24["Block 24"]
	direction TB
	b24_6["label doIf"]
	b24_22["mb__17 bool.&&"]
	b24_3["bt imm_readBlockType"]
	b24_4["cond pop_u32"]
	b24_20["mt__15 U32_maybeTrue"]
	b24_21["mf__16 U32_maybeFalse"]
	b24_9["cond__6 U32_equals"]
	b24_15["abs__14 lift_u32"]
	b24_7["arg__11 0"]
	b24_22 --> b24_6
	b24_3 --> b24_22
	b24_4 --> b24_3
	b24_20 --> b24_4
	b24_21 --> b24_20
	b24_9 --> b24_21
	b24_15 --> b24_9
	b24_7 --> b24_15
end
subgraph block_19["Block 19"]
	direction TB
end
phi_21 --> block_19
subgraph phi_21["Phi 21"]
	p21_23{{"Sϕ Codeptr Stack Trap Locals Globals Tables Memory Extra "}}
	p21_23{{"Sϕ Codeptr Stack Trap Locals Globals Tables Memory Extra "}}
end
block_22 --> phi_21
block_23 --> phi_21
subgraph block_22["Block 22"]
	direction TB
	b22_12["eff__7 doBranch"]
end
branch_20 --> block_22
subgraph branch_20["Branch 20"]
	br20_20["mt__15 U32_maybeTrue"]

end
branch_16 --> branch_20
subgraph block_23["Block 23"]
	direction TB
	b23_10["eff__9 doFallthru"]
end
branch_20 --> block_23

</pre>`;
window.traces.IF_ul["sched Start"] = `<pre class='graph'>graph TD
subgraph block_15["Block 15"]
	direction TB
	b15_1[\\"Finish"/]
	b15_14["eff_st_put__13 ctlxfer.put_IF"]
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
	b18_24["eff_merge__18 merge"]
end
branch_16 --> block_18
subgraph branch_16["Branch 16"]
	br16_22["mb__17 bool.&&"]

end
block_24 --> branch_16
subgraph block_24["Block 24"]
	direction TB
	b24_6["label doIf"]
	b24_22["mb__17 bool.&&"]
	b24_3["bt imm_readBlockType"]
	b24_4["cond pop_u32"]
	b24_20["mt__15 U32_maybeTrue"]
	b24_21["mf__16 U32_maybeFalse"]
	b24_9["cond__6 U32_equals"]
	b24_15["abs__14 lift_u32"]
	b24_7["arg__11 0"]
	b24_0[/"Start"\\]
	b24_22 --> b24_6
	b24_3 --> b24_22
	b24_4 --> b24_3
	b24_20 --> b24_4
	b24_21 --> b24_20
	b24_9 --> b24_21
	b24_15 --> b24_9
	b24_7 --> b24_15
	b24_0 --> b24_7
end
subgraph block_19["Block 19"]
	direction TB
end
phi_21 --> block_19
subgraph phi_21["Phi 21"]
	p21_23{{"Sϕ Codeptr Stack Trap Locals Globals Tables Memory Extra "}}
	p21_23{{"Sϕ Codeptr Stack Trap Locals Globals Tables Memory Extra "}}
end
block_22 --> phi_21
block_23 --> phi_21
subgraph block_22["Block 22"]
	direction TB
	b22_12["eff__7 doBranch"]
end
branch_20 --> block_22
subgraph branch_20["Branch 20"]
	br20_20["mt__15 U32_maybeTrue"]

end
branch_16 --> branch_20
subgraph block_23["Block 23"]
	direction TB
	b23_10["eff__9 doFallthru"]
end
branch_20 --> block_23

</pre>`;
window.traces.IF["unlem_scheduler"] = `<pre class='graph'>graph TD
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
	b18_24["eff_merge__18 merge"]
end
branch_16 --> block_18
subgraph branch_16["Branch 16"]
	br16_22["mb__17 bool.&&"]

end
block_24 --> branch_16
subgraph block_24["Block 24"]
	direction TB
	b24_0[/"Start"\\]
	b24_7["arg__11 0"]
	b24_15["abs__14 lift_u32"]
	b24_9["cond__6 U32_equals"]
	b24_21["mf__16 U32_maybeFalse"]
	b24_20["mt__15 U32_maybeTrue"]
	b24_4["cond pop_u32"]
	b24_3["bt imm_readBlockType"]
	b24_22["mb__17 bool.&&"]
	b24_6["label doIf"]
	b24_0 --> b24_7
	b24_7 --> b24_15
	b24_15 --> b24_9
	b24_9 --> b24_21
	b24_21 --> b24_20
	b24_20 --> b24_4
	b24_4 --> b24_3
	b24_3 --> b24_22
	b24_22 --> b24_6
end
subgraph block_19["Block 19"]
	direction TB
end
phi_21 --> block_19
subgraph phi_21["Phi 21"]
	p21_23{{"Sϕ Codeptr Stack Trap Locals Globals Tables Memory Extra "}}
	p21_23{{"Sϕ Codeptr Stack Trap Locals Globals Tables Memory Extra "}}
end
block_22 --> phi_21
block_23 --> phi_21
subgraph block_22["Block 22"]
	direction TB
	b22_12["eff__7 doBranch"]
end
branch_20 --> block_22
subgraph branch_20["Branch 20"]
	br20_20["mt__15 U32_maybeTrue"]

end
branch_16 --> branch_20
subgraph block_23["Block 23"]
	direction TB
	b23_10["eff__9 doFallthru"]
end
branch_20 --> block_23

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
	b34_3["eff__26 doEnd"]
	b34_4["cond__24 f_isAtEnd"]
	b34_0 --> b34_3
	b34_3 --> b34_4
end
subgraph block_33["Block 33"]
	direction TB
end
branch_30 --> block_33

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
	b40_3["eff__26 doEnd"]
	b40_4["cond__24 f_isAtEnd"]
	b40_0 --> b40_3
	b40_3 --> b40_4
end
subgraph block_39["Block 39"]
	direction TB
end
branch_36 --> block_39

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
subgraph block_43["Block 43"]
	direction TB
	b43_5["label f_getLabel"]
	b43_14["eff_st_put__38 ctlxfer.put_BR_IF"]
	b43_1[\\"Finish"/]
	b43_5 --> b43_14
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
	b48_9["cond__31 U32_not_equals"]
	b48_0 --> b48_7
	b48_7 --> b48_15
	b48_15 --> b48_6
	b48_6 --> b48_3
	b48_3 --> b48_9
end
subgraph block_47["Block 47"]
	direction TB
	b47_10["eff__34 doFallthru"]
end
branch_44 --> block_47

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
	22 --> 13
	24 --> 13
	23 --> 13
	23{{"Sϕ Codeptr Stack Trap Locals Globals Tables Memory Extra "}}
	20 --> 23
	12 --> 23
	10 --> 23
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
	20["mt__40 U32_maybeTrue"]
	9 --> 20
	9["cond__31 U32_not_equals"]
	6 --> 9
	15 --> 9
	15["abs__39 lift_u32"]
	7 --> 15
	7["arg__36 0"]
	24["eff_merge__43 merge"]
	12 --> 24
	10 --> 24
	22["mb__42 bool.&&"]
	20 --> 22
	21 --> 22
	21["mf__41 U32_maybeFalse"]
	9 --> 21
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
subgraph block_49["Block 49"]
	direction TB
	b49_5["label f_getLabel"]
	b49_14["eff_st_put__38 ctlxfer.put_BR_IF"]
	b49_1[\\"Finish"/]
	b49_5 --> b49_14
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
	b52_24["eff_merge__43 merge"]
end
branch_50 --> block_52
subgraph branch_50["Branch 50"]
	br50_22["mb__42 bool.&&"]

end
block_58 --> branch_50
subgraph block_58["Block 58"]
	direction TB
	b58_0[/"Start"\\]
	b58_7["arg__36 0"]
	b58_15["abs__39 lift_u32"]
	b58_6["cond pop_u32"]
	b58_9["cond__31 U32_not_equals"]
	b58_21["mf__41 U32_maybeFalse"]
	b58_20["mt__40 U32_maybeTrue"]
	b58_3["depth imm_readULEB32"]
	b58_22["mb__42 bool.&&"]
	b58_0 --> b58_7
	b58_7 --> b58_15
	b58_15 --> b58_6
	b58_6 --> b58_9
	b58_9 --> b58_21
	b58_21 --> b58_20
	b58_20 --> b58_3
	b58_3 --> b58_22
end
subgraph block_53["Block 53"]
	direction TB
end
phi_55 --> block_53
subgraph phi_55["Phi 55"]
	p55_23{{"Sϕ Codeptr Stack Trap Locals Globals Tables Memory Extra "}}
	p55_23{{"Sϕ Codeptr Stack Trap Locals Globals Tables Memory Extra "}}
end
block_56 --> phi_55
block_57 --> phi_55
subgraph block_56["Block 56"]
	direction TB
	b56_12["eff__32 doBranch"]
end
branch_54 --> block_56
subgraph branch_54["Branch 54"]
	br54_20["mt__40 U32_maybeTrue"]

end
branch_50 --> branch_54
subgraph block_57["Block 57"]
	direction TB
	b57_10["eff__34 doFallthru"]
end
branch_54 --> block_57

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
	24 -. Extra .-> 14
	24["eff_merge__43 merge"]
	12 --> 24
	10 --> 24
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
	24 -. Extra .-> 14
	24["eff_merge__43 merge"]
	12 --> 24
	10 --> 24
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
subgraph block_61["Block 61"]
	direction TB
	b61_0[/"Start"\\]
	b61_3["eff__48 doReturn"]
	b61_1[\\"Finish"/]
	b61_0 --> b61_3
	b61_3 --> b61_1
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
subgraph block_62["Block 62"]
	direction TB
	b62_0[/"Start"\\]
	b62_3["eff__48 doReturn"]
	b62_1[\\"Finish"/]
	b62_0 --> b62_3
	b62_3 --> b62_1
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
