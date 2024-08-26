import './App.css';
import { TodoCounter } from './TodoCounter';
import { TodoSearch } from './TodoSearch';
import { TodoList } from './TodoList';
import { CreateTodoButton } from './CreateTodoButton';
import { TodoItem } from './TodoItem';
import React from 'react';

const defualTodos = [
  {text: 'Tomar Curso React', completed: true},
  {text: 'Apender de Kubernetes', completed:false},
  {text: 'Aprender GraphQl', completed:false}
]

function App() {
  return (
    <React.Fragment>
      <TodoCounter completed={10} total={11}/>
      <TodoSearch/>

      <TodoList>
        {
          defualTodos.map(todo => (
            <TodoItem key={todo.text} {...todo} />
          ))
        }
      </TodoList>

      <CreateTodoButton/>
    </React.Fragment>
  );
}

export default App;
