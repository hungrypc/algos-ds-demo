import React from 'react'
import Code from '../Code'

function Queue() {
  const code = `class Stack {
    constructor() {
      this.front = null
      this.rear = null
      this.size = 0
    }
  
    enqueue(val) {
      const newNode = new Node(val)
      if (!this.front) {
        this.front = newNode
        this.rear = newNode
      } else {
        this.last.next = newNode
        this.last = newNode
      }
      return ++this.size
    }
  
    dequeue() {
      if (!this.front) return null
      const temp = this.front
      if (this.size === 1) this.rear = null
      this.front = temp.next
      this.size--
      return temp.value
    }
  }`

  return (
    <div>
      <div className="queue--details">
        <h2 className="ui block header">
          Queues
      </h2>
        <div className="queue--details__breakdown">
          Queues are data structures that follow the First-In-First-Out (FIFO) principle. This means that the <strong>first</strong> item inserted into a stack is the <strong>first</strong> one to be deleted.
          <br /><br />Elements can be added only from the rear, and elements be deleted only from the front. Think of queues like a queue of people waiting in line for something. The first person to queue up is the first person served.
          <br />The insertion of an element in a queue is called an enqueue operation and deleting an element is called a dequeue operation.
      </div>
        {/* <div className="prompt">
        <i className="far fa-hand-point-right"></i>
        <div>
          {props.prompt}
        </div>
      </div> */}
        <div className="ui segment">
          <div className="ui two column grid">
            <div className="column demo">
              <Code code={code} />
            </div>
            <div className="column">
              p5
          </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Queue
