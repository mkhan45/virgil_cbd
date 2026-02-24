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
	b1_0[/"Start"\\]
	b1_2["eff__0 trapUnreachable"]
	b1_1[\\"Finish"/]
	b1_0 --> b1_2
	b1_2 --> b1_1
end

</pre>`;
window.traces["UNREACHABLE"]["scheduler_ssad"] = ''
window.traces["UNREACHABLE"]["scheduler_ssad"] += `<pre class=''>def eff__0 = trapUnreachable();
</pre>`;
window.traces["UNREACHABLE"]["scheduler_ssad_pretty"] = ''
window.traces["UNREACHABLE"]["scheduler_ssad_pretty"] += `<pre class=''>trapUnreachable();
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
	b2_0[/"Start"\\]
	b2_2["eff__0 trapUnreachable"]
	b2_1[\\"Finish"/]
	b2_0 --> b2_2
	b2_2 --> b2_1
end

</pre>`;
window.traces["UNREACHABLE"]["unlem_scheduler_ssa"] = ''
window.traces["UNREACHABLE"]["unlem_scheduler_ssa"] += `<pre class=''>def eff__0 = trapUnreachable();
</pre>`;
window.traces["UNREACHABLE"]["unlem_scheduler_ssa"] += `<pre class=''>trapUnreachable();
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
	b3_0[/"Start"\\]
	b3_1[\\"Finish"/]
	b3_0 --> b3_1
end

</pre>`;
window.traces["NOP"]["scheduler_ssad"] = ''
window.traces["NOP"]["scheduler_ssad"] += `<pre class=''></pre>`;
window.traces["NOP"]["scheduler_ssad_pretty"] = ''
window.traces["NOP"]["scheduler_ssad_pretty"] += `<pre class=''></pre>`;
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
	b4_0[/"Start"\\]
	b4_1[\\"Finish"/]
	b4_0 --> b4_1
end

</pre>`;
window.traces["NOP"]["unlem_scheduler_ssa"] = ''
window.traces["NOP"]["unlem_scheduler_ssa"] += `<pre class=''></pre>`;
window.traces["NOP"]["unlem_scheduler_ssa"] += `<pre class=''></pre>`;
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
	b5_0[/"Start"\\]
	b5_2["bt imm_readBlockType"]
	b5_3["eff__2 doBlock"]
	b5_1[\\"Finish"/]
	b5_0 --> b5_2
	b5_2 --> b5_3
	b5_3 --> b5_1
end

</pre>`;
window.traces["BLOCK"]["scheduler_ssad"] = ''
window.traces["BLOCK"]["scheduler_ssad"] += `<pre class=''>def bt = imm_readBlockType();
def eff__2 = doBlock(bt);
</pre>`;
window.traces["BLOCK"]["scheduler_ssad_pretty"] = ''
window.traces["BLOCK"]["scheduler_ssad_pretty"] += `<pre class=''>def bt = imm_readBlockType();
doBlock(bt);
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
	b6_0[/"Start"\\]
	b6_2["bt imm_readBlockType"]
	b6_3["eff__2 doBlock"]
	b6_1[\\"Finish"/]
	b6_0 --> b6_2
	b6_2 --> b6_3
	b6_3 --> b6_1
end

</pre>`;
window.traces["BLOCK"]["unlem_scheduler_ssa"] = ''
window.traces["BLOCK"]["unlem_scheduler_ssa"] += `<pre class=''>def bt = imm_readBlockType();
def eff__2 = doBlock(bt);
</pre>`;
window.traces["BLOCK"]["unlem_scheduler_ssa"] += `<pre class=''>def bt = imm_readBlockType();
doBlock(bt);
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
	b7_0[/"Start"\\]
	b7_2["bt imm_readBlockType"]
	b7_3["eff__4 doLoop"]
	b7_1[\\"Finish"/]
	b7_0 --> b7_2
	b7_2 --> b7_3
	b7_3 --> b7_1
end

</pre>`;
window.traces["LOOP"]["scheduler_ssad"] = ''
window.traces["LOOP"]["scheduler_ssad"] += `<pre class=''>def bt = imm_readBlockType();
def eff__4 = doLoop(bt);
</pre>`;
window.traces["LOOP"]["scheduler_ssad_pretty"] = ''
window.traces["LOOP"]["scheduler_ssad_pretty"] += `<pre class=''>def bt = imm_readBlockType();
doLoop(bt);
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
	b8_0[/"Start"\\]
	b8_2["bt imm_readBlockType"]
	b8_3["eff__4 doLoop"]
	b8_1[\\"Finish"/]
	b8_0 --> b8_2
	b8_2 --> b8_3
	b8_3 --> b8_1
end

</pre>`;
window.traces["LOOP"]["unlem_scheduler_ssa"] = ''
window.traces["LOOP"]["unlem_scheduler_ssa"] += `<pre class=''>def bt = imm_readBlockType();
def eff__4 = doLoop(bt);
</pre>`;
window.traces["LOOP"]["unlem_scheduler_ssa"] += `<pre class=''>def bt = imm_readBlockType();
doLoop(bt);
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
window.traces["IF"]["post_surgery 11"] = ''
window.traces["IF"]["post_surgery 11"] += `<pre class='graph'>---
config:
  layout: elk
---
graph TD
	1[\\"Finish"/]
	9 -. Codeptr Stack Trap Locals Globals Tables Memory .-> 1
	10 -. Extra .-> 1
	10["eff_st_put__13 ctlxfer.put_IF"]
	4 --> 10
	9 -. Extra .-> 10
	9{{"Sϕ Codeptr Stack Trap Locals Globals Tables Memory Extra "}}
	6 --> 9
	13 --> 9
	15 --> 9
	15["eff__9__16 doFallthru"]
	4 -. Codeptr Stack Trap Locals Globals Tables Memory Extra .-> 15
	4["label doIf"]
	2 --> 4
	2 -. Codeptr .-> 4
	3 -. Stack .-> 4
	0 -. Trap Locals Globals Tables Memory Extra .-> 4
	0[/"Start"\\]
	3["cond pop_u32"]
	0 -. Stack .-> 3
	2["bt imm_readBlockType"]
	0 -. Codeptr .-> 2
	13["eff__7__15 doBranch"]
	4 --> 13
	4 -. Codeptr Stack Trap Locals Globals Tables Memory Extra .-> 13
	6["cond__6 U32_equals"]
	3 --> 6
	11 --> 6
	11["abs__14 lift_u32"]
	5 --> 11
	5["arg__11 0"]
</pre>`;
window.traces["IF"]["schedulerMermaid"] = ''
window.traces["IF"]["schedulerMermaid"] += `<pre class='graph'>graph TD
subgraph block_9["Block 9"]
	direction TB
	b9_10["eff_st_put__13 ctlxfer.put_IF"]
	b9_1[\\"Finish"/]
	b9_10 --> b9_1
end
phi_11 --> block_9
subgraph phi_11["Phi 11"]
	p11_9{{"Sϕ Codeptr Stack Trap Locals Globals Tables Memory Extra "}}
	p11_9{{"Sϕ Codeptr Stack Trap Locals Globals Tables Memory Extra "}}
end
block_12 --> phi_11
block_13 --> phi_11
subgraph block_12["Block 12"]
	direction TB
	b12_13["eff__7__15 doBranch"]
end
branch_10 --> block_12
subgraph branch_10["Branch 10"]
	br10_6["cond__6 U32_equals"]

end
block_14 --> branch_10
subgraph block_14["Block 14"]
	direction TB
	b14_0[/"Start"\\]
	b14_5["arg__11 0"]
	b14_2["bt imm_readBlockType"]
	b14_11["abs__14 lift_u32"]
	b14_3["cond pop_u32"]
	b14_4["label doIf"]
	b14_6["cond__6 U32_equals"]
	b14_0 --> b14_5
	b14_5 --> b14_2
	b14_2 --> b14_11
	b14_11 --> b14_3
	b14_3 --> b14_4
	b14_4 --> b14_6
end
subgraph block_13["Block 13"]
	direction TB
	b13_15["eff__9__16 doFallthru"]
end
branch_10 --> block_13

</pre>`;
window.traces["IF"]["scheduler_ssad"] = ''
window.traces["IF"]["scheduler_ssad"] += `<pre class=''>def arg__11 : u32 = 0;
def bt = imm_readBlockType();
def abs__14 = lift_u32(arg__11);
def cond = pop_u32();
def label = doIf(bt);
def cond__6 = U32_equals(cond, abs__14);
if (cond__6) {
	def eff__7__15 = doBranch(label);
} else {
	def eff__9__16 = doFallthru();
}
// phis: 
def eff_st_put__13 = ctlxfer.put_IF(label);
</pre>`;
window.traces["IF"]["scheduler_ssad_pretty"] = ''
window.traces["IF"]["scheduler_ssad_pretty"] += `<pre class=''>def bt = imm_readBlockType();
def cond = pop_u32();
def label = doIf(bt);
if (U32_equals(cond, lift_u32(0))) {
	doBranch(label);
} else {
	doFallthru();
}
ctlxfer.put_IF(label);
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
	16["mt__19 U32_maybeTrue"]
	9 --> 16
	9["cond__6 U32_equals"]
	4 --> 9
	15 --> 9
	15["abs__14 lift_u32"]
	7 --> 15
	7["arg__11 0"]
	20["eff_merge__22 merge"]
	12 --> 20
	10 --> 20
	18["mb__21 bool.&&"]
	16 --> 18
	17 --> 18
	17["mf__20 U32_maybeFalse"]
	9 --> 17
</pre>`;
window.traces["IF"]["unlem_schedule"] = ''
window.traces["IF"]["unlem_schedule"] += `<pre class=''>def bt = imm_readBlockType();
def cond = pop_u32();
def label = doIf(bt);
def arg__11 : u32 = 0;
def abs__14 = lift_u32(arg__11);
def cond__6 = U32_equals(cond, abs__14);
def mt__19 = U32_maybeTrue(cond__6);
def mf__20 = U32_maybeFalse(cond__6);
def mb__21 = bool.&&(mt__19, mf__20);
if (mb__21) {
	def eff__7 = doBranch(label);
	def eff__9 = doFallthru();
	def eff_merge__22 = merge(eff__7, eff__9);
} else {
	if (mt__19) {
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
window.traces["IF_ul"]["post_surgery 17"] = ''
window.traces["IF_ul"]["post_surgery 17"] += `<pre class='graph'>---
config:
  layout: elk
---
graph TD
	3[\\"Finish"/]
	14 -. Codeptr Stack Trap Locals Globals Tables Memory .-> 3
	15 -. Extra .-> 3
	15["eff_st_put__13 ctlxfer.put_IF"]
	9 --> 15
	14 -. Extra .-> 15
	14{{"Sϕ Codeptr Stack Trap Locals Globals Tables Memory Extra "}}
	4 --> 14
	19 --> 14
	23 --> 14
	23{{"Sϕ Codeptr Stack Trap Locals Globals Tables Memory Extra "}}
	1 --> 23
	24 --> 23
	22 --> 23
	22["eff__9__26 doFallthru"]
	9 -. Codeptr Stack Trap Locals Globals Tables Memory Extra .-> 22
	9["label doIf"]
	5 --> 9
	5 -. Codeptr .-> 9
	7 -. Stack .-> 9
	0 -. Trap Locals Globals Tables Memory Extra .-> 9
	0[/"Start"\\]
	7["cond pop_u32"]
	0 -. Stack .-> 7
	5["bt imm_readBlockType"]
	0 -. Codeptr .-> 5
	24["eff__7__27 doBranch"]
	9 --> 24
	9 -. Codeptr Stack Trap Locals Globals Tables Memory Extra .-> 24
	1["mt__19 U32_maybeTrue"]
	11 --> 1
	11["cond__6 U32_equals"]
	7 --> 11
	16 --> 11
	16["abs__14 lift_u32"]
	10 --> 16
	10["arg__11 0"]
	19["eff_merge__22__24 merge"]
	20 --> 19
	18 --> 19
	18["eff__9__23 doFallthru"]
	9 -. Codeptr Stack Trap Locals Globals Tables Memory Extra .-> 18
	20["eff__7__25 doBranch"]
	9 --> 20
	9 -. Codeptr Stack Trap Locals Globals Tables Memory Extra .-> 20
	4["mb__21 bool.&&"]
	1 --> 4
	2 --> 4
	2["mf__20 U32_maybeFalse"]
	11 --> 2
</pre>`;
window.traces["IF_ul"]["post_surgery 22"] = ''
window.traces["IF_ul"]["post_surgery 22"] += `<pre class='graph'>---
config:
  layout: elk
---
graph TD
	3[\\"Finish"/]
	14 -. Codeptr Stack Trap Locals Globals Tables Memory .-> 3
	15 -. Extra .-> 3
	15["eff_st_put__13 ctlxfer.put_IF"]
	9 --> 15
	14 -. Extra .-> 15
	14{{"Sϕ Codeptr Stack Trap Locals Globals Tables Memory Extra "}}
	4 --> 14
	19 --> 14
	23 --> 14
	23{{"Sϕ Codeptr Stack Trap Locals Globals Tables Memory Extra "}}
	1 --> 23
	34 --> 23
	36 --> 23
	36["eff__9__26__34 doFallthru"]
	9 -. Codeptr Stack Trap Locals Globals Tables Memory Extra .-> 36
	9["label doIf"]
	5 --> 9
	5 -. Codeptr .-> 9
	7 -. Stack .-> 9
	0 -. Trap Locals Globals Tables Memory Extra .-> 9
	0[/"Start"\\]
	7["cond pop_u32"]
	0 -. Stack .-> 7
	5["bt imm_readBlockType"]
	0 -. Codeptr .-> 5
	34["eff__7__27__33 doBranch"]
	9 --> 34
	9 -. Codeptr Stack Trap Locals Globals Tables Memory Extra .-> 34
	1["mt__19 U32_maybeTrue"]
	11 --> 1
	11["cond__6 U32_equals"]
	7 --> 11
	16 --> 11
	16["abs__14 lift_u32"]
	10 --> 16
	10["arg__11 0"]
	19["eff_merge__22__24 merge"]
	20 --> 19
	18 --> 19
	18["eff__9__23 doFallthru"]
	9 -. Codeptr Stack Trap Locals Globals Tables Memory Extra .-> 18
	20["eff__7__25 doBranch"]
	9 --> 20
	9 -. Codeptr Stack Trap Locals Globals Tables Memory Extra .-> 20
	4["mb__21 bool.&&"]
	1 --> 4
	2 --> 4
	2["mf__20 U32_maybeFalse"]
	11 --> 2
</pre>`;
window.traces["IF"]["unlem_scheduler"] = ''
window.traces["IF"]["unlem_scheduler"] += `<pre class='graph'>graph TD
subgraph block_15["Block 15"]
	direction TB
	b15_15["eff_st_put__13 ctlxfer.put_IF"]
	b15_3[\\"Finish"/]
	b15_15 --> b15_3
end
phi_17 --> block_15
subgraph phi_17["Phi 17"]
	p17_14{{"Sϕ Codeptr Stack Trap Locals Globals Tables Memory Extra "}}
	p17_14{{"Sϕ Codeptr Stack Trap Locals Globals Tables Memory Extra "}}
end
block_18 --> phi_17
block_19 --> phi_17
subgraph block_18["Block 18"]
	direction TB
	b18_18["eff__9__23 doFallthru"]
	b18_20["eff__7__25 doBranch"]
	b18_19["eff_merge__22__24 merge"]
	b18_18 --> b18_20
	b18_20 --> b18_19
end
branch_16 --> block_18
subgraph branch_16["Branch 16"]
	br16_4["mb__21 bool.&&"]

end
block_20 --> branch_16
subgraph block_20["Block 20"]
	direction TB
	b20_0[/"Start"\\]
	b20_10["arg__11 0"]
	b20_16["abs__14 lift_u32"]
	b20_7["cond pop_u32"]
	b20_5["bt imm_readBlockType"]
	b20_11["cond__6 U32_equals"]
	b20_9["label doIf"]
	b20_2["mf__20 U32_maybeFalse"]
	b20_1["mt__19 U32_maybeTrue"]
	b20_4["mb__21 bool.&&"]
	b20_0 --> b20_10
	b20_10 --> b20_16
	b20_16 --> b20_7
	b20_7 --> b20_5
	b20_5 --> b20_11
	b20_11 --> b20_9
	b20_9 --> b20_2
	b20_2 --> b20_1
	b20_1 --> b20_4
end
subgraph block_19["Block 19"]
	direction TB
end
phi_22 --> block_19
subgraph phi_22["Phi 22"]
	p22_23{{"Sϕ Codeptr Stack Trap Locals Globals Tables Memory Extra "}}
	p22_23{{"Sϕ Codeptr Stack Trap Locals Globals Tables Memory Extra "}}
end
block_23 --> phi_22
block_24 --> phi_22
subgraph block_23["Block 23"]
	direction TB
	b23_34["eff__7__27__33 doBranch"]
end
branch_21 --> block_23
subgraph branch_21["Branch 21"]
	br21_1["mt__19 U32_maybeTrue"]

end
branch_16 --> branch_21
subgraph block_24["Block 24"]
	direction TB
	b24_36["eff__9__26__34 doFallthru"]
end
branch_21 --> block_24

</pre>`;
window.traces["IF"]["unlem_scheduler_ssa"] = ''
window.traces["IF"]["unlem_scheduler_ssa"] += `<pre class=''>def arg__11 : u32 = 0;
def abs__14 = lift_u32(arg__11);
def cond = pop_u32();
def bt = imm_readBlockType();
def cond__6 = U32_equals(cond, abs__14);
def label = doIf(bt);
def mf__20 = U32_maybeFalse(cond__6);
def mt__19 = U32_maybeTrue(cond__6);
def mb__21 = bool.&&(mt__19, mf__20);
if (mb__21) {
	def eff__9__23 = doFallthru();
	def eff__7__25 = doBranch(label);
	def eff_merge__22__24 = merge(eff__7__25, eff__9__23);
} else {
	if (mt__19) {
		def eff__7__27__33 = doBranch(label);
	} else {
		def eff__9__26__34 = doFallthru();
	}
// phis: 
}
// phis: 
def eff_st_put__13 = ctlxfer.put_IF(label);
</pre>`;
window.traces["IF"]["unlem_scheduler_ssa"] += `<pre class=''>def cond = pop_u32();
def bt = imm_readBlockType();
def label = doIf(bt);
def mf = U32_maybeFalse(U32_equals(cond, lift_u32(0)));
def mt = U32_maybeTrue(U32_equals(cond, lift_u32(0)));
if (bool.&&(mt, mf)) {
	doFallthru();
	doBranch(label);
} else {
	if (mt) {
		doBranch(label);
	} else {
		doFallthru();
	}
}
ctlxfer.put_IF(label);
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
	20 -. Codeptr Stack Trap Locals Globals Tables Memory .-> 1
	14 -. Extra .-> 1
	14["eff_st_put__13 ctlxfer.put_IF"]
	6 --> 14
	20 -. Extra .-> 14
	20["eff_merge__22 merge"]
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
window.traces["IF"]["chooseMerge"] = ''
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
	20["eff_merge__22 merge"]
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
window.traces["IF"]["scheduled"] = ''
window.traces["IF"]["scheduled"] += `<pre class=''>def bt = imm_readBlockType();
def cond = pop_u32();
def label = doIf(bt);
def eff__7 = doBranch(label);
def eff__9 = doFallthru();
def eff_merge__22 = merge(eff__7, eff__9);
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
def arg__38 = (label);
def eff__37 = doBranch(arg__38);
</pre>`;
window.traces["ELSE"]["raw"] = ''
window.traces["ELSE"]["raw"] += `<pre class='graph'>---
config:
  layout: elk
---
graph TD
	1[\\"Finish"/]
	5 -. Codeptr Stack Trap Locals Globals Tables Memory Extra .-> 1
	5["eff__37 doBranch"]
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
	6["eff_st_put__39 ctlxfer.put_ELSE"]
	3 --> 6
	5 -. Extra .-> 6
	5["eff__37 doBranch"]
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
	6["eff_st_put__39 ctlxfer.put_ELSE"]
	3 --> 6
	5 -. Extra .-> 6
	5["eff__37 doBranch"]
	3 --> 5
	3 -. Codeptr Stack Trap Locals Globals Tables Memory Extra .-> 5
	3["label doElse"]
	0 -. Codeptr Stack Trap Locals Globals Tables Memory Extra .-> 3
	0[/"Start"\\]
</pre>`;
window.traces["ELSE"]["schedulerMermaid"] = ''
window.traces["ELSE"]["schedulerMermaid"] += `<pre class='graph'>graph TD
subgraph block_25["Block 25"]
	direction TB
	b25_0[/"Start"\\]
	b25_2["label doElse"]
	b25_3["eff__37 doBranch"]
	b25_4["eff_st_put__39 ctlxfer.put_ELSE"]
	b25_1[\\"Finish"/]
	b25_0 --> b25_2
	b25_2 --> b25_3
	b25_3 --> b25_4
	b25_4 --> b25_1
end

</pre>`;
window.traces["ELSE"]["scheduler_ssad"] = ''
window.traces["ELSE"]["scheduler_ssad"] += `<pre class=''>def label = doElse();
def eff__37 = doBranch(label);
def eff_st_put__39 = ctlxfer.put_ELSE(label);
</pre>`;
window.traces["ELSE"]["scheduler_ssad_pretty"] = ''
window.traces["ELSE"]["scheduler_ssad_pretty"] += `<pre class=''>def label = doElse();
doBranch(label);
ctlxfer.put_ELSE(label);
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
	6["eff_st_put__39 ctlxfer.put_ELSE"]
	3 --> 6
	5 -. Extra .-> 6
	5["eff__37 doBranch"]
	3 --> 5
	3 -. Codeptr Stack Trap Locals Globals Tables Memory Extra .-> 5
	3["label doElse"]
	0 -. Codeptr Stack Trap Locals Globals Tables Memory Extra .-> 3
	0[/"Start"\\]
</pre>`;
window.traces["ELSE"]["unlem_schedule"] = ''
window.traces["ELSE"]["unlem_schedule"] += `<pre class=''>def label = doElse();
def eff__37 = doBranch(label);
def eff_st_put__39 = ctlxfer.put_ELSE(label);
</pre>`;
window.traces["ELSE"]["unlem_scheduler"] = ''
window.traces["ELSE"]["unlem_scheduler"] += `<pre class='graph'>graph TD
subgraph block_26["Block 26"]
	direction TB
	b26_0[/"Start"\\]
	b26_2["label doElse"]
	b26_3["eff__37 doBranch"]
	b26_4["eff_st_put__39 ctlxfer.put_ELSE"]
	b26_1[\\"Finish"/]
	b26_0 --> b26_2
	b26_2 --> b26_3
	b26_3 --> b26_4
	b26_4 --> b26_1
end

</pre>`;
window.traces["ELSE"]["unlem_scheduler_ssa"] = ''
window.traces["ELSE"]["unlem_scheduler_ssa"] += `<pre class=''>def label = doElse();
def eff__37 = doBranch(label);
def eff_st_put__39 = ctlxfer.put_ELSE(label);
</pre>`;
window.traces["ELSE"]["unlem_scheduler_ssa"] += `<pre class=''>def label = doElse();
doBranch(label);
ctlxfer.put_ELSE(label);
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
	6["eff_st_put__39 ctlxfer.put_ELSE"]
	3 --> 6
	5 -. Extra .-> 6
	5["eff__37 doBranch"]
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
	6["eff_st_put__39 ctlxfer.put_ELSE"]
	3 --> 6
	5 -. Extra .-> 6
	5["eff__37 doBranch"]
	3 --> 5
	3 -. Codeptr Stack Trap Locals Globals Tables Memory Extra .-> 5
	3["label doElse"]
	0 -. Codeptr Stack Trap Locals Globals Tables Memory Extra .-> 3
	0[/"Start"\\]
</pre>`;
window.traces["ELSE"]["scheduled"] = ''
window.traces["ELSE"]["scheduled"] += `<pre class=''>def label = doElse();
def eff__37 = doBranch(label);
def eff_st_put__39 = ctlxfer.put_ELSE(label);
</pre>`;
window.traces["ELSE"]["pretty"] = ''
window.traces["ELSE"]["pretty"] += `<pre class=''>def label = doElse();
doBranch(label);
ctlxfer.put_ELSE(label);
</pre>`;
window.traces["TRY"] = {}
window.traces["TRY"]["parsed"] = ''
window.traces["TRY"]["parsed"] += `<pre class=''>def bt = imm_readBlockType();
def arg__41 = (bt);
def eff__40 = doTry(arg__41);
</pre>`;
window.traces["TRY"]["raw"] = ''
window.traces["TRY"]["raw"] += `<pre class='graph'>---
config:
  layout: elk
---
graph TD
	1[\\"Finish"/]
	5 -. Codeptr Stack Trap Locals Globals Tables Memory Extra .-> 1
	5["eff__40 doTry"]
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
	5["eff__40 doTry"]
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
	5["eff__40 doTry"]
	3 --> 5
	3 -. Codeptr .-> 5
	0 -. Stack Trap Locals Globals Tables Memory Extra .-> 5
	0[/"Start"\\]
	3["bt imm_readBlockType"]
	0 -. Codeptr .-> 3
</pre>`;
window.traces["TRY"]["schedulerMermaid"] = ''
window.traces["TRY"]["schedulerMermaid"] += `<pre class='graph'>graph TD
subgraph block_27["Block 27"]
	direction TB
	b27_0[/"Start"\\]
	b27_2["bt imm_readBlockType"]
	b27_3["eff__40 doTry"]
	b27_1[\\"Finish"/]
	b27_0 --> b27_2
	b27_2 --> b27_3
	b27_3 --> b27_1
end

</pre>`;
window.traces["TRY"]["scheduler_ssad"] = ''
window.traces["TRY"]["scheduler_ssad"] += `<pre class=''>def bt = imm_readBlockType();
def eff__40 = doTry(bt);
</pre>`;
window.traces["TRY"]["scheduler_ssad_pretty"] = ''
window.traces["TRY"]["scheduler_ssad_pretty"] += `<pre class=''>def bt = imm_readBlockType();
doTry(bt);
</pre>`;
window.traces["TRY"]["unLEM"] = ''
window.traces["TRY"]["unLEM"] += `<pre class='graph'>---
config:
  layout: elk
---
graph TD
	1[\\"Finish"/]
	5 -. Codeptr Stack Trap Locals Globals Tables Memory Extra .-> 1
	5["eff__40 doTry"]
	3 --> 5
	3 -. Codeptr .-> 5
	0 -. Stack Trap Locals Globals Tables Memory Extra .-> 5
	0[/"Start"\\]
	3["bt imm_readBlockType"]
	0 -. Codeptr .-> 3
</pre>`;
window.traces["TRY"]["unlem_schedule"] = ''
window.traces["TRY"]["unlem_schedule"] += `<pre class=''>def bt = imm_readBlockType();
def eff__40 = doTry(bt);
</pre>`;
window.traces["TRY"]["unlem_scheduler"] = ''
window.traces["TRY"]["unlem_scheduler"] += `<pre class='graph'>graph TD
subgraph block_28["Block 28"]
	direction TB
	b28_0[/"Start"\\]
	b28_2["bt imm_readBlockType"]
	b28_3["eff__40 doTry"]
	b28_1[\\"Finish"/]
	b28_0 --> b28_2
	b28_2 --> b28_3
	b28_3 --> b28_1
end

</pre>`;
window.traces["TRY"]["unlem_scheduler_ssa"] = ''
window.traces["TRY"]["unlem_scheduler_ssa"] += `<pre class=''>def bt = imm_readBlockType();
def eff__40 = doTry(bt);
</pre>`;
window.traces["TRY"]["unlem_scheduler_ssa"] += `<pre class=''>def bt = imm_readBlockType();
doTry(bt);
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
	5["eff__40 doTry"]
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
	5["eff__40 doTry"]
	3 --> 5
	3 -. Codeptr .-> 5
	0 -. Stack Trap Locals Globals Tables Memory Extra .-> 5
	0[/"Start"\\]
	3["bt imm_readBlockType"]
	0 -. Codeptr .-> 3
</pre>`;
window.traces["TRY"]["scheduled"] = ''
window.traces["TRY"]["scheduled"] += `<pre class=''>def bt = imm_readBlockType();
def eff__40 = doTry(bt);
</pre>`;
window.traces["TRY"]["pretty"] = ''
window.traces["TRY"]["pretty"] += `<pre class=''>def bt = imm_readBlockType();
doTry(bt);
</pre>`;
window.traces["END"] = {}
window.traces["END"]["parsed"] = ''
window.traces["END"]["parsed"] += `<pre class=''>def eff__44 = doEnd();
def cond__42 = f_isAtEnd();
if (cond__42) {
	def eff__43 = doReturn();
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
	3["eff__44 doEnd"]
	0 -. Codeptr Stack Trap Locals Globals Tables Memory Extra .-> 3
	0[/"Start"\\]
	5["eff__43 doReturn"]
	3 -. Codeptr Stack Trap Locals Globals Tables Memory Extra .-> 5
	4["cond__42 f_isAtEnd"]
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
	3["eff__44 doEnd"]
	0 -. Codeptr Stack Trap Locals Globals Tables Memory Extra .-> 3
	0[/"Start"\\]
	5["eff__43 doReturn"]
	3 -. Codeptr Stack Trap Locals Globals Tables Memory Extra .-> 5
	4["cond__42 f_isAtEnd"]
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
	3["eff__44 doEnd"]
	0 -. Codeptr Stack Trap Locals Globals Tables Memory Extra .-> 3
	0[/"Start"\\]
	5["eff__43 doReturn"]
	3 -. Codeptr Stack Trap Locals Globals Tables Memory Extra .-> 5
	4["cond__42 f_isAtEnd"]
</pre>`;
window.traces["END"]["sched Finish"] = ''
window.traces["END"]["sched Finish"] += `<pre class='graph'>graph TD
subgraph block_29["Block 29"]
	direction TB
	b29_1[\\"Finish"/]
end

</pre>`;
window.traces["END"]["post_surgery 31"] = ''
window.traces["END"]["post_surgery 31"] += `<pre class='graph'>---
config:
  layout: elk
---
graph TD
	1[\\"Finish"/]
	5 -. Codeptr Stack Trap Locals Globals Tables Memory Extra .-> 1
	5{{"Sϕ Codeptr Stack Trap Locals Globals Tables Memory Extra "}}
	3 --> 5
	7 --> 5
	8 --> 5
	8["eff__44__46 doEnd"]
	0 -. Codeptr Stack Trap Locals Globals Tables Memory Extra .-> 8
	0[/"Start"\\]
	7["eff__43__45 doReturn"]
	2 -. Codeptr Stack Trap Locals Globals Tables Memory Extra .-> 7
	2["eff__44 doEnd"]
	0 -. Codeptr Stack Trap Locals Globals Tables Memory Extra .-> 2
	3["cond__42 f_isAtEnd"]
</pre>`;
window.traces["END"]["sched StatePhi [f_isAtEnd [cond__42]]"] = ''
window.traces["END"]["sched StatePhi [f_isAtEnd [cond__42]]"] += `<pre class='graph'>graph TD
subgraph block_29["Block 29"]
	direction TB
	b29_1[\\"Finish"/]
end
phi_31 --> block_29
subgraph phi_31["Phi 31"]
	p31_5{{"Sϕ Codeptr Stack Trap Locals Globals Tables Memory Extra "}}
end
block_32 --> phi_31
block_33 --> phi_31
subgraph block_32["Block 32"]
	direction TB
end
branch_30 --> block_32
subgraph branch_30["Branch 30"]
	br30_3["cond__42 f_isAtEnd"]

end
subgraph block_33["Block 33"]
	direction TB
end
branch_30 --> block_33

</pre>`;
window.traces["END"]["sched doReturn [eff__43__45]"] = ''
window.traces["END"]["sched doReturn [eff__43__45]"] += `<pre class='graph'>graph TD
subgraph block_29["Block 29"]
	direction TB
	b29_1[\\"Finish"/]
end
phi_31 --> block_29
subgraph phi_31["Phi 31"]
	p31_5{{"Sϕ Codeptr Stack Trap Locals Globals Tables Memory Extra "}}
end
block_32 --> phi_31
block_33 --> phi_31
subgraph block_32["Block 32"]
	direction TB
	b32_7["eff__43__45 doReturn"]
end
branch_30 --> block_32
subgraph branch_30["Branch 30"]
	br30_3["cond__42 f_isAtEnd"]

end
block_34 --> branch_30
subgraph block_34["Block 34"]
	direction TB
	b34_3["cond__42 f_isAtEnd"]
end
subgraph block_33["Block 33"]
	direction TB
end
branch_30 --> block_33

</pre>`;
window.traces["END"]["sched doEnd [eff__44__46]"] = ''
window.traces["END"]["sched doEnd [eff__44__46]"] += `<pre class='graph'>graph TD
subgraph block_29["Block 29"]
	direction TB
	b29_1[\\"Finish"/]
end
phi_31 --> block_29
subgraph phi_31["Phi 31"]
	p31_5{{"Sϕ Codeptr Stack Trap Locals Globals Tables Memory Extra "}}
end
block_32 --> phi_31
block_33 --> phi_31
subgraph block_32["Block 32"]
	direction TB
	b32_7["eff__43__45 doReturn"]
end
branch_30 --> block_32
subgraph branch_30["Branch 30"]
	br30_3["cond__42 f_isAtEnd"]

end
block_34 --> branch_30
subgraph block_34["Block 34"]
	direction TB
	b34_3["cond__42 f_isAtEnd"]
end
subgraph block_33["Block 33"]
	direction TB
	b33_8["eff__44__46 doEnd"]
end
branch_30 --> block_33

</pre>`;
window.traces["END"]["sched doEnd [eff__44]"] = ''
window.traces["END"]["sched doEnd [eff__44]"] += `<pre class='graph'>graph TD
subgraph block_29["Block 29"]
	direction TB
	b29_1[\\"Finish"/]
end
phi_31 --> block_29
subgraph phi_31["Phi 31"]
	p31_5{{"Sϕ Codeptr Stack Trap Locals Globals Tables Memory Extra "}}
end
block_32 --> phi_31
block_33 --> phi_31
subgraph block_32["Block 32"]
	direction TB
	b32_7["eff__43__45 doReturn"]
	b32_2["eff__44 doEnd"]
	b32_2 --> b32_7
end
branch_30 --> block_32
subgraph branch_30["Branch 30"]
	br30_3["cond__42 f_isAtEnd"]

end
block_34 --> branch_30
subgraph block_34["Block 34"]
	direction TB
	b34_3["cond__42 f_isAtEnd"]
end
subgraph block_33["Block 33"]
	direction TB
	b33_8["eff__44__46 doEnd"]
end
branch_30 --> block_33

</pre>`;
window.traces["END"]["sched Start"] = ''
window.traces["END"]["sched Start"] += `<pre class='graph'>graph TD
subgraph block_29["Block 29"]
	direction TB
	b29_1[\\"Finish"/]
end
phi_31 --> block_29
subgraph phi_31["Phi 31"]
	p31_5{{"Sϕ Codeptr Stack Trap Locals Globals Tables Memory Extra "}}
end
block_32 --> phi_31
block_33 --> phi_31
subgraph block_32["Block 32"]
	direction TB
	b32_7["eff__43__45 doReturn"]
	b32_2["eff__44 doEnd"]
	b32_2 --> b32_7
end
branch_30 --> block_32
subgraph branch_30["Branch 30"]
	br30_3["cond__42 f_isAtEnd"]

end
block_34 --> branch_30
subgraph block_34["Block 34"]
	direction TB
	b34_3["cond__42 f_isAtEnd"]
	b34_0[/"Start"\\]
	b34_0 --> b34_3
end
subgraph block_33["Block 33"]
	direction TB
	b33_8["eff__44__46 doEnd"]
end
branch_30 --> block_33

</pre>`;
window.traces["END"]["schedulerMermaid"] = ''
window.traces["END"]["schedulerMermaid"] += `<pre class='graph'>graph TD
subgraph block_29["Block 29"]
	direction TB
	b29_1[\\"Finish"/]
end
phi_31 --> block_29
subgraph phi_31["Phi 31"]
	p31_5{{"Sϕ Codeptr Stack Trap Locals Globals Tables Memory Extra "}}
end
block_32 --> phi_31
block_33 --> phi_31
subgraph block_32["Block 32"]
	direction TB
	b32_2["eff__44 doEnd"]
	b32_7["eff__43__45 doReturn"]
	b32_2 --> b32_7
end
branch_30 --> block_32
subgraph branch_30["Branch 30"]
	br30_3["cond__42 f_isAtEnd"]

end
block_34 --> branch_30
subgraph block_34["Block 34"]
	direction TB
	b34_0[/"Start"\\]
	b34_3["cond__42 f_isAtEnd"]
	b34_0 --> b34_3
end
subgraph block_33["Block 33"]
	direction TB
	b33_8["eff__44__46 doEnd"]
end
branch_30 --> block_33

</pre>`;
window.traces["END"]["scheduler_ssad"] = ''
window.traces["END"]["scheduler_ssad"] += `<pre class=''>def cond__42 = f_isAtEnd();
if (cond__42) {
	def eff__44 = doEnd();
	def eff__43__45 = doReturn();
} else {
	def eff__44__46 = doEnd();
}
// phis: 
</pre>`;
window.traces["END"]["scheduler_ssad_pretty"] = ''
window.traces["END"]["scheduler_ssad_pretty"] += `<pre class=''>if (f_isAtEnd()) {
	doEnd();
	doReturn();
} else {
	doEnd();
}
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
	3["eff__44 doEnd"]
	0 -. Codeptr Stack Trap Locals Globals Tables Memory Extra .-> 3
	0[/"Start"\\]
	5["eff__43 doReturn"]
	3 -. Codeptr Stack Trap Locals Globals Tables Memory Extra .-> 5
	4["cond__42 f_isAtEnd"]
</pre>`;
window.traces["END"]["unlem_schedule"] = ''
window.traces["END"]["unlem_schedule"] += `<pre class=''>def cond__42 = f_isAtEnd();
if (cond__42) {
	def eff__44 = doEnd();
	def eff__43 = doReturn();
} else {
	def eff__44 = doEnd();
}
// phis: 
</pre>`;
window.traces["END_ul"] = {}
window.traces["END_ul"]["post_surgery 37"] = ''
window.traces["END_ul"]["post_surgery 37"] += `<pre class='graph'>---
config:
  layout: elk
---
graph TD
	1[\\"Finish"/]
	5 -. Codeptr Stack Trap Locals Globals Tables Memory Extra .-> 1
	5{{"Sϕ Codeptr Stack Trap Locals Globals Tables Memory Extra "}}
	3 --> 5
	7 --> 5
	8 --> 5
	8["eff__44__48 doEnd"]
	0 -. Codeptr Stack Trap Locals Globals Tables Memory Extra .-> 8
	0[/"Start"\\]
	7["eff__43__47 doReturn"]
	2 -. Codeptr Stack Trap Locals Globals Tables Memory Extra .-> 7
	2["eff__44 doEnd"]
	0 -. Codeptr Stack Trap Locals Globals Tables Memory Extra .-> 2
	3["cond__42 f_isAtEnd"]
</pre>`;
window.traces["END"]["unlem_scheduler"] = ''
window.traces["END"]["unlem_scheduler"] += `<pre class='graph'>graph TD
subgraph block_35["Block 35"]
	direction TB
	b35_1[\\"Finish"/]
end
phi_37 --> block_35
subgraph phi_37["Phi 37"]
	p37_5{{"Sϕ Codeptr Stack Trap Locals Globals Tables Memory Extra "}}
end
block_38 --> phi_37
block_39 --> phi_37
subgraph block_38["Block 38"]
	direction TB
	b38_2["eff__44 doEnd"]
	b38_7["eff__43__47 doReturn"]
	b38_2 --> b38_7
end
branch_36 --> block_38
subgraph branch_36["Branch 36"]
	br36_3["cond__42 f_isAtEnd"]

end
block_40 --> branch_36
subgraph block_40["Block 40"]
	direction TB
	b40_0[/"Start"\\]
	b40_3["cond__42 f_isAtEnd"]
	b40_0 --> b40_3
end
subgraph block_39["Block 39"]
	direction TB
	b39_8["eff__44__48 doEnd"]
end
branch_36 --> block_39

</pre>`;
window.traces["END"]["unlem_scheduler_ssa"] = ''
window.traces["END"]["unlem_scheduler_ssa"] += `<pre class=''>def cond__42 = f_isAtEnd();
if (cond__42) {
	def eff__44 = doEnd();
	def eff__43__47 = doReturn();
} else {
	def eff__44__48 = doEnd();
}
// phis: 
</pre>`;
window.traces["END"]["unlem_scheduler_ssa"] += `<pre class=''>if (f_isAtEnd()) {
	doEnd();
	doReturn();
} else {
	doEnd();
}
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
	3["eff__44 doEnd"]
	0 -. Codeptr Stack Trap Locals Globals Tables Memory Extra .-> 3
	0[/"Start"\\]
	5["eff__43 doReturn"]
	3 -. Codeptr Stack Trap Locals Globals Tables Memory Extra .-> 5
	4["cond__42 f_isAtEnd"]
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
	3["eff__44 doEnd"]
	0 -. Codeptr Stack Trap Locals Globals Tables Memory Extra .-> 3
	0[/"Start"\\]
	5["eff__43 doReturn"]
	3 -. Codeptr Stack Trap Locals Globals Tables Memory Extra .-> 5
	4["cond__42 f_isAtEnd"]
</pre>`;
window.traces["END"]["scheduled"] = ''
window.traces["END"]["scheduled"] += `<pre class=''>def cond__42 = f_isAtEnd();
if (cond__42) {
	def eff__44 = doEnd();
	def eff__43 = doReturn();
} else {
	def eff__44 = doEnd();
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
def arg__51 = (depth);
def label = f_getLabel(arg__51);
def arg__50 = (label);
def eff__49 = doBranch(arg__50);
</pre>`;
window.traces["BR"]["raw"] = ''
window.traces["BR"]["raw"] += `<pre class='graph'>---
config:
  layout: elk
---
graph TD
	1[\\"Finish"/]
	7 -. Codeptr Stack Trap Locals Globals Tables Memory Extra .-> 1
	7["eff__49 doBranch"]
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
	8["eff_st_put__52 ctlxfer.put_BR"]
	5 --> 8
	7 -. Extra .-> 8
	7["eff__49 doBranch"]
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
	8["eff_st_put__52 ctlxfer.put_BR"]
	5 --> 8
	7 -. Extra .-> 8
	7["eff__49 doBranch"]
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
subgraph block_41["Block 41"]
	direction TB
	b41_0[/"Start"\\]
	b41_2["depth imm_readULEB32"]
	b41_3["label f_getLabel"]
	b41_4["eff__49 doBranch"]
	b41_5["eff_st_put__52 ctlxfer.put_BR"]
	b41_1[\\"Finish"/]
	b41_0 --> b41_2
	b41_2 --> b41_3
	b41_3 --> b41_4
	b41_4 --> b41_5
	b41_5 --> b41_1
end

</pre>`;
window.traces["BR"]["scheduler_ssad"] = ''
window.traces["BR"]["scheduler_ssad"] += `<pre class=''>def depth = imm_readULEB32();
def label = f_getLabel(depth);
def eff__49 = doBranch(label);
def eff_st_put__52 = ctlxfer.put_BR(label);
</pre>`;
window.traces["BR"]["scheduler_ssad_pretty"] = ''
window.traces["BR"]["scheduler_ssad_pretty"] += `<pre class=''>def depth = imm_readULEB32();
def label = f_getLabel(depth);
doBranch(label);
ctlxfer.put_BR(label);
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
	8["eff_st_put__52 ctlxfer.put_BR"]
	5 --> 8
	7 -. Extra .-> 8
	7["eff__49 doBranch"]
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
def eff__49 = doBranch(label);
def eff_st_put__52 = ctlxfer.put_BR(label);
</pre>`;
window.traces["BR"]["unlem_scheduler"] = ''
window.traces["BR"]["unlem_scheduler"] += `<pre class='graph'>graph TD
subgraph block_42["Block 42"]
	direction TB
	b42_0[/"Start"\\]
	b42_2["depth imm_readULEB32"]
	b42_3["label f_getLabel"]
	b42_4["eff__49 doBranch"]
	b42_5["eff_st_put__52 ctlxfer.put_BR"]
	b42_1[\\"Finish"/]
	b42_0 --> b42_2
	b42_2 --> b42_3
	b42_3 --> b42_4
	b42_4 --> b42_5
	b42_5 --> b42_1
end

</pre>`;
window.traces["BR"]["unlem_scheduler_ssa"] = ''
window.traces["BR"]["unlem_scheduler_ssa"] += `<pre class=''>def depth = imm_readULEB32();
def label = f_getLabel(depth);
def eff__49 = doBranch(label);
def eff_st_put__52 = ctlxfer.put_BR(label);
</pre>`;
window.traces["BR"]["unlem_scheduler_ssa"] += `<pre class=''>def depth = imm_readULEB32();
def label = f_getLabel(depth);
doBranch(label);
ctlxfer.put_BR(label);
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
	8["eff_st_put__52 ctlxfer.put_BR"]
	5 --> 8
	7 -. Extra .-> 8
	7["eff__49 doBranch"]
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
	8["eff_st_put__52 ctlxfer.put_BR"]
	5 --> 8
	7 -. Extra .-> 8
	7["eff__49 doBranch"]
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
def eff__49 = doBranch(label);
def eff_st_put__52 = ctlxfer.put_BR(label);
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
def arg__59 = (depth);
def label = f_getLabel(arg__59);
def cond = pop_u32();
def arg__58 : u32 = 0;
def arg__57 = (cond);
def cond__53 = u32.!=(arg__57, arg__58);
if (cond__53) {
	def arg__55 = (label);
	def eff__54 = doBranch(arg__55);
} else {
	def eff__56 = doFallthru();
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
	10["eff__56 doFallthru"]
	3 -. Codeptr .-> 10
	6 -. Stack .-> 10
	0 -. Trap Locals Globals Tables Memory Extra .-> 10
	0[/"Start"\\]
	6["cond pop_u32"]
	0 -. Stack .-> 6
	3["depth imm_readULEB32"]
	0 -. Codeptr .-> 3
	12["eff__54 doBranch"]
	5 --> 12
	3 -. Codeptr .-> 12
	6 -. Stack .-> 12
	0 -. Trap Locals Globals Tables Memory Extra .-> 12
	5["label f_getLabel"]
	3 --> 5
	9["cond__53 u32.!="]
	6 --> 9
	7 --> 9
	7["arg__58 0"]
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
	14["eff_st_put__60 ctlxfer.put_BR_IF"]
	5 --> 14
	13 -. Extra .-> 14
	13{{"Sϕ Codeptr Stack Trap Locals Globals Tables Memory Extra "}}
	9 --> 13
	12 --> 13
	10 --> 13
	10["eff__56 doFallthru"]
	3 -. Codeptr .-> 10
	6 -. Stack .-> 10
	0 -. Trap Locals Globals Tables Memory Extra .-> 10
	0[/"Start"\\]
	6["cond pop_u32"]
	0 -. Stack .-> 6
	3["depth imm_readULEB32"]
	0 -. Codeptr .-> 3
	12["eff__54 doBranch"]
	5 --> 12
	3 -. Codeptr .-> 12
	6 -. Stack .-> 12
	0 -. Trap Locals Globals Tables Memory Extra .-> 12
	5["label f_getLabel"]
	3 --> 5
	9["cond__53 U32_not_equals"]
	6 --> 9
	7 --> 9
	7["arg__58 0"]
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
	14["eff_st_put__60 ctlxfer.put_BR_IF"]
	5 --> 14
	13 -. Extra .-> 14
	13{{"Sϕ Codeptr Stack Trap Locals Globals Tables Memory Extra "}}
	9 --> 13
	12 --> 13
	10 --> 13
	10["eff__56 doFallthru"]
	3 -. Codeptr .-> 10
	6 -. Stack .-> 10
	0 -. Trap Locals Globals Tables Memory Extra .-> 10
	0[/"Start"\\]
	6["cond pop_u32"]
	0 -. Stack .-> 6
	3["depth imm_readULEB32"]
	0 -. Codeptr .-> 3
	12["eff__54 doBranch"]
	5 --> 12
	3 -. Codeptr .-> 12
	6 -. Stack .-> 12
	0 -. Trap Locals Globals Tables Memory Extra .-> 12
	5["label f_getLabel"]
	3 --> 5
	9["cond__53 U32_not_equals"]
	6 --> 9
	15 --> 9
	15["abs__61 lift_u32"]
	7 --> 15
	7["arg__58 0"]
</pre>`;
window.traces["BR_IF"]["post_surgery 45"] = ''
window.traces["BR_IF"]["post_surgery 45"] += `<pre class='graph'>---
config:
  layout: elk
---
graph TD
	1[\\"Finish"/]
	9 -. Codeptr Stack Trap Locals Globals Tables Memory .-> 1
	10 -. Extra .-> 1
	10["eff_st_put__60 ctlxfer.put_BR_IF"]
	3 --> 10
	9 -. Extra .-> 10
	9{{"Sϕ Codeptr Stack Trap Locals Globals Tables Memory Extra "}}
	6 --> 9
	14 --> 9
	16 --> 9
	16["eff__56__64 doFallthru"]
	2 -. Codeptr .-> 16
	4 -. Stack .-> 16
	0 -. Trap Locals Globals Tables Memory Extra .-> 16
	0[/"Start"\\]
	4["cond pop_u32"]
	0 -. Stack .-> 4
	2["depth imm_readULEB32"]
	0 -. Codeptr .-> 2
	14["eff__54__63 doBranch"]
	13 --> 14
	2 -. Codeptr .-> 14
	4 -. Stack .-> 14
	0 -. Trap Locals Globals Tables Memory Extra .-> 14
	13["label__62 f_getLabel"]
	2 --> 13
	6["cond__53 U32_not_equals"]
	4 --> 6
	11 --> 6
	11["abs__61 lift_u32"]
	5 --> 11
	5["arg__58 0"]
	3["label f_getLabel"]
	2 --> 3
</pre>`;
window.traces["BR_IF"]["schedulerMermaid"] = ''
window.traces["BR_IF"]["schedulerMermaid"] += `<pre class='graph'>graph TD
subgraph block_43["Block 43"]
	direction TB
	b43_3["label f_getLabel"]
	b43_10["eff_st_put__60 ctlxfer.put_BR_IF"]
	b43_1[\\"Finish"/]
	b43_3 --> b43_10
	b43_10 --> b43_1
end
phi_45 --> block_43
subgraph phi_45["Phi 45"]
	p45_9{{"Sϕ Codeptr Stack Trap Locals Globals Tables Memory Extra "}}
	p45_9{{"Sϕ Codeptr Stack Trap Locals Globals Tables Memory Extra "}}
end
block_46 --> phi_45
block_47 --> phi_45
subgraph block_46["Block 46"]
	direction TB
	b46_13["label__62 f_getLabel"]
	b46_14["eff__54__63 doBranch"]
	b46_13 --> b46_14
end
branch_44 --> block_46
subgraph branch_44["Branch 44"]
	br44_6["cond__53 U32_not_equals"]

end
block_48 --> branch_44
subgraph block_48["Block 48"]
	direction TB
	b48_0[/"Start"\\]
	b48_5["arg__58 0"]
	b48_2["depth imm_readULEB32"]
	b48_11["abs__61 lift_u32"]
	b48_4["cond pop_u32"]
	b48_6["cond__53 U32_not_equals"]
	b48_0 --> b48_5
	b48_5 --> b48_2
	b48_2 --> b48_11
	b48_11 --> b48_4
	b48_4 --> b48_6
end
subgraph block_47["Block 47"]
	direction TB
	b47_16["eff__56__64 doFallthru"]
end
branch_44 --> block_47

</pre>`;
window.traces["BR_IF"]["scheduler_ssad"] = ''
window.traces["BR_IF"]["scheduler_ssad"] += `<pre class=''>def arg__58 : u32 = 0;
def depth = imm_readULEB32();
def abs__61 = lift_u32(arg__58);
def cond = pop_u32();
def cond__53 = U32_not_equals(cond, abs__61);
if (cond__53) {
	def label__62 = f_getLabel(depth);
	def eff__54__63 = doBranch(label__62);
} else {
	def eff__56__64 = doFallthru();
}
// phis: 
def label = f_getLabel(depth);
def eff_st_put__60 = ctlxfer.put_BR_IF(label);
</pre>`;
window.traces["BR_IF"]["scheduler_ssad_pretty"] = ''
window.traces["BR_IF"]["scheduler_ssad_pretty"] += `<pre class=''>def depth = imm_readULEB32();
def cond = pop_u32();
def cond1 = U32_not_equals(cond, lift_u32(0));
if (cond1) {
	def label = f_getLabel(depth);
	doBranch(label);
} else {
	doFallthru();
}
def label1 = f_getLabel(depth);
ctlxfer.put_BR_IF(label1);
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
	14["eff_st_put__60 ctlxfer.put_BR_IF"]
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
	10["eff__56 doFallthru"]
	3 -. Codeptr .-> 10
	6 -. Stack .-> 10
	0 -. Trap Locals Globals Tables Memory Extra .-> 10
	0[/"Start"\\]
	6["cond pop_u32"]
	0 -. Stack .-> 6
	3["depth imm_readULEB32"]
	0 -. Codeptr .-> 3
	12["eff__54 doBranch"]
	5 --> 12
	3 -. Codeptr .-> 12
	6 -. Stack .-> 12
	0 -. Trap Locals Globals Tables Memory Extra .-> 12
	5["label f_getLabel"]
	3 --> 5
	16["mt__68 U32_maybeTrue"]
	9 --> 16
	9["cond__53 U32_not_equals"]
	6 --> 9
	15 --> 9
	15["abs__61 lift_u32"]
	7 --> 15
	7["arg__58 0"]
	20["eff_merge__71 merge"]
	12 --> 20
	10 --> 20
	18["mb__70 bool.&&"]
	16 --> 18
	17 --> 18
	17["mf__69 U32_maybeFalse"]
	9 --> 17
</pre>`;
window.traces["BR_IF"]["unlem_schedule"] = ''
window.traces["BR_IF"]["unlem_schedule"] += `<pre class=''>def depth = imm_readULEB32();
def cond = pop_u32();
def arg__58 : u32 = 0;
def abs__61 = lift_u32(arg__58);
def cond__53 = U32_not_equals(cond, abs__61);
def mt__68 = U32_maybeTrue(cond__53);
def mf__69 = U32_maybeFalse(cond__53);
def mb__70 = bool.&&(mt__68, mf__69);
if (mb__70) {
	def label = f_getLabel(depth);
	def eff__54 = doBranch(label);
	def eff__56 = doFallthru();
	def eff_merge__71 = merge(eff__54, eff__56);
} else {
	if (mt__68) {
		def label = f_getLabel(depth);
		def eff__54 = doBranch(label);
	} else {
		def eff__56 = doFallthru();
	}
// phis: 
}
// phis: 
def label = f_getLabel(depth);
def eff_st_put__60 = ctlxfer.put_BR_IF(label);
</pre>`;
window.traces["BR_IF_ul"] = {}
window.traces["BR_IF_ul"]["post_surgery 51"] = ''
window.traces["BR_IF_ul"]["post_surgery 51"] += `<pre class='graph'>---
config:
  layout: elk
---
graph TD
	3[\\"Finish"/]
	14 -. Codeptr Stack Trap Locals Globals Tables Memory .-> 3
	15 -. Extra .-> 3
	15["eff_st_put__60 ctlxfer.put_BR_IF"]
	8 --> 15
	14 -. Extra .-> 15
	14{{"Sϕ Codeptr Stack Trap Locals Globals Tables Memory Extra "}}
	4 --> 14
	20 --> 14
	27 --> 14
	27{{"Sϕ Codeptr Stack Trap Locals Globals Tables Memory Extra "}}
	23 --> 27
	26 --> 27
	25 --> 27
	25["eff__56__78 doFallthru"]
	5 -. Codeptr .-> 25
	9 -. Stack .-> 25
	0 -. Trap Locals Globals Tables Memory Extra .-> 25
	0[/"Start"\\]
	9["cond pop_u32"]
	0 -. Stack .-> 9
	5["depth imm_readULEB32"]
	0 -. Codeptr .-> 5
	26["eff__54__79 doBranch"]
	28 --> 26
	5 -. Codeptr .-> 26
	9 -. Stack .-> 26
	0 -. Trap Locals Globals Tables Memory Extra .-> 26
	28["label__80 f_getLabel"]
	5 --> 28
	23["mt__68__76 U32_maybeTrue"]
	24 --> 23
	24["cond__53__77 U32_not_equals"]
	9 --> 24
	16 --> 24
	16["abs__61 lift_u32"]
	10 --> 16
	10["arg__58 0"]
	20["eff_merge__71__74 merge"]
	19 --> 20
	18 --> 20
	18["eff__56__72 doFallthru"]
	5 -. Codeptr .-> 18
	9 -. Stack .-> 18
	0 -. Trap Locals Globals Tables Memory Extra .-> 18
	19["eff__54__73 doBranch"]
	21 --> 19
	5 -. Codeptr .-> 19
	9 -. Stack .-> 19
	0 -. Trap Locals Globals Tables Memory Extra .-> 19
	21["label__75 f_getLabel"]
	5 --> 21
	4["mb__70 bool.&&"]
	1 --> 4
	2 --> 4
	2["mf__69 U32_maybeFalse"]
	11 --> 2
	11["cond__53 U32_not_equals"]
	9 --> 11
	16 --> 11
	1["mt__68 U32_maybeTrue"]
	11 --> 1
	8["label f_getLabel"]
	5 --> 8
</pre>`;
window.traces["BR_IF_ul"]["post_surgery 56"] = ''
window.traces["BR_IF_ul"]["post_surgery 56"] += `<pre class='graph'>---
config:
  layout: elk
---
graph TD
	3[\\"Finish"/]
	14 -. Codeptr Stack Trap Locals Globals Tables Memory .-> 3
	15 -. Extra .-> 3
	15["eff_st_put__60 ctlxfer.put_BR_IF"]
	8 --> 15
	14 -. Extra .-> 15
	14{{"Sϕ Codeptr Stack Trap Locals Globals Tables Memory Extra "}}
	4 --> 14
	20 --> 14
	27 --> 14
	27{{"Sϕ Codeptr Stack Trap Locals Globals Tables Memory Extra "}}
	23 --> 27
	41 --> 27
	43 --> 27
	43["eff__56__78__90 doFallthru"]
	5 -. Codeptr .-> 43
	9 -. Stack .-> 43
	0 -. Trap Locals Globals Tables Memory Extra .-> 43
	0[/"Start"\\]
	9["cond pop_u32"]
	0 -. Stack .-> 9
	5["depth imm_readULEB32"]
	0 -. Codeptr .-> 5
	41["eff__54__79__89 doBranch"]
	40 --> 41
	5 -. Codeptr .-> 41
	9 -. Stack .-> 41
	0 -. Trap Locals Globals Tables Memory Extra .-> 41
	40["label__80__88 f_getLabel"]
	5 --> 40
	23["mt__68__76 U32_maybeTrue"]
	24 --> 23
	24["cond__53__77 U32_not_equals"]
	9 --> 24
	16 --> 24
	16["abs__61 lift_u32"]
	10 --> 16
	10["arg__58 0"]
	20["eff_merge__71__74 merge"]
	19 --> 20
	18 --> 20
	18["eff__56__72 doFallthru"]
	5 -. Codeptr .-> 18
	9 -. Stack .-> 18
	0 -. Trap Locals Globals Tables Memory Extra .-> 18
	19["eff__54__73 doBranch"]
	21 --> 19
	5 -. Codeptr .-> 19
	9 -. Stack .-> 19
	0 -. Trap Locals Globals Tables Memory Extra .-> 19
	21["label__75 f_getLabel"]
	5 --> 21
	4["mb__70 bool.&&"]
	1 --> 4
	2 --> 4
	2["mf__69 U32_maybeFalse"]
	11 --> 2
	11["cond__53 U32_not_equals"]
	9 --> 11
	16 --> 11
	1["mt__68 U32_maybeTrue"]
	11 --> 1
	8["label f_getLabel"]
	5 --> 8
</pre>`;
window.traces["BR_IF"]["unlem_scheduler"] = ''
window.traces["BR_IF"]["unlem_scheduler"] += `<pre class='graph'>graph TD
subgraph block_49["Block 49"]
	direction TB
	b49_8["label f_getLabel"]
	b49_15["eff_st_put__60 ctlxfer.put_BR_IF"]
	b49_3[\\"Finish"/]
	b49_8 --> b49_15
	b49_15 --> b49_3
end
phi_51 --> block_49
subgraph phi_51["Phi 51"]
	p51_14{{"Sϕ Codeptr Stack Trap Locals Globals Tables Memory Extra "}}
	p51_14{{"Sϕ Codeptr Stack Trap Locals Globals Tables Memory Extra "}}
end
block_52 --> phi_51
block_53 --> phi_51
subgraph block_52["Block 52"]
	direction TB
	b52_21["label__75 f_getLabel"]
	b52_18["eff__56__72 doFallthru"]
	b52_19["eff__54__73 doBranch"]
	b52_20["eff_merge__71__74 merge"]
	b52_21 --> b52_18
	b52_18 --> b52_19
	b52_19 --> b52_20
end
branch_50 --> block_52
subgraph branch_50["Branch 50"]
	br50_4["mb__70 bool.&&"]

end
block_54 --> branch_50
subgraph block_54["Block 54"]
	direction TB
	b54_0[/"Start"\\]
	b54_10["arg__58 0"]
	b54_16["abs__61 lift_u32"]
	b54_9["cond pop_u32"]
	b54_5["depth imm_readULEB32"]
	b54_24["cond__53__77 U32_not_equals"]
	b54_11["cond__53 U32_not_equals"]
	b54_23["mt__68__76 U32_maybeTrue"]
	b54_2["mf__69 U32_maybeFalse"]
	b54_1["mt__68 U32_maybeTrue"]
	b54_4["mb__70 bool.&&"]
	b54_0 --> b54_10
	b54_10 --> b54_16
	b54_16 --> b54_9
	b54_9 --> b54_5
	b54_5 --> b54_24
	b54_24 --> b54_11
	b54_11 --> b54_23
	b54_23 --> b54_2
	b54_2 --> b54_1
	b54_1 --> b54_4
end
subgraph block_53["Block 53"]
	direction TB
end
phi_56 --> block_53
subgraph phi_56["Phi 56"]
	p56_27{{"Sϕ Codeptr Stack Trap Locals Globals Tables Memory Extra "}}
	p56_27{{"Sϕ Codeptr Stack Trap Locals Globals Tables Memory Extra "}}
end
block_57 --> phi_56
block_58 --> phi_56
subgraph block_57["Block 57"]
	direction TB
	b57_40["label__80__88 f_getLabel"]
	b57_41["eff__54__79__89 doBranch"]
	b57_40 --> b57_41
end
branch_55 --> block_57
subgraph branch_55["Branch 55"]
	br55_23["mt__68__76 U32_maybeTrue"]

end
branch_50 --> branch_55
subgraph block_58["Block 58"]
	direction TB
	b58_43["eff__56__78__90 doFallthru"]
end
branch_55 --> block_58

</pre>`;
window.traces["BR_IF"]["unlem_scheduler_ssa"] = ''
window.traces["BR_IF"]["unlem_scheduler_ssa"] += `<pre class=''>def arg__58 : u32 = 0;
def abs__61 = lift_u32(arg__58);
def cond = pop_u32();
def depth = imm_readULEB32();
def cond__53__77 = U32_not_equals(cond, abs__61);
def cond__53 = U32_not_equals(cond, abs__61);
def mt__68__76 = U32_maybeTrue(cond__53__77);
def mf__69 = U32_maybeFalse(cond__53);
def mt__68 = U32_maybeTrue(cond__53);
def mb__70 = bool.&&(mt__68, mf__69);
if (mb__70) {
	def label__75 = f_getLabel(depth);
	def eff__56__72 = doFallthru();
	def eff__54__73 = doBranch(label__75);
	def eff_merge__71__74 = merge(eff__54__73, eff__56__72);
} else {
	if (mt__68__76) {
		def label__80__88 = f_getLabel(depth);
		def eff__54__79__89 = doBranch(label__80__88);
	} else {
		def eff__56__78__90 = doFallthru();
	}
// phis: 
}
// phis: 
def label = f_getLabel(depth);
def eff_st_put__60 = ctlxfer.put_BR_IF(label);
</pre>`;
window.traces["BR_IF"]["unlem_scheduler_ssa"] += `<pre class=''>def cond = pop_u32();
def depth = imm_readULEB32();
def cond1 = U32_not_equals(cond, lift_u32(0));
def cond2 = U32_not_equals(cond, lift_u32(0));
def mt = U32_maybeTrue(cond1);
def mf = U32_maybeFalse(cond2);
def mt1 = U32_maybeTrue(cond2);
if (bool.&&(mt1, mf)) {
	def label = f_getLabel(depth);
	doFallthru();
	doBranch(label);
} else {
	if (mt) {
		def label1 = f_getLabel(depth);
		doBranch(label1);
	} else {
		doFallthru();
	}
}
def label2 = f_getLabel(depth);
ctlxfer.put_BR_IF(label2);
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
	20 -. Codeptr Stack Trap Locals Globals Tables Memory .-> 1
	14 -. Extra .-> 1
	14["eff_st_put__60 ctlxfer.put_BR_IF"]
	5 --> 14
	20 -. Extra .-> 14
	20["eff_merge__71 merge"]
	12 --> 20
	10 --> 20
	10["eff__56 doFallthru"]
	3 -. Codeptr .-> 10
	6 -. Stack .-> 10
	0 -. Trap Locals Globals Tables Memory Extra .-> 10
	0[/"Start"\\]
	6["cond pop_u32"]
	0 -. Stack .-> 6
	3["depth imm_readULEB32"]
	0 -. Codeptr .-> 3
	12["eff__54 doBranch"]
	5 --> 12
	3 -. Codeptr .-> 12
	6 -. Stack .-> 12
	0 -. Trap Locals Globals Tables Memory Extra .-> 12
	5["label f_getLabel"]
	3 --> 5
</pre>`;
window.traces["BR_IF"]["chooseMerge"] = ''
window.traces["BR_IF"]["chooseMerge"] += `<pre class='graph'>---
config:
  layout: elk
---
graph TD
	1[\\"Finish"/]
	20 -. Codeptr Stack Trap Locals Globals Tables Memory .-> 1
	14 -. Extra .-> 1
	14["eff_st_put__60 ctlxfer.put_BR_IF"]
	5 --> 14
	20 -. Extra .-> 14
	20["eff_merge__71 merge"]
	12 --> 20
	10 --> 20
	10["eff__56 doFallthru"]
	3 -. Codeptr .-> 10
	6 -. Stack .-> 10
	0 -. Trap Locals Globals Tables Memory Extra .-> 10
	0[/"Start"\\]
	6["cond pop_u32"]
	0 -. Stack .-> 6
	3["depth imm_readULEB32"]
	0 -. Codeptr .-> 3
	12["eff__54 doBranch"]
	5 --> 12
	3 -. Codeptr .-> 12
	6 -. Stack .-> 12
	0 -. Trap Locals Globals Tables Memory Extra .-> 12
	5["label f_getLabel"]
	3 --> 5
</pre>`;
window.traces["BR_IF"]["scheduled"] = ''
window.traces["BR_IF"]["scheduled"] += `<pre class=''>def depth = imm_readULEB32();
def label = f_getLabel(depth);
def cond = pop_u32();
def eff__54 = doBranch(label);
def eff__56 = doFallthru();
def eff_merge__71 = merge(eff__54, eff__56);
def eff_st_put__60 = ctlxfer.put_BR_IF(label);
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
def arg__96 = (key);
def arg__95 = (labels);
def eff__94 = doSwitch(arg__95, arg__96);
</pre>`;
window.traces["BR_TABLE"]["raw"] = ''
window.traces["BR_TABLE"]["raw"] += `<pre class='graph'>---
config:
  layout: elk
---
graph TD
	1[\\"Finish"/]
	7 -. Codeptr Stack Trap Locals Globals Tables Memory Extra .-> 1
	7["eff__94 doSwitch"]
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
	8["eff_st_put__97 ctlxfer.put_BR_TABLE"]
	3 --> 8
	7 -. Extra .-> 8
	7["eff__94 doSwitch"]
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
	8["eff_st_put__97 ctlxfer.put_BR_TABLE"]
	3 --> 8
	7 -. Extra .-> 8
	7["eff__94 doSwitch"]
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
subgraph block_59["Block 59"]
	direction TB
	b59_0[/"Start"\\]
	b59_3["key pop_u32"]
	b59_2["labels imm_readLabels"]
	b59_4["eff__94 doSwitch"]
	b59_5["eff_st_put__97 ctlxfer.put_BR_TABLE"]
	b59_1[\\"Finish"/]
	b59_0 --> b59_3
	b59_3 --> b59_2
	b59_2 --> b59_4
	b59_4 --> b59_5
	b59_5 --> b59_1
end

</pre>`;
window.traces["BR_TABLE"]["scheduler_ssad"] = ''
window.traces["BR_TABLE"]["scheduler_ssad"] += `<pre class=''>def key = pop_u32();
def labels = imm_readLabels();
def eff__94 = doSwitch(labels, key);
def eff_st_put__97 = ctlxfer.put_BR_TABLE(labels);
</pre>`;
window.traces["BR_TABLE"]["scheduler_ssad_pretty"] = ''
window.traces["BR_TABLE"]["scheduler_ssad_pretty"] += `<pre class=''>def key = pop_u32();
def labels = imm_readLabels();
doSwitch(labels, key);
ctlxfer.put_BR_TABLE(labels);
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
	8["eff_st_put__97 ctlxfer.put_BR_TABLE"]
	3 --> 8
	7 -. Extra .-> 8
	7["eff__94 doSwitch"]
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
def eff__94 = doSwitch(labels, key);
def eff_st_put__97 = ctlxfer.put_BR_TABLE(labels);
</pre>`;
window.traces["BR_TABLE"]["unlem_scheduler"] = ''
window.traces["BR_TABLE"]["unlem_scheduler"] += `<pre class='graph'>graph TD
subgraph block_60["Block 60"]
	direction TB
	b60_0[/"Start"\\]
	b60_3["key pop_u32"]
	b60_2["labels imm_readLabels"]
	b60_4["eff__94 doSwitch"]
	b60_5["eff_st_put__97 ctlxfer.put_BR_TABLE"]
	b60_1[\\"Finish"/]
	b60_0 --> b60_3
	b60_3 --> b60_2
	b60_2 --> b60_4
	b60_4 --> b60_5
	b60_5 --> b60_1
end

</pre>`;
window.traces["BR_TABLE"]["unlem_scheduler_ssa"] = ''
window.traces["BR_TABLE"]["unlem_scheduler_ssa"] += `<pre class=''>def key = pop_u32();
def labels = imm_readLabels();
def eff__94 = doSwitch(labels, key);
def eff_st_put__97 = ctlxfer.put_BR_TABLE(labels);
</pre>`;
window.traces["BR_TABLE"]["unlem_scheduler_ssa"] += `<pre class=''>def key = pop_u32();
def labels = imm_readLabels();
doSwitch(labels, key);
ctlxfer.put_BR_TABLE(labels);
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
	8["eff_st_put__97 ctlxfer.put_BR_TABLE"]
	3 --> 8
	7 -. Extra .-> 8
	7["eff__94 doSwitch"]
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
	8["eff_st_put__97 ctlxfer.put_BR_TABLE"]
	3 --> 8
	7 -. Extra .-> 8
	7["eff__94 doSwitch"]
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
def eff__94 = doSwitch(labels, key);
def eff_st_put__97 = ctlxfer.put_BR_TABLE(labels);
</pre>`;
window.traces["BR_TABLE"]["pretty"] = ''
window.traces["BR_TABLE"]["pretty"] += `<pre class=''>def labels = imm_readLabels();
def key = pop_u32();
doSwitch(labels, key);
ctlxfer.put_BR_TABLE(labels);
</pre>`;
window.traces["RETURN"] = {}
window.traces["RETURN"]["parsed"] = ''
window.traces["RETURN"]["parsed"] += `<pre class=''>def eff__98 = doReturn();
</pre>`;
window.traces["RETURN"]["raw"] = ''
window.traces["RETURN"]["raw"] += `<pre class='graph'>---
config:
  layout: elk
---
graph TD
	1[\\"Finish"/]
	3 -. Codeptr Stack Trap Locals Globals Tables Memory Extra .-> 1
	3["eff__98 doReturn"]
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
	3["eff__98 doReturn"]
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
	3["eff__98 doReturn"]
	0 -. Codeptr Stack Trap Locals Globals Tables Memory Extra .-> 3
	0[/"Start"\\]
</pre>`;
window.traces["RETURN"]["schedulerMermaid"] = ''
window.traces["RETURN"]["schedulerMermaid"] += `<pre class='graph'>graph TD
subgraph block_61["Block 61"]
	direction TB
	b61_0[/"Start"\\]
	b61_2["eff__98 doReturn"]
	b61_1[\\"Finish"/]
	b61_0 --> b61_2
	b61_2 --> b61_1
end

</pre>`;
window.traces["RETURN"]["scheduler_ssad"] = ''
window.traces["RETURN"]["scheduler_ssad"] += `<pre class=''>def eff__98 = doReturn();
</pre>`;
window.traces["RETURN"]["scheduler_ssad_pretty"] = ''
window.traces["RETURN"]["scheduler_ssad_pretty"] += `<pre class=''>doReturn();
</pre>`;
window.traces["RETURN"]["unLEM"] = ''
window.traces["RETURN"]["unLEM"] += `<pre class='graph'>---
config:
  layout: elk
---
graph TD
	1[\\"Finish"/]
	3 -. Codeptr Stack Trap Locals Globals Tables Memory Extra .-> 1
	3["eff__98 doReturn"]
	0 -. Codeptr Stack Trap Locals Globals Tables Memory Extra .-> 3
	0[/"Start"\\]
</pre>`;
window.traces["RETURN"]["unlem_schedule"] = ''
window.traces["RETURN"]["unlem_schedule"] += `<pre class=''>def eff__98 = doReturn();
</pre>`;
window.traces["RETURN"]["unlem_scheduler"] = ''
window.traces["RETURN"]["unlem_scheduler"] += `<pre class='graph'>graph TD
subgraph block_62["Block 62"]
	direction TB
	b62_0[/"Start"\\]
	b62_2["eff__98 doReturn"]
	b62_1[\\"Finish"/]
	b62_0 --> b62_2
	b62_2 --> b62_1
end

</pre>`;
window.traces["RETURN"]["unlem_scheduler_ssa"] = ''
window.traces["RETURN"]["unlem_scheduler_ssa"] += `<pre class=''>def eff__98 = doReturn();
</pre>`;
window.traces["RETURN"]["unlem_scheduler_ssa"] += `<pre class=''>doReturn();
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
	3["eff__98 doReturn"]
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
	3["eff__98 doReturn"]
	0 -. Codeptr Stack Trap Locals Globals Tables Memory Extra .-> 3
	0[/"Start"\\]
</pre>`;
window.traces["RETURN"]["scheduled"] = ''
window.traces["RETURN"]["scheduled"] += `<pre class=''>def eff__98 = doReturn();
</pre>`;
window.traces["RETURN"]["pretty"] = ''
window.traces["RETURN"]["pretty"] += `<pre class=''>doReturn();
</pre>`;
window.traces["CALL"] = {}
window.traces["CALL"]["parsed"] = ''
window.traces["CALL"]["parsed"] += `<pre class=''>def index = imm_readULEB32();
def arg__103 = (index);
def sig = m_getFuncSignature(arg__103);
def arg__102 = (index);
def target = i_getFunction(arg__102);
def arg__101 = (target);
def arg__100 = (sig);
def eff__99 = doCall(arg__100, arg__101);
</pre>`;
window.traces["CALL"]["raw"] = ''
window.traces["CALL"]["raw"] += `<pre class='graph'>---
config:
  layout: elk
---
graph TD
	1[\\"Finish"/]
	10 -. Codeptr Stack Trap Locals Globals Tables Memory Extra .-> 1
	10["eff__99 doCall"]
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
	10["eff__99 doCall"]
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
	10["eff__99 doCall"]
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
subgraph block_63["Block 63"]
	direction TB
	b63_0[/"Start"\\]
	b63_2["index imm_readULEB32"]
	b63_4["target i_getFunction"]
	b63_3["sig m_getFuncSignature"]
	b63_5["eff__99 doCall"]
	b63_1[\\"Finish"/]
	b63_0 --> b63_2
	b63_2 --> b63_4
	b63_4 --> b63_3
	b63_3 --> b63_5
	b63_5 --> b63_1
end

</pre>`;
window.traces["CALL"]["scheduler_ssad"] = ''
window.traces["CALL"]["scheduler_ssad"] += `<pre class=''>def index = imm_readULEB32();
def target = i_getFunction(index);
def sig = m_getFuncSignature(index);
def eff__99 = doCall(sig, target);
</pre>`;
window.traces["CALL"]["scheduler_ssad_pretty"] = ''
window.traces["CALL"]["scheduler_ssad_pretty"] += `<pre class=''>def index = imm_readULEB32();
def target = i_getFunction(index);
def sig = m_getFuncSignature(index);
doCall(sig, target);
</pre>`;
window.traces["CALL"]["unLEM"] = ''
window.traces["CALL"]["unLEM"] += `<pre class='graph'>---
config:
  layout: elk
---
graph TD
	1[\\"Finish"/]
	10 -. Codeptr Stack Trap Locals Globals Tables Memory Extra .-> 1
	10["eff__99 doCall"]
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
def eff__99 = doCall(sig, target);
</pre>`;
window.traces["CALL"]["unlem_scheduler"] = ''
window.traces["CALL"]["unlem_scheduler"] += `<pre class='graph'>graph TD
subgraph block_64["Block 64"]
	direction TB
	b64_0[/"Start"\\]
	b64_2["index imm_readULEB32"]
	b64_4["target i_getFunction"]
	b64_3["sig m_getFuncSignature"]
	b64_5["eff__99 doCall"]
	b64_1[\\"Finish"/]
	b64_0 --> b64_2
	b64_2 --> b64_4
	b64_4 --> b64_3
	b64_3 --> b64_5
	b64_5 --> b64_1
end

</pre>`;
window.traces["CALL"]["unlem_scheduler_ssa"] = ''
window.traces["CALL"]["unlem_scheduler_ssa"] += `<pre class=''>def index = imm_readULEB32();
def target = i_getFunction(index);
def sig = m_getFuncSignature(index);
def eff__99 = doCall(sig, target);
</pre>`;
window.traces["CALL"]["unlem_scheduler_ssa"] += `<pre class=''>def index = imm_readULEB32();
def target = i_getFunction(index);
def sig = m_getFuncSignature(index);
doCall(sig, target);
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
	10["eff__99 doCall"]
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
	10["eff__99 doCall"]
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
def eff__99 = doCall(sig, target);
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
def arg__118 = (sig_index);
def sig = m_getSignature(arg__118);
def arg__117 = (table_index);
def is64 = m_isTable64(arg__117);
def cond__104 = (is64);
if (cond__104) {
	def func_index = pop_u64();
	def arg__110 = (func_index);
	def arg__109 = (sig);
	def arg__108 = (table_index);
	def target = i_getTableFunction64(arg__108, arg__109, arg__110);
	def arg__107 = (target);
	def arg__106 = (sig);
	def eff__105 = doCall(arg__106, arg__107);
} else {
	def func_index = pop_u32();
	def arg__116 = (func_index);
	def arg__115 = (sig);
	def arg__114 = (table_index);
	def target = i_getTableFunction32(arg__114, arg__115, arg__116);
	def arg__113 = (target);
	def arg__112 = (sig);
	def eff__111 = doCall(arg__112, arg__113);
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
	17["eff__111 doCall"]
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
	25["eff__105 doCall"]
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
	27["eff_st_put__119 ctlxfer.put_CALL_INDIRECT"]
	8 --> 27
	26 -. Extra .-> 27
	26{{"Sϕ Codeptr Stack Trap Locals Globals Tables Memory Extra "}}
	8 --> 26
	25 --> 26
	17 --> 26
	17["eff__111 doCall"]
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
	25["eff__105 doCall"]
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
	27["eff_st_put__119 ctlxfer.put_CALL_INDIRECT"]
	8 --> 27
	26 -. Extra .-> 27
	26{{"Sϕ Codeptr Stack Trap Locals Globals Tables Memory Extra "}}
	8 --> 26
	25 --> 26
	17 --> 26
	17["eff__111 doCall"]
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
	25["eff__105 doCall"]
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
window.traces["CALL_INDIRECT"]["post_surgery 67"] = ''
window.traces["CALL_INDIRECT"]["post_surgery 67"] += `<pre class='graph'>---
config:
  layout: elk
---
graph TD
	2[\\"Finish"/]
	11 -. Codeptr Stack Trap Locals Globals Tables Memory .-> 2
	12 -. Extra .-> 2
	12["eff_st_put__119 ctlxfer.put_CALL_INDIRECT"]
	8 --> 12
	11 -. Extra .-> 12
	11{{"Sϕ Codeptr Stack Trap Locals Globals Tables Memory Extra "}}
	8 --> 11
	16 --> 11
	19 --> 11
	19["eff__111__123 doCall"]
	7 --> 19
	18 --> 19
	5 -. Codeptr .-> 19
	10 -. Stack .-> 19
	0 -. Trap Locals Globals Tables Memory Extra .-> 19
	0[/"Start"\\]
	10["func_index pop_u32"]
	0 -. Stack .-> 10
	5["table_index imm_readULEB32"]
	4 -. Codeptr .-> 5
	4["sig_index imm_readULEB32"]
	0 -. Codeptr .-> 4
	18["target__122 i_getTableFunction32"]
	5 --> 18
	7 --> 18
	10 --> 18
	7["sig m_getSignature"]
	4 --> 7
	16["eff__105__121 doCall"]
	7 --> 16
	15 --> 16
	5 -. Codeptr .-> 16
	3 -. Stack .-> 16
	0 -. Trap Locals Globals Tables Memory Extra .-> 16
	3["func_index pop_u64"]
	0 -. Stack .-> 3
	15["target__120 i_getTableFunction64"]
	5 --> 15
	7 --> 15
	3 --> 15
	8["is64 m_isTable64"]
	5 --> 8
</pre>`;
window.traces["CALL_INDIRECT"]["schedulerMermaid"] = ''
window.traces["CALL_INDIRECT"]["schedulerMermaid"] += `<pre class='graph'>graph TD
subgraph block_65["Block 65"]
	direction TB
	b65_12["eff_st_put__119 ctlxfer.put_CALL_INDIRECT"]
	b65_2[\\"Finish"/]
	b65_12 --> b65_2
end
phi_67 --> block_65
subgraph phi_67["Phi 67"]
	p67_11{{"Sϕ Codeptr Stack Trap Locals Globals Tables Memory Extra "}}
	p67_11{{"Sϕ Codeptr Stack Trap Locals Globals Tables Memory Extra "}}
end
block_68 --> phi_67
block_69 --> phi_67
subgraph block_68["Block 68"]
	direction TB
	b68_3["func_index pop_u64"]
	b68_15["target__120 i_getTableFunction64"]
	b68_16["eff__105__121 doCall"]
	b68_3 --> b68_15
	b68_15 --> b68_16
end
branch_66 --> block_68
subgraph branch_66["Branch 66"]
	br66_8["is64 m_isTable64"]

end
block_70 --> branch_66
subgraph block_70["Block 70"]
	direction TB
	b70_0[/"Start"\\]
	b70_4["sig_index imm_readULEB32"]
	b70_7["sig m_getSignature"]
	b70_5["table_index imm_readULEB32"]
	b70_8["is64 m_isTable64"]
	b70_0 --> b70_4
	b70_4 --> b70_7
	b70_7 --> b70_5
	b70_5 --> b70_8
end
subgraph block_69["Block 69"]
	direction TB
	b69_10["func_index pop_u32"]
	b69_18["target__122 i_getTableFunction32"]
	b69_19["eff__111__123 doCall"]
	b69_10 --> b69_18
	b69_18 --> b69_19
end
branch_66 --> block_69

</pre>`;
window.traces["CALL_INDIRECT"]["scheduler_ssad"] = ''
window.traces["CALL_INDIRECT"]["scheduler_ssad"] += `<pre class=''>def sig_index = imm_readULEB32();
def sig = m_getSignature(sig_index);
def table_index = imm_readULEB32();
def is64 = m_isTable64(table_index);
if (is64) {
	def func_index = pop_u64();
	def target__120 = i_getTableFunction64(table_index, sig, func_index);
	def eff__105__121 = doCall(sig, target__120);
} else {
	def func_index = pop_u32();
	def target__122 = i_getTableFunction32(table_index, sig, func_index);
	def eff__111__123 = doCall(sig, target__122);
}
// phis: 
def eff_st_put__119 = ctlxfer.put_CALL_INDIRECT(is64);
</pre>`;
window.traces["CALL_INDIRECT"]["scheduler_ssad_pretty"] = ''
window.traces["CALL_INDIRECT"]["scheduler_ssad_pretty"] += `<pre class=''>def sig_index = imm_readULEB32();
def sig = m_getSignature(sig_index);
def table_index = imm_readULEB32();
def is64 = m_isTable64(table_index);
if (is64) {
	def func_index = pop_u64();
	def target = i_getTableFunction64(table_index, sig, func_index);
	doCall(sig, target);
} else {
	def func_index = pop_u32();
	def target1 = i_getTableFunction32(table_index, sig, func_index);
	doCall(sig, target1);
}
ctlxfer.put_CALL_INDIRECT(is64);
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
	27["eff_st_put__119 ctlxfer.put_CALL_INDIRECT"]
	8 --> 27
	26 -. Extra .-> 27
	26{{"Sϕ Codeptr Stack Trap Locals Globals Tables Memory Extra "}}
	8 --> 26
	25 --> 26
	17 --> 26
	17["eff__111 doCall"]
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
	25["eff__105 doCall"]
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
def sig = m_getSignature(sig_index);
def table_index = imm_readULEB32();
def is64 = m_isTable64(table_index);
if (is64) {
	def func_index = pop_u64();
	def target = i_getTableFunction64(table_index, sig, func_index);
	def eff__105 = doCall(sig, target);
} else {
	def func_index = pop_u32();
	def target = i_getTableFunction32(table_index, sig, func_index);
	def eff__111 = doCall(sig, target);
}
// phis: 
def eff_st_put__119 = ctlxfer.put_CALL_INDIRECT(is64);
</pre>`;
window.traces["CALL_INDIRECT_ul"] = {}
window.traces["CALL_INDIRECT_ul"]["post_surgery 73"] = ''
window.traces["CALL_INDIRECT_ul"]["post_surgery 73"] += `<pre class='graph'>---
config:
  layout: elk
---
graph TD
	2[\\"Finish"/]
	11 -. Codeptr Stack Trap Locals Globals Tables Memory .-> 2
	12 -. Extra .-> 2
	12["eff_st_put__119 ctlxfer.put_CALL_INDIRECT"]
	8 --> 12
	11 -. Extra .-> 12
	11{{"Sϕ Codeptr Stack Trap Locals Globals Tables Memory Extra "}}
	8 --> 11
	16 --> 11
	19 --> 11
	19["eff__111__131 doCall"]
	7 --> 19
	18 --> 19
	5 -. Codeptr .-> 19
	10 -. Stack .-> 19
	0 -. Trap Locals Globals Tables Memory Extra .-> 19
	0[/"Start"\\]
	10["func_index pop_u32"]
	0 -. Stack .-> 10
	5["table_index imm_readULEB32"]
	4 -. Codeptr .-> 5
	4["sig_index imm_readULEB32"]
	0 -. Codeptr .-> 4
	18["target__130 i_getTableFunction32"]
	5 --> 18
	7 --> 18
	10 --> 18
	7["sig m_getSignature"]
	4 --> 7
	16["eff__105__129 doCall"]
	7 --> 16
	15 --> 16
	5 -. Codeptr .-> 16
	3 -. Stack .-> 16
	0 -. Trap Locals Globals Tables Memory Extra .-> 16
	3["func_index pop_u64"]
	0 -. Stack .-> 3
	15["target__128 i_getTableFunction64"]
	5 --> 15
	7 --> 15
	3 --> 15
	8["is64 m_isTable64"]
	5 --> 8
</pre>`;
window.traces["CALL_INDIRECT"]["unlem_scheduler"] = ''
window.traces["CALL_INDIRECT"]["unlem_scheduler"] += `<pre class='graph'>graph TD
subgraph block_71["Block 71"]
	direction TB
	b71_12["eff_st_put__119 ctlxfer.put_CALL_INDIRECT"]
	b71_2[\\"Finish"/]
	b71_12 --> b71_2
end
phi_73 --> block_71
subgraph phi_73["Phi 73"]
	p73_11{{"Sϕ Codeptr Stack Trap Locals Globals Tables Memory Extra "}}
	p73_11{{"Sϕ Codeptr Stack Trap Locals Globals Tables Memory Extra "}}
end
block_74 --> phi_73
block_75 --> phi_73
subgraph block_74["Block 74"]
	direction TB
	b74_3["func_index pop_u64"]
	b74_15["target__128 i_getTableFunction64"]
	b74_16["eff__105__129 doCall"]
	b74_3 --> b74_15
	b74_15 --> b74_16
end
branch_72 --> block_74
subgraph branch_72["Branch 72"]
	br72_8["is64 m_isTable64"]

end
block_76 --> branch_72
subgraph block_76["Block 76"]
	direction TB
	b76_0[/"Start"\\]
	b76_4["sig_index imm_readULEB32"]
	b76_7["sig m_getSignature"]
	b76_5["table_index imm_readULEB32"]
	b76_8["is64 m_isTable64"]
	b76_0 --> b76_4
	b76_4 --> b76_7
	b76_7 --> b76_5
	b76_5 --> b76_8
end
subgraph block_75["Block 75"]
	direction TB
	b75_10["func_index pop_u32"]
	b75_18["target__130 i_getTableFunction32"]
	b75_19["eff__111__131 doCall"]
	b75_10 --> b75_18
	b75_18 --> b75_19
end
branch_72 --> block_75

</pre>`;
window.traces["CALL_INDIRECT"]["unlem_scheduler_ssa"] = ''
window.traces["CALL_INDIRECT"]["unlem_scheduler_ssa"] += `<pre class=''>def sig_index = imm_readULEB32();
def sig = m_getSignature(sig_index);
def table_index = imm_readULEB32();
def is64 = m_isTable64(table_index);
if (is64) {
	def func_index = pop_u64();
	def target__128 = i_getTableFunction64(table_index, sig, func_index);
	def eff__105__129 = doCall(sig, target__128);
} else {
	def func_index = pop_u32();
	def target__130 = i_getTableFunction32(table_index, sig, func_index);
	def eff__111__131 = doCall(sig, target__130);
}
// phis: 
def eff_st_put__119 = ctlxfer.put_CALL_INDIRECT(is64);
</pre>`;
window.traces["CALL_INDIRECT"]["unlem_scheduler_ssa"] += `<pre class=''>def sig_index = imm_readULEB32();
def sig = m_getSignature(sig_index);
def table_index = imm_readULEB32();
def is64 = m_isTable64(table_index);
if (is64) {
	def func_index = pop_u64();
	def target = i_getTableFunction64(table_index, sig, func_index);
	doCall(sig, target);
} else {
	def func_index = pop_u32();
	def target1 = i_getTableFunction32(table_index, sig, func_index);
	doCall(sig, target1);
}
ctlxfer.put_CALL_INDIRECT(is64);
</pre>`;
window.traces["CALL_INDIRECT"]["unlem_pretty"] = ''
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
window.traces["CALL_INDIRECT"]["constUnLEM"] = ''
window.traces["CALL_INDIRECT"]["constUnLEM"] += `<pre class='graph'>---
config:
  layout: elk
---
graph TD
	1[\\"Finish"/]
	26 -. Codeptr Stack Trap Locals Globals Tables Memory .-> 1
	27 -. Extra .-> 1
	27["eff_st_put__119 ctlxfer.put_CALL_INDIRECT"]
	8 --> 27
	26 -. Extra .-> 27
	26{{"Sϕ Codeptr Stack Trap Locals Globals Tables Memory Extra "}}
	8 --> 26
	25 --> 26
	17 --> 26
	17["eff__111 doCall"]
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
	25["eff__105 doCall"]
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
	27["eff_st_put__119 ctlxfer.put_CALL_INDIRECT"]
	8 --> 27
	26 -. Extra .-> 27
	26{{"Sϕ Codeptr Stack Trap Locals Globals Tables Memory Extra "}}
	8 --> 26
	25 --> 26
	17 --> 26
	17["eff__111 doCall"]
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
	25["eff__105 doCall"]
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
def sig = m_getSignature(sig_index);
def table_index = imm_readULEB32();
def is64 = m_isTable64(table_index);
if (is64) {
	def func_index = pop_u64();
	def target = i_getTableFunction64(table_index, sig, func_index);
	def eff__105 = doCall(sig, target);
} else {
	def func_index = pop_u32();
	def target = i_getTableFunction32(table_index, sig, func_index);
	def eff__111 = doCall(sig, target);
}
// phis: 
def eff_st_put__119 = ctlxfer.put_CALL_INDIRECT(is64);
</pre>`;
window.traces["CALL_INDIRECT"]["pretty"] = ''
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
window.traces["RETURN_CALL"] = {}
window.traces["RETURN_CALL"]["parsed"] = ''
window.traces["RETURN_CALL"]["parsed"] += `<pre class=''>def index = imm_readULEB32();
def arg__140 = (index);
def sig = m_getFuncSignature(arg__140);
def arg__139 = (index);
def target = i_getFunction(arg__139);
def arg__138 = (target);
def arg__137 = (sig);
def eff__136 = doReturnCall(arg__137, arg__138);
</pre>`;
window.traces["RETURN_CALL"]["raw"] = ''
window.traces["RETURN_CALL"]["raw"] += `<pre class='graph'>---
config:
  layout: elk
---
graph TD
	1[\\"Finish"/]
	10 -. Codeptr Stack Trap Locals Globals Tables Memory Extra .-> 1
	10["eff__136 doReturnCall"]
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
	10["eff__136 doReturnCall"]
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
	10["eff__136 doReturnCall"]
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
subgraph block_77["Block 77"]
	direction TB
	b77_0[/"Start"\\]
	b77_2["index imm_readULEB32"]
	b77_4["target i_getFunction"]
	b77_3["sig m_getFuncSignature"]
	b77_5["eff__136 doReturnCall"]
	b77_1[\\"Finish"/]
	b77_0 --> b77_2
	b77_2 --> b77_4
	b77_4 --> b77_3
	b77_3 --> b77_5
	b77_5 --> b77_1
end

</pre>`;
window.traces["RETURN_CALL"]["scheduler_ssad"] = ''
window.traces["RETURN_CALL"]["scheduler_ssad"] += `<pre class=''>def index = imm_readULEB32();
def target = i_getFunction(index);
def sig = m_getFuncSignature(index);
def eff__136 = doReturnCall(sig, target);
</pre>`;
window.traces["RETURN_CALL"]["scheduler_ssad_pretty"] = ''
window.traces["RETURN_CALL"]["scheduler_ssad_pretty"] += `<pre class=''>def index = imm_readULEB32();
def target = i_getFunction(index);
def sig = m_getFuncSignature(index);
doReturnCall(sig, target);
</pre>`;
window.traces["RETURN_CALL"]["unLEM"] = ''
window.traces["RETURN_CALL"]["unLEM"] += `<pre class='graph'>---
config:
  layout: elk
---
graph TD
	1[\\"Finish"/]
	10 -. Codeptr Stack Trap Locals Globals Tables Memory Extra .-> 1
	10["eff__136 doReturnCall"]
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
def eff__136 = doReturnCall(sig, target);
</pre>`;
window.traces["RETURN_CALL"]["unlem_scheduler"] = ''
window.traces["RETURN_CALL"]["unlem_scheduler"] += `<pre class='graph'>graph TD
subgraph block_78["Block 78"]
	direction TB
	b78_0[/"Start"\\]
	b78_2["index imm_readULEB32"]
	b78_4["target i_getFunction"]
	b78_3["sig m_getFuncSignature"]
	b78_5["eff__136 doReturnCall"]
	b78_1[\\"Finish"/]
	b78_0 --> b78_2
	b78_2 --> b78_4
	b78_4 --> b78_3
	b78_3 --> b78_5
	b78_5 --> b78_1
end

</pre>`;
window.traces["RETURN_CALL"]["unlem_scheduler_ssa"] = ''
window.traces["RETURN_CALL"]["unlem_scheduler_ssa"] += `<pre class=''>def index = imm_readULEB32();
def target = i_getFunction(index);
def sig = m_getFuncSignature(index);
def eff__136 = doReturnCall(sig, target);
</pre>`;
window.traces["RETURN_CALL"]["unlem_scheduler_ssa"] += `<pre class=''>def index = imm_readULEB32();
def target = i_getFunction(index);
def sig = m_getFuncSignature(index);
doReturnCall(sig, target);
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
	10["eff__136 doReturnCall"]
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
	10["eff__136 doReturnCall"]
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
def eff__136 = doReturnCall(sig, target);
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
def arg__142 = (tv);
def eff__141 = pop_Value(arg__142);
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
	5["eff__141 pop_Value"]
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
	5["eff__141 pop_Value"]
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
	5["eff__141 pop_Value"]
	3 --> 5
	0 -. Stack .-> 5
	0[/"Start"\\]
	3["tv f_getTopOfStackType"]
	0 -. Stack .-> 3
</pre>`;
window.traces["DROP"]["schedulerMermaid"] = ''
window.traces["DROP"]["schedulerMermaid"] += `<pre class='graph'>graph TD
subgraph block_79["Block 79"]
	direction TB
	b79_0[/"Start"\\]
	b79_2["tv f_getTopOfStackType"]
	b79_3["eff__141 pop_Value"]
	b79_1[\\"Finish"/]
	b79_0 --> b79_2
	b79_2 --> b79_3
	b79_3 --> b79_1
end

</pre>`;
window.traces["DROP"]["scheduler_ssad"] = ''
window.traces["DROP"]["scheduler_ssad"] += `<pre class=''>def tv = f_getTopOfStackType();
def eff__141 = pop_Value(tv);
</pre>`;
window.traces["DROP"]["scheduler_ssad_pretty"] = ''
window.traces["DROP"]["scheduler_ssad_pretty"] += `<pre class=''>def tv = f_getTopOfStackType();
pop_Value(tv);
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
	5["eff__141 pop_Value"]
	3 --> 5
	0 -. Stack .-> 5
	0[/"Start"\\]
	3["tv f_getTopOfStackType"]
	0 -. Stack .-> 3
</pre>`;
window.traces["DROP"]["unlem_schedule"] = ''
window.traces["DROP"]["unlem_schedule"] += `<pre class=''>def tv = f_getTopOfStackType();
def eff__141 = pop_Value(tv);
</pre>`;
window.traces["DROP"]["unlem_scheduler"] = ''
window.traces["DROP"]["unlem_scheduler"] += `<pre class='graph'>graph TD
subgraph block_80["Block 80"]
	direction TB
	b80_0[/"Start"\\]
	b80_2["tv f_getTopOfStackType"]
	b80_3["eff__141 pop_Value"]
	b80_1[\\"Finish"/]
	b80_0 --> b80_2
	b80_2 --> b80_3
	b80_3 --> b80_1
end

</pre>`;
window.traces["DROP"]["unlem_scheduler_ssa"] = ''
window.traces["DROP"]["unlem_scheduler_ssa"] += `<pre class=''>def tv = f_getTopOfStackType();
def eff__141 = pop_Value(tv);
</pre>`;
window.traces["DROP"]["unlem_scheduler_ssa"] += `<pre class=''>def tv = f_getTopOfStackType();
pop_Value(tv);
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
	5["eff__141 pop_Value"]
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
	5["eff__141 pop_Value"]
	3 --> 5
	0 -. Stack .-> 5
	0[/"Start"\\]
	3["tv f_getTopOfStackType"]
	0 -. Stack .-> 3
</pre>`;
window.traces["DROP"]["scheduled"] = ''
window.traces["DROP"]["scheduled"] += `<pre class=''>def tv = f_getTopOfStackType();
def eff__141 = pop_Value(tv);
</pre>`;
window.traces["DROP"]["pretty"] = ''
window.traces["DROP"]["pretty"] += `<pre class=''>def tv = f_getTopOfStackType();
pop_Value(tv);
</pre>`;
window.traces["SELECT"] = {}
window.traces["SELECT"]["parsed"] = ''
window.traces["SELECT"]["parsed"] += `<pre class=''>def c = pop_u32();
def tv = f_getTopOfStackType();
def arg__153 = (tv);
def b = pop_Value(arg__153);
def arg__152 = (tv);
def a = pop_Value(arg__152);
def arg__151 : u32 = 0;
def arg__150 = (c);
def cond__143 = u32.!=(arg__150, arg__151);
if (cond__143) {
	def arg__146 = (a);
	def arg__145 = (tv);
	def eff__144 = push_Value(arg__145, arg__146);
} else {
	def arg__149 = (b);
	def arg__148 = (tv);
	def eff__147 = push_Value(arg__148, arg__149);
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
	14["eff__147 push_Value"]
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
	17["eff__144 push_Value"]
	4 --> 17
	8 --> 17
	8 -. Stack .-> 17
	11["cond__143 u32.!="]
	3 --> 11
	9 --> 11
	9["arg__151 0"]
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
	14["eff__147 push_Value"]
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
	17["eff__144 push_Value"]
	4 --> 17
	8 --> 17
	8 -. Stack .-> 17
	11["cond__143 U32_not_equals"]
	3 --> 11
	9 --> 11
	9["arg__151 0"]
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
	14["eff__147 push_Value"]
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
	17["eff__144 push_Value"]
	4 --> 17
	8 --> 17
	8 -. Stack .-> 17
	11["cond__143 U32_not_equals"]
	3 --> 11
	19 --> 11
	19["abs__154 lift_u32"]
	9 --> 19
	9["arg__151 0"]
</pre>`;
window.traces["SELECT"]["post_surgery 83"] = ''
window.traces["SELECT"]["post_surgery 83"] += `<pre class='graph'>---
config:
  layout: elk
---
graph TD
	2[\\"Finish"/]
	0 -. Codeptr Trap Locals Globals Tables Memory Extra .-> 2
	3 -. Stack .-> 2
	3{{"Sϕ Stack "}}
	10 --> 3
	13 --> 3
	15 --> 3
	15["eff__147__156 push_Value"]
	6 --> 15
	7 --> 15
	8 -. Stack .-> 15
	8["a pop_Value"]
	6 --> 8
	7 -. Stack .-> 8
	7["b pop_Value"]
	6 --> 7
	5 -. Stack .-> 7
	5["c pop_u32"]
	0 -. Stack .-> 5
	0[/"Start"\\]
	6["tv f_getTopOfStackType"]
	5 -. Stack .-> 6
	13["eff__144__155 push_Value"]
	6 --> 13
	8 --> 13
	8 -. Stack .-> 13
	10["cond__143 U32_not_equals"]
	5 --> 10
	4 --> 10
	4["abs__154 lift_u32"]
	9 --> 4
	9["arg__151 0"]
</pre>`;
window.traces["SELECT"]["schedulerMermaid"] = ''
window.traces["SELECT"]["schedulerMermaid"] += `<pre class='graph'>graph TD
subgraph block_81["Block 81"]
	direction TB
	b81_2[\\"Finish"/]
end
phi_83 --> block_81
subgraph phi_83["Phi 83"]
	p83_3{{"Sϕ Stack "}}
end
block_84 --> phi_83
block_85 --> phi_83
subgraph block_84["Block 84"]
	direction TB
	b84_13["eff__144__155 push_Value"]
end
branch_82 --> block_84
subgraph branch_82["Branch 82"]
	br82_10["cond__143 U32_not_equals"]

end
block_86 --> branch_82
subgraph block_86["Block 86"]
	direction TB
	b86_0[/"Start"\\]
	b86_5["c pop_u32"]
	b86_6["tv f_getTopOfStackType"]
	b86_9["arg__151 0"]
	b86_7["b pop_Value"]
	b86_8["a pop_Value"]
	b86_4["abs__154 lift_u32"]
	b86_10["cond__143 U32_not_equals"]
	b86_0 --> b86_5
	b86_5 --> b86_6
	b86_6 --> b86_9
	b86_9 --> b86_7
	b86_7 --> b86_8
	b86_8 --> b86_4
	b86_4 --> b86_10
end
subgraph block_85["Block 85"]
	direction TB
	b85_15["eff__147__156 push_Value"]
end
branch_82 --> block_85

</pre>`;
window.traces["SELECT"]["scheduler_ssad"] = ''
window.traces["SELECT"]["scheduler_ssad"] += `<pre class=''>def c = pop_u32();
def tv = f_getTopOfStackType();
def arg__151 : u32 = 0;
def b = pop_Value(tv);
def a = pop_Value(tv);
def abs__154 = lift_u32(arg__151);
def cond__143 = U32_not_equals(c, abs__154);
if (cond__143) {
	def eff__144__155 = push_Value(tv, a);
} else {
	def eff__147__156 = push_Value(tv, b);
}
// phis: 
</pre>`;
window.traces["SELECT"]["scheduler_ssad_pretty"] = ''
window.traces["SELECT"]["scheduler_ssad_pretty"] += `<pre class=''>def c = pop_u32();
def tv = f_getTopOfStackType();
def b = pop_Value(tv);
def a = pop_Value(tv);
def cond = U32_not_equals(c, lift_u32(0));
if (cond) {
	push_Value(tv, a);
} else {
	push_Value(tv, b);
}
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
	22 --> 18
	25 --> 18
	23 --> 18
	23{{"Sϕ Stack "}}
	20 --> 23
	17 --> 23
	14 --> 23
	14["eff__147 push_Value"]
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
	17["eff__144 push_Value"]
	4 --> 17
	8 --> 17
	8 -. Stack .-> 17
	20["mt__157 U32_maybeTrue"]
	11 --> 20
	11["cond__143 U32_not_equals"]
	3 --> 11
	19 --> 11
	19["abs__154 lift_u32"]
	9 --> 19
	9["arg__151 0"]
	25["push__161 push_Value"]
	4 --> 25
	24 --> 25
	8 -. Stack .-> 25
	24["merge__160 merge_Val"]
	4 --> 24
	8 --> 24
	6 --> 24
	6 -. Stack .-> 24
	22["mb__159 bool.&&"]
	20 --> 22
	21 --> 22
	21["mf__158 U32_maybeFalse"]
	11 --> 21
</pre>`;
window.traces["SELECT"]["unlem_schedule"] = ''
window.traces["SELECT"]["unlem_schedule"] += `<pre class=''>def c = pop_u32();
def tv = f_getTopOfStackType();
def b = pop_Value(tv);
def a = pop_Value(tv);
def arg__151 : u32 = 0;
def abs__154 = lift_u32(arg__151);
def cond__143 = U32_not_equals(c, abs__154);
def mt__157 = U32_maybeTrue(cond__143);
def mf__158 = U32_maybeFalse(cond__143);
def mb__159 = bool.&&(mt__157, mf__158);
if (mb__159) {
	def merge__160 = merge_Val(tv, a, b);
	def push__161 = push_Value(tv, merge__160);
} else {
	if (mt__157) {
		def eff__144 = push_Value(tv, a);
	} else {
		def eff__147 = push_Value(tv, b);
	}
// phis: 
}
// phis: 
</pre>`;
window.traces["SELECT_ul"] = {}
window.traces["SELECT_ul"]["post_surgery 89"] = ''
window.traces["SELECT_ul"]["post_surgery 89"] += `<pre class='graph'>---
config:
  layout: elk
---
graph TD
	2[\\"Finish"/]
	0 -. Codeptr Trap Locals Globals Tables Memory Extra .-> 2
	3 -. Stack .-> 2
	3{{"Sϕ Stack "}}
	10 --> 3
	20 --> 3
	23 --> 3
	23{{"Sϕ Stack "}}
	7 --> 23
	24 --> 23
	22 --> 23
	22["eff__147__164 push_Value"]
	6 --> 22
	9 --> 22
	12 -. Stack .-> 22
	12["a pop_Value"]
	6 --> 12
	9 -. Stack .-> 12
	9["b pop_Value"]
	6 --> 9
	5 -. Stack .-> 9
	5["c pop_u32"]
	0 -. Stack .-> 5
	0[/"Start"\\]
	6["tv f_getTopOfStackType"]
	5 -. Stack .-> 6
	24["eff__144__165 push_Value"]
	6 --> 24
	12 --> 24
	12 -. Stack .-> 24
	7["mt__157 U32_maybeTrue"]
	16 --> 7
	16["cond__143 U32_not_equals"]
	5 --> 16
	4 --> 16
	4["abs__154 lift_u32"]
	14 --> 4
	14["arg__151 0"]
	20["push__161__163 push_Value"]
	6 --> 20
	19 --> 20
	12 -. Stack .-> 20
	19["merge__160__162 merge_Val"]
	6 --> 19
	12 --> 19
	9 --> 19
	9 -. Stack .-> 19
	10["mb__159 bool.&&"]
	7 --> 10
	8 --> 10
	8["mf__158 U32_maybeFalse"]
	16 --> 8
</pre>`;
window.traces["SELECT_ul"]["post_surgery 94"] = ''
window.traces["SELECT_ul"]["post_surgery 94"] += `<pre class='graph'>---
config:
  layout: elk
---
graph TD
	2[\\"Finish"/]
	0 -. Codeptr Trap Locals Globals Tables Memory Extra .-> 2
	3 -. Stack .-> 2
	3{{"Sϕ Stack "}}
	10 --> 3
	20 --> 3
	23 --> 3
	23{{"Sϕ Stack "}}
	7 --> 23
	26 --> 23
	28 --> 23
	28["eff__147__164__167 push_Value"]
	6 --> 28
	9 --> 28
	12 -. Stack .-> 28
	12["a pop_Value"]
	6 --> 12
	9 -. Stack .-> 12
	9["b pop_Value"]
	6 --> 9
	5 -. Stack .-> 9
	5["c pop_u32"]
	0 -. Stack .-> 5
	0[/"Start"\\]
	6["tv f_getTopOfStackType"]
	5 -. Stack .-> 6
	26["eff__144__165__166 push_Value"]
	6 --> 26
	12 --> 26
	12 -. Stack .-> 26
	7["mt__157 U32_maybeTrue"]
	16 --> 7
	16["cond__143 U32_not_equals"]
	5 --> 16
	4 --> 16
	4["abs__154 lift_u32"]
	14 --> 4
	14["arg__151 0"]
	20["push__161__163 push_Value"]
	6 --> 20
	19 --> 20
	12 -. Stack .-> 20
	19["merge__160__162 merge_Val"]
	6 --> 19
	12 --> 19
	9 --> 19
	9 -. Stack .-> 19
	10["mb__159 bool.&&"]
	7 --> 10
	8 --> 10
	8["mf__158 U32_maybeFalse"]
	16 --> 8
</pre>`;
window.traces["SELECT"]["unlem_scheduler"] = ''
window.traces["SELECT"]["unlem_scheduler"] += `<pre class='graph'>graph TD
subgraph block_87["Block 87"]
	direction TB
	b87_2[\\"Finish"/]
end
phi_89 --> block_87
subgraph phi_89["Phi 89"]
	p89_3{{"Sϕ Stack "}}
end
block_90 --> phi_89
block_91 --> phi_89
subgraph block_90["Block 90"]
	direction TB
	b90_19["merge__160__162 merge_Val"]
	b90_20["push__161__163 push_Value"]
	b90_19 --> b90_20
end
branch_88 --> block_90
subgraph branch_88["Branch 88"]
	br88_10["mb__159 bool.&&"]

end
block_92 --> branch_88
subgraph block_92["Block 92"]
	direction TB
	b92_0[/"Start"\\]
	b92_14["arg__151 0"]
	b92_4["abs__154 lift_u32"]
	b92_5["c pop_u32"]
	b92_6["tv f_getTopOfStackType"]
	b92_9["b pop_Value"]
	b92_12["a pop_Value"]
	b92_16["cond__143 U32_not_equals"]
	b92_8["mf__158 U32_maybeFalse"]
	b92_7["mt__157 U32_maybeTrue"]
	b92_10["mb__159 bool.&&"]
	b92_0 --> b92_14
	b92_14 --> b92_4
	b92_4 --> b92_5
	b92_5 --> b92_6
	b92_6 --> b92_9
	b92_9 --> b92_12
	b92_12 --> b92_16
	b92_16 --> b92_8
	b92_8 --> b92_7
	b92_7 --> b92_10
end
subgraph block_91["Block 91"]
	direction TB
end
phi_94 --> block_91
subgraph phi_94["Phi 94"]
	p94_23{{"Sϕ Stack "}}
end
block_95 --> phi_94
block_96 --> phi_94
subgraph block_95["Block 95"]
	direction TB
	b95_26["eff__144__165__166 push_Value"]
end
branch_93 --> block_95
subgraph branch_93["Branch 93"]
	br93_7["mt__157 U32_maybeTrue"]

end
branch_88 --> branch_93
subgraph block_96["Block 96"]
	direction TB
	b96_28["eff__147__164__167 push_Value"]
end
branch_93 --> block_96

</pre>`;
window.traces["SELECT"]["unlem_scheduler_ssa"] = ''
window.traces["SELECT"]["unlem_scheduler_ssa"] += `<pre class=''>def arg__151 : u32 = 0;
def abs__154 = lift_u32(arg__151);
def c = pop_u32();
def tv = f_getTopOfStackType();
def b = pop_Value(tv);
def a = pop_Value(tv);
def cond__143 = U32_not_equals(c, abs__154);
def mf__158 = U32_maybeFalse(cond__143);
def mt__157 = U32_maybeTrue(cond__143);
def mb__159 = bool.&&(mt__157, mf__158);
if (mb__159) {
	def merge__160__162 = merge_Val(tv, a, b);
	def push__161__163 = push_Value(tv, merge__160__162);
} else {
	if (mt__157) {
		def eff__144__165__166 = push_Value(tv, a);
	} else {
		def eff__147__164__167 = push_Value(tv, b);
	}
// phis: 
}
// phis: 
</pre>`;
window.traces["SELECT"]["unlem_scheduler_ssa"] += `<pre class=''>def c = pop_u32();
def tv = f_getTopOfStackType();
def b = pop_Value(tv);
def a = pop_Value(tv);
def cond = U32_not_equals(c, lift_u32(0));
def mf = U32_maybeFalse(cond);
def mt = U32_maybeTrue(cond);
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
	25 -. Stack .-> 1
	25["push__161 push_Value"]
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
	24["merge__160 merge_Val"]
	4 --> 24
	8 --> 24
	6 --> 24
	6 -. Stack .-> 24
</pre>`;
window.traces["SELECT"]["chooseMerge"] = ''
window.traces["SELECT"]["chooseMerge"] += `<pre class='graph'>---
config:
  layout: elk
---
graph TD
	1[\\"Finish"/]
	0 -. Codeptr Trap Locals Globals Tables Memory Extra .-> 1
	25 -. Stack .-> 1
	25["push__161 push_Value"]
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
window.traces["SELECT"]["scheduled"] = ''
window.traces["SELECT"]["scheduled"] += `<pre class=''>def c = pop_u32();
def tv = f_getTopOfStackType();
def b = pop_Value(tv);
def a = pop_Value(tv);
def push__161 = push_Value(tv, tv);
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
def arg__173 = (index);
def tv = f_getLocalType(arg__173);
def arg__172 = (index);
def arg__171 = (tv);
def val = getLocal(arg__171, arg__172);
def arg__170 = (val);
def arg__169 = (tv);
def eff__168 = push_Value(arg__169, arg__170);
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
	11["eff__168 push_Value"]
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
	11["eff__168 push_Value"]
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
	11["eff__168 push_Value"]
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
subgraph block_97["Block 97"]
	direction TB
	b97_0[/"Start"\\]
	b97_2["index imm_readULEB32"]
	b97_3["tv f_getLocalType"]
	b97_4["val getLocal"]
	b97_5["eff__168 push_Value"]
	b97_1[\\"Finish"/]
	b97_0 --> b97_2
	b97_2 --> b97_3
	b97_3 --> b97_4
	b97_4 --> b97_5
	b97_5 --> b97_1
end

</pre>`;
window.traces["LOCAL_GET"]["scheduler_ssad"] = ''
window.traces["LOCAL_GET"]["scheduler_ssad"] += `<pre class=''>def index = imm_readULEB32();
def tv = f_getLocalType(index);
def val = getLocal(tv, index);
def eff__168 = push_Value(tv, val);
</pre>`;
window.traces["LOCAL_GET"]["scheduler_ssad_pretty"] = ''
window.traces["LOCAL_GET"]["scheduler_ssad_pretty"] += `<pre class=''>def index = imm_readULEB32();
def tv = f_getLocalType(index);
def val = getLocal(tv, index);
push_Value(tv, val);
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
	11["eff__168 push_Value"]
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
def eff__168 = push_Value(tv, val);
</pre>`;
window.traces["LOCAL_GET"]["unlem_scheduler"] = ''
window.traces["LOCAL_GET"]["unlem_scheduler"] += `<pre class='graph'>graph TD
subgraph block_98["Block 98"]
	direction TB
	b98_0[/"Start"\\]
	b98_2["index imm_readULEB32"]
	b98_3["tv f_getLocalType"]
	b98_4["val getLocal"]
	b98_5["eff__168 push_Value"]
	b98_1[\\"Finish"/]
	b98_0 --> b98_2
	b98_2 --> b98_3
	b98_3 --> b98_4
	b98_4 --> b98_5
	b98_5 --> b98_1
end

</pre>`;
window.traces["LOCAL_GET"]["unlem_scheduler_ssa"] = ''
window.traces["LOCAL_GET"]["unlem_scheduler_ssa"] += `<pre class=''>def index = imm_readULEB32();
def tv = f_getLocalType(index);
def val = getLocal(tv, index);
def eff__168 = push_Value(tv, val);
</pre>`;
window.traces["LOCAL_GET"]["unlem_scheduler_ssa"] += `<pre class=''>def index = imm_readULEB32();
def tv = f_getLocalType(index);
def val = getLocal(tv, index);
push_Value(tv, val);
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
	11["eff__168 push_Value"]
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
	11["eff__168 push_Value"]
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
def eff__168 = push_Value(tv, val);
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
def arg__179 = (index);
def tv = f_getLocalType(arg__179);
def arg__178 = (tv);
def val = pop_Value(arg__178);
def arg__177 = (val);
def arg__176 = (index);
def arg__175 = (tv);
def eff__174 = setLocal(arg__175, arg__176, arg__177);
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
	11["eff__174 setLocal"]
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
	11["eff__174 setLocal"]
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
	11["eff__174 setLocal"]
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
subgraph block_99["Block 99"]
	direction TB
	b99_0[/"Start"\\]
	b99_2["index imm_readULEB32"]
	b99_3["tv f_getLocalType"]
	b99_4["val pop_Value"]
	b99_5["eff__174 setLocal"]
	b99_1[\\"Finish"/]
	b99_0 --> b99_2
	b99_2 --> b99_3
	b99_3 --> b99_4
	b99_4 --> b99_5
	b99_5 --> b99_1
end

</pre>`;
window.traces["LOCAL_SET"]["scheduler_ssad"] = ''
window.traces["LOCAL_SET"]["scheduler_ssad"] += `<pre class=''>def index = imm_readULEB32();
def tv = f_getLocalType(index);
def val = pop_Value(tv);
def eff__174 = setLocal(tv, index, val);
</pre>`;
window.traces["LOCAL_SET"]["scheduler_ssad_pretty"] = ''
window.traces["LOCAL_SET"]["scheduler_ssad_pretty"] += `<pre class=''>def index = imm_readULEB32();
def tv = f_getLocalType(index);
def val = pop_Value(tv);
setLocal(tv, index, val);
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
	11["eff__174 setLocal"]
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
def eff__174 = setLocal(tv, index, val);
</pre>`;
window.traces["LOCAL_SET"]["unlem_scheduler"] = ''
window.traces["LOCAL_SET"]["unlem_scheduler"] += `<pre class='graph'>graph TD
subgraph block_100["Block 100"]
	direction TB
	b100_0[/"Start"\\]
	b100_2["index imm_readULEB32"]
	b100_3["tv f_getLocalType"]
	b100_4["val pop_Value"]
	b100_5["eff__174 setLocal"]
	b100_1[\\"Finish"/]
	b100_0 --> b100_2
	b100_2 --> b100_3
	b100_3 --> b100_4
	b100_4 --> b100_5
	b100_5 --> b100_1
end

</pre>`;
window.traces["LOCAL_SET"]["unlem_scheduler_ssa"] = ''
window.traces["LOCAL_SET"]["unlem_scheduler_ssa"] += `<pre class=''>def index = imm_readULEB32();
def tv = f_getLocalType(index);
def val = pop_Value(tv);
def eff__174 = setLocal(tv, index, val);
</pre>`;
window.traces["LOCAL_SET"]["unlem_scheduler_ssa"] += `<pre class=''>def index = imm_readULEB32();
def tv = f_getLocalType(index);
def val = pop_Value(tv);
setLocal(tv, index, val);
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
	11["eff__174 setLocal"]
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
	11["eff__174 setLocal"]
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
def eff__174 = setLocal(tv, index, val);
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
def arg__188 = (index);
def tv = f_getLocalType(arg__188);
def arg__187 = (tv);
def val = pop_Value(arg__187);
def arg__186 = (val);
def arg__185 = (index);
def arg__184 = (tv);
def eff__183 = setLocal(arg__184, arg__185, arg__186);
def arg__182 = (val);
def arg__181 = (tv);
def eff__180 = push_Value(arg__181, arg__182);
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
	11["eff__183 setLocal"]
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
	14["eff__180 push_Value"]
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
	11["eff__183 setLocal"]
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
	14["eff__180 push_Value"]
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
	11["eff__183 setLocal"]
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
	14["eff__180 push_Value"]
	5 --> 14
	7 --> 14
	7 -. Stack .-> 14
</pre>`;
window.traces["LOCAL_TEE"]["schedulerMermaid"] = ''
window.traces["LOCAL_TEE"]["schedulerMermaid"] += `<pre class='graph'>graph TD
subgraph block_101["Block 101"]
	direction TB
	b101_0[/"Start"\\]
	b101_2["index imm_readULEB32"]
	b101_3["tv f_getLocalType"]
	b101_4["val pop_Value"]
	b101_5["eff__183 setLocal"]
	b101_6["eff__180 push_Value"]
	b101_1[\\"Finish"/]
	b101_0 --> b101_2
	b101_2 --> b101_3
	b101_3 --> b101_4
	b101_4 --> b101_5
	b101_5 --> b101_6
	b101_6 --> b101_1
end

</pre>`;
window.traces["LOCAL_TEE"]["scheduler_ssad"] = ''
window.traces["LOCAL_TEE"]["scheduler_ssad"] += `<pre class=''>def index = imm_readULEB32();
def tv = f_getLocalType(index);
def val = pop_Value(tv);
def eff__183 = setLocal(tv, index, val);
def eff__180 = push_Value(tv, val);
</pre>`;
window.traces["LOCAL_TEE"]["scheduler_ssad_pretty"] = ''
window.traces["LOCAL_TEE"]["scheduler_ssad_pretty"] += `<pre class=''>def index = imm_readULEB32();
def tv = f_getLocalType(index);
def val = pop_Value(tv);
setLocal(tv, index, val);
push_Value(tv, val);
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
	11["eff__183 setLocal"]
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
	14["eff__180 push_Value"]
	5 --> 14
	7 --> 14
	7 -. Stack .-> 14
</pre>`;
window.traces["LOCAL_TEE"]["unlem_schedule"] = ''
window.traces["LOCAL_TEE"]["unlem_schedule"] += `<pre class=''>def index = imm_readULEB32();
def tv = f_getLocalType(index);
def val = pop_Value(tv);
def eff__180 = push_Value(tv, val);
def eff__183 = setLocal(tv, index, val);
</pre>`;
window.traces["LOCAL_TEE"]["unlem_scheduler"] = ''
window.traces["LOCAL_TEE"]["unlem_scheduler"] += `<pre class='graph'>graph TD
subgraph block_102["Block 102"]
	direction TB
	b102_0[/"Start"\\]
	b102_2["index imm_readULEB32"]
	b102_3["tv f_getLocalType"]
	b102_4["val pop_Value"]
	b102_5["eff__183 setLocal"]
	b102_6["eff__180 push_Value"]
	b102_1[\\"Finish"/]
	b102_0 --> b102_2
	b102_2 --> b102_3
	b102_3 --> b102_4
	b102_4 --> b102_5
	b102_5 --> b102_6
	b102_6 --> b102_1
end

</pre>`;
window.traces["LOCAL_TEE"]["unlem_scheduler_ssa"] = ''
window.traces["LOCAL_TEE"]["unlem_scheduler_ssa"] += `<pre class=''>def index = imm_readULEB32();
def tv = f_getLocalType(index);
def val = pop_Value(tv);
def eff__183 = setLocal(tv, index, val);
def eff__180 = push_Value(tv, val);
</pre>`;
window.traces["LOCAL_TEE"]["unlem_scheduler_ssa"] += `<pre class=''>def index = imm_readULEB32();
def tv = f_getLocalType(index);
def val = pop_Value(tv);
setLocal(tv, index, val);
push_Value(tv, val);
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
	11["eff__183 setLocal"]
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
	14["eff__180 push_Value"]
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
	11["eff__183 setLocal"]
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
	14["eff__180 push_Value"]
	5 --> 14
	7 --> 14
	7 -. Stack .-> 14
</pre>`;
window.traces["LOCAL_TEE"]["scheduled"] = ''
window.traces["LOCAL_TEE"]["scheduled"] += `<pre class=''>def index = imm_readULEB32();
def tv = f_getLocalType(index);
def val = pop_Value(tv);
def eff__180 = push_Value(tv, val);
def eff__183 = setLocal(tv, index, val);
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
def arg__194 = (index);
def tv = m_getGlobalType(arg__194);
def arg__193 = (index);
def arg__192 = (tv);
def val = getGlobal(arg__192, arg__193);
def arg__191 = (val);
def arg__190 = (tv);
def eff__189 = push_Value(arg__190, arg__191);
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
	11["eff__189 push_Value"]
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
	11["eff__189 push_Value"]
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
	11["eff__189 push_Value"]
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
subgraph block_103["Block 103"]
	direction TB
	b103_0[/"Start"\\]
	b103_2["index imm_readULEB32"]
	b103_3["tv m_getGlobalType"]
	b103_4["val getGlobal"]
	b103_5["eff__189 push_Value"]
	b103_1[\\"Finish"/]
	b103_0 --> b103_2
	b103_2 --> b103_3
	b103_3 --> b103_4
	b103_4 --> b103_5
	b103_5 --> b103_1
end

</pre>`;
window.traces["GLOBAL_GET"]["scheduler_ssad"] = ''
window.traces["GLOBAL_GET"]["scheduler_ssad"] += `<pre class=''>def index = imm_readULEB32();
def tv = m_getGlobalType(index);
def val = getGlobal(tv, index);
def eff__189 = push_Value(tv, val);
</pre>`;
window.traces["GLOBAL_GET"]["scheduler_ssad_pretty"] = ''
window.traces["GLOBAL_GET"]["scheduler_ssad_pretty"] += `<pre class=''>def index = imm_readULEB32();
def tv = m_getGlobalType(index);
def val = getGlobal(tv, index);
push_Value(tv, val);
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
	11["eff__189 push_Value"]
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
def eff__189 = push_Value(tv, val);
</pre>`;
window.traces["GLOBAL_GET"]["unlem_scheduler"] = ''
window.traces["GLOBAL_GET"]["unlem_scheduler"] += `<pre class='graph'>graph TD
subgraph block_104["Block 104"]
	direction TB
	b104_0[/"Start"\\]
	b104_2["index imm_readULEB32"]
	b104_3["tv m_getGlobalType"]
	b104_4["val getGlobal"]
	b104_5["eff__189 push_Value"]
	b104_1[\\"Finish"/]
	b104_0 --> b104_2
	b104_2 --> b104_3
	b104_3 --> b104_4
	b104_4 --> b104_5
	b104_5 --> b104_1
end

</pre>`;
window.traces["GLOBAL_GET"]["unlem_scheduler_ssa"] = ''
window.traces["GLOBAL_GET"]["unlem_scheduler_ssa"] += `<pre class=''>def index = imm_readULEB32();
def tv = m_getGlobalType(index);
def val = getGlobal(tv, index);
def eff__189 = push_Value(tv, val);
</pre>`;
window.traces["GLOBAL_GET"]["unlem_scheduler_ssa"] += `<pre class=''>def index = imm_readULEB32();
def tv = m_getGlobalType(index);
def val = getGlobal(tv, index);
push_Value(tv, val);
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
	11["eff__189 push_Value"]
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
	11["eff__189 push_Value"]
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
def eff__189 = push_Value(tv, val);
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
def arg__200 = (index);
def tv = m_getGlobalType(arg__200);
def arg__199 = (tv);
def val = pop_Value(arg__199);
def arg__198 = (val);
def arg__197 = (index);
def arg__196 = (tv);
def eff__195 = setGlobal(arg__196, arg__197, arg__198);
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
	11["eff__195 setGlobal"]
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
	11["eff__195 setGlobal"]
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
	11["eff__195 setGlobal"]
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
subgraph block_105["Block 105"]
	direction TB
	b105_0[/"Start"\\]
	b105_2["index imm_readULEB32"]
	b105_3["tv m_getGlobalType"]
	b105_4["val pop_Value"]
	b105_5["eff__195 setGlobal"]
	b105_1[\\"Finish"/]
	b105_0 --> b105_2
	b105_2 --> b105_3
	b105_3 --> b105_4
	b105_4 --> b105_5
	b105_5 --> b105_1
end

</pre>`;
window.traces["GLOBAL_SET"]["scheduler_ssad"] = ''
window.traces["GLOBAL_SET"]["scheduler_ssad"] += `<pre class=''>def index = imm_readULEB32();
def tv = m_getGlobalType(index);
def val = pop_Value(tv);
def eff__195 = setGlobal(tv, index, val);
</pre>`;
window.traces["GLOBAL_SET"]["scheduler_ssad_pretty"] = ''
window.traces["GLOBAL_SET"]["scheduler_ssad_pretty"] += `<pre class=''>def index = imm_readULEB32();
def tv = m_getGlobalType(index);
def val = pop_Value(tv);
setGlobal(tv, index, val);
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
	11["eff__195 setGlobal"]
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
def eff__195 = setGlobal(tv, index, val);
</pre>`;
window.traces["GLOBAL_SET"]["unlem_scheduler"] = ''
window.traces["GLOBAL_SET"]["unlem_scheduler"] += `<pre class='graph'>graph TD
subgraph block_106["Block 106"]
	direction TB
	b106_0[/"Start"\\]
	b106_2["index imm_readULEB32"]
	b106_3["tv m_getGlobalType"]
	b106_4["val pop_Value"]
	b106_5["eff__195 setGlobal"]
	b106_1[\\"Finish"/]
	b106_0 --> b106_2
	b106_2 --> b106_3
	b106_3 --> b106_4
	b106_4 --> b106_5
	b106_5 --> b106_1
end

</pre>`;
window.traces["GLOBAL_SET"]["unlem_scheduler_ssa"] = ''
window.traces["GLOBAL_SET"]["unlem_scheduler_ssa"] += `<pre class=''>def index = imm_readULEB32();
def tv = m_getGlobalType(index);
def val = pop_Value(tv);
def eff__195 = setGlobal(tv, index, val);
</pre>`;
window.traces["GLOBAL_SET"]["unlem_scheduler_ssa"] += `<pre class=''>def index = imm_readULEB32();
def tv = m_getGlobalType(index);
def val = pop_Value(tv);
setGlobal(tv, index, val);
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
	11["eff__195 setGlobal"]
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
	11["eff__195 setGlobal"]
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
def eff__195 = setGlobal(tv, index, val);
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
def arg__210 = (table_index);
def cond__201 = m_isTable64(arg__210);
if (cond__201) {
	def index = pop_u64();
	def arg__205 = (index);
	def arg__204 = (table_index);
	def val = mach_readTable64(arg__204, arg__205);
	def arg__203 = (val);
	def eff__202 = push_Object(arg__203);
} else {
	def index = pop_u32();
	def arg__209 = (index);
	def arg__208 = (table_index);
	def val = mach_readTable32(arg__208, arg__209);
	def arg__207 = (val);
	def eff__206 = push_Object(arg__207);
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
	11["eff__206 push_Object"]
	9 --> 11
	6 -. Stack .-> 11
	6["index pop_u32"]
	0 -. Stack .-> 6
	9["val mach_readTable32"]
	3 --> 9
	6 --> 9
	3["table_index imm_readULEB32"]
	0 -. Codeptr .-> 3
	17["eff__202 push_Object"]
	15 --> 17
	12 -. Stack .-> 17
	12["index pop_u64"]
	0 -. Stack .-> 12
	15["val mach_readTable64"]
	3 --> 15
	12 --> 15
	5["cond__201 m_isTable64"]
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
	11["eff__206 push_Object"]
	9 --> 11
	6 -. Stack .-> 11
	6["index pop_u32"]
	0 -. Stack .-> 6
	9["val mach_readTable32"]
	3 --> 9
	6 --> 9
	3["table_index imm_readULEB32"]
	0 -. Codeptr .-> 3
	17["eff__202 push_Object"]
	15 --> 17
	12 -. Stack .-> 17
	12["index pop_u64"]
	0 -. Stack .-> 12
	15["val mach_readTable64"]
	3 --> 15
	12 --> 15
	5["cond__201 m_isTable64"]
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
	11["eff__206 push_Object"]
	9 --> 11
	6 -. Stack .-> 11
	6["index pop_u32"]
	0 -. Stack .-> 6
	9["val mach_readTable32"]
	3 --> 9
	6 --> 9
	3["table_index imm_readULEB32"]
	0 -. Codeptr .-> 3
	17["eff__202 push_Object"]
	15 --> 17
	12 -. Stack .-> 17
	12["index pop_u64"]
	0 -. Stack .-> 12
	15["val mach_readTable64"]
	3 --> 15
	12 --> 15
	5["cond__201 m_isTable64"]
	3 --> 5
</pre>`;
window.traces["TABLE_GET"]["post_surgery 109"] = ''
window.traces["TABLE_GET"]["post_surgery 109"] += `<pre class='graph'>---
config:
  layout: elk
---
graph TD
	2[\\"Finish"/]
	4 -. Codeptr .-> 2
	3 -. Stack .-> 2
	0 -. Trap Locals Globals Tables Memory Extra .-> 2
	0[/"Start"\\]
	3{{"Sϕ Stack "}}
	5 --> 3
	13 --> 3
	16 --> 3
	16["eff__206__214 push_Object"]
	15 --> 16
	6 -. Stack .-> 16
	6["index pop_u32"]
	0 -. Stack .-> 6
	15["val__213 mach_readTable32"]
	4 --> 15
	6 --> 15
	4["table_index imm_readULEB32"]
	0 -. Codeptr .-> 4
	13["eff__202__212 push_Object"]
	12 --> 13
	9 -. Stack .-> 13
	9["index pop_u64"]
	0 -. Stack .-> 9
	12["val__211 mach_readTable64"]
	4 --> 12
	9 --> 12
	5["cond__201 m_isTable64"]
	4 --> 5
</pre>`;
window.traces["TABLE_GET"]["schedulerMermaid"] = ''
window.traces["TABLE_GET"]["schedulerMermaid"] += `<pre class='graph'>graph TD
subgraph block_107["Block 107"]
	direction TB
	b107_2[\\"Finish"/]
end
phi_109 --> block_107
subgraph phi_109["Phi 109"]
	p109_3{{"Sϕ Stack "}}
end
block_110 --> phi_109
block_111 --> phi_109
subgraph block_110["Block 110"]
	direction TB
	b110_9["index pop_u64"]
	b110_12["val__211 mach_readTable64"]
	b110_13["eff__202__212 push_Object"]
	b110_9 --> b110_12
	b110_12 --> b110_13
end
branch_108 --> block_110
subgraph branch_108["Branch 108"]
	br108_5["cond__201 m_isTable64"]

end
block_112 --> branch_108
subgraph block_112["Block 112"]
	direction TB
	b112_0[/"Start"\\]
	b112_4["table_index imm_readULEB32"]
	b112_5["cond__201 m_isTable64"]
	b112_0 --> b112_4
	b112_4 --> b112_5
end
subgraph block_111["Block 111"]
	direction TB
	b111_6["index pop_u32"]
	b111_15["val__213 mach_readTable32"]
	b111_16["eff__206__214 push_Object"]
	b111_6 --> b111_15
	b111_15 --> b111_16
end
branch_108 --> block_111

</pre>`;
window.traces["TABLE_GET"]["scheduler_ssad"] = ''
window.traces["TABLE_GET"]["scheduler_ssad"] += `<pre class=''>def table_index = imm_readULEB32();
def cond__201 = m_isTable64(table_index);
if (cond__201) {
	def index = pop_u64();
	def val__211 = mach_readTable64(table_index, index);
	def eff__202__212 = push_Object(val__211);
} else {
	def index = pop_u32();
	def val__213 = mach_readTable32(table_index, index);
	def eff__206__214 = push_Object(val__213);
}
// phis: 
</pre>`;
window.traces["TABLE_GET"]["scheduler_ssad_pretty"] = ''
window.traces["TABLE_GET"]["scheduler_ssad_pretty"] += `<pre class=''>def table_index = imm_readULEB32();
def cond = m_isTable64(table_index);
if (cond) {
	def index = pop_u64();
	def val = mach_readTable64(table_index, index);
	push_Object(val);
} else {
	def index = pop_u32();
	def val1 = mach_readTable32(table_index, index);
	push_Object(val1);
}
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
	11["eff__206 push_Object"]
	9 --> 11
	6 -. Stack .-> 11
	6["index pop_u32"]
	0 -. Stack .-> 6
	9["val mach_readTable32"]
	3 --> 9
	6 --> 9
	3["table_index imm_readULEB32"]
	0 -. Codeptr .-> 3
	17["eff__202 push_Object"]
	15 --> 17
	12 -. Stack .-> 17
	12["index pop_u64"]
	0 -. Stack .-> 12
	15["val mach_readTable64"]
	3 --> 15
	12 --> 15
	5["cond__201 m_isTable64"]
	3 --> 5
</pre>`;
window.traces["TABLE_GET"]["unlem_schedule"] = ''
window.traces["TABLE_GET"]["unlem_schedule"] += `<pre class=''>def table_index = imm_readULEB32();
def cond__201 = m_isTable64(table_index);
if (cond__201) {
	def index = pop_u64();
	def val = mach_readTable64(table_index, index);
	def eff__202 = push_Object(val);
} else {
	def index = pop_u32();
	def val = mach_readTable32(table_index, index);
	def eff__206 = push_Object(val);
}
// phis: 
</pre>`;
window.traces["TABLE_GET_ul"] = {}
window.traces["TABLE_GET_ul"]["post_surgery 115"] = ''
window.traces["TABLE_GET_ul"]["post_surgery 115"] += `<pre class='graph'>---
config:
  layout: elk
---
graph TD
	2[\\"Finish"/]
	4 -. Codeptr .-> 2
	3 -. Stack .-> 2
	0 -. Trap Locals Globals Tables Memory Extra .-> 2
	0[/"Start"\\]
	3{{"Sϕ Stack "}}
	5 --> 3
	13 --> 3
	16 --> 3
	16["eff__206__218 push_Object"]
	15 --> 16
	6 -. Stack .-> 16
	6["index pop_u32"]
	0 -. Stack .-> 6
	15["val__217 mach_readTable32"]
	4 --> 15
	6 --> 15
	4["table_index imm_readULEB32"]
	0 -. Codeptr .-> 4
	13["eff__202__216 push_Object"]
	12 --> 13
	9 -. Stack .-> 13
	9["index pop_u64"]
	0 -. Stack .-> 9
	12["val__215 mach_readTable64"]
	4 --> 12
	9 --> 12
	5["cond__201 m_isTable64"]
	4 --> 5
</pre>`;
window.traces["TABLE_GET"]["unlem_scheduler"] = ''
window.traces["TABLE_GET"]["unlem_scheduler"] += `<pre class='graph'>graph TD
subgraph block_113["Block 113"]
	direction TB
	b113_2[\\"Finish"/]
end
phi_115 --> block_113
subgraph phi_115["Phi 115"]
	p115_3{{"Sϕ Stack "}}
end
block_116 --> phi_115
block_117 --> phi_115
subgraph block_116["Block 116"]
	direction TB
	b116_9["index pop_u64"]
	b116_12["val__215 mach_readTable64"]
	b116_13["eff__202__216 push_Object"]
	b116_9 --> b116_12
	b116_12 --> b116_13
end
branch_114 --> block_116
subgraph branch_114["Branch 114"]
	br114_5["cond__201 m_isTable64"]

end
block_118 --> branch_114
subgraph block_118["Block 118"]
	direction TB
	b118_0[/"Start"\\]
	b118_4["table_index imm_readULEB32"]
	b118_5["cond__201 m_isTable64"]
	b118_0 --> b118_4
	b118_4 --> b118_5
end
subgraph block_117["Block 117"]
	direction TB
	b117_6["index pop_u32"]
	b117_15["val__217 mach_readTable32"]
	b117_16["eff__206__218 push_Object"]
	b117_6 --> b117_15
	b117_15 --> b117_16
end
branch_114 --> block_117

</pre>`;
window.traces["TABLE_GET"]["unlem_scheduler_ssa"] = ''
window.traces["TABLE_GET"]["unlem_scheduler_ssa"] += `<pre class=''>def table_index = imm_readULEB32();
def cond__201 = m_isTable64(table_index);
if (cond__201) {
	def index = pop_u64();
	def val__215 = mach_readTable64(table_index, index);
	def eff__202__216 = push_Object(val__215);
} else {
	def index = pop_u32();
	def val__217 = mach_readTable32(table_index, index);
	def eff__206__218 = push_Object(val__217);
}
// phis: 
</pre>`;
window.traces["TABLE_GET"]["unlem_scheduler_ssa"] += `<pre class=''>def table_index = imm_readULEB32();
def cond = m_isTable64(table_index);
if (cond) {
	def index = pop_u64();
	def val = mach_readTable64(table_index, index);
	push_Object(val);
} else {
	def index = pop_u32();
	def val1 = mach_readTable32(table_index, index);
	push_Object(val1);
}
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
	11["eff__206 push_Object"]
	9 --> 11
	6 -. Stack .-> 11
	6["index pop_u32"]
	0 -. Stack .-> 6
	9["val mach_readTable32"]
	3 --> 9
	6 --> 9
	3["table_index imm_readULEB32"]
	0 -. Codeptr .-> 3
	17["eff__202 push_Object"]
	15 --> 17
	12 -. Stack .-> 17
	12["index pop_u64"]
	0 -. Stack .-> 12
	15["val mach_readTable64"]
	3 --> 15
	12 --> 15
	5["cond__201 m_isTable64"]
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
	11["eff__206 push_Object"]
	9 --> 11
	6 -. Stack .-> 11
	6["index pop_u32"]
	0 -. Stack .-> 6
	9["val mach_readTable32"]
	3 --> 9
	6 --> 9
	3["table_index imm_readULEB32"]
	0 -. Codeptr .-> 3
	17["eff__202 push_Object"]
	15 --> 17
	12 -. Stack .-> 17
	12["index pop_u64"]
	0 -. Stack .-> 12
	15["val mach_readTable64"]
	3 --> 15
	12 --> 15
	5["cond__201 m_isTable64"]
	3 --> 5
</pre>`;
window.traces["TABLE_GET"]["scheduled"] = ''
window.traces["TABLE_GET"]["scheduled"] += `<pre class=''>def table_index = imm_readULEB32();
def cond__201 = m_isTable64(table_index);
if (cond__201) {
	def index = pop_u64();
	def val = mach_readTable64(table_index, index);
	def eff__202 = push_Object(val);
} else {
	def index = pop_u32();
	def val = mach_readTable32(table_index, index);
	def eff__206 = push_Object(val);
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
def arg__228 = (table_index);
def cond__219 = m_isTable64(arg__228);
if (cond__219) {
	def val = pop_Object();
	def index = pop_u64();
	def arg__223 = (val);
	def arg__222 = (index);
	def arg__221 = (table_index);
	def eff__220 = mach_writeTable64(arg__221, arg__222, arg__223);
} else {
	def val = pop_Object();
	def index = pop_u32();
	def arg__227 = (val);
	def arg__226 = (index);
	def arg__225 = (table_index);
	def eff__224 = mach_writeTable32(arg__225, arg__226, arg__227);
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
	5["cond__219 m_isTable64"]
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
	5["cond__219 m_isTable64"]
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
	5["cond__219 m_isTable64"]
	3 --> 5
	3["table_index imm_readULEB32"]
	0 -. Codeptr .-> 3
</pre>`;
window.traces["TABLE_SET"]["post_surgery 121"] = ''
window.traces["TABLE_SET"]["post_surgery 121"] += `<pre class='graph'>---
config:
  layout: elk
---
graph TD
	1[\\"Finish"/]
	3 -. Codeptr .-> 1
	2 -. Stack .-> 1
	0 -. Trap Locals Globals Tables Memory Extra .-> 1
	0[/"Start"\\]
	2{{"Sϕ Stack "}}
	4 --> 2
	11 --> 2
	14 --> 2
	14["index__232 pop_u32"]
	13 -. Stack .-> 14
	13["val__231 pop_Object"]
	0 -. Stack .-> 13
	11["index__230 pop_u64"]
	10 -. Stack .-> 11
	10["val__229 pop_Object"]
	0 -. Stack .-> 10
	4["cond__219 m_isTable64"]
	3 --> 4
	3["table_index imm_readULEB32"]
	0 -. Codeptr .-> 3
</pre>`;
window.traces["TABLE_SET"]["schedulerMermaid"] = ''
window.traces["TABLE_SET"]["schedulerMermaid"] += `<pre class='graph'>graph TD
subgraph block_119["Block 119"]
	direction TB
	b119_1[\\"Finish"/]
end
phi_121 --> block_119
subgraph phi_121["Phi 121"]
	p121_2{{"Sϕ Stack "}}
end
block_122 --> phi_121
block_123 --> phi_121
subgraph block_122["Block 122"]
	direction TB
	b122_10["val__229 pop_Object"]
	b122_11["index__230 pop_u64"]
	b122_10 --> b122_11
end
branch_120 --> block_122
subgraph branch_120["Branch 120"]
	br120_4["cond__219 m_isTable64"]

end
block_124 --> branch_120
subgraph block_124["Block 124"]
	direction TB
	b124_0[/"Start"\\]
	b124_3["table_index imm_readULEB32"]
	b124_4["cond__219 m_isTable64"]
	b124_0 --> b124_3
	b124_3 --> b124_4
end
subgraph block_123["Block 123"]
	direction TB
	b123_13["val__231 pop_Object"]
	b123_14["index__232 pop_u32"]
	b123_13 --> b123_14
end
branch_120 --> block_123

</pre>`;
window.traces["TABLE_SET"]["scheduler_ssad"] = ''
window.traces["TABLE_SET"]["scheduler_ssad"] += `<pre class=''>def table_index = imm_readULEB32();
def cond__219 = m_isTable64(table_index);
if (cond__219) {
	def val__229 = pop_Object();
	def index__230 = pop_u64();
} else {
	def val__231 = pop_Object();
	def index__232 = pop_u32();
}
// phis: 
</pre>`;
window.traces["TABLE_SET"]["scheduler_ssad_pretty"] = ''
window.traces["TABLE_SET"]["scheduler_ssad_pretty"] += `<pre class=''>def table_index = imm_readULEB32();
def cond = m_isTable64(table_index);
if (cond) {
	def val = pop_Object();
	def index = pop_u64();
} else {
	def val1 = pop_Object();
	def index1 = pop_u32();
}
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
	5["cond__219 m_isTable64"]
	3 --> 5
	3["table_index imm_readULEB32"]
	0 -. Codeptr .-> 3
</pre>`;
window.traces["TABLE_SET"]["unlem_schedule"] = ''
window.traces["TABLE_SET"]["unlem_schedule"] += `<pre class=''>def table_index = imm_readULEB32();
def cond__219 = m_isTable64(table_index);
if (cond__219) {
	def val = pop_Object();
	def index = pop_u64();
} else {
	def val = pop_Object();
	def index = pop_u32();
}
// phis: 
</pre>`;
window.traces["TABLE_SET_ul"] = {}
window.traces["TABLE_SET_ul"]["post_surgery 127"] = ''
window.traces["TABLE_SET_ul"]["post_surgery 127"] += `<pre class='graph'>---
config:
  layout: elk
---
graph TD
	1[\\"Finish"/]
	3 -. Codeptr .-> 1
	2 -. Stack .-> 1
	0 -. Trap Locals Globals Tables Memory Extra .-> 1
	0[/"Start"\\]
	2{{"Sϕ Stack "}}
	4 --> 2
	11 --> 2
	14 --> 2
	14["index__236 pop_u32"]
	13 -. Stack .-> 14
	13["val__235 pop_Object"]
	0 -. Stack .-> 13
	11["index__234 pop_u64"]
	10 -. Stack .-> 11
	10["val__233 pop_Object"]
	0 -. Stack .-> 10
	4["cond__219 m_isTable64"]
	3 --> 4
	3["table_index imm_readULEB32"]
	0 -. Codeptr .-> 3
</pre>`;
window.traces["TABLE_SET"]["unlem_scheduler"] = ''
window.traces["TABLE_SET"]["unlem_scheduler"] += `<pre class='graph'>graph TD
subgraph block_125["Block 125"]
	direction TB
	b125_1[\\"Finish"/]
end
phi_127 --> block_125
subgraph phi_127["Phi 127"]
	p127_2{{"Sϕ Stack "}}
end
block_128 --> phi_127
block_129 --> phi_127
subgraph block_128["Block 128"]
	direction TB
	b128_10["val__233 pop_Object"]
	b128_11["index__234 pop_u64"]
	b128_10 --> b128_11
end
branch_126 --> block_128
subgraph branch_126["Branch 126"]
	br126_4["cond__219 m_isTable64"]

end
block_130 --> branch_126
subgraph block_130["Block 130"]
	direction TB
	b130_0[/"Start"\\]
	b130_3["table_index imm_readULEB32"]
	b130_4["cond__219 m_isTable64"]
	b130_0 --> b130_3
	b130_3 --> b130_4
end
subgraph block_129["Block 129"]
	direction TB
	b129_13["val__235 pop_Object"]
	b129_14["index__236 pop_u32"]
	b129_13 --> b129_14
end
branch_126 --> block_129

</pre>`;
window.traces["TABLE_SET"]["unlem_scheduler_ssa"] = ''
window.traces["TABLE_SET"]["unlem_scheduler_ssa"] += `<pre class=''>def table_index = imm_readULEB32();
def cond__219 = m_isTable64(table_index);
if (cond__219) {
	def val__233 = pop_Object();
	def index__234 = pop_u64();
} else {
	def val__235 = pop_Object();
	def index__236 = pop_u32();
}
// phis: 
</pre>`;
window.traces["TABLE_SET"]["unlem_scheduler_ssa"] += `<pre class=''>def table_index = imm_readULEB32();
def cond = m_isTable64(table_index);
if (cond) {
	def val = pop_Object();
	def index = pop_u64();
} else {
	def val1 = pop_Object();
	def index1 = pop_u32();
}
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
	5["cond__219 m_isTable64"]
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
	5["cond__219 m_isTable64"]
	3 --> 5
	3["table_index imm_readULEB32"]
	0 -. Codeptr .-> 3
</pre>`;
window.traces["TABLE_SET"]["scheduled"] = ''
window.traces["TABLE_SET"]["scheduled"] += `<pre class=''>def table_index = imm_readULEB32();
def cond__219 = m_isTable64(table_index);
if (cond__219) {
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
def arg__252 : byte = 0;
def arg__254 : byte = 0x40u8;
def arg__253 = (flags);
def arg__251 = u8.&(arg__253, arg__254);
def cond__249 = u8.!=(arg__251, arg__252);
if (cond__249) {
	def memindex__250 = imm_readULEB32();
}
// phis: memindex <- memindex__250; 
def arg__248 = (memindex);
def cond__237 = m_isMemory64(arg__248);
if (cond__237) {
	def offset = imm_readULEB64();
	def index = pop_u64();
	def arg__242 = (offset);
	def arg__241 = (index);
	def arg__240 = (memindex);
	def val = mach_readMemory64_u32(arg__240, arg__241, arg__242);
	def arg__239 = (val);
	def eff__238 = push_u32(arg__239);
} else {
	def offset = imm_readULEB32();
	def index = pop_u32();
	def arg__247 = (offset);
	def arg__246 = (index);
	def arg__245 = (memindex);
	def val = mach_readMemory32_u32(arg__245, arg__246, arg__247);
	def arg__244 = (val);
	def eff__243 = push_u32(arg__244);
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
	22["eff__243 push_u32"]
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
	10["memindex__250 imm_readULEB32"]
	3 -. Codeptr .-> 10
	9["cond__249 u8.!="]
	8 --> 9
	5 --> 9
	5["arg__252 0"]
	8["arg__251 u8.&"]
	3 --> 8
	6 --> 8
	6["arg__254 0x40u8"]
	11{"memindex ϕ"}
	9 --> 11
	10 --> 11
	4 --> 11
	4["memindex__255 0u"]
	30["eff__238 push_u32"]
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
	14["cond__237 m_isMemory64"]
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
	22["eff__243 push_u32"]
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
	10["memindex__250 imm_readULEB32"]
	3 -. Codeptr .-> 10
	9["cond__249 u8.!="]
	8 --> 9
	5 --> 9
	5["arg__252 0"]
	8["arg__251 u8.&"]
	3 --> 8
	6 --> 8
	6["arg__254 0x40u8"]
	11{"memindex ϕ"}
	9 --> 11
	10 --> 11
	4 --> 11
	4["memindex__256 0u"]
	30["eff__238 push_u32"]
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
	14["cond__237 m_isMemory64"]
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
	22["eff__243 push_u32"]
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
	10["memindex__250 imm_readULEB32"]
	3 -. Codeptr .-> 10
	9["cond__249 u8.!="]
	8 --> 9
	5 --> 9
	5["arg__252 0"]
	8["arg__251 u8.&"]
	3 --> 8
	6 --> 8
	6["arg__254 0x40u8"]
	11{"memindex ϕ"}
	9 --> 11
	10 --> 11
	4 --> 11
	4["memindex__256 0u"]
	30["eff__238 push_u32"]
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
	14["cond__237 m_isMemory64"]
	11 --> 14
	31{{"Sϕ Codeptr "}}
	14 --> 31
	23 --> 31
	15 --> 31
</pre>`;
window.traces["I32_LOAD"]["post_surgery 133"] = ''
window.traces["I32_LOAD"]["post_surgery 133"] += `<pre class='graph'>---
config:
  layout: elk
---
graph TD
	3[\\"Finish"/]
	21 -. Codeptr .-> 3
	2 -. Stack .-> 3
	1 -. Trap Locals Globals Tables Memory Extra .-> 3
	1[/"Start"\\]
	2{{"Sϕ Stack "}}
	19 --> 2
	18 --> 2
	9 --> 2
	9["eff__243 push_u32"]
	6 --> 9
	0 -. Stack .-> 9
	0["index pop_u32"]
	1 -. Stack .-> 0
	6["val mach_readMemory32_u32"]
	15 --> 6
	0 --> 6
	28 --> 6
	28["offset__262 imm_readULEB32"]
	17 -. Codeptr .-> 28
	17{{"Sϕ Codeptr "}}
	13 --> 17
	14 --> 17
	4 --> 17
	4["flags imm_readU8"]
	1 -. Codeptr .-> 4
	14["memindex__250 imm_readULEB32"]
	4 -. Codeptr .-> 14
	13["cond__249 u8.!="]
	11 --> 13
	7 --> 13
	7["arg__252 0"]
	11["arg__251 u8.&"]
	4 --> 11
	8 --> 11
	8["arg__254 0x40u8"]
	15{"memindex ϕ"}
	13 --> 15
	14 --> 15
	5 --> 15
	5["memindex__256 0u"]
	18["eff__238 push_u32"]
	16 --> 18
	12 -. Stack .-> 18
	12["index pop_u64"]
	1 -. Stack .-> 12
	16["val mach_readMemory64_u32"]
	15 --> 16
	12 --> 16
	24 --> 16
	24["offset__259 imm_readULEB64"]
	17 -. Codeptr .-> 24
	19["cond__237 m_isMemory64"]
	15 --> 19
	21{{"Sϕ Codeptr "}}
	19 --> 21
	24 --> 21
	28 --> 21
</pre>`;
window.traces["I32_LOAD"]["post_surgery 138"] = ''
window.traces["I32_LOAD"]["post_surgery 138"] += `<pre class='graph'>---
config:
  layout: elk
---
graph TD
	3[\\"Finish"/]
	21 -. Codeptr .-> 3
	2 -. Stack .-> 3
	1 -. Trap Locals Globals Tables Memory Extra .-> 3
	1[/"Start"\\]
	2{{"Sϕ Stack "}}
	19 --> 2
	18 --> 2
	9 --> 2
	9["eff__243 push_u32"]
	6 --> 9
	0 -. Stack .-> 9
	0["index pop_u32"]
	1 -. Stack .-> 0
	6["val mach_readMemory32_u32"]
	15 --> 6
	0 --> 6
	28 --> 6
	28["offset__262 imm_readULEB32"]
	17 -. Codeptr .-> 28
	17{{"Sϕ Codeptr "}}
	13 --> 17
	39 --> 17
	4 --> 17
	4["flags imm_readU8"]
	1 -. Codeptr .-> 4
	39["memindex__250__269 imm_readULEB32"]
	4 -. Codeptr .-> 39
	13["cond__249 u8.!="]
	11 --> 13
	7 --> 13
	7["arg__252 0"]
	11["arg__251 u8.&"]
	4 --> 11
	8 --> 11
	8["arg__254 0x40u8"]
	15{"memindex ϕ"}
	13 --> 15
	39 --> 15
	41 --> 15
	41["memindex__256__270 0u"]
	18["eff__238 push_u32"]
	16 --> 18
	12 -. Stack .-> 18
	12["index pop_u64"]
	1 -. Stack .-> 12
	16["val mach_readMemory64_u32"]
	15 --> 16
	12 --> 16
	24 --> 16
	24["offset__259 imm_readULEB64"]
	17 -. Codeptr .-> 24
	19["cond__237 m_isMemory64"]
	15 --> 19
	21{{"Sϕ Codeptr "}}
	19 --> 21
	24 --> 21
	28 --> 21
</pre>`;
window.traces["I32_LOAD"]["schedulerMermaid"] = ''
window.traces["I32_LOAD"]["schedulerMermaid"] += `<pre class='graph'>graph TD
subgraph block_131["Block 131"]
	direction TB
	b131_3[\\"Finish"/]
end
phi_133 --> block_131
subgraph phi_133["Phi 133"]
	p133_2{{"Sϕ Stack "}}
	p133_21{{"Sϕ Codeptr "}}
end
block_134 --> phi_133
block_135 --> phi_133
subgraph block_134["Block 134"]
	direction TB
	b134_24["offset__259 imm_readULEB64"]
	b134_12["index pop_u64"]
	b134_16["val mach_readMemory64_u32"]
	b134_18["eff__238 push_u32"]
	b134_24 --> b134_12
	b134_12 --> b134_16
	b134_16 --> b134_18
end
branch_132 --> block_134
subgraph branch_132["Branch 132"]
	br132_19["cond__237 m_isMemory64"]

end
block_136 --> branch_132
subgraph block_136["Block 136"]
	direction TB
	b136_19["cond__237 m_isMemory64"]
end
phi_138 --> block_136
subgraph phi_138["Phi 138"]
	p138_17{{"Sϕ Codeptr "}}
	p138_17{{"Sϕ Codeptr "}}
	p138_17{{"Sϕ Codeptr "}}
	p138_17{{"Sϕ Codeptr "}}
	p138_15{"memindex ϕ"}
	p138_15{"memindex ϕ"}
	p138_15{"memindex ϕ"}
	p138_15{"memindex ϕ"}
end
block_139 --> phi_138
block_140 --> phi_138
subgraph block_139["Block 139"]
	direction TB
	b139_39["memindex__250__269 imm_readULEB32"]
end
branch_137 --> block_139
subgraph branch_137["Branch 137"]
	br137_13["cond__249 u8.!="]

end
block_141 --> branch_137
subgraph block_141["Block 141"]
	direction TB
	b141_8["arg__254 0x40u8"]
	b141_7["arg__252 0"]
	b141_11["arg__251 u8.&"]
	b141_13["cond__249 u8.!="]
	b141_8 --> b141_7
	b141_7 --> b141_11
	b141_11 --> b141_13
end
subgraph block_140["Block 140"]
	direction TB
	b140_41["memindex__256__270 0u"]
end
branch_137 --> block_140
subgraph block_135["Block 135"]
	direction TB
	b135_28["offset__262 imm_readULEB32"]
	b135_0["index pop_u32"]
	b135_6["val mach_readMemory32_u32"]
	b135_9["eff__243 push_u32"]
	b135_28 --> b135_0
	b135_0 --> b135_6
	b135_6 --> b135_9
end
branch_132 --> block_135

</pre>`;
window.traces["I32_LOAD"]["scheduler_ssad"] = ''
window.traces["I32_LOAD"]["scheduler_ssad"] += `<pre class=''>def arg__254 : byte = 0x40u8;
def arg__252 : byte = 0;
def arg__251 = u8.&(flags, arg__254);
def cond__249 = u8.!=(arg__251, arg__252);
if (cond__249) {
	def memindex__250__269 = imm_readULEB32();
} else {
	def memindex__256__270 : u32 = 0u;
}
// phis: memindex <- memindex__250__269; memindex <- memindex__256__270; memindex <- memindex__250__269; memindex <- memindex__256__270; memindex <- memindex__250__269; memindex <- memindex__256__270; memindex <- memindex__250__269; memindex <- memindex__256__270; 
def cond__237 = m_isMemory64(memindex);
if (cond__237) {
	def offset__259 = imm_readULEB64();
	def index = pop_u64();
	def val = mach_readMemory64_u32(memindex, index, offset__259);
	def eff__238 = push_u32(val);
} else {
	def offset__262 = imm_readULEB32();
	def index = pop_u32();
	def val = mach_readMemory32_u32(memindex, index, offset__262);
	def eff__243 = push_u32(val);
}
// phis: 
</pre>`;
window.traces["I32_LOAD"]["scheduler_ssad_pretty"] = ''
window.traces["I32_LOAD"]["scheduler_ssad_pretty"] += `<pre class=''>if (u8.!=(u8.&(flags, 0x40u8), 0)) {
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
	def offset1 = imm_readULEB32();
	def index = pop_u32();
	def val = mach_readMemory32_u32(memindex, index, offset1);
	push_u32(val);
}
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
	22["eff__243 push_u32"]
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
	10["memindex__250 imm_readULEB32"]
	3 -. Codeptr .-> 10
	9["cond__249 u8.!="]
	8 --> 9
	5 --> 9
	5["arg__252 0"]
	8["arg__251 u8.&"]
	3 --> 8
	6 --> 8
	6["arg__254 0x40u8"]
	11{"memindex ϕ"}
	9 --> 11
	10 --> 11
	4 --> 11
	4["memindex__256 0u"]
	30["eff__238 push_u32"]
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
	14["cond__237 m_isMemory64"]
	11 --> 14
	31{{"Sϕ Codeptr "}}
	14 --> 31
	23 --> 31
	15 --> 31
</pre>`;
window.traces["I32_LOAD"]["unlem_schedule"] = ''
window.traces["I32_LOAD"]["unlem_schedule"] += `<pre class=''>def flags = imm_readU8();
def arg__254 : byte = 0x40u8;
def arg__251 = u8.&(flags, arg__254);
def arg__252 : byte = 0;
def cond__249 = u8.!=(arg__251, arg__252);
var memindex: u32;
if (cond__249) {
	def memindex__250 = imm_readULEB32();
} else {
	def memindex__256 : u32 = 0u;
}
// phis: memindex <- memindex__250; memindex <- memindex__256; 
def cond__237 = m_isMemory64(memindex);
if (cond__237) {
	def offset = imm_readULEB64();
	def index = pop_u64();
	def val = mach_readMemory64_u32(memindex, index, offset);
	def eff__238 = push_u32(val);
} else {
	def offset = imm_readULEB32();
	def index = pop_u32();
	def val = mach_readMemory32_u32(memindex, index, offset);
	def eff__243 = push_u32(val);
}
// phis: 
</pre>`;
window.traces["I32_LOAD_ul"] = {}
window.traces["I32_LOAD_ul"]["post_surgery 144"] = ''
window.traces["I32_LOAD_ul"]["post_surgery 144"] += `<pre class='graph'>---
config:
  layout: elk
---
graph TD
	3[\\"Finish"/]
	21 -. Codeptr .-> 3
	2 -. Stack .-> 3
	1 -. Trap Locals Globals Tables Memory Extra .-> 3
	1[/"Start"\\]
	2{{"Sϕ Stack "}}
	19 --> 2
	18 --> 2
	9 --> 2
	9["eff__243 push_u32"]
	6 --> 9
	0 -. Stack .-> 9
	0["index pop_u32"]
	1 -. Stack .-> 0
	6["val mach_readMemory32_u32"]
	15 --> 6
	0 --> 6
	28 --> 6
	28["offset__290 imm_readULEB32"]
	17 -. Codeptr .-> 28
	17{{"Sϕ Codeptr "}}
	13 --> 17
	14 --> 17
	4 --> 17
	4["flags imm_readU8"]
	1 -. Codeptr .-> 4
	14["memindex__250 imm_readULEB32"]
	4 -. Codeptr .-> 14
	13["cond__249 u8.!="]
	11 --> 13
	7 --> 13
	7["arg__252 0"]
	11["arg__251 u8.&"]
	4 --> 11
	8 --> 11
	8["arg__254 0x40u8"]
	15{"memindex ϕ"}
	13 --> 15
	14 --> 15
	5 --> 15
	5["memindex__256 0u"]
	18["eff__238 push_u32"]
	16 --> 18
	12 -. Stack .-> 18
	12["index pop_u64"]
	1 -. Stack .-> 12
	16["val mach_readMemory64_u32"]
	15 --> 16
	12 --> 16
	24 --> 16
	24["offset__287 imm_readULEB64"]
	17 -. Codeptr .-> 24
	19["cond__237 m_isMemory64"]
	15 --> 19
	21{{"Sϕ Codeptr "}}
	19 --> 21
	24 --> 21
	28 --> 21
</pre>`;
window.traces["I32_LOAD_ul"]["post_surgery 149"] = ''
window.traces["I32_LOAD_ul"]["post_surgery 149"] += `<pre class='graph'>---
config:
  layout: elk
---
graph TD
	3[\\"Finish"/]
	21 -. Codeptr .-> 3
	2 -. Stack .-> 3
	1 -. Trap Locals Globals Tables Memory Extra .-> 3
	1[/"Start"\\]
	2{{"Sϕ Stack "}}
	19 --> 2
	18 --> 2
	9 --> 2
	9["eff__243 push_u32"]
	6 --> 9
	0 -. Stack .-> 9
	0["index pop_u32"]
	1 -. Stack .-> 0
	6["val mach_readMemory32_u32"]
	15 --> 6
	0 --> 6
	28 --> 6
	28["offset__290 imm_readULEB32"]
	17 -. Codeptr .-> 28
	17{{"Sϕ Codeptr "}}
	13 --> 17
	39 --> 17
	4 --> 17
	4["flags imm_readU8"]
	1 -. Codeptr .-> 4
	39["memindex__250__297 imm_readULEB32"]
	4 -. Codeptr .-> 39
	13["cond__249 u8.!="]
	11 --> 13
	7 --> 13
	7["arg__252 0"]
	11["arg__251 u8.&"]
	4 --> 11
	8 --> 11
	8["arg__254 0x40u8"]
	15{"memindex ϕ"}
	13 --> 15
	39 --> 15
	41 --> 15
	41["memindex__256__298 0u"]
	18["eff__238 push_u32"]
	16 --> 18
	12 -. Stack .-> 18
	12["index pop_u64"]
	1 -. Stack .-> 12
	16["val mach_readMemory64_u32"]
	15 --> 16
	12 --> 16
	24 --> 16
	24["offset__287 imm_readULEB64"]
	17 -. Codeptr .-> 24
	19["cond__237 m_isMemory64"]
	15 --> 19
	21{{"Sϕ Codeptr "}}
	19 --> 21
	24 --> 21
	28 --> 21
</pre>`;
window.traces["I32_LOAD"]["unlem_scheduler"] = ''
window.traces["I32_LOAD"]["unlem_scheduler"] += `<pre class='graph'>graph TD
subgraph block_142["Block 142"]
	direction TB
	b142_3[\\"Finish"/]
end
phi_144 --> block_142
subgraph phi_144["Phi 144"]
	p144_2{{"Sϕ Stack "}}
	p144_21{{"Sϕ Codeptr "}}
end
block_145 --> phi_144
block_146 --> phi_144
subgraph block_145["Block 145"]
	direction TB
	b145_24["offset__287 imm_readULEB64"]
	b145_12["index pop_u64"]
	b145_16["val mach_readMemory64_u32"]
	b145_18["eff__238 push_u32"]
	b145_24 --> b145_12
	b145_12 --> b145_16
	b145_16 --> b145_18
end
branch_143 --> block_145
subgraph branch_143["Branch 143"]
	br143_19["cond__237 m_isMemory64"]

end
block_147 --> branch_143
subgraph block_147["Block 147"]
	direction TB
	b147_19["cond__237 m_isMemory64"]
end
phi_149 --> block_147
subgraph phi_149["Phi 149"]
	p149_17{{"Sϕ Codeptr "}}
	p149_17{{"Sϕ Codeptr "}}
	p149_17{{"Sϕ Codeptr "}}
	p149_17{{"Sϕ Codeptr "}}
	p149_15{"memindex ϕ"}
	p149_15{"memindex ϕ"}
	p149_15{"memindex ϕ"}
	p149_15{"memindex ϕ"}
end
block_150 --> phi_149
block_151 --> phi_149
subgraph block_150["Block 150"]
	direction TB
	b150_39["memindex__250__297 imm_readULEB32"]
end
branch_148 --> block_150
subgraph branch_148["Branch 148"]
	br148_13["cond__249 u8.!="]

end
block_152 --> branch_148
subgraph block_152["Block 152"]
	direction TB
	b152_8["arg__254 0x40u8"]
	b152_7["arg__252 0"]
	b152_11["arg__251 u8.&"]
	b152_13["cond__249 u8.!="]
	b152_8 --> b152_7
	b152_7 --> b152_11
	b152_11 --> b152_13
end
subgraph block_151["Block 151"]
	direction TB
	b151_41["memindex__256__298 0u"]
end
branch_148 --> block_151
subgraph block_146["Block 146"]
	direction TB
	b146_28["offset__290 imm_readULEB32"]
	b146_0["index pop_u32"]
	b146_6["val mach_readMemory32_u32"]
	b146_9["eff__243 push_u32"]
	b146_28 --> b146_0
	b146_0 --> b146_6
	b146_6 --> b146_9
end
branch_143 --> block_146

</pre>`;
window.traces["I32_LOAD"]["unlem_scheduler_ssa"] = ''
window.traces["I32_LOAD"]["unlem_scheduler_ssa"] += `<pre class=''>def arg__254 : byte = 0x40u8;
def arg__252 : byte = 0;
def arg__251 = u8.&(flags, arg__254);
def cond__249 = u8.!=(arg__251, arg__252);
if (cond__249) {
	def memindex__250__297 = imm_readULEB32();
} else {
	def memindex__256__298 : u32 = 0u;
}
// phis: memindex <- memindex__250__297; memindex <- memindex__256__298; memindex <- memindex__250__297; memindex <- memindex__256__298; memindex <- memindex__250__297; memindex <- memindex__256__298; memindex <- memindex__250__297; memindex <- memindex__256__298; 
def cond__237 = m_isMemory64(memindex);
if (cond__237) {
	def offset__287 = imm_readULEB64();
	def index = pop_u64();
	def val = mach_readMemory64_u32(memindex, index, offset__287);
	def eff__238 = push_u32(val);
} else {
	def offset__290 = imm_readULEB32();
	def index = pop_u32();
	def val = mach_readMemory32_u32(memindex, index, offset__290);
	def eff__243 = push_u32(val);
}
// phis: 
</pre>`;
window.traces["I32_LOAD"]["unlem_scheduler_ssa"] += `<pre class=''>if (u8.!=(u8.&(flags, 0x40u8), 0)) {
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
	def offset1 = imm_readULEB32();
	def index = pop_u32();
	def val = mach_readMemory32_u32(memindex, index, offset1);
	push_u32(val);
}
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
	22["eff__243 push_u32"]
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
	10["memindex__250 imm_readULEB32"]
	3 -. Codeptr .-> 10
	9["cond__249 u8.!="]
	8 --> 9
	5 --> 9
	5["arg__252 0"]
	8["arg__251 u8.&"]
	3 --> 8
	6 --> 8
	6["arg__254 0x40u8"]
	11{"memindex ϕ"}
	9 --> 11
	10 --> 11
	4 --> 11
	4["memindex__256 0u"]
	30["eff__238 push_u32"]
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
	14["cond__237 m_isMemory64"]
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
	22["eff__243 push_u32"]
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
	10["memindex__250 imm_readULEB32"]
	3 -. Codeptr .-> 10
	9["cond__249 u8.!="]
	8 --> 9
	5 --> 9
	5["arg__252 0"]
	8["arg__251 u8.&"]
	3 --> 8
	6 --> 8
	6["arg__254 0x40u8"]
	11{"memindex ϕ"}
	9 --> 11
	10 --> 11
	4 --> 11
	4["memindex__256 0u"]
	30["eff__238 push_u32"]
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
	14["cond__237 m_isMemory64"]
	11 --> 14
	31{{"Sϕ Codeptr "}}
	14 --> 31
	23 --> 31
	15 --> 31
</pre>`;
window.traces["I32_LOAD"]["scheduled"] = ''
window.traces["I32_LOAD"]["scheduled"] += `<pre class=''>def flags = imm_readU8();
def arg__254 : byte = 0x40u8;
def arg__251 = u8.&(flags, arg__254);
def arg__252 : byte = 0;
def cond__249 = u8.!=(arg__251, arg__252);
var memindex: u32;
if (cond__249) {
	def memindex__250 = imm_readULEB32();
} else {
	def memindex__256 : u32 = 0u;
}
// phis: memindex <- memindex__250; memindex <- memindex__256; 
def cond__237 = m_isMemory64(memindex);
if (cond__237) {
	def offset = imm_readULEB64();
	def index = pop_u64();
	def val = mach_readMemory64_u32(memindex, index, offset);
	def eff__238 = push_u32(val);
} else {
	def offset = imm_readULEB32();
	def index = pop_u32();
	def val = mach_readMemory32_u32(memindex, index, offset);
	def eff__243 = push_u32(val);
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
def cond__313 = m_isMemory64(arg__324);
if (cond__313) {
	def offset = imm_readULEB64();
	def index = pop_u64();
	def arg__318 = (offset);
	def arg__317 = (index);
	def arg__316 = (memindex);
	def val = mach_readMemory64_u64(arg__316, arg__317, arg__318);
	def arg__315 = (val);
	def eff__314 = push_u64(arg__315);
} else {
	def offset = imm_readULEB32();
	def index = pop_u32();
	def arg__323 = (offset);
	def arg__322 = (index);
	def arg__321 = (memindex);
	def val = mach_readMemory32_u64(arg__321, arg__322, arg__323);
	def arg__320 = (val);
	def eff__319 = push_u64(arg__320);
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
	22["eff__319 push_u64"]
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
	30["eff__314 push_u64"]
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
	14["cond__313 m_isMemory64"]
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
	22["eff__319 push_u64"]
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
	30["eff__314 push_u64"]
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
	14["cond__313 m_isMemory64"]
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
	22["eff__319 push_u64"]
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
	30["eff__314 push_u64"]
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
	14["cond__313 m_isMemory64"]
	11 --> 14
	31{{"Sϕ Codeptr "}}
	14 --> 31
	23 --> 31
	15 --> 31
</pre>`;
window.traces["I64_LOAD"]["post_surgery 155"] = ''
window.traces["I64_LOAD"]["post_surgery 155"] += `<pre class='graph'>---
config:
  layout: elk
---
graph TD
	3[\\"Finish"/]
	21 -. Codeptr .-> 3
	2 -. Stack .-> 3
	1 -. Trap Locals Globals Tables Memory Extra .-> 3
	1[/"Start"\\]
	2{{"Sϕ Stack "}}
	19 --> 2
	18 --> 2
	9 --> 2
	9["eff__319 push_u64"]
	6 --> 9
	0 -. Stack .-> 9
	0["index pop_u32"]
	1 -. Stack .-> 0
	6["val mach_readMemory32_u64"]
	15 --> 6
	0 --> 6
	28 --> 6
	28["offset__338 imm_readULEB32"]
	17 -. Codeptr .-> 28
	17{{"Sϕ Codeptr "}}
	13 --> 17
	14 --> 17
	4 --> 17
	4["flags imm_readU8"]
	1 -. Codeptr .-> 4
	14["memindex__326 imm_readULEB32"]
	4 -. Codeptr .-> 14
	13["cond__325 u8.!="]
	11 --> 13
	7 --> 13
	7["arg__328 0"]
	11["arg__327 u8.&"]
	4 --> 11
	8 --> 11
	8["arg__330 0x40u8"]
	15{"memindex ϕ"}
	13 --> 15
	14 --> 15
	5 --> 15
	5["memindex__332 0u"]
	18["eff__314 push_u64"]
	16 --> 18
	12 -. Stack .-> 18
	12["index pop_u64"]
	1 -. Stack .-> 12
	16["val mach_readMemory64_u64"]
	15 --> 16
	12 --> 16
	24 --> 16
	24["offset__335 imm_readULEB64"]
	17 -. Codeptr .-> 24
	19["cond__313 m_isMemory64"]
	15 --> 19
	21{{"Sϕ Codeptr "}}
	19 --> 21
	24 --> 21
	28 --> 21
</pre>`;
window.traces["I64_LOAD"]["post_surgery 160"] = ''
window.traces["I64_LOAD"]["post_surgery 160"] += `<pre class='graph'>---
config:
  layout: elk
---
graph TD
	3[\\"Finish"/]
	21 -. Codeptr .-> 3
	2 -. Stack .-> 3
	1 -. Trap Locals Globals Tables Memory Extra .-> 3
	1[/"Start"\\]
	2{{"Sϕ Stack "}}
	19 --> 2
	18 --> 2
	9 --> 2
	9["eff__319 push_u64"]
	6 --> 9
	0 -. Stack .-> 9
	0["index pop_u32"]
	1 -. Stack .-> 0
	6["val mach_readMemory32_u64"]
	15 --> 6
	0 --> 6
	28 --> 6
	28["offset__338 imm_readULEB32"]
	17 -. Codeptr .-> 28
	17{{"Sϕ Codeptr "}}
	13 --> 17
	39 --> 17
	4 --> 17
	4["flags imm_readU8"]
	1 -. Codeptr .-> 4
	39["memindex__326__345 imm_readULEB32"]
	4 -. Codeptr .-> 39
	13["cond__325 u8.!="]
	11 --> 13
	7 --> 13
	7["arg__328 0"]
	11["arg__327 u8.&"]
	4 --> 11
	8 --> 11
	8["arg__330 0x40u8"]
	15{"memindex ϕ"}
	13 --> 15
	39 --> 15
	41 --> 15
	41["memindex__332__346 0u"]
	18["eff__314 push_u64"]
	16 --> 18
	12 -. Stack .-> 18
	12["index pop_u64"]
	1 -. Stack .-> 12
	16["val mach_readMemory64_u64"]
	15 --> 16
	12 --> 16
	24 --> 16
	24["offset__335 imm_readULEB64"]
	17 -. Codeptr .-> 24
	19["cond__313 m_isMemory64"]
	15 --> 19
	21{{"Sϕ Codeptr "}}
	19 --> 21
	24 --> 21
	28 --> 21
</pre>`;
window.traces["I64_LOAD"]["schedulerMermaid"] = ''
window.traces["I64_LOAD"]["schedulerMermaid"] += `<pre class='graph'>graph TD
subgraph block_153["Block 153"]
	direction TB
	b153_3[\\"Finish"/]
end
phi_155 --> block_153
subgraph phi_155["Phi 155"]
	p155_2{{"Sϕ Stack "}}
	p155_21{{"Sϕ Codeptr "}}
end
block_156 --> phi_155
block_157 --> phi_155
subgraph block_156["Block 156"]
	direction TB
	b156_24["offset__335 imm_readULEB64"]
	b156_12["index pop_u64"]
	b156_16["val mach_readMemory64_u64"]
	b156_18["eff__314 push_u64"]
	b156_24 --> b156_12
	b156_12 --> b156_16
	b156_16 --> b156_18
end
branch_154 --> block_156
subgraph branch_154["Branch 154"]
	br154_19["cond__313 m_isMemory64"]

end
block_158 --> branch_154
subgraph block_158["Block 158"]
	direction TB
	b158_19["cond__313 m_isMemory64"]
end
phi_160 --> block_158
subgraph phi_160["Phi 160"]
	p160_17{{"Sϕ Codeptr "}}
	p160_17{{"Sϕ Codeptr "}}
	p160_17{{"Sϕ Codeptr "}}
	p160_17{{"Sϕ Codeptr "}}
	p160_15{"memindex ϕ"}
	p160_15{"memindex ϕ"}
	p160_15{"memindex ϕ"}
	p160_15{"memindex ϕ"}
end
block_161 --> phi_160
block_162 --> phi_160
subgraph block_161["Block 161"]
	direction TB
	b161_39["memindex__326__345 imm_readULEB32"]
end
branch_159 --> block_161
subgraph branch_159["Branch 159"]
	br159_13["cond__325 u8.!="]

end
block_163 --> branch_159
subgraph block_163["Block 163"]
	direction TB
	b163_8["arg__330 0x40u8"]
	b163_7["arg__328 0"]
	b163_11["arg__327 u8.&"]
	b163_13["cond__325 u8.!="]
	b163_8 --> b163_7
	b163_7 --> b163_11
	b163_11 --> b163_13
end
subgraph block_162["Block 162"]
	direction TB
	b162_41["memindex__332__346 0u"]
end
branch_159 --> block_162
subgraph block_157["Block 157"]
	direction TB
	b157_28["offset__338 imm_readULEB32"]
	b157_0["index pop_u32"]
	b157_6["val mach_readMemory32_u64"]
	b157_9["eff__319 push_u64"]
	b157_28 --> b157_0
	b157_0 --> b157_6
	b157_6 --> b157_9
end
branch_154 --> block_157

</pre>`;
window.traces["I64_LOAD"]["scheduler_ssad"] = ''
window.traces["I64_LOAD"]["scheduler_ssad"] += `<pre class=''>def arg__330 : byte = 0x40u8;
def arg__328 : byte = 0;
def arg__327 = u8.&(flags, arg__330);
def cond__325 = u8.!=(arg__327, arg__328);
if (cond__325) {
	def memindex__326__345 = imm_readULEB32();
} else {
	def memindex__332__346 : u32 = 0u;
}
// phis: memindex <- memindex__326__345; memindex <- memindex__332__346; memindex <- memindex__326__345; memindex <- memindex__332__346; memindex <- memindex__326__345; memindex <- memindex__332__346; memindex <- memindex__326__345; memindex <- memindex__332__346; 
def cond__313 = m_isMemory64(memindex);
if (cond__313) {
	def offset__335 = imm_readULEB64();
	def index = pop_u64();
	def val = mach_readMemory64_u64(memindex, index, offset__335);
	def eff__314 = push_u64(val);
} else {
	def offset__338 = imm_readULEB32();
	def index = pop_u32();
	def val = mach_readMemory32_u64(memindex, index, offset__338);
	def eff__319 = push_u64(val);
}
// phis: 
</pre>`;
window.traces["I64_LOAD"]["scheduler_ssad_pretty"] = ''
window.traces["I64_LOAD"]["scheduler_ssad_pretty"] += `<pre class=''>if (u8.!=(u8.&(flags, 0x40u8), 0)) {
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
	def offset1 = imm_readULEB32();
	def index = pop_u32();
	def val = mach_readMemory32_u64(memindex, index, offset1);
	push_u64(val);
}
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
	22["eff__319 push_u64"]
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
	30["eff__314 push_u64"]
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
	14["cond__313 m_isMemory64"]
	11 --> 14
	31{{"Sϕ Codeptr "}}
	14 --> 31
	23 --> 31
	15 --> 31
</pre>`;
window.traces["I64_LOAD"]["unlem_schedule"] = ''
window.traces["I64_LOAD"]["unlem_schedule"] += `<pre class=''>def flags = imm_readU8();
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
def cond__313 = m_isMemory64(memindex);
if (cond__313) {
	def offset = imm_readULEB64();
	def index = pop_u64();
	def val = mach_readMemory64_u64(memindex, index, offset);
	def eff__314 = push_u64(val);
} else {
	def offset = imm_readULEB32();
	def index = pop_u32();
	def val = mach_readMemory32_u64(memindex, index, offset);
	def eff__319 = push_u64(val);
}
// phis: 
</pre>`;
window.traces["I64_LOAD_ul"] = {}
window.traces["I64_LOAD_ul"]["post_surgery 166"] = ''
window.traces["I64_LOAD_ul"]["post_surgery 166"] += `<pre class='graph'>---
config:
  layout: elk
---
graph TD
	3[\\"Finish"/]
	21 -. Codeptr .-> 3
	2 -. Stack .-> 3
	1 -. Trap Locals Globals Tables Memory Extra .-> 3
	1[/"Start"\\]
	2{{"Sϕ Stack "}}
	19 --> 2
	18 --> 2
	9 --> 2
	9["eff__319 push_u64"]
	6 --> 9
	0 -. Stack .-> 9
	0["index pop_u32"]
	1 -. Stack .-> 0
	6["val mach_readMemory32_u64"]
	15 --> 6
	0 --> 6
	28 --> 6
	28["offset__366 imm_readULEB32"]
	17 -. Codeptr .-> 28
	17{{"Sϕ Codeptr "}}
	13 --> 17
	14 --> 17
	4 --> 17
	4["flags imm_readU8"]
	1 -. Codeptr .-> 4
	14["memindex__326 imm_readULEB32"]
	4 -. Codeptr .-> 14
	13["cond__325 u8.!="]
	11 --> 13
	7 --> 13
	7["arg__328 0"]
	11["arg__327 u8.&"]
	4 --> 11
	8 --> 11
	8["arg__330 0x40u8"]
	15{"memindex ϕ"}
	13 --> 15
	14 --> 15
	5 --> 15
	5["memindex__332 0u"]
	18["eff__314 push_u64"]
	16 --> 18
	12 -. Stack .-> 18
	12["index pop_u64"]
	1 -. Stack .-> 12
	16["val mach_readMemory64_u64"]
	15 --> 16
	12 --> 16
	24 --> 16
	24["offset__363 imm_readULEB64"]
	17 -. Codeptr .-> 24
	19["cond__313 m_isMemory64"]
	15 --> 19
	21{{"Sϕ Codeptr "}}
	19 --> 21
	24 --> 21
	28 --> 21
</pre>`;
window.traces["I64_LOAD_ul"]["post_surgery 171"] = ''
window.traces["I64_LOAD_ul"]["post_surgery 171"] += `<pre class='graph'>---
config:
  layout: elk
---
graph TD
	3[\\"Finish"/]
	21 -. Codeptr .-> 3
	2 -. Stack .-> 3
	1 -. Trap Locals Globals Tables Memory Extra .-> 3
	1[/"Start"\\]
	2{{"Sϕ Stack "}}
	19 --> 2
	18 --> 2
	9 --> 2
	9["eff__319 push_u64"]
	6 --> 9
	0 -. Stack .-> 9
	0["index pop_u32"]
	1 -. Stack .-> 0
	6["val mach_readMemory32_u64"]
	15 --> 6
	0 --> 6
	28 --> 6
	28["offset__366 imm_readULEB32"]
	17 -. Codeptr .-> 28
	17{{"Sϕ Codeptr "}}
	13 --> 17
	39 --> 17
	4 --> 17
	4["flags imm_readU8"]
	1 -. Codeptr .-> 4
	39["memindex__326__373 imm_readULEB32"]
	4 -. Codeptr .-> 39
	13["cond__325 u8.!="]
	11 --> 13
	7 --> 13
	7["arg__328 0"]
	11["arg__327 u8.&"]
	4 --> 11
	8 --> 11
	8["arg__330 0x40u8"]
	15{"memindex ϕ"}
	13 --> 15
	39 --> 15
	41 --> 15
	41["memindex__332__374 0u"]
	18["eff__314 push_u64"]
	16 --> 18
	12 -. Stack .-> 18
	12["index pop_u64"]
	1 -. Stack .-> 12
	16["val mach_readMemory64_u64"]
	15 --> 16
	12 --> 16
	24 --> 16
	24["offset__363 imm_readULEB64"]
	17 -. Codeptr .-> 24
	19["cond__313 m_isMemory64"]
	15 --> 19
	21{{"Sϕ Codeptr "}}
	19 --> 21
	24 --> 21
	28 --> 21
</pre>`;
window.traces["I64_LOAD"]["unlem_scheduler"] = ''
window.traces["I64_LOAD"]["unlem_scheduler"] += `<pre class='graph'>graph TD
subgraph block_164["Block 164"]
	direction TB
	b164_3[\\"Finish"/]
end
phi_166 --> block_164
subgraph phi_166["Phi 166"]
	p166_2{{"Sϕ Stack "}}
	p166_21{{"Sϕ Codeptr "}}
end
block_167 --> phi_166
block_168 --> phi_166
subgraph block_167["Block 167"]
	direction TB
	b167_24["offset__363 imm_readULEB64"]
	b167_12["index pop_u64"]
	b167_16["val mach_readMemory64_u64"]
	b167_18["eff__314 push_u64"]
	b167_24 --> b167_12
	b167_12 --> b167_16
	b167_16 --> b167_18
end
branch_165 --> block_167
subgraph branch_165["Branch 165"]
	br165_19["cond__313 m_isMemory64"]

end
block_169 --> branch_165
subgraph block_169["Block 169"]
	direction TB
	b169_19["cond__313 m_isMemory64"]
end
phi_171 --> block_169
subgraph phi_171["Phi 171"]
	p171_17{{"Sϕ Codeptr "}}
	p171_17{{"Sϕ Codeptr "}}
	p171_17{{"Sϕ Codeptr "}}
	p171_17{{"Sϕ Codeptr "}}
	p171_15{"memindex ϕ"}
	p171_15{"memindex ϕ"}
	p171_15{"memindex ϕ"}
	p171_15{"memindex ϕ"}
end
block_172 --> phi_171
block_173 --> phi_171
subgraph block_172["Block 172"]
	direction TB
	b172_39["memindex__326__373 imm_readULEB32"]
end
branch_170 --> block_172
subgraph branch_170["Branch 170"]
	br170_13["cond__325 u8.!="]

end
block_174 --> branch_170
subgraph block_174["Block 174"]
	direction TB
	b174_8["arg__330 0x40u8"]
	b174_7["arg__328 0"]
	b174_11["arg__327 u8.&"]
	b174_13["cond__325 u8.!="]
	b174_8 --> b174_7
	b174_7 --> b174_11
	b174_11 --> b174_13
end
subgraph block_173["Block 173"]
	direction TB
	b173_41["memindex__332__374 0u"]
end
branch_170 --> block_173
subgraph block_168["Block 168"]
	direction TB
	b168_28["offset__366 imm_readULEB32"]
	b168_0["index pop_u32"]
	b168_6["val mach_readMemory32_u64"]
	b168_9["eff__319 push_u64"]
	b168_28 --> b168_0
	b168_0 --> b168_6
	b168_6 --> b168_9
end
branch_165 --> block_168

</pre>`;
window.traces["I64_LOAD"]["unlem_scheduler_ssa"] = ''
window.traces["I64_LOAD"]["unlem_scheduler_ssa"] += `<pre class=''>def arg__330 : byte = 0x40u8;
def arg__328 : byte = 0;
def arg__327 = u8.&(flags, arg__330);
def cond__325 = u8.!=(arg__327, arg__328);
if (cond__325) {
	def memindex__326__373 = imm_readULEB32();
} else {
	def memindex__332__374 : u32 = 0u;
}
// phis: memindex <- memindex__326__373; memindex <- memindex__332__374; memindex <- memindex__326__373; memindex <- memindex__332__374; memindex <- memindex__326__373; memindex <- memindex__332__374; memindex <- memindex__326__373; memindex <- memindex__332__374; 
def cond__313 = m_isMemory64(memindex);
if (cond__313) {
	def offset__363 = imm_readULEB64();
	def index = pop_u64();
	def val = mach_readMemory64_u64(memindex, index, offset__363);
	def eff__314 = push_u64(val);
} else {
	def offset__366 = imm_readULEB32();
	def index = pop_u32();
	def val = mach_readMemory32_u64(memindex, index, offset__366);
	def eff__319 = push_u64(val);
}
// phis: 
</pre>`;
window.traces["I64_LOAD"]["unlem_scheduler_ssa"] += `<pre class=''>if (u8.!=(u8.&(flags, 0x40u8), 0)) {
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
	def offset1 = imm_readULEB32();
	def index = pop_u32();
	def val = mach_readMemory32_u64(memindex, index, offset1);
	push_u64(val);
}
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
	22["eff__319 push_u64"]
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
	30["eff__314 push_u64"]
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
	14["cond__313 m_isMemory64"]
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
	22["eff__319 push_u64"]
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
	30["eff__314 push_u64"]
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
	14["cond__313 m_isMemory64"]
	11 --> 14
	31{{"Sϕ Codeptr "}}
	14 --> 31
	23 --> 31
	15 --> 31
</pre>`;
window.traces["I64_LOAD"]["scheduled"] = ''
window.traces["I64_LOAD"]["scheduled"] += `<pre class=''>def flags = imm_readU8();
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
def cond__313 = m_isMemory64(memindex);
if (cond__313) {
	def offset = imm_readULEB64();
	def index = pop_u64();
	def val = mach_readMemory64_u64(memindex, index, offset);
	def eff__314 = push_u64(val);
} else {
	def offset = imm_readULEB32();
	def index = pop_u32();
	def val = mach_readMemory32_u64(memindex, index, offset);
	def eff__319 = push_u64(val);
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
def arg__404 : byte = 0;
def arg__406 : byte = 0x40u8;
def arg__405 = (flags);
def arg__403 = u8.&(arg__405, arg__406);
def cond__401 = u8.!=(arg__403, arg__404);
if (cond__401) {
	def memindex__402 = imm_readULEB32();
}
// phis: memindex <- memindex__402; 
def arg__400 = (memindex);
def cond__389 = m_isMemory64(arg__400);
if (cond__389) {
	def offset = imm_readULEB64();
	def index = pop_u64();
	def arg__394 = (offset);
	def arg__393 = (index);
	def arg__392 = (memindex);
	def val = mach_readMemory64_f32(arg__392, arg__393, arg__394);
	def arg__391 = (val);
	def eff__390 = push_f32(arg__391);
} else {
	def offset = imm_readULEB32();
	def index = pop_u32();
	def arg__399 = (offset);
	def arg__398 = (index);
	def arg__397 = (memindex);
	def val = mach_readMemory32_f32(arg__397, arg__398, arg__399);
	def arg__396 = (val);
	def eff__395 = push_f32(arg__396);
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
	22["eff__395 push_f32"]
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
	10["memindex__402 imm_readULEB32"]
	3 -. Codeptr .-> 10
	9["cond__401 u8.!="]
	8 --> 9
	5 --> 9
	5["arg__404 0"]
	8["arg__403 u8.&"]
	3 --> 8
	6 --> 8
	6["arg__406 0x40u8"]
	11{"memindex ϕ"}
	9 --> 11
	10 --> 11
	4 --> 11
	4["memindex__407 0u"]
	30["eff__390 push_f32"]
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
	14["cond__389 m_isMemory64"]
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
	22["eff__395 push_f32"]
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
	10["memindex__402 imm_readULEB32"]
	3 -. Codeptr .-> 10
	9["cond__401 u8.!="]
	8 --> 9
	5 --> 9
	5["arg__404 0"]
	8["arg__403 u8.&"]
	3 --> 8
	6 --> 8
	6["arg__406 0x40u8"]
	11{"memindex ϕ"}
	9 --> 11
	10 --> 11
	4 --> 11
	4["memindex__408 0u"]
	30["eff__390 push_f32"]
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
	14["cond__389 m_isMemory64"]
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
	22["eff__395 push_f32"]
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
	10["memindex__402 imm_readULEB32"]
	3 -. Codeptr .-> 10
	9["cond__401 u8.!="]
	8 --> 9
	5 --> 9
	5["arg__404 0"]
	8["arg__403 u8.&"]
	3 --> 8
	6 --> 8
	6["arg__406 0x40u8"]
	11{"memindex ϕ"}
	9 --> 11
	10 --> 11
	4 --> 11
	4["memindex__408 0u"]
	30["eff__390 push_f32"]
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
	14["cond__389 m_isMemory64"]
	11 --> 14
	31{{"Sϕ Codeptr "}}
	14 --> 31
	23 --> 31
	15 --> 31
</pre>`;
window.traces["F32_LOAD"]["post_surgery 177"] = ''
window.traces["F32_LOAD"]["post_surgery 177"] += `<pre class='graph'>---
config:
  layout: elk
---
graph TD
	3[\\"Finish"/]
	21 -. Codeptr .-> 3
	2 -. Stack .-> 3
	1 -. Trap Locals Globals Tables Memory Extra .-> 3
	1[/"Start"\\]
	2{{"Sϕ Stack "}}
	19 --> 2
	18 --> 2
	9 --> 2
	9["eff__395 push_f32"]
	6 --> 9
	0 -. Stack .-> 9
	0["index pop_u32"]
	1 -. Stack .-> 0
	6["val mach_readMemory32_f32"]
	15 --> 6
	0 --> 6
	28 --> 6
	28["offset__414 imm_readULEB32"]
	17 -. Codeptr .-> 28
	17{{"Sϕ Codeptr "}}
	13 --> 17
	14 --> 17
	4 --> 17
	4["flags imm_readU8"]
	1 -. Codeptr .-> 4
	14["memindex__402 imm_readULEB32"]
	4 -. Codeptr .-> 14
	13["cond__401 u8.!="]
	11 --> 13
	7 --> 13
	7["arg__404 0"]
	11["arg__403 u8.&"]
	4 --> 11
	8 --> 11
	8["arg__406 0x40u8"]
	15{"memindex ϕ"}
	13 --> 15
	14 --> 15
	5 --> 15
	5["memindex__408 0u"]
	18["eff__390 push_f32"]
	16 --> 18
	12 -. Stack .-> 18
	12["index pop_u64"]
	1 -. Stack .-> 12
	16["val mach_readMemory64_f32"]
	15 --> 16
	12 --> 16
	24 --> 16
	24["offset__411 imm_readULEB64"]
	17 -. Codeptr .-> 24
	19["cond__389 m_isMemory64"]
	15 --> 19
	21{{"Sϕ Codeptr "}}
	19 --> 21
	24 --> 21
	28 --> 21
</pre>`;
window.traces["F32_LOAD"]["post_surgery 182"] = ''
window.traces["F32_LOAD"]["post_surgery 182"] += `<pre class='graph'>---
config:
  layout: elk
---
graph TD
	3[\\"Finish"/]
	21 -. Codeptr .-> 3
	2 -. Stack .-> 3
	1 -. Trap Locals Globals Tables Memory Extra .-> 3
	1[/"Start"\\]
	2{{"Sϕ Stack "}}
	19 --> 2
	18 --> 2
	9 --> 2
	9["eff__395 push_f32"]
	6 --> 9
	0 -. Stack .-> 9
	0["index pop_u32"]
	1 -. Stack .-> 0
	6["val mach_readMemory32_f32"]
	15 --> 6
	0 --> 6
	28 --> 6
	28["offset__414 imm_readULEB32"]
	17 -. Codeptr .-> 28
	17{{"Sϕ Codeptr "}}
	13 --> 17
	39 --> 17
	4 --> 17
	4["flags imm_readU8"]
	1 -. Codeptr .-> 4
	39["memindex__402__421 imm_readULEB32"]
	4 -. Codeptr .-> 39
	13["cond__401 u8.!="]
	11 --> 13
	7 --> 13
	7["arg__404 0"]
	11["arg__403 u8.&"]
	4 --> 11
	8 --> 11
	8["arg__406 0x40u8"]
	15{"memindex ϕ"}
	13 --> 15
	39 --> 15
	41 --> 15
	41["memindex__408__422 0u"]
	18["eff__390 push_f32"]
	16 --> 18
	12 -. Stack .-> 18
	12["index pop_u64"]
	1 -. Stack .-> 12
	16["val mach_readMemory64_f32"]
	15 --> 16
	12 --> 16
	24 --> 16
	24["offset__411 imm_readULEB64"]
	17 -. Codeptr .-> 24
	19["cond__389 m_isMemory64"]
	15 --> 19
	21{{"Sϕ Codeptr "}}
	19 --> 21
	24 --> 21
	28 --> 21
</pre>`;
window.traces["F32_LOAD"]["schedulerMermaid"] = ''
window.traces["F32_LOAD"]["schedulerMermaid"] += `<pre class='graph'>graph TD
subgraph block_175["Block 175"]
	direction TB
	b175_3[\\"Finish"/]
end
phi_177 --> block_175
subgraph phi_177["Phi 177"]
	p177_2{{"Sϕ Stack "}}
	p177_21{{"Sϕ Codeptr "}}
end
block_178 --> phi_177
block_179 --> phi_177
subgraph block_178["Block 178"]
	direction TB
	b178_24["offset__411 imm_readULEB64"]
	b178_12["index pop_u64"]
	b178_16["val mach_readMemory64_f32"]
	b178_18["eff__390 push_f32"]
	b178_24 --> b178_12
	b178_12 --> b178_16
	b178_16 --> b178_18
end
branch_176 --> block_178
subgraph branch_176["Branch 176"]
	br176_19["cond__389 m_isMemory64"]

end
block_180 --> branch_176
subgraph block_180["Block 180"]
	direction TB
	b180_19["cond__389 m_isMemory64"]
end
phi_182 --> block_180
subgraph phi_182["Phi 182"]
	p182_17{{"Sϕ Codeptr "}}
	p182_17{{"Sϕ Codeptr "}}
	p182_17{{"Sϕ Codeptr "}}
	p182_17{{"Sϕ Codeptr "}}
	p182_15{"memindex ϕ"}
	p182_15{"memindex ϕ"}
	p182_15{"memindex ϕ"}
	p182_15{"memindex ϕ"}
end
block_183 --> phi_182
block_184 --> phi_182
subgraph block_183["Block 183"]
	direction TB
	b183_39["memindex__402__421 imm_readULEB32"]
end
branch_181 --> block_183
subgraph branch_181["Branch 181"]
	br181_13["cond__401 u8.!="]

end
block_185 --> branch_181
subgraph block_185["Block 185"]
	direction TB
	b185_8["arg__406 0x40u8"]
	b185_7["arg__404 0"]
	b185_11["arg__403 u8.&"]
	b185_13["cond__401 u8.!="]
	b185_8 --> b185_7
	b185_7 --> b185_11
	b185_11 --> b185_13
end
subgraph block_184["Block 184"]
	direction TB
	b184_41["memindex__408__422 0u"]
end
branch_181 --> block_184
subgraph block_179["Block 179"]
	direction TB
	b179_28["offset__414 imm_readULEB32"]
	b179_0["index pop_u32"]
	b179_6["val mach_readMemory32_f32"]
	b179_9["eff__395 push_f32"]
	b179_28 --> b179_0
	b179_0 --> b179_6
	b179_6 --> b179_9
end
branch_176 --> block_179

</pre>`;
window.traces["F32_LOAD"]["scheduler_ssad"] = ''
window.traces["F32_LOAD"]["scheduler_ssad"] += `<pre class=''>def arg__406 : byte = 0x40u8;
def arg__404 : byte = 0;
def arg__403 = u8.&(flags, arg__406);
def cond__401 = u8.!=(arg__403, arg__404);
if (cond__401) {
	def memindex__402__421 = imm_readULEB32();
} else {
	def memindex__408__422 : u32 = 0u;
}
// phis: memindex <- memindex__402__421; memindex <- memindex__408__422; memindex <- memindex__402__421; memindex <- memindex__408__422; memindex <- memindex__402__421; memindex <- memindex__408__422; memindex <- memindex__402__421; memindex <- memindex__408__422; 
def cond__389 = m_isMemory64(memindex);
if (cond__389) {
	def offset__411 = imm_readULEB64();
	def index = pop_u64();
	def val = mach_readMemory64_f32(memindex, index, offset__411);
	def eff__390 = push_f32(val);
} else {
	def offset__414 = imm_readULEB32();
	def index = pop_u32();
	def val = mach_readMemory32_f32(memindex, index, offset__414);
	def eff__395 = push_f32(val);
}
// phis: 
</pre>`;
window.traces["F32_LOAD"]["scheduler_ssad_pretty"] = ''
window.traces["F32_LOAD"]["scheduler_ssad_pretty"] += `<pre class=''>if (u8.!=(u8.&(flags, 0x40u8), 0)) {
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
	def offset1 = imm_readULEB32();
	def index = pop_u32();
	def val = mach_readMemory32_f32(memindex, index, offset1);
	push_f32(val);
}
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
	22["eff__395 push_f32"]
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
	10["memindex__402 imm_readULEB32"]
	3 -. Codeptr .-> 10
	9["cond__401 u8.!="]
	8 --> 9
	5 --> 9
	5["arg__404 0"]
	8["arg__403 u8.&"]
	3 --> 8
	6 --> 8
	6["arg__406 0x40u8"]
	11{"memindex ϕ"}
	9 --> 11
	10 --> 11
	4 --> 11
	4["memindex__408 0u"]
	30["eff__390 push_f32"]
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
	14["cond__389 m_isMemory64"]
	11 --> 14
	31{{"Sϕ Codeptr "}}
	14 --> 31
	23 --> 31
	15 --> 31
</pre>`;
window.traces["F32_LOAD"]["unlem_schedule"] = ''
window.traces["F32_LOAD"]["unlem_schedule"] += `<pre class=''>def flags = imm_readU8();
def arg__406 : byte = 0x40u8;
def arg__403 = u8.&(flags, arg__406);
def arg__404 : byte = 0;
def cond__401 = u8.!=(arg__403, arg__404);
var memindex: u32;
if (cond__401) {
	def memindex__402 = imm_readULEB32();
} else {
	def memindex__408 : u32 = 0u;
}
// phis: memindex <- memindex__402; memindex <- memindex__408; 
def cond__389 = m_isMemory64(memindex);
if (cond__389) {
	def offset = imm_readULEB64();
	def index = pop_u64();
	def val = mach_readMemory64_f32(memindex, index, offset);
	def eff__390 = push_f32(val);
} else {
	def offset = imm_readULEB32();
	def index = pop_u32();
	def val = mach_readMemory32_f32(memindex, index, offset);
	def eff__395 = push_f32(val);
}
// phis: 
</pre>`;
window.traces["F32_LOAD_ul"] = {}
window.traces["F32_LOAD_ul"]["post_surgery 188"] = ''
window.traces["F32_LOAD_ul"]["post_surgery 188"] += `<pre class='graph'>---
config:
  layout: elk
---
graph TD
	3[\\"Finish"/]
	21 -. Codeptr .-> 3
	2 -. Stack .-> 3
	1 -. Trap Locals Globals Tables Memory Extra .-> 3
	1[/"Start"\\]
	2{{"Sϕ Stack "}}
	19 --> 2
	18 --> 2
	9 --> 2
	9["eff__395 push_f32"]
	6 --> 9
	0 -. Stack .-> 9
	0["index pop_u32"]
	1 -. Stack .-> 0
	6["val mach_readMemory32_f32"]
	15 --> 6
	0 --> 6
	28 --> 6
	28["offset__442 imm_readULEB32"]
	17 -. Codeptr .-> 28
	17{{"Sϕ Codeptr "}}
	13 --> 17
	14 --> 17
	4 --> 17
	4["flags imm_readU8"]
	1 -. Codeptr .-> 4
	14["memindex__402 imm_readULEB32"]
	4 -. Codeptr .-> 14
	13["cond__401 u8.!="]
	11 --> 13
	7 --> 13
	7["arg__404 0"]
	11["arg__403 u8.&"]
	4 --> 11
	8 --> 11
	8["arg__406 0x40u8"]
	15{"memindex ϕ"}
	13 --> 15
	14 --> 15
	5 --> 15
	5["memindex__408 0u"]
	18["eff__390 push_f32"]
	16 --> 18
	12 -. Stack .-> 18
	12["index pop_u64"]
	1 -. Stack .-> 12
	16["val mach_readMemory64_f32"]
	15 --> 16
	12 --> 16
	24 --> 16
	24["offset__439 imm_readULEB64"]
	17 -. Codeptr .-> 24
	19["cond__389 m_isMemory64"]
	15 --> 19
	21{{"Sϕ Codeptr "}}
	19 --> 21
	24 --> 21
	28 --> 21
</pre>`;
window.traces["F32_LOAD_ul"]["post_surgery 193"] = ''
window.traces["F32_LOAD_ul"]["post_surgery 193"] += `<pre class='graph'>---
config:
  layout: elk
---
graph TD
	3[\\"Finish"/]
	21 -. Codeptr .-> 3
	2 -. Stack .-> 3
	1 -. Trap Locals Globals Tables Memory Extra .-> 3
	1[/"Start"\\]
	2{{"Sϕ Stack "}}
	19 --> 2
	18 --> 2
	9 --> 2
	9["eff__395 push_f32"]
	6 --> 9
	0 -. Stack .-> 9
	0["index pop_u32"]
	1 -. Stack .-> 0
	6["val mach_readMemory32_f32"]
	15 --> 6
	0 --> 6
	28 --> 6
	28["offset__442 imm_readULEB32"]
	17 -. Codeptr .-> 28
	17{{"Sϕ Codeptr "}}
	13 --> 17
	39 --> 17
	4 --> 17
	4["flags imm_readU8"]
	1 -. Codeptr .-> 4
	39["memindex__402__449 imm_readULEB32"]
	4 -. Codeptr .-> 39
	13["cond__401 u8.!="]
	11 --> 13
	7 --> 13
	7["arg__404 0"]
	11["arg__403 u8.&"]
	4 --> 11
	8 --> 11
	8["arg__406 0x40u8"]
	15{"memindex ϕ"}
	13 --> 15
	39 --> 15
	41 --> 15
	41["memindex__408__450 0u"]
	18["eff__390 push_f32"]
	16 --> 18
	12 -. Stack .-> 18
	12["index pop_u64"]
	1 -. Stack .-> 12
	16["val mach_readMemory64_f32"]
	15 --> 16
	12 --> 16
	24 --> 16
	24["offset__439 imm_readULEB64"]
	17 -. Codeptr .-> 24
	19["cond__389 m_isMemory64"]
	15 --> 19
	21{{"Sϕ Codeptr "}}
	19 --> 21
	24 --> 21
	28 --> 21
</pre>`;
window.traces["F32_LOAD"]["unlem_scheduler"] = ''
window.traces["F32_LOAD"]["unlem_scheduler"] += `<pre class='graph'>graph TD
subgraph block_186["Block 186"]
	direction TB
	b186_3[\\"Finish"/]
end
phi_188 --> block_186
subgraph phi_188["Phi 188"]
	p188_2{{"Sϕ Stack "}}
	p188_21{{"Sϕ Codeptr "}}
end
block_189 --> phi_188
block_190 --> phi_188
subgraph block_189["Block 189"]
	direction TB
	b189_24["offset__439 imm_readULEB64"]
	b189_12["index pop_u64"]
	b189_16["val mach_readMemory64_f32"]
	b189_18["eff__390 push_f32"]
	b189_24 --> b189_12
	b189_12 --> b189_16
	b189_16 --> b189_18
end
branch_187 --> block_189
subgraph branch_187["Branch 187"]
	br187_19["cond__389 m_isMemory64"]

end
block_191 --> branch_187
subgraph block_191["Block 191"]
	direction TB
	b191_19["cond__389 m_isMemory64"]
end
phi_193 --> block_191
subgraph phi_193["Phi 193"]
	p193_17{{"Sϕ Codeptr "}}
	p193_17{{"Sϕ Codeptr "}}
	p193_17{{"Sϕ Codeptr "}}
	p193_17{{"Sϕ Codeptr "}}
	p193_15{"memindex ϕ"}
	p193_15{"memindex ϕ"}
	p193_15{"memindex ϕ"}
	p193_15{"memindex ϕ"}
end
block_194 --> phi_193
block_195 --> phi_193
subgraph block_194["Block 194"]
	direction TB
	b194_39["memindex__402__449 imm_readULEB32"]
end
branch_192 --> block_194
subgraph branch_192["Branch 192"]
	br192_13["cond__401 u8.!="]

end
block_196 --> branch_192
subgraph block_196["Block 196"]
	direction TB
	b196_8["arg__406 0x40u8"]
	b196_7["arg__404 0"]
	b196_11["arg__403 u8.&"]
	b196_13["cond__401 u8.!="]
	b196_8 --> b196_7
	b196_7 --> b196_11
	b196_11 --> b196_13
end
subgraph block_195["Block 195"]
	direction TB
	b195_41["memindex__408__450 0u"]
end
branch_192 --> block_195
subgraph block_190["Block 190"]
	direction TB
	b190_28["offset__442 imm_readULEB32"]
	b190_0["index pop_u32"]
	b190_6["val mach_readMemory32_f32"]
	b190_9["eff__395 push_f32"]
	b190_28 --> b190_0
	b190_0 --> b190_6
	b190_6 --> b190_9
end
branch_187 --> block_190

</pre>`;
window.traces["F32_LOAD"]["unlem_scheduler_ssa"] = ''
window.traces["F32_LOAD"]["unlem_scheduler_ssa"] += `<pre class=''>def arg__406 : byte = 0x40u8;
def arg__404 : byte = 0;
def arg__403 = u8.&(flags, arg__406);
def cond__401 = u8.!=(arg__403, arg__404);
if (cond__401) {
	def memindex__402__449 = imm_readULEB32();
} else {
	def memindex__408__450 : u32 = 0u;
}
// phis: memindex <- memindex__402__449; memindex <- memindex__408__450; memindex <- memindex__402__449; memindex <- memindex__408__450; memindex <- memindex__402__449; memindex <- memindex__408__450; memindex <- memindex__402__449; memindex <- memindex__408__450; 
def cond__389 = m_isMemory64(memindex);
if (cond__389) {
	def offset__439 = imm_readULEB64();
	def index = pop_u64();
	def val = mach_readMemory64_f32(memindex, index, offset__439);
	def eff__390 = push_f32(val);
} else {
	def offset__442 = imm_readULEB32();
	def index = pop_u32();
	def val = mach_readMemory32_f32(memindex, index, offset__442);
	def eff__395 = push_f32(val);
}
// phis: 
</pre>`;
window.traces["F32_LOAD"]["unlem_scheduler_ssa"] += `<pre class=''>if (u8.!=(u8.&(flags, 0x40u8), 0)) {
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
	def offset1 = imm_readULEB32();
	def index = pop_u32();
	def val = mach_readMemory32_f32(memindex, index, offset1);
	push_f32(val);
}
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
	22["eff__395 push_f32"]
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
	10["memindex__402 imm_readULEB32"]
	3 -. Codeptr .-> 10
	9["cond__401 u8.!="]
	8 --> 9
	5 --> 9
	5["arg__404 0"]
	8["arg__403 u8.&"]
	3 --> 8
	6 --> 8
	6["arg__406 0x40u8"]
	11{"memindex ϕ"}
	9 --> 11
	10 --> 11
	4 --> 11
	4["memindex__408 0u"]
	30["eff__390 push_f32"]
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
	14["cond__389 m_isMemory64"]
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
	22["eff__395 push_f32"]
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
	10["memindex__402 imm_readULEB32"]
	3 -. Codeptr .-> 10
	9["cond__401 u8.!="]
	8 --> 9
	5 --> 9
	5["arg__404 0"]
	8["arg__403 u8.&"]
	3 --> 8
	6 --> 8
	6["arg__406 0x40u8"]
	11{"memindex ϕ"}
	9 --> 11
	10 --> 11
	4 --> 11
	4["memindex__408 0u"]
	30["eff__390 push_f32"]
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
	14["cond__389 m_isMemory64"]
	11 --> 14
	31{{"Sϕ Codeptr "}}
	14 --> 31
	23 --> 31
	15 --> 31
</pre>`;
window.traces["F32_LOAD"]["scheduled"] = ''
window.traces["F32_LOAD"]["scheduled"] += `<pre class=''>def flags = imm_readU8();
def arg__406 : byte = 0x40u8;
def arg__403 = u8.&(flags, arg__406);
def arg__404 : byte = 0;
def cond__401 = u8.!=(arg__403, arg__404);
var memindex: u32;
if (cond__401) {
	def memindex__402 = imm_readULEB32();
} else {
	def memindex__408 : u32 = 0u;
}
// phis: memindex <- memindex__402; memindex <- memindex__408; 
def cond__389 = m_isMemory64(memindex);
if (cond__389) {
	def offset = imm_readULEB64();
	def index = pop_u64();
	def val = mach_readMemory64_f32(memindex, index, offset);
	def eff__390 = push_f32(val);
} else {
	def offset = imm_readULEB32();
	def index = pop_u32();
	def val = mach_readMemory32_f32(memindex, index, offset);
	def eff__395 = push_f32(val);
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
def arg__480 : byte = 0;
def arg__482 : byte = 0x40u8;
def arg__481 = (flags);
def arg__479 = u8.&(arg__481, arg__482);
def cond__477 = u8.!=(arg__479, arg__480);
if (cond__477) {
	def memindex__478 = imm_readULEB32();
}
// phis: memindex <- memindex__478; 
def arg__476 = (memindex);
def cond__465 = m_isMemory64(arg__476);
if (cond__465) {
	def offset = imm_readULEB64();
	def index = pop_u64();
	def arg__470 = (offset);
	def arg__469 = (index);
	def arg__468 = (memindex);
	def val = mach_readMemory64_f64(arg__468, arg__469, arg__470);
	def arg__467 = (val);
	def eff__466 = push_f64(arg__467);
} else {
	def offset = imm_readULEB32();
	def index = pop_u32();
	def arg__475 = (offset);
	def arg__474 = (index);
	def arg__473 = (memindex);
	def val = mach_readMemory32_f64(arg__473, arg__474, arg__475);
	def arg__472 = (val);
	def eff__471 = push_f64(arg__472);
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
	22["eff__471 push_f64"]
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
	10["memindex__478 imm_readULEB32"]
	3 -. Codeptr .-> 10
	9["cond__477 u8.!="]
	8 --> 9
	5 --> 9
	5["arg__480 0"]
	8["arg__479 u8.&"]
	3 --> 8
	6 --> 8
	6["arg__482 0x40u8"]
	11{"memindex ϕ"}
	9 --> 11
	10 --> 11
	4 --> 11
	4["memindex__483 0u"]
	30["eff__466 push_f64"]
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
	14["cond__465 m_isMemory64"]
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
	22["eff__471 push_f64"]
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
	10["memindex__478 imm_readULEB32"]
	3 -. Codeptr .-> 10
	9["cond__477 u8.!="]
	8 --> 9
	5 --> 9
	5["arg__480 0"]
	8["arg__479 u8.&"]
	3 --> 8
	6 --> 8
	6["arg__482 0x40u8"]
	11{"memindex ϕ"}
	9 --> 11
	10 --> 11
	4 --> 11
	4["memindex__484 0u"]
	30["eff__466 push_f64"]
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
	14["cond__465 m_isMemory64"]
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
	22["eff__471 push_f64"]
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
	10["memindex__478 imm_readULEB32"]
	3 -. Codeptr .-> 10
	9["cond__477 u8.!="]
	8 --> 9
	5 --> 9
	5["arg__480 0"]
	8["arg__479 u8.&"]
	3 --> 8
	6 --> 8
	6["arg__482 0x40u8"]
	11{"memindex ϕ"}
	9 --> 11
	10 --> 11
	4 --> 11
	4["memindex__484 0u"]
	30["eff__466 push_f64"]
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
	14["cond__465 m_isMemory64"]
	11 --> 14
	31{{"Sϕ Codeptr "}}
	14 --> 31
	23 --> 31
	15 --> 31
</pre>`;
window.traces["F64_LOAD"]["post_surgery 199"] = ''
window.traces["F64_LOAD"]["post_surgery 199"] += `<pre class='graph'>---
config:
  layout: elk
---
graph TD
	3[\\"Finish"/]
	21 -. Codeptr .-> 3
	2 -. Stack .-> 3
	1 -. Trap Locals Globals Tables Memory Extra .-> 3
	1[/"Start"\\]
	2{{"Sϕ Stack "}}
	19 --> 2
	18 --> 2
	9 --> 2
	9["eff__471 push_f64"]
	6 --> 9
	0 -. Stack .-> 9
	0["index pop_u32"]
	1 -. Stack .-> 0
	6["val mach_readMemory32_f64"]
	15 --> 6
	0 --> 6
	28 --> 6
	28["offset__490 imm_readULEB32"]
	17 -. Codeptr .-> 28
	17{{"Sϕ Codeptr "}}
	13 --> 17
	14 --> 17
	4 --> 17
	4["flags imm_readU8"]
	1 -. Codeptr .-> 4
	14["memindex__478 imm_readULEB32"]
	4 -. Codeptr .-> 14
	13["cond__477 u8.!="]
	11 --> 13
	7 --> 13
	7["arg__480 0"]
	11["arg__479 u8.&"]
	4 --> 11
	8 --> 11
	8["arg__482 0x40u8"]
	15{"memindex ϕ"}
	13 --> 15
	14 --> 15
	5 --> 15
	5["memindex__484 0u"]
	18["eff__466 push_f64"]
	16 --> 18
	12 -. Stack .-> 18
	12["index pop_u64"]
	1 -. Stack .-> 12
	16["val mach_readMemory64_f64"]
	15 --> 16
	12 --> 16
	24 --> 16
	24["offset__487 imm_readULEB64"]
	17 -. Codeptr .-> 24
	19["cond__465 m_isMemory64"]
	15 --> 19
	21{{"Sϕ Codeptr "}}
	19 --> 21
	24 --> 21
	28 --> 21
</pre>`;
window.traces["F64_LOAD"]["post_surgery 204"] = ''
window.traces["F64_LOAD"]["post_surgery 204"] += `<pre class='graph'>---
config:
  layout: elk
---
graph TD
	3[\\"Finish"/]
	21 -. Codeptr .-> 3
	2 -. Stack .-> 3
	1 -. Trap Locals Globals Tables Memory Extra .-> 3
	1[/"Start"\\]
	2{{"Sϕ Stack "}}
	19 --> 2
	18 --> 2
	9 --> 2
	9["eff__471 push_f64"]
	6 --> 9
	0 -. Stack .-> 9
	0["index pop_u32"]
	1 -. Stack .-> 0
	6["val mach_readMemory32_f64"]
	15 --> 6
	0 --> 6
	28 --> 6
	28["offset__490 imm_readULEB32"]
	17 -. Codeptr .-> 28
	17{{"Sϕ Codeptr "}}
	13 --> 17
	39 --> 17
	4 --> 17
	4["flags imm_readU8"]
	1 -. Codeptr .-> 4
	39["memindex__478__497 imm_readULEB32"]
	4 -. Codeptr .-> 39
	13["cond__477 u8.!="]
	11 --> 13
	7 --> 13
	7["arg__480 0"]
	11["arg__479 u8.&"]
	4 --> 11
	8 --> 11
	8["arg__482 0x40u8"]
	15{"memindex ϕ"}
	13 --> 15
	39 --> 15
	41 --> 15
	41["memindex__484__498 0u"]
	18["eff__466 push_f64"]
	16 --> 18
	12 -. Stack .-> 18
	12["index pop_u64"]
	1 -. Stack .-> 12
	16["val mach_readMemory64_f64"]
	15 --> 16
	12 --> 16
	24 --> 16
	24["offset__487 imm_readULEB64"]
	17 -. Codeptr .-> 24
	19["cond__465 m_isMemory64"]
	15 --> 19
	21{{"Sϕ Codeptr "}}
	19 --> 21
	24 --> 21
	28 --> 21
</pre>`;
window.traces["F64_LOAD"]["schedulerMermaid"] = ''
window.traces["F64_LOAD"]["schedulerMermaid"] += `<pre class='graph'>graph TD
subgraph block_197["Block 197"]
	direction TB
	b197_3[\\"Finish"/]
end
phi_199 --> block_197
subgraph phi_199["Phi 199"]
	p199_2{{"Sϕ Stack "}}
	p199_21{{"Sϕ Codeptr "}}
end
block_200 --> phi_199
block_201 --> phi_199
subgraph block_200["Block 200"]
	direction TB
	b200_24["offset__487 imm_readULEB64"]
	b200_12["index pop_u64"]
	b200_16["val mach_readMemory64_f64"]
	b200_18["eff__466 push_f64"]
	b200_24 --> b200_12
	b200_12 --> b200_16
	b200_16 --> b200_18
end
branch_198 --> block_200
subgraph branch_198["Branch 198"]
	br198_19["cond__465 m_isMemory64"]

end
block_202 --> branch_198
subgraph block_202["Block 202"]
	direction TB
	b202_19["cond__465 m_isMemory64"]
end
phi_204 --> block_202
subgraph phi_204["Phi 204"]
	p204_17{{"Sϕ Codeptr "}}
	p204_17{{"Sϕ Codeptr "}}
	p204_17{{"Sϕ Codeptr "}}
	p204_17{{"Sϕ Codeptr "}}
	p204_15{"memindex ϕ"}
	p204_15{"memindex ϕ"}
	p204_15{"memindex ϕ"}
	p204_15{"memindex ϕ"}
end
block_205 --> phi_204
block_206 --> phi_204
subgraph block_205["Block 205"]
	direction TB
	b205_39["memindex__478__497 imm_readULEB32"]
end
branch_203 --> block_205
subgraph branch_203["Branch 203"]
	br203_13["cond__477 u8.!="]

end
block_207 --> branch_203
subgraph block_207["Block 207"]
	direction TB
	b207_8["arg__482 0x40u8"]
	b207_7["arg__480 0"]
	b207_11["arg__479 u8.&"]
	b207_13["cond__477 u8.!="]
	b207_8 --> b207_7
	b207_7 --> b207_11
	b207_11 --> b207_13
end
subgraph block_206["Block 206"]
	direction TB
	b206_41["memindex__484__498 0u"]
end
branch_203 --> block_206
subgraph block_201["Block 201"]
	direction TB
	b201_28["offset__490 imm_readULEB32"]
	b201_0["index pop_u32"]
	b201_6["val mach_readMemory32_f64"]
	b201_9["eff__471 push_f64"]
	b201_28 --> b201_0
	b201_0 --> b201_6
	b201_6 --> b201_9
end
branch_198 --> block_201

</pre>`;
window.traces["F64_LOAD"]["scheduler_ssad"] = ''
window.traces["F64_LOAD"]["scheduler_ssad"] += `<pre class=''>def arg__482 : byte = 0x40u8;
def arg__480 : byte = 0;
def arg__479 = u8.&(flags, arg__482);
def cond__477 = u8.!=(arg__479, arg__480);
if (cond__477) {
	def memindex__478__497 = imm_readULEB32();
} else {
	def memindex__484__498 : u32 = 0u;
}
// phis: memindex <- memindex__478__497; memindex <- memindex__484__498; memindex <- memindex__478__497; memindex <- memindex__484__498; memindex <- memindex__478__497; memindex <- memindex__484__498; memindex <- memindex__478__497; memindex <- memindex__484__498; 
def cond__465 = m_isMemory64(memindex);
if (cond__465) {
	def offset__487 = imm_readULEB64();
	def index = pop_u64();
	def val = mach_readMemory64_f64(memindex, index, offset__487);
	def eff__466 = push_f64(val);
} else {
	def offset__490 = imm_readULEB32();
	def index = pop_u32();
	def val = mach_readMemory32_f64(memindex, index, offset__490);
	def eff__471 = push_f64(val);
}
// phis: 
</pre>`;
window.traces["F64_LOAD"]["scheduler_ssad_pretty"] = ''
window.traces["F64_LOAD"]["scheduler_ssad_pretty"] += `<pre class=''>if (u8.!=(u8.&(flags, 0x40u8), 0)) {
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
	def offset1 = imm_readULEB32();
	def index = pop_u32();
	def val = mach_readMemory32_f64(memindex, index, offset1);
	push_f64(val);
}
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
	22["eff__471 push_f64"]
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
	10["memindex__478 imm_readULEB32"]
	3 -. Codeptr .-> 10
	9["cond__477 u8.!="]
	8 --> 9
	5 --> 9
	5["arg__480 0"]
	8["arg__479 u8.&"]
	3 --> 8
	6 --> 8
	6["arg__482 0x40u8"]
	11{"memindex ϕ"}
	9 --> 11
	10 --> 11
	4 --> 11
	4["memindex__484 0u"]
	30["eff__466 push_f64"]
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
	14["cond__465 m_isMemory64"]
	11 --> 14
	31{{"Sϕ Codeptr "}}
	14 --> 31
	23 --> 31
	15 --> 31
</pre>`;
window.traces["F64_LOAD"]["unlem_schedule"] = ''
window.traces["F64_LOAD"]["unlem_schedule"] += `<pre class=''>def flags = imm_readU8();
def arg__482 : byte = 0x40u8;
def arg__479 = u8.&(flags, arg__482);
def arg__480 : byte = 0;
def cond__477 = u8.!=(arg__479, arg__480);
var memindex: u32;
if (cond__477) {
	def memindex__478 = imm_readULEB32();
} else {
	def memindex__484 : u32 = 0u;
}
// phis: memindex <- memindex__478; memindex <- memindex__484; 
def cond__465 = m_isMemory64(memindex);
if (cond__465) {
	def offset = imm_readULEB64();
	def index = pop_u64();
	def val = mach_readMemory64_f64(memindex, index, offset);
	def eff__466 = push_f64(val);
} else {
	def offset = imm_readULEB32();
	def index = pop_u32();
	def val = mach_readMemory32_f64(memindex, index, offset);
	def eff__471 = push_f64(val);
}
// phis: 
</pre>`;
window.traces["F64_LOAD_ul"] = {}
window.traces["F64_LOAD_ul"]["post_surgery 210"] = ''
window.traces["F64_LOAD_ul"]["post_surgery 210"] += `<pre class='graph'>---
config:
  layout: elk
---
graph TD
	3[\\"Finish"/]
	21 -. Codeptr .-> 3
	2 -. Stack .-> 3
	1 -. Trap Locals Globals Tables Memory Extra .-> 3
	1[/"Start"\\]
	2{{"Sϕ Stack "}}
	19 --> 2
	18 --> 2
	9 --> 2
	9["eff__471 push_f64"]
	6 --> 9
	0 -. Stack .-> 9
	0["index pop_u32"]
	1 -. Stack .-> 0
	6["val mach_readMemory32_f64"]
	15 --> 6
	0 --> 6
	28 --> 6
	28["offset__518 imm_readULEB32"]
	17 -. Codeptr .-> 28
	17{{"Sϕ Codeptr "}}
	13 --> 17
	14 --> 17
	4 --> 17
	4["flags imm_readU8"]
	1 -. Codeptr .-> 4
	14["memindex__478 imm_readULEB32"]
	4 -. Codeptr .-> 14
	13["cond__477 u8.!="]
	11 --> 13
	7 --> 13
	7["arg__480 0"]
	11["arg__479 u8.&"]
	4 --> 11
	8 --> 11
	8["arg__482 0x40u8"]
	15{"memindex ϕ"}
	13 --> 15
	14 --> 15
	5 --> 15
	5["memindex__484 0u"]
	18["eff__466 push_f64"]
	16 --> 18
	12 -. Stack .-> 18
	12["index pop_u64"]
	1 -. Stack .-> 12
	16["val mach_readMemory64_f64"]
	15 --> 16
	12 --> 16
	24 --> 16
	24["offset__515 imm_readULEB64"]
	17 -. Codeptr .-> 24
	19["cond__465 m_isMemory64"]
	15 --> 19
	21{{"Sϕ Codeptr "}}
	19 --> 21
	24 --> 21
	28 --> 21
</pre>`;
window.traces["F64_LOAD_ul"]["post_surgery 215"] = ''
window.traces["F64_LOAD_ul"]["post_surgery 215"] += `<pre class='graph'>---
config:
  layout: elk
---
graph TD
	3[\\"Finish"/]
	21 -. Codeptr .-> 3
	2 -. Stack .-> 3
	1 -. Trap Locals Globals Tables Memory Extra .-> 3
	1[/"Start"\\]
	2{{"Sϕ Stack "}}
	19 --> 2
	18 --> 2
	9 --> 2
	9["eff__471 push_f64"]
	6 --> 9
	0 -. Stack .-> 9
	0["index pop_u32"]
	1 -. Stack .-> 0
	6["val mach_readMemory32_f64"]
	15 --> 6
	0 --> 6
	28 --> 6
	28["offset__518 imm_readULEB32"]
	17 -. Codeptr .-> 28
	17{{"Sϕ Codeptr "}}
	13 --> 17
	39 --> 17
	4 --> 17
	4["flags imm_readU8"]
	1 -. Codeptr .-> 4
	39["memindex__478__525 imm_readULEB32"]
	4 -. Codeptr .-> 39
	13["cond__477 u8.!="]
	11 --> 13
	7 --> 13
	7["arg__480 0"]
	11["arg__479 u8.&"]
	4 --> 11
	8 --> 11
	8["arg__482 0x40u8"]
	15{"memindex ϕ"}
	13 --> 15
	39 --> 15
	41 --> 15
	41["memindex__484__526 0u"]
	18["eff__466 push_f64"]
	16 --> 18
	12 -. Stack .-> 18
	12["index pop_u64"]
	1 -. Stack .-> 12
	16["val mach_readMemory64_f64"]
	15 --> 16
	12 --> 16
	24 --> 16
	24["offset__515 imm_readULEB64"]
	17 -. Codeptr .-> 24
	19["cond__465 m_isMemory64"]
	15 --> 19
	21{{"Sϕ Codeptr "}}
	19 --> 21
	24 --> 21
	28 --> 21
</pre>`;
window.traces["F64_LOAD"]["unlem_scheduler"] = ''
window.traces["F64_LOAD"]["unlem_scheduler"] += `<pre class='graph'>graph TD
subgraph block_208["Block 208"]
	direction TB
	b208_3[\\"Finish"/]
end
phi_210 --> block_208
subgraph phi_210["Phi 210"]
	p210_2{{"Sϕ Stack "}}
	p210_21{{"Sϕ Codeptr "}}
end
block_211 --> phi_210
block_212 --> phi_210
subgraph block_211["Block 211"]
	direction TB
	b211_24["offset__515 imm_readULEB64"]
	b211_12["index pop_u64"]
	b211_16["val mach_readMemory64_f64"]
	b211_18["eff__466 push_f64"]
	b211_24 --> b211_12
	b211_12 --> b211_16
	b211_16 --> b211_18
end
branch_209 --> block_211
subgraph branch_209["Branch 209"]
	br209_19["cond__465 m_isMemory64"]

end
block_213 --> branch_209
subgraph block_213["Block 213"]
	direction TB
	b213_19["cond__465 m_isMemory64"]
end
phi_215 --> block_213
subgraph phi_215["Phi 215"]
	p215_17{{"Sϕ Codeptr "}}
	p215_17{{"Sϕ Codeptr "}}
	p215_17{{"Sϕ Codeptr "}}
	p215_17{{"Sϕ Codeptr "}}
	p215_15{"memindex ϕ"}
	p215_15{"memindex ϕ"}
	p215_15{"memindex ϕ"}
	p215_15{"memindex ϕ"}
end
block_216 --> phi_215
block_217 --> phi_215
subgraph block_216["Block 216"]
	direction TB
	b216_39["memindex__478__525 imm_readULEB32"]
end
branch_214 --> block_216
subgraph branch_214["Branch 214"]
	br214_13["cond__477 u8.!="]

end
block_218 --> branch_214
subgraph block_218["Block 218"]
	direction TB
	b218_8["arg__482 0x40u8"]
	b218_7["arg__480 0"]
	b218_11["arg__479 u8.&"]
	b218_13["cond__477 u8.!="]
	b218_8 --> b218_7
	b218_7 --> b218_11
	b218_11 --> b218_13
end
subgraph block_217["Block 217"]
	direction TB
	b217_41["memindex__484__526 0u"]
end
branch_214 --> block_217
subgraph block_212["Block 212"]
	direction TB
	b212_28["offset__518 imm_readULEB32"]
	b212_0["index pop_u32"]
	b212_6["val mach_readMemory32_f64"]
	b212_9["eff__471 push_f64"]
	b212_28 --> b212_0
	b212_0 --> b212_6
	b212_6 --> b212_9
end
branch_209 --> block_212

</pre>`;
window.traces["F64_LOAD"]["unlem_scheduler_ssa"] = ''
window.traces["F64_LOAD"]["unlem_scheduler_ssa"] += `<pre class=''>def arg__482 : byte = 0x40u8;
def arg__480 : byte = 0;
def arg__479 = u8.&(flags, arg__482);
def cond__477 = u8.!=(arg__479, arg__480);
if (cond__477) {
	def memindex__478__525 = imm_readULEB32();
} else {
	def memindex__484__526 : u32 = 0u;
}
// phis: memindex <- memindex__478__525; memindex <- memindex__484__526; memindex <- memindex__478__525; memindex <- memindex__484__526; memindex <- memindex__478__525; memindex <- memindex__484__526; memindex <- memindex__478__525; memindex <- memindex__484__526; 
def cond__465 = m_isMemory64(memindex);
if (cond__465) {
	def offset__515 = imm_readULEB64();
	def index = pop_u64();
	def val = mach_readMemory64_f64(memindex, index, offset__515);
	def eff__466 = push_f64(val);
} else {
	def offset__518 = imm_readULEB32();
	def index = pop_u32();
	def val = mach_readMemory32_f64(memindex, index, offset__518);
	def eff__471 = push_f64(val);
}
// phis: 
</pre>`;
window.traces["F64_LOAD"]["unlem_scheduler_ssa"] += `<pre class=''>if (u8.!=(u8.&(flags, 0x40u8), 0)) {
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
	def offset1 = imm_readULEB32();
	def index = pop_u32();
	def val = mach_readMemory32_f64(memindex, index, offset1);
	push_f64(val);
}
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
	22["eff__471 push_f64"]
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
	10["memindex__478 imm_readULEB32"]
	3 -. Codeptr .-> 10
	9["cond__477 u8.!="]
	8 --> 9
	5 --> 9
	5["arg__480 0"]
	8["arg__479 u8.&"]
	3 --> 8
	6 --> 8
	6["arg__482 0x40u8"]
	11{"memindex ϕ"}
	9 --> 11
	10 --> 11
	4 --> 11
	4["memindex__484 0u"]
	30["eff__466 push_f64"]
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
	14["cond__465 m_isMemory64"]
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
	22["eff__471 push_f64"]
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
	10["memindex__478 imm_readULEB32"]
	3 -. Codeptr .-> 10
	9["cond__477 u8.!="]
	8 --> 9
	5 --> 9
	5["arg__480 0"]
	8["arg__479 u8.&"]
	3 --> 8
	6 --> 8
	6["arg__482 0x40u8"]
	11{"memindex ϕ"}
	9 --> 11
	10 --> 11
	4 --> 11
	4["memindex__484 0u"]
	30["eff__466 push_f64"]
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
	14["cond__465 m_isMemory64"]
	11 --> 14
	31{{"Sϕ Codeptr "}}
	14 --> 31
	23 --> 31
	15 --> 31
</pre>`;
window.traces["F64_LOAD"]["scheduled"] = ''
window.traces["F64_LOAD"]["scheduled"] += `<pre class=''>def flags = imm_readU8();
def arg__482 : byte = 0x40u8;
def arg__479 = u8.&(flags, arg__482);
def arg__480 : byte = 0;
def cond__477 = u8.!=(arg__479, arg__480);
var memindex: u32;
if (cond__477) {
	def memindex__478 = imm_readULEB32();
} else {
	def memindex__484 : u32 = 0u;
}
// phis: memindex <- memindex__478; memindex <- memindex__484; 
def cond__465 = m_isMemory64(memindex);
if (cond__465) {
	def offset = imm_readULEB64();
	def index = pop_u64();
	def val = mach_readMemory64_f64(memindex, index, offset);
	def eff__466 = push_f64(val);
} else {
	def offset = imm_readULEB32();
	def index = pop_u32();
	def val = mach_readMemory32_f64(memindex, index, offset);
	def eff__471 = push_f64(val);
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
def arg__558 : byte = 0;
def arg__560 : byte = 0x40u8;
def arg__559 = (flags);
def arg__557 = u8.&(arg__559, arg__560);
def cond__555 = u8.!=(arg__557, arg__558);
if (cond__555) {
	def memindex__556 = imm_readULEB32();
}
// phis: memindex <- memindex__556; 
def arg__554 = (memindex);
def cond__541 = m_isMemory64(arg__554);
if (cond__541) {
	def offset = imm_readULEB64();
	def index = pop_u64();
	def arg__547 = (offset);
	def arg__546 = (index);
	def arg__545 = (memindex);
	def val = mach_readMemory64_u8(arg__545, arg__546, arg__547);
	def arg__544 = (val);
	def extend = U32_extend8_s(arg__544);
	def arg__543 = (extend);
	def eff__542 = push_u32(arg__543);
} else {
	def offset = imm_readULEB32();
	def index = pop_u32();
	def arg__553 = (offset);
	def arg__552 = (index);
	def arg__551 = (memindex);
	def val = mach_readMemory32_u8(arg__551, arg__552, arg__553);
	def arg__550 = (val);
	def extend = U32_extend8_s(arg__550);
	def arg__549 = (extend);
	def eff__548 = push_u32(arg__549);
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
	24["eff__548 push_u32"]
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
	10["memindex__556 imm_readULEB32"]
	3 -. Codeptr .-> 10
	9["cond__555 u8.!="]
	8 --> 9
	5 --> 9
	5["arg__558 0"]
	8["arg__557 u8.&"]
	3 --> 8
	6 --> 8
	6["arg__560 0x40u8"]
	11{"memindex ϕ"}
	9 --> 11
	10 --> 11
	4 --> 11
	4["memindex__561 0u"]
	34["eff__542 push_u32"]
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
	14["cond__541 m_isMemory64"]
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
	24["eff__548 push_u32"]
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
	10["memindex__556 imm_readULEB32"]
	3 -. Codeptr .-> 10
	9["cond__555 u8.!="]
	8 --> 9
	5 --> 9
	5["arg__558 0"]
	8["arg__557 u8.&"]
	3 --> 8
	6 --> 8
	6["arg__560 0x40u8"]
	11{"memindex ϕ"}
	9 --> 11
	10 --> 11
	4 --> 11
	4["memindex__562 0u"]
	34["eff__542 push_u32"]
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
	14["cond__541 m_isMemory64"]
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
	24["eff__548 push_u32"]
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
	10["memindex__556 imm_readULEB32"]
	3 -. Codeptr .-> 10
	9["cond__555 u8.!="]
	8 --> 9
	5 --> 9
	5["arg__558 0"]
	8["arg__557 u8.&"]
	3 --> 8
	6 --> 8
	6["arg__560 0x40u8"]
	11{"memindex ϕ"}
	9 --> 11
	10 --> 11
	4 --> 11
	4["memindex__562 0u"]
	34["eff__542 push_u32"]
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
	14["cond__541 m_isMemory64"]
	11 --> 14
	35{{"Sϕ Codeptr "}}
	14 --> 35
	25 --> 35
	15 --> 35
</pre>`;
window.traces["I32_LOAD8_S"]["post_surgery 221"] = ''
window.traces["I32_LOAD8_S"]["post_surgery 221"] += `<pre class='graph'>---
config:
  layout: elk
---
graph TD
	3[\\"Finish"/]
	6 -. Codeptr .-> 3
	9 -. Stack .-> 3
	2 -. Trap Locals Globals Tables Memory Extra .-> 3
	2[/"Start"\\]
	9{{"Sϕ Stack "}}
	22 --> 9
	4 --> 9
	14 --> 9
	14["eff__548 push_u32"]
	12 --> 14
	0 -. Stack .-> 14
	0["index pop_u32"]
	2 -. Stack .-> 0
	12["extend U32_extend8_s"]
	7 --> 12
	7["val mach_readMemory32_u8"]
	19 --> 7
	0 --> 7
	32 --> 7
	32["offset__570 imm_readULEB32"]
	20 -. Codeptr .-> 32
	20{{"Sϕ Codeptr "}}
	15 --> 20
	17 --> 20
	5 --> 20
	5["flags imm_readU8"]
	2 -. Codeptr .-> 5
	17["memindex__556 imm_readULEB32"]
	5 -. Codeptr .-> 17
	15["cond__555 u8.!="]
	13 --> 15
	10 --> 15
	10["arg__558 0"]
	13["arg__557 u8.&"]
	5 --> 13
	11 --> 13
	11["arg__560 0x40u8"]
	19{"memindex ϕ"}
	15 --> 19
	17 --> 19
	8 --> 19
	8["memindex__562 0u"]
	4["eff__542 push_u32"]
	1 --> 4
	18 -. Stack .-> 4
	18["index pop_u64"]
	2 -. Stack .-> 18
	1["extend U32_extend8_s"]
	21 --> 1
	21["val mach_readMemory64_u8"]
	19 --> 21
	18 --> 21
	27 --> 21
	27["offset__566 imm_readULEB64"]
	20 -. Codeptr .-> 27
	22["cond__541 m_isMemory64"]
	19 --> 22
	6{{"Sϕ Codeptr "}}
	22 --> 6
	27 --> 6
	32 --> 6
</pre>`;
window.traces["I32_LOAD8_S"]["post_surgery 226"] = ''
window.traces["I32_LOAD8_S"]["post_surgery 226"] += `<pre class='graph'>---
config:
  layout: elk
---
graph TD
	3[\\"Finish"/]
	6 -. Codeptr .-> 3
	9 -. Stack .-> 3
	2 -. Trap Locals Globals Tables Memory Extra .-> 3
	2[/"Start"\\]
	9{{"Sϕ Stack "}}
	22 --> 9
	4 --> 9
	14 --> 9
	14["eff__548 push_u32"]
	12 --> 14
	0 -. Stack .-> 14
	0["index pop_u32"]
	2 -. Stack .-> 0
	12["extend U32_extend8_s"]
	7 --> 12
	7["val mach_readMemory32_u8"]
	19 --> 7
	0 --> 7
	32 --> 7
	32["offset__570 imm_readULEB32"]
	20 -. Codeptr .-> 32
	20{{"Sϕ Codeptr "}}
	15 --> 20
	44 --> 20
	5 --> 20
	5["flags imm_readU8"]
	2 -. Codeptr .-> 5
	44["memindex__556__579 imm_readULEB32"]
	5 -. Codeptr .-> 44
	15["cond__555 u8.!="]
	13 --> 15
	10 --> 15
	10["arg__558 0"]
	13["arg__557 u8.&"]
	5 --> 13
	11 --> 13
	11["arg__560 0x40u8"]
	19{"memindex ϕ"}
	15 --> 19
	44 --> 19
	46 --> 19
	46["memindex__562__580 0u"]
	4["eff__542 push_u32"]
	1 --> 4
	18 -. Stack .-> 4
	18["index pop_u64"]
	2 -. Stack .-> 18
	1["extend U32_extend8_s"]
	21 --> 1
	21["val mach_readMemory64_u8"]
	19 --> 21
	18 --> 21
	27 --> 21
	27["offset__566 imm_readULEB64"]
	20 -. Codeptr .-> 27
	22["cond__541 m_isMemory64"]
	19 --> 22
	6{{"Sϕ Codeptr "}}
	22 --> 6
	27 --> 6
	32 --> 6
</pre>`;
window.traces["I32_LOAD8_S"]["schedulerMermaid"] = ''
window.traces["I32_LOAD8_S"]["schedulerMermaid"] += `<pre class='graph'>graph TD
subgraph block_219["Block 219"]
	direction TB
	b219_3[\\"Finish"/]
end
phi_221 --> block_219
subgraph phi_221["Phi 221"]
	p221_9{{"Sϕ Stack "}}
	p221_6{{"Sϕ Codeptr "}}
end
block_222 --> phi_221
block_223 --> phi_221
subgraph block_222["Block 222"]
	direction TB
	b222_27["offset__566 imm_readULEB64"]
	b222_18["index pop_u64"]
	b222_21["val mach_readMemory64_u8"]
	b222_1["extend U32_extend8_s"]
	b222_4["eff__542 push_u32"]
	b222_27 --> b222_18
	b222_18 --> b222_21
	b222_21 --> b222_1
	b222_1 --> b222_4
end
branch_220 --> block_222
subgraph branch_220["Branch 220"]
	br220_22["cond__541 m_isMemory64"]

end
block_224 --> branch_220
subgraph block_224["Block 224"]
	direction TB
	b224_22["cond__541 m_isMemory64"]
end
phi_226 --> block_224
subgraph phi_226["Phi 226"]
	p226_20{{"Sϕ Codeptr "}}
	p226_20{{"Sϕ Codeptr "}}
	p226_20{{"Sϕ Codeptr "}}
	p226_20{{"Sϕ Codeptr "}}
	p226_19{"memindex ϕ"}
	p226_19{"memindex ϕ"}
	p226_19{"memindex ϕ"}
	p226_19{"memindex ϕ"}
end
block_227 --> phi_226
block_228 --> phi_226
subgraph block_227["Block 227"]
	direction TB
	b227_44["memindex__556__579 imm_readULEB32"]
end
branch_225 --> block_227
subgraph branch_225["Branch 225"]
	br225_15["cond__555 u8.!="]

end
block_229 --> branch_225
subgraph block_229["Block 229"]
	direction TB
	b229_11["arg__560 0x40u8"]
	b229_10["arg__558 0"]
	b229_13["arg__557 u8.&"]
	b229_15["cond__555 u8.!="]
	b229_11 --> b229_10
	b229_10 --> b229_13
	b229_13 --> b229_15
end
subgraph block_228["Block 228"]
	direction TB
	b228_46["memindex__562__580 0u"]
end
branch_225 --> block_228
subgraph block_223["Block 223"]
	direction TB
	b223_32["offset__570 imm_readULEB32"]
	b223_0["index pop_u32"]
	b223_7["val mach_readMemory32_u8"]
	b223_12["extend U32_extend8_s"]
	b223_14["eff__548 push_u32"]
	b223_32 --> b223_0
	b223_0 --> b223_7
	b223_7 --> b223_12
	b223_12 --> b223_14
end
branch_220 --> block_223

</pre>`;
window.traces["I32_LOAD8_S"]["scheduler_ssad"] = ''
window.traces["I32_LOAD8_S"]["scheduler_ssad"] += `<pre class=''>def arg__560 : byte = 0x40u8;
def arg__558 : byte = 0;
def arg__557 = u8.&(flags, arg__560);
def cond__555 = u8.!=(arg__557, arg__558);
if (cond__555) {
	def memindex__556__579 = imm_readULEB32();
} else {
	def memindex__562__580 : u32 = 0u;
}
// phis: memindex <- memindex__556__579; memindex <- memindex__562__580; memindex <- memindex__556__579; memindex <- memindex__562__580; memindex <- memindex__556__579; memindex <- memindex__562__580; memindex <- memindex__556__579; memindex <- memindex__562__580; 
def cond__541 = m_isMemory64(memindex);
if (cond__541) {
	def offset__566 = imm_readULEB64();
	def index = pop_u64();
	def val = mach_readMemory64_u8(memindex, index, offset__566);
	def extend = U32_extend8_s(val);
	def eff__542 = push_u32(extend);
} else {
	def offset__570 = imm_readULEB32();
	def index = pop_u32();
	def val = mach_readMemory32_u8(memindex, index, offset__570);
	def extend = U32_extend8_s(val);
	def eff__548 = push_u32(extend);
}
// phis: 
</pre>`;
window.traces["I32_LOAD8_S"]["scheduler_ssad_pretty"] = ''
window.traces["I32_LOAD8_S"]["scheduler_ssad_pretty"] += `<pre class=''>if (u8.!=(u8.&(flags, 0x40u8), 0)) {
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
	def offset1 = imm_readULEB32();
	def index = pop_u32();
	def val = mach_readMemory32_u8(memindex, index, offset1);
	def extend = U32_extend8_s(val);
	push_u32(extend);
}
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
	24["eff__548 push_u32"]
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
	10["memindex__556 imm_readULEB32"]
	3 -. Codeptr .-> 10
	9["cond__555 u8.!="]
	8 --> 9
	5 --> 9
	5["arg__558 0"]
	8["arg__557 u8.&"]
	3 --> 8
	6 --> 8
	6["arg__560 0x40u8"]
	11{"memindex ϕ"}
	9 --> 11
	10 --> 11
	4 --> 11
	4["memindex__562 0u"]
	34["eff__542 push_u32"]
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
	14["cond__541 m_isMemory64"]
	11 --> 14
	35{{"Sϕ Codeptr "}}
	14 --> 35
	25 --> 35
	15 --> 35
</pre>`;
window.traces["I32_LOAD8_S"]["unlem_schedule"] = ''
window.traces["I32_LOAD8_S"]["unlem_schedule"] += `<pre class=''>def flags = imm_readU8();
def arg__560 : byte = 0x40u8;
def arg__557 = u8.&(flags, arg__560);
def arg__558 : byte = 0;
def cond__555 = u8.!=(arg__557, arg__558);
var memindex: u32;
if (cond__555) {
	def memindex__556 = imm_readULEB32();
} else {
	def memindex__562 : u32 = 0u;
}
// phis: memindex <- memindex__556; memindex <- memindex__562; 
def cond__541 = m_isMemory64(memindex);
if (cond__541) {
	def offset = imm_readULEB64();
	def index = pop_u64();
	def val = mach_readMemory64_u8(memindex, index, offset);
	def extend = U32_extend8_s(val);
	def eff__542 = push_u32(extend);
} else {
	def offset = imm_readULEB32();
	def index = pop_u32();
	def val = mach_readMemory32_u8(memindex, index, offset);
	def extend = U32_extend8_s(val);
	def eff__548 = push_u32(extend);
}
// phis: 
</pre>`;
window.traces["I32_LOAD8_S_ul"] = {}
window.traces["I32_LOAD8_S_ul"]["post_surgery 232"] = ''
window.traces["I32_LOAD8_S_ul"]["post_surgery 232"] += `<pre class='graph'>---
config:
  layout: elk
---
graph TD
	3[\\"Finish"/]
	6 -. Codeptr .-> 3
	9 -. Stack .-> 3
	2 -. Trap Locals Globals Tables Memory Extra .-> 3
	2[/"Start"\\]
	9{{"Sϕ Stack "}}
	22 --> 9
	4 --> 9
	14 --> 9
	14["eff__548 push_u32"]
	12 --> 14
	0 -. Stack .-> 14
	0["index pop_u32"]
	2 -. Stack .-> 0
	12["extend U32_extend8_s"]
	7 --> 12
	7["val mach_readMemory32_u8"]
	19 --> 7
	0 --> 7
	32 --> 7
	32["offset__602 imm_readULEB32"]
	20 -. Codeptr .-> 32
	20{{"Sϕ Codeptr "}}
	15 --> 20
	17 --> 20
	5 --> 20
	5["flags imm_readU8"]
	2 -. Codeptr .-> 5
	17["memindex__556 imm_readULEB32"]
	5 -. Codeptr .-> 17
	15["cond__555 u8.!="]
	13 --> 15
	10 --> 15
	10["arg__558 0"]
	13["arg__557 u8.&"]
	5 --> 13
	11 --> 13
	11["arg__560 0x40u8"]
	19{"memindex ϕ"}
	15 --> 19
	17 --> 19
	8 --> 19
	8["memindex__562 0u"]
	4["eff__542 push_u32"]
	1 --> 4
	18 -. Stack .-> 4
	18["index pop_u64"]
	2 -. Stack .-> 18
	1["extend U32_extend8_s"]
	21 --> 1
	21["val mach_readMemory64_u8"]
	19 --> 21
	18 --> 21
	27 --> 21
	27["offset__598 imm_readULEB64"]
	20 -. Codeptr .-> 27
	22["cond__541 m_isMemory64"]
	19 --> 22
	6{{"Sϕ Codeptr "}}
	22 --> 6
	27 --> 6
	32 --> 6
</pre>`;
window.traces["I32_LOAD8_S_ul"]["post_surgery 237"] = ''
window.traces["I32_LOAD8_S_ul"]["post_surgery 237"] += `<pre class='graph'>---
config:
  layout: elk
---
graph TD
	3[\\"Finish"/]
	6 -. Codeptr .-> 3
	9 -. Stack .-> 3
	2 -. Trap Locals Globals Tables Memory Extra .-> 3
	2[/"Start"\\]
	9{{"Sϕ Stack "}}
	22 --> 9
	4 --> 9
	14 --> 9
	14["eff__548 push_u32"]
	12 --> 14
	0 -. Stack .-> 14
	0["index pop_u32"]
	2 -. Stack .-> 0
	12["extend U32_extend8_s"]
	7 --> 12
	7["val mach_readMemory32_u8"]
	19 --> 7
	0 --> 7
	32 --> 7
	32["offset__602 imm_readULEB32"]
	20 -. Codeptr .-> 32
	20{{"Sϕ Codeptr "}}
	15 --> 20
	44 --> 20
	5 --> 20
	5["flags imm_readU8"]
	2 -. Codeptr .-> 5
	44["memindex__556__611 imm_readULEB32"]
	5 -. Codeptr .-> 44
	15["cond__555 u8.!="]
	13 --> 15
	10 --> 15
	10["arg__558 0"]
	13["arg__557 u8.&"]
	5 --> 13
	11 --> 13
	11["arg__560 0x40u8"]
	19{"memindex ϕ"}
	15 --> 19
	44 --> 19
	46 --> 19
	46["memindex__562__612 0u"]
	4["eff__542 push_u32"]
	1 --> 4
	18 -. Stack .-> 4
	18["index pop_u64"]
	2 -. Stack .-> 18
	1["extend U32_extend8_s"]
	21 --> 1
	21["val mach_readMemory64_u8"]
	19 --> 21
	18 --> 21
	27 --> 21
	27["offset__598 imm_readULEB64"]
	20 -. Codeptr .-> 27
	22["cond__541 m_isMemory64"]
	19 --> 22
	6{{"Sϕ Codeptr "}}
	22 --> 6
	27 --> 6
	32 --> 6
</pre>`;
window.traces["I32_LOAD8_S"]["unlem_scheduler"] = ''
window.traces["I32_LOAD8_S"]["unlem_scheduler"] += `<pre class='graph'>graph TD
subgraph block_230["Block 230"]
	direction TB
	b230_3[\\"Finish"/]
end
phi_232 --> block_230
subgraph phi_232["Phi 232"]
	p232_9{{"Sϕ Stack "}}
	p232_6{{"Sϕ Codeptr "}}
end
block_233 --> phi_232
block_234 --> phi_232
subgraph block_233["Block 233"]
	direction TB
	b233_27["offset__598 imm_readULEB64"]
	b233_18["index pop_u64"]
	b233_21["val mach_readMemory64_u8"]
	b233_1["extend U32_extend8_s"]
	b233_4["eff__542 push_u32"]
	b233_27 --> b233_18
	b233_18 --> b233_21
	b233_21 --> b233_1
	b233_1 --> b233_4
end
branch_231 --> block_233
subgraph branch_231["Branch 231"]
	br231_22["cond__541 m_isMemory64"]

end
block_235 --> branch_231
subgraph block_235["Block 235"]
	direction TB
	b235_22["cond__541 m_isMemory64"]
end
phi_237 --> block_235
subgraph phi_237["Phi 237"]
	p237_20{{"Sϕ Codeptr "}}
	p237_20{{"Sϕ Codeptr "}}
	p237_20{{"Sϕ Codeptr "}}
	p237_20{{"Sϕ Codeptr "}}
	p237_19{"memindex ϕ"}
	p237_19{"memindex ϕ"}
	p237_19{"memindex ϕ"}
	p237_19{"memindex ϕ"}
end
block_238 --> phi_237
block_239 --> phi_237
subgraph block_238["Block 238"]
	direction TB
	b238_44["memindex__556__611 imm_readULEB32"]
end
branch_236 --> block_238
subgraph branch_236["Branch 236"]
	br236_15["cond__555 u8.!="]

end
block_240 --> branch_236
subgraph block_240["Block 240"]
	direction TB
	b240_11["arg__560 0x40u8"]
	b240_10["arg__558 0"]
	b240_13["arg__557 u8.&"]
	b240_15["cond__555 u8.!="]
	b240_11 --> b240_10
	b240_10 --> b240_13
	b240_13 --> b240_15
end
subgraph block_239["Block 239"]
	direction TB
	b239_46["memindex__562__612 0u"]
end
branch_236 --> block_239
subgraph block_234["Block 234"]
	direction TB
	b234_32["offset__602 imm_readULEB32"]
	b234_0["index pop_u32"]
	b234_7["val mach_readMemory32_u8"]
	b234_12["extend U32_extend8_s"]
	b234_14["eff__548 push_u32"]
	b234_32 --> b234_0
	b234_0 --> b234_7
	b234_7 --> b234_12
	b234_12 --> b234_14
end
branch_231 --> block_234

</pre>`;
window.traces["I32_LOAD8_S"]["unlem_scheduler_ssa"] = ''
window.traces["I32_LOAD8_S"]["unlem_scheduler_ssa"] += `<pre class=''>def arg__560 : byte = 0x40u8;
def arg__558 : byte = 0;
def arg__557 = u8.&(flags, arg__560);
def cond__555 = u8.!=(arg__557, arg__558);
if (cond__555) {
	def memindex__556__611 = imm_readULEB32();
} else {
	def memindex__562__612 : u32 = 0u;
}
// phis: memindex <- memindex__556__611; memindex <- memindex__562__612; memindex <- memindex__556__611; memindex <- memindex__562__612; memindex <- memindex__556__611; memindex <- memindex__562__612; memindex <- memindex__556__611; memindex <- memindex__562__612; 
def cond__541 = m_isMemory64(memindex);
if (cond__541) {
	def offset__598 = imm_readULEB64();
	def index = pop_u64();
	def val = mach_readMemory64_u8(memindex, index, offset__598);
	def extend = U32_extend8_s(val);
	def eff__542 = push_u32(extend);
} else {
	def offset__602 = imm_readULEB32();
	def index = pop_u32();
	def val = mach_readMemory32_u8(memindex, index, offset__602);
	def extend = U32_extend8_s(val);
	def eff__548 = push_u32(extend);
}
// phis: 
</pre>`;
window.traces["I32_LOAD8_S"]["unlem_scheduler_ssa"] += `<pre class=''>if (u8.!=(u8.&(flags, 0x40u8), 0)) {
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
	def offset1 = imm_readULEB32();
	def index = pop_u32();
	def val = mach_readMemory32_u8(memindex, index, offset1);
	def extend = U32_extend8_s(val);
	push_u32(extend);
}
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
	24["eff__548 push_u32"]
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
	10["memindex__556 imm_readULEB32"]
	3 -. Codeptr .-> 10
	9["cond__555 u8.!="]
	8 --> 9
	5 --> 9
	5["arg__558 0"]
	8["arg__557 u8.&"]
	3 --> 8
	6 --> 8
	6["arg__560 0x40u8"]
	11{"memindex ϕ"}
	9 --> 11
	10 --> 11
	4 --> 11
	4["memindex__562 0u"]
	34["eff__542 push_u32"]
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
	14["cond__541 m_isMemory64"]
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
	24["eff__548 push_u32"]
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
	10["memindex__556 imm_readULEB32"]
	3 -. Codeptr .-> 10
	9["cond__555 u8.!="]
	8 --> 9
	5 --> 9
	5["arg__558 0"]
	8["arg__557 u8.&"]
	3 --> 8
	6 --> 8
	6["arg__560 0x40u8"]
	11{"memindex ϕ"}
	9 --> 11
	10 --> 11
	4 --> 11
	4["memindex__562 0u"]
	34["eff__542 push_u32"]
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
	14["cond__541 m_isMemory64"]
	11 --> 14
	35{{"Sϕ Codeptr "}}
	14 --> 35
	25 --> 35
	15 --> 35
</pre>`;
window.traces["I32_LOAD8_S"]["scheduled"] = ''
window.traces["I32_LOAD8_S"]["scheduled"] += `<pre class=''>def flags = imm_readU8();
def arg__560 : byte = 0x40u8;
def arg__557 = u8.&(flags, arg__560);
def arg__558 : byte = 0;
def cond__555 = u8.!=(arg__557, arg__558);
var memindex: u32;
if (cond__555) {
	def memindex__556 = imm_readULEB32();
} else {
	def memindex__562 : u32 = 0u;
}
// phis: memindex <- memindex__556; memindex <- memindex__562; 
def cond__541 = m_isMemory64(memindex);
if (cond__541) {
	def offset = imm_readULEB64();
	def index = pop_u64();
	def val = mach_readMemory64_u8(memindex, index, offset);
	def extend = U32_extend8_s(val);
	def eff__542 = push_u32(extend);
} else {
	def offset = imm_readULEB32();
	def index = pop_u32();
	def val = mach_readMemory32_u8(memindex, index, offset);
	def extend = U32_extend8_s(val);
	def eff__548 = push_u32(extend);
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
def arg__642 : byte = 0;
def arg__644 : byte = 0x40u8;
def arg__643 = (flags);
def arg__641 = u8.&(arg__643, arg__644);
def cond__639 = u8.!=(arg__641, arg__642);
if (cond__639) {
	def memindex__640 = imm_readULEB32();
}
// phis: memindex <- memindex__640; 
def arg__638 = (memindex);
def cond__627 = m_isMemory64(arg__638);
if (cond__627) {
	def offset = imm_readULEB64();
	def index = pop_u64();
	def arg__632 = (offset);
	def arg__631 = (index);
	def arg__630 = (memindex);
	def val = mach_readMemory64_u8(arg__630, arg__631, arg__632);
	def arg__629 = (val);
	def eff__628 = push_u32(arg__629);
} else {
	def offset = imm_readULEB32();
	def index = pop_u32();
	def arg__637 = (offset);
	def arg__636 = (index);
	def arg__635 = (memindex);
	def val = mach_readMemory32_u8(arg__635, arg__636, arg__637);
	def arg__634 = (val);
	def eff__633 = push_u32(arg__634);
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
	22["eff__633 push_u32"]
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
	10["memindex__640 imm_readULEB32"]
	3 -. Codeptr .-> 10
	9["cond__639 u8.!="]
	8 --> 9
	5 --> 9
	5["arg__642 0"]
	8["arg__641 u8.&"]
	3 --> 8
	6 --> 8
	6["arg__644 0x40u8"]
	11{"memindex ϕ"}
	9 --> 11
	10 --> 11
	4 --> 11
	4["memindex__645 0u"]
	30["eff__628 push_u32"]
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
	14["cond__627 m_isMemory64"]
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
	22["eff__633 push_u32"]
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
	10["memindex__640 imm_readULEB32"]
	3 -. Codeptr .-> 10
	9["cond__639 u8.!="]
	8 --> 9
	5 --> 9
	5["arg__642 0"]
	8["arg__641 u8.&"]
	3 --> 8
	6 --> 8
	6["arg__644 0x40u8"]
	11{"memindex ϕ"}
	9 --> 11
	10 --> 11
	4 --> 11
	4["memindex__646 0u"]
	30["eff__628 push_u32"]
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
	14["cond__627 m_isMemory64"]
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
	22["eff__633 push_u32"]
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
	10["memindex__640 imm_readULEB32"]
	3 -. Codeptr .-> 10
	9["cond__639 u8.!="]
	8 --> 9
	5 --> 9
	5["arg__642 0"]
	8["arg__641 u8.&"]
	3 --> 8
	6 --> 8
	6["arg__644 0x40u8"]
	11{"memindex ϕ"}
	9 --> 11
	10 --> 11
	4 --> 11
	4["memindex__646 0u"]
	30["eff__628 push_u32"]
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
	14["cond__627 m_isMemory64"]
	11 --> 14
	31{{"Sϕ Codeptr "}}
	14 --> 31
	23 --> 31
	15 --> 31
</pre>`;
window.traces["I32_LOAD8_U"]["post_surgery 243"] = ''
window.traces["I32_LOAD8_U"]["post_surgery 243"] += `<pre class='graph'>---
config:
  layout: elk
---
graph TD
	3[\\"Finish"/]
	21 -. Codeptr .-> 3
	2 -. Stack .-> 3
	1 -. Trap Locals Globals Tables Memory Extra .-> 3
	1[/"Start"\\]
	2{{"Sϕ Stack "}}
	19 --> 2
	18 --> 2
	9 --> 2
	9["eff__633 push_u32"]
	6 --> 9
	0 -. Stack .-> 9
	0["index pop_u32"]
	1 -. Stack .-> 0
	6["val mach_readMemory32_u8"]
	15 --> 6
	0 --> 6
	28 --> 6
	28["offset__652 imm_readULEB32"]
	17 -. Codeptr .-> 28
	17{{"Sϕ Codeptr "}}
	13 --> 17
	14 --> 17
	4 --> 17
	4["flags imm_readU8"]
	1 -. Codeptr .-> 4
	14["memindex__640 imm_readULEB32"]
	4 -. Codeptr .-> 14
	13["cond__639 u8.!="]
	11 --> 13
	7 --> 13
	7["arg__642 0"]
	11["arg__641 u8.&"]
	4 --> 11
	8 --> 11
	8["arg__644 0x40u8"]
	15{"memindex ϕ"}
	13 --> 15
	14 --> 15
	5 --> 15
	5["memindex__646 0u"]
	18["eff__628 push_u32"]
	16 --> 18
	12 -. Stack .-> 18
	12["index pop_u64"]
	1 -. Stack .-> 12
	16["val mach_readMemory64_u8"]
	15 --> 16
	12 --> 16
	24 --> 16
	24["offset__649 imm_readULEB64"]
	17 -. Codeptr .-> 24
	19["cond__627 m_isMemory64"]
	15 --> 19
	21{{"Sϕ Codeptr "}}
	19 --> 21
	24 --> 21
	28 --> 21
</pre>`;
window.traces["I32_LOAD8_U"]["post_surgery 248"] = ''
window.traces["I32_LOAD8_U"]["post_surgery 248"] += `<pre class='graph'>---
config:
  layout: elk
---
graph TD
	3[\\"Finish"/]
	21 -. Codeptr .-> 3
	2 -. Stack .-> 3
	1 -. Trap Locals Globals Tables Memory Extra .-> 3
	1[/"Start"\\]
	2{{"Sϕ Stack "}}
	19 --> 2
	18 --> 2
	9 --> 2
	9["eff__633 push_u32"]
	6 --> 9
	0 -. Stack .-> 9
	0["index pop_u32"]
	1 -. Stack .-> 0
	6["val mach_readMemory32_u8"]
	15 --> 6
	0 --> 6
	28 --> 6
	28["offset__652 imm_readULEB32"]
	17 -. Codeptr .-> 28
	17{{"Sϕ Codeptr "}}
	13 --> 17
	39 --> 17
	4 --> 17
	4["flags imm_readU8"]
	1 -. Codeptr .-> 4
	39["memindex__640__659 imm_readULEB32"]
	4 -. Codeptr .-> 39
	13["cond__639 u8.!="]
	11 --> 13
	7 --> 13
	7["arg__642 0"]
	11["arg__641 u8.&"]
	4 --> 11
	8 --> 11
	8["arg__644 0x40u8"]
	15{"memindex ϕ"}
	13 --> 15
	39 --> 15
	41 --> 15
	41["memindex__646__660 0u"]
	18["eff__628 push_u32"]
	16 --> 18
	12 -. Stack .-> 18
	12["index pop_u64"]
	1 -. Stack .-> 12
	16["val mach_readMemory64_u8"]
	15 --> 16
	12 --> 16
	24 --> 16
	24["offset__649 imm_readULEB64"]
	17 -. Codeptr .-> 24
	19["cond__627 m_isMemory64"]
	15 --> 19
	21{{"Sϕ Codeptr "}}
	19 --> 21
	24 --> 21
	28 --> 21
</pre>`;
window.traces["I32_LOAD8_U"]["schedulerMermaid"] = ''
window.traces["I32_LOAD8_U"]["schedulerMermaid"] += `<pre class='graph'>graph TD
subgraph block_241["Block 241"]
	direction TB
	b241_3[\\"Finish"/]
end
phi_243 --> block_241
subgraph phi_243["Phi 243"]
	p243_2{{"Sϕ Stack "}}
	p243_21{{"Sϕ Codeptr "}}
end
block_244 --> phi_243
block_245 --> phi_243
subgraph block_244["Block 244"]
	direction TB
	b244_24["offset__649 imm_readULEB64"]
	b244_12["index pop_u64"]
	b244_16["val mach_readMemory64_u8"]
	b244_18["eff__628 push_u32"]
	b244_24 --> b244_12
	b244_12 --> b244_16
	b244_16 --> b244_18
end
branch_242 --> block_244
subgraph branch_242["Branch 242"]
	br242_19["cond__627 m_isMemory64"]

end
block_246 --> branch_242
subgraph block_246["Block 246"]
	direction TB
	b246_19["cond__627 m_isMemory64"]
end
phi_248 --> block_246
subgraph phi_248["Phi 248"]
	p248_17{{"Sϕ Codeptr "}}
	p248_17{{"Sϕ Codeptr "}}
	p248_17{{"Sϕ Codeptr "}}
	p248_17{{"Sϕ Codeptr "}}
	p248_15{"memindex ϕ"}
	p248_15{"memindex ϕ"}
	p248_15{"memindex ϕ"}
	p248_15{"memindex ϕ"}
end
block_249 --> phi_248
block_250 --> phi_248
subgraph block_249["Block 249"]
	direction TB
	b249_39["memindex__640__659 imm_readULEB32"]
end
branch_247 --> block_249
subgraph branch_247["Branch 247"]
	br247_13["cond__639 u8.!="]

end
block_251 --> branch_247
subgraph block_251["Block 251"]
	direction TB
	b251_8["arg__644 0x40u8"]
	b251_7["arg__642 0"]
	b251_11["arg__641 u8.&"]
	b251_13["cond__639 u8.!="]
	b251_8 --> b251_7
	b251_7 --> b251_11
	b251_11 --> b251_13
end
subgraph block_250["Block 250"]
	direction TB
	b250_41["memindex__646__660 0u"]
end
branch_247 --> block_250
subgraph block_245["Block 245"]
	direction TB
	b245_28["offset__652 imm_readULEB32"]
	b245_0["index pop_u32"]
	b245_6["val mach_readMemory32_u8"]
	b245_9["eff__633 push_u32"]
	b245_28 --> b245_0
	b245_0 --> b245_6
	b245_6 --> b245_9
end
branch_242 --> block_245

</pre>`;
window.traces["I32_LOAD8_U"]["scheduler_ssad"] = ''
window.traces["I32_LOAD8_U"]["scheduler_ssad"] += `<pre class=''>def arg__644 : byte = 0x40u8;
def arg__642 : byte = 0;
def arg__641 = u8.&(flags, arg__644);
def cond__639 = u8.!=(arg__641, arg__642);
if (cond__639) {
	def memindex__640__659 = imm_readULEB32();
} else {
	def memindex__646__660 : u32 = 0u;
}
// phis: memindex <- memindex__640__659; memindex <- memindex__646__660; memindex <- memindex__640__659; memindex <- memindex__646__660; memindex <- memindex__640__659; memindex <- memindex__646__660; memindex <- memindex__640__659; memindex <- memindex__646__660; 
def cond__627 = m_isMemory64(memindex);
if (cond__627) {
	def offset__649 = imm_readULEB64();
	def index = pop_u64();
	def val = mach_readMemory64_u8(memindex, index, offset__649);
	def eff__628 = push_u32(val);
} else {
	def offset__652 = imm_readULEB32();
	def index = pop_u32();
	def val = mach_readMemory32_u8(memindex, index, offset__652);
	def eff__633 = push_u32(val);
}
// phis: 
</pre>`;
window.traces["I32_LOAD8_U"]["scheduler_ssad_pretty"] = ''
window.traces["I32_LOAD8_U"]["scheduler_ssad_pretty"] += `<pre class=''>if (u8.!=(u8.&(flags, 0x40u8), 0)) {
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
	def offset1 = imm_readULEB32();
	def index = pop_u32();
	def val = mach_readMemory32_u8(memindex, index, offset1);
	push_u32(val);
}
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
	22["eff__633 push_u32"]
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
	10["memindex__640 imm_readULEB32"]
	3 -. Codeptr .-> 10
	9["cond__639 u8.!="]
	8 --> 9
	5 --> 9
	5["arg__642 0"]
	8["arg__641 u8.&"]
	3 --> 8
	6 --> 8
	6["arg__644 0x40u8"]
	11{"memindex ϕ"}
	9 --> 11
	10 --> 11
	4 --> 11
	4["memindex__646 0u"]
	30["eff__628 push_u32"]
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
	14["cond__627 m_isMemory64"]
	11 --> 14
	31{{"Sϕ Codeptr "}}
	14 --> 31
	23 --> 31
	15 --> 31
</pre>`;
window.traces["I32_LOAD8_U"]["unlem_schedule"] = ''
window.traces["I32_LOAD8_U"]["unlem_schedule"] += `<pre class=''>def flags = imm_readU8();
def arg__644 : byte = 0x40u8;
def arg__641 = u8.&(flags, arg__644);
def arg__642 : byte = 0;
def cond__639 = u8.!=(arg__641, arg__642);
var memindex: u32;
if (cond__639) {
	def memindex__640 = imm_readULEB32();
} else {
	def memindex__646 : u32 = 0u;
}
// phis: memindex <- memindex__640; memindex <- memindex__646; 
def cond__627 = m_isMemory64(memindex);
if (cond__627) {
	def offset = imm_readULEB64();
	def index = pop_u64();
	def val = mach_readMemory64_u8(memindex, index, offset);
	def eff__628 = push_u32(val);
} else {
	def offset = imm_readULEB32();
	def index = pop_u32();
	def val = mach_readMemory32_u8(memindex, index, offset);
	def eff__633 = push_u32(val);
}
// phis: 
</pre>`;
window.traces["I32_LOAD8_U_ul"] = {}
window.traces["I32_LOAD8_U_ul"]["post_surgery 254"] = ''
window.traces["I32_LOAD8_U_ul"]["post_surgery 254"] += `<pre class='graph'>---
config:
  layout: elk
---
graph TD
	3[\\"Finish"/]
	21 -. Codeptr .-> 3
	2 -. Stack .-> 3
	1 -. Trap Locals Globals Tables Memory Extra .-> 3
	1[/"Start"\\]
	2{{"Sϕ Stack "}}
	19 --> 2
	18 --> 2
	9 --> 2
	9["eff__633 push_u32"]
	6 --> 9
	0 -. Stack .-> 9
	0["index pop_u32"]
	1 -. Stack .-> 0
	6["val mach_readMemory32_u8"]
	15 --> 6
	0 --> 6
	28 --> 6
	28["offset__680 imm_readULEB32"]
	17 -. Codeptr .-> 28
	17{{"Sϕ Codeptr "}}
	13 --> 17
	14 --> 17
	4 --> 17
	4["flags imm_readU8"]
	1 -. Codeptr .-> 4
	14["memindex__640 imm_readULEB32"]
	4 -. Codeptr .-> 14
	13["cond__639 u8.!="]
	11 --> 13
	7 --> 13
	7["arg__642 0"]
	11["arg__641 u8.&"]
	4 --> 11
	8 --> 11
	8["arg__644 0x40u8"]
	15{"memindex ϕ"}
	13 --> 15
	14 --> 15
	5 --> 15
	5["memindex__646 0u"]
	18["eff__628 push_u32"]
	16 --> 18
	12 -. Stack .-> 18
	12["index pop_u64"]
	1 -. Stack .-> 12
	16["val mach_readMemory64_u8"]
	15 --> 16
	12 --> 16
	24 --> 16
	24["offset__677 imm_readULEB64"]
	17 -. Codeptr .-> 24
	19["cond__627 m_isMemory64"]
	15 --> 19
	21{{"Sϕ Codeptr "}}
	19 --> 21
	24 --> 21
	28 --> 21
</pre>`;
window.traces["I32_LOAD8_U_ul"]["post_surgery 259"] = ''
window.traces["I32_LOAD8_U_ul"]["post_surgery 259"] += `<pre class='graph'>---
config:
  layout: elk
---
graph TD
	3[\\"Finish"/]
	21 -. Codeptr .-> 3
	2 -. Stack .-> 3
	1 -. Trap Locals Globals Tables Memory Extra .-> 3
	1[/"Start"\\]
	2{{"Sϕ Stack "}}
	19 --> 2
	18 --> 2
	9 --> 2
	9["eff__633 push_u32"]
	6 --> 9
	0 -. Stack .-> 9
	0["index pop_u32"]
	1 -. Stack .-> 0
	6["val mach_readMemory32_u8"]
	15 --> 6
	0 --> 6
	28 --> 6
	28["offset__680 imm_readULEB32"]
	17 -. Codeptr .-> 28
	17{{"Sϕ Codeptr "}}
	13 --> 17
	39 --> 17
	4 --> 17
	4["flags imm_readU8"]
	1 -. Codeptr .-> 4
	39["memindex__640__687 imm_readULEB32"]
	4 -. Codeptr .-> 39
	13["cond__639 u8.!="]
	11 --> 13
	7 --> 13
	7["arg__642 0"]
	11["arg__641 u8.&"]
	4 --> 11
	8 --> 11
	8["arg__644 0x40u8"]
	15{"memindex ϕ"}
	13 --> 15
	39 --> 15
	41 --> 15
	41["memindex__646__688 0u"]
	18["eff__628 push_u32"]
	16 --> 18
	12 -. Stack .-> 18
	12["index pop_u64"]
	1 -. Stack .-> 12
	16["val mach_readMemory64_u8"]
	15 --> 16
	12 --> 16
	24 --> 16
	24["offset__677 imm_readULEB64"]
	17 -. Codeptr .-> 24
	19["cond__627 m_isMemory64"]
	15 --> 19
	21{{"Sϕ Codeptr "}}
	19 --> 21
	24 --> 21
	28 --> 21
</pre>`;
window.traces["I32_LOAD8_U"]["unlem_scheduler"] = ''
window.traces["I32_LOAD8_U"]["unlem_scheduler"] += `<pre class='graph'>graph TD
subgraph block_252["Block 252"]
	direction TB
	b252_3[\\"Finish"/]
end
phi_254 --> block_252
subgraph phi_254["Phi 254"]
	p254_2{{"Sϕ Stack "}}
	p254_21{{"Sϕ Codeptr "}}
end
block_255 --> phi_254
block_256 --> phi_254
subgraph block_255["Block 255"]
	direction TB
	b255_24["offset__677 imm_readULEB64"]
	b255_12["index pop_u64"]
	b255_16["val mach_readMemory64_u8"]
	b255_18["eff__628 push_u32"]
	b255_24 --> b255_12
	b255_12 --> b255_16
	b255_16 --> b255_18
end
branch_253 --> block_255
subgraph branch_253["Branch 253"]
	br253_19["cond__627 m_isMemory64"]

end
block_257 --> branch_253
subgraph block_257["Block 257"]
	direction TB
	b257_19["cond__627 m_isMemory64"]
end
phi_259 --> block_257
subgraph phi_259["Phi 259"]
	p259_17{{"Sϕ Codeptr "}}
	p259_17{{"Sϕ Codeptr "}}
	p259_17{{"Sϕ Codeptr "}}
	p259_17{{"Sϕ Codeptr "}}
	p259_15{"memindex ϕ"}
	p259_15{"memindex ϕ"}
	p259_15{"memindex ϕ"}
	p259_15{"memindex ϕ"}
end
block_260 --> phi_259
block_261 --> phi_259
subgraph block_260["Block 260"]
	direction TB
	b260_39["memindex__640__687 imm_readULEB32"]
end
branch_258 --> block_260
subgraph branch_258["Branch 258"]
	br258_13["cond__639 u8.!="]

end
block_262 --> branch_258
subgraph block_262["Block 262"]
	direction TB
	b262_8["arg__644 0x40u8"]
	b262_7["arg__642 0"]
	b262_11["arg__641 u8.&"]
	b262_13["cond__639 u8.!="]
	b262_8 --> b262_7
	b262_7 --> b262_11
	b262_11 --> b262_13
end
subgraph block_261["Block 261"]
	direction TB
	b261_41["memindex__646__688 0u"]
end
branch_258 --> block_261
subgraph block_256["Block 256"]
	direction TB
	b256_28["offset__680 imm_readULEB32"]
	b256_0["index pop_u32"]
	b256_6["val mach_readMemory32_u8"]
	b256_9["eff__633 push_u32"]
	b256_28 --> b256_0
	b256_0 --> b256_6
	b256_6 --> b256_9
end
branch_253 --> block_256

</pre>`;
window.traces["I32_LOAD8_U"]["unlem_scheduler_ssa"] = ''
window.traces["I32_LOAD8_U"]["unlem_scheduler_ssa"] += `<pre class=''>def arg__644 : byte = 0x40u8;
def arg__642 : byte = 0;
def arg__641 = u8.&(flags, arg__644);
def cond__639 = u8.!=(arg__641, arg__642);
if (cond__639) {
	def memindex__640__687 = imm_readULEB32();
} else {
	def memindex__646__688 : u32 = 0u;
}
// phis: memindex <- memindex__640__687; memindex <- memindex__646__688; memindex <- memindex__640__687; memindex <- memindex__646__688; memindex <- memindex__640__687; memindex <- memindex__646__688; memindex <- memindex__640__687; memindex <- memindex__646__688; 
def cond__627 = m_isMemory64(memindex);
if (cond__627) {
	def offset__677 = imm_readULEB64();
	def index = pop_u64();
	def val = mach_readMemory64_u8(memindex, index, offset__677);
	def eff__628 = push_u32(val);
} else {
	def offset__680 = imm_readULEB32();
	def index = pop_u32();
	def val = mach_readMemory32_u8(memindex, index, offset__680);
	def eff__633 = push_u32(val);
}
// phis: 
</pre>`;
window.traces["I32_LOAD8_U"]["unlem_scheduler_ssa"] += `<pre class=''>if (u8.!=(u8.&(flags, 0x40u8), 0)) {
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
	def offset1 = imm_readULEB32();
	def index = pop_u32();
	def val = mach_readMemory32_u8(memindex, index, offset1);
	push_u32(val);
}
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
	22["eff__633 push_u32"]
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
	10["memindex__640 imm_readULEB32"]
	3 -. Codeptr .-> 10
	9["cond__639 u8.!="]
	8 --> 9
	5 --> 9
	5["arg__642 0"]
	8["arg__641 u8.&"]
	3 --> 8
	6 --> 8
	6["arg__644 0x40u8"]
	11{"memindex ϕ"}
	9 --> 11
	10 --> 11
	4 --> 11
	4["memindex__646 0u"]
	30["eff__628 push_u32"]
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
	14["cond__627 m_isMemory64"]
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
	22["eff__633 push_u32"]
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
	10["memindex__640 imm_readULEB32"]
	3 -. Codeptr .-> 10
	9["cond__639 u8.!="]
	8 --> 9
	5 --> 9
	5["arg__642 0"]
	8["arg__641 u8.&"]
	3 --> 8
	6 --> 8
	6["arg__644 0x40u8"]
	11{"memindex ϕ"}
	9 --> 11
	10 --> 11
	4 --> 11
	4["memindex__646 0u"]
	30["eff__628 push_u32"]
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
	14["cond__627 m_isMemory64"]
	11 --> 14
	31{{"Sϕ Codeptr "}}
	14 --> 31
	23 --> 31
	15 --> 31
</pre>`;
window.traces["I32_LOAD8_U"]["scheduled"] = ''
window.traces["I32_LOAD8_U"]["scheduled"] += `<pre class=''>def flags = imm_readU8();
def arg__644 : byte = 0x40u8;
def arg__641 = u8.&(flags, arg__644);
def arg__642 : byte = 0;
def cond__639 = u8.!=(arg__641, arg__642);
var memindex: u32;
if (cond__639) {
	def memindex__640 = imm_readULEB32();
} else {
	def memindex__646 : u32 = 0u;
}
// phis: memindex <- memindex__640; memindex <- memindex__646; 
def cond__627 = m_isMemory64(memindex);
if (cond__627) {
	def offset = imm_readULEB64();
	def index = pop_u64();
	def val = mach_readMemory64_u8(memindex, index, offset);
	def eff__628 = push_u32(val);
} else {
	def offset = imm_readULEB32();
	def index = pop_u32();
	def val = mach_readMemory32_u8(memindex, index, offset);
	def eff__633 = push_u32(val);
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
def arg__720 : byte = 0;
def arg__722 : byte = 0x40u8;
def arg__721 = (flags);
def arg__719 = u8.&(arg__721, arg__722);
def cond__717 = u8.!=(arg__719, arg__720);
if (cond__717) {
	def memindex__718 = imm_readULEB32();
}
// phis: memindex <- memindex__718; 
def arg__716 = (memindex);
def cond__703 = m_isMemory64(arg__716);
if (cond__703) {
	def offset = imm_readULEB64();
	def index = pop_u64();
	def arg__709 = (offset);
	def arg__708 = (index);
	def arg__707 = (memindex);
	def val = mach_readMemory64_u16(arg__707, arg__708, arg__709);
	def arg__706 = (val);
	def extend = U32_extend16_s(arg__706);
	def arg__705 = (extend);
	def eff__704 = push_u32(arg__705);
} else {
	def offset = imm_readULEB32();
	def index = pop_u32();
	def arg__715 = (offset);
	def arg__714 = (index);
	def arg__713 = (memindex);
	def val = mach_readMemory32_u16(arg__713, arg__714, arg__715);
	def arg__712 = (val);
	def extend = U32_extend16_s(arg__712);
	def arg__711 = (extend);
	def eff__710 = push_u32(arg__711);
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
	24["eff__710 push_u32"]
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
	10["memindex__718 imm_readULEB32"]
	3 -. Codeptr .-> 10
	9["cond__717 u8.!="]
	8 --> 9
	5 --> 9
	5["arg__720 0"]
	8["arg__719 u8.&"]
	3 --> 8
	6 --> 8
	6["arg__722 0x40u8"]
	11{"memindex ϕ"}
	9 --> 11
	10 --> 11
	4 --> 11
	4["memindex__723 0u"]
	34["eff__704 push_u32"]
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
	14["cond__703 m_isMemory64"]
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
	24["eff__710 push_u32"]
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
	10["memindex__718 imm_readULEB32"]
	3 -. Codeptr .-> 10
	9["cond__717 u8.!="]
	8 --> 9
	5 --> 9
	5["arg__720 0"]
	8["arg__719 u8.&"]
	3 --> 8
	6 --> 8
	6["arg__722 0x40u8"]
	11{"memindex ϕ"}
	9 --> 11
	10 --> 11
	4 --> 11
	4["memindex__724 0u"]
	34["eff__704 push_u32"]
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
	14["cond__703 m_isMemory64"]
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
	24["eff__710 push_u32"]
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
	10["memindex__718 imm_readULEB32"]
	3 -. Codeptr .-> 10
	9["cond__717 u8.!="]
	8 --> 9
	5 --> 9
	5["arg__720 0"]
	8["arg__719 u8.&"]
	3 --> 8
	6 --> 8
	6["arg__722 0x40u8"]
	11{"memindex ϕ"}
	9 --> 11
	10 --> 11
	4 --> 11
	4["memindex__724 0u"]
	34["eff__704 push_u32"]
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
	14["cond__703 m_isMemory64"]
	11 --> 14
	35{{"Sϕ Codeptr "}}
	14 --> 35
	25 --> 35
	15 --> 35
</pre>`;
window.traces["I32_LOAD16_S"]["post_surgery 265"] = ''
window.traces["I32_LOAD16_S"]["post_surgery 265"] += `<pre class='graph'>---
config:
  layout: elk
---
graph TD
	3[\\"Finish"/]
	6 -. Codeptr .-> 3
	9 -. Stack .-> 3
	2 -. Trap Locals Globals Tables Memory Extra .-> 3
	2[/"Start"\\]
	9{{"Sϕ Stack "}}
	22 --> 9
	4 --> 9
	14 --> 9
	14["eff__710 push_u32"]
	12 --> 14
	0 -. Stack .-> 14
	0["index pop_u32"]
	2 -. Stack .-> 0
	12["extend U32_extend16_s"]
	7 --> 12
	7["val mach_readMemory32_u16"]
	19 --> 7
	0 --> 7
	32 --> 7
	32["offset__732 imm_readULEB32"]
	20 -. Codeptr .-> 32
	20{{"Sϕ Codeptr "}}
	15 --> 20
	17 --> 20
	5 --> 20
	5["flags imm_readU8"]
	2 -. Codeptr .-> 5
	17["memindex__718 imm_readULEB32"]
	5 -. Codeptr .-> 17
	15["cond__717 u8.!="]
	13 --> 15
	10 --> 15
	10["arg__720 0"]
	13["arg__719 u8.&"]
	5 --> 13
	11 --> 13
	11["arg__722 0x40u8"]
	19{"memindex ϕ"}
	15 --> 19
	17 --> 19
	8 --> 19
	8["memindex__724 0u"]
	4["eff__704 push_u32"]
	1 --> 4
	18 -. Stack .-> 4
	18["index pop_u64"]
	2 -. Stack .-> 18
	1["extend U32_extend16_s"]
	21 --> 1
	21["val mach_readMemory64_u16"]
	19 --> 21
	18 --> 21
	27 --> 21
	27["offset__728 imm_readULEB64"]
	20 -. Codeptr .-> 27
	22["cond__703 m_isMemory64"]
	19 --> 22
	6{{"Sϕ Codeptr "}}
	22 --> 6
	27 --> 6
	32 --> 6
</pre>`;
window.traces["I32_LOAD16_S"]["post_surgery 270"] = ''
window.traces["I32_LOAD16_S"]["post_surgery 270"] += `<pre class='graph'>---
config:
  layout: elk
---
graph TD
	3[\\"Finish"/]
	6 -. Codeptr .-> 3
	9 -. Stack .-> 3
	2 -. Trap Locals Globals Tables Memory Extra .-> 3
	2[/"Start"\\]
	9{{"Sϕ Stack "}}
	22 --> 9
	4 --> 9
	14 --> 9
	14["eff__710 push_u32"]
	12 --> 14
	0 -. Stack .-> 14
	0["index pop_u32"]
	2 -. Stack .-> 0
	12["extend U32_extend16_s"]
	7 --> 12
	7["val mach_readMemory32_u16"]
	19 --> 7
	0 --> 7
	32 --> 7
	32["offset__732 imm_readULEB32"]
	20 -. Codeptr .-> 32
	20{{"Sϕ Codeptr "}}
	15 --> 20
	44 --> 20
	5 --> 20
	5["flags imm_readU8"]
	2 -. Codeptr .-> 5
	44["memindex__718__741 imm_readULEB32"]
	5 -. Codeptr .-> 44
	15["cond__717 u8.!="]
	13 --> 15
	10 --> 15
	10["arg__720 0"]
	13["arg__719 u8.&"]
	5 --> 13
	11 --> 13
	11["arg__722 0x40u8"]
	19{"memindex ϕ"}
	15 --> 19
	44 --> 19
	46 --> 19
	46["memindex__724__742 0u"]
	4["eff__704 push_u32"]
	1 --> 4
	18 -. Stack .-> 4
	18["index pop_u64"]
	2 -. Stack .-> 18
	1["extend U32_extend16_s"]
	21 --> 1
	21["val mach_readMemory64_u16"]
	19 --> 21
	18 --> 21
	27 --> 21
	27["offset__728 imm_readULEB64"]
	20 -. Codeptr .-> 27
	22["cond__703 m_isMemory64"]
	19 --> 22
	6{{"Sϕ Codeptr "}}
	22 --> 6
	27 --> 6
	32 --> 6
</pre>`;
window.traces["I32_LOAD16_S"]["schedulerMermaid"] = ''
window.traces["I32_LOAD16_S"]["schedulerMermaid"] += `<pre class='graph'>graph TD
subgraph block_263["Block 263"]
	direction TB
	b263_3[\\"Finish"/]
end
phi_265 --> block_263
subgraph phi_265["Phi 265"]
	p265_9{{"Sϕ Stack "}}
	p265_6{{"Sϕ Codeptr "}}
end
block_266 --> phi_265
block_267 --> phi_265
subgraph block_266["Block 266"]
	direction TB
	b266_27["offset__728 imm_readULEB64"]
	b266_18["index pop_u64"]
	b266_21["val mach_readMemory64_u16"]
	b266_1["extend U32_extend16_s"]
	b266_4["eff__704 push_u32"]
	b266_27 --> b266_18
	b266_18 --> b266_21
	b266_21 --> b266_1
	b266_1 --> b266_4
end
branch_264 --> block_266
subgraph branch_264["Branch 264"]
	br264_22["cond__703 m_isMemory64"]

end
block_268 --> branch_264
subgraph block_268["Block 268"]
	direction TB
	b268_22["cond__703 m_isMemory64"]
end
phi_270 --> block_268
subgraph phi_270["Phi 270"]
	p270_20{{"Sϕ Codeptr "}}
	p270_20{{"Sϕ Codeptr "}}
	p270_20{{"Sϕ Codeptr "}}
	p270_20{{"Sϕ Codeptr "}}
	p270_19{"memindex ϕ"}
	p270_19{"memindex ϕ"}
	p270_19{"memindex ϕ"}
	p270_19{"memindex ϕ"}
end
block_271 --> phi_270
block_272 --> phi_270
subgraph block_271["Block 271"]
	direction TB
	b271_44["memindex__718__741 imm_readULEB32"]
end
branch_269 --> block_271
subgraph branch_269["Branch 269"]
	br269_15["cond__717 u8.!="]

end
block_273 --> branch_269
subgraph block_273["Block 273"]
	direction TB
	b273_11["arg__722 0x40u8"]
	b273_10["arg__720 0"]
	b273_13["arg__719 u8.&"]
	b273_15["cond__717 u8.!="]
	b273_11 --> b273_10
	b273_10 --> b273_13
	b273_13 --> b273_15
end
subgraph block_272["Block 272"]
	direction TB
	b272_46["memindex__724__742 0u"]
end
branch_269 --> block_272
subgraph block_267["Block 267"]
	direction TB
	b267_32["offset__732 imm_readULEB32"]
	b267_0["index pop_u32"]
	b267_7["val mach_readMemory32_u16"]
	b267_12["extend U32_extend16_s"]
	b267_14["eff__710 push_u32"]
	b267_32 --> b267_0
	b267_0 --> b267_7
	b267_7 --> b267_12
	b267_12 --> b267_14
end
branch_264 --> block_267

</pre>`;
window.traces["I32_LOAD16_S"]["scheduler_ssad"] = ''
window.traces["I32_LOAD16_S"]["scheduler_ssad"] += `<pre class=''>def arg__722 : byte = 0x40u8;
def arg__720 : byte = 0;
def arg__719 = u8.&(flags, arg__722);
def cond__717 = u8.!=(arg__719, arg__720);
if (cond__717) {
	def memindex__718__741 = imm_readULEB32();
} else {
	def memindex__724__742 : u32 = 0u;
}
// phis: memindex <- memindex__718__741; memindex <- memindex__724__742; memindex <- memindex__718__741; memindex <- memindex__724__742; memindex <- memindex__718__741; memindex <- memindex__724__742; memindex <- memindex__718__741; memindex <- memindex__724__742; 
def cond__703 = m_isMemory64(memindex);
if (cond__703) {
	def offset__728 = imm_readULEB64();
	def index = pop_u64();
	def val = mach_readMemory64_u16(memindex, index, offset__728);
	def extend = U32_extend16_s(val);
	def eff__704 = push_u32(extend);
} else {
	def offset__732 = imm_readULEB32();
	def index = pop_u32();
	def val = mach_readMemory32_u16(memindex, index, offset__732);
	def extend = U32_extend16_s(val);
	def eff__710 = push_u32(extend);
}
// phis: 
</pre>`;
window.traces["I32_LOAD16_S"]["scheduler_ssad_pretty"] = ''
window.traces["I32_LOAD16_S"]["scheduler_ssad_pretty"] += `<pre class=''>if (u8.!=(u8.&(flags, 0x40u8), 0)) {
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
	def offset1 = imm_readULEB32();
	def index = pop_u32();
	def val = mach_readMemory32_u16(memindex, index, offset1);
	def extend = U32_extend16_s(val);
	push_u32(extend);
}
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
	24["eff__710 push_u32"]
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
	10["memindex__718 imm_readULEB32"]
	3 -. Codeptr .-> 10
	9["cond__717 u8.!="]
	8 --> 9
	5 --> 9
	5["arg__720 0"]
	8["arg__719 u8.&"]
	3 --> 8
	6 --> 8
	6["arg__722 0x40u8"]
	11{"memindex ϕ"}
	9 --> 11
	10 --> 11
	4 --> 11
	4["memindex__724 0u"]
	34["eff__704 push_u32"]
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
	14["cond__703 m_isMemory64"]
	11 --> 14
	35{{"Sϕ Codeptr "}}
	14 --> 35
	25 --> 35
	15 --> 35
</pre>`;
window.traces["I32_LOAD16_S"]["unlem_schedule"] = ''
window.traces["I32_LOAD16_S"]["unlem_schedule"] += `<pre class=''>def flags = imm_readU8();
def arg__722 : byte = 0x40u8;
def arg__719 = u8.&(flags, arg__722);
def arg__720 : byte = 0;
def cond__717 = u8.!=(arg__719, arg__720);
var memindex: u32;
if (cond__717) {
	def memindex__718 = imm_readULEB32();
} else {
	def memindex__724 : u32 = 0u;
}
// phis: memindex <- memindex__718; memindex <- memindex__724; 
def cond__703 = m_isMemory64(memindex);
if (cond__703) {
	def offset = imm_readULEB64();
	def index = pop_u64();
	def val = mach_readMemory64_u16(memindex, index, offset);
	def extend = U32_extend16_s(val);
	def eff__704 = push_u32(extend);
} else {
	def offset = imm_readULEB32();
	def index = pop_u32();
	def val = mach_readMemory32_u16(memindex, index, offset);
	def extend = U32_extend16_s(val);
	def eff__710 = push_u32(extend);
}
// phis: 
</pre>`;
window.traces["I32_LOAD16_S_ul"] = {}
window.traces["I32_LOAD16_S_ul"]["post_surgery 276"] = ''
window.traces["I32_LOAD16_S_ul"]["post_surgery 276"] += `<pre class='graph'>---
config:
  layout: elk
---
graph TD
	3[\\"Finish"/]
	6 -. Codeptr .-> 3
	9 -. Stack .-> 3
	2 -. Trap Locals Globals Tables Memory Extra .-> 3
	2[/"Start"\\]
	9{{"Sϕ Stack "}}
	22 --> 9
	4 --> 9
	14 --> 9
	14["eff__710 push_u32"]
	12 --> 14
	0 -. Stack .-> 14
	0["index pop_u32"]
	2 -. Stack .-> 0
	12["extend U32_extend16_s"]
	7 --> 12
	7["val mach_readMemory32_u16"]
	19 --> 7
	0 --> 7
	32 --> 7
	32["offset__764 imm_readULEB32"]
	20 -. Codeptr .-> 32
	20{{"Sϕ Codeptr "}}
	15 --> 20
	17 --> 20
	5 --> 20
	5["flags imm_readU8"]
	2 -. Codeptr .-> 5
	17["memindex__718 imm_readULEB32"]
	5 -. Codeptr .-> 17
	15["cond__717 u8.!="]
	13 --> 15
	10 --> 15
	10["arg__720 0"]
	13["arg__719 u8.&"]
	5 --> 13
	11 --> 13
	11["arg__722 0x40u8"]
	19{"memindex ϕ"}
	15 --> 19
	17 --> 19
	8 --> 19
	8["memindex__724 0u"]
	4["eff__704 push_u32"]
	1 --> 4
	18 -. Stack .-> 4
	18["index pop_u64"]
	2 -. Stack .-> 18
	1["extend U32_extend16_s"]
	21 --> 1
	21["val mach_readMemory64_u16"]
	19 --> 21
	18 --> 21
	27 --> 21
	27["offset__760 imm_readULEB64"]
	20 -. Codeptr .-> 27
	22["cond__703 m_isMemory64"]
	19 --> 22
	6{{"Sϕ Codeptr "}}
	22 --> 6
	27 --> 6
	32 --> 6
</pre>`;
window.traces["I32_LOAD16_S_ul"]["post_surgery 281"] = ''
window.traces["I32_LOAD16_S_ul"]["post_surgery 281"] += `<pre class='graph'>---
config:
  layout: elk
---
graph TD
	3[\\"Finish"/]
	6 -. Codeptr .-> 3
	9 -. Stack .-> 3
	2 -. Trap Locals Globals Tables Memory Extra .-> 3
	2[/"Start"\\]
	9{{"Sϕ Stack "}}
	22 --> 9
	4 --> 9
	14 --> 9
	14["eff__710 push_u32"]
	12 --> 14
	0 -. Stack .-> 14
	0["index pop_u32"]
	2 -. Stack .-> 0
	12["extend U32_extend16_s"]
	7 --> 12
	7["val mach_readMemory32_u16"]
	19 --> 7
	0 --> 7
	32 --> 7
	32["offset__764 imm_readULEB32"]
	20 -. Codeptr .-> 32
	20{{"Sϕ Codeptr "}}
	15 --> 20
	44 --> 20
	5 --> 20
	5["flags imm_readU8"]
	2 -. Codeptr .-> 5
	44["memindex__718__773 imm_readULEB32"]
	5 -. Codeptr .-> 44
	15["cond__717 u8.!="]
	13 --> 15
	10 --> 15
	10["arg__720 0"]
	13["arg__719 u8.&"]
	5 --> 13
	11 --> 13
	11["arg__722 0x40u8"]
	19{"memindex ϕ"}
	15 --> 19
	44 --> 19
	46 --> 19
	46["memindex__724__774 0u"]
	4["eff__704 push_u32"]
	1 --> 4
	18 -. Stack .-> 4
	18["index pop_u64"]
	2 -. Stack .-> 18
	1["extend U32_extend16_s"]
	21 --> 1
	21["val mach_readMemory64_u16"]
	19 --> 21
	18 --> 21
	27 --> 21
	27["offset__760 imm_readULEB64"]
	20 -. Codeptr .-> 27
	22["cond__703 m_isMemory64"]
	19 --> 22
	6{{"Sϕ Codeptr "}}
	22 --> 6
	27 --> 6
	32 --> 6
</pre>`;
window.traces["I32_LOAD16_S"]["unlem_scheduler"] = ''
window.traces["I32_LOAD16_S"]["unlem_scheduler"] += `<pre class='graph'>graph TD
subgraph block_274["Block 274"]
	direction TB
	b274_3[\\"Finish"/]
end
phi_276 --> block_274
subgraph phi_276["Phi 276"]
	p276_9{{"Sϕ Stack "}}
	p276_6{{"Sϕ Codeptr "}}
end
block_277 --> phi_276
block_278 --> phi_276
subgraph block_277["Block 277"]
	direction TB
	b277_27["offset__760 imm_readULEB64"]
	b277_18["index pop_u64"]
	b277_21["val mach_readMemory64_u16"]
	b277_1["extend U32_extend16_s"]
	b277_4["eff__704 push_u32"]
	b277_27 --> b277_18
	b277_18 --> b277_21
	b277_21 --> b277_1
	b277_1 --> b277_4
end
branch_275 --> block_277
subgraph branch_275["Branch 275"]
	br275_22["cond__703 m_isMemory64"]

end
block_279 --> branch_275
subgraph block_279["Block 279"]
	direction TB
	b279_22["cond__703 m_isMemory64"]
end
phi_281 --> block_279
subgraph phi_281["Phi 281"]
	p281_20{{"Sϕ Codeptr "}}
	p281_20{{"Sϕ Codeptr "}}
	p281_20{{"Sϕ Codeptr "}}
	p281_20{{"Sϕ Codeptr "}}
	p281_19{"memindex ϕ"}
	p281_19{"memindex ϕ"}
	p281_19{"memindex ϕ"}
	p281_19{"memindex ϕ"}
end
block_282 --> phi_281
block_283 --> phi_281
subgraph block_282["Block 282"]
	direction TB
	b282_44["memindex__718__773 imm_readULEB32"]
end
branch_280 --> block_282
subgraph branch_280["Branch 280"]
	br280_15["cond__717 u8.!="]

end
block_284 --> branch_280
subgraph block_284["Block 284"]
	direction TB
	b284_11["arg__722 0x40u8"]
	b284_10["arg__720 0"]
	b284_13["arg__719 u8.&"]
	b284_15["cond__717 u8.!="]
	b284_11 --> b284_10
	b284_10 --> b284_13
	b284_13 --> b284_15
end
subgraph block_283["Block 283"]
	direction TB
	b283_46["memindex__724__774 0u"]
end
branch_280 --> block_283
subgraph block_278["Block 278"]
	direction TB
	b278_32["offset__764 imm_readULEB32"]
	b278_0["index pop_u32"]
	b278_7["val mach_readMemory32_u16"]
	b278_12["extend U32_extend16_s"]
	b278_14["eff__710 push_u32"]
	b278_32 --> b278_0
	b278_0 --> b278_7
	b278_7 --> b278_12
	b278_12 --> b278_14
end
branch_275 --> block_278

</pre>`;
window.traces["I32_LOAD16_S"]["unlem_scheduler_ssa"] = ''
window.traces["I32_LOAD16_S"]["unlem_scheduler_ssa"] += `<pre class=''>def arg__722 : byte = 0x40u8;
def arg__720 : byte = 0;
def arg__719 = u8.&(flags, arg__722);
def cond__717 = u8.!=(arg__719, arg__720);
if (cond__717) {
	def memindex__718__773 = imm_readULEB32();
} else {
	def memindex__724__774 : u32 = 0u;
}
// phis: memindex <- memindex__718__773; memindex <- memindex__724__774; memindex <- memindex__718__773; memindex <- memindex__724__774; memindex <- memindex__718__773; memindex <- memindex__724__774; memindex <- memindex__718__773; memindex <- memindex__724__774; 
def cond__703 = m_isMemory64(memindex);
if (cond__703) {
	def offset__760 = imm_readULEB64();
	def index = pop_u64();
	def val = mach_readMemory64_u16(memindex, index, offset__760);
	def extend = U32_extend16_s(val);
	def eff__704 = push_u32(extend);
} else {
	def offset__764 = imm_readULEB32();
	def index = pop_u32();
	def val = mach_readMemory32_u16(memindex, index, offset__764);
	def extend = U32_extend16_s(val);
	def eff__710 = push_u32(extend);
}
// phis: 
</pre>`;
window.traces["I32_LOAD16_S"]["unlem_scheduler_ssa"] += `<pre class=''>if (u8.!=(u8.&(flags, 0x40u8), 0)) {
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
	def offset1 = imm_readULEB32();
	def index = pop_u32();
	def val = mach_readMemory32_u16(memindex, index, offset1);
	def extend = U32_extend16_s(val);
	push_u32(extend);
}
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
	24["eff__710 push_u32"]
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
	10["memindex__718 imm_readULEB32"]
	3 -. Codeptr .-> 10
	9["cond__717 u8.!="]
	8 --> 9
	5 --> 9
	5["arg__720 0"]
	8["arg__719 u8.&"]
	3 --> 8
	6 --> 8
	6["arg__722 0x40u8"]
	11{"memindex ϕ"}
	9 --> 11
	10 --> 11
	4 --> 11
	4["memindex__724 0u"]
	34["eff__704 push_u32"]
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
	14["cond__703 m_isMemory64"]
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
	24["eff__710 push_u32"]
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
	10["memindex__718 imm_readULEB32"]
	3 -. Codeptr .-> 10
	9["cond__717 u8.!="]
	8 --> 9
	5 --> 9
	5["arg__720 0"]
	8["arg__719 u8.&"]
	3 --> 8
	6 --> 8
	6["arg__722 0x40u8"]
	11{"memindex ϕ"}
	9 --> 11
	10 --> 11
	4 --> 11
	4["memindex__724 0u"]
	34["eff__704 push_u32"]
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
	14["cond__703 m_isMemory64"]
	11 --> 14
	35{{"Sϕ Codeptr "}}
	14 --> 35
	25 --> 35
	15 --> 35
</pre>`;
window.traces["I32_LOAD16_S"]["scheduled"] = ''
window.traces["I32_LOAD16_S"]["scheduled"] += `<pre class=''>def flags = imm_readU8();
def arg__722 : byte = 0x40u8;
def arg__719 = u8.&(flags, arg__722);
def arg__720 : byte = 0;
def cond__717 = u8.!=(arg__719, arg__720);
var memindex: u32;
if (cond__717) {
	def memindex__718 = imm_readULEB32();
} else {
	def memindex__724 : u32 = 0u;
}
// phis: memindex <- memindex__718; memindex <- memindex__724; 
def cond__703 = m_isMemory64(memindex);
if (cond__703) {
	def offset = imm_readULEB64();
	def index = pop_u64();
	def val = mach_readMemory64_u16(memindex, index, offset);
	def extend = U32_extend16_s(val);
	def eff__704 = push_u32(extend);
} else {
	def offset = imm_readULEB32();
	def index = pop_u32();
	def val = mach_readMemory32_u16(memindex, index, offset);
	def extend = U32_extend16_s(val);
	def eff__710 = push_u32(extend);
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
def arg__804 : byte = 0;
def arg__806 : byte = 0x40u8;
def arg__805 = (flags);
def arg__803 = u8.&(arg__805, arg__806);
def cond__801 = u8.!=(arg__803, arg__804);
if (cond__801) {
	def memindex__802 = imm_readULEB32();
}
// phis: memindex <- memindex__802; 
def arg__800 = (memindex);
def cond__789 = m_isMemory64(arg__800);
if (cond__789) {
	def offset = imm_readULEB64();
	def index = pop_u64();
	def arg__794 = (offset);
	def arg__793 = (index);
	def arg__792 = (memindex);
	def val = mach_readMemory64_u16(arg__792, arg__793, arg__794);
	def arg__791 = (val);
	def eff__790 = push_u32(arg__791);
} else {
	def offset = imm_readULEB32();
	def index = pop_u32();
	def arg__799 = (offset);
	def arg__798 = (index);
	def arg__797 = (memindex);
	def val = mach_readMemory32_u16(arg__797, arg__798, arg__799);
	def arg__796 = (val);
	def eff__795 = push_u32(arg__796);
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
	22["eff__795 push_u32"]
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
	10["memindex__802 imm_readULEB32"]
	3 -. Codeptr .-> 10
	9["cond__801 u8.!="]
	8 --> 9
	5 --> 9
	5["arg__804 0"]
	8["arg__803 u8.&"]
	3 --> 8
	6 --> 8
	6["arg__806 0x40u8"]
	11{"memindex ϕ"}
	9 --> 11
	10 --> 11
	4 --> 11
	4["memindex__807 0u"]
	30["eff__790 push_u32"]
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
	14["cond__789 m_isMemory64"]
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
	22["eff__795 push_u32"]
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
	10["memindex__802 imm_readULEB32"]
	3 -. Codeptr .-> 10
	9["cond__801 u8.!="]
	8 --> 9
	5 --> 9
	5["arg__804 0"]
	8["arg__803 u8.&"]
	3 --> 8
	6 --> 8
	6["arg__806 0x40u8"]
	11{"memindex ϕ"}
	9 --> 11
	10 --> 11
	4 --> 11
	4["memindex__808 0u"]
	30["eff__790 push_u32"]
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
	14["cond__789 m_isMemory64"]
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
	22["eff__795 push_u32"]
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
	10["memindex__802 imm_readULEB32"]
	3 -. Codeptr .-> 10
	9["cond__801 u8.!="]
	8 --> 9
	5 --> 9
	5["arg__804 0"]
	8["arg__803 u8.&"]
	3 --> 8
	6 --> 8
	6["arg__806 0x40u8"]
	11{"memindex ϕ"}
	9 --> 11
	10 --> 11
	4 --> 11
	4["memindex__808 0u"]
	30["eff__790 push_u32"]
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
	14["cond__789 m_isMemory64"]
	11 --> 14
	31{{"Sϕ Codeptr "}}
	14 --> 31
	23 --> 31
	15 --> 31
</pre>`;
window.traces["I32_LOAD16_U"]["post_surgery 287"] = ''
window.traces["I32_LOAD16_U"]["post_surgery 287"] += `<pre class='graph'>---
config:
  layout: elk
---
graph TD
	3[\\"Finish"/]
	21 -. Codeptr .-> 3
	2 -. Stack .-> 3
	1 -. Trap Locals Globals Tables Memory Extra .-> 3
	1[/"Start"\\]
	2{{"Sϕ Stack "}}
	19 --> 2
	18 --> 2
	9 --> 2
	9["eff__795 push_u32"]
	6 --> 9
	0 -. Stack .-> 9
	0["index pop_u32"]
	1 -. Stack .-> 0
	6["val mach_readMemory32_u16"]
	15 --> 6
	0 --> 6
	28 --> 6
	28["offset__814 imm_readULEB32"]
	17 -. Codeptr .-> 28
	17{{"Sϕ Codeptr "}}
	13 --> 17
	14 --> 17
	4 --> 17
	4["flags imm_readU8"]
	1 -. Codeptr .-> 4
	14["memindex__802 imm_readULEB32"]
	4 -. Codeptr .-> 14
	13["cond__801 u8.!="]
	11 --> 13
	7 --> 13
	7["arg__804 0"]
	11["arg__803 u8.&"]
	4 --> 11
	8 --> 11
	8["arg__806 0x40u8"]
	15{"memindex ϕ"}
	13 --> 15
	14 --> 15
	5 --> 15
	5["memindex__808 0u"]
	18["eff__790 push_u32"]
	16 --> 18
	12 -. Stack .-> 18
	12["index pop_u64"]
	1 -. Stack .-> 12
	16["val mach_readMemory64_u16"]
	15 --> 16
	12 --> 16
	24 --> 16
	24["offset__811 imm_readULEB64"]
	17 -. Codeptr .-> 24
	19["cond__789 m_isMemory64"]
	15 --> 19
	21{{"Sϕ Codeptr "}}
	19 --> 21
	24 --> 21
	28 --> 21
</pre>`;
window.traces["I32_LOAD16_U"]["post_surgery 292"] = ''
window.traces["I32_LOAD16_U"]["post_surgery 292"] += `<pre class='graph'>---
config:
  layout: elk
---
graph TD
	3[\\"Finish"/]
	21 -. Codeptr .-> 3
	2 -. Stack .-> 3
	1 -. Trap Locals Globals Tables Memory Extra .-> 3
	1[/"Start"\\]
	2{{"Sϕ Stack "}}
	19 --> 2
	18 --> 2
	9 --> 2
	9["eff__795 push_u32"]
	6 --> 9
	0 -. Stack .-> 9
	0["index pop_u32"]
	1 -. Stack .-> 0
	6["val mach_readMemory32_u16"]
	15 --> 6
	0 --> 6
	28 --> 6
	28["offset__814 imm_readULEB32"]
	17 -. Codeptr .-> 28
	17{{"Sϕ Codeptr "}}
	13 --> 17
	39 --> 17
	4 --> 17
	4["flags imm_readU8"]
	1 -. Codeptr .-> 4
	39["memindex__802__821 imm_readULEB32"]
	4 -. Codeptr .-> 39
	13["cond__801 u8.!="]
	11 --> 13
	7 --> 13
	7["arg__804 0"]
	11["arg__803 u8.&"]
	4 --> 11
	8 --> 11
	8["arg__806 0x40u8"]
	15{"memindex ϕ"}
	13 --> 15
	39 --> 15
	41 --> 15
	41["memindex__808__822 0u"]
	18["eff__790 push_u32"]
	16 --> 18
	12 -. Stack .-> 18
	12["index pop_u64"]
	1 -. Stack .-> 12
	16["val mach_readMemory64_u16"]
	15 --> 16
	12 --> 16
	24 --> 16
	24["offset__811 imm_readULEB64"]
	17 -. Codeptr .-> 24
	19["cond__789 m_isMemory64"]
	15 --> 19
	21{{"Sϕ Codeptr "}}
	19 --> 21
	24 --> 21
	28 --> 21
</pre>`;
window.traces["I32_LOAD16_U"]["schedulerMermaid"] = ''
window.traces["I32_LOAD16_U"]["schedulerMermaid"] += `<pre class='graph'>graph TD
subgraph block_285["Block 285"]
	direction TB
	b285_3[\\"Finish"/]
end
phi_287 --> block_285
subgraph phi_287["Phi 287"]
	p287_2{{"Sϕ Stack "}}
	p287_21{{"Sϕ Codeptr "}}
end
block_288 --> phi_287
block_289 --> phi_287
subgraph block_288["Block 288"]
	direction TB
	b288_24["offset__811 imm_readULEB64"]
	b288_12["index pop_u64"]
	b288_16["val mach_readMemory64_u16"]
	b288_18["eff__790 push_u32"]
	b288_24 --> b288_12
	b288_12 --> b288_16
	b288_16 --> b288_18
end
branch_286 --> block_288
subgraph branch_286["Branch 286"]
	br286_19["cond__789 m_isMemory64"]

end
block_290 --> branch_286
subgraph block_290["Block 290"]
	direction TB
	b290_19["cond__789 m_isMemory64"]
end
phi_292 --> block_290
subgraph phi_292["Phi 292"]
	p292_17{{"Sϕ Codeptr "}}
	p292_17{{"Sϕ Codeptr "}}
	p292_17{{"Sϕ Codeptr "}}
	p292_17{{"Sϕ Codeptr "}}
	p292_15{"memindex ϕ"}
	p292_15{"memindex ϕ"}
	p292_15{"memindex ϕ"}
	p292_15{"memindex ϕ"}
end
block_293 --> phi_292
block_294 --> phi_292
subgraph block_293["Block 293"]
	direction TB
	b293_39["memindex__802__821 imm_readULEB32"]
end
branch_291 --> block_293
subgraph branch_291["Branch 291"]
	br291_13["cond__801 u8.!="]

end
block_295 --> branch_291
subgraph block_295["Block 295"]
	direction TB
	b295_8["arg__806 0x40u8"]
	b295_7["arg__804 0"]
	b295_11["arg__803 u8.&"]
	b295_13["cond__801 u8.!="]
	b295_8 --> b295_7
	b295_7 --> b295_11
	b295_11 --> b295_13
end
subgraph block_294["Block 294"]
	direction TB
	b294_41["memindex__808__822 0u"]
end
branch_291 --> block_294
subgraph block_289["Block 289"]
	direction TB
	b289_28["offset__814 imm_readULEB32"]
	b289_0["index pop_u32"]
	b289_6["val mach_readMemory32_u16"]
	b289_9["eff__795 push_u32"]
	b289_28 --> b289_0
	b289_0 --> b289_6
	b289_6 --> b289_9
end
branch_286 --> block_289

</pre>`;
window.traces["I32_LOAD16_U"]["scheduler_ssad"] = ''
window.traces["I32_LOAD16_U"]["scheduler_ssad"] += `<pre class=''>def arg__806 : byte = 0x40u8;
def arg__804 : byte = 0;
def arg__803 = u8.&(flags, arg__806);
def cond__801 = u8.!=(arg__803, arg__804);
if (cond__801) {
	def memindex__802__821 = imm_readULEB32();
} else {
	def memindex__808__822 : u32 = 0u;
}
// phis: memindex <- memindex__802__821; memindex <- memindex__808__822; memindex <- memindex__802__821; memindex <- memindex__808__822; memindex <- memindex__802__821; memindex <- memindex__808__822; memindex <- memindex__802__821; memindex <- memindex__808__822; 
def cond__789 = m_isMemory64(memindex);
if (cond__789) {
	def offset__811 = imm_readULEB64();
	def index = pop_u64();
	def val = mach_readMemory64_u16(memindex, index, offset__811);
	def eff__790 = push_u32(val);
} else {
	def offset__814 = imm_readULEB32();
	def index = pop_u32();
	def val = mach_readMemory32_u16(memindex, index, offset__814);
	def eff__795 = push_u32(val);
}
// phis: 
</pre>`;
window.traces["I32_LOAD16_U"]["scheduler_ssad_pretty"] = ''
window.traces["I32_LOAD16_U"]["scheduler_ssad_pretty"] += `<pre class=''>if (u8.!=(u8.&(flags, 0x40u8), 0)) {
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
	def offset1 = imm_readULEB32();
	def index = pop_u32();
	def val = mach_readMemory32_u16(memindex, index, offset1);
	push_u32(val);
}
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
	22["eff__795 push_u32"]
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
	10["memindex__802 imm_readULEB32"]
	3 -. Codeptr .-> 10
	9["cond__801 u8.!="]
	8 --> 9
	5 --> 9
	5["arg__804 0"]
	8["arg__803 u8.&"]
	3 --> 8
	6 --> 8
	6["arg__806 0x40u8"]
	11{"memindex ϕ"}
	9 --> 11
	10 --> 11
	4 --> 11
	4["memindex__808 0u"]
	30["eff__790 push_u32"]
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
	14["cond__789 m_isMemory64"]
	11 --> 14
	31{{"Sϕ Codeptr "}}
	14 --> 31
	23 --> 31
	15 --> 31
</pre>`;
window.traces["I32_LOAD16_U"]["unlem_schedule"] = ''
window.traces["I32_LOAD16_U"]["unlem_schedule"] += `<pre class=''>def flags = imm_readU8();
def arg__806 : byte = 0x40u8;
def arg__803 = u8.&(flags, arg__806);
def arg__804 : byte = 0;
def cond__801 = u8.!=(arg__803, arg__804);
var memindex: u32;
if (cond__801) {
	def memindex__802 = imm_readULEB32();
} else {
	def memindex__808 : u32 = 0u;
}
// phis: memindex <- memindex__802; memindex <- memindex__808; 
def cond__789 = m_isMemory64(memindex);
if (cond__789) {
	def offset = imm_readULEB64();
	def index = pop_u64();
	def val = mach_readMemory64_u16(memindex, index, offset);
	def eff__790 = push_u32(val);
} else {
	def offset = imm_readULEB32();
	def index = pop_u32();
	def val = mach_readMemory32_u16(memindex, index, offset);
	def eff__795 = push_u32(val);
}
// phis: 
</pre>`;
window.traces["I32_LOAD16_U_ul"] = {}
window.traces["I32_LOAD16_U_ul"]["post_surgery 298"] = ''
window.traces["I32_LOAD16_U_ul"]["post_surgery 298"] += `<pre class='graph'>---
config:
  layout: elk
---
graph TD
	3[\\"Finish"/]
	21 -. Codeptr .-> 3
	2 -. Stack .-> 3
	1 -. Trap Locals Globals Tables Memory Extra .-> 3
	1[/"Start"\\]
	2{{"Sϕ Stack "}}
	19 --> 2
	18 --> 2
	9 --> 2
	9["eff__795 push_u32"]
	6 --> 9
	0 -. Stack .-> 9
	0["index pop_u32"]
	1 -. Stack .-> 0
	6["val mach_readMemory32_u16"]
	15 --> 6
	0 --> 6
	28 --> 6
	28["offset__842 imm_readULEB32"]
	17 -. Codeptr .-> 28
	17{{"Sϕ Codeptr "}}
	13 --> 17
	14 --> 17
	4 --> 17
	4["flags imm_readU8"]
	1 -. Codeptr .-> 4
	14["memindex__802 imm_readULEB32"]
	4 -. Codeptr .-> 14
	13["cond__801 u8.!="]
	11 --> 13
	7 --> 13
	7["arg__804 0"]
	11["arg__803 u8.&"]
	4 --> 11
	8 --> 11
	8["arg__806 0x40u8"]
	15{"memindex ϕ"}
	13 --> 15
	14 --> 15
	5 --> 15
	5["memindex__808 0u"]
	18["eff__790 push_u32"]
	16 --> 18
	12 -. Stack .-> 18
	12["index pop_u64"]
	1 -. Stack .-> 12
	16["val mach_readMemory64_u16"]
	15 --> 16
	12 --> 16
	24 --> 16
	24["offset__839 imm_readULEB64"]
	17 -. Codeptr .-> 24
	19["cond__789 m_isMemory64"]
	15 --> 19
	21{{"Sϕ Codeptr "}}
	19 --> 21
	24 --> 21
	28 --> 21
</pre>`;
window.traces["I32_LOAD16_U_ul"]["post_surgery 303"] = ''
window.traces["I32_LOAD16_U_ul"]["post_surgery 303"] += `<pre class='graph'>---
config:
  layout: elk
---
graph TD
	3[\\"Finish"/]
	21 -. Codeptr .-> 3
	2 -. Stack .-> 3
	1 -. Trap Locals Globals Tables Memory Extra .-> 3
	1[/"Start"\\]
	2{{"Sϕ Stack "}}
	19 --> 2
	18 --> 2
	9 --> 2
	9["eff__795 push_u32"]
	6 --> 9
	0 -. Stack .-> 9
	0["index pop_u32"]
	1 -. Stack .-> 0
	6["val mach_readMemory32_u16"]
	15 --> 6
	0 --> 6
	28 --> 6
	28["offset__842 imm_readULEB32"]
	17 -. Codeptr .-> 28
	17{{"Sϕ Codeptr "}}
	13 --> 17
	39 --> 17
	4 --> 17
	4["flags imm_readU8"]
	1 -. Codeptr .-> 4
	39["memindex__802__849 imm_readULEB32"]
	4 -. Codeptr .-> 39
	13["cond__801 u8.!="]
	11 --> 13
	7 --> 13
	7["arg__804 0"]
	11["arg__803 u8.&"]
	4 --> 11
	8 --> 11
	8["arg__806 0x40u8"]
	15{"memindex ϕ"}
	13 --> 15
	39 --> 15
	41 --> 15
	41["memindex__808__850 0u"]
	18["eff__790 push_u32"]
	16 --> 18
	12 -. Stack .-> 18
	12["index pop_u64"]
	1 -. Stack .-> 12
	16["val mach_readMemory64_u16"]
	15 --> 16
	12 --> 16
	24 --> 16
	24["offset__839 imm_readULEB64"]
	17 -. Codeptr .-> 24
	19["cond__789 m_isMemory64"]
	15 --> 19
	21{{"Sϕ Codeptr "}}
	19 --> 21
	24 --> 21
	28 --> 21
</pre>`;
window.traces["I32_LOAD16_U"]["unlem_scheduler"] = ''
window.traces["I32_LOAD16_U"]["unlem_scheduler"] += `<pre class='graph'>graph TD
subgraph block_296["Block 296"]
	direction TB
	b296_3[\\"Finish"/]
end
phi_298 --> block_296
subgraph phi_298["Phi 298"]
	p298_2{{"Sϕ Stack "}}
	p298_21{{"Sϕ Codeptr "}}
end
block_299 --> phi_298
block_300 --> phi_298
subgraph block_299["Block 299"]
	direction TB
	b299_24["offset__839 imm_readULEB64"]
	b299_12["index pop_u64"]
	b299_16["val mach_readMemory64_u16"]
	b299_18["eff__790 push_u32"]
	b299_24 --> b299_12
	b299_12 --> b299_16
	b299_16 --> b299_18
end
branch_297 --> block_299
subgraph branch_297["Branch 297"]
	br297_19["cond__789 m_isMemory64"]

end
block_301 --> branch_297
subgraph block_301["Block 301"]
	direction TB
	b301_19["cond__789 m_isMemory64"]
end
phi_303 --> block_301
subgraph phi_303["Phi 303"]
	p303_17{{"Sϕ Codeptr "}}
	p303_17{{"Sϕ Codeptr "}}
	p303_17{{"Sϕ Codeptr "}}
	p303_17{{"Sϕ Codeptr "}}
	p303_15{"memindex ϕ"}
	p303_15{"memindex ϕ"}
	p303_15{"memindex ϕ"}
	p303_15{"memindex ϕ"}
end
block_304 --> phi_303
block_305 --> phi_303
subgraph block_304["Block 304"]
	direction TB
	b304_39["memindex__802__849 imm_readULEB32"]
end
branch_302 --> block_304
subgraph branch_302["Branch 302"]
	br302_13["cond__801 u8.!="]

end
block_306 --> branch_302
subgraph block_306["Block 306"]
	direction TB
	b306_8["arg__806 0x40u8"]
	b306_7["arg__804 0"]
	b306_11["arg__803 u8.&"]
	b306_13["cond__801 u8.!="]
	b306_8 --> b306_7
	b306_7 --> b306_11
	b306_11 --> b306_13
end
subgraph block_305["Block 305"]
	direction TB
	b305_41["memindex__808__850 0u"]
end
branch_302 --> block_305
subgraph block_300["Block 300"]
	direction TB
	b300_28["offset__842 imm_readULEB32"]
	b300_0["index pop_u32"]
	b300_6["val mach_readMemory32_u16"]
	b300_9["eff__795 push_u32"]
	b300_28 --> b300_0
	b300_0 --> b300_6
	b300_6 --> b300_9
end
branch_297 --> block_300

</pre>`;
window.traces["I32_LOAD16_U"]["unlem_scheduler_ssa"] = ''
window.traces["I32_LOAD16_U"]["unlem_scheduler_ssa"] += `<pre class=''>def arg__806 : byte = 0x40u8;
def arg__804 : byte = 0;
def arg__803 = u8.&(flags, arg__806);
def cond__801 = u8.!=(arg__803, arg__804);
if (cond__801) {
	def memindex__802__849 = imm_readULEB32();
} else {
	def memindex__808__850 : u32 = 0u;
}
// phis: memindex <- memindex__802__849; memindex <- memindex__808__850; memindex <- memindex__802__849; memindex <- memindex__808__850; memindex <- memindex__802__849; memindex <- memindex__808__850; memindex <- memindex__802__849; memindex <- memindex__808__850; 
def cond__789 = m_isMemory64(memindex);
if (cond__789) {
	def offset__839 = imm_readULEB64();
	def index = pop_u64();
	def val = mach_readMemory64_u16(memindex, index, offset__839);
	def eff__790 = push_u32(val);
} else {
	def offset__842 = imm_readULEB32();
	def index = pop_u32();
	def val = mach_readMemory32_u16(memindex, index, offset__842);
	def eff__795 = push_u32(val);
}
// phis: 
</pre>`;
window.traces["I32_LOAD16_U"]["unlem_scheduler_ssa"] += `<pre class=''>if (u8.!=(u8.&(flags, 0x40u8), 0)) {
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
	def offset1 = imm_readULEB32();
	def index = pop_u32();
	def val = mach_readMemory32_u16(memindex, index, offset1);
	push_u32(val);
}
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
	22["eff__795 push_u32"]
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
	10["memindex__802 imm_readULEB32"]
	3 -. Codeptr .-> 10
	9["cond__801 u8.!="]
	8 --> 9
	5 --> 9
	5["arg__804 0"]
	8["arg__803 u8.&"]
	3 --> 8
	6 --> 8
	6["arg__806 0x40u8"]
	11{"memindex ϕ"}
	9 --> 11
	10 --> 11
	4 --> 11
	4["memindex__808 0u"]
	30["eff__790 push_u32"]
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
	14["cond__789 m_isMemory64"]
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
	22["eff__795 push_u32"]
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
	10["memindex__802 imm_readULEB32"]
	3 -. Codeptr .-> 10
	9["cond__801 u8.!="]
	8 --> 9
	5 --> 9
	5["arg__804 0"]
	8["arg__803 u8.&"]
	3 --> 8
	6 --> 8
	6["arg__806 0x40u8"]
	11{"memindex ϕ"}
	9 --> 11
	10 --> 11
	4 --> 11
	4["memindex__808 0u"]
	30["eff__790 push_u32"]
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
	14["cond__789 m_isMemory64"]
	11 --> 14
	31{{"Sϕ Codeptr "}}
	14 --> 31
	23 --> 31
	15 --> 31
</pre>`;
window.traces["I32_LOAD16_U"]["scheduled"] = ''
window.traces["I32_LOAD16_U"]["scheduled"] += `<pre class=''>def flags = imm_readU8();
def arg__806 : byte = 0x40u8;
def arg__803 = u8.&(flags, arg__806);
def arg__804 : byte = 0;
def cond__801 = u8.!=(arg__803, arg__804);
var memindex: u32;
if (cond__801) {
	def memindex__802 = imm_readULEB32();
} else {
	def memindex__808 : u32 = 0u;
}
// phis: memindex <- memindex__802; memindex <- memindex__808; 
def cond__789 = m_isMemory64(memindex);
if (cond__789) {
	def offset = imm_readULEB64();
	def index = pop_u64();
	def val = mach_readMemory64_u16(memindex, index, offset);
	def eff__790 = push_u32(val);
} else {
	def offset = imm_readULEB32();
	def index = pop_u32();
	def val = mach_readMemory32_u16(memindex, index, offset);
	def eff__795 = push_u32(val);
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
def arg__882 : byte = 0;
def arg__884 : byte = 0x40u8;
def arg__883 = (flags);
def arg__881 = u8.&(arg__883, arg__884);
def cond__879 = u8.!=(arg__881, arg__882);
if (cond__879) {
	def memindex__880 = imm_readULEB32();
}
// phis: memindex <- memindex__880; 
def arg__878 = (memindex);
def cond__865 = m_isMemory64(arg__878);
if (cond__865) {
	def offset = imm_readULEB64();
	def index = pop_u64();
	def arg__871 = (offset);
	def arg__870 = (index);
	def arg__869 = (memindex);
	def val = mach_readMemory64_u8_64(arg__869, arg__870, arg__871);
	def arg__868 = (val);
	def extend = U64_extend8_s(arg__868);
	def arg__867 = (extend);
	def eff__866 = push_u64(arg__867);
} else {
	def offset = imm_readULEB32();
	def index = pop_u32();
	def arg__877 = (offset);
	def arg__876 = (index);
	def arg__875 = (memindex);
	def val = mach_readMemory32_u8_64(arg__875, arg__876, arg__877);
	def arg__874 = (val);
	def extend = U64_extend8_s(arg__874);
	def arg__873 = (extend);
	def eff__872 = push_u64(arg__873);
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
	24["eff__872 push_u64"]
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
	10["memindex__880 imm_readULEB32"]
	3 -. Codeptr .-> 10
	9["cond__879 u8.!="]
	8 --> 9
	5 --> 9
	5["arg__882 0"]
	8["arg__881 u8.&"]
	3 --> 8
	6 --> 8
	6["arg__884 0x40u8"]
	11{"memindex ϕ"}
	9 --> 11
	10 --> 11
	4 --> 11
	4["memindex__885 0u"]
	34["eff__866 push_u64"]
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
	14["cond__865 m_isMemory64"]
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
	24["eff__872 push_u64"]
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
	10["memindex__880 imm_readULEB32"]
	3 -. Codeptr .-> 10
	9["cond__879 u8.!="]
	8 --> 9
	5 --> 9
	5["arg__882 0"]
	8["arg__881 u8.&"]
	3 --> 8
	6 --> 8
	6["arg__884 0x40u8"]
	11{"memindex ϕ"}
	9 --> 11
	10 --> 11
	4 --> 11
	4["memindex__886 0u"]
	34["eff__866 push_u64"]
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
	14["cond__865 m_isMemory64"]
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
	24["eff__872 push_u64"]
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
	10["memindex__880 imm_readULEB32"]
	3 -. Codeptr .-> 10
	9["cond__879 u8.!="]
	8 --> 9
	5 --> 9
	5["arg__882 0"]
	8["arg__881 u8.&"]
	3 --> 8
	6 --> 8
	6["arg__884 0x40u8"]
	11{"memindex ϕ"}
	9 --> 11
	10 --> 11
	4 --> 11
	4["memindex__886 0u"]
	34["eff__866 push_u64"]
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
	14["cond__865 m_isMemory64"]
	11 --> 14
	35{{"Sϕ Codeptr "}}
	14 --> 35
	25 --> 35
	15 --> 35
</pre>`;
window.traces["I64_LOAD8_S"]["post_surgery 309"] = ''
window.traces["I64_LOAD8_S"]["post_surgery 309"] += `<pre class='graph'>---
config:
  layout: elk
---
graph TD
	3[\\"Finish"/]
	6 -. Codeptr .-> 3
	9 -. Stack .-> 3
	2 -. Trap Locals Globals Tables Memory Extra .-> 3
	2[/"Start"\\]
	9{{"Sϕ Stack "}}
	22 --> 9
	4 --> 9
	14 --> 9
	14["eff__872 push_u64"]
	12 --> 14
	0 -. Stack .-> 14
	0["index pop_u32"]
	2 -. Stack .-> 0
	12["extend U64_extend8_s"]
	7 --> 12
	7["val mach_readMemory32_u8_64"]
	19 --> 7
	0 --> 7
	32 --> 7
	32["offset__894 imm_readULEB32"]
	20 -. Codeptr .-> 32
	20{{"Sϕ Codeptr "}}
	15 --> 20
	17 --> 20
	5 --> 20
	5["flags imm_readU8"]
	2 -. Codeptr .-> 5
	17["memindex__880 imm_readULEB32"]
	5 -. Codeptr .-> 17
	15["cond__879 u8.!="]
	13 --> 15
	10 --> 15
	10["arg__882 0"]
	13["arg__881 u8.&"]
	5 --> 13
	11 --> 13
	11["arg__884 0x40u8"]
	19{"memindex ϕ"}
	15 --> 19
	17 --> 19
	8 --> 19
	8["memindex__886 0u"]
	4["eff__866 push_u64"]
	1 --> 4
	18 -. Stack .-> 4
	18["index pop_u64"]
	2 -. Stack .-> 18
	1["extend U64_extend8_s"]
	21 --> 1
	21["val mach_readMemory64_u8_64"]
	19 --> 21
	18 --> 21
	27 --> 21
	27["offset__890 imm_readULEB64"]
	20 -. Codeptr .-> 27
	22["cond__865 m_isMemory64"]
	19 --> 22
	6{{"Sϕ Codeptr "}}
	22 --> 6
	27 --> 6
	32 --> 6
</pre>`;
window.traces["I64_LOAD8_S"]["post_surgery 314"] = ''
window.traces["I64_LOAD8_S"]["post_surgery 314"] += `<pre class='graph'>---
config:
  layout: elk
---
graph TD
	3[\\"Finish"/]
	6 -. Codeptr .-> 3
	9 -. Stack .-> 3
	2 -. Trap Locals Globals Tables Memory Extra .-> 3
	2[/"Start"\\]
	9{{"Sϕ Stack "}}
	22 --> 9
	4 --> 9
	14 --> 9
	14["eff__872 push_u64"]
	12 --> 14
	0 -. Stack .-> 14
	0["index pop_u32"]
	2 -. Stack .-> 0
	12["extend U64_extend8_s"]
	7 --> 12
	7["val mach_readMemory32_u8_64"]
	19 --> 7
	0 --> 7
	32 --> 7
	32["offset__894 imm_readULEB32"]
	20 -. Codeptr .-> 32
	20{{"Sϕ Codeptr "}}
	15 --> 20
	44 --> 20
	5 --> 20
	5["flags imm_readU8"]
	2 -. Codeptr .-> 5
	44["memindex__880__903 imm_readULEB32"]
	5 -. Codeptr .-> 44
	15["cond__879 u8.!="]
	13 --> 15
	10 --> 15
	10["arg__882 0"]
	13["arg__881 u8.&"]
	5 --> 13
	11 --> 13
	11["arg__884 0x40u8"]
	19{"memindex ϕ"}
	15 --> 19
	44 --> 19
	46 --> 19
	46["memindex__886__904 0u"]
	4["eff__866 push_u64"]
	1 --> 4
	18 -. Stack .-> 4
	18["index pop_u64"]
	2 -. Stack .-> 18
	1["extend U64_extend8_s"]
	21 --> 1
	21["val mach_readMemory64_u8_64"]
	19 --> 21
	18 --> 21
	27 --> 21
	27["offset__890 imm_readULEB64"]
	20 -. Codeptr .-> 27
	22["cond__865 m_isMemory64"]
	19 --> 22
	6{{"Sϕ Codeptr "}}
	22 --> 6
	27 --> 6
	32 --> 6
</pre>`;
window.traces["I64_LOAD8_S"]["schedulerMermaid"] = ''
window.traces["I64_LOAD8_S"]["schedulerMermaid"] += `<pre class='graph'>graph TD
subgraph block_307["Block 307"]
	direction TB
	b307_3[\\"Finish"/]
end
phi_309 --> block_307
subgraph phi_309["Phi 309"]
	p309_9{{"Sϕ Stack "}}
	p309_6{{"Sϕ Codeptr "}}
end
block_310 --> phi_309
block_311 --> phi_309
subgraph block_310["Block 310"]
	direction TB
	b310_27["offset__890 imm_readULEB64"]
	b310_18["index pop_u64"]
	b310_21["val mach_readMemory64_u8_64"]
	b310_1["extend U64_extend8_s"]
	b310_4["eff__866 push_u64"]
	b310_27 --> b310_18
	b310_18 --> b310_21
	b310_21 --> b310_1
	b310_1 --> b310_4
end
branch_308 --> block_310
subgraph branch_308["Branch 308"]
	br308_22["cond__865 m_isMemory64"]

end
block_312 --> branch_308
subgraph block_312["Block 312"]
	direction TB
	b312_22["cond__865 m_isMemory64"]
end
phi_314 --> block_312
subgraph phi_314["Phi 314"]
	p314_20{{"Sϕ Codeptr "}}
	p314_20{{"Sϕ Codeptr "}}
	p314_20{{"Sϕ Codeptr "}}
	p314_20{{"Sϕ Codeptr "}}
	p314_19{"memindex ϕ"}
	p314_19{"memindex ϕ"}
	p314_19{"memindex ϕ"}
	p314_19{"memindex ϕ"}
end
block_315 --> phi_314
block_316 --> phi_314
subgraph block_315["Block 315"]
	direction TB
	b315_44["memindex__880__903 imm_readULEB32"]
end
branch_313 --> block_315
subgraph branch_313["Branch 313"]
	br313_15["cond__879 u8.!="]

end
block_317 --> branch_313
subgraph block_317["Block 317"]
	direction TB
	b317_11["arg__884 0x40u8"]
	b317_10["arg__882 0"]
	b317_13["arg__881 u8.&"]
	b317_15["cond__879 u8.!="]
	b317_11 --> b317_10
	b317_10 --> b317_13
	b317_13 --> b317_15
end
subgraph block_316["Block 316"]
	direction TB
	b316_46["memindex__886__904 0u"]
end
branch_313 --> block_316
subgraph block_311["Block 311"]
	direction TB
	b311_32["offset__894 imm_readULEB32"]
	b311_0["index pop_u32"]
	b311_7["val mach_readMemory32_u8_64"]
	b311_12["extend U64_extend8_s"]
	b311_14["eff__872 push_u64"]
	b311_32 --> b311_0
	b311_0 --> b311_7
	b311_7 --> b311_12
	b311_12 --> b311_14
end
branch_308 --> block_311

</pre>`;
window.traces["I64_LOAD8_S"]["scheduler_ssad"] = ''
window.traces["I64_LOAD8_S"]["scheduler_ssad"] += `<pre class=''>def arg__884 : byte = 0x40u8;
def arg__882 : byte = 0;
def arg__881 = u8.&(flags, arg__884);
def cond__879 = u8.!=(arg__881, arg__882);
if (cond__879) {
	def memindex__880__903 = imm_readULEB32();
} else {
	def memindex__886__904 : u32 = 0u;
}
// phis: memindex <- memindex__880__903; memindex <- memindex__886__904; memindex <- memindex__880__903; memindex <- memindex__886__904; memindex <- memindex__880__903; memindex <- memindex__886__904; memindex <- memindex__880__903; memindex <- memindex__886__904; 
def cond__865 = m_isMemory64(memindex);
if (cond__865) {
	def offset__890 = imm_readULEB64();
	def index = pop_u64();
	def val = mach_readMemory64_u8_64(memindex, index, offset__890);
	def extend = U64_extend8_s(val);
	def eff__866 = push_u64(extend);
} else {
	def offset__894 = imm_readULEB32();
	def index = pop_u32();
	def val = mach_readMemory32_u8_64(memindex, index, offset__894);
	def extend = U64_extend8_s(val);
	def eff__872 = push_u64(extend);
}
// phis: 
</pre>`;
window.traces["I64_LOAD8_S"]["scheduler_ssad_pretty"] = ''
window.traces["I64_LOAD8_S"]["scheduler_ssad_pretty"] += `<pre class=''>if (u8.!=(u8.&(flags, 0x40u8), 0)) {
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
	def offset1 = imm_readULEB32();
	def index = pop_u32();
	def val = mach_readMemory32_u8_64(memindex, index, offset1);
	def extend = U64_extend8_s(val);
	push_u64(extend);
}
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
	24["eff__872 push_u64"]
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
	10["memindex__880 imm_readULEB32"]
	3 -. Codeptr .-> 10
	9["cond__879 u8.!="]
	8 --> 9
	5 --> 9
	5["arg__882 0"]
	8["arg__881 u8.&"]
	3 --> 8
	6 --> 8
	6["arg__884 0x40u8"]
	11{"memindex ϕ"}
	9 --> 11
	10 --> 11
	4 --> 11
	4["memindex__886 0u"]
	34["eff__866 push_u64"]
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
	14["cond__865 m_isMemory64"]
	11 --> 14
	35{{"Sϕ Codeptr "}}
	14 --> 35
	25 --> 35
	15 --> 35
</pre>`;
window.traces["I64_LOAD8_S"]["unlem_schedule"] = ''
window.traces["I64_LOAD8_S"]["unlem_schedule"] += `<pre class=''>def flags = imm_readU8();
def arg__884 : byte = 0x40u8;
def arg__881 = u8.&(flags, arg__884);
def arg__882 : byte = 0;
def cond__879 = u8.!=(arg__881, arg__882);
var memindex: u32;
if (cond__879) {
	def memindex__880 = imm_readULEB32();
} else {
	def memindex__886 : u32 = 0u;
}
// phis: memindex <- memindex__880; memindex <- memindex__886; 
def cond__865 = m_isMemory64(memindex);
if (cond__865) {
	def offset = imm_readULEB64();
	def index = pop_u64();
	def val = mach_readMemory64_u8_64(memindex, index, offset);
	def extend = U64_extend8_s(val);
	def eff__866 = push_u64(extend);
} else {
	def offset = imm_readULEB32();
	def index = pop_u32();
	def val = mach_readMemory32_u8_64(memindex, index, offset);
	def extend = U64_extend8_s(val);
	def eff__872 = push_u64(extend);
}
// phis: 
</pre>`;
window.traces["I64_LOAD8_S_ul"] = {}
window.traces["I64_LOAD8_S_ul"]["post_surgery 320"] = ''
window.traces["I64_LOAD8_S_ul"]["post_surgery 320"] += `<pre class='graph'>---
config:
  layout: elk
---
graph TD
	3[\\"Finish"/]
	6 -. Codeptr .-> 3
	9 -. Stack .-> 3
	2 -. Trap Locals Globals Tables Memory Extra .-> 3
	2[/"Start"\\]
	9{{"Sϕ Stack "}}
	22 --> 9
	4 --> 9
	14 --> 9
	14["eff__872 push_u64"]
	12 --> 14
	0 -. Stack .-> 14
	0["index pop_u32"]
	2 -. Stack .-> 0
	12["extend U64_extend8_s"]
	7 --> 12
	7["val mach_readMemory32_u8_64"]
	19 --> 7
	0 --> 7
	32 --> 7
	32["offset__926 imm_readULEB32"]
	20 -. Codeptr .-> 32
	20{{"Sϕ Codeptr "}}
	15 --> 20
	17 --> 20
	5 --> 20
	5["flags imm_readU8"]
	2 -. Codeptr .-> 5
	17["memindex__880 imm_readULEB32"]
	5 -. Codeptr .-> 17
	15["cond__879 u8.!="]
	13 --> 15
	10 --> 15
	10["arg__882 0"]
	13["arg__881 u8.&"]
	5 --> 13
	11 --> 13
	11["arg__884 0x40u8"]
	19{"memindex ϕ"}
	15 --> 19
	17 --> 19
	8 --> 19
	8["memindex__886 0u"]
	4["eff__866 push_u64"]
	1 --> 4
	18 -. Stack .-> 4
	18["index pop_u64"]
	2 -. Stack .-> 18
	1["extend U64_extend8_s"]
	21 --> 1
	21["val mach_readMemory64_u8_64"]
	19 --> 21
	18 --> 21
	27 --> 21
	27["offset__922 imm_readULEB64"]
	20 -. Codeptr .-> 27
	22["cond__865 m_isMemory64"]
	19 --> 22
	6{{"Sϕ Codeptr "}}
	22 --> 6
	27 --> 6
	32 --> 6
</pre>`;
window.traces["I64_LOAD8_S_ul"]["post_surgery 325"] = ''
window.traces["I64_LOAD8_S_ul"]["post_surgery 325"] += `<pre class='graph'>---
config:
  layout: elk
---
graph TD
	3[\\"Finish"/]
	6 -. Codeptr .-> 3
	9 -. Stack .-> 3
	2 -. Trap Locals Globals Tables Memory Extra .-> 3
	2[/"Start"\\]
	9{{"Sϕ Stack "}}
	22 --> 9
	4 --> 9
	14 --> 9
	14["eff__872 push_u64"]
	12 --> 14
	0 -. Stack .-> 14
	0["index pop_u32"]
	2 -. Stack .-> 0
	12["extend U64_extend8_s"]
	7 --> 12
	7["val mach_readMemory32_u8_64"]
	19 --> 7
	0 --> 7
	32 --> 7
	32["offset__926 imm_readULEB32"]
	20 -. Codeptr .-> 32
	20{{"Sϕ Codeptr "}}
	15 --> 20
	44 --> 20
	5 --> 20
	5["flags imm_readU8"]
	2 -. Codeptr .-> 5
	44["memindex__880__935 imm_readULEB32"]
	5 -. Codeptr .-> 44
	15["cond__879 u8.!="]
	13 --> 15
	10 --> 15
	10["arg__882 0"]
	13["arg__881 u8.&"]
	5 --> 13
	11 --> 13
	11["arg__884 0x40u8"]
	19{"memindex ϕ"}
	15 --> 19
	44 --> 19
	46 --> 19
	46["memindex__886__936 0u"]
	4["eff__866 push_u64"]
	1 --> 4
	18 -. Stack .-> 4
	18["index pop_u64"]
	2 -. Stack .-> 18
	1["extend U64_extend8_s"]
	21 --> 1
	21["val mach_readMemory64_u8_64"]
	19 --> 21
	18 --> 21
	27 --> 21
	27["offset__922 imm_readULEB64"]
	20 -. Codeptr .-> 27
	22["cond__865 m_isMemory64"]
	19 --> 22
	6{{"Sϕ Codeptr "}}
	22 --> 6
	27 --> 6
	32 --> 6
</pre>`;
window.traces["I64_LOAD8_S"]["unlem_scheduler"] = ''
window.traces["I64_LOAD8_S"]["unlem_scheduler"] += `<pre class='graph'>graph TD
subgraph block_318["Block 318"]
	direction TB
	b318_3[\\"Finish"/]
end
phi_320 --> block_318
subgraph phi_320["Phi 320"]
	p320_9{{"Sϕ Stack "}}
	p320_6{{"Sϕ Codeptr "}}
end
block_321 --> phi_320
block_322 --> phi_320
subgraph block_321["Block 321"]
	direction TB
	b321_27["offset__922 imm_readULEB64"]
	b321_18["index pop_u64"]
	b321_21["val mach_readMemory64_u8_64"]
	b321_1["extend U64_extend8_s"]
	b321_4["eff__866 push_u64"]
	b321_27 --> b321_18
	b321_18 --> b321_21
	b321_21 --> b321_1
	b321_1 --> b321_4
end
branch_319 --> block_321
subgraph branch_319["Branch 319"]
	br319_22["cond__865 m_isMemory64"]

end
block_323 --> branch_319
subgraph block_323["Block 323"]
	direction TB
	b323_22["cond__865 m_isMemory64"]
end
phi_325 --> block_323
subgraph phi_325["Phi 325"]
	p325_20{{"Sϕ Codeptr "}}
	p325_20{{"Sϕ Codeptr "}}
	p325_20{{"Sϕ Codeptr "}}
	p325_20{{"Sϕ Codeptr "}}
	p325_19{"memindex ϕ"}
	p325_19{"memindex ϕ"}
	p325_19{"memindex ϕ"}
	p325_19{"memindex ϕ"}
end
block_326 --> phi_325
block_327 --> phi_325
subgraph block_326["Block 326"]
	direction TB
	b326_44["memindex__880__935 imm_readULEB32"]
end
branch_324 --> block_326
subgraph branch_324["Branch 324"]
	br324_15["cond__879 u8.!="]

end
block_328 --> branch_324
subgraph block_328["Block 328"]
	direction TB
	b328_11["arg__884 0x40u8"]
	b328_10["arg__882 0"]
	b328_13["arg__881 u8.&"]
	b328_15["cond__879 u8.!="]
	b328_11 --> b328_10
	b328_10 --> b328_13
	b328_13 --> b328_15
end
subgraph block_327["Block 327"]
	direction TB
	b327_46["memindex__886__936 0u"]
end
branch_324 --> block_327
subgraph block_322["Block 322"]
	direction TB
	b322_32["offset__926 imm_readULEB32"]
	b322_0["index pop_u32"]
	b322_7["val mach_readMemory32_u8_64"]
	b322_12["extend U64_extend8_s"]
	b322_14["eff__872 push_u64"]
	b322_32 --> b322_0
	b322_0 --> b322_7
	b322_7 --> b322_12
	b322_12 --> b322_14
end
branch_319 --> block_322

</pre>`;
window.traces["I64_LOAD8_S"]["unlem_scheduler_ssa"] = ''
window.traces["I64_LOAD8_S"]["unlem_scheduler_ssa"] += `<pre class=''>def arg__884 : byte = 0x40u8;
def arg__882 : byte = 0;
def arg__881 = u8.&(flags, arg__884);
def cond__879 = u8.!=(arg__881, arg__882);
if (cond__879) {
	def memindex__880__935 = imm_readULEB32();
} else {
	def memindex__886__936 : u32 = 0u;
}
// phis: memindex <- memindex__880__935; memindex <- memindex__886__936; memindex <- memindex__880__935; memindex <- memindex__886__936; memindex <- memindex__880__935; memindex <- memindex__886__936; memindex <- memindex__880__935; memindex <- memindex__886__936; 
def cond__865 = m_isMemory64(memindex);
if (cond__865) {
	def offset__922 = imm_readULEB64();
	def index = pop_u64();
	def val = mach_readMemory64_u8_64(memindex, index, offset__922);
	def extend = U64_extend8_s(val);
	def eff__866 = push_u64(extend);
} else {
	def offset__926 = imm_readULEB32();
	def index = pop_u32();
	def val = mach_readMemory32_u8_64(memindex, index, offset__926);
	def extend = U64_extend8_s(val);
	def eff__872 = push_u64(extend);
}
// phis: 
</pre>`;
window.traces["I64_LOAD8_S"]["unlem_scheduler_ssa"] += `<pre class=''>if (u8.!=(u8.&(flags, 0x40u8), 0)) {
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
	def offset1 = imm_readULEB32();
	def index = pop_u32();
	def val = mach_readMemory32_u8_64(memindex, index, offset1);
	def extend = U64_extend8_s(val);
	push_u64(extend);
}
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
	24["eff__872 push_u64"]
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
	10["memindex__880 imm_readULEB32"]
	3 -. Codeptr .-> 10
	9["cond__879 u8.!="]
	8 --> 9
	5 --> 9
	5["arg__882 0"]
	8["arg__881 u8.&"]
	3 --> 8
	6 --> 8
	6["arg__884 0x40u8"]
	11{"memindex ϕ"}
	9 --> 11
	10 --> 11
	4 --> 11
	4["memindex__886 0u"]
	34["eff__866 push_u64"]
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
	14["cond__865 m_isMemory64"]
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
	24["eff__872 push_u64"]
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
	10["memindex__880 imm_readULEB32"]
	3 -. Codeptr .-> 10
	9["cond__879 u8.!="]
	8 --> 9
	5 --> 9
	5["arg__882 0"]
	8["arg__881 u8.&"]
	3 --> 8
	6 --> 8
	6["arg__884 0x40u8"]
	11{"memindex ϕ"}
	9 --> 11
	10 --> 11
	4 --> 11
	4["memindex__886 0u"]
	34["eff__866 push_u64"]
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
	14["cond__865 m_isMemory64"]
	11 --> 14
	35{{"Sϕ Codeptr "}}
	14 --> 35
	25 --> 35
	15 --> 35
</pre>`;
window.traces["I64_LOAD8_S"]["scheduled"] = ''
window.traces["I64_LOAD8_S"]["scheduled"] += `<pre class=''>def flags = imm_readU8();
def arg__884 : byte = 0x40u8;
def arg__881 = u8.&(flags, arg__884);
def arg__882 : byte = 0;
def cond__879 = u8.!=(arg__881, arg__882);
var memindex: u32;
if (cond__879) {
	def memindex__880 = imm_readULEB32();
} else {
	def memindex__886 : u32 = 0u;
}
// phis: memindex <- memindex__880; memindex <- memindex__886; 
def cond__865 = m_isMemory64(memindex);
if (cond__865) {
	def offset = imm_readULEB64();
	def index = pop_u64();
	def val = mach_readMemory64_u8_64(memindex, index, offset);
	def extend = U64_extend8_s(val);
	def eff__866 = push_u64(extend);
} else {
	def offset = imm_readULEB32();
	def index = pop_u32();
	def val = mach_readMemory32_u8_64(memindex, index, offset);
	def extend = U64_extend8_s(val);
	def eff__872 = push_u64(extend);
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
def arg__966 : byte = 0;
def arg__968 : byte = 0x40u8;
def arg__967 = (flags);
def arg__965 = u8.&(arg__967, arg__968);
def cond__963 = u8.!=(arg__965, arg__966);
if (cond__963) {
	def memindex__964 = imm_readULEB32();
}
// phis: memindex <- memindex__964; 
def arg__962 = (memindex);
def cond__951 = m_isMemory64(arg__962);
if (cond__951) {
	def offset = imm_readULEB64();
	def index = pop_u64();
	def arg__956 = (offset);
	def arg__955 = (index);
	def arg__954 = (memindex);
	def val = mach_readMemory64_u8_64(arg__954, arg__955, arg__956);
	def arg__953 = (val);
	def eff__952 = push_u64(arg__953);
} else {
	def offset = imm_readULEB32();
	def index = pop_u32();
	def arg__961 = (offset);
	def arg__960 = (index);
	def arg__959 = (memindex);
	def val = mach_readMemory32_u8_64(arg__959, arg__960, arg__961);
	def arg__958 = (val);
	def eff__957 = push_u64(arg__958);
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
	22["eff__957 push_u64"]
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
	10["memindex__964 imm_readULEB32"]
	3 -. Codeptr .-> 10
	9["cond__963 u8.!="]
	8 --> 9
	5 --> 9
	5["arg__966 0"]
	8["arg__965 u8.&"]
	3 --> 8
	6 --> 8
	6["arg__968 0x40u8"]
	11{"memindex ϕ"}
	9 --> 11
	10 --> 11
	4 --> 11
	4["memindex__969 0u"]
	30["eff__952 push_u64"]
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
	14["cond__951 m_isMemory64"]
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
	22["eff__957 push_u64"]
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
	10["memindex__964 imm_readULEB32"]
	3 -. Codeptr .-> 10
	9["cond__963 u8.!="]
	8 --> 9
	5 --> 9
	5["arg__966 0"]
	8["arg__965 u8.&"]
	3 --> 8
	6 --> 8
	6["arg__968 0x40u8"]
	11{"memindex ϕ"}
	9 --> 11
	10 --> 11
	4 --> 11
	4["memindex__970 0u"]
	30["eff__952 push_u64"]
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
	14["cond__951 m_isMemory64"]
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
	22["eff__957 push_u64"]
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
	10["memindex__964 imm_readULEB32"]
	3 -. Codeptr .-> 10
	9["cond__963 u8.!="]
	8 --> 9
	5 --> 9
	5["arg__966 0"]
	8["arg__965 u8.&"]
	3 --> 8
	6 --> 8
	6["arg__968 0x40u8"]
	11{"memindex ϕ"}
	9 --> 11
	10 --> 11
	4 --> 11
	4["memindex__970 0u"]
	30["eff__952 push_u64"]
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
	14["cond__951 m_isMemory64"]
	11 --> 14
	31{{"Sϕ Codeptr "}}
	14 --> 31
	23 --> 31
	15 --> 31
</pre>`;
window.traces["I64_LOAD8_U"]["post_surgery 331"] = ''
window.traces["I64_LOAD8_U"]["post_surgery 331"] += `<pre class='graph'>---
config:
  layout: elk
---
graph TD
	3[\\"Finish"/]
	21 -. Codeptr .-> 3
	2 -. Stack .-> 3
	1 -. Trap Locals Globals Tables Memory Extra .-> 3
	1[/"Start"\\]
	2{{"Sϕ Stack "}}
	19 --> 2
	18 --> 2
	9 --> 2
	9["eff__957 push_u64"]
	6 --> 9
	0 -. Stack .-> 9
	0["index pop_u32"]
	1 -. Stack .-> 0
	6["val mach_readMemory32_u8_64"]
	15 --> 6
	0 --> 6
	28 --> 6
	28["offset__976 imm_readULEB32"]
	17 -. Codeptr .-> 28
	17{{"Sϕ Codeptr "}}
	13 --> 17
	14 --> 17
	4 --> 17
	4["flags imm_readU8"]
	1 -. Codeptr .-> 4
	14["memindex__964 imm_readULEB32"]
	4 -. Codeptr .-> 14
	13["cond__963 u8.!="]
	11 --> 13
	7 --> 13
	7["arg__966 0"]
	11["arg__965 u8.&"]
	4 --> 11
	8 --> 11
	8["arg__968 0x40u8"]
	15{"memindex ϕ"}
	13 --> 15
	14 --> 15
	5 --> 15
	5["memindex__970 0u"]
	18["eff__952 push_u64"]
	16 --> 18
	12 -. Stack .-> 18
	12["index pop_u64"]
	1 -. Stack .-> 12
	16["val mach_readMemory64_u8_64"]
	15 --> 16
	12 --> 16
	24 --> 16
	24["offset__973 imm_readULEB64"]
	17 -. Codeptr .-> 24
	19["cond__951 m_isMemory64"]
	15 --> 19
	21{{"Sϕ Codeptr "}}
	19 --> 21
	24 --> 21
	28 --> 21
</pre>`;
window.traces["I64_LOAD8_U"]["post_surgery 336"] = ''
window.traces["I64_LOAD8_U"]["post_surgery 336"] += `<pre class='graph'>---
config:
  layout: elk
---
graph TD
	3[\\"Finish"/]
	21 -. Codeptr .-> 3
	2 -. Stack .-> 3
	1 -. Trap Locals Globals Tables Memory Extra .-> 3
	1[/"Start"\\]
	2{{"Sϕ Stack "}}
	19 --> 2
	18 --> 2
	9 --> 2
	9["eff__957 push_u64"]
	6 --> 9
	0 -. Stack .-> 9
	0["index pop_u32"]
	1 -. Stack .-> 0
	6["val mach_readMemory32_u8_64"]
	15 --> 6
	0 --> 6
	28 --> 6
	28["offset__976 imm_readULEB32"]
	17 -. Codeptr .-> 28
	17{{"Sϕ Codeptr "}}
	13 --> 17
	39 --> 17
	4 --> 17
	4["flags imm_readU8"]
	1 -. Codeptr .-> 4
	39["memindex__964__983 imm_readULEB32"]
	4 -. Codeptr .-> 39
	13["cond__963 u8.!="]
	11 --> 13
	7 --> 13
	7["arg__966 0"]
	11["arg__965 u8.&"]
	4 --> 11
	8 --> 11
	8["arg__968 0x40u8"]
	15{"memindex ϕ"}
	13 --> 15
	39 --> 15
	41 --> 15
	41["memindex__970__984 0u"]
	18["eff__952 push_u64"]
	16 --> 18
	12 -. Stack .-> 18
	12["index pop_u64"]
	1 -. Stack .-> 12
	16["val mach_readMemory64_u8_64"]
	15 --> 16
	12 --> 16
	24 --> 16
	24["offset__973 imm_readULEB64"]
	17 -. Codeptr .-> 24
	19["cond__951 m_isMemory64"]
	15 --> 19
	21{{"Sϕ Codeptr "}}
	19 --> 21
	24 --> 21
	28 --> 21
</pre>`;
window.traces["I64_LOAD8_U"]["schedulerMermaid"] = ''
window.traces["I64_LOAD8_U"]["schedulerMermaid"] += `<pre class='graph'>graph TD
subgraph block_329["Block 329"]
	direction TB
	b329_3[\\"Finish"/]
end
phi_331 --> block_329
subgraph phi_331["Phi 331"]
	p331_2{{"Sϕ Stack "}}
	p331_21{{"Sϕ Codeptr "}}
end
block_332 --> phi_331
block_333 --> phi_331
subgraph block_332["Block 332"]
	direction TB
	b332_24["offset__973 imm_readULEB64"]
	b332_12["index pop_u64"]
	b332_16["val mach_readMemory64_u8_64"]
	b332_18["eff__952 push_u64"]
	b332_24 --> b332_12
	b332_12 --> b332_16
	b332_16 --> b332_18
end
branch_330 --> block_332
subgraph branch_330["Branch 330"]
	br330_19["cond__951 m_isMemory64"]

end
block_334 --> branch_330
subgraph block_334["Block 334"]
	direction TB
	b334_19["cond__951 m_isMemory64"]
end
phi_336 --> block_334
subgraph phi_336["Phi 336"]
	p336_17{{"Sϕ Codeptr "}}
	p336_17{{"Sϕ Codeptr "}}
	p336_17{{"Sϕ Codeptr "}}
	p336_17{{"Sϕ Codeptr "}}
	p336_15{"memindex ϕ"}
	p336_15{"memindex ϕ"}
	p336_15{"memindex ϕ"}
	p336_15{"memindex ϕ"}
end
block_337 --> phi_336
block_338 --> phi_336
subgraph block_337["Block 337"]
	direction TB
	b337_39["memindex__964__983 imm_readULEB32"]
end
branch_335 --> block_337
subgraph branch_335["Branch 335"]
	br335_13["cond__963 u8.!="]

end
block_339 --> branch_335
subgraph block_339["Block 339"]
	direction TB
	b339_8["arg__968 0x40u8"]
	b339_7["arg__966 0"]
	b339_11["arg__965 u8.&"]
	b339_13["cond__963 u8.!="]
	b339_8 --> b339_7
	b339_7 --> b339_11
	b339_11 --> b339_13
end
subgraph block_338["Block 338"]
	direction TB
	b338_41["memindex__970__984 0u"]
end
branch_335 --> block_338
subgraph block_333["Block 333"]
	direction TB
	b333_28["offset__976 imm_readULEB32"]
	b333_0["index pop_u32"]
	b333_6["val mach_readMemory32_u8_64"]
	b333_9["eff__957 push_u64"]
	b333_28 --> b333_0
	b333_0 --> b333_6
	b333_6 --> b333_9
end
branch_330 --> block_333

</pre>`;
window.traces["I64_LOAD8_U"]["scheduler_ssad"] = ''
window.traces["I64_LOAD8_U"]["scheduler_ssad"] += `<pre class=''>def arg__968 : byte = 0x40u8;
def arg__966 : byte = 0;
def arg__965 = u8.&(flags, arg__968);
def cond__963 = u8.!=(arg__965, arg__966);
if (cond__963) {
	def memindex__964__983 = imm_readULEB32();
} else {
	def memindex__970__984 : u32 = 0u;
}
// phis: memindex <- memindex__964__983; memindex <- memindex__970__984; memindex <- memindex__964__983; memindex <- memindex__970__984; memindex <- memindex__964__983; memindex <- memindex__970__984; memindex <- memindex__964__983; memindex <- memindex__970__984; 
def cond__951 = m_isMemory64(memindex);
if (cond__951) {
	def offset__973 = imm_readULEB64();
	def index = pop_u64();
	def val = mach_readMemory64_u8_64(memindex, index, offset__973);
	def eff__952 = push_u64(val);
} else {
	def offset__976 = imm_readULEB32();
	def index = pop_u32();
	def val = mach_readMemory32_u8_64(memindex, index, offset__976);
	def eff__957 = push_u64(val);
}
// phis: 
</pre>`;
window.traces["I64_LOAD8_U"]["scheduler_ssad_pretty"] = ''
window.traces["I64_LOAD8_U"]["scheduler_ssad_pretty"] += `<pre class=''>if (u8.!=(u8.&(flags, 0x40u8), 0)) {
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
	def offset1 = imm_readULEB32();
	def index = pop_u32();
	def val = mach_readMemory32_u8_64(memindex, index, offset1);
	push_u64(val);
}
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
	22["eff__957 push_u64"]
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
	10["memindex__964 imm_readULEB32"]
	3 -. Codeptr .-> 10
	9["cond__963 u8.!="]
	8 --> 9
	5 --> 9
	5["arg__966 0"]
	8["arg__965 u8.&"]
	3 --> 8
	6 --> 8
	6["arg__968 0x40u8"]
	11{"memindex ϕ"}
	9 --> 11
	10 --> 11
	4 --> 11
	4["memindex__970 0u"]
	30["eff__952 push_u64"]
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
	14["cond__951 m_isMemory64"]
	11 --> 14
	31{{"Sϕ Codeptr "}}
	14 --> 31
	23 --> 31
	15 --> 31
</pre>`;
window.traces["I64_LOAD8_U"]["unlem_schedule"] = ''
window.traces["I64_LOAD8_U"]["unlem_schedule"] += `<pre class=''>def flags = imm_readU8();
def arg__968 : byte = 0x40u8;
def arg__965 = u8.&(flags, arg__968);
def arg__966 : byte = 0;
def cond__963 = u8.!=(arg__965, arg__966);
var memindex: u32;
if (cond__963) {
	def memindex__964 = imm_readULEB32();
} else {
	def memindex__970 : u32 = 0u;
}
// phis: memindex <- memindex__964; memindex <- memindex__970; 
def cond__951 = m_isMemory64(memindex);
if (cond__951) {
	def offset = imm_readULEB64();
	def index = pop_u64();
	def val = mach_readMemory64_u8_64(memindex, index, offset);
	def eff__952 = push_u64(val);
} else {
	def offset = imm_readULEB32();
	def index = pop_u32();
	def val = mach_readMemory32_u8_64(memindex, index, offset);
	def eff__957 = push_u64(val);
}
// phis: 
</pre>`;
window.traces["I64_LOAD8_U_ul"] = {}
window.traces["I64_LOAD8_U_ul"]["post_surgery 342"] = ''
window.traces["I64_LOAD8_U_ul"]["post_surgery 342"] += `<pre class='graph'>---
config:
  layout: elk
---
graph TD
	3[\\"Finish"/]
	21 -. Codeptr .-> 3
	2 -. Stack .-> 3
	1 -. Trap Locals Globals Tables Memory Extra .-> 3
	1[/"Start"\\]
	2{{"Sϕ Stack "}}
	19 --> 2
	18 --> 2
	9 --> 2
	9["eff__957 push_u64"]
	6 --> 9
	0 -. Stack .-> 9
	0["index pop_u32"]
	1 -. Stack .-> 0
	6["val mach_readMemory32_u8_64"]
	15 --> 6
	0 --> 6
	28 --> 6
	28["offset__1004 imm_readULEB32"]
	17 -. Codeptr .-> 28
	17{{"Sϕ Codeptr "}}
	13 --> 17
	14 --> 17
	4 --> 17
	4["flags imm_readU8"]
	1 -. Codeptr .-> 4
	14["memindex__964 imm_readULEB32"]
	4 -. Codeptr .-> 14
	13["cond__963 u8.!="]
	11 --> 13
	7 --> 13
	7["arg__966 0"]
	11["arg__965 u8.&"]
	4 --> 11
	8 --> 11
	8["arg__968 0x40u8"]
	15{"memindex ϕ"}
	13 --> 15
	14 --> 15
	5 --> 15
	5["memindex__970 0u"]
	18["eff__952 push_u64"]
	16 --> 18
	12 -. Stack .-> 18
	12["index pop_u64"]
	1 -. Stack .-> 12
	16["val mach_readMemory64_u8_64"]
	15 --> 16
	12 --> 16
	24 --> 16
	24["offset__1001 imm_readULEB64"]
	17 -. Codeptr .-> 24
	19["cond__951 m_isMemory64"]
	15 --> 19
	21{{"Sϕ Codeptr "}}
	19 --> 21
	24 --> 21
	28 --> 21
</pre>`;
window.traces["I64_LOAD8_U_ul"]["post_surgery 347"] = ''
window.traces["I64_LOAD8_U_ul"]["post_surgery 347"] += `<pre class='graph'>---
config:
  layout: elk
---
graph TD
	3[\\"Finish"/]
	21 -. Codeptr .-> 3
	2 -. Stack .-> 3
	1 -. Trap Locals Globals Tables Memory Extra .-> 3
	1[/"Start"\\]
	2{{"Sϕ Stack "}}
	19 --> 2
	18 --> 2
	9 --> 2
	9["eff__957 push_u64"]
	6 --> 9
	0 -. Stack .-> 9
	0["index pop_u32"]
	1 -. Stack .-> 0
	6["val mach_readMemory32_u8_64"]
	15 --> 6
	0 --> 6
	28 --> 6
	28["offset__1004 imm_readULEB32"]
	17 -. Codeptr .-> 28
	17{{"Sϕ Codeptr "}}
	13 --> 17
	39 --> 17
	4 --> 17
	4["flags imm_readU8"]
	1 -. Codeptr .-> 4
	39["memindex__964__1011 imm_readULEB32"]
	4 -. Codeptr .-> 39
	13["cond__963 u8.!="]
	11 --> 13
	7 --> 13
	7["arg__966 0"]
	11["arg__965 u8.&"]
	4 --> 11
	8 --> 11
	8["arg__968 0x40u8"]
	15{"memindex ϕ"}
	13 --> 15
	39 --> 15
	41 --> 15
	41["memindex__970__1012 0u"]
	18["eff__952 push_u64"]
	16 --> 18
	12 -. Stack .-> 18
	12["index pop_u64"]
	1 -. Stack .-> 12
	16["val mach_readMemory64_u8_64"]
	15 --> 16
	12 --> 16
	24 --> 16
	24["offset__1001 imm_readULEB64"]
	17 -. Codeptr .-> 24
	19["cond__951 m_isMemory64"]
	15 --> 19
	21{{"Sϕ Codeptr "}}
	19 --> 21
	24 --> 21
	28 --> 21
</pre>`;
window.traces["I64_LOAD8_U"]["unlem_scheduler"] = ''
window.traces["I64_LOAD8_U"]["unlem_scheduler"] += `<pre class='graph'>graph TD
subgraph block_340["Block 340"]
	direction TB
	b340_3[\\"Finish"/]
end
phi_342 --> block_340
subgraph phi_342["Phi 342"]
	p342_2{{"Sϕ Stack "}}
	p342_21{{"Sϕ Codeptr "}}
end
block_343 --> phi_342
block_344 --> phi_342
subgraph block_343["Block 343"]
	direction TB
	b343_24["offset__1001 imm_readULEB64"]
	b343_12["index pop_u64"]
	b343_16["val mach_readMemory64_u8_64"]
	b343_18["eff__952 push_u64"]
	b343_24 --> b343_12
	b343_12 --> b343_16
	b343_16 --> b343_18
end
branch_341 --> block_343
subgraph branch_341["Branch 341"]
	br341_19["cond__951 m_isMemory64"]

end
block_345 --> branch_341
subgraph block_345["Block 345"]
	direction TB
	b345_19["cond__951 m_isMemory64"]
end
phi_347 --> block_345
subgraph phi_347["Phi 347"]
	p347_17{{"Sϕ Codeptr "}}
	p347_17{{"Sϕ Codeptr "}}
	p347_17{{"Sϕ Codeptr "}}
	p347_17{{"Sϕ Codeptr "}}
	p347_15{"memindex ϕ"}
	p347_15{"memindex ϕ"}
	p347_15{"memindex ϕ"}
	p347_15{"memindex ϕ"}
end
block_348 --> phi_347
block_349 --> phi_347
subgraph block_348["Block 348"]
	direction TB
	b348_39["memindex__964__1011 imm_readULEB32"]
end
branch_346 --> block_348
subgraph branch_346["Branch 346"]
	br346_13["cond__963 u8.!="]

end
block_350 --> branch_346
subgraph block_350["Block 350"]
	direction TB
	b350_8["arg__968 0x40u8"]
	b350_7["arg__966 0"]
	b350_11["arg__965 u8.&"]
	b350_13["cond__963 u8.!="]
	b350_8 --> b350_7
	b350_7 --> b350_11
	b350_11 --> b350_13
end
subgraph block_349["Block 349"]
	direction TB
	b349_41["memindex__970__1012 0u"]
end
branch_346 --> block_349
subgraph block_344["Block 344"]
	direction TB
	b344_28["offset__1004 imm_readULEB32"]
	b344_0["index pop_u32"]
	b344_6["val mach_readMemory32_u8_64"]
	b344_9["eff__957 push_u64"]
	b344_28 --> b344_0
	b344_0 --> b344_6
	b344_6 --> b344_9
end
branch_341 --> block_344

</pre>`;
window.traces["I64_LOAD8_U"]["unlem_scheduler_ssa"] = ''
window.traces["I64_LOAD8_U"]["unlem_scheduler_ssa"] += `<pre class=''>def arg__968 : byte = 0x40u8;
def arg__966 : byte = 0;
def arg__965 = u8.&(flags, arg__968);
def cond__963 = u8.!=(arg__965, arg__966);
if (cond__963) {
	def memindex__964__1011 = imm_readULEB32();
} else {
	def memindex__970__1012 : u32 = 0u;
}
// phis: memindex <- memindex__964__1011; memindex <- memindex__970__1012; memindex <- memindex__964__1011; memindex <- memindex__970__1012; memindex <- memindex__964__1011; memindex <- memindex__970__1012; memindex <- memindex__964__1011; memindex <- memindex__970__1012; 
def cond__951 = m_isMemory64(memindex);
if (cond__951) {
	def offset__1001 = imm_readULEB64();
	def index = pop_u64();
	def val = mach_readMemory64_u8_64(memindex, index, offset__1001);
	def eff__952 = push_u64(val);
} else {
	def offset__1004 = imm_readULEB32();
	def index = pop_u32();
	def val = mach_readMemory32_u8_64(memindex, index, offset__1004);
	def eff__957 = push_u64(val);
}
// phis: 
</pre>`;
window.traces["I64_LOAD8_U"]["unlem_scheduler_ssa"] += `<pre class=''>if (u8.!=(u8.&(flags, 0x40u8), 0)) {
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
	def offset1 = imm_readULEB32();
	def index = pop_u32();
	def val = mach_readMemory32_u8_64(memindex, index, offset1);
	push_u64(val);
}
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
	22["eff__957 push_u64"]
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
	10["memindex__964 imm_readULEB32"]
	3 -. Codeptr .-> 10
	9["cond__963 u8.!="]
	8 --> 9
	5 --> 9
	5["arg__966 0"]
	8["arg__965 u8.&"]
	3 --> 8
	6 --> 8
	6["arg__968 0x40u8"]
	11{"memindex ϕ"}
	9 --> 11
	10 --> 11
	4 --> 11
	4["memindex__970 0u"]
	30["eff__952 push_u64"]
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
	14["cond__951 m_isMemory64"]
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
	22["eff__957 push_u64"]
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
	10["memindex__964 imm_readULEB32"]
	3 -. Codeptr .-> 10
	9["cond__963 u8.!="]
	8 --> 9
	5 --> 9
	5["arg__966 0"]
	8["arg__965 u8.&"]
	3 --> 8
	6 --> 8
	6["arg__968 0x40u8"]
	11{"memindex ϕ"}
	9 --> 11
	10 --> 11
	4 --> 11
	4["memindex__970 0u"]
	30["eff__952 push_u64"]
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
	14["cond__951 m_isMemory64"]
	11 --> 14
	31{{"Sϕ Codeptr "}}
	14 --> 31
	23 --> 31
	15 --> 31
</pre>`;
window.traces["I64_LOAD8_U"]["scheduled"] = ''
window.traces["I64_LOAD8_U"]["scheduled"] += `<pre class=''>def flags = imm_readU8();
def arg__968 : byte = 0x40u8;
def arg__965 = u8.&(flags, arg__968);
def arg__966 : byte = 0;
def cond__963 = u8.!=(arg__965, arg__966);
var memindex: u32;
if (cond__963) {
	def memindex__964 = imm_readULEB32();
} else {
	def memindex__970 : u32 = 0u;
}
// phis: memindex <- memindex__964; memindex <- memindex__970; 
def cond__951 = m_isMemory64(memindex);
if (cond__951) {
	def offset = imm_readULEB64();
	def index = pop_u64();
	def val = mach_readMemory64_u8_64(memindex, index, offset);
	def eff__952 = push_u64(val);
} else {
	def offset = imm_readULEB32();
	def index = pop_u32();
	def val = mach_readMemory32_u8_64(memindex, index, offset);
	def eff__957 = push_u64(val);
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
def arg__1044 : byte = 0;
def arg__1046 : byte = 0x40u8;
def arg__1045 = (flags);
def arg__1043 = u8.&(arg__1045, arg__1046);
def cond__1041 = u8.!=(arg__1043, arg__1044);
if (cond__1041) {
	def memindex__1042 = imm_readULEB32();
}
// phis: memindex <- memindex__1042; 
def arg__1040 = (memindex);
def cond__1027 = m_isMemory64(arg__1040);
if (cond__1027) {
	def offset = imm_readULEB64();
	def index = pop_u64();
	def arg__1033 = (offset);
	def arg__1032 = (index);
	def arg__1031 = (memindex);
	def val = mach_readMemory64_u16_64(arg__1031, arg__1032, arg__1033);
	def arg__1030 = (val);
	def extend = U64_extend16_s(arg__1030);
	def arg__1029 = (extend);
	def eff__1028 = push_u64(arg__1029);
} else {
	def offset = imm_readULEB32();
	def index = pop_u32();
	def arg__1039 = (offset);
	def arg__1038 = (index);
	def arg__1037 = (memindex);
	def val = mach_readMemory32_u16_64(arg__1037, arg__1038, arg__1039);
	def arg__1036 = (val);
	def extend = U64_extend16_s(arg__1036);
	def arg__1035 = (extend);
	def eff__1034 = push_u64(arg__1035);
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
	24["eff__1034 push_u64"]
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
	10["memindex__1042 imm_readULEB32"]
	3 -. Codeptr .-> 10
	9["cond__1041 u8.!="]
	8 --> 9
	5 --> 9
	5["arg__1044 0"]
	8["arg__1043 u8.&"]
	3 --> 8
	6 --> 8
	6["arg__1046 0x40u8"]
	11{"memindex ϕ"}
	9 --> 11
	10 --> 11
	4 --> 11
	4["memindex__1047 0u"]
	34["eff__1028 push_u64"]
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
	14["cond__1027 m_isMemory64"]
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
	24["eff__1034 push_u64"]
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
	10["memindex__1042 imm_readULEB32"]
	3 -. Codeptr .-> 10
	9["cond__1041 u8.!="]
	8 --> 9
	5 --> 9
	5["arg__1044 0"]
	8["arg__1043 u8.&"]
	3 --> 8
	6 --> 8
	6["arg__1046 0x40u8"]
	11{"memindex ϕ"}
	9 --> 11
	10 --> 11
	4 --> 11
	4["memindex__1048 0u"]
	34["eff__1028 push_u64"]
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
	14["cond__1027 m_isMemory64"]
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
	24["eff__1034 push_u64"]
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
	10["memindex__1042 imm_readULEB32"]
	3 -. Codeptr .-> 10
	9["cond__1041 u8.!="]
	8 --> 9
	5 --> 9
	5["arg__1044 0"]
	8["arg__1043 u8.&"]
	3 --> 8
	6 --> 8
	6["arg__1046 0x40u8"]
	11{"memindex ϕ"}
	9 --> 11
	10 --> 11
	4 --> 11
	4["memindex__1048 0u"]
	34["eff__1028 push_u64"]
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
	14["cond__1027 m_isMemory64"]
	11 --> 14
	35{{"Sϕ Codeptr "}}
	14 --> 35
	25 --> 35
	15 --> 35
</pre>`;
window.traces["I64_LOAD16_S"]["post_surgery 353"] = ''
window.traces["I64_LOAD16_S"]["post_surgery 353"] += `<pre class='graph'>---
config:
  layout: elk
---
graph TD
	3[\\"Finish"/]
	6 -. Codeptr .-> 3
	9 -. Stack .-> 3
	2 -. Trap Locals Globals Tables Memory Extra .-> 3
	2[/"Start"\\]
	9{{"Sϕ Stack "}}
	22 --> 9
	4 --> 9
	14 --> 9
	14["eff__1034 push_u64"]
	12 --> 14
	0 -. Stack .-> 14
	0["index pop_u32"]
	2 -. Stack .-> 0
	12["extend U64_extend16_s"]
	7 --> 12
	7["val mach_readMemory32_u16_64"]
	19 --> 7
	0 --> 7
	32 --> 7
	32["offset__1056 imm_readULEB32"]
	20 -. Codeptr .-> 32
	20{{"Sϕ Codeptr "}}
	15 --> 20
	17 --> 20
	5 --> 20
	5["flags imm_readU8"]
	2 -. Codeptr .-> 5
	17["memindex__1042 imm_readULEB32"]
	5 -. Codeptr .-> 17
	15["cond__1041 u8.!="]
	13 --> 15
	10 --> 15
	10["arg__1044 0"]
	13["arg__1043 u8.&"]
	5 --> 13
	11 --> 13
	11["arg__1046 0x40u8"]
	19{"memindex ϕ"}
	15 --> 19
	17 --> 19
	8 --> 19
	8["memindex__1048 0u"]
	4["eff__1028 push_u64"]
	1 --> 4
	18 -. Stack .-> 4
	18["index pop_u64"]
	2 -. Stack .-> 18
	1["extend U64_extend16_s"]
	21 --> 1
	21["val mach_readMemory64_u16_64"]
	19 --> 21
	18 --> 21
	27 --> 21
	27["offset__1052 imm_readULEB64"]
	20 -. Codeptr .-> 27
	22["cond__1027 m_isMemory64"]
	19 --> 22
	6{{"Sϕ Codeptr "}}
	22 --> 6
	27 --> 6
	32 --> 6
</pre>`;
window.traces["I64_LOAD16_S"]["post_surgery 358"] = ''
window.traces["I64_LOAD16_S"]["post_surgery 358"] += `<pre class='graph'>---
config:
  layout: elk
---
graph TD
	3[\\"Finish"/]
	6 -. Codeptr .-> 3
	9 -. Stack .-> 3
	2 -. Trap Locals Globals Tables Memory Extra .-> 3
	2[/"Start"\\]
	9{{"Sϕ Stack "}}
	22 --> 9
	4 --> 9
	14 --> 9
	14["eff__1034 push_u64"]
	12 --> 14
	0 -. Stack .-> 14
	0["index pop_u32"]
	2 -. Stack .-> 0
	12["extend U64_extend16_s"]
	7 --> 12
	7["val mach_readMemory32_u16_64"]
	19 --> 7
	0 --> 7
	32 --> 7
	32["offset__1056 imm_readULEB32"]
	20 -. Codeptr .-> 32
	20{{"Sϕ Codeptr "}}
	15 --> 20
	44 --> 20
	5 --> 20
	5["flags imm_readU8"]
	2 -. Codeptr .-> 5
	44["memindex__1042__1065 imm_readULEB32"]
	5 -. Codeptr .-> 44
	15["cond__1041 u8.!="]
	13 --> 15
	10 --> 15
	10["arg__1044 0"]
	13["arg__1043 u8.&"]
	5 --> 13
	11 --> 13
	11["arg__1046 0x40u8"]
	19{"memindex ϕ"}
	15 --> 19
	44 --> 19
	46 --> 19
	46["memindex__1048__1066 0u"]
	4["eff__1028 push_u64"]
	1 --> 4
	18 -. Stack .-> 4
	18["index pop_u64"]
	2 -. Stack .-> 18
	1["extend U64_extend16_s"]
	21 --> 1
	21["val mach_readMemory64_u16_64"]
	19 --> 21
	18 --> 21
	27 --> 21
	27["offset__1052 imm_readULEB64"]
	20 -. Codeptr .-> 27
	22["cond__1027 m_isMemory64"]
	19 --> 22
	6{{"Sϕ Codeptr "}}
	22 --> 6
	27 --> 6
	32 --> 6
</pre>`;
window.traces["I64_LOAD16_S"]["schedulerMermaid"] = ''
window.traces["I64_LOAD16_S"]["schedulerMermaid"] += `<pre class='graph'>graph TD
subgraph block_351["Block 351"]
	direction TB
	b351_3[\\"Finish"/]
end
phi_353 --> block_351
subgraph phi_353["Phi 353"]
	p353_9{{"Sϕ Stack "}}
	p353_6{{"Sϕ Codeptr "}}
end
block_354 --> phi_353
block_355 --> phi_353
subgraph block_354["Block 354"]
	direction TB
	b354_27["offset__1052 imm_readULEB64"]
	b354_18["index pop_u64"]
	b354_21["val mach_readMemory64_u16_64"]
	b354_1["extend U64_extend16_s"]
	b354_4["eff__1028 push_u64"]
	b354_27 --> b354_18
	b354_18 --> b354_21
	b354_21 --> b354_1
	b354_1 --> b354_4
end
branch_352 --> block_354
subgraph branch_352["Branch 352"]
	br352_22["cond__1027 m_isMemory64"]

end
block_356 --> branch_352
subgraph block_356["Block 356"]
	direction TB
	b356_22["cond__1027 m_isMemory64"]
end
phi_358 --> block_356
subgraph phi_358["Phi 358"]
	p358_20{{"Sϕ Codeptr "}}
	p358_20{{"Sϕ Codeptr "}}
	p358_20{{"Sϕ Codeptr "}}
	p358_20{{"Sϕ Codeptr "}}
	p358_19{"memindex ϕ"}
	p358_19{"memindex ϕ"}
	p358_19{"memindex ϕ"}
	p358_19{"memindex ϕ"}
end
block_359 --> phi_358
block_360 --> phi_358
subgraph block_359["Block 359"]
	direction TB
	b359_44["memindex__1042__1065 imm_readULEB32"]
end
branch_357 --> block_359
subgraph branch_357["Branch 357"]
	br357_15["cond__1041 u8.!="]

end
block_361 --> branch_357
subgraph block_361["Block 361"]
	direction TB
	b361_11["arg__1046 0x40u8"]
	b361_10["arg__1044 0"]
	b361_13["arg__1043 u8.&"]
	b361_15["cond__1041 u8.!="]
	b361_11 --> b361_10
	b361_10 --> b361_13
	b361_13 --> b361_15
end
subgraph block_360["Block 360"]
	direction TB
	b360_46["memindex__1048__1066 0u"]
end
branch_357 --> block_360
subgraph block_355["Block 355"]
	direction TB
	b355_32["offset__1056 imm_readULEB32"]
	b355_0["index pop_u32"]
	b355_7["val mach_readMemory32_u16_64"]
	b355_12["extend U64_extend16_s"]
	b355_14["eff__1034 push_u64"]
	b355_32 --> b355_0
	b355_0 --> b355_7
	b355_7 --> b355_12
	b355_12 --> b355_14
end
branch_352 --> block_355

</pre>`;
window.traces["I64_LOAD16_S"]["scheduler_ssad"] = ''
window.traces["I64_LOAD16_S"]["scheduler_ssad"] += `<pre class=''>def arg__1046 : byte = 0x40u8;
def arg__1044 : byte = 0;
def arg__1043 = u8.&(flags, arg__1046);
def cond__1041 = u8.!=(arg__1043, arg__1044);
if (cond__1041) {
	def memindex__1042__1065 = imm_readULEB32();
} else {
	def memindex__1048__1066 : u32 = 0u;
}
// phis: memindex <- memindex__1042__1065; memindex <- memindex__1048__1066; memindex <- memindex__1042__1065; memindex <- memindex__1048__1066; memindex <- memindex__1042__1065; memindex <- memindex__1048__1066; memindex <- memindex__1042__1065; memindex <- memindex__1048__1066; 
def cond__1027 = m_isMemory64(memindex);
if (cond__1027) {
	def offset__1052 = imm_readULEB64();
	def index = pop_u64();
	def val = mach_readMemory64_u16_64(memindex, index, offset__1052);
	def extend = U64_extend16_s(val);
	def eff__1028 = push_u64(extend);
} else {
	def offset__1056 = imm_readULEB32();
	def index = pop_u32();
	def val = mach_readMemory32_u16_64(memindex, index, offset__1056);
	def extend = U64_extend16_s(val);
	def eff__1034 = push_u64(extend);
}
// phis: 
</pre>`;
window.traces["I64_LOAD16_S"]["scheduler_ssad_pretty"] = ''
window.traces["I64_LOAD16_S"]["scheduler_ssad_pretty"] += `<pre class=''>if (u8.!=(u8.&(flags, 0x40u8), 0)) {
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
	def offset1 = imm_readULEB32();
	def index = pop_u32();
	def val = mach_readMemory32_u16_64(memindex, index, offset1);
	def extend = U64_extend16_s(val);
	push_u64(extend);
}
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
	24["eff__1034 push_u64"]
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
	10["memindex__1042 imm_readULEB32"]
	3 -. Codeptr .-> 10
	9["cond__1041 u8.!="]
	8 --> 9
	5 --> 9
	5["arg__1044 0"]
	8["arg__1043 u8.&"]
	3 --> 8
	6 --> 8
	6["arg__1046 0x40u8"]
	11{"memindex ϕ"}
	9 --> 11
	10 --> 11
	4 --> 11
	4["memindex__1048 0u"]
	34["eff__1028 push_u64"]
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
	14["cond__1027 m_isMemory64"]
	11 --> 14
	35{{"Sϕ Codeptr "}}
	14 --> 35
	25 --> 35
	15 --> 35
</pre>`;
window.traces["I64_LOAD16_S"]["unlem_schedule"] = ''
window.traces["I64_LOAD16_S"]["unlem_schedule"] += `<pre class=''>def flags = imm_readU8();
def arg__1046 : byte = 0x40u8;
def arg__1043 = u8.&(flags, arg__1046);
def arg__1044 : byte = 0;
def cond__1041 = u8.!=(arg__1043, arg__1044);
var memindex: u32;
if (cond__1041) {
	def memindex__1042 = imm_readULEB32();
} else {
	def memindex__1048 : u32 = 0u;
}
// phis: memindex <- memindex__1042; memindex <- memindex__1048; 
def cond__1027 = m_isMemory64(memindex);
if (cond__1027) {
	def offset = imm_readULEB64();
	def index = pop_u64();
	def val = mach_readMemory64_u16_64(memindex, index, offset);
	def extend = U64_extend16_s(val);
	def eff__1028 = push_u64(extend);
} else {
	def offset = imm_readULEB32();
	def index = pop_u32();
	def val = mach_readMemory32_u16_64(memindex, index, offset);
	def extend = U64_extend16_s(val);
	def eff__1034 = push_u64(extend);
}
// phis: 
</pre>`;
window.traces["I64_LOAD16_S_ul"] = {}
window.traces["I64_LOAD16_S_ul"]["post_surgery 364"] = ''
window.traces["I64_LOAD16_S_ul"]["post_surgery 364"] += `<pre class='graph'>---
config:
  layout: elk
---
graph TD
	3[\\"Finish"/]
	6 -. Codeptr .-> 3
	9 -. Stack .-> 3
	2 -. Trap Locals Globals Tables Memory Extra .-> 3
	2[/"Start"\\]
	9{{"Sϕ Stack "}}
	22 --> 9
	4 --> 9
	14 --> 9
	14["eff__1034 push_u64"]
	12 --> 14
	0 -. Stack .-> 14
	0["index pop_u32"]
	2 -. Stack .-> 0
	12["extend U64_extend16_s"]
	7 --> 12
	7["val mach_readMemory32_u16_64"]
	19 --> 7
	0 --> 7
	32 --> 7
	32["offset__1088 imm_readULEB32"]
	20 -. Codeptr .-> 32
	20{{"Sϕ Codeptr "}}
	15 --> 20
	17 --> 20
	5 --> 20
	5["flags imm_readU8"]
	2 -. Codeptr .-> 5
	17["memindex__1042 imm_readULEB32"]
	5 -. Codeptr .-> 17
	15["cond__1041 u8.!="]
	13 --> 15
	10 --> 15
	10["arg__1044 0"]
	13["arg__1043 u8.&"]
	5 --> 13
	11 --> 13
	11["arg__1046 0x40u8"]
	19{"memindex ϕ"}
	15 --> 19
	17 --> 19
	8 --> 19
	8["memindex__1048 0u"]
	4["eff__1028 push_u64"]
	1 --> 4
	18 -. Stack .-> 4
	18["index pop_u64"]
	2 -. Stack .-> 18
	1["extend U64_extend16_s"]
	21 --> 1
	21["val mach_readMemory64_u16_64"]
	19 --> 21
	18 --> 21
	27 --> 21
	27["offset__1084 imm_readULEB64"]
	20 -. Codeptr .-> 27
	22["cond__1027 m_isMemory64"]
	19 --> 22
	6{{"Sϕ Codeptr "}}
	22 --> 6
	27 --> 6
	32 --> 6
</pre>`;
window.traces["I64_LOAD16_S_ul"]["post_surgery 369"] = ''
window.traces["I64_LOAD16_S_ul"]["post_surgery 369"] += `<pre class='graph'>---
config:
  layout: elk
---
graph TD
	3[\\"Finish"/]
	6 -. Codeptr .-> 3
	9 -. Stack .-> 3
	2 -. Trap Locals Globals Tables Memory Extra .-> 3
	2[/"Start"\\]
	9{{"Sϕ Stack "}}
	22 --> 9
	4 --> 9
	14 --> 9
	14["eff__1034 push_u64"]
	12 --> 14
	0 -. Stack .-> 14
	0["index pop_u32"]
	2 -. Stack .-> 0
	12["extend U64_extend16_s"]
	7 --> 12
	7["val mach_readMemory32_u16_64"]
	19 --> 7
	0 --> 7
	32 --> 7
	32["offset__1088 imm_readULEB32"]
	20 -. Codeptr .-> 32
	20{{"Sϕ Codeptr "}}
	15 --> 20
	44 --> 20
	5 --> 20
	5["flags imm_readU8"]
	2 -. Codeptr .-> 5
	44["memindex__1042__1097 imm_readULEB32"]
	5 -. Codeptr .-> 44
	15["cond__1041 u8.!="]
	13 --> 15
	10 --> 15
	10["arg__1044 0"]
	13["arg__1043 u8.&"]
	5 --> 13
	11 --> 13
	11["arg__1046 0x40u8"]
	19{"memindex ϕ"}
	15 --> 19
	44 --> 19
	46 --> 19
	46["memindex__1048__1098 0u"]
	4["eff__1028 push_u64"]
	1 --> 4
	18 -. Stack .-> 4
	18["index pop_u64"]
	2 -. Stack .-> 18
	1["extend U64_extend16_s"]
	21 --> 1
	21["val mach_readMemory64_u16_64"]
	19 --> 21
	18 --> 21
	27 --> 21
	27["offset__1084 imm_readULEB64"]
	20 -. Codeptr .-> 27
	22["cond__1027 m_isMemory64"]
	19 --> 22
	6{{"Sϕ Codeptr "}}
	22 --> 6
	27 --> 6
	32 --> 6
</pre>`;
window.traces["I64_LOAD16_S"]["unlem_scheduler"] = ''
window.traces["I64_LOAD16_S"]["unlem_scheduler"] += `<pre class='graph'>graph TD
subgraph block_362["Block 362"]
	direction TB
	b362_3[\\"Finish"/]
end
phi_364 --> block_362
subgraph phi_364["Phi 364"]
	p364_9{{"Sϕ Stack "}}
	p364_6{{"Sϕ Codeptr "}}
end
block_365 --> phi_364
block_366 --> phi_364
subgraph block_365["Block 365"]
	direction TB
	b365_27["offset__1084 imm_readULEB64"]
	b365_18["index pop_u64"]
	b365_21["val mach_readMemory64_u16_64"]
	b365_1["extend U64_extend16_s"]
	b365_4["eff__1028 push_u64"]
	b365_27 --> b365_18
	b365_18 --> b365_21
	b365_21 --> b365_1
	b365_1 --> b365_4
end
branch_363 --> block_365
subgraph branch_363["Branch 363"]
	br363_22["cond__1027 m_isMemory64"]

end
block_367 --> branch_363
subgraph block_367["Block 367"]
	direction TB
	b367_22["cond__1027 m_isMemory64"]
end
phi_369 --> block_367
subgraph phi_369["Phi 369"]
	p369_20{{"Sϕ Codeptr "}}
	p369_20{{"Sϕ Codeptr "}}
	p369_20{{"Sϕ Codeptr "}}
	p369_20{{"Sϕ Codeptr "}}
	p369_19{"memindex ϕ"}
	p369_19{"memindex ϕ"}
	p369_19{"memindex ϕ"}
	p369_19{"memindex ϕ"}
end
block_370 --> phi_369
block_371 --> phi_369
subgraph block_370["Block 370"]
	direction TB
	b370_44["memindex__1042__1097 imm_readULEB32"]
end
branch_368 --> block_370
subgraph branch_368["Branch 368"]
	br368_15["cond__1041 u8.!="]

end
block_372 --> branch_368
subgraph block_372["Block 372"]
	direction TB
	b372_11["arg__1046 0x40u8"]
	b372_10["arg__1044 0"]
	b372_13["arg__1043 u8.&"]
	b372_15["cond__1041 u8.!="]
	b372_11 --> b372_10
	b372_10 --> b372_13
	b372_13 --> b372_15
end
subgraph block_371["Block 371"]
	direction TB
	b371_46["memindex__1048__1098 0u"]
end
branch_368 --> block_371
subgraph block_366["Block 366"]
	direction TB
	b366_32["offset__1088 imm_readULEB32"]
	b366_0["index pop_u32"]
	b366_7["val mach_readMemory32_u16_64"]
	b366_12["extend U64_extend16_s"]
	b366_14["eff__1034 push_u64"]
	b366_32 --> b366_0
	b366_0 --> b366_7
	b366_7 --> b366_12
	b366_12 --> b366_14
end
branch_363 --> block_366

</pre>`;
window.traces["I64_LOAD16_S"]["unlem_scheduler_ssa"] = ''
window.traces["I64_LOAD16_S"]["unlem_scheduler_ssa"] += `<pre class=''>def arg__1046 : byte = 0x40u8;
def arg__1044 : byte = 0;
def arg__1043 = u8.&(flags, arg__1046);
def cond__1041 = u8.!=(arg__1043, arg__1044);
if (cond__1041) {
	def memindex__1042__1097 = imm_readULEB32();
} else {
	def memindex__1048__1098 : u32 = 0u;
}
// phis: memindex <- memindex__1042__1097; memindex <- memindex__1048__1098; memindex <- memindex__1042__1097; memindex <- memindex__1048__1098; memindex <- memindex__1042__1097; memindex <- memindex__1048__1098; memindex <- memindex__1042__1097; memindex <- memindex__1048__1098; 
def cond__1027 = m_isMemory64(memindex);
if (cond__1027) {
	def offset__1084 = imm_readULEB64();
	def index = pop_u64();
	def val = mach_readMemory64_u16_64(memindex, index, offset__1084);
	def extend = U64_extend16_s(val);
	def eff__1028 = push_u64(extend);
} else {
	def offset__1088 = imm_readULEB32();
	def index = pop_u32();
	def val = mach_readMemory32_u16_64(memindex, index, offset__1088);
	def extend = U64_extend16_s(val);
	def eff__1034 = push_u64(extend);
}
// phis: 
</pre>`;
window.traces["I64_LOAD16_S"]["unlem_scheduler_ssa"] += `<pre class=''>if (u8.!=(u8.&(flags, 0x40u8), 0)) {
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
	def offset1 = imm_readULEB32();
	def index = pop_u32();
	def val = mach_readMemory32_u16_64(memindex, index, offset1);
	def extend = U64_extend16_s(val);
	push_u64(extend);
}
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
	24["eff__1034 push_u64"]
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
	10["memindex__1042 imm_readULEB32"]
	3 -. Codeptr .-> 10
	9["cond__1041 u8.!="]
	8 --> 9
	5 --> 9
	5["arg__1044 0"]
	8["arg__1043 u8.&"]
	3 --> 8
	6 --> 8
	6["arg__1046 0x40u8"]
	11{"memindex ϕ"}
	9 --> 11
	10 --> 11
	4 --> 11
	4["memindex__1048 0u"]
	34["eff__1028 push_u64"]
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
	14["cond__1027 m_isMemory64"]
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
	24["eff__1034 push_u64"]
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
	10["memindex__1042 imm_readULEB32"]
	3 -. Codeptr .-> 10
	9["cond__1041 u8.!="]
	8 --> 9
	5 --> 9
	5["arg__1044 0"]
	8["arg__1043 u8.&"]
	3 --> 8
	6 --> 8
	6["arg__1046 0x40u8"]
	11{"memindex ϕ"}
	9 --> 11
	10 --> 11
	4 --> 11
	4["memindex__1048 0u"]
	34["eff__1028 push_u64"]
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
	14["cond__1027 m_isMemory64"]
	11 --> 14
	35{{"Sϕ Codeptr "}}
	14 --> 35
	25 --> 35
	15 --> 35
</pre>`;
window.traces["I64_LOAD16_S"]["scheduled"] = ''
window.traces["I64_LOAD16_S"]["scheduled"] += `<pre class=''>def flags = imm_readU8();
def arg__1046 : byte = 0x40u8;
def arg__1043 = u8.&(flags, arg__1046);
def arg__1044 : byte = 0;
def cond__1041 = u8.!=(arg__1043, arg__1044);
var memindex: u32;
if (cond__1041) {
	def memindex__1042 = imm_readULEB32();
} else {
	def memindex__1048 : u32 = 0u;
}
// phis: memindex <- memindex__1042; memindex <- memindex__1048; 
def cond__1027 = m_isMemory64(memindex);
if (cond__1027) {
	def offset = imm_readULEB64();
	def index = pop_u64();
	def val = mach_readMemory64_u16_64(memindex, index, offset);
	def extend = U64_extend16_s(val);
	def eff__1028 = push_u64(extend);
} else {
	def offset = imm_readULEB32();
	def index = pop_u32();
	def val = mach_readMemory32_u16_64(memindex, index, offset);
	def extend = U64_extend16_s(val);
	def eff__1034 = push_u64(extend);
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
def arg__1128 : byte = 0;
def arg__1130 : byte = 0x40u8;
def arg__1129 = (flags);
def arg__1127 = u8.&(arg__1129, arg__1130);
def cond__1125 = u8.!=(arg__1127, arg__1128);
if (cond__1125) {
	def memindex__1126 = imm_readULEB32();
}
// phis: memindex <- memindex__1126; 
def arg__1124 = (memindex);
def cond__1113 = m_isMemory64(arg__1124);
if (cond__1113) {
	def offset = imm_readULEB64();
	def index = pop_u64();
	def arg__1118 = (offset);
	def arg__1117 = (index);
	def arg__1116 = (memindex);
	def val = mach_readMemory64_u16_64(arg__1116, arg__1117, arg__1118);
	def arg__1115 = (val);
	def eff__1114 = push_u64(arg__1115);
} else {
	def offset = imm_readULEB32();
	def index = pop_u32();
	def arg__1123 = (offset);
	def arg__1122 = (index);
	def arg__1121 = (memindex);
	def val = mach_readMemory32_u16_64(arg__1121, arg__1122, arg__1123);
	def arg__1120 = (val);
	def eff__1119 = push_u64(arg__1120);
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
	22["eff__1119 push_u64"]
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
	10["memindex__1126 imm_readULEB32"]
	3 -. Codeptr .-> 10
	9["cond__1125 u8.!="]
	8 --> 9
	5 --> 9
	5["arg__1128 0"]
	8["arg__1127 u8.&"]
	3 --> 8
	6 --> 8
	6["arg__1130 0x40u8"]
	11{"memindex ϕ"}
	9 --> 11
	10 --> 11
	4 --> 11
	4["memindex__1131 0u"]
	30["eff__1114 push_u64"]
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
	14["cond__1113 m_isMemory64"]
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
	22["eff__1119 push_u64"]
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
	10["memindex__1126 imm_readULEB32"]
	3 -. Codeptr .-> 10
	9["cond__1125 u8.!="]
	8 --> 9
	5 --> 9
	5["arg__1128 0"]
	8["arg__1127 u8.&"]
	3 --> 8
	6 --> 8
	6["arg__1130 0x40u8"]
	11{"memindex ϕ"}
	9 --> 11
	10 --> 11
	4 --> 11
	4["memindex__1132 0u"]
	30["eff__1114 push_u64"]
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
	14["cond__1113 m_isMemory64"]
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
	22["eff__1119 push_u64"]
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
	10["memindex__1126 imm_readULEB32"]
	3 -. Codeptr .-> 10
	9["cond__1125 u8.!="]
	8 --> 9
	5 --> 9
	5["arg__1128 0"]
	8["arg__1127 u8.&"]
	3 --> 8
	6 --> 8
	6["arg__1130 0x40u8"]
	11{"memindex ϕ"}
	9 --> 11
	10 --> 11
	4 --> 11
	4["memindex__1132 0u"]
	30["eff__1114 push_u64"]
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
	14["cond__1113 m_isMemory64"]
	11 --> 14
	31{{"Sϕ Codeptr "}}
	14 --> 31
	23 --> 31
	15 --> 31
</pre>`;
window.traces["I64_LOAD16_U"]["post_surgery 375"] = ''
window.traces["I64_LOAD16_U"]["post_surgery 375"] += `<pre class='graph'>---
config:
  layout: elk
---
graph TD
	3[\\"Finish"/]
	21 -. Codeptr .-> 3
	2 -. Stack .-> 3
	1 -. Trap Locals Globals Tables Memory Extra .-> 3
	1[/"Start"\\]
	2{{"Sϕ Stack "}}
	19 --> 2
	18 --> 2
	9 --> 2
	9["eff__1119 push_u64"]
	6 --> 9
	0 -. Stack .-> 9
	0["index pop_u32"]
	1 -. Stack .-> 0
	6["val mach_readMemory32_u16_64"]
	15 --> 6
	0 --> 6
	28 --> 6
	28["offset__1138 imm_readULEB32"]
	17 -. Codeptr .-> 28
	17{{"Sϕ Codeptr "}}
	13 --> 17
	14 --> 17
	4 --> 17
	4["flags imm_readU8"]
	1 -. Codeptr .-> 4
	14["memindex__1126 imm_readULEB32"]
	4 -. Codeptr .-> 14
	13["cond__1125 u8.!="]
	11 --> 13
	7 --> 13
	7["arg__1128 0"]
	11["arg__1127 u8.&"]
	4 --> 11
	8 --> 11
	8["arg__1130 0x40u8"]
	15{"memindex ϕ"}
	13 --> 15
	14 --> 15
	5 --> 15
	5["memindex__1132 0u"]
	18["eff__1114 push_u64"]
	16 --> 18
	12 -. Stack .-> 18
	12["index pop_u64"]
	1 -. Stack .-> 12
	16["val mach_readMemory64_u16_64"]
	15 --> 16
	12 --> 16
	24 --> 16
	24["offset__1135 imm_readULEB64"]
	17 -. Codeptr .-> 24
	19["cond__1113 m_isMemory64"]
	15 --> 19
	21{{"Sϕ Codeptr "}}
	19 --> 21
	24 --> 21
	28 --> 21
</pre>`;
window.traces["I64_LOAD16_U"]["post_surgery 380"] = ''
window.traces["I64_LOAD16_U"]["post_surgery 380"] += `<pre class='graph'>---
config:
  layout: elk
---
graph TD
	3[\\"Finish"/]
	21 -. Codeptr .-> 3
	2 -. Stack .-> 3
	1 -. Trap Locals Globals Tables Memory Extra .-> 3
	1[/"Start"\\]
	2{{"Sϕ Stack "}}
	19 --> 2
	18 --> 2
	9 --> 2
	9["eff__1119 push_u64"]
	6 --> 9
	0 -. Stack .-> 9
	0["index pop_u32"]
	1 -. Stack .-> 0
	6["val mach_readMemory32_u16_64"]
	15 --> 6
	0 --> 6
	28 --> 6
	28["offset__1138 imm_readULEB32"]
	17 -. Codeptr .-> 28
	17{{"Sϕ Codeptr "}}
	13 --> 17
	39 --> 17
	4 --> 17
	4["flags imm_readU8"]
	1 -. Codeptr .-> 4
	39["memindex__1126__1145 imm_readULEB32"]
	4 -. Codeptr .-> 39
	13["cond__1125 u8.!="]
	11 --> 13
	7 --> 13
	7["arg__1128 0"]
	11["arg__1127 u8.&"]
	4 --> 11
	8 --> 11
	8["arg__1130 0x40u8"]
	15{"memindex ϕ"}
	13 --> 15
	39 --> 15
	41 --> 15
	41["memindex__1132__1146 0u"]
	18["eff__1114 push_u64"]
	16 --> 18
	12 -. Stack .-> 18
	12["index pop_u64"]
	1 -. Stack .-> 12
	16["val mach_readMemory64_u16_64"]
	15 --> 16
	12 --> 16
	24 --> 16
	24["offset__1135 imm_readULEB64"]
	17 -. Codeptr .-> 24
	19["cond__1113 m_isMemory64"]
	15 --> 19
	21{{"Sϕ Codeptr "}}
	19 --> 21
	24 --> 21
	28 --> 21
</pre>`;
window.traces["I64_LOAD16_U"]["schedulerMermaid"] = ''
window.traces["I64_LOAD16_U"]["schedulerMermaid"] += `<pre class='graph'>graph TD
subgraph block_373["Block 373"]
	direction TB
	b373_3[\\"Finish"/]
end
phi_375 --> block_373
subgraph phi_375["Phi 375"]
	p375_2{{"Sϕ Stack "}}
	p375_21{{"Sϕ Codeptr "}}
end
block_376 --> phi_375
block_377 --> phi_375
subgraph block_376["Block 376"]
	direction TB
	b376_24["offset__1135 imm_readULEB64"]
	b376_12["index pop_u64"]
	b376_16["val mach_readMemory64_u16_64"]
	b376_18["eff__1114 push_u64"]
	b376_24 --> b376_12
	b376_12 --> b376_16
	b376_16 --> b376_18
end
branch_374 --> block_376
subgraph branch_374["Branch 374"]
	br374_19["cond__1113 m_isMemory64"]

end
block_378 --> branch_374
subgraph block_378["Block 378"]
	direction TB
	b378_19["cond__1113 m_isMemory64"]
end
phi_380 --> block_378
subgraph phi_380["Phi 380"]
	p380_17{{"Sϕ Codeptr "}}
	p380_17{{"Sϕ Codeptr "}}
	p380_17{{"Sϕ Codeptr "}}
	p380_17{{"Sϕ Codeptr "}}
	p380_15{"memindex ϕ"}
	p380_15{"memindex ϕ"}
	p380_15{"memindex ϕ"}
	p380_15{"memindex ϕ"}
end
block_381 --> phi_380
block_382 --> phi_380
subgraph block_381["Block 381"]
	direction TB
	b381_39["memindex__1126__1145 imm_readULEB32"]
end
branch_379 --> block_381
subgraph branch_379["Branch 379"]
	br379_13["cond__1125 u8.!="]

end
block_383 --> branch_379
subgraph block_383["Block 383"]
	direction TB
	b383_8["arg__1130 0x40u8"]
	b383_7["arg__1128 0"]
	b383_11["arg__1127 u8.&"]
	b383_13["cond__1125 u8.!="]
	b383_8 --> b383_7
	b383_7 --> b383_11
	b383_11 --> b383_13
end
subgraph block_382["Block 382"]
	direction TB
	b382_41["memindex__1132__1146 0u"]
end
branch_379 --> block_382
subgraph block_377["Block 377"]
	direction TB
	b377_28["offset__1138 imm_readULEB32"]
	b377_0["index pop_u32"]
	b377_6["val mach_readMemory32_u16_64"]
	b377_9["eff__1119 push_u64"]
	b377_28 --> b377_0
	b377_0 --> b377_6
	b377_6 --> b377_9
end
branch_374 --> block_377

</pre>`;
window.traces["I64_LOAD16_U"]["scheduler_ssad"] = ''
window.traces["I64_LOAD16_U"]["scheduler_ssad"] += `<pre class=''>def arg__1130 : byte = 0x40u8;
def arg__1128 : byte = 0;
def arg__1127 = u8.&(flags, arg__1130);
def cond__1125 = u8.!=(arg__1127, arg__1128);
if (cond__1125) {
	def memindex__1126__1145 = imm_readULEB32();
} else {
	def memindex__1132__1146 : u32 = 0u;
}
// phis: memindex <- memindex__1126__1145; memindex <- memindex__1132__1146; memindex <- memindex__1126__1145; memindex <- memindex__1132__1146; memindex <- memindex__1126__1145; memindex <- memindex__1132__1146; memindex <- memindex__1126__1145; memindex <- memindex__1132__1146; 
def cond__1113 = m_isMemory64(memindex);
if (cond__1113) {
	def offset__1135 = imm_readULEB64();
	def index = pop_u64();
	def val = mach_readMemory64_u16_64(memindex, index, offset__1135);
	def eff__1114 = push_u64(val);
} else {
	def offset__1138 = imm_readULEB32();
	def index = pop_u32();
	def val = mach_readMemory32_u16_64(memindex, index, offset__1138);
	def eff__1119 = push_u64(val);
}
// phis: 
</pre>`;
window.traces["I64_LOAD16_U"]["scheduler_ssad_pretty"] = ''
window.traces["I64_LOAD16_U"]["scheduler_ssad_pretty"] += `<pre class=''>if (u8.!=(u8.&(flags, 0x40u8), 0)) {
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
	def offset1 = imm_readULEB32();
	def index = pop_u32();
	def val = mach_readMemory32_u16_64(memindex, index, offset1);
	push_u64(val);
}
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
	22["eff__1119 push_u64"]
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
	10["memindex__1126 imm_readULEB32"]
	3 -. Codeptr .-> 10
	9["cond__1125 u8.!="]
	8 --> 9
	5 --> 9
	5["arg__1128 0"]
	8["arg__1127 u8.&"]
	3 --> 8
	6 --> 8
	6["arg__1130 0x40u8"]
	11{"memindex ϕ"}
	9 --> 11
	10 --> 11
	4 --> 11
	4["memindex__1132 0u"]
	30["eff__1114 push_u64"]
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
	14["cond__1113 m_isMemory64"]
	11 --> 14
	31{{"Sϕ Codeptr "}}
	14 --> 31
	23 --> 31
	15 --> 31
</pre>`;
window.traces["I64_LOAD16_U"]["unlem_schedule"] = ''
window.traces["I64_LOAD16_U"]["unlem_schedule"] += `<pre class=''>def flags = imm_readU8();
def arg__1130 : byte = 0x40u8;
def arg__1127 = u8.&(flags, arg__1130);
def arg__1128 : byte = 0;
def cond__1125 = u8.!=(arg__1127, arg__1128);
var memindex: u32;
if (cond__1125) {
	def memindex__1126 = imm_readULEB32();
} else {
	def memindex__1132 : u32 = 0u;
}
// phis: memindex <- memindex__1126; memindex <- memindex__1132; 
def cond__1113 = m_isMemory64(memindex);
if (cond__1113) {
	def offset = imm_readULEB64();
	def index = pop_u64();
	def val = mach_readMemory64_u16_64(memindex, index, offset);
	def eff__1114 = push_u64(val);
} else {
	def offset = imm_readULEB32();
	def index = pop_u32();
	def val = mach_readMemory32_u16_64(memindex, index, offset);
	def eff__1119 = push_u64(val);
}
// phis: 
</pre>`;
window.traces["I64_LOAD16_U_ul"] = {}
window.traces["I64_LOAD16_U_ul"]["post_surgery 386"] = ''
window.traces["I64_LOAD16_U_ul"]["post_surgery 386"] += `<pre class='graph'>---
config:
  layout: elk
---
graph TD
	3[\\"Finish"/]
	21 -. Codeptr .-> 3
	2 -. Stack .-> 3
	1 -. Trap Locals Globals Tables Memory Extra .-> 3
	1[/"Start"\\]
	2{{"Sϕ Stack "}}
	19 --> 2
	18 --> 2
	9 --> 2
	9["eff__1119 push_u64"]
	6 --> 9
	0 -. Stack .-> 9
	0["index pop_u32"]
	1 -. Stack .-> 0
	6["val mach_readMemory32_u16_64"]
	15 --> 6
	0 --> 6
	28 --> 6
	28["offset__1166 imm_readULEB32"]
	17 -. Codeptr .-> 28
	17{{"Sϕ Codeptr "}}
	13 --> 17
	14 --> 17
	4 --> 17
	4["flags imm_readU8"]
	1 -. Codeptr .-> 4
	14["memindex__1126 imm_readULEB32"]
	4 -. Codeptr .-> 14
	13["cond__1125 u8.!="]
	11 --> 13
	7 --> 13
	7["arg__1128 0"]
	11["arg__1127 u8.&"]
	4 --> 11
	8 --> 11
	8["arg__1130 0x40u8"]
	15{"memindex ϕ"}
	13 --> 15
	14 --> 15
	5 --> 15
	5["memindex__1132 0u"]
	18["eff__1114 push_u64"]
	16 --> 18
	12 -. Stack .-> 18
	12["index pop_u64"]
	1 -. Stack .-> 12
	16["val mach_readMemory64_u16_64"]
	15 --> 16
	12 --> 16
	24 --> 16
	24["offset__1163 imm_readULEB64"]
	17 -. Codeptr .-> 24
	19["cond__1113 m_isMemory64"]
	15 --> 19
	21{{"Sϕ Codeptr "}}
	19 --> 21
	24 --> 21
	28 --> 21
</pre>`;
window.traces["I64_LOAD16_U_ul"]["post_surgery 391"] = ''
window.traces["I64_LOAD16_U_ul"]["post_surgery 391"] += `<pre class='graph'>---
config:
  layout: elk
---
graph TD
	3[\\"Finish"/]
	21 -. Codeptr .-> 3
	2 -. Stack .-> 3
	1 -. Trap Locals Globals Tables Memory Extra .-> 3
	1[/"Start"\\]
	2{{"Sϕ Stack "}}
	19 --> 2
	18 --> 2
	9 --> 2
	9["eff__1119 push_u64"]
	6 --> 9
	0 -. Stack .-> 9
	0["index pop_u32"]
	1 -. Stack .-> 0
	6["val mach_readMemory32_u16_64"]
	15 --> 6
	0 --> 6
	28 --> 6
	28["offset__1166 imm_readULEB32"]
	17 -. Codeptr .-> 28
	17{{"Sϕ Codeptr "}}
	13 --> 17
	39 --> 17
	4 --> 17
	4["flags imm_readU8"]
	1 -. Codeptr .-> 4
	39["memindex__1126__1173 imm_readULEB32"]
	4 -. Codeptr .-> 39
	13["cond__1125 u8.!="]
	11 --> 13
	7 --> 13
	7["arg__1128 0"]
	11["arg__1127 u8.&"]
	4 --> 11
	8 --> 11
	8["arg__1130 0x40u8"]
	15{"memindex ϕ"}
	13 --> 15
	39 --> 15
	41 --> 15
	41["memindex__1132__1174 0u"]
	18["eff__1114 push_u64"]
	16 --> 18
	12 -. Stack .-> 18
	12["index pop_u64"]
	1 -. Stack .-> 12
	16["val mach_readMemory64_u16_64"]
	15 --> 16
	12 --> 16
	24 --> 16
	24["offset__1163 imm_readULEB64"]
	17 -. Codeptr .-> 24
	19["cond__1113 m_isMemory64"]
	15 --> 19
	21{{"Sϕ Codeptr "}}
	19 --> 21
	24 --> 21
	28 --> 21
</pre>`;
window.traces["I64_LOAD16_U"]["unlem_scheduler"] = ''
window.traces["I64_LOAD16_U"]["unlem_scheduler"] += `<pre class='graph'>graph TD
subgraph block_384["Block 384"]
	direction TB
	b384_3[\\"Finish"/]
end
phi_386 --> block_384
subgraph phi_386["Phi 386"]
	p386_2{{"Sϕ Stack "}}
	p386_21{{"Sϕ Codeptr "}}
end
block_387 --> phi_386
block_388 --> phi_386
subgraph block_387["Block 387"]
	direction TB
	b387_24["offset__1163 imm_readULEB64"]
	b387_12["index pop_u64"]
	b387_16["val mach_readMemory64_u16_64"]
	b387_18["eff__1114 push_u64"]
	b387_24 --> b387_12
	b387_12 --> b387_16
	b387_16 --> b387_18
end
branch_385 --> block_387
subgraph branch_385["Branch 385"]
	br385_19["cond__1113 m_isMemory64"]

end
block_389 --> branch_385
subgraph block_389["Block 389"]
	direction TB
	b389_19["cond__1113 m_isMemory64"]
end
phi_391 --> block_389
subgraph phi_391["Phi 391"]
	p391_17{{"Sϕ Codeptr "}}
	p391_17{{"Sϕ Codeptr "}}
	p391_17{{"Sϕ Codeptr "}}
	p391_17{{"Sϕ Codeptr "}}
	p391_15{"memindex ϕ"}
	p391_15{"memindex ϕ"}
	p391_15{"memindex ϕ"}
	p391_15{"memindex ϕ"}
end
block_392 --> phi_391
block_393 --> phi_391
subgraph block_392["Block 392"]
	direction TB
	b392_39["memindex__1126__1173 imm_readULEB32"]
end
branch_390 --> block_392
subgraph branch_390["Branch 390"]
	br390_13["cond__1125 u8.!="]

end
block_394 --> branch_390
subgraph block_394["Block 394"]
	direction TB
	b394_8["arg__1130 0x40u8"]
	b394_7["arg__1128 0"]
	b394_11["arg__1127 u8.&"]
	b394_13["cond__1125 u8.!="]
	b394_8 --> b394_7
	b394_7 --> b394_11
	b394_11 --> b394_13
end
subgraph block_393["Block 393"]
	direction TB
	b393_41["memindex__1132__1174 0u"]
end
branch_390 --> block_393
subgraph block_388["Block 388"]
	direction TB
	b388_28["offset__1166 imm_readULEB32"]
	b388_0["index pop_u32"]
	b388_6["val mach_readMemory32_u16_64"]
	b388_9["eff__1119 push_u64"]
	b388_28 --> b388_0
	b388_0 --> b388_6
	b388_6 --> b388_9
end
branch_385 --> block_388

</pre>`;
window.traces["I64_LOAD16_U"]["unlem_scheduler_ssa"] = ''
window.traces["I64_LOAD16_U"]["unlem_scheduler_ssa"] += `<pre class=''>def arg__1130 : byte = 0x40u8;
def arg__1128 : byte = 0;
def arg__1127 = u8.&(flags, arg__1130);
def cond__1125 = u8.!=(arg__1127, arg__1128);
if (cond__1125) {
	def memindex__1126__1173 = imm_readULEB32();
} else {
	def memindex__1132__1174 : u32 = 0u;
}
// phis: memindex <- memindex__1126__1173; memindex <- memindex__1132__1174; memindex <- memindex__1126__1173; memindex <- memindex__1132__1174; memindex <- memindex__1126__1173; memindex <- memindex__1132__1174; memindex <- memindex__1126__1173; memindex <- memindex__1132__1174; 
def cond__1113 = m_isMemory64(memindex);
if (cond__1113) {
	def offset__1163 = imm_readULEB64();
	def index = pop_u64();
	def val = mach_readMemory64_u16_64(memindex, index, offset__1163);
	def eff__1114 = push_u64(val);
} else {
	def offset__1166 = imm_readULEB32();
	def index = pop_u32();
	def val = mach_readMemory32_u16_64(memindex, index, offset__1166);
	def eff__1119 = push_u64(val);
}
// phis: 
</pre>`;
window.traces["I64_LOAD16_U"]["unlem_scheduler_ssa"] += `<pre class=''>if (u8.!=(u8.&(flags, 0x40u8), 0)) {
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
	def offset1 = imm_readULEB32();
	def index = pop_u32();
	def val = mach_readMemory32_u16_64(memindex, index, offset1);
	push_u64(val);
}
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
	22["eff__1119 push_u64"]
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
	10["memindex__1126 imm_readULEB32"]
	3 -. Codeptr .-> 10
	9["cond__1125 u8.!="]
	8 --> 9
	5 --> 9
	5["arg__1128 0"]
	8["arg__1127 u8.&"]
	3 --> 8
	6 --> 8
	6["arg__1130 0x40u8"]
	11{"memindex ϕ"}
	9 --> 11
	10 --> 11
	4 --> 11
	4["memindex__1132 0u"]
	30["eff__1114 push_u64"]
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
	14["cond__1113 m_isMemory64"]
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
	22["eff__1119 push_u64"]
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
	10["memindex__1126 imm_readULEB32"]
	3 -. Codeptr .-> 10
	9["cond__1125 u8.!="]
	8 --> 9
	5 --> 9
	5["arg__1128 0"]
	8["arg__1127 u8.&"]
	3 --> 8
	6 --> 8
	6["arg__1130 0x40u8"]
	11{"memindex ϕ"}
	9 --> 11
	10 --> 11
	4 --> 11
	4["memindex__1132 0u"]
	30["eff__1114 push_u64"]
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
	14["cond__1113 m_isMemory64"]
	11 --> 14
	31{{"Sϕ Codeptr "}}
	14 --> 31
	23 --> 31
	15 --> 31
</pre>`;
window.traces["I64_LOAD16_U"]["scheduled"] = ''
window.traces["I64_LOAD16_U"]["scheduled"] += `<pre class=''>def flags = imm_readU8();
def arg__1130 : byte = 0x40u8;
def arg__1127 = u8.&(flags, arg__1130);
def arg__1128 : byte = 0;
def cond__1125 = u8.!=(arg__1127, arg__1128);
var memindex: u32;
if (cond__1125) {
	def memindex__1126 = imm_readULEB32();
} else {
	def memindex__1132 : u32 = 0u;
}
// phis: memindex <- memindex__1126; memindex <- memindex__1132; 
def cond__1113 = m_isMemory64(memindex);
if (cond__1113) {
	def offset = imm_readULEB64();
	def index = pop_u64();
	def val = mach_readMemory64_u16_64(memindex, index, offset);
	def eff__1114 = push_u64(val);
} else {
	def offset = imm_readULEB32();
	def index = pop_u32();
	def val = mach_readMemory32_u16_64(memindex, index, offset);
	def eff__1119 = push_u64(val);
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
def arg__1206 : byte = 0;
def arg__1208 : byte = 0x40u8;
def arg__1207 = (flags);
def arg__1205 = u8.&(arg__1207, arg__1208);
def cond__1203 = u8.!=(arg__1205, arg__1206);
if (cond__1203) {
	def memindex__1204 = imm_readULEB32();
}
// phis: memindex <- memindex__1204; 
def arg__1202 = (memindex);
def cond__1189 = m_isMemory64(arg__1202);
if (cond__1189) {
	def offset = imm_readULEB64();
	def index = pop_u64();
	def arg__1195 = (offset);
	def arg__1194 = (index);
	def arg__1193 = (memindex);
	def val = mach_readMemory64_u32_64(arg__1193, arg__1194, arg__1195);
	def arg__1192 = (val);
	def extend = U64_extend32_s(arg__1192);
	def arg__1191 = (extend);
	def eff__1190 = push_u64(arg__1191);
} else {
	def offset = imm_readULEB32();
	def index = pop_u32();
	def arg__1201 = (offset);
	def arg__1200 = (index);
	def arg__1199 = (memindex);
	def val = mach_readMemory32_u32_64(arg__1199, arg__1200, arg__1201);
	def arg__1198 = (val);
	def extend = U64_extend32_s(arg__1198);
	def arg__1197 = (extend);
	def eff__1196 = push_u64(arg__1197);
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
	24["eff__1196 push_u64"]
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
	10["memindex__1204 imm_readULEB32"]
	3 -. Codeptr .-> 10
	9["cond__1203 u8.!="]
	8 --> 9
	5 --> 9
	5["arg__1206 0"]
	8["arg__1205 u8.&"]
	3 --> 8
	6 --> 8
	6["arg__1208 0x40u8"]
	11{"memindex ϕ"}
	9 --> 11
	10 --> 11
	4 --> 11
	4["memindex__1209 0u"]
	34["eff__1190 push_u64"]
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
	14["cond__1189 m_isMemory64"]
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
	24["eff__1196 push_u64"]
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
	10["memindex__1204 imm_readULEB32"]
	3 -. Codeptr .-> 10
	9["cond__1203 u8.!="]
	8 --> 9
	5 --> 9
	5["arg__1206 0"]
	8["arg__1205 u8.&"]
	3 --> 8
	6 --> 8
	6["arg__1208 0x40u8"]
	11{"memindex ϕ"}
	9 --> 11
	10 --> 11
	4 --> 11
	4["memindex__1210 0u"]
	34["eff__1190 push_u64"]
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
	14["cond__1189 m_isMemory64"]
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
	24["eff__1196 push_u64"]
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
	10["memindex__1204 imm_readULEB32"]
	3 -. Codeptr .-> 10
	9["cond__1203 u8.!="]
	8 --> 9
	5 --> 9
	5["arg__1206 0"]
	8["arg__1205 u8.&"]
	3 --> 8
	6 --> 8
	6["arg__1208 0x40u8"]
	11{"memindex ϕ"}
	9 --> 11
	10 --> 11
	4 --> 11
	4["memindex__1210 0u"]
	34["eff__1190 push_u64"]
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
	14["cond__1189 m_isMemory64"]
	11 --> 14
	35{{"Sϕ Codeptr "}}
	14 --> 35
	25 --> 35
	15 --> 35
</pre>`;
window.traces["I64_LOAD32_S"]["post_surgery 397"] = ''
window.traces["I64_LOAD32_S"]["post_surgery 397"] += `<pre class='graph'>---
config:
  layout: elk
---
graph TD
	3[\\"Finish"/]
	6 -. Codeptr .-> 3
	9 -. Stack .-> 3
	2 -. Trap Locals Globals Tables Memory Extra .-> 3
	2[/"Start"\\]
	9{{"Sϕ Stack "}}
	22 --> 9
	4 --> 9
	14 --> 9
	14["eff__1196 push_u64"]
	12 --> 14
	0 -. Stack .-> 14
	0["index pop_u32"]
	2 -. Stack .-> 0
	12["extend U64_extend32_s"]
	7 --> 12
	7["val mach_readMemory32_u32_64"]
	19 --> 7
	0 --> 7
	32 --> 7
	32["offset__1218 imm_readULEB32"]
	20 -. Codeptr .-> 32
	20{{"Sϕ Codeptr "}}
	15 --> 20
	17 --> 20
	5 --> 20
	5["flags imm_readU8"]
	2 -. Codeptr .-> 5
	17["memindex__1204 imm_readULEB32"]
	5 -. Codeptr .-> 17
	15["cond__1203 u8.!="]
	13 --> 15
	10 --> 15
	10["arg__1206 0"]
	13["arg__1205 u8.&"]
	5 --> 13
	11 --> 13
	11["arg__1208 0x40u8"]
	19{"memindex ϕ"}
	15 --> 19
	17 --> 19
	8 --> 19
	8["memindex__1210 0u"]
	4["eff__1190 push_u64"]
	1 --> 4
	18 -. Stack .-> 4
	18["index pop_u64"]
	2 -. Stack .-> 18
	1["extend U64_extend32_s"]
	21 --> 1
	21["val mach_readMemory64_u32_64"]
	19 --> 21
	18 --> 21
	27 --> 21
	27["offset__1214 imm_readULEB64"]
	20 -. Codeptr .-> 27
	22["cond__1189 m_isMemory64"]
	19 --> 22
	6{{"Sϕ Codeptr "}}
	22 --> 6
	27 --> 6
	32 --> 6
</pre>`;
window.traces["I64_LOAD32_S"]["post_surgery 402"] = ''
window.traces["I64_LOAD32_S"]["post_surgery 402"] += `<pre class='graph'>---
config:
  layout: elk
---
graph TD
	3[\\"Finish"/]
	6 -. Codeptr .-> 3
	9 -. Stack .-> 3
	2 -. Trap Locals Globals Tables Memory Extra .-> 3
	2[/"Start"\\]
	9{{"Sϕ Stack "}}
	22 --> 9
	4 --> 9
	14 --> 9
	14["eff__1196 push_u64"]
	12 --> 14
	0 -. Stack .-> 14
	0["index pop_u32"]
	2 -. Stack .-> 0
	12["extend U64_extend32_s"]
	7 --> 12
	7["val mach_readMemory32_u32_64"]
	19 --> 7
	0 --> 7
	32 --> 7
	32["offset__1218 imm_readULEB32"]
	20 -. Codeptr .-> 32
	20{{"Sϕ Codeptr "}}
	15 --> 20
	44 --> 20
	5 --> 20
	5["flags imm_readU8"]
	2 -. Codeptr .-> 5
	44["memindex__1204__1227 imm_readULEB32"]
	5 -. Codeptr .-> 44
	15["cond__1203 u8.!="]
	13 --> 15
	10 --> 15
	10["arg__1206 0"]
	13["arg__1205 u8.&"]
	5 --> 13
	11 --> 13
	11["arg__1208 0x40u8"]
	19{"memindex ϕ"}
	15 --> 19
	44 --> 19
	46 --> 19
	46["memindex__1210__1228 0u"]
	4["eff__1190 push_u64"]
	1 --> 4
	18 -. Stack .-> 4
	18["index pop_u64"]
	2 -. Stack .-> 18
	1["extend U64_extend32_s"]
	21 --> 1
	21["val mach_readMemory64_u32_64"]
	19 --> 21
	18 --> 21
	27 --> 21
	27["offset__1214 imm_readULEB64"]
	20 -. Codeptr .-> 27
	22["cond__1189 m_isMemory64"]
	19 --> 22
	6{{"Sϕ Codeptr "}}
	22 --> 6
	27 --> 6
	32 --> 6
</pre>`;
window.traces["I64_LOAD32_S"]["schedulerMermaid"] = ''
window.traces["I64_LOAD32_S"]["schedulerMermaid"] += `<pre class='graph'>graph TD
subgraph block_395["Block 395"]
	direction TB
	b395_3[\\"Finish"/]
end
phi_397 --> block_395
subgraph phi_397["Phi 397"]
	p397_9{{"Sϕ Stack "}}
	p397_6{{"Sϕ Codeptr "}}
end
block_398 --> phi_397
block_399 --> phi_397
subgraph block_398["Block 398"]
	direction TB
	b398_27["offset__1214 imm_readULEB64"]
	b398_18["index pop_u64"]
	b398_21["val mach_readMemory64_u32_64"]
	b398_1["extend U64_extend32_s"]
	b398_4["eff__1190 push_u64"]
	b398_27 --> b398_18
	b398_18 --> b398_21
	b398_21 --> b398_1
	b398_1 --> b398_4
end
branch_396 --> block_398
subgraph branch_396["Branch 396"]
	br396_22["cond__1189 m_isMemory64"]

end
block_400 --> branch_396
subgraph block_400["Block 400"]
	direction TB
	b400_22["cond__1189 m_isMemory64"]
end
phi_402 --> block_400
subgraph phi_402["Phi 402"]
	p402_20{{"Sϕ Codeptr "}}
	p402_20{{"Sϕ Codeptr "}}
	p402_20{{"Sϕ Codeptr "}}
	p402_20{{"Sϕ Codeptr "}}
	p402_19{"memindex ϕ"}
	p402_19{"memindex ϕ"}
	p402_19{"memindex ϕ"}
	p402_19{"memindex ϕ"}
end
block_403 --> phi_402
block_404 --> phi_402
subgraph block_403["Block 403"]
	direction TB
	b403_44["memindex__1204__1227 imm_readULEB32"]
end
branch_401 --> block_403
subgraph branch_401["Branch 401"]
	br401_15["cond__1203 u8.!="]

end
block_405 --> branch_401
subgraph block_405["Block 405"]
	direction TB
	b405_11["arg__1208 0x40u8"]
	b405_10["arg__1206 0"]
	b405_13["arg__1205 u8.&"]
	b405_15["cond__1203 u8.!="]
	b405_11 --> b405_10
	b405_10 --> b405_13
	b405_13 --> b405_15
end
subgraph block_404["Block 404"]
	direction TB
	b404_46["memindex__1210__1228 0u"]
end
branch_401 --> block_404
subgraph block_399["Block 399"]
	direction TB
	b399_32["offset__1218 imm_readULEB32"]
	b399_0["index pop_u32"]
	b399_7["val mach_readMemory32_u32_64"]
	b399_12["extend U64_extend32_s"]
	b399_14["eff__1196 push_u64"]
	b399_32 --> b399_0
	b399_0 --> b399_7
	b399_7 --> b399_12
	b399_12 --> b399_14
end
branch_396 --> block_399

</pre>`;
window.traces["I64_LOAD32_S"]["scheduler_ssad"] = ''
window.traces["I64_LOAD32_S"]["scheduler_ssad"] += `<pre class=''>def arg__1208 : byte = 0x40u8;
def arg__1206 : byte = 0;
def arg__1205 = u8.&(flags, arg__1208);
def cond__1203 = u8.!=(arg__1205, arg__1206);
if (cond__1203) {
	def memindex__1204__1227 = imm_readULEB32();
} else {
	def memindex__1210__1228 : u32 = 0u;
}
// phis: memindex <- memindex__1204__1227; memindex <- memindex__1210__1228; memindex <- memindex__1204__1227; memindex <- memindex__1210__1228; memindex <- memindex__1204__1227; memindex <- memindex__1210__1228; memindex <- memindex__1204__1227; memindex <- memindex__1210__1228; 
def cond__1189 = m_isMemory64(memindex);
if (cond__1189) {
	def offset__1214 = imm_readULEB64();
	def index = pop_u64();
	def val = mach_readMemory64_u32_64(memindex, index, offset__1214);
	def extend = U64_extend32_s(val);
	def eff__1190 = push_u64(extend);
} else {
	def offset__1218 = imm_readULEB32();
	def index = pop_u32();
	def val = mach_readMemory32_u32_64(memindex, index, offset__1218);
	def extend = U64_extend32_s(val);
	def eff__1196 = push_u64(extend);
}
// phis: 
</pre>`;
window.traces["I64_LOAD32_S"]["scheduler_ssad_pretty"] = ''
window.traces["I64_LOAD32_S"]["scheduler_ssad_pretty"] += `<pre class=''>if (u8.!=(u8.&(flags, 0x40u8), 0)) {
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
	def offset1 = imm_readULEB32();
	def index = pop_u32();
	def val = mach_readMemory32_u32_64(memindex, index, offset1);
	def extend = U64_extend32_s(val);
	push_u64(extend);
}
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
	24["eff__1196 push_u64"]
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
	10["memindex__1204 imm_readULEB32"]
	3 -. Codeptr .-> 10
	9["cond__1203 u8.!="]
	8 --> 9
	5 --> 9
	5["arg__1206 0"]
	8["arg__1205 u8.&"]
	3 --> 8
	6 --> 8
	6["arg__1208 0x40u8"]
	11{"memindex ϕ"}
	9 --> 11
	10 --> 11
	4 --> 11
	4["memindex__1210 0u"]
	34["eff__1190 push_u64"]
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
	14["cond__1189 m_isMemory64"]
	11 --> 14
	35{{"Sϕ Codeptr "}}
	14 --> 35
	25 --> 35
	15 --> 35
</pre>`;
window.traces["I64_LOAD32_S"]["unlem_schedule"] = ''
window.traces["I64_LOAD32_S"]["unlem_schedule"] += `<pre class=''>def flags = imm_readU8();
def arg__1208 : byte = 0x40u8;
def arg__1205 = u8.&(flags, arg__1208);
def arg__1206 : byte = 0;
def cond__1203 = u8.!=(arg__1205, arg__1206);
var memindex: u32;
if (cond__1203) {
	def memindex__1204 = imm_readULEB32();
} else {
	def memindex__1210 : u32 = 0u;
}
// phis: memindex <- memindex__1204; memindex <- memindex__1210; 
def cond__1189 = m_isMemory64(memindex);
if (cond__1189) {
	def offset = imm_readULEB64();
	def index = pop_u64();
	def val = mach_readMemory64_u32_64(memindex, index, offset);
	def extend = U64_extend32_s(val);
	def eff__1190 = push_u64(extend);
} else {
	def offset = imm_readULEB32();
	def index = pop_u32();
	def val = mach_readMemory32_u32_64(memindex, index, offset);
	def extend = U64_extend32_s(val);
	def eff__1196 = push_u64(extend);
}
// phis: 
</pre>`;
window.traces["I64_LOAD32_S_ul"] = {}
window.traces["I64_LOAD32_S_ul"]["post_surgery 408"] = ''
window.traces["I64_LOAD32_S_ul"]["post_surgery 408"] += `<pre class='graph'>---
config:
  layout: elk
---
graph TD
	3[\\"Finish"/]
	6 -. Codeptr .-> 3
	9 -. Stack .-> 3
	2 -. Trap Locals Globals Tables Memory Extra .-> 3
	2[/"Start"\\]
	9{{"Sϕ Stack "}}
	22 --> 9
	4 --> 9
	14 --> 9
	14["eff__1196 push_u64"]
	12 --> 14
	0 -. Stack .-> 14
	0["index pop_u32"]
	2 -. Stack .-> 0
	12["extend U64_extend32_s"]
	7 --> 12
	7["val mach_readMemory32_u32_64"]
	19 --> 7
	0 --> 7
	32 --> 7
	32["offset__1250 imm_readULEB32"]
	20 -. Codeptr .-> 32
	20{{"Sϕ Codeptr "}}
	15 --> 20
	17 --> 20
	5 --> 20
	5["flags imm_readU8"]
	2 -. Codeptr .-> 5
	17["memindex__1204 imm_readULEB32"]
	5 -. Codeptr .-> 17
	15["cond__1203 u8.!="]
	13 --> 15
	10 --> 15
	10["arg__1206 0"]
	13["arg__1205 u8.&"]
	5 --> 13
	11 --> 13
	11["arg__1208 0x40u8"]
	19{"memindex ϕ"}
	15 --> 19
	17 --> 19
	8 --> 19
	8["memindex__1210 0u"]
	4["eff__1190 push_u64"]
	1 --> 4
	18 -. Stack .-> 4
	18["index pop_u64"]
	2 -. Stack .-> 18
	1["extend U64_extend32_s"]
	21 --> 1
	21["val mach_readMemory64_u32_64"]
	19 --> 21
	18 --> 21
	27 --> 21
	27["offset__1246 imm_readULEB64"]
	20 -. Codeptr .-> 27
	22["cond__1189 m_isMemory64"]
	19 --> 22
	6{{"Sϕ Codeptr "}}
	22 --> 6
	27 --> 6
	32 --> 6
</pre>`;
window.traces["I64_LOAD32_S_ul"]["post_surgery 413"] = ''
window.traces["I64_LOAD32_S_ul"]["post_surgery 413"] += `<pre class='graph'>---
config:
  layout: elk
---
graph TD
	3[\\"Finish"/]
	6 -. Codeptr .-> 3
	9 -. Stack .-> 3
	2 -. Trap Locals Globals Tables Memory Extra .-> 3
	2[/"Start"\\]
	9{{"Sϕ Stack "}}
	22 --> 9
	4 --> 9
	14 --> 9
	14["eff__1196 push_u64"]
	12 --> 14
	0 -. Stack .-> 14
	0["index pop_u32"]
	2 -. Stack .-> 0
	12["extend U64_extend32_s"]
	7 --> 12
	7["val mach_readMemory32_u32_64"]
	19 --> 7
	0 --> 7
	32 --> 7
	32["offset__1250 imm_readULEB32"]
	20 -. Codeptr .-> 32
	20{{"Sϕ Codeptr "}}
	15 --> 20
	44 --> 20
	5 --> 20
	5["flags imm_readU8"]
	2 -. Codeptr .-> 5
	44["memindex__1204__1259 imm_readULEB32"]
	5 -. Codeptr .-> 44
	15["cond__1203 u8.!="]
	13 --> 15
	10 --> 15
	10["arg__1206 0"]
	13["arg__1205 u8.&"]
	5 --> 13
	11 --> 13
	11["arg__1208 0x40u8"]
	19{"memindex ϕ"}
	15 --> 19
	44 --> 19
	46 --> 19
	46["memindex__1210__1260 0u"]
	4["eff__1190 push_u64"]
	1 --> 4
	18 -. Stack .-> 4
	18["index pop_u64"]
	2 -. Stack .-> 18
	1["extend U64_extend32_s"]
	21 --> 1
	21["val mach_readMemory64_u32_64"]
	19 --> 21
	18 --> 21
	27 --> 21
	27["offset__1246 imm_readULEB64"]
	20 -. Codeptr .-> 27
	22["cond__1189 m_isMemory64"]
	19 --> 22
	6{{"Sϕ Codeptr "}}
	22 --> 6
	27 --> 6
	32 --> 6
</pre>`;
window.traces["I64_LOAD32_S"]["unlem_scheduler"] = ''
window.traces["I64_LOAD32_S"]["unlem_scheduler"] += `<pre class='graph'>graph TD
subgraph block_406["Block 406"]
	direction TB
	b406_3[\\"Finish"/]
end
phi_408 --> block_406
subgraph phi_408["Phi 408"]
	p408_9{{"Sϕ Stack "}}
	p408_6{{"Sϕ Codeptr "}}
end
block_409 --> phi_408
block_410 --> phi_408
subgraph block_409["Block 409"]
	direction TB
	b409_27["offset__1246 imm_readULEB64"]
	b409_18["index pop_u64"]
	b409_21["val mach_readMemory64_u32_64"]
	b409_1["extend U64_extend32_s"]
	b409_4["eff__1190 push_u64"]
	b409_27 --> b409_18
	b409_18 --> b409_21
	b409_21 --> b409_1
	b409_1 --> b409_4
end
branch_407 --> block_409
subgraph branch_407["Branch 407"]
	br407_22["cond__1189 m_isMemory64"]

end
block_411 --> branch_407
subgraph block_411["Block 411"]
	direction TB
	b411_22["cond__1189 m_isMemory64"]
end
phi_413 --> block_411
subgraph phi_413["Phi 413"]
	p413_20{{"Sϕ Codeptr "}}
	p413_20{{"Sϕ Codeptr "}}
	p413_20{{"Sϕ Codeptr "}}
	p413_20{{"Sϕ Codeptr "}}
	p413_19{"memindex ϕ"}
	p413_19{"memindex ϕ"}
	p413_19{"memindex ϕ"}
	p413_19{"memindex ϕ"}
end
block_414 --> phi_413
block_415 --> phi_413
subgraph block_414["Block 414"]
	direction TB
	b414_44["memindex__1204__1259 imm_readULEB32"]
end
branch_412 --> block_414
subgraph branch_412["Branch 412"]
	br412_15["cond__1203 u8.!="]

end
block_416 --> branch_412
subgraph block_416["Block 416"]
	direction TB
	b416_11["arg__1208 0x40u8"]
	b416_10["arg__1206 0"]
	b416_13["arg__1205 u8.&"]
	b416_15["cond__1203 u8.!="]
	b416_11 --> b416_10
	b416_10 --> b416_13
	b416_13 --> b416_15
end
subgraph block_415["Block 415"]
	direction TB
	b415_46["memindex__1210__1260 0u"]
end
branch_412 --> block_415
subgraph block_410["Block 410"]
	direction TB
	b410_32["offset__1250 imm_readULEB32"]
	b410_0["index pop_u32"]
	b410_7["val mach_readMemory32_u32_64"]
	b410_12["extend U64_extend32_s"]
	b410_14["eff__1196 push_u64"]
	b410_32 --> b410_0
	b410_0 --> b410_7
	b410_7 --> b410_12
	b410_12 --> b410_14
end
branch_407 --> block_410

</pre>`;
window.traces["I64_LOAD32_S"]["unlem_scheduler_ssa"] = ''
window.traces["I64_LOAD32_S"]["unlem_scheduler_ssa"] += `<pre class=''>def arg__1208 : byte = 0x40u8;
def arg__1206 : byte = 0;
def arg__1205 = u8.&(flags, arg__1208);
def cond__1203 = u8.!=(arg__1205, arg__1206);
if (cond__1203) {
	def memindex__1204__1259 = imm_readULEB32();
} else {
	def memindex__1210__1260 : u32 = 0u;
}
// phis: memindex <- memindex__1204__1259; memindex <- memindex__1210__1260; memindex <- memindex__1204__1259; memindex <- memindex__1210__1260; memindex <- memindex__1204__1259; memindex <- memindex__1210__1260; memindex <- memindex__1204__1259; memindex <- memindex__1210__1260; 
def cond__1189 = m_isMemory64(memindex);
if (cond__1189) {
	def offset__1246 = imm_readULEB64();
	def index = pop_u64();
	def val = mach_readMemory64_u32_64(memindex, index, offset__1246);
	def extend = U64_extend32_s(val);
	def eff__1190 = push_u64(extend);
} else {
	def offset__1250 = imm_readULEB32();
	def index = pop_u32();
	def val = mach_readMemory32_u32_64(memindex, index, offset__1250);
	def extend = U64_extend32_s(val);
	def eff__1196 = push_u64(extend);
}
// phis: 
</pre>`;
window.traces["I64_LOAD32_S"]["unlem_scheduler_ssa"] += `<pre class=''>if (u8.!=(u8.&(flags, 0x40u8), 0)) {
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
	def offset1 = imm_readULEB32();
	def index = pop_u32();
	def val = mach_readMemory32_u32_64(memindex, index, offset1);
	def extend = U64_extend32_s(val);
	push_u64(extend);
}
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
	24["eff__1196 push_u64"]
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
	10["memindex__1204 imm_readULEB32"]
	3 -. Codeptr .-> 10
	9["cond__1203 u8.!="]
	8 --> 9
	5 --> 9
	5["arg__1206 0"]
	8["arg__1205 u8.&"]
	3 --> 8
	6 --> 8
	6["arg__1208 0x40u8"]
	11{"memindex ϕ"}
	9 --> 11
	10 --> 11
	4 --> 11
	4["memindex__1210 0u"]
	34["eff__1190 push_u64"]
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
	14["cond__1189 m_isMemory64"]
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
	24["eff__1196 push_u64"]
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
	10["memindex__1204 imm_readULEB32"]
	3 -. Codeptr .-> 10
	9["cond__1203 u8.!="]
	8 --> 9
	5 --> 9
	5["arg__1206 0"]
	8["arg__1205 u8.&"]
	3 --> 8
	6 --> 8
	6["arg__1208 0x40u8"]
	11{"memindex ϕ"}
	9 --> 11
	10 --> 11
	4 --> 11
	4["memindex__1210 0u"]
	34["eff__1190 push_u64"]
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
	14["cond__1189 m_isMemory64"]
	11 --> 14
	35{{"Sϕ Codeptr "}}
	14 --> 35
	25 --> 35
	15 --> 35
</pre>`;
window.traces["I64_LOAD32_S"]["scheduled"] = ''
window.traces["I64_LOAD32_S"]["scheduled"] += `<pre class=''>def flags = imm_readU8();
def arg__1208 : byte = 0x40u8;
def arg__1205 = u8.&(flags, arg__1208);
def arg__1206 : byte = 0;
def cond__1203 = u8.!=(arg__1205, arg__1206);
var memindex: u32;
if (cond__1203) {
	def memindex__1204 = imm_readULEB32();
} else {
	def memindex__1210 : u32 = 0u;
}
// phis: memindex <- memindex__1204; memindex <- memindex__1210; 
def cond__1189 = m_isMemory64(memindex);
if (cond__1189) {
	def offset = imm_readULEB64();
	def index = pop_u64();
	def val = mach_readMemory64_u32_64(memindex, index, offset);
	def extend = U64_extend32_s(val);
	def eff__1190 = push_u64(extend);
} else {
	def offset = imm_readULEB32();
	def index = pop_u32();
	def val = mach_readMemory32_u32_64(memindex, index, offset);
	def extend = U64_extend32_s(val);
	def eff__1196 = push_u64(extend);
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
def arg__1290 : byte = 0;
def arg__1292 : byte = 0x40u8;
def arg__1291 = (flags);
def arg__1289 = u8.&(arg__1291, arg__1292);
def cond__1287 = u8.!=(arg__1289, arg__1290);
if (cond__1287) {
	def memindex__1288 = imm_readULEB32();
}
// phis: memindex <- memindex__1288; 
def arg__1286 = (memindex);
def cond__1275 = m_isMemory64(arg__1286);
if (cond__1275) {
	def offset = imm_readULEB64();
	def index = pop_u64();
	def arg__1280 = (offset);
	def arg__1279 = (index);
	def arg__1278 = (memindex);
	def val = mach_readMemory64_u32_64(arg__1278, arg__1279, arg__1280);
	def arg__1277 = (val);
	def eff__1276 = push_u64(arg__1277);
} else {
	def offset = imm_readULEB32();
	def index = pop_u32();
	def arg__1285 = (offset);
	def arg__1284 = (index);
	def arg__1283 = (memindex);
	def val = mach_readMemory32_u32_64(arg__1283, arg__1284, arg__1285);
	def arg__1282 = (val);
	def eff__1281 = push_u64(arg__1282);
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
	22["eff__1281 push_u64"]
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
	10["memindex__1288 imm_readULEB32"]
	3 -. Codeptr .-> 10
	9["cond__1287 u8.!="]
	8 --> 9
	5 --> 9
	5["arg__1290 0"]
	8["arg__1289 u8.&"]
	3 --> 8
	6 --> 8
	6["arg__1292 0x40u8"]
	11{"memindex ϕ"}
	9 --> 11
	10 --> 11
	4 --> 11
	4["memindex__1293 0u"]
	30["eff__1276 push_u64"]
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
	14["cond__1275 m_isMemory64"]
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
	22["eff__1281 push_u64"]
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
	10["memindex__1288 imm_readULEB32"]
	3 -. Codeptr .-> 10
	9["cond__1287 u8.!="]
	8 --> 9
	5 --> 9
	5["arg__1290 0"]
	8["arg__1289 u8.&"]
	3 --> 8
	6 --> 8
	6["arg__1292 0x40u8"]
	11{"memindex ϕ"}
	9 --> 11
	10 --> 11
	4 --> 11
	4["memindex__1294 0u"]
	30["eff__1276 push_u64"]
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
	14["cond__1275 m_isMemory64"]
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
	22["eff__1281 push_u64"]
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
	10["memindex__1288 imm_readULEB32"]
	3 -. Codeptr .-> 10
	9["cond__1287 u8.!="]
	8 --> 9
	5 --> 9
	5["arg__1290 0"]
	8["arg__1289 u8.&"]
	3 --> 8
	6 --> 8
	6["arg__1292 0x40u8"]
	11{"memindex ϕ"}
	9 --> 11
	10 --> 11
	4 --> 11
	4["memindex__1294 0u"]
	30["eff__1276 push_u64"]
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
	14["cond__1275 m_isMemory64"]
	11 --> 14
	31{{"Sϕ Codeptr "}}
	14 --> 31
	23 --> 31
	15 --> 31
</pre>`;
window.traces["I64_LOAD32_U"]["post_surgery 419"] = ''
window.traces["I64_LOAD32_U"]["post_surgery 419"] += `<pre class='graph'>---
config:
  layout: elk
---
graph TD
	3[\\"Finish"/]
	21 -. Codeptr .-> 3
	2 -. Stack .-> 3
	1 -. Trap Locals Globals Tables Memory Extra .-> 3
	1[/"Start"\\]
	2{{"Sϕ Stack "}}
	19 --> 2
	18 --> 2
	9 --> 2
	9["eff__1281 push_u64"]
	6 --> 9
	0 -. Stack .-> 9
	0["index pop_u32"]
	1 -. Stack .-> 0
	6["val mach_readMemory32_u32_64"]
	15 --> 6
	0 --> 6
	28 --> 6
	28["offset__1300 imm_readULEB32"]
	17 -. Codeptr .-> 28
	17{{"Sϕ Codeptr "}}
	13 --> 17
	14 --> 17
	4 --> 17
	4["flags imm_readU8"]
	1 -. Codeptr .-> 4
	14["memindex__1288 imm_readULEB32"]
	4 -. Codeptr .-> 14
	13["cond__1287 u8.!="]
	11 --> 13
	7 --> 13
	7["arg__1290 0"]
	11["arg__1289 u8.&"]
	4 --> 11
	8 --> 11
	8["arg__1292 0x40u8"]
	15{"memindex ϕ"}
	13 --> 15
	14 --> 15
	5 --> 15
	5["memindex__1294 0u"]
	18["eff__1276 push_u64"]
	16 --> 18
	12 -. Stack .-> 18
	12["index pop_u64"]
	1 -. Stack .-> 12
	16["val mach_readMemory64_u32_64"]
	15 --> 16
	12 --> 16
	24 --> 16
	24["offset__1297 imm_readULEB64"]
	17 -. Codeptr .-> 24
	19["cond__1275 m_isMemory64"]
	15 --> 19
	21{{"Sϕ Codeptr "}}
	19 --> 21
	24 --> 21
	28 --> 21
</pre>`;
window.traces["I64_LOAD32_U"]["post_surgery 424"] = ''
window.traces["I64_LOAD32_U"]["post_surgery 424"] += `<pre class='graph'>---
config:
  layout: elk
---
graph TD
	3[\\"Finish"/]
	21 -. Codeptr .-> 3
	2 -. Stack .-> 3
	1 -. Trap Locals Globals Tables Memory Extra .-> 3
	1[/"Start"\\]
	2{{"Sϕ Stack "}}
	19 --> 2
	18 --> 2
	9 --> 2
	9["eff__1281 push_u64"]
	6 --> 9
	0 -. Stack .-> 9
	0["index pop_u32"]
	1 -. Stack .-> 0
	6["val mach_readMemory32_u32_64"]
	15 --> 6
	0 --> 6
	28 --> 6
	28["offset__1300 imm_readULEB32"]
	17 -. Codeptr .-> 28
	17{{"Sϕ Codeptr "}}
	13 --> 17
	39 --> 17
	4 --> 17
	4["flags imm_readU8"]
	1 -. Codeptr .-> 4
	39["memindex__1288__1307 imm_readULEB32"]
	4 -. Codeptr .-> 39
	13["cond__1287 u8.!="]
	11 --> 13
	7 --> 13
	7["arg__1290 0"]
	11["arg__1289 u8.&"]
	4 --> 11
	8 --> 11
	8["arg__1292 0x40u8"]
	15{"memindex ϕ"}
	13 --> 15
	39 --> 15
	41 --> 15
	41["memindex__1294__1308 0u"]
	18["eff__1276 push_u64"]
	16 --> 18
	12 -. Stack .-> 18
	12["index pop_u64"]
	1 -. Stack .-> 12
	16["val mach_readMemory64_u32_64"]
	15 --> 16
	12 --> 16
	24 --> 16
	24["offset__1297 imm_readULEB64"]
	17 -. Codeptr .-> 24
	19["cond__1275 m_isMemory64"]
	15 --> 19
	21{{"Sϕ Codeptr "}}
	19 --> 21
	24 --> 21
	28 --> 21
</pre>`;
window.traces["I64_LOAD32_U"]["schedulerMermaid"] = ''
window.traces["I64_LOAD32_U"]["schedulerMermaid"] += `<pre class='graph'>graph TD
subgraph block_417["Block 417"]
	direction TB
	b417_3[\\"Finish"/]
end
phi_419 --> block_417
subgraph phi_419["Phi 419"]
	p419_2{{"Sϕ Stack "}}
	p419_21{{"Sϕ Codeptr "}}
end
block_420 --> phi_419
block_421 --> phi_419
subgraph block_420["Block 420"]
	direction TB
	b420_24["offset__1297 imm_readULEB64"]
	b420_12["index pop_u64"]
	b420_16["val mach_readMemory64_u32_64"]
	b420_18["eff__1276 push_u64"]
	b420_24 --> b420_12
	b420_12 --> b420_16
	b420_16 --> b420_18
end
branch_418 --> block_420
subgraph branch_418["Branch 418"]
	br418_19["cond__1275 m_isMemory64"]

end
block_422 --> branch_418
subgraph block_422["Block 422"]
	direction TB
	b422_19["cond__1275 m_isMemory64"]
end
phi_424 --> block_422
subgraph phi_424["Phi 424"]
	p424_17{{"Sϕ Codeptr "}}
	p424_17{{"Sϕ Codeptr "}}
	p424_17{{"Sϕ Codeptr "}}
	p424_17{{"Sϕ Codeptr "}}
	p424_15{"memindex ϕ"}
	p424_15{"memindex ϕ"}
	p424_15{"memindex ϕ"}
	p424_15{"memindex ϕ"}
end
block_425 --> phi_424
block_426 --> phi_424
subgraph block_425["Block 425"]
	direction TB
	b425_39["memindex__1288__1307 imm_readULEB32"]
end
branch_423 --> block_425
subgraph branch_423["Branch 423"]
	br423_13["cond__1287 u8.!="]

end
block_427 --> branch_423
subgraph block_427["Block 427"]
	direction TB
	b427_8["arg__1292 0x40u8"]
	b427_7["arg__1290 0"]
	b427_11["arg__1289 u8.&"]
	b427_13["cond__1287 u8.!="]
	b427_8 --> b427_7
	b427_7 --> b427_11
	b427_11 --> b427_13
end
subgraph block_426["Block 426"]
	direction TB
	b426_41["memindex__1294__1308 0u"]
end
branch_423 --> block_426
subgraph block_421["Block 421"]
	direction TB
	b421_28["offset__1300 imm_readULEB32"]
	b421_0["index pop_u32"]
	b421_6["val mach_readMemory32_u32_64"]
	b421_9["eff__1281 push_u64"]
	b421_28 --> b421_0
	b421_0 --> b421_6
	b421_6 --> b421_9
end
branch_418 --> block_421

</pre>`;
window.traces["I64_LOAD32_U"]["scheduler_ssad"] = ''
window.traces["I64_LOAD32_U"]["scheduler_ssad"] += `<pre class=''>def arg__1292 : byte = 0x40u8;
def arg__1290 : byte = 0;
def arg__1289 = u8.&(flags, arg__1292);
def cond__1287 = u8.!=(arg__1289, arg__1290);
if (cond__1287) {
	def memindex__1288__1307 = imm_readULEB32();
} else {
	def memindex__1294__1308 : u32 = 0u;
}
// phis: memindex <- memindex__1288__1307; memindex <- memindex__1294__1308; memindex <- memindex__1288__1307; memindex <- memindex__1294__1308; memindex <- memindex__1288__1307; memindex <- memindex__1294__1308; memindex <- memindex__1288__1307; memindex <- memindex__1294__1308; 
def cond__1275 = m_isMemory64(memindex);
if (cond__1275) {
	def offset__1297 = imm_readULEB64();
	def index = pop_u64();
	def val = mach_readMemory64_u32_64(memindex, index, offset__1297);
	def eff__1276 = push_u64(val);
} else {
	def offset__1300 = imm_readULEB32();
	def index = pop_u32();
	def val = mach_readMemory32_u32_64(memindex, index, offset__1300);
	def eff__1281 = push_u64(val);
}
// phis: 
</pre>`;
window.traces["I64_LOAD32_U"]["scheduler_ssad_pretty"] = ''
window.traces["I64_LOAD32_U"]["scheduler_ssad_pretty"] += `<pre class=''>if (u8.!=(u8.&(flags, 0x40u8), 0)) {
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
	def offset1 = imm_readULEB32();
	def index = pop_u32();
	def val = mach_readMemory32_u32_64(memindex, index, offset1);
	push_u64(val);
}
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
	22["eff__1281 push_u64"]
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
	10["memindex__1288 imm_readULEB32"]
	3 -. Codeptr .-> 10
	9["cond__1287 u8.!="]
	8 --> 9
	5 --> 9
	5["arg__1290 0"]
	8["arg__1289 u8.&"]
	3 --> 8
	6 --> 8
	6["arg__1292 0x40u8"]
	11{"memindex ϕ"}
	9 --> 11
	10 --> 11
	4 --> 11
	4["memindex__1294 0u"]
	30["eff__1276 push_u64"]
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
	14["cond__1275 m_isMemory64"]
	11 --> 14
	31{{"Sϕ Codeptr "}}
	14 --> 31
	23 --> 31
	15 --> 31
</pre>`;
window.traces["I64_LOAD32_U"]["unlem_schedule"] = ''
window.traces["I64_LOAD32_U"]["unlem_schedule"] += `<pre class=''>def flags = imm_readU8();
def arg__1292 : byte = 0x40u8;
def arg__1289 = u8.&(flags, arg__1292);
def arg__1290 : byte = 0;
def cond__1287 = u8.!=(arg__1289, arg__1290);
var memindex: u32;
if (cond__1287) {
	def memindex__1288 = imm_readULEB32();
} else {
	def memindex__1294 : u32 = 0u;
}
// phis: memindex <- memindex__1288; memindex <- memindex__1294; 
def cond__1275 = m_isMemory64(memindex);
if (cond__1275) {
	def offset = imm_readULEB64();
	def index = pop_u64();
	def val = mach_readMemory64_u32_64(memindex, index, offset);
	def eff__1276 = push_u64(val);
} else {
	def offset = imm_readULEB32();
	def index = pop_u32();
	def val = mach_readMemory32_u32_64(memindex, index, offset);
	def eff__1281 = push_u64(val);
}
// phis: 
</pre>`;
window.traces["I64_LOAD32_U_ul"] = {}
window.traces["I64_LOAD32_U_ul"]["post_surgery 430"] = ''
window.traces["I64_LOAD32_U_ul"]["post_surgery 430"] += `<pre class='graph'>---
config:
  layout: elk
---
graph TD
	3[\\"Finish"/]
	21 -. Codeptr .-> 3
	2 -. Stack .-> 3
	1 -. Trap Locals Globals Tables Memory Extra .-> 3
	1[/"Start"\\]
	2{{"Sϕ Stack "}}
	19 --> 2
	18 --> 2
	9 --> 2
	9["eff__1281 push_u64"]
	6 --> 9
	0 -. Stack .-> 9
	0["index pop_u32"]
	1 -. Stack .-> 0
	6["val mach_readMemory32_u32_64"]
	15 --> 6
	0 --> 6
	28 --> 6
	28["offset__1328 imm_readULEB32"]
	17 -. Codeptr .-> 28
	17{{"Sϕ Codeptr "}}
	13 --> 17
	14 --> 17
	4 --> 17
	4["flags imm_readU8"]
	1 -. Codeptr .-> 4
	14["memindex__1288 imm_readULEB32"]
	4 -. Codeptr .-> 14
	13["cond__1287 u8.!="]
	11 --> 13
	7 --> 13
	7["arg__1290 0"]
	11["arg__1289 u8.&"]
	4 --> 11
	8 --> 11
	8["arg__1292 0x40u8"]
	15{"memindex ϕ"}
	13 --> 15
	14 --> 15
	5 --> 15
	5["memindex__1294 0u"]
	18["eff__1276 push_u64"]
	16 --> 18
	12 -. Stack .-> 18
	12["index pop_u64"]
	1 -. Stack .-> 12
	16["val mach_readMemory64_u32_64"]
	15 --> 16
	12 --> 16
	24 --> 16
	24["offset__1325 imm_readULEB64"]
	17 -. Codeptr .-> 24
	19["cond__1275 m_isMemory64"]
	15 --> 19
	21{{"Sϕ Codeptr "}}
	19 --> 21
	24 --> 21
	28 --> 21
</pre>`;
window.traces["I64_LOAD32_U_ul"]["post_surgery 435"] = ''
window.traces["I64_LOAD32_U_ul"]["post_surgery 435"] += `<pre class='graph'>---
config:
  layout: elk
---
graph TD
	3[\\"Finish"/]
	21 -. Codeptr .-> 3
	2 -. Stack .-> 3
	1 -. Trap Locals Globals Tables Memory Extra .-> 3
	1[/"Start"\\]
	2{{"Sϕ Stack "}}
	19 --> 2
	18 --> 2
	9 --> 2
	9["eff__1281 push_u64"]
	6 --> 9
	0 -. Stack .-> 9
	0["index pop_u32"]
	1 -. Stack .-> 0
	6["val mach_readMemory32_u32_64"]
	15 --> 6
	0 --> 6
	28 --> 6
	28["offset__1328 imm_readULEB32"]
	17 -. Codeptr .-> 28
	17{{"Sϕ Codeptr "}}
	13 --> 17
	39 --> 17
	4 --> 17
	4["flags imm_readU8"]
	1 -. Codeptr .-> 4
	39["memindex__1288__1335 imm_readULEB32"]
	4 -. Codeptr .-> 39
	13["cond__1287 u8.!="]
	11 --> 13
	7 --> 13
	7["arg__1290 0"]
	11["arg__1289 u8.&"]
	4 --> 11
	8 --> 11
	8["arg__1292 0x40u8"]
	15{"memindex ϕ"}
	13 --> 15
	39 --> 15
	41 --> 15
	41["memindex__1294__1336 0u"]
	18["eff__1276 push_u64"]
	16 --> 18
	12 -. Stack .-> 18
	12["index pop_u64"]
	1 -. Stack .-> 12
	16["val mach_readMemory64_u32_64"]
	15 --> 16
	12 --> 16
	24 --> 16
	24["offset__1325 imm_readULEB64"]
	17 -. Codeptr .-> 24
	19["cond__1275 m_isMemory64"]
	15 --> 19
	21{{"Sϕ Codeptr "}}
	19 --> 21
	24 --> 21
	28 --> 21
</pre>`;
window.traces["I64_LOAD32_U"]["unlem_scheduler"] = ''
window.traces["I64_LOAD32_U"]["unlem_scheduler"] += `<pre class='graph'>graph TD
subgraph block_428["Block 428"]
	direction TB
	b428_3[\\"Finish"/]
end
phi_430 --> block_428
subgraph phi_430["Phi 430"]
	p430_2{{"Sϕ Stack "}}
	p430_21{{"Sϕ Codeptr "}}
end
block_431 --> phi_430
block_432 --> phi_430
subgraph block_431["Block 431"]
	direction TB
	b431_24["offset__1325 imm_readULEB64"]
	b431_12["index pop_u64"]
	b431_16["val mach_readMemory64_u32_64"]
	b431_18["eff__1276 push_u64"]
	b431_24 --> b431_12
	b431_12 --> b431_16
	b431_16 --> b431_18
end
branch_429 --> block_431
subgraph branch_429["Branch 429"]
	br429_19["cond__1275 m_isMemory64"]

end
block_433 --> branch_429
subgraph block_433["Block 433"]
	direction TB
	b433_19["cond__1275 m_isMemory64"]
end
phi_435 --> block_433
subgraph phi_435["Phi 435"]
	p435_17{{"Sϕ Codeptr "}}
	p435_17{{"Sϕ Codeptr "}}
	p435_17{{"Sϕ Codeptr "}}
	p435_17{{"Sϕ Codeptr "}}
	p435_15{"memindex ϕ"}
	p435_15{"memindex ϕ"}
	p435_15{"memindex ϕ"}
	p435_15{"memindex ϕ"}
end
block_436 --> phi_435
block_437 --> phi_435
subgraph block_436["Block 436"]
	direction TB
	b436_39["memindex__1288__1335 imm_readULEB32"]
end
branch_434 --> block_436
subgraph branch_434["Branch 434"]
	br434_13["cond__1287 u8.!="]

end
block_438 --> branch_434
subgraph block_438["Block 438"]
	direction TB
	b438_8["arg__1292 0x40u8"]
	b438_7["arg__1290 0"]
	b438_11["arg__1289 u8.&"]
	b438_13["cond__1287 u8.!="]
	b438_8 --> b438_7
	b438_7 --> b438_11
	b438_11 --> b438_13
end
subgraph block_437["Block 437"]
	direction TB
	b437_41["memindex__1294__1336 0u"]
end
branch_434 --> block_437
subgraph block_432["Block 432"]
	direction TB
	b432_28["offset__1328 imm_readULEB32"]
	b432_0["index pop_u32"]
	b432_6["val mach_readMemory32_u32_64"]
	b432_9["eff__1281 push_u64"]
	b432_28 --> b432_0
	b432_0 --> b432_6
	b432_6 --> b432_9
end
branch_429 --> block_432

</pre>`;
window.traces["I64_LOAD32_U"]["unlem_scheduler_ssa"] = ''
window.traces["I64_LOAD32_U"]["unlem_scheduler_ssa"] += `<pre class=''>def arg__1292 : byte = 0x40u8;
def arg__1290 : byte = 0;
def arg__1289 = u8.&(flags, arg__1292);
def cond__1287 = u8.!=(arg__1289, arg__1290);
if (cond__1287) {
	def memindex__1288__1335 = imm_readULEB32();
} else {
	def memindex__1294__1336 : u32 = 0u;
}
// phis: memindex <- memindex__1288__1335; memindex <- memindex__1294__1336; memindex <- memindex__1288__1335; memindex <- memindex__1294__1336; memindex <- memindex__1288__1335; memindex <- memindex__1294__1336; memindex <- memindex__1288__1335; memindex <- memindex__1294__1336; 
def cond__1275 = m_isMemory64(memindex);
if (cond__1275) {
	def offset__1325 = imm_readULEB64();
	def index = pop_u64();
	def val = mach_readMemory64_u32_64(memindex, index, offset__1325);
	def eff__1276 = push_u64(val);
} else {
	def offset__1328 = imm_readULEB32();
	def index = pop_u32();
	def val = mach_readMemory32_u32_64(memindex, index, offset__1328);
	def eff__1281 = push_u64(val);
}
// phis: 
</pre>`;
window.traces["I64_LOAD32_U"]["unlem_scheduler_ssa"] += `<pre class=''>if (u8.!=(u8.&(flags, 0x40u8), 0)) {
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
	def offset1 = imm_readULEB32();
	def index = pop_u32();
	def val = mach_readMemory32_u32_64(memindex, index, offset1);
	push_u64(val);
}
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
	22["eff__1281 push_u64"]
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
	10["memindex__1288 imm_readULEB32"]
	3 -. Codeptr .-> 10
	9["cond__1287 u8.!="]
	8 --> 9
	5 --> 9
	5["arg__1290 0"]
	8["arg__1289 u8.&"]
	3 --> 8
	6 --> 8
	6["arg__1292 0x40u8"]
	11{"memindex ϕ"}
	9 --> 11
	10 --> 11
	4 --> 11
	4["memindex__1294 0u"]
	30["eff__1276 push_u64"]
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
	14["cond__1275 m_isMemory64"]
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
	22["eff__1281 push_u64"]
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
	10["memindex__1288 imm_readULEB32"]
	3 -. Codeptr .-> 10
	9["cond__1287 u8.!="]
	8 --> 9
	5 --> 9
	5["arg__1290 0"]
	8["arg__1289 u8.&"]
	3 --> 8
	6 --> 8
	6["arg__1292 0x40u8"]
	11{"memindex ϕ"}
	9 --> 11
	10 --> 11
	4 --> 11
	4["memindex__1294 0u"]
	30["eff__1276 push_u64"]
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
	14["cond__1275 m_isMemory64"]
	11 --> 14
	31{{"Sϕ Codeptr "}}
	14 --> 31
	23 --> 31
	15 --> 31
</pre>`;
window.traces["I64_LOAD32_U"]["scheduled"] = ''
window.traces["I64_LOAD32_U"]["scheduled"] += `<pre class=''>def flags = imm_readU8();
def arg__1292 : byte = 0x40u8;
def arg__1289 = u8.&(flags, arg__1292);
def arg__1290 : byte = 0;
def cond__1287 = u8.!=(arg__1289, arg__1290);
var memindex: u32;
if (cond__1287) {
	def memindex__1288 = imm_readULEB32();
} else {
	def memindex__1294 : u32 = 0u;
}
// phis: memindex <- memindex__1288; memindex <- memindex__1294; 
def cond__1275 = m_isMemory64(memindex);
if (cond__1275) {
	def offset = imm_readULEB64();
	def index = pop_u64();
	def val = mach_readMemory64_u32_64(memindex, index, offset);
	def eff__1276 = push_u64(val);
} else {
	def offset = imm_readULEB32();
	def index = pop_u32();
	def val = mach_readMemory32_u32_64(memindex, index, offset);
	def eff__1281 = push_u64(val);
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
def arg__1366 : byte = 0;
def arg__1368 : byte = 0x40u8;
def arg__1367 = (flags);
def arg__1365 = u8.&(arg__1367, arg__1368);
def cond__1363 = u8.!=(arg__1365, arg__1366);
if (cond__1363) {
	def memindex__1364 = imm_readULEB32();
}
// phis: memindex <- memindex__1364; 
def val = pop_u32();
def arg__1362 = (memindex);
def cond__1351 = m_isMemory64(arg__1362);
if (cond__1351) {
	def offset = imm_readULEB64();
	def index = pop_u64();
	def arg__1356 = (val);
	def arg__1355 = (offset);
	def arg__1354 = (index);
	def arg__1353 = (memindex);
	def eff__1352 = mach_writeMemory64_u32(arg__1353, arg__1354, arg__1355, arg__1356);
} else {
	def offset = imm_readULEB32();
	def index = pop_u32();
	def arg__1361 = (val);
	def arg__1360 = (offset);
	def arg__1359 = (index);
	def arg__1358 = (memindex);
	def eff__1357 = mach_writeMemory32_u32(arg__1358, arg__1359, arg__1360, arg__1361);
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
	22["eff__1357 mach_writeMemory32_u32"]
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
	10["memindex__1364 imm_readULEB32"]
	3 -. Codeptr .-> 10
	9["cond__1363 u8.!="]
	8 --> 9
	5 --> 9
	5["arg__1366 0"]
	8["arg__1365 u8.&"]
	3 --> 8
	6 --> 8
	6["arg__1368 0x40u8"]
	17["index pop_u32"]
	13 -. Stack .-> 17
	11{"memindex ϕ"}
	9 --> 11
	10 --> 11
	4 --> 11
	4["memindex__1369 0u"]
	29["eff__1352 mach_writeMemory64_u32"]
	11 --> 29
	24 --> 29
	23 --> 29
	13 --> 29
	0 -. Memory .-> 29
	23["offset imm_readULEB64"]
	12 -. Codeptr .-> 23
	24["index pop_u64"]
	13 -. Stack .-> 24
	15["cond__1351 m_isMemory64"]
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
	22["eff__1357 mach_writeMemory32_u32"]
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
	10["memindex__1364 imm_readULEB32"]
	3 -. Codeptr .-> 10
	9["cond__1363 u8.!="]
	8 --> 9
	5 --> 9
	5["arg__1366 0"]
	8["arg__1365 u8.&"]
	3 --> 8
	6 --> 8
	6["arg__1368 0x40u8"]
	17["index pop_u32"]
	13 -. Stack .-> 17
	11{"memindex ϕ"}
	9 --> 11
	10 --> 11
	4 --> 11
	4["memindex__1370 0u"]
	29["eff__1352 mach_writeMemory64_u32"]
	11 --> 29
	24 --> 29
	23 --> 29
	13 --> 29
	0 -. Memory .-> 29
	23["offset imm_readULEB64"]
	12 -. Codeptr .-> 23
	24["index pop_u64"]
	13 -. Stack .-> 24
	15["cond__1351 m_isMemory64"]
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
	22["eff__1357 mach_writeMemory32_u32"]
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
	10["memindex__1364 imm_readULEB32"]
	3 -. Codeptr .-> 10
	9["cond__1363 u8.!="]
	8 --> 9
	5 --> 9
	5["arg__1366 0"]
	8["arg__1365 u8.&"]
	3 --> 8
	6 --> 8
	6["arg__1368 0x40u8"]
	17["index pop_u32"]
	13 -. Stack .-> 17
	11{"memindex ϕ"}
	9 --> 11
	10 --> 11
	4 --> 11
	4["memindex__1370 0u"]
	29["eff__1352 mach_writeMemory64_u32"]
	11 --> 29
	24 --> 29
	23 --> 29
	13 --> 29
	0 -. Memory .-> 29
	23["offset imm_readULEB64"]
	12 -. Codeptr .-> 23
	24["index pop_u64"]
	13 -. Stack .-> 24
	15["cond__1351 m_isMemory64"]
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
window.traces["I32_STORE"]["post_surgery 441"] = ''
window.traces["I32_STORE"]["post_surgery 441"] += `<pre class='graph'>---
config:
  layout: elk
---
graph TD
	4[\\"Finish"/]
	19 -. Codeptr .-> 4
	21 -. Stack .-> 4
	2 -. Trap Locals Globals Tables Extra .-> 4
	1 -. Memory .-> 4
	1{{"Sϕ Memory "}}
	20 --> 1
	18 --> 1
	9 --> 1
	9["eff__1357 mach_writeMemory32_u32"]
	15 --> 9
	3 --> 9
	28 --> 9
	17 --> 9
	2 -. Memory .-> 9
	2[/"Start"\\]
	17["val pop_u32"]
	2 -. Stack .-> 17
	28["offset__1375 imm_readULEB32"]
	16 -. Codeptr .-> 28
	16{{"Sϕ Codeptr "}}
	13 --> 16
	14 --> 16
	5 --> 16
	5["flags imm_readU8"]
	2 -. Codeptr .-> 5
	14["memindex__1364 imm_readULEB32"]
	5 -. Codeptr .-> 14
	13["cond__1363 u8.!="]
	11 --> 13
	7 --> 13
	7["arg__1366 0"]
	11["arg__1365 u8.&"]
	5 --> 11
	8 --> 11
	8["arg__1368 0x40u8"]
	3["index pop_u32"]
	17 -. Stack .-> 3
	15{"memindex ϕ"}
	13 --> 15
	14 --> 15
	6 --> 15
	6["memindex__1370 0u"]
	18["eff__1352 mach_writeMemory64_u32"]
	15 --> 18
	12 --> 18
	24 --> 18
	17 --> 18
	2 -. Memory .-> 18
	24["offset__1372 imm_readULEB64"]
	16 -. Codeptr .-> 24
	12["index pop_u64"]
	17 -. Stack .-> 12
	20["cond__1351 m_isMemory64"]
	15 --> 20
	21{{"Sϕ Stack "}}
	20 --> 21
	12 --> 21
	3 --> 21
	19{{"Sϕ Codeptr "}}
	20 --> 19
	24 --> 19
	28 --> 19
</pre>`;
window.traces["I32_STORE"]["post_surgery 446"] = ''
window.traces["I32_STORE"]["post_surgery 446"] += `<pre class='graph'>---
config:
  layout: elk
---
graph TD
	4[\\"Finish"/]
	19 -. Codeptr .-> 4
	21 -. Stack .-> 4
	2 -. Trap Locals Globals Tables Extra .-> 4
	1 -. Memory .-> 4
	1{{"Sϕ Memory "}}
	20 --> 1
	18 --> 1
	9 --> 1
	9["eff__1357 mach_writeMemory32_u32"]
	15 --> 9
	3 --> 9
	28 --> 9
	17 --> 9
	2 -. Memory .-> 9
	2[/"Start"\\]
	17["val pop_u32"]
	2 -. Stack .-> 17
	28["offset__1375 imm_readULEB32"]
	16 -. Codeptr .-> 28
	16{{"Sϕ Codeptr "}}
	13 --> 16
	43 --> 16
	5 --> 16
	5["flags imm_readU8"]
	2 -. Codeptr .-> 5
	43["memindex__1364__1385 imm_readULEB32"]
	5 -. Codeptr .-> 43
	13["cond__1363 u8.!="]
	11 --> 13
	7 --> 13
	7["arg__1366 0"]
	11["arg__1365 u8.&"]
	5 --> 11
	8 --> 11
	8["arg__1368 0x40u8"]
	3["index pop_u32"]
	17 -. Stack .-> 3
	15{"memindex ϕ"}
	13 --> 15
	43 --> 15
	45 --> 15
	45["memindex__1370__1386 0u"]
	18["eff__1352 mach_writeMemory64_u32"]
	15 --> 18
	12 --> 18
	24 --> 18
	17 --> 18
	2 -. Memory .-> 18
	24["offset__1372 imm_readULEB64"]
	16 -. Codeptr .-> 24
	12["index pop_u64"]
	17 -. Stack .-> 12
	20["cond__1351 m_isMemory64"]
	15 --> 20
	21{{"Sϕ Stack "}}
	20 --> 21
	12 --> 21
	3 --> 21
	19{{"Sϕ Codeptr "}}
	20 --> 19
	24 --> 19
	28 --> 19
</pre>`;
window.traces["I32_STORE"]["schedulerMermaid"] = ''
window.traces["I32_STORE"]["schedulerMermaid"] += `<pre class='graph'>graph TD
subgraph block_439["Block 439"]
	direction TB
	b439_4[\\"Finish"/]
end
phi_441 --> block_439
subgraph phi_441["Phi 441"]
	p441_1{{"Sϕ Memory "}}
	p441_21{{"Sϕ Stack "}}
	p441_19{{"Sϕ Codeptr "}}
end
block_442 --> phi_441
block_443 --> phi_441
subgraph block_442["Block 442"]
	direction TB
	b442_12["index pop_u64"]
	b442_24["offset__1372 imm_readULEB64"]
	b442_18["eff__1352 mach_writeMemory64_u32"]
	b442_12 --> b442_24
	b442_24 --> b442_18
end
branch_440 --> block_442
subgraph branch_440["Branch 440"]
	br440_20["cond__1351 m_isMemory64"]

end
block_444 --> branch_440
subgraph block_444["Block 444"]
	direction TB
	b444_17["val pop_u32"]
	b444_20["cond__1351 m_isMemory64"]
	b444_17 --> b444_20
end
phi_446 --> block_444
subgraph phi_446["Phi 446"]
	p446_16{{"Sϕ Codeptr "}}
	p446_16{{"Sϕ Codeptr "}}
	p446_16{{"Sϕ Codeptr "}}
	p446_16{{"Sϕ Codeptr "}}
	p446_15{"memindex ϕ"}
	p446_15{"memindex ϕ"}
	p446_15{"memindex ϕ"}
	p446_15{"memindex ϕ"}
	p446_15{"memindex ϕ"}
end
block_447 --> phi_446
block_448 --> phi_446
subgraph block_447["Block 447"]
	direction TB
	b447_43["memindex__1364__1385 imm_readULEB32"]
end
branch_445 --> block_447
subgraph branch_445["Branch 445"]
	br445_13["cond__1363 u8.!="]

end
block_449 --> branch_445
subgraph block_449["Block 449"]
	direction TB
	b449_8["arg__1368 0x40u8"]
	b449_7["arg__1366 0"]
	b449_11["arg__1365 u8.&"]
	b449_13["cond__1363 u8.!="]
	b449_8 --> b449_7
	b449_7 --> b449_11
	b449_11 --> b449_13
end
subgraph block_448["Block 448"]
	direction TB
	b448_45["memindex__1370__1386 0u"]
end
branch_445 --> block_448
subgraph block_443["Block 443"]
	direction TB
	b443_3["index pop_u32"]
	b443_28["offset__1375 imm_readULEB32"]
	b443_9["eff__1357 mach_writeMemory32_u32"]
	b443_3 --> b443_28
	b443_28 --> b443_9
end
branch_440 --> block_443

</pre>`;
window.traces["I32_STORE"]["scheduler_ssad"] = ''
window.traces["I32_STORE"]["scheduler_ssad"] += `<pre class=''>def arg__1368 : byte = 0x40u8;
def arg__1366 : byte = 0;
def arg__1365 = u8.&(flags, arg__1368);
def cond__1363 = u8.!=(arg__1365, arg__1366);
if (cond__1363) {
	def memindex__1364__1385 = imm_readULEB32();
} else {
	def memindex__1370__1386 : u32 = 0u;
}
// phis: memindex <- memindex__1364__1385; memindex <- memindex__1370__1386; memindex <- memindex__1364__1385; memindex <- memindex__1370__1386; memindex <- memindex__1364__1385; memindex <- memindex__1370__1386; memindex <- memindex__1364__1385; memindex <- memindex__1370__1386; memindex <- memindex__1364__1385; memindex <- memindex__1370__1386; 
def val = pop_u32();
def cond__1351 = m_isMemory64(memindex);
if (cond__1351) {
	def index = pop_u64();
	def offset__1372 = imm_readULEB64();
	def eff__1352 = mach_writeMemory64_u32(memindex, index, offset__1372, val);
} else {
	def index = pop_u32();
	def offset__1375 = imm_readULEB32();
	def eff__1357 = mach_writeMemory32_u32(memindex, index, offset__1375, val);
}
// phis: 
</pre>`;
window.traces["I32_STORE"]["scheduler_ssad_pretty"] = ''
window.traces["I32_STORE"]["scheduler_ssad_pretty"] += `<pre class=''>if (u8.!=(u8.&(flags, 0x40u8), 0)) {
	memindex = imm_readULEB32();
} else {
	memindex = 0u;
}
def val = pop_u32();
def cond = m_isMemory64(memindex);
if (cond) {
	def index = pop_u64();
	def offset = imm_readULEB64();
	mach_writeMemory64_u32(memindex, index, offset, val);
} else {
	def index = pop_u32();
	def offset1 = imm_readULEB32();
	mach_writeMemory32_u32(memindex, index, offset1, val);
}
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
	22["eff__1357 mach_writeMemory32_u32"]
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
	10["memindex__1364 imm_readULEB32"]
	3 -. Codeptr .-> 10
	9["cond__1363 u8.!="]
	8 --> 9
	5 --> 9
	5["arg__1366 0"]
	8["arg__1365 u8.&"]
	3 --> 8
	6 --> 8
	6["arg__1368 0x40u8"]
	17["index pop_u32"]
	13 -. Stack .-> 17
	11{"memindex ϕ"}
	9 --> 11
	10 --> 11
	4 --> 11
	4["memindex__1370 0u"]
	29["eff__1352 mach_writeMemory64_u32"]
	11 --> 29
	24 --> 29
	23 --> 29
	13 --> 29
	0 -. Memory .-> 29
	23["offset imm_readULEB64"]
	12 -. Codeptr .-> 23
	24["index pop_u64"]
	13 -. Stack .-> 24
	15["cond__1351 m_isMemory64"]
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
def arg__1368 : byte = 0x40u8;
def arg__1365 = u8.&(flags, arg__1368);
def arg__1366 : byte = 0;
def cond__1363 = u8.!=(arg__1365, arg__1366);
var memindex: u32;
if (cond__1363) {
	def memindex__1364 = imm_readULEB32();
} else {
	def memindex__1370 : u32 = 0u;
}
// phis: memindex <- memindex__1364; memindex <- memindex__1370; 
def cond__1351 = m_isMemory64(memindex);
if (cond__1351) {
	def offset = imm_readULEB64();
	def index = pop_u64();
	def eff__1352 = mach_writeMemory64_u32(memindex, index, offset, val);
} else {
	def offset = imm_readULEB32();
	def index = pop_u32();
	def eff__1357 = mach_writeMemory32_u32(memindex, index, offset, val);
}
// phis: 
</pre>`;
window.traces["I32_STORE_ul"] = {}
window.traces["I32_STORE_ul"]["post_surgery 452"] = ''
window.traces["I32_STORE_ul"]["post_surgery 452"] += `<pre class='graph'>---
config:
  layout: elk
---
graph TD
	4[\\"Finish"/]
	19 -. Codeptr .-> 4
	21 -. Stack .-> 4
	2 -. Trap Locals Globals Tables Extra .-> 4
	1 -. Memory .-> 4
	1{{"Sϕ Memory "}}
	20 --> 1
	18 --> 1
	9 --> 1
	9["eff__1357 mach_writeMemory32_u32"]
	15 --> 9
	3 --> 9
	28 --> 9
	17 --> 9
	2 -. Memory .-> 9
	2[/"Start"\\]
	17["val pop_u32"]
	2 -. Stack .-> 17
	28["offset__1407 imm_readULEB32"]
	16 -. Codeptr .-> 28
	16{{"Sϕ Codeptr "}}
	13 --> 16
	14 --> 16
	5 --> 16
	5["flags imm_readU8"]
	2 -. Codeptr .-> 5
	14["memindex__1364 imm_readULEB32"]
	5 -. Codeptr .-> 14
	13["cond__1363 u8.!="]
	11 --> 13
	7 --> 13
	7["arg__1366 0"]
	11["arg__1365 u8.&"]
	5 --> 11
	8 --> 11
	8["arg__1368 0x40u8"]
	3["index pop_u32"]
	17 -. Stack .-> 3
	15{"memindex ϕ"}
	13 --> 15
	14 --> 15
	6 --> 15
	6["memindex__1370 0u"]
	18["eff__1352 mach_writeMemory64_u32"]
	15 --> 18
	12 --> 18
	24 --> 18
	17 --> 18
	2 -. Memory .-> 18
	24["offset__1404 imm_readULEB64"]
	16 -. Codeptr .-> 24
	12["index pop_u64"]
	17 -. Stack .-> 12
	20["cond__1351 m_isMemory64"]
	15 --> 20
	21{{"Sϕ Stack "}}
	20 --> 21
	12 --> 21
	3 --> 21
	19{{"Sϕ Codeptr "}}
	20 --> 19
	24 --> 19
	28 --> 19
</pre>`;
window.traces["I32_STORE_ul"]["post_surgery 457"] = ''
window.traces["I32_STORE_ul"]["post_surgery 457"] += `<pre class='graph'>---
config:
  layout: elk
---
graph TD
	4[\\"Finish"/]
	19 -. Codeptr .-> 4
	21 -. Stack .-> 4
	2 -. Trap Locals Globals Tables Extra .-> 4
	1 -. Memory .-> 4
	1{{"Sϕ Memory "}}
	20 --> 1
	18 --> 1
	9 --> 1
	9["eff__1357 mach_writeMemory32_u32"]
	15 --> 9
	3 --> 9
	28 --> 9
	17 --> 9
	2 -. Memory .-> 9
	2[/"Start"\\]
	17["val pop_u32"]
	2 -. Stack .-> 17
	28["offset__1407 imm_readULEB32"]
	16 -. Codeptr .-> 28
	16{{"Sϕ Codeptr "}}
	13 --> 16
	43 --> 16
	5 --> 16
	5["flags imm_readU8"]
	2 -. Codeptr .-> 5
	43["memindex__1364__1417 imm_readULEB32"]
	5 -. Codeptr .-> 43
	13["cond__1363 u8.!="]
	11 --> 13
	7 --> 13
	7["arg__1366 0"]
	11["arg__1365 u8.&"]
	5 --> 11
	8 --> 11
	8["arg__1368 0x40u8"]
	3["index pop_u32"]
	17 -. Stack .-> 3
	15{"memindex ϕ"}
	13 --> 15
	43 --> 15
	45 --> 15
	45["memindex__1370__1418 0u"]
	18["eff__1352 mach_writeMemory64_u32"]
	15 --> 18
	12 --> 18
	24 --> 18
	17 --> 18
	2 -. Memory .-> 18
	24["offset__1404 imm_readULEB64"]
	16 -. Codeptr .-> 24
	12["index pop_u64"]
	17 -. Stack .-> 12
	20["cond__1351 m_isMemory64"]
	15 --> 20
	21{{"Sϕ Stack "}}
	20 --> 21
	12 --> 21
	3 --> 21
	19{{"Sϕ Codeptr "}}
	20 --> 19
	24 --> 19
	28 --> 19
</pre>`;
window.traces["I32_STORE"]["unlem_scheduler"] = ''
window.traces["I32_STORE"]["unlem_scheduler"] += `<pre class='graph'>graph TD
subgraph block_450["Block 450"]
	direction TB
	b450_4[\\"Finish"/]
end
phi_452 --> block_450
subgraph phi_452["Phi 452"]
	p452_1{{"Sϕ Memory "}}
	p452_21{{"Sϕ Stack "}}
	p452_19{{"Sϕ Codeptr "}}
end
block_453 --> phi_452
block_454 --> phi_452
subgraph block_453["Block 453"]
	direction TB
	b453_12["index pop_u64"]
	b453_24["offset__1404 imm_readULEB64"]
	b453_18["eff__1352 mach_writeMemory64_u32"]
	b453_12 --> b453_24
	b453_24 --> b453_18
end
branch_451 --> block_453
subgraph branch_451["Branch 451"]
	br451_20["cond__1351 m_isMemory64"]

end
block_455 --> branch_451
subgraph block_455["Block 455"]
	direction TB
	b455_17["val pop_u32"]
	b455_20["cond__1351 m_isMemory64"]
	b455_17 --> b455_20
end
phi_457 --> block_455
subgraph phi_457["Phi 457"]
	p457_16{{"Sϕ Codeptr "}}
	p457_16{{"Sϕ Codeptr "}}
	p457_16{{"Sϕ Codeptr "}}
	p457_16{{"Sϕ Codeptr "}}
	p457_15{"memindex ϕ"}
	p457_15{"memindex ϕ"}
	p457_15{"memindex ϕ"}
	p457_15{"memindex ϕ"}
	p457_15{"memindex ϕ"}
end
block_458 --> phi_457
block_459 --> phi_457
subgraph block_458["Block 458"]
	direction TB
	b458_43["memindex__1364__1417 imm_readULEB32"]
end
branch_456 --> block_458
subgraph branch_456["Branch 456"]
	br456_13["cond__1363 u8.!="]

end
block_460 --> branch_456
subgraph block_460["Block 460"]
	direction TB
	b460_8["arg__1368 0x40u8"]
	b460_7["arg__1366 0"]
	b460_11["arg__1365 u8.&"]
	b460_13["cond__1363 u8.!="]
	b460_8 --> b460_7
	b460_7 --> b460_11
	b460_11 --> b460_13
end
subgraph block_459["Block 459"]
	direction TB
	b459_45["memindex__1370__1418 0u"]
end
branch_456 --> block_459
subgraph block_454["Block 454"]
	direction TB
	b454_3["index pop_u32"]
	b454_28["offset__1407 imm_readULEB32"]
	b454_9["eff__1357 mach_writeMemory32_u32"]
	b454_3 --> b454_28
	b454_28 --> b454_9
end
branch_451 --> block_454

</pre>`;
window.traces["I32_STORE"]["unlem_scheduler_ssa"] = ''
window.traces["I32_STORE"]["unlem_scheduler_ssa"] += `<pre class=''>def arg__1368 : byte = 0x40u8;
def arg__1366 : byte = 0;
def arg__1365 = u8.&(flags, arg__1368);
def cond__1363 = u8.!=(arg__1365, arg__1366);
if (cond__1363) {
	def memindex__1364__1417 = imm_readULEB32();
} else {
	def memindex__1370__1418 : u32 = 0u;
}
// phis: memindex <- memindex__1364__1417; memindex <- memindex__1370__1418; memindex <- memindex__1364__1417; memindex <- memindex__1370__1418; memindex <- memindex__1364__1417; memindex <- memindex__1370__1418; memindex <- memindex__1364__1417; memindex <- memindex__1370__1418; memindex <- memindex__1364__1417; memindex <- memindex__1370__1418; 
def val = pop_u32();
def cond__1351 = m_isMemory64(memindex);
if (cond__1351) {
	def index = pop_u64();
	def offset__1404 = imm_readULEB64();
	def eff__1352 = mach_writeMemory64_u32(memindex, index, offset__1404, val);
} else {
	def index = pop_u32();
	def offset__1407 = imm_readULEB32();
	def eff__1357 = mach_writeMemory32_u32(memindex, index, offset__1407, val);
}
// phis: 
</pre>`;
window.traces["I32_STORE"]["unlem_scheduler_ssa"] += `<pre class=''>if (u8.!=(u8.&(flags, 0x40u8), 0)) {
	memindex = imm_readULEB32();
} else {
	memindex = 0u;
}
def val = pop_u32();
def cond = m_isMemory64(memindex);
if (cond) {
	def index = pop_u64();
	def offset = imm_readULEB64();
	mach_writeMemory64_u32(memindex, index, offset, val);
} else {
	def index = pop_u32();
	def offset1 = imm_readULEB32();
	mach_writeMemory32_u32(memindex, index, offset1, val);
}
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
	22["eff__1357 mach_writeMemory32_u32"]
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
	10["memindex__1364 imm_readULEB32"]
	3 -. Codeptr .-> 10
	9["cond__1363 u8.!="]
	8 --> 9
	5 --> 9
	5["arg__1366 0"]
	8["arg__1365 u8.&"]
	3 --> 8
	6 --> 8
	6["arg__1368 0x40u8"]
	17["index pop_u32"]
	13 -. Stack .-> 17
	11{"memindex ϕ"}
	9 --> 11
	10 --> 11
	4 --> 11
	4["memindex__1370 0u"]
	29["eff__1352 mach_writeMemory64_u32"]
	11 --> 29
	24 --> 29
	23 --> 29
	13 --> 29
	0 -. Memory .-> 29
	23["offset imm_readULEB64"]
	12 -. Codeptr .-> 23
	24["index pop_u64"]
	13 -. Stack .-> 24
	15["cond__1351 m_isMemory64"]
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
	22["eff__1357 mach_writeMemory32_u32"]
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
	10["memindex__1364 imm_readULEB32"]
	3 -. Codeptr .-> 10
	9["cond__1363 u8.!="]
	8 --> 9
	5 --> 9
	5["arg__1366 0"]
	8["arg__1365 u8.&"]
	3 --> 8
	6 --> 8
	6["arg__1368 0x40u8"]
	17["index pop_u32"]
	13 -. Stack .-> 17
	11{"memindex ϕ"}
	9 --> 11
	10 --> 11
	4 --> 11
	4["memindex__1370 0u"]
	29["eff__1352 mach_writeMemory64_u32"]
	11 --> 29
	24 --> 29
	23 --> 29
	13 --> 29
	0 -. Memory .-> 29
	23["offset imm_readULEB64"]
	12 -. Codeptr .-> 23
	24["index pop_u64"]
	13 -. Stack .-> 24
	15["cond__1351 m_isMemory64"]
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
def arg__1368 : byte = 0x40u8;
def arg__1365 = u8.&(flags, arg__1368);
def arg__1366 : byte = 0;
def cond__1363 = u8.!=(arg__1365, arg__1366);
var memindex: u32;
if (cond__1363) {
	def memindex__1364 = imm_readULEB32();
} else {
	def memindex__1370 : u32 = 0u;
}
// phis: memindex <- memindex__1364; memindex <- memindex__1370; 
def cond__1351 = m_isMemory64(memindex);
if (cond__1351) {
	def offset = imm_readULEB64();
	def index = pop_u64();
	def eff__1352 = mach_writeMemory64_u32(memindex, index, offset, val);
} else {
	def offset = imm_readULEB32();
	def index = pop_u32();
	def eff__1357 = mach_writeMemory32_u32(memindex, index, offset, val);
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
def arg__1450 : byte = 0;
def arg__1452 : byte = 0x40u8;
def arg__1451 = (flags);
def arg__1449 = u8.&(arg__1451, arg__1452);
def cond__1447 = u8.!=(arg__1449, arg__1450);
if (cond__1447) {
	def memindex__1448 = imm_readULEB32();
}
// phis: memindex <- memindex__1448; 
def val = pop_u64();
def arg__1446 = (memindex);
def cond__1435 = m_isMemory64(arg__1446);
if (cond__1435) {
	def offset = imm_readULEB64();
	def index = pop_u64();
	def arg__1440 = (val);
	def arg__1439 = (offset);
	def arg__1438 = (index);
	def arg__1437 = (memindex);
	def eff__1436 = mach_writeMemory64_u64(arg__1437, arg__1438, arg__1439, arg__1440);
} else {
	def offset = imm_readULEB32();
	def index = pop_u32();
	def arg__1445 = (val);
	def arg__1444 = (offset);
	def arg__1443 = (index);
	def arg__1442 = (memindex);
	def eff__1441 = mach_writeMemory32_u64(arg__1442, arg__1443, arg__1444, arg__1445);
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
	22["eff__1441 mach_writeMemory32_u64"]
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
	10["memindex__1448 imm_readULEB32"]
	3 -. Codeptr .-> 10
	9["cond__1447 u8.!="]
	8 --> 9
	5 --> 9
	5["arg__1450 0"]
	8["arg__1449 u8.&"]
	3 --> 8
	6 --> 8
	6["arg__1452 0x40u8"]
	17["index pop_u32"]
	13 -. Stack .-> 17
	11{"memindex ϕ"}
	9 --> 11
	10 --> 11
	4 --> 11
	4["memindex__1453 0u"]
	29["eff__1436 mach_writeMemory64_u64"]
	11 --> 29
	24 --> 29
	23 --> 29
	13 --> 29
	0 -. Memory .-> 29
	23["offset imm_readULEB64"]
	12 -. Codeptr .-> 23
	24["index pop_u64"]
	13 -. Stack .-> 24
	15["cond__1435 m_isMemory64"]
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
	22["eff__1441 mach_writeMemory32_u64"]
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
	10["memindex__1448 imm_readULEB32"]
	3 -. Codeptr .-> 10
	9["cond__1447 u8.!="]
	8 --> 9
	5 --> 9
	5["arg__1450 0"]
	8["arg__1449 u8.&"]
	3 --> 8
	6 --> 8
	6["arg__1452 0x40u8"]
	17["index pop_u32"]
	13 -. Stack .-> 17
	11{"memindex ϕ"}
	9 --> 11
	10 --> 11
	4 --> 11
	4["memindex__1454 0u"]
	29["eff__1436 mach_writeMemory64_u64"]
	11 --> 29
	24 --> 29
	23 --> 29
	13 --> 29
	0 -. Memory .-> 29
	23["offset imm_readULEB64"]
	12 -. Codeptr .-> 23
	24["index pop_u64"]
	13 -. Stack .-> 24
	15["cond__1435 m_isMemory64"]
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
	22["eff__1441 mach_writeMemory32_u64"]
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
	10["memindex__1448 imm_readULEB32"]
	3 -. Codeptr .-> 10
	9["cond__1447 u8.!="]
	8 --> 9
	5 --> 9
	5["arg__1450 0"]
	8["arg__1449 u8.&"]
	3 --> 8
	6 --> 8
	6["arg__1452 0x40u8"]
	17["index pop_u32"]
	13 -. Stack .-> 17
	11{"memindex ϕ"}
	9 --> 11
	10 --> 11
	4 --> 11
	4["memindex__1454 0u"]
	29["eff__1436 mach_writeMemory64_u64"]
	11 --> 29
	24 --> 29
	23 --> 29
	13 --> 29
	0 -. Memory .-> 29
	23["offset imm_readULEB64"]
	12 -. Codeptr .-> 23
	24["index pop_u64"]
	13 -. Stack .-> 24
	15["cond__1435 m_isMemory64"]
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
window.traces["I64_STORE"]["post_surgery 463"] = ''
window.traces["I64_STORE"]["post_surgery 463"] += `<pre class='graph'>---
config:
  layout: elk
---
graph TD
	4[\\"Finish"/]
	19 -. Codeptr .-> 4
	21 -. Stack .-> 4
	2 -. Trap Locals Globals Tables Extra .-> 4
	1 -. Memory .-> 4
	1{{"Sϕ Memory "}}
	20 --> 1
	18 --> 1
	9 --> 1
	9["eff__1441 mach_writeMemory32_u64"]
	15 --> 9
	3 --> 9
	28 --> 9
	17 --> 9
	2 -. Memory .-> 9
	2[/"Start"\\]
	17["val pop_u64"]
	2 -. Stack .-> 17
	28["offset__1459 imm_readULEB32"]
	16 -. Codeptr .-> 28
	16{{"Sϕ Codeptr "}}
	13 --> 16
	14 --> 16
	5 --> 16
	5["flags imm_readU8"]
	2 -. Codeptr .-> 5
	14["memindex__1448 imm_readULEB32"]
	5 -. Codeptr .-> 14
	13["cond__1447 u8.!="]
	11 --> 13
	7 --> 13
	7["arg__1450 0"]
	11["arg__1449 u8.&"]
	5 --> 11
	8 --> 11
	8["arg__1452 0x40u8"]
	3["index pop_u32"]
	17 -. Stack .-> 3
	15{"memindex ϕ"}
	13 --> 15
	14 --> 15
	6 --> 15
	6["memindex__1454 0u"]
	18["eff__1436 mach_writeMemory64_u64"]
	15 --> 18
	12 --> 18
	24 --> 18
	17 --> 18
	2 -. Memory .-> 18
	24["offset__1456 imm_readULEB64"]
	16 -. Codeptr .-> 24
	12["index pop_u64"]
	17 -. Stack .-> 12
	20["cond__1435 m_isMemory64"]
	15 --> 20
	21{{"Sϕ Stack "}}
	20 --> 21
	12 --> 21
	3 --> 21
	19{{"Sϕ Codeptr "}}
	20 --> 19
	24 --> 19
	28 --> 19
</pre>`;
window.traces["I64_STORE"]["post_surgery 468"] = ''
window.traces["I64_STORE"]["post_surgery 468"] += `<pre class='graph'>---
config:
  layout: elk
---
graph TD
	4[\\"Finish"/]
	19 -. Codeptr .-> 4
	21 -. Stack .-> 4
	2 -. Trap Locals Globals Tables Extra .-> 4
	1 -. Memory .-> 4
	1{{"Sϕ Memory "}}
	20 --> 1
	18 --> 1
	9 --> 1
	9["eff__1441 mach_writeMemory32_u64"]
	15 --> 9
	3 --> 9
	28 --> 9
	17 --> 9
	2 -. Memory .-> 9
	2[/"Start"\\]
	17["val pop_u64"]
	2 -. Stack .-> 17
	28["offset__1459 imm_readULEB32"]
	16 -. Codeptr .-> 28
	16{{"Sϕ Codeptr "}}
	13 --> 16
	43 --> 16
	5 --> 16
	5["flags imm_readU8"]
	2 -. Codeptr .-> 5
	43["memindex__1448__1469 imm_readULEB32"]
	5 -. Codeptr .-> 43
	13["cond__1447 u8.!="]
	11 --> 13
	7 --> 13
	7["arg__1450 0"]
	11["arg__1449 u8.&"]
	5 --> 11
	8 --> 11
	8["arg__1452 0x40u8"]
	3["index pop_u32"]
	17 -. Stack .-> 3
	15{"memindex ϕ"}
	13 --> 15
	43 --> 15
	45 --> 15
	45["memindex__1454__1470 0u"]
	18["eff__1436 mach_writeMemory64_u64"]
	15 --> 18
	12 --> 18
	24 --> 18
	17 --> 18
	2 -. Memory .-> 18
	24["offset__1456 imm_readULEB64"]
	16 -. Codeptr .-> 24
	12["index pop_u64"]
	17 -. Stack .-> 12
	20["cond__1435 m_isMemory64"]
	15 --> 20
	21{{"Sϕ Stack "}}
	20 --> 21
	12 --> 21
	3 --> 21
	19{{"Sϕ Codeptr "}}
	20 --> 19
	24 --> 19
	28 --> 19
</pre>`;
window.traces["I64_STORE"]["schedulerMermaid"] = ''
window.traces["I64_STORE"]["schedulerMermaid"] += `<pre class='graph'>graph TD
subgraph block_461["Block 461"]
	direction TB
	b461_4[\\"Finish"/]
end
phi_463 --> block_461
subgraph phi_463["Phi 463"]
	p463_1{{"Sϕ Memory "}}
	p463_21{{"Sϕ Stack "}}
	p463_19{{"Sϕ Codeptr "}}
end
block_464 --> phi_463
block_465 --> phi_463
subgraph block_464["Block 464"]
	direction TB
	b464_12["index pop_u64"]
	b464_24["offset__1456 imm_readULEB64"]
	b464_18["eff__1436 mach_writeMemory64_u64"]
	b464_12 --> b464_24
	b464_24 --> b464_18
end
branch_462 --> block_464
subgraph branch_462["Branch 462"]
	br462_20["cond__1435 m_isMemory64"]

end
block_466 --> branch_462
subgraph block_466["Block 466"]
	direction TB
	b466_17["val pop_u64"]
	b466_20["cond__1435 m_isMemory64"]
	b466_17 --> b466_20
end
phi_468 --> block_466
subgraph phi_468["Phi 468"]
	p468_16{{"Sϕ Codeptr "}}
	p468_16{{"Sϕ Codeptr "}}
	p468_16{{"Sϕ Codeptr "}}
	p468_16{{"Sϕ Codeptr "}}
	p468_15{"memindex ϕ"}
	p468_15{"memindex ϕ"}
	p468_15{"memindex ϕ"}
	p468_15{"memindex ϕ"}
	p468_15{"memindex ϕ"}
end
block_469 --> phi_468
block_470 --> phi_468
subgraph block_469["Block 469"]
	direction TB
	b469_43["memindex__1448__1469 imm_readULEB32"]
end
branch_467 --> block_469
subgraph branch_467["Branch 467"]
	br467_13["cond__1447 u8.!="]

end
block_471 --> branch_467
subgraph block_471["Block 471"]
	direction TB
	b471_8["arg__1452 0x40u8"]
	b471_7["arg__1450 0"]
	b471_11["arg__1449 u8.&"]
	b471_13["cond__1447 u8.!="]
	b471_8 --> b471_7
	b471_7 --> b471_11
	b471_11 --> b471_13
end
subgraph block_470["Block 470"]
	direction TB
	b470_45["memindex__1454__1470 0u"]
end
branch_467 --> block_470
subgraph block_465["Block 465"]
	direction TB
	b465_3["index pop_u32"]
	b465_28["offset__1459 imm_readULEB32"]
	b465_9["eff__1441 mach_writeMemory32_u64"]
	b465_3 --> b465_28
	b465_28 --> b465_9
end
branch_462 --> block_465

</pre>`;
window.traces["I64_STORE"]["scheduler_ssad"] = ''
window.traces["I64_STORE"]["scheduler_ssad"] += `<pre class=''>def arg__1452 : byte = 0x40u8;
def arg__1450 : byte = 0;
def arg__1449 = u8.&(flags, arg__1452);
def cond__1447 = u8.!=(arg__1449, arg__1450);
if (cond__1447) {
	def memindex__1448__1469 = imm_readULEB32();
} else {
	def memindex__1454__1470 : u32 = 0u;
}
// phis: memindex <- memindex__1448__1469; memindex <- memindex__1454__1470; memindex <- memindex__1448__1469; memindex <- memindex__1454__1470; memindex <- memindex__1448__1469; memindex <- memindex__1454__1470; memindex <- memindex__1448__1469; memindex <- memindex__1454__1470; memindex <- memindex__1448__1469; memindex <- memindex__1454__1470; 
def val = pop_u64();
def cond__1435 = m_isMemory64(memindex);
if (cond__1435) {
	def index = pop_u64();
	def offset__1456 = imm_readULEB64();
	def eff__1436 = mach_writeMemory64_u64(memindex, index, offset__1456, val);
} else {
	def index = pop_u32();
	def offset__1459 = imm_readULEB32();
	def eff__1441 = mach_writeMemory32_u64(memindex, index, offset__1459, val);
}
// phis: 
</pre>`;
window.traces["I64_STORE"]["scheduler_ssad_pretty"] = ''
window.traces["I64_STORE"]["scheduler_ssad_pretty"] += `<pre class=''>if (u8.!=(u8.&(flags, 0x40u8), 0)) {
	memindex = imm_readULEB32();
} else {
	memindex = 0u;
}
def val = pop_u64();
def cond = m_isMemory64(memindex);
if (cond) {
	def index = pop_u64();
	def offset = imm_readULEB64();
	mach_writeMemory64_u64(memindex, index, offset, val);
} else {
	def index = pop_u32();
	def offset1 = imm_readULEB32();
	mach_writeMemory32_u64(memindex, index, offset1, val);
}
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
	22["eff__1441 mach_writeMemory32_u64"]
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
	10["memindex__1448 imm_readULEB32"]
	3 -. Codeptr .-> 10
	9["cond__1447 u8.!="]
	8 --> 9
	5 --> 9
	5["arg__1450 0"]
	8["arg__1449 u8.&"]
	3 --> 8
	6 --> 8
	6["arg__1452 0x40u8"]
	17["index pop_u32"]
	13 -. Stack .-> 17
	11{"memindex ϕ"}
	9 --> 11
	10 --> 11
	4 --> 11
	4["memindex__1454 0u"]
	29["eff__1436 mach_writeMemory64_u64"]
	11 --> 29
	24 --> 29
	23 --> 29
	13 --> 29
	0 -. Memory .-> 29
	23["offset imm_readULEB64"]
	12 -. Codeptr .-> 23
	24["index pop_u64"]
	13 -. Stack .-> 24
	15["cond__1435 m_isMemory64"]
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
def arg__1452 : byte = 0x40u8;
def arg__1449 = u8.&(flags, arg__1452);
def arg__1450 : byte = 0;
def cond__1447 = u8.!=(arg__1449, arg__1450);
var memindex: u32;
if (cond__1447) {
	def memindex__1448 = imm_readULEB32();
} else {
	def memindex__1454 : u32 = 0u;
}
// phis: memindex <- memindex__1448; memindex <- memindex__1454; 
def cond__1435 = m_isMemory64(memindex);
if (cond__1435) {
	def offset = imm_readULEB64();
	def index = pop_u64();
	def eff__1436 = mach_writeMemory64_u64(memindex, index, offset, val);
} else {
	def offset = imm_readULEB32();
	def index = pop_u32();
	def eff__1441 = mach_writeMemory32_u64(memindex, index, offset, val);
}
// phis: 
</pre>`;
window.traces["I64_STORE_ul"] = {}
window.traces["I64_STORE_ul"]["post_surgery 474"] = ''
window.traces["I64_STORE_ul"]["post_surgery 474"] += `<pre class='graph'>---
config:
  layout: elk
---
graph TD
	4[\\"Finish"/]
	19 -. Codeptr .-> 4
	21 -. Stack .-> 4
	2 -. Trap Locals Globals Tables Extra .-> 4
	1 -. Memory .-> 4
	1{{"Sϕ Memory "}}
	20 --> 1
	18 --> 1
	9 --> 1
	9["eff__1441 mach_writeMemory32_u64"]
	15 --> 9
	3 --> 9
	28 --> 9
	17 --> 9
	2 -. Memory .-> 9
	2[/"Start"\\]
	17["val pop_u64"]
	2 -. Stack .-> 17
	28["offset__1491 imm_readULEB32"]
	16 -. Codeptr .-> 28
	16{{"Sϕ Codeptr "}}
	13 --> 16
	14 --> 16
	5 --> 16
	5["flags imm_readU8"]
	2 -. Codeptr .-> 5
	14["memindex__1448 imm_readULEB32"]
	5 -. Codeptr .-> 14
	13["cond__1447 u8.!="]
	11 --> 13
	7 --> 13
	7["arg__1450 0"]
	11["arg__1449 u8.&"]
	5 --> 11
	8 --> 11
	8["arg__1452 0x40u8"]
	3["index pop_u32"]
	17 -. Stack .-> 3
	15{"memindex ϕ"}
	13 --> 15
	14 --> 15
	6 --> 15
	6["memindex__1454 0u"]
	18["eff__1436 mach_writeMemory64_u64"]
	15 --> 18
	12 --> 18
	24 --> 18
	17 --> 18
	2 -. Memory .-> 18
	24["offset__1488 imm_readULEB64"]
	16 -. Codeptr .-> 24
	12["index pop_u64"]
	17 -. Stack .-> 12
	20["cond__1435 m_isMemory64"]
	15 --> 20
	21{{"Sϕ Stack "}}
	20 --> 21
	12 --> 21
	3 --> 21
	19{{"Sϕ Codeptr "}}
	20 --> 19
	24 --> 19
	28 --> 19
</pre>`;
window.traces["I64_STORE_ul"]["post_surgery 479"] = ''
window.traces["I64_STORE_ul"]["post_surgery 479"] += `<pre class='graph'>---
config:
  layout: elk
---
graph TD
	4[\\"Finish"/]
	19 -. Codeptr .-> 4
	21 -. Stack .-> 4
	2 -. Trap Locals Globals Tables Extra .-> 4
	1 -. Memory .-> 4
	1{{"Sϕ Memory "}}
	20 --> 1
	18 --> 1
	9 --> 1
	9["eff__1441 mach_writeMemory32_u64"]
	15 --> 9
	3 --> 9
	28 --> 9
	17 --> 9
	2 -. Memory .-> 9
	2[/"Start"\\]
	17["val pop_u64"]
	2 -. Stack .-> 17
	28["offset__1491 imm_readULEB32"]
	16 -. Codeptr .-> 28
	16{{"Sϕ Codeptr "}}
	13 --> 16
	43 --> 16
	5 --> 16
	5["flags imm_readU8"]
	2 -. Codeptr .-> 5
	43["memindex__1448__1501 imm_readULEB32"]
	5 -. Codeptr .-> 43
	13["cond__1447 u8.!="]
	11 --> 13
	7 --> 13
	7["arg__1450 0"]
	11["arg__1449 u8.&"]
	5 --> 11
	8 --> 11
	8["arg__1452 0x40u8"]
	3["index pop_u32"]
	17 -. Stack .-> 3
	15{"memindex ϕ"}
	13 --> 15
	43 --> 15
	45 --> 15
	45["memindex__1454__1502 0u"]
	18["eff__1436 mach_writeMemory64_u64"]
	15 --> 18
	12 --> 18
	24 --> 18
	17 --> 18
	2 -. Memory .-> 18
	24["offset__1488 imm_readULEB64"]
	16 -. Codeptr .-> 24
	12["index pop_u64"]
	17 -. Stack .-> 12
	20["cond__1435 m_isMemory64"]
	15 --> 20
	21{{"Sϕ Stack "}}
	20 --> 21
	12 --> 21
	3 --> 21
	19{{"Sϕ Codeptr "}}
	20 --> 19
	24 --> 19
	28 --> 19
</pre>`;
window.traces["I64_STORE"]["unlem_scheduler"] = ''
window.traces["I64_STORE"]["unlem_scheduler"] += `<pre class='graph'>graph TD
subgraph block_472["Block 472"]
	direction TB
	b472_4[\\"Finish"/]
end
phi_474 --> block_472
subgraph phi_474["Phi 474"]
	p474_1{{"Sϕ Memory "}}
	p474_21{{"Sϕ Stack "}}
	p474_19{{"Sϕ Codeptr "}}
end
block_475 --> phi_474
block_476 --> phi_474
subgraph block_475["Block 475"]
	direction TB
	b475_12["index pop_u64"]
	b475_24["offset__1488 imm_readULEB64"]
	b475_18["eff__1436 mach_writeMemory64_u64"]
	b475_12 --> b475_24
	b475_24 --> b475_18
end
branch_473 --> block_475
subgraph branch_473["Branch 473"]
	br473_20["cond__1435 m_isMemory64"]

end
block_477 --> branch_473
subgraph block_477["Block 477"]
	direction TB
	b477_17["val pop_u64"]
	b477_20["cond__1435 m_isMemory64"]
	b477_17 --> b477_20
end
phi_479 --> block_477
subgraph phi_479["Phi 479"]
	p479_16{{"Sϕ Codeptr "}}
	p479_16{{"Sϕ Codeptr "}}
	p479_16{{"Sϕ Codeptr "}}
	p479_16{{"Sϕ Codeptr "}}
	p479_15{"memindex ϕ"}
	p479_15{"memindex ϕ"}
	p479_15{"memindex ϕ"}
	p479_15{"memindex ϕ"}
	p479_15{"memindex ϕ"}
end
block_480 --> phi_479
block_481 --> phi_479
subgraph block_480["Block 480"]
	direction TB
	b480_43["memindex__1448__1501 imm_readULEB32"]
end
branch_478 --> block_480
subgraph branch_478["Branch 478"]
	br478_13["cond__1447 u8.!="]

end
block_482 --> branch_478
subgraph block_482["Block 482"]
	direction TB
	b482_8["arg__1452 0x40u8"]
	b482_7["arg__1450 0"]
	b482_11["arg__1449 u8.&"]
	b482_13["cond__1447 u8.!="]
	b482_8 --> b482_7
	b482_7 --> b482_11
	b482_11 --> b482_13
end
subgraph block_481["Block 481"]
	direction TB
	b481_45["memindex__1454__1502 0u"]
end
branch_478 --> block_481
subgraph block_476["Block 476"]
	direction TB
	b476_3["index pop_u32"]
	b476_28["offset__1491 imm_readULEB32"]
	b476_9["eff__1441 mach_writeMemory32_u64"]
	b476_3 --> b476_28
	b476_28 --> b476_9
end
branch_473 --> block_476

</pre>`;
window.traces["I64_STORE"]["unlem_scheduler_ssa"] = ''
window.traces["I64_STORE"]["unlem_scheduler_ssa"] += `<pre class=''>def arg__1452 : byte = 0x40u8;
def arg__1450 : byte = 0;
def arg__1449 = u8.&(flags, arg__1452);
def cond__1447 = u8.!=(arg__1449, arg__1450);
if (cond__1447) {
	def memindex__1448__1501 = imm_readULEB32();
} else {
	def memindex__1454__1502 : u32 = 0u;
}
// phis: memindex <- memindex__1448__1501; memindex <- memindex__1454__1502; memindex <- memindex__1448__1501; memindex <- memindex__1454__1502; memindex <- memindex__1448__1501; memindex <- memindex__1454__1502; memindex <- memindex__1448__1501; memindex <- memindex__1454__1502; memindex <- memindex__1448__1501; memindex <- memindex__1454__1502; 
def val = pop_u64();
def cond__1435 = m_isMemory64(memindex);
if (cond__1435) {
	def index = pop_u64();
	def offset__1488 = imm_readULEB64();
	def eff__1436 = mach_writeMemory64_u64(memindex, index, offset__1488, val);
} else {
	def index = pop_u32();
	def offset__1491 = imm_readULEB32();
	def eff__1441 = mach_writeMemory32_u64(memindex, index, offset__1491, val);
}
// phis: 
</pre>`;
window.traces["I64_STORE"]["unlem_scheduler_ssa"] += `<pre class=''>if (u8.!=(u8.&(flags, 0x40u8), 0)) {
	memindex = imm_readULEB32();
} else {
	memindex = 0u;
}
def val = pop_u64();
def cond = m_isMemory64(memindex);
if (cond) {
	def index = pop_u64();
	def offset = imm_readULEB64();
	mach_writeMemory64_u64(memindex, index, offset, val);
} else {
	def index = pop_u32();
	def offset1 = imm_readULEB32();
	mach_writeMemory32_u64(memindex, index, offset1, val);
}
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
	22["eff__1441 mach_writeMemory32_u64"]
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
	10["memindex__1448 imm_readULEB32"]
	3 -. Codeptr .-> 10
	9["cond__1447 u8.!="]
	8 --> 9
	5 --> 9
	5["arg__1450 0"]
	8["arg__1449 u8.&"]
	3 --> 8
	6 --> 8
	6["arg__1452 0x40u8"]
	17["index pop_u32"]
	13 -. Stack .-> 17
	11{"memindex ϕ"}
	9 --> 11
	10 --> 11
	4 --> 11
	4["memindex__1454 0u"]
	29["eff__1436 mach_writeMemory64_u64"]
	11 --> 29
	24 --> 29
	23 --> 29
	13 --> 29
	0 -. Memory .-> 29
	23["offset imm_readULEB64"]
	12 -. Codeptr .-> 23
	24["index pop_u64"]
	13 -. Stack .-> 24
	15["cond__1435 m_isMemory64"]
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
	22["eff__1441 mach_writeMemory32_u64"]
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
	10["memindex__1448 imm_readULEB32"]
	3 -. Codeptr .-> 10
	9["cond__1447 u8.!="]
	8 --> 9
	5 --> 9
	5["arg__1450 0"]
	8["arg__1449 u8.&"]
	3 --> 8
	6 --> 8
	6["arg__1452 0x40u8"]
	17["index pop_u32"]
	13 -. Stack .-> 17
	11{"memindex ϕ"}
	9 --> 11
	10 --> 11
	4 --> 11
	4["memindex__1454 0u"]
	29["eff__1436 mach_writeMemory64_u64"]
	11 --> 29
	24 --> 29
	23 --> 29
	13 --> 29
	0 -. Memory .-> 29
	23["offset imm_readULEB64"]
	12 -. Codeptr .-> 23
	24["index pop_u64"]
	13 -. Stack .-> 24
	15["cond__1435 m_isMemory64"]
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
def arg__1452 : byte = 0x40u8;
def arg__1449 = u8.&(flags, arg__1452);
def arg__1450 : byte = 0;
def cond__1447 = u8.!=(arg__1449, arg__1450);
var memindex: u32;
if (cond__1447) {
	def memindex__1448 = imm_readULEB32();
} else {
	def memindex__1454 : u32 = 0u;
}
// phis: memindex <- memindex__1448; memindex <- memindex__1454; 
def cond__1435 = m_isMemory64(memindex);
if (cond__1435) {
	def offset = imm_readULEB64();
	def index = pop_u64();
	def eff__1436 = mach_writeMemory64_u64(memindex, index, offset, val);
} else {
	def offset = imm_readULEB32();
	def index = pop_u32();
	def eff__1441 = mach_writeMemory32_u64(memindex, index, offset, val);
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
def arg__1534 : byte = 0;
def arg__1536 : byte = 0x40u8;
def arg__1535 = (flags);
def arg__1533 = u8.&(arg__1535, arg__1536);
def cond__1531 = u8.!=(arg__1533, arg__1534);
if (cond__1531) {
	def memindex__1532 = imm_readULEB32();
}
// phis: memindex <- memindex__1532; 
def val = pop_f32();
def arg__1530 = (memindex);
def cond__1519 = m_isMemory64(arg__1530);
if (cond__1519) {
	def offset = imm_readULEB64();
	def index = pop_u64();
	def arg__1524 = (val);
	def arg__1523 = (offset);
	def arg__1522 = (index);
	def arg__1521 = (memindex);
	def eff__1520 = mach_writeMemory64_f32(arg__1521, arg__1522, arg__1523, arg__1524);
} else {
	def offset = imm_readULEB32();
	def index = pop_u32();
	def arg__1529 = (val);
	def arg__1528 = (offset);
	def arg__1527 = (index);
	def arg__1526 = (memindex);
	def eff__1525 = mach_writeMemory32_f32(arg__1526, arg__1527, arg__1528, arg__1529);
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
	15["cond__1519 m_isMemory64"]
	11 --> 15
	11{"memindex ϕ"}
	9 --> 11
	10 --> 11
	4 --> 11
	4["memindex__1537 0u"]
	10["memindex__1532 imm_readULEB32"]
	3 -. Codeptr .-> 10
	3["flags imm_readU8"]
	0 -. Codeptr .-> 3
	9["cond__1531 u8.!="]
	8 --> 9
	5 --> 9
	5["arg__1534 0"]
	8["arg__1533 u8.&"]
	3 --> 8
	6 --> 8
	6["arg__1536 0x40u8"]
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
	15["cond__1519 m_isMemory64"]
	11 --> 15
	11{"memindex ϕ"}
	9 --> 11
	10 --> 11
	4 --> 11
	4["memindex__1538 0u"]
	10["memindex__1532 imm_readULEB32"]
	3 -. Codeptr .-> 10
	3["flags imm_readU8"]
	0 -. Codeptr .-> 3
	9["cond__1531 u8.!="]
	8 --> 9
	5 --> 9
	5["arg__1534 0"]
	8["arg__1533 u8.&"]
	3 --> 8
	6 --> 8
	6["arg__1536 0x40u8"]
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
	15["cond__1519 m_isMemory64"]
	11 --> 15
	11{"memindex ϕ"}
	9 --> 11
	10 --> 11
	4 --> 11
	4["memindex__1538 0u"]
	10["memindex__1532 imm_readULEB32"]
	3 -. Codeptr .-> 10
	3["flags imm_readU8"]
	0 -. Codeptr .-> 3
	9["cond__1531 u8.!="]
	8 --> 9
	5 --> 9
	5["arg__1534 0"]
	8["arg__1533 u8.&"]
	3 --> 8
	6 --> 8
	6["arg__1536 0x40u8"]
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
window.traces["F32_STORE"]["post_surgery 485"] = ''
window.traces["F32_STORE"]["post_surgery 485"] += `<pre class='graph'>---
config:
  layout: elk
---
graph TD
	3[\\"Finish"/]
	16 -. Codeptr .-> 3
	18 -. Stack .-> 3
	1 -. Trap Locals Globals Tables Memory Extra .-> 3
	1[/"Start"\\]
	18{{"Sϕ Stack "}}
	17 --> 18
	10 --> 18
	2 --> 18
	2["index pop_u32"]
	15 -. Stack .-> 2
	15["val pop_f32"]
	1 -. Stack .-> 15
	10["index pop_u64"]
	15 -. Stack .-> 10
	17["cond__1519 m_isMemory64"]
	13 --> 17
	13{"memindex ϕ"}
	11 --> 13
	12 --> 13
	5 --> 13
	5["memindex__1538 0u"]
	12["memindex__1532 imm_readULEB32"]
	4 -. Codeptr .-> 12
	4["flags imm_readU8"]
	1 -. Codeptr .-> 4
	11["cond__1531 u8.!="]
	9 --> 11
	6 --> 11
	6["arg__1534 0"]
	9["arg__1533 u8.&"]
	4 --> 9
	7 --> 9
	7["arg__1536 0x40u8"]
	16{{"Sϕ Codeptr "}}
	17 --> 16
	20 --> 16
	23 --> 16
	23["offset__1542 imm_readULEB32"]
	14 -. Codeptr .-> 23
	14{{"Sϕ Codeptr "}}
	11 --> 14
	12 --> 14
	4 --> 14
	20["offset__1540 imm_readULEB64"]
	14 -. Codeptr .-> 20
</pre>`;
window.traces["F32_STORE"]["post_surgery 490"] = ''
window.traces["F32_STORE"]["post_surgery 490"] += `<pre class='graph'>---
config:
  layout: elk
---
graph TD
	3[\\"Finish"/]
	16 -. Codeptr .-> 3
	18 -. Stack .-> 3
	1 -. Trap Locals Globals Tables Memory Extra .-> 3
	1[/"Start"\\]
	18{{"Sϕ Stack "}}
	17 --> 18
	10 --> 18
	2 --> 18
	2["index pop_u32"]
	15 -. Stack .-> 2
	15["val pop_f32"]
	1 -. Stack .-> 15
	10["index pop_u64"]
	15 -. Stack .-> 10
	17["cond__1519 m_isMemory64"]
	13 --> 17
	13{"memindex ϕ"}
	11 --> 13
	29 --> 13
	31 --> 13
	31["memindex__1538__1546 0u"]
	29["memindex__1532__1545 imm_readULEB32"]
	4 -. Codeptr .-> 29
	4["flags imm_readU8"]
	1 -. Codeptr .-> 4
	11["cond__1531 u8.!="]
	9 --> 11
	6 --> 11
	6["arg__1534 0"]
	9["arg__1533 u8.&"]
	4 --> 9
	7 --> 9
	7["arg__1536 0x40u8"]
	16{{"Sϕ Codeptr "}}
	17 --> 16
	20 --> 16
	23 --> 16
	23["offset__1542 imm_readULEB32"]
	14 -. Codeptr .-> 23
	14{{"Sϕ Codeptr "}}
	11 --> 14
	29 --> 14
	4 --> 14
	20["offset__1540 imm_readULEB64"]
	14 -. Codeptr .-> 20
</pre>`;
window.traces["F32_STORE"]["schedulerMermaid"] = ''
window.traces["F32_STORE"]["schedulerMermaid"] += `<pre class='graph'>graph TD
subgraph block_483["Block 483"]
	direction TB
	b483_3[\\"Finish"/]
end
phi_485 --> block_483
subgraph phi_485["Phi 485"]
	p485_18{{"Sϕ Stack "}}
	p485_16{{"Sϕ Codeptr "}}
end
block_486 --> phi_485
block_487 --> phi_485
subgraph block_486["Block 486"]
	direction TB
	b486_10["index pop_u64"]
	b486_20["offset__1540 imm_readULEB64"]
	b486_10 --> b486_20
end
branch_484 --> block_486
subgraph branch_484["Branch 484"]
	br484_17["cond__1519 m_isMemory64"]

end
block_488 --> branch_484
subgraph block_488["Block 488"]
	direction TB
	b488_15["val pop_f32"]
	b488_17["cond__1519 m_isMemory64"]
	b488_15 --> b488_17
end
phi_490 --> block_488
subgraph phi_490["Phi 490"]
	p490_13{"memindex ϕ"}
	p490_14{{"Sϕ Codeptr "}}
	p490_14{{"Sϕ Codeptr "}}
	p490_13{"memindex ϕ"}
end
block_491 --> phi_490
block_492 --> phi_490
subgraph block_491["Block 491"]
	direction TB
	b491_29["memindex__1532__1545 imm_readULEB32"]
end
branch_489 --> block_491
subgraph branch_489["Branch 489"]
	br489_11["cond__1531 u8.!="]

end
block_493 --> branch_489
subgraph block_493["Block 493"]
	direction TB
	b493_7["arg__1536 0x40u8"]
	b493_6["arg__1534 0"]
	b493_9["arg__1533 u8.&"]
	b493_11["cond__1531 u8.!="]
	b493_7 --> b493_6
	b493_6 --> b493_9
	b493_9 --> b493_11
end
subgraph block_492["Block 492"]
	direction TB
	b492_31["memindex__1538__1546 0u"]
end
branch_489 --> block_492
subgraph block_487["Block 487"]
	direction TB
	b487_2["index pop_u32"]
	b487_23["offset__1542 imm_readULEB32"]
	b487_2 --> b487_23
end
branch_484 --> block_487

</pre>`;
window.traces["F32_STORE"]["scheduler_ssad"] = ''
window.traces["F32_STORE"]["scheduler_ssad"] += `<pre class=''>def arg__1536 : byte = 0x40u8;
def arg__1534 : byte = 0;
def arg__1533 = u8.&(flags, arg__1536);
def cond__1531 = u8.!=(arg__1533, arg__1534);
if (cond__1531) {
	def memindex__1532__1545 = imm_readULEB32();
} else {
	def memindex__1538__1546 : u32 = 0u;
}
// phis: memindex <- memindex__1532__1545; memindex <- memindex__1538__1546; memindex <- memindex__1532__1545; memindex <- memindex__1538__1546; 
def val = pop_f32();
def cond__1519 = m_isMemory64(memindex);
if (cond__1519) {
	def index = pop_u64();
	def offset__1540 = imm_readULEB64();
} else {
	def index = pop_u32();
	def offset__1542 = imm_readULEB32();
}
// phis: 
</pre>`;
window.traces["F32_STORE"]["scheduler_ssad_pretty"] = ''
window.traces["F32_STORE"]["scheduler_ssad_pretty"] += `<pre class=''>if (u8.!=(u8.&(flags, 0x40u8), 0)) {
	memindex = imm_readULEB32();
} else {
	memindex = 0u;
}
def val = pop_f32();
def cond = m_isMemory64(memindex);
if (cond) {
	def index = pop_u64();
	def offset = imm_readULEB64();
} else {
	def index = pop_u32();
	def offset1 = imm_readULEB32();
}
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
	15["cond__1519 m_isMemory64"]
	11 --> 15
	11{"memindex ϕ"}
	9 --> 11
	10 --> 11
	4 --> 11
	4["memindex__1538 0u"]
	10["memindex__1532 imm_readULEB32"]
	3 -. Codeptr .-> 10
	3["flags imm_readU8"]
	0 -. Codeptr .-> 3
	9["cond__1531 u8.!="]
	8 --> 9
	5 --> 9
	5["arg__1534 0"]
	8["arg__1533 u8.&"]
	3 --> 8
	6 --> 8
	6["arg__1536 0x40u8"]
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
def arg__1536 : byte = 0x40u8;
def arg__1533 = u8.&(flags, arg__1536);
def arg__1534 : byte = 0;
def cond__1531 = u8.!=(arg__1533, arg__1534);
var memindex: u32;
if (cond__1531) {
	def memindex__1532 = imm_readULEB32();
} else {
	def memindex__1538 : u32 = 0u;
}
// phis: memindex <- memindex__1532; memindex <- memindex__1538; 
def cond__1519 = m_isMemory64(memindex);
if (cond__1519) {
	def offset = imm_readULEB64();
	def index = pop_u64();
} else {
	def offset = imm_readULEB32();
	def index = pop_u32();
}
// phis: 
</pre>`;
window.traces["F32_STORE_ul"] = {}
window.traces["F32_STORE_ul"]["post_surgery 496"] = ''
window.traces["F32_STORE_ul"]["post_surgery 496"] += `<pre class='graph'>---
config:
  layout: elk
---
graph TD
	3[\\"Finish"/]
	16 -. Codeptr .-> 3
	18 -. Stack .-> 3
	1 -. Trap Locals Globals Tables Memory Extra .-> 3
	1[/"Start"\\]
	18{{"Sϕ Stack "}}
	17 --> 18
	10 --> 18
	2 --> 18
	2["index pop_u32"]
	15 -. Stack .-> 2
	15["val pop_f32"]
	1 -. Stack .-> 15
	10["index pop_u64"]
	15 -. Stack .-> 10
	17["cond__1519 m_isMemory64"]
	13 --> 17
	13{"memindex ϕ"}
	11 --> 13
	12 --> 13
	5 --> 13
	5["memindex__1538 0u"]
	12["memindex__1532 imm_readULEB32"]
	4 -. Codeptr .-> 12
	4["flags imm_readU8"]
	1 -. Codeptr .-> 4
	11["cond__1531 u8.!="]
	9 --> 11
	6 --> 11
	6["arg__1534 0"]
	9["arg__1533 u8.&"]
	4 --> 9
	7 --> 9
	7["arg__1536 0x40u8"]
	16{{"Sϕ Codeptr "}}
	17 --> 16
	20 --> 16
	23 --> 16
	23["offset__1556 imm_readULEB32"]
	14 -. Codeptr .-> 23
	14{{"Sϕ Codeptr "}}
	11 --> 14
	12 --> 14
	4 --> 14
	20["offset__1554 imm_readULEB64"]
	14 -. Codeptr .-> 20
</pre>`;
window.traces["F32_STORE_ul"]["post_surgery 501"] = ''
window.traces["F32_STORE_ul"]["post_surgery 501"] += `<pre class='graph'>---
config:
  layout: elk
---
graph TD
	3[\\"Finish"/]
	16 -. Codeptr .-> 3
	18 -. Stack .-> 3
	1 -. Trap Locals Globals Tables Memory Extra .-> 3
	1[/"Start"\\]
	18{{"Sϕ Stack "}}
	17 --> 18
	10 --> 18
	2 --> 18
	2["index pop_u32"]
	15 -. Stack .-> 2
	15["val pop_f32"]
	1 -. Stack .-> 15
	10["index pop_u64"]
	15 -. Stack .-> 10
	17["cond__1519 m_isMemory64"]
	13 --> 17
	13{"memindex ϕ"}
	11 --> 13
	29 --> 13
	31 --> 13
	31["memindex__1538__1560 0u"]
	29["memindex__1532__1559 imm_readULEB32"]
	4 -. Codeptr .-> 29
	4["flags imm_readU8"]
	1 -. Codeptr .-> 4
	11["cond__1531 u8.!="]
	9 --> 11
	6 --> 11
	6["arg__1534 0"]
	9["arg__1533 u8.&"]
	4 --> 9
	7 --> 9
	7["arg__1536 0x40u8"]
	16{{"Sϕ Codeptr "}}
	17 --> 16
	20 --> 16
	23 --> 16
	23["offset__1556 imm_readULEB32"]
	14 -. Codeptr .-> 23
	14{{"Sϕ Codeptr "}}
	11 --> 14
	29 --> 14
	4 --> 14
	20["offset__1554 imm_readULEB64"]
	14 -. Codeptr .-> 20
</pre>`;
window.traces["F32_STORE"]["unlem_scheduler"] = ''
window.traces["F32_STORE"]["unlem_scheduler"] += `<pre class='graph'>graph TD
subgraph block_494["Block 494"]
	direction TB
	b494_3[\\"Finish"/]
end
phi_496 --> block_494
subgraph phi_496["Phi 496"]
	p496_18{{"Sϕ Stack "}}
	p496_16{{"Sϕ Codeptr "}}
end
block_497 --> phi_496
block_498 --> phi_496
subgraph block_497["Block 497"]
	direction TB
	b497_10["index pop_u64"]
	b497_20["offset__1554 imm_readULEB64"]
	b497_10 --> b497_20
end
branch_495 --> block_497
subgraph branch_495["Branch 495"]
	br495_17["cond__1519 m_isMemory64"]

end
block_499 --> branch_495
subgraph block_499["Block 499"]
	direction TB
	b499_15["val pop_f32"]
	b499_17["cond__1519 m_isMemory64"]
	b499_15 --> b499_17
end
phi_501 --> block_499
subgraph phi_501["Phi 501"]
	p501_13{"memindex ϕ"}
	p501_14{{"Sϕ Codeptr "}}
	p501_14{{"Sϕ Codeptr "}}
	p501_13{"memindex ϕ"}
end
block_502 --> phi_501
block_503 --> phi_501
subgraph block_502["Block 502"]
	direction TB
	b502_29["memindex__1532__1559 imm_readULEB32"]
end
branch_500 --> block_502
subgraph branch_500["Branch 500"]
	br500_11["cond__1531 u8.!="]

end
block_504 --> branch_500
subgraph block_504["Block 504"]
	direction TB
	b504_7["arg__1536 0x40u8"]
	b504_6["arg__1534 0"]
	b504_9["arg__1533 u8.&"]
	b504_11["cond__1531 u8.!="]
	b504_7 --> b504_6
	b504_6 --> b504_9
	b504_9 --> b504_11
end
subgraph block_503["Block 503"]
	direction TB
	b503_31["memindex__1538__1560 0u"]
end
branch_500 --> block_503
subgraph block_498["Block 498"]
	direction TB
	b498_2["index pop_u32"]
	b498_23["offset__1556 imm_readULEB32"]
	b498_2 --> b498_23
end
branch_495 --> block_498

</pre>`;
window.traces["F32_STORE"]["unlem_scheduler_ssa"] = ''
window.traces["F32_STORE"]["unlem_scheduler_ssa"] += `<pre class=''>def arg__1536 : byte = 0x40u8;
def arg__1534 : byte = 0;
def arg__1533 = u8.&(flags, arg__1536);
def cond__1531 = u8.!=(arg__1533, arg__1534);
if (cond__1531) {
	def memindex__1532__1559 = imm_readULEB32();
} else {
	def memindex__1538__1560 : u32 = 0u;
}
// phis: memindex <- memindex__1532__1559; memindex <- memindex__1538__1560; memindex <- memindex__1532__1559; memindex <- memindex__1538__1560; 
def val = pop_f32();
def cond__1519 = m_isMemory64(memindex);
if (cond__1519) {
	def index = pop_u64();
	def offset__1554 = imm_readULEB64();
} else {
	def index = pop_u32();
	def offset__1556 = imm_readULEB32();
}
// phis: 
</pre>`;
window.traces["F32_STORE"]["unlem_scheduler_ssa"] += `<pre class=''>if (u8.!=(u8.&(flags, 0x40u8), 0)) {
	memindex = imm_readULEB32();
} else {
	memindex = 0u;
}
def val = pop_f32();
def cond = m_isMemory64(memindex);
if (cond) {
	def index = pop_u64();
	def offset = imm_readULEB64();
} else {
	def index = pop_u32();
	def offset1 = imm_readULEB32();
}
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
	15["cond__1519 m_isMemory64"]
	11 --> 15
	11{"memindex ϕ"}
	9 --> 11
	10 --> 11
	4 --> 11
	4["memindex__1538 0u"]
	10["memindex__1532 imm_readULEB32"]
	3 -. Codeptr .-> 10
	3["flags imm_readU8"]
	0 -. Codeptr .-> 3
	9["cond__1531 u8.!="]
	8 --> 9
	5 --> 9
	5["arg__1534 0"]
	8["arg__1533 u8.&"]
	3 --> 8
	6 --> 8
	6["arg__1536 0x40u8"]
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
	15["cond__1519 m_isMemory64"]
	11 --> 15
	11{"memindex ϕ"}
	9 --> 11
	10 --> 11
	4 --> 11
	4["memindex__1538 0u"]
	10["memindex__1532 imm_readULEB32"]
	3 -. Codeptr .-> 10
	3["flags imm_readU8"]
	0 -. Codeptr .-> 3
	9["cond__1531 u8.!="]
	8 --> 9
	5 --> 9
	5["arg__1534 0"]
	8["arg__1533 u8.&"]
	3 --> 8
	6 --> 8
	6["arg__1536 0x40u8"]
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
def arg__1536 : byte = 0x40u8;
def arg__1533 = u8.&(flags, arg__1536);
def arg__1534 : byte = 0;
def cond__1531 = u8.!=(arg__1533, arg__1534);
var memindex: u32;
if (cond__1531) {
	def memindex__1532 = imm_readULEB32();
} else {
	def memindex__1538 : u32 = 0u;
}
// phis: memindex <- memindex__1532; memindex <- memindex__1538; 
def cond__1519 = m_isMemory64(memindex);
if (cond__1519) {
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
def arg__1582 : byte = 0;
def arg__1584 : byte = 0x40u8;
def arg__1583 = (flags);
def arg__1581 = u8.&(arg__1583, arg__1584);
def cond__1579 = u8.!=(arg__1581, arg__1582);
if (cond__1579) {
	def memindex__1580 = imm_readULEB32();
}
// phis: memindex <- memindex__1580; 
def val = pop_f64();
def arg__1578 = (memindex);
def cond__1567 = m_isMemory64(arg__1578);
if (cond__1567) {
	def offset = imm_readULEB64();
	def index = pop_u64();
	def arg__1572 = (val);
	def arg__1571 = (offset);
	def arg__1570 = (index);
	def arg__1569 = (memindex);
	def eff__1568 = mach_writeMemory64_f64(arg__1569, arg__1570, arg__1571, arg__1572);
} else {
	def offset = imm_readULEB32();
	def index = pop_u32();
	def arg__1577 = (val);
	def arg__1576 = (offset);
	def arg__1575 = (index);
	def arg__1574 = (memindex);
	def eff__1573 = mach_writeMemory32_f64(arg__1574, arg__1575, arg__1576, arg__1577);
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
	22["eff__1573 mach_writeMemory32_f64"]
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
	10["memindex__1580 imm_readULEB32"]
	3 -. Codeptr .-> 10
	9["cond__1579 u8.!="]
	8 --> 9
	5 --> 9
	5["arg__1582 0"]
	8["arg__1581 u8.&"]
	3 --> 8
	6 --> 8
	6["arg__1584 0x40u8"]
	17["index pop_u32"]
	13 -. Stack .-> 17
	11{"memindex ϕ"}
	9 --> 11
	10 --> 11
	4 --> 11
	4["memindex__1585 0u"]
	29["eff__1568 mach_writeMemory64_f64"]
	11 --> 29
	24 --> 29
	23 --> 29
	13 --> 29
	0 -. Memory .-> 29
	23["offset imm_readULEB64"]
	12 -. Codeptr .-> 23
	24["index pop_u64"]
	13 -. Stack .-> 24
	15["cond__1567 m_isMemory64"]
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
	22["eff__1573 mach_writeMemory32_f64"]
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
	10["memindex__1580 imm_readULEB32"]
	3 -. Codeptr .-> 10
	9["cond__1579 u8.!="]
	8 --> 9
	5 --> 9
	5["arg__1582 0"]
	8["arg__1581 u8.&"]
	3 --> 8
	6 --> 8
	6["arg__1584 0x40u8"]
	17["index pop_u32"]
	13 -. Stack .-> 17
	11{"memindex ϕ"}
	9 --> 11
	10 --> 11
	4 --> 11
	4["memindex__1586 0u"]
	29["eff__1568 mach_writeMemory64_f64"]
	11 --> 29
	24 --> 29
	23 --> 29
	13 --> 29
	0 -. Memory .-> 29
	23["offset imm_readULEB64"]
	12 -. Codeptr .-> 23
	24["index pop_u64"]
	13 -. Stack .-> 24
	15["cond__1567 m_isMemory64"]
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
	22["eff__1573 mach_writeMemory32_f64"]
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
	10["memindex__1580 imm_readULEB32"]
	3 -. Codeptr .-> 10
	9["cond__1579 u8.!="]
	8 --> 9
	5 --> 9
	5["arg__1582 0"]
	8["arg__1581 u8.&"]
	3 --> 8
	6 --> 8
	6["arg__1584 0x40u8"]
	17["index pop_u32"]
	13 -. Stack .-> 17
	11{"memindex ϕ"}
	9 --> 11
	10 --> 11
	4 --> 11
	4["memindex__1586 0u"]
	29["eff__1568 mach_writeMemory64_f64"]
	11 --> 29
	24 --> 29
	23 --> 29
	13 --> 29
	0 -. Memory .-> 29
	23["offset imm_readULEB64"]
	12 -. Codeptr .-> 23
	24["index pop_u64"]
	13 -. Stack .-> 24
	15["cond__1567 m_isMemory64"]
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
window.traces["F64_STORE"]["post_surgery 507"] = ''
window.traces["F64_STORE"]["post_surgery 507"] += `<pre class='graph'>---
config:
  layout: elk
---
graph TD
	4[\\"Finish"/]
	19 -. Codeptr .-> 4
	21 -. Stack .-> 4
	2 -. Trap Locals Globals Tables Extra .-> 4
	1 -. Memory .-> 4
	1{{"Sϕ Memory "}}
	20 --> 1
	18 --> 1
	9 --> 1
	9["eff__1573 mach_writeMemory32_f64"]
	15 --> 9
	3 --> 9
	28 --> 9
	17 --> 9
	2 -. Memory .-> 9
	2[/"Start"\\]
	17["val pop_f64"]
	2 -. Stack .-> 17
	28["offset__1591 imm_readULEB32"]
	16 -. Codeptr .-> 28
	16{{"Sϕ Codeptr "}}
	13 --> 16
	14 --> 16
	5 --> 16
	5["flags imm_readU8"]
	2 -. Codeptr .-> 5
	14["memindex__1580 imm_readULEB32"]
	5 -. Codeptr .-> 14
	13["cond__1579 u8.!="]
	11 --> 13
	7 --> 13
	7["arg__1582 0"]
	11["arg__1581 u8.&"]
	5 --> 11
	8 --> 11
	8["arg__1584 0x40u8"]
	3["index pop_u32"]
	17 -. Stack .-> 3
	15{"memindex ϕ"}
	13 --> 15
	14 --> 15
	6 --> 15
	6["memindex__1586 0u"]
	18["eff__1568 mach_writeMemory64_f64"]
	15 --> 18
	12 --> 18
	24 --> 18
	17 --> 18
	2 -. Memory .-> 18
	24["offset__1588 imm_readULEB64"]
	16 -. Codeptr .-> 24
	12["index pop_u64"]
	17 -. Stack .-> 12
	20["cond__1567 m_isMemory64"]
	15 --> 20
	21{{"Sϕ Stack "}}
	20 --> 21
	12 --> 21
	3 --> 21
	19{{"Sϕ Codeptr "}}
	20 --> 19
	24 --> 19
	28 --> 19
</pre>`;
window.traces["F64_STORE"]["post_surgery 512"] = ''
window.traces["F64_STORE"]["post_surgery 512"] += `<pre class='graph'>---
config:
  layout: elk
---
graph TD
	4[\\"Finish"/]
	19 -. Codeptr .-> 4
	21 -. Stack .-> 4
	2 -. Trap Locals Globals Tables Extra .-> 4
	1 -. Memory .-> 4
	1{{"Sϕ Memory "}}
	20 --> 1
	18 --> 1
	9 --> 1
	9["eff__1573 mach_writeMemory32_f64"]
	15 --> 9
	3 --> 9
	28 --> 9
	17 --> 9
	2 -. Memory .-> 9
	2[/"Start"\\]
	17["val pop_f64"]
	2 -. Stack .-> 17
	28["offset__1591 imm_readULEB32"]
	16 -. Codeptr .-> 28
	16{{"Sϕ Codeptr "}}
	13 --> 16
	43 --> 16
	5 --> 16
	5["flags imm_readU8"]
	2 -. Codeptr .-> 5
	43["memindex__1580__1601 imm_readULEB32"]
	5 -. Codeptr .-> 43
	13["cond__1579 u8.!="]
	11 --> 13
	7 --> 13
	7["arg__1582 0"]
	11["arg__1581 u8.&"]
	5 --> 11
	8 --> 11
	8["arg__1584 0x40u8"]
	3["index pop_u32"]
	17 -. Stack .-> 3
	15{"memindex ϕ"}
	13 --> 15
	43 --> 15
	45 --> 15
	45["memindex__1586__1602 0u"]
	18["eff__1568 mach_writeMemory64_f64"]
	15 --> 18
	12 --> 18
	24 --> 18
	17 --> 18
	2 -. Memory .-> 18
	24["offset__1588 imm_readULEB64"]
	16 -. Codeptr .-> 24
	12["index pop_u64"]
	17 -. Stack .-> 12
	20["cond__1567 m_isMemory64"]
	15 --> 20
	21{{"Sϕ Stack "}}
	20 --> 21
	12 --> 21
	3 --> 21
	19{{"Sϕ Codeptr "}}
	20 --> 19
	24 --> 19
	28 --> 19
</pre>`;
window.traces["F64_STORE"]["schedulerMermaid"] = ''
window.traces["F64_STORE"]["schedulerMermaid"] += `<pre class='graph'>graph TD
subgraph block_505["Block 505"]
	direction TB
	b505_4[\\"Finish"/]
end
phi_507 --> block_505
subgraph phi_507["Phi 507"]
	p507_1{{"Sϕ Memory "}}
	p507_21{{"Sϕ Stack "}}
	p507_19{{"Sϕ Codeptr "}}
end
block_508 --> phi_507
block_509 --> phi_507
subgraph block_508["Block 508"]
	direction TB
	b508_12["index pop_u64"]
	b508_24["offset__1588 imm_readULEB64"]
	b508_18["eff__1568 mach_writeMemory64_f64"]
	b508_12 --> b508_24
	b508_24 --> b508_18
end
branch_506 --> block_508
subgraph branch_506["Branch 506"]
	br506_20["cond__1567 m_isMemory64"]

end
block_510 --> branch_506
subgraph block_510["Block 510"]
	direction TB
	b510_17["val pop_f64"]
	b510_20["cond__1567 m_isMemory64"]
	b510_17 --> b510_20
end
phi_512 --> block_510
subgraph phi_512["Phi 512"]
	p512_16{{"Sϕ Codeptr "}}
	p512_16{{"Sϕ Codeptr "}}
	p512_16{{"Sϕ Codeptr "}}
	p512_16{{"Sϕ Codeptr "}}
	p512_15{"memindex ϕ"}
	p512_15{"memindex ϕ"}
	p512_15{"memindex ϕ"}
	p512_15{"memindex ϕ"}
	p512_15{"memindex ϕ"}
end
block_513 --> phi_512
block_514 --> phi_512
subgraph block_513["Block 513"]
	direction TB
	b513_43["memindex__1580__1601 imm_readULEB32"]
end
branch_511 --> block_513
subgraph branch_511["Branch 511"]
	br511_13["cond__1579 u8.!="]

end
block_515 --> branch_511
subgraph block_515["Block 515"]
	direction TB
	b515_8["arg__1584 0x40u8"]
	b515_7["arg__1582 0"]
	b515_11["arg__1581 u8.&"]
	b515_13["cond__1579 u8.!="]
	b515_8 --> b515_7
	b515_7 --> b515_11
	b515_11 --> b515_13
end
subgraph block_514["Block 514"]
	direction TB
	b514_45["memindex__1586__1602 0u"]
end
branch_511 --> block_514
subgraph block_509["Block 509"]
	direction TB
	b509_3["index pop_u32"]
	b509_28["offset__1591 imm_readULEB32"]
	b509_9["eff__1573 mach_writeMemory32_f64"]
	b509_3 --> b509_28
	b509_28 --> b509_9
end
branch_506 --> block_509

</pre>`;
window.traces["F64_STORE"]["scheduler_ssad"] = ''
window.traces["F64_STORE"]["scheduler_ssad"] += `<pre class=''>def arg__1584 : byte = 0x40u8;
def arg__1582 : byte = 0;
def arg__1581 = u8.&(flags, arg__1584);
def cond__1579 = u8.!=(arg__1581, arg__1582);
if (cond__1579) {
	def memindex__1580__1601 = imm_readULEB32();
} else {
	def memindex__1586__1602 : u32 = 0u;
}
// phis: memindex <- memindex__1580__1601; memindex <- memindex__1586__1602; memindex <- memindex__1580__1601; memindex <- memindex__1586__1602; memindex <- memindex__1580__1601; memindex <- memindex__1586__1602; memindex <- memindex__1580__1601; memindex <- memindex__1586__1602; memindex <- memindex__1580__1601; memindex <- memindex__1586__1602; 
def val = pop_f64();
def cond__1567 = m_isMemory64(memindex);
if (cond__1567) {
	def index = pop_u64();
	def offset__1588 = imm_readULEB64();
	def eff__1568 = mach_writeMemory64_f64(memindex, index, offset__1588, val);
} else {
	def index = pop_u32();
	def offset__1591 = imm_readULEB32();
	def eff__1573 = mach_writeMemory32_f64(memindex, index, offset__1591, val);
}
// phis: 
</pre>`;
window.traces["F64_STORE"]["scheduler_ssad_pretty"] = ''
window.traces["F64_STORE"]["scheduler_ssad_pretty"] += `<pre class=''>if (u8.!=(u8.&(flags, 0x40u8), 0)) {
	memindex = imm_readULEB32();
} else {
	memindex = 0u;
}
def val = pop_f64();
def cond = m_isMemory64(memindex);
if (cond) {
	def index = pop_u64();
	def offset = imm_readULEB64();
	mach_writeMemory64_f64(memindex, index, offset, val);
} else {
	def index = pop_u32();
	def offset1 = imm_readULEB32();
	mach_writeMemory32_f64(memindex, index, offset1, val);
}
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
	22["eff__1573 mach_writeMemory32_f64"]
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
	10["memindex__1580 imm_readULEB32"]
	3 -. Codeptr .-> 10
	9["cond__1579 u8.!="]
	8 --> 9
	5 --> 9
	5["arg__1582 0"]
	8["arg__1581 u8.&"]
	3 --> 8
	6 --> 8
	6["arg__1584 0x40u8"]
	17["index pop_u32"]
	13 -. Stack .-> 17
	11{"memindex ϕ"}
	9 --> 11
	10 --> 11
	4 --> 11
	4["memindex__1586 0u"]
	29["eff__1568 mach_writeMemory64_f64"]
	11 --> 29
	24 --> 29
	23 --> 29
	13 --> 29
	0 -. Memory .-> 29
	23["offset imm_readULEB64"]
	12 -. Codeptr .-> 23
	24["index pop_u64"]
	13 -. Stack .-> 24
	15["cond__1567 m_isMemory64"]
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
def arg__1584 : byte = 0x40u8;
def arg__1581 = u8.&(flags, arg__1584);
def arg__1582 : byte = 0;
def cond__1579 = u8.!=(arg__1581, arg__1582);
var memindex: u32;
if (cond__1579) {
	def memindex__1580 = imm_readULEB32();
} else {
	def memindex__1586 : u32 = 0u;
}
// phis: memindex <- memindex__1580; memindex <- memindex__1586; 
def cond__1567 = m_isMemory64(memindex);
if (cond__1567) {
	def offset = imm_readULEB64();
	def index = pop_u64();
	def eff__1568 = mach_writeMemory64_f64(memindex, index, offset, val);
} else {
	def offset = imm_readULEB32();
	def index = pop_u32();
	def eff__1573 = mach_writeMemory32_f64(memindex, index, offset, val);
}
// phis: 
</pre>`;
window.traces["F64_STORE_ul"] = {}
window.traces["F64_STORE_ul"]["post_surgery 518"] = ''
window.traces["F64_STORE_ul"]["post_surgery 518"] += `<pre class='graph'>---
config:
  layout: elk
---
graph TD
	4[\\"Finish"/]
	19 -. Codeptr .-> 4
	21 -. Stack .-> 4
	2 -. Trap Locals Globals Tables Extra .-> 4
	1 -. Memory .-> 4
	1{{"Sϕ Memory "}}
	20 --> 1
	18 --> 1
	9 --> 1
	9["eff__1573 mach_writeMemory32_f64"]
	15 --> 9
	3 --> 9
	28 --> 9
	17 --> 9
	2 -. Memory .-> 9
	2[/"Start"\\]
	17["val pop_f64"]
	2 -. Stack .-> 17
	28["offset__1623 imm_readULEB32"]
	16 -. Codeptr .-> 28
	16{{"Sϕ Codeptr "}}
	13 --> 16
	14 --> 16
	5 --> 16
	5["flags imm_readU8"]
	2 -. Codeptr .-> 5
	14["memindex__1580 imm_readULEB32"]
	5 -. Codeptr .-> 14
	13["cond__1579 u8.!="]
	11 --> 13
	7 --> 13
	7["arg__1582 0"]
	11["arg__1581 u8.&"]
	5 --> 11
	8 --> 11
	8["arg__1584 0x40u8"]
	3["index pop_u32"]
	17 -. Stack .-> 3
	15{"memindex ϕ"}
	13 --> 15
	14 --> 15
	6 --> 15
	6["memindex__1586 0u"]
	18["eff__1568 mach_writeMemory64_f64"]
	15 --> 18
	12 --> 18
	24 --> 18
	17 --> 18
	2 -. Memory .-> 18
	24["offset__1620 imm_readULEB64"]
	16 -. Codeptr .-> 24
	12["index pop_u64"]
	17 -. Stack .-> 12
	20["cond__1567 m_isMemory64"]
	15 --> 20
	21{{"Sϕ Stack "}}
	20 --> 21
	12 --> 21
	3 --> 21
	19{{"Sϕ Codeptr "}}
	20 --> 19
	24 --> 19
	28 --> 19
</pre>`;
window.traces["F64_STORE_ul"]["post_surgery 523"] = ''
window.traces["F64_STORE_ul"]["post_surgery 523"] += `<pre class='graph'>---
config:
  layout: elk
---
graph TD
	4[\\"Finish"/]
	19 -. Codeptr .-> 4
	21 -. Stack .-> 4
	2 -. Trap Locals Globals Tables Extra .-> 4
	1 -. Memory .-> 4
	1{{"Sϕ Memory "}}
	20 --> 1
	18 --> 1
	9 --> 1
	9["eff__1573 mach_writeMemory32_f64"]
	15 --> 9
	3 --> 9
	28 --> 9
	17 --> 9
	2 -. Memory .-> 9
	2[/"Start"\\]
	17["val pop_f64"]
	2 -. Stack .-> 17
	28["offset__1623 imm_readULEB32"]
	16 -. Codeptr .-> 28
	16{{"Sϕ Codeptr "}}
	13 --> 16
	43 --> 16
	5 --> 16
	5["flags imm_readU8"]
	2 -. Codeptr .-> 5
	43["memindex__1580__1633 imm_readULEB32"]
	5 -. Codeptr .-> 43
	13["cond__1579 u8.!="]
	11 --> 13
	7 --> 13
	7["arg__1582 0"]
	11["arg__1581 u8.&"]
	5 --> 11
	8 --> 11
	8["arg__1584 0x40u8"]
	3["index pop_u32"]
	17 -. Stack .-> 3
	15{"memindex ϕ"}
	13 --> 15
	43 --> 15
	45 --> 15
	45["memindex__1586__1634 0u"]
	18["eff__1568 mach_writeMemory64_f64"]
	15 --> 18
	12 --> 18
	24 --> 18
	17 --> 18
	2 -. Memory .-> 18
	24["offset__1620 imm_readULEB64"]
	16 -. Codeptr .-> 24
	12["index pop_u64"]
	17 -. Stack .-> 12
	20["cond__1567 m_isMemory64"]
	15 --> 20
	21{{"Sϕ Stack "}}
	20 --> 21
	12 --> 21
	3 --> 21
	19{{"Sϕ Codeptr "}}
	20 --> 19
	24 --> 19
	28 --> 19
</pre>`;
window.traces["F64_STORE"]["unlem_scheduler"] = ''
window.traces["F64_STORE"]["unlem_scheduler"] += `<pre class='graph'>graph TD
subgraph block_516["Block 516"]
	direction TB
	b516_4[\\"Finish"/]
end
phi_518 --> block_516
subgraph phi_518["Phi 518"]
	p518_1{{"Sϕ Memory "}}
	p518_21{{"Sϕ Stack "}}
	p518_19{{"Sϕ Codeptr "}}
end
block_519 --> phi_518
block_520 --> phi_518
subgraph block_519["Block 519"]
	direction TB
	b519_12["index pop_u64"]
	b519_24["offset__1620 imm_readULEB64"]
	b519_18["eff__1568 mach_writeMemory64_f64"]
	b519_12 --> b519_24
	b519_24 --> b519_18
end
branch_517 --> block_519
subgraph branch_517["Branch 517"]
	br517_20["cond__1567 m_isMemory64"]

end
block_521 --> branch_517
subgraph block_521["Block 521"]
	direction TB
	b521_17["val pop_f64"]
	b521_20["cond__1567 m_isMemory64"]
	b521_17 --> b521_20
end
phi_523 --> block_521
subgraph phi_523["Phi 523"]
	p523_16{{"Sϕ Codeptr "}}
	p523_16{{"Sϕ Codeptr "}}
	p523_16{{"Sϕ Codeptr "}}
	p523_16{{"Sϕ Codeptr "}}
	p523_15{"memindex ϕ"}
	p523_15{"memindex ϕ"}
	p523_15{"memindex ϕ"}
	p523_15{"memindex ϕ"}
	p523_15{"memindex ϕ"}
end
block_524 --> phi_523
block_525 --> phi_523
subgraph block_524["Block 524"]
	direction TB
	b524_43["memindex__1580__1633 imm_readULEB32"]
end
branch_522 --> block_524
subgraph branch_522["Branch 522"]
	br522_13["cond__1579 u8.!="]

end
block_526 --> branch_522
subgraph block_526["Block 526"]
	direction TB
	b526_8["arg__1584 0x40u8"]
	b526_7["arg__1582 0"]
	b526_11["arg__1581 u8.&"]
	b526_13["cond__1579 u8.!="]
	b526_8 --> b526_7
	b526_7 --> b526_11
	b526_11 --> b526_13
end
subgraph block_525["Block 525"]
	direction TB
	b525_45["memindex__1586__1634 0u"]
end
branch_522 --> block_525
subgraph block_520["Block 520"]
	direction TB
	b520_3["index pop_u32"]
	b520_28["offset__1623 imm_readULEB32"]
	b520_9["eff__1573 mach_writeMemory32_f64"]
	b520_3 --> b520_28
	b520_28 --> b520_9
end
branch_517 --> block_520

</pre>`;
window.traces["F64_STORE"]["unlem_scheduler_ssa"] = ''
window.traces["F64_STORE"]["unlem_scheduler_ssa"] += `<pre class=''>def arg__1584 : byte = 0x40u8;
def arg__1582 : byte = 0;
def arg__1581 = u8.&(flags, arg__1584);
def cond__1579 = u8.!=(arg__1581, arg__1582);
if (cond__1579) {
	def memindex__1580__1633 = imm_readULEB32();
} else {
	def memindex__1586__1634 : u32 = 0u;
}
// phis: memindex <- memindex__1580__1633; memindex <- memindex__1586__1634; memindex <- memindex__1580__1633; memindex <- memindex__1586__1634; memindex <- memindex__1580__1633; memindex <- memindex__1586__1634; memindex <- memindex__1580__1633; memindex <- memindex__1586__1634; memindex <- memindex__1580__1633; memindex <- memindex__1586__1634; 
def val = pop_f64();
def cond__1567 = m_isMemory64(memindex);
if (cond__1567) {
	def index = pop_u64();
	def offset__1620 = imm_readULEB64();
	def eff__1568 = mach_writeMemory64_f64(memindex, index, offset__1620, val);
} else {
	def index = pop_u32();
	def offset__1623 = imm_readULEB32();
	def eff__1573 = mach_writeMemory32_f64(memindex, index, offset__1623, val);
}
// phis: 
</pre>`;
window.traces["F64_STORE"]["unlem_scheduler_ssa"] += `<pre class=''>if (u8.!=(u8.&(flags, 0x40u8), 0)) {
	memindex = imm_readULEB32();
} else {
	memindex = 0u;
}
def val = pop_f64();
def cond = m_isMemory64(memindex);
if (cond) {
	def index = pop_u64();
	def offset = imm_readULEB64();
	mach_writeMemory64_f64(memindex, index, offset, val);
} else {
	def index = pop_u32();
	def offset1 = imm_readULEB32();
	mach_writeMemory32_f64(memindex, index, offset1, val);
}
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
	22["eff__1573 mach_writeMemory32_f64"]
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
	10["memindex__1580 imm_readULEB32"]
	3 -. Codeptr .-> 10
	9["cond__1579 u8.!="]
	8 --> 9
	5 --> 9
	5["arg__1582 0"]
	8["arg__1581 u8.&"]
	3 --> 8
	6 --> 8
	6["arg__1584 0x40u8"]
	17["index pop_u32"]
	13 -. Stack .-> 17
	11{"memindex ϕ"}
	9 --> 11
	10 --> 11
	4 --> 11
	4["memindex__1586 0u"]
	29["eff__1568 mach_writeMemory64_f64"]
	11 --> 29
	24 --> 29
	23 --> 29
	13 --> 29
	0 -. Memory .-> 29
	23["offset imm_readULEB64"]
	12 -. Codeptr .-> 23
	24["index pop_u64"]
	13 -. Stack .-> 24
	15["cond__1567 m_isMemory64"]
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
	22["eff__1573 mach_writeMemory32_f64"]
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
	10["memindex__1580 imm_readULEB32"]
	3 -. Codeptr .-> 10
	9["cond__1579 u8.!="]
	8 --> 9
	5 --> 9
	5["arg__1582 0"]
	8["arg__1581 u8.&"]
	3 --> 8
	6 --> 8
	6["arg__1584 0x40u8"]
	17["index pop_u32"]
	13 -. Stack .-> 17
	11{"memindex ϕ"}
	9 --> 11
	10 --> 11
	4 --> 11
	4["memindex__1586 0u"]
	29["eff__1568 mach_writeMemory64_f64"]
	11 --> 29
	24 --> 29
	23 --> 29
	13 --> 29
	0 -. Memory .-> 29
	23["offset imm_readULEB64"]
	12 -. Codeptr .-> 23
	24["index pop_u64"]
	13 -. Stack .-> 24
	15["cond__1567 m_isMemory64"]
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
def arg__1584 : byte = 0x40u8;
def arg__1581 = u8.&(flags, arg__1584);
def arg__1582 : byte = 0;
def cond__1579 = u8.!=(arg__1581, arg__1582);
var memindex: u32;
if (cond__1579) {
	def memindex__1580 = imm_readULEB32();
} else {
	def memindex__1586 : u32 = 0u;
}
// phis: memindex <- memindex__1580; memindex <- memindex__1586; 
def cond__1567 = m_isMemory64(memindex);
if (cond__1567) {
	def offset = imm_readULEB64();
	def index = pop_u64();
	def eff__1568 = mach_writeMemory64_f64(memindex, index, offset, val);
} else {
	def offset = imm_readULEB32();
	def index = pop_u32();
	def eff__1573 = mach_writeMemory32_f64(memindex, index, offset, val);
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
def arg__1666 : byte = 0;
def arg__1668 : byte = 0x40u8;
def arg__1667 = (flags);
def arg__1665 = u8.&(arg__1667, arg__1668);
def cond__1663 = u8.!=(arg__1665, arg__1666);
if (cond__1663) {
	def memindex__1664 = imm_readULEB32();
}
// phis: memindex <- memindex__1664; 
def val = pop_u32();
def arg__1662 = (memindex);
def cond__1651 = m_isMemory64(arg__1662);
if (cond__1651) {
	def offset = imm_readULEB64();
	def index = pop_u64();
	def arg__1656 = (val);
	def arg__1655 = (offset);
	def arg__1654 = (index);
	def arg__1653 = (memindex);
	def eff__1652 = mach_writeMemory64_u8(arg__1653, arg__1654, arg__1655, arg__1656);
} else {
	def offset = imm_readULEB32();
	def index = pop_u32();
	def arg__1661 = (val);
	def arg__1660 = (offset);
	def arg__1659 = (index);
	def arg__1658 = (memindex);
	def eff__1657 = mach_writeMemory32_u8(arg__1658, arg__1659, arg__1660, arg__1661);
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
	22["eff__1657 mach_writeMemory32_u8"]
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
	10["memindex__1664 imm_readULEB32"]
	3 -. Codeptr .-> 10
	9["cond__1663 u8.!="]
	8 --> 9
	5 --> 9
	5["arg__1666 0"]
	8["arg__1665 u8.&"]
	3 --> 8
	6 --> 8
	6["arg__1668 0x40u8"]
	17["index pop_u32"]
	13 -. Stack .-> 17
	11{"memindex ϕ"}
	9 --> 11
	10 --> 11
	4 --> 11
	4["memindex__1669 0u"]
	29["eff__1652 mach_writeMemory64_u8"]
	11 --> 29
	24 --> 29
	23 --> 29
	13 --> 29
	0 -. Memory .-> 29
	23["offset imm_readULEB64"]
	12 -. Codeptr .-> 23
	24["index pop_u64"]
	13 -. Stack .-> 24
	15["cond__1651 m_isMemory64"]
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
	22["eff__1657 mach_writeMemory32_u8"]
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
	10["memindex__1664 imm_readULEB32"]
	3 -. Codeptr .-> 10
	9["cond__1663 u8.!="]
	8 --> 9
	5 --> 9
	5["arg__1666 0"]
	8["arg__1665 u8.&"]
	3 --> 8
	6 --> 8
	6["arg__1668 0x40u8"]
	17["index pop_u32"]
	13 -. Stack .-> 17
	11{"memindex ϕ"}
	9 --> 11
	10 --> 11
	4 --> 11
	4["memindex__1670 0u"]
	29["eff__1652 mach_writeMemory64_u8"]
	11 --> 29
	24 --> 29
	23 --> 29
	13 --> 29
	0 -. Memory .-> 29
	23["offset imm_readULEB64"]
	12 -. Codeptr .-> 23
	24["index pop_u64"]
	13 -. Stack .-> 24
	15["cond__1651 m_isMemory64"]
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
	22["eff__1657 mach_writeMemory32_u8"]
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
	10["memindex__1664 imm_readULEB32"]
	3 -. Codeptr .-> 10
	9["cond__1663 u8.!="]
	8 --> 9
	5 --> 9
	5["arg__1666 0"]
	8["arg__1665 u8.&"]
	3 --> 8
	6 --> 8
	6["arg__1668 0x40u8"]
	17["index pop_u32"]
	13 -. Stack .-> 17
	11{"memindex ϕ"}
	9 --> 11
	10 --> 11
	4 --> 11
	4["memindex__1670 0u"]
	29["eff__1652 mach_writeMemory64_u8"]
	11 --> 29
	24 --> 29
	23 --> 29
	13 --> 29
	0 -. Memory .-> 29
	23["offset imm_readULEB64"]
	12 -. Codeptr .-> 23
	24["index pop_u64"]
	13 -. Stack .-> 24
	15["cond__1651 m_isMemory64"]
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
window.traces["I32_STORE8"]["post_surgery 529"] = ''
window.traces["I32_STORE8"]["post_surgery 529"] += `<pre class='graph'>---
config:
  layout: elk
---
graph TD
	4[\\"Finish"/]
	19 -. Codeptr .-> 4
	21 -. Stack .-> 4
	2 -. Trap Locals Globals Tables Extra .-> 4
	1 -. Memory .-> 4
	1{{"Sϕ Memory "}}
	20 --> 1
	18 --> 1
	9 --> 1
	9["eff__1657 mach_writeMemory32_u8"]
	15 --> 9
	3 --> 9
	28 --> 9
	17 --> 9
	2 -. Memory .-> 9
	2[/"Start"\\]
	17["val pop_u32"]
	2 -. Stack .-> 17
	28["offset__1675 imm_readULEB32"]
	16 -. Codeptr .-> 28
	16{{"Sϕ Codeptr "}}
	13 --> 16
	14 --> 16
	5 --> 16
	5["flags imm_readU8"]
	2 -. Codeptr .-> 5
	14["memindex__1664 imm_readULEB32"]
	5 -. Codeptr .-> 14
	13["cond__1663 u8.!="]
	11 --> 13
	7 --> 13
	7["arg__1666 0"]
	11["arg__1665 u8.&"]
	5 --> 11
	8 --> 11
	8["arg__1668 0x40u8"]
	3["index pop_u32"]
	17 -. Stack .-> 3
	15{"memindex ϕ"}
	13 --> 15
	14 --> 15
	6 --> 15
	6["memindex__1670 0u"]
	18["eff__1652 mach_writeMemory64_u8"]
	15 --> 18
	12 --> 18
	24 --> 18
	17 --> 18
	2 -. Memory .-> 18
	24["offset__1672 imm_readULEB64"]
	16 -. Codeptr .-> 24
	12["index pop_u64"]
	17 -. Stack .-> 12
	20["cond__1651 m_isMemory64"]
	15 --> 20
	21{{"Sϕ Stack "}}
	20 --> 21
	12 --> 21
	3 --> 21
	19{{"Sϕ Codeptr "}}
	20 --> 19
	24 --> 19
	28 --> 19
</pre>`;
window.traces["I32_STORE8"]["post_surgery 534"] = ''
window.traces["I32_STORE8"]["post_surgery 534"] += `<pre class='graph'>---
config:
  layout: elk
---
graph TD
	4[\\"Finish"/]
	19 -. Codeptr .-> 4
	21 -. Stack .-> 4
	2 -. Trap Locals Globals Tables Extra .-> 4
	1 -. Memory .-> 4
	1{{"Sϕ Memory "}}
	20 --> 1
	18 --> 1
	9 --> 1
	9["eff__1657 mach_writeMemory32_u8"]
	15 --> 9
	3 --> 9
	28 --> 9
	17 --> 9
	2 -. Memory .-> 9
	2[/"Start"\\]
	17["val pop_u32"]
	2 -. Stack .-> 17
	28["offset__1675 imm_readULEB32"]
	16 -. Codeptr .-> 28
	16{{"Sϕ Codeptr "}}
	13 --> 16
	43 --> 16
	5 --> 16
	5["flags imm_readU8"]
	2 -. Codeptr .-> 5
	43["memindex__1664__1685 imm_readULEB32"]
	5 -. Codeptr .-> 43
	13["cond__1663 u8.!="]
	11 --> 13
	7 --> 13
	7["arg__1666 0"]
	11["arg__1665 u8.&"]
	5 --> 11
	8 --> 11
	8["arg__1668 0x40u8"]
	3["index pop_u32"]
	17 -. Stack .-> 3
	15{"memindex ϕ"}
	13 --> 15
	43 --> 15
	45 --> 15
	45["memindex__1670__1686 0u"]
	18["eff__1652 mach_writeMemory64_u8"]
	15 --> 18
	12 --> 18
	24 --> 18
	17 --> 18
	2 -. Memory .-> 18
	24["offset__1672 imm_readULEB64"]
	16 -. Codeptr .-> 24
	12["index pop_u64"]
	17 -. Stack .-> 12
	20["cond__1651 m_isMemory64"]
	15 --> 20
	21{{"Sϕ Stack "}}
	20 --> 21
	12 --> 21
	3 --> 21
	19{{"Sϕ Codeptr "}}
	20 --> 19
	24 --> 19
	28 --> 19
</pre>`;
window.traces["I32_STORE8"]["schedulerMermaid"] = ''
window.traces["I32_STORE8"]["schedulerMermaid"] += `<pre class='graph'>graph TD
subgraph block_527["Block 527"]
	direction TB
	b527_4[\\"Finish"/]
end
phi_529 --> block_527
subgraph phi_529["Phi 529"]
	p529_1{{"Sϕ Memory "}}
	p529_21{{"Sϕ Stack "}}
	p529_19{{"Sϕ Codeptr "}}
end
block_530 --> phi_529
block_531 --> phi_529
subgraph block_530["Block 530"]
	direction TB
	b530_12["index pop_u64"]
	b530_24["offset__1672 imm_readULEB64"]
	b530_18["eff__1652 mach_writeMemory64_u8"]
	b530_12 --> b530_24
	b530_24 --> b530_18
end
branch_528 --> block_530
subgraph branch_528["Branch 528"]
	br528_20["cond__1651 m_isMemory64"]

end
block_532 --> branch_528
subgraph block_532["Block 532"]
	direction TB
	b532_17["val pop_u32"]
	b532_20["cond__1651 m_isMemory64"]
	b532_17 --> b532_20
end
phi_534 --> block_532
subgraph phi_534["Phi 534"]
	p534_16{{"Sϕ Codeptr "}}
	p534_16{{"Sϕ Codeptr "}}
	p534_16{{"Sϕ Codeptr "}}
	p534_16{{"Sϕ Codeptr "}}
	p534_15{"memindex ϕ"}
	p534_15{"memindex ϕ"}
	p534_15{"memindex ϕ"}
	p534_15{"memindex ϕ"}
	p534_15{"memindex ϕ"}
end
block_535 --> phi_534
block_536 --> phi_534
subgraph block_535["Block 535"]
	direction TB
	b535_43["memindex__1664__1685 imm_readULEB32"]
end
branch_533 --> block_535
subgraph branch_533["Branch 533"]
	br533_13["cond__1663 u8.!="]

end
block_537 --> branch_533
subgraph block_537["Block 537"]
	direction TB
	b537_8["arg__1668 0x40u8"]
	b537_7["arg__1666 0"]
	b537_11["arg__1665 u8.&"]
	b537_13["cond__1663 u8.!="]
	b537_8 --> b537_7
	b537_7 --> b537_11
	b537_11 --> b537_13
end
subgraph block_536["Block 536"]
	direction TB
	b536_45["memindex__1670__1686 0u"]
end
branch_533 --> block_536
subgraph block_531["Block 531"]
	direction TB
	b531_3["index pop_u32"]
	b531_28["offset__1675 imm_readULEB32"]
	b531_9["eff__1657 mach_writeMemory32_u8"]
	b531_3 --> b531_28
	b531_28 --> b531_9
end
branch_528 --> block_531

</pre>`;
window.traces["I32_STORE8"]["scheduler_ssad"] = ''
window.traces["I32_STORE8"]["scheduler_ssad"] += `<pre class=''>def arg__1668 : byte = 0x40u8;
def arg__1666 : byte = 0;
def arg__1665 = u8.&(flags, arg__1668);
def cond__1663 = u8.!=(arg__1665, arg__1666);
if (cond__1663) {
	def memindex__1664__1685 = imm_readULEB32();
} else {
	def memindex__1670__1686 : u32 = 0u;
}
// phis: memindex <- memindex__1664__1685; memindex <- memindex__1670__1686; memindex <- memindex__1664__1685; memindex <- memindex__1670__1686; memindex <- memindex__1664__1685; memindex <- memindex__1670__1686; memindex <- memindex__1664__1685; memindex <- memindex__1670__1686; memindex <- memindex__1664__1685; memindex <- memindex__1670__1686; 
def val = pop_u32();
def cond__1651 = m_isMemory64(memindex);
if (cond__1651) {
	def index = pop_u64();
	def offset__1672 = imm_readULEB64();
	def eff__1652 = mach_writeMemory64_u8(memindex, index, offset__1672, val);
} else {
	def index = pop_u32();
	def offset__1675 = imm_readULEB32();
	def eff__1657 = mach_writeMemory32_u8(memindex, index, offset__1675, val);
}
// phis: 
</pre>`;
window.traces["I32_STORE8"]["scheduler_ssad_pretty"] = ''
window.traces["I32_STORE8"]["scheduler_ssad_pretty"] += `<pre class=''>if (u8.!=(u8.&(flags, 0x40u8), 0)) {
	memindex = imm_readULEB32();
} else {
	memindex = 0u;
}
def val = pop_u32();
def cond = m_isMemory64(memindex);
if (cond) {
	def index = pop_u64();
	def offset = imm_readULEB64();
	mach_writeMemory64_u8(memindex, index, offset, val);
} else {
	def index = pop_u32();
	def offset1 = imm_readULEB32();
	mach_writeMemory32_u8(memindex, index, offset1, val);
}
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
	22["eff__1657 mach_writeMemory32_u8"]
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
	10["memindex__1664 imm_readULEB32"]
	3 -. Codeptr .-> 10
	9["cond__1663 u8.!="]
	8 --> 9
	5 --> 9
	5["arg__1666 0"]
	8["arg__1665 u8.&"]
	3 --> 8
	6 --> 8
	6["arg__1668 0x40u8"]
	17["index pop_u32"]
	13 -. Stack .-> 17
	11{"memindex ϕ"}
	9 --> 11
	10 --> 11
	4 --> 11
	4["memindex__1670 0u"]
	29["eff__1652 mach_writeMemory64_u8"]
	11 --> 29
	24 --> 29
	23 --> 29
	13 --> 29
	0 -. Memory .-> 29
	23["offset imm_readULEB64"]
	12 -. Codeptr .-> 23
	24["index pop_u64"]
	13 -. Stack .-> 24
	15["cond__1651 m_isMemory64"]
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
def arg__1668 : byte = 0x40u8;
def arg__1665 = u8.&(flags, arg__1668);
def arg__1666 : byte = 0;
def cond__1663 = u8.!=(arg__1665, arg__1666);
var memindex: u32;
if (cond__1663) {
	def memindex__1664 = imm_readULEB32();
} else {
	def memindex__1670 : u32 = 0u;
}
// phis: memindex <- memindex__1664; memindex <- memindex__1670; 
def cond__1651 = m_isMemory64(memindex);
if (cond__1651) {
	def offset = imm_readULEB64();
	def index = pop_u64();
	def eff__1652 = mach_writeMemory64_u8(memindex, index, offset, val);
} else {
	def offset = imm_readULEB32();
	def index = pop_u32();
	def eff__1657 = mach_writeMemory32_u8(memindex, index, offset, val);
}
// phis: 
</pre>`;
window.traces["I32_STORE8_ul"] = {}
window.traces["I32_STORE8_ul"]["post_surgery 540"] = ''
window.traces["I32_STORE8_ul"]["post_surgery 540"] += `<pre class='graph'>---
config:
  layout: elk
---
graph TD
	4[\\"Finish"/]
	19 -. Codeptr .-> 4
	21 -. Stack .-> 4
	2 -. Trap Locals Globals Tables Extra .-> 4
	1 -. Memory .-> 4
	1{{"Sϕ Memory "}}
	20 --> 1
	18 --> 1
	9 --> 1
	9["eff__1657 mach_writeMemory32_u8"]
	15 --> 9
	3 --> 9
	28 --> 9
	17 --> 9
	2 -. Memory .-> 9
	2[/"Start"\\]
	17["val pop_u32"]
	2 -. Stack .-> 17
	28["offset__1707 imm_readULEB32"]
	16 -. Codeptr .-> 28
	16{{"Sϕ Codeptr "}}
	13 --> 16
	14 --> 16
	5 --> 16
	5["flags imm_readU8"]
	2 -. Codeptr .-> 5
	14["memindex__1664 imm_readULEB32"]
	5 -. Codeptr .-> 14
	13["cond__1663 u8.!="]
	11 --> 13
	7 --> 13
	7["arg__1666 0"]
	11["arg__1665 u8.&"]
	5 --> 11
	8 --> 11
	8["arg__1668 0x40u8"]
	3["index pop_u32"]
	17 -. Stack .-> 3
	15{"memindex ϕ"}
	13 --> 15
	14 --> 15
	6 --> 15
	6["memindex__1670 0u"]
	18["eff__1652 mach_writeMemory64_u8"]
	15 --> 18
	12 --> 18
	24 --> 18
	17 --> 18
	2 -. Memory .-> 18
	24["offset__1704 imm_readULEB64"]
	16 -. Codeptr .-> 24
	12["index pop_u64"]
	17 -. Stack .-> 12
	20["cond__1651 m_isMemory64"]
	15 --> 20
	21{{"Sϕ Stack "}}
	20 --> 21
	12 --> 21
	3 --> 21
	19{{"Sϕ Codeptr "}}
	20 --> 19
	24 --> 19
	28 --> 19
</pre>`;
window.traces["I32_STORE8_ul"]["post_surgery 545"] = ''
window.traces["I32_STORE8_ul"]["post_surgery 545"] += `<pre class='graph'>---
config:
  layout: elk
---
graph TD
	4[\\"Finish"/]
	19 -. Codeptr .-> 4
	21 -. Stack .-> 4
	2 -. Trap Locals Globals Tables Extra .-> 4
	1 -. Memory .-> 4
	1{{"Sϕ Memory "}}
	20 --> 1
	18 --> 1
	9 --> 1
	9["eff__1657 mach_writeMemory32_u8"]
	15 --> 9
	3 --> 9
	28 --> 9
	17 --> 9
	2 -. Memory .-> 9
	2[/"Start"\\]
	17["val pop_u32"]
	2 -. Stack .-> 17
	28["offset__1707 imm_readULEB32"]
	16 -. Codeptr .-> 28
	16{{"Sϕ Codeptr "}}
	13 --> 16
	43 --> 16
	5 --> 16
	5["flags imm_readU8"]
	2 -. Codeptr .-> 5
	43["memindex__1664__1717 imm_readULEB32"]
	5 -. Codeptr .-> 43
	13["cond__1663 u8.!="]
	11 --> 13
	7 --> 13
	7["arg__1666 0"]
	11["arg__1665 u8.&"]
	5 --> 11
	8 --> 11
	8["arg__1668 0x40u8"]
	3["index pop_u32"]
	17 -. Stack .-> 3
	15{"memindex ϕ"}
	13 --> 15
	43 --> 15
	45 --> 15
	45["memindex__1670__1718 0u"]
	18["eff__1652 mach_writeMemory64_u8"]
	15 --> 18
	12 --> 18
	24 --> 18
	17 --> 18
	2 -. Memory .-> 18
	24["offset__1704 imm_readULEB64"]
	16 -. Codeptr .-> 24
	12["index pop_u64"]
	17 -. Stack .-> 12
	20["cond__1651 m_isMemory64"]
	15 --> 20
	21{{"Sϕ Stack "}}
	20 --> 21
	12 --> 21
	3 --> 21
	19{{"Sϕ Codeptr "}}
	20 --> 19
	24 --> 19
	28 --> 19
</pre>`;
window.traces["I32_STORE8"]["unlem_scheduler"] = ''
window.traces["I32_STORE8"]["unlem_scheduler"] += `<pre class='graph'>graph TD
subgraph block_538["Block 538"]
	direction TB
	b538_4[\\"Finish"/]
end
phi_540 --> block_538
subgraph phi_540["Phi 540"]
	p540_1{{"Sϕ Memory "}}
	p540_21{{"Sϕ Stack "}}
	p540_19{{"Sϕ Codeptr "}}
end
block_541 --> phi_540
block_542 --> phi_540
subgraph block_541["Block 541"]
	direction TB
	b541_12["index pop_u64"]
	b541_24["offset__1704 imm_readULEB64"]
	b541_18["eff__1652 mach_writeMemory64_u8"]
	b541_12 --> b541_24
	b541_24 --> b541_18
end
branch_539 --> block_541
subgraph branch_539["Branch 539"]
	br539_20["cond__1651 m_isMemory64"]

end
block_543 --> branch_539
subgraph block_543["Block 543"]
	direction TB
	b543_17["val pop_u32"]
	b543_20["cond__1651 m_isMemory64"]
	b543_17 --> b543_20
end
phi_545 --> block_543
subgraph phi_545["Phi 545"]
	p545_16{{"Sϕ Codeptr "}}
	p545_16{{"Sϕ Codeptr "}}
	p545_16{{"Sϕ Codeptr "}}
	p545_16{{"Sϕ Codeptr "}}
	p545_15{"memindex ϕ"}
	p545_15{"memindex ϕ"}
	p545_15{"memindex ϕ"}
	p545_15{"memindex ϕ"}
	p545_15{"memindex ϕ"}
end
block_546 --> phi_545
block_547 --> phi_545
subgraph block_546["Block 546"]
	direction TB
	b546_43["memindex__1664__1717 imm_readULEB32"]
end
branch_544 --> block_546
subgraph branch_544["Branch 544"]
	br544_13["cond__1663 u8.!="]

end
block_548 --> branch_544
subgraph block_548["Block 548"]
	direction TB
	b548_8["arg__1668 0x40u8"]
	b548_7["arg__1666 0"]
	b548_11["arg__1665 u8.&"]
	b548_13["cond__1663 u8.!="]
	b548_8 --> b548_7
	b548_7 --> b548_11
	b548_11 --> b548_13
end
subgraph block_547["Block 547"]
	direction TB
	b547_45["memindex__1670__1718 0u"]
end
branch_544 --> block_547
subgraph block_542["Block 542"]
	direction TB
	b542_3["index pop_u32"]
	b542_28["offset__1707 imm_readULEB32"]
	b542_9["eff__1657 mach_writeMemory32_u8"]
	b542_3 --> b542_28
	b542_28 --> b542_9
end
branch_539 --> block_542

</pre>`;
window.traces["I32_STORE8"]["unlem_scheduler_ssa"] = ''
window.traces["I32_STORE8"]["unlem_scheduler_ssa"] += `<pre class=''>def arg__1668 : byte = 0x40u8;
def arg__1666 : byte = 0;
def arg__1665 = u8.&(flags, arg__1668);
def cond__1663 = u8.!=(arg__1665, arg__1666);
if (cond__1663) {
	def memindex__1664__1717 = imm_readULEB32();
} else {
	def memindex__1670__1718 : u32 = 0u;
}
// phis: memindex <- memindex__1664__1717; memindex <- memindex__1670__1718; memindex <- memindex__1664__1717; memindex <- memindex__1670__1718; memindex <- memindex__1664__1717; memindex <- memindex__1670__1718; memindex <- memindex__1664__1717; memindex <- memindex__1670__1718; memindex <- memindex__1664__1717; memindex <- memindex__1670__1718; 
def val = pop_u32();
def cond__1651 = m_isMemory64(memindex);
if (cond__1651) {
	def index = pop_u64();
	def offset__1704 = imm_readULEB64();
	def eff__1652 = mach_writeMemory64_u8(memindex, index, offset__1704, val);
} else {
	def index = pop_u32();
	def offset__1707 = imm_readULEB32();
	def eff__1657 = mach_writeMemory32_u8(memindex, index, offset__1707, val);
}
// phis: 
</pre>`;
window.traces["I32_STORE8"]["unlem_scheduler_ssa"] += `<pre class=''>if (u8.!=(u8.&(flags, 0x40u8), 0)) {
	memindex = imm_readULEB32();
} else {
	memindex = 0u;
}
def val = pop_u32();
def cond = m_isMemory64(memindex);
if (cond) {
	def index = pop_u64();
	def offset = imm_readULEB64();
	mach_writeMemory64_u8(memindex, index, offset, val);
} else {
	def index = pop_u32();
	def offset1 = imm_readULEB32();
	mach_writeMemory32_u8(memindex, index, offset1, val);
}
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
	22["eff__1657 mach_writeMemory32_u8"]
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
	10["memindex__1664 imm_readULEB32"]
	3 -. Codeptr .-> 10
	9["cond__1663 u8.!="]
	8 --> 9
	5 --> 9
	5["arg__1666 0"]
	8["arg__1665 u8.&"]
	3 --> 8
	6 --> 8
	6["arg__1668 0x40u8"]
	17["index pop_u32"]
	13 -. Stack .-> 17
	11{"memindex ϕ"}
	9 --> 11
	10 --> 11
	4 --> 11
	4["memindex__1670 0u"]
	29["eff__1652 mach_writeMemory64_u8"]
	11 --> 29
	24 --> 29
	23 --> 29
	13 --> 29
	0 -. Memory .-> 29
	23["offset imm_readULEB64"]
	12 -. Codeptr .-> 23
	24["index pop_u64"]
	13 -. Stack .-> 24
	15["cond__1651 m_isMemory64"]
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
	22["eff__1657 mach_writeMemory32_u8"]
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
	10["memindex__1664 imm_readULEB32"]
	3 -. Codeptr .-> 10
	9["cond__1663 u8.!="]
	8 --> 9
	5 --> 9
	5["arg__1666 0"]
	8["arg__1665 u8.&"]
	3 --> 8
	6 --> 8
	6["arg__1668 0x40u8"]
	17["index pop_u32"]
	13 -. Stack .-> 17
	11{"memindex ϕ"}
	9 --> 11
	10 --> 11
	4 --> 11
	4["memindex__1670 0u"]
	29["eff__1652 mach_writeMemory64_u8"]
	11 --> 29
	24 --> 29
	23 --> 29
	13 --> 29
	0 -. Memory .-> 29
	23["offset imm_readULEB64"]
	12 -. Codeptr .-> 23
	24["index pop_u64"]
	13 -. Stack .-> 24
	15["cond__1651 m_isMemory64"]
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
def arg__1668 : byte = 0x40u8;
def arg__1665 = u8.&(flags, arg__1668);
def arg__1666 : byte = 0;
def cond__1663 = u8.!=(arg__1665, arg__1666);
var memindex: u32;
if (cond__1663) {
	def memindex__1664 = imm_readULEB32();
} else {
	def memindex__1670 : u32 = 0u;
}
// phis: memindex <- memindex__1664; memindex <- memindex__1670; 
def cond__1651 = m_isMemory64(memindex);
if (cond__1651) {
	def offset = imm_readULEB64();
	def index = pop_u64();
	def eff__1652 = mach_writeMemory64_u8(memindex, index, offset, val);
} else {
	def offset = imm_readULEB32();
	def index = pop_u32();
	def eff__1657 = mach_writeMemory32_u8(memindex, index, offset, val);
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
def arg__1750 : byte = 0;
def arg__1752 : byte = 0x40u8;
def arg__1751 = (flags);
def arg__1749 = u8.&(arg__1751, arg__1752);
def cond__1747 = u8.!=(arg__1749, arg__1750);
if (cond__1747) {
	def memindex__1748 = imm_readULEB32();
}
// phis: memindex <- memindex__1748; 
def val = pop_u32();
def arg__1746 = (memindex);
def cond__1735 = m_isMemory64(arg__1746);
if (cond__1735) {
	def offset = imm_readULEB64();
	def index = pop_u64();
	def arg__1740 = (val);
	def arg__1739 = (offset);
	def arg__1738 = (index);
	def arg__1737 = (memindex);
	def eff__1736 = mach_writeMemory64_u16(arg__1737, arg__1738, arg__1739, arg__1740);
} else {
	def offset = imm_readULEB32();
	def index = pop_u32();
	def arg__1745 = (val);
	def arg__1744 = (offset);
	def arg__1743 = (index);
	def arg__1742 = (memindex);
	def eff__1741 = mach_writeMemory32_u16(arg__1742, arg__1743, arg__1744, arg__1745);
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
	22["eff__1741 mach_writeMemory32_u16"]
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
	10["memindex__1748 imm_readULEB32"]
	3 -. Codeptr .-> 10
	9["cond__1747 u8.!="]
	8 --> 9
	5 --> 9
	5["arg__1750 0"]
	8["arg__1749 u8.&"]
	3 --> 8
	6 --> 8
	6["arg__1752 0x40u8"]
	17["index pop_u32"]
	13 -. Stack .-> 17
	11{"memindex ϕ"}
	9 --> 11
	10 --> 11
	4 --> 11
	4["memindex__1753 0u"]
	29["eff__1736 mach_writeMemory64_u16"]
	11 --> 29
	24 --> 29
	23 --> 29
	13 --> 29
	0 -. Memory .-> 29
	23["offset imm_readULEB64"]
	12 -. Codeptr .-> 23
	24["index pop_u64"]
	13 -. Stack .-> 24
	15["cond__1735 m_isMemory64"]
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
	22["eff__1741 mach_writeMemory32_u16"]
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
	10["memindex__1748 imm_readULEB32"]
	3 -. Codeptr .-> 10
	9["cond__1747 u8.!="]
	8 --> 9
	5 --> 9
	5["arg__1750 0"]
	8["arg__1749 u8.&"]
	3 --> 8
	6 --> 8
	6["arg__1752 0x40u8"]
	17["index pop_u32"]
	13 -. Stack .-> 17
	11{"memindex ϕ"}
	9 --> 11
	10 --> 11
	4 --> 11
	4["memindex__1754 0u"]
	29["eff__1736 mach_writeMemory64_u16"]
	11 --> 29
	24 --> 29
	23 --> 29
	13 --> 29
	0 -. Memory .-> 29
	23["offset imm_readULEB64"]
	12 -. Codeptr .-> 23
	24["index pop_u64"]
	13 -. Stack .-> 24
	15["cond__1735 m_isMemory64"]
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
	22["eff__1741 mach_writeMemory32_u16"]
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
	10["memindex__1748 imm_readULEB32"]
	3 -. Codeptr .-> 10
	9["cond__1747 u8.!="]
	8 --> 9
	5 --> 9
	5["arg__1750 0"]
	8["arg__1749 u8.&"]
	3 --> 8
	6 --> 8
	6["arg__1752 0x40u8"]
	17["index pop_u32"]
	13 -. Stack .-> 17
	11{"memindex ϕ"}
	9 --> 11
	10 --> 11
	4 --> 11
	4["memindex__1754 0u"]
	29["eff__1736 mach_writeMemory64_u16"]
	11 --> 29
	24 --> 29
	23 --> 29
	13 --> 29
	0 -. Memory .-> 29
	23["offset imm_readULEB64"]
	12 -. Codeptr .-> 23
	24["index pop_u64"]
	13 -. Stack .-> 24
	15["cond__1735 m_isMemory64"]
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
window.traces["I32_STORE16"]["post_surgery 551"] = ''
window.traces["I32_STORE16"]["post_surgery 551"] += `<pre class='graph'>---
config:
  layout: elk
---
graph TD
	4[\\"Finish"/]
	19 -. Codeptr .-> 4
	21 -. Stack .-> 4
	2 -. Trap Locals Globals Tables Extra .-> 4
	1 -. Memory .-> 4
	1{{"Sϕ Memory "}}
	20 --> 1
	18 --> 1
	9 --> 1
	9["eff__1741 mach_writeMemory32_u16"]
	15 --> 9
	3 --> 9
	28 --> 9
	17 --> 9
	2 -. Memory .-> 9
	2[/"Start"\\]
	17["val pop_u32"]
	2 -. Stack .-> 17
	28["offset__1759 imm_readULEB32"]
	16 -. Codeptr .-> 28
	16{{"Sϕ Codeptr "}}
	13 --> 16
	14 --> 16
	5 --> 16
	5["flags imm_readU8"]
	2 -. Codeptr .-> 5
	14["memindex__1748 imm_readULEB32"]
	5 -. Codeptr .-> 14
	13["cond__1747 u8.!="]
	11 --> 13
	7 --> 13
	7["arg__1750 0"]
	11["arg__1749 u8.&"]
	5 --> 11
	8 --> 11
	8["arg__1752 0x40u8"]
	3["index pop_u32"]
	17 -. Stack .-> 3
	15{"memindex ϕ"}
	13 --> 15
	14 --> 15
	6 --> 15
	6["memindex__1754 0u"]
	18["eff__1736 mach_writeMemory64_u16"]
	15 --> 18
	12 --> 18
	24 --> 18
	17 --> 18
	2 -. Memory .-> 18
	24["offset__1756 imm_readULEB64"]
	16 -. Codeptr .-> 24
	12["index pop_u64"]
	17 -. Stack .-> 12
	20["cond__1735 m_isMemory64"]
	15 --> 20
	21{{"Sϕ Stack "}}
	20 --> 21
	12 --> 21
	3 --> 21
	19{{"Sϕ Codeptr "}}
	20 --> 19
	24 --> 19
	28 --> 19
</pre>`;
window.traces["I32_STORE16"]["post_surgery 556"] = ''
window.traces["I32_STORE16"]["post_surgery 556"] += `<pre class='graph'>---
config:
  layout: elk
---
graph TD
	4[\\"Finish"/]
	19 -. Codeptr .-> 4
	21 -. Stack .-> 4
	2 -. Trap Locals Globals Tables Extra .-> 4
	1 -. Memory .-> 4
	1{{"Sϕ Memory "}}
	20 --> 1
	18 --> 1
	9 --> 1
	9["eff__1741 mach_writeMemory32_u16"]
	15 --> 9
	3 --> 9
	28 --> 9
	17 --> 9
	2 -. Memory .-> 9
	2[/"Start"\\]
	17["val pop_u32"]
	2 -. Stack .-> 17
	28["offset__1759 imm_readULEB32"]
	16 -. Codeptr .-> 28
	16{{"Sϕ Codeptr "}}
	13 --> 16
	43 --> 16
	5 --> 16
	5["flags imm_readU8"]
	2 -. Codeptr .-> 5
	43["memindex__1748__1769 imm_readULEB32"]
	5 -. Codeptr .-> 43
	13["cond__1747 u8.!="]
	11 --> 13
	7 --> 13
	7["arg__1750 0"]
	11["arg__1749 u8.&"]
	5 --> 11
	8 --> 11
	8["arg__1752 0x40u8"]
	3["index pop_u32"]
	17 -. Stack .-> 3
	15{"memindex ϕ"}
	13 --> 15
	43 --> 15
	45 --> 15
	45["memindex__1754__1770 0u"]
	18["eff__1736 mach_writeMemory64_u16"]
	15 --> 18
	12 --> 18
	24 --> 18
	17 --> 18
	2 -. Memory .-> 18
	24["offset__1756 imm_readULEB64"]
	16 -. Codeptr .-> 24
	12["index pop_u64"]
	17 -. Stack .-> 12
	20["cond__1735 m_isMemory64"]
	15 --> 20
	21{{"Sϕ Stack "}}
	20 --> 21
	12 --> 21
	3 --> 21
	19{{"Sϕ Codeptr "}}
	20 --> 19
	24 --> 19
	28 --> 19
</pre>`;
window.traces["I32_STORE16"]["schedulerMermaid"] = ''
window.traces["I32_STORE16"]["schedulerMermaid"] += `<pre class='graph'>graph TD
subgraph block_549["Block 549"]
	direction TB
	b549_4[\\"Finish"/]
end
phi_551 --> block_549
subgraph phi_551["Phi 551"]
	p551_1{{"Sϕ Memory "}}
	p551_21{{"Sϕ Stack "}}
	p551_19{{"Sϕ Codeptr "}}
end
block_552 --> phi_551
block_553 --> phi_551
subgraph block_552["Block 552"]
	direction TB
	b552_12["index pop_u64"]
	b552_24["offset__1756 imm_readULEB64"]
	b552_18["eff__1736 mach_writeMemory64_u16"]
	b552_12 --> b552_24
	b552_24 --> b552_18
end
branch_550 --> block_552
subgraph branch_550["Branch 550"]
	br550_20["cond__1735 m_isMemory64"]

end
block_554 --> branch_550
subgraph block_554["Block 554"]
	direction TB
	b554_17["val pop_u32"]
	b554_20["cond__1735 m_isMemory64"]
	b554_17 --> b554_20
end
phi_556 --> block_554
subgraph phi_556["Phi 556"]
	p556_16{{"Sϕ Codeptr "}}
	p556_16{{"Sϕ Codeptr "}}
	p556_16{{"Sϕ Codeptr "}}
	p556_16{{"Sϕ Codeptr "}}
	p556_15{"memindex ϕ"}
	p556_15{"memindex ϕ"}
	p556_15{"memindex ϕ"}
	p556_15{"memindex ϕ"}
	p556_15{"memindex ϕ"}
end
block_557 --> phi_556
block_558 --> phi_556
subgraph block_557["Block 557"]
	direction TB
	b557_43["memindex__1748__1769 imm_readULEB32"]
end
branch_555 --> block_557
subgraph branch_555["Branch 555"]
	br555_13["cond__1747 u8.!="]

end
block_559 --> branch_555
subgraph block_559["Block 559"]
	direction TB
	b559_8["arg__1752 0x40u8"]
	b559_7["arg__1750 0"]
	b559_11["arg__1749 u8.&"]
	b559_13["cond__1747 u8.!="]
	b559_8 --> b559_7
	b559_7 --> b559_11
	b559_11 --> b559_13
end
subgraph block_558["Block 558"]
	direction TB
	b558_45["memindex__1754__1770 0u"]
end
branch_555 --> block_558
subgraph block_553["Block 553"]
	direction TB
	b553_3["index pop_u32"]
	b553_28["offset__1759 imm_readULEB32"]
	b553_9["eff__1741 mach_writeMemory32_u16"]
	b553_3 --> b553_28
	b553_28 --> b553_9
end
branch_550 --> block_553

</pre>`;
window.traces["I32_STORE16"]["scheduler_ssad"] = ''
window.traces["I32_STORE16"]["scheduler_ssad"] += `<pre class=''>def arg__1752 : byte = 0x40u8;
def arg__1750 : byte = 0;
def arg__1749 = u8.&(flags, arg__1752);
def cond__1747 = u8.!=(arg__1749, arg__1750);
if (cond__1747) {
	def memindex__1748__1769 = imm_readULEB32();
} else {
	def memindex__1754__1770 : u32 = 0u;
}
// phis: memindex <- memindex__1748__1769; memindex <- memindex__1754__1770; memindex <- memindex__1748__1769; memindex <- memindex__1754__1770; memindex <- memindex__1748__1769; memindex <- memindex__1754__1770; memindex <- memindex__1748__1769; memindex <- memindex__1754__1770; memindex <- memindex__1748__1769; memindex <- memindex__1754__1770; 
def val = pop_u32();
def cond__1735 = m_isMemory64(memindex);
if (cond__1735) {
	def index = pop_u64();
	def offset__1756 = imm_readULEB64();
	def eff__1736 = mach_writeMemory64_u16(memindex, index, offset__1756, val);
} else {
	def index = pop_u32();
	def offset__1759 = imm_readULEB32();
	def eff__1741 = mach_writeMemory32_u16(memindex, index, offset__1759, val);
}
// phis: 
</pre>`;
window.traces["I32_STORE16"]["scheduler_ssad_pretty"] = ''
window.traces["I32_STORE16"]["scheduler_ssad_pretty"] += `<pre class=''>if (u8.!=(u8.&(flags, 0x40u8), 0)) {
	memindex = imm_readULEB32();
} else {
	memindex = 0u;
}
def val = pop_u32();
def cond = m_isMemory64(memindex);
if (cond) {
	def index = pop_u64();
	def offset = imm_readULEB64();
	mach_writeMemory64_u16(memindex, index, offset, val);
} else {
	def index = pop_u32();
	def offset1 = imm_readULEB32();
	mach_writeMemory32_u16(memindex, index, offset1, val);
}
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
	22["eff__1741 mach_writeMemory32_u16"]
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
	10["memindex__1748 imm_readULEB32"]
	3 -. Codeptr .-> 10
	9["cond__1747 u8.!="]
	8 --> 9
	5 --> 9
	5["arg__1750 0"]
	8["arg__1749 u8.&"]
	3 --> 8
	6 --> 8
	6["arg__1752 0x40u8"]
	17["index pop_u32"]
	13 -. Stack .-> 17
	11{"memindex ϕ"}
	9 --> 11
	10 --> 11
	4 --> 11
	4["memindex__1754 0u"]
	29["eff__1736 mach_writeMemory64_u16"]
	11 --> 29
	24 --> 29
	23 --> 29
	13 --> 29
	0 -. Memory .-> 29
	23["offset imm_readULEB64"]
	12 -. Codeptr .-> 23
	24["index pop_u64"]
	13 -. Stack .-> 24
	15["cond__1735 m_isMemory64"]
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
def arg__1752 : byte = 0x40u8;
def arg__1749 = u8.&(flags, arg__1752);
def arg__1750 : byte = 0;
def cond__1747 = u8.!=(arg__1749, arg__1750);
var memindex: u32;
if (cond__1747) {
	def memindex__1748 = imm_readULEB32();
} else {
	def memindex__1754 : u32 = 0u;
}
// phis: memindex <- memindex__1748; memindex <- memindex__1754; 
def cond__1735 = m_isMemory64(memindex);
if (cond__1735) {
	def offset = imm_readULEB64();
	def index = pop_u64();
	def eff__1736 = mach_writeMemory64_u16(memindex, index, offset, val);
} else {
	def offset = imm_readULEB32();
	def index = pop_u32();
	def eff__1741 = mach_writeMemory32_u16(memindex, index, offset, val);
}
// phis: 
</pre>`;
window.traces["I32_STORE16_ul"] = {}
window.traces["I32_STORE16_ul"]["post_surgery 562"] = ''
window.traces["I32_STORE16_ul"]["post_surgery 562"] += `<pre class='graph'>---
config:
  layout: elk
---
graph TD
	4[\\"Finish"/]
	19 -. Codeptr .-> 4
	21 -. Stack .-> 4
	2 -. Trap Locals Globals Tables Extra .-> 4
	1 -. Memory .-> 4
	1{{"Sϕ Memory "}}
	20 --> 1
	18 --> 1
	9 --> 1
	9["eff__1741 mach_writeMemory32_u16"]
	15 --> 9
	3 --> 9
	28 --> 9
	17 --> 9
	2 -. Memory .-> 9
	2[/"Start"\\]
	17["val pop_u32"]
	2 -. Stack .-> 17
	28["offset__1791 imm_readULEB32"]
	16 -. Codeptr .-> 28
	16{{"Sϕ Codeptr "}}
	13 --> 16
	14 --> 16
	5 --> 16
	5["flags imm_readU8"]
	2 -. Codeptr .-> 5
	14["memindex__1748 imm_readULEB32"]
	5 -. Codeptr .-> 14
	13["cond__1747 u8.!="]
	11 --> 13
	7 --> 13
	7["arg__1750 0"]
	11["arg__1749 u8.&"]
	5 --> 11
	8 --> 11
	8["arg__1752 0x40u8"]
	3["index pop_u32"]
	17 -. Stack .-> 3
	15{"memindex ϕ"}
	13 --> 15
	14 --> 15
	6 --> 15
	6["memindex__1754 0u"]
	18["eff__1736 mach_writeMemory64_u16"]
	15 --> 18
	12 --> 18
	24 --> 18
	17 --> 18
	2 -. Memory .-> 18
	24["offset__1788 imm_readULEB64"]
	16 -. Codeptr .-> 24
	12["index pop_u64"]
	17 -. Stack .-> 12
	20["cond__1735 m_isMemory64"]
	15 --> 20
	21{{"Sϕ Stack "}}
	20 --> 21
	12 --> 21
	3 --> 21
	19{{"Sϕ Codeptr "}}
	20 --> 19
	24 --> 19
	28 --> 19
</pre>`;
window.traces["I32_STORE16_ul"]["post_surgery 567"] = ''
window.traces["I32_STORE16_ul"]["post_surgery 567"] += `<pre class='graph'>---
config:
  layout: elk
---
graph TD
	4[\\"Finish"/]
	19 -. Codeptr .-> 4
	21 -. Stack .-> 4
	2 -. Trap Locals Globals Tables Extra .-> 4
	1 -. Memory .-> 4
	1{{"Sϕ Memory "}}
	20 --> 1
	18 --> 1
	9 --> 1
	9["eff__1741 mach_writeMemory32_u16"]
	15 --> 9
	3 --> 9
	28 --> 9
	17 --> 9
	2 -. Memory .-> 9
	2[/"Start"\\]
	17["val pop_u32"]
	2 -. Stack .-> 17
	28["offset__1791 imm_readULEB32"]
	16 -. Codeptr .-> 28
	16{{"Sϕ Codeptr "}}
	13 --> 16
	43 --> 16
	5 --> 16
	5["flags imm_readU8"]
	2 -. Codeptr .-> 5
	43["memindex__1748__1801 imm_readULEB32"]
	5 -. Codeptr .-> 43
	13["cond__1747 u8.!="]
	11 --> 13
	7 --> 13
	7["arg__1750 0"]
	11["arg__1749 u8.&"]
	5 --> 11
	8 --> 11
	8["arg__1752 0x40u8"]
	3["index pop_u32"]
	17 -. Stack .-> 3
	15{"memindex ϕ"}
	13 --> 15
	43 --> 15
	45 --> 15
	45["memindex__1754__1802 0u"]
	18["eff__1736 mach_writeMemory64_u16"]
	15 --> 18
	12 --> 18
	24 --> 18
	17 --> 18
	2 -. Memory .-> 18
	24["offset__1788 imm_readULEB64"]
	16 -. Codeptr .-> 24
	12["index pop_u64"]
	17 -. Stack .-> 12
	20["cond__1735 m_isMemory64"]
	15 --> 20
	21{{"Sϕ Stack "}}
	20 --> 21
	12 --> 21
	3 --> 21
	19{{"Sϕ Codeptr "}}
	20 --> 19
	24 --> 19
	28 --> 19
</pre>`;
window.traces["I32_STORE16"]["unlem_scheduler"] = ''
window.traces["I32_STORE16"]["unlem_scheduler"] += `<pre class='graph'>graph TD
subgraph block_560["Block 560"]
	direction TB
	b560_4[\\"Finish"/]
end
phi_562 --> block_560
subgraph phi_562["Phi 562"]
	p562_1{{"Sϕ Memory "}}
	p562_21{{"Sϕ Stack "}}
	p562_19{{"Sϕ Codeptr "}}
end
block_563 --> phi_562
block_564 --> phi_562
subgraph block_563["Block 563"]
	direction TB
	b563_12["index pop_u64"]
	b563_24["offset__1788 imm_readULEB64"]
	b563_18["eff__1736 mach_writeMemory64_u16"]
	b563_12 --> b563_24
	b563_24 --> b563_18
end
branch_561 --> block_563
subgraph branch_561["Branch 561"]
	br561_20["cond__1735 m_isMemory64"]

end
block_565 --> branch_561
subgraph block_565["Block 565"]
	direction TB
	b565_17["val pop_u32"]
	b565_20["cond__1735 m_isMemory64"]
	b565_17 --> b565_20
end
phi_567 --> block_565
subgraph phi_567["Phi 567"]
	p567_16{{"Sϕ Codeptr "}}
	p567_16{{"Sϕ Codeptr "}}
	p567_16{{"Sϕ Codeptr "}}
	p567_16{{"Sϕ Codeptr "}}
	p567_15{"memindex ϕ"}
	p567_15{"memindex ϕ"}
	p567_15{"memindex ϕ"}
	p567_15{"memindex ϕ"}
	p567_15{"memindex ϕ"}
end
block_568 --> phi_567
block_569 --> phi_567
subgraph block_568["Block 568"]
	direction TB
	b568_43["memindex__1748__1801 imm_readULEB32"]
end
branch_566 --> block_568
subgraph branch_566["Branch 566"]
	br566_13["cond__1747 u8.!="]

end
block_570 --> branch_566
subgraph block_570["Block 570"]
	direction TB
	b570_8["arg__1752 0x40u8"]
	b570_7["arg__1750 0"]
	b570_11["arg__1749 u8.&"]
	b570_13["cond__1747 u8.!="]
	b570_8 --> b570_7
	b570_7 --> b570_11
	b570_11 --> b570_13
end
subgraph block_569["Block 569"]
	direction TB
	b569_45["memindex__1754__1802 0u"]
end
branch_566 --> block_569
subgraph block_564["Block 564"]
	direction TB
	b564_3["index pop_u32"]
	b564_28["offset__1791 imm_readULEB32"]
	b564_9["eff__1741 mach_writeMemory32_u16"]
	b564_3 --> b564_28
	b564_28 --> b564_9
end
branch_561 --> block_564

</pre>`;
window.traces["I32_STORE16"]["unlem_scheduler_ssa"] = ''
window.traces["I32_STORE16"]["unlem_scheduler_ssa"] += `<pre class=''>def arg__1752 : byte = 0x40u8;
def arg__1750 : byte = 0;
def arg__1749 = u8.&(flags, arg__1752);
def cond__1747 = u8.!=(arg__1749, arg__1750);
if (cond__1747) {
	def memindex__1748__1801 = imm_readULEB32();
} else {
	def memindex__1754__1802 : u32 = 0u;
}
// phis: memindex <- memindex__1748__1801; memindex <- memindex__1754__1802; memindex <- memindex__1748__1801; memindex <- memindex__1754__1802; memindex <- memindex__1748__1801; memindex <- memindex__1754__1802; memindex <- memindex__1748__1801; memindex <- memindex__1754__1802; memindex <- memindex__1748__1801; memindex <- memindex__1754__1802; 
def val = pop_u32();
def cond__1735 = m_isMemory64(memindex);
if (cond__1735) {
	def index = pop_u64();
	def offset__1788 = imm_readULEB64();
	def eff__1736 = mach_writeMemory64_u16(memindex, index, offset__1788, val);
} else {
	def index = pop_u32();
	def offset__1791 = imm_readULEB32();
	def eff__1741 = mach_writeMemory32_u16(memindex, index, offset__1791, val);
}
// phis: 
</pre>`;
window.traces["I32_STORE16"]["unlem_scheduler_ssa"] += `<pre class=''>if (u8.!=(u8.&(flags, 0x40u8), 0)) {
	memindex = imm_readULEB32();
} else {
	memindex = 0u;
}
def val = pop_u32();
def cond = m_isMemory64(memindex);
if (cond) {
	def index = pop_u64();
	def offset = imm_readULEB64();
	mach_writeMemory64_u16(memindex, index, offset, val);
} else {
	def index = pop_u32();
	def offset1 = imm_readULEB32();
	mach_writeMemory32_u16(memindex, index, offset1, val);
}
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
	22["eff__1741 mach_writeMemory32_u16"]
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
	10["memindex__1748 imm_readULEB32"]
	3 -. Codeptr .-> 10
	9["cond__1747 u8.!="]
	8 --> 9
	5 --> 9
	5["arg__1750 0"]
	8["arg__1749 u8.&"]
	3 --> 8
	6 --> 8
	6["arg__1752 0x40u8"]
	17["index pop_u32"]
	13 -. Stack .-> 17
	11{"memindex ϕ"}
	9 --> 11
	10 --> 11
	4 --> 11
	4["memindex__1754 0u"]
	29["eff__1736 mach_writeMemory64_u16"]
	11 --> 29
	24 --> 29
	23 --> 29
	13 --> 29
	0 -. Memory .-> 29
	23["offset imm_readULEB64"]
	12 -. Codeptr .-> 23
	24["index pop_u64"]
	13 -. Stack .-> 24
	15["cond__1735 m_isMemory64"]
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
	22["eff__1741 mach_writeMemory32_u16"]
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
	10["memindex__1748 imm_readULEB32"]
	3 -. Codeptr .-> 10
	9["cond__1747 u8.!="]
	8 --> 9
	5 --> 9
	5["arg__1750 0"]
	8["arg__1749 u8.&"]
	3 --> 8
	6 --> 8
	6["arg__1752 0x40u8"]
	17["index pop_u32"]
	13 -. Stack .-> 17
	11{"memindex ϕ"}
	9 --> 11
	10 --> 11
	4 --> 11
	4["memindex__1754 0u"]
	29["eff__1736 mach_writeMemory64_u16"]
	11 --> 29
	24 --> 29
	23 --> 29
	13 --> 29
	0 -. Memory .-> 29
	23["offset imm_readULEB64"]
	12 -. Codeptr .-> 23
	24["index pop_u64"]
	13 -. Stack .-> 24
	15["cond__1735 m_isMemory64"]
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
def arg__1752 : byte = 0x40u8;
def arg__1749 = u8.&(flags, arg__1752);
def arg__1750 : byte = 0;
def cond__1747 = u8.!=(arg__1749, arg__1750);
var memindex: u32;
if (cond__1747) {
	def memindex__1748 = imm_readULEB32();
} else {
	def memindex__1754 : u32 = 0u;
}
// phis: memindex <- memindex__1748; memindex <- memindex__1754; 
def cond__1735 = m_isMemory64(memindex);
if (cond__1735) {
	def offset = imm_readULEB64();
	def index = pop_u64();
	def eff__1736 = mach_writeMemory64_u16(memindex, index, offset, val);
} else {
	def offset = imm_readULEB32();
	def index = pop_u32();
	def eff__1741 = mach_writeMemory32_u16(memindex, index, offset, val);
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
def arg__1834 : byte = 0;
def arg__1836 : byte = 0x40u8;
def arg__1835 = (flags);
def arg__1833 = u8.&(arg__1835, arg__1836);
def cond__1831 = u8.!=(arg__1833, arg__1834);
if (cond__1831) {
	def memindex__1832 = imm_readULEB32();
}
// phis: memindex <- memindex__1832; 
def val = pop_u64();
def arg__1830 = (memindex);
def cond__1819 = m_isMemory64(arg__1830);
if (cond__1819) {
	def offset = imm_readULEB64();
	def index = pop_u64();
	def arg__1824 = (val);
	def arg__1823 = (offset);
	def arg__1822 = (index);
	def arg__1821 = (memindex);
	def eff__1820 = mach_writeMemory64_u8_64(arg__1821, arg__1822, arg__1823, arg__1824);
} else {
	def offset = imm_readULEB32();
	def index = pop_u32();
	def arg__1829 = (val);
	def arg__1828 = (offset);
	def arg__1827 = (index);
	def arg__1826 = (memindex);
	def eff__1825 = mach_writeMemory32_u8_64(arg__1826, arg__1827, arg__1828, arg__1829);
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
	22["eff__1825 mach_writeMemory32_u8_64"]
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
	10["memindex__1832 imm_readULEB32"]
	3 -. Codeptr .-> 10
	9["cond__1831 u8.!="]
	8 --> 9
	5 --> 9
	5["arg__1834 0"]
	8["arg__1833 u8.&"]
	3 --> 8
	6 --> 8
	6["arg__1836 0x40u8"]
	17["index pop_u32"]
	13 -. Stack .-> 17
	11{"memindex ϕ"}
	9 --> 11
	10 --> 11
	4 --> 11
	4["memindex__1837 0u"]
	29["eff__1820 mach_writeMemory64_u8_64"]
	11 --> 29
	24 --> 29
	23 --> 29
	13 --> 29
	0 -. Memory .-> 29
	23["offset imm_readULEB64"]
	12 -. Codeptr .-> 23
	24["index pop_u64"]
	13 -. Stack .-> 24
	15["cond__1819 m_isMemory64"]
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
	22["eff__1825 mach_writeMemory32_u8_64"]
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
	10["memindex__1832 imm_readULEB32"]
	3 -. Codeptr .-> 10
	9["cond__1831 u8.!="]
	8 --> 9
	5 --> 9
	5["arg__1834 0"]
	8["arg__1833 u8.&"]
	3 --> 8
	6 --> 8
	6["arg__1836 0x40u8"]
	17["index pop_u32"]
	13 -. Stack .-> 17
	11{"memindex ϕ"}
	9 --> 11
	10 --> 11
	4 --> 11
	4["memindex__1838 0u"]
	29["eff__1820 mach_writeMemory64_u8_64"]
	11 --> 29
	24 --> 29
	23 --> 29
	13 --> 29
	0 -. Memory .-> 29
	23["offset imm_readULEB64"]
	12 -. Codeptr .-> 23
	24["index pop_u64"]
	13 -. Stack .-> 24
	15["cond__1819 m_isMemory64"]
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
	22["eff__1825 mach_writeMemory32_u8_64"]
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
	10["memindex__1832 imm_readULEB32"]
	3 -. Codeptr .-> 10
	9["cond__1831 u8.!="]
	8 --> 9
	5 --> 9
	5["arg__1834 0"]
	8["arg__1833 u8.&"]
	3 --> 8
	6 --> 8
	6["arg__1836 0x40u8"]
	17["index pop_u32"]
	13 -. Stack .-> 17
	11{"memindex ϕ"}
	9 --> 11
	10 --> 11
	4 --> 11
	4["memindex__1838 0u"]
	29["eff__1820 mach_writeMemory64_u8_64"]
	11 --> 29
	24 --> 29
	23 --> 29
	13 --> 29
	0 -. Memory .-> 29
	23["offset imm_readULEB64"]
	12 -. Codeptr .-> 23
	24["index pop_u64"]
	13 -. Stack .-> 24
	15["cond__1819 m_isMemory64"]
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
window.traces["I64_STORE8"]["post_surgery 573"] = ''
window.traces["I64_STORE8"]["post_surgery 573"] += `<pre class='graph'>---
config:
  layout: elk
---
graph TD
	4[\\"Finish"/]
	19 -. Codeptr .-> 4
	21 -. Stack .-> 4
	2 -. Trap Locals Globals Tables Extra .-> 4
	1 -. Memory .-> 4
	1{{"Sϕ Memory "}}
	20 --> 1
	18 --> 1
	9 --> 1
	9["eff__1825 mach_writeMemory32_u8_64"]
	15 --> 9
	3 --> 9
	28 --> 9
	17 --> 9
	2 -. Memory .-> 9
	2[/"Start"\\]
	17["val pop_u64"]
	2 -. Stack .-> 17
	28["offset__1843 imm_readULEB32"]
	16 -. Codeptr .-> 28
	16{{"Sϕ Codeptr "}}
	13 --> 16
	14 --> 16
	5 --> 16
	5["flags imm_readU8"]
	2 -. Codeptr .-> 5
	14["memindex__1832 imm_readULEB32"]
	5 -. Codeptr .-> 14
	13["cond__1831 u8.!="]
	11 --> 13
	7 --> 13
	7["arg__1834 0"]
	11["arg__1833 u8.&"]
	5 --> 11
	8 --> 11
	8["arg__1836 0x40u8"]
	3["index pop_u32"]
	17 -. Stack .-> 3
	15{"memindex ϕ"}
	13 --> 15
	14 --> 15
	6 --> 15
	6["memindex__1838 0u"]
	18["eff__1820 mach_writeMemory64_u8_64"]
	15 --> 18
	12 --> 18
	24 --> 18
	17 --> 18
	2 -. Memory .-> 18
	24["offset__1840 imm_readULEB64"]
	16 -. Codeptr .-> 24
	12["index pop_u64"]
	17 -. Stack .-> 12
	20["cond__1819 m_isMemory64"]
	15 --> 20
	21{{"Sϕ Stack "}}
	20 --> 21
	12 --> 21
	3 --> 21
	19{{"Sϕ Codeptr "}}
	20 --> 19
	24 --> 19
	28 --> 19
</pre>`;
window.traces["I64_STORE8"]["post_surgery 578"] = ''
window.traces["I64_STORE8"]["post_surgery 578"] += `<pre class='graph'>---
config:
  layout: elk
---
graph TD
	4[\\"Finish"/]
	19 -. Codeptr .-> 4
	21 -. Stack .-> 4
	2 -. Trap Locals Globals Tables Extra .-> 4
	1 -. Memory .-> 4
	1{{"Sϕ Memory "}}
	20 --> 1
	18 --> 1
	9 --> 1
	9["eff__1825 mach_writeMemory32_u8_64"]
	15 --> 9
	3 --> 9
	28 --> 9
	17 --> 9
	2 -. Memory .-> 9
	2[/"Start"\\]
	17["val pop_u64"]
	2 -. Stack .-> 17
	28["offset__1843 imm_readULEB32"]
	16 -. Codeptr .-> 28
	16{{"Sϕ Codeptr "}}
	13 --> 16
	43 --> 16
	5 --> 16
	5["flags imm_readU8"]
	2 -. Codeptr .-> 5
	43["memindex__1832__1853 imm_readULEB32"]
	5 -. Codeptr .-> 43
	13["cond__1831 u8.!="]
	11 --> 13
	7 --> 13
	7["arg__1834 0"]
	11["arg__1833 u8.&"]
	5 --> 11
	8 --> 11
	8["arg__1836 0x40u8"]
	3["index pop_u32"]
	17 -. Stack .-> 3
	15{"memindex ϕ"}
	13 --> 15
	43 --> 15
	45 --> 15
	45["memindex__1838__1854 0u"]
	18["eff__1820 mach_writeMemory64_u8_64"]
	15 --> 18
	12 --> 18
	24 --> 18
	17 --> 18
	2 -. Memory .-> 18
	24["offset__1840 imm_readULEB64"]
	16 -. Codeptr .-> 24
	12["index pop_u64"]
	17 -. Stack .-> 12
	20["cond__1819 m_isMemory64"]
	15 --> 20
	21{{"Sϕ Stack "}}
	20 --> 21
	12 --> 21
	3 --> 21
	19{{"Sϕ Codeptr "}}
	20 --> 19
	24 --> 19
	28 --> 19
</pre>`;
window.traces["I64_STORE8"]["schedulerMermaid"] = ''
window.traces["I64_STORE8"]["schedulerMermaid"] += `<pre class='graph'>graph TD
subgraph block_571["Block 571"]
	direction TB
	b571_4[\\"Finish"/]
end
phi_573 --> block_571
subgraph phi_573["Phi 573"]
	p573_1{{"Sϕ Memory "}}
	p573_21{{"Sϕ Stack "}}
	p573_19{{"Sϕ Codeptr "}}
end
block_574 --> phi_573
block_575 --> phi_573
subgraph block_574["Block 574"]
	direction TB
	b574_12["index pop_u64"]
	b574_24["offset__1840 imm_readULEB64"]
	b574_18["eff__1820 mach_writeMemory64_u8_64"]
	b574_12 --> b574_24
	b574_24 --> b574_18
end
branch_572 --> block_574
subgraph branch_572["Branch 572"]
	br572_20["cond__1819 m_isMemory64"]

end
block_576 --> branch_572
subgraph block_576["Block 576"]
	direction TB
	b576_17["val pop_u64"]
	b576_20["cond__1819 m_isMemory64"]
	b576_17 --> b576_20
end
phi_578 --> block_576
subgraph phi_578["Phi 578"]
	p578_16{{"Sϕ Codeptr "}}
	p578_16{{"Sϕ Codeptr "}}
	p578_16{{"Sϕ Codeptr "}}
	p578_16{{"Sϕ Codeptr "}}
	p578_15{"memindex ϕ"}
	p578_15{"memindex ϕ"}
	p578_15{"memindex ϕ"}
	p578_15{"memindex ϕ"}
	p578_15{"memindex ϕ"}
end
block_579 --> phi_578
block_580 --> phi_578
subgraph block_579["Block 579"]
	direction TB
	b579_43["memindex__1832__1853 imm_readULEB32"]
end
branch_577 --> block_579
subgraph branch_577["Branch 577"]
	br577_13["cond__1831 u8.!="]

end
block_581 --> branch_577
subgraph block_581["Block 581"]
	direction TB
	b581_8["arg__1836 0x40u8"]
	b581_7["arg__1834 0"]
	b581_11["arg__1833 u8.&"]
	b581_13["cond__1831 u8.!="]
	b581_8 --> b581_7
	b581_7 --> b581_11
	b581_11 --> b581_13
end
subgraph block_580["Block 580"]
	direction TB
	b580_45["memindex__1838__1854 0u"]
end
branch_577 --> block_580
subgraph block_575["Block 575"]
	direction TB
	b575_3["index pop_u32"]
	b575_28["offset__1843 imm_readULEB32"]
	b575_9["eff__1825 mach_writeMemory32_u8_64"]
	b575_3 --> b575_28
	b575_28 --> b575_9
end
branch_572 --> block_575

</pre>`;
window.traces["I64_STORE8"]["scheduler_ssad"] = ''
window.traces["I64_STORE8"]["scheduler_ssad"] += `<pre class=''>def arg__1836 : byte = 0x40u8;
def arg__1834 : byte = 0;
def arg__1833 = u8.&(flags, arg__1836);
def cond__1831 = u8.!=(arg__1833, arg__1834);
if (cond__1831) {
	def memindex__1832__1853 = imm_readULEB32();
} else {
	def memindex__1838__1854 : u32 = 0u;
}
// phis: memindex <- memindex__1832__1853; memindex <- memindex__1838__1854; memindex <- memindex__1832__1853; memindex <- memindex__1838__1854; memindex <- memindex__1832__1853; memindex <- memindex__1838__1854; memindex <- memindex__1832__1853; memindex <- memindex__1838__1854; memindex <- memindex__1832__1853; memindex <- memindex__1838__1854; 
def val = pop_u64();
def cond__1819 = m_isMemory64(memindex);
if (cond__1819) {
	def index = pop_u64();
	def offset__1840 = imm_readULEB64();
	def eff__1820 = mach_writeMemory64_u8_64(memindex, index, offset__1840, val);
} else {
	def index = pop_u32();
	def offset__1843 = imm_readULEB32();
	def eff__1825 = mach_writeMemory32_u8_64(memindex, index, offset__1843, val);
}
// phis: 
</pre>`;
window.traces["I64_STORE8"]["scheduler_ssad_pretty"] = ''
window.traces["I64_STORE8"]["scheduler_ssad_pretty"] += `<pre class=''>if (u8.!=(u8.&(flags, 0x40u8), 0)) {
	memindex = imm_readULEB32();
} else {
	memindex = 0u;
}
def val = pop_u64();
def cond = m_isMemory64(memindex);
if (cond) {
	def index = pop_u64();
	def offset = imm_readULEB64();
	mach_writeMemory64_u8_64(memindex, index, offset, val);
} else {
	def index = pop_u32();
	def offset1 = imm_readULEB32();
	mach_writeMemory32_u8_64(memindex, index, offset1, val);
}
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
	22["eff__1825 mach_writeMemory32_u8_64"]
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
	10["memindex__1832 imm_readULEB32"]
	3 -. Codeptr .-> 10
	9["cond__1831 u8.!="]
	8 --> 9
	5 --> 9
	5["arg__1834 0"]
	8["arg__1833 u8.&"]
	3 --> 8
	6 --> 8
	6["arg__1836 0x40u8"]
	17["index pop_u32"]
	13 -. Stack .-> 17
	11{"memindex ϕ"}
	9 --> 11
	10 --> 11
	4 --> 11
	4["memindex__1838 0u"]
	29["eff__1820 mach_writeMemory64_u8_64"]
	11 --> 29
	24 --> 29
	23 --> 29
	13 --> 29
	0 -. Memory .-> 29
	23["offset imm_readULEB64"]
	12 -. Codeptr .-> 23
	24["index pop_u64"]
	13 -. Stack .-> 24
	15["cond__1819 m_isMemory64"]
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
def arg__1836 : byte = 0x40u8;
def arg__1833 = u8.&(flags, arg__1836);
def arg__1834 : byte = 0;
def cond__1831 = u8.!=(arg__1833, arg__1834);
var memindex: u32;
if (cond__1831) {
	def memindex__1832 = imm_readULEB32();
} else {
	def memindex__1838 : u32 = 0u;
}
// phis: memindex <- memindex__1832; memindex <- memindex__1838; 
def cond__1819 = m_isMemory64(memindex);
if (cond__1819) {
	def offset = imm_readULEB64();
	def index = pop_u64();
	def eff__1820 = mach_writeMemory64_u8_64(memindex, index, offset, val);
} else {
	def offset = imm_readULEB32();
	def index = pop_u32();
	def eff__1825 = mach_writeMemory32_u8_64(memindex, index, offset, val);
}
// phis: 
</pre>`;
window.traces["I64_STORE8_ul"] = {}
window.traces["I64_STORE8_ul"]["post_surgery 584"] = ''
window.traces["I64_STORE8_ul"]["post_surgery 584"] += `<pre class='graph'>---
config:
  layout: elk
---
graph TD
	4[\\"Finish"/]
	19 -. Codeptr .-> 4
	21 -. Stack .-> 4
	2 -. Trap Locals Globals Tables Extra .-> 4
	1 -. Memory .-> 4
	1{{"Sϕ Memory "}}
	20 --> 1
	18 --> 1
	9 --> 1
	9["eff__1825 mach_writeMemory32_u8_64"]
	15 --> 9
	3 --> 9
	28 --> 9
	17 --> 9
	2 -. Memory .-> 9
	2[/"Start"\\]
	17["val pop_u64"]
	2 -. Stack .-> 17
	28["offset__1875 imm_readULEB32"]
	16 -. Codeptr .-> 28
	16{{"Sϕ Codeptr "}}
	13 --> 16
	14 --> 16
	5 --> 16
	5["flags imm_readU8"]
	2 -. Codeptr .-> 5
	14["memindex__1832 imm_readULEB32"]
	5 -. Codeptr .-> 14
	13["cond__1831 u8.!="]
	11 --> 13
	7 --> 13
	7["arg__1834 0"]
	11["arg__1833 u8.&"]
	5 --> 11
	8 --> 11
	8["arg__1836 0x40u8"]
	3["index pop_u32"]
	17 -. Stack .-> 3
	15{"memindex ϕ"}
	13 --> 15
	14 --> 15
	6 --> 15
	6["memindex__1838 0u"]
	18["eff__1820 mach_writeMemory64_u8_64"]
	15 --> 18
	12 --> 18
	24 --> 18
	17 --> 18
	2 -. Memory .-> 18
	24["offset__1872 imm_readULEB64"]
	16 -. Codeptr .-> 24
	12["index pop_u64"]
	17 -. Stack .-> 12
	20["cond__1819 m_isMemory64"]
	15 --> 20
	21{{"Sϕ Stack "}}
	20 --> 21
	12 --> 21
	3 --> 21
	19{{"Sϕ Codeptr "}}
	20 --> 19
	24 --> 19
	28 --> 19
</pre>`;
window.traces["I64_STORE8_ul"]["post_surgery 589"] = ''
window.traces["I64_STORE8_ul"]["post_surgery 589"] += `<pre class='graph'>---
config:
  layout: elk
---
graph TD
	4[\\"Finish"/]
	19 -. Codeptr .-> 4
	21 -. Stack .-> 4
	2 -. Trap Locals Globals Tables Extra .-> 4
	1 -. Memory .-> 4
	1{{"Sϕ Memory "}}
	20 --> 1
	18 --> 1
	9 --> 1
	9["eff__1825 mach_writeMemory32_u8_64"]
	15 --> 9
	3 --> 9
	28 --> 9
	17 --> 9
	2 -. Memory .-> 9
	2[/"Start"\\]
	17["val pop_u64"]
	2 -. Stack .-> 17
	28["offset__1875 imm_readULEB32"]
	16 -. Codeptr .-> 28
	16{{"Sϕ Codeptr "}}
	13 --> 16
	43 --> 16
	5 --> 16
	5["flags imm_readU8"]
	2 -. Codeptr .-> 5
	43["memindex__1832__1885 imm_readULEB32"]
	5 -. Codeptr .-> 43
	13["cond__1831 u8.!="]
	11 --> 13
	7 --> 13
	7["arg__1834 0"]
	11["arg__1833 u8.&"]
	5 --> 11
	8 --> 11
	8["arg__1836 0x40u8"]
	3["index pop_u32"]
	17 -. Stack .-> 3
	15{"memindex ϕ"}
	13 --> 15
	43 --> 15
	45 --> 15
	45["memindex__1838__1886 0u"]
	18["eff__1820 mach_writeMemory64_u8_64"]
	15 --> 18
	12 --> 18
	24 --> 18
	17 --> 18
	2 -. Memory .-> 18
	24["offset__1872 imm_readULEB64"]
	16 -. Codeptr .-> 24
	12["index pop_u64"]
	17 -. Stack .-> 12
	20["cond__1819 m_isMemory64"]
	15 --> 20
	21{{"Sϕ Stack "}}
	20 --> 21
	12 --> 21
	3 --> 21
	19{{"Sϕ Codeptr "}}
	20 --> 19
	24 --> 19
	28 --> 19
</pre>`;
window.traces["I64_STORE8"]["unlem_scheduler"] = ''
window.traces["I64_STORE8"]["unlem_scheduler"] += `<pre class='graph'>graph TD
subgraph block_582["Block 582"]
	direction TB
	b582_4[\\"Finish"/]
end
phi_584 --> block_582
subgraph phi_584["Phi 584"]
	p584_1{{"Sϕ Memory "}}
	p584_21{{"Sϕ Stack "}}
	p584_19{{"Sϕ Codeptr "}}
end
block_585 --> phi_584
block_586 --> phi_584
subgraph block_585["Block 585"]
	direction TB
	b585_12["index pop_u64"]
	b585_24["offset__1872 imm_readULEB64"]
	b585_18["eff__1820 mach_writeMemory64_u8_64"]
	b585_12 --> b585_24
	b585_24 --> b585_18
end
branch_583 --> block_585
subgraph branch_583["Branch 583"]
	br583_20["cond__1819 m_isMemory64"]

end
block_587 --> branch_583
subgraph block_587["Block 587"]
	direction TB
	b587_17["val pop_u64"]
	b587_20["cond__1819 m_isMemory64"]
	b587_17 --> b587_20
end
phi_589 --> block_587
subgraph phi_589["Phi 589"]
	p589_16{{"Sϕ Codeptr "}}
	p589_16{{"Sϕ Codeptr "}}
	p589_16{{"Sϕ Codeptr "}}
	p589_16{{"Sϕ Codeptr "}}
	p589_15{"memindex ϕ"}
	p589_15{"memindex ϕ"}
	p589_15{"memindex ϕ"}
	p589_15{"memindex ϕ"}
	p589_15{"memindex ϕ"}
end
block_590 --> phi_589
block_591 --> phi_589
subgraph block_590["Block 590"]
	direction TB
	b590_43["memindex__1832__1885 imm_readULEB32"]
end
branch_588 --> block_590
subgraph branch_588["Branch 588"]
	br588_13["cond__1831 u8.!="]

end
block_592 --> branch_588
subgraph block_592["Block 592"]
	direction TB
	b592_8["arg__1836 0x40u8"]
	b592_7["arg__1834 0"]
	b592_11["arg__1833 u8.&"]
	b592_13["cond__1831 u8.!="]
	b592_8 --> b592_7
	b592_7 --> b592_11
	b592_11 --> b592_13
end
subgraph block_591["Block 591"]
	direction TB
	b591_45["memindex__1838__1886 0u"]
end
branch_588 --> block_591
subgraph block_586["Block 586"]
	direction TB
	b586_3["index pop_u32"]
	b586_28["offset__1875 imm_readULEB32"]
	b586_9["eff__1825 mach_writeMemory32_u8_64"]
	b586_3 --> b586_28
	b586_28 --> b586_9
end
branch_583 --> block_586

</pre>`;
window.traces["I64_STORE8"]["unlem_scheduler_ssa"] = ''
window.traces["I64_STORE8"]["unlem_scheduler_ssa"] += `<pre class=''>def arg__1836 : byte = 0x40u8;
def arg__1834 : byte = 0;
def arg__1833 = u8.&(flags, arg__1836);
def cond__1831 = u8.!=(arg__1833, arg__1834);
if (cond__1831) {
	def memindex__1832__1885 = imm_readULEB32();
} else {
	def memindex__1838__1886 : u32 = 0u;
}
// phis: memindex <- memindex__1832__1885; memindex <- memindex__1838__1886; memindex <- memindex__1832__1885; memindex <- memindex__1838__1886; memindex <- memindex__1832__1885; memindex <- memindex__1838__1886; memindex <- memindex__1832__1885; memindex <- memindex__1838__1886; memindex <- memindex__1832__1885; memindex <- memindex__1838__1886; 
def val = pop_u64();
def cond__1819 = m_isMemory64(memindex);
if (cond__1819) {
	def index = pop_u64();
	def offset__1872 = imm_readULEB64();
	def eff__1820 = mach_writeMemory64_u8_64(memindex, index, offset__1872, val);
} else {
	def index = pop_u32();
	def offset__1875 = imm_readULEB32();
	def eff__1825 = mach_writeMemory32_u8_64(memindex, index, offset__1875, val);
}
// phis: 
</pre>`;
window.traces["I64_STORE8"]["unlem_scheduler_ssa"] += `<pre class=''>if (u8.!=(u8.&(flags, 0x40u8), 0)) {
	memindex = imm_readULEB32();
} else {
	memindex = 0u;
}
def val = pop_u64();
def cond = m_isMemory64(memindex);
if (cond) {
	def index = pop_u64();
	def offset = imm_readULEB64();
	mach_writeMemory64_u8_64(memindex, index, offset, val);
} else {
	def index = pop_u32();
	def offset1 = imm_readULEB32();
	mach_writeMemory32_u8_64(memindex, index, offset1, val);
}
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
	22["eff__1825 mach_writeMemory32_u8_64"]
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
	10["memindex__1832 imm_readULEB32"]
	3 -. Codeptr .-> 10
	9["cond__1831 u8.!="]
	8 --> 9
	5 --> 9
	5["arg__1834 0"]
	8["arg__1833 u8.&"]
	3 --> 8
	6 --> 8
	6["arg__1836 0x40u8"]
	17["index pop_u32"]
	13 -. Stack .-> 17
	11{"memindex ϕ"}
	9 --> 11
	10 --> 11
	4 --> 11
	4["memindex__1838 0u"]
	29["eff__1820 mach_writeMemory64_u8_64"]
	11 --> 29
	24 --> 29
	23 --> 29
	13 --> 29
	0 -. Memory .-> 29
	23["offset imm_readULEB64"]
	12 -. Codeptr .-> 23
	24["index pop_u64"]
	13 -. Stack .-> 24
	15["cond__1819 m_isMemory64"]
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
	22["eff__1825 mach_writeMemory32_u8_64"]
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
	10["memindex__1832 imm_readULEB32"]
	3 -. Codeptr .-> 10
	9["cond__1831 u8.!="]
	8 --> 9
	5 --> 9
	5["arg__1834 0"]
	8["arg__1833 u8.&"]
	3 --> 8
	6 --> 8
	6["arg__1836 0x40u8"]
	17["index pop_u32"]
	13 -. Stack .-> 17
	11{"memindex ϕ"}
	9 --> 11
	10 --> 11
	4 --> 11
	4["memindex__1838 0u"]
	29["eff__1820 mach_writeMemory64_u8_64"]
	11 --> 29
	24 --> 29
	23 --> 29
	13 --> 29
	0 -. Memory .-> 29
	23["offset imm_readULEB64"]
	12 -. Codeptr .-> 23
	24["index pop_u64"]
	13 -. Stack .-> 24
	15["cond__1819 m_isMemory64"]
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
def arg__1836 : byte = 0x40u8;
def arg__1833 = u8.&(flags, arg__1836);
def arg__1834 : byte = 0;
def cond__1831 = u8.!=(arg__1833, arg__1834);
var memindex: u32;
if (cond__1831) {
	def memindex__1832 = imm_readULEB32();
} else {
	def memindex__1838 : u32 = 0u;
}
// phis: memindex <- memindex__1832; memindex <- memindex__1838; 
def cond__1819 = m_isMemory64(memindex);
if (cond__1819) {
	def offset = imm_readULEB64();
	def index = pop_u64();
	def eff__1820 = mach_writeMemory64_u8_64(memindex, index, offset, val);
} else {
	def offset = imm_readULEB32();
	def index = pop_u32();
	def eff__1825 = mach_writeMemory32_u8_64(memindex, index, offset, val);
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
def arg__1918 : byte = 0;
def arg__1920 : byte = 0x40u8;
def arg__1919 = (flags);
def arg__1917 = u8.&(arg__1919, arg__1920);
def cond__1915 = u8.!=(arg__1917, arg__1918);
if (cond__1915) {
	def memindex__1916 = imm_readULEB32();
}
// phis: memindex <- memindex__1916; 
def val = pop_u64();
def arg__1914 = (memindex);
def cond__1903 = m_isMemory64(arg__1914);
if (cond__1903) {
	def offset = imm_readULEB64();
	def index = pop_u64();
	def arg__1908 = (val);
	def arg__1907 = (offset);
	def arg__1906 = (index);
	def arg__1905 = (memindex);
	def eff__1904 = mach_writeMemory64_u16_64(arg__1905, arg__1906, arg__1907, arg__1908);
} else {
	def offset = imm_readULEB32();
	def index = pop_u32();
	def arg__1913 = (val);
	def arg__1912 = (offset);
	def arg__1911 = (index);
	def arg__1910 = (memindex);
	def eff__1909 = mach_writeMemory32_u16_64(arg__1910, arg__1911, arg__1912, arg__1913);
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
	22["eff__1909 mach_writeMemory32_u16_64"]
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
	10["memindex__1916 imm_readULEB32"]
	3 -. Codeptr .-> 10
	9["cond__1915 u8.!="]
	8 --> 9
	5 --> 9
	5["arg__1918 0"]
	8["arg__1917 u8.&"]
	3 --> 8
	6 --> 8
	6["arg__1920 0x40u8"]
	17["index pop_u32"]
	13 -. Stack .-> 17
	11{"memindex ϕ"}
	9 --> 11
	10 --> 11
	4 --> 11
	4["memindex__1921 0u"]
	29["eff__1904 mach_writeMemory64_u16_64"]
	11 --> 29
	24 --> 29
	23 --> 29
	13 --> 29
	0 -. Memory .-> 29
	23["offset imm_readULEB64"]
	12 -. Codeptr .-> 23
	24["index pop_u64"]
	13 -. Stack .-> 24
	15["cond__1903 m_isMemory64"]
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
	22["eff__1909 mach_writeMemory32_u16_64"]
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
	10["memindex__1916 imm_readULEB32"]
	3 -. Codeptr .-> 10
	9["cond__1915 u8.!="]
	8 --> 9
	5 --> 9
	5["arg__1918 0"]
	8["arg__1917 u8.&"]
	3 --> 8
	6 --> 8
	6["arg__1920 0x40u8"]
	17["index pop_u32"]
	13 -. Stack .-> 17
	11{"memindex ϕ"}
	9 --> 11
	10 --> 11
	4 --> 11
	4["memindex__1922 0u"]
	29["eff__1904 mach_writeMemory64_u16_64"]
	11 --> 29
	24 --> 29
	23 --> 29
	13 --> 29
	0 -. Memory .-> 29
	23["offset imm_readULEB64"]
	12 -. Codeptr .-> 23
	24["index pop_u64"]
	13 -. Stack .-> 24
	15["cond__1903 m_isMemory64"]
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
	22["eff__1909 mach_writeMemory32_u16_64"]
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
	10["memindex__1916 imm_readULEB32"]
	3 -. Codeptr .-> 10
	9["cond__1915 u8.!="]
	8 --> 9
	5 --> 9
	5["arg__1918 0"]
	8["arg__1917 u8.&"]
	3 --> 8
	6 --> 8
	6["arg__1920 0x40u8"]
	17["index pop_u32"]
	13 -. Stack .-> 17
	11{"memindex ϕ"}
	9 --> 11
	10 --> 11
	4 --> 11
	4["memindex__1922 0u"]
	29["eff__1904 mach_writeMemory64_u16_64"]
	11 --> 29
	24 --> 29
	23 --> 29
	13 --> 29
	0 -. Memory .-> 29
	23["offset imm_readULEB64"]
	12 -. Codeptr .-> 23
	24["index pop_u64"]
	13 -. Stack .-> 24
	15["cond__1903 m_isMemory64"]
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
window.traces["I64_STORE16"]["post_surgery 595"] = ''
window.traces["I64_STORE16"]["post_surgery 595"] += `<pre class='graph'>---
config:
  layout: elk
---
graph TD
	4[\\"Finish"/]
	19 -. Codeptr .-> 4
	21 -. Stack .-> 4
	2 -. Trap Locals Globals Tables Extra .-> 4
	1 -. Memory .-> 4
	1{{"Sϕ Memory "}}
	20 --> 1
	18 --> 1
	9 --> 1
	9["eff__1909 mach_writeMemory32_u16_64"]
	15 --> 9
	3 --> 9
	28 --> 9
	17 --> 9
	2 -. Memory .-> 9
	2[/"Start"\\]
	17["val pop_u64"]
	2 -. Stack .-> 17
	28["offset__1927 imm_readULEB32"]
	16 -. Codeptr .-> 28
	16{{"Sϕ Codeptr "}}
	13 --> 16
	14 --> 16
	5 --> 16
	5["flags imm_readU8"]
	2 -. Codeptr .-> 5
	14["memindex__1916 imm_readULEB32"]
	5 -. Codeptr .-> 14
	13["cond__1915 u8.!="]
	11 --> 13
	7 --> 13
	7["arg__1918 0"]
	11["arg__1917 u8.&"]
	5 --> 11
	8 --> 11
	8["arg__1920 0x40u8"]
	3["index pop_u32"]
	17 -. Stack .-> 3
	15{"memindex ϕ"}
	13 --> 15
	14 --> 15
	6 --> 15
	6["memindex__1922 0u"]
	18["eff__1904 mach_writeMemory64_u16_64"]
	15 --> 18
	12 --> 18
	24 --> 18
	17 --> 18
	2 -. Memory .-> 18
	24["offset__1924 imm_readULEB64"]
	16 -. Codeptr .-> 24
	12["index pop_u64"]
	17 -. Stack .-> 12
	20["cond__1903 m_isMemory64"]
	15 --> 20
	21{{"Sϕ Stack "}}
	20 --> 21
	12 --> 21
	3 --> 21
	19{{"Sϕ Codeptr "}}
	20 --> 19
	24 --> 19
	28 --> 19
</pre>`;
window.traces["I64_STORE16"]["post_surgery 600"] = ''
window.traces["I64_STORE16"]["post_surgery 600"] += `<pre class='graph'>---
config:
  layout: elk
---
graph TD
	4[\\"Finish"/]
	19 -. Codeptr .-> 4
	21 -. Stack .-> 4
	2 -. Trap Locals Globals Tables Extra .-> 4
	1 -. Memory .-> 4
	1{{"Sϕ Memory "}}
	20 --> 1
	18 --> 1
	9 --> 1
	9["eff__1909 mach_writeMemory32_u16_64"]
	15 --> 9
	3 --> 9
	28 --> 9
	17 --> 9
	2 -. Memory .-> 9
	2[/"Start"\\]
	17["val pop_u64"]
	2 -. Stack .-> 17
	28["offset__1927 imm_readULEB32"]
	16 -. Codeptr .-> 28
	16{{"Sϕ Codeptr "}}
	13 --> 16
	43 --> 16
	5 --> 16
	5["flags imm_readU8"]
	2 -. Codeptr .-> 5
	43["memindex__1916__1937 imm_readULEB32"]
	5 -. Codeptr .-> 43
	13["cond__1915 u8.!="]
	11 --> 13
	7 --> 13
	7["arg__1918 0"]
	11["arg__1917 u8.&"]
	5 --> 11
	8 --> 11
	8["arg__1920 0x40u8"]
	3["index pop_u32"]
	17 -. Stack .-> 3
	15{"memindex ϕ"}
	13 --> 15
	43 --> 15
	45 --> 15
	45["memindex__1922__1938 0u"]
	18["eff__1904 mach_writeMemory64_u16_64"]
	15 --> 18
	12 --> 18
	24 --> 18
	17 --> 18
	2 -. Memory .-> 18
	24["offset__1924 imm_readULEB64"]
	16 -. Codeptr .-> 24
	12["index pop_u64"]
	17 -. Stack .-> 12
	20["cond__1903 m_isMemory64"]
	15 --> 20
	21{{"Sϕ Stack "}}
	20 --> 21
	12 --> 21
	3 --> 21
	19{{"Sϕ Codeptr "}}
	20 --> 19
	24 --> 19
	28 --> 19
</pre>`;
window.traces["I64_STORE16"]["schedulerMermaid"] = ''
window.traces["I64_STORE16"]["schedulerMermaid"] += `<pre class='graph'>graph TD
subgraph block_593["Block 593"]
	direction TB
	b593_4[\\"Finish"/]
end
phi_595 --> block_593
subgraph phi_595["Phi 595"]
	p595_1{{"Sϕ Memory "}}
	p595_21{{"Sϕ Stack "}}
	p595_19{{"Sϕ Codeptr "}}
end
block_596 --> phi_595
block_597 --> phi_595
subgraph block_596["Block 596"]
	direction TB
	b596_12["index pop_u64"]
	b596_24["offset__1924 imm_readULEB64"]
	b596_18["eff__1904 mach_writeMemory64_u16_64"]
	b596_12 --> b596_24
	b596_24 --> b596_18
end
branch_594 --> block_596
subgraph branch_594["Branch 594"]
	br594_20["cond__1903 m_isMemory64"]

end
block_598 --> branch_594
subgraph block_598["Block 598"]
	direction TB
	b598_17["val pop_u64"]
	b598_20["cond__1903 m_isMemory64"]
	b598_17 --> b598_20
end
phi_600 --> block_598
subgraph phi_600["Phi 600"]
	p600_16{{"Sϕ Codeptr "}}
	p600_16{{"Sϕ Codeptr "}}
	p600_16{{"Sϕ Codeptr "}}
	p600_16{{"Sϕ Codeptr "}}
	p600_15{"memindex ϕ"}
	p600_15{"memindex ϕ"}
	p600_15{"memindex ϕ"}
	p600_15{"memindex ϕ"}
	p600_15{"memindex ϕ"}
end
block_601 --> phi_600
block_602 --> phi_600
subgraph block_601["Block 601"]
	direction TB
	b601_43["memindex__1916__1937 imm_readULEB32"]
end
branch_599 --> block_601
subgraph branch_599["Branch 599"]
	br599_13["cond__1915 u8.!="]

end
block_603 --> branch_599
subgraph block_603["Block 603"]
	direction TB
	b603_8["arg__1920 0x40u8"]
	b603_7["arg__1918 0"]
	b603_11["arg__1917 u8.&"]
	b603_13["cond__1915 u8.!="]
	b603_8 --> b603_7
	b603_7 --> b603_11
	b603_11 --> b603_13
end
subgraph block_602["Block 602"]
	direction TB
	b602_45["memindex__1922__1938 0u"]
end
branch_599 --> block_602
subgraph block_597["Block 597"]
	direction TB
	b597_3["index pop_u32"]
	b597_28["offset__1927 imm_readULEB32"]
	b597_9["eff__1909 mach_writeMemory32_u16_64"]
	b597_3 --> b597_28
	b597_28 --> b597_9
end
branch_594 --> block_597

</pre>`;
window.traces["I64_STORE16"]["scheduler_ssad"] = ''
window.traces["I64_STORE16"]["scheduler_ssad"] += `<pre class=''>def arg__1920 : byte = 0x40u8;
def arg__1918 : byte = 0;
def arg__1917 = u8.&(flags, arg__1920);
def cond__1915 = u8.!=(arg__1917, arg__1918);
if (cond__1915) {
	def memindex__1916__1937 = imm_readULEB32();
} else {
	def memindex__1922__1938 : u32 = 0u;
}
// phis: memindex <- memindex__1916__1937; memindex <- memindex__1922__1938; memindex <- memindex__1916__1937; memindex <- memindex__1922__1938; memindex <- memindex__1916__1937; memindex <- memindex__1922__1938; memindex <- memindex__1916__1937; memindex <- memindex__1922__1938; memindex <- memindex__1916__1937; memindex <- memindex__1922__1938; 
def val = pop_u64();
def cond__1903 = m_isMemory64(memindex);
if (cond__1903) {
	def index = pop_u64();
	def offset__1924 = imm_readULEB64();
	def eff__1904 = mach_writeMemory64_u16_64(memindex, index, offset__1924, val);
} else {
	def index = pop_u32();
	def offset__1927 = imm_readULEB32();
	def eff__1909 = mach_writeMemory32_u16_64(memindex, index, offset__1927, val);
}
// phis: 
</pre>`;
window.traces["I64_STORE16"]["scheduler_ssad_pretty"] = ''
window.traces["I64_STORE16"]["scheduler_ssad_pretty"] += `<pre class=''>if (u8.!=(u8.&(flags, 0x40u8), 0)) {
	memindex = imm_readULEB32();
} else {
	memindex = 0u;
}
def val = pop_u64();
def cond = m_isMemory64(memindex);
if (cond) {
	def index = pop_u64();
	def offset = imm_readULEB64();
	mach_writeMemory64_u16_64(memindex, index, offset, val);
} else {
	def index = pop_u32();
	def offset1 = imm_readULEB32();
	mach_writeMemory32_u16_64(memindex, index, offset1, val);
}
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
	22["eff__1909 mach_writeMemory32_u16_64"]
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
	10["memindex__1916 imm_readULEB32"]
	3 -. Codeptr .-> 10
	9["cond__1915 u8.!="]
	8 --> 9
	5 --> 9
	5["arg__1918 0"]
	8["arg__1917 u8.&"]
	3 --> 8
	6 --> 8
	6["arg__1920 0x40u8"]
	17["index pop_u32"]
	13 -. Stack .-> 17
	11{"memindex ϕ"}
	9 --> 11
	10 --> 11
	4 --> 11
	4["memindex__1922 0u"]
	29["eff__1904 mach_writeMemory64_u16_64"]
	11 --> 29
	24 --> 29
	23 --> 29
	13 --> 29
	0 -. Memory .-> 29
	23["offset imm_readULEB64"]
	12 -. Codeptr .-> 23
	24["index pop_u64"]
	13 -. Stack .-> 24
	15["cond__1903 m_isMemory64"]
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
def arg__1920 : byte = 0x40u8;
def arg__1917 = u8.&(flags, arg__1920);
def arg__1918 : byte = 0;
def cond__1915 = u8.!=(arg__1917, arg__1918);
var memindex: u32;
if (cond__1915) {
	def memindex__1916 = imm_readULEB32();
} else {
	def memindex__1922 : u32 = 0u;
}
// phis: memindex <- memindex__1916; memindex <- memindex__1922; 
def cond__1903 = m_isMemory64(memindex);
if (cond__1903) {
	def offset = imm_readULEB64();
	def index = pop_u64();
	def eff__1904 = mach_writeMemory64_u16_64(memindex, index, offset, val);
} else {
	def offset = imm_readULEB32();
	def index = pop_u32();
	def eff__1909 = mach_writeMemory32_u16_64(memindex, index, offset, val);
}
// phis: 
</pre>`;
window.traces["I64_STORE16_ul"] = {}
window.traces["I64_STORE16_ul"]["post_surgery 606"] = ''
window.traces["I64_STORE16_ul"]["post_surgery 606"] += `<pre class='graph'>---
config:
  layout: elk
---
graph TD
	4[\\"Finish"/]
	19 -. Codeptr .-> 4
	21 -. Stack .-> 4
	2 -. Trap Locals Globals Tables Extra .-> 4
	1 -. Memory .-> 4
	1{{"Sϕ Memory "}}
	20 --> 1
	18 --> 1
	9 --> 1
	9["eff__1909 mach_writeMemory32_u16_64"]
	15 --> 9
	3 --> 9
	28 --> 9
	17 --> 9
	2 -. Memory .-> 9
	2[/"Start"\\]
	17["val pop_u64"]
	2 -. Stack .-> 17
	28["offset__1959 imm_readULEB32"]
	16 -. Codeptr .-> 28
	16{{"Sϕ Codeptr "}}
	13 --> 16
	14 --> 16
	5 --> 16
	5["flags imm_readU8"]
	2 -. Codeptr .-> 5
	14["memindex__1916 imm_readULEB32"]
	5 -. Codeptr .-> 14
	13["cond__1915 u8.!="]
	11 --> 13
	7 --> 13
	7["arg__1918 0"]
	11["arg__1917 u8.&"]
	5 --> 11
	8 --> 11
	8["arg__1920 0x40u8"]
	3["index pop_u32"]
	17 -. Stack .-> 3
	15{"memindex ϕ"}
	13 --> 15
	14 --> 15
	6 --> 15
	6["memindex__1922 0u"]
	18["eff__1904 mach_writeMemory64_u16_64"]
	15 --> 18
	12 --> 18
	24 --> 18
	17 --> 18
	2 -. Memory .-> 18
	24["offset__1956 imm_readULEB64"]
	16 -. Codeptr .-> 24
	12["index pop_u64"]
	17 -. Stack .-> 12
	20["cond__1903 m_isMemory64"]
	15 --> 20
	21{{"Sϕ Stack "}}
	20 --> 21
	12 --> 21
	3 --> 21
	19{{"Sϕ Codeptr "}}
	20 --> 19
	24 --> 19
	28 --> 19
</pre>`;
window.traces["I64_STORE16_ul"]["post_surgery 611"] = ''
window.traces["I64_STORE16_ul"]["post_surgery 611"] += `<pre class='graph'>---
config:
  layout: elk
---
graph TD
	4[\\"Finish"/]
	19 -. Codeptr .-> 4
	21 -. Stack .-> 4
	2 -. Trap Locals Globals Tables Extra .-> 4
	1 -. Memory .-> 4
	1{{"Sϕ Memory "}}
	20 --> 1
	18 --> 1
	9 --> 1
	9["eff__1909 mach_writeMemory32_u16_64"]
	15 --> 9
	3 --> 9
	28 --> 9
	17 --> 9
	2 -. Memory .-> 9
	2[/"Start"\\]
	17["val pop_u64"]
	2 -. Stack .-> 17
	28["offset__1959 imm_readULEB32"]
	16 -. Codeptr .-> 28
	16{{"Sϕ Codeptr "}}
	13 --> 16
	43 --> 16
	5 --> 16
	5["flags imm_readU8"]
	2 -. Codeptr .-> 5
	43["memindex__1916__1969 imm_readULEB32"]
	5 -. Codeptr .-> 43
	13["cond__1915 u8.!="]
	11 --> 13
	7 --> 13
	7["arg__1918 0"]
	11["arg__1917 u8.&"]
	5 --> 11
	8 --> 11
	8["arg__1920 0x40u8"]
	3["index pop_u32"]
	17 -. Stack .-> 3
	15{"memindex ϕ"}
	13 --> 15
	43 --> 15
	45 --> 15
	45["memindex__1922__1970 0u"]
	18["eff__1904 mach_writeMemory64_u16_64"]
	15 --> 18
	12 --> 18
	24 --> 18
	17 --> 18
	2 -. Memory .-> 18
	24["offset__1956 imm_readULEB64"]
	16 -. Codeptr .-> 24
	12["index pop_u64"]
	17 -. Stack .-> 12
	20["cond__1903 m_isMemory64"]
	15 --> 20
	21{{"Sϕ Stack "}}
	20 --> 21
	12 --> 21
	3 --> 21
	19{{"Sϕ Codeptr "}}
	20 --> 19
	24 --> 19
	28 --> 19
</pre>`;
window.traces["I64_STORE16"]["unlem_scheduler"] = ''
window.traces["I64_STORE16"]["unlem_scheduler"] += `<pre class='graph'>graph TD
subgraph block_604["Block 604"]
	direction TB
	b604_4[\\"Finish"/]
end
phi_606 --> block_604
subgraph phi_606["Phi 606"]
	p606_1{{"Sϕ Memory "}}
	p606_21{{"Sϕ Stack "}}
	p606_19{{"Sϕ Codeptr "}}
end
block_607 --> phi_606
block_608 --> phi_606
subgraph block_607["Block 607"]
	direction TB
	b607_12["index pop_u64"]
	b607_24["offset__1956 imm_readULEB64"]
	b607_18["eff__1904 mach_writeMemory64_u16_64"]
	b607_12 --> b607_24
	b607_24 --> b607_18
end
branch_605 --> block_607
subgraph branch_605["Branch 605"]
	br605_20["cond__1903 m_isMemory64"]

end
block_609 --> branch_605
subgraph block_609["Block 609"]
	direction TB
	b609_17["val pop_u64"]
	b609_20["cond__1903 m_isMemory64"]
	b609_17 --> b609_20
end
phi_611 --> block_609
subgraph phi_611["Phi 611"]
	p611_16{{"Sϕ Codeptr "}}
	p611_16{{"Sϕ Codeptr "}}
	p611_16{{"Sϕ Codeptr "}}
	p611_16{{"Sϕ Codeptr "}}
	p611_15{"memindex ϕ"}
	p611_15{"memindex ϕ"}
	p611_15{"memindex ϕ"}
	p611_15{"memindex ϕ"}
	p611_15{"memindex ϕ"}
end
block_612 --> phi_611
block_613 --> phi_611
subgraph block_612["Block 612"]
	direction TB
	b612_43["memindex__1916__1969 imm_readULEB32"]
end
branch_610 --> block_612
subgraph branch_610["Branch 610"]
	br610_13["cond__1915 u8.!="]

end
block_614 --> branch_610
subgraph block_614["Block 614"]
	direction TB
	b614_8["arg__1920 0x40u8"]
	b614_7["arg__1918 0"]
	b614_11["arg__1917 u8.&"]
	b614_13["cond__1915 u8.!="]
	b614_8 --> b614_7
	b614_7 --> b614_11
	b614_11 --> b614_13
end
subgraph block_613["Block 613"]
	direction TB
	b613_45["memindex__1922__1970 0u"]
end
branch_610 --> block_613
subgraph block_608["Block 608"]
	direction TB
	b608_3["index pop_u32"]
	b608_28["offset__1959 imm_readULEB32"]
	b608_9["eff__1909 mach_writeMemory32_u16_64"]
	b608_3 --> b608_28
	b608_28 --> b608_9
end
branch_605 --> block_608

</pre>`;
window.traces["I64_STORE16"]["unlem_scheduler_ssa"] = ''
window.traces["I64_STORE16"]["unlem_scheduler_ssa"] += `<pre class=''>def arg__1920 : byte = 0x40u8;
def arg__1918 : byte = 0;
def arg__1917 = u8.&(flags, arg__1920);
def cond__1915 = u8.!=(arg__1917, arg__1918);
if (cond__1915) {
	def memindex__1916__1969 = imm_readULEB32();
} else {
	def memindex__1922__1970 : u32 = 0u;
}
// phis: memindex <- memindex__1916__1969; memindex <- memindex__1922__1970; memindex <- memindex__1916__1969; memindex <- memindex__1922__1970; memindex <- memindex__1916__1969; memindex <- memindex__1922__1970; memindex <- memindex__1916__1969; memindex <- memindex__1922__1970; memindex <- memindex__1916__1969; memindex <- memindex__1922__1970; 
def val = pop_u64();
def cond__1903 = m_isMemory64(memindex);
if (cond__1903) {
	def index = pop_u64();
	def offset__1956 = imm_readULEB64();
	def eff__1904 = mach_writeMemory64_u16_64(memindex, index, offset__1956, val);
} else {
	def index = pop_u32();
	def offset__1959 = imm_readULEB32();
	def eff__1909 = mach_writeMemory32_u16_64(memindex, index, offset__1959, val);
}
// phis: 
</pre>`;
window.traces["I64_STORE16"]["unlem_scheduler_ssa"] += `<pre class=''>if (u8.!=(u8.&(flags, 0x40u8), 0)) {
	memindex = imm_readULEB32();
} else {
	memindex = 0u;
}
def val = pop_u64();
def cond = m_isMemory64(memindex);
if (cond) {
	def index = pop_u64();
	def offset = imm_readULEB64();
	mach_writeMemory64_u16_64(memindex, index, offset, val);
} else {
	def index = pop_u32();
	def offset1 = imm_readULEB32();
	mach_writeMemory32_u16_64(memindex, index, offset1, val);
}
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
	22["eff__1909 mach_writeMemory32_u16_64"]
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
	10["memindex__1916 imm_readULEB32"]
	3 -. Codeptr .-> 10
	9["cond__1915 u8.!="]
	8 --> 9
	5 --> 9
	5["arg__1918 0"]
	8["arg__1917 u8.&"]
	3 --> 8
	6 --> 8
	6["arg__1920 0x40u8"]
	17["index pop_u32"]
	13 -. Stack .-> 17
	11{"memindex ϕ"}
	9 --> 11
	10 --> 11
	4 --> 11
	4["memindex__1922 0u"]
	29["eff__1904 mach_writeMemory64_u16_64"]
	11 --> 29
	24 --> 29
	23 --> 29
	13 --> 29
	0 -. Memory .-> 29
	23["offset imm_readULEB64"]
	12 -. Codeptr .-> 23
	24["index pop_u64"]
	13 -. Stack .-> 24
	15["cond__1903 m_isMemory64"]
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
	22["eff__1909 mach_writeMemory32_u16_64"]
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
	10["memindex__1916 imm_readULEB32"]
	3 -. Codeptr .-> 10
	9["cond__1915 u8.!="]
	8 --> 9
	5 --> 9
	5["arg__1918 0"]
	8["arg__1917 u8.&"]
	3 --> 8
	6 --> 8
	6["arg__1920 0x40u8"]
	17["index pop_u32"]
	13 -. Stack .-> 17
	11{"memindex ϕ"}
	9 --> 11
	10 --> 11
	4 --> 11
	4["memindex__1922 0u"]
	29["eff__1904 mach_writeMemory64_u16_64"]
	11 --> 29
	24 --> 29
	23 --> 29
	13 --> 29
	0 -. Memory .-> 29
	23["offset imm_readULEB64"]
	12 -. Codeptr .-> 23
	24["index pop_u64"]
	13 -. Stack .-> 24
	15["cond__1903 m_isMemory64"]
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
def arg__1920 : byte = 0x40u8;
def arg__1917 = u8.&(flags, arg__1920);
def arg__1918 : byte = 0;
def cond__1915 = u8.!=(arg__1917, arg__1918);
var memindex: u32;
if (cond__1915) {
	def memindex__1916 = imm_readULEB32();
} else {
	def memindex__1922 : u32 = 0u;
}
// phis: memindex <- memindex__1916; memindex <- memindex__1922; 
def cond__1903 = m_isMemory64(memindex);
if (cond__1903) {
	def offset = imm_readULEB64();
	def index = pop_u64();
	def eff__1904 = mach_writeMemory64_u16_64(memindex, index, offset, val);
} else {
	def offset = imm_readULEB32();
	def index = pop_u32();
	def eff__1909 = mach_writeMemory32_u16_64(memindex, index, offset, val);
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
def arg__2002 : byte = 0;
def arg__2004 : byte = 0x40u8;
def arg__2003 = (flags);
def arg__2001 = u8.&(arg__2003, arg__2004);
def cond__1999 = u8.!=(arg__2001, arg__2002);
if (cond__1999) {
	def memindex__2000 = imm_readULEB32();
}
// phis: memindex <- memindex__2000; 
def val = pop_u64();
def arg__1998 = (memindex);
def cond__1987 = m_isMemory64(arg__1998);
if (cond__1987) {
	def offset = imm_readULEB64();
	def index = pop_u64();
	def arg__1992 = (val);
	def arg__1991 = (offset);
	def arg__1990 = (index);
	def arg__1989 = (memindex);
	def eff__1988 = mach_writeMemory64_u32_64(arg__1989, arg__1990, arg__1991, arg__1992);
} else {
	def offset = imm_readULEB32();
	def index = pop_u32();
	def arg__1997 = (val);
	def arg__1996 = (offset);
	def arg__1995 = (index);
	def arg__1994 = (memindex);
	def eff__1993 = mach_writeMemory32_u32_64(arg__1994, arg__1995, arg__1996, arg__1997);
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
	22["eff__1993 mach_writeMemory32_u32_64"]
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
	10["memindex__2000 imm_readULEB32"]
	3 -. Codeptr .-> 10
	9["cond__1999 u8.!="]
	8 --> 9
	5 --> 9
	5["arg__2002 0"]
	8["arg__2001 u8.&"]
	3 --> 8
	6 --> 8
	6["arg__2004 0x40u8"]
	17["index pop_u32"]
	13 -. Stack .-> 17
	11{"memindex ϕ"}
	9 --> 11
	10 --> 11
	4 --> 11
	4["memindex__2005 0u"]
	29["eff__1988 mach_writeMemory64_u32_64"]
	11 --> 29
	24 --> 29
	23 --> 29
	13 --> 29
	0 -. Memory .-> 29
	23["offset imm_readULEB64"]
	12 -. Codeptr .-> 23
	24["index pop_u64"]
	13 -. Stack .-> 24
	15["cond__1987 m_isMemory64"]
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
	22["eff__1993 mach_writeMemory32_u32_64"]
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
	10["memindex__2000 imm_readULEB32"]
	3 -. Codeptr .-> 10
	9["cond__1999 u8.!="]
	8 --> 9
	5 --> 9
	5["arg__2002 0"]
	8["arg__2001 u8.&"]
	3 --> 8
	6 --> 8
	6["arg__2004 0x40u8"]
	17["index pop_u32"]
	13 -. Stack .-> 17
	11{"memindex ϕ"}
	9 --> 11
	10 --> 11
	4 --> 11
	4["memindex__2006 0u"]
	29["eff__1988 mach_writeMemory64_u32_64"]
	11 --> 29
	24 --> 29
	23 --> 29
	13 --> 29
	0 -. Memory .-> 29
	23["offset imm_readULEB64"]
	12 -. Codeptr .-> 23
	24["index pop_u64"]
	13 -. Stack .-> 24
	15["cond__1987 m_isMemory64"]
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
	22["eff__1993 mach_writeMemory32_u32_64"]
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
	10["memindex__2000 imm_readULEB32"]
	3 -. Codeptr .-> 10
	9["cond__1999 u8.!="]
	8 --> 9
	5 --> 9
	5["arg__2002 0"]
	8["arg__2001 u8.&"]
	3 --> 8
	6 --> 8
	6["arg__2004 0x40u8"]
	17["index pop_u32"]
	13 -. Stack .-> 17
	11{"memindex ϕ"}
	9 --> 11
	10 --> 11
	4 --> 11
	4["memindex__2006 0u"]
	29["eff__1988 mach_writeMemory64_u32_64"]
	11 --> 29
	24 --> 29
	23 --> 29
	13 --> 29
	0 -. Memory .-> 29
	23["offset imm_readULEB64"]
	12 -. Codeptr .-> 23
	24["index pop_u64"]
	13 -. Stack .-> 24
	15["cond__1987 m_isMemory64"]
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
window.traces["I64_STORE32"]["post_surgery 617"] = ''
window.traces["I64_STORE32"]["post_surgery 617"] += `<pre class='graph'>---
config:
  layout: elk
---
graph TD
	4[\\"Finish"/]
	19 -. Codeptr .-> 4
	21 -. Stack .-> 4
	2 -. Trap Locals Globals Tables Extra .-> 4
	1 -. Memory .-> 4
	1{{"Sϕ Memory "}}
	20 --> 1
	18 --> 1
	9 --> 1
	9["eff__1993 mach_writeMemory32_u32_64"]
	15 --> 9
	3 --> 9
	28 --> 9
	17 --> 9
	2 -. Memory .-> 9
	2[/"Start"\\]
	17["val pop_u64"]
	2 -. Stack .-> 17
	28["offset__2011 imm_readULEB32"]
	16 -. Codeptr .-> 28
	16{{"Sϕ Codeptr "}}
	13 --> 16
	14 --> 16
	5 --> 16
	5["flags imm_readU8"]
	2 -. Codeptr .-> 5
	14["memindex__2000 imm_readULEB32"]
	5 -. Codeptr .-> 14
	13["cond__1999 u8.!="]
	11 --> 13
	7 --> 13
	7["arg__2002 0"]
	11["arg__2001 u8.&"]
	5 --> 11
	8 --> 11
	8["arg__2004 0x40u8"]
	3["index pop_u32"]
	17 -. Stack .-> 3
	15{"memindex ϕ"}
	13 --> 15
	14 --> 15
	6 --> 15
	6["memindex__2006 0u"]
	18["eff__1988 mach_writeMemory64_u32_64"]
	15 --> 18
	12 --> 18
	24 --> 18
	17 --> 18
	2 -. Memory .-> 18
	24["offset__2008 imm_readULEB64"]
	16 -. Codeptr .-> 24
	12["index pop_u64"]
	17 -. Stack .-> 12
	20["cond__1987 m_isMemory64"]
	15 --> 20
	21{{"Sϕ Stack "}}
	20 --> 21
	12 --> 21
	3 --> 21
	19{{"Sϕ Codeptr "}}
	20 --> 19
	24 --> 19
	28 --> 19
</pre>`;
window.traces["I64_STORE32"]["post_surgery 622"] = ''
window.traces["I64_STORE32"]["post_surgery 622"] += `<pre class='graph'>---
config:
  layout: elk
---
graph TD
	4[\\"Finish"/]
	19 -. Codeptr .-> 4
	21 -. Stack .-> 4
	2 -. Trap Locals Globals Tables Extra .-> 4
	1 -. Memory .-> 4
	1{{"Sϕ Memory "}}
	20 --> 1
	18 --> 1
	9 --> 1
	9["eff__1993 mach_writeMemory32_u32_64"]
	15 --> 9
	3 --> 9
	28 --> 9
	17 --> 9
	2 -. Memory .-> 9
	2[/"Start"\\]
	17["val pop_u64"]
	2 -. Stack .-> 17
	28["offset__2011 imm_readULEB32"]
	16 -. Codeptr .-> 28
	16{{"Sϕ Codeptr "}}
	13 --> 16
	43 --> 16
	5 --> 16
	5["flags imm_readU8"]
	2 -. Codeptr .-> 5
	43["memindex__2000__2021 imm_readULEB32"]
	5 -. Codeptr .-> 43
	13["cond__1999 u8.!="]
	11 --> 13
	7 --> 13
	7["arg__2002 0"]
	11["arg__2001 u8.&"]
	5 --> 11
	8 --> 11
	8["arg__2004 0x40u8"]
	3["index pop_u32"]
	17 -. Stack .-> 3
	15{"memindex ϕ"}
	13 --> 15
	43 --> 15
	45 --> 15
	45["memindex__2006__2022 0u"]
	18["eff__1988 mach_writeMemory64_u32_64"]
	15 --> 18
	12 --> 18
	24 --> 18
	17 --> 18
	2 -. Memory .-> 18
	24["offset__2008 imm_readULEB64"]
	16 -. Codeptr .-> 24
	12["index pop_u64"]
	17 -. Stack .-> 12
	20["cond__1987 m_isMemory64"]
	15 --> 20
	21{{"Sϕ Stack "}}
	20 --> 21
	12 --> 21
	3 --> 21
	19{{"Sϕ Codeptr "}}
	20 --> 19
	24 --> 19
	28 --> 19
</pre>`;
window.traces["I64_STORE32"]["schedulerMermaid"] = ''
window.traces["I64_STORE32"]["schedulerMermaid"] += `<pre class='graph'>graph TD
subgraph block_615["Block 615"]
	direction TB
	b615_4[\\"Finish"/]
end
phi_617 --> block_615
subgraph phi_617["Phi 617"]
	p617_1{{"Sϕ Memory "}}
	p617_21{{"Sϕ Stack "}}
	p617_19{{"Sϕ Codeptr "}}
end
block_618 --> phi_617
block_619 --> phi_617
subgraph block_618["Block 618"]
	direction TB
	b618_12["index pop_u64"]
	b618_24["offset__2008 imm_readULEB64"]
	b618_18["eff__1988 mach_writeMemory64_u32_64"]
	b618_12 --> b618_24
	b618_24 --> b618_18
end
branch_616 --> block_618
subgraph branch_616["Branch 616"]
	br616_20["cond__1987 m_isMemory64"]

end
block_620 --> branch_616
subgraph block_620["Block 620"]
	direction TB
	b620_17["val pop_u64"]
	b620_20["cond__1987 m_isMemory64"]
	b620_17 --> b620_20
end
phi_622 --> block_620
subgraph phi_622["Phi 622"]
	p622_16{{"Sϕ Codeptr "}}
	p622_16{{"Sϕ Codeptr "}}
	p622_16{{"Sϕ Codeptr "}}
	p622_16{{"Sϕ Codeptr "}}
	p622_15{"memindex ϕ"}
	p622_15{"memindex ϕ"}
	p622_15{"memindex ϕ"}
	p622_15{"memindex ϕ"}
	p622_15{"memindex ϕ"}
end
block_623 --> phi_622
block_624 --> phi_622
subgraph block_623["Block 623"]
	direction TB
	b623_43["memindex__2000__2021 imm_readULEB32"]
end
branch_621 --> block_623
subgraph branch_621["Branch 621"]
	br621_13["cond__1999 u8.!="]

end
block_625 --> branch_621
subgraph block_625["Block 625"]
	direction TB
	b625_8["arg__2004 0x40u8"]
	b625_7["arg__2002 0"]
	b625_11["arg__2001 u8.&"]
	b625_13["cond__1999 u8.!="]
	b625_8 --> b625_7
	b625_7 --> b625_11
	b625_11 --> b625_13
end
subgraph block_624["Block 624"]
	direction TB
	b624_45["memindex__2006__2022 0u"]
end
branch_621 --> block_624
subgraph block_619["Block 619"]
	direction TB
	b619_3["index pop_u32"]
	b619_28["offset__2011 imm_readULEB32"]
	b619_9["eff__1993 mach_writeMemory32_u32_64"]
	b619_3 --> b619_28
	b619_28 --> b619_9
end
branch_616 --> block_619

</pre>`;
window.traces["I64_STORE32"]["scheduler_ssad"] = ''
window.traces["I64_STORE32"]["scheduler_ssad"] += `<pre class=''>def arg__2004 : byte = 0x40u8;
def arg__2002 : byte = 0;
def arg__2001 = u8.&(flags, arg__2004);
def cond__1999 = u8.!=(arg__2001, arg__2002);
if (cond__1999) {
	def memindex__2000__2021 = imm_readULEB32();
} else {
	def memindex__2006__2022 : u32 = 0u;
}
// phis: memindex <- memindex__2000__2021; memindex <- memindex__2006__2022; memindex <- memindex__2000__2021; memindex <- memindex__2006__2022; memindex <- memindex__2000__2021; memindex <- memindex__2006__2022; memindex <- memindex__2000__2021; memindex <- memindex__2006__2022; memindex <- memindex__2000__2021; memindex <- memindex__2006__2022; 
def val = pop_u64();
def cond__1987 = m_isMemory64(memindex);
if (cond__1987) {
	def index = pop_u64();
	def offset__2008 = imm_readULEB64();
	def eff__1988 = mach_writeMemory64_u32_64(memindex, index, offset__2008, val);
} else {
	def index = pop_u32();
	def offset__2011 = imm_readULEB32();
	def eff__1993 = mach_writeMemory32_u32_64(memindex, index, offset__2011, val);
}
// phis: 
</pre>`;
window.traces["I64_STORE32"]["scheduler_ssad_pretty"] = ''
window.traces["I64_STORE32"]["scheduler_ssad_pretty"] += `<pre class=''>if (u8.!=(u8.&(flags, 0x40u8), 0)) {
	memindex = imm_readULEB32();
} else {
	memindex = 0u;
}
def val = pop_u64();
def cond = m_isMemory64(memindex);
if (cond) {
	def index = pop_u64();
	def offset = imm_readULEB64();
	mach_writeMemory64_u32_64(memindex, index, offset, val);
} else {
	def index = pop_u32();
	def offset1 = imm_readULEB32();
	mach_writeMemory32_u32_64(memindex, index, offset1, val);
}
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
	22["eff__1993 mach_writeMemory32_u32_64"]
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
	10["memindex__2000 imm_readULEB32"]
	3 -. Codeptr .-> 10
	9["cond__1999 u8.!="]
	8 --> 9
	5 --> 9
	5["arg__2002 0"]
	8["arg__2001 u8.&"]
	3 --> 8
	6 --> 8
	6["arg__2004 0x40u8"]
	17["index pop_u32"]
	13 -. Stack .-> 17
	11{"memindex ϕ"}
	9 --> 11
	10 --> 11
	4 --> 11
	4["memindex__2006 0u"]
	29["eff__1988 mach_writeMemory64_u32_64"]
	11 --> 29
	24 --> 29
	23 --> 29
	13 --> 29
	0 -. Memory .-> 29
	23["offset imm_readULEB64"]
	12 -. Codeptr .-> 23
	24["index pop_u64"]
	13 -. Stack .-> 24
	15["cond__1987 m_isMemory64"]
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
def arg__2004 : byte = 0x40u8;
def arg__2001 = u8.&(flags, arg__2004);
def arg__2002 : byte = 0;
def cond__1999 = u8.!=(arg__2001, arg__2002);
var memindex: u32;
if (cond__1999) {
	def memindex__2000 = imm_readULEB32();
} else {
	def memindex__2006 : u32 = 0u;
}
// phis: memindex <- memindex__2000; memindex <- memindex__2006; 
def cond__1987 = m_isMemory64(memindex);
if (cond__1987) {
	def offset = imm_readULEB64();
	def index = pop_u64();
	def eff__1988 = mach_writeMemory64_u32_64(memindex, index, offset, val);
} else {
	def offset = imm_readULEB32();
	def index = pop_u32();
	def eff__1993 = mach_writeMemory32_u32_64(memindex, index, offset, val);
}
// phis: 
</pre>`;
window.traces["I64_STORE32_ul"] = {}
window.traces["I64_STORE32_ul"]["post_surgery 628"] = ''
window.traces["I64_STORE32_ul"]["post_surgery 628"] += `<pre class='graph'>---
config:
  layout: elk
---
graph TD
	4[\\"Finish"/]
	19 -. Codeptr .-> 4
	21 -. Stack .-> 4
	2 -. Trap Locals Globals Tables Extra .-> 4
	1 -. Memory .-> 4
	1{{"Sϕ Memory "}}
	20 --> 1
	18 --> 1
	9 --> 1
	9["eff__1993 mach_writeMemory32_u32_64"]
	15 --> 9
	3 --> 9
	28 --> 9
	17 --> 9
	2 -. Memory .-> 9
	2[/"Start"\\]
	17["val pop_u64"]
	2 -. Stack .-> 17
	28["offset__2043 imm_readULEB32"]
	16 -. Codeptr .-> 28
	16{{"Sϕ Codeptr "}}
	13 --> 16
	14 --> 16
	5 --> 16
	5["flags imm_readU8"]
	2 -. Codeptr .-> 5
	14["memindex__2000 imm_readULEB32"]
	5 -. Codeptr .-> 14
	13["cond__1999 u8.!="]
	11 --> 13
	7 --> 13
	7["arg__2002 0"]
	11["arg__2001 u8.&"]
	5 --> 11
	8 --> 11
	8["arg__2004 0x40u8"]
	3["index pop_u32"]
	17 -. Stack .-> 3
	15{"memindex ϕ"}
	13 --> 15
	14 --> 15
	6 --> 15
	6["memindex__2006 0u"]
	18["eff__1988 mach_writeMemory64_u32_64"]
	15 --> 18
	12 --> 18
	24 --> 18
	17 --> 18
	2 -. Memory .-> 18
	24["offset__2040 imm_readULEB64"]
	16 -. Codeptr .-> 24
	12["index pop_u64"]
	17 -. Stack .-> 12
	20["cond__1987 m_isMemory64"]
	15 --> 20
	21{{"Sϕ Stack "}}
	20 --> 21
	12 --> 21
	3 --> 21
	19{{"Sϕ Codeptr "}}
	20 --> 19
	24 --> 19
	28 --> 19
</pre>`;
window.traces["I64_STORE32_ul"]["post_surgery 633"] = ''
window.traces["I64_STORE32_ul"]["post_surgery 633"] += `<pre class='graph'>---
config:
  layout: elk
---
graph TD
	4[\\"Finish"/]
	19 -. Codeptr .-> 4
	21 -. Stack .-> 4
	2 -. Trap Locals Globals Tables Extra .-> 4
	1 -. Memory .-> 4
	1{{"Sϕ Memory "}}
	20 --> 1
	18 --> 1
	9 --> 1
	9["eff__1993 mach_writeMemory32_u32_64"]
	15 --> 9
	3 --> 9
	28 --> 9
	17 --> 9
	2 -. Memory .-> 9
	2[/"Start"\\]
	17["val pop_u64"]
	2 -. Stack .-> 17
	28["offset__2043 imm_readULEB32"]
	16 -. Codeptr .-> 28
	16{{"Sϕ Codeptr "}}
	13 --> 16
	43 --> 16
	5 --> 16
	5["flags imm_readU8"]
	2 -. Codeptr .-> 5
	43["memindex__2000__2053 imm_readULEB32"]
	5 -. Codeptr .-> 43
	13["cond__1999 u8.!="]
	11 --> 13
	7 --> 13
	7["arg__2002 0"]
	11["arg__2001 u8.&"]
	5 --> 11
	8 --> 11
	8["arg__2004 0x40u8"]
	3["index pop_u32"]
	17 -. Stack .-> 3
	15{"memindex ϕ"}
	13 --> 15
	43 --> 15
	45 --> 15
	45["memindex__2006__2054 0u"]
	18["eff__1988 mach_writeMemory64_u32_64"]
	15 --> 18
	12 --> 18
	24 --> 18
	17 --> 18
	2 -. Memory .-> 18
	24["offset__2040 imm_readULEB64"]
	16 -. Codeptr .-> 24
	12["index pop_u64"]
	17 -. Stack .-> 12
	20["cond__1987 m_isMemory64"]
	15 --> 20
	21{{"Sϕ Stack "}}
	20 --> 21
	12 --> 21
	3 --> 21
	19{{"Sϕ Codeptr "}}
	20 --> 19
	24 --> 19
	28 --> 19
</pre>`;
window.traces["I64_STORE32"]["unlem_scheduler"] = ''
window.traces["I64_STORE32"]["unlem_scheduler"] += `<pre class='graph'>graph TD
subgraph block_626["Block 626"]
	direction TB
	b626_4[\\"Finish"/]
end
phi_628 --> block_626
subgraph phi_628["Phi 628"]
	p628_1{{"Sϕ Memory "}}
	p628_21{{"Sϕ Stack "}}
	p628_19{{"Sϕ Codeptr "}}
end
block_629 --> phi_628
block_630 --> phi_628
subgraph block_629["Block 629"]
	direction TB
	b629_12["index pop_u64"]
	b629_24["offset__2040 imm_readULEB64"]
	b629_18["eff__1988 mach_writeMemory64_u32_64"]
	b629_12 --> b629_24
	b629_24 --> b629_18
end
branch_627 --> block_629
subgraph branch_627["Branch 627"]
	br627_20["cond__1987 m_isMemory64"]

end
block_631 --> branch_627
subgraph block_631["Block 631"]
	direction TB
	b631_17["val pop_u64"]
	b631_20["cond__1987 m_isMemory64"]
	b631_17 --> b631_20
end
phi_633 --> block_631
subgraph phi_633["Phi 633"]
	p633_16{{"Sϕ Codeptr "}}
	p633_16{{"Sϕ Codeptr "}}
	p633_16{{"Sϕ Codeptr "}}
	p633_16{{"Sϕ Codeptr "}}
	p633_15{"memindex ϕ"}
	p633_15{"memindex ϕ"}
	p633_15{"memindex ϕ"}
	p633_15{"memindex ϕ"}
	p633_15{"memindex ϕ"}
end
block_634 --> phi_633
block_635 --> phi_633
subgraph block_634["Block 634"]
	direction TB
	b634_43["memindex__2000__2053 imm_readULEB32"]
end
branch_632 --> block_634
subgraph branch_632["Branch 632"]
	br632_13["cond__1999 u8.!="]

end
block_636 --> branch_632
subgraph block_636["Block 636"]
	direction TB
	b636_8["arg__2004 0x40u8"]
	b636_7["arg__2002 0"]
	b636_11["arg__2001 u8.&"]
	b636_13["cond__1999 u8.!="]
	b636_8 --> b636_7
	b636_7 --> b636_11
	b636_11 --> b636_13
end
subgraph block_635["Block 635"]
	direction TB
	b635_45["memindex__2006__2054 0u"]
end
branch_632 --> block_635
subgraph block_630["Block 630"]
	direction TB
	b630_3["index pop_u32"]
	b630_28["offset__2043 imm_readULEB32"]
	b630_9["eff__1993 mach_writeMemory32_u32_64"]
	b630_3 --> b630_28
	b630_28 --> b630_9
end
branch_627 --> block_630

</pre>`;
window.traces["I64_STORE32"]["unlem_scheduler_ssa"] = ''
window.traces["I64_STORE32"]["unlem_scheduler_ssa"] += `<pre class=''>def arg__2004 : byte = 0x40u8;
def arg__2002 : byte = 0;
def arg__2001 = u8.&(flags, arg__2004);
def cond__1999 = u8.!=(arg__2001, arg__2002);
if (cond__1999) {
	def memindex__2000__2053 = imm_readULEB32();
} else {
	def memindex__2006__2054 : u32 = 0u;
}
// phis: memindex <- memindex__2000__2053; memindex <- memindex__2006__2054; memindex <- memindex__2000__2053; memindex <- memindex__2006__2054; memindex <- memindex__2000__2053; memindex <- memindex__2006__2054; memindex <- memindex__2000__2053; memindex <- memindex__2006__2054; memindex <- memindex__2000__2053; memindex <- memindex__2006__2054; 
def val = pop_u64();
def cond__1987 = m_isMemory64(memindex);
if (cond__1987) {
	def index = pop_u64();
	def offset__2040 = imm_readULEB64();
	def eff__1988 = mach_writeMemory64_u32_64(memindex, index, offset__2040, val);
} else {
	def index = pop_u32();
	def offset__2043 = imm_readULEB32();
	def eff__1993 = mach_writeMemory32_u32_64(memindex, index, offset__2043, val);
}
// phis: 
</pre>`;
window.traces["I64_STORE32"]["unlem_scheduler_ssa"] += `<pre class=''>if (u8.!=(u8.&(flags, 0x40u8), 0)) {
	memindex = imm_readULEB32();
} else {
	memindex = 0u;
}
def val = pop_u64();
def cond = m_isMemory64(memindex);
if (cond) {
	def index = pop_u64();
	def offset = imm_readULEB64();
	mach_writeMemory64_u32_64(memindex, index, offset, val);
} else {
	def index = pop_u32();
	def offset1 = imm_readULEB32();
	mach_writeMemory32_u32_64(memindex, index, offset1, val);
}
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
	22["eff__1993 mach_writeMemory32_u32_64"]
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
	10["memindex__2000 imm_readULEB32"]
	3 -. Codeptr .-> 10
	9["cond__1999 u8.!="]
	8 --> 9
	5 --> 9
	5["arg__2002 0"]
	8["arg__2001 u8.&"]
	3 --> 8
	6 --> 8
	6["arg__2004 0x40u8"]
	17["index pop_u32"]
	13 -. Stack .-> 17
	11{"memindex ϕ"}
	9 --> 11
	10 --> 11
	4 --> 11
	4["memindex__2006 0u"]
	29["eff__1988 mach_writeMemory64_u32_64"]
	11 --> 29
	24 --> 29
	23 --> 29
	13 --> 29
	0 -. Memory .-> 29
	23["offset imm_readULEB64"]
	12 -. Codeptr .-> 23
	24["index pop_u64"]
	13 -. Stack .-> 24
	15["cond__1987 m_isMemory64"]
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
	22["eff__1993 mach_writeMemory32_u32_64"]
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
	10["memindex__2000 imm_readULEB32"]
	3 -. Codeptr .-> 10
	9["cond__1999 u8.!="]
	8 --> 9
	5 --> 9
	5["arg__2002 0"]
	8["arg__2001 u8.&"]
	3 --> 8
	6 --> 8
	6["arg__2004 0x40u8"]
	17["index pop_u32"]
	13 -. Stack .-> 17
	11{"memindex ϕ"}
	9 --> 11
	10 --> 11
	4 --> 11
	4["memindex__2006 0u"]
	29["eff__1988 mach_writeMemory64_u32_64"]
	11 --> 29
	24 --> 29
	23 --> 29
	13 --> 29
	0 -. Memory .-> 29
	23["offset imm_readULEB64"]
	12 -. Codeptr .-> 23
	24["index pop_u64"]
	13 -. Stack .-> 24
	15["cond__1987 m_isMemory64"]
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
def arg__2004 : byte = 0x40u8;
def arg__2001 = u8.&(flags, arg__2004);
def arg__2002 : byte = 0;
def cond__1999 = u8.!=(arg__2001, arg__2002);
var memindex: u32;
if (cond__1999) {
	def memindex__2000 = imm_readULEB32();
} else {
	def memindex__2006 : u32 = 0u;
}
// phis: memindex <- memindex__2000; memindex <- memindex__2006; 
def cond__1987 = m_isMemory64(memindex);
if (cond__1987) {
	def offset = imm_readULEB64();
	def index = pop_u64();
	def eff__1988 = mach_writeMemory64_u32_64(memindex, index, offset, val);
} else {
	def offset = imm_readULEB32();
	def index = pop_u32();
	def eff__1993 = mach_writeMemory32_u32_64(memindex, index, offset, val);
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
def arg__2082 : byte = 0;
def arg__2084 : byte = 0x40u8;
def arg__2083 = (flags);
def arg__2081 = u8.&(arg__2083, arg__2084);
def cond__2079 = u8.!=(arg__2081, arg__2082);
if (cond__2079) {
	def memindex__2080 = imm_readULEB32();
}
// phis: memindex <- memindex__2080; 
def arg__2078 = (memindex);
def cond__2071 = m_isMemory64(arg__2078);
if (cond__2071) {
	def arg__2074 = (memindex);
	def r = mach_memorySize64(arg__2074);
	def arg__2073 = (r);
	def eff__2072 = push_u64(arg__2073);
} else {
	def arg__2077 = (memindex);
	def r = mach_memorySize32(arg__2077);
	def arg__2076 = (r);
	def eff__2075 = push_u32(arg__2076);
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
	18["eff__2075 push_u32"]
	16 --> 18
	0 -. Stack .-> 18
	16["r mach_memorySize32"]
	11 --> 16
	11{"memindex ϕ"}
	9 --> 11
	10 --> 11
	4 --> 11
	4["memindex__2085 0u"]
	10["memindex__2080 imm_readULEB32"]
	3 -. Codeptr .-> 10
	3["flags imm_readU8"]
	0 -. Codeptr .-> 3
	9["cond__2079 u8.!="]
	8 --> 9
	5 --> 9
	5["arg__2082 0"]
	8["arg__2081 u8.&"]
	3 --> 8
	6 --> 8
	6["arg__2084 0x40u8"]
	22["eff__2072 push_u64"]
	20 --> 22
	0 -. Stack .-> 22
	20["r mach_memorySize64"]
	11 --> 20
	14["cond__2071 m_isMemory64"]
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
	18["eff__2075 push_u32"]
	16 --> 18
	0 -. Stack .-> 18
	16["r mach_memorySize32"]
	11 --> 16
	11{"memindex ϕ"}
	9 --> 11
	10 --> 11
	4 --> 11
	4["memindex__2086 0u"]
	10["memindex__2080 imm_readULEB32"]
	3 -. Codeptr .-> 10
	3["flags imm_readU8"]
	0 -. Codeptr .-> 3
	9["cond__2079 u8.!="]
	8 --> 9
	5 --> 9
	5["arg__2082 0"]
	8["arg__2081 u8.&"]
	3 --> 8
	6 --> 8
	6["arg__2084 0x40u8"]
	22["eff__2072 push_u64"]
	20 --> 22
	0 -. Stack .-> 22
	20["r mach_memorySize64"]
	11 --> 20
	14["cond__2071 m_isMemory64"]
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
	18["eff__2075 push_u32"]
	16 --> 18
	0 -. Stack .-> 18
	16["r mach_memorySize32"]
	11 --> 16
	11{"memindex ϕ"}
	9 --> 11
	10 --> 11
	4 --> 11
	4["memindex__2086 0u"]
	10["memindex__2080 imm_readULEB32"]
	3 -. Codeptr .-> 10
	3["flags imm_readU8"]
	0 -. Codeptr .-> 3
	9["cond__2079 u8.!="]
	8 --> 9
	5 --> 9
	5["arg__2082 0"]
	8["arg__2081 u8.&"]
	3 --> 8
	6 --> 8
	6["arg__2084 0x40u8"]
	22["eff__2072 push_u64"]
	20 --> 22
	0 -. Stack .-> 22
	20["r mach_memorySize64"]
	11 --> 20
	14["cond__2071 m_isMemory64"]
	11 --> 14
	12{{"Sϕ Codeptr "}}
	9 --> 12
	10 --> 12
	3 --> 12
</pre>`;
window.traces["MEMORY_SIZE"]["post_surgery 639"] = ''
window.traces["MEMORY_SIZE"]["post_surgery 639"] += `<pre class='graph'>---
config:
  layout: elk
---
graph TD
	2[\\"Finish"/]
	15 -. Codeptr .-> 2
	10 -. Stack .-> 2
	1 -. Trap Locals Globals Tables Memory Extra .-> 2
	1[/"Start"\\]
	10{{"Sϕ Stack "}}
	16 --> 10
	19 --> 10
	22 --> 10
	22["eff__2075__2090 push_u32"]
	21 --> 22
	1 -. Stack .-> 22
	21["r__2089 mach_memorySize32"]
	14 --> 21
	14{"memindex ϕ"}
	12 --> 14
	13 --> 14
	5 --> 14
	5["memindex__2086 0u"]
	13["memindex__2080 imm_readULEB32"]
	4 -. Codeptr .-> 13
	4["flags imm_readU8"]
	1 -. Codeptr .-> 4
	12["cond__2079 u8.!="]
	11 --> 12
	7 --> 12
	7["arg__2082 0"]
	11["arg__2081 u8.&"]
	4 --> 11
	8 --> 11
	8["arg__2084 0x40u8"]
	19["eff__2072__2088 push_u64"]
	18 --> 19
	1 -. Stack .-> 19
	18["r__2087 mach_memorySize64"]
	14 --> 18
	16["cond__2071 m_isMemory64"]
	14 --> 16
	15{{"Sϕ Codeptr "}}
	12 --> 15
	13 --> 15
	4 --> 15
</pre>`;
