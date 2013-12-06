typedef char X;

#define BITGET(x, n)    ((x & (1 << n)) >> n)
#define BITSET(x, v, n) (x |= ((v & 1) << n))

#define F1_GET(x)       BITGET(x, 0)
#define F1_SET(x, v)    BITSET(x, v, 0)

#define F2_GET(x)       BITGET(x, 1)
#define F2_SET(x, v)    BITSET(x, v, 1)

#define F3_GET(x)       BITGET(x, 2)
#define F3_SET(x, v)    BITSET(x, v, 2)

#define F4_GET(x)       BITGET(x, 3)
#define F4_SET(x, v)    BITSET(x, v, 3)

int main(int argc, char const *argv[])
{
    printf ("sizeof(X) = %d\n", (sizeof(X)));

    X x;            /* struct X x;  */
    F1_SET(x, 0);   /* x.f1 = 0;    */
    F2_SET(x, 1);   /* x.f2 = 1;    */
    F3_SET(x, 2);   /* x.f3 = 2;    */
    F4_SET(x, 3);   /* x.f4 = 3;    */
    printf ("0x%x\n", x);
    printf ("F1_GET(x) = %d\n", F1_GET(x));
    printf ("F2_GET(x) = %d\n", F2_GET(x));
    printf ("F3_GET(x) = %d\n", F3_GET(x));
    printf ("F4_GET(x) = %d\n", F4_GET(x));
    return 0;
}