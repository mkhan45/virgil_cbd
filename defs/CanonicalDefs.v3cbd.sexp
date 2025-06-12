component CanonicalDefs {
    new()
        (BlockStmt)
    def HAS_MEM_INDEX: null = 
        (Literal "0x40u8" (type byte));
    method readImmULEB32() -> u32
        (EmptyStmt)
    method readImmILEB32() -> int
        (EmptyStmt)
    method readImmULEB64() -> u64
        (EmptyStmt)
    method readImmILEB64() -> long
        (EmptyStmt)
    method readImmU8() -> byte
        (EmptyStmt)
    method readImmBlockType() -> int
        (EmptyStmt)
    method pop_i32() -> int
        (EmptyStmt)
    method pop_u32() -> u32
        (EmptyStmt)
    method pop_i64() -> long
        (EmptyStmt)
    method pop_u64() -> u64
        (EmptyStmt)
    method pop_f32() -> float
        (EmptyStmt)
    method pop_f64() -> double
        (EmptyStmt)
    method pop_v128() -> v128
        (EmptyStmt)
    method pop_Object() -> Object
        (EmptyStmt)
    method pop_Value(tv: TypeVar) -> Value
        (EmptyStmt)
    method push_i32(v: int)
        (EmptyStmt)
    method push_u32(v: u32)
        (EmptyStmt)
    method push_i64(v: long)
        (EmptyStmt)
    method push_u64(v: u64)
        (EmptyStmt)
    method push_f32(v: float)
        (EmptyStmt)
    method push_f64(v: double)
        (EmptyStmt)
    method push_v128(v: v128)
        (EmptyStmt)
    method push_Object(v: Object)
        (EmptyStmt)
    method push_Value(tv: TypeVar, v: Value)
        (EmptyStmt)
    method getLocal(tv: TypeVar, index: u32) -> Value
        (EmptyStmt)
    method setLocal(tv: TypeVar, index: u32, v: Value)
        (EmptyStmt)
    method getGlobal(tv: TypeVar, index: u32) -> Value
        (EmptyStmt)
    method setGlobal(tv: TypeVar, index: u32, v: Value)
        (EmptyStmt)
    method f_getLabel(depth: u32) -> Label
        (EmptyStmt)
    method f_getLocalType(index: u32) -> TypeVar
        (EmptyStmt)
    method m_getGlobalType(index: u32) -> TypeVar
        (EmptyStmt)
    method m_getFieldKind(struct_index: u32, field_index: u32) -> FieldKind
        (EmptyStmt)
    method m_getFieldOffset(struct_index: u32, field_index: u32) -> FieldOffset
        (EmptyStmt)
    method m_isMemory64(memory_index: u32) -> bool
        (EmptyStmt)
    method m_isTable64(memory_index: u32) -> bool
        (EmptyStmt)
    method m_getFuncSignature(func_index: u32) -> Signature
        (EmptyStmt)
    method m_getSignature(sig_index: u32) -> Signature
        (EmptyStmt)
    method i_getTableFunction64(table_index: u32, sig: Signature, func_index: u64) -> Function
        (EmptyStmt)
    method i_getTableFunction32(table_index: u32, sig: Signature, func_index: u32) -> Function
        (EmptyStmt)
    method i_getFunction(func_index: u32) -> Function
        (EmptyStmt)
    method doCall(sig: Signature, target: Function)
        (EmptyStmt)
    method doBranch(label: Label)
        (EmptyStmt)
    method doFallThru()
        (EmptyStmt)
    method doBlock(bt: int)
        (EmptyStmt)
    method doLoop(bt: int)
        (EmptyStmt)
    method doTry(bt: int)
        (EmptyStmt)
    method doReturn()
        (EmptyStmt)
    method doEnd()
        (EmptyStmt)
    method f_isAtEnd() -> bool
        (EmptyStmt)
    method mach_readStructField_i8(obj: Object, offset: FieldOffset) -> i8
        (EmptyStmt)
    method mach_readStructField_u8(obj: Object, offset: FieldOffset) -> byte
        (EmptyStmt)
    method mach_readStructField_i16(obj: Object, offset: FieldOffset) -> short
        (EmptyStmt)
    method mach_readStructField_u16(obj: Object, offset: FieldOffset) -> u16
        (EmptyStmt)
    method mach_readStructField_u32(obj: Object, offset: FieldOffset) -> u32
        (EmptyStmt)
    method mach_readStructField_u64(obj: Object, offset: FieldOffset) -> u64
        (EmptyStmt)
    method mach_readStructField_f32(obj: Object, offset: FieldOffset) -> float
        (EmptyStmt)
    method mach_readStructField_f64(obj: Object, offset: FieldOffset) -> double
        (EmptyStmt)
    method mach_readStructField_v128(obj: Object, offset: FieldOffset) -> v128
        (EmptyStmt)
    method mach_readStructField_Object(obj: Object, offset: FieldOffset) -> Object
        (EmptyStmt)
    method mach_readMemory64_u32(memory_index: u32, index: u64, offset: u64) -> u32
        (EmptyStmt)
    method mach_readMemory32_u32(memory_index: u32, index: u32, offset: u32) -> u32
        (EmptyStmt)
    method mach_readTable64(table_index: u32, index: u64) -> Object
        (EmptyStmt)
    method mach_readTable32(table_index: u32, index: u32) -> Object
        (EmptyStmt)
    method mach_writeTable64(table_index: u32, index: u64, val: Object)
        (EmptyStmt)
    method mach_writeTable32(table_index: u32, index: u32, val: Object)
        (EmptyStmt)
    method invalid()
        (EmptyStmt)
    method trapNull()
        (EmptyStmt)
    method trapUnreachable()
        (EmptyStmt)
    method UNREACHABLE()
        (BlockStmt
            (ExprStmt
                (AppExpr "trapUnreachable" (type void)
                    (VarExpr[ComponentMethod] "trapUnreachable" (type void -> void))
                    (VarExpr[Local] "trapUnreachable" (type CanonicalDefs)))))
    method NOP()
        (BlockStmt)
    method LOCAL_GET()
        (BlockStmt
            (LocalStmt
                ("index" (type u32)
                    (AppExpr "readImmULEB32" (type u32)
                        (VarExpr[ComponentMethod] "readImmULEB32" (type void -> u32))
                        (VarExpr[Local] "readImmULEB32" (type CanonicalDefs)))))
            (LocalStmt
                ("tv" (type TypeVar)
                    (AppExpr "f_getLocalType" (type TypeVar)
                        (VarExpr[ComponentMethod] "f_getLocalType" (type u32 -> TypeVar))
                        (VarExpr[Local] "f_getLocalType" (type CanonicalDefs))
                        (VarExpr[Local] "index" (type u32)))))
            (LocalStmt
                ("val" (type Value)
                    (AppExpr "getLocal" (type Value)
                        (VarExpr[ComponentMethod] "getLocal" (type (TypeVar, u32) -> Value))
                        (VarExpr[Local] "getLocal" (type CanonicalDefs))
                        (VarExpr[Local] "tv" (type TypeVar))
                        (VarExpr[Local] "index" (type u32)))))
            (ExprStmt
                (AppExpr "push_Value" (type void)
                    (VarExpr[ComponentMethod] "push_Value" (type (TypeVar, Value) -> void))
                    (VarExpr[Local] "push_Value" (type CanonicalDefs))
                    (VarExpr[Local] "tv" (type TypeVar))
                    (VarExpr[Local] "val" (type Value)))))
    method LOCAL_SET()
        (BlockStmt
            (LocalStmt
                ("index" (type u32)
                    (AppExpr "readImmULEB32" (type u32)
                        (VarExpr[ComponentMethod] "readImmULEB32" (type void -> u32))
                        (VarExpr[Local] "readImmULEB32" (type CanonicalDefs)))))
            (LocalStmt
                ("tv" (type TypeVar)
                    (AppExpr "f_getLocalType" (type TypeVar)
                        (VarExpr[ComponentMethod] "f_getLocalType" (type u32 -> TypeVar))
                        (VarExpr[Local] "f_getLocalType" (type CanonicalDefs))
                        (VarExpr[Local] "index" (type u32)))))
            (LocalStmt
                ("val" (type Value)
                    (AppExpr "pop_Value" (type Value)
                        (VarExpr[ComponentMethod] "pop_Value" (type TypeVar -> Value))
                        (VarExpr[Local] "pop_Value" (type CanonicalDefs))
                        (VarExpr[Local] "tv" (type TypeVar)))))
            (ExprStmt
                (AppExpr "setLocal" (type void)
                    (VarExpr[ComponentMethod] "setLocal" (type (TypeVar, u32, Value) -> void))
                    (VarExpr[Local] "setLocal" (type CanonicalDefs))
                    (VarExpr[Local] "tv" (type TypeVar))
                    (VarExpr[Local] "index" (type u32))
                    (VarExpr[Local] "val" (type Value)))))
    method LOCAL_TEE()
        (BlockStmt
            (LocalStmt
                ("index" (type u32)
                    (AppExpr "readImmULEB32" (type u32)
                        (VarExpr[ComponentMethod] "readImmULEB32" (type void -> u32))
                        (VarExpr[Local] "readImmULEB32" (type CanonicalDefs)))))
            (LocalStmt
                ("tv" (type TypeVar)
                    (AppExpr "f_getLocalType" (type TypeVar)
                        (VarExpr[ComponentMethod] "f_getLocalType" (type u32 -> TypeVar))
                        (VarExpr[Local] "f_getLocalType" (type CanonicalDefs))
                        (VarExpr[Local] "index" (type u32)))))
            (LocalStmt
                ("val" (type Value)
                    (AppExpr "pop_Value" (type Value)
                        (VarExpr[ComponentMethod] "pop_Value" (type TypeVar -> Value))
                        (VarExpr[Local] "pop_Value" (type CanonicalDefs))
                        (VarExpr[Local] "tv" (type TypeVar)))))
            (ExprStmt
                (AppExpr "setLocal" (type void)
                    (VarExpr[ComponentMethod] "setLocal" (type (TypeVar, u32, Value) -> void))
                    (VarExpr[Local] "setLocal" (type CanonicalDefs))
                    (VarExpr[Local] "tv" (type TypeVar))
                    (VarExpr[Local] "index" (type u32))
                    (VarExpr[Local] "val" (type Value))))
            (ExprStmt
                (AppExpr "push_Value" (type void)
                    (VarExpr[ComponentMethod] "push_Value" (type (TypeVar, Value) -> void))
                    (VarExpr[Local] "push_Value" (type CanonicalDefs))
                    (VarExpr[Local] "tv" (type TypeVar))
                    (VarExpr[Local] "val" (type Value)))))
    method GLOBAL_GET()
        (BlockStmt
            (LocalStmt
                ("index" (type u32)
                    (AppExpr "readImmULEB32" (type u32)
                        (VarExpr[ComponentMethod] "readImmULEB32" (type void -> u32))
                        (VarExpr[Local] "readImmULEB32" (type CanonicalDefs)))))
            (LocalStmt
                ("tv" (type TypeVar)
                    (AppExpr "m_getGlobalType" (type TypeVar)
                        (VarExpr[ComponentMethod] "m_getGlobalType" (type u32 -> TypeVar))
                        (VarExpr[Local] "m_getGlobalType" (type CanonicalDefs))
                        (VarExpr[Local] "index" (type u32)))))
            (LocalStmt
                ("val" (type Value)
                    (AppExpr "getGlobal" (type Value)
                        (VarExpr[ComponentMethod] "getGlobal" (type (TypeVar, u32) -> Value))
                        (VarExpr[Local] "getGlobal" (type CanonicalDefs))
                        (VarExpr[Local] "tv" (type TypeVar))
                        (VarExpr[Local] "index" (type u32)))))
            (ExprStmt
                (AppExpr "push_Value" (type void)
                    (VarExpr[ComponentMethod] "push_Value" (type (TypeVar, Value) -> void))
                    (VarExpr[Local] "push_Value" (type CanonicalDefs))
                    (VarExpr[Local] "tv" (type TypeVar))
                    (VarExpr[Local] "val" (type Value)))))
    method GLOBAL_SET()
        (BlockStmt
            (LocalStmt
                ("index" (type u32)
                    (AppExpr "readImmULEB32" (type u32)
                        (VarExpr[ComponentMethod] "readImmULEB32" (type void -> u32))
                        (VarExpr[Local] "readImmULEB32" (type CanonicalDefs)))))
            (LocalStmt
                ("tv" (type TypeVar)
                    (AppExpr "m_getGlobalType" (type TypeVar)
                        (VarExpr[ComponentMethod] "m_getGlobalType" (type u32 -> TypeVar))
                        (VarExpr[Local] "m_getGlobalType" (type CanonicalDefs))
                        (VarExpr[Local] "index" (type u32)))))
            (LocalStmt
                ("val" (type Value)
                    (AppExpr "pop_Value" (type Value)
                        (VarExpr[ComponentMethod] "pop_Value" (type TypeVar -> Value))
                        (VarExpr[Local] "pop_Value" (type CanonicalDefs))
                        (VarExpr[Local] "tv" (type TypeVar)))))
            (ExprStmt
                (AppExpr "setGlobal" (type void)
                    (VarExpr[ComponentMethod] "setGlobal" (type (TypeVar, u32, Value) -> void))
                    (VarExpr[Local] "setGlobal" (type CanonicalDefs))
                    (VarExpr[Local] "tv" (type TypeVar))
                    (VarExpr[Local] "index" (type u32))
                    (VarExpr[Local] "val" (type Value)))))
    method TABLE_GET()
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
    method TABLE_SET()
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
                        ("val" (type Object)
                            (AppExpr "pop_Object" (type Object)
                                (VarExpr[ComponentMethod] "pop_Object" (type void -> Object))
                                (VarExpr[Local] "pop_Object" (type CanonicalDefs)))))
                    (LocalStmt
                        ("index" (type u64)
                            (AppExpr "pop_u64" (type u64)
                                (VarExpr[ComponentMethod] "pop_u64" (type void -> u64))
                                (VarExpr[Local] "pop_u64" (type CanonicalDefs)))))
                    (ExprStmt
                        (AppExpr "mach_writeTable64" (type void)
                            (VarExpr[ComponentMethod] "mach_writeTable64" (type (u32, u64, Object) -> void))
                            (VarExpr[Local] "mach_writeTable64" (type CanonicalDefs))
                            (VarExpr[Local] "table_index" (type u32))
                            (VarExpr[Local] "index" (type u64))
                            (VarExpr[Local] "val" (type Object)))))
                (BlockStmt
                    (LocalStmt
                        ("val" (type Object)
                            (AppExpr "pop_Object" (type Object)
                                (VarExpr[ComponentMethod] "pop_Object" (type void -> Object))
                                (VarExpr[Local] "pop_Object" (type CanonicalDefs)))))
                    (LocalStmt
                        ("index" (type u32)
                            (AppExpr "pop_u32" (type u32)
                                (VarExpr[ComponentMethod] "pop_u32" (type void -> u32))
                                (VarExpr[Local] "pop_u32" (type CanonicalDefs)))))
                    (ExprStmt
                        (AppExpr "mach_writeTable32" (type void)
                            (VarExpr[ComponentMethod] "mach_writeTable32" (type (u32, u32, Object) -> void))
                            (VarExpr[Local] "mach_writeTable32" (type CanonicalDefs))
                            (VarExpr[Local] "table_index" (type u32))
                            (VarExpr[Local] "index" (type u32))
                            (VarExpr[Local] "val" (type Object)))))))
    method CALL()
        (BlockStmt
            (LocalStmt
                ("index" (type u32)
                    (AppExpr "readImmULEB32" (type u32)
                        (VarExpr[ComponentMethod] "readImmULEB32" (type void -> u32))
                        (VarExpr[Local] "readImmULEB32" (type CanonicalDefs)))))
            (LocalStmt
                ("sig" (type Signature)
                    (AppExpr "m_getFuncSignature" (type Signature)
                        (VarExpr[ComponentMethod] "m_getFuncSignature" (type u32 -> Signature))
                        (VarExpr[Local] "m_getFuncSignature" (type CanonicalDefs))
                        (VarExpr[Local] "index" (type u32)))))
            (LocalStmt
                ("target" (type Function)
                    (AppExpr "i_getFunction" (type Function)
                        (VarExpr[ComponentMethod] "i_getFunction" (type u32 -> Function))
                        (VarExpr[Local] "i_getFunction" (type CanonicalDefs))
                        (VarExpr[Local] "index" (type u32)))))
            (ExprStmt
                (AppExpr "doCall" (type void)
                    (VarExpr[ComponentMethod] "doCall" (type (Signature, Function) -> void))
                    (VarExpr[Local] "doCall" (type CanonicalDefs))
                    (VarExpr[Local] "sig" (type Signature))
                    (VarExpr[Local] "target" (type Function)))))
    method CALL_INDIRECT()
        (BlockStmt
            (LocalStmt
                ("sig_index" (type u32)
                    (AppExpr "readImmULEB32" (type u32)
                        (VarExpr[ComponentMethod] "readImmULEB32" (type void -> u32))
                        (VarExpr[Local] "readImmULEB32" (type CanonicalDefs)))))
            (LocalStmt
                ("table_index" (type u32)
                    (AppExpr "readImmULEB32" (type u32)
                        (VarExpr[ComponentMethod] "readImmULEB32" (type void -> u32))
                        (VarExpr[Local] "readImmULEB32" (type CanonicalDefs)))))
            (LocalStmt
                ("sig" (type Signature)
                    (AppExpr "m_getSignature" (type Signature)
                        (VarExpr[ComponentMethod] "m_getSignature" (type u32 -> Signature))
                        (VarExpr[Local] "m_getSignature" (type CanonicalDefs))
                        (VarExpr[Local] "sig_index" (type u32)))))
            (IfStmt
                (AppExpr "m_isTable64" (type bool)
                    (VarExpr[ComponentMethod] "m_isTable64" (type u32 -> bool))
                    (VarExpr[Local] "m_isTable64" (type CanonicalDefs))
                    (VarExpr[Local] "table_index" (type u32)))
                (BlockStmt
                    (LocalStmt
                        ("func_index" (type u64)
                            (AppExpr "pop_u64" (type u64)
                                (VarExpr[ComponentMethod] "pop_u64" (type void -> u64))
                                (VarExpr[Local] "pop_u64" (type CanonicalDefs)))))
                    (LocalStmt
                        ("target" (type Function) (repHints #sidetable)
                            (AppExpr "i_getTableFunction64" (type Function)
                                (VarExpr[ComponentMethod] "i_getTableFunction64" (type (u32, Signature, u64) -> Function))
                                (VarExpr[Local] "i_getTableFunction64" (type CanonicalDefs))
                                (VarExpr[Local] "table_index" (type u32))
                                (VarExpr[Local] "sig" (type Signature))
                                (VarExpr[Local] "func_index" (type u64)))))
                    (ReturnStmt
                        (AppExpr "doCall" (type void)
                            (VarExpr[ComponentMethod] "doCall" (type (Signature, Function) -> void))
                            (VarExpr[Local] "doCall" (type CanonicalDefs))
                            (VarExpr[Local] "sig" (type Signature))
                            (VarExpr[Local] "target" (type Function)))))
                (BlockStmt
                    (LocalStmt
                        ("func_index" (type u32)
                            (AppExpr "pop_u32" (type u32)
                                (VarExpr[ComponentMethod] "pop_u32" (type void -> u32))
                                (VarExpr[Local] "pop_u32" (type CanonicalDefs)))))
                    (LocalStmt
                        ("target" (type Function) (repHints #sidetable)
                            (AppExpr "i_getTableFunction32" (type Function)
                                (VarExpr[ComponentMethod] "i_getTableFunction32" (type (u32, Signature, u32) -> Function))
                                (VarExpr[Local] "i_getTableFunction32" (type CanonicalDefs))
                                (VarExpr[Local] "table_index" (type u32))
                                (VarExpr[Local] "sig" (type Signature))
                                (VarExpr[Local] "func_index" (type u32)))))
                    (ReturnStmt
                        (AppExpr "doCall" (type void)
                            (VarExpr[ComponentMethod] "doCall" (type (Signature, Function) -> void))
                            (VarExpr[Local] "doCall" (type CanonicalDefs))
                            (VarExpr[Local] "sig" (type Signature))
                            (VarExpr[Local] "target" (type Function)))))))
    method I32_CONST()
        (BlockStmt
            (LocalStmt
                ("x" (type int) (repHints #rtcast_i32)
                    (AppExpr "readImmILEB32" (type int)
                        (VarExpr[ComponentMethod] "readImmILEB32" (type void -> int))
                        (VarExpr[Local] "readImmILEB32" (type CanonicalDefs)))))
            (ExprStmt
                (AppExpr "push_i32" (type void)
                    (VarExpr[ComponentMethod] "push_i32" (type int -> void))
                    (VarExpr[Local] "push_i32" (type CanonicalDefs))
                    (VarExpr[Local] "x" (type int)))))
    method I32_ADD()
        (BlockStmt
            (LocalStmt
                ("x" (type int)
                    (AppExpr "pop_i32" (type int)
                        (VarExpr[ComponentMethod] "pop_i32" (type void -> int))
                        (VarExpr[Local] "pop_i32" (type CanonicalDefs)))))
            (LocalStmt
                ("y" (type int)
                    (AppExpr "pop_i32" (type int)
                        (VarExpr[ComponentMethod] "pop_i32" (type void -> int))
                        (VarExpr[Local] "pop_i32" (type CanonicalDefs)))))
            (LocalStmt
                ("r" (type int)
                    (BinOpExpr "+" (type int)
                        (VarExpr[Local] "x" (type int))
                        (VarExpr[Local] "y" (type int)))))
            (ExprStmt
                (AppExpr "push_i32" (type void)
                    (VarExpr[ComponentMethod] "push_i32" (type int -> void))
                    (VarExpr[Local] "push_i32" (type CanonicalDefs))
                    (VarExpr[Local] "r" (type int)))))
    method I32_SUB()
        (BlockStmt
            (LocalStmt
                ("x" (type int)
                    (AppExpr "pop_i32" (type int)
                        (VarExpr[ComponentMethod] "pop_i32" (type void -> int))
                        (VarExpr[Local] "pop_i32" (type CanonicalDefs)))))
            (LocalStmt
                ("y" (type int)
                    (AppExpr "pop_i32" (type int)
                        (VarExpr[ComponentMethod] "pop_i32" (type void -> int))
                        (VarExpr[Local] "pop_i32" (type CanonicalDefs)))))
            (LocalStmt
                ("r" (type int)
                    (BinOpExpr "-" (type int)
                        (VarExpr[Local] "y" (type int))
                        (VarExpr[Local] "x" (type int)))))
            (ExprStmt
                (AppExpr "push_i32" (type void)
                    (VarExpr[ComponentMethod] "push_i32" (type int -> void))
                    (VarExpr[Local] "push_i32" (type CanonicalDefs))
                    (VarExpr[Local] "r" (type int)))))
    method I32_EQZ()
        (BlockStmt
            (LocalStmt
                ("x" (type int)
                    (AppExpr "pop_i32" (type int)
                        (VarExpr[ComponentMethod] "pop_i32" (type void -> int))
                        (VarExpr[Local] "pop_i32" (type CanonicalDefs)))))
            (IfStmt
                (BinOpExpr "==" (type bool)
                    (VarExpr[Local] "x" (type int))
                    (Literal "0" (type int)))
                (BlockStmt
                    (ExprStmt
                        (AppExpr "push_i32" (type void)
                            (VarExpr[ComponentMethod] "push_i32" (type int -> void))
                            (VarExpr[Local] "push_i32" (type CanonicalDefs))
                            (Literal "1" (type int)))))
                (BlockStmt
                    (ExprStmt
                        (AppExpr "push_i32" (type void)
                            (VarExpr[ComponentMethod] "push_i32" (type int -> void))
                            (VarExpr[Local] "push_i32" (type CanonicalDefs))
                            (Literal "0" (type int)))))))
    method F32_MAX()
        (BlockStmt
            (LocalStmt
                ("b" (type float)
                    (AppExpr "pop_f32" (type float)
                        (VarExpr[ComponentMethod] "pop_f32" (type void -> float))
                        (VarExpr[Local] "pop_f32" (type CanonicalDefs)))))
            (LocalStmt
                ("a" (type float)
                    (AppExpr "pop_f32" (type float)
                        (VarExpr[ComponentMethod] "pop_f32" (type void -> float))
                        (VarExpr[Local] "pop_f32" (type CanonicalDefs)))))
            (LocalStmt
                ("r" (type float)
                    (VarExpr[Local] "a" (type float))))
            (IfStmt
                (BinOpExpr ">" (type bool)
                    (VarExpr[Local] "a" (type float))
                    (VarExpr[Local] "b" (type float)))
                (ExprStmt
                    (AssignExpr (type float)
                        (VarExpr[Local] "r" (type float))
                        (VarExpr[Local] "a" (type float)))))
            (IfStmt
                (BinOpExpr "==" (type bool)
                    (VarExpr[Local] "a" (type float))
                    (VarExpr[Local] "b" (type float)))
                (ExprStmt
                    (AssignExpr (type float)
                        (VarExpr[Local] "r" (type float))
                        (IfExpr (type float)
                            (BinOpExpr "==" (type bool)
                                (VarExpr[Apply] "sign" (type u1) (implicitType int)
                                    (VarExpr[Local] "b" (type float)))
                                (Literal "0" (type int)))
                            (VarExpr[Local] "b" (type float))
                            (VarExpr[Local] "a" (type float))))))
            (IfStmt
                (BinOpExpr ">" (type bool)
                    (VarExpr[Local] "b" (type float))
                    (VarExpr[Local] "a" (type float)))
                (ExprStmt
                    (AssignExpr (type float)
                        (VarExpr[Local] "r" (type float))
                        (VarExpr[Local] "b" (type float)))))
            (ExprStmt
                (AppExpr "push_f32" (type void)
                    (VarExpr[ComponentMethod] "push_f32" (type float -> void))
                    (VarExpr[Local] "push_f32" (type CanonicalDefs))
                    (VarExpr[Local] "r" (type float)))))
    method BR()
        (BlockStmt
            (LocalStmt
                ("depth" (type u32)
                    (AppExpr "readImmULEB32" (type u32)
                        (VarExpr[ComponentMethod] "readImmULEB32" (type void -> u32))
                        (VarExpr[Local] "readImmULEB32" (type CanonicalDefs)))))
            (LocalStmt
                ("label" (type Label) (repHints #sidetable)
                    (AppExpr "f_getLabel" (type Label)
                        (VarExpr[ComponentMethod] "f_getLabel" (type u32 -> Label))
                        (VarExpr[Local] "f_getLabel" (type CanonicalDefs))
                        (VarExpr[Local] "depth" (type u32)))))
            (ExprStmt
                (AppExpr "doBranch" (type void)
                    (VarExpr[ComponentMethod] "doBranch" (type Label -> void))
                    (VarExpr[Local] "doBranch" (type CanonicalDefs))
                    (VarExpr[Local] "label" (type Label))))
            (ReturnStmt
                (VarExpr[Void] "void" (type void))))
    method BR_IF()
        (BlockStmt
            (LocalStmt
                ("depth" (type u32)
                    (AppExpr "readImmULEB32" (type u32)
                        (VarExpr[ComponentMethod] "readImmULEB32" (type void -> u32))
                        (VarExpr[Local] "readImmULEB32" (type CanonicalDefs)))))
            (LocalStmt
                ("label" (type Label) (repHints #sidetable)
                    (AppExpr "f_getLabel" (type Label)
                        (VarExpr[ComponentMethod] "f_getLabel" (type u32 -> Label))
                        (VarExpr[Local] "f_getLabel" (type CanonicalDefs))
                        (VarExpr[Local] "depth" (type u32)))))
            (LocalStmt
                ("cond" (type int)
                    (AppExpr "pop_i32" (type int)
                        (VarExpr[ComponentMethod] "pop_i32" (type void -> int))
                        (VarExpr[Local] "pop_i32" (type CanonicalDefs)))))
            (IfStmt
                (BinOpExpr "!=" (type bool)
                    (VarExpr[Local] "cond" (type int))
                    (Literal "0" (type int)))
                (ExprStmt
                    (AppExpr "doBranch" (type void)
                        (VarExpr[ComponentMethod] "doBranch" (type Label -> void))
                        (VarExpr[Local] "doBranch" (type CanonicalDefs))
                        (VarExpr[Local] "label" (type Label))))
                (ExprStmt
                    (AppExpr "doFallThru" (type void)
                        (VarExpr[ComponentMethod] "doFallThru" (type void -> void))
                        (VarExpr[Local] "doFallThru" (type CanonicalDefs))))))
    method BLOCK()
        (BlockStmt
            (LocalStmt
                ("bt" (type int)
                    (AppExpr "readImmBlockType" (type int)
                        (VarExpr[ComponentMethod] "readImmBlockType" (type void -> int))
                        (VarExpr[Local] "readImmBlockType" (type CanonicalDefs)))))
            (ExprStmt
                (AppExpr "doBlock" (type void)
                    (VarExpr[ComponentMethod] "doBlock" (type int -> void))
                    (VarExpr[Local] "doBlock" (type CanonicalDefs))
                    (VarExpr[Local] "bt" (type int)))))
    method LOOP()
        (BlockStmt
            (LocalStmt
                ("bt" (type int)
                    (AppExpr "readImmBlockType" (type int)
                        (VarExpr[ComponentMethod] "readImmBlockType" (type void -> int))
                        (VarExpr[Local] "readImmBlockType" (type CanonicalDefs)))))
            (ExprStmt
                (AppExpr "doLoop" (type void)
                    (VarExpr[ComponentMethod] "doLoop" (type int -> void))
                    (VarExpr[Local] "doLoop" (type CanonicalDefs))
                    (VarExpr[Local] "bt" (type int)))))
    method TRY()
        (BlockStmt
            (LocalStmt
                ("bt" (type int)
                    (AppExpr "readImmBlockType" (type int)
                        (VarExpr[ComponentMethod] "readImmBlockType" (type void -> int))
                        (VarExpr[Local] "readImmBlockType" (type CanonicalDefs)))))
            (ExprStmt
                (AppExpr "doTry" (type void)
                    (VarExpr[ComponentMethod] "doTry" (type int -> void))
                    (VarExpr[Local] "doTry" (type CanonicalDefs))
                    (VarExpr[Local] "bt" (type int)))))
    method IF()
        (BlockStmt
            (LocalStmt
                ("bt" (type int)
                    (AppExpr "readImmBlockType" (type int)
                        (VarExpr[ComponentMethod] "readImmBlockType" (type void -> int))
                        (VarExpr[Local] "readImmBlockType" (type CanonicalDefs)))))
            (LocalStmt
                ("cond" (type int)
                    (AppExpr "pop_i32" (type int)
                        (VarExpr[ComponentMethod] "pop_i32" (type void -> int))
                        (VarExpr[Local] "pop_i32" (type CanonicalDefs)))))
            (LocalStmt
                ("label" (type Label)
                    (AppExpr "f_getLabel" (type Label)
                        (VarExpr[ComponentMethod] "f_getLabel" (type u32 -> Label))
                        (VarExpr[Local] "f_getLabel" (type CanonicalDefs))
                        (Literal "0" (type u32)))))
            (IfStmt
                (BinOpExpr "==" (type bool)
                    (VarExpr[Local] "cond" (type int))
                    (Literal "0" (type int)))
                (ExprStmt
                    (AppExpr "doBranch" (type void)
                        (VarExpr[ComponentMethod] "doBranch" (type Label -> void))
                        (VarExpr[Local] "doBranch" (type CanonicalDefs))
                        (VarExpr[Local] "label" (type Label))))
                (ExprStmt
                    (AppExpr "doFallThru" (type void)
                        (VarExpr[ComponentMethod] "doFallThru" (type void -> void))
                        (VarExpr[Local] "doFallThru" (type CanonicalDefs))))))
    method ELSE()
        (BlockStmt
            (LocalStmt
                ("label" (type Label)
                    (AppExpr "f_getLabel" (type Label)
                        (VarExpr[ComponentMethod] "f_getLabel" (type u32 -> Label))
                        (VarExpr[Local] "f_getLabel" (type CanonicalDefs))
                        (Literal "0" (type u32)))))
            (ExprStmt
                (AppExpr "doBranch" (type void)
                    (VarExpr[ComponentMethod] "doBranch" (type Label -> void))
                    (VarExpr[Local] "doBranch" (type CanonicalDefs))
                    (VarExpr[Local] "label" (type Label)))))
    method END()
        (BlockStmt
            (ExprStmt
                (AppExpr "doEnd" (type void)
                    (VarExpr[ComponentMethod] "doEnd" (type void -> void))
                    (VarExpr[Local] "doEnd" (type CanonicalDefs))))
            (IfStmt
                (AppExpr "f_isAtEnd" (type bool)
                    (VarExpr[ComponentMethod] "f_isAtEnd" (type void -> bool))
                    (VarExpr[Local] "f_isAtEnd" (type CanonicalDefs)))
                (ExprStmt
                    (AppExpr "doReturn" (type void)
                        (VarExpr[ComponentMethod] "doReturn" (type void -> void))
                        (VarExpr[Local] "doReturn" (type CanonicalDefs))))))
    method STRUCT_GET()
        (BlockStmt
            (LocalStmt
                ("struct_index" (type u32)
                    (AppExpr "readImmULEB32" (type u32)
                        (VarExpr[ComponentMethod] "readImmULEB32" (type void -> u32))
                        (VarExpr[Local] "readImmULEB32" (type CanonicalDefs)))))
            (LocalStmt
                ("field_index" (type u32)
                    (AppExpr "readImmULEB32" (type u32)
                        (VarExpr[ComponentMethod] "readImmULEB32" (type void -> u32))
                        (VarExpr[Local] "readImmULEB32" (type CanonicalDefs)))))
            (LocalStmt
                ("kind" (type FieldKind)
                    (AppExpr "m_getFieldKind" (type FieldKind)
                        (VarExpr[ComponentMethod] "m_getFieldKind" (type (u32, u32) -> FieldKind))
                        (VarExpr[Local] "m_getFieldKind" (type CanonicalDefs))
                        (VarExpr[Local] "struct_index" (type u32))
                        (VarExpr[Local] "field_index" (type u32)))))
            (LocalStmt
                ("offset" (type FieldOffset)
                    (AppExpr "m_getFieldOffset" (type FieldOffset)
                        (VarExpr[ComponentMethod] "m_getFieldOffset" (type (u32, u32) -> FieldOffset))
                        (VarExpr[Local] "m_getFieldOffset" (type CanonicalDefs))
                        (VarExpr[Local] "struct_index" (type u32))
                        (VarExpr[Local] "field_index" (type u32)))))
            (LocalStmt
                ("obj" (type Object)
                    (AppExpr "pop_Object" (type Object)
                        (VarExpr[ComponentMethod] "pop_Object" (type void -> Object))
                        (VarExpr[Local] "pop_Object" (type CanonicalDefs)))))
            (IfStmt
                (BinOpExpr "==" (type bool)
                    (VarExpr[Local] "obj" (type Object))
                    (Literal "null" (type #null) (implicitType Object)))
                (ReturnStmt
                    (AppExpr "trapNull" (type void)
                        (VarExpr[ComponentMethod] "trapNull" (type void -> void))
                        (VarExpr[Local] "trapNull" (type CanonicalDefs)))))
            (MatchStmt
                (VarExpr[Local] "kind" (type FieldKind))
                    (VarExpr[None] "I32")
                    (ExprStmt
                        (AppExpr "push_u32" (type void)
                            (VarExpr[ComponentMethod] "push_u32" (type u32 -> void))
                            (VarExpr[Local] "push_u32" (type CanonicalDefs))
                            (AppExpr "mach_readStructField_u32" (type u32)
                                (VarExpr[ComponentMethod] "mach_readStructField_u32" (type (Object, FieldOffset) -> u32))
                                (VarExpr[Local] "mach_readStructField_u32" (type CanonicalDefs))
                                (VarExpr[Local] "obj" (type Object))
                                (VarExpr[Local] "offset" (type FieldOffset)))))
                    (VarExpr[None] "I64")
                    (ExprStmt
                        (AppExpr "push_u64" (type void)
                            (VarExpr[ComponentMethod] "push_u64" (type u64 -> void))
                            (VarExpr[Local] "push_u64" (type CanonicalDefs))
                            (AppExpr "mach_readStructField_u64" (type u64)
                                (VarExpr[ComponentMethod] "mach_readStructField_u64" (type (Object, FieldOffset) -> u64))
                                (VarExpr[Local] "mach_readStructField_u64" (type CanonicalDefs))
                                (VarExpr[Local] "obj" (type Object))
                                (VarExpr[Local] "offset" (type FieldOffset)))))
                    (VarExpr[None] "F32")
                    (ExprStmt
                        (AppExpr "push_f32" (type void)
                            (VarExpr[ComponentMethod] "push_f32" (type float -> void))
                            (VarExpr[Local] "push_f32" (type CanonicalDefs))
                            (AppExpr "mach_readStructField_f32" (type float)
                                (VarExpr[ComponentMethod] "mach_readStructField_f32" (type (Object, FieldOffset) -> float))
                                (VarExpr[Local] "mach_readStructField_f32" (type CanonicalDefs))
                                (VarExpr[Local] "obj" (type Object))
                                (VarExpr[Local] "offset" (type FieldOffset)))))
                    (VarExpr[None] "F64")
                    (ExprStmt
                        (AppExpr "push_f64" (type void)
                            (VarExpr[ComponentMethod] "push_f64" (type double -> void))
                            (VarExpr[Local] "push_f64" (type CanonicalDefs))
                            (AppExpr "mach_readStructField_f64" (type double)
                                (VarExpr[ComponentMethod] "mach_readStructField_f64" (type (Object, FieldOffset) -> double))
                                (VarExpr[Local] "mach_readStructField_f64" (type CanonicalDefs))
                                (VarExpr[Local] "obj" (type Object))
                                (VarExpr[Local] "offset" (type FieldOffset)))))
                    (VarExpr[None] "V128")
                    (ExprStmt
                        (AppExpr "push_v128" (type void)
                            (VarExpr[ComponentMethod] "push_v128" (type v128 -> void))
                            (VarExpr[Local] "push_v128" (type CanonicalDefs))
                            (AppExpr "mach_readStructField_v128" (type v128)
                                (VarExpr[ComponentMethod] "mach_readStructField_v128" (type (Object, FieldOffset) -> v128))
                                (VarExpr[Local] "mach_readStructField_v128" (type CanonicalDefs))
                                (VarExpr[Local] "obj" (type Object))
                                (VarExpr[Local] "offset" (type FieldOffset)))))
                    (VarExpr[None] "REF")
                    (ExprStmt
                        (AppExpr "push_Object" (type void)
                            (VarExpr[ComponentMethod] "push_Object" (type Object -> void))
                            (VarExpr[Local] "push_Object" (type CanonicalDefs))
                            (AppExpr "mach_readStructField_Object" (type Object)
                                (VarExpr[ComponentMethod] "mach_readStructField_Object" (type (Object, FieldOffset) -> Object))
                                (VarExpr[Local] "mach_readStructField_Object" (type CanonicalDefs))
                                (VarExpr[Local] "obj" (type Object))
                                (VarExpr[Local] "offset" (type FieldOffset)))))
                    (DefCase)
                    (ReturnStmt
                        (AppExpr "invalid" (type void)
                            (VarExpr[ComponentMethod] "invalid" (type void -> void))
                            (VarExpr[Local] "invalid" (type CanonicalDefs))))))
    method STRUCT_GET_S()
        (BlockStmt
            (LocalStmt
                ("struct_index" (type u32)
                    (AppExpr "readImmULEB32" (type u32)
                        (VarExpr[ComponentMethod] "readImmULEB32" (type void -> u32))
                        (VarExpr[Local] "readImmULEB32" (type CanonicalDefs)))))
            (LocalStmt
                ("field_index" (type u32)
                    (AppExpr "readImmULEB32" (type u32)
                        (VarExpr[ComponentMethod] "readImmULEB32" (type void -> u32))
                        (VarExpr[Local] "readImmULEB32" (type CanonicalDefs)))))
            (LocalStmt
                ("kind" (type FieldKind)
                    (AppExpr "m_getFieldKind" (type FieldKind)
                        (VarExpr[ComponentMethod] "m_getFieldKind" (type (u32, u32) -> FieldKind))
                        (VarExpr[Local] "m_getFieldKind" (type CanonicalDefs))
                        (VarExpr[Local] "struct_index" (type u32))
                        (VarExpr[Local] "field_index" (type u32)))))
            (LocalStmt
                ("offset" (type FieldOffset)
                    (AppExpr "m_getFieldOffset" (type FieldOffset)
                        (VarExpr[ComponentMethod] "m_getFieldOffset" (type (u32, u32) -> FieldOffset))
                        (VarExpr[Local] "m_getFieldOffset" (type CanonicalDefs))
                        (VarExpr[Local] "struct_index" (type u32))
                        (VarExpr[Local] "field_index" (type u32)))))
            (LocalStmt
                ("obj" (type Object)
                    (AppExpr "pop_Object" (type Object)
                        (VarExpr[ComponentMethod] "pop_Object" (type void -> Object))
                        (VarExpr[Local] "pop_Object" (type CanonicalDefs)))))
            (IfStmt
                (BinOpExpr "==" (type bool)
                    (VarExpr[Local] "obj" (type Object))
                    (Literal "null" (type #null) (implicitType Object)))
                (ReturnStmt
                    (AppExpr "trapNull" (type void)
                        (VarExpr[ComponentMethod] "trapNull" (type void -> void))
                        (VarExpr[Local] "trapNull" (type CanonicalDefs)))))
            (MatchStmt
                (VarExpr[Local] "kind" (type FieldKind))
                    (VarExpr[None] "U8")
                    (ExprStmt
                        (AppExpr "push_u32" (type void)
                            (VarExpr[ComponentMethod] "push_u32" (type u32 -> void))
                            (VarExpr[Local] "push_u32" (type CanonicalDefs))
                            (AppExpr (type u32)
                                (VarExpr[Inst] "view" (type i8 -> u32)
                                    (VarExpr[Type] "u32" (type u32)))
                                (AppExpr "mach_readStructField_i8" (type i8)
                                    (VarExpr[ComponentMethod] "mach_readStructField_i8" (type (Object, FieldOffset) -> i8))
                                    (VarExpr[Local] "mach_readStructField_i8" (type CanonicalDefs))
                                    (VarExpr[Local] "obj" (type Object))
                                    (VarExpr[Local] "offset" (type FieldOffset))))))
                    (VarExpr[None] "U16")
                    (ExprStmt
                        (AppExpr "push_u32" (type void)
                            (VarExpr[ComponentMethod] "push_u32" (type u32 -> void))
                            (VarExpr[Local] "push_u32" (type CanonicalDefs))
                            (AppExpr (type u32)
                                (VarExpr[Inst] "view" (type short -> u32)
                                    (VarExpr[Type] "u32" (type u32)))
                                (AppExpr "mach_readStructField_i16" (type short)
                                    (VarExpr[ComponentMethod] "mach_readStructField_i16" (type (Object, FieldOffset) -> short))
                                    (VarExpr[Local] "mach_readStructField_i16" (type CanonicalDefs))
                                    (VarExpr[Local] "obj" (type Object))
                                    (VarExpr[Local] "offset" (type FieldOffset))))))
                    (DefCase)
                    (ReturnStmt
                        (AppExpr "invalid" (type void)
                            (VarExpr[ComponentMethod] "invalid" (type void -> void))
                            (VarExpr[Local] "invalid" (type CanonicalDefs))))))
    method STRUCT_GET_U()
        (BlockStmt
            (LocalStmt
                ("struct_index" (type u32)
                    (AppExpr "readImmULEB32" (type u32)
                        (VarExpr[ComponentMethod] "readImmULEB32" (type void -> u32))
                        (VarExpr[Local] "readImmULEB32" (type CanonicalDefs)))))
            (LocalStmt
                ("field_index" (type u32)
                    (AppExpr "readImmULEB32" (type u32)
                        (VarExpr[ComponentMethod] "readImmULEB32" (type void -> u32))
                        (VarExpr[Local] "readImmULEB32" (type CanonicalDefs)))))
            (LocalStmt
                ("kind" (type FieldKind)
                    (AppExpr "m_getFieldKind" (type FieldKind)
                        (VarExpr[ComponentMethod] "m_getFieldKind" (type (u32, u32) -> FieldKind))
                        (VarExpr[Local] "m_getFieldKind" (type CanonicalDefs))
                        (VarExpr[Local] "struct_index" (type u32))
                        (VarExpr[Local] "field_index" (type u32)))))
            (LocalStmt
                ("offset" (type FieldOffset)
                    (AppExpr "m_getFieldOffset" (type FieldOffset)
                        (VarExpr[ComponentMethod] "m_getFieldOffset" (type (u32, u32) -> FieldOffset))
                        (VarExpr[Local] "m_getFieldOffset" (type CanonicalDefs))
                        (VarExpr[Local] "struct_index" (type u32))
                        (VarExpr[Local] "field_index" (type u32)))))
            (LocalStmt
                ("obj" (type Object)
                    (AppExpr "pop_Object" (type Object)
                        (VarExpr[ComponentMethod] "pop_Object" (type void -> Object))
                        (VarExpr[Local] "pop_Object" (type CanonicalDefs)))))
            (IfStmt
                (BinOpExpr "==" (type bool)
                    (VarExpr[Local] "obj" (type Object))
                    (Literal "null" (type #null) (implicitType Object)))
                (ReturnStmt
                    (AppExpr "trapNull" (type void)
                        (VarExpr[ComponentMethod] "trapNull" (type void -> void))
                        (VarExpr[Local] "trapNull" (type CanonicalDefs)))))
            (MatchStmt
                (VarExpr[Local] "kind" (type FieldKind))
                    (VarExpr[None] "U8")
                    (ExprStmt
                        (AppExpr "push_u32" (type void)
                            (VarExpr[ComponentMethod] "push_u32" (type u32 -> void))
                            (VarExpr[Local] "push_u32" (type CanonicalDefs))
                            (AppExpr (type u32)
                                (VarExpr[Inst] "view" (type byte -> u32)
                                    (VarExpr[Type] "u32" (type u32)))
                                (AppExpr "mach_readStructField_u8" (type byte)
                                    (VarExpr[ComponentMethod] "mach_readStructField_u8" (type (Object, FieldOffset) -> byte))
                                    (VarExpr[Local] "mach_readStructField_u8" (type CanonicalDefs))
                                    (VarExpr[Local] "obj" (type Object))
                                    (VarExpr[Local] "offset" (type FieldOffset))))))
                    (VarExpr[None] "U16")
                    (ExprStmt
                        (AppExpr "push_u32" (type void)
                            (VarExpr[ComponentMethod] "push_u32" (type u32 -> void))
                            (VarExpr[Local] "push_u32" (type CanonicalDefs))
                            (AppExpr (type u32)
                                (VarExpr[Inst] "view" (type u16 -> u32)
                                    (VarExpr[Type] "u32" (type u32)))
                                (AppExpr "mach_readStructField_u16" (type u16)
                                    (VarExpr[ComponentMethod] "mach_readStructField_u16" (type (Object, FieldOffset) -> u16))
                                    (VarExpr[Local] "mach_readStructField_u16" (type CanonicalDefs))
                                    (VarExpr[Local] "obj" (type Object))
                                    (VarExpr[Local] "offset" (type FieldOffset))))))
                    (DefCase)
                    (ReturnStmt
                        (AppExpr "invalid" (type void)
                            (VarExpr[ComponentMethod] "invalid" (type void -> void))
                            (VarExpr[Local] "invalid" (type CanonicalDefs))))))
    method I32_LOAD()
        (BlockStmt
            (LocalStmt
                ("flags" (type byte)
                    (AppExpr "readImmU8" (type byte)
                        (VarExpr[ComponentMethod] "readImmU8" (type void -> byte))
                        (VarExpr[Local] "readImmU8" (type CanonicalDefs)))))
            (LocalStmt
                ("memindex" (type u32)
                    (Literal "0" (type u32))))
            (IfStmt
                (AppExpr (type bool)
                    (VarExpr[Inst] "!=" (type (byte, byte) -> bool)
                        (VarExpr[Type] "u8" (type byte)))
                    (AppExpr (type byte)
                        (VarExpr[Inst] "&" (type (byte, byte) -> byte)
                            (VarExpr[Type] "u8" (type byte)))
                        (VarExpr[Local] "flags" (type byte))
                        (VarExpr[ComponentField] "HAS_MEM_INDEX" (type byte)))
                    (Literal "0" (type byte)))
                (ExprStmt
                    (AssignExpr (type u32)
                        (VarExpr[Local] "memindex" (type u32))
                        (AppExpr "readImmULEB32" (type u32)
                            (VarExpr[ComponentMethod] "readImmULEB32" (type void -> u32))
                            (VarExpr[Local] "readImmULEB32" (type CanonicalDefs))))))
            (IfStmt
                (AppExpr "m_isMemory64" (type bool)
                    (VarExpr[ComponentMethod] "m_isMemory64" (type u32 -> bool))
                    (VarExpr[Local] "m_isMemory64" (type CanonicalDefs))
                    (VarExpr[Local] "memindex" (type u32)))
                (BlockStmt
                    (LocalStmt
                        ("offset" (type u64)
                            (AppExpr "readImmULEB64" (type u64)
                                (VarExpr[ComponentMethod] "readImmULEB64" (type void -> u64))
                                (VarExpr[Local] "readImmULEB64" (type CanonicalDefs)))))
                    (LocalStmt
                        ("index" (type u64)
                            (AppExpr "pop_u64" (type u64)
                                (VarExpr[ComponentMethod] "pop_u64" (type void -> u64))
                                (VarExpr[Local] "pop_u64" (type CanonicalDefs)))))
                    (LocalStmt
                        ("val" (type u32)
                            (AppExpr "mach_readMemory64_u32" (type u32)
                                (VarExpr[ComponentMethod] "mach_readMemory64_u32" (type (u32, u64, u64) -> u32))
                                (VarExpr[Local] "mach_readMemory64_u32" (type CanonicalDefs))
                                (VarExpr[Local] "memindex" (type u32))
                                (VarExpr[Local] "index" (type u64))
                                (VarExpr[Local] "offset" (type u64)))))
                    (ExprStmt
                        (AppExpr "push_u32" (type void)
                            (VarExpr[ComponentMethod] "push_u32" (type u32 -> void))
                            (VarExpr[Local] "push_u32" (type CanonicalDefs))
                            (VarExpr[Local] "val" (type u32)))))
                (BlockStmt
                    (LocalStmt
                        ("offset" (type u32)
                            (AppExpr "readImmULEB32" (type u32)
                                (VarExpr[ComponentMethod] "readImmULEB32" (type void -> u32))
                                (VarExpr[Local] "readImmULEB32" (type CanonicalDefs)))))
                    (LocalStmt
                        ("index" (type u32)
                            (AppExpr "pop_u32" (type u32)
                                (VarExpr[ComponentMethod] "pop_u32" (type void -> u32))
                                (VarExpr[Local] "pop_u32" (type CanonicalDefs)))))
                    (LocalStmt
                        ("val" (type u32)
                            (AppExpr "mach_readMemory32_u32" (type u32)
                                (VarExpr[ComponentMethod] "mach_readMemory32_u32" (type (u32, u32, u32) -> u32))
                                (VarExpr[Local] "mach_readMemory32_u32" (type CanonicalDefs))
                                (VarExpr[Local] "memindex" (type u32))
                                (VarExpr[Local] "index" (type u32))
                                (VarExpr[Local] "offset" (type u32)))))
                    (ExprStmt
                        (AppExpr "push_u32" (type void)
                            (VarExpr[ComponentMethod] "push_u32" (type u32 -> void))
                            (VarExpr[Local] "push_u32" (type CanonicalDefs))
                            (VarExpr[Local] "val" (type u32)))))))
}
class v128 {
    new(low: u64, high: u64)
        (BlockStmt)
    def low: u64;
    def high: u64;
}
class Label {
    new()
        (BlockStmt)
}
class Value {
    new()
        (BlockStmt)
}
class Object {
    new()
        (BlockStmt)
}
class TypeVar {
    new()
        (BlockStmt)
}
class FieldOffset {
    new()
        (BlockStmt)
}
class Signature {
    new()
        (BlockStmt)
}
class Function {
    new()
        (BlockStmt)
}
