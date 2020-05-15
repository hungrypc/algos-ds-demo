import React from 'react';

function Explanation(props) {
  return (
    <p className="explanation" key={props.explanationText}>
      {props.explanationText}
    </p>
  )
};

export default Explanation;
