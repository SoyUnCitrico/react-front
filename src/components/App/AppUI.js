import React, { Fragment, useContext } from "react";
import { TodoContext } from "../TodoContext";
import { TodoCounter } from "../TodoCounter/TodoCounter";
import { TodoSearch } from "../TodoSearch/TodoSearch";
import { TodoList } from "../TodoList/TodoList";
import { TodoItem } from "../TodoItem/TodoItem";
import { TodoForm } from "../TodoForm/TodoForm";
import { CreateTodoButton } from "../CreateTodoButton/CreateTodoButton";
import { Modal } from "../Modal/Modal";

const AppUI = () => {
  const {
    error,
    loading,
    searchedTodos,
    completeTodo,
    deleteTodo,
    openModal,
    setOpenModal,
  } = useContext(TodoContext);
  return(
    <Fragment>
      <TodoCounter />
      <TodoSearch />
      <TodoList>
        {error && <p>Deseperate hay un error...</p>}
        {loading && <p> Estamos cargando... </p>}
        {(!loading && !searchedTodos.length) && <p>¡Crea tu primer TODO!</p>}
        { searchedTodos.map(todo => (
          <TodoItem
            key={todo.text}
            text={todo.text}
            completed={todo.completed}
            onComplete={()=> completeTodo(todo.text)}
            onDelete={()=> deleteTodo(todo.text)}
          />
        ))
        }    
      </TodoList>  
      {!!openModal && (
        <Modal>
          <TodoForm />
        </Modal>
      )}
      
      <CreateTodoButton 
        setOpenModal={setOpenModal}
      />
    </Fragment>
  )
}

export { AppUI };