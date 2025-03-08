import sys

I32Const = 0x41
I32Add = 0x6A

def i32(i): return [*i.to_bytes(4)]

code_bytes = [
    I32Const, *i32(10),

    I32Const, *i32(50),

    I32Add
]

print([hex(byte) for byte in code_bytes], file=sys.stderr)
print(bytes(code_bytes).decode())
