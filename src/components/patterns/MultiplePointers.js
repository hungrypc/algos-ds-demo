import React, { useState } from 'react';
import P5Wrapper from 'react-p5-wrapper';
import Breakdown from '../Breakdown';

function MultiplePointers() {
  const [currentIdx, setCurrentIdx] = useState(0)

  const highlightArr = ["", "2, 3", "4, 9, 11", "5", "6, 7", "8, 9", "10, 11"];
  const explanationText = {
    0: "",
  };

  const code = `function sumZero(arr) {
  let left = 0;               // pointer 1
  let right = arr.length - 1; // pointer 2
  while (left < right) {
    let sum = arr[left] + arr[right];
    if (sum === 0) {
      return [arr[left], arr[right]];
    } else if (sum > 0) {
      right --;
    } else {
      left ++;
    }
  }
}
  `;

  const brief = "Creating pointers of values that correspond to an index/position and move towards the beginning, end, or middle based on a certain condition.";

  const prompt = `Write a function  called sumZero which accepts a sorted array of integers. the function should find the first pair where the sum is 0. return an array that includes both values that sum to zero or undefined if a pair does not exist.`;

  // function sleep(ms) {
  //   return new Promise(resolve => setTimeout(resolve, ms));
  // }

  
  function sketch(p) {
    let leftX = 0;
    let rightX = 0;

    p.setup = function () {
      p.createCanvas(500, 200);
      p.textFont("monospace")
      p.textSize(16)
    };

    p.draw = async function () {
      p.background(255)
      p.fill(0)
      if (currentIdx >= 1) {
        if (currentIdx <= 4) {
          leftX = 60
          rightX = 249
        }
        p.text("[-2, -1, 0, 1, 2, 3, 4]", 45, 35)
        p.text("L", leftX, 60)
        p.text("R", rightX, 60)
      }
      if (currentIdx >= 3) {
        p.text("sum =", 50, 100)
        if (currentIdx <= 5) {
          p.text("-2", 108, 100)
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
      title="Multiple Pointers"
      brief={brief}
      prompt={prompt}
      code={code}
      explanationText={explanationText}
      highlightArr={highlightArr}
      nextClick={nextClick}
      prevClick={prevClick}
    >
      <div className="explanation__visual">
        <div>e.g. sumZero([-2, -1, 0, 1, 2, 3, 4]);</div>
        <div>
          <P5Wrapper sketch={sketch} />
        </div>
      </div>
    </Breakdown>
  )
}

export default MultiplePointers
