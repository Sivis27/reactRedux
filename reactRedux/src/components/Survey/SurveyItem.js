import React from 'react';
import Header from '../Header/index';
import AddSurvey from '../Survey/AddSurvey';
import SurveyForm from '../Survey/SurveyForm';

export default class TodoList extends React.Component {
  state = {
    todos: []
  };
  componentDidMount() {
    const todos = localStorage.getItem('todos');
    if (todos) {
      const parsedJSON = JSON.parse(todos);
      this.setState({ todos: parsedJSON });
    }
  }
  componentDidUpdate(prevProps, prevState) {
    const { todos } = this.state;
    if (prevState.todos.length !== this.state.todos.length) {
      const json = JSON.stringify(todos);
      localStorage.setItem('todos', json);
    }
  }
  handleAddTodo = event => {
    event.preventDefault();
    const todo = event.target.todo.value.trim();
    if (todo) {
      this.setState(prevState => ({
        todos: [...prevState.todos, todo]
      }));
      event.target.todo.value = '';
    }
  };
  render() {
    return (
      <div className="container">
        <Header />
        <AddSurvey handleAddTodo={this.handleAddTodo} />
        <SurveyForm items={this.state.todos} />
      </div>
    );
  }
}
