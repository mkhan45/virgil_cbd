  ---
  Analysis: Is BRANCH_LATTICE_FIX the right fix?

  Short answer: the diagnosis is partially correct, but the proposed scope-signature mechanism has a critical flaw. It won't solve the primary
  failing case.

  The critical flaw in the scope-signature approach

  The core proposal is: key lattices by (condition, scope_signature) where the signature classifies each phi as outside/left/right/shared relative
  to every existing lattice.

  I traced through the SAME_SCOPE_Q_ON_BOTH_P_SIDES case after unLEM to check whether this actually works.

  After unLEM, the p-phi becomes:
  p-phi(and(mT(p), mF(p)),
        merge(L_orig, R_orig),           ← "can't determine" branch
        innerPhi(mT(p), L_orig, R_orig)) ← "probably true" branch

  Both branches contain L_orig and R_orig as deps. This means every node in both original subtrees ends up in both l_full and r_full of the
  rewritten p-phi's partition.

  Specifically, both q-phi1 (originally in p-left) and q-phi2 (originally in p-right) end up in the overlap of the p lattice — they're in both
  l_subgraph and r_subgraph.

  Under the proposed scope-signature scheme, both q-phis are classified as "shared" relative to the p lattice. Same classification → merge allowed.
   The fix doesn't prevent the bad merge.

  The fundamental issue: unLEM's merge(L, R) branch deliberately combines both original subtrees. This destroys the scope separation that the
  scope-signature approach relies on. By the time the scheduler sees the post-unLEM graph, the structural information needed to distinguish the two
   q-phis is gone.

  What BRANCH_LATTICE_FIX DOES get right

  1. CROSSED_P_Q_SHARED_POP diagnosis: The inside-vs-outside check is genuinely missing from same_scope(). Currently (line 192), if the candidate
  phi is outside all subgraphs, the check is skipped. This lets innerPhiQ (inside the p-lattice) merge with outerPhiQ (outside the p-lattice).
  Strengthening same_scope() to reject inside-vs-outside mismatches fixes this case.
  2. Overlap-only untangle for UNTANGLE_BRAID_LIMIT_STRESS: cloning only l_subgraph ∩ r_subgraph instead of the full subgraphs is clearly correct
  and necessary.
  3. Checker noise: the impossible-assignment filter for unLEM conditions is a valid follow-up.

  Better alternatives

  Fix 1: Strengthen same_scope() (partial, fixes CROSSED_P_Q_SHARED_POP)

  Require that the candidate phi and all existing phis in the lattice have the same 4-way classification relative to every other lattice — not just
   "not on opposite sides":

  // Reject:
  //   one inside, other outside
  //   one left-only, other right-only
  //   one shared (both sides), other one-side-only

  This fixes CROSSED_P_Q_SHARED_POP (initial pass) because innerPhiP is inside the q-lattice while outerPhiP is outside. But it doesn't fix the
  post-unLEM cases because after unLEM both phis have the same classification ("shared").

  Fix 2: Defer phis in overlap (fixes SAME_SCOPE_Q_ON_BOTH_P_SIDES after unLEM)

  In find_branch_lattices(), skip any phi that is currently in the overlap (l_subgraph ∩ r_subgraph) of an already-formed lattice. Let untangle
  resolve the overlap first, then process deferred phis in the next iteration.

  Why this works: after untangling the p lattice's overlap, the two q-phis get cloned to exclusive sides. They're no longer in both subgraphs, so
  they have distinct classifications ("left-only" vs "right-only"), and the strengthened same_scope() correctly rejects merging them.

  This is the key insight the BRANCH_LATTICE_FIX misses: don't try to classify phis whose scope is currently ambiguous; wait until untangling makes
   it unambiguous.

  Fix 3: Remove unLEM condition caching (alternative to Fix 2)

  Create fresh maybeTrue/maybeFalse/bool.&& nodes for every phi instead of reusing cached ones. Different node IDs → different lattices → no bad
  merging possible.

  Pros: simplest, guaranteed correct. Cons: minor code duplication (redundant condition tests in generated code). Could be combined with a later
  optimization pass for same-scope phis.

  What I recommend

  The minimal correct fix is Fix 1 + Fix 2:

  1. Strengthen same_scope() to reject inside-vs-outside and shared-vs-one-side mismatches
  2. Defer overlap phis in find_branch_lattices() — don't process a phi if it's in an existing lattice's overlap; let untangle resolve the overlap
  first

  Then separately:

  3. Overlap-only untangle (clone only l ∩ r, not all of l and r) for the blow-up case
  4. Checker noise reduction as a follow-up

  This is simpler than the scope-signature system, doesn't require changes to unLEM, and actually solves all four cases:

  ┌────────────────────────────────────┬───────────────────────────────────────────────────────┐
  │               Opcode               │                     What fixes it                     │
  ├────────────────────────────────────┼───────────────────────────────────────────────────────┤
  │ SAME_SCOPE_Q_ON_BOTH_P_SIDES       │ Deferred overlap phis + strengthened same_scope       │
  ├────────────────────────────────────┼───────────────────────────────────────────────────────┤
  │ CROSSED_P_Q_SHARED_POP             │ Strengthened same_scope (inside-vs-outside rejection) │
  ├────────────────────────────────────┼───────────────────────────────────────────────────────┤
  │ UNLEM_IMPOSSIBLE_ASSIGNMENT_BUNDLE │ Deferred overlap phis + strengthened same_scope       │
  ├────────────────────────────────────┼───────────────────────────────────────────────────────┤
  │ UNTANGLE_BRAID_LIMIT_STRESS        │ Overlap-only untangle cloning                         │
  └────────────────────────────────────┴───────────────────────────────────────────────────────┘

  Why the "defer overlap phis" approach works and scope signatures don't

  The key difference: scope signatures try to classify phis based on the current (ambiguous) graph structure. Deferring overlap phis instead waits
  until the structure is unambiguous before classifying. Since untangle exists precisely to resolve structural ambiguity (overlapping subgraphs),
  it makes sense to let it run before committing to lattice membership.
