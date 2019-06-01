import React from 'react'
import GameItem from './GameItem'
import items from '../../items.json'
import './GameItemList.css'

function GameItemList() {
  return (
    <div className="GameItemList">
      {items.map(item => (
        <GameItem {...item} />
      ))}
    </div>
  )
}

export default GameItemList
