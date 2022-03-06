initSidebarItems({"fn":[["add_builtin_assoc_program_clauses","Like `add_builtin_program_clauses`, but for `DomainGoal::Normalize` involving a projection (e.g. `<fn(u8) as FnOnce<(u8,)>>::Output`)"],["add_builtin_program_clauses","For well known traits we have special hard-coded impls, either as an optimization or to enforce special rules for correctness."],["needs_impl_for_tys","Given a trait ref `T0: Trait` and a list of types `U0..Un`, pushes a clause of the form `Implemented(T0: Trait) :- Implemented(U0: Trait) .. Implemented(Un: Trait)`"]],"mod":[["clone",""],["copy",""],["discriminant_kind",""],["fn_family",""],["generator",""],["sized",""],["unsize",""]]});