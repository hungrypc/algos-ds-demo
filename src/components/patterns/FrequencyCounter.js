import React, { useState } from 'react';
import P5Wrapper from 'react-p5-wrapper';
import Breakdown from '../Breakdown';

function FrequencyCounter() {
  const [currentIdx, setCurrentIdx] = useState(0)

  const highlightArr = ["", "2, 3, 4", "5, 6", "7, 8, 9", "8", "10, 11, 12", "13", "14, 15, 16", "17, 18, 19", "21"];
  const explanationText = {
    0: "",
    1: "First, check if the length of arr1 is equal to the length of arr2. The condition for returning true cannot happen if both elements don't have the same number of elements, so we return false if that is the case.",
    2: "Initialize two object variables in preparation to keep track of each value in both arrays. These will be our frequency counters.",
    3: "Now that we have our frequency counters set up, we can start putting them to use by iterating through arr1.",
    4: "As we loop through every element in arr1, we can keep track of its value by storing it in our frequencyCount1 object.",
    5: "We then do the same with arr2, this time keeping track of each value of arr2 by storing it in our frequencyCount2 object.",
    6: "For the last step, we'll loop through each key in our frequencyCount1 object to check for the conditions for the function to return true.",
    7: "If the key's value squared does not exist in the frequencyCount2 object, then there's no point in continuing so we immediately return false.",
    8: "If there are two elements with the same value in arr1, there needs to be two elements in arr2 with that value squared. So, if the values don't correspond, we return false.",
    9: "Finally, if we haven't hit any conditions that return false, we reach the end of the code and return true."
  };

  const code = `function same(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }
  let frequencyCount1 = {};
  let frequencyCount2 = {};
  for (let val of arr1) {
    frequencyCount1[val] = (frequencyCount1[val] || 0) + 1;
  }
  for (let val of arr2) {
    frequencyCount2[val] = (frequencyCount2[val] || 0) + 1;
  }
  for (let key in frequencyCount1) {
    if (!(key ** 2 in frequencyCount2)) {
      return false;
    }
    if (freqCoun2[key ** 2] !== frequencyCount1[key]) {
      return false;
    }
  }
  return true;
  }
  `;

  const brief = "This is when we use objects or sets to keep track of certain values or the frequencies of those values.";

  const prompt = `Write a function called same, which accepts two arrays.
  The function should return true if every value in the array has its corresponding value squared in the second array. The frequency of values must be the same.`;

  function sketch(p) {
    let arr1 = "arr1 = [1, 2, 3]"
    let arr2 = "arr2 = [4, 1, 9]"

    p.setup = function () {
      p.createCanvas(500, 200);
      p.textFont("monospace")
      p.textSize(16)
    };
    
    p.draw = function () {
      p.background(255)
      p.text(arr1, 0, 15)
      p.text(arr2, 180, 15)
      if (currentIdx > 1){
        p.text('test', 100, 50)
      }
    };
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
        title="Frequency Counter"
        brief={brief}
        prompt={prompt}
        code={code} 
        explanationText={explanationText} 
        highlightArr={highlightArr} 
        nextClick={nextClick}
        prevClick={prevClick}
      >
        <div className="explanation__visual">
          <div>same([1, 2, 3], [4, 1, 9]);</div>
          <div>
            <P5Wrapper sketch={sketch} />
          </div>
        </div>
      </Breakdown>
  )
};

export default FrequencyCounter;
