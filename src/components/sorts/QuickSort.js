import React, { useEffect, useState, Fragment } from 'react'
import P5Wrapper from 'react-p5-wrapper';
import Modal from '../Modal';
import BigOTable from '../BigOTable';

function QuickSort(props) {
  // eslint-disable-next-line
  const [values, setValues] = useState(props.values)

  function sketch(p) {
    let a = Array.from(values);
    let states = [];
    p.setup = function () {
      p.createCanvas(330, 250);

      for (let i = 0; i < values.length; i++) {
        // a[i] = values[i]
        states[i] = -1;
      }
      if (props.run) {
        quickSort(a, 0, a.length)
      }
    };

    async function quickSort(arr, left, right) {
      if (left < right) {
        let pivotIndex = await pivot(arr, left, right);
        states[pivotIndex] = -1

        // await Promise.all([
        await quickSort(arr, pivotIndex + 1, right)
        await quickSort(arr, left, pivotIndex - 1)
        // ])

      }
      return new Promise(res => res(arr));
    }

    function sleep(ms) {
      return new Promise(resolve => setTimeout(resolve, ms));
    }

    async function swap(array, i, j) {
      await sleep(50);
      let temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
    async function pivot(arr, start, end) {
      for (let i = start; i < end; i++) {
        states[i] = 2;
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

      return new Promise(res => res(swapIndex));
    }

    p.draw = function () {
      p.background(0)
      for (let i = 0; i < a.length; i++) {
        // p.noStroke();
        if (states[i] === 0) {
          p.fill('#E0777D');
        } else if (states[i] === 1) {
          p.fill('#D6FFB7');
        } else if (states[i] === 2) {
          p.fill(50)
        } else {
          p.fill(255);
        }
        p.rect(i * 10, p.height - a[i], 10, a[i]);
      }
    }
  }

  const header = "Quick Sort"
  const code = `function pivot(arr, start = 0, end = arr.length + 1) {      // pivot helper function
  function swap(array, i, j) {          // swap helper function
    let temp = array[i]
    array[i] = array[j]
    array[j] = temp
  }

  let pivot = arr[start]       // set up a pivot point 
  let swapIndex = start        // keep track of the index to swap

  for (let i = start + 1; i < arr.length; i++) {   // as we iterate through the array
    if (pivot > arr[i]) {      // if the pivot point is larger than the current element
      swapIndex++              // move swapIndex up 
      swap(arr, swapIndex, i)  // and swap current element with element at the pivot index
    }
  }
  swap(arr, start, swapIndex)  // finally, swap start with arr[swapIndex]
  return swapIndex
}

function quickSort(arr, left = 0, right = arr.length - 1) {
  if (left < right) {
    let pivotIndex = pivot(arr, left, right)    // helper returns the updated pivot index
                                                // recursively call on subarray
     quickSort(arr, left, pivotIndex - 1)       // to the left of that index,
     quickSort(arr, pivotIndex + 1, right)      // and the subarray to the right of that index
  }
  return arr
}`;

  useEffect(() => {
  }, [props.values])

  return (
    <Fragment>
      <h3 className="ui top attached header specific-sort_header">
        <div>
          {header}
        </div>
        <Modal 
          header={header} 
          code={code}
        >
          <BigOTable
            bestTime={"O(n log(n))"}
            avgTime={"O(n log(n))"}
            worstTime={"O(n^2)"}
            space={"O(n log(n))"}
          />
        </Modal>
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
