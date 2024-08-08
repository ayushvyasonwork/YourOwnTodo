import React, { useState, useEffect } from 'react';
import GetAll from './components/GetAll'; // Ensure the path is correct
import CreateTodo from './components/CreateTodo';

const App = () => {
  const [showTodos, setShowTodos] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const handleClick = () => {
    setShowTodos(showTodos => !showTodos);
  };

  const handleScroll = () => {
    if (window.scrollY > 0) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      <header className="flex justify-center h-30">
        <h1 className="font-bold text-amber-600 text-3xl">Todo Application</h1>
      </header>
      <main className="flex-grow">
        <div>
          <CreateTodo />
        </div>
        {!showTodos && (
          <div className="flex justify-center my-4">
            <button
              onClick={handleClick}
              className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
            >
              Show Todos
            </button>
          </div>
        )}
        {showTodos && (
          <>
            <div className={`fixed top-0 left-0 right-0 bg-white shadow-md z-10 ${isScrolled ? '' : 'hidden'}`}>
              <div className="flex justify-center py-4">
                <button
                  onClick={handleClick}
                  className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
                >
                  Hide Todos
                </button>
              </div>
            </div>
            <GetAll />
          </>
        )}
      </main>
      {showTodos && !isScrolled && (
        <footer className="flex justify-center mt-4">
          <button
            onClick={handleClick}
            className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
          >
            Hide Todos
          </button>
        </footer>
      )}
    </div>
  );
};

export default App;
