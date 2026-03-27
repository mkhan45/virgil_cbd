# Literature Review: Sea of Nodes Scheduling and Related Work

## 1. Sea of Nodes, Sea of Variables, and Global Code Motion

### Our IR: A Sea of Variables

Our IR is a **Sea of Variables** — a completely flat dataflow graph with no control structure at all. Every node is a value binding (Intrinsic, Lit, Phi, StatePhi). There are no control nodes (no Region, If, Jump, Return), no control edges, no regions or scoping boundaries, and no containment hierarchy. Control flow is entirely emergent — discovered from the dataflow by `branch_partition` and materialized by the scheduler into ScheduleBlocks/ScheduleBranches.

This is structurally distinct from Click's Sea of Nodes and every other IR in this review. The key differences from Click's Sea of Nodes:

| | Click's Sea of Nodes | Our Sea of Variables |
|---|---|---|
| Control nodes | Region, If, Return, etc. form a CFG skeleton | None — no control structure in the IR |
| Control edges | Explicit edges pin effectful ops to control points | None — pinning is via state_deps chains |
| Phi attachment | Phis attached to Region (merge) control nodes | Phis are free-floating dataflow selectors |
| Scheduling | GCM assigns floating nodes to existing control points | Scheduler creates control structure from scratch |
| Effect handling | Control + effect chains (parallel) | State_deps only (unified) |

The lack of control nodes is what makes ours a Sea of *Variables* rather than a Sea of *Nodes*: each IRNode represents a named value binding from the SSAD, not an operation pinned to a control point. The entire graph is data/state dependencies; the scheduler must discover and create all control structure.

### Click's Original Papers

**Click & Paleczny, "A Simple Graph-Based Intermediate Representation" (1995, ACM SIGPLAN Workshop)**
Introduces the Sea of Nodes IR, where both data and control dependencies are represented as edges between nodes, with no explicit basic block structure. The key insight: by removing the fixed schedule, optimizations don't need to maintain a legal instruction ordering, which simplifies passes like GVN and constant folding. Note: Click's IR retains control nodes — it removes basic *blocks* but keeps control *flow* as explicit nodes and edges. Our Sea of Variables goes further, removing control nodes entirely.

**Click, "Global Code Motion / Global Value Numbering" (PLDI 1995)**
The companion paper on *scheduling* -- converting the unordered Sea back into a CFG. The GCM algorithm works in two phases:

1. **Schedule Early**: Move each node as high as possible -- to the shallowest block that dominates all its operands. This is a fixed point: process operands first, then place the node at the deepest dominator among its operands' positions.
2. **Schedule Late**: Move each node as low as possible -- to the deepest block that still dominates all its uses. The LCA (lowest common ancestor) of all use-blocks gives the latest legal position.
3. **Select**: Between the early and late bounds, pick the block with the shallowest loop nesting to minimize execution frequency.

Phi nodes get special treatment: a phi's operand is considered used at the *predecessor* block (not the phi's own block), because phi elimination inserts copies there.

GCM presupposes a control skeleton (Region, If nodes) that defines the set of possible blocks. Our scheduler has no such skeleton — it builds the block structure (ScheduleBlock, ScheduleBranch, CFGPhi) as it schedules, discovering the nesting from `branch_partition` and BranchLattice ordering.

**What GCM does NOT do**: The paper doesn't discuss *cloning* or *duplication* of nodes. If a pure computation is used in two branches, GCM hoists it to their common dominator. This can slow down paths that don't need the value. The paper treats this as acceptable.

### Graal (Oracle, 2013-)

Graal is the most mature modern Sea of Nodes compiler. Key papers:

- **Duboscq et al., "An Intermediate Representation for Speculative Optimizations in a Dynamic Compiler" (VMIL 2013)** -- Graal's IR design.
- **Stadler, Würthinger & Mössenböck, "Partial Escape Analysis and Scalar Replacement for Java" (CGO 2014)** -- Demonstrates branch-sensitive optimization in Sea of Nodes: objects are only materialized on branches where they actually escape. This is conceptually related to our `untangle`: it's a per-branch duplication/specialization of shared state.

Graal's scheduler follows Click's GCM but extends it with heuristics for speculative optimizations and deoptimization points.

### V8 TurboFan / Turboshaft (Google, 2015-2025)

**"Land ahoy: leaving the Sea of Nodes" (V8 blog, 2025)**
V8's experience report on *abandoning* Sea of Nodes after 10 years. Key observations:

- **Scheduling is the central pain point.** "Eventually, all instructions must be scheduled to generate assembly code." The theory is that each instruction goes after its value, control, and effect inputs, but in practice this is fragile.
- **The duplication problem.** Pure operations that were deduplicated (by GVN/CSE) float to the common dominator of their users, "slowing down many paths that don't need them." TurboFan's scheduler tries to *re-duplicate* these instructions so they only appear on paths that need them. This creates a cycle: two divisions -> optimize to one -> re-duplicate back to two.
- **Effect chains are error-prone.** Managing parallel effect and control chains led to "many subtle bugs" taking months to discover.
- **Turboshaft (CFG IR)**: Compile time halved. "Only pure nodes actually float freely; effectful nodes end up constrained to basic blocks." Much simpler to reason about.

**Relevance to our scheduler**: V8's experience validates that the scheduling + duplication problem is genuinely hard. Our `untangle` step is doing exactly what TurboFan's scheduler tries to do -- cloning shared subgraphs so each branch has its own copy. The difference is that we do it as an explicit graph transformation before scheduling, rather than as a scheduling heuristic.

V8's pain points also illuminate why our Sea of Variables approach avoids some of their problems. Their "parallel effect and control chains" led to "many subtle bugs" — we have only state_deps chains, with no separate control chain to keep in sync. Their scheduling was fragile because floating nodes had to be placed relative to an existing control skeleton — our scheduler builds the control structure from scratch, avoiding mismatches between the control skeleton and the data dependencies.

## 2. VSDG, RVSDG, and Cross-Condition Dependencies

### The VSDG

**Johnson & Mycroft, "Combined Code Motion and Register Allocation Using the Value State Dependence Graph" (CC 2003)**
**Lawrence, "Optimizing Compilation with the Value State Dependence Graph" (Cambridge TR-705, 2007)**

The VSDG (Value State Dependence Graph) is a dependence graph IR with:
- **Gamma nodes** (γ): structured conditionals. `gamma(predicate, true_val, false_val) -> result`.
- **Theta nodes** (θ): tail-controlled loops (do-while).
- **State edges**: serialize effectful operations (memory, I/O), similar to our `state_deps`.

The critical distinction from our Sea: **gamma nodes are structured control flow**. A gamma represents a complete if-then-else. All nodes that are conditioned on a predicate must be either *inside* a gamma's branch or *outside* it entirely. Gammas prescribe a nesting of conditions at IR construction time.

### The Cross-Condition Problem (Section 5.2(a) of Lawrence)

Lawrence identifies a program that the VSDG cannot represent without duplication. In SSA form:

```
t1 = phi(P, X, Y)    -- select input based on P
rO = op(t1)           -- apply op to selected value
r1 = phi(Q, rO, Z)   -- select output based on Q
```

The natural CFG is:
```
if (Q) {
    if (P) { t1 = X } else { t1 = Y }
    r1 = op(t1)
} else {
    r1 = Z
}
```

Here `op` spans two different conditions: its *input* is conditioned on P, its *use* is conditioned on Q. The VSDG's gamma nodes force a choice:

- `op` can't be inside `gamma(P)` because its result feeds into `gamma(Q)`, a separate structural node
- `op` can't be inside `gamma(Q)` because its input comes from `gamma(P)`, which would need to be nested inside `gamma(Q)`'s true branch -- but `gamma(P)` is its own top-level structural node
- `op` can't be between the two gammas because that makes it unconditional (runs even on the Q-false path where we take Z)

Lawrence shows two VSDG workarounds (Figure 5.3), both lossy:
- **(a) Duplicate `op`**: Place a copy of `op` inside each gamma branch. Correct but increases code size and may duplicate effects.
- **(b) Duplicate the test**: Introduce an extra gamma node (effectively re-testing a condition). Correct but adds runtime overhead.

The root cause: **VSDG gamma nodes prescribe control flow nesting at IR construction time.** When an operation's data flow crosses two conditions (P and Q) that aren't nested in the right order, no nesting of gammas can accommodate it without duplication.

### How the Sea Handles This Trivially

In our Sea, phis are flat dataflow nodes with no scoping implications:

```
phi(P, X, Y) -> op -> phi(Q, _, Z)
```

The graph is just the SSA. No nesting is prescribed. The **scheduler** determines the nesting at scheduling time: it sees that `op` and `phi(P)` are in `phi(Q)`'s left subgraph (reachable from the left branch of `phi(Q)` but not from the right where Z lives), and produces the correct nested CFG:

```
if (Q) {
    if (P) { t1 = X } else { t1 = Y }
    r1 = op(t1)
} else {
    r1 = Z
}
```

The scheduler discovered that Q should be the outer condition and P should nest inside it. This is exactly what `branch_partition` computes: for `phi(Q)`, the left subgraph contains both `op` and `phi(P)`, and the right subgraph contains just Z.

### The RVSDG: Same Problem, Same Workarounds

**Reissmann, Meyer & Bahmann, "RVSDG: An Intermediate Representation for Optimizing Compilers" (ACM TECS 2020)**

The RVSDG (Regionalized VSDG) adds *regions* to gamma nodes -- operations inside a region can only execute when that region is active, which makes effects safe by construction. But it inherits the VSDG's structural nesting problem: gamma nodes are still structured control flow, and 5.2(a) still requires duplication.

### The Sea's Advantage: Deferred Nesting

The key insight: **deferring control flow nesting to the scheduler lets the Sea represent cross-condition dependencies that structured IRs (VSDG, RVSDG) cannot represent without duplication.**

| | VSDG/RVSDG | Sea |
|---|---|---|
| Conditionals | Structured (gamma with fixed nesting) | Flat (phi as dataflow node) |
| 5.2(a) pattern | Requires duplication of op or test | Represented directly |
| Nesting order | Fixed at IR construction | Discovered by scheduler |
| Effect safety | RVSDG: by construction. VSDG: not guaranteed | By scheduler + checker |

Our scheduler's `untangle` + `branch_partition` + BranchLattice grouping is the mechanism that discovers the right nesting at scheduling time. This is strictly more expressive than the VSDG/RVSDG approach for acyclic control flow.

The PBT effort should verify this: that for every valid Sea (including cross-condition patterns like 5.2(a)), the scheduler produces a CFG where (a) effects are correctly guarded and (b) no unnecessary duplication is introduced.

## 3. The Program Dependence Web: Flat Gating Functions

**Ballance, Maccabe & Ottenstein, "The Program Dependence Web: A Representation Supporting Control-, Data-, and Demand-Driven Interpretation of Imperative Languages" (PLDI 1990)**

### Core Idea

The PDW extends the Program Dependence Graph (PDG) with explicit value-routing operators so the same representation supports control-driven, data-driven, and demand-driven interpretation. Translation pipeline: Source → SSA-form PDG → GSA-form PDG (via φ-translation) → PDW (via switch placement).

### Gating Functions (GSA = Gated Single Assignment)

The PDW replaces plain SSA φ-functions with *gating functions* that carry explicit control information:

- **γ(P, v_true, v_false)**: Forward conditional flow, strict only in predicate P. Semantically `if P then v_true else v_false`.
- **μ(P, v_init, v_iter)**: Loop-carried values. Returns v_init on first iteration, v_iter on subsequent.
- **η(P, v)**: Loop exit. Passes v out when loop terminates.

Additionally, **switches** `S(p, v)` with T/F output ports control value flow *into* control regions, complementing γ-functions which control flow *out*.

### φ-Translation: Discovering the Gating Structure

The paper's central algorithm converts SSA φ-functions into trees of γ/μ nodes by analyzing the control dependence graph (CDG):

1. Compute the **data constraint subgraph** DCS(n_φ) — the CDG nodes that control the φ's arguments
2. Compute the **control constraint subgraph** CCS(n_φ) — CDG nodes that control the φ itself
3. Walk DCS backwards, building "gate subtrees" at **def confluence points** — predicates that control 2+ definitions reaching the same φ
4. The result is a nested γ-tree that correctly factors the original φ into predicate-controlled selections

For example, `φ(X1, X2, X3)` controlled by predicates P and Q might become `γ(P, γ(Q, X2, X1), X3)`. The algorithm discovers which predicate is outer (P) and which is inner (Q) from the CDG structure. Crucially, this handles cross-condition cases (Lawrence 5.2(a)) naturally — the CDG walk finds the correct nesting without requiring duplication.

Complexity: O(PE) worst case (P = φ-functions, E = CDG edges), expected O(P) since CDG depth is typically bounded.

### Switch Placement ≈ Untangle

The PDW's switch placement step solves the same fundamental problem as our `untangle`: given flat gating functions, determine which computations belong in which branch and route values accordingly.

| | PDW | Sea |
|---|---|---|
| Problem | Values cross region boundaries | Subgraphs shared between phi branches |
| Solution | Insert switches on boundary-crossing data edges | Clone branch-exclusive subgraphs, insert Moves |
| Trigger | Data edge from region R1 to nested region R2 | Node in l_subgraph or r_subgraph (not frontier) |
| Iteration | Breadth-first over CDG region nodes | Topological order over BranchLattice conditions |

Both take a flat dataflow graph with explicit selectors and add the routing needed for branch-aware evaluation.

### Structured vs. Flat Gating: The Fundamental Distinction

VSDG gamma nodes and PDW γ / Sea Phi look similar at first — both select between two values based on a predicate. But they are fundamentally different kinds of construct:

**Structured (VSDG gamma)**: A gamma node is a *region boundary*. It *contains* two sub-graphs (then/else bodies) that are lexically scoped. Values cross gamma boundaries only through explicit input/output ports. The nesting of gammas is fixed at construction time and determines evaluation order. An operation cannot "span" two gammas — it must live inside one gamma or outside all of them. This is why 5.2(a) requires duplication.

**Flat (PDW γ / Sea Phi)**: A γ/Phi is just a regular node with three inputs: condition, left value, right value. There are no regions, no scoping, no containment. Any node can depend on any other node via ordinary data edges, regardless of which conditions they're associated with. The nesting of conditions is not prescribed in the graph — it's discovered later by switch placement (PDW) or scheduling (Sea).

The distinction is about **when scope is determined**:
- Structured: scope is fixed at IR construction time. Compositional and easy to reason about, but less expressive.
- Flat: scope is discovered at scheduling/code-generation time. More expressive, but requires a non-trivial algorithm (`untangle`, switch placement) to recover the nesting.

This is why the PDW and Sea can represent 5.2(a) directly while the VSDG cannot: `phi(P, X, Y) → op → phi(Q, _, Z)` is just three nodes with data edges. No scoping decision has been made. The scheduler discovers that Q should be outer and P should nest inside Q's true branch.

### PDW γ vs Sea Phi: Same Primitive, Different Context

At the node level, PDW γ and Sea Phi are the same thing — flat `(condition, left, right)` selectors. But the surrounding context is fundamentally different.

**PDW γ** exists within a richer infrastructure: the PDW retains CDG-derived structure, has explicit switch nodes for value routing at scope boundaries, and supports μ/η nodes for loops. The φ-translation algorithm walks the CDG to find correct predicates, providing a "correctness certificate" — each γ's predicate is guaranteed correct, and γ-tree nesting matches the control nesting. The CDG is a structural artifact that the PDW carries alongside its flat γ-functions.

**Sea Phi** exists in a completely flat graph with no CDG, no switch nodes, no structural artifacts whatsoever. The Sea is just a dataflow graph — it doesn't know or care how it was constructed. The scheduler operates on the graph structure alone, discovering control flow nesting from `branch_partition` and BranchLattice ordering. A Sea could be constructed from SSAD (our current pipeline), from a CDG (like the PDW's φ-translation), from direct graph construction, or from transforms on an existing Sea. The IR itself is agnostic to its construction method.

Different construction methods provide different well-formedness guarantees:

**Sea from SSAD**: Phis inherit well-formedness from the SSAD's tree structure. The condition of each phi is the condition of the enclosing If — guaranteed correct by construction.

**Sea from CDG** (hypothetical): A φ-translation algorithm targeting the Sea would provide the same correctness certificates as the PDW's construction. The Sea's flat structure can represent anything the PDW can for acyclic control flow.

**Sea from transforms**: No external structure validates the phis. The transform must maintain the invariants the scheduler relies on:

1. **Condition consistency**: If two phis share condition P, their left/right partitions must agree. That is, the set of nodes exclusively in the left subgraph of one phi must not conflict with the other phi's partitioning.
2. **Acyclic condition ordering**: The conditions across all phis must admit a topological ordering (the BranchLattice ordering). If phi(P) depends on phi(Q) which depends on phi(P), there's no valid nesting.
3. **Well-formed subgraph partition**: For each phi, `branch_partition` must produce a valid frontier/left/right decomposition — no node can be exclusively in both the left and right subgraphs.
4. **Sealed branches**: Every forward path from a branch-exclusive effectful node to a post-merge consumer must pass through a Phi/StatePhi boundary (see LINEARITY_INVARIANT.md).

When these hold, a Sea's phis are equivalent to PDW γ-functions regardless of construction method. When they don't, the Sea is ill-formed and may not be schedulable. The PDW's φ-translation algorithm can't produce ill-formed γ's because it derives them from a CDG; SSAD can't produce ill-formed phis because of its tree structure. A raw Sea has no such safety net — the invariants must be maintained by whatever constructs or transforms the graph.

The PDW's advantages over the Sea are at the IR level, not the construction level: μ/η nodes for loops and switch nodes for explicit value routing. Our Sea currently has no loop construct and only binary phis (the `Match` SSAD case is not yet implemented). For acyclic binary control flow, the Sea is as general as the PDW.

## 4. Bracevac et al.: Graph IRs for Impure Higher-Order Languages

**Bracevac, Wei, Jia, Abeysinghe, Jiang, Bao & Rompf, "Graph IRs for Impure Higher-Order Languages: Making Aggressive Optimizations Affordable with Precise Effect Dependencies" (OOPSLA 2023)**

### Core Contribution

A formal framework (λ\*\_G) for graph IRs that handles impure higher-order programs. The key insight: use *reachability types* and a simple *effect system* to statically determine the precise dependency edges needed in the graph IR. This lets you build a Sea-of-Nodes-like IR for functional languages with effects, where the effect dependencies are synthesized from types rather than hand-maintained.

### Relationship to Sea of Nodes and Our Sea of Variables

The paper is directly inspired by Click's Sea of Nodes and Scala LMS (which also uses a Sea-of-Nodes-like graph IR). The λ\*\_G IR is essentially a typed, effect-aware generalization of Sea of Nodes for higher-order languages. Graph reachability corresponds to DCE; hash-consing gives CSE.

However, λ\*\_G is structurally different from both Click's Sea of Nodes and our Sea of Variables. Lambda abstractions create **scopes** — nodes inside a lambda body are contained within that scope and cannot float out. This gives the IR a hierarchical structure (nested lambdas = nested scopes) similar to RVSDG regions, but arising from function abstraction rather than control flow constructs. The scoping constrains code motion — operations at deeper nesting levels are "inside" operations at shallower levels, and the code generation algorithm assigns statements to nesting levels while respecting containment constraints.

Our Sea of Variables is completely flat — no scoping, no containment, no hierarchy. For single-procedure first-order programs, this difference doesn't matter. But λ\*\_G's scoping preserves information about function boundaries that our flat Sea would lose if function bodies were inlined. For higher-order programs where scope boundaries guide optimization (partial evaluation, specialization, precise effect isolation between function bodies), this is a genuine structural advantage.

### Effect System and Dependencies

Effects are tracked per-operation and induce dependency edges:
- **Reads and writes** create hard and soft dependencies respectively
- Hard dependency: B must execute before A (A reads what B writes)
- Soft dependency: B should not be scheduled after A (anti-dependence), but B might not be scheduled at all

The effect system uses *reachability types* to determine precisely which effects alias. Two memory operations that access provably-disjoint regions have no dependency edge between them. This is fundamentally more precise than our `reads`/`writes` on `StateComponent` — our Sea serializes all memory operations through the single `Memory` state component, even when they access different addresses. This creates unnecessary ordering constraints. The difference is about effect system granularity: λ\*\_G's aliasing precision could in principle be added to the Sea (via finer state components) without changing the graph structure.

### Scheduling / Code Generation

The paper includes a code generation algorithm (building on Scala LMS's scheduler) that converts the graph IR back to sequential code. It uses a code motion algorithm that classifies dependencies as "hot" (frequently executed) or "cold" (conditional), and iteratively assigns statements to nesting levels while respecting ordering and containment constraints. The nesting levels come from lambda scopes — the hierarchical structure that our flat Sea lacks.

### What It Doesn't Address

The paper focuses on *correctness of the IR representation* and *optimization soundness*, not on the scheduling/duplication problem. It doesn't discuss cloning shared subgraphs between branches or anything analogous to our `untangle`. The code generation is relatively straightforward -- it doesn't handle the case where a shared pure computation should be duplicated into branches rather than hoisted.

## 5. E-Graphs and the Extraction Problem

### Background

**Willsey, Nandi, Wang, Flatt, Tatlock & Panchekha, "egg: Fast and Extensible Equality Saturation" (POPL 2021)**

E-graphs represent equivalence classes of terms. Equality saturation applies rewrite rules to exhaustion, then *extracts* an optimal concrete program from the e-graph. The extraction problem is:

> Given an e-graph (a compact representation of many equivalent programs), select one concrete program that minimizes a cost function.

### Extraction as Scheduling

There's a structural analogy between e-graph extraction and Sea of Nodes scheduling:

| E-graph | Sea of Nodes |
|---------|-------------|
| E-class (set of equivalent terms) | Node (single operation) |
| Extraction (pick one term per e-class) | Scheduling (assign each node to a block) |
| DAG cost model (shared subexpressions) | Shared subgraphs between branches |
| Cost function | Loop nesting / execution frequency |

The analogy is imperfect: e-graphs represent *alternative* implementations of the same value, while Sea of Nodes represents a *single* program with floating node placement. But the DAG extraction problem -- selecting terms while accounting for shared subexpressions -- is structurally similar to the problem of scheduling shared computations across branches.

### DAG Extraction is NP-Hard

**Key result**: E-graph extraction with DAG cost models (where shared subexpressions are counted once) is NP-hard, via reduction from minimal set cover. There is no constant-factor polynomial-time approximation unless P=NP.

This is relevant because our `untangle` step faces a related combinatorial problem: deciding which shared subgraph nodes to clone into branches vs. keep in the frontier. The optimal partition minimizes total work across all execution paths -- a DAG-cost-like objective.

### Cranelift's Aegraphs

**Fallin, "Aegraphs: Acyclic E-graphs for Cranelift" (EGRAPHS 2023)**

Cranelift (the Wasmtime compiler) uses an "acyclic e-graph" as its mid-end optimization IR. Key design decisions relevant to us:

- **Side-effect skeleton**: A reduced CFG containing only effectful instructions in their original order. Pure operations float above this skeleton. This is essentially the same distinction we make between value deps (pure) and state deps (effectful).
- **Scoped elaboration**: The extraction/scheduling algorithm. Traverses the dominator tree in preorder, materializing values "as low as possible." Uses a scoped hashmap so computed values are only visible in dominated blocks. This subsumes GVN, LICM, and rematerialization as byproducts.
- **Rematerialization as policy**: The system can *suppress* memoized values, forcing re-computation of cheap operations (constants, simple binary ops) at each use site. This is controlled duplication -- choosing to re-execute rather than hoist.
- **No explicit cloning/untangling**: Cranelift doesn't clone subgraphs between branches. Instead, scoped elaboration naturally handles it: if a value is only needed in one branch, it's materialized there. If needed in both, it's materialized at their common dominator. The "partial deadness" problem (value computed at the dominator but only used on some paths) is addressed by rematerialization policy, not by cloning.

**Relevance**: Cranelift's approach is the main alternative to our `untangle`. Instead of cloning shared subgraphs, it accepts that shared values live at the dominator and uses rematerialization to mitigate the cost. Our approach is more aggressive -- we actually duplicate the subgraph so each branch is independent. The tradeoff: our approach can produce better code (no unnecessary computation on cold paths) but increases IR size.

## 6. LMS and Effect Handling in Graph IRs

**Rompf & Odersky, "Lightweight Modular Staging" (2010-2013)**

LMS uses a graph IR with the overall structure of a Sea of Nodes. Its effect system is particularly relevant:

- **Reflect nodes** make effects explicit in the graph
- Effects are classified into reads and writes at specific allocation sites
- **Hard dependencies** (`syms`): value flow, must be serialized
- **Soft dependencies** (`softSyms`): anti-dependencies, prevent reordering but don't force scheduling
- **Nesting** (`boundSyms`): containment constraints (loop bodies, etc.)

LMS's code motion algorithm handles shared subexpressions across branches:
- Hash-consing during construction provides CSE: "structurally equivalent definitions return existing symbols, possibly moving the definition to a parent scope"
- Controlled duplication: a value "used only in conditionals but in different conditionals" gets duplicated into each branch
- Hot/cold path analysis guides placement decisions

**RandIR (Ofenbeck, Rompf & Püschel, Scala 2016)**: Differential testing for LMS's embedded compilers. Generates random IR instances from a typed grammar of operations, tests by comparing outputs across backends. Includes automatic shrinking of failing cases. Directly relevant to our PBT approach -- it's essentially Approach A (random program generation) applied to a graph IR compiler.

## 7. Substructural Types and State

**Wadler, "Linear Types Can Change the World!" (1990)**: The foundational observation that linear types enable safe in-place mutation in functional settings. A linearly-typed value must be used exactly once -- no implicit copying.

This is directly relevant to our copyable vs. non-copyable state design:
- **Linear state** (non-copyable): Memory, I/O. Must flow through exactly one path. The scheduler must use branches to avoid re-executing effects.
- **Unrestricted state** (copyable): Counters, flags. Can be freely duplicated. The scheduler may clone operations on this state.

No existing compiler IR that I found uses substructural types to *guide scheduling decisions* specifically. MLIR has a side-effect interface that classifies operations as pure/read/write, but it's used for legality checking, not for deciding whether to clone. Rust's ownership model enforces linearity at the source level but this information is erased before LLVM IR.

**The gap**: There appears to be no prior work that combines (a) Sea-of-Nodes-style graph IR, (b) substructural type annotations on state components, and (c) a scheduler that uses these annotations to decide cloning vs. branching strategies. This is the novel direction our work could explore.

## 8. Compiler Testing

**Yang, Chen, Eide & Regehr, "Finding and Understanding Bugs in C Compilers" (PLDI 2011)**: CSmith generates random C programs (40K+ lines of handwritten C++ generator) to test GCC and LLVM. Found hundreds of bugs. The key technique: generate programs with defined behavior, compile with multiple compilers, compare outputs.

**Le, Afshari & Su, "Compiler Validation via Equivalence Modulo Inputs" (PLDI 2014)**: EMI testing. Given a program and a test input, mutate dead code (code not executed on that input) to produce equivalent programs. Compile all variants, run on the same input, compare. Found 147 bugs in GCC/LLVM in 11 months. More effective at finding miscompilations than CSmith.

**Ofenbeck, Rompf & Püschel, "RandIR: Differential Testing for Embedded Compilers" (Scala 2016)**: As noted above -- random IR generation with automatic shrinking. The most directly relevant prior work to our PBT plan.

**Chen et al., "An Empirical Comparison of Compiler Testing Techniques" (ICSE 2016)**: Compares CSmith, EMI, and other approaches. Finds they are complementary -- different techniques find different bug classes.

## 9. Does Anything Do What `untangle` Does?

**Short answer: not exactly.** The closest things are:

1. **V8 TurboFan's scheduler duplication heuristic**: Re-duplicates shared pure computations into the branches that need them. But this is a scheduling-time heuristic, not an explicit graph transformation. And V8 abandoned it as too complex.

2. **Graal's partial escape analysis**: Duplicates object materializations into branches. Conceptually similar (per-branch specialization of shared state), but operates at a different abstraction level (object allocation, not arbitrary graph nodes).

3. **Cranelift's rematerialization**: Re-computes cheap values at use sites instead of hoisting. Addresses the same problem (shared values on cold paths) but with the opposite strategy -- re-compute rather than clone.

4. **Tail duplication in traditional compilers**: Duplicates code at control flow merges to enable per-path optimization. Related in spirit (duplicate to specialize per branch) but operates on CFG blocks, not graph subexpressions.

5. **LMS's conditional duplication**: Duplicates values "used only in conditionals but in different conditionals." The closest match, but appears to be a simple heuristic rather than the systematic subgraph cloning that `untangle` performs.

**What's novel about `untangle`**: It's a systematic, pre-scheduling graph transformation that:
- Partitions the dependency graph into frontier (shared), left-subgraph, and right-subgraph
- Clones the branch-exclusive subgraphs so each phi gets independent copies
- Iterates across all branch conditions in topological order
- Handles nested conditions via BranchLattice merging

This is more principled than the ad-hoc duplication heuristics used by other compilers. The closest conceptual framework is the e-graph extraction problem (selecting a concrete program from a shared representation), but `untangle` operates on a different data structure and solves a different variant of the problem.

## 10. Comparative Expressiveness: Sea of Variables vs. Other IRs

For acyclic binary control flow, no IR in this review represents any program better than the Sea of Variables. The Sea handles the cross-condition pattern (5.2(a)) that structured IRs (VSDG, RVSDG) cannot represent without duplication, and is as expressive as the PDW's flat γ-functions.

The structural differences between our Sea and other IRs are about **hierarchy vs. flatness**, not about which programs can be represented:

| IR | Hierarchy mechanism | What it provides | Sea equivalent |
|---|---|---|---|
| Click's Sea of Nodes | Control nodes (Region, If) | Explicit control skeleton; effects pinned to control points | State_deps chains; scheduler creates control structure |
| RVSDG | Regions inside gamma/theta | Effect safety by construction; structured scoping | Sealed branches invariant; scheduler discovers scoping |
| Bracevac λ\*\_G | Lambda scopes | Containment for higher-order programs; precise nesting levels | No equivalent — Sea is flat by design |
| PDW | CDG + switch nodes | Correctness certificates from CDG; explicit value routing | branch_partition + Moves; well-formedness invariants |

Every other IR has some form of containment hierarchy. Our Sea has none — it is entirely flat. This flatness is a strength (maximum scheduling flexibility, no fixed nesting to maintain, no control skeleton to keep in sync with data flow) and a responsibility (well-formedness invariants must be maintained manually rather than enforced structurally).

### What the Sea lacks at the IR level

- **Loop constructs**: VSDG theta nodes, PDW μ/η, RVSDG theta regions. The Sea currently has no loop representation.
- **N-way branching**: Click's SoN switch nodes, RVSDG gamma with N regions. The Sea has only binary Phi/StatePhi. The `Match` SSAD case is not yet implemented.
- **Scope containment**: Bracevac's lambda scopes, RVSDG regions. The Sea is flat by design. For higher-order programs where scope boundaries guide optimization, this would be a genuine limitation.

These are features that could be added without changing the Sea's fundamental character (flat dataflow with deferred nesting). The core insight — that control flow nesting should be discovered by the scheduler rather than prescribed in the IR — is orthogonal to whether the IR supports loops or N-way branches.

### What the Sea gains from flatness

The Sea's complete lack of hierarchy is what enables the cross-condition representation advantage. In every hierarchical IR, condition scopes must form a laminar family (any two scopes are either disjoint or one contains the other). The Sea's flat phis allow non-laminar condition scopes, which `branch_partition` and `untangle` resolve at scheduling time. This is strictly more expressive for acyclic control flow: any laminar scoping is a special case of the Sea's unrestricted scoping.

The tradeoff: hierarchical IRs get structural safety guarantees for free (the RVSDG can't represent an ill-formed nesting because regions enforce it). The Sea must maintain equivalent guarantees through invariants — acyclicity, sealed branches (see LINEARITY_INVARIANT.md), condition consistency. These invariants are guaranteed by construction from SSAD but fragile under raw transforms.

## References

- Ballance, Maccabe & Ottenstein, ["The Program Dependence Web"](https://dl.acm.org/doi/10.1145/93548.93578) (PLDI 1990)
- Lawrence, ["Optimizing Compilation with the Value State Dependence Graph"](https://www.cl.cam.ac.uk/techreports/UCAM-CL-TR-705.pdf) (Cambridge TR-705, 2007)
- Reissmann, Meyer & Bahmann, ["RVSDG: An Intermediate Representation for Optimizing Compilers"](https://www.sjalander.com/research/pdf/sjalander-tecs2020.pdf) (ACM TECS 2020)
- Johnson & Mycroft, ["Combined Code Motion and Register Allocation Using the Value State Dependence Graph"](https://link.springer.com/chapter/10.1007/3-540-36579-6_1) (CC 2003)
- Click & Paleczny, "A Simple Graph-Based Intermediate Representation" (1995)
- Click, ["Global Code Motion / Global Value Numbering"](https://dl.acm.org/doi/10.1145/207110.207154) (PLDI 1995)
- Bracevac et al., ["Graph IRs for Impure Higher-Order Languages"](https://dl.acm.org/doi/10.1145/3622813) (OOPSLA 2023)
- V8 Team, ["Land ahoy: leaving the Sea of Nodes"](https://v8.dev/blog/leaving-the-sea-of-nodes) (2025)
- Willsey et al., ["egg: Fast and Extensible Equality Saturation"](https://arxiv.org/pdf/2004.03082) (POPL 2021)
- Fallin, ["Aegraphs: Acyclic E-graphs for Cranelift"](https://github.com/bytecodealliance/rfcs/blob/main/accepted/cranelift-egraph.md) (EGRAPHS 2023)
- Stadler et al., ["Partial Escape Analysis and Scalar Replacement for Java"](https://ssw.jku.at/Research/Papers/Stadler14/Stadler2014-CGO-PEA.pdf) (CGO 2014)
- Rompf & Odersky, "Lightweight Modular Staging" (GPCE 2010)
- Ofenbeck, Rompf & Püschel, ["RandIR: Differential Testing for Embedded Compilers"](https://www.cs.purdue.edu/homes/rompf/papers/ofenbeck-scala16.pdf) (Scala 2016)
- Yang et al., "Finding and Understanding Bugs in C Compilers" (PLDI 2011)
- Le et al., ["Compiler Validation via Equivalence Modulo Inputs"](https://dl.acm.org/doi/10.1145/2594291.2594334) (PLDI 2014)
- [Notes on the scheduling and extraction problems of EqSat](https://effect.systems/blog/eqsat-schedule-extract-notes.html)
