
import React, { useState } from "react";
import TodoList from "./TodoList";
import TodoForm from './todoform.jsx';


const TodoApp = () => {
  const [todos, setTodos] = useState([]);
  const [filter, setFilter] = useState("All");

  const addTodo = (todo) => {
    setTodos([...todos, { ...todo, id: Date.now(), status: "Not Completed" }]);
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const updateTodo = (id, updatedTodo) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, ...updatedTodo } : todo
      )
    );
  };

  const filteredTodos = todos.filter((todo) => {
    if (filter === "Completed") return todo.status === "Completed";
    if (filter === "Not Completed") return todo.status === "Not Completed";
    return true;
  });

  return (
    <div className="todo-app">
      <h2 className="app-header">My todo</h2>
      <TodoForm addTodo={addTodo} />
      <div className="filter-section">
        <h3>My Todos</h3>
        <div>
          <label>Status Filter: </label>
          <select value={filter} onChange={(e) => setFilter(e.target.value)}>
            <option value="All">All</option>
            <option value="Completed">Completed</option>
            <option value="Not Completed">Not Completed</option>
          </select>
        </div>
      </div>
      <TodoList todos={filteredTodos} deleteTodo={deleteTodo} updateTodo={updateTodo} />
    </div>
  );
};

export default TodoApp;
