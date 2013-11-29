external c_print_int: int -> unit = "c_print_int_impl"

let () =
  c_print_int 42