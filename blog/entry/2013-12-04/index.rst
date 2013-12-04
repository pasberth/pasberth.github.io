Copying GC を実装する
================================================================================

Copying は， GC のアルゴリズムの一種． Scheme や ML で採用されているらしい．
`GC/standard/Copying <http://wiki.livedoor.jp/author_nari/d/GC/standard/Copying>`_
がわかりやすかった．

Copying GC はいかなるものか． Copying GC には， Mark&Sweep GC と同じように，ルートと
呼ばれるオブジェクトがある．また，ヒープは最低2つ以上あり，通常はそのいずれか 1つの領域しか
使用しない．古いヒープがいっぱいになると， Copying GC は，ルートオブジェクトから参照をたどって
ゆき，新しいヒープにコピーする．もし，参照が古いヒープのオブジェクトの領域を指している場合には，
新しいヒープの領域にある同じオブジェクトを指すように張り替える．結果的に， GC が終わると，古い
ヒープにはもはや使用されないオブジェクトしか残っておらず，新しいヒープには参照が切れたオブジェクト
を取り除いたオブジェクトのグラフができあがる．そこで，古いヒープは，ヒープ全体を解放してしまう．

次のようなデータ型とルーチンを定義する．
bt は :doc:`/blog/entry/2013-12-03/index` で定義したものと同じようなものだ．
copied メンバは， GC で値をコピーしたとき，重複してコピーしないために使用する．
コピーしたとき，コピーされた古いオブジェクトの copied には，コピーした新しいオブジェクトのアドレスを
格納する．新しいオブジェクトの copied には， 0 を格納する．そうすることで， copied が
0 以外の場合，コピー済みであるという意味のフラグとしての役割と，新しいオブジェクトが
どこであるか知るための変数の役割になる．新しいオブジェクトがどこであるか知るのは，
コピー済みのオブジェクトへの参照を貼りなおす場合に必要となる．
gc.heap は，現在使用中のヒープの領域の関する情報だ． gc.heap1 と gc.heap2 は，
名前の通り 2つのヒープ領域を意味する． gc.heap.objects は，現在 gc.heap1 を使用中である場合には，
gc.heap1.objects を指し，現在 gc.heap2 を使用中である場合には， gc.heap2.objects を
指すようになる． gc.heap.head は次にアロケートされるオブジェクトが格納される領域を指していて，
gc.heap.objects の上のどこかを指しており，オブジェクトを確保する度にインクリメントされる．

.. literalinclude:: gc.h
    :language: c
    :linenos:

あとは実装だ．

.. literalinclude:: gc.c
    :language: c
    :linenos:

テストコード．

.. literalinclude:: test.c
    :language: c
    :linenos:

このコードは，次のようにしてコンパイルできる．

.. code-block:: sh

   gcc -Wall -std=c99 gc.c test.c

このテストコードを実行すると，次のように表示されるはずだ．
不要なオブジェクトが解放されているのがわかる．

.. literalinclude:: test-out.txt
    :language: none
    :linenos:

テストコード2．

.. literalinclude:: test2_cycle_ref.c
    :language: c
    :linenos:

このテストコードを実行すると，次のように表示されるはずだ．
循環した参照もきちんと処理しており，また，参照も正しく貼りなおされている
ことがわかる．

.. literalinclude:: test2-out.txt
    :language: none
    :linenos:
