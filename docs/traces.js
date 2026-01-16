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
	b1_1[\\"Finish"/]
	b1_3["eff__0 trapUnreachable"]
	b1_0[/"Start"\\]
	b1_3 --> b1_1
	b1_0 --> b1_3
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
	b2_1[\\"Finish"/]
	b2_3["eff__0 trapUnreachable"]
	b2_0[/"Start"\\]
	b2_3 --> b2_1
	b2_0 --> b2_3
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
	b3_1[\\"Finish"/]
	b3_0[/"Start"\\]
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
	b4_1[\\"Finish"/]
	b4_0[/"Start"\\]
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
	b5_1[\\"Finish"/]
	b5_5["eff__2 doBlock"]
	b5_3["bt imm_readBlockType"]
	b5_0[/"Start"\\]
	b5_5 --> b5_1
	b5_3 --> b5_5
	b5_0 --> b5_3
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
	b6_1[\\"Finish"/]
	b6_5["eff__2 doBlock"]
	b6_3["bt imm_readBlockType"]
	b6_0[/"Start"\\]
	b6_5 --> b6_1
	b6_3 --> b6_5
	b6_0 --> b6_3
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
	b7_1[\\"Finish"/]
	b7_5["eff__4 doLoop"]
	b7_3["bt imm_readBlockType"]
	b7_0[/"Start"\\]
	b7_5 --> b7_1
	b7_3 --> b7_5
	b7_0 --> b7_3
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
	b8_1[\\"Finish"/]
	b8_5["eff__4 doLoop"]
	b8_3["bt imm_readBlockType"]
	b8_0[/"Start"\\]
	b8_5 --> b8_1
	b8_3 --> b8_5
	b8_0 --> b8_3
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
window.traces.IF["sched doBranch [eff__7]"] = `<pre class='graph'>graph TD
subgraph block_9["Block 9"]
	direction TB
	b9_1[\\"Finish"/]
	b9_14["eff_st_put__13 ctlxfer.put_IF"]
	b9_12["eff__7 doBranch"]
	b9_14 --> b9_1
	b9_12 --> b9_14
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
window.traces.IF["sched doFallthru [eff__9]"] = `<pre class='graph'>graph TD
subgraph block_9["Block 9"]
	direction TB
	b9_1[\\"Finish"/]
	b9_14["eff_st_put__13 ctlxfer.put_IF"]
	b9_12["eff__7 doBranch"]
	b9_10["eff__9 doFallthru"]
	b9_14 --> b9_1
	b9_12 --> b9_14
	b9_10 --> b9_12
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
	b9_12["eff__7 doBranch"]
	b9_10["eff__9 doFallthru"]
	b9_14 --> b9_1
	b9_12 --> b9_14
	b9_10 --> b9_12
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
	b9_12["eff__7 doBranch"]
	b9_10["eff__9 doFallthru"]
	b9_14 --> b9_1
	b9_12 --> b9_14
	b9_10 --> b9_12
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
	b9_12["eff__7 doBranch"]
	b9_10["eff__9 doFallthru"]
	b9_14 --> b9_1
	b9_12 --> b9_14
	b9_10 --> b9_12
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
window.traces.IF["sched doIf [label]"] = `<pre class='graph'>graph TD
subgraph block_9["Block 9"]
	direction TB
	b9_1[\\"Finish"/]
	b9_14["eff_st_put__13 ctlxfer.put_IF"]
	b9_12["eff__7 doBranch"]
	b9_10["eff__9 doFallthru"]
	b9_6["label doIf"]
	b9_14 --> b9_1
	b9_12 --> b9_14
	b9_10 --> b9_12
	b9_6 --> b9_10
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
window.traces.IF["sched pop_u32 [cond]"] = `<pre class='graph'>graph TD
subgraph block_9["Block 9"]
	direction TB
	b9_1[\\"Finish"/]
	b9_14["eff_st_put__13 ctlxfer.put_IF"]
	b9_12["eff__7 doBranch"]
	b9_10["eff__9 doFallthru"]
	b9_6["label doIf"]
	b9_4["cond pop_u32"]
	b9_14 --> b9_1
	b9_12 --> b9_14
	b9_10 --> b9_12
	b9_6 --> b9_10
	b9_4 --> b9_6
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
	b9_12["eff__7 doBranch"]
	b9_10["eff__9 doFallthru"]
	b9_6["label doIf"]
	b9_4["cond pop_u32"]
	b9_14 --> b9_1
	b9_12 --> b9_14
	b9_10 --> b9_12
	b9_6 --> b9_10
	b9_4 --> b9_6
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
window.traces.IF["sched imm_readBlockType [bt]"] = `<pre class='graph'>graph TD
subgraph block_9["Block 9"]
	direction TB
	b9_1[\\"Finish"/]
	b9_14["eff_st_put__13 ctlxfer.put_IF"]
	b9_12["eff__7 doBranch"]
	b9_10["eff__9 doFallthru"]
	b9_6["label doIf"]
	b9_4["cond pop_u32"]
	b9_3["bt imm_readBlockType"]
	b9_14 --> b9_1
	b9_12 --> b9_14
	b9_10 --> b9_12
	b9_6 --> b9_10
	b9_4 --> b9_6
	b9_3 --> b9_4
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
	b9_12["eff__7 doBranch"]
	b9_10["eff__9 doFallthru"]
	b9_6["label doIf"]
	b9_4["cond pop_u32"]
	b9_3["bt imm_readBlockType"]
	b9_14 --> b9_1
	b9_12 --> b9_14
	b9_10 --> b9_12
	b9_6 --> b9_10
	b9_4 --> b9_6
	b9_3 --> b9_4
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
	b9_1[\\"Finish"/]
	b9_14["eff_st_put__13 ctlxfer.put_IF"]
	b9_12["eff__7 doBranch"]
	b9_10["eff__9 doFallthru"]
	b9_6["label doIf"]
	b9_4["cond pop_u32"]
	b9_3["bt imm_readBlockType"]
	b9_14 --> b9_1
	b9_12 --> b9_14
	b9_10 --> b9_12
	b9_6 --> b9_10
	b9_4 --> b9_6
	b9_3 --> b9_4
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
window.traces.IF_ul["sched merge [eff_merge__18]"] = `<pre class='graph'>graph TD
subgraph block_15["Block 15"]
	direction TB
	b15_1[\\"Finish"/]
	b15_14["eff_st_put__13 ctlxfer.put_IF"]
	b15_24["eff_merge__18 merge"]
	b15_14 --> b15_1
	b15_24 --> b15_14
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
	b24_22["mb__17 bool.&&"]
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
window.traces.IF_ul["sched StatePhi"] = `<pre class='graph'>graph TD
subgraph block_15["Block 15"]
	direction TB
	b15_1[\\"Finish"/]
	b15_14["eff_st_put__13 ctlxfer.put_IF"]
	b15_24["eff_merge__18 merge"]
	b15_14 --> b15_1
	b15_24 --> b15_14
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
phi_26 --> block_18
subgraph phi_26["Phi 26"]
	p26_23{{"Sϕ Codeptr Stack Trap Locals Globals Tables Memory Extra "}}
end
block_27 --> phi_26
block_28 --> phi_26
subgraph block_27["Block 27"]
	direction TB
end
branch_25 --> block_27
subgraph branch_25["Branch 25"]
	br25_20["mt__15 U32_maybeTrue"]

end
branch_16 --> branch_25
subgraph branch_16["Branch 16"]
	br16_22["mb__17 bool.&&"]

end
block_24 --> branch_16
subgraph block_24["Block 24"]
	direction TB
	b24_22["mb__17 bool.&&"]
end
subgraph block_28["Block 28"]
	direction TB
end
branch_25 --> block_28
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
window.traces.IF_ul["sched U32_maybeTrue [mt__15]"] = `<pre class='graph'>graph TD
subgraph block_15["Block 15"]
	direction TB
	b15_1[\\"Finish"/]
	b15_14["eff_st_put__13 ctlxfer.put_IF"]
	b15_24["eff_merge__18 merge"]
	b15_14 --> b15_1
	b15_24 --> b15_14
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
phi_26 --> block_18
subgraph phi_26["Phi 26"]
	p26_23{{"Sϕ Codeptr Stack Trap Locals Globals Tables Memory Extra "}}
	p26_23{{"Sϕ Codeptr Stack Trap Locals Globals Tables Memory Extra "}}
end
block_27 --> phi_26
block_28 --> phi_26
subgraph block_27["Block 27"]
	direction TB
end
branch_25 --> block_27
subgraph branch_25["Branch 25"]
	br25_20["mt__15 U32_maybeTrue"]

end
branch_16 --> branch_25
subgraph branch_16["Branch 16"]
	br16_22["mb__17 bool.&&"]

end
block_24 --> branch_16
subgraph block_24["Block 24"]
	direction TB
	b24_22["mb__17 bool.&&"]
	b24_20["mt__15 U32_maybeTrue"]
	b24_20 --> b24_22
end
subgraph block_28["Block 28"]
	direction TB
end
branch_25 --> block_28
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
window.traces.IF_ul["sched U32_maybeFalse [mf__16]"] = `<pre class='graph'>graph TD
subgraph block_15["Block 15"]
	direction TB
	b15_1[\\"Finish"/]
	b15_14["eff_st_put__13 ctlxfer.put_IF"]
	b15_24["eff_merge__18 merge"]
	b15_14 --> b15_1
	b15_24 --> b15_14
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
phi_26 --> block_18
subgraph phi_26["Phi 26"]
	p26_23{{"Sϕ Codeptr Stack Trap Locals Globals Tables Memory Extra "}}
	p26_23{{"Sϕ Codeptr Stack Trap Locals Globals Tables Memory Extra "}}
end
block_27 --> phi_26
block_28 --> phi_26
subgraph block_27["Block 27"]
	direction TB
end
branch_25 --> block_27
subgraph branch_25["Branch 25"]
	br25_20["mt__15 U32_maybeTrue"]

end
branch_16 --> branch_25
subgraph branch_16["Branch 16"]
	br16_22["mb__17 bool.&&"]

end
block_24 --> branch_16
subgraph block_24["Block 24"]
	direction TB
	b24_22["mb__17 bool.&&"]
	b24_20["mt__15 U32_maybeTrue"]
	b24_21["mf__16 U32_maybeFalse"]
	b24_20 --> b24_22
	b24_21 --> b24_20
end
subgraph block_28["Block 28"]
	direction TB
end
branch_25 --> block_28
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
window.traces.IF_ul["sched doBranch [eff__7]"] = `<pre class='graph'>graph TD
subgraph block_15["Block 15"]
	direction TB
	b15_1[\\"Finish"/]
	b15_14["eff_st_put__13 ctlxfer.put_IF"]
	b15_24["eff_merge__18 merge"]
	b15_14 --> b15_1
	b15_24 --> b15_14
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
phi_26 --> block_18
subgraph phi_26["Phi 26"]
	p26_23{{"Sϕ Codeptr Stack Trap Locals Globals Tables Memory Extra "}}
	p26_23{{"Sϕ Codeptr Stack Trap Locals Globals Tables Memory Extra "}}
end
block_27 --> phi_26
block_28 --> phi_26
subgraph block_27["Block 27"]
	direction TB
end
branch_25 --> block_27
subgraph branch_25["Branch 25"]
	br25_20["mt__15 U32_maybeTrue"]

end
branch_16 --> branch_25
subgraph branch_16["Branch 16"]
	br16_22["mb__17 bool.&&"]

end
block_24 --> branch_16
subgraph block_24["Block 24"]
	direction TB
	b24_22["mb__17 bool.&&"]
	b24_20["mt__15 U32_maybeTrue"]
	b24_21["mf__16 U32_maybeFalse"]
	b24_12["eff__7 doBranch"]
	b24_20 --> b24_22
	b24_21 --> b24_20
	b24_12 --> b24_21
end
subgraph block_28["Block 28"]
	direction TB
end
branch_25 --> block_28
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
	b15_24["eff_merge__18 merge"]
	b15_14 --> b15_1
	b15_24 --> b15_14
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
phi_26 --> block_18
subgraph phi_26["Phi 26"]
	p26_23{{"Sϕ Codeptr Stack Trap Locals Globals Tables Memory Extra "}}
	p26_23{{"Sϕ Codeptr Stack Trap Locals Globals Tables Memory Extra "}}
end
block_27 --> phi_26
block_28 --> phi_26
subgraph block_27["Block 27"]
	direction TB
end
branch_25 --> block_27
subgraph branch_25["Branch 25"]
	br25_20["mt__15 U32_maybeTrue"]

end
branch_16 --> branch_25
subgraph branch_16["Branch 16"]
	br16_22["mb__17 bool.&&"]

end
block_24 --> branch_16
subgraph block_24["Block 24"]
	direction TB
	b24_22["mb__17 bool.&&"]
	b24_20["mt__15 U32_maybeTrue"]
	b24_21["mf__16 U32_maybeFalse"]
	b24_12["eff__7 doBranch"]
	b24_10["eff__9 doFallthru"]
	b24_20 --> b24_22
	b24_21 --> b24_20
	b24_12 --> b24_21
	b24_10 --> b24_12
end
subgraph block_28["Block 28"]
	direction TB
end
branch_25 --> block_28
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
window.traces.IF_ul["sched doIf [label]"] = `<pre class='graph'>graph TD
subgraph block_15["Block 15"]
	direction TB
	b15_1[\\"Finish"/]
	b15_14["eff_st_put__13 ctlxfer.put_IF"]
	b15_24["eff_merge__18 merge"]
	b15_14 --> b15_1
	b15_24 --> b15_14
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
phi_26 --> block_18
subgraph phi_26["Phi 26"]
	p26_23{{"Sϕ Codeptr Stack Trap Locals Globals Tables Memory Extra "}}
	p26_23{{"Sϕ Codeptr Stack Trap Locals Globals Tables Memory Extra "}}
end
block_27 --> phi_26
block_28 --> phi_26
subgraph block_27["Block 27"]
	direction TB
end
branch_25 --> block_27
subgraph branch_25["Branch 25"]
	br25_20["mt__15 U32_maybeTrue"]

end
branch_16 --> branch_25
subgraph branch_16["Branch 16"]
	br16_22["mb__17 bool.&&"]

end
block_24 --> branch_16
subgraph block_24["Block 24"]
	direction TB
	b24_22["mb__17 bool.&&"]
	b24_20["mt__15 U32_maybeTrue"]
	b24_21["mf__16 U32_maybeFalse"]
	b24_12["eff__7 doBranch"]
	b24_10["eff__9 doFallthru"]
	b24_6["label doIf"]
	b24_20 --> b24_22
	b24_21 --> b24_20
	b24_12 --> b24_21
	b24_10 --> b24_12
	b24_6 --> b24_10
end
subgraph block_28["Block 28"]
	direction TB
end
branch_25 --> block_28
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
window.traces.IF_ul["sched U32_equals [cond__6]"] = `<pre class='graph'>graph TD
subgraph block_15["Block 15"]
	direction TB
	b15_1[\\"Finish"/]
	b15_14["eff_st_put__13 ctlxfer.put_IF"]
	b15_24["eff_merge__18 merge"]
	b15_14 --> b15_1
	b15_24 --> b15_14
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
phi_26 --> block_18
subgraph phi_26["Phi 26"]
	p26_23{{"Sϕ Codeptr Stack Trap Locals Globals Tables Memory Extra "}}
	p26_23{{"Sϕ Codeptr Stack Trap Locals Globals Tables Memory Extra "}}
end
block_27 --> phi_26
block_28 --> phi_26
subgraph block_27["Block 27"]
	direction TB
end
branch_25 --> block_27
subgraph branch_25["Branch 25"]
	br25_20["mt__15 U32_maybeTrue"]

end
branch_16 --> branch_25
subgraph branch_16["Branch 16"]
	br16_22["mb__17 bool.&&"]

end
block_24 --> branch_16
subgraph block_24["Block 24"]
	direction TB
	b24_22["mb__17 bool.&&"]
	b24_20["mt__15 U32_maybeTrue"]
	b24_21["mf__16 U32_maybeFalse"]
	b24_12["eff__7 doBranch"]
	b24_10["eff__9 doFallthru"]
	b24_6["label doIf"]
	b24_9["cond__6 U32_equals"]
	b24_20 --> b24_22
	b24_21 --> b24_20
	b24_12 --> b24_21
	b24_10 --> b24_12
	b24_6 --> b24_10
	b24_9 --> b24_6
end
subgraph block_28["Block 28"]
	direction TB
end
branch_25 --> block_28
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
window.traces.IF_ul["sched imm_readBlockType [bt]"] = `<pre class='graph'>graph TD
subgraph block_15["Block 15"]
	direction TB
	b15_1[\\"Finish"/]
	b15_14["eff_st_put__13 ctlxfer.put_IF"]
	b15_24["eff_merge__18 merge"]
	b15_14 --> b15_1
	b15_24 --> b15_14
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
phi_26 --> block_18
subgraph phi_26["Phi 26"]
	p26_23{{"Sϕ Codeptr Stack Trap Locals Globals Tables Memory Extra "}}
	p26_23{{"Sϕ Codeptr Stack Trap Locals Globals Tables Memory Extra "}}
end
block_27 --> phi_26
block_28 --> phi_26
subgraph block_27["Block 27"]
	direction TB
end
branch_25 --> block_27
subgraph branch_25["Branch 25"]
	br25_20["mt__15 U32_maybeTrue"]

end
branch_16 --> branch_25
subgraph branch_16["Branch 16"]
	br16_22["mb__17 bool.&&"]

end
block_24 --> branch_16
subgraph block_24["Block 24"]
	direction TB
	b24_22["mb__17 bool.&&"]
	b24_20["mt__15 U32_maybeTrue"]
	b24_21["mf__16 U32_maybeFalse"]
	b24_12["eff__7 doBranch"]
	b24_10["eff__9 doFallthru"]
	b24_6["label doIf"]
	b24_9["cond__6 U32_equals"]
	b24_3["bt imm_readBlockType"]
	b24_20 --> b24_22
	b24_21 --> b24_20
	b24_12 --> b24_21
	b24_10 --> b24_12
	b24_6 --> b24_10
	b24_9 --> b24_6
	b24_3 --> b24_9
end
subgraph block_28["Block 28"]
	direction TB
end
branch_25 --> block_28
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
window.traces.IF_ul["sched pop_u32 [cond]"] = `<pre class='graph'>graph TD
subgraph block_15["Block 15"]
	direction TB
	b15_1[\\"Finish"/]
	b15_14["eff_st_put__13 ctlxfer.put_IF"]
	b15_24["eff_merge__18 merge"]
	b15_14 --> b15_1
	b15_24 --> b15_14
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
phi_26 --> block_18
subgraph phi_26["Phi 26"]
	p26_23{{"Sϕ Codeptr Stack Trap Locals Globals Tables Memory Extra "}}
	p26_23{{"Sϕ Codeptr Stack Trap Locals Globals Tables Memory Extra "}}
end
block_27 --> phi_26
block_28 --> phi_26
subgraph block_27["Block 27"]
	direction TB
end
branch_25 --> block_27
subgraph branch_25["Branch 25"]
	br25_20["mt__15 U32_maybeTrue"]

end
branch_16 --> branch_25
subgraph branch_16["Branch 16"]
	br16_22["mb__17 bool.&&"]

end
block_24 --> branch_16
subgraph block_24["Block 24"]
	direction TB
	b24_22["mb__17 bool.&&"]
	b24_20["mt__15 U32_maybeTrue"]
	b24_21["mf__16 U32_maybeFalse"]
	b24_12["eff__7 doBranch"]
	b24_10["eff__9 doFallthru"]
	b24_6["label doIf"]
	b24_9["cond__6 U32_equals"]
	b24_3["bt imm_readBlockType"]
	b24_4["cond pop_u32"]
	b24_20 --> b24_22
	b24_21 --> b24_20
	b24_12 --> b24_21
	b24_10 --> b24_12
	b24_6 --> b24_10
	b24_9 --> b24_6
	b24_3 --> b24_9
	b24_4 --> b24_3
end
subgraph block_28["Block 28"]
	direction TB
end
branch_25 --> block_28
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
window.traces.IF_ul["sched lift_u32 [abs__14]"] = `<pre class='graph'>graph TD
subgraph block_15["Block 15"]
	direction TB
	b15_1[\\"Finish"/]
	b15_14["eff_st_put__13 ctlxfer.put_IF"]
	b15_24["eff_merge__18 merge"]
	b15_14 --> b15_1
	b15_24 --> b15_14
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
phi_26 --> block_18
subgraph phi_26["Phi 26"]
	p26_23{{"Sϕ Codeptr Stack Trap Locals Globals Tables Memory Extra "}}
	p26_23{{"Sϕ Codeptr Stack Trap Locals Globals Tables Memory Extra "}}
end
block_27 --> phi_26
block_28 --> phi_26
subgraph block_27["Block 27"]
	direction TB
end
branch_25 --> block_27
subgraph branch_25["Branch 25"]
	br25_20["mt__15 U32_maybeTrue"]

end
branch_16 --> branch_25
subgraph branch_16["Branch 16"]
	br16_22["mb__17 bool.&&"]

end
block_24 --> branch_16
subgraph block_24["Block 24"]
	direction TB
	b24_22["mb__17 bool.&&"]
	b24_20["mt__15 U32_maybeTrue"]
	b24_21["mf__16 U32_maybeFalse"]
	b24_12["eff__7 doBranch"]
	b24_10["eff__9 doFallthru"]
	b24_6["label doIf"]
	b24_9["cond__6 U32_equals"]
	b24_3["bt imm_readBlockType"]
	b24_4["cond pop_u32"]
	b24_15["abs__14 lift_u32"]
	b24_20 --> b24_22
	b24_21 --> b24_20
	b24_12 --> b24_21
	b24_10 --> b24_12
	b24_6 --> b24_10
	b24_9 --> b24_6
	b24_3 --> b24_9
	b24_4 --> b24_3
	b24_15 --> b24_4
end
subgraph block_28["Block 28"]
	direction TB
end
branch_25 --> block_28
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
window.traces.IF_ul["sched 0"] = `<pre class='graph'>graph TD
subgraph block_15["Block 15"]
	direction TB
	b15_1[\\"Finish"/]
	b15_14["eff_st_put__13 ctlxfer.put_IF"]
	b15_24["eff_merge__18 merge"]
	b15_14 --> b15_1
	b15_24 --> b15_14
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
phi_26 --> block_18
subgraph phi_26["Phi 26"]
	p26_23{{"Sϕ Codeptr Stack Trap Locals Globals Tables Memory Extra "}}
	p26_23{{"Sϕ Codeptr Stack Trap Locals Globals Tables Memory Extra "}}
end
block_27 --> phi_26
block_28 --> phi_26
subgraph block_27["Block 27"]
	direction TB
end
branch_25 --> block_27
subgraph branch_25["Branch 25"]
	br25_20["mt__15 U32_maybeTrue"]

end
branch_16 --> branch_25
subgraph branch_16["Branch 16"]
	br16_22["mb__17 bool.&&"]

end
block_24 --> branch_16
subgraph block_24["Block 24"]
	direction TB
	b24_22["mb__17 bool.&&"]
	b24_20["mt__15 U32_maybeTrue"]
	b24_21["mf__16 U32_maybeFalse"]
	b24_12["eff__7 doBranch"]
	b24_10["eff__9 doFallthru"]
	b24_6["label doIf"]
	b24_9["cond__6 U32_equals"]
	b24_3["bt imm_readBlockType"]
	b24_4["cond pop_u32"]
	b24_15["abs__14 lift_u32"]
	b24_7["arg__11 0"]
	b24_20 --> b24_22
	b24_21 --> b24_20
	b24_12 --> b24_21
	b24_10 --> b24_12
	b24_6 --> b24_10
	b24_9 --> b24_6
	b24_3 --> b24_9
	b24_4 --> b24_3
	b24_15 --> b24_4
	b24_7 --> b24_15
end
subgraph block_28["Block 28"]
	direction TB
end
branch_25 --> block_28
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
window.traces.IF_ul["sched Start"] = `<pre class='graph'>graph TD
subgraph block_15["Block 15"]
	direction TB
	b15_1[\\"Finish"/]
	b15_14["eff_st_put__13 ctlxfer.put_IF"]
	b15_24["eff_merge__18 merge"]
	b15_14 --> b15_1
	b15_24 --> b15_14
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
phi_26 --> block_18
subgraph phi_26["Phi 26"]
	p26_23{{"Sϕ Codeptr Stack Trap Locals Globals Tables Memory Extra "}}
	p26_23{{"Sϕ Codeptr Stack Trap Locals Globals Tables Memory Extra "}}
end
block_27 --> phi_26
block_28 --> phi_26
subgraph block_27["Block 27"]
	direction TB
end
branch_25 --> block_27
subgraph branch_25["Branch 25"]
	br25_20["mt__15 U32_maybeTrue"]

end
branch_16 --> branch_25
subgraph branch_16["Branch 16"]
	br16_22["mb__17 bool.&&"]

end
block_24 --> branch_16
subgraph block_24["Block 24"]
	direction TB
	b24_22["mb__17 bool.&&"]
	b24_20["mt__15 U32_maybeTrue"]
	b24_21["mf__16 U32_maybeFalse"]
	b24_12["eff__7 doBranch"]
	b24_10["eff__9 doFallthru"]
	b24_6["label doIf"]
	b24_9["cond__6 U32_equals"]
	b24_3["bt imm_readBlockType"]
	b24_4["cond pop_u32"]
	b24_15["abs__14 lift_u32"]
	b24_7["arg__11 0"]
	b24_0[/"Start"\\]
	b24_20 --> b24_22
	b24_21 --> b24_20
	b24_12 --> b24_21
	b24_10 --> b24_12
	b24_6 --> b24_10
	b24_9 --> b24_6
	b24_3 --> b24_9
	b24_4 --> b24_3
	b24_15 --> b24_4
	b24_7 --> b24_15
	b24_0 --> b24_7
end
subgraph block_28["Block 28"]
	direction TB
end
branch_25 --> block_28
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
window.traces.IF["unlem_scheduler"] = `<pre class='graph'>graph TD
subgraph block_15["Block 15"]
	direction TB
	b15_1[\\"Finish"/]
	b15_14["eff_st_put__13 ctlxfer.put_IF"]
	b15_24["eff_merge__18 merge"]
	b15_14 --> b15_1
	b15_24 --> b15_14
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
phi_26 --> block_18
subgraph phi_26["Phi 26"]
	p26_23{{"Sϕ Codeptr Stack Trap Locals Globals Tables Memory Extra "}}
	p26_23{{"Sϕ Codeptr Stack Trap Locals Globals Tables Memory Extra "}}
end
block_27 --> phi_26
block_28 --> phi_26
subgraph block_27["Block 27"]
	direction TB
end
branch_25 --> block_27
subgraph branch_25["Branch 25"]
	br25_20["mt__15 U32_maybeTrue"]

end
branch_16 --> branch_25
subgraph branch_16["Branch 16"]
	br16_22["mb__17 bool.&&"]

end
block_24 --> branch_16
subgraph block_24["Block 24"]
	direction TB
	b24_22["mb__17 bool.&&"]
	b24_20["mt__15 U32_maybeTrue"]
	b24_21["mf__16 U32_maybeFalse"]
	b24_12["eff__7 doBranch"]
	b24_10["eff__9 doFallthru"]
	b24_6["label doIf"]
	b24_9["cond__6 U32_equals"]
	b24_3["bt imm_readBlockType"]
	b24_4["cond pop_u32"]
	b24_15["abs__14 lift_u32"]
	b24_7["arg__11 0"]
	b24_0[/"Start"\\]
	b24_20 --> b24_22
	b24_21 --> b24_20
	b24_12 --> b24_21
	b24_10 --> b24_12
	b24_6 --> b24_10
	b24_9 --> b24_6
	b24_3 --> b24_9
	b24_4 --> b24_3
	b24_15 --> b24_4
	b24_7 --> b24_15
	b24_0 --> b24_7
end
subgraph block_28["Block 28"]
	direction TB
end
branch_25 --> block_28
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
subgraph block_29["Block 29"]
	direction TB
	b29_1[\\"Finish"/]
	b29_6["eff_st_put__21 ctlxfer.put_ELSE"]
	b29_5["eff__19 doBranch"]
	b29_3["label doElse"]
	b29_0[/"Start"\\]
	b29_6 --> b29_1
	b29_5 --> b29_6
	b29_3 --> b29_5
	b29_0 --> b29_3
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
subgraph block_30["Block 30"]
	direction TB
	b30_1[\\"Finish"/]
	b30_6["eff_st_put__21 ctlxfer.put_ELSE"]
	b30_5["eff__19 doBranch"]
	b30_3["label doElse"]
	b30_0[/"Start"\\]
	b30_6 --> b30_1
	b30_5 --> b30_6
	b30_3 --> b30_5
	b30_0 --> b30_3
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
subgraph block_31["Block 31"]
	direction TB
	b31_1[\\"Finish"/]
	b31_5["eff__22 doTry"]
	b31_3["bt imm_readBlockType"]
	b31_0[/"Start"\\]
	b31_5 --> b31_1
	b31_3 --> b31_5
	b31_0 --> b31_3
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
subgraph block_32["Block 32"]
	direction TB
	b32_1[\\"Finish"/]
	b32_5["eff__22 doTry"]
	b32_3["bt imm_readBlockType"]
	b32_0[/"Start"\\]
	b32_5 --> b32_1
	b32_3 --> b32_5
	b32_0 --> b32_3
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
subgraph block_33["Block 33"]
	direction TB
	b33_1[\\"Finish"/]
	b33_5["eff__25 doReturn"]
	b33_3["eff__26 doEnd"]
	b33_5 --> b33_1
	b33_3 --> b33_5
end
phi_35 --> block_33
subgraph phi_35["Phi 35"]
	p35_6{{"Sϕ Codeptr Stack Trap Locals Globals Tables Memory Extra "}}
end
block_36 --> phi_35
block_37 --> phi_35
subgraph block_36["Block 36"]
	direction TB
	b36_5["eff__25 doReturn"]
end
branch_34 --> block_36
subgraph branch_34["Branch 34"]
	br34_4["cond__24 f_isAtEnd"]

end
block_38 --> branch_34
subgraph block_38["Block 38"]
	direction TB
	b38_4["cond__24 f_isAtEnd"]
	b38_0[/"Start"\\]
	b38_0 --> b38_4
end
subgraph block_37["Block 37"]
	direction TB
end
branch_34 --> block_37

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
subgraph block_39["Block 39"]
	direction TB
	b39_1[\\"Finish"/]
	b39_5["eff__25 doReturn"]
	b39_3["eff__26 doEnd"]
	b39_5 --> b39_1
	b39_3 --> b39_5
end
phi_41 --> block_39
subgraph phi_41["Phi 41"]
	p41_6{{"Sϕ Codeptr Stack Trap Locals Globals Tables Memory Extra "}}
end
block_42 --> phi_41
block_43 --> phi_41
subgraph block_42["Block 42"]
	direction TB
	b42_5["eff__25 doReturn"]
end
branch_40 --> block_42
subgraph branch_40["Branch 40"]
	br40_4["cond__24 f_isAtEnd"]

end
block_44 --> branch_40
subgraph block_44["Block 44"]
	direction TB
	b44_4["cond__24 f_isAtEnd"]
	b44_0[/"Start"\\]
	b44_0 --> b44_4
end
subgraph block_43["Block 43"]
	direction TB
end
branch_40 --> block_43

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
subgraph block_45["Block 45"]
	direction TB
	b45_1[\\"Finish"/]
	b45_8["eff_st_put__30 ctlxfer.put_BR"]
	b45_7["eff__27 doBranch"]
	b45_5["label f_getLabel"]
	b45_3["depth imm_readULEB32"]
	b45_0[/"Start"\\]
	b45_8 --> b45_1
	b45_7 --> b45_8
	b45_5 --> b45_7
	b45_3 --> b45_5
	b45_0 --> b45_3
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
subgraph block_46["Block 46"]
	direction TB
	b46_1[\\"Finish"/]
	b46_8["eff_st_put__30 ctlxfer.put_BR"]
	b46_7["eff__27 doBranch"]
	b46_5["label f_getLabel"]
	b46_3["depth imm_readULEB32"]
	b46_0[/"Start"\\]
	b46_8 --> b46_1
	b46_7 --> b46_8
	b46_5 --> b46_7
	b46_3 --> b46_5
	b46_0 --> b46_3
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
subgraph block_47["Block 47"]
	direction TB
	b47_1[\\"Finish"/]
	b47_14["eff_st_put__38 ctlxfer.put_BR_IF"]
	b47_5["label f_getLabel"]
	b47_12["eff__32 doBranch"]
	b47_10["eff__34 doFallthru"]
	b47_3["depth imm_readULEB32"]
	b47_6["cond pop_u32"]
	b47_14 --> b47_1
	b47_5 --> b47_14
	b47_12 --> b47_5
	b47_10 --> b47_12
	b47_3 --> b47_10
	b47_6 --> b47_3
end
phi_49 --> block_47
subgraph phi_49["Phi 49"]
	p49_13{{"Sϕ Codeptr Stack Trap Locals Globals Tables Memory Extra "}}
	p49_13{{"Sϕ Codeptr Stack Trap Locals Globals Tables Memory Extra "}}
end
block_50 --> phi_49
block_51 --> phi_49
subgraph block_50["Block 50"]
	direction TB
	b50_12["eff__32 doBranch"]
end
branch_48 --> block_50
subgraph branch_48["Branch 48"]
	br48_9["cond__31 U32_not_equals"]

end
block_52 --> branch_48
subgraph block_52["Block 52"]
	direction TB
	b52_9["cond__31 U32_not_equals"]
	b52_15["abs__39 lift_u32"]
	b52_7["arg__36 0"]
	b52_0[/"Start"\\]
	b52_15 --> b52_9
	b52_7 --> b52_15
	b52_0 --> b52_7
end
subgraph block_51["Block 51"]
	direction TB
	b51_10["eff__34 doFallthru"]
end
branch_48 --> block_51

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
subgraph block_53["Block 53"]
	direction TB
	b53_1[\\"Finish"/]
	b53_14["eff_st_put__38 ctlxfer.put_BR_IF"]
	b53_5["label f_getLabel"]
	b53_24["eff_merge__43 merge"]
	b53_14 --> b53_1
	b53_5 --> b53_14
	b53_24 --> b53_5
end
phi_55 --> block_53
subgraph phi_55["Phi 55"]
	p55_13{{"Sϕ Codeptr Stack Trap Locals Globals Tables Memory Extra "}}
	p55_13{{"Sϕ Codeptr Stack Trap Locals Globals Tables Memory Extra "}}
end
block_56 --> phi_55
block_57 --> phi_55
subgraph block_56["Block 56"]
	direction TB
	b56_24["eff_merge__43 merge"]
end
phi_64 --> block_56
subgraph phi_64["Phi 64"]
	p64_23{{"Sϕ Codeptr Stack Trap Locals Globals Tables Memory Extra "}}
	p64_23{{"Sϕ Codeptr Stack Trap Locals Globals Tables Memory Extra "}}
end
block_65 --> phi_64
block_66 --> phi_64
subgraph block_65["Block 65"]
	direction TB
end
branch_63 --> block_65
subgraph branch_63["Branch 63"]
	br63_20["mt__40 U32_maybeTrue"]

end
branch_54 --> branch_63
subgraph branch_54["Branch 54"]
	br54_22["mb__42 bool.&&"]

end
block_62 --> branch_54
subgraph block_62["Block 62"]
	direction TB
	b62_22["mb__42 bool.&&"]
	b62_20["mt__40 U32_maybeTrue"]
	b62_21["mf__41 U32_maybeFalse"]
	b62_12["eff__32 doBranch"]
	b62_10["eff__34 doFallthru"]
	b62_3["depth imm_readULEB32"]
	b62_9["cond__31 U32_not_equals"]
	b62_6["cond pop_u32"]
	b62_15["abs__39 lift_u32"]
	b62_7["arg__36 0"]
	b62_0[/"Start"\\]
	b62_20 --> b62_22
	b62_21 --> b62_20
	b62_12 --> b62_21
	b62_10 --> b62_12
	b62_3 --> b62_10
	b62_9 --> b62_3
	b62_6 --> b62_9
	b62_15 --> b62_6
	b62_7 --> b62_15
	b62_0 --> b62_7
end
subgraph block_66["Block 66"]
	direction TB
end
branch_63 --> block_66
subgraph block_57["Block 57"]
	direction TB
end
phi_59 --> block_57
subgraph phi_59["Phi 59"]
	p59_23{{"Sϕ Codeptr Stack Trap Locals Globals Tables Memory Extra "}}
	p59_23{{"Sϕ Codeptr Stack Trap Locals Globals Tables Memory Extra "}}
end
block_60 --> phi_59
block_61 --> phi_59
subgraph block_60["Block 60"]
	direction TB
end
branch_58 --> block_60
subgraph branch_58["Branch 58"]
	br58_20["mt__40 U32_maybeTrue"]

end
branch_54 --> branch_58
subgraph block_61["Block 61"]
	direction TB
end
branch_58 --> block_61

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
subgraph block_67["Block 67"]
	direction TB
	b67_1[\\"Finish"/]
	b67_8["eff_st_put__47 ctlxfer.put_BR_TABLE"]
	b67_7["eff__44 doSwitch"]
	b67_3["labels imm_readLabels"]
	b67_4["key pop_u32"]
	b67_0[/"Start"\\]
	b67_8 --> b67_1
	b67_7 --> b67_8
	b67_3 --> b67_7
	b67_4 --> b67_3
	b67_0 --> b67_4
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
subgraph block_68["Block 68"]
	direction TB
	b68_1[\\"Finish"/]
	b68_8["eff_st_put__47 ctlxfer.put_BR_TABLE"]
	b68_7["eff__44 doSwitch"]
	b68_3["labels imm_readLabels"]
	b68_4["key pop_u32"]
	b68_0[/"Start"\\]
	b68_8 --> b68_1
	b68_7 --> b68_8
	b68_3 --> b68_7
	b68_4 --> b68_3
	b68_0 --> b68_4
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
subgraph block_69["Block 69"]
	direction TB
	b69_1[\\"Finish"/]
	b69_3["eff__48 doReturn"]
	b69_0[/"Start"\\]
	b69_3 --> b69_1
	b69_0 --> b69_3
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
subgraph block_70["Block 70"]
	direction TB
	b70_1[\\"Finish"/]
	b70_3["eff__48 doReturn"]
	b70_0[/"Start"\\]
	b70_3 --> b70_1
	b70_0 --> b70_3
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
subgraph block_71["Block 71"]
	direction TB
	b71_1[\\"Finish"/]
	b71_10["eff__49 doCall"]
	b71_5["sig m_getFuncSignature"]
	b71_7["target i_getFunction"]
	b71_3["index imm_readULEB32"]
	b71_0[/"Start"\\]
	b71_10 --> b71_1
	b71_5 --> b71_10
	b71_7 --> b71_5
	b71_3 --> b71_7
	b71_0 --> b71_3
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
subgraph block_72["Block 72"]
	direction TB
	b72_1[\\"Finish"/]
	b72_10["eff__49 doCall"]
	b72_5["sig m_getFuncSignature"]
	b72_7["target i_getFunction"]
	b72_3["index imm_readULEB32"]
	b72_0[/"Start"\\]
	b72_10 --> b72_1
	b72_5 --> b72_10
	b72_7 --> b72_5
	b72_3 --> b72_7
	b72_0 --> b72_3
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
subgraph block_73["Block 73"]
	direction TB
	b73_1[\\"Finish"/]
	b73_27["eff_st_put__69 ctlxfer.put_CALL_INDIRECT"]
	b73_8["is64 m_isTable64"]
	b73_25["eff__55 doCall"]
	b73_17["eff__61 doCall"]
	b73_4["table_index imm_readULEB32"]
	b73_6["sig m_getSignature"]
	b73_22["target i_getTableFunction64"]
	b73_18["func_index pop_u64"]
	b73_14["target i_getTableFunction32"]
	b73_10["func_index pop_u32"]
	b73_3["sig_index imm_readULEB32"]
	b73_27 --> b73_1
	b73_8 --> b73_27
	b73_25 --> b73_8
	b73_17 --> b73_25
	b73_4 --> b73_17
	b73_6 --> b73_4
	b73_22 --> b73_6
	b73_18 --> b73_22
	b73_14 --> b73_18
	b73_10 --> b73_14
	b73_3 --> b73_10
end
phi_75 --> block_73
subgraph phi_75["Phi 75"]
	p75_26{{"Sϕ Codeptr Stack Trap Locals Globals Tables Memory Extra "}}
	p75_26{{"Sϕ Codeptr Stack Trap Locals Globals Tables Memory Extra "}}
end
block_76 --> phi_75
block_77 --> phi_75
subgraph block_76["Block 76"]
	direction TB
	b76_25["eff__55 doCall"]
end
branch_74 --> block_76
subgraph branch_74["Branch 74"]
	br74_8["is64 m_isTable64"]

end
block_78 --> branch_74
subgraph block_78["Block 78"]
	direction TB
	b78_0[/"Start"\\]
end
subgraph block_77["Block 77"]
	direction TB
	b77_17["eff__61 doCall"]
end
branch_74 --> block_77

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
subgraph block_79["Block 79"]
	direction TB
	b79_1[\\"Finish"/]
	b79_27["eff_st_put__69 ctlxfer.put_CALL_INDIRECT"]
	b79_8["is64 m_isTable64"]
	b79_25["eff__55 doCall"]
	b79_17["eff__61 doCall"]
	b79_4["table_index imm_readULEB32"]
	b79_6["sig m_getSignature"]
	b79_22["target i_getTableFunction64"]
	b79_18["func_index pop_u64"]
	b79_14["target i_getTableFunction32"]
	b79_10["func_index pop_u32"]
	b79_3["sig_index imm_readULEB32"]
	b79_27 --> b79_1
	b79_8 --> b79_27
	b79_25 --> b79_8
	b79_17 --> b79_25
	b79_4 --> b79_17
	b79_6 --> b79_4
	b79_22 --> b79_6
	b79_18 --> b79_22
	b79_14 --> b79_18
	b79_10 --> b79_14
	b79_3 --> b79_10
end
phi_81 --> block_79
subgraph phi_81["Phi 81"]
	p81_26{{"Sϕ Codeptr Stack Trap Locals Globals Tables Memory Extra "}}
	p81_26{{"Sϕ Codeptr Stack Trap Locals Globals Tables Memory Extra "}}
end
block_82 --> phi_81
block_83 --> phi_81
subgraph block_82["Block 82"]
	direction TB
	b82_25["eff__55 doCall"]
end
branch_80 --> block_82
subgraph branch_80["Branch 80"]
	br80_8["is64 m_isTable64"]

end
block_84 --> branch_80
subgraph block_84["Block 84"]
	direction TB
	b84_0[/"Start"\\]
end
subgraph block_83["Block 83"]
	direction TB
	b83_17["eff__61 doCall"]
end
branch_80 --> block_83

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
subgraph block_85["Block 85"]
	direction TB
	b85_1[\\"Finish"/]
	b85_10["eff__70 doReturnCall"]
	b85_5["sig m_getFuncSignature"]
	b85_7["target i_getFunction"]
	b85_3["index imm_readULEB32"]
	b85_0[/"Start"\\]
	b85_10 --> b85_1
	b85_5 --> b85_10
	b85_7 --> b85_5
	b85_3 --> b85_7
	b85_0 --> b85_3
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
subgraph block_86["Block 86"]
	direction TB
	b86_1[\\"Finish"/]
	b86_10["eff__70 doReturnCall"]
	b86_5["sig m_getFuncSignature"]
	b86_7["target i_getFunction"]
	b86_3["index imm_readULEB32"]
	b86_0[/"Start"\\]
	b86_10 --> b86_1
	b86_5 --> b86_10
	b86_7 --> b86_5
	b86_3 --> b86_7
	b86_0 --> b86_3
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
subgraph block_87["Block 87"]
	direction TB
	b87_1[\\"Finish"/]
	b87_5["eff__75 pop_Value"]
	b87_3["tv f_getTopOfStackType"]
	b87_0[/"Start"\\]
	b87_5 --> b87_1
	b87_3 --> b87_5
	b87_0 --> b87_3
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
subgraph block_88["Block 88"]
	direction TB
	b88_1[\\"Finish"/]
	b88_5["eff__75 pop_Value"]
	b88_3["tv f_getTopOfStackType"]
	b88_0[/"Start"\\]
	b88_5 --> b88_1
	b88_3 --> b88_5
	b88_0 --> b88_3
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
subgraph block_89["Block 89"]
	direction TB
	b89_1[\\"Finish"/]
	b89_17["eff__78 push_Value"]
	b89_14["eff__81 push_Value"]
	b89_4["tv f_getTopOfStackType"]
	b89_8["a pop_Value"]
	b89_6["b pop_Value"]
	b89_3["c pop_u32"]
	b89_17 --> b89_1
	b89_14 --> b89_17
	b89_4 --> b89_14
	b89_8 --> b89_4
	b89_6 --> b89_8
	b89_3 --> b89_6
end
phi_91 --> block_89
subgraph phi_91["Phi 91"]
	p91_18{{"Sϕ Stack "}}
end
block_92 --> phi_91
block_93 --> phi_91
subgraph block_92["Block 92"]
	direction TB
	b92_17["eff__78 push_Value"]
end
branch_90 --> block_92
subgraph branch_90["Branch 90"]
	br90_11["cond__77 U32_not_equals"]

end
block_94 --> branch_90
subgraph block_94["Block 94"]
	direction TB
	b94_11["cond__77 U32_not_equals"]
	b94_19["abs__88 lift_u32"]
	b94_9["arg__85 0"]
	b94_0[/"Start"\\]
	b94_19 --> b94_11
	b94_9 --> b94_19
	b94_0 --> b94_9
end
subgraph block_93["Block 93"]
	direction TB
	b93_14["eff__81 push_Value"]
end
branch_90 --> block_93

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
subgraph block_95["Block 95"]
	direction TB
	b95_1[\\"Finish"/]
	b95_27["push__93 push_Value"]
	b95_26["merge__92 merge_Val"]
	b95_4["tv f_getTopOfStackType"]
	b95_27 --> b95_1
	b95_26 --> b95_27
	b95_4 --> b95_26
end
phi_97 --> block_95
subgraph phi_97["Phi 97"]
	p97_18{{"Sϕ Stack "}}
end
block_98 --> phi_97
block_99 --> phi_97
subgraph block_98["Block 98"]
	direction TB
	b98_27["push__93 push_Value"]
end
phi_106 --> block_98
subgraph phi_106["Phi 106"]
	p106_25{{"Sϕ Stack "}}
end
block_107 --> phi_106
block_108 --> phi_106
subgraph block_107["Block 107"]
	direction TB
end
branch_105 --> block_107
subgraph branch_105["Branch 105"]
	br105_22["mt__89 U32_maybeTrue"]

end
branch_96 --> branch_105
subgraph branch_96["Branch 96"]
	br96_24["mb__91 bool.&&"]

end
block_104 --> branch_96
subgraph block_104["Block 104"]
	direction TB
	b104_24["mb__91 bool.&&"]
	b104_22["mt__89 U32_maybeTrue"]
	b104_23["mf__90 U32_maybeFalse"]
	b104_17["eff__78 push_Value"]
	b104_14["eff__81 push_Value"]
	b104_11["cond__77 U32_not_equals"]
	b104_8["a pop_Value"]
	b104_6["b pop_Value"]
	b104_3["c pop_u32"]
	b104_19["abs__88 lift_u32"]
	b104_9["arg__85 0"]
	b104_0[/"Start"\\]
	b104_22 --> b104_24
	b104_23 --> b104_22
	b104_17 --> b104_23
	b104_14 --> b104_17
	b104_11 --> b104_14
	b104_8 --> b104_11
	b104_6 --> b104_8
	b104_3 --> b104_6
	b104_19 --> b104_3
	b104_9 --> b104_19
	b104_0 --> b104_9
end
subgraph block_108["Block 108"]
	direction TB
end
branch_105 --> block_108
subgraph block_99["Block 99"]
	direction TB
end
phi_101 --> block_99
subgraph phi_101["Phi 101"]
	p101_25{{"Sϕ Stack "}}
end
block_102 --> phi_101
block_103 --> phi_101
subgraph block_102["Block 102"]
	direction TB
end
branch_100 --> block_102
subgraph branch_100["Branch 100"]
	br100_22["mt__89 U32_maybeTrue"]

end
branch_96 --> branch_100
subgraph block_103["Block 103"]
	direction TB
end
branch_100 --> block_103

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
subgraph block_109["Block 109"]
	direction TB
	b109_1[\\"Finish"/]
	b109_3["index imm_readULEB32"]
	b109_11["eff__94 push_Value"]
	b109_5["tv f_getLocalType"]
	b109_8["val getLocal"]
	b109_0[/"Start"\\]
	b109_3 --> b109_1
	b109_11 --> b109_3
	b109_5 --> b109_11
	b109_8 --> b109_5
	b109_0 --> b109_8
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
subgraph block_110["Block 110"]
	direction TB
	b110_1[\\"Finish"/]
	b110_3["index imm_readULEB32"]
	b110_11["eff__94 push_Value"]
	b110_5["tv f_getLocalType"]
	b110_8["val getLocal"]
	b110_0[/"Start"\\]
	b110_3 --> b110_1
	b110_11 --> b110_3
	b110_5 --> b110_11
	b110_8 --> b110_5
	b110_0 --> b110_8
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
subgraph block_111["Block 111"]
	direction TB
	b111_1[\\"Finish"/]
	b111_3["index imm_readULEB32"]
	b111_7["val pop_Value"]
	b111_11["eff__100 setLocal"]
	b111_5["tv f_getLocalType"]
	b111_0[/"Start"\\]
	b111_3 --> b111_1
	b111_7 --> b111_3
	b111_11 --> b111_7
	b111_5 --> b111_11
	b111_0 --> b111_5
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
subgraph block_112["Block 112"]
	direction TB
	b112_1[\\"Finish"/]
	b112_3["index imm_readULEB32"]
	b112_7["val pop_Value"]
	b112_11["eff__100 setLocal"]
	b112_5["tv f_getLocalType"]
	b112_0[/"Start"\\]
	b112_3 --> b112_1
	b112_7 --> b112_3
	b112_11 --> b112_7
	b112_5 --> b112_11
	b112_0 --> b112_5
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
subgraph block_113["Block 113"]
	direction TB
	b113_1[\\"Finish"/]
	b113_3["index imm_readULEB32"]
	b113_14["eff__106 push_Value"]
	b113_11["eff__109 setLocal"]
	b113_5["tv f_getLocalType"]
	b113_7["val pop_Value"]
	b113_0[/"Start"\\]
	b113_3 --> b113_1
	b113_14 --> b113_3
	b113_11 --> b113_14
	b113_5 --> b113_11
	b113_7 --> b113_5
	b113_0 --> b113_7
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
subgraph block_114["Block 114"]
	direction TB
	b114_1[\\"Finish"/]
	b114_3["index imm_readULEB32"]
	b114_14["eff__106 push_Value"]
	b114_11["eff__109 setLocal"]
	b114_5["tv f_getLocalType"]
	b114_7["val pop_Value"]
	b114_0[/"Start"\\]
	b114_3 --> b114_1
	b114_14 --> b114_3
	b114_11 --> b114_14
	b114_5 --> b114_11
	b114_7 --> b114_5
	b114_0 --> b114_7
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
subgraph block_115["Block 115"]
	direction TB
	b115_1[\\"Finish"/]
	b115_3["index imm_readULEB32"]
	b115_11["eff__115 push_Value"]
	b115_5["tv m_getGlobalType"]
	b115_8["val getGlobal"]
	b115_0[/"Start"\\]
	b115_3 --> b115_1
	b115_11 --> b115_3
	b115_5 --> b115_11
	b115_8 --> b115_5
	b115_0 --> b115_8
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
subgraph block_116["Block 116"]
	direction TB
	b116_1[\\"Finish"/]
	b116_3["index imm_readULEB32"]
	b116_11["eff__115 push_Value"]
	b116_5["tv m_getGlobalType"]
	b116_8["val getGlobal"]
	b116_0[/"Start"\\]
	b116_3 --> b116_1
	b116_11 --> b116_3
	b116_5 --> b116_11
	b116_8 --> b116_5
	b116_0 --> b116_8
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
subgraph block_117["Block 117"]
	direction TB
	b117_1[\\"Finish"/]
	b117_3["index imm_readULEB32"]
	b117_7["val pop_Value"]
	b117_11["eff__121 setGlobal"]
	b117_5["tv m_getGlobalType"]
	b117_0[/"Start"\\]
	b117_3 --> b117_1
	b117_7 --> b117_3
	b117_11 --> b117_7
	b117_5 --> b117_11
	b117_0 --> b117_5
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
subgraph block_118["Block 118"]
	direction TB
	b118_1[\\"Finish"/]
	b118_3["index imm_readULEB32"]
	b118_7["val pop_Value"]
	b118_11["eff__121 setGlobal"]
	b118_5["tv m_getGlobalType"]
	b118_0[/"Start"\\]
	b118_3 --> b118_1
	b118_7 --> b118_3
	b118_11 --> b118_7
	b118_5 --> b118_11
	b118_0 --> b118_5
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
subgraph block_119["Block 119"]
	direction TB
	b119_1[\\"Finish"/]
	b119_3["table_index imm_readULEB32"]
	b119_17["eff__128 push_Object"]
	b119_11["eff__132 push_Object"]
	b119_15["val mach_readTable64"]
	b119_12["index pop_u64"]
	b119_9["val mach_readTable32"]
	b119_6["index pop_u32"]
	b119_3 --> b119_1
	b119_17 --> b119_3
	b119_11 --> b119_17
	b119_15 --> b119_11
	b119_12 --> b119_15
	b119_9 --> b119_12
	b119_6 --> b119_9
end
phi_121 --> block_119
subgraph phi_121["Phi 121"]
	p121_18{{"Sϕ Stack "}}
end
block_122 --> phi_121
block_123 --> phi_121
subgraph block_122["Block 122"]
	direction TB
	b122_17["eff__128 push_Object"]
end
branch_120 --> block_122
subgraph branch_120["Branch 120"]
	br120_5["cond__127 m_isTable64"]

end
block_124 --> branch_120
subgraph block_124["Block 124"]
	direction TB
	b124_5["cond__127 m_isTable64"]
	b124_0[/"Start"\\]
	b124_0 --> b124_5
end
subgraph block_123["Block 123"]
	direction TB
	b123_11["eff__132 push_Object"]
end
branch_120 --> block_123

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
subgraph block_125["Block 125"]
	direction TB
	b125_1[\\"Finish"/]
	b125_3["table_index imm_readULEB32"]
	b125_17["eff__128 push_Object"]
	b125_11["eff__132 push_Object"]
	b125_15["val mach_readTable64"]
	b125_12["index pop_u64"]
	b125_9["val mach_readTable32"]
	b125_6["index pop_u32"]
	b125_3 --> b125_1
	b125_17 --> b125_3
	b125_11 --> b125_17
	b125_15 --> b125_11
	b125_12 --> b125_15
	b125_9 --> b125_12
	b125_6 --> b125_9
end
phi_127 --> block_125
subgraph phi_127["Phi 127"]
	p127_18{{"Sϕ Stack "}}
end
block_128 --> phi_127
block_129 --> phi_127
subgraph block_128["Block 128"]
	direction TB
	b128_17["eff__128 push_Object"]
end
branch_126 --> block_128
subgraph branch_126["Branch 126"]
	br126_5["cond__127 m_isTable64"]

end
block_130 --> branch_126
subgraph block_130["Block 130"]
	direction TB
	b130_5["cond__127 m_isTable64"]
	b130_0[/"Start"\\]
	b130_0 --> b130_5
end
subgraph block_129["Block 129"]
	direction TB
	b129_11["eff__132 push_Object"]
end
branch_126 --> block_129

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
subgraph block_131["Block 131"]
	direction TB
	b131_1[\\"Finish"/]
	b131_3["table_index imm_readULEB32"]
	b131_13["index pop_u64"]
	b131_7["index pop_u32"]
	b131_12["val pop_Object"]
	b131_6["val pop_Object"]
	b131_3 --> b131_1
	b131_13 --> b131_3
	b131_7 --> b131_13
	b131_12 --> b131_7
	b131_6 --> b131_12
end
phi_133 --> block_131
subgraph phi_133["Phi 133"]
	p133_18{{"Sϕ Stack "}}
end
block_134 --> phi_133
block_135 --> phi_133
subgraph block_134["Block 134"]
	direction TB
	b134_13["index pop_u64"]
end
branch_132 --> block_134
subgraph branch_132["Branch 132"]
	br132_5["cond__137 m_isTable64"]

end
block_136 --> branch_132
subgraph block_136["Block 136"]
	direction TB
	b136_5["cond__137 m_isTable64"]
	b136_0[/"Start"\\]
	b136_0 --> b136_5
end
subgraph block_135["Block 135"]
	direction TB
	b135_7["index pop_u32"]
end
branch_132 --> block_135

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
subgraph block_137["Block 137"]
	direction TB
	b137_1[\\"Finish"/]
	b137_3["table_index imm_readULEB32"]
	b137_13["index pop_u64"]
	b137_7["index pop_u32"]
	b137_12["val pop_Object"]
	b137_6["val pop_Object"]
	b137_3 --> b137_1
	b137_13 --> b137_3
	b137_7 --> b137_13
	b137_12 --> b137_7
	b137_6 --> b137_12
end
phi_139 --> block_137
subgraph phi_139["Phi 139"]
	p139_18{{"Sϕ Stack "}}
end
block_140 --> phi_139
block_141 --> phi_139
subgraph block_140["Block 140"]
	direction TB
	b140_13["index pop_u64"]
end
branch_138 --> block_140
subgraph branch_138["Branch 138"]
	br138_5["cond__137 m_isTable64"]

end
block_142 --> branch_138
subgraph block_142["Block 142"]
	direction TB
	b142_5["cond__137 m_isTable64"]
	b142_0[/"Start"\\]
	b142_0 --> b142_5
end
subgraph block_141["Block 141"]
	direction TB
	b141_7["index pop_u32"]
end
branch_138 --> block_141

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
window.traces.I32_LOAD["schedulerMermaid"] = `<pre class='graph'>graph TD
subgraph block_143["Block 143"]
	direction TB
	b143_1[\\"Finish"/]
	b143_23["offset imm_readULEB64"]
	b143_15["offset imm_readULEB32"]
	b143_30["eff__148 push_u32"]
	b143_22["eff__153 push_u32"]
	b143_28["val mach_readMemory64_u32"]
	b143_24["index pop_u64"]
	b143_20["val mach_readMemory32_u32"]
	b143_16["index pop_u32"]
	b143_10["memindex__160 imm_readULEB32"]
	b143_4["memindex__166 0u"]
	b143_3["flags imm_readU8"]
	b143_23 --> b143_1
	b143_15 --> b143_23
	b143_30 --> b143_15
	b143_22 --> b143_30
	b143_28 --> b143_22
	b143_24 --> b143_28
	b143_20 --> b143_24
	b143_16 --> b143_20
	b143_10 --> b143_16
	b143_4 --> b143_10
	b143_3 --> b143_4
end
phi_145 --> block_143
subgraph phi_145["Phi 145"]
	p145_32{{"Sϕ Stack "}}
	p145_31{{"Sϕ Codeptr "}}
end
block_146 --> phi_145
block_147 --> phi_145
subgraph block_146["Block 146"]
	direction TB
	b146_23["offset imm_readULEB64"]
	b146_30["eff__148 push_u32"]
	b146_30 --> b146_23
end
phi_150 --> block_146
subgraph phi_150["Phi 150"]
	p150_11{"memindex ϕ"}
	p150_11{"memindex ϕ"}
	p150_11{"memindex ϕ"}
	p150_11{"memindex ϕ"}
end
block_151 --> phi_150
block_152 --> phi_150
subgraph block_151["Block 151"]
	direction TB
	b151_10["memindex__160 imm_readULEB32"]
end
branch_149 --> block_151
subgraph branch_149["Branch 149"]
	br149_9["cond__159 u8.!="]

end
branch_144 --> branch_149
subgraph branch_144["Branch 144"]
	br144_14["cond__147 m_isMemory64"]

end
block_148 --> branch_144
subgraph block_148["Block 148"]
	direction TB
	b148_14["cond__147 m_isMemory64"]
end
phi_154 --> block_148
subgraph phi_154["Phi 154"]
	p154_12{{"Sϕ Codeptr "}}
	p154_12{{"Sϕ Codeptr "}}
	p154_12{{"Sϕ Codeptr "}}
	p154_12{{"Sϕ Codeptr "}}
end
block_155 --> phi_154
block_156 --> phi_154
subgraph block_155["Block 155"]
	direction TB
	b155_10["memindex__160 imm_readULEB32"]
end
branch_153 --> block_155
subgraph branch_153["Branch 153"]
	br153_9["cond__159 u8.!="]

end
block_157 --> branch_153
subgraph block_157["Block 157"]
	direction TB
	b157_9["cond__159 u8.!="]
	b157_8["arg__161 u8.&"]
	b157_5["arg__162 0"]
	b157_6["arg__164 0x40u8"]
	b157_0[/"Start"\\]
	b157_8 --> b157_9
	b157_5 --> b157_8
	b157_6 --> b157_5
	b157_0 --> b157_6
end
subgraph block_156["Block 156"]
	direction TB
end
branch_153 --> block_156
subgraph block_152["Block 152"]
	direction TB
	b152_4["memindex__166 0u"]
end
branch_149 --> block_152
subgraph block_147["Block 147"]
	direction TB
	b147_15["offset imm_readULEB32"]
	b147_22["eff__153 push_u32"]
	b147_22 --> b147_15
end
branch_144 --> block_147

</pre>`;
window.traces.I32_LOAD["unLEM"] = `<pre class='graph'>---
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
window.traces.I32_LOAD["unlem_schedule"] = `<pre class=''>def flags = imm_readU8();
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
window.traces.I32_LOAD["unlem_scheduler"] = `<pre class='graph'>graph TD
subgraph block_158["Block 158"]
	direction TB
	b158_1[\\"Finish"/]
	b158_23["offset imm_readULEB64"]
	b158_15["offset imm_readULEB32"]
	b158_30["eff__148 push_u32"]
	b158_22["eff__153 push_u32"]
	b158_28["val mach_readMemory64_u32"]
	b158_24["index pop_u64"]
	b158_20["val mach_readMemory32_u32"]
	b158_16["index pop_u32"]
	b158_10["memindex__160 imm_readULEB32"]
	b158_4["memindex__166 0u"]
	b158_3["flags imm_readU8"]
	b158_23 --> b158_1
	b158_15 --> b158_23
	b158_30 --> b158_15
	b158_22 --> b158_30
	b158_28 --> b158_22
	b158_24 --> b158_28
	b158_20 --> b158_24
	b158_16 --> b158_20
	b158_10 --> b158_16
	b158_4 --> b158_10
	b158_3 --> b158_4
end
phi_160 --> block_158
subgraph phi_160["Phi 160"]
	p160_32{{"Sϕ Stack "}}
	p160_31{{"Sϕ Codeptr "}}
end
block_161 --> phi_160
block_162 --> phi_160
subgraph block_161["Block 161"]
	direction TB
	b161_23["offset imm_readULEB64"]
	b161_30["eff__148 push_u32"]
	b161_30 --> b161_23
end
phi_165 --> block_161
subgraph phi_165["Phi 165"]
	p165_11{"memindex ϕ"}
	p165_11{"memindex ϕ"}
	p165_11{"memindex ϕ"}
	p165_11{"memindex ϕ"}
end
block_166 --> phi_165
block_167 --> phi_165
subgraph block_166["Block 166"]
	direction TB
	b166_10["memindex__160 imm_readULEB32"]
end
branch_164 --> block_166
subgraph branch_164["Branch 164"]
	br164_9["cond__159 u8.!="]

end
branch_159 --> branch_164
subgraph branch_159["Branch 159"]
	br159_14["cond__147 m_isMemory64"]

end
block_163 --> branch_159
subgraph block_163["Block 163"]
	direction TB
	b163_14["cond__147 m_isMemory64"]
end
phi_169 --> block_163
subgraph phi_169["Phi 169"]
	p169_12{{"Sϕ Codeptr "}}
	p169_12{{"Sϕ Codeptr "}}
	p169_12{{"Sϕ Codeptr "}}
	p169_12{{"Sϕ Codeptr "}}
end
block_170 --> phi_169
block_171 --> phi_169
subgraph block_170["Block 170"]
	direction TB
	b170_10["memindex__160 imm_readULEB32"]
end
branch_168 --> block_170
subgraph branch_168["Branch 168"]
	br168_9["cond__159 u8.!="]

end
block_172 --> branch_168
subgraph block_172["Block 172"]
	direction TB
	b172_9["cond__159 u8.!="]
	b172_8["arg__161 u8.&"]
	b172_5["arg__162 0"]
	b172_6["arg__164 0x40u8"]
	b172_0[/"Start"\\]
	b172_8 --> b172_9
	b172_5 --> b172_8
	b172_6 --> b172_5
	b172_0 --> b172_6
end
subgraph block_171["Block 171"]
	direction TB
end
branch_168 --> block_171
subgraph block_167["Block 167"]
	direction TB
	b167_4["memindex__166 0u"]
end
branch_164 --> block_167
subgraph block_162["Block 162"]
	direction TB
	b162_15["offset imm_readULEB32"]
	b162_22["eff__153 push_u32"]
	b162_22 --> b162_15
end
branch_159 --> block_162

</pre>`;
window.traces.I32_LOAD["unlem_pretty"] = `<pre class=''>def flags = imm_readU8();
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
window.traces.I32_LOAD["constUnLEM"] = `<pre class='graph'>---
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
window.traces.I32_LOAD["chooseMerge"] = `<pre class='graph'>---
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
window.traces.I32_LOAD["scheduled"] = `<pre class=''>def flags = imm_readU8();
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
window.traces.I32_LOAD["pretty"] = `<pre class=''>def flags = imm_readU8();
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
window.traces["I64_LOAD"] = {}
window.traces.I64_LOAD["parsed"] = `<pre class=''>def flags = imm_readU8();
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
window.traces.I64_LOAD["raw"] = `<pre class='graph'>---
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
window.traces.I64_LOAD["overloadOps"] = `<pre class='graph'>---
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
window.traces.I64_LOAD["addAbstractions"] = `<pre class='graph'>---
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
window.traces.I64_LOAD["schedulerMermaid"] = `<pre class='graph'>graph TD
subgraph block_173["Block 173"]
	direction TB
	b173_1[\\"Finish"/]
	b173_23["offset imm_readULEB64"]
	b173_15["offset imm_readULEB32"]
	b173_30["eff__168 push_u64"]
	b173_22["eff__173 push_u64"]
	b173_28["val mach_readMemory64_u64"]
	b173_24["index pop_u64"]
	b173_20["val mach_readMemory32_u64"]
	b173_16["index pop_u32"]
	b173_10["memindex__180 imm_readULEB32"]
	b173_4["memindex__186 0u"]
	b173_3["flags imm_readU8"]
	b173_23 --> b173_1
	b173_15 --> b173_23
	b173_30 --> b173_15
	b173_22 --> b173_30
	b173_28 --> b173_22
	b173_24 --> b173_28
	b173_20 --> b173_24
	b173_16 --> b173_20
	b173_10 --> b173_16
	b173_4 --> b173_10
	b173_3 --> b173_4
end
phi_175 --> block_173
subgraph phi_175["Phi 175"]
	p175_32{{"Sϕ Stack "}}
	p175_31{{"Sϕ Codeptr "}}
end
block_176 --> phi_175
block_177 --> phi_175
subgraph block_176["Block 176"]
	direction TB
	b176_23["offset imm_readULEB64"]
	b176_30["eff__168 push_u64"]
	b176_30 --> b176_23
end
phi_180 --> block_176
subgraph phi_180["Phi 180"]
	p180_11{"memindex ϕ"}
	p180_11{"memindex ϕ"}
	p180_11{"memindex ϕ"}
	p180_11{"memindex ϕ"}
end
block_181 --> phi_180
block_182 --> phi_180
subgraph block_181["Block 181"]
	direction TB
	b181_10["memindex__180 imm_readULEB32"]
end
branch_179 --> block_181
subgraph branch_179["Branch 179"]
	br179_9["cond__179 u8.!="]

end
branch_174 --> branch_179
subgraph branch_174["Branch 174"]
	br174_14["cond__167 m_isMemory64"]

end
block_178 --> branch_174
subgraph block_178["Block 178"]
	direction TB
	b178_14["cond__167 m_isMemory64"]
end
phi_184 --> block_178
subgraph phi_184["Phi 184"]
	p184_12{{"Sϕ Codeptr "}}
	p184_12{{"Sϕ Codeptr "}}
	p184_12{{"Sϕ Codeptr "}}
	p184_12{{"Sϕ Codeptr "}}
end
block_185 --> phi_184
block_186 --> phi_184
subgraph block_185["Block 185"]
	direction TB
	b185_10["memindex__180 imm_readULEB32"]
end
branch_183 --> block_185
subgraph branch_183["Branch 183"]
	br183_9["cond__179 u8.!="]

end
block_187 --> branch_183
subgraph block_187["Block 187"]
	direction TB
	b187_9["cond__179 u8.!="]
	b187_8["arg__181 u8.&"]
	b187_5["arg__182 0"]
	b187_6["arg__184 0x40u8"]
	b187_0[/"Start"\\]
	b187_8 --> b187_9
	b187_5 --> b187_8
	b187_6 --> b187_5
	b187_0 --> b187_6
end
subgraph block_186["Block 186"]
	direction TB
end
branch_183 --> block_186
subgraph block_182["Block 182"]
	direction TB
	b182_4["memindex__186 0u"]
end
branch_179 --> block_182
subgraph block_177["Block 177"]
	direction TB
	b177_15["offset imm_readULEB32"]
	b177_22["eff__173 push_u64"]
	b177_22 --> b177_15
end
branch_174 --> block_177

</pre>`;
window.traces.I64_LOAD["unLEM"] = `<pre class='graph'>---
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
window.traces.I64_LOAD["unlem_schedule"] = `<pre class=''>def flags = imm_readU8();
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
window.traces.I64_LOAD["unlem_scheduler"] = `<pre class='graph'>graph TD
subgraph block_188["Block 188"]
	direction TB
	b188_1[\\"Finish"/]
	b188_23["offset imm_readULEB64"]
	b188_15["offset imm_readULEB32"]
	b188_30["eff__168 push_u64"]
	b188_22["eff__173 push_u64"]
	b188_28["val mach_readMemory64_u64"]
	b188_24["index pop_u64"]
	b188_20["val mach_readMemory32_u64"]
	b188_16["index pop_u32"]
	b188_10["memindex__180 imm_readULEB32"]
	b188_4["memindex__186 0u"]
	b188_3["flags imm_readU8"]
	b188_23 --> b188_1
	b188_15 --> b188_23
	b188_30 --> b188_15
	b188_22 --> b188_30
	b188_28 --> b188_22
	b188_24 --> b188_28
	b188_20 --> b188_24
	b188_16 --> b188_20
	b188_10 --> b188_16
	b188_4 --> b188_10
	b188_3 --> b188_4
end
phi_190 --> block_188
subgraph phi_190["Phi 190"]
	p190_32{{"Sϕ Stack "}}
	p190_31{{"Sϕ Codeptr "}}
end
block_191 --> phi_190
block_192 --> phi_190
subgraph block_191["Block 191"]
	direction TB
	b191_23["offset imm_readULEB64"]
	b191_30["eff__168 push_u64"]
	b191_30 --> b191_23
end
phi_195 --> block_191
subgraph phi_195["Phi 195"]
	p195_11{"memindex ϕ"}
	p195_11{"memindex ϕ"}
	p195_11{"memindex ϕ"}
	p195_11{"memindex ϕ"}
end
block_196 --> phi_195
block_197 --> phi_195
subgraph block_196["Block 196"]
	direction TB
	b196_10["memindex__180 imm_readULEB32"]
end
branch_194 --> block_196
subgraph branch_194["Branch 194"]
	br194_9["cond__179 u8.!="]

end
branch_189 --> branch_194
subgraph branch_189["Branch 189"]
	br189_14["cond__167 m_isMemory64"]

end
block_193 --> branch_189
subgraph block_193["Block 193"]
	direction TB
	b193_14["cond__167 m_isMemory64"]
end
phi_199 --> block_193
subgraph phi_199["Phi 199"]
	p199_12{{"Sϕ Codeptr "}}
	p199_12{{"Sϕ Codeptr "}}
	p199_12{{"Sϕ Codeptr "}}
	p199_12{{"Sϕ Codeptr "}}
end
block_200 --> phi_199
block_201 --> phi_199
subgraph block_200["Block 200"]
	direction TB
	b200_10["memindex__180 imm_readULEB32"]
end
branch_198 --> block_200
subgraph branch_198["Branch 198"]
	br198_9["cond__179 u8.!="]

end
block_202 --> branch_198
subgraph block_202["Block 202"]
	direction TB
	b202_9["cond__179 u8.!="]
	b202_8["arg__181 u8.&"]
	b202_5["arg__182 0"]
	b202_6["arg__184 0x40u8"]
	b202_0[/"Start"\\]
	b202_8 --> b202_9
	b202_5 --> b202_8
	b202_6 --> b202_5
	b202_0 --> b202_6
end
subgraph block_201["Block 201"]
	direction TB
end
branch_198 --> block_201
subgraph block_197["Block 197"]
	direction TB
	b197_4["memindex__186 0u"]
end
branch_194 --> block_197
subgraph block_192["Block 192"]
	direction TB
	b192_15["offset imm_readULEB32"]
	b192_22["eff__173 push_u64"]
	b192_22 --> b192_15
end
branch_189 --> block_192

</pre>`;
window.traces.I64_LOAD["unlem_pretty"] = `<pre class=''>def flags = imm_readU8();
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
window.traces.I64_LOAD["constUnLEM"] = `<pre class='graph'>---
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
window.traces.I64_LOAD["chooseMerge"] = `<pre class='graph'>---
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
window.traces.I64_LOAD["scheduled"] = `<pre class=''>def flags = imm_readU8();
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
window.traces.I64_LOAD["pretty"] = `<pre class=''>def flags = imm_readU8();
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
window.traces["F32_LOAD"] = {}
window.traces.F32_LOAD["parsed"] = `<pre class=''>def flags = imm_readU8();
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
window.traces.F32_LOAD["raw"] = `<pre class='graph'>---
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
window.traces.F32_LOAD["overloadOps"] = `<pre class='graph'>---
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
window.traces.F32_LOAD["addAbstractions"] = `<pre class='graph'>---
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
window.traces.F32_LOAD["schedulerMermaid"] = `<pre class='graph'>graph TD
subgraph block_203["Block 203"]
	direction TB
	b203_1[\\"Finish"/]
	b203_23["offset imm_readULEB64"]
	b203_15["offset imm_readULEB32"]
	b203_30["eff__188 push_f32"]
	b203_22["eff__193 push_f32"]
	b203_28["val mach_readMemory64_f32"]
	b203_24["index pop_u64"]
	b203_20["val mach_readMemory32_f32"]
	b203_16["index pop_u32"]
	b203_10["memindex__200 imm_readULEB32"]
	b203_4["memindex__206 0u"]
	b203_3["flags imm_readU8"]
	b203_23 --> b203_1
	b203_15 --> b203_23
	b203_30 --> b203_15
	b203_22 --> b203_30
	b203_28 --> b203_22
	b203_24 --> b203_28
	b203_20 --> b203_24
	b203_16 --> b203_20
	b203_10 --> b203_16
	b203_4 --> b203_10
	b203_3 --> b203_4
end
phi_205 --> block_203
subgraph phi_205["Phi 205"]
	p205_32{{"Sϕ Stack "}}
	p205_31{{"Sϕ Codeptr "}}
end
block_206 --> phi_205
block_207 --> phi_205
subgraph block_206["Block 206"]
	direction TB
	b206_23["offset imm_readULEB64"]
	b206_30["eff__188 push_f32"]
	b206_30 --> b206_23
end
phi_210 --> block_206
subgraph phi_210["Phi 210"]
	p210_11{"memindex ϕ"}
	p210_11{"memindex ϕ"}
	p210_11{"memindex ϕ"}
	p210_11{"memindex ϕ"}
end
block_211 --> phi_210
block_212 --> phi_210
subgraph block_211["Block 211"]
	direction TB
	b211_10["memindex__200 imm_readULEB32"]
end
branch_209 --> block_211
subgraph branch_209["Branch 209"]
	br209_9["cond__199 u8.!="]

end
branch_204 --> branch_209
subgraph branch_204["Branch 204"]
	br204_14["cond__187 m_isMemory64"]

end
block_208 --> branch_204
subgraph block_208["Block 208"]
	direction TB
	b208_14["cond__187 m_isMemory64"]
end
phi_214 --> block_208
subgraph phi_214["Phi 214"]
	p214_12{{"Sϕ Codeptr "}}
	p214_12{{"Sϕ Codeptr "}}
	p214_12{{"Sϕ Codeptr "}}
	p214_12{{"Sϕ Codeptr "}}
end
block_215 --> phi_214
block_216 --> phi_214
subgraph block_215["Block 215"]
	direction TB
	b215_10["memindex__200 imm_readULEB32"]
end
branch_213 --> block_215
subgraph branch_213["Branch 213"]
	br213_9["cond__199 u8.!="]

end
block_217 --> branch_213
subgraph block_217["Block 217"]
	direction TB
	b217_9["cond__199 u8.!="]
	b217_8["arg__201 u8.&"]
	b217_5["arg__202 0"]
	b217_6["arg__204 0x40u8"]
	b217_0[/"Start"\\]
	b217_8 --> b217_9
	b217_5 --> b217_8
	b217_6 --> b217_5
	b217_0 --> b217_6
end
subgraph block_216["Block 216"]
	direction TB
end
branch_213 --> block_216
subgraph block_212["Block 212"]
	direction TB
	b212_4["memindex__206 0u"]
end
branch_209 --> block_212
subgraph block_207["Block 207"]
	direction TB
	b207_15["offset imm_readULEB32"]
	b207_22["eff__193 push_f32"]
	b207_22 --> b207_15
end
branch_204 --> block_207

</pre>`;
window.traces.F32_LOAD["unLEM"] = `<pre class='graph'>---
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
window.traces.F32_LOAD["unlem_schedule"] = `<pre class=''>def flags = imm_readU8();
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
window.traces.F32_LOAD["unlem_scheduler"] = `<pre class='graph'>graph TD
subgraph block_218["Block 218"]
	direction TB
	b218_1[\\"Finish"/]
	b218_23["offset imm_readULEB64"]
	b218_15["offset imm_readULEB32"]
	b218_30["eff__188 push_f32"]
	b218_22["eff__193 push_f32"]
	b218_28["val mach_readMemory64_f32"]
	b218_24["index pop_u64"]
	b218_20["val mach_readMemory32_f32"]
	b218_16["index pop_u32"]
	b218_10["memindex__200 imm_readULEB32"]
	b218_4["memindex__206 0u"]
	b218_3["flags imm_readU8"]
	b218_23 --> b218_1
	b218_15 --> b218_23
	b218_30 --> b218_15
	b218_22 --> b218_30
	b218_28 --> b218_22
	b218_24 --> b218_28
	b218_20 --> b218_24
	b218_16 --> b218_20
	b218_10 --> b218_16
	b218_4 --> b218_10
	b218_3 --> b218_4
end
phi_220 --> block_218
subgraph phi_220["Phi 220"]
	p220_32{{"Sϕ Stack "}}
	p220_31{{"Sϕ Codeptr "}}
end
block_221 --> phi_220
block_222 --> phi_220
subgraph block_221["Block 221"]
	direction TB
	b221_23["offset imm_readULEB64"]
	b221_30["eff__188 push_f32"]
	b221_30 --> b221_23
end
phi_225 --> block_221
subgraph phi_225["Phi 225"]
	p225_11{"memindex ϕ"}
	p225_11{"memindex ϕ"}
	p225_11{"memindex ϕ"}
	p225_11{"memindex ϕ"}
end
block_226 --> phi_225
block_227 --> phi_225
subgraph block_226["Block 226"]
	direction TB
	b226_10["memindex__200 imm_readULEB32"]
end
branch_224 --> block_226
subgraph branch_224["Branch 224"]
	br224_9["cond__199 u8.!="]

end
branch_219 --> branch_224
subgraph branch_219["Branch 219"]
	br219_14["cond__187 m_isMemory64"]

end
block_223 --> branch_219
subgraph block_223["Block 223"]
	direction TB
	b223_14["cond__187 m_isMemory64"]
end
phi_229 --> block_223
subgraph phi_229["Phi 229"]
	p229_12{{"Sϕ Codeptr "}}
	p229_12{{"Sϕ Codeptr "}}
	p229_12{{"Sϕ Codeptr "}}
	p229_12{{"Sϕ Codeptr "}}
end
block_230 --> phi_229
block_231 --> phi_229
subgraph block_230["Block 230"]
	direction TB
	b230_10["memindex__200 imm_readULEB32"]
end
branch_228 --> block_230
subgraph branch_228["Branch 228"]
	br228_9["cond__199 u8.!="]

end
block_232 --> branch_228
subgraph block_232["Block 232"]
	direction TB
	b232_9["cond__199 u8.!="]
	b232_8["arg__201 u8.&"]
	b232_5["arg__202 0"]
	b232_6["arg__204 0x40u8"]
	b232_0[/"Start"\\]
	b232_8 --> b232_9
	b232_5 --> b232_8
	b232_6 --> b232_5
	b232_0 --> b232_6
end
subgraph block_231["Block 231"]
	direction TB
end
branch_228 --> block_231
subgraph block_227["Block 227"]
	direction TB
	b227_4["memindex__206 0u"]
end
branch_224 --> block_227
subgraph block_222["Block 222"]
	direction TB
	b222_15["offset imm_readULEB32"]
	b222_22["eff__193 push_f32"]
	b222_22 --> b222_15
end
branch_219 --> block_222

</pre>`;
window.traces.F32_LOAD["unlem_pretty"] = `<pre class=''>def flags = imm_readU8();
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
window.traces.F32_LOAD["constUnLEM"] = `<pre class='graph'>---
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
window.traces.F32_LOAD["chooseMerge"] = `<pre class='graph'>---
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
window.traces.F32_LOAD["scheduled"] = `<pre class=''>def flags = imm_readU8();
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
window.traces.F32_LOAD["pretty"] = `<pre class=''>def flags = imm_readU8();
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
window.traces["F64_LOAD"] = {}
window.traces.F64_LOAD["parsed"] = `<pre class=''>def flags = imm_readU8();
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
window.traces.F64_LOAD["raw"] = `<pre class='graph'>---
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
window.traces.F64_LOAD["overloadOps"] = `<pre class='graph'>---
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
window.traces.F64_LOAD["addAbstractions"] = `<pre class='graph'>---
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
window.traces.F64_LOAD["schedulerMermaid"] = `<pre class='graph'>graph TD
subgraph block_233["Block 233"]
	direction TB
	b233_1[\\"Finish"/]
	b233_23["offset imm_readULEB64"]
	b233_15["offset imm_readULEB32"]
	b233_30["eff__208 push_f64"]
	b233_22["eff__213 push_f64"]
	b233_28["val mach_readMemory64_f64"]
	b233_24["index pop_u64"]
	b233_20["val mach_readMemory32_f64"]
	b233_16["index pop_u32"]
	b233_10["memindex__220 imm_readULEB32"]
	b233_4["memindex__226 0u"]
	b233_3["flags imm_readU8"]
	b233_23 --> b233_1
	b233_15 --> b233_23
	b233_30 --> b233_15
	b233_22 --> b233_30
	b233_28 --> b233_22
	b233_24 --> b233_28
	b233_20 --> b233_24
	b233_16 --> b233_20
	b233_10 --> b233_16
	b233_4 --> b233_10
	b233_3 --> b233_4
end
phi_235 --> block_233
subgraph phi_235["Phi 235"]
	p235_32{{"Sϕ Stack "}}
	p235_31{{"Sϕ Codeptr "}}
end
block_236 --> phi_235
block_237 --> phi_235
subgraph block_236["Block 236"]
	direction TB
	b236_23["offset imm_readULEB64"]
	b236_30["eff__208 push_f64"]
	b236_30 --> b236_23
end
phi_240 --> block_236
subgraph phi_240["Phi 240"]
	p240_11{"memindex ϕ"}
	p240_11{"memindex ϕ"}
	p240_11{"memindex ϕ"}
	p240_11{"memindex ϕ"}
end
block_241 --> phi_240
block_242 --> phi_240
subgraph block_241["Block 241"]
	direction TB
	b241_10["memindex__220 imm_readULEB32"]
end
branch_239 --> block_241
subgraph branch_239["Branch 239"]
	br239_9["cond__219 u8.!="]

end
branch_234 --> branch_239
subgraph branch_234["Branch 234"]
	br234_14["cond__207 m_isMemory64"]

end
block_238 --> branch_234
subgraph block_238["Block 238"]
	direction TB
	b238_14["cond__207 m_isMemory64"]
end
phi_244 --> block_238
subgraph phi_244["Phi 244"]
	p244_12{{"Sϕ Codeptr "}}
	p244_12{{"Sϕ Codeptr "}}
	p244_12{{"Sϕ Codeptr "}}
	p244_12{{"Sϕ Codeptr "}}
end
block_245 --> phi_244
block_246 --> phi_244
subgraph block_245["Block 245"]
	direction TB
	b245_10["memindex__220 imm_readULEB32"]
end
branch_243 --> block_245
subgraph branch_243["Branch 243"]
	br243_9["cond__219 u8.!="]

end
block_247 --> branch_243
subgraph block_247["Block 247"]
	direction TB
	b247_9["cond__219 u8.!="]
	b247_8["arg__221 u8.&"]
	b247_5["arg__222 0"]
	b247_6["arg__224 0x40u8"]
	b247_0[/"Start"\\]
	b247_8 --> b247_9
	b247_5 --> b247_8
	b247_6 --> b247_5
	b247_0 --> b247_6
end
subgraph block_246["Block 246"]
	direction TB
end
branch_243 --> block_246
subgraph block_242["Block 242"]
	direction TB
	b242_4["memindex__226 0u"]
end
branch_239 --> block_242
subgraph block_237["Block 237"]
	direction TB
	b237_15["offset imm_readULEB32"]
	b237_22["eff__213 push_f64"]
	b237_22 --> b237_15
end
branch_234 --> block_237

</pre>`;
window.traces.F64_LOAD["unLEM"] = `<pre class='graph'>---
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
window.traces.F64_LOAD["unlem_schedule"] = `<pre class=''>def flags = imm_readU8();
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
window.traces.F64_LOAD["unlem_scheduler"] = `<pre class='graph'>graph TD
subgraph block_248["Block 248"]
	direction TB
	b248_1[\\"Finish"/]
	b248_23["offset imm_readULEB64"]
	b248_15["offset imm_readULEB32"]
	b248_30["eff__208 push_f64"]
	b248_22["eff__213 push_f64"]
	b248_28["val mach_readMemory64_f64"]
	b248_24["index pop_u64"]
	b248_20["val mach_readMemory32_f64"]
	b248_16["index pop_u32"]
	b248_10["memindex__220 imm_readULEB32"]
	b248_4["memindex__226 0u"]
	b248_3["flags imm_readU8"]
	b248_23 --> b248_1
	b248_15 --> b248_23
	b248_30 --> b248_15
	b248_22 --> b248_30
	b248_28 --> b248_22
	b248_24 --> b248_28
	b248_20 --> b248_24
	b248_16 --> b248_20
	b248_10 --> b248_16
	b248_4 --> b248_10
	b248_3 --> b248_4
end
phi_250 --> block_248
subgraph phi_250["Phi 250"]
	p250_32{{"Sϕ Stack "}}
	p250_31{{"Sϕ Codeptr "}}
end
block_251 --> phi_250
block_252 --> phi_250
subgraph block_251["Block 251"]
	direction TB
	b251_23["offset imm_readULEB64"]
	b251_30["eff__208 push_f64"]
	b251_30 --> b251_23
end
phi_255 --> block_251
subgraph phi_255["Phi 255"]
	p255_11{"memindex ϕ"}
	p255_11{"memindex ϕ"}
	p255_11{"memindex ϕ"}
	p255_11{"memindex ϕ"}
end
block_256 --> phi_255
block_257 --> phi_255
subgraph block_256["Block 256"]
	direction TB
	b256_10["memindex__220 imm_readULEB32"]
end
branch_254 --> block_256
subgraph branch_254["Branch 254"]
	br254_9["cond__219 u8.!="]

end
branch_249 --> branch_254
subgraph branch_249["Branch 249"]
	br249_14["cond__207 m_isMemory64"]

end
block_253 --> branch_249
subgraph block_253["Block 253"]
	direction TB
	b253_14["cond__207 m_isMemory64"]
end
phi_259 --> block_253
subgraph phi_259["Phi 259"]
	p259_12{{"Sϕ Codeptr "}}
	p259_12{{"Sϕ Codeptr "}}
	p259_12{{"Sϕ Codeptr "}}
	p259_12{{"Sϕ Codeptr "}}
end
block_260 --> phi_259
block_261 --> phi_259
subgraph block_260["Block 260"]
	direction TB
	b260_10["memindex__220 imm_readULEB32"]
end
branch_258 --> block_260
subgraph branch_258["Branch 258"]
	br258_9["cond__219 u8.!="]

end
block_262 --> branch_258
subgraph block_262["Block 262"]
	direction TB
	b262_9["cond__219 u8.!="]
	b262_8["arg__221 u8.&"]
	b262_5["arg__222 0"]
	b262_6["arg__224 0x40u8"]
	b262_0[/"Start"\\]
	b262_8 --> b262_9
	b262_5 --> b262_8
	b262_6 --> b262_5
	b262_0 --> b262_6
end
subgraph block_261["Block 261"]
	direction TB
end
branch_258 --> block_261
subgraph block_257["Block 257"]
	direction TB
	b257_4["memindex__226 0u"]
end
branch_254 --> block_257
subgraph block_252["Block 252"]
	direction TB
	b252_15["offset imm_readULEB32"]
	b252_22["eff__213 push_f64"]
	b252_22 --> b252_15
end
branch_249 --> block_252

</pre>`;
window.traces.F64_LOAD["unlem_pretty"] = `<pre class=''>def flags = imm_readU8();
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
window.traces.F64_LOAD["constUnLEM"] = `<pre class='graph'>---
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
window.traces.F64_LOAD["chooseMerge"] = `<pre class='graph'>---
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
window.traces.F64_LOAD["scheduled"] = `<pre class=''>def flags = imm_readU8();
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
window.traces.F64_LOAD["pretty"] = `<pre class=''>def flags = imm_readU8();
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
window.traces["I32_LOAD8_S"] = {}
window.traces.I32_LOAD8_S["parsed"] = `<pre class=''>def flags = imm_readU8();
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
window.traces.I32_LOAD8_S["raw"] = `<pre class='graph'>---
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
window.traces.I32_LOAD8_S["overloadOps"] = `<pre class='graph'>---
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
window.traces.I32_LOAD8_S["addAbstractions"] = `<pre class='graph'>---
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
window.traces.I32_LOAD8_S["schedulerMermaid"] = `<pre class='graph'>graph TD
subgraph block_263["Block 263"]
	direction TB
	b263_1[\\"Finish"/]
	b263_25["offset imm_readULEB64"]
	b263_15["offset imm_readULEB32"]
	b263_34["eff__228 push_u32"]
	b263_24["eff__234 push_u32"]
	b263_32["extend U32_extend8_s"]
	b263_26["index pop_u64"]
	b263_22["extend U32_extend8_s"]
	b263_16["index pop_u32"]
	b263_10["memindex__242 imm_readULEB32"]
	b263_4["memindex__248 0u"]
	b263_3["flags imm_readU8"]
	b263_30["val mach_readMemory64_u8"]
	b263_20["val mach_readMemory32_u8"]
	b263_25 --> b263_1
	b263_15 --> b263_25
	b263_34 --> b263_15
	b263_24 --> b263_34
	b263_32 --> b263_24
	b263_26 --> b263_32
	b263_22 --> b263_26
	b263_16 --> b263_22
	b263_10 --> b263_16
	b263_4 --> b263_10
	b263_3 --> b263_4
	b263_30 --> b263_3
	b263_20 --> b263_30
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
	b266_25["offset imm_readULEB64"]
	b266_34["eff__228 push_u32"]
	b266_34 --> b266_25
end
phi_270 --> block_266
subgraph phi_270["Phi 270"]
	p270_11{"memindex ϕ"}
	p270_11{"memindex ϕ"}
	p270_11{"memindex ϕ"}
	p270_11{"memindex ϕ"}
end
block_271 --> phi_270
block_272 --> phi_270
subgraph block_271["Block 271"]
	direction TB
	b271_10["memindex__242 imm_readULEB32"]
end
branch_269 --> block_271
subgraph branch_269["Branch 269"]
	br269_9["cond__241 u8.!="]

end
branch_264 --> branch_269
subgraph branch_264["Branch 264"]
	br264_14["cond__227 m_isMemory64"]

end
block_268 --> branch_264
subgraph block_268["Block 268"]
	direction TB
	b268_14["cond__227 m_isMemory64"]
end
phi_274 --> block_268
subgraph phi_274["Phi 274"]
	p274_12{{"Sϕ Codeptr "}}
	p274_12{{"Sϕ Codeptr "}}
end
block_275 --> phi_274
block_276 --> phi_274
subgraph block_275["Block 275"]
	direction TB
	b275_10["memindex__242 imm_readULEB32"]
end
branch_273 --> block_275
subgraph branch_273["Branch 273"]
	br273_9["cond__241 u8.!="]

end
block_277 --> branch_273
subgraph block_277["Block 277"]
	direction TB
	b277_9["cond__241 u8.!="]
	b277_8["arg__243 u8.&"]
	b277_5["arg__244 0"]
	b277_6["arg__246 0x40u8"]
	b277_0[/"Start"\\]
	b277_8 --> b277_9
	b277_5 --> b277_8
	b277_6 --> b277_5
	b277_0 --> b277_6
end
subgraph block_276["Block 276"]
	direction TB
end
branch_273 --> block_276
subgraph block_272["Block 272"]
	direction TB
	b272_4["memindex__248 0u"]
end
branch_269 --> block_272
subgraph block_267["Block 267"]
	direction TB
	b267_15["offset imm_readULEB32"]
	b267_24["eff__234 push_u32"]
	b267_24 --> b267_15
end
branch_264 --> block_267

</pre>`;
window.traces.I32_LOAD8_S["unLEM"] = `<pre class='graph'>---
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
window.traces.I32_LOAD8_S["unlem_schedule"] = `<pre class=''>def flags = imm_readU8();
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
window.traces.I32_LOAD8_S["unlem_scheduler"] = `<pre class='graph'>graph TD
subgraph block_278["Block 278"]
	direction TB
	b278_1[\\"Finish"/]
	b278_25["offset imm_readULEB64"]
	b278_15["offset imm_readULEB32"]
	b278_34["eff__228 push_u32"]
	b278_24["eff__234 push_u32"]
	b278_32["extend U32_extend8_s"]
	b278_26["index pop_u64"]
	b278_22["extend U32_extend8_s"]
	b278_16["index pop_u32"]
	b278_10["memindex__242 imm_readULEB32"]
	b278_4["memindex__248 0u"]
	b278_3["flags imm_readU8"]
	b278_30["val mach_readMemory64_u8"]
	b278_20["val mach_readMemory32_u8"]
	b278_25 --> b278_1
	b278_15 --> b278_25
	b278_34 --> b278_15
	b278_24 --> b278_34
	b278_32 --> b278_24
	b278_26 --> b278_32
	b278_22 --> b278_26
	b278_16 --> b278_22
	b278_10 --> b278_16
	b278_4 --> b278_10
	b278_3 --> b278_4
	b278_30 --> b278_3
	b278_20 --> b278_30
end
phi_280 --> block_278
subgraph phi_280["Phi 280"]
	p280_36{{"Sϕ Stack "}}
	p280_35{{"Sϕ Codeptr "}}
end
block_281 --> phi_280
block_282 --> phi_280
subgraph block_281["Block 281"]
	direction TB
	b281_25["offset imm_readULEB64"]
	b281_34["eff__228 push_u32"]
	b281_34 --> b281_25
end
phi_285 --> block_281
subgraph phi_285["Phi 285"]
	p285_11{"memindex ϕ"}
	p285_11{"memindex ϕ"}
	p285_11{"memindex ϕ"}
	p285_11{"memindex ϕ"}
end
block_286 --> phi_285
block_287 --> phi_285
subgraph block_286["Block 286"]
	direction TB
	b286_10["memindex__242 imm_readULEB32"]
end
branch_284 --> block_286
subgraph branch_284["Branch 284"]
	br284_9["cond__241 u8.!="]

end
branch_279 --> branch_284
subgraph branch_279["Branch 279"]
	br279_14["cond__227 m_isMemory64"]

end
block_283 --> branch_279
subgraph block_283["Block 283"]
	direction TB
	b283_14["cond__227 m_isMemory64"]
end
phi_289 --> block_283
subgraph phi_289["Phi 289"]
	p289_12{{"Sϕ Codeptr "}}
	p289_12{{"Sϕ Codeptr "}}
end
block_290 --> phi_289
block_291 --> phi_289
subgraph block_290["Block 290"]
	direction TB
	b290_10["memindex__242 imm_readULEB32"]
end
branch_288 --> block_290
subgraph branch_288["Branch 288"]
	br288_9["cond__241 u8.!="]

end
block_292 --> branch_288
subgraph block_292["Block 292"]
	direction TB
	b292_9["cond__241 u8.!="]
	b292_8["arg__243 u8.&"]
	b292_5["arg__244 0"]
	b292_6["arg__246 0x40u8"]
	b292_0[/"Start"\\]
	b292_8 --> b292_9
	b292_5 --> b292_8
	b292_6 --> b292_5
	b292_0 --> b292_6
end
subgraph block_291["Block 291"]
	direction TB
end
branch_288 --> block_291
subgraph block_287["Block 287"]
	direction TB
	b287_4["memindex__248 0u"]
end
branch_284 --> block_287
subgraph block_282["Block 282"]
	direction TB
	b282_15["offset imm_readULEB32"]
	b282_24["eff__234 push_u32"]
	b282_24 --> b282_15
end
branch_279 --> block_282

</pre>`;
window.traces.I32_LOAD8_S["unlem_pretty"] = `<pre class=''>def flags = imm_readU8();
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
window.traces.I32_LOAD8_S["constUnLEM"] = `<pre class='graph'>---
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
window.traces.I32_LOAD8_S["chooseMerge"] = `<pre class='graph'>---
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
window.traces.I32_LOAD8_S["scheduled"] = `<pre class=''>def flags = imm_readU8();
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
window.traces.I32_LOAD8_S["pretty"] = `<pre class=''>def flags = imm_readU8();
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
window.traces["I32_LOAD8_U"] = {}
window.traces.I32_LOAD8_U["parsed"] = `<pre class=''>def flags = imm_readU8();
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
window.traces.I32_LOAD8_U["raw"] = `<pre class='graph'>---
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
window.traces.I32_LOAD8_U["overloadOps"] = `<pre class='graph'>---
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
window.traces.I32_LOAD8_U["addAbstractions"] = `<pre class='graph'>---
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
window.traces.I32_LOAD8_U["schedulerMermaid"] = `<pre class='graph'>graph TD
subgraph block_293["Block 293"]
	direction TB
	b293_1[\\"Finish"/]
	b293_23["offset imm_readULEB64"]
	b293_15["offset imm_readULEB32"]
	b293_30["eff__250 push_u32"]
	b293_22["eff__255 push_u32"]
	b293_28["val mach_readMemory64_u8"]
	b293_24["index pop_u64"]
	b293_20["val mach_readMemory32_u8"]
	b293_16["index pop_u32"]
	b293_10["memindex__262 imm_readULEB32"]
	b293_4["memindex__268 0u"]
	b293_3["flags imm_readU8"]
	b293_23 --> b293_1
	b293_15 --> b293_23
	b293_30 --> b293_15
	b293_22 --> b293_30
	b293_28 --> b293_22
	b293_24 --> b293_28
	b293_20 --> b293_24
	b293_16 --> b293_20
	b293_10 --> b293_16
	b293_4 --> b293_10
	b293_3 --> b293_4
end
phi_295 --> block_293
subgraph phi_295["Phi 295"]
	p295_32{{"Sϕ Stack "}}
	p295_31{{"Sϕ Codeptr "}}
end
block_296 --> phi_295
block_297 --> phi_295
subgraph block_296["Block 296"]
	direction TB
	b296_23["offset imm_readULEB64"]
	b296_30["eff__250 push_u32"]
	b296_30 --> b296_23
end
phi_300 --> block_296
subgraph phi_300["Phi 300"]
	p300_11{"memindex ϕ"}
	p300_11{"memindex ϕ"}
	p300_11{"memindex ϕ"}
	p300_11{"memindex ϕ"}
end
block_301 --> phi_300
block_302 --> phi_300
subgraph block_301["Block 301"]
	direction TB
	b301_10["memindex__262 imm_readULEB32"]
end
branch_299 --> block_301
subgraph branch_299["Branch 299"]
	br299_9["cond__261 u8.!="]

end
branch_294 --> branch_299
subgraph branch_294["Branch 294"]
	br294_14["cond__249 m_isMemory64"]

end
block_298 --> branch_294
subgraph block_298["Block 298"]
	direction TB
	b298_14["cond__249 m_isMemory64"]
end
phi_304 --> block_298
subgraph phi_304["Phi 304"]
	p304_12{{"Sϕ Codeptr "}}
	p304_12{{"Sϕ Codeptr "}}
	p304_12{{"Sϕ Codeptr "}}
	p304_12{{"Sϕ Codeptr "}}
end
block_305 --> phi_304
block_306 --> phi_304
subgraph block_305["Block 305"]
	direction TB
	b305_10["memindex__262 imm_readULEB32"]
end
branch_303 --> block_305
subgraph branch_303["Branch 303"]
	br303_9["cond__261 u8.!="]

end
block_307 --> branch_303
subgraph block_307["Block 307"]
	direction TB
	b307_9["cond__261 u8.!="]
	b307_8["arg__263 u8.&"]
	b307_5["arg__264 0"]
	b307_6["arg__266 0x40u8"]
	b307_0[/"Start"\\]
	b307_8 --> b307_9
	b307_5 --> b307_8
	b307_6 --> b307_5
	b307_0 --> b307_6
end
subgraph block_306["Block 306"]
	direction TB
end
branch_303 --> block_306
subgraph block_302["Block 302"]
	direction TB
	b302_4["memindex__268 0u"]
end
branch_299 --> block_302
subgraph block_297["Block 297"]
	direction TB
	b297_15["offset imm_readULEB32"]
	b297_22["eff__255 push_u32"]
	b297_22 --> b297_15
end
branch_294 --> block_297

</pre>`;
window.traces.I32_LOAD8_U["unLEM"] = `<pre class='graph'>---
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
window.traces.I32_LOAD8_U["unlem_schedule"] = `<pre class=''>def flags = imm_readU8();
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
window.traces.I32_LOAD8_U["unlem_scheduler"] = `<pre class='graph'>graph TD
subgraph block_308["Block 308"]
	direction TB
	b308_1[\\"Finish"/]
	b308_23["offset imm_readULEB64"]
	b308_15["offset imm_readULEB32"]
	b308_30["eff__250 push_u32"]
	b308_22["eff__255 push_u32"]
	b308_28["val mach_readMemory64_u8"]
	b308_24["index pop_u64"]
	b308_20["val mach_readMemory32_u8"]
	b308_16["index pop_u32"]
	b308_10["memindex__262 imm_readULEB32"]
	b308_4["memindex__268 0u"]
	b308_3["flags imm_readU8"]
	b308_23 --> b308_1
	b308_15 --> b308_23
	b308_30 --> b308_15
	b308_22 --> b308_30
	b308_28 --> b308_22
	b308_24 --> b308_28
	b308_20 --> b308_24
	b308_16 --> b308_20
	b308_10 --> b308_16
	b308_4 --> b308_10
	b308_3 --> b308_4
end
phi_310 --> block_308
subgraph phi_310["Phi 310"]
	p310_32{{"Sϕ Stack "}}
	p310_31{{"Sϕ Codeptr "}}
end
block_311 --> phi_310
block_312 --> phi_310
subgraph block_311["Block 311"]
	direction TB
	b311_23["offset imm_readULEB64"]
	b311_30["eff__250 push_u32"]
	b311_30 --> b311_23
end
phi_315 --> block_311
subgraph phi_315["Phi 315"]
	p315_11{"memindex ϕ"}
	p315_11{"memindex ϕ"}
	p315_11{"memindex ϕ"}
	p315_11{"memindex ϕ"}
end
block_316 --> phi_315
block_317 --> phi_315
subgraph block_316["Block 316"]
	direction TB
	b316_10["memindex__262 imm_readULEB32"]
end
branch_314 --> block_316
subgraph branch_314["Branch 314"]
	br314_9["cond__261 u8.!="]

end
branch_309 --> branch_314
subgraph branch_309["Branch 309"]
	br309_14["cond__249 m_isMemory64"]

end
block_313 --> branch_309
subgraph block_313["Block 313"]
	direction TB
	b313_14["cond__249 m_isMemory64"]
end
phi_319 --> block_313
subgraph phi_319["Phi 319"]
	p319_12{{"Sϕ Codeptr "}}
	p319_12{{"Sϕ Codeptr "}}
	p319_12{{"Sϕ Codeptr "}}
	p319_12{{"Sϕ Codeptr "}}
end
block_320 --> phi_319
block_321 --> phi_319
subgraph block_320["Block 320"]
	direction TB
	b320_10["memindex__262 imm_readULEB32"]
end
branch_318 --> block_320
subgraph branch_318["Branch 318"]
	br318_9["cond__261 u8.!="]

end
block_322 --> branch_318
subgraph block_322["Block 322"]
	direction TB
	b322_9["cond__261 u8.!="]
	b322_8["arg__263 u8.&"]
	b322_5["arg__264 0"]
	b322_6["arg__266 0x40u8"]
	b322_0[/"Start"\\]
	b322_8 --> b322_9
	b322_5 --> b322_8
	b322_6 --> b322_5
	b322_0 --> b322_6
end
subgraph block_321["Block 321"]
	direction TB
end
branch_318 --> block_321
subgraph block_317["Block 317"]
	direction TB
	b317_4["memindex__268 0u"]
end
branch_314 --> block_317
subgraph block_312["Block 312"]
	direction TB
	b312_15["offset imm_readULEB32"]
	b312_22["eff__255 push_u32"]
	b312_22 --> b312_15
end
branch_309 --> block_312

</pre>`;
window.traces.I32_LOAD8_U["unlem_pretty"] = `<pre class=''>def flags = imm_readU8();
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
window.traces.I32_LOAD8_U["constUnLEM"] = `<pre class='graph'>---
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
window.traces.I32_LOAD8_U["chooseMerge"] = `<pre class='graph'>---
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
window.traces.I32_LOAD8_U["scheduled"] = `<pre class=''>def flags = imm_readU8();
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
window.traces.I32_LOAD8_U["pretty"] = `<pre class=''>def flags = imm_readU8();
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
window.traces["I32_LOAD16_S"] = {}
window.traces.I32_LOAD16_S["parsed"] = `<pre class=''>def flags = imm_readU8();
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
window.traces.I32_LOAD16_S["raw"] = `<pre class='graph'>---
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
window.traces.I32_LOAD16_S["overloadOps"] = `<pre class='graph'>---
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
window.traces.I32_LOAD16_S["addAbstractions"] = `<pre class='graph'>---
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
window.traces.I32_LOAD16_S["schedulerMermaid"] = `<pre class='graph'>graph TD
subgraph block_323["Block 323"]
	direction TB
	b323_1[\\"Finish"/]
	b323_25["offset imm_readULEB64"]
	b323_15["offset imm_readULEB32"]
	b323_34["eff__270 push_u32"]
	b323_24["eff__276 push_u32"]
	b323_32["extend U32_extend16_s"]
	b323_26["index pop_u64"]
	b323_22["extend U32_extend16_s"]
	b323_16["index pop_u32"]
	b323_10["memindex__284 imm_readULEB32"]
	b323_4["memindex__290 0u"]
	b323_3["flags imm_readU8"]
	b323_30["val mach_readMemory64_u16"]
	b323_20["val mach_readMemory32_u16"]
	b323_25 --> b323_1
	b323_15 --> b323_25
	b323_34 --> b323_15
	b323_24 --> b323_34
	b323_32 --> b323_24
	b323_26 --> b323_32
	b323_22 --> b323_26
	b323_16 --> b323_22
	b323_10 --> b323_16
	b323_4 --> b323_10
	b323_3 --> b323_4
	b323_30 --> b323_3
	b323_20 --> b323_30
end
phi_325 --> block_323
subgraph phi_325["Phi 325"]
	p325_36{{"Sϕ Stack "}}
	p325_35{{"Sϕ Codeptr "}}
end
block_326 --> phi_325
block_327 --> phi_325
subgraph block_326["Block 326"]
	direction TB
	b326_25["offset imm_readULEB64"]
	b326_34["eff__270 push_u32"]
	b326_34 --> b326_25
end
phi_330 --> block_326
subgraph phi_330["Phi 330"]
	p330_11{"memindex ϕ"}
	p330_11{"memindex ϕ"}
	p330_11{"memindex ϕ"}
	p330_11{"memindex ϕ"}
end
block_331 --> phi_330
block_332 --> phi_330
subgraph block_331["Block 331"]
	direction TB
	b331_10["memindex__284 imm_readULEB32"]
end
branch_329 --> block_331
subgraph branch_329["Branch 329"]
	br329_9["cond__283 u8.!="]

end
branch_324 --> branch_329
subgraph branch_324["Branch 324"]
	br324_14["cond__269 m_isMemory64"]

end
block_328 --> branch_324
subgraph block_328["Block 328"]
	direction TB
	b328_14["cond__269 m_isMemory64"]
end
phi_334 --> block_328
subgraph phi_334["Phi 334"]
	p334_12{{"Sϕ Codeptr "}}
	p334_12{{"Sϕ Codeptr "}}
end
block_335 --> phi_334
block_336 --> phi_334
subgraph block_335["Block 335"]
	direction TB
	b335_10["memindex__284 imm_readULEB32"]
end
branch_333 --> block_335
subgraph branch_333["Branch 333"]
	br333_9["cond__283 u8.!="]

end
block_337 --> branch_333
subgraph block_337["Block 337"]
	direction TB
	b337_9["cond__283 u8.!="]
	b337_8["arg__285 u8.&"]
	b337_5["arg__286 0"]
	b337_6["arg__288 0x40u8"]
	b337_0[/"Start"\\]
	b337_8 --> b337_9
	b337_5 --> b337_8
	b337_6 --> b337_5
	b337_0 --> b337_6
end
subgraph block_336["Block 336"]
	direction TB
end
branch_333 --> block_336
subgraph block_332["Block 332"]
	direction TB
	b332_4["memindex__290 0u"]
end
branch_329 --> block_332
subgraph block_327["Block 327"]
	direction TB
	b327_15["offset imm_readULEB32"]
	b327_24["eff__276 push_u32"]
	b327_24 --> b327_15
end
branch_324 --> block_327

</pre>`;
window.traces.I32_LOAD16_S["unLEM"] = `<pre class='graph'>---
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
window.traces.I32_LOAD16_S["unlem_schedule"] = `<pre class=''>def flags = imm_readU8();
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
window.traces.I32_LOAD16_S["unlem_scheduler"] = `<pre class='graph'>graph TD
subgraph block_338["Block 338"]
	direction TB
	b338_1[\\"Finish"/]
	b338_25["offset imm_readULEB64"]
	b338_15["offset imm_readULEB32"]
	b338_34["eff__270 push_u32"]
	b338_24["eff__276 push_u32"]
	b338_32["extend U32_extend16_s"]
	b338_26["index pop_u64"]
	b338_22["extend U32_extend16_s"]
	b338_16["index pop_u32"]
	b338_10["memindex__284 imm_readULEB32"]
	b338_4["memindex__290 0u"]
	b338_3["flags imm_readU8"]
	b338_30["val mach_readMemory64_u16"]
	b338_20["val mach_readMemory32_u16"]
	b338_25 --> b338_1
	b338_15 --> b338_25
	b338_34 --> b338_15
	b338_24 --> b338_34
	b338_32 --> b338_24
	b338_26 --> b338_32
	b338_22 --> b338_26
	b338_16 --> b338_22
	b338_10 --> b338_16
	b338_4 --> b338_10
	b338_3 --> b338_4
	b338_30 --> b338_3
	b338_20 --> b338_30
end
phi_340 --> block_338
subgraph phi_340["Phi 340"]
	p340_36{{"Sϕ Stack "}}
	p340_35{{"Sϕ Codeptr "}}
end
block_341 --> phi_340
block_342 --> phi_340
subgraph block_341["Block 341"]
	direction TB
	b341_25["offset imm_readULEB64"]
	b341_34["eff__270 push_u32"]
	b341_34 --> b341_25
end
phi_345 --> block_341
subgraph phi_345["Phi 345"]
	p345_11{"memindex ϕ"}
	p345_11{"memindex ϕ"}
	p345_11{"memindex ϕ"}
	p345_11{"memindex ϕ"}
end
block_346 --> phi_345
block_347 --> phi_345
subgraph block_346["Block 346"]
	direction TB
	b346_10["memindex__284 imm_readULEB32"]
end
branch_344 --> block_346
subgraph branch_344["Branch 344"]
	br344_9["cond__283 u8.!="]

end
branch_339 --> branch_344
subgraph branch_339["Branch 339"]
	br339_14["cond__269 m_isMemory64"]

end
block_343 --> branch_339
subgraph block_343["Block 343"]
	direction TB
	b343_14["cond__269 m_isMemory64"]
end
phi_349 --> block_343
subgraph phi_349["Phi 349"]
	p349_12{{"Sϕ Codeptr "}}
	p349_12{{"Sϕ Codeptr "}}
end
block_350 --> phi_349
block_351 --> phi_349
subgraph block_350["Block 350"]
	direction TB
	b350_10["memindex__284 imm_readULEB32"]
end
branch_348 --> block_350
subgraph branch_348["Branch 348"]
	br348_9["cond__283 u8.!="]

end
block_352 --> branch_348
subgraph block_352["Block 352"]
	direction TB
	b352_9["cond__283 u8.!="]
	b352_8["arg__285 u8.&"]
	b352_5["arg__286 0"]
	b352_6["arg__288 0x40u8"]
	b352_0[/"Start"\\]
	b352_8 --> b352_9
	b352_5 --> b352_8
	b352_6 --> b352_5
	b352_0 --> b352_6
end
subgraph block_351["Block 351"]
	direction TB
end
branch_348 --> block_351
subgraph block_347["Block 347"]
	direction TB
	b347_4["memindex__290 0u"]
end
branch_344 --> block_347
subgraph block_342["Block 342"]
	direction TB
	b342_15["offset imm_readULEB32"]
	b342_24["eff__276 push_u32"]
	b342_24 --> b342_15
end
branch_339 --> block_342

</pre>`;
window.traces.I32_LOAD16_S["unlem_pretty"] = `<pre class=''>def flags = imm_readU8();
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
window.traces.I32_LOAD16_S["constUnLEM"] = `<pre class='graph'>---
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
window.traces.I32_LOAD16_S["chooseMerge"] = `<pre class='graph'>---
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
window.traces.I32_LOAD16_S["scheduled"] = `<pre class=''>def flags = imm_readU8();
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
window.traces.I32_LOAD16_S["pretty"] = `<pre class=''>def flags = imm_readU8();
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
window.traces["I32_LOAD16_U"] = {}
window.traces.I32_LOAD16_U["parsed"] = `<pre class=''>def flags = imm_readU8();
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
window.traces.I32_LOAD16_U["raw"] = `<pre class='graph'>---
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
window.traces.I32_LOAD16_U["overloadOps"] = `<pre class='graph'>---
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
window.traces.I32_LOAD16_U["addAbstractions"] = `<pre class='graph'>---
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
window.traces.I32_LOAD16_U["schedulerMermaid"] = `<pre class='graph'>graph TD
subgraph block_353["Block 353"]
	direction TB
	b353_1[\\"Finish"/]
	b353_23["offset imm_readULEB64"]
	b353_15["offset imm_readULEB32"]
	b353_30["eff__292 push_u32"]
	b353_22["eff__297 push_u32"]
	b353_28["val mach_readMemory64_u16"]
	b353_24["index pop_u64"]
	b353_20["val mach_readMemory32_u16"]
	b353_16["index pop_u32"]
	b353_10["memindex__304 imm_readULEB32"]
	b353_4["memindex__310 0u"]
	b353_3["flags imm_readU8"]
	b353_23 --> b353_1
	b353_15 --> b353_23
	b353_30 --> b353_15
	b353_22 --> b353_30
	b353_28 --> b353_22
	b353_24 --> b353_28
	b353_20 --> b353_24
	b353_16 --> b353_20
	b353_10 --> b353_16
	b353_4 --> b353_10
	b353_3 --> b353_4
end
phi_355 --> block_353
subgraph phi_355["Phi 355"]
	p355_32{{"Sϕ Stack "}}
	p355_31{{"Sϕ Codeptr "}}
end
block_356 --> phi_355
block_357 --> phi_355
subgraph block_356["Block 356"]
	direction TB
	b356_23["offset imm_readULEB64"]
	b356_30["eff__292 push_u32"]
	b356_30 --> b356_23
end
phi_360 --> block_356
subgraph phi_360["Phi 360"]
	p360_11{"memindex ϕ"}
	p360_11{"memindex ϕ"}
	p360_11{"memindex ϕ"}
	p360_11{"memindex ϕ"}
end
block_361 --> phi_360
block_362 --> phi_360
subgraph block_361["Block 361"]
	direction TB
	b361_10["memindex__304 imm_readULEB32"]
end
branch_359 --> block_361
subgraph branch_359["Branch 359"]
	br359_9["cond__303 u8.!="]

end
branch_354 --> branch_359
subgraph branch_354["Branch 354"]
	br354_14["cond__291 m_isMemory64"]

end
block_358 --> branch_354
subgraph block_358["Block 358"]
	direction TB
	b358_14["cond__291 m_isMemory64"]
end
phi_364 --> block_358
subgraph phi_364["Phi 364"]
	p364_12{{"Sϕ Codeptr "}}
	p364_12{{"Sϕ Codeptr "}}
	p364_12{{"Sϕ Codeptr "}}
	p364_12{{"Sϕ Codeptr "}}
end
block_365 --> phi_364
block_366 --> phi_364
subgraph block_365["Block 365"]
	direction TB
	b365_10["memindex__304 imm_readULEB32"]
end
branch_363 --> block_365
subgraph branch_363["Branch 363"]
	br363_9["cond__303 u8.!="]

end
block_367 --> branch_363
subgraph block_367["Block 367"]
	direction TB
	b367_9["cond__303 u8.!="]
	b367_8["arg__305 u8.&"]
	b367_5["arg__306 0"]
	b367_6["arg__308 0x40u8"]
	b367_0[/"Start"\\]
	b367_8 --> b367_9
	b367_5 --> b367_8
	b367_6 --> b367_5
	b367_0 --> b367_6
end
subgraph block_366["Block 366"]
	direction TB
end
branch_363 --> block_366
subgraph block_362["Block 362"]
	direction TB
	b362_4["memindex__310 0u"]
end
branch_359 --> block_362
subgraph block_357["Block 357"]
	direction TB
	b357_15["offset imm_readULEB32"]
	b357_22["eff__297 push_u32"]
	b357_22 --> b357_15
end
branch_354 --> block_357

</pre>`;
window.traces.I32_LOAD16_U["unLEM"] = `<pre class='graph'>---
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
window.traces.I32_LOAD16_U["unlem_schedule"] = `<pre class=''>def flags = imm_readU8();
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
window.traces.I32_LOAD16_U["unlem_scheduler"] = `<pre class='graph'>graph TD
subgraph block_368["Block 368"]
	direction TB
	b368_1[\\"Finish"/]
	b368_23["offset imm_readULEB64"]
	b368_15["offset imm_readULEB32"]
	b368_30["eff__292 push_u32"]
	b368_22["eff__297 push_u32"]
	b368_28["val mach_readMemory64_u16"]
	b368_24["index pop_u64"]
	b368_20["val mach_readMemory32_u16"]
	b368_16["index pop_u32"]
	b368_10["memindex__304 imm_readULEB32"]
	b368_4["memindex__310 0u"]
	b368_3["flags imm_readU8"]
	b368_23 --> b368_1
	b368_15 --> b368_23
	b368_30 --> b368_15
	b368_22 --> b368_30
	b368_28 --> b368_22
	b368_24 --> b368_28
	b368_20 --> b368_24
	b368_16 --> b368_20
	b368_10 --> b368_16
	b368_4 --> b368_10
	b368_3 --> b368_4
end
phi_370 --> block_368
subgraph phi_370["Phi 370"]
	p370_32{{"Sϕ Stack "}}
	p370_31{{"Sϕ Codeptr "}}
end
block_371 --> phi_370
block_372 --> phi_370
subgraph block_371["Block 371"]
	direction TB
	b371_23["offset imm_readULEB64"]
	b371_30["eff__292 push_u32"]
	b371_30 --> b371_23
end
phi_375 --> block_371
subgraph phi_375["Phi 375"]
	p375_11{"memindex ϕ"}
	p375_11{"memindex ϕ"}
	p375_11{"memindex ϕ"}
	p375_11{"memindex ϕ"}
end
block_376 --> phi_375
block_377 --> phi_375
subgraph block_376["Block 376"]
	direction TB
	b376_10["memindex__304 imm_readULEB32"]
end
branch_374 --> block_376
subgraph branch_374["Branch 374"]
	br374_9["cond__303 u8.!="]

end
branch_369 --> branch_374
subgraph branch_369["Branch 369"]
	br369_14["cond__291 m_isMemory64"]

end
block_373 --> branch_369
subgraph block_373["Block 373"]
	direction TB
	b373_14["cond__291 m_isMemory64"]
end
phi_379 --> block_373
subgraph phi_379["Phi 379"]
	p379_12{{"Sϕ Codeptr "}}
	p379_12{{"Sϕ Codeptr "}}
	p379_12{{"Sϕ Codeptr "}}
	p379_12{{"Sϕ Codeptr "}}
end
block_380 --> phi_379
block_381 --> phi_379
subgraph block_380["Block 380"]
	direction TB
	b380_10["memindex__304 imm_readULEB32"]
end
branch_378 --> block_380
subgraph branch_378["Branch 378"]
	br378_9["cond__303 u8.!="]

end
block_382 --> branch_378
subgraph block_382["Block 382"]
	direction TB
	b382_9["cond__303 u8.!="]
	b382_8["arg__305 u8.&"]
	b382_5["arg__306 0"]
	b382_6["arg__308 0x40u8"]
	b382_0[/"Start"\\]
	b382_8 --> b382_9
	b382_5 --> b382_8
	b382_6 --> b382_5
	b382_0 --> b382_6
end
subgraph block_381["Block 381"]
	direction TB
end
branch_378 --> block_381
subgraph block_377["Block 377"]
	direction TB
	b377_4["memindex__310 0u"]
end
branch_374 --> block_377
subgraph block_372["Block 372"]
	direction TB
	b372_15["offset imm_readULEB32"]
	b372_22["eff__297 push_u32"]
	b372_22 --> b372_15
end
branch_369 --> block_372

</pre>`;
window.traces.I32_LOAD16_U["unlem_pretty"] = `<pre class=''>def flags = imm_readU8();
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
window.traces.I32_LOAD16_U["constUnLEM"] = `<pre class='graph'>---
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
window.traces.I32_LOAD16_U["chooseMerge"] = `<pre class='graph'>---
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
window.traces.I32_LOAD16_U["scheduled"] = `<pre class=''>def flags = imm_readU8();
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
window.traces.I32_LOAD16_U["pretty"] = `<pre class=''>def flags = imm_readU8();
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
window.traces["I64_LOAD8_S"] = {}
window.traces.I64_LOAD8_S["parsed"] = `<pre class=''>def flags = imm_readU8();
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
window.traces.I64_LOAD8_S["raw"] = `<pre class='graph'>---
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
window.traces.I64_LOAD8_S["overloadOps"] = `<pre class='graph'>---
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
window.traces.I64_LOAD8_S["addAbstractions"] = `<pre class='graph'>---
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
window.traces.I64_LOAD8_S["schedulerMermaid"] = `<pre class='graph'>graph TD
subgraph block_383["Block 383"]
	direction TB
	b383_1[\\"Finish"/]
	b383_25["offset imm_readULEB64"]
	b383_15["offset imm_readULEB32"]
	b383_34["eff__312 push_u64"]
	b383_24["eff__318 push_u64"]
	b383_32["extend U64_extend8_s"]
	b383_26["index pop_u64"]
	b383_22["extend U64_extend8_s"]
	b383_16["index pop_u32"]
	b383_10["memindex__326 imm_readULEB32"]
	b383_4["memindex__332 0u"]
	b383_3["flags imm_readU8"]
	b383_30["val mach_readMemory64_u8_64"]
	b383_20["val mach_readMemory32_u8_64"]
	b383_25 --> b383_1
	b383_15 --> b383_25
	b383_34 --> b383_15
	b383_24 --> b383_34
	b383_32 --> b383_24
	b383_26 --> b383_32
	b383_22 --> b383_26
	b383_16 --> b383_22
	b383_10 --> b383_16
	b383_4 --> b383_10
	b383_3 --> b383_4
	b383_30 --> b383_3
	b383_20 --> b383_30
end
phi_385 --> block_383
subgraph phi_385["Phi 385"]
	p385_36{{"Sϕ Stack "}}
	p385_35{{"Sϕ Codeptr "}}
end
block_386 --> phi_385
block_387 --> phi_385
subgraph block_386["Block 386"]
	direction TB
	b386_25["offset imm_readULEB64"]
	b386_34["eff__312 push_u64"]
	b386_34 --> b386_25
end
phi_390 --> block_386
subgraph phi_390["Phi 390"]
	p390_11{"memindex ϕ"}
	p390_11{"memindex ϕ"}
	p390_11{"memindex ϕ"}
	p390_11{"memindex ϕ"}
end
block_391 --> phi_390
block_392 --> phi_390
subgraph block_391["Block 391"]
	direction TB
	b391_10["memindex__326 imm_readULEB32"]
end
branch_389 --> block_391
subgraph branch_389["Branch 389"]
	br389_9["cond__325 u8.!="]

end
branch_384 --> branch_389
subgraph branch_384["Branch 384"]
	br384_14["cond__311 m_isMemory64"]

end
block_388 --> branch_384
subgraph block_388["Block 388"]
	direction TB
	b388_14["cond__311 m_isMemory64"]
end
phi_394 --> block_388
subgraph phi_394["Phi 394"]
	p394_12{{"Sϕ Codeptr "}}
	p394_12{{"Sϕ Codeptr "}}
end
block_395 --> phi_394
block_396 --> phi_394
subgraph block_395["Block 395"]
	direction TB
	b395_10["memindex__326 imm_readULEB32"]
end
branch_393 --> block_395
subgraph branch_393["Branch 393"]
	br393_9["cond__325 u8.!="]

end
block_397 --> branch_393
subgraph block_397["Block 397"]
	direction TB
	b397_9["cond__325 u8.!="]
	b397_8["arg__327 u8.&"]
	b397_5["arg__328 0"]
	b397_6["arg__330 0x40u8"]
	b397_0[/"Start"\\]
	b397_8 --> b397_9
	b397_5 --> b397_8
	b397_6 --> b397_5
	b397_0 --> b397_6
end
subgraph block_396["Block 396"]
	direction TB
end
branch_393 --> block_396
subgraph block_392["Block 392"]
	direction TB
	b392_4["memindex__332 0u"]
end
branch_389 --> block_392
subgraph block_387["Block 387"]
	direction TB
	b387_15["offset imm_readULEB32"]
	b387_24["eff__318 push_u64"]
	b387_24 --> b387_15
end
branch_384 --> block_387

</pre>`;
window.traces.I64_LOAD8_S["unLEM"] = `<pre class='graph'>---
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
window.traces.I64_LOAD8_S["unlem_schedule"] = `<pre class=''>def flags = imm_readU8();
def arg__330 : byte = 0x40u8;
def arg__327 = u8.&(flags, arg__330);
def arg__328 : byte = 0;
def cond__325 = u8.!=(arg__327, arg__328);
var memindex: u32;
if (cond__325) {
	def memindex__326 = imm_readULEB32();
} else {
	def memindex__332 : u32 = 0u;
}
// phis: memindex <- memindex__326; memindex <- memindex__332; 
def cond__311 = m_isMemory64(memindex);
if (cond__311) {
	def offset = imm_readULEB64();
	def index = pop_u64();
	def val = mach_readMemory64_u8_64(memindex, index, offset);
	def extend = U64_extend8_s(val);
	def eff__312 = push_u64(extend);
} else {
	def offset = imm_readULEB32();
	def index = pop_u32();
	def val = mach_readMemory32_u8_64(memindex, index, offset);
	def extend = U64_extend8_s(val);
	def eff__318 = push_u64(extend);
}
// phis: 
</pre>`;
window.traces.I64_LOAD8_S["unlem_scheduler"] = `<pre class='graph'>graph TD
subgraph block_398["Block 398"]
	direction TB
	b398_1[\\"Finish"/]
	b398_25["offset imm_readULEB64"]
	b398_15["offset imm_readULEB32"]
	b398_34["eff__312 push_u64"]
	b398_24["eff__318 push_u64"]
	b398_32["extend U64_extend8_s"]
	b398_26["index pop_u64"]
	b398_22["extend U64_extend8_s"]
	b398_16["index pop_u32"]
	b398_10["memindex__326 imm_readULEB32"]
	b398_4["memindex__332 0u"]
	b398_3["flags imm_readU8"]
	b398_30["val mach_readMemory64_u8_64"]
	b398_20["val mach_readMemory32_u8_64"]
	b398_25 --> b398_1
	b398_15 --> b398_25
	b398_34 --> b398_15
	b398_24 --> b398_34
	b398_32 --> b398_24
	b398_26 --> b398_32
	b398_22 --> b398_26
	b398_16 --> b398_22
	b398_10 --> b398_16
	b398_4 --> b398_10
	b398_3 --> b398_4
	b398_30 --> b398_3
	b398_20 --> b398_30
end
phi_400 --> block_398
subgraph phi_400["Phi 400"]
	p400_36{{"Sϕ Stack "}}
	p400_35{{"Sϕ Codeptr "}}
end
block_401 --> phi_400
block_402 --> phi_400
subgraph block_401["Block 401"]
	direction TB
	b401_25["offset imm_readULEB64"]
	b401_34["eff__312 push_u64"]
	b401_34 --> b401_25
end
phi_405 --> block_401
subgraph phi_405["Phi 405"]
	p405_11{"memindex ϕ"}
	p405_11{"memindex ϕ"}
	p405_11{"memindex ϕ"}
	p405_11{"memindex ϕ"}
end
block_406 --> phi_405
block_407 --> phi_405
subgraph block_406["Block 406"]
	direction TB
	b406_10["memindex__326 imm_readULEB32"]
end
branch_404 --> block_406
subgraph branch_404["Branch 404"]
	br404_9["cond__325 u8.!="]

end
branch_399 --> branch_404
subgraph branch_399["Branch 399"]
	br399_14["cond__311 m_isMemory64"]

end
block_403 --> branch_399
subgraph block_403["Block 403"]
	direction TB
	b403_14["cond__311 m_isMemory64"]
end
phi_409 --> block_403
subgraph phi_409["Phi 409"]
	p409_12{{"Sϕ Codeptr "}}
	p409_12{{"Sϕ Codeptr "}}
end
block_410 --> phi_409
block_411 --> phi_409
subgraph block_410["Block 410"]
	direction TB
	b410_10["memindex__326 imm_readULEB32"]
end
branch_408 --> block_410
subgraph branch_408["Branch 408"]
	br408_9["cond__325 u8.!="]

end
block_412 --> branch_408
subgraph block_412["Block 412"]
	direction TB
	b412_9["cond__325 u8.!="]
	b412_8["arg__327 u8.&"]
	b412_5["arg__328 0"]
	b412_6["arg__330 0x40u8"]
	b412_0[/"Start"\\]
	b412_8 --> b412_9
	b412_5 --> b412_8
	b412_6 --> b412_5
	b412_0 --> b412_6
end
subgraph block_411["Block 411"]
	direction TB
end
branch_408 --> block_411
subgraph block_407["Block 407"]
	direction TB
	b407_4["memindex__332 0u"]
end
branch_404 --> block_407
subgraph block_402["Block 402"]
	direction TB
	b402_15["offset imm_readULEB32"]
	b402_24["eff__318 push_u64"]
	b402_24 --> b402_15
end
branch_399 --> block_402

</pre>`;
window.traces.I64_LOAD8_S["unlem_pretty"] = `<pre class=''>def flags = imm_readU8();
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
	def val = mach_readMemory64_u8_64(memindex, index, offset);
	def extend = U64_extend8_s(val);
	push_u64(extend);
} else {
	def offset = imm_readULEB32();
	def index = pop_u32();
	def val = mach_readMemory32_u8_64(memindex, index, offset);
	def extend = U64_extend8_s(val);
	push_u64(extend);
}
</pre>`;
window.traces.I64_LOAD8_S["constUnLEM"] = `<pre class='graph'>---
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
window.traces.I64_LOAD8_S["chooseMerge"] = `<pre class='graph'>---
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
window.traces.I64_LOAD8_S["scheduled"] = `<pre class=''>def flags = imm_readU8();
def arg__330 : byte = 0x40u8;
def arg__327 = u8.&(flags, arg__330);
def arg__328 : byte = 0;
def cond__325 = u8.!=(arg__327, arg__328);
var memindex: u32;
if (cond__325) {
	def memindex__326 = imm_readULEB32();
} else {
	def memindex__332 : u32 = 0u;
}
// phis: memindex <- memindex__326; memindex <- memindex__332; 
def cond__311 = m_isMemory64(memindex);
if (cond__311) {
	def offset = imm_readULEB64();
	def index = pop_u64();
	def val = mach_readMemory64_u8_64(memindex, index, offset);
	def extend = U64_extend8_s(val);
	def eff__312 = push_u64(extend);
} else {
	def offset = imm_readULEB32();
	def index = pop_u32();
	def val = mach_readMemory32_u8_64(memindex, index, offset);
	def extend = U64_extend8_s(val);
	def eff__318 = push_u64(extend);
}
// phis: 
</pre>`;
window.traces.I64_LOAD8_S["pretty"] = `<pre class=''>def flags = imm_readU8();
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
	def val = mach_readMemory64_u8_64(memindex, index, offset);
	def extend = U64_extend8_s(val);
	push_u64(extend);
} else {
	def offset = imm_readULEB32();
	def index = pop_u32();
	def val = mach_readMemory32_u8_64(memindex, index, offset);
	def extend = U64_extend8_s(val);
	push_u64(extend);
}
</pre>`;
window.traces["I64_LOAD8_U"] = {}
window.traces.I64_LOAD8_U["parsed"] = `<pre class=''>def flags = imm_readU8();
def memindex : u32 = 0u;
def arg__348 : byte = 0;
def arg__350 : byte = 0x40u8;
def arg__349 = (flags);
def arg__347 = u8.&(arg__349, arg__350);
def cond__345 = u8.!=(arg__347, arg__348);
if (cond__345) {
	def memindex__346 = imm_readULEB32();
}
// phis: memindex <- memindex__346; 
def arg__344 = (memindex);
def cond__333 = m_isMemory64(arg__344);
if (cond__333) {
	def offset = imm_readULEB64();
	def index = pop_u64();
	def arg__338 = (offset);
	def arg__337 = (index);
	def arg__336 = (memindex);
	def val = mach_readMemory64_u8_64(arg__336, arg__337, arg__338);
	def arg__335 = (val);
	def eff__334 = push_u64(arg__335);
} else {
	def offset = imm_readULEB32();
	def index = pop_u32();
	def arg__343 = (offset);
	def arg__342 = (index);
	def arg__341 = (memindex);
	def val = mach_readMemory32_u8_64(arg__341, arg__342, arg__343);
	def arg__340 = (val);
	def eff__339 = push_u64(arg__340);
}
// phis: 
</pre>`;
window.traces.I64_LOAD8_U["raw"] = `<pre class='graph'>---
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
	22["eff__339 push_u64"]
	20 --> 22
	16 -. Stack .-> 22
	16["index pop_u32"]
	0 -. Stack .-> 16
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
	10["memindex__346 imm_readULEB32"]
	3 -. Codeptr .-> 10
	9["cond__345 u8.!="]
	8 --> 9
	5 --> 9
	5["arg__348 0"]
	8["arg__347 u8.&"]
	3 --> 8
	6 --> 8
	6["arg__350 0x40u8"]
	11{"memindex ϕ"}
	9 --> 11
	10 --> 11
	4 --> 11
	4["memindex__351 0u"]
	30["eff__334 push_u64"]
	28 --> 30
	24 -. Stack .-> 30
	24["index pop_u64"]
	0 -. Stack .-> 24
	28["val mach_readMemory64_u8_64"]
	11 --> 28
	24 --> 28
	23 --> 28
	23["offset imm_readULEB64"]
	12 -. Codeptr .-> 23
	14["cond__333 m_isMemory64"]
	11 --> 14
	31{{"Sϕ Codeptr "}}
	14 --> 31
	23 --> 31
	15 --> 31
</pre>`;
window.traces.I64_LOAD8_U["overloadOps"] = `<pre class='graph'>---
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
	22["eff__339 push_u64"]
	20 --> 22
	16 -. Stack .-> 22
	16["index pop_u32"]
	0 -. Stack .-> 16
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
	10["memindex__346 imm_readULEB32"]
	3 -. Codeptr .-> 10
	9["cond__345 u8.!="]
	8 --> 9
	5 --> 9
	5["arg__348 0"]
	8["arg__347 u8.&"]
	3 --> 8
	6 --> 8
	6["arg__350 0x40u8"]
	11{"memindex ϕ"}
	9 --> 11
	10 --> 11
	4 --> 11
	4["memindex__352 0u"]
	30["eff__334 push_u64"]
	28 --> 30
	24 -. Stack .-> 30
	24["index pop_u64"]
	0 -. Stack .-> 24
	28["val mach_readMemory64_u8_64"]
	11 --> 28
	24 --> 28
	23 --> 28
	23["offset imm_readULEB64"]
	12 -. Codeptr .-> 23
	14["cond__333 m_isMemory64"]
	11 --> 14
	31{{"Sϕ Codeptr "}}
	14 --> 31
	23 --> 31
	15 --> 31
</pre>`;
window.traces.I64_LOAD8_U["addAbstractions"] = `<pre class='graph'>---
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
	22["eff__339 push_u64"]
	20 --> 22
	16 -. Stack .-> 22
	16["index pop_u32"]
	0 -. Stack .-> 16
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
	10["memindex__346 imm_readULEB32"]
	3 -. Codeptr .-> 10
	9["cond__345 u8.!="]
	8 --> 9
	5 --> 9
	5["arg__348 0"]
	8["arg__347 u8.&"]
	3 --> 8
	6 --> 8
	6["arg__350 0x40u8"]
	11{"memindex ϕ"}
	9 --> 11
	10 --> 11
	4 --> 11
	4["memindex__352 0u"]
	30["eff__334 push_u64"]
	28 --> 30
	24 -. Stack .-> 30
	24["index pop_u64"]
	0 -. Stack .-> 24
	28["val mach_readMemory64_u8_64"]
	11 --> 28
	24 --> 28
	23 --> 28
	23["offset imm_readULEB64"]
	12 -. Codeptr .-> 23
	14["cond__333 m_isMemory64"]
	11 --> 14
	31{{"Sϕ Codeptr "}}
	14 --> 31
	23 --> 31
	15 --> 31
</pre>`;
window.traces.I64_LOAD8_U["schedulerMermaid"] = `<pre class='graph'>graph TD
subgraph block_413["Block 413"]
	direction TB
	b413_1[\\"Finish"/]
	b413_23["offset imm_readULEB64"]
	b413_15["offset imm_readULEB32"]
	b413_30["eff__334 push_u64"]
	b413_22["eff__339 push_u64"]
	b413_28["val mach_readMemory64_u8_64"]
	b413_24["index pop_u64"]
	b413_20["val mach_readMemory32_u8_64"]
	b413_16["index pop_u32"]
	b413_10["memindex__346 imm_readULEB32"]
	b413_4["memindex__352 0u"]
	b413_3["flags imm_readU8"]
	b413_23 --> b413_1
	b413_15 --> b413_23
	b413_30 --> b413_15
	b413_22 --> b413_30
	b413_28 --> b413_22
	b413_24 --> b413_28
	b413_20 --> b413_24
	b413_16 --> b413_20
	b413_10 --> b413_16
	b413_4 --> b413_10
	b413_3 --> b413_4
end
phi_415 --> block_413
subgraph phi_415["Phi 415"]
	p415_32{{"Sϕ Stack "}}
	p415_31{{"Sϕ Codeptr "}}
end
block_416 --> phi_415
block_417 --> phi_415
subgraph block_416["Block 416"]
	direction TB
	b416_23["offset imm_readULEB64"]
	b416_30["eff__334 push_u64"]
	b416_30 --> b416_23
end
phi_420 --> block_416
subgraph phi_420["Phi 420"]
	p420_11{"memindex ϕ"}
	p420_11{"memindex ϕ"}
	p420_11{"memindex ϕ"}
	p420_11{"memindex ϕ"}
end
block_421 --> phi_420
block_422 --> phi_420
subgraph block_421["Block 421"]
	direction TB
	b421_10["memindex__346 imm_readULEB32"]
end
branch_419 --> block_421
subgraph branch_419["Branch 419"]
	br419_9["cond__345 u8.!="]

end
branch_414 --> branch_419
subgraph branch_414["Branch 414"]
	br414_14["cond__333 m_isMemory64"]

end
block_418 --> branch_414
subgraph block_418["Block 418"]
	direction TB
	b418_14["cond__333 m_isMemory64"]
end
phi_424 --> block_418
subgraph phi_424["Phi 424"]
	p424_12{{"Sϕ Codeptr "}}
	p424_12{{"Sϕ Codeptr "}}
	p424_12{{"Sϕ Codeptr "}}
	p424_12{{"Sϕ Codeptr "}}
end
block_425 --> phi_424
block_426 --> phi_424
subgraph block_425["Block 425"]
	direction TB
	b425_10["memindex__346 imm_readULEB32"]
end
branch_423 --> block_425
subgraph branch_423["Branch 423"]
	br423_9["cond__345 u8.!="]

end
block_427 --> branch_423
subgraph block_427["Block 427"]
	direction TB
	b427_9["cond__345 u8.!="]
	b427_8["arg__347 u8.&"]
	b427_5["arg__348 0"]
	b427_6["arg__350 0x40u8"]
	b427_0[/"Start"\\]
	b427_8 --> b427_9
	b427_5 --> b427_8
	b427_6 --> b427_5
	b427_0 --> b427_6
end
subgraph block_426["Block 426"]
	direction TB
end
branch_423 --> block_426
subgraph block_422["Block 422"]
	direction TB
	b422_4["memindex__352 0u"]
end
branch_419 --> block_422
subgraph block_417["Block 417"]
	direction TB
	b417_15["offset imm_readULEB32"]
	b417_22["eff__339 push_u64"]
	b417_22 --> b417_15
end
branch_414 --> block_417

</pre>`;
window.traces.I64_LOAD8_U["unLEM"] = `<pre class='graph'>---
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
	22["eff__339 push_u64"]
	20 --> 22
	16 -. Stack .-> 22
	16["index pop_u32"]
	0 -. Stack .-> 16
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
	10["memindex__346 imm_readULEB32"]
	3 -. Codeptr .-> 10
	9["cond__345 u8.!="]
	8 --> 9
	5 --> 9
	5["arg__348 0"]
	8["arg__347 u8.&"]
	3 --> 8
	6 --> 8
	6["arg__350 0x40u8"]
	11{"memindex ϕ"}
	9 --> 11
	10 --> 11
	4 --> 11
	4["memindex__352 0u"]
	30["eff__334 push_u64"]
	28 --> 30
	24 -. Stack .-> 30
	24["index pop_u64"]
	0 -. Stack .-> 24
	28["val mach_readMemory64_u8_64"]
	11 --> 28
	24 --> 28
	23 --> 28
	23["offset imm_readULEB64"]
	12 -. Codeptr .-> 23
	14["cond__333 m_isMemory64"]
	11 --> 14
	31{{"Sϕ Codeptr "}}
	14 --> 31
	23 --> 31
	15 --> 31
</pre>`;
window.traces.I64_LOAD8_U["unlem_schedule"] = `<pre class=''>def flags = imm_readU8();
def arg__350 : byte = 0x40u8;
def arg__347 = u8.&(flags, arg__350);
def arg__348 : byte = 0;
def cond__345 = u8.!=(arg__347, arg__348);
var memindex: u32;
if (cond__345) {
	def memindex__346 = imm_readULEB32();
} else {
	def memindex__352 : u32 = 0u;
}
// phis: memindex <- memindex__346; memindex <- memindex__352; 
def cond__333 = m_isMemory64(memindex);
if (cond__333) {
	def offset = imm_readULEB64();
	def index = pop_u64();
	def val = mach_readMemory64_u8_64(memindex, index, offset);
	def eff__334 = push_u64(val);
} else {
	def offset = imm_readULEB32();
	def index = pop_u32();
	def val = mach_readMemory32_u8_64(memindex, index, offset);
	def eff__339 = push_u64(val);
}
// phis: 
</pre>`;
window.traces.I64_LOAD8_U["unlem_scheduler"] = `<pre class='graph'>graph TD
subgraph block_428["Block 428"]
	direction TB
	b428_1[\\"Finish"/]
	b428_23["offset imm_readULEB64"]
	b428_15["offset imm_readULEB32"]
	b428_30["eff__334 push_u64"]
	b428_22["eff__339 push_u64"]
	b428_28["val mach_readMemory64_u8_64"]
	b428_24["index pop_u64"]
	b428_20["val mach_readMemory32_u8_64"]
	b428_16["index pop_u32"]
	b428_10["memindex__346 imm_readULEB32"]
	b428_4["memindex__352 0u"]
	b428_3["flags imm_readU8"]
	b428_23 --> b428_1
	b428_15 --> b428_23
	b428_30 --> b428_15
	b428_22 --> b428_30
	b428_28 --> b428_22
	b428_24 --> b428_28
	b428_20 --> b428_24
	b428_16 --> b428_20
	b428_10 --> b428_16
	b428_4 --> b428_10
	b428_3 --> b428_4
end
phi_430 --> block_428
subgraph phi_430["Phi 430"]
	p430_32{{"Sϕ Stack "}}
	p430_31{{"Sϕ Codeptr "}}
end
block_431 --> phi_430
block_432 --> phi_430
subgraph block_431["Block 431"]
	direction TB
	b431_23["offset imm_readULEB64"]
	b431_30["eff__334 push_u64"]
	b431_30 --> b431_23
end
phi_435 --> block_431
subgraph phi_435["Phi 435"]
	p435_11{"memindex ϕ"}
	p435_11{"memindex ϕ"}
	p435_11{"memindex ϕ"}
	p435_11{"memindex ϕ"}
end
block_436 --> phi_435
block_437 --> phi_435
subgraph block_436["Block 436"]
	direction TB
	b436_10["memindex__346 imm_readULEB32"]
end
branch_434 --> block_436
subgraph branch_434["Branch 434"]
	br434_9["cond__345 u8.!="]

end
branch_429 --> branch_434
subgraph branch_429["Branch 429"]
	br429_14["cond__333 m_isMemory64"]

end
block_433 --> branch_429
subgraph block_433["Block 433"]
	direction TB
	b433_14["cond__333 m_isMemory64"]
end
phi_439 --> block_433
subgraph phi_439["Phi 439"]
	p439_12{{"Sϕ Codeptr "}}
	p439_12{{"Sϕ Codeptr "}}
	p439_12{{"Sϕ Codeptr "}}
	p439_12{{"Sϕ Codeptr "}}
end
block_440 --> phi_439
block_441 --> phi_439
subgraph block_440["Block 440"]
	direction TB
	b440_10["memindex__346 imm_readULEB32"]
end
branch_438 --> block_440
subgraph branch_438["Branch 438"]
	br438_9["cond__345 u8.!="]

end
block_442 --> branch_438
subgraph block_442["Block 442"]
	direction TB
	b442_9["cond__345 u8.!="]
	b442_8["arg__347 u8.&"]
	b442_5["arg__348 0"]
	b442_6["arg__350 0x40u8"]
	b442_0[/"Start"\\]
	b442_8 --> b442_9
	b442_5 --> b442_8
	b442_6 --> b442_5
	b442_0 --> b442_6
end
subgraph block_441["Block 441"]
	direction TB
end
branch_438 --> block_441
subgraph block_437["Block 437"]
	direction TB
	b437_4["memindex__352 0u"]
end
branch_434 --> block_437
subgraph block_432["Block 432"]
	direction TB
	b432_15["offset imm_readULEB32"]
	b432_22["eff__339 push_u64"]
	b432_22 --> b432_15
end
branch_429 --> block_432

</pre>`;
window.traces.I64_LOAD8_U["unlem_pretty"] = `<pre class=''>def flags = imm_readU8();
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
	def val = mach_readMemory64_u8_64(memindex, index, offset);
	push_u64(val);
} else {
	def offset = imm_readULEB32();
	def index = pop_u32();
	def val = mach_readMemory32_u8_64(memindex, index, offset);
	push_u64(val);
}
</pre>`;
window.traces.I64_LOAD8_U["constUnLEM"] = `<pre class='graph'>---
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
	22["eff__339 push_u64"]
	20 --> 22
	16 -. Stack .-> 22
	16["index pop_u32"]
	0 -. Stack .-> 16
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
	10["memindex__346 imm_readULEB32"]
	3 -. Codeptr .-> 10
	9["cond__345 u8.!="]
	8 --> 9
	5 --> 9
	5["arg__348 0"]
	8["arg__347 u8.&"]
	3 --> 8
	6 --> 8
	6["arg__350 0x40u8"]
	11{"memindex ϕ"}
	9 --> 11
	10 --> 11
	4 --> 11
	4["memindex__352 0u"]
	30["eff__334 push_u64"]
	28 --> 30
	24 -. Stack .-> 30
	24["index pop_u64"]
	0 -. Stack .-> 24
	28["val mach_readMemory64_u8_64"]
	11 --> 28
	24 --> 28
	23 --> 28
	23["offset imm_readULEB64"]
	12 -. Codeptr .-> 23
	14["cond__333 m_isMemory64"]
	11 --> 14
	31{{"Sϕ Codeptr "}}
	14 --> 31
	23 --> 31
	15 --> 31
</pre>`;
window.traces.I64_LOAD8_U["chooseMerge"] = `<pre class='graph'>---
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
	22["eff__339 push_u64"]
	20 --> 22
	16 -. Stack .-> 22
	16["index pop_u32"]
	0 -. Stack .-> 16
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
	10["memindex__346 imm_readULEB32"]
	3 -. Codeptr .-> 10
	9["cond__345 u8.!="]
	8 --> 9
	5 --> 9
	5["arg__348 0"]
	8["arg__347 u8.&"]
	3 --> 8
	6 --> 8
	6["arg__350 0x40u8"]
	11{"memindex ϕ"}
	9 --> 11
	10 --> 11
	4 --> 11
	4["memindex__352 0u"]
	30["eff__334 push_u64"]
	28 --> 30
	24 -. Stack .-> 30
	24["index pop_u64"]
	0 -. Stack .-> 24
	28["val mach_readMemory64_u8_64"]
	11 --> 28
	24 --> 28
	23 --> 28
	23["offset imm_readULEB64"]
	12 -. Codeptr .-> 23
	14["cond__333 m_isMemory64"]
	11 --> 14
	31{{"Sϕ Codeptr "}}
	14 --> 31
	23 --> 31
	15 --> 31
</pre>`;
window.traces.I64_LOAD8_U["scheduled"] = `<pre class=''>def flags = imm_readU8();
def arg__350 : byte = 0x40u8;
def arg__347 = u8.&(flags, arg__350);
def arg__348 : byte = 0;
def cond__345 = u8.!=(arg__347, arg__348);
var memindex: u32;
if (cond__345) {
	def memindex__346 = imm_readULEB32();
} else {
	def memindex__352 : u32 = 0u;
}
// phis: memindex <- memindex__346; memindex <- memindex__352; 
def cond__333 = m_isMemory64(memindex);
if (cond__333) {
	def offset = imm_readULEB64();
	def index = pop_u64();
	def val = mach_readMemory64_u8_64(memindex, index, offset);
	def eff__334 = push_u64(val);
} else {
	def offset = imm_readULEB32();
	def index = pop_u32();
	def val = mach_readMemory32_u8_64(memindex, index, offset);
	def eff__339 = push_u64(val);
}
// phis: 
</pre>`;
window.traces.I64_LOAD8_U["pretty"] = `<pre class=''>def flags = imm_readU8();
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
	def val = mach_readMemory64_u8_64(memindex, index, offset);
	push_u64(val);
} else {
	def offset = imm_readULEB32();
	def index = pop_u32();
	def val = mach_readMemory32_u8_64(memindex, index, offset);
	push_u64(val);
}
</pre>`;
window.traces["I64_LOAD16_S"] = {}
window.traces.I64_LOAD16_S["parsed"] = `<pre class=''>def flags = imm_readU8();
def memindex : u32 = 0u;
def arg__370 : byte = 0;
def arg__372 : byte = 0x40u8;
def arg__371 = (flags);
def arg__369 = u8.&(arg__371, arg__372);
def cond__367 = u8.!=(arg__369, arg__370);
if (cond__367) {
	def memindex__368 = imm_readULEB32();
}
// phis: memindex <- memindex__368; 
def arg__366 = (memindex);
def cond__353 = m_isMemory64(arg__366);
if (cond__353) {
	def offset = imm_readULEB64();
	def index = pop_u64();
	def arg__359 = (offset);
	def arg__358 = (index);
	def arg__357 = (memindex);
	def val = mach_readMemory64_u16_64(arg__357, arg__358, arg__359);
	def arg__356 = (val);
	def extend = U64_extend16_s(arg__356);
	def arg__355 = (extend);
	def eff__354 = push_u64(arg__355);
} else {
	def offset = imm_readULEB32();
	def index = pop_u32();
	def arg__365 = (offset);
	def arg__364 = (index);
	def arg__363 = (memindex);
	def val = mach_readMemory32_u16_64(arg__363, arg__364, arg__365);
	def arg__362 = (val);
	def extend = U64_extend16_s(arg__362);
	def arg__361 = (extend);
	def eff__360 = push_u64(arg__361);
}
// phis: 
</pre>`;
window.traces.I64_LOAD16_S["raw"] = `<pre class='graph'>---
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
	24["eff__360 push_u64"]
	22 --> 24
	16 -. Stack .-> 24
	16["index pop_u32"]
	0 -. Stack .-> 16
	22["extend U64_extend16_s"]
	20 --> 22
	20["val mach_readMemory32_u16_64"]
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
	10["memindex__368 imm_readULEB32"]
	3 -. Codeptr .-> 10
	9["cond__367 u8.!="]
	8 --> 9
	5 --> 9
	5["arg__370 0"]
	8["arg__369 u8.&"]
	3 --> 8
	6 --> 8
	6["arg__372 0x40u8"]
	11{"memindex ϕ"}
	9 --> 11
	10 --> 11
	4 --> 11
	4["memindex__373 0u"]
	34["eff__354 push_u64"]
	32 --> 34
	26 -. Stack .-> 34
	26["index pop_u64"]
	0 -. Stack .-> 26
	32["extend U64_extend16_s"]
	30 --> 32
	30["val mach_readMemory64_u16_64"]
	11 --> 30
	26 --> 30
	25 --> 30
	25["offset imm_readULEB64"]
	12 -. Codeptr .-> 25
	14["cond__353 m_isMemory64"]
	11 --> 14
	35{{"Sϕ Codeptr "}}
	14 --> 35
	25 --> 35
	15 --> 35
</pre>`;
window.traces.I64_LOAD16_S["overloadOps"] = `<pre class='graph'>---
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
	24["eff__360 push_u64"]
	22 --> 24
	16 -. Stack .-> 24
	16["index pop_u32"]
	0 -. Stack .-> 16
	22["extend U64_extend16_s"]
	20 --> 22
	20["val mach_readMemory32_u16_64"]
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
	10["memindex__368 imm_readULEB32"]
	3 -. Codeptr .-> 10
	9["cond__367 u8.!="]
	8 --> 9
	5 --> 9
	5["arg__370 0"]
	8["arg__369 u8.&"]
	3 --> 8
	6 --> 8
	6["arg__372 0x40u8"]
	11{"memindex ϕ"}
	9 --> 11
	10 --> 11
	4 --> 11
	4["memindex__374 0u"]
	34["eff__354 push_u64"]
	32 --> 34
	26 -. Stack .-> 34
	26["index pop_u64"]
	0 -. Stack .-> 26
	32["extend U64_extend16_s"]
	30 --> 32
	30["val mach_readMemory64_u16_64"]
	11 --> 30
	26 --> 30
	25 --> 30
	25["offset imm_readULEB64"]
	12 -. Codeptr .-> 25
	14["cond__353 m_isMemory64"]
	11 --> 14
	35{{"Sϕ Codeptr "}}
	14 --> 35
	25 --> 35
	15 --> 35
</pre>`;
window.traces.I64_LOAD16_S["addAbstractions"] = `<pre class='graph'>---
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
	24["eff__360 push_u64"]
	22 --> 24
	16 -. Stack .-> 24
	16["index pop_u32"]
	0 -. Stack .-> 16
	22["extend U64_extend16_s"]
	20 --> 22
	20["val mach_readMemory32_u16_64"]
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
	10["memindex__368 imm_readULEB32"]
	3 -. Codeptr .-> 10
	9["cond__367 u8.!="]
	8 --> 9
	5 --> 9
	5["arg__370 0"]
	8["arg__369 u8.&"]
	3 --> 8
	6 --> 8
	6["arg__372 0x40u8"]
	11{"memindex ϕ"}
	9 --> 11
	10 --> 11
	4 --> 11
	4["memindex__374 0u"]
	34["eff__354 push_u64"]
	32 --> 34
	26 -. Stack .-> 34
	26["index pop_u64"]
	0 -. Stack .-> 26
	32["extend U64_extend16_s"]
	30 --> 32
	30["val mach_readMemory64_u16_64"]
	11 --> 30
	26 --> 30
	25 --> 30
	25["offset imm_readULEB64"]
	12 -. Codeptr .-> 25
	14["cond__353 m_isMemory64"]
	11 --> 14
	35{{"Sϕ Codeptr "}}
	14 --> 35
	25 --> 35
	15 --> 35
</pre>`;
window.traces.I64_LOAD16_S["schedulerMermaid"] = `<pre class='graph'>graph TD
subgraph block_443["Block 443"]
	direction TB
	b443_1[\\"Finish"/]
	b443_25["offset imm_readULEB64"]
	b443_15["offset imm_readULEB32"]
	b443_34["eff__354 push_u64"]
	b443_24["eff__360 push_u64"]
	b443_32["extend U64_extend16_s"]
	b443_26["index pop_u64"]
	b443_22["extend U64_extend16_s"]
	b443_16["index pop_u32"]
	b443_10["memindex__368 imm_readULEB32"]
	b443_4["memindex__374 0u"]
	b443_3["flags imm_readU8"]
	b443_30["val mach_readMemory64_u16_64"]
	b443_20["val mach_readMemory32_u16_64"]
	b443_25 --> b443_1
	b443_15 --> b443_25
	b443_34 --> b443_15
	b443_24 --> b443_34
	b443_32 --> b443_24
	b443_26 --> b443_32
	b443_22 --> b443_26
	b443_16 --> b443_22
	b443_10 --> b443_16
	b443_4 --> b443_10
	b443_3 --> b443_4
	b443_30 --> b443_3
	b443_20 --> b443_30
end
phi_445 --> block_443
subgraph phi_445["Phi 445"]
	p445_36{{"Sϕ Stack "}}
	p445_35{{"Sϕ Codeptr "}}
end
block_446 --> phi_445
block_447 --> phi_445
subgraph block_446["Block 446"]
	direction TB
	b446_25["offset imm_readULEB64"]
	b446_34["eff__354 push_u64"]
	b446_34 --> b446_25
end
phi_450 --> block_446
subgraph phi_450["Phi 450"]
	p450_11{"memindex ϕ"}
	p450_11{"memindex ϕ"}
	p450_11{"memindex ϕ"}
	p450_11{"memindex ϕ"}
end
block_451 --> phi_450
block_452 --> phi_450
subgraph block_451["Block 451"]
	direction TB
	b451_10["memindex__368 imm_readULEB32"]
end
branch_449 --> block_451
subgraph branch_449["Branch 449"]
	br449_9["cond__367 u8.!="]

end
branch_444 --> branch_449
subgraph branch_444["Branch 444"]
	br444_14["cond__353 m_isMemory64"]

end
block_448 --> branch_444
subgraph block_448["Block 448"]
	direction TB
	b448_14["cond__353 m_isMemory64"]
end
phi_454 --> block_448
subgraph phi_454["Phi 454"]
	p454_12{{"Sϕ Codeptr "}}
	p454_12{{"Sϕ Codeptr "}}
end
block_455 --> phi_454
block_456 --> phi_454
subgraph block_455["Block 455"]
	direction TB
	b455_10["memindex__368 imm_readULEB32"]
end
branch_453 --> block_455
subgraph branch_453["Branch 453"]
	br453_9["cond__367 u8.!="]

end
block_457 --> branch_453
subgraph block_457["Block 457"]
	direction TB
	b457_9["cond__367 u8.!="]
	b457_8["arg__369 u8.&"]
	b457_5["arg__370 0"]
	b457_6["arg__372 0x40u8"]
	b457_0[/"Start"\\]
	b457_8 --> b457_9
	b457_5 --> b457_8
	b457_6 --> b457_5
	b457_0 --> b457_6
end
subgraph block_456["Block 456"]
	direction TB
end
branch_453 --> block_456
subgraph block_452["Block 452"]
	direction TB
	b452_4["memindex__374 0u"]
end
branch_449 --> block_452
subgraph block_447["Block 447"]
	direction TB
	b447_15["offset imm_readULEB32"]
	b447_24["eff__360 push_u64"]
	b447_24 --> b447_15
end
branch_444 --> block_447

</pre>`;
window.traces.I64_LOAD16_S["unLEM"] = `<pre class='graph'>---
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
	24["eff__360 push_u64"]
	22 --> 24
	16 -. Stack .-> 24
	16["index pop_u32"]
	0 -. Stack .-> 16
	22["extend U64_extend16_s"]
	20 --> 22
	20["val mach_readMemory32_u16_64"]
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
	10["memindex__368 imm_readULEB32"]
	3 -. Codeptr .-> 10
	9["cond__367 u8.!="]
	8 --> 9
	5 --> 9
	5["arg__370 0"]
	8["arg__369 u8.&"]
	3 --> 8
	6 --> 8
	6["arg__372 0x40u8"]
	11{"memindex ϕ"}
	9 --> 11
	10 --> 11
	4 --> 11
	4["memindex__374 0u"]
	34["eff__354 push_u64"]
	32 --> 34
	26 -. Stack .-> 34
	26["index pop_u64"]
	0 -. Stack .-> 26
	32["extend U64_extend16_s"]
	30 --> 32
	30["val mach_readMemory64_u16_64"]
	11 --> 30
	26 --> 30
	25 --> 30
	25["offset imm_readULEB64"]
	12 -. Codeptr .-> 25
	14["cond__353 m_isMemory64"]
	11 --> 14
	35{{"Sϕ Codeptr "}}
	14 --> 35
	25 --> 35
	15 --> 35
</pre>`;
window.traces.I64_LOAD16_S["unlem_schedule"] = `<pre class=''>def flags = imm_readU8();
def arg__372 : byte = 0x40u8;
def arg__369 = u8.&(flags, arg__372);
def arg__370 : byte = 0;
def cond__367 = u8.!=(arg__369, arg__370);
var memindex: u32;
if (cond__367) {
	def memindex__368 = imm_readULEB32();
} else {
	def memindex__374 : u32 = 0u;
}
// phis: memindex <- memindex__368; memindex <- memindex__374; 
def cond__353 = m_isMemory64(memindex);
if (cond__353) {
	def offset = imm_readULEB64();
	def index = pop_u64();
	def val = mach_readMemory64_u16_64(memindex, index, offset);
	def extend = U64_extend16_s(val);
	def eff__354 = push_u64(extend);
} else {
	def offset = imm_readULEB32();
	def index = pop_u32();
	def val = mach_readMemory32_u16_64(memindex, index, offset);
	def extend = U64_extend16_s(val);
	def eff__360 = push_u64(extend);
}
// phis: 
</pre>`;
window.traces.I64_LOAD16_S["unlem_scheduler"] = `<pre class='graph'>graph TD
subgraph block_458["Block 458"]
	direction TB
	b458_1[\\"Finish"/]
	b458_25["offset imm_readULEB64"]
	b458_15["offset imm_readULEB32"]
	b458_34["eff__354 push_u64"]
	b458_24["eff__360 push_u64"]
	b458_32["extend U64_extend16_s"]
	b458_26["index pop_u64"]
	b458_22["extend U64_extend16_s"]
	b458_16["index pop_u32"]
	b458_10["memindex__368 imm_readULEB32"]
	b458_4["memindex__374 0u"]
	b458_3["flags imm_readU8"]
	b458_30["val mach_readMemory64_u16_64"]
	b458_20["val mach_readMemory32_u16_64"]
	b458_25 --> b458_1
	b458_15 --> b458_25
	b458_34 --> b458_15
	b458_24 --> b458_34
	b458_32 --> b458_24
	b458_26 --> b458_32
	b458_22 --> b458_26
	b458_16 --> b458_22
	b458_10 --> b458_16
	b458_4 --> b458_10
	b458_3 --> b458_4
	b458_30 --> b458_3
	b458_20 --> b458_30
end
phi_460 --> block_458
subgraph phi_460["Phi 460"]
	p460_36{{"Sϕ Stack "}}
	p460_35{{"Sϕ Codeptr "}}
end
block_461 --> phi_460
block_462 --> phi_460
subgraph block_461["Block 461"]
	direction TB
	b461_25["offset imm_readULEB64"]
	b461_34["eff__354 push_u64"]
	b461_34 --> b461_25
end
phi_465 --> block_461
subgraph phi_465["Phi 465"]
	p465_11{"memindex ϕ"}
	p465_11{"memindex ϕ"}
	p465_11{"memindex ϕ"}
	p465_11{"memindex ϕ"}
end
block_466 --> phi_465
block_467 --> phi_465
subgraph block_466["Block 466"]
	direction TB
	b466_10["memindex__368 imm_readULEB32"]
end
branch_464 --> block_466
subgraph branch_464["Branch 464"]
	br464_9["cond__367 u8.!="]

end
branch_459 --> branch_464
subgraph branch_459["Branch 459"]
	br459_14["cond__353 m_isMemory64"]

end
block_463 --> branch_459
subgraph block_463["Block 463"]
	direction TB
	b463_14["cond__353 m_isMemory64"]
end
phi_469 --> block_463
subgraph phi_469["Phi 469"]
	p469_12{{"Sϕ Codeptr "}}
	p469_12{{"Sϕ Codeptr "}}
end
block_470 --> phi_469
block_471 --> phi_469
subgraph block_470["Block 470"]
	direction TB
	b470_10["memindex__368 imm_readULEB32"]
end
branch_468 --> block_470
subgraph branch_468["Branch 468"]
	br468_9["cond__367 u8.!="]

end
block_472 --> branch_468
subgraph block_472["Block 472"]
	direction TB
	b472_9["cond__367 u8.!="]
	b472_8["arg__369 u8.&"]
	b472_5["arg__370 0"]
	b472_6["arg__372 0x40u8"]
	b472_0[/"Start"\\]
	b472_8 --> b472_9
	b472_5 --> b472_8
	b472_6 --> b472_5
	b472_0 --> b472_6
end
subgraph block_471["Block 471"]
	direction TB
end
branch_468 --> block_471
subgraph block_467["Block 467"]
	direction TB
	b467_4["memindex__374 0u"]
end
branch_464 --> block_467
subgraph block_462["Block 462"]
	direction TB
	b462_15["offset imm_readULEB32"]
	b462_24["eff__360 push_u64"]
	b462_24 --> b462_15
end
branch_459 --> block_462

</pre>`;
window.traces.I64_LOAD16_S["unlem_pretty"] = `<pre class=''>def flags = imm_readU8();
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
	def val = mach_readMemory64_u16_64(memindex, index, offset);
	def extend = U64_extend16_s(val);
	push_u64(extend);
} else {
	def offset = imm_readULEB32();
	def index = pop_u32();
	def val = mach_readMemory32_u16_64(memindex, index, offset);
	def extend = U64_extend16_s(val);
	push_u64(extend);
}
</pre>`;
window.traces.I64_LOAD16_S["constUnLEM"] = `<pre class='graph'>---
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
	24["eff__360 push_u64"]
	22 --> 24
	16 -. Stack .-> 24
	16["index pop_u32"]
	0 -. Stack .-> 16
	22["extend U64_extend16_s"]
	20 --> 22
	20["val mach_readMemory32_u16_64"]
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
	10["memindex__368 imm_readULEB32"]
	3 -. Codeptr .-> 10
	9["cond__367 u8.!="]
	8 --> 9
	5 --> 9
	5["arg__370 0"]
	8["arg__369 u8.&"]
	3 --> 8
	6 --> 8
	6["arg__372 0x40u8"]
	11{"memindex ϕ"}
	9 --> 11
	10 --> 11
	4 --> 11
	4["memindex__374 0u"]
	34["eff__354 push_u64"]
	32 --> 34
	26 -. Stack .-> 34
	26["index pop_u64"]
	0 -. Stack .-> 26
	32["extend U64_extend16_s"]
	30 --> 32
	30["val mach_readMemory64_u16_64"]
	11 --> 30
	26 --> 30
	25 --> 30
	25["offset imm_readULEB64"]
	12 -. Codeptr .-> 25
	14["cond__353 m_isMemory64"]
	11 --> 14
	35{{"Sϕ Codeptr "}}
	14 --> 35
	25 --> 35
	15 --> 35
</pre>`;
window.traces.I64_LOAD16_S["chooseMerge"] = `<pre class='graph'>---
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
	24["eff__360 push_u64"]
	22 --> 24
	16 -. Stack .-> 24
	16["index pop_u32"]
	0 -. Stack .-> 16
	22["extend U64_extend16_s"]
	20 --> 22
	20["val mach_readMemory32_u16_64"]
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
	10["memindex__368 imm_readULEB32"]
	3 -. Codeptr .-> 10
	9["cond__367 u8.!="]
	8 --> 9
	5 --> 9
	5["arg__370 0"]
	8["arg__369 u8.&"]
	3 --> 8
	6 --> 8
	6["arg__372 0x40u8"]
	11{"memindex ϕ"}
	9 --> 11
	10 --> 11
	4 --> 11
	4["memindex__374 0u"]
	34["eff__354 push_u64"]
	32 --> 34
	26 -. Stack .-> 34
	26["index pop_u64"]
	0 -. Stack .-> 26
	32["extend U64_extend16_s"]
	30 --> 32
	30["val mach_readMemory64_u16_64"]
	11 --> 30
	26 --> 30
	25 --> 30
	25["offset imm_readULEB64"]
	12 -. Codeptr .-> 25
	14["cond__353 m_isMemory64"]
	11 --> 14
	35{{"Sϕ Codeptr "}}
	14 --> 35
	25 --> 35
	15 --> 35
</pre>`;
window.traces.I64_LOAD16_S["scheduled"] = `<pre class=''>def flags = imm_readU8();
def arg__372 : byte = 0x40u8;
def arg__369 = u8.&(flags, arg__372);
def arg__370 : byte = 0;
def cond__367 = u8.!=(arg__369, arg__370);
var memindex: u32;
if (cond__367) {
	def memindex__368 = imm_readULEB32();
} else {
	def memindex__374 : u32 = 0u;
}
// phis: memindex <- memindex__368; memindex <- memindex__374; 
def cond__353 = m_isMemory64(memindex);
if (cond__353) {
	def offset = imm_readULEB64();
	def index = pop_u64();
	def val = mach_readMemory64_u16_64(memindex, index, offset);
	def extend = U64_extend16_s(val);
	def eff__354 = push_u64(extend);
} else {
	def offset = imm_readULEB32();
	def index = pop_u32();
	def val = mach_readMemory32_u16_64(memindex, index, offset);
	def extend = U64_extend16_s(val);
	def eff__360 = push_u64(extend);
}
// phis: 
</pre>`;
window.traces.I64_LOAD16_S["pretty"] = `<pre class=''>def flags = imm_readU8();
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
	def val = mach_readMemory64_u16_64(memindex, index, offset);
	def extend = U64_extend16_s(val);
	push_u64(extend);
} else {
	def offset = imm_readULEB32();
	def index = pop_u32();
	def val = mach_readMemory32_u16_64(memindex, index, offset);
	def extend = U64_extend16_s(val);
	push_u64(extend);
}
</pre>`;
window.traces["I64_LOAD16_U"] = {}
window.traces.I64_LOAD16_U["parsed"] = `<pre class=''>def flags = imm_readU8();
def memindex : u32 = 0u;
def arg__390 : byte = 0;
def arg__392 : byte = 0x40u8;
def arg__391 = (flags);
def arg__389 = u8.&(arg__391, arg__392);
def cond__387 = u8.!=(arg__389, arg__390);
if (cond__387) {
	def memindex__388 = imm_readULEB32();
}
// phis: memindex <- memindex__388; 
def arg__386 = (memindex);
def cond__375 = m_isMemory64(arg__386);
if (cond__375) {
	def offset = imm_readULEB64();
	def index = pop_u64();
	def arg__380 = (offset);
	def arg__379 = (index);
	def arg__378 = (memindex);
	def val = mach_readMemory64_u16_64(arg__378, arg__379, arg__380);
	def arg__377 = (val);
	def eff__376 = push_u64(arg__377);
} else {
	def offset = imm_readULEB32();
	def index = pop_u32();
	def arg__385 = (offset);
	def arg__384 = (index);
	def arg__383 = (memindex);
	def val = mach_readMemory32_u16_64(arg__383, arg__384, arg__385);
	def arg__382 = (val);
	def eff__381 = push_u64(arg__382);
}
// phis: 
</pre>`;
window.traces.I64_LOAD16_U["raw"] = `<pre class='graph'>---
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
	22["eff__381 push_u64"]
	20 --> 22
	16 -. Stack .-> 22
	16["index pop_u32"]
	0 -. Stack .-> 16
	20["val mach_readMemory32_u16_64"]
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
	10["memindex__388 imm_readULEB32"]
	3 -. Codeptr .-> 10
	9["cond__387 u8.!="]
	8 --> 9
	5 --> 9
	5["arg__390 0"]
	8["arg__389 u8.&"]
	3 --> 8
	6 --> 8
	6["arg__392 0x40u8"]
	11{"memindex ϕ"}
	9 --> 11
	10 --> 11
	4 --> 11
	4["memindex__393 0u"]
	30["eff__376 push_u64"]
	28 --> 30
	24 -. Stack .-> 30
	24["index pop_u64"]
	0 -. Stack .-> 24
	28["val mach_readMemory64_u16_64"]
	11 --> 28
	24 --> 28
	23 --> 28
	23["offset imm_readULEB64"]
	12 -. Codeptr .-> 23
	14["cond__375 m_isMemory64"]
	11 --> 14
	31{{"Sϕ Codeptr "}}
	14 --> 31
	23 --> 31
	15 --> 31
</pre>`;
window.traces.I64_LOAD16_U["overloadOps"] = `<pre class='graph'>---
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
	22["eff__381 push_u64"]
	20 --> 22
	16 -. Stack .-> 22
	16["index pop_u32"]
	0 -. Stack .-> 16
	20["val mach_readMemory32_u16_64"]
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
	10["memindex__388 imm_readULEB32"]
	3 -. Codeptr .-> 10
	9["cond__387 u8.!="]
	8 --> 9
	5 --> 9
	5["arg__390 0"]
	8["arg__389 u8.&"]
	3 --> 8
	6 --> 8
	6["arg__392 0x40u8"]
	11{"memindex ϕ"}
	9 --> 11
	10 --> 11
	4 --> 11
	4["memindex__394 0u"]
	30["eff__376 push_u64"]
	28 --> 30
	24 -. Stack .-> 30
	24["index pop_u64"]
	0 -. Stack .-> 24
	28["val mach_readMemory64_u16_64"]
	11 --> 28
	24 --> 28
	23 --> 28
	23["offset imm_readULEB64"]
	12 -. Codeptr .-> 23
	14["cond__375 m_isMemory64"]
	11 --> 14
	31{{"Sϕ Codeptr "}}
	14 --> 31
	23 --> 31
	15 --> 31
</pre>`;
window.traces.I64_LOAD16_U["addAbstractions"] = `<pre class='graph'>---
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
	22["eff__381 push_u64"]
	20 --> 22
	16 -. Stack .-> 22
	16["index pop_u32"]
	0 -. Stack .-> 16
	20["val mach_readMemory32_u16_64"]
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
	10["memindex__388 imm_readULEB32"]
	3 -. Codeptr .-> 10
	9["cond__387 u8.!="]
	8 --> 9
	5 --> 9
	5["arg__390 0"]
	8["arg__389 u8.&"]
	3 --> 8
	6 --> 8
	6["arg__392 0x40u8"]
	11{"memindex ϕ"}
	9 --> 11
	10 --> 11
	4 --> 11
	4["memindex__394 0u"]
	30["eff__376 push_u64"]
	28 --> 30
	24 -. Stack .-> 30
	24["index pop_u64"]
	0 -. Stack .-> 24
	28["val mach_readMemory64_u16_64"]
	11 --> 28
	24 --> 28
	23 --> 28
	23["offset imm_readULEB64"]
	12 -. Codeptr .-> 23
	14["cond__375 m_isMemory64"]
	11 --> 14
	31{{"Sϕ Codeptr "}}
	14 --> 31
	23 --> 31
	15 --> 31
</pre>`;
window.traces.I64_LOAD16_U["schedulerMermaid"] = `<pre class='graph'>graph TD
subgraph block_473["Block 473"]
	direction TB
	b473_1[\\"Finish"/]
	b473_23["offset imm_readULEB64"]
	b473_15["offset imm_readULEB32"]
	b473_30["eff__376 push_u64"]
	b473_22["eff__381 push_u64"]
	b473_28["val mach_readMemory64_u16_64"]
	b473_24["index pop_u64"]
	b473_20["val mach_readMemory32_u16_64"]
	b473_16["index pop_u32"]
	b473_10["memindex__388 imm_readULEB32"]
	b473_4["memindex__394 0u"]
	b473_3["flags imm_readU8"]
	b473_23 --> b473_1
	b473_15 --> b473_23
	b473_30 --> b473_15
	b473_22 --> b473_30
	b473_28 --> b473_22
	b473_24 --> b473_28
	b473_20 --> b473_24
	b473_16 --> b473_20
	b473_10 --> b473_16
	b473_4 --> b473_10
	b473_3 --> b473_4
end
phi_475 --> block_473
subgraph phi_475["Phi 475"]
	p475_32{{"Sϕ Stack "}}
	p475_31{{"Sϕ Codeptr "}}
end
block_476 --> phi_475
block_477 --> phi_475
subgraph block_476["Block 476"]
	direction TB
	b476_23["offset imm_readULEB64"]
	b476_30["eff__376 push_u64"]
	b476_30 --> b476_23
end
phi_480 --> block_476
subgraph phi_480["Phi 480"]
	p480_11{"memindex ϕ"}
	p480_11{"memindex ϕ"}
	p480_11{"memindex ϕ"}
	p480_11{"memindex ϕ"}
end
block_481 --> phi_480
block_482 --> phi_480
subgraph block_481["Block 481"]
	direction TB
	b481_10["memindex__388 imm_readULEB32"]
end
branch_479 --> block_481
subgraph branch_479["Branch 479"]
	br479_9["cond__387 u8.!="]

end
branch_474 --> branch_479
subgraph branch_474["Branch 474"]
	br474_14["cond__375 m_isMemory64"]

end
block_478 --> branch_474
subgraph block_478["Block 478"]
	direction TB
	b478_14["cond__375 m_isMemory64"]
end
phi_484 --> block_478
subgraph phi_484["Phi 484"]
	p484_12{{"Sϕ Codeptr "}}
	p484_12{{"Sϕ Codeptr "}}
	p484_12{{"Sϕ Codeptr "}}
	p484_12{{"Sϕ Codeptr "}}
end
block_485 --> phi_484
block_486 --> phi_484
subgraph block_485["Block 485"]
	direction TB
	b485_10["memindex__388 imm_readULEB32"]
end
branch_483 --> block_485
subgraph branch_483["Branch 483"]
	br483_9["cond__387 u8.!="]

end
block_487 --> branch_483
subgraph block_487["Block 487"]
	direction TB
	b487_9["cond__387 u8.!="]
	b487_8["arg__389 u8.&"]
	b487_5["arg__390 0"]
	b487_6["arg__392 0x40u8"]
	b487_0[/"Start"\\]
	b487_8 --> b487_9
	b487_5 --> b487_8
	b487_6 --> b487_5
	b487_0 --> b487_6
end
subgraph block_486["Block 486"]
	direction TB
end
branch_483 --> block_486
subgraph block_482["Block 482"]
	direction TB
	b482_4["memindex__394 0u"]
end
branch_479 --> block_482
subgraph block_477["Block 477"]
	direction TB
	b477_15["offset imm_readULEB32"]
	b477_22["eff__381 push_u64"]
	b477_22 --> b477_15
end
branch_474 --> block_477

</pre>`;
window.traces.I64_LOAD16_U["unLEM"] = `<pre class='graph'>---
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
	22["eff__381 push_u64"]
	20 --> 22
	16 -. Stack .-> 22
	16["index pop_u32"]
	0 -. Stack .-> 16
	20["val mach_readMemory32_u16_64"]
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
	10["memindex__388 imm_readULEB32"]
	3 -. Codeptr .-> 10
	9["cond__387 u8.!="]
	8 --> 9
	5 --> 9
	5["arg__390 0"]
	8["arg__389 u8.&"]
	3 --> 8
	6 --> 8
	6["arg__392 0x40u8"]
	11{"memindex ϕ"}
	9 --> 11
	10 --> 11
	4 --> 11
	4["memindex__394 0u"]
	30["eff__376 push_u64"]
	28 --> 30
	24 -. Stack .-> 30
	24["index pop_u64"]
	0 -. Stack .-> 24
	28["val mach_readMemory64_u16_64"]
	11 --> 28
	24 --> 28
	23 --> 28
	23["offset imm_readULEB64"]
	12 -. Codeptr .-> 23
	14["cond__375 m_isMemory64"]
	11 --> 14
	31{{"Sϕ Codeptr "}}
	14 --> 31
	23 --> 31
	15 --> 31
</pre>`;
window.traces.I64_LOAD16_U["unlem_schedule"] = `<pre class=''>def flags = imm_readU8();
def arg__392 : byte = 0x40u8;
def arg__389 = u8.&(flags, arg__392);
def arg__390 : byte = 0;
def cond__387 = u8.!=(arg__389, arg__390);
var memindex: u32;
if (cond__387) {
	def memindex__388 = imm_readULEB32();
} else {
	def memindex__394 : u32 = 0u;
}
// phis: memindex <- memindex__388; memindex <- memindex__394; 
def cond__375 = m_isMemory64(memindex);
if (cond__375) {
	def offset = imm_readULEB64();
	def index = pop_u64();
	def val = mach_readMemory64_u16_64(memindex, index, offset);
	def eff__376 = push_u64(val);
} else {
	def offset = imm_readULEB32();
	def index = pop_u32();
	def val = mach_readMemory32_u16_64(memindex, index, offset);
	def eff__381 = push_u64(val);
}
// phis: 
</pre>`;
window.traces.I64_LOAD16_U["unlem_scheduler"] = `<pre class='graph'>graph TD
subgraph block_488["Block 488"]
	direction TB
	b488_1[\\"Finish"/]
	b488_23["offset imm_readULEB64"]
	b488_15["offset imm_readULEB32"]
	b488_30["eff__376 push_u64"]
	b488_22["eff__381 push_u64"]
	b488_28["val mach_readMemory64_u16_64"]
	b488_24["index pop_u64"]
	b488_20["val mach_readMemory32_u16_64"]
	b488_16["index pop_u32"]
	b488_10["memindex__388 imm_readULEB32"]
	b488_4["memindex__394 0u"]
	b488_3["flags imm_readU8"]
	b488_23 --> b488_1
	b488_15 --> b488_23
	b488_30 --> b488_15
	b488_22 --> b488_30
	b488_28 --> b488_22
	b488_24 --> b488_28
	b488_20 --> b488_24
	b488_16 --> b488_20
	b488_10 --> b488_16
	b488_4 --> b488_10
	b488_3 --> b488_4
end
phi_490 --> block_488
subgraph phi_490["Phi 490"]
	p490_32{{"Sϕ Stack "}}
	p490_31{{"Sϕ Codeptr "}}
end
block_491 --> phi_490
block_492 --> phi_490
subgraph block_491["Block 491"]
	direction TB
	b491_23["offset imm_readULEB64"]
	b491_30["eff__376 push_u64"]
	b491_30 --> b491_23
end
phi_495 --> block_491
subgraph phi_495["Phi 495"]
	p495_11{"memindex ϕ"}
	p495_11{"memindex ϕ"}
	p495_11{"memindex ϕ"}
	p495_11{"memindex ϕ"}
end
block_496 --> phi_495
block_497 --> phi_495
subgraph block_496["Block 496"]
	direction TB
	b496_10["memindex__388 imm_readULEB32"]
end
branch_494 --> block_496
subgraph branch_494["Branch 494"]
	br494_9["cond__387 u8.!="]

end
branch_489 --> branch_494
subgraph branch_489["Branch 489"]
	br489_14["cond__375 m_isMemory64"]

end
block_493 --> branch_489
subgraph block_493["Block 493"]
	direction TB
	b493_14["cond__375 m_isMemory64"]
end
phi_499 --> block_493
subgraph phi_499["Phi 499"]
	p499_12{{"Sϕ Codeptr "}}
	p499_12{{"Sϕ Codeptr "}}
	p499_12{{"Sϕ Codeptr "}}
	p499_12{{"Sϕ Codeptr "}}
end
block_500 --> phi_499
block_501 --> phi_499
subgraph block_500["Block 500"]
	direction TB
	b500_10["memindex__388 imm_readULEB32"]
end
branch_498 --> block_500
subgraph branch_498["Branch 498"]
	br498_9["cond__387 u8.!="]

end
block_502 --> branch_498
subgraph block_502["Block 502"]
	direction TB
	b502_9["cond__387 u8.!="]
	b502_8["arg__389 u8.&"]
	b502_5["arg__390 0"]
	b502_6["arg__392 0x40u8"]
	b502_0[/"Start"\\]
	b502_8 --> b502_9
	b502_5 --> b502_8
	b502_6 --> b502_5
	b502_0 --> b502_6
end
subgraph block_501["Block 501"]
	direction TB
end
branch_498 --> block_501
subgraph block_497["Block 497"]
	direction TB
	b497_4["memindex__394 0u"]
end
branch_494 --> block_497
subgraph block_492["Block 492"]
	direction TB
	b492_15["offset imm_readULEB32"]
	b492_22["eff__381 push_u64"]
	b492_22 --> b492_15
end
branch_489 --> block_492

</pre>`;
window.traces.I64_LOAD16_U["unlem_pretty"] = `<pre class=''>def flags = imm_readU8();
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
	def val = mach_readMemory64_u16_64(memindex, index, offset);
	push_u64(val);
} else {
	def offset = imm_readULEB32();
	def index = pop_u32();
	def val = mach_readMemory32_u16_64(memindex, index, offset);
	push_u64(val);
}
</pre>`;
window.traces.I64_LOAD16_U["constUnLEM"] = `<pre class='graph'>---
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
	22["eff__381 push_u64"]
	20 --> 22
	16 -. Stack .-> 22
	16["index pop_u32"]
	0 -. Stack .-> 16
	20["val mach_readMemory32_u16_64"]
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
	10["memindex__388 imm_readULEB32"]
	3 -. Codeptr .-> 10
	9["cond__387 u8.!="]
	8 --> 9
	5 --> 9
	5["arg__390 0"]
	8["arg__389 u8.&"]
	3 --> 8
	6 --> 8
	6["arg__392 0x40u8"]
	11{"memindex ϕ"}
	9 --> 11
	10 --> 11
	4 --> 11
	4["memindex__394 0u"]
	30["eff__376 push_u64"]
	28 --> 30
	24 -. Stack .-> 30
	24["index pop_u64"]
	0 -. Stack .-> 24
	28["val mach_readMemory64_u16_64"]
	11 --> 28
	24 --> 28
	23 --> 28
	23["offset imm_readULEB64"]
	12 -. Codeptr .-> 23
	14["cond__375 m_isMemory64"]
	11 --> 14
	31{{"Sϕ Codeptr "}}
	14 --> 31
	23 --> 31
	15 --> 31
</pre>`;
window.traces.I64_LOAD16_U["chooseMerge"] = `<pre class='graph'>---
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
	22["eff__381 push_u64"]
	20 --> 22
	16 -. Stack .-> 22
	16["index pop_u32"]
	0 -. Stack .-> 16
	20["val mach_readMemory32_u16_64"]
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
	10["memindex__388 imm_readULEB32"]
	3 -. Codeptr .-> 10
	9["cond__387 u8.!="]
	8 --> 9
	5 --> 9
	5["arg__390 0"]
	8["arg__389 u8.&"]
	3 --> 8
	6 --> 8
	6["arg__392 0x40u8"]
	11{"memindex ϕ"}
	9 --> 11
	10 --> 11
	4 --> 11
	4["memindex__394 0u"]
	30["eff__376 push_u64"]
	28 --> 30
	24 -. Stack .-> 30
	24["index pop_u64"]
	0 -. Stack .-> 24
	28["val mach_readMemory64_u16_64"]
	11 --> 28
	24 --> 28
	23 --> 28
	23["offset imm_readULEB64"]
	12 -. Codeptr .-> 23
	14["cond__375 m_isMemory64"]
	11 --> 14
	31{{"Sϕ Codeptr "}}
	14 --> 31
	23 --> 31
	15 --> 31
</pre>`;
window.traces.I64_LOAD16_U["scheduled"] = `<pre class=''>def flags = imm_readU8();
def arg__392 : byte = 0x40u8;
def arg__389 = u8.&(flags, arg__392);
def arg__390 : byte = 0;
def cond__387 = u8.!=(arg__389, arg__390);
var memindex: u32;
if (cond__387) {
	def memindex__388 = imm_readULEB32();
} else {
	def memindex__394 : u32 = 0u;
}
// phis: memindex <- memindex__388; memindex <- memindex__394; 
def cond__375 = m_isMemory64(memindex);
if (cond__375) {
	def offset = imm_readULEB64();
	def index = pop_u64();
	def val = mach_readMemory64_u16_64(memindex, index, offset);
	def eff__376 = push_u64(val);
} else {
	def offset = imm_readULEB32();
	def index = pop_u32();
	def val = mach_readMemory32_u16_64(memindex, index, offset);
	def eff__381 = push_u64(val);
}
// phis: 
</pre>`;
window.traces.I64_LOAD16_U["pretty"] = `<pre class=''>def flags = imm_readU8();
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
	def val = mach_readMemory64_u16_64(memindex, index, offset);
	push_u64(val);
} else {
	def offset = imm_readULEB32();
	def index = pop_u32();
	def val = mach_readMemory32_u16_64(memindex, index, offset);
	push_u64(val);
}
</pre>`;
window.traces["I64_LOAD32_S"] = {}
window.traces.I64_LOAD32_S["parsed"] = `<pre class=''>def flags = imm_readU8();
def memindex : u32 = 0u;
def arg__412 : byte = 0;
def arg__414 : byte = 0x40u8;
def arg__413 = (flags);
def arg__411 = u8.&(arg__413, arg__414);
def cond__409 = u8.!=(arg__411, arg__412);
if (cond__409) {
	def memindex__410 = imm_readULEB32();
}
// phis: memindex <- memindex__410; 
def arg__408 = (memindex);
def cond__395 = m_isMemory64(arg__408);
if (cond__395) {
	def offset = imm_readULEB64();
	def index = pop_u64();
	def arg__401 = (offset);
	def arg__400 = (index);
	def arg__399 = (memindex);
	def val = mach_readMemory64_u32_64(arg__399, arg__400, arg__401);
	def arg__398 = (val);
	def extend = U64_extend32_s(arg__398);
	def arg__397 = (extend);
	def eff__396 = push_u64(arg__397);
} else {
	def offset = imm_readULEB32();
	def index = pop_u32();
	def arg__407 = (offset);
	def arg__406 = (index);
	def arg__405 = (memindex);
	def val = mach_readMemory32_u32_64(arg__405, arg__406, arg__407);
	def arg__404 = (val);
	def extend = U64_extend32_s(arg__404);
	def arg__403 = (extend);
	def eff__402 = push_u64(arg__403);
}
// phis: 
</pre>`;
window.traces.I64_LOAD32_S["raw"] = `<pre class='graph'>---
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
	24["eff__402 push_u64"]
	22 --> 24
	16 -. Stack .-> 24
	16["index pop_u32"]
	0 -. Stack .-> 16
	22["extend U64_extend32_s"]
	20 --> 22
	20["val mach_readMemory32_u32_64"]
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
	10["memindex__410 imm_readULEB32"]
	3 -. Codeptr .-> 10
	9["cond__409 u8.!="]
	8 --> 9
	5 --> 9
	5["arg__412 0"]
	8["arg__411 u8.&"]
	3 --> 8
	6 --> 8
	6["arg__414 0x40u8"]
	11{"memindex ϕ"}
	9 --> 11
	10 --> 11
	4 --> 11
	4["memindex__415 0u"]
	34["eff__396 push_u64"]
	32 --> 34
	26 -. Stack .-> 34
	26["index pop_u64"]
	0 -. Stack .-> 26
	32["extend U64_extend32_s"]
	30 --> 32
	30["val mach_readMemory64_u32_64"]
	11 --> 30
	26 --> 30
	25 --> 30
	25["offset imm_readULEB64"]
	12 -. Codeptr .-> 25
	14["cond__395 m_isMemory64"]
	11 --> 14
	35{{"Sϕ Codeptr "}}
	14 --> 35
	25 --> 35
	15 --> 35
</pre>`;
window.traces.I64_LOAD32_S["overloadOps"] = `<pre class='graph'>---
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
	24["eff__402 push_u64"]
	22 --> 24
	16 -. Stack .-> 24
	16["index pop_u32"]
	0 -. Stack .-> 16
	22["extend U64_extend32_s"]
	20 --> 22
	20["val mach_readMemory32_u32_64"]
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
	10["memindex__410 imm_readULEB32"]
	3 -. Codeptr .-> 10
	9["cond__409 u8.!="]
	8 --> 9
	5 --> 9
	5["arg__412 0"]
	8["arg__411 u8.&"]
	3 --> 8
	6 --> 8
	6["arg__414 0x40u8"]
	11{"memindex ϕ"}
	9 --> 11
	10 --> 11
	4 --> 11
	4["memindex__416 0u"]
	34["eff__396 push_u64"]
	32 --> 34
	26 -. Stack .-> 34
	26["index pop_u64"]
	0 -. Stack .-> 26
	32["extend U64_extend32_s"]
	30 --> 32
	30["val mach_readMemory64_u32_64"]
	11 --> 30
	26 --> 30
	25 --> 30
	25["offset imm_readULEB64"]
	12 -. Codeptr .-> 25
	14["cond__395 m_isMemory64"]
	11 --> 14
	35{{"Sϕ Codeptr "}}
	14 --> 35
	25 --> 35
	15 --> 35
</pre>`;
window.traces.I64_LOAD32_S["addAbstractions"] = `<pre class='graph'>---
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
	24["eff__402 push_u64"]
	22 --> 24
	16 -. Stack .-> 24
	16["index pop_u32"]
	0 -. Stack .-> 16
	22["extend U64_extend32_s"]
	20 --> 22
	20["val mach_readMemory32_u32_64"]
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
	10["memindex__410 imm_readULEB32"]
	3 -. Codeptr .-> 10
	9["cond__409 u8.!="]
	8 --> 9
	5 --> 9
	5["arg__412 0"]
	8["arg__411 u8.&"]
	3 --> 8
	6 --> 8
	6["arg__414 0x40u8"]
	11{"memindex ϕ"}
	9 --> 11
	10 --> 11
	4 --> 11
	4["memindex__416 0u"]
	34["eff__396 push_u64"]
	32 --> 34
	26 -. Stack .-> 34
	26["index pop_u64"]
	0 -. Stack .-> 26
	32["extend U64_extend32_s"]
	30 --> 32
	30["val mach_readMemory64_u32_64"]
	11 --> 30
	26 --> 30
	25 --> 30
	25["offset imm_readULEB64"]
	12 -. Codeptr .-> 25
	14["cond__395 m_isMemory64"]
	11 --> 14
	35{{"Sϕ Codeptr "}}
	14 --> 35
	25 --> 35
	15 --> 35
</pre>`;
window.traces.I64_LOAD32_S["schedulerMermaid"] = `<pre class='graph'>graph TD
subgraph block_503["Block 503"]
	direction TB
	b503_1[\\"Finish"/]
	b503_25["offset imm_readULEB64"]
	b503_15["offset imm_readULEB32"]
	b503_34["eff__396 push_u64"]
	b503_24["eff__402 push_u64"]
	b503_32["extend U64_extend32_s"]
	b503_26["index pop_u64"]
	b503_22["extend U64_extend32_s"]
	b503_16["index pop_u32"]
	b503_10["memindex__410 imm_readULEB32"]
	b503_4["memindex__416 0u"]
	b503_3["flags imm_readU8"]
	b503_30["val mach_readMemory64_u32_64"]
	b503_20["val mach_readMemory32_u32_64"]
	b503_25 --> b503_1
	b503_15 --> b503_25
	b503_34 --> b503_15
	b503_24 --> b503_34
	b503_32 --> b503_24
	b503_26 --> b503_32
	b503_22 --> b503_26
	b503_16 --> b503_22
	b503_10 --> b503_16
	b503_4 --> b503_10
	b503_3 --> b503_4
	b503_30 --> b503_3
	b503_20 --> b503_30
end
phi_505 --> block_503
subgraph phi_505["Phi 505"]
	p505_36{{"Sϕ Stack "}}
	p505_35{{"Sϕ Codeptr "}}
end
block_506 --> phi_505
block_507 --> phi_505
subgraph block_506["Block 506"]
	direction TB
	b506_25["offset imm_readULEB64"]
	b506_34["eff__396 push_u64"]
	b506_34 --> b506_25
end
phi_510 --> block_506
subgraph phi_510["Phi 510"]
	p510_11{"memindex ϕ"}
	p510_11{"memindex ϕ"}
	p510_11{"memindex ϕ"}
	p510_11{"memindex ϕ"}
end
block_511 --> phi_510
block_512 --> phi_510
subgraph block_511["Block 511"]
	direction TB
	b511_10["memindex__410 imm_readULEB32"]
end
branch_509 --> block_511
subgraph branch_509["Branch 509"]
	br509_9["cond__409 u8.!="]

end
branch_504 --> branch_509
subgraph branch_504["Branch 504"]
	br504_14["cond__395 m_isMemory64"]

end
block_508 --> branch_504
subgraph block_508["Block 508"]
	direction TB
	b508_14["cond__395 m_isMemory64"]
end
phi_514 --> block_508
subgraph phi_514["Phi 514"]
	p514_12{{"Sϕ Codeptr "}}
	p514_12{{"Sϕ Codeptr "}}
end
block_515 --> phi_514
block_516 --> phi_514
subgraph block_515["Block 515"]
	direction TB
	b515_10["memindex__410 imm_readULEB32"]
end
branch_513 --> block_515
subgraph branch_513["Branch 513"]
	br513_9["cond__409 u8.!="]

end
block_517 --> branch_513
subgraph block_517["Block 517"]
	direction TB
	b517_9["cond__409 u8.!="]
	b517_8["arg__411 u8.&"]
	b517_5["arg__412 0"]
	b517_6["arg__414 0x40u8"]
	b517_0[/"Start"\\]
	b517_8 --> b517_9
	b517_5 --> b517_8
	b517_6 --> b517_5
	b517_0 --> b517_6
end
subgraph block_516["Block 516"]
	direction TB
end
branch_513 --> block_516
subgraph block_512["Block 512"]
	direction TB
	b512_4["memindex__416 0u"]
end
branch_509 --> block_512
subgraph block_507["Block 507"]
	direction TB
	b507_15["offset imm_readULEB32"]
	b507_24["eff__402 push_u64"]
	b507_24 --> b507_15
end
branch_504 --> block_507

</pre>`;
window.traces.I64_LOAD32_S["unLEM"] = `<pre class='graph'>---
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
	24["eff__402 push_u64"]
	22 --> 24
	16 -. Stack .-> 24
	16["index pop_u32"]
	0 -. Stack .-> 16
	22["extend U64_extend32_s"]
	20 --> 22
	20["val mach_readMemory32_u32_64"]
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
	10["memindex__410 imm_readULEB32"]
	3 -. Codeptr .-> 10
	9["cond__409 u8.!="]
	8 --> 9
	5 --> 9
	5["arg__412 0"]
	8["arg__411 u8.&"]
	3 --> 8
	6 --> 8
	6["arg__414 0x40u8"]
	11{"memindex ϕ"}
	9 --> 11
	10 --> 11
	4 --> 11
	4["memindex__416 0u"]
	34["eff__396 push_u64"]
	32 --> 34
	26 -. Stack .-> 34
	26["index pop_u64"]
	0 -. Stack .-> 26
	32["extend U64_extend32_s"]
	30 --> 32
	30["val mach_readMemory64_u32_64"]
	11 --> 30
	26 --> 30
	25 --> 30
	25["offset imm_readULEB64"]
	12 -. Codeptr .-> 25
	14["cond__395 m_isMemory64"]
	11 --> 14
	35{{"Sϕ Codeptr "}}
	14 --> 35
	25 --> 35
	15 --> 35
</pre>`;
window.traces.I64_LOAD32_S["unlem_schedule"] = `<pre class=''>def flags = imm_readU8();
def arg__414 : byte = 0x40u8;
def arg__411 = u8.&(flags, arg__414);
def arg__412 : byte = 0;
def cond__409 = u8.!=(arg__411, arg__412);
var memindex: u32;
if (cond__409) {
	def memindex__410 = imm_readULEB32();
} else {
	def memindex__416 : u32 = 0u;
}
// phis: memindex <- memindex__410; memindex <- memindex__416; 
def cond__395 = m_isMemory64(memindex);
if (cond__395) {
	def offset = imm_readULEB64();
	def index = pop_u64();
	def val = mach_readMemory64_u32_64(memindex, index, offset);
	def extend = U64_extend32_s(val);
	def eff__396 = push_u64(extend);
} else {
	def offset = imm_readULEB32();
	def index = pop_u32();
	def val = mach_readMemory32_u32_64(memindex, index, offset);
	def extend = U64_extend32_s(val);
	def eff__402 = push_u64(extend);
}
// phis: 
</pre>`;
window.traces.I64_LOAD32_S["unlem_scheduler"] = `<pre class='graph'>graph TD
subgraph block_518["Block 518"]
	direction TB
	b518_1[\\"Finish"/]
	b518_25["offset imm_readULEB64"]
	b518_15["offset imm_readULEB32"]
	b518_34["eff__396 push_u64"]
	b518_24["eff__402 push_u64"]
	b518_32["extend U64_extend32_s"]
	b518_26["index pop_u64"]
	b518_22["extend U64_extend32_s"]
	b518_16["index pop_u32"]
	b518_10["memindex__410 imm_readULEB32"]
	b518_4["memindex__416 0u"]
	b518_3["flags imm_readU8"]
	b518_30["val mach_readMemory64_u32_64"]
	b518_20["val mach_readMemory32_u32_64"]
	b518_25 --> b518_1
	b518_15 --> b518_25
	b518_34 --> b518_15
	b518_24 --> b518_34
	b518_32 --> b518_24
	b518_26 --> b518_32
	b518_22 --> b518_26
	b518_16 --> b518_22
	b518_10 --> b518_16
	b518_4 --> b518_10
	b518_3 --> b518_4
	b518_30 --> b518_3
	b518_20 --> b518_30
end
phi_520 --> block_518
subgraph phi_520["Phi 520"]
	p520_36{{"Sϕ Stack "}}
	p520_35{{"Sϕ Codeptr "}}
end
block_521 --> phi_520
block_522 --> phi_520
subgraph block_521["Block 521"]
	direction TB
	b521_25["offset imm_readULEB64"]
	b521_34["eff__396 push_u64"]
	b521_34 --> b521_25
end
phi_525 --> block_521
subgraph phi_525["Phi 525"]
	p525_11{"memindex ϕ"}
	p525_11{"memindex ϕ"}
	p525_11{"memindex ϕ"}
	p525_11{"memindex ϕ"}
end
block_526 --> phi_525
block_527 --> phi_525
subgraph block_526["Block 526"]
	direction TB
	b526_10["memindex__410 imm_readULEB32"]
end
branch_524 --> block_526
subgraph branch_524["Branch 524"]
	br524_9["cond__409 u8.!="]

end
branch_519 --> branch_524
subgraph branch_519["Branch 519"]
	br519_14["cond__395 m_isMemory64"]

end
block_523 --> branch_519
subgraph block_523["Block 523"]
	direction TB
	b523_14["cond__395 m_isMemory64"]
end
phi_529 --> block_523
subgraph phi_529["Phi 529"]
	p529_12{{"Sϕ Codeptr "}}
	p529_12{{"Sϕ Codeptr "}}
end
block_530 --> phi_529
block_531 --> phi_529
subgraph block_530["Block 530"]
	direction TB
	b530_10["memindex__410 imm_readULEB32"]
end
branch_528 --> block_530
subgraph branch_528["Branch 528"]
	br528_9["cond__409 u8.!="]

end
block_532 --> branch_528
subgraph block_532["Block 532"]
	direction TB
	b532_9["cond__409 u8.!="]
	b532_8["arg__411 u8.&"]
	b532_5["arg__412 0"]
	b532_6["arg__414 0x40u8"]
	b532_0[/"Start"\\]
	b532_8 --> b532_9
	b532_5 --> b532_8
	b532_6 --> b532_5
	b532_0 --> b532_6
end
subgraph block_531["Block 531"]
	direction TB
end
branch_528 --> block_531
subgraph block_527["Block 527"]
	direction TB
	b527_4["memindex__416 0u"]
end
branch_524 --> block_527
subgraph block_522["Block 522"]
	direction TB
	b522_15["offset imm_readULEB32"]
	b522_24["eff__402 push_u64"]
	b522_24 --> b522_15
end
branch_519 --> block_522

</pre>`;
window.traces.I64_LOAD32_S["unlem_pretty"] = `<pre class=''>def flags = imm_readU8();
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
	def val = mach_readMemory64_u32_64(memindex, index, offset);
	def extend = U64_extend32_s(val);
	push_u64(extend);
} else {
	def offset = imm_readULEB32();
	def index = pop_u32();
	def val = mach_readMemory32_u32_64(memindex, index, offset);
	def extend = U64_extend32_s(val);
	push_u64(extend);
}
</pre>`;
window.traces.I64_LOAD32_S["constUnLEM"] = `<pre class='graph'>---
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
	24["eff__402 push_u64"]
	22 --> 24
	16 -. Stack .-> 24
	16["index pop_u32"]
	0 -. Stack .-> 16
	22["extend U64_extend32_s"]
	20 --> 22
	20["val mach_readMemory32_u32_64"]
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
	10["memindex__410 imm_readULEB32"]
	3 -. Codeptr .-> 10
	9["cond__409 u8.!="]
	8 --> 9
	5 --> 9
	5["arg__412 0"]
	8["arg__411 u8.&"]
	3 --> 8
	6 --> 8
	6["arg__414 0x40u8"]
	11{"memindex ϕ"}
	9 --> 11
	10 --> 11
	4 --> 11
	4["memindex__416 0u"]
	34["eff__396 push_u64"]
	32 --> 34
	26 -. Stack .-> 34
	26["index pop_u64"]
	0 -. Stack .-> 26
	32["extend U64_extend32_s"]
	30 --> 32
	30["val mach_readMemory64_u32_64"]
	11 --> 30
	26 --> 30
	25 --> 30
	25["offset imm_readULEB64"]
	12 -. Codeptr .-> 25
	14["cond__395 m_isMemory64"]
	11 --> 14
	35{{"Sϕ Codeptr "}}
	14 --> 35
	25 --> 35
	15 --> 35
</pre>`;
window.traces.I64_LOAD32_S["chooseMerge"] = `<pre class='graph'>---
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
	24["eff__402 push_u64"]
	22 --> 24
	16 -. Stack .-> 24
	16["index pop_u32"]
	0 -. Stack .-> 16
	22["extend U64_extend32_s"]
	20 --> 22
	20["val mach_readMemory32_u32_64"]
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
	10["memindex__410 imm_readULEB32"]
	3 -. Codeptr .-> 10
	9["cond__409 u8.!="]
	8 --> 9
	5 --> 9
	5["arg__412 0"]
	8["arg__411 u8.&"]
	3 --> 8
	6 --> 8
	6["arg__414 0x40u8"]
	11{"memindex ϕ"}
	9 --> 11
	10 --> 11
	4 --> 11
	4["memindex__416 0u"]
	34["eff__396 push_u64"]
	32 --> 34
	26 -. Stack .-> 34
	26["index pop_u64"]
	0 -. Stack .-> 26
	32["extend U64_extend32_s"]
	30 --> 32
	30["val mach_readMemory64_u32_64"]
	11 --> 30
	26 --> 30
	25 --> 30
	25["offset imm_readULEB64"]
	12 -. Codeptr .-> 25
	14["cond__395 m_isMemory64"]
	11 --> 14
	35{{"Sϕ Codeptr "}}
	14 --> 35
	25 --> 35
	15 --> 35
</pre>`;
window.traces.I64_LOAD32_S["scheduled"] = `<pre class=''>def flags = imm_readU8();
def arg__414 : byte = 0x40u8;
def arg__411 = u8.&(flags, arg__414);
def arg__412 : byte = 0;
def cond__409 = u8.!=(arg__411, arg__412);
var memindex: u32;
if (cond__409) {
	def memindex__410 = imm_readULEB32();
} else {
	def memindex__416 : u32 = 0u;
}
// phis: memindex <- memindex__410; memindex <- memindex__416; 
def cond__395 = m_isMemory64(memindex);
if (cond__395) {
	def offset = imm_readULEB64();
	def index = pop_u64();
	def val = mach_readMemory64_u32_64(memindex, index, offset);
	def extend = U64_extend32_s(val);
	def eff__396 = push_u64(extend);
} else {
	def offset = imm_readULEB32();
	def index = pop_u32();
	def val = mach_readMemory32_u32_64(memindex, index, offset);
	def extend = U64_extend32_s(val);
	def eff__402 = push_u64(extend);
}
// phis: 
</pre>`;
window.traces.I64_LOAD32_S["pretty"] = `<pre class=''>def flags = imm_readU8();
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
	def val = mach_readMemory64_u32_64(memindex, index, offset);
	def extend = U64_extend32_s(val);
	push_u64(extend);
} else {
	def offset = imm_readULEB32();
	def index = pop_u32();
	def val = mach_readMemory32_u32_64(memindex, index, offset);
	def extend = U64_extend32_s(val);
	push_u64(extend);
}
</pre>`;
window.traces["I64_LOAD32_U"] = {}
window.traces.I64_LOAD32_U["parsed"] = `<pre class=''>def flags = imm_readU8();
def memindex : u32 = 0u;
def arg__432 : byte = 0;
def arg__434 : byte = 0x40u8;
def arg__433 = (flags);
def arg__431 = u8.&(arg__433, arg__434);
def cond__429 = u8.!=(arg__431, arg__432);
if (cond__429) {
	def memindex__430 = imm_readULEB32();
}
// phis: memindex <- memindex__430; 
def arg__428 = (memindex);
def cond__417 = m_isMemory64(arg__428);
if (cond__417) {
	def offset = imm_readULEB64();
	def index = pop_u64();
	def arg__422 = (offset);
	def arg__421 = (index);
	def arg__420 = (memindex);
	def val = mach_readMemory64_u32_64(arg__420, arg__421, arg__422);
	def arg__419 = (val);
	def eff__418 = push_u64(arg__419);
} else {
	def offset = imm_readULEB32();
	def index = pop_u32();
	def arg__427 = (offset);
	def arg__426 = (index);
	def arg__425 = (memindex);
	def val = mach_readMemory32_u32_64(arg__425, arg__426, arg__427);
	def arg__424 = (val);
	def eff__423 = push_u64(arg__424);
}
// phis: 
</pre>`;
window.traces.I64_LOAD32_U["raw"] = `<pre class='graph'>---
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
	22["eff__423 push_u64"]
	20 --> 22
	16 -. Stack .-> 22
	16["index pop_u32"]
	0 -. Stack .-> 16
	20["val mach_readMemory32_u32_64"]
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
	10["memindex__430 imm_readULEB32"]
	3 -. Codeptr .-> 10
	9["cond__429 u8.!="]
	8 --> 9
	5 --> 9
	5["arg__432 0"]
	8["arg__431 u8.&"]
	3 --> 8
	6 --> 8
	6["arg__434 0x40u8"]
	11{"memindex ϕ"}
	9 --> 11
	10 --> 11
	4 --> 11
	4["memindex__435 0u"]
	30["eff__418 push_u64"]
	28 --> 30
	24 -. Stack .-> 30
	24["index pop_u64"]
	0 -. Stack .-> 24
	28["val mach_readMemory64_u32_64"]
	11 --> 28
	24 --> 28
	23 --> 28
	23["offset imm_readULEB64"]
	12 -. Codeptr .-> 23
	14["cond__417 m_isMemory64"]
	11 --> 14
	31{{"Sϕ Codeptr "}}
	14 --> 31
	23 --> 31
	15 --> 31
</pre>`;
window.traces.I64_LOAD32_U["overloadOps"] = `<pre class='graph'>---
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
	22["eff__423 push_u64"]
	20 --> 22
	16 -. Stack .-> 22
	16["index pop_u32"]
	0 -. Stack .-> 16
	20["val mach_readMemory32_u32_64"]
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
	10["memindex__430 imm_readULEB32"]
	3 -. Codeptr .-> 10
	9["cond__429 u8.!="]
	8 --> 9
	5 --> 9
	5["arg__432 0"]
	8["arg__431 u8.&"]
	3 --> 8
	6 --> 8
	6["arg__434 0x40u8"]
	11{"memindex ϕ"}
	9 --> 11
	10 --> 11
	4 --> 11
	4["memindex__436 0u"]
	30["eff__418 push_u64"]
	28 --> 30
	24 -. Stack .-> 30
	24["index pop_u64"]
	0 -. Stack .-> 24
	28["val mach_readMemory64_u32_64"]
	11 --> 28
	24 --> 28
	23 --> 28
	23["offset imm_readULEB64"]
	12 -. Codeptr .-> 23
	14["cond__417 m_isMemory64"]
	11 --> 14
	31{{"Sϕ Codeptr "}}
	14 --> 31
	23 --> 31
	15 --> 31
</pre>`;
window.traces.I64_LOAD32_U["addAbstractions"] = `<pre class='graph'>---
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
	22["eff__423 push_u64"]
	20 --> 22
	16 -. Stack .-> 22
	16["index pop_u32"]
	0 -. Stack .-> 16
	20["val mach_readMemory32_u32_64"]
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
	10["memindex__430 imm_readULEB32"]
	3 -. Codeptr .-> 10
	9["cond__429 u8.!="]
	8 --> 9
	5 --> 9
	5["arg__432 0"]
	8["arg__431 u8.&"]
	3 --> 8
	6 --> 8
	6["arg__434 0x40u8"]
	11{"memindex ϕ"}
	9 --> 11
	10 --> 11
	4 --> 11
	4["memindex__436 0u"]
	30["eff__418 push_u64"]
	28 --> 30
	24 -. Stack .-> 30
	24["index pop_u64"]
	0 -. Stack .-> 24
	28["val mach_readMemory64_u32_64"]
	11 --> 28
	24 --> 28
	23 --> 28
	23["offset imm_readULEB64"]
	12 -. Codeptr .-> 23
	14["cond__417 m_isMemory64"]
	11 --> 14
	31{{"Sϕ Codeptr "}}
	14 --> 31
	23 --> 31
	15 --> 31
</pre>`;
window.traces.I64_LOAD32_U["schedulerMermaid"] = `<pre class='graph'>graph TD
subgraph block_533["Block 533"]
	direction TB
	b533_1[\\"Finish"/]
	b533_23["offset imm_readULEB64"]
	b533_15["offset imm_readULEB32"]
	b533_30["eff__418 push_u64"]
	b533_22["eff__423 push_u64"]
	b533_28["val mach_readMemory64_u32_64"]
	b533_24["index pop_u64"]
	b533_20["val mach_readMemory32_u32_64"]
	b533_16["index pop_u32"]
	b533_10["memindex__430 imm_readULEB32"]
	b533_4["memindex__436 0u"]
	b533_3["flags imm_readU8"]
	b533_23 --> b533_1
	b533_15 --> b533_23
	b533_30 --> b533_15
	b533_22 --> b533_30
	b533_28 --> b533_22
	b533_24 --> b533_28
	b533_20 --> b533_24
	b533_16 --> b533_20
	b533_10 --> b533_16
	b533_4 --> b533_10
	b533_3 --> b533_4
end
phi_535 --> block_533
subgraph phi_535["Phi 535"]
	p535_32{{"Sϕ Stack "}}
	p535_31{{"Sϕ Codeptr "}}
end
block_536 --> phi_535
block_537 --> phi_535
subgraph block_536["Block 536"]
	direction TB
	b536_23["offset imm_readULEB64"]
	b536_30["eff__418 push_u64"]
	b536_30 --> b536_23
end
phi_540 --> block_536
subgraph phi_540["Phi 540"]
	p540_11{"memindex ϕ"}
	p540_11{"memindex ϕ"}
	p540_11{"memindex ϕ"}
	p540_11{"memindex ϕ"}
end
block_541 --> phi_540
block_542 --> phi_540
subgraph block_541["Block 541"]
	direction TB
	b541_10["memindex__430 imm_readULEB32"]
end
branch_539 --> block_541
subgraph branch_539["Branch 539"]
	br539_9["cond__429 u8.!="]

end
branch_534 --> branch_539
subgraph branch_534["Branch 534"]
	br534_14["cond__417 m_isMemory64"]

end
block_538 --> branch_534
subgraph block_538["Block 538"]
	direction TB
	b538_14["cond__417 m_isMemory64"]
end
phi_544 --> block_538
subgraph phi_544["Phi 544"]
	p544_12{{"Sϕ Codeptr "}}
	p544_12{{"Sϕ Codeptr "}}
	p544_12{{"Sϕ Codeptr "}}
	p544_12{{"Sϕ Codeptr "}}
end
block_545 --> phi_544
block_546 --> phi_544
subgraph block_545["Block 545"]
	direction TB
	b545_10["memindex__430 imm_readULEB32"]
end
branch_543 --> block_545
subgraph branch_543["Branch 543"]
	br543_9["cond__429 u8.!="]

end
block_547 --> branch_543
subgraph block_547["Block 547"]
	direction TB
	b547_9["cond__429 u8.!="]
	b547_8["arg__431 u8.&"]
	b547_5["arg__432 0"]
	b547_6["arg__434 0x40u8"]
	b547_0[/"Start"\\]
	b547_8 --> b547_9
	b547_5 --> b547_8
	b547_6 --> b547_5
	b547_0 --> b547_6
end
subgraph block_546["Block 546"]
	direction TB
end
branch_543 --> block_546
subgraph block_542["Block 542"]
	direction TB
	b542_4["memindex__436 0u"]
end
branch_539 --> block_542
subgraph block_537["Block 537"]
	direction TB
	b537_15["offset imm_readULEB32"]
	b537_22["eff__423 push_u64"]
	b537_22 --> b537_15
end
branch_534 --> block_537

</pre>`;
window.traces.I64_LOAD32_U["unLEM"] = `<pre class='graph'>---
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
	22["eff__423 push_u64"]
	20 --> 22
	16 -. Stack .-> 22
	16["index pop_u32"]
	0 -. Stack .-> 16
	20["val mach_readMemory32_u32_64"]
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
	10["memindex__430 imm_readULEB32"]
	3 -. Codeptr .-> 10
	9["cond__429 u8.!="]
	8 --> 9
	5 --> 9
	5["arg__432 0"]
	8["arg__431 u8.&"]
	3 --> 8
	6 --> 8
	6["arg__434 0x40u8"]
	11{"memindex ϕ"}
	9 --> 11
	10 --> 11
	4 --> 11
	4["memindex__436 0u"]
	30["eff__418 push_u64"]
	28 --> 30
	24 -. Stack .-> 30
	24["index pop_u64"]
	0 -. Stack .-> 24
	28["val mach_readMemory64_u32_64"]
	11 --> 28
	24 --> 28
	23 --> 28
	23["offset imm_readULEB64"]
	12 -. Codeptr .-> 23
	14["cond__417 m_isMemory64"]
	11 --> 14
	31{{"Sϕ Codeptr "}}
	14 --> 31
	23 --> 31
	15 --> 31
</pre>`;
window.traces.I64_LOAD32_U["unlem_schedule"] = `<pre class=''>def flags = imm_readU8();
def arg__434 : byte = 0x40u8;
def arg__431 = u8.&(flags, arg__434);
def arg__432 : byte = 0;
def cond__429 = u8.!=(arg__431, arg__432);
var memindex: u32;
if (cond__429) {
	def memindex__430 = imm_readULEB32();
} else {
	def memindex__436 : u32 = 0u;
}
// phis: memindex <- memindex__430; memindex <- memindex__436; 
def cond__417 = m_isMemory64(memindex);
if (cond__417) {
	def offset = imm_readULEB64();
	def index = pop_u64();
	def val = mach_readMemory64_u32_64(memindex, index, offset);
	def eff__418 = push_u64(val);
} else {
	def offset = imm_readULEB32();
	def index = pop_u32();
	def val = mach_readMemory32_u32_64(memindex, index, offset);
	def eff__423 = push_u64(val);
}
// phis: 
</pre>`;
window.traces.I64_LOAD32_U["unlem_scheduler"] = `<pre class='graph'>graph TD
subgraph block_548["Block 548"]
	direction TB
	b548_1[\\"Finish"/]
	b548_23["offset imm_readULEB64"]
	b548_15["offset imm_readULEB32"]
	b548_30["eff__418 push_u64"]
	b548_22["eff__423 push_u64"]
	b548_28["val mach_readMemory64_u32_64"]
	b548_24["index pop_u64"]
	b548_20["val mach_readMemory32_u32_64"]
	b548_16["index pop_u32"]
	b548_10["memindex__430 imm_readULEB32"]
	b548_4["memindex__436 0u"]
	b548_3["flags imm_readU8"]
	b548_23 --> b548_1
	b548_15 --> b548_23
	b548_30 --> b548_15
	b548_22 --> b548_30
	b548_28 --> b548_22
	b548_24 --> b548_28
	b548_20 --> b548_24
	b548_16 --> b548_20
	b548_10 --> b548_16
	b548_4 --> b548_10
	b548_3 --> b548_4
end
phi_550 --> block_548
subgraph phi_550["Phi 550"]
	p550_32{{"Sϕ Stack "}}
	p550_31{{"Sϕ Codeptr "}}
end
block_551 --> phi_550
block_552 --> phi_550
subgraph block_551["Block 551"]
	direction TB
	b551_23["offset imm_readULEB64"]
	b551_30["eff__418 push_u64"]
	b551_30 --> b551_23
end
phi_555 --> block_551
subgraph phi_555["Phi 555"]
	p555_11{"memindex ϕ"}
	p555_11{"memindex ϕ"}
	p555_11{"memindex ϕ"}
	p555_11{"memindex ϕ"}
end
block_556 --> phi_555
block_557 --> phi_555
subgraph block_556["Block 556"]
	direction TB
	b556_10["memindex__430 imm_readULEB32"]
end
branch_554 --> block_556
subgraph branch_554["Branch 554"]
	br554_9["cond__429 u8.!="]

end
branch_549 --> branch_554
subgraph branch_549["Branch 549"]
	br549_14["cond__417 m_isMemory64"]

end
block_553 --> branch_549
subgraph block_553["Block 553"]
	direction TB
	b553_14["cond__417 m_isMemory64"]
end
phi_559 --> block_553
subgraph phi_559["Phi 559"]
	p559_12{{"Sϕ Codeptr "}}
	p559_12{{"Sϕ Codeptr "}}
	p559_12{{"Sϕ Codeptr "}}
	p559_12{{"Sϕ Codeptr "}}
end
block_560 --> phi_559
block_561 --> phi_559
subgraph block_560["Block 560"]
	direction TB
	b560_10["memindex__430 imm_readULEB32"]
end
branch_558 --> block_560
subgraph branch_558["Branch 558"]
	br558_9["cond__429 u8.!="]

end
block_562 --> branch_558
subgraph block_562["Block 562"]
	direction TB
	b562_9["cond__429 u8.!="]
	b562_8["arg__431 u8.&"]
	b562_5["arg__432 0"]
	b562_6["arg__434 0x40u8"]
	b562_0[/"Start"\\]
	b562_8 --> b562_9
	b562_5 --> b562_8
	b562_6 --> b562_5
	b562_0 --> b562_6
end
subgraph block_561["Block 561"]
	direction TB
end
branch_558 --> block_561
subgraph block_557["Block 557"]
	direction TB
	b557_4["memindex__436 0u"]
end
branch_554 --> block_557
subgraph block_552["Block 552"]
	direction TB
	b552_15["offset imm_readULEB32"]
	b552_22["eff__423 push_u64"]
	b552_22 --> b552_15
end
branch_549 --> block_552

</pre>`;
window.traces.I64_LOAD32_U["unlem_pretty"] = `<pre class=''>def flags = imm_readU8();
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
	def val = mach_readMemory64_u32_64(memindex, index, offset);
	push_u64(val);
} else {
	def offset = imm_readULEB32();
	def index = pop_u32();
	def val = mach_readMemory32_u32_64(memindex, index, offset);
	push_u64(val);
}
</pre>`;
window.traces.I64_LOAD32_U["constUnLEM"] = `<pre class='graph'>---
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
	22["eff__423 push_u64"]
	20 --> 22
	16 -. Stack .-> 22
	16["index pop_u32"]
	0 -. Stack .-> 16
	20["val mach_readMemory32_u32_64"]
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
	10["memindex__430 imm_readULEB32"]
	3 -. Codeptr .-> 10
	9["cond__429 u8.!="]
	8 --> 9
	5 --> 9
	5["arg__432 0"]
	8["arg__431 u8.&"]
	3 --> 8
	6 --> 8
	6["arg__434 0x40u8"]
	11{"memindex ϕ"}
	9 --> 11
	10 --> 11
	4 --> 11
	4["memindex__436 0u"]
	30["eff__418 push_u64"]
	28 --> 30
	24 -. Stack .-> 30
	24["index pop_u64"]
	0 -. Stack .-> 24
	28["val mach_readMemory64_u32_64"]
	11 --> 28
	24 --> 28
	23 --> 28
	23["offset imm_readULEB64"]
	12 -. Codeptr .-> 23
	14["cond__417 m_isMemory64"]
	11 --> 14
	31{{"Sϕ Codeptr "}}
	14 --> 31
	23 --> 31
	15 --> 31
</pre>`;
window.traces.I64_LOAD32_U["chooseMerge"] = `<pre class='graph'>---
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
	22["eff__423 push_u64"]
	20 --> 22
	16 -. Stack .-> 22
	16["index pop_u32"]
	0 -. Stack .-> 16
	20["val mach_readMemory32_u32_64"]
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
	10["memindex__430 imm_readULEB32"]
	3 -. Codeptr .-> 10
	9["cond__429 u8.!="]
	8 --> 9
	5 --> 9
	5["arg__432 0"]
	8["arg__431 u8.&"]
	3 --> 8
	6 --> 8
	6["arg__434 0x40u8"]
	11{"memindex ϕ"}
	9 --> 11
	10 --> 11
	4 --> 11
	4["memindex__436 0u"]
	30["eff__418 push_u64"]
	28 --> 30
	24 -. Stack .-> 30
	24["index pop_u64"]
	0 -. Stack .-> 24
	28["val mach_readMemory64_u32_64"]
	11 --> 28
	24 --> 28
	23 --> 28
	23["offset imm_readULEB64"]
	12 -. Codeptr .-> 23
	14["cond__417 m_isMemory64"]
	11 --> 14
	31{{"Sϕ Codeptr "}}
	14 --> 31
	23 --> 31
	15 --> 31
</pre>`;
window.traces.I64_LOAD32_U["scheduled"] = `<pre class=''>def flags = imm_readU8();
def arg__434 : byte = 0x40u8;
def arg__431 = u8.&(flags, arg__434);
def arg__432 : byte = 0;
def cond__429 = u8.!=(arg__431, arg__432);
var memindex: u32;
if (cond__429) {
	def memindex__430 = imm_readULEB32();
} else {
	def memindex__436 : u32 = 0u;
}
// phis: memindex <- memindex__430; memindex <- memindex__436; 
def cond__417 = m_isMemory64(memindex);
if (cond__417) {
	def offset = imm_readULEB64();
	def index = pop_u64();
	def val = mach_readMemory64_u32_64(memindex, index, offset);
	def eff__418 = push_u64(val);
} else {
	def offset = imm_readULEB32();
	def index = pop_u32();
	def val = mach_readMemory32_u32_64(memindex, index, offset);
	def eff__423 = push_u64(val);
}
// phis: 
</pre>`;
window.traces.I64_LOAD32_U["pretty"] = `<pre class=''>def flags = imm_readU8();
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
	def val = mach_readMemory64_u32_64(memindex, index, offset);
	push_u64(val);
} else {
	def offset = imm_readULEB32();
	def index = pop_u32();
	def val = mach_readMemory32_u32_64(memindex, index, offset);
	push_u64(val);
}
</pre>`;
window.traces["I32_STORE"] = {}
window.traces.I32_STORE["parsed"] = `<pre class=''>def flags = imm_readU8();
def memindex : u32 = 0u;
def arg__452 : byte = 0;
def arg__454 : byte = 0x40u8;
def arg__453 = (flags);
def arg__451 = u8.&(arg__453, arg__454);
def cond__449 = u8.!=(arg__451, arg__452);
if (cond__449) {
	def memindex__450 = imm_readULEB32();
}
// phis: memindex <- memindex__450; 
def val = pop_u32();
def arg__448 = (memindex);
def cond__437 = m_isMemory64(arg__448);
if (cond__437) {
	def offset = imm_readULEB64();
	def index = pop_u64();
	def arg__442 = (val);
	def arg__441 = (offset);
	def arg__440 = (index);
	def arg__439 = (memindex);
	def eff__438 = mach_writeMemory64_u32(arg__439, arg__440, arg__441, arg__442);
} else {
	def offset = imm_readULEB32();
	def index = pop_u32();
	def arg__447 = (val);
	def arg__446 = (offset);
	def arg__445 = (index);
	def arg__444 = (memindex);
	def eff__443 = mach_writeMemory32_u32(arg__444, arg__445, arg__446, arg__447);
}
// phis: 
</pre>`;
window.traces.I32_STORE["raw"] = `<pre class='graph'>---
config:
  layout: elk
---
graph TD
	1[\\"Finish"/]
	30 -. Codeptr .-> 1
	31 -. Stack .-> 1
	0 -. Trap Locals Globals Tables Extra .-> 1
	32 -. Memory .-> 1
	32{{"Sϕ Memory "}}
	15 --> 32
	29 --> 32
	22 --> 32
	22["eff__443 mach_writeMemory32_u32"]
	11 --> 22
	17 --> 22
	16 --> 22
	13 --> 22
	0 -. Memory .-> 22
	0[/"Start"\\]
	13["val pop_u32"]
	0 -. Stack .-> 13
	16["offset imm_readULEB32"]
	12 -. Codeptr .-> 16
	12{{"Sϕ Codeptr "}}
	9 --> 12
	10 --> 12
	3 --> 12
	3["flags imm_readU8"]
	0 -. Codeptr .-> 3
	10["memindex__450 imm_readULEB32"]
	3 -. Codeptr .-> 10
	9["cond__449 u8.!="]
	8 --> 9
	5 --> 9
	5["arg__452 0"]
	8["arg__451 u8.&"]
	3 --> 8
	6 --> 8
	6["arg__454 0x40u8"]
	17["index pop_u32"]
	13 -. Stack .-> 17
	11{"memindex ϕ"}
	9 --> 11
	10 --> 11
	4 --> 11
	4["memindex__455 0u"]
	29["eff__438 mach_writeMemory64_u32"]
	11 --> 29
	24 --> 29
	23 --> 29
	13 --> 29
	0 -. Memory .-> 29
	23["offset imm_readULEB64"]
	12 -. Codeptr .-> 23
	24["index pop_u64"]
	13 -. Stack .-> 24
	15["cond__437 m_isMemory64"]
	11 --> 15
	31{{"Sϕ Stack "}}
	15 --> 31
	24 --> 31
	17 --> 31
	30{{"Sϕ Codeptr "}}
	15 --> 30
	23 --> 30
	16 --> 30
</pre>`;
window.traces.I32_STORE["overloadOps"] = `<pre class='graph'>---
config:
  layout: elk
---
graph TD
	1[\\"Finish"/]
	30 -. Codeptr .-> 1
	31 -. Stack .-> 1
	0 -. Trap Locals Globals Tables Extra .-> 1
	32 -. Memory .-> 1
	32{{"Sϕ Memory "}}
	15 --> 32
	29 --> 32
	22 --> 32
	22["eff__443 mach_writeMemory32_u32"]
	11 --> 22
	17 --> 22
	16 --> 22
	13 --> 22
	0 -. Memory .-> 22
	0[/"Start"\\]
	13["val pop_u32"]
	0 -. Stack .-> 13
	16["offset imm_readULEB32"]
	12 -. Codeptr .-> 16
	12{{"Sϕ Codeptr "}}
	9 --> 12
	10 --> 12
	3 --> 12
	3["flags imm_readU8"]
	0 -. Codeptr .-> 3
	10["memindex__450 imm_readULEB32"]
	3 -. Codeptr .-> 10
	9["cond__449 u8.!="]
	8 --> 9
	5 --> 9
	5["arg__452 0"]
	8["arg__451 u8.&"]
	3 --> 8
	6 --> 8
	6["arg__454 0x40u8"]
	17["index pop_u32"]
	13 -. Stack .-> 17
	11{"memindex ϕ"}
	9 --> 11
	10 --> 11
	4 --> 11
	4["memindex__456 0u"]
	29["eff__438 mach_writeMemory64_u32"]
	11 --> 29
	24 --> 29
	23 --> 29
	13 --> 29
	0 -. Memory .-> 29
	23["offset imm_readULEB64"]
	12 -. Codeptr .-> 23
	24["index pop_u64"]
	13 -. Stack .-> 24
	15["cond__437 m_isMemory64"]
	11 --> 15
	31{{"Sϕ Stack "}}
	15 --> 31
	24 --> 31
	17 --> 31
	30{{"Sϕ Codeptr "}}
	15 --> 30
	23 --> 30
	16 --> 30
</pre>`;
window.traces.I32_STORE["addAbstractions"] = `<pre class='graph'>---
config:
  layout: elk
---
graph TD
	1[\\"Finish"/]
	30 -. Codeptr .-> 1
	31 -. Stack .-> 1
	0 -. Trap Locals Globals Tables Extra .-> 1
	32 -. Memory .-> 1
	32{{"Sϕ Memory "}}
	15 --> 32
	29 --> 32
	22 --> 32
	22["eff__443 mach_writeMemory32_u32"]
	11 --> 22
	17 --> 22
	16 --> 22
	13 --> 22
	0 -. Memory .-> 22
	0[/"Start"\\]
	13["val pop_u32"]
	0 -. Stack .-> 13
	16["offset imm_readULEB32"]
	12 -. Codeptr .-> 16
	12{{"Sϕ Codeptr "}}
	9 --> 12
	10 --> 12
	3 --> 12
	3["flags imm_readU8"]
	0 -. Codeptr .-> 3
	10["memindex__450 imm_readULEB32"]
	3 -. Codeptr .-> 10
	9["cond__449 u8.!="]
	8 --> 9
	5 --> 9
	5["arg__452 0"]
	8["arg__451 u8.&"]
	3 --> 8
	6 --> 8
	6["arg__454 0x40u8"]
	17["index pop_u32"]
	13 -. Stack .-> 17
	11{"memindex ϕ"}
	9 --> 11
	10 --> 11
	4 --> 11
	4["memindex__456 0u"]
	29["eff__438 mach_writeMemory64_u32"]
	11 --> 29
	24 --> 29
	23 --> 29
	13 --> 29
	0 -. Memory .-> 29
	23["offset imm_readULEB64"]
	12 -. Codeptr .-> 23
	24["index pop_u64"]
	13 -. Stack .-> 24
	15["cond__437 m_isMemory64"]
	11 --> 15
	31{{"Sϕ Stack "}}
	15 --> 31
	24 --> 31
	17 --> 31
	30{{"Sϕ Codeptr "}}
	15 --> 30
	23 --> 30
	16 --> 30
</pre>`;
window.traces.I32_STORE["schedulerMermaid"] = `<pre class='graph'>graph TD
subgraph block_563["Block 563"]
	direction TB
	b563_1[\\"Finish"/]
	b563_23["offset imm_readULEB64"]
	b563_16["offset imm_readULEB32"]
	b563_24["index pop_u64"]
	b563_17["index pop_u32"]
	b563_29["eff__438 mach_writeMemory64_u32"]
	b563_22["eff__443 mach_writeMemory32_u32"]
	b563_13["val pop_u32"]
	b563_10["memindex__450 imm_readULEB32"]
	b563_4["memindex__456 0u"]
	b563_3["flags imm_readU8"]
	b563_23 --> b563_1
	b563_16 --> b563_23
	b563_24 --> b563_16
	b563_17 --> b563_24
	b563_29 --> b563_17
	b563_22 --> b563_29
	b563_13 --> b563_22
	b563_10 --> b563_13
	b563_4 --> b563_10
	b563_3 --> b563_4
end
phi_565 --> block_563
subgraph phi_565["Phi 565"]
	p565_32{{"Sϕ Memory "}}
	p565_31{{"Sϕ Stack "}}
	p565_30{{"Sϕ Codeptr "}}
end
block_566 --> phi_565
block_567 --> phi_565
subgraph block_566["Block 566"]
	direction TB
	b566_23["offset imm_readULEB64"]
	b566_24["index pop_u64"]
	b566_29["eff__438 mach_writeMemory64_u32"]
	b566_24 --> b566_23
	b566_29 --> b566_24
end
phi_570 --> block_566
subgraph phi_570["Phi 570"]
	p570_11{"memindex ϕ"}
	p570_11{"memindex ϕ"}
	p570_11{"memindex ϕ"}
	p570_11{"memindex ϕ"}
	p570_11{"memindex ϕ"}
end
block_571 --> phi_570
block_572 --> phi_570
subgraph block_571["Block 571"]
	direction TB
	b571_10["memindex__450 imm_readULEB32"]
end
branch_569 --> block_571
subgraph branch_569["Branch 569"]
	br569_9["cond__449 u8.!="]

end
branch_564 --> branch_569
subgraph branch_564["Branch 564"]
	br564_15["cond__437 m_isMemory64"]

end
block_568 --> branch_564
subgraph block_568["Block 568"]
	direction TB
	b568_15["cond__437 m_isMemory64"]
end
phi_574 --> block_568
subgraph phi_574["Phi 574"]
	p574_12{{"Sϕ Codeptr "}}
	p574_12{{"Sϕ Codeptr "}}
	p574_12{{"Sϕ Codeptr "}}
	p574_12{{"Sϕ Codeptr "}}
end
block_575 --> phi_574
block_576 --> phi_574
subgraph block_575["Block 575"]
	direction TB
	b575_10["memindex__450 imm_readULEB32"]
end
branch_573 --> block_575
subgraph branch_573["Branch 573"]
	br573_9["cond__449 u8.!="]

end
block_577 --> branch_573
subgraph block_577["Block 577"]
	direction TB
	b577_9["cond__449 u8.!="]
	b577_8["arg__451 u8.&"]
	b577_5["arg__452 0"]
	b577_6["arg__454 0x40u8"]
	b577_0[/"Start"\\]
	b577_8 --> b577_9
	b577_5 --> b577_8
	b577_6 --> b577_5
	b577_0 --> b577_6
end
subgraph block_576["Block 576"]
	direction TB
end
branch_573 --> block_576
subgraph block_572["Block 572"]
	direction TB
	b572_4["memindex__456 0u"]
end
branch_569 --> block_572
subgraph block_567["Block 567"]
	direction TB
	b567_16["offset imm_readULEB32"]
	b567_17["index pop_u32"]
	b567_22["eff__443 mach_writeMemory32_u32"]
	b567_17 --> b567_16
	b567_22 --> b567_17
end
branch_564 --> block_567

</pre>`;
window.traces.I32_STORE["unLEM"] = `<pre class='graph'>---
config:
  layout: elk
---
graph TD
	1[\\"Finish"/]
	30 -. Codeptr .-> 1
	31 -. Stack .-> 1
	0 -. Trap Locals Globals Tables Extra .-> 1
	32 -. Memory .-> 1
	32{{"Sϕ Memory "}}
	15 --> 32
	29 --> 32
	22 --> 32
	22["eff__443 mach_writeMemory32_u32"]
	11 --> 22
	17 --> 22
	16 --> 22
	13 --> 22
	0 -. Memory .-> 22
	0[/"Start"\\]
	13["val pop_u32"]
	0 -. Stack .-> 13
	16["offset imm_readULEB32"]
	12 -. Codeptr .-> 16
	12{{"Sϕ Codeptr "}}
	9 --> 12
	10 --> 12
	3 --> 12
	3["flags imm_readU8"]
	0 -. Codeptr .-> 3
	10["memindex__450 imm_readULEB32"]
	3 -. Codeptr .-> 10
	9["cond__449 u8.!="]
	8 --> 9
	5 --> 9
	5["arg__452 0"]
	8["arg__451 u8.&"]
	3 --> 8
	6 --> 8
	6["arg__454 0x40u8"]
	17["index pop_u32"]
	13 -. Stack .-> 17
	11{"memindex ϕ"}
	9 --> 11
	10 --> 11
	4 --> 11
	4["memindex__456 0u"]
	29["eff__438 mach_writeMemory64_u32"]
	11 --> 29
	24 --> 29
	23 --> 29
	13 --> 29
	0 -. Memory .-> 29
	23["offset imm_readULEB64"]
	12 -. Codeptr .-> 23
	24["index pop_u64"]
	13 -. Stack .-> 24
	15["cond__437 m_isMemory64"]
	11 --> 15
	31{{"Sϕ Stack "}}
	15 --> 31
	24 --> 31
	17 --> 31
	30{{"Sϕ Codeptr "}}
	15 --> 30
	23 --> 30
	16 --> 30
</pre>`;
window.traces.I32_STORE["unlem_schedule"] = `<pre class=''>def val = pop_u32();
def flags = imm_readU8();
def arg__454 : byte = 0x40u8;
def arg__451 = u8.&(flags, arg__454);
def arg__452 : byte = 0;
def cond__449 = u8.!=(arg__451, arg__452);
var memindex: u32;
if (cond__449) {
	def memindex__450 = imm_readULEB32();
} else {
	def memindex__456 : u32 = 0u;
}
// phis: memindex <- memindex__450; memindex <- memindex__456; 
def cond__437 = m_isMemory64(memindex);
if (cond__437) {
	def offset = imm_readULEB64();
	def index = pop_u64();
	def eff__438 = mach_writeMemory64_u32(memindex, index, offset, val);
} else {
	def offset = imm_readULEB32();
	def index = pop_u32();
	def eff__443 = mach_writeMemory32_u32(memindex, index, offset, val);
}
// phis: 
</pre>`;
window.traces.I32_STORE["unlem_scheduler"] = `<pre class='graph'>graph TD
subgraph block_578["Block 578"]
	direction TB
	b578_1[\\"Finish"/]
	b578_23["offset imm_readULEB64"]
	b578_16["offset imm_readULEB32"]
	b578_24["index pop_u64"]
	b578_17["index pop_u32"]
	b578_29["eff__438 mach_writeMemory64_u32"]
	b578_22["eff__443 mach_writeMemory32_u32"]
	b578_13["val pop_u32"]
	b578_10["memindex__450 imm_readULEB32"]
	b578_4["memindex__456 0u"]
	b578_3["flags imm_readU8"]
	b578_23 --> b578_1
	b578_16 --> b578_23
	b578_24 --> b578_16
	b578_17 --> b578_24
	b578_29 --> b578_17
	b578_22 --> b578_29
	b578_13 --> b578_22
	b578_10 --> b578_13
	b578_4 --> b578_10
	b578_3 --> b578_4
end
phi_580 --> block_578
subgraph phi_580["Phi 580"]
	p580_32{{"Sϕ Memory "}}
	p580_31{{"Sϕ Stack "}}
	p580_30{{"Sϕ Codeptr "}}
end
block_581 --> phi_580
block_582 --> phi_580
subgraph block_581["Block 581"]
	direction TB
	b581_23["offset imm_readULEB64"]
	b581_24["index pop_u64"]
	b581_29["eff__438 mach_writeMemory64_u32"]
	b581_24 --> b581_23
	b581_29 --> b581_24
end
phi_585 --> block_581
subgraph phi_585["Phi 585"]
	p585_11{"memindex ϕ"}
	p585_11{"memindex ϕ"}
	p585_11{"memindex ϕ"}
	p585_11{"memindex ϕ"}
	p585_11{"memindex ϕ"}
end
block_586 --> phi_585
block_587 --> phi_585
subgraph block_586["Block 586"]
	direction TB
	b586_10["memindex__450 imm_readULEB32"]
end
branch_584 --> block_586
subgraph branch_584["Branch 584"]
	br584_9["cond__449 u8.!="]

end
branch_579 --> branch_584
subgraph branch_579["Branch 579"]
	br579_15["cond__437 m_isMemory64"]

end
block_583 --> branch_579
subgraph block_583["Block 583"]
	direction TB
	b583_15["cond__437 m_isMemory64"]
end
phi_589 --> block_583
subgraph phi_589["Phi 589"]
	p589_12{{"Sϕ Codeptr "}}
	p589_12{{"Sϕ Codeptr "}}
	p589_12{{"Sϕ Codeptr "}}
	p589_12{{"Sϕ Codeptr "}}
end
block_590 --> phi_589
block_591 --> phi_589
subgraph block_590["Block 590"]
	direction TB
	b590_10["memindex__450 imm_readULEB32"]
end
branch_588 --> block_590
subgraph branch_588["Branch 588"]
	br588_9["cond__449 u8.!="]

end
block_592 --> branch_588
subgraph block_592["Block 592"]
	direction TB
	b592_9["cond__449 u8.!="]
	b592_8["arg__451 u8.&"]
	b592_5["arg__452 0"]
	b592_6["arg__454 0x40u8"]
	b592_0[/"Start"\\]
	b592_8 --> b592_9
	b592_5 --> b592_8
	b592_6 --> b592_5
	b592_0 --> b592_6
end
subgraph block_591["Block 591"]
	direction TB
end
branch_588 --> block_591
subgraph block_587["Block 587"]
	direction TB
	b587_4["memindex__456 0u"]
end
branch_584 --> block_587
subgraph block_582["Block 582"]
	direction TB
	b582_16["offset imm_readULEB32"]
	b582_17["index pop_u32"]
	b582_22["eff__443 mach_writeMemory32_u32"]
	b582_17 --> b582_16
	b582_22 --> b582_17
end
branch_579 --> block_582

</pre>`;
window.traces.I32_STORE["unlem_pretty"] = `<pre class=''>def val = pop_u32();
def flags = imm_readU8();
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
	mach_writeMemory64_u32(memindex, index, offset, val);
} else {
	def offset = imm_readULEB32();
	def index = pop_u32();
	mach_writeMemory32_u32(memindex, index, offset, val);
}
</pre>`;
window.traces.I32_STORE["constUnLEM"] = `<pre class='graph'>---
config:
  layout: elk
---
graph TD
	1[\\"Finish"/]
	30 -. Codeptr .-> 1
	31 -. Stack .-> 1
	0 -. Trap Locals Globals Tables Extra .-> 1
	32 -. Memory .-> 1
	32{{"Sϕ Memory "}}
	15 --> 32
	29 --> 32
	22 --> 32
	22["eff__443 mach_writeMemory32_u32"]
	11 --> 22
	17 --> 22
	16 --> 22
	13 --> 22
	0 -. Memory .-> 22
	0[/"Start"\\]
	13["val pop_u32"]
	0 -. Stack .-> 13
	16["offset imm_readULEB32"]
	12 -. Codeptr .-> 16
	12{{"Sϕ Codeptr "}}
	9 --> 12
	10 --> 12
	3 --> 12
	3["flags imm_readU8"]
	0 -. Codeptr .-> 3
	10["memindex__450 imm_readULEB32"]
	3 -. Codeptr .-> 10
	9["cond__449 u8.!="]
	8 --> 9
	5 --> 9
	5["arg__452 0"]
	8["arg__451 u8.&"]
	3 --> 8
	6 --> 8
	6["arg__454 0x40u8"]
	17["index pop_u32"]
	13 -. Stack .-> 17
	11{"memindex ϕ"}
	9 --> 11
	10 --> 11
	4 --> 11
	4["memindex__456 0u"]
	29["eff__438 mach_writeMemory64_u32"]
	11 --> 29
	24 --> 29
	23 --> 29
	13 --> 29
	0 -. Memory .-> 29
	23["offset imm_readULEB64"]
	12 -. Codeptr .-> 23
	24["index pop_u64"]
	13 -. Stack .-> 24
	15["cond__437 m_isMemory64"]
	11 --> 15
	31{{"Sϕ Stack "}}
	15 --> 31
	24 --> 31
	17 --> 31
	30{{"Sϕ Codeptr "}}
	15 --> 30
	23 --> 30
	16 --> 30
</pre>`;
window.traces.I32_STORE["chooseMerge"] = `<pre class='graph'>---
config:
  layout: elk
---
graph TD
	1[\\"Finish"/]
	30 -. Codeptr .-> 1
	31 -. Stack .-> 1
	0 -. Trap Locals Globals Tables Extra .-> 1
	32 -. Memory .-> 1
	32{{"Sϕ Memory "}}
	15 --> 32
	29 --> 32
	22 --> 32
	22["eff__443 mach_writeMemory32_u32"]
	11 --> 22
	17 --> 22
	16 --> 22
	13 --> 22
	0 -. Memory .-> 22
	0[/"Start"\\]
	13["val pop_u32"]
	0 -. Stack .-> 13
	16["offset imm_readULEB32"]
	12 -. Codeptr .-> 16
	12{{"Sϕ Codeptr "}}
	9 --> 12
	10 --> 12
	3 --> 12
	3["flags imm_readU8"]
	0 -. Codeptr .-> 3
	10["memindex__450 imm_readULEB32"]
	3 -. Codeptr .-> 10
	9["cond__449 u8.!="]
	8 --> 9
	5 --> 9
	5["arg__452 0"]
	8["arg__451 u8.&"]
	3 --> 8
	6 --> 8
	6["arg__454 0x40u8"]
	17["index pop_u32"]
	13 -. Stack .-> 17
	11{"memindex ϕ"}
	9 --> 11
	10 --> 11
	4 --> 11
	4["memindex__456 0u"]
	29["eff__438 mach_writeMemory64_u32"]
	11 --> 29
	24 --> 29
	23 --> 29
	13 --> 29
	0 -. Memory .-> 29
	23["offset imm_readULEB64"]
	12 -. Codeptr .-> 23
	24["index pop_u64"]
	13 -. Stack .-> 24
	15["cond__437 m_isMemory64"]
	11 --> 15
	31{{"Sϕ Stack "}}
	15 --> 31
	24 --> 31
	17 --> 31
	30{{"Sϕ Codeptr "}}
	15 --> 30
	23 --> 30
	16 --> 30
</pre>`;
window.traces.I32_STORE["scheduled"] = `<pre class=''>def val = pop_u32();
def flags = imm_readU8();
def arg__454 : byte = 0x40u8;
def arg__451 = u8.&(flags, arg__454);
def arg__452 : byte = 0;
def cond__449 = u8.!=(arg__451, arg__452);
var memindex: u32;
if (cond__449) {
	def memindex__450 = imm_readULEB32();
} else {
	def memindex__456 : u32 = 0u;
}
// phis: memindex <- memindex__450; memindex <- memindex__456; 
def cond__437 = m_isMemory64(memindex);
if (cond__437) {
	def offset = imm_readULEB64();
	def index = pop_u64();
	def eff__438 = mach_writeMemory64_u32(memindex, index, offset, val);
} else {
	def offset = imm_readULEB32();
	def index = pop_u32();
	def eff__443 = mach_writeMemory32_u32(memindex, index, offset, val);
}
// phis: 
</pre>`;
window.traces.I32_STORE["pretty"] = `<pre class=''>def val = pop_u32();
def flags = imm_readU8();
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
	mach_writeMemory64_u32(memindex, index, offset, val);
} else {
	def offset = imm_readULEB32();
	def index = pop_u32();
	mach_writeMemory32_u32(memindex, index, offset, val);
}
</pre>`;
window.traces["I64_STORE"] = {}
window.traces.I64_STORE["parsed"] = `<pre class=''>def flags = imm_readU8();
def memindex : u32 = 0u;
def arg__472 : byte = 0;
def arg__474 : byte = 0x40u8;
def arg__473 = (flags);
def arg__471 = u8.&(arg__473, arg__474);
def cond__469 = u8.!=(arg__471, arg__472);
if (cond__469) {
	def memindex__470 = imm_readULEB32();
}
// phis: memindex <- memindex__470; 
def val = pop_u64();
def arg__468 = (memindex);
def cond__457 = m_isMemory64(arg__468);
if (cond__457) {
	def offset = imm_readULEB64();
	def index = pop_u64();
	def arg__462 = (val);
	def arg__461 = (offset);
	def arg__460 = (index);
	def arg__459 = (memindex);
	def eff__458 = mach_writeMemory64_u64(arg__459, arg__460, arg__461, arg__462);
} else {
	def offset = imm_readULEB32();
	def index = pop_u32();
	def arg__467 = (val);
	def arg__466 = (offset);
	def arg__465 = (index);
	def arg__464 = (memindex);
	def eff__463 = mach_writeMemory32_u64(arg__464, arg__465, arg__466, arg__467);
}
// phis: 
</pre>`;
window.traces.I64_STORE["raw"] = `<pre class='graph'>---
config:
  layout: elk
---
graph TD
	1[\\"Finish"/]
	30 -. Codeptr .-> 1
	31 -. Stack .-> 1
	0 -. Trap Locals Globals Tables Extra .-> 1
	32 -. Memory .-> 1
	32{{"Sϕ Memory "}}
	15 --> 32
	29 --> 32
	22 --> 32
	22["eff__463 mach_writeMemory32_u64"]
	11 --> 22
	17 --> 22
	16 --> 22
	13 --> 22
	0 -. Memory .-> 22
	0[/"Start"\\]
	13["val pop_u64"]
	0 -. Stack .-> 13
	16["offset imm_readULEB32"]
	12 -. Codeptr .-> 16
	12{{"Sϕ Codeptr "}}
	9 --> 12
	10 --> 12
	3 --> 12
	3["flags imm_readU8"]
	0 -. Codeptr .-> 3
	10["memindex__470 imm_readULEB32"]
	3 -. Codeptr .-> 10
	9["cond__469 u8.!="]
	8 --> 9
	5 --> 9
	5["arg__472 0"]
	8["arg__471 u8.&"]
	3 --> 8
	6 --> 8
	6["arg__474 0x40u8"]
	17["index pop_u32"]
	13 -. Stack .-> 17
	11{"memindex ϕ"}
	9 --> 11
	10 --> 11
	4 --> 11
	4["memindex__475 0u"]
	29["eff__458 mach_writeMemory64_u64"]
	11 --> 29
	24 --> 29
	23 --> 29
	13 --> 29
	0 -. Memory .-> 29
	23["offset imm_readULEB64"]
	12 -. Codeptr .-> 23
	24["index pop_u64"]
	13 -. Stack .-> 24
	15["cond__457 m_isMemory64"]
	11 --> 15
	31{{"Sϕ Stack "}}
	15 --> 31
	24 --> 31
	17 --> 31
	30{{"Sϕ Codeptr "}}
	15 --> 30
	23 --> 30
	16 --> 30
</pre>`;
window.traces.I64_STORE["overloadOps"] = `<pre class='graph'>---
config:
  layout: elk
---
graph TD
	1[\\"Finish"/]
	30 -. Codeptr .-> 1
	31 -. Stack .-> 1
	0 -. Trap Locals Globals Tables Extra .-> 1
	32 -. Memory .-> 1
	32{{"Sϕ Memory "}}
	15 --> 32
	29 --> 32
	22 --> 32
	22["eff__463 mach_writeMemory32_u64"]
	11 --> 22
	17 --> 22
	16 --> 22
	13 --> 22
	0 -. Memory .-> 22
	0[/"Start"\\]
	13["val pop_u64"]
	0 -. Stack .-> 13
	16["offset imm_readULEB32"]
	12 -. Codeptr .-> 16
	12{{"Sϕ Codeptr "}}
	9 --> 12
	10 --> 12
	3 --> 12
	3["flags imm_readU8"]
	0 -. Codeptr .-> 3
	10["memindex__470 imm_readULEB32"]
	3 -. Codeptr .-> 10
	9["cond__469 u8.!="]
	8 --> 9
	5 --> 9
	5["arg__472 0"]
	8["arg__471 u8.&"]
	3 --> 8
	6 --> 8
	6["arg__474 0x40u8"]
	17["index pop_u32"]
	13 -. Stack .-> 17
	11{"memindex ϕ"}
	9 --> 11
	10 --> 11
	4 --> 11
	4["memindex__476 0u"]
	29["eff__458 mach_writeMemory64_u64"]
	11 --> 29
	24 --> 29
	23 --> 29
	13 --> 29
	0 -. Memory .-> 29
	23["offset imm_readULEB64"]
	12 -. Codeptr .-> 23
	24["index pop_u64"]
	13 -. Stack .-> 24
	15["cond__457 m_isMemory64"]
	11 --> 15
	31{{"Sϕ Stack "}}
	15 --> 31
	24 --> 31
	17 --> 31
	30{{"Sϕ Codeptr "}}
	15 --> 30
	23 --> 30
	16 --> 30
</pre>`;
window.traces.I64_STORE["addAbstractions"] = `<pre class='graph'>---
config:
  layout: elk
---
graph TD
	1[\\"Finish"/]
	30 -. Codeptr .-> 1
	31 -. Stack .-> 1
	0 -. Trap Locals Globals Tables Extra .-> 1
	32 -. Memory .-> 1
	32{{"Sϕ Memory "}}
	15 --> 32
	29 --> 32
	22 --> 32
	22["eff__463 mach_writeMemory32_u64"]
	11 --> 22
	17 --> 22
	16 --> 22
	13 --> 22
	0 -. Memory .-> 22
	0[/"Start"\\]
	13["val pop_u64"]
	0 -. Stack .-> 13
	16["offset imm_readULEB32"]
	12 -. Codeptr .-> 16
	12{{"Sϕ Codeptr "}}
	9 --> 12
	10 --> 12
	3 --> 12
	3["flags imm_readU8"]
	0 -. Codeptr .-> 3
	10["memindex__470 imm_readULEB32"]
	3 -. Codeptr .-> 10
	9["cond__469 u8.!="]
	8 --> 9
	5 --> 9
	5["arg__472 0"]
	8["arg__471 u8.&"]
	3 --> 8
	6 --> 8
	6["arg__474 0x40u8"]
	17["index pop_u32"]
	13 -. Stack .-> 17
	11{"memindex ϕ"}
	9 --> 11
	10 --> 11
	4 --> 11
	4["memindex__476 0u"]
	29["eff__458 mach_writeMemory64_u64"]
	11 --> 29
	24 --> 29
	23 --> 29
	13 --> 29
	0 -. Memory .-> 29
	23["offset imm_readULEB64"]
	12 -. Codeptr .-> 23
	24["index pop_u64"]
	13 -. Stack .-> 24
	15["cond__457 m_isMemory64"]
	11 --> 15
	31{{"Sϕ Stack "}}
	15 --> 31
	24 --> 31
	17 --> 31
	30{{"Sϕ Codeptr "}}
	15 --> 30
	23 --> 30
	16 --> 30
</pre>`;
window.traces.I64_STORE["schedulerMermaid"] = `<pre class='graph'>graph TD
subgraph block_593["Block 593"]
	direction TB
	b593_1[\\"Finish"/]
	b593_23["offset imm_readULEB64"]
	b593_16["offset imm_readULEB32"]
	b593_24["index pop_u64"]
	b593_17["index pop_u32"]
	b593_29["eff__458 mach_writeMemory64_u64"]
	b593_22["eff__463 mach_writeMemory32_u64"]
	b593_13["val pop_u64"]
	b593_10["memindex__470 imm_readULEB32"]
	b593_4["memindex__476 0u"]
	b593_3["flags imm_readU8"]
	b593_23 --> b593_1
	b593_16 --> b593_23
	b593_24 --> b593_16
	b593_17 --> b593_24
	b593_29 --> b593_17
	b593_22 --> b593_29
	b593_13 --> b593_22
	b593_10 --> b593_13
	b593_4 --> b593_10
	b593_3 --> b593_4
end
phi_595 --> block_593
subgraph phi_595["Phi 595"]
	p595_32{{"Sϕ Memory "}}
	p595_31{{"Sϕ Stack "}}
	p595_30{{"Sϕ Codeptr "}}
end
block_596 --> phi_595
block_597 --> phi_595
subgraph block_596["Block 596"]
	direction TB
	b596_23["offset imm_readULEB64"]
	b596_24["index pop_u64"]
	b596_29["eff__458 mach_writeMemory64_u64"]
	b596_24 --> b596_23
	b596_29 --> b596_24
end
phi_600 --> block_596
subgraph phi_600["Phi 600"]
	p600_11{"memindex ϕ"}
	p600_11{"memindex ϕ"}
	p600_11{"memindex ϕ"}
	p600_11{"memindex ϕ"}
	p600_11{"memindex ϕ"}
end
block_601 --> phi_600
block_602 --> phi_600
subgraph block_601["Block 601"]
	direction TB
	b601_10["memindex__470 imm_readULEB32"]
end
branch_599 --> block_601
subgraph branch_599["Branch 599"]
	br599_9["cond__469 u8.!="]

end
branch_594 --> branch_599
subgraph branch_594["Branch 594"]
	br594_15["cond__457 m_isMemory64"]

end
block_598 --> branch_594
subgraph block_598["Block 598"]
	direction TB
	b598_15["cond__457 m_isMemory64"]
end
phi_604 --> block_598
subgraph phi_604["Phi 604"]
	p604_12{{"Sϕ Codeptr "}}
	p604_12{{"Sϕ Codeptr "}}
	p604_12{{"Sϕ Codeptr "}}
	p604_12{{"Sϕ Codeptr "}}
end
block_605 --> phi_604
block_606 --> phi_604
subgraph block_605["Block 605"]
	direction TB
	b605_10["memindex__470 imm_readULEB32"]
end
branch_603 --> block_605
subgraph branch_603["Branch 603"]
	br603_9["cond__469 u8.!="]

end
block_607 --> branch_603
subgraph block_607["Block 607"]
	direction TB
	b607_9["cond__469 u8.!="]
	b607_8["arg__471 u8.&"]
	b607_5["arg__472 0"]
	b607_6["arg__474 0x40u8"]
	b607_0[/"Start"\\]
	b607_8 --> b607_9
	b607_5 --> b607_8
	b607_6 --> b607_5
	b607_0 --> b607_6
end
subgraph block_606["Block 606"]
	direction TB
end
branch_603 --> block_606
subgraph block_602["Block 602"]
	direction TB
	b602_4["memindex__476 0u"]
end
branch_599 --> block_602
subgraph block_597["Block 597"]
	direction TB
	b597_16["offset imm_readULEB32"]
	b597_17["index pop_u32"]
	b597_22["eff__463 mach_writeMemory32_u64"]
	b597_17 --> b597_16
	b597_22 --> b597_17
end
branch_594 --> block_597

</pre>`;
window.traces.I64_STORE["unLEM"] = `<pre class='graph'>---
config:
  layout: elk
---
graph TD
	1[\\"Finish"/]
	30 -. Codeptr .-> 1
	31 -. Stack .-> 1
	0 -. Trap Locals Globals Tables Extra .-> 1
	32 -. Memory .-> 1
	32{{"Sϕ Memory "}}
	15 --> 32
	29 --> 32
	22 --> 32
	22["eff__463 mach_writeMemory32_u64"]
	11 --> 22
	17 --> 22
	16 --> 22
	13 --> 22
	0 -. Memory .-> 22
	0[/"Start"\\]
	13["val pop_u64"]
	0 -. Stack .-> 13
	16["offset imm_readULEB32"]
	12 -. Codeptr .-> 16
	12{{"Sϕ Codeptr "}}
	9 --> 12
	10 --> 12
	3 --> 12
	3["flags imm_readU8"]
	0 -. Codeptr .-> 3
	10["memindex__470 imm_readULEB32"]
	3 -. Codeptr .-> 10
	9["cond__469 u8.!="]
	8 --> 9
	5 --> 9
	5["arg__472 0"]
	8["arg__471 u8.&"]
	3 --> 8
	6 --> 8
	6["arg__474 0x40u8"]
	17["index pop_u32"]
	13 -. Stack .-> 17
	11{"memindex ϕ"}
	9 --> 11
	10 --> 11
	4 --> 11
	4["memindex__476 0u"]
	29["eff__458 mach_writeMemory64_u64"]
	11 --> 29
	24 --> 29
	23 --> 29
	13 --> 29
	0 -. Memory .-> 29
	23["offset imm_readULEB64"]
	12 -. Codeptr .-> 23
	24["index pop_u64"]
	13 -. Stack .-> 24
	15["cond__457 m_isMemory64"]
	11 --> 15
	31{{"Sϕ Stack "}}
	15 --> 31
	24 --> 31
	17 --> 31
	30{{"Sϕ Codeptr "}}
	15 --> 30
	23 --> 30
	16 --> 30
</pre>`;
window.traces.I64_STORE["unlem_schedule"] = `<pre class=''>def val = pop_u64();
def flags = imm_readU8();
def arg__474 : byte = 0x40u8;
def arg__471 = u8.&(flags, arg__474);
def arg__472 : byte = 0;
def cond__469 = u8.!=(arg__471, arg__472);
var memindex: u32;
if (cond__469) {
	def memindex__470 = imm_readULEB32();
} else {
	def memindex__476 : u32 = 0u;
}
// phis: memindex <- memindex__470; memindex <- memindex__476; 
def cond__457 = m_isMemory64(memindex);
if (cond__457) {
	def offset = imm_readULEB64();
	def index = pop_u64();
	def eff__458 = mach_writeMemory64_u64(memindex, index, offset, val);
} else {
	def offset = imm_readULEB32();
	def index = pop_u32();
	def eff__463 = mach_writeMemory32_u64(memindex, index, offset, val);
}
// phis: 
</pre>`;
window.traces.I64_STORE["unlem_scheduler"] = `<pre class='graph'>graph TD
subgraph block_608["Block 608"]
	direction TB
	b608_1[\\"Finish"/]
	b608_23["offset imm_readULEB64"]
	b608_16["offset imm_readULEB32"]
	b608_24["index pop_u64"]
	b608_17["index pop_u32"]
	b608_29["eff__458 mach_writeMemory64_u64"]
	b608_22["eff__463 mach_writeMemory32_u64"]
	b608_13["val pop_u64"]
	b608_10["memindex__470 imm_readULEB32"]
	b608_4["memindex__476 0u"]
	b608_3["flags imm_readU8"]
	b608_23 --> b608_1
	b608_16 --> b608_23
	b608_24 --> b608_16
	b608_17 --> b608_24
	b608_29 --> b608_17
	b608_22 --> b608_29
	b608_13 --> b608_22
	b608_10 --> b608_13
	b608_4 --> b608_10
	b608_3 --> b608_4
end
phi_610 --> block_608
subgraph phi_610["Phi 610"]
	p610_32{{"Sϕ Memory "}}
	p610_31{{"Sϕ Stack "}}
	p610_30{{"Sϕ Codeptr "}}
end
block_611 --> phi_610
block_612 --> phi_610
subgraph block_611["Block 611"]
	direction TB
	b611_23["offset imm_readULEB64"]
	b611_24["index pop_u64"]
	b611_29["eff__458 mach_writeMemory64_u64"]
	b611_24 --> b611_23
	b611_29 --> b611_24
end
phi_615 --> block_611
subgraph phi_615["Phi 615"]
	p615_11{"memindex ϕ"}
	p615_11{"memindex ϕ"}
	p615_11{"memindex ϕ"}
	p615_11{"memindex ϕ"}
	p615_11{"memindex ϕ"}
end
block_616 --> phi_615
block_617 --> phi_615
subgraph block_616["Block 616"]
	direction TB
	b616_10["memindex__470 imm_readULEB32"]
end
branch_614 --> block_616
subgraph branch_614["Branch 614"]
	br614_9["cond__469 u8.!="]

end
branch_609 --> branch_614
subgraph branch_609["Branch 609"]
	br609_15["cond__457 m_isMemory64"]

end
block_613 --> branch_609
subgraph block_613["Block 613"]
	direction TB
	b613_15["cond__457 m_isMemory64"]
end
phi_619 --> block_613
subgraph phi_619["Phi 619"]
	p619_12{{"Sϕ Codeptr "}}
	p619_12{{"Sϕ Codeptr "}}
	p619_12{{"Sϕ Codeptr "}}
	p619_12{{"Sϕ Codeptr "}}
end
block_620 --> phi_619
block_621 --> phi_619
subgraph block_620["Block 620"]
	direction TB
	b620_10["memindex__470 imm_readULEB32"]
end
branch_618 --> block_620
subgraph branch_618["Branch 618"]
	br618_9["cond__469 u8.!="]

end
block_622 --> branch_618
subgraph block_622["Block 622"]
	direction TB
	b622_9["cond__469 u8.!="]
	b622_8["arg__471 u8.&"]
	b622_5["arg__472 0"]
	b622_6["arg__474 0x40u8"]
	b622_0[/"Start"\\]
	b622_8 --> b622_9
	b622_5 --> b622_8
	b622_6 --> b622_5
	b622_0 --> b622_6
end
subgraph block_621["Block 621"]
	direction TB
end
branch_618 --> block_621
subgraph block_617["Block 617"]
	direction TB
	b617_4["memindex__476 0u"]
end
branch_614 --> block_617
subgraph block_612["Block 612"]
	direction TB
	b612_16["offset imm_readULEB32"]
	b612_17["index pop_u32"]
	b612_22["eff__463 mach_writeMemory32_u64"]
	b612_17 --> b612_16
	b612_22 --> b612_17
end
branch_609 --> block_612

</pre>`;
window.traces.I64_STORE["unlem_pretty"] = `<pre class=''>def val = pop_u64();
def flags = imm_readU8();
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
	mach_writeMemory64_u64(memindex, index, offset, val);
} else {
	def offset = imm_readULEB32();
	def index = pop_u32();
	mach_writeMemory32_u64(memindex, index, offset, val);
}
</pre>`;
window.traces.I64_STORE["constUnLEM"] = `<pre class='graph'>---
config:
  layout: elk
---
graph TD
	1[\\"Finish"/]
	30 -. Codeptr .-> 1
	31 -. Stack .-> 1
	0 -. Trap Locals Globals Tables Extra .-> 1
	32 -. Memory .-> 1
	32{{"Sϕ Memory "}}
	15 --> 32
	29 --> 32
	22 --> 32
	22["eff__463 mach_writeMemory32_u64"]
	11 --> 22
	17 --> 22
	16 --> 22
	13 --> 22
	0 -. Memory .-> 22
	0[/"Start"\\]
	13["val pop_u64"]
	0 -. Stack .-> 13
	16["offset imm_readULEB32"]
	12 -. Codeptr .-> 16
	12{{"Sϕ Codeptr "}}
	9 --> 12
	10 --> 12
	3 --> 12
	3["flags imm_readU8"]
	0 -. Codeptr .-> 3
	10["memindex__470 imm_readULEB32"]
	3 -. Codeptr .-> 10
	9["cond__469 u8.!="]
	8 --> 9
	5 --> 9
	5["arg__472 0"]
	8["arg__471 u8.&"]
	3 --> 8
	6 --> 8
	6["arg__474 0x40u8"]
	17["index pop_u32"]
	13 -. Stack .-> 17
	11{"memindex ϕ"}
	9 --> 11
	10 --> 11
	4 --> 11
	4["memindex__476 0u"]
	29["eff__458 mach_writeMemory64_u64"]
	11 --> 29
	24 --> 29
	23 --> 29
	13 --> 29
	0 -. Memory .-> 29
	23["offset imm_readULEB64"]
	12 -. Codeptr .-> 23
	24["index pop_u64"]
	13 -. Stack .-> 24
	15["cond__457 m_isMemory64"]
	11 --> 15
	31{{"Sϕ Stack "}}
	15 --> 31
	24 --> 31
	17 --> 31
	30{{"Sϕ Codeptr "}}
	15 --> 30
	23 --> 30
	16 --> 30
</pre>`;
window.traces.I64_STORE["chooseMerge"] = `<pre class='graph'>---
config:
  layout: elk
---
graph TD
	1[\\"Finish"/]
	30 -. Codeptr .-> 1
	31 -. Stack .-> 1
	0 -. Trap Locals Globals Tables Extra .-> 1
	32 -. Memory .-> 1
	32{{"Sϕ Memory "}}
	15 --> 32
	29 --> 32
	22 --> 32
	22["eff__463 mach_writeMemory32_u64"]
	11 --> 22
	17 --> 22
	16 --> 22
	13 --> 22
	0 -. Memory .-> 22
	0[/"Start"\\]
	13["val pop_u64"]
	0 -. Stack .-> 13
	16["offset imm_readULEB32"]
	12 -. Codeptr .-> 16
	12{{"Sϕ Codeptr "}}
	9 --> 12
	10 --> 12
	3 --> 12
	3["flags imm_readU8"]
	0 -. Codeptr .-> 3
	10["memindex__470 imm_readULEB32"]
	3 -. Codeptr .-> 10
	9["cond__469 u8.!="]
	8 --> 9
	5 --> 9
	5["arg__472 0"]
	8["arg__471 u8.&"]
	3 --> 8
	6 --> 8
	6["arg__474 0x40u8"]
	17["index pop_u32"]
	13 -. Stack .-> 17
	11{"memindex ϕ"}
	9 --> 11
	10 --> 11
	4 --> 11
	4["memindex__476 0u"]
	29["eff__458 mach_writeMemory64_u64"]
	11 --> 29
	24 --> 29
	23 --> 29
	13 --> 29
	0 -. Memory .-> 29
	23["offset imm_readULEB64"]
	12 -. Codeptr .-> 23
	24["index pop_u64"]
	13 -. Stack .-> 24
	15["cond__457 m_isMemory64"]
	11 --> 15
	31{{"Sϕ Stack "}}
	15 --> 31
	24 --> 31
	17 --> 31
	30{{"Sϕ Codeptr "}}
	15 --> 30
	23 --> 30
	16 --> 30
</pre>`;
window.traces.I64_STORE["scheduled"] = `<pre class=''>def val = pop_u64();
def flags = imm_readU8();
def arg__474 : byte = 0x40u8;
def arg__471 = u8.&(flags, arg__474);
def arg__472 : byte = 0;
def cond__469 = u8.!=(arg__471, arg__472);
var memindex: u32;
if (cond__469) {
	def memindex__470 = imm_readULEB32();
} else {
	def memindex__476 : u32 = 0u;
}
// phis: memindex <- memindex__470; memindex <- memindex__476; 
def cond__457 = m_isMemory64(memindex);
if (cond__457) {
	def offset = imm_readULEB64();
	def index = pop_u64();
	def eff__458 = mach_writeMemory64_u64(memindex, index, offset, val);
} else {
	def offset = imm_readULEB32();
	def index = pop_u32();
	def eff__463 = mach_writeMemory32_u64(memindex, index, offset, val);
}
// phis: 
</pre>`;
window.traces.I64_STORE["pretty"] = `<pre class=''>def val = pop_u64();
def flags = imm_readU8();
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
	mach_writeMemory64_u64(memindex, index, offset, val);
} else {
	def offset = imm_readULEB32();
	def index = pop_u32();
	mach_writeMemory32_u64(memindex, index, offset, val);
}
</pre>`;
window.traces["F32_STORE"] = {}
window.traces.F32_STORE["parsed"] = `<pre class=''>def flags = imm_readU8();
def memindex : u32 = 0u;
def arg__492 : byte = 0;
def arg__494 : byte = 0x40u8;
def arg__493 = (flags);
def arg__491 = u8.&(arg__493, arg__494);
def cond__489 = u8.!=(arg__491, arg__492);
if (cond__489) {
	def memindex__490 = imm_readULEB32();
}
// phis: memindex <- memindex__490; 
def val = pop_f32();
def arg__488 = (memindex);
def cond__477 = m_isMemory64(arg__488);
if (cond__477) {
	def offset = imm_readULEB64();
	def index = pop_u64();
	def arg__482 = (val);
	def arg__481 = (offset);
	def arg__480 = (index);
	def arg__479 = (memindex);
	def eff__478 = mach_writeMemory64_f32(arg__479, arg__480, arg__481, arg__482);
} else {
	def offset = imm_readULEB32();
	def index = pop_u32();
	def arg__487 = (val);
	def arg__486 = (offset);
	def arg__485 = (index);
	def arg__484 = (memindex);
	def eff__483 = mach_writeMemory32_f32(arg__484, arg__485, arg__486, arg__487);
}
// phis: 
</pre>`;
window.traces.F32_STORE["raw"] = `<pre class='graph'>---
config:
  layout: elk
---
graph TD
	1[\\"Finish"/]
	30 -. Codeptr .-> 1
	31 -. Stack .-> 1
	0 -. Trap Locals Globals Tables Memory Extra .-> 1
	0[/"Start"\\]
	31{{"Sϕ Stack "}}
	15 --> 31
	24 --> 31
	17 --> 31
	17["index pop_u32"]
	13 -. Stack .-> 17
	13["val pop_f32"]
	0 -. Stack .-> 13
	24["index pop_u64"]
	13 -. Stack .-> 24
	15["cond__477 m_isMemory64"]
	11 --> 15
	11{"memindex ϕ"}
	9 --> 11
	10 --> 11
	4 --> 11
	4["memindex__495 0u"]
	10["memindex__490 imm_readULEB32"]
	3 -. Codeptr .-> 10
	3["flags imm_readU8"]
	0 -. Codeptr .-> 3
	9["cond__489 u8.!="]
	8 --> 9
	5 --> 9
	5["arg__492 0"]
	8["arg__491 u8.&"]
	3 --> 8
	6 --> 8
	6["arg__494 0x40u8"]
	30{{"Sϕ Codeptr "}}
	15 --> 30
	23 --> 30
	16 --> 30
	16["offset imm_readULEB32"]
	12 -. Codeptr .-> 16
	12{{"Sϕ Codeptr "}}
	9 --> 12
	10 --> 12
	3 --> 12
	23["offset imm_readULEB64"]
	12 -. Codeptr .-> 23
</pre>`;
window.traces.F32_STORE["overloadOps"] = `<pre class='graph'>---
config:
  layout: elk
---
graph TD
	1[\\"Finish"/]
	30 -. Codeptr .-> 1
	31 -. Stack .-> 1
	0 -. Trap Locals Globals Tables Memory Extra .-> 1
	0[/"Start"\\]
	31{{"Sϕ Stack "}}
	15 --> 31
	24 --> 31
	17 --> 31
	17["index pop_u32"]
	13 -. Stack .-> 17
	13["val pop_f32"]
	0 -. Stack .-> 13
	24["index pop_u64"]
	13 -. Stack .-> 24
	15["cond__477 m_isMemory64"]
	11 --> 15
	11{"memindex ϕ"}
	9 --> 11
	10 --> 11
	4 --> 11
	4["memindex__496 0u"]
	10["memindex__490 imm_readULEB32"]
	3 -. Codeptr .-> 10
	3["flags imm_readU8"]
	0 -. Codeptr .-> 3
	9["cond__489 u8.!="]
	8 --> 9
	5 --> 9
	5["arg__492 0"]
	8["arg__491 u8.&"]
	3 --> 8
	6 --> 8
	6["arg__494 0x40u8"]
	30{{"Sϕ Codeptr "}}
	15 --> 30
	23 --> 30
	16 --> 30
	16["offset imm_readULEB32"]
	12 -. Codeptr .-> 16
	12{{"Sϕ Codeptr "}}
	9 --> 12
	10 --> 12
	3 --> 12
	23["offset imm_readULEB64"]
	12 -. Codeptr .-> 23
</pre>`;
window.traces.F32_STORE["addAbstractions"] = `<pre class='graph'>---
config:
  layout: elk
---
graph TD
	1[\\"Finish"/]
	30 -. Codeptr .-> 1
	31 -. Stack .-> 1
	0 -. Trap Locals Globals Tables Memory Extra .-> 1
	0[/"Start"\\]
	31{{"Sϕ Stack "}}
	15 --> 31
	24 --> 31
	17 --> 31
	17["index pop_u32"]
	13 -. Stack .-> 17
	13["val pop_f32"]
	0 -. Stack .-> 13
	24["index pop_u64"]
	13 -. Stack .-> 24
	15["cond__477 m_isMemory64"]
	11 --> 15
	11{"memindex ϕ"}
	9 --> 11
	10 --> 11
	4 --> 11
	4["memindex__496 0u"]
	10["memindex__490 imm_readULEB32"]
	3 -. Codeptr .-> 10
	3["flags imm_readU8"]
	0 -. Codeptr .-> 3
	9["cond__489 u8.!="]
	8 --> 9
	5 --> 9
	5["arg__492 0"]
	8["arg__491 u8.&"]
	3 --> 8
	6 --> 8
	6["arg__494 0x40u8"]
	30{{"Sϕ Codeptr "}}
	15 --> 30
	23 --> 30
	16 --> 30
	16["offset imm_readULEB32"]
	12 -. Codeptr .-> 16
	12{{"Sϕ Codeptr "}}
	9 --> 12
	10 --> 12
	3 --> 12
	23["offset imm_readULEB64"]
	12 -. Codeptr .-> 23
</pre>`;
window.traces.F32_STORE["schedulerMermaid"] = `<pre class='graph'>graph TD
subgraph block_623["Block 623"]
	direction TB
	b623_1[\\"Finish"/]
	b623_23["offset imm_readULEB64"]
	b623_16["offset imm_readULEB32"]
	b623_24["index pop_u64"]
	b623_17["index pop_u32"]
	b623_13["val pop_f32"]
	b623_10["memindex__490 imm_readULEB32"]
	b623_4["memindex__496 0u"]
	b623_3["flags imm_readU8"]
	b623_23 --> b623_1
	b623_16 --> b623_23
	b623_24 --> b623_16
	b623_17 --> b623_24
	b623_13 --> b623_17
	b623_10 --> b623_13
	b623_4 --> b623_10
	b623_3 --> b623_4
end
phi_625 --> block_623
subgraph phi_625["Phi 625"]
	p625_31{{"Sϕ Stack "}}
	p625_30{{"Sϕ Codeptr "}}
end
block_626 --> phi_625
block_627 --> phi_625
subgraph block_626["Block 626"]
	direction TB
	b626_23["offset imm_readULEB64"]
	b626_24["index pop_u64"]
	b626_24 --> b626_23
end
phi_630 --> block_626
subgraph phi_630["Phi 630"]
	p630_11{"memindex ϕ"}
	p630_11{"memindex ϕ"}
end
block_631 --> phi_630
block_632 --> phi_630
subgraph block_631["Block 631"]
	direction TB
	b631_10["memindex__490 imm_readULEB32"]
end
branch_629 --> block_631
subgraph branch_629["Branch 629"]
	br629_9["cond__489 u8.!="]

end
branch_624 --> branch_629
subgraph branch_624["Branch 624"]
	br624_15["cond__477 m_isMemory64"]

end
block_628 --> branch_624
subgraph block_628["Block 628"]
	direction TB
	b628_15["cond__477 m_isMemory64"]
end
phi_634 --> block_628
subgraph phi_634["Phi 634"]
	p634_12{{"Sϕ Codeptr "}}
	p634_12{{"Sϕ Codeptr "}}
end
block_635 --> phi_634
block_636 --> phi_634
subgraph block_635["Block 635"]
	direction TB
	b635_10["memindex__490 imm_readULEB32"]
end
branch_633 --> block_635
subgraph branch_633["Branch 633"]
	br633_9["cond__489 u8.!="]

end
block_637 --> branch_633
subgraph block_637["Block 637"]
	direction TB
	b637_9["cond__489 u8.!="]
	b637_8["arg__491 u8.&"]
	b637_5["arg__492 0"]
	b637_6["arg__494 0x40u8"]
	b637_0[/"Start"\\]
	b637_8 --> b637_9
	b637_5 --> b637_8
	b637_6 --> b637_5
	b637_0 --> b637_6
end
subgraph block_636["Block 636"]
	direction TB
end
branch_633 --> block_636
subgraph block_632["Block 632"]
	direction TB
	b632_4["memindex__496 0u"]
end
branch_629 --> block_632
subgraph block_627["Block 627"]
	direction TB
	b627_16["offset imm_readULEB32"]
	b627_17["index pop_u32"]
	b627_17 --> b627_16
end
branch_624 --> block_627

</pre>`;
window.traces.F32_STORE["unLEM"] = `<pre class='graph'>---
config:
  layout: elk
---
graph TD
	1[\\"Finish"/]
	30 -. Codeptr .-> 1
	31 -. Stack .-> 1
	0 -. Trap Locals Globals Tables Memory Extra .-> 1
	0[/"Start"\\]
	31{{"Sϕ Stack "}}
	15 --> 31
	24 --> 31
	17 --> 31
	17["index pop_u32"]
	13 -. Stack .-> 17
	13["val pop_f32"]
	0 -. Stack .-> 13
	24["index pop_u64"]
	13 -. Stack .-> 24
	15["cond__477 m_isMemory64"]
	11 --> 15
	11{"memindex ϕ"}
	9 --> 11
	10 --> 11
	4 --> 11
	4["memindex__496 0u"]
	10["memindex__490 imm_readULEB32"]
	3 -. Codeptr .-> 10
	3["flags imm_readU8"]
	0 -. Codeptr .-> 3
	9["cond__489 u8.!="]
	8 --> 9
	5 --> 9
	5["arg__492 0"]
	8["arg__491 u8.&"]
	3 --> 8
	6 --> 8
	6["arg__494 0x40u8"]
	30{{"Sϕ Codeptr "}}
	15 --> 30
	23 --> 30
	16 --> 30
	16["offset imm_readULEB32"]
	12 -. Codeptr .-> 16
	12{{"Sϕ Codeptr "}}
	9 --> 12
	10 --> 12
	3 --> 12
	23["offset imm_readULEB64"]
	12 -. Codeptr .-> 23
</pre>`;
window.traces.F32_STORE["unlem_schedule"] = `<pre class=''>def val = pop_f32();
def flags = imm_readU8();
def arg__494 : byte = 0x40u8;
def arg__491 = u8.&(flags, arg__494);
def arg__492 : byte = 0;
def cond__489 = u8.!=(arg__491, arg__492);
var memindex: u32;
if (cond__489) {
	def memindex__490 = imm_readULEB32();
} else {
	def memindex__496 : u32 = 0u;
}
// phis: memindex <- memindex__490; memindex <- memindex__496; 
def cond__477 = m_isMemory64(memindex);
if (cond__477) {
	def offset = imm_readULEB64();
	def index = pop_u64();
} else {
	def offset = imm_readULEB32();
	def index = pop_u32();
}
// phis: 
</pre>`;
window.traces.F32_STORE["unlem_scheduler"] = `<pre class='graph'>graph TD
subgraph block_638["Block 638"]
	direction TB
	b638_1[\\"Finish"/]
	b638_23["offset imm_readULEB64"]
	b638_16["offset imm_readULEB32"]
	b638_24["index pop_u64"]
	b638_17["index pop_u32"]
	b638_13["val pop_f32"]
	b638_10["memindex__490 imm_readULEB32"]
	b638_4["memindex__496 0u"]
	b638_3["flags imm_readU8"]
	b638_23 --> b638_1
	b638_16 --> b638_23
	b638_24 --> b638_16
	b638_17 --> b638_24
	b638_13 --> b638_17
	b638_10 --> b638_13
	b638_4 --> b638_10
	b638_3 --> b638_4
end
phi_640 --> block_638
subgraph phi_640["Phi 640"]
	p640_31{{"Sϕ Stack "}}
	p640_30{{"Sϕ Codeptr "}}
end
block_641 --> phi_640
block_642 --> phi_640
subgraph block_641["Block 641"]
	direction TB
	b641_23["offset imm_readULEB64"]
	b641_24["index pop_u64"]
	b641_24 --> b641_23
end
phi_645 --> block_641
subgraph phi_645["Phi 645"]
	p645_11{"memindex ϕ"}
	p645_11{"memindex ϕ"}
end
block_646 --> phi_645
block_647 --> phi_645
subgraph block_646["Block 646"]
	direction TB
	b646_10["memindex__490 imm_readULEB32"]
end
branch_644 --> block_646
subgraph branch_644["Branch 644"]
	br644_9["cond__489 u8.!="]

end
branch_639 --> branch_644
subgraph branch_639["Branch 639"]
	br639_15["cond__477 m_isMemory64"]

end
block_643 --> branch_639
subgraph block_643["Block 643"]
	direction TB
	b643_15["cond__477 m_isMemory64"]
end
phi_649 --> block_643
subgraph phi_649["Phi 649"]
	p649_12{{"Sϕ Codeptr "}}
	p649_12{{"Sϕ Codeptr "}}
end
block_650 --> phi_649
block_651 --> phi_649
subgraph block_650["Block 650"]
	direction TB
	b650_10["memindex__490 imm_readULEB32"]
end
branch_648 --> block_650
subgraph branch_648["Branch 648"]
	br648_9["cond__489 u8.!="]

end
block_652 --> branch_648
subgraph block_652["Block 652"]
	direction TB
	b652_9["cond__489 u8.!="]
	b652_8["arg__491 u8.&"]
	b652_5["arg__492 0"]
	b652_6["arg__494 0x40u8"]
	b652_0[/"Start"\\]
	b652_8 --> b652_9
	b652_5 --> b652_8
	b652_6 --> b652_5
	b652_0 --> b652_6
end
subgraph block_651["Block 651"]
	direction TB
end
branch_648 --> block_651
subgraph block_647["Block 647"]
	direction TB
	b647_4["memindex__496 0u"]
end
branch_644 --> block_647
subgraph block_642["Block 642"]
	direction TB
	b642_16["offset imm_readULEB32"]
	b642_17["index pop_u32"]
	b642_17 --> b642_16
end
branch_639 --> block_642

</pre>`;
window.traces.F32_STORE["unlem_pretty"] = `<pre class=''>def val = pop_f32();
def flags = imm_readU8();
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
} else {
	def offset = imm_readULEB32();
	def index = pop_u32();
}
</pre>`;
window.traces.F32_STORE["constUnLEM"] = `<pre class='graph'>---
config:
  layout: elk
---
graph TD
	1[\\"Finish"/]
	30 -. Codeptr .-> 1
	31 -. Stack .-> 1
	0 -. Trap Locals Globals Tables Memory Extra .-> 1
	0[/"Start"\\]
	31{{"Sϕ Stack "}}
	15 --> 31
	24 --> 31
	17 --> 31
	17["index pop_u32"]
	13 -. Stack .-> 17
	13["val pop_f32"]
	0 -. Stack .-> 13
	24["index pop_u64"]
	13 -. Stack .-> 24
	15["cond__477 m_isMemory64"]
	11 --> 15
	11{"memindex ϕ"}
	9 --> 11
	10 --> 11
	4 --> 11
	4["memindex__496 0u"]
	10["memindex__490 imm_readULEB32"]
	3 -. Codeptr .-> 10
	3["flags imm_readU8"]
	0 -. Codeptr .-> 3
	9["cond__489 u8.!="]
	8 --> 9
	5 --> 9
	5["arg__492 0"]
	8["arg__491 u8.&"]
	3 --> 8
	6 --> 8
	6["arg__494 0x40u8"]
	30{{"Sϕ Codeptr "}}
	15 --> 30
	23 --> 30
	16 --> 30
	16["offset imm_readULEB32"]
	12 -. Codeptr .-> 16
	12{{"Sϕ Codeptr "}}
	9 --> 12
	10 --> 12
	3 --> 12
	23["offset imm_readULEB64"]
	12 -. Codeptr .-> 23
</pre>`;
window.traces.F32_STORE["chooseMerge"] = `<pre class='graph'>---
config:
  layout: elk
---
graph TD
	1[\\"Finish"/]
	30 -. Codeptr .-> 1
	31 -. Stack .-> 1
	0 -. Trap Locals Globals Tables Memory Extra .-> 1
	0[/"Start"\\]
	31{{"Sϕ Stack "}}
	15 --> 31
	24 --> 31
	17 --> 31
	17["index pop_u32"]
	13 -. Stack .-> 17
	13["val pop_f32"]
	0 -. Stack .-> 13
	24["index pop_u64"]
	13 -. Stack .-> 24
	15["cond__477 m_isMemory64"]
	11 --> 15
	11{"memindex ϕ"}
	9 --> 11
	10 --> 11
	4 --> 11
	4["memindex__496 0u"]
	10["memindex__490 imm_readULEB32"]
	3 -. Codeptr .-> 10
	3["flags imm_readU8"]
	0 -. Codeptr .-> 3
	9["cond__489 u8.!="]
	8 --> 9
	5 --> 9
	5["arg__492 0"]
	8["arg__491 u8.&"]
	3 --> 8
	6 --> 8
	6["arg__494 0x40u8"]
	30{{"Sϕ Codeptr "}}
	15 --> 30
	23 --> 30
	16 --> 30
	16["offset imm_readULEB32"]
	12 -. Codeptr .-> 16
	12{{"Sϕ Codeptr "}}
	9 --> 12
	10 --> 12
	3 --> 12
	23["offset imm_readULEB64"]
	12 -. Codeptr .-> 23
</pre>`;
window.traces.F32_STORE["scheduled"] = `<pre class=''>def val = pop_f32();
def flags = imm_readU8();
def arg__494 : byte = 0x40u8;
def arg__491 = u8.&(flags, arg__494);
def arg__492 : byte = 0;
def cond__489 = u8.!=(arg__491, arg__492);
var memindex: u32;
if (cond__489) {
	def memindex__490 = imm_readULEB32();
} else {
	def memindex__496 : u32 = 0u;
}
// phis: memindex <- memindex__490; memindex <- memindex__496; 
def cond__477 = m_isMemory64(memindex);
if (cond__477) {
	def offset = imm_readULEB64();
	def index = pop_u64();
} else {
	def offset = imm_readULEB32();
	def index = pop_u32();
}
// phis: 
</pre>`;
window.traces.F32_STORE["pretty"] = `<pre class=''>def val = pop_f32();
def flags = imm_readU8();
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
} else {
	def offset = imm_readULEB32();
	def index = pop_u32();
}
</pre>`;
window.traces["F64_STORE"] = {}
window.traces.F64_STORE["parsed"] = `<pre class=''>def flags = imm_readU8();
def memindex : u32 = 0u;
def arg__512 : byte = 0;
def arg__514 : byte = 0x40u8;
def arg__513 = (flags);
def arg__511 = u8.&(arg__513, arg__514);
def cond__509 = u8.!=(arg__511, arg__512);
if (cond__509) {
	def memindex__510 = imm_readULEB32();
}
// phis: memindex <- memindex__510; 
def val = pop_f64();
def arg__508 = (memindex);
def cond__497 = m_isMemory64(arg__508);
if (cond__497) {
	def offset = imm_readULEB64();
	def index = pop_u64();
	def arg__502 = (val);
	def arg__501 = (offset);
	def arg__500 = (index);
	def arg__499 = (memindex);
	def eff__498 = mach_writeMemory64_f64(arg__499, arg__500, arg__501, arg__502);
} else {
	def offset = imm_readULEB32();
	def index = pop_u32();
	def arg__507 = (val);
	def arg__506 = (offset);
	def arg__505 = (index);
	def arg__504 = (memindex);
	def eff__503 = mach_writeMemory32_f64(arg__504, arg__505, arg__506, arg__507);
}
// phis: 
</pre>`;
window.traces.F64_STORE["raw"] = `<pre class='graph'>---
config:
  layout: elk
---
graph TD
	1[\\"Finish"/]
	30 -. Codeptr .-> 1
	31 -. Stack .-> 1
	0 -. Trap Locals Globals Tables Extra .-> 1
	32 -. Memory .-> 1
	32{{"Sϕ Memory "}}
	15 --> 32
	29 --> 32
	22 --> 32
	22["eff__503 mach_writeMemory32_f64"]
	11 --> 22
	17 --> 22
	16 --> 22
	13 --> 22
	0 -. Memory .-> 22
	0[/"Start"\\]
	13["val pop_f64"]
	0 -. Stack .-> 13
	16["offset imm_readULEB32"]
	12 -. Codeptr .-> 16
	12{{"Sϕ Codeptr "}}
	9 --> 12
	10 --> 12
	3 --> 12
	3["flags imm_readU8"]
	0 -. Codeptr .-> 3
	10["memindex__510 imm_readULEB32"]
	3 -. Codeptr .-> 10
	9["cond__509 u8.!="]
	8 --> 9
	5 --> 9
	5["arg__512 0"]
	8["arg__511 u8.&"]
	3 --> 8
	6 --> 8
	6["arg__514 0x40u8"]
	17["index pop_u32"]
	13 -. Stack .-> 17
	11{"memindex ϕ"}
	9 --> 11
	10 --> 11
	4 --> 11
	4["memindex__515 0u"]
	29["eff__498 mach_writeMemory64_f64"]
	11 --> 29
	24 --> 29
	23 --> 29
	13 --> 29
	0 -. Memory .-> 29
	23["offset imm_readULEB64"]
	12 -. Codeptr .-> 23
	24["index pop_u64"]
	13 -. Stack .-> 24
	15["cond__497 m_isMemory64"]
	11 --> 15
	31{{"Sϕ Stack "}}
	15 --> 31
	24 --> 31
	17 --> 31
	30{{"Sϕ Codeptr "}}
	15 --> 30
	23 --> 30
	16 --> 30
</pre>`;
window.traces.F64_STORE["overloadOps"] = `<pre class='graph'>---
config:
  layout: elk
---
graph TD
	1[\\"Finish"/]
	30 -. Codeptr .-> 1
	31 -. Stack .-> 1
	0 -. Trap Locals Globals Tables Extra .-> 1
	32 -. Memory .-> 1
	32{{"Sϕ Memory "}}
	15 --> 32
	29 --> 32
	22 --> 32
	22["eff__503 mach_writeMemory32_f64"]
	11 --> 22
	17 --> 22
	16 --> 22
	13 --> 22
	0 -. Memory .-> 22
	0[/"Start"\\]
	13["val pop_f64"]
	0 -. Stack .-> 13
	16["offset imm_readULEB32"]
	12 -. Codeptr .-> 16
	12{{"Sϕ Codeptr "}}
	9 --> 12
	10 --> 12
	3 --> 12
	3["flags imm_readU8"]
	0 -. Codeptr .-> 3
	10["memindex__510 imm_readULEB32"]
	3 -. Codeptr .-> 10
	9["cond__509 u8.!="]
	8 --> 9
	5 --> 9
	5["arg__512 0"]
	8["arg__511 u8.&"]
	3 --> 8
	6 --> 8
	6["arg__514 0x40u8"]
	17["index pop_u32"]
	13 -. Stack .-> 17
	11{"memindex ϕ"}
	9 --> 11
	10 --> 11
	4 --> 11
	4["memindex__516 0u"]
	29["eff__498 mach_writeMemory64_f64"]
	11 --> 29
	24 --> 29
	23 --> 29
	13 --> 29
	0 -. Memory .-> 29
	23["offset imm_readULEB64"]
	12 -. Codeptr .-> 23
	24["index pop_u64"]
	13 -. Stack .-> 24
	15["cond__497 m_isMemory64"]
	11 --> 15
	31{{"Sϕ Stack "}}
	15 --> 31
	24 --> 31
	17 --> 31
	30{{"Sϕ Codeptr "}}
	15 --> 30
	23 --> 30
	16 --> 30
</pre>`;
window.traces.F64_STORE["addAbstractions"] = `<pre class='graph'>---
config:
  layout: elk
---
graph TD
	1[\\"Finish"/]
	30 -. Codeptr .-> 1
	31 -. Stack .-> 1
	0 -. Trap Locals Globals Tables Extra .-> 1
	32 -. Memory .-> 1
	32{{"Sϕ Memory "}}
	15 --> 32
	29 --> 32
	22 --> 32
	22["eff__503 mach_writeMemory32_f64"]
	11 --> 22
	17 --> 22
	16 --> 22
	13 --> 22
	0 -. Memory .-> 22
	0[/"Start"\\]
	13["val pop_f64"]
	0 -. Stack .-> 13
	16["offset imm_readULEB32"]
	12 -. Codeptr .-> 16
	12{{"Sϕ Codeptr "}}
	9 --> 12
	10 --> 12
	3 --> 12
	3["flags imm_readU8"]
	0 -. Codeptr .-> 3
	10["memindex__510 imm_readULEB32"]
	3 -. Codeptr .-> 10
	9["cond__509 u8.!="]
	8 --> 9
	5 --> 9
	5["arg__512 0"]
	8["arg__511 u8.&"]
	3 --> 8
	6 --> 8
	6["arg__514 0x40u8"]
	17["index pop_u32"]
	13 -. Stack .-> 17
	11{"memindex ϕ"}
	9 --> 11
	10 --> 11
	4 --> 11
	4["memindex__516 0u"]
	29["eff__498 mach_writeMemory64_f64"]
	11 --> 29
	24 --> 29
	23 --> 29
	13 --> 29
	0 -. Memory .-> 29
	23["offset imm_readULEB64"]
	12 -. Codeptr .-> 23
	24["index pop_u64"]
	13 -. Stack .-> 24
	15["cond__497 m_isMemory64"]
	11 --> 15
	31{{"Sϕ Stack "}}
	15 --> 31
	24 --> 31
	17 --> 31
	30{{"Sϕ Codeptr "}}
	15 --> 30
	23 --> 30
	16 --> 30
</pre>`;
window.traces.F64_STORE["schedulerMermaid"] = `<pre class='graph'>graph TD
subgraph block_653["Block 653"]
	direction TB
	b653_1[\\"Finish"/]
	b653_23["offset imm_readULEB64"]
	b653_16["offset imm_readULEB32"]
	b653_24["index pop_u64"]
	b653_17["index pop_u32"]
	b653_29["eff__498 mach_writeMemory64_f64"]
	b653_22["eff__503 mach_writeMemory32_f64"]
	b653_13["val pop_f64"]
	b653_10["memindex__510 imm_readULEB32"]
	b653_4["memindex__516 0u"]
	b653_3["flags imm_readU8"]
	b653_23 --> b653_1
	b653_16 --> b653_23
	b653_24 --> b653_16
	b653_17 --> b653_24
	b653_29 --> b653_17
	b653_22 --> b653_29
	b653_13 --> b653_22
	b653_10 --> b653_13
	b653_4 --> b653_10
	b653_3 --> b653_4
end
phi_655 --> block_653
subgraph phi_655["Phi 655"]
	p655_32{{"Sϕ Memory "}}
	p655_31{{"Sϕ Stack "}}
	p655_30{{"Sϕ Codeptr "}}
end
block_656 --> phi_655
block_657 --> phi_655
subgraph block_656["Block 656"]
	direction TB
	b656_23["offset imm_readULEB64"]
	b656_24["index pop_u64"]
	b656_29["eff__498 mach_writeMemory64_f64"]
	b656_24 --> b656_23
	b656_29 --> b656_24
end
phi_660 --> block_656
subgraph phi_660["Phi 660"]
	p660_11{"memindex ϕ"}
	p660_11{"memindex ϕ"}
	p660_11{"memindex ϕ"}
	p660_11{"memindex ϕ"}
	p660_11{"memindex ϕ"}
end
block_661 --> phi_660
block_662 --> phi_660
subgraph block_661["Block 661"]
	direction TB
	b661_10["memindex__510 imm_readULEB32"]
end
branch_659 --> block_661
subgraph branch_659["Branch 659"]
	br659_9["cond__509 u8.!="]

end
branch_654 --> branch_659
subgraph branch_654["Branch 654"]
	br654_15["cond__497 m_isMemory64"]

end
block_658 --> branch_654
subgraph block_658["Block 658"]
	direction TB
	b658_15["cond__497 m_isMemory64"]
end
phi_664 --> block_658
subgraph phi_664["Phi 664"]
	p664_12{{"Sϕ Codeptr "}}
	p664_12{{"Sϕ Codeptr "}}
	p664_12{{"Sϕ Codeptr "}}
	p664_12{{"Sϕ Codeptr "}}
end
block_665 --> phi_664
block_666 --> phi_664
subgraph block_665["Block 665"]
	direction TB
	b665_10["memindex__510 imm_readULEB32"]
end
branch_663 --> block_665
subgraph branch_663["Branch 663"]
	br663_9["cond__509 u8.!="]

end
block_667 --> branch_663
subgraph block_667["Block 667"]
	direction TB
	b667_9["cond__509 u8.!="]
	b667_8["arg__511 u8.&"]
	b667_5["arg__512 0"]
	b667_6["arg__514 0x40u8"]
	b667_0[/"Start"\\]
	b667_8 --> b667_9
	b667_5 --> b667_8
	b667_6 --> b667_5
	b667_0 --> b667_6
end
subgraph block_666["Block 666"]
	direction TB
end
branch_663 --> block_666
subgraph block_662["Block 662"]
	direction TB
	b662_4["memindex__516 0u"]
end
branch_659 --> block_662
subgraph block_657["Block 657"]
	direction TB
	b657_16["offset imm_readULEB32"]
	b657_17["index pop_u32"]
	b657_22["eff__503 mach_writeMemory32_f64"]
	b657_17 --> b657_16
	b657_22 --> b657_17
end
branch_654 --> block_657

</pre>`;
window.traces.F64_STORE["unLEM"] = `<pre class='graph'>---
config:
  layout: elk
---
graph TD
	1[\\"Finish"/]
	30 -. Codeptr .-> 1
	31 -. Stack .-> 1
	0 -. Trap Locals Globals Tables Extra .-> 1
	32 -. Memory .-> 1
	32{{"Sϕ Memory "}}
	15 --> 32
	29 --> 32
	22 --> 32
	22["eff__503 mach_writeMemory32_f64"]
	11 --> 22
	17 --> 22
	16 --> 22
	13 --> 22
	0 -. Memory .-> 22
	0[/"Start"\\]
	13["val pop_f64"]
	0 -. Stack .-> 13
	16["offset imm_readULEB32"]
	12 -. Codeptr .-> 16
	12{{"Sϕ Codeptr "}}
	9 --> 12
	10 --> 12
	3 --> 12
	3["flags imm_readU8"]
	0 -. Codeptr .-> 3
	10["memindex__510 imm_readULEB32"]
	3 -. Codeptr .-> 10
	9["cond__509 u8.!="]
	8 --> 9
	5 --> 9
	5["arg__512 0"]
	8["arg__511 u8.&"]
	3 --> 8
	6 --> 8
	6["arg__514 0x40u8"]
	17["index pop_u32"]
	13 -. Stack .-> 17
	11{"memindex ϕ"}
	9 --> 11
	10 --> 11
	4 --> 11
	4["memindex__516 0u"]
	29["eff__498 mach_writeMemory64_f64"]
	11 --> 29
	24 --> 29
	23 --> 29
	13 --> 29
	0 -. Memory .-> 29
	23["offset imm_readULEB64"]
	12 -. Codeptr .-> 23
	24["index pop_u64"]
	13 -. Stack .-> 24
	15["cond__497 m_isMemory64"]
	11 --> 15
	31{{"Sϕ Stack "}}
	15 --> 31
	24 --> 31
	17 --> 31
	30{{"Sϕ Codeptr "}}
	15 --> 30
	23 --> 30
	16 --> 30
</pre>`;
window.traces.F64_STORE["unlem_schedule"] = `<pre class=''>def val = pop_f64();
def flags = imm_readU8();
def arg__514 : byte = 0x40u8;
def arg__511 = u8.&(flags, arg__514);
def arg__512 : byte = 0;
def cond__509 = u8.!=(arg__511, arg__512);
var memindex: u32;
if (cond__509) {
	def memindex__510 = imm_readULEB32();
} else {
	def memindex__516 : u32 = 0u;
}
// phis: memindex <- memindex__510; memindex <- memindex__516; 
def cond__497 = m_isMemory64(memindex);
if (cond__497) {
	def offset = imm_readULEB64();
	def index = pop_u64();
	def eff__498 = mach_writeMemory64_f64(memindex, index, offset, val);
} else {
	def offset = imm_readULEB32();
	def index = pop_u32();
	def eff__503 = mach_writeMemory32_f64(memindex, index, offset, val);
}
// phis: 
</pre>`;
window.traces.F64_STORE["unlem_scheduler"] = `<pre class='graph'>graph TD
subgraph block_668["Block 668"]
	direction TB
	b668_1[\\"Finish"/]
	b668_23["offset imm_readULEB64"]
	b668_16["offset imm_readULEB32"]
	b668_24["index pop_u64"]
	b668_17["index pop_u32"]
	b668_29["eff__498 mach_writeMemory64_f64"]
	b668_22["eff__503 mach_writeMemory32_f64"]
	b668_13["val pop_f64"]
	b668_10["memindex__510 imm_readULEB32"]
	b668_4["memindex__516 0u"]
	b668_3["flags imm_readU8"]
	b668_23 --> b668_1
	b668_16 --> b668_23
	b668_24 --> b668_16
	b668_17 --> b668_24
	b668_29 --> b668_17
	b668_22 --> b668_29
	b668_13 --> b668_22
	b668_10 --> b668_13
	b668_4 --> b668_10
	b668_3 --> b668_4
end
phi_670 --> block_668
subgraph phi_670["Phi 670"]
	p670_32{{"Sϕ Memory "}}
	p670_31{{"Sϕ Stack "}}
	p670_30{{"Sϕ Codeptr "}}
end
block_671 --> phi_670
block_672 --> phi_670
subgraph block_671["Block 671"]
	direction TB
	b671_23["offset imm_readULEB64"]
	b671_24["index pop_u64"]
	b671_29["eff__498 mach_writeMemory64_f64"]
	b671_24 --> b671_23
	b671_29 --> b671_24
end
phi_675 --> block_671
subgraph phi_675["Phi 675"]
	p675_11{"memindex ϕ"}
	p675_11{"memindex ϕ"}
	p675_11{"memindex ϕ"}
	p675_11{"memindex ϕ"}
	p675_11{"memindex ϕ"}
end
block_676 --> phi_675
block_677 --> phi_675
subgraph block_676["Block 676"]
	direction TB
	b676_10["memindex__510 imm_readULEB32"]
end
branch_674 --> block_676
subgraph branch_674["Branch 674"]
	br674_9["cond__509 u8.!="]

end
branch_669 --> branch_674
subgraph branch_669["Branch 669"]
	br669_15["cond__497 m_isMemory64"]

end
block_673 --> branch_669
subgraph block_673["Block 673"]
	direction TB
	b673_15["cond__497 m_isMemory64"]
end
phi_679 --> block_673
subgraph phi_679["Phi 679"]
	p679_12{{"Sϕ Codeptr "}}
	p679_12{{"Sϕ Codeptr "}}
	p679_12{{"Sϕ Codeptr "}}
	p679_12{{"Sϕ Codeptr "}}
end
block_680 --> phi_679
block_681 --> phi_679
subgraph block_680["Block 680"]
	direction TB
	b680_10["memindex__510 imm_readULEB32"]
end
branch_678 --> block_680
subgraph branch_678["Branch 678"]
	br678_9["cond__509 u8.!="]

end
block_682 --> branch_678
subgraph block_682["Block 682"]
	direction TB
	b682_9["cond__509 u8.!="]
	b682_8["arg__511 u8.&"]
	b682_5["arg__512 0"]
	b682_6["arg__514 0x40u8"]
	b682_0[/"Start"\\]
	b682_8 --> b682_9
	b682_5 --> b682_8
	b682_6 --> b682_5
	b682_0 --> b682_6
end
subgraph block_681["Block 681"]
	direction TB
end
branch_678 --> block_681
subgraph block_677["Block 677"]
	direction TB
	b677_4["memindex__516 0u"]
end
branch_674 --> block_677
subgraph block_672["Block 672"]
	direction TB
	b672_16["offset imm_readULEB32"]
	b672_17["index pop_u32"]
	b672_22["eff__503 mach_writeMemory32_f64"]
	b672_17 --> b672_16
	b672_22 --> b672_17
end
branch_669 --> block_672

</pre>`;
window.traces.F64_STORE["unlem_pretty"] = `<pre class=''>def val = pop_f64();
def flags = imm_readU8();
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
	mach_writeMemory64_f64(memindex, index, offset, val);
} else {
	def offset = imm_readULEB32();
	def index = pop_u32();
	mach_writeMemory32_f64(memindex, index, offset, val);
}
</pre>`;
window.traces.F64_STORE["constUnLEM"] = `<pre class='graph'>---
config:
  layout: elk
---
graph TD
	1[\\"Finish"/]
	30 -. Codeptr .-> 1
	31 -. Stack .-> 1
	0 -. Trap Locals Globals Tables Extra .-> 1
	32 -. Memory .-> 1
	32{{"Sϕ Memory "}}
	15 --> 32
	29 --> 32
	22 --> 32
	22["eff__503 mach_writeMemory32_f64"]
	11 --> 22
	17 --> 22
	16 --> 22
	13 --> 22
	0 -. Memory .-> 22
	0[/"Start"\\]
	13["val pop_f64"]
	0 -. Stack .-> 13
	16["offset imm_readULEB32"]
	12 -. Codeptr .-> 16
	12{{"Sϕ Codeptr "}}
	9 --> 12
	10 --> 12
	3 --> 12
	3["flags imm_readU8"]
	0 -. Codeptr .-> 3
	10["memindex__510 imm_readULEB32"]
	3 -. Codeptr .-> 10
	9["cond__509 u8.!="]
	8 --> 9
	5 --> 9
	5["arg__512 0"]
	8["arg__511 u8.&"]
	3 --> 8
	6 --> 8
	6["arg__514 0x40u8"]
	17["index pop_u32"]
	13 -. Stack .-> 17
	11{"memindex ϕ"}
	9 --> 11
	10 --> 11
	4 --> 11
	4["memindex__516 0u"]
	29["eff__498 mach_writeMemory64_f64"]
	11 --> 29
	24 --> 29
	23 --> 29
	13 --> 29
	0 -. Memory .-> 29
	23["offset imm_readULEB64"]
	12 -. Codeptr .-> 23
	24["index pop_u64"]
	13 -. Stack .-> 24
	15["cond__497 m_isMemory64"]
	11 --> 15
	31{{"Sϕ Stack "}}
	15 --> 31
	24 --> 31
	17 --> 31
	30{{"Sϕ Codeptr "}}
	15 --> 30
	23 --> 30
	16 --> 30
</pre>`;
window.traces.F64_STORE["chooseMerge"] = `<pre class='graph'>---
config:
  layout: elk
---
graph TD
	1[\\"Finish"/]
	30 -. Codeptr .-> 1
	31 -. Stack .-> 1
	0 -. Trap Locals Globals Tables Extra .-> 1
	32 -. Memory .-> 1
	32{{"Sϕ Memory "}}
	15 --> 32
	29 --> 32
	22 --> 32
	22["eff__503 mach_writeMemory32_f64"]
	11 --> 22
	17 --> 22
	16 --> 22
	13 --> 22
	0 -. Memory .-> 22
	0[/"Start"\\]
	13["val pop_f64"]
	0 -. Stack .-> 13
	16["offset imm_readULEB32"]
	12 -. Codeptr .-> 16
	12{{"Sϕ Codeptr "}}
	9 --> 12
	10 --> 12
	3 --> 12
	3["flags imm_readU8"]
	0 -. Codeptr .-> 3
	10["memindex__510 imm_readULEB32"]
	3 -. Codeptr .-> 10
	9["cond__509 u8.!="]
	8 --> 9
	5 --> 9
	5["arg__512 0"]
	8["arg__511 u8.&"]
	3 --> 8
	6 --> 8
	6["arg__514 0x40u8"]
	17["index pop_u32"]
	13 -. Stack .-> 17
	11{"memindex ϕ"}
	9 --> 11
	10 --> 11
	4 --> 11
	4["memindex__516 0u"]
	29["eff__498 mach_writeMemory64_f64"]
	11 --> 29
	24 --> 29
	23 --> 29
	13 --> 29
	0 -. Memory .-> 29
	23["offset imm_readULEB64"]
	12 -. Codeptr .-> 23
	24["index pop_u64"]
	13 -. Stack .-> 24
	15["cond__497 m_isMemory64"]
	11 --> 15
	31{{"Sϕ Stack "}}
	15 --> 31
	24 --> 31
	17 --> 31
	30{{"Sϕ Codeptr "}}
	15 --> 30
	23 --> 30
	16 --> 30
</pre>`;
window.traces.F64_STORE["scheduled"] = `<pre class=''>def val = pop_f64();
def flags = imm_readU8();
def arg__514 : byte = 0x40u8;
def arg__511 = u8.&(flags, arg__514);
def arg__512 : byte = 0;
def cond__509 = u8.!=(arg__511, arg__512);
var memindex: u32;
if (cond__509) {
	def memindex__510 = imm_readULEB32();
} else {
	def memindex__516 : u32 = 0u;
}
// phis: memindex <- memindex__510; memindex <- memindex__516; 
def cond__497 = m_isMemory64(memindex);
if (cond__497) {
	def offset = imm_readULEB64();
	def index = pop_u64();
	def eff__498 = mach_writeMemory64_f64(memindex, index, offset, val);
} else {
	def offset = imm_readULEB32();
	def index = pop_u32();
	def eff__503 = mach_writeMemory32_f64(memindex, index, offset, val);
}
// phis: 
</pre>`;
window.traces.F64_STORE["pretty"] = `<pre class=''>def val = pop_f64();
def flags = imm_readU8();
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
	mach_writeMemory64_f64(memindex, index, offset, val);
} else {
	def offset = imm_readULEB32();
	def index = pop_u32();
	mach_writeMemory32_f64(memindex, index, offset, val);
}
</pre>`;
window.traces["I32_STORE8"] = {}
window.traces.I32_STORE8["parsed"] = `<pre class=''>def flags = imm_readU8();
def memindex : u32 = 0u;
def arg__532 : byte = 0;
def arg__534 : byte = 0x40u8;
def arg__533 = (flags);
def arg__531 = u8.&(arg__533, arg__534);
def cond__529 = u8.!=(arg__531, arg__532);
if (cond__529) {
	def memindex__530 = imm_readULEB32();
}
// phis: memindex <- memindex__530; 
def val = pop_u32();
def arg__528 = (memindex);
def cond__517 = m_isMemory64(arg__528);
if (cond__517) {
	def offset = imm_readULEB64();
	def index = pop_u64();
	def arg__522 = (val);
	def arg__521 = (offset);
	def arg__520 = (index);
	def arg__519 = (memindex);
	def eff__518 = mach_writeMemory64_u8(arg__519, arg__520, arg__521, arg__522);
} else {
	def offset = imm_readULEB32();
	def index = pop_u32();
	def arg__527 = (val);
	def arg__526 = (offset);
	def arg__525 = (index);
	def arg__524 = (memindex);
	def eff__523 = mach_writeMemory32_u8(arg__524, arg__525, arg__526, arg__527);
}
// phis: 
</pre>`;
window.traces.I32_STORE8["raw"] = `<pre class='graph'>---
config:
  layout: elk
---
graph TD
	1[\\"Finish"/]
	30 -. Codeptr .-> 1
	31 -. Stack .-> 1
	0 -. Trap Locals Globals Tables Extra .-> 1
	32 -. Memory .-> 1
	32{{"Sϕ Memory "}}
	15 --> 32
	29 --> 32
	22 --> 32
	22["eff__523 mach_writeMemory32_u8"]
	11 --> 22
	17 --> 22
	16 --> 22
	13 --> 22
	0 -. Memory .-> 22
	0[/"Start"\\]
	13["val pop_u32"]
	0 -. Stack .-> 13
	16["offset imm_readULEB32"]
	12 -. Codeptr .-> 16
	12{{"Sϕ Codeptr "}}
	9 --> 12
	10 --> 12
	3 --> 12
	3["flags imm_readU8"]
	0 -. Codeptr .-> 3
	10["memindex__530 imm_readULEB32"]
	3 -. Codeptr .-> 10
	9["cond__529 u8.!="]
	8 --> 9
	5 --> 9
	5["arg__532 0"]
	8["arg__531 u8.&"]
	3 --> 8
	6 --> 8
	6["arg__534 0x40u8"]
	17["index pop_u32"]
	13 -. Stack .-> 17
	11{"memindex ϕ"}
	9 --> 11
	10 --> 11
	4 --> 11
	4["memindex__535 0u"]
	29["eff__518 mach_writeMemory64_u8"]
	11 --> 29
	24 --> 29
	23 --> 29
	13 --> 29
	0 -. Memory .-> 29
	23["offset imm_readULEB64"]
	12 -. Codeptr .-> 23
	24["index pop_u64"]
	13 -. Stack .-> 24
	15["cond__517 m_isMemory64"]
	11 --> 15
	31{{"Sϕ Stack "}}
	15 --> 31
	24 --> 31
	17 --> 31
	30{{"Sϕ Codeptr "}}
	15 --> 30
	23 --> 30
	16 --> 30
</pre>`;
window.traces.I32_STORE8["overloadOps"] = `<pre class='graph'>---
config:
  layout: elk
---
graph TD
	1[\\"Finish"/]
	30 -. Codeptr .-> 1
	31 -. Stack .-> 1
	0 -. Trap Locals Globals Tables Extra .-> 1
	32 -. Memory .-> 1
	32{{"Sϕ Memory "}}
	15 --> 32
	29 --> 32
	22 --> 32
	22["eff__523 mach_writeMemory32_u8"]
	11 --> 22
	17 --> 22
	16 --> 22
	13 --> 22
	0 -. Memory .-> 22
	0[/"Start"\\]
	13["val pop_u32"]
	0 -. Stack .-> 13
	16["offset imm_readULEB32"]
	12 -. Codeptr .-> 16
	12{{"Sϕ Codeptr "}}
	9 --> 12
	10 --> 12
	3 --> 12
	3["flags imm_readU8"]
	0 -. Codeptr .-> 3
	10["memindex__530 imm_readULEB32"]
	3 -. Codeptr .-> 10
	9["cond__529 u8.!="]
	8 --> 9
	5 --> 9
	5["arg__532 0"]
	8["arg__531 u8.&"]
	3 --> 8
	6 --> 8
	6["arg__534 0x40u8"]
	17["index pop_u32"]
	13 -. Stack .-> 17
	11{"memindex ϕ"}
	9 --> 11
	10 --> 11
	4 --> 11
	4["memindex__536 0u"]
	29["eff__518 mach_writeMemory64_u8"]
	11 --> 29
	24 --> 29
	23 --> 29
	13 --> 29
	0 -. Memory .-> 29
	23["offset imm_readULEB64"]
	12 -. Codeptr .-> 23
	24["index pop_u64"]
	13 -. Stack .-> 24
	15["cond__517 m_isMemory64"]
	11 --> 15
	31{{"Sϕ Stack "}}
	15 --> 31
	24 --> 31
	17 --> 31
	30{{"Sϕ Codeptr "}}
	15 --> 30
	23 --> 30
	16 --> 30
</pre>`;
window.traces.I32_STORE8["addAbstractions"] = `<pre class='graph'>---
config:
  layout: elk
---
graph TD
	1[\\"Finish"/]
	30 -. Codeptr .-> 1
	31 -. Stack .-> 1
	0 -. Trap Locals Globals Tables Extra .-> 1
	32 -. Memory .-> 1
	32{{"Sϕ Memory "}}
	15 --> 32
	29 --> 32
	22 --> 32
	22["eff__523 mach_writeMemory32_u8"]
	11 --> 22
	17 --> 22
	16 --> 22
	13 --> 22
	0 -. Memory .-> 22
	0[/"Start"\\]
	13["val pop_u32"]
	0 -. Stack .-> 13
	16["offset imm_readULEB32"]
	12 -. Codeptr .-> 16
	12{{"Sϕ Codeptr "}}
	9 --> 12
	10 --> 12
	3 --> 12
	3["flags imm_readU8"]
	0 -. Codeptr .-> 3
	10["memindex__530 imm_readULEB32"]
	3 -. Codeptr .-> 10
	9["cond__529 u8.!="]
	8 --> 9
	5 --> 9
	5["arg__532 0"]
	8["arg__531 u8.&"]
	3 --> 8
	6 --> 8
	6["arg__534 0x40u8"]
	17["index pop_u32"]
	13 -. Stack .-> 17
	11{"memindex ϕ"}
	9 --> 11
	10 --> 11
	4 --> 11
	4["memindex__536 0u"]
	29["eff__518 mach_writeMemory64_u8"]
	11 --> 29
	24 --> 29
	23 --> 29
	13 --> 29
	0 -. Memory .-> 29
	23["offset imm_readULEB64"]
	12 -. Codeptr .-> 23
	24["index pop_u64"]
	13 -. Stack .-> 24
	15["cond__517 m_isMemory64"]
	11 --> 15
	31{{"Sϕ Stack "}}
	15 --> 31
	24 --> 31
	17 --> 31
	30{{"Sϕ Codeptr "}}
	15 --> 30
	23 --> 30
	16 --> 30
</pre>`;
window.traces.I32_STORE8["schedulerMermaid"] = `<pre class='graph'>graph TD
subgraph block_683["Block 683"]
	direction TB
	b683_1[\\"Finish"/]
	b683_23["offset imm_readULEB64"]
	b683_16["offset imm_readULEB32"]
	b683_24["index pop_u64"]
	b683_17["index pop_u32"]
	b683_29["eff__518 mach_writeMemory64_u8"]
	b683_22["eff__523 mach_writeMemory32_u8"]
	b683_13["val pop_u32"]
	b683_10["memindex__530 imm_readULEB32"]
	b683_4["memindex__536 0u"]
	b683_3["flags imm_readU8"]
	b683_23 --> b683_1
	b683_16 --> b683_23
	b683_24 --> b683_16
	b683_17 --> b683_24
	b683_29 --> b683_17
	b683_22 --> b683_29
	b683_13 --> b683_22
	b683_10 --> b683_13
	b683_4 --> b683_10
	b683_3 --> b683_4
end
phi_685 --> block_683
subgraph phi_685["Phi 685"]
	p685_32{{"Sϕ Memory "}}
	p685_31{{"Sϕ Stack "}}
	p685_30{{"Sϕ Codeptr "}}
end
block_686 --> phi_685
block_687 --> phi_685
subgraph block_686["Block 686"]
	direction TB
	b686_23["offset imm_readULEB64"]
	b686_24["index pop_u64"]
	b686_29["eff__518 mach_writeMemory64_u8"]
	b686_24 --> b686_23
	b686_29 --> b686_24
end
phi_690 --> block_686
subgraph phi_690["Phi 690"]
	p690_11{"memindex ϕ"}
	p690_11{"memindex ϕ"}
	p690_11{"memindex ϕ"}
	p690_11{"memindex ϕ"}
	p690_11{"memindex ϕ"}
end
block_691 --> phi_690
block_692 --> phi_690
subgraph block_691["Block 691"]
	direction TB
	b691_10["memindex__530 imm_readULEB32"]
end
branch_689 --> block_691
subgraph branch_689["Branch 689"]
	br689_9["cond__529 u8.!="]

end
branch_684 --> branch_689
subgraph branch_684["Branch 684"]
	br684_15["cond__517 m_isMemory64"]

end
block_688 --> branch_684
subgraph block_688["Block 688"]
	direction TB
	b688_15["cond__517 m_isMemory64"]
end
phi_694 --> block_688
subgraph phi_694["Phi 694"]
	p694_12{{"Sϕ Codeptr "}}
	p694_12{{"Sϕ Codeptr "}}
	p694_12{{"Sϕ Codeptr "}}
	p694_12{{"Sϕ Codeptr "}}
end
block_695 --> phi_694
block_696 --> phi_694
subgraph block_695["Block 695"]
	direction TB
	b695_10["memindex__530 imm_readULEB32"]
end
branch_693 --> block_695
subgraph branch_693["Branch 693"]
	br693_9["cond__529 u8.!="]

end
block_697 --> branch_693
subgraph block_697["Block 697"]
	direction TB
	b697_9["cond__529 u8.!="]
	b697_8["arg__531 u8.&"]
	b697_5["arg__532 0"]
	b697_6["arg__534 0x40u8"]
	b697_0[/"Start"\\]
	b697_8 --> b697_9
	b697_5 --> b697_8
	b697_6 --> b697_5
	b697_0 --> b697_6
end
subgraph block_696["Block 696"]
	direction TB
end
branch_693 --> block_696
subgraph block_692["Block 692"]
	direction TB
	b692_4["memindex__536 0u"]
end
branch_689 --> block_692
subgraph block_687["Block 687"]
	direction TB
	b687_16["offset imm_readULEB32"]
	b687_17["index pop_u32"]
	b687_22["eff__523 mach_writeMemory32_u8"]
	b687_17 --> b687_16
	b687_22 --> b687_17
end
branch_684 --> block_687

</pre>`;
window.traces.I32_STORE8["unLEM"] = `<pre class='graph'>---
config:
  layout: elk
---
graph TD
	1[\\"Finish"/]
	30 -. Codeptr .-> 1
	31 -. Stack .-> 1
	0 -. Trap Locals Globals Tables Extra .-> 1
	32 -. Memory .-> 1
	32{{"Sϕ Memory "}}
	15 --> 32
	29 --> 32
	22 --> 32
	22["eff__523 mach_writeMemory32_u8"]
	11 --> 22
	17 --> 22
	16 --> 22
	13 --> 22
	0 -. Memory .-> 22
	0[/"Start"\\]
	13["val pop_u32"]
	0 -. Stack .-> 13
	16["offset imm_readULEB32"]
	12 -. Codeptr .-> 16
	12{{"Sϕ Codeptr "}}
	9 --> 12
	10 --> 12
	3 --> 12
	3["flags imm_readU8"]
	0 -. Codeptr .-> 3
	10["memindex__530 imm_readULEB32"]
	3 -. Codeptr .-> 10
	9["cond__529 u8.!="]
	8 --> 9
	5 --> 9
	5["arg__532 0"]
	8["arg__531 u8.&"]
	3 --> 8
	6 --> 8
	6["arg__534 0x40u8"]
	17["index pop_u32"]
	13 -. Stack .-> 17
	11{"memindex ϕ"}
	9 --> 11
	10 --> 11
	4 --> 11
	4["memindex__536 0u"]
	29["eff__518 mach_writeMemory64_u8"]
	11 --> 29
	24 --> 29
	23 --> 29
	13 --> 29
	0 -. Memory .-> 29
	23["offset imm_readULEB64"]
	12 -. Codeptr .-> 23
	24["index pop_u64"]
	13 -. Stack .-> 24
	15["cond__517 m_isMemory64"]
	11 --> 15
	31{{"Sϕ Stack "}}
	15 --> 31
	24 --> 31
	17 --> 31
	30{{"Sϕ Codeptr "}}
	15 --> 30
	23 --> 30
	16 --> 30
</pre>`;
window.traces.I32_STORE8["unlem_schedule"] = `<pre class=''>def val = pop_u32();
def flags = imm_readU8();
def arg__534 : byte = 0x40u8;
def arg__531 = u8.&(flags, arg__534);
def arg__532 : byte = 0;
def cond__529 = u8.!=(arg__531, arg__532);
var memindex: u32;
if (cond__529) {
	def memindex__530 = imm_readULEB32();
} else {
	def memindex__536 : u32 = 0u;
}
// phis: memindex <- memindex__530; memindex <- memindex__536; 
def cond__517 = m_isMemory64(memindex);
if (cond__517) {
	def offset = imm_readULEB64();
	def index = pop_u64();
	def eff__518 = mach_writeMemory64_u8(memindex, index, offset, val);
} else {
	def offset = imm_readULEB32();
	def index = pop_u32();
	def eff__523 = mach_writeMemory32_u8(memindex, index, offset, val);
}
// phis: 
</pre>`;
window.traces.I32_STORE8["unlem_scheduler"] = `<pre class='graph'>graph TD
subgraph block_698["Block 698"]
	direction TB
	b698_1[\\"Finish"/]
	b698_23["offset imm_readULEB64"]
	b698_16["offset imm_readULEB32"]
	b698_24["index pop_u64"]
	b698_17["index pop_u32"]
	b698_29["eff__518 mach_writeMemory64_u8"]
	b698_22["eff__523 mach_writeMemory32_u8"]
	b698_13["val pop_u32"]
	b698_10["memindex__530 imm_readULEB32"]
	b698_4["memindex__536 0u"]
	b698_3["flags imm_readU8"]
	b698_23 --> b698_1
	b698_16 --> b698_23
	b698_24 --> b698_16
	b698_17 --> b698_24
	b698_29 --> b698_17
	b698_22 --> b698_29
	b698_13 --> b698_22
	b698_10 --> b698_13
	b698_4 --> b698_10
	b698_3 --> b698_4
end
phi_700 --> block_698
subgraph phi_700["Phi 700"]
	p700_32{{"Sϕ Memory "}}
	p700_31{{"Sϕ Stack "}}
	p700_30{{"Sϕ Codeptr "}}
end
block_701 --> phi_700
block_702 --> phi_700
subgraph block_701["Block 701"]
	direction TB
	b701_23["offset imm_readULEB64"]
	b701_24["index pop_u64"]
	b701_29["eff__518 mach_writeMemory64_u8"]
	b701_24 --> b701_23
	b701_29 --> b701_24
end
phi_705 --> block_701
subgraph phi_705["Phi 705"]
	p705_11{"memindex ϕ"}
	p705_11{"memindex ϕ"}
	p705_11{"memindex ϕ"}
	p705_11{"memindex ϕ"}
	p705_11{"memindex ϕ"}
end
block_706 --> phi_705
block_707 --> phi_705
subgraph block_706["Block 706"]
	direction TB
	b706_10["memindex__530 imm_readULEB32"]
end
branch_704 --> block_706
subgraph branch_704["Branch 704"]
	br704_9["cond__529 u8.!="]

end
branch_699 --> branch_704
subgraph branch_699["Branch 699"]
	br699_15["cond__517 m_isMemory64"]

end
block_703 --> branch_699
subgraph block_703["Block 703"]
	direction TB
	b703_15["cond__517 m_isMemory64"]
end
phi_709 --> block_703
subgraph phi_709["Phi 709"]
	p709_12{{"Sϕ Codeptr "}}
	p709_12{{"Sϕ Codeptr "}}
	p709_12{{"Sϕ Codeptr "}}
	p709_12{{"Sϕ Codeptr "}}
end
block_710 --> phi_709
block_711 --> phi_709
subgraph block_710["Block 710"]
	direction TB
	b710_10["memindex__530 imm_readULEB32"]
end
branch_708 --> block_710
subgraph branch_708["Branch 708"]
	br708_9["cond__529 u8.!="]

end
block_712 --> branch_708
subgraph block_712["Block 712"]
	direction TB
	b712_9["cond__529 u8.!="]
	b712_8["arg__531 u8.&"]
	b712_5["arg__532 0"]
	b712_6["arg__534 0x40u8"]
	b712_0[/"Start"\\]
	b712_8 --> b712_9
	b712_5 --> b712_8
	b712_6 --> b712_5
	b712_0 --> b712_6
end
subgraph block_711["Block 711"]
	direction TB
end
branch_708 --> block_711
subgraph block_707["Block 707"]
	direction TB
	b707_4["memindex__536 0u"]
end
branch_704 --> block_707
subgraph block_702["Block 702"]
	direction TB
	b702_16["offset imm_readULEB32"]
	b702_17["index pop_u32"]
	b702_22["eff__523 mach_writeMemory32_u8"]
	b702_17 --> b702_16
	b702_22 --> b702_17
end
branch_699 --> block_702

</pre>`;
window.traces.I32_STORE8["unlem_pretty"] = `<pre class=''>def val = pop_u32();
def flags = imm_readU8();
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
	mach_writeMemory64_u8(memindex, index, offset, val);
} else {
	def offset = imm_readULEB32();
	def index = pop_u32();
	mach_writeMemory32_u8(memindex, index, offset, val);
}
</pre>`;
window.traces.I32_STORE8["constUnLEM"] = `<pre class='graph'>---
config:
  layout: elk
---
graph TD
	1[\\"Finish"/]
	30 -. Codeptr .-> 1
	31 -. Stack .-> 1
	0 -. Trap Locals Globals Tables Extra .-> 1
	32 -. Memory .-> 1
	32{{"Sϕ Memory "}}
	15 --> 32
	29 --> 32
	22 --> 32
	22["eff__523 mach_writeMemory32_u8"]
	11 --> 22
	17 --> 22
	16 --> 22
	13 --> 22
	0 -. Memory .-> 22
	0[/"Start"\\]
	13["val pop_u32"]
	0 -. Stack .-> 13
	16["offset imm_readULEB32"]
	12 -. Codeptr .-> 16
	12{{"Sϕ Codeptr "}}
	9 --> 12
	10 --> 12
	3 --> 12
	3["flags imm_readU8"]
	0 -. Codeptr .-> 3
	10["memindex__530 imm_readULEB32"]
	3 -. Codeptr .-> 10
	9["cond__529 u8.!="]
	8 --> 9
	5 --> 9
	5["arg__532 0"]
	8["arg__531 u8.&"]
	3 --> 8
	6 --> 8
	6["arg__534 0x40u8"]
	17["index pop_u32"]
	13 -. Stack .-> 17
	11{"memindex ϕ"}
	9 --> 11
	10 --> 11
	4 --> 11
	4["memindex__536 0u"]
	29["eff__518 mach_writeMemory64_u8"]
	11 --> 29
	24 --> 29
	23 --> 29
	13 --> 29
	0 -. Memory .-> 29
	23["offset imm_readULEB64"]
	12 -. Codeptr .-> 23
	24["index pop_u64"]
	13 -. Stack .-> 24
	15["cond__517 m_isMemory64"]
	11 --> 15
	31{{"Sϕ Stack "}}
	15 --> 31
	24 --> 31
	17 --> 31
	30{{"Sϕ Codeptr "}}
	15 --> 30
	23 --> 30
	16 --> 30
</pre>`;
window.traces.I32_STORE8["chooseMerge"] = `<pre class='graph'>---
config:
  layout: elk
---
graph TD
	1[\\"Finish"/]
	30 -. Codeptr .-> 1
	31 -. Stack .-> 1
	0 -. Trap Locals Globals Tables Extra .-> 1
	32 -. Memory .-> 1
	32{{"Sϕ Memory "}}
	15 --> 32
	29 --> 32
	22 --> 32
	22["eff__523 mach_writeMemory32_u8"]
	11 --> 22
	17 --> 22
	16 --> 22
	13 --> 22
	0 -. Memory .-> 22
	0[/"Start"\\]
	13["val pop_u32"]
	0 -. Stack .-> 13
	16["offset imm_readULEB32"]
	12 -. Codeptr .-> 16
	12{{"Sϕ Codeptr "}}
	9 --> 12
	10 --> 12
	3 --> 12
	3["flags imm_readU8"]
	0 -. Codeptr .-> 3
	10["memindex__530 imm_readULEB32"]
	3 -. Codeptr .-> 10
	9["cond__529 u8.!="]
	8 --> 9
	5 --> 9
	5["arg__532 0"]
	8["arg__531 u8.&"]
	3 --> 8
	6 --> 8
	6["arg__534 0x40u8"]
	17["index pop_u32"]
	13 -. Stack .-> 17
	11{"memindex ϕ"}
	9 --> 11
	10 --> 11
	4 --> 11
	4["memindex__536 0u"]
	29["eff__518 mach_writeMemory64_u8"]
	11 --> 29
	24 --> 29
	23 --> 29
	13 --> 29
	0 -. Memory .-> 29
	23["offset imm_readULEB64"]
	12 -. Codeptr .-> 23
	24["index pop_u64"]
	13 -. Stack .-> 24
	15["cond__517 m_isMemory64"]
	11 --> 15
	31{{"Sϕ Stack "}}
	15 --> 31
	24 --> 31
	17 --> 31
	30{{"Sϕ Codeptr "}}
	15 --> 30
	23 --> 30
	16 --> 30
</pre>`;
window.traces.I32_STORE8["scheduled"] = `<pre class=''>def val = pop_u32();
def flags = imm_readU8();
def arg__534 : byte = 0x40u8;
def arg__531 = u8.&(flags, arg__534);
def arg__532 : byte = 0;
def cond__529 = u8.!=(arg__531, arg__532);
var memindex: u32;
if (cond__529) {
	def memindex__530 = imm_readULEB32();
} else {
	def memindex__536 : u32 = 0u;
}
// phis: memindex <- memindex__530; memindex <- memindex__536; 
def cond__517 = m_isMemory64(memindex);
if (cond__517) {
	def offset = imm_readULEB64();
	def index = pop_u64();
	def eff__518 = mach_writeMemory64_u8(memindex, index, offset, val);
} else {
	def offset = imm_readULEB32();
	def index = pop_u32();
	def eff__523 = mach_writeMemory32_u8(memindex, index, offset, val);
}
// phis: 
</pre>`;
window.traces.I32_STORE8["pretty"] = `<pre class=''>def val = pop_u32();
def flags = imm_readU8();
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
	mach_writeMemory64_u8(memindex, index, offset, val);
} else {
	def offset = imm_readULEB32();
	def index = pop_u32();
	mach_writeMemory32_u8(memindex, index, offset, val);
}
</pre>`;
window.traces["I32_STORE16"] = {}
window.traces.I32_STORE16["parsed"] = `<pre class=''>def flags = imm_readU8();
def memindex : u32 = 0u;
def arg__552 : byte = 0;
def arg__554 : byte = 0x40u8;
def arg__553 = (flags);
def arg__551 = u8.&(arg__553, arg__554);
def cond__549 = u8.!=(arg__551, arg__552);
if (cond__549) {
	def memindex__550 = imm_readULEB32();
}
// phis: memindex <- memindex__550; 
def val = pop_u32();
def arg__548 = (memindex);
def cond__537 = m_isMemory64(arg__548);
if (cond__537) {
	def offset = imm_readULEB64();
	def index = pop_u64();
	def arg__542 = (val);
	def arg__541 = (offset);
	def arg__540 = (index);
	def arg__539 = (memindex);
	def eff__538 = mach_writeMemory64_u16(arg__539, arg__540, arg__541, arg__542);
} else {
	def offset = imm_readULEB32();
	def index = pop_u32();
	def arg__547 = (val);
	def arg__546 = (offset);
	def arg__545 = (index);
	def arg__544 = (memindex);
	def eff__543 = mach_writeMemory32_u16(arg__544, arg__545, arg__546, arg__547);
}
// phis: 
</pre>`;
window.traces.I32_STORE16["raw"] = `<pre class='graph'>---
config:
  layout: elk
---
graph TD
	1[\\"Finish"/]
	30 -. Codeptr .-> 1
	31 -. Stack .-> 1
	0 -. Trap Locals Globals Tables Extra .-> 1
	32 -. Memory .-> 1
	32{{"Sϕ Memory "}}
	15 --> 32
	29 --> 32
	22 --> 32
	22["eff__543 mach_writeMemory32_u16"]
	11 --> 22
	17 --> 22
	16 --> 22
	13 --> 22
	0 -. Memory .-> 22
	0[/"Start"\\]
	13["val pop_u32"]
	0 -. Stack .-> 13
	16["offset imm_readULEB32"]
	12 -. Codeptr .-> 16
	12{{"Sϕ Codeptr "}}
	9 --> 12
	10 --> 12
	3 --> 12
	3["flags imm_readU8"]
	0 -. Codeptr .-> 3
	10["memindex__550 imm_readULEB32"]
	3 -. Codeptr .-> 10
	9["cond__549 u8.!="]
	8 --> 9
	5 --> 9
	5["arg__552 0"]
	8["arg__551 u8.&"]
	3 --> 8
	6 --> 8
	6["arg__554 0x40u8"]
	17["index pop_u32"]
	13 -. Stack .-> 17
	11{"memindex ϕ"}
	9 --> 11
	10 --> 11
	4 --> 11
	4["memindex__555 0u"]
	29["eff__538 mach_writeMemory64_u16"]
	11 --> 29
	24 --> 29
	23 --> 29
	13 --> 29
	0 -. Memory .-> 29
	23["offset imm_readULEB64"]
	12 -. Codeptr .-> 23
	24["index pop_u64"]
	13 -. Stack .-> 24
	15["cond__537 m_isMemory64"]
	11 --> 15
	31{{"Sϕ Stack "}}
	15 --> 31
	24 --> 31
	17 --> 31
	30{{"Sϕ Codeptr "}}
	15 --> 30
	23 --> 30
	16 --> 30
</pre>`;
window.traces.I32_STORE16["overloadOps"] = `<pre class='graph'>---
config:
  layout: elk
---
graph TD
	1[\\"Finish"/]
	30 -. Codeptr .-> 1
	31 -. Stack .-> 1
	0 -. Trap Locals Globals Tables Extra .-> 1
	32 -. Memory .-> 1
	32{{"Sϕ Memory "}}
	15 --> 32
	29 --> 32
	22 --> 32
	22["eff__543 mach_writeMemory32_u16"]
	11 --> 22
	17 --> 22
	16 --> 22
	13 --> 22
	0 -. Memory .-> 22
	0[/"Start"\\]
	13["val pop_u32"]
	0 -. Stack .-> 13
	16["offset imm_readULEB32"]
	12 -. Codeptr .-> 16
	12{{"Sϕ Codeptr "}}
	9 --> 12
	10 --> 12
	3 --> 12
	3["flags imm_readU8"]
	0 -. Codeptr .-> 3
	10["memindex__550 imm_readULEB32"]
	3 -. Codeptr .-> 10
	9["cond__549 u8.!="]
	8 --> 9
	5 --> 9
	5["arg__552 0"]
	8["arg__551 u8.&"]
	3 --> 8
	6 --> 8
	6["arg__554 0x40u8"]
	17["index pop_u32"]
	13 -. Stack .-> 17
	11{"memindex ϕ"}
	9 --> 11
	10 --> 11
	4 --> 11
	4["memindex__556 0u"]
	29["eff__538 mach_writeMemory64_u16"]
	11 --> 29
	24 --> 29
	23 --> 29
	13 --> 29
	0 -. Memory .-> 29
	23["offset imm_readULEB64"]
	12 -. Codeptr .-> 23
	24["index pop_u64"]
	13 -. Stack .-> 24
	15["cond__537 m_isMemory64"]
	11 --> 15
	31{{"Sϕ Stack "}}
	15 --> 31
	24 --> 31
	17 --> 31
	30{{"Sϕ Codeptr "}}
	15 --> 30
	23 --> 30
	16 --> 30
</pre>`;
window.traces.I32_STORE16["addAbstractions"] = `<pre class='graph'>---
config:
  layout: elk
---
graph TD
	1[\\"Finish"/]
	30 -. Codeptr .-> 1
	31 -. Stack .-> 1
	0 -. Trap Locals Globals Tables Extra .-> 1
	32 -. Memory .-> 1
	32{{"Sϕ Memory "}}
	15 --> 32
	29 --> 32
	22 --> 32
	22["eff__543 mach_writeMemory32_u16"]
	11 --> 22
	17 --> 22
	16 --> 22
	13 --> 22
	0 -. Memory .-> 22
	0[/"Start"\\]
	13["val pop_u32"]
	0 -. Stack .-> 13
	16["offset imm_readULEB32"]
	12 -. Codeptr .-> 16
	12{{"Sϕ Codeptr "}}
	9 --> 12
	10 --> 12
	3 --> 12
	3["flags imm_readU8"]
	0 -. Codeptr .-> 3
	10["memindex__550 imm_readULEB32"]
	3 -. Codeptr .-> 10
	9["cond__549 u8.!="]
	8 --> 9
	5 --> 9
	5["arg__552 0"]
	8["arg__551 u8.&"]
	3 --> 8
	6 --> 8
	6["arg__554 0x40u8"]
	17["index pop_u32"]
	13 -. Stack .-> 17
	11{"memindex ϕ"}
	9 --> 11
	10 --> 11
	4 --> 11
	4["memindex__556 0u"]
	29["eff__538 mach_writeMemory64_u16"]
	11 --> 29
	24 --> 29
	23 --> 29
	13 --> 29
	0 -. Memory .-> 29
	23["offset imm_readULEB64"]
	12 -. Codeptr .-> 23
	24["index pop_u64"]
	13 -. Stack .-> 24
	15["cond__537 m_isMemory64"]
	11 --> 15
	31{{"Sϕ Stack "}}
	15 --> 31
	24 --> 31
	17 --> 31
	30{{"Sϕ Codeptr "}}
	15 --> 30
	23 --> 30
	16 --> 30
</pre>`;
window.traces.I32_STORE16["schedulerMermaid"] = `<pre class='graph'>graph TD
subgraph block_713["Block 713"]
	direction TB
	b713_1[\\"Finish"/]
	b713_23["offset imm_readULEB64"]
	b713_16["offset imm_readULEB32"]
	b713_24["index pop_u64"]
	b713_17["index pop_u32"]
	b713_29["eff__538 mach_writeMemory64_u16"]
	b713_22["eff__543 mach_writeMemory32_u16"]
	b713_13["val pop_u32"]
	b713_10["memindex__550 imm_readULEB32"]
	b713_4["memindex__556 0u"]
	b713_3["flags imm_readU8"]
	b713_23 --> b713_1
	b713_16 --> b713_23
	b713_24 --> b713_16
	b713_17 --> b713_24
	b713_29 --> b713_17
	b713_22 --> b713_29
	b713_13 --> b713_22
	b713_10 --> b713_13
	b713_4 --> b713_10
	b713_3 --> b713_4
end
phi_715 --> block_713
subgraph phi_715["Phi 715"]
	p715_32{{"Sϕ Memory "}}
	p715_31{{"Sϕ Stack "}}
	p715_30{{"Sϕ Codeptr "}}
end
block_716 --> phi_715
block_717 --> phi_715
subgraph block_716["Block 716"]
	direction TB
	b716_23["offset imm_readULEB64"]
	b716_24["index pop_u64"]
	b716_29["eff__538 mach_writeMemory64_u16"]
	b716_24 --> b716_23
	b716_29 --> b716_24
end
phi_720 --> block_716
subgraph phi_720["Phi 720"]
	p720_11{"memindex ϕ"}
	p720_11{"memindex ϕ"}
	p720_11{"memindex ϕ"}
	p720_11{"memindex ϕ"}
	p720_11{"memindex ϕ"}
end
block_721 --> phi_720
block_722 --> phi_720
subgraph block_721["Block 721"]
	direction TB
	b721_10["memindex__550 imm_readULEB32"]
end
branch_719 --> block_721
subgraph branch_719["Branch 719"]
	br719_9["cond__549 u8.!="]

end
branch_714 --> branch_719
subgraph branch_714["Branch 714"]
	br714_15["cond__537 m_isMemory64"]

end
block_718 --> branch_714
subgraph block_718["Block 718"]
	direction TB
	b718_15["cond__537 m_isMemory64"]
end
phi_724 --> block_718
subgraph phi_724["Phi 724"]
	p724_12{{"Sϕ Codeptr "}}
	p724_12{{"Sϕ Codeptr "}}
	p724_12{{"Sϕ Codeptr "}}
	p724_12{{"Sϕ Codeptr "}}
end
block_725 --> phi_724
block_726 --> phi_724
subgraph block_725["Block 725"]
	direction TB
	b725_10["memindex__550 imm_readULEB32"]
end
branch_723 --> block_725
subgraph branch_723["Branch 723"]
	br723_9["cond__549 u8.!="]

end
block_727 --> branch_723
subgraph block_727["Block 727"]
	direction TB
	b727_9["cond__549 u8.!="]
	b727_8["arg__551 u8.&"]
	b727_5["arg__552 0"]
	b727_6["arg__554 0x40u8"]
	b727_0[/"Start"\\]
	b727_8 --> b727_9
	b727_5 --> b727_8
	b727_6 --> b727_5
	b727_0 --> b727_6
end
subgraph block_726["Block 726"]
	direction TB
end
branch_723 --> block_726
subgraph block_722["Block 722"]
	direction TB
	b722_4["memindex__556 0u"]
end
branch_719 --> block_722
subgraph block_717["Block 717"]
	direction TB
	b717_16["offset imm_readULEB32"]
	b717_17["index pop_u32"]
	b717_22["eff__543 mach_writeMemory32_u16"]
	b717_17 --> b717_16
	b717_22 --> b717_17
end
branch_714 --> block_717

</pre>`;
window.traces.I32_STORE16["unLEM"] = `<pre class='graph'>---
config:
  layout: elk
---
graph TD
	1[\\"Finish"/]
	30 -. Codeptr .-> 1
	31 -. Stack .-> 1
	0 -. Trap Locals Globals Tables Extra .-> 1
	32 -. Memory .-> 1
	32{{"Sϕ Memory "}}
	15 --> 32
	29 --> 32
	22 --> 32
	22["eff__543 mach_writeMemory32_u16"]
	11 --> 22
	17 --> 22
	16 --> 22
	13 --> 22
	0 -. Memory .-> 22
	0[/"Start"\\]
	13["val pop_u32"]
	0 -. Stack .-> 13
	16["offset imm_readULEB32"]
	12 -. Codeptr .-> 16
	12{{"Sϕ Codeptr "}}
	9 --> 12
	10 --> 12
	3 --> 12
	3["flags imm_readU8"]
	0 -. Codeptr .-> 3
	10["memindex__550 imm_readULEB32"]
	3 -. Codeptr .-> 10
	9["cond__549 u8.!="]
	8 --> 9
	5 --> 9
	5["arg__552 0"]
	8["arg__551 u8.&"]
	3 --> 8
	6 --> 8
	6["arg__554 0x40u8"]
	17["index pop_u32"]
	13 -. Stack .-> 17
	11{"memindex ϕ"}
	9 --> 11
	10 --> 11
	4 --> 11
	4["memindex__556 0u"]
	29["eff__538 mach_writeMemory64_u16"]
	11 --> 29
	24 --> 29
	23 --> 29
	13 --> 29
	0 -. Memory .-> 29
	23["offset imm_readULEB64"]
	12 -. Codeptr .-> 23
	24["index pop_u64"]
	13 -. Stack .-> 24
	15["cond__537 m_isMemory64"]
	11 --> 15
	31{{"Sϕ Stack "}}
	15 --> 31
	24 --> 31
	17 --> 31
	30{{"Sϕ Codeptr "}}
	15 --> 30
	23 --> 30
	16 --> 30
</pre>`;
window.traces.I32_STORE16["unlem_schedule"] = `<pre class=''>def val = pop_u32();
def flags = imm_readU8();
def arg__554 : byte = 0x40u8;
def arg__551 = u8.&(flags, arg__554);
def arg__552 : byte = 0;
def cond__549 = u8.!=(arg__551, arg__552);
var memindex: u32;
if (cond__549) {
	def memindex__550 = imm_readULEB32();
} else {
	def memindex__556 : u32 = 0u;
}
// phis: memindex <- memindex__550; memindex <- memindex__556; 
def cond__537 = m_isMemory64(memindex);
if (cond__537) {
	def offset = imm_readULEB64();
	def index = pop_u64();
	def eff__538 = mach_writeMemory64_u16(memindex, index, offset, val);
} else {
	def offset = imm_readULEB32();
	def index = pop_u32();
	def eff__543 = mach_writeMemory32_u16(memindex, index, offset, val);
}
// phis: 
</pre>`;
