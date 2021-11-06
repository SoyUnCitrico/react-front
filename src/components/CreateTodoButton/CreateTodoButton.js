import React from "react";
import './CreateTodoButton.css';

const CreateTodoButton = (props) => {
    const onClickedButton = () => {
        props.setOpenModal(prevState => !prevState);
    }
    return(
        <button 
            className="CreateTodoButton"
            onClick={onClickedButton}
        >
            +
        </button>
    )
}

export { CreateTodoButton };