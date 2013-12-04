#include <stdio.h>
#include "gc.h"

int main(int argc, char const *argv[])
{
  struct gc *gc = gc_alloc();
  gc->root = gc_malloc(gc, "root");

  struct bt *bt;
  bt = gc->root;

  for (int i = 0; i < HEAP_SIZE / 2; i++)
  {
    struct bt *x = gc_malloc(gc, "x");

    bt->left = x;
    x->right = bt;
    bt = x;
  }

  for (int i = 0; i < HEAP_SIZE / 2; i++)
  {
    gc_malloc(gc, "z");
  }

  return 0;
}