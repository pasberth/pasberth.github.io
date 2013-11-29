js_of_ocaml + ocamllex + menhir で S式をパースする
================================================================================

:doc:`/blog/entry/2013-11-09/index` で menhir を使った．これは， OCaml だ．
:doc:`/blog/entry/2013-11-12/index` で js_of_ocaml を使った．これは， OCaml を
JavaScript にコンパイルできる．では， JavaScript で menhir を使うことも，
できるはずだ．そういうわけで，実際に試してみた．
使用するコードは， :doc:`/blog/entry/2013-11-09/index` で使ったものと，
JavaScript のエントリーポイントからパーサを呼び出すための main.ml

* main.ml

  .. literalinclude:: main.ml
     :language: ocaml
     :linenos:

* sexp.ml

  .. literalinclude:: sexp.ml
     :language: ocaml
     :linenos:

* lexer.mll

  .. literalinclude:: lexer.mll
     :language: ocaml
     :linenos:

* parser.mly

  .. literalinclude:: parser.mly
     :language: ocaml
     :linenos:

これらを使用して，次のようなコマンドでコンパイルする．

.. code:: sh

   menhir parser.ml
   ocamllex lexer.ml

   ocamlc -c sexp.ml
   ocamlc -c parser.ml
   ocamlc -c lexer.ml
   ocamlfind ocamlc -syntax camlp4o -package lwt,js_of_ocaml.syntax -c main.ml
   ocamlfind ocamlc -package lwt,js_of_ocaml -linkpkg -o main.byte parser.cmo lexer.cmo main.cmo
   js_of_ocaml main.byte

そしてつくられる main.js を実行してみると…期待通り動いた！！
すごい！！
OCaml はサイコー