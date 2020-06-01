import React, { useState } from 'react'
import Breakdown from '../Breakdown'
import Modal from '../Modal'


function InOrder(props) {
  const [currentIdx, setCurrentIdx] = useState(0)
  const highlightArr = [""];
  const explanationText = {
    0: "",
  };
  const code = ``
  const header = "InOrder"
  const modalCode = ""
  const brief = ''

  function nextClick(idx) {
    console.log(`current index: ${idx}`)
    setCurrentIdx(idx)
  };

  function prevClick(idx) {
    console.log(`current index: ${idx}`)
    setCurrentIdx(idx)
  };

  if (currentIdx) {
    console.log('')
  }

  return (
    <Breakdown
      title={
        <div className="header-code">
          <div>{header}</div>
          <Modal header={header} code={modalCode} />
        </div>
      }
      brief={brief}
      prompt={prompt}
      code={code}
      explanationText={explanationText}
      highlightArr={highlightArr}
      nextClick={nextClick}
      prevClick={prevClick}
    >
      <div className="explanation__visual">
        <div>
          {/* <P5Wrapper sketch={sketch} /> */}
        </div>
      </div>
    </Breakdown>
  )
}

export default InOrder
