import React from 'react'
import "./Button.css"
// `btn ${type === "add" ? "bg-red" : "bg-green"} `}
// ضروري  المسافة  btn 
function Button({text ,className ,type,onclick}) {
  return (
    <button type='button' className={`btn + ${className}`} onClick={onclick}> 
      {text}
    </button>
  )
}

export default Button
