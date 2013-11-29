C# で hello world
================================================================================

`Mono:OSX <http://www.mono-project.com/Mono:OSX>`_ を参考に， mono を
OS X にインストールします．
`Download <http://www.go-mono.com/mono-downloads/download.html>`_
から， Mono MDK installer というのをもってきてインストールします．

それから適当に hello world を書き

.. literalinclude:: hello.cs
   :language: c#
   :linenos:

実行します．

.. code-block:: sh

   gmcs hello.cs
   mono hello.exe