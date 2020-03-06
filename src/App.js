import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Header from './component/Header';
import TodoList from './component/Lists/TodoList';
import CompletedList from './component/Lists/CompletedList';
import DeletedList from './component/Lists/DeletedList';

function App() {

  const [todos, setTodos] = useState([{
    id: 1,
    title: 'Learn Node Js',
    done: true,
    deleted: false
  },
  {
    id: 2,
    title: 'Learn React',
    done: false,
    deleted: false
  }]);

  const addTodo = (title) => {
    const newTodos = [...todos, { id: todos[todos.length - 1].id + 1, title: title, done: false, deleted: false }];
    setTodos(newTodos);
  }

  const deleteTodo = (id) => {
    const todoIndex = todos.findIndex(todo => todo.id === id);
    const newTodos = [...todos];
    newTodos[todoIndex].deleted = true;
    setTodos(newTodos);

  }


  const markAsDone = (id) => {
    const todoIndex = todos.findIndex(todo => todo.id === id);
    const newTodos = [...todos];
    newTodos[todoIndex].done = true;
    setTodos(newTodos);
  }

  const restoreTodo = (id) => {
    const todoIndex = todos.findIndex(todo => todo.id === id);
    const newTodos = [...todos];
    newTodos[todoIndex].deleted = false;
    setTodos(newTodos);
  }



  return (
    <div className="App">
      <Header />

      <section className="todo-list-container">

        <TodoList todos={todos.filter(todo => !todo.done && !todo.deleted)} addTodo={addTodo} deleteTodo={deleteTodo} markAsDone={markAsDone} />

        <CompletedList todos={todos.filter(todo => todo.done && !todo.deleted)} deleteTodo={deleteTodo} />

        <DeletedList todos={todos.filter(todo => todo.deleted)} restoreTodo={restoreTodo} />

      </section>
    </div >
  );
}

export default App;
