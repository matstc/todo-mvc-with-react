import React, { Component } from 'react';
import './TodoList.css';
import Todos from './Todos';

class TodoList extends Component {
  constructor(props){
    super(props)
    this.state = {todos: [{label: 'Get bread'}, {label: 'Get juice'}]}
  }

  render() {
    return (
      <form>
        <div className="entry">
          <input placeholder="What are you up to?"></input>
          <button>➕ Add</button>
        </div>
        <Todos todos={this.state.todos}></Todos>
      </form>
    );
  }
}

export default TodoList;
