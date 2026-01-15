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
window.traces.IF["sched doIf [label]"] = `<pre class='graph'>graph TD
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
	b24_22["mb__17 bool.&&"]
	b24_21["mf__16 U32_maybeFalse"]
	b24_21 --> b24_22
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
