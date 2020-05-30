import React, { useEffect, useState, Fragment } from 'react'
import P5Wrapper from 'react-p5-wrapper';
import Modal from '../Modal';
import BigOTable from '../BigOTable';

function MergeSort(props) {
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
        mergeSort(a)
      }
    };

    function sleep(ms) {
      return new Promise(resolve => setTimeout(resolve, ms));
    }

    let count = 0;

    async function merge(arr1, arr2) {
      let results = [];
      let i = 0;
      let j = 0;
      count++
      states[a.indexOf(arr2[j])] = 0
      states[a.indexOf(arr1[i])] = 0
      states[a.indexOf(arr2[j], a.length - 1 - count)] = -1
      states[a.indexOf(arr1[i], a.length - 1 - count)] = -1

      for (let y = 2; y < a.length - count; y++) {
        states[y] = 2
      }

      while (i < arr1.length && j < arr2.length) {

        await sleep(50)
        if (arr1[i] < arr2[j]) {
          a.splice(a.indexOf(arr1[i]), 1)
          a.push(arr1[i])
          results.push(arr1[i]);
          states[a.indexOf(arr1[i], 2)] = 1
          i++;
        } else {
          a.splice(a.indexOf(arr2[j]), 1)
          a.push(arr2[j])
          results.push(arr2[j]);
          states[a.indexOf(arr2[j], 2)] = 1
          j++;
        }
      }

      while (i < arr1.length) {
        await sleep(50)
        a.splice(a.indexOf(arr1[i]), 1)
        a.push(arr1[i])
        results.push(arr1[i]);
        states[a.indexOf(arr1[i], 2)] = 1
        i++;
      }

      while (j < arr2.length) {
        await sleep(50)
        a.splice(a.indexOf(arr2[j]), 1)
        a.push(arr2[j])
        results.push(arr2[j]);
        states[a.indexOf(arr2[j], 2)] = 1
        j++;
      }
      for (let x = a.length; x >= a.length - count; x--) {
        states[x] = -1
      }
      // console.log(a.length - results.length - (Math.max(i, j)) + 1)
      console.log(count)
      return results
    }

    async function mergeSort(arr) {
      for (let i = 0; i < arr.length; i++) {
        states[i] = 2
      }
      let temp = Array.from(arr)
      if (arr.length <= 1) {
        return arr;
      }

      let mid = Math.floor(temp.length / 2);
      let left = await mergeSort(temp.slice(0, mid))
      let right = await mergeSort(temp.slice(mid))

      return await merge(left, right)
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
  const header = "Merge Sort"
  const code = `function merge(arr1, arr2) {    // merge helper function
  let results = []
  let i = 0              // set two pointers
  let j = 0
  while (i < arr1.length && j < arr2.length) {  // as we go through both arrays
    if (arr1[i] < arr2[j]) {
      results.push(arr1[i])       // compare and push the smaller value
      i++                         // and increment i/j
    } else {
      results.push(arr2[j])
      j++
    }
  }

  while (i < arr1.length) {       // if there're any elements left in arr1
    results.push(arr1[i])
    i++
  }

  while (j < arr2.length) {       // and if there're any elements left in arr2
    results.push(arr2[j])
    j++
  }

  return results
}

function mergeSort(arr) {
  if (arr.length <= 1) {          // base case where we return an array of one element
    return arr
  }

  let mid = Math.floor(arr.length / 2)       // cut the array in half
  let left = mergeSort(arr.slice(0, mid))    // recursive call on left side
  let right = mergeSort(arr.slice(mid))      // recursive call on right side

  return merge(left, right)
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
            worstTime={"O(n log(n))"}
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

export default MergeSort
