import React, { useState } from 'react';
import P5Wrapper from 'react-p5-wrapper';
import Breakdown from '../Breakdown';


function CycleDetection() {
  const [currentIdx, setCurrentIdx] = useState(0)

  const highlightArr = [""];
  const explanationText = {
    0: "",
  };

  const code = `function findDuplicate(arr) {
  let slow = arr[0]
  let fast = arr[arr[0]]

  while (fast !== slow) {
    fast = arr[arr[fast]]
    slow = arr[slow]
  }

  fast = 0
  while (fast !== slow) {
    fast = arr[fast]
    slow = arr[slow]
  }

  return slow
}`;

  const brief = `Floyd's Cycle Detection Algorithm is a pointer algorithm that uses two pointers, where each pointer moves at different speeds. 
The idea is to move a fast pointer twice as quickly as the slow pointer. The distance between them increases by 1 at each step. 
If at some point both meet, we have found a cycle in the list. This is also known as the "tortoise and the hare algorithm".

Though typically used for linked lists, the following question can utilize this algorithm.
Because the values of the array is like a pointer that points to indices (which we can treat as nodes). Since each value is 1..n (inclusive), then the values will have to point
to a valid index. And since there is a duplicate number, there will be a cycle.`;

  const prompt = `Given an array nums containing n+1 integers where each integer is between 1 and n (inclusive), prove that at least one duplicate number must exist.
  Assume that there is only one duplicate number, find the duplicate one.
  There is only one duplicate number in the array, but it could be repeated more than once.`;

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
      title="Floyd's Cycle Detection Algorithm (Array)"
      brief={brief}
      prompt={prompt}
      code={code}
      explanationText={explanationText}
      highlightArr={highlightArr}
      nextClick={nextClick}
      prevClick={prevClick}
    >
      <div className="explanation__visual">
        <div>e.g. [1, 2, 3, 4, 2]</div>
        <div>
          <P5Wrapper sketch={sketch} />
        </div>
      </div>
    </Breakdown>
  )
};

export default CycleDetection;