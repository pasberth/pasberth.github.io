CSS3 の animation
================================================================================

恥ずかしながら， HTML5 とか CSS3 に関してはまったく勉強していなかった．
ぼくが HTML や CSS をまともに勉強したのは，中学生の頃が最後だ．
そういうわけで，最近になってやっと animation などのプロパティがあることを知った．
これはいけないと思い，機会もあったので試してみることにした．

animation プロパティについて解説する記事は他にたくさんある．だから， CSS3 を勉強したい
人は，その手の記事を読んでほしい．今回は，ぼくが試しにつくってみたもののことを書く．

animation は，ま，簡単に言えば， jQuery みたいなことを CSS でやってしまうプロパティだ．
このブログを読む人であらば，おそらく， CSS くらい読めて当たり前だろう．だから難しい解説は
省き，とりあえずコードを載せよう．

* fadein.css

  .. literalinclude:: fadein.css
     :language: css
     :linenos:

* fadeout.css

  .. literalinclude:: fadeout.css
     :language: css
     :linenos:

このコードがなにするものぞ．これは，フェードインとフェードアウトをする CSS だ．
jQuery にも，フェードインとフェードアウトをするメソッドが用意されているが，
それとまったく同じことをするコードだ．

CSS のセレクタ ``:hover`` とかと組み合わせれば， たとえば，リンクに
マウスポインタを載せたときフェードイン/フェードアウトするみたいなこともできる．
もしかしたら，けっこうな量の JavaScript を， CSS だけで記述できるのかもしれない．

animation を使って，簡単なページをつくってみた．それが
`pasberth.github.io/whitepepper2 <http://pasberth.github.io/whitepepper2>`_ だ．
これは友人 ( `@white_pepper9 <https://twitter.com/white_pepper9>`_ ) のための
デモページとしてつくった．それなりにクールに仕上がったとは思う．それでも，これは CSS だけで
JavaScript を 1行も書いていない．けっこう驚いた．