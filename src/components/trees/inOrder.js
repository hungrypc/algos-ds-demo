import React, { useState } from 'react'
import Breakdown from '../Breakdown'
import Modal from '../Modal'


function InOrder(props) {
  const [currentIdx, setCurrentIdx] = useState(0)
  const highlightArr = ["", "1, 2, 3, 4, 5, 6, 7, 8", "11, 12", "13, 14", "16, 17, 18, 19, 20, 21", "23", ""];
  const explanationText = {
    0: "",
    1: "For this question, we can make use of the fact that the given tree is a Binary Search Tree. We can take advantage of this by using an in-order traversal.",
    2: "The reason we want to traverse in-order is because, due to the structure of BSTs, we will be able to create a list that contains nodes in ascending order.",
    3: "Once we've done that, we can make use of two pointers left and right to point to the start and end of the sorted list.",
    4: "Since the list is sorted, we can move along the list with our two pointers to sum the values and either move left up if the sum is smaller than the target, or move right down if the sum is bigger than the target. If ever at any point the sum equals target, we'd return true.",
    5: "Return false if we run through the entire list without ever hitting our target sum.",
    6: "Time compexity: O(n). We need to traverse over the whole tree once to do the inorder traversal. Here, n refers to the number of nodes in the given tree. Space complexity : O(n). The sorted list will contain n elements."
  };

  const code = `function inOrder(root, list) {
  if (root === null){
      return
  }
  inOrder(root.left, list)
  list.push(root.val)
  inOrder(root.right, list)
}

function findTarget(root, target) {
  const arr = []
  inOrder(root, arr)
  let left = 0
  let right = arr.length - 1
  
  while (left < right) {
      const sum = arr[left] + arr[right]
      if (sum === target) return true
      if (sum < target) left++
      else right--
  }
  
  return false
}`
  const header = "InOrder"

  const modalCode = `class BinarySearchTree {
  constructor() {
    this.root = null
  }

  DFSInOrder() {
    const current = this.root
    const data = []

    function traverse(node) {
      if (node.left) traverse(node.left)
      data.push(node.val)
      if (node.right) traverse(node.right)
    }
    traverse(current)

    return data
  }
}`
  const brief = ''
  const prompt = "Given a Binary Search Tree and a target number, return true if there exist two elements in the BST such that their sum is equal to the given target."

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

export default InOrder
