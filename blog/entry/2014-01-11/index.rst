C# の Rx を使ってみる
================================================================================

C# の Rx がいいらしい．初耳だ．使ってみた．

参考: `Mono で Rx を使用する <http://fits.hatenablog.com/entry/20130224/1361715505>`_

まず，インストールするために NuGet というものをインストールする．

.. code-block:: sh

    mozroots --import --sync
    git clone git@github.com:mrward/monodevelop-nuget-addin.git

lib/NuGet.exe がそう．
カレントディレクトリを MONODEVELOP_NUGET_ADDIN に設定して，
適当なディレクトリに行き，次のコマンドでインストール．
**次のコマンドを叩くと，Reactive extensionsがカレントディレクトリにインストールされる．
注意せよ．**

.. code-block:: sh

    mono $MONODEVELOP_NUGET_ADDIN/lib/NuGet.exe install Rx-Main

適当なソースコードを書き，

.. code-block:: c#

    using System;
    using System.Linq;
    using System.Reactive.Linq;

    public class Example {
      public static void Main(string[] args) {
        Observable.Range(1, 1000).Subscribe(x => Console.WriteLine(x));
      }
    }

コンパイル・実行．

.. code-block:: sh

     mcs -r:System.Reactive.Core,System.Reactive.Linq test.cs
     mono test.exe

でも，これって LINQ となにが違うんだろう？
よくわからない．