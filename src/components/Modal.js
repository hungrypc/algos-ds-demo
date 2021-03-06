import React from 'react'
import { Button, Modal } from 'semantic-ui-react'
import Code from './Code';

function ModalComp(props) {
  return (
    <Modal trigger={<Button size="mini" primary compact>View Code</Button>} >
      <Modal.Header>{props.header}</Modal.Header>
      <Modal.Content image>
        <Modal.Description className="modal_code">
          <Code code={props.code}/> 
          <br/>
          {props.children}
        </Modal.Description>
      </Modal.Content>
    </Modal>
  )
}

export default ModalComp
