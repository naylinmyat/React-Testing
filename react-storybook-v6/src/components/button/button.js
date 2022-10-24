import React from "react";
import "./button.css";

function Button(props) {
const{ color="black", size="small", children, ...rest } = props
  return (
    <button className={`button ${color} ${size}`} {...rest}>{children}</button>
  )
}

export default Button