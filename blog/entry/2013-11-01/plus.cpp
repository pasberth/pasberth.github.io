#include <iostream>

template <int result>
struct plus_type
{
    static int const value = result;
    typedef int value_type;
};

template <int n, int m>
struct plus
{
    typedef plus_type<n + m> type;
};

int main(int argc, char const *argv[])
{
    int i = plus<1, 2>::type::value;
    std::cout << i << std::endl;
    return 0;
}