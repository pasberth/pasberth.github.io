module Main where

infixl 7 ****
infixl 6 ++++

infixr 7 ....

(****) :: String -> String -> String
x **** y = "(" ++ x ++ " **** " ++ y ++ ")"

(++++) :: String -> String -> String
x ++++ y = "(" ++ x ++ " ++++ " ++ y ++ ")"


(....) :: String -> String -> String
x .... y = "(" ++ x ++ " .... " ++ y ++ ")"

main :: IO ()
main = do
  let x = "a" **** "b" ++++ "c" **** "d"
  let y = "a" **** "b" **** "c" **** "d"
  let z = "a" .... "b" .... "c" .... "d"

  print x
  print y
  print z
