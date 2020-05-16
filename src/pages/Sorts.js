import React from 'react'

import QuickSort from '../components/sorts/QuickSort';

function Sorts() {
  let values = [];
  let states = [];
  let w = 10;

  values = new Array(Math.floor(330 / w));
  for (let i = 0; i < values.length; i++) {
    values[i] = Math.random(250);
    states[i] = -1;
  }
  console.log(values)

  return (
    <div className="sorts page ui container padded">
      <h1 className="ui dividing header page-header">
        Sorting Algorithms
      </h1>
      <div className="sorts__control">

      </div>
      <div className="ui three column grid">
        <div className="row">
          <div className="column">
            <QuickSort />
          </div>
          <div className="column"> row 1 col 2</div>
          <div className="column"> row 1 col 3</div>
        </div>
        <div className="row">
          <div className="column">row 2 col 1</div>
          <div className="column">row 2 col 2</div>
          <div className="column">row 2 col 3</div>
        </div>
      </div>
    </div>
  )
}

export default Sorts;
