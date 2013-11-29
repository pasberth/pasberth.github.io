let rec spp x =
  match x with
  | Sexp.Symbol(s)  -> s
  | Sexp.Cons(x, y) -> Printf.sprintf "(%s.%s)" (spp x) (spp y)
  | Sexp.Nil        -> "()"

let pp x = print_endline (spp x)

let () = 
  let lexbuf = Lexing.from_channel stdin in
  let sexp = Parser.main Lexer.token lexbuf in
  pp sexp