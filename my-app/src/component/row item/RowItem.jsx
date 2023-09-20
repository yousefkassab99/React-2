import React from "react";
import Button from "../button/Button";
import { FaTrashCan } from "react-icons/fa6";
import "./RowItem.css"
function RowItem({test}) {
  return (
    <tr className="row">
      <td className="io">{test}</td>
      <td><Button text={"ddd"} className="st" /></td>
      <td><FaTrashCan /></td>
    </tr>
  );
}

export default RowItem;
