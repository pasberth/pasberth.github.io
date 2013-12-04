#define HEAP_SIZE 16

struct bt {
  struct bt *left;
  struct bt *right;
  struct bt *copied;
  char *name;
};

struct heap {
  struct bt objects[HEAP_SIZE];
};

struct gc {
  struct {
    struct bt *head;
    struct bt *objects;
  } heap;

  struct heap heap1;
  struct heap heap2;
  struct bt *root;
};

struct gc *gc_alloc();
struct bt *gc_malloc(struct gc *, char *);