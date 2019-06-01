import React from 'react'
import GameItemList from './GameItemList'
import './GameTable.css'

function GameTable() {
  return (
    <div className="GameTable">
      <h2 className="GameTable--title">Items</h2>
      <GameItemList />
    </div>
  )
}

export default GameTable
