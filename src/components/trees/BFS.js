import React from 'react'
import Modal from '../Modal'

function BFS() {
  const header = "Breadth First Search"
  const modalCode = `class Node {
  constructor(val) {
    this.val = val
    this.left = null
    this.right = null
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null
  }

  BFS() {
    let node
    const data = []
    const queue = []
    queue.push(node)

    while (queue.length) {
      node = queue.shift()
      data.push(node.val)
      if (node.left) queue.push(node.left)
      if (node.right) queue.push(node.right)
    }

    return data
  }
}`

  return (
    <div>
      <h2 className="ui block header top attached header-code">
        <div>{header}</div>
        <Modal header={header} code={modalCode} />
      </h2>
      <div className=" ui segment attached">
        <div className="definition ui segment container padded">
          Breadth First Search (BFS) is a method of exploring a tree/graph where you first explore all the nodes on one level before exploring all the nodes on the next level.
        </div>
      </div>
    </div>
  )
}

export default BFS
