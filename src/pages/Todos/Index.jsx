import React from 'react';
import TodoList from "../../components/Todos/TodoList/Index";
import './style.sass';

const TodosPage = () => {
	const todos = [
    {id: 1, text: 'Task 1', completed: false},
    {id: 2, text: 'Task 2', completed: true}
  ];

	return(
		<>
			<TodoList todos={todos} />
		</>
	)
}

export default TodosPage;