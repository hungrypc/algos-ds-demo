import React, { Fragment } from 'react'
import P5Wrapper from 'react-p5-wrapper';

function QuickSort(props) {

  function sketch(p) {
    p.setup = function () {
      p.createCanvas(330, 250);
    };

    p.draw = function () {
      p.background(0)
    };
  };

  return (
    <Fragment>
      <h3 className="ui top attached header">
        Quick Sort
      </h3>
      <div className="ui attached segment">
      <P5Wrapper sketch={sketch} />
      </div>
    </Fragment>
  )
}

export default QuickSort
