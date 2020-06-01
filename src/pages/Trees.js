import React from 'react'
import BinarySearchTree from '../components/trees/BinarySearchTree'
import BFS from '../components/trees/BFS'
import DFS from '../components/trees/DFS'

function Trees() {
  return (
    <div className="trees page ui container padded">
      <h1 className="ui dividing header page-header">
        Binary Trees
      </h1>
      <div className="ui raised segment container padded introduction">
        Binary Trees are data structures that consists of nodes in a branching structure with a parent/child relationship. They organize data hierarchically.
        <ul>
          <li>Each element can only have 2 children, we typically name them the left and right child.</li>
          <li>There has to be one entry point (only one root).</li>
        </ul>
        <h3 className="ui header">Tree terminology</h3>
        <ul>
          <li><strong>Root:</strong> The top node in a tree</li>
          <li><strong>Child:</strong> A node directly connected to another node when moving away from the root</li>
          <li><strong>Parent:</strong> The converse notion of a child</li>
          <li><strong>Sibling:</strong> A group of nodes with the same parent</li>
          <li><strong>Leaf:</strong> A node with no children</li>
        </ul>
      </div>
      <BinarySearchTree />
      <br />
      <div className="ui container">
        <h1 className="ui dividing header page-header">
          Tree Traversal
      </h1>
        <BFS />
        <DFS />
      </div>
    </div>
  )
}

export default Trees;
