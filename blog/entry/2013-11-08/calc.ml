open Llvm

let context = global_context ()
let calc_module = create_module context "calc"
let builder = builder context

let double_t = double_type context
let calc_t = function_type double_t [||]
let calc = declare_function "calc" calc_t calc_module

let rec codegen = function
  | Ast.Num(x) -> const_float double_t x
  | Ast.Add(x, y) ->
    let x' = codegen x in
    let y' = codegen y in
    build_fadd x' y' "addtmp" builder
  | Ast.Sub(x, y) ->
    let x' = codegen x in
    let y' = codegen y in
    build_fsub x' y' "subtmp" builder
  | Ast.Mul(x, y) ->
    let x' = codegen x in
    let y' = codegen y in
    build_fmul x' y' "multmp" builder
  | Ast.Div(x, y) ->
    let x' = codegen x in
    let y' = codegen y in
    build_fdiv x' y' "divtmp" builder

let x =
  let lexbuf = Lexing.from_channel stdin in
  Parser.expr Lexer.token lexbuf

let x = codegen x

let () = position_at_end (append_block context "entry" calc) builder
let _ = build_ret x builder

let () = dump_value calc
