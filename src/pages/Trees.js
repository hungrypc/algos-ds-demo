import React from 'react'
import BinarySearchTree from '../components/trees/BinarySearchTree'
import BFS from '../components/trees/BFS'
import DFS from '../components/trees/DFS'

function Trees() {
  return (
    <div className="trees page ui container padded">
      <h1 className="ui dividing header page-header">
        Trees        
      </h1>
      <div>
        desc of trees (intro to trees)
      </div>
      <BinarySearchTree />
      <br/>
      <div className="ui container">
      <h1 className="ui dividing header">
        Tree Traversal
      </h1>
        <BFS />
        <DFS />
      </div>
    </div>
  )
}

export default Trees;
