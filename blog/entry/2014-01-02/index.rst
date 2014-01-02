OCaml から MySQL を使用する
================================================================================

OCaml から MySQL を使ってみた．

`ocaml-mysql <http://ocaml-mysql.forge.ocamlcore.org>`_ を使えばよい．

インストール:

.. code-block:: sh

   opam install ocaml-mysql

試しに書いたコード:

.. literalinclude:: mysql_test.ml
    :language: ocaml
    :linenos:

コンパイル:

.. code-block:: sh

   ocamlfind ocamlc -package mysql -linkpkg mysql_test.ml


当然ですが MySQL サーバも起動して， サーバ側でデータベースや
ユーザもつくってあげないといけません．
