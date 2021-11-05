import React from "react";
import { TodoCounter } from "../TodoCounter/TodoCounter";
import { TodoSearch } from "../TodoSearch/TodoSearch";
import { TodoList } from "../TodoList/TodoList";
import { TodoItem } from "../TodoItem/TodoItem";
import { CreateTodoButton } from "../CreateTodoButton/CreateTodoButton";

const todos = [
  {text: 'Cortar Cebolla', completed: false, index:1},
  {text: 'Acabar el curso de Intro a React', completed: true, index:2},
  {text: 'Tomar el sigueinte curso de la ruta', completed: false, index:3},
]

function App() {
  return (
    <React.Fragment>
      <TodoCounter />
      <TodoSearch />
      <TodoList>
        {
          todos.map(todo => (
            <TodoItem
              key={todo.index}
              text={todo.text}
              completed={todo.completed}
            />
          ))
        }
      </TodoList>
      <CreateTodoButton />
    </React.Fragment>
  );
}

export default App;
