window.traces = {};
window.traces["UNREACHABLE"] = {}
window.traces["UNREACHABLE"]["parsed"] = ''
window.traces["UNREACHABLE"]["parsed"] += `<pre class=''>def eff__0 = trapUnreachable();
</pre>`;
window.traces["UNREACHABLE"]["raw"] = ''
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
window.traces["UNREACHABLE"]["overloadOps"] = ''
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
window.traces["UNREACHABLE"]["addAbstractions"] = ''
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
window.traces["UNREACHABLE"]["schedulerMermaid"] = ''
window.traces["UNREACHABLE"]["schedulerMermaid"] += `<pre class='graph'>graph TD
subgraph block_1["Block 1"]
	direction TB
	b1_1[\\"Finish"/]
	b1_3["eff__0 trapUnreachable"]
	b1_0[/"Start"\\]
	b1_3 --> b1_1
	b1_0 --> b1_3
end

</pre>`;
window.traces["UNREACHABLE"]["unLEM"] = ''
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
window.traces["UNREACHABLE"]["unlem_schedule"] = ''
window.traces["UNREACHABLE"]["unlem_schedule"] += `<pre class=''>def eff__0 = trapUnreachable();
</pre>`;
window.traces["UNREACHABLE"]["unlem_scheduler"] = ''
window.traces["UNREACHABLE"]["unlem_scheduler"] += `<pre class='graph'>graph TD
subgraph block_2["Block 2"]
	direction TB
	b2_1[\\"Finish"/]
	b2_3["eff__0 trapUnreachable"]
	b2_0[/"Start"\\]
	b2_3 --> b2_1
	b2_0 --> b2_3
end

</pre>`;
window.traces["UNREACHABLE"]["unlem_pretty"] = ''
window.traces["UNREACHABLE"]["unlem_pretty"] += `<pre class=''>trapUnreachable();
</pre>`;
window.traces["UNREACHABLE"]["constUnLEM"] = ''
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
window.traces["UNREACHABLE"]["chooseMerge"] = ''
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
window.traces["UNREACHABLE"]["scheduled"] = ''
window.traces["UNREACHABLE"]["scheduled"] += `<pre class=''>def eff__0 = trapUnreachable();
</pre>`;
window.traces["UNREACHABLE"]["pretty"] = ''
window.traces["UNREACHABLE"]["pretty"] += `<pre class=''>trapUnreachable();
</pre>`;
window.traces["NOP"] = {}
window.traces["NOP"]["parsed"] = ''
window.traces["NOP"]["parsed"] += `<pre class=''>def ret__1 = (void);
</pre>`;
window.traces["NOP"]["raw"] = ''
window.traces["NOP"]["raw"] += `<pre class='graph'>---
config:
  layout: elk
---
graph TD
	1[\\"Finish"/]
	0 -. Codeptr Stack Trap Locals Globals Tables Memory Extra .-> 1
	0[/"Start"\\]
</pre>`;
window.traces["NOP"]["overloadOps"] = ''
window.traces["NOP"]["overloadOps"] += `<pre class='graph'>---
config:
  layout: elk
---
graph TD
	1[\\"Finish"/]
	0 -. Codeptr Stack Trap Locals Globals Tables Memory Extra .-> 1
	0[/"Start"\\]
</pre>`;
window.traces["NOP"]["addAbstractions"] = ''
window.traces["NOP"]["addAbstractions"] += `<pre class='graph'>---
config:
  layout: elk
---
graph TD
	1[\\"Finish"/]
	0 -. Codeptr Stack Trap Locals Globals Tables Memory Extra .-> 1
	0[/"Start"\\]
</pre>`;
window.traces["NOP"]["schedulerMermaid"] = ''
window.traces["NOP"]["schedulerMermaid"] += `<pre class='graph'>graph TD
subgraph block_3["Block 3"]
	direction TB
	b3_1[\\"Finish"/]
	b3_0[/"Start"\\]
	b3_0 --> b3_1
end

</pre>`;
window.traces["NOP"]["unLEM"] = ''
window.traces["NOP"]["unLEM"] += `<pre class='graph'>---
config:
  layout: elk
---
graph TD
	1[\\"Finish"/]
	0 -. Codeptr Stack Trap Locals Globals Tables Memory Extra .-> 1
	0[/"Start"\\]
</pre>`;
window.traces["NOP"]["unlem_schedule"] = ''
window.traces["NOP"]["unlem_schedule"] += `<pre class=''></pre>`;
window.traces["NOP"]["unlem_scheduler"] = ''
window.traces["NOP"]["unlem_scheduler"] += `<pre class='graph'>graph TD
subgraph block_4["Block 4"]
	direction TB
	b4_1[\\"Finish"/]
	b4_0[/"Start"\\]
	b4_0 --> b4_1
end

</pre>`;
window.traces["NOP"]["unlem_pretty"] = ''
window.traces["NOP"]["unlem_pretty"] += `<pre class=''></pre>`;
window.traces["NOP"]["constUnLEM"] = ''
window.traces["NOP"]["constUnLEM"] += `<pre class='graph'>---
config:
  layout: elk
---
graph TD
	1[\\"Finish"/]
	0 -. Codeptr Stack Trap Locals Globals Tables Memory Extra .-> 1
	0[/"Start"\\]
</pre>`;
window.traces["NOP"]["chooseMerge"] = ''
window.traces["NOP"]["chooseMerge"] += `<pre class='graph'>---
config:
  layout: elk
---
graph TD
	1[\\"Finish"/]
	0 -. Codeptr Stack Trap Locals Globals Tables Memory Extra .-> 1
	0[/"Start"\\]
</pre>`;
window.traces["NOP"]["scheduled"] = ''
window.traces["NOP"]["scheduled"] += `<pre class=''></pre>`;
window.traces["NOP"]["pretty"] = ''
window.traces["NOP"]["pretty"] += `<pre class=''></pre>`;
window.traces["BLOCK"] = {}
window.traces["BLOCK"]["parsed"] = ''
window.traces["BLOCK"]["parsed"] += `<pre class=''>def bt = imm_readBlockType();
def arg__3 = (bt);
def eff__2 = doBlock(arg__3);
</pre>`;
window.traces["BLOCK"]["raw"] = ''
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
window.traces["BLOCK"]["overloadOps"] = ''
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
window.traces["BLOCK"]["addAbstractions"] = ''
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
window.traces["BLOCK"]["schedulerMermaid"] = ''
window.traces["BLOCK"]["schedulerMermaid"] += `<pre class='graph'>graph TD
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
window.traces["BLOCK"]["unLEM"] = ''
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
window.traces["BLOCK"]["unlem_schedule"] = ''
window.traces["BLOCK"]["unlem_schedule"] += `<pre class=''>def bt = imm_readBlockType();
def eff__2 = doBlock(bt);
</pre>`;
window.traces["BLOCK"]["unlem_scheduler"] = ''
window.traces["BLOCK"]["unlem_scheduler"] += `<pre class='graph'>graph TD
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
window.traces["BLOCK"]["unlem_pretty"] = ''
window.traces["BLOCK"]["unlem_pretty"] += `<pre class=''>def bt = imm_readBlockType();
doBlock(bt);
</pre>`;
window.traces["BLOCK"]["constUnLEM"] = ''
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
window.traces["BLOCK"]["chooseMerge"] = ''
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
window.traces["BLOCK"]["scheduled"] = ''
window.traces["BLOCK"]["scheduled"] += `<pre class=''>def bt = imm_readBlockType();
def eff__2 = doBlock(bt);
</pre>`;
window.traces["BLOCK"]["pretty"] = ''
window.traces["BLOCK"]["pretty"] += `<pre class=''>def bt = imm_readBlockType();
doBlock(bt);
</pre>`;
window.traces["LOOP"] = {}
window.traces["LOOP"]["parsed"] = ''
window.traces["LOOP"]["parsed"] += `<pre class=''>def bt = imm_readBlockType();
def arg__5 = (bt);
def eff__4 = doLoop(arg__5);
</pre>`;
window.traces["LOOP"]["raw"] = ''
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
window.traces["LOOP"]["overloadOps"] = ''
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
window.traces["LOOP"]["addAbstractions"] = ''
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
window.traces["LOOP"]["schedulerMermaid"] = ''
window.traces["LOOP"]["schedulerMermaid"] += `<pre class='graph'>graph TD
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
window.traces["LOOP"]["unLEM"] = ''
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
window.traces["LOOP"]["unlem_schedule"] = ''
window.traces["LOOP"]["unlem_schedule"] += `<pre class=''>def bt = imm_readBlockType();
def eff__4 = doLoop(bt);
</pre>`;
window.traces["LOOP"]["unlem_scheduler"] = ''
window.traces["LOOP"]["unlem_scheduler"] += `<pre class='graph'>graph TD
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
window.traces["LOOP"]["unlem_pretty"] = ''
window.traces["LOOP"]["unlem_pretty"] += `<pre class=''>def bt = imm_readBlockType();
doLoop(bt);
</pre>`;
window.traces["LOOP"]["constUnLEM"] = ''
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
window.traces["LOOP"]["chooseMerge"] = ''
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
window.traces["LOOP"]["scheduled"] = ''
window.traces["LOOP"]["scheduled"] += `<pre class=''>def bt = imm_readBlockType();
def eff__4 = doLoop(bt);
</pre>`;
window.traces["LOOP"]["pretty"] = ''
window.traces["LOOP"]["pretty"] += `<pre class=''>def bt = imm_readBlockType();
doLoop(bt);
</pre>`;
window.traces["IF"] = {}
window.traces["IF"]["parsed"] = ''
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
window.traces["IF"]["raw"] = ''
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
window.traces["IF"]["overloadOps"] = ''
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
window.traces["IF"]["addAbstractions"] = ''
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
window.traces["IF"]["sched Finish"] = ''
window.traces["IF"]["sched Finish"] += `<pre class='graph'>graph TD
subgraph block_9["Block 9"]
	direction TB
	b9_1[\\"Finish"/]
end

</pre>`;
window.traces["IF"]["sched ctlxfer.put_IF [eff_st_put__13]"] = ''
window.traces["IF"]["sched ctlxfer.put_IF [eff_st_put__13]"] += `<pre class='graph'>graph TD
subgraph block_9["Block 9"]
	direction TB
	b9_1[\\"Finish"/]
	b9_14["eff_st_put__13 ctlxfer.put_IF"]
	b9_14 --> b9_1
end

</pre>`;
window.traces["IF"]["sched doBranch [eff__7]"] = ''
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
window.traces["IF"]["sched doFallthru [eff__9]"] = ''
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
window.traces["IF"]["sched StatePhi"] = ''
window.traces["IF"]["sched StatePhi"] += `<pre class='graph'>graph TD
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
window.traces["IF"]["sched U32_equals [cond__6]"] = ''
window.traces["IF"]["sched U32_equals [cond__6]"] += `<pre class='graph'>graph TD
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
window.traces["IF"]["sched doBranch [eff__7]"] += `<pre class='graph'>graph TD
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
window.traces["IF"]["sched doFallthru [eff__9]"] += `<pre class='graph'>graph TD
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
window.traces["IF"]["sched imm_readBlockType [bt]"] = ''
window.traces["IF"]["sched imm_readBlockType [bt]"] += `<pre class='graph'>graph TD
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
window.traces["IF"]["sched pop_u32 [cond]"] = ''
window.traces["IF"]["sched pop_u32 [cond]"] += `<pre class='graph'>graph TD
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
window.traces["IF"]["sched lift_u32 [abs__14]"] = ''
window.traces["IF"]["sched lift_u32 [abs__14]"] += `<pre class='graph'>graph TD
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
window.traces["IF"]["sched doIf [label]"] = ''
window.traces["IF"]["sched doIf [label]"] += `<pre class='graph'>graph TD
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
window.traces["IF"]["sched pop_u32 [cond]"] += `<pre class='graph'>graph TD
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
window.traces["IF"]["sched 0"] = ''
window.traces["IF"]["sched 0"] += `<pre class='graph'>graph TD
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
window.traces["IF"]["sched imm_readBlockType [bt]"] += `<pre class='graph'>graph TD
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
window.traces["IF"]["sched Start"] = ''
window.traces["IF"]["sched Start"] += `<pre class='graph'>graph TD
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
window.traces["IF"]["schedulerMermaid"] = ''
window.traces["IF"]["schedulerMermaid"] += `<pre class='graph'>graph TD
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
window.traces["IF"]["unLEM"] = ''
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
window.traces["IF"]["unlem_schedule"] = ''
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
window.traces["IF_ul"] = {}
window.traces["IF_ul"]["sched Finish"] = ''
window.traces["IF_ul"]["sched Finish"] += `<pre class='graph'>graph TD
subgraph block_15["Block 15"]
	direction TB
	b15_1[\\"Finish"/]
end

</pre>`;
window.traces["IF_ul"]["sched ctlxfer.put_IF [eff_st_put__13]"] = ''
window.traces["IF_ul"]["sched ctlxfer.put_IF [eff_st_put__13]"] += `<pre class='graph'>graph TD
subgraph block_15["Block 15"]
	direction TB
	b15_1[\\"Finish"/]
	b15_14["eff_st_put__13 ctlxfer.put_IF"]
	b15_14 --> b15_1
end

</pre>`;
window.traces["IF_ul"]["sched merge [eff_merge__18]"] = ''
window.traces["IF_ul"]["sched merge [eff_merge__18]"] += `<pre class='graph'>graph TD
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
window.traces["IF_ul"]["sched StatePhi"] = ''
window.traces["IF_ul"]["sched StatePhi"] += `<pre class='graph'>graph TD
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
window.traces["IF_ul"]["sched StatePhi"] += `<pre class='graph'>graph TD
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
window.traces["IF_ul"]["sched merge [eff_merge__18]"] += `<pre class='graph'>graph TD
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
window.traces["IF_ul"]["sched StatePhi"] += `<pre class='graph'>graph TD
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
window.traces["IF_ul"]["sched U32_maybeTrue [mt__15]"] = ''
window.traces["IF_ul"]["sched U32_maybeTrue [mt__15]"] += `<pre class='graph'>graph TD
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
window.traces["IF_ul"]["sched U32_maybeFalse [mf__16]"] = ''
window.traces["IF_ul"]["sched U32_maybeFalse [mf__16]"] += `<pre class='graph'>graph TD
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
window.traces["IF_ul"]["sched doBranch [eff__7]"] = ''
window.traces["IF_ul"]["sched doBranch [eff__7]"] += `<pre class='graph'>graph TD
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
window.traces["IF_ul"]["sched doFallthru [eff__9]"] = ''
window.traces["IF_ul"]["sched doFallthru [eff__9]"] += `<pre class='graph'>graph TD
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
window.traces["IF_ul"]["sched doIf [label]"] = ''
window.traces["IF_ul"]["sched doIf [label]"] += `<pre class='graph'>graph TD
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
window.traces["IF_ul"]["sched U32_equals [cond__6]"] = ''
window.traces["IF_ul"]["sched U32_equals [cond__6]"] += `<pre class='graph'>graph TD
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
window.traces["IF_ul"]["sched imm_readBlockType [bt]"] = ''
window.traces["IF_ul"]["sched imm_readBlockType [bt]"] += `<pre class='graph'>graph TD
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
window.traces["IF_ul"]["sched pop_u32 [cond]"] = ''
window.traces["IF_ul"]["sched pop_u32 [cond]"] += `<pre class='graph'>graph TD
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
window.traces["IF_ul"]["sched lift_u32 [abs__14]"] = ''
window.traces["IF_ul"]["sched lift_u32 [abs__14]"] += `<pre class='graph'>graph TD
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
window.traces["IF_ul"]["sched 0"] = ''
window.traces["IF_ul"]["sched 0"] += `<pre class='graph'>graph TD
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
window.traces["IF_ul"]["sched Start"] = ''
window.traces["IF_ul"]["sched Start"] += `<pre class='graph'>graph TD
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
window.traces["IF"]["unlem_scheduler"] = ''
window.traces["IF"]["unlem_scheduler"] += `<pre class='graph'>graph TD
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
window.traces["IF"]["unlem_pretty"] = ''
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
window.traces["IF"]["constUnLEM"] = ''
window.traces["IF"]["constUnLEM"] += `<pre class='graph'>---
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
window.traces["IF"]["chooseMerge"] = ''
window.traces["IF"]["chooseMerge"] += `<pre class='graph'>---
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
window.traces["IF"]["scheduled"] = ''
window.traces["IF"]["scheduled"] += `<pre class=''>def bt = imm_readBlockType();
def cond = pop_u32();
def label = doIf(bt);
def eff__7 = doBranch(label);
def eff__9 = doFallthru();
def eff_merge__18 = merge(eff__7, eff__9);
def eff_merge__18 = merge(eff__7, eff__9);
def eff_st_put__13 = ctlxfer.put_IF(label);
</pre>`;
window.traces["IF"]["pretty"] = ''
window.traces["IF"]["pretty"] += `<pre class=''>def bt = imm_readBlockType();
def cond = pop_u32();
def label = doIf(bt);
doBranch(label);
doFallthru();
ctlxfer.put_IF(label);
</pre>`;
window.traces["ELSE"] = {}
window.traces["ELSE"]["parsed"] = ''
window.traces["ELSE"]["parsed"] += `<pre class=''>def label = doElse();
def arg__20 = (label);
def eff__19 = doBranch(arg__20);
</pre>`;
window.traces["ELSE"]["raw"] = ''
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
window.traces["ELSE"]["overloadOps"] = ''
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
window.traces["ELSE"]["addAbstractions"] = ''
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
window.traces["ELSE"]["schedulerMermaid"] = ''
window.traces["ELSE"]["schedulerMermaid"] += `<pre class='graph'>graph TD
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
window.traces["ELSE"]["unLEM"] = ''
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
window.traces["ELSE"]["unlem_schedule"] = ''
window.traces["ELSE"]["unlem_schedule"] += `<pre class=''>def label = doElse();
def eff__19 = doBranch(label);
def eff_st_put__21 = ctlxfer.put_ELSE(label);
</pre>`;
window.traces["ELSE"]["unlem_scheduler"] = ''
window.traces["ELSE"]["unlem_scheduler"] += `<pre class='graph'>graph TD
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
window.traces["ELSE"]["unlem_pretty"] = ''
window.traces["ELSE"]["unlem_pretty"] += `<pre class=''>def label = doElse();
doBranch(label);
ctlxfer.put_ELSE(label);
</pre>`;
window.traces["ELSE"]["constUnLEM"] = ''
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
window.traces["ELSE"]["chooseMerge"] = ''
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
window.traces["ELSE"]["scheduled"] = ''
window.traces["ELSE"]["scheduled"] += `<pre class=''>def label = doElse();
def eff__19 = doBranch(label);
def eff_st_put__21 = ctlxfer.put_ELSE(label);
</pre>`;
window.traces["ELSE"]["pretty"] = ''
window.traces["ELSE"]["pretty"] += `<pre class=''>def label = doElse();
doBranch(label);
ctlxfer.put_ELSE(label);
</pre>`;
window.traces["TRY"] = {}
window.traces["TRY"]["parsed"] = ''
window.traces["TRY"]["parsed"] += `<pre class=''>def bt = imm_readBlockType();
def arg__23 = (bt);
def eff__22 = doTry(arg__23);
</pre>`;
window.traces["TRY"]["raw"] = ''
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
window.traces["TRY"]["overloadOps"] = ''
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
window.traces["TRY"]["addAbstractions"] = ''
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
window.traces["TRY"]["schedulerMermaid"] = ''
window.traces["TRY"]["schedulerMermaid"] += `<pre class='graph'>graph TD
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
window.traces["TRY"]["unLEM"] = ''
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
window.traces["TRY"]["unlem_schedule"] = ''
window.traces["TRY"]["unlem_schedule"] += `<pre class=''>def bt = imm_readBlockType();
def eff__22 = doTry(bt);
</pre>`;
window.traces["TRY"]["unlem_scheduler"] = ''
window.traces["TRY"]["unlem_scheduler"] += `<pre class='graph'>graph TD
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
window.traces["TRY"]["unlem_pretty"] = ''
window.traces["TRY"]["unlem_pretty"] += `<pre class=''>def bt = imm_readBlockType();
doTry(bt);
</pre>`;
window.traces["TRY"]["constUnLEM"] = ''
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
window.traces["TRY"]["chooseMerge"] = ''
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
window.traces["TRY"]["scheduled"] = ''
window.traces["TRY"]["scheduled"] += `<pre class=''>def bt = imm_readBlockType();
def eff__22 = doTry(bt);
</pre>`;
window.traces["TRY"]["pretty"] = ''
window.traces["TRY"]["pretty"] += `<pre class=''>def bt = imm_readBlockType();
doTry(bt);
</pre>`;
window.traces["END"] = {}
window.traces["END"]["parsed"] = ''
window.traces["END"]["parsed"] += `<pre class=''>def eff__26 = doEnd();
def cond__24 = f_isAtEnd();
if (cond__24) {
	def eff__25 = doReturn();
}
// phis: 
</pre>`;
window.traces["END"]["raw"] = ''
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
window.traces["END"]["overloadOps"] = ''
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
window.traces["END"]["addAbstractions"] = ''
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
window.traces["END"]["schedulerMermaid"] = ''
window.traces["END"]["schedulerMermaid"] += `<pre class='graph'>graph TD
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
window.traces["END"]["unLEM"] = ''
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
window.traces["END"]["unlem_schedule"] = ''
window.traces["END"]["unlem_schedule"] += `<pre class=''>def cond__24 = f_isAtEnd();
if (cond__24) {
	def eff__26 = doEnd();
	def eff__25 = doReturn();
} else {
	def eff__26 = doEnd();
}
// phis: 
</pre>`;
window.traces["END"]["unlem_scheduler"] = ''
window.traces["END"]["unlem_scheduler"] += `<pre class='graph'>graph TD
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
window.traces["END"]["unlem_pretty"] = ''
window.traces["END"]["unlem_pretty"] += `<pre class=''>if (f_isAtEnd()) {
	doEnd();
	doReturn();
} else {
	doEnd();
}
</pre>`;
window.traces["END"]["constUnLEM"] = ''
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
window.traces["END"]["chooseMerge"] = ''
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
window.traces["END"]["scheduled"] = ''
window.traces["END"]["scheduled"] += `<pre class=''>def cond__24 = f_isAtEnd();
if (cond__24) {
	def eff__26 = doEnd();
	def eff__25 = doReturn();
} else {
	def eff__26 = doEnd();
}
// phis: 
</pre>`;
window.traces["END"]["pretty"] = ''
window.traces["END"]["pretty"] += `<pre class=''>if (f_isAtEnd()) {
	doEnd();
	doReturn();
} else {
	doEnd();
}
</pre>`;
window.traces["BR"] = {}
window.traces["BR"]["parsed"] = ''
window.traces["BR"]["parsed"] += `<pre class=''>def depth = imm_readULEB32();
def arg__29 = (depth);
def label = f_getLabel(arg__29);
def arg__28 = (label);
def eff__27 = doBranch(arg__28);
</pre>`;
window.traces["BR"]["raw"] = ''
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
window.traces["BR"]["overloadOps"] = ''
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
window.traces["BR"]["addAbstractions"] = ''
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
window.traces["BR"]["schedulerMermaid"] = ''
window.traces["BR"]["schedulerMermaid"] += `<pre class='graph'>graph TD
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
window.traces["BR"]["unLEM"] = ''
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
window.traces["BR"]["unlem_schedule"] = ''
window.traces["BR"]["unlem_schedule"] += `<pre class=''>def depth = imm_readULEB32();
def label = f_getLabel(depth);
def eff__27 = doBranch(label);
def eff_st_put__30 = ctlxfer.put_BR(label);
</pre>`;
window.traces["BR"]["unlem_scheduler"] = ''
window.traces["BR"]["unlem_scheduler"] += `<pre class='graph'>graph TD
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
window.traces["BR"]["unlem_pretty"] = ''
window.traces["BR"]["unlem_pretty"] += `<pre class=''>def depth = imm_readULEB32();
def label = f_getLabel(depth);
doBranch(label);
ctlxfer.put_BR(label);
</pre>`;
window.traces["BR"]["constUnLEM"] = ''
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
window.traces["BR"]["chooseMerge"] = ''
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
window.traces["BR"]["scheduled"] = ''
window.traces["BR"]["scheduled"] += `<pre class=''>def depth = imm_readULEB32();
def label = f_getLabel(depth);
def eff__27 = doBranch(label);
def eff_st_put__30 = ctlxfer.put_BR(label);
</pre>`;
window.traces["BR"]["pretty"] = ''
window.traces["BR"]["pretty"] += `<pre class=''>def depth = imm_readULEB32();
def label = f_getLabel(depth);
doBranch(label);
ctlxfer.put_BR(label);
</pre>`;
window.traces["BR_IF"] = {}
window.traces["BR_IF"]["parsed"] = ''
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
window.traces["BR_IF"]["raw"] = ''
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
window.traces["BR_IF"]["overloadOps"] = ''
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
window.traces["BR_IF"]["addAbstractions"] = ''
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
window.traces["BR_IF"]["schedulerMermaid"] = ''
window.traces["BR_IF"]["schedulerMermaid"] += `<pre class='graph'>graph TD
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
window.traces["BR_IF"]["unLEM"] = ''
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
window.traces["BR_IF"]["unlem_schedule"] = ''
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
window.traces["BR_IF"]["unlem_scheduler"] = ''
window.traces["BR_IF"]["unlem_scheduler"] += `<pre class='graph'>graph TD
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
window.traces["BR_IF"]["unlem_pretty"] = ''
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
window.traces["BR_IF"]["constUnLEM"] = ''
window.traces["BR_IF"]["constUnLEM"] += `<pre class='graph'>---
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
window.traces["BR_IF"]["chooseMerge"] = ''
window.traces["BR_IF"]["chooseMerge"] += `<pre class='graph'>---
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
window.traces["BR_IF"]["scheduled"] = ''
window.traces["BR_IF"]["scheduled"] += `<pre class=''>def depth = imm_readULEB32();
def label = f_getLabel(depth);
def cond = pop_u32();
def eff__32 = doBranch(label);
def eff__34 = doFallthru();
def eff_merge__43 = merge(eff__32, eff__34);
def eff_merge__43 = merge(eff__32, eff__34);
def eff_st_put__38 = ctlxfer.put_BR_IF(label);
</pre>`;
window.traces["BR_IF"]["pretty"] = ''
window.traces["BR_IF"]["pretty"] += `<pre class=''>def depth = imm_readULEB32();
def label = f_getLabel(depth);
def cond = pop_u32();
doBranch(label);
doFallthru();
ctlxfer.put_BR_IF(label);
</pre>`;
window.traces["BR_TABLE"] = {}
window.traces["BR_TABLE"]["parsed"] = ''
window.traces["BR_TABLE"]["parsed"] += `<pre class=''>def labels = imm_readLabels();
def key = pop_u32();
def arg__46 = (key);
def arg__45 = (labels);
def eff__44 = doSwitch(arg__45, arg__46);
</pre>`;
window.traces["BR_TABLE"]["raw"] = ''
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
window.traces["BR_TABLE"]["overloadOps"] = ''
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
window.traces["BR_TABLE"]["addAbstractions"] = ''
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
window.traces["BR_TABLE"]["schedulerMermaid"] = ''
window.traces["BR_TABLE"]["schedulerMermaid"] += `<pre class='graph'>graph TD
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
window.traces["BR_TABLE"]["unLEM"] = ''
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
window.traces["BR_TABLE"]["unlem_schedule"] = ''
window.traces["BR_TABLE"]["unlem_schedule"] += `<pre class=''>def labels = imm_readLabels();
def key = pop_u32();
def eff__44 = doSwitch(labels, key);
def eff_st_put__47 = ctlxfer.put_BR_TABLE(labels);
</pre>`;
window.traces["BR_TABLE"]["unlem_scheduler"] = ''
window.traces["BR_TABLE"]["unlem_scheduler"] += `<pre class='graph'>graph TD
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
window.traces["BR_TABLE"]["unlem_pretty"] = ''
window.traces["BR_TABLE"]["unlem_pretty"] += `<pre class=''>def labels = imm_readLabels();
def key = pop_u32();
doSwitch(labels, key);
ctlxfer.put_BR_TABLE(labels);
</pre>`;
window.traces["BR_TABLE"]["constUnLEM"] = ''
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
window.traces["BR_TABLE"]["chooseMerge"] = ''
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
window.traces["BR_TABLE"]["scheduled"] = ''
window.traces["BR_TABLE"]["scheduled"] += `<pre class=''>def labels = imm_readLabels();
def key = pop_u32();
def eff__44 = doSwitch(labels, key);
def eff_st_put__47 = ctlxfer.put_BR_TABLE(labels);
</pre>`;
window.traces["BR_TABLE"]["pretty"] = ''
window.traces["BR_TABLE"]["pretty"] += `<pre class=''>def labels = imm_readLabels();
def key = pop_u32();
doSwitch(labels, key);
ctlxfer.put_BR_TABLE(labels);
</pre>`;
window.traces["RETURN"] = {}
window.traces["RETURN"]["parsed"] = ''
window.traces["RETURN"]["parsed"] += `<pre class=''>def eff__48 = doReturn();
</pre>`;
window.traces["RETURN"]["raw"] = ''
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
window.traces["RETURN"]["overloadOps"] = ''
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
window.traces["RETURN"]["addAbstractions"] = ''
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
window.traces["RETURN"]["schedulerMermaid"] = ''
window.traces["RETURN"]["schedulerMermaid"] += `<pre class='graph'>graph TD
subgraph block_69["Block 69"]
	direction TB
	b69_1[\\"Finish"/]
	b69_3["eff__48 doReturn"]
	b69_0[/"Start"\\]
	b69_3 --> b69_1
	b69_0 --> b69_3
end

</pre>`;
window.traces["RETURN"]["unLEM"] = ''
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
window.traces["RETURN"]["unlem_schedule"] = ''
window.traces["RETURN"]["unlem_schedule"] += `<pre class=''>def eff__48 = doReturn();
</pre>`;
window.traces["RETURN"]["unlem_scheduler"] = ''
window.traces["RETURN"]["unlem_scheduler"] += `<pre class='graph'>graph TD
subgraph block_70["Block 70"]
	direction TB
	b70_1[\\"Finish"/]
	b70_3["eff__48 doReturn"]
	b70_0[/"Start"\\]
	b70_3 --> b70_1
	b70_0 --> b70_3
end

</pre>`;
window.traces["RETURN"]["unlem_pretty"] = ''
window.traces["RETURN"]["unlem_pretty"] += `<pre class=''>doReturn();
</pre>`;
window.traces["RETURN"]["constUnLEM"] = ''
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
window.traces["RETURN"]["chooseMerge"] = ''
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
window.traces["RETURN"]["scheduled"] = ''
window.traces["RETURN"]["scheduled"] += `<pre class=''>def eff__48 = doReturn();
</pre>`;
window.traces["RETURN"]["pretty"] = ''
window.traces["RETURN"]["pretty"] += `<pre class=''>doReturn();
</pre>`;
window.traces["CALL"] = {}
window.traces["CALL"]["parsed"] = ''
window.traces["CALL"]["parsed"] += `<pre class=''>def index = imm_readULEB32();
def arg__53 = (index);
def sig = m_getFuncSignature(arg__53);
def arg__52 = (index);
def target = i_getFunction(arg__52);
def arg__51 = (target);
def arg__50 = (sig);
def eff__49 = doCall(arg__50, arg__51);
</pre>`;
window.traces["CALL"]["raw"] = ''
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
window.traces["CALL"]["overloadOps"] = ''
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
window.traces["CALL"]["addAbstractions"] = ''
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
window.traces["CALL"]["schedulerMermaid"] = ''
window.traces["CALL"]["schedulerMermaid"] += `<pre class='graph'>graph TD
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
window.traces["CALL"]["unLEM"] = ''
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
window.traces["CALL"]["unlem_schedule"] = ''
window.traces["CALL"]["unlem_schedule"] += `<pre class=''>def index = imm_readULEB32();
def sig = m_getFuncSignature(index);
def target = i_getFunction(index);
def eff__49 = doCall(sig, target);
</pre>`;
window.traces["CALL"]["unlem_scheduler"] = ''
window.traces["CALL"]["unlem_scheduler"] += `<pre class='graph'>graph TD
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
window.traces["CALL"]["unlem_pretty"] = ''
window.traces["CALL"]["unlem_pretty"] += `<pre class=''>def index = imm_readULEB32();
def sig = m_getFuncSignature(index);
def target = i_getFunction(index);
doCall(sig, target);
</pre>`;
window.traces["CALL"]["constUnLEM"] = ''
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
window.traces["CALL"]["chooseMerge"] = ''
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
window.traces["CALL"]["scheduled"] = ''
window.traces["CALL"]["scheduled"] += `<pre class=''>def index = imm_readULEB32();
def sig = m_getFuncSignature(index);
def target = i_getFunction(index);
def eff__49 = doCall(sig, target);
</pre>`;
window.traces["CALL"]["pretty"] = ''
window.traces["CALL"]["pretty"] += `<pre class=''>def index = imm_readULEB32();
def sig = m_getFuncSignature(index);
def target = i_getFunction(index);
doCall(sig, target);
</pre>`;
window.traces["CALL_INDIRECT"] = {}
window.traces["CALL_INDIRECT"]["parsed"] = ''
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
window.traces["CALL_INDIRECT"]["raw"] = ''
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
window.traces["CALL_INDIRECT"]["overloadOps"] = ''
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
window.traces["CALL_INDIRECT"]["addAbstractions"] = ''
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
window.traces["CALL_INDIRECT"]["schedulerMermaid"] = ''
window.traces["CALL_INDIRECT"]["schedulerMermaid"] += `<pre class='graph'>graph TD
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
end
branch_74 --> block_77

</pre>`;
window.traces["CALL_INDIRECT"]["unLEM"] = ''
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
window.traces["CALL_INDIRECT"]["unlem_schedule"] = ''
window.traces["CALL_INDIRECT"]["unlem_schedule"] += `<pre class=''>def sig_index = imm_readULEB32();
def table_index = imm_readULEB32();
def is64 = m_isTable64(table_index);
def eff_st_put__69 = ctlxfer.put_CALL_INDIRECT(is64);
</pre>`;
window.traces["CALL_INDIRECT"]["unlem_scheduler"] = ''
window.traces["CALL_INDIRECT"]["unlem_scheduler"] += `<pre class='graph'>graph TD
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
end
branch_80 --> block_83

</pre>`;
window.traces["CALL_INDIRECT"]["unlem_pretty"] = ''
window.traces["CALL_INDIRECT"]["unlem_pretty"] += `<pre class=''>def sig_index = imm_readULEB32();
def table_index = imm_readULEB32();
def is64 = m_isTable64(table_index);
ctlxfer.put_CALL_INDIRECT(is64);
</pre>`;
window.traces["CALL_INDIRECT"]["constUnLEM"] = ''
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
window.traces["CALL_INDIRECT"]["chooseMerge"] = ''
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
window.traces["CALL_INDIRECT"]["scheduled"] = ''
window.traces["CALL_INDIRECT"]["scheduled"] += `<pre class=''>def sig_index = imm_readULEB32();
def table_index = imm_readULEB32();
def is64 = m_isTable64(table_index);
def eff_st_put__69 = ctlxfer.put_CALL_INDIRECT(is64);
</pre>`;
window.traces["CALL_INDIRECT"]["pretty"] = ''
window.traces["CALL_INDIRECT"]["pretty"] += `<pre class=''>def sig_index = imm_readULEB32();
def table_index = imm_readULEB32();
def is64 = m_isTable64(table_index);
ctlxfer.put_CALL_INDIRECT(is64);
</pre>`;
window.traces["RETURN_CALL"] = {}
window.traces["RETURN_CALL"]["parsed"] = ''
window.traces["RETURN_CALL"]["parsed"] += `<pre class=''>def index = imm_readULEB32();
def arg__74 = (index);
def sig = m_getFuncSignature(arg__74);
def arg__73 = (index);
def target = i_getFunction(arg__73);
def arg__72 = (target);
def arg__71 = (sig);
def eff__70 = doReturnCall(arg__71, arg__72);
</pre>`;
window.traces["RETURN_CALL"]["raw"] = ''
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
window.traces["RETURN_CALL"]["overloadOps"] = ''
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
window.traces["RETURN_CALL"]["addAbstractions"] = ''
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
window.traces["RETURN_CALL"]["schedulerMermaid"] = ''
window.traces["RETURN_CALL"]["schedulerMermaid"] += `<pre class='graph'>graph TD
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
window.traces["RETURN_CALL"]["unLEM"] = ''
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
window.traces["RETURN_CALL"]["unlem_schedule"] = ''
window.traces["RETURN_CALL"]["unlem_schedule"] += `<pre class=''>def index = imm_readULEB32();
def sig = m_getFuncSignature(index);
def target = i_getFunction(index);
def eff__70 = doReturnCall(sig, target);
</pre>`;
window.traces["RETURN_CALL"]["unlem_scheduler"] = ''
window.traces["RETURN_CALL"]["unlem_scheduler"] += `<pre class='graph'>graph TD
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
window.traces["RETURN_CALL"]["unlem_pretty"] = ''
window.traces["RETURN_CALL"]["unlem_pretty"] += `<pre class=''>def index = imm_readULEB32();
def sig = m_getFuncSignature(index);
def target = i_getFunction(index);
doReturnCall(sig, target);
</pre>`;
window.traces["RETURN_CALL"]["constUnLEM"] = ''
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
window.traces["RETURN_CALL"]["chooseMerge"] = ''
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
window.traces["RETURN_CALL"]["scheduled"] = ''
window.traces["RETURN_CALL"]["scheduled"] += `<pre class=''>def index = imm_readULEB32();
def sig = m_getFuncSignature(index);
def target = i_getFunction(index);
def eff__70 = doReturnCall(sig, target);
</pre>`;
window.traces["RETURN_CALL"]["pretty"] = ''
window.traces["RETURN_CALL"]["pretty"] += `<pre class=''>def index = imm_readULEB32();
def sig = m_getFuncSignature(index);
def target = i_getFunction(index);
doReturnCall(sig, target);
</pre>`;
window.traces["DROP"] = {}
window.traces["DROP"]["parsed"] = ''
window.traces["DROP"]["parsed"] += `<pre class=''>def tv = f_getTopOfStackType();
def arg__76 = (tv);
def eff__75 = pop_Value(arg__76);
</pre>`;
window.traces["DROP"]["raw"] = ''
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
window.traces["DROP"]["overloadOps"] = ''
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
window.traces["DROP"]["addAbstractions"] = ''
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
window.traces["DROP"]["schedulerMermaid"] = ''
window.traces["DROP"]["schedulerMermaid"] += `<pre class='graph'>graph TD
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
window.traces["DROP"]["unLEM"] = ''
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
window.traces["DROP"]["unlem_schedule"] = ''
window.traces["DROP"]["unlem_schedule"] += `<pre class=''>def tv = f_getTopOfStackType();
def eff__75 = pop_Value(tv);
</pre>`;
window.traces["DROP"]["unlem_scheduler"] = ''
window.traces["DROP"]["unlem_scheduler"] += `<pre class='graph'>graph TD
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
window.traces["DROP"]["unlem_pretty"] = ''
window.traces["DROP"]["unlem_pretty"] += `<pre class=''>def tv = f_getTopOfStackType();
pop_Value(tv);
</pre>`;
window.traces["DROP"]["constUnLEM"] = ''
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
window.traces["DROP"]["chooseMerge"] = ''
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
window.traces["DROP"]["scheduled"] = ''
window.traces["DROP"]["scheduled"] += `<pre class=''>def tv = f_getTopOfStackType();
def eff__75 = pop_Value(tv);
</pre>`;
window.traces["DROP"]["pretty"] = ''
window.traces["DROP"]["pretty"] += `<pre class=''>def tv = f_getTopOfStackType();
pop_Value(tv);
</pre>`;
window.traces["SELECT"] = {}
window.traces["SELECT"]["parsed"] = ''
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
window.traces["SELECT"]["raw"] = ''
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
window.traces["SELECT"]["overloadOps"] = ''
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
window.traces["SELECT"]["addAbstractions"] = ''
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
window.traces["SELECT"]["schedulerMermaid"] = ''
window.traces["SELECT"]["schedulerMermaid"] += `<pre class='graph'>graph TD
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
end
branch_90 --> block_93

</pre>`;
window.traces["SELECT"]["unLEM"] = ''
window.traces["SELECT"]["unLEM"] += `<pre class='graph'>---
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
window.traces["SELECT"]["unlem_schedule"] = ''
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
window.traces["SELECT"]["unlem_scheduler"] = ''
window.traces["SELECT"]["unlem_scheduler"] += `<pre class='graph'>graph TD
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
phi_102 --> block_98
subgraph phi_102["Phi 102"]
	p102_25{{"Sϕ Stack "}}
end
block_103 --> phi_102
block_104 --> phi_102
subgraph block_103["Block 103"]
	direction TB
end
branch_101 --> block_103
subgraph branch_101["Branch 101"]
	br101_22["mt__89 U32_maybeTrue"]

end
branch_96 --> branch_101
subgraph branch_96["Branch 96"]
	br96_24["mb__91 bool.&&"]

end
block_100 --> branch_96
subgraph block_100["Block 100"]
	direction TB
	b100_24["mb__91 bool.&&"]
	b100_22["mt__89 U32_maybeTrue"]
	b100_23["mf__90 U32_maybeFalse"]
	b100_17["eff__78 push_Value"]
	b100_14["eff__81 push_Value"]
	b100_11["cond__77 U32_not_equals"]
	b100_8["a pop_Value"]
	b100_6["b pop_Value"]
	b100_3["c pop_u32"]
	b100_19["abs__88 lift_u32"]
	b100_9["arg__85 0"]
	b100_0[/"Start"\\]
	b100_22 --> b100_24
	b100_23 --> b100_22
	b100_17 --> b100_23
	b100_14 --> b100_17
	b100_11 --> b100_14
	b100_8 --> b100_11
	b100_6 --> b100_8
	b100_3 --> b100_6
	b100_19 --> b100_3
	b100_9 --> b100_19
	b100_0 --> b100_9
end
subgraph block_104["Block 104"]
	direction TB
end
branch_101 --> block_104
subgraph block_99["Block 99"]
	direction TB
end
branch_96 --> block_99

</pre>`;
window.traces["SELECT"]["unlem_pretty"] = ''
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
window.traces["SELECT"]["constUnLEM"] = ''
window.traces["SELECT"]["constUnLEM"] += `<pre class='graph'>---
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
window.traces["SELECT"]["chooseMerge"] = ''
window.traces["SELECT"]["chooseMerge"] += `<pre class='graph'>---
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
window.traces["SELECT"]["scheduled"] = ''
window.traces["SELECT"]["scheduled"] += `<pre class=''>def c = pop_u32();
def tv = f_getTopOfStackType();
def b = pop_Value(tv);
def a = pop_Value(tv);
def push__93 = push_Value(tv, tv);
</pre>`;
window.traces["SELECT"]["pretty"] = ''
window.traces["SELECT"]["pretty"] += `<pre class=''>def c = pop_u32();
def tv = f_getTopOfStackType();
def b = pop_Value(tv);
def a = pop_Value(tv);
def push = push_Value(tv, tv);
</pre>`;
window.traces["LOCAL_GET"] = {}
window.traces["LOCAL_GET"]["parsed"] = ''
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
window.traces["LOCAL_GET"]["raw"] = ''
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
window.traces["LOCAL_GET"]["overloadOps"] = ''
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
window.traces["LOCAL_GET"]["addAbstractions"] = ''
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
window.traces["LOCAL_GET"]["schedulerMermaid"] = ''
window.traces["LOCAL_GET"]["schedulerMermaid"] += `<pre class='graph'>graph TD
subgraph block_105["Block 105"]
	direction TB
	b105_1[\\"Finish"/]
	b105_3["index imm_readULEB32"]
	b105_11["eff__94 push_Value"]
	b105_5["tv f_getLocalType"]
	b105_8["val getLocal"]
	b105_0[/"Start"\\]
	b105_3 --> b105_1
	b105_11 --> b105_3
	b105_5 --> b105_11
	b105_8 --> b105_5
	b105_0 --> b105_8
end

</pre>`;
window.traces["LOCAL_GET"]["unLEM"] = ''
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
window.traces["LOCAL_GET"]["unlem_schedule"] = ''
window.traces["LOCAL_GET"]["unlem_schedule"] += `<pre class=''>def index = imm_readULEB32();
def tv = f_getLocalType(index);
def val = getLocal(tv, index);
def eff__94 = push_Value(tv, val);
</pre>`;
window.traces["LOCAL_GET"]["unlem_scheduler"] = ''
window.traces["LOCAL_GET"]["unlem_scheduler"] += `<pre class='graph'>graph TD
subgraph block_106["Block 106"]
	direction TB
	b106_1[\\"Finish"/]
	b106_3["index imm_readULEB32"]
	b106_11["eff__94 push_Value"]
	b106_5["tv f_getLocalType"]
	b106_8["val getLocal"]
	b106_0[/"Start"\\]
	b106_3 --> b106_1
	b106_11 --> b106_3
	b106_5 --> b106_11
	b106_8 --> b106_5
	b106_0 --> b106_8
end

</pre>`;
window.traces["LOCAL_GET"]["unlem_pretty"] = ''
window.traces["LOCAL_GET"]["unlem_pretty"] += `<pre class=''>def index = imm_readULEB32();
def tv = f_getLocalType(index);
def val = getLocal(tv, index);
push_Value(tv, val);
</pre>`;
window.traces["LOCAL_GET"]["constUnLEM"] = ''
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
window.traces["LOCAL_GET"]["chooseMerge"] = ''
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
window.traces["LOCAL_GET"]["scheduled"] = ''
window.traces["LOCAL_GET"]["scheduled"] += `<pre class=''>def index = imm_readULEB32();
def tv = f_getLocalType(index);
def val = getLocal(tv, index);
def eff__94 = push_Value(tv, val);
</pre>`;
window.traces["LOCAL_GET"]["pretty"] = ''
window.traces["LOCAL_GET"]["pretty"] += `<pre class=''>def index = imm_readULEB32();
def tv = f_getLocalType(index);
def val = getLocal(tv, index);
push_Value(tv, val);
</pre>`;
window.traces["LOCAL_SET"] = {}
window.traces["LOCAL_SET"]["parsed"] = ''
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
window.traces["LOCAL_SET"]["raw"] = ''
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
window.traces["LOCAL_SET"]["overloadOps"] = ''
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
window.traces["LOCAL_SET"]["addAbstractions"] = ''
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
window.traces["LOCAL_SET"]["schedulerMermaid"] = ''
window.traces["LOCAL_SET"]["schedulerMermaid"] += `<pre class='graph'>graph TD
subgraph block_107["Block 107"]
	direction TB
	b107_1[\\"Finish"/]
	b107_3["index imm_readULEB32"]
	b107_7["val pop_Value"]
	b107_11["eff__100 setLocal"]
	b107_5["tv f_getLocalType"]
	b107_0[/"Start"\\]
	b107_3 --> b107_1
	b107_7 --> b107_3
	b107_11 --> b107_7
	b107_5 --> b107_11
	b107_0 --> b107_5
end

</pre>`;
window.traces["LOCAL_SET"]["unLEM"] = ''
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
window.traces["LOCAL_SET"]["unlem_schedule"] = ''
window.traces["LOCAL_SET"]["unlem_schedule"] += `<pre class=''>def index = imm_readULEB32();
def tv = f_getLocalType(index);
def val = pop_Value(tv);
def eff__100 = setLocal(tv, index, val);
</pre>`;
window.traces["LOCAL_SET"]["unlem_scheduler"] = ''
window.traces["LOCAL_SET"]["unlem_scheduler"] += `<pre class='graph'>graph TD
subgraph block_108["Block 108"]
	direction TB
	b108_1[\\"Finish"/]
	b108_3["index imm_readULEB32"]
	b108_7["val pop_Value"]
	b108_11["eff__100 setLocal"]
	b108_5["tv f_getLocalType"]
	b108_0[/"Start"\\]
	b108_3 --> b108_1
	b108_7 --> b108_3
	b108_11 --> b108_7
	b108_5 --> b108_11
	b108_0 --> b108_5
end

</pre>`;
window.traces["LOCAL_SET"]["unlem_pretty"] = ''
window.traces["LOCAL_SET"]["unlem_pretty"] += `<pre class=''>def index = imm_readULEB32();
def tv = f_getLocalType(index);
def val = pop_Value(tv);
setLocal(tv, index, val);
</pre>`;
window.traces["LOCAL_SET"]["constUnLEM"] = ''
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
window.traces["LOCAL_SET"]["chooseMerge"] = ''
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
window.traces["LOCAL_SET"]["scheduled"] = ''
window.traces["LOCAL_SET"]["scheduled"] += `<pre class=''>def index = imm_readULEB32();
def tv = f_getLocalType(index);
def val = pop_Value(tv);
def eff__100 = setLocal(tv, index, val);
</pre>`;
window.traces["LOCAL_SET"]["pretty"] = ''
window.traces["LOCAL_SET"]["pretty"] += `<pre class=''>def index = imm_readULEB32();
def tv = f_getLocalType(index);
def val = pop_Value(tv);
setLocal(tv, index, val);
</pre>`;
window.traces["LOCAL_TEE"] = {}
window.traces["LOCAL_TEE"]["parsed"] = ''
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
window.traces["LOCAL_TEE"]["raw"] = ''
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
window.traces["LOCAL_TEE"]["overloadOps"] = ''
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
window.traces["LOCAL_TEE"]["addAbstractions"] = ''
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
window.traces["LOCAL_TEE"]["schedulerMermaid"] = ''
window.traces["LOCAL_TEE"]["schedulerMermaid"] += `<pre class='graph'>graph TD
subgraph block_109["Block 109"]
	direction TB
	b109_1[\\"Finish"/]
	b109_3["index imm_readULEB32"]
	b109_14["eff__106 push_Value"]
	b109_11["eff__109 setLocal"]
	b109_5["tv f_getLocalType"]
	b109_7["val pop_Value"]
	b109_0[/"Start"\\]
	b109_3 --> b109_1
	b109_14 --> b109_3
	b109_11 --> b109_14
	b109_5 --> b109_11
	b109_7 --> b109_5
	b109_0 --> b109_7
end

</pre>`;
window.traces["LOCAL_TEE"]["unLEM"] = ''
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
window.traces["LOCAL_TEE"]["unlem_schedule"] = ''
window.traces["LOCAL_TEE"]["unlem_schedule"] += `<pre class=''>def index = imm_readULEB32();
def tv = f_getLocalType(index);
def val = pop_Value(tv);
def eff__106 = push_Value(tv, val);
def eff__109 = setLocal(tv, index, val);
</pre>`;
window.traces["LOCAL_TEE"]["unlem_scheduler"] = ''
window.traces["LOCAL_TEE"]["unlem_scheduler"] += `<pre class='graph'>graph TD
subgraph block_110["Block 110"]
	direction TB
	b110_1[\\"Finish"/]
	b110_3["index imm_readULEB32"]
	b110_14["eff__106 push_Value"]
	b110_11["eff__109 setLocal"]
	b110_5["tv f_getLocalType"]
	b110_7["val pop_Value"]
	b110_0[/"Start"\\]
	b110_3 --> b110_1
	b110_14 --> b110_3
	b110_11 --> b110_14
	b110_5 --> b110_11
	b110_7 --> b110_5
	b110_0 --> b110_7
end

</pre>`;
window.traces["LOCAL_TEE"]["unlem_pretty"] = ''
window.traces["LOCAL_TEE"]["unlem_pretty"] += `<pre class=''>def index = imm_readULEB32();
def tv = f_getLocalType(index);
def val = pop_Value(tv);
push_Value(tv, val);
setLocal(tv, index, val);
</pre>`;
window.traces["LOCAL_TEE"]["constUnLEM"] = ''
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
window.traces["LOCAL_TEE"]["chooseMerge"] = ''
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
window.traces["LOCAL_TEE"]["scheduled"] = ''
window.traces["LOCAL_TEE"]["scheduled"] += `<pre class=''>def index = imm_readULEB32();
def tv = f_getLocalType(index);
def val = pop_Value(tv);
def eff__106 = push_Value(tv, val);
def eff__109 = setLocal(tv, index, val);
</pre>`;
window.traces["LOCAL_TEE"]["pretty"] = ''
window.traces["LOCAL_TEE"]["pretty"] += `<pre class=''>def index = imm_readULEB32();
def tv = f_getLocalType(index);
def val = pop_Value(tv);
push_Value(tv, val);
setLocal(tv, index, val);
</pre>`;
window.traces["GLOBAL_GET"] = {}
window.traces["GLOBAL_GET"]["parsed"] = ''
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
window.traces["GLOBAL_GET"]["raw"] = ''
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
window.traces["GLOBAL_GET"]["overloadOps"] = ''
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
window.traces["GLOBAL_GET"]["addAbstractions"] = ''
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
window.traces["GLOBAL_GET"]["schedulerMermaid"] = ''
window.traces["GLOBAL_GET"]["schedulerMermaid"] += `<pre class='graph'>graph TD
subgraph block_111["Block 111"]
	direction TB
	b111_1[\\"Finish"/]
	b111_3["index imm_readULEB32"]
	b111_11["eff__115 push_Value"]
	b111_5["tv m_getGlobalType"]
	b111_8["val getGlobal"]
	b111_0[/"Start"\\]
	b111_3 --> b111_1
	b111_11 --> b111_3
	b111_5 --> b111_11
	b111_8 --> b111_5
	b111_0 --> b111_8
end

</pre>`;
window.traces["GLOBAL_GET"]["unLEM"] = ''
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
window.traces["GLOBAL_GET"]["unlem_schedule"] = ''
window.traces["GLOBAL_GET"]["unlem_schedule"] += `<pre class=''>def index = imm_readULEB32();
def tv = m_getGlobalType(index);
def val = getGlobal(tv, index);
def eff__115 = push_Value(tv, val);
</pre>`;
window.traces["GLOBAL_GET"]["unlem_scheduler"] = ''
window.traces["GLOBAL_GET"]["unlem_scheduler"] += `<pre class='graph'>graph TD
subgraph block_112["Block 112"]
	direction TB
	b112_1[\\"Finish"/]
	b112_3["index imm_readULEB32"]
	b112_11["eff__115 push_Value"]
	b112_5["tv m_getGlobalType"]
	b112_8["val getGlobal"]
	b112_0[/"Start"\\]
	b112_3 --> b112_1
	b112_11 --> b112_3
	b112_5 --> b112_11
	b112_8 --> b112_5
	b112_0 --> b112_8
end

</pre>`;
window.traces["GLOBAL_GET"]["unlem_pretty"] = ''
window.traces["GLOBAL_GET"]["unlem_pretty"] += `<pre class=''>def index = imm_readULEB32();
def tv = m_getGlobalType(index);
def val = getGlobal(tv, index);
push_Value(tv, val);
</pre>`;
window.traces["GLOBAL_GET"]["constUnLEM"] = ''
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
window.traces["GLOBAL_GET"]["chooseMerge"] = ''
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
window.traces["GLOBAL_GET"]["scheduled"] = ''
window.traces["GLOBAL_GET"]["scheduled"] += `<pre class=''>def index = imm_readULEB32();
def tv = m_getGlobalType(index);
def val = getGlobal(tv, index);
def eff__115 = push_Value(tv, val);
</pre>`;
window.traces["GLOBAL_GET"]["pretty"] = ''
window.traces["GLOBAL_GET"]["pretty"] += `<pre class=''>def index = imm_readULEB32();
def tv = m_getGlobalType(index);
def val = getGlobal(tv, index);
push_Value(tv, val);
</pre>`;
window.traces["GLOBAL_SET"] = {}
window.traces["GLOBAL_SET"]["parsed"] = ''
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
window.traces["GLOBAL_SET"]["raw"] = ''
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
window.traces["GLOBAL_SET"]["overloadOps"] = ''
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
window.traces["GLOBAL_SET"]["addAbstractions"] = ''
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
window.traces["GLOBAL_SET"]["schedulerMermaid"] = ''
window.traces["GLOBAL_SET"]["schedulerMermaid"] += `<pre class='graph'>graph TD
subgraph block_113["Block 113"]
	direction TB
	b113_1[\\"Finish"/]
	b113_3["index imm_readULEB32"]
	b113_7["val pop_Value"]
	b113_11["eff__121 setGlobal"]
	b113_5["tv m_getGlobalType"]
	b113_0[/"Start"\\]
	b113_3 --> b113_1
	b113_7 --> b113_3
	b113_11 --> b113_7
	b113_5 --> b113_11
	b113_0 --> b113_5
end

</pre>`;
window.traces["GLOBAL_SET"]["unLEM"] = ''
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
window.traces["GLOBAL_SET"]["unlem_schedule"] = ''
window.traces["GLOBAL_SET"]["unlem_schedule"] += `<pre class=''>def index = imm_readULEB32();
def tv = m_getGlobalType(index);
def val = pop_Value(tv);
def eff__121 = setGlobal(tv, index, val);
</pre>`;
window.traces["GLOBAL_SET"]["unlem_scheduler"] = ''
window.traces["GLOBAL_SET"]["unlem_scheduler"] += `<pre class='graph'>graph TD
subgraph block_114["Block 114"]
	direction TB
	b114_1[\\"Finish"/]
	b114_3["index imm_readULEB32"]
	b114_7["val pop_Value"]
	b114_11["eff__121 setGlobal"]
	b114_5["tv m_getGlobalType"]
	b114_0[/"Start"\\]
	b114_3 --> b114_1
	b114_7 --> b114_3
	b114_11 --> b114_7
	b114_5 --> b114_11
	b114_0 --> b114_5
end

</pre>`;
window.traces["GLOBAL_SET"]["unlem_pretty"] = ''
window.traces["GLOBAL_SET"]["unlem_pretty"] += `<pre class=''>def index = imm_readULEB32();
def tv = m_getGlobalType(index);
def val = pop_Value(tv);
setGlobal(tv, index, val);
</pre>`;
window.traces["GLOBAL_SET"]["constUnLEM"] = ''
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
window.traces["GLOBAL_SET"]["chooseMerge"] = ''
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
window.traces["GLOBAL_SET"]["scheduled"] = ''
window.traces["GLOBAL_SET"]["scheduled"] += `<pre class=''>def index = imm_readULEB32();
def tv = m_getGlobalType(index);
def val = pop_Value(tv);
def eff__121 = setGlobal(tv, index, val);
</pre>`;
window.traces["GLOBAL_SET"]["pretty"] = ''
window.traces["GLOBAL_SET"]["pretty"] += `<pre class=''>def index = imm_readULEB32();
def tv = m_getGlobalType(index);
def val = pop_Value(tv);
setGlobal(tv, index, val);
</pre>`;
window.traces["TABLE_GET"] = {}
window.traces["TABLE_GET"]["parsed"] = ''
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
window.traces["TABLE_GET"]["raw"] = ''
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
window.traces["TABLE_GET"]["overloadOps"] = ''
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
window.traces["TABLE_GET"]["addAbstractions"] = ''
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
window.traces["TABLE_GET"]["schedulerMermaid"] = ''
window.traces["TABLE_GET"]["schedulerMermaid"] += `<pre class='graph'>graph TD
subgraph block_115["Block 115"]
	direction TB
	b115_1[\\"Finish"/]
	b115_3["table_index imm_readULEB32"]
	b115_17["eff__128 push_Object"]
	b115_11["eff__132 push_Object"]
	b115_15["val mach_readTable64"]
	b115_12["index pop_u64"]
	b115_9["val mach_readTable32"]
	b115_6["index pop_u32"]
	b115_3 --> b115_1
	b115_17 --> b115_3
	b115_11 --> b115_17
	b115_15 --> b115_11
	b115_12 --> b115_15
	b115_9 --> b115_12
	b115_6 --> b115_9
end
phi_117 --> block_115
subgraph phi_117["Phi 117"]
	p117_18{{"Sϕ Stack "}}
end
block_118 --> phi_117
block_119 --> phi_117
subgraph block_118["Block 118"]
	direction TB
end
branch_116 --> block_118
subgraph branch_116["Branch 116"]
	br116_5["cond__127 m_isTable64"]

end
block_120 --> branch_116
subgraph block_120["Block 120"]
	direction TB
	b120_5["cond__127 m_isTable64"]
	b120_0[/"Start"\\]
	b120_0 --> b120_5
end
subgraph block_119["Block 119"]
	direction TB
end
branch_116 --> block_119

</pre>`;
window.traces["TABLE_GET"]["unLEM"] = ''
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
window.traces["TABLE_GET"]["unlem_schedule"] = ''
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
window.traces["TABLE_GET"]["unlem_scheduler"] = ''
window.traces["TABLE_GET"]["unlem_scheduler"] += `<pre class='graph'>graph TD
subgraph block_121["Block 121"]
	direction TB
	b121_1[\\"Finish"/]
	b121_3["table_index imm_readULEB32"]
	b121_17["eff__128 push_Object"]
	b121_11["eff__132 push_Object"]
	b121_15["val mach_readTable64"]
	b121_12["index pop_u64"]
	b121_9["val mach_readTable32"]
	b121_6["index pop_u32"]
	b121_3 --> b121_1
	b121_17 --> b121_3
	b121_11 --> b121_17
	b121_15 --> b121_11
	b121_12 --> b121_15
	b121_9 --> b121_12
	b121_6 --> b121_9
end
phi_123 --> block_121
subgraph phi_123["Phi 123"]
	p123_18{{"Sϕ Stack "}}
end
block_124 --> phi_123
block_125 --> phi_123
subgraph block_124["Block 124"]
	direction TB
end
branch_122 --> block_124
subgraph branch_122["Branch 122"]
	br122_5["cond__127 m_isTable64"]

end
block_126 --> branch_122
subgraph block_126["Block 126"]
	direction TB
	b126_5["cond__127 m_isTable64"]
	b126_0[/"Start"\\]
	b126_0 --> b126_5
end
subgraph block_125["Block 125"]
	direction TB
end
branch_122 --> block_125

</pre>`;
window.traces["TABLE_GET"]["unlem_pretty"] = ''
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
window.traces["TABLE_GET"]["constUnLEM"] = ''
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
window.traces["TABLE_GET"]["chooseMerge"] = ''
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
window.traces["TABLE_GET"]["scheduled"] = ''
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
window.traces["TABLE_GET"]["pretty"] = ''
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
window.traces["TABLE_SET"] = {}
window.traces["TABLE_SET"]["parsed"] = ''
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
window.traces["TABLE_SET"]["raw"] = ''
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
window.traces["TABLE_SET"]["overloadOps"] = ''
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
window.traces["TABLE_SET"]["addAbstractions"] = ''
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
window.traces["TABLE_SET"]["schedulerMermaid"] = ''
window.traces["TABLE_SET"]["schedulerMermaid"] += `<pre class='graph'>graph TD
subgraph block_127["Block 127"]
	direction TB
	b127_1[\\"Finish"/]
	b127_3["table_index imm_readULEB32"]
	b127_13["index pop_u64"]
	b127_7["index pop_u32"]
	b127_12["val pop_Object"]
	b127_6["val pop_Object"]
	b127_3 --> b127_1
	b127_13 --> b127_3
	b127_7 --> b127_13
	b127_12 --> b127_7
	b127_6 --> b127_12
end
phi_129 --> block_127
subgraph phi_129["Phi 129"]
	p129_18{{"Sϕ Stack "}}
end
block_130 --> phi_129
block_131 --> phi_129
subgraph block_130["Block 130"]
	direction TB
	b130_13["index pop_u64"]
end
branch_128 --> block_130
subgraph branch_128["Branch 128"]
	br128_5["cond__137 m_isTable64"]

end
block_132 --> branch_128
subgraph block_132["Block 132"]
	direction TB
	b132_5["cond__137 m_isTable64"]
	b132_0[/"Start"\\]
	b132_0 --> b132_5
end
subgraph block_131["Block 131"]
	direction TB
	b131_7["index pop_u32"]
end
branch_128 --> block_131

</pre>`;
window.traces["TABLE_SET"]["unLEM"] = ''
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
window.traces["TABLE_SET"]["unlem_schedule"] = ''
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
window.traces["TABLE_SET"]["unlem_scheduler"] = ''
window.traces["TABLE_SET"]["unlem_scheduler"] += `<pre class='graph'>graph TD
subgraph block_133["Block 133"]
	direction TB
	b133_1[\\"Finish"/]
	b133_3["table_index imm_readULEB32"]
	b133_13["index pop_u64"]
	b133_7["index pop_u32"]
	b133_3 --> b133_1
	b133_13 --> b133_3
	b133_7 --> b133_13
end
phi_135 --> block_133
subgraph phi_135["Phi 135"]
	p135_18{{"Sϕ Stack "}}
end
block_136 --> phi_135
block_137 --> phi_135
subgraph block_136["Block 136"]
	direction TB
	b136_13["index pop_u64"]
	b136_12["val pop_Object"]
	b136_12 --> b136_13
end
branch_134 --> block_136
subgraph branch_134["Branch 134"]
	br134_5["cond__137 m_isTable64"]

end
block_138 --> branch_134
subgraph block_138["Block 138"]
	direction TB
	b138_5["cond__137 m_isTable64"]
	b138_0[/"Start"\\]
	b138_0 --> b138_5
end
subgraph block_137["Block 137"]
	direction TB
	b137_7["index pop_u32"]
	b137_6["val pop_Object"]
	b137_6 --> b137_7
end
branch_134 --> block_137

</pre>`;
window.traces["TABLE_SET"]["unlem_pretty"] = ''
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
window.traces["TABLE_SET"]["constUnLEM"] = ''
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
window.traces["TABLE_SET"]["chooseMerge"] = ''
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
window.traces["TABLE_SET"]["scheduled"] = ''
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
window.traces["TABLE_SET"]["pretty"] = ''
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
window.traces["I32_LOAD"] = {}
window.traces["I32_LOAD"]["parsed"] = ''
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
window.traces["I32_LOAD"]["raw"] = ''
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
window.traces["I32_LOAD"]["overloadOps"] = ''
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
window.traces["I32_LOAD"]["addAbstractions"] = ''
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
window.traces["I32_LOAD"]["schedulerMermaid"] = ''
window.traces["I32_LOAD"]["schedulerMermaid"] += `<pre class='graph'>graph TD
subgraph block_139["Block 139"]
	direction TB
	b139_1[\\"Finish"/]
	b139_23["offset imm_readULEB64"]
	b139_15["offset imm_readULEB32"]
	b139_30["eff__148 push_u32"]
	b139_22["eff__153 push_u32"]
	b139_28["val mach_readMemory64_u32"]
	b139_24["index pop_u64"]
	b139_20["val mach_readMemory32_u32"]
	b139_16["index pop_u32"]
	b139_10["memindex__160 imm_readULEB32"]
	b139_4["memindex__166 0u"]
	b139_3["flags imm_readU8"]
	b139_23 --> b139_1
	b139_15 --> b139_23
	b139_30 --> b139_15
	b139_22 --> b139_30
	b139_28 --> b139_22
	b139_24 --> b139_28
	b139_20 --> b139_24
	b139_16 --> b139_20
	b139_10 --> b139_16
	b139_4 --> b139_10
	b139_3 --> b139_4
end
phi_141 --> block_139
subgraph phi_141["Phi 141"]
	p141_32{{"Sϕ Stack "}}
	p141_31{{"Sϕ Codeptr "}}
end
block_142 --> phi_141
block_143 --> phi_141
subgraph block_142["Block 142"]
	direction TB
	b142_23["offset imm_readULEB64"]
end
phi_146 --> block_142
subgraph phi_146["Phi 146"]
	p146_11{"memindex ϕ"}
	p146_11{"memindex ϕ"}
	p146_11{"memindex ϕ"}
	p146_11{"memindex ϕ"}
end
block_147 --> phi_146
block_148 --> phi_146
subgraph block_147["Block 147"]
	direction TB
	b147_10["memindex__160 imm_readULEB32"]
	b147_3["flags imm_readU8"]
	b147_3 --> b147_10
end
branch_145 --> block_147
subgraph branch_145["Branch 145"]
	br145_9["cond__159 u8.!="]

end
branch_140 --> branch_145
subgraph branch_140["Branch 140"]
	br140_14["cond__147 m_isMemory64"]

end
block_144 --> branch_140
subgraph block_144["Block 144"]
	direction TB
	b144_14["cond__147 m_isMemory64"]
end
phi_150 --> block_144
subgraph phi_150["Phi 150"]
	p150_12{{"Sϕ Codeptr "}}
	p150_12{{"Sϕ Codeptr "}}
	p150_12{{"Sϕ Codeptr "}}
	p150_12{{"Sϕ Codeptr "}}
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
block_153 --> branch_149
subgraph block_153["Block 153"]
	direction TB
	b153_9["cond__159 u8.!="]
	b153_8["arg__161 u8.&"]
	b153_5["arg__162 0"]
	b153_6["arg__164 0x40u8"]
	b153_0[/"Start"\\]
	b153_8 --> b153_9
	b153_5 --> b153_8
	b153_6 --> b153_5
	b153_0 --> b153_6
end
subgraph block_152["Block 152"]
	direction TB
end
branch_149 --> block_152
subgraph block_148["Block 148"]
	direction TB
	b148_4["memindex__166 0u"]
end
branch_145 --> block_148
subgraph block_143["Block 143"]
	direction TB
	b143_15["offset imm_readULEB32"]
end
branch_140 --> block_143

</pre>`;
window.traces["I32_LOAD"]["unLEM"] = ''
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
window.traces["I32_LOAD"]["unlem_schedule"] = ''
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
window.traces["I32_LOAD"]["unlem_scheduler"] = ''
window.traces["I32_LOAD"]["unlem_scheduler"] += `<pre class='graph'>graph TD
subgraph block_154["Block 154"]
	direction TB
	b154_1[\\"Finish"/]
	b154_23["offset imm_readULEB64"]
	b154_15["offset imm_readULEB32"]
	b154_30["eff__148 push_u32"]
	b154_22["eff__153 push_u32"]
	b154_28["val mach_readMemory64_u32"]
	b154_24["index pop_u64"]
	b154_20["val mach_readMemory32_u32"]
	b154_16["index pop_u32"]
	b154_10["memindex__160 imm_readULEB32"]
	b154_4["memindex__166 0u"]
	b154_3["flags imm_readU8"]
	b154_23 --> b154_1
	b154_15 --> b154_23
	b154_30 --> b154_15
	b154_22 --> b154_30
	b154_28 --> b154_22
	b154_24 --> b154_28
	b154_20 --> b154_24
	b154_16 --> b154_20
	b154_10 --> b154_16
	b154_4 --> b154_10
	b154_3 --> b154_4
end
phi_156 --> block_154
subgraph phi_156["Phi 156"]
	p156_32{{"Sϕ Stack "}}
	p156_31{{"Sϕ Codeptr "}}
end
block_157 --> phi_156
block_158 --> phi_156
subgraph block_157["Block 157"]
	direction TB
	b157_23["offset imm_readULEB64"]
end
phi_161 --> block_157
subgraph phi_161["Phi 161"]
	p161_11{"memindex ϕ"}
	p161_11{"memindex ϕ"}
	p161_11{"memindex ϕ"}
	p161_11{"memindex ϕ"}
end
block_162 --> phi_161
block_163 --> phi_161
subgraph block_162["Block 162"]
	direction TB
	b162_10["memindex__160 imm_readULEB32"]
	b162_3["flags imm_readU8"]
	b162_3 --> b162_10
end
branch_160 --> block_162
subgraph branch_160["Branch 160"]
	br160_9["cond__159 u8.!="]

end
branch_155 --> branch_160
subgraph branch_155["Branch 155"]
	br155_14["cond__147 m_isMemory64"]

end
block_159 --> branch_155
subgraph block_159["Block 159"]
	direction TB
	b159_14["cond__147 m_isMemory64"]
end
phi_165 --> block_159
subgraph phi_165["Phi 165"]
	p165_12{{"Sϕ Codeptr "}}
	p165_12{{"Sϕ Codeptr "}}
	p165_12{{"Sϕ Codeptr "}}
	p165_12{{"Sϕ Codeptr "}}
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
block_168 --> branch_164
subgraph block_168["Block 168"]
	direction TB
	b168_9["cond__159 u8.!="]
	b168_8["arg__161 u8.&"]
	b168_5["arg__162 0"]
	b168_6["arg__164 0x40u8"]
	b168_0[/"Start"\\]
	b168_8 --> b168_9
	b168_5 --> b168_8
	b168_6 --> b168_5
	b168_0 --> b168_6
end
subgraph block_167["Block 167"]
	direction TB
end
branch_164 --> block_167
subgraph block_163["Block 163"]
	direction TB
	b163_4["memindex__166 0u"]
end
branch_160 --> block_163
subgraph block_158["Block 158"]
	direction TB
	b158_15["offset imm_readULEB32"]
end
branch_155 --> block_158

</pre>`;
window.traces["I32_LOAD"]["unlem_pretty"] = ''
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
window.traces["I32_LOAD"]["constUnLEM"] = ''
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
window.traces["I32_LOAD"]["chooseMerge"] = ''
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
window.traces["I32_LOAD"]["scheduled"] = ''
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
window.traces["I32_LOAD"]["pretty"] = ''
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
window.traces["I64_LOAD"] = {}
window.traces["I64_LOAD"]["parsed"] = ''
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
window.traces["I64_LOAD"]["raw"] = ''
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
window.traces["I64_LOAD"]["overloadOps"] = ''
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
window.traces["I64_LOAD"]["addAbstractions"] = ''
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
window.traces["I64_LOAD"]["schedulerMermaid"] = ''
window.traces["I64_LOAD"]["schedulerMermaid"] += `<pre class='graph'>graph TD
subgraph block_169["Block 169"]
	direction TB
	b169_1[\\"Finish"/]
	b169_23["offset imm_readULEB64"]
	b169_15["offset imm_readULEB32"]
	b169_30["eff__168 push_u64"]
	b169_22["eff__173 push_u64"]
	b169_28["val mach_readMemory64_u64"]
	b169_24["index pop_u64"]
	b169_20["val mach_readMemory32_u64"]
	b169_16["index pop_u32"]
	b169_10["memindex__180 imm_readULEB32"]
	b169_4["memindex__186 0u"]
	b169_3["flags imm_readU8"]
	b169_23 --> b169_1
	b169_15 --> b169_23
	b169_30 --> b169_15
	b169_22 --> b169_30
	b169_28 --> b169_22
	b169_24 --> b169_28
	b169_20 --> b169_24
	b169_16 --> b169_20
	b169_10 --> b169_16
	b169_4 --> b169_10
	b169_3 --> b169_4
end
phi_171 --> block_169
subgraph phi_171["Phi 171"]
	p171_32{{"Sϕ Stack "}}
	p171_31{{"Sϕ Codeptr "}}
end
block_172 --> phi_171
block_173 --> phi_171
subgraph block_172["Block 172"]
	direction TB
	b172_23["offset imm_readULEB64"]
end
phi_176 --> block_172
subgraph phi_176["Phi 176"]
	p176_11{"memindex ϕ"}
	p176_11{"memindex ϕ"}
	p176_11{"memindex ϕ"}
	p176_11{"memindex ϕ"}
end
block_177 --> phi_176
block_178 --> phi_176
subgraph block_177["Block 177"]
	direction TB
	b177_10["memindex__180 imm_readULEB32"]
	b177_3["flags imm_readU8"]
	b177_3 --> b177_10
end
branch_175 --> block_177
subgraph branch_175["Branch 175"]
	br175_9["cond__179 u8.!="]

end
branch_170 --> branch_175
subgraph branch_170["Branch 170"]
	br170_14["cond__167 m_isMemory64"]

end
block_174 --> branch_170
subgraph block_174["Block 174"]
	direction TB
	b174_14["cond__167 m_isMemory64"]
end
phi_180 --> block_174
subgraph phi_180["Phi 180"]
	p180_12{{"Sϕ Codeptr "}}
	p180_12{{"Sϕ Codeptr "}}
	p180_12{{"Sϕ Codeptr "}}
	p180_12{{"Sϕ Codeptr "}}
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
block_183 --> branch_179
subgraph block_183["Block 183"]
	direction TB
	b183_9["cond__179 u8.!="]
	b183_8["arg__181 u8.&"]
	b183_5["arg__182 0"]
	b183_6["arg__184 0x40u8"]
	b183_0[/"Start"\\]
	b183_8 --> b183_9
	b183_5 --> b183_8
	b183_6 --> b183_5
	b183_0 --> b183_6
end
subgraph block_182["Block 182"]
	direction TB
end
branch_179 --> block_182
subgraph block_178["Block 178"]
	direction TB
	b178_4["memindex__186 0u"]
end
branch_175 --> block_178
subgraph block_173["Block 173"]
	direction TB
	b173_15["offset imm_readULEB32"]
end
branch_170 --> block_173

</pre>`;
window.traces["I64_LOAD"]["unLEM"] = ''
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
window.traces["I64_LOAD"]["unlem_schedule"] = ''
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
window.traces["I64_LOAD"]["unlem_scheduler"] = ''
window.traces["I64_LOAD"]["unlem_scheduler"] += `<pre class='graph'>graph TD
subgraph block_184["Block 184"]
	direction TB
	b184_1[\\"Finish"/]
	b184_23["offset imm_readULEB64"]
	b184_15["offset imm_readULEB32"]
	b184_30["eff__168 push_u64"]
	b184_22["eff__173 push_u64"]
	b184_28["val mach_readMemory64_u64"]
	b184_24["index pop_u64"]
	b184_20["val mach_readMemory32_u64"]
	b184_16["index pop_u32"]
	b184_10["memindex__180 imm_readULEB32"]
	b184_4["memindex__186 0u"]
	b184_3["flags imm_readU8"]
	b184_23 --> b184_1
	b184_15 --> b184_23
	b184_30 --> b184_15
	b184_22 --> b184_30
	b184_28 --> b184_22
	b184_24 --> b184_28
	b184_20 --> b184_24
	b184_16 --> b184_20
	b184_10 --> b184_16
	b184_4 --> b184_10
	b184_3 --> b184_4
end
phi_186 --> block_184
subgraph phi_186["Phi 186"]
	p186_32{{"Sϕ Stack "}}
	p186_31{{"Sϕ Codeptr "}}
end
block_187 --> phi_186
block_188 --> phi_186
subgraph block_187["Block 187"]
	direction TB
	b187_23["offset imm_readULEB64"]
end
phi_191 --> block_187
subgraph phi_191["Phi 191"]
	p191_11{"memindex ϕ"}
	p191_11{"memindex ϕ"}
	p191_11{"memindex ϕ"}
	p191_11{"memindex ϕ"}
end
block_192 --> phi_191
block_193 --> phi_191
subgraph block_192["Block 192"]
	direction TB
	b192_10["memindex__180 imm_readULEB32"]
	b192_3["flags imm_readU8"]
	b192_3 --> b192_10
end
branch_190 --> block_192
subgraph branch_190["Branch 190"]
	br190_9["cond__179 u8.!="]

end
branch_185 --> branch_190
subgraph branch_185["Branch 185"]
	br185_14["cond__167 m_isMemory64"]

end
block_189 --> branch_185
subgraph block_189["Block 189"]
	direction TB
	b189_14["cond__167 m_isMemory64"]
end
phi_195 --> block_189
subgraph phi_195["Phi 195"]
	p195_12{{"Sϕ Codeptr "}}
	p195_12{{"Sϕ Codeptr "}}
	p195_12{{"Sϕ Codeptr "}}
	p195_12{{"Sϕ Codeptr "}}
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
block_198 --> branch_194
subgraph block_198["Block 198"]
	direction TB
	b198_9["cond__179 u8.!="]
	b198_8["arg__181 u8.&"]
	b198_5["arg__182 0"]
	b198_6["arg__184 0x40u8"]
	b198_0[/"Start"\\]
	b198_8 --> b198_9
	b198_5 --> b198_8
	b198_6 --> b198_5
	b198_0 --> b198_6
end
subgraph block_197["Block 197"]
	direction TB
end
branch_194 --> block_197
subgraph block_193["Block 193"]
	direction TB
	b193_4["memindex__186 0u"]
end
branch_190 --> block_193
subgraph block_188["Block 188"]
	direction TB
	b188_15["offset imm_readULEB32"]
end
branch_185 --> block_188

</pre>`;
window.traces["I64_LOAD"]["unlem_pretty"] = ''
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
window.traces["I64_LOAD"]["constUnLEM"] = ''
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
window.traces["I64_LOAD"]["chooseMerge"] = ''
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
window.traces["I64_LOAD"]["scheduled"] = ''
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
window.traces["I64_LOAD"]["pretty"] = ''
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
window.traces["F32_LOAD"] = {}
window.traces["F32_LOAD"]["parsed"] = ''
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
window.traces["F32_LOAD"]["raw"] = ''
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
window.traces["F32_LOAD"]["overloadOps"] = ''
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
window.traces["F32_LOAD"]["addAbstractions"] = ''
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
window.traces["F32_LOAD"]["schedulerMermaid"] = ''
window.traces["F32_LOAD"]["schedulerMermaid"] += `<pre class='graph'>graph TD
subgraph block_199["Block 199"]
	direction TB
	b199_1[\\"Finish"/]
	b199_23["offset imm_readULEB64"]
	b199_15["offset imm_readULEB32"]
	b199_30["eff__188 push_f32"]
	b199_22["eff__193 push_f32"]
	b199_28["val mach_readMemory64_f32"]
	b199_24["index pop_u64"]
	b199_20["val mach_readMemory32_f32"]
	b199_16["index pop_u32"]
	b199_10["memindex__200 imm_readULEB32"]
	b199_4["memindex__206 0u"]
	b199_3["flags imm_readU8"]
	b199_23 --> b199_1
	b199_15 --> b199_23
	b199_30 --> b199_15
	b199_22 --> b199_30
	b199_28 --> b199_22
	b199_24 --> b199_28
	b199_20 --> b199_24
	b199_16 --> b199_20
	b199_10 --> b199_16
	b199_4 --> b199_10
	b199_3 --> b199_4
end
phi_201 --> block_199
subgraph phi_201["Phi 201"]
	p201_32{{"Sϕ Stack "}}
	p201_31{{"Sϕ Codeptr "}}
end
block_202 --> phi_201
block_203 --> phi_201
subgraph block_202["Block 202"]
	direction TB
	b202_23["offset imm_readULEB64"]
end
phi_206 --> block_202
subgraph phi_206["Phi 206"]
	p206_11{"memindex ϕ"}
	p206_11{"memindex ϕ"}
	p206_11{"memindex ϕ"}
	p206_11{"memindex ϕ"}
end
block_207 --> phi_206
block_208 --> phi_206
subgraph block_207["Block 207"]
	direction TB
	b207_10["memindex__200 imm_readULEB32"]
	b207_3["flags imm_readU8"]
	b207_3 --> b207_10
end
branch_205 --> block_207
subgraph branch_205["Branch 205"]
	br205_9["cond__199 u8.!="]

end
branch_200 --> branch_205
subgraph branch_200["Branch 200"]
	br200_14["cond__187 m_isMemory64"]

end
block_204 --> branch_200
subgraph block_204["Block 204"]
	direction TB
	b204_14["cond__187 m_isMemory64"]
end
phi_210 --> block_204
subgraph phi_210["Phi 210"]
	p210_12{{"Sϕ Codeptr "}}
	p210_12{{"Sϕ Codeptr "}}
	p210_12{{"Sϕ Codeptr "}}
	p210_12{{"Sϕ Codeptr "}}
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
block_213 --> branch_209
subgraph block_213["Block 213"]
	direction TB
	b213_9["cond__199 u8.!="]
	b213_8["arg__201 u8.&"]
	b213_5["arg__202 0"]
	b213_6["arg__204 0x40u8"]
	b213_0[/"Start"\\]
	b213_8 --> b213_9
	b213_5 --> b213_8
	b213_6 --> b213_5
	b213_0 --> b213_6
end
subgraph block_212["Block 212"]
	direction TB
end
branch_209 --> block_212
subgraph block_208["Block 208"]
	direction TB
	b208_4["memindex__206 0u"]
end
branch_205 --> block_208
subgraph block_203["Block 203"]
	direction TB
	b203_15["offset imm_readULEB32"]
end
branch_200 --> block_203

</pre>`;
window.traces["F32_LOAD"]["unLEM"] = ''
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
window.traces["F32_LOAD"]["unlem_schedule"] = ''
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
window.traces["F32_LOAD"]["unlem_scheduler"] = ''
window.traces["F32_LOAD"]["unlem_scheduler"] += `<pre class='graph'>graph TD
subgraph block_214["Block 214"]
	direction TB
	b214_1[\\"Finish"/]
	b214_23["offset imm_readULEB64"]
	b214_15["offset imm_readULEB32"]
	b214_30["eff__188 push_f32"]
	b214_22["eff__193 push_f32"]
	b214_28["val mach_readMemory64_f32"]
	b214_24["index pop_u64"]
	b214_20["val mach_readMemory32_f32"]
	b214_16["index pop_u32"]
	b214_10["memindex__200 imm_readULEB32"]
	b214_4["memindex__206 0u"]
	b214_3["flags imm_readU8"]
	b214_23 --> b214_1
	b214_15 --> b214_23
	b214_30 --> b214_15
	b214_22 --> b214_30
	b214_28 --> b214_22
	b214_24 --> b214_28
	b214_20 --> b214_24
	b214_16 --> b214_20
	b214_10 --> b214_16
	b214_4 --> b214_10
	b214_3 --> b214_4
end
phi_216 --> block_214
subgraph phi_216["Phi 216"]
	p216_32{{"Sϕ Stack "}}
	p216_31{{"Sϕ Codeptr "}}
end
block_217 --> phi_216
block_218 --> phi_216
subgraph block_217["Block 217"]
	direction TB
	b217_23["offset imm_readULEB64"]
end
phi_221 --> block_217
subgraph phi_221["Phi 221"]
	p221_11{"memindex ϕ"}
	p221_11{"memindex ϕ"}
	p221_11{"memindex ϕ"}
	p221_11{"memindex ϕ"}
end
block_222 --> phi_221
block_223 --> phi_221
subgraph block_222["Block 222"]
	direction TB
	b222_10["memindex__200 imm_readULEB32"]
	b222_3["flags imm_readU8"]
	b222_3 --> b222_10
end
branch_220 --> block_222
subgraph branch_220["Branch 220"]
	br220_9["cond__199 u8.!="]

end
branch_215 --> branch_220
subgraph branch_215["Branch 215"]
	br215_14["cond__187 m_isMemory64"]

end
block_219 --> branch_215
subgraph block_219["Block 219"]
	direction TB
	b219_14["cond__187 m_isMemory64"]
end
phi_225 --> block_219
subgraph phi_225["Phi 225"]
	p225_12{{"Sϕ Codeptr "}}
	p225_12{{"Sϕ Codeptr "}}
	p225_12{{"Sϕ Codeptr "}}
	p225_12{{"Sϕ Codeptr "}}
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
block_228 --> branch_224
subgraph block_228["Block 228"]
	direction TB
	b228_9["cond__199 u8.!="]
	b228_8["arg__201 u8.&"]
	b228_5["arg__202 0"]
	b228_6["arg__204 0x40u8"]
	b228_0[/"Start"\\]
	b228_8 --> b228_9
	b228_5 --> b228_8
	b228_6 --> b228_5
	b228_0 --> b228_6
end
subgraph block_227["Block 227"]
	direction TB
end
branch_224 --> block_227
subgraph block_223["Block 223"]
	direction TB
	b223_4["memindex__206 0u"]
end
branch_220 --> block_223
subgraph block_218["Block 218"]
	direction TB
	b218_15["offset imm_readULEB32"]
end
branch_215 --> block_218

</pre>`;
window.traces["F32_LOAD"]["unlem_pretty"] = ''
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
window.traces["F32_LOAD"]["constUnLEM"] = ''
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
window.traces["F32_LOAD"]["chooseMerge"] = ''
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
window.traces["F32_LOAD"]["scheduled"] = ''
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
window.traces["F32_LOAD"]["pretty"] = ''
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
window.traces["F64_LOAD"] = {}
window.traces["F64_LOAD"]["parsed"] = ''
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
window.traces["F64_LOAD"]["raw"] = ''
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
window.traces["F64_LOAD"]["overloadOps"] = ''
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
window.traces["F64_LOAD"]["addAbstractions"] = ''
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
window.traces["F64_LOAD"]["schedulerMermaid"] = ''
window.traces["F64_LOAD"]["schedulerMermaid"] += `<pre class='graph'>graph TD
subgraph block_229["Block 229"]
	direction TB
	b229_1[\\"Finish"/]
	b229_23["offset imm_readULEB64"]
	b229_15["offset imm_readULEB32"]
	b229_30["eff__208 push_f64"]
	b229_22["eff__213 push_f64"]
	b229_28["val mach_readMemory64_f64"]
	b229_24["index pop_u64"]
	b229_20["val mach_readMemory32_f64"]
	b229_16["index pop_u32"]
	b229_10["memindex__220 imm_readULEB32"]
	b229_4["memindex__226 0u"]
	b229_3["flags imm_readU8"]
	b229_23 --> b229_1
	b229_15 --> b229_23
	b229_30 --> b229_15
	b229_22 --> b229_30
	b229_28 --> b229_22
	b229_24 --> b229_28
	b229_20 --> b229_24
	b229_16 --> b229_20
	b229_10 --> b229_16
	b229_4 --> b229_10
	b229_3 --> b229_4
end
phi_231 --> block_229
subgraph phi_231["Phi 231"]
	p231_32{{"Sϕ Stack "}}
	p231_31{{"Sϕ Codeptr "}}
end
block_232 --> phi_231
block_233 --> phi_231
subgraph block_232["Block 232"]
	direction TB
	b232_23["offset imm_readULEB64"]
end
phi_236 --> block_232
subgraph phi_236["Phi 236"]
	p236_11{"memindex ϕ"}
	p236_11{"memindex ϕ"}
	p236_11{"memindex ϕ"}
	p236_11{"memindex ϕ"}
end
block_237 --> phi_236
block_238 --> phi_236
subgraph block_237["Block 237"]
	direction TB
	b237_10["memindex__220 imm_readULEB32"]
	b237_3["flags imm_readU8"]
	b237_3 --> b237_10
end
branch_235 --> block_237
subgraph branch_235["Branch 235"]
	br235_9["cond__219 u8.!="]

end
branch_230 --> branch_235
subgraph branch_230["Branch 230"]
	br230_14["cond__207 m_isMemory64"]

end
block_234 --> branch_230
subgraph block_234["Block 234"]
	direction TB
	b234_14["cond__207 m_isMemory64"]
end
phi_240 --> block_234
subgraph phi_240["Phi 240"]
	p240_12{{"Sϕ Codeptr "}}
	p240_12{{"Sϕ Codeptr "}}
	p240_12{{"Sϕ Codeptr "}}
	p240_12{{"Sϕ Codeptr "}}
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
block_243 --> branch_239
subgraph block_243["Block 243"]
	direction TB
	b243_9["cond__219 u8.!="]
	b243_8["arg__221 u8.&"]
	b243_5["arg__222 0"]
	b243_6["arg__224 0x40u8"]
	b243_0[/"Start"\\]
	b243_8 --> b243_9
	b243_5 --> b243_8
	b243_6 --> b243_5
	b243_0 --> b243_6
end
subgraph block_242["Block 242"]
	direction TB
end
branch_239 --> block_242
subgraph block_238["Block 238"]
	direction TB
	b238_4["memindex__226 0u"]
end
branch_235 --> block_238
subgraph block_233["Block 233"]
	direction TB
	b233_15["offset imm_readULEB32"]
end
branch_230 --> block_233

</pre>`;
window.traces["F64_LOAD"]["unLEM"] = ''
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
window.traces["F64_LOAD"]["unlem_schedule"] = ''
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
window.traces["F64_LOAD"]["unlem_scheduler"] = ''
window.traces["F64_LOAD"]["unlem_scheduler"] += `<pre class='graph'>graph TD
subgraph block_244["Block 244"]
	direction TB
	b244_1[\\"Finish"/]
	b244_23["offset imm_readULEB64"]
	b244_15["offset imm_readULEB32"]
	b244_30["eff__208 push_f64"]
	b244_22["eff__213 push_f64"]
	b244_28["val mach_readMemory64_f64"]
	b244_24["index pop_u64"]
	b244_20["val mach_readMemory32_f64"]
	b244_16["index pop_u32"]
	b244_10["memindex__220 imm_readULEB32"]
	b244_4["memindex__226 0u"]
	b244_3["flags imm_readU8"]
	b244_23 --> b244_1
	b244_15 --> b244_23
	b244_30 --> b244_15
	b244_22 --> b244_30
	b244_28 --> b244_22
	b244_24 --> b244_28
	b244_20 --> b244_24
	b244_16 --> b244_20
	b244_10 --> b244_16
	b244_4 --> b244_10
	b244_3 --> b244_4
end
phi_246 --> block_244
subgraph phi_246["Phi 246"]
	p246_32{{"Sϕ Stack "}}
	p246_31{{"Sϕ Codeptr "}}
end
block_247 --> phi_246
block_248 --> phi_246
subgraph block_247["Block 247"]
	direction TB
	b247_23["offset imm_readULEB64"]
end
phi_251 --> block_247
subgraph phi_251["Phi 251"]
	p251_11{"memindex ϕ"}
	p251_11{"memindex ϕ"}
	p251_11{"memindex ϕ"}
	p251_11{"memindex ϕ"}
end
block_252 --> phi_251
block_253 --> phi_251
subgraph block_252["Block 252"]
	direction TB
	b252_10["memindex__220 imm_readULEB32"]
	b252_3["flags imm_readU8"]
	b252_3 --> b252_10
end
branch_250 --> block_252
subgraph branch_250["Branch 250"]
	br250_9["cond__219 u8.!="]

end
branch_245 --> branch_250
subgraph branch_245["Branch 245"]
	br245_14["cond__207 m_isMemory64"]

end
block_249 --> branch_245
subgraph block_249["Block 249"]
	direction TB
	b249_14["cond__207 m_isMemory64"]
end
phi_255 --> block_249
subgraph phi_255["Phi 255"]
	p255_12{{"Sϕ Codeptr "}}
	p255_12{{"Sϕ Codeptr "}}
	p255_12{{"Sϕ Codeptr "}}
	p255_12{{"Sϕ Codeptr "}}
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
block_258 --> branch_254
subgraph block_258["Block 258"]
	direction TB
	b258_9["cond__219 u8.!="]
	b258_8["arg__221 u8.&"]
	b258_5["arg__222 0"]
	b258_6["arg__224 0x40u8"]
	b258_0[/"Start"\\]
	b258_8 --> b258_9
	b258_5 --> b258_8
	b258_6 --> b258_5
	b258_0 --> b258_6
end
subgraph block_257["Block 257"]
	direction TB
end
branch_254 --> block_257
subgraph block_253["Block 253"]
	direction TB
	b253_4["memindex__226 0u"]
end
branch_250 --> block_253
subgraph block_248["Block 248"]
	direction TB
	b248_15["offset imm_readULEB32"]
end
branch_245 --> block_248

</pre>`;
window.traces["F64_LOAD"]["unlem_pretty"] = ''
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
window.traces["F64_LOAD"]["constUnLEM"] = ''
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
window.traces["F64_LOAD"]["chooseMerge"] = ''
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
window.traces["F64_LOAD"]["scheduled"] = ''
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
window.traces["F64_LOAD"]["pretty"] = ''
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
window.traces["I32_LOAD8_S"] = {}
window.traces["I32_LOAD8_S"]["parsed"] = ''
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
window.traces["I32_LOAD8_S"]["raw"] = ''
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
window.traces["I32_LOAD8_S"]["overloadOps"] = ''
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
window.traces["I32_LOAD8_S"]["addAbstractions"] = ''
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
window.traces["I32_LOAD8_S"]["schedulerMermaid"] = ''
window.traces["I32_LOAD8_S"]["schedulerMermaid"] += `<pre class='graph'>graph TD
subgraph block_259["Block 259"]
	direction TB
	b259_1[\\"Finish"/]
	b259_25["offset imm_readULEB64"]
	b259_15["offset imm_readULEB32"]
	b259_34["eff__228 push_u32"]
	b259_24["eff__234 push_u32"]
	b259_32["extend U32_extend8_s"]
	b259_26["index pop_u64"]
	b259_22["extend U32_extend8_s"]
	b259_16["index pop_u32"]
	b259_10["memindex__242 imm_readULEB32"]
	b259_4["memindex__248 0u"]
	b259_3["flags imm_readU8"]
	b259_30["val mach_readMemory64_u8"]
	b259_20["val mach_readMemory32_u8"]
	b259_25 --> b259_1
	b259_15 --> b259_25
	b259_34 --> b259_15
	b259_24 --> b259_34
	b259_32 --> b259_24
	b259_26 --> b259_32
	b259_22 --> b259_26
	b259_16 --> b259_22
	b259_10 --> b259_16
	b259_4 --> b259_10
	b259_3 --> b259_4
	b259_30 --> b259_3
	b259_20 --> b259_30
end
phi_261 --> block_259
subgraph phi_261["Phi 261"]
	p261_36{{"Sϕ Stack "}}
	p261_35{{"Sϕ Codeptr "}}
end
block_262 --> phi_261
block_263 --> phi_261
subgraph block_262["Block 262"]
	direction TB
	b262_25["offset imm_readULEB64"]
	b262_34["eff__228 push_u32"]
	b262_26["index pop_u64"]
	b262_34 --> b262_25
	b262_26 --> b262_34
end
phi_266 --> block_262
subgraph phi_266["Phi 266"]
	p266_11{"memindex ϕ"}
	p266_11{"memindex ϕ"}
	p266_11{"memindex ϕ"}
	p266_11{"memindex ϕ"}
end
block_267 --> phi_266
block_268 --> phi_266
subgraph block_267["Block 267"]
	direction TB
	b267_10["memindex__242 imm_readULEB32"]
	b267_3["flags imm_readU8"]
	b267_3 --> b267_10
end
branch_265 --> block_267
subgraph branch_265["Branch 265"]
	br265_9["cond__241 u8.!="]

end
branch_260 --> branch_265
subgraph branch_260["Branch 260"]
	br260_14["cond__227 m_isMemory64"]

end
block_264 --> branch_260
subgraph block_264["Block 264"]
	direction TB
	b264_14["cond__227 m_isMemory64"]
end
phi_270 --> block_264
subgraph phi_270["Phi 270"]
	p270_12{{"Sϕ Codeptr "}}
	p270_12{{"Sϕ Codeptr "}}
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
block_273 --> branch_269
subgraph block_273["Block 273"]
	direction TB
	b273_9["cond__241 u8.!="]
	b273_8["arg__243 u8.&"]
	b273_5["arg__244 0"]
	b273_6["arg__246 0x40u8"]
	b273_0[/"Start"\\]
	b273_8 --> b273_9
	b273_5 --> b273_8
	b273_6 --> b273_5
	b273_0 --> b273_6
end
subgraph block_272["Block 272"]
	direction TB
end
branch_269 --> block_272
subgraph block_268["Block 268"]
	direction TB
	b268_4["memindex__248 0u"]
end
branch_265 --> block_268
subgraph block_263["Block 263"]
	direction TB
	b263_15["offset imm_readULEB32"]
	b263_24["eff__234 push_u32"]
	b263_16["index pop_u32"]
	b263_24 --> b263_15
	b263_16 --> b263_24
end
branch_260 --> block_263

</pre>`;
window.traces["I32_LOAD8_S"]["unLEM"] = ''
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
window.traces["I32_LOAD8_S"]["unlem_schedule"] = ''
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
window.traces["I32_LOAD8_S"]["unlem_scheduler"] = ''
window.traces["I32_LOAD8_S"]["unlem_scheduler"] += `<pre class='graph'>graph TD
subgraph block_274["Block 274"]
	direction TB
	b274_1[\\"Finish"/]
	b274_25["offset imm_readULEB64"]
	b274_15["offset imm_readULEB32"]
	b274_34["eff__228 push_u32"]
	b274_24["eff__234 push_u32"]
	b274_32["extend U32_extend8_s"]
	b274_26["index pop_u64"]
	b274_22["extend U32_extend8_s"]
	b274_16["index pop_u32"]
	b274_10["memindex__242 imm_readULEB32"]
	b274_4["memindex__248 0u"]
	b274_3["flags imm_readU8"]
	b274_30["val mach_readMemory64_u8"]
	b274_20["val mach_readMemory32_u8"]
	b274_25 --> b274_1
	b274_15 --> b274_25
	b274_34 --> b274_15
	b274_24 --> b274_34
	b274_32 --> b274_24
	b274_26 --> b274_32
	b274_22 --> b274_26
	b274_16 --> b274_22
	b274_10 --> b274_16
	b274_4 --> b274_10
	b274_3 --> b274_4
	b274_30 --> b274_3
	b274_20 --> b274_30
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
	b277_25["offset imm_readULEB64"]
	b277_34["eff__228 push_u32"]
	b277_28["index pop_u64"]
	b277_34 --> b277_25
	b277_28 --> b277_34
end
phi_281 --> block_277
subgraph phi_281["Phi 281"]
	p281_11{"memindex ϕ"}
	p281_11{"memindex ϕ"}
	p281_11{"memindex ϕ"}
	p281_11{"memindex ϕ"}
end
block_282 --> phi_281
block_283 --> phi_281
subgraph block_282["Block 282"]
	direction TB
	b282_10["memindex__242 imm_readULEB32"]
	b282_3["flags imm_readU8"]
	b282_3 --> b282_10
end
branch_280 --> block_282
subgraph branch_280["Branch 280"]
	br280_9["cond__241 u8.!="]

end
branch_275 --> branch_280
subgraph branch_275["Branch 275"]
	br275_14["cond__227 m_isMemory64"]

end
block_279 --> branch_275
subgraph block_279["Block 279"]
	direction TB
	b279_14["cond__227 m_isMemory64"]
end
phi_285 --> block_279
subgraph phi_285["Phi 285"]
	p285_12{{"Sϕ Codeptr "}}
	p285_12{{"Sϕ Codeptr "}}
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
block_288 --> branch_284
subgraph block_288["Block 288"]
	direction TB
	b288_9["cond__241 u8.!="]
	b288_8["arg__243 u8.&"]
	b288_5["arg__244 0"]
	b288_6["arg__246 0x40u8"]
	b288_0[/"Start"\\]
	b288_8 --> b288_9
	b288_5 --> b288_8
	b288_6 --> b288_5
	b288_0 --> b288_6
end
subgraph block_287["Block 287"]
	direction TB
end
branch_284 --> block_287
subgraph block_283["Block 283"]
	direction TB
	b283_4["memindex__248 0u"]
end
branch_280 --> block_283
subgraph block_278["Block 278"]
	direction TB
	b278_15["offset imm_readULEB32"]
	b278_24["eff__234 push_u32"]
	b278_18["index pop_u32"]
	b278_24 --> b278_15
	b278_18 --> b278_24
end
branch_275 --> block_278

</pre>`;
window.traces["I32_LOAD8_S"]["unlem_pretty"] = ''
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
window.traces["I32_LOAD8_S"]["constUnLEM"] = ''
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
window.traces["I32_LOAD8_S"]["chooseMerge"] = ''
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
window.traces["I32_LOAD8_S"]["scheduled"] = ''
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
window.traces["I32_LOAD8_S"]["pretty"] = ''
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
window.traces["I32_LOAD8_U"] = {}
window.traces["I32_LOAD8_U"]["parsed"] = ''
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
window.traces["I32_LOAD8_U"]["raw"] = ''
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
window.traces["I32_LOAD8_U"]["overloadOps"] = ''
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
window.traces["I32_LOAD8_U"]["addAbstractions"] = ''
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
window.traces["I32_LOAD8_U"]["schedulerMermaid"] = ''
window.traces["I32_LOAD8_U"]["schedulerMermaid"] += `<pre class='graph'>graph TD
subgraph block_289["Block 289"]
	direction TB
	b289_1[\\"Finish"/]
	b289_23["offset imm_readULEB64"]
	b289_15["offset imm_readULEB32"]
	b289_30["eff__250 push_u32"]
	b289_22["eff__255 push_u32"]
	b289_28["val mach_readMemory64_u8"]
	b289_24["index pop_u64"]
	b289_20["val mach_readMemory32_u8"]
	b289_16["index pop_u32"]
	b289_10["memindex__262 imm_readULEB32"]
	b289_4["memindex__268 0u"]
	b289_3["flags imm_readU8"]
	b289_23 --> b289_1
	b289_15 --> b289_23
	b289_30 --> b289_15
	b289_22 --> b289_30
	b289_28 --> b289_22
	b289_24 --> b289_28
	b289_20 --> b289_24
	b289_16 --> b289_20
	b289_10 --> b289_16
	b289_4 --> b289_10
	b289_3 --> b289_4
end
phi_291 --> block_289
subgraph phi_291["Phi 291"]
	p291_32{{"Sϕ Stack "}}
	p291_31{{"Sϕ Codeptr "}}
end
block_292 --> phi_291
block_293 --> phi_291
subgraph block_292["Block 292"]
	direction TB
	b292_23["offset imm_readULEB64"]
end
phi_296 --> block_292
subgraph phi_296["Phi 296"]
	p296_11{"memindex ϕ"}
	p296_11{"memindex ϕ"}
	p296_11{"memindex ϕ"}
	p296_11{"memindex ϕ"}
end
block_297 --> phi_296
block_298 --> phi_296
subgraph block_297["Block 297"]
	direction TB
	b297_10["memindex__262 imm_readULEB32"]
	b297_3["flags imm_readU8"]
	b297_3 --> b297_10
end
branch_295 --> block_297
subgraph branch_295["Branch 295"]
	br295_9["cond__261 u8.!="]

end
branch_290 --> branch_295
subgraph branch_290["Branch 290"]
	br290_14["cond__249 m_isMemory64"]

end
block_294 --> branch_290
subgraph block_294["Block 294"]
	direction TB
	b294_14["cond__249 m_isMemory64"]
end
phi_300 --> block_294
subgraph phi_300["Phi 300"]
	p300_12{{"Sϕ Codeptr "}}
	p300_12{{"Sϕ Codeptr "}}
	p300_12{{"Sϕ Codeptr "}}
	p300_12{{"Sϕ Codeptr "}}
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
block_303 --> branch_299
subgraph block_303["Block 303"]
	direction TB
	b303_9["cond__261 u8.!="]
	b303_8["arg__263 u8.&"]
	b303_5["arg__264 0"]
	b303_6["arg__266 0x40u8"]
	b303_0[/"Start"\\]
	b303_8 --> b303_9
	b303_5 --> b303_8
	b303_6 --> b303_5
	b303_0 --> b303_6
end
subgraph block_302["Block 302"]
	direction TB
end
branch_299 --> block_302
subgraph block_298["Block 298"]
	direction TB
	b298_4["memindex__268 0u"]
end
branch_295 --> block_298
subgraph block_293["Block 293"]
	direction TB
	b293_15["offset imm_readULEB32"]
end
branch_290 --> block_293

</pre>`;
window.traces["I32_LOAD8_U"]["unLEM"] = ''
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
window.traces["I32_LOAD8_U"]["unlem_schedule"] = ''
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
window.traces["I32_LOAD8_U"]["unlem_scheduler"] = ''
window.traces["I32_LOAD8_U"]["unlem_scheduler"] += `<pre class='graph'>graph TD
subgraph block_304["Block 304"]
	direction TB
	b304_1[\\"Finish"/]
	b304_23["offset imm_readULEB64"]
	b304_15["offset imm_readULEB32"]
	b304_30["eff__250 push_u32"]
	b304_22["eff__255 push_u32"]
	b304_28["val mach_readMemory64_u8"]
	b304_24["index pop_u64"]
	b304_20["val mach_readMemory32_u8"]
	b304_16["index pop_u32"]
	b304_10["memindex__262 imm_readULEB32"]
	b304_4["memindex__268 0u"]
	b304_3["flags imm_readU8"]
	b304_23 --> b304_1
	b304_15 --> b304_23
	b304_30 --> b304_15
	b304_22 --> b304_30
	b304_28 --> b304_22
	b304_24 --> b304_28
	b304_20 --> b304_24
	b304_16 --> b304_20
	b304_10 --> b304_16
	b304_4 --> b304_10
	b304_3 --> b304_4
end
phi_306 --> block_304
subgraph phi_306["Phi 306"]
	p306_32{{"Sϕ Stack "}}
	p306_31{{"Sϕ Codeptr "}}
end
block_307 --> phi_306
block_308 --> phi_306
subgraph block_307["Block 307"]
	direction TB
	b307_23["offset imm_readULEB64"]
end
phi_311 --> block_307
subgraph phi_311["Phi 311"]
	p311_11{"memindex ϕ"}
	p311_11{"memindex ϕ"}
	p311_11{"memindex ϕ"}
	p311_11{"memindex ϕ"}
end
block_312 --> phi_311
block_313 --> phi_311
subgraph block_312["Block 312"]
	direction TB
	b312_10["memindex__262 imm_readULEB32"]
	b312_3["flags imm_readU8"]
	b312_3 --> b312_10
end
branch_310 --> block_312
subgraph branch_310["Branch 310"]
	br310_9["cond__261 u8.!="]

end
branch_305 --> branch_310
subgraph branch_305["Branch 305"]
	br305_14["cond__249 m_isMemory64"]

end
block_309 --> branch_305
subgraph block_309["Block 309"]
	direction TB
	b309_14["cond__249 m_isMemory64"]
end
phi_315 --> block_309
subgraph phi_315["Phi 315"]
	p315_12{{"Sϕ Codeptr "}}
	p315_12{{"Sϕ Codeptr "}}
	p315_12{{"Sϕ Codeptr "}}
	p315_12{{"Sϕ Codeptr "}}
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
block_318 --> branch_314
subgraph block_318["Block 318"]
	direction TB
	b318_9["cond__261 u8.!="]
	b318_8["arg__263 u8.&"]
	b318_5["arg__264 0"]
	b318_6["arg__266 0x40u8"]
	b318_0[/"Start"\\]
	b318_8 --> b318_9
	b318_5 --> b318_8
	b318_6 --> b318_5
	b318_0 --> b318_6
end
subgraph block_317["Block 317"]
	direction TB
end
branch_314 --> block_317
subgraph block_313["Block 313"]
	direction TB
	b313_4["memindex__268 0u"]
end
branch_310 --> block_313
subgraph block_308["Block 308"]
	direction TB
	b308_15["offset imm_readULEB32"]
end
branch_305 --> block_308

</pre>`;
window.traces["I32_LOAD8_U"]["unlem_pretty"] = ''
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
window.traces["I32_LOAD8_U"]["constUnLEM"] = ''
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
window.traces["I32_LOAD8_U"]["chooseMerge"] = ''
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
window.traces["I32_LOAD8_U"]["scheduled"] = ''
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
window.traces["I32_LOAD8_U"]["pretty"] = ''
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
window.traces["I32_LOAD16_S"] = {}
window.traces["I32_LOAD16_S"]["parsed"] = ''
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
window.traces["I32_LOAD16_S"]["raw"] = ''
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
window.traces["I32_LOAD16_S"]["overloadOps"] = ''
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
window.traces["I32_LOAD16_S"]["addAbstractions"] = ''
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
window.traces["I32_LOAD16_S"]["schedulerMermaid"] = ''
window.traces["I32_LOAD16_S"]["schedulerMermaid"] += `<pre class='graph'>graph TD
subgraph block_319["Block 319"]
	direction TB
	b319_1[\\"Finish"/]
	b319_25["offset imm_readULEB64"]
	b319_15["offset imm_readULEB32"]
	b319_34["eff__270 push_u32"]
	b319_24["eff__276 push_u32"]
	b319_32["extend U32_extend16_s"]
	b319_26["index pop_u64"]
	b319_22["extend U32_extend16_s"]
	b319_16["index pop_u32"]
	b319_10["memindex__284 imm_readULEB32"]
	b319_4["memindex__290 0u"]
	b319_3["flags imm_readU8"]
	b319_30["val mach_readMemory64_u16"]
	b319_20["val mach_readMemory32_u16"]
	b319_25 --> b319_1
	b319_15 --> b319_25
	b319_34 --> b319_15
	b319_24 --> b319_34
	b319_32 --> b319_24
	b319_26 --> b319_32
	b319_22 --> b319_26
	b319_16 --> b319_22
	b319_10 --> b319_16
	b319_4 --> b319_10
	b319_3 --> b319_4
	b319_30 --> b319_3
	b319_20 --> b319_30
end
phi_321 --> block_319
subgraph phi_321["Phi 321"]
	p321_36{{"Sϕ Stack "}}
	p321_35{{"Sϕ Codeptr "}}
end
block_322 --> phi_321
block_323 --> phi_321
subgraph block_322["Block 322"]
	direction TB
	b322_25["offset imm_readULEB64"]
	b322_34["eff__270 push_u32"]
	b322_26["index pop_u64"]
	b322_34 --> b322_25
	b322_26 --> b322_34
end
phi_326 --> block_322
subgraph phi_326["Phi 326"]
	p326_11{"memindex ϕ"}
	p326_11{"memindex ϕ"}
	p326_11{"memindex ϕ"}
	p326_11{"memindex ϕ"}
end
block_327 --> phi_326
block_328 --> phi_326
subgraph block_327["Block 327"]
	direction TB
	b327_10["memindex__284 imm_readULEB32"]
	b327_3["flags imm_readU8"]
	b327_3 --> b327_10
end
branch_325 --> block_327
subgraph branch_325["Branch 325"]
	br325_9["cond__283 u8.!="]

end
branch_320 --> branch_325
subgraph branch_320["Branch 320"]
	br320_14["cond__269 m_isMemory64"]

end
block_324 --> branch_320
subgraph block_324["Block 324"]
	direction TB
	b324_14["cond__269 m_isMemory64"]
end
phi_330 --> block_324
subgraph phi_330["Phi 330"]
	p330_12{{"Sϕ Codeptr "}}
	p330_12{{"Sϕ Codeptr "}}
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
block_333 --> branch_329
subgraph block_333["Block 333"]
	direction TB
	b333_9["cond__283 u8.!="]
	b333_8["arg__285 u8.&"]
	b333_5["arg__286 0"]
	b333_6["arg__288 0x40u8"]
	b333_0[/"Start"\\]
	b333_8 --> b333_9
	b333_5 --> b333_8
	b333_6 --> b333_5
	b333_0 --> b333_6
end
subgraph block_332["Block 332"]
	direction TB
end
branch_329 --> block_332
subgraph block_328["Block 328"]
	direction TB
	b328_4["memindex__290 0u"]
end
branch_325 --> block_328
subgraph block_323["Block 323"]
	direction TB
	b323_15["offset imm_readULEB32"]
	b323_24["eff__276 push_u32"]
	b323_16["index pop_u32"]
	b323_24 --> b323_15
	b323_16 --> b323_24
end
branch_320 --> block_323

</pre>`;
window.traces["I32_LOAD16_S"]["unLEM"] = ''
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
window.traces["I32_LOAD16_S"]["unlem_schedule"] = ''
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
window.traces["I32_LOAD16_S"]["unlem_scheduler"] = ''
window.traces["I32_LOAD16_S"]["unlem_scheduler"] += `<pre class='graph'>graph TD
subgraph block_334["Block 334"]
	direction TB
	b334_1[\\"Finish"/]
	b334_25["offset imm_readULEB64"]
	b334_15["offset imm_readULEB32"]
	b334_34["eff__270 push_u32"]
	b334_24["eff__276 push_u32"]
	b334_32["extend U32_extend16_s"]
	b334_26["index pop_u64"]
	b334_22["extend U32_extend16_s"]
	b334_16["index pop_u32"]
	b334_10["memindex__284 imm_readULEB32"]
	b334_4["memindex__290 0u"]
	b334_3["flags imm_readU8"]
	b334_30["val mach_readMemory64_u16"]
	b334_20["val mach_readMemory32_u16"]
	b334_25 --> b334_1
	b334_15 --> b334_25
	b334_34 --> b334_15
	b334_24 --> b334_34
	b334_32 --> b334_24
	b334_26 --> b334_32
	b334_22 --> b334_26
	b334_16 --> b334_22
	b334_10 --> b334_16
	b334_4 --> b334_10
	b334_3 --> b334_4
	b334_30 --> b334_3
	b334_20 --> b334_30
end
phi_336 --> block_334
subgraph phi_336["Phi 336"]
	p336_36{{"Sϕ Stack "}}
	p336_35{{"Sϕ Codeptr "}}
end
block_337 --> phi_336
block_338 --> phi_336
subgraph block_337["Block 337"]
	direction TB
	b337_25["offset imm_readULEB64"]
	b337_34["eff__270 push_u32"]
	b337_28["index pop_u64"]
	b337_34 --> b337_25
	b337_28 --> b337_34
end
phi_341 --> block_337
subgraph phi_341["Phi 341"]
	p341_11{"memindex ϕ"}
	p341_11{"memindex ϕ"}
	p341_11{"memindex ϕ"}
	p341_11{"memindex ϕ"}
end
block_342 --> phi_341
block_343 --> phi_341
subgraph block_342["Block 342"]
	direction TB
	b342_10["memindex__284 imm_readULEB32"]
	b342_3["flags imm_readU8"]
	b342_3 --> b342_10
end
branch_340 --> block_342
subgraph branch_340["Branch 340"]
	br340_9["cond__283 u8.!="]

end
branch_335 --> branch_340
subgraph branch_335["Branch 335"]
	br335_14["cond__269 m_isMemory64"]

end
block_339 --> branch_335
subgraph block_339["Block 339"]
	direction TB
	b339_14["cond__269 m_isMemory64"]
end
phi_345 --> block_339
subgraph phi_345["Phi 345"]
	p345_12{{"Sϕ Codeptr "}}
	p345_12{{"Sϕ Codeptr "}}
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
block_348 --> branch_344
subgraph block_348["Block 348"]
	direction TB
	b348_9["cond__283 u8.!="]
	b348_8["arg__285 u8.&"]
	b348_5["arg__286 0"]
	b348_6["arg__288 0x40u8"]
	b348_0[/"Start"\\]
	b348_8 --> b348_9
	b348_5 --> b348_8
	b348_6 --> b348_5
	b348_0 --> b348_6
end
subgraph block_347["Block 347"]
	direction TB
end
branch_344 --> block_347
subgraph block_343["Block 343"]
	direction TB
	b343_4["memindex__290 0u"]
end
branch_340 --> block_343
subgraph block_338["Block 338"]
	direction TB
	b338_15["offset imm_readULEB32"]
	b338_24["eff__276 push_u32"]
	b338_18["index pop_u32"]
	b338_24 --> b338_15
	b338_18 --> b338_24
end
branch_335 --> block_338

</pre>`;
window.traces["I32_LOAD16_S"]["unlem_pretty"] = ''
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
window.traces["I32_LOAD16_S"]["constUnLEM"] = ''
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
window.traces["I32_LOAD16_S"]["chooseMerge"] = ''
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
window.traces["I32_LOAD16_S"]["scheduled"] = ''
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
window.traces["I32_LOAD16_S"]["pretty"] = ''
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
window.traces["I32_LOAD16_U"] = {}
window.traces["I32_LOAD16_U"]["parsed"] = ''
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
window.traces["I32_LOAD16_U"]["raw"] = ''
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
window.traces["I32_LOAD16_U"]["overloadOps"] = ''
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
window.traces["I32_LOAD16_U"]["addAbstractions"] = ''
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
window.traces["I32_LOAD16_U"]["schedulerMermaid"] = ''
window.traces["I32_LOAD16_U"]["schedulerMermaid"] += `<pre class='graph'>graph TD
subgraph block_349["Block 349"]
	direction TB
	b349_1[\\"Finish"/]
	b349_23["offset imm_readULEB64"]
	b349_15["offset imm_readULEB32"]
	b349_30["eff__292 push_u32"]
	b349_22["eff__297 push_u32"]
	b349_28["val mach_readMemory64_u16"]
	b349_24["index pop_u64"]
	b349_20["val mach_readMemory32_u16"]
	b349_16["index pop_u32"]
	b349_10["memindex__304 imm_readULEB32"]
	b349_4["memindex__310 0u"]
	b349_3["flags imm_readU8"]
	b349_23 --> b349_1
	b349_15 --> b349_23
	b349_30 --> b349_15
	b349_22 --> b349_30
	b349_28 --> b349_22
	b349_24 --> b349_28
	b349_20 --> b349_24
	b349_16 --> b349_20
	b349_10 --> b349_16
	b349_4 --> b349_10
	b349_3 --> b349_4
end
phi_351 --> block_349
subgraph phi_351["Phi 351"]
	p351_32{{"Sϕ Stack "}}
	p351_31{{"Sϕ Codeptr "}}
end
block_352 --> phi_351
block_353 --> phi_351
subgraph block_352["Block 352"]
	direction TB
	b352_23["offset imm_readULEB64"]
end
phi_356 --> block_352
subgraph phi_356["Phi 356"]
	p356_11{"memindex ϕ"}
	p356_11{"memindex ϕ"}
	p356_11{"memindex ϕ"}
	p356_11{"memindex ϕ"}
end
block_357 --> phi_356
block_358 --> phi_356
subgraph block_357["Block 357"]
	direction TB
	b357_10["memindex__304 imm_readULEB32"]
	b357_3["flags imm_readU8"]
	b357_3 --> b357_10
end
branch_355 --> block_357
subgraph branch_355["Branch 355"]
	br355_9["cond__303 u8.!="]

end
branch_350 --> branch_355
subgraph branch_350["Branch 350"]
	br350_14["cond__291 m_isMemory64"]

end
block_354 --> branch_350
subgraph block_354["Block 354"]
	direction TB
	b354_14["cond__291 m_isMemory64"]
end
phi_360 --> block_354
subgraph phi_360["Phi 360"]
	p360_12{{"Sϕ Codeptr "}}
	p360_12{{"Sϕ Codeptr "}}
	p360_12{{"Sϕ Codeptr "}}
	p360_12{{"Sϕ Codeptr "}}
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
block_363 --> branch_359
subgraph block_363["Block 363"]
	direction TB
	b363_9["cond__303 u8.!="]
	b363_8["arg__305 u8.&"]
	b363_5["arg__306 0"]
	b363_6["arg__308 0x40u8"]
	b363_0[/"Start"\\]
	b363_8 --> b363_9
	b363_5 --> b363_8
	b363_6 --> b363_5
	b363_0 --> b363_6
end
subgraph block_362["Block 362"]
	direction TB
end
branch_359 --> block_362
subgraph block_358["Block 358"]
	direction TB
	b358_4["memindex__310 0u"]
end
branch_355 --> block_358
subgraph block_353["Block 353"]
	direction TB
	b353_15["offset imm_readULEB32"]
end
branch_350 --> block_353

</pre>`;
window.traces["I32_LOAD16_U"]["unLEM"] = ''
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
window.traces["I32_LOAD16_U"]["unlem_schedule"] = ''
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
window.traces["I32_LOAD16_U"]["unlem_scheduler"] = ''
window.traces["I32_LOAD16_U"]["unlem_scheduler"] += `<pre class='graph'>graph TD
subgraph block_364["Block 364"]
	direction TB
	b364_1[\\"Finish"/]
	b364_23["offset imm_readULEB64"]
	b364_15["offset imm_readULEB32"]
	b364_30["eff__292 push_u32"]
	b364_22["eff__297 push_u32"]
	b364_28["val mach_readMemory64_u16"]
	b364_24["index pop_u64"]
	b364_20["val mach_readMemory32_u16"]
	b364_16["index pop_u32"]
	b364_10["memindex__304 imm_readULEB32"]
	b364_4["memindex__310 0u"]
	b364_3["flags imm_readU8"]
	b364_23 --> b364_1
	b364_15 --> b364_23
	b364_30 --> b364_15
	b364_22 --> b364_30
	b364_28 --> b364_22
	b364_24 --> b364_28
	b364_20 --> b364_24
	b364_16 --> b364_20
	b364_10 --> b364_16
	b364_4 --> b364_10
	b364_3 --> b364_4
end
phi_366 --> block_364
subgraph phi_366["Phi 366"]
	p366_32{{"Sϕ Stack "}}
	p366_31{{"Sϕ Codeptr "}}
end
block_367 --> phi_366
block_368 --> phi_366
subgraph block_367["Block 367"]
	direction TB
	b367_23["offset imm_readULEB64"]
end
phi_371 --> block_367
subgraph phi_371["Phi 371"]
	p371_11{"memindex ϕ"}
	p371_11{"memindex ϕ"}
	p371_11{"memindex ϕ"}
	p371_11{"memindex ϕ"}
end
block_372 --> phi_371
block_373 --> phi_371
subgraph block_372["Block 372"]
	direction TB
	b372_10["memindex__304 imm_readULEB32"]
	b372_3["flags imm_readU8"]
	b372_3 --> b372_10
end
branch_370 --> block_372
subgraph branch_370["Branch 370"]
	br370_9["cond__303 u8.!="]

end
branch_365 --> branch_370
subgraph branch_365["Branch 365"]
	br365_14["cond__291 m_isMemory64"]

end
block_369 --> branch_365
subgraph block_369["Block 369"]
	direction TB
	b369_14["cond__291 m_isMemory64"]
end
phi_375 --> block_369
subgraph phi_375["Phi 375"]
	p375_12{{"Sϕ Codeptr "}}
	p375_12{{"Sϕ Codeptr "}}
	p375_12{{"Sϕ Codeptr "}}
	p375_12{{"Sϕ Codeptr "}}
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
block_378 --> branch_374
subgraph block_378["Block 378"]
	direction TB
	b378_9["cond__303 u8.!="]
	b378_8["arg__305 u8.&"]
	b378_5["arg__306 0"]
	b378_6["arg__308 0x40u8"]
	b378_0[/"Start"\\]
	b378_8 --> b378_9
	b378_5 --> b378_8
	b378_6 --> b378_5
	b378_0 --> b378_6
end
subgraph block_377["Block 377"]
	direction TB
end
branch_374 --> block_377
subgraph block_373["Block 373"]
	direction TB
	b373_4["memindex__310 0u"]
end
branch_370 --> block_373
subgraph block_368["Block 368"]
	direction TB
	b368_15["offset imm_readULEB32"]
end
branch_365 --> block_368

</pre>`;
window.traces["I32_LOAD16_U"]["unlem_pretty"] = ''
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
window.traces["I32_LOAD16_U"]["constUnLEM"] = ''
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
window.traces["I32_LOAD16_U"]["chooseMerge"] = ''
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
window.traces["I32_LOAD16_U"]["scheduled"] = ''
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
window.traces["I32_LOAD16_U"]["pretty"] = ''
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
window.traces["I64_LOAD8_S"] = {}
window.traces["I64_LOAD8_S"]["parsed"] = ''
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
window.traces["I64_LOAD8_S"]["raw"] = ''
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
window.traces["I64_LOAD8_S"]["overloadOps"] = ''
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
window.traces["I64_LOAD8_S"]["addAbstractions"] = ''
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
window.traces["I64_LOAD8_S"]["schedulerMermaid"] = ''
window.traces["I64_LOAD8_S"]["schedulerMermaid"] += `<pre class='graph'>graph TD
subgraph block_379["Block 379"]
	direction TB
	b379_1[\\"Finish"/]
	b379_25["offset imm_readULEB64"]
	b379_15["offset imm_readULEB32"]
	b379_34["eff__312 push_u64"]
	b379_24["eff__318 push_u64"]
	b379_32["extend U64_extend8_s"]
	b379_26["index pop_u64"]
	b379_22["extend U64_extend8_s"]
	b379_16["index pop_u32"]
	b379_10["memindex__326 imm_readULEB32"]
	b379_4["memindex__332 0u"]
	b379_3["flags imm_readU8"]
	b379_30["val mach_readMemory64_u8_64"]
	b379_20["val mach_readMemory32_u8_64"]
	b379_25 --> b379_1
	b379_15 --> b379_25
	b379_34 --> b379_15
	b379_24 --> b379_34
	b379_32 --> b379_24
	b379_26 --> b379_32
	b379_22 --> b379_26
	b379_16 --> b379_22
	b379_10 --> b379_16
	b379_4 --> b379_10
	b379_3 --> b379_4
	b379_30 --> b379_3
	b379_20 --> b379_30
end
phi_381 --> block_379
subgraph phi_381["Phi 381"]
	p381_36{{"Sϕ Stack "}}
	p381_35{{"Sϕ Codeptr "}}
end
block_382 --> phi_381
block_383 --> phi_381
subgraph block_382["Block 382"]
	direction TB
	b382_25["offset imm_readULEB64"]
	b382_34["eff__312 push_u64"]
	b382_26["index pop_u64"]
	b382_34 --> b382_25
	b382_26 --> b382_34
end
phi_386 --> block_382
subgraph phi_386["Phi 386"]
	p386_11{"memindex ϕ"}
	p386_11{"memindex ϕ"}
	p386_11{"memindex ϕ"}
	p386_11{"memindex ϕ"}
end
block_387 --> phi_386
block_388 --> phi_386
subgraph block_387["Block 387"]
	direction TB
	b387_10["memindex__326 imm_readULEB32"]
	b387_3["flags imm_readU8"]
	b387_3 --> b387_10
end
branch_385 --> block_387
subgraph branch_385["Branch 385"]
	br385_9["cond__325 u8.!="]

end
branch_380 --> branch_385
subgraph branch_380["Branch 380"]
	br380_14["cond__311 m_isMemory64"]

end
block_384 --> branch_380
subgraph block_384["Block 384"]
	direction TB
	b384_14["cond__311 m_isMemory64"]
end
phi_390 --> block_384
subgraph phi_390["Phi 390"]
	p390_12{{"Sϕ Codeptr "}}
	p390_12{{"Sϕ Codeptr "}}
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
block_393 --> branch_389
subgraph block_393["Block 393"]
	direction TB
	b393_9["cond__325 u8.!="]
	b393_8["arg__327 u8.&"]
	b393_5["arg__328 0"]
	b393_6["arg__330 0x40u8"]
	b393_0[/"Start"\\]
	b393_8 --> b393_9
	b393_5 --> b393_8
	b393_6 --> b393_5
	b393_0 --> b393_6
end
subgraph block_392["Block 392"]
	direction TB
end
branch_389 --> block_392
subgraph block_388["Block 388"]
	direction TB
	b388_4["memindex__332 0u"]
end
branch_385 --> block_388
subgraph block_383["Block 383"]
	direction TB
	b383_15["offset imm_readULEB32"]
	b383_24["eff__318 push_u64"]
	b383_16["index pop_u32"]
	b383_24 --> b383_15
	b383_16 --> b383_24
end
branch_380 --> block_383

</pre>`;
window.traces["I64_LOAD8_S"]["unLEM"] = ''
window.traces["I64_LOAD8_S"]["unLEM"] += `<pre class='graph'>---
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
window.traces["I64_LOAD8_S"]["unlem_schedule"] = ''
window.traces["I64_LOAD8_S"]["unlem_schedule"] += `<pre class=''>def flags = imm_readU8();
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
window.traces["I64_LOAD8_S"]["unlem_scheduler"] = ''
window.traces["I64_LOAD8_S"]["unlem_scheduler"] += `<pre class='graph'>graph TD
subgraph block_394["Block 394"]
	direction TB
	b394_1[\\"Finish"/]
	b394_25["offset imm_readULEB64"]
	b394_15["offset imm_readULEB32"]
	b394_34["eff__312 push_u64"]
	b394_24["eff__318 push_u64"]
	b394_32["extend U64_extend8_s"]
	b394_26["index pop_u64"]
	b394_22["extend U64_extend8_s"]
	b394_16["index pop_u32"]
	b394_10["memindex__326 imm_readULEB32"]
	b394_4["memindex__332 0u"]
	b394_3["flags imm_readU8"]
	b394_30["val mach_readMemory64_u8_64"]
	b394_20["val mach_readMemory32_u8_64"]
	b394_25 --> b394_1
	b394_15 --> b394_25
	b394_34 --> b394_15
	b394_24 --> b394_34
	b394_32 --> b394_24
	b394_26 --> b394_32
	b394_22 --> b394_26
	b394_16 --> b394_22
	b394_10 --> b394_16
	b394_4 --> b394_10
	b394_3 --> b394_4
	b394_30 --> b394_3
	b394_20 --> b394_30
end
phi_396 --> block_394
subgraph phi_396["Phi 396"]
	p396_36{{"Sϕ Stack "}}
	p396_35{{"Sϕ Codeptr "}}
end
block_397 --> phi_396
block_398 --> phi_396
subgraph block_397["Block 397"]
	direction TB
	b397_25["offset imm_readULEB64"]
	b397_34["eff__312 push_u64"]
	b397_28["index pop_u64"]
	b397_34 --> b397_25
	b397_28 --> b397_34
end
phi_401 --> block_397
subgraph phi_401["Phi 401"]
	p401_11{"memindex ϕ"}
	p401_11{"memindex ϕ"}
	p401_11{"memindex ϕ"}
	p401_11{"memindex ϕ"}
end
block_402 --> phi_401
block_403 --> phi_401
subgraph block_402["Block 402"]
	direction TB
	b402_10["memindex__326 imm_readULEB32"]
	b402_3["flags imm_readU8"]
	b402_3 --> b402_10
end
branch_400 --> block_402
subgraph branch_400["Branch 400"]
	br400_9["cond__325 u8.!="]

end
branch_395 --> branch_400
subgraph branch_395["Branch 395"]
	br395_14["cond__311 m_isMemory64"]

end
block_399 --> branch_395
subgraph block_399["Block 399"]
	direction TB
	b399_14["cond__311 m_isMemory64"]
end
phi_405 --> block_399
subgraph phi_405["Phi 405"]
	p405_12{{"Sϕ Codeptr "}}
	p405_12{{"Sϕ Codeptr "}}
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
block_408 --> branch_404
subgraph block_408["Block 408"]
	direction TB
	b408_9["cond__325 u8.!="]
	b408_8["arg__327 u8.&"]
	b408_5["arg__328 0"]
	b408_6["arg__330 0x40u8"]
	b408_0[/"Start"\\]
	b408_8 --> b408_9
	b408_5 --> b408_8
	b408_6 --> b408_5
	b408_0 --> b408_6
end
subgraph block_407["Block 407"]
	direction TB
end
branch_404 --> block_407
subgraph block_403["Block 403"]
	direction TB
	b403_4["memindex__332 0u"]
end
branch_400 --> block_403
subgraph block_398["Block 398"]
	direction TB
	b398_15["offset imm_readULEB32"]
	b398_24["eff__318 push_u64"]
	b398_18["index pop_u32"]
	b398_24 --> b398_15
	b398_18 --> b398_24
end
branch_395 --> block_398

</pre>`;
window.traces["I64_LOAD8_S"]["unlem_pretty"] = ''
window.traces["I64_LOAD8_S"]["unlem_pretty"] += `<pre class=''>def flags = imm_readU8();
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
window.traces["I64_LOAD8_S"]["constUnLEM"] = ''
window.traces["I64_LOAD8_S"]["constUnLEM"] += `<pre class='graph'>---
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
window.traces["I64_LOAD8_S"]["chooseMerge"] = ''
window.traces["I64_LOAD8_S"]["chooseMerge"] += `<pre class='graph'>---
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
window.traces["I64_LOAD8_S"]["scheduled"] = ''
window.traces["I64_LOAD8_S"]["scheduled"] += `<pre class=''>def flags = imm_readU8();
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
window.traces["I64_LOAD8_S"]["pretty"] = ''
window.traces["I64_LOAD8_S"]["pretty"] += `<pre class=''>def flags = imm_readU8();
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
window.traces["I64_LOAD8_U"]["parsed"] = ''
window.traces["I64_LOAD8_U"]["parsed"] += `<pre class=''>def flags = imm_readU8();
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
window.traces["I64_LOAD8_U"]["raw"] = ''
window.traces["I64_LOAD8_U"]["raw"] += `<pre class='graph'>---
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
window.traces["I64_LOAD8_U"]["overloadOps"] = ''
window.traces["I64_LOAD8_U"]["overloadOps"] += `<pre class='graph'>---
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
window.traces["I64_LOAD8_U"]["addAbstractions"] = ''
window.traces["I64_LOAD8_U"]["addAbstractions"] += `<pre class='graph'>---
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
window.traces["I64_LOAD8_U"]["schedulerMermaid"] = ''
window.traces["I64_LOAD8_U"]["schedulerMermaid"] += `<pre class='graph'>graph TD
subgraph block_409["Block 409"]
	direction TB
	b409_1[\\"Finish"/]
	b409_23["offset imm_readULEB64"]
	b409_15["offset imm_readULEB32"]
	b409_30["eff__334 push_u64"]
	b409_22["eff__339 push_u64"]
	b409_28["val mach_readMemory64_u8_64"]
	b409_24["index pop_u64"]
	b409_20["val mach_readMemory32_u8_64"]
	b409_16["index pop_u32"]
	b409_10["memindex__346 imm_readULEB32"]
	b409_4["memindex__352 0u"]
	b409_3["flags imm_readU8"]
	b409_23 --> b409_1
	b409_15 --> b409_23
	b409_30 --> b409_15
	b409_22 --> b409_30
	b409_28 --> b409_22
	b409_24 --> b409_28
	b409_20 --> b409_24
	b409_16 --> b409_20
	b409_10 --> b409_16
	b409_4 --> b409_10
	b409_3 --> b409_4
end
phi_411 --> block_409
subgraph phi_411["Phi 411"]
	p411_32{{"Sϕ Stack "}}
	p411_31{{"Sϕ Codeptr "}}
end
block_412 --> phi_411
block_413 --> phi_411
subgraph block_412["Block 412"]
	direction TB
	b412_23["offset imm_readULEB64"]
end
phi_416 --> block_412
subgraph phi_416["Phi 416"]
	p416_11{"memindex ϕ"}
	p416_11{"memindex ϕ"}
	p416_11{"memindex ϕ"}
	p416_11{"memindex ϕ"}
end
block_417 --> phi_416
block_418 --> phi_416
subgraph block_417["Block 417"]
	direction TB
	b417_10["memindex__346 imm_readULEB32"]
	b417_3["flags imm_readU8"]
	b417_3 --> b417_10
end
branch_415 --> block_417
subgraph branch_415["Branch 415"]
	br415_9["cond__345 u8.!="]

end
branch_410 --> branch_415
subgraph branch_410["Branch 410"]
	br410_14["cond__333 m_isMemory64"]

end
block_414 --> branch_410
subgraph block_414["Block 414"]
	direction TB
	b414_14["cond__333 m_isMemory64"]
end
phi_420 --> block_414
subgraph phi_420["Phi 420"]
	p420_12{{"Sϕ Codeptr "}}
	p420_12{{"Sϕ Codeptr "}}
	p420_12{{"Sϕ Codeptr "}}
	p420_12{{"Sϕ Codeptr "}}
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
block_423 --> branch_419
subgraph block_423["Block 423"]
	direction TB
	b423_9["cond__345 u8.!="]
	b423_8["arg__347 u8.&"]
	b423_5["arg__348 0"]
	b423_6["arg__350 0x40u8"]
	b423_0[/"Start"\\]
	b423_8 --> b423_9
	b423_5 --> b423_8
	b423_6 --> b423_5
	b423_0 --> b423_6
end
subgraph block_422["Block 422"]
	direction TB
end
branch_419 --> block_422
subgraph block_418["Block 418"]
	direction TB
	b418_4["memindex__352 0u"]
end
branch_415 --> block_418
subgraph block_413["Block 413"]
	direction TB
	b413_15["offset imm_readULEB32"]
end
branch_410 --> block_413

</pre>`;
window.traces["I64_LOAD8_U"]["unLEM"] = ''
window.traces["I64_LOAD8_U"]["unLEM"] += `<pre class='graph'>---
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
window.traces["I64_LOAD8_U"]["unlem_schedule"] = ''
window.traces["I64_LOAD8_U"]["unlem_schedule"] += `<pre class=''>def flags = imm_readU8();
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
window.traces["I64_LOAD8_U"]["unlem_scheduler"] = ''
window.traces["I64_LOAD8_U"]["unlem_scheduler"] += `<pre class='graph'>graph TD
subgraph block_424["Block 424"]
	direction TB
	b424_1[\\"Finish"/]
	b424_23["offset imm_readULEB64"]
	b424_15["offset imm_readULEB32"]
	b424_30["eff__334 push_u64"]
	b424_22["eff__339 push_u64"]
	b424_28["val mach_readMemory64_u8_64"]
	b424_24["index pop_u64"]
	b424_20["val mach_readMemory32_u8_64"]
	b424_16["index pop_u32"]
	b424_10["memindex__346 imm_readULEB32"]
	b424_4["memindex__352 0u"]
	b424_3["flags imm_readU8"]
	b424_23 --> b424_1
	b424_15 --> b424_23
	b424_30 --> b424_15
	b424_22 --> b424_30
	b424_28 --> b424_22
	b424_24 --> b424_28
	b424_20 --> b424_24
	b424_16 --> b424_20
	b424_10 --> b424_16
	b424_4 --> b424_10
	b424_3 --> b424_4
end
phi_426 --> block_424
subgraph phi_426["Phi 426"]
	p426_32{{"Sϕ Stack "}}
	p426_31{{"Sϕ Codeptr "}}
end
block_427 --> phi_426
block_428 --> phi_426
subgraph block_427["Block 427"]
	direction TB
	b427_23["offset imm_readULEB64"]
end
phi_431 --> block_427
subgraph phi_431["Phi 431"]
	p431_11{"memindex ϕ"}
	p431_11{"memindex ϕ"}
	p431_11{"memindex ϕ"}
	p431_11{"memindex ϕ"}
end
block_432 --> phi_431
block_433 --> phi_431
subgraph block_432["Block 432"]
	direction TB
	b432_10["memindex__346 imm_readULEB32"]
	b432_3["flags imm_readU8"]
	b432_3 --> b432_10
end
branch_430 --> block_432
subgraph branch_430["Branch 430"]
	br430_9["cond__345 u8.!="]

end
branch_425 --> branch_430
subgraph branch_425["Branch 425"]
	br425_14["cond__333 m_isMemory64"]

end
block_429 --> branch_425
subgraph block_429["Block 429"]
	direction TB
	b429_14["cond__333 m_isMemory64"]
end
phi_435 --> block_429
subgraph phi_435["Phi 435"]
	p435_12{{"Sϕ Codeptr "}}
	p435_12{{"Sϕ Codeptr "}}
	p435_12{{"Sϕ Codeptr "}}
	p435_12{{"Sϕ Codeptr "}}
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
block_438 --> branch_434
subgraph block_438["Block 438"]
	direction TB
	b438_9["cond__345 u8.!="]
	b438_8["arg__347 u8.&"]
	b438_5["arg__348 0"]
	b438_6["arg__350 0x40u8"]
	b438_0[/"Start"\\]
	b438_8 --> b438_9
	b438_5 --> b438_8
	b438_6 --> b438_5
	b438_0 --> b438_6
end
subgraph block_437["Block 437"]
	direction TB
end
branch_434 --> block_437
subgraph block_433["Block 433"]
	direction TB
	b433_4["memindex__352 0u"]
end
branch_430 --> block_433
subgraph block_428["Block 428"]
	direction TB
	b428_15["offset imm_readULEB32"]
end
branch_425 --> block_428

</pre>`;
window.traces["I64_LOAD8_U"]["unlem_pretty"] = ''
window.traces["I64_LOAD8_U"]["unlem_pretty"] += `<pre class=''>def flags = imm_readU8();
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
window.traces["I64_LOAD8_U"]["constUnLEM"] = ''
window.traces["I64_LOAD8_U"]["constUnLEM"] += `<pre class='graph'>---
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
window.traces["I64_LOAD8_U"]["chooseMerge"] = ''
window.traces["I64_LOAD8_U"]["chooseMerge"] += `<pre class='graph'>---
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
window.traces["I64_LOAD8_U"]["scheduled"] = ''
window.traces["I64_LOAD8_U"]["scheduled"] += `<pre class=''>def flags = imm_readU8();
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
window.traces["I64_LOAD8_U"]["pretty"] = ''
window.traces["I64_LOAD8_U"]["pretty"] += `<pre class=''>def flags = imm_readU8();
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
window.traces["I64_LOAD16_S"]["parsed"] = ''
window.traces["I64_LOAD16_S"]["parsed"] += `<pre class=''>def flags = imm_readU8();
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
window.traces["I64_LOAD16_S"]["raw"] = ''
window.traces["I64_LOAD16_S"]["raw"] += `<pre class='graph'>---
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
window.traces["I64_LOAD16_S"]["overloadOps"] = ''
window.traces["I64_LOAD16_S"]["overloadOps"] += `<pre class='graph'>---
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
window.traces["I64_LOAD16_S"]["addAbstractions"] = ''
window.traces["I64_LOAD16_S"]["addAbstractions"] += `<pre class='graph'>---
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
window.traces["I64_LOAD16_S"]["schedulerMermaid"] = ''
window.traces["I64_LOAD16_S"]["schedulerMermaid"] += `<pre class='graph'>graph TD
subgraph block_439["Block 439"]
	direction TB
	b439_1[\\"Finish"/]
	b439_25["offset imm_readULEB64"]
	b439_15["offset imm_readULEB32"]
	b439_34["eff__354 push_u64"]
	b439_24["eff__360 push_u64"]
	b439_32["extend U64_extend16_s"]
	b439_26["index pop_u64"]
	b439_22["extend U64_extend16_s"]
	b439_16["index pop_u32"]
	b439_10["memindex__368 imm_readULEB32"]
	b439_4["memindex__374 0u"]
	b439_3["flags imm_readU8"]
	b439_30["val mach_readMemory64_u16_64"]
	b439_20["val mach_readMemory32_u16_64"]
	b439_25 --> b439_1
	b439_15 --> b439_25
	b439_34 --> b439_15
	b439_24 --> b439_34
	b439_32 --> b439_24
	b439_26 --> b439_32
	b439_22 --> b439_26
	b439_16 --> b439_22
	b439_10 --> b439_16
	b439_4 --> b439_10
	b439_3 --> b439_4
	b439_30 --> b439_3
	b439_20 --> b439_30
end
phi_441 --> block_439
subgraph phi_441["Phi 441"]
	p441_36{{"Sϕ Stack "}}
	p441_35{{"Sϕ Codeptr "}}
end
block_442 --> phi_441
block_443 --> phi_441
subgraph block_442["Block 442"]
	direction TB
	b442_25["offset imm_readULEB64"]
	b442_34["eff__354 push_u64"]
	b442_26["index pop_u64"]
	b442_34 --> b442_25
	b442_26 --> b442_34
end
phi_446 --> block_442
subgraph phi_446["Phi 446"]
	p446_11{"memindex ϕ"}
	p446_11{"memindex ϕ"}
	p446_11{"memindex ϕ"}
	p446_11{"memindex ϕ"}
end
block_447 --> phi_446
block_448 --> phi_446
subgraph block_447["Block 447"]
	direction TB
	b447_10["memindex__368 imm_readULEB32"]
	b447_3["flags imm_readU8"]
	b447_3 --> b447_10
end
branch_445 --> block_447
subgraph branch_445["Branch 445"]
	br445_9["cond__367 u8.!="]

end
branch_440 --> branch_445
subgraph branch_440["Branch 440"]
	br440_14["cond__353 m_isMemory64"]

end
block_444 --> branch_440
subgraph block_444["Block 444"]
	direction TB
	b444_14["cond__353 m_isMemory64"]
end
phi_450 --> block_444
subgraph phi_450["Phi 450"]
	p450_12{{"Sϕ Codeptr "}}
	p450_12{{"Sϕ Codeptr "}}
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
block_453 --> branch_449
subgraph block_453["Block 453"]
	direction TB
	b453_9["cond__367 u8.!="]
	b453_8["arg__369 u8.&"]
	b453_5["arg__370 0"]
	b453_6["arg__372 0x40u8"]
	b453_0[/"Start"\\]
	b453_8 --> b453_9
	b453_5 --> b453_8
	b453_6 --> b453_5
	b453_0 --> b453_6
end
subgraph block_452["Block 452"]
	direction TB
end
branch_449 --> block_452
subgraph block_448["Block 448"]
	direction TB
	b448_4["memindex__374 0u"]
end
branch_445 --> block_448
subgraph block_443["Block 443"]
	direction TB
	b443_15["offset imm_readULEB32"]
	b443_24["eff__360 push_u64"]
	b443_16["index pop_u32"]
	b443_24 --> b443_15
	b443_16 --> b443_24
end
branch_440 --> block_443

</pre>`;
window.traces["I64_LOAD16_S"]["unLEM"] = ''
window.traces["I64_LOAD16_S"]["unLEM"] += `<pre class='graph'>---
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
window.traces["I64_LOAD16_S"]["unlem_schedule"] = ''
window.traces["I64_LOAD16_S"]["unlem_schedule"] += `<pre class=''>def flags = imm_readU8();
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
window.traces["I64_LOAD16_S"]["unlem_scheduler"] = ''
window.traces["I64_LOAD16_S"]["unlem_scheduler"] += `<pre class='graph'>graph TD
subgraph block_454["Block 454"]
	direction TB
	b454_1[\\"Finish"/]
	b454_25["offset imm_readULEB64"]
	b454_15["offset imm_readULEB32"]
	b454_34["eff__354 push_u64"]
	b454_24["eff__360 push_u64"]
	b454_32["extend U64_extend16_s"]
	b454_26["index pop_u64"]
	b454_22["extend U64_extend16_s"]
	b454_16["index pop_u32"]
	b454_10["memindex__368 imm_readULEB32"]
	b454_4["memindex__374 0u"]
	b454_3["flags imm_readU8"]
	b454_30["val mach_readMemory64_u16_64"]
	b454_20["val mach_readMemory32_u16_64"]
	b454_25 --> b454_1
	b454_15 --> b454_25
	b454_34 --> b454_15
	b454_24 --> b454_34
	b454_32 --> b454_24
	b454_26 --> b454_32
	b454_22 --> b454_26
	b454_16 --> b454_22
	b454_10 --> b454_16
	b454_4 --> b454_10
	b454_3 --> b454_4
	b454_30 --> b454_3
	b454_20 --> b454_30
end
phi_456 --> block_454
subgraph phi_456["Phi 456"]
	p456_36{{"Sϕ Stack "}}
	p456_35{{"Sϕ Codeptr "}}
end
block_457 --> phi_456
block_458 --> phi_456
subgraph block_457["Block 457"]
	direction TB
	b457_25["offset imm_readULEB64"]
	b457_34["eff__354 push_u64"]
	b457_28["index pop_u64"]
	b457_34 --> b457_25
	b457_28 --> b457_34
end
phi_461 --> block_457
subgraph phi_461["Phi 461"]
	p461_11{"memindex ϕ"}
	p461_11{"memindex ϕ"}
	p461_11{"memindex ϕ"}
	p461_11{"memindex ϕ"}
end
block_462 --> phi_461
block_463 --> phi_461
subgraph block_462["Block 462"]
	direction TB
	b462_10["memindex__368 imm_readULEB32"]
	b462_3["flags imm_readU8"]
	b462_3 --> b462_10
end
branch_460 --> block_462
subgraph branch_460["Branch 460"]
	br460_9["cond__367 u8.!="]

end
branch_455 --> branch_460
subgraph branch_455["Branch 455"]
	br455_14["cond__353 m_isMemory64"]

end
block_459 --> branch_455
subgraph block_459["Block 459"]
	direction TB
	b459_14["cond__353 m_isMemory64"]
end
phi_465 --> block_459
subgraph phi_465["Phi 465"]
	p465_12{{"Sϕ Codeptr "}}
	p465_12{{"Sϕ Codeptr "}}
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
block_468 --> branch_464
subgraph block_468["Block 468"]
	direction TB
	b468_9["cond__367 u8.!="]
	b468_8["arg__369 u8.&"]
	b468_5["arg__370 0"]
	b468_6["arg__372 0x40u8"]
	b468_0[/"Start"\\]
	b468_8 --> b468_9
	b468_5 --> b468_8
	b468_6 --> b468_5
	b468_0 --> b468_6
end
subgraph block_467["Block 467"]
	direction TB
end
branch_464 --> block_467
subgraph block_463["Block 463"]
	direction TB
	b463_4["memindex__374 0u"]
end
branch_460 --> block_463
subgraph block_458["Block 458"]
	direction TB
	b458_15["offset imm_readULEB32"]
	b458_24["eff__360 push_u64"]
	b458_18["index pop_u32"]
	b458_24 --> b458_15
	b458_18 --> b458_24
end
branch_455 --> block_458

</pre>`;
window.traces["I64_LOAD16_S"]["unlem_pretty"] = ''
window.traces["I64_LOAD16_S"]["unlem_pretty"] += `<pre class=''>def flags = imm_readU8();
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
window.traces["I64_LOAD16_S"]["constUnLEM"] = ''
window.traces["I64_LOAD16_S"]["constUnLEM"] += `<pre class='graph'>---
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
window.traces["I64_LOAD16_S"]["chooseMerge"] = ''
window.traces["I64_LOAD16_S"]["chooseMerge"] += `<pre class='graph'>---
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
window.traces["I64_LOAD16_S"]["scheduled"] = ''
window.traces["I64_LOAD16_S"]["scheduled"] += `<pre class=''>def flags = imm_readU8();
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
window.traces["I64_LOAD16_S"]["pretty"] = ''
window.traces["I64_LOAD16_S"]["pretty"] += `<pre class=''>def flags = imm_readU8();
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
window.traces["I64_LOAD16_U"]["parsed"] = ''
window.traces["I64_LOAD16_U"]["parsed"] += `<pre class=''>def flags = imm_readU8();
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
window.traces["I64_LOAD16_U"]["raw"] = ''
window.traces["I64_LOAD16_U"]["raw"] += `<pre class='graph'>---
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
window.traces["I64_LOAD16_U"]["overloadOps"] = ''
window.traces["I64_LOAD16_U"]["overloadOps"] += `<pre class='graph'>---
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
window.traces["I64_LOAD16_U"]["addAbstractions"] = ''
window.traces["I64_LOAD16_U"]["addAbstractions"] += `<pre class='graph'>---
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
window.traces["I64_LOAD16_U"]["schedulerMermaid"] = ''
window.traces["I64_LOAD16_U"]["schedulerMermaid"] += `<pre class='graph'>graph TD
subgraph block_469["Block 469"]
	direction TB
	b469_1[\\"Finish"/]
	b469_23["offset imm_readULEB64"]
	b469_15["offset imm_readULEB32"]
	b469_30["eff__376 push_u64"]
	b469_22["eff__381 push_u64"]
	b469_28["val mach_readMemory64_u16_64"]
	b469_24["index pop_u64"]
	b469_20["val mach_readMemory32_u16_64"]
	b469_16["index pop_u32"]
	b469_10["memindex__388 imm_readULEB32"]
	b469_4["memindex__394 0u"]
	b469_3["flags imm_readU8"]
	b469_23 --> b469_1
	b469_15 --> b469_23
	b469_30 --> b469_15
	b469_22 --> b469_30
	b469_28 --> b469_22
	b469_24 --> b469_28
	b469_20 --> b469_24
	b469_16 --> b469_20
	b469_10 --> b469_16
	b469_4 --> b469_10
	b469_3 --> b469_4
end
phi_471 --> block_469
subgraph phi_471["Phi 471"]
	p471_32{{"Sϕ Stack "}}
	p471_31{{"Sϕ Codeptr "}}
end
block_472 --> phi_471
block_473 --> phi_471
subgraph block_472["Block 472"]
	direction TB
	b472_23["offset imm_readULEB64"]
end
phi_476 --> block_472
subgraph phi_476["Phi 476"]
	p476_11{"memindex ϕ"}
	p476_11{"memindex ϕ"}
	p476_11{"memindex ϕ"}
	p476_11{"memindex ϕ"}
end
block_477 --> phi_476
block_478 --> phi_476
subgraph block_477["Block 477"]
	direction TB
	b477_10["memindex__388 imm_readULEB32"]
	b477_3["flags imm_readU8"]
	b477_3 --> b477_10
end
branch_475 --> block_477
subgraph branch_475["Branch 475"]
	br475_9["cond__387 u8.!="]

end
branch_470 --> branch_475
subgraph branch_470["Branch 470"]
	br470_14["cond__375 m_isMemory64"]

end
block_474 --> branch_470
subgraph block_474["Block 474"]
	direction TB
	b474_14["cond__375 m_isMemory64"]
end
phi_480 --> block_474
subgraph phi_480["Phi 480"]
	p480_12{{"Sϕ Codeptr "}}
	p480_12{{"Sϕ Codeptr "}}
	p480_12{{"Sϕ Codeptr "}}
	p480_12{{"Sϕ Codeptr "}}
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
block_483 --> branch_479
subgraph block_483["Block 483"]
	direction TB
	b483_9["cond__387 u8.!="]
	b483_8["arg__389 u8.&"]
	b483_5["arg__390 0"]
	b483_6["arg__392 0x40u8"]
	b483_0[/"Start"\\]
	b483_8 --> b483_9
	b483_5 --> b483_8
	b483_6 --> b483_5
	b483_0 --> b483_6
end
subgraph block_482["Block 482"]
	direction TB
end
branch_479 --> block_482
subgraph block_478["Block 478"]
	direction TB
	b478_4["memindex__394 0u"]
end
branch_475 --> block_478
subgraph block_473["Block 473"]
	direction TB
	b473_15["offset imm_readULEB32"]
end
branch_470 --> block_473

</pre>`;
window.traces["I64_LOAD16_U"]["unLEM"] = ''
window.traces["I64_LOAD16_U"]["unLEM"] += `<pre class='graph'>---
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
window.traces["I64_LOAD16_U"]["unlem_schedule"] = ''
window.traces["I64_LOAD16_U"]["unlem_schedule"] += `<pre class=''>def flags = imm_readU8();
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
window.traces["I64_LOAD16_U"]["unlem_scheduler"] = ''
window.traces["I64_LOAD16_U"]["unlem_scheduler"] += `<pre class='graph'>graph TD
subgraph block_484["Block 484"]
	direction TB
	b484_1[\\"Finish"/]
	b484_23["offset imm_readULEB64"]
	b484_15["offset imm_readULEB32"]
	b484_30["eff__376 push_u64"]
	b484_22["eff__381 push_u64"]
	b484_28["val mach_readMemory64_u16_64"]
	b484_24["index pop_u64"]
	b484_20["val mach_readMemory32_u16_64"]
	b484_16["index pop_u32"]
	b484_10["memindex__388 imm_readULEB32"]
	b484_4["memindex__394 0u"]
	b484_3["flags imm_readU8"]
	b484_23 --> b484_1
	b484_15 --> b484_23
	b484_30 --> b484_15
	b484_22 --> b484_30
	b484_28 --> b484_22
	b484_24 --> b484_28
	b484_20 --> b484_24
	b484_16 --> b484_20
	b484_10 --> b484_16
	b484_4 --> b484_10
	b484_3 --> b484_4
end
phi_486 --> block_484
subgraph phi_486["Phi 486"]
	p486_32{{"Sϕ Stack "}}
	p486_31{{"Sϕ Codeptr "}}
end
block_487 --> phi_486
block_488 --> phi_486
subgraph block_487["Block 487"]
	direction TB
	b487_23["offset imm_readULEB64"]
end
phi_491 --> block_487
subgraph phi_491["Phi 491"]
	p491_11{"memindex ϕ"}
	p491_11{"memindex ϕ"}
	p491_11{"memindex ϕ"}
	p491_11{"memindex ϕ"}
end
block_492 --> phi_491
block_493 --> phi_491
subgraph block_492["Block 492"]
	direction TB
	b492_10["memindex__388 imm_readULEB32"]
	b492_3["flags imm_readU8"]
	b492_3 --> b492_10
end
branch_490 --> block_492
subgraph branch_490["Branch 490"]
	br490_9["cond__387 u8.!="]

end
branch_485 --> branch_490
subgraph branch_485["Branch 485"]
	br485_14["cond__375 m_isMemory64"]

end
block_489 --> branch_485
subgraph block_489["Block 489"]
	direction TB
	b489_14["cond__375 m_isMemory64"]
end
phi_495 --> block_489
subgraph phi_495["Phi 495"]
	p495_12{{"Sϕ Codeptr "}}
	p495_12{{"Sϕ Codeptr "}}
	p495_12{{"Sϕ Codeptr "}}
	p495_12{{"Sϕ Codeptr "}}
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
block_498 --> branch_494
subgraph block_498["Block 498"]
	direction TB
	b498_9["cond__387 u8.!="]
	b498_8["arg__389 u8.&"]
	b498_5["arg__390 0"]
	b498_6["arg__392 0x40u8"]
	b498_0[/"Start"\\]
	b498_8 --> b498_9
	b498_5 --> b498_8
	b498_6 --> b498_5
	b498_0 --> b498_6
end
subgraph block_497["Block 497"]
	direction TB
end
branch_494 --> block_497
subgraph block_493["Block 493"]
	direction TB
	b493_4["memindex__394 0u"]
end
branch_490 --> block_493
subgraph block_488["Block 488"]
	direction TB
	b488_15["offset imm_readULEB32"]
end
branch_485 --> block_488

</pre>`;
window.traces["I64_LOAD16_U"]["unlem_pretty"] = ''
window.traces["I64_LOAD16_U"]["unlem_pretty"] += `<pre class=''>def flags = imm_readU8();
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
window.traces["I64_LOAD16_U"]["constUnLEM"] = ''
window.traces["I64_LOAD16_U"]["constUnLEM"] += `<pre class='graph'>---
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
window.traces["I64_LOAD16_U"]["chooseMerge"] = ''
window.traces["I64_LOAD16_U"]["chooseMerge"] += `<pre class='graph'>---
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
window.traces["I64_LOAD16_U"]["scheduled"] = ''
window.traces["I64_LOAD16_U"]["scheduled"] += `<pre class=''>def flags = imm_readU8();
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
window.traces["I64_LOAD16_U"]["pretty"] = ''
window.traces["I64_LOAD16_U"]["pretty"] += `<pre class=''>def flags = imm_readU8();
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
window.traces["I64_LOAD32_S"]["parsed"] = ''
window.traces["I64_LOAD32_S"]["parsed"] += `<pre class=''>def flags = imm_readU8();
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
window.traces["I64_LOAD32_S"]["raw"] = ''
window.traces["I64_LOAD32_S"]["raw"] += `<pre class='graph'>---
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
window.traces["I64_LOAD32_S"]["overloadOps"] = ''
window.traces["I64_LOAD32_S"]["overloadOps"] += `<pre class='graph'>---
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
window.traces["I64_LOAD32_S"]["addAbstractions"] = ''
window.traces["I64_LOAD32_S"]["addAbstractions"] += `<pre class='graph'>---
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
window.traces["I64_LOAD32_S"]["schedulerMermaid"] = ''
window.traces["I64_LOAD32_S"]["schedulerMermaid"] += `<pre class='graph'>graph TD
subgraph block_499["Block 499"]
	direction TB
	b499_1[\\"Finish"/]
	b499_25["offset imm_readULEB64"]
	b499_15["offset imm_readULEB32"]
	b499_34["eff__396 push_u64"]
	b499_24["eff__402 push_u64"]
	b499_32["extend U64_extend32_s"]
	b499_26["index pop_u64"]
	b499_22["extend U64_extend32_s"]
	b499_16["index pop_u32"]
	b499_10["memindex__410 imm_readULEB32"]
	b499_4["memindex__416 0u"]
	b499_3["flags imm_readU8"]
	b499_30["val mach_readMemory64_u32_64"]
	b499_20["val mach_readMemory32_u32_64"]
	b499_25 --> b499_1
	b499_15 --> b499_25
	b499_34 --> b499_15
	b499_24 --> b499_34
	b499_32 --> b499_24
	b499_26 --> b499_32
	b499_22 --> b499_26
	b499_16 --> b499_22
	b499_10 --> b499_16
	b499_4 --> b499_10
	b499_3 --> b499_4
	b499_30 --> b499_3
	b499_20 --> b499_30
end
phi_501 --> block_499
subgraph phi_501["Phi 501"]
	p501_36{{"Sϕ Stack "}}
	p501_35{{"Sϕ Codeptr "}}
end
block_502 --> phi_501
block_503 --> phi_501
subgraph block_502["Block 502"]
	direction TB
	b502_25["offset imm_readULEB64"]
	b502_34["eff__396 push_u64"]
	b502_26["index pop_u64"]
	b502_34 --> b502_25
	b502_26 --> b502_34
end
phi_506 --> block_502
subgraph phi_506["Phi 506"]
	p506_11{"memindex ϕ"}
	p506_11{"memindex ϕ"}
	p506_11{"memindex ϕ"}
	p506_11{"memindex ϕ"}
end
block_507 --> phi_506
block_508 --> phi_506
subgraph block_507["Block 507"]
	direction TB
	b507_10["memindex__410 imm_readULEB32"]
	b507_3["flags imm_readU8"]
	b507_3 --> b507_10
end
branch_505 --> block_507
subgraph branch_505["Branch 505"]
	br505_9["cond__409 u8.!="]

end
branch_500 --> branch_505
subgraph branch_500["Branch 500"]
	br500_14["cond__395 m_isMemory64"]

end
block_504 --> branch_500
subgraph block_504["Block 504"]
	direction TB
	b504_14["cond__395 m_isMemory64"]
end
phi_510 --> block_504
subgraph phi_510["Phi 510"]
	p510_12{{"Sϕ Codeptr "}}
	p510_12{{"Sϕ Codeptr "}}
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
block_513 --> branch_509
subgraph block_513["Block 513"]
	direction TB
	b513_9["cond__409 u8.!="]
	b513_8["arg__411 u8.&"]
	b513_5["arg__412 0"]
	b513_6["arg__414 0x40u8"]
	b513_0[/"Start"\\]
	b513_8 --> b513_9
	b513_5 --> b513_8
	b513_6 --> b513_5
	b513_0 --> b513_6
end
subgraph block_512["Block 512"]
	direction TB
end
branch_509 --> block_512
subgraph block_508["Block 508"]
	direction TB
	b508_4["memindex__416 0u"]
end
branch_505 --> block_508
subgraph block_503["Block 503"]
	direction TB
	b503_15["offset imm_readULEB32"]
	b503_24["eff__402 push_u64"]
	b503_16["index pop_u32"]
	b503_24 --> b503_15
	b503_16 --> b503_24
end
branch_500 --> block_503

</pre>`;
window.traces["I64_LOAD32_S"]["unLEM"] = ''
window.traces["I64_LOAD32_S"]["unLEM"] += `<pre class='graph'>---
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
window.traces["I64_LOAD32_S"]["unlem_schedule"] = ''
window.traces["I64_LOAD32_S"]["unlem_schedule"] += `<pre class=''>def flags = imm_readU8();
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
window.traces["I64_LOAD32_S"]["unlem_scheduler"] = ''
window.traces["I64_LOAD32_S"]["unlem_scheduler"] += `<pre class='graph'>graph TD
subgraph block_514["Block 514"]
	direction TB
	b514_1[\\"Finish"/]
	b514_25["offset imm_readULEB64"]
	b514_15["offset imm_readULEB32"]
	b514_34["eff__396 push_u64"]
	b514_24["eff__402 push_u64"]
	b514_32["extend U64_extend32_s"]
	b514_26["index pop_u64"]
	b514_22["extend U64_extend32_s"]
	b514_16["index pop_u32"]
	b514_10["memindex__410 imm_readULEB32"]
	b514_4["memindex__416 0u"]
	b514_3["flags imm_readU8"]
	b514_30["val mach_readMemory64_u32_64"]
	b514_20["val mach_readMemory32_u32_64"]
	b514_25 --> b514_1
	b514_15 --> b514_25
	b514_34 --> b514_15
	b514_24 --> b514_34
	b514_32 --> b514_24
	b514_26 --> b514_32
	b514_22 --> b514_26
	b514_16 --> b514_22
	b514_10 --> b514_16
	b514_4 --> b514_10
	b514_3 --> b514_4
	b514_30 --> b514_3
	b514_20 --> b514_30
end
phi_516 --> block_514
subgraph phi_516["Phi 516"]
	p516_36{{"Sϕ Stack "}}
	p516_35{{"Sϕ Codeptr "}}
end
block_517 --> phi_516
block_518 --> phi_516
subgraph block_517["Block 517"]
	direction TB
	b517_25["offset imm_readULEB64"]
	b517_34["eff__396 push_u64"]
	b517_28["index pop_u64"]
	b517_34 --> b517_25
	b517_28 --> b517_34
end
phi_521 --> block_517
subgraph phi_521["Phi 521"]
	p521_11{"memindex ϕ"}
	p521_11{"memindex ϕ"}
	p521_11{"memindex ϕ"}
	p521_11{"memindex ϕ"}
end
block_522 --> phi_521
block_523 --> phi_521
subgraph block_522["Block 522"]
	direction TB
	b522_10["memindex__410 imm_readULEB32"]
	b522_3["flags imm_readU8"]
	b522_3 --> b522_10
end
branch_520 --> block_522
subgraph branch_520["Branch 520"]
	br520_9["cond__409 u8.!="]

end
branch_515 --> branch_520
subgraph branch_515["Branch 515"]
	br515_14["cond__395 m_isMemory64"]

end
block_519 --> branch_515
subgraph block_519["Block 519"]
	direction TB
	b519_14["cond__395 m_isMemory64"]
end
phi_525 --> block_519
subgraph phi_525["Phi 525"]
	p525_12{{"Sϕ Codeptr "}}
	p525_12{{"Sϕ Codeptr "}}
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
block_528 --> branch_524
subgraph block_528["Block 528"]
	direction TB
	b528_9["cond__409 u8.!="]
	b528_8["arg__411 u8.&"]
	b528_5["arg__412 0"]
	b528_6["arg__414 0x40u8"]
	b528_0[/"Start"\\]
	b528_8 --> b528_9
	b528_5 --> b528_8
	b528_6 --> b528_5
	b528_0 --> b528_6
end
subgraph block_527["Block 527"]
	direction TB
end
branch_524 --> block_527
subgraph block_523["Block 523"]
	direction TB
	b523_4["memindex__416 0u"]
end
branch_520 --> block_523
subgraph block_518["Block 518"]
	direction TB
	b518_15["offset imm_readULEB32"]
	b518_24["eff__402 push_u64"]
	b518_18["index pop_u32"]
	b518_24 --> b518_15
	b518_18 --> b518_24
end
branch_515 --> block_518

</pre>`;
window.traces["I64_LOAD32_S"]["unlem_pretty"] = ''
window.traces["I64_LOAD32_S"]["unlem_pretty"] += `<pre class=''>def flags = imm_readU8();
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
window.traces["I64_LOAD32_S"]["constUnLEM"] = ''
window.traces["I64_LOAD32_S"]["constUnLEM"] += `<pre class='graph'>---
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
window.traces["I64_LOAD32_S"]["chooseMerge"] = ''
window.traces["I64_LOAD32_S"]["chooseMerge"] += `<pre class='graph'>---
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
window.traces["I64_LOAD32_S"]["scheduled"] = ''
window.traces["I64_LOAD32_S"]["scheduled"] += `<pre class=''>def flags = imm_readU8();
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
window.traces["I64_LOAD32_S"]["pretty"] = ''
window.traces["I64_LOAD32_S"]["pretty"] += `<pre class=''>def flags = imm_readU8();
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
window.traces["I64_LOAD32_U"]["parsed"] = ''
window.traces["I64_LOAD32_U"]["parsed"] += `<pre class=''>def flags = imm_readU8();
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
window.traces["I64_LOAD32_U"]["raw"] = ''
window.traces["I64_LOAD32_U"]["raw"] += `<pre class='graph'>---
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
window.traces["I64_LOAD32_U"]["overloadOps"] = ''
window.traces["I64_LOAD32_U"]["overloadOps"] += `<pre class='graph'>---
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
window.traces["I64_LOAD32_U"]["addAbstractions"] = ''
window.traces["I64_LOAD32_U"]["addAbstractions"] += `<pre class='graph'>---
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
window.traces["I64_LOAD32_U"]["schedulerMermaid"] = ''
window.traces["I64_LOAD32_U"]["schedulerMermaid"] += `<pre class='graph'>graph TD
subgraph block_529["Block 529"]
	direction TB
	b529_1[\\"Finish"/]
	b529_23["offset imm_readULEB64"]
	b529_15["offset imm_readULEB32"]
	b529_30["eff__418 push_u64"]
	b529_22["eff__423 push_u64"]
	b529_28["val mach_readMemory64_u32_64"]
	b529_24["index pop_u64"]
	b529_20["val mach_readMemory32_u32_64"]
	b529_16["index pop_u32"]
	b529_10["memindex__430 imm_readULEB32"]
	b529_4["memindex__436 0u"]
	b529_3["flags imm_readU8"]
	b529_23 --> b529_1
	b529_15 --> b529_23
	b529_30 --> b529_15
	b529_22 --> b529_30
	b529_28 --> b529_22
	b529_24 --> b529_28
	b529_20 --> b529_24
	b529_16 --> b529_20
	b529_10 --> b529_16
	b529_4 --> b529_10
	b529_3 --> b529_4
end
phi_531 --> block_529
subgraph phi_531["Phi 531"]
	p531_32{{"Sϕ Stack "}}
	p531_31{{"Sϕ Codeptr "}}
end
block_532 --> phi_531
block_533 --> phi_531
subgraph block_532["Block 532"]
	direction TB
	b532_23["offset imm_readULEB64"]
end
phi_536 --> block_532
subgraph phi_536["Phi 536"]
	p536_11{"memindex ϕ"}
	p536_11{"memindex ϕ"}
	p536_11{"memindex ϕ"}
	p536_11{"memindex ϕ"}
end
block_537 --> phi_536
block_538 --> phi_536
subgraph block_537["Block 537"]
	direction TB
	b537_10["memindex__430 imm_readULEB32"]
	b537_3["flags imm_readU8"]
	b537_3 --> b537_10
end
branch_535 --> block_537
subgraph branch_535["Branch 535"]
	br535_9["cond__429 u8.!="]

end
branch_530 --> branch_535
subgraph branch_530["Branch 530"]
	br530_14["cond__417 m_isMemory64"]

end
block_534 --> branch_530
subgraph block_534["Block 534"]
	direction TB
	b534_14["cond__417 m_isMemory64"]
end
phi_540 --> block_534
subgraph phi_540["Phi 540"]
	p540_12{{"Sϕ Codeptr "}}
	p540_12{{"Sϕ Codeptr "}}
	p540_12{{"Sϕ Codeptr "}}
	p540_12{{"Sϕ Codeptr "}}
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
block_543 --> branch_539
subgraph block_543["Block 543"]
	direction TB
	b543_9["cond__429 u8.!="]
	b543_8["arg__431 u8.&"]
	b543_5["arg__432 0"]
	b543_6["arg__434 0x40u8"]
	b543_0[/"Start"\\]
	b543_8 --> b543_9
	b543_5 --> b543_8
	b543_6 --> b543_5
	b543_0 --> b543_6
end
subgraph block_542["Block 542"]
	direction TB
end
branch_539 --> block_542
subgraph block_538["Block 538"]
	direction TB
	b538_4["memindex__436 0u"]
end
branch_535 --> block_538
subgraph block_533["Block 533"]
	direction TB
	b533_15["offset imm_readULEB32"]
end
branch_530 --> block_533

</pre>`;
window.traces["I64_LOAD32_U"]["unLEM"] = ''
window.traces["I64_LOAD32_U"]["unLEM"] += `<pre class='graph'>---
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
window.traces["I64_LOAD32_U"]["unlem_schedule"] = ''
window.traces["I64_LOAD32_U"]["unlem_schedule"] += `<pre class=''>def flags = imm_readU8();
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
window.traces["I64_LOAD32_U"]["unlem_scheduler"] = ''
window.traces["I64_LOAD32_U"]["unlem_scheduler"] += `<pre class='graph'>graph TD
subgraph block_544["Block 544"]
	direction TB
	b544_1[\\"Finish"/]
	b544_23["offset imm_readULEB64"]
	b544_15["offset imm_readULEB32"]
	b544_30["eff__418 push_u64"]
	b544_22["eff__423 push_u64"]
	b544_28["val mach_readMemory64_u32_64"]
	b544_24["index pop_u64"]
	b544_20["val mach_readMemory32_u32_64"]
	b544_16["index pop_u32"]
	b544_10["memindex__430 imm_readULEB32"]
	b544_4["memindex__436 0u"]
	b544_3["flags imm_readU8"]
	b544_23 --> b544_1
	b544_15 --> b544_23
	b544_30 --> b544_15
	b544_22 --> b544_30
	b544_28 --> b544_22
	b544_24 --> b544_28
	b544_20 --> b544_24
	b544_16 --> b544_20
	b544_10 --> b544_16
	b544_4 --> b544_10
	b544_3 --> b544_4
end
phi_546 --> block_544
subgraph phi_546["Phi 546"]
	p546_32{{"Sϕ Stack "}}
	p546_31{{"Sϕ Codeptr "}}
end
block_547 --> phi_546
block_548 --> phi_546
subgraph block_547["Block 547"]
	direction TB
	b547_23["offset imm_readULEB64"]
end
phi_551 --> block_547
subgraph phi_551["Phi 551"]
	p551_11{"memindex ϕ"}
	p551_11{"memindex ϕ"}
	p551_11{"memindex ϕ"}
	p551_11{"memindex ϕ"}
end
block_552 --> phi_551
block_553 --> phi_551
subgraph block_552["Block 552"]
	direction TB
	b552_10["memindex__430 imm_readULEB32"]
	b552_3["flags imm_readU8"]
	b552_3 --> b552_10
end
branch_550 --> block_552
subgraph branch_550["Branch 550"]
	br550_9["cond__429 u8.!="]

end
branch_545 --> branch_550
subgraph branch_545["Branch 545"]
	br545_14["cond__417 m_isMemory64"]

end
block_549 --> branch_545
subgraph block_549["Block 549"]
	direction TB
	b549_14["cond__417 m_isMemory64"]
end
phi_555 --> block_549
subgraph phi_555["Phi 555"]
	p555_12{{"Sϕ Codeptr "}}
	p555_12{{"Sϕ Codeptr "}}
	p555_12{{"Sϕ Codeptr "}}
	p555_12{{"Sϕ Codeptr "}}
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
block_558 --> branch_554
subgraph block_558["Block 558"]
	direction TB
	b558_9["cond__429 u8.!="]
	b558_8["arg__431 u8.&"]
	b558_5["arg__432 0"]
	b558_6["arg__434 0x40u8"]
	b558_0[/"Start"\\]
	b558_8 --> b558_9
	b558_5 --> b558_8
	b558_6 --> b558_5
	b558_0 --> b558_6
end
subgraph block_557["Block 557"]
	direction TB
end
branch_554 --> block_557
subgraph block_553["Block 553"]
	direction TB
	b553_4["memindex__436 0u"]
end
branch_550 --> block_553
subgraph block_548["Block 548"]
	direction TB
	b548_15["offset imm_readULEB32"]
end
branch_545 --> block_548

</pre>`;
window.traces["I64_LOAD32_U"]["unlem_pretty"] = ''
window.traces["I64_LOAD32_U"]["unlem_pretty"] += `<pre class=''>def flags = imm_readU8();
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
window.traces["I64_LOAD32_U"]["constUnLEM"] = ''
window.traces["I64_LOAD32_U"]["constUnLEM"] += `<pre class='graph'>---
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
window.traces["I64_LOAD32_U"]["chooseMerge"] = ''
window.traces["I64_LOAD32_U"]["chooseMerge"] += `<pre class='graph'>---
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
window.traces["I64_LOAD32_U"]["scheduled"] = ''
window.traces["I64_LOAD32_U"]["scheduled"] += `<pre class=''>def flags = imm_readU8();
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
window.traces["I64_LOAD32_U"]["pretty"] = ''
window.traces["I64_LOAD32_U"]["pretty"] += `<pre class=''>def flags = imm_readU8();
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
window.traces["I32_STORE"]["parsed"] = ''
window.traces["I32_STORE"]["parsed"] += `<pre class=''>def flags = imm_readU8();
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
window.traces["I32_STORE"]["raw"] = ''
window.traces["I32_STORE"]["raw"] += `<pre class='graph'>---
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
window.traces["I32_STORE"]["overloadOps"] = ''
window.traces["I32_STORE"]["overloadOps"] += `<pre class='graph'>---
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
window.traces["I32_STORE"]["addAbstractions"] = ''
window.traces["I32_STORE"]["addAbstractions"] += `<pre class='graph'>---
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
window.traces["I32_STORE"]["schedulerMermaid"] = ''
window.traces["I32_STORE"]["schedulerMermaid"] += `<pre class='graph'>graph TD
subgraph block_559["Block 559"]
	direction TB
	b559_1[\\"Finish"/]
	b559_23["offset imm_readULEB64"]
	b559_16["offset imm_readULEB32"]
	b559_24["index pop_u64"]
	b559_17["index pop_u32"]
	b559_29["eff__438 mach_writeMemory64_u32"]
	b559_22["eff__443 mach_writeMemory32_u32"]
	b559_13["val pop_u32"]
	b559_10["memindex__450 imm_readULEB32"]
	b559_4["memindex__456 0u"]
	b559_3["flags imm_readU8"]
	b559_23 --> b559_1
	b559_16 --> b559_23
	b559_24 --> b559_16
	b559_17 --> b559_24
	b559_29 --> b559_17
	b559_22 --> b559_29
	b559_13 --> b559_22
	b559_10 --> b559_13
	b559_4 --> b559_10
	b559_3 --> b559_4
end
phi_561 --> block_559
subgraph phi_561["Phi 561"]
	p561_32{{"Sϕ Memory "}}
	p561_31{{"Sϕ Stack "}}
	p561_30{{"Sϕ Codeptr "}}
end
block_562 --> phi_561
block_563 --> phi_561
subgraph block_562["Block 562"]
	direction TB
	b562_23["offset imm_readULEB64"]
	b562_24["index pop_u64"]
	b562_24 --> b562_23
end
phi_566 --> block_562
subgraph phi_566["Phi 566"]
	p566_11{"memindex ϕ"}
	p566_11{"memindex ϕ"}
	p566_11{"memindex ϕ"}
	p566_11{"memindex ϕ"}
	p566_11{"memindex ϕ"}
end
block_567 --> phi_566
block_568 --> phi_566
subgraph block_567["Block 567"]
	direction TB
	b567_10["memindex__450 imm_readULEB32"]
	b567_3["flags imm_readU8"]
	b567_3 --> b567_10
end
branch_565 --> block_567
subgraph branch_565["Branch 565"]
	br565_9["cond__449 u8.!="]

end
branch_560 --> branch_565
subgraph branch_560["Branch 560"]
	br560_15["cond__437 m_isMemory64"]

end
block_564 --> branch_560
subgraph block_564["Block 564"]
	direction TB
	b564_15["cond__437 m_isMemory64"]
end
phi_570 --> block_564
subgraph phi_570["Phi 570"]
	p570_12{{"Sϕ Codeptr "}}
	p570_12{{"Sϕ Codeptr "}}
	p570_12{{"Sϕ Codeptr "}}
	p570_12{{"Sϕ Codeptr "}}
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
block_573 --> branch_569
subgraph block_573["Block 573"]
	direction TB
	b573_9["cond__449 u8.!="]
	b573_8["arg__451 u8.&"]
	b573_5["arg__452 0"]
	b573_6["arg__454 0x40u8"]
	b573_0[/"Start"\\]
	b573_8 --> b573_9
	b573_5 --> b573_8
	b573_6 --> b573_5
	b573_0 --> b573_6
end
subgraph block_572["Block 572"]
	direction TB
end
branch_569 --> block_572
subgraph block_568["Block 568"]
	direction TB
	b568_4["memindex__456 0u"]
end
branch_565 --> block_568
subgraph block_563["Block 563"]
	direction TB
	b563_16["offset imm_readULEB32"]
	b563_17["index pop_u32"]
	b563_17 --> b563_16
end
branch_560 --> block_563

</pre>`;
window.traces["I32_STORE"]["unLEM"] = ''
window.traces["I32_STORE"]["unLEM"] += `<pre class='graph'>---
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
window.traces["I32_STORE"]["unlem_schedule"] = ''
window.traces["I32_STORE"]["unlem_schedule"] += `<pre class=''>def val = pop_u32();
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
window.traces["I32_STORE"]["unlem_scheduler"] = ''
window.traces["I32_STORE"]["unlem_scheduler"] += `<pre class='graph'>graph TD
subgraph block_574["Block 574"]
	direction TB
	b574_1[\\"Finish"/]
	b574_23["offset imm_readULEB64"]
	b574_16["offset imm_readULEB32"]
	b574_24["index pop_u64"]
	b574_17["index pop_u32"]
	b574_29["eff__438 mach_writeMemory64_u32"]
	b574_22["eff__443 mach_writeMemory32_u32"]
	b574_13["val pop_u32"]
	b574_10["memindex__450 imm_readULEB32"]
	b574_4["memindex__456 0u"]
	b574_3["flags imm_readU8"]
	b574_23 --> b574_1
	b574_16 --> b574_23
	b574_24 --> b574_16
	b574_17 --> b574_24
	b574_29 --> b574_17
	b574_22 --> b574_29
	b574_13 --> b574_22
	b574_10 --> b574_13
	b574_4 --> b574_10
	b574_3 --> b574_4
end
phi_576 --> block_574
subgraph phi_576["Phi 576"]
	p576_32{{"Sϕ Memory "}}
	p576_31{{"Sϕ Stack "}}
	p576_30{{"Sϕ Codeptr "}}
end
block_577 --> phi_576
block_578 --> phi_576
subgraph block_577["Block 577"]
	direction TB
	b577_23["offset imm_readULEB64"]
	b577_24["index pop_u64"]
	b577_24 --> b577_23
end
phi_581 --> block_577
subgraph phi_581["Phi 581"]
	p581_11{"memindex ϕ"}
	p581_11{"memindex ϕ"}
	p581_11{"memindex ϕ"}
	p581_11{"memindex ϕ"}
	p581_11{"memindex ϕ"}
end
block_582 --> phi_581
block_583 --> phi_581
subgraph block_582["Block 582"]
	direction TB
	b582_10["memindex__450 imm_readULEB32"]
	b582_3["flags imm_readU8"]
	b582_3 --> b582_10
end
branch_580 --> block_582
subgraph branch_580["Branch 580"]
	br580_9["cond__449 u8.!="]

end
branch_575 --> branch_580
subgraph branch_575["Branch 575"]
	br575_15["cond__437 m_isMemory64"]

end
block_579 --> branch_575
subgraph block_579["Block 579"]
	direction TB
	b579_15["cond__437 m_isMemory64"]
end
phi_585 --> block_579
subgraph phi_585["Phi 585"]
	p585_12{{"Sϕ Codeptr "}}
	p585_12{{"Sϕ Codeptr "}}
	p585_12{{"Sϕ Codeptr "}}
	p585_12{{"Sϕ Codeptr "}}
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
block_588 --> branch_584
subgraph block_588["Block 588"]
	direction TB
	b588_9["cond__449 u8.!="]
	b588_8["arg__451 u8.&"]
	b588_5["arg__452 0"]
	b588_6["arg__454 0x40u8"]
	b588_0[/"Start"\\]
	b588_8 --> b588_9
	b588_5 --> b588_8
	b588_6 --> b588_5
	b588_0 --> b588_6
end
subgraph block_587["Block 587"]
	direction TB
end
branch_584 --> block_587
subgraph block_583["Block 583"]
	direction TB
	b583_4["memindex__456 0u"]
end
branch_580 --> block_583
subgraph block_578["Block 578"]
	direction TB
	b578_16["offset imm_readULEB32"]
	b578_17["index pop_u32"]
	b578_17 --> b578_16
end
branch_575 --> block_578

</pre>`;
window.traces["I32_STORE"]["unlem_pretty"] = ''
window.traces["I32_STORE"]["unlem_pretty"] += `<pre class=''>def val = pop_u32();
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
window.traces["I32_STORE"]["constUnLEM"] = ''
window.traces["I32_STORE"]["constUnLEM"] += `<pre class='graph'>---
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
window.traces["I32_STORE"]["chooseMerge"] = ''
window.traces["I32_STORE"]["chooseMerge"] += `<pre class='graph'>---
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
window.traces["I32_STORE"]["scheduled"] = ''
window.traces["I32_STORE"]["scheduled"] += `<pre class=''>def val = pop_u32();
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
window.traces["I32_STORE"]["pretty"] = ''
window.traces["I32_STORE"]["pretty"] += `<pre class=''>def val = pop_u32();
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
window.traces["I64_STORE"]["parsed"] = ''
window.traces["I64_STORE"]["parsed"] += `<pre class=''>def flags = imm_readU8();
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
window.traces["I64_STORE"]["raw"] = ''
window.traces["I64_STORE"]["raw"] += `<pre class='graph'>---
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
window.traces["I64_STORE"]["overloadOps"] = ''
window.traces["I64_STORE"]["overloadOps"] += `<pre class='graph'>---
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
window.traces["I64_STORE"]["addAbstractions"] = ''
window.traces["I64_STORE"]["addAbstractions"] += `<pre class='graph'>---
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
window.traces["I64_STORE"]["schedulerMermaid"] = ''
window.traces["I64_STORE"]["schedulerMermaid"] += `<pre class='graph'>graph TD
subgraph block_589["Block 589"]
	direction TB
	b589_1[\\"Finish"/]
	b589_23["offset imm_readULEB64"]
	b589_16["offset imm_readULEB32"]
	b589_24["index pop_u64"]
	b589_17["index pop_u32"]
	b589_29["eff__458 mach_writeMemory64_u64"]
	b589_22["eff__463 mach_writeMemory32_u64"]
	b589_13["val pop_u64"]
	b589_10["memindex__470 imm_readULEB32"]
	b589_4["memindex__476 0u"]
	b589_3["flags imm_readU8"]
	b589_23 --> b589_1
	b589_16 --> b589_23
	b589_24 --> b589_16
	b589_17 --> b589_24
	b589_29 --> b589_17
	b589_22 --> b589_29
	b589_13 --> b589_22
	b589_10 --> b589_13
	b589_4 --> b589_10
	b589_3 --> b589_4
end
phi_591 --> block_589
subgraph phi_591["Phi 591"]
	p591_32{{"Sϕ Memory "}}
	p591_31{{"Sϕ Stack "}}
	p591_30{{"Sϕ Codeptr "}}
end
block_592 --> phi_591
block_593 --> phi_591
subgraph block_592["Block 592"]
	direction TB
	b592_23["offset imm_readULEB64"]
	b592_24["index pop_u64"]
	b592_24 --> b592_23
end
phi_596 --> block_592
subgraph phi_596["Phi 596"]
	p596_11{"memindex ϕ"}
	p596_11{"memindex ϕ"}
	p596_11{"memindex ϕ"}
	p596_11{"memindex ϕ"}
	p596_11{"memindex ϕ"}
end
block_597 --> phi_596
block_598 --> phi_596
subgraph block_597["Block 597"]
	direction TB
	b597_10["memindex__470 imm_readULEB32"]
	b597_3["flags imm_readU8"]
	b597_3 --> b597_10
end
branch_595 --> block_597
subgraph branch_595["Branch 595"]
	br595_9["cond__469 u8.!="]

end
branch_590 --> branch_595
subgraph branch_590["Branch 590"]
	br590_15["cond__457 m_isMemory64"]

end
block_594 --> branch_590
subgraph block_594["Block 594"]
	direction TB
	b594_15["cond__457 m_isMemory64"]
end
phi_600 --> block_594
subgraph phi_600["Phi 600"]
	p600_12{{"Sϕ Codeptr "}}
	p600_12{{"Sϕ Codeptr "}}
	p600_12{{"Sϕ Codeptr "}}
	p600_12{{"Sϕ Codeptr "}}
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
block_603 --> branch_599
subgraph block_603["Block 603"]
	direction TB
	b603_9["cond__469 u8.!="]
	b603_8["arg__471 u8.&"]
	b603_5["arg__472 0"]
	b603_6["arg__474 0x40u8"]
	b603_0[/"Start"\\]
	b603_8 --> b603_9
	b603_5 --> b603_8
	b603_6 --> b603_5
	b603_0 --> b603_6
end
subgraph block_602["Block 602"]
	direction TB
end
branch_599 --> block_602
subgraph block_598["Block 598"]
	direction TB
	b598_4["memindex__476 0u"]
end
branch_595 --> block_598
subgraph block_593["Block 593"]
	direction TB
	b593_16["offset imm_readULEB32"]
	b593_17["index pop_u32"]
	b593_17 --> b593_16
end
branch_590 --> block_593

</pre>`;
window.traces["I64_STORE"]["unLEM"] = ''
window.traces["I64_STORE"]["unLEM"] += `<pre class='graph'>---
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
window.traces["I64_STORE"]["unlem_schedule"] = ''
window.traces["I64_STORE"]["unlem_schedule"] += `<pre class=''>def val = pop_u64();
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
window.traces["I64_STORE"]["unlem_scheduler"] = ''
window.traces["I64_STORE"]["unlem_scheduler"] += `<pre class='graph'>graph TD
subgraph block_604["Block 604"]
	direction TB
	b604_1[\\"Finish"/]
	b604_23["offset imm_readULEB64"]
	b604_16["offset imm_readULEB32"]
	b604_24["index pop_u64"]
	b604_17["index pop_u32"]
	b604_29["eff__458 mach_writeMemory64_u64"]
	b604_22["eff__463 mach_writeMemory32_u64"]
	b604_13["val pop_u64"]
	b604_10["memindex__470 imm_readULEB32"]
	b604_4["memindex__476 0u"]
	b604_3["flags imm_readU8"]
	b604_23 --> b604_1
	b604_16 --> b604_23
	b604_24 --> b604_16
	b604_17 --> b604_24
	b604_29 --> b604_17
	b604_22 --> b604_29
	b604_13 --> b604_22
	b604_10 --> b604_13
	b604_4 --> b604_10
	b604_3 --> b604_4
end
phi_606 --> block_604
subgraph phi_606["Phi 606"]
	p606_32{{"Sϕ Memory "}}
	p606_31{{"Sϕ Stack "}}
	p606_30{{"Sϕ Codeptr "}}
end
block_607 --> phi_606
block_608 --> phi_606
subgraph block_607["Block 607"]
	direction TB
	b607_23["offset imm_readULEB64"]
	b607_24["index pop_u64"]
	b607_24 --> b607_23
end
phi_611 --> block_607
subgraph phi_611["Phi 611"]
	p611_11{"memindex ϕ"}
	p611_11{"memindex ϕ"}
	p611_11{"memindex ϕ"}
	p611_11{"memindex ϕ"}
	p611_11{"memindex ϕ"}
end
block_612 --> phi_611
block_613 --> phi_611
subgraph block_612["Block 612"]
	direction TB
	b612_10["memindex__470 imm_readULEB32"]
	b612_3["flags imm_readU8"]
	b612_3 --> b612_10
end
branch_610 --> block_612
subgraph branch_610["Branch 610"]
	br610_9["cond__469 u8.!="]

end
branch_605 --> branch_610
subgraph branch_605["Branch 605"]
	br605_15["cond__457 m_isMemory64"]

end
block_609 --> branch_605
subgraph block_609["Block 609"]
	direction TB
	b609_15["cond__457 m_isMemory64"]
end
phi_615 --> block_609
subgraph phi_615["Phi 615"]
	p615_12{{"Sϕ Codeptr "}}
	p615_12{{"Sϕ Codeptr "}}
	p615_12{{"Sϕ Codeptr "}}
	p615_12{{"Sϕ Codeptr "}}
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
block_618 --> branch_614
subgraph block_618["Block 618"]
	direction TB
	b618_9["cond__469 u8.!="]
	b618_8["arg__471 u8.&"]
	b618_5["arg__472 0"]
	b618_6["arg__474 0x40u8"]
	b618_0[/"Start"\\]
	b618_8 --> b618_9
	b618_5 --> b618_8
	b618_6 --> b618_5
	b618_0 --> b618_6
end
subgraph block_617["Block 617"]
	direction TB
end
branch_614 --> block_617
subgraph block_613["Block 613"]
	direction TB
	b613_4["memindex__476 0u"]
end
branch_610 --> block_613
subgraph block_608["Block 608"]
	direction TB
	b608_16["offset imm_readULEB32"]
	b608_17["index pop_u32"]
	b608_17 --> b608_16
end
branch_605 --> block_608

</pre>`;
window.traces["I64_STORE"]["unlem_pretty"] = ''
window.traces["I64_STORE"]["unlem_pretty"] += `<pre class=''>def val = pop_u64();
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
window.traces["I64_STORE"]["constUnLEM"] = ''
window.traces["I64_STORE"]["constUnLEM"] += `<pre class='graph'>---
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
window.traces["I64_STORE"]["chooseMerge"] = ''
window.traces["I64_STORE"]["chooseMerge"] += `<pre class='graph'>---
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
window.traces["I64_STORE"]["scheduled"] = ''
window.traces["I64_STORE"]["scheduled"] += `<pre class=''>def val = pop_u64();
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
window.traces["I64_STORE"]["pretty"] = ''
window.traces["I64_STORE"]["pretty"] += `<pre class=''>def val = pop_u64();
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
window.traces["F32_STORE"]["parsed"] = ''
window.traces["F32_STORE"]["parsed"] += `<pre class=''>def flags = imm_readU8();
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
window.traces["F32_STORE"]["raw"] = ''
window.traces["F32_STORE"]["raw"] += `<pre class='graph'>---
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
window.traces["F32_STORE"]["overloadOps"] = ''
window.traces["F32_STORE"]["overloadOps"] += `<pre class='graph'>---
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
window.traces["F32_STORE"]["addAbstractions"] = ''
window.traces["F32_STORE"]["addAbstractions"] += `<pre class='graph'>---
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
window.traces["F32_STORE"]["schedulerMermaid"] = ''
window.traces["F32_STORE"]["schedulerMermaid"] += `<pre class='graph'>graph TD
subgraph block_619["Block 619"]
	direction TB
	b619_1[\\"Finish"/]
	b619_23["offset imm_readULEB64"]
	b619_16["offset imm_readULEB32"]
	b619_24["index pop_u64"]
	b619_17["index pop_u32"]
	b619_13["val pop_f32"]
	b619_10["memindex__490 imm_readULEB32"]
	b619_4["memindex__496 0u"]
	b619_3["flags imm_readU8"]
	b619_23 --> b619_1
	b619_16 --> b619_23
	b619_24 --> b619_16
	b619_17 --> b619_24
	b619_13 --> b619_17
	b619_10 --> b619_13
	b619_4 --> b619_10
	b619_3 --> b619_4
end
phi_621 --> block_619
subgraph phi_621["Phi 621"]
	p621_31{{"Sϕ Stack "}}
	p621_30{{"Sϕ Codeptr "}}
end
block_622 --> phi_621
block_623 --> phi_621
subgraph block_622["Block 622"]
	direction TB
	b622_23["offset imm_readULEB64"]
	b622_24["index pop_u64"]
	b622_24 --> b622_23
end
phi_626 --> block_622
subgraph phi_626["Phi 626"]
	p626_11{"memindex ϕ"}
	p626_11{"memindex ϕ"}
end
block_627 --> phi_626
block_628 --> phi_626
subgraph block_627["Block 627"]
	direction TB
	b627_10["memindex__490 imm_readULEB32"]
	b627_3["flags imm_readU8"]
	b627_3 --> b627_10
end
branch_625 --> block_627
subgraph branch_625["Branch 625"]
	br625_9["cond__489 u8.!="]

end
branch_620 --> branch_625
subgraph branch_620["Branch 620"]
	br620_15["cond__477 m_isMemory64"]

end
block_624 --> branch_620
subgraph block_624["Block 624"]
	direction TB
	b624_15["cond__477 m_isMemory64"]
end
phi_630 --> block_624
subgraph phi_630["Phi 630"]
	p630_12{{"Sϕ Codeptr "}}
	p630_12{{"Sϕ Codeptr "}}
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
block_633 --> branch_629
subgraph block_633["Block 633"]
	direction TB
	b633_9["cond__489 u8.!="]
	b633_8["arg__491 u8.&"]
	b633_5["arg__492 0"]
	b633_6["arg__494 0x40u8"]
	b633_0[/"Start"\\]
	b633_8 --> b633_9
	b633_5 --> b633_8
	b633_6 --> b633_5
	b633_0 --> b633_6
end
subgraph block_632["Block 632"]
	direction TB
end
branch_629 --> block_632
subgraph block_628["Block 628"]
	direction TB
	b628_4["memindex__496 0u"]
end
branch_625 --> block_628
subgraph block_623["Block 623"]
	direction TB
	b623_16["offset imm_readULEB32"]
	b623_17["index pop_u32"]
	b623_17 --> b623_16
end
branch_620 --> block_623

</pre>`;
window.traces["F32_STORE"]["unLEM"] = ''
window.traces["F32_STORE"]["unLEM"] += `<pre class='graph'>---
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
window.traces["F32_STORE"]["unlem_schedule"] = ''
window.traces["F32_STORE"]["unlem_schedule"] += `<pre class=''>def val = pop_f32();
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
window.traces["F32_STORE"]["unlem_scheduler"] = ''
window.traces["F32_STORE"]["unlem_scheduler"] += `<pre class='graph'>graph TD
subgraph block_634["Block 634"]
	direction TB
	b634_1[\\"Finish"/]
	b634_23["offset imm_readULEB64"]
	b634_16["offset imm_readULEB32"]
	b634_24["index pop_u64"]
	b634_17["index pop_u32"]
	b634_13["val pop_f32"]
	b634_10["memindex__490 imm_readULEB32"]
	b634_4["memindex__496 0u"]
	b634_3["flags imm_readU8"]
	b634_23 --> b634_1
	b634_16 --> b634_23
	b634_24 --> b634_16
	b634_17 --> b634_24
	b634_13 --> b634_17
	b634_10 --> b634_13
	b634_4 --> b634_10
	b634_3 --> b634_4
end
phi_636 --> block_634
subgraph phi_636["Phi 636"]
	p636_31{{"Sϕ Stack "}}
	p636_30{{"Sϕ Codeptr "}}
end
block_637 --> phi_636
block_638 --> phi_636
subgraph block_637["Block 637"]
	direction TB
	b637_23["offset imm_readULEB64"]
	b637_24["index pop_u64"]
	b637_24 --> b637_23
end
phi_641 --> block_637
subgraph phi_641["Phi 641"]
	p641_11{"memindex ϕ"}
	p641_11{"memindex ϕ"}
end
block_642 --> phi_641
block_643 --> phi_641
subgraph block_642["Block 642"]
	direction TB
	b642_10["memindex__490 imm_readULEB32"]
	b642_3["flags imm_readU8"]
	b642_3 --> b642_10
end
branch_640 --> block_642
subgraph branch_640["Branch 640"]
	br640_9["cond__489 u8.!="]

end
branch_635 --> branch_640
subgraph branch_635["Branch 635"]
	br635_15["cond__477 m_isMemory64"]

end
block_639 --> branch_635
subgraph block_639["Block 639"]
	direction TB
	b639_15["cond__477 m_isMemory64"]
end
phi_645 --> block_639
subgraph phi_645["Phi 645"]
	p645_12{{"Sϕ Codeptr "}}
	p645_12{{"Sϕ Codeptr "}}
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
block_648 --> branch_644
subgraph block_648["Block 648"]
	direction TB
	b648_9["cond__489 u8.!="]
	b648_8["arg__491 u8.&"]
	b648_5["arg__492 0"]
	b648_6["arg__494 0x40u8"]
	b648_0[/"Start"\\]
	b648_8 --> b648_9
	b648_5 --> b648_8
	b648_6 --> b648_5
	b648_0 --> b648_6
end
subgraph block_647["Block 647"]
	direction TB
end
branch_644 --> block_647
subgraph block_643["Block 643"]
	direction TB
	b643_4["memindex__496 0u"]
end
branch_640 --> block_643
subgraph block_638["Block 638"]
	direction TB
	b638_16["offset imm_readULEB32"]
	b638_17["index pop_u32"]
	b638_17 --> b638_16
end
branch_635 --> block_638

</pre>`;
window.traces["F32_STORE"]["unlem_pretty"] = ''
window.traces["F32_STORE"]["unlem_pretty"] += `<pre class=''>def val = pop_f32();
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
window.traces["F32_STORE"]["constUnLEM"] = ''
window.traces["F32_STORE"]["constUnLEM"] += `<pre class='graph'>---
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
window.traces["F32_STORE"]["chooseMerge"] = ''
window.traces["F32_STORE"]["chooseMerge"] += `<pre class='graph'>---
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
window.traces["F32_STORE"]["scheduled"] = ''
window.traces["F32_STORE"]["scheduled"] += `<pre class=''>def val = pop_f32();
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
window.traces["F32_STORE"]["pretty"] = ''
window.traces["F32_STORE"]["pretty"] += `<pre class=''>def val = pop_f32();
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
window.traces["F64_STORE"]["parsed"] = ''
window.traces["F64_STORE"]["parsed"] += `<pre class=''>def flags = imm_readU8();
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
window.traces["F64_STORE"]["raw"] = ''
window.traces["F64_STORE"]["raw"] += `<pre class='graph'>---
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
window.traces["F64_STORE"]["overloadOps"] = ''
window.traces["F64_STORE"]["overloadOps"] += `<pre class='graph'>---
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
window.traces["F64_STORE"]["addAbstractions"] = ''
window.traces["F64_STORE"]["addAbstractions"] += `<pre class='graph'>---
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
window.traces["F64_STORE"]["schedulerMermaid"] = ''
window.traces["F64_STORE"]["schedulerMermaid"] += `<pre class='graph'>graph TD
subgraph block_649["Block 649"]
	direction TB
	b649_1[\\"Finish"/]
	b649_23["offset imm_readULEB64"]
	b649_16["offset imm_readULEB32"]
	b649_24["index pop_u64"]
	b649_17["index pop_u32"]
	b649_29["eff__498 mach_writeMemory64_f64"]
	b649_22["eff__503 mach_writeMemory32_f64"]
	b649_13["val pop_f64"]
	b649_10["memindex__510 imm_readULEB32"]
	b649_4["memindex__516 0u"]
	b649_3["flags imm_readU8"]
	b649_23 --> b649_1
	b649_16 --> b649_23
	b649_24 --> b649_16
	b649_17 --> b649_24
	b649_29 --> b649_17
	b649_22 --> b649_29
	b649_13 --> b649_22
	b649_10 --> b649_13
	b649_4 --> b649_10
	b649_3 --> b649_4
end
phi_651 --> block_649
subgraph phi_651["Phi 651"]
	p651_32{{"Sϕ Memory "}}
	p651_31{{"Sϕ Stack "}}
	p651_30{{"Sϕ Codeptr "}}
end
block_652 --> phi_651
block_653 --> phi_651
subgraph block_652["Block 652"]
	direction TB
	b652_23["offset imm_readULEB64"]
	b652_24["index pop_u64"]
	b652_24 --> b652_23
end
phi_656 --> block_652
subgraph phi_656["Phi 656"]
	p656_11{"memindex ϕ"}
	p656_11{"memindex ϕ"}
	p656_11{"memindex ϕ"}
	p656_11{"memindex ϕ"}
	p656_11{"memindex ϕ"}
end
block_657 --> phi_656
block_658 --> phi_656
subgraph block_657["Block 657"]
	direction TB
	b657_10["memindex__510 imm_readULEB32"]
	b657_3["flags imm_readU8"]
	b657_3 --> b657_10
end
branch_655 --> block_657
subgraph branch_655["Branch 655"]
	br655_9["cond__509 u8.!="]

end
branch_650 --> branch_655
subgraph branch_650["Branch 650"]
	br650_15["cond__497 m_isMemory64"]

end
block_654 --> branch_650
subgraph block_654["Block 654"]
	direction TB
	b654_15["cond__497 m_isMemory64"]
end
phi_660 --> block_654
subgraph phi_660["Phi 660"]
	p660_12{{"Sϕ Codeptr "}}
	p660_12{{"Sϕ Codeptr "}}
	p660_12{{"Sϕ Codeptr "}}
	p660_12{{"Sϕ Codeptr "}}
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
block_663 --> branch_659
subgraph block_663["Block 663"]
	direction TB
	b663_9["cond__509 u8.!="]
	b663_8["arg__511 u8.&"]
	b663_5["arg__512 0"]
	b663_6["arg__514 0x40u8"]
	b663_0[/"Start"\\]
	b663_8 --> b663_9
	b663_5 --> b663_8
	b663_6 --> b663_5
	b663_0 --> b663_6
end
subgraph block_662["Block 662"]
	direction TB
end
branch_659 --> block_662
subgraph block_658["Block 658"]
	direction TB
	b658_4["memindex__516 0u"]
end
branch_655 --> block_658
subgraph block_653["Block 653"]
	direction TB
	b653_16["offset imm_readULEB32"]
	b653_17["index pop_u32"]
	b653_17 --> b653_16
end
branch_650 --> block_653

</pre>`;
window.traces["F64_STORE"]["unLEM"] = ''
window.traces["F64_STORE"]["unLEM"] += `<pre class='graph'>---
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
window.traces["F64_STORE"]["unlem_schedule"] = ''
window.traces["F64_STORE"]["unlem_schedule"] += `<pre class=''>def val = pop_f64();
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
window.traces["F64_STORE"]["unlem_scheduler"] = ''
window.traces["F64_STORE"]["unlem_scheduler"] += `<pre class='graph'>graph TD
subgraph block_664["Block 664"]
	direction TB
	b664_1[\\"Finish"/]
	b664_23["offset imm_readULEB64"]
	b664_16["offset imm_readULEB32"]
	b664_24["index pop_u64"]
	b664_17["index pop_u32"]
	b664_29["eff__498 mach_writeMemory64_f64"]
	b664_22["eff__503 mach_writeMemory32_f64"]
	b664_13["val pop_f64"]
	b664_10["memindex__510 imm_readULEB32"]
	b664_4["memindex__516 0u"]
	b664_3["flags imm_readU8"]
	b664_23 --> b664_1
	b664_16 --> b664_23
	b664_24 --> b664_16
	b664_17 --> b664_24
	b664_29 --> b664_17
	b664_22 --> b664_29
	b664_13 --> b664_22
	b664_10 --> b664_13
	b664_4 --> b664_10
	b664_3 --> b664_4
end
phi_666 --> block_664
subgraph phi_666["Phi 666"]
	p666_32{{"Sϕ Memory "}}
	p666_31{{"Sϕ Stack "}}
	p666_30{{"Sϕ Codeptr "}}
end
block_667 --> phi_666
block_668 --> phi_666
subgraph block_667["Block 667"]
	direction TB
	b667_23["offset imm_readULEB64"]
	b667_24["index pop_u64"]
	b667_24 --> b667_23
end
phi_671 --> block_667
subgraph phi_671["Phi 671"]
	p671_11{"memindex ϕ"}
	p671_11{"memindex ϕ"}
	p671_11{"memindex ϕ"}
	p671_11{"memindex ϕ"}
	p671_11{"memindex ϕ"}
end
block_672 --> phi_671
block_673 --> phi_671
subgraph block_672["Block 672"]
	direction TB
	b672_10["memindex__510 imm_readULEB32"]
	b672_3["flags imm_readU8"]
	b672_3 --> b672_10
end
branch_670 --> block_672
subgraph branch_670["Branch 670"]
	br670_9["cond__509 u8.!="]

end
branch_665 --> branch_670
subgraph branch_665["Branch 665"]
	br665_15["cond__497 m_isMemory64"]

end
block_669 --> branch_665
subgraph block_669["Block 669"]
	direction TB
	b669_15["cond__497 m_isMemory64"]
end
phi_675 --> block_669
subgraph phi_675["Phi 675"]
	p675_12{{"Sϕ Codeptr "}}
	p675_12{{"Sϕ Codeptr "}}
	p675_12{{"Sϕ Codeptr "}}
	p675_12{{"Sϕ Codeptr "}}
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
block_678 --> branch_674
subgraph block_678["Block 678"]
	direction TB
	b678_9["cond__509 u8.!="]
	b678_8["arg__511 u8.&"]
	b678_5["arg__512 0"]
	b678_6["arg__514 0x40u8"]
	b678_0[/"Start"\\]
	b678_8 --> b678_9
	b678_5 --> b678_8
	b678_6 --> b678_5
	b678_0 --> b678_6
end
subgraph block_677["Block 677"]
	direction TB
end
branch_674 --> block_677
subgraph block_673["Block 673"]
	direction TB
	b673_4["memindex__516 0u"]
end
branch_670 --> block_673
subgraph block_668["Block 668"]
	direction TB
	b668_16["offset imm_readULEB32"]
	b668_17["index pop_u32"]
	b668_17 --> b668_16
end
branch_665 --> block_668

</pre>`;
window.traces["F64_STORE"]["unlem_pretty"] = ''
window.traces["F64_STORE"]["unlem_pretty"] += `<pre class=''>def val = pop_f64();
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
window.traces["F64_STORE"]["constUnLEM"] = ''
window.traces["F64_STORE"]["constUnLEM"] += `<pre class='graph'>---
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
window.traces["F64_STORE"]["chooseMerge"] = ''
window.traces["F64_STORE"]["chooseMerge"] += `<pre class='graph'>---
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
window.traces["F64_STORE"]["scheduled"] = ''
window.traces["F64_STORE"]["scheduled"] += `<pre class=''>def val = pop_f64();
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
window.traces["F64_STORE"]["pretty"] = ''
window.traces["F64_STORE"]["pretty"] += `<pre class=''>def val = pop_f64();
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
window.traces["I32_STORE8"]["parsed"] = ''
window.traces["I32_STORE8"]["parsed"] += `<pre class=''>def flags = imm_readU8();
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
window.traces["I32_STORE8"]["raw"] = ''
window.traces["I32_STORE8"]["raw"] += `<pre class='graph'>---
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
window.traces["I32_STORE8"]["overloadOps"] = ''
window.traces["I32_STORE8"]["overloadOps"] += `<pre class='graph'>---
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
window.traces["I32_STORE8"]["addAbstractions"] = ''
window.traces["I32_STORE8"]["addAbstractions"] += `<pre class='graph'>---
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
window.traces["I32_STORE8"]["schedulerMermaid"] = ''
window.traces["I32_STORE8"]["schedulerMermaid"] += `<pre class='graph'>graph TD
subgraph block_679["Block 679"]
	direction TB
	b679_1[\\"Finish"/]
	b679_23["offset imm_readULEB64"]
	b679_16["offset imm_readULEB32"]
	b679_24["index pop_u64"]
	b679_17["index pop_u32"]
	b679_29["eff__518 mach_writeMemory64_u8"]
	b679_22["eff__523 mach_writeMemory32_u8"]
	b679_13["val pop_u32"]
	b679_10["memindex__530 imm_readULEB32"]
	b679_4["memindex__536 0u"]
	b679_3["flags imm_readU8"]
	b679_23 --> b679_1
	b679_16 --> b679_23
	b679_24 --> b679_16
	b679_17 --> b679_24
	b679_29 --> b679_17
	b679_22 --> b679_29
	b679_13 --> b679_22
	b679_10 --> b679_13
	b679_4 --> b679_10
	b679_3 --> b679_4
end
phi_681 --> block_679
subgraph phi_681["Phi 681"]
	p681_32{{"Sϕ Memory "}}
	p681_31{{"Sϕ Stack "}}
	p681_30{{"Sϕ Codeptr "}}
end
block_682 --> phi_681
block_683 --> phi_681
subgraph block_682["Block 682"]
	direction TB
	b682_23["offset imm_readULEB64"]
	b682_24["index pop_u64"]
	b682_24 --> b682_23
end
phi_686 --> block_682
subgraph phi_686["Phi 686"]
	p686_11{"memindex ϕ"}
	p686_11{"memindex ϕ"}
	p686_11{"memindex ϕ"}
	p686_11{"memindex ϕ"}
	p686_11{"memindex ϕ"}
end
block_687 --> phi_686
block_688 --> phi_686
subgraph block_687["Block 687"]
	direction TB
	b687_10["memindex__530 imm_readULEB32"]
	b687_3["flags imm_readU8"]
	b687_3 --> b687_10
end
branch_685 --> block_687
subgraph branch_685["Branch 685"]
	br685_9["cond__529 u8.!="]

end
branch_680 --> branch_685
subgraph branch_680["Branch 680"]
	br680_15["cond__517 m_isMemory64"]

end
block_684 --> branch_680
subgraph block_684["Block 684"]
	direction TB
	b684_15["cond__517 m_isMemory64"]
end
phi_690 --> block_684
subgraph phi_690["Phi 690"]
	p690_12{{"Sϕ Codeptr "}}
	p690_12{{"Sϕ Codeptr "}}
	p690_12{{"Sϕ Codeptr "}}
	p690_12{{"Sϕ Codeptr "}}
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
block_693 --> branch_689
subgraph block_693["Block 693"]
	direction TB
	b693_9["cond__529 u8.!="]
	b693_8["arg__531 u8.&"]
	b693_5["arg__532 0"]
	b693_6["arg__534 0x40u8"]
	b693_0[/"Start"\\]
	b693_8 --> b693_9
	b693_5 --> b693_8
	b693_6 --> b693_5
	b693_0 --> b693_6
end
subgraph block_692["Block 692"]
	direction TB
end
branch_689 --> block_692
subgraph block_688["Block 688"]
	direction TB
	b688_4["memindex__536 0u"]
end
branch_685 --> block_688
subgraph block_683["Block 683"]
	direction TB
	b683_16["offset imm_readULEB32"]
	b683_17["index pop_u32"]
	b683_17 --> b683_16
end
branch_680 --> block_683

</pre>`;
window.traces["I32_STORE8"]["unLEM"] = ''
window.traces["I32_STORE8"]["unLEM"] += `<pre class='graph'>---
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
window.traces["I32_STORE8"]["unlem_schedule"] = ''
window.traces["I32_STORE8"]["unlem_schedule"] += `<pre class=''>def val = pop_u32();
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
window.traces["I32_STORE8"]["unlem_scheduler"] = ''
window.traces["I32_STORE8"]["unlem_scheduler"] += `<pre class='graph'>graph TD
subgraph block_694["Block 694"]
	direction TB
	b694_1[\\"Finish"/]
	b694_23["offset imm_readULEB64"]
	b694_16["offset imm_readULEB32"]
	b694_24["index pop_u64"]
	b694_17["index pop_u32"]
	b694_29["eff__518 mach_writeMemory64_u8"]
	b694_22["eff__523 mach_writeMemory32_u8"]
	b694_13["val pop_u32"]
	b694_10["memindex__530 imm_readULEB32"]
	b694_4["memindex__536 0u"]
	b694_3["flags imm_readU8"]
	b694_23 --> b694_1
	b694_16 --> b694_23
	b694_24 --> b694_16
	b694_17 --> b694_24
	b694_29 --> b694_17
	b694_22 --> b694_29
	b694_13 --> b694_22
	b694_10 --> b694_13
	b694_4 --> b694_10
	b694_3 --> b694_4
end
phi_696 --> block_694
subgraph phi_696["Phi 696"]
	p696_32{{"Sϕ Memory "}}
	p696_31{{"Sϕ Stack "}}
	p696_30{{"Sϕ Codeptr "}}
end
block_697 --> phi_696
block_698 --> phi_696
subgraph block_697["Block 697"]
	direction TB
	b697_23["offset imm_readULEB64"]
	b697_24["index pop_u64"]
	b697_24 --> b697_23
end
phi_701 --> block_697
subgraph phi_701["Phi 701"]
	p701_11{"memindex ϕ"}
	p701_11{"memindex ϕ"}
	p701_11{"memindex ϕ"}
	p701_11{"memindex ϕ"}
	p701_11{"memindex ϕ"}
end
block_702 --> phi_701
block_703 --> phi_701
subgraph block_702["Block 702"]
	direction TB
	b702_10["memindex__530 imm_readULEB32"]
	b702_3["flags imm_readU8"]
	b702_3 --> b702_10
end
branch_700 --> block_702
subgraph branch_700["Branch 700"]
	br700_9["cond__529 u8.!="]

end
branch_695 --> branch_700
subgraph branch_695["Branch 695"]
	br695_15["cond__517 m_isMemory64"]

end
block_699 --> branch_695
subgraph block_699["Block 699"]
	direction TB
	b699_15["cond__517 m_isMemory64"]
end
phi_705 --> block_699
subgraph phi_705["Phi 705"]
	p705_12{{"Sϕ Codeptr "}}
	p705_12{{"Sϕ Codeptr "}}
	p705_12{{"Sϕ Codeptr "}}
	p705_12{{"Sϕ Codeptr "}}
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
block_708 --> branch_704
subgraph block_708["Block 708"]
	direction TB
	b708_9["cond__529 u8.!="]
	b708_8["arg__531 u8.&"]
	b708_5["arg__532 0"]
	b708_6["arg__534 0x40u8"]
	b708_0[/"Start"\\]
	b708_8 --> b708_9
	b708_5 --> b708_8
	b708_6 --> b708_5
	b708_0 --> b708_6
end
subgraph block_707["Block 707"]
	direction TB
end
branch_704 --> block_707
subgraph block_703["Block 703"]
	direction TB
	b703_4["memindex__536 0u"]
end
branch_700 --> block_703
subgraph block_698["Block 698"]
	direction TB
	b698_16["offset imm_readULEB32"]
	b698_17["index pop_u32"]
	b698_17 --> b698_16
end
branch_695 --> block_698

</pre>`;
window.traces["I32_STORE8"]["unlem_pretty"] = ''
window.traces["I32_STORE8"]["unlem_pretty"] += `<pre class=''>def val = pop_u32();
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
window.traces["I32_STORE8"]["constUnLEM"] = ''
window.traces["I32_STORE8"]["constUnLEM"] += `<pre class='graph'>---
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
window.traces["I32_STORE8"]["chooseMerge"] = ''
window.traces["I32_STORE8"]["chooseMerge"] += `<pre class='graph'>---
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
window.traces["I32_STORE8"]["scheduled"] = ''
window.traces["I32_STORE8"]["scheduled"] += `<pre class=''>def val = pop_u32();
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
window.traces["I32_STORE8"]["pretty"] = ''
window.traces["I32_STORE8"]["pretty"] += `<pre class=''>def val = pop_u32();
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
window.traces["I32_STORE16"]["parsed"] = ''
window.traces["I32_STORE16"]["parsed"] += `<pre class=''>def flags = imm_readU8();
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
window.traces["I32_STORE16"]["raw"] = ''
window.traces["I32_STORE16"]["raw"] += `<pre class='graph'>---
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
window.traces["I32_STORE16"]["overloadOps"] = ''
window.traces["I32_STORE16"]["overloadOps"] += `<pre class='graph'>---
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
window.traces["I32_STORE16"]["addAbstractions"] = ''
window.traces["I32_STORE16"]["addAbstractions"] += `<pre class='graph'>---
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
window.traces["I32_STORE16"]["schedulerMermaid"] = ''
window.traces["I32_STORE16"]["schedulerMermaid"] += `<pre class='graph'>graph TD
subgraph block_709["Block 709"]
	direction TB
	b709_1[\\"Finish"/]
	b709_23["offset imm_readULEB64"]
	b709_16["offset imm_readULEB32"]
	b709_24["index pop_u64"]
	b709_17["index pop_u32"]
	b709_29["eff__538 mach_writeMemory64_u16"]
	b709_22["eff__543 mach_writeMemory32_u16"]
	b709_13["val pop_u32"]
	b709_10["memindex__550 imm_readULEB32"]
	b709_4["memindex__556 0u"]
	b709_3["flags imm_readU8"]
	b709_23 --> b709_1
	b709_16 --> b709_23
	b709_24 --> b709_16
	b709_17 --> b709_24
	b709_29 --> b709_17
	b709_22 --> b709_29
	b709_13 --> b709_22
	b709_10 --> b709_13
	b709_4 --> b709_10
	b709_3 --> b709_4
end
phi_711 --> block_709
subgraph phi_711["Phi 711"]
	p711_32{{"Sϕ Memory "}}
	p711_31{{"Sϕ Stack "}}
	p711_30{{"Sϕ Codeptr "}}
end
block_712 --> phi_711
block_713 --> phi_711
subgraph block_712["Block 712"]
	direction TB
	b712_23["offset imm_readULEB64"]
	b712_24["index pop_u64"]
	b712_24 --> b712_23
end
phi_716 --> block_712
subgraph phi_716["Phi 716"]
	p716_11{"memindex ϕ"}
	p716_11{"memindex ϕ"}
	p716_11{"memindex ϕ"}
	p716_11{"memindex ϕ"}
	p716_11{"memindex ϕ"}
end
block_717 --> phi_716
block_718 --> phi_716
subgraph block_717["Block 717"]
	direction TB
	b717_10["memindex__550 imm_readULEB32"]
	b717_3["flags imm_readU8"]
	b717_3 --> b717_10
end
branch_715 --> block_717
subgraph branch_715["Branch 715"]
	br715_9["cond__549 u8.!="]

end
branch_710 --> branch_715
subgraph branch_710["Branch 710"]
	br710_15["cond__537 m_isMemory64"]

end
block_714 --> branch_710
subgraph block_714["Block 714"]
	direction TB
	b714_15["cond__537 m_isMemory64"]
end
phi_720 --> block_714
subgraph phi_720["Phi 720"]
	p720_12{{"Sϕ Codeptr "}}
	p720_12{{"Sϕ Codeptr "}}
	p720_12{{"Sϕ Codeptr "}}
	p720_12{{"Sϕ Codeptr "}}
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
block_723 --> branch_719
subgraph block_723["Block 723"]
	direction TB
	b723_9["cond__549 u8.!="]
	b723_8["arg__551 u8.&"]
	b723_5["arg__552 0"]
	b723_6["arg__554 0x40u8"]
	b723_0[/"Start"\\]
	b723_8 --> b723_9
	b723_5 --> b723_8
	b723_6 --> b723_5
	b723_0 --> b723_6
end
subgraph block_722["Block 722"]
	direction TB
end
branch_719 --> block_722
subgraph block_718["Block 718"]
	direction TB
	b718_4["memindex__556 0u"]
end
branch_715 --> block_718
subgraph block_713["Block 713"]
	direction TB
	b713_16["offset imm_readULEB32"]
	b713_17["index pop_u32"]
	b713_17 --> b713_16
end
branch_710 --> block_713

</pre>`;
window.traces["I32_STORE16"]["unLEM"] = ''
window.traces["I32_STORE16"]["unLEM"] += `<pre class='graph'>---
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
window.traces["I32_STORE16"]["unlem_schedule"] = ''
window.traces["I32_STORE16"]["unlem_schedule"] += `<pre class=''>def val = pop_u32();
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
window.traces["I32_STORE16"]["unlem_scheduler"] = ''
window.traces["I32_STORE16"]["unlem_scheduler"] += `<pre class='graph'>graph TD
subgraph block_724["Block 724"]
	direction TB
	b724_1[\\"Finish"/]
	b724_23["offset imm_readULEB64"]
	b724_16["offset imm_readULEB32"]
	b724_24["index pop_u64"]
	b724_17["index pop_u32"]
	b724_29["eff__538 mach_writeMemory64_u16"]
	b724_22["eff__543 mach_writeMemory32_u16"]
	b724_13["val pop_u32"]
	b724_10["memindex__550 imm_readULEB32"]
	b724_4["memindex__556 0u"]
	b724_3["flags imm_readU8"]
	b724_23 --> b724_1
	b724_16 --> b724_23
	b724_24 --> b724_16
	b724_17 --> b724_24
	b724_29 --> b724_17
	b724_22 --> b724_29
	b724_13 --> b724_22
	b724_10 --> b724_13
	b724_4 --> b724_10
	b724_3 --> b724_4
end
phi_726 --> block_724
subgraph phi_726["Phi 726"]
	p726_32{{"Sϕ Memory "}}
	p726_31{{"Sϕ Stack "}}
	p726_30{{"Sϕ Codeptr "}}
end
block_727 --> phi_726
block_728 --> phi_726
subgraph block_727["Block 727"]
	direction TB
	b727_23["offset imm_readULEB64"]
	b727_24["index pop_u64"]
	b727_24 --> b727_23
end
phi_731 --> block_727
subgraph phi_731["Phi 731"]
	p731_11{"memindex ϕ"}
	p731_11{"memindex ϕ"}
	p731_11{"memindex ϕ"}
	p731_11{"memindex ϕ"}
	p731_11{"memindex ϕ"}
end
block_732 --> phi_731
block_733 --> phi_731
subgraph block_732["Block 732"]
	direction TB
	b732_10["memindex__550 imm_readULEB32"]
	b732_3["flags imm_readU8"]
	b732_3 --> b732_10
end
branch_730 --> block_732
subgraph branch_730["Branch 730"]
	br730_9["cond__549 u8.!="]

end
branch_725 --> branch_730
subgraph branch_725["Branch 725"]
	br725_15["cond__537 m_isMemory64"]

end
block_729 --> branch_725
subgraph block_729["Block 729"]
	direction TB
	b729_15["cond__537 m_isMemory64"]
end
phi_735 --> block_729
subgraph phi_735["Phi 735"]
	p735_12{{"Sϕ Codeptr "}}
	p735_12{{"Sϕ Codeptr "}}
	p735_12{{"Sϕ Codeptr "}}
	p735_12{{"Sϕ Codeptr "}}
end
block_736 --> phi_735
block_737 --> phi_735
subgraph block_736["Block 736"]
	direction TB
	b736_10["memindex__550 imm_readULEB32"]
end
branch_734 --> block_736
subgraph branch_734["Branch 734"]
	br734_9["cond__549 u8.!="]

end
block_738 --> branch_734
subgraph block_738["Block 738"]
	direction TB
	b738_9["cond__549 u8.!="]
	b738_8["arg__551 u8.&"]
	b738_5["arg__552 0"]
	b738_6["arg__554 0x40u8"]
	b738_0[/"Start"\\]
	b738_8 --> b738_9
	b738_5 --> b738_8
	b738_6 --> b738_5
	b738_0 --> b738_6
end
subgraph block_737["Block 737"]
	direction TB
end
branch_734 --> block_737
subgraph block_733["Block 733"]
	direction TB
	b733_4["memindex__556 0u"]
end
branch_730 --> block_733
subgraph block_728["Block 728"]
	direction TB
	b728_16["offset imm_readULEB32"]
	b728_17["index pop_u32"]
	b728_17 --> b728_16
end
branch_725 --> block_728

</pre>`;
window.traces["I32_STORE16"]["unlem_pretty"] = ''
window.traces["I32_STORE16"]["unlem_pretty"] += `<pre class=''>def val = pop_u32();
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
	mach_writeMemory64_u16(memindex, index, offset, val);
} else {
	def offset = imm_readULEB32();
	def index = pop_u32();
	mach_writeMemory32_u16(memindex, index, offset, val);
}
</pre>`;
window.traces["I32_STORE16"]["constUnLEM"] = ''
window.traces["I32_STORE16"]["constUnLEM"] += `<pre class='graph'>---
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
window.traces["I32_STORE16"]["chooseMerge"] = ''
window.traces["I32_STORE16"]["chooseMerge"] += `<pre class='graph'>---
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
window.traces["I32_STORE16"]["scheduled"] = ''
window.traces["I32_STORE16"]["scheduled"] += `<pre class=''>def val = pop_u32();
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
window.traces["I32_STORE16"]["pretty"] = ''
window.traces["I32_STORE16"]["pretty"] += `<pre class=''>def val = pop_u32();
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
	mach_writeMemory64_u16(memindex, index, offset, val);
} else {
	def offset = imm_readULEB32();
	def index = pop_u32();
	mach_writeMemory32_u16(memindex, index, offset, val);
}
</pre>`;
window.traces["I64_STORE8"] = {}
window.traces["I64_STORE8"]["parsed"] = ''
window.traces["I64_STORE8"]["parsed"] += `<pre class=''>def flags = imm_readU8();
def memindex : u32 = 0u;
def arg__572 : byte = 0;
def arg__574 : byte = 0x40u8;
def arg__573 = (flags);
def arg__571 = u8.&(arg__573, arg__574);
def cond__569 = u8.!=(arg__571, arg__572);
if (cond__569) {
	def memindex__570 = imm_readULEB32();
}
// phis: memindex <- memindex__570; 
def val = pop_u64();
def arg__568 = (memindex);
def cond__557 = m_isMemory64(arg__568);
if (cond__557) {
	def offset = imm_readULEB64();
	def index = pop_u64();
	def arg__562 = (val);
	def arg__561 = (offset);
	def arg__560 = (index);
	def arg__559 = (memindex);
	def eff__558 = mach_writeMemory64_u8_64(arg__559, arg__560, arg__561, arg__562);
} else {
	def offset = imm_readULEB32();
	def index = pop_u32();
	def arg__567 = (val);
	def arg__566 = (offset);
	def arg__565 = (index);
	def arg__564 = (memindex);
	def eff__563 = mach_writeMemory32_u8_64(arg__564, arg__565, arg__566, arg__567);
}
// phis: 
</pre>`;
window.traces["I64_STORE8"]["raw"] = ''
window.traces["I64_STORE8"]["raw"] += `<pre class='graph'>---
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
	22["eff__563 mach_writeMemory32_u8_64"]
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
	10["memindex__570 imm_readULEB32"]
	3 -. Codeptr .-> 10
	9["cond__569 u8.!="]
	8 --> 9
	5 --> 9
	5["arg__572 0"]
	8["arg__571 u8.&"]
	3 --> 8
	6 --> 8
	6["arg__574 0x40u8"]
	17["index pop_u32"]
	13 -. Stack .-> 17
	11{"memindex ϕ"}
	9 --> 11
	10 --> 11
	4 --> 11
	4["memindex__575 0u"]
	29["eff__558 mach_writeMemory64_u8_64"]
	11 --> 29
	24 --> 29
	23 --> 29
	13 --> 29
	0 -. Memory .-> 29
	23["offset imm_readULEB64"]
	12 -. Codeptr .-> 23
	24["index pop_u64"]
	13 -. Stack .-> 24
	15["cond__557 m_isMemory64"]
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
window.traces["I64_STORE8"]["overloadOps"] = ''
window.traces["I64_STORE8"]["overloadOps"] += `<pre class='graph'>---
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
	22["eff__563 mach_writeMemory32_u8_64"]
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
	10["memindex__570 imm_readULEB32"]
	3 -. Codeptr .-> 10
	9["cond__569 u8.!="]
	8 --> 9
	5 --> 9
	5["arg__572 0"]
	8["arg__571 u8.&"]
	3 --> 8
	6 --> 8
	6["arg__574 0x40u8"]
	17["index pop_u32"]
	13 -. Stack .-> 17
	11{"memindex ϕ"}
	9 --> 11
	10 --> 11
	4 --> 11
	4["memindex__576 0u"]
	29["eff__558 mach_writeMemory64_u8_64"]
	11 --> 29
	24 --> 29
	23 --> 29
	13 --> 29
	0 -. Memory .-> 29
	23["offset imm_readULEB64"]
	12 -. Codeptr .-> 23
	24["index pop_u64"]
	13 -. Stack .-> 24
	15["cond__557 m_isMemory64"]
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
window.traces["I64_STORE8"]["addAbstractions"] = ''
window.traces["I64_STORE8"]["addAbstractions"] += `<pre class='graph'>---
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
	22["eff__563 mach_writeMemory32_u8_64"]
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
	10["memindex__570 imm_readULEB32"]
	3 -. Codeptr .-> 10
	9["cond__569 u8.!="]
	8 --> 9
	5 --> 9
	5["arg__572 0"]
	8["arg__571 u8.&"]
	3 --> 8
	6 --> 8
	6["arg__574 0x40u8"]
	17["index pop_u32"]
	13 -. Stack .-> 17
	11{"memindex ϕ"}
	9 --> 11
	10 --> 11
	4 --> 11
	4["memindex__576 0u"]
	29["eff__558 mach_writeMemory64_u8_64"]
	11 --> 29
	24 --> 29
	23 --> 29
	13 --> 29
	0 -. Memory .-> 29
	23["offset imm_readULEB64"]
	12 -. Codeptr .-> 23
	24["index pop_u64"]
	13 -. Stack .-> 24
	15["cond__557 m_isMemory64"]
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
window.traces["I64_STORE8"]["schedulerMermaid"] = ''
window.traces["I64_STORE8"]["schedulerMermaid"] += `<pre class='graph'>graph TD
subgraph block_739["Block 739"]
	direction TB
	b739_1[\\"Finish"/]
	b739_23["offset imm_readULEB64"]
	b739_16["offset imm_readULEB32"]
	b739_24["index pop_u64"]
	b739_17["index pop_u32"]
	b739_29["eff__558 mach_writeMemory64_u8_64"]
	b739_22["eff__563 mach_writeMemory32_u8_64"]
	b739_13["val pop_u64"]
	b739_10["memindex__570 imm_readULEB32"]
	b739_4["memindex__576 0u"]
	b739_3["flags imm_readU8"]
	b739_23 --> b739_1
	b739_16 --> b739_23
	b739_24 --> b739_16
	b739_17 --> b739_24
	b739_29 --> b739_17
	b739_22 --> b739_29
	b739_13 --> b739_22
	b739_10 --> b739_13
	b739_4 --> b739_10
	b739_3 --> b739_4
end
phi_741 --> block_739
subgraph phi_741["Phi 741"]
	p741_32{{"Sϕ Memory "}}
	p741_31{{"Sϕ Stack "}}
	p741_30{{"Sϕ Codeptr "}}
end
block_742 --> phi_741
block_743 --> phi_741
subgraph block_742["Block 742"]
	direction TB
	b742_23["offset imm_readULEB64"]
	b742_24["index pop_u64"]
	b742_24 --> b742_23
end
phi_746 --> block_742
subgraph phi_746["Phi 746"]
	p746_11{"memindex ϕ"}
	p746_11{"memindex ϕ"}
	p746_11{"memindex ϕ"}
	p746_11{"memindex ϕ"}
	p746_11{"memindex ϕ"}
end
block_747 --> phi_746
block_748 --> phi_746
subgraph block_747["Block 747"]
	direction TB
	b747_10["memindex__570 imm_readULEB32"]
	b747_3["flags imm_readU8"]
	b747_3 --> b747_10
end
branch_745 --> block_747
subgraph branch_745["Branch 745"]
	br745_9["cond__569 u8.!="]

end
branch_740 --> branch_745
subgraph branch_740["Branch 740"]
	br740_15["cond__557 m_isMemory64"]

end
block_744 --> branch_740
subgraph block_744["Block 744"]
	direction TB
	b744_15["cond__557 m_isMemory64"]
end
phi_750 --> block_744
subgraph phi_750["Phi 750"]
	p750_12{{"Sϕ Codeptr "}}
	p750_12{{"Sϕ Codeptr "}}
	p750_12{{"Sϕ Codeptr "}}
	p750_12{{"Sϕ Codeptr "}}
end
block_751 --> phi_750
block_752 --> phi_750
subgraph block_751["Block 751"]
	direction TB
	b751_10["memindex__570 imm_readULEB32"]
end
branch_749 --> block_751
subgraph branch_749["Branch 749"]
	br749_9["cond__569 u8.!="]

end
block_753 --> branch_749
subgraph block_753["Block 753"]
	direction TB
	b753_9["cond__569 u8.!="]
	b753_8["arg__571 u8.&"]
	b753_5["arg__572 0"]
	b753_6["arg__574 0x40u8"]
	b753_0[/"Start"\\]
	b753_8 --> b753_9
	b753_5 --> b753_8
	b753_6 --> b753_5
	b753_0 --> b753_6
end
subgraph block_752["Block 752"]
	direction TB
end
branch_749 --> block_752
subgraph block_748["Block 748"]
	direction TB
	b748_4["memindex__576 0u"]
end
branch_745 --> block_748
subgraph block_743["Block 743"]
	direction TB
	b743_16["offset imm_readULEB32"]
	b743_17["index pop_u32"]
	b743_17 --> b743_16
end
branch_740 --> block_743

</pre>`;
window.traces["I64_STORE8"]["unLEM"] = ''
window.traces["I64_STORE8"]["unLEM"] += `<pre class='graph'>---
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
	22["eff__563 mach_writeMemory32_u8_64"]
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
	10["memindex__570 imm_readULEB32"]
	3 -. Codeptr .-> 10
	9["cond__569 u8.!="]
	8 --> 9
	5 --> 9
	5["arg__572 0"]
	8["arg__571 u8.&"]
	3 --> 8
	6 --> 8
	6["arg__574 0x40u8"]
	17["index pop_u32"]
	13 -. Stack .-> 17
	11{"memindex ϕ"}
	9 --> 11
	10 --> 11
	4 --> 11
	4["memindex__576 0u"]
	29["eff__558 mach_writeMemory64_u8_64"]
	11 --> 29
	24 --> 29
	23 --> 29
	13 --> 29
	0 -. Memory .-> 29
	23["offset imm_readULEB64"]
	12 -. Codeptr .-> 23
	24["index pop_u64"]
	13 -. Stack .-> 24
	15["cond__557 m_isMemory64"]
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
window.traces["I64_STORE8"]["unlem_schedule"] = ''
window.traces["I64_STORE8"]["unlem_schedule"] += `<pre class=''>def val = pop_u64();
def flags = imm_readU8();
def arg__574 : byte = 0x40u8;
def arg__571 = u8.&(flags, arg__574);
def arg__572 : byte = 0;
def cond__569 = u8.!=(arg__571, arg__572);
var memindex: u32;
if (cond__569) {
	def memindex__570 = imm_readULEB32();
} else {
	def memindex__576 : u32 = 0u;
}
// phis: memindex <- memindex__570; memindex <- memindex__576; 
def cond__557 = m_isMemory64(memindex);
if (cond__557) {
	def offset = imm_readULEB64();
	def index = pop_u64();
	def eff__558 = mach_writeMemory64_u8_64(memindex, index, offset, val);
} else {
	def offset = imm_readULEB32();
	def index = pop_u32();
	def eff__563 = mach_writeMemory32_u8_64(memindex, index, offset, val);
}
// phis: 
</pre>`;
window.traces["I64_STORE8"]["unlem_scheduler"] = ''
window.traces["I64_STORE8"]["unlem_scheduler"] += `<pre class='graph'>graph TD
subgraph block_754["Block 754"]
	direction TB
	b754_1[\\"Finish"/]
	b754_23["offset imm_readULEB64"]
	b754_16["offset imm_readULEB32"]
	b754_24["index pop_u64"]
	b754_17["index pop_u32"]
	b754_29["eff__558 mach_writeMemory64_u8_64"]
	b754_22["eff__563 mach_writeMemory32_u8_64"]
	b754_13["val pop_u64"]
	b754_10["memindex__570 imm_readULEB32"]
	b754_4["memindex__576 0u"]
	b754_3["flags imm_readU8"]
	b754_23 --> b754_1
	b754_16 --> b754_23
	b754_24 --> b754_16
	b754_17 --> b754_24
	b754_29 --> b754_17
	b754_22 --> b754_29
	b754_13 --> b754_22
	b754_10 --> b754_13
	b754_4 --> b754_10
	b754_3 --> b754_4
end
phi_756 --> block_754
subgraph phi_756["Phi 756"]
	p756_32{{"Sϕ Memory "}}
	p756_31{{"Sϕ Stack "}}
	p756_30{{"Sϕ Codeptr "}}
end
block_757 --> phi_756
block_758 --> phi_756
subgraph block_757["Block 757"]
	direction TB
	b757_23["offset imm_readULEB64"]
	b757_24["index pop_u64"]
	b757_24 --> b757_23
end
phi_761 --> block_757
subgraph phi_761["Phi 761"]
	p761_11{"memindex ϕ"}
	p761_11{"memindex ϕ"}
	p761_11{"memindex ϕ"}
	p761_11{"memindex ϕ"}
	p761_11{"memindex ϕ"}
end
block_762 --> phi_761
block_763 --> phi_761
subgraph block_762["Block 762"]
	direction TB
	b762_10["memindex__570 imm_readULEB32"]
	b762_3["flags imm_readU8"]
	b762_3 --> b762_10
end
branch_760 --> block_762
subgraph branch_760["Branch 760"]
	br760_9["cond__569 u8.!="]

end
branch_755 --> branch_760
subgraph branch_755["Branch 755"]
	br755_15["cond__557 m_isMemory64"]

end
block_759 --> branch_755
subgraph block_759["Block 759"]
	direction TB
	b759_15["cond__557 m_isMemory64"]
end
phi_765 --> block_759
subgraph phi_765["Phi 765"]
	p765_12{{"Sϕ Codeptr "}}
	p765_12{{"Sϕ Codeptr "}}
	p765_12{{"Sϕ Codeptr "}}
	p765_12{{"Sϕ Codeptr "}}
end
block_766 --> phi_765
block_767 --> phi_765
subgraph block_766["Block 766"]
	direction TB
	b766_10["memindex__570 imm_readULEB32"]
end
branch_764 --> block_766
subgraph branch_764["Branch 764"]
	br764_9["cond__569 u8.!="]

end
block_768 --> branch_764
subgraph block_768["Block 768"]
	direction TB
	b768_9["cond__569 u8.!="]
	b768_8["arg__571 u8.&"]
	b768_5["arg__572 0"]
	b768_6["arg__574 0x40u8"]
	b768_0[/"Start"\\]
	b768_8 --> b768_9
	b768_5 --> b768_8
	b768_6 --> b768_5
	b768_0 --> b768_6
end
subgraph block_767["Block 767"]
	direction TB
end
branch_764 --> block_767
subgraph block_763["Block 763"]
	direction TB
	b763_4["memindex__576 0u"]
end
branch_760 --> block_763
subgraph block_758["Block 758"]
	direction TB
	b758_16["offset imm_readULEB32"]
	b758_17["index pop_u32"]
	b758_17 --> b758_16
end
branch_755 --> block_758

</pre>`;
window.traces["I64_STORE8"]["unlem_pretty"] = ''
window.traces["I64_STORE8"]["unlem_pretty"] += `<pre class=''>def val = pop_u64();
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
	mach_writeMemory64_u8_64(memindex, index, offset, val);
} else {
	def offset = imm_readULEB32();
	def index = pop_u32();
	mach_writeMemory32_u8_64(memindex, index, offset, val);
}
</pre>`;
window.traces["I64_STORE8"]["constUnLEM"] = ''
window.traces["I64_STORE8"]["constUnLEM"] += `<pre class='graph'>---
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
	22["eff__563 mach_writeMemory32_u8_64"]
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
	10["memindex__570 imm_readULEB32"]
	3 -. Codeptr .-> 10
	9["cond__569 u8.!="]
	8 --> 9
	5 --> 9
	5["arg__572 0"]
	8["arg__571 u8.&"]
	3 --> 8
	6 --> 8
	6["arg__574 0x40u8"]
	17["index pop_u32"]
	13 -. Stack .-> 17
	11{"memindex ϕ"}
	9 --> 11
	10 --> 11
	4 --> 11
	4["memindex__576 0u"]
	29["eff__558 mach_writeMemory64_u8_64"]
	11 --> 29
	24 --> 29
	23 --> 29
	13 --> 29
	0 -. Memory .-> 29
	23["offset imm_readULEB64"]
	12 -. Codeptr .-> 23
	24["index pop_u64"]
	13 -. Stack .-> 24
	15["cond__557 m_isMemory64"]
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
window.traces["I64_STORE8"]["chooseMerge"] = ''
window.traces["I64_STORE8"]["chooseMerge"] += `<pre class='graph'>---
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
	22["eff__563 mach_writeMemory32_u8_64"]
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
	10["memindex__570 imm_readULEB32"]
	3 -. Codeptr .-> 10
	9["cond__569 u8.!="]
	8 --> 9
	5 --> 9
	5["arg__572 0"]
	8["arg__571 u8.&"]
	3 --> 8
	6 --> 8
	6["arg__574 0x40u8"]
	17["index pop_u32"]
	13 -. Stack .-> 17
	11{"memindex ϕ"}
	9 --> 11
	10 --> 11
	4 --> 11
	4["memindex__576 0u"]
	29["eff__558 mach_writeMemory64_u8_64"]
	11 --> 29
	24 --> 29
	23 --> 29
	13 --> 29
	0 -. Memory .-> 29
	23["offset imm_readULEB64"]
	12 -. Codeptr .-> 23
	24["index pop_u64"]
	13 -. Stack .-> 24
	15["cond__557 m_isMemory64"]
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
window.traces["I64_STORE8"]["scheduled"] = ''
window.traces["I64_STORE8"]["scheduled"] += `<pre class=''>def val = pop_u64();
def flags = imm_readU8();
def arg__574 : byte = 0x40u8;
def arg__571 = u8.&(flags, arg__574);
def arg__572 : byte = 0;
def cond__569 = u8.!=(arg__571, arg__572);
var memindex: u32;
if (cond__569) {
	def memindex__570 = imm_readULEB32();
} else {
	def memindex__576 : u32 = 0u;
}
// phis: memindex <- memindex__570; memindex <- memindex__576; 
def cond__557 = m_isMemory64(memindex);
if (cond__557) {
	def offset = imm_readULEB64();
	def index = pop_u64();
	def eff__558 = mach_writeMemory64_u8_64(memindex, index, offset, val);
} else {
	def offset = imm_readULEB32();
	def index = pop_u32();
	def eff__563 = mach_writeMemory32_u8_64(memindex, index, offset, val);
}
// phis: 
</pre>`;
window.traces["I64_STORE8"]["pretty"] = ''
window.traces["I64_STORE8"]["pretty"] += `<pre class=''>def val = pop_u64();
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
	mach_writeMemory64_u8_64(memindex, index, offset, val);
} else {
	def offset = imm_readULEB32();
	def index = pop_u32();
	mach_writeMemory32_u8_64(memindex, index, offset, val);
}
</pre>`;
window.traces["I64_STORE16"] = {}
window.traces["I64_STORE16"]["parsed"] = ''
window.traces["I64_STORE16"]["parsed"] += `<pre class=''>def flags = imm_readU8();
def memindex : u32 = 0u;
def arg__592 : byte = 0;
def arg__594 : byte = 0x40u8;
def arg__593 = (flags);
def arg__591 = u8.&(arg__593, arg__594);
def cond__589 = u8.!=(arg__591, arg__592);
if (cond__589) {
	def memindex__590 = imm_readULEB32();
}
// phis: memindex <- memindex__590; 
def val = pop_u64();
def arg__588 = (memindex);
def cond__577 = m_isMemory64(arg__588);
if (cond__577) {
	def offset = imm_readULEB64();
	def index = pop_u64();
	def arg__582 = (val);
	def arg__581 = (offset);
	def arg__580 = (index);
	def arg__579 = (memindex);
	def eff__578 = mach_writeMemory64_u16_64(arg__579, arg__580, arg__581, arg__582);
} else {
	def offset = imm_readULEB32();
	def index = pop_u32();
	def arg__587 = (val);
	def arg__586 = (offset);
	def arg__585 = (index);
	def arg__584 = (memindex);
	def eff__583 = mach_writeMemory32_u16_64(arg__584, arg__585, arg__586, arg__587);
}
// phis: 
</pre>`;
window.traces["I64_STORE16"]["raw"] = ''
window.traces["I64_STORE16"]["raw"] += `<pre class='graph'>---
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
	22["eff__583 mach_writeMemory32_u16_64"]
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
	10["memindex__590 imm_readULEB32"]
	3 -. Codeptr .-> 10
	9["cond__589 u8.!="]
	8 --> 9
	5 --> 9
	5["arg__592 0"]
	8["arg__591 u8.&"]
	3 --> 8
	6 --> 8
	6["arg__594 0x40u8"]
	17["index pop_u32"]
	13 -. Stack .-> 17
	11{"memindex ϕ"}
	9 --> 11
	10 --> 11
	4 --> 11
	4["memindex__595 0u"]
	29["eff__578 mach_writeMemory64_u16_64"]
	11 --> 29
	24 --> 29
	23 --> 29
	13 --> 29
	0 -. Memory .-> 29
	23["offset imm_readULEB64"]
	12 -. Codeptr .-> 23
	24["index pop_u64"]
	13 -. Stack .-> 24
	15["cond__577 m_isMemory64"]
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
window.traces["I64_STORE16"]["overloadOps"] = ''
window.traces["I64_STORE16"]["overloadOps"] += `<pre class='graph'>---
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
	22["eff__583 mach_writeMemory32_u16_64"]
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
	10["memindex__590 imm_readULEB32"]
	3 -. Codeptr .-> 10
	9["cond__589 u8.!="]
	8 --> 9
	5 --> 9
	5["arg__592 0"]
	8["arg__591 u8.&"]
	3 --> 8
	6 --> 8
	6["arg__594 0x40u8"]
	17["index pop_u32"]
	13 -. Stack .-> 17
	11{"memindex ϕ"}
	9 --> 11
	10 --> 11
	4 --> 11
	4["memindex__596 0u"]
	29["eff__578 mach_writeMemory64_u16_64"]
	11 --> 29
	24 --> 29
	23 --> 29
	13 --> 29
	0 -. Memory .-> 29
	23["offset imm_readULEB64"]
	12 -. Codeptr .-> 23
	24["index pop_u64"]
	13 -. Stack .-> 24
	15["cond__577 m_isMemory64"]
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
window.traces["I64_STORE16"]["addAbstractions"] = ''
window.traces["I64_STORE16"]["addAbstractions"] += `<pre class='graph'>---
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
	22["eff__583 mach_writeMemory32_u16_64"]
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
	10["memindex__590 imm_readULEB32"]
	3 -. Codeptr .-> 10
	9["cond__589 u8.!="]
	8 --> 9
	5 --> 9
	5["arg__592 0"]
	8["arg__591 u8.&"]
	3 --> 8
	6 --> 8
	6["arg__594 0x40u8"]
	17["index pop_u32"]
	13 -. Stack .-> 17
	11{"memindex ϕ"}
	9 --> 11
	10 --> 11
	4 --> 11
	4["memindex__596 0u"]
	29["eff__578 mach_writeMemory64_u16_64"]
	11 --> 29
	24 --> 29
	23 --> 29
	13 --> 29
	0 -. Memory .-> 29
	23["offset imm_readULEB64"]
	12 -. Codeptr .-> 23
	24["index pop_u64"]
	13 -. Stack .-> 24
	15["cond__577 m_isMemory64"]
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
window.traces["I64_STORE16"]["schedulerMermaid"] = ''
window.traces["I64_STORE16"]["schedulerMermaid"] += `<pre class='graph'>graph TD
subgraph block_769["Block 769"]
	direction TB
	b769_1[\\"Finish"/]
	b769_23["offset imm_readULEB64"]
	b769_16["offset imm_readULEB32"]
	b769_24["index pop_u64"]
	b769_17["index pop_u32"]
	b769_29["eff__578 mach_writeMemory64_u16_64"]
	b769_22["eff__583 mach_writeMemory32_u16_64"]
	b769_13["val pop_u64"]
	b769_10["memindex__590 imm_readULEB32"]
	b769_4["memindex__596 0u"]
	b769_3["flags imm_readU8"]
	b769_23 --> b769_1
	b769_16 --> b769_23
	b769_24 --> b769_16
	b769_17 --> b769_24
	b769_29 --> b769_17
	b769_22 --> b769_29
	b769_13 --> b769_22
	b769_10 --> b769_13
	b769_4 --> b769_10
	b769_3 --> b769_4
end
phi_771 --> block_769
subgraph phi_771["Phi 771"]
	p771_32{{"Sϕ Memory "}}
	p771_31{{"Sϕ Stack "}}
	p771_30{{"Sϕ Codeptr "}}
end
block_772 --> phi_771
block_773 --> phi_771
subgraph block_772["Block 772"]
	direction TB
	b772_23["offset imm_readULEB64"]
	b772_24["index pop_u64"]
	b772_24 --> b772_23
end
phi_776 --> block_772
subgraph phi_776["Phi 776"]
	p776_11{"memindex ϕ"}
	p776_11{"memindex ϕ"}
	p776_11{"memindex ϕ"}
	p776_11{"memindex ϕ"}
	p776_11{"memindex ϕ"}
end
block_777 --> phi_776
block_778 --> phi_776
subgraph block_777["Block 777"]
	direction TB
	b777_10["memindex__590 imm_readULEB32"]
	b777_3["flags imm_readU8"]
	b777_3 --> b777_10
end
branch_775 --> block_777
subgraph branch_775["Branch 775"]
	br775_9["cond__589 u8.!="]

end
branch_770 --> branch_775
subgraph branch_770["Branch 770"]
	br770_15["cond__577 m_isMemory64"]

end
block_774 --> branch_770
subgraph block_774["Block 774"]
	direction TB
	b774_15["cond__577 m_isMemory64"]
end
phi_780 --> block_774
subgraph phi_780["Phi 780"]
	p780_12{{"Sϕ Codeptr "}}
	p780_12{{"Sϕ Codeptr "}}
	p780_12{{"Sϕ Codeptr "}}
	p780_12{{"Sϕ Codeptr "}}
end
block_781 --> phi_780
block_782 --> phi_780
subgraph block_781["Block 781"]
	direction TB
	b781_10["memindex__590 imm_readULEB32"]
end
branch_779 --> block_781
subgraph branch_779["Branch 779"]
	br779_9["cond__589 u8.!="]

end
block_783 --> branch_779
subgraph block_783["Block 783"]
	direction TB
	b783_9["cond__589 u8.!="]
	b783_8["arg__591 u8.&"]
	b783_5["arg__592 0"]
	b783_6["arg__594 0x40u8"]
	b783_0[/"Start"\\]
	b783_8 --> b783_9
	b783_5 --> b783_8
	b783_6 --> b783_5
	b783_0 --> b783_6
end
subgraph block_782["Block 782"]
	direction TB
end
branch_779 --> block_782
subgraph block_778["Block 778"]
	direction TB
	b778_4["memindex__596 0u"]
end
branch_775 --> block_778
subgraph block_773["Block 773"]
	direction TB
	b773_16["offset imm_readULEB32"]
	b773_17["index pop_u32"]
	b773_17 --> b773_16
end
branch_770 --> block_773

</pre>`;
window.traces["I64_STORE16"]["unLEM"] = ''
window.traces["I64_STORE16"]["unLEM"] += `<pre class='graph'>---
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
	22["eff__583 mach_writeMemory32_u16_64"]
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
	10["memindex__590 imm_readULEB32"]
	3 -. Codeptr .-> 10
	9["cond__589 u8.!="]
	8 --> 9
	5 --> 9
	5["arg__592 0"]
	8["arg__591 u8.&"]
	3 --> 8
	6 --> 8
	6["arg__594 0x40u8"]
	17["index pop_u32"]
	13 -. Stack .-> 17
	11{"memindex ϕ"}
	9 --> 11
	10 --> 11
	4 --> 11
	4["memindex__596 0u"]
	29["eff__578 mach_writeMemory64_u16_64"]
	11 --> 29
	24 --> 29
	23 --> 29
	13 --> 29
	0 -. Memory .-> 29
	23["offset imm_readULEB64"]
	12 -. Codeptr .-> 23
	24["index pop_u64"]
	13 -. Stack .-> 24
	15["cond__577 m_isMemory64"]
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
window.traces["I64_STORE16"]["unlem_schedule"] = ''
window.traces["I64_STORE16"]["unlem_schedule"] += `<pre class=''>def val = pop_u64();
def flags = imm_readU8();
def arg__594 : byte = 0x40u8;
def arg__591 = u8.&(flags, arg__594);
def arg__592 : byte = 0;
def cond__589 = u8.!=(arg__591, arg__592);
var memindex: u32;
if (cond__589) {
	def memindex__590 = imm_readULEB32();
} else {
	def memindex__596 : u32 = 0u;
}
// phis: memindex <- memindex__590; memindex <- memindex__596; 
def cond__577 = m_isMemory64(memindex);
if (cond__577) {
	def offset = imm_readULEB64();
	def index = pop_u64();
	def eff__578 = mach_writeMemory64_u16_64(memindex, index, offset, val);
} else {
	def offset = imm_readULEB32();
	def index = pop_u32();
	def eff__583 = mach_writeMemory32_u16_64(memindex, index, offset, val);
}
// phis: 
</pre>`;
window.traces["I64_STORE16"]["unlem_scheduler"] = ''
window.traces["I64_STORE16"]["unlem_scheduler"] += `<pre class='graph'>graph TD
subgraph block_784["Block 784"]
	direction TB
	b784_1[\\"Finish"/]
	b784_23["offset imm_readULEB64"]
	b784_16["offset imm_readULEB32"]
	b784_24["index pop_u64"]
	b784_17["index pop_u32"]
	b784_29["eff__578 mach_writeMemory64_u16_64"]
	b784_22["eff__583 mach_writeMemory32_u16_64"]
	b784_13["val pop_u64"]
	b784_10["memindex__590 imm_readULEB32"]
	b784_4["memindex__596 0u"]
	b784_3["flags imm_readU8"]
	b784_23 --> b784_1
	b784_16 --> b784_23
	b784_24 --> b784_16
	b784_17 --> b784_24
	b784_29 --> b784_17
	b784_22 --> b784_29
	b784_13 --> b784_22
	b784_10 --> b784_13
	b784_4 --> b784_10
	b784_3 --> b784_4
end
phi_786 --> block_784
subgraph phi_786["Phi 786"]
	p786_32{{"Sϕ Memory "}}
	p786_31{{"Sϕ Stack "}}
	p786_30{{"Sϕ Codeptr "}}
end
block_787 --> phi_786
block_788 --> phi_786
subgraph block_787["Block 787"]
	direction TB
	b787_23["offset imm_readULEB64"]
	b787_24["index pop_u64"]
	b787_24 --> b787_23
end
phi_791 --> block_787
subgraph phi_791["Phi 791"]
	p791_11{"memindex ϕ"}
	p791_11{"memindex ϕ"}
	p791_11{"memindex ϕ"}
	p791_11{"memindex ϕ"}
	p791_11{"memindex ϕ"}
end
block_792 --> phi_791
block_793 --> phi_791
subgraph block_792["Block 792"]
	direction TB
	b792_10["memindex__590 imm_readULEB32"]
	b792_3["flags imm_readU8"]
	b792_3 --> b792_10
end
branch_790 --> block_792
subgraph branch_790["Branch 790"]
	br790_9["cond__589 u8.!="]

end
branch_785 --> branch_790
subgraph branch_785["Branch 785"]
	br785_15["cond__577 m_isMemory64"]

end
block_789 --> branch_785
subgraph block_789["Block 789"]
	direction TB
	b789_15["cond__577 m_isMemory64"]
end
phi_795 --> block_789
subgraph phi_795["Phi 795"]
	p795_12{{"Sϕ Codeptr "}}
	p795_12{{"Sϕ Codeptr "}}
	p795_12{{"Sϕ Codeptr "}}
	p795_12{{"Sϕ Codeptr "}}
end
block_796 --> phi_795
block_797 --> phi_795
subgraph block_796["Block 796"]
	direction TB
	b796_10["memindex__590 imm_readULEB32"]
end
branch_794 --> block_796
subgraph branch_794["Branch 794"]
	br794_9["cond__589 u8.!="]

end
block_798 --> branch_794
subgraph block_798["Block 798"]
	direction TB
	b798_9["cond__589 u8.!="]
	b798_8["arg__591 u8.&"]
	b798_5["arg__592 0"]
	b798_6["arg__594 0x40u8"]
	b798_0[/"Start"\\]
	b798_8 --> b798_9
	b798_5 --> b798_8
	b798_6 --> b798_5
	b798_0 --> b798_6
end
subgraph block_797["Block 797"]
	direction TB
end
branch_794 --> block_797
subgraph block_793["Block 793"]
	direction TB
	b793_4["memindex__596 0u"]
end
branch_790 --> block_793
subgraph block_788["Block 788"]
	direction TB
	b788_16["offset imm_readULEB32"]
	b788_17["index pop_u32"]
	b788_17 --> b788_16
end
branch_785 --> block_788

</pre>`;
window.traces["I64_STORE16"]["unlem_pretty"] = ''
window.traces["I64_STORE16"]["unlem_pretty"] += `<pre class=''>def val = pop_u64();
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
	mach_writeMemory64_u16_64(memindex, index, offset, val);
} else {
	def offset = imm_readULEB32();
	def index = pop_u32();
	mach_writeMemory32_u16_64(memindex, index, offset, val);
}
</pre>`;
window.traces["I64_STORE16"]["constUnLEM"] = ''
window.traces["I64_STORE16"]["constUnLEM"] += `<pre class='graph'>---
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
	22["eff__583 mach_writeMemory32_u16_64"]
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
	10["memindex__590 imm_readULEB32"]
	3 -. Codeptr .-> 10
	9["cond__589 u8.!="]
	8 --> 9
	5 --> 9
	5["arg__592 0"]
	8["arg__591 u8.&"]
	3 --> 8
	6 --> 8
	6["arg__594 0x40u8"]
	17["index pop_u32"]
	13 -. Stack .-> 17
	11{"memindex ϕ"}
	9 --> 11
	10 --> 11
	4 --> 11
	4["memindex__596 0u"]
	29["eff__578 mach_writeMemory64_u16_64"]
	11 --> 29
	24 --> 29
	23 --> 29
	13 --> 29
	0 -. Memory .-> 29
	23["offset imm_readULEB64"]
	12 -. Codeptr .-> 23
	24["index pop_u64"]
	13 -. Stack .-> 24
	15["cond__577 m_isMemory64"]
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
window.traces["I64_STORE16"]["chooseMerge"] = ''
window.traces["I64_STORE16"]["chooseMerge"] += `<pre class='graph'>---
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
	22["eff__583 mach_writeMemory32_u16_64"]
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
	10["memindex__590 imm_readULEB32"]
	3 -. Codeptr .-> 10
	9["cond__589 u8.!="]
	8 --> 9
	5 --> 9
	5["arg__592 0"]
	8["arg__591 u8.&"]
	3 --> 8
	6 --> 8
	6["arg__594 0x40u8"]
	17["index pop_u32"]
	13 -. Stack .-> 17
	11{"memindex ϕ"}
	9 --> 11
	10 --> 11
	4 --> 11
	4["memindex__596 0u"]
	29["eff__578 mach_writeMemory64_u16_64"]
	11 --> 29
	24 --> 29
	23 --> 29
	13 --> 29
	0 -. Memory .-> 29
	23["offset imm_readULEB64"]
	12 -. Codeptr .-> 23
	24["index pop_u64"]
	13 -. Stack .-> 24
	15["cond__577 m_isMemory64"]
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
window.traces["I64_STORE16"]["scheduled"] = ''
window.traces["I64_STORE16"]["scheduled"] += `<pre class=''>def val = pop_u64();
def flags = imm_readU8();
def arg__594 : byte = 0x40u8;
def arg__591 = u8.&(flags, arg__594);
def arg__592 : byte = 0;
def cond__589 = u8.!=(arg__591, arg__592);
var memindex: u32;
if (cond__589) {
	def memindex__590 = imm_readULEB32();
} else {
	def memindex__596 : u32 = 0u;
}
// phis: memindex <- memindex__590; memindex <- memindex__596; 
def cond__577 = m_isMemory64(memindex);
if (cond__577) {
	def offset = imm_readULEB64();
	def index = pop_u64();
	def eff__578 = mach_writeMemory64_u16_64(memindex, index, offset, val);
} else {
	def offset = imm_readULEB32();
	def index = pop_u32();
	def eff__583 = mach_writeMemory32_u16_64(memindex, index, offset, val);
}
// phis: 
</pre>`;
window.traces["I64_STORE16"]["pretty"] = ''
window.traces["I64_STORE16"]["pretty"] += `<pre class=''>def val = pop_u64();
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
	mach_writeMemory64_u16_64(memindex, index, offset, val);
} else {
	def offset = imm_readULEB32();
	def index = pop_u32();
	mach_writeMemory32_u16_64(memindex, index, offset, val);
}
</pre>`;
window.traces["I64_STORE32"] = {}
window.traces["I64_STORE32"]["parsed"] = ''
window.traces["I64_STORE32"]["parsed"] += `<pre class=''>def flags = imm_readU8();
def memindex : u32 = 0u;
def arg__612 : byte = 0;
def arg__614 : byte = 0x40u8;
def arg__613 = (flags);
def arg__611 = u8.&(arg__613, arg__614);
def cond__609 = u8.!=(arg__611, arg__612);
if (cond__609) {
	def memindex__610 = imm_readULEB32();
}
// phis: memindex <- memindex__610; 
def val = pop_u64();
def arg__608 = (memindex);
def cond__597 = m_isMemory64(arg__608);
if (cond__597) {
	def offset = imm_readULEB64();
	def index = pop_u64();
	def arg__602 = (val);
	def arg__601 = (offset);
	def arg__600 = (index);
	def arg__599 = (memindex);
	def eff__598 = mach_writeMemory64_u32_64(arg__599, arg__600, arg__601, arg__602);
} else {
	def offset = imm_readULEB32();
	def index = pop_u32();
	def arg__607 = (val);
	def arg__606 = (offset);
	def arg__605 = (index);
	def arg__604 = (memindex);
	def eff__603 = mach_writeMemory32_u32_64(arg__604, arg__605, arg__606, arg__607);
}
// phis: 
</pre>`;
window.traces["I64_STORE32"]["raw"] = ''
window.traces["I64_STORE32"]["raw"] += `<pre class='graph'>---
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
	22["eff__603 mach_writeMemory32_u32_64"]
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
	10["memindex__610 imm_readULEB32"]
	3 -. Codeptr .-> 10
	9["cond__609 u8.!="]
	8 --> 9
	5 --> 9
	5["arg__612 0"]
	8["arg__611 u8.&"]
	3 --> 8
	6 --> 8
	6["arg__614 0x40u8"]
	17["index pop_u32"]
	13 -. Stack .-> 17
	11{"memindex ϕ"}
	9 --> 11
	10 --> 11
	4 --> 11
	4["memindex__615 0u"]
	29["eff__598 mach_writeMemory64_u32_64"]
	11 --> 29
	24 --> 29
	23 --> 29
	13 --> 29
	0 -. Memory .-> 29
	23["offset imm_readULEB64"]
	12 -. Codeptr .-> 23
	24["index pop_u64"]
	13 -. Stack .-> 24
	15["cond__597 m_isMemory64"]
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
window.traces["I64_STORE32"]["overloadOps"] = ''
window.traces["I64_STORE32"]["overloadOps"] += `<pre class='graph'>---
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
	22["eff__603 mach_writeMemory32_u32_64"]
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
	10["memindex__610 imm_readULEB32"]
	3 -. Codeptr .-> 10
	9["cond__609 u8.!="]
	8 --> 9
	5 --> 9
	5["arg__612 0"]
	8["arg__611 u8.&"]
	3 --> 8
	6 --> 8
	6["arg__614 0x40u8"]
	17["index pop_u32"]
	13 -. Stack .-> 17
	11{"memindex ϕ"}
	9 --> 11
	10 --> 11
	4 --> 11
	4["memindex__616 0u"]
	29["eff__598 mach_writeMemory64_u32_64"]
	11 --> 29
	24 --> 29
	23 --> 29
	13 --> 29
	0 -. Memory .-> 29
	23["offset imm_readULEB64"]
	12 -. Codeptr .-> 23
	24["index pop_u64"]
	13 -. Stack .-> 24
	15["cond__597 m_isMemory64"]
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
window.traces["I64_STORE32"]["addAbstractions"] = ''
window.traces["I64_STORE32"]["addAbstractions"] += `<pre class='graph'>---
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
	22["eff__603 mach_writeMemory32_u32_64"]
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
	10["memindex__610 imm_readULEB32"]
	3 -. Codeptr .-> 10
	9["cond__609 u8.!="]
	8 --> 9
	5 --> 9
	5["arg__612 0"]
	8["arg__611 u8.&"]
	3 --> 8
	6 --> 8
	6["arg__614 0x40u8"]
	17["index pop_u32"]
	13 -. Stack .-> 17
	11{"memindex ϕ"}
	9 --> 11
	10 --> 11
	4 --> 11
	4["memindex__616 0u"]
	29["eff__598 mach_writeMemory64_u32_64"]
	11 --> 29
	24 --> 29
	23 --> 29
	13 --> 29
	0 -. Memory .-> 29
	23["offset imm_readULEB64"]
	12 -. Codeptr .-> 23
	24["index pop_u64"]
	13 -. Stack .-> 24
	15["cond__597 m_isMemory64"]
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
window.traces["I64_STORE32"]["schedulerMermaid"] = ''
window.traces["I64_STORE32"]["schedulerMermaid"] += `<pre class='graph'>graph TD
subgraph block_799["Block 799"]
	direction TB
	b799_1[\\"Finish"/]
	b799_23["offset imm_readULEB64"]
	b799_16["offset imm_readULEB32"]
	b799_24["index pop_u64"]
	b799_17["index pop_u32"]
	b799_29["eff__598 mach_writeMemory64_u32_64"]
	b799_22["eff__603 mach_writeMemory32_u32_64"]
	b799_13["val pop_u64"]
	b799_10["memindex__610 imm_readULEB32"]
	b799_4["memindex__616 0u"]
	b799_3["flags imm_readU8"]
	b799_23 --> b799_1
	b799_16 --> b799_23
	b799_24 --> b799_16
	b799_17 --> b799_24
	b799_29 --> b799_17
	b799_22 --> b799_29
	b799_13 --> b799_22
	b799_10 --> b799_13
	b799_4 --> b799_10
	b799_3 --> b799_4
end
phi_801 --> block_799
subgraph phi_801["Phi 801"]
	p801_32{{"Sϕ Memory "}}
	p801_31{{"Sϕ Stack "}}
	p801_30{{"Sϕ Codeptr "}}
end
block_802 --> phi_801
block_803 --> phi_801
subgraph block_802["Block 802"]
	direction TB
	b802_23["offset imm_readULEB64"]
	b802_24["index pop_u64"]
	b802_24 --> b802_23
end
phi_806 --> block_802
subgraph phi_806["Phi 806"]
	p806_11{"memindex ϕ"}
	p806_11{"memindex ϕ"}
	p806_11{"memindex ϕ"}
	p806_11{"memindex ϕ"}
	p806_11{"memindex ϕ"}
end
block_807 --> phi_806
block_808 --> phi_806
subgraph block_807["Block 807"]
	direction TB
	b807_10["memindex__610 imm_readULEB32"]
	b807_3["flags imm_readU8"]
	b807_3 --> b807_10
end
branch_805 --> block_807
subgraph branch_805["Branch 805"]
	br805_9["cond__609 u8.!="]

end
branch_800 --> branch_805
subgraph branch_800["Branch 800"]
	br800_15["cond__597 m_isMemory64"]

end
block_804 --> branch_800
subgraph block_804["Block 804"]
	direction TB
	b804_15["cond__597 m_isMemory64"]
end
phi_810 --> block_804
subgraph phi_810["Phi 810"]
	p810_12{{"Sϕ Codeptr "}}
	p810_12{{"Sϕ Codeptr "}}
	p810_12{{"Sϕ Codeptr "}}
	p810_12{{"Sϕ Codeptr "}}
end
block_811 --> phi_810
block_812 --> phi_810
subgraph block_811["Block 811"]
	direction TB
	b811_10["memindex__610 imm_readULEB32"]
end
branch_809 --> block_811
subgraph branch_809["Branch 809"]
	br809_9["cond__609 u8.!="]

end
block_813 --> branch_809
subgraph block_813["Block 813"]
	direction TB
	b813_9["cond__609 u8.!="]
	b813_8["arg__611 u8.&"]
	b813_5["arg__612 0"]
	b813_6["arg__614 0x40u8"]
	b813_0[/"Start"\\]
	b813_8 --> b813_9
	b813_5 --> b813_8
	b813_6 --> b813_5
	b813_0 --> b813_6
end
subgraph block_812["Block 812"]
	direction TB
end
branch_809 --> block_812
subgraph block_808["Block 808"]
	direction TB
	b808_4["memindex__616 0u"]
end
branch_805 --> block_808
subgraph block_803["Block 803"]
	direction TB
	b803_16["offset imm_readULEB32"]
	b803_17["index pop_u32"]
	b803_17 --> b803_16
end
branch_800 --> block_803

</pre>`;
window.traces["I64_STORE32"]["unLEM"] = ''
window.traces["I64_STORE32"]["unLEM"] += `<pre class='graph'>---
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
	22["eff__603 mach_writeMemory32_u32_64"]
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
	10["memindex__610 imm_readULEB32"]
	3 -. Codeptr .-> 10
	9["cond__609 u8.!="]
	8 --> 9
	5 --> 9
	5["arg__612 0"]
	8["arg__611 u8.&"]
	3 --> 8
	6 --> 8
	6["arg__614 0x40u8"]
	17["index pop_u32"]
	13 -. Stack .-> 17
	11{"memindex ϕ"}
	9 --> 11
	10 --> 11
	4 --> 11
	4["memindex__616 0u"]
	29["eff__598 mach_writeMemory64_u32_64"]
	11 --> 29
	24 --> 29
	23 --> 29
	13 --> 29
	0 -. Memory .-> 29
	23["offset imm_readULEB64"]
	12 -. Codeptr .-> 23
	24["index pop_u64"]
	13 -. Stack .-> 24
	15["cond__597 m_isMemory64"]
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
window.traces["I64_STORE32"]["unlem_schedule"] = ''
window.traces["I64_STORE32"]["unlem_schedule"] += `<pre class=''>def val = pop_u64();
def flags = imm_readU8();
def arg__614 : byte = 0x40u8;
def arg__611 = u8.&(flags, arg__614);
def arg__612 : byte = 0;
def cond__609 = u8.!=(arg__611, arg__612);
var memindex: u32;
if (cond__609) {
	def memindex__610 = imm_readULEB32();
} else {
	def memindex__616 : u32 = 0u;
}
// phis: memindex <- memindex__610; memindex <- memindex__616; 
def cond__597 = m_isMemory64(memindex);
if (cond__597) {
	def offset = imm_readULEB64();
	def index = pop_u64();
	def eff__598 = mach_writeMemory64_u32_64(memindex, index, offset, val);
} else {
	def offset = imm_readULEB32();
	def index = pop_u32();
	def eff__603 = mach_writeMemory32_u32_64(memindex, index, offset, val);
}
// phis: 
</pre>`;
window.traces["I64_STORE32"]["unlem_scheduler"] = ''
window.traces["I64_STORE32"]["unlem_scheduler"] += `<pre class='graph'>graph TD
subgraph block_814["Block 814"]
	direction TB
	b814_1[\\"Finish"/]
	b814_23["offset imm_readULEB64"]
	b814_16["offset imm_readULEB32"]
	b814_24["index pop_u64"]
	b814_17["index pop_u32"]
	b814_29["eff__598 mach_writeMemory64_u32_64"]
	b814_22["eff__603 mach_writeMemory32_u32_64"]
	b814_13["val pop_u64"]
	b814_10["memindex__610 imm_readULEB32"]
	b814_4["memindex__616 0u"]
	b814_3["flags imm_readU8"]
	b814_23 --> b814_1
	b814_16 --> b814_23
	b814_24 --> b814_16
	b814_17 --> b814_24
	b814_29 --> b814_17
	b814_22 --> b814_29
	b814_13 --> b814_22
	b814_10 --> b814_13
	b814_4 --> b814_10
	b814_3 --> b814_4
end
phi_816 --> block_814
subgraph phi_816["Phi 816"]
	p816_32{{"Sϕ Memory "}}
	p816_31{{"Sϕ Stack "}}
	p816_30{{"Sϕ Codeptr "}}
end
block_817 --> phi_816
block_818 --> phi_816
subgraph block_817["Block 817"]
	direction TB
	b817_23["offset imm_readULEB64"]
	b817_24["index pop_u64"]
	b817_24 --> b817_23
end
phi_821 --> block_817
subgraph phi_821["Phi 821"]
	p821_11{"memindex ϕ"}
	p821_11{"memindex ϕ"}
	p821_11{"memindex ϕ"}
	p821_11{"memindex ϕ"}
	p821_11{"memindex ϕ"}
end
block_822 --> phi_821
block_823 --> phi_821
subgraph block_822["Block 822"]
	direction TB
	b822_10["memindex__610 imm_readULEB32"]
	b822_3["flags imm_readU8"]
	b822_3 --> b822_10
end
branch_820 --> block_822
subgraph branch_820["Branch 820"]
	br820_9["cond__609 u8.!="]

end
branch_815 --> branch_820
subgraph branch_815["Branch 815"]
	br815_15["cond__597 m_isMemory64"]

end
block_819 --> branch_815
subgraph block_819["Block 819"]
	direction TB
	b819_15["cond__597 m_isMemory64"]
end
phi_825 --> block_819
subgraph phi_825["Phi 825"]
	p825_12{{"Sϕ Codeptr "}}
	p825_12{{"Sϕ Codeptr "}}
	p825_12{{"Sϕ Codeptr "}}
	p825_12{{"Sϕ Codeptr "}}
end
block_826 --> phi_825
block_827 --> phi_825
subgraph block_826["Block 826"]
	direction TB
	b826_10["memindex__610 imm_readULEB32"]
end
branch_824 --> block_826
subgraph branch_824["Branch 824"]
	br824_9["cond__609 u8.!="]

end
block_828 --> branch_824
subgraph block_828["Block 828"]
	direction TB
	b828_9["cond__609 u8.!="]
	b828_8["arg__611 u8.&"]
	b828_5["arg__612 0"]
	b828_6["arg__614 0x40u8"]
	b828_0[/"Start"\\]
	b828_8 --> b828_9
	b828_5 --> b828_8
	b828_6 --> b828_5
	b828_0 --> b828_6
end
subgraph block_827["Block 827"]
	direction TB
end
branch_824 --> block_827
subgraph block_823["Block 823"]
	direction TB
	b823_4["memindex__616 0u"]
end
branch_820 --> block_823
subgraph block_818["Block 818"]
	direction TB
	b818_16["offset imm_readULEB32"]
	b818_17["index pop_u32"]
	b818_17 --> b818_16
end
branch_815 --> block_818

</pre>`;
window.traces["I64_STORE32"]["unlem_pretty"] = ''
window.traces["I64_STORE32"]["unlem_pretty"] += `<pre class=''>def val = pop_u64();
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
	mach_writeMemory64_u32_64(memindex, index, offset, val);
} else {
	def offset = imm_readULEB32();
	def index = pop_u32();
	mach_writeMemory32_u32_64(memindex, index, offset, val);
}
</pre>`;
window.traces["I64_STORE32"]["constUnLEM"] = ''
window.traces["I64_STORE32"]["constUnLEM"] += `<pre class='graph'>---
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
	22["eff__603 mach_writeMemory32_u32_64"]
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
	10["memindex__610 imm_readULEB32"]
	3 -. Codeptr .-> 10
	9["cond__609 u8.!="]
	8 --> 9
	5 --> 9
	5["arg__612 0"]
	8["arg__611 u8.&"]
	3 --> 8
	6 --> 8
	6["arg__614 0x40u8"]
	17["index pop_u32"]
	13 -. Stack .-> 17
	11{"memindex ϕ"}
	9 --> 11
	10 --> 11
	4 --> 11
	4["memindex__616 0u"]
	29["eff__598 mach_writeMemory64_u32_64"]
	11 --> 29
	24 --> 29
	23 --> 29
	13 --> 29
	0 -. Memory .-> 29
	23["offset imm_readULEB64"]
	12 -. Codeptr .-> 23
	24["index pop_u64"]
	13 -. Stack .-> 24
	15["cond__597 m_isMemory64"]
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
window.traces["I64_STORE32"]["chooseMerge"] = ''
window.traces["I64_STORE32"]["chooseMerge"] += `<pre class='graph'>---
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
	22["eff__603 mach_writeMemory32_u32_64"]
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
	10["memindex__610 imm_readULEB32"]
	3 -. Codeptr .-> 10
	9["cond__609 u8.!="]
	8 --> 9
	5 --> 9
	5["arg__612 0"]
	8["arg__611 u8.&"]
	3 --> 8
	6 --> 8
	6["arg__614 0x40u8"]
	17["index pop_u32"]
	13 -. Stack .-> 17
	11{"memindex ϕ"}
	9 --> 11
	10 --> 11
	4 --> 11
	4["memindex__616 0u"]
	29["eff__598 mach_writeMemory64_u32_64"]
	11 --> 29
	24 --> 29
	23 --> 29
	13 --> 29
	0 -. Memory .-> 29
	23["offset imm_readULEB64"]
	12 -. Codeptr .-> 23
	24["index pop_u64"]
	13 -. Stack .-> 24
	15["cond__597 m_isMemory64"]
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
window.traces["I64_STORE32"]["scheduled"] = ''
window.traces["I64_STORE32"]["scheduled"] += `<pre class=''>def val = pop_u64();
def flags = imm_readU8();
def arg__614 : byte = 0x40u8;
def arg__611 = u8.&(flags, arg__614);
def arg__612 : byte = 0;
def cond__609 = u8.!=(arg__611, arg__612);
var memindex: u32;
if (cond__609) {
	def memindex__610 = imm_readULEB32();
} else {
	def memindex__616 : u32 = 0u;
}
// phis: memindex <- memindex__610; memindex <- memindex__616; 
def cond__597 = m_isMemory64(memindex);
if (cond__597) {
	def offset = imm_readULEB64();
	def index = pop_u64();
	def eff__598 = mach_writeMemory64_u32_64(memindex, index, offset, val);
} else {
	def offset = imm_readULEB32();
	def index = pop_u32();
	def eff__603 = mach_writeMemory32_u32_64(memindex, index, offset, val);
}
// phis: 
</pre>`;
window.traces["I64_STORE32"]["pretty"] = ''
window.traces["I64_STORE32"]["pretty"] += `<pre class=''>def val = pop_u64();
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
	mach_writeMemory64_u32_64(memindex, index, offset, val);
} else {
	def offset = imm_readULEB32();
	def index = pop_u32();
	mach_writeMemory32_u32_64(memindex, index, offset, val);
}
</pre>`;
window.traces["MEMORY_SIZE"] = {}
window.traces["MEMORY_SIZE"]["parsed"] = ''
window.traces["MEMORY_SIZE"]["parsed"] += `<pre class=''>def flags = imm_readU8();
def memindex : u32 = 0u;
def arg__628 : byte = 0;
def arg__630 : byte = 0x40u8;
def arg__629 = (flags);
def arg__627 = u8.&(arg__629, arg__630);
def cond__625 = u8.!=(arg__627, arg__628);
if (cond__625) {
	def memindex__626 = imm_readULEB32();
}
// phis: memindex <- memindex__626; 
def arg__624 = (memindex);
def cond__617 = m_isMemory64(arg__624);
if (cond__617) {
	def arg__620 = (memindex);
	def r = mach_memorySize64(arg__620);
	def arg__619 = (r);
	def eff__618 = push_u64(arg__619);
} else {
	def arg__623 = (memindex);
	def r = mach_memorySize32(arg__623);
	def arg__622 = (r);
	def eff__621 = push_u32(arg__622);
}
// phis: 
</pre>`;
window.traces["MEMORY_SIZE"]["raw"] = ''
window.traces["MEMORY_SIZE"]["raw"] += `<pre class='graph'>---
config:
  layout: elk
---
graph TD
	1[\\"Finish"/]
	12 -. Codeptr .-> 1
	23 -. Stack .-> 1
	0 -. Trap Locals Globals Tables Memory Extra .-> 1
	0[/"Start"\\]
	23{{"Sϕ Stack "}}
	14 --> 23
	22 --> 23
	18 --> 23
	18["eff__621 push_u32"]
	16 --> 18
	0 -. Stack .-> 18
	16["r mach_memorySize32"]
	11 --> 16
	11{"memindex ϕ"}
	9 --> 11
	10 --> 11
	4 --> 11
	4["memindex__631 0u"]
	10["memindex__626 imm_readULEB32"]
	3 -. Codeptr .-> 10
	3["flags imm_readU8"]
	0 -. Codeptr .-> 3
	9["cond__625 u8.!="]
	8 --> 9
	5 --> 9
	5["arg__628 0"]
	8["arg__627 u8.&"]
	3 --> 8
	6 --> 8
	6["arg__630 0x40u8"]
	22["eff__618 push_u64"]
	20 --> 22
	0 -. Stack .-> 22
	20["r mach_memorySize64"]
	11 --> 20
	14["cond__617 m_isMemory64"]
	11 --> 14
	12{{"Sϕ Codeptr "}}
	9 --> 12
	10 --> 12
	3 --> 12
</pre>`;
window.traces["MEMORY_SIZE"]["overloadOps"] = ''
window.traces["MEMORY_SIZE"]["overloadOps"] += `<pre class='graph'>---
config:
  layout: elk
---
graph TD
	1[\\"Finish"/]
	12 -. Codeptr .-> 1
	23 -. Stack .-> 1
	0 -. Trap Locals Globals Tables Memory Extra .-> 1
	0[/"Start"\\]
	23{{"Sϕ Stack "}}
	14 --> 23
	22 --> 23
	18 --> 23
	18["eff__621 push_u32"]
	16 --> 18
	0 -. Stack .-> 18
	16["r mach_memorySize32"]
	11 --> 16
	11{"memindex ϕ"}
	9 --> 11
	10 --> 11
	4 --> 11
	4["memindex__632 0u"]
	10["memindex__626 imm_readULEB32"]
	3 -. Codeptr .-> 10
	3["flags imm_readU8"]
	0 -. Codeptr .-> 3
	9["cond__625 u8.!="]
	8 --> 9
	5 --> 9
	5["arg__628 0"]
	8["arg__627 u8.&"]
	3 --> 8
	6 --> 8
	6["arg__630 0x40u8"]
	22["eff__618 push_u64"]
	20 --> 22
	0 -. Stack .-> 22
	20["r mach_memorySize64"]
	11 --> 20
	14["cond__617 m_isMemory64"]
	11 --> 14
	12{{"Sϕ Codeptr "}}
	9 --> 12
	10 --> 12
	3 --> 12
</pre>`;
window.traces["MEMORY_SIZE"]["addAbstractions"] = ''
window.traces["MEMORY_SIZE"]["addAbstractions"] += `<pre class='graph'>---
config:
  layout: elk
---
graph TD
	1[\\"Finish"/]
	12 -. Codeptr .-> 1
	23 -. Stack .-> 1
	0 -. Trap Locals Globals Tables Memory Extra .-> 1
	0[/"Start"\\]
	23{{"Sϕ Stack "}}
	14 --> 23
	22 --> 23
	18 --> 23
	18["eff__621 push_u32"]
	16 --> 18
	0 -. Stack .-> 18
	16["r mach_memorySize32"]
	11 --> 16
	11{"memindex ϕ"}
	9 --> 11
	10 --> 11
	4 --> 11
	4["memindex__632 0u"]
	10["memindex__626 imm_readULEB32"]
	3 -. Codeptr .-> 10
	3["flags imm_readU8"]
	0 -. Codeptr .-> 3
	9["cond__625 u8.!="]
	8 --> 9
	5 --> 9
	5["arg__628 0"]
	8["arg__627 u8.&"]
	3 --> 8
	6 --> 8
	6["arg__630 0x40u8"]
	22["eff__618 push_u64"]
	20 --> 22
	0 -. Stack .-> 22
	20["r mach_memorySize64"]
	11 --> 20
	14["cond__617 m_isMemory64"]
	11 --> 14
	12{{"Sϕ Codeptr "}}
	9 --> 12
	10 --> 12
	3 --> 12
</pre>`;
window.traces["MEMORY_SIZE"]["schedulerMermaid"] = ''
window.traces["MEMORY_SIZE"]["schedulerMermaid"] += `<pre class='graph'>graph TD
subgraph block_829["Block 829"]
	direction TB
	b829_1[\\"Finish"/]
	b829_10["memindex__626 imm_readULEB32"]
	b829_3["flags imm_readU8"]
	b829_22["eff__618 push_u64"]
	b829_18["eff__621 push_u32"]
	b829_20["r mach_memorySize64"]
	b829_16["r mach_memorySize32"]
	b829_4["memindex__632 0u"]
	b829_10 --> b829_1
	b829_3 --> b829_10
	b829_22 --> b829_3
	b829_18 --> b829_22
	b829_20 --> b829_18
	b829_16 --> b829_20
	b829_4 --> b829_16
end
phi_831 --> block_829
subgraph phi_831["Phi 831"]
	p831_11{"memindex ϕ"}
	p831_11{"memindex ϕ"}
	p831_11{"memindex ϕ"}
	p831_12{{"Sϕ Codeptr "}}
end
block_832 --> phi_831
block_833 --> phi_831
subgraph block_832["Block 832"]
	direction TB
	b832_10["memindex__626 imm_readULEB32"]
	b832_3["flags imm_readU8"]
	b832_3 --> b832_10
end
phi_835 --> block_832
subgraph phi_835["Phi 835"]
	p835_23{{"Sϕ Stack "}}
end
block_836 --> phi_835
block_837 --> phi_835
subgraph block_836["Block 836"]
	direction TB
	b836_22["eff__618 push_u64"]
end
branch_834 --> block_836
subgraph branch_834["Branch 834"]
	br834_14["cond__617 m_isMemory64"]

end
branch_830 --> branch_834
subgraph branch_830["Branch 830"]
	br830_9["cond__625 u8.!="]

end
block_838 --> branch_830
subgraph block_838["Block 838"]
	direction TB
	b838_14["cond__617 m_isMemory64"]
	b838_9["cond__625 u8.!="]
	b838_8["arg__627 u8.&"]
	b838_5["arg__628 0"]
	b838_6["arg__630 0x40u8"]
	b838_0[/"Start"\\]
	b838_9 --> b838_14
	b838_8 --> b838_9
	b838_5 --> b838_8
	b838_6 --> b838_5
	b838_0 --> b838_6
end
subgraph block_837["Block 837"]
	direction TB
	b837_18["eff__621 push_u32"]
end
branch_834 --> block_837
subgraph block_833["Block 833"]
	direction TB
	b833_4["memindex__632 0u"]
end
branch_830 --> block_833

</pre>`;
window.traces["MEMORY_SIZE"]["unLEM"] = ''
window.traces["MEMORY_SIZE"]["unLEM"] += `<pre class='graph'>---
config:
  layout: elk
---
graph TD
	1[\\"Finish"/]
	12 -. Codeptr .-> 1
	23 -. Stack .-> 1
	0 -. Trap Locals Globals Tables Memory Extra .-> 1
	0[/"Start"\\]
	23{{"Sϕ Stack "}}
	14 --> 23
	22 --> 23
	18 --> 23
	18["eff__621 push_u32"]
	16 --> 18
	0 -. Stack .-> 18
	16["r mach_memorySize32"]
	11 --> 16
	11{"memindex ϕ"}
	9 --> 11
	10 --> 11
	4 --> 11
	4["memindex__632 0u"]
	10["memindex__626 imm_readULEB32"]
	3 -. Codeptr .-> 10
	3["flags imm_readU8"]
	0 -. Codeptr .-> 3
	9["cond__625 u8.!="]
	8 --> 9
	5 --> 9
	5["arg__628 0"]
	8["arg__627 u8.&"]
	3 --> 8
	6 --> 8
	6["arg__630 0x40u8"]
	22["eff__618 push_u64"]
	20 --> 22
	0 -. Stack .-> 22
	20["r mach_memorySize64"]
	11 --> 20
	14["cond__617 m_isMemory64"]
	11 --> 14
	12{{"Sϕ Codeptr "}}
	9 --> 12
	10 --> 12
	3 --> 12
</pre>`;
window.traces["MEMORY_SIZE"]["unlem_schedule"] = ''
window.traces["MEMORY_SIZE"]["unlem_schedule"] += `<pre class=''>def flags = imm_readU8();
def arg__630 : byte = 0x40u8;
def arg__627 = u8.&(flags, arg__630);
def arg__628 : byte = 0;
def cond__625 = u8.!=(arg__627, arg__628);
var memindex: u32;
if (cond__625) {
	def memindex__626 = imm_readULEB32();
} else {
	def memindex__632 : u32 = 0u;
}
// phis: memindex <- memindex__626; memindex <- memindex__632; 
def cond__617 = m_isMemory64(memindex);
if (cond__617) {
	def r = mach_memorySize64(memindex);
	def eff__618 = push_u64(r);
} else {
	def r = mach_memorySize32(memindex);
	def eff__621 = push_u32(r);
}
// phis: 
</pre>`;
window.traces["MEMORY_SIZE"]["unlem_scheduler"] = ''
window.traces["MEMORY_SIZE"]["unlem_scheduler"] += `<pre class='graph'>graph TD
subgraph block_839["Block 839"]
	direction TB
	b839_1[\\"Finish"/]
	b839_10["memindex__626 imm_readULEB32"]
	b839_3["flags imm_readU8"]
	b839_22["eff__618 push_u64"]
	b839_18["eff__621 push_u32"]
	b839_20["r mach_memorySize64"]
	b839_16["r mach_memorySize32"]
	b839_4["memindex__632 0u"]
	b839_10 --> b839_1
	b839_3 --> b839_10
	b839_22 --> b839_3
	b839_18 --> b839_22
	b839_20 --> b839_18
	b839_16 --> b839_20
	b839_4 --> b839_16
end
phi_841 --> block_839
subgraph phi_841["Phi 841"]
	p841_11{"memindex ϕ"}
	p841_11{"memindex ϕ"}
	p841_11{"memindex ϕ"}
	p841_12{{"Sϕ Codeptr "}}
end
block_842 --> phi_841
block_843 --> phi_841
subgraph block_842["Block 842"]
	direction TB
	b842_10["memindex__626 imm_readULEB32"]
	b842_3["flags imm_readU8"]
	b842_3 --> b842_10
end
phi_845 --> block_842
subgraph phi_845["Phi 845"]
	p845_23{{"Sϕ Stack "}}
end
block_846 --> phi_845
block_847 --> phi_845
subgraph block_846["Block 846"]
	direction TB
	b846_22["eff__618 push_u64"]
end
branch_844 --> block_846
subgraph branch_844["Branch 844"]
	br844_14["cond__617 m_isMemory64"]

end
branch_840 --> branch_844
subgraph branch_840["Branch 840"]
	br840_9["cond__625 u8.!="]

end
block_848 --> branch_840
subgraph block_848["Block 848"]
	direction TB
	b848_14["cond__617 m_isMemory64"]
	b848_9["cond__625 u8.!="]
	b848_8["arg__627 u8.&"]
	b848_5["arg__628 0"]
	b848_6["arg__630 0x40u8"]
	b848_0[/"Start"\\]
	b848_9 --> b848_14
	b848_8 --> b848_9
	b848_5 --> b848_8
	b848_6 --> b848_5
	b848_0 --> b848_6
end
subgraph block_847["Block 847"]
	direction TB
	b847_18["eff__621 push_u32"]
end
branch_844 --> block_847
subgraph block_843["Block 843"]
	direction TB
	b843_4["memindex__632 0u"]
end
branch_840 --> block_843

</pre>`;
window.traces["MEMORY_SIZE"]["unlem_pretty"] = ''
window.traces["MEMORY_SIZE"]["unlem_pretty"] += `<pre class=''>def flags = imm_readU8();
var memindex: u32;
if (u8.!=(u8.&(flags, 0x40u8), 0)) {
	memindex = imm_readULEB32();
} else {
	memindex = 0u;
}
def cond = m_isMemory64(memindex);
if (cond) {
	def r = mach_memorySize64(memindex);
	push_u64(r);
} else {
	def r = mach_memorySize32(memindex);
	push_u32(r);
}
</pre>`;
window.traces["MEMORY_SIZE"]["constUnLEM"] = ''
window.traces["MEMORY_SIZE"]["constUnLEM"] += `<pre class='graph'>---
config:
  layout: elk
---
graph TD
	1[\\"Finish"/]
	12 -. Codeptr .-> 1
	23 -. Stack .-> 1
	0 -. Trap Locals Globals Tables Memory Extra .-> 1
	0[/"Start"\\]
	23{{"Sϕ Stack "}}
	14 --> 23
	22 --> 23
	18 --> 23
	18["eff__621 push_u32"]
	16 --> 18
	0 -. Stack .-> 18
	16["r mach_memorySize32"]
	11 --> 16
	11{"memindex ϕ"}
	9 --> 11
	10 --> 11
	4 --> 11
	4["memindex__632 0u"]
	10["memindex__626 imm_readULEB32"]
	3 -. Codeptr .-> 10
	3["flags imm_readU8"]
	0 -. Codeptr .-> 3
	9["cond__625 u8.!="]
	8 --> 9
	5 --> 9
	5["arg__628 0"]
	8["arg__627 u8.&"]
	3 --> 8
	6 --> 8
	6["arg__630 0x40u8"]
	22["eff__618 push_u64"]
	20 --> 22
	0 -. Stack .-> 22
	20["r mach_memorySize64"]
	11 --> 20
	14["cond__617 m_isMemory64"]
	11 --> 14
	12{{"Sϕ Codeptr "}}
	9 --> 12
	10 --> 12
	3 --> 12
</pre>`;
window.traces["MEMORY_SIZE"]["chooseMerge"] = ''
window.traces["MEMORY_SIZE"]["chooseMerge"] += `<pre class='graph'>---
config:
  layout: elk
---
graph TD
	1[\\"Finish"/]
	12 -. Codeptr .-> 1
	23 -. Stack .-> 1
	0 -. Trap Locals Globals Tables Memory Extra .-> 1
	0[/"Start"\\]
	23{{"Sϕ Stack "}}
	14 --> 23
	22 --> 23
	18 --> 23
	18["eff__621 push_u32"]
	16 --> 18
	0 -. Stack .-> 18
	16["r mach_memorySize32"]
	11 --> 16
	11{"memindex ϕ"}
	9 --> 11
	10 --> 11
	4 --> 11
	4["memindex__632 0u"]
	10["memindex__626 imm_readULEB32"]
	3 -. Codeptr .-> 10
	3["flags imm_readU8"]
	0 -. Codeptr .-> 3
	9["cond__625 u8.!="]
	8 --> 9
	5 --> 9
	5["arg__628 0"]
	8["arg__627 u8.&"]
	3 --> 8
	6 --> 8
	6["arg__630 0x40u8"]
	22["eff__618 push_u64"]
	20 --> 22
	0 -. Stack .-> 22
	20["r mach_memorySize64"]
	11 --> 20
	14["cond__617 m_isMemory64"]
	11 --> 14
	12{{"Sϕ Codeptr "}}
	9 --> 12
	10 --> 12
	3 --> 12
</pre>`;
window.traces["MEMORY_SIZE"]["scheduled"] = ''
window.traces["MEMORY_SIZE"]["scheduled"] += `<pre class=''>def flags = imm_readU8();
def arg__630 : byte = 0x40u8;
def arg__627 = u8.&(flags, arg__630);
def arg__628 : byte = 0;
def cond__625 = u8.!=(arg__627, arg__628);
var memindex: u32;
if (cond__625) {
	def memindex__626 = imm_readULEB32();
} else {
	def memindex__632 : u32 = 0u;
}
// phis: memindex <- memindex__626; memindex <- memindex__632; 
def cond__617 = m_isMemory64(memindex);
if (cond__617) {
	def r = mach_memorySize64(memindex);
	def eff__618 = push_u64(r);
} else {
	def r = mach_memorySize32(memindex);
	def eff__621 = push_u32(r);
}
// phis: 
</pre>`;
window.traces["MEMORY_SIZE"]["pretty"] = ''
window.traces["MEMORY_SIZE"]["pretty"] += `<pre class=''>def flags = imm_readU8();
var memindex: u32;
if (u8.!=(u8.&(flags, 0x40u8), 0)) {
	memindex = imm_readULEB32();
} else {
	memindex = 0u;
}
def cond = m_isMemory64(memindex);
if (cond) {
	def r = mach_memorySize64(memindex);
	push_u64(r);
} else {
	def r = mach_memorySize32(memindex);
	push_u32(r);
}
</pre>`;
window.traces["MEMORY_GROW"] = {}
window.traces["MEMORY_GROW"]["parsed"] = ''
window.traces["MEMORY_GROW"]["parsed"] += `<pre class=''>def flags = imm_readU8();
def memindex : u32 = 0u;
def arg__646 : byte = 0;
def arg__648 : byte = 0x40u8;
def arg__647 = (flags);
def arg__645 = u8.&(arg__647, arg__648);
def cond__643 = u8.!=(arg__645, arg__646);
if (cond__643) {
	def memindex__644 = imm_readULEB32();
}
// phis: memindex <- memindex__644; 
def arg__642 = (memindex);
def cond__633 = m_isMemory64(arg__642);
if (cond__633) {
	def val = pop_u64();
	def arg__637 = (val);
	def arg__636 = (memindex);
	def r = mach_memoryGrow64(arg__636, arg__637);
	def arg__635 = (r);
	def eff__634 = push_u64(arg__635);
} else {
	def val = pop_u32();
	def arg__641 = (val);
	def arg__640 = (memindex);
	def r = mach_memoryGrow32(arg__640, arg__641);
	def arg__639 = (r);
	def eff__638 = push_u32(arg__639);
}
// phis: 
</pre>`;
window.traces["MEMORY_GROW"]["raw"] = ''
window.traces["MEMORY_GROW"]["raw"] += `<pre class='graph'>---
config:
  layout: elk
---
graph TD
	1[\\"Finish"/]
	12 -. Codeptr .-> 1
	27 -. Stack .-> 1
	0 -. Trap Locals Globals Tables Memory Extra .-> 1
	0[/"Start"\\]
	27{{"Sϕ Stack "}}
	14 --> 27
	26 --> 27
	20 --> 27
	20["eff__638 push_u32"]
	18 --> 20
	15 -. Stack .-> 20
	15["val pop_u32"]
	0 -. Stack .-> 15
	18["r mach_memoryGrow32"]
	11 --> 18
	15 --> 18
	11{"memindex ϕ"}
	9 --> 11
	10 --> 11
	4 --> 11
	4["memindex__649 0u"]
	10["memindex__644 imm_readULEB32"]
	3 -. Codeptr .-> 10
	3["flags imm_readU8"]
	0 -. Codeptr .-> 3
	9["cond__643 u8.!="]
	8 --> 9
	5 --> 9
	5["arg__646 0"]
	8["arg__645 u8.&"]
	3 --> 8
	6 --> 8
	6["arg__648 0x40u8"]
	26["eff__634 push_u64"]
	24 --> 26
	21 -. Stack .-> 26
	21["val pop_u64"]
	0 -. Stack .-> 21
	24["r mach_memoryGrow64"]
	11 --> 24
	21 --> 24
	14["cond__633 m_isMemory64"]
	11 --> 14
	12{{"Sϕ Codeptr "}}
	9 --> 12
	10 --> 12
	3 --> 12
</pre>`;
window.traces["MEMORY_GROW"]["overloadOps"] = ''
window.traces["MEMORY_GROW"]["overloadOps"] += `<pre class='graph'>---
config:
  layout: elk
---
graph TD
	1[\\"Finish"/]
	12 -. Codeptr .-> 1
	27 -. Stack .-> 1
	0 -. Trap Locals Globals Tables Memory Extra .-> 1
	0[/"Start"\\]
	27{{"Sϕ Stack "}}
	14 --> 27
	26 --> 27
	20 --> 27
	20["eff__638 push_u32"]
	18 --> 20
	15 -. Stack .-> 20
	15["val pop_u32"]
	0 -. Stack .-> 15
	18["r mach_memoryGrow32"]
	11 --> 18
	15 --> 18
	11{"memindex ϕ"}
	9 --> 11
	10 --> 11
	4 --> 11
	4["memindex__650 0u"]
	10["memindex__644 imm_readULEB32"]
	3 -. Codeptr .-> 10
	3["flags imm_readU8"]
	0 -. Codeptr .-> 3
	9["cond__643 u8.!="]
	8 --> 9
	5 --> 9
	5["arg__646 0"]
	8["arg__645 u8.&"]
	3 --> 8
	6 --> 8
	6["arg__648 0x40u8"]
	26["eff__634 push_u64"]
	24 --> 26
	21 -. Stack .-> 26
	21["val pop_u64"]
	0 -. Stack .-> 21
	24["r mach_memoryGrow64"]
	11 --> 24
	21 --> 24
	14["cond__633 m_isMemory64"]
	11 --> 14
	12{{"Sϕ Codeptr "}}
	9 --> 12
	10 --> 12
	3 --> 12
</pre>`;
window.traces["MEMORY_GROW"]["addAbstractions"] = ''
window.traces["MEMORY_GROW"]["addAbstractions"] += `<pre class='graph'>---
config:
  layout: elk
---
graph TD
	1[\\"Finish"/]
	12 -. Codeptr .-> 1
	27 -. Stack .-> 1
	0 -. Trap Locals Globals Tables Memory Extra .-> 1
	0[/"Start"\\]
	27{{"Sϕ Stack "}}
	14 --> 27
	26 --> 27
	20 --> 27
	20["eff__638 push_u32"]
	18 --> 20
	15 -. Stack .-> 20
	15["val pop_u32"]
	0 -. Stack .-> 15
	18["r mach_memoryGrow32"]
	11 --> 18
	15 --> 18
	11{"memindex ϕ"}
	9 --> 11
	10 --> 11
	4 --> 11
	4["memindex__650 0u"]
	10["memindex__644 imm_readULEB32"]
	3 -. Codeptr .-> 10
	3["flags imm_readU8"]
	0 -. Codeptr .-> 3
	9["cond__643 u8.!="]
	8 --> 9
	5 --> 9
	5["arg__646 0"]
	8["arg__645 u8.&"]
	3 --> 8
	6 --> 8
	6["arg__648 0x40u8"]
	26["eff__634 push_u64"]
	24 --> 26
	21 -. Stack .-> 26
	21["val pop_u64"]
	0 -. Stack .-> 21
	24["r mach_memoryGrow64"]
	11 --> 24
	21 --> 24
	14["cond__633 m_isMemory64"]
	11 --> 14
	12{{"Sϕ Codeptr "}}
	9 --> 12
	10 --> 12
	3 --> 12
</pre>`;
window.traces["MEMORY_GROW"]["schedulerMermaid"] = ''
window.traces["MEMORY_GROW"]["schedulerMermaid"] += `<pre class='graph'>graph TD
subgraph block_849["Block 849"]
	direction TB
	b849_1[\\"Finish"/]
	b849_10["memindex__644 imm_readULEB32"]
	b849_3["flags imm_readU8"]
	b849_26["eff__634 push_u64"]
	b849_20["eff__638 push_u32"]
	b849_24["r mach_memoryGrow64"]
	b849_21["val pop_u64"]
	b849_18["r mach_memoryGrow32"]
	b849_15["val pop_u32"]
	b849_4["memindex__650 0u"]
	b849_10 --> b849_1
	b849_3 --> b849_10
	b849_26 --> b849_3
	b849_20 --> b849_26
	b849_24 --> b849_20
	b849_21 --> b849_24
	b849_18 --> b849_21
	b849_15 --> b849_18
	b849_4 --> b849_15
end
phi_851 --> block_849
subgraph phi_851["Phi 851"]
	p851_11{"memindex ϕ"}
	p851_11{"memindex ϕ"}
	p851_11{"memindex ϕ"}
	p851_12{{"Sϕ Codeptr "}}
end
block_852 --> phi_851
block_853 --> phi_851
subgraph block_852["Block 852"]
	direction TB
	b852_10["memindex__644 imm_readULEB32"]
	b852_3["flags imm_readU8"]
	b852_3 --> b852_10
end
phi_855 --> block_852
subgraph phi_855["Phi 855"]
	p855_27{{"Sϕ Stack "}}
end
block_856 --> phi_855
block_857 --> phi_855
subgraph block_856["Block 856"]
	direction TB
end
branch_854 --> block_856
subgraph branch_854["Branch 854"]
	br854_14["cond__633 m_isMemory64"]

end
branch_850 --> branch_854
subgraph branch_850["Branch 850"]
	br850_9["cond__643 u8.!="]

end
block_858 --> branch_850
subgraph block_858["Block 858"]
	direction TB
	b858_14["cond__633 m_isMemory64"]
	b858_9["cond__643 u8.!="]
	b858_8["arg__645 u8.&"]
	b858_5["arg__646 0"]
	b858_6["arg__648 0x40u8"]
	b858_0[/"Start"\\]
	b858_9 --> b858_14
	b858_8 --> b858_9
	b858_5 --> b858_8
	b858_6 --> b858_5
	b858_0 --> b858_6
end
subgraph block_857["Block 857"]
	direction TB
end
branch_854 --> block_857
subgraph block_853["Block 853"]
	direction TB
	b853_4["memindex__650 0u"]
end
branch_850 --> block_853

</pre>`;
window.traces["MEMORY_GROW"]["unLEM"] = ''
window.traces["MEMORY_GROW"]["unLEM"] += `<pre class='graph'>---
config:
  layout: elk
---
graph TD
	1[\\"Finish"/]
	12 -. Codeptr .-> 1
	27 -. Stack .-> 1
	0 -. Trap Locals Globals Tables Memory Extra .-> 1
	0[/"Start"\\]
	27{{"Sϕ Stack "}}
	14 --> 27
	26 --> 27
	20 --> 27
	20["eff__638 push_u32"]
	18 --> 20
	15 -. Stack .-> 20
	15["val pop_u32"]
	0 -. Stack .-> 15
	18["r mach_memoryGrow32"]
	11 --> 18
	15 --> 18
	11{"memindex ϕ"}
	9 --> 11
	10 --> 11
	4 --> 11
	4["memindex__650 0u"]
	10["memindex__644 imm_readULEB32"]
	3 -. Codeptr .-> 10
	3["flags imm_readU8"]
	0 -. Codeptr .-> 3
	9["cond__643 u8.!="]
	8 --> 9
	5 --> 9
	5["arg__646 0"]
	8["arg__645 u8.&"]
	3 --> 8
	6 --> 8
	6["arg__648 0x40u8"]
	26["eff__634 push_u64"]
	24 --> 26
	21 -. Stack .-> 26
	21["val pop_u64"]
	0 -. Stack .-> 21
	24["r mach_memoryGrow64"]
	11 --> 24
	21 --> 24
	14["cond__633 m_isMemory64"]
	11 --> 14
	12{{"Sϕ Codeptr "}}
	9 --> 12
	10 --> 12
	3 --> 12
</pre>`;
window.traces["MEMORY_GROW"]["unlem_schedule"] = ''
window.traces["MEMORY_GROW"]["unlem_schedule"] += `<pre class=''>def flags = imm_readU8();
def arg__648 : byte = 0x40u8;
def arg__645 = u8.&(flags, arg__648);
def arg__646 : byte = 0;
def cond__643 = u8.!=(arg__645, arg__646);
var memindex: u32;
if (cond__643) {
	def memindex__644 = imm_readULEB32();
} else {
	def memindex__650 : u32 = 0u;
}
// phis: memindex <- memindex__644; memindex <- memindex__650; 
def cond__633 = m_isMemory64(memindex);
if (cond__633) {
	def val = pop_u64();
	def r = mach_memoryGrow64(memindex, val);
	def eff__634 = push_u64(r);
} else {
	def val = pop_u32();
	def r = mach_memoryGrow32(memindex, val);
	def eff__638 = push_u32(r);
}
// phis: 
</pre>`;
window.traces["MEMORY_GROW"]["unlem_scheduler"] = ''
window.traces["MEMORY_GROW"]["unlem_scheduler"] += `<pre class='graph'>graph TD
subgraph block_859["Block 859"]
	direction TB
	b859_1[\\"Finish"/]
	b859_10["memindex__644 imm_readULEB32"]
	b859_3["flags imm_readU8"]
	b859_26["eff__634 push_u64"]
	b859_20["eff__638 push_u32"]
	b859_24["r mach_memoryGrow64"]
	b859_21["val pop_u64"]
	b859_18["r mach_memoryGrow32"]
	b859_15["val pop_u32"]
	b859_4["memindex__650 0u"]
	b859_10 --> b859_1
	b859_3 --> b859_10
	b859_26 --> b859_3
	b859_20 --> b859_26
	b859_24 --> b859_20
	b859_21 --> b859_24
	b859_18 --> b859_21
	b859_15 --> b859_18
	b859_4 --> b859_15
end
phi_861 --> block_859
subgraph phi_861["Phi 861"]
	p861_11{"memindex ϕ"}
	p861_11{"memindex ϕ"}
	p861_11{"memindex ϕ"}
	p861_12{{"Sϕ Codeptr "}}
end
block_862 --> phi_861
block_863 --> phi_861
subgraph block_862["Block 862"]
	direction TB
	b862_10["memindex__644 imm_readULEB32"]
	b862_3["flags imm_readU8"]
	b862_3 --> b862_10
end
phi_865 --> block_862
subgraph phi_865["Phi 865"]
	p865_27{{"Sϕ Stack "}}
end
block_866 --> phi_865
block_867 --> phi_865
subgraph block_866["Block 866"]
	direction TB
end
branch_864 --> block_866
subgraph branch_864["Branch 864"]
	br864_14["cond__633 m_isMemory64"]

end
branch_860 --> branch_864
subgraph branch_860["Branch 860"]
	br860_9["cond__643 u8.!="]

end
block_868 --> branch_860
subgraph block_868["Block 868"]
	direction TB
	b868_14["cond__633 m_isMemory64"]
	b868_9["cond__643 u8.!="]
	b868_8["arg__645 u8.&"]
	b868_5["arg__646 0"]
	b868_6["arg__648 0x40u8"]
	b868_0[/"Start"\\]
	b868_9 --> b868_14
	b868_8 --> b868_9
	b868_5 --> b868_8
	b868_6 --> b868_5
	b868_0 --> b868_6
end
subgraph block_867["Block 867"]
	direction TB
end
branch_864 --> block_867
subgraph block_863["Block 863"]
	direction TB
	b863_4["memindex__650 0u"]
end
branch_860 --> block_863

</pre>`;
window.traces["MEMORY_GROW"]["unlem_pretty"] = ''
window.traces["MEMORY_GROW"]["unlem_pretty"] += `<pre class=''>def flags = imm_readU8();
var memindex: u32;
if (u8.!=(u8.&(flags, 0x40u8), 0)) {
	memindex = imm_readULEB32();
} else {
	memindex = 0u;
}
def cond = m_isMemory64(memindex);
if (cond) {
	def val = pop_u64();
	def r = mach_memoryGrow64(memindex, val);
	push_u64(r);
} else {
	def val = pop_u32();
	def r = mach_memoryGrow32(memindex, val);
	push_u32(r);
}
</pre>`;
window.traces["MEMORY_GROW"]["constUnLEM"] = ''
window.traces["MEMORY_GROW"]["constUnLEM"] += `<pre class='graph'>---
config:
  layout: elk
---
graph TD
	1[\\"Finish"/]
	12 -. Codeptr .-> 1
	27 -. Stack .-> 1
	0 -. Trap Locals Globals Tables Memory Extra .-> 1
	0[/"Start"\\]
	27{{"Sϕ Stack "}}
	14 --> 27
	26 --> 27
	20 --> 27
	20["eff__638 push_u32"]
	18 --> 20
	15 -. Stack .-> 20
	15["val pop_u32"]
	0 -. Stack .-> 15
	18["r mach_memoryGrow32"]
	11 --> 18
	15 --> 18
	11{"memindex ϕ"}
	9 --> 11
	10 --> 11
	4 --> 11
	4["memindex__650 0u"]
	10["memindex__644 imm_readULEB32"]
	3 -. Codeptr .-> 10
	3["flags imm_readU8"]
	0 -. Codeptr .-> 3
	9["cond__643 u8.!="]
	8 --> 9
	5 --> 9
	5["arg__646 0"]
	8["arg__645 u8.&"]
	3 --> 8
	6 --> 8
	6["arg__648 0x40u8"]
	26["eff__634 push_u64"]
	24 --> 26
	21 -. Stack .-> 26
	21["val pop_u64"]
	0 -. Stack .-> 21
	24["r mach_memoryGrow64"]
	11 --> 24
	21 --> 24
	14["cond__633 m_isMemory64"]
	11 --> 14
	12{{"Sϕ Codeptr "}}
	9 --> 12
	10 --> 12
	3 --> 12
</pre>`;
window.traces["MEMORY_GROW"]["chooseMerge"] = ''
window.traces["MEMORY_GROW"]["chooseMerge"] += `<pre class='graph'>---
config:
  layout: elk
---
graph TD
	1[\\"Finish"/]
	12 -. Codeptr .-> 1
	27 -. Stack .-> 1
	0 -. Trap Locals Globals Tables Memory Extra .-> 1
	0[/"Start"\\]
	27{{"Sϕ Stack "}}
	14 --> 27
	26 --> 27
	20 --> 27
	20["eff__638 push_u32"]
	18 --> 20
	15 -. Stack .-> 20
	15["val pop_u32"]
	0 -. Stack .-> 15
	18["r mach_memoryGrow32"]
	11 --> 18
	15 --> 18
	11{"memindex ϕ"}
	9 --> 11
	10 --> 11
	4 --> 11
	4["memindex__650 0u"]
	10["memindex__644 imm_readULEB32"]
	3 -. Codeptr .-> 10
	3["flags imm_readU8"]
	0 -. Codeptr .-> 3
	9["cond__643 u8.!="]
	8 --> 9
	5 --> 9
	5["arg__646 0"]
	8["arg__645 u8.&"]
	3 --> 8
	6 --> 8
	6["arg__648 0x40u8"]
	26["eff__634 push_u64"]
	24 --> 26
	21 -. Stack .-> 26
	21["val pop_u64"]
	0 -. Stack .-> 21
	24["r mach_memoryGrow64"]
	11 --> 24
	21 --> 24
	14["cond__633 m_isMemory64"]
	11 --> 14
	12{{"Sϕ Codeptr "}}
	9 --> 12
	10 --> 12
	3 --> 12
</pre>`;
window.traces["MEMORY_GROW"]["scheduled"] = ''
window.traces["MEMORY_GROW"]["scheduled"] += `<pre class=''>def flags = imm_readU8();
def arg__648 : byte = 0x40u8;
def arg__645 = u8.&(flags, arg__648);
def arg__646 : byte = 0;
def cond__643 = u8.!=(arg__645, arg__646);
var memindex: u32;
if (cond__643) {
	def memindex__644 = imm_readULEB32();
} else {
	def memindex__650 : u32 = 0u;
}
// phis: memindex <- memindex__644; memindex <- memindex__650; 
def cond__633 = m_isMemory64(memindex);
if (cond__633) {
	def val = pop_u64();
	def r = mach_memoryGrow64(memindex, val);
	def eff__634 = push_u64(r);
} else {
	def val = pop_u32();
	def r = mach_memoryGrow32(memindex, val);
	def eff__638 = push_u32(r);
}
// phis: 
</pre>`;
window.traces["MEMORY_GROW"]["pretty"] = ''
window.traces["MEMORY_GROW"]["pretty"] += `<pre class=''>def flags = imm_readU8();
var memindex: u32;
if (u8.!=(u8.&(flags, 0x40u8), 0)) {
	memindex = imm_readULEB32();
} else {
	memindex = 0u;
}
def cond = m_isMemory64(memindex);
if (cond) {
	def val = pop_u64();
	def r = mach_memoryGrow64(memindex, val);
	push_u64(r);
} else {
	def val = pop_u32();
	def r = mach_memoryGrow32(memindex, val);
	push_u32(r);
}
</pre>`;
window.traces["I32_CONST"] = {}
window.traces["I32_CONST"]["parsed"] = ''
window.traces["I32_CONST"]["parsed"] += `<pre class=''>def x = imm_readILEB32();
def arg__652 = (x);
def eff__651 = push_u32(arg__652);
</pre>`;
window.traces["I32_CONST"]["raw"] = ''
window.traces["I32_CONST"]["raw"] += `<pre class='graph'>---
config:
  layout: elk
---
graph TD
	1[\\"Finish"/]
	3 -. Codeptr .-> 1
	5 -. Stack .-> 1
	0 -. Trap Locals Globals Tables Memory Extra .-> 1
	0[/"Start"\\]
	5["eff__651 push_u32"]
	3 --> 5
	0 -. Stack .-> 5
	3["x imm_readILEB32"]
	0 -. Codeptr .-> 3
</pre>`;
window.traces["I32_CONST"]["overloadOps"] = ''
window.traces["I32_CONST"]["overloadOps"] += `<pre class='graph'>---
config:
  layout: elk
---
graph TD
	1[\\"Finish"/]
	3 -. Codeptr .-> 1
	5 -. Stack .-> 1
	0 -. Trap Locals Globals Tables Memory Extra .-> 1
	0[/"Start"\\]
	5["eff__651 push_u32"]
	3 --> 5
	0 -. Stack .-> 5
	3["x imm_readILEB32"]
	0 -. Codeptr .-> 3
</pre>`;
window.traces["I32_CONST"]["addAbstractions"] = ''
window.traces["I32_CONST"]["addAbstractions"] += `<pre class='graph'>---
config:
  layout: elk
---
graph TD
	1[\\"Finish"/]
	3 -. Codeptr .-> 1
	5 -. Stack .-> 1
	0 -. Trap Locals Globals Tables Memory Extra .-> 1
	0[/"Start"\\]
	5["eff__651 push_u32"]
	6 --> 5
	0 -. Stack .-> 5
	6["abs__653 lift_u32"]
	3 --> 6
	3["x imm_readILEB32"]
	0 -. Codeptr .-> 3
</pre>`;
window.traces["I32_CONST"]["schedulerMermaid"] = ''
window.traces["I32_CONST"]["schedulerMermaid"] += `<pre class='graph'>graph TD
subgraph block_869["Block 869"]
	direction TB
	b869_1[\\"Finish"/]
	b869_5["eff__651 push_u32"]
	b869_6["abs__653 lift_u32"]
	b869_3["x imm_readILEB32"]
	b869_0[/"Start"\\]
	b869_5 --> b869_1
	b869_6 --> b869_5
	b869_3 --> b869_6
	b869_0 --> b869_3
end

</pre>`;
window.traces["I32_CONST"]["unLEM"] = ''
window.traces["I32_CONST"]["unLEM"] += `<pre class='graph'>---
config:
  layout: elk
---
graph TD
	1[\\"Finish"/]
	3 -. Codeptr .-> 1
	5 -. Stack .-> 1
	0 -. Trap Locals Globals Tables Memory Extra .-> 1
	0[/"Start"\\]
	5["eff__651 push_u32"]
	6 --> 5
	0 -. Stack .-> 5
	6["abs__653 lift_u32"]
	3 --> 6
	3["x imm_readILEB32"]
	0 -. Codeptr .-> 3
</pre>`;
window.traces["I32_CONST"]["unlem_schedule"] = ''
window.traces["I32_CONST"]["unlem_schedule"] += `<pre class=''>def x = imm_readILEB32();
def abs__653 = lift_u32(x);
def eff__651 = push_u32(abs__653);
</pre>`;
window.traces["I32_CONST"]["unlem_scheduler"] = ''
window.traces["I32_CONST"]["unlem_scheduler"] += `<pre class='graph'>graph TD
subgraph block_870["Block 870"]
	direction TB
	b870_1[\\"Finish"/]
	b870_5["eff__651 push_u32"]
	b870_6["abs__653 lift_u32"]
	b870_3["x imm_readILEB32"]
	b870_0[/"Start"\\]
	b870_5 --> b870_1
	b870_6 --> b870_5
	b870_3 --> b870_6
	b870_0 --> b870_3
end

</pre>`;
window.traces["I32_CONST"]["unlem_pretty"] = ''
window.traces["I32_CONST"]["unlem_pretty"] += `<pre class=''>def x = imm_readILEB32();
push_u32(lift_u32(x));
</pre>`;
window.traces["I32_CONST"]["constUnLEM"] = ''
window.traces["I32_CONST"]["constUnLEM"] += `<pre class='graph'>---
config:
  layout: elk
---
graph TD
	1[\\"Finish"/]
	3 -. Codeptr .-> 1
	5 -. Stack .-> 1
	0 -. Trap Locals Globals Tables Memory Extra .-> 1
	0[/"Start"\\]
	5["eff__651 push_u32"]
	6 --> 5
	0 -. Stack .-> 5
	6["abs__653 lift_u32"]
	3 --> 6
	3["x imm_readILEB32"]
	0 -. Codeptr .-> 3
</pre>`;
window.traces["I32_CONST"]["chooseMerge"] = ''
window.traces["I32_CONST"]["chooseMerge"] += `<pre class='graph'>---
config:
  layout: elk
---
graph TD
	1[\\"Finish"/]
	3 -. Codeptr .-> 1
	5 -. Stack .-> 1
	0 -. Trap Locals Globals Tables Memory Extra .-> 1
	0[/"Start"\\]
	5["eff__651 push_u32"]
	6 --> 5
	0 -. Stack .-> 5
	6["abs__653 lift_u32"]
	3 --> 6
	3["x imm_readILEB32"]
	0 -. Codeptr .-> 3
</pre>`;
window.traces["I32_CONST"]["scheduled"] = ''
window.traces["I32_CONST"]["scheduled"] += `<pre class=''>def x = imm_readILEB32();
def abs__653 = lift_u32(x);
def eff__651 = push_u32(abs__653);
</pre>`;
window.traces["I32_CONST"]["pretty"] = ''
window.traces["I32_CONST"]["pretty"] += `<pre class=''>def x = imm_readILEB32();
push_u32(lift_u32(x));
</pre>`;
window.traces["I64_CONST"] = {}
window.traces["I64_CONST"]["parsed"] = ''
window.traces["I64_CONST"]["parsed"] += `<pre class=''>def x = imm_readILEB64();
def arg__655 = (x);
def eff__654 = push_u64(arg__655);
</pre>`;
window.traces["I64_CONST"]["raw"] = ''
window.traces["I64_CONST"]["raw"] += `<pre class='graph'>---
config:
  layout: elk
---
graph TD
	1[\\"Finish"/]
	3 -. Codeptr .-> 1
	5 -. Stack .-> 1
	0 -. Trap Locals Globals Tables Memory Extra .-> 1
	0[/"Start"\\]
	5["eff__654 push_u64"]
	3 --> 5
	0 -. Stack .-> 5
	3["x imm_readILEB64"]
	0 -. Codeptr .-> 3
</pre>`;
window.traces["I64_CONST"]["overloadOps"] = ''
window.traces["I64_CONST"]["overloadOps"] += `<pre class='graph'>---
config:
  layout: elk
---
graph TD
	1[\\"Finish"/]
	3 -. Codeptr .-> 1
	5 -. Stack .-> 1
	0 -. Trap Locals Globals Tables Memory Extra .-> 1
	0[/"Start"\\]
	5["eff__654 push_u64"]
	3 --> 5
	0 -. Stack .-> 5
	3["x imm_readILEB64"]
	0 -. Codeptr .-> 3
</pre>`;
window.traces["I64_CONST"]["addAbstractions"] = ''
window.traces["I64_CONST"]["addAbstractions"] += `<pre class='graph'>---
config:
  layout: elk
---
graph TD
	1[\\"Finish"/]
	3 -. Codeptr .-> 1
	5 -. Stack .-> 1
	0 -. Trap Locals Globals Tables Memory Extra .-> 1
	0[/"Start"\\]
	5["eff__654 push_u64"]
	6 --> 5
	0 -. Stack .-> 5
	6["abs__656 lift_u64"]
	3 --> 6
	3["x imm_readILEB64"]
	0 -. Codeptr .-> 3
</pre>`;
window.traces["I64_CONST"]["schedulerMermaid"] = ''
window.traces["I64_CONST"]["schedulerMermaid"] += `<pre class='graph'>graph TD
subgraph block_871["Block 871"]
	direction TB
	b871_1[\\"Finish"/]
	b871_5["eff__654 push_u64"]
	b871_6["abs__656 lift_u64"]
	b871_3["x imm_readILEB64"]
	b871_0[/"Start"\\]
	b871_5 --> b871_1
	b871_6 --> b871_5
	b871_3 --> b871_6
	b871_0 --> b871_3
end

</pre>`;
window.traces["I64_CONST"]["unLEM"] = ''
window.traces["I64_CONST"]["unLEM"] += `<pre class='graph'>---
config:
  layout: elk
---
graph TD
	1[\\"Finish"/]
	3 -. Codeptr .-> 1
	5 -. Stack .-> 1
	0 -. Trap Locals Globals Tables Memory Extra .-> 1
	0[/"Start"\\]
	5["eff__654 push_u64"]
	6 --> 5
	0 -. Stack .-> 5
	6["abs__656 lift_u64"]
	3 --> 6
	3["x imm_readILEB64"]
	0 -. Codeptr .-> 3
</pre>`;
window.traces["I64_CONST"]["unlem_schedule"] = ''
window.traces["I64_CONST"]["unlem_schedule"] += `<pre class=''>def x = imm_readILEB64();
def abs__656 = lift_u64(x);
def eff__654 = push_u64(abs__656);
</pre>`;
window.traces["I64_CONST"]["unlem_scheduler"] = ''
window.traces["I64_CONST"]["unlem_scheduler"] += `<pre class='graph'>graph TD
subgraph block_872["Block 872"]
	direction TB
	b872_1[\\"Finish"/]
	b872_5["eff__654 push_u64"]
	b872_6["abs__656 lift_u64"]
	b872_3["x imm_readILEB64"]
	b872_0[/"Start"\\]
	b872_5 --> b872_1
	b872_6 --> b872_5
	b872_3 --> b872_6
	b872_0 --> b872_3
end

</pre>`;
window.traces["I64_CONST"]["unlem_pretty"] = ''
window.traces["I64_CONST"]["unlem_pretty"] += `<pre class=''>def x = imm_readILEB64();
push_u64(lift_u64(x));
</pre>`;
window.traces["I64_CONST"]["constUnLEM"] = ''
window.traces["I64_CONST"]["constUnLEM"] += `<pre class='graph'>---
config:
  layout: elk
---
graph TD
	1[\\"Finish"/]
	3 -. Codeptr .-> 1
	5 -. Stack .-> 1
	0 -. Trap Locals Globals Tables Memory Extra .-> 1
	0[/"Start"\\]
	5["eff__654 push_u64"]
	6 --> 5
	0 -. Stack .-> 5
	6["abs__656 lift_u64"]
	3 --> 6
	3["x imm_readILEB64"]
	0 -. Codeptr .-> 3
</pre>`;
window.traces["I64_CONST"]["chooseMerge"] = ''
window.traces["I64_CONST"]["chooseMerge"] += `<pre class='graph'>---
config:
  layout: elk
---
graph TD
	1[\\"Finish"/]
	3 -. Codeptr .-> 1
	5 -. Stack .-> 1
	0 -. Trap Locals Globals Tables Memory Extra .-> 1
	0[/"Start"\\]
	5["eff__654 push_u64"]
	6 --> 5
	0 -. Stack .-> 5
	6["abs__656 lift_u64"]
	3 --> 6
	3["x imm_readILEB64"]
	0 -. Codeptr .-> 3
</pre>`;
window.traces["I64_CONST"]["scheduled"] = ''
window.traces["I64_CONST"]["scheduled"] += `<pre class=''>def x = imm_readILEB64();
def abs__656 = lift_u64(x);
def eff__654 = push_u64(abs__656);
</pre>`;
window.traces["I64_CONST"]["pretty"] = ''
window.traces["I64_CONST"]["pretty"] += `<pre class=''>def x = imm_readILEB64();
push_u64(lift_u64(x));
</pre>`;
window.traces["F32_CONST"] = {}
window.traces["F32_CONST"]["parsed"] = ''
window.traces["F32_CONST"]["parsed"] += `<pre class=''>def x = imm_readU32();
def arg__659 = (x);
def arg__658 = f32_reinterpret_u32(arg__659);
def eff__657 = push_f32(arg__658);
</pre>`;
window.traces["F32_CONST"]["raw"] = ''
window.traces["F32_CONST"]["raw"] += `<pre class='graph'>---
config:
  layout: elk
---
graph TD
	1[\\"Finish"/]
	0 -. Codeptr Trap Locals Globals Tables Memory Extra .-> 1
	6 -. Stack .-> 1
	6["eff__657 push_f32"]
	5 --> 6
	0 -. Stack .-> 6
	0[/"Start"\\]
	5["arg__658 f32_reinterpret_u32"]
	3 --> 5
	3["x imm_readU32"]
</pre>`;
window.traces["F32_CONST"]["overloadOps"] = ''
window.traces["F32_CONST"]["overloadOps"] += `<pre class='graph'>---
config:
  layout: elk
---
graph TD
	1[\\"Finish"/]
	0 -. Codeptr Trap Locals Globals Tables Memory Extra .-> 1
	6 -. Stack .-> 1
	6["eff__657 push_f32"]
	5 --> 6
	0 -. Stack .-> 6
	0[/"Start"\\]
	5["arg__658 f32_reinterpret_u32"]
	3 --> 5
	3["x imm_readU32"]
</pre>`;
window.traces["F32_CONST"]["addAbstractions"] = ''
window.traces["F32_CONST"]["addAbstractions"] += `<pre class='graph'>---
config:
  layout: elk
---
graph TD
	1[\\"Finish"/]
	0 -. Codeptr Trap Locals Globals Tables Memory Extra .-> 1
	6 -. Stack .-> 1
	6["eff__657 push_f32"]
	5 --> 6
	0 -. Stack .-> 6
	0[/"Start"\\]
	5["arg__658 f32_reinterpret_u32"]
	7 --> 5
	7["abs__660 lift_u32"]
	3 --> 7
	3["x imm_readU32"]
</pre>`;
window.traces["F32_CONST"]["schedulerMermaid"] = ''
window.traces["F32_CONST"]["schedulerMermaid"] += `<pre class='graph'>graph TD
subgraph block_873["Block 873"]
	direction TB
	b873_1[\\"Finish"/]
	b873_6["eff__657 push_f32"]
	b873_5["arg__658 f32_reinterpret_u32"]
	b873_7["abs__660 lift_u32"]
	b873_3["x imm_readU32"]
	b873_0[/"Start"\\]
	b873_6 --> b873_1
	b873_5 --> b873_6
	b873_7 --> b873_5
	b873_3 --> b873_7
	b873_0 --> b873_3
end

</pre>`;
window.traces["F32_CONST"]["unLEM"] = ''
window.traces["F32_CONST"]["unLEM"] += `<pre class='graph'>---
config:
  layout: elk
---
graph TD
	1[\\"Finish"/]
	0 -. Codeptr Trap Locals Globals Tables Memory Extra .-> 1
	6 -. Stack .-> 1
	6["eff__657 push_f32"]
	5 --> 6
	0 -. Stack .-> 6
	0[/"Start"\\]
	5["arg__658 f32_reinterpret_u32"]
	7 --> 5
	7["abs__660 lift_u32"]
	3 --> 7
	3["x imm_readU32"]
</pre>`;
window.traces["F32_CONST"]["unlem_schedule"] = ''
window.traces["F32_CONST"]["unlem_schedule"] += `<pre class=''>def x = imm_readU32();
def abs__660 = lift_u32(x);
def arg__658 = f32_reinterpret_u32(abs__660);
def eff__657 = push_f32(arg__658);
</pre>`;
window.traces["F32_CONST"]["unlem_scheduler"] = ''
window.traces["F32_CONST"]["unlem_scheduler"] += `<pre class='graph'>graph TD
subgraph block_874["Block 874"]
	direction TB
	b874_1[\\"Finish"/]
	b874_6["eff__657 push_f32"]
	b874_5["arg__658 f32_reinterpret_u32"]
	b874_7["abs__660 lift_u32"]
	b874_3["x imm_readU32"]
	b874_0[/"Start"\\]
	b874_6 --> b874_1
	b874_5 --> b874_6
	b874_7 --> b874_5
	b874_3 --> b874_7
	b874_0 --> b874_3
end

</pre>`;
window.traces["F32_CONST"]["unlem_pretty"] = ''
window.traces["F32_CONST"]["unlem_pretty"] += `<pre class=''>def x = imm_readU32();
def arg = f32_reinterpret_u32(lift_u32(x));
push_f32(arg);
</pre>`;
window.traces["F32_CONST"]["constUnLEM"] = ''
window.traces["F32_CONST"]["constUnLEM"] += `<pre class='graph'>---
config:
  layout: elk
---
graph TD
	1[\\"Finish"/]
	0 -. Codeptr Trap Locals Globals Tables Memory Extra .-> 1
	6 -. Stack .-> 1
	6["eff__657 push_f32"]
	5 --> 6
	0 -. Stack .-> 6
	0[/"Start"\\]
	5["arg__658 f32_reinterpret_u32"]
	7 --> 5
	7["abs__660 lift_u32"]
	3 --> 7
	3["x imm_readU32"]
</pre>`;
window.traces["F32_CONST"]["chooseMerge"] = ''
window.traces["F32_CONST"]["chooseMerge"] += `<pre class='graph'>---
config:
  layout: elk
---
graph TD
	1[\\"Finish"/]
	0 -. Codeptr Trap Locals Globals Tables Memory Extra .-> 1
	6 -. Stack .-> 1
	6["eff__657 push_f32"]
	5 --> 6
	0 -. Stack .-> 6
	0[/"Start"\\]
	5["arg__658 f32_reinterpret_u32"]
	7 --> 5
	7["abs__660 lift_u32"]
	3 --> 7
	3["x imm_readU32"]
</pre>`;
window.traces["F32_CONST"]["scheduled"] = ''
window.traces["F32_CONST"]["scheduled"] += `<pre class=''>def x = imm_readU32();
def abs__660 = lift_u32(x);
def arg__658 = f32_reinterpret_u32(abs__660);
def eff__657 = push_f32(arg__658);
</pre>`;
window.traces["F32_CONST"]["pretty"] = ''
window.traces["F32_CONST"]["pretty"] += `<pre class=''>def x = imm_readU32();
def arg = f32_reinterpret_u32(lift_u32(x));
push_f32(arg);
</pre>`;
window.traces["F64_CONST"] = {}
window.traces["F64_CONST"]["parsed"] = ''
window.traces["F64_CONST"]["parsed"] += `<pre class=''>def x = imm_readU64();
def arg__663 = (x);
def arg__662 = f64_reinterpret_u64(arg__663);
def eff__661 = push_f64(arg__662);
</pre>`;
window.traces["F64_CONST"]["raw"] = ''
window.traces["F64_CONST"]["raw"] += `<pre class='graph'>---
config:
  layout: elk
---
graph TD
	1[\\"Finish"/]
	0 -. Codeptr Trap Locals Globals Tables Memory Extra .-> 1
	6 -. Stack .-> 1
	6["eff__661 push_f64"]
	5 --> 6
	0 -. Stack .-> 6
	0[/"Start"\\]
	5["arg__662 f64_reinterpret_u64"]
	3 --> 5
	3["x imm_readU64"]
</pre>`;
window.traces["F64_CONST"]["overloadOps"] = ''
window.traces["F64_CONST"]["overloadOps"] += `<pre class='graph'>---
config:
  layout: elk
---
graph TD
	1[\\"Finish"/]
	0 -. Codeptr Trap Locals Globals Tables Memory Extra .-> 1
	6 -. Stack .-> 1
	6["eff__661 push_f64"]
	5 --> 6
	0 -. Stack .-> 6
	0[/"Start"\\]
	5["arg__662 f64_reinterpret_u64"]
	3 --> 5
	3["x imm_readU64"]
</pre>`;
window.traces["F64_CONST"]["addAbstractions"] = ''
window.traces["F64_CONST"]["addAbstractions"] += `<pre class='graph'>---
config:
  layout: elk
---
graph TD
	1[\\"Finish"/]
	0 -. Codeptr Trap Locals Globals Tables Memory Extra .-> 1
	6 -. Stack .-> 1
	6["eff__661 push_f64"]
	5 --> 6
	0 -. Stack .-> 6
	0[/"Start"\\]
	5["arg__662 f64_reinterpret_u64"]
	7 --> 5
	7["abs__664 lift_u64"]
	3 --> 7
	3["x imm_readU64"]
</pre>`;
window.traces["F64_CONST"]["schedulerMermaid"] = ''
window.traces["F64_CONST"]["schedulerMermaid"] += `<pre class='graph'>graph TD
subgraph block_875["Block 875"]
	direction TB
	b875_1[\\"Finish"/]
	b875_6["eff__661 push_f64"]
	b875_5["arg__662 f64_reinterpret_u64"]
	b875_7["abs__664 lift_u64"]
	b875_3["x imm_readU64"]
	b875_0[/"Start"\\]
	b875_6 --> b875_1
	b875_5 --> b875_6
	b875_7 --> b875_5
	b875_3 --> b875_7
	b875_0 --> b875_3
end

</pre>`;
window.traces["F64_CONST"]["unLEM"] = ''
window.traces["F64_CONST"]["unLEM"] += `<pre class='graph'>---
config:
  layout: elk
---
graph TD
	1[\\"Finish"/]
	0 -. Codeptr Trap Locals Globals Tables Memory Extra .-> 1
	6 -. Stack .-> 1
	6["eff__661 push_f64"]
	5 --> 6
	0 -. Stack .-> 6
	0[/"Start"\\]
	5["arg__662 f64_reinterpret_u64"]
	7 --> 5
	7["abs__664 lift_u64"]
	3 --> 7
	3["x imm_readU64"]
</pre>`;
window.traces["F64_CONST"]["unlem_schedule"] = ''
window.traces["F64_CONST"]["unlem_schedule"] += `<pre class=''>def x = imm_readU64();
def abs__664 = lift_u64(x);
def arg__662 = f64_reinterpret_u64(abs__664);
def eff__661 = push_f64(arg__662);
</pre>`;
window.traces["F64_CONST"]["unlem_scheduler"] = ''
window.traces["F64_CONST"]["unlem_scheduler"] += `<pre class='graph'>graph TD
subgraph block_876["Block 876"]
	direction TB
	b876_1[\\"Finish"/]
	b876_6["eff__661 push_f64"]
	b876_5["arg__662 f64_reinterpret_u64"]
	b876_7["abs__664 lift_u64"]
	b876_3["x imm_readU64"]
	b876_0[/"Start"\\]
	b876_6 --> b876_1
	b876_5 --> b876_6
	b876_7 --> b876_5
	b876_3 --> b876_7
	b876_0 --> b876_3
end

</pre>`;
window.traces["F64_CONST"]["unlem_pretty"] = ''
window.traces["F64_CONST"]["unlem_pretty"] += `<pre class=''>def x = imm_readU64();
def arg = f64_reinterpret_u64(lift_u64(x));
push_f64(arg);
</pre>`;
window.traces["F64_CONST"]["constUnLEM"] = ''
window.traces["F64_CONST"]["constUnLEM"] += `<pre class='graph'>---
config:
  layout: elk
---
graph TD
	1[\\"Finish"/]
	0 -. Codeptr Trap Locals Globals Tables Memory Extra .-> 1
	6 -. Stack .-> 1
	6["eff__661 push_f64"]
	5 --> 6
	0 -. Stack .-> 6
	0[/"Start"\\]
	5["arg__662 f64_reinterpret_u64"]
	7 --> 5
	7["abs__664 lift_u64"]
	3 --> 7
	3["x imm_readU64"]
</pre>`;
window.traces["F64_CONST"]["chooseMerge"] = ''
window.traces["F64_CONST"]["chooseMerge"] += `<pre class='graph'>---
config:
  layout: elk
---
graph TD
	1[\\"Finish"/]
	0 -. Codeptr Trap Locals Globals Tables Memory Extra .-> 1
	6 -. Stack .-> 1
	6["eff__661 push_f64"]
	5 --> 6
	0 -. Stack .-> 6
	0[/"Start"\\]
	5["arg__662 f64_reinterpret_u64"]
	7 --> 5
	7["abs__664 lift_u64"]
	3 --> 7
	3["x imm_readU64"]
</pre>`;
window.traces["F64_CONST"]["scheduled"] = ''
window.traces["F64_CONST"]["scheduled"] += `<pre class=''>def x = imm_readU64();
def abs__664 = lift_u64(x);
def arg__662 = f64_reinterpret_u64(abs__664);
def eff__661 = push_f64(arg__662);
</pre>`;
window.traces["F64_CONST"]["pretty"] = ''
window.traces["F64_CONST"]["pretty"] += `<pre class=''>def x = imm_readU64();
def arg = f64_reinterpret_u64(lift_u64(x));
push_f64(arg);
</pre>`;
window.traces["I32_EQZ"] = {}
window.traces["I32_EQZ"]["parsed"] = ''
window.traces["I32_EQZ"]["parsed"] += `<pre class=''>def a = pop_u32();
def arg__671 : u32 = 0;
def arg__670 = (a);
def cond__665 = u32.==(arg__670, arg__671);
if (cond__665) {
	def arg__667 : u32 = 1;
	def eff__666 = push_u32(arg__667);
} else {
	def arg__669 : u32 = 0;
	def eff__668 = push_u32(arg__669);
}
// phis: 
</pre>`;
window.traces["I32_EQZ"]["raw"] = ''
window.traces["I32_EQZ"]["raw"] += `<pre class='graph'>---
config:
  layout: elk
---
graph TD
	1[\\"Finish"/]
	0 -. Codeptr Trap Locals Globals Tables Memory Extra .-> 1
	10 -. Stack .-> 1
	10{{"Sϕ Stack "}}
	6 --> 10
	9 --> 10
	7 --> 10
	7["eff__668 push_u32"]
	4 --> 7
	3 -. Stack .-> 7
	3["a pop_u32"]
	0 -. Stack .-> 3
	0[/"Start"\\]
	4["arg__671 0"]
	9["eff__666 push_u32"]
	8 --> 9
	3 -. Stack .-> 9
	8["arg__667 1"]
	6["cond__665 u32.=="]
	3 --> 6
	4 --> 6
</pre>`;
window.traces["I32_EQZ"]["overloadOps"] = ''
window.traces["I32_EQZ"]["overloadOps"] += `<pre class='graph'>---
config:
  layout: elk
---
graph TD
	1[\\"Finish"/]
	0 -. Codeptr Trap Locals Globals Tables Memory Extra .-> 1
	10 -. Stack .-> 1
	10{{"Sϕ Stack "}}
	6 --> 10
	9 --> 10
	7 --> 10
	7["eff__668 push_u32"]
	4 --> 7
	3 -. Stack .-> 7
	3["a pop_u32"]
	0 -. Stack .-> 3
	0[/"Start"\\]
	4["arg__671 0"]
	9["eff__666 push_u32"]
	8 --> 9
	3 -. Stack .-> 9
	8["arg__667 1"]
	6["cond__665 U32_equals"]
	3 --> 6
	4 --> 6
</pre>`;
window.traces["I32_EQZ"]["addAbstractions"] = ''
window.traces["I32_EQZ"]["addAbstractions"] += `<pre class='graph'>---
config:
  layout: elk
---
graph TD
	1[\\"Finish"/]
	0 -. Codeptr Trap Locals Globals Tables Memory Extra .-> 1
	10 -. Stack .-> 1
	10{{"Sϕ Stack "}}
	6 --> 10
	9 --> 10
	7 --> 10
	7["eff__668 push_u32"]
	13 --> 7
	3 -. Stack .-> 7
	3["a pop_u32"]
	0 -. Stack .-> 3
	0[/"Start"\\]
	13["abs__674 lift_u32"]
	4 --> 13
	4["arg__671 0"]
	9["eff__666 push_u32"]
	12 --> 9
	3 -. Stack .-> 9
	12["abs__673 lift_u32"]
	8 --> 12
	8["arg__667 1"]
	6["cond__665 U32_equals"]
	3 --> 6
	11 --> 6
	11["abs__672 lift_u32"]
	4 --> 11
</pre>`;
window.traces["I32_EQZ"]["schedulerMermaid"] = ''
window.traces["I32_EQZ"]["schedulerMermaid"] += `<pre class='graph'>graph TD
subgraph block_877["Block 877"]
	direction TB
	b877_1[\\"Finish"/]
	b877_9["eff__666 push_u32"]
	b877_7["eff__668 push_u32"]
	b877_3["a pop_u32"]
	b877_12["abs__673 lift_u32"]
	b877_13["abs__674 lift_u32"]
	b877_8["arg__667 1"]
	b877_9 --> b877_1
	b877_7 --> b877_9
	b877_3 --> b877_7
	b877_12 --> b877_3
	b877_13 --> b877_12
	b877_8 --> b877_13
end
phi_879 --> block_877
subgraph phi_879["Phi 879"]
	p879_10{{"Sϕ Stack "}}
end
block_880 --> phi_879
block_881 --> phi_879
subgraph block_880["Block 880"]
	direction TB
	b880_9["eff__666 push_u32"]
end
branch_878 --> block_880
subgraph branch_878["Branch 878"]
	br878_6["cond__665 U32_equals"]

end
block_882 --> branch_878
subgraph block_882["Block 882"]
	direction TB
	b882_6["cond__665 U32_equals"]
	b882_11["abs__672 lift_u32"]
	b882_4["arg__671 0"]
	b882_0[/"Start"\\]
	b882_11 --> b882_6
	b882_4 --> b882_11
	b882_0 --> b882_4
end
subgraph block_881["Block 881"]
	direction TB
	b881_7["eff__668 push_u32"]
end
branch_878 --> block_881

</pre>`;
window.traces["I32_EQZ"]["unLEM"] = ''
window.traces["I32_EQZ"]["unLEM"] += `<pre class='graph'>---
config:
  layout: elk
---
graph TD
	1[\\"Finish"/]
	0 -. Codeptr Trap Locals Globals Tables Memory Extra .-> 1
	10 -. Stack .-> 1
	10{{"Sϕ Stack "}}
	18 --> 10
	21 --> 10
	19 --> 10
	19{{"Sϕ Stack "}}
	16 --> 19
	9 --> 19
	7 --> 19
	7["eff__668 push_u32"]
	13 --> 7
	3 -. Stack .-> 7
	3["a pop_u32"]
	0 -. Stack .-> 3
	0[/"Start"\\]
	13["abs__674 lift_u32"]
	4 --> 13
	4["arg__671 0"]
	9["eff__666 push_u32"]
	12 --> 9
	3 -. Stack .-> 9
	12["abs__673 lift_u32"]
	8 --> 12
	8["arg__667 1"]
	16["mt__675 U32_maybeTrue"]
	6 --> 16
	6["cond__665 U32_equals"]
	3 --> 6
	11 --> 6
	11["abs__672 lift_u32"]
	4 --> 11
	21["eff_push__679 push_u32"]
	20 --> 21
	3 -. Stack .-> 21
	20["merge__678 merge_u"]
	12 --> 20
	13 --> 20
	18["mb__677 bool.&&"]
	16 --> 18
	17 --> 18
	17["mf__676 U32_maybeFalse"]
	6 --> 17
</pre>`;
window.traces["I32_EQZ"]["unlem_schedule"] = ''
window.traces["I32_EQZ"]["unlem_schedule"] += `<pre class=''>def a = pop_u32();
def arg__671 : u32 = 0;
def abs__672 = lift_u32(arg__671);
def cond__665 = U32_equals(a, abs__672);
def mt__675 = U32_maybeTrue(cond__665);
def mf__676 = U32_maybeFalse(cond__665);
def mb__677 = bool.&&(mt__675, mf__676);
if (mb__677) {
	def arg__667 : u32 = 1;
	def abs__673 = lift_u32(arg__667);
	def abs__674 = lift_u32(arg__671);
	def merge__678 = merge_u(abs__673, abs__674);
	def eff_push__679 = push_u32(merge__678);
} else {
	if (mt__675) {
		def arg__667 : u32 = 1;
		def abs__673 = lift_u32(arg__667);
		def eff__666 = push_u32(abs__673);
	} else {
		def abs__674 = lift_u32(arg__671);
		def eff__668 = push_u32(abs__674);
	}
// phis: 
}
// phis: 
</pre>`;
window.traces["I32_EQZ"]["unlem_scheduler"] = ''
window.traces["I32_EQZ"]["unlem_scheduler"] += `<pre class='graph'>graph TD
subgraph block_883["Block 883"]
	direction TB
	b883_1[\\"Finish"/]
	b883_21["eff_push__679 push_u32"]
	b883_20["merge__678 merge_u"]
	b883_21 --> b883_1
	b883_20 --> b883_21
end
phi_885 --> block_883
subgraph phi_885["Phi 885"]
	p885_10{{"Sϕ Stack "}}
end
block_886 --> phi_885
block_887 --> phi_885
subgraph block_886["Block 886"]
	direction TB
	b886_21["eff_push__679 push_u32"]
	b886_20["merge__678 merge_u"]
	b886_20 --> b886_21
end
phi_894 --> block_886
subgraph phi_894["Phi 894"]
	p894_19{{"Sϕ Stack "}}
end
block_895 --> phi_894
block_896 --> phi_894
subgraph block_895["Block 895"]
	direction TB
end
branch_893 --> block_895
subgraph branch_893["Branch 893"]
	br893_16["mt__675 U32_maybeTrue"]

end
branch_884 --> branch_893
subgraph branch_884["Branch 884"]
	br884_18["mb__677 bool.&&"]

end
block_892 --> branch_884
subgraph block_892["Block 892"]
	direction TB
	b892_18["mb__677 bool.&&"]
	b892_16["mt__675 U32_maybeTrue"]
	b892_17["mf__676 U32_maybeFalse"]
	b892_9["eff__666 push_u32"]
	b892_7["eff__668 push_u32"]
	b892_6["cond__665 U32_equals"]
	b892_12["abs__673 lift_u32"]
	b892_13["abs__674 lift_u32"]
	b892_3["a pop_u32"]
	b892_11["abs__672 lift_u32"]
	b892_8["arg__667 1"]
	b892_4["arg__671 0"]
	b892_0[/"Start"\\]
	b892_16 --> b892_18
	b892_17 --> b892_16
	b892_9 --> b892_17
	b892_7 --> b892_9
	b892_6 --> b892_7
	b892_12 --> b892_6
	b892_13 --> b892_12
	b892_3 --> b892_13
	b892_11 --> b892_3
	b892_8 --> b892_11
	b892_4 --> b892_8
	b892_0 --> b892_4
end
subgraph block_896["Block 896"]
	direction TB
end
branch_893 --> block_896
subgraph block_887["Block 887"]
	direction TB
end
phi_889 --> block_887
subgraph phi_889["Phi 889"]
	p889_19{{"Sϕ Stack "}}
end
block_890 --> phi_889
block_891 --> phi_889
subgraph block_890["Block 890"]
	direction TB
end
branch_888 --> block_890
subgraph branch_888["Branch 888"]
	br888_16["mt__675 U32_maybeTrue"]

end
branch_884 --> branch_888
subgraph block_891["Block 891"]
	direction TB
end
branch_888 --> block_891

</pre>`;
window.traces["I32_EQZ"]["unlem_pretty"] = ''
window.traces["I32_EQZ"]["unlem_pretty"] += `<pre class=''>def a = pop_u32();
def mt = U32_maybeTrue(U32_equals(a, lift_u32(0)));
def mf = U32_maybeFalse(U32_equals(a, lift_u32(0)));
if (bool.&&(mt, mf)) {
	push_u32(merge_u(lift_u32(1), lift_u32(0)));
} else {
	if (mt) {
		push_u32(lift_u32(1));
	} else {
		push_u32(lift_u32(0));
	}
}
</pre>`;
window.traces["I32_EQZ"]["constUnLEM"] = ''
window.traces["I32_EQZ"]["constUnLEM"] += `<pre class='graph'>---
config:
  layout: elk
---
graph TD
	1[\\"Finish"/]
	0 -. Codeptr Trap Locals Globals Tables Memory Extra .-> 1
	10 -. Stack .-> 1
	10["eff_push__679 push_u32"]
	20 --> 10
	3 -. Stack .-> 10
	3["a pop_u32"]
	0 -. Stack .-> 3
	0[/"Start"\\]
	20["merge__678 merge_u"]
	12 --> 20
	13 --> 20
	13["abs__674 lift_u32"]
	4 --> 13
	4["arg__671 0"]
	12["abs__673 lift_u32"]
	8 --> 12
	8["arg__667 1"]
</pre>`;
window.traces["I32_EQZ"]["chooseMerge"] = ''
window.traces["I32_EQZ"]["chooseMerge"] += `<pre class='graph'>---
config:
  layout: elk
---
graph TD
	1[\\"Finish"/]
	0 -. Codeptr Trap Locals Globals Tables Memory Extra .-> 1
	10 -. Stack .-> 1
	10["eff_push__679 push_u32"]
	12 --> 10
	3 -. Stack .-> 10
	3["a pop_u32"]
	0 -. Stack .-> 3
	0[/"Start"\\]
	12["abs__673 lift_u32"]
	8 --> 12
	8["arg__667 1"]
</pre>`;
window.traces["I32_EQZ"]["scheduled"] = ''
window.traces["I32_EQZ"]["scheduled"] += `<pre class=''>def arg__667 : u32 = 1;
def abs__673 = lift_u32(arg__667);
def a = pop_u32();
def eff_push__679 = push_u32(abs__673);
</pre>`;
window.traces["I32_EQZ"]["pretty"] = ''
window.traces["I32_EQZ"]["pretty"] += `<pre class=''>def a = pop_u32();
push_u32(lift_u32(1));
</pre>`;
window.traces["I32_EQ"] = {}
window.traces["I32_EQ"]["parsed"] = ''
window.traces["I32_EQ"]["parsed"] += `<pre class=''>def b = pop_u32();
def a = pop_u32();
def arg__686 = (b);
def arg__685 = (a);
def cond__680 = u32.==(arg__685, arg__686);
if (cond__680) {
	def arg__682 : u32 = 1;
	def eff__681 = push_u32(arg__682);
} else {
	def arg__684 : u32 = 0;
	def eff__683 = push_u32(arg__684);
}
// phis: 
</pre>`;
window.traces["I32_EQ"]["raw"] = ''
window.traces["I32_EQ"]["raw"] += `<pre class='graph'>---
config:
  layout: elk
---
graph TD
	1[\\"Finish"/]
	0 -. Codeptr Trap Locals Globals Tables Memory Extra .-> 1
	12 -. Stack .-> 1
	12{{"Sϕ Stack "}}
	7 --> 12
	11 --> 12
	9 --> 12
	9["eff__683 push_u32"]
	8 --> 9
	4 -. Stack .-> 9
	4["a pop_u32"]
	3 -. Stack .-> 4
	3["b pop_u32"]
	0 -. Stack .-> 3
	0[/"Start"\\]
	8["arg__684 0"]
	11["eff__681 push_u32"]
	10 --> 11
	4 -. Stack .-> 11
	10["arg__682 1"]
	7["cond__680 u32.=="]
	4 --> 7
	3 --> 7
</pre>`;
window.traces["I32_EQ"]["overloadOps"] = ''
window.traces["I32_EQ"]["overloadOps"] += `<pre class='graph'>---
config:
  layout: elk
---
graph TD
	1[\\"Finish"/]
	0 -. Codeptr Trap Locals Globals Tables Memory Extra .-> 1
	12 -. Stack .-> 1
	12{{"Sϕ Stack "}}
	7 --> 12
	11 --> 12
	9 --> 12
	9["eff__683 push_u32"]
	8 --> 9
	4 -. Stack .-> 9
	4["a pop_u32"]
	3 -. Stack .-> 4
	3["b pop_u32"]
	0 -. Stack .-> 3
	0[/"Start"\\]
	8["arg__684 0"]
	11["eff__681 push_u32"]
	10 --> 11
	4 -. Stack .-> 11
	10["arg__682 1"]
	7["cond__680 U32_equals"]
	4 --> 7
	3 --> 7
</pre>`;
window.traces["I32_EQ"]["addAbstractions"] = ''
window.traces["I32_EQ"]["addAbstractions"] += `<pre class='graph'>---
config:
  layout: elk
---
graph TD
	1[\\"Finish"/]
	0 -. Codeptr Trap Locals Globals Tables Memory Extra .-> 1
	12 -. Stack .-> 1
	12{{"Sϕ Stack "}}
	7 --> 12
	11 --> 12
	9 --> 12
	9["eff__683 push_u32"]
	14 --> 9
	4 -. Stack .-> 9
	4["a pop_u32"]
	3 -. Stack .-> 4
	3["b pop_u32"]
	0 -. Stack .-> 3
	0[/"Start"\\]
	14["abs__688 lift_u32"]
	8 --> 14
	8["arg__684 0"]
	11["eff__681 push_u32"]
	13 --> 11
	4 -. Stack .-> 11
	13["abs__687 lift_u32"]
	10 --> 13
	10["arg__682 1"]
	7["cond__680 U32_equals"]
	4 --> 7
	3 --> 7
</pre>`;
window.traces["I32_EQ"]["schedulerMermaid"] = ''
window.traces["I32_EQ"]["schedulerMermaid"] += `<pre class='graph'>graph TD
subgraph block_897["Block 897"]
	direction TB
	b897_1[\\"Finish"/]
	b897_11["eff__681 push_u32"]
	b897_9["eff__683 push_u32"]
	b897_4["a pop_u32"]
	b897_3["b pop_u32"]
	b897_13["abs__687 lift_u32"]
	b897_14["abs__688 lift_u32"]
	b897_10["arg__682 1"]
	b897_8["arg__684 0"]
	b897_11 --> b897_1
	b897_9 --> b897_11
	b897_4 --> b897_9
	b897_3 --> b897_4
	b897_13 --> b897_3
	b897_14 --> b897_13
	b897_10 --> b897_14
	b897_8 --> b897_10
end
phi_899 --> block_897
subgraph phi_899["Phi 899"]
	p899_12{{"Sϕ Stack "}}
end
block_900 --> phi_899
block_901 --> phi_899
subgraph block_900["Block 900"]
	direction TB
	b900_11["eff__681 push_u32"]
end
branch_898 --> block_900
subgraph branch_898["Branch 898"]
	br898_7["cond__680 U32_equals"]

end
block_902 --> branch_898
subgraph block_902["Block 902"]
	direction TB
	b902_7["cond__680 U32_equals"]
	b902_0[/"Start"\\]
	b902_0 --> b902_7
end
subgraph block_901["Block 901"]
	direction TB
	b901_9["eff__683 push_u32"]
end
branch_898 --> block_901

</pre>`;
window.traces["I32_EQ"]["unLEM"] = ''
window.traces["I32_EQ"]["unLEM"] += `<pre class='graph'>---
config:
  layout: elk
---
graph TD
	1[\\"Finish"/]
	0 -. Codeptr Trap Locals Globals Tables Memory Extra .-> 1
	12 -. Stack .-> 1
	12{{"Sϕ Stack "}}
	19 --> 12
	22 --> 12
	20 --> 12
	20{{"Sϕ Stack "}}
	17 --> 20
	11 --> 20
	9 --> 20
	9["eff__683 push_u32"]
	14 --> 9
	4 -. Stack .-> 9
	4["a pop_u32"]
	3 -. Stack .-> 4
	3["b pop_u32"]
	0 -. Stack .-> 3
	0[/"Start"\\]
	14["abs__688 lift_u32"]
	8 --> 14
	8["arg__684 0"]
	11["eff__681 push_u32"]
	13 --> 11
	4 -. Stack .-> 11
	13["abs__687 lift_u32"]
	10 --> 13
	10["arg__682 1"]
	17["mt__689 U32_maybeTrue"]
	7 --> 17
	7["cond__680 U32_equals"]
	4 --> 7
	3 --> 7
	22["eff_push__693 push_u32"]
	21 --> 22
	4 -. Stack .-> 22
	21["merge__692 merge_u"]
	13 --> 21
	14 --> 21
	19["mb__691 bool.&&"]
	17 --> 19
	18 --> 19
	18["mf__690 U32_maybeFalse"]
	7 --> 18
</pre>`;
window.traces["I32_EQ"]["unlem_schedule"] = ''
window.traces["I32_EQ"]["unlem_schedule"] += `<pre class=''>def b = pop_u32();
def a = pop_u32();
def cond__680 = U32_equals(a, b);
def mt__689 = U32_maybeTrue(cond__680);
def mf__690 = U32_maybeFalse(cond__680);
def mb__691 = bool.&&(mt__689, mf__690);
if (mb__691) {
	def arg__682 : u32 = 1;
	def abs__687 = lift_u32(arg__682);
	def arg__684 : u32 = 0;
	def abs__688 = lift_u32(arg__684);
	def merge__692 = merge_u(abs__687, abs__688);
	def eff_push__693 = push_u32(merge__692);
} else {
	if (mt__689) {
		def arg__682 : u32 = 1;
		def abs__687 = lift_u32(arg__682);
		def eff__681 = push_u32(abs__687);
	} else {
		def arg__684 : u32 = 0;
		def abs__688 = lift_u32(arg__684);
		def eff__683 = push_u32(abs__688);
	}
// phis: 
}
// phis: 
</pre>`;
window.traces["I32_EQ"]["unlem_scheduler"] = ''
window.traces["I32_EQ"]["unlem_scheduler"] += `<pre class='graph'>graph TD
subgraph block_903["Block 903"]
	direction TB
	b903_1[\\"Finish"/]
	b903_22["eff_push__693 push_u32"]
	b903_21["merge__692 merge_u"]
	b903_22 --> b903_1
	b903_21 --> b903_22
end
phi_905 --> block_903
subgraph phi_905["Phi 905"]
	p905_12{{"Sϕ Stack "}}
end
block_906 --> phi_905
block_907 --> phi_905
subgraph block_906["Block 906"]
	direction TB
	b906_22["eff_push__693 push_u32"]
	b906_21["merge__692 merge_u"]
	b906_21 --> b906_22
end
phi_914 --> block_906
subgraph phi_914["Phi 914"]
	p914_20{{"Sϕ Stack "}}
end
block_915 --> phi_914
block_916 --> phi_914
subgraph block_915["Block 915"]
	direction TB
end
branch_913 --> block_915
subgraph branch_913["Branch 913"]
	br913_17["mt__689 U32_maybeTrue"]

end
branch_904 --> branch_913
subgraph branch_904["Branch 904"]
	br904_19["mb__691 bool.&&"]

end
block_912 --> branch_904
subgraph block_912["Block 912"]
	direction TB
	b912_19["mb__691 bool.&&"]
	b912_17["mt__689 U32_maybeTrue"]
	b912_18["mf__690 U32_maybeFalse"]
	b912_11["eff__681 push_u32"]
	b912_9["eff__683 push_u32"]
	b912_7["cond__680 U32_equals"]
	b912_13["abs__687 lift_u32"]
	b912_14["abs__688 lift_u32"]
	b912_4["a pop_u32"]
	b912_3["b pop_u32"]
	b912_10["arg__682 1"]
	b912_8["arg__684 0"]
	b912_0[/"Start"\\]
	b912_17 --> b912_19
	b912_18 --> b912_17
	b912_11 --> b912_18
	b912_9 --> b912_11
	b912_7 --> b912_9
	b912_13 --> b912_7
	b912_14 --> b912_13
	b912_4 --> b912_14
	b912_3 --> b912_4
	b912_10 --> b912_3
	b912_8 --> b912_10
	b912_0 --> b912_8
end
subgraph block_916["Block 916"]
	direction TB
end
branch_913 --> block_916
subgraph block_907["Block 907"]
	direction TB
end
phi_909 --> block_907
subgraph phi_909["Phi 909"]
	p909_20{{"Sϕ Stack "}}
end
block_910 --> phi_909
block_911 --> phi_909
subgraph block_910["Block 910"]
	direction TB
end
branch_908 --> block_910
subgraph branch_908["Branch 908"]
	br908_17["mt__689 U32_maybeTrue"]

end
branch_904 --> branch_908
subgraph block_911["Block 911"]
	direction TB
end
branch_908 --> block_911

</pre>`;
window.traces["I32_EQ"]["unlem_pretty"] = ''
window.traces["I32_EQ"]["unlem_pretty"] += `<pre class=''>def b = pop_u32();
def a = pop_u32();
def mt = U32_maybeTrue(U32_equals(a, b));
def mf = U32_maybeFalse(U32_equals(a, b));
if (bool.&&(mt, mf)) {
	push_u32(merge_u(lift_u32(1), lift_u32(0)));
} else {
	if (mt) {
		push_u32(lift_u32(1));
	} else {
		push_u32(lift_u32(0));
	}
}
</pre>`;
window.traces["I32_EQ"]["constUnLEM"] = ''
window.traces["I32_EQ"]["constUnLEM"] += `<pre class='graph'>---
config:
  layout: elk
---
graph TD
	1[\\"Finish"/]
	0 -. Codeptr Trap Locals Globals Tables Memory Extra .-> 1
	12 -. Stack .-> 1
	12["eff_push__693 push_u32"]
	21 --> 12
	4 -. Stack .-> 12
	4["a pop_u32"]
	3 -. Stack .-> 4
	3["b pop_u32"]
	0 -. Stack .-> 3
	0[/"Start"\\]
	21["merge__692 merge_u"]
	13 --> 21
	14 --> 21
	14["abs__688 lift_u32"]
	8 --> 14
	8["arg__684 0"]
	13["abs__687 lift_u32"]
	10 --> 13
	10["arg__682 1"]
</pre>`;
window.traces["I32_EQ"]["chooseMerge"] = ''
window.traces["I32_EQ"]["chooseMerge"] += `<pre class='graph'>---
config:
  layout: elk
---
graph TD
	1[\\"Finish"/]
	0 -. Codeptr Trap Locals Globals Tables Memory Extra .-> 1
	12 -. Stack .-> 1
	12["eff_push__693 push_u32"]
	13 --> 12
	4 -. Stack .-> 12
	4["a pop_u32"]
	3 -. Stack .-> 4
	3["b pop_u32"]
	0 -. Stack .-> 3
	0[/"Start"\\]
	13["abs__687 lift_u32"]
	10 --> 13
	10["arg__682 1"]
</pre>`;
window.traces["I32_EQ"]["scheduled"] = ''
window.traces["I32_EQ"]["scheduled"] += `<pre class=''>def arg__682 : u32 = 1;
def abs__687 = lift_u32(arg__682);
def b = pop_u32();
def a = pop_u32();
def eff_push__693 = push_u32(abs__687);
</pre>`;
window.traces["I32_EQ"]["pretty"] = ''
window.traces["I32_EQ"]["pretty"] += `<pre class=''>def b = pop_u32();
def a = pop_u32();
push_u32(lift_u32(1));
</pre>`;
window.traces["I32_NE"] = {}
window.traces["I32_NE"]["parsed"] = ''
window.traces["I32_NE"]["parsed"] += `<pre class=''>def b = pop_u32();
def a = pop_u32();
def arg__700 = (b);
def arg__699 = (a);
def cond__694 = u32.!=(arg__699, arg__700);
if (cond__694) {
	def arg__696 : u32 = 1;
	def eff__695 = push_u32(arg__696);
} else {
	def arg__698 : u32 = 0;
	def eff__697 = push_u32(arg__698);
}
// phis: 
</pre>`;
window.traces["I32_NE"]["raw"] = ''
window.traces["I32_NE"]["raw"] += `<pre class='graph'>---
config:
  layout: elk
---
graph TD
	1[\\"Finish"/]
	0 -. Codeptr Trap Locals Globals Tables Memory Extra .-> 1
	12 -. Stack .-> 1
	12{{"Sϕ Stack "}}
	7 --> 12
	11 --> 12
	9 --> 12
	9["eff__697 push_u32"]
	8 --> 9
	4 -. Stack .-> 9
	4["a pop_u32"]
	3 -. Stack .-> 4
	3["b pop_u32"]
	0 -. Stack .-> 3
	0[/"Start"\\]
	8["arg__698 0"]
	11["eff__695 push_u32"]
	10 --> 11
	4 -. Stack .-> 11
	10["arg__696 1"]
	7["cond__694 u32.!="]
	4 --> 7
	3 --> 7
</pre>`;
window.traces["I32_NE"]["overloadOps"] = ''
window.traces["I32_NE"]["overloadOps"] += `<pre class='graph'>---
config:
  layout: elk
---
graph TD
	1[\\"Finish"/]
	0 -. Codeptr Trap Locals Globals Tables Memory Extra .-> 1
	12 -. Stack .-> 1
	12{{"Sϕ Stack "}}
	7 --> 12
	11 --> 12
	9 --> 12
	9["eff__697 push_u32"]
	8 --> 9
	4 -. Stack .-> 9
	4["a pop_u32"]
	3 -. Stack .-> 4
	3["b pop_u32"]
	0 -. Stack .-> 3
	0[/"Start"\\]
	8["arg__698 0"]
	11["eff__695 push_u32"]
	10 --> 11
	4 -. Stack .-> 11
	10["arg__696 1"]
	7["cond__694 U32_not_equals"]
	4 --> 7
	3 --> 7
</pre>`;
window.traces["I32_NE"]["addAbstractions"] = ''
window.traces["I32_NE"]["addAbstractions"] += `<pre class='graph'>---
config:
  layout: elk
---
graph TD
	1[\\"Finish"/]
	0 -. Codeptr Trap Locals Globals Tables Memory Extra .-> 1
	12 -. Stack .-> 1
	12{{"Sϕ Stack "}}
	7 --> 12
	11 --> 12
	9 --> 12
	9["eff__697 push_u32"]
	14 --> 9
	4 -. Stack .-> 9
	4["a pop_u32"]
	3 -. Stack .-> 4
	3["b pop_u32"]
	0 -. Stack .-> 3
	0[/"Start"\\]
	14["abs__702 lift_u32"]
	8 --> 14
	8["arg__698 0"]
	11["eff__695 push_u32"]
	13 --> 11
	4 -. Stack .-> 11
	13["abs__701 lift_u32"]
	10 --> 13
	10["arg__696 1"]
	7["cond__694 U32_not_equals"]
	4 --> 7
	3 --> 7
</pre>`;
window.traces["I32_NE"]["schedulerMermaid"] = ''
window.traces["I32_NE"]["schedulerMermaid"] += `<pre class='graph'>graph TD
subgraph block_917["Block 917"]
	direction TB
	b917_1[\\"Finish"/]
	b917_11["eff__695 push_u32"]
	b917_9["eff__697 push_u32"]
	b917_4["a pop_u32"]
	b917_3["b pop_u32"]
	b917_13["abs__701 lift_u32"]
	b917_14["abs__702 lift_u32"]
	b917_10["arg__696 1"]
	b917_8["arg__698 0"]
	b917_11 --> b917_1
	b917_9 --> b917_11
	b917_4 --> b917_9
	b917_3 --> b917_4
	b917_13 --> b917_3
	b917_14 --> b917_13
	b917_10 --> b917_14
	b917_8 --> b917_10
end
phi_919 --> block_917
subgraph phi_919["Phi 919"]
	p919_12{{"Sϕ Stack "}}
end
block_920 --> phi_919
block_921 --> phi_919
subgraph block_920["Block 920"]
	direction TB
	b920_11["eff__695 push_u32"]
end
branch_918 --> block_920
subgraph branch_918["Branch 918"]
	br918_7["cond__694 U32_not_equals"]

end
block_922 --> branch_918
subgraph block_922["Block 922"]
	direction TB
	b922_7["cond__694 U32_not_equals"]
	b922_0[/"Start"\\]
	b922_0 --> b922_7
end
subgraph block_921["Block 921"]
	direction TB
	b921_9["eff__697 push_u32"]
end
branch_918 --> block_921

</pre>`;
window.traces["I32_NE"]["unLEM"] = ''
window.traces["I32_NE"]["unLEM"] += `<pre class='graph'>---
config:
  layout: elk
---
graph TD
	1[\\"Finish"/]
	0 -. Codeptr Trap Locals Globals Tables Memory Extra .-> 1
	12 -. Stack .-> 1
	12{{"Sϕ Stack "}}
	19 --> 12
	22 --> 12
	20 --> 12
	20{{"Sϕ Stack "}}
	17 --> 20
	11 --> 20
	9 --> 20
	9["eff__697 push_u32"]
	14 --> 9
	4 -. Stack .-> 9
	4["a pop_u32"]
	3 -. Stack .-> 4
	3["b pop_u32"]
	0 -. Stack .-> 3
	0[/"Start"\\]
	14["abs__702 lift_u32"]
	8 --> 14
	8["arg__698 0"]
	11["eff__695 push_u32"]
	13 --> 11
	4 -. Stack .-> 11
	13["abs__701 lift_u32"]
	10 --> 13
	10["arg__696 1"]
	17["mt__703 U32_maybeTrue"]
	7 --> 17
	7["cond__694 U32_not_equals"]
	4 --> 7
	3 --> 7
	22["eff_push__707 push_u32"]
	21 --> 22
	4 -. Stack .-> 22
	21["merge__706 merge_u"]
	13 --> 21
	14 --> 21
	19["mb__705 bool.&&"]
	17 --> 19
	18 --> 19
	18["mf__704 U32_maybeFalse"]
	7 --> 18
</pre>`;
window.traces["I32_NE"]["unlem_schedule"] = ''
window.traces["I32_NE"]["unlem_schedule"] += `<pre class=''>def b = pop_u32();
def a = pop_u32();
def cond__694 = U32_not_equals(a, b);
def mt__703 = U32_maybeTrue(cond__694);
def mf__704 = U32_maybeFalse(cond__694);
def mb__705 = bool.&&(mt__703, mf__704);
if (mb__705) {
	def arg__696 : u32 = 1;
	def abs__701 = lift_u32(arg__696);
	def arg__698 : u32 = 0;
	def abs__702 = lift_u32(arg__698);
	def merge__706 = merge_u(abs__701, abs__702);
	def eff_push__707 = push_u32(merge__706);
} else {
	if (mt__703) {
		def arg__696 : u32 = 1;
		def abs__701 = lift_u32(arg__696);
		def eff__695 = push_u32(abs__701);
	} else {
		def arg__698 : u32 = 0;
		def abs__702 = lift_u32(arg__698);
		def eff__697 = push_u32(abs__702);
	}
// phis: 
}
// phis: 
</pre>`;
window.traces["I32_NE"]["unlem_scheduler"] = ''
window.traces["I32_NE"]["unlem_scheduler"] += `<pre class='graph'>graph TD
subgraph block_923["Block 923"]
	direction TB
	b923_1[\\"Finish"/]
	b923_22["eff_push__707 push_u32"]
	b923_21["merge__706 merge_u"]
	b923_22 --> b923_1
	b923_21 --> b923_22
end
phi_925 --> block_923
subgraph phi_925["Phi 925"]
	p925_12{{"Sϕ Stack "}}
end
block_926 --> phi_925
block_927 --> phi_925
subgraph block_926["Block 926"]
	direction TB
	b926_22["eff_push__707 push_u32"]
	b926_21["merge__706 merge_u"]
	b926_21 --> b926_22
end
phi_934 --> block_926
subgraph phi_934["Phi 934"]
	p934_20{{"Sϕ Stack "}}
end
block_935 --> phi_934
block_936 --> phi_934
subgraph block_935["Block 935"]
	direction TB
end
branch_933 --> block_935
subgraph branch_933["Branch 933"]
	br933_17["mt__703 U32_maybeTrue"]

end
branch_924 --> branch_933
subgraph branch_924["Branch 924"]
	br924_19["mb__705 bool.&&"]

end
block_932 --> branch_924
subgraph block_932["Block 932"]
	direction TB
	b932_19["mb__705 bool.&&"]
	b932_17["mt__703 U32_maybeTrue"]
	b932_18["mf__704 U32_maybeFalse"]
	b932_11["eff__695 push_u32"]
	b932_9["eff__697 push_u32"]
	b932_7["cond__694 U32_not_equals"]
	b932_13["abs__701 lift_u32"]
	b932_14["abs__702 lift_u32"]
	b932_4["a pop_u32"]
	b932_3["b pop_u32"]
	b932_10["arg__696 1"]
	b932_8["arg__698 0"]
	b932_0[/"Start"\\]
	b932_17 --> b932_19
	b932_18 --> b932_17
	b932_11 --> b932_18
	b932_9 --> b932_11
	b932_7 --> b932_9
	b932_13 --> b932_7
	b932_14 --> b932_13
	b932_4 --> b932_14
	b932_3 --> b932_4
	b932_10 --> b932_3
	b932_8 --> b932_10
	b932_0 --> b932_8
end
subgraph block_936["Block 936"]
	direction TB
end
branch_933 --> block_936
subgraph block_927["Block 927"]
	direction TB
end
phi_929 --> block_927
subgraph phi_929["Phi 929"]
	p929_20{{"Sϕ Stack "}}
end
block_930 --> phi_929
block_931 --> phi_929
subgraph block_930["Block 930"]
	direction TB
end
branch_928 --> block_930
subgraph branch_928["Branch 928"]
	br928_17["mt__703 U32_maybeTrue"]

end
branch_924 --> branch_928
subgraph block_931["Block 931"]
	direction TB
end
branch_928 --> block_931

</pre>`;
window.traces["I32_NE"]["unlem_pretty"] = ''
window.traces["I32_NE"]["unlem_pretty"] += `<pre class=''>def b = pop_u32();
def a = pop_u32();
def cond = U32_not_equals(a, b);
def mt = U32_maybeTrue(cond);
def mf = U32_maybeFalse(cond);
if (bool.&&(mt, mf)) {
	push_u32(merge_u(lift_u32(1), lift_u32(0)));
} else {
	if (mt) {
		push_u32(lift_u32(1));
	} else {
		push_u32(lift_u32(0));
	}
}
</pre>`;
window.traces["I32_NE"]["constUnLEM"] = ''
window.traces["I32_NE"]["constUnLEM"] += `<pre class='graph'>---
config:
  layout: elk
---
graph TD
	1[\\"Finish"/]
	0 -. Codeptr Trap Locals Globals Tables Memory Extra .-> 1
	12 -. Stack .-> 1
	12["eff_push__707 push_u32"]
	21 --> 12
	4 -. Stack .-> 12
	4["a pop_u32"]
	3 -. Stack .-> 4
	3["b pop_u32"]
	0 -. Stack .-> 3
	0[/"Start"\\]
	21["merge__706 merge_u"]
	13 --> 21
	14 --> 21
	14["abs__702 lift_u32"]
	8 --> 14
	8["arg__698 0"]
	13["abs__701 lift_u32"]
	10 --> 13
	10["arg__696 1"]
</pre>`;
window.traces["I32_NE"]["chooseMerge"] = ''
window.traces["I32_NE"]["chooseMerge"] += `<pre class='graph'>---
config:
  layout: elk
---
graph TD
	1[\\"Finish"/]
	0 -. Codeptr Trap Locals Globals Tables Memory Extra .-> 1
	12 -. Stack .-> 1
	12["eff_push__707 push_u32"]
	13 --> 12
	4 -. Stack .-> 12
	4["a pop_u32"]
	3 -. Stack .-> 4
	3["b pop_u32"]
	0 -. Stack .-> 3
	0[/"Start"\\]
	13["abs__701 lift_u32"]
	10 --> 13
	10["arg__696 1"]
</pre>`;
window.traces["I32_NE"]["scheduled"] = ''
window.traces["I32_NE"]["scheduled"] += `<pre class=''>def arg__696 : u32 = 1;
def abs__701 = lift_u32(arg__696);
def b = pop_u32();
def a = pop_u32();
def eff_push__707 = push_u32(abs__701);
</pre>`;
window.traces["I32_NE"]["pretty"] = ''
window.traces["I32_NE"]["pretty"] += `<pre class=''>def b = pop_u32();
def a = pop_u32();
push_u32(lift_u32(1));
</pre>`;
window.traces["I32_LT_S"] = {}
window.traces["I32_LT_S"]["parsed"] = ''
window.traces["I32_LT_S"]["parsed"] += `<pre class=''>def b = pop_u32();
def a = pop_u32();
def arg__714 = (b);
def arg__713 = (a);
def cond__708 = U32_lt_s(arg__713, arg__714);
if (cond__708) {
	def arg__710 : u32 = 1;
	def eff__709 = push_u32(arg__710);
} else {
	def arg__712 : u32 = 0;
	def eff__711 = push_u32(arg__712);
}
// phis: 
</pre>`;
window.traces["I32_LT_S"]["raw"] = ''
window.traces["I32_LT_S"]["raw"] += `<pre class='graph'>---
config:
  layout: elk
---
graph TD
	1[\\"Finish"/]
	0 -. Codeptr Trap Locals Globals Tables Memory Extra .-> 1
	12 -. Stack .-> 1
	12{{"Sϕ Stack "}}
	7 --> 12
	11 --> 12
	9 --> 12
	9["eff__711 push_u32"]
	8 --> 9
	4 -. Stack .-> 9
	4["a pop_u32"]
	3 -. Stack .-> 4
	3["b pop_u32"]
	0 -. Stack .-> 3
	0[/"Start"\\]
	8["arg__712 0"]
	11["eff__709 push_u32"]
	10 --> 11
	4 -. Stack .-> 11
	10["arg__710 1"]
	7["cond__708 U32_lt_s"]
	4 --> 7
	3 --> 7
</pre>`;
window.traces["I32_LT_S"]["overloadOps"] = ''
window.traces["I32_LT_S"]["overloadOps"] += `<pre class='graph'>---
config:
  layout: elk
---
graph TD
	1[\\"Finish"/]
	0 -. Codeptr Trap Locals Globals Tables Memory Extra .-> 1
	12 -. Stack .-> 1
	12{{"Sϕ Stack "}}
	7 --> 12
	11 --> 12
	9 --> 12
	9["eff__711 push_u32"]
	8 --> 9
	4 -. Stack .-> 9
	4["a pop_u32"]
	3 -. Stack .-> 4
	3["b pop_u32"]
	0 -. Stack .-> 3
	0[/"Start"\\]
	8["arg__712 0"]
	11["eff__709 push_u32"]
	10 --> 11
	4 -. Stack .-> 11
	10["arg__710 1"]
	7["cond__708 U32_lt_s"]
	4 --> 7
	3 --> 7
</pre>`;
window.traces["I32_LT_S"]["addAbstractions"] = ''
window.traces["I32_LT_S"]["addAbstractions"] += `<pre class='graph'>---
config:
  layout: elk
---
graph TD
	1[\\"Finish"/]
	0 -. Codeptr Trap Locals Globals Tables Memory Extra .-> 1
	12 -. Stack .-> 1
	12{{"Sϕ Stack "}}
	7 --> 12
	11 --> 12
	9 --> 12
	9["eff__711 push_u32"]
	14 --> 9
	4 -. Stack .-> 9
	4["a pop_u32"]
	3 -. Stack .-> 4
	3["b pop_u32"]
	0 -. Stack .-> 3
	0[/"Start"\\]
	14["abs__716 lift_u32"]
	8 --> 14
	8["arg__712 0"]
	11["eff__709 push_u32"]
	13 --> 11
	4 -. Stack .-> 11
	13["abs__715 lift_u32"]
	10 --> 13
	10["arg__710 1"]
	7["cond__708 U32_lt_s"]
	4 --> 7
	3 --> 7
</pre>`;
window.traces["I32_LT_S"]["schedulerMermaid"] = ''
window.traces["I32_LT_S"]["schedulerMermaid"] += `<pre class='graph'>graph TD
subgraph block_937["Block 937"]
	direction TB
	b937_1[\\"Finish"/]
	b937_11["eff__709 push_u32"]
	b937_9["eff__711 push_u32"]
	b937_4["a pop_u32"]
	b937_3["b pop_u32"]
	b937_13["abs__715 lift_u32"]
	b937_14["abs__716 lift_u32"]
	b937_10["arg__710 1"]
	b937_8["arg__712 0"]
	b937_11 --> b937_1
	b937_9 --> b937_11
	b937_4 --> b937_9
	b937_3 --> b937_4
	b937_13 --> b937_3
	b937_14 --> b937_13
	b937_10 --> b937_14
	b937_8 --> b937_10
end
phi_939 --> block_937
subgraph phi_939["Phi 939"]
	p939_12{{"Sϕ Stack "}}
end
block_940 --> phi_939
block_941 --> phi_939
subgraph block_940["Block 940"]
	direction TB
	b940_11["eff__709 push_u32"]
end
branch_938 --> block_940
subgraph branch_938["Branch 938"]
	br938_7["cond__708 U32_lt_s"]

end
block_942 --> branch_938
subgraph block_942["Block 942"]
	direction TB
	b942_7["cond__708 U32_lt_s"]
	b942_0[/"Start"\\]
	b942_0 --> b942_7
end
subgraph block_941["Block 941"]
	direction TB
	b941_9["eff__711 push_u32"]
end
branch_938 --> block_941

</pre>`;
window.traces["I32_LT_S"]["unLEM"] = ''
window.traces["I32_LT_S"]["unLEM"] += `<pre class='graph'>---
config:
  layout: elk
---
graph TD
	1[\\"Finish"/]
	0 -. Codeptr Trap Locals Globals Tables Memory Extra .-> 1
	12 -. Stack .-> 1
	12{{"Sϕ Stack "}}
	19 --> 12
	22 --> 12
	20 --> 12
	20{{"Sϕ Stack "}}
	17 --> 20
	11 --> 20
	9 --> 20
	9["eff__711 push_u32"]
	14 --> 9
	4 -. Stack .-> 9
	4["a pop_u32"]
	3 -. Stack .-> 4
	3["b pop_u32"]
	0 -. Stack .-> 3
	0[/"Start"\\]
	14["abs__716 lift_u32"]
	8 --> 14
	8["arg__712 0"]
	11["eff__709 push_u32"]
	13 --> 11
	4 -. Stack .-> 11
	13["abs__715 lift_u32"]
	10 --> 13
	10["arg__710 1"]
	17["mt__717 U32_maybeTrue"]
	7 --> 17
	7["cond__708 U32_lt_s"]
	4 --> 7
	3 --> 7
	22["eff_push__721 push_u32"]
	21 --> 22
	4 -. Stack .-> 22
	21["merge__720 merge_u"]
	13 --> 21
	14 --> 21
	19["mb__719 bool.&&"]
	17 --> 19
	18 --> 19
	18["mf__718 U32_maybeFalse"]
	7 --> 18
</pre>`;
window.traces["I32_LT_S"]["unlem_schedule"] = ''
window.traces["I32_LT_S"]["unlem_schedule"] += `<pre class=''>def b = pop_u32();
def a = pop_u32();
def cond__708 = U32_lt_s(a, b);
def mt__717 = U32_maybeTrue(cond__708);
def mf__718 = U32_maybeFalse(cond__708);
def mb__719 = bool.&&(mt__717, mf__718);
if (mb__719) {
	def arg__710 : u32 = 1;
	def abs__715 = lift_u32(arg__710);
	def arg__712 : u32 = 0;
	def abs__716 = lift_u32(arg__712);
	def merge__720 = merge_u(abs__715, abs__716);
	def eff_push__721 = push_u32(merge__720);
} else {
	if (mt__717) {
		def arg__710 : u32 = 1;
		def abs__715 = lift_u32(arg__710);
		def eff__709 = push_u32(abs__715);
	} else {
		def arg__712 : u32 = 0;
		def abs__716 = lift_u32(arg__712);
		def eff__711 = push_u32(abs__716);
	}
// phis: 
}
// phis: 
</pre>`;
window.traces["I32_LT_S"]["unlem_scheduler"] = ''
window.traces["I32_LT_S"]["unlem_scheduler"] += `<pre class='graph'>graph TD
subgraph block_943["Block 943"]
	direction TB
	b943_1[\\"Finish"/]
	b943_22["eff_push__721 push_u32"]
	b943_21["merge__720 merge_u"]
	b943_22 --> b943_1
	b943_21 --> b943_22
end
phi_945 --> block_943
subgraph phi_945["Phi 945"]
	p945_12{{"Sϕ Stack "}}
end
block_946 --> phi_945
block_947 --> phi_945
subgraph block_946["Block 946"]
	direction TB
	b946_22["eff_push__721 push_u32"]
	b946_21["merge__720 merge_u"]
	b946_21 --> b946_22
end
phi_954 --> block_946
subgraph phi_954["Phi 954"]
	p954_20{{"Sϕ Stack "}}
end
block_955 --> phi_954
block_956 --> phi_954
subgraph block_955["Block 955"]
	direction TB
end
branch_953 --> block_955
subgraph branch_953["Branch 953"]
	br953_17["mt__717 U32_maybeTrue"]

end
branch_944 --> branch_953
subgraph branch_944["Branch 944"]
	br944_19["mb__719 bool.&&"]

end
block_952 --> branch_944
subgraph block_952["Block 952"]
	direction TB
	b952_19["mb__719 bool.&&"]
	b952_17["mt__717 U32_maybeTrue"]
	b952_18["mf__718 U32_maybeFalse"]
	b952_11["eff__709 push_u32"]
	b952_9["eff__711 push_u32"]
	b952_7["cond__708 U32_lt_s"]
	b952_13["abs__715 lift_u32"]
	b952_14["abs__716 lift_u32"]
	b952_4["a pop_u32"]
	b952_3["b pop_u32"]
	b952_10["arg__710 1"]
	b952_8["arg__712 0"]
	b952_0[/"Start"\\]
	b952_17 --> b952_19
	b952_18 --> b952_17
	b952_11 --> b952_18
	b952_9 --> b952_11
	b952_7 --> b952_9
	b952_13 --> b952_7
	b952_14 --> b952_13
	b952_4 --> b952_14
	b952_3 --> b952_4
	b952_10 --> b952_3
	b952_8 --> b952_10
	b952_0 --> b952_8
end
subgraph block_956["Block 956"]
	direction TB
end
branch_953 --> block_956
subgraph block_947["Block 947"]
	direction TB
end
phi_949 --> block_947
subgraph phi_949["Phi 949"]
	p949_20{{"Sϕ Stack "}}
end
block_950 --> phi_949
block_951 --> phi_949
subgraph block_950["Block 950"]
	direction TB
end
branch_948 --> block_950
subgraph branch_948["Branch 948"]
	br948_17["mt__717 U32_maybeTrue"]

end
branch_944 --> branch_948
subgraph block_951["Block 951"]
	direction TB
end
branch_948 --> block_951

</pre>`;
window.traces["I32_LT_S"]["unlem_pretty"] = ''
window.traces["I32_LT_S"]["unlem_pretty"] += `<pre class=''>def b = pop_u32();
def a = pop_u32();
def mt = U32_maybeTrue(U32_lt_s(a, b));
def mf = U32_maybeFalse(U32_lt_s(a, b));
if (bool.&&(mt, mf)) {
	push_u32(merge_u(lift_u32(1), lift_u32(0)));
} else {
	if (mt) {
		push_u32(lift_u32(1));
	} else {
		push_u32(lift_u32(0));
	}
}
</pre>`;
window.traces["I32_LT_S"]["constUnLEM"] = ''
window.traces["I32_LT_S"]["constUnLEM"] += `<pre class='graph'>---
config:
  layout: elk
---
graph TD
	1[\\"Finish"/]
	0 -. Codeptr Trap Locals Globals Tables Memory Extra .-> 1
	12 -. Stack .-> 1
	12["eff_push__721 push_u32"]
	21 --> 12
	4 -. Stack .-> 12
	4["a pop_u32"]
	3 -. Stack .-> 4
	3["b pop_u32"]
	0 -. Stack .-> 3
	0[/"Start"\\]
	21["merge__720 merge_u"]
	13 --> 21
	14 --> 21
	14["abs__716 lift_u32"]
	8 --> 14
	8["arg__712 0"]
	13["abs__715 lift_u32"]
	10 --> 13
	10["arg__710 1"]
</pre>`;
window.traces["I32_LT_S"]["chooseMerge"] = ''
window.traces["I32_LT_S"]["chooseMerge"] += `<pre class='graph'>---
config:
  layout: elk
---
graph TD
	1[\\"Finish"/]
	0 -. Codeptr Trap Locals Globals Tables Memory Extra .-> 1
	12 -. Stack .-> 1
	12["eff_push__721 push_u32"]
	13 --> 12
	4 -. Stack .-> 12
	4["a pop_u32"]
	3 -. Stack .-> 4
	3["b pop_u32"]
	0 -. Stack .-> 3
	0[/"Start"\\]
	13["abs__715 lift_u32"]
	10 --> 13
	10["arg__710 1"]
</pre>`;
window.traces["I32_LT_S"]["scheduled"] = ''
window.traces["I32_LT_S"]["scheduled"] += `<pre class=''>def arg__710 : u32 = 1;
def abs__715 = lift_u32(arg__710);
def b = pop_u32();
def a = pop_u32();
def eff_push__721 = push_u32(abs__715);
</pre>`;
window.traces["I32_LT_S"]["pretty"] = ''
window.traces["I32_LT_S"]["pretty"] += `<pre class=''>def b = pop_u32();
def a = pop_u32();
push_u32(lift_u32(1));
</pre>`;
window.traces["I32_LT_U"] = {}
window.traces["I32_LT_U"]["parsed"] = ''
window.traces["I32_LT_U"]["parsed"] += `<pre class=''>def b = pop_u32();
def a = pop_u32();
def arg__728 = (b);
def arg__727 = (a);
def cond__722 = u32.<(arg__727, arg__728);
if (cond__722) {
	def arg__724 : u32 = 1;
	def eff__723 = push_u32(arg__724);
} else {
	def arg__726 : u32 = 0;
	def eff__725 = push_u32(arg__726);
}
// phis: 
</pre>`;
window.traces["I32_LT_U"]["raw"] = ''
window.traces["I32_LT_U"]["raw"] += `<pre class='graph'>---
config:
  layout: elk
---
graph TD
	1[\\"Finish"/]
	0 -. Codeptr Trap Locals Globals Tables Memory Extra .-> 1
	12 -. Stack .-> 1
	12{{"Sϕ Stack "}}
	7 --> 12
	11 --> 12
	9 --> 12
	9["eff__725 push_u32"]
	8 --> 9
	4 -. Stack .-> 9
	4["a pop_u32"]
	3 -. Stack .-> 4
	3["b pop_u32"]
	0 -. Stack .-> 3
	0[/"Start"\\]
	8["arg__726 0"]
	11["eff__723 push_u32"]
	10 --> 11
	4 -. Stack .-> 11
	10["arg__724 1"]
	7["cond__722 u32.<"]
	4 --> 7
	3 --> 7
</pre>`;
window.traces["I32_LT_U"]["overloadOps"] = ''
window.traces["I32_LT_U"]["overloadOps"] += `<pre class='graph'>---
config:
  layout: elk
---
graph TD
	1[\\"Finish"/]
	0 -. Codeptr Trap Locals Globals Tables Memory Extra .-> 1
	12 -. Stack .-> 1
	12{{"Sϕ Stack "}}
	7 --> 12
	11 --> 12
	9 --> 12
	9["eff__725 push_u32"]
	8 --> 9
	4 -. Stack .-> 9
	4["a pop_u32"]
	3 -. Stack .-> 4
	3["b pop_u32"]
	0 -. Stack .-> 3
	0[/"Start"\\]
	8["arg__726 0"]
	11["eff__723 push_u32"]
	10 --> 11
	4 -. Stack .-> 11
	10["arg__724 1"]
	7["cond__722 U32_lt"]
	4 --> 7
	3 --> 7
</pre>`;
window.traces["I32_LT_U"]["addAbstractions"] = ''
window.traces["I32_LT_U"]["addAbstractions"] += `<pre class='graph'>---
config:
  layout: elk
---
graph TD
	1[\\"Finish"/]
	0 -. Codeptr Trap Locals Globals Tables Memory Extra .-> 1
	12 -. Stack .-> 1
	12{{"Sϕ Stack "}}
	7 --> 12
	11 --> 12
	9 --> 12
	9["eff__725 push_u32"]
	14 --> 9
	4 -. Stack .-> 9
	4["a pop_u32"]
	3 -. Stack .-> 4
	3["b pop_u32"]
	0 -. Stack .-> 3
	0[/"Start"\\]
	14["abs__730 lift_u32"]
	8 --> 14
	8["arg__726 0"]
	11["eff__723 push_u32"]
	13 --> 11
	4 -. Stack .-> 11
	13["abs__729 lift_u32"]
	10 --> 13
	10["arg__724 1"]
	7["cond__722 U32_lt"]
	4 --> 7
	3 --> 7
</pre>`;
window.traces["I32_LT_U"]["schedulerMermaid"] = ''
window.traces["I32_LT_U"]["schedulerMermaid"] += `<pre class='graph'>graph TD
subgraph block_957["Block 957"]
	direction TB
	b957_1[\\"Finish"/]
	b957_11["eff__723 push_u32"]
	b957_9["eff__725 push_u32"]
	b957_4["a pop_u32"]
	b957_3["b pop_u32"]
	b957_13["abs__729 lift_u32"]
	b957_14["abs__730 lift_u32"]
	b957_10["arg__724 1"]
	b957_8["arg__726 0"]
	b957_11 --> b957_1
	b957_9 --> b957_11
	b957_4 --> b957_9
	b957_3 --> b957_4
	b957_13 --> b957_3
	b957_14 --> b957_13
	b957_10 --> b957_14
	b957_8 --> b957_10
end
phi_959 --> block_957
subgraph phi_959["Phi 959"]
	p959_12{{"Sϕ Stack "}}
end
block_960 --> phi_959
block_961 --> phi_959
subgraph block_960["Block 960"]
	direction TB
	b960_11["eff__723 push_u32"]
end
branch_958 --> block_960
subgraph branch_958["Branch 958"]
	br958_7["cond__722 U32_lt"]

end
block_962 --> branch_958
subgraph block_962["Block 962"]
	direction TB
	b962_7["cond__722 U32_lt"]
	b962_0[/"Start"\\]
	b962_0 --> b962_7
end
subgraph block_961["Block 961"]
	direction TB
	b961_9["eff__725 push_u32"]
end
branch_958 --> block_961

</pre>`;
window.traces["I32_LT_U"]["unLEM"] = ''
window.traces["I32_LT_U"]["unLEM"] += `<pre class='graph'>---
config:
  layout: elk
---
graph TD
	1[\\"Finish"/]
	0 -. Codeptr Trap Locals Globals Tables Memory Extra .-> 1
	12 -. Stack .-> 1
	12{{"Sϕ Stack "}}
	19 --> 12
	22 --> 12
	20 --> 12
	20{{"Sϕ Stack "}}
	17 --> 20
	11 --> 20
	9 --> 20
	9["eff__725 push_u32"]
	14 --> 9
	4 -. Stack .-> 9
	4["a pop_u32"]
	3 -. Stack .-> 4
	3["b pop_u32"]
	0 -. Stack .-> 3
	0[/"Start"\\]
	14["abs__730 lift_u32"]
	8 --> 14
	8["arg__726 0"]
	11["eff__723 push_u32"]
	13 --> 11
	4 -. Stack .-> 11
	13["abs__729 lift_u32"]
	10 --> 13
	10["arg__724 1"]
	17["mt__731 U32_maybeTrue"]
	7 --> 17
	7["cond__722 U32_lt"]
	4 --> 7
	3 --> 7
	22["eff_push__735 push_u32"]
	21 --> 22
	4 -. Stack .-> 22
	21["merge__734 merge_u"]
	13 --> 21
	14 --> 21
	19["mb__733 bool.&&"]
	17 --> 19
	18 --> 19
	18["mf__732 U32_maybeFalse"]
	7 --> 18
</pre>`;
window.traces["I32_LT_U"]["unlem_schedule"] = ''
window.traces["I32_LT_U"]["unlem_schedule"] += `<pre class=''>def b = pop_u32();
def a = pop_u32();
def cond__722 = U32_lt(a, b);
def mt__731 = U32_maybeTrue(cond__722);
def mf__732 = U32_maybeFalse(cond__722);
def mb__733 = bool.&&(mt__731, mf__732);
if (mb__733) {
	def arg__724 : u32 = 1;
	def abs__729 = lift_u32(arg__724);
	def arg__726 : u32 = 0;
	def abs__730 = lift_u32(arg__726);
	def merge__734 = merge_u(abs__729, abs__730);
	def eff_push__735 = push_u32(merge__734);
} else {
	if (mt__731) {
		def arg__724 : u32 = 1;
		def abs__729 = lift_u32(arg__724);
		def eff__723 = push_u32(abs__729);
	} else {
		def arg__726 : u32 = 0;
		def abs__730 = lift_u32(arg__726);
		def eff__725 = push_u32(abs__730);
	}
// phis: 
}
// phis: 
</pre>`;
window.traces["I32_LT_U"]["unlem_scheduler"] = ''
window.traces["I32_LT_U"]["unlem_scheduler"] += `<pre class='graph'>graph TD
subgraph block_963["Block 963"]
	direction TB
	b963_1[\\"Finish"/]
	b963_22["eff_push__735 push_u32"]
	b963_21["merge__734 merge_u"]
	b963_22 --> b963_1
	b963_21 --> b963_22
end
phi_965 --> block_963
subgraph phi_965["Phi 965"]
	p965_12{{"Sϕ Stack "}}
end
block_966 --> phi_965
block_967 --> phi_965
subgraph block_966["Block 966"]
	direction TB
	b966_22["eff_push__735 push_u32"]
	b966_21["merge__734 merge_u"]
	b966_21 --> b966_22
end
phi_974 --> block_966
subgraph phi_974["Phi 974"]
	p974_20{{"Sϕ Stack "}}
end
block_975 --> phi_974
block_976 --> phi_974
subgraph block_975["Block 975"]
	direction TB
end
branch_973 --> block_975
subgraph branch_973["Branch 973"]
	br973_17["mt__731 U32_maybeTrue"]

end
branch_964 --> branch_973
subgraph branch_964["Branch 964"]
	br964_19["mb__733 bool.&&"]

end
block_972 --> branch_964
subgraph block_972["Block 972"]
	direction TB
	b972_19["mb__733 bool.&&"]
	b972_17["mt__731 U32_maybeTrue"]
	b972_18["mf__732 U32_maybeFalse"]
	b972_11["eff__723 push_u32"]
	b972_9["eff__725 push_u32"]
	b972_7["cond__722 U32_lt"]
	b972_13["abs__729 lift_u32"]
	b972_14["abs__730 lift_u32"]
	b972_4["a pop_u32"]
	b972_3["b pop_u32"]
	b972_10["arg__724 1"]
	b972_8["arg__726 0"]
	b972_0[/"Start"\\]
	b972_17 --> b972_19
	b972_18 --> b972_17
	b972_11 --> b972_18
	b972_9 --> b972_11
	b972_7 --> b972_9
	b972_13 --> b972_7
	b972_14 --> b972_13
	b972_4 --> b972_14
	b972_3 --> b972_4
	b972_10 --> b972_3
	b972_8 --> b972_10
	b972_0 --> b972_8
end
subgraph block_976["Block 976"]
	direction TB
end
branch_973 --> block_976
subgraph block_967["Block 967"]
	direction TB
end
phi_969 --> block_967
subgraph phi_969["Phi 969"]
	p969_20{{"Sϕ Stack "}}
end
block_970 --> phi_969
block_971 --> phi_969
subgraph block_970["Block 970"]
	direction TB
end
branch_968 --> block_970
subgraph branch_968["Branch 968"]
	br968_17["mt__731 U32_maybeTrue"]

end
branch_964 --> branch_968
subgraph block_971["Block 971"]
	direction TB
end
branch_968 --> block_971

</pre>`;
window.traces["I32_LT_U"]["unlem_pretty"] = ''
window.traces["I32_LT_U"]["unlem_pretty"] += `<pre class=''>def b = pop_u32();
def a = pop_u32();
def mt = U32_maybeTrue(U32_lt(a, b));
def mf = U32_maybeFalse(U32_lt(a, b));
if (bool.&&(mt, mf)) {
	push_u32(merge_u(lift_u32(1), lift_u32(0)));
} else {
	if (mt) {
		push_u32(lift_u32(1));
	} else {
		push_u32(lift_u32(0));
	}
}
</pre>`;
window.traces["I32_LT_U"]["constUnLEM"] = ''
window.traces["I32_LT_U"]["constUnLEM"] += `<pre class='graph'>---
config:
  layout: elk
---
graph TD
	1[\\"Finish"/]
	0 -. Codeptr Trap Locals Globals Tables Memory Extra .-> 1
	12 -. Stack .-> 1
	12["eff_push__735 push_u32"]
	21 --> 12
	4 -. Stack .-> 12
	4["a pop_u32"]
	3 -. Stack .-> 4
	3["b pop_u32"]
	0 -. Stack .-> 3
	0[/"Start"\\]
	21["merge__734 merge_u"]
	13 --> 21
	14 --> 21
	14["abs__730 lift_u32"]
	8 --> 14
	8["arg__726 0"]
	13["abs__729 lift_u32"]
	10 --> 13
	10["arg__724 1"]
</pre>`;
window.traces["I32_LT_U"]["chooseMerge"] = ''
window.traces["I32_LT_U"]["chooseMerge"] += `<pre class='graph'>---
config:
  layout: elk
---
graph TD
	1[\\"Finish"/]
	0 -. Codeptr Trap Locals Globals Tables Memory Extra .-> 1
	12 -. Stack .-> 1
	12["eff_push__735 push_u32"]
	13 --> 12
	4 -. Stack .-> 12
	4["a pop_u32"]
	3 -. Stack .-> 4
	3["b pop_u32"]
	0 -. Stack .-> 3
	0[/"Start"\\]
	13["abs__729 lift_u32"]
	10 --> 13
	10["arg__724 1"]
</pre>`;
window.traces["I32_LT_U"]["scheduled"] = ''
window.traces["I32_LT_U"]["scheduled"] += `<pre class=''>def arg__724 : u32 = 1;
def abs__729 = lift_u32(arg__724);
def b = pop_u32();
def a = pop_u32();
def eff_push__735 = push_u32(abs__729);
</pre>`;
window.traces["I32_LT_U"]["pretty"] = ''
window.traces["I32_LT_U"]["pretty"] += `<pre class=''>def b = pop_u32();
def a = pop_u32();
push_u32(lift_u32(1));
</pre>`;
window.traces["I32_GT_S"] = {}
window.traces["I32_GT_S"]["parsed"] = ''
window.traces["I32_GT_S"]["parsed"] += `<pre class=''>def b = pop_u32();
def a = pop_u32();
def arg__742 = (b);
def arg__741 = (a);
def cond__736 = U32_gt_s(arg__741, arg__742);
if (cond__736) {
	def arg__738 : u32 = 1;
	def eff__737 = push_u32(arg__738);
} else {
	def arg__740 : u32 = 0;
	def eff__739 = push_u32(arg__740);
}
// phis: 
</pre>`;
window.traces["I32_GT_S"]["raw"] = ''
window.traces["I32_GT_S"]["raw"] += `<pre class='graph'>---
config:
  layout: elk
---
graph TD
	1[\\"Finish"/]
	0 -. Codeptr Trap Locals Globals Tables Memory Extra .-> 1
	12 -. Stack .-> 1
	12{{"Sϕ Stack "}}
	7 --> 12
	11 --> 12
	9 --> 12
	9["eff__739 push_u32"]
	8 --> 9
	4 -. Stack .-> 9
	4["a pop_u32"]
	3 -. Stack .-> 4
	3["b pop_u32"]
	0 -. Stack .-> 3
	0[/"Start"\\]
	8["arg__740 0"]
	11["eff__737 push_u32"]
	10 --> 11
	4 -. Stack .-> 11
	10["arg__738 1"]
	7["cond__736 U32_gt_s"]
	4 --> 7
	3 --> 7
</pre>`;
window.traces["I32_GT_S"]["overloadOps"] = ''
window.traces["I32_GT_S"]["overloadOps"] += `<pre class='graph'>---
config:
  layout: elk
---
graph TD
	1[\\"Finish"/]
	0 -. Codeptr Trap Locals Globals Tables Memory Extra .-> 1
	12 -. Stack .-> 1
	12{{"Sϕ Stack "}}
	7 --> 12
	11 --> 12
	9 --> 12
	9["eff__739 push_u32"]
	8 --> 9
	4 -. Stack .-> 9
	4["a pop_u32"]
	3 -. Stack .-> 4
	3["b pop_u32"]
	0 -. Stack .-> 3
	0[/"Start"\\]
	8["arg__740 0"]
	11["eff__737 push_u32"]
	10 --> 11
	4 -. Stack .-> 11
	10["arg__738 1"]
	7["cond__736 U32_gt_s"]
	4 --> 7
	3 --> 7
</pre>`;
window.traces["I32_GT_S"]["addAbstractions"] = ''
window.traces["I32_GT_S"]["addAbstractions"] += `<pre class='graph'>---
config:
  layout: elk
---
graph TD
	1[\\"Finish"/]
	0 -. Codeptr Trap Locals Globals Tables Memory Extra .-> 1
	12 -. Stack .-> 1
	12{{"Sϕ Stack "}}
	7 --> 12
	11 --> 12
	9 --> 12
	9["eff__739 push_u32"]
	14 --> 9
	4 -. Stack .-> 9
	4["a pop_u32"]
	3 -. Stack .-> 4
	3["b pop_u32"]
	0 -. Stack .-> 3
	0[/"Start"\\]
	14["abs__744 lift_u32"]
	8 --> 14
	8["arg__740 0"]
	11["eff__737 push_u32"]
	13 --> 11
	4 -. Stack .-> 11
	13["abs__743 lift_u32"]
	10 --> 13
	10["arg__738 1"]
	7["cond__736 U32_gt_s"]
	4 --> 7
	3 --> 7
</pre>`;
window.traces["I32_GT_S"]["schedulerMermaid"] = ''
window.traces["I32_GT_S"]["schedulerMermaid"] += `<pre class='graph'>graph TD
subgraph block_977["Block 977"]
	direction TB
	b977_1[\\"Finish"/]
	b977_11["eff__737 push_u32"]
	b977_9["eff__739 push_u32"]
	b977_4["a pop_u32"]
	b977_3["b pop_u32"]
	b977_13["abs__743 lift_u32"]
	b977_14["abs__744 lift_u32"]
	b977_10["arg__738 1"]
	b977_8["arg__740 0"]
	b977_11 --> b977_1
	b977_9 --> b977_11
	b977_4 --> b977_9
	b977_3 --> b977_4
	b977_13 --> b977_3
	b977_14 --> b977_13
	b977_10 --> b977_14
	b977_8 --> b977_10
end
phi_979 --> block_977
subgraph phi_979["Phi 979"]
	p979_12{{"Sϕ Stack "}}
end
block_980 --> phi_979
block_981 --> phi_979
subgraph block_980["Block 980"]
	direction TB
	b980_11["eff__737 push_u32"]
end
branch_978 --> block_980
subgraph branch_978["Branch 978"]
	br978_7["cond__736 U32_gt_s"]

end
block_982 --> branch_978
subgraph block_982["Block 982"]
	direction TB
	b982_7["cond__736 U32_gt_s"]
	b982_0[/"Start"\\]
	b982_0 --> b982_7
end
subgraph block_981["Block 981"]
	direction TB
	b981_9["eff__739 push_u32"]
end
branch_978 --> block_981

</pre>`;
window.traces["I32_GT_S"]["unLEM"] = ''
window.traces["I32_GT_S"]["unLEM"] += `<pre class='graph'>---
config:
  layout: elk
---
graph TD
	1[\\"Finish"/]
	0 -. Codeptr Trap Locals Globals Tables Memory Extra .-> 1
	12 -. Stack .-> 1
	12{{"Sϕ Stack "}}
	19 --> 12
	22 --> 12
	20 --> 12
	20{{"Sϕ Stack "}}
	17 --> 20
	11 --> 20
	9 --> 20
	9["eff__739 push_u32"]
	14 --> 9
	4 -. Stack .-> 9
	4["a pop_u32"]
	3 -. Stack .-> 4
	3["b pop_u32"]
	0 -. Stack .-> 3
	0[/"Start"\\]
	14["abs__744 lift_u32"]
	8 --> 14
	8["arg__740 0"]
	11["eff__737 push_u32"]
	13 --> 11
	4 -. Stack .-> 11
	13["abs__743 lift_u32"]
	10 --> 13
	10["arg__738 1"]
	17["mt__745 U32_maybeTrue"]
	7 --> 17
	7["cond__736 U32_gt_s"]
	4 --> 7
	3 --> 7
	22["eff_push__749 push_u32"]
	21 --> 22
	4 -. Stack .-> 22
	21["merge__748 merge_u"]
	13 --> 21
	14 --> 21
	19["mb__747 bool.&&"]
	17 --> 19
	18 --> 19
	18["mf__746 U32_maybeFalse"]
	7 --> 18
</pre>`;
window.traces["I32_GT_S"]["unlem_schedule"] = ''
window.traces["I32_GT_S"]["unlem_schedule"] += `<pre class=''>def b = pop_u32();
def a = pop_u32();
def cond__736 = U32_gt_s(a, b);
def mt__745 = U32_maybeTrue(cond__736);
def mf__746 = U32_maybeFalse(cond__736);
def mb__747 = bool.&&(mt__745, mf__746);
if (mb__747) {
	def arg__738 : u32 = 1;
	def abs__743 = lift_u32(arg__738);
	def arg__740 : u32 = 0;
	def abs__744 = lift_u32(arg__740);
	def merge__748 = merge_u(abs__743, abs__744);
	def eff_push__749 = push_u32(merge__748);
} else {
	if (mt__745) {
		def arg__738 : u32 = 1;
		def abs__743 = lift_u32(arg__738);
		def eff__737 = push_u32(abs__743);
	} else {
		def arg__740 : u32 = 0;
		def abs__744 = lift_u32(arg__740);
		def eff__739 = push_u32(abs__744);
	}
// phis: 
}
// phis: 
</pre>`;
window.traces["I32_GT_S"]["unlem_scheduler"] = ''
window.traces["I32_GT_S"]["unlem_scheduler"] += `<pre class='graph'>graph TD
subgraph block_983["Block 983"]
	direction TB
	b983_1[\\"Finish"/]
	b983_22["eff_push__749 push_u32"]
	b983_21["merge__748 merge_u"]
	b983_22 --> b983_1
	b983_21 --> b983_22
end
phi_985 --> block_983
subgraph phi_985["Phi 985"]
	p985_12{{"Sϕ Stack "}}
end
block_986 --> phi_985
block_987 --> phi_985
subgraph block_986["Block 986"]
	direction TB
	b986_22["eff_push__749 push_u32"]
	b986_21["merge__748 merge_u"]
	b986_21 --> b986_22
end
phi_994 --> block_986
subgraph phi_994["Phi 994"]
	p994_20{{"Sϕ Stack "}}
end
block_995 --> phi_994
block_996 --> phi_994
subgraph block_995["Block 995"]
	direction TB
end
branch_993 --> block_995
subgraph branch_993["Branch 993"]
	br993_17["mt__745 U32_maybeTrue"]

end
branch_984 --> branch_993
subgraph branch_984["Branch 984"]
	br984_19["mb__747 bool.&&"]

end
block_992 --> branch_984
subgraph block_992["Block 992"]
	direction TB
	b992_19["mb__747 bool.&&"]
	b992_17["mt__745 U32_maybeTrue"]
	b992_18["mf__746 U32_maybeFalse"]
	b992_11["eff__737 push_u32"]
	b992_9["eff__739 push_u32"]
	b992_7["cond__736 U32_gt_s"]
	b992_13["abs__743 lift_u32"]
	b992_14["abs__744 lift_u32"]
	b992_4["a pop_u32"]
	b992_3["b pop_u32"]
	b992_10["arg__738 1"]
	b992_8["arg__740 0"]
	b992_0[/"Start"\\]
	b992_17 --> b992_19
	b992_18 --> b992_17
	b992_11 --> b992_18
	b992_9 --> b992_11
	b992_7 --> b992_9
	b992_13 --> b992_7
	b992_14 --> b992_13
	b992_4 --> b992_14
	b992_3 --> b992_4
	b992_10 --> b992_3
	b992_8 --> b992_10
	b992_0 --> b992_8
end
subgraph block_996["Block 996"]
	direction TB
end
branch_993 --> block_996
subgraph block_987["Block 987"]
	direction TB
end
phi_989 --> block_987
subgraph phi_989["Phi 989"]
	p989_20{{"Sϕ Stack "}}
end
block_990 --> phi_989
block_991 --> phi_989
subgraph block_990["Block 990"]
	direction TB
end
branch_988 --> block_990
subgraph branch_988["Branch 988"]
	br988_17["mt__745 U32_maybeTrue"]

end
branch_984 --> branch_988
subgraph block_991["Block 991"]
	direction TB
end
branch_988 --> block_991

</pre>`;
window.traces["I32_GT_S"]["unlem_pretty"] = ''
window.traces["I32_GT_S"]["unlem_pretty"] += `<pre class=''>def b = pop_u32();
def a = pop_u32();
def mt = U32_maybeTrue(U32_gt_s(a, b));
def mf = U32_maybeFalse(U32_gt_s(a, b));
if (bool.&&(mt, mf)) {
	push_u32(merge_u(lift_u32(1), lift_u32(0)));
} else {
	if (mt) {
		push_u32(lift_u32(1));
	} else {
		push_u32(lift_u32(0));
	}
}
</pre>`;
window.traces["I32_GT_S"]["constUnLEM"] = ''
window.traces["I32_GT_S"]["constUnLEM"] += `<pre class='graph'>---
config:
  layout: elk
---
graph TD
	1[\\"Finish"/]
	0 -. Codeptr Trap Locals Globals Tables Memory Extra .-> 1
	12 -. Stack .-> 1
	12["eff_push__749 push_u32"]
	21 --> 12
	4 -. Stack .-> 12
	4["a pop_u32"]
	3 -. Stack .-> 4
	3["b pop_u32"]
	0 -. Stack .-> 3
	0[/"Start"\\]
	21["merge__748 merge_u"]
	13 --> 21
	14 --> 21
	14["abs__744 lift_u32"]
	8 --> 14
	8["arg__740 0"]
	13["abs__743 lift_u32"]
	10 --> 13
	10["arg__738 1"]
</pre>`;
window.traces["I32_GT_S"]["chooseMerge"] = ''
window.traces["I32_GT_S"]["chooseMerge"] += `<pre class='graph'>---
config:
  layout: elk
---
graph TD
	1[\\"Finish"/]
	0 -. Codeptr Trap Locals Globals Tables Memory Extra .-> 1
	12 -. Stack .-> 1
	12["eff_push__749 push_u32"]
	13 --> 12
	4 -. Stack .-> 12
	4["a pop_u32"]
	3 -. Stack .-> 4
	3["b pop_u32"]
	0 -. Stack .-> 3
	0[/"Start"\\]
	13["abs__743 lift_u32"]
	10 --> 13
	10["arg__738 1"]
</pre>`;
window.traces["I32_GT_S"]["scheduled"] = ''
window.traces["I32_GT_S"]["scheduled"] += `<pre class=''>def arg__738 : u32 = 1;
def abs__743 = lift_u32(arg__738);
def b = pop_u32();
def a = pop_u32();
def eff_push__749 = push_u32(abs__743);
</pre>`;
window.traces["I32_GT_S"]["pretty"] = ''
window.traces["I32_GT_S"]["pretty"] += `<pre class=''>def b = pop_u32();
def a = pop_u32();
push_u32(lift_u32(1));
</pre>`;
window.traces["I32_GT_U"] = {}
window.traces["I32_GT_U"]["parsed"] = ''
window.traces["I32_GT_U"]["parsed"] += `<pre class=''>def b = pop_u32();
def a = pop_u32();
def arg__756 = (b);
def arg__755 = (a);
def cond__750 = u32.>(arg__755, arg__756);
if (cond__750) {
	def arg__752 : u32 = 1;
	def eff__751 = push_u32(arg__752);
} else {
	def arg__754 : u32 = 0;
	def eff__753 = push_u32(arg__754);
}
// phis: 
</pre>`;
window.traces["I32_GT_U"]["raw"] = ''
window.traces["I32_GT_U"]["raw"] += `<pre class='graph'>---
config:
  layout: elk
---
graph TD
	1[\\"Finish"/]
	0 -. Codeptr Trap Locals Globals Tables Memory Extra .-> 1
	12 -. Stack .-> 1
	12{{"Sϕ Stack "}}
	7 --> 12
	11 --> 12
	9 --> 12
	9["eff__753 push_u32"]
	8 --> 9
	4 -. Stack .-> 9
	4["a pop_u32"]
	3 -. Stack .-> 4
	3["b pop_u32"]
	0 -. Stack .-> 3
	0[/"Start"\\]
	8["arg__754 0"]
	11["eff__751 push_u32"]
	10 --> 11
	4 -. Stack .-> 11
	10["arg__752 1"]
	7["cond__750 u32.>"]
	4 --> 7
	3 --> 7
</pre>`;
window.traces["I32_GT_U"]["overloadOps"] = ''
window.traces["I32_GT_U"]["overloadOps"] += `<pre class='graph'>---
config:
  layout: elk
---
graph TD
	1[\\"Finish"/]
	0 -. Codeptr Trap Locals Globals Tables Memory Extra .-> 1
	12 -. Stack .-> 1
	12{{"Sϕ Stack "}}
	7 --> 12
	11 --> 12
	9 --> 12
	9["eff__753 push_u32"]
	8 --> 9
	4 -. Stack .-> 9
	4["a pop_u32"]
	3 -. Stack .-> 4
	3["b pop_u32"]
	0 -. Stack .-> 3
	0[/"Start"\\]
	8["arg__754 0"]
	11["eff__751 push_u32"]
	10 --> 11
	4 -. Stack .-> 11
	10["arg__752 1"]
	7["cond__750 U32_gt"]
	4 --> 7
	3 --> 7
</pre>`;
window.traces["I32_GT_U"]["addAbstractions"] = ''
window.traces["I32_GT_U"]["addAbstractions"] += `<pre class='graph'>---
config:
  layout: elk
---
graph TD
	1[\\"Finish"/]
	0 -. Codeptr Trap Locals Globals Tables Memory Extra .-> 1
	12 -. Stack .-> 1
	12{{"Sϕ Stack "}}
	7 --> 12
	11 --> 12
	9 --> 12
	9["eff__753 push_u32"]
	14 --> 9
	4 -. Stack .-> 9
	4["a pop_u32"]
	3 -. Stack .-> 4
	3["b pop_u32"]
	0 -. Stack .-> 3
	0[/"Start"\\]
	14["abs__758 lift_u32"]
	8 --> 14
	8["arg__754 0"]
	11["eff__751 push_u32"]
	13 --> 11
	4 -. Stack .-> 11
	13["abs__757 lift_u32"]
	10 --> 13
	10["arg__752 1"]
	7["cond__750 U32_gt"]
	4 --> 7
	3 --> 7
</pre>`;
window.traces["I32_GT_U"]["schedulerMermaid"] = ''
window.traces["I32_GT_U"]["schedulerMermaid"] += `<pre class='graph'>graph TD
subgraph block_997["Block 997"]
	direction TB
	b997_1[\\"Finish"/]
	b997_11["eff__751 push_u32"]
	b997_9["eff__753 push_u32"]
	b997_4["a pop_u32"]
	b997_3["b pop_u32"]
	b997_13["abs__757 lift_u32"]
	b997_14["abs__758 lift_u32"]
	b997_10["arg__752 1"]
	b997_8["arg__754 0"]
	b997_11 --> b997_1
	b997_9 --> b997_11
	b997_4 --> b997_9
	b997_3 --> b997_4
	b997_13 --> b997_3
	b997_14 --> b997_13
	b997_10 --> b997_14
	b997_8 --> b997_10
end
phi_999 --> block_997
subgraph phi_999["Phi 999"]
	p999_12{{"Sϕ Stack "}}
end
block_1000 --> phi_999
block_1001 --> phi_999
subgraph block_1000["Block 1000"]
	direction TB
	b1000_11["eff__751 push_u32"]
end
branch_998 --> block_1000
subgraph branch_998["Branch 998"]
	br998_7["cond__750 U32_gt"]

end
block_1002 --> branch_998
subgraph block_1002["Block 1002"]
	direction TB
	b1002_7["cond__750 U32_gt"]
	b1002_0[/"Start"\\]
	b1002_0 --> b1002_7
end
subgraph block_1001["Block 1001"]
	direction TB
	b1001_9["eff__753 push_u32"]
end
branch_998 --> block_1001

</pre>`;
window.traces["I32_GT_U"]["unLEM"] = ''
window.traces["I32_GT_U"]["unLEM"] += `<pre class='graph'>---
config:
  layout: elk
---
graph TD
	1[\\"Finish"/]
	0 -. Codeptr Trap Locals Globals Tables Memory Extra .-> 1
	12 -. Stack .-> 1
	12{{"Sϕ Stack "}}
	19 --> 12
	22 --> 12
	20 --> 12
	20{{"Sϕ Stack "}}
	17 --> 20
	11 --> 20
	9 --> 20
	9["eff__753 push_u32"]
	14 --> 9
	4 -. Stack .-> 9
	4["a pop_u32"]
	3 -. Stack .-> 4
	3["b pop_u32"]
	0 -. Stack .-> 3
	0[/"Start"\\]
	14["abs__758 lift_u32"]
	8 --> 14
	8["arg__754 0"]
	11["eff__751 push_u32"]
	13 --> 11
	4 -. Stack .-> 11
	13["abs__757 lift_u32"]
	10 --> 13
	10["arg__752 1"]
	17["mt__759 U32_maybeTrue"]
	7 --> 17
	7["cond__750 U32_gt"]
	4 --> 7
	3 --> 7
	22["eff_push__763 push_u32"]
	21 --> 22
	4 -. Stack .-> 22
	21["merge__762 merge_u"]
	13 --> 21
	14 --> 21
	19["mb__761 bool.&&"]
	17 --> 19
	18 --> 19
	18["mf__760 U32_maybeFalse"]
	7 --> 18
</pre>`;
window.traces["I32_GT_U"]["unlem_schedule"] = ''
window.traces["I32_GT_U"]["unlem_schedule"] += `<pre class=''>def b = pop_u32();
def a = pop_u32();
def cond__750 = U32_gt(a, b);
def mt__759 = U32_maybeTrue(cond__750);
def mf__760 = U32_maybeFalse(cond__750);
def mb__761 = bool.&&(mt__759, mf__760);
if (mb__761) {
	def arg__752 : u32 = 1;
	def abs__757 = lift_u32(arg__752);
	def arg__754 : u32 = 0;
	def abs__758 = lift_u32(arg__754);
	def merge__762 = merge_u(abs__757, abs__758);
	def eff_push__763 = push_u32(merge__762);
} else {
	if (mt__759) {
		def arg__752 : u32 = 1;
		def abs__757 = lift_u32(arg__752);
		def eff__751 = push_u32(abs__757);
	} else {
		def arg__754 : u32 = 0;
		def abs__758 = lift_u32(arg__754);
		def eff__753 = push_u32(abs__758);
	}
// phis: 
}
// phis: 
</pre>`;
window.traces["I32_GT_U"]["unlem_scheduler"] = ''
window.traces["I32_GT_U"]["unlem_scheduler"] += `<pre class='graph'>graph TD
subgraph block_1003["Block 1003"]
	direction TB
	b1003_1[\\"Finish"/]
	b1003_22["eff_push__763 push_u32"]
	b1003_21["merge__762 merge_u"]
	b1003_22 --> b1003_1
	b1003_21 --> b1003_22
end
phi_1005 --> block_1003
subgraph phi_1005["Phi 1005"]
	p1005_12{{"Sϕ Stack "}}
end
block_1006 --> phi_1005
block_1007 --> phi_1005
subgraph block_1006["Block 1006"]
	direction TB
	b1006_22["eff_push__763 push_u32"]
	b1006_21["merge__762 merge_u"]
	b1006_21 --> b1006_22
end
phi_1014 --> block_1006
subgraph phi_1014["Phi 1014"]
	p1014_20{{"Sϕ Stack "}}
end
block_1015 --> phi_1014
block_1016 --> phi_1014
subgraph block_1015["Block 1015"]
	direction TB
end
branch_1013 --> block_1015
subgraph branch_1013["Branch 1013"]
	br1013_17["mt__759 U32_maybeTrue"]

end
branch_1004 --> branch_1013
subgraph branch_1004["Branch 1004"]
	br1004_19["mb__761 bool.&&"]

end
block_1012 --> branch_1004
subgraph block_1012["Block 1012"]
	direction TB
	b1012_19["mb__761 bool.&&"]
	b1012_17["mt__759 U32_maybeTrue"]
	b1012_18["mf__760 U32_maybeFalse"]
	b1012_11["eff__751 push_u32"]
	b1012_9["eff__753 push_u32"]
	b1012_7["cond__750 U32_gt"]
	b1012_13["abs__757 lift_u32"]
	b1012_14["abs__758 lift_u32"]
	b1012_4["a pop_u32"]
	b1012_3["b pop_u32"]
	b1012_10["arg__752 1"]
	b1012_8["arg__754 0"]
	b1012_0[/"Start"\\]
	b1012_17 --> b1012_19
	b1012_18 --> b1012_17
	b1012_11 --> b1012_18
	b1012_9 --> b1012_11
	b1012_7 --> b1012_9
	b1012_13 --> b1012_7
	b1012_14 --> b1012_13
	b1012_4 --> b1012_14
	b1012_3 --> b1012_4
	b1012_10 --> b1012_3
	b1012_8 --> b1012_10
	b1012_0 --> b1012_8
end
subgraph block_1016["Block 1016"]
	direction TB
end
branch_1013 --> block_1016
subgraph block_1007["Block 1007"]
	direction TB
end
phi_1009 --> block_1007
subgraph phi_1009["Phi 1009"]
	p1009_20{{"Sϕ Stack "}}
end
block_1010 --> phi_1009
block_1011 --> phi_1009
subgraph block_1010["Block 1010"]
	direction TB
end
branch_1008 --> block_1010
subgraph branch_1008["Branch 1008"]
	br1008_17["mt__759 U32_maybeTrue"]

end
branch_1004 --> branch_1008
subgraph block_1011["Block 1011"]
	direction TB
end
branch_1008 --> block_1011

</pre>`;
window.traces["I32_GT_U"]["unlem_pretty"] = ''
window.traces["I32_GT_U"]["unlem_pretty"] += `<pre class=''>def b = pop_u32();
def a = pop_u32();
def mt = U32_maybeTrue(U32_gt(a, b));
def mf = U32_maybeFalse(U32_gt(a, b));
if (bool.&&(mt, mf)) {
	push_u32(merge_u(lift_u32(1), lift_u32(0)));
} else {
	if (mt) {
		push_u32(lift_u32(1));
	} else {
		push_u32(lift_u32(0));
	}
}
</pre>`;
window.traces["I32_GT_U"]["constUnLEM"] = ''
window.traces["I32_GT_U"]["constUnLEM"] += `<pre class='graph'>---
config:
  layout: elk
---
graph TD
	1[\\"Finish"/]
	0 -. Codeptr Trap Locals Globals Tables Memory Extra .-> 1
	12 -. Stack .-> 1
	12["eff_push__763 push_u32"]
	21 --> 12
	4 -. Stack .-> 12
	4["a pop_u32"]
	3 -. Stack .-> 4
	3["b pop_u32"]
	0 -. Stack .-> 3
	0[/"Start"\\]
	21["merge__762 merge_u"]
	13 --> 21
	14 --> 21
	14["abs__758 lift_u32"]
	8 --> 14
	8["arg__754 0"]
	13["abs__757 lift_u32"]
	10 --> 13
	10["arg__752 1"]
</pre>`;
window.traces["I32_GT_U"]["chooseMerge"] = ''
window.traces["I32_GT_U"]["chooseMerge"] += `<pre class='graph'>---
config:
  layout: elk
---
graph TD
	1[\\"Finish"/]
	0 -. Codeptr Trap Locals Globals Tables Memory Extra .-> 1
	12 -. Stack .-> 1
	12["eff_push__763 push_u32"]
	13 --> 12
	4 -. Stack .-> 12
	4["a pop_u32"]
	3 -. Stack .-> 4
	3["b pop_u32"]
	0 -. Stack .-> 3
	0[/"Start"\\]
	13["abs__757 lift_u32"]
	10 --> 13
	10["arg__752 1"]
</pre>`;
window.traces["I32_GT_U"]["scheduled"] = ''
window.traces["I32_GT_U"]["scheduled"] += `<pre class=''>def arg__752 : u32 = 1;
def abs__757 = lift_u32(arg__752);
def b = pop_u32();
def a = pop_u32();
def eff_push__763 = push_u32(abs__757);
</pre>`;
window.traces["I32_GT_U"]["pretty"] = ''
window.traces["I32_GT_U"]["pretty"] += `<pre class=''>def b = pop_u32();
def a = pop_u32();
push_u32(lift_u32(1));
</pre>`;
window.traces["I32_LE_S"] = {}
window.traces["I32_LE_S"]["parsed"] = ''
window.traces["I32_LE_S"]["parsed"] += `<pre class=''>def b = pop_u32();
def a = pop_u32();
def arg__770 = (b);
def arg__769 = (a);
def cond__764 = U32_le_s(arg__769, arg__770);
if (cond__764) {
	def arg__766 : u32 = 1;
	def eff__765 = push_u32(arg__766);
} else {
	def arg__768 : u32 = 0;
	def eff__767 = push_u32(arg__768);
}
// phis: 
</pre>`;
window.traces["I32_LE_S"]["raw"] = ''
window.traces["I32_LE_S"]["raw"] += `<pre class='graph'>---
config:
  layout: elk
---
graph TD
	1[\\"Finish"/]
	0 -. Codeptr Trap Locals Globals Tables Memory Extra .-> 1
	12 -. Stack .-> 1
	12{{"Sϕ Stack "}}
	7 --> 12
	11 --> 12
	9 --> 12
	9["eff__767 push_u32"]
	8 --> 9
	4 -. Stack .-> 9
	4["a pop_u32"]
	3 -. Stack .-> 4
	3["b pop_u32"]
	0 -. Stack .-> 3
	0[/"Start"\\]
	8["arg__768 0"]
	11["eff__765 push_u32"]
	10 --> 11
	4 -. Stack .-> 11
	10["arg__766 1"]
	7["cond__764 U32_le_s"]
	4 --> 7
	3 --> 7
</pre>`;
window.traces["I32_LE_S"]["overloadOps"] = ''
window.traces["I32_LE_S"]["overloadOps"] += `<pre class='graph'>---
config:
  layout: elk
---
graph TD
	1[\\"Finish"/]
	0 -. Codeptr Trap Locals Globals Tables Memory Extra .-> 1
	12 -. Stack .-> 1
	12{{"Sϕ Stack "}}
	7 --> 12
	11 --> 12
	9 --> 12
	9["eff__767 push_u32"]
	8 --> 9
	4 -. Stack .-> 9
	4["a pop_u32"]
	3 -. Stack .-> 4
	3["b pop_u32"]
	0 -. Stack .-> 3
	0[/"Start"\\]
	8["arg__768 0"]
	11["eff__765 push_u32"]
	10 --> 11
	4 -. Stack .-> 11
	10["arg__766 1"]
	7["cond__764 U32_le_s"]
	4 --> 7
	3 --> 7
</pre>`;
window.traces["I32_LE_S"]["addAbstractions"] = ''
window.traces["I32_LE_S"]["addAbstractions"] += `<pre class='graph'>---
config:
  layout: elk
---
graph TD
	1[\\"Finish"/]
	0 -. Codeptr Trap Locals Globals Tables Memory Extra .-> 1
	12 -. Stack .-> 1
	12{{"Sϕ Stack "}}
	7 --> 12
	11 --> 12
	9 --> 12
	9["eff__767 push_u32"]
	14 --> 9
	4 -. Stack .-> 9
	4["a pop_u32"]
	3 -. Stack .-> 4
	3["b pop_u32"]
	0 -. Stack .-> 3
	0[/"Start"\\]
	14["abs__772 lift_u32"]
	8 --> 14
	8["arg__768 0"]
	11["eff__765 push_u32"]
	13 --> 11
	4 -. Stack .-> 11
	13["abs__771 lift_u32"]
	10 --> 13
	10["arg__766 1"]
	7["cond__764 U32_le_s"]
	4 --> 7
	3 --> 7
</pre>`;
window.traces["I32_LE_S"]["schedulerMermaid"] = ''
window.traces["I32_LE_S"]["schedulerMermaid"] += `<pre class='graph'>graph TD
subgraph block_1017["Block 1017"]
	direction TB
	b1017_1[\\"Finish"/]
	b1017_11["eff__765 push_u32"]
	b1017_9["eff__767 push_u32"]
	b1017_4["a pop_u32"]
	b1017_3["b pop_u32"]
	b1017_13["abs__771 lift_u32"]
	b1017_14["abs__772 lift_u32"]
	b1017_10["arg__766 1"]
	b1017_8["arg__768 0"]
	b1017_11 --> b1017_1
	b1017_9 --> b1017_11
	b1017_4 --> b1017_9
	b1017_3 --> b1017_4
	b1017_13 --> b1017_3
	b1017_14 --> b1017_13
	b1017_10 --> b1017_14
	b1017_8 --> b1017_10
end
phi_1019 --> block_1017
subgraph phi_1019["Phi 1019"]
	p1019_12{{"Sϕ Stack "}}
end
block_1020 --> phi_1019
block_1021 --> phi_1019
subgraph block_1020["Block 1020"]
	direction TB
	b1020_11["eff__765 push_u32"]
end
branch_1018 --> block_1020
subgraph branch_1018["Branch 1018"]
	br1018_7["cond__764 U32_le_s"]

end
block_1022 --> branch_1018
subgraph block_1022["Block 1022"]
	direction TB
	b1022_7["cond__764 U32_le_s"]
	b1022_0[/"Start"\\]
	b1022_0 --> b1022_7
end
subgraph block_1021["Block 1021"]
	direction TB
	b1021_9["eff__767 push_u32"]
end
branch_1018 --> block_1021

</pre>`;
window.traces["I32_LE_S"]["unLEM"] = ''
window.traces["I32_LE_S"]["unLEM"] += `<pre class='graph'>---
config:
  layout: elk
---
graph TD
	1[\\"Finish"/]
	0 -. Codeptr Trap Locals Globals Tables Memory Extra .-> 1
	12 -. Stack .-> 1
	12{{"Sϕ Stack "}}
	19 --> 12
	22 --> 12
	20 --> 12
	20{{"Sϕ Stack "}}
	17 --> 20
	11 --> 20
	9 --> 20
	9["eff__767 push_u32"]
	14 --> 9
	4 -. Stack .-> 9
	4["a pop_u32"]
	3 -. Stack .-> 4
	3["b pop_u32"]
	0 -. Stack .-> 3
	0[/"Start"\\]
	14["abs__772 lift_u32"]
	8 --> 14
	8["arg__768 0"]
	11["eff__765 push_u32"]
	13 --> 11
	4 -. Stack .-> 11
	13["abs__771 lift_u32"]
	10 --> 13
	10["arg__766 1"]
	17["mt__773 U32_maybeTrue"]
	7 --> 17
	7["cond__764 U32_le_s"]
	4 --> 7
	3 --> 7
	22["eff_push__777 push_u32"]
	21 --> 22
	4 -. Stack .-> 22
	21["merge__776 merge_u"]
	13 --> 21
	14 --> 21
	19["mb__775 bool.&&"]
	17 --> 19
	18 --> 19
	18["mf__774 U32_maybeFalse"]
	7 --> 18
</pre>`;
window.traces["I32_LE_S"]["unlem_schedule"] = ''
window.traces["I32_LE_S"]["unlem_schedule"] += `<pre class=''>def b = pop_u32();
def a = pop_u32();
def cond__764 = U32_le_s(a, b);
def mt__773 = U32_maybeTrue(cond__764);
def mf__774 = U32_maybeFalse(cond__764);
def mb__775 = bool.&&(mt__773, mf__774);
if (mb__775) {
	def arg__766 : u32 = 1;
	def abs__771 = lift_u32(arg__766);
	def arg__768 : u32 = 0;
	def abs__772 = lift_u32(arg__768);
	def merge__776 = merge_u(abs__771, abs__772);
	def eff_push__777 = push_u32(merge__776);
} else {
	if (mt__773) {
		def arg__766 : u32 = 1;
		def abs__771 = lift_u32(arg__766);
		def eff__765 = push_u32(abs__771);
	} else {
		def arg__768 : u32 = 0;
		def abs__772 = lift_u32(arg__768);
		def eff__767 = push_u32(abs__772);
	}
// phis: 
}
// phis: 
</pre>`;
window.traces["I32_LE_S"]["unlem_scheduler"] = ''
window.traces["I32_LE_S"]["unlem_scheduler"] += `<pre class='graph'>graph TD
subgraph block_1023["Block 1023"]
	direction TB
	b1023_1[\\"Finish"/]
	b1023_22["eff_push__777 push_u32"]
	b1023_21["merge__776 merge_u"]
	b1023_22 --> b1023_1
	b1023_21 --> b1023_22
end
phi_1025 --> block_1023
subgraph phi_1025["Phi 1025"]
	p1025_12{{"Sϕ Stack "}}
end
block_1026 --> phi_1025
block_1027 --> phi_1025
subgraph block_1026["Block 1026"]
	direction TB
	b1026_22["eff_push__777 push_u32"]
	b1026_21["merge__776 merge_u"]
	b1026_21 --> b1026_22
end
phi_1034 --> block_1026
subgraph phi_1034["Phi 1034"]
	p1034_20{{"Sϕ Stack "}}
end
block_1035 --> phi_1034
block_1036 --> phi_1034
subgraph block_1035["Block 1035"]
	direction TB
end
branch_1033 --> block_1035
subgraph branch_1033["Branch 1033"]
	br1033_17["mt__773 U32_maybeTrue"]

end
branch_1024 --> branch_1033
subgraph branch_1024["Branch 1024"]
	br1024_19["mb__775 bool.&&"]

end
block_1032 --> branch_1024
subgraph block_1032["Block 1032"]
	direction TB
	b1032_19["mb__775 bool.&&"]
	b1032_17["mt__773 U32_maybeTrue"]
	b1032_18["mf__774 U32_maybeFalse"]
	b1032_11["eff__765 push_u32"]
	b1032_9["eff__767 push_u32"]
	b1032_7["cond__764 U32_le_s"]
	b1032_13["abs__771 lift_u32"]
	b1032_14["abs__772 lift_u32"]
	b1032_4["a pop_u32"]
	b1032_3["b pop_u32"]
	b1032_10["arg__766 1"]
	b1032_8["arg__768 0"]
	b1032_0[/"Start"\\]
	b1032_17 --> b1032_19
	b1032_18 --> b1032_17
	b1032_11 --> b1032_18
	b1032_9 --> b1032_11
	b1032_7 --> b1032_9
	b1032_13 --> b1032_7
	b1032_14 --> b1032_13
	b1032_4 --> b1032_14
	b1032_3 --> b1032_4
	b1032_10 --> b1032_3
	b1032_8 --> b1032_10
	b1032_0 --> b1032_8
end
subgraph block_1036["Block 1036"]
	direction TB
end
branch_1033 --> block_1036
subgraph block_1027["Block 1027"]
	direction TB
end
phi_1029 --> block_1027
subgraph phi_1029["Phi 1029"]
	p1029_20{{"Sϕ Stack "}}
end
block_1030 --> phi_1029
block_1031 --> phi_1029
subgraph block_1030["Block 1030"]
	direction TB
end
branch_1028 --> block_1030
subgraph branch_1028["Branch 1028"]
	br1028_17["mt__773 U32_maybeTrue"]

end
branch_1024 --> branch_1028
subgraph block_1031["Block 1031"]
	direction TB
end
branch_1028 --> block_1031

</pre>`;
window.traces["I32_LE_S"]["unlem_pretty"] = ''
window.traces["I32_LE_S"]["unlem_pretty"] += `<pre class=''>def b = pop_u32();
def a = pop_u32();
def mt = U32_maybeTrue(U32_le_s(a, b));
def mf = U32_maybeFalse(U32_le_s(a, b));
if (bool.&&(mt, mf)) {
	push_u32(merge_u(lift_u32(1), lift_u32(0)));
} else {
	if (mt) {
		push_u32(lift_u32(1));
	} else {
		push_u32(lift_u32(0));
	}
}
</pre>`;
window.traces["I32_LE_S"]["constUnLEM"] = ''
window.traces["I32_LE_S"]["constUnLEM"] += `<pre class='graph'>---
config:
  layout: elk
---
graph TD
	1[\\"Finish"/]
	0 -. Codeptr Trap Locals Globals Tables Memory Extra .-> 1
	12 -. Stack .-> 1
	12["eff_push__777 push_u32"]
	21 --> 12
	4 -. Stack .-> 12
	4["a pop_u32"]
	3 -. Stack .-> 4
	3["b pop_u32"]
	0 -. Stack .-> 3
	0[/"Start"\\]
	21["merge__776 merge_u"]
	13 --> 21
	14 --> 21
	14["abs__772 lift_u32"]
	8 --> 14
	8["arg__768 0"]
	13["abs__771 lift_u32"]
	10 --> 13
	10["arg__766 1"]
</pre>`;
window.traces["I32_LE_S"]["chooseMerge"] = ''
window.traces["I32_LE_S"]["chooseMerge"] += `<pre class='graph'>---
config:
  layout: elk
---
graph TD
	1[\\"Finish"/]
	0 -. Codeptr Trap Locals Globals Tables Memory Extra .-> 1
	12 -. Stack .-> 1
	12["eff_push__777 push_u32"]
	13 --> 12
	4 -. Stack .-> 12
	4["a pop_u32"]
	3 -. Stack .-> 4
	3["b pop_u32"]
	0 -. Stack .-> 3
	0[/"Start"\\]
	13["abs__771 lift_u32"]
	10 --> 13
	10["arg__766 1"]
</pre>`;
window.traces["I32_LE_S"]["scheduled"] = ''
window.traces["I32_LE_S"]["scheduled"] += `<pre class=''>def arg__766 : u32 = 1;
def abs__771 = lift_u32(arg__766);
def b = pop_u32();
def a = pop_u32();
def eff_push__777 = push_u32(abs__771);
</pre>`;
window.traces["I32_LE_S"]["pretty"] = ''
window.traces["I32_LE_S"]["pretty"] += `<pre class=''>def b = pop_u32();
def a = pop_u32();
push_u32(lift_u32(1));
</pre>`;
window.traces["I32_LE_U"] = {}
window.traces["I32_LE_U"]["parsed"] = ''
window.traces["I32_LE_U"]["parsed"] += `<pre class=''>def b = pop_u32();
def a = pop_u32();
def arg__784 = (b);
def arg__783 = (a);
def cond__778 = u32.<=(arg__783, arg__784);
if (cond__778) {
	def arg__780 : u32 = 1;
	def eff__779 = push_u32(arg__780);
} else {
	def arg__782 : u32 = 0;
	def eff__781 = push_u32(arg__782);
}
// phis: 
</pre>`;
window.traces["I32_LE_U"]["raw"] = ''
window.traces["I32_LE_U"]["raw"] += `<pre class='graph'>---
config:
  layout: elk
---
graph TD
	1[\\"Finish"/]
	0 -. Codeptr Trap Locals Globals Tables Memory Extra .-> 1
	12 -. Stack .-> 1
	12{{"Sϕ Stack "}}
	7 --> 12
	11 --> 12
	9 --> 12
	9["eff__781 push_u32"]
	8 --> 9
	4 -. Stack .-> 9
	4["a pop_u32"]
	3 -. Stack .-> 4
	3["b pop_u32"]
	0 -. Stack .-> 3
	0[/"Start"\\]
	8["arg__782 0"]
	11["eff__779 push_u32"]
	10 --> 11
	4 -. Stack .-> 11
	10["arg__780 1"]
	7["cond__778 u32.<="]
	4 --> 7
	3 --> 7
</pre>`;
window.traces["I32_LE_U"]["overloadOps"] = ''
window.traces["I32_LE_U"]["overloadOps"] += `<pre class='graph'>---
config:
  layout: elk
---
graph TD
	1[\\"Finish"/]
	0 -. Codeptr Trap Locals Globals Tables Memory Extra .-> 1
	12 -. Stack .-> 1
	12{{"Sϕ Stack "}}
	7 --> 12
	11 --> 12
	9 --> 12
	9["eff__781 push_u32"]
	8 --> 9
	4 -. Stack .-> 9
	4["a pop_u32"]
	3 -. Stack .-> 4
	3["b pop_u32"]
	0 -. Stack .-> 3
	0[/"Start"\\]
	8["arg__782 0"]
	11["eff__779 push_u32"]
	10 --> 11
	4 -. Stack .-> 11
	10["arg__780 1"]
	7["cond__778 U32_lte"]
	4 --> 7
	3 --> 7
</pre>`;
window.traces["I32_LE_U"]["addAbstractions"] = ''
window.traces["I32_LE_U"]["addAbstractions"] += `<pre class='graph'>---
config:
  layout: elk
---
graph TD
	1[\\"Finish"/]
	0 -. Codeptr Trap Locals Globals Tables Memory Extra .-> 1
	12 -. Stack .-> 1
	12{{"Sϕ Stack "}}
	7 --> 12
	11 --> 12
	9 --> 12
	9["eff__781 push_u32"]
	14 --> 9
	4 -. Stack .-> 9
	4["a pop_u32"]
	3 -. Stack .-> 4
	3["b pop_u32"]
	0 -. Stack .-> 3
	0[/"Start"\\]
	14["abs__786 lift_u32"]
	8 --> 14
	8["arg__782 0"]
	11["eff__779 push_u32"]
	13 --> 11
	4 -. Stack .-> 11
	13["abs__785 lift_u32"]
	10 --> 13
	10["arg__780 1"]
	7["cond__778 U32_lte"]
	4 --> 7
	3 --> 7
</pre>`;
window.traces["I32_LE_U"]["schedulerMermaid"] = ''
window.traces["I32_LE_U"]["schedulerMermaid"] += `<pre class='graph'>graph TD
subgraph block_1037["Block 1037"]
	direction TB
	b1037_1[\\"Finish"/]
	b1037_11["eff__779 push_u32"]
	b1037_9["eff__781 push_u32"]
	b1037_4["a pop_u32"]
	b1037_3["b pop_u32"]
	b1037_13["abs__785 lift_u32"]
	b1037_14["abs__786 lift_u32"]
	b1037_10["arg__780 1"]
	b1037_8["arg__782 0"]
	b1037_11 --> b1037_1
	b1037_9 --> b1037_11
	b1037_4 --> b1037_9
	b1037_3 --> b1037_4
	b1037_13 --> b1037_3
	b1037_14 --> b1037_13
	b1037_10 --> b1037_14
	b1037_8 --> b1037_10
end
phi_1039 --> block_1037
subgraph phi_1039["Phi 1039"]
	p1039_12{{"Sϕ Stack "}}
end
block_1040 --> phi_1039
block_1041 --> phi_1039
subgraph block_1040["Block 1040"]
	direction TB
	b1040_11["eff__779 push_u32"]
end
branch_1038 --> block_1040
subgraph branch_1038["Branch 1038"]
	br1038_7["cond__778 U32_lte"]

end
block_1042 --> branch_1038
subgraph block_1042["Block 1042"]
	direction TB
	b1042_7["cond__778 U32_lte"]
	b1042_0[/"Start"\\]
	b1042_0 --> b1042_7
end
subgraph block_1041["Block 1041"]
	direction TB
	b1041_9["eff__781 push_u32"]
end
branch_1038 --> block_1041

</pre>`;
window.traces["I32_LE_U"]["unLEM"] = ''
window.traces["I32_LE_U"]["unLEM"] += `<pre class='graph'>---
config:
  layout: elk
---
graph TD
	1[\\"Finish"/]
	0 -. Codeptr Trap Locals Globals Tables Memory Extra .-> 1
	12 -. Stack .-> 1
	12{{"Sϕ Stack "}}
	19 --> 12
	22 --> 12
	20 --> 12
	20{{"Sϕ Stack "}}
	17 --> 20
	11 --> 20
	9 --> 20
	9["eff__781 push_u32"]
	14 --> 9
	4 -. Stack .-> 9
	4["a pop_u32"]
	3 -. Stack .-> 4
	3["b pop_u32"]
	0 -. Stack .-> 3
	0[/"Start"\\]
	14["abs__786 lift_u32"]
	8 --> 14
	8["arg__782 0"]
	11["eff__779 push_u32"]
	13 --> 11
	4 -. Stack .-> 11
	13["abs__785 lift_u32"]
	10 --> 13
	10["arg__780 1"]
	17["mt__787 U32_maybeTrue"]
	7 --> 17
	7["cond__778 U32_lte"]
	4 --> 7
	3 --> 7
	22["eff_push__791 push_u32"]
	21 --> 22
	4 -. Stack .-> 22
	21["merge__790 merge_u"]
	13 --> 21
	14 --> 21
	19["mb__789 bool.&&"]
	17 --> 19
	18 --> 19
	18["mf__788 U32_maybeFalse"]
	7 --> 18
</pre>`;
window.traces["I32_LE_U"]["unlem_schedule"] = ''
window.traces["I32_LE_U"]["unlem_schedule"] += `<pre class=''>def b = pop_u32();
def a = pop_u32();
def cond__778 = U32_lte(a, b);
def mt__787 = U32_maybeTrue(cond__778);
def mf__788 = U32_maybeFalse(cond__778);
def mb__789 = bool.&&(mt__787, mf__788);
if (mb__789) {
	def arg__780 : u32 = 1;
	def abs__785 = lift_u32(arg__780);
	def arg__782 : u32 = 0;
	def abs__786 = lift_u32(arg__782);
	def merge__790 = merge_u(abs__785, abs__786);
	def eff_push__791 = push_u32(merge__790);
} else {
	if (mt__787) {
		def arg__780 : u32 = 1;
		def abs__785 = lift_u32(arg__780);
		def eff__779 = push_u32(abs__785);
	} else {
		def arg__782 : u32 = 0;
		def abs__786 = lift_u32(arg__782);
		def eff__781 = push_u32(abs__786);
	}
// phis: 
}
// phis: 
</pre>`;
window.traces["I32_LE_U"]["unlem_scheduler"] = ''
window.traces["I32_LE_U"]["unlem_scheduler"] += `<pre class='graph'>graph TD
subgraph block_1043["Block 1043"]
	direction TB
	b1043_1[\\"Finish"/]
	b1043_22["eff_push__791 push_u32"]
	b1043_21["merge__790 merge_u"]
	b1043_22 --> b1043_1
	b1043_21 --> b1043_22
end
phi_1045 --> block_1043
subgraph phi_1045["Phi 1045"]
	p1045_12{{"Sϕ Stack "}}
end
block_1046 --> phi_1045
block_1047 --> phi_1045
subgraph block_1046["Block 1046"]
	direction TB
	b1046_22["eff_push__791 push_u32"]
	b1046_21["merge__790 merge_u"]
	b1046_21 --> b1046_22
end
phi_1054 --> block_1046
subgraph phi_1054["Phi 1054"]
	p1054_20{{"Sϕ Stack "}}
end
block_1055 --> phi_1054
block_1056 --> phi_1054
subgraph block_1055["Block 1055"]
	direction TB
end
branch_1053 --> block_1055
subgraph branch_1053["Branch 1053"]
	br1053_17["mt__787 U32_maybeTrue"]

end
branch_1044 --> branch_1053
subgraph branch_1044["Branch 1044"]
	br1044_19["mb__789 bool.&&"]

end
block_1052 --> branch_1044
subgraph block_1052["Block 1052"]
	direction TB
	b1052_19["mb__789 bool.&&"]
	b1052_17["mt__787 U32_maybeTrue"]
	b1052_18["mf__788 U32_maybeFalse"]
	b1052_11["eff__779 push_u32"]
	b1052_9["eff__781 push_u32"]
	b1052_7["cond__778 U32_lte"]
	b1052_13["abs__785 lift_u32"]
	b1052_14["abs__786 lift_u32"]
	b1052_4["a pop_u32"]
	b1052_3["b pop_u32"]
	b1052_10["arg__780 1"]
	b1052_8["arg__782 0"]
	b1052_0[/"Start"\\]
	b1052_17 --> b1052_19
	b1052_18 --> b1052_17
	b1052_11 --> b1052_18
	b1052_9 --> b1052_11
	b1052_7 --> b1052_9
	b1052_13 --> b1052_7
	b1052_14 --> b1052_13
	b1052_4 --> b1052_14
	b1052_3 --> b1052_4
	b1052_10 --> b1052_3
	b1052_8 --> b1052_10
	b1052_0 --> b1052_8
end
subgraph block_1056["Block 1056"]
	direction TB
end
branch_1053 --> block_1056
subgraph block_1047["Block 1047"]
	direction TB
end
phi_1049 --> block_1047
subgraph phi_1049["Phi 1049"]
	p1049_20{{"Sϕ Stack "}}
end
block_1050 --> phi_1049
block_1051 --> phi_1049
subgraph block_1050["Block 1050"]
	direction TB
end
branch_1048 --> block_1050
subgraph branch_1048["Branch 1048"]
	br1048_17["mt__787 U32_maybeTrue"]

end
branch_1044 --> branch_1048
subgraph block_1051["Block 1051"]
	direction TB
end
branch_1048 --> block_1051

</pre>`;
window.traces["I32_LE_U"]["unlem_pretty"] = ''
window.traces["I32_LE_U"]["unlem_pretty"] += `<pre class=''>def b = pop_u32();
def a = pop_u32();
def mt = U32_maybeTrue(U32_lte(a, b));
def mf = U32_maybeFalse(U32_lte(a, b));
if (bool.&&(mt, mf)) {
	push_u32(merge_u(lift_u32(1), lift_u32(0)));
} else {
	if (mt) {
		push_u32(lift_u32(1));
	} else {
		push_u32(lift_u32(0));
	}
}
</pre>`;
window.traces["I32_LE_U"]["constUnLEM"] = ''
window.traces["I32_LE_U"]["constUnLEM"] += `<pre class='graph'>---
config:
  layout: elk
---
graph TD
	1[\\"Finish"/]
	0 -. Codeptr Trap Locals Globals Tables Memory Extra .-> 1
	12 -. Stack .-> 1
	12["eff_push__791 push_u32"]
	21 --> 12
	4 -. Stack .-> 12
	4["a pop_u32"]
	3 -. Stack .-> 4
	3["b pop_u32"]
	0 -. Stack .-> 3
	0[/"Start"\\]
	21["merge__790 merge_u"]
	13 --> 21
	14 --> 21
	14["abs__786 lift_u32"]
	8 --> 14
	8["arg__782 0"]
	13["abs__785 lift_u32"]
	10 --> 13
	10["arg__780 1"]
</pre>`;
window.traces["I32_LE_U"]["chooseMerge"] = ''
window.traces["I32_LE_U"]["chooseMerge"] += `<pre class='graph'>---
config:
  layout: elk
---
graph TD
	1[\\"Finish"/]
	0 -. Codeptr Trap Locals Globals Tables Memory Extra .-> 1
	12 -. Stack .-> 1
	12["eff_push__791 push_u32"]
	13 --> 12
	4 -. Stack .-> 12
	4["a pop_u32"]
	3 -. Stack .-> 4
	3["b pop_u32"]
	0 -. Stack .-> 3
	0[/"Start"\\]
	13["abs__785 lift_u32"]
	10 --> 13
	10["arg__780 1"]
</pre>`;
window.traces["I32_LE_U"]["scheduled"] = ''
window.traces["I32_LE_U"]["scheduled"] += `<pre class=''>def arg__780 : u32 = 1;
def abs__785 = lift_u32(arg__780);
def b = pop_u32();
def a = pop_u32();
def eff_push__791 = push_u32(abs__785);
</pre>`;
window.traces["I32_LE_U"]["pretty"] = ''
window.traces["I32_LE_U"]["pretty"] += `<pre class=''>def b = pop_u32();
def a = pop_u32();
push_u32(lift_u32(1));
</pre>`;
window.traces["I32_GE_S"] = {}
window.traces["I32_GE_S"]["parsed"] = ''
window.traces["I32_GE_S"]["parsed"] += `<pre class=''>def b = pop_u32();
def a = pop_u32();
def arg__798 = (b);
def arg__797 = (a);
def cond__792 = U32_ge_s(arg__797, arg__798);
if (cond__792) {
	def arg__794 : u32 = 1;
	def eff__793 = push_u32(arg__794);
} else {
	def arg__796 : u32 = 0;
	def eff__795 = push_u32(arg__796);
}
// phis: 
</pre>`;
window.traces["I32_GE_S"]["raw"] = ''
window.traces["I32_GE_S"]["raw"] += `<pre class='graph'>---
config:
  layout: elk
---
graph TD
	1[\\"Finish"/]
	0 -. Codeptr Trap Locals Globals Tables Memory Extra .-> 1
	12 -. Stack .-> 1
	12{{"Sϕ Stack "}}
	7 --> 12
	11 --> 12
	9 --> 12
	9["eff__795 push_u32"]
	8 --> 9
	4 -. Stack .-> 9
	4["a pop_u32"]
	3 -. Stack .-> 4
	3["b pop_u32"]
	0 -. Stack .-> 3
	0[/"Start"\\]
	8["arg__796 0"]
	11["eff__793 push_u32"]
	10 --> 11
	4 -. Stack .-> 11
	10["arg__794 1"]
	7["cond__792 U32_ge_s"]
	4 --> 7
	3 --> 7
</pre>`;
window.traces["I32_GE_S"]["overloadOps"] = ''
window.traces["I32_GE_S"]["overloadOps"] += `<pre class='graph'>---
config:
  layout: elk
---
graph TD
	1[\\"Finish"/]
	0 -. Codeptr Trap Locals Globals Tables Memory Extra .-> 1
	12 -. Stack .-> 1
	12{{"Sϕ Stack "}}
	7 --> 12
	11 --> 12
	9 --> 12
	9["eff__795 push_u32"]
	8 --> 9
	4 -. Stack .-> 9
	4["a pop_u32"]
	3 -. Stack .-> 4
	3["b pop_u32"]
	0 -. Stack .-> 3
	0[/"Start"\\]
	8["arg__796 0"]
	11["eff__793 push_u32"]
	10 --> 11
	4 -. Stack .-> 11
	10["arg__794 1"]
	7["cond__792 U32_ge_s"]
	4 --> 7
	3 --> 7
</pre>`;
window.traces["I32_GE_S"]["addAbstractions"] = ''
window.traces["I32_GE_S"]["addAbstractions"] += `<pre class='graph'>---
config:
  layout: elk
---
graph TD
	1[\\"Finish"/]
	0 -. Codeptr Trap Locals Globals Tables Memory Extra .-> 1
	12 -. Stack .-> 1
	12{{"Sϕ Stack "}}
	7 --> 12
	11 --> 12
	9 --> 12
	9["eff__795 push_u32"]
	14 --> 9
	4 -. Stack .-> 9
	4["a pop_u32"]
	3 -. Stack .-> 4
	3["b pop_u32"]
	0 -. Stack .-> 3
	0[/"Start"\\]
	14["abs__800 lift_u32"]
	8 --> 14
	8["arg__796 0"]
	11["eff__793 push_u32"]
	13 --> 11
	4 -. Stack .-> 11
	13["abs__799 lift_u32"]
	10 --> 13
	10["arg__794 1"]
	7["cond__792 U32_ge_s"]
	4 --> 7
	3 --> 7
</pre>`;
window.traces["I32_GE_S"]["schedulerMermaid"] = ''
window.traces["I32_GE_S"]["schedulerMermaid"] += `<pre class='graph'>graph TD
subgraph block_1057["Block 1057"]
	direction TB
	b1057_1[\\"Finish"/]
	b1057_11["eff__793 push_u32"]
	b1057_9["eff__795 push_u32"]
	b1057_4["a pop_u32"]
	b1057_3["b pop_u32"]
	b1057_13["abs__799 lift_u32"]
	b1057_14["abs__800 lift_u32"]
	b1057_10["arg__794 1"]
	b1057_8["arg__796 0"]
	b1057_11 --> b1057_1
	b1057_9 --> b1057_11
	b1057_4 --> b1057_9
	b1057_3 --> b1057_4
	b1057_13 --> b1057_3
	b1057_14 --> b1057_13
	b1057_10 --> b1057_14
	b1057_8 --> b1057_10
end
phi_1059 --> block_1057
subgraph phi_1059["Phi 1059"]
	p1059_12{{"Sϕ Stack "}}
end
block_1060 --> phi_1059
block_1061 --> phi_1059
subgraph block_1060["Block 1060"]
	direction TB
	b1060_11["eff__793 push_u32"]
end
branch_1058 --> block_1060
subgraph branch_1058["Branch 1058"]
	br1058_7["cond__792 U32_ge_s"]

end
block_1062 --> branch_1058
subgraph block_1062["Block 1062"]
	direction TB
	b1062_7["cond__792 U32_ge_s"]
	b1062_0[/"Start"\\]
	b1062_0 --> b1062_7
end
subgraph block_1061["Block 1061"]
	direction TB
	b1061_9["eff__795 push_u32"]
end
branch_1058 --> block_1061

</pre>`;
window.traces["I32_GE_S"]["unLEM"] = ''
window.traces["I32_GE_S"]["unLEM"] += `<pre class='graph'>---
config:
  layout: elk
---
graph TD
	1[\\"Finish"/]
	0 -. Codeptr Trap Locals Globals Tables Memory Extra .-> 1
	12 -. Stack .-> 1
	12{{"Sϕ Stack "}}
	19 --> 12
	22 --> 12
	20 --> 12
	20{{"Sϕ Stack "}}
	17 --> 20
	11 --> 20
	9 --> 20
	9["eff__795 push_u32"]
	14 --> 9
	4 -. Stack .-> 9
	4["a pop_u32"]
	3 -. Stack .-> 4
	3["b pop_u32"]
	0 -. Stack .-> 3
	0[/"Start"\\]
	14["abs__800 lift_u32"]
	8 --> 14
	8["arg__796 0"]
	11["eff__793 push_u32"]
	13 --> 11
	4 -. Stack .-> 11
	13["abs__799 lift_u32"]
	10 --> 13
	10["arg__794 1"]
	17["mt__801 U32_maybeTrue"]
	7 --> 17
	7["cond__792 U32_ge_s"]
	4 --> 7
	3 --> 7
	22["eff_push__805 push_u32"]
	21 --> 22
	4 -. Stack .-> 22
	21["merge__804 merge_u"]
	13 --> 21
	14 --> 21
	19["mb__803 bool.&&"]
	17 --> 19
	18 --> 19
	18["mf__802 U32_maybeFalse"]
	7 --> 18
</pre>`;
window.traces["I32_GE_S"]["unlem_schedule"] = ''
window.traces["I32_GE_S"]["unlem_schedule"] += `<pre class=''>def b = pop_u32();
def a = pop_u32();
def cond__792 = U32_ge_s(a, b);
def mt__801 = U32_maybeTrue(cond__792);
def mf__802 = U32_maybeFalse(cond__792);
def mb__803 = bool.&&(mt__801, mf__802);
if (mb__803) {
	def arg__794 : u32 = 1;
	def abs__799 = lift_u32(arg__794);
	def arg__796 : u32 = 0;
	def abs__800 = lift_u32(arg__796);
	def merge__804 = merge_u(abs__799, abs__800);
	def eff_push__805 = push_u32(merge__804);
} else {
	if (mt__801) {
		def arg__794 : u32 = 1;
		def abs__799 = lift_u32(arg__794);
		def eff__793 = push_u32(abs__799);
	} else {
		def arg__796 : u32 = 0;
		def abs__800 = lift_u32(arg__796);
		def eff__795 = push_u32(abs__800);
	}
// phis: 
}
// phis: 
</pre>`;
window.traces["I32_GE_S"]["unlem_scheduler"] = ''
window.traces["I32_GE_S"]["unlem_scheduler"] += `<pre class='graph'>graph TD
subgraph block_1063["Block 1063"]
	direction TB
	b1063_1[\\"Finish"/]
	b1063_22["eff_push__805 push_u32"]
	b1063_21["merge__804 merge_u"]
	b1063_22 --> b1063_1
	b1063_21 --> b1063_22
end
phi_1065 --> block_1063
subgraph phi_1065["Phi 1065"]
	p1065_12{{"Sϕ Stack "}}
end
block_1066 --> phi_1065
block_1067 --> phi_1065
subgraph block_1066["Block 1066"]
	direction TB
	b1066_22["eff_push__805 push_u32"]
	b1066_21["merge__804 merge_u"]
	b1066_21 --> b1066_22
end
phi_1074 --> block_1066
subgraph phi_1074["Phi 1074"]
	p1074_20{{"Sϕ Stack "}}
end
block_1075 --> phi_1074
block_1076 --> phi_1074
subgraph block_1075["Block 1075"]
	direction TB
end
branch_1073 --> block_1075
subgraph branch_1073["Branch 1073"]
	br1073_17["mt__801 U32_maybeTrue"]

end
branch_1064 --> branch_1073
subgraph branch_1064["Branch 1064"]
	br1064_19["mb__803 bool.&&"]

end
block_1072 --> branch_1064
subgraph block_1072["Block 1072"]
	direction TB
	b1072_19["mb__803 bool.&&"]
	b1072_17["mt__801 U32_maybeTrue"]
	b1072_18["mf__802 U32_maybeFalse"]
	b1072_11["eff__793 push_u32"]
	b1072_9["eff__795 push_u32"]
	b1072_7["cond__792 U32_ge_s"]
	b1072_13["abs__799 lift_u32"]
	b1072_14["abs__800 lift_u32"]
	b1072_4["a pop_u32"]
	b1072_3["b pop_u32"]
	b1072_10["arg__794 1"]
	b1072_8["arg__796 0"]
	b1072_0[/"Start"\\]
	b1072_17 --> b1072_19
	b1072_18 --> b1072_17
	b1072_11 --> b1072_18
	b1072_9 --> b1072_11
	b1072_7 --> b1072_9
	b1072_13 --> b1072_7
	b1072_14 --> b1072_13
	b1072_4 --> b1072_14
	b1072_3 --> b1072_4
	b1072_10 --> b1072_3
	b1072_8 --> b1072_10
	b1072_0 --> b1072_8
end
subgraph block_1076["Block 1076"]
	direction TB
end
branch_1073 --> block_1076
subgraph block_1067["Block 1067"]
	direction TB
end
phi_1069 --> block_1067
subgraph phi_1069["Phi 1069"]
	p1069_20{{"Sϕ Stack "}}
end
block_1070 --> phi_1069
block_1071 --> phi_1069
subgraph block_1070["Block 1070"]
	direction TB
end
branch_1068 --> block_1070
subgraph branch_1068["Branch 1068"]
	br1068_17["mt__801 U32_maybeTrue"]

end
branch_1064 --> branch_1068
subgraph block_1071["Block 1071"]
	direction TB
end
branch_1068 --> block_1071

</pre>`;
window.traces["I32_GE_S"]["unlem_pretty"] = ''
window.traces["I32_GE_S"]["unlem_pretty"] += `<pre class=''>def b = pop_u32();
def a = pop_u32();
def mt = U32_maybeTrue(U32_ge_s(a, b));
def mf = U32_maybeFalse(U32_ge_s(a, b));
if (bool.&&(mt, mf)) {
	push_u32(merge_u(lift_u32(1), lift_u32(0)));
} else {
	if (mt) {
		push_u32(lift_u32(1));
	} else {
		push_u32(lift_u32(0));
	}
}
</pre>`;
window.traces["I32_GE_S"]["constUnLEM"] = ''
window.traces["I32_GE_S"]["constUnLEM"] += `<pre class='graph'>---
config:
  layout: elk
---
graph TD
	1[\\"Finish"/]
	0 -. Codeptr Trap Locals Globals Tables Memory Extra .-> 1
	12 -. Stack .-> 1
	12["eff_push__805 push_u32"]
	21 --> 12
	4 -. Stack .-> 12
	4["a pop_u32"]
	3 -. Stack .-> 4
	3["b pop_u32"]
	0 -. Stack .-> 3
	0[/"Start"\\]
	21["merge__804 merge_u"]
	13 --> 21
	14 --> 21
	14["abs__800 lift_u32"]
	8 --> 14
	8["arg__796 0"]
	13["abs__799 lift_u32"]
	10 --> 13
	10["arg__794 1"]
</pre>`;
window.traces["I32_GE_S"]["chooseMerge"] = ''
window.traces["I32_GE_S"]["chooseMerge"] += `<pre class='graph'>---
config:
  layout: elk
---
graph TD
	1[\\"Finish"/]
	0 -. Codeptr Trap Locals Globals Tables Memory Extra .-> 1
	12 -. Stack .-> 1
	12["eff_push__805 push_u32"]
	13 --> 12
	4 -. Stack .-> 12
	4["a pop_u32"]
	3 -. Stack .-> 4
	3["b pop_u32"]
	0 -. Stack .-> 3
	0[/"Start"\\]
	13["abs__799 lift_u32"]
	10 --> 13
	10["arg__794 1"]
</pre>`;
window.traces["I32_GE_S"]["scheduled"] = ''
window.traces["I32_GE_S"]["scheduled"] += `<pre class=''>def arg__794 : u32 = 1;
def abs__799 = lift_u32(arg__794);
def b = pop_u32();
def a = pop_u32();
def eff_push__805 = push_u32(abs__799);
</pre>`;
window.traces["I32_GE_S"]["pretty"] = ''
window.traces["I32_GE_S"]["pretty"] += `<pre class=''>def b = pop_u32();
def a = pop_u32();
push_u32(lift_u32(1));
</pre>`;
window.traces["I32_GE_U"] = {}
window.traces["I32_GE_U"]["parsed"] = ''
window.traces["I32_GE_U"]["parsed"] += `<pre class=''>def b = pop_u32();
def a = pop_u32();
def arg__812 = (b);
def arg__811 = (a);
def cond__806 = u32.>=(arg__811, arg__812);
if (cond__806) {
	def arg__808 : u32 = 1;
	def eff__807 = push_u32(arg__808);
} else {
	def arg__810 : u32 = 0;
	def eff__809 = push_u32(arg__810);
}
// phis: 
</pre>`;
window.traces["I32_GE_U"]["raw"] = ''
window.traces["I32_GE_U"]["raw"] += `<pre class='graph'>---
config:
  layout: elk
---
graph TD
	1[\\"Finish"/]
	0 -. Codeptr Trap Locals Globals Tables Memory Extra .-> 1
	12 -. Stack .-> 1
	12{{"Sϕ Stack "}}
	7 --> 12
	11 --> 12
	9 --> 12
	9["eff__809 push_u32"]
	8 --> 9
	4 -. Stack .-> 9
	4["a pop_u32"]
	3 -. Stack .-> 4
	3["b pop_u32"]
	0 -. Stack .-> 3
	0[/"Start"\\]
	8["arg__810 0"]
	11["eff__807 push_u32"]
	10 --> 11
	4 -. Stack .-> 11
	10["arg__808 1"]
	7["cond__806 u32.>="]
	4 --> 7
	3 --> 7
</pre>`;
window.traces["I32_GE_U"]["overloadOps"] = ''
window.traces["I32_GE_U"]["overloadOps"] += `<pre class='graph'>---
config:
  layout: elk
---
graph TD
	1[\\"Finish"/]
	0 -. Codeptr Trap Locals Globals Tables Memory Extra .-> 1
	12 -. Stack .-> 1
	12{{"Sϕ Stack "}}
	7 --> 12
	11 --> 12
	9 --> 12
	9["eff__809 push_u32"]
	8 --> 9
	4 -. Stack .-> 9
	4["a pop_u32"]
	3 -. Stack .-> 4
	3["b pop_u32"]
	0 -. Stack .-> 3
	0[/"Start"\\]
	8["arg__810 0"]
	11["eff__807 push_u32"]
	10 --> 11
	4 -. Stack .-> 11
	10["arg__808 1"]
	7["cond__806 U32_gte"]
	4 --> 7
	3 --> 7
</pre>`;
window.traces["I32_GE_U"]["addAbstractions"] = ''
window.traces["I32_GE_U"]["addAbstractions"] += `<pre class='graph'>---
config:
  layout: elk
---
graph TD
	1[\\"Finish"/]
	0 -. Codeptr Trap Locals Globals Tables Memory Extra .-> 1
	12 -. Stack .-> 1
	12{{"Sϕ Stack "}}
	7 --> 12
	11 --> 12
	9 --> 12
	9["eff__809 push_u32"]
	14 --> 9
	4 -. Stack .-> 9
	4["a pop_u32"]
	3 -. Stack .-> 4
	3["b pop_u32"]
	0 -. Stack .-> 3
	0[/"Start"\\]
	14["abs__814 lift_u32"]
	8 --> 14
	8["arg__810 0"]
	11["eff__807 push_u32"]
	13 --> 11
	4 -. Stack .-> 11
	13["abs__813 lift_u32"]
	10 --> 13
	10["arg__808 1"]
	7["cond__806 U32_gte"]
	4 --> 7
	3 --> 7
</pre>`;
window.traces["I32_GE_U"]["schedulerMermaid"] = ''
window.traces["I32_GE_U"]["schedulerMermaid"] += `<pre class='graph'>graph TD
subgraph block_1077["Block 1077"]
	direction TB
	b1077_1[\\"Finish"/]
	b1077_11["eff__807 push_u32"]
	b1077_9["eff__809 push_u32"]
	b1077_4["a pop_u32"]
	b1077_3["b pop_u32"]
	b1077_13["abs__813 lift_u32"]
	b1077_14["abs__814 lift_u32"]
	b1077_10["arg__808 1"]
	b1077_8["arg__810 0"]
	b1077_11 --> b1077_1
	b1077_9 --> b1077_11
	b1077_4 --> b1077_9
	b1077_3 --> b1077_4
	b1077_13 --> b1077_3
	b1077_14 --> b1077_13
	b1077_10 --> b1077_14
	b1077_8 --> b1077_10
end
phi_1079 --> block_1077
subgraph phi_1079["Phi 1079"]
	p1079_12{{"Sϕ Stack "}}
end
block_1080 --> phi_1079
block_1081 --> phi_1079
subgraph block_1080["Block 1080"]
	direction TB
	b1080_11["eff__807 push_u32"]
end
branch_1078 --> block_1080
subgraph branch_1078["Branch 1078"]
	br1078_7["cond__806 U32_gte"]

end
block_1082 --> branch_1078
subgraph block_1082["Block 1082"]
	direction TB
	b1082_7["cond__806 U32_gte"]
	b1082_0[/"Start"\\]
	b1082_0 --> b1082_7
end
subgraph block_1081["Block 1081"]
	direction TB
	b1081_9["eff__809 push_u32"]
end
branch_1078 --> block_1081

</pre>`;
window.traces["I32_GE_U"]["unLEM"] = ''
window.traces["I32_GE_U"]["unLEM"] += `<pre class='graph'>---
config:
  layout: elk
---
graph TD
	1[\\"Finish"/]
	0 -. Codeptr Trap Locals Globals Tables Memory Extra .-> 1
	12 -. Stack .-> 1
	12{{"Sϕ Stack "}}
	19 --> 12
	22 --> 12
	20 --> 12
	20{{"Sϕ Stack "}}
	17 --> 20
	11 --> 20
	9 --> 20
	9["eff__809 push_u32"]
	14 --> 9
	4 -. Stack .-> 9
	4["a pop_u32"]
	3 -. Stack .-> 4
	3["b pop_u32"]
	0 -. Stack .-> 3
	0[/"Start"\\]
	14["abs__814 lift_u32"]
	8 --> 14
	8["arg__810 0"]
	11["eff__807 push_u32"]
	13 --> 11
	4 -. Stack .-> 11
	13["abs__813 lift_u32"]
	10 --> 13
	10["arg__808 1"]
	17["mt__815 bot_maybeTrue"]
	7 --> 17
	7["cond__806 U32_gte"]
	4 --> 7
	3 --> 7
	22["eff_push__819 push_u32"]
	21 --> 22
	4 -. Stack .-> 22
	21["merge__818 merge_u"]
	13 --> 21
	14 --> 21
	19["mb__817 bool.&&"]
	17 --> 19
	18 --> 19
	18["mf__816 bot_maybeFalse"]
	7 --> 18
</pre>`;
window.traces["I32_GE_U"]["unlem_schedule"] = ''
window.traces["I32_GE_U"]["unlem_schedule"] += `<pre class=''>def b = pop_u32();
def a = pop_u32();
def cond__806 = U32_gte(a, b);
def mt__815 = bot_maybeTrue(cond__806);
def mf__816 = bot_maybeFalse(cond__806);
def mb__817 = bool.&&(mt__815, mf__816);
if (mb__817) {
	def arg__808 : u32 = 1;
	def abs__813 = lift_u32(arg__808);
	def arg__810 : u32 = 0;
	def abs__814 = lift_u32(arg__810);
	def merge__818 = merge_u(abs__813, abs__814);
	def eff_push__819 = push_u32(merge__818);
} else {
	if (mt__815) {
		def arg__808 : u32 = 1;
		def abs__813 = lift_u32(arg__808);
		def eff__807 = push_u32(abs__813);
	} else {
		def arg__810 : u32 = 0;
		def abs__814 = lift_u32(arg__810);
		def eff__809 = push_u32(abs__814);
	}
// phis: 
}
// phis: 
</pre>`;
window.traces["I32_GE_U"]["unlem_scheduler"] = ''
window.traces["I32_GE_U"]["unlem_scheduler"] += `<pre class='graph'>graph TD
subgraph block_1083["Block 1083"]
	direction TB
	b1083_1[\\"Finish"/]
	b1083_22["eff_push__819 push_u32"]
	b1083_21["merge__818 merge_u"]
	b1083_22 --> b1083_1
	b1083_21 --> b1083_22
end
phi_1085 --> block_1083
subgraph phi_1085["Phi 1085"]
	p1085_12{{"Sϕ Stack "}}
end
block_1086 --> phi_1085
block_1087 --> phi_1085
subgraph block_1086["Block 1086"]
	direction TB
	b1086_22["eff_push__819 push_u32"]
	b1086_21["merge__818 merge_u"]
	b1086_21 --> b1086_22
end
phi_1094 --> block_1086
subgraph phi_1094["Phi 1094"]
	p1094_20{{"Sϕ Stack "}}
end
block_1095 --> phi_1094
block_1096 --> phi_1094
subgraph block_1095["Block 1095"]
	direction TB
end
branch_1093 --> block_1095
subgraph branch_1093["Branch 1093"]
	br1093_17["mt__815 bot_maybeTrue"]

end
branch_1084 --> branch_1093
subgraph branch_1084["Branch 1084"]
	br1084_19["mb__817 bool.&&"]

end
block_1092 --> branch_1084
subgraph block_1092["Block 1092"]
	direction TB
	b1092_19["mb__817 bool.&&"]
	b1092_17["mt__815 bot_maybeTrue"]
	b1092_18["mf__816 bot_maybeFalse"]
	b1092_11["eff__807 push_u32"]
	b1092_9["eff__809 push_u32"]
	b1092_7["cond__806 U32_gte"]
	b1092_13["abs__813 lift_u32"]
	b1092_14["abs__814 lift_u32"]
	b1092_4["a pop_u32"]
	b1092_3["b pop_u32"]
	b1092_10["arg__808 1"]
	b1092_8["arg__810 0"]
	b1092_0[/"Start"\\]
	b1092_17 --> b1092_19
	b1092_18 --> b1092_17
	b1092_11 --> b1092_18
	b1092_9 --> b1092_11
	b1092_7 --> b1092_9
	b1092_13 --> b1092_7
	b1092_14 --> b1092_13
	b1092_4 --> b1092_14
	b1092_3 --> b1092_4
	b1092_10 --> b1092_3
	b1092_8 --> b1092_10
	b1092_0 --> b1092_8
end
subgraph block_1096["Block 1096"]
	direction TB
end
branch_1093 --> block_1096
subgraph block_1087["Block 1087"]
	direction TB
end
phi_1089 --> block_1087
subgraph phi_1089["Phi 1089"]
	p1089_20{{"Sϕ Stack "}}
end
block_1090 --> phi_1089
block_1091 --> phi_1089
subgraph block_1090["Block 1090"]
	direction TB
end
branch_1088 --> block_1090
subgraph branch_1088["Branch 1088"]
	br1088_17["mt__815 bot_maybeTrue"]

end
branch_1084 --> branch_1088
subgraph block_1091["Block 1091"]
	direction TB
end
branch_1088 --> block_1091

</pre>`;
window.traces["I32_GE_U"]["unlem_pretty"] = ''
window.traces["I32_GE_U"]["unlem_pretty"] += `<pre class=''>def b = pop_u32();
def a = pop_u32();
def mt = bot_maybeTrue(U32_gte(a, b));
def mf = bot_maybeFalse(U32_gte(a, b));
if (bool.&&(mt, mf)) {
	push_u32(merge_u(lift_u32(1), lift_u32(0)));
} else {
	if (mt) {
		push_u32(lift_u32(1));
	} else {
		push_u32(lift_u32(0));
	}
}
</pre>`;
window.traces["I32_GE_U"]["constUnLEM"] = ''
window.traces["I32_GE_U"]["constUnLEM"] += `<pre class='graph'>---
config:
  layout: elk
---
graph TD
	1[\\"Finish"/]
	0 -. Codeptr Trap Locals Globals Tables Memory Extra .-> 1
	12 -. Stack .-> 1
	12["eff_push__819 push_u32"]
	21 --> 12
	4 -. Stack .-> 12
	4["a pop_u32"]
	3 -. Stack .-> 4
	3["b pop_u32"]
	0 -. Stack .-> 3
	0[/"Start"\\]
	21["merge__818 merge_u"]
	13 --> 21
	14 --> 21
	14["abs__814 lift_u32"]
	8 --> 14
	8["arg__810 0"]
	13["abs__813 lift_u32"]
	10 --> 13
	10["arg__808 1"]
</pre>`;
window.traces["I32_GE_U"]["chooseMerge"] = ''
window.traces["I32_GE_U"]["chooseMerge"] += `<pre class='graph'>---
config:
  layout: elk
---
graph TD
	1[\\"Finish"/]
	0 -. Codeptr Trap Locals Globals Tables Memory Extra .-> 1
	12 -. Stack .-> 1
	12["eff_push__819 push_u32"]
	13 --> 12
	4 -. Stack .-> 12
	4["a pop_u32"]
	3 -. Stack .-> 4
	3["b pop_u32"]
	0 -. Stack .-> 3
	0[/"Start"\\]
	13["abs__813 lift_u32"]
	10 --> 13
	10["arg__808 1"]
</pre>`;
window.traces["I32_GE_U"]["scheduled"] = ''
window.traces["I32_GE_U"]["scheduled"] += `<pre class=''>def arg__808 : u32 = 1;
def abs__813 = lift_u32(arg__808);
def b = pop_u32();
def a = pop_u32();
def eff_push__819 = push_u32(abs__813);
</pre>`;
window.traces["I32_GE_U"]["pretty"] = ''
window.traces["I32_GE_U"]["pretty"] += `<pre class=''>def b = pop_u32();
def a = pop_u32();
push_u32(lift_u32(1));
</pre>`;
window.traces["I64_EQZ"] = {}
window.traces["I64_EQZ"]["parsed"] = ''
window.traces["I64_EQZ"]["parsed"] += `<pre class=''>def a = pop_u64();
def arg__826 : u64 = 0;
def arg__825 = (a);
def cond__820 = u64.==(arg__825, arg__826);
if (cond__820) {
	def arg__822 : u32 = 1;
	def eff__821 = push_u32(arg__822);
} else {
	def arg__824 : u32 = 0;
	def eff__823 = push_u32(arg__824);
}
// phis: 
</pre>`;
window.traces["I64_EQZ"]["raw"] = ''
window.traces["I64_EQZ"]["raw"] += `<pre class='graph'>---
config:
  layout: elk
---
graph TD
	1[\\"Finish"/]
	0 -. Codeptr Trap Locals Globals Tables Memory Extra .-> 1
	10 -. Stack .-> 1
	10{{"Sϕ Stack "}}
	6 --> 10
	9 --> 10
	7 --> 10
	7["eff__823 push_u32"]
	4 --> 7
	3 -. Stack .-> 7
	3["a pop_u64"]
	0 -. Stack .-> 3
	0[/"Start"\\]
	4["arg__826 0"]
	9["eff__821 push_u32"]
	8 --> 9
	3 -. Stack .-> 9
	8["arg__822 1"]
	6["cond__820 u64.=="]
	3 --> 6
	4 --> 6
</pre>`;
window.traces["I64_EQZ"]["overloadOps"] = ''
window.traces["I64_EQZ"]["overloadOps"] += `<pre class='graph'>---
config:
  layout: elk
---
graph TD
	1[\\"Finish"/]
	0 -. Codeptr Trap Locals Globals Tables Memory Extra .-> 1
	10 -. Stack .-> 1
	10{{"Sϕ Stack "}}
	6 --> 10
	9 --> 10
	7 --> 10
	7["eff__823 push_u32"]
	4 --> 7
	3 -. Stack .-> 7
	3["a pop_u64"]
	0 -. Stack .-> 3
	0[/"Start"\\]
	4["arg__826 0"]
	9["eff__821 push_u32"]
	8 --> 9
	3 -. Stack .-> 9
	8["arg__822 1"]
	6["cond__820 U64_equals"]
	3 --> 6
	4 --> 6
</pre>`;
window.traces["I64_EQZ"]["addAbstractions"] = ''
window.traces["I64_EQZ"]["addAbstractions"] += `<pre class='graph'>---
config:
  layout: elk
---
graph TD
	1[\\"Finish"/]
	0 -. Codeptr Trap Locals Globals Tables Memory Extra .-> 1
	10 -. Stack .-> 1
	10{{"Sϕ Stack "}}
	6 --> 10
	9 --> 10
	7 --> 10
	7["eff__823 push_u32"]
	13 --> 7
	3 -. Stack .-> 7
	3["a pop_u64"]
	0 -. Stack .-> 3
	0[/"Start"\\]
	13["abs__829 lift_u32"]
	4 --> 13
	4["arg__826 0"]
	9["eff__821 push_u32"]
	12 --> 9
	3 -. Stack .-> 9
	12["abs__828 lift_u32"]
	8 --> 12
	8["arg__822 1"]
	6["cond__820 U64_equals"]
	3 --> 6
	11 --> 6
	11["abs__827 lift_u64"]
	4 --> 11
</pre>`;
window.traces["I64_EQZ"]["schedulerMermaid"] = ''
window.traces["I64_EQZ"]["schedulerMermaid"] += `<pre class='graph'>graph TD
subgraph block_1097["Block 1097"]
	direction TB
	b1097_1[\\"Finish"/]
	b1097_9["eff__821 push_u32"]
	b1097_7["eff__823 push_u32"]
	b1097_3["a pop_u64"]
	b1097_12["abs__828 lift_u32"]
	b1097_13["abs__829 lift_u32"]
	b1097_8["arg__822 1"]
	b1097_9 --> b1097_1
	b1097_7 --> b1097_9
	b1097_3 --> b1097_7
	b1097_12 --> b1097_3
	b1097_13 --> b1097_12
	b1097_8 --> b1097_13
end
phi_1099 --> block_1097
subgraph phi_1099["Phi 1099"]
	p1099_10{{"Sϕ Stack "}}
end
block_1100 --> phi_1099
block_1101 --> phi_1099
subgraph block_1100["Block 1100"]
	direction TB
	b1100_9["eff__821 push_u32"]
end
branch_1098 --> block_1100
subgraph branch_1098["Branch 1098"]
	br1098_6["cond__820 U64_equals"]

end
block_1102 --> branch_1098
subgraph block_1102["Block 1102"]
	direction TB
	b1102_6["cond__820 U64_equals"]
	b1102_11["abs__827 lift_u64"]
	b1102_4["arg__826 0"]
	b1102_0[/"Start"\\]
	b1102_11 --> b1102_6
	b1102_4 --> b1102_11
	b1102_0 --> b1102_4
end
subgraph block_1101["Block 1101"]
	direction TB
	b1101_7["eff__823 push_u32"]
end
branch_1098 --> block_1101

</pre>`;
window.traces["I64_EQZ"]["unLEM"] = ''
window.traces["I64_EQZ"]["unLEM"] += `<pre class='graph'>---
config:
  layout: elk
---
graph TD
	1[\\"Finish"/]
	0 -. Codeptr Trap Locals Globals Tables Memory Extra .-> 1
	10 -. Stack .-> 1
	10{{"Sϕ Stack "}}
	18 --> 10
	21 --> 10
	19 --> 10
	19{{"Sϕ Stack "}}
	16 --> 19
	9 --> 19
	7 --> 19
	7["eff__823 push_u32"]
	13 --> 7
	3 -. Stack .-> 7
	3["a pop_u64"]
	0 -. Stack .-> 3
	0[/"Start"\\]
	13["abs__829 lift_u32"]
	4 --> 13
	4["arg__826 0"]
	9["eff__821 push_u32"]
	12 --> 9
	3 -. Stack .-> 9
	12["abs__828 lift_u32"]
	8 --> 12
	8["arg__822 1"]
	16["mt__830 U64_maybeTrue"]
	6 --> 16
	6["cond__820 U64_equals"]
	3 --> 6
	11 --> 6
	11["abs__827 lift_u64"]
	4 --> 11
	21["eff_push__834 push_u32"]
	20 --> 21
	3 -. Stack .-> 21
	20["merge__833 merge_u"]
	12 --> 20
	13 --> 20
	18["mb__832 bool.&&"]
	16 --> 18
	17 --> 18
	17["mf__831 U64_maybeFalse"]
	6 --> 17
</pre>`;
window.traces["I64_EQZ"]["unlem_schedule"] = ''
window.traces["I64_EQZ"]["unlem_schedule"] += `<pre class=''>def a = pop_u64();
def arg__826 : u64 = 0;
def abs__827 = lift_u64(arg__826);
def cond__820 = U64_equals(a, abs__827);
def mt__830 = U64_maybeTrue(cond__820);
def mf__831 = U64_maybeFalse(cond__820);
def mb__832 = bool.&&(mt__830, mf__831);
if (mb__832) {
	def arg__822 : u32 = 1;
	def abs__828 = lift_u32(arg__822);
	def abs__829 = lift_u32(arg__826);
	def merge__833 = merge_u(abs__828, abs__829);
	def eff_push__834 = push_u32(merge__833);
} else {
	if (mt__830) {
		def arg__822 : u32 = 1;
		def abs__828 = lift_u32(arg__822);
		def eff__821 = push_u32(abs__828);
	} else {
		def abs__829 = lift_u32(arg__826);
		def eff__823 = push_u32(abs__829);
	}
// phis: 
}
// phis: 
</pre>`;
window.traces["I64_EQZ"]["unlem_scheduler"] = ''
window.traces["I64_EQZ"]["unlem_scheduler"] += `<pre class='graph'>graph TD
subgraph block_1103["Block 1103"]
	direction TB
	b1103_1[\\"Finish"/]
	b1103_21["eff_push__834 push_u32"]
	b1103_20["merge__833 merge_u"]
	b1103_21 --> b1103_1
	b1103_20 --> b1103_21
end
phi_1105 --> block_1103
subgraph phi_1105["Phi 1105"]
	p1105_10{{"Sϕ Stack "}}
end
block_1106 --> phi_1105
block_1107 --> phi_1105
subgraph block_1106["Block 1106"]
	direction TB
	b1106_21["eff_push__834 push_u32"]
	b1106_20["merge__833 merge_u"]
	b1106_20 --> b1106_21
end
phi_1114 --> block_1106
subgraph phi_1114["Phi 1114"]
	p1114_19{{"Sϕ Stack "}}
end
block_1115 --> phi_1114
block_1116 --> phi_1114
subgraph block_1115["Block 1115"]
	direction TB
end
branch_1113 --> block_1115
subgraph branch_1113["Branch 1113"]
	br1113_16["mt__830 U64_maybeTrue"]

end
branch_1104 --> branch_1113
subgraph branch_1104["Branch 1104"]
	br1104_18["mb__832 bool.&&"]

end
block_1112 --> branch_1104
subgraph block_1112["Block 1112"]
	direction TB
	b1112_18["mb__832 bool.&&"]
	b1112_16["mt__830 U64_maybeTrue"]
	b1112_17["mf__831 U64_maybeFalse"]
	b1112_9["eff__821 push_u32"]
	b1112_7["eff__823 push_u32"]
	b1112_6["cond__820 U64_equals"]
	b1112_12["abs__828 lift_u32"]
	b1112_13["abs__829 lift_u32"]
	b1112_3["a pop_u64"]
	b1112_11["abs__827 lift_u64"]
	b1112_8["arg__822 1"]
	b1112_4["arg__826 0"]
	b1112_0[/"Start"\\]
	b1112_16 --> b1112_18
	b1112_17 --> b1112_16
	b1112_9 --> b1112_17
	b1112_7 --> b1112_9
	b1112_6 --> b1112_7
	b1112_12 --> b1112_6
	b1112_13 --> b1112_12
	b1112_3 --> b1112_13
	b1112_11 --> b1112_3
	b1112_8 --> b1112_11
	b1112_4 --> b1112_8
	b1112_0 --> b1112_4
end
subgraph block_1116["Block 1116"]
	direction TB
end
branch_1113 --> block_1116
subgraph block_1107["Block 1107"]
	direction TB
end
phi_1109 --> block_1107
subgraph phi_1109["Phi 1109"]
	p1109_19{{"Sϕ Stack "}}
end
block_1110 --> phi_1109
block_1111 --> phi_1109
subgraph block_1110["Block 1110"]
	direction TB
end
branch_1108 --> block_1110
subgraph branch_1108["Branch 1108"]
	br1108_16["mt__830 U64_maybeTrue"]

end
branch_1104 --> branch_1108
subgraph block_1111["Block 1111"]
	direction TB
end
branch_1108 --> block_1111

</pre>`;
window.traces["I64_EQZ"]["unlem_pretty"] = ''
window.traces["I64_EQZ"]["unlem_pretty"] += `<pre class=''>def a = pop_u64();
def mt = U64_maybeTrue(U64_equals(a, lift_u64(0)));
def mf = U64_maybeFalse(U64_equals(a, lift_u64(0)));
if (bool.&&(mt, mf)) {
	push_u32(merge_u(lift_u32(1), lift_u32(0)));
} else {
	if (mt) {
		push_u32(lift_u32(1));
	} else {
		push_u32(lift_u32(0));
	}
}
</pre>`;
window.traces["I64_EQZ"]["constUnLEM"] = ''
window.traces["I64_EQZ"]["constUnLEM"] += `<pre class='graph'>---
config:
  layout: elk
---
graph TD
	1[\\"Finish"/]
	0 -. Codeptr Trap Locals Globals Tables Memory Extra .-> 1
	10 -. Stack .-> 1
	10["eff_push__834 push_u32"]
	20 --> 10
	3 -. Stack .-> 10
	3["a pop_u64"]
	0 -. Stack .-> 3
	0[/"Start"\\]
	20["merge__833 merge_u"]
	12 --> 20
	13 --> 20
	13["abs__829 lift_u32"]
	4 --> 13
	4["arg__826 0"]
	12["abs__828 lift_u32"]
	8 --> 12
	8["arg__822 1"]
</pre>`;
window.traces["I64_EQZ"]["chooseMerge"] = ''
window.traces["I64_EQZ"]["chooseMerge"] += `<pre class='graph'>---
config:
  layout: elk
---
graph TD
	1[\\"Finish"/]
	0 -. Codeptr Trap Locals Globals Tables Memory Extra .-> 1
	10 -. Stack .-> 1
	10["eff_push__834 push_u32"]
	12 --> 10
	3 -. Stack .-> 10
	3["a pop_u64"]
	0 -. Stack .-> 3
	0[/"Start"\\]
	12["abs__828 lift_u32"]
	8 --> 12
	8["arg__822 1"]
</pre>`;
window.traces["I64_EQZ"]["scheduled"] = ''
window.traces["I64_EQZ"]["scheduled"] += `<pre class=''>def arg__822 : u32 = 1;
def abs__828 = lift_u32(arg__822);
def a = pop_u64();
def eff_push__834 = push_u32(abs__828);
</pre>`;
window.traces["I64_EQZ"]["pretty"] = ''
window.traces["I64_EQZ"]["pretty"] += `<pre class=''>def a = pop_u64();
push_u32(lift_u32(1));
</pre>`;
window.traces["I64_EQ"] = {}
window.traces["I64_EQ"]["parsed"] = ''
window.traces["I64_EQ"]["parsed"] += `<pre class=''>def b = pop_u64();
def a = pop_u64();
def arg__841 = (b);
def arg__840 = (a);
def cond__835 = u64.==(arg__840, arg__841);
if (cond__835) {
	def arg__837 : u32 = 1;
	def eff__836 = push_u32(arg__837);
} else {
	def arg__839 : u32 = 0;
	def eff__838 = push_u32(arg__839);
}
// phis: 
</pre>`;
window.traces["I64_EQ"]["raw"] = ''
window.traces["I64_EQ"]["raw"] += `<pre class='graph'>---
config:
  layout: elk
---
graph TD
	1[\\"Finish"/]
	0 -. Codeptr Trap Locals Globals Tables Memory Extra .-> 1
	12 -. Stack .-> 1
	12{{"Sϕ Stack "}}
	7 --> 12
	11 --> 12
	9 --> 12
	9["eff__838 push_u32"]
	8 --> 9
	4 -. Stack .-> 9
	4["a pop_u64"]
	3 -. Stack .-> 4
	3["b pop_u64"]
	0 -. Stack .-> 3
	0[/"Start"\\]
	8["arg__839 0"]
	11["eff__836 push_u32"]
	10 --> 11
	4 -. Stack .-> 11
	10["arg__837 1"]
	7["cond__835 u64.=="]
	4 --> 7
	3 --> 7
</pre>`;
window.traces["I64_EQ"]["overloadOps"] = ''
window.traces["I64_EQ"]["overloadOps"] += `<pre class='graph'>---
config:
  layout: elk
---
graph TD
	1[\\"Finish"/]
	0 -. Codeptr Trap Locals Globals Tables Memory Extra .-> 1
	12 -. Stack .-> 1
	12{{"Sϕ Stack "}}
	7 --> 12
	11 --> 12
	9 --> 12
	9["eff__838 push_u32"]
	8 --> 9
	4 -. Stack .-> 9
	4["a pop_u64"]
	3 -. Stack .-> 4
	3["b pop_u64"]
	0 -. Stack .-> 3
	0[/"Start"\\]
	8["arg__839 0"]
	11["eff__836 push_u32"]
	10 --> 11
	4 -. Stack .-> 11
	10["arg__837 1"]
	7["cond__835 U64_equals"]
	4 --> 7
	3 --> 7
</pre>`;
window.traces["I64_EQ"]["addAbstractions"] = ''
window.traces["I64_EQ"]["addAbstractions"] += `<pre class='graph'>---
config:
  layout: elk
---
graph TD
	1[\\"Finish"/]
	0 -. Codeptr Trap Locals Globals Tables Memory Extra .-> 1
	12 -. Stack .-> 1
	12{{"Sϕ Stack "}}
	7 --> 12
	11 --> 12
	9 --> 12
	9["eff__838 push_u32"]
	14 --> 9
	4 -. Stack .-> 9
	4["a pop_u64"]
	3 -. Stack .-> 4
	3["b pop_u64"]
	0 -. Stack .-> 3
	0[/"Start"\\]
	14["abs__843 lift_u32"]
	8 --> 14
	8["arg__839 0"]
	11["eff__836 push_u32"]
	13 --> 11
	4 -. Stack .-> 11
	13["abs__842 lift_u32"]
	10 --> 13
	10["arg__837 1"]
	7["cond__835 U64_equals"]
	4 --> 7
	3 --> 7
</pre>`;
window.traces["I64_EQ"]["schedulerMermaid"] = ''
window.traces["I64_EQ"]["schedulerMermaid"] += `<pre class='graph'>graph TD
subgraph block_1117["Block 1117"]
	direction TB
	b1117_1[\\"Finish"/]
	b1117_11["eff__836 push_u32"]
	b1117_9["eff__838 push_u32"]
	b1117_4["a pop_u64"]
	b1117_3["b pop_u64"]
	b1117_13["abs__842 lift_u32"]
	b1117_14["abs__843 lift_u32"]
	b1117_10["arg__837 1"]
	b1117_8["arg__839 0"]
	b1117_11 --> b1117_1
	b1117_9 --> b1117_11
	b1117_4 --> b1117_9
	b1117_3 --> b1117_4
	b1117_13 --> b1117_3
	b1117_14 --> b1117_13
	b1117_10 --> b1117_14
	b1117_8 --> b1117_10
end
phi_1119 --> block_1117
subgraph phi_1119["Phi 1119"]
	p1119_12{{"Sϕ Stack "}}
end
block_1120 --> phi_1119
block_1121 --> phi_1119
subgraph block_1120["Block 1120"]
	direction TB
	b1120_11["eff__836 push_u32"]
end
branch_1118 --> block_1120
subgraph branch_1118["Branch 1118"]
	br1118_7["cond__835 U64_equals"]

end
block_1122 --> branch_1118
subgraph block_1122["Block 1122"]
	direction TB
	b1122_7["cond__835 U64_equals"]
	b1122_0[/"Start"\\]
	b1122_0 --> b1122_7
end
subgraph block_1121["Block 1121"]
	direction TB
	b1121_9["eff__838 push_u32"]
end
branch_1118 --> block_1121

</pre>`;
window.traces["I64_EQ"]["unLEM"] = ''
window.traces["I64_EQ"]["unLEM"] += `<pre class='graph'>---
config:
  layout: elk
---
graph TD
	1[\\"Finish"/]
	0 -. Codeptr Trap Locals Globals Tables Memory Extra .-> 1
	12 -. Stack .-> 1
	12{{"Sϕ Stack "}}
	19 --> 12
	22 --> 12
	20 --> 12
	20{{"Sϕ Stack "}}
	17 --> 20
	11 --> 20
	9 --> 20
	9["eff__838 push_u32"]
	14 --> 9
	4 -. Stack .-> 9
	4["a pop_u64"]
	3 -. Stack .-> 4
	3["b pop_u64"]
	0 -. Stack .-> 3
	0[/"Start"\\]
	14["abs__843 lift_u32"]
	8 --> 14
	8["arg__839 0"]
	11["eff__836 push_u32"]
	13 --> 11
	4 -. Stack .-> 11
	13["abs__842 lift_u32"]
	10 --> 13
	10["arg__837 1"]
	17["mt__844 U64_maybeTrue"]
	7 --> 17
	7["cond__835 U64_equals"]
	4 --> 7
	3 --> 7
	22["eff_push__848 push_u32"]
	21 --> 22
	4 -. Stack .-> 22
	21["merge__847 merge_u"]
	13 --> 21
	14 --> 21
	19["mb__846 bool.&&"]
	17 --> 19
	18 --> 19
	18["mf__845 U64_maybeFalse"]
	7 --> 18
</pre>`;
window.traces["I64_EQ"]["unlem_schedule"] = ''
window.traces["I64_EQ"]["unlem_schedule"] += `<pre class=''>def b = pop_u64();
def a = pop_u64();
def cond__835 = U64_equals(a, b);
def mt__844 = U64_maybeTrue(cond__835);
def mf__845 = U64_maybeFalse(cond__835);
def mb__846 = bool.&&(mt__844, mf__845);
if (mb__846) {
	def arg__837 : u32 = 1;
	def abs__842 = lift_u32(arg__837);
	def arg__839 : u32 = 0;
	def abs__843 = lift_u32(arg__839);
	def merge__847 = merge_u(abs__842, abs__843);
	def eff_push__848 = push_u32(merge__847);
} else {
	if (mt__844) {
		def arg__837 : u32 = 1;
		def abs__842 = lift_u32(arg__837);
		def eff__836 = push_u32(abs__842);
	} else {
		def arg__839 : u32 = 0;
		def abs__843 = lift_u32(arg__839);
		def eff__838 = push_u32(abs__843);
	}
// phis: 
}
// phis: 
</pre>`;
window.traces["I64_EQ"]["unlem_scheduler"] = ''
window.traces["I64_EQ"]["unlem_scheduler"] += `<pre class='graph'>graph TD
subgraph block_1123["Block 1123"]
	direction TB
	b1123_1[\\"Finish"/]
	b1123_22["eff_push__848 push_u32"]
	b1123_21["merge__847 merge_u"]
	b1123_22 --> b1123_1
	b1123_21 --> b1123_22
end
phi_1125 --> block_1123
subgraph phi_1125["Phi 1125"]
	p1125_12{{"Sϕ Stack "}}
end
block_1126 --> phi_1125
block_1127 --> phi_1125
subgraph block_1126["Block 1126"]
	direction TB
	b1126_22["eff_push__848 push_u32"]
	b1126_21["merge__847 merge_u"]
	b1126_21 --> b1126_22
end
phi_1134 --> block_1126
subgraph phi_1134["Phi 1134"]
	p1134_20{{"Sϕ Stack "}}
end
block_1135 --> phi_1134
block_1136 --> phi_1134
subgraph block_1135["Block 1135"]
	direction TB
end
branch_1133 --> block_1135
subgraph branch_1133["Branch 1133"]
	br1133_17["mt__844 U64_maybeTrue"]

end
branch_1124 --> branch_1133
subgraph branch_1124["Branch 1124"]
	br1124_19["mb__846 bool.&&"]

end
block_1132 --> branch_1124
subgraph block_1132["Block 1132"]
	direction TB
	b1132_19["mb__846 bool.&&"]
	b1132_17["mt__844 U64_maybeTrue"]
	b1132_18["mf__845 U64_maybeFalse"]
	b1132_11["eff__836 push_u32"]
	b1132_9["eff__838 push_u32"]
	b1132_7["cond__835 U64_equals"]
	b1132_13["abs__842 lift_u32"]
	b1132_14["abs__843 lift_u32"]
	b1132_4["a pop_u64"]
	b1132_3["b pop_u64"]
	b1132_10["arg__837 1"]
	b1132_8["arg__839 0"]
	b1132_0[/"Start"\\]
	b1132_17 --> b1132_19
	b1132_18 --> b1132_17
	b1132_11 --> b1132_18
	b1132_9 --> b1132_11
	b1132_7 --> b1132_9
	b1132_13 --> b1132_7
	b1132_14 --> b1132_13
	b1132_4 --> b1132_14
	b1132_3 --> b1132_4
	b1132_10 --> b1132_3
	b1132_8 --> b1132_10
	b1132_0 --> b1132_8
end
subgraph block_1136["Block 1136"]
	direction TB
end
branch_1133 --> block_1136
subgraph block_1127["Block 1127"]
	direction TB
end
phi_1129 --> block_1127
subgraph phi_1129["Phi 1129"]
	p1129_20{{"Sϕ Stack "}}
end
block_1130 --> phi_1129
block_1131 --> phi_1129
subgraph block_1130["Block 1130"]
	direction TB
end
branch_1128 --> block_1130
subgraph branch_1128["Branch 1128"]
	br1128_17["mt__844 U64_maybeTrue"]

end
branch_1124 --> branch_1128
subgraph block_1131["Block 1131"]
	direction TB
end
branch_1128 --> block_1131

</pre>`;
window.traces["I64_EQ"]["unlem_pretty"] = ''
window.traces["I64_EQ"]["unlem_pretty"] += `<pre class=''>def b = pop_u64();
def a = pop_u64();
def mt = U64_maybeTrue(U64_equals(a, b));
def mf = U64_maybeFalse(U64_equals(a, b));
if (bool.&&(mt, mf)) {
	push_u32(merge_u(lift_u32(1), lift_u32(0)));
} else {
	if (mt) {
		push_u32(lift_u32(1));
	} else {
		push_u32(lift_u32(0));
	}
}
</pre>`;
window.traces["I64_EQ"]["constUnLEM"] = ''
window.traces["I64_EQ"]["constUnLEM"] += `<pre class='graph'>---
config:
  layout: elk
---
graph TD
	1[\\"Finish"/]
	0 -. Codeptr Trap Locals Globals Tables Memory Extra .-> 1
	12 -. Stack .-> 1
	12["eff_push__848 push_u32"]
	21 --> 12
	4 -. Stack .-> 12
	4["a pop_u64"]
	3 -. Stack .-> 4
	3["b pop_u64"]
	0 -. Stack .-> 3
	0[/"Start"\\]
	21["merge__847 merge_u"]
	13 --> 21
	14 --> 21
	14["abs__843 lift_u32"]
	8 --> 14
	8["arg__839 0"]
	13["abs__842 lift_u32"]
	10 --> 13
	10["arg__837 1"]
</pre>`;
window.traces["I64_EQ"]["chooseMerge"] = ''
window.traces["I64_EQ"]["chooseMerge"] += `<pre class='graph'>---
config:
  layout: elk
---
graph TD
	1[\\"Finish"/]
	0 -. Codeptr Trap Locals Globals Tables Memory Extra .-> 1
	12 -. Stack .-> 1
	12["eff_push__848 push_u32"]
	13 --> 12
	4 -. Stack .-> 12
	4["a pop_u64"]
	3 -. Stack .-> 4
	3["b pop_u64"]
	0 -. Stack .-> 3
	0[/"Start"\\]
	13["abs__842 lift_u32"]
	10 --> 13
	10["arg__837 1"]
</pre>`;
window.traces["I64_EQ"]["scheduled"] = ''
window.traces["I64_EQ"]["scheduled"] += `<pre class=''>def arg__837 : u32 = 1;
def abs__842 = lift_u32(arg__837);
def b = pop_u64();
def a = pop_u64();
def eff_push__848 = push_u32(abs__842);
</pre>`;
window.traces["I64_EQ"]["pretty"] = ''
window.traces["I64_EQ"]["pretty"] += `<pre class=''>def b = pop_u64();
def a = pop_u64();
push_u32(lift_u32(1));
</pre>`;
window.traces["I64_NE"] = {}
window.traces["I64_NE"]["parsed"] = ''
window.traces["I64_NE"]["parsed"] += `<pre class=''>def b = pop_u64();
def a = pop_u64();
def arg__855 = (b);
def arg__854 = (a);
def cond__849 = u64.!=(arg__854, arg__855);
if (cond__849) {
	def arg__851 : u32 = 1;
	def eff__850 = push_u32(arg__851);
} else {
	def arg__853 : u32 = 0;
	def eff__852 = push_u32(arg__853);
}
// phis: 
</pre>`;
window.traces["I64_NE"]["raw"] = ''
window.traces["I64_NE"]["raw"] += `<pre class='graph'>---
config:
  layout: elk
---
graph TD
	1[\\"Finish"/]
	0 -. Codeptr Trap Locals Globals Tables Memory Extra .-> 1
	12 -. Stack .-> 1
	12{{"Sϕ Stack "}}
	7 --> 12
	11 --> 12
	9 --> 12
	9["eff__852 push_u32"]
	8 --> 9
	4 -. Stack .-> 9
	4["a pop_u64"]
	3 -. Stack .-> 4
	3["b pop_u64"]
	0 -. Stack .-> 3
	0[/"Start"\\]
	8["arg__853 0"]
	11["eff__850 push_u32"]
	10 --> 11
	4 -. Stack .-> 11
	10["arg__851 1"]
	7["cond__849 u64.!="]
	4 --> 7
	3 --> 7
</pre>`;
window.traces["I64_NE"]["overloadOps"] = ''
window.traces["I64_NE"]["overloadOps"] += `<pre class='graph'>---
config:
  layout: elk
---
graph TD
	1[\\"Finish"/]
	0 -. Codeptr Trap Locals Globals Tables Memory Extra .-> 1
	12 -. Stack .-> 1
	12{{"Sϕ Stack "}}
	7 --> 12
	11 --> 12
	9 --> 12
	9["eff__852 push_u32"]
	8 --> 9
	4 -. Stack .-> 9
	4["a pop_u64"]
	3 -. Stack .-> 4
	3["b pop_u64"]
	0 -. Stack .-> 3
	0[/"Start"\\]
	8["arg__853 0"]
	11["eff__850 push_u32"]
	10 --> 11
	4 -. Stack .-> 11
	10["arg__851 1"]
	7["cond__849 U64_not_equals"]
	4 --> 7
	3 --> 7
</pre>`;
window.traces["I64_NE"]["addAbstractions"] = ''
window.traces["I64_NE"]["addAbstractions"] += `<pre class='graph'>---
config:
  layout: elk
---
graph TD
	1[\\"Finish"/]
	0 -. Codeptr Trap Locals Globals Tables Memory Extra .-> 1
	12 -. Stack .-> 1
	12{{"Sϕ Stack "}}
	7 --> 12
	11 --> 12
	9 --> 12
	9["eff__852 push_u32"]
	14 --> 9
	4 -. Stack .-> 9
	4["a pop_u64"]
	3 -. Stack .-> 4
	3["b pop_u64"]
	0 -. Stack .-> 3
	0[/"Start"\\]
	14["abs__857 lift_u32"]
	8 --> 14
	8["arg__853 0"]
	11["eff__850 push_u32"]
	13 --> 11
	4 -. Stack .-> 11
	13["abs__856 lift_u32"]
	10 --> 13
	10["arg__851 1"]
	7["cond__849 U64_not_equals"]
	4 --> 7
	3 --> 7
</pre>`;
window.traces["I64_NE"]["schedulerMermaid"] = ''
window.traces["I64_NE"]["schedulerMermaid"] += `<pre class='graph'>graph TD
subgraph block_1137["Block 1137"]
	direction TB
	b1137_1[\\"Finish"/]
	b1137_11["eff__850 push_u32"]
	b1137_9["eff__852 push_u32"]
	b1137_4["a pop_u64"]
	b1137_3["b pop_u64"]
	b1137_13["abs__856 lift_u32"]
	b1137_14["abs__857 lift_u32"]
	b1137_10["arg__851 1"]
	b1137_8["arg__853 0"]
	b1137_11 --> b1137_1
	b1137_9 --> b1137_11
	b1137_4 --> b1137_9
	b1137_3 --> b1137_4
	b1137_13 --> b1137_3
	b1137_14 --> b1137_13
	b1137_10 --> b1137_14
	b1137_8 --> b1137_10
end
phi_1139 --> block_1137
subgraph phi_1139["Phi 1139"]
	p1139_12{{"Sϕ Stack "}}
end
block_1140 --> phi_1139
block_1141 --> phi_1139
subgraph block_1140["Block 1140"]
	direction TB
	b1140_11["eff__850 push_u32"]
end
branch_1138 --> block_1140
subgraph branch_1138["Branch 1138"]
	br1138_7["cond__849 U64_not_equals"]

end
block_1142 --> branch_1138
subgraph block_1142["Block 1142"]
	direction TB
	b1142_7["cond__849 U64_not_equals"]
	b1142_0[/"Start"\\]
	b1142_0 --> b1142_7
end
subgraph block_1141["Block 1141"]
	direction TB
	b1141_9["eff__852 push_u32"]
end
branch_1138 --> block_1141

</pre>`;
window.traces["I64_NE"]["unLEM"] = ''
window.traces["I64_NE"]["unLEM"] += `<pre class='graph'>---
config:
  layout: elk
---
graph TD
	1[\\"Finish"/]
	0 -. Codeptr Trap Locals Globals Tables Memory Extra .-> 1
	12 -. Stack .-> 1
	12{{"Sϕ Stack "}}
	19 --> 12
	22 --> 12
	20 --> 12
	20{{"Sϕ Stack "}}
	17 --> 20
	11 --> 20
	9 --> 20
	9["eff__852 push_u32"]
	14 --> 9
	4 -. Stack .-> 9
	4["a pop_u64"]
	3 -. Stack .-> 4
	3["b pop_u64"]
	0 -. Stack .-> 3
	0[/"Start"\\]
	14["abs__857 lift_u32"]
	8 --> 14
	8["arg__853 0"]
	11["eff__850 push_u32"]
	13 --> 11
	4 -. Stack .-> 11
	13["abs__856 lift_u32"]
	10 --> 13
	10["arg__851 1"]
	17["mt__858 U64_maybeTrue"]
	7 --> 17
	7["cond__849 U64_not_equals"]
	4 --> 7
	3 --> 7
	22["eff_push__862 push_u32"]
	21 --> 22
	4 -. Stack .-> 22
	21["merge__861 merge_u"]
	13 --> 21
	14 --> 21
	19["mb__860 bool.&&"]
	17 --> 19
	18 --> 19
	18["mf__859 U64_maybeFalse"]
	7 --> 18
</pre>`;
window.traces["I64_NE"]["unlem_schedule"] = ''
window.traces["I64_NE"]["unlem_schedule"] += `<pre class=''>def b = pop_u64();
def a = pop_u64();
def cond__849 = U64_not_equals(a, b);
def mt__858 = U64_maybeTrue(cond__849);
def mf__859 = U64_maybeFalse(cond__849);
def mb__860 = bool.&&(mt__858, mf__859);
if (mb__860) {
	def arg__851 : u32 = 1;
	def abs__856 = lift_u32(arg__851);
	def arg__853 : u32 = 0;
	def abs__857 = lift_u32(arg__853);
	def merge__861 = merge_u(abs__856, abs__857);
	def eff_push__862 = push_u32(merge__861);
} else {
	if (mt__858) {
		def arg__851 : u32 = 1;
		def abs__856 = lift_u32(arg__851);
		def eff__850 = push_u32(abs__856);
	} else {
		def arg__853 : u32 = 0;
		def abs__857 = lift_u32(arg__853);
		def eff__852 = push_u32(abs__857);
	}
// phis: 
}
// phis: 
</pre>`;
window.traces["I64_NE"]["unlem_scheduler"] = ''
window.traces["I64_NE"]["unlem_scheduler"] += `<pre class='graph'>graph TD
subgraph block_1143["Block 1143"]
	direction TB
	b1143_1[\\"Finish"/]
	b1143_22["eff_push__862 push_u32"]
	b1143_21["merge__861 merge_u"]
	b1143_22 --> b1143_1
	b1143_21 --> b1143_22
end
phi_1145 --> block_1143
subgraph phi_1145["Phi 1145"]
	p1145_12{{"Sϕ Stack "}}
end
block_1146 --> phi_1145
block_1147 --> phi_1145
subgraph block_1146["Block 1146"]
	direction TB
	b1146_22["eff_push__862 push_u32"]
	b1146_21["merge__861 merge_u"]
	b1146_21 --> b1146_22
end
phi_1154 --> block_1146
subgraph phi_1154["Phi 1154"]
	p1154_20{{"Sϕ Stack "}}
end
block_1155 --> phi_1154
block_1156 --> phi_1154
subgraph block_1155["Block 1155"]
	direction TB
end
branch_1153 --> block_1155
subgraph branch_1153["Branch 1153"]
	br1153_17["mt__858 U64_maybeTrue"]

end
branch_1144 --> branch_1153
subgraph branch_1144["Branch 1144"]
	br1144_19["mb__860 bool.&&"]

end
block_1152 --> branch_1144
subgraph block_1152["Block 1152"]
	direction TB
	b1152_19["mb__860 bool.&&"]
	b1152_17["mt__858 U64_maybeTrue"]
	b1152_18["mf__859 U64_maybeFalse"]
	b1152_11["eff__850 push_u32"]
	b1152_9["eff__852 push_u32"]
	b1152_7["cond__849 U64_not_equals"]
	b1152_13["abs__856 lift_u32"]
	b1152_14["abs__857 lift_u32"]
	b1152_4["a pop_u64"]
	b1152_3["b pop_u64"]
	b1152_10["arg__851 1"]
	b1152_8["arg__853 0"]
	b1152_0[/"Start"\\]
	b1152_17 --> b1152_19
	b1152_18 --> b1152_17
	b1152_11 --> b1152_18
	b1152_9 --> b1152_11
	b1152_7 --> b1152_9
	b1152_13 --> b1152_7
	b1152_14 --> b1152_13
	b1152_4 --> b1152_14
	b1152_3 --> b1152_4
	b1152_10 --> b1152_3
	b1152_8 --> b1152_10
	b1152_0 --> b1152_8
end
subgraph block_1156["Block 1156"]
	direction TB
end
branch_1153 --> block_1156
subgraph block_1147["Block 1147"]
	direction TB
end
phi_1149 --> block_1147
subgraph phi_1149["Phi 1149"]
	p1149_20{{"Sϕ Stack "}}
end
block_1150 --> phi_1149
block_1151 --> phi_1149
subgraph block_1150["Block 1150"]
	direction TB
end
branch_1148 --> block_1150
subgraph branch_1148["Branch 1148"]
	br1148_17["mt__858 U64_maybeTrue"]

end
branch_1144 --> branch_1148
subgraph block_1151["Block 1151"]
	direction TB
end
branch_1148 --> block_1151

</pre>`;
window.traces["I64_NE"]["unlem_pretty"] = ''
window.traces["I64_NE"]["unlem_pretty"] += `<pre class=''>def b = pop_u64();
def a = pop_u64();
def cond = U64_not_equals(a, b);
def mt = U64_maybeTrue(cond);
def mf = U64_maybeFalse(cond);
if (bool.&&(mt, mf)) {
	push_u32(merge_u(lift_u32(1), lift_u32(0)));
} else {
	if (mt) {
		push_u32(lift_u32(1));
	} else {
		push_u32(lift_u32(0));
	}
}
</pre>`;
window.traces["I64_NE"]["constUnLEM"] = ''
window.traces["I64_NE"]["constUnLEM"] += `<pre class='graph'>---
config:
  layout: elk
---
graph TD
	1[\\"Finish"/]
	0 -. Codeptr Trap Locals Globals Tables Memory Extra .-> 1
	12 -. Stack .-> 1
	12["eff_push__862 push_u32"]
	21 --> 12
	4 -. Stack .-> 12
	4["a pop_u64"]
	3 -. Stack .-> 4
	3["b pop_u64"]
	0 -. Stack .-> 3
	0[/"Start"\\]
	21["merge__861 merge_u"]
	13 --> 21
	14 --> 21
	14["abs__857 lift_u32"]
	8 --> 14
	8["arg__853 0"]
	13["abs__856 lift_u32"]
	10 --> 13
	10["arg__851 1"]
</pre>`;
window.traces["I64_NE"]["chooseMerge"] = ''
window.traces["I64_NE"]["chooseMerge"] += `<pre class='graph'>---
config:
  layout: elk
---
graph TD
	1[\\"Finish"/]
	0 -. Codeptr Trap Locals Globals Tables Memory Extra .-> 1
	12 -. Stack .-> 1
	12["eff_push__862 push_u32"]
	13 --> 12
	4 -. Stack .-> 12
	4["a pop_u64"]
	3 -. Stack .-> 4
	3["b pop_u64"]
	0 -. Stack .-> 3
	0[/"Start"\\]
	13["abs__856 lift_u32"]
	10 --> 13
	10["arg__851 1"]
</pre>`;
window.traces["I64_NE"]["scheduled"] = ''
window.traces["I64_NE"]["scheduled"] += `<pre class=''>def arg__851 : u32 = 1;
def abs__856 = lift_u32(arg__851);
def b = pop_u64();
def a = pop_u64();
def eff_push__862 = push_u32(abs__856);
</pre>`;
window.traces["I64_NE"]["pretty"] = ''
window.traces["I64_NE"]["pretty"] += `<pre class=''>def b = pop_u64();
def a = pop_u64();
push_u32(lift_u32(1));
</pre>`;
window.traces["I64_LT_S"] = {}
window.traces["I64_LT_S"]["parsed"] = ''
window.traces["I64_LT_S"]["parsed"] += `<pre class=''>def b = pop_u64();
def a = pop_u64();
def arg__869 = (b);
def arg__868 = (a);
def cond__863 = U64_lt_s(arg__868, arg__869);
if (cond__863) {
	def arg__865 : u32 = 1;
	def eff__864 = push_u32(arg__865);
} else {
	def arg__867 : u32 = 0;
	def eff__866 = push_u32(arg__867);
}
// phis: 
</pre>`;
window.traces["I64_LT_S"]["raw"] = ''
window.traces["I64_LT_S"]["raw"] += `<pre class='graph'>---
config:
  layout: elk
---
graph TD
	1[\\"Finish"/]
	0 -. Codeptr Trap Locals Globals Tables Memory Extra .-> 1
	12 -. Stack .-> 1
	12{{"Sϕ Stack "}}
	7 --> 12
	11 --> 12
	9 --> 12
	9["eff__866 push_u32"]
	8 --> 9
	4 -. Stack .-> 9
	4["a pop_u64"]
	3 -. Stack .-> 4
	3["b pop_u64"]
	0 -. Stack .-> 3
	0[/"Start"\\]
	8["arg__867 0"]
	11["eff__864 push_u32"]
	10 --> 11
	4 -. Stack .-> 11
	10["arg__865 1"]
	7["cond__863 U64_lt_s"]
	4 --> 7
	3 --> 7
</pre>`;
window.traces["I64_LT_S"]["overloadOps"] = ''
window.traces["I64_LT_S"]["overloadOps"] += `<pre class='graph'>---
config:
  layout: elk
---
graph TD
	1[\\"Finish"/]
	0 -. Codeptr Trap Locals Globals Tables Memory Extra .-> 1
	12 -. Stack .-> 1
	12{{"Sϕ Stack "}}
	7 --> 12
	11 --> 12
	9 --> 12
	9["eff__866 push_u32"]
	8 --> 9
	4 -. Stack .-> 9
	4["a pop_u64"]
	3 -. Stack .-> 4
	3["b pop_u64"]
	0 -. Stack .-> 3
	0[/"Start"\\]
	8["arg__867 0"]
	11["eff__864 push_u32"]
	10 --> 11
	4 -. Stack .-> 11
	10["arg__865 1"]
	7["cond__863 U64_lt_s"]
	4 --> 7
	3 --> 7
</pre>`;
window.traces["I64_LT_S"]["addAbstractions"] = ''
window.traces["I64_LT_S"]["addAbstractions"] += `<pre class='graph'>---
config:
  layout: elk
---
graph TD
	1[\\"Finish"/]
	0 -. Codeptr Trap Locals Globals Tables Memory Extra .-> 1
	12 -. Stack .-> 1
	12{{"Sϕ Stack "}}
	7 --> 12
	11 --> 12
	9 --> 12
	9["eff__866 push_u32"]
	14 --> 9
	4 -. Stack .-> 9
	4["a pop_u64"]
	3 -. Stack .-> 4
	3["b pop_u64"]
	0 -. Stack .-> 3
	0[/"Start"\\]
	14["abs__871 lift_u32"]
	8 --> 14
	8["arg__867 0"]
	11["eff__864 push_u32"]
	13 --> 11
	4 -. Stack .-> 11
	13["abs__870 lift_u32"]
	10 --> 13
	10["arg__865 1"]
	7["cond__863 U64_lt_s"]
	4 --> 7
	3 --> 7
</pre>`;
window.traces["I64_LT_S"]["schedulerMermaid"] = ''
window.traces["I64_LT_S"]["schedulerMermaid"] += `<pre class='graph'>graph TD
subgraph block_1157["Block 1157"]
	direction TB
	b1157_1[\\"Finish"/]
	b1157_11["eff__864 push_u32"]
	b1157_9["eff__866 push_u32"]
	b1157_4["a pop_u64"]
	b1157_3["b pop_u64"]
	b1157_13["abs__870 lift_u32"]
	b1157_14["abs__871 lift_u32"]
	b1157_10["arg__865 1"]
	b1157_8["arg__867 0"]
	b1157_11 --> b1157_1
	b1157_9 --> b1157_11
	b1157_4 --> b1157_9
	b1157_3 --> b1157_4
	b1157_13 --> b1157_3
	b1157_14 --> b1157_13
	b1157_10 --> b1157_14
	b1157_8 --> b1157_10
end
phi_1159 --> block_1157
subgraph phi_1159["Phi 1159"]
	p1159_12{{"Sϕ Stack "}}
end
block_1160 --> phi_1159
block_1161 --> phi_1159
subgraph block_1160["Block 1160"]
	direction TB
	b1160_11["eff__864 push_u32"]
end
branch_1158 --> block_1160
subgraph branch_1158["Branch 1158"]
	br1158_7["cond__863 U64_lt_s"]

end
block_1162 --> branch_1158
subgraph block_1162["Block 1162"]
	direction TB
	b1162_7["cond__863 U64_lt_s"]
	b1162_0[/"Start"\\]
	b1162_0 --> b1162_7
end
subgraph block_1161["Block 1161"]
	direction TB
	b1161_9["eff__866 push_u32"]
end
branch_1158 --> block_1161

</pre>`;
window.traces["I64_LT_S"]["unLEM"] = ''
window.traces["I64_LT_S"]["unLEM"] += `<pre class='graph'>---
config:
  layout: elk
---
graph TD
	1[\\"Finish"/]
	0 -. Codeptr Trap Locals Globals Tables Memory Extra .-> 1
	12 -. Stack .-> 1
	12{{"Sϕ Stack "}}
	19 --> 12
	22 --> 12
	20 --> 12
	20{{"Sϕ Stack "}}
	17 --> 20
	11 --> 20
	9 --> 20
	9["eff__866 push_u32"]
	14 --> 9
	4 -. Stack .-> 9
	4["a pop_u64"]
	3 -. Stack .-> 4
	3["b pop_u64"]
	0 -. Stack .-> 3
	0[/"Start"\\]
	14["abs__871 lift_u32"]
	8 --> 14
	8["arg__867 0"]
	11["eff__864 push_u32"]
	13 --> 11
	4 -. Stack .-> 11
	13["abs__870 lift_u32"]
	10 --> 13
	10["arg__865 1"]
	17["mt__872 U64_maybeTrue"]
	7 --> 17
	7["cond__863 U64_lt_s"]
	4 --> 7
	3 --> 7
	22["eff_push__876 push_u32"]
	21 --> 22
	4 -. Stack .-> 22
	21["merge__875 merge_u"]
	13 --> 21
	14 --> 21
	19["mb__874 bool.&&"]
	17 --> 19
	18 --> 19
	18["mf__873 U64_maybeFalse"]
	7 --> 18
</pre>`;
window.traces["I64_LT_S"]["unlem_schedule"] = ''
window.traces["I64_LT_S"]["unlem_schedule"] += `<pre class=''>def b = pop_u64();
def a = pop_u64();
def cond__863 = U64_lt_s(a, b);
def mt__872 = U64_maybeTrue(cond__863);
def mf__873 = U64_maybeFalse(cond__863);
def mb__874 = bool.&&(mt__872, mf__873);
if (mb__874) {
	def arg__865 : u32 = 1;
	def abs__870 = lift_u32(arg__865);
	def arg__867 : u32 = 0;
	def abs__871 = lift_u32(arg__867);
	def merge__875 = merge_u(abs__870, abs__871);
	def eff_push__876 = push_u32(merge__875);
} else {
	if (mt__872) {
		def arg__865 : u32 = 1;
		def abs__870 = lift_u32(arg__865);
		def eff__864 = push_u32(abs__870);
	} else {
		def arg__867 : u32 = 0;
		def abs__871 = lift_u32(arg__867);
		def eff__866 = push_u32(abs__871);
	}
// phis: 
}
// phis: 
</pre>`;
window.traces["I64_LT_S"]["unlem_scheduler"] = ''
window.traces["I64_LT_S"]["unlem_scheduler"] += `<pre class='graph'>graph TD
subgraph block_1163["Block 1163"]
	direction TB
	b1163_1[\\"Finish"/]
	b1163_22["eff_push__876 push_u32"]
	b1163_21["merge__875 merge_u"]
	b1163_22 --> b1163_1
	b1163_21 --> b1163_22
end
phi_1165 --> block_1163
subgraph phi_1165["Phi 1165"]
	p1165_12{{"Sϕ Stack "}}
end
block_1166 --> phi_1165
block_1167 --> phi_1165
subgraph block_1166["Block 1166"]
	direction TB
	b1166_22["eff_push__876 push_u32"]
	b1166_21["merge__875 merge_u"]
	b1166_21 --> b1166_22
end
phi_1174 --> block_1166
subgraph phi_1174["Phi 1174"]
	p1174_20{{"Sϕ Stack "}}
end
block_1175 --> phi_1174
block_1176 --> phi_1174
subgraph block_1175["Block 1175"]
	direction TB
end
branch_1173 --> block_1175
subgraph branch_1173["Branch 1173"]
	br1173_17["mt__872 U64_maybeTrue"]

end
branch_1164 --> branch_1173
subgraph branch_1164["Branch 1164"]
	br1164_19["mb__874 bool.&&"]

end
block_1172 --> branch_1164
subgraph block_1172["Block 1172"]
	direction TB
	b1172_19["mb__874 bool.&&"]
	b1172_17["mt__872 U64_maybeTrue"]
	b1172_18["mf__873 U64_maybeFalse"]
	b1172_11["eff__864 push_u32"]
	b1172_9["eff__866 push_u32"]
	b1172_7["cond__863 U64_lt_s"]
	b1172_13["abs__870 lift_u32"]
	b1172_14["abs__871 lift_u32"]
	b1172_4["a pop_u64"]
	b1172_3["b pop_u64"]
	b1172_10["arg__865 1"]
	b1172_8["arg__867 0"]
	b1172_0[/"Start"\\]
	b1172_17 --> b1172_19
	b1172_18 --> b1172_17
	b1172_11 --> b1172_18
	b1172_9 --> b1172_11
	b1172_7 --> b1172_9
	b1172_13 --> b1172_7
	b1172_14 --> b1172_13
	b1172_4 --> b1172_14
	b1172_3 --> b1172_4
	b1172_10 --> b1172_3
	b1172_8 --> b1172_10
	b1172_0 --> b1172_8
end
subgraph block_1176["Block 1176"]
	direction TB
end
branch_1173 --> block_1176
subgraph block_1167["Block 1167"]
	direction TB
end
phi_1169 --> block_1167
subgraph phi_1169["Phi 1169"]
	p1169_20{{"Sϕ Stack "}}
end
block_1170 --> phi_1169
block_1171 --> phi_1169
subgraph block_1170["Block 1170"]
	direction TB
end
branch_1168 --> block_1170
subgraph branch_1168["Branch 1168"]
	br1168_17["mt__872 U64_maybeTrue"]

end
branch_1164 --> branch_1168
subgraph block_1171["Block 1171"]
	direction TB
end
branch_1168 --> block_1171

</pre>`;
window.traces["I64_LT_S"]["unlem_pretty"] = ''
window.traces["I64_LT_S"]["unlem_pretty"] += `<pre class=''>def b = pop_u64();
def a = pop_u64();
def mt = U64_maybeTrue(U64_lt_s(a, b));
def mf = U64_maybeFalse(U64_lt_s(a, b));
if (bool.&&(mt, mf)) {
	push_u32(merge_u(lift_u32(1), lift_u32(0)));
} else {
	if (mt) {
		push_u32(lift_u32(1));
	} else {
		push_u32(lift_u32(0));
	}
}
</pre>`;
window.traces["I64_LT_S"]["constUnLEM"] = ''
window.traces["I64_LT_S"]["constUnLEM"] += `<pre class='graph'>---
config:
  layout: elk
---
graph TD
	1[\\"Finish"/]
	0 -. Codeptr Trap Locals Globals Tables Memory Extra .-> 1
	12 -. Stack .-> 1
	12["eff_push__876 push_u32"]
	21 --> 12
	4 -. Stack .-> 12
	4["a pop_u64"]
	3 -. Stack .-> 4
	3["b pop_u64"]
	0 -. Stack .-> 3
	0[/"Start"\\]
	21["merge__875 merge_u"]
	13 --> 21
	14 --> 21
	14["abs__871 lift_u32"]
	8 --> 14
	8["arg__867 0"]
	13["abs__870 lift_u32"]
	10 --> 13
	10["arg__865 1"]
</pre>`;
window.traces["I64_LT_S"]["chooseMerge"] = ''
window.traces["I64_LT_S"]["chooseMerge"] += `<pre class='graph'>---
config:
  layout: elk
---
graph TD
	1[\\"Finish"/]
	0 -. Codeptr Trap Locals Globals Tables Memory Extra .-> 1
	12 -. Stack .-> 1
	12["eff_push__876 push_u32"]
	13 --> 12
	4 -. Stack .-> 12
	4["a pop_u64"]
	3 -. Stack .-> 4
	3["b pop_u64"]
	0 -. Stack .-> 3
	0[/"Start"\\]
	13["abs__870 lift_u32"]
	10 --> 13
	10["arg__865 1"]
</pre>`;
window.traces["I64_LT_S"]["scheduled"] = ''
window.traces["I64_LT_S"]["scheduled"] += `<pre class=''>def arg__865 : u32 = 1;
def abs__870 = lift_u32(arg__865);
def b = pop_u64();
def a = pop_u64();
def eff_push__876 = push_u32(abs__870);
</pre>`;
window.traces["I64_LT_S"]["pretty"] = ''
window.traces["I64_LT_S"]["pretty"] += `<pre class=''>def b = pop_u64();
def a = pop_u64();
push_u32(lift_u32(1));
</pre>`;
window.traces["I64_LT_U"] = {}
window.traces["I64_LT_U"]["parsed"] = ''
window.traces["I64_LT_U"]["parsed"] += `<pre class=''>def b = pop_u64();
def a = pop_u64();
def arg__883 = (b);
def arg__882 = (a);
def cond__877 = u64.<(arg__882, arg__883);
if (cond__877) {
	def arg__879 : u32 = 1;
	def eff__878 = push_u32(arg__879);
} else {
	def arg__881 : u32 = 0;
	def eff__880 = push_u32(arg__881);
}
// phis: 
</pre>`;
window.traces["I64_LT_U"]["raw"] = ''
window.traces["I64_LT_U"]["raw"] += `<pre class='graph'>---
config:
  layout: elk
---
graph TD
	1[\\"Finish"/]
	0 -. Codeptr Trap Locals Globals Tables Memory Extra .-> 1
	12 -. Stack .-> 1
	12{{"Sϕ Stack "}}
	7 --> 12
	11 --> 12
	9 --> 12
	9["eff__880 push_u32"]
	8 --> 9
	4 -. Stack .-> 9
	4["a pop_u64"]
	3 -. Stack .-> 4
	3["b pop_u64"]
	0 -. Stack .-> 3
	0[/"Start"\\]
	8["arg__881 0"]
	11["eff__878 push_u32"]
	10 --> 11
	4 -. Stack .-> 11
	10["arg__879 1"]
	7["cond__877 u64.<"]
	4 --> 7
	3 --> 7
</pre>`;
window.traces["I64_LT_U"]["overloadOps"] = ''
window.traces["I64_LT_U"]["overloadOps"] += `<pre class='graph'>---
config:
  layout: elk
---
graph TD
	1[\\"Finish"/]
	0 -. Codeptr Trap Locals Globals Tables Memory Extra .-> 1
	12 -. Stack .-> 1
	12{{"Sϕ Stack "}}
	7 --> 12
	11 --> 12
	9 --> 12
	9["eff__880 push_u32"]
	8 --> 9
	4 -. Stack .-> 9
	4["a pop_u64"]
	3 -. Stack .-> 4
	3["b pop_u64"]
	0 -. Stack .-> 3
	0[/"Start"\\]
	8["arg__881 0"]
	11["eff__878 push_u32"]
	10 --> 11
	4 -. Stack .-> 11
	10["arg__879 1"]
	7["cond__877 U64_lt"]
	4 --> 7
	3 --> 7
</pre>`;
window.traces["I64_LT_U"]["addAbstractions"] = ''
window.traces["I64_LT_U"]["addAbstractions"] += `<pre class='graph'>---
config:
  layout: elk
---
graph TD
	1[\\"Finish"/]
	0 -. Codeptr Trap Locals Globals Tables Memory Extra .-> 1
	12 -. Stack .-> 1
	12{{"Sϕ Stack "}}
	7 --> 12
	11 --> 12
	9 --> 12
	9["eff__880 push_u32"]
	14 --> 9
	4 -. Stack .-> 9
	4["a pop_u64"]
	3 -. Stack .-> 4
	3["b pop_u64"]
	0 -. Stack .-> 3
	0[/"Start"\\]
	14["abs__885 lift_u32"]
	8 --> 14
	8["arg__881 0"]
	11["eff__878 push_u32"]
	13 --> 11
	4 -. Stack .-> 11
	13["abs__884 lift_u32"]
	10 --> 13
	10["arg__879 1"]
	7["cond__877 U64_lt"]
	4 --> 7
	3 --> 7
</pre>`;
window.traces["I64_LT_U"]["schedulerMermaid"] = ''
window.traces["I64_LT_U"]["schedulerMermaid"] += `<pre class='graph'>graph TD
subgraph block_1177["Block 1177"]
	direction TB
	b1177_1[\\"Finish"/]
	b1177_11["eff__878 push_u32"]
	b1177_9["eff__880 push_u32"]
	b1177_4["a pop_u64"]
	b1177_3["b pop_u64"]
	b1177_13["abs__884 lift_u32"]
	b1177_14["abs__885 lift_u32"]
	b1177_10["arg__879 1"]
	b1177_8["arg__881 0"]
	b1177_11 --> b1177_1
	b1177_9 --> b1177_11
	b1177_4 --> b1177_9
	b1177_3 --> b1177_4
	b1177_13 --> b1177_3
	b1177_14 --> b1177_13
	b1177_10 --> b1177_14
	b1177_8 --> b1177_10
end
phi_1179 --> block_1177
subgraph phi_1179["Phi 1179"]
	p1179_12{{"Sϕ Stack "}}
end
block_1180 --> phi_1179
block_1181 --> phi_1179
subgraph block_1180["Block 1180"]
	direction TB
	b1180_11["eff__878 push_u32"]
end
branch_1178 --> block_1180
subgraph branch_1178["Branch 1178"]
	br1178_7["cond__877 U64_lt"]

end
block_1182 --> branch_1178
subgraph block_1182["Block 1182"]
	direction TB
	b1182_7["cond__877 U64_lt"]
	b1182_0[/"Start"\\]
	b1182_0 --> b1182_7
end
subgraph block_1181["Block 1181"]
	direction TB
	b1181_9["eff__880 push_u32"]
end
branch_1178 --> block_1181

</pre>`;
window.traces["I64_LT_U"]["unLEM"] = ''
window.traces["I64_LT_U"]["unLEM"] += `<pre class='graph'>---
config:
  layout: elk
---
graph TD
	1[\\"Finish"/]
	0 -. Codeptr Trap Locals Globals Tables Memory Extra .-> 1
	12 -. Stack .-> 1
	12{{"Sϕ Stack "}}
	19 --> 12
	22 --> 12
	20 --> 12
	20{{"Sϕ Stack "}}
	17 --> 20
	11 --> 20
	9 --> 20
	9["eff__880 push_u32"]
	14 --> 9
	4 -. Stack .-> 9
	4["a pop_u64"]
	3 -. Stack .-> 4
	3["b pop_u64"]
	0 -. Stack .-> 3
	0[/"Start"\\]
	14["abs__885 lift_u32"]
	8 --> 14
	8["arg__881 0"]
	11["eff__878 push_u32"]
	13 --> 11
	4 -. Stack .-> 11
	13["abs__884 lift_u32"]
	10 --> 13
	10["arg__879 1"]
	17["mt__886 U64_maybeTrue"]
	7 --> 17
	7["cond__877 U64_lt"]
	4 --> 7
	3 --> 7
	22["eff_push__890 push_u32"]
	21 --> 22
	4 -. Stack .-> 22
	21["merge__889 merge_u"]
	13 --> 21
	14 --> 21
	19["mb__888 bool.&&"]
	17 --> 19
	18 --> 19
	18["mf__887 U64_maybeFalse"]
	7 --> 18
</pre>`;
window.traces["I64_LT_U"]["unlem_schedule"] = ''
window.traces["I64_LT_U"]["unlem_schedule"] += `<pre class=''>def b = pop_u64();
def a = pop_u64();
def cond__877 = U64_lt(a, b);
def mt__886 = U64_maybeTrue(cond__877);
def mf__887 = U64_maybeFalse(cond__877);
def mb__888 = bool.&&(mt__886, mf__887);
if (mb__888) {
	def arg__879 : u32 = 1;
	def abs__884 = lift_u32(arg__879);
	def arg__881 : u32 = 0;
	def abs__885 = lift_u32(arg__881);
	def merge__889 = merge_u(abs__884, abs__885);
	def eff_push__890 = push_u32(merge__889);
} else {
	if (mt__886) {
		def arg__879 : u32 = 1;
		def abs__884 = lift_u32(arg__879);
		def eff__878 = push_u32(abs__884);
	} else {
		def arg__881 : u32 = 0;
		def abs__885 = lift_u32(arg__881);
		def eff__880 = push_u32(abs__885);
	}
// phis: 
}
// phis: 
</pre>`;
window.traces["I64_LT_U"]["unlem_scheduler"] = ''
window.traces["I64_LT_U"]["unlem_scheduler"] += `<pre class='graph'>graph TD
subgraph block_1183["Block 1183"]
	direction TB
	b1183_1[\\"Finish"/]
	b1183_22["eff_push__890 push_u32"]
	b1183_21["merge__889 merge_u"]
	b1183_22 --> b1183_1
	b1183_21 --> b1183_22
end
phi_1185 --> block_1183
subgraph phi_1185["Phi 1185"]
	p1185_12{{"Sϕ Stack "}}
end
block_1186 --> phi_1185
block_1187 --> phi_1185
subgraph block_1186["Block 1186"]
	direction TB
	b1186_22["eff_push__890 push_u32"]
	b1186_21["merge__889 merge_u"]
	b1186_21 --> b1186_22
end
phi_1194 --> block_1186
subgraph phi_1194["Phi 1194"]
	p1194_20{{"Sϕ Stack "}}
end
block_1195 --> phi_1194
block_1196 --> phi_1194
subgraph block_1195["Block 1195"]
	direction TB
end
branch_1193 --> block_1195
subgraph branch_1193["Branch 1193"]
	br1193_17["mt__886 U64_maybeTrue"]

end
branch_1184 --> branch_1193
subgraph branch_1184["Branch 1184"]
	br1184_19["mb__888 bool.&&"]

end
block_1192 --> branch_1184
subgraph block_1192["Block 1192"]
	direction TB
	b1192_19["mb__888 bool.&&"]
	b1192_17["mt__886 U64_maybeTrue"]
	b1192_18["mf__887 U64_maybeFalse"]
	b1192_11["eff__878 push_u32"]
	b1192_9["eff__880 push_u32"]
	b1192_7["cond__877 U64_lt"]
	b1192_13["abs__884 lift_u32"]
	b1192_14["abs__885 lift_u32"]
	b1192_4["a pop_u64"]
	b1192_3["b pop_u64"]
	b1192_10["arg__879 1"]
	b1192_8["arg__881 0"]
	b1192_0[/"Start"\\]
	b1192_17 --> b1192_19
	b1192_18 --> b1192_17
	b1192_11 --> b1192_18
	b1192_9 --> b1192_11
	b1192_7 --> b1192_9
	b1192_13 --> b1192_7
	b1192_14 --> b1192_13
	b1192_4 --> b1192_14
	b1192_3 --> b1192_4
	b1192_10 --> b1192_3
	b1192_8 --> b1192_10
	b1192_0 --> b1192_8
end
subgraph block_1196["Block 1196"]
	direction TB
end
branch_1193 --> block_1196
subgraph block_1187["Block 1187"]
	direction TB
end
phi_1189 --> block_1187
subgraph phi_1189["Phi 1189"]
	p1189_20{{"Sϕ Stack "}}
end
block_1190 --> phi_1189
block_1191 --> phi_1189
subgraph block_1190["Block 1190"]
	direction TB
end
branch_1188 --> block_1190
subgraph branch_1188["Branch 1188"]
	br1188_17["mt__886 U64_maybeTrue"]

end
branch_1184 --> branch_1188
subgraph block_1191["Block 1191"]
	direction TB
end
branch_1188 --> block_1191

</pre>`;
window.traces["I64_LT_U"]["unlem_pretty"] = ''
window.traces["I64_LT_U"]["unlem_pretty"] += `<pre class=''>def b = pop_u64();
def a = pop_u64();
def mt = U64_maybeTrue(U64_lt(a, b));
def mf = U64_maybeFalse(U64_lt(a, b));
if (bool.&&(mt, mf)) {
	push_u32(merge_u(lift_u32(1), lift_u32(0)));
} else {
	if (mt) {
		push_u32(lift_u32(1));
	} else {
		push_u32(lift_u32(0));
	}
}
</pre>`;
window.traces["I64_LT_U"]["constUnLEM"] = ''
window.traces["I64_LT_U"]["constUnLEM"] += `<pre class='graph'>---
config:
  layout: elk
---
graph TD
	1[\\"Finish"/]
	0 -. Codeptr Trap Locals Globals Tables Memory Extra .-> 1
	12 -. Stack .-> 1
	12["eff_push__890 push_u32"]
	21 --> 12
	4 -. Stack .-> 12
	4["a pop_u64"]
	3 -. Stack .-> 4
	3["b pop_u64"]
	0 -. Stack .-> 3
	0[/"Start"\\]
	21["merge__889 merge_u"]
	13 --> 21
	14 --> 21
	14["abs__885 lift_u32"]
	8 --> 14
	8["arg__881 0"]
	13["abs__884 lift_u32"]
	10 --> 13
	10["arg__879 1"]
</pre>`;
window.traces["I64_LT_U"]["chooseMerge"] = ''
window.traces["I64_LT_U"]["chooseMerge"] += `<pre class='graph'>---
config:
  layout: elk
---
graph TD
	1[\\"Finish"/]
	0 -. Codeptr Trap Locals Globals Tables Memory Extra .-> 1
	12 -. Stack .-> 1
	12["eff_push__890 push_u32"]
	13 --> 12
	4 -. Stack .-> 12
	4["a pop_u64"]
	3 -. Stack .-> 4
	3["b pop_u64"]
	0 -. Stack .-> 3
	0[/"Start"\\]
	13["abs__884 lift_u32"]
	10 --> 13
	10["arg__879 1"]
</pre>`;
window.traces["I64_LT_U"]["scheduled"] = ''
window.traces["I64_LT_U"]["scheduled"] += `<pre class=''>def arg__879 : u32 = 1;
def abs__884 = lift_u32(arg__879);
def b = pop_u64();
def a = pop_u64();
def eff_push__890 = push_u32(abs__884);
</pre>`;
window.traces["I64_LT_U"]["pretty"] = ''
window.traces["I64_LT_U"]["pretty"] += `<pre class=''>def b = pop_u64();
def a = pop_u64();
push_u32(lift_u32(1));
</pre>`;
window.traces["I64_GT_S"] = {}
window.traces["I64_GT_S"]["parsed"] = ''
window.traces["I64_GT_S"]["parsed"] += `<pre class=''>def b = pop_u64();
def a = pop_u64();
def arg__897 = (b);
def arg__896 = (a);
def cond__891 = U64_gt_s(arg__896, arg__897);
if (cond__891) {
	def arg__893 : u32 = 1;
	def eff__892 = push_u32(arg__893);
} else {
	def arg__895 : u32 = 0;
	def eff__894 = push_u32(arg__895);
}
// phis: 
</pre>`;
window.traces["I64_GT_S"]["raw"] = ''
window.traces["I64_GT_S"]["raw"] += `<pre class='graph'>---
config:
  layout: elk
---
graph TD
	1[\\"Finish"/]
	0 -. Codeptr Trap Locals Globals Tables Memory Extra .-> 1
	12 -. Stack .-> 1
	12{{"Sϕ Stack "}}
	7 --> 12
	11 --> 12
	9 --> 12
	9["eff__894 push_u32"]
	8 --> 9
	4 -. Stack .-> 9
	4["a pop_u64"]
	3 -. Stack .-> 4
	3["b pop_u64"]
	0 -. Stack .-> 3
	0[/"Start"\\]
	8["arg__895 0"]
	11["eff__892 push_u32"]
	10 --> 11
	4 -. Stack .-> 11
	10["arg__893 1"]
	7["cond__891 U64_gt_s"]
	4 --> 7
	3 --> 7
</pre>`;
window.traces["I64_GT_S"]["overloadOps"] = ''
window.traces["I64_GT_S"]["overloadOps"] += `<pre class='graph'>---
config:
  layout: elk
---
graph TD
	1[\\"Finish"/]
	0 -. Codeptr Trap Locals Globals Tables Memory Extra .-> 1
	12 -. Stack .-> 1
	12{{"Sϕ Stack "}}
	7 --> 12
	11 --> 12
	9 --> 12
	9["eff__894 push_u32"]
	8 --> 9
	4 -. Stack .-> 9
	4["a pop_u64"]
	3 -. Stack .-> 4
	3["b pop_u64"]
	0 -. Stack .-> 3
	0[/"Start"\\]
	8["arg__895 0"]
	11["eff__892 push_u32"]
	10 --> 11
	4 -. Stack .-> 11
	10["arg__893 1"]
	7["cond__891 U64_gt_s"]
	4 --> 7
	3 --> 7
</pre>`;
window.traces["I64_GT_S"]["addAbstractions"] = ''
window.traces["I64_GT_S"]["addAbstractions"] += `<pre class='graph'>---
config:
  layout: elk
---
graph TD
	1[\\"Finish"/]
	0 -. Codeptr Trap Locals Globals Tables Memory Extra .-> 1
	12 -. Stack .-> 1
	12{{"Sϕ Stack "}}
	7 --> 12
	11 --> 12
	9 --> 12
	9["eff__894 push_u32"]
	14 --> 9
	4 -. Stack .-> 9
	4["a pop_u64"]
	3 -. Stack .-> 4
	3["b pop_u64"]
	0 -. Stack .-> 3
	0[/"Start"\\]
	14["abs__899 lift_u32"]
	8 --> 14
	8["arg__895 0"]
	11["eff__892 push_u32"]
	13 --> 11
	4 -. Stack .-> 11
	13["abs__898 lift_u32"]
	10 --> 13
	10["arg__893 1"]
	7["cond__891 U64_gt_s"]
	4 --> 7
	3 --> 7
</pre>`;
window.traces["I64_GT_S"]["schedulerMermaid"] = ''
window.traces["I64_GT_S"]["schedulerMermaid"] += `<pre class='graph'>graph TD
subgraph block_1197["Block 1197"]
	direction TB
	b1197_1[\\"Finish"/]
	b1197_11["eff__892 push_u32"]
	b1197_9["eff__894 push_u32"]
	b1197_4["a pop_u64"]
	b1197_3["b pop_u64"]
	b1197_13["abs__898 lift_u32"]
	b1197_14["abs__899 lift_u32"]
	b1197_10["arg__893 1"]
	b1197_8["arg__895 0"]
	b1197_11 --> b1197_1
	b1197_9 --> b1197_11
	b1197_4 --> b1197_9
	b1197_3 --> b1197_4
	b1197_13 --> b1197_3
	b1197_14 --> b1197_13
	b1197_10 --> b1197_14
	b1197_8 --> b1197_10
end
phi_1199 --> block_1197
subgraph phi_1199["Phi 1199"]
	p1199_12{{"Sϕ Stack "}}
end
block_1200 --> phi_1199
block_1201 --> phi_1199
subgraph block_1200["Block 1200"]
	direction TB
	b1200_11["eff__892 push_u32"]
end
branch_1198 --> block_1200
subgraph branch_1198["Branch 1198"]
	br1198_7["cond__891 U64_gt_s"]

end
block_1202 --> branch_1198
subgraph block_1202["Block 1202"]
	direction TB
	b1202_7["cond__891 U64_gt_s"]
	b1202_0[/"Start"\\]
	b1202_0 --> b1202_7
end
subgraph block_1201["Block 1201"]
	direction TB
	b1201_9["eff__894 push_u32"]
end
branch_1198 --> block_1201

</pre>`;
window.traces["I64_GT_S"]["unLEM"] = ''
window.traces["I64_GT_S"]["unLEM"] += `<pre class='graph'>---
config:
  layout: elk
---
graph TD
	1[\\"Finish"/]
	0 -. Codeptr Trap Locals Globals Tables Memory Extra .-> 1
	12 -. Stack .-> 1
	12{{"Sϕ Stack "}}
	19 --> 12
	22 --> 12
	20 --> 12
	20{{"Sϕ Stack "}}
	17 --> 20
	11 --> 20
	9 --> 20
	9["eff__894 push_u32"]
	14 --> 9
	4 -. Stack .-> 9
	4["a pop_u64"]
	3 -. Stack .-> 4
	3["b pop_u64"]
	0 -. Stack .-> 3
	0[/"Start"\\]
	14["abs__899 lift_u32"]
	8 --> 14
	8["arg__895 0"]
	11["eff__892 push_u32"]
	13 --> 11
	4 -. Stack .-> 11
	13["abs__898 lift_u32"]
	10 --> 13
	10["arg__893 1"]
	17["mt__900 U64_maybeTrue"]
	7 --> 17
	7["cond__891 U64_gt_s"]
	4 --> 7
	3 --> 7
	22["eff_push__904 push_u32"]
	21 --> 22
	4 -. Stack .-> 22
	21["merge__903 merge_u"]
	13 --> 21
	14 --> 21
	19["mb__902 bool.&&"]
	17 --> 19
	18 --> 19
	18["mf__901 U64_maybeFalse"]
	7 --> 18
</pre>`;
window.traces["I64_GT_S"]["unlem_schedule"] = ''
window.traces["I64_GT_S"]["unlem_schedule"] += `<pre class=''>def b = pop_u64();
def a = pop_u64();
def cond__891 = U64_gt_s(a, b);
def mt__900 = U64_maybeTrue(cond__891);
def mf__901 = U64_maybeFalse(cond__891);
def mb__902 = bool.&&(mt__900, mf__901);
if (mb__902) {
	def arg__893 : u32 = 1;
	def abs__898 = lift_u32(arg__893);
	def arg__895 : u32 = 0;
	def abs__899 = lift_u32(arg__895);
	def merge__903 = merge_u(abs__898, abs__899);
	def eff_push__904 = push_u32(merge__903);
} else {
	if (mt__900) {
		def arg__893 : u32 = 1;
		def abs__898 = lift_u32(arg__893);
		def eff__892 = push_u32(abs__898);
	} else {
		def arg__895 : u32 = 0;
		def abs__899 = lift_u32(arg__895);
		def eff__894 = push_u32(abs__899);
	}
// phis: 
}
// phis: 
</pre>`;
window.traces["I64_GT_S"]["unlem_scheduler"] = ''
window.traces["I64_GT_S"]["unlem_scheduler"] += `<pre class='graph'>graph TD
subgraph block_1203["Block 1203"]
	direction TB
	b1203_1[\\"Finish"/]
	b1203_22["eff_push__904 push_u32"]
	b1203_21["merge__903 merge_u"]
	b1203_22 --> b1203_1
	b1203_21 --> b1203_22
end
phi_1205 --> block_1203
subgraph phi_1205["Phi 1205"]
	p1205_12{{"Sϕ Stack "}}
end
block_1206 --> phi_1205
block_1207 --> phi_1205
subgraph block_1206["Block 1206"]
	direction TB
	b1206_22["eff_push__904 push_u32"]
	b1206_21["merge__903 merge_u"]
	b1206_21 --> b1206_22
end
phi_1214 --> block_1206
subgraph phi_1214["Phi 1214"]
	p1214_20{{"Sϕ Stack "}}
end
block_1215 --> phi_1214
block_1216 --> phi_1214
subgraph block_1215["Block 1215"]
	direction TB
end
branch_1213 --> block_1215
subgraph branch_1213["Branch 1213"]
	br1213_17["mt__900 U64_maybeTrue"]

end
branch_1204 --> branch_1213
subgraph branch_1204["Branch 1204"]
	br1204_19["mb__902 bool.&&"]

end
block_1212 --> branch_1204
subgraph block_1212["Block 1212"]
	direction TB
	b1212_19["mb__902 bool.&&"]
	b1212_17["mt__900 U64_maybeTrue"]
	b1212_18["mf__901 U64_maybeFalse"]
	b1212_11["eff__892 push_u32"]
	b1212_9["eff__894 push_u32"]
	b1212_7["cond__891 U64_gt_s"]
	b1212_13["abs__898 lift_u32"]
	b1212_14["abs__899 lift_u32"]
	b1212_4["a pop_u64"]
	b1212_3["b pop_u64"]
	b1212_10["arg__893 1"]
	b1212_8["arg__895 0"]
	b1212_0[/"Start"\\]
	b1212_17 --> b1212_19
	b1212_18 --> b1212_17
	b1212_11 --> b1212_18
	b1212_9 --> b1212_11
	b1212_7 --> b1212_9
	b1212_13 --> b1212_7
	b1212_14 --> b1212_13
	b1212_4 --> b1212_14
	b1212_3 --> b1212_4
	b1212_10 --> b1212_3
	b1212_8 --> b1212_10
	b1212_0 --> b1212_8
end
subgraph block_1216["Block 1216"]
	direction TB
end
branch_1213 --> block_1216
subgraph block_1207["Block 1207"]
	direction TB
end
phi_1209 --> block_1207
subgraph phi_1209["Phi 1209"]
	p1209_20{{"Sϕ Stack "}}
end
block_1210 --> phi_1209
block_1211 --> phi_1209
subgraph block_1210["Block 1210"]
	direction TB
end
branch_1208 --> block_1210
subgraph branch_1208["Branch 1208"]
	br1208_17["mt__900 U64_maybeTrue"]

end
branch_1204 --> branch_1208
subgraph block_1211["Block 1211"]
	direction TB
end
branch_1208 --> block_1211

</pre>`;
window.traces["I64_GT_S"]["unlem_pretty"] = ''
window.traces["I64_GT_S"]["unlem_pretty"] += `<pre class=''>def b = pop_u64();
def a = pop_u64();
def mt = U64_maybeTrue(U64_gt_s(a, b));
def mf = U64_maybeFalse(U64_gt_s(a, b));
if (bool.&&(mt, mf)) {
	push_u32(merge_u(lift_u32(1), lift_u32(0)));
} else {
	if (mt) {
		push_u32(lift_u32(1));
	} else {
		push_u32(lift_u32(0));
	}
}
</pre>`;
window.traces["I64_GT_S"]["constUnLEM"] = ''
window.traces["I64_GT_S"]["constUnLEM"] += `<pre class='graph'>---
config:
  layout: elk
---
graph TD
	1[\\"Finish"/]
	0 -. Codeptr Trap Locals Globals Tables Memory Extra .-> 1
	12 -. Stack .-> 1
	12["eff_push__904 push_u32"]
	21 --> 12
	4 -. Stack .-> 12
	4["a pop_u64"]
	3 -. Stack .-> 4
	3["b pop_u64"]
	0 -. Stack .-> 3
	0[/"Start"\\]
	21["merge__903 merge_u"]
	13 --> 21
	14 --> 21
	14["abs__899 lift_u32"]
	8 --> 14
	8["arg__895 0"]
	13["abs__898 lift_u32"]
	10 --> 13
	10["arg__893 1"]
</pre>`;
window.traces["I64_GT_S"]["chooseMerge"] = ''
window.traces["I64_GT_S"]["chooseMerge"] += `<pre class='graph'>---
config:
  layout: elk
---
graph TD
	1[\\"Finish"/]
	0 -. Codeptr Trap Locals Globals Tables Memory Extra .-> 1
	12 -. Stack .-> 1
	12["eff_push__904 push_u32"]
	13 --> 12
	4 -. Stack .-> 12
	4["a pop_u64"]
	3 -. Stack .-> 4
	3["b pop_u64"]
	0 -. Stack .-> 3
	0[/"Start"\\]
	13["abs__898 lift_u32"]
	10 --> 13
	10["arg__893 1"]
</pre>`;
window.traces["I64_GT_S"]["scheduled"] = ''
window.traces["I64_GT_S"]["scheduled"] += `<pre class=''>def arg__893 : u32 = 1;
def abs__898 = lift_u32(arg__893);
def b = pop_u64();
def a = pop_u64();
def eff_push__904 = push_u32(abs__898);
</pre>`;
window.traces["I64_GT_S"]["pretty"] = ''
window.traces["I64_GT_S"]["pretty"] += `<pre class=''>def b = pop_u64();
def a = pop_u64();
push_u32(lift_u32(1));
</pre>`;
window.traces["I64_GT_U"] = {}
window.traces["I64_GT_U"]["parsed"] = ''
window.traces["I64_GT_U"]["parsed"] += `<pre class=''>def b = pop_u64();
def a = pop_u64();
def arg__911 = (b);
def arg__910 = (a);
def cond__905 = u64.>(arg__910, arg__911);
if (cond__905) {
	def arg__907 : u32 = 1;
	def eff__906 = push_u32(arg__907);
} else {
	def arg__909 : u32 = 0;
	def eff__908 = push_u32(arg__909);
}
// phis: 
</pre>`;
window.traces["I64_GT_U"]["raw"] = ''
window.traces["I64_GT_U"]["raw"] += `<pre class='graph'>---
config:
  layout: elk
---
graph TD
	1[\\"Finish"/]
	0 -. Codeptr Trap Locals Globals Tables Memory Extra .-> 1
	12 -. Stack .-> 1
	12{{"Sϕ Stack "}}
	7 --> 12
	11 --> 12
	9 --> 12
	9["eff__908 push_u32"]
	8 --> 9
	4 -. Stack .-> 9
	4["a pop_u64"]
	3 -. Stack .-> 4
	3["b pop_u64"]
	0 -. Stack .-> 3
	0[/"Start"\\]
	8["arg__909 0"]
	11["eff__906 push_u32"]
	10 --> 11
	4 -. Stack .-> 11
	10["arg__907 1"]
	7["cond__905 u64.>"]
	4 --> 7
	3 --> 7
</pre>`;
window.traces["I64_GT_U"]["overloadOps"] = ''
window.traces["I64_GT_U"]["overloadOps"] += `<pre class='graph'>---
config:
  layout: elk
---
graph TD
	1[\\"Finish"/]
	0 -. Codeptr Trap Locals Globals Tables Memory Extra .-> 1
	12 -. Stack .-> 1
	12{{"Sϕ Stack "}}
	7 --> 12
	11 --> 12
	9 --> 12
	9["eff__908 push_u32"]
	8 --> 9
	4 -. Stack .-> 9
	4["a pop_u64"]
	3 -. Stack .-> 4
	3["b pop_u64"]
	0 -. Stack .-> 3
	0[/"Start"\\]
	8["arg__909 0"]
	11["eff__906 push_u32"]
	10 --> 11
	4 -. Stack .-> 11
	10["arg__907 1"]
	7["cond__905 U64_gt"]
	4 --> 7
	3 --> 7
</pre>`;
window.traces["I64_GT_U"]["addAbstractions"] = ''
window.traces["I64_GT_U"]["addAbstractions"] += `<pre class='graph'>---
config:
  layout: elk
---
graph TD
	1[\\"Finish"/]
	0 -. Codeptr Trap Locals Globals Tables Memory Extra .-> 1
	12 -. Stack .-> 1
	12{{"Sϕ Stack "}}
	7 --> 12
	11 --> 12
	9 --> 12
	9["eff__908 push_u32"]
	14 --> 9
	4 -. Stack .-> 9
	4["a pop_u64"]
	3 -. Stack .-> 4
	3["b pop_u64"]
	0 -. Stack .-> 3
	0[/"Start"\\]
	14["abs__913 lift_u32"]
	8 --> 14
	8["arg__909 0"]
	11["eff__906 push_u32"]
	13 --> 11
	4 -. Stack .-> 11
	13["abs__912 lift_u32"]
	10 --> 13
	10["arg__907 1"]
	7["cond__905 U64_gt"]
	4 --> 7
	3 --> 7
</pre>`;
window.traces["I64_GT_U"]["schedulerMermaid"] = ''
window.traces["I64_GT_U"]["schedulerMermaid"] += `<pre class='graph'>graph TD
subgraph block_1217["Block 1217"]
	direction TB
	b1217_1[\\"Finish"/]
	b1217_11["eff__906 push_u32"]
	b1217_9["eff__908 push_u32"]
	b1217_4["a pop_u64"]
	b1217_3["b pop_u64"]
	b1217_13["abs__912 lift_u32"]
	b1217_14["abs__913 lift_u32"]
	b1217_10["arg__907 1"]
	b1217_8["arg__909 0"]
	b1217_11 --> b1217_1
	b1217_9 --> b1217_11
	b1217_4 --> b1217_9
	b1217_3 --> b1217_4
	b1217_13 --> b1217_3
	b1217_14 --> b1217_13
	b1217_10 --> b1217_14
	b1217_8 --> b1217_10
end
phi_1219 --> block_1217
subgraph phi_1219["Phi 1219"]
	p1219_12{{"Sϕ Stack "}}
end
block_1220 --> phi_1219
block_1221 --> phi_1219
subgraph block_1220["Block 1220"]
	direction TB
	b1220_11["eff__906 push_u32"]
end
branch_1218 --> block_1220
subgraph branch_1218["Branch 1218"]
	br1218_7["cond__905 U64_gt"]

end
block_1222 --> branch_1218
subgraph block_1222["Block 1222"]
	direction TB
	b1222_7["cond__905 U64_gt"]
	b1222_0[/"Start"\\]
	b1222_0 --> b1222_7
end
subgraph block_1221["Block 1221"]
	direction TB
	b1221_9["eff__908 push_u32"]
end
branch_1218 --> block_1221

</pre>`;
window.traces["I64_GT_U"]["unLEM"] = ''
window.traces["I64_GT_U"]["unLEM"] += `<pre class='graph'>---
config:
  layout: elk
---
graph TD
	1[\\"Finish"/]
	0 -. Codeptr Trap Locals Globals Tables Memory Extra .-> 1
	12 -. Stack .-> 1
	12{{"Sϕ Stack "}}
	19 --> 12
	22 --> 12
	20 --> 12
	20{{"Sϕ Stack "}}
	17 --> 20
	11 --> 20
	9 --> 20
	9["eff__908 push_u32"]
	14 --> 9
	4 -. Stack .-> 9
	4["a pop_u64"]
	3 -. Stack .-> 4
	3["b pop_u64"]
	0 -. Stack .-> 3
	0[/"Start"\\]
	14["abs__913 lift_u32"]
	8 --> 14
	8["arg__909 0"]
	11["eff__906 push_u32"]
	13 --> 11
	4 -. Stack .-> 11
	13["abs__912 lift_u32"]
	10 --> 13
	10["arg__907 1"]
	17["mt__914 U64_maybeTrue"]
	7 --> 17
	7["cond__905 U64_gt"]
	4 --> 7
	3 --> 7
	22["eff_push__918 push_u32"]
	21 --> 22
	4 -. Stack .-> 22
	21["merge__917 merge_u"]
	13 --> 21
	14 --> 21
	19["mb__916 bool.&&"]
	17 --> 19
	18 --> 19
	18["mf__915 U64_maybeFalse"]
	7 --> 18
</pre>`;
window.traces["I64_GT_U"]["unlem_schedule"] = ''
window.traces["I64_GT_U"]["unlem_schedule"] += `<pre class=''>def b = pop_u64();
def a = pop_u64();
def cond__905 = U64_gt(a, b);
def mt__914 = U64_maybeTrue(cond__905);
def mf__915 = U64_maybeFalse(cond__905);
def mb__916 = bool.&&(mt__914, mf__915);
if (mb__916) {
	def arg__907 : u32 = 1;
	def abs__912 = lift_u32(arg__907);
	def arg__909 : u32 = 0;
	def abs__913 = lift_u32(arg__909);
	def merge__917 = merge_u(abs__912, abs__913);
	def eff_push__918 = push_u32(merge__917);
} else {
	if (mt__914) {
		def arg__907 : u32 = 1;
		def abs__912 = lift_u32(arg__907);
		def eff__906 = push_u32(abs__912);
	} else {
		def arg__909 : u32 = 0;
		def abs__913 = lift_u32(arg__909);
		def eff__908 = push_u32(abs__913);
	}
// phis: 
}
// phis: 
</pre>`;
window.traces["I64_GT_U"]["unlem_scheduler"] = ''
window.traces["I64_GT_U"]["unlem_scheduler"] += `<pre class='graph'>graph TD
subgraph block_1223["Block 1223"]
	direction TB
	b1223_1[\\"Finish"/]
	b1223_22["eff_push__918 push_u32"]
	b1223_21["merge__917 merge_u"]
	b1223_22 --> b1223_1
	b1223_21 --> b1223_22
end
phi_1225 --> block_1223
subgraph phi_1225["Phi 1225"]
	p1225_12{{"Sϕ Stack "}}
end
block_1226 --> phi_1225
block_1227 --> phi_1225
subgraph block_1226["Block 1226"]
	direction TB
	b1226_22["eff_push__918 push_u32"]
	b1226_21["merge__917 merge_u"]
	b1226_21 --> b1226_22
end
phi_1234 --> block_1226
subgraph phi_1234["Phi 1234"]
	p1234_20{{"Sϕ Stack "}}
end
block_1235 --> phi_1234
block_1236 --> phi_1234
subgraph block_1235["Block 1235"]
	direction TB
end
branch_1233 --> block_1235
subgraph branch_1233["Branch 1233"]
	br1233_17["mt__914 U64_maybeTrue"]

end
branch_1224 --> branch_1233
subgraph branch_1224["Branch 1224"]
	br1224_19["mb__916 bool.&&"]

end
block_1232 --> branch_1224
subgraph block_1232["Block 1232"]
	direction TB
	b1232_19["mb__916 bool.&&"]
	b1232_17["mt__914 U64_maybeTrue"]
	b1232_18["mf__915 U64_maybeFalse"]
	b1232_11["eff__906 push_u32"]
	b1232_9["eff__908 push_u32"]
	b1232_7["cond__905 U64_gt"]
	b1232_13["abs__912 lift_u32"]
	b1232_14["abs__913 lift_u32"]
	b1232_4["a pop_u64"]
	b1232_3["b pop_u64"]
	b1232_10["arg__907 1"]
	b1232_8["arg__909 0"]
	b1232_0[/"Start"\\]
	b1232_17 --> b1232_19
	b1232_18 --> b1232_17
	b1232_11 --> b1232_18
	b1232_9 --> b1232_11
	b1232_7 --> b1232_9
	b1232_13 --> b1232_7
	b1232_14 --> b1232_13
	b1232_4 --> b1232_14
	b1232_3 --> b1232_4
	b1232_10 --> b1232_3
	b1232_8 --> b1232_10
	b1232_0 --> b1232_8
end
subgraph block_1236["Block 1236"]
	direction TB
end
branch_1233 --> block_1236
subgraph block_1227["Block 1227"]
	direction TB
end
phi_1229 --> block_1227
subgraph phi_1229["Phi 1229"]
	p1229_20{{"Sϕ Stack "}}
end
block_1230 --> phi_1229
block_1231 --> phi_1229
subgraph block_1230["Block 1230"]
	direction TB
end
branch_1228 --> block_1230
subgraph branch_1228["Branch 1228"]
	br1228_17["mt__914 U64_maybeTrue"]

end
branch_1224 --> branch_1228
subgraph block_1231["Block 1231"]
	direction TB
end
branch_1228 --> block_1231

</pre>`;
window.traces["I64_GT_U"]["unlem_pretty"] = ''
window.traces["I64_GT_U"]["unlem_pretty"] += `<pre class=''>def b = pop_u64();
def a = pop_u64();
def mt = U64_maybeTrue(U64_gt(a, b));
def mf = U64_maybeFalse(U64_gt(a, b));
if (bool.&&(mt, mf)) {
	push_u32(merge_u(lift_u32(1), lift_u32(0)));
} else {
	if (mt) {
		push_u32(lift_u32(1));
	} else {
		push_u32(lift_u32(0));
	}
}
</pre>`;
window.traces["I64_GT_U"]["constUnLEM"] = ''
window.traces["I64_GT_U"]["constUnLEM"] += `<pre class='graph'>---
config:
  layout: elk
---
graph TD
	1[\\"Finish"/]
	0 -. Codeptr Trap Locals Globals Tables Memory Extra .-> 1
	12 -. Stack .-> 1
	12["eff_push__918 push_u32"]
	21 --> 12
	4 -. Stack .-> 12
	4["a pop_u64"]
	3 -. Stack .-> 4
	3["b pop_u64"]
	0 -. Stack .-> 3
	0[/"Start"\\]
	21["merge__917 merge_u"]
	13 --> 21
	14 --> 21
	14["abs__913 lift_u32"]
	8 --> 14
	8["arg__909 0"]
	13["abs__912 lift_u32"]
	10 --> 13
	10["arg__907 1"]
</pre>`;
window.traces["I64_GT_U"]["chooseMerge"] = ''
window.traces["I64_GT_U"]["chooseMerge"] += `<pre class='graph'>---
config:
  layout: elk
---
graph TD
	1[\\"Finish"/]
	0 -. Codeptr Trap Locals Globals Tables Memory Extra .-> 1
	12 -. Stack .-> 1
	12["eff_push__918 push_u32"]
	13 --> 12
	4 -. Stack .-> 12
	4["a pop_u64"]
	3 -. Stack .-> 4
	3["b pop_u64"]
	0 -. Stack .-> 3
	0[/"Start"\\]
	13["abs__912 lift_u32"]
	10 --> 13
	10["arg__907 1"]
</pre>`;
window.traces["I64_GT_U"]["scheduled"] = ''
window.traces["I64_GT_U"]["scheduled"] += `<pre class=''>def arg__907 : u32 = 1;
def abs__912 = lift_u32(arg__907);
def b = pop_u64();
def a = pop_u64();
def eff_push__918 = push_u32(abs__912);
</pre>`;
window.traces["I64_GT_U"]["pretty"] = ''
window.traces["I64_GT_U"]["pretty"] += `<pre class=''>def b = pop_u64();
def a = pop_u64();
push_u32(lift_u32(1));
</pre>`;
window.traces["I64_LE_S"] = {}
window.traces["I64_LE_S"]["parsed"] = ''
window.traces["I64_LE_S"]["parsed"] += `<pre class=''>def b = pop_u64();
def a = pop_u64();
def arg__925 = (b);
def arg__924 = (a);
def cond__919 = U64_le_s(arg__924, arg__925);
if (cond__919) {
	def arg__921 : u32 = 1;
	def eff__920 = push_u32(arg__921);
} else {
	def arg__923 : u32 = 0;
	def eff__922 = push_u32(arg__923);
}
// phis: 
</pre>`;
window.traces["I64_LE_S"]["raw"] = ''
window.traces["I64_LE_S"]["raw"] += `<pre class='graph'>---
config:
  layout: elk
---
graph TD
	1[\\"Finish"/]
	0 -. Codeptr Trap Locals Globals Tables Memory Extra .-> 1
	12 -. Stack .-> 1
	12{{"Sϕ Stack "}}
	7 --> 12
	11 --> 12
	9 --> 12
	9["eff__922 push_u32"]
	8 --> 9
	4 -. Stack .-> 9
	4["a pop_u64"]
	3 -. Stack .-> 4
	3["b pop_u64"]
	0 -. Stack .-> 3
	0[/"Start"\\]
	8["arg__923 0"]
	11["eff__920 push_u32"]
	10 --> 11
	4 -. Stack .-> 11
	10["arg__921 1"]
	7["cond__919 U64_le_s"]
	4 --> 7
	3 --> 7
</pre>`;
window.traces["I64_LE_S"]["overloadOps"] = ''
window.traces["I64_LE_S"]["overloadOps"] += `<pre class='graph'>---
config:
  layout: elk
---
graph TD
	1[\\"Finish"/]
	0 -. Codeptr Trap Locals Globals Tables Memory Extra .-> 1
	12 -. Stack .-> 1
	12{{"Sϕ Stack "}}
	7 --> 12
	11 --> 12
	9 --> 12
	9["eff__922 push_u32"]
	8 --> 9
	4 -. Stack .-> 9
	4["a pop_u64"]
	3 -. Stack .-> 4
	3["b pop_u64"]
	0 -. Stack .-> 3
	0[/"Start"\\]
	8["arg__923 0"]
	11["eff__920 push_u32"]
	10 --> 11
	4 -. Stack .-> 11
	10["arg__921 1"]
	7["cond__919 U64_le_s"]
	4 --> 7
	3 --> 7
</pre>`;
window.traces["I64_LE_S"]["addAbstractions"] = ''
window.traces["I64_LE_S"]["addAbstractions"] += `<pre class='graph'>---
config:
  layout: elk
---
graph TD
	1[\\"Finish"/]
	0 -. Codeptr Trap Locals Globals Tables Memory Extra .-> 1
	12 -. Stack .-> 1
	12{{"Sϕ Stack "}}
	7 --> 12
	11 --> 12
	9 --> 12
	9["eff__922 push_u32"]
	14 --> 9
	4 -. Stack .-> 9
	4["a pop_u64"]
	3 -. Stack .-> 4
	3["b pop_u64"]
	0 -. Stack .-> 3
	0[/"Start"\\]
	14["abs__927 lift_u32"]
	8 --> 14
	8["arg__923 0"]
	11["eff__920 push_u32"]
	13 --> 11
	4 -. Stack .-> 11
	13["abs__926 lift_u32"]
	10 --> 13
	10["arg__921 1"]
	7["cond__919 U64_le_s"]
	4 --> 7
	3 --> 7
</pre>`;
window.traces["I64_LE_S"]["schedulerMermaid"] = ''
window.traces["I64_LE_S"]["schedulerMermaid"] += `<pre class='graph'>graph TD
subgraph block_1237["Block 1237"]
	direction TB
	b1237_1[\\"Finish"/]
	b1237_11["eff__920 push_u32"]
	b1237_9["eff__922 push_u32"]
	b1237_4["a pop_u64"]
	b1237_3["b pop_u64"]
	b1237_13["abs__926 lift_u32"]
	b1237_14["abs__927 lift_u32"]
	b1237_10["arg__921 1"]
	b1237_8["arg__923 0"]
	b1237_11 --> b1237_1
	b1237_9 --> b1237_11
	b1237_4 --> b1237_9
	b1237_3 --> b1237_4
	b1237_13 --> b1237_3
	b1237_14 --> b1237_13
	b1237_10 --> b1237_14
	b1237_8 --> b1237_10
end
phi_1239 --> block_1237
subgraph phi_1239["Phi 1239"]
	p1239_12{{"Sϕ Stack "}}
end
block_1240 --> phi_1239
block_1241 --> phi_1239
subgraph block_1240["Block 1240"]
	direction TB
	b1240_11["eff__920 push_u32"]
end
branch_1238 --> block_1240
subgraph branch_1238["Branch 1238"]
	br1238_7["cond__919 U64_le_s"]

end
block_1242 --> branch_1238
subgraph block_1242["Block 1242"]
	direction TB
	b1242_7["cond__919 U64_le_s"]
	b1242_0[/"Start"\\]
	b1242_0 --> b1242_7
end
subgraph block_1241["Block 1241"]
	direction TB
	b1241_9["eff__922 push_u32"]
end
branch_1238 --> block_1241

</pre>`;
window.traces["I64_LE_S"]["unLEM"] = ''
window.traces["I64_LE_S"]["unLEM"] += `<pre class='graph'>---
config:
  layout: elk
---
graph TD
	1[\\"Finish"/]
	0 -. Codeptr Trap Locals Globals Tables Memory Extra .-> 1
	12 -. Stack .-> 1
	12{{"Sϕ Stack "}}
	19 --> 12
	22 --> 12
	20 --> 12
	20{{"Sϕ Stack "}}
	17 --> 20
	11 --> 20
	9 --> 20
	9["eff__922 push_u32"]
	14 --> 9
	4 -. Stack .-> 9
	4["a pop_u64"]
	3 -. Stack .-> 4
	3["b pop_u64"]
	0 -. Stack .-> 3
	0[/"Start"\\]
	14["abs__927 lift_u32"]
	8 --> 14
	8["arg__923 0"]
	11["eff__920 push_u32"]
	13 --> 11
	4 -. Stack .-> 11
	13["abs__926 lift_u32"]
	10 --> 13
	10["arg__921 1"]
	17["mt__928 U64_maybeTrue"]
	7 --> 17
	7["cond__919 U64_le_s"]
	4 --> 7
	3 --> 7
	22["eff_push__932 push_u32"]
	21 --> 22
	4 -. Stack .-> 22
	21["merge__931 merge_u"]
	13 --> 21
	14 --> 21
	19["mb__930 bool.&&"]
	17 --> 19
	18 --> 19
	18["mf__929 U64_maybeFalse"]
	7 --> 18
</pre>`;
window.traces["I64_LE_S"]["unlem_schedule"] = ''
window.traces["I64_LE_S"]["unlem_schedule"] += `<pre class=''>def b = pop_u64();
def a = pop_u64();
def cond__919 = U64_le_s(a, b);
def mt__928 = U64_maybeTrue(cond__919);
def mf__929 = U64_maybeFalse(cond__919);
def mb__930 = bool.&&(mt__928, mf__929);
if (mb__930) {
	def arg__921 : u32 = 1;
	def abs__926 = lift_u32(arg__921);
	def arg__923 : u32 = 0;
	def abs__927 = lift_u32(arg__923);
	def merge__931 = merge_u(abs__926, abs__927);
	def eff_push__932 = push_u32(merge__931);
} else {
	if (mt__928) {
		def arg__921 : u32 = 1;
		def abs__926 = lift_u32(arg__921);
		def eff__920 = push_u32(abs__926);
	} else {
		def arg__923 : u32 = 0;
		def abs__927 = lift_u32(arg__923);
		def eff__922 = push_u32(abs__927);
	}
// phis: 
}
// phis: 
</pre>`;
window.traces["I64_LE_S"]["unlem_scheduler"] = ''
window.traces["I64_LE_S"]["unlem_scheduler"] += `<pre class='graph'>graph TD
subgraph block_1243["Block 1243"]
	direction TB
	b1243_1[\\"Finish"/]
	b1243_22["eff_push__932 push_u32"]
	b1243_21["merge__931 merge_u"]
	b1243_22 --> b1243_1
	b1243_21 --> b1243_22
end
phi_1245 --> block_1243
subgraph phi_1245["Phi 1245"]
	p1245_12{{"Sϕ Stack "}}
end
block_1246 --> phi_1245
block_1247 --> phi_1245
subgraph block_1246["Block 1246"]
	direction TB
	b1246_22["eff_push__932 push_u32"]
	b1246_21["merge__931 merge_u"]
	b1246_21 --> b1246_22
end
phi_1254 --> block_1246
subgraph phi_1254["Phi 1254"]
	p1254_20{{"Sϕ Stack "}}
end
block_1255 --> phi_1254
block_1256 --> phi_1254
subgraph block_1255["Block 1255"]
	direction TB
end
branch_1253 --> block_1255
subgraph branch_1253["Branch 1253"]
	br1253_17["mt__928 U64_maybeTrue"]

end
branch_1244 --> branch_1253
subgraph branch_1244["Branch 1244"]
	br1244_19["mb__930 bool.&&"]

end
block_1252 --> branch_1244
subgraph block_1252["Block 1252"]
	direction TB
	b1252_19["mb__930 bool.&&"]
	b1252_17["mt__928 U64_maybeTrue"]
	b1252_18["mf__929 U64_maybeFalse"]
	b1252_11["eff__920 push_u32"]
	b1252_9["eff__922 push_u32"]
	b1252_7["cond__919 U64_le_s"]
	b1252_13["abs__926 lift_u32"]
	b1252_14["abs__927 lift_u32"]
	b1252_4["a pop_u64"]
	b1252_3["b pop_u64"]
	b1252_10["arg__921 1"]
	b1252_8["arg__923 0"]
	b1252_0[/"Start"\\]
	b1252_17 --> b1252_19
	b1252_18 --> b1252_17
	b1252_11 --> b1252_18
	b1252_9 --> b1252_11
	b1252_7 --> b1252_9
	b1252_13 --> b1252_7
	b1252_14 --> b1252_13
	b1252_4 --> b1252_14
	b1252_3 --> b1252_4
	b1252_10 --> b1252_3
	b1252_8 --> b1252_10
	b1252_0 --> b1252_8
end
subgraph block_1256["Block 1256"]
	direction TB
end
branch_1253 --> block_1256
subgraph block_1247["Block 1247"]
	direction TB
end
phi_1249 --> block_1247
subgraph phi_1249["Phi 1249"]
	p1249_20{{"Sϕ Stack "}}
end
block_1250 --> phi_1249
block_1251 --> phi_1249
subgraph block_1250["Block 1250"]
	direction TB
end
branch_1248 --> block_1250
subgraph branch_1248["Branch 1248"]
	br1248_17["mt__928 U64_maybeTrue"]

end
branch_1244 --> branch_1248
subgraph block_1251["Block 1251"]
	direction TB
end
branch_1248 --> block_1251

</pre>`;
window.traces["I64_LE_S"]["unlem_pretty"] = ''
window.traces["I64_LE_S"]["unlem_pretty"] += `<pre class=''>def b = pop_u64();
def a = pop_u64();
def mt = U64_maybeTrue(U64_le_s(a, b));
def mf = U64_maybeFalse(U64_le_s(a, b));
if (bool.&&(mt, mf)) {
	push_u32(merge_u(lift_u32(1), lift_u32(0)));
} else {
	if (mt) {
		push_u32(lift_u32(1));
	} else {
		push_u32(lift_u32(0));
	}
}
</pre>`;
window.traces["I64_LE_S"]["constUnLEM"] = ''
window.traces["I64_LE_S"]["constUnLEM"] += `<pre class='graph'>---
config:
  layout: elk
---
graph TD
	1[\\"Finish"/]
	0 -. Codeptr Trap Locals Globals Tables Memory Extra .-> 1
	12 -. Stack .-> 1
	12["eff_push__932 push_u32"]
	21 --> 12
	4 -. Stack .-> 12
	4["a pop_u64"]
	3 -. Stack .-> 4
	3["b pop_u64"]
	0 -. Stack .-> 3
	0[/"Start"\\]
	21["merge__931 merge_u"]
	13 --> 21
	14 --> 21
	14["abs__927 lift_u32"]
	8 --> 14
	8["arg__923 0"]
	13["abs__926 lift_u32"]
	10 --> 13
	10["arg__921 1"]
</pre>`;
window.traces["I64_LE_S"]["chooseMerge"] = ''
window.traces["I64_LE_S"]["chooseMerge"] += `<pre class='graph'>---
config:
  layout: elk
---
graph TD
	1[\\"Finish"/]
	0 -. Codeptr Trap Locals Globals Tables Memory Extra .-> 1
	12 -. Stack .-> 1
	12["eff_push__932 push_u32"]
	13 --> 12
	4 -. Stack .-> 12
	4["a pop_u64"]
	3 -. Stack .-> 4
	3["b pop_u64"]
	0 -. Stack .-> 3
	0[/"Start"\\]
	13["abs__926 lift_u32"]
	10 --> 13
	10["arg__921 1"]
</pre>`;
window.traces["I64_LE_S"]["scheduled"] = ''
window.traces["I64_LE_S"]["scheduled"] += `<pre class=''>def arg__921 : u32 = 1;
def abs__926 = lift_u32(arg__921);
def b = pop_u64();
def a = pop_u64();
def eff_push__932 = push_u32(abs__926);
</pre>`;
window.traces["I64_LE_S"]["pretty"] = ''
window.traces["I64_LE_S"]["pretty"] += `<pre class=''>def b = pop_u64();
def a = pop_u64();
push_u32(lift_u32(1));
</pre>`;
window.traces["I64_LE_U"] = {}
window.traces["I64_LE_U"]["parsed"] = ''
window.traces["I64_LE_U"]["parsed"] += `<pre class=''>def b = pop_u64();
def a = pop_u64();
def arg__939 = (b);
def arg__938 = (a);
def cond__933 = u64.<=(arg__938, arg__939);
if (cond__933) {
	def arg__935 : u32 = 1;
	def eff__934 = push_u32(arg__935);
} else {
	def arg__937 : u32 = 0;
	def eff__936 = push_u32(arg__937);
}
// phis: 
</pre>`;
window.traces["I64_LE_U"]["raw"] = ''
window.traces["I64_LE_U"]["raw"] += `<pre class='graph'>---
config:
  layout: elk
---
graph TD
	1[\\"Finish"/]
	0 -. Codeptr Trap Locals Globals Tables Memory Extra .-> 1
	12 -. Stack .-> 1
	12{{"Sϕ Stack "}}
	7 --> 12
	11 --> 12
	9 --> 12
	9["eff__936 push_u32"]
	8 --> 9
	4 -. Stack .-> 9
	4["a pop_u64"]
	3 -. Stack .-> 4
	3["b pop_u64"]
	0 -. Stack .-> 3
	0[/"Start"\\]
	8["arg__937 0"]
	11["eff__934 push_u32"]
	10 --> 11
	4 -. Stack .-> 11
	10["arg__935 1"]
	7["cond__933 u64.<="]
	4 --> 7
	3 --> 7
</pre>`;
window.traces["I64_LE_U"]["overloadOps"] = ''
window.traces["I64_LE_U"]["overloadOps"] += `<pre class='graph'>---
config:
  layout: elk
---
graph TD
	1[\\"Finish"/]
	0 -. Codeptr Trap Locals Globals Tables Memory Extra .-> 1
	12 -. Stack .-> 1
	12{{"Sϕ Stack "}}
	7 --> 12
	11 --> 12
	9 --> 12
	9["eff__936 push_u32"]
	8 --> 9
	4 -. Stack .-> 9
	4["a pop_u64"]
	3 -. Stack .-> 4
	3["b pop_u64"]
	0 -. Stack .-> 3
	0[/"Start"\\]
	8["arg__937 0"]
	11["eff__934 push_u32"]
	10 --> 11
	4 -. Stack .-> 11
	10["arg__935 1"]
	7["cond__933 U64_lte"]
	4 --> 7
	3 --> 7
</pre>`;
window.traces["I64_LE_U"]["addAbstractions"] = ''
window.traces["I64_LE_U"]["addAbstractions"] += `<pre class='graph'>---
config:
  layout: elk
---
graph TD
	1[\\"Finish"/]
	0 -. Codeptr Trap Locals Globals Tables Memory Extra .-> 1
	12 -. Stack .-> 1
	12{{"Sϕ Stack "}}
	7 --> 12
	11 --> 12
	9 --> 12
	9["eff__936 push_u32"]
	14 --> 9
	4 -. Stack .-> 9
	4["a pop_u64"]
	3 -. Stack .-> 4
	3["b pop_u64"]
	0 -. Stack .-> 3
	0[/"Start"\\]
	14["abs__941 lift_u32"]
	8 --> 14
	8["arg__937 0"]
	11["eff__934 push_u32"]
	13 --> 11
	4 -. Stack .-> 11
	13["abs__940 lift_u32"]
	10 --> 13
	10["arg__935 1"]
	7["cond__933 U64_lte"]
	4 --> 7
	3 --> 7
</pre>`;
window.traces["I64_LE_U"]["schedulerMermaid"] = ''
window.traces["I64_LE_U"]["schedulerMermaid"] += `<pre class='graph'>graph TD
subgraph block_1257["Block 1257"]
	direction TB
	b1257_1[\\"Finish"/]
	b1257_11["eff__934 push_u32"]
	b1257_9["eff__936 push_u32"]
	b1257_4["a pop_u64"]
	b1257_3["b pop_u64"]
	b1257_13["abs__940 lift_u32"]
	b1257_14["abs__941 lift_u32"]
	b1257_10["arg__935 1"]
	b1257_8["arg__937 0"]
	b1257_11 --> b1257_1
	b1257_9 --> b1257_11
	b1257_4 --> b1257_9
	b1257_3 --> b1257_4
	b1257_13 --> b1257_3
	b1257_14 --> b1257_13
	b1257_10 --> b1257_14
	b1257_8 --> b1257_10
end
phi_1259 --> block_1257
subgraph phi_1259["Phi 1259"]
	p1259_12{{"Sϕ Stack "}}
end
block_1260 --> phi_1259
block_1261 --> phi_1259
subgraph block_1260["Block 1260"]
	direction TB
	b1260_11["eff__934 push_u32"]
end
branch_1258 --> block_1260
subgraph branch_1258["Branch 1258"]
	br1258_7["cond__933 U64_lte"]

end
block_1262 --> branch_1258
subgraph block_1262["Block 1262"]
	direction TB
	b1262_7["cond__933 U64_lte"]
	b1262_0[/"Start"\\]
	b1262_0 --> b1262_7
end
subgraph block_1261["Block 1261"]
	direction TB
	b1261_9["eff__936 push_u32"]
end
branch_1258 --> block_1261

</pre>`;
window.traces["I64_LE_U"]["unLEM"] = ''
window.traces["I64_LE_U"]["unLEM"] += `<pre class='graph'>---
config:
  layout: elk
---
graph TD
	1[\\"Finish"/]
	0 -. Codeptr Trap Locals Globals Tables Memory Extra .-> 1
	12 -. Stack .-> 1
	12{{"Sϕ Stack "}}
	19 --> 12
	22 --> 12
	20 --> 12
	20{{"Sϕ Stack "}}
	17 --> 20
	11 --> 20
	9 --> 20
	9["eff__936 push_u32"]
	14 --> 9
	4 -. Stack .-> 9
	4["a pop_u64"]
	3 -. Stack .-> 4
	3["b pop_u64"]
	0 -. Stack .-> 3
	0[/"Start"\\]
	14["abs__941 lift_u32"]
	8 --> 14
	8["arg__937 0"]
	11["eff__934 push_u32"]
	13 --> 11
	4 -. Stack .-> 11
	13["abs__940 lift_u32"]
	10 --> 13
	10["arg__935 1"]
	17["mt__942 U64_maybeTrue"]
	7 --> 17
	7["cond__933 U64_lte"]
	4 --> 7
	3 --> 7
	22["eff_push__946 push_u32"]
	21 --> 22
	4 -. Stack .-> 22
	21["merge__945 merge_u"]
	13 --> 21
	14 --> 21
	19["mb__944 bool.&&"]
	17 --> 19
	18 --> 19
	18["mf__943 U64_maybeFalse"]
	7 --> 18
</pre>`;
window.traces["I64_LE_U"]["unlem_schedule"] = ''
window.traces["I64_LE_U"]["unlem_schedule"] += `<pre class=''>def b = pop_u64();
def a = pop_u64();
def cond__933 = U64_lte(a, b);
def mt__942 = U64_maybeTrue(cond__933);
def mf__943 = U64_maybeFalse(cond__933);
def mb__944 = bool.&&(mt__942, mf__943);
if (mb__944) {
	def arg__935 : u32 = 1;
	def abs__940 = lift_u32(arg__935);
	def arg__937 : u32 = 0;
	def abs__941 = lift_u32(arg__937);
	def merge__945 = merge_u(abs__940, abs__941);
	def eff_push__946 = push_u32(merge__945);
} else {
	if (mt__942) {
		def arg__935 : u32 = 1;
		def abs__940 = lift_u32(arg__935);
		def eff__934 = push_u32(abs__940);
	} else {
		def arg__937 : u32 = 0;
		def abs__941 = lift_u32(arg__937);
		def eff__936 = push_u32(abs__941);
	}
// phis: 
}
// phis: 
</pre>`;
window.traces["I64_LE_U"]["unlem_scheduler"] = ''
window.traces["I64_LE_U"]["unlem_scheduler"] += `<pre class='graph'>graph TD
subgraph block_1263["Block 1263"]
	direction TB
	b1263_1[\\"Finish"/]
	b1263_22["eff_push__946 push_u32"]
	b1263_21["merge__945 merge_u"]
	b1263_22 --> b1263_1
	b1263_21 --> b1263_22
end
phi_1265 --> block_1263
subgraph phi_1265["Phi 1265"]
	p1265_12{{"Sϕ Stack "}}
end
block_1266 --> phi_1265
block_1267 --> phi_1265
subgraph block_1266["Block 1266"]
	direction TB
	b1266_22["eff_push__946 push_u32"]
	b1266_21["merge__945 merge_u"]
	b1266_21 --> b1266_22
end
phi_1274 --> block_1266
subgraph phi_1274["Phi 1274"]
	p1274_20{{"Sϕ Stack "}}
end
block_1275 --> phi_1274
block_1276 --> phi_1274
subgraph block_1275["Block 1275"]
	direction TB
end
branch_1273 --> block_1275
subgraph branch_1273["Branch 1273"]
	br1273_17["mt__942 U64_maybeTrue"]

end
branch_1264 --> branch_1273
subgraph branch_1264["Branch 1264"]
	br1264_19["mb__944 bool.&&"]

end
block_1272 --> branch_1264
subgraph block_1272["Block 1272"]
	direction TB
	b1272_19["mb__944 bool.&&"]
	b1272_17["mt__942 U64_maybeTrue"]
	b1272_18["mf__943 U64_maybeFalse"]
	b1272_11["eff__934 push_u32"]
	b1272_9["eff__936 push_u32"]
	b1272_7["cond__933 U64_lte"]
	b1272_13["abs__940 lift_u32"]
	b1272_14["abs__941 lift_u32"]
	b1272_4["a pop_u64"]
	b1272_3["b pop_u64"]
	b1272_10["arg__935 1"]
	b1272_8["arg__937 0"]
	b1272_0[/"Start"\\]
	b1272_17 --> b1272_19
	b1272_18 --> b1272_17
	b1272_11 --> b1272_18
	b1272_9 --> b1272_11
	b1272_7 --> b1272_9
	b1272_13 --> b1272_7
	b1272_14 --> b1272_13
	b1272_4 --> b1272_14
	b1272_3 --> b1272_4
	b1272_10 --> b1272_3
	b1272_8 --> b1272_10
	b1272_0 --> b1272_8
end
subgraph block_1276["Block 1276"]
	direction TB
end
branch_1273 --> block_1276
subgraph block_1267["Block 1267"]
	direction TB
end
phi_1269 --> block_1267
subgraph phi_1269["Phi 1269"]
	p1269_20{{"Sϕ Stack "}}
end
block_1270 --> phi_1269
block_1271 --> phi_1269
subgraph block_1270["Block 1270"]
	direction TB
end
branch_1268 --> block_1270
subgraph branch_1268["Branch 1268"]
	br1268_17["mt__942 U64_maybeTrue"]

end
branch_1264 --> branch_1268
subgraph block_1271["Block 1271"]
	direction TB
end
branch_1268 --> block_1271

</pre>`;
window.traces["I64_LE_U"]["unlem_pretty"] = ''
window.traces["I64_LE_U"]["unlem_pretty"] += `<pre class=''>def b = pop_u64();
def a = pop_u64();
def mt = U64_maybeTrue(U64_lte(a, b));
def mf = U64_maybeFalse(U64_lte(a, b));
if (bool.&&(mt, mf)) {
	push_u32(merge_u(lift_u32(1), lift_u32(0)));
} else {
	if (mt) {
		push_u32(lift_u32(1));
	} else {
		push_u32(lift_u32(0));
	}
}
</pre>`;
window.traces["I64_LE_U"]["constUnLEM"] = ''
window.traces["I64_LE_U"]["constUnLEM"] += `<pre class='graph'>---
config:
  layout: elk
---
graph TD
	1[\\"Finish"/]
	0 -. Codeptr Trap Locals Globals Tables Memory Extra .-> 1
	12 -. Stack .-> 1
	12["eff_push__946 push_u32"]
	21 --> 12
	4 -. Stack .-> 12
	4["a pop_u64"]
	3 -. Stack .-> 4
	3["b pop_u64"]
	0 -. Stack .-> 3
	0[/"Start"\\]
	21["merge__945 merge_u"]
	13 --> 21
	14 --> 21
	14["abs__941 lift_u32"]
	8 --> 14
	8["arg__937 0"]
	13["abs__940 lift_u32"]
	10 --> 13
	10["arg__935 1"]
</pre>`;
window.traces["I64_LE_U"]["chooseMerge"] = ''
window.traces["I64_LE_U"]["chooseMerge"] += `<pre class='graph'>---
config:
  layout: elk
---
graph TD
	1[\\"Finish"/]
	0 -. Codeptr Trap Locals Globals Tables Memory Extra .-> 1
	12 -. Stack .-> 1
	12["eff_push__946 push_u32"]
	13 --> 12
	4 -. Stack .-> 12
	4["a pop_u64"]
	3 -. Stack .-> 4
	3["b pop_u64"]
	0 -. Stack .-> 3
	0[/"Start"\\]
	13["abs__940 lift_u32"]
	10 --> 13
	10["arg__935 1"]
</pre>`;
window.traces["I64_LE_U"]["scheduled"] = ''
window.traces["I64_LE_U"]["scheduled"] += `<pre class=''>def arg__935 : u32 = 1;
def abs__940 = lift_u32(arg__935);
def b = pop_u64();
def a = pop_u64();
def eff_push__946 = push_u32(abs__940);
</pre>`;
window.traces["I64_LE_U"]["pretty"] = ''
window.traces["I64_LE_U"]["pretty"] += `<pre class=''>def b = pop_u64();
def a = pop_u64();
push_u32(lift_u32(1));
</pre>`;
window.traces["I64_GE_S"] = {}
window.traces["I64_GE_S"]["parsed"] = ''
window.traces["I64_GE_S"]["parsed"] += `<pre class=''>def b = pop_u64();
def a = pop_u64();
def arg__953 = (b);
def arg__952 = (a);
def cond__947 = U64_ge_s(arg__952, arg__953);
if (cond__947) {
	def arg__949 : u32 = 1;
	def eff__948 = push_u32(arg__949);
} else {
	def arg__951 : u32 = 0;
	def eff__950 = push_u32(arg__951);
}
// phis: 
</pre>`;
window.traces["I64_GE_S"]["raw"] = ''
window.traces["I64_GE_S"]["raw"] += `<pre class='graph'>---
config:
  layout: elk
---
graph TD
	1[\\"Finish"/]
	0 -. Codeptr Trap Locals Globals Tables Memory Extra .-> 1
	12 -. Stack .-> 1
	12{{"Sϕ Stack "}}
	7 --> 12
	11 --> 12
	9 --> 12
	9["eff__950 push_u32"]
	8 --> 9
	4 -. Stack .-> 9
	4["a pop_u64"]
	3 -. Stack .-> 4
	3["b pop_u64"]
	0 -. Stack .-> 3
	0[/"Start"\\]
	8["arg__951 0"]
	11["eff__948 push_u32"]
	10 --> 11
	4 -. Stack .-> 11
	10["arg__949 1"]
	7["cond__947 U64_ge_s"]
	4 --> 7
	3 --> 7
</pre>`;
window.traces["I64_GE_S"]["overloadOps"] = ''
window.traces["I64_GE_S"]["overloadOps"] += `<pre class='graph'>---
config:
  layout: elk
---
graph TD
	1[\\"Finish"/]
	0 -. Codeptr Trap Locals Globals Tables Memory Extra .-> 1
	12 -. Stack .-> 1
	12{{"Sϕ Stack "}}
	7 --> 12
	11 --> 12
	9 --> 12
	9["eff__950 push_u32"]
	8 --> 9
	4 -. Stack .-> 9
	4["a pop_u64"]
	3 -. Stack .-> 4
	3["b pop_u64"]
	0 -. Stack .-> 3
	0[/"Start"\\]
	8["arg__951 0"]
	11["eff__948 push_u32"]
	10 --> 11
	4 -. Stack .-> 11
	10["arg__949 1"]
	7["cond__947 U64_ge_s"]
	4 --> 7
	3 --> 7
</pre>`;
window.traces["I64_GE_S"]["addAbstractions"] = ''
window.traces["I64_GE_S"]["addAbstractions"] += `<pre class='graph'>---
config:
  layout: elk
---
graph TD
	1[\\"Finish"/]
	0 -. Codeptr Trap Locals Globals Tables Memory Extra .-> 1
	12 -. Stack .-> 1
	12{{"Sϕ Stack "}}
	7 --> 12
	11 --> 12
	9 --> 12
	9["eff__950 push_u32"]
	14 --> 9
	4 -. Stack .-> 9
	4["a pop_u64"]
	3 -. Stack .-> 4
	3["b pop_u64"]
	0 -. Stack .-> 3
	0[/"Start"\\]
	14["abs__955 lift_u32"]
	8 --> 14
	8["arg__951 0"]
	11["eff__948 push_u32"]
	13 --> 11
	4 -. Stack .-> 11
	13["abs__954 lift_u32"]
	10 --> 13
	10["arg__949 1"]
	7["cond__947 U64_ge_s"]
	4 --> 7
	3 --> 7
</pre>`;
window.traces["I64_GE_S"]["schedulerMermaid"] = ''
window.traces["I64_GE_S"]["schedulerMermaid"] += `<pre class='graph'>graph TD
subgraph block_1277["Block 1277"]
	direction TB
	b1277_1[\\"Finish"/]
	b1277_11["eff__948 push_u32"]
	b1277_9["eff__950 push_u32"]
	b1277_4["a pop_u64"]
	b1277_3["b pop_u64"]
	b1277_13["abs__954 lift_u32"]
	b1277_14["abs__955 lift_u32"]
	b1277_10["arg__949 1"]
	b1277_8["arg__951 0"]
	b1277_11 --> b1277_1
	b1277_9 --> b1277_11
	b1277_4 --> b1277_9
	b1277_3 --> b1277_4
	b1277_13 --> b1277_3
	b1277_14 --> b1277_13
	b1277_10 --> b1277_14
	b1277_8 --> b1277_10
end
phi_1279 --> block_1277
subgraph phi_1279["Phi 1279"]
	p1279_12{{"Sϕ Stack "}}
end
block_1280 --> phi_1279
block_1281 --> phi_1279
subgraph block_1280["Block 1280"]
	direction TB
	b1280_11["eff__948 push_u32"]
end
branch_1278 --> block_1280
subgraph branch_1278["Branch 1278"]
	br1278_7["cond__947 U64_ge_s"]

end
block_1282 --> branch_1278
subgraph block_1282["Block 1282"]
	direction TB
	b1282_7["cond__947 U64_ge_s"]
	b1282_0[/"Start"\\]
	b1282_0 --> b1282_7
end
subgraph block_1281["Block 1281"]
	direction TB
	b1281_9["eff__950 push_u32"]
end
branch_1278 --> block_1281

</pre>`;
window.traces["I64_GE_S"]["unLEM"] = ''
window.traces["I64_GE_S"]["unLEM"] += `<pre class='graph'>---
config:
  layout: elk
---
graph TD
	1[\\"Finish"/]
	0 -. Codeptr Trap Locals Globals Tables Memory Extra .-> 1
	12 -. Stack .-> 1
	12{{"Sϕ Stack "}}
	19 --> 12
	22 --> 12
	20 --> 12
	20{{"Sϕ Stack "}}
	17 --> 20
	11 --> 20
	9 --> 20
	9["eff__950 push_u32"]
	14 --> 9
	4 -. Stack .-> 9
	4["a pop_u64"]
	3 -. Stack .-> 4
	3["b pop_u64"]
	0 -. Stack .-> 3
	0[/"Start"\\]
	14["abs__955 lift_u32"]
	8 --> 14
	8["arg__951 0"]
	11["eff__948 push_u32"]
	13 --> 11
	4 -. Stack .-> 11
	13["abs__954 lift_u32"]
	10 --> 13
	10["arg__949 1"]
	17["mt__956 U64_maybeTrue"]
	7 --> 17
	7["cond__947 U64_ge_s"]
	4 --> 7
	3 --> 7
	22["eff_push__960 push_u32"]
	21 --> 22
	4 -. Stack .-> 22
	21["merge__959 merge_u"]
	13 --> 21
	14 --> 21
	19["mb__958 bool.&&"]
	17 --> 19
	18 --> 19
	18["mf__957 U64_maybeFalse"]
	7 --> 18
</pre>`;
window.traces["I64_GE_S"]["unlem_schedule"] = ''
window.traces["I64_GE_S"]["unlem_schedule"] += `<pre class=''>def b = pop_u64();
def a = pop_u64();
def cond__947 = U64_ge_s(a, b);
def mt__956 = U64_maybeTrue(cond__947);
def mf__957 = U64_maybeFalse(cond__947);
def mb__958 = bool.&&(mt__956, mf__957);
if (mb__958) {
	def arg__949 : u32 = 1;
	def abs__954 = lift_u32(arg__949);
	def arg__951 : u32 = 0;
	def abs__955 = lift_u32(arg__951);
	def merge__959 = merge_u(abs__954, abs__955);
	def eff_push__960 = push_u32(merge__959);
} else {
	if (mt__956) {
		def arg__949 : u32 = 1;
		def abs__954 = lift_u32(arg__949);
		def eff__948 = push_u32(abs__954);
	} else {
		def arg__951 : u32 = 0;
		def abs__955 = lift_u32(arg__951);
		def eff__950 = push_u32(abs__955);
	}
// phis: 
}
// phis: 
</pre>`;
window.traces["I64_GE_S"]["unlem_scheduler"] = ''
window.traces["I64_GE_S"]["unlem_scheduler"] += `<pre class='graph'>graph TD
subgraph block_1283["Block 1283"]
	direction TB
	b1283_1[\\"Finish"/]
	b1283_22["eff_push__960 push_u32"]
	b1283_21["merge__959 merge_u"]
	b1283_22 --> b1283_1
	b1283_21 --> b1283_22
end
phi_1285 --> block_1283
subgraph phi_1285["Phi 1285"]
	p1285_12{{"Sϕ Stack "}}
end
block_1286 --> phi_1285
block_1287 --> phi_1285
subgraph block_1286["Block 1286"]
	direction TB
	b1286_22["eff_push__960 push_u32"]
	b1286_21["merge__959 merge_u"]
	b1286_21 --> b1286_22
end
phi_1294 --> block_1286
subgraph phi_1294["Phi 1294"]
	p1294_20{{"Sϕ Stack "}}
end
block_1295 --> phi_1294
block_1296 --> phi_1294
subgraph block_1295["Block 1295"]
	direction TB
end
branch_1293 --> block_1295
subgraph branch_1293["Branch 1293"]
	br1293_17["mt__956 U64_maybeTrue"]

end
branch_1284 --> branch_1293
subgraph branch_1284["Branch 1284"]
	br1284_19["mb__958 bool.&&"]

end
block_1292 --> branch_1284
subgraph block_1292["Block 1292"]
	direction TB
	b1292_19["mb__958 bool.&&"]
	b1292_17["mt__956 U64_maybeTrue"]
	b1292_18["mf__957 U64_maybeFalse"]
	b1292_11["eff__948 push_u32"]
	b1292_9["eff__950 push_u32"]
	b1292_7["cond__947 U64_ge_s"]
	b1292_13["abs__954 lift_u32"]
	b1292_14["abs__955 lift_u32"]
	b1292_4["a pop_u64"]
	b1292_3["b pop_u64"]
	b1292_10["arg__949 1"]
	b1292_8["arg__951 0"]
	b1292_0[/"Start"\\]
	b1292_17 --> b1292_19
	b1292_18 --> b1292_17
	b1292_11 --> b1292_18
	b1292_9 --> b1292_11
	b1292_7 --> b1292_9
	b1292_13 --> b1292_7
	b1292_14 --> b1292_13
	b1292_4 --> b1292_14
	b1292_3 --> b1292_4
	b1292_10 --> b1292_3
	b1292_8 --> b1292_10
	b1292_0 --> b1292_8
end
subgraph block_1296["Block 1296"]
	direction TB
end
branch_1293 --> block_1296
subgraph block_1287["Block 1287"]
	direction TB
end
phi_1289 --> block_1287
subgraph phi_1289["Phi 1289"]
	p1289_20{{"Sϕ Stack "}}
end
block_1290 --> phi_1289
block_1291 --> phi_1289
subgraph block_1290["Block 1290"]
	direction TB
end
branch_1288 --> block_1290
subgraph branch_1288["Branch 1288"]
	br1288_17["mt__956 U64_maybeTrue"]

end
branch_1284 --> branch_1288
subgraph block_1291["Block 1291"]
	direction TB
end
branch_1288 --> block_1291

</pre>`;
window.traces["I64_GE_S"]["unlem_pretty"] = ''
window.traces["I64_GE_S"]["unlem_pretty"] += `<pre class=''>def b = pop_u64();
def a = pop_u64();
def mt = U64_maybeTrue(U64_ge_s(a, b));
def mf = U64_maybeFalse(U64_ge_s(a, b));
if (bool.&&(mt, mf)) {
	push_u32(merge_u(lift_u32(1), lift_u32(0)));
} else {
	if (mt) {
		push_u32(lift_u32(1));
	} else {
		push_u32(lift_u32(0));
	}
}
</pre>`;
window.traces["I64_GE_S"]["constUnLEM"] = ''
window.traces["I64_GE_S"]["constUnLEM"] += `<pre class='graph'>---
config:
  layout: elk
---
graph TD
	1[\\"Finish"/]
	0 -. Codeptr Trap Locals Globals Tables Memory Extra .-> 1
	12 -. Stack .-> 1
	12["eff_push__960 push_u32"]
	21 --> 12
	4 -. Stack .-> 12
	4["a pop_u64"]
	3 -. Stack .-> 4
	3["b pop_u64"]
	0 -. Stack .-> 3
	0[/"Start"\\]
	21["merge__959 merge_u"]
	13 --> 21
	14 --> 21
	14["abs__955 lift_u32"]
	8 --> 14
	8["arg__951 0"]
	13["abs__954 lift_u32"]
	10 --> 13
	10["arg__949 1"]
</pre>`;
window.traces["I64_GE_S"]["chooseMerge"] = ''
window.traces["I64_GE_S"]["chooseMerge"] += `<pre class='graph'>---
config:
  layout: elk
---
graph TD
	1[\\"Finish"/]
	0 -. Codeptr Trap Locals Globals Tables Memory Extra .-> 1
	12 -. Stack .-> 1
	12["eff_push__960 push_u32"]
	13 --> 12
	4 -. Stack .-> 12
	4["a pop_u64"]
	3 -. Stack .-> 4
	3["b pop_u64"]
	0 -. Stack .-> 3
	0[/"Start"\\]
	13["abs__954 lift_u32"]
	10 --> 13
	10["arg__949 1"]
</pre>`;
window.traces["I64_GE_S"]["scheduled"] = ''
window.traces["I64_GE_S"]["scheduled"] += `<pre class=''>def arg__949 : u32 = 1;
def abs__954 = lift_u32(arg__949);
def b = pop_u64();
def a = pop_u64();
def eff_push__960 = push_u32(abs__954);
</pre>`;
window.traces["I64_GE_S"]["pretty"] = ''
window.traces["I64_GE_S"]["pretty"] += `<pre class=''>def b = pop_u64();
def a = pop_u64();
push_u32(lift_u32(1));
</pre>`;
window.traces["I64_GE_U"] = {}
window.traces["I64_GE_U"]["parsed"] = ''
window.traces["I64_GE_U"]["parsed"] += `<pre class=''>def b = pop_u64();
def a = pop_u64();
def arg__967 = (b);
def arg__966 = (a);
def cond__961 = u64.>=(arg__966, arg__967);
if (cond__961) {
	def arg__963 : u32 = 1;
	def eff__962 = push_u32(arg__963);
} else {
	def arg__965 : u32 = 0;
	def eff__964 = push_u32(arg__965);
}
// phis: 
</pre>`;
window.traces["I64_GE_U"]["raw"] = ''
window.traces["I64_GE_U"]["raw"] += `<pre class='graph'>---
config:
  layout: elk
---
graph TD
	1[\\"Finish"/]
	0 -. Codeptr Trap Locals Globals Tables Memory Extra .-> 1
	12 -. Stack .-> 1
	12{{"Sϕ Stack "}}
	7 --> 12
	11 --> 12
	9 --> 12
	9["eff__964 push_u32"]
	8 --> 9
	4 -. Stack .-> 9
	4["a pop_u64"]
	3 -. Stack .-> 4
	3["b pop_u64"]
	0 -. Stack .-> 3
	0[/"Start"\\]
	8["arg__965 0"]
	11["eff__962 push_u32"]
	10 --> 11
	4 -. Stack .-> 11
	10["arg__963 1"]
	7["cond__961 u64.>="]
	4 --> 7
	3 --> 7
</pre>`;
window.traces["I64_GE_U"]["overloadOps"] = ''
window.traces["I64_GE_U"]["overloadOps"] += `<pre class='graph'>---
config:
  layout: elk
---
graph TD
	1[\\"Finish"/]
	0 -. Codeptr Trap Locals Globals Tables Memory Extra .-> 1
	12 -. Stack .-> 1
	12{{"Sϕ Stack "}}
	7 --> 12
	11 --> 12
	9 --> 12
	9["eff__964 push_u32"]
	8 --> 9
	4 -. Stack .-> 9
	4["a pop_u64"]
	3 -. Stack .-> 4
	3["b pop_u64"]
	0 -. Stack .-> 3
	0[/"Start"\\]
	8["arg__965 0"]
	11["eff__962 push_u32"]
	10 --> 11
	4 -. Stack .-> 11
	10["arg__963 1"]
	7["cond__961 U64_gte"]
	4 --> 7
	3 --> 7
</pre>`;
window.traces["I64_GE_U"]["addAbstractions"] = ''
window.traces["I64_GE_U"]["addAbstractions"] += `<pre class='graph'>---
config:
  layout: elk
---
graph TD
	1[\\"Finish"/]
	0 -. Codeptr Trap Locals Globals Tables Memory Extra .-> 1
	12 -. Stack .-> 1
	12{{"Sϕ Stack "}}
	7 --> 12
	11 --> 12
	9 --> 12
	9["eff__964 push_u32"]
	14 --> 9
	4 -. Stack .-> 9
	4["a pop_u64"]
	3 -. Stack .-> 4
	3["b pop_u64"]
	0 -. Stack .-> 3
	0[/"Start"\\]
	14["abs__969 lift_u32"]
	8 --> 14
	8["arg__965 0"]
	11["eff__962 push_u32"]
	13 --> 11
	4 -. Stack .-> 11
	13["abs__968 lift_u32"]
	10 --> 13
	10["arg__963 1"]
	7["cond__961 U64_gte"]
	4 --> 7
	3 --> 7
</pre>`;
window.traces["I64_GE_U"]["schedulerMermaid"] = ''
window.traces["I64_GE_U"]["schedulerMermaid"] += `<pre class='graph'>graph TD
subgraph block_1297["Block 1297"]
	direction TB
	b1297_1[\\"Finish"/]
	b1297_11["eff__962 push_u32"]
	b1297_9["eff__964 push_u32"]
	b1297_4["a pop_u64"]
	b1297_3["b pop_u64"]
	b1297_13["abs__968 lift_u32"]
	b1297_14["abs__969 lift_u32"]
	b1297_10["arg__963 1"]
	b1297_8["arg__965 0"]
	b1297_11 --> b1297_1
	b1297_9 --> b1297_11
	b1297_4 --> b1297_9
	b1297_3 --> b1297_4
	b1297_13 --> b1297_3
	b1297_14 --> b1297_13
	b1297_10 --> b1297_14
	b1297_8 --> b1297_10
end
phi_1299 --> block_1297
subgraph phi_1299["Phi 1299"]
	p1299_12{{"Sϕ Stack "}}
end
block_1300 --> phi_1299
block_1301 --> phi_1299
subgraph block_1300["Block 1300"]
	direction TB
	b1300_11["eff__962 push_u32"]
end
branch_1298 --> block_1300
subgraph branch_1298["Branch 1298"]
	br1298_7["cond__961 U64_gte"]

end
block_1302 --> branch_1298
subgraph block_1302["Block 1302"]
	direction TB
	b1302_7["cond__961 U64_gte"]
	b1302_0[/"Start"\\]
	b1302_0 --> b1302_7
end
subgraph block_1301["Block 1301"]
	direction TB
	b1301_9["eff__964 push_u32"]
end
branch_1298 --> block_1301

</pre>`;
window.traces["I64_GE_U"]["unLEM"] = ''
window.traces["I64_GE_U"]["unLEM"] += `<pre class='graph'>---
config:
  layout: elk
---
graph TD
	1[\\"Finish"/]
	0 -. Codeptr Trap Locals Globals Tables Memory Extra .-> 1
	12 -. Stack .-> 1
	12{{"Sϕ Stack "}}
	19 --> 12
	22 --> 12
	20 --> 12
	20{{"Sϕ Stack "}}
	17 --> 20
	11 --> 20
	9 --> 20
	9["eff__964 push_u32"]
	14 --> 9
	4 -. Stack .-> 9
	4["a pop_u64"]
	3 -. Stack .-> 4
	3["b pop_u64"]
	0 -. Stack .-> 3
	0[/"Start"\\]
	14["abs__969 lift_u32"]
	8 --> 14
	8["arg__965 0"]
	11["eff__962 push_u32"]
	13 --> 11
	4 -. Stack .-> 11
	13["abs__968 lift_u32"]
	10 --> 13
	10["arg__963 1"]
	17["mt__970 bot_maybeTrue"]
	7 --> 17
	7["cond__961 U64_gte"]
	4 --> 7
	3 --> 7
	22["eff_push__974 push_u32"]
	21 --> 22
	4 -. Stack .-> 22
	21["merge__973 merge_u"]
	13 --> 21
	14 --> 21
	19["mb__972 bool.&&"]
	17 --> 19
	18 --> 19
	18["mf__971 bot_maybeFalse"]
	7 --> 18
</pre>`;
window.traces["I64_GE_U"]["unlem_schedule"] = ''
window.traces["I64_GE_U"]["unlem_schedule"] += `<pre class=''>def b = pop_u64();
def a = pop_u64();
def cond__961 = U64_gte(a, b);
def mt__970 = bot_maybeTrue(cond__961);
def mf__971 = bot_maybeFalse(cond__961);
def mb__972 = bool.&&(mt__970, mf__971);
if (mb__972) {
	def arg__963 : u32 = 1;
	def abs__968 = lift_u32(arg__963);
	def arg__965 : u32 = 0;
	def abs__969 = lift_u32(arg__965);
	def merge__973 = merge_u(abs__968, abs__969);
	def eff_push__974 = push_u32(merge__973);
} else {
	if (mt__970) {
		def arg__963 : u32 = 1;
		def abs__968 = lift_u32(arg__963);
		def eff__962 = push_u32(abs__968);
	} else {
		def arg__965 : u32 = 0;
		def abs__969 = lift_u32(arg__965);
		def eff__964 = push_u32(abs__969);
	}
// phis: 
}
// phis: 
</pre>`;
window.traces["I64_GE_U"]["unlem_scheduler"] = ''
window.traces["I64_GE_U"]["unlem_scheduler"] += `<pre class='graph'>graph TD
subgraph block_1303["Block 1303"]
	direction TB
	b1303_1[\\"Finish"/]
	b1303_22["eff_push__974 push_u32"]
	b1303_21["merge__973 merge_u"]
	b1303_22 --> b1303_1
	b1303_21 --> b1303_22
end
phi_1305 --> block_1303
subgraph phi_1305["Phi 1305"]
	p1305_12{{"Sϕ Stack "}}
end
block_1306 --> phi_1305
block_1307 --> phi_1305
subgraph block_1306["Block 1306"]
	direction TB
	b1306_22["eff_push__974 push_u32"]
	b1306_21["merge__973 merge_u"]
	b1306_21 --> b1306_22
end
phi_1314 --> block_1306
subgraph phi_1314["Phi 1314"]
	p1314_20{{"Sϕ Stack "}}
end
block_1315 --> phi_1314
block_1316 --> phi_1314
subgraph block_1315["Block 1315"]
	direction TB
end
branch_1313 --> block_1315
subgraph branch_1313["Branch 1313"]
	br1313_17["mt__970 bot_maybeTrue"]

end
branch_1304 --> branch_1313
subgraph branch_1304["Branch 1304"]
	br1304_19["mb__972 bool.&&"]

end
block_1312 --> branch_1304
subgraph block_1312["Block 1312"]
	direction TB
	b1312_19["mb__972 bool.&&"]
	b1312_17["mt__970 bot_maybeTrue"]
	b1312_18["mf__971 bot_maybeFalse"]
	b1312_11["eff__962 push_u32"]
	b1312_9["eff__964 push_u32"]
	b1312_7["cond__961 U64_gte"]
	b1312_13["abs__968 lift_u32"]
	b1312_14["abs__969 lift_u32"]
	b1312_4["a pop_u64"]
	b1312_3["b pop_u64"]
	b1312_10["arg__963 1"]
	b1312_8["arg__965 0"]
	b1312_0[/"Start"\\]
	b1312_17 --> b1312_19
	b1312_18 --> b1312_17
	b1312_11 --> b1312_18
	b1312_9 --> b1312_11
	b1312_7 --> b1312_9
	b1312_13 --> b1312_7
	b1312_14 --> b1312_13
	b1312_4 --> b1312_14
	b1312_3 --> b1312_4
	b1312_10 --> b1312_3
	b1312_8 --> b1312_10
	b1312_0 --> b1312_8
end
subgraph block_1316["Block 1316"]
	direction TB
end
branch_1313 --> block_1316
subgraph block_1307["Block 1307"]
	direction TB
end
phi_1309 --> block_1307
subgraph phi_1309["Phi 1309"]
	p1309_20{{"Sϕ Stack "}}
end
block_1310 --> phi_1309
block_1311 --> phi_1309
subgraph block_1310["Block 1310"]
	direction TB
end
branch_1308 --> block_1310
subgraph branch_1308["Branch 1308"]
	br1308_17["mt__970 bot_maybeTrue"]

end
branch_1304 --> branch_1308
subgraph block_1311["Block 1311"]
	direction TB
end
branch_1308 --> block_1311

</pre>`;
window.traces["I64_GE_U"]["unlem_pretty"] = ''
window.traces["I64_GE_U"]["unlem_pretty"] += `<pre class=''>def b = pop_u64();
def a = pop_u64();
def mt = bot_maybeTrue(U64_gte(a, b));
def mf = bot_maybeFalse(U64_gte(a, b));
if (bool.&&(mt, mf)) {
	push_u32(merge_u(lift_u32(1), lift_u32(0)));
} else {
	if (mt) {
		push_u32(lift_u32(1));
	} else {
		push_u32(lift_u32(0));
	}
}
</pre>`;
window.traces["I64_GE_U"]["constUnLEM"] = ''
window.traces["I64_GE_U"]["constUnLEM"] += `<pre class='graph'>---
config:
  layout: elk
---
graph TD
	1[\\"Finish"/]
	0 -. Codeptr Trap Locals Globals Tables Memory Extra .-> 1
	12 -. Stack .-> 1
	12["eff_push__974 push_u32"]
	21 --> 12
	4 -. Stack .-> 12
	4["a pop_u64"]
	3 -. Stack .-> 4
	3["b pop_u64"]
	0 -. Stack .-> 3
	0[/"Start"\\]
	21["merge__973 merge_u"]
	13 --> 21
	14 --> 21
	14["abs__969 lift_u32"]
	8 --> 14
	8["arg__965 0"]
	13["abs__968 lift_u32"]
	10 --> 13
	10["arg__963 1"]
</pre>`;
window.traces["I64_GE_U"]["chooseMerge"] = ''
window.traces["I64_GE_U"]["chooseMerge"] += `<pre class='graph'>---
config:
  layout: elk
---
graph TD
	1[\\"Finish"/]
	0 -. Codeptr Trap Locals Globals Tables Memory Extra .-> 1
	12 -. Stack .-> 1
	12["eff_push__974 push_u32"]
	13 --> 12
	4 -. Stack .-> 12
	4["a pop_u64"]
	3 -. Stack .-> 4
	3["b pop_u64"]
	0 -. Stack .-> 3
	0[/"Start"\\]
	13["abs__968 lift_u32"]
	10 --> 13
	10["arg__963 1"]
</pre>`;
window.traces["I64_GE_U"]["scheduled"] = ''
window.traces["I64_GE_U"]["scheduled"] += `<pre class=''>def arg__963 : u32 = 1;
def abs__968 = lift_u32(arg__963);
def b = pop_u64();
def a = pop_u64();
def eff_push__974 = push_u32(abs__968);
</pre>`;
window.traces["I64_GE_U"]["pretty"] = ''
window.traces["I64_GE_U"]["pretty"] += `<pre class=''>def b = pop_u64();
def a = pop_u64();
push_u32(lift_u32(1));
</pre>`;
window.traces["F32_EQ"] = {}
window.traces["F32_EQ"]["parsed"] = ''
window.traces["F32_EQ"]["parsed"] += `<pre class=''>def b = pop_f32();
def a = pop_f32();
def arg__981 = (b);
def arg__980 = (a);
def cond__975 = float.==(arg__980, arg__981);
if (cond__975) {
	def arg__977 : u32 = 1;
	def eff__976 = push_u32(arg__977);
} else {
	def arg__979 : u32 = 0;
	def eff__978 = push_u32(arg__979);
}
// phis: 
</pre>`;
window.traces["F32_EQ"]["raw"] = ''
window.traces["F32_EQ"]["raw"] += `<pre class='graph'>---
config:
  layout: elk
---
graph TD
	1[\\"Finish"/]
	0 -. Codeptr Trap Locals Globals Tables Memory Extra .-> 1
	12 -. Stack .-> 1
	12{{"Sϕ Stack "}}
	7 --> 12
	11 --> 12
	9 --> 12
	9["eff__978 push_u32"]
	8 --> 9
	4 -. Stack .-> 9
	4["a pop_f32"]
	3 -. Stack .-> 4
	3["b pop_f32"]
	0 -. Stack .-> 3
	0[/"Start"\\]
	8["arg__979 0"]
	11["eff__976 push_u32"]
	10 --> 11
	4 -. Stack .-> 11
	10["arg__977 1"]
	7["cond__975 float.=="]
	4 --> 7
	3 --> 7
</pre>`;
window.traces["F32_EQ"]["overloadOps"] = ''
window.traces["F32_EQ"]["overloadOps"] += `<pre class='graph'>---
config:
  layout: elk
---
graph TD
	1[\\"Finish"/]
	0 -. Codeptr Trap Locals Globals Tables Memory Extra .-> 1
	12 -. Stack .-> 1
	12{{"Sϕ Stack "}}
	7 --> 12
	11 --> 12
	9 --> 12
	9["eff__978 push_u32"]
	8 --> 9
	4 -. Stack .-> 9
	4["a pop_f32"]
	3 -. Stack .-> 4
	3["b pop_f32"]
	0 -. Stack .-> 3
	0[/"Start"\\]
	8["arg__979 0"]
	11["eff__976 push_u32"]
	10 --> 11
	4 -. Stack .-> 11
	10["arg__977 1"]
	7["cond__975 F32_equals"]
	4 --> 7
	3 --> 7
</pre>`;
window.traces["F32_EQ"]["addAbstractions"] = ''
window.traces["F32_EQ"]["addAbstractions"] += `<pre class='graph'>---
config:
  layout: elk
---
graph TD
	1[\\"Finish"/]
	0 -. Codeptr Trap Locals Globals Tables Memory Extra .-> 1
	12 -. Stack .-> 1
	12{{"Sϕ Stack "}}
	7 --> 12
	11 --> 12
	9 --> 12
	9["eff__978 push_u32"]
	14 --> 9
	4 -. Stack .-> 9
	4["a pop_f32"]
	3 -. Stack .-> 4
	3["b pop_f32"]
	0 -. Stack .-> 3
	0[/"Start"\\]
	14["abs__983 lift_u32"]
	8 --> 14
	8["arg__979 0"]
	11["eff__976 push_u32"]
	13 --> 11
	4 -. Stack .-> 11
	13["abs__982 lift_u32"]
	10 --> 13
	10["arg__977 1"]
	7["cond__975 F32_equals"]
	4 --> 7
	3 --> 7
</pre>`;
window.traces["F32_EQ"]["schedulerMermaid"] = ''
window.traces["F32_EQ"]["schedulerMermaid"] += `<pre class='graph'>graph TD
subgraph block_1317["Block 1317"]
	direction TB
	b1317_1[\\"Finish"/]
	b1317_11["eff__976 push_u32"]
	b1317_9["eff__978 push_u32"]
	b1317_4["a pop_f32"]
	b1317_3["b pop_f32"]
	b1317_13["abs__982 lift_u32"]
	b1317_14["abs__983 lift_u32"]
	b1317_10["arg__977 1"]
	b1317_8["arg__979 0"]
	b1317_11 --> b1317_1
	b1317_9 --> b1317_11
	b1317_4 --> b1317_9
	b1317_3 --> b1317_4
	b1317_13 --> b1317_3
	b1317_14 --> b1317_13
	b1317_10 --> b1317_14
	b1317_8 --> b1317_10
end
phi_1319 --> block_1317
subgraph phi_1319["Phi 1319"]
	p1319_12{{"Sϕ Stack "}}
end
block_1320 --> phi_1319
block_1321 --> phi_1319
subgraph block_1320["Block 1320"]
	direction TB
	b1320_11["eff__976 push_u32"]
end
branch_1318 --> block_1320
subgraph branch_1318["Branch 1318"]
	br1318_7["cond__975 F32_equals"]

end
block_1322 --> branch_1318
subgraph block_1322["Block 1322"]
	direction TB
	b1322_7["cond__975 F32_equals"]
	b1322_0[/"Start"\\]
	b1322_0 --> b1322_7
end
subgraph block_1321["Block 1321"]
	direction TB
	b1321_9["eff__978 push_u32"]
end
branch_1318 --> block_1321

</pre>`;
window.traces["F32_EQ"]["unLEM"] = ''
window.traces["F32_EQ"]["unLEM"] += `<pre class='graph'>---
config:
  layout: elk
---
graph TD
	1[\\"Finish"/]
	0 -. Codeptr Trap Locals Globals Tables Memory Extra .-> 1
	12 -. Stack .-> 1
	12{{"Sϕ Stack "}}
	19 --> 12
	22 --> 12
	20 --> 12
	20{{"Sϕ Stack "}}
	17 --> 20
	11 --> 20
	9 --> 20
	9["eff__978 push_u32"]
	14 --> 9
	4 -. Stack .-> 9
	4["a pop_f32"]
	3 -. Stack .-> 4
	3["b pop_f32"]
	0 -. Stack .-> 3
	0[/"Start"\\]
	14["abs__983 lift_u32"]
	8 --> 14
	8["arg__979 0"]
	11["eff__976 push_u32"]
	13 --> 11
	4 -. Stack .-> 11
	13["abs__982 lift_u32"]
	10 --> 13
	10["arg__977 1"]
	17["mt__984 U32_maybeTrue"]
	7 --> 17
	7["cond__975 F32_equals"]
	4 --> 7
	3 --> 7
	22["eff_push__988 push_u32"]
	21 --> 22
	4 -. Stack .-> 22
	21["merge__987 merge_u"]
	13 --> 21
	14 --> 21
	19["mb__986 bool.&&"]
	17 --> 19
	18 --> 19
	18["mf__985 U32_maybeFalse"]
	7 --> 18
</pre>`;
window.traces["F32_EQ"]["unlem_schedule"] = ''
window.traces["F32_EQ"]["unlem_schedule"] += `<pre class=''>def b = pop_f32();
def a = pop_f32();
def cond__975 = F32_equals(a, b);
def mt__984 = U32_maybeTrue(cond__975);
def mf__985 = U32_maybeFalse(cond__975);
def mb__986 = bool.&&(mt__984, mf__985);
if (mb__986) {
	def arg__977 : u32 = 1;
	def abs__982 = lift_u32(arg__977);
	def arg__979 : u32 = 0;
	def abs__983 = lift_u32(arg__979);
	def merge__987 = merge_u(abs__982, abs__983);
	def eff_push__988 = push_u32(merge__987);
} else {
	if (mt__984) {
		def arg__977 : u32 = 1;
		def abs__982 = lift_u32(arg__977);
		def eff__976 = push_u32(abs__982);
	} else {
		def arg__979 : u32 = 0;
		def abs__983 = lift_u32(arg__979);
		def eff__978 = push_u32(abs__983);
	}
// phis: 
}
// phis: 
</pre>`;
window.traces["F32_EQ"]["unlem_scheduler"] = ''
window.traces["F32_EQ"]["unlem_scheduler"] += `<pre class='graph'>graph TD
subgraph block_1323["Block 1323"]
	direction TB
	b1323_1[\\"Finish"/]
	b1323_22["eff_push__988 push_u32"]
	b1323_21["merge__987 merge_u"]
	b1323_22 --> b1323_1
	b1323_21 --> b1323_22
end
phi_1325 --> block_1323
subgraph phi_1325["Phi 1325"]
	p1325_12{{"Sϕ Stack "}}
end
block_1326 --> phi_1325
block_1327 --> phi_1325
subgraph block_1326["Block 1326"]
	direction TB
	b1326_22["eff_push__988 push_u32"]
	b1326_21["merge__987 merge_u"]
	b1326_21 --> b1326_22
end
phi_1334 --> block_1326
subgraph phi_1334["Phi 1334"]
	p1334_20{{"Sϕ Stack "}}
end
block_1335 --> phi_1334
block_1336 --> phi_1334
subgraph block_1335["Block 1335"]
	direction TB
end
branch_1333 --> block_1335
subgraph branch_1333["Branch 1333"]
	br1333_17["mt__984 U32_maybeTrue"]

end
branch_1324 --> branch_1333
subgraph branch_1324["Branch 1324"]
	br1324_19["mb__986 bool.&&"]

end
block_1332 --> branch_1324
subgraph block_1332["Block 1332"]
	direction TB
	b1332_19["mb__986 bool.&&"]
	b1332_17["mt__984 U32_maybeTrue"]
	b1332_18["mf__985 U32_maybeFalse"]
	b1332_11["eff__976 push_u32"]
	b1332_9["eff__978 push_u32"]
	b1332_7["cond__975 F32_equals"]
	b1332_13["abs__982 lift_u32"]
	b1332_14["abs__983 lift_u32"]
	b1332_4["a pop_f32"]
	b1332_3["b pop_f32"]
	b1332_10["arg__977 1"]
	b1332_8["arg__979 0"]
	b1332_0[/"Start"\\]
	b1332_17 --> b1332_19
	b1332_18 --> b1332_17
	b1332_11 --> b1332_18
	b1332_9 --> b1332_11
	b1332_7 --> b1332_9
	b1332_13 --> b1332_7
	b1332_14 --> b1332_13
	b1332_4 --> b1332_14
	b1332_3 --> b1332_4
	b1332_10 --> b1332_3
	b1332_8 --> b1332_10
	b1332_0 --> b1332_8
end
subgraph block_1336["Block 1336"]
	direction TB
end
branch_1333 --> block_1336
subgraph block_1327["Block 1327"]
	direction TB
end
phi_1329 --> block_1327
subgraph phi_1329["Phi 1329"]
	p1329_20{{"Sϕ Stack "}}
end
block_1330 --> phi_1329
block_1331 --> phi_1329
subgraph block_1330["Block 1330"]
	direction TB
end
branch_1328 --> block_1330
subgraph branch_1328["Branch 1328"]
	br1328_17["mt__984 U32_maybeTrue"]

end
branch_1324 --> branch_1328
subgraph block_1331["Block 1331"]
	direction TB
end
branch_1328 --> block_1331

</pre>`;
window.traces["F32_EQ"]["unlem_pretty"] = ''
window.traces["F32_EQ"]["unlem_pretty"] += `<pre class=''>def b = pop_f32();
def a = pop_f32();
def mt = U32_maybeTrue(F32_equals(a, b));
def mf = U32_maybeFalse(F32_equals(a, b));
if (bool.&&(mt, mf)) {
	push_u32(merge_u(lift_u32(1), lift_u32(0)));
} else {
	if (mt) {
		push_u32(lift_u32(1));
	} else {
		push_u32(lift_u32(0));
	}
}
</pre>`;
window.traces["F32_EQ"]["constUnLEM"] = ''
window.traces["F32_EQ"]["constUnLEM"] += `<pre class='graph'>---
config:
  layout: elk
---
graph TD
	1[\\"Finish"/]
	0 -. Codeptr Trap Locals Globals Tables Memory Extra .-> 1
	12 -. Stack .-> 1
	12["eff_push__988 push_u32"]
	21 --> 12
	4 -. Stack .-> 12
	4["a pop_f32"]
	3 -. Stack .-> 4
	3["b pop_f32"]
	0 -. Stack .-> 3
	0[/"Start"\\]
	21["merge__987 merge_u"]
	13 --> 21
	14 --> 21
	14["abs__983 lift_u32"]
	8 --> 14
	8["arg__979 0"]
	13["abs__982 lift_u32"]
	10 --> 13
	10["arg__977 1"]
</pre>`;
window.traces["F32_EQ"]["chooseMerge"] = ''
window.traces["F32_EQ"]["chooseMerge"] += `<pre class='graph'>---
config:
  layout: elk
---
graph TD
	1[\\"Finish"/]
	0 -. Codeptr Trap Locals Globals Tables Memory Extra .-> 1
	12 -. Stack .-> 1
	12["eff_push__988 push_u32"]
	13 --> 12
	4 -. Stack .-> 12
	4["a pop_f32"]
	3 -. Stack .-> 4
	3["b pop_f32"]
	0 -. Stack .-> 3
	0[/"Start"\\]
	13["abs__982 lift_u32"]
	10 --> 13
	10["arg__977 1"]
</pre>`;
window.traces["F32_EQ"]["scheduled"] = ''
window.traces["F32_EQ"]["scheduled"] += `<pre class=''>def arg__977 : u32 = 1;
def abs__982 = lift_u32(arg__977);
def b = pop_f32();
def a = pop_f32();
def eff_push__988 = push_u32(abs__982);
</pre>`;
window.traces["F32_EQ"]["pretty"] = ''
window.traces["F32_EQ"]["pretty"] += `<pre class=''>def b = pop_f32();
def a = pop_f32();
push_u32(lift_u32(1));
</pre>`;
window.traces["F32_NE"] = {}
window.traces["F32_NE"]["parsed"] = ''
window.traces["F32_NE"]["parsed"] += `<pre class=''>def b = pop_f32();
def a = pop_f32();
def arg__995 = (b);
def arg__994 = (a);
def cond__989 = float.!=(arg__994, arg__995);
if (cond__989) {
	def arg__991 : u32 = 1;
	def eff__990 = push_u32(arg__991);
} else {
	def arg__993 : u32 = 0;
	def eff__992 = push_u32(arg__993);
}
// phis: 
</pre>`;
window.traces["F32_NE"]["raw"] = ''
window.traces["F32_NE"]["raw"] += `<pre class='graph'>---
config:
  layout: elk
---
graph TD
	1[\\"Finish"/]
	0 -. Codeptr Trap Locals Globals Tables Memory Extra .-> 1
	12 -. Stack .-> 1
	12{{"Sϕ Stack "}}
	7 --> 12
	11 --> 12
	9 --> 12
	9["eff__992 push_u32"]
	8 --> 9
	4 -. Stack .-> 9
	4["a pop_f32"]
	3 -. Stack .-> 4
	3["b pop_f32"]
	0 -. Stack .-> 3
	0[/"Start"\\]
	8["arg__993 0"]
	11["eff__990 push_u32"]
	10 --> 11
	4 -. Stack .-> 11
	10["arg__991 1"]
	7["cond__989 float.!="]
	4 --> 7
	3 --> 7
</pre>`;
window.traces["F32_NE"]["overloadOps"] = ''
window.traces["F32_NE"]["overloadOps"] += `<pre class='graph'>---
config:
  layout: elk
---
graph TD
	1[\\"Finish"/]
	0 -. Codeptr Trap Locals Globals Tables Memory Extra .-> 1
	12 -. Stack .-> 1
	12{{"Sϕ Stack "}}
	7 --> 12
	11 --> 12
	9 --> 12
	9["eff__992 push_u32"]
	8 --> 9
	4 -. Stack .-> 9
	4["a pop_f32"]
	3 -. Stack .-> 4
	3["b pop_f32"]
	0 -. Stack .-> 3
	0[/"Start"\\]
	8["arg__993 0"]
	11["eff__990 push_u32"]
	10 --> 11
	4 -. Stack .-> 11
	10["arg__991 1"]
	7["cond__989 F32_not_equals"]
	4 --> 7
	3 --> 7
</pre>`;
window.traces["F32_NE"]["addAbstractions"] = ''
window.traces["F32_NE"]["addAbstractions"] += `<pre class='graph'>---
config:
  layout: elk
---
graph TD
	1[\\"Finish"/]
	0 -. Codeptr Trap Locals Globals Tables Memory Extra .-> 1
	12 -. Stack .-> 1
	12{{"Sϕ Stack "}}
	7 --> 12
	11 --> 12
	9 --> 12
	9["eff__992 push_u32"]
	14 --> 9
	4 -. Stack .-> 9
	4["a pop_f32"]
	3 -. Stack .-> 4
	3["b pop_f32"]
	0 -. Stack .-> 3
	0[/"Start"\\]
	14["abs__997 lift_u32"]
	8 --> 14
	8["arg__993 0"]
	11["eff__990 push_u32"]
	13 --> 11
	4 -. Stack .-> 11
	13["abs__996 lift_u32"]
	10 --> 13
	10["arg__991 1"]
	7["cond__989 F32_not_equals"]
	4 --> 7
	3 --> 7
</pre>`;
window.traces["F32_NE"]["schedulerMermaid"] = ''
window.traces["F32_NE"]["schedulerMermaid"] += `<pre class='graph'>graph TD
subgraph block_1337["Block 1337"]
	direction TB
	b1337_1[\\"Finish"/]
	b1337_11["eff__990 push_u32"]
	b1337_9["eff__992 push_u32"]
	b1337_4["a pop_f32"]
	b1337_3["b pop_f32"]
	b1337_13["abs__996 lift_u32"]
	b1337_14["abs__997 lift_u32"]
	b1337_10["arg__991 1"]
	b1337_8["arg__993 0"]
	b1337_11 --> b1337_1
	b1337_9 --> b1337_11
	b1337_4 --> b1337_9
	b1337_3 --> b1337_4
	b1337_13 --> b1337_3
	b1337_14 --> b1337_13
	b1337_10 --> b1337_14
	b1337_8 --> b1337_10
end
phi_1339 --> block_1337
subgraph phi_1339["Phi 1339"]
	p1339_12{{"Sϕ Stack "}}
end
block_1340 --> phi_1339
block_1341 --> phi_1339
subgraph block_1340["Block 1340"]
	direction TB
	b1340_11["eff__990 push_u32"]
end
branch_1338 --> block_1340
subgraph branch_1338["Branch 1338"]
	br1338_7["cond__989 F32_not_equals"]

end
block_1342 --> branch_1338
subgraph block_1342["Block 1342"]
	direction TB
	b1342_7["cond__989 F32_not_equals"]
	b1342_0[/"Start"\\]
	b1342_0 --> b1342_7
end
subgraph block_1341["Block 1341"]
	direction TB
	b1341_9["eff__992 push_u32"]
end
branch_1338 --> block_1341

</pre>`;
window.traces["F32_NE"]["unLEM"] = ''
window.traces["F32_NE"]["unLEM"] += `<pre class='graph'>---
config:
  layout: elk
---
graph TD
	1[\\"Finish"/]
	0 -. Codeptr Trap Locals Globals Tables Memory Extra .-> 1
	12 -. Stack .-> 1
	12{{"Sϕ Stack "}}
	19 --> 12
	22 --> 12
	20 --> 12
	20{{"Sϕ Stack "}}
	17 --> 20
	11 --> 20
	9 --> 20
	9["eff__992 push_u32"]
	14 --> 9
	4 -. Stack .-> 9
	4["a pop_f32"]
	3 -. Stack .-> 4
	3["b pop_f32"]
	0 -. Stack .-> 3
	0[/"Start"\\]
	14["abs__997 lift_u32"]
	8 --> 14
	8["arg__993 0"]
	11["eff__990 push_u32"]
	13 --> 11
	4 -. Stack .-> 11
	13["abs__996 lift_u32"]
	10 --> 13
	10["arg__991 1"]
	17["mt__998 U32_maybeTrue"]
	7 --> 17
	7["cond__989 F32_not_equals"]
	4 --> 7
	3 --> 7
	22["eff_push__1002 push_u32"]
	21 --> 22
	4 -. Stack .-> 22
	21["merge__1001 merge_u"]
	13 --> 21
	14 --> 21
	19["mb__1000 bool.&&"]
	17 --> 19
	18 --> 19
	18["mf__999 U32_maybeFalse"]
	7 --> 18
</pre>`;
window.traces["F32_NE"]["unlem_schedule"] = ''
window.traces["F32_NE"]["unlem_schedule"] += `<pre class=''>def b = pop_f32();
def a = pop_f32();
def cond__989 = F32_not_equals(a, b);
def mt__998 = U32_maybeTrue(cond__989);
def mf__999 = U32_maybeFalse(cond__989);
def mb__1000 = bool.&&(mt__998, mf__999);
if (mb__1000) {
	def arg__991 : u32 = 1;
	def abs__996 = lift_u32(arg__991);
	def arg__993 : u32 = 0;
	def abs__997 = lift_u32(arg__993);
	def merge__1001 = merge_u(abs__996, abs__997);
	def eff_push__1002 = push_u32(merge__1001);
} else {
	if (mt__998) {
		def arg__991 : u32 = 1;
		def abs__996 = lift_u32(arg__991);
		def eff__990 = push_u32(abs__996);
	} else {
		def arg__993 : u32 = 0;
		def abs__997 = lift_u32(arg__993);
		def eff__992 = push_u32(abs__997);
	}
// phis: 
}
// phis: 
</pre>`;
window.traces["F32_NE"]["unlem_scheduler"] = ''
window.traces["F32_NE"]["unlem_scheduler"] += `<pre class='graph'>graph TD
subgraph block_1343["Block 1343"]
	direction TB
	b1343_1[\\"Finish"/]
	b1343_22["eff_push__1002 push_u32"]
	b1343_21["merge__1001 merge_u"]
	b1343_22 --> b1343_1
	b1343_21 --> b1343_22
end
phi_1345 --> block_1343
subgraph phi_1345["Phi 1345"]
	p1345_12{{"Sϕ Stack "}}
end
block_1346 --> phi_1345
block_1347 --> phi_1345
subgraph block_1346["Block 1346"]
	direction TB
	b1346_22["eff_push__1002 push_u32"]
	b1346_21["merge__1001 merge_u"]
	b1346_21 --> b1346_22
end
phi_1354 --> block_1346
subgraph phi_1354["Phi 1354"]
	p1354_20{{"Sϕ Stack "}}
end
block_1355 --> phi_1354
block_1356 --> phi_1354
subgraph block_1355["Block 1355"]
	direction TB
end
branch_1353 --> block_1355
subgraph branch_1353["Branch 1353"]
	br1353_17["mt__998 U32_maybeTrue"]

end
branch_1344 --> branch_1353
subgraph branch_1344["Branch 1344"]
	br1344_19["mb__1000 bool.&&"]

end
block_1352 --> branch_1344
subgraph block_1352["Block 1352"]
	direction TB
	b1352_19["mb__1000 bool.&&"]
	b1352_17["mt__998 U32_maybeTrue"]
	b1352_18["mf__999 U32_maybeFalse"]
	b1352_11["eff__990 push_u32"]
	b1352_9["eff__992 push_u32"]
	b1352_7["cond__989 F32_not_equals"]
	b1352_13["abs__996 lift_u32"]
	b1352_14["abs__997 lift_u32"]
	b1352_4["a pop_f32"]
	b1352_3["b pop_f32"]
	b1352_10["arg__991 1"]
	b1352_8["arg__993 0"]
	b1352_0[/"Start"\\]
	b1352_17 --> b1352_19
	b1352_18 --> b1352_17
	b1352_11 --> b1352_18
	b1352_9 --> b1352_11
	b1352_7 --> b1352_9
	b1352_13 --> b1352_7
	b1352_14 --> b1352_13
	b1352_4 --> b1352_14
	b1352_3 --> b1352_4
	b1352_10 --> b1352_3
	b1352_8 --> b1352_10
	b1352_0 --> b1352_8
end
subgraph block_1356["Block 1356"]
	direction TB
end
branch_1353 --> block_1356
subgraph block_1347["Block 1347"]
	direction TB
end
phi_1349 --> block_1347
subgraph phi_1349["Phi 1349"]
	p1349_20{{"Sϕ Stack "}}
end
block_1350 --> phi_1349
block_1351 --> phi_1349
subgraph block_1350["Block 1350"]
	direction TB
end
branch_1348 --> block_1350
subgraph branch_1348["Branch 1348"]
	br1348_17["mt__998 U32_maybeTrue"]

end
branch_1344 --> branch_1348
subgraph block_1351["Block 1351"]
	direction TB
end
branch_1348 --> block_1351

</pre>`;
window.traces["F32_NE"]["unlem_pretty"] = ''
window.traces["F32_NE"]["unlem_pretty"] += `<pre class=''>def b = pop_f32();
def a = pop_f32();
def cond = F32_not_equals(a, b);
def mt = U32_maybeTrue(cond);
def mf = U32_maybeFalse(cond);
if (bool.&&(mt, mf)) {
	push_u32(merge_u(lift_u32(1), lift_u32(0)));
} else {
	if (mt) {
		push_u32(lift_u32(1));
	} else {
		push_u32(lift_u32(0));
	}
}
</pre>`;
window.traces["F32_NE"]["constUnLEM"] = ''
window.traces["F32_NE"]["constUnLEM"] += `<pre class='graph'>---
config:
  layout: elk
---
graph TD
	1[\\"Finish"/]
	0 -. Codeptr Trap Locals Globals Tables Memory Extra .-> 1
	12 -. Stack .-> 1
	12["eff_push__1002 push_u32"]
	21 --> 12
	4 -. Stack .-> 12
	4["a pop_f32"]
	3 -. Stack .-> 4
	3["b pop_f32"]
	0 -. Stack .-> 3
	0[/"Start"\\]
	21["merge__1001 merge_u"]
	13 --> 21
	14 --> 21
	14["abs__997 lift_u32"]
	8 --> 14
	8["arg__993 0"]
	13["abs__996 lift_u32"]
	10 --> 13
	10["arg__991 1"]
</pre>`;
window.traces["F32_NE"]["chooseMerge"] = ''
window.traces["F32_NE"]["chooseMerge"] += `<pre class='graph'>---
config:
  layout: elk
---
graph TD
	1[\\"Finish"/]
	0 -. Codeptr Trap Locals Globals Tables Memory Extra .-> 1
	12 -. Stack .-> 1
	12["eff_push__1002 push_u32"]
	13 --> 12
	4 -. Stack .-> 12
	4["a pop_f32"]
	3 -. Stack .-> 4
	3["b pop_f32"]
	0 -. Stack .-> 3
	0[/"Start"\\]
	13["abs__996 lift_u32"]
	10 --> 13
	10["arg__991 1"]
</pre>`;
window.traces["F32_NE"]["scheduled"] = ''
window.traces["F32_NE"]["scheduled"] += `<pre class=''>def arg__991 : u32 = 1;
def abs__996 = lift_u32(arg__991);
def b = pop_f32();
def a = pop_f32();
def eff_push__1002 = push_u32(abs__996);
</pre>`;
window.traces["F32_NE"]["pretty"] = ''
window.traces["F32_NE"]["pretty"] += `<pre class=''>def b = pop_f32();
def a = pop_f32();
push_u32(lift_u32(1));
</pre>`;
window.traces["F32_LT"] = {}
window.traces["F32_LT"]["parsed"] = ''
window.traces["F32_LT"]["parsed"] += `<pre class=''>def b = pop_f32();
def a = pop_f32();
def arg__1009 = (b);
def arg__1008 = (a);
def cond__1003 = float.<(arg__1008, arg__1009);
if (cond__1003) {
	def arg__1005 : u32 = 1;
	def eff__1004 = push_u32(arg__1005);
} else {
	def arg__1007 : u32 = 0;
	def eff__1006 = push_u32(arg__1007);
}
// phis: 
</pre>`;
window.traces["F32_LT"]["raw"] = ''
window.traces["F32_LT"]["raw"] += `<pre class='graph'>---
config:
  layout: elk
---
graph TD
	1[\\"Finish"/]
	0 -. Codeptr Trap Locals Globals Tables Memory Extra .-> 1
	12 -. Stack .-> 1
	12{{"Sϕ Stack "}}
	7 --> 12
	11 --> 12
	9 --> 12
	9["eff__1006 push_u32"]
	8 --> 9
	4 -. Stack .-> 9
	4["a pop_f32"]
	3 -. Stack .-> 4
	3["b pop_f32"]
	0 -. Stack .-> 3
	0[/"Start"\\]
	8["arg__1007 0"]
	11["eff__1004 push_u32"]
	10 --> 11
	4 -. Stack .-> 11
	10["arg__1005 1"]
	7["cond__1003 float.<"]
	4 --> 7
	3 --> 7
</pre>`;
window.traces["F32_LT"]["overloadOps"] = ''
window.traces["F32_LT"]["overloadOps"] += `<pre class='graph'>---
config:
  layout: elk
---
graph TD
	1[\\"Finish"/]
	0 -. Codeptr Trap Locals Globals Tables Memory Extra .-> 1
	12 -. Stack .-> 1
	12{{"Sϕ Stack "}}
	7 --> 12
	11 --> 12
	9 --> 12
	9["eff__1006 push_u32"]
	8 --> 9
	4 -. Stack .-> 9
	4["a pop_f32"]
	3 -. Stack .-> 4
	3["b pop_f32"]
	0 -. Stack .-> 3
	0[/"Start"\\]
	8["arg__1007 0"]
	11["eff__1004 push_u32"]
	10 --> 11
	4 -. Stack .-> 11
	10["arg__1005 1"]
	7["cond__1003 F32_lt"]
	4 --> 7
	3 --> 7
</pre>`;
window.traces["F32_LT"]["addAbstractions"] = ''
window.traces["F32_LT"]["addAbstractions"] += `<pre class='graph'>---
config:
  layout: elk
---
graph TD
	1[\\"Finish"/]
	0 -. Codeptr Trap Locals Globals Tables Memory Extra .-> 1
	12 -. Stack .-> 1
	12{{"Sϕ Stack "}}
	7 --> 12
	11 --> 12
	9 --> 12
	9["eff__1006 push_u32"]
	14 --> 9
	4 -. Stack .-> 9
	4["a pop_f32"]
	3 -. Stack .-> 4
	3["b pop_f32"]
	0 -. Stack .-> 3
	0[/"Start"\\]
	14["abs__1011 lift_u32"]
	8 --> 14
	8["arg__1007 0"]
	11["eff__1004 push_u32"]
	13 --> 11
	4 -. Stack .-> 11
	13["abs__1010 lift_u32"]
	10 --> 13
	10["arg__1005 1"]
	7["cond__1003 F32_lt"]
	4 --> 7
	3 --> 7
</pre>`;
window.traces["F32_LT"]["schedulerMermaid"] = ''
window.traces["F32_LT"]["schedulerMermaid"] += `<pre class='graph'>graph TD
subgraph block_1357["Block 1357"]
	direction TB
	b1357_1[\\"Finish"/]
	b1357_11["eff__1004 push_u32"]
	b1357_9["eff__1006 push_u32"]
	b1357_4["a pop_f32"]
	b1357_3["b pop_f32"]
	b1357_13["abs__1010 lift_u32"]
	b1357_14["abs__1011 lift_u32"]
	b1357_10["arg__1005 1"]
	b1357_8["arg__1007 0"]
	b1357_11 --> b1357_1
	b1357_9 --> b1357_11
	b1357_4 --> b1357_9
	b1357_3 --> b1357_4
	b1357_13 --> b1357_3
	b1357_14 --> b1357_13
	b1357_10 --> b1357_14
	b1357_8 --> b1357_10
end
phi_1359 --> block_1357
subgraph phi_1359["Phi 1359"]
	p1359_12{{"Sϕ Stack "}}
end
block_1360 --> phi_1359
block_1361 --> phi_1359
subgraph block_1360["Block 1360"]
	direction TB
	b1360_11["eff__1004 push_u32"]
end
branch_1358 --> block_1360
subgraph branch_1358["Branch 1358"]
	br1358_7["cond__1003 F32_lt"]

end
block_1362 --> branch_1358
subgraph block_1362["Block 1362"]
	direction TB
	b1362_7["cond__1003 F32_lt"]
	b1362_0[/"Start"\\]
	b1362_0 --> b1362_7
end
subgraph block_1361["Block 1361"]
	direction TB
	b1361_9["eff__1006 push_u32"]
end
branch_1358 --> block_1361

</pre>`;
window.traces["F32_LT"]["unLEM"] = ''
window.traces["F32_LT"]["unLEM"] += `<pre class='graph'>---
config:
  layout: elk
---
graph TD
	1[\\"Finish"/]
	0 -. Codeptr Trap Locals Globals Tables Memory Extra .-> 1
	12 -. Stack .-> 1
	12{{"Sϕ Stack "}}
	19 --> 12
	22 --> 12
	20 --> 12
	20{{"Sϕ Stack "}}
	17 --> 20
	11 --> 20
	9 --> 20
	9["eff__1006 push_u32"]
	14 --> 9
	4 -. Stack .-> 9
	4["a pop_f32"]
	3 -. Stack .-> 4
	3["b pop_f32"]
	0 -. Stack .-> 3
	0[/"Start"\\]
	14["abs__1011 lift_u32"]
	8 --> 14
	8["arg__1007 0"]
	11["eff__1004 push_u32"]
	13 --> 11
	4 -. Stack .-> 11
	13["abs__1010 lift_u32"]
	10 --> 13
	10["arg__1005 1"]
	17["mt__1012 U32_maybeTrue"]
	7 --> 17
	7["cond__1003 F32_lt"]
	4 --> 7
	3 --> 7
	22["eff_push__1016 push_u32"]
	21 --> 22
	4 -. Stack .-> 22
	21["merge__1015 merge_u"]
	13 --> 21
	14 --> 21
	19["mb__1014 bool.&&"]
	17 --> 19
	18 --> 19
	18["mf__1013 U32_maybeFalse"]
	7 --> 18
</pre>`;
window.traces["F32_LT"]["unlem_schedule"] = ''
window.traces["F32_LT"]["unlem_schedule"] += `<pre class=''>def b = pop_f32();
def a = pop_f32();
def cond__1003 = F32_lt(a, b);
def mt__1012 = U32_maybeTrue(cond__1003);
def mf__1013 = U32_maybeFalse(cond__1003);
def mb__1014 = bool.&&(mt__1012, mf__1013);
if (mb__1014) {
	def arg__1005 : u32 = 1;
	def abs__1010 = lift_u32(arg__1005);
	def arg__1007 : u32 = 0;
	def abs__1011 = lift_u32(arg__1007);
	def merge__1015 = merge_u(abs__1010, abs__1011);
	def eff_push__1016 = push_u32(merge__1015);
} else {
	if (mt__1012) {
		def arg__1005 : u32 = 1;
		def abs__1010 = lift_u32(arg__1005);
		def eff__1004 = push_u32(abs__1010);
	} else {
		def arg__1007 : u32 = 0;
		def abs__1011 = lift_u32(arg__1007);
		def eff__1006 = push_u32(abs__1011);
	}
// phis: 
}
// phis: 
</pre>`;
window.traces["F32_LT"]["unlem_scheduler"] = ''
window.traces["F32_LT"]["unlem_scheduler"] += `<pre class='graph'>graph TD
subgraph block_1363["Block 1363"]
	direction TB
	b1363_1[\\"Finish"/]
	b1363_22["eff_push__1016 push_u32"]
	b1363_21["merge__1015 merge_u"]
	b1363_22 --> b1363_1
	b1363_21 --> b1363_22
end
phi_1365 --> block_1363
subgraph phi_1365["Phi 1365"]
	p1365_12{{"Sϕ Stack "}}
end
block_1366 --> phi_1365
block_1367 --> phi_1365
subgraph block_1366["Block 1366"]
	direction TB
	b1366_22["eff_push__1016 push_u32"]
	b1366_21["merge__1015 merge_u"]
	b1366_21 --> b1366_22
end
phi_1374 --> block_1366
subgraph phi_1374["Phi 1374"]
	p1374_20{{"Sϕ Stack "}}
end
block_1375 --> phi_1374
block_1376 --> phi_1374
subgraph block_1375["Block 1375"]
	direction TB
end
branch_1373 --> block_1375
subgraph branch_1373["Branch 1373"]
	br1373_17["mt__1012 U32_maybeTrue"]

end
branch_1364 --> branch_1373
subgraph branch_1364["Branch 1364"]
	br1364_19["mb__1014 bool.&&"]

end
block_1372 --> branch_1364
subgraph block_1372["Block 1372"]
	direction TB
	b1372_19["mb__1014 bool.&&"]
	b1372_17["mt__1012 U32_maybeTrue"]
	b1372_18["mf__1013 U32_maybeFalse"]
	b1372_11["eff__1004 push_u32"]
	b1372_9["eff__1006 push_u32"]
	b1372_7["cond__1003 F32_lt"]
	b1372_13["abs__1010 lift_u32"]
	b1372_14["abs__1011 lift_u32"]
	b1372_4["a pop_f32"]
	b1372_3["b pop_f32"]
	b1372_10["arg__1005 1"]
	b1372_8["arg__1007 0"]
	b1372_0[/"Start"\\]
	b1372_17 --> b1372_19
	b1372_18 --> b1372_17
	b1372_11 --> b1372_18
	b1372_9 --> b1372_11
	b1372_7 --> b1372_9
	b1372_13 --> b1372_7
	b1372_14 --> b1372_13
	b1372_4 --> b1372_14
	b1372_3 --> b1372_4
	b1372_10 --> b1372_3
	b1372_8 --> b1372_10
	b1372_0 --> b1372_8
end
subgraph block_1376["Block 1376"]
	direction TB
end
branch_1373 --> block_1376
subgraph block_1367["Block 1367"]
	direction TB
end
phi_1369 --> block_1367
subgraph phi_1369["Phi 1369"]
	p1369_20{{"Sϕ Stack "}}
end
block_1370 --> phi_1369
block_1371 --> phi_1369
subgraph block_1370["Block 1370"]
	direction TB
end
branch_1368 --> block_1370
subgraph branch_1368["Branch 1368"]
	br1368_17["mt__1012 U32_maybeTrue"]

end
branch_1364 --> branch_1368
subgraph block_1371["Block 1371"]
	direction TB
end
branch_1368 --> block_1371

</pre>`;
window.traces["F32_LT"]["unlem_pretty"] = ''
window.traces["F32_LT"]["unlem_pretty"] += `<pre class=''>def b = pop_f32();
def a = pop_f32();
def mt = U32_maybeTrue(F32_lt(a, b));
def mf = U32_maybeFalse(F32_lt(a, b));
if (bool.&&(mt, mf)) {
	push_u32(merge_u(lift_u32(1), lift_u32(0)));
} else {
	if (mt) {
		push_u32(lift_u32(1));
	} else {
		push_u32(lift_u32(0));
	}
}
</pre>`;
window.traces["F32_LT"]["constUnLEM"] = ''
window.traces["F32_LT"]["constUnLEM"] += `<pre class='graph'>---
config:
  layout: elk
---
graph TD
	1[\\"Finish"/]
	0 -. Codeptr Trap Locals Globals Tables Memory Extra .-> 1
	12 -. Stack .-> 1
	12["eff_push__1016 push_u32"]
	21 --> 12
	4 -. Stack .-> 12
	4["a pop_f32"]
	3 -. Stack .-> 4
	3["b pop_f32"]
	0 -. Stack .-> 3
	0[/"Start"\\]
	21["merge__1015 merge_u"]
	13 --> 21
	14 --> 21
	14["abs__1011 lift_u32"]
	8 --> 14
	8["arg__1007 0"]
	13["abs__1010 lift_u32"]
	10 --> 13
	10["arg__1005 1"]
</pre>`;
window.traces["F32_LT"]["chooseMerge"] = ''
window.traces["F32_LT"]["chooseMerge"] += `<pre class='graph'>---
config:
  layout: elk
---
graph TD
	1[\\"Finish"/]
	0 -. Codeptr Trap Locals Globals Tables Memory Extra .-> 1
	12 -. Stack .-> 1
	12["eff_push__1016 push_u32"]
	13 --> 12
	4 -. Stack .-> 12
	4["a pop_f32"]
	3 -. Stack .-> 4
	3["b pop_f32"]
	0 -. Stack .-> 3
	0[/"Start"\\]
	13["abs__1010 lift_u32"]
	10 --> 13
	10["arg__1005 1"]
</pre>`;
window.traces["F32_LT"]["scheduled"] = ''
window.traces["F32_LT"]["scheduled"] += `<pre class=''>def arg__1005 : u32 = 1;
def abs__1010 = lift_u32(arg__1005);
def b = pop_f32();
def a = pop_f32();
def eff_push__1016 = push_u32(abs__1010);
</pre>`;
window.traces["F32_LT"]["pretty"] = ''
window.traces["F32_LT"]["pretty"] += `<pre class=''>def b = pop_f32();
def a = pop_f32();
push_u32(lift_u32(1));
</pre>`;
window.traces["F32_GT"] = {}
window.traces["F32_GT"]["parsed"] = ''
window.traces["F32_GT"]["parsed"] += `<pre class=''>def b = pop_f32();
def a = pop_f32();
def arg__1023 = (b);
def arg__1022 = (a);
def cond__1017 = float.>(arg__1022, arg__1023);
if (cond__1017) {
	def arg__1019 : u32 = 1;
	def eff__1018 = push_u32(arg__1019);
} else {
	def arg__1021 : u32 = 0;
	def eff__1020 = push_u32(arg__1021);
}
// phis: 
</pre>`;
window.traces["F32_GT"]["raw"] = ''
window.traces["F32_GT"]["raw"] += `<pre class='graph'>---
config:
  layout: elk
---
graph TD
	1[\\"Finish"/]
	0 -. Codeptr Trap Locals Globals Tables Memory Extra .-> 1
	12 -. Stack .-> 1
	12{{"Sϕ Stack "}}
	7 --> 12
	11 --> 12
	9 --> 12
	9["eff__1020 push_u32"]
	8 --> 9
	4 -. Stack .-> 9
	4["a pop_f32"]
	3 -. Stack .-> 4
	3["b pop_f32"]
	0 -. Stack .-> 3
	0[/"Start"\\]
	8["arg__1021 0"]
	11["eff__1018 push_u32"]
	10 --> 11
	4 -. Stack .-> 11
	10["arg__1019 1"]
	7["cond__1017 float.>"]
	4 --> 7
	3 --> 7
</pre>`;
window.traces["F32_GT"]["overloadOps"] = ''
window.traces["F32_GT"]["overloadOps"] += `<pre class='graph'>---
config:
  layout: elk
---
graph TD
	1[\\"Finish"/]
	0 -. Codeptr Trap Locals Globals Tables Memory Extra .-> 1
	12 -. Stack .-> 1
	12{{"Sϕ Stack "}}
	7 --> 12
	11 --> 12
	9 --> 12
	9["eff__1020 push_u32"]
	8 --> 9
	4 -. Stack .-> 9
	4["a pop_f32"]
	3 -. Stack .-> 4
	3["b pop_f32"]
	0 -. Stack .-> 3
	0[/"Start"\\]
	8["arg__1021 0"]
	11["eff__1018 push_u32"]
	10 --> 11
	4 -. Stack .-> 11
	10["arg__1019 1"]
	7["cond__1017 F32_gt"]
	4 --> 7
	3 --> 7
</pre>`;
window.traces["F32_GT"]["addAbstractions"] = ''
window.traces["F32_GT"]["addAbstractions"] += `<pre class='graph'>---
config:
  layout: elk
---
graph TD
	1[\\"Finish"/]
	0 -. Codeptr Trap Locals Globals Tables Memory Extra .-> 1
	12 -. Stack .-> 1
	12{{"Sϕ Stack "}}
	7 --> 12
	11 --> 12
	9 --> 12
	9["eff__1020 push_u32"]
	14 --> 9
	4 -. Stack .-> 9
	4["a pop_f32"]
	3 -. Stack .-> 4
	3["b pop_f32"]
	0 -. Stack .-> 3
	0[/"Start"\\]
	14["abs__1025 lift_u32"]
	8 --> 14
	8["arg__1021 0"]
	11["eff__1018 push_u32"]
	13 --> 11
	4 -. Stack .-> 11
	13["abs__1024 lift_u32"]
	10 --> 13
	10["arg__1019 1"]
	7["cond__1017 F32_gt"]
	4 --> 7
	3 --> 7
</pre>`;
window.traces["F32_GT"]["schedulerMermaid"] = ''
window.traces["F32_GT"]["schedulerMermaid"] += `<pre class='graph'>graph TD
subgraph block_1377["Block 1377"]
	direction TB
	b1377_1[\\"Finish"/]
	b1377_11["eff__1018 push_u32"]
	b1377_9["eff__1020 push_u32"]
	b1377_4["a pop_f32"]
	b1377_3["b pop_f32"]
	b1377_13["abs__1024 lift_u32"]
	b1377_14["abs__1025 lift_u32"]
	b1377_10["arg__1019 1"]
	b1377_8["arg__1021 0"]
	b1377_11 --> b1377_1
	b1377_9 --> b1377_11
	b1377_4 --> b1377_9
	b1377_3 --> b1377_4
	b1377_13 --> b1377_3
	b1377_14 --> b1377_13
	b1377_10 --> b1377_14
	b1377_8 --> b1377_10
end
phi_1379 --> block_1377
subgraph phi_1379["Phi 1379"]
	p1379_12{{"Sϕ Stack "}}
end
block_1380 --> phi_1379
block_1381 --> phi_1379
subgraph block_1380["Block 1380"]
	direction TB
	b1380_11["eff__1018 push_u32"]
end
branch_1378 --> block_1380
subgraph branch_1378["Branch 1378"]
	br1378_7["cond__1017 F32_gt"]

end
block_1382 --> branch_1378
subgraph block_1382["Block 1382"]
	direction TB
	b1382_7["cond__1017 F32_gt"]
	b1382_0[/"Start"\\]
	b1382_0 --> b1382_7
end
subgraph block_1381["Block 1381"]
	direction TB
	b1381_9["eff__1020 push_u32"]
end
branch_1378 --> block_1381

</pre>`;
window.traces["F32_GT"]["unLEM"] = ''
window.traces["F32_GT"]["unLEM"] += `<pre class='graph'>---
config:
  layout: elk
---
graph TD
	1[\\"Finish"/]
	0 -. Codeptr Trap Locals Globals Tables Memory Extra .-> 1
	12 -. Stack .-> 1
	12{{"Sϕ Stack "}}
	19 --> 12
	22 --> 12
	20 --> 12
	20{{"Sϕ Stack "}}
	17 --> 20
	11 --> 20
	9 --> 20
	9["eff__1020 push_u32"]
	14 --> 9
	4 -. Stack .-> 9
	4["a pop_f32"]
	3 -. Stack .-> 4
	3["b pop_f32"]
	0 -. Stack .-> 3
	0[/"Start"\\]
	14["abs__1025 lift_u32"]
	8 --> 14
	8["arg__1021 0"]
	11["eff__1018 push_u32"]
	13 --> 11
	4 -. Stack .-> 11
	13["abs__1024 lift_u32"]
	10 --> 13
	10["arg__1019 1"]
	17["mt__1026 U32_maybeTrue"]
	7 --> 17
	7["cond__1017 F32_gt"]
	4 --> 7
	3 --> 7
	22["eff_push__1030 push_u32"]
	21 --> 22
	4 -. Stack .-> 22
	21["merge__1029 merge_u"]
	13 --> 21
	14 --> 21
	19["mb__1028 bool.&&"]
	17 --> 19
	18 --> 19
	18["mf__1027 U32_maybeFalse"]
	7 --> 18
</pre>`;
window.traces["F32_GT"]["unlem_schedule"] = ''
window.traces["F32_GT"]["unlem_schedule"] += `<pre class=''>def b = pop_f32();
def a = pop_f32();
def cond__1017 = F32_gt(a, b);
def mt__1026 = U32_maybeTrue(cond__1017);
def mf__1027 = U32_maybeFalse(cond__1017);
def mb__1028 = bool.&&(mt__1026, mf__1027);
if (mb__1028) {
	def arg__1019 : u32 = 1;
	def abs__1024 = lift_u32(arg__1019);
	def arg__1021 : u32 = 0;
	def abs__1025 = lift_u32(arg__1021);
	def merge__1029 = merge_u(abs__1024, abs__1025);
	def eff_push__1030 = push_u32(merge__1029);
} else {
	if (mt__1026) {
		def arg__1019 : u32 = 1;
		def abs__1024 = lift_u32(arg__1019);
		def eff__1018 = push_u32(abs__1024);
	} else {
		def arg__1021 : u32 = 0;
		def abs__1025 = lift_u32(arg__1021);
		def eff__1020 = push_u32(abs__1025);
	}
// phis: 
}
// phis: 
</pre>`;
window.traces["F32_GT"]["unlem_scheduler"] = ''
window.traces["F32_GT"]["unlem_scheduler"] += `<pre class='graph'>graph TD
subgraph block_1383["Block 1383"]
	direction TB
	b1383_1[\\"Finish"/]
	b1383_22["eff_push__1030 push_u32"]
	b1383_21["merge__1029 merge_u"]
	b1383_22 --> b1383_1
	b1383_21 --> b1383_22
end
phi_1385 --> block_1383
subgraph phi_1385["Phi 1385"]
	p1385_12{{"Sϕ Stack "}}
end
block_1386 --> phi_1385
block_1387 --> phi_1385
subgraph block_1386["Block 1386"]
	direction TB
	b1386_22["eff_push__1030 push_u32"]
	b1386_21["merge__1029 merge_u"]
	b1386_21 --> b1386_22
end
phi_1394 --> block_1386
subgraph phi_1394["Phi 1394"]
	p1394_20{{"Sϕ Stack "}}
end
block_1395 --> phi_1394
block_1396 --> phi_1394
subgraph block_1395["Block 1395"]
	direction TB
end
branch_1393 --> block_1395
subgraph branch_1393["Branch 1393"]
	br1393_17["mt__1026 U32_maybeTrue"]

end
branch_1384 --> branch_1393
subgraph branch_1384["Branch 1384"]
	br1384_19["mb__1028 bool.&&"]

end
block_1392 --> branch_1384
subgraph block_1392["Block 1392"]
	direction TB
	b1392_19["mb__1028 bool.&&"]
	b1392_17["mt__1026 U32_maybeTrue"]
	b1392_18["mf__1027 U32_maybeFalse"]
	b1392_11["eff__1018 push_u32"]
	b1392_9["eff__1020 push_u32"]
	b1392_7["cond__1017 F32_gt"]
	b1392_13["abs__1024 lift_u32"]
	b1392_14["abs__1025 lift_u32"]
	b1392_4["a pop_f32"]
	b1392_3["b pop_f32"]
	b1392_10["arg__1019 1"]
	b1392_8["arg__1021 0"]
	b1392_0[/"Start"\\]
	b1392_17 --> b1392_19
	b1392_18 --> b1392_17
	b1392_11 --> b1392_18
	b1392_9 --> b1392_11
	b1392_7 --> b1392_9
	b1392_13 --> b1392_7
	b1392_14 --> b1392_13
	b1392_4 --> b1392_14
	b1392_3 --> b1392_4
	b1392_10 --> b1392_3
	b1392_8 --> b1392_10
	b1392_0 --> b1392_8
end
subgraph block_1396["Block 1396"]
	direction TB
end
branch_1393 --> block_1396
subgraph block_1387["Block 1387"]
	direction TB
end
phi_1389 --> block_1387
subgraph phi_1389["Phi 1389"]
	p1389_20{{"Sϕ Stack "}}
end
block_1390 --> phi_1389
block_1391 --> phi_1389
subgraph block_1390["Block 1390"]
	direction TB
end
branch_1388 --> block_1390
subgraph branch_1388["Branch 1388"]
	br1388_17["mt__1026 U32_maybeTrue"]

end
branch_1384 --> branch_1388
subgraph block_1391["Block 1391"]
	direction TB
end
branch_1388 --> block_1391

</pre>`;
window.traces["F32_GT"]["unlem_pretty"] = ''
window.traces["F32_GT"]["unlem_pretty"] += `<pre class=''>def b = pop_f32();
def a = pop_f32();
def mt = U32_maybeTrue(F32_gt(a, b));
def mf = U32_maybeFalse(F32_gt(a, b));
if (bool.&&(mt, mf)) {
	push_u32(merge_u(lift_u32(1), lift_u32(0)));
} else {
	if (mt) {
		push_u32(lift_u32(1));
	} else {
		push_u32(lift_u32(0));
	}
}
</pre>`;
window.traces["F32_GT"]["constUnLEM"] = ''
window.traces["F32_GT"]["constUnLEM"] += `<pre class='graph'>---
config:
  layout: elk
---
graph TD
	1[\\"Finish"/]
	0 -. Codeptr Trap Locals Globals Tables Memory Extra .-> 1
	12 -. Stack .-> 1
	12["eff_push__1030 push_u32"]
	21 --> 12
	4 -. Stack .-> 12
	4["a pop_f32"]
	3 -. Stack .-> 4
	3["b pop_f32"]
	0 -. Stack .-> 3
	0[/"Start"\\]
	21["merge__1029 merge_u"]
	13 --> 21
	14 --> 21
	14["abs__1025 lift_u32"]
	8 --> 14
	8["arg__1021 0"]
	13["abs__1024 lift_u32"]
	10 --> 13
	10["arg__1019 1"]
</pre>`;
window.traces["F32_GT"]["chooseMerge"] = ''
window.traces["F32_GT"]["chooseMerge"] += `<pre class='graph'>---
config:
  layout: elk
---
graph TD
	1[\\"Finish"/]
	0 -. Codeptr Trap Locals Globals Tables Memory Extra .-> 1
	12 -. Stack .-> 1
	12["eff_push__1030 push_u32"]
	13 --> 12
	4 -. Stack .-> 12
	4["a pop_f32"]
	3 -. Stack .-> 4
	3["b pop_f32"]
	0 -. Stack .-> 3
	0[/"Start"\\]
	13["abs__1024 lift_u32"]
	10 --> 13
	10["arg__1019 1"]
</pre>`;
window.traces["F32_GT"]["scheduled"] = ''
window.traces["F32_GT"]["scheduled"] += `<pre class=''>def arg__1019 : u32 = 1;
def abs__1024 = lift_u32(arg__1019);
def b = pop_f32();
def a = pop_f32();
def eff_push__1030 = push_u32(abs__1024);
</pre>`;
window.traces["F32_GT"]["pretty"] = ''
window.traces["F32_GT"]["pretty"] += `<pre class=''>def b = pop_f32();
def a = pop_f32();
push_u32(lift_u32(1));
</pre>`;
window.traces["F32_LE"] = {}
window.traces["F32_LE"]["parsed"] = ''
window.traces["F32_LE"]["parsed"] += `<pre class=''>def b = pop_f32();
def a = pop_f32();
def arg__1037 = (b);
def arg__1036 = (a);
def cond__1031 = float.<=(arg__1036, arg__1037);
if (cond__1031) {
	def arg__1033 : u32 = 1;
	def eff__1032 = push_u32(arg__1033);
} else {
	def arg__1035 : u32 = 0;
	def eff__1034 = push_u32(arg__1035);
}
// phis: 
</pre>`;
window.traces["F32_LE"]["raw"] = ''
window.traces["F32_LE"]["raw"] += `<pre class='graph'>---
config:
  layout: elk
---
graph TD
	1[\\"Finish"/]
	0 -. Codeptr Trap Locals Globals Tables Memory Extra .-> 1
	12 -. Stack .-> 1
	12{{"Sϕ Stack "}}
	7 --> 12
	11 --> 12
	9 --> 12
	9["eff__1034 push_u32"]
	8 --> 9
	4 -. Stack .-> 9
	4["a pop_f32"]
	3 -. Stack .-> 4
	3["b pop_f32"]
	0 -. Stack .-> 3
	0[/"Start"\\]
	8["arg__1035 0"]
	11["eff__1032 push_u32"]
	10 --> 11
	4 -. Stack .-> 11
	10["arg__1033 1"]
	7["cond__1031 float.<="]
	4 --> 7
	3 --> 7
</pre>`;
window.traces["F32_LE"]["overloadOps"] = ''
window.traces["F32_LE"]["overloadOps"] += `<pre class='graph'>---
config:
  layout: elk
---
graph TD
	1[\\"Finish"/]
	0 -. Codeptr Trap Locals Globals Tables Memory Extra .-> 1
	12 -. Stack .-> 1
	12{{"Sϕ Stack "}}
	7 --> 12
	11 --> 12
	9 --> 12
	9["eff__1034 push_u32"]
	8 --> 9
	4 -. Stack .-> 9
	4["a pop_f32"]
	3 -. Stack .-> 4
	3["b pop_f32"]
	0 -. Stack .-> 3
	0[/"Start"\\]
	8["arg__1035 0"]
	11["eff__1032 push_u32"]
	10 --> 11
	4 -. Stack .-> 11
	10["arg__1033 1"]
	7["cond__1031 F32_lte"]
	4 --> 7
	3 --> 7
</pre>`;
window.traces["F32_LE"]["addAbstractions"] = ''
window.traces["F32_LE"]["addAbstractions"] += `<pre class='graph'>---
config:
  layout: elk
---
graph TD
	1[\\"Finish"/]
	0 -. Codeptr Trap Locals Globals Tables Memory Extra .-> 1
	12 -. Stack .-> 1
	12{{"Sϕ Stack "}}
	7 --> 12
	11 --> 12
	9 --> 12
	9["eff__1034 push_u32"]
	14 --> 9
	4 -. Stack .-> 9
	4["a pop_f32"]
	3 -. Stack .-> 4
	3["b pop_f32"]
	0 -. Stack .-> 3
	0[/"Start"\\]
	14["abs__1039 lift_u32"]
	8 --> 14
	8["arg__1035 0"]
	11["eff__1032 push_u32"]
	13 --> 11
	4 -. Stack .-> 11
	13["abs__1038 lift_u32"]
	10 --> 13
	10["arg__1033 1"]
	7["cond__1031 F32_lte"]
	4 --> 7
	3 --> 7
</pre>`;
window.traces["F32_LE"]["schedulerMermaid"] = ''
window.traces["F32_LE"]["schedulerMermaid"] += `<pre class='graph'>graph TD
subgraph block_1397["Block 1397"]
	direction TB
	b1397_1[\\"Finish"/]
	b1397_11["eff__1032 push_u32"]
	b1397_9["eff__1034 push_u32"]
	b1397_4["a pop_f32"]
	b1397_3["b pop_f32"]
	b1397_13["abs__1038 lift_u32"]
	b1397_14["abs__1039 lift_u32"]
	b1397_10["arg__1033 1"]
	b1397_8["arg__1035 0"]
	b1397_11 --> b1397_1
	b1397_9 --> b1397_11
	b1397_4 --> b1397_9
	b1397_3 --> b1397_4
	b1397_13 --> b1397_3
	b1397_14 --> b1397_13
	b1397_10 --> b1397_14
	b1397_8 --> b1397_10
end
phi_1399 --> block_1397
subgraph phi_1399["Phi 1399"]
	p1399_12{{"Sϕ Stack "}}
end
block_1400 --> phi_1399
block_1401 --> phi_1399
subgraph block_1400["Block 1400"]
	direction TB
	b1400_11["eff__1032 push_u32"]
end
branch_1398 --> block_1400
subgraph branch_1398["Branch 1398"]
	br1398_7["cond__1031 F32_lte"]

end
block_1402 --> branch_1398
subgraph block_1402["Block 1402"]
	direction TB
	b1402_7["cond__1031 F32_lte"]
	b1402_0[/"Start"\\]
	b1402_0 --> b1402_7
end
subgraph block_1401["Block 1401"]
	direction TB
	b1401_9["eff__1034 push_u32"]
end
branch_1398 --> block_1401

</pre>`;
window.traces["F32_LE"]["unLEM"] = ''
window.traces["F32_LE"]["unLEM"] += `<pre class='graph'>---
config:
  layout: elk
---
graph TD
	1[\\"Finish"/]
	0 -. Codeptr Trap Locals Globals Tables Memory Extra .-> 1
	12 -. Stack .-> 1
	12{{"Sϕ Stack "}}
	19 --> 12
	22 --> 12
	20 --> 12
	20{{"Sϕ Stack "}}
	17 --> 20
	11 --> 20
	9 --> 20
	9["eff__1034 push_u32"]
	14 --> 9
	4 -. Stack .-> 9
	4["a pop_f32"]
	3 -. Stack .-> 4
	3["b pop_f32"]
	0 -. Stack .-> 3
	0[/"Start"\\]
	14["abs__1039 lift_u32"]
	8 --> 14
	8["arg__1035 0"]
	11["eff__1032 push_u32"]
	13 --> 11
	4 -. Stack .-> 11
	13["abs__1038 lift_u32"]
	10 --> 13
	10["arg__1033 1"]
	17["mt__1040 U32_maybeTrue"]
	7 --> 17
	7["cond__1031 F32_lte"]
	4 --> 7
	3 --> 7
	22["eff_push__1044 push_u32"]
	21 --> 22
	4 -. Stack .-> 22
	21["merge__1043 merge_u"]
	13 --> 21
	14 --> 21
	19["mb__1042 bool.&&"]
	17 --> 19
	18 --> 19
	18["mf__1041 U32_maybeFalse"]
	7 --> 18
</pre>`;
window.traces["F32_LE"]["unlem_schedule"] = ''
window.traces["F32_LE"]["unlem_schedule"] += `<pre class=''>def b = pop_f32();
def a = pop_f32();
def cond__1031 = F32_lte(a, b);
def mt__1040 = U32_maybeTrue(cond__1031);
def mf__1041 = U32_maybeFalse(cond__1031);
def mb__1042 = bool.&&(mt__1040, mf__1041);
if (mb__1042) {
	def arg__1033 : u32 = 1;
	def abs__1038 = lift_u32(arg__1033);
	def arg__1035 : u32 = 0;
	def abs__1039 = lift_u32(arg__1035);
	def merge__1043 = merge_u(abs__1038, abs__1039);
	def eff_push__1044 = push_u32(merge__1043);
} else {
	if (mt__1040) {
		def arg__1033 : u32 = 1;
		def abs__1038 = lift_u32(arg__1033);
		def eff__1032 = push_u32(abs__1038);
	} else {
		def arg__1035 : u32 = 0;
		def abs__1039 = lift_u32(arg__1035);
		def eff__1034 = push_u32(abs__1039);
	}
// phis: 
}
// phis: 
</pre>`;
window.traces["F32_LE"]["unlem_scheduler"] = ''
window.traces["F32_LE"]["unlem_scheduler"] += `<pre class='graph'>graph TD
subgraph block_1403["Block 1403"]
	direction TB
	b1403_1[\\"Finish"/]
	b1403_22["eff_push__1044 push_u32"]
	b1403_21["merge__1043 merge_u"]
	b1403_22 --> b1403_1
	b1403_21 --> b1403_22
end
phi_1405 --> block_1403
subgraph phi_1405["Phi 1405"]
	p1405_12{{"Sϕ Stack "}}
end
block_1406 --> phi_1405
block_1407 --> phi_1405
subgraph block_1406["Block 1406"]
	direction TB
	b1406_22["eff_push__1044 push_u32"]
	b1406_21["merge__1043 merge_u"]
	b1406_21 --> b1406_22
end
phi_1414 --> block_1406
subgraph phi_1414["Phi 1414"]
	p1414_20{{"Sϕ Stack "}}
end
block_1415 --> phi_1414
block_1416 --> phi_1414
subgraph block_1415["Block 1415"]
	direction TB
end
branch_1413 --> block_1415
subgraph branch_1413["Branch 1413"]
	br1413_17["mt__1040 U32_maybeTrue"]

end
branch_1404 --> branch_1413
subgraph branch_1404["Branch 1404"]
	br1404_19["mb__1042 bool.&&"]

end
block_1412 --> branch_1404
subgraph block_1412["Block 1412"]
	direction TB
	b1412_19["mb__1042 bool.&&"]
	b1412_17["mt__1040 U32_maybeTrue"]
	b1412_18["mf__1041 U32_maybeFalse"]
	b1412_11["eff__1032 push_u32"]
	b1412_9["eff__1034 push_u32"]
	b1412_7["cond__1031 F32_lte"]
	b1412_13["abs__1038 lift_u32"]
	b1412_14["abs__1039 lift_u32"]
	b1412_4["a pop_f32"]
	b1412_3["b pop_f32"]
	b1412_10["arg__1033 1"]
	b1412_8["arg__1035 0"]
	b1412_0[/"Start"\\]
	b1412_17 --> b1412_19
	b1412_18 --> b1412_17
	b1412_11 --> b1412_18
	b1412_9 --> b1412_11
	b1412_7 --> b1412_9
	b1412_13 --> b1412_7
	b1412_14 --> b1412_13
	b1412_4 --> b1412_14
	b1412_3 --> b1412_4
	b1412_10 --> b1412_3
	b1412_8 --> b1412_10
	b1412_0 --> b1412_8
end
subgraph block_1416["Block 1416"]
	direction TB
end
branch_1413 --> block_1416
subgraph block_1407["Block 1407"]
	direction TB
end
phi_1409 --> block_1407
subgraph phi_1409["Phi 1409"]
	p1409_20{{"Sϕ Stack "}}
end
block_1410 --> phi_1409
block_1411 --> phi_1409
subgraph block_1410["Block 1410"]
	direction TB
end
branch_1408 --> block_1410
subgraph branch_1408["Branch 1408"]
	br1408_17["mt__1040 U32_maybeTrue"]

end
branch_1404 --> branch_1408
subgraph block_1411["Block 1411"]
	direction TB
end
branch_1408 --> block_1411

</pre>`;
window.traces["F32_LE"]["unlem_pretty"] = ''
window.traces["F32_LE"]["unlem_pretty"] += `<pre class=''>def b = pop_f32();
def a = pop_f32();
def mt = U32_maybeTrue(F32_lte(a, b));
def mf = U32_maybeFalse(F32_lte(a, b));
if (bool.&&(mt, mf)) {
	push_u32(merge_u(lift_u32(1), lift_u32(0)));
} else {
	if (mt) {
		push_u32(lift_u32(1));
	} else {
		push_u32(lift_u32(0));
	}
}
</pre>`;
window.traces["F32_LE"]["constUnLEM"] = ''
window.traces["F32_LE"]["constUnLEM"] += `<pre class='graph'>---
config:
  layout: elk
---
graph TD
	1[\\"Finish"/]
	0 -. Codeptr Trap Locals Globals Tables Memory Extra .-> 1
	12 -. Stack .-> 1
	12["eff_push__1044 push_u32"]
	21 --> 12
	4 -. Stack .-> 12
	4["a pop_f32"]
	3 -. Stack .-> 4
	3["b pop_f32"]
	0 -. Stack .-> 3
	0[/"Start"\\]
	21["merge__1043 merge_u"]
	13 --> 21
	14 --> 21
	14["abs__1039 lift_u32"]
	8 --> 14
	8["arg__1035 0"]
	13["abs__1038 lift_u32"]
	10 --> 13
	10["arg__1033 1"]
</pre>`;
window.traces["F32_LE"]["chooseMerge"] = ''
window.traces["F32_LE"]["chooseMerge"] += `<pre class='graph'>---
config:
  layout: elk
---
graph TD
	1[\\"Finish"/]
	0 -. Codeptr Trap Locals Globals Tables Memory Extra .-> 1
	12 -. Stack .-> 1
	12["eff_push__1044 push_u32"]
	13 --> 12
	4 -. Stack .-> 12
	4["a pop_f32"]
	3 -. Stack .-> 4
	3["b pop_f32"]
	0 -. Stack .-> 3
	0[/"Start"\\]
	13["abs__1038 lift_u32"]
	10 --> 13
	10["arg__1033 1"]
</pre>`;
window.traces["F32_LE"]["scheduled"] = ''
window.traces["F32_LE"]["scheduled"] += `<pre class=''>def arg__1033 : u32 = 1;
def abs__1038 = lift_u32(arg__1033);
def b = pop_f32();
def a = pop_f32();
def eff_push__1044 = push_u32(abs__1038);
</pre>`;
window.traces["F32_LE"]["pretty"] = ''
window.traces["F32_LE"]["pretty"] += `<pre class=''>def b = pop_f32();
def a = pop_f32();
push_u32(lift_u32(1));
</pre>`;
window.traces["F32_GE"] = {}
window.traces["F32_GE"]["parsed"] = ''
window.traces["F32_GE"]["parsed"] += `<pre class=''>def b = pop_f32();
def a = pop_f32();
def arg__1051 = (b);
def arg__1050 = (a);
def cond__1045 = float.>=(arg__1050, arg__1051);
if (cond__1045) {
	def arg__1047 : u32 = 1;
	def eff__1046 = push_u32(arg__1047);
} else {
	def arg__1049 : u32 = 0;
	def eff__1048 = push_u32(arg__1049);
}
// phis: 
</pre>`;
window.traces["F32_GE"]["raw"] = ''
window.traces["F32_GE"]["raw"] += `<pre class='graph'>---
config:
  layout: elk
---
graph TD
	1[\\"Finish"/]
	0 -. Codeptr Trap Locals Globals Tables Memory Extra .-> 1
	12 -. Stack .-> 1
	12{{"Sϕ Stack "}}
	7 --> 12
	11 --> 12
	9 --> 12
	9["eff__1048 push_u32"]
	8 --> 9
	4 -. Stack .-> 9
	4["a pop_f32"]
	3 -. Stack .-> 4
	3["b pop_f32"]
	0 -. Stack .-> 3
	0[/"Start"\\]
	8["arg__1049 0"]
	11["eff__1046 push_u32"]
	10 --> 11
	4 -. Stack .-> 11
	10["arg__1047 1"]
	7["cond__1045 float.>="]
	4 --> 7
	3 --> 7
</pre>`;
window.traces["F32_GE"]["overloadOps"] = ''
window.traces["F32_GE"]["overloadOps"] += `<pre class='graph'>---
config:
  layout: elk
---
graph TD
	1[\\"Finish"/]
	0 -. Codeptr Trap Locals Globals Tables Memory Extra .-> 1
	12 -. Stack .-> 1
	12{{"Sϕ Stack "}}
	7 --> 12
	11 --> 12
	9 --> 12
	9["eff__1048 push_u32"]
	8 --> 9
	4 -. Stack .-> 9
	4["a pop_f32"]
	3 -. Stack .-> 4
	3["b pop_f32"]
	0 -. Stack .-> 3
	0[/"Start"\\]
	8["arg__1049 0"]
	11["eff__1046 push_u32"]
	10 --> 11
	4 -. Stack .-> 11
	10["arg__1047 1"]
	7["cond__1045 F32_gte"]
	4 --> 7
	3 --> 7
</pre>`;
window.traces["F32_GE"]["addAbstractions"] = ''
window.traces["F32_GE"]["addAbstractions"] += `<pre class='graph'>---
config:
  layout: elk
---
graph TD
	1[\\"Finish"/]
	0 -. Codeptr Trap Locals Globals Tables Memory Extra .-> 1
	12 -. Stack .-> 1
	12{{"Sϕ Stack "}}
	7 --> 12
	11 --> 12
	9 --> 12
	9["eff__1048 push_u32"]
	14 --> 9
	4 -. Stack .-> 9
	4["a pop_f32"]
	3 -. Stack .-> 4
	3["b pop_f32"]
	0 -. Stack .-> 3
	0[/"Start"\\]
	14["abs__1053 lift_u32"]
	8 --> 14
	8["arg__1049 0"]
	11["eff__1046 push_u32"]
	13 --> 11
	4 -. Stack .-> 11
	13["abs__1052 lift_u32"]
	10 --> 13
	10["arg__1047 1"]
	7["cond__1045 F32_gte"]
	4 --> 7
	3 --> 7
</pre>`;
window.traces["F32_GE"]["schedulerMermaid"] = ''
window.traces["F32_GE"]["schedulerMermaid"] += `<pre class='graph'>graph TD
subgraph block_1417["Block 1417"]
	direction TB
	b1417_1[\\"Finish"/]
	b1417_11["eff__1046 push_u32"]
	b1417_9["eff__1048 push_u32"]
	b1417_4["a pop_f32"]
	b1417_3["b pop_f32"]
	b1417_13["abs__1052 lift_u32"]
	b1417_14["abs__1053 lift_u32"]
	b1417_10["arg__1047 1"]
	b1417_8["arg__1049 0"]
	b1417_11 --> b1417_1
	b1417_9 --> b1417_11
	b1417_4 --> b1417_9
	b1417_3 --> b1417_4
	b1417_13 --> b1417_3
	b1417_14 --> b1417_13
	b1417_10 --> b1417_14
	b1417_8 --> b1417_10
end
phi_1419 --> block_1417
subgraph phi_1419["Phi 1419"]
	p1419_12{{"Sϕ Stack "}}
end
block_1420 --> phi_1419
block_1421 --> phi_1419
subgraph block_1420["Block 1420"]
	direction TB
	b1420_11["eff__1046 push_u32"]
end
branch_1418 --> block_1420
subgraph branch_1418["Branch 1418"]
	br1418_7["cond__1045 F32_gte"]

end
block_1422 --> branch_1418
subgraph block_1422["Block 1422"]
	direction TB
	b1422_7["cond__1045 F32_gte"]
	b1422_0[/"Start"\\]
	b1422_0 --> b1422_7
end
subgraph block_1421["Block 1421"]
	direction TB
	b1421_9["eff__1048 push_u32"]
end
branch_1418 --> block_1421

</pre>`;
window.traces["F32_GE"]["unLEM"] = ''
window.traces["F32_GE"]["unLEM"] += `<pre class='graph'>---
config:
  layout: elk
---
graph TD
	1[\\"Finish"/]
	0 -. Codeptr Trap Locals Globals Tables Memory Extra .-> 1
	12 -. Stack .-> 1
	12{{"Sϕ Stack "}}
	19 --> 12
	22 --> 12
	20 --> 12
	20{{"Sϕ Stack "}}
	17 --> 20
	11 --> 20
	9 --> 20
	9["eff__1048 push_u32"]
	14 --> 9
	4 -. Stack .-> 9
	4["a pop_f32"]
	3 -. Stack .-> 4
	3["b pop_f32"]
	0 -. Stack .-> 3
	0[/"Start"\\]
	14["abs__1053 lift_u32"]
	8 --> 14
	8["arg__1049 0"]
	11["eff__1046 push_u32"]
	13 --> 11
	4 -. Stack .-> 11
	13["abs__1052 lift_u32"]
	10 --> 13
	10["arg__1047 1"]
	17["mt__1054 U32_maybeTrue"]
	7 --> 17
	7["cond__1045 F32_gte"]
	4 --> 7
	3 --> 7
	22["eff_push__1058 push_u32"]
	21 --> 22
	4 -. Stack .-> 22
	21["merge__1057 merge_u"]
	13 --> 21
	14 --> 21
	19["mb__1056 bool.&&"]
	17 --> 19
	18 --> 19
	18["mf__1055 U32_maybeFalse"]
	7 --> 18
</pre>`;
window.traces["F32_GE"]["unlem_schedule"] = ''
window.traces["F32_GE"]["unlem_schedule"] += `<pre class=''>def b = pop_f32();
def a = pop_f32();
def cond__1045 = F32_gte(a, b);
def mt__1054 = U32_maybeTrue(cond__1045);
def mf__1055 = U32_maybeFalse(cond__1045);
def mb__1056 = bool.&&(mt__1054, mf__1055);
if (mb__1056) {
	def arg__1047 : u32 = 1;
	def abs__1052 = lift_u32(arg__1047);
	def arg__1049 : u32 = 0;
	def abs__1053 = lift_u32(arg__1049);
	def merge__1057 = merge_u(abs__1052, abs__1053);
	def eff_push__1058 = push_u32(merge__1057);
} else {
	if (mt__1054) {
		def arg__1047 : u32 = 1;
		def abs__1052 = lift_u32(arg__1047);
		def eff__1046 = push_u32(abs__1052);
	} else {
		def arg__1049 : u32 = 0;
		def abs__1053 = lift_u32(arg__1049);
		def eff__1048 = push_u32(abs__1053);
	}
// phis: 
}
// phis: 
</pre>`;
window.traces["F32_GE"]["unlem_scheduler"] = ''
window.traces["F32_GE"]["unlem_scheduler"] += `<pre class='graph'>graph TD
subgraph block_1423["Block 1423"]
	direction TB
	b1423_1[\\"Finish"/]
	b1423_22["eff_push__1058 push_u32"]
	b1423_21["merge__1057 merge_u"]
	b1423_22 --> b1423_1
	b1423_21 --> b1423_22
end
phi_1425 --> block_1423
subgraph phi_1425["Phi 1425"]
	p1425_12{{"Sϕ Stack "}}
end
block_1426 --> phi_1425
block_1427 --> phi_1425
subgraph block_1426["Block 1426"]
	direction TB
	b1426_22["eff_push__1058 push_u32"]
	b1426_21["merge__1057 merge_u"]
	b1426_21 --> b1426_22
end
phi_1434 --> block_1426
subgraph phi_1434["Phi 1434"]
	p1434_20{{"Sϕ Stack "}}
end
block_1435 --> phi_1434
block_1436 --> phi_1434
subgraph block_1435["Block 1435"]
	direction TB
end
branch_1433 --> block_1435
subgraph branch_1433["Branch 1433"]
	br1433_17["mt__1054 U32_maybeTrue"]

end
branch_1424 --> branch_1433
subgraph branch_1424["Branch 1424"]
	br1424_19["mb__1056 bool.&&"]

end
block_1432 --> branch_1424
subgraph block_1432["Block 1432"]
	direction TB
	b1432_19["mb__1056 bool.&&"]
	b1432_17["mt__1054 U32_maybeTrue"]
	b1432_18["mf__1055 U32_maybeFalse"]
	b1432_11["eff__1046 push_u32"]
	b1432_9["eff__1048 push_u32"]
	b1432_7["cond__1045 F32_gte"]
	b1432_13["abs__1052 lift_u32"]
	b1432_14["abs__1053 lift_u32"]
	b1432_4["a pop_f32"]
	b1432_3["b pop_f32"]
	b1432_10["arg__1047 1"]
	b1432_8["arg__1049 0"]
	b1432_0[/"Start"\\]
	b1432_17 --> b1432_19
	b1432_18 --> b1432_17
	b1432_11 --> b1432_18
	b1432_9 --> b1432_11
	b1432_7 --> b1432_9
	b1432_13 --> b1432_7
	b1432_14 --> b1432_13
	b1432_4 --> b1432_14
	b1432_3 --> b1432_4
	b1432_10 --> b1432_3
	b1432_8 --> b1432_10
	b1432_0 --> b1432_8
end
subgraph block_1436["Block 1436"]
	direction TB
end
branch_1433 --> block_1436
subgraph block_1427["Block 1427"]
	direction TB
end
phi_1429 --> block_1427
subgraph phi_1429["Phi 1429"]
	p1429_20{{"Sϕ Stack "}}
end
block_1430 --> phi_1429
block_1431 --> phi_1429
subgraph block_1430["Block 1430"]
	direction TB
end
branch_1428 --> block_1430
subgraph branch_1428["Branch 1428"]
	br1428_17["mt__1054 U32_maybeTrue"]

end
branch_1424 --> branch_1428
subgraph block_1431["Block 1431"]
	direction TB
end
branch_1428 --> block_1431

</pre>`;
window.traces["F32_GE"]["unlem_pretty"] = ''
window.traces["F32_GE"]["unlem_pretty"] += `<pre class=''>def b = pop_f32();
def a = pop_f32();
def mt = U32_maybeTrue(F32_gte(a, b));
def mf = U32_maybeFalse(F32_gte(a, b));
if (bool.&&(mt, mf)) {
	push_u32(merge_u(lift_u32(1), lift_u32(0)));
} else {
	if (mt) {
		push_u32(lift_u32(1));
	} else {
		push_u32(lift_u32(0));
	}
}
</pre>`;
window.traces["F32_GE"]["constUnLEM"] = ''
window.traces["F32_GE"]["constUnLEM"] += `<pre class='graph'>---
config:
  layout: elk
---
graph TD
	1[\\"Finish"/]
	0 -. Codeptr Trap Locals Globals Tables Memory Extra .-> 1
	12 -. Stack .-> 1
	12["eff_push__1058 push_u32"]
	21 --> 12
	4 -. Stack .-> 12
	4["a pop_f32"]
	3 -. Stack .-> 4
	3["b pop_f32"]
	0 -. Stack .-> 3
	0[/"Start"\\]
	21["merge__1057 merge_u"]
	13 --> 21
	14 --> 21
	14["abs__1053 lift_u32"]
	8 --> 14
	8["arg__1049 0"]
	13["abs__1052 lift_u32"]
	10 --> 13
	10["arg__1047 1"]
</pre>`;
window.traces["F32_GE"]["chooseMerge"] = ''
window.traces["F32_GE"]["chooseMerge"] += `<pre class='graph'>---
config:
  layout: elk
---
graph TD
	1[\\"Finish"/]
	0 -. Codeptr Trap Locals Globals Tables Memory Extra .-> 1
	12 -. Stack .-> 1
	12["eff_push__1058 push_u32"]
	13 --> 12
	4 -. Stack .-> 12
	4["a pop_f32"]
	3 -. Stack .-> 4
	3["b pop_f32"]
	0 -. Stack .-> 3
	0[/"Start"\\]
	13["abs__1052 lift_u32"]
	10 --> 13
	10["arg__1047 1"]
</pre>`;
window.traces["F32_GE"]["scheduled"] = ''
window.traces["F32_GE"]["scheduled"] += `<pre class=''>def arg__1047 : u32 = 1;
def abs__1052 = lift_u32(arg__1047);
def b = pop_f32();
def a = pop_f32();
def eff_push__1058 = push_u32(abs__1052);
</pre>`;
window.traces["F32_GE"]["pretty"] = ''
window.traces["F32_GE"]["pretty"] += `<pre class=''>def b = pop_f32();
def a = pop_f32();
push_u32(lift_u32(1));
</pre>`;
window.traces["F64_EQ"] = {}
window.traces["F64_EQ"]["parsed"] = ''
window.traces["F64_EQ"]["parsed"] += `<pre class=''>def b = pop_f64();
def a = pop_f64();
def arg__1065 = (b);
def arg__1064 = (a);
def cond__1059 = double.==(arg__1064, arg__1065);
if (cond__1059) {
	def arg__1061 : u32 = 1;
	def eff__1060 = push_u32(arg__1061);
} else {
	def arg__1063 : u32 = 0;
	def eff__1062 = push_u32(arg__1063);
}
// phis: 
</pre>`;
window.traces["F64_EQ"]["raw"] = ''
window.traces["F64_EQ"]["raw"] += `<pre class='graph'>---
config:
  layout: elk
---
graph TD
	1[\\"Finish"/]
	0 -. Codeptr Trap Locals Globals Tables Memory Extra .-> 1
	12 -. Stack .-> 1
	12{{"Sϕ Stack "}}
	7 --> 12
	11 --> 12
	9 --> 12
	9["eff__1062 push_u32"]
	8 --> 9
	4 -. Stack .-> 9
	4["a pop_f64"]
	3 -. Stack .-> 4
	3["b pop_f64"]
	0 -. Stack .-> 3
	0[/"Start"\\]
	8["arg__1063 0"]
	11["eff__1060 push_u32"]
	10 --> 11
	4 -. Stack .-> 11
	10["arg__1061 1"]
	7["cond__1059 double.=="]
	4 --> 7
	3 --> 7
</pre>`;
window.traces["F64_EQ"]["overloadOps"] = ''
window.traces["F64_EQ"]["overloadOps"] += `<pre class='graph'>---
config:
  layout: elk
---
graph TD
	1[\\"Finish"/]
	0 -. Codeptr Trap Locals Globals Tables Memory Extra .-> 1
	12 -. Stack .-> 1
	12{{"Sϕ Stack "}}
	7 --> 12
	11 --> 12
	9 --> 12
	9["eff__1062 push_u32"]
	8 --> 9
	4 -. Stack .-> 9
	4["a pop_f64"]
	3 -. Stack .-> 4
	3["b pop_f64"]
	0 -. Stack .-> 3
	0[/"Start"\\]
	8["arg__1063 0"]
	11["eff__1060 push_u32"]
	10 --> 11
	4 -. Stack .-> 11
	10["arg__1061 1"]
	7["cond__1059 F64_equals"]
	4 --> 7
	3 --> 7
</pre>`;
window.traces["F64_EQ"]["addAbstractions"] = ''
window.traces["F64_EQ"]["addAbstractions"] += `<pre class='graph'>---
config:
  layout: elk
---
graph TD
	1[\\"Finish"/]
	0 -. Codeptr Trap Locals Globals Tables Memory Extra .-> 1
	12 -. Stack .-> 1
	12{{"Sϕ Stack "}}
	7 --> 12
	11 --> 12
	9 --> 12
	9["eff__1062 push_u32"]
	14 --> 9
	4 -. Stack .-> 9
	4["a pop_f64"]
	3 -. Stack .-> 4
	3["b pop_f64"]
	0 -. Stack .-> 3
	0[/"Start"\\]
	14["abs__1067 lift_u32"]
	8 --> 14
	8["arg__1063 0"]
	11["eff__1060 push_u32"]
	13 --> 11
	4 -. Stack .-> 11
	13["abs__1066 lift_u32"]
	10 --> 13
	10["arg__1061 1"]
	7["cond__1059 F64_equals"]
	4 --> 7
	3 --> 7
</pre>`;
window.traces["F64_EQ"]["schedulerMermaid"] = ''
window.traces["F64_EQ"]["schedulerMermaid"] += `<pre class='graph'>graph TD
subgraph block_1437["Block 1437"]
	direction TB
	b1437_1[\\"Finish"/]
	b1437_11["eff__1060 push_u32"]
	b1437_9["eff__1062 push_u32"]
	b1437_4["a pop_f64"]
	b1437_3["b pop_f64"]
	b1437_13["abs__1066 lift_u32"]
	b1437_14["abs__1067 lift_u32"]
	b1437_10["arg__1061 1"]
	b1437_8["arg__1063 0"]
	b1437_11 --> b1437_1
	b1437_9 --> b1437_11
	b1437_4 --> b1437_9
	b1437_3 --> b1437_4
	b1437_13 --> b1437_3
	b1437_14 --> b1437_13
	b1437_10 --> b1437_14
	b1437_8 --> b1437_10
end
phi_1439 --> block_1437
subgraph phi_1439["Phi 1439"]
	p1439_12{{"Sϕ Stack "}}
end
block_1440 --> phi_1439
block_1441 --> phi_1439
subgraph block_1440["Block 1440"]
	direction TB
	b1440_11["eff__1060 push_u32"]
end
branch_1438 --> block_1440
subgraph branch_1438["Branch 1438"]
	br1438_7["cond__1059 F64_equals"]

end
block_1442 --> branch_1438
subgraph block_1442["Block 1442"]
	direction TB
	b1442_7["cond__1059 F64_equals"]
	b1442_0[/"Start"\\]
	b1442_0 --> b1442_7
end
subgraph block_1441["Block 1441"]
	direction TB
	b1441_9["eff__1062 push_u32"]
end
branch_1438 --> block_1441

</pre>`;
window.traces["F64_EQ"]["unLEM"] = ''
window.traces["F64_EQ"]["unLEM"] += `<pre class='graph'>---
config:
  layout: elk
---
graph TD
	1[\\"Finish"/]
	0 -. Codeptr Trap Locals Globals Tables Memory Extra .-> 1
	12 -. Stack .-> 1
	12{{"Sϕ Stack "}}
	19 --> 12
	22 --> 12
	20 --> 12
	20{{"Sϕ Stack "}}
	17 --> 20
	11 --> 20
	9 --> 20
	9["eff__1062 push_u32"]
	14 --> 9
	4 -. Stack .-> 9
	4["a pop_f64"]
	3 -. Stack .-> 4
	3["b pop_f64"]
	0 -. Stack .-> 3
	0[/"Start"\\]
	14["abs__1067 lift_u32"]
	8 --> 14
	8["arg__1063 0"]
	11["eff__1060 push_u32"]
	13 --> 11
	4 -. Stack .-> 11
	13["abs__1066 lift_u32"]
	10 --> 13
	10["arg__1061 1"]
	17["mt__1068 U32_maybeTrue"]
	7 --> 17
	7["cond__1059 F64_equals"]
	4 --> 7
	3 --> 7
	22["eff_push__1072 push_u32"]
	21 --> 22
	4 -. Stack .-> 22
	21["merge__1071 merge_u"]
	13 --> 21
	14 --> 21
	19["mb__1070 bool.&&"]
	17 --> 19
	18 --> 19
	18["mf__1069 U32_maybeFalse"]
	7 --> 18
</pre>`;
window.traces["F64_EQ"]["unlem_schedule"] = ''
window.traces["F64_EQ"]["unlem_schedule"] += `<pre class=''>def b = pop_f64();
def a = pop_f64();
def cond__1059 = F64_equals(a, b);
def mt__1068 = U32_maybeTrue(cond__1059);
def mf__1069 = U32_maybeFalse(cond__1059);
def mb__1070 = bool.&&(mt__1068, mf__1069);
if (mb__1070) {
	def arg__1061 : u32 = 1;
	def abs__1066 = lift_u32(arg__1061);
	def arg__1063 : u32 = 0;
	def abs__1067 = lift_u32(arg__1063);
	def merge__1071 = merge_u(abs__1066, abs__1067);
	def eff_push__1072 = push_u32(merge__1071);
} else {
	if (mt__1068) {
		def arg__1061 : u32 = 1;
		def abs__1066 = lift_u32(arg__1061);
		def eff__1060 = push_u32(abs__1066);
	} else {
		def arg__1063 : u32 = 0;
		def abs__1067 = lift_u32(arg__1063);
		def eff__1062 = push_u32(abs__1067);
	}
// phis: 
}
// phis: 
</pre>`;
window.traces["F64_EQ"]["unlem_scheduler"] = ''
window.traces["F64_EQ"]["unlem_scheduler"] += `<pre class='graph'>graph TD
subgraph block_1443["Block 1443"]
	direction TB
	b1443_1[\\"Finish"/]
	b1443_22["eff_push__1072 push_u32"]
	b1443_21["merge__1071 merge_u"]
	b1443_22 --> b1443_1
	b1443_21 --> b1443_22
end
phi_1445 --> block_1443
subgraph phi_1445["Phi 1445"]
	p1445_12{{"Sϕ Stack "}}
end
block_1446 --> phi_1445
block_1447 --> phi_1445
subgraph block_1446["Block 1446"]
	direction TB
	b1446_22["eff_push__1072 push_u32"]
	b1446_21["merge__1071 merge_u"]
	b1446_21 --> b1446_22
end
phi_1454 --> block_1446
subgraph phi_1454["Phi 1454"]
	p1454_20{{"Sϕ Stack "}}
end
block_1455 --> phi_1454
block_1456 --> phi_1454
subgraph block_1455["Block 1455"]
	direction TB
end
branch_1453 --> block_1455
subgraph branch_1453["Branch 1453"]
	br1453_17["mt__1068 U32_maybeTrue"]

end
branch_1444 --> branch_1453
subgraph branch_1444["Branch 1444"]
	br1444_19["mb__1070 bool.&&"]

end
block_1452 --> branch_1444
subgraph block_1452["Block 1452"]
	direction TB
	b1452_19["mb__1070 bool.&&"]
	b1452_17["mt__1068 U32_maybeTrue"]
	b1452_18["mf__1069 U32_maybeFalse"]
	b1452_11["eff__1060 push_u32"]
	b1452_9["eff__1062 push_u32"]
	b1452_7["cond__1059 F64_equals"]
	b1452_13["abs__1066 lift_u32"]
	b1452_14["abs__1067 lift_u32"]
	b1452_4["a pop_f64"]
	b1452_3["b pop_f64"]
	b1452_10["arg__1061 1"]
	b1452_8["arg__1063 0"]
	b1452_0[/"Start"\\]
	b1452_17 --> b1452_19
	b1452_18 --> b1452_17
	b1452_11 --> b1452_18
	b1452_9 --> b1452_11
	b1452_7 --> b1452_9
	b1452_13 --> b1452_7
	b1452_14 --> b1452_13
	b1452_4 --> b1452_14
	b1452_3 --> b1452_4
	b1452_10 --> b1452_3
	b1452_8 --> b1452_10
	b1452_0 --> b1452_8
end
subgraph block_1456["Block 1456"]
	direction TB
end
branch_1453 --> block_1456
subgraph block_1447["Block 1447"]
	direction TB
end
phi_1449 --> block_1447
subgraph phi_1449["Phi 1449"]
	p1449_20{{"Sϕ Stack "}}
end
block_1450 --> phi_1449
block_1451 --> phi_1449
subgraph block_1450["Block 1450"]
	direction TB
end
branch_1448 --> block_1450
subgraph branch_1448["Branch 1448"]
	br1448_17["mt__1068 U32_maybeTrue"]

end
branch_1444 --> branch_1448
subgraph block_1451["Block 1451"]
	direction TB
end
branch_1448 --> block_1451

</pre>`;
window.traces["F64_EQ"]["unlem_pretty"] = ''
window.traces["F64_EQ"]["unlem_pretty"] += `<pre class=''>def b = pop_f64();
def a = pop_f64();
def mt = U32_maybeTrue(F64_equals(a, b));
def mf = U32_maybeFalse(F64_equals(a, b));
if (bool.&&(mt, mf)) {
	push_u32(merge_u(lift_u32(1), lift_u32(0)));
} else {
	if (mt) {
		push_u32(lift_u32(1));
	} else {
		push_u32(lift_u32(0));
	}
}
</pre>`;
window.traces["F64_EQ"]["constUnLEM"] = ''
window.traces["F64_EQ"]["constUnLEM"] += `<pre class='graph'>---
config:
  layout: elk
---
graph TD
	1[\\"Finish"/]
	0 -. Codeptr Trap Locals Globals Tables Memory Extra .-> 1
	12 -. Stack .-> 1
	12["eff_push__1072 push_u32"]
	21 --> 12
	4 -. Stack .-> 12
	4["a pop_f64"]
	3 -. Stack .-> 4
	3["b pop_f64"]
	0 -. Stack .-> 3
	0[/"Start"\\]
	21["merge__1071 merge_u"]
	13 --> 21
	14 --> 21
	14["abs__1067 lift_u32"]
	8 --> 14
	8["arg__1063 0"]
	13["abs__1066 lift_u32"]
	10 --> 13
	10["arg__1061 1"]
</pre>`;
window.traces["F64_EQ"]["chooseMerge"] = ''
window.traces["F64_EQ"]["chooseMerge"] += `<pre class='graph'>---
config:
  layout: elk
---
graph TD
	1[\\"Finish"/]
	0 -. Codeptr Trap Locals Globals Tables Memory Extra .-> 1
	12 -. Stack .-> 1
	12["eff_push__1072 push_u32"]
	13 --> 12
	4 -. Stack .-> 12
	4["a pop_f64"]
	3 -. Stack .-> 4
	3["b pop_f64"]
	0 -. Stack .-> 3
	0[/"Start"\\]
	13["abs__1066 lift_u32"]
	10 --> 13
	10["arg__1061 1"]
</pre>`;
window.traces["F64_EQ"]["scheduled"] = ''
window.traces["F64_EQ"]["scheduled"] += `<pre class=''>def arg__1061 : u32 = 1;
def abs__1066 = lift_u32(arg__1061);
def b = pop_f64();
def a = pop_f64();
def eff_push__1072 = push_u32(abs__1066);
</pre>`;
window.traces["F64_EQ"]["pretty"] = ''
window.traces["F64_EQ"]["pretty"] += `<pre class=''>def b = pop_f64();
def a = pop_f64();
push_u32(lift_u32(1));
</pre>`;
window.traces["F64_NE"] = {}
window.traces["F64_NE"]["parsed"] = ''
window.traces["F64_NE"]["parsed"] += `<pre class=''>def b = pop_f64();
def a = pop_f64();
def arg__1079 = (b);
def arg__1078 = (a);
def cond__1073 = double.!=(arg__1078, arg__1079);
if (cond__1073) {
	def arg__1075 : u32 = 1;
	def eff__1074 = push_u32(arg__1075);
} else {
	def arg__1077 : u32 = 0;
	def eff__1076 = push_u32(arg__1077);
}
// phis: 
</pre>`;
window.traces["F64_NE"]["raw"] = ''
window.traces["F64_NE"]["raw"] += `<pre class='graph'>---
config:
  layout: elk
---
graph TD
	1[\\"Finish"/]
	0 -. Codeptr Trap Locals Globals Tables Memory Extra .-> 1
	12 -. Stack .-> 1
	12{{"Sϕ Stack "}}
	7 --> 12
	11 --> 12
	9 --> 12
	9["eff__1076 push_u32"]
	8 --> 9
	4 -. Stack .-> 9
	4["a pop_f64"]
	3 -. Stack .-> 4
	3["b pop_f64"]
	0 -. Stack .-> 3
	0[/"Start"\\]
	8["arg__1077 0"]
	11["eff__1074 push_u32"]
	10 --> 11
	4 -. Stack .-> 11
	10["arg__1075 1"]
	7["cond__1073 double.!="]
	4 --> 7
	3 --> 7
</pre>`;
window.traces["F64_NE"]["overloadOps"] = ''
window.traces["F64_NE"]["overloadOps"] += `<pre class='graph'>---
config:
  layout: elk
---
graph TD
	1[\\"Finish"/]
	0 -. Codeptr Trap Locals Globals Tables Memory Extra .-> 1
	12 -. Stack .-> 1
	12{{"Sϕ Stack "}}
	7 --> 12
	11 --> 12
	9 --> 12
	9["eff__1076 push_u32"]
	8 --> 9
	4 -. Stack .-> 9
	4["a pop_f64"]
	3 -. Stack .-> 4
	3["b pop_f64"]
	0 -. Stack .-> 3
	0[/"Start"\\]
	8["arg__1077 0"]
	11["eff__1074 push_u32"]
	10 --> 11
	4 -. Stack .-> 11
	10["arg__1075 1"]
	7["cond__1073 F64_not_equals"]
	4 --> 7
	3 --> 7
</pre>`;
window.traces["F64_NE"]["addAbstractions"] = ''
window.traces["F64_NE"]["addAbstractions"] += `<pre class='graph'>---
config:
  layout: elk
---
graph TD
	1[\\"Finish"/]
	0 -. Codeptr Trap Locals Globals Tables Memory Extra .-> 1
	12 -. Stack .-> 1
	12{{"Sϕ Stack "}}
	7 --> 12
	11 --> 12
	9 --> 12
	9["eff__1076 push_u32"]
	14 --> 9
	4 -. Stack .-> 9
	4["a pop_f64"]
	3 -. Stack .-> 4
	3["b pop_f64"]
	0 -. Stack .-> 3
	0[/"Start"\\]
	14["abs__1081 lift_u32"]
	8 --> 14
	8["arg__1077 0"]
	11["eff__1074 push_u32"]
	13 --> 11
	4 -. Stack .-> 11
	13["abs__1080 lift_u32"]
	10 --> 13
	10["arg__1075 1"]
	7["cond__1073 F64_not_equals"]
	4 --> 7
	3 --> 7
</pre>`;
window.traces["F64_NE"]["schedulerMermaid"] = ''
window.traces["F64_NE"]["schedulerMermaid"] += `<pre class='graph'>graph TD
subgraph block_1457["Block 1457"]
	direction TB
	b1457_1[\\"Finish"/]
	b1457_11["eff__1074 push_u32"]
	b1457_9["eff__1076 push_u32"]
	b1457_4["a pop_f64"]
	b1457_3["b pop_f64"]
	b1457_13["abs__1080 lift_u32"]
	b1457_14["abs__1081 lift_u32"]
	b1457_10["arg__1075 1"]
	b1457_8["arg__1077 0"]
	b1457_11 --> b1457_1
	b1457_9 --> b1457_11
	b1457_4 --> b1457_9
	b1457_3 --> b1457_4
	b1457_13 --> b1457_3
	b1457_14 --> b1457_13
	b1457_10 --> b1457_14
	b1457_8 --> b1457_10
end
phi_1459 --> block_1457
subgraph phi_1459["Phi 1459"]
	p1459_12{{"Sϕ Stack "}}
end
block_1460 --> phi_1459
block_1461 --> phi_1459
subgraph block_1460["Block 1460"]
	direction TB
	b1460_11["eff__1074 push_u32"]
end
branch_1458 --> block_1460
subgraph branch_1458["Branch 1458"]
	br1458_7["cond__1073 F64_not_equals"]

end
block_1462 --> branch_1458
subgraph block_1462["Block 1462"]
	direction TB
	b1462_7["cond__1073 F64_not_equals"]
	b1462_0[/"Start"\\]
	b1462_0 --> b1462_7
end
subgraph block_1461["Block 1461"]
	direction TB
	b1461_9["eff__1076 push_u32"]
end
branch_1458 --> block_1461

</pre>`;
window.traces["F64_NE"]["unLEM"] = ''
window.traces["F64_NE"]["unLEM"] += `<pre class='graph'>---
config:
  layout: elk
---
graph TD
	1[\\"Finish"/]
	0 -. Codeptr Trap Locals Globals Tables Memory Extra .-> 1
	12 -. Stack .-> 1
	12{{"Sϕ Stack "}}
	19 --> 12
	22 --> 12
	20 --> 12
	20{{"Sϕ Stack "}}
	17 --> 20
	11 --> 20
	9 --> 20
	9["eff__1076 push_u32"]
	14 --> 9
	4 -. Stack .-> 9
	4["a pop_f64"]
	3 -. Stack .-> 4
	3["b pop_f64"]
	0 -. Stack .-> 3
	0[/"Start"\\]
	14["abs__1081 lift_u32"]
	8 --> 14
	8["arg__1077 0"]
	11["eff__1074 push_u32"]
	13 --> 11
	4 -. Stack .-> 11
	13["abs__1080 lift_u32"]
	10 --> 13
	10["arg__1075 1"]
	17["mt__1082 U32_maybeTrue"]
	7 --> 17
	7["cond__1073 F64_not_equals"]
	4 --> 7
	3 --> 7
	22["eff_push__1086 push_u32"]
	21 --> 22
	4 -. Stack .-> 22
	21["merge__1085 merge_u"]
	13 --> 21
	14 --> 21
	19["mb__1084 bool.&&"]
	17 --> 19
	18 --> 19
	18["mf__1083 U32_maybeFalse"]
	7 --> 18
</pre>`;
window.traces["F64_NE"]["unlem_schedule"] = ''
window.traces["F64_NE"]["unlem_schedule"] += `<pre class=''>def b = pop_f64();
def a = pop_f64();
def cond__1073 = F64_not_equals(a, b);
def mt__1082 = U32_maybeTrue(cond__1073);
def mf__1083 = U32_maybeFalse(cond__1073);
def mb__1084 = bool.&&(mt__1082, mf__1083);
if (mb__1084) {
	def arg__1075 : u32 = 1;
	def abs__1080 = lift_u32(arg__1075);
	def arg__1077 : u32 = 0;
	def abs__1081 = lift_u32(arg__1077);
	def merge__1085 = merge_u(abs__1080, abs__1081);
	def eff_push__1086 = push_u32(merge__1085);
} else {
	if (mt__1082) {
		def arg__1075 : u32 = 1;
		def abs__1080 = lift_u32(arg__1075);
		def eff__1074 = push_u32(abs__1080);
	} else {
		def arg__1077 : u32 = 0;
		def abs__1081 = lift_u32(arg__1077);
		def eff__1076 = push_u32(abs__1081);
	}
// phis: 
}
// phis: 
</pre>`;
window.traces["F64_NE"]["unlem_scheduler"] = ''
window.traces["F64_NE"]["unlem_scheduler"] += `<pre class='graph'>graph TD
subgraph block_1463["Block 1463"]
	direction TB
	b1463_1[\\"Finish"/]
	b1463_22["eff_push__1086 push_u32"]
	b1463_21["merge__1085 merge_u"]
	b1463_22 --> b1463_1
	b1463_21 --> b1463_22
end
phi_1465 --> block_1463
subgraph phi_1465["Phi 1465"]
	p1465_12{{"Sϕ Stack "}}
end
block_1466 --> phi_1465
block_1467 --> phi_1465
subgraph block_1466["Block 1466"]
	direction TB
	b1466_22["eff_push__1086 push_u32"]
	b1466_21["merge__1085 merge_u"]
	b1466_21 --> b1466_22
end
phi_1474 --> block_1466
subgraph phi_1474["Phi 1474"]
	p1474_20{{"Sϕ Stack "}}
end
block_1475 --> phi_1474
block_1476 --> phi_1474
subgraph block_1475["Block 1475"]
	direction TB
end
branch_1473 --> block_1475
subgraph branch_1473["Branch 1473"]
	br1473_17["mt__1082 U32_maybeTrue"]

end
branch_1464 --> branch_1473
subgraph branch_1464["Branch 1464"]
	br1464_19["mb__1084 bool.&&"]

end
block_1472 --> branch_1464
subgraph block_1472["Block 1472"]
	direction TB
	b1472_19["mb__1084 bool.&&"]
	b1472_17["mt__1082 U32_maybeTrue"]
	b1472_18["mf__1083 U32_maybeFalse"]
	b1472_11["eff__1074 push_u32"]
	b1472_9["eff__1076 push_u32"]
	b1472_7["cond__1073 F64_not_equals"]
	b1472_13["abs__1080 lift_u32"]
	b1472_14["abs__1081 lift_u32"]
	b1472_4["a pop_f64"]
	b1472_3["b pop_f64"]
	b1472_10["arg__1075 1"]
	b1472_8["arg__1077 0"]
	b1472_0[/"Start"\\]
	b1472_17 --> b1472_19
	b1472_18 --> b1472_17
	b1472_11 --> b1472_18
	b1472_9 --> b1472_11
	b1472_7 --> b1472_9
	b1472_13 --> b1472_7
	b1472_14 --> b1472_13
	b1472_4 --> b1472_14
	b1472_3 --> b1472_4
	b1472_10 --> b1472_3
	b1472_8 --> b1472_10
	b1472_0 --> b1472_8
end
subgraph block_1476["Block 1476"]
	direction TB
end
branch_1473 --> block_1476
subgraph block_1467["Block 1467"]
	direction TB
end
phi_1469 --> block_1467
subgraph phi_1469["Phi 1469"]
	p1469_20{{"Sϕ Stack "}}
end
block_1470 --> phi_1469
block_1471 --> phi_1469
subgraph block_1470["Block 1470"]
	direction TB
end
branch_1468 --> block_1470
subgraph branch_1468["Branch 1468"]
	br1468_17["mt__1082 U32_maybeTrue"]

end
branch_1464 --> branch_1468
subgraph block_1471["Block 1471"]
	direction TB
end
branch_1468 --> block_1471

</pre>`;
window.traces["F64_NE"]["unlem_pretty"] = ''
window.traces["F64_NE"]["unlem_pretty"] += `<pre class=''>def b = pop_f64();
def a = pop_f64();
def cond = F64_not_equals(a, b);
def mt = U32_maybeTrue(cond);
def mf = U32_maybeFalse(cond);
if (bool.&&(mt, mf)) {
	push_u32(merge_u(lift_u32(1), lift_u32(0)));
} else {
	if (mt) {
		push_u32(lift_u32(1));
	} else {
		push_u32(lift_u32(0));
	}
}
</pre>`;
window.traces["F64_NE"]["constUnLEM"] = ''
window.traces["F64_NE"]["constUnLEM"] += `<pre class='graph'>---
config:
  layout: elk
---
graph TD
	1[\\"Finish"/]
	0 -. Codeptr Trap Locals Globals Tables Memory Extra .-> 1
	12 -. Stack .-> 1
	12["eff_push__1086 push_u32"]
	21 --> 12
	4 -. Stack .-> 12
	4["a pop_f64"]
	3 -. Stack .-> 4
	3["b pop_f64"]
	0 -. Stack .-> 3
	0[/"Start"\\]
	21["merge__1085 merge_u"]
	13 --> 21
	14 --> 21
	14["abs__1081 lift_u32"]
	8 --> 14
	8["arg__1077 0"]
	13["abs__1080 lift_u32"]
	10 --> 13
	10["arg__1075 1"]
</pre>`;
window.traces["F64_NE"]["chooseMerge"] = ''
window.traces["F64_NE"]["chooseMerge"] += `<pre class='graph'>---
config:
  layout: elk
---
graph TD
	1[\\"Finish"/]
	0 -. Codeptr Trap Locals Globals Tables Memory Extra .-> 1
	12 -. Stack .-> 1
	12["eff_push__1086 push_u32"]
	13 --> 12
	4 -. Stack .-> 12
	4["a pop_f64"]
	3 -. Stack .-> 4
	3["b pop_f64"]
	0 -. Stack .-> 3
	0[/"Start"\\]
	13["abs__1080 lift_u32"]
	10 --> 13
	10["arg__1075 1"]
</pre>`;
window.traces["F64_NE"]["scheduled"] = ''
window.traces["F64_NE"]["scheduled"] += `<pre class=''>def arg__1075 : u32 = 1;
def abs__1080 = lift_u32(arg__1075);
def b = pop_f64();
def a = pop_f64();
def eff_push__1086 = push_u32(abs__1080);
</pre>`;
window.traces["F64_NE"]["pretty"] = ''
window.traces["F64_NE"]["pretty"] += `<pre class=''>def b = pop_f64();
def a = pop_f64();
push_u32(lift_u32(1));
</pre>`;
window.traces["F64_LT"] = {}
window.traces["F64_LT"]["parsed"] = ''
window.traces["F64_LT"]["parsed"] += `<pre class=''>def b = pop_f64();
def a = pop_f64();
def arg__1093 = (b);
def arg__1092 = (a);
def cond__1087 = double.<(arg__1092, arg__1093);
if (cond__1087) {
	def arg__1089 : u32 = 1;
	def eff__1088 = push_u32(arg__1089);
} else {
	def arg__1091 : u32 = 0;
	def eff__1090 = push_u32(arg__1091);
}
// phis: 
</pre>`;
window.traces["F64_LT"]["raw"] = ''
window.traces["F64_LT"]["raw"] += `<pre class='graph'>---
config:
  layout: elk
---
graph TD
	1[\\"Finish"/]
	0 -. Codeptr Trap Locals Globals Tables Memory Extra .-> 1
	12 -. Stack .-> 1
	12{{"Sϕ Stack "}}
	7 --> 12
	11 --> 12
	9 --> 12
	9["eff__1090 push_u32"]
	8 --> 9
	4 -. Stack .-> 9
	4["a pop_f64"]
	3 -. Stack .-> 4
	3["b pop_f64"]
	0 -. Stack .-> 3
	0[/"Start"\\]
	8["arg__1091 0"]
	11["eff__1088 push_u32"]
	10 --> 11
	4 -. Stack .-> 11
	10["arg__1089 1"]
	7["cond__1087 double.<"]
	4 --> 7
	3 --> 7
</pre>`;
window.traces["F64_LT"]["overloadOps"] = ''
window.traces["F64_LT"]["overloadOps"] += `<pre class='graph'>---
config:
  layout: elk
---
graph TD
	1[\\"Finish"/]
	0 -. Codeptr Trap Locals Globals Tables Memory Extra .-> 1
	12 -. Stack .-> 1
	12{{"Sϕ Stack "}}
	7 --> 12
	11 --> 12
	9 --> 12
	9["eff__1090 push_u32"]
	8 --> 9
	4 -. Stack .-> 9
	4["a pop_f64"]
	3 -. Stack .-> 4
	3["b pop_f64"]
	0 -. Stack .-> 3
	0[/"Start"\\]
	8["arg__1091 0"]
	11["eff__1088 push_u32"]
	10 --> 11
	4 -. Stack .-> 11
	10["arg__1089 1"]
	7["cond__1087 F64_lt"]
	4 --> 7
	3 --> 7
</pre>`;
window.traces["F64_LT"]["addAbstractions"] = ''
window.traces["F64_LT"]["addAbstractions"] += `<pre class='graph'>---
config:
  layout: elk
---
graph TD
	1[\\"Finish"/]
	0 -. Codeptr Trap Locals Globals Tables Memory Extra .-> 1
	12 -. Stack .-> 1
	12{{"Sϕ Stack "}}
	7 --> 12
	11 --> 12
	9 --> 12
	9["eff__1090 push_u32"]
	14 --> 9
	4 -. Stack .-> 9
	4["a pop_f64"]
	3 -. Stack .-> 4
	3["b pop_f64"]
	0 -. Stack .-> 3
	0[/"Start"\\]
	14["abs__1095 lift_u32"]
	8 --> 14
	8["arg__1091 0"]
	11["eff__1088 push_u32"]
	13 --> 11
	4 -. Stack .-> 11
	13["abs__1094 lift_u32"]
	10 --> 13
	10["arg__1089 1"]
	7["cond__1087 F64_lt"]
	4 --> 7
	3 --> 7
</pre>`;
window.traces["F64_LT"]["schedulerMermaid"] = ''
window.traces["F64_LT"]["schedulerMermaid"] += `<pre class='graph'>graph TD
subgraph block_1477["Block 1477"]
	direction TB
	b1477_1[\\"Finish"/]
	b1477_11["eff__1088 push_u32"]
	b1477_9["eff__1090 push_u32"]
	b1477_4["a pop_f64"]
	b1477_3["b pop_f64"]
	b1477_13["abs__1094 lift_u32"]
	b1477_14["abs__1095 lift_u32"]
	b1477_10["arg__1089 1"]
	b1477_8["arg__1091 0"]
	b1477_11 --> b1477_1
	b1477_9 --> b1477_11
	b1477_4 --> b1477_9
	b1477_3 --> b1477_4
	b1477_13 --> b1477_3
	b1477_14 --> b1477_13
	b1477_10 --> b1477_14
	b1477_8 --> b1477_10
end
phi_1479 --> block_1477
subgraph phi_1479["Phi 1479"]
	p1479_12{{"Sϕ Stack "}}
end
block_1480 --> phi_1479
block_1481 --> phi_1479
subgraph block_1480["Block 1480"]
	direction TB
	b1480_11["eff__1088 push_u32"]
end
branch_1478 --> block_1480
subgraph branch_1478["Branch 1478"]
	br1478_7["cond__1087 F64_lt"]

end
block_1482 --> branch_1478
subgraph block_1482["Block 1482"]
	direction TB
	b1482_7["cond__1087 F64_lt"]
	b1482_0[/"Start"\\]
	b1482_0 --> b1482_7
end
subgraph block_1481["Block 1481"]
	direction TB
	b1481_9["eff__1090 push_u32"]
end
branch_1478 --> block_1481

</pre>`;
window.traces["F64_LT"]["unLEM"] = ''
window.traces["F64_LT"]["unLEM"] += `<pre class='graph'>---
config:
  layout: elk
---
graph TD
	1[\\"Finish"/]
	0 -. Codeptr Trap Locals Globals Tables Memory Extra .-> 1
	12 -. Stack .-> 1
	12{{"Sϕ Stack "}}
	19 --> 12
	22 --> 12
	20 --> 12
	20{{"Sϕ Stack "}}
	17 --> 20
	11 --> 20
	9 --> 20
	9["eff__1090 push_u32"]
	14 --> 9
	4 -. Stack .-> 9
	4["a pop_f64"]
	3 -. Stack .-> 4
	3["b pop_f64"]
	0 -. Stack .-> 3
	0[/"Start"\\]
	14["abs__1095 lift_u32"]
	8 --> 14
	8["arg__1091 0"]
	11["eff__1088 push_u32"]
	13 --> 11
	4 -. Stack .-> 11
	13["abs__1094 lift_u32"]
	10 --> 13
	10["arg__1089 1"]
	17["mt__1096 U32_maybeTrue"]
	7 --> 17
	7["cond__1087 F64_lt"]
	4 --> 7
	3 --> 7
	22["eff_push__1100 push_u32"]
	21 --> 22
	4 -. Stack .-> 22
	21["merge__1099 merge_u"]
	13 --> 21
	14 --> 21
	19["mb__1098 bool.&&"]
	17 --> 19
	18 --> 19
	18["mf__1097 U32_maybeFalse"]
	7 --> 18
</pre>`;
window.traces["F64_LT"]["unlem_schedule"] = ''
window.traces["F64_LT"]["unlem_schedule"] += `<pre class=''>def b = pop_f64();
def a = pop_f64();
def cond__1087 = F64_lt(a, b);
def mt__1096 = U32_maybeTrue(cond__1087);
def mf__1097 = U32_maybeFalse(cond__1087);
def mb__1098 = bool.&&(mt__1096, mf__1097);
if (mb__1098) {
	def arg__1089 : u32 = 1;
	def abs__1094 = lift_u32(arg__1089);
	def arg__1091 : u32 = 0;
	def abs__1095 = lift_u32(arg__1091);
	def merge__1099 = merge_u(abs__1094, abs__1095);
	def eff_push__1100 = push_u32(merge__1099);
} else {
	if (mt__1096) {
		def arg__1089 : u32 = 1;
		def abs__1094 = lift_u32(arg__1089);
		def eff__1088 = push_u32(abs__1094);
	} else {
		def arg__1091 : u32 = 0;
		def abs__1095 = lift_u32(arg__1091);
		def eff__1090 = push_u32(abs__1095);
	}
// phis: 
}
// phis: 
</pre>`;
window.traces["F64_LT"]["unlem_scheduler"] = ''
window.traces["F64_LT"]["unlem_scheduler"] += `<pre class='graph'>graph TD
subgraph block_1483["Block 1483"]
	direction TB
	b1483_1[\\"Finish"/]
	b1483_22["eff_push__1100 push_u32"]
	b1483_21["merge__1099 merge_u"]
	b1483_22 --> b1483_1
	b1483_21 --> b1483_22
end
phi_1485 --> block_1483
subgraph phi_1485["Phi 1485"]
	p1485_12{{"Sϕ Stack "}}
end
block_1486 --> phi_1485
block_1487 --> phi_1485
subgraph block_1486["Block 1486"]
	direction TB
	b1486_22["eff_push__1100 push_u32"]
	b1486_21["merge__1099 merge_u"]
	b1486_21 --> b1486_22
end
phi_1494 --> block_1486
subgraph phi_1494["Phi 1494"]
	p1494_20{{"Sϕ Stack "}}
end
block_1495 --> phi_1494
block_1496 --> phi_1494
subgraph block_1495["Block 1495"]
	direction TB
end
branch_1493 --> block_1495
subgraph branch_1493["Branch 1493"]
	br1493_17["mt__1096 U32_maybeTrue"]

end
branch_1484 --> branch_1493
subgraph branch_1484["Branch 1484"]
	br1484_19["mb__1098 bool.&&"]

end
block_1492 --> branch_1484
subgraph block_1492["Block 1492"]
	direction TB
	b1492_19["mb__1098 bool.&&"]
	b1492_17["mt__1096 U32_maybeTrue"]
	b1492_18["mf__1097 U32_maybeFalse"]
	b1492_11["eff__1088 push_u32"]
	b1492_9["eff__1090 push_u32"]
	b1492_7["cond__1087 F64_lt"]
	b1492_13["abs__1094 lift_u32"]
	b1492_14["abs__1095 lift_u32"]
	b1492_4["a pop_f64"]
	b1492_3["b pop_f64"]
	b1492_10["arg__1089 1"]
	b1492_8["arg__1091 0"]
	b1492_0[/"Start"\\]
	b1492_17 --> b1492_19
	b1492_18 --> b1492_17
	b1492_11 --> b1492_18
	b1492_9 --> b1492_11
	b1492_7 --> b1492_9
	b1492_13 --> b1492_7
	b1492_14 --> b1492_13
	b1492_4 --> b1492_14
	b1492_3 --> b1492_4
	b1492_10 --> b1492_3
	b1492_8 --> b1492_10
	b1492_0 --> b1492_8
end
subgraph block_1496["Block 1496"]
	direction TB
end
branch_1493 --> block_1496
subgraph block_1487["Block 1487"]
	direction TB
end
phi_1489 --> block_1487
subgraph phi_1489["Phi 1489"]
	p1489_20{{"Sϕ Stack "}}
end
block_1490 --> phi_1489
block_1491 --> phi_1489
subgraph block_1490["Block 1490"]
	direction TB
end
branch_1488 --> block_1490
subgraph branch_1488["Branch 1488"]
	br1488_17["mt__1096 U32_maybeTrue"]

end
branch_1484 --> branch_1488
subgraph block_1491["Block 1491"]
	direction TB
end
branch_1488 --> block_1491

</pre>`;
window.traces["F64_LT"]["unlem_pretty"] = ''
window.traces["F64_LT"]["unlem_pretty"] += `<pre class=''>def b = pop_f64();
def a = pop_f64();
def mt = U32_maybeTrue(F64_lt(a, b));
def mf = U32_maybeFalse(F64_lt(a, b));
if (bool.&&(mt, mf)) {
	push_u32(merge_u(lift_u32(1), lift_u32(0)));
} else {
	if (mt) {
		push_u32(lift_u32(1));
	} else {
		push_u32(lift_u32(0));
	}
}
</pre>`;
window.traces["F64_LT"]["constUnLEM"] = ''
window.traces["F64_LT"]["constUnLEM"] += `<pre class='graph'>---
config:
  layout: elk
---
graph TD
	1[\\"Finish"/]
	0 -. Codeptr Trap Locals Globals Tables Memory Extra .-> 1
	12 -. Stack .-> 1
	12["eff_push__1100 push_u32"]
	21 --> 12
	4 -. Stack .-> 12
	4["a pop_f64"]
	3 -. Stack .-> 4
	3["b pop_f64"]
	0 -. Stack .-> 3
	0[/"Start"\\]
	21["merge__1099 merge_u"]
	13 --> 21
	14 --> 21
	14["abs__1095 lift_u32"]
	8 --> 14
	8["arg__1091 0"]
	13["abs__1094 lift_u32"]
	10 --> 13
	10["arg__1089 1"]
</pre>`;
window.traces["F64_LT"]["chooseMerge"] = ''
window.traces["F64_LT"]["chooseMerge"] += `<pre class='graph'>---
config:
  layout: elk
---
graph TD
	1[\\"Finish"/]
	0 -. Codeptr Trap Locals Globals Tables Memory Extra .-> 1
	12 -. Stack .-> 1
	12["eff_push__1100 push_u32"]
	13 --> 12
	4 -. Stack .-> 12
	4["a pop_f64"]
	3 -. Stack .-> 4
	3["b pop_f64"]
	0 -. Stack .-> 3
	0[/"Start"\\]
	13["abs__1094 lift_u32"]
	10 --> 13
	10["arg__1089 1"]
</pre>`;
window.traces["F64_LT"]["scheduled"] = ''
window.traces["F64_LT"]["scheduled"] += `<pre class=''>def arg__1089 : u32 = 1;
def abs__1094 = lift_u32(arg__1089);
def b = pop_f64();
def a = pop_f64();
def eff_push__1100 = push_u32(abs__1094);
</pre>`;
window.traces["F64_LT"]["pretty"] = ''
window.traces["F64_LT"]["pretty"] += `<pre class=''>def b = pop_f64();
def a = pop_f64();
push_u32(lift_u32(1));
</pre>`;
window.traces["F64_GT"] = {}
window.traces["F64_GT"]["parsed"] = ''
window.traces["F64_GT"]["parsed"] += `<pre class=''>def b = pop_f64();
def a = pop_f64();
def arg__1107 = (b);
def arg__1106 = (a);
def cond__1101 = double.>(arg__1106, arg__1107);
if (cond__1101) {
	def arg__1103 : u32 = 1;
	def eff__1102 = push_u32(arg__1103);
} else {
	def arg__1105 : u32 = 0;
	def eff__1104 = push_u32(arg__1105);
}
// phis: 
</pre>`;
window.traces["F64_GT"]["raw"] = ''
window.traces["F64_GT"]["raw"] += `<pre class='graph'>---
config:
  layout: elk
---
graph TD
	1[\\"Finish"/]
	0 -. Codeptr Trap Locals Globals Tables Memory Extra .-> 1
	12 -. Stack .-> 1
	12{{"Sϕ Stack "}}
	7 --> 12
	11 --> 12
	9 --> 12
	9["eff__1104 push_u32"]
	8 --> 9
	4 -. Stack .-> 9
	4["a pop_f64"]
	3 -. Stack .-> 4
	3["b pop_f64"]
	0 -. Stack .-> 3
	0[/"Start"\\]
	8["arg__1105 0"]
	11["eff__1102 push_u32"]
	10 --> 11
	4 -. Stack .-> 11
	10["arg__1103 1"]
	7["cond__1101 double.>"]
	4 --> 7
	3 --> 7
</pre>`;
window.traces["F64_GT"]["overloadOps"] = ''
window.traces["F64_GT"]["overloadOps"] += `<pre class='graph'>---
config:
  layout: elk
---
graph TD
	1[\\"Finish"/]
	0 -. Codeptr Trap Locals Globals Tables Memory Extra .-> 1
	12 -. Stack .-> 1
	12{{"Sϕ Stack "}}
	7 --> 12
	11 --> 12
	9 --> 12
	9["eff__1104 push_u32"]
	8 --> 9
	4 -. Stack .-> 9
	4["a pop_f64"]
	3 -. Stack .-> 4
	3["b pop_f64"]
	0 -. Stack .-> 3
	0[/"Start"\\]
	8["arg__1105 0"]
	11["eff__1102 push_u32"]
	10 --> 11
	4 -. Stack .-> 11
	10["arg__1103 1"]
	7["cond__1101 F64_gt"]
	4 --> 7
	3 --> 7
</pre>`;
window.traces["F64_GT"]["addAbstractions"] = ''
window.traces["F64_GT"]["addAbstractions"] += `<pre class='graph'>---
config:
  layout: elk
---
graph TD
	1[\\"Finish"/]
	0 -. Codeptr Trap Locals Globals Tables Memory Extra .-> 1
	12 -. Stack .-> 1
	12{{"Sϕ Stack "}}
	7 --> 12
	11 --> 12
	9 --> 12
	9["eff__1104 push_u32"]
	14 --> 9
	4 -. Stack .-> 9
	4["a pop_f64"]
	3 -. Stack .-> 4
	3["b pop_f64"]
	0 -. Stack .-> 3
	0[/"Start"\\]
	14["abs__1109 lift_u32"]
	8 --> 14
	8["arg__1105 0"]
	11["eff__1102 push_u32"]
	13 --> 11
	4 -. Stack .-> 11
	13["abs__1108 lift_u32"]
	10 --> 13
	10["arg__1103 1"]
	7["cond__1101 F64_gt"]
	4 --> 7
	3 --> 7
</pre>`;
window.traces["F64_GT"]["schedulerMermaid"] = ''
window.traces["F64_GT"]["schedulerMermaid"] += `<pre class='graph'>graph TD
subgraph block_1497["Block 1497"]
	direction TB
	b1497_1[\\"Finish"/]
	b1497_11["eff__1102 push_u32"]
	b1497_9["eff__1104 push_u32"]
	b1497_4["a pop_f64"]
	b1497_3["b pop_f64"]
	b1497_13["abs__1108 lift_u32"]
	b1497_14["abs__1109 lift_u32"]
	b1497_10["arg__1103 1"]
	b1497_8["arg__1105 0"]
	b1497_11 --> b1497_1
	b1497_9 --> b1497_11
	b1497_4 --> b1497_9
	b1497_3 --> b1497_4
	b1497_13 --> b1497_3
	b1497_14 --> b1497_13
	b1497_10 --> b1497_14
	b1497_8 --> b1497_10
end
phi_1499 --> block_1497
subgraph phi_1499["Phi 1499"]
	p1499_12{{"Sϕ Stack "}}
end
block_1500 --> phi_1499
block_1501 --> phi_1499
subgraph block_1500["Block 1500"]
	direction TB
	b1500_11["eff__1102 push_u32"]
end
branch_1498 --> block_1500
subgraph branch_1498["Branch 1498"]
	br1498_7["cond__1101 F64_gt"]

end
block_1502 --> branch_1498
subgraph block_1502["Block 1502"]
	direction TB
	b1502_7["cond__1101 F64_gt"]
	b1502_0[/"Start"\\]
	b1502_0 --> b1502_7
end
subgraph block_1501["Block 1501"]
	direction TB
	b1501_9["eff__1104 push_u32"]
end
branch_1498 --> block_1501

</pre>`;
window.traces["F64_GT"]["unLEM"] = ''
window.traces["F64_GT"]["unLEM"] += `<pre class='graph'>---
config:
  layout: elk
---
graph TD
	1[\\"Finish"/]
	0 -. Codeptr Trap Locals Globals Tables Memory Extra .-> 1
	12 -. Stack .-> 1
	12{{"Sϕ Stack "}}
	19 --> 12
	22 --> 12
	20 --> 12
	20{{"Sϕ Stack "}}
	17 --> 20
	11 --> 20
	9 --> 20
	9["eff__1104 push_u32"]
	14 --> 9
	4 -. Stack .-> 9
	4["a pop_f64"]
	3 -. Stack .-> 4
	3["b pop_f64"]
	0 -. Stack .-> 3
	0[/"Start"\\]
	14["abs__1109 lift_u32"]
	8 --> 14
	8["arg__1105 0"]
	11["eff__1102 push_u32"]
	13 --> 11
	4 -. Stack .-> 11
	13["abs__1108 lift_u32"]
	10 --> 13
	10["arg__1103 1"]
	17["mt__1110 U32_maybeTrue"]
	7 --> 17
	7["cond__1101 F64_gt"]
	4 --> 7
	3 --> 7
	22["eff_push__1114 push_u32"]
	21 --> 22
	4 -. Stack .-> 22
	21["merge__1113 merge_u"]
	13 --> 21
	14 --> 21
	19["mb__1112 bool.&&"]
	17 --> 19
	18 --> 19
	18["mf__1111 U32_maybeFalse"]
	7 --> 18
</pre>`;
window.traces["F64_GT"]["unlem_schedule"] = ''
window.traces["F64_GT"]["unlem_schedule"] += `<pre class=''>def b = pop_f64();
def a = pop_f64();
def cond__1101 = F64_gt(a, b);
def mt__1110 = U32_maybeTrue(cond__1101);
def mf__1111 = U32_maybeFalse(cond__1101);
def mb__1112 = bool.&&(mt__1110, mf__1111);
if (mb__1112) {
	def arg__1103 : u32 = 1;
	def abs__1108 = lift_u32(arg__1103);
	def arg__1105 : u32 = 0;
	def abs__1109 = lift_u32(arg__1105);
	def merge__1113 = merge_u(abs__1108, abs__1109);
	def eff_push__1114 = push_u32(merge__1113);
} else {
	if (mt__1110) {
		def arg__1103 : u32 = 1;
		def abs__1108 = lift_u32(arg__1103);
		def eff__1102 = push_u32(abs__1108);
	} else {
		def arg__1105 : u32 = 0;
		def abs__1109 = lift_u32(arg__1105);
		def eff__1104 = push_u32(abs__1109);
	}
// phis: 
}
// phis: 
</pre>`;
window.traces["F64_GT"]["unlem_scheduler"] = ''
window.traces["F64_GT"]["unlem_scheduler"] += `<pre class='graph'>graph TD
subgraph block_1503["Block 1503"]
	direction TB
	b1503_1[\\"Finish"/]
	b1503_22["eff_push__1114 push_u32"]
	b1503_21["merge__1113 merge_u"]
	b1503_22 --> b1503_1
	b1503_21 --> b1503_22
end
phi_1505 --> block_1503
subgraph phi_1505["Phi 1505"]
	p1505_12{{"Sϕ Stack "}}
end
block_1506 --> phi_1505
block_1507 --> phi_1505
subgraph block_1506["Block 1506"]
	direction TB
	b1506_22["eff_push__1114 push_u32"]
	b1506_21["merge__1113 merge_u"]
	b1506_21 --> b1506_22
end
phi_1514 --> block_1506
subgraph phi_1514["Phi 1514"]
	p1514_20{{"Sϕ Stack "}}
end
block_1515 --> phi_1514
block_1516 --> phi_1514
subgraph block_1515["Block 1515"]
	direction TB
end
branch_1513 --> block_1515
subgraph branch_1513["Branch 1513"]
	br1513_17["mt__1110 U32_maybeTrue"]

end
branch_1504 --> branch_1513
subgraph branch_1504["Branch 1504"]
	br1504_19["mb__1112 bool.&&"]

end
block_1512 --> branch_1504
subgraph block_1512["Block 1512"]
	direction TB
	b1512_19["mb__1112 bool.&&"]
	b1512_17["mt__1110 U32_maybeTrue"]
	b1512_18["mf__1111 U32_maybeFalse"]
	b1512_11["eff__1102 push_u32"]
	b1512_9["eff__1104 push_u32"]
	b1512_7["cond__1101 F64_gt"]
	b1512_13["abs__1108 lift_u32"]
	b1512_14["abs__1109 lift_u32"]
	b1512_4["a pop_f64"]
	b1512_3["b pop_f64"]
	b1512_10["arg__1103 1"]
	b1512_8["arg__1105 0"]
	b1512_0[/"Start"\\]
	b1512_17 --> b1512_19
	b1512_18 --> b1512_17
	b1512_11 --> b1512_18
	b1512_9 --> b1512_11
	b1512_7 --> b1512_9
	b1512_13 --> b1512_7
	b1512_14 --> b1512_13
	b1512_4 --> b1512_14
	b1512_3 --> b1512_4
	b1512_10 --> b1512_3
	b1512_8 --> b1512_10
	b1512_0 --> b1512_8
end
subgraph block_1516["Block 1516"]
	direction TB
end
branch_1513 --> block_1516
subgraph block_1507["Block 1507"]
	direction TB
end
phi_1509 --> block_1507
subgraph phi_1509["Phi 1509"]
	p1509_20{{"Sϕ Stack "}}
end
block_1510 --> phi_1509
block_1511 --> phi_1509
subgraph block_1510["Block 1510"]
	direction TB
end
branch_1508 --> block_1510
subgraph branch_1508["Branch 1508"]
	br1508_17["mt__1110 U32_maybeTrue"]

end
branch_1504 --> branch_1508
subgraph block_1511["Block 1511"]
	direction TB
end
branch_1508 --> block_1511

</pre>`;
window.traces["F64_GT"]["unlem_pretty"] = ''
window.traces["F64_GT"]["unlem_pretty"] += `<pre class=''>def b = pop_f64();
def a = pop_f64();
def mt = U32_maybeTrue(F64_gt(a, b));
def mf = U32_maybeFalse(F64_gt(a, b));
if (bool.&&(mt, mf)) {
	push_u32(merge_u(lift_u32(1), lift_u32(0)));
} else {
	if (mt) {
		push_u32(lift_u32(1));
	} else {
		push_u32(lift_u32(0));
	}
}
</pre>`;
window.traces["F64_GT"]["constUnLEM"] = ''
window.traces["F64_GT"]["constUnLEM"] += `<pre class='graph'>---
config:
  layout: elk
---
graph TD
	1[\\"Finish"/]
	0 -. Codeptr Trap Locals Globals Tables Memory Extra .-> 1
	12 -. Stack .-> 1
	12["eff_push__1114 push_u32"]
	21 --> 12
	4 -. Stack .-> 12
	4["a pop_f64"]
	3 -. Stack .-> 4
	3["b pop_f64"]
	0 -. Stack .-> 3
	0[/"Start"\\]
	21["merge__1113 merge_u"]
	13 --> 21
	14 --> 21
	14["abs__1109 lift_u32"]
	8 --> 14
	8["arg__1105 0"]
	13["abs__1108 lift_u32"]
	10 --> 13
	10["arg__1103 1"]
</pre>`;
window.traces["F64_GT"]["chooseMerge"] = ''
window.traces["F64_GT"]["chooseMerge"] += `<pre class='graph'>---
config:
  layout: elk
---
graph TD
	1[\\"Finish"/]
	0 -. Codeptr Trap Locals Globals Tables Memory Extra .-> 1
	12 -. Stack .-> 1
	12["eff_push__1114 push_u32"]
	13 --> 12
	4 -. Stack .-> 12
	4["a pop_f64"]
	3 -. Stack .-> 4
	3["b pop_f64"]
	0 -. Stack .-> 3
	0[/"Start"\\]
	13["abs__1108 lift_u32"]
	10 --> 13
	10["arg__1103 1"]
</pre>`;
window.traces["F64_GT"]["scheduled"] = ''
window.traces["F64_GT"]["scheduled"] += `<pre class=''>def arg__1103 : u32 = 1;
def abs__1108 = lift_u32(arg__1103);
def b = pop_f64();
def a = pop_f64();
def eff_push__1114 = push_u32(abs__1108);
</pre>`;
window.traces["F64_GT"]["pretty"] = ''
window.traces["F64_GT"]["pretty"] += `<pre class=''>def b = pop_f64();
def a = pop_f64();
push_u32(lift_u32(1));
</pre>`;
window.traces["F64_LE"] = {}
window.traces["F64_LE"]["parsed"] = ''
window.traces["F64_LE"]["parsed"] += `<pre class=''>def b = pop_f64();
def a = pop_f64();
def arg__1121 = (b);
def arg__1120 = (a);
def cond__1115 = double.<=(arg__1120, arg__1121);
if (cond__1115) {
	def arg__1117 : u32 = 1;
	def eff__1116 = push_u32(arg__1117);
} else {
	def arg__1119 : u32 = 0;
	def eff__1118 = push_u32(arg__1119);
}
// phis: 
</pre>`;
window.traces["F64_LE"]["raw"] = ''
window.traces["F64_LE"]["raw"] += `<pre class='graph'>---
config:
  layout: elk
---
graph TD
	1[\\"Finish"/]
	0 -. Codeptr Trap Locals Globals Tables Memory Extra .-> 1
	12 -. Stack .-> 1
	12{{"Sϕ Stack "}}
	7 --> 12
	11 --> 12
	9 --> 12
	9["eff__1118 push_u32"]
	8 --> 9
	4 -. Stack .-> 9
	4["a pop_f64"]
	3 -. Stack .-> 4
	3["b pop_f64"]
	0 -. Stack .-> 3
	0[/"Start"\\]
	8["arg__1119 0"]
	11["eff__1116 push_u32"]
	10 --> 11
	4 -. Stack .-> 11
	10["arg__1117 1"]
	7["cond__1115 double.<="]
	4 --> 7
	3 --> 7
</pre>`;
window.traces["F64_LE"]["overloadOps"] = ''
window.traces["F64_LE"]["overloadOps"] += `<pre class='graph'>---
config:
  layout: elk
---
graph TD
	1[\\"Finish"/]
	0 -. Codeptr Trap Locals Globals Tables Memory Extra .-> 1
	12 -. Stack .-> 1
	12{{"Sϕ Stack "}}
	7 --> 12
	11 --> 12
	9 --> 12
	9["eff__1118 push_u32"]
	8 --> 9
	4 -. Stack .-> 9
	4["a pop_f64"]
	3 -. Stack .-> 4
	3["b pop_f64"]
	0 -. Stack .-> 3
	0[/"Start"\\]
	8["arg__1119 0"]
	11["eff__1116 push_u32"]
	10 --> 11
	4 -. Stack .-> 11
	10["arg__1117 1"]
	7["cond__1115 F64_lte"]
	4 --> 7
	3 --> 7
</pre>`;
window.traces["F64_LE"]["addAbstractions"] = ''
window.traces["F64_LE"]["addAbstractions"] += `<pre class='graph'>---
config:
  layout: elk
---
graph TD
	1[\\"Finish"/]
	0 -. Codeptr Trap Locals Globals Tables Memory Extra .-> 1
	12 -. Stack .-> 1
	12{{"Sϕ Stack "}}
	7 --> 12
	11 --> 12
	9 --> 12
	9["eff__1118 push_u32"]
	14 --> 9
	4 -. Stack .-> 9
	4["a pop_f64"]
	3 -. Stack .-> 4
	3["b pop_f64"]
	0 -. Stack .-> 3
	0[/"Start"\\]
	14["abs__1123 lift_u32"]
	8 --> 14
	8["arg__1119 0"]
	11["eff__1116 push_u32"]
	13 --> 11
	4 -. Stack .-> 11
	13["abs__1122 lift_u32"]
	10 --> 13
	10["arg__1117 1"]
	7["cond__1115 F64_lte"]
	4 --> 7
	3 --> 7
</pre>`;
window.traces["F64_LE"]["schedulerMermaid"] = ''
window.traces["F64_LE"]["schedulerMermaid"] += `<pre class='graph'>graph TD
subgraph block_1517["Block 1517"]
	direction TB
	b1517_1[\\"Finish"/]
	b1517_11["eff__1116 push_u32"]
	b1517_9["eff__1118 push_u32"]
	b1517_4["a pop_f64"]
	b1517_3["b pop_f64"]
	b1517_13["abs__1122 lift_u32"]
	b1517_14["abs__1123 lift_u32"]
	b1517_10["arg__1117 1"]
	b1517_8["arg__1119 0"]
	b1517_11 --> b1517_1
	b1517_9 --> b1517_11
	b1517_4 --> b1517_9
	b1517_3 --> b1517_4
	b1517_13 --> b1517_3
	b1517_14 --> b1517_13
	b1517_10 --> b1517_14
	b1517_8 --> b1517_10
end
phi_1519 --> block_1517
subgraph phi_1519["Phi 1519"]
	p1519_12{{"Sϕ Stack "}}
end
block_1520 --> phi_1519
block_1521 --> phi_1519
subgraph block_1520["Block 1520"]
	direction TB
	b1520_11["eff__1116 push_u32"]
end
branch_1518 --> block_1520
subgraph branch_1518["Branch 1518"]
	br1518_7["cond__1115 F64_lte"]

end
block_1522 --> branch_1518
subgraph block_1522["Block 1522"]
	direction TB
	b1522_7["cond__1115 F64_lte"]
	b1522_0[/"Start"\\]
	b1522_0 --> b1522_7
end
subgraph block_1521["Block 1521"]
	direction TB
	b1521_9["eff__1118 push_u32"]
end
branch_1518 --> block_1521

</pre>`;
window.traces["F64_LE"]["unLEM"] = ''
window.traces["F64_LE"]["unLEM"] += `<pre class='graph'>---
config:
  layout: elk
---
graph TD
	1[\\"Finish"/]
	0 -. Codeptr Trap Locals Globals Tables Memory Extra .-> 1
	12 -. Stack .-> 1
	12{{"Sϕ Stack "}}
	19 --> 12
	22 --> 12
	20 --> 12
	20{{"Sϕ Stack "}}
	17 --> 20
	11 --> 20
	9 --> 20
	9["eff__1118 push_u32"]
	14 --> 9
	4 -. Stack .-> 9
	4["a pop_f64"]
	3 -. Stack .-> 4
	3["b pop_f64"]
	0 -. Stack .-> 3
	0[/"Start"\\]
	14["abs__1123 lift_u32"]
	8 --> 14
	8["arg__1119 0"]
	11["eff__1116 push_u32"]
	13 --> 11
	4 -. Stack .-> 11
	13["abs__1122 lift_u32"]
	10 --> 13
	10["arg__1117 1"]
	17["mt__1124 U32_maybeTrue"]
	7 --> 17
	7["cond__1115 F64_lte"]
	4 --> 7
	3 --> 7
	22["eff_push__1128 push_u32"]
	21 --> 22
	4 -. Stack .-> 22
	21["merge__1127 merge_u"]
	13 --> 21
	14 --> 21
	19["mb__1126 bool.&&"]
	17 --> 19
	18 --> 19
	18["mf__1125 U32_maybeFalse"]
	7 --> 18
</pre>`;
window.traces["F64_LE"]["unlem_schedule"] = ''
window.traces["F64_LE"]["unlem_schedule"] += `<pre class=''>def b = pop_f64();
def a = pop_f64();
def cond__1115 = F64_lte(a, b);
def mt__1124 = U32_maybeTrue(cond__1115);
def mf__1125 = U32_maybeFalse(cond__1115);
def mb__1126 = bool.&&(mt__1124, mf__1125);
if (mb__1126) {
	def arg__1117 : u32 = 1;
	def abs__1122 = lift_u32(arg__1117);
	def arg__1119 : u32 = 0;
	def abs__1123 = lift_u32(arg__1119);
	def merge__1127 = merge_u(abs__1122, abs__1123);
	def eff_push__1128 = push_u32(merge__1127);
} else {
	if (mt__1124) {
		def arg__1117 : u32 = 1;
		def abs__1122 = lift_u32(arg__1117);
		def eff__1116 = push_u32(abs__1122);
	} else {
		def arg__1119 : u32 = 0;
		def abs__1123 = lift_u32(arg__1119);
		def eff__1118 = push_u32(abs__1123);
	}
// phis: 
}
// phis: 
</pre>`;
window.traces["F64_LE"]["unlem_scheduler"] = ''
window.traces["F64_LE"]["unlem_scheduler"] += `<pre class='graph'>graph TD
subgraph block_1523["Block 1523"]
	direction TB
	b1523_1[\\"Finish"/]
	b1523_22["eff_push__1128 push_u32"]
	b1523_21["merge__1127 merge_u"]
	b1523_22 --> b1523_1
	b1523_21 --> b1523_22
end
phi_1525 --> block_1523
subgraph phi_1525["Phi 1525"]
	p1525_12{{"Sϕ Stack "}}
end
block_1526 --> phi_1525
block_1527 --> phi_1525
subgraph block_1526["Block 1526"]
	direction TB
	b1526_22["eff_push__1128 push_u32"]
	b1526_21["merge__1127 merge_u"]
	b1526_21 --> b1526_22
end
phi_1534 --> block_1526
subgraph phi_1534["Phi 1534"]
	p1534_20{{"Sϕ Stack "}}
end
block_1535 --> phi_1534
block_1536 --> phi_1534
subgraph block_1535["Block 1535"]
	direction TB
end
branch_1533 --> block_1535
subgraph branch_1533["Branch 1533"]
	br1533_17["mt__1124 U32_maybeTrue"]

end
branch_1524 --> branch_1533
subgraph branch_1524["Branch 1524"]
	br1524_19["mb__1126 bool.&&"]

end
block_1532 --> branch_1524
subgraph block_1532["Block 1532"]
	direction TB
	b1532_19["mb__1126 bool.&&"]
	b1532_17["mt__1124 U32_maybeTrue"]
	b1532_18["mf__1125 U32_maybeFalse"]
	b1532_11["eff__1116 push_u32"]
	b1532_9["eff__1118 push_u32"]
	b1532_7["cond__1115 F64_lte"]
	b1532_13["abs__1122 lift_u32"]
	b1532_14["abs__1123 lift_u32"]
	b1532_4["a pop_f64"]
	b1532_3["b pop_f64"]
	b1532_10["arg__1117 1"]
	b1532_8["arg__1119 0"]
	b1532_0[/"Start"\\]
	b1532_17 --> b1532_19
	b1532_18 --> b1532_17
	b1532_11 --> b1532_18
	b1532_9 --> b1532_11
	b1532_7 --> b1532_9
	b1532_13 --> b1532_7
	b1532_14 --> b1532_13
	b1532_4 --> b1532_14
	b1532_3 --> b1532_4
	b1532_10 --> b1532_3
	b1532_8 --> b1532_10
	b1532_0 --> b1532_8
end
subgraph block_1536["Block 1536"]
	direction TB
end
branch_1533 --> block_1536
subgraph block_1527["Block 1527"]
	direction TB
end
phi_1529 --> block_1527
subgraph phi_1529["Phi 1529"]
	p1529_20{{"Sϕ Stack "}}
end
block_1530 --> phi_1529
block_1531 --> phi_1529
subgraph block_1530["Block 1530"]
	direction TB
end
branch_1528 --> block_1530
subgraph branch_1528["Branch 1528"]
	br1528_17["mt__1124 U32_maybeTrue"]

end
branch_1524 --> branch_1528
subgraph block_1531["Block 1531"]
	direction TB
end
branch_1528 --> block_1531

</pre>`;
window.traces["F64_LE"]["unlem_pretty"] = ''
window.traces["F64_LE"]["unlem_pretty"] += `<pre class=''>def b = pop_f64();
def a = pop_f64();
def mt = U32_maybeTrue(F64_lte(a, b));
def mf = U32_maybeFalse(F64_lte(a, b));
if (bool.&&(mt, mf)) {
	push_u32(merge_u(lift_u32(1), lift_u32(0)));
} else {
	if (mt) {
		push_u32(lift_u32(1));
	} else {
		push_u32(lift_u32(0));
	}
}
</pre>`;
window.traces["F64_LE"]["constUnLEM"] = ''
window.traces["F64_LE"]["constUnLEM"] += `<pre class='graph'>---
config:
  layout: elk
---
graph TD
	1[\\"Finish"/]
	0 -. Codeptr Trap Locals Globals Tables Memory Extra .-> 1
	12 -. Stack .-> 1
	12["eff_push__1128 push_u32"]
	21 --> 12
	4 -. Stack .-> 12
	4["a pop_f64"]
	3 -. Stack .-> 4
	3["b pop_f64"]
	0 -. Stack .-> 3
	0[/"Start"\\]
	21["merge__1127 merge_u"]
	13 --> 21
	14 --> 21
	14["abs__1123 lift_u32"]
	8 --> 14
	8["arg__1119 0"]
	13["abs__1122 lift_u32"]
	10 --> 13
	10["arg__1117 1"]
</pre>`;
window.traces["F64_LE"]["chooseMerge"] = ''
window.traces["F64_LE"]["chooseMerge"] += `<pre class='graph'>---
config:
  layout: elk
---
graph TD
	1[\\"Finish"/]
	0 -. Codeptr Trap Locals Globals Tables Memory Extra .-> 1
	12 -. Stack .-> 1
	12["eff_push__1128 push_u32"]
	13 --> 12
	4 -. Stack .-> 12
	4["a pop_f64"]
	3 -. Stack .-> 4
	3["b pop_f64"]
	0 -. Stack .-> 3
	0[/"Start"\\]
	13["abs__1122 lift_u32"]
	10 --> 13
	10["arg__1117 1"]
</pre>`;
window.traces["F64_LE"]["scheduled"] = ''
window.traces["F64_LE"]["scheduled"] += `<pre class=''>def arg__1117 : u32 = 1;
def abs__1122 = lift_u32(arg__1117);
def b = pop_f64();
def a = pop_f64();
def eff_push__1128 = push_u32(abs__1122);
</pre>`;
window.traces["F64_LE"]["pretty"] = ''
window.traces["F64_LE"]["pretty"] += `<pre class=''>def b = pop_f64();
def a = pop_f64();
push_u32(lift_u32(1));
</pre>`;
window.traces["F64_GE"] = {}
window.traces["F64_GE"]["parsed"] = ''
window.traces["F64_GE"]["parsed"] += `<pre class=''>def b = pop_f64();
def a = pop_f64();
def arg__1135 = (b);
def arg__1134 = (a);
def cond__1129 = double.>=(arg__1134, arg__1135);
if (cond__1129) {
	def arg__1131 : u32 = 1;
	def eff__1130 = push_u32(arg__1131);
} else {
	def arg__1133 : u32 = 0;
	def eff__1132 = push_u32(arg__1133);
}
// phis: 
</pre>`;
window.traces["F64_GE"]["raw"] = ''
window.traces["F64_GE"]["raw"] += `<pre class='graph'>---
config:
  layout: elk
---
graph TD
	1[\\"Finish"/]
	0 -. Codeptr Trap Locals Globals Tables Memory Extra .-> 1
	12 -. Stack .-> 1
	12{{"Sϕ Stack "}}
	7 --> 12
	11 --> 12
	9 --> 12
	9["eff__1132 push_u32"]
	8 --> 9
	4 -. Stack .-> 9
	4["a pop_f64"]
	3 -. Stack .-> 4
	3["b pop_f64"]
	0 -. Stack .-> 3
	0[/"Start"\\]
	8["arg__1133 0"]
	11["eff__1130 push_u32"]
	10 --> 11
	4 -. Stack .-> 11
	10["arg__1131 1"]
	7["cond__1129 double.>="]
	4 --> 7
	3 --> 7
</pre>`;
window.traces["F64_GE"]["overloadOps"] = ''
window.traces["F64_GE"]["overloadOps"] += `<pre class='graph'>---
config:
  layout: elk
---
graph TD
	1[\\"Finish"/]
	0 -. Codeptr Trap Locals Globals Tables Memory Extra .-> 1
	12 -. Stack .-> 1
	12{{"Sϕ Stack "}}
	7 --> 12
	11 --> 12
	9 --> 12
	9["eff__1132 push_u32"]
	8 --> 9
	4 -. Stack .-> 9
	4["a pop_f64"]
	3 -. Stack .-> 4
	3["b pop_f64"]
	0 -. Stack .-> 3
	0[/"Start"\\]
	8["arg__1133 0"]
	11["eff__1130 push_u32"]
	10 --> 11
	4 -. Stack .-> 11
	10["arg__1131 1"]
	7["cond__1129 F64_gte"]
	4 --> 7
	3 --> 7
</pre>`;
window.traces["F64_GE"]["addAbstractions"] = ''
window.traces["F64_GE"]["addAbstractions"] += `<pre class='graph'>---
config:
  layout: elk
---
graph TD
	1[\\"Finish"/]
	0 -. Codeptr Trap Locals Globals Tables Memory Extra .-> 1
	12 -. Stack .-> 1
	12{{"Sϕ Stack "}}
	7 --> 12
	11 --> 12
	9 --> 12
	9["eff__1132 push_u32"]
	14 --> 9
	4 -. Stack .-> 9
	4["a pop_f64"]
	3 -. Stack .-> 4
	3["b pop_f64"]
	0 -. Stack .-> 3
	0[/"Start"\\]
	14["abs__1137 lift_u32"]
	8 --> 14
	8["arg__1133 0"]
	11["eff__1130 push_u32"]
	13 --> 11
	4 -. Stack .-> 11
	13["abs__1136 lift_u32"]
	10 --> 13
	10["arg__1131 1"]
	7["cond__1129 F64_gte"]
	4 --> 7
	3 --> 7
</pre>`;
window.traces["F64_GE"]["schedulerMermaid"] = ''
window.traces["F64_GE"]["schedulerMermaid"] += `<pre class='graph'>graph TD
subgraph block_1537["Block 1537"]
	direction TB
	b1537_1[\\"Finish"/]
	b1537_11["eff__1130 push_u32"]
	b1537_9["eff__1132 push_u32"]
	b1537_4["a pop_f64"]
	b1537_3["b pop_f64"]
	b1537_13["abs__1136 lift_u32"]
	b1537_14["abs__1137 lift_u32"]
	b1537_10["arg__1131 1"]
	b1537_8["arg__1133 0"]
	b1537_11 --> b1537_1
	b1537_9 --> b1537_11
	b1537_4 --> b1537_9
	b1537_3 --> b1537_4
	b1537_13 --> b1537_3
	b1537_14 --> b1537_13
	b1537_10 --> b1537_14
	b1537_8 --> b1537_10
end
phi_1539 --> block_1537
subgraph phi_1539["Phi 1539"]
	p1539_12{{"Sϕ Stack "}}
end
block_1540 --> phi_1539
block_1541 --> phi_1539
subgraph block_1540["Block 1540"]
	direction TB
	b1540_11["eff__1130 push_u32"]
end
branch_1538 --> block_1540
subgraph branch_1538["Branch 1538"]
	br1538_7["cond__1129 F64_gte"]

end
block_1542 --> branch_1538
subgraph block_1542["Block 1542"]
	direction TB
	b1542_7["cond__1129 F64_gte"]
	b1542_0[/"Start"\\]
	b1542_0 --> b1542_7
end
subgraph block_1541["Block 1541"]
	direction TB
	b1541_9["eff__1132 push_u32"]
end
branch_1538 --> block_1541

</pre>`;
window.traces["F64_GE"]["unLEM"] = ''
window.traces["F64_GE"]["unLEM"] += `<pre class='graph'>---
config:
  layout: elk
---
graph TD
	1[\\"Finish"/]
	0 -. Codeptr Trap Locals Globals Tables Memory Extra .-> 1
	12 -. Stack .-> 1
	12{{"Sϕ Stack "}}
	19 --> 12
	22 --> 12
	20 --> 12
	20{{"Sϕ Stack "}}
	17 --> 20
	11 --> 20
	9 --> 20
	9["eff__1132 push_u32"]
	14 --> 9
	4 -. Stack .-> 9
	4["a pop_f64"]
	3 -. Stack .-> 4
	3["b pop_f64"]
	0 -. Stack .-> 3
	0[/"Start"\\]
	14["abs__1137 lift_u32"]
	8 --> 14
	8["arg__1133 0"]
	11["eff__1130 push_u32"]
	13 --> 11
	4 -. Stack .-> 11
	13["abs__1136 lift_u32"]
	10 --> 13
	10["arg__1131 1"]
	17["mt__1138 U32_maybeTrue"]
	7 --> 17
	7["cond__1129 F64_gte"]
	4 --> 7
	3 --> 7
	22["eff_push__1142 push_u32"]
	21 --> 22
	4 -. Stack .-> 22
	21["merge__1141 merge_u"]
	13 --> 21
	14 --> 21
	19["mb__1140 bool.&&"]
	17 --> 19
	18 --> 19
	18["mf__1139 U32_maybeFalse"]
	7 --> 18
</pre>`;
window.traces["F64_GE"]["unlem_schedule"] = ''
window.traces["F64_GE"]["unlem_schedule"] += `<pre class=''>def b = pop_f64();
def a = pop_f64();
def cond__1129 = F64_gte(a, b);
def mt__1138 = U32_maybeTrue(cond__1129);
def mf__1139 = U32_maybeFalse(cond__1129);
def mb__1140 = bool.&&(mt__1138, mf__1139);
if (mb__1140) {
	def arg__1131 : u32 = 1;
	def abs__1136 = lift_u32(arg__1131);
	def arg__1133 : u32 = 0;
	def abs__1137 = lift_u32(arg__1133);
	def merge__1141 = merge_u(abs__1136, abs__1137);
	def eff_push__1142 = push_u32(merge__1141);
} else {
	if (mt__1138) {
		def arg__1131 : u32 = 1;
		def abs__1136 = lift_u32(arg__1131);
		def eff__1130 = push_u32(abs__1136);
	} else {
		def arg__1133 : u32 = 0;
		def abs__1137 = lift_u32(arg__1133);
		def eff__1132 = push_u32(abs__1137);
	}
// phis: 
}
// phis: 
</pre>`;
window.traces["F64_GE"]["unlem_scheduler"] = ''
window.traces["F64_GE"]["unlem_scheduler"] += `<pre class='graph'>graph TD
subgraph block_1543["Block 1543"]
	direction TB
	b1543_1[\\"Finish"/]
	b1543_22["eff_push__1142 push_u32"]
	b1543_21["merge__1141 merge_u"]
	b1543_22 --> b1543_1
	b1543_21 --> b1543_22
end
phi_1545 --> block_1543
subgraph phi_1545["Phi 1545"]
	p1545_12{{"Sϕ Stack "}}
end
block_1546 --> phi_1545
block_1547 --> phi_1545
subgraph block_1546["Block 1546"]
	direction TB
	b1546_22["eff_push__1142 push_u32"]
	b1546_21["merge__1141 merge_u"]
	b1546_21 --> b1546_22
end
phi_1554 --> block_1546
subgraph phi_1554["Phi 1554"]
	p1554_20{{"Sϕ Stack "}}
end
block_1555 --> phi_1554
block_1556 --> phi_1554
subgraph block_1555["Block 1555"]
	direction TB
end
branch_1553 --> block_1555
subgraph branch_1553["Branch 1553"]
	br1553_17["mt__1138 U32_maybeTrue"]

end
branch_1544 --> branch_1553
subgraph branch_1544["Branch 1544"]
	br1544_19["mb__1140 bool.&&"]

end
block_1552 --> branch_1544
subgraph block_1552["Block 1552"]
	direction TB
	b1552_19["mb__1140 bool.&&"]
	b1552_17["mt__1138 U32_maybeTrue"]
	b1552_18["mf__1139 U32_maybeFalse"]
	b1552_11["eff__1130 push_u32"]
	b1552_9["eff__1132 push_u32"]
	b1552_7["cond__1129 F64_gte"]
	b1552_13["abs__1136 lift_u32"]
	b1552_14["abs__1137 lift_u32"]
	b1552_4["a pop_f64"]
	b1552_3["b pop_f64"]
	b1552_10["arg__1131 1"]
	b1552_8["arg__1133 0"]
	b1552_0[/"Start"\\]
	b1552_17 --> b1552_19
	b1552_18 --> b1552_17
	b1552_11 --> b1552_18
	b1552_9 --> b1552_11
	b1552_7 --> b1552_9
	b1552_13 --> b1552_7
	b1552_14 --> b1552_13
	b1552_4 --> b1552_14
	b1552_3 --> b1552_4
	b1552_10 --> b1552_3
	b1552_8 --> b1552_10
	b1552_0 --> b1552_8
end
subgraph block_1556["Block 1556"]
	direction TB
end
branch_1553 --> block_1556
subgraph block_1547["Block 1547"]
	direction TB
end
phi_1549 --> block_1547
subgraph phi_1549["Phi 1549"]
	p1549_20{{"Sϕ Stack "}}
end
block_1550 --> phi_1549
block_1551 --> phi_1549
subgraph block_1550["Block 1550"]
	direction TB
end
branch_1548 --> block_1550
subgraph branch_1548["Branch 1548"]
	br1548_17["mt__1138 U32_maybeTrue"]

end
branch_1544 --> branch_1548
subgraph block_1551["Block 1551"]
	direction TB
end
branch_1548 --> block_1551

</pre>`;
window.traces["F64_GE"]["unlem_pretty"] = ''
window.traces["F64_GE"]["unlem_pretty"] += `<pre class=''>def b = pop_f64();
def a = pop_f64();
def mt = U32_maybeTrue(F64_gte(a, b));
def mf = U32_maybeFalse(F64_gte(a, b));
if (bool.&&(mt, mf)) {
	push_u32(merge_u(lift_u32(1), lift_u32(0)));
} else {
	if (mt) {
		push_u32(lift_u32(1));
	} else {
		push_u32(lift_u32(0));
	}
}
</pre>`;
window.traces["F64_GE"]["constUnLEM"] = ''
window.traces["F64_GE"]["constUnLEM"] += `<pre class='graph'>---
config:
  layout: elk
---
graph TD
	1[\\"Finish"/]
	0 -. Codeptr Trap Locals Globals Tables Memory Extra .-> 1
	12 -. Stack .-> 1
	12["eff_push__1142 push_u32"]
	21 --> 12
	4 -. Stack .-> 12
	4["a pop_f64"]
	3 -. Stack .-> 4
	3["b pop_f64"]
	0 -. Stack .-> 3
	0[/"Start"\\]
	21["merge__1141 merge_u"]
	13 --> 21
	14 --> 21
	14["abs__1137 lift_u32"]
	8 --> 14
	8["arg__1133 0"]
	13["abs__1136 lift_u32"]
	10 --> 13
	10["arg__1131 1"]
</pre>`;
window.traces["F64_GE"]["chooseMerge"] = ''
window.traces["F64_GE"]["chooseMerge"] += `<pre class='graph'>---
config:
  layout: elk
---
graph TD
	1[\\"Finish"/]
	0 -. Codeptr Trap Locals Globals Tables Memory Extra .-> 1
	12 -. Stack .-> 1
	12["eff_push__1142 push_u32"]
	13 --> 12
	4 -. Stack .-> 12
	4["a pop_f64"]
	3 -. Stack .-> 4
	3["b pop_f64"]
	0 -. Stack .-> 3
	0[/"Start"\\]
	13["abs__1136 lift_u32"]
	10 --> 13
	10["arg__1131 1"]
</pre>`;
window.traces["F64_GE"]["scheduled"] = ''
window.traces["F64_GE"]["scheduled"] += `<pre class=''>def arg__1131 : u32 = 1;
def abs__1136 = lift_u32(arg__1131);
def b = pop_f64();
def a = pop_f64();
def eff_push__1142 = push_u32(abs__1136);
</pre>`;
window.traces["F64_GE"]["pretty"] = ''
window.traces["F64_GE"]["pretty"] += `<pre class=''>def b = pop_f64();
def a = pop_f64();
push_u32(lift_u32(1));
</pre>`;
window.traces["I32_CLZ"] = {}
window.traces["I32_CLZ"]["parsed"] = ''
window.traces["I32_CLZ"]["parsed"] += `<pre class=''>def a = pop_u32();
def arg__1145 = (a);
def r = U32_clz(arg__1145);
def arg__1144 = (r);
def eff__1143 = push_u32(arg__1144);
</pre>`;
window.traces["I32_CLZ"]["raw"] = ''
window.traces["I32_CLZ"]["raw"] += `<pre class='graph'>---
config:
  layout: elk
---
graph TD
	1[\\"Finish"/]
	0 -. Codeptr Trap Locals Globals Tables Memory Extra .-> 1
	7 -. Stack .-> 1
	7["eff__1143 push_u32"]
	5 --> 7
	3 -. Stack .-> 7
	3["a pop_u32"]
	0 -. Stack .-> 3
	0[/"Start"\\]
	5["r U32_clz"]
	3 --> 5
</pre>`;
window.traces["I32_CLZ"]["overloadOps"] = ''
window.traces["I32_CLZ"]["overloadOps"] += `<pre class='graph'>---
config:
  layout: elk
---
graph TD
	1[\\"Finish"/]
	0 -. Codeptr Trap Locals Globals Tables Memory Extra .-> 1
	7 -. Stack .-> 1
	7["eff__1143 push_u32"]
	5 --> 7
	3 -. Stack .-> 7
	3["a pop_u32"]
	0 -. Stack .-> 3
	0[/"Start"\\]
	5["r U32_clz"]
	3 --> 5
</pre>`;
window.traces["I32_CLZ"]["addAbstractions"] = ''
window.traces["I32_CLZ"]["addAbstractions"] += `<pre class='graph'>---
config:
  layout: elk
---
graph TD
	1[\\"Finish"/]
	0 -. Codeptr Trap Locals Globals Tables Memory Extra .-> 1
	7 -. Stack .-> 1
	7["eff__1143 push_u32"]
	5 --> 7
	3 -. Stack .-> 7
	3["a pop_u32"]
	0 -. Stack .-> 3
	0[/"Start"\\]
	5["r U32_clz"]
	3 --> 5
</pre>`;
window.traces["I32_CLZ"]["schedulerMermaid"] = ''
window.traces["I32_CLZ"]["schedulerMermaid"] += `<pre class='graph'>graph TD
subgraph block_1557["Block 1557"]
	direction TB
	b1557_1[\\"Finish"/]
	b1557_7["eff__1143 push_u32"]
	b1557_5["r U32_clz"]
	b1557_3["a pop_u32"]
	b1557_0[/"Start"\\]
	b1557_7 --> b1557_1
	b1557_5 --> b1557_7
	b1557_3 --> b1557_5
	b1557_0 --> b1557_3
end

</pre>`;
window.traces["I32_CLZ"]["unLEM"] = ''
window.traces["I32_CLZ"]["unLEM"] += `<pre class='graph'>---
config:
  layout: elk
---
graph TD
	1[\\"Finish"/]
	0 -. Codeptr Trap Locals Globals Tables Memory Extra .-> 1
	7 -. Stack .-> 1
	7["eff__1143 push_u32"]
	5 --> 7
	3 -. Stack .-> 7
	3["a pop_u32"]
	0 -. Stack .-> 3
	0[/"Start"\\]
	5["r U32_clz"]
	3 --> 5
</pre>`;
window.traces["I32_CLZ"]["unlem_schedule"] = ''
window.traces["I32_CLZ"]["unlem_schedule"] += `<pre class=''>def a = pop_u32();
def r = U32_clz(a);
def eff__1143 = push_u32(r);
</pre>`;
window.traces["I32_CLZ"]["unlem_scheduler"] = ''
window.traces["I32_CLZ"]["unlem_scheduler"] += `<pre class='graph'>graph TD
subgraph block_1558["Block 1558"]
	direction TB
	b1558_1[\\"Finish"/]
	b1558_7["eff__1143 push_u32"]
	b1558_5["r U32_clz"]
	b1558_3["a pop_u32"]
	b1558_0[/"Start"\\]
	b1558_7 --> b1558_1
	b1558_5 --> b1558_7
	b1558_3 --> b1558_5
	b1558_0 --> b1558_3
end

</pre>`;
window.traces["I32_CLZ"]["unlem_pretty"] = ''
window.traces["I32_CLZ"]["unlem_pretty"] += `<pre class=''>def a = pop_u32();
push_u32(U32_clz(a));
</pre>`;
window.traces["I32_CLZ"]["constUnLEM"] = ''
window.traces["I32_CLZ"]["constUnLEM"] += `<pre class='graph'>---
config:
  layout: elk
---
graph TD
	1[\\"Finish"/]
	0 -. Codeptr Trap Locals Globals Tables Memory Extra .-> 1
	7 -. Stack .-> 1
	7["eff__1143 push_u32"]
	5 --> 7
	3 -. Stack .-> 7
	3["a pop_u32"]
	0 -. Stack .-> 3
	0[/"Start"\\]
	5["r U32_clz"]
	3 --> 5
</pre>`;
window.traces["I32_CLZ"]["chooseMerge"] = ''
window.traces["I32_CLZ"]["chooseMerge"] += `<pre class='graph'>---
config:
  layout: elk
---
graph TD
	1[\\"Finish"/]
	0 -. Codeptr Trap Locals Globals Tables Memory Extra .-> 1
	7 -. Stack .-> 1
	7["eff__1143 push_u32"]
	5 --> 7
	3 -. Stack .-> 7
	3["a pop_u32"]
	0 -. Stack .-> 3
	0[/"Start"\\]
	5["r U32_clz"]
	3 --> 5
</pre>`;
window.traces["I32_CLZ"]["scheduled"] = ''
window.traces["I32_CLZ"]["scheduled"] += `<pre class=''>def a = pop_u32();
def r = U32_clz(a);
def eff__1143 = push_u32(r);
</pre>`;
window.traces["I32_CLZ"]["pretty"] = ''
window.traces["I32_CLZ"]["pretty"] += `<pre class=''>def a = pop_u32();
push_u32(U32_clz(a));
</pre>`;
window.traces["I32_CTZ"] = {}
window.traces["I32_CTZ"]["parsed"] = ''
window.traces["I32_CTZ"]["parsed"] += `<pre class=''>def a = pop_u32();
def arg__1148 = (a);
def r = U32_ctz(arg__1148);
def arg__1147 = (r);
def eff__1146 = push_u32(arg__1147);
</pre>`;
window.traces["I32_CTZ"]["raw"] = ''
window.traces["I32_CTZ"]["raw"] += `<pre class='graph'>---
config:
  layout: elk
---
graph TD
	1[\\"Finish"/]
	0 -. Codeptr Trap Locals Globals Tables Memory Extra .-> 1
	7 -. Stack .-> 1
	7["eff__1146 push_u32"]
	5 --> 7
	3 -. Stack .-> 7
	3["a pop_u32"]
	0 -. Stack .-> 3
	0[/"Start"\\]
	5["r U32_ctz"]
	3 --> 5
</pre>`;
window.traces["I32_CTZ"]["overloadOps"] = ''
window.traces["I32_CTZ"]["overloadOps"] += `<pre class='graph'>---
config:
  layout: elk
---
graph TD
	1[\\"Finish"/]
	0 -. Codeptr Trap Locals Globals Tables Memory Extra .-> 1
	7 -. Stack .-> 1
	7["eff__1146 push_u32"]
	5 --> 7
	3 -. Stack .-> 7
	3["a pop_u32"]
	0 -. Stack .-> 3
	0[/"Start"\\]
	5["r U32_ctz"]
	3 --> 5
</pre>`;
window.traces["I32_CTZ"]["addAbstractions"] = ''
window.traces["I32_CTZ"]["addAbstractions"] += `<pre class='graph'>---
config:
  layout: elk
---
graph TD
	1[\\"Finish"/]
	0 -. Codeptr Trap Locals Globals Tables Memory Extra .-> 1
	7 -. Stack .-> 1
	7["eff__1146 push_u32"]
	5 --> 7
	3 -. Stack .-> 7
	3["a pop_u32"]
	0 -. Stack .-> 3
	0[/"Start"\\]
	5["r U32_ctz"]
	3 --> 5
</pre>`;
window.traces["I32_CTZ"]["schedulerMermaid"] = ''
window.traces["I32_CTZ"]["schedulerMermaid"] += `<pre class='graph'>graph TD
subgraph block_1559["Block 1559"]
	direction TB
	b1559_1[\\"Finish"/]
	b1559_7["eff__1146 push_u32"]
	b1559_5["r U32_ctz"]
	b1559_3["a pop_u32"]
	b1559_0[/"Start"\\]
	b1559_7 --> b1559_1
	b1559_5 --> b1559_7
	b1559_3 --> b1559_5
	b1559_0 --> b1559_3
end

</pre>`;
window.traces["I32_CTZ"]["unLEM"] = ''
window.traces["I32_CTZ"]["unLEM"] += `<pre class='graph'>---
config:
  layout: elk
---
graph TD
	1[\\"Finish"/]
	0 -. Codeptr Trap Locals Globals Tables Memory Extra .-> 1
	7 -. Stack .-> 1
	7["eff__1146 push_u32"]
	5 --> 7
	3 -. Stack .-> 7
	3["a pop_u32"]
	0 -. Stack .-> 3
	0[/"Start"\\]
	5["r U32_ctz"]
	3 --> 5
</pre>`;
window.traces["I32_CTZ"]["unlem_schedule"] = ''
window.traces["I32_CTZ"]["unlem_schedule"] += `<pre class=''>def a = pop_u32();
def r = U32_ctz(a);
def eff__1146 = push_u32(r);
</pre>`;
window.traces["I32_CTZ"]["unlem_scheduler"] = ''
window.traces["I32_CTZ"]["unlem_scheduler"] += `<pre class='graph'>graph TD
subgraph block_1560["Block 1560"]
	direction TB
	b1560_1[\\"Finish"/]
	b1560_7["eff__1146 push_u32"]
	b1560_5["r U32_ctz"]
	b1560_3["a pop_u32"]
	b1560_0[/"Start"\\]
	b1560_7 --> b1560_1
	b1560_5 --> b1560_7
	b1560_3 --> b1560_5
	b1560_0 --> b1560_3
end

</pre>`;
window.traces["I32_CTZ"]["unlem_pretty"] = ''
window.traces["I32_CTZ"]["unlem_pretty"] += `<pre class=''>def a = pop_u32();
push_u32(U32_ctz(a));
</pre>`;
window.traces["I32_CTZ"]["constUnLEM"] = ''
window.traces["I32_CTZ"]["constUnLEM"] += `<pre class='graph'>---
config:
  layout: elk
---
graph TD
	1[\\"Finish"/]
	0 -. Codeptr Trap Locals Globals Tables Memory Extra .-> 1
	7 -. Stack .-> 1
	7["eff__1146 push_u32"]
	5 --> 7
	3 -. Stack .-> 7
	3["a pop_u32"]
	0 -. Stack .-> 3
	0[/"Start"\\]
	5["r U32_ctz"]
	3 --> 5
</pre>`;
window.traces["I32_CTZ"]["chooseMerge"] = ''
window.traces["I32_CTZ"]["chooseMerge"] += `<pre class='graph'>---
config:
  layout: elk
---
graph TD
	1[\\"Finish"/]
	0 -. Codeptr Trap Locals Globals Tables Memory Extra .-> 1
	7 -. Stack .-> 1
	7["eff__1146 push_u32"]
	5 --> 7
	3 -. Stack .-> 7
	3["a pop_u32"]
	0 -. Stack .-> 3
	0[/"Start"\\]
	5["r U32_ctz"]
	3 --> 5
</pre>`;
window.traces["I32_CTZ"]["scheduled"] = ''
window.traces["I32_CTZ"]["scheduled"] += `<pre class=''>def a = pop_u32();
def r = U32_ctz(a);
def eff__1146 = push_u32(r);
</pre>`;
window.traces["I32_CTZ"]["pretty"] = ''
window.traces["I32_CTZ"]["pretty"] += `<pre class=''>def a = pop_u32();
push_u32(U32_ctz(a));
</pre>`;
window.traces["I32_POPCNT"] = {}
window.traces["I32_POPCNT"]["parsed"] = ''
window.traces["I32_POPCNT"]["parsed"] += `<pre class=''>def a = pop_u32();
def arg__1151 = (a);
def r = U32_popcnt(arg__1151);
def arg__1150 = (r);
def eff__1149 = push_u32(arg__1150);
</pre>`;
window.traces["I32_POPCNT"]["raw"] = ''
window.traces["I32_POPCNT"]["raw"] += `<pre class='graph'>---
config:
  layout: elk
---
graph TD
	1[\\"Finish"/]
	0 -. Codeptr Trap Locals Globals Tables Memory Extra .-> 1
	7 -. Stack .-> 1
	7["eff__1149 push_u32"]
	5 --> 7
	3 -. Stack .-> 7
	3["a pop_u32"]
	0 -. Stack .-> 3
	0[/"Start"\\]
	5["r U32_popcnt"]
	3 --> 5
</pre>`;
window.traces["I32_POPCNT"]["overloadOps"] = ''
window.traces["I32_POPCNT"]["overloadOps"] += `<pre class='graph'>---
config:
  layout: elk
---
graph TD
	1[\\"Finish"/]
	0 -. Codeptr Trap Locals Globals Tables Memory Extra .-> 1
	7 -. Stack .-> 1
	7["eff__1149 push_u32"]
	5 --> 7
	3 -. Stack .-> 7
	3["a pop_u32"]
	0 -. Stack .-> 3
	0[/"Start"\\]
	5["r U32_popcnt"]
	3 --> 5
</pre>`;
window.traces["I32_POPCNT"]["addAbstractions"] = ''
window.traces["I32_POPCNT"]["addAbstractions"] += `<pre class='graph'>---
config:
  layout: elk
---
graph TD
	1[\\"Finish"/]
	0 -. Codeptr Trap Locals Globals Tables Memory Extra .-> 1
	7 -. Stack .-> 1
	7["eff__1149 push_u32"]
	5 --> 7
	3 -. Stack .-> 7
	3["a pop_u32"]
	0 -. Stack .-> 3
	0[/"Start"\\]
	5["r U32_popcnt"]
	3 --> 5
</pre>`;
window.traces["I32_POPCNT"]["schedulerMermaid"] = ''
window.traces["I32_POPCNT"]["schedulerMermaid"] += `<pre class='graph'>graph TD
subgraph block_1561["Block 1561"]
	direction TB
	b1561_1[\\"Finish"/]
	b1561_7["eff__1149 push_u32"]
	b1561_5["r U32_popcnt"]
	b1561_3["a pop_u32"]
	b1561_0[/"Start"\\]
	b1561_7 --> b1561_1
	b1561_5 --> b1561_7
	b1561_3 --> b1561_5
	b1561_0 --> b1561_3
end

</pre>`;
window.traces["I32_POPCNT"]["unLEM"] = ''
window.traces["I32_POPCNT"]["unLEM"] += `<pre class='graph'>---
config:
  layout: elk
---
graph TD
	1[\\"Finish"/]
	0 -. Codeptr Trap Locals Globals Tables Memory Extra .-> 1
	7 -. Stack .-> 1
	7["eff__1149 push_u32"]
	5 --> 7
	3 -. Stack .-> 7
	3["a pop_u32"]
	0 -. Stack .-> 3
	0[/"Start"\\]
	5["r U32_popcnt"]
	3 --> 5
</pre>`;
window.traces["I32_POPCNT"]["unlem_schedule"] = ''
window.traces["I32_POPCNT"]["unlem_schedule"] += `<pre class=''>def a = pop_u32();
def r = U32_popcnt(a);
def eff__1149 = push_u32(r);
</pre>`;
window.traces["I32_POPCNT"]["unlem_scheduler"] = ''
window.traces["I32_POPCNT"]["unlem_scheduler"] += `<pre class='graph'>graph TD
subgraph block_1562["Block 1562"]
	direction TB
	b1562_1[\\"Finish"/]
	b1562_7["eff__1149 push_u32"]
	b1562_5["r U32_popcnt"]
	b1562_3["a pop_u32"]
	b1562_0[/"Start"\\]
	b1562_7 --> b1562_1
	b1562_5 --> b1562_7
	b1562_3 --> b1562_5
	b1562_0 --> b1562_3
end

</pre>`;
window.traces["I32_POPCNT"]["unlem_pretty"] = ''
window.traces["I32_POPCNT"]["unlem_pretty"] += `<pre class=''>def a = pop_u32();
push_u32(U32_popcnt(a));
</pre>`;
window.traces["I32_POPCNT"]["constUnLEM"] = ''
window.traces["I32_POPCNT"]["constUnLEM"] += `<pre class='graph'>---
config:
  layout: elk
---
graph TD
	1[\\"Finish"/]
	0 -. Codeptr Trap Locals Globals Tables Memory Extra .-> 1
	7 -. Stack .-> 1
	7["eff__1149 push_u32"]
	5 --> 7
	3 -. Stack .-> 7
	3["a pop_u32"]
	0 -. Stack .-> 3
	0[/"Start"\\]
	5["r U32_popcnt"]
	3 --> 5
</pre>`;
window.traces["I32_POPCNT"]["chooseMerge"] = ''
window.traces["I32_POPCNT"]["chooseMerge"] += `<pre class='graph'>---
config:
  layout: elk
---
graph TD
	1[\\"Finish"/]
	0 -. Codeptr Trap Locals Globals Tables Memory Extra .-> 1
	7 -. Stack .-> 1
	7["eff__1149 push_u32"]
	5 --> 7
	3 -. Stack .-> 7
	3["a pop_u32"]
	0 -. Stack .-> 3
	0[/"Start"\\]
	5["r U32_popcnt"]
	3 --> 5
</pre>`;
window.traces["I32_POPCNT"]["scheduled"] = ''
window.traces["I32_POPCNT"]["scheduled"] += `<pre class=''>def a = pop_u32();
def r = U32_popcnt(a);
def eff__1149 = push_u32(r);
</pre>`;
window.traces["I32_POPCNT"]["pretty"] = ''
window.traces["I32_POPCNT"]["pretty"] += `<pre class=''>def a = pop_u32();
push_u32(U32_popcnt(a));
</pre>`;
window.traces["I32_ADD"] = {}
window.traces["I32_ADD"]["parsed"] = ''
window.traces["I32_ADD"]["parsed"] += `<pre class=''>def b = pop_u32();
def a = pop_u32();
def arg__1155 = (b);
def arg__1154 = (a);
def r = u32.+(arg__1154, arg__1155);
def arg__1153 = (r);
def eff__1152 = push_u32(arg__1153);
</pre>`;
window.traces["I32_ADD"]["raw"] = ''
window.traces["I32_ADD"]["raw"] += `<pre class='graph'>---
config:
  layout: elk
---
graph TD
	1[\\"Finish"/]
	0 -. Codeptr Trap Locals Globals Tables Memory Extra .-> 1
	9 -. Stack .-> 1
	9["eff__1152 push_u32"]
	7 --> 9
	4 -. Stack .-> 9
	4["a pop_u32"]
	3 -. Stack .-> 4
	3["b pop_u32"]
	0 -. Stack .-> 3
	0[/"Start"\\]
	7["r u32.+"]
	4 --> 7
	3 --> 7
</pre>`;
window.traces["I32_ADD"]["overloadOps"] = ''
window.traces["I32_ADD"]["overloadOps"] += `<pre class='graph'>---
config:
  layout: elk
---
graph TD
	1[\\"Finish"/]
	0 -. Codeptr Trap Locals Globals Tables Memory Extra .-> 1
	9 -. Stack .-> 1
	9["eff__1152 push_u32"]
	7 --> 9
	4 -. Stack .-> 9
	4["a pop_u32"]
	3 -. Stack .-> 4
	3["b pop_u32"]
	0 -. Stack .-> 3
	0[/"Start"\\]
	7["r U32_plus"]
	4 --> 7
	3 --> 7
</pre>`;
window.traces["I32_ADD"]["addAbstractions"] = ''
window.traces["I32_ADD"]["addAbstractions"] += `<pre class='graph'>---
config:
  layout: elk
---
graph TD
	1[\\"Finish"/]
	0 -. Codeptr Trap Locals Globals Tables Memory Extra .-> 1
	9 -. Stack .-> 1
	9["eff__1152 push_u32"]
	7 --> 9
	4 -. Stack .-> 9
	4["a pop_u32"]
	3 -. Stack .-> 4
	3["b pop_u32"]
	0 -. Stack .-> 3
	0[/"Start"\\]
	7["r U32_plus"]
	4 --> 7
	3 --> 7
</pre>`;
window.traces["I32_ADD"]["schedulerMermaid"] = ''
window.traces["I32_ADD"]["schedulerMermaid"] += `<pre class='graph'>graph TD
subgraph block_1563["Block 1563"]
	direction TB
	b1563_1[\\"Finish"/]
	b1563_9["eff__1152 push_u32"]
	b1563_7["r U32_plus"]
	b1563_4["a pop_u32"]
	b1563_3["b pop_u32"]
	b1563_0[/"Start"\\]
	b1563_9 --> b1563_1
	b1563_7 --> b1563_9
	b1563_4 --> b1563_7
	b1563_3 --> b1563_4
	b1563_0 --> b1563_3
end

</pre>`;
window.traces["I32_ADD"]["unLEM"] = ''
window.traces["I32_ADD"]["unLEM"] += `<pre class='graph'>---
config:
  layout: elk
---
graph TD
	1[\\"Finish"/]
	0 -. Codeptr Trap Locals Globals Tables Memory Extra .-> 1
	9 -. Stack .-> 1
	9["eff__1152 push_u32"]
	7 --> 9
	4 -. Stack .-> 9
	4["a pop_u32"]
	3 -. Stack .-> 4
	3["b pop_u32"]
	0 -. Stack .-> 3
	0[/"Start"\\]
	7["r U32_plus"]
	4 --> 7
	3 --> 7
</pre>`;
window.traces["I32_ADD"]["unlem_schedule"] = ''
window.traces["I32_ADD"]["unlem_schedule"] += `<pre class=''>def b = pop_u32();
def a = pop_u32();
def r = U32_plus(a, b);
def eff__1152 = push_u32(r);
</pre>`;
window.traces["I32_ADD"]["unlem_scheduler"] = ''
window.traces["I32_ADD"]["unlem_scheduler"] += `<pre class='graph'>graph TD
subgraph block_1564["Block 1564"]
	direction TB
	b1564_1[\\"Finish"/]
	b1564_9["eff__1152 push_u32"]
	b1564_7["r U32_plus"]
	b1564_4["a pop_u32"]
	b1564_3["b pop_u32"]
	b1564_0[/"Start"\\]
	b1564_9 --> b1564_1
	b1564_7 --> b1564_9
	b1564_4 --> b1564_7
	b1564_3 --> b1564_4
	b1564_0 --> b1564_3
end

</pre>`;
window.traces["I32_ADD"]["unlem_pretty"] = ''
window.traces["I32_ADD"]["unlem_pretty"] += `<pre class=''>def b = pop_u32();
def a = pop_u32();
push_u32(U32_plus(a, b));
</pre>`;
window.traces["I32_ADD"]["constUnLEM"] = ''
window.traces["I32_ADD"]["constUnLEM"] += `<pre class='graph'>---
config:
  layout: elk
---
graph TD
	1[\\"Finish"/]
	0 -. Codeptr Trap Locals Globals Tables Memory Extra .-> 1
	9 -. Stack .-> 1
	9["eff__1152 push_u32"]
	7 --> 9
	4 -. Stack .-> 9
	4["a pop_u32"]
	3 -. Stack .-> 4
	3["b pop_u32"]
	0 -. Stack .-> 3
	0[/"Start"\\]
	7["r U32_plus"]
	4 --> 7
	3 --> 7
</pre>`;
window.traces["I32_ADD"]["chooseMerge"] = ''
window.traces["I32_ADD"]["chooseMerge"] += `<pre class='graph'>---
config:
  layout: elk
---
graph TD
	1[\\"Finish"/]
	0 -. Codeptr Trap Locals Globals Tables Memory Extra .-> 1
	9 -. Stack .-> 1
	9["eff__1152 push_u32"]
	7 --> 9
	4 -. Stack .-> 9
	4["a pop_u32"]
	3 -. Stack .-> 4
	3["b pop_u32"]
	0 -. Stack .-> 3
	0[/"Start"\\]
	7["r U32_plus"]
	4 --> 7
	3 --> 7
</pre>`;
window.traces["I32_ADD"]["scheduled"] = ''
window.traces["I32_ADD"]["scheduled"] += `<pre class=''>def b = pop_u32();
def a = pop_u32();
def r = U32_plus(a, b);
def eff__1152 = push_u32(r);
</pre>`;
window.traces["I32_ADD"]["pretty"] = ''
window.traces["I32_ADD"]["pretty"] += `<pre class=''>def b = pop_u32();
def a = pop_u32();
push_u32(U32_plus(a, b));
</pre>`;
window.traces["I32_SUB"] = {}
window.traces["I32_SUB"]["parsed"] = ''
window.traces["I32_SUB"]["parsed"] += `<pre class=''>def b = pop_u32();
def a = pop_u32();
def arg__1159 = (b);
def arg__1158 = (a);
def r = u32.-(arg__1158, arg__1159);
def arg__1157 = (r);
def eff__1156 = push_u32(arg__1157);
</pre>`;
window.traces["I32_SUB"]["raw"] = ''
window.traces["I32_SUB"]["raw"] += `<pre class='graph'>---
config:
  layout: elk
---
graph TD
	1[\\"Finish"/]
	0 -. Codeptr Trap Locals Globals Tables Memory Extra .-> 1
	9 -. Stack .-> 1
	9["eff__1156 push_u32"]
	7 --> 9
	4 -. Stack .-> 9
	4["a pop_u32"]
	3 -. Stack .-> 4
	3["b pop_u32"]
	0 -. Stack .-> 3
	0[/"Start"\\]
	7["r u32.-"]
	4 --> 7
	3 --> 7
</pre>`;
window.traces["I32_SUB"]["overloadOps"] = ''
window.traces["I32_SUB"]["overloadOps"] += `<pre class='graph'>---
config:
  layout: elk
---
graph TD
	1[\\"Finish"/]
	0 -. Codeptr Trap Locals Globals Tables Memory Extra .-> 1
	9 -. Stack .-> 1
	9["eff__1156 push_u32"]
	7 --> 9
	4 -. Stack .-> 9
	4["a pop_u32"]
	3 -. Stack .-> 4
	3["b pop_u32"]
	0 -. Stack .-> 3
	0[/"Start"\\]
	7["r U32_minus"]
	4 --> 7
	3 --> 7
</pre>`;
window.traces["I32_SUB"]["addAbstractions"] = ''
window.traces["I32_SUB"]["addAbstractions"] += `<pre class='graph'>---
config:
  layout: elk
---
graph TD
	1[\\"Finish"/]
	0 -. Codeptr Trap Locals Globals Tables Memory Extra .-> 1
	9 -. Stack .-> 1
	9["eff__1156 push_u32"]
	7 --> 9
	4 -. Stack .-> 9
	4["a pop_u32"]
	3 -. Stack .-> 4
	3["b pop_u32"]
	0 -. Stack .-> 3
	0[/"Start"\\]
	7["r U32_minus"]
	4 --> 7
	3 --> 7
</pre>`;
window.traces["I32_SUB"]["schedulerMermaid"] = ''
window.traces["I32_SUB"]["schedulerMermaid"] += `<pre class='graph'>graph TD
subgraph block_1565["Block 1565"]
	direction TB
	b1565_1[\\"Finish"/]
	b1565_9["eff__1156 push_u32"]
	b1565_7["r U32_minus"]
	b1565_4["a pop_u32"]
	b1565_3["b pop_u32"]
	b1565_0[/"Start"\\]
	b1565_9 --> b1565_1
	b1565_7 --> b1565_9
	b1565_4 --> b1565_7
	b1565_3 --> b1565_4
	b1565_0 --> b1565_3
end

</pre>`;
window.traces["I32_SUB"]["unLEM"] = ''
window.traces["I32_SUB"]["unLEM"] += `<pre class='graph'>---
config:
  layout: elk
---
graph TD
	1[\\"Finish"/]
	0 -. Codeptr Trap Locals Globals Tables Memory Extra .-> 1
	9 -. Stack .-> 1
	9["eff__1156 push_u32"]
	7 --> 9
	4 -. Stack .-> 9
	4["a pop_u32"]
	3 -. Stack .-> 4
	3["b pop_u32"]
	0 -. Stack .-> 3
	0[/"Start"\\]
	7["r U32_minus"]
	4 --> 7
	3 --> 7
</pre>`;
window.traces["I32_SUB"]["unlem_schedule"] = ''
window.traces["I32_SUB"]["unlem_schedule"] += `<pre class=''>def b = pop_u32();
def a = pop_u32();
def r = U32_minus(a, b);
def eff__1156 = push_u32(r);
</pre>`;
window.traces["I32_SUB"]["unlem_scheduler"] = ''
window.traces["I32_SUB"]["unlem_scheduler"] += `<pre class='graph'>graph TD
subgraph block_1566["Block 1566"]
	direction TB
	b1566_1[\\"Finish"/]
	b1566_9["eff__1156 push_u32"]
	b1566_7["r U32_minus"]
	b1566_4["a pop_u32"]
	b1566_3["b pop_u32"]
	b1566_0[/"Start"\\]
	b1566_9 --> b1566_1
	b1566_7 --> b1566_9
	b1566_4 --> b1566_7
	b1566_3 --> b1566_4
	b1566_0 --> b1566_3
end

</pre>`;
window.traces["I32_SUB"]["unlem_pretty"] = ''
window.traces["I32_SUB"]["unlem_pretty"] += `<pre class=''>def b = pop_u32();
def a = pop_u32();
push_u32(U32_minus(a, b));
</pre>`;
window.traces["I32_SUB"]["constUnLEM"] = ''
window.traces["I32_SUB"]["constUnLEM"] += `<pre class='graph'>---
config:
  layout: elk
---
graph TD
	1[\\"Finish"/]
	0 -. Codeptr Trap Locals Globals Tables Memory Extra .-> 1
	9 -. Stack .-> 1
	9["eff__1156 push_u32"]
	7 --> 9
	4 -. Stack .-> 9
	4["a pop_u32"]
	3 -. Stack .-> 4
	3["b pop_u32"]
	0 -. Stack .-> 3
	0[/"Start"\\]
	7["r U32_minus"]
	4 --> 7
	3 --> 7
</pre>`;
window.traces["I32_SUB"]["chooseMerge"] = ''
window.traces["I32_SUB"]["chooseMerge"] += `<pre class='graph'>---
config:
  layout: elk
---
graph TD
	1[\\"Finish"/]
	0 -. Codeptr Trap Locals Globals Tables Memory Extra .-> 1
	9 -. Stack .-> 1
	9["eff__1156 push_u32"]
	7 --> 9
	4 -. Stack .-> 9
	4["a pop_u32"]
	3 -. Stack .-> 4
	3["b pop_u32"]
	0 -. Stack .-> 3
	0[/"Start"\\]
	7["r U32_minus"]
	4 --> 7
	3 --> 7
</pre>`;
window.traces["I32_SUB"]["scheduled"] = ''
window.traces["I32_SUB"]["scheduled"] += `<pre class=''>def b = pop_u32();
def a = pop_u32();
def r = U32_minus(a, b);
def eff__1156 = push_u32(r);
</pre>`;
window.traces["I32_SUB"]["pretty"] = ''
window.traces["I32_SUB"]["pretty"] += `<pre class=''>def b = pop_u32();
def a = pop_u32();
push_u32(U32_minus(a, b));
</pre>`;
window.traces["I32_MUL"] = {}
window.traces["I32_MUL"]["parsed"] = ''
window.traces["I32_MUL"]["parsed"] += `<pre class=''>def b = pop_u32();
def a = pop_u32();
def arg__1163 = (b);
def arg__1162 = (a);
def r = u32.*(arg__1162, arg__1163);
def arg__1161 = (r);
def eff__1160 = push_u32(arg__1161);
</pre>`;
window.traces["I32_MUL"]["raw"] = ''
window.traces["I32_MUL"]["raw"] += `<pre class='graph'>---
config:
  layout: elk
---
graph TD
	1[\\"Finish"/]
	0 -. Codeptr Trap Locals Globals Tables Memory Extra .-> 1
	9 -. Stack .-> 1
	9["eff__1160 push_u32"]
	7 --> 9
	4 -. Stack .-> 9
	4["a pop_u32"]
	3 -. Stack .-> 4
	3["b pop_u32"]
	0 -. Stack .-> 3
	0[/"Start"\\]
	7["r u32.*"]
	4 --> 7
	3 --> 7
</pre>`;
window.traces["I32_MUL"]["overloadOps"] = ''
window.traces["I32_MUL"]["overloadOps"] += `<pre class='graph'>---
config:
  layout: elk
---
graph TD
	1[\\"Finish"/]
	0 -. Codeptr Trap Locals Globals Tables Memory Extra .-> 1
	9 -. Stack .-> 1
	9["eff__1160 push_u32"]
	7 --> 9
	4 -. Stack .-> 9
	4["a pop_u32"]
	3 -. Stack .-> 4
	3["b pop_u32"]
	0 -. Stack .-> 3
	0[/"Start"\\]
	7["r U32_times"]
	4 --> 7
	3 --> 7
</pre>`;
window.traces["I32_MUL"]["addAbstractions"] = ''
window.traces["I32_MUL"]["addAbstractions"] += `<pre class='graph'>---
config:
  layout: elk
---
graph TD
	1[\\"Finish"/]
	0 -. Codeptr Trap Locals Globals Tables Memory Extra .-> 1
	9 -. Stack .-> 1
	9["eff__1160 push_u32"]
	7 --> 9
	4 -. Stack .-> 9
	4["a pop_u32"]
	3 -. Stack .-> 4
	3["b pop_u32"]
	0 -. Stack .-> 3
	0[/"Start"\\]
	7["r U32_times"]
	4 --> 7
	3 --> 7
</pre>`;
window.traces["I32_MUL"]["schedulerMermaid"] = ''
window.traces["I32_MUL"]["schedulerMermaid"] += `<pre class='graph'>graph TD
subgraph block_1567["Block 1567"]
	direction TB
	b1567_1[\\"Finish"/]
	b1567_9["eff__1160 push_u32"]
	b1567_7["r U32_times"]
	b1567_4["a pop_u32"]
	b1567_3["b pop_u32"]
	b1567_0[/"Start"\\]
	b1567_9 --> b1567_1
	b1567_7 --> b1567_9
	b1567_4 --> b1567_7
	b1567_3 --> b1567_4
	b1567_0 --> b1567_3
end

</pre>`;
window.traces["I32_MUL"]["unLEM"] = ''
window.traces["I32_MUL"]["unLEM"] += `<pre class='graph'>---
config:
  layout: elk
---
graph TD
	1[\\"Finish"/]
	0 -. Codeptr Trap Locals Globals Tables Memory Extra .-> 1
	9 -. Stack .-> 1
	9["eff__1160 push_u32"]
	7 --> 9
	4 -. Stack .-> 9
	4["a pop_u32"]
	3 -. Stack .-> 4
	3["b pop_u32"]
	0 -. Stack .-> 3
	0[/"Start"\\]
	7["r U32_times"]
	4 --> 7
	3 --> 7
</pre>`;
window.traces["I32_MUL"]["unlem_schedule"] = ''
window.traces["I32_MUL"]["unlem_schedule"] += `<pre class=''>def b = pop_u32();
def a = pop_u32();
def r = U32_times(a, b);
def eff__1160 = push_u32(r);
</pre>`;
window.traces["I32_MUL"]["unlem_scheduler"] = ''
window.traces["I32_MUL"]["unlem_scheduler"] += `<pre class='graph'>graph TD
subgraph block_1568["Block 1568"]
	direction TB
	b1568_1[\\"Finish"/]
	b1568_9["eff__1160 push_u32"]
	b1568_7["r U32_times"]
	b1568_4["a pop_u32"]
	b1568_3["b pop_u32"]
	b1568_0[/"Start"\\]
	b1568_9 --> b1568_1
	b1568_7 --> b1568_9
	b1568_4 --> b1568_7
	b1568_3 --> b1568_4
	b1568_0 --> b1568_3
end

</pre>`;
window.traces["I32_MUL"]["unlem_pretty"] = ''
window.traces["I32_MUL"]["unlem_pretty"] += `<pre class=''>def b = pop_u32();
def a = pop_u32();
push_u32(U32_times(a, b));
</pre>`;
window.traces["I32_MUL"]["constUnLEM"] = ''
window.traces["I32_MUL"]["constUnLEM"] += `<pre class='graph'>---
config:
  layout: elk
---
graph TD
	1[\\"Finish"/]
	0 -. Codeptr Trap Locals Globals Tables Memory Extra .-> 1
	9 -. Stack .-> 1
	9["eff__1160 push_u32"]
	7 --> 9
	4 -. Stack .-> 9
	4["a pop_u32"]
	3 -. Stack .-> 4
	3["b pop_u32"]
	0 -. Stack .-> 3
	0[/"Start"\\]
	7["r U32_times"]
	4 --> 7
	3 --> 7
</pre>`;
window.traces["I32_MUL"]["chooseMerge"] = ''
window.traces["I32_MUL"]["chooseMerge"] += `<pre class='graph'>---
config:
  layout: elk
---
graph TD
	1[\\"Finish"/]
	0 -. Codeptr Trap Locals Globals Tables Memory Extra .-> 1
	9 -. Stack .-> 1
	9["eff__1160 push_u32"]
	7 --> 9
	4 -. Stack .-> 9
	4["a pop_u32"]
	3 -. Stack .-> 4
	3["b pop_u32"]
	0 -. Stack .-> 3
	0[/"Start"\\]
	7["r U32_times"]
	4 --> 7
	3 --> 7
</pre>`;
window.traces["I32_MUL"]["scheduled"] = ''
window.traces["I32_MUL"]["scheduled"] += `<pre class=''>def b = pop_u32();
def a = pop_u32();
def r = U32_times(a, b);
def eff__1160 = push_u32(r);
</pre>`;
window.traces["I32_MUL"]["pretty"] = ''
window.traces["I32_MUL"]["pretty"] += `<pre class=''>def b = pop_u32();
def a = pop_u32();
push_u32(U32_times(a, b));
</pre>`;
window.traces["I32_DIV_S"] = {}
window.traces["I32_DIV_S"]["parsed"] = ''
window.traces["I32_DIV_S"]["parsed"] += `<pre class=''>def b = pop_u32();
def a = pop_u32();
def arg__1181 = (b);
def arg__1180 = (a);
def r = U32_div_s(arg__1180, arg__1181);
def arg__1179 : u32 = 0;
def arg__1178 = (b);
def cond__1164 = u32.==(arg__1178, arg__1179);
if (cond__1164) {
	def eff__1165 = trapDivideByZero();
} else {
	def arg__1177 : int = -2_147_483_648;
	def arg__1176 = u32.view(arg__1177);
	def arg__1175 = (a);
	def arg__1171 = u32.==(arg__1175, arg__1176);
	def arg__1174 : int = -1;
	def arg__1173 = u32.view(arg__1174);
	def arg__1172 = (b);
	def arg__1170 = u32.==(arg__1172, arg__1173);
	def cond__1166 = bool.&&(arg__1170, arg__1171);
	if (cond__1166) {
		def eff__1167 = trapDivideUnrepresentable();
	} else {
		def arg__1169 = (r);
		def eff__1168 = push_u32(arg__1169);
	}
// phis: 
}
// phis: 
</pre>`;
window.traces["I32_DIV_S"]["raw"] = ''
window.traces["I32_DIV_S"]["raw"] += `<pre class='graph'>---
config:
  layout: elk
---
graph TD
	1[\\"Finish"/]
	26 -. Codeptr Trap Locals Globals Tables Memory Extra .-> 1
	27 -. Stack .-> 1
	27{{"Sϕ Stack "}}
	10 --> 27
	25 --> 27
	24 --> 27
	24{{"Sϕ Stack "}}
	19 --> 24
	22 --> 24
	21 --> 24
	21["eff__1168 push_u32"]
	7 --> 21
	4 -. Stack .-> 21
	4["a pop_u32"]
	3 -. Stack .-> 4
	3["b pop_u32"]
	0 -. Stack .-> 3
	0[/"Start"\\]
	7["r U32_div_s"]
	4 --> 7
	3 --> 7
	22["eff__1167 trapDivideUnrepresentable"]
	0 -. Codeptr Trap Locals Globals Tables Memory Extra .-> 22
	4 -. Stack .-> 22
	19["cond__1166 bool.&&"]
	18 --> 19
	14 --> 19
	14["arg__1171 u32.=="]
	4 --> 14
	12 --> 14
	12["arg__1176 u32.view"]
	11 --> 12
	11["arg__1177 -2_147_483_648"]
	18["arg__1170 u32.=="]
	3 --> 18
	16 --> 18
	16["arg__1173 u32.view"]
	15 --> 16
	15["arg__1174 -1"]
	25["eff__1165 trapDivideByZero"]
	0 -. Codeptr Trap Locals Globals Tables Memory Extra .-> 25
	4 -. Stack .-> 25
	10["cond__1164 u32.=="]
	3 --> 10
	8 --> 10
	8["arg__1179 0"]
	26{{"Sϕ Codeptr Trap Locals Globals Tables Memory Extra "}}
	10 --> 26
	25 --> 26
	23 --> 26
	23{{"Sϕ Codeptr Trap Locals Globals Tables Memory Extra "}}
	19 --> 23
	22 --> 23
	0 --> 23
</pre>`;
window.traces["I32_DIV_S"]["overloadOps"] = ''
window.traces["I32_DIV_S"]["overloadOps"] += `<pre class='graph'>---
config:
  layout: elk
---
graph TD
	1[\\"Finish"/]
	26 -. Codeptr Trap Locals Globals Tables Memory Extra .-> 1
	27 -. Stack .-> 1
	27{{"Sϕ Stack "}}
	10 --> 27
	25 --> 27
	24 --> 27
	24{{"Sϕ Stack "}}
	19 --> 24
	22 --> 24
	21 --> 24
	21["eff__1168 push_u32"]
	7 --> 21
	4 -. Stack .-> 21
	4["a pop_u32"]
	3 -. Stack .-> 4
	3["b pop_u32"]
	0 -. Stack .-> 3
	0[/"Start"\\]
	7["r U32_div_s"]
	4 --> 7
	3 --> 7
	22["eff__1167 trapDivideUnrepresentable"]
	0 -. Codeptr Trap Locals Globals Tables Memory Extra .-> 22
	4 -. Stack .-> 22
	19["cond__1166 U32_and"]
	18 --> 19
	14 --> 19
	14["arg__1171 U32_equals"]
	4 --> 14
	12 --> 14
	12["arg__1176 u32.view"]
	11 --> 12
	11["arg__1177 -2_147_483_648"]
	18["arg__1170 U32_equals"]
	3 --> 18
	16 --> 18
	16["arg__1173 u32.view"]
	15 --> 16
	15["arg__1174 -1"]
	25["eff__1165 trapDivideByZero"]
	0 -. Codeptr Trap Locals Globals Tables Memory Extra .-> 25
	4 -. Stack .-> 25
	10["cond__1164 U32_equals"]
	3 --> 10
	8 --> 10
	8["arg__1179 0"]
	26{{"Sϕ Codeptr Trap Locals Globals Tables Memory Extra "}}
	10 --> 26
	25 --> 26
	23 --> 26
	23{{"Sϕ Codeptr Trap Locals Globals Tables Memory Extra "}}
	19 --> 23
	22 --> 23
	0 --> 23
</pre>`;
window.traces["I32_DIV_S"]["addAbstractions"] = ''
window.traces["I32_DIV_S"]["addAbstractions"] += `<pre class='graph'>---
config:
  layout: elk
---
graph TD
	1[\\"Finish"/]
	26 -. Codeptr Trap Locals Globals Tables Memory Extra .-> 1
	27 -. Stack .-> 1
	27{{"Sϕ Stack "}}
	10 --> 27
	25 --> 27
	24 --> 27
	24{{"Sϕ Stack "}}
	19 --> 24
	22 --> 24
	21 --> 24
	21["eff__1168 push_u32"]
	7 --> 21
	4 -. Stack .-> 21
	4["a pop_u32"]
	3 -. Stack .-> 4
	3["b pop_u32"]
	0 -. Stack .-> 3
	0[/"Start"\\]
	7["r U32_div_s"]
	4 --> 7
	3 --> 7
	22["eff__1167 trapDivideUnrepresentable"]
	0 -. Codeptr Trap Locals Globals Tables Memory Extra .-> 22
	4 -. Stack .-> 22
	19["cond__1166 U32_and"]
	18 --> 19
	14 --> 19
	14["arg__1171 U32_equals"]
	4 --> 14
	30 --> 14
	30["abs__1184 lift_u32"]
	12 --> 30
	12["arg__1176 u32.view"]
	11 --> 12
	11["arg__1177 -2_147_483_648"]
	18["arg__1170 U32_equals"]
	3 --> 18
	29 --> 18
	29["abs__1183 lift_u32"]
	16 --> 29
	16["arg__1173 u32.view"]
	15 --> 16
	15["arg__1174 -1"]
	25["eff__1165 trapDivideByZero"]
	0 -. Codeptr Trap Locals Globals Tables Memory Extra .-> 25
	4 -. Stack .-> 25
	10["cond__1164 U32_equals"]
	3 --> 10
	28 --> 10
	28["abs__1182 lift_u32"]
	8 --> 28
	8["arg__1179 0"]
	26{{"Sϕ Codeptr Trap Locals Globals Tables Memory Extra "}}
	10 --> 26
	25 --> 26
	23 --> 26
	23{{"Sϕ Codeptr Trap Locals Globals Tables Memory Extra "}}
	19 --> 23
	22 --> 23
	0 --> 23
</pre>`;
window.traces["I32_DIV_S"]["schedulerMermaid"] = ''
window.traces["I32_DIV_S"]["schedulerMermaid"] += `<pre class='graph'>graph TD
subgraph block_1569["Block 1569"]
	direction TB
	b1569_1[\\"Finish"/]
	b1569_25["eff__1165 trapDivideByZero"]
	b1569_22["eff__1167 trapDivideUnrepresentable"]
	b1569_21["eff__1168 push_u32"]
	b1569_4["a pop_u32"]
	b1569_3["b pop_u32"]
	b1569_7["r U32_div_s"]
	b1569_25 --> b1569_1
	b1569_22 --> b1569_25
	b1569_21 --> b1569_22
	b1569_4 --> b1569_21
	b1569_3 --> b1569_4
	b1569_7 --> b1569_3
end
phi_1571 --> block_1569
subgraph phi_1571["Phi 1571"]
	p1571_27{{"Sϕ Stack "}}
	p1571_26{{"Sϕ Codeptr Trap Locals Globals Tables Memory Extra "}}
end
block_1572 --> phi_1571
block_1573 --> phi_1571
subgraph block_1572["Block 1572"]
	direction TB
	b1572_25["eff__1165 trapDivideByZero"]
end
phi_1580 --> block_1572
subgraph phi_1580["Phi 1580"]
	p1580_24{{"Sϕ Stack "}}
	p1580_23{{"Sϕ Codeptr Trap Locals Globals Tables Memory Extra "}}
end
block_1581 --> phi_1580
block_1582 --> phi_1580
subgraph block_1581["Block 1581"]
	direction TB
	b1581_22["eff__1167 trapDivideUnrepresentable"]
end
branch_1579 --> block_1581
subgraph branch_1579["Branch 1579"]
	br1579_19["cond__1166 U32_and"]

end
branch_1570 --> branch_1579
subgraph branch_1570["Branch 1570"]
	br1570_10["cond__1164 U32_equals"]

end
block_1578 --> branch_1570
subgraph block_1578["Block 1578"]
	direction TB
	b1578_10["cond__1164 U32_equals"]
	b1578_28["abs__1182 lift_u32"]
	b1578_4["a pop_u32"]
	b1578_19["cond__1166 U32_and"]
	b1578_3["b pop_u32"]
	b1578_8["arg__1179 0"]
	b1578_18["arg__1170 U32_equals"]
	b1578_14["arg__1171 U32_equals"]
	b1578_29["abs__1183 lift_u32"]
	b1578_30["abs__1184 lift_u32"]
	b1578_16["arg__1173 u32.view"]
	b1578_12["arg__1176 u32.view"]
	b1578_15["arg__1174 -1"]
	b1578_11["arg__1177 -2_147_483_648"]
	b1578_0[/"Start"\\]
	b1578_28 --> b1578_10
	b1578_4 --> b1578_28
	b1578_19 --> b1578_4
	b1578_3 --> b1578_19
	b1578_8 --> b1578_3
	b1578_18 --> b1578_8
	b1578_14 --> b1578_18
	b1578_29 --> b1578_14
	b1578_30 --> b1578_29
	b1578_16 --> b1578_30
	b1578_12 --> b1578_16
	b1578_15 --> b1578_12
	b1578_11 --> b1578_15
	b1578_0 --> b1578_11
end
subgraph block_1582["Block 1582"]
	direction TB
	b1582_21["eff__1168 push_u32"]
end
branch_1579 --> block_1582
subgraph block_1573["Block 1573"]
	direction TB
	b1573_22["eff__1167 trapDivideUnrepresentable"]
	b1573_21["eff__1168 push_u32"]
	b1573_21 --> b1573_22
end
phi_1575 --> block_1573
subgraph phi_1575["Phi 1575"]
	p1575_24{{"Sϕ Stack "}}
	p1575_23{{"Sϕ Codeptr Trap Locals Globals Tables Memory Extra "}}
end
block_1576 --> phi_1575
block_1577 --> phi_1575
subgraph block_1576["Block 1576"]
	direction TB
	b1576_22["eff__1167 trapDivideUnrepresentable"]
end
branch_1574 --> block_1576
subgraph branch_1574["Branch 1574"]
	br1574_19["cond__1166 U32_and"]

end
branch_1570 --> branch_1574
subgraph block_1577["Block 1577"]
	direction TB
	b1577_21["eff__1168 push_u32"]
end
branch_1574 --> block_1577

</pre>`;
window.traces["I32_DIV_S"]["unLEM"] = ''
window.traces["I32_DIV_S"]["unLEM"] += `<pre class='graph'>---
config:
  layout: elk
---
graph TD
	1[\\"Finish"/]
	26 -. Codeptr Trap Locals Globals Tables Memory Extra .-> 1
	27 -. Stack .-> 1
	27{{"Sϕ Stack "}}
	45 --> 27
	50 --> 27
	48 --> 27
	48{{"Sϕ Stack "}}
	43 --> 48
	25 --> 48
	24 --> 48
	24{{"r_state__1191 Sϕ Stack "}}
	53 --> 24
	58 --> 24
	56 --> 24
	56{{"Sϕ Stack "}}
	51 --> 56
	22 --> 56
	21 --> 56
	21["eff__1168 push_u32"]
	7 --> 21
	4 -. Stack .-> 21
	4["a pop_u32"]
	3 -. Stack .-> 4
	3["b pop_u32"]
	0 -. Stack .-> 3
	0[/"r_state__1196 Start"\\]
	7["r U32_div_s"]
	4 --> 7
	3 --> 7
	22["eff__1167 trapDivideUnrepresentable"]
	0 -. Codeptr Trap Locals Globals Tables Memory Extra .-> 22
	4 -. Stack .-> 22
	51["mt__1193 U32_maybeTrue"]
	19 --> 51
	19["cond__1166 U32_and"]
	18 --> 19
	14 --> 19
	14["arg__1171 U32_equals"]
	4 --> 14
	30 --> 14
	30["abs__1184 lift_u32"]
	12 --> 30
	12["arg__1176 u32.view"]
	11 --> 12
	11["arg__1177 -2_147_483_648"]
	18["arg__1170 U32_equals"]
	3 --> 18
	29 --> 18
	29["abs__1183 lift_u32"]
	16 --> 29
	16["arg__1173 u32.view"]
	15 --> 16
	15["arg__1174 -1"]
	58["eff_merge__1199 merge"]
	57 --> 58
	21 --> 58
	57["eff_nop__1198 nop"]
	53["mb__1195 bool.&&"]
	51 --> 53
	52 --> 53
	52["mf__1194 U32_maybeFalse"]
	19 --> 52
	25["eff__1165 trapDivideByZero"]
	0 -. Codeptr Trap Locals Globals Tables Memory Extra .-> 25
	4 -. Stack .-> 25
	43["mt__1185 U32_maybeTrue"]
	10 --> 43
	10["cond__1164 U32_equals"]
	3 --> 10
	28 --> 10
	28["abs__1182 lift_u32"]
	8 --> 28
	8["arg__1179 0"]
	50["eff_merge__1192 merge"]
	49 --> 50
	24 --> 50
	49["eff_nop__1190 nop"]
	45["mb__1187 bool.&&"]
	43 --> 45
	44 --> 45
	44["mf__1186 U32_maybeFalse"]
	10 --> 44
	26{{"Sϕ Codeptr Trap Locals Globals Tables Memory Extra "}}
	45 --> 26
	47 --> 26
	46 --> 26
	46{{"Sϕ Codeptr Trap Locals Globals Tables Memory Extra "}}
	43 --> 46
	25 --> 46
	23 --> 46
	23{{"r_state__1188 Sϕ Codeptr Trap Locals Globals Tables Memory Extra "}}
	53 --> 23
	55 --> 23
	54 --> 23
	54{{"Sϕ Codeptr Trap Locals Globals Tables Memory Extra "}}
	51 --> 54
	22 --> 54
	0 --> 54
	55["eff_merge__1197 merge"]
	22 --> 55
	0 --> 55
	47["eff_merge__1189 merge"]
	25 --> 47
	23 --> 47
</pre>`;
window.traces["I32_DIV_S"]["unlem_schedule"] = ''
window.traces["I32_DIV_S"]["unlem_schedule"] += `<pre class=''>def b = pop_u32();
def a = pop_u32();
def arg__1179 : u32 = 0;
def abs__1182 = lift_u32(arg__1179);
def cond__1164 = U32_equals(b, abs__1182);
def mt__1185 = U32_maybeTrue(cond__1164);
def mf__1186 = U32_maybeFalse(cond__1164);
def mb__1187 = bool.&&(mt__1185, mf__1186);
if (mb__1187) {
	def eff__1165 = trapDivideByZero();
	def arg__1174 : u32 = -1;
	def arg__1173 = u32.view(arg__1174);
	def abs__1183 = lift_u32(arg__1173);
	def arg__1170 = U32_equals(b, abs__1183);
	def arg__1177 : u32 = -2_147_483_648;
	def arg__1176 = u32.view(arg__1177);
	def abs__1184 = lift_u32(arg__1176);
	def arg__1171 = U32_equals(a, abs__1184);
	def cond__1166 = U32_and(arg__1170, arg__1171);
	def mt__1193 = U32_maybeTrue(cond__1166);
	def mf__1194 = U32_maybeFalse(cond__1166);
	def mb__1195 = bool.&&(mt__1193, mf__1194);
	if (mb__1195) {
		def eff__1167 = trapDivideUnrepresentable();
		def eff_merge__1197 = merge(eff__1167, r_state__1196);
		def eff_nop__1198 = nop();
		def r = U32_div_s(a, b);
		def eff__1168 = push_u32(r);
		def eff_merge__1199 = merge(eff_nop__1198, eff__1168);
	} else {
		if (mt__1193) {
			def eff__1167 = trapDivideUnrepresentable();
		} else {
			def r = U32_div_s(a, b);
			def eff__1168 = push_u32(r);
		}
// phis: 
	}
// phis: 
	def eff_merge__1189 = merge(eff__1165, r_state__1188);
	def eff_nop__1190 = nop();
	def eff_merge__1192 = merge(eff_nop__1190, r_state__1191);
} else {
	if (mt__1185) {
		def eff__1165 = trapDivideByZero();
	} else {
		def arg__1174 : u32 = -1;
		def arg__1173 = u32.view(arg__1174);
		def abs__1183 = lift_u32(arg__1173);
		def arg__1170 = U32_equals(b, abs__1183);
		def arg__1177 : u32 = -2_147_483_648;
		def arg__1176 = u32.view(arg__1177);
		def abs__1184 = lift_u32(arg__1176);
		def arg__1171 = U32_equals(a, abs__1184);
		def cond__1166 = U32_and(arg__1170, arg__1171);
		def mt__1193 = U32_maybeTrue(cond__1166);
		def mf__1194 = U32_maybeFalse(cond__1166);
		def mb__1195 = bool.&&(mt__1193, mf__1194);
		if (mb__1195) {
			def eff__1167 = trapDivideUnrepresentable();
			def eff_merge__1197 = merge(eff__1167, r_state__1196);
			def eff_nop__1198 = nop();
			def r = U32_div_s(a, b);
			def eff__1168 = push_u32(r);
			def eff_merge__1199 = merge(eff_nop__1198, eff__1168);
		} else {
			if (mt__1193) {
				def eff__1167 = trapDivideUnrepresentable();
			} else {
				def r = U32_div_s(a, b);
				def eff__1168 = push_u32(r);
			}
// phis: 
		}
// phis: 
	}
// phis: 
}
// phis: 
</pre>`;
