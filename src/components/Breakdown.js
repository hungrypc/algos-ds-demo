import React, { Fragment, useState } from 'react'
import Code from './Code';
import Explanation from './Explanation';

function Breakdown(props) {
  const [highlight, setHighlight] = useState("");
  const [idx, setIdx] = useState(0);

  function onNext() {
    if (idx >= 0 && idx < props.highlightArr.length - 1) {
      let temp = idx
      temp += 1
      setIdx(temp)
      setHighlight(props.highlightArr[temp])
      props.nextClick(temp)
    }
  };

  function onPrev() {
    if (idx > 0 && idx <= props.highlightArr.length) {
      let temp = idx
      temp -= 1
      setIdx(temp)
      setHighlight(props.highlightArr[temp])
      props.prevClick(temp)
    }
  };

  return (
    <Fragment>
      <h2 className="ui block header">
        {props.title}
      </h2>
      <div>
        {props.brief}
      </div>
      <div className="prompt">
        <i className="far fa-hand-point-right"></i>
        <div>
          {props.prompt}
        </div>
      </div>
      <div className="ui segment">
        <div className="ui two column grid">
          <div className="column demo">
            <Code code={props.code} highlight={highlight} />
          </div>
          <div className="column">
            <h3 className="explanation__header">Explanation:</h3>
            <Explanation explanationText={props.explanationText[idx]} />
            {props.children}
          </div>
        </div>
      </div>
      <div className="step-buttons">
        <button className="ui left attached button" onClick={() => onPrev()}>
          <i className="left arrow icon"></i>
        </button>
        <button className="ui right attached button" onClick={() => onNext()}>
          <i className="right arrow icon"></i>
        </button>
      </div>
    </Fragment>
  )
};

export default Breakdown;
