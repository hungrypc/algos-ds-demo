import React, { useEffect, useState, Fragment } from 'react'
import P5Wrapper from 'react-p5-wrapper';

function SelectionSort(props) {
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
        selectionSort(a)        
      }
    };

    function sleep(ms) {
      return new Promise(resolve => setTimeout(resolve, ms));
    }

    async function selectionSort(arr) {
      for (let i = 0; i < arr.length; i++) {
        let lowest = i;
        for (let j = i + 1; j <  arr.length; j++) {
          await sleep(50)
          states[j] = 0
          if (arr[j] < arr[lowest]) {
            lowest = j;
          }          
          states[j - 1] = -1
        }
        if (i !== lowest) {
          //swap
          let temp = arr[i];
          arr[i] = arr[lowest];
          arr[lowest] = temp;
        }
        states[i] = 1
        states[i - 1] = -1
        states[arr.length - 1] = -1
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

  useEffect(() => {
    // setValues(props.values)
  }, [props.values])
  return (
    <Fragment>
      <h3 className="ui top attached header">
        Selection Sort
      </h3>
      <div className="ui attached segment">
        <div className="sorts__container">
          <P5Wrapper sketch={sketch} />
        </div>
      </div>
    </Fragment>
  )
}

export default SelectionSort
