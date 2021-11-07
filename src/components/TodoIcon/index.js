import React from "react";
import { BsXLg, BsCheckLg } from "react-icons/bs";
import './TodoIcon.css'

const iconTypes = {
  "check" : color => (
    <BsCheckLg
      className="TodoIcon_check" 
      fill={color}
    />
  ),
  "delete" : color => (
    <BsXLg
      className="TodoIcon_delete" 
      fill={color}
    />
  ),
};

const TodoIcon = ({
  type,
  color = 'gray',
  onClick
}) => {
  return (
    <span
      className={`TodoIcon_container TodoIcon_container_${type}`}
      onClick={onClick}
    >
      { iconTypes[type](color) }
    </span>
  )
}

export { TodoIcon };