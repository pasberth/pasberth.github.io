import           Control.Applicative
import qualified Text.Trifecta as P

data SExp
  = Sym String
  | Cons SExp SExp
  deriving (Show)

sym :: P.Parser SExp
sym = Sym <$> (some $ P.noneOf "(.) \t")

cons :: P.Parser SExp
cons = Cons <$> (P.char '(' *> P.spaces *> sexp)
            <* P.spaces <* P.char '.'
            <*> sexp <* P.spaces <* P.char ')'

sexp :: P.Parser SExp
sexp = cons <|> sym

main :: IO ()
main = do
  s <- getLine
  P.parseTest (sexp <* P.eof) s