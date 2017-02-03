import React, { Component } from 'react';

class Todos extends Component {
  render() {
    return (
      <ul>
        {this.props.todos.map(todo => {
          return <li>{todo.label}<button className="removeButton">❌</button></li>
        })}
      </ul>
    );
  }
}

export default Todos;
