typedef void * gc_heap_t;

gc_heap_t gc_alloc(size_t);
void gc_refer(gc_heap_t);
void gc_leave(gc_heap_t);