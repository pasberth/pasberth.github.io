Nemerle で簡単なマクロを書いてみる
================================================================================

Nemerle という言語では，マクロでいろいろな構文がつくれる．
標準マクロを覗いてみよう．
`macros/core.n <https://github.com/rsdn/nemerle/blob/master/macros/core.n>`_
を見てよう．なんと， if， when，while，for，unless，果ては using などもマクロとして
実装されているようだ．すごい．某リスト型言語を彷彿とさせる．

さて，今回はそんな Nemerle で簡単な構文をつくってみる．
試しに条件演算子

.. code::

   x ? y : z

を書けるようにしてみよう．

Nemerle の if は，値を戻すことができる．と，いうことは，
これは単に if の糖衣構文ということにすれば，実装できそうだ．

しかし，素直に実装してみたところ，実装できなかった．原因はよくわからない．
**動作しない** 素直な実装は，次のように書いた．

.. code-block:: nemerle

   macro @cond (x, y, z)
   syntax (x, "?", y, ":", z)
   {
       <[ if ( $x ) { $y ; } else { $z ; } ]>
   }

``x ? y : z`` のように書けるようにするのは，困難なのかもしれない．
そこで，これを妥協して，次のように書けるようにしてみることとする．
キーワード **cond** を導入し，カッコを増やせぱ，構文が曖昧になることは
ないだろう．

.. code::

   cond (x) ? (y) : (z)

**動作する** 素直な実装は，次のようになった．

.. literalinclude:: cond.n
   :language: nemerle
   :linenos:

これをテストするコード．

.. literalinclude:: hello.n
   :language: nemerle
   :linenos:

コンパイルするには，次のようにコマンドを入力する．

.. code-block:: sh

   ncc /t:library /r:Nemerle.Compiler.dll /o:cond.dll cond.n
   ncc /m:cond.dll /o:hello.exe hello.n

