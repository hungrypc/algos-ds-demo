import React, { useState } from 'react'
import Breakdown from '../Breakdown'
import Modal from '../Modal'


function PreOrder(props) {
  const [currentIdx, setCurrentIdx] = useState(0)
  const highlightArr = [""];
  const explanationText = {
    0: "",
  };


  const code = `function isBinarySearchTree(treeRoot) {
  const stack = []

  stack.push({
    node: treeRoot,
    upperBound: Number.POSITIVE_INFINITY,
    lowerBound: Number.NEGATIVE_INFINITY
  })

  while (stack.length) {
    const { node, upperBound, lowerBound } = stack.pop()

    if (
      node.val >= upperBound || 
      node.val <= lowerBound
    ) return false

    if (node.left) {
      stack.push({
        node: node.left,
        upperBound: node.val,
        lowerBound
      })
    }
    if (node.right) {
      stack.push({
        node: node.right,
        upperBound,
        lowerBound: node.val
      })
    }
  }
  return true
}`
  const header = "PreOrder"
  
  
  const modalCode = `class BinarySearchTree {
  contructor() {
    this.root = null
  }

  DFSPreOrder() {
    let current = this.root
    const data = []
    function traverse(node) {
      data.push(node.val)
      if (node.left) traverse(node.left)
      if (node.right) traverse(node.right)
    }
    traverse(current)

    return data
  }
}`
  const brief = ''
  const prompt = "Write a function that checks if a binary tree is a valid binary search tree."

  function nextClick(idx) {
    console.log(`current index: ${idx}`)
    setCurrentIdx(idx)
  };

  function prevClick(idx) {
    console.log(`current index: ${idx}`)
    setCurrentIdx(idx)
  };


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

export default PreOrder
