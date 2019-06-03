import React from 'react'
import GamePanel from './components/GamePanel'
import ScorePanel from './components/ScorePanel'
import items from './items.json'
import './App.css'

function App() {
  return (
    <div className="App">
      <GamePanel items={items} />
      <ScorePanel items={items} />
    </div>
  )
}

export default App
