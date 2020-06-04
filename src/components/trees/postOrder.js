import React, { useState } from 'react'
import Breakdown from '../Breakdown'
import Modal from '../Modal'


function PostOrder(props) {
  const [currentIdx, setCurrentIdx] = useState(0)
  const highlightArr = [""];
  const explanationText = {
    0: "",
  };

  const code = `function distributeCoins(root) {
  let moves = 0

  function postOrder(node) {
    if (!node) return 0

    const left = postOrder(node.left)
    const right = postOrder(node.right)

    moves += Math.abs(left) + Math.abs(right)

    return left + right + node.val - 1
  }

  postOrder(root)
  return moves
}`
  const header = "PostOrder"

  const modalCode = `class BinarySearchTree {
  constructor() {
    this.root = null
  }

  DFSPostOrder() {
    const current = this.root
    const data = []

    function traverse(node) {
      if (node.left) traverse(node.left)
      if (node.right) traverse(node.right)
      data.push(node.val)
    }
    traverse(current)

    return data
  }
}`
  const brief = ''
  const prompt = "Given the root of a binary tree with N nodes, each node in the tree has node.val coins, and there are N coins total. In one move, we may choose two adjacent nodes and move one coin from one node to another. (The move may be from parent to child, or from child to parent.) Return the number of moves required to make every node have exactly one coin."

  function nextClick(idx) {
    console.log(`current index: ${idx}`)
    setCurrentIdx(idx)
  };

  function prevClick(idx) {
    console.log(`current index: ${idx}`)
    setCurrentIdx(idx)
  };

  if (currentIdx) {
    console.log('')
  }

  return (
    <Breakdown
      title={
        <div className="header-code">
          <div>{header}</div>
          <Modal header={header} code={modalCode} />
        </div>
      }
      brief={brief}
      prompt={prompt}
      code={code}
      explanationText={explanationText}
      highlightArr={highlightArr}
      nextClick={nextClick}
      prevClick={prevClick}
    >
      <div className="explanation__visual">
        <div>
          {/* <P5Wrapper sketch={sketch} /> */}
        </div>
      </div>
    </Breakdown>
  )
}

export default PostOrder
