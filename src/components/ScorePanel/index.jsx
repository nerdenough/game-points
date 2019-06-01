import React from 'react'
import Header from '../Header'
import Panel from '../Panel'
import './index.css'

function ScorePanel() {
  return (
    <Panel className="ScorePanel">
      <Header>Player Items</Header>
      <div className="ScorePanel--table" />
      <div className="ScorePanel--bonuses" />
      <div className="ScorePanel--total" />
    </Panel>
  )
}

export default ScorePanel
