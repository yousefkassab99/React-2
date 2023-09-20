import React from "react";
import Button from "../button/Button";
import "./Inputcard.css";
function Inputcard(value, onchange) {
  return (
    <div className="card div-1">
      <input placeholder="What would you like to do ?"  className="input-card" />
      <Button text="Add" className="bg-red ol" />
    </div>
  );
}

export default Inputcard;
