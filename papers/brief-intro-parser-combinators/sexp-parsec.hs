import qualified Text.Parsec as P

data SExp
  = Sym String
  | Cons SExp SExp
  deriving (Show)

sym :: Monad m => P.ParsecT String u m SExp
sym = do
  s <- P.many1 $ P.noneOf "(.) \t"
  return $ Sym s

cons :: Monad m => P.ParsecT String u m SExp
cons = do
  P.char '('
  P.spaces
  x <- sexp
  P.spaces
  P.char '.'
  P.spaces
  y <- sexp
  P.spaces
  P.char ')'
  return $ Cons x y

sexp :: Monad m => P.ParsecT String u m SExp
sexp = cons P.<|> sym

main :: IO ()
main = do
  s <- getLine
  let result
        = P.parse
            (do { x <- sexp ; P.eof ; return x })
            "<stdin>"
            s
  print result