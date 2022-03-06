initSidebarItems({"fn":[["is_trivial",""],["merge_into_guidance","Given a current substitution used as guidance for `root_goal`, and a new possible answer to `root_goal`, returns a new set of guidance that encompasses both of them. This is often more general than the old guidance. For example, if we had a guidance of `?0 = u32` and the new answer is `?0 = i32`, then the guidance would become `?0 = ?X` (where `?X` is some fresh variable)."]],"struct":[["AntiUnifier","Anti-unification is the act of taking two things that do not unify and finding a minimal generalization of them. So for example `Vec<u32>` anti-unified with `Vec<i32>` might be `Vec<?X>`. This is a very simplistic anti-unifier."]],"trait":[["AggregateOps","Methods for combining solutions to yield an aggregate solution."]]});