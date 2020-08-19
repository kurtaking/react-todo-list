import React from 'react';
import TodoList from './TodoList'

function App() {
  return (
    <>
        <TodoList />
        <input type='text' />
        <button>Add Todo</button>
        <button>Clear Complete</button>
        <div>
            <p>0 left to do</p>
        </div>
    </>
  );
}

export default App;
