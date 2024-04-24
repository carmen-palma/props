import React from 'react';

function Task({ id, text, completed, deleteTask, toggleComplete }) {
  return (
    <div className="task" onClick={() => toggleComplete(id)} style={{ textDecoration: completed ? 'line-through' : 'none' }}>
      <span>{text}</span>
      <button onClick={(e) => { e.stopPropagation(); deleteTask(id); }}>Eliminar</button>
    </div>
  );
}

export default Task;