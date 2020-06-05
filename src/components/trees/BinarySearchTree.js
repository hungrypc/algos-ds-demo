import React from 'react'

function BinarySearchTree() {
  return (
    <div>
      <h2 className="ui block header top attached">
        Binary Search Trees
      </h2>
      <div className=" ui segment attached">
        <div className="ui raised segment container padded introduction">
          A <strong>Binary Search Tree</strong> is a binary tree in which every node fits a specific ordering property:
          <ul>
            <li>Every node to the left of the parent is always <strong>less</strong> than the parent</li>
            <li>Every node to the right of the parent is always <strong>greater</strong> than the parent</li>
          </ul>
          Note that this inequality must be true for all of a node's descendents, not just its immediate children.
        </div>
        <h3 className="ui dividing header">Balanced vs Unbalanced</h3>
        <h3 className="ui dividing header">Complete Binary Trees</h3>
        <h3 className="ui dividing header">Full Binary Trees</h3>
        <h3 className="ui dividing header">Perfect Binary Trees</h3>
      </div>
    </div>
  )
}

export default BinarySearchTree
