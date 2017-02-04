import React from 'react';
import Todo from './Todo';

let Todos = props => {
  return (
    <ul>
      {props.todos.map((todo, index) => {
        return <Todo key={index} todo={todo} onComplete={props.onComplete} onRemove={props.onRemove}></Todo>
      })}
    </ul>
  );
}

export default Todos;
