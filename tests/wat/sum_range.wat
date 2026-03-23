(module
  (func (export "main") (result i32)
    (call $sum_range (i32.const 10) (i32.const 0))
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
)
