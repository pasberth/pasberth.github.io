INITIAL_PATTERNS = [
  [ [10, 10]
    [11, 10]
    [11, 11]
    [12, 11]
    [11, 12] ]
  [ [11, 16]
    [13, 16]
    [13, 15]
    [15, 14]
    [15, 13]
    [15, 12]
    [17, 13]
    [17, 12]
    [17, 11]
    [18, 12] ] ]

jQuery ($) ->

    initialPattern = INITIAL_PATTERNS[parseInt(Math.random() * INITIAL_PATTERNS.length)]
    cellList = []
    whenBorn = (cell) -> $(cell).attr("isLive", "true").removeClass("lifegame-dead").addClass("lifegame-born")
    whenLive = (cell) -> $(cell).removeClass("lifegame-born").addClass("lifegame-live")
    whenDead = (cell) -> $(cell).attr("isLive", "false").removeClass("lifegame-live lifegame-born").addClass("lifegame-dead")

    for i in [ 0 .. 29 ]
        for j in [ 0 .. 29 ]
            cellList.push(
              new LifeGame.Cell(
                "#lifegame-#{i}-#{j}",
                [ "#lifegame-#{i + 1}-#{j    }",
                  "#lifegame-#{i - 1}-#{j    }",
                  "#lifegame-#{i + 1}-#{j + 1}",
                  "#lifegame-#{i - 1}-#{j + 1}",
                  "#lifegame-#{i + 1}-#{j - 1}",
                  "#lifegame-#{i - 1}-#{j - 1}",
                  "#lifegame-#{i    }-#{j + 1}",
                  "#lifegame-#{i    }-#{j - 1}"
                ],
                whenBorn,
                whenLive,
                whenDead))

    for index in initialPattern
      i = index[0]
      j = index[1]
      $("#lifegame-#{i}-#{j}").attr("isLive", "true").addClass("lifegame-live")

    lifeGame = new LifeGame.LifeGame(cellList)
    setInterval((() -> LifeGame.update(lifeGame)), 200.0)
