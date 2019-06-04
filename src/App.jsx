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
        const qty = state.scores[item.name]
          ? state.scores[item.name].qty + 1
          : 1

        const score = qty * item.points

        // Bonus only applies to items with a bonus
        const bonus = item.bonus
          ? Math.floor(qty / item.bonus) * item.points
          : 0

        const newScores = state.scores
        newScores[item.name] = {
          qty,
          score,
          bonus,
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
