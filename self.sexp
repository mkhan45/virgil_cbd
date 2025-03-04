        (BlockStmt
            (ExprStmt
                (AppExpr "skipWhitespace": void
                    (VarExpr[ObjectMethod] "skipWhitespace": void -> void)
                    (VarExpr[Local] "skipWhitespace": SexpParser)))
            (IfStmt
                (BinOpExpr "==": bool
                    (AppExpr "req1": int
                        (VarExpr[ObjectMethod] "req1": byte -> int)
                        (VarExpr[Local] "req1": SexpParser)
                        (Literal "'('": byte))
                    (Literal "-1": int))
                (ReturnStmt
                    (AppExpr: ParseResult.Expected<Sexp> implicitly ParseResult<Sexp>
                        (VarExpr[VariantCase] "Expected": Array<byte> -> ParseResult.Expected<Sexp>
                            (VarExpr[Type] "ParseResult": ParseResult<?T=Sexp>))
                        (StringExpr ""("": Array<byte>))))
            (ExprStmt
                (AppExpr "skipWhitespace": void
                    (VarExpr[ObjectMethod] "skipWhitespace": void -> void)
                    (VarExpr[Local] "skipWhitespace": SexpParser)))
            (LocalStmt
                ("elts": Vector<Sexp>
                    (AppExpr: Vector<Sexp>
                        (VarExpr[ClassNew] "new": void -> Vector<Sexp>
                            (VarExpr[Type] "Vector": Vector<Sexp>)))))
            (WhileStmt
                (BinOpExpr "==": bool
                    (AppExpr "opt1": int
                        (VarExpr[ObjectMethod] "opt1": byte -> int)
                        (VarExpr[Local] "opt1": SexpParser)
                        (Literal "')'": byte))
                    (Literal "-1": int))
                (BlockStmt
                    (ExprStmt
                        (AppExpr "skipWhitespace": void
                            (VarExpr[ObjectMethod] "skipWhitespace": void -> void)
                            (VarExpr[Local] "skipWhitespace": SexpParser)))
                    (LocalStmt
                        ("res": ParseResult<Sexp>
                            (IfExpr: ParseResult<Sexp>
                                (BinOpExpr "==": bool
                                    (AppExpr "peekRel": byte
                                        (VarExpr[ObjectMethod] "peekRel": int -> byte)
                                        (VarExpr[Local] "peekRel": SexpParser)
                                        (Literal "0": int))
                                    (Literal "'('": byte))
                                (AppExpr "readSexp": ParseResult<Sexp>
                                    (VarExpr[ObjectMethod] "readSexp": void -> ParseResult<Sexp>)
                                    (VarExpr[Local] "readSexp": SexpParser))
                                (AppExpr "readAtom": ParseResult<Sexp>
                                    (VarExpr[ObjectMethod] "readAtom": void -> ParseResult<Sexp>)
                                    (VarExpr[Local] "readAtom": SexpParser)))))
                    (MatchStmt
                        (VarExpr[Local] "res": ParseResult<Sexp>)
                            (VarExpr[None] "Success")
                            (ExprStmt
                                (AppExpr "put": Vector<Sexp>
                                    (VarExpr[ObjectMethod] "put": Sexp -> Vector<Sexp>
                                        (VarExpr[Local] "elts": Vector<Sexp>))
                                    (VarExpr[Local] "elts": Vector<Sexp>)
                                    (VarExpr[Local] "elt": Sexp)))
                            (DefCase)
                            (ReturnStmt
                                (VarExpr[Local] "res": ParseResult<Sexp>))
                            (DefCase)
                            (ReturnStmt
                                (VarExpr[Local] "res": ParseResult<Sexp>)))))
            (ExprStmt
                (AppExpr "skipWhitespace": void
                    (VarExpr[ObjectMethod] "skipWhitespace": void -> void)
                    (VarExpr[Local] "skipWhitespace": SexpParser)))
            (MatchStmt
                (VarExpr[ObjectField] "length": int
                    (VarExpr[Local] "elts": Vector<Sexp>))
                    (Literal "0": int)
                    (ReturnStmt
                        (VarExpr[VariantCase] "EmptySexp": ParseResult.EmptySexp<Sexp> implicitly ParseResult<Sexp>
                            (VarExpr[Type] "ParseResult": ParseResult<?T=Sexp>)))
                    (Literal "1": int)
                    (ReturnStmt
                        (AppExpr: ParseResult.Success<Sexp> implicitly ParseResult<Sexp>
                            (VarExpr[VariantCase] "Success": Sexp -> ParseResult.Success<Sexp>
                                (VarExpr[Type] "ParseResult": ParseResult<?T=Sexp>))
                            (IndexExpr "read=CallObjectMethod, write=None": Sexp
                                (VarExpr[Local] "elts": Vector<Sexp>)
                                (Literal "0": int))))
                    (DefCase)
                    (ReturnStmt
                        (AppExpr: ParseResult.Success<Sexp> implicitly ParseResult<Sexp>
                            (VarExpr[VariantCase] "Success": Sexp -> ParseResult.Success<Sexp>
                                (VarExpr[Type] "ParseResult": ParseResult<?T=Sexp>))
                            (AppExpr: Sexp.List implicitly Sexp
                                (VarExpr[VariantCase] "List": Range<Sexp> -> Sexp.List
                                    (VarExpr[Type] "Sexp": Sexp))
                                (AppExpr "copy": Array<Sexp> implicitly Range<Sexp>
                                    (VarExpr[ObjectMethod] "copy": void -> Array<Sexp>
                                        (VarExpr[Local] "elts": Vector<Sexp>))
                                    (VarExpr[Local] "elts": Vector<Sexp>)))))
                    (DefCase)
                    (ReturnStmt
                        (AppExpr: ParseResult.Success<Sexp> implicitly ParseResult<Sexp>
                            (VarExpr[VariantCase] "Success": Sexp -> ParseResult.Success<Sexp>
                                (VarExpr[Type] "ParseResult": ParseResult<?T=Sexp>))
                            (AppExpr: Sexp.List implicitly Sexp
                                (VarExpr[VariantCase] "List": Range<Sexp> -> Sexp.List
                                    (VarExpr[Type] "Sexp": Sexp))
                                (AppExpr "copy": Array<Sexp> implicitly Range<Sexp>
                                    (VarExpr[ObjectMethod] "copy": void -> Array<Sexp>
                                        (VarExpr[Local] "elts": Vector<Sexp>))
                                    (VarExpr[Local] "elts": Vector<Sexp>)))))))
