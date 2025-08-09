(module
  (memory 1)
  
  (func (export "main") (result i32)
    ;; Store value 42 at memory offset 0
    (i32.store (i32.const 0) (i32.const 42))
    
    ;; Load value from memory offset 0
    (i32.load (i32.const 0))
  )
)
