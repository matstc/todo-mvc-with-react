import React, { Component } from 'react';
import './App.css';
import TodoList from './TodoList';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>TODO MVC With React</h2>
        </div>
        <TodoList></TodoList>
      </div>
    );
  }
}

export default App;
