import React, { useState } from 'react';
import P5Wrapper from 'react-p5-wrapper';
import Breakdown from '../Breakdown';

function FrequencyCounter() {
  const [currentIdx, setCurrentIdx] = useState(0)

  const highlightArr = ["", "2, 3, 4", "5, 6", "7, 8, 9", "10, 11, 12", "13", "14, 15, 16", "17, 18, 19", "21"];
  const explanationText = {
    0: "",
    1: "First, check if the length of arr1 is equal to the length of arr2. The condition for returning true cannot happen if both elements don't have the same number of elements, so we return false if that is the case.",
    2: "Initialize two object variables in preparation to keep track of each value in both arrays. These will be our frequency counters.",
    3: "Iterate through arr1 so that as we loop through every element, we can keep track of its value by storing it in our frequencyCount1 object.",
    4: "We then do the same with arr2, this time keeping track of each value of arr2 by storing it in our frequencyCount2 object.",
    5: "For the last step, we'll loop through each key in our frequencyCount1 object to check for the conditions for the function to return true.",
    6: "If the key's value squared does not exist in the frequencyCount2 object, then there's no point in continuing so we would immediately return false.",
    7: "If there are two elements with the same value in arr1, there needs to be two elements in arr2 with that value squared. So, if the values don't correspond, we would return false.",
    8: "Finally, if we haven't hit any conditions that return false, we reach the end of the code and return true."
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

  const brief = "Using objects or sets to keep track of certain values or the frequencies of those values.";

  const prompt = `Write a function called same, which accepts two arrays.
  The function should return true if every value in the array has its corresponding value squared in the second array. The frequency of values must be the same.`;

  // function sleep(ms) {
  //   return new Promise(resolve => setTimeout(resolve, ms));
  // }


  function sketch(p) {
    let arr1 = "[1, 2, 3, 2]"
    let arr2 = "[4, 1, 4, 9]"
    let x = 82;
    let i = 195;
    let j = 240;
    let g = 215
    let k = 260

    p.setup = function () {
      p.createCanvas(500, 200);
      p.textFont("monospace")
      p.textSize(16)
    };

    p.draw = async function () {
      p.background(255)
      p.fill(0)
      if (currentIdx > 0) {
        p.text(`arr1 = ${arr1}`, 0, 15)
        p.text(`arr2 = ${arr2}`, 200, 15)
      }
      if (currentIdx > 1) {
        p.text('frequencyCount1 = {              }', 0, 55)
        p.text('frequencyCount2 = {              }', 0, 95)
      }
      if (currentIdx > 2) {
        p.noStroke()
        if (currentIdx < 5) {
          p.fill(19, 194, 194);
        } else {
          p.fill(255);
        }
        p.ellipse(x, 25, 7, 7);
      }
      if (currentIdx === 3) {
        if (x >= 82 && x <= 167) {
          if (p.frameCount % 50 === 0) {
            x += 28.9
          }
        }
      }
      if (currentIdx >= 3) {

        p.fill(0)
        if (x >= 82) {
          p.text('1:1,', 190, 56)
        }
        if (x >= 110 && x <= 166) {
          p.text('2:1,', 235, 56)
        }
        if (x >= 138) {
          p.text('3:1', 280, 56)
        }
        if (x >= 167) {
          p.text('2:2,', 235, 56)
        }
      }
      if (currentIdx === 4) {
        if (x < 170) x = 282
        if (x >= 282 && x <= 368) {
          if (p.frameCount % 50 === 0) {
            x += 28.9
          }
        }
      }
      if (currentIdx >= 4) {
        p.fill(0)
        if (x >= 282 && x <= 339) {
          p.text('4:1,', 190, 96)
        }
        if (x >= 310) {
          p.text('1:1,', 235, 96)
        }
        if (x >= 339) {
          p.text('4:2,', 190, 96)
        }
        if (x >= 368) {
          p.text('9:1', 280, 96)
        }
      }
      if (currentIdx >= 5) {
        x += 300
      }
      // if (currentIdx >= 6) {
      // }
      if (currentIdx === 6) {
        p.noStroke()
        p.fill(19, 194, 194);
        p.ellipse(i, 66, 7, 7);
        p.ellipse(j, 106, 7, 7);
        if (p.frameCount % 50 === 0) {
          if (i === 195 && j === 240) {
            i = 240
            j = 195
          } else if (i === 240 && j === 195) {
            i = 285
            j = 285
          }
        }
      }
      if (currentIdx === 7) {
        p.noStroke()
        p.fill(19, 194, 194);
        p.ellipse(g, 66, 7, 7);
        p.ellipse(k, 106, 7, 7);
        if (p.frameCount % 50 === 0) {
          if (g === 215 && k === 260) {
            g = 260
            k = 215
          } else if (g === 260 && k === 215) {
            g = 305
            k = 305
          } 
        }
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
        <div>e.g. same([1, 2, 3, 2], [4, 1, 4, 9]);</div>
        <div>
          <P5Wrapper sketch={sketch} />
        </div>
      </div>
    </Breakdown>
  )
};

export default FrequencyCounter;
