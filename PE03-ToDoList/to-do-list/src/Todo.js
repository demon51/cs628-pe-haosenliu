import React from 'react';
import './Todo.css';

const Todo = ({ todo, index, removeTodo }) => {
  return (
    <div className="todo">
      {todo}
      <button onClick={() => removeTodo(index)}>Delete</button>
    </div>
  );
};

export default Todo;
