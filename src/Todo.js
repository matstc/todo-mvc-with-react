import React, { Component } from 'react';

class Todo extends Component {
  render() {
    return (
      <li>
          <div><input type="checkbox" checked={this.props.todo.done} onClick={this.props.onComplete.bind(null, this.props.todo)}></input>{this.props.todo.label}</div>
          <button onClick={this.props.onRemove.bind(null, this.props.todo)} className="removeButton">❌</button>
      </li>
    );
  }
}

export default Todo;
