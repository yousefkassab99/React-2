import React from 'react'
import RowItem from '../row item/RowItem'
import "./TodosCard.css"
function TodosCard() {
  return (
    <div className='card todo-card div-2'>
      <h2>
        Todo List
      </h2>
      <table>
        <tr col-span={3} className='ti-row'>
            <th>List</th>
            <th>Status</th>
            <th>Close</th>
        </tr>
       <RowItem test="Go To gym" />
       <RowItem test="chech"/>
       <RowItem test="This"/>
      </table>
    </div>
  )
}

export default TodosCard
