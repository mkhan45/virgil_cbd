(module
  (func (export "main") (result i32)
        (call $fib (i32.const 30))
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
  (func $sum_range (param i32 i32) (result i32)
    ;; fn x => sum(0..x)
    (block
    	(loop
	    (i32.eqz (local.get 0))
	    (br_if 1)
	    (local.set 1 (i32.add (local.get 1) (local.get 0)))
	    (local.set 0 (i32.sub (local.get 0) (i32.const 1)))
	    (br 0)
        )
    )
    (local.get 1)
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
