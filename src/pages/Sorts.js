import React, { useEffect, useState } from 'react'

import QuickSort from '../components/sorts/QuickSort';

function Sorts() {

  const [run, setRun] = useState(false);

  let values = [];
  let w = 10;

  values = new Array(Math.floor(330 / w));
  for (let i = 0; i < values.length; i++) {
    values[i] = Math.random() * (250 - 1) + 1;
  }
  

  return (
    <div className="sorts page ui container padded">
      <h1 className="ui dividing header page-header">
        Sorting Algorithms
      </h1>
      <div className="sorts__control">
        <button className="ui button" onClick={() => setRun(true)}>
          <i className="play icon"></i>
          Play
        </button>
      </div>
      <div className="ui three column grid">
        <div className="row">
          <div className="column">
            <QuickSort values={values} run={run} />
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
