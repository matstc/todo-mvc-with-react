import React from 'react';

let Todo = props => {
  return (
    <li>
        <div><input type="checkbox" checked={props.todo.done} onClick={props.onComplete.bind(null, props.todo)}></input>{props.todo.label}</div>
        <button onClick={props.onRemove.bind(null, props.todo)} className="removeButton">❌</button>
    </li>
  );
}

export default Todo;
