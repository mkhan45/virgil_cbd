(module
  (func (export "main") (result i32)
    (call $fib (i32.const 11))
  )
  (func $fib (param i32) (result i32)
    (block
      (br_if 0 (i32.lt_u (local.get 0) (i32.const 2)))
      (return 
        (i32.add
          (call $fib (i32.sub (local.get 0) (i32.const 1)))
          (call $fib (i32.sub (local.get 0) (i32.const 2))))))
    (return (local.get 0))
  )
)
