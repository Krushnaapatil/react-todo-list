import React from 'react';

function TodoItem({ todo, deleteTodo, toggleComplete }) {
  return (
    <li className="todo-item">
      <span
        onClick={() => toggleComplete(todo.id)}
        className={todo.completed ? 'completed' : ''}
      >
        {todo.text}
      </span>
      <button onClick={() => deleteTodo(todo.id)}>❌</button>
    </li>
  );
}

export default TodoItem;