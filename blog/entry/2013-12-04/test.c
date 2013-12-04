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
    bt->left = gc_malloc(gc, "x");
    gc_malloc(gc, "y");
    bt = bt->left;
  }
  gc->root->left = 0;

  for (int i = 0; i < HEAP_SIZE; i++)
  {
    gc_malloc(gc, "z");
  }
  return 0;
}