#include <stddef.h>
#include <stdlib.h>
#include <stdio.h>
#include "gc.h"

static
struct reference {
  char count;
};

static inline int
reference_size()
{
  return (sizeof (struct reference));
}


static inline gc_heap_t
reference_to_pointer(struct reference *ref)
{
  return ((void *) ref) + reference_size();
}

static inline struct reference*
pointer_to_reference(gc_heap_t ptr)
{
  return ((struct reference *) (ptr - reference_size()));
}

gc_heap_t
gc_alloc(size_t size)
{
  struct reference* ref = (struct reference*) malloc( size + reference_size() );
  ref->count = 0;
  return reference_to_pointer( ref );
}

void
gc_refer(gc_heap_t ptr)
{
  struct reference *ref = pointer_to_reference( ptr );
  ref->count = ref->count + 1;
}

void
gc_leave(gc_heap_t ptr)
{
  struct reference *ref = pointer_to_reference( ptr );

  ref->count = ref->count - 1;

  if ( ref->count == 0 )
  {
    printf ( "The pointer %p is freed.\n", ptr );
    free( ref );
  }
}