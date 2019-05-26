import React, { Component } from "react";
import Todo from "./Todo";
import { connect } from "react-redux";

class TodoList extends Component {
  handleSubmit = event => {
    event.preventDefault();
  };

  render() {
    let todos = this.props.todos.map((task, index) => (
      <Todo task={task} key={index} />
    ));
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="task">Task</label>
          <input type="text" name="task" id="task" />
          <button>Add a Todo</button>
        </form>
        <div>
          <ul>{todos}</ul>
        </div>
      </div>
    );
  }
}

function mapStateToProps(reduxState) {
  return {
    todos: reduxState.todos
  };
}

export default connect(mapStateToProps)(TodoList);
