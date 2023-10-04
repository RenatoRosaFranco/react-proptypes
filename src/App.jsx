import React, {useEffect} from 'react';
import Header from "./components/Layouts/Header/Index";
import Footer from "./components/Layouts/Footer/Index";

import TodoList from './components/Todos/TodoList/Index';

function App() {
  const todos = [
    {id: 1, text: 'Task 1', completed: false},
    {id: 2, text: 'Task 2', completed: true}
  ]

  return (
    <div className="App">
      <Header />
        <TodoList todos={todos} />
      <Footer />
    </div>
  );
}

export default App;
