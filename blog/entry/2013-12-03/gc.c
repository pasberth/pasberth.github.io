#include <stdlib.h>
#include <stdio.h>
#include "gc.h"

void gc_mark(struct bt *bt)
{
  if (! bt)
  {
    return;
  }

  bt->mark = 1;
  gc_mark(bt->left);
  gc_mark(bt->right);
}

void gc_sweep(struct gc *gc)
{
  for (int i = 0; i < HEAP_SIZE; i++)
  {
    struct bt *bt = gc->heap.objects[i];

    if (! bt)
      continue;

    if ( bt->mark )
    {
      bt->mark = 0;
    } else {
      printf ("The binary tree %s is freed.\n", bt->name);
      free( bt );

      /* gc->heap.objects[i] はもはや使用されないので再利用する．
       * ヒープのいちばん後ろにあるオブジェクトを前にここに詰める． */
      gc->heap.head--;
      gc->heap.objects[i] = *gc->heap.head;
      *gc->heap.head = (struct bt *) 0;

      /* gc->heap.objects[i] を再利用したので，もういちど同じ場所を走査する． */
      i--;
    }
  }
}

void gc_run(struct gc *gc)
{
  gc_mark(gc->root);
  gc_sweep(gc);
}

struct gc *gc_alloc()
{
  struct gc *gc = calloc(1, sizeof(struct gc));
  gc->heap.head = gc->heap.objects;
  return gc;
}


struct bt *gc_malloc(struct gc *gc, char *name)
{
  if (gc->heap.head - gc->heap.objects + 1 > HEAP_SIZE) {
    printf ("user error: out of memory\n");
    exit(1);
  }
  struct bt *bt = calloc(1, sizeof(struct bt));
  bt->name = name;
  *gc->heap.head = bt;
  gc->heap.head++;
  return bt;
}
