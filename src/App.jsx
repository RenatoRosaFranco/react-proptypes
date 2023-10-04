import React from 'react';
import TodoList from './components/Todos/TodoList/Index';

function App() {
  const todos = [
    {id: 1, text: 'Task 1', completed: false},
    {id: 2, text: 'Task 2', completed: true}
  ]

  return (
    <div>
      <TodoList todos={todos} />
    </div>
  );
}

export default App;
