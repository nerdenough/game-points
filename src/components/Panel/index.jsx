import React from 'react'

function Panel({ children, className }) {
  return <div className={`panel ${className}`}>{children}</div>
}

export default Panel
