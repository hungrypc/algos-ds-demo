import React, { useEffect, useState, Fragment } from 'react'
import P5Wrapper from 'react-p5-wrapper';
import Modal from '../Modal';
import BigOTable from '../BigOTable';

function InsertionSort(props) {
  // eslint-disable-next-line
  const [values, setValues] = useState(props.values)

  function sketch(p) {
    let a = Array.from(values)
    let states = [];

    p.setup = function () {
      p.createCanvas(330, 250);
      for (let i = 0; i < a.length; i++) {
        states[i] = -1;
      }
      if (props.run) {
        insertionSort(a)
      }
    };

    function sleep(ms) {
      return new Promise(resolve => setTimeout(resolve, ms));
    }

    async function insertionSort(arr) {
      for (let i = 1; i < arr.length; i++) {
        let curr = arr[i];
        states[i] = 2;
        // can someone explain why this works? j should be outside of scope. is it because of var???
        for (var j = i - 1; j >= 0 && arr[j] > curr; j--) {
          await sleep(50)
          arr[j + 1] = arr[j];
          states[j] = 0
          if (j + 1 !== i) {
            states[j + 1] = -1
          }
        }
        arr[j + 1] = curr;
        states[j + 1] = 1
        states[i] = -1
      }
      for (let i = 0; i < arr.length; i++) {
        states[i] = -1
      }
      return arr;
    }

    p.draw = function () {
      p.background(0)
      for (let i = 0; i < a.length; i++) {
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

  // Modal settings
  const header = "Insertion Sort"
  const code = `function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {     // start with the second element in the array
    let currentVal = arr[i]
    for (var j = i - 1; j >= 0 && arr[j] > currentVal; j--) { 
      // compare the second element with the one before it and swap if necessary
      // iterate through the sorted portion to place the element in the correct place
      arr[j + 1] = arr[j]
    }
    arr[j + 1] = currentVal
  }
  return arr
}`;

  useEffect(() => {
    // setValues(props.values)
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
            bestTime={"O(n)"}
            avgTime={"O(n^2)"}
            worstTime={"O(n^2)"}
            space={"O(1)"}
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

export default InsertionSort
