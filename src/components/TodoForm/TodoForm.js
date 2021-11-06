import React, {useContext, useState} from "react";
import { TodoContext } from "../TodoContext";

const TodoForm = () => {
  const [newTodoValue, setNewTodoValue] = useState('');
  const {
    addTodo,
  } = useContext(TodoContext);

  const onChange = (event) => {
    setNewTodoValue(event.target.value);
  }

  const onCancel = () => {
      console.log("CANCEL");
  }

  const onSubmit = (event) => {
        event.preventDefault();
        addTodo(newTodoValue);
  }

  return (
    <form onSubmit={onSubmit}>
      <label>...</label>
      <textarea
        value={newTodoValue}
        onChange={onChange}
        placeholder="Cortar la cebolla" 
      />
      <div>
        <button
          type="button"
          onClick={onCancel}
        >
          Cancelar
        </button>
        <button
          type="submit"
        >
          Añadir
        </button>
      </div>
    </form>
  )
}

export { TodoForm };