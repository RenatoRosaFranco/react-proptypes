import { useState } from 'react'
import PropTypes from 'prop-types'

import { toast } from 'react-toastify'

export function useTodoInterface (initialTodos) {
  const [text, setText] = useState('')
  const [showCompleted, setShowCompleted] = useState(true)
  const [todoList, setTodoList] = useState(initialTodos)

  const addTodo = (e) => {
    e.preventDefault()
    const newTodo = { id: todoList.length + 1, text, completed: false }
    setTodoList((todoList) => [...todoList, newTodo])
    toast.success('Task successfully added.')
    setText('')
  }

  const deleteTodo = (id) => {
    setTodoList((todoList) => todoList.filter((todo) => todo.id !== id))
    toast.success('Task successfully removed.')
  }

  const toggleTodo = (id) => {
    setTodoList((todoList) =>
      todoList.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    )
    toast.success('Task successfully updated.')
  }

  const filteredTodoList = showCompleted
    ? todoList.filter((todo) => todo.completed)
    : todoList.filter((todo) => !todo.completed)

  return {
    text,
    setText,
    showCompleted,
    setShowCompleted,
    filteredTodoList,
    todoList,
    addTodo,
    deleteTodo,
    toggleTodo
  }
}

useTodoInterface.propTypes = {
  text: PropTypes.string,
  setText: PropTypes.func.isRequired,
  showCompleted: PropTypes.bool.isRequired,
  setShowCompleted: PropTypes.func.isRequired,
  filteredTodoList: PropTypes.array.isRequired,
  todoList: PropTypes.array.isRequired,
  addTodo: PropTypes.func.isRequired,
  deleteTodo: PropTypes.func.isRequired,
  toggleTodo: PropTypes.func.isRequired
}
