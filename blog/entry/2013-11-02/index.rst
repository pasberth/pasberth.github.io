Sphinx で HTML に LaTeX を埋め込む
================================================================================

Sphinx で， HTML に LaTex を埋め込むには，
`texfigure <https://pypi.python.org/pypi/sphinxcontrib-texfigure/0.1.1>`_
という拡張を使うといい． emerge とか pip で必要なライブラリをインストール．
それから， conf.py に

.. code:: py

  extensions = ['sphinxcontrib.texfigure']

と書く．そうして，たとえば，次のような *hello.tex* 

.. literalinclude:: hello.tex
   :language: latex
   :linenos:

をつくって，

.. code-block:: rst

   .. texfigure:: hello.tex

などと書くと，次のように， PNG として HTML に
埋め込まれる．

.. texfigure:: hello.tex
