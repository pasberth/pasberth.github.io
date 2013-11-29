var sexp = require("./sexp");

console.log(sexp.parse("(a b c)"));
console.log(sexp.parse("(define (S x y z) (x z (y z)))"));