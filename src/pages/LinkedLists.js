import React from 'react'
import SinglyLinked from '../components/linkedlists/SinglyLinked'
import CycleDetection from '../components/linkedlists/CycleDetection'
import DoublyLinked from '../components/linkedlists/DoublyLinked'

function LinkedLists() {
  return (
    <div className="linked_lists page ui container padded">
      <h1 className="ui dividing header page-header">
        Linked Lists
      </h1>
      <div className="ui container">
        <SinglyLinked/>
        <CycleDetection />
        <DoublyLinked/>
      </div>
    </div>
  )
}

export default LinkedLists;
