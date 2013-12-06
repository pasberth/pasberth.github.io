struct X
{
    unsigned char f1 : 1;
    unsigned char f2 : 1;
    unsigned char f3 : 1;
    unsigned char f4 : 1;
    unsigned char f5 : 1;
    unsigned char f6 : 1;
    unsigned char f7 : 1;
    unsigned char f8 : 1;
};

int main(int argc, char const *argv[])
{
    printf ("sizeof(struct X) = %d\n", (sizeof(struct X)));

    struct X x;
    x.f1 = 0;
    x.f2 = 1;
    x.f3 = 2;
    x.f4 = 3;
    printf ("x.f1 = %d\n", x.f1);
    printf ("x.f2 = %d\n", x.f2);
    printf ("x.f3 = %d\n", x.f3);
    printf ("x.f4 = %d\n", x.f4);
    return 0;
}