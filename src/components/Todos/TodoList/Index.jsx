import React, {useRef, useState} from 'react';
import PropTypes from 'prop-types';

import TodoItem from "../TodoItem/Index";
import TodoInput from "../TodoInput/Index";

import './style.sass';

const TodoList = ({ todos }) => {
  const [todoList, setTodoList] = useState(todos);
  const [text, setText] = useState('');
  const nextId = useRef(todos.length + 1);
  const [showCompleted, setShowCompleted] = useState(true);

  const addTodo = (e) => {
    e.preventDefault();

    const newTodo = {
      id: nextId.current++,
      text: text,
      completed: false
    }

    setTodoList((todoList) => {
      return [...todoList, newTodo];
    });

    setText('');
  };

  const deleteTodo = (id) => {
    console.log(id);
    setTodoList(todoList.filter((todo) => todo.id !== id));
  };

  const toggleTodo = (id) => {
    console.log(id);
    setTodoList(
      todoList.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    )
  };

  const filteredTodoList = showCompleted ?
      todoList.filter((todo) => todo.completed)
      : todoList.filter((todo) => !todo.completed);

  return(
    <div>
      <h2>Todo List</h2>

      <TodoInput
          onSubmit={addTodo}
          name={text}
          onChange={(event) => setText(event.target.value)}
      />

      <br/>

      <div>
        <button onClick={ () => setShowCompleted(true) }>Show Completed</button>
        <button onClick={ () => setShowCompleted(false) }>Show Uncompleted</button>
      </div>

      <br />
      {filteredTodoList.map((todo) => {
        return (
            <TodoItem
                key={todo.id}
                todo={todo}
                onDelete={deleteTodo}
                onToggle={toggleTodo}
            />
        )
      })}
    </div>
  )
}

TodoList.propTypes = {
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      text: PropTypes.string.isRequired,
      completed: PropTypes.bool.isRequired,
    })
  ).isRequired,
};

export default TodoList;