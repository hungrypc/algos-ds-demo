import React, { useState } from 'react';
import P5Wrapper from 'react-p5-wrapper';
import Breakdown from '../Breakdown';
import Modal from '../Modal';


function SinglyLinked() {
  const [currentIdx, setCurrentIdx] = useState(0)

  const highlightArr = [""];
  const explanationText = {
    0: "",
  };

  const code = `function reverseList(head) {
  let current = head
  let prev = null
  
  while (current) {
      const temp = current.next
      current.next = prev
      prev = current
      current = temp        
  }
  
  return prev
}`;

  const brief = `Singly Linked Lists are a data structure that typically contain a head, tail, and length property. 
-   The list consists of nodes, and each node has a value and a pointer to another node or null.
-   Singly linked means that each node is only connected in one direction (the next node).`;

  const prompt = `Write a function that reverses a singly linked list. (Return the new head node).`;

  function sketch(p) {

    p.setup = function () {
      p.createCanvas(500, 150);
      p.textFont("monospace")
      p.textSize(16)
    };

    p.draw = async function () {
      p.background(255)
      p.fill(0)

    }
  };


  function nextClick(idx) {
    console.log(`current index: ${idx}`)
    setCurrentIdx(idx)
  };

  function prevClick(idx) {
    console.log(`current index: ${idx}`)
    setCurrentIdx(idx)
  };

  // Modal settings
  const header = "Singly Linked List"
  const modalCode = `class Node {
  constructor(val) {
    this.val = val
    this.next = null
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null
    this.tail = null
    this.length = 0
  }

  push(val) {           // push a node to the list
    const node = new Node(val)
    if (!this.head) {   // if the list is empty, set node as head and tail
      this.head = node
      this.tail = this.head
    } else {            // otherwise, set the tail's next to node and set the new tail (node)
      this.tail.next = node
      this.tail = node
    }
    this.length++
    return this         // return the list
  }

  pop() {               // pop a node from the list
    if (!this.head) {
      return undefined  // no node to pop, return undefined
    } else {
      let current = this.head
      let pre = current 
      while (current.next) {
        pre = current   // walk through the list to find the second last node
        current = current.next
      }
      this.tail = pre   // set new tail as pre
      this.length--     // decrement length
      if (this.length === 0) {  // if that was the only node, clear the list properties
        this.head = null
        this.tail = null
      }
      return current    // return popped node
    }
  }

  shift() {
    if (!this.head) {
      return undefined  // no node to shift, return undefined
    } else {
      const current = this.head
      this.head = current.next  // set new head node
      this.length--
      if (this.length === 0) {
        this.tail = null
      }
      current.next = null
      return current
    }
  }

  unshift() {
    const newNode = new Node(val)
    if (!this.head) {
      this.head = newNode
      this.tail = newNode
    } else {
      newNode.next = this.head
      this.head = newNode
    }
    this.length++
    return this
  }

  get(index) {
    if (index < 0 || index >= this.length) {
      return null   // return null if index invalid
    } else {
      let count = 0
      let current = this.head
      while (count !== index) {
        current = current.next
        count++
      }
      return current
    }
  }

  set(index, val) {
    const node = this.get(index)
    if (node) {
      node.val = val
      return true
    }
    return false
  }

  insert(index, val) {
    if (index < 0 || index > this.length) return false
    else if (index === this.length) return !!this.push(val)
    else if (index === 0) return !!this.unshift(val)
    else {
      const newNode = new Node(val)
      const pre = this.get(index - 1)
      const temp = pre.next
      pre.next = newNode
      newNode.next temp
      this.length++
      return true
    }
  }

  remove(index) {
    if (index < 0 || index > this.length) return false
    else if (index === this.length - 1) return this.pop()
    else if (index === 0) return this.unshift()
    else {
      const pre = this.get(index - 1)
      const removed = pre.next
      pre.next = removed.next
      this.length--
      return removed
    }
  }
}`

  return (
    <Breakdown
      title={
        <div className="header-code">
          <div>{header}</div>
          <Modal header={header} code={modalCode}/>
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
        <div>e.g. 1->2->3->4->5->NULL</div>
        <div>
          <P5Wrapper sketch={sketch} />
        </div>
      </div>
    </Breakdown>
  )
};

export default SinglyLinked;