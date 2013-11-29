%{
%}

%token <float> NUM
%token PLUS
%token MINUS
%token STAR
%token SLASH
%token OPEN
%token CLOSE

%start expr
%type <Ast.t> expr

%%

expr:
    NUM                 { Ast.Num($1) }
  | OPEN additive CLOSE { $2 }

mult:
    expr                { $1 }
  | mult STAR expr      { Ast.Mul($1, $3) }
  | mult SLASH expr     { Ast.Div($1, $3) }

additive:
    mult                { $1 }
  | additive PLUS mult  { Ast.Add($1, $3) }
  | additive MINUS mult { Ast.Sub($1, $3) }

%%