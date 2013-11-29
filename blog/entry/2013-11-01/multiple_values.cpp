#include <iostream>

template <int n_, int m_>
struct multiple_values_type
{
    static int const n = n_ * 2;
    static int const m = m_ * 2;
    typedef int value_type;
};

template <int n, int m>
struct multiple_values
{
    typedef multiple_values_type<n, m> type;
};

int main(int argc, char const *argv[])
{
    typedef multiple_values<1, 2>::type ret;

    ret::value_type n = ret::n;
    ret::value_type m = ret::m;
    std::cout << n << std::endl;
    std::cout << m << std::endl;
    return 0;
}