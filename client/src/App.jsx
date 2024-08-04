import React, { useState } from 'react';
import GetAll from './components/GetAll'; // Ensure the path is correct
import CreateTodo from './components/CreateTodo';

const App = () => {
  const [showTodos, setShowTodos] = useState(false);

  const handleClick = () => {
    setShowTodos(ShowTodos => !ShowTodos);
  };

  return (
    <div>
      <div>
      <h1>Todo Application</h1>
      <button onClick={handleClick}>
        {showTodos ? 'Hide Todos' : 'Show Todos'}
      </button>
      {showTodos && <GetAll />}
      </div>
      <div>
        <CreateTodo></CreateTodo>
      </div>
    </div>
  );
}

export default App;

