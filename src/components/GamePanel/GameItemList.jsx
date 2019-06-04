import React from 'react'
import GameItem from './GameItem'
import { GameContext } from '../../App'
import './GameItemList.css'

function GameItemList() {
  return (
    <GameContext.Consumer>
      {({ addScore, items }) => {
        return (
          <div className="GameItemList">
            {Object.keys(items).map(key => (
              <GameItem key={key} item={items[key]} addScore={addScore} />
            ))}
          </div>
        )
      }}
    </GameContext.Consumer>
  )
}

export default GameItemList
