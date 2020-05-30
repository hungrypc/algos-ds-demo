import React from 'react'

function Stack() {
  return (
    <div className="stack--details">
      <h2 className="ui block header">
        Stacks
      </h2>
      <div className="stack--details__breakdown">
        Stacks are data structures that follow the Last-In-First-Out (LIFO) principle. This means that the <strong>last</strong> item inserted into a stack is the <strong>first</strong> one to be deleted.
      </div>
      {/* <div className="prompt">
        <i className="far fa-hand-point-right"></i>
        <div>
          {props.prompt}
        </div>
      </div> */}
      <div className="ui segment">
        segment
      </div>
    </div>
  )
}

export default Stack
