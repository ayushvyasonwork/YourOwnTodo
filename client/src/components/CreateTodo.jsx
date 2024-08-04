import React, { useState } from 'react';
import axios from 'axios';

const CreateTodo = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [error, setError] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    axios.post("/api/v1/createTodo", { title, description })
      .then((response) => {
        console.log('Created todo:', response.data);
        setTitle('');
        setDescription('');
      })
      .catch((e) => {
        console.log(e);
        setError('Failed to create todo. Please check the endpoint and try again.');
      });
  };

  return (
    <div>
      <p>For creating a todo</p>
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
        <button type="submit">Add Todo</button>
      </form>
      {error && <div>{error}</div>}
    </div>
  );
};

export default CreateTodo;
