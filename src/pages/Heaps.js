import React from 'react'

function Heaps() {
  return (
    <div className="heaps page ui container padded">
      <h1 className="ui dividing header page-header">
        Binary Heaps
      </h1>
      <div className="ui raised segment container padded introduction">
        A Binary Heap is <strong>very</strong> similar to a Binary Search Tree but with a some different rules.<br />
        <em>Like</em> a BST, a node can only have at most two children. <em>Unlike</em> a BST, the order of the nodes depends on the heap ordering property:
        <br/>
        <br/>
        <div className="terminology">
          <div className="terminology_term heap_term">Min Binary Heap:</div>
          <div className="terminology_def">the value of each node is greater than or equal to the value of its parent, with the minimum-value element at the root.</div>
        </div>
        <div className="terminology">
          <div className="terminology_term heap_term">Max Binary Heap:</div>
          <div className="terminology_def">the value of each node is less than or equal to the value of its parent, with the maximum-value element at the root.</div>
        </div>
        <br/>

        A heap is useful data structure when you need to remove the object with the highest (or lowest) priority. A common use of a heap is to implement a priority queue.
      </div>
      <div className="ui container">
        testing
      </div>
    </div>
  )
}

export default Heaps