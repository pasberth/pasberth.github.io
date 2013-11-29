%{

%}

%token <string> IDENT
%token LAMBDA
%token DOT
%token ASSIGN
%token EOL
%token OPEN
%token CLOSE
%start main
%type <Ast.stat list> main

%%

main:
    EOL           { [] }
  | stat EOL main { $1 :: $3 }

gident:
    IDENT         { $1 }
  | IDENT gident  { String.concat "" [$1; $2] }

stat:
    gident ASSIGN expr  { Ast.Def($1, $3) }
  | gident ASSIGN app   { Ast.Def($1, $3) }
  | gident ASSIGN lam   { Ast.Def($1, $3) }

expr:
    ref { $1 }
  | OPEN app CLOSE { $2 }
  | OPEN lam CLOSE { $2 }
  | OPEN expr CLOSE { $2 }

ref:
    IDENT { Ast.Ref($1) }

lam:
    LAMBDA param_list DOT expr { List.fold_right (fun x y -> Ast.Lam(x, y)) $2 $4 }
  | LAMBDA param_list DOT app  { List.fold_right (fun x y -> Ast.Lam(x, y)) $2 $4 }

param_list:
    IDENT { [$1] }
  | IDENT param_list { $1 :: $2 }

app:
    expr expr { Ast.App($1, $2) }
  | app expr  { Ast.App($1, $2) }

%%