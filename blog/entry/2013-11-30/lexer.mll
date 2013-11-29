{
open Parser
}

rule token = parse
  [' ' '\t']            { token lexbuf }
  | ['a'-'z' 'A'-'Z']   { IDENT(Lexing.lexeme lexbuf) }
  | '\\'                { LAMBDA }
  | '.'                 { DOT }
  | ':' '='             { ASSIGN }
  | ['\n']              { EOL }
  | '('                 { OPEN }
  | ')'                 { CLOSE }