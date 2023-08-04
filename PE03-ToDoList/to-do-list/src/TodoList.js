import React, { useState } from 'react';
import Todo from './Todo';
import './TodoList.css';

const TodoList = () => {
  const [todos, setTodos] = useState([]);
  const [task, setTask] = useState('');

  const addTodo = () => {
    if (task.trim()) {
      setTodos([...todos, task.trim()]);
      setTask('');
    }
  };

  const removeTodo = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  return (
    <div className="todo-list">
      <div className="add-task">
        <input value={task} onChange={e => setTask(e.target.value)} 
        placeholder="Enter task description"/>
        <button onClick={addTodo}>Add Task</button>
      </div>
      {todos.map((todo, index) => (
        <Todo key={index} index={index} todo={todo} removeTodo={removeTodo} />
      ))}
    </div>
  );
};

export default TodoList;
