import React from 'react'
import GameItem from './GameItem'
import './GameItemList.css'

function GameItemList({ items }) {
  return (
    <div className="GameItemList">
      {items.map(item => (
        <GameItem {...item} />
      ))}
    </div>
  )
}

export default GameItemList
