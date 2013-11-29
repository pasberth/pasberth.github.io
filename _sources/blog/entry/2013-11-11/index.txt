return なしで関数を書ける Python つくったった
================================================================================

Python の唯一の欠点……それは，値を戻すのにいちいち return を書かなければならないことだ．
これさえなければ本当に神言語だったのに！！！

しかし，じつは Python には `ast <http://docs.python.jp/3.3/library/ast.html>`_
という驚くべきモジュールがあるのだ．これを使えば， Lisp ，いや，それ以上に強力なマクロが
実装可能となる！！！

そういうわけで， return なしで関数を書ける Python をつくってみた．
これを使うと， Python をこのように書けるのである！！！

.. literalinclude:: example.py
   :language: python
   :linenos:

ちなみに実装はこれだけ．

.. literalinclude:: returnlesspython.py
   :language: python
   :linenos:

