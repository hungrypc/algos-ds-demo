import React, { useState } from 'react';
import P5Wrapper from 'react-p5-wrapper';
import Breakdown from '../Breakdown';
import Modal from '../Modal';


function DoublyLinked() {
  const [currentIdx, setCurrentIdx] = useState(0)

  const highlightArr = [""];
  const explanationText = {
    0: "",
  };

  const code = `function isPalindrome(head) {
  let tail = head
  while (tail.next) {
    tail = tail.next
  }

  while (head !== tail){
    if (head.val !== tail.val) {
      return false
    } else {
      head = head.next
      tail = tail.prev
    }
  }

  return true
}`;

  const brief = `Doubly Linked Lists are almost identical to a singly linked list, except every node has another pointer to the previous node. 
This allows for more flexibility, but the trade off is that it also takes up more memory.`;

  const prompt = `Write a function that checks whether a doubly linked list of characters is a palindrome or not.`;

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
  const header = "Doubly Linked List"
  const modalCode = `class Node {
  constructor(val) {
    this.val = val
    this.next = null
    this.prev = null
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null
    this.tail = null
    this.length = 0
  }

  push(val) {
    const newNode = new Node(val)
    if (!this.head) {
      this.head = newNode
      this.tail = newNode
    } else {
      this.tail.next = newNode
      newNode.prev = this.tail
      this.tail = newNode
    }
    this.length++
    return this
  }

  pop() {
    if (this.length === 0) return undefined
    const poppedNode = this.tail
    if (this.length === 1) {
      this.head = null
      this.tail = null
    } else {
      this.tail = poppedNode.prev
      this.tail.next = null
      poppedNode.prev = null
    }
    this.length--
    return poppedNode
  }

  shift() {
    if (this.length === 0) return undefined
    const oldHead = this.head
    if (this.length === 1) {
      this.head = null
      this.tail = null
    } else {
      this.head = oldHead.next
      this.head.prev = null
      oldHead.next = null
    }
    this.length--
    return oldHead
  }

  unshift(val) {
    const newNode = new Node(val)
    if (this.length === 0) {
      this.head = newNode
      this.tail = newNode
    } else {
      this.head.prev = newNode
      newNode.next = this.head
      this.head = newNode
    }
    this.length++
    return this
  }

  get(index) {
    if (index < 0 || index >= this.length) return null
    let count, current
    if (index <= this.length / 2) {
      count = 0
      current = this.head
      while (count !== index) {
        current = current.next
        count++
      }
      return current
    } else {
      count = this.length - 1
      current = this.tail
      while (count !== index) {
        current = current.prev
        count--
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
    if (index < 0 || index >= this.length) return false
    if (index === 0) return !!this.unshift(val)
    if (index === this.length - 1) return !!this.push(val)

    let beforeNode = this.get(index - 1)
    let afterNode = beforeNode.next
    let newNode = new Node(val)

    beforeNode.next = newNode
    newNode.prev = beforeNode
    afterNode.prev = newNode
    newNode.next = afterNode

    this.length++
    return true
  }

  remove(index) {
    if (index < 0 || index >= this.length) return undefined
    if (index === 0) return !!this.shift()
    if (index === this.length - 1) return !!this.pop()

    let removed = this.get(index)
    let beforeRemoved = removed.prev
    let afterRemoved = removed.next
    
    beforeRemoved.next = afterRemoved
    afterRemoved.prev = beforeRemoved
    removed.next = null
    removed.prev = null

    this.length--
    return removed
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
        <div>"K"&#8644;"A"&#8644;"Y"&#8644;"A"&#8644;"K"</div>
        <div>
          <P5Wrapper sketch={sketch} />
        </div>
      </div>
    </Breakdown>
  )
};

export default DoublyLinked;