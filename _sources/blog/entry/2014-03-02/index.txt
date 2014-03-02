AsciiDoc
================================================================================

`AsciiDoc <http://asciidoc.org>`_ がすごい良さげ。
ちなみに `AsciiDoctor <http://asciidoctor.org/>`_ というものもあって、
こっちは AsciiDoc の Ruby による実装。
AsciiDoc という記法で書くと、
asciidoc というツールで HTML や PDF に変換できる。

reST よりいいの？　と聞かれたら
まちがいなく良いと答える。ぼくは reST は基本的に好きだったけど、
やっぱりインデントでブロック構造を表現したりするのはバッドだと
思っていた。 AsciiDoc ではホワイトスペースは重要ではない。

導入
--------------------------------------------------------------------------------

.. code-block:: sh

    brew install asciidoc

例
--------------------------------------------------------------------------------

詳しくはマニュアルを読んでもらうとして…例

.. literalinclude:: hello.adoc

コンパイル:

.. code-block:: sh

    # for HTML
    asciidoc hello.adoc

    # for PDF
    asciidoc -b docbook hello.adoc
    xsltproc /usr/local/Cellar/asciidoc/8.6.9/etc/asciidoc/docbook-xsl/fo.xsl hello.xml > hello.fo
    fop hello.fo hello.pdf

表示: :download:`hello.html`, :download:`hello.pdf`

ちなみに AsciiDoctor だとデフォルトの CSS がちょっと
違って、 :download:`hello2.html` こんな感じになる

ただし PDF の場合、  FOP を使うと日本語が死ぬ…
dblatex を使えばいいらしいのだけど、導入できなかった