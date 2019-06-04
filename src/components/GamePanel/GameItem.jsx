import React from 'react'
import './GameItem.css'

function GameItem({ addScore, item }) {
  return (
    <div className="GameItem" onClick={() => addScore(item)}>
      {item.name}
    </div>
  )
}

export default GameItem
