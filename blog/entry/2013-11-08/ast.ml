type t =
  | Num of float
  | Add of t * t
  | Sub of t * t
  | Mul of t * t
  | Div of t * t