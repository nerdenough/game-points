import React from 'react'
import GamePanel from './components/GamePanel'
import ScorePanel from './components/ScorePanel'
import items from './items.json'
import './App.css'

export const GameContext = React.createContext({
  items: [],
  scores: {},
  addScore: item => {},
})

class App extends React.Component {
  constructor(props) {
    super(props)

    this.addScore = item => {
      this.setState(state => {
        // Add 1 to the score each time, or initialise if needed.
        // This persists the number of times an item has been
        // earned. We will then calculate the points with bonus
        // later on.
        const score = state.scores[item.name] ? state.scores[item.name] + 1 : 1
        const newScores = state.scores
        newScores[item.name] = score

        return {
          ...state,
          scores: newScores,
        }
      })
    }

    // Initial state should have an empty object for scores
    this.state = {
      items,
      scores: {},
      addScore: this.addScore,
    }
  }

  render() {
    return (
      <GameContext.Provider value={this.state}>
        <div className="App">
          <GamePanel items={items} />
          <ScorePanel items={items} />
        </div>
      </GameContext.Provider>
    )
  }
}

export default App
