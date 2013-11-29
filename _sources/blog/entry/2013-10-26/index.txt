OCaml から C の関数を呼ぶ
================================================================================

.. include:: /roles.rst

OCaml の FFI の話．
`C関数をラップしてOCamlに接続する方法 (How to wrap C functions to OCaml) <http://www.geocities.jp/harddiskdive/ocaml-wrapping-c/ocaml-wrapping-c.html>`_ が
詳しかった．まず， OCaml のコードを書こう． :ml:`c_print_int` は，
まだ実装のない， C言語の関数のシグネチャだ． :ml:`c_print_int` は，
うまく実行されれば，引数の整数をそのまま表示する．このプログラムの唯一の仕事は，
その関数に :ml:`42` という値を渡して呼び出すことだ．それ以上は，
なにもしない．もし正しく実行されれば，端末に :ml:`42` と表示される
はずだ．

.. literalinclude:: callCFunctionFromOCaml.ml
   :language: ocaml
   :linenos:

次に， C言語で次のような関数をつくる． ``c_print_int_impl`` は，
:ml:`c_print_int` の実装だ． ``printf`` を使用して整数を表示する．
たったそれだけのことしかしない．

.. literalinclude:: callCFunctionFromOCaml.c
   :language: c
   :linenos:

さて，これをコンパイルする為の OMakefile は，次のようになる．

.. literalinclude:: OMakefile
   :language: none
   :linenos:
