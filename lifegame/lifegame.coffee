Cell     = (@self, @neighboursList, @whenBorn, @whenLive, @whenDead) -> return null
LifeGame = (@cellList) -> return null

updateLifeGame = (lifeGame) ->
    bornCells = []
    liveCells = []
    deadCells = []

    for cell in lifeGame.cellList
        isLive = ("true" == $(cell.self).attr "isLive")

        neighboursCount = 0
        for neighbours in cell.neighboursList
            if ("true" == $(neighbours).attr "isLive")
                ++neighboursCount

        if (not isLive) && neighboursCount == 3
            bornCells.push cell
        else if isLive && (neighboursCount < 2 || neighboursCount > 3)
            deadCells.push cell
        else if isLive
            liveCells.push cell

    for cell in bornCells
        cell.whenBorn cell.self

    for cell in deadCells
        cell.whenDead cell.self

    for cell in liveCells
        cell.whenLive cell.self

@LifeGame = {
    Cell:     Cell
    LifeGame: LifeGame

    update: updateLifeGame
}
