menhir で S式をパースする
================================================================================

.. include:: /roles.rst

:doc:`/blog/entry/2013-10-25/index` を書いている最中，
`menhir <http://cristal.inria.fr/~fpottier/menhir>`_ というツールがあることを知った．
menhir は， ocamlyacc と似たツールで，パーサジェネレータだ．パーサを BNF のように書くと，
OCaml のコードを出力してくれる．せっかくだから，試してみることにした．

インストール
--------------------------------------------------------------------------------

opam を使用して，次のようにインストールできる．

.. code-block:: sh

   opam install menhir


使用法
--------------------------------------------------------------------------------

ocamlyacc と同じ要領で parser.mly をつくり，次のようなコマンドで parser.ml を
生成できる．

.. code-block:: sh

   menhir parser.mly

OMake から使用する
--------------------------------------------------------------------------------

ocamlyacc と同じ要領で parser.mly をつくり，次のように OMakefile に記述すればよい．

.. code-block:: ocaml

  OCAMLPACKS[] =
    menhir

  OCAMLYACC = menhir

  OCamlGeneratedFiles(parser.ml)

menhir の特徴
--------------------------------------------------------------------------------

* menhir は ocamlyacc と 90% 互換らしい．じっさい， :doc:`/blog/entry/2013-10-25/index` に
  載せている parser.mly がそのまま通る．
* ocamlyacc は LALR(1) の文法しか受け付けないが， menhir は LR(1) の文法を受け付ける．
* 正規表現の ``?``, ``+``, ``*`` のような表現ができる
* ocamlyacc では :ml:`X { $1 }` のようにしてマッチングしたトークンを参照するが，
  menhir では名前付きで :ml:`x = X { x }` のような表現ができる
* 他多数…くわしくは， `manual <http://cristal.inria.fr/~fpottier/menhir/manual.pdf>`_
  を読んでみてほしい．

S式の実装
--------------------------------------------------------------------------------

:doc:`/blog/entry/2013-10-25/index` のコードはそのまま通るので流用できるのだけど，
せっかくなので menhir の機能を使って書いてみた．


* sexp.ml:

  .. literalinclude:: sexp.ml
     :language: ocaml
     :linenos:

* lexer.mll:

  .. literalinclude:: lexer.mll
     :language: ocaml
     :linenos:

* parser.mly:

  .. literalinclude:: parser.mly
     :language: ocaml
     :linenos:

* main.ml

  .. literalinclude:: main.ml
     :language: ocaml
     :linenos:

* OMakefile

  .. literalinclude:: OMakefile
     :language: ocaml
     :linenos:
