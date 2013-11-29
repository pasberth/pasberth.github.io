ocamlyacc と ocamllex で S式をパースする
================================================================================

.. include:: /roles.rst

よく知られたツールとして， yacc と lex がある．
これは C言語でパーサを書くツールで，たとえば， Ruby の実装に使われている．
BNF のような記法で構文仕様を記述すれば， C言語のパーサのソースコードを
出力してくれるというわけである．OCaml では，よく似たツールとして ocamlyacc と
ocamllex というものがある．これは， yacc と lex に似た記法で構文仕様を記述
すれば， C言語の代わりに， OCaml のソースコードを出力してくれるというものである．
ツールの機能としては似ているけど， C言語よりも， OCaml のほうが型が強力なので，
ちょっとした間違いならコンパイルするときにあらかた見つけてくれる．
これらは， OCaml にもともとついてくるので，普通の方法で OCaml をインストールして
いればおそらく使えるはずだ．

今回使用するソースコード，および，テストコード，および，それをコンパイルする
ための OMakefile は，
`ここ <https://github.com/pasberth/pasberth.github.io/tree/master/blog/entry/2013-10-25>`_ に
置いてある．もし，興味があれば，リポジトリを clone してほしい．

S式とは
--------------------------------------------------------------------------------

S式 を知らない人もいるかもしれない．もちろん，そういう方は少数派だろうけど，
確認のためにも，そもそも S式がいったいなんなのか確認しておこうと思う．
S式とは，次のような規則を持つ構文のことだ．ただし， Atom は ``"string"`` とか ``42``
とか ``hoge`` とかいうもののことで，複雑だから記述しない事にする．ここでは，
``()`` というものこそが nil ということにしておこうと思う．

.. productionlist::
    SExp : `Atom`
         : `Cons`
         : `List`
         : `Nil`
    Cons : ( `SExp` . `SExp` )
    List : `SExp`
         : ( `SExp` `List` )
    Nil  : ()

S式における予約語は，カッコ ( ``(`` と ``)`` )，それから，ドット( ``.`` )
くらいで，あとのほとんどの文字は識別子として使用できる．たとえば，よく使われる
言語では ``+`` は識別子ではないけど， S式では ``+`` も ``add`` も同じように
識別子なのである．

:token:`List` は， :token:`Cons` の省略ということにする．たとえば，
``(a b c)`` は， ``(a . (b . (c . ())))`` の省略ということになる．
こうすれば，無意味なカッコを減らすことができる．

実装
--------------------------------------------------------------------------------

まず， S式をあらわす型を定義しようと思う．それは，実際に次のようなコードになる．

.. literalinclude:: sexp.ml
   :language: ocaml
   :linenos:

今回は，文字列とか，数値とかは実装しない．理由は，面倒だから．
代わりに， :ml:`Symbol` だけが唯一の :token:`Atom` だということにする．
:token:`List` は， :token:`Cons` の省略なので， AST としては存在しない．

次に， ocamllex でトークンを切り分ける関数を作る．たとえば， ``.`` は :ml:`DOT`
にして，あとでパーサが使うわけである．この時点で，識別子はひとつのトークンになる．
9行めの spaces は，単に空白をスキップするように用意する．こうしておくと，
たとえば， ``(a b c)`` は :ml:`OPEN SYMBOL("a") SYMBOL("b") SYMBOL("c") CLOSE`
のようになる．

.. literalinclude:: lexer.mll
   :language: ocaml
   :linenos:

次に， ocamlyacc でトークンの列を AST にする関数を作る．
さっき定義した S式をあらわすデータをつくるわけである．
次のコードは BNF をそのまま書いたようになっている．
たとえば， :ml:`OPEN SYMBOL("a") SYMBOL("b") SYMBOL("c") CLOSE` のようにすると，
19 行めの ``OPEN sexp_list CLOSE`` という定義にマッチする．
``sexp_list`` は，右再帰の S式のリストになる．たとえば
``sexp1 sexp2 .. sexp3`` のようなトークンの列なら ``sexp_list`` というわけである．
SYMBOL は S式だから， :ml:`SYMBOL("a") SYMBOL("b") SYMBOL("c")` は
この定義にマッチする．

.. literalinclude:: parser.mly
   :language: ocaml
   :linenos:

テスト用の main.ml をつくる．コードが正しく動いているかたしかめる
ためである．

.. literalinclude:: main.ml
   :language: ocaml
   :linenos:

最後に，コンパイルするための OMakefile を作る．
``OCamlProgram(a.out, $(FILES))`` は， FILES を使用して，
a.out というプログラムをつくるという意味である．
``OCamlGeneratedFiles(parser.ml lexer.ml)`` は， parser.ml
や lexer.ml が， ocamlyacc や ocamllex を使用して自動生成される
ファイルである，と OMake に知らせる．

.. literalinclude:: OMakefile
   :language: none
   :linenos:

この OMakefile を使用して， ``$ omake a.out`` のようにすると，ぜんぶ
合わせてコンパイルし，実行可能なa.out がつくられる．さて，実装ができた
ので，実際に実行してみようではないか．

テストコード1

.. literalinclude:: test1.txt

テストコード出力

.. code::

   (a.(b.(c.())))

テストコード2

.. literalinclude:: test2.txt

テストコード出力

.. code::

   (define.((S.(x.(y.(z.())))).((x.(z.((y.(z.())).()))).())))
