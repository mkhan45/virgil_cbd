state_dep(finish, outer_phi).

state_dep(do_branch, do_if).
state_dep(do_fallthru, do_if).

value_dep(maybe_true, cond, 0).
value_dep(maybe_false, cond, 0).

value_dep(maybe_both, maybe_true, 0).
value_dep(maybe_both, maybe_false, 1).

value_dep(outer_phi, maybe_both, 0).
value_dep(outer_phi, merge, 1).
value_dep(outer_phi, inner_phi, 2).

value_dep(merge, do_branch, 0).
value_dep(merge, do_fallthru, 1).

value_dep(inner_phi, maybe_true, 0).
value_dep(inner_phi, do_branch, 1).
value_dep(inner_phi, do_fallthru, 2).

dep(D, A) :-
    state_dep(D, A);
    value_dep(D, A, _).

ancestor(A, D) :-
    dep(D, A);
    dep(M, A), ancestor(M, D).
