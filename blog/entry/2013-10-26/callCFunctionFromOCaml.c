#include <stdio.h>
#include <caml/mlvalues.h>

CAMLprim value
c_print_int_impl(value v)
{
    int i = Int_val(v);
    printf("%d\n", i);
    return Val_unit;
}