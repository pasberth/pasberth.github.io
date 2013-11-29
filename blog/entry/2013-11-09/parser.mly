%{
%}

%token <string> SYMBOL
%token OPEN
%token DOT
%token CLOSE
%start main
%type <Sexp.t> main

%%

main:
    x = sexp { x }

sexp:
    s = SYMBOL                              { Sexp.Symbol(s) }
  | OPEN; x = sexp; DOT; y = sexp; CLOSE    { Sexp.Cons(x, y) }
  | OPEN; xs = sexp*; CLOSE                 { List.fold_right (fun x y -> Sexp.Cons(x, y)) xs Sexp.Nil }

%%
