import React from "react";
import Button from "../button/Button";
import "./Inputcard.css";
import { v4 as uuidv4 } from 'uuid';
function Inputcard({value, onChange , data, setData, setValue}) {


  const handelChange = (e) => {
    setValue(e.target.value)
  }

  const newItem = () => {
    if(value.trim().length > 0){
      const newObj = {
        title:value,
        completed:false,
        id:uuidv4()
      }
      setData([newObj,...data])
      setValue("")
    }
 
   
  }
  return (
    <div className="card div-1">
      <input placeholder="What would you like to do ?" value={value} onChange={handelChange} className="input-card" />
      <Button text="Add" className="bg-red ol" onclick={newItem} />
    </div>
  );
}

export default Inputcard;
