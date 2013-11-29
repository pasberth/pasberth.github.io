{
open Parser
}

let spaces   = [' ' '\t' '\r' '\n']+
let symbol  = [^ '(' ')' '.' ' ' '\t' '\r' '\n']+

rule token = parse
    spaces  { token lexbuf }
  | symbol  { SYMBOL(Lexing.lexeme lexbuf) }
  | '('     { OPEN }
  | '.'     { DOT }
  | ')'     { CLOSE }