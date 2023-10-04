import { useState } from "react";

export function useTodoInterface(initialTodos) {
	const [text, setText] = useState('');
	const [showCompleted, setShowCompleted] = useState(true);
	const [todoList, setTodoList] = useState(initialTodos);

	const addTodo = (e) => {
		e.preventDefault();
		const newTodo = { id: todoList.length + 1, text, completed: false };
		setTodoList((todoList) => [...todoList, newTodo]);
		setText('');
	}

	const deleteTodo = (id) => {
		setTodoList((todoList) => todoList.filter((todo) => todo.id !== id));
	}

	const toggleTodo = (id) => {
		setTodoList((todoList) =>
				todoList.map((todo) =>
						todo.id === id ? {...todo, completed: !todo.completed} : todo
				)
		);
	};

	const filteredTodoList = showCompleted
			? todoList.filter((todo) => todo.completed)
			: todoList.filter((todo) => !todo.completed);

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
	};
}