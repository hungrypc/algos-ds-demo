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
        <h3 className="ui header">Terminology</h3>
        <ul>      
          <li>
            <div className="terminology">
              <div className="terminology_term">Child:</div>
              <div className="terminology_def">A node directly connected to another node when moving away from the root</div>
            </div>
          </li>
          <li>
            <div className="terminology">
              <div className="terminology_term">Parent:</div>
              <div className="terminology_def">The converse notion of a child</div>
            </div>
          </li>
          <li>
            <div className="terminology">
              <div className="terminology_term">Sibling:</div>
              <div className="terminology_def">A group of nodes with the same parent</div>
            </div>
          </li>
          <li>
            <div className="terminology">
              <div className="terminology_term">Leaf:</div>
              <div className="terminology_def">A node with no children</div>
            </div>
          </li>
        </ul>
      </div>
      <BinarySearchTree />
      <br />
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
