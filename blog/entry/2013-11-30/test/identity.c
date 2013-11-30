
int main(int argc, char const *argv[])
{
    // Identity function
    stack_push(42);
    I();
    app();
    int x = stack_pop();

    printf("I(42) = %d\n", x);

    return 0;
}