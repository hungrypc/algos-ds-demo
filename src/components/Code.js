import React from 'react';
import { CodeBlock, dracula } from 'react-code-blocks';

function Code(props) {
  return (
    <CodeBlock
      text={props.code}
      language={'javascript'}
      theme={dracula}
      highlight={props.highlight}
      showLineNumbers
      wrapLines
    />
  )
};

export default Code;
