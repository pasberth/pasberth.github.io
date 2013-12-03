Mark&Sweep GC を実装する
================================================================================

Mark&Sweep は， GC のアルゴリズムの一種で， Ruby などで採用されている．
性能はあまりよろしくないらしい．でも，一度くらい実装してみる．

`GC/standard/Mark&Sweep <http://wiki.livedoor.jp/author_nari/d/GC/standard/Mark%26Sweep>`_
などがわかりやすかった．

Mark&Sweep という GC がなにをするか確認してみよう．まず， Mark&Sweep にはルートと呼ばれる
オブジェクトがある．たとえば， Ruby でいえば， ruby -e 'p self' のようにすると
印字される main という文字列が現すオブジェクトのようなものがそれだ．
それから，ヒープには，プログラム中で使用される全オブジェクトの列が記録されている．
gc を実行すると，ルートオブジェクトが参照するいくつかのオブジェクトは， mark される．
mark するというのは，1 というフラグを立てたりするということだ．さらに，
「ルートオブジェクトが参照するいくつかのオブジェクト」から参照されるオブジェクトも，
mark される．再帰的に参照されるすべてのオブジェクトは mark される．
今や， mark されているか否かを調べれば，どこからか参照されているか，どこからも参照されていないか
わかる．そのあと，ヒープに記録されているすべてのオブジェクトを調べて， mark されていない オブジェクト
を探し，解放する．これを sweep という．

次のコードのようなデータ型とルーチンを定義する．

bt は，参照である left と right をもつ． left と right は， Mark&Sweep が走査する
指標になっている．たとえば，ルートオブジェクトの left から参照されるオブジェクトは，
Mark フェイズで mark され， Sweep フェイズでは解放されることがない．
mark は， Mark フェイズでつける *しるし* のための領域だ． name は，オブジェクトが
GC されたとき，標準出力に書き出すための文字列で， GC が正しく動作しているか確認する
ために使用する．

gc のヒープは今のところ 2048 こしかオブジェクトを保存できない． heap.objects は
gc によって管理されるすべての bt へのポインタを記録している． heap.head は，次に
アロケートされるオブジェクトが記録される heap.objects のアドレスを指している．
root はルートオブジェクトを指している．
gc_run は gc を走らせ，不要なオブジェクトを解放する． gc_alloc は gc オブジェクト自体を
作成する． gc_malloc は gc のヒープ領域に新たなオブジェクトを確保する．

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

このコードは次のようにしてコンパイルできる．

.. code-block:: sh

   gcc -Wall -std=c99 gc.c test.c

このコードを実行すると，次のように表示されるはずだ．

.. code-block:: sh

   ./a.out
   run gc first.
   The binary tree free is freed.
   run gc second.
   The binary tree root->right is freed.

たしかに，正しく参照されていないオブジェクトが解放され，
参照されているオブジェクトは生き残っている．これにて実装は完了だ．