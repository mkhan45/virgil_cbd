```
def IRNode::get_ctl_deps() -> Vector<CtlDep> {
    // essentially find phis which dominate?
}
```

```
def ScheduleNode::schedule(..., ctl_deps: List<CtlDep>)
```
Separate control deps from dominants, get rid of move nodes.

===========

Actually, maybe if a node is used both in/out of a phi, that means
it needs to dominate the phi, not just move nodes. So it would have to
be scheduled above. 

But if moves are dominated above the branch, how do double diamonds work?
Shouldn't be an issue, doable diamond means there will be a node above the branch
they need to dominate.

But then we still need antideps to prevent stuff just being scheduled above the branch,
or we need to schedule the branch separately from its phi. Can we just queue a new branch to
schedule whenever we schedule a non-fused phi?

We also might need to prevent duplicating nodes in unlem. Or we can remove the done dict and requeue sometimes?  


=============

Idea 1:

Prepending a phi should generate the schedule phi and left/right sources, and then queue the left/right nodes
as well as the branch node.

We can use the min cap (earliest node that dominates both sources of phi) as the upper limit for the branch.
(i.e. it needs to dominate the branch node). And then the branch node needs to dominate the last nodes in each chain.
XXX: The merge node is kind of ill-formed?

Still have to figure out when to clone nodes that are shared between disjoint branches?
I think we can check if closest mutual dominant of all children is a phi

Idea 2:

Greedily schedule into left/right branches up to top branch (with an explicit ScheduleNode::schedule call).
This could be done pretty cleanly by letting a SeaScheduler handle a more generic subgraph of the Sea.

Idea 3:

Schedule most things bottom up, but phis top-down.

Idea 4:

excalidraw file (maybe later)

Idea 5:

For each node to be scheduled, check if its children can be dominated with
just one placement. By checking if the nearest (highest common descendant) is a phi.

Working backwards from the phi: the nearest common dominator of both sources
should dominate the branch. I think this inspires the greedy approach.

use Queue<(IRNode, Required Dominant (lower limit), Upper Limit)>
