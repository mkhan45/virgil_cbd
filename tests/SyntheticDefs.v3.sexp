component SyntheticDefs {
    new()
        (BlockStmt)
    method pop_u32() -> u32 (#stage<I -> I>, #rw(
(VarExpr[None] "Stack")))
        (EmptyStmt)
    method push_u32(v: u32) (#stage<I -> I>, #rw(
(VarExpr[None] "Stack")))
        (EmptyStmt)
    method SPLIT_BRANCHES()
        (BlockStmt
            (LocalStmt
                ("c1" (type u32)
                    (AppExpr "pop_u32" (type u32)
                        (VarExpr[ComponentMethod] "pop_u32" (type void -> u32))
                        (VarExpr[Local] "pop_u32" (type SyntheticDefs)))))
            (LocalStmt
                ("p" (type bool)
                    (AppExpr (type bool)
                        (VarExpr[Inst] "!=" (type (u32, u32) -> bool)
                            (VarExpr[Type] "u32" (type u32)))
                        (VarExpr[Local] "c1" (type u32))
                        (Literal "0" (type u32)))))
            (LocalStmt
                ("q" (type bool)
                    (AppExpr (type bool)
                        (VarExpr[Inst] "==" (type (u32, u32) -> bool)
                            (VarExpr[Type] "u32" (type u32)))
                        (VarExpr[Local] "c1" (type u32))
                        (Literal "2" (type u32)))))
            (IfStmt
                (VarExpr[Local] "p" (type bool))
                (BlockStmt
                    (IfStmt
                        (VarExpr[Local] "q" (type bool))
                        (BlockStmt
                            (ExprStmt
                                (AppExpr "push_u32" (type void)
                                    (VarExpr[ComponentMethod] "push_u32" (type u32 -> void))
                                    (VarExpr[Local] "push_u32" (type SyntheticDefs))
                                    (Literal "1" (type u32))))
                            (ExprStmt
                                (AppExpr "push_u32" (type void)
                                    (VarExpr[ComponentMethod] "push_u32" (type u32 -> void))
                                    (VarExpr[Local] "push_u32" (type SyntheticDefs))
                                    (Literal "2" (type u32)))))
                        (BlockStmt
                            (ExprStmt
                                (AppExpr "push_u32" (type void)
                                    (VarExpr[ComponentMethod] "push_u32" (type u32 -> void))
                                    (VarExpr[Local] "push_u32" (type SyntheticDefs))
                                    (Literal "3" (type u32))))
                            (ExprStmt
                                (AppExpr "push_u32" (type void)
                                    (VarExpr[ComponentMethod] "push_u32" (type u32 -> void))
                                    (VarExpr[Local] "push_u32" (type SyntheticDefs))
                                    (Literal "4" (type u32)))))))
                (BlockStmt
                    (IfStmt
                        (VarExpr[Local] "q" (type bool))
                        (BlockStmt
                            (ExprStmt
                                (AppExpr "push_u32" (type void)
                                    (VarExpr[ComponentMethod] "push_u32" (type u32 -> void))
                                    (VarExpr[Local] "push_u32" (type SyntheticDefs))
                                    (Literal "5" (type u32))))
                            (ExprStmt
                                (AppExpr "push_u32" (type void)
                                    (VarExpr[ComponentMethod] "push_u32" (type u32 -> void))
                                    (VarExpr[Local] "push_u32" (type SyntheticDefs))
                                    (Literal "6" (type u32)))))
                        (BlockStmt
                            (ExprStmt
                                (AppExpr "push_u32" (type void)
                                    (VarExpr[ComponentMethod] "push_u32" (type u32 -> void))
                                    (VarExpr[Local] "push_u32" (type SyntheticDefs))
                                    (Literal "7" (type u32))))
                            (ExprStmt
                                (AppExpr "push_u32" (type void)
                                    (VarExpr[ComponentMethod] "push_u32" (type u32 -> void))
                                    (VarExpr[Local] "push_u32" (type SyntheticDefs))
                                    (Literal "8" (type u32)))))))))
    method SPLIT_BRANCHES_PHI()
        (BlockStmt
            (LocalStmt
                ("c1" (type u32)
                    (AppExpr "pop_u32" (type u32)
                        (VarExpr[ComponentMethod] "pop_u32" (type void -> u32))
                        (VarExpr[Local] "pop_u32" (type SyntheticDefs)))))
            (LocalStmt
                ("r3" (type u32)
                    (Literal "0" (type u32))))
            (LocalStmt
                ("r4" (type u32)
                    (Literal "1" (type u32))))
            (LocalStmt
                ("p" (type bool)
                    (AppExpr (type bool)
                        (VarExpr[Inst] "!=" (type (u32, u32) -> bool)
                            (VarExpr[Type] "u32" (type u32)))
                        (VarExpr[Local] "c1" (type u32))
                        (Literal "0" (type u32)))))
            (LocalStmt
                ("q" (type bool)
                    (AppExpr (type bool)
                        (VarExpr[Inst] "==" (type (u32, u32) -> bool)
                            (VarExpr[Type] "u32" (type u32)))
                        (VarExpr[Local] "c1" (type u32))
                        (Literal "2" (type u32)))))
            (IfStmt
                (VarExpr[Local] "p" (type bool))
                (BlockStmt
                    (IfStmt
                        (VarExpr[Local] "q" (type bool))
                        (BlockStmt
                            (ExprStmt
                                (AssignExpr (type u32)
                                    (VarExpr[Local] "r3" (type u32))
                                    (Literal "1" (type u32))))
                            (ExprStmt
                                (AssignExpr (type u32)
                                    (VarExpr[Local] "r4" (type u32))
                                    (Literal "2" (type u32)))))
                        (BlockStmt
                            (ExprStmt
                                (AssignExpr (type u32)
                                    (VarExpr[Local] "r3" (type u32))
                                    (Literal "3" (type u32))))
                            (ExprStmt
                                (AssignExpr (type u32)
                                    (VarExpr[Local] "r4" (type u32))
                                    (Literal "4" (type u32)))))))
                (BlockStmt
                    (IfStmt
                        (VarExpr[Local] "q" (type bool))
                        (BlockStmt
                            (ExprStmt
                                (AssignExpr (type u32)
                                    (VarExpr[Local] "r3" (type u32))
                                    (Literal "5" (type u32))))
                            (ExprStmt
                                (AssignExpr (type u32)
                                    (VarExpr[Local] "r4" (type u32))
                                    (Literal "6" (type u32)))))
                        (BlockStmt
                            (ExprStmt
                                (AssignExpr (type u32)
                                    (VarExpr[Local] "r3" (type u32))
                                    (Literal "6" (type u32))))
                            (ExprStmt
                                (AssignExpr (type u32)
                                    (VarExpr[Local] "r4" (type u32))
                                    (Literal "7" (type u32))))))))
            (ExprStmt
                (AppExpr "push_u32" (type void)
                    (VarExpr[ComponentMethod] "push_u32" (type u32 -> void))
                    (VarExpr[Local] "push_u32" (type SyntheticDefs))
                    (VarExpr[Local] "r3" (type u32))))
            (ExprStmt
                (AppExpr "push_u32" (type void)
                    (VarExpr[ComponentMethod] "push_u32" (type u32 -> void))
                    (VarExpr[Local] "push_u32" (type SyntheticDefs))
                    (VarExpr[Local] "r4" (type u32)))))
    method P3_FRONTIER()
        (BlockStmt
            (LocalStmt
                ("c1" (type u32)
                    (AppExpr "pop_u32" (type u32)
                        (VarExpr[ComponentMethod] "pop_u32" (type void -> u32))
                        (VarExpr[Local] "pop_u32" (type SyntheticDefs)))))
            (LocalStmt
                ("c3" (type u32)
                    (AppExpr "pop_u32" (type u32)
                        (VarExpr[ComponentMethod] "pop_u32" (type void -> u32))
                        (VarExpr[Local] "pop_u32" (type SyntheticDefs)))))
            (LocalStmt
                ("c2" (type u32)
                    (AppExpr "pop_u32" (type u32)
                        (VarExpr[ComponentMethod] "pop_u32" (type void -> u32))
                        (VarExpr[Local] "pop_u32" (type SyntheticDefs)))))
            (LocalStmt
                ("A" (type u32)
                    (AppExpr "pop_u32" (type u32)
                        (VarExpr[ComponentMethod] "pop_u32" (type void -> u32))
                        (VarExpr[Local] "pop_u32" (type SyntheticDefs)))))
            (LocalStmt
                ("B" (type u32)
                    (AppExpr "pop_u32" (type u32)
                        (VarExpr[ComponentMethod] "pop_u32" (type void -> u32))
                        (VarExpr[Local] "pop_u32" (type SyntheticDefs)))))
            (LocalStmt
                ("p" (type bool)
                    (AppExpr (type bool)
                        (VarExpr[Inst] "!=" (type (u32, u32) -> bool)
                            (VarExpr[Type] "u32" (type u32)))
                        (VarExpr[Local] "c1" (type u32))
                        (Literal "0" (type u32)))))
            (LocalStmt
                ("q" (type bool)
                    (AppExpr (type bool)
                        (VarExpr[Inst] "!=" (type (u32, u32) -> bool)
                            (VarExpr[Type] "u32" (type u32)))
                        (VarExpr[Local] "c3" (type u32))
                        (Literal "0" (type u32)))))
            (LocalStmt
                ("r" (type bool)
                    (AppExpr (type bool)
                        (VarExpr[Inst] "!=" (type (u32, u32) -> bool)
                            (VarExpr[Type] "u32" (type u32)))
                        (VarExpr[Local] "c2" (type u32))
                        (Literal "0" (type u32)))))
            (LocalStmt
                ("deep" (type u32)
                    (Literal "0" (type u32))))
            (IfStmt
                (VarExpr[Local] "q" (type bool))
                (BlockStmt
                    (ExprStmt
                        (AssignExpr (type u32)
                            (VarExpr[Local] "deep" (type u32))
                            (VarExpr[Local] "A" (type u32)))))
                (BlockStmt
                    (ExprStmt
                        (AssignExpr (type u32)
                            (VarExpr[Local] "deep" (type u32))
                            (VarExpr[Local] "B" (type u32))))))
            (LocalStmt
                ("N" (type u32)
                    (AppExpr (type u32)
                        (VarExpr[Inst] "+" (type (u32, u32) -> u32)
                            (VarExpr[Type] "u32" (type u32)))
                        (VarExpr[Local] "deep" (type u32))
                        (Literal "0" (type u32)))))
            (LocalStmt
                ("triv" (type u32)
                    (Literal "0" (type u32))))
            (IfStmt
                (VarExpr[Local] "r" (type bool))
                (BlockStmt
                    (ExprStmt
                        (AssignExpr (type u32)
                            (VarExpr[Local] "triv" (type u32))
                            (VarExpr[Local] "N" (type u32)))))
                (BlockStmt
                    (ExprStmt
                        (AssignExpr (type u32)
                            (VarExpr[Local] "triv" (type u32))
                            (VarExpr[Local] "N" (type u32))))))
            (LocalStmt
                ("result" (type u32)
                    (Literal "0" (type u32))))
            (IfStmt
                (VarExpr[Local] "p" (type bool))
                (BlockStmt
                    (ExprStmt
                        (AssignExpr (type u32)
                            (VarExpr[Local] "result" (type u32))
                            (VarExpr[Local] "triv" (type u32)))))
                (BlockStmt
                    (ExprStmt
                        (AssignExpr (type u32)
                            (VarExpr[Local] "result" (type u32))
                            (AppExpr (type u32)
                                (VarExpr[Inst] "+" (type (u32, u32) -> u32)
                                    (VarExpr[Type] "u32" (type u32)))
                                (VarExpr[Local] "A" (type u32))
                                (Literal "1" (type u32)))))))
            (ExprStmt
                (AppExpr "push_u32" (type void)
                    (VarExpr[ComponentMethod] "push_u32" (type u32 -> void))
                    (VarExpr[Local] "push_u32" (type SyntheticDefs))
                    (VarExpr[Local] "result" (type u32)))))
}
