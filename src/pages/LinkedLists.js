import React from 'react'
import SinglyLinked from '../components/linkedlists/SinglyLinked'

function LinkedLists() {
  return (
    <div className="linked_lists page ui container padded">
      <h1 className="ui dividing header page-header">
        Linked Lists
      </h1>
      <div className="ui container">
        <SinglyLinked/>
      </div>
    </div>
  )
}

export default LinkedLists;
