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
                                    (VarExpr[Local] "readAtom": SexpParser)))))))
            (ExprStmt
                (AppExpr "skipWhitespace": void
                    (VarExpr[ObjectMethod] "skipWhitespace": void -> void)
                    (VarExpr[Local] "skipWhitespace": SexpParser))))
