import qualified Control.Applicative as A
import qualified Text.Trifecta as P

data SExp
  = Sym String
  | Cons SExp SExp
  deriving (Show)

sym :: P.Parser SExp
sym = do
  s <- A.some $ P.noneOf "(.) \t"
  return $ Sym s

cons :: P.Parser SExp
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

sexp :: P.Parser SExp
sexp = cons A.<|> sym

main :: IO ()
main = do
  s <- getLine
  P.parseTest (do { x <- sexp ; P.eof ; return x }) s