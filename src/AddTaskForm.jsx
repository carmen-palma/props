import React, { useState } from 'react';

function AddTaskForm({ addTask }) {
  const [inputValue, setInputValue] = useState('');

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!inputValue.trim()) return;
    addTask(inputValue);
    setInputValue('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Agregar nueva tarea"
        value={inputValue}
        onChange={handleChange}
      />
      <button type="submit">Agregar</button>
    </form>
  );
}

export default AddTaskForm;