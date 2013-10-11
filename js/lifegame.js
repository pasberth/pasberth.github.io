(this["LifeGame"]) = {};
((this["LifeGame"])["Cell"]) = (function ($31, $32, $33, $34, $35) {
  (this["self"]) = $31;
  (this["neighboursList"]) = $32;
  (this["whenBorn"]) = $33;
  (this["whenLive"]) = $34;
  (this["whenDead"]) = $35;
  return null;
});
((this["LifeGame"])["LifeGame"]) = (function ($31) {
  (this["cellList"]) = $31;
  return null;
});
((this["LifeGame"])["update"]) = (function (life$2dgame) {
  return ((life$2dgame["cellList"]).map((function (cell) {
    if ((! ((jQuery(cell["self"])).data("isLive"))) && (((cell["neighboursList"]).reduceRight((function ($31, $32) {
      if ((jQuery($32)).data("isLive")) {
        return 1 + $31;
      } else {
        return $31;
      }
    }), 0)) === 3)) {
      return (function ($5f) {
        return cell["whenBorn"](cell["self"]);
      });
    } else if (((jQuery(cell["self"])).data("isLive")) && ((2 > ((cell["neighboursList"]).reduceRight((function ($31, $32) {
      if ((jQuery($32)).data("isLive")) {
        return 1 + $31;
      } else {
        return $31;
      }
    }), 0))) || (((cell["neighboursList"]).reduceRight((function ($31, $32) {
      if ((jQuery($32)).data("isLive")) {
        return 1 + $31;
      } else {
        return $31;
      }
    }), 0)) > 3))) {
      return (function ($5f) {
        return cell["whenDead"](cell["self"]);
      });
    } else if ((jQuery(cell["self"])).data("isLive")) {
      return (function ($5f) {
        return cell["whenLive"](cell["self"]);
      });
    } else {
      return (function (x) {
        return x;
      });
    }
  }))).map((function (callback) {
    return callback([]);
  }));
});
