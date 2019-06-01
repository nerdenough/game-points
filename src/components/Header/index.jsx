import React from 'react'
import './index.css'

function Header({ children }) {
  return (
    <div className="Header">
      <h1 className="Header--title">{children}</h1>
    </div>
  )
}

export default Header
