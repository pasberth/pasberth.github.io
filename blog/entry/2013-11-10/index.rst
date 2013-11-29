参照の型付け
================================================================================

.. include:: /roles.rst

多くの言語には参照という機能がある．説明するまでもないだろう．
参照という機能を軽く見てみよう． 例は OCaml で書いてある．


* 参照は，参照の先にひとつ値を持っている．文字とか，整数だ．

  .. code-block:: ocaml

     let r = ref 1 (* r は参照． r の参照の先の値は 1 *)

* 参照の先にある値をもってくる，ロードという言語機能がある．

  .. code-block:: ocaml

     let i = !r (* i は 1 *)

* 参照の先にべつの値を当てはめる，ストアという言語機能がある．

  .. code-block:: ocaml

     let () = r := 2    (* r の参照の先に 2 をあてはめる *)
     let j = !r         (* j は 2 *)

参照の型付けについては， 型システム入門の 13章で触れられている．

GC
--------------------------------------------------------------------------------

参照を型付けするとき， GC は必要不可欠らしい．理由はぶら下がり参照による．
明示的にメモリ管理する言語では，参照を型付けすることによる型安全性の達成が困難になってしまう．
たとえば，

.. code-block:: c

    #include <stdio.h>

    struct A {
      int i;
    };

    struct B {
      int j;
    };

    int main(int argc, char const *argv[])
    {
      struct A *a_ref = (struct A *) malloc(sizeof(struct A));
      a_ref->i = 1;
      free(a_ref);

      struct B *b_ref = (struct B *) malloc(sizeof(struct B));
      b_ref->j = 2;

      printf ("a_ref->i : %d\n", a_ref->i);
      printf ("b_ref->j : %d\n", b_ref->j);

      return 0;
    }

のようなプログラムをコンパイルして，実行してみると，

.. code::

   a_ref->i : 2
   b_ref->j : 2

のように表示されるかもしれない (手元の環境ではこう動作した．
断言できるわけではないのは，規格でそうなると保証されているわけではないから)．
a_ref->i と b_ref->j が同じものを見ている．つまり， a_ref と b_ref が
同じになってしまった．

原因は， free(a_ref) にある．最初の malloc で， a_ref に代入したアドレスを，
仮に addr ということにする． a_ref == addr だ． addr の参照先は，まだ存在している．
しかし， a_ref を解放すると， addr の参照先は消えてしまう．ところが， a_ref はまだ
addr を指し示したままになっている．ここで，もう一度 malloc すると， addr と同じ領域
を再利用しようとする． addr はもう使われていないアドレスだからだ．結果的に，
b_ref == addr となる． すると， a_ref == b_ref となる．
したがって， a_ref->i == b_ref-> j となる．

そこで問題になるのは， a_ref と b_ref の型が違うということだ．
a_ref は struct A * だし， b_ref は struct B * だ． C言語に慣れていれば，同じ
ようなものに見えるかもしれない．だが，これが OCaml の int と string になってきたりすると
大問題だ．

.. code-block:: ocaml

   let a = ref 42
   let () = free a (* 本当にあるわけではないけど，そういう関数があるということにするぜぇ *)
   let b = ref "hello"

   let i = !a (* a == b だから，なんと文字列が返ってくるのである！ *)

そういうわけで，参照を型付けする場合は，型安全性のために GC が必要不可欠らしい．

多相な型への代入
--------------------------------------------------------------------------------

単純な型の参照の型付けは簡単． int ref には int しか入れられない， int ref から取り出して
も int しか出てこない． string を入れることや， string が出てくることはないというだけだ．
ところが，多相型の参照はけっこうやっかいらしい．
'a ref のような，多相型の参照に代入する場合．多相型の参照には，なんでも入れることができる，
とか，なんでも取り出すことができる，というようにしてしまうと困るのだ．そうしたら
型の意味がない．

.. code-block:: ocaml

   let l = ref []
   (* val l : '_a list ref = {contents = [] *)

   let () = l := [42]        (* 任意の型なので int いれて OK *)
   let () = l := ["hello"]   (* 任意の型なので string いれて OK *)

   print_int (List.hd !l)     (* 任意の型なので int 取り出しても OK *)
   print_string (List.hd !l)  (* 任意の型なので string 取り出しても OK *)

逆に，任意の型には，安全の為に int も string もをいれることができない，というように
しても困るのだ．それでは参照として使えない．

.. code-block:: ocaml

   let l = ref []
   (* val l : '_a list ref = {contents = [] *)

   let () = l := [42]        (* ダメ *)
   let () = l := ["hello"]   (* ダメ *)

多相型の参照の場合は，最初の1回だけなんでもいれてよくて，次からは
そのいれた型しかいれてはいけない，というようにするらしい．

.. code-block:: ocaml

   let l = ref []
   (* val l : '_a list ref = {contents = [] *)

   let () = l := [42]        (* 1回目の代入は許可される *)
   let () = l := ["hello"]   (* 2回目の代入はダメ *)