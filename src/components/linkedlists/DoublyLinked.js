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

  const code = `function reverseList(head) {
  const dummy
}`;

  const brief = `Doubly Linked Lists are almost identical to a singly linked list, except every node has another pointer, to the previous node. 
This allows for more flexibility, but the trade off is that it also takes up more memory.`;

  const prompt = `Write a function that ...`;

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
        <div>dummy</div>
        <div>
          <P5Wrapper sketch={sketch} />
        </div>
      </div>
    </Breakdown>
  )
};

export default DoublyLinked;