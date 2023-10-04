import React, {useRef, useState} from 'react';
import PropTypes from 'prop-types';
import TodoItem from "./TodoItem";

const TodoList = ({ todos }) => {
  const [todoList, setTodoList] = useState(todos);
  const nextId = useRef(todos.length + 1);

  const addTodo = (text) => {
    const newTodo = {
      id: nextId.current++,
      text,
      completed: false
    }

    setTodoList([...todoList, newTodo])
  };

  const deleteTodo = (id) => {
    setTodoList(todos.filter((todo) => todo.id !== id));
  };

  const toggleTodo = (id) => {
    setTodoList(
      todoList.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    )
  };

  return(
    <div>
      <h2>Todo List</h2>
      <button onClick={() => addTodo('New Task')}></button>
      <br/>

      {todoList.map((todo) => {
        <TodoItem
          key={todo.id}
          todo={todo}
          onDelete={deleteTodo}
          onToggle={toggleTodo}
        />
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