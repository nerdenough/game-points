import React from 'react'
import GameTable from './GameTable'
import Header from '../Header'
import Panel from '../Panel'
import './index.css'

function GamePanel({ items }) {
  return (
    <Panel className="GamePanel">
      <Header>Kahoot! Points</Header>
      <GameTable items={items} />
    </Panel>
  )
}

export default GamePanel
