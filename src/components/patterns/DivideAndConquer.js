import React, { useState } from 'react';
import P5Wrapper from 'react-p5-wrapper';
import Breakdown from '../Breakdown';

function MultiplePointers() {
  const [currentIdx, setCurrentIdx] = useState(0)

  const highlightArr = ["", "2, 3", "5, 10, 12", "6, 7", "9, 10, 11, 12, 13, 14, 15", "18"];
  const explanationText = {
    0: "",
  };

  const code = `function search(arr, val) {
  let min = 0
  let max = array.length - 1

  while (min <= max) {
    let middle = Math.floor((min + max) / 2)
    let currentElement = array[middle]

    if (array[middle] < val) {
      min = middle + 1
    } else if (array[middle] > val) {
      max = middle - 1
    } else {
      return middle
    }
  }

  return -1
}`;

  const brief = "Dividing a data set into smaller chunks and then repeating a process with a subset of data.  This can tremendously decrease time complexity";

  const prompt = `Given a sorted array of integers, write a function called search that accepts a value and returns the index where the value passed to the function is located.  If the value is not found, return -1.`;

  function sketch(p) {

    p.setup = function () {
      p.createCanvas(500, 150);
      p.textFont("monospace")
      p.textSize(16)
    };

    p.draw = async function () {
      p.background(255)
      p.fill(0)
      if (currentIdx >= 1) {

      }
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
      title="Divide and Conquer"
      brief={brief}
      prompt={prompt}
      code={code}
      explanationText={explanationText}
      highlightArr={highlightArr}
      nextClick={nextClick}
      prevClick={prevClick}
    >
      <div className="explanation__visual">
        <div>e.g. search([1, 2, 3, 4, 5, 6], 6);</div>
        <div>
          <P5Wrapper sketch={sketch} />
        </div>
      </div>
    </Breakdown>
  )
}

export default MultiplePointers
