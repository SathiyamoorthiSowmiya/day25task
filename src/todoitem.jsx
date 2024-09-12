
import React from "react";

const TodoItem = ({ todo, deleteTodo, updateTodo }) => {
  const handleStatusChange = (e) => {
    updateTodo(todo.id, { status: e.target.value });
  };

  return (
    <div className="todo-item">
      <h4>Name: {todo.name}</h4>
      <p>Description: {todo.description}</p>
      <div className="todo-status">
        <label>Status: </label>
        <select value={todo.status} onChange={handleStatusChange}>
          <option value="Completed">Completed</option>
          <option value="Not Completed">Not Completed</option>
        </select>
      </div>
      <div className="todo-buttons">
        <button className="edit-btn">Edit</button>
        <button className="delete-btn" onClick={() => deleteTodo(todo.id)}>
          Delete
        </button>
      </div>
    </div>
  );
};

export default TodoItem;
