import React from 'react'

function ScoreTotal({ total, newGame }) {
  return (
    <div className="ScoreTotal">
      <div className="ScoreTotal--total">
        <h3>Total</h3>
        <p>{total}</p>
      </div>
      <button className="ScoreTotal--new" onClick={newGame}>
        New Game
      </button>
    </div>
  )
}

export default ScoreTotal
