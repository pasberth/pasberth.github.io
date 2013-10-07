this["LifeGame"] = {};
this["LifeGame"]["Cell"] = (function ($31, $32, $33, $34, $35) {
  this["self"] = $31;
  this["neighboursList"] = $32;
  this["whenBorn"] = $33;
  this["whenLive"] = $34;
  this["whenDead"] = $35;
  return null;
});
this["LifeGame"]["LifeGame"] = (function ($31) {
  this["cellList"] = $31;
  return null;
});
this["LifeGame"]["update"] = (function (life$2dgame) {
  return Array.prototype.map.call(Array.prototype.map.call(life$2dgame["cellList"], (function (cell) {
    if (((! ("true" === jQuery.prototype.attr.call(jQuery(cell["self"]), "isLive"))) && (Array.prototype.reduceRight.call(cell["neighboursList"], (function ($31, $32) {
      if (("true" === jQuery.prototype.attr.call(jQuery($32), "isLive"))) {
        return (1 + $31);
      } else {
        return $31;
      }
    }), 0) === 3))) {
      return (function (_) {
        return cell["whenBorn"](cell["self"]);
      });
    } else if ((("true" === jQuery.prototype.attr.call(jQuery(cell["self"]), "isLive")) && ((2 > Array.prototype.reduceRight.call(cell["neighboursList"], (function ($31, $32) {
      if (("true" === jQuery.prototype.attr.call(jQuery($32), "isLive"))) {
        return (1 + $31);
      } else {
        return $31;
      }
    }), 0)) || (Array.prototype.reduceRight.call(cell["neighboursList"], (function ($31, $32) {
      if (("true" === jQuery.prototype.attr.call(jQuery($32), "isLive"))) {
        return (1 + $31);
      } else {
        return $31;
      }
    }), 0) > 3)))) {
      return (function (_) {
        return cell["whenDead"](cell["self"]);
      });
    } else if (("true" === jQuery.prototype.attr.call(jQuery(cell["self"]), "isLive"))) {
      return (function (_) {
        return cell["whenLive"](cell["self"]);
      });
    } else {
      return (function (x) {
        return x;
      });
    }
  })), (function (callback) {
    return callback([]);
  }));
});
