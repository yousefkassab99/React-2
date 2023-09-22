import React from "react";
import RowItem from "../row item/RowItem";
import "./TodosCard.css";
import Button from "../button/Button";
import { FaTrashCan } from "react-icons/fa6";

function TodosCard({ data ,setData }) {


  return (
    <div className="card todo-card div-2">
      <h2>Todo List</h2>
      <table>
        <tr col-span={3} className="ti-row">
          <th>List</th>
          <th>Status</th>
          <th>Close</th>
        </tr>

        {data.map((item) => 
        <RowItem item={item} handleRemove ={() =>{
          const filtered = data.filter((el) => el.id !== item.id);
          setData(filtered);
        }
        } />

        )}
      </table>
    </div>
  );
}

export default TodosCard;
