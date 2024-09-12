import React, { useState } from "react";

const TodoForm = ({ addTodo }) => {
  const [todoName, setTodoName] = useState("");
  const [todoDescription, setTodoDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (todoName && todoDescription) {
      addTodo({
        name: todoName,
        description: todoDescription,
      });
      setTodoName("");
      setTodoDescription("");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="todo-form">
      <input
        type="text"
        placeholder="Todo Name"
        value={todoName}
        onChange={(e) => setTodoName(e.target.value)}
      />
      <input
        type="text"
        placeholder="Todo Description"
        value={todoDescription}
        onChange={(e) => setTodoDescription(e.target.value)}
      />
      <button type="submit">Add Todo</button>
    </form>
  );
};

export default TodoForm;