import React, { Component } from "react";
import Todo from "./Todo";
import { connect } from "react-redux";

class TodoList extends Component {
  state = {
    task: ""
  };
  handleSubmit = event => {
    event.preventDefault();
    this.props.dispatch({
      type: "ADD_TODO",
      task: this.state.task
    });
    event.target.reset();
  };

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  removeTodo = id => {
    this.props.dispatch({
      type: "REMOVE_TODO",
      id
    });
  };

  render() {
    let todos = this.props.todos.map((val, index) => (
      <Todo
        removeTodo={this.removeTodo.bind(this, val.id)}
        task={val.task}
        key={index}
      />
    ));
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="task">Task</label>
          <input
            type="text"
            name="task"
            id="task"
            onChange={this.handleChange}
          />
          <button>Add a Todo</button>
        </form>
        <ul>{todos}</ul>
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
