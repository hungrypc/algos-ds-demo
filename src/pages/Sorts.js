import React, { useState, useEffect } from 'react'

import QuickSort from '../components/sorts/QuickSort';
import BubbleSort from '../components/sorts/BubbleSort';
import SelectionSort from '../components/sorts/SelectionSort';
import InsertionSort from '../components/sorts/InsertionSort';
import MergeSort from '../components/sorts/MergeSort';

function Sorts() {

  const [run, setRun] = useState(false);
  const [test, setTest] = useState(true)

  let values = [];
  let w = 10;
  // values = new Array(Math.floor(330 / w));
  // for (let i = 0; i < values.length; i++) {
  //   values[i] = Math.random() * (250 - 1) + 1;
  // }

  function createArray() {
    values = new Array(Math.floor(330 / w));
    for (let i = 0; i < values.length; i++) {
      values[i] = Math.random() * (250 - 1) + 1;
    }
  }
  createArray()


  useEffect(() => {

  }, [])


  return (
    <div className="sorts page ui container padded">
      <h1 className="ui dividing header page-header">
        Sorting Algorithms
      </h1>
      <div className="sorts__control">
        <button className="ui button" onClick={() => setRun(true)}>
          <i className="play icon"></i>
          Run Sort
        </button>
        <button className="ui button" onClick={() => {
          setRun(false)
          setTest(!test)
        }}>
          <i className="shuffle icon"></i>
          Shuffle
        </button>
      </div>
      <div className="ui three column grid">
        <div className="row">
          <div className="column">
            <BubbleSort values={values} run={run} />
          </div>
          <div className="column">
            <SelectionSort values={values} run={run} />
          </div>
          <div className="column">
            <InsertionSort values={values} run={run} />
          </div>
        </div>
        <div className="row">
          <div className="column">
            <MergeSort values={values} run={run} />
          </div>
          <div className="column">
            <QuickSort values={values} run={run} />
          </div>
          <div className="column">row 2 col 3</div>
        </div>
      </div>
    </div>
  )
}

export default Sorts;
