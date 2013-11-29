pasberth.github.io のライフゲームを OCaml で書き直した
================================================================================

`pasberth.github.io <http://pasberth.github.io/>`_ に，簡単なライフゲームのような
ものを置いてあるのだけど，これを js_of_ocaml を使って OCaml で書き直した．
js_of_ocaml でどんなものがつくれるのかお試しだ．
ソースコードは次の2つ．

* `lifegame.ml <https://github.com/pasberth/pasberth.github.io/blob/dec1e065e3c451aee01df9c1ce8949b8281ab13f/lifegame/lifegame.ml>`_
* `index.ml <https://github.com/pasberth/pasberth.github.io/blob/0301f2126f688dd481912e7f4aacf91f10f58403/ml/index.ml>`_

lifegame.ml は，実際にライフゲームを動かすモジュール．今はスクエアだけど，あとあとヘクスに切り替え
られるようにしてある． index.ml は， lifegame.ml を使用して描画する．
index.ml は，じつは， index.ml.erb からジェネレートされるファイルで，ソースコードではない
のだけど，まあ．

また，これを実装する為に，次のモジュールを使用した．

* `ocaml-jquery <https://github.com/pveber/ocaml-jquery>`_
  jQuery の js_of_ocaml 用バインディング

js_of_ocaml を使ってみたかった，というのもあるのだけど，本当のところは別の理由の方が
大きかった．じつは，以前はこのコードをオレオレ言語で書いていた．処理系が完成したので
試しにライフゲームをつくってみたのだ．でも，その言語を，ぼくはもうメンテしないだろうと思う．
だから，もっと信頼のおける処理系のある言語で書き直したかった．そこで js_of_ocaml が
あったので，これを使用した．

js_of_ocaml はマジですばらしい． OCaml でウェッブプログラミングできるの楽しすぎる．
