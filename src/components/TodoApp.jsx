import React from 'react';
import TodoList from './TodoList';

export default class TodoApp extends React.Component {
  getItems() {
    return this.props.todo || [];
  }
  render() {
    return <div>
     <section className="todoapp">
       <TodoList todos={this.props.todos} />
     </section>
   </div>
  }
};
