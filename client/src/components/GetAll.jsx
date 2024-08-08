import React, { useEffect, useState } from 'react';
import axios from 'axios';
import UpdateTodo from './UpdateTodo';
import { API } from '../utils/api';

const GetAll = () => {
  const [todos, setTodos] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchTodos();
  }, []);

  const fetchTodos = () => {
    axios.get(`${API}/api/v1/getTodo`)
      .then((response) => {
        console.log('this is res data', response.data.data);
        setTodos(response.data.data);
      })
      .catch((e) => {
        console.log(e);
        setError('Failed to fetch todos. Please check the endpoint and try again.');
      });
  };

  const handleDelete = (id) => {
    axios.delete(`${API}/api/v1/deleteTodo/${id}`)
      .then((response) => {
        console.log('Deleted todo:', response.data);
        setTodos(todos.filter(todo => todo.id !== id));
      })
      .catch((e) => {
        console.log(e);
        setError('Failed to delete todo. Please check the endpoint and try again.');
      });
  };

  const handleUpdate = (updatedTodo) => {
    setTodos(todos.map(todo => (todo._id === updatedTodo._id ? updatedTodo : todo)));
  };

  return (
    <div className="flex flex-col items-center min-h-screen bg-gray-100">
      <h1 className="text-3xl font-bold my-8">Todo List</h1>
      {error ? (
        <div className="text-red-500">{error}</div>
      ) : (
        <div className="w-full max-w-3xl space-y-4">
          {todos.map((todo) => (
            <div key={todo._id} className="flex flex-row justify-between items-center p-4 bg-white rounded-lg shadow-md">
              <div>
                <h2 className="text-xl font-semibold">{todo.title}</h2>
                <p className="text-gray-600">{todo.description}</p>
              </div>
              <div className="flex space-x-2">
                <button
                  onClick={() => handleDelete(todo._id)}
                  className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600"
                >
                  Delete
                </button>
                <UpdateTodo
                  todo={todo}
                  onUpdate={handleUpdate}
                  todoid={todo._id}
                />
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default GetAll;
