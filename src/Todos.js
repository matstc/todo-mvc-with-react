import React, { Component } from 'react';
import Todo from './Todo';

class Todos extends Component {
  render() {
    return (
      <ul>
        {this.props.todos.map((todo, index) => {
          return <Todo key={index} todo={todo} onComplete={this.props.onComplete} onRemove={this.props.onRemove}></Todo>
        })}
      </ul>
    );
  }
}

export default Todos;
