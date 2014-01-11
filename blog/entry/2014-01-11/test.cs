using System;
using System.Linq;
using System.Reactive.Linq;

public class Example {
  public static void Main(string[] args) {
    Observable.Range(1, 1000).Subscribe(x => Console.WriteLine(x));
  }
}