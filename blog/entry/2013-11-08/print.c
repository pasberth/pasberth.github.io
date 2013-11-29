#include <stdio.h>

double calc();

int main(int argc, char const *argv[])
{
    double ret = calc();
    printf ("%f\n", ret);
    return 0;
}