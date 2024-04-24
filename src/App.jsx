import React, { useState } from 'react';
import Task from './Task';
import AddTaskForm from './AddTaskForm';

function App() {
  const [tasks, setTasks] = useState([
    { id: 1, text: 'Hacer la compra', completed: false },
    { id: 2, text: 'Llamar al médico', completed: true },
    { id: 3, text: 'Hacer ejercicio', completed: false }
  ]);

  const addTask = (text) => {
    const newTask = {
      id: tasks.length + 1,
      text,
      completed: false
    };
    setTasks([...tasks, newTask]);
  };

  const deleteTask = (taskId) => {
    setTasks(tasks.filter(task => task.id !== taskId));
  };

  const toggleComplete = (taskId) => {
    setTasks(tasks.map(task => {
      if (task.id === taskId) {
        return { ...task, completed: !task.completed };
      }
      return task;
    }));
  };

  return (
    <div className="App">
      <h1>Lista de Tareas</h1>
      <AddTaskForm addTask={addTask} />
      {tasks.map(task => (
        <Task
          key={task.id}
          id={task.id}
          text={task.text}
          completed={task.completed}
          deleteTask={deleteTask}
          toggleComplete={toggleComplete}
        />
      ))}
    </div>
  );
}

export default App;