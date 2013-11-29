LLVM で四則演算
================================================================================

LLVM を勉強している． LLVM がなんであるかは，ぼくが説明するより調べてもらった方が
正確だし，速いだろう．さて，そういうわけで， LLVM で四則演算を計算し，その結果を
出力するプログラムをつくってみる．言語は OCaml を使用する．
OCaml を使用した例が `チュートリアル <http://llvm.org/docs/tutorial>`_ にあった
からだ．

まず，例によって型を定義しよう．
今回使用する型は，次のコードでぜんぶだ．

.. literalinclude:: ast.ml
   :language: ocaml
   :linenos:

説明するまでもないだろう．これは AST だ． Num は数値を保存し， Add は足し算，
Sub は引き算をあらわす．

レクサとパーサもつくっておこう．今回の目的はパーサをつくることではない．
だからあまり凝ったことはしないし説明もしない．
次のコードが完全なレクサとパーサになる．

.. literalinclude:: lexer.mll
   :language: ocaml
   :linenos:

.. literalinclude:: parser.mly
   :language: ocaml
   :linenos:

次に数値の演算をコンパイルする部分をつくる．

.. literalinclude:: calc.ml
   :language: ocaml
   :linenos:

このプログラムに，たとえば

.. literalinclude:: test1.txt
   :language: none
   :linenos:

というコードを食わせると，

.. literalinclude:: test1.ll
   :language: llvm
   :linenos:

というような calc 関数が吐かれる．
おっと，出力する部分がまだない．そういうわけで， calc 関数が返す値を
出力するコードが必要だ．ここは C言語で書くことにする．

.. literalinclude:: print.c
   :language: c
   :linenos:

最終的には，この C のコードと llvm の出力したコードを
リンクすることで目的のプログラムをつくる．

c の関数とリンクすると，次のようなコードができあがる．
これを clang でコンパイルする．

.. literalinclude:: test1_main.ll
   :language: llvm
   :linenos:

実際にコンパイルするには，次のようなコマンドを実行すればよい．

.. code-block:: sh

  omake calc
  clang -emit-llvm -S print.c -o print.ll
  ./calc <test1.txt 2>test1.ll
  llvm-link -S test1.ll print.ll -o test1_main.ll
  clang test1_main.ll -o test1_main

さて，完成だ．では，テストしてみよう．

テストコード1

.. literalinclude:: test1.txt
   :language: none
   :linenos:

テストコード出力

.. code::

   2.000000

テストコード2

.. literalinclude:: test2.txt
   :language: none
   :linenos:

テストコード出力

.. code::

   4.000000

テストコード3

.. literalinclude:: test3.txt
   :language: none
   :linenos:

テストコード出力

.. code::

   14.000000

テストコード4

.. literalinclude:: test4.txt
   :language: none
   :linenos:

テストコード出力

.. code::

   3.333333
