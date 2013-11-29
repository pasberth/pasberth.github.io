PEG.js で S式をパースする
================================================================================

`TypedCoffeeScript <https://github.com/mizchi/TypedCoffeeScript>`_ のコードを
読むにさしあたって PEG.js というパーサジェネレータを知った． PEG.js は， JavaScript の
コードを出力するパーサジェネレータだ．とりあえず
`ドキュメント <http://pegjs.majda.cz/documentation>`_ を読み， S式をパースする
コードを書いてみた．

.. literalinclude:: sexp.pegjs
   :language: none
   :linenos:

このコードをテストするコードも書く．

.. literalinclude:: main.js
   :language: js
   :linenos:

出力はこう．

.. literalinclude:: output.txt
