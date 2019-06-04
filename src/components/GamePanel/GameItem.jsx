import React from 'react'
import { GameContext } from '../../App'
import './GameItem.css'

function GameItem({ item }) {
  return (
    <GameContext.Consumer>
      {({ addScore }) => {
        return (
          <div className="GameItem" onClick={() => addScore(item)}>
            {item.name}
          </div>
        )
      }}
    </GameContext.Consumer>
  )
}

export default GameItem
