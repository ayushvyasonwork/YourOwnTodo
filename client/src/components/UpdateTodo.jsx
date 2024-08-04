import React, { useState } from 'react';
import axios from 'axios';

const UpdateTodo = ({ todo, onUpdate }) => {
  const [title, setTitle] = useState(todo.title);
  const [description, setDescription] = useState(todo.description);
  const [error, setError] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    axios.put(`/api/v1/updateTodo/${todo._id}`, { title, description })
      .then((response) => {
        console.log('Updated todo:', response.data);
        onUpdate(response.data);  // Call the onUpdate function to refresh the todo list
      })
      .catch((e) => {
        console.log(e);
        setError('Failed to update todo. Please check the endpoint and try again.');
      });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input 
          type="text" 
          placeholder="Title" 
          value={title} 
          onChange={(e) => setTitle(e.target.value)} 
        />
        <input 
          type="text" 
          placeholder="Description" 
          value={description} 
          onChange={(e) => setDescription(e.target.value)} 
        />
        <button type="submit">Update Todo</button>
      </form>
      {error && <div>{error}</div>}
    </div>
  );
};

export default UpdateTodo;
