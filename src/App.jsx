import React from 'react'
import GamePanel from './components/GamePanel'
import ScorePanel from './components/ScorePanel'
import items from './items.json'
import './App.css'

export const GameContext = React.createContext({
  items: [],
  scores: {},
  addScore: item => {},
  newGame: () => {},
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
        const qty = state.scores[item.name]
          ? state.scores[item.name].qty + 1
          : 1
        const score = qty * item.points
        const newScores = state.scores
        newScores[item.name] = {
          qty,
          score,
        }

        return {
          ...state,
          scores: newScores,
        }
      })
    }

    this.newGame = () => {
      this.setState(state => ({
        ...state,
        scores: {},
      }))
    }

    // Initial state should have an empty object for scores
    this.state = {
      items,
      scores: {},
      addScore: this.addScore,
      newGame: this.newGame,
    }
  }

  render() {
    return (
      <GameContext.Provider value={this.state}>
        <div className="App">
          <GamePanel />
          <ScorePanel />
        </div>
      </GameContext.Provider>
    )
  }
}

export default App
