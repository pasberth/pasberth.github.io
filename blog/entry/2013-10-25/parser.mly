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
    sexp { $1 }

sexp:
    SYMBOL                   { Sexp.Symbol($1) }
  | OPEN sexp DOT sexp CLOSE { Sexp.Cons($2, $4) }
  | OPEN sexp_list CLOSE     { $2 }
  | OPEN CLOSE               { Sexp.Nil }

sexp_list:
    sexp           { Sexp.Cons($1, Sexp.Nil) }
  | sexp sexp_list { Sexp.Cons($1, $2) }

%%
