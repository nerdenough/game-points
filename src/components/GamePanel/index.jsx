import React from 'react'
import GameTable from './GameTable'
import Header from '../Header'
import Panel from '../Panel'

function GamePanel() {
  return (
    <Panel>
      <Header>Kahoot! Points</Header>
      <GameTable />
    </Panel>
  )
}

export default GamePanel
