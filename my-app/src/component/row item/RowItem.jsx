import React from "react";
import Button from "../button/Button";
import { FaTrashCan } from "react-icons/fa6";
import "./RowItem.css";
import { useState } from "react";


function RowItem({ item ,handleRemove}) {
    const [status ,setStatus] =useState(item.completed);


  const handleState =() =>{
    if(item.completed === false) {
      setStatus(true)
    }
    
  }

  return (
    <tr key={item.id}>
      <td className="we">{item.title}</td>
      <td>
        <Button 
        onclick={{handleState}}
           className={status  ? "bg-green" : "bg-red"}
          id="w"
          text={status ? "completed " : "notCompleted"}
        />
      </td>
      <td className="lo">
        <FaTrashCan onClick={handleRemove} />
      </td>
    </tr>
  );
}

export default RowItem;
