import React from 'react'
import { CodeBlock, dracula } from 'react-code-blocks'

function Patterns() {

  const code = ` function test(arr) {
    for (let i = 0; i < arr.length; i++) {
      console.log('wow')
    }
  };
  `;

  return (
    <div>
      PATTERNS
      <div className="demo">
        <CodeBlock
        text={code}
        language={'javascript'}
        showLineNumbers={true}
        theme={dracula}
        highlight="2, 3, 4"
        wrapLines
      />
      </div>
    </div>
  )
}

export default Patterns;
