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
        return (
          <Panel className="ScorePanel">
            <Header>Player Items</Header>
            <ScoreTable scores={scores} />
            <div className="ScorePanel--bonuses" />
            <ScoreTotal total={0} newGame={newGame} />
          </Panel>
        )
      }}
    </GameContext.Consumer>
  )
}

export default ScorePanel
