import React, { Fragment } from 'react'
import Modal from '../Modal'

function PriorityQueue() {

  const modalCode = `class Node {
  constructor(val, priority) {
    this.val = val
    this.priority = priority
  }
}

class PriorityQueue {
  constructor() {
    this.values = []            // our array representation of the heap
  }

  enqueue(val, priority) {      // when adding to the Priority Queue
    const node = new Node(val, priority)
    this.values.push(node)      // push the node to the end of the list
    this.bubbleUp()             // then bubble up to get it to the right position
  }

  bubbleUp() {
    let index = this.values.length - 1
    const element = this.values[index]    // our recently added element
    
    while (index > 0) {
      let parentIndex = Math.floor((index - 1) / 2)
      let parent = this.values[parentIndex]   // get parent from parentIndex

      if (element.priority >= parent.priority) break    // element in correct position?

      this.values[parentIndex] = element      // swap if in wrong position
      this.values[index] = parent
      index = parentIndex
    }
  }

  dequeue() {         // extracting from our Priority Queue (from the top)
    const min = this.values[0]      // node to be extracted 
    const end = this.values.pop()   // last node added
    if (this.values.length > 0) {
      this.values[0] = end          // swap popped node to the top
      this.bubbleDown()             // and trickle down to reorganize Priority Queue 
    }
    return min
  }

  bubbleDown() {
    let index = 0
    const length = this.values.length
    const element = this.values[index]
    while (true) {
      const leftChildIndex = 2 * index + 1
      const rightChildIndex = 2 * index + 2

      let leftChild, rightChild
      let swap = null             // keep track of position we'll swap with

      if (leftChildIndex < length) {
        leftChild = this.values[leftChildIndex]
        if (leftChild.priority < element.priority) {
          swap = leftChildIndex
        }
      }
      if (rightChildIndex < length) {
        rightChild = this.values[rightChildIndex]
        if (
          (!swap && rightChild.priority < element.priority) ||
          (swap && rightChild.priority < leftChild.priority)
        ) {
          swap = rightChildIndex
        }
      }

      if (!swap) break
      this.values[index] = this.values[swap]
      this.values[swap] = element
      index = swap
    }
  }
}`
  const header = 'Priority Queue'

  return (
    <Fragment>
      <h2 className="ui block header top attached header-code">
        <div>{header}</div>
        <Modal header={header} code={modalCode} />
      </h2>
      <div className="ui segment attached container padded">
        <div>For example, here is a Priority Queue using Min Binary Heap</div>
      </div>
    </Fragment>
  )
}

export default PriorityQueue
