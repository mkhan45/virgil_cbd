(module
  (memory 1)
  (type $t0 (func (param i32) (result i32)))
  (table 1 funcref)
  (elem (i32.const 0) $add_one)
  
  (func $add_one (param i32) (result i32)
    local.get 0
    i32.const 1
    i32.add)
  
  (func $main (export "main") (result i32)
    i32.const 0
    local.get 0
    i32.const 0  ;; table index
    call_indirect (type $t0))
)
