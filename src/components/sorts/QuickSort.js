import React, { useEffect, useState, Fragment } from 'react'
import P5Wrapper from 'react-p5-wrapper';

function QuickSort(props) {

  const [values, setValues] = useState(props.values)

  let states = [];

  function sketch(p) {
    p.setup = function () {
      p.createCanvas(330, 250);

      for (let i = 0; i < values.length; i++) {
        states[i] = -1;
      }
      if (props.run) {
        let what = quickSort(values, 0, values.length - 1)
        console.log(what)
      }
    };

    async function quickSort(arr, left, right) {
      if (left < right) {
        let pivotIndex = await pivot(arr, left, right);
        states[pivotIndex] = -1

        await Promise.all([
          quickSort(arr, left, pivotIndex - 1),
          quickSort(arr, pivotIndex + 1, right)
        ])
      }
      return arr;
    }

    async function pivot(arr, start, end) {
      async function swap(array, i, j) {
        await sleep(100);
        let temp = array[i];
        array[i] = array[j];
        array[j] = temp;
      }

      function sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
      }

      for (let i = start; i < end; i++) {
        states[i] = 1;
      }

      let pivot = arr[start];
      let swapIndex = start;
      states[swapIndex] = 0;
      for (let i = start + 1; i < arr.length; i++) {
        if (pivot > arr[i]) {
          states[swapIndex] = -1
          swapIndex++;
          states[swapIndex] = 0;
          await swap(arr, swapIndex, i);
        }
      }

      await swap(arr, start, swapIndex);
      for (let i = start; i < end; i++) {
        if (i !== swapIndex) {
          states[i] = -1;
        }
      }
      return swapIndex;
    }

    p.draw = function () {
      p.background(0)
      for (let i = 0; i < values.length; i++) {
        p.noStroke();
        if (states[i] === 0) {
          p.fill('#E0777D');
        } else if (states[i] === 1) {
          p.fill('#D6FFB7');
        } else {
          p.fill(255);
        }
        p.rect(i * 10, p.height - values[i], 10, values[i]);
      }
    }
  }

  useEffect(() => {
  }, [])

  return (
    <Fragment>
      <h3 className="ui top attached header">
        Quick Sort
      </h3>
      <div className="ui attached segment">
        <div className="sorts__container">
          <P5Wrapper sketch={sketch} />
        </div>
      </div>
    </Fragment>
  )
}

export default QuickSort
