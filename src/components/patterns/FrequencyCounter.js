import React, { useState, Fragment } from 'react';
import Explanation from '../Explanation';
import Code from '../Code';

function FrequencyCounter() {
  const [highlight, setHighlight] = useState("");
  const [idx, setIdx] = useState(0);
  const highlightArr = ["", "2, 3, 4", "5, 6", "7, 8, 9", "8", "8", "8", "10, 11, 12", "11", "11", "11"]
  const explanationText = {
    0: "",
    1: "First, check if the length of arr1 is equal to the length of arr2. The condition for returning true cannot happen if both elements don't have the same number of elements, so we return false if that is the case.",
    2: "Initialize two object variables in preparation to keep track of each value in both arrays. These will be our frequency counters.",
    3: "Now that we have our frequency counters set up, we can start putting them to use. We'll start by iterating through arr1.",
    4: "As we iterate through every element in arr1, we can keep track of its value by storing it in our frequencyCount1 object.",
    5: "As we iterate through every element in arr1, we can keep track of its value by storing it in our frequencyCount1 object.",
    6: "As we iterate through every element in arr1, we can keep track of its value by storing it in our frequencyCount1 object.",
    7: "We then do the same with arr2, this time keeping track of each value by storing it in our frequencyCount2 object.",
    8: "We then do the same with arr2, this time keeping track of each value by storing it in our frequencyCount2 object.",
    9: "We then do the same with arr2, this time keeping track of each value by storing it in our frequencyCount2 object.",
    10: "We then do the same with arr2, this time keeping track of each value by storing it in our frequencyCount2 object.",
  }

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

  function onNext() {
    if (idx >= 0 && idx < highlightArr.length - 1) {
      let temp = idx;
      temp += 1
      setIdx(temp)
      setHighlight(highlightArr[temp])
    }
  }

  function onPrev() {
    if (idx > 0 && idx <= highlightArr.length) {
      let temp = idx;
      temp -= 1
      setIdx(temp)
      setHighlight(highlightArr[temp])
    }
  }

  return (
    <Fragment>
      <h1 className="ui dividing header page-header">
        Problem Solving Patterns
      </h1>
      <div className="ui container">
        <h2 className="ui block header">
          Frequency Counter
        </h2>
        <div>
          This is when we use objects or sets to keep track of certain values or the frequencies of those values.
        </div>
        <div className="prompt">
          <i className="far fa-hand-point-right"></i>
          <div>
            Write a function called same, which accepts two arrays. <br/> The function should return true if every value in the array has its corresponding value squared in the second array. The frequency of values must be the same.
          </div>
        </div>
        <div className="ui segment">
          <div className="ui two column grid">
            <div className="column demo">
              <Code code={code} highlight={highlight} />
            </div>
            <div className="column">
              <h3 className="explanation__header">Explanation:</h3>
              <Explanation explanationText={explanationText[idx]}/>
            </div>
          </div>
        </div>
        <div className="step-buttons">
          <button className="ui left attached button" onClick={() => onPrev()}>
            <i className="left arrow icon"></i>
          </button>
          <button className="ui right attached button" onClick={() => onNext()}>
            <i className="right arrow icon"></i>
          </button>
        </div>
      </div>
    </Fragment>
  )
}

export default FrequencyCounter
