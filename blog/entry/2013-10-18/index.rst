Haskell で infix 持ちの構文をパースする
================================================================================

.. include:: /roles.rst

:doc:`/blog/entry/2013-10-17/index` を書いたのは，じつに昨日である．
Sphinx で書くブログがいかに快適かを知るためにも，そして，せっかくだから，
ブログを書く習慣でもつけようかと思い，くだらない記事を書くこととしよう．
今回使用するソースコード，および，テストコード，および，それをコンパイルする
ための .cabal は，
`ここ <https://github.com/pasberth/pasberth.github.io/tree/master/blog/entry/2013-10-18>`_ に
置いてある．もし，興味があれば，リポジトリを clone してほしい．

infix とは
--------------------------------------------------------------------------------

タイトルにある infix とかいかなるものか．くわしくは，自力で調べてもらう
として，ﾃｷﾄ-な例を見繕った．例は，このセクションの最後に載せてある．
この例を実行すると，

.. code::

   "((a **** b) ++++ (c **** d))"
   "(((a **** b) **** c) **** d)"
   "(a .... (b .... (c .... d)))"

と表示されるはずである．この例で大事なのは，行頭の 3, 4, 6 行め．
最初のコードの，4行めは， ``++++`` とかいう記号が，
優先順位が 6 である中置記法だということをコンパイラに知らせる．
優先順位 6 は，優先順位 7 よりも低い．一般的な言語では，中置の記号が
どのようにパースされるかは，言語で定められているが， Haskell では，
こういうふうにして，中置の記号をいくらかコントロールできる．

今回の記事は，この infix という機能を実装してみよう，という趣旨だ．

.. literalinclude:: Example1.hs
   :language: haskell
   :linenos:
   :emphasize-lines: 3,4,6

実際につくってみる
--------------------------------------------------------------------------------

まず，もろもろの，使用するライブラリと，言語拡張を確認する．
今回使用する GHC による言語拡張は GeneralizedNewtypeDeriving
というもので，データ型の定義の際，面倒な instance 宣言を省く為に
使用している．ライブラリは，

* `parsers <http://hackage.haskell.org/package/parsers>`_
* `trifecta <http://hackage.haskell.org/package/trifecta>`_

などを使用する．実際のコードは，このセクションの最後に載せてある．
スクロールして頂きたい．

infix のような機能は，ちょっとメタな機能に見える．
infix は，通常の実行時には作用できない．パースの段階で， AST を組み替える
機能，あるいは，パーサに対する命令ととれる．そういうわけで，今回は，これを
パーサに対する命令と考えて，それを書くと，状態を変化させる，いわば，
メタ手続きのようなものとして，パースの時点で処理させるように，
パーサをつくってみる．これを作るには，パーサが文脈を持つか，
あるいは，全体に先立って ``infix`` だけをパースし，ほかのコードをパース
するようにすればよい．たとえば，インデントでブロックを作るときみたいに．

そういうわけで，まずは，型を定義しよう．型は， 21, 26, 33 行めで
定義されている． :hs:`InfixOp` は， :hs:`infixl i "s"` などとしたときに，
:hs:`InfixOp (i, s)` のようにしてデータを保存する．
:hs:`ExampleParserState` は，そのリストである． :hs:`ExampleParser` は，
Trifecta のパーサに，文脈を
付け足すため， :hs:`ReaderT` というモナド変換子を使ったパーサである．
State ではなく， Reader を使ったのは，思わぬ所で値が更新されることがコワい
からである．一時的に状態を更新したければ， :hs:`runReaderT` を使えばよろしい．
:hs:`type ExampleParser a = ReaderT ExampleParserState Trifecta.Parser a` の
ようにせず， newtype で定義して， GeneralizedNewtypeDeriving で
:hs:`MonadReader` などの instance にしているのは，シノニムより便利な事が多い
からである．

93 行めの， :hs:`parseWithState` 関数は，中置の記号の状態をパーサに伝えつつ
パースを開始する．この関数で与えた状態を， 96 行め， 114 行めの，
:hs:`infixLeft` ，および， :hs:`infixRight` が読み取って，正確にパースするわけで
ある．57 行めの :hs:`defineInfix p` は， :hs:`infixl i "x"` などという構文を
読み取って，それを状態に加えて， ``p`` を評価する． ``p`` は，
:hs:`infixRight` とかになるわけである．パーサコンビネータなのに，
:hs:`defineInfix >> p` のように繋げるのではなく，あくまで :hs:`defineInfix p` の
ようにして渡すのは， State ではなく， Reader であるため，状態を更新できない
からである．

では，できたので，実際に，走らせてみようではないか．

テストコード1

.. literalinclude:: test1.txt
   :linenos:

テストコード出力

.. code::

   "((((0+1)+2)+3)+4)"

テストコード2

.. literalinclude:: test2.txt
   :linenos:

テストコード出力

.. code::

   "(0+(1+(2+(3+4))))"

テストコード3

.. literalinclude:: test3.txt
   :linenos:

テストコード出力

.. code::

   "((0*1)+(2*3))"

テストコード4

.. literalinclude:: test4.txt
   :linenos:

テストコード出力

.. code::

   "((((0+1)-((2*3)/4))+5)-((6*7)/8))"

テストコード5

.. literalinclude:: test5.txt
   :linenos:

テストコード出力

.. code::

   "(0+(1-((2*(3/4))+(5-(6*(7/8))))))"

.. literalinclude:: Example2.hs
   :language: haskell
   :linenos:
   :emphasize-lines: 21, 26, 33, 57, 93, 96, 114