import React from 'react'
import GameItemList from './GameItemList'
import './GameTable.css'

const items = [
  {
    name: 'A',
    points: 50,
  },
  {
    name: 'B',
    points: 30,
  },
  {
    name: 'C',
    points: 20,
  },
  {
    name: 'D',
    points: 15,
  },
  {
    name: 'E',
    points: 10,
  },
]

function GameTable() {
  return (
    <div className="GameTable">
      <h2 className="GameTable--title">Items</h2>
      <GameItemList items={items} />
    </div>
  )
}

export default GameTable
