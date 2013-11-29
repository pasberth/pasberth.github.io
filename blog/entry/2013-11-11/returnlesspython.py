import os.path
import sys
import ast

if len(sys.argv) != 2:
    print("Usage: %s <filename>" % sys.argv[0])
    sys.exit(1)

filename = sys.argv[1]

with open(filename) as f:
    contents    = f.read()
    module_ast  = ast.parse(contents, filename)

    for x in ast.walk(module_ast):
        if isinstance(x, ast.FunctionDef) and isinstance(x.body[-1], ast.Expr):
            x.body[-1] = ast.Return(value=x.body[-1].value, lineno=x.lineno, col_offset=x.col_offset)

    eval(compile(module_ast, filename, "exec"))