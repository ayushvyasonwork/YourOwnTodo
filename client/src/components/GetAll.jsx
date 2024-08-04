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
    axios.delete(`/api/v1/deleteTodo/${id}`)
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
    <>
      <div>this is todo page</div>
      {error ? (
        <div>{error}</div>
      ) : (
        todos.map((todo) => (
          <div key={todo.id} className='flex flex-row gap-4'>
            <p>{todo.title}</p>
            <p>{todo.description}</p>
            <button onClick={() => handleDelete(todo._id)}>Delete</button>
            <UpdateTodo todo={todo} onUpdate={handleUpdate} 
            />
            {console.log(todo._id)}
          </div>
        ))
      )}
    </>
  );
}

export default GetAll;
