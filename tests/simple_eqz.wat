(module
  ;; expects 1
  (func (export "main") (result i32)
        (i32.const 50)
        (i32.eqz)
        (i32.const 0)
        (i32.eqz)
        (i32.add)
        (i32.eqz)
        (i32.eqz)
  )
)
