import React, { Component } from 'react';
import './TodoList.css';
import Todos from './Todos';

class TodoList extends Component {
  constructor(props){
    super(props)
    this.state = {label: '', todos: [{done: false, label: 'Get bread'}, {done: false, label: 'Get juice'}]}
  }

  handleChange = (event) => {
    this.setState({label: event.target.value});
  }

  addTodo = (e) => {
    e.preventDefault()

    this.setState({
      todos: this.state.todos.concat([{label: this.state.label, done: false}]),
      label: '',
      completedTodosVisible: false
    })
  }

  onComplete = (todo, e) => {
    console.log(`Completing: ${todo.label}`)

    todo.done = !todo.done;
    let newTodos = this.state.todos;
    newTodos.splice(newTodos.indexOf(todo), 1, todo)
    this.setState({todos: newTodos})
  }

  onRemove = (todo, e) => {
    e.preventDefault()
    console.log(`Removing: ${todo.label}`)

    let newTodos = this.state.todos;
    newTodos.splice(newTodos.indexOf(todo), 1)
    this.setState({todos: newTodos})
  }

  showCompleted = () => {
    this.setState({completedTodosVisible: !this.state.completedTodosVisible})
  }

  render() {
    return (
      <form onSubmit={this.addTodo}>
        <div className="entry">
          <input type="text" placeholder="What are you up to?" value={this.state.label} onChange={this.handleChange}></input>
          <button>➕ Add</button>
        </div>

        <Todos todos={this.state.todos.filter(todo => !todo.done)} onComplete={this.onComplete} onRemove={this.onRemove}></Todos>

        <hr />

        <a href="#" onClick={this.showCompleted}>Show completed todos</a>

        <div className={this.state.completedTodosVisible ? '' : 'hidden'}>
          {this.state.todos.filter(todo => todo.done).map((todo, index) => {
            return <p key={index}>{todo.label}</p>
          })}
        </div>
      </form>
    );
  }
}

export default TodoList;
