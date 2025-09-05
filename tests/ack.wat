(module
  (func (export "main") (result i32)
    (call $ack (i32.const 3) (i32.const 9))
  )
  (func $ack (param $m i32) (param $n i32) (result i32)
    (block
      (br_if 0 (i32.eqz (local.get $m)))
      (block
        (br_if 0 (i32.eqz (local.get $n)))
        (return 
          (call $ack
            (i32.sub (local.get $m) (i32.const 1))
            (call $ack
              (local.get $m)
              (i32.sub (local.get $n) (i32.const 1))))))
      (return 
        (call $ack
          (i32.sub (local.get $m) (i32.const 1))
          (i32.const 1))))
    (return (i32.add (local.get $n) (i32.const 1)))
  )
)
