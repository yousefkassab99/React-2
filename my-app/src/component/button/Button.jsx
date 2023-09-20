import React from 'react'
import "./Button.css"
// `btn ${type === "add" ? "bg-red" : "bg-green"} `}
// ضروري  المسافة  btn 
function Button({text ,className ,type}) {
  return (
    <button type='button' className={`btn + ${className}`}> 
      {text}
    </button>
  )
}

export default Button
