js_of_ocaml で hello world
================================================================================

.. include:: /roles.rst

昨年くらいか． `js_of_ocaml <http://ocsigen.org/js_of_ocaml>`_ という単語を
Twitter の TL で目にした．当時はまだ Haskell に熱中していたため，
Fay のほうに目をとられていたのだけど，最近， OCaml いいじゃん，と思っているので，
今更ながら hello world をしてみた．

js_of_ocaml は， Fay や， ほとんどの altJS とは一風変わっていて，
言語そのものを一からつくっているわけではなく， OCaml のバイトコードを
JavaScript にコンパイルするらしい．そう聞くだけでも，胸がドキドキしてこないか？

`manual <http://ocsigen.org/js_of_ocaml/manual/>`_ を読んでる．
かなり使いやすそうだ．

これで hello world を書いてみた！

.. literalinclude:: hello.ml
   :language: ocaml
   :linenos:

コンパイルは，こう

.. code::

   ocamlfind ocamlc -syntax camlp4o -package lwt,js_of_ocaml.syntax -g -c hello.ml
   ocamlfind ocamlc -package lwt,js_of_ocaml -linkpkg -o hello.byte hello.cmo
   js_of_ocaml hello.byte

node で動かしてみると，動いている！

バイトコードをコンパイルしている，と言うと，何万行もの謎のコードが書き出されることを
想像するかもしれない．しかし実際はそうではなく，高々200行程度だった．
次のコードが実際の JavaScript だ．

.. literalinclude:: hello.js
   :language: js
   :linenos:

すごく良さそうなツールだ． OCaml にもともとあるオブジェクト指向
(Objective Caml の O のこと！) もあって，なんとなく相性もよさそう．
これから積極的に使っていこうと思う．

