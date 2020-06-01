import React from 'react'
import PreOrder from './preOrder'
import InOrder from './inOrder'
import PostOrder from './postOrder'

function DFS() {
  return (
    <div>
      <h2 className="ui block header top attached">
        Depth First Search
      </h2>
      <div className="ui segment attached">
        <div className="definition ui segment container padded">
          Depth First Search (DFS) is a method of exploring a tree/graph where you go as deep as possible down one path before backing up and going down a different path.
        </div>
        <PreOrder />
        <InOrder />
        <PostOrder />
      </div>
    </div>
  )
}

export default DFS
