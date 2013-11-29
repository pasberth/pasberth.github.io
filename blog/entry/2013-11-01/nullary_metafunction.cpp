#include <iostream>


struct nullary_metafunction_type
{
    static int const value = 42;
    typedef int value_type;
};

/* nullary_metafunction :: Int
 * nullary_metafunction = 42
 */
struct nullary_metafunction
{
    typedef nullary_metafunction_type type;
};

int main(int argc, char const *argv[])
{
    nullary_metafunction::type::value_type
      i = nullary_metafunction::type::value;

    std::cout << i << std::endl;
    return 0;
}