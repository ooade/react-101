import React from 'react';
import Todo from './Todo'
class App extends React.Component {
  state = { todos: [] }

  updateTodos = (todos) => {
    this.setState({todos})
  };

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((res) => res.json())
      .then((res) => {
        const arrayOfPosts = res.map(({ id, title }) => {
          return { id, value: title };
        }).slice(0, 11);

        const todos = [...this.state.todos, ...arrayOfPosts];
        this.updateTodos(todos)
      })
  }

  render() {
    return <Todo updateTodos={this.updateTodos} todos={this.state.todos} />
  }
}

export default App;