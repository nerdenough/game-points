import React from 'react'
import './ScoreTable.css'

function ScoreTable({ scores }) {
  return (
    <div className="ScoreTable">
      <div className="ScoreTable--row ScoreTable--row-header">
        <div className="ScoreTable--column ScoreTable--column-left">Item</div>
        <div className="ScoreTable--column ScoreTable--column-middle">Qty</div>
        <div className="ScoreTable--column ScoreTable--column-right">Score</div>
      </div>

      {Object.keys(scores).map(key => {
        return (
          <div className="ScoreTable--row" key={key}>
            <div className="ScoreTable--column ScoreTable--column-left">
              <div className="ScoreTable--game-item">{key}</div>
            </div>
            <div className="ScoreTable--column ScoreTable--column-middle">
              {scores[key].qty}
            </div>
            <div className="ScoreTable--column ScoreTable--column-right">
              {scores[key].bonus
                ? scores[key].score + scores[key].bonus
                : scores[key].score}
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default ScoreTable
