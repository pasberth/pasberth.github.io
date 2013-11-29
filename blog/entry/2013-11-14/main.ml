open Js
open Firebug

(* JS の文字列としてこういう入力があったとする *)
let js_str_test1 = string "(a b c)"
let js_str_test2 = string "(define (S x y z) (x z (y z)))"

(* JS の文字列から OCaml の文字列に戻す *)
let ml_str_test1 = to_string js_str_test1
let ml_str_test2 = to_string js_str_test2

(* AST を OCaml の文字列にする *)
let rec spp x =
  match x with
  | Sexp.Symbol(s)  -> s
  | Sexp.Cons(x, y) -> Printf.sprintf "(%s.%s)" (spp x) (spp y)
  | Sexp.Nil        -> "()"

(* AST を JS の文字列にする *)
let js_spp x = string (spp x)

let js_pp x = console##log (js_spp x)

let () = 
  let lexbuf = Lexing.from_string ml_str_test1 in
  let sexp = Parser.main Lexer.token lexbuf in
  js_pp sexp

let () = 
  let lexbuf = Lexing.from_string ml_str_test2 in
  let sexp = Parser.main Lexer.token lexbuf in
  js_pp sexp
