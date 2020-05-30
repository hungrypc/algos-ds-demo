import React from 'react'
import Stack from '../components/stacksqueues/Stack'
import Queue from '../components/stacksqueues/Queue';

function StacksAndQueues() {
  return (
    <div className="stacks_queues page ui container padded">      
      <h1 className="ui dividing header page-header">
        Stacks and Queues
      </h1>
      <div className="ui container">
        <Stack />
        <br />
        <Queue />
      </div>
    </div>
  )
}

export default StacksAndQueues
