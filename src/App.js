import React, { Component } from "react";
import Todo from "./components/Todo";
import TodoList from "./components/TodoList";
import Provider from "./state/TodoContext";

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <Provider>
          <Todo />
          <TodoList />
        </Provider>
      </div>
    );
  }
}