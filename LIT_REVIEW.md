# Literature Review: Sea of Nodes Scheduling and Related Work

## 1. Sea of Nodes and Global Code Motion

### The Original Papers

**Click & Paleczny, "A Simple Graph-Based Intermediate Representation" (1995, ACM SIGPLAN Workshop)**
Introduces the Sea of Nodes IR, where both data and control dependencies are represented as edges between nodes, with no explicit basic block structure. The key insight: by removing the fixed schedule, optimizations don't need to maintain a legal instruction ordering, which simplifies passes like GVN and constant folding.

**Click, "Global Code Motion / Global Value Numbering" (PLDI 1995)**
The companion paper on *scheduling* -- converting the unordered Sea back into a CFG. The GCM algorithm works in two phases:

1. **Schedule Early**: Move each node as high as possible -- to the shallowest block that dominates all its operands. This is a fixed point: process operands first, then place the node at the deepest dominator among its operands' positions.
2. **Schedule Late**: Move each node as low as possible -- to the deepest block that still dominates all its uses. The LCA (lowest common ancestor) of all use-blocks gives the latest legal position.
3. **Select**: Between the early and late bounds, pick the block with the shallowest loop nesting to minimize execution frequency.

Phi nodes get special treatment: a phi's operand is considered used at the *predecessor* block (not the phi's own block), because phi elimination inserts copies there.

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

### PDW γ vs Sea Phi: Same Primitive, Different Provenance

At the node level, PDW γ and Sea Phi are the same thing — flat `(condition, left, right)` selectors. The difference is how they get their conditions and what guarantees surround them.

**PDW γ**: Derived from SSA φ-functions by the φ-translation algorithm, which walks the CDG to find the correct predicates. The CDG serves as a "correctness certificate": each γ's predicate is guaranteed to be the right one, and the γ-tree nesting matches the control nesting. You can't have an ill-formed γ because the algorithm constructs it from known-correct control information.

**Sea Phi from SSAD**: Constructed directly from SSAD If expressions. The SSAD is itself a structured tree with explicit conditions, so phis inherit well-formedness from the SSAD structure. The condition of each phi is the condition of the enclosing If — guaranteed correct by construction.

**Sea Phi NOT from SSAD** (e.g., from transforms on an existing Sea): Here there is no CDG and no SSAD. The phis are "ungrounded" — they're dataflow selectors whose conditions were set by whatever transform created them, with no external structure validating them. The transform must maintain the invariants the scheduler relies on:

1. **Condition consistency**: If two phis share condition P, their left/right partitions must agree. That is, the set of nodes exclusively in the left subgraph of one phi must not conflict with the other phi's partitioning.
2. **Acyclic condition ordering**: The conditions across all phis must admit a topological ordering (the BranchLattice ordering). If phi(P) depends on phi(Q) which depends on phi(P), there's no valid nesting.
3. **Well-formed subgraph partition**: For each phi, `branch_partition` must produce a valid frontier/left/right decomposition — no node can be exclusively in both the left and right subgraphs.

When these hold, a transformed Sea's phis are equivalent to PDW γ-functions or SSAD-derived phis. When they don't, the Sea is ill-formed and may not be schedulable. The φ-translation algorithm can't produce ill-formed γ's because it derives them from a CDG; SSAD can't produce ill-formed phis because of its tree structure. A raw Sea has no such safety net.

This is the central open question for Sea-as-general-IR: what is the minimal set of well-formedness conditions on phis that guarantees schedulability, independent of how the Sea was produced?

## 4. Bracevac et al.: Graph IRs for Impure Higher-Order Languages

**Bracevac, Wei, Jia, Abeysinghe, Jiang, Bao & Rompf, "Graph IRs for Impure Higher-Order Languages: Making Aggressive Optimizations Affordable with Precise Effect Dependencies" (OOPSLA 2023)**

### Core Contribution

A formal framework (λ\*\_G) for graph IRs that handles impure higher-order programs. The key insight: use *reachability types* and a simple *effect system* to statically determine the precise dependency edges needed in the graph IR. This lets you build a Sea-of-Nodes-like IR for functional languages with effects, where the effect dependencies are synthesized from types rather than hand-maintained.

### Relationship to Sea of Nodes

The paper is directly inspired by Sea of Nodes and Scala LMS (which also uses a Sea-of-Nodes-like graph IR). The λ\*\_G IR is essentially a typed, effect-aware generalization of Sea of Nodes for higher-order languages. Graph reachability corresponds to DCE; hash-consing gives CSE.

### Effect System and Dependencies

Effects are tracked per-operation and induce dependency edges:
- **Reads and writes** create hard and soft dependencies respectively
- Hard dependency: B must execute before A (A reads what B writes)
- Soft dependency: B should not be scheduled after A (anti-dependence), but B might not be scheduled at all

This is very close to our `reads`/`writes` on `StateComponent`, but formalized with types. The paper shows that static reachability types can precisely determine which effects alias, enabling more aggressive code motion than conservative approaches.

### Scheduling / Code Generation

The paper includes a code generation algorithm (building on Scala LMS's scheduler) that converts the graph IR back to sequential code. It uses a code motion algorithm that classifies dependencies as "hot" (frequently executed) or "cold" (conditional), and iteratively assigns statements to nesting levels while respecting ordering and containment constraints.

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
