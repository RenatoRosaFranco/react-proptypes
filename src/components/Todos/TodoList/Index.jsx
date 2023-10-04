import React from 'react';
import PropTypes from 'prop-types';

import TodoItem from "../TodoItem/Index";
import TodoInput from "../TodoInput/Index";

import './style.sass';

import { useTodoInterface } from '../../../interfaces/TodoInterface';

const TodoList = ({ todos }) => {
  const {
      text,
      setText,
      addTodo,
      deleteTodo,
      toggleTodo,
      setShowCompleted,
      filteredTodoList
  } = useTodoInterface(todos);

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