import React from "react";
import "./Todo.css";

class Todo extends React.Component {
  handleSubmit = (event) => {
    event.preventDefault();
    const value = event.target.todo.value.trim();

    if (!value) return;

    const todo = {
      id: Date.now(),
      value: event.target.todo.value,
    };

    this.props.updateTodos([todo, ...this.props.todos]);
    event.target.reset();
  };

  handleDelete = (value) => {
    const todos = this.props.todos.filter((todo) => todo !== value);
    this.props.updateTodos(todos);
  };

  render() {
    const { todos } = this.props;

    return (
      <div>
        <h1> Todo </h1>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            name="todo"
            placeholder="what's your plan for the day?"
          />
          <button type="submit"> Add Todo </button>
        </form>

        <div className="todos">
          {todos.map((todo) => {
            return (
              <div className="todo" key={todo.id}>
                <div>{todo.value}</div>
                <div>
                  <button onClick={() => this.handleDelete(todo)}>X</button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default Todo;
