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
            {items.map(item => (
              <GameItem key={item.name} item={item} addScore={addScore} />
            ))}
          </div>
        )
      }}
    </GameContext.Consumer>
  )
}

export default GameItemList
