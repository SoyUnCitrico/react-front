import React from "react";
import './CreateTodoButton.css';

const CreateTodoButton = (props) => {
    const onClickedButton = (msg) => {
        alert(msg);
    }
    return(
        <button 
            className="CreateTodoButton"
            onClick={()=>{
                onClickedButton("CLICKED")
            }}
        >
            +
        </button>
    )
}

export { CreateTodoButton };