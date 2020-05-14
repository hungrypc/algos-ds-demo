import React, { useState, Fragment } from 'react';
import Code from '../Code';

function FrequencyCounter() {
  const [highlight, setHighlight] = useState("");
  const [idx, setIdx] = useState(0);
  const highlightArr = ["", "1", "2", "3"]
  // let idx = 0;

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
    console.log(idx)
    console.log(highlight)
    if (idx >= 0 && idx < highlightArr.length - 1) {
      let temp = idx;
      temp += 1
      setIdx(temp)
      setHighlight(highlightArr[temp])
    }
  }

  function onPrev() {
    console.log(idx)
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
        <h3 className="ui block header">
          Frequency Counter
        </h3>
        <div>
          Using objects or sets to collect values/frequencies of values.
        </div>
        <div className="ui segment">
          <div className="ui two column grid">
            <div className="column demo">
              <Code code={code} highlight={highlight} />
            </div>
            <div className="column">
              <p></p>
              <p></p>
              <p></p>
              <p></p>
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
