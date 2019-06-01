import React from 'react'
import './GameTable.css'

function GameTable() {
  return (
    <div className="GameTable">
      <h2 className="GameTable--title">Items</h2>
      <div className="GameTable--items">
        <div className="GameTable--item">A</div>
        <div className="GameTable--item">B</div>
        <div className="GameTable--item">C</div>
        <div className="GameTable--item">D</div>
        <div className="GameTable--item">E</div>
      </div>
    </div>
  )
}

export default GameTable
