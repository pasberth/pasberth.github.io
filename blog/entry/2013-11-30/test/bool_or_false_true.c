#include "lambda.h"

int main(int argc, char const *argv[])
{
    stack_push(2);
    stack_push(1);
    T();
    F();
    OR();
    app();
    app();
    app();
    app();
    int x = stack_pop();

    printf("OR(F, T)(1, 2) = %d\n", x);

    return 0;
}