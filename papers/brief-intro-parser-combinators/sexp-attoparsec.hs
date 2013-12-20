{-# LANGUAGE OverloadedStrings #-}

import qualified Control.Applicative as A
import qualified Data.ByteString as B
import qualified Data.Attoparsec as P
import qualified Data.Attoparsec.ByteString.Char8 as P8

data SExp
  = Sym String
  | Cons SExp SExp
  deriving (Show)

sym :: P.Parser SExp
sym = do
  s <- P.many1 $ P8.satisfy (not . (`elem` "(.) \t"))
  return $ Sym s

cons :: P.Parser SExp
cons = do
  P8.char '('
  P.many' P8.space
  x <- sexp
  P.many' P8.space
  P8.char '.'
  P.many' P8.space
  y <- sexp
  P.many' P8.space
  P8.char ')'
  return $ Cons x y

sexp :: P.Parser SExp
sexp = cons A.<|> sym

main :: IO ()
main = do
  s <- B.getLine
  let result
        = P.parse sexp s
  print $ P.eitherResult result