import React, { Fragment, useContext } from "react";
import { TodoContext } from "../TodoContext";
import { TodoCounter } from "../TodoCounter/TodoCounter";
import { TodoSearch } from "../TodoSearch/TodoSearch";
import { TodoList } from "../TodoList/TodoList";
import { TodoItem } from "../TodoItem/TodoItem";
import { TodoForm } from "../TodoForm/TodoForm";
import { CreateTodoButton } from "../CreateTodoButton/CreateTodoButton";
import { Modal } from "../Modal/Modal";
import { TodoError } from "../TodoStates/TodoError";
import { TodoLoading } from "../TodoStates/TodoLoading";
import { EmptyTodo } from "../TodoStates/EmptyTodo";

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
        {error && <TodoError error={error}/>}
        {/* {loading && <TodoLoading error={error}/>} */}
        {loading && new Array(3).fill(1).map((i) => <TodoLoading key={i} error={error}/>)}
        {(!loading && !searchedTodos.length) && <EmptyTodo />}
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