#include <stdio.h>
#include "gc.h"

int main(int argc, char const *argv[])
{
    struct gc *gc = gc_alloc();
    gc->root = gc_malloc(gc, "root");
    gc->root->left = gc_malloc(gc, "root->left");
    gc->root->right = gc_malloc(gc, "root->right");
    gc_malloc(gc, "free");

    printf("run gc first.\n");
    gc_run(gc);

    gc->root->right = (struct bt *) 0;
    printf("run gc second.\n");
    gc_run(gc);
    return 0;
}