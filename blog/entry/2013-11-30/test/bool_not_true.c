#include "lambda.h"

int main(int argc, char const *argv[])
{
    stack_push(2);
    stack_push(1);
    T();
    NOT();
    app();
    app();
    app();
    int x = stack_pop();

    printf("NOT(T)(1, 2) = %d\n", x);

    return 0;
}