import React from 'react'
import PriorityQueue from '../components/heaps/PriorityQueue'

function Heaps() {
  return (
    <div className="heaps page ui container padded">
      <h1 className="ui dividing header page-header">
        Binary Heaps
      </h1>
      <div className="ui raised segment container padded introduction">
        <p>A Binary Heap is <strong>very</strong> similar to a Binary Search Tree but with a some different rules.A Binary Heap is <strong>very</strong> similar to a Binary Search Tree but with a some different rules.</p>
        <p><em>Like</em> a BST, a node can only have at most two children. <em>Unlike</em> a BST, the order of the nodes depends on the heap ordering property:</p>  
      
        <div className="terminology">
          <div className="terminology_term heap_term">Min Binary Heap:</div>
          <div className="terminology_def">the value of each node is greater than or equal to the value of its parent, with the minimum-value element at the root.</div>
        </div>
        <div className="terminology">
          <div className="terminology_term heap_term">Max Binary Heap:</div>
          <div className="terminology_def">the value of each node is less than or equal to the value of its parent, with the maximum-value element at the root.</div>
        </div>
        <br/>
        <p>A heap is useful data structure when you need to remove the object with the highest (or lowest) priority. A common use of a heap is to implement a priority queue.</p>
        <h2 className="ui dividing header">Storing Heaps</h2>
        <p>A Binary Heap is a Complete Binary Tree. This means that the tree is completely filled except possibly the bottom level, which is filled from left to right. 
          <br/>We can take advantage of its complete property and represent this as an array, where for any <strong>index (n)</strong> of an array:</p>
        <ul>
          <li>The left child is stored at index <strong>2n + 1</strong> </li>
          <li>The right child is stored at index <strong>2n + 2</strong> </li>
        </ul>
        <p>
          We can find the parent node for any child node at index n with: Math.floor((n - 1) / 2).
        </p>
      </div>
      <div className="ui container">
        <PriorityQueue />
      </div>
    </div>
  )
}

export default Heaps