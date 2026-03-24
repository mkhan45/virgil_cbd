window.traces = {};
window.info = {};
window.traces["SPLIT_BRANCHES"] = {}
window.traces["SPLIT_BRANCHES"]["parsed"] = ''
window.traces["SPLIT_BRANCHES"]["parsed"] += `<pre class=''>def c1 = pop_u32();
def arg__22 : u32 = 0;
def arg__21 = (c1);
def p = u32.!=(arg__21, arg__22);
def arg__20 : u32 = 2;
def arg__19 = (c1);
def q = u32.==(arg__19, arg__20);
def cond__0 = (p);
if (cond__0) {
	def cond__1 = (q);
	if (cond__1) {
		def arg__5 : u32 = 1;
		def eff__4 = push_u32(arg__5);
		def arg__3 : u32 = 2;
		def eff__2 = push_u32(arg__3);
	} else {
		def arg__9 : u32 = 3;
		def eff__8 = push_u32(arg__9);
		def arg__7 : u32 = 4;
		def eff__6 = push_u32(arg__7);
	}
// phis: 
} else {
	def cond__10 = (q);
	if (cond__10) {
		def arg__14 : u32 = 5;
		def eff__13 = push_u32(arg__14);
		def arg__12 : u32 = 6;
		def eff__11 = push_u32(arg__12);
	} else {
		def arg__18 : u32 = 7;
		def eff__17 = push_u32(arg__18);
		def arg__16 : u32 = 8;
		def eff__15 = push_u32(arg__16);
	}
// phis: 
}
// phis: 
</pre>`;
window.traces["SPLIT_BRANCHES"]["raw"] = ''
window.traces["SPLIT_BRANCHES"]["raw"] += `<pre class='graph'>---
config:
  layout: elk
---
graph TD
	1[\\"Finish"/]
	0 -. Codeptr Trap Locals Globals Tables Memory Extra .-> 1
	31 -. Stack .-> 1
	31{{"sea__25 Sϕ Stack "}}
	6 --> 31
	30 --> 31
	20 --> 31
	20{{"sea__23 Sϕ Stack "}}
	9 --> 20
	19 --> 20
	15 --> 20
	15["eff__15 push_u32"]
	14 --> 15
	13 -. Stack .-> 15
	13["eff__17 push_u32"]
	12 --> 13
	3 -. Stack .-> 13
	3["c1 pop_u32"]
	0 -. Stack .-> 3
	0[/"Start"\\]
	12["arg__18 7"]
	14["arg__16 8"]
	19["eff__11 push_u32"]
	18 --> 19
	17 -. Stack .-> 19
	17["eff__13 push_u32"]
	16 --> 17
	3 -. Stack .-> 17
	16["arg__14 5"]
	18["arg__12 6"]
	9["q u32.=="]
	3 --> 9
	7 --> 9
	7["arg__20 2"]
	30{{"sea__24 Sϕ Stack "}}
	9 --> 30
	29 --> 30
	25 --> 30
	25["eff__6 push_u32"]
	24 --> 25
	23 -. Stack .-> 25
	23["eff__8 push_u32"]
	22 --> 23
	3 -. Stack .-> 23
	22["arg__9 3"]
	24["arg__7 4"]
	29["eff__2 push_u32"]
	28 --> 29
	27 -. Stack .-> 29
	27["eff__4 push_u32"]
	26 --> 27
	3 -. Stack .-> 27
	26["arg__5 1"]
	28["arg__3 2"]
	6["p u32.!="]
	3 --> 6
	4 --> 6
	4["arg__22 0"]
</pre>`;
window.traces["SPLIT_BRANCHES"]["overloadOps"] = ''
window.traces["SPLIT_BRANCHES"]["overloadOps"] += `<pre class='graph'>---
config:
  layout: elk
---
graph TD
	1[\\"Finish"/]
	0 -. Codeptr Trap Locals Globals Tables Memory Extra .-> 1
	31 -. Stack .-> 1
	31{{"sea__25 Sϕ Stack "}}
	6 --> 31
	30 --> 31
	20 --> 31
	20{{"sea__23 Sϕ Stack "}}
	9 --> 20
	19 --> 20
	15 --> 20
	15["eff__15 push_u32"]
	14 --> 15
	13 -. Stack .-> 15
	13["eff__17 push_u32"]
	12 --> 13
	3 -. Stack .-> 13
	3["c1 pop_u32"]
	0 -. Stack .-> 3
	0[/"Start"\\]
	12["arg__18 7"]
	14["arg__16 8"]
	19["eff__11 push_u32"]
	18 --> 19
	17 -. Stack .-> 19
	17["eff__13 push_u32"]
	16 --> 17
	3 -. Stack .-> 17
	16["arg__14 5"]
	18["arg__12 6"]
	9["q U32_equals"]
	3 --> 9
	7 --> 9
	7["arg__20 2"]
	30{{"sea__24 Sϕ Stack "}}
	9 --> 30
	29 --> 30
	25 --> 30
	25["eff__6 push_u32"]
	24 --> 25
	23 -. Stack .-> 25
	23["eff__8 push_u32"]
	22 --> 23
	3 -. Stack .-> 23
	22["arg__9 3"]
	24["arg__7 4"]
	29["eff__2 push_u32"]
	28 --> 29
	27 -. Stack .-> 29
	27["eff__4 push_u32"]
	26 --> 27
	3 -. Stack .-> 27
	26["arg__5 1"]
	28["arg__3 2"]
	6["p U32_not_equals"]
	3 --> 6
	4 --> 6
	4["arg__22 0"]
</pre>`;
window.traces["SPLIT_BRANCHES"]["addAbstractions"] = ''
window.traces["SPLIT_BRANCHES"]["addAbstractions"] += `<pre class='graph'>---
config:
  layout: elk
---
graph TD
	1[\\"Finish"/]
	0 -. Codeptr Trap Locals Globals Tables Memory Extra .-> 1
	31 -. Stack .-> 1
	31{{"sea__25 Sϕ Stack "}}
	6 --> 31
	30 --> 31
	20 --> 31
	20{{"sea__23 Sϕ Stack "}}
	9 --> 20
	19 --> 20
	15 --> 20
	15["eff__15 push_u32"]
	37 --> 15
	13 -. Stack .-> 15
	13["eff__17 push_u32"]
	12 --> 13
	3 -. Stack .-> 13
	3["c1 pop_u32"]
	0 -. Stack .-> 3
	0[/"Start"\\]
	12["arg__18 7"]
	37["abs__31 lift_u32"]
	14 --> 37
	14["arg__16 8"]
	19["eff__11 push_u32"]
	36 --> 19
	17 -. Stack .-> 19
	17["eff__13 push_u32"]
	16 --> 17
	3 -. Stack .-> 17
	16["arg__14 5"]
	36["abs__30 lift_u32"]
	18 --> 36
	18["arg__12 6"]
	9["q U32_equals"]
	3 --> 9
	33 --> 9
	33["abs__27 lift_u32"]
	7 --> 33
	7["arg__20 2"]
	30{{"sea__24 Sϕ Stack "}}
	9 --> 30
	29 --> 30
	25 --> 30
	25["eff__6 push_u32"]
	35 --> 25
	23 -. Stack .-> 25
	23["eff__8 push_u32"]
	22 --> 23
	3 -. Stack .-> 23
	22["arg__9 3"]
	35["abs__29 lift_u32"]
	24 --> 35
	24["arg__7 4"]
	29["eff__2 push_u32"]
	34 --> 29
	27 -. Stack .-> 29
	27["eff__4 push_u32"]
	26 --> 27
	3 -. Stack .-> 27
	26["arg__5 1"]
	34["abs__28 lift_u32"]
	28 --> 34
	28["arg__3 2"]
	6["p U32_not_equals"]
	3 --> 6
	32 --> 6
	32["abs__26 lift_u32"]
	4 --> 32
	4["arg__22 0"]
</pre>`;
window.traces["SPLIT_BRANCHES"]["scheduler_start"] = ''
window.traces["SPLIT_BRANCHES"]["scheduler_start"] += `<pre class='graph'>---
config:
  layout: elk
---
graph TD
	1[\\"Finish"/]
	0 -. Codeptr Trap Locals Globals Tables Memory Extra .-> 1
	31 -. Stack .-> 1
	31{{"sea__25 Sϕ Stack "}}
	6 --> 31
	38 --> 31
	39 --> 31
	39["mv_f__33 |False|  [U32_not_equals [p]]"]
	6 --> 39
	20 -. Stack .-> 39
	20{{"sea__23 Sϕ Stack "}}
	9 --> 20
	42 --> 20
	43 --> 20
	43["mv_f__37 |False|  [U32_equals [q]]"]
	9 --> 43
	15 -. Stack .-> 43
	15["eff__15 push_u32"]
	37 --> 15
	13 -. Stack .-> 15
	13["eff__17 push_u32"]
	12 --> 13
	3 -. Stack .-> 13
	3["c1 pop_u32"]
	0 -. Stack .-> 3
	0[/"Start"\\]
	12["arg__18 7"]
	37["abs__31 lift_u32"]
	14 --> 37
	14["arg__16 8"]
	9["q U32_equals"]
	3 --> 9
	33 --> 9
	33["abs__27 lift_u32"]
	7 --> 33
	7["arg__20 2"]
	42["mv_t__36 |True|  [U32_equals [q]]"]
	9 --> 42
	19 -. Stack .-> 42
	19["eff__11 push_u32"]
	36 --> 19
	17 -. Stack .-> 19
	17["eff__13 push_u32"]
	16 --> 17
	3 -. Stack .-> 17
	16["arg__14 5"]
	36["abs__30 lift_u32"]
	18 --> 36
	18["arg__12 6"]
	6["p U32_not_equals"]
	3 --> 6
	32 --> 6
	32["abs__26 lift_u32"]
	4 --> 32
	4["arg__22 0"]
	38["mv_t__32 |True|  [U32_not_equals [p]]"]
	6 --> 38
	30 -. Stack .-> 38
	30{{"sea__24 Sϕ Stack "}}
	9 --> 30
	40 --> 30
	41 --> 30
	41["mv_f__35 |False|  [U32_equals [q]]"]
	9 --> 41
	25 -. Stack .-> 41
	25["eff__6 push_u32"]
	35 --> 25
	23 -. Stack .-> 25
	23["eff__8 push_u32"]
	22 --> 23
	3 -. Stack .-> 23
	22["arg__9 3"]
	35["abs__29 lift_u32"]
	24 --> 35
	24["arg__7 4"]
	40["mv_t__34 |True|  [U32_equals [q]]"]
	9 --> 40
	29 -. Stack .-> 40
	29["eff__2 push_u32"]
	34 --> 29
	27 -. Stack .-> 29
	27["eff__4 push_u32"]
	26 --> 27
	3 -. Stack .-> 27
	26["arg__5 1"]
	34["abs__28 lift_u32"]
	28 --> 34
	28["arg__3 2"]
</pre>`;
window.traces["SPLIT_BRANCHES"]["untangled"] = ''
window.traces["SPLIT_BRANCHES"]["untangled"] += `<pre class='graph'>---
config:
  layout: elk
---
graph TD
	1[\\"Finish"/]
	0 -. Codeptr Trap Locals Globals Tables Memory Extra .-> 1
	31 -. Stack .-> 1
	31{{"sea__25 Sϕ Stack "}}
	6 --> 31
	38 --> 31
	39 --> 31
	39["mv_f__33 |False|  [U32_not_equals [p]]"]
	6 --> 39
	20 -. Stack .-> 39
	20{{"sea__23 Sϕ Stack "}}
	9 --> 20
	42 --> 20
	43 --> 20
	43["mv_f__37 |False|  [U32_equals [q]]"]
	9 --> 43
	15 -. Stack .-> 43
	15["eff__15 push_u32"]
	37 --> 15
	13 -. Stack .-> 15
	13["eff__17 push_u32"]
	12 --> 13
	3 -. Stack .-> 13
	3["c1 pop_u32"]
	0 -. Stack .-> 3
	0[/"Start"\\]
	12["arg__18 7"]
	37["abs__31 lift_u32"]
	14 --> 37
	14["arg__16 8"]
	9["q U32_equals"]
	3 --> 9
	33 --> 9
	33["abs__27 lift_u32"]
	7 --> 33
	7["arg__20 2"]
	42["mv_t__36 |True|  [U32_equals [q]]"]
	9 --> 42
	19 -. Stack .-> 42
	19["eff__11 push_u32"]
	36 --> 19
	17 -. Stack .-> 19
	17["eff__13 push_u32"]
	16 --> 17
	3 -. Stack .-> 17
	16["arg__14 5"]
	36["abs__30 lift_u32"]
	18 --> 36
	18["arg__12 6"]
	6["p U32_not_equals"]
	3 --> 6
	32 --> 6
	32["abs__26 lift_u32"]
	4 --> 32
	4["arg__22 0"]
	38["mv_t__32 |True|  [U32_not_equals [p]]"]
	6 --> 38
	30 -. Stack .-> 38
	30{{"sea__24 Sϕ Stack "}}
	9 --> 30
	40 --> 30
	41 --> 30
	41["mv_f__35 |False|  [U32_equals [q]]"]
	9 --> 41
	25 -. Stack .-> 41
	25["eff__6 push_u32"]
	35 --> 25
	23 -. Stack .-> 25
	23["eff__8 push_u32"]
	22 --> 23
	3 -. Stack .-> 23
	22["arg__9 3"]
	35["abs__29 lift_u32"]
	24 --> 35
	24["arg__7 4"]
	40["mv_t__34 |True|  [U32_equals [q]]"]
	9 --> 40
	29 -. Stack .-> 40
	29["eff__2 push_u32"]
	34 --> 29
	27 -. Stack .-> 29
	27["eff__4 push_u32"]
	26 --> 27
	3 -. Stack .-> 27
	26["arg__5 1"]
	34["abs__28 lift_u32"]
	28 --> 34
	28["arg__3 2"]
</pre>`;
window.traces["SPLIT_BRANCHES"]["schedulerMermaid"] = ''
window.traces["SPLIT_BRANCHES"]["schedulerMermaid"] += `<pre class='graph'>graph TD
subgraph block_1["Block 1"]
	direction TB
	b1_1[\\"Finish"/]
end
phi_3 --> block_1
subgraph phi_3["Phi 3"]
	p3_31{{"sea__25 Sϕ Stack "}}
end
block_4 --> phi_3
block_5 --> phi_3
subgraph block_4["Block 4"]
	direction TB
	b4_38["mv_t__32 |True|  [U32_not_equals [p]]"]
end
phi_8 --> block_4
subgraph phi_8["Phi 8"]
	p8_30{{"sea__24 Sϕ Stack "}}
end
block_9 --> phi_8
block_10 --> phi_8
subgraph block_9["Block 9"]
	direction TB
	b9_26["arg__5 1"]
	b9_28["arg__3 2"]
	b9_27["eff__4 push_u32"]
	b9_34["abs__28 lift_u32"]
	b9_29["eff__2 push_u32"]
	b9_40["mv_t__34 |True|  [U32_equals [q]]"]
	b9_26 --> b9_28
	b9_28 --> b9_27
	b9_27 --> b9_34
	b9_34 --> b9_29
	b9_29 --> b9_40
end
branch_7 --> block_9
subgraph branch_7["Branch 7"]
	br7_9["q U32_equals"]

end
branch_2 --> branch_7
subgraph branch_2["Branch 2"]
	br2_6["p U32_not_equals"]

end
block_6 --> branch_2
subgraph block_6["Block 6"]
	direction TB
	b6_0[/"Start"\\]
	b6_3["c1 pop_u32"]
	b6_7["arg__20 2"]
	b6_33["abs__27 lift_u32"]
	b6_9["q U32_equals"]
	b6_4["arg__22 0"]
	b6_32["abs__26 lift_u32"]
	b6_6["p U32_not_equals"]
	b6_0 --> b6_3
	b6_3 --> b6_7
	b6_7 --> b6_33
	b6_33 --> b6_9
	b6_9 --> b6_4
	b6_4 --> b6_32
	b6_32 --> b6_6
end
subgraph block_10["Block 10"]
	direction TB
	b10_22["arg__9 3"]
	b10_24["arg__7 4"]
	b10_23["eff__8 push_u32"]
	b10_35["abs__29 lift_u32"]
	b10_25["eff__6 push_u32"]
	b10_41["mv_f__35 |False|  [U32_equals [q]]"]
	b10_22 --> b10_24
	b10_24 --> b10_23
	b10_23 --> b10_35
	b10_35 --> b10_25
	b10_25 --> b10_41
end
branch_7 --> block_10
subgraph block_5["Block 5"]
	direction TB
	b5_39["mv_f__33 |False|  [U32_not_equals [p]]"]
end
phi_12 --> block_5
subgraph phi_12["Phi 12"]
	p12_20{{"sea__23 Sϕ Stack "}}
end
block_13 --> phi_12
block_14 --> phi_12
subgraph block_13["Block 13"]
	direction TB
	b13_16["arg__14 5"]
	b13_18["arg__12 6"]
	b13_17["eff__13 push_u32"]
	b13_36["abs__30 lift_u32"]
	b13_19["eff__11 push_u32"]
	b13_42["mv_t__36 |True|  [U32_equals [q]]"]
	b13_16 --> b13_18
	b13_18 --> b13_17
	b13_17 --> b13_36
	b13_36 --> b13_19
	b13_19 --> b13_42
end
branch_11 --> block_13
subgraph branch_11["Branch 11"]
	br11_9["q U32_equals"]

end
branch_2 --> branch_11
subgraph block_14["Block 14"]
	direction TB
	b14_12["arg__18 7"]
	b14_14["arg__16 8"]
	b14_13["eff__17 push_u32"]
	b14_37["abs__31 lift_u32"]
	b14_15["eff__15 push_u32"]
	b14_43["mv_f__37 |False|  [U32_equals [q]]"]
	b14_12 --> b14_14
	b14_14 --> b14_13
	b14_13 --> b14_37
	b14_37 --> b14_15
	b14_15 --> b14_43
end
branch_11 --> block_14

</pre>`;
window.traces["SPLIT_BRANCHES"]["scheduler_ssad"] = ''
window.traces["SPLIT_BRANCHES"]["scheduler_ssad"] += `<pre class=''>def c1 = pop_u32();
def arg__20 : u32 = 2;
def abs__27 = lift_u32(arg__20);
def q = U32_equals(c1, abs__27);
def arg__22 : u32 = 0;
def abs__26 = lift_u32(arg__22);
def p = U32_not_equals(c1, abs__26);
if (p) {
	if (q) {
		def arg__5 : u32 = 1;
		def arg__3 : u32 = 2;
		def eff__4 = push_u32(arg__5);
		def abs__28 = lift_u32(arg__3);
		def eff__2 = push_u32(abs__28);
	} else {
		def arg__9 : u32 = 3;
		def arg__7 : u32 = 4;
		def eff__8 = push_u32(arg__9);
		def abs__29 = lift_u32(arg__7);
		def eff__6 = push_u32(abs__29);
	}
// phis: 
} else {
	if (q) {
		def arg__14 : u32 = 5;
		def arg__12 : u32 = 6;
		def eff__13 = push_u32(arg__14);
		def abs__30 = lift_u32(arg__12);
		def eff__11 = push_u32(abs__30);
	} else {
		def arg__18 : u32 = 7;
		def arg__16 : u32 = 8;
		def eff__17 = push_u32(arg__18);
		def abs__31 = lift_u32(arg__16);
		def eff__15 = push_u32(abs__31);
	}
// phis: 
}
// phis: 
</pre>`;
window.traces["SPLIT_BRANCHES"]["scheduler_ssad_pretty"] = ''
window.traces["SPLIT_BRANCHES"]["scheduler_ssad_pretty"] += `<pre class=''>def c1 = pop_u32();
def p = U32_not_equals(c1, lift_u32(0));
if (p) {
	if (U32_equals(c1, lift_u32(2))) {
		push_u32(1);
		push_u32(lift_u32(2));
	} else {
		push_u32(3);
		push_u32(lift_u32(4));
	}
} else {
	if (U32_equals(c1, lift_u32(2))) {
		push_u32(5);
		push_u32(lift_u32(6));
	} else {
		push_u32(7);
		push_u32(lift_u32(8));
	}
}
</pre>`;
window.traces["SPLIT_BRANCHES"]["unLEM"] = ''
window.traces["SPLIT_BRANCHES"]["unLEM"] += `<pre class='graph'>---
config:
  layout: elk
---
graph TD
	1[\\"Finish"/]
	0 -. Codeptr Trap Locals Globals Tables Memory Extra .-> 1
	31 -. Stack .-> 1
	31{{"sea__25 Sϕ Stack "}}
	40 --> 31
	50 --> 31
	41 --> 31
	41{{"innerPhi__41 Sϕ Stack "}}
	38 --> 41
	30 --> 41
	20 --> 41
	20{{"sea__23 Sϕ Stack "}}
	53 --> 20
	63 --> 20
	59 --> 20
	59{{"innerPhi__59 Sϕ Stack "}}
	51 --> 59
	19 --> 59
	15 --> 59
	15["eff__15 push_u32"]
	37 --> 15
	13 -. Stack .-> 15
	13["eff__17 push_u32"]
	12 --> 13
	3 -. Stack .-> 13
	3["c1 pop_u32"]
	0 -. Stack .-> 3
	0[/"Start"\\]
	12["arg__18 7"]
	37["abs__31 lift_u32"]
	14 --> 37
	14["arg__16 8"]
	19["eff__11 push_u32"]
	36 --> 19
	17 -. Stack .-> 19
	17["eff__13 push_u32"]
	16 --> 17
	3 -. Stack .-> 17
	16["arg__14 5"]
	36["abs__30 lift_u32"]
	18 --> 36
	18["arg__12 6"]
	51["mt__51 U32_maybeTrue"]
	9 --> 51
	9["q U32_equals"]
	3 --> 9
	33 --> 9
	33["abs__27 lift_u32"]
	7 --> 33
	7["arg__20 2"]
	63["eff_push__63 push_u32"]
	62 --> 63
	61 -. Stack .-> 63
	61["eff_push__61 push_u32"]
	60 --> 61
	3 -. Stack .-> 61
	60["merge__60 merge_u"]
	16 --> 60
	12 --> 60
	62["merge__62 merge_u"]
	36 --> 62
	37 --> 62
	53["mb__53 bool.&&"]
	51 --> 53
	52 --> 53
	52["mf__52 U32_maybeFalse"]
	9 --> 52
	30{{"sea__24 Sϕ Stack "}}
	53 --> 30
	58 --> 30
	54 --> 30
	54{{"innerPhi__54 Sϕ Stack "}}
	51 --> 54
	29 --> 54
	25 --> 54
	25["eff__6 push_u32"]
	35 --> 25
	23 -. Stack .-> 25
	23["eff__8 push_u32"]
	22 --> 23
	3 -. Stack .-> 23
	22["arg__9 3"]
	35["abs__29 lift_u32"]
	24 --> 35
	24["arg__7 4"]
	29["eff__2 push_u32"]
	34 --> 29
	27 -. Stack .-> 29
	27["eff__4 push_u32"]
	26 --> 27
	3 -. Stack .-> 27
	26["arg__5 1"]
	34["abs__28 lift_u32"]
	28 --> 34
	28["arg__3 2"]
	58["eff_push__58 push_u32"]
	57 --> 58
	56 -. Stack .-> 58
	56["eff_push__56 push_u32"]
	55 --> 56
	3 -. Stack .-> 56
	55["merge__55 merge_u"]
	26 --> 55
	22 --> 55
	57["merge__57 merge_u"]
	34 --> 57
	35 --> 57
	38["mt__38 U32_maybeTrue"]
	6 --> 38
	6["p U32_not_equals"]
	3 --> 6
	32 --> 6
	32["abs__26 lift_u32"]
	4 --> 32
	4["arg__22 0"]
	50{{"merged_phi__50 Sϕ Stack "}}
	9 --> 50
	45 --> 50
	49 --> 50
	49["eff_push__49 push_u32"]
	48 --> 49
	47 -. Stack .-> 49
	47["eff_push__47 push_u32"]
	46 --> 47
	3 -. Stack .-> 47
	46["merge__46 merge_u"]
	22 --> 46
	12 --> 46
	48["merge__48 merge_u"]
	35 --> 48
	37 --> 48
	45["eff_push__45 push_u32"]
	44 --> 45
	43 -. Stack .-> 45
	43["eff_push__43 push_u32"]
	42 --> 43
	3 -. Stack .-> 43
	42["merge__42 merge_u"]
	26 --> 42
	16 --> 42
	44["merge__44 merge_u"]
	34 --> 44
	36 --> 44
	40["mb__40 bool.&&"]
	38 --> 40
	39 --> 40
	39["mf__39 U32_maybeFalse"]
	6 --> 39
</pre>`;
window.traces["SPLIT_BRANCHES_ul"] = {}
window.traces["SPLIT_BRANCHES_ul"]["scheduler_start"] = ''
window.traces["SPLIT_BRANCHES_ul"]["scheduler_start"] += `<pre class='graph'>---
config:
  layout: elk
---
graph TD
	1[\\"Finish"/]
	0 -. Codeptr Trap Locals Globals Tables Memory Extra .-> 1
	31 -. Stack .-> 1
	31{{"sea__25 Sϕ Stack "}}
	40 --> 31
	64 --> 31
	65 --> 31
	65["mv_f__65 |False|  [bool.&& [mb__40]]"]
	40 --> 65
	41 -. Stack .-> 65
	41{{"innerPhi__41 Sϕ Stack "}}
	38 --> 41
	68 --> 41
	69 --> 41
	69["mv_f__69 |False|  [U32_maybeTrue [mt__38]]"]
	38 --> 69
	20 -. Stack .-> 69
	20{{"sea__23 Sϕ Stack "}}
	53 --> 20
	72 --> 20
	73 --> 20
	73["mv_f__73 |False|  [bool.&& [mb__53]]"]
	53 --> 73
	59 -. Stack .-> 73
	59{{"innerPhi__59 Sϕ Stack "}}
	51 --> 59
	76 --> 59
	77 --> 59
	77["mv_f__77 |False|  [U32_maybeTrue [mt__51]]"]
	51 --> 77
	15 -. Stack .-> 77
	15["eff__15 push_u32"]
	37 --> 15
	13 -. Stack .-> 15
	13["eff__17 push_u32"]
	12 --> 13
	3 -. Stack .-> 13
	3["c1 pop_u32"]
	0 -. Stack .-> 3
	0[/"Start"\\]
	12["arg__18 7"]
	37["abs__31 lift_u32"]
	14 --> 37
	14["arg__16 8"]
	51["mt__51 U32_maybeTrue"]
	9 --> 51
	9["q U32_equals"]
	3 --> 9
	33 --> 9
	33["abs__27 lift_u32"]
	7 --> 33
	7["arg__20 2"]
	76["mv_t__76 |True|  [U32_maybeTrue [mt__51]]"]
	51 --> 76
	19 -. Stack .-> 76
	19["eff__11 push_u32"]
	36 --> 19
	17 -. Stack .-> 19
	17["eff__13 push_u32"]
	16 --> 17
	3 -. Stack .-> 17
	16["arg__14 5"]
	36["abs__30 lift_u32"]
	18 --> 36
	18["arg__12 6"]
	53["mb__53 bool.&&"]
	51 --> 53
	52 --> 53
	52["mf__52 U32_maybeFalse"]
	9 --> 52
	72["mv_t__72 |True|  [bool.&& [mb__53]]"]
	53 --> 72
	63 -. Stack .-> 72
	63["eff_push__63 push_u32"]
	62 --> 63
	61 -. Stack .-> 63
	61["eff_push__61 push_u32"]
	60 --> 61
	3 -. Stack .-> 61
	60["merge__60 merge_u"]
	16 --> 60
	12 --> 60
	62["merge__62 merge_u"]
	36 --> 62
	37 --> 62
	38["mt__38 U32_maybeTrue"]
	6 --> 38
	6["p U32_not_equals"]
	3 --> 6
	32 --> 6
	32["abs__26 lift_u32"]
	4 --> 32
	4["arg__22 0"]
	68["mv_t__68 |True|  [U32_maybeTrue [mt__38]]"]
	38 --> 68
	30 -. Stack .-> 68
	30{{"sea__24 Sϕ Stack "}}
	53 --> 30
	70 --> 30
	71 --> 30
	71["mv_f__71 |False|  [bool.&& [mb__53]]"]
	53 --> 71
	54 -. Stack .-> 71
	54{{"innerPhi__54 Sϕ Stack "}}
	51 --> 54
	74 --> 54
	75 --> 54
	75["mv_f__75 |False|  [U32_maybeTrue [mt__51]]"]
	51 --> 75
	25 -. Stack .-> 75
	25["eff__6 push_u32"]
	35 --> 25
	23 -. Stack .-> 25
	23["eff__8 push_u32"]
	22 --> 23
	3 -. Stack .-> 23
	22["arg__9 3"]
	35["abs__29 lift_u32"]
	24 --> 35
	24["arg__7 4"]
	74["mv_t__74 |True|  [U32_maybeTrue [mt__51]]"]
	51 --> 74
	29 -. Stack .-> 74
	29["eff__2 push_u32"]
	34 --> 29
	27 -. Stack .-> 29
	27["eff__4 push_u32"]
	26 --> 27
	3 -. Stack .-> 27
	26["arg__5 1"]
	34["abs__28 lift_u32"]
	28 --> 34
	28["arg__3 2"]
	70["mv_t__70 |True|  [bool.&& [mb__53]]"]
	53 --> 70
	58 -. Stack .-> 70
	58["eff_push__58 push_u32"]
	57 --> 58
	56 -. Stack .-> 58
	56["eff_push__56 push_u32"]
	55 --> 56
	3 -. Stack .-> 56
	55["merge__55 merge_u"]
	26 --> 55
	22 --> 55
	57["merge__57 merge_u"]
	34 --> 57
	35 --> 57
	40["mb__40 bool.&&"]
	38 --> 40
	39 --> 40
	39["mf__39 U32_maybeFalse"]
	6 --> 39
	64["mv_t__64 |True|  [bool.&& [mb__40]]"]
	40 --> 64
	50 -. Stack .-> 64
	50{{"merged_phi__50 Sϕ Stack "}}
	9 --> 50
	66 --> 50
	67 --> 50
	67["mv_f__67 |False|  [U32_equals [q]]"]
	9 --> 67
	49 -. Stack .-> 67
	49["eff_push__49 push_u32"]
	48 --> 49
	47 -. Stack .-> 49
	47["eff_push__47 push_u32"]
	46 --> 47
	3 -. Stack .-> 47
	46["merge__46 merge_u"]
	22 --> 46
	12 --> 46
	48["merge__48 merge_u"]
	35 --> 48
	37 --> 48
	66["mv_t__66 |True|  [U32_equals [q]]"]
	9 --> 66
	45 -. Stack .-> 66
	45["eff_push__45 push_u32"]
	44 --> 45
	43 -. Stack .-> 45
	43["eff_push__43 push_u32"]
	42 --> 43
	3 -. Stack .-> 43
	42["merge__42 merge_u"]
	26 --> 42
	16 --> 42
	44["merge__44 merge_u"]
	34 --> 44
	36 --> 44
</pre>`;
window.traces["SPLIT_BRANCHES_ul"]["untangled"] = ''
window.traces["SPLIT_BRANCHES_ul"]["untangled"] += `<pre class='graph'>---
config:
  layout: elk
---
graph TD
	1[\\"Finish"/]
	0 -. Codeptr Trap Locals Globals Tables Memory Extra .-> 1
	31 -. Stack .-> 1
	31{{"sea__25 Sϕ Stack "}}
	40 --> 31
	64 --> 31
	65 --> 31
	65["mv_f__65 |False|  [bool.&& [mb__40]]"]
	40 --> 65
	41 -. Stack .-> 65
	41{{"innerPhi__41 Sϕ Stack "}}
	38 --> 41
	68 --> 41
	69 --> 41
	69["mv_f__69 |False|  [U32_maybeTrue [mt__38]]"]
	38 --> 69
	20 -. Stack .-> 69
	20{{"sea__23 Sϕ Stack "}}
	53 --> 20
	98 --> 20
	110 --> 20
	110["mv_f__73__100 |False|  [bool.&& [mb__53]]"]
	53 --> 110
	109 -. Stack .-> 110
	109{{"innerPhi__59__99 Sϕ Stack "}}
	51 --> 109
	111 --> 109
	112 --> 109
	112["mv_f__77__102 |False|  [U32_maybeTrue [mt__51]]"]
	51 --> 112
	102 -. Stack .-> 112
	102["eff__15__92 push_u32"]
	108 --> 102
	100 -. Stack .-> 102
	100["eff__17__90 push_u32"]
	99 --> 100
	3 -. Stack .-> 100
	3["c1 pop_u32"]
	0 -. Stack .-> 3
	0[/"Start"\\]
	99["arg__18__89 7"]
	108["abs__31__98 lift_u32"]
	101 --> 108
	101["arg__16__91 8"]
	51["mt__51 U32_maybeTrue"]
	9 --> 51
	9["q U32_equals"]
	3 --> 9
	33 --> 9
	33["abs__27 lift_u32"]
	7 --> 33
	7["arg__20 2"]
	111["mv_t__76__101 |True|  [U32_maybeTrue [mt__51]]"]
	51 --> 111
	106 -. Stack .-> 111
	106["eff__11__96 push_u32"]
	107 --> 106
	104 -. Stack .-> 106
	104["eff__13__94 push_u32"]
	103 --> 104
	3 -. Stack .-> 104
	103["arg__14__93 5"]
	107["abs__30__97 lift_u32"]
	105 --> 107
	105["arg__12__95 6"]
	53["mb__53 bool.&&"]
	51 --> 53
	52 --> 53
	52["mf__52 U32_maybeFalse"]
	9 --> 52
	98["mv_t__72__88 |True|  [bool.&& [mb__53]]"]
	53 --> 98
	97 -. Stack .-> 98
	97["eff_push__63__87 push_u32"]
	96 --> 97
	95 -. Stack .-> 97
	95["eff_push__61__85 push_u32"]
	94 --> 95
	3 -. Stack .-> 95
	94["merge__60__84 merge_u"]
	90 --> 94
	88 --> 94
	88["arg__18__78 7"]
	90["arg__14__80 5"]
	96["merge__62__86 merge_u"]
	92 --> 96
	93 --> 96
	93["abs__31__83 lift_u32"]
	89 --> 93
	89["arg__16__79 8"]
	92["abs__30__82 lift_u32"]
	91 --> 92
	91["arg__12__81 6"]
	38["mt__38 U32_maybeTrue"]
	6 --> 38
	6["p U32_not_equals"]
	3 --> 6
	32 --> 6
	32["abs__26 lift_u32"]
	4 --> 32
	4["arg__22 0"]
	68["mv_t__68 |True|  [U32_maybeTrue [mt__38]]"]
	38 --> 68
	30 -. Stack .-> 68
	30{{"sea__24 Sϕ Stack "}}
	53 --> 30
	123 --> 30
	135 --> 30
	135["mv_f__71__125 |False|  [bool.&& [mb__53]]"]
	53 --> 135
	134 -. Stack .-> 135
	134{{"innerPhi__54__124 Sϕ Stack "}}
	51 --> 134
	136 --> 134
	137 --> 134
	137["mv_f__75__127 |False|  [U32_maybeTrue [mt__51]]"]
	51 --> 137
	127 -. Stack .-> 137
	127["eff__6__117 push_u32"]
	133 --> 127
	125 -. Stack .-> 127
	125["eff__8__115 push_u32"]
	124 --> 125
	3 -. Stack .-> 125
	124["arg__9__114 3"]
	133["abs__29__123 lift_u32"]
	126 --> 133
	126["arg__7__116 4"]
	136["mv_t__74__126 |True|  [U32_maybeTrue [mt__51]]"]
	51 --> 136
	131 -. Stack .-> 136
	131["eff__2__121 push_u32"]
	132 --> 131
	129 -. Stack .-> 131
	129["eff__4__119 push_u32"]
	128 --> 129
	3 -. Stack .-> 129
	128["arg__5__118 1"]
	132["abs__28__122 lift_u32"]
	130 --> 132
	130["arg__3__120 2"]
	123["mv_t__70__113 |True|  [bool.&& [mb__53]]"]
	53 --> 123
	122 -. Stack .-> 123
	122["eff_push__58__112 push_u32"]
	121 --> 122
	120 -. Stack .-> 122
	120["eff_push__56__110 push_u32"]
	119 --> 120
	3 -. Stack .-> 120
	119["merge__55__109 merge_u"]
	115 --> 119
	113 --> 119
	113["arg__9__103 3"]
	115["arg__5__105 1"]
	121["merge__57__111 merge_u"]
	117 --> 121
	118 --> 121
	118["abs__29__108 lift_u32"]
	114 --> 118
	114["arg__7__104 4"]
	117["abs__28__107 lift_u32"]
	116 --> 117
	116["arg__3__106 2"]
	40["mb__40 bool.&&"]
	38 --> 40
	39 --> 40
	39["mf__39 U32_maybeFalse"]
	6 --> 39
	64["mv_t__64 |True|  [bool.&& [mb__40]]"]
	40 --> 64
	50 -. Stack .-> 64
	50{{"merged_phi__50 Sϕ Stack "}}
	9 --> 50
	66 --> 50
	67 --> 50
	67["mv_f__67 |False|  [U32_equals [q]]"]
	9 --> 67
	49 -. Stack .-> 67
	49["eff_push__49 push_u32"]
	48 --> 49
	47 -. Stack .-> 49
	47["eff_push__47 push_u32"]
	46 --> 47
	3 -. Stack .-> 47
	46["merge__46 merge_u"]
	22 --> 46
	12 --> 46
	12["arg__18 7"]
	22["arg__9 3"]
	48["merge__48 merge_u"]
	35 --> 48
	37 --> 48
	37["abs__31 lift_u32"]
	14 --> 37
	14["arg__16 8"]
	35["abs__29 lift_u32"]
	24 --> 35
	24["arg__7 4"]
	66["mv_t__66 |True|  [U32_equals [q]]"]
	9 --> 66
	45 -. Stack .-> 66
	45["eff_push__45 push_u32"]
	44 --> 45
	43 -. Stack .-> 45
	43["eff_push__43 push_u32"]
	42 --> 43
	3 -. Stack .-> 43
	42["merge__42 merge_u"]
	26 --> 42
	16 --> 42
	16["arg__14 5"]
	26["arg__5 1"]
	44["merge__44 merge_u"]
	34 --> 44
	36 --> 44
	36["abs__30 lift_u32"]
	18 --> 36
	18["arg__12 6"]
	34["abs__28 lift_u32"]
	28 --> 34
	28["arg__3 2"]
</pre>`;
window.traces["SPLIT_BRANCHES"]["unlem_schedule"] = ''
window.traces["SPLIT_BRANCHES"]["unlem_schedule"] += `<pre class=''>def c1 = pop_u32();
def arg__20 : u32 = 2;
def abs__27 = lift_u32(arg__20);
def q = U32_equals(c1, abs__27);
def mt__51 = U32_maybeTrue(q);
def mf__52 = U32_maybeFalse(q);
def arg__22 : u32 = 0;
def mb__53 = bool.&&(mt__51, mf__52);
def abs__26 = lift_u32(arg__22);
def p = U32_not_equals(c1, abs__26);
def mt__38 = U32_maybeTrue(p);
def mf__39 = U32_maybeFalse(p);
def mb__40 = bool.&&(mt__38, mf__39);
if (mb__40) {
	if (q) {
		def arg__14 : u32 = 5;
		def arg__5 : u32 = 1;
		def arg__12 : u32 = 6;
		def arg__3 : u32 = 2;
		def merge__42 = merge_u(arg__5, arg__14);
		def abs__30 = lift_u32(arg__12);
		def abs__28 = lift_u32(arg__3);
		def eff_push__43 = push_u32(merge__42);
		def merge__44 = merge_u(abs__28, abs__30);
		def eff_push__45 = push_u32(merge__44);
	} else {
		def arg__18 : u32 = 7;
		def arg__9 : u32 = 3;
		def arg__16 : u32 = 8;
		def arg__7 : u32 = 4;
		def merge__46 = merge_u(arg__9, arg__18);
		def abs__31 = lift_u32(arg__16);
		def abs__29 = lift_u32(arg__7);
		def eff_push__47 = push_u32(merge__46);
		def merge__48 = merge_u(abs__29, abs__31);
		def eff_push__49 = push_u32(merge__48);
	}
// phis: 
} else {
	if (mt__38) {
		if (mb__53) {
			def arg__9__103 : u32 = 3;
			def arg__5__105 : u32 = 1;
			def arg__7__104 : u32 = 4;
			def arg__3__106 : u32 = 2;
			def merge__55__109 = merge_u(arg__5__105, arg__9__103);
			def abs__29__108 = lift_u32(arg__7__104);
			def abs__28__107 = lift_u32(arg__3__106);
			def eff_push__56__110 = push_u32(merge__55__109);
			def merge__57__111 = merge_u(abs__28__107, abs__29__108);
			def eff_push__58__112 = push_u32(merge__57__111);
		} else {
			if (mt__51) {
				def arg__5__118 : u32 = 1;
				def arg__5 = (arg__5__118);
				def arg__3__120 : u32 = 2;
				def arg__3 = (arg__3__120);
				def eff__4__119 = push_u32(arg__5__118);
				def eff__4 = (eff__4__119);
				def abs__28__122 = lift_u32(arg__3__120);
				def abs__28 = (abs__28__122);
				def eff__2__121 = push_u32(abs__28__122);
				def eff__2 = (eff__2__121);
			} else {
				def arg__9__114 : u32 = 3;
				def arg__9 = (arg__9__114);
				def arg__7__116 : u32 = 4;
				def arg__7 = (arg__7__116);
				def eff__8__115 = push_u32(arg__9__114);
				def eff__8 = (eff__8__115);
				def abs__29__123 = lift_u32(arg__7__116);
				def abs__29 = (abs__29__123);
				def eff__6__117 = push_u32(abs__29__123);
				def eff__6 = (eff__6__117);
			}
// phis: 
		}
// phis: 
	} else {
		if (mb__53) {
			def arg__18__78 : u32 = 7;
			def arg__14__80 : u32 = 5;
			def arg__16__79 : u32 = 8;
			def arg__12__81 : u32 = 6;
			def merge__60__84 = merge_u(arg__14__80, arg__18__78);
			def abs__31__83 = lift_u32(arg__16__79);
			def abs__30__82 = lift_u32(arg__12__81);
			def eff_push__61__85 = push_u32(merge__60__84);
			def merge__62__86 = merge_u(abs__30__82, abs__31__83);
			def eff_push__63__87 = push_u32(merge__62__86);
		} else {
			if (mt__51) {
				def arg__14__93 : u32 = 5;
				def arg__14 = (arg__14__93);
				def arg__12__95 : u32 = 6;
				def arg__12 = (arg__12__95);
				def eff__13__94 = push_u32(arg__14__93);
				def eff__13 = (eff__13__94);
				def abs__30__97 = lift_u32(arg__12__95);
				def abs__30 = (abs__30__97);
				def eff__11__96 = push_u32(abs__30__97);
				def eff__11 = (eff__11__96);
			} else {
				def arg__18__89 : u32 = 7;
				def arg__18 = (arg__18__89);
				def arg__16__91 : u32 = 8;
				def arg__16 = (arg__16__91);
				def eff__17__90 = push_u32(arg__18__89);
				def eff__17 = (eff__17__90);
				def abs__31__98 = lift_u32(arg__16__91);
				def abs__31 = (abs__31__98);
				def eff__15__92 = push_u32(abs__31__98);
				def eff__15 = (eff__15__92);
			}
// phis: 
		}
// phis: 
	}
// phis: 
}
// phis: 
</pre>`;
window.traces["SPLIT_BRANCHES"]["unlem_scheduler"] = ''
window.traces["SPLIT_BRANCHES"]["unlem_scheduler"] += `<pre class='graph'>graph TD
subgraph block_15["Block 15"]
	direction TB
	b15_1[\\"Finish"/]
end
phi_17 --> block_15
subgraph phi_17["Phi 17"]
	p17_31{{"sea__25 Sϕ Stack "}}
end
block_18 --> phi_17
block_19 --> phi_17
subgraph block_18["Block 18"]
	direction TB
	b18_64["mv_t__64 |True|  [bool.&& [mb__40]]"]
end
phi_22 --> block_18
subgraph phi_22["Phi 22"]
	p22_50{{"merged_phi__50 Sϕ Stack "}}
end
block_23 --> phi_22
block_24 --> phi_22
subgraph block_23["Block 23"]
	direction TB
	b23_16["arg__14 5"]
	b23_26["arg__5 1"]
	b23_18["arg__12 6"]
	b23_28["arg__3 2"]
	b23_42["merge__42 merge_u"]
	b23_36["abs__30 lift_u32"]
	b23_34["abs__28 lift_u32"]
	b23_43["eff_push__43 push_u32"]
	b23_44["merge__44 merge_u"]
	b23_45["eff_push__45 push_u32"]
	b23_66["mv_t__66 |True|  [U32_equals [q]]"]
	b23_16 --> b23_26
	b23_26 --> b23_18
	b23_18 --> b23_28
	b23_28 --> b23_42
	b23_42 --> b23_36
	b23_36 --> b23_34
	b23_34 --> b23_43
	b23_43 --> b23_44
	b23_44 --> b23_45
	b23_45 --> b23_66
end
branch_21 --> block_23
subgraph branch_21["Branch 21"]
	br21_9["q U32_equals"]

end
branch_16 --> branch_21
subgraph branch_16["Branch 16"]
	br16_40["mb__40 bool.&&"]

end
block_20 --> branch_16
subgraph block_20["Block 20"]
	direction TB
	b20_0[/"Start"\\]
	b20_3["c1 pop_u32"]
	b20_7["arg__20 2"]
	b20_33["abs__27 lift_u32"]
	b20_9["q U32_equals"]
	b20_51["mt__51 U32_maybeTrue"]
	b20_52["mf__52 U32_maybeFalse"]
	b20_4["arg__22 0"]
	b20_53["mb__53 bool.&&"]
	b20_32["abs__26 lift_u32"]
	b20_6["p U32_not_equals"]
	b20_38["mt__38 U32_maybeTrue"]
	b20_39["mf__39 U32_maybeFalse"]
	b20_40["mb__40 bool.&&"]
	b20_0 --> b20_3
	b20_3 --> b20_7
	b20_7 --> b20_33
	b20_33 --> b20_9
	b20_9 --> b20_51
	b20_51 --> b20_52
	b20_52 --> b20_4
	b20_4 --> b20_53
	b20_53 --> b20_32
	b20_32 --> b20_6
	b20_6 --> b20_38
	b20_38 --> b20_39
	b20_39 --> b20_40
end
subgraph block_24["Block 24"]
	direction TB
	b24_12["arg__18 7"]
	b24_22["arg__9 3"]
	b24_14["arg__16 8"]
	b24_24["arg__7 4"]
	b24_46["merge__46 merge_u"]
	b24_37["abs__31 lift_u32"]
	b24_35["abs__29 lift_u32"]
	b24_47["eff_push__47 push_u32"]
	b24_48["merge__48 merge_u"]
	b24_49["eff_push__49 push_u32"]
	b24_67["mv_f__67 |False|  [U32_equals [q]]"]
	b24_12 --> b24_22
	b24_22 --> b24_14
	b24_14 --> b24_24
	b24_24 --> b24_46
	b24_46 --> b24_37
	b24_37 --> b24_35
	b24_35 --> b24_47
	b24_47 --> b24_48
	b24_48 --> b24_49
	b24_49 --> b24_67
end
branch_21 --> block_24
subgraph block_19["Block 19"]
	direction TB
	b19_65["mv_f__65 |False|  [bool.&& [mb__40]]"]
end
phi_26 --> block_19
subgraph phi_26["Phi 26"]
	p26_41{{"innerPhi__41 Sϕ Stack "}}
end
block_27 --> phi_26
block_28 --> phi_26
subgraph block_27["Block 27"]
	direction TB
	b27_68["mv_t__68 |True|  [U32_maybeTrue [mt__38]]"]
end
phi_30 --> block_27
subgraph phi_30["Phi 30"]
	p30_30{{"sea__24 Sϕ Stack "}}
end
block_31 --> phi_30
block_32 --> phi_30
subgraph block_31["Block 31"]
	direction TB
	b31_113["arg__9__103 3"]
	b31_115["arg__5__105 1"]
	b31_114["arg__7__104 4"]
	b31_116["arg__3__106 2"]
	b31_119["merge__55__109 merge_u"]
	b31_118["abs__29__108 lift_u32"]
	b31_117["abs__28__107 lift_u32"]
	b31_120["eff_push__56__110 push_u32"]
	b31_121["merge__57__111 merge_u"]
	b31_122["eff_push__58__112 push_u32"]
	b31_123["mv_t__70__113 |True|  [bool.&& [mb__53]]"]
	b31_113 --> b31_115
	b31_115 --> b31_114
	b31_114 --> b31_116
	b31_116 --> b31_119
	b31_119 --> b31_118
	b31_118 --> b31_117
	b31_117 --> b31_120
	b31_120 --> b31_121
	b31_121 --> b31_122
	b31_122 --> b31_123
end
branch_29 --> block_31
subgraph branch_29["Branch 29"]
	br29_53["mb__53 bool.&&"]

end
branch_25 --> branch_29
subgraph branch_25["Branch 25"]
	br25_38["mt__38 U32_maybeTrue"]

end
branch_16 --> branch_25
subgraph block_32["Block 32"]
	direction TB
	b32_135["mv_f__71__125 |False|  [bool.&& [mb__53]]"]
end
phi_38 --> block_32
subgraph phi_38["Phi 38"]
	p38_134{{"innerPhi__54__124 Sϕ Stack "}}
end
block_39 --> phi_38
block_40 --> phi_38
subgraph block_39["Block 39"]
	direction TB
	b39_128["arg__5__118 1"]
	b39_130["arg__3__120 2"]
	b39_129["eff__4__119 push_u32"]
	b39_132["abs__28__122 lift_u32"]
	b39_131["eff__2__121 push_u32"]
	b39_136["mv_t__74__126 |True|  [U32_maybeTrue [mt__51]]"]
	b39_128 --> b39_130
	b39_130 --> b39_129
	b39_129 --> b39_132
	b39_132 --> b39_131
	b39_131 --> b39_136
end
branch_37 --> block_39
subgraph branch_37["Branch 37"]
	br37_51["mt__51 U32_maybeTrue"]

end
branch_29 --> branch_37
subgraph block_40["Block 40"]
	direction TB
	b40_124["arg__9__114 3"]
	b40_126["arg__7__116 4"]
	b40_125["eff__8__115 push_u32"]
	b40_133["abs__29__123 lift_u32"]
	b40_127["eff__6__117 push_u32"]
	b40_137["mv_f__75__127 |False|  [U32_maybeTrue [mt__51]]"]
	b40_124 --> b40_126
	b40_126 --> b40_125
	b40_125 --> b40_133
	b40_133 --> b40_127
	b40_127 --> b40_137
end
branch_37 --> block_40
subgraph block_28["Block 28"]
	direction TB
	b28_69["mv_f__69 |False|  [U32_maybeTrue [mt__38]]"]
end
phi_34 --> block_28
subgraph phi_34["Phi 34"]
	p34_20{{"sea__23 Sϕ Stack "}}
end
block_35 --> phi_34
block_36 --> phi_34
subgraph block_35["Block 35"]
	direction TB
	b35_88["arg__18__78 7"]
	b35_90["arg__14__80 5"]
	b35_89["arg__16__79 8"]
	b35_91["arg__12__81 6"]
	b35_94["merge__60__84 merge_u"]
	b35_93["abs__31__83 lift_u32"]
	b35_92["abs__30__82 lift_u32"]
	b35_95["eff_push__61__85 push_u32"]
	b35_96["merge__62__86 merge_u"]
	b35_97["eff_push__63__87 push_u32"]
	b35_98["mv_t__72__88 |True|  [bool.&& [mb__53]]"]
	b35_88 --> b35_90
	b35_90 --> b35_89
	b35_89 --> b35_91
	b35_91 --> b35_94
	b35_94 --> b35_93
	b35_93 --> b35_92
	b35_92 --> b35_95
	b35_95 --> b35_96
	b35_96 --> b35_97
	b35_97 --> b35_98
end
branch_33 --> block_35
subgraph branch_33["Branch 33"]
	br33_53["mb__53 bool.&&"]

end
branch_25 --> branch_33
subgraph block_36["Block 36"]
	direction TB
	b36_110["mv_f__73__100 |False|  [bool.&& [mb__53]]"]
end
phi_42 --> block_36
subgraph phi_42["Phi 42"]
	p42_109{{"innerPhi__59__99 Sϕ Stack "}}
end
block_43 --> phi_42
block_44 --> phi_42
subgraph block_43["Block 43"]
	direction TB
	b43_103["arg__14__93 5"]
	b43_105["arg__12__95 6"]
	b43_104["eff__13__94 push_u32"]
	b43_107["abs__30__97 lift_u32"]
	b43_106["eff__11__96 push_u32"]
	b43_111["mv_t__76__101 |True|  [U32_maybeTrue [mt__51]]"]
	b43_103 --> b43_105
	b43_105 --> b43_104
	b43_104 --> b43_107
	b43_107 --> b43_106
	b43_106 --> b43_111
end
branch_41 --> block_43
subgraph branch_41["Branch 41"]
	br41_51["mt__51 U32_maybeTrue"]

end
branch_33 --> branch_41
subgraph block_44["Block 44"]
	direction TB
	b44_99["arg__18__89 7"]
	b44_101["arg__16__91 8"]
	b44_100["eff__17__90 push_u32"]
	b44_108["abs__31__98 lift_u32"]
	b44_102["eff__15__92 push_u32"]
	b44_112["mv_f__77__102 |False|  [U32_maybeTrue [mt__51]]"]
	b44_99 --> b44_101
	b44_101 --> b44_100
	b44_100 --> b44_108
	b44_108 --> b44_102
	b44_102 --> b44_112
end
branch_41 --> block_44

</pre>`;
window.traces["SPLIT_BRANCHES"]["unlem_scheduler_ssa"] = ''
window.traces["SPLIT_BRANCHES"]["unlem_scheduler_ssa"] += `<pre class=''>def c1 = pop_u32();
def arg__20 : u32 = 2;
def abs__27 = lift_u32(arg__20);
def q = U32_equals(c1, abs__27);
def mt__51 = U32_maybeTrue(q);
def mf__52 = U32_maybeFalse(q);
def arg__22 : u32 = 0;
def mb__53 = bool.&&(mt__51, mf__52);
def abs__26 = lift_u32(arg__22);
def p = U32_not_equals(c1, abs__26);
def mt__38 = U32_maybeTrue(p);
def mf__39 = U32_maybeFalse(p);
def mb__40 = bool.&&(mt__38, mf__39);
if (mb__40) {
	if (q) {
		def arg__14 : u32 = 5;
		def arg__5 : u32 = 1;
		def arg__12 : u32 = 6;
		def arg__3 : u32 = 2;
		def merge__42 = merge_u(arg__5, arg__14);
		def abs__30 = lift_u32(arg__12);
		def abs__28 = lift_u32(arg__3);
		def eff_push__43 = push_u32(merge__42);
		def merge__44 = merge_u(abs__28, abs__30);
		def eff_push__45 = push_u32(merge__44);
	} else {
		def arg__18 : u32 = 7;
		def arg__9 : u32 = 3;
		def arg__16 : u32 = 8;
		def arg__7 : u32 = 4;
		def merge__46 = merge_u(arg__9, arg__18);
		def abs__31 = lift_u32(arg__16);
		def abs__29 = lift_u32(arg__7);
		def eff_push__47 = push_u32(merge__46);
		def merge__48 = merge_u(abs__29, abs__31);
		def eff_push__49 = push_u32(merge__48);
	}
// phis: 
} else {
	if (mt__38) {
		if (mb__53) {
			def arg__9__103 : u32 = 3;
			def arg__5__105 : u32 = 1;
			def arg__7__104 : u32 = 4;
			def arg__3__106 : u32 = 2;
			def merge__55__109 = merge_u(arg__5__105, arg__9__103);
			def abs__29__108 = lift_u32(arg__7__104);
			def abs__28__107 = lift_u32(arg__3__106);
			def eff_push__56__110 = push_u32(merge__55__109);
			def merge__57__111 = merge_u(abs__28__107, abs__29__108);
			def eff_push__58__112 = push_u32(merge__57__111);
		} else {
			if (mt__51) {
				def arg__5__118 : u32 = 1;
				def arg__5 = (arg__5__118);
				def arg__3__120 : u32 = 2;
				def arg__3 = (arg__3__120);
				def eff__4__119 = push_u32(arg__5__118);
				def eff__4 = (eff__4__119);
				def abs__28__122 = lift_u32(arg__3__120);
				def abs__28 = (abs__28__122);
				def eff__2__121 = push_u32(abs__28__122);
				def eff__2 = (eff__2__121);
			} else {
				def arg__9__114 : u32 = 3;
				def arg__9 = (arg__9__114);
				def arg__7__116 : u32 = 4;
				def arg__7 = (arg__7__116);
				def eff__8__115 = push_u32(arg__9__114);
				def eff__8 = (eff__8__115);
				def abs__29__123 = lift_u32(arg__7__116);
				def abs__29 = (abs__29__123);
				def eff__6__117 = push_u32(abs__29__123);
				def eff__6 = (eff__6__117);
			}
// phis: 
		}
// phis: 
	} else {
		if (mb__53) {
			def arg__18__78 : u32 = 7;
			def arg__14__80 : u32 = 5;
			def arg__16__79 : u32 = 8;
			def arg__12__81 : u32 = 6;
			def merge__60__84 = merge_u(arg__14__80, arg__18__78);
			def abs__31__83 = lift_u32(arg__16__79);
			def abs__30__82 = lift_u32(arg__12__81);
			def eff_push__61__85 = push_u32(merge__60__84);
			def merge__62__86 = merge_u(abs__30__82, abs__31__83);
			def eff_push__63__87 = push_u32(merge__62__86);
		} else {
			if (mt__51) {
				def arg__14__93 : u32 = 5;
				def arg__14 = (arg__14__93);
				def arg__12__95 : u32 = 6;
				def arg__12 = (arg__12__95);
				def eff__13__94 = push_u32(arg__14__93);
				def eff__13 = (eff__13__94);
				def abs__30__97 = lift_u32(arg__12__95);
				def abs__30 = (abs__30__97);
				def eff__11__96 = push_u32(abs__30__97);
				def eff__11 = (eff__11__96);
			} else {
				def arg__18__89 : u32 = 7;
				def arg__18 = (arg__18__89);
				def arg__16__91 : u32 = 8;
				def arg__16 = (arg__16__91);
				def eff__17__90 = push_u32(arg__18__89);
				def eff__17 = (eff__17__90);
				def abs__31__98 = lift_u32(arg__16__91);
				def abs__31 = (abs__31__98);
				def eff__15__92 = push_u32(abs__31__98);
				def eff__15 = (eff__15__92);
			}
// phis: 
		}
// phis: 
	}
// phis: 
}
// phis: 
</pre>`;
window.traces["SPLIT_BRANCHES"]["unlem_scheduler_ssa_pretty"] = ''
window.traces["SPLIT_BRANCHES"]["unlem_scheduler_ssa_pretty"] += `<pre class=''>def c1 = pop_u32();
def mt = U32_maybeTrue(U32_equals(c1, lift_u32(2)));
def mf = U32_maybeFalse(U32_equals(c1, lift_u32(2)));
def p = U32_not_equals(c1, lift_u32(0));
def mt1 = U32_maybeTrue(p);
def mf1 = U32_maybeFalse(p);
if (bool.&&(mt1, mf1)) {
	if (U32_equals(c1, lift_u32(2))) {
		push_u32(merge_u(1, 5));
		push_u32(merge_u(lift_u32(2), lift_u32(6)));
	} else {
		push_u32(merge_u(3, 7));
		push_u32(merge_u(lift_u32(4), lift_u32(8)));
	}
} else {
	if (mt1) {
		if (bool.&&(mt, mf)) {
			push_u32(merge_u(1, 3));
			push_u32(merge_u(lift_u32(2), lift_u32(4)));
		} else {
			if (mt) {
				push_u32(1);
				push_u32(lift_u32(2));
			} else {
				push_u32(3);
				push_u32(lift_u32(4));
			}
		}
	} else {
		if (bool.&&(mt, mf)) {
			push_u32(merge_u(5, 7));
			push_u32(merge_u(lift_u32(6), lift_u32(8)));
		} else {
			if (mt) {
				push_u32(5);
				push_u32(lift_u32(6));
			} else {
				push_u32(7);
				push_u32(lift_u32(8));
			}
		}
	}
}
</pre>`;
window.traces["SPLIT_BRANCHES_PHI"] = {}
window.traces["SPLIT_BRANCHES_PHI"]["parsed"] = ''
window.traces["SPLIT_BRANCHES_PHI"]["parsed"] += `<pre class=''>def c1 = pop_u32();
def r3 : u32 = 0;
def r4 : u32 = 1;
def arg__146 : u32 = 0;
def arg__145 = (c1);
def p = u32.!=(arg__145, arg__146);
def arg__144 : u32 = 2;
def arg__143 = (c1);
def q = u32.==(arg__143, arg__144);
def cond__132 = (p);
if (cond__132) {
	def cond__133 = (q);
	if (cond__133) {
		def r3__135 : u32 = 1;
		def r4__134 : u32 = 2;
	} else {
		def r3__137 : u32 = 3;
		def r4__136 : u32 = 4;
	}
// phis: r4 <- r4__134; r4 <- r4__136; r3 <- r3__135; r3 <- r3__137; 
} else {
	def cond__138 = (q);
	if (cond__138) {
		def r3__140 : u32 = 5;
		def r4__139 : u32 = 6;
	} else {
		def r3__142 : u32 = 6;
		def r4__141 : u32 = 7;
	}
// phis: r4 <- r4__139; r4 <- r4__141; r3 <- r3__140; r3 <- r3__142; 
}
// phis: r4 <- r4; r4 <- r4; r3 <- r3; r3 <- r3; 
def arg__131 = (r3);
def eff__130 = push_u32(arg__131);
def arg__129 = (r4);
def eff__128 = push_u32(arg__129);
</pre>`;
window.traces["SPLIT_BRANCHES_PHI"]["raw"] = ''
window.traces["SPLIT_BRANCHES_PHI"]["raw"] += `<pre class='graph'>---
config:
  layout: elk
---
graph TD
	1[\\"Finish"/]
	0 -. Codeptr Trap Locals Globals Tables Memory Extra .-> 1
	32 -. Stack .-> 1
	32["eff__128 push_u32"]
	27 --> 32
	30 -. Stack .-> 32
	30["eff__130 push_u32"]
	28 --> 30
	3 -. Stack .-> 30
	3["c1 pop_u32"]
	0 -. Stack .-> 3
	0[/"Start"\\]
	28{"r3 ϕ"}
	8 --> 28
	26 --> 28
	19 --> 28
	19{"r3 ϕ"}
	11 --> 19
	16 --> 19
	14 --> 19
	14["r3__142 6"]
	16["r3__140 5"]
	11["q u32.=="]
	3 --> 11
	9 --> 11
	9["arg__144 2"]
	26{"r3 ϕ"}
	11 --> 26
	23 --> 26
	21 --> 26
	21["r3__137 3"]
	23["r3__135 1"]
	8["p u32.!="]
	3 --> 8
	6 --> 8
	6["arg__146 0"]
	27{"r4 ϕ"}
	8 --> 27
	25 --> 27
	18 --> 27
	18{"r4 ϕ"}
	11 --> 18
	17 --> 18
	15 --> 18
	15["r4__141 7"]
	17["r4__139 6"]
	25{"r4 ϕ"}
	11 --> 25
	24 --> 25
	22 --> 25
	22["r4__136 4"]
	24["r4__134 2"]
</pre>`;
window.traces["SPLIT_BRANCHES_PHI"]["overloadOps"] = ''
window.traces["SPLIT_BRANCHES_PHI"]["overloadOps"] += `<pre class='graph'>---
config:
  layout: elk
---
graph TD
	1[\\"Finish"/]
	0 -. Codeptr Trap Locals Globals Tables Memory Extra .-> 1
	32 -. Stack .-> 1
	32["eff__128 push_u32"]
	27 --> 32
	30 -. Stack .-> 32
	30["eff__130 push_u32"]
	28 --> 30
	3 -. Stack .-> 30
	3["c1 pop_u32"]
	0 -. Stack .-> 3
	0[/"Start"\\]
	28{"r3 ϕ"}
	8 --> 28
	26 --> 28
	19 --> 28
	19{"r3 ϕ"}
	11 --> 19
	16 --> 19
	14 --> 19
	14["r3__142 6"]
	16["r3__140 5"]
	11["q U32_equals"]
	3 --> 11
	9 --> 11
	9["arg__144 2"]
	26{"r3 ϕ"}
	11 --> 26
	23 --> 26
	21 --> 26
	21["r3__137 3"]
	23["r3__135 1"]
	8["p U32_not_equals"]
	3 --> 8
	6 --> 8
	6["arg__146 0"]
	27{"r4 ϕ"}
	8 --> 27
	25 --> 27
	18 --> 27
	18{"r4 ϕ"}
	11 --> 18
	17 --> 18
	15 --> 18
	15["r4__141 7"]
	17["r4__139 6"]
	25{"r4 ϕ"}
	11 --> 25
	24 --> 25
	22 --> 25
	22["r4__136 4"]
	24["r4__134 2"]
</pre>`;
window.traces["SPLIT_BRANCHES_PHI"]["addAbstractions"] = ''
window.traces["SPLIT_BRANCHES_PHI"]["addAbstractions"] += `<pre class='graph'>---
config:
  layout: elk
---
graph TD
	1[\\"Finish"/]
	0 -. Codeptr Trap Locals Globals Tables Memory Extra .-> 1
	32 -. Stack .-> 1
	32["eff__128 push_u32"]
	27 --> 32
	30 -. Stack .-> 32
	30["eff__130 push_u32"]
	28 --> 30
	3 -. Stack .-> 30
	3["c1 pop_u32"]
	0 -. Stack .-> 3
	0[/"Start"\\]
	28{"r3 ϕ"}
	8 --> 28
	26 --> 28
	19 --> 28
	19{"r3 ϕ"}
	11 --> 19
	16 --> 19
	14 --> 19
	14["r3__142 6"]
	16["r3__140 5"]
	11["q U32_equals"]
	3 --> 11
	34 --> 11
	34["abs__148 lift_u32"]
	9 --> 34
	9["arg__144 2"]
	26{"r3 ϕ"}
	11 --> 26
	23 --> 26
	21 --> 26
	21["r3__137 3"]
	23["r3__135 1"]
	8["p U32_not_equals"]
	3 --> 8
	33 --> 8
	33["abs__147 lift_u32"]
	6 --> 33
	6["arg__146 0"]
	27{"r4 ϕ"}
	8 --> 27
	25 --> 27
	18 --> 27
	18{"r4 ϕ"}
	11 --> 18
	17 --> 18
	15 --> 18
	15["r4__141 7"]
	17["r4__139 6"]
	25{"r4 ϕ"}
	11 --> 25
	24 --> 25
	22 --> 25
	22["r4__136 4"]
	24["r4__134 2"]
</pre>`;
window.traces["SPLIT_BRANCHES_PHI"]["scheduler_start"] = ''
window.traces["SPLIT_BRANCHES_PHI"]["scheduler_start"] += `<pre class='graph'>---
config:
  layout: elk
---
graph TD
	1[\\"Finish"/]
	0 -. Codeptr Trap Locals Globals Tables Memory Extra .-> 1
	32 -. Stack .-> 1
	32["eff__128 push_u32"]
	27 --> 32
	30 -. Stack .-> 32
	30["eff__130 push_u32"]
	28 --> 30
	3 -. Stack .-> 30
	3["c1 pop_u32"]
	0 -. Stack .-> 3
	0[/"Start"\\]
	28{"r3 ϕ"}
	8 --> 28
	41 --> 28
	42 --> 28
	42["mv_f__156 |False|  [U32_not_equals [p]]"]
	8 --> 42
	19 --> 42
	19{"r3 ϕ"}
	11 --> 19
	45 --> 19
	46 --> 19
	46["mv_f__160 |False|  [U32_equals [q]]"]
	11 --> 46
	14 --> 46
	14["r3__142 6"]
	11["q U32_equals"]
	3 --> 11
	34 --> 11
	34["abs__148 lift_u32"]
	9 --> 34
	9["arg__144 2"]
	45["mv_t__159 |True|  [U32_equals [q]]"]
	11 --> 45
	16 --> 45
	16["r3__140 5"]
	8["p U32_not_equals"]
	3 --> 8
	33 --> 8
	33["abs__147 lift_u32"]
	6 --> 33
	6["arg__146 0"]
	41["mv_t__155 |True|  [U32_not_equals [p]]"]
	8 --> 41
	26 --> 41
	26{"r3 ϕ"}
	11 --> 26
	43 --> 26
	44 --> 26
	44["mv_f__158 |False|  [U32_equals [q]]"]
	11 --> 44
	21 --> 44
	21["r3__137 3"]
	43["mv_t__157 |True|  [U32_equals [q]]"]
	11 --> 43
	23 --> 43
	23["r3__135 1"]
	27{"r4 ϕ"}
	8 --> 27
	35 --> 27
	36 --> 27
	36["mv_f__150 |False|  [U32_not_equals [p]]"]
	8 --> 36
	18 --> 36
	18{"r4 ϕ"}
	11 --> 18
	39 --> 18
	40 --> 18
	40["mv_f__154 |False|  [U32_equals [q]]"]
	11 --> 40
	15 --> 40
	15["r4__141 7"]
	39["mv_t__153 |True|  [U32_equals [q]]"]
	11 --> 39
	17 --> 39
	17["r4__139 6"]
	35["mv_t__149 |True|  [U32_not_equals [p]]"]
	8 --> 35
	25 --> 35
	25{"r4 ϕ"}
	11 --> 25
	37 --> 25
	38 --> 25
	38["mv_f__152 |False|  [U32_equals [q]]"]
	11 --> 38
	22 --> 38
	22["r4__136 4"]
	37["mv_t__151 |True|  [U32_equals [q]]"]
	11 --> 37
	24 --> 37
	24["r4__134 2"]
</pre>`;
window.traces["SPLIT_BRANCHES_PHI"]["untangled"] = ''
window.traces["SPLIT_BRANCHES_PHI"]["untangled"] += `<pre class='graph'>---
config:
  layout: elk
---
graph TD
	1[\\"Finish"/]
	0 -. Codeptr Trap Locals Globals Tables Memory Extra .-> 1
	32 -. Stack .-> 1
	32["eff__128 push_u32"]
	27 --> 32
	30 -. Stack .-> 32
	30["eff__130 push_u32"]
	28 --> 30
	3 -. Stack .-> 30
	3["c1 pop_u32"]
	0 -. Stack .-> 3
	0[/"Start"\\]
	28{"r3 ϕ"}
	8 --> 28
	41 --> 28
	42 --> 28
	42["mv_f__156 |False|  [U32_not_equals [p]]"]
	8 --> 42
	19 --> 42
	19{"r3 ϕ"}
	11 --> 19
	45 --> 19
	46 --> 19
	46["mv_f__160 |False|  [U32_equals [q]]"]
	11 --> 46
	14 --> 46
	14["r3__142 6"]
	11["q U32_equals"]
	3 --> 11
	34 --> 11
	34["abs__148 lift_u32"]
	9 --> 34
	9["arg__144 2"]
	45["mv_t__159 |True|  [U32_equals [q]]"]
	11 --> 45
	16 --> 45
	16["r3__140 5"]
	8["p U32_not_equals"]
	3 --> 8
	33 --> 8
	33["abs__147 lift_u32"]
	6 --> 33
	6["arg__146 0"]
	41["mv_t__155 |True|  [U32_not_equals [p]]"]
	8 --> 41
	26 --> 41
	26{"r3 ϕ"}
	11 --> 26
	43 --> 26
	44 --> 26
	44["mv_f__158 |False|  [U32_equals [q]]"]
	11 --> 44
	21 --> 44
	21["r3__137 3"]
	43["mv_t__157 |True|  [U32_equals [q]]"]
	11 --> 43
	23 --> 43
	23["r3__135 1"]
	27{"r4 ϕ"}
	8 --> 27
	35 --> 27
	36 --> 27
	36["mv_f__150 |False|  [U32_not_equals [p]]"]
	8 --> 36
	18 --> 36
	18{"r4 ϕ"}
	11 --> 18
	39 --> 18
	40 --> 18
	40["mv_f__154 |False|  [U32_equals [q]]"]
	11 --> 40
	15 --> 40
	15["r4__141 7"]
	39["mv_t__153 |True|  [U32_equals [q]]"]
	11 --> 39
	17 --> 39
	17["r4__139 6"]
	35["mv_t__149 |True|  [U32_not_equals [p]]"]
	8 --> 35
	25 --> 35
	25{"r4 ϕ"}
	11 --> 25
	37 --> 25
	38 --> 25
	38["mv_f__152 |False|  [U32_equals [q]]"]
	11 --> 38
	22 --> 38
	22["r4__136 4"]
	37["mv_t__151 |True|  [U32_equals [q]]"]
	11 --> 37
	24 --> 37
	24["r4__134 2"]
</pre>`;
window.traces["SPLIT_BRANCHES_PHI"]["schedulerMermaid"] = ''
window.traces["SPLIT_BRANCHES_PHI"]["schedulerMermaid"] += `<pre class='graph'>graph TD
subgraph block_45["Block 45"]
	direction TB
	b45_30["eff__130 push_u32"]
	b45_32["eff__128 push_u32"]
	b45_1[\\"Finish"/]
	b45_30 --> b45_32
	b45_32 --> b45_1
end
phi_47 --> block_45
subgraph phi_47["Phi 47"]
	p47_28{"r3 ϕ"}
	p47_27{"r4 ϕ"}
end
block_48 --> phi_47
block_49 --> phi_47
subgraph block_48["Block 48"]
	direction TB
	b48_41["mv_t__155 |True|  [U32_not_equals [p]]"]
	b48_35["mv_t__149 |True|  [U32_not_equals [p]]"]
	b48_41 --> b48_35
end
phi_52 --> block_48
subgraph phi_52["Phi 52"]
	p52_26{"r3 ϕ"}
	p52_25{"r4 ϕ"}
end
block_53 --> phi_52
block_54 --> phi_52
subgraph block_53["Block 53"]
	direction TB
	b53_23["r3__135 1"]
	b53_24["r4__134 2"]
	b53_43["mv_t__157 |True|  [U32_equals [q]]"]
	b53_37["mv_t__151 |True|  [U32_equals [q]]"]
	b53_23 --> b53_24
	b53_24 --> b53_43
	b53_43 --> b53_37
end
branch_51 --> block_53
subgraph branch_51["Branch 51"]
	br51_11["q U32_equals"]

end
branch_46 --> branch_51
subgraph branch_46["Branch 46"]
	br46_8["p U32_not_equals"]

end
block_50 --> branch_46
subgraph block_50["Block 50"]
	direction TB
	b50_9["arg__144 2"]
	b50_0[/"Start"\\]
	b50_34["abs__148 lift_u32"]
	b50_3["c1 pop_u32"]
	b50_11["q U32_equals"]
	b50_6["arg__146 0"]
	b50_33["abs__147 lift_u32"]
	b50_8["p U32_not_equals"]
	b50_9 --> b50_0
	b50_0 --> b50_34
	b50_34 --> b50_3
	b50_3 --> b50_11
	b50_11 --> b50_6
	b50_6 --> b50_33
	b50_33 --> b50_8
end
subgraph block_54["Block 54"]
	direction TB
	b54_21["r3__137 3"]
	b54_22["r4__136 4"]
	b54_44["mv_f__158 |False|  [U32_equals [q]]"]
	b54_38["mv_f__152 |False|  [U32_equals [q]]"]
	b54_21 --> b54_22
	b54_22 --> b54_44
	b54_44 --> b54_38
end
branch_51 --> block_54
subgraph block_49["Block 49"]
	direction TB
	b49_42["mv_f__156 |False|  [U32_not_equals [p]]"]
	b49_36["mv_f__150 |False|  [U32_not_equals [p]]"]
	b49_42 --> b49_36
end
phi_56 --> block_49
subgraph phi_56["Phi 56"]
	p56_19{"r3 ϕ"}
	p56_18{"r4 ϕ"}
end
block_57 --> phi_56
block_58 --> phi_56
subgraph block_57["Block 57"]
	direction TB
	b57_16["r3__140 5"]
	b57_17["r4__139 6"]
	b57_45["mv_t__159 |True|  [U32_equals [q]]"]
	b57_39["mv_t__153 |True|  [U32_equals [q]]"]
	b57_16 --> b57_17
	b57_17 --> b57_45
	b57_45 --> b57_39
end
branch_55 --> block_57
subgraph branch_55["Branch 55"]
	br55_11["q U32_equals"]

end
branch_46 --> branch_55
subgraph block_58["Block 58"]
	direction TB
	b58_14["r3__142 6"]
	b58_15["r4__141 7"]
	b58_46["mv_f__160 |False|  [U32_equals [q]]"]
	b58_40["mv_f__154 |False|  [U32_equals [q]]"]
	b58_14 --> b58_15
	b58_15 --> b58_46
	b58_46 --> b58_40
end
branch_55 --> block_58

</pre>`;
window.traces["SPLIT_BRANCHES_PHI"]["scheduler_ssad"] = ''
window.traces["SPLIT_BRANCHES_PHI"]["scheduler_ssad"] += `<pre class=''>def arg__144 : u32 = 2;
def abs__148 = lift_u32(arg__144);
def c1 = pop_u32();
def q = U32_equals(c1, abs__148);
def arg__146 : u32 = 0;
def abs__147 = lift_u32(arg__146);
def p = U32_not_equals(c1, abs__147);
if (p) {
	if (q) {
		def r3__135 : u32 = 1;
		def r4__134 : u32 = 2;
	} else {
		def r3__137 : u32 = 3;
		def r4__136 : u32 = 4;
	}
// phis: r3 <- r3__135; r3 <- r3__137; r4 <- r4__134; r4 <- r4__136; 
} else {
	if (q) {
		def r3__140 : u32 = 5;
		def r4__139 : u32 = 6;
	} else {
		def r3__142 : u32 = 6;
		def r4__141 : u32 = 7;
	}
// phis: r3 <- r3__140; r3 <- r3__142; r4 <- r4__139; r4 <- r4__141; 
}
// phis: r3 <- r3; r3 <- r3; r4 <- r4; r4 <- r4; 
def eff__130 = push_u32(r3);
def eff__128 = push_u32(r4);
</pre>`;
window.traces["SPLIT_BRANCHES_PHI"]["scheduler_ssad_pretty"] = ''
window.traces["SPLIT_BRANCHES_PHI"]["scheduler_ssad_pretty"] += `<pre class=''>def c1 = pop_u32();
def p = U32_not_equals(c1, lift_u32(0));
var r3: u32;
var r4: u32;
if (p) {
	if (U32_equals(c1, lift_u32(2))) {
		r3 = 1;
		r4 = 2;
	} else {
		r3 = 3;
		r4 = 4;
	}
} else {
	if (U32_equals(c1, lift_u32(2))) {
		r3 = 5;
		r4 = 6;
	} else {
		r3 = 6;
		r4 = 7;
	}
}
push_u32(r3);
push_u32(r4);
</pre>`;
window.traces["SPLIT_BRANCHES_PHI"]["unLEM"] = ''
window.traces["SPLIT_BRANCHES_PHI"]["unLEM"] += `<pre class='graph'>---
config:
  layout: elk
---
graph TD
	1[\\"Finish"/]
	0 -. Codeptr Trap Locals Globals Tables Memory Extra .-> 1
	32 -. Stack .-> 1
	32["eff__128 push_u32"]
	27 --> 32
	30 -. Stack .-> 32
	30["eff__130 push_u32"]
	28 --> 30
	3 -. Stack .-> 30
	3["c1 pop_u32"]
	0 -. Stack .-> 3
	0[/"Start"\\]
	28{"r3 ϕ"}
	37 --> 28
	48 --> 28
	47 --> 28
	47{"innerPhi__173 ϕ"}
	35 --> 47
	26 --> 47
	19 --> 47
	19{"r3 ϕ"}
	42 --> 19
	52 --> 19
	51 --> 19
	51{"innerPhi__177 ϕ"}
	40 --> 51
	16 --> 51
	14 --> 51
	14["r3__142 6"]
	16["r3__140 5"]
	40["mt__166 U32_maybeTrue"]
	11 --> 40
	11["q U32_equals"]
	3 --> 11
	34 --> 11
	34["abs__148 lift_u32"]
	9 --> 34
	9["arg__144 2"]
	52["merge__178 merge"]
	16 --> 52
	14 --> 52
	42["mb__168 bool.&&"]
	40 --> 42
	41 --> 42
	41["mf__167 U32_maybeFalse"]
	11 --> 41
	26{"r3 ϕ"}
	42 --> 26
	50 --> 26
	49 --> 26
	49{"innerPhi__175 ϕ"}
	40 --> 49
	23 --> 49
	21 --> 49
	21["r3__137 3"]
	23["r3__135 1"]
	50["merge__176 merge"]
	23 --> 50
	21 --> 50
	35["mt__161 U32_maybeTrue"]
	8 --> 35
	8["p U32_not_equals"]
	3 --> 8
	33 --> 8
	33["abs__147 lift_u32"]
	6 --> 33
	6["arg__146 0"]
	48["merge__174 merge"]
	26 --> 48
	19 --> 48
	37["mb__163 bool.&&"]
	35 --> 37
	36 --> 37
	36["mf__162 U32_maybeFalse"]
	8 --> 36
	27{"r4 ϕ"}
	37 --> 27
	39 --> 27
	38 --> 27
	38{"innerPhi__164 ϕ"}
	35 --> 38
	25 --> 38
	18 --> 38
	18{"r4 ϕ"}
	42 --> 18
	46 --> 18
	45 --> 18
	45{"innerPhi__171 ϕ"}
	40 --> 45
	17 --> 45
	15 --> 45
	15["r4__141 7"]
	17["r4__139 6"]
	46["merge__172 merge"]
	17 --> 46
	15 --> 46
	25{"r4 ϕ"}
	42 --> 25
	44 --> 25
	43 --> 25
	43{"innerPhi__169 ϕ"}
	40 --> 43
	24 --> 43
	22 --> 43
	22["r4__136 4"]
	24["r4__134 2"]
	44["merge__170 merge"]
	24 --> 44
	22 --> 44
	39["merge__165 merge"]
	25 --> 39
	18 --> 39
</pre>`;
window.traces["SPLIT_BRANCHES_PHI_ul"] = {}
window.traces["SPLIT_BRANCHES_PHI_ul"]["scheduler_start"] = ''
window.traces["SPLIT_BRANCHES_PHI_ul"]["scheduler_start"] += `<pre class='graph'>---
config:
  layout: elk
---
graph TD
	1[\\"Finish"/]
	0 -. Codeptr Trap Locals Globals Tables Memory Extra .-> 1
	32 -. Stack .-> 1
	32["eff__128 push_u32"]
	27 --> 32
	30 -. Stack .-> 32
	30["eff__130 push_u32"]
	28 --> 30
	3 -. Stack .-> 30
	3["c1 pop_u32"]
	0 -. Stack .-> 3
	0[/"Start"\\]
	28{"r3 ϕ"}
	37 --> 28
	57 --> 28
	58 --> 28
	58["mv_f__184 |False|  [bool.&& [mb__163]]"]
	37 --> 58
	47 --> 58
	47{"innerPhi__173 ϕ"}
	35 --> 47
	63 --> 47
	64 --> 47
	64["mv_f__190 |False|  [U32_maybeTrue [mt__161]]"]
	35 --> 64
	19 --> 64
	19{"r3 ϕ"}
	42 --> 19
	71 --> 19
	72 --> 19
	72["mv_f__198 |False|  [bool.&& [mb__168]]"]
	42 --> 72
	51 --> 72
	51{"innerPhi__177 ϕ"}
	40 --> 51
	75 --> 51
	76 --> 51
	76["mv_f__202 |False|  [U32_maybeTrue [mt__166]]"]
	40 --> 76
	14 --> 76
	14["r3__142 6"]
	40["mt__166 U32_maybeTrue"]
	11 --> 40
	11["q U32_equals"]
	3 --> 11
	34 --> 11
	34["abs__148 lift_u32"]
	9 --> 34
	9["arg__144 2"]
	75["mv_t__201 |True|  [U32_maybeTrue [mt__166]]"]
	40 --> 75
	16 --> 75
	16["r3__140 5"]
	42["mb__168 bool.&&"]
	40 --> 42
	41 --> 42
	41["mf__167 U32_maybeFalse"]
	11 --> 41
	71["mv_t__197 |True|  [bool.&& [mb__168]]"]
	42 --> 71
	52 --> 71
	52["merge__178 merge"]
	16 --> 52
	14 --> 52
	35["mt__161 U32_maybeTrue"]
	8 --> 35
	8["p U32_not_equals"]
	3 --> 8
	33 --> 8
	33["abs__147 lift_u32"]
	6 --> 33
	6["arg__146 0"]
	63["mv_t__189 |True|  [U32_maybeTrue [mt__161]]"]
	35 --> 63
	26 --> 63
	26{"r3 ϕ"}
	42 --> 26
	69 --> 26
	70 --> 26
	70["mv_f__196 |False|  [bool.&& [mb__168]]"]
	42 --> 70
	49 --> 70
	49{"innerPhi__175 ϕ"}
	40 --> 49
	73 --> 49
	74 --> 49
	74["mv_f__200 |False|  [U32_maybeTrue [mt__166]]"]
	40 --> 74
	21 --> 74
	21["r3__137 3"]
	73["mv_t__199 |True|  [U32_maybeTrue [mt__166]]"]
	40 --> 73
	23 --> 73
	23["r3__135 1"]
	69["mv_t__195 |True|  [bool.&& [mb__168]]"]
	42 --> 69
	50 --> 69
	50["merge__176 merge"]
	23 --> 50
	21 --> 50
	37["mb__163 bool.&&"]
	35 --> 37
	36 --> 37
	36["mf__162 U32_maybeFalse"]
	8 --> 36
	57["mv_t__183 |True|  [bool.&& [mb__163]]"]
	37 --> 57
	48 --> 57
	48["merge__174 merge"]
	26 --> 48
	19 --> 48
	27{"r4 ϕ"}
	37 --> 27
	53 --> 27
	54 --> 27
	54["mv_f__180 |False|  [bool.&& [mb__163]]"]
	37 --> 54
	38 --> 54
	38{"innerPhi__164 ϕ"}
	35 --> 38
	55 --> 38
	56 --> 38
	56["mv_f__182 |False|  [U32_maybeTrue [mt__161]]"]
	35 --> 56
	18 --> 56
	18{"r4 ϕ"}
	42 --> 18
	61 --> 18
	62 --> 18
	62["mv_f__188 |False|  [bool.&& [mb__168]]"]
	42 --> 62
	45 --> 62
	45{"innerPhi__171 ϕ"}
	40 --> 45
	67 --> 45
	68 --> 45
	68["mv_f__194 |False|  [U32_maybeTrue [mt__166]]"]
	40 --> 68
	15 --> 68
	15["r4__141 7"]
	67["mv_t__193 |True|  [U32_maybeTrue [mt__166]]"]
	40 --> 67
	17 --> 67
	17["r4__139 6"]
	61["mv_t__187 |True|  [bool.&& [mb__168]]"]
	42 --> 61
	46 --> 61
	46["merge__172 merge"]
	17 --> 46
	15 --> 46
	55["mv_t__181 |True|  [U32_maybeTrue [mt__161]]"]
	35 --> 55
	25 --> 55
	25{"r4 ϕ"}
	42 --> 25
	59 --> 25
	60 --> 25
	60["mv_f__186 |False|  [bool.&& [mb__168]]"]
	42 --> 60
	43 --> 60
	43{"innerPhi__169 ϕ"}
	40 --> 43
	65 --> 43
	66 --> 43
	66["mv_f__192 |False|  [U32_maybeTrue [mt__166]]"]
	40 --> 66
	22 --> 66
	22["r4__136 4"]
	65["mv_t__191 |True|  [U32_maybeTrue [mt__166]]"]
	40 --> 65
	24 --> 65
	24["r4__134 2"]
	59["mv_t__185 |True|  [bool.&& [mb__168]]"]
	42 --> 59
	44 --> 59
	44["merge__170 merge"]
	24 --> 44
	22 --> 44
	53["mv_t__179 |True|  [bool.&& [mb__163]]"]
	37 --> 53
	39 --> 53
	39["merge__165 merge"]
	25 --> 39
	18 --> 39
</pre>`;
window.traces["SPLIT_BRANCHES_PHI_ul"]["untangled"] = ''
window.traces["SPLIT_BRANCHES_PHI_ul"]["untangled"] += `<pre class='graph'>---
config:
  layout: elk
---
graph TD
	1[\\"Finish"/]
	0 -. Codeptr Trap Locals Globals Tables Memory Extra .-> 1
	32 -. Stack .-> 1
	32["eff__128 push_u32"]
	27 --> 32
	30 -. Stack .-> 32
	30["eff__130 push_u32"]
	28 --> 30
	3 -. Stack .-> 30
	3["c1 pop_u32"]
	0 -. Stack .-> 3
	0[/"Start"\\]
	28{"r3 ϕ"}
	37 --> 28
	132 --> 28
	182 --> 28
	182["mv_f__184__300 |False|  [bool.&& [mb__163]]"]
	37 --> 182
	178 --> 182
	178{"innerPhi__173__296 ϕ"}
	35 --> 178
	183 --> 178
	184 --> 178
	184["mv_f__190__302 |False|  [U32_maybeTrue [mt__161]]"]
	35 --> 184
	174 --> 184
	174{"r3__292 ϕ"}
	42 --> 174
	192 --> 174
	202 --> 174
	202["mv_f__198__220__320 |False|  [bool.&& [mb__168]]"]
	42 --> 202
	198 --> 202
	198{"innerPhi__177__216__316 ϕ"}
	40 --> 198
	203 --> 198
	204 --> 198
	204["mv_f__202__222__322 |False|  [U32_maybeTrue [mt__166]]"]
	40 --> 204
	193 --> 204
	193["r3__142__211__311 6"]
	40["mt__166 U32_maybeTrue"]
	11 --> 40
	11["q U32_equals"]
	3 --> 11
	34 --> 11
	34["abs__148 lift_u32"]
	9 --> 34
	9["arg__144 2"]
	203["mv_t__201__221__321 |True|  [U32_maybeTrue [mt__166]]"]
	40 --> 203
	195 --> 203
	195["r3__140__213__313 5"]
	42["mb__168 bool.&&"]
	40 --> 42
	41 --> 42
	41["mf__167 U32_maybeFalse"]
	11 --> 41
	192["mv_t__197__210__310 |True|  [bool.&& [mb__168]]"]
	42 --> 192
	190 --> 192
	190["merge__178__208__308 merge"]
	187 --> 190
	185 --> 190
	185["r3__142__203__303 6"]
	187["r3__140__205__305 5"]
	35["mt__161 U32_maybeTrue"]
	8 --> 35
	8["p U32_not_equals"]
	3 --> 8
	33 --> 8
	33["abs__147 lift_u32"]
	6 --> 33
	6["arg__146 0"]
	183["mv_t__189__301 |True|  [U32_maybeTrue [mt__161]]"]
	35 --> 183
	176 --> 183
	176{"r3__294 ϕ"}
	42 --> 176
	212 --> 176
	222 --> 176
	222["mv_f__196__240__340 |False|  [bool.&& [mb__168]]"]
	42 --> 222
	218 --> 222
	218{"innerPhi__175__236__336 ϕ"}
	40 --> 218
	223 --> 218
	224 --> 218
	224["mv_f__200__242__342 |False|  [U32_maybeTrue [mt__166]]"]
	40 --> 224
	213 --> 224
	213["r3__137__231__331 3"]
	223["mv_t__199__241__341 |True|  [U32_maybeTrue [mt__166]]"]
	40 --> 223
	215 --> 223
	215["r3__135__233__333 1"]
	212["mv_t__195__230__330 |True|  [bool.&& [mb__168]]"]
	42 --> 212
	210 --> 212
	210["merge__176__228__328 merge"]
	207 --> 210
	205 --> 210
	205["r3__137__223__323 3"]
	207["r3__135__225__325 1"]
	37["mb__163 bool.&&"]
	35 --> 37
	36 --> 37
	36["mf__162 U32_maybeFalse"]
	8 --> 36
	132["mv_t__183__250 |True|  [bool.&& [mb__163]]"]
	37 --> 132
	130 --> 132
	130["merge__174__248 merge"]
	128 --> 130
	126 --> 130
	126{"r3__244 ϕ"}
	42 --> 126
	140 --> 126
	150 --> 126
	150["mv_f__198__220__268 |False|  [bool.&& [mb__168]]"]
	42 --> 150
	146 --> 150
	146{"innerPhi__177__216__264 ϕ"}
	40 --> 146
	151 --> 146
	152 --> 146
	152["mv_f__202__222__270 |False|  [U32_maybeTrue [mt__166]]"]
	40 --> 152
	141 --> 152
	141["r3__142__211__259 6"]
	151["mv_t__201__221__269 |True|  [U32_maybeTrue [mt__166]]"]
	40 --> 151
	143 --> 151
	143["r3__140__213__261 5"]
	140["mv_t__197__210__258 |True|  [bool.&& [mb__168]]"]
	42 --> 140
	138 --> 140
	138["merge__178__208__256 merge"]
	135 --> 138
	133 --> 138
	133["r3__142__203__251 6"]
	135["r3__140__205__253 5"]
	128{"r3__246 ϕ"}
	42 --> 128
	160 --> 128
	170 --> 128
	170["mv_f__196__240__288 |False|  [bool.&& [mb__168]]"]
	42 --> 170
	166 --> 170
	166{"innerPhi__175__236__284 ϕ"}
	40 --> 166
	171 --> 166
	172 --> 166
	172["mv_f__200__242__290 |False|  [U32_maybeTrue [mt__166]]"]
	40 --> 172
	161 --> 172
	161["r3__137__231__279 3"]
	171["mv_t__199__241__289 |True|  [U32_maybeTrue [mt__166]]"]
	40 --> 171
	163 --> 171
	163["r3__135__233__281 1"]
	160["mv_t__195__230__278 |True|  [bool.&& [mb__168]]"]
	42 --> 160
	158 --> 160
	158["merge__176__228__276 merge"]
	155 --> 158
	153 --> 158
	153["r3__137__223__271 3"]
	155["r3__135__225__273 1"]
	27{"r4 ϕ"}
	37 --> 27
	131 --> 27
	179 --> 27
	179["mv_f__180__297 |False|  [bool.&& [mb__163]]"]
	37 --> 179
	177 --> 179
	177{"innerPhi__164__295 ϕ"}
	35 --> 177
	180 --> 177
	181 --> 177
	181["mv_f__182__299 |False|  [U32_maybeTrue [mt__161]]"]
	35 --> 181
	173 --> 181
	173{"r4__291 ϕ"}
	42 --> 173
	191 --> 173
	199 --> 173
	199["mv_f__188__217__317 |False|  [bool.&& [mb__168]]"]
	42 --> 199
	197 --> 199
	197{"innerPhi__171__215__315 ϕ"}
	40 --> 197
	200 --> 197
	201 --> 197
	201["mv_f__194__219__319 |False|  [U32_maybeTrue [mt__166]]"]
	40 --> 201
	194 --> 201
	194["r4__141__212__312 7"]
	200["mv_t__193__218__318 |True|  [U32_maybeTrue [mt__166]]"]
	40 --> 200
	196 --> 200
	196["r4__139__214__314 6"]
	191["mv_t__187__209__309 |True|  [bool.&& [mb__168]]"]
	42 --> 191
	189 --> 191
	189["merge__172__207__307 merge"]
	188 --> 189
	186 --> 189
	186["r4__141__204__304 7"]
	188["r4__139__206__306 6"]
	180["mv_t__181__298 |True|  [U32_maybeTrue [mt__161]]"]
	35 --> 180
	175 --> 180
	175{"r4__293 ϕ"}
	42 --> 175
	211 --> 175
	219 --> 175
	219["mv_f__186__237__337 |False|  [bool.&& [mb__168]]"]
	42 --> 219
	217 --> 219
	217{"innerPhi__169__235__335 ϕ"}
	40 --> 217
	220 --> 217
	221 --> 217
	221["mv_f__192__239__339 |False|  [U32_maybeTrue [mt__166]]"]
	40 --> 221
	214 --> 221
	214["r4__136__232__332 4"]
	220["mv_t__191__238__338 |True|  [U32_maybeTrue [mt__166]]"]
	40 --> 220
	216 --> 220
	216["r4__134__234__334 2"]
	211["mv_t__185__229__329 |True|  [bool.&& [mb__168]]"]
	42 --> 211
	209 --> 211
	209["merge__170__227__327 merge"]
	208 --> 209
	206 --> 209
	206["r4__136__224__324 4"]
	208["r4__134__226__326 2"]
	131["mv_t__179__249 |True|  [bool.&& [mb__163]]"]
	37 --> 131
	129 --> 131
	129["merge__165__247 merge"]
	127 --> 129
	125 --> 129
	125{"r4__243 ϕ"}
	42 --> 125
	139 --> 125
	147 --> 125
	147["mv_f__188__217__265 |False|  [bool.&& [mb__168]]"]
	42 --> 147
	145 --> 147
	145{"innerPhi__171__215__263 ϕ"}
	40 --> 145
	148 --> 145
	149 --> 145
	149["mv_f__194__219__267 |False|  [U32_maybeTrue [mt__166]]"]
	40 --> 149
	142 --> 149
	142["r4__141__212__260 7"]
	148["mv_t__193__218__266 |True|  [U32_maybeTrue [mt__166]]"]
	40 --> 148
	144 --> 148
	144["r4__139__214__262 6"]
	139["mv_t__187__209__257 |True|  [bool.&& [mb__168]]"]
	42 --> 139
	137 --> 139
	137["merge__172__207__255 merge"]
	136 --> 137
	134 --> 137
	134["r4__141__204__252 7"]
	136["r4__139__206__254 6"]
	127{"r4__245 ϕ"}
	42 --> 127
	159 --> 127
	167 --> 127
	167["mv_f__186__237__285 |False|  [bool.&& [mb__168]]"]
	42 --> 167
	165 --> 167
	165{"innerPhi__169__235__283 ϕ"}
	40 --> 165
	168 --> 165
	169 --> 165
	169["mv_f__192__239__287 |False|  [U32_maybeTrue [mt__166]]"]
	40 --> 169
	162 --> 169
	162["r4__136__232__280 4"]
	168["mv_t__191__238__286 |True|  [U32_maybeTrue [mt__166]]"]
	40 --> 168
	164 --> 168
	164["r4__134__234__282 2"]
	159["mv_t__185__229__277 |True|  [bool.&& [mb__168]]"]
	42 --> 159
	157 --> 159
	157["merge__170__227__275 merge"]
	156 --> 157
	154 --> 157
	154["r4__136__224__272 4"]
	156["r4__134__226__274 2"]
</pre>`;
window.traces["SPLIT_BRANCHES_PHI"]["unlem_schedule"] = ''
window.traces["SPLIT_BRANCHES_PHI"]["unlem_schedule"] += `<pre class=''>def arg__144 : u32 = 2;
def abs__148 = lift_u32(arg__144);
def c1 = pop_u32();
def q = U32_equals(c1, abs__148);
def mt__166 = U32_maybeTrue(q);
def mf__167 = U32_maybeFalse(q);
def arg__146 : u32 = 0;
def mb__168 = bool.&&(mt__166, mf__167);
def abs__147 = lift_u32(arg__146);
def p = U32_not_equals(c1, abs__147);
def mt__161 = U32_maybeTrue(p);
def mf__162 = U32_maybeFalse(p);
def mb__163 = bool.&&(mt__161, mf__162);
if (mb__163) {
	if (mb__168) {
		def r3__137__223__271 : u32 = 3;
		def r3__135__225__273 : u32 = 1;
		def r3__142__203__251 : u32 = 6;
		def r3__140__205__253 : u32 = 5;
		def r4__136__224__272 : u32 = 4;
		def r4__134__226__274 : u32 = 2;
		def r4__141__204__252 : u32 = 7;
		def r4__139__206__254 : u32 = 6;
		def merge__176__228__276 = merge(r3__135__225__273, r3__137__223__271);
		def merge__178__208__256 = merge(r3__140__205__253, r3__142__203__251);
		def merge__170__227__275 = merge(r4__134__226__274, r4__136__224__272);
		def merge__172__207__255 = merge(r4__139__206__254, r4__141__204__252);
	} else {
		if (mt__166) {
			def r3__135__233__281 : u32 = 1;
			def r3__140__213__261 : u32 = 5;
			def r4__134__234__282 : u32 = 2;
			def r4__139__214__262 : u32 = 6;
		} else {
			def r3__137__231__279 : u32 = 3;
			def r3__142__211__259 : u32 = 6;
			def r4__136__232__280 : u32 = 4;
			def r4__141__212__260 : u32 = 7;
		}
// phis: innerPhi__175__236__284 <- r3__135__233__281; innerPhi__175__236__284 <- r3__137__231__279; innerPhi__177__216__264 <- r3__140__213__261; innerPhi__177__216__264 <- r3__142__211__259; innerPhi__169__235__283 <- r4__134__234__282; innerPhi__169__235__283 <- r4__136__232__280; innerPhi__171__215__263 <- r4__139__214__262; innerPhi__171__215__263 <- r4__141__212__260; 
	}
// phis: r3__246 <- merge__176__228__276; r3__246 <- innerPhi__175__236__284; r3__244 <- merge__178__208__256; r3__244 <- innerPhi__177__216__264; r4__245 <- merge__170__227__275; r4__245 <- innerPhi__169__235__283; r4__243 <- merge__172__207__255; r4__243 <- innerPhi__171__215__263; 
	def merge__174__248 = merge(r3__246, r3__244);
	def merge__165__247 = merge(r4__245, r4__243);
} else {
	if (mt__161) {
		if (mb__168) {
			def r3__137__223__323 : u32 = 3;
			def r3__135__225__325 : u32 = 1;
			def r4__136__224__324 : u32 = 4;
			def r4__134__226__326 : u32 = 2;
			def merge__176__228__328 = merge(r3__135__225__325, r3__137__223__323);
			def merge__170__227__327 = merge(r4__134__226__326, r4__136__224__324);
		} else {
			if (mt__166) {
				def r3__135__233__333 : u32 = 1;
				def r4__134__234__334 : u32 = 2;
			} else {
				def r3__137__231__331 : u32 = 3;
				def r4__136__232__332 : u32 = 4;
			}
// phis: innerPhi__175__236__336 <- r3__135__233__333; innerPhi__175__236__336 <- r3__137__231__331; innerPhi__169__235__335 <- r4__134__234__334; innerPhi__169__235__335 <- r4__136__232__332; 
		}
// phis: r3__294 <- merge__176__228__328; r3__294 <- innerPhi__175__236__336; r4__293 <- merge__170__227__327; r4__293 <- innerPhi__169__235__335; 
	} else {
		if (mb__168) {
			def r3__142__203__303 : u32 = 6;
			def r3__140__205__305 : u32 = 5;
			def r4__141__204__304 : u32 = 7;
			def r4__139__206__306 : u32 = 6;
			def merge__178__208__308 = merge(r3__140__205__305, r3__142__203__303);
			def merge__172__207__307 = merge(r4__139__206__306, r4__141__204__304);
		} else {
			if (mt__166) {
				def r3__140__213__313 : u32 = 5;
				def r4__139__214__314 : u32 = 6;
			} else {
				def r3__142__211__311 : u32 = 6;
				def r4__141__212__312 : u32 = 7;
			}
// phis: innerPhi__177__216__316 <- r3__140__213__313; innerPhi__177__216__316 <- r3__142__211__311; innerPhi__171__215__315 <- r4__139__214__314; innerPhi__171__215__315 <- r4__141__212__312; 
		}
// phis: r3__292 <- merge__178__208__308; r3__292 <- innerPhi__177__216__316; r4__291 <- merge__172__207__307; r4__291 <- innerPhi__171__215__315; 
	}
// phis: innerPhi__173__296 <- r3__294; innerPhi__173__296 <- r3__292; innerPhi__164__295 <- r4__293; innerPhi__164__295 <- r4__291; 
}
// phis: r3 <- merge__174__248; r3 <- innerPhi__173__296; r4 <- merge__165__247; r4 <- innerPhi__164__295; 
def eff__130 = push_u32(r3);
def eff__128 = push_u32(r4);
</pre>`;
window.traces["SPLIT_BRANCHES_PHI"]["unlem_scheduler"] = ''
window.traces["SPLIT_BRANCHES_PHI"]["unlem_scheduler"] += `<pre class='graph'>graph TD
subgraph block_59["Block 59"]
	direction TB
	b59_30["eff__130 push_u32"]
	b59_32["eff__128 push_u32"]
	b59_1[\\"Finish"/]
	b59_30 --> b59_32
	b59_32 --> b59_1
end
phi_61 --> block_59
subgraph phi_61["Phi 61"]
	p61_28{"r3 ϕ"}
	p61_27{"r4 ϕ"}
end
block_62 --> phi_61
block_63 --> phi_61
subgraph block_62["Block 62"]
	direction TB
	b62_130["merge__174__248 merge"]
	b62_129["merge__165__247 merge"]
	b62_132["mv_t__183__250 |True|  [bool.&& [mb__163]]"]
	b62_131["mv_t__179__249 |True|  [bool.&& [mb__163]]"]
	b62_130 --> b62_129
	b62_129 --> b62_132
	b62_132 --> b62_131
end
phi_70 --> block_62
subgraph phi_70["Phi 70"]
	p70_128{"r3__246 ϕ"}
	p70_126{"r3__244 ϕ"}
	p70_127{"r4__245 ϕ"}
	p70_125{"r4__243 ϕ"}
end
block_71 --> phi_70
block_72 --> phi_70
subgraph block_71["Block 71"]
	direction TB
	b71_153["r3__137__223__271 3"]
	b71_155["r3__135__225__273 1"]
	b71_133["r3__142__203__251 6"]
	b71_135["r3__140__205__253 5"]
	b71_154["r4__136__224__272 4"]
	b71_156["r4__134__226__274 2"]
	b71_134["r4__141__204__252 7"]
	b71_136["r4__139__206__254 6"]
	b71_158["merge__176__228__276 merge"]
	b71_138["merge__178__208__256 merge"]
	b71_157["merge__170__227__275 merge"]
	b71_137["merge__172__207__255 merge"]
	b71_160["mv_t__195__230__278 |True|  [bool.&& [mb__168]]"]
	b71_140["mv_t__197__210__258 |True|  [bool.&& [mb__168]]"]
	b71_159["mv_t__185__229__277 |True|  [bool.&& [mb__168]]"]
	b71_139["mv_t__187__209__257 |True|  [bool.&& [mb__168]]"]
	b71_153 --> b71_155
	b71_155 --> b71_133
	b71_133 --> b71_135
	b71_135 --> b71_154
	b71_154 --> b71_156
	b71_156 --> b71_134
	b71_134 --> b71_136
	b71_136 --> b71_158
	b71_158 --> b71_138
	b71_138 --> b71_157
	b71_157 --> b71_137
	b71_137 --> b71_160
	b71_160 --> b71_140
	b71_140 --> b71_159
	b71_159 --> b71_139
end
branch_69 --> block_71
subgraph branch_69["Branch 69"]
	br69_42["mb__168 bool.&&"]

end
branch_60 --> branch_69
subgraph branch_60["Branch 60"]
	br60_37["mb__163 bool.&&"]

end
block_64 --> branch_60
subgraph block_64["Block 64"]
	direction TB
	b64_9["arg__144 2"]
	b64_0[/"Start"\\]
	b64_34["abs__148 lift_u32"]
	b64_3["c1 pop_u32"]
	b64_11["q U32_equals"]
	b64_40["mt__166 U32_maybeTrue"]
	b64_41["mf__167 U32_maybeFalse"]
	b64_6["arg__146 0"]
	b64_42["mb__168 bool.&&"]
	b64_33["abs__147 lift_u32"]
	b64_8["p U32_not_equals"]
	b64_35["mt__161 U32_maybeTrue"]
	b64_36["mf__162 U32_maybeFalse"]
	b64_37["mb__163 bool.&&"]
	b64_9 --> b64_0
	b64_0 --> b64_34
	b64_34 --> b64_3
	b64_3 --> b64_11
	b64_11 --> b64_40
	b64_40 --> b64_41
	b64_41 --> b64_6
	b64_6 --> b64_42
	b64_42 --> b64_33
	b64_33 --> b64_8
	b64_8 --> b64_35
	b64_35 --> b64_36
	b64_36 --> b64_37
end
subgraph block_72["Block 72"]
	direction TB
	b72_170["mv_f__196__240__288 |False|  [bool.&& [mb__168]]"]
	b72_150["mv_f__198__220__268 |False|  [bool.&& [mb__168]]"]
	b72_167["mv_f__186__237__285 |False|  [bool.&& [mb__168]]"]
	b72_147["mv_f__188__217__265 |False|  [bool.&& [mb__168]]"]
	b72_170 --> b72_150
	b72_150 --> b72_167
	b72_167 --> b72_147
end
phi_82 --> block_72
subgraph phi_82["Phi 82"]
	p82_166{"innerPhi__175__236__284 ϕ"}
	p82_146{"innerPhi__177__216__264 ϕ"}
	p82_165{"innerPhi__169__235__283 ϕ"}
	p82_145{"innerPhi__171__215__263 ϕ"}
end
block_83 --> phi_82
block_84 --> phi_82
subgraph block_83["Block 83"]
	direction TB
	b83_163["r3__135__233__281 1"]
	b83_143["r3__140__213__261 5"]
	b83_164["r4__134__234__282 2"]
	b83_144["r4__139__214__262 6"]
	b83_171["mv_t__199__241__289 |True|  [U32_maybeTrue [mt__166]]"]
	b83_151["mv_t__201__221__269 |True|  [U32_maybeTrue [mt__166]]"]
	b83_168["mv_t__191__238__286 |True|  [U32_maybeTrue [mt__166]]"]
	b83_148["mv_t__193__218__266 |True|  [U32_maybeTrue [mt__166]]"]
	b83_163 --> b83_143
	b83_143 --> b83_164
	b83_164 --> b83_144
	b83_144 --> b83_171
	b83_171 --> b83_151
	b83_151 --> b83_168
	b83_168 --> b83_148
end
branch_81 --> block_83
subgraph branch_81["Branch 81"]
	br81_40["mt__166 U32_maybeTrue"]

end
branch_69 --> branch_81
subgraph block_84["Block 84"]
	direction TB
	b84_161["r3__137__231__279 3"]
	b84_141["r3__142__211__259 6"]
	b84_162["r4__136__232__280 4"]
	b84_142["r4__141__212__260 7"]
	b84_172["mv_f__200__242__290 |False|  [U32_maybeTrue [mt__166]]"]
	b84_152["mv_f__202__222__270 |False|  [U32_maybeTrue [mt__166]]"]
	b84_169["mv_f__192__239__287 |False|  [U32_maybeTrue [mt__166]]"]
	b84_149["mv_f__194__219__267 |False|  [U32_maybeTrue [mt__166]]"]
	b84_161 --> b84_141
	b84_141 --> b84_162
	b84_162 --> b84_142
	b84_142 --> b84_172
	b84_172 --> b84_152
	b84_152 --> b84_169
	b84_169 --> b84_149
end
branch_81 --> block_84
subgraph block_63["Block 63"]
	direction TB
	b63_182["mv_f__184__300 |False|  [bool.&& [mb__163]]"]
	b63_179["mv_f__180__297 |False|  [bool.&& [mb__163]]"]
	b63_182 --> b63_179
end
phi_66 --> block_63
subgraph phi_66["Phi 66"]
	p66_178{"innerPhi__173__296 ϕ"}
	p66_177{"innerPhi__164__295 ϕ"}
end
block_67 --> phi_66
block_68 --> phi_66
subgraph block_67["Block 67"]
	direction TB
	b67_183["mv_t__189__301 |True|  [U32_maybeTrue [mt__161]]"]
	b67_180["mv_t__181__298 |True|  [U32_maybeTrue [mt__161]]"]
	b67_183 --> b67_180
end
phi_74 --> block_67
subgraph phi_74["Phi 74"]
	p74_176{"r3__294 ϕ"}
	p74_175{"r4__293 ϕ"}
end
block_75 --> phi_74
block_76 --> phi_74
subgraph block_75["Block 75"]
	direction TB
	b75_205["r3__137__223__323 3"]
	b75_207["r3__135__225__325 1"]
	b75_206["r4__136__224__324 4"]
	b75_208["r4__134__226__326 2"]
	b75_210["merge__176__228__328 merge"]
	b75_209["merge__170__227__327 merge"]
	b75_212["mv_t__195__230__330 |True|  [bool.&& [mb__168]]"]
	b75_211["mv_t__185__229__329 |True|  [bool.&& [mb__168]]"]
	b75_205 --> b75_207
	b75_207 --> b75_206
	b75_206 --> b75_208
	b75_208 --> b75_210
	b75_210 --> b75_209
	b75_209 --> b75_212
	b75_212 --> b75_211
end
branch_73 --> block_75
subgraph branch_73["Branch 73"]
	br73_42["mb__168 bool.&&"]

end
branch_65 --> branch_73
subgraph branch_65["Branch 65"]
	br65_35["mt__161 U32_maybeTrue"]

end
branch_60 --> branch_65
subgraph block_76["Block 76"]
	direction TB
	b76_222["mv_f__196__240__340 |False|  [bool.&& [mb__168]]"]
	b76_219["mv_f__186__237__337 |False|  [bool.&& [mb__168]]"]
	b76_222 --> b76_219
end
phi_86 --> block_76
subgraph phi_86["Phi 86"]
	p86_218{"innerPhi__175__236__336 ϕ"}
	p86_217{"innerPhi__169__235__335 ϕ"}
end
block_87 --> phi_86
block_88 --> phi_86
subgraph block_87["Block 87"]
	direction TB
	b87_215["r3__135__233__333 1"]
	b87_216["r4__134__234__334 2"]
	b87_223["mv_t__199__241__341 |True|  [U32_maybeTrue [mt__166]]"]
	b87_220["mv_t__191__238__338 |True|  [U32_maybeTrue [mt__166]]"]
	b87_215 --> b87_216
	b87_216 --> b87_223
	b87_223 --> b87_220
end
branch_85 --> block_87
subgraph branch_85["Branch 85"]
	br85_40["mt__166 U32_maybeTrue"]

end
branch_73 --> branch_85
subgraph block_88["Block 88"]
	direction TB
	b88_213["r3__137__231__331 3"]
	b88_214["r4__136__232__332 4"]
	b88_224["mv_f__200__242__342 |False|  [U32_maybeTrue [mt__166]]"]
	b88_221["mv_f__192__239__339 |False|  [U32_maybeTrue [mt__166]]"]
	b88_213 --> b88_214
	b88_214 --> b88_224
	b88_224 --> b88_221
end
branch_85 --> block_88
subgraph block_68["Block 68"]
	direction TB
	b68_184["mv_f__190__302 |False|  [U32_maybeTrue [mt__161]]"]
	b68_181["mv_f__182__299 |False|  [U32_maybeTrue [mt__161]]"]
	b68_184 --> b68_181
end
phi_78 --> block_68
subgraph phi_78["Phi 78"]
	p78_174{"r3__292 ϕ"}
	p78_173{"r4__291 ϕ"}
end
block_79 --> phi_78
block_80 --> phi_78
subgraph block_79["Block 79"]
	direction TB
	b79_185["r3__142__203__303 6"]
	b79_187["r3__140__205__305 5"]
	b79_186["r4__141__204__304 7"]
	b79_188["r4__139__206__306 6"]
	b79_190["merge__178__208__308 merge"]
	b79_189["merge__172__207__307 merge"]
	b79_192["mv_t__197__210__310 |True|  [bool.&& [mb__168]]"]
	b79_191["mv_t__187__209__309 |True|  [bool.&& [mb__168]]"]
	b79_185 --> b79_187
	b79_187 --> b79_186
	b79_186 --> b79_188
	b79_188 --> b79_190
	b79_190 --> b79_189
	b79_189 --> b79_192
	b79_192 --> b79_191
end
branch_77 --> block_79
subgraph branch_77["Branch 77"]
	br77_42["mb__168 bool.&&"]

end
branch_65 --> branch_77
subgraph block_80["Block 80"]
	direction TB
	b80_202["mv_f__198__220__320 |False|  [bool.&& [mb__168]]"]
	b80_199["mv_f__188__217__317 |False|  [bool.&& [mb__168]]"]
	b80_202 --> b80_199
end
phi_90 --> block_80
subgraph phi_90["Phi 90"]
	p90_198{"innerPhi__177__216__316 ϕ"}
	p90_197{"innerPhi__171__215__315 ϕ"}
end
block_91 --> phi_90
block_92 --> phi_90
subgraph block_91["Block 91"]
	direction TB
	b91_195["r3__140__213__313 5"]
	b91_196["r4__139__214__314 6"]
	b91_203["mv_t__201__221__321 |True|  [U32_maybeTrue [mt__166]]"]
	b91_200["mv_t__193__218__318 |True|  [U32_maybeTrue [mt__166]]"]
	b91_195 --> b91_196
	b91_196 --> b91_203
	b91_203 --> b91_200
end
branch_89 --> block_91
subgraph branch_89["Branch 89"]
	br89_40["mt__166 U32_maybeTrue"]

end
branch_77 --> branch_89
subgraph block_92["Block 92"]
	direction TB
	b92_193["r3__142__211__311 6"]
	b92_194["r4__141__212__312 7"]
	b92_204["mv_f__202__222__322 |False|  [U32_maybeTrue [mt__166]]"]
	b92_201["mv_f__194__219__319 |False|  [U32_maybeTrue [mt__166]]"]
	b92_193 --> b92_194
	b92_194 --> b92_204
	b92_204 --> b92_201
end
branch_89 --> block_92

</pre>`;
window.traces["SPLIT_BRANCHES_PHI"]["unlem_scheduler_ssa"] = ''
window.traces["SPLIT_BRANCHES_PHI"]["unlem_scheduler_ssa"] += `<pre class=''>def arg__144 : u32 = 2;
def abs__148 = lift_u32(arg__144);
def c1 = pop_u32();
def q = U32_equals(c1, abs__148);
def mt__166 = U32_maybeTrue(q);
def mf__167 = U32_maybeFalse(q);
def arg__146 : u32 = 0;
def mb__168 = bool.&&(mt__166, mf__167);
def abs__147 = lift_u32(arg__146);
def p = U32_not_equals(c1, abs__147);
def mt__161 = U32_maybeTrue(p);
def mf__162 = U32_maybeFalse(p);
def mb__163 = bool.&&(mt__161, mf__162);
if (mb__163) {
	if (mb__168) {
		def r3__137__223__271 : u32 = 3;
		def r3__135__225__273 : u32 = 1;
		def r3__142__203__251 : u32 = 6;
		def r3__140__205__253 : u32 = 5;
		def r4__136__224__272 : u32 = 4;
		def r4__134__226__274 : u32 = 2;
		def r4__141__204__252 : u32 = 7;
		def r4__139__206__254 : u32 = 6;
		def merge__176__228__276 = merge(r3__135__225__273, r3__137__223__271);
		def merge__178__208__256 = merge(r3__140__205__253, r3__142__203__251);
		def merge__170__227__275 = merge(r4__134__226__274, r4__136__224__272);
		def merge__172__207__255 = merge(r4__139__206__254, r4__141__204__252);
	} else {
		if (mt__166) {
			def r3__135__233__281 : u32 = 1;
			def r3__140__213__261 : u32 = 5;
			def r4__134__234__282 : u32 = 2;
			def r4__139__214__262 : u32 = 6;
		} else {
			def r3__137__231__279 : u32 = 3;
			def r3__142__211__259 : u32 = 6;
			def r4__136__232__280 : u32 = 4;
			def r4__141__212__260 : u32 = 7;
		}
// phis: innerPhi__175__236__284 <- r3__135__233__281; innerPhi__175__236__284 <- r3__137__231__279; innerPhi__177__216__264 <- r3__140__213__261; innerPhi__177__216__264 <- r3__142__211__259; innerPhi__169__235__283 <- r4__134__234__282; innerPhi__169__235__283 <- r4__136__232__280; innerPhi__171__215__263 <- r4__139__214__262; innerPhi__171__215__263 <- r4__141__212__260; 
	}
// phis: r3__246 <- merge__176__228__276; r3__246 <- innerPhi__175__236__284; r3__244 <- merge__178__208__256; r3__244 <- innerPhi__177__216__264; r4__245 <- merge__170__227__275; r4__245 <- innerPhi__169__235__283; r4__243 <- merge__172__207__255; r4__243 <- innerPhi__171__215__263; 
	def merge__174__248 = merge(r3__246, r3__244);
	def merge__165__247 = merge(r4__245, r4__243);
} else {
	if (mt__161) {
		if (mb__168) {
			def r3__137__223__323 : u32 = 3;
			def r3__135__225__325 : u32 = 1;
			def r4__136__224__324 : u32 = 4;
			def r4__134__226__326 : u32 = 2;
			def merge__176__228__328 = merge(r3__135__225__325, r3__137__223__323);
			def merge__170__227__327 = merge(r4__134__226__326, r4__136__224__324);
		} else {
			if (mt__166) {
				def r3__135__233__333 : u32 = 1;
				def r4__134__234__334 : u32 = 2;
			} else {
				def r3__137__231__331 : u32 = 3;
				def r4__136__232__332 : u32 = 4;
			}
// phis: innerPhi__175__236__336 <- r3__135__233__333; innerPhi__175__236__336 <- r3__137__231__331; innerPhi__169__235__335 <- r4__134__234__334; innerPhi__169__235__335 <- r4__136__232__332; 
		}
// phis: r3__294 <- merge__176__228__328; r3__294 <- innerPhi__175__236__336; r4__293 <- merge__170__227__327; r4__293 <- innerPhi__169__235__335; 
	} else {
		if (mb__168) {
			def r3__142__203__303 : u32 = 6;
			def r3__140__205__305 : u32 = 5;
			def r4__141__204__304 : u32 = 7;
			def r4__139__206__306 : u32 = 6;
			def merge__178__208__308 = merge(r3__140__205__305, r3__142__203__303);
			def merge__172__207__307 = merge(r4__139__206__306, r4__141__204__304);
		} else {
			if (mt__166) {
				def r3__140__213__313 : u32 = 5;
				def r4__139__214__314 : u32 = 6;
			} else {
				def r3__142__211__311 : u32 = 6;
				def r4__141__212__312 : u32 = 7;
			}
// phis: innerPhi__177__216__316 <- r3__140__213__313; innerPhi__177__216__316 <- r3__142__211__311; innerPhi__171__215__315 <- r4__139__214__314; innerPhi__171__215__315 <- r4__141__212__312; 
		}
// phis: r3__292 <- merge__178__208__308; r3__292 <- innerPhi__177__216__316; r4__291 <- merge__172__207__307; r4__291 <- innerPhi__171__215__315; 
	}
// phis: innerPhi__173__296 <- r3__294; innerPhi__173__296 <- r3__292; innerPhi__164__295 <- r4__293; innerPhi__164__295 <- r4__291; 
}
// phis: r3 <- merge__174__248; r3 <- innerPhi__173__296; r4 <- merge__165__247; r4 <- innerPhi__164__295; 
def eff__130 = push_u32(r3);
def eff__128 = push_u32(r4);
</pre>`;
window.traces["SPLIT_BRANCHES_PHI"]["unlem_scheduler_ssa_pretty"] = ''
window.traces["SPLIT_BRANCHES_PHI"]["unlem_scheduler_ssa_pretty"] += `<pre class=''>def c1 = pop_u32();
def mt = U32_maybeTrue(U32_equals(c1, lift_u32(2)));
def mf = U32_maybeFalse(U32_equals(c1, lift_u32(2)));
def p = U32_not_equals(c1, lift_u32(0));
def mt1 = U32_maybeTrue(p);
def mf1 = U32_maybeFalse(p);
var r3: u32;
var r4: u32;
if (bool.&&(mt1, mf1)) {
	var r3__246: u32;
	var r3__244: u32;
	var r4__245: u32;
	var r4__243: u32;
	if (bool.&&(mt, mf)) {
		r3__246 = merge(1, 3);
		r3__244 = merge(5, 6);
		r4__245 = merge(2, 4);
		r4__243 = merge(6, 7);
	} else {
		if (mt) {
			r3__246 = 1;
			r3__244 = 5;
			r4__245 = 2;
			r4__243 = 6;
		} else {
			r3__246 = 3;
			r3__244 = 6;
			r4__245 = 4;
			r4__243 = 7;
		}
	}
	r3 = merge(r3__246, r3__244);
	r4 = merge(r4__245, r4__243);
} else {
	if (mt1) {
		if (bool.&&(mt, mf)) {
			r3 = merge(1, 3);
			r4 = merge(2, 4);
		} else {
			if (mt) {
				r3 = 1;
				r4 = 2;
			} else {
				r3 = 3;
				r4 = 4;
			}
		}
	} else {
		if (bool.&&(mt, mf)) {
			r3 = merge(5, 6);
			r4 = merge(6, 7);
		} else {
			if (mt) {
				r3 = 5;
				r4 = 6;
			} else {
				r3 = 6;
				r4 = 7;
			}
		}
	}
}
push_u32(r3);
push_u32(r4);
</pre>`;
window.traces["P3_FRONTIER"] = {}
window.traces["P3_FRONTIER"]["parsed"] = ''
window.traces["P3_FRONTIER"]["parsed"] += `<pre class=''>def c1 = pop_u32();
def c3 = pop_u32();
def c2 = pop_u32();
def A = pop_u32();
def B = pop_u32();
def arg__363 : u32 = 0;
def arg__362 = (c1);
def p = u32.!=(arg__362, arg__363);
def arg__361 : u32 = 0;
def arg__360 = (c3);
def q = u32.!=(arg__360, arg__361);
def arg__359 : u32 = 0;
def arg__358 = (c2);
def r = u32.!=(arg__358, arg__359);
def deep : u32 = 0;
def cond__355 = (q);
if (cond__355) {
	def deep__356 = (A);
} else {
	def deep__357 = (B);
}
// phis: deep <- deep__356; deep <- deep__357; 
def arg__354 : u32 = 0;
def arg__353 = (deep);
def N = u32.+(arg__353, arg__354);
def triv : u32 = 0;
def cond__350 = (r);
if (cond__350) {
	def triv__351 = (N);
} else {
	def triv__352 = (N);
}
// phis: triv <- triv__351; triv <- triv__352; 
def result : u32 = 0;
def cond__345 = (p);
if (cond__345) {
	def result__346 = (triv);
} else {
	def arg__349 : u32 = 1;
	def arg__348 = (A);
	def result__347 = u32.+(arg__348, arg__349);
}
// phis: result <- result__346; result <- result__347; 
def arg__344 = (result);
def eff__343 = push_u32(arg__344);
</pre>`;
window.traces["P3_FRONTIER"]["raw"] = ''
window.traces["P3_FRONTIER"]["raw"] += `<pre class='graph'>---
config:
  layout: elk
---
graph TD
	1[\\"Finish"/]
	0 -. Codeptr Trap Locals Globals Tables Memory Extra .-> 1
	38 -. Stack .-> 1
	38["eff__343 push_u32"]
	36 --> 38
	7 -. Stack .-> 38
	7["B pop_u32"]
	6 -. Stack .-> 7
	6["A pop_u32"]
	5 -. Stack .-> 6
	5["c2 pop_u32"]
	4 -. Stack .-> 5
	4["c3 pop_u32"]
	3 -. Stack .-> 4
	3["c1 pop_u32"]
	0 -. Stack .-> 3
	0[/"Start"\\]
	36{"result ϕ"}
	10 --> 36
	29 --> 36
	34 --> 36
	34["result__347 u32.+"]
	6 --> 34
	32 --> 34
	32["arg__349 1"]
	29{"triv ϕ"}
	16 --> 29
	24 --> 29
	24 --> 29
	24["N u32.+"]
	21 --> 24
	22 --> 24
	22["arg__354 0"]
	21{"deep ϕ"}
	13 --> 21
	6 --> 21
	7 --> 21
	13["q u32.!="]
	4 --> 13
	11 --> 13
	11["arg__361 0"]
	16["r u32.!="]
	5 --> 16
	14 --> 16
	14["arg__359 0"]
	10["p u32.!="]
	3 --> 10
	8 --> 10
	8["arg__363 0"]
</pre>`;
window.traces["P3_FRONTIER"]["overloadOps"] = ''
window.traces["P3_FRONTIER"]["overloadOps"] += `<pre class='graph'>---
config:
  layout: elk
---
graph TD
	1[\\"Finish"/]
	0 -. Codeptr Trap Locals Globals Tables Memory Extra .-> 1
	38 -. Stack .-> 1
	38["eff__343 push_u32"]
	36 --> 38
	7 -. Stack .-> 38
	7["B pop_u32"]
	6 -. Stack .-> 7
	6["A pop_u32"]
	5 -. Stack .-> 6
	5["c2 pop_u32"]
	4 -. Stack .-> 5
	4["c3 pop_u32"]
	3 -. Stack .-> 4
	3["c1 pop_u32"]
	0 -. Stack .-> 3
	0[/"Start"\\]
	36{"result ϕ"}
	10 --> 36
	29 --> 36
	34 --> 36
	34["result__347 U32_plus"]
	6 --> 34
	32 --> 34
	32["arg__349 1"]
	29{"triv ϕ"}
	16 --> 29
	24 --> 29
	24 --> 29
	24["N bot_plus"]
	21 --> 24
	22 --> 24
	22["arg__354 0"]
	21{"deep ϕ"}
	13 --> 21
	6 --> 21
	7 --> 21
	13["q U32_not_equals"]
	4 --> 13
	11 --> 13
	11["arg__361 0"]
	16["r U32_not_equals"]
	5 --> 16
	14 --> 16
	14["arg__359 0"]
	10["p U32_not_equals"]
	3 --> 10
	8 --> 10
	8["arg__363 0"]
</pre>`;
window.traces["P3_FRONTIER"]["addAbstractions"] = ''
window.traces["P3_FRONTIER"]["addAbstractions"] += `<pre class='graph'>---
config:
  layout: elk
---
graph TD
	1[\\"Finish"/]
	0 -. Codeptr Trap Locals Globals Tables Memory Extra .-> 1
	38 -. Stack .-> 1
	38["eff__343 push_u32"]
	36 --> 38
	7 -. Stack .-> 38
	7["B pop_u32"]
	6 -. Stack .-> 7
	6["A pop_u32"]
	5 -. Stack .-> 6
	5["c2 pop_u32"]
	4 -. Stack .-> 5
	4["c3 pop_u32"]
	3 -. Stack .-> 4
	3["c1 pop_u32"]
	0 -. Stack .-> 3
	0[/"Start"\\]
	36{"result ϕ"}
	10 --> 36
	29 --> 36
	34 --> 36
	34["result__347 U32_plus"]
	6 --> 34
	40 --> 34
	40["abs__365 lift_u32"]
	32 --> 40
	32["arg__349 1"]
	29{"triv ϕ"}
	16 --> 29
	24 --> 29
	24 --> 29
	24["N bot_plus"]
	21 --> 24
	22 --> 24
	22["arg__354 0"]
	21{"deep ϕ"}
	13 --> 21
	6 --> 21
	7 --> 21
	13["q U32_not_equals"]
	4 --> 13
	42 --> 13
	42["abs__367 lift_u32"]
	11 --> 42
	11["arg__361 0"]
	16["r U32_not_equals"]
	5 --> 16
	41 --> 16
	41["abs__366 lift_u32"]
	14 --> 41
	14["arg__359 0"]
	10["p U32_not_equals"]
	3 --> 10
	39 --> 10
	39["abs__364 lift_u32"]
	8 --> 39
	8["arg__363 0"]
</pre>`;
window.traces["P3_FRONTIER"]["scheduler_start"] = ''
window.traces["P3_FRONTIER"]["scheduler_start"] += `<pre class='graph'>---
config:
  layout: elk
---
graph TD
	1[\\"Finish"/]
	0 -. Codeptr Trap Locals Globals Tables Memory Extra .-> 1
	38 -. Stack .-> 1
	38["eff__343 push_u32"]
	36 --> 38
	7 -. Stack .-> 38
	7["B pop_u32"]
	6 -. Stack .-> 7
	6["A pop_u32"]
	5 -. Stack .-> 6
	5["c2 pop_u32"]
	4 -. Stack .-> 5
	4["c3 pop_u32"]
	3 -. Stack .-> 4
	3["c1 pop_u32"]
	0 -. Stack .-> 3
	0[/"Start"\\]
	36{"result ϕ"}
	10 --> 36
	43 --> 36
	44 --> 36
	44["mv_f__369 |False|  [U32_not_equals [p]]"]
	10 --> 44
	34 --> 44
	34["result__347 U32_plus"]
	6 --> 34
	40 --> 34
	40["abs__365 lift_u32"]
	32 --> 40
	32["arg__349 1"]
	10["p U32_not_equals"]
	3 --> 10
	39 --> 10
	39["abs__364 lift_u32"]
	8 --> 39
	8["arg__363 0"]
	43["mv_t__368 |True|  [U32_not_equals [p]]"]
	10 --> 43
	29 --> 43
	29{"triv ϕ"}
	16 --> 29
	45 --> 29
	46 --> 29
	46["mv_f__371 |False|  [U32_not_equals [r]]"]
	16 --> 46
	24 --> 46
	24["N bot_plus"]
	21 --> 24
	22 --> 24
	22["arg__354 0"]
	21{"deep ϕ"}
	13 --> 21
	47 --> 21
	48 --> 21
	48["mv_f__373 |False|  [U32_not_equals [q]]"]
	13 --> 48
	7 --> 48
	13["q U32_not_equals"]
	4 --> 13
	42 --> 13
	42["abs__367 lift_u32"]
	11 --> 42
	11["arg__361 0"]
	47["mv_t__372 |True|  [U32_not_equals [q]]"]
	13 --> 47
	6 --> 47
	16["r U32_not_equals"]
	5 --> 16
	41 --> 16
	41["abs__366 lift_u32"]
	14 --> 41
	14["arg__359 0"]
	45["mv_t__370 |True|  [U32_not_equals [r]]"]
	16 --> 45
	24 --> 45
</pre>`;
window.traces["P3_FRONTIER"]["untangled"] = ''
window.traces["P3_FRONTIER"]["untangled"] += `<pre class='graph'>---
config:
  layout: elk
---
graph TD
	1[\\"Finish"/]
	0 -. Codeptr Trap Locals Globals Tables Memory Extra .-> 1
	38 -. Stack .-> 1
	38["eff__343 push_u32"]
	36 --> 38
	7 -. Stack .-> 38
	7["B pop_u32"]
	6 -. Stack .-> 7
	6["A pop_u32"]
	5 -. Stack .-> 6
	5["c2 pop_u32"]
	4 -. Stack .-> 5
	4["c3 pop_u32"]
	3 -. Stack .-> 4
	3["c1 pop_u32"]
	0 -. Stack .-> 3
	0[/"Start"\\]
	36{"result ϕ"}
	10 --> 36
	43 --> 36
	44 --> 36
	44["mv_f__369 |False|  [U32_not_equals [p]]"]
	10 --> 44
	34 --> 44
	34["result__347 U32_plus"]
	6 --> 34
	40 --> 34
	40["abs__365 lift_u32"]
	32 --> 40
	32["arg__349 1"]
	10["p U32_not_equals"]
	3 --> 10
	39 --> 10
	39["abs__364 lift_u32"]
	8 --> 39
	8["arg__363 0"]
	43["mv_t__368 |True|  [U32_not_equals [p]]"]
	10 --> 43
	29 --> 43
	29{"triv ϕ"}
	16 --> 29
	123 --> 29
	126 --> 29
	126["mv_f__371__377__385__391__397__403__409__415__421__427__433__439__445 |False|  [U32_not_equals [r]]"]
	16 --> 126
	24 --> 126
	24["N bot_plus"]
	21 --> 24
	22 --> 24
	22["arg__354 0"]
	21{"deep ϕ"}
	13 --> 21
	47 --> 21
	48 --> 21
	48["mv_f__373 |False|  [U32_not_equals [q]]"]
	13 --> 48
	7 --> 48
	13["q U32_not_equals"]
	4 --> 13
	42 --> 13
	42["abs__367 lift_u32"]
	11 --> 42
	11["arg__361 0"]
	47["mv_t__372 |True|  [U32_not_equals [q]]"]
	13 --> 47
	6 --> 47
	16["r U32_not_equals"]
	5 --> 16
	41 --> 16
	41["abs__366 lift_u32"]
	14 --> 41
	14["arg__359 0"]
	123["mv_t__370__374__382__388__394__400__406__412__418__424__430__436__442 |True|  [U32_not_equals [r]]"]
	16 --> 123
	24 --> 123
</pre>`;
window.traces["P3_FRONTIER"]["schedulerMermaid"] = ''
window.traces["P3_FRONTIER"]["schedulerMermaid"] += `<pre class='graph'>graph TD
subgraph block_93["Block 93"]
	direction TB
	b93_38["eff__343 push_u32"]
	b93_1[\\"Finish"/]
	b93_38 --> b93_1
end
phi_95 --> block_93
subgraph phi_95["Phi 95"]
	p95_36{"result ϕ"}
end
block_96 --> phi_95
block_97 --> phi_95
subgraph block_96["Block 96"]
	direction TB
	b96_43["mv_t__368 |True|  [U32_not_equals [p]]"]
end
phi_100 --> block_96
subgraph phi_100["Phi 100"]
	p100_29{"triv ϕ"}
end
block_101 --> phi_100
block_102 --> phi_100
subgraph block_101["Block 101"]
	direction TB
	b101_123["mv_t__370__374__382__388__394__400__406__412__418__424__430__436__442 |True|  [U32_not_equals [r]]"]
end
branch_99 --> block_101
subgraph branch_99["Branch 99"]
	br99_16["r U32_not_equals"]

end
branch_94 --> branch_99
subgraph branch_94["Branch 94"]
	br94_10["p U32_not_equals"]

end
block_98 --> branch_94
subgraph block_98["Block 98"]
	direction TB
	b98_22["arg__354 0"]
	b98_14["arg__359 0"]
	b98_24["N bot_plus"]
	b98_41["abs__366 lift_u32"]
	b98_16["r U32_not_equals"]
	b98_8["arg__363 0"]
	b98_39["abs__364 lift_u32"]
	b98_10["p U32_not_equals"]
	b98_22 --> b98_14
	b98_14 --> b98_24
	b98_24 --> b98_41
	b98_41 --> b98_16
	b98_16 --> b98_8
	b98_8 --> b98_39
	b98_39 --> b98_10
end
phi_104 --> block_98
subgraph phi_104["Phi 104"]
	p104_21{"deep ϕ"}
end
block_105 --> phi_104
block_106 --> phi_104
subgraph block_105["Block 105"]
	direction TB
	b105_47["mv_t__372 |True|  [U32_not_equals [q]]"]
end
branch_103 --> block_105
subgraph branch_103["Branch 103"]
	br103_13["q U32_not_equals"]

end
block_107 --> branch_103
subgraph block_107["Block 107"]
	direction TB
	b107_0[/"Start"\\]
	b107_3["c1 pop_u32"]
	b107_4["c3 pop_u32"]
	b107_5["c2 pop_u32"]
	b107_6["A pop_u32"]
	b107_11["arg__361 0"]
	b107_7["B pop_u32"]
	b107_42["abs__367 lift_u32"]
	b107_13["q U32_not_equals"]
	b107_0 --> b107_3
	b107_3 --> b107_4
	b107_4 --> b107_5
	b107_5 --> b107_6
	b107_6 --> b107_11
	b107_11 --> b107_7
	b107_7 --> b107_42
	b107_42 --> b107_13
end
subgraph block_106["Block 106"]
	direction TB
	b106_48["mv_f__373 |False|  [U32_not_equals [q]]"]
end
branch_103 --> block_106
subgraph block_102["Block 102"]
	direction TB
	b102_126["mv_f__371__377__385__391__397__403__409__415__421__427__433__439__445 |False|  [U32_not_equals [r]]"]
end
branch_99 --> block_102
subgraph block_97["Block 97"]
	direction TB
	b97_32["arg__349 1"]
	b97_40["abs__365 lift_u32"]
	b97_34["result__347 U32_plus"]
	b97_44["mv_f__369 |False|  [U32_not_equals [p]]"]
	b97_32 --> b97_40
	b97_40 --> b97_34
	b97_34 --> b97_44
end
branch_94 --> block_97

</pre>`;
window.traces["P3_FRONTIER"]["scheduler_ssad"] = ''
window.traces["P3_FRONTIER"]["scheduler_ssad"] += `<pre class=''>def c1 = pop_u32();
def c3 = pop_u32();
def c2 = pop_u32();
def A = pop_u32();
def arg__361 : u32 = 0;
def B = pop_u32();
def abs__367 = lift_u32(arg__361);
def q = U32_not_equals(c3, abs__367);
if (q) {
}
// phis: deep <- A; deep <- B; 
def arg__354 : u32 = 0;
def arg__359 : u32 = 0;
def N = bot_plus(deep, arg__354);
def abs__366 = lift_u32(arg__359);
def r = U32_not_equals(c2, abs__366);
def arg__363 : u32 = 0;
def abs__364 = lift_u32(arg__363);
def p = U32_not_equals(c1, abs__364);
if (p) {
	if (r) {
	}
// phis: triv <- N; triv <- N; 
} else {
	def arg__349 : u32 = 1;
	def abs__365 = lift_u32(arg__349);
	def result__347 = U32_plus(A, abs__365);
}
// phis: result <- triv; result <- result__347; 
def eff__343 = push_u32(result);
</pre>`;
window.traces["P3_FRONTIER"]["scheduler_ssad_pretty"] = ''
window.traces["P3_FRONTIER"]["scheduler_ssad_pretty"] += `<pre class=''>def c1 = pop_u32();
def c3 = pop_u32();
def c2 = pop_u32();
def A = pop_u32();
def B = pop_u32();
def q = U32_not_equals(c3, lift_u32(0));
var deep: u32;
if (q) {
	deep = A;
} else {
	deep = B;
}
def N = bot_plus(deep, 0);
def r = U32_not_equals(c2, lift_u32(0));
def p = U32_not_equals(c1, lift_u32(0));
var result: u32;
if (p) {
	if (r) {
		result = N;
	} else {
		result = N;
	}
} else {
	result = U32_plus(A, lift_u32(1));
}
push_u32(result);
</pre>`;
window.traces["P3_FRONTIER"]["unLEM"] = ''
window.traces["P3_FRONTIER"]["unLEM"] += `<pre class='graph'>---
config:
  layout: elk
---
graph TD
	1[\\"Finish"/]
	0 -. Codeptr Trap Locals Globals Tables Memory Extra .-> 1
	38 -. Stack .-> 1
	38["eff__343 push_u32"]
	36 --> 38
	7 -. Stack .-> 38
	7["B pop_u32"]
	6 -. Stack .-> 7
	6["A pop_u32"]
	5 -. Stack .-> 6
	5["c2 pop_u32"]
	4 -. Stack .-> 5
	4["c3 pop_u32"]
	3 -. Stack .-> 4
	3["c1 pop_u32"]
	0 -. Stack .-> 3
	0[/"Start"\\]
	36{"result ϕ"}
	45 --> 36
	47 --> 36
	46 --> 36
	46{"innerPhi__449 ϕ"}
	43 --> 46
	29 --> 46
	34 --> 46
	34["result__347 U32_plus"]
	6 --> 34
	40 --> 34
	40["abs__365 lift_u32"]
	32 --> 40
	32["arg__349 1"]
	29{"triv ϕ"}
	50 --> 29
	52 --> 29
	51 --> 29
	51{"innerPhi__454 ϕ"}
	48 --> 51
	24 --> 51
	24 --> 51
	24["N bot_plus"]
	21 --> 24
	22 --> 24
	22["arg__354 0"]
	21{"deep ϕ"}
	55 --> 21
	57 --> 21
	56 --> 21
	56{"innerPhi__459 ϕ"}
	53 --> 56
	6 --> 56
	7 --> 56
	53["mt__456 U32_maybeTrue"]
	13 --> 53
	13["q U32_not_equals"]
	4 --> 13
	42 --> 13
	42["abs__367 lift_u32"]
	11 --> 42
	11["arg__361 0"]
	57["merge__460 merge"]
	6 --> 57
	7 --> 57
	55["mb__458 bool.&&"]
	53 --> 55
	54 --> 55
	54["mf__457 U32_maybeFalse"]
	13 --> 54
	48["mt__451 U32_maybeTrue"]
	16 --> 48
	16["r U32_not_equals"]
	5 --> 16
	41 --> 16
	41["abs__366 lift_u32"]
	14 --> 41
	14["arg__359 0"]
	52["merge__455 merge"]
	24 --> 52
	24 --> 52
	50["mb__453 bool.&&"]
	48 --> 50
	49 --> 50
	49["mf__452 U32_maybeFalse"]
	16 --> 49
	43["mt__446 U32_maybeTrue"]
	10 --> 43
	10["p U32_not_equals"]
	3 --> 10
	39 --> 10
	39["abs__364 lift_u32"]
	8 --> 39
	8["arg__363 0"]
	47["merge__450 merge"]
	29 --> 47
	34 --> 47
	45["mb__448 bool.&&"]
	43 --> 45
	44 --> 45
	44["mf__447 U32_maybeFalse"]
	10 --> 44
</pre>`;
window.traces["P3_FRONTIER_ul"] = {}
window.traces["P3_FRONTIER_ul"]["scheduler_start"] = ''
window.traces["P3_FRONTIER_ul"]["scheduler_start"] += `<pre class='graph'>---
config:
  layout: elk
---
graph TD
	1[\\"Finish"/]
	0 -. Codeptr Trap Locals Globals Tables Memory Extra .-> 1
	38 -. Stack .-> 1
	38["eff__343 push_u32"]
	36 --> 38
	7 -. Stack .-> 38
	7["B pop_u32"]
	6 -. Stack .-> 7
	6["A pop_u32"]
	5 -. Stack .-> 6
	5["c2 pop_u32"]
	4 -. Stack .-> 5
	4["c3 pop_u32"]
	3 -. Stack .-> 4
	3["c1 pop_u32"]
	0 -. Stack .-> 3
	0[/"Start"\\]
	36{"result ϕ"}
	45 --> 36
	58 --> 36
	59 --> 36
	59["mv_f__462 |False|  [bool.&& [mb__448]]"]
	45 --> 59
	46 --> 59
	46{"innerPhi__449 ϕ"}
	43 --> 46
	60 --> 46
	61 --> 46
	61["mv_f__464 |False|  [U32_maybeTrue [mt__446]]"]
	43 --> 61
	34 --> 61
	34["result__347 U32_plus"]
	6 --> 34
	40 --> 34
	40["abs__365 lift_u32"]
	32 --> 40
	32["arg__349 1"]
	43["mt__446 U32_maybeTrue"]
	10 --> 43
	10["p U32_not_equals"]
	3 --> 10
	39 --> 10
	39["abs__364 lift_u32"]
	8 --> 39
	8["arg__363 0"]
	60["mv_t__463 |True|  [U32_maybeTrue [mt__446]]"]
	43 --> 60
	29 --> 60
	29{"triv ϕ"}
	50 --> 29
	62 --> 29
	63 --> 29
	63["mv_f__466 |False|  [bool.&& [mb__453]]"]
	50 --> 63
	51 --> 63
	51{"innerPhi__454 ϕ"}
	48 --> 51
	64 --> 51
	65 --> 51
	65["mv_f__468 |False|  [U32_maybeTrue [mt__451]]"]
	48 --> 65
	24 --> 65
	24["N bot_plus"]
	21 --> 24
	22 --> 24
	22["arg__354 0"]
	21{"deep ϕ"}
	55 --> 21
	66 --> 21
	67 --> 21
	67["mv_f__470 |False|  [bool.&& [mb__458]]"]
	55 --> 67
	56 --> 67
	56{"innerPhi__459 ϕ"}
	53 --> 56
	68 --> 56
	69 --> 56
	69["mv_f__472 |False|  [U32_maybeTrue [mt__456]]"]
	53 --> 69
	7 --> 69
	53["mt__456 U32_maybeTrue"]
	13 --> 53
	13["q U32_not_equals"]
	4 --> 13
	42 --> 13
	42["abs__367 lift_u32"]
	11 --> 42
	11["arg__361 0"]
	68["mv_t__471 |True|  [U32_maybeTrue [mt__456]]"]
	53 --> 68
	6 --> 68
	55["mb__458 bool.&&"]
	53 --> 55
	54 --> 55
	54["mf__457 U32_maybeFalse"]
	13 --> 54
	66["mv_t__469 |True|  [bool.&& [mb__458]]"]
	55 --> 66
	57 --> 66
	57["merge__460 merge"]
	6 --> 57
	7 --> 57
	48["mt__451 U32_maybeTrue"]
	16 --> 48
	16["r U32_not_equals"]
	5 --> 16
	41 --> 16
	41["abs__366 lift_u32"]
	14 --> 41
	14["arg__359 0"]
	64["mv_t__467 |True|  [U32_maybeTrue [mt__451]]"]
	48 --> 64
	24 --> 64
	50["mb__453 bool.&&"]
	48 --> 50
	49 --> 50
	49["mf__452 U32_maybeFalse"]
	16 --> 49
	62["mv_t__465 |True|  [bool.&& [mb__453]]"]
	50 --> 62
	52 --> 62
	52["merge__455 merge"]
	24 --> 52
	24 --> 52
	45["mb__448 bool.&&"]
	43 --> 45
	44 --> 45
	44["mf__447 U32_maybeFalse"]
	10 --> 44
	58["mv_t__461 |True|  [bool.&& [mb__448]]"]
	45 --> 58
	47 --> 58
	47["merge__450 merge"]
	29 --> 47
	34 --> 47
</pre>`;
window.traces["P3_FRONTIER_ul"]["untangled"] = ''
window.traces["P3_FRONTIER_ul"]["untangled"] += `<pre class='graph'>---
config:
  layout: elk
---
graph TD
	1[\\"Finish"/]
	0 -. Codeptr Trap Locals Globals Tables Memory Extra .-> 1
	38 -. Stack .-> 1
	38["eff__343 push_u32"]
	36 --> 38
	7 -. Stack .-> 38
	7["B pop_u32"]
	6 -. Stack .-> 7
	6["A pop_u32"]
	5 -. Stack .-> 6
	5["c2 pop_u32"]
	4 -. Stack .-> 5
	4["c3 pop_u32"]
	3 -. Stack .-> 4
	3["c1 pop_u32"]
	0 -. Stack .-> 3
	0[/"Start"\\]
	36{"result ϕ"}
	45 --> 36
	58 --> 36
	59 --> 36
	59["mv_f__462 |False|  [bool.&& [mb__448]]"]
	45 --> 59
	46 --> 59
	46{"innerPhi__449 ϕ"}
	43 --> 46
	60 --> 46
	61 --> 46
	61["mv_f__464 |False|  [U32_maybeTrue [mt__446]]"]
	43 --> 61
	34 --> 61
	34["result__347 U32_plus"]
	6 --> 34
	40 --> 34
	40["abs__365 lift_u32"]
	32 --> 40
	32["arg__349 1"]
	43["mt__446 U32_maybeTrue"]
	10 --> 43
	10["p U32_not_equals"]
	3 --> 10
	39 --> 10
	39["abs__364 lift_u32"]
	8 --> 39
	8["arg__363 0"]
	60["mv_t__463 |True|  [U32_maybeTrue [mt__446]]"]
	43 --> 60
	29 --> 60
	29{"triv ϕ"}
	50 --> 29
	62 --> 29
	63 --> 29
	63["mv_f__466 |False|  [bool.&& [mb__453]]"]
	50 --> 63
	51 --> 63
	51{"innerPhi__454 ϕ"}
	48 --> 51
	410 --> 51
	417 --> 51
	417["mv_f__468__482__500__514__528__542__556__570__584__598__612__626__640__654__668__682__696__710__724__738__752__766__780__794__808 |False|  [U32_maybeTrue [mt__451]]"]
	48 --> 417
	24 --> 417
	24["N bot_plus"]
	21 --> 24
	22 --> 24
	22["arg__354 0"]
	21{"deep ϕ"}
	55 --> 21
	66 --> 21
	67 --> 21
	67["mv_f__470 |False|  [bool.&& [mb__458]]"]
	55 --> 67
	56 --> 67
	56{"innerPhi__459 ϕ"}
	53 --> 56
	68 --> 56
	69 --> 56
	69["mv_f__472 |False|  [U32_maybeTrue [mt__456]]"]
	53 --> 69
	7 --> 69
	53["mt__456 U32_maybeTrue"]
	13 --> 53
	13["q U32_not_equals"]
	4 --> 13
	42 --> 13
	42["abs__367 lift_u32"]
	11 --> 42
	11["arg__361 0"]
	68["mv_t__471 |True|  [U32_maybeTrue [mt__456]]"]
	53 --> 68
	6 --> 68
	55["mb__458 bool.&&"]
	53 --> 55
	54 --> 55
	54["mf__457 U32_maybeFalse"]
	13 --> 54
	66["mv_t__469 |True|  [bool.&& [mb__458]]"]
	55 --> 66
	57 --> 66
	57["merge__460 merge"]
	6 --> 57
	7 --> 57
	48["mt__451 U32_maybeTrue"]
	16 --> 48
	16["r U32_not_equals"]
	5 --> 16
	41 --> 16
	41["abs__366 lift_u32"]
	14 --> 41
	14["arg__359 0"]
	410["mv_t__467__475__493__507__521__535__549__563__577__591__605__619__633__647__661__675__689__703__717__731__745__759__773__787__801 |True|  [U32_maybeTrue [mt__451]]"]
	48 --> 410
	24 --> 410
	50["mb__453 bool.&&"]
	48 --> 50
	49 --> 50
	49["mf__452 U32_maybeFalse"]
	16 --> 49
	62["mv_t__465 |True|  [bool.&& [mb__453]]"]
	50 --> 62
	52 --> 62
	52["merge__455 merge"]
	24 --> 52
	24 --> 52
	45["mb__448 bool.&&"]
	43 --> 45
	44 --> 45
	44["mf__447 U32_maybeFalse"]
	10 --> 44
	58["mv_t__461 |True|  [bool.&& [mb__448]]"]
	45 --> 58
	47 --> 58
	47["merge__450 merge"]
	29 --> 47
	34 --> 47
</pre>`;
window.traces["P3_FRONTIER"]["unlem_schedule"] = ''
window.traces["P3_FRONTIER"]["unlem_schedule"] += `<pre class=''>def c1 = pop_u32();
def c3 = pop_u32();
def c2 = pop_u32();
def arg__361 : u32 = 0;
def A = pop_u32();
def abs__367 = lift_u32(arg__361);
def B = pop_u32();
def q = U32_not_equals(c3, abs__367);
def mt__456 = U32_maybeTrue(q);
def mf__457 = U32_maybeFalse(q);
def mb__458 = bool.&&(mt__456, mf__457);
if (mb__458) {
	def merge__460 = merge(A, B);
} else {
	if (mt__456) {
	}
// phis: innerPhi__459 <- A; innerPhi__459 <- B; 
}
// phis: deep <- merge__460; deep <- innerPhi__459; 
def arg__359 : u32 = 0;
def arg__354 : u32 = 0;
def abs__366 = lift_u32(arg__359);
def N = bot_plus(deep, arg__354);
def r = U32_not_equals(c2, abs__366);
def mt__451 = U32_maybeTrue(r);
def mf__452 = U32_maybeFalse(r);
def mb__453 = bool.&&(mt__451, mf__452);
if (mb__453) {
	def merge__455 = merge(N, N);
} else {
	if (mt__451) {
	}
// phis: innerPhi__454 <- N; innerPhi__454 <- N; 
}
// phis: triv <- merge__455; triv <- innerPhi__454; 
def arg__349 : u32 = 1;
def arg__363 : u32 = 0;
def abs__365 = lift_u32(arg__349);
def abs__364 = lift_u32(arg__363);
def result__347 = U32_plus(A, abs__365);
def p = U32_not_equals(c1, abs__364);
def mt__446 = U32_maybeTrue(p);
def mf__447 = U32_maybeFalse(p);
def mb__448 = bool.&&(mt__446, mf__447);
if (mb__448) {
	def merge__450 = merge(triv, result__347);
} else {
	if (mt__446) {
	}
// phis: innerPhi__449 <- triv; innerPhi__449 <- result__347; 
}
// phis: result <- merge__450; result <- innerPhi__449; 
def eff__343 = push_u32(result);
</pre>`;
window.traces["P3_FRONTIER"]["unlem_scheduler"] = ''
window.traces["P3_FRONTIER"]["unlem_scheduler"] += `<pre class='graph'>graph TD
subgraph block_108["Block 108"]
	direction TB
	b108_38["eff__343 push_u32"]
	b108_1[\\"Finish"/]
	b108_38 --> b108_1
end
phi_110 --> block_108
subgraph phi_110["Phi 110"]
	p110_36{"result ϕ"}
end
block_111 --> phi_110
block_112 --> phi_110
subgraph block_111["Block 111"]
	direction TB
	b111_47["merge__450 merge"]
	b111_58["mv_t__461 |True|  [bool.&& [mb__448]]"]
	b111_47 --> b111_58
end
branch_109 --> block_111
subgraph branch_109["Branch 109"]
	br109_45["mb__448 bool.&&"]

end
block_113 --> branch_109
subgraph block_113["Block 113"]
	direction TB
	b113_32["arg__349 1"]
	b113_8["arg__363 0"]
	b113_40["abs__365 lift_u32"]
	b113_39["abs__364 lift_u32"]
	b113_34["result__347 U32_plus"]
	b113_10["p U32_not_equals"]
	b113_43["mt__446 U32_maybeTrue"]
	b113_44["mf__447 U32_maybeFalse"]
	b113_45["mb__448 bool.&&"]
	b113_32 --> b113_8
	b113_8 --> b113_40
	b113_40 --> b113_39
	b113_39 --> b113_34
	b113_34 --> b113_10
	b113_10 --> b113_43
	b113_43 --> b113_44
	b113_44 --> b113_45
end
phi_119 --> block_113
subgraph phi_119["Phi 119"]
	p119_29{"triv ϕ"}
end
block_120 --> phi_119
block_121 --> phi_119
subgraph block_120["Block 120"]
	direction TB
	b120_52["merge__455 merge"]
	b120_62["mv_t__465 |True|  [bool.&& [mb__453]]"]
	b120_52 --> b120_62
end
branch_118 --> block_120
subgraph branch_118["Branch 118"]
	br118_50["mb__453 bool.&&"]

end
block_122 --> branch_118
subgraph block_122["Block 122"]
	direction TB
	b122_14["arg__359 0"]
	b122_22["arg__354 0"]
	b122_41["abs__366 lift_u32"]
	b122_24["N bot_plus"]
	b122_16["r U32_not_equals"]
	b122_48["mt__451 U32_maybeTrue"]
	b122_49["mf__452 U32_maybeFalse"]
	b122_50["mb__453 bool.&&"]
	b122_14 --> b122_22
	b122_22 --> b122_41
	b122_41 --> b122_24
	b122_24 --> b122_16
	b122_16 --> b122_48
	b122_48 --> b122_49
	b122_49 --> b122_50
end
phi_128 --> block_122
subgraph phi_128["Phi 128"]
	p128_21{"deep ϕ"}
end
block_129 --> phi_128
block_130 --> phi_128
subgraph block_129["Block 129"]
	direction TB
	b129_57["merge__460 merge"]
	b129_66["mv_t__469 |True|  [bool.&& [mb__458]]"]
	b129_57 --> b129_66
end
branch_127 --> block_129
subgraph branch_127["Branch 127"]
	br127_55["mb__458 bool.&&"]

end
block_131 --> branch_127
subgraph block_131["Block 131"]
	direction TB
	b131_0[/"Start"\\]
	b131_3["c1 pop_u32"]
	b131_4["c3 pop_u32"]
	b131_5["c2 pop_u32"]
	b131_11["arg__361 0"]
	b131_6["A pop_u32"]
	b131_42["abs__367 lift_u32"]
	b131_7["B pop_u32"]
	b131_13["q U32_not_equals"]
	b131_53["mt__456 U32_maybeTrue"]
	b131_54["mf__457 U32_maybeFalse"]
	b131_55["mb__458 bool.&&"]
	b131_0 --> b131_3
	b131_3 --> b131_4
	b131_4 --> b131_5
	b131_5 --> b131_11
	b131_11 --> b131_6
	b131_6 --> b131_42
	b131_42 --> b131_7
	b131_7 --> b131_13
	b131_13 --> b131_53
	b131_53 --> b131_54
	b131_54 --> b131_55
end
subgraph block_130["Block 130"]
	direction TB
	b130_67["mv_f__470 |False|  [bool.&& [mb__458]]"]
end
phi_133 --> block_130
subgraph phi_133["Phi 133"]
	p133_56{"innerPhi__459 ϕ"}
end
block_134 --> phi_133
block_135 --> phi_133
subgraph block_134["Block 134"]
	direction TB
	b134_68["mv_t__471 |True|  [U32_maybeTrue [mt__456]]"]
end
branch_132 --> block_134
subgraph branch_132["Branch 132"]
	br132_53["mt__456 U32_maybeTrue"]

end
branch_127 --> branch_132
subgraph block_135["Block 135"]
	direction TB
	b135_69["mv_f__472 |False|  [U32_maybeTrue [mt__456]]"]
end
branch_132 --> block_135
subgraph block_121["Block 121"]
	direction TB
	b121_63["mv_f__466 |False|  [bool.&& [mb__453]]"]
end
phi_124 --> block_121
subgraph phi_124["Phi 124"]
	p124_51{"innerPhi__454 ϕ"}
end
block_125 --> phi_124
block_126 --> phi_124
subgraph block_125["Block 125"]
	direction TB
	b125_410["mv_t__467__475__493__507__521__535__549__563__577__591__605__619__633__647__661__675__689__703__717__731__745__759__773__787__801 |True|  [U32_maybeTrue [mt__451]]"]
end
branch_123 --> block_125
subgraph branch_123["Branch 123"]
	br123_48["mt__451 U32_maybeTrue"]

end
branch_118 --> branch_123
subgraph block_126["Block 126"]
	direction TB
	b126_417["mv_f__468__482__500__514__528__542__556__570__584__598__612__626__640__654__668__682__696__710__724__738__752__766__780__794__808 |False|  [U32_maybeTrue [mt__451]]"]
end
branch_123 --> block_126
subgraph block_112["Block 112"]
	direction TB
	b112_59["mv_f__462 |False|  [bool.&& [mb__448]]"]
end
phi_115 --> block_112
subgraph phi_115["Phi 115"]
	p115_46{"innerPhi__449 ϕ"}
end
block_116 --> phi_115
block_117 --> phi_115
subgraph block_116["Block 116"]
	direction TB
	b116_60["mv_t__463 |True|  [U32_maybeTrue [mt__446]]"]
end
branch_114 --> block_116
subgraph branch_114["Branch 114"]
	br114_43["mt__446 U32_maybeTrue"]

end
branch_109 --> branch_114
subgraph block_117["Block 117"]
	direction TB
	b117_61["mv_f__464 |False|  [U32_maybeTrue [mt__446]]"]
end
branch_114 --> block_117

</pre>`;
window.traces["P3_FRONTIER"]["unlem_scheduler_ssa"] = ''
window.traces["P3_FRONTIER"]["unlem_scheduler_ssa"] += `<pre class=''>def c1 = pop_u32();
def c3 = pop_u32();
def c2 = pop_u32();
def arg__361 : u32 = 0;
def A = pop_u32();
def abs__367 = lift_u32(arg__361);
def B = pop_u32();
def q = U32_not_equals(c3, abs__367);
def mt__456 = U32_maybeTrue(q);
def mf__457 = U32_maybeFalse(q);
def mb__458 = bool.&&(mt__456, mf__457);
if (mb__458) {
	def merge__460 = merge(A, B);
} else {
	if (mt__456) {
	}
// phis: innerPhi__459 <- A; innerPhi__459 <- B; 
}
// phis: deep <- merge__460; deep <- innerPhi__459; 
def arg__359 : u32 = 0;
def arg__354 : u32 = 0;
def abs__366 = lift_u32(arg__359);
def N = bot_plus(deep, arg__354);
def r = U32_not_equals(c2, abs__366);
def mt__451 = U32_maybeTrue(r);
def mf__452 = U32_maybeFalse(r);
def mb__453 = bool.&&(mt__451, mf__452);
if (mb__453) {
	def merge__455 = merge(N, N);
} else {
	if (mt__451) {
	}
// phis: innerPhi__454 <- N; innerPhi__454 <- N; 
}
// phis: triv <- merge__455; triv <- innerPhi__454; 
def arg__349 : u32 = 1;
def arg__363 : u32 = 0;
def abs__365 = lift_u32(arg__349);
def abs__364 = lift_u32(arg__363);
def result__347 = U32_plus(A, abs__365);
def p = U32_not_equals(c1, abs__364);
def mt__446 = U32_maybeTrue(p);
def mf__447 = U32_maybeFalse(p);
def mb__448 = bool.&&(mt__446, mf__447);
if (mb__448) {
	def merge__450 = merge(triv, result__347);
} else {
	if (mt__446) {
	}
// phis: innerPhi__449 <- triv; innerPhi__449 <- result__347; 
}
// phis: result <- merge__450; result <- innerPhi__449; 
def eff__343 = push_u32(result);
</pre>`;
window.traces["P3_FRONTIER"]["unlem_scheduler_ssa_pretty"] = ''
window.traces["P3_FRONTIER"]["unlem_scheduler_ssa_pretty"] += `<pre class=''>def c1 = pop_u32();
def c3 = pop_u32();
def c2 = pop_u32();
def A = pop_u32();
def B = pop_u32();
def q = U32_not_equals(c3, lift_u32(0));
def mt = U32_maybeTrue(q);
def mf = U32_maybeFalse(q);
var deep: u32;
if (bool.&&(mt, mf)) {
	deep = merge(A, B);
} else {
	if (mt) {
		deep = A;
	} else {
		deep = B;
	}
}
def N = bot_plus(deep, 0);
def r = U32_not_equals(c2, lift_u32(0));
def mt1 = U32_maybeTrue(r);
def mf1 = U32_maybeFalse(r);
var triv: u32;
if (bool.&&(mt1, mf1)) {
	triv = merge(N, N);
} else {
	if (mt1) {
		triv = N;
	} else {
		triv = N;
	}
}
var result = U32_plus(A, lift_u32(1));
def p = U32_not_equals(c1, lift_u32(0));
def mt2 = U32_maybeTrue(p);
def mf2 = U32_maybeFalse(p);
if (bool.&&(mt2, mf2)) {
	result = merge(triv, result);
} else {
	if (mt2) {
	}
}
push_u32(result);
</pre>`;
