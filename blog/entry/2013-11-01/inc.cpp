#include <iostream>
#include <boost/mpl/placeholders.hpp>
#include <boost/mpl/apply.hpp>
#include <boost/mpl/plus.hpp>
#include <boost/mpl/int.hpp>

using namespace boost;
using namespace boost::mpl::placeholders;

typedef mpl::plus<_1, mpl::int_<1> > inc;

int main(int argc, char const *argv[])
{
    int i = mpl::apply<inc, mpl::int_<42> >::type::value;
    std::cout << i << std::endl;
    return 0;
}