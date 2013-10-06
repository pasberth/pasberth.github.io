( ( this["LifeGame"] = {} ) , ( ( this["LifeGame"]["Cell"] = (function (self$2a, neighbours$2dlist, when$2dborn, when$2dlive, when$2ddead) {
  return ( ( this["self"] = self$2a ) , ( ( this["neighboursList"] = neighbours$2dlist ) , ( ( this["whenBorn"] = when$2dborn ) , ( ( this["whenLive"] = when$2dlive ) , ( ( this["whenDead"] = when$2ddead ) , null ) ) ) ) );
}) ) , ( ( this["LifeGame"]["LifeGame"] = (function (cell$2dlist) {
  return ( ( this["cellList"] = cell$2dlist ) , null );
}) ) , ( this["LifeGame"]["update"] = (function (life$2dgame) {
  return Array.prototype.map.call(Array.prototype.map.call(life$2dgame["cellList"], (function (cell) {
    return ( ( (! ( "true" === jQuery.prototype.attr.call(jQuery(cell["self"]), "isLive") )) && ( Array.prototype.reduceRight.call(cell["neighboursList"], (function (count, neighbours) {
      return ( ( "true" === jQuery.prototype.attr.call(jQuery(neighbours), "isLive") ) ? ( 1 + count ) : count );
    }), 0) == 3 ) ) ? (function (_) {
      return cell["whenBorn"](cell["self"]);
    }) : ( ( ( "true" === jQuery.prototype.attr.call(jQuery(cell["self"]), "isLive") ) && ( ( Array.prototype.reduceRight.call(cell["neighboursList"], (function (count, neighbours) {
      return ( ( "true" === jQuery.prototype.attr.call(jQuery(neighbours), "isLive") ) ? ( 1 + count ) : count );
    }), 0) < 2 ) || ( Array.prototype.reduceRight.call(cell["neighboursList"], (function (count, neighbours) {
      return ( ( "true" === jQuery.prototype.attr.call(jQuery(neighbours), "isLive") ) ? ( 1 + count ) : count );
    }), 0) > 3 ) ) ) ? (function (_) {
      return cell["whenDead"](cell["self"]);
    }) : ( ( "true" === jQuery.prototype.attr.call(jQuery(cell["self"]), "isLive") ) ? (function (_) {
      return cell["whenLive"](cell["self"]);
    }) : (function (x) {
      return x;
    }) ) ) );
  })), (function (callback) {
    return callback([]);
  }));
}) ) ) ) )
