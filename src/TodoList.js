import React, { Component } from "react";
import Todo from "./Todo";

export default class TodoList extends Component {
  render() {
    const todos = this.state.todos.map((task, index) => (
      <Todo task={task} key={index} />
    ));
    return (
      <div>
        <ul>{todos}</ul>
      </div>
    );
  }
}
