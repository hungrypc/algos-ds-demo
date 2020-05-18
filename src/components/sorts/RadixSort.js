import React, { useEffect, useState, Fragment } from 'react'
import P5Wrapper from 'react-p5-wrapper';

function RadixSort(props) {
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
        radixSort(a)
      }
    };

    function sleep(ms) {
      return new Promise(resolve => setTimeout(resolve, ms));
    }

    function digitCount(num) {
      if (num === 0) return 1;
      return Math.floor(Math.log10(Math.abs(num))) + 1;
    }

    function mostDigits(nums) {
      let maxDigits = 0;
      for (const n of nums) {
        maxDigits = Math.max(maxDigits, digitCount(n));
      }
      return maxDigits;
    }

    function getDigit(num, i) {
      return Math.floor(Math.abs(num) / Math.pow(10, i)) % 10;
    }

    async function radixSort(nums) {
      let maxDigitCount = mostDigits(nums);

      for (let k = 0; k < maxDigitCount; k++) {
        let digitBuckets = Array.from({ length: 10 }, () => []); // creates an array of 10 empty arrays
        for (let i = 0; i < nums.length; i++) {
          let digit = getDigit(nums[i], k);
          digitBuckets[digit].push(nums[i]);
        }
        nums = [].concat(...digitBuckets);
      }
      return nums;
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
        Radix Sort
      </h3>
      <div className="ui attached segment">
        <div className="sorts__container">
          <P5Wrapper sketch={sketch} />
        </div>
      </div>
    </Fragment>
  )
}

export default RadixSort
