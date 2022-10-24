import React from "react";
import "./input.css";

function Input(props){
    const{ size = 'small' , placeHolder , ...rest} = props
    return(
        <input className={`input ${size}`} type="text" placeholder={placeHolder} {...rest}></input>
    )
}

export default Input;