        (BlockStmt
            (LocalStmt
                ("table_index" (type u32)
                    (AppExpr "readImmULEB32" (type u32)
                        (VarExpr[ComponentMethod] "readImmULEB32" (type void -> u32))
                        (VarExpr[Local] "readImmULEB32" (type CanonicalDefs)))))
            (IfStmt
                (AppExpr "m_isTable64" (type bool)
                    (VarExpr[ComponentMethod] "m_isTable64" (type u32 -> bool))
                    (VarExpr[Local] "m_isTable64" (type CanonicalDefs))
                    (VarExpr[Local] "table_index" (type u32)))
                (BlockStmt
                    (LocalStmt
                        ("index" (type u64)
                            (AppExpr "pop_u64" (type u64)
                                (VarExpr[ComponentMethod] "pop_u64" (type void -> u64))
                                (VarExpr[Local] "pop_u64" (type CanonicalDefs)))))
                    (LocalStmt
                        ("val" (type Object)
                            (AppExpr "mach_readTable64" (type Object)
                                (VarExpr[ComponentMethod] "mach_readTable64" (type (u32, u64) -> Object))
                                (VarExpr[Local] "mach_readTable64" (type CanonicalDefs))
                                (VarExpr[Local] "table_index" (type u32))
                                (VarExpr[Local] "index" (type u64)))))
                    (ExprStmt
                        (AppExpr "push_Object" (type void)
                            (VarExpr[ComponentMethod] "push_Object" (type Object -> void))
                            (VarExpr[Local] "push_Object" (type CanonicalDefs))
                            (VarExpr[Local] "val" (type Object)))))
                (BlockStmt
                    (LocalStmt
                        ("index" (type u32)
                            (AppExpr "pop_u32" (type u32)
                                (VarExpr[ComponentMethod] "pop_u32" (type void -> u32))
                                (VarExpr[Local] "pop_u32" (type CanonicalDefs)))))
                    (LocalStmt
                        ("val" (type Object)
                            (AppExpr "mach_readTable32" (type Object)
                                (VarExpr[ComponentMethod] "mach_readTable32" (type (u32, u32) -> Object))
                                (VarExpr[Local] "mach_readTable32" (type CanonicalDefs))
                                (VarExpr[Local] "table_index" (type u32))
                                (VarExpr[Local] "index" (type u32)))))
                    (ExprStmt
                        (AppExpr "push_Object" (type void)
                            (VarExpr[ComponentMethod] "push_Object" (type Object -> void))
                            (VarExpr[Local] "push_Object" (type CanonicalDefs))
                            (VarExpr[Local] "val" (type Object)))))))
