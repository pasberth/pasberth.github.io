type t =
  | Symbol of string
  | Cons   of (t * t)
  | Nil