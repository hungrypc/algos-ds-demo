import React from 'react'

import FreqCount from '../components/patterns/FrequencyCounter';
import MultiplePointers from '../components/patterns/MultiplePointers';
import SlidingWindow from '../components/patterns/SlidingWindow';

function Patterns() {

  return (
    <div className="patterns page ui container padded">
      <h1 className="ui dividing header page-header">
        Problem Solving Patterns
      </h1>
      <div className="ui container">
        <FreqCount/>
        <MultiplePointers />
        <SlidingWindow />
      </div>
    </div>
  )
}

export default Patterns;
