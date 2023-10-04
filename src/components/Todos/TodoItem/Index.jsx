import React from 'react';
import PropTypes from "prop-types";

import './style.sass';

const TodoItem = (props) => {
	const {todo, onDelete, onToggle} = props

	return(
			<div className="todo-item">
				<input
					type="checkbox"
					id={`todo-${todo.id}`}
					checked={todo.completed}
					onChange={() => onToggle(todo.id)}
					aria-labelledby={`label-todo-${todo.id}`}
				/>

				<label htmlFor={`todo-${todo.id}`} id={`label-todo-${todo.id}`}>
					{todo.text}
				</label>
				<button onClick={ () => onDelete(todo.id)}>Delete</button>
			</div>
	)
};

TodoItem.propTypes = {
	todo: PropTypes.shape({
		id: PropTypes.number.isRequired,
		text: PropTypes.string.isRequired,
		completed: PropTypes.bool.isRequired,
	}).isRequired,
	onDelete: PropTypes.func.isRequired,
	onToggle: PropTypes.func.isRequired
}

export default TodoItem;