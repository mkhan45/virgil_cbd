(module
  (func (export "main") (result i32)
    (i32.mul
      (call $ternary (i32.const 0) (i32.const 5))
      (call $ternary (i32.const 1) (i32.const 5))
    )
  )
  (func $ternary (param i32 i32) (result i32)
    ;; fn (x, y) => if (x == 0) then y else y * 2
    (block
	    (i32.eqz (local.get 0))
	    (br_if 0)
	    (local.set 1 (i32.add (local.get 1) (local.get 1)))
    )
    (local.get 1)
  )
)