import React from 'react'
import Code from '../Code'

function Stack() {
  const code = `class Stack {
  constructor() {
    this.top = null
    this.size = 0
  }

  push(val) {
    const newNode = new Node(val)
    if (!this.top) {
      this.top = newNode
    } else {
      const temp = this.top
      this.top = newNode
      newNode.next = temp
    }
    return ++this.size
  }

  pop() {
    if (!this.top) return null
    const temp = this.top
    this.top = temp.next
    this.size--
    return temp.value
  }
}`

  return (
    <div className="stack--details">
      <h2 className="ui block header">
        Stacks
      </h2>
      <div className="stack--details__breakdown pre-line">
        Stacks are data structures that follow the Last-In-First-Out (LIFO) principle. This means that the <strong>last</strong> item inserted into a stack is the <strong>first</strong> one to be deleted.
        <br /><br />Elements can be added and deleted only from the top. We can think of them like a stack of books; you can remove only the top of the book, and you can add a new book on the top. In order to retrieve the third book in the stack,
        you would have to take the fifth book off, then the fourth book, until you are able to retrieve the third book.
        <br /> The insertion of an element into stack is called pushing. Deletion of an element from the stack is called popping.
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
  )
}

export default Stack
