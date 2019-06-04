import React from 'react'
import './GameItem.css'

function GameItem({ addScore, item }) {
  return (
    <div
      className="GameItem"
      onClick={() => addScore(item)}
      style={{ backgroundColor: item.color }}
    >
      {item.name}
    </div>
  )
}

export default GameItem
