import React, { useState } from 'react';
import P5Wrapper from 'react-p5-wrapper';
import Breakdown from '../Breakdown';


function CycleDetection() {
  const [currentIdx, setCurrentIdx] = useState(0)

  const highlightArr = [""];
  const explanationText = {
    0: "",
  };

  const code = `function hasCycle(head) {
  let fast = head
  let slow = head
  
  while (fast && fast.next) {
    slow = slow.next
    fast = fast.next.next
    
    if (slow === fast) return true
  }
  
  return false
}`;

  const brief = `Floyd's Cycle Detection Algorithm is a pointer algorithm that uses two pointers, where each pointer moves at different speeds. 
The idea is to move a fast pointer twice as quickly as the slow pointer. The distance between them increases by 1 at each step. 
If at some point both meet, we have found a cycle in the list. This is also known as the "tortoise and the hare algorithm".`;

  const prompt = `Write a function that detects whether there is a cycle in a linked list.`;

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

  return (
    <Breakdown
      title="Floyd's Cycle Detection Algorithm (SLL)"
      brief={brief}
      prompt={prompt}
      code={code}
      explanationText={explanationText}
      highlightArr={highlightArr}
      nextClick={nextClick}
      prevClick={prevClick}
    >
      <div className="explanation__visual">
        <div>e.g. 1->2->3->4->2->...</div>
        <div>
          <P5Wrapper sketch={sketch} />
        </div>
      </div>
    </Breakdown>
  )
};

export default CycleDetection;