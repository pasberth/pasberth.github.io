#define HEAP_SIZE 2048

struct bt {
  struct bt *left;
  struct bt *right;
  char mark;
  char *name;
};

struct gc {
  struct {
    struct bt **head;
    struct bt *objects[HEAP_SIZE];
  } heap;

  struct bt *root;
};

void gc_run(struct gc *);
struct gc *gc_alloc();
struct bt *gc_malloc(struct gc *, char *);