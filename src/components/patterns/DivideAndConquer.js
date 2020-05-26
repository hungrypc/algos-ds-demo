import React, { useState } from 'react';
import P5Wrapper from 'react-p5-wrapper';
import Breakdown from '../Breakdown';

function MultiplePointers() {
  const [currentIdx, setCurrentIdx] = useState(0)

  const highlightArr = ["", "2, 3", "5, 10, 12", "6, 7", "9, 10, 11, 12, 13, 14, 15", "18"];
  const explanationText = {
    0: "",
    1: "Set up our range with variable min being the start of the array and variable max as the end.",
    2: "Loop while min <= max. As we loop, our range will eventually close in on itself towards the answer.",
    3: "Set up variable middle to find the middle of our array, and set our middle element to variable currentElement.",
    4: "If our middle element is smaller than the target we're looking for, the target must be in the left side so we set the range to start from middle + 1 (and vice versa). Otherwise, the middle is the target, so we return middle.",
    5: "If we loop through the entire array and are unable to find it, return -1"
  };

  const code = `function search(arr, val) {
  let min = 0
  let max = array.length - 1

  while (min <= max) {
    let middle = Math.floor(min + ((min + max) / 2))
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

  const prompt = `Given a sorted array of integers, write a function called search that accepts a value and returns the index where the value passed to the function is located.
  If the value is not found, return -1.`;

  function sketch(p) {
    let min = 10
    let max = 155
    let middle = 68

    p.setup = function () {
      p.createCanvas(500, 150);
      p.textFont("monospace")
      p.textSize(16)
    };

    p.draw = async function () {
      p.background(255)
      p.fill(0)
      if (currentIdx >= 1) {
        p.text('min =', 0, 20)
        p.text('max =', 0, 45)
        p.text('[1, 2, 3, 4, 5, 6]', 0, 85)
        p.text("^", min, 105)
        p.text("^", max, 105)
      }
      if (currentIdx >= 1 && currentIdx <= 3) {
        p.text('0', 60, 20)
        p.text('5', 60, 45)
      }
      if (currentIdx >= 3) {
        p.text('m', middle, 115)
      }
      if (currentIdx === 4) {
        if (p.frameCount % 100 === 0) {
          if (middle === 68) {
            min = 96
            middle = 125
          } else if (middle === 125) {
            min = 155
            middle = 155
          }
        }
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
