component CanonicalDefs {
    new()
        (BlockStmt)
    def HAS_MEM_INDEX: null = 
        (Literal "0x40u8": byte);
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
                (AppExpr "trapUnreachable": void
                    (VarExpr[ComponentMethod] "trapUnreachable": void -> void)
                    (VarExpr[Local] "trapUnreachable": CanonicalDefs))))
    method NOP()
        (BlockStmt)
    method LOCAL_GET()
        (BlockStmt
            (LocalStmt
                ("index": u32
                    (AppExpr "readImmULEB32": u32
                        (VarExpr[ComponentMethod] "readImmULEB32": void -> u32)
                        (VarExpr[Local] "readImmULEB32": CanonicalDefs))))
            (LocalStmt
                ("tv": TypeVar
                    (AppExpr "f_getLocalType": TypeVar
                        (VarExpr[ComponentMethod] "f_getLocalType": u32 -> TypeVar)
                        (VarExpr[Local] "f_getLocalType": CanonicalDefs)
                        (VarExpr[Local] "index": u32))))
            (LocalStmt
                ("val": Value
                    (AppExpr "getLocal": Value
                        (VarExpr[ComponentMethod] "getLocal": (TypeVar, u32) -> Value)
                        (VarExpr[Local] "getLocal": CanonicalDefs)
                        (VarExpr[Local] "tv": TypeVar)
                        (VarExpr[Local] "index": u32))))
            (ExprStmt
                (AppExpr "push_Value": void
                    (VarExpr[ComponentMethod] "push_Value": (TypeVar, Value) -> void)
                    (VarExpr[Local] "push_Value": CanonicalDefs)
                    (VarExpr[Local] "tv": TypeVar)
                    (VarExpr[Local] "val": Value))))
    method LOCAL_SET()
        (BlockStmt
            (LocalStmt
                ("index": u32
                    (AppExpr "readImmULEB32": u32
                        (VarExpr[ComponentMethod] "readImmULEB32": void -> u32)
                        (VarExpr[Local] "readImmULEB32": CanonicalDefs))))
            (LocalStmt
                ("tv": TypeVar
                    (AppExpr "f_getLocalType": TypeVar
                        (VarExpr[ComponentMethod] "f_getLocalType": u32 -> TypeVar)
                        (VarExpr[Local] "f_getLocalType": CanonicalDefs)
                        (VarExpr[Local] "index": u32))))
            (LocalStmt
                ("val": Value
                    (AppExpr "pop_Value": Value
                        (VarExpr[ComponentMethod] "pop_Value": TypeVar -> Value)
                        (VarExpr[Local] "pop_Value": CanonicalDefs)
                        (VarExpr[Local] "tv": TypeVar))))
            (ExprStmt
                (AppExpr "setLocal": void
                    (VarExpr[ComponentMethod] "setLocal": (TypeVar, u32, Value) -> void)
                    (VarExpr[Local] "setLocal": CanonicalDefs)
                    (VarExpr[Local] "tv": TypeVar)
                    (VarExpr[Local] "index": u32)
                    (VarExpr[Local] "val": Value))))
    method LOCAL_TEE()
        (BlockStmt
            (LocalStmt
                ("index": u32
                    (AppExpr "readImmULEB32": u32
                        (VarExpr[ComponentMethod] "readImmULEB32": void -> u32)
                        (VarExpr[Local] "readImmULEB32": CanonicalDefs))))
            (LocalStmt
                ("tv": TypeVar
                    (AppExpr "f_getLocalType": TypeVar
                        (VarExpr[ComponentMethod] "f_getLocalType": u32 -> TypeVar)
                        (VarExpr[Local] "f_getLocalType": CanonicalDefs)
                        (VarExpr[Local] "index": u32))))
            (LocalStmt
                ("val": Value
                    (AppExpr "pop_Value": Value
                        (VarExpr[ComponentMethod] "pop_Value": TypeVar -> Value)
                        (VarExpr[Local] "pop_Value": CanonicalDefs)
                        (VarExpr[Local] "tv": TypeVar))))
            (ExprStmt
                (AppExpr "setLocal": void
                    (VarExpr[ComponentMethod] "setLocal": (TypeVar, u32, Value) -> void)
                    (VarExpr[Local] "setLocal": CanonicalDefs)
                    (VarExpr[Local] "tv": TypeVar)
                    (VarExpr[Local] "index": u32)
                    (VarExpr[Local] "val": Value)))
            (ExprStmt
                (AppExpr "push_Value": void
                    (VarExpr[ComponentMethod] "push_Value": (TypeVar, Value) -> void)
                    (VarExpr[Local] "push_Value": CanonicalDefs)
                    (VarExpr[Local] "tv": TypeVar)
                    (VarExpr[Local] "val": Value))))
    method GLOBAL_GET()
        (BlockStmt
            (LocalStmt
                ("index": u32
                    (AppExpr "readImmULEB32": u32
                        (VarExpr[ComponentMethod] "readImmULEB32": void -> u32)
                        (VarExpr[Local] "readImmULEB32": CanonicalDefs))))
            (LocalStmt
                ("tv": TypeVar
                    (AppExpr "m_getGlobalType": TypeVar
                        (VarExpr[ComponentMethod] "m_getGlobalType": u32 -> TypeVar)
                        (VarExpr[Local] "m_getGlobalType": CanonicalDefs)
                        (VarExpr[Local] "index": u32))))
            (LocalStmt
                ("val": Value
                    (AppExpr "getGlobal": Value
                        (VarExpr[ComponentMethod] "getGlobal": (TypeVar, u32) -> Value)
                        (VarExpr[Local] "getGlobal": CanonicalDefs)
                        (VarExpr[Local] "tv": TypeVar)
                        (VarExpr[Local] "index": u32))))
            (ExprStmt
                (AppExpr "push_Value": void
                    (VarExpr[ComponentMethod] "push_Value": (TypeVar, Value) -> void)
                    (VarExpr[Local] "push_Value": CanonicalDefs)
                    (VarExpr[Local] "tv": TypeVar)
                    (VarExpr[Local] "val": Value))))
    method GLOBAL_SET()
        (BlockStmt
            (LocalStmt
                ("index": u32
                    (AppExpr "readImmULEB32": u32
                        (VarExpr[ComponentMethod] "readImmULEB32": void -> u32)
                        (VarExpr[Local] "readImmULEB32": CanonicalDefs))))
            (LocalStmt
                ("tv": TypeVar
                    (AppExpr "m_getGlobalType": TypeVar
                        (VarExpr[ComponentMethod] "m_getGlobalType": u32 -> TypeVar)
                        (VarExpr[Local] "m_getGlobalType": CanonicalDefs)
                        (VarExpr[Local] "index": u32))))
            (LocalStmt
                ("val": Value
                    (AppExpr "pop_Value": Value
                        (VarExpr[ComponentMethod] "pop_Value": TypeVar -> Value)
                        (VarExpr[Local] "pop_Value": CanonicalDefs)
                        (VarExpr[Local] "tv": TypeVar))))
            (ExprStmt
                (AppExpr "setGlobal": void
                    (VarExpr[ComponentMethod] "setGlobal": (TypeVar, u32, Value) -> void)
                    (VarExpr[Local] "setGlobal": CanonicalDefs)
                    (VarExpr[Local] "tv": TypeVar)
                    (VarExpr[Local] "index": u32)
                    (VarExpr[Local] "val": Value))))
    method TABLE_GET()
        (BlockStmt
            (LocalStmt
                ("table_index": u32
                    (AppExpr "readImmULEB32": u32
                        (VarExpr[ComponentMethod] "readImmULEB32": void -> u32)
                        (VarExpr[Local] "readImmULEB32": CanonicalDefs))))
            (IfStmt
                (AppExpr "m_isTable64": bool
                    (VarExpr[ComponentMethod] "m_isTable64": u32 -> bool)
                    (VarExpr[Local] "m_isTable64": CanonicalDefs)
                    (VarExpr[Local] "table_index": u32))
                (BlockStmt
                    (LocalStmt
                        ("index": u64
                            (AppExpr "pop_u64": u64
                                (VarExpr[ComponentMethod] "pop_u64": void -> u64)
                                (VarExpr[Local] "pop_u64": CanonicalDefs))))
                    (LocalStmt
                        ("val": Object
                            (AppExpr "mach_readTable64": Object
                                (VarExpr[ComponentMethod] "mach_readTable64": (u32, u64) -> Object)
                                (VarExpr[Local] "mach_readTable64": CanonicalDefs)
                                (VarExpr[Local] "table_index": u32)
                                (VarExpr[Local] "index": u64))))
                    (ExprStmt
                        (AppExpr "push_Object": void
                            (VarExpr[ComponentMethod] "push_Object": Object -> void)
                            (VarExpr[Local] "push_Object": CanonicalDefs)
                            (VarExpr[Local] "val": Object))))
                (BlockStmt
                    (LocalStmt
                        ("index": u32
                            (AppExpr "pop_u32": u32
                                (VarExpr[ComponentMethod] "pop_u32": void -> u32)
                                (VarExpr[Local] "pop_u32": CanonicalDefs))))
                    (LocalStmt
                        ("val": Object
                            (AppExpr "mach_readTable32": Object
                                (VarExpr[ComponentMethod] "mach_readTable32": (u32, u32) -> Object)
                                (VarExpr[Local] "mach_readTable32": CanonicalDefs)
                                (VarExpr[Local] "table_index": u32)
                                (VarExpr[Local] "index": u32))))
                    (ExprStmt
                        (AppExpr "push_Object": void
                            (VarExpr[ComponentMethod] "push_Object": Object -> void)
                            (VarExpr[Local] "push_Object": CanonicalDefs)
                            (VarExpr[Local] "val": Object))))))
    method TABLE_SET()
        (BlockStmt
            (LocalStmt
                ("table_index": u32
                    (AppExpr "readImmULEB32": u32
                        (VarExpr[ComponentMethod] "readImmULEB32": void -> u32)
                        (VarExpr[Local] "readImmULEB32": CanonicalDefs))))
            (IfStmt
                (AppExpr "m_isTable64": bool
                    (VarExpr[ComponentMethod] "m_isTable64": u32 -> bool)
                    (VarExpr[Local] "m_isTable64": CanonicalDefs)
                    (VarExpr[Local] "table_index": u32))
                (BlockStmt
                    (LocalStmt
                        ("val": Object
                            (AppExpr "pop_Object": Object
                                (VarExpr[ComponentMethod] "pop_Object": void -> Object)
                                (VarExpr[Local] "pop_Object": CanonicalDefs))))
                    (LocalStmt
                        ("index": u64
                            (AppExpr "pop_u64": u64
                                (VarExpr[ComponentMethod] "pop_u64": void -> u64)
                                (VarExpr[Local] "pop_u64": CanonicalDefs))))
                    (ExprStmt
                        (AppExpr "mach_writeTable64": void
                            (VarExpr[ComponentMethod] "mach_writeTable64": (u32, u64, Object) -> void)
                            (VarExpr[Local] "mach_writeTable64": CanonicalDefs)
                            (VarExpr[Local] "table_index": u32)
                            (VarExpr[Local] "index": u64)
                            (VarExpr[Local] "val": Object))))
                (BlockStmt
                    (LocalStmt
                        ("val": Object
                            (AppExpr "pop_Object": Object
                                (VarExpr[ComponentMethod] "pop_Object": void -> Object)
                                (VarExpr[Local] "pop_Object": CanonicalDefs))))
                    (LocalStmt
                        ("index": u32
                            (AppExpr "pop_u32": u32
                                (VarExpr[ComponentMethod] "pop_u32": void -> u32)
                                (VarExpr[Local] "pop_u32": CanonicalDefs))))
                    (ExprStmt
                        (AppExpr "mach_writeTable32": void
                            (VarExpr[ComponentMethod] "mach_writeTable32": (u32, u32, Object) -> void)
                            (VarExpr[Local] "mach_writeTable32": CanonicalDefs)
                            (VarExpr[Local] "table_index": u32)
                            (VarExpr[Local] "index": u32)
                            (VarExpr[Local] "val": Object))))))
    method CALL()
        (BlockStmt
            (LocalStmt
                ("index": u32
                    (AppExpr "readImmULEB32": u32
                        (VarExpr[ComponentMethod] "readImmULEB32": void -> u32)
                        (VarExpr[Local] "readImmULEB32": CanonicalDefs))))
            (LocalStmt
                ("sig": Signature
                    (AppExpr "m_getFuncSignature": Signature
                        (VarExpr[ComponentMethod] "m_getFuncSignature": u32 -> Signature)
                        (VarExpr[Local] "m_getFuncSignature": CanonicalDefs)
                        (VarExpr[Local] "index": u32))))
            (LocalStmt
                ("target": Function
                    (AppExpr "i_getFunction": Function
                        (VarExpr[ComponentMethod] "i_getFunction": u32 -> Function)
                        (VarExpr[Local] "i_getFunction": CanonicalDefs)
                        (VarExpr[Local] "index": u32))))
            (ExprStmt
                (AppExpr "doCall": void
                    (VarExpr[ComponentMethod] "doCall": (Signature, Function) -> void)
                    (VarExpr[Local] "doCall": CanonicalDefs)
                    (VarExpr[Local] "sig": Signature)
                    (VarExpr[Local] "target": Function))))
    method CALL_INDIRECT()
        (BlockStmt
            (LocalStmt
                ("sig_index": u32
                    (AppExpr "readImmULEB32": u32
                        (VarExpr[ComponentMethod] "readImmULEB32": void -> u32)
                        (VarExpr[Local] "readImmULEB32": CanonicalDefs))))
            (LocalStmt
                ("table_index": u32
                    (AppExpr "readImmULEB32": u32
                        (VarExpr[ComponentMethod] "readImmULEB32": void -> u32)
                        (VarExpr[Local] "readImmULEB32": CanonicalDefs))))
            (LocalStmt
                ("sig": Signature
                    (AppExpr "m_getSignature": Signature
                        (VarExpr[ComponentMethod] "m_getSignature": u32 -> Signature)
                        (VarExpr[Local] "m_getSignature": CanonicalDefs)
                        (VarExpr[Local] "sig_index": u32))))
            (IfStmt
                (AppExpr "m_isTable64": bool
                    (VarExpr[ComponentMethod] "m_isTable64": u32 -> bool)
                    (VarExpr[Local] "m_isTable64": CanonicalDefs)
                    (VarExpr[Local] "table_index": u32))
                (BlockStmt
                    (LocalStmt
                        ("func_index": u64
                            (AppExpr "pop_u64": u64
                                (VarExpr[ComponentMethod] "pop_u64": void -> u64)
                                (VarExpr[Local] "pop_u64": CanonicalDefs))))
                    (LocalStmt
                        ("target": Function
                            (AppExpr "i_getTableFunction64": Function
                                (VarExpr[ComponentMethod] "i_getTableFunction64": (u32, Signature, u64) -> Function)
                                (VarExpr[Local] "i_getTableFunction64": CanonicalDefs)
                                (VarExpr[Local] "table_index": u32)
                                (VarExpr[Local] "sig": Signature)
                                (VarExpr[Local] "func_index": u64))))
                    (ExprStmt
                        (AppExpr "doCall": void
                            (VarExpr[ComponentMethod] "doCall": (Signature, Function) -> void)
                            (VarExpr[Local] "doCall": CanonicalDefs)
                            (VarExpr[Local] "sig": Signature)
                            (VarExpr[Local] "target": Function))))
                (BlockStmt
                    (LocalStmt
                        ("func_index": u32
                            (AppExpr "pop_u32": u32
                                (VarExpr[ComponentMethod] "pop_u32": void -> u32)
                                (VarExpr[Local] "pop_u32": CanonicalDefs))))
                    (LocalStmt
                        ("target": Function
                            (AppExpr "i_getTableFunction32": Function
                                (VarExpr[ComponentMethod] "i_getTableFunction32": (u32, Signature, u32) -> Function)
                                (VarExpr[Local] "i_getTableFunction32": CanonicalDefs)
                                (VarExpr[Local] "table_index": u32)
                                (VarExpr[Local] "sig": Signature)
                                (VarExpr[Local] "func_index": u32))))
                    (ExprStmt
                        (AppExpr "doCall": void
                            (VarExpr[ComponentMethod] "doCall": (Signature, Function) -> void)
                            (VarExpr[Local] "doCall": CanonicalDefs)
                            (VarExpr[Local] "sig": Signature)
                            (VarExpr[Local] "target": Function))))))
    method I32_CONST()
        (BlockStmt
            (LocalStmt
                ("x": int
                    (AppExpr "readImmILEB32": int
                        (VarExpr[ComponentMethod] "readImmILEB32": void -> int)
                        (VarExpr[Local] "readImmILEB32": CanonicalDefs))))
            (ExprStmt
                (AppExpr "push_i32": void
                    (VarExpr[ComponentMethod] "push_i32": int -> void)
                    (VarExpr[Local] "push_i32": CanonicalDefs)
                    (VarExpr[Local] "x": int))))
    method I32_ADD()
        (BlockStmt
            (LocalStmt
                ("x": int
                    (AppExpr "pop_i32": int
                        (VarExpr[ComponentMethod] "pop_i32": void -> int)
                        (VarExpr[Local] "pop_i32": CanonicalDefs))))
            (LocalStmt
                ("y": int
                    (AppExpr "pop_i32": int
                        (VarExpr[ComponentMethod] "pop_i32": void -> int)
                        (VarExpr[Local] "pop_i32": CanonicalDefs))))
            (LocalStmt
                ("r": int
                    (AppExpr: int
                        (VarExpr[Inst] "+": (int, int) -> int
                            (VarExpr[Type] "i32": int))
                        (VarExpr[Local] "x": int)
                        (VarExpr[Local] "y": int))))
            (ExprStmt
                (AppExpr "push_i32": void
                    (VarExpr[ComponentMethod] "push_i32": int -> void)
                    (VarExpr[Local] "push_i32": CanonicalDefs)
                    (VarExpr[Local] "r": int))))
    method I32_SUB()
        (BlockStmt
            (LocalStmt
                ("x": int
                    (AppExpr "pop_i32": int
                        (VarExpr[ComponentMethod] "pop_i32": void -> int)
                        (VarExpr[Local] "pop_i32": CanonicalDefs))))
            (LocalStmt
                ("y": int
                    (AppExpr "pop_i32": int
                        (VarExpr[ComponentMethod] "pop_i32": void -> int)
                        (VarExpr[Local] "pop_i32": CanonicalDefs))))
            (LocalStmt
                ("r": int
                    (AppExpr: int
                        (VarExpr[Inst] "-": (int, int) -> int
                            (VarExpr[Type] "i32": int))
                        (VarExpr[Local] "y": int)
                        (VarExpr[Local] "x": int))))
            (ExprStmt
                (AppExpr "push_i32": void
                    (VarExpr[ComponentMethod] "push_i32": int -> void)
                    (VarExpr[Local] "push_i32": CanonicalDefs)
                    (VarExpr[Local] "r": int))))
    method I32_EQZ()
        (BlockStmt
            (LocalStmt
                ("x": int
                    (AppExpr "pop_i32": int
                        (VarExpr[ComponentMethod] "pop_i32": void -> int)
                        (VarExpr[Local] "pop_i32": CanonicalDefs))))
            (IfStmt
                (BinOpExpr "==": bool
                    (VarExpr[Local] "x": int)
                    (Literal "0": int))
                (ExprStmt
                    (AppExpr "push_i32": void
                        (VarExpr[ComponentMethod] "push_i32": int -> void)
                        (VarExpr[Local] "push_i32": CanonicalDefs)
                        (Literal "1": int)))
                (ExprStmt
                    (AppExpr "push_i32": void
                        (VarExpr[ComponentMethod] "push_i32": int -> void)
                        (VarExpr[Local] "push_i32": CanonicalDefs)
                        (Literal "0": int)))))
    method BR()
        (BlockStmt
            (LocalStmt
                ("depth": u32
                    (AppExpr "readImmULEB32": u32
                        (VarExpr[ComponentMethod] "readImmULEB32": void -> u32)
                        (VarExpr[Local] "readImmULEB32": CanonicalDefs))))
            (LocalStmt
                ("label": Label
                    (AppExpr "f_getLabel": Label
                        (VarExpr[ComponentMethod] "f_getLabel": u32 -> Label)
                        (VarExpr[Local] "f_getLabel": CanonicalDefs)
                        (VarExpr[Local] "depth": u32))))
            (ReturnStmt
                (AppExpr "doBranch": void
                    (VarExpr[ComponentMethod] "doBranch": Label -> void)
                    (VarExpr[Local] "doBranch": CanonicalDefs)
                    (VarExpr[Local] "label": Label))))
    method BR_IF()
        (BlockStmt
            (LocalStmt
                ("depth": u32
                    (AppExpr "readImmULEB32": u32
                        (VarExpr[ComponentMethod] "readImmULEB32": void -> u32)
                        (VarExpr[Local] "readImmULEB32": CanonicalDefs))))
            (LocalStmt
                ("label": Label
                    (AppExpr "f_getLabel": Label
                        (VarExpr[ComponentMethod] "f_getLabel": u32 -> Label)
                        (VarExpr[Local] "f_getLabel": CanonicalDefs)
                        (VarExpr[Local] "depth": u32))))
            (LocalStmt
                ("cond": u32
                    (AppExpr "pop_u32": u32
                        (VarExpr[ComponentMethod] "pop_u32": void -> u32)
                        (VarExpr[Local] "pop_u32": CanonicalDefs))))
            (IfStmt
                (AppExpr: bool
                    (VarExpr[Inst] "!=": (u32, u32) -> bool
                        (VarExpr[Type] "u32": u32))
                    (VarExpr[Local] "cond": u32)
                    (Literal "0": u32))
                (ReturnStmt
                    (AppExpr "doBranch": void
                        (VarExpr[ComponentMethod] "doBranch": Label -> void)
                        (VarExpr[Local] "doBranch": CanonicalDefs)
                        (VarExpr[Local] "label": Label))))
            (ExprStmt
                (AppExpr "doFallThru": void
                    (VarExpr[ComponentMethod] "doFallThru": void -> void)
                    (VarExpr[Local] "doFallThru": CanonicalDefs))))
    method BLOCK()
        (BlockStmt
            (LocalStmt
                ("bt": int
                    (AppExpr "readImmBlockType": int
                        (VarExpr[ComponentMethod] "readImmBlockType": void -> int)
                        (VarExpr[Local] "readImmBlockType": CanonicalDefs))))
            (ReturnStmt
                (AppExpr "doBlock": void
                    (VarExpr[ComponentMethod] "doBlock": int -> void)
                    (VarExpr[Local] "doBlock": CanonicalDefs)
                    (VarExpr[Local] "bt": int))))
    method LOOP()
        (BlockStmt
            (LocalStmt
                ("bt": int
                    (AppExpr "readImmBlockType": int
                        (VarExpr[ComponentMethod] "readImmBlockType": void -> int)
                        (VarExpr[Local] "readImmBlockType": CanonicalDefs))))
            (ReturnStmt
                (AppExpr "doLoop": void
                    (VarExpr[ComponentMethod] "doLoop": int -> void)
                    (VarExpr[Local] "doLoop": CanonicalDefs)
                    (VarExpr[Local] "bt": int))))
    method TRY()
        (BlockStmt
            (LocalStmt
                ("bt": int
                    (AppExpr "readImmBlockType": int
                        (VarExpr[ComponentMethod] "readImmBlockType": void -> int)
                        (VarExpr[Local] "readImmBlockType": CanonicalDefs))))
            (ReturnStmt
                (AppExpr "doTry": void
                    (VarExpr[ComponentMethod] "doTry": int -> void)
                    (VarExpr[Local] "doTry": CanonicalDefs)
                    (VarExpr[Local] "bt": int))))
    method IF()
        (BlockStmt
            (LocalStmt
                ("bt": int
                    (AppExpr "readImmBlockType": int
                        (VarExpr[ComponentMethod] "readImmBlockType": void -> int)
                        (VarExpr[Local] "readImmBlockType": CanonicalDefs))))
            (LocalStmt
                ("cond": int
                    (AppExpr "pop_i32": int
                        (VarExpr[ComponentMethod] "pop_i32": void -> int)
                        (VarExpr[Local] "pop_i32": CanonicalDefs))))
            (LocalStmt
                ("label": Label
                    (AppExpr "f_getLabel": Label
                        (VarExpr[ComponentMethod] "f_getLabel": u32 -> Label)
                        (VarExpr[Local] "f_getLabel": CanonicalDefs)
                        (Literal "0": u32))))
            (IfStmt
                (BinOpExpr "==": bool
                    (VarExpr[Local] "cond": int)
                    (Literal "0": int))
                (ReturnStmt
                    (AppExpr "doBranch": void
                        (VarExpr[ComponentMethod] "doBranch": Label -> void)
                        (VarExpr[Local] "doBranch": CanonicalDefs)
                        (VarExpr[Local] "label": Label)))
                (ReturnStmt
                    (AppExpr "doFallThru": void
                        (VarExpr[ComponentMethod] "doFallThru": void -> void)
                        (VarExpr[Local] "doFallThru": CanonicalDefs)))))
    method ELSE()
        (BlockStmt
            (LocalStmt
                ("label": Label
                    (AppExpr "f_getLabel": Label
                        (VarExpr[ComponentMethod] "f_getLabel": u32 -> Label)
                        (VarExpr[Local] "f_getLabel": CanonicalDefs)
                        (Literal "0": u32))))
            (ReturnStmt
                (AppExpr "doBranch": void
                    (VarExpr[ComponentMethod] "doBranch": Label -> void)
                    (VarExpr[Local] "doBranch": CanonicalDefs)
                    (VarExpr[Local] "label": Label))))
    method END()
        (BlockStmt
            (ExprStmt
                (AppExpr "doEnd": void
                    (VarExpr[ComponentMethod] "doEnd": void -> void)
                    (VarExpr[Local] "doEnd": CanonicalDefs)))
            (IfStmt
                (AppExpr "f_isAtEnd": bool
                    (VarExpr[ComponentMethod] "f_isAtEnd": void -> bool)
                    (VarExpr[Local] "f_isAtEnd": CanonicalDefs))
                (ReturnStmt
                    (AppExpr "doReturn": void
                        (VarExpr[ComponentMethod] "doReturn": void -> void)
                        (VarExpr[Local] "doReturn": CanonicalDefs)))))
    method STRUCT_GET()
        (BlockStmt
            (LocalStmt
                ("struct_index": u32
                    (AppExpr "readImmULEB32": u32
                        (VarExpr[ComponentMethod] "readImmULEB32": void -> u32)
                        (VarExpr[Local] "readImmULEB32": CanonicalDefs))))
            (LocalStmt
                ("field_index": u32
                    (AppExpr "readImmULEB32": u32
                        (VarExpr[ComponentMethod] "readImmULEB32": void -> u32)
                        (VarExpr[Local] "readImmULEB32": CanonicalDefs))))
            (LocalStmt
                ("kind": FieldKind
                    (AppExpr "m_getFieldKind": FieldKind
                        (VarExpr[ComponentMethod] "m_getFieldKind": (u32, u32) -> FieldKind)
                        (VarExpr[Local] "m_getFieldKind": CanonicalDefs)
                        (VarExpr[Local] "struct_index": u32)
                        (VarExpr[Local] "field_index": u32))))
            (LocalStmt
                ("offset": FieldOffset
                    (AppExpr "m_getFieldOffset": FieldOffset
                        (VarExpr[ComponentMethod] "m_getFieldOffset": (u32, u32) -> FieldOffset)
                        (VarExpr[Local] "m_getFieldOffset": CanonicalDefs)
                        (VarExpr[Local] "struct_index": u32)
                        (VarExpr[Local] "field_index": u32))))
            (LocalStmt
                ("obj": Object
                    (AppExpr "pop_Object": Object
                        (VarExpr[ComponentMethod] "pop_Object": void -> Object)
                        (VarExpr[Local] "pop_Object": CanonicalDefs))))
            (IfStmt
                (BinOpExpr "==": bool
                    (VarExpr[Local] "obj": Object)
                    (Literal "null": #null implicitly Object))
                (ReturnStmt
                    (AppExpr "trapNull": void
                        (VarExpr[ComponentMethod] "trapNull": void -> void)
                        (VarExpr[Local] "trapNull": CanonicalDefs))))
            (MatchStmt
                (VarExpr[Local] "kind": FieldKind)
                    (VarExpr[None] "I32")
                    (ExprStmt
                        (AppExpr "push_u32": void
                            (VarExpr[ComponentMethod] "push_u32": u32 -> void)
                            (VarExpr[Local] "push_u32": CanonicalDefs)
                            (AppExpr "mach_readStructField_u32": u32
                                (VarExpr[ComponentMethod] "mach_readStructField_u32": (Object, FieldOffset) -> u32)
                                (VarExpr[Local] "mach_readStructField_u32": CanonicalDefs)
                                (VarExpr[Local] "obj": Object)
                                (VarExpr[Local] "offset": FieldOffset))))
                    (VarExpr[None] "I64")
                    (ExprStmt
                        (AppExpr "push_u64": void
                            (VarExpr[ComponentMethod] "push_u64": u64 -> void)
                            (VarExpr[Local] "push_u64": CanonicalDefs)
                            (AppExpr "mach_readStructField_u64": u64
                                (VarExpr[ComponentMethod] "mach_readStructField_u64": (Object, FieldOffset) -> u64)
                                (VarExpr[Local] "mach_readStructField_u64": CanonicalDefs)
                                (VarExpr[Local] "obj": Object)
                                (VarExpr[Local] "offset": FieldOffset))))
                    (VarExpr[None] "F32")
                    (ExprStmt
                        (AppExpr "push_f32": void
                            (VarExpr[ComponentMethod] "push_f32": float -> void)
                            (VarExpr[Local] "push_f32": CanonicalDefs)
                            (AppExpr "mach_readStructField_f32": float
                                (VarExpr[ComponentMethod] "mach_readStructField_f32": (Object, FieldOffset) -> float)
                                (VarExpr[Local] "mach_readStructField_f32": CanonicalDefs)
                                (VarExpr[Local] "obj": Object)
                                (VarExpr[Local] "offset": FieldOffset))))
                    (VarExpr[None] "F64")
                    (ExprStmt
                        (AppExpr "push_f64": void
                            (VarExpr[ComponentMethod] "push_f64": double -> void)
                            (VarExpr[Local] "push_f64": CanonicalDefs)
                            (AppExpr "mach_readStructField_f64": double
                                (VarExpr[ComponentMethod] "mach_readStructField_f64": (Object, FieldOffset) -> double)
                                (VarExpr[Local] "mach_readStructField_f64": CanonicalDefs)
                                (VarExpr[Local] "obj": Object)
                                (VarExpr[Local] "offset": FieldOffset))))
                    (VarExpr[None] "V128")
                    (ExprStmt
                        (AppExpr "push_v128": void
                            (VarExpr[ComponentMethod] "push_v128": v128 -> void)
                            (VarExpr[Local] "push_v128": CanonicalDefs)
                            (AppExpr "mach_readStructField_v128": v128
                                (VarExpr[ComponentMethod] "mach_readStructField_v128": (Object, FieldOffset) -> v128)
                                (VarExpr[Local] "mach_readStructField_v128": CanonicalDefs)
                                (VarExpr[Local] "obj": Object)
                                (VarExpr[Local] "offset": FieldOffset))))
                    (VarExpr[None] "REF")
                    (ExprStmt
                        (AppExpr "push_Object": void
                            (VarExpr[ComponentMethod] "push_Object": Object -> void)
                            (VarExpr[Local] "push_Object": CanonicalDefs)
                            (AppExpr "mach_readStructField_Object": Object
                                (VarExpr[ComponentMethod] "mach_readStructField_Object": (Object, FieldOffset) -> Object)
                                (VarExpr[Local] "mach_readStructField_Object": CanonicalDefs)
                                (VarExpr[Local] "obj": Object)
                                (VarExpr[Local] "offset": FieldOffset))))
                    (DefCase)
                    (ReturnStmt
                        (AppExpr "invalid": void
                            (VarExpr[ComponentMethod] "invalid": void -> void)
                            (VarExpr[Local] "invalid": CanonicalDefs)))
                    (DefCase)
                    (ReturnStmt
                        (AppExpr "invalid": void
                            (VarExpr[ComponentMethod] "invalid": void -> void)
                            (VarExpr[Local] "invalid": CanonicalDefs)))))
    method STRUCT_GET_S()
        (BlockStmt
            (LocalStmt
                ("struct_index": u32
                    (AppExpr "readImmULEB32": u32
                        (VarExpr[ComponentMethod] "readImmULEB32": void -> u32)
                        (VarExpr[Local] "readImmULEB32": CanonicalDefs))))
            (LocalStmt
                ("field_index": u32
                    (AppExpr "readImmULEB32": u32
                        (VarExpr[ComponentMethod] "readImmULEB32": void -> u32)
                        (VarExpr[Local] "readImmULEB32": CanonicalDefs))))
            (LocalStmt
                ("kind": FieldKind
                    (AppExpr "m_getFieldKind": FieldKind
                        (VarExpr[ComponentMethod] "m_getFieldKind": (u32, u32) -> FieldKind)
                        (VarExpr[Local] "m_getFieldKind": CanonicalDefs)
                        (VarExpr[Local] "struct_index": u32)
                        (VarExpr[Local] "field_index": u32))))
            (LocalStmt
                ("offset": FieldOffset
                    (AppExpr "m_getFieldOffset": FieldOffset
                        (VarExpr[ComponentMethod] "m_getFieldOffset": (u32, u32) -> FieldOffset)
                        (VarExpr[Local] "m_getFieldOffset": CanonicalDefs)
                        (VarExpr[Local] "struct_index": u32)
                        (VarExpr[Local] "field_index": u32))))
            (LocalStmt
                ("obj": Object
                    (AppExpr "pop_Object": Object
                        (VarExpr[ComponentMethod] "pop_Object": void -> Object)
                        (VarExpr[Local] "pop_Object": CanonicalDefs))))
            (IfStmt
                (BinOpExpr "==": bool
                    (VarExpr[Local] "obj": Object)
                    (Literal "null": #null implicitly Object))
                (ReturnStmt
                    (AppExpr "trapNull": void
                        (VarExpr[ComponentMethod] "trapNull": void -> void)
                        (VarExpr[Local] "trapNull": CanonicalDefs))))
            (MatchStmt
                (VarExpr[Local] "kind": FieldKind)
                    (VarExpr[None] "U8")
                    (ExprStmt
                        (AppExpr "push_u32": void
                            (VarExpr[ComponentMethod] "push_u32": u32 -> void)
                            (VarExpr[Local] "push_u32": CanonicalDefs)
                            (AppExpr: u32
                                (VarExpr[Inst] "view": i8 -> u32
                                    (VarExpr[Type] "u32": u32))
                                (AppExpr "mach_readStructField_i8": i8
                                    (VarExpr[ComponentMethod] "mach_readStructField_i8": (Object, FieldOffset) -> i8)
                                    (VarExpr[Local] "mach_readStructField_i8": CanonicalDefs)
                                    (VarExpr[Local] "obj": Object)
                                    (VarExpr[Local] "offset": FieldOffset)))))
                    (VarExpr[None] "U16")
                    (ExprStmt
                        (AppExpr "push_u32": void
                            (VarExpr[ComponentMethod] "push_u32": u32 -> void)
                            (VarExpr[Local] "push_u32": CanonicalDefs)
                            (AppExpr: u32
                                (VarExpr[Inst] "view": short -> u32
                                    (VarExpr[Type] "u32": u32))
                                (AppExpr "mach_readStructField_i16": short
                                    (VarExpr[ComponentMethod] "mach_readStructField_i16": (Object, FieldOffset) -> short)
                                    (VarExpr[Local] "mach_readStructField_i16": CanonicalDefs)
                                    (VarExpr[Local] "obj": Object)
                                    (VarExpr[Local] "offset": FieldOffset)))))
                    (DefCase)
                    (ReturnStmt
                        (AppExpr "invalid": void
                            (VarExpr[ComponentMethod] "invalid": void -> void)
                            (VarExpr[Local] "invalid": CanonicalDefs)))
                    (DefCase)
                    (ReturnStmt
                        (AppExpr "invalid": void
                            (VarExpr[ComponentMethod] "invalid": void -> void)
                            (VarExpr[Local] "invalid": CanonicalDefs)))))
    method STRUCT_GET_U()
        (BlockStmt
            (LocalStmt
                ("struct_index": u32
                    (AppExpr "readImmULEB32": u32
                        (VarExpr[ComponentMethod] "readImmULEB32": void -> u32)
                        (VarExpr[Local] "readImmULEB32": CanonicalDefs))))
            (LocalStmt
                ("field_index": u32
                    (AppExpr "readImmULEB32": u32
                        (VarExpr[ComponentMethod] "readImmULEB32": void -> u32)
                        (VarExpr[Local] "readImmULEB32": CanonicalDefs))))
            (LocalStmt
                ("kind": FieldKind
                    (AppExpr "m_getFieldKind": FieldKind
                        (VarExpr[ComponentMethod] "m_getFieldKind": (u32, u32) -> FieldKind)
                        (VarExpr[Local] "m_getFieldKind": CanonicalDefs)
                        (VarExpr[Local] "struct_index": u32)
                        (VarExpr[Local] "field_index": u32))))
            (LocalStmt
                ("offset": FieldOffset
                    (AppExpr "m_getFieldOffset": FieldOffset
                        (VarExpr[ComponentMethod] "m_getFieldOffset": (u32, u32) -> FieldOffset)
                        (VarExpr[Local] "m_getFieldOffset": CanonicalDefs)
                        (VarExpr[Local] "struct_index": u32)
                        (VarExpr[Local] "field_index": u32))))
            (LocalStmt
                ("obj": Object
                    (AppExpr "pop_Object": Object
                        (VarExpr[ComponentMethod] "pop_Object": void -> Object)
                        (VarExpr[Local] "pop_Object": CanonicalDefs))))
            (IfStmt
                (BinOpExpr "==": bool
                    (VarExpr[Local] "obj": Object)
                    (Literal "null": #null implicitly Object))
                (ReturnStmt
                    (AppExpr "trapNull": void
                        (VarExpr[ComponentMethod] "trapNull": void -> void)
                        (VarExpr[Local] "trapNull": CanonicalDefs))))
            (MatchStmt
                (VarExpr[Local] "kind": FieldKind)
                    (VarExpr[None] "U8")
                    (ExprStmt
                        (AppExpr "push_u32": void
                            (VarExpr[ComponentMethod] "push_u32": u32 -> void)
                            (VarExpr[Local] "push_u32": CanonicalDefs)
                            (AppExpr: u32
                                (VarExpr[Inst] "view": byte -> u32
                                    (VarExpr[Type] "u32": u32))
                                (AppExpr "mach_readStructField_u8": byte
                                    (VarExpr[ComponentMethod] "mach_readStructField_u8": (Object, FieldOffset) -> byte)
                                    (VarExpr[Local] "mach_readStructField_u8": CanonicalDefs)
                                    (VarExpr[Local] "obj": Object)
                                    (VarExpr[Local] "offset": FieldOffset)))))
                    (VarExpr[None] "U16")
                    (ExprStmt
                        (AppExpr "push_u32": void
                            (VarExpr[ComponentMethod] "push_u32": u32 -> void)
                            (VarExpr[Local] "push_u32": CanonicalDefs)
                            (AppExpr: u32
                                (VarExpr[Inst] "view": u16 -> u32
                                    (VarExpr[Type] "u32": u32))
                                (AppExpr "mach_readStructField_u16": u16
                                    (VarExpr[ComponentMethod] "mach_readStructField_u16": (Object, FieldOffset) -> u16)
                                    (VarExpr[Local] "mach_readStructField_u16": CanonicalDefs)
                                    (VarExpr[Local] "obj": Object)
                                    (VarExpr[Local] "offset": FieldOffset)))))
                    (DefCase)
                    (ReturnStmt
                        (AppExpr "invalid": void
                            (VarExpr[ComponentMethod] "invalid": void -> void)
                            (VarExpr[Local] "invalid": CanonicalDefs)))
                    (DefCase)
                    (ReturnStmt
                        (AppExpr "invalid": void
                            (VarExpr[ComponentMethod] "invalid": void -> void)
                            (VarExpr[Local] "invalid": CanonicalDefs)))))
    method I32_LOAD()
        (BlockStmt
            (LocalStmt
                ("flags": byte
                    (AppExpr "readImmU8": byte
                        (VarExpr[ComponentMethod] "readImmU8": void -> byte)
                        (VarExpr[Local] "readImmU8": CanonicalDefs))))
            (LocalStmt
                ("memindex": u32
                    (Literal "0": u32)))
            (IfStmt
                (AppExpr: bool
                    (VarExpr[Inst] "!=": (byte, byte) -> bool
                        (VarExpr[Type] "u8": byte))
                    (AppExpr: byte
                        (VarExpr[Inst] "&": (byte, byte) -> byte
                            (VarExpr[Type] "u8": byte))
                        (VarExpr[Local] "flags": byte)
                        (VarExpr[ComponentField] "HAS_MEM_INDEX": byte))
                    (Literal "0": byte))
                (ExprStmt
                    (AssignExpr: u32
                        (VarExpr[Local] "memindex": u32)
                        (AppExpr "readImmULEB32": u32
                            (VarExpr[ComponentMethod] "readImmULEB32": void -> u32)
                            (VarExpr[Local] "readImmULEB32": CanonicalDefs)))))
            (IfStmt
                (AppExpr "m_isMemory64": bool
                    (VarExpr[ComponentMethod] "m_isMemory64": u32 -> bool)
                    (VarExpr[Local] "m_isMemory64": CanonicalDefs)
                    (VarExpr[Local] "memindex": u32))
                (BlockStmt
                    (LocalStmt
                        ("offset": u64
                            (AppExpr "readImmULEB64": u64
                                (VarExpr[ComponentMethod] "readImmULEB64": void -> u64)
                                (VarExpr[Local] "readImmULEB64": CanonicalDefs))))
                    (LocalStmt
                        ("index": u64
                            (AppExpr "pop_u64": u64
                                (VarExpr[ComponentMethod] "pop_u64": void -> u64)
                                (VarExpr[Local] "pop_u64": CanonicalDefs))))
                    (LocalStmt
                        ("val": u32
                            (AppExpr "mach_readMemory64_u32": u32
                                (VarExpr[ComponentMethod] "mach_readMemory64_u32": (u32, u64, u64) -> u32)
                                (VarExpr[Local] "mach_readMemory64_u32": CanonicalDefs)
                                (VarExpr[Local] "memindex": u32)
                                (VarExpr[Local] "index": u64)
                                (VarExpr[Local] "offset": u64))))
                    (ExprStmt
                        (AppExpr "push_u32": void
                            (VarExpr[ComponentMethod] "push_u32": u32 -> void)
                            (VarExpr[Local] "push_u32": CanonicalDefs)
                            (VarExpr[Local] "val": u32))))
                (BlockStmt
                    (LocalStmt
                        ("offset": u32
                            (AppExpr "readImmULEB32": u32
                                (VarExpr[ComponentMethod] "readImmULEB32": void -> u32)
                                (VarExpr[Local] "readImmULEB32": CanonicalDefs))))
                    (LocalStmt
                        ("index": u32
                            (AppExpr "pop_u32": u32
                                (VarExpr[ComponentMethod] "pop_u32": void -> u32)
                                (VarExpr[Local] "pop_u32": CanonicalDefs))))
                    (LocalStmt
                        ("val": u32
                            (AppExpr "mach_readMemory32_u32": u32
                                (VarExpr[ComponentMethod] "mach_readMemory32_u32": (u32, u32, u32) -> u32)
                                (VarExpr[Local] "mach_readMemory32_u32": CanonicalDefs)
                                (VarExpr[Local] "memindex": u32)
                                (VarExpr[Local] "index": u32)
                                (VarExpr[Local] "offset": u32))))
                    (ExprStmt
                        (AppExpr "push_u32": void
                            (VarExpr[ComponentMethod] "push_u32": u32 -> void)
                            (VarExpr[Local] "push_u32": CanonicalDefs)
                            (VarExpr[Local] "val": u32))))))
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
