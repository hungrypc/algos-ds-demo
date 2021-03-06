import React, { useEffect, useState, Fragment } from 'react'
import P5Wrapper from 'react-p5-wrapper';
import Modal from '../Modal';
import BigOTable from '../BigOTable';

function BubbleSort(props) {
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
        bubbleSort(a)
      }

    };

    function sleep(ms) {
      return new Promise(resolve => setTimeout(resolve, ms));
    }

    async function bubbleSort(arr) {
      let noSwaps;
      for (let i = arr.length; i > 0; i--) {
        noSwaps = true;
        for (let j = 0; j < i - 1; j++) {
          states[j] = 0
          states[j + 1] = 0
          if (arr[j] > arr[j + 1]) {
            await sleep(50)
            // states[j + 1] = 0
            let temp = arr[j];
            arr[j] = arr[j + 1];
            arr[j + 1] = temp;
            // states[j + 1] = -1
            noSwaps = false;
          }
          states[j] = -1
          states[j + 1] = 1
        }
        states[i] = -1
        if (noSwaps){
          // find better solution
          for (let i = arr.length; i >= 0; i--) {
            states[i] = -1
          }
          break;
        }       
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
  const header = "Bubble Sort"
  const code = `function bubbleSort(arr) {
  let noSwaps;              // this will tell us whether a swap has occured or not
  for (let i = arr.length; i > 0; i--) {    // loop for as many elements are in arr
    noSwaps = true  
    for (let j = 0; j < i - 1; j++) {       // loop for as many unsorted elements in arr
      if (arr[j] > arr[j + 1]) {    // if the current element is larger than the next, swap
        const temp = arr[j]         
        arr[j] = arr[j + 1]         // in-place swap
        arr[j + 1] = temp
        noSwaps = false             // swap occured, let noSwaps know
      }
    }
    if (noSwaps) break;             // if no swaps occured, break out of the loop
  }
  return arr
}`

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
            space={"O(n)"}
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

export default BubbleSort
