import React from 'react'
import cn from 'classnames'

function Panel({ children, className }) {
  return <div className={cn('panel', className)}>{children}</div>
}

export default Panel
