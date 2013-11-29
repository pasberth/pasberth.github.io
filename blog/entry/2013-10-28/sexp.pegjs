start
  = sexp

sexp
  = s:symbol                            { return s; }
  / "(" _ x:sexp _ "." _ y:sexp _ ")"   { return [].concat([x], y); }
  / "(" xs:sexp_list ")"                { return xs; }

sexp_list
  = x:sexp ys:(_sexp*)                  {
                                            return [].concat([x], ys);
                                        }

_sexp
  = _ x:sexp                            { return x; }

symbol
  = s:([^(). \t\r\n]+)                  { return s.join(""); }

_ = [ \t\r\n]*