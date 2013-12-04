#include <stdlib.h>
#include <stdio.h>
#include <string.h>
#include "gc.h"

static void
gc_pp(struct gc *gc)
{
  long object_count = gc->heap.head - gc->heap.objects;
  printf ("heap: %d used, %d free.\n", object_count, HEAP_SIZE - object_count);
  printf ("{\n");
  for (int i = 0; gc->heap.objects + i < gc->heap.head; i++)
  {
    printf ( "  %p: { left: %p, right: %p, name: %s }\n",
                &gc->heap.objects[i],
                gc->heap.objects[i].left,
                gc->heap.objects[i].right,
                gc->heap.objects[i].name );
  }
  printf ("}\n");
}

static int
gc_is_not_copied(struct bt *obj)
{
  return ( obj && ! obj->copied );
}


static int
gc_is_copied(struct bt *obj)
{
  return ( obj && !! obj->copied );
}

static void
gc_copy(struct bt *obj, struct bt *ptr)
{
  *ptr = *obj;
  obj->copied = ptr;
}

static void
gc_run1(struct gc *gc, struct heap *from_heap, struct heap *to_heap)
{
  struct bt *scanned = &to_heap->objects[0];
  struct bt *unscanned = &to_heap->objects[1];
  gc_copy( gc->root, scanned );
  gc->root = scanned;

  while ( scanned != unscanned )
  {
    if ( gc_is_not_copied( scanned->left ) )
    {
      gc_copy( scanned->left, unscanned );
      scanned->left = unscanned;
      unscanned++;
    }
    else if ( gc_is_copied( scanned->left ) )
    {
      scanned->left = scanned->left->copied;
    }

    if ( gc_is_not_copied( scanned->right ) )
    {
      gc_copy( scanned->right, unscanned );
      scanned->right = unscanned;
      unscanned++;
    }
    else if ( gc_is_copied( scanned->right ) )
    {
      scanned->right = scanned->right->copied;
    }

    scanned++;
  }

#if 0
  for (int i = 0; gc->heap.objects + i < gc->heap.head; i++)
  {
    struct bt bt = from_heap->objects[i];
    if (! bt.copied )
      printf ("The binary tree %s is freed.\n", bt.name);
  }
#endif

  memset(from_heap->objects, 0, (sizeof (struct bt)) * HEAP_SIZE);

  gc->heap.head = scanned;
  gc->heap.objects = &to_heap->objects;
}

static void
gc_run(struct gc *gc)
{
  printf ("beginning to run gc...\nbefore:\n");
  gc_pp(gc);
  if ( gc->heap.objects == gc->heap1.objects ) {
    gc_run1( gc, &gc->heap1, &gc->heap2 );
  } else {
    gc_run1( gc, &gc->heap2, &gc->heap1 );
  }
  printf ("gc was run.\nafter:\n");
  gc_pp(gc);
}

struct gc *
gc_alloc()
{
  struct gc *gc     = calloc( 1, sizeof(struct gc) );
  gc->heap.head     = &gc->heap1.objects;
  gc->heap.objects  = &gc->heap1.objects;
  return gc;
}

struct bt *
gc_malloc(struct gc *gc, char *name)
{
  if ( gc->heap.head - gc->heap.objects + 1 > HEAP_SIZE ) {
    /* 現在使用中のヒープがいっぱいの場合， */

    /* まず GC を走らせ -- */
    gc_run( gc );

    if ( gc->heap.head - gc->heap.objects + 1 > HEAP_SIZE ) {
      /* -- それでもなおヒープがいっぱいならエラーにする */
      printf ( "user error: out of memory\n" );
      exit( 1 );
    }
  }
  struct bt *ret;
  gc->heap.head->name = name;
  ret = gc->heap.head;
  gc->heap.head++;
  return ret;
}
