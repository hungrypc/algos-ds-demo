import React from 'react'
import { Table } from 'semantic-ui-react'

function BigOTable(props) {
  return (
    <div className="modal-table">
      <Table celled structured>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell rowSpan='1' colSpan='3' textAlign='center'>Time Complexity</Table.HeaderCell>
            <Table.HeaderCell rowSpan='1' colSpan='1' textAlign='center'>Space Complexity</Table.HeaderCell>
          </Table.Row>
          <Table.Row>
            <Table.HeaderCell textAlign='center'>Best</Table.HeaderCell>
            <Table.HeaderCell textAlign='center'>Average</Table.HeaderCell>
            <Table.HeaderCell textAlign='center'>Worst</Table.HeaderCell>
            <Table.HeaderCell textAlign='center'>Worst</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          <Table.Row>
            <Table.Cell textAlign='center'>{props.bestTime}</Table.Cell>
            <Table.Cell textAlign='center'>{props.avgTime}</Table.Cell>
            <Table.Cell textAlign='center'>{props.worstTime}</Table.Cell>
            <Table.Cell textAlign='center'>{props.space}</Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table>
    </div>
  )
}

export default BigOTable
