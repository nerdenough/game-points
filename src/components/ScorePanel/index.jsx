import React from 'react'
import Header from '../Header'
import Panel from '../Panel'
import ScoreTable from './ScoreTable'
import ScoreTotal from './ScoreTotal'
import { GameContext } from '../../App'
import './index.css'

function ScorePanel() {
  return (
    <GameContext.Consumer>
      {({ items, scores, newGame }) => {
        const total = Object.keys(scores).reduce(
          (acc, key) => acc + scores[key].score + scores[key].bonus,
          0
        )
        const bonusTotal = Object.keys(scores).reduce(
          (acc, key) => acc + scores[key].bonus,
          0
        )
        return (
          <Panel className="ScorePanel">
            <Header>Player Items</Header>
            <ScoreTable scores={scores} />
            <div className="ScorePanel--bonuses">Bonuses {bonusTotal}</div>
            <ScoreTotal total={total} newGame={newGame} />
          </Panel>
        )
      }}
    </GameContext.Consumer>
  )
}

export default ScorePanel
