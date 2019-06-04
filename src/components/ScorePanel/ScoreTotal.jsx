import React from 'react'
import './ScoreTotal.css'

function ScoreTotal({ total, newGame }) {
  return (
    <div className="ScoreTotal">
      <div className="ScoreTotal--total">
        <h3>Total</h3>
        <p>{total}</p>
      </div>
      <div className="ScoreTotal--new">
        <button className="ScoreTotal--button" onClick={newGame}>
          New Game
        </button>
      </div>
    </div>
  )
}

export default ScoreTotal
