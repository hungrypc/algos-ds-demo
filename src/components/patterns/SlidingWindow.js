import React, { useState } from 'react';
import P5Wrapper from 'react-p5-wrapper';
import Breakdown from '../Breakdown';

function MultiplePointers() {
  const [currentIdx, setCurrentIdx] = useState(0)

  const highlightArr = ["", "2, 3", "4", "5, 6, 7", "8", "9, 10, 11, 12", "13"];
  const explanationText = {
    0: "",
    1: "Set up a maxSum and tempSum variable to store values to be compared later.",
    2: "If the length of the array is smaller than num, our function won't work, so we return null.",
    3: "First, loop through the array only up to index num - 1, and set the sum to maxSum. This will be our sliding window.",
    4: "Set tempSum to be the same value as maxSum. We'll be using this to keep track of what will be happening in our sliding window.",
    5: "Loop through the rest of the array. Instead of re-adding values, subtract the value of the window's first element and add the remainder to the element after the window. Compare and set the higher value to maxSum.",
    6: "Finally, return maxSum."
  };

  const code = `function maxSubarraySum(arr, num) {
  let maxSum = 0
  let tempSum = 0
  if (arr.length < num) return null;
  for (let i = 0; i < num; i++) {
    maxSum += arr[i]
  }
  tempSum = maxSum
  for (let i = num; i < arr.length; i++) {
    tempSum = tempSum - arr[i - num] + arr[i]
    maxSum = Math.max(maxSum, tempSum)
  }
  return maxSum
}`;

  const brief = "Creating a window which can either be an array or number from one position to another.  Depending on a certain condition, the window either increases or closes (and a new window is created).";

  const prompt = `Write a function called maxSubarraySum which accepts an array of integers and a number called n.
  The function should calculate the maximum sum of n consecutive elements in the array.`;

  function sketch(p) {
    let firstLoop = 10
    let window1 = 10
    let window2 = 68

    p.setup = function () {
      p.createCanvas(500, 150);
      p.textFont("monospace")
      p.textSize(16)
    };

    p.draw = async function () {
      p.background(255)
      p.fill(0)
      if (currentIdx >= 1) {
        p.text('maxSum =', 0, 20)
        p.text('tempSum =', 0, 45)
      }
      if (currentIdx >= 2) {
        p.text('[1, 2, 5, 2, 8, 1, 5]', 0, 85)
      }
      if (currentIdx === 3) {
        p.text("^", 10, 105)
        p.text("^", firstLoop, 105)
        if (p.frameCount % 60 === 0) {
          if (firstLoop === 10) {
            firstLoop = 39
          } else if (firstLoop === 39) {
            firstLoop = 68
          }
        }
        if (firstLoop === 10) {
          p.text('1', 90, 20)
        } else if (firstLoop === 39) {
          p.text('3', 90, 20)
        } else if (firstLoop === 68) {
          p.text('8', 90, 20)
        }
      }
      if (currentIdx >= 4) {
        p.text("^", window1, 105)
        p.text("^", window2, 105)
      }
      if (currentIdx === 4) {
        p.text('8', 90, 20)
        p.text('8', 100, 45)
      }
      if (currentIdx === 5) {
        if (p.frameCount % 110 === 0) {
          if (window1 === 10) {
            window1 = 39
            window2 = 96
          } else if (window1 === 39) {
            window1 = 68
            window2 = 125
          } else if (window1 === 68) {
            window1 = 96
            window2 = 155
          } else if (window1 === 96) {
            window1 = 125
            window2 = 184
          }
        }
        if (window1 === 10) {
          p.text('8', 90, 20)
          p.text('8', 100, 45)
          p.text('= 8', 215, 120)
        } else if (window1 === 39) {
          p.text('9', 90, 20)
          p.text('9', 100, 45)
          p.text('= 9', 215, 120)
          p.text('-1', 8, 120)
          p.text('+2', 94, 120)
        } else if (window1 === 68) {
          p.text('15', 90, 20)
          p.text('15', 100, 45)
          p.text('= 15', 215, 120)
          p.text('-2', 37, 120)
          p.text('+8', 122, 120)
        } else if (window1 === 96) {
          p.text('15', 90, 20)
          p.text('11', 100, 45)
          p.text('= 11', 215, 120)
          p.text('-5', 66, 120)
          p.text('+1', 153, 120)
        } else if (window1 === 125) {
          p.text('15', 90, 20)
          p.text('14', 100, 45)
          p.text('= 14', 215, 120)
          p.text('-2', 94, 120)
          p.text('+5', 182, 120)
        }
      }
      if (currentIdx === 6) {
        window1 = 125
        window2 = 184
        p.text('15', 90, 20)
        p.text('14', 100, 45)
        p.text('result = 15', 0, 135)
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
      title="Sliding Window"
      brief={brief}
      prompt={prompt}
      code={code}
      explanationText={explanationText}
      highlightArr={highlightArr}
      nextClick={nextClick}
      prevClick={prevClick}
    >
      <div className="explanation__visual">
        <div>e.g. maxSubarraySum([1, 2, 5, 2, 8, 1, 5], 3);</div>
        <div>
          <P5Wrapper sketch={sketch} />
        </div>
      </div>
    </Breakdown>
  )
}

export default MultiplePointers
