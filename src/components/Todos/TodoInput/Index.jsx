import React from 'react';
import PropTypes from "prop-types";

import './style.sass';

const TodoInput = (props) => {
	const { onSubmit, onChange, name } = props;

  return(
			<form onSubmit={onSubmit}>
        <input type="text" name={name} value={name} onChange={onChange} placeholder='Task name...'/>
        <button> Add Todo</button>
      </form>
	)
}

TodoInput.propTypes = {
  onSubmit: PropTypes.func,
  name: PropTypes.string,
  onChange: PropTypes.func
};

export default TodoInput;