fish Friendly Interactive SHell
================================================================================

fish というシェルを使ってみた．なかなかいい感じの使い心地だ．
インストールしたとき，はじめから， Zsh でいう，
`zsh-syntax-highlighting <https://github.com/zsh-users/zsh-syntax-highlighting>`_
や
`zsh-history-substring-search <https://github.com/zsh-users/zsh-history-substring-search>`_
相当の機能が入っている．補完も敏感で，最初からいろいろと補完できる．

`チュートリアル <http://fishshell.com/docs/current/tutorial.html>`_ を読もう．
構文はちょっと独特で，たとえば bash なら

.. code::

   echo $(pwd)

と書く所を， fish では

.. code::

   echo (pwd)

のように書く．他にも， ``cmd ^ file.ext`` のようにすると標準エラー出力を
ファイルに出力するという機能があったりする． bash では

.. code::

   export HOGE=FUGA

と書く所を， fish では

.. code::

   set -x HOGE FUGA

と書く． ``-x`` は， ``--export`` の略だ．

変数は， bash では

.. code::

   x=y

と書く所を， fish では

.. code::

   set x y

と書く．配列は， bash では

.. code::

   a=(x y z)

と書く所を， fish では

.. code::

    set a x y z

と書く．添字は 1 から始まる．

.. code::

   $ echo $a[1]
   x
   $ echo $a[2]
   y
   $ echo $a[3]
   z

さらに，配列をスライスすることも
できる．たとえば，

.. code::

   $ echo $a[1..2]
   x y
   $ echo $a[1..3]
   x y z
   $ echo $a[1..-1]
   x y z
   $ echo $a[1..-2]
   x y

プロンプトは， ``PS1`` とかいう変数ではなく，

.. code::

   function fish_prompt
     printf '%s%s : ' (prompt_pwd) (set_color normal)
   end

のように， ``fish_prompt`` という関数でつくる．

たとえば， ``~/.config/fish/functions/fish_prompt.fish`` などという
ファイルをつくって，

.. code::

   function fish_prompt
     printf '%s%s : ' (prompt_pwd) (set_color normal)
   end

のように書いておくと自動でロードされる．これはプロンプトの話ではなく，
自動で関数をロードするという機能らしい．

``.bashrc`` のような設定ファイルは， fish では ``~/.config/fish/config.fish`` に
書く．

すこし触ったところすごい良い感じだ．
ただちょっと問題もある．構文がシェルではないせいで，普通のシェルなら ``source`` で
評価できるスクリプトを評価したりはできない．そのため， ``hoge.sh`` みたいな設定ファイルは
軒並みお陀仏だ．自分で書いたものならいいけど，バージョン管理システムなどが要求していると
ちょっと面倒なことになると思う．ぼくは opam の使用時に問題になった．
opam は， .bashrc とかに

.. code::

   eval `opam config env`

のように書いてパスを通すのだけど，これが評価できない．
opam は omake などのインストールに使用しているので，これは困る．
結局，ぼくは 

.. code::

   eval (opam config env | perl -pe 's/(.*?)=(.*?);/set -x $1 $2;/; s/export (.*?);//; s/:/ /g')

のように書いて回避した．
