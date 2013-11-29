{-# LANGUAGE GeneralizedNewtypeDeriving #-}

module Main where

import           Control.Arrow
import           Control.Applicative
import           Control.Monad.Trans
import           Control.Monad.Reader
import qualified Data.List               as L
import qualified Text.Parser.Combinators as P
import qualified Text.Parser.Char        as C
import qualified Text.Parser.Token       as T
import qualified Text.Trifecta           as Trifecta

-- 中置オペレータ
-- 左辺は結合の強さで，数値が低いほど
-- 結合は弱く，高いほど結合が強い事を意味する．
-- たとえば， 9 は 0 より結合が強い．
-- 右辺はシンボルとして使用される文字列．
-- たとえば， `+' とか， `*'．
newtype InfixOp
  = InfixOp (Integer, String)

-- 現在の文脈で使用できる
-- 中置オペレータのリスト
data ExampleParserState
  = ExampleParserState
    { infixLeftOps  :: [InfixOp]
    , infixRightOps :: [InfixOp]
    }

-- 状態付きのパーサ
newtype ExampleParser a
  = ExampleParser
    { unExampleParser :: ReaderT ExampleParserState Trifecta.Parser a }
  deriving ( Functor
           , Applicative
           , Alternative
           , Monad
           , MonadReader ExampleParserState
           , P.Parsing
           , C.CharParsing
           , T.TokenParsing
           )

getOrd :: InfixOp -> Integer
getOrd (InfixOp (x, _)) = x

getSym :: InfixOp -> String
getSym (InfixOp (_, s)) = s

primExpr :: T.TokenParsing p => p String
primExpr = show <$> T.integer

-- 新しい中置演算子を導入して，
-- そのスコープのもとでパーサを評価する
defineInfix :: ExampleParser a -> ExampleParser a
defineInfix p = do
    state <- ask
    state' <-
      many parseInfix >>= return . foldl (\state' (assoc, ord, s) -> case assoc of
                                             'l' -> state' { infixLeftOps = InfixOp (ord, s) : infixLeftOps state' }
                                             'r' -> state' { infixRightOps = InfixOp (ord, s) : infixRightOps state' }) state

    parseWithState p state'

  where

    parseInfix :: ExampleParser (Char, Integer, String)
    parseInfix = do
      T.symbol "infix"
      assoc <- T.symbolic 'l' <|> T.symbolic 'r'
      ord   <- T.integer
      s     <- T.stringLiteral
      return (assoc, ord, s)


-- 中置オペレータをグループ化
-- たとえば， [[+, -], [*, /]] のように，
-- 優先順位が同じものにまとめたリストのリストをつくる．
groupOps :: [InfixOp] -> [[InfixOp]]
groupOps = L.sortBy (\x y -> compare (getOrd x) (getOrd y)) >>>
             L.groupBy (\x y -> getOrd x == getOrd y)


-- 中置オペレータのいずれかをパース
parseOp :: [InfixOp] -> ExampleParser String
parseOp (op:ops) = foldl (\p op' -> P.try p <|> T.symbol (getSym op'))
                         (T.symbol (getSym op))
                         ops

-- 状態付きでパース
parseWithState :: ExampleParser a -> ExampleParserState -> ExampleParser a
parseWithState p state =  ExampleParser $ lift $ runReaderT (unExampleParser p) state

infixLeft :: ExampleParser String
infixLeft = do
  state <- ask

  case groupOps (infixLeftOps state) of
    []         ->
      case infixRightOps state of
        [] -> primExpr
        _  -> infixRight
    (ops:opss) -> do

      let state'    = state { infixLeftOps = concat opss }
      let parseExpr = parseWithState infixRight state'

      l <- parseExpr
      rs <- many ((,) <$> parseOp ops <*> parseExpr)
      return $ foldl (\x (s, y) -> "(" ++ x ++ s ++ y ++ ")") l rs

infixRight :: ExampleParser String
infixRight = do
  state <- ask

  case groupOps (infixRightOps state) of
    []         -> infixLeft
    (ops:opss) -> do

      let state'    = state { infixRightOps = concat opss }
      let parseExpr = parseWithState infixLeft state'

      l <- parseExpr
      rs <- many ((,) <$> parseOp ops <*> parseExpr)
      return $ foldr (\(s, y) f x -> "(" ++ x ++ s ++ f y ++ ")") id rs l

main = do
    getContents >>= Trifecta.parseTest p
  where
    p = runReaderT (unExampleParser (defineInfix infixRight)) emptyState
    emptyState = ExampleParserState [] []
