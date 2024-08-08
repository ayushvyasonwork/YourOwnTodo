import React, { useState } from 'react';
import axios from 'axios';
import { API } from '../utils/api';

const UpdateTodo = ({ todo, onUpdate }) => {
  const [title, setTitle] = useState(todo.title);
  const [description, setDescription] = useState(todo.description);
  const [error, setError] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    axios.put(`${API}/api/v1/updateTodo/${todo._id}`, { title, description })
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
    <div className="bg-white p-4 rounded-lg shadow-md">
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="title" className="block text-sm font-medium text-gray-700">
            Title
          </label>
          <input
            type="text"
            id="title"
            placeholder="Enter title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
        <div>
          <label htmlFor="description" className="block text-sm font-medium text-gray-700">
            Description
          </label>
          <textarea
            id="description"
            placeholder="Enter description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
          ></textarea>
        </div>
        <div className="flex justify-end">
          <button
            type="submit"
            className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
          >
            Update Todo
          </button>
        </div>
      </form>
      {error && (
        <div className="mt-4 text-center text-red-500">
          {error}
        </div>
      )}
    </div>
  );
};

export default UpdateTodo;
