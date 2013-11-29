{
open Parser
}

rule token = parse
  [' ' '\t' '\n' '\r']      { token lexbuf }
  | ['1'-'9'] ['0'-'9']*    { NUM(float_of_string(Lexing.lexeme lexbuf)) }
  | '+'                     { PLUS }
  | '-'                     { MINUS }
  | '*'                     { STAR }
  | '/'                     { SLASH }
  | '('                     { OPEN }
  | ')'                     { CLOSE }