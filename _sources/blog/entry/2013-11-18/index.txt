Nemerle で hello world
================================================================================

Nemerle という言語で hello world してみます．

まず， Nemerle 本体をもってきます．ｱ，その前に， :doc:`/blog/entry/2013-11-17/index` のよう
に， mono の実行環境がないといけません．

.. code-block:: sh

   git clone git@github.com:rsdn/nemerle.git
   cd nemerle

次に hello world を書き， hello.n という名前をつけて
保存します．この拡張子枯渇の時代に， .n なんて拡張子を要求するなんて，
欲張りな言語ですね！

* *hello.n*

  .. literalinclude:: hello.n
     :language: nemerle
     :linenos:

それから， boot/ncc.exe というものを使用して，これをコンパイルします．

.. code-block:: sh

   mono boot/ncc.exe hello.n /out:hello.exe

最後に，出力された hello.exe を， mono で起動します．

.. code-block:: sh

   mono hello.exe
   hello world

できました！

ただ，この boot/ncc.exe とううバイナリは，ブートストラップのための
ものです．実際には， boot/ncc.exe を使用して， Nemerle 本体をコンパイル
する必要があるでしょう．ただ，とりあえず README に 「 ﾝﾌw Linux なら
ブートストラップでビルドできるよw」としか書いてないし， make all としても
なんか止まっちゃったので今は諦めることとします．
