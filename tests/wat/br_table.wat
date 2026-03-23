(module
  (func (export "main") (result i32)
    (call $select (i32.const 2))
  )
  (func $select (param i32) (result i32)
    (block
      (block
        (block
          (local.get 0)
          (br_table 0 1 2)
        )
        (return (i32.const 10))
      )
      (return (i32.const 20))
    )
    (return (i32.const 30))
  )
)
