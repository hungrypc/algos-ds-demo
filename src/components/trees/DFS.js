import React from 'react'
import PreOrder from './preOrder'

function DFS() {
  return (
    <div>
      <h2 className="ui block header top attached">
        Depth First Search
      </h2>
      <div className="ui segment attached">
        <PreOrder />
      </div>
    </div>
  )
}

export default DFS
