(module
  (type $node (struct 
    (field $value i32)
    (field $next (ref null $node))
  ))

  (func (export "main") (result i32)
    (local $ll (ref null $node))
    (local.set $ll (call $prepend (i32.const 0) (call $empty)))
    (local.set $ll (call $prepend (i32.const 1) (local.get $ll)))
    (local.set $ll (call $prepend (i32.const 2) (local.get $ll)))
    (local.set $ll (call $prepend (i32.const 3) (local.get $ll)))
    (local.set $ll (call $prepend (i32.const 10) (local.get $ll)))
    (return (call $sum (local.get $ll)))
  )

  ;; Create an empty list (just returns null)
  (func $empty (result (ref null $node))
    (ref.null $node)
  )

  (func $prepend (param $value i32) (param $list (ref null $node)) (result (ref $node))
    (struct.new $node (local.get $value) (local.get $list))
  )

  (func $sum (param $list (ref null $node)) (result i32)
    (local $current (ref null $node))
    (local $total i32)
    
    (local.set $current (local.get $list))
    (local.set $total (i32.const 0))
    
    (loop $sum_loop
      (if (ref.is_null (local.get $current))
        (then (return (local.get $total))))
      
      (local.set $total
        (i32.add
          (local.get $total)
          (struct.get $node $value (ref.as_non_null (local.get $current)))
        )
      )
      
      ;; Move to next node
      (local.set $current
        (struct.get $node $next
          (ref.as_non_null (local.get $current))
        )
      )
      
      ;; Continue loop
      (br $sum_loop)
    )
    
    ;; This should never be reached, but return total anyway
    (local.get $total)
  )
)
