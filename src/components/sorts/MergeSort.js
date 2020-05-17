import React, { useEffect, useState, Fragment } from 'react'
import P5Wrapper from 'react-p5-wrapper';

function MergeSort(props) {
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

    async function merge(arr1, arr2) {
      for (let i = 0; i < arr1.length + arr2.length; i++) {
        await sleep(500)
        a.shift()
      }

      let results = [];
      let i = 0;
      let j = 0;
      while (i < arr1.length && j < arr2.length) {
        if (arr1[i] < arr2[j]) {  
          // await sleep(100)        
          a.push(arr1[i])
          results.push(arr1[i]);
          i++;
        } else {       
          // await sleep(100)   
          a.push(arr2[j])
          results.push(arr2[j]);
          j++;
        }
      }

      while (i < arr1.length) {        
        a.push(arr1[i])
        results.push(arr1[i]);
        i++;
      }

      while (j < arr2.length) {        
        a.push(arr2[j])
        results.push(arr2[j]);
        j++;
      }

      console.log(results)
      return results
    }

    function mergeSort(arr) {
      let temp = Array.from(arr)
      if (arr.length <= 1) {
        return arr;
      }
      let mid = Math.floor(temp.length / 2);
      let left = mergeSort(temp.slice(0, mid));
      let right = mergeSort(temp.slice(mid));

      return merge(left, right);
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
  }, [props.values])
  return (
    <Fragment>
      <h3 className="ui top attached header">
        Merge Sort
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
