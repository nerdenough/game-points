import React from 'react'
import GameItemList from './GameItemList'
import './GameTable.css'

function GameTable({ items }) {
  return (
    <div className="GameTable">
      <h2 className="GameTable--title">Items</h2>
      <GameItemList items={items} />
    </div>
  )
}

export default GameTable
