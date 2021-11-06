import React, {useContext, useState} from "react";
import { TodoContext } from "../TodoContext";
import './TodoForm.css';

const TodoForm = () => {
  const [newTodoValue, setNewTodoValue] = useState('');
  const {
    addTodo,
    openModal,
    setOpenModal,
  } = useContext(TodoContext);

  const onChange = (event) => {
    setNewTodoValue(event.target.value);
  }

  const onCancel = () => {
      setOpenModal(!openModal)
  }

  const onSubmit = (event) => {
        event.preventDefault();
        addTodo(newTodoValue);
        setOpenModal(!openModal)
  }

  return (
    <form className="TodoForm" onSubmit={onSubmit}>
      <label className="formLabel">¿Qué hay que hacer?</label>
      <textarea
        className="formText"
        value={newTodoValue}
        onChange={onChange}
        placeholder="Cortar la cebolla" 
      />
      <div className="formButtons">
        <button
          className="buttonCancel"
          type="button"
          onClick={onCancel}
        >
          Cancelar
        </button>
        <button
          className="buttonAccept"
          type="submit"
        >
          Añadir
        </button>
      </div>
    </form>
  )
}

export { TodoForm };