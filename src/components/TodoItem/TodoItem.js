import React from "react";
import './TodoItem.css';

const TodoItem = (props) => {
    const onComplete = () => {
        alert(`Ya completaste el TODO: "${props.text}"`);
    }

    const onDelete = () => {
        alert(`Borraste el TODO: "${props.text}"`);
    }
    return(
        <li className="TodoItem">
            <span 
                className={`Icon Icon-check ${props.completed && 'Icon-check--active'}`}
                onClick={onComplete}
            >
                &#10003;
            </span>
            <p className={`TodoItem-p ${props.completed && 'TodoItem-p--completed'}`}>
                {props.text}
            </p>
            <span 
                className="Icon Icon-delete"
                onClick={onDelete}
            >
                &#120;
            </span>
        </li>
    )

}

export { TodoItem };