import React from 'react';
import { Routes, Route } from 'react-router-dom';

import HomePage from '../pages/Todos/Index';
import TodosPage from ''

const RoutesApp = () => {
	return(
			<Routes>
				<Route path='/' element={ <HomePage /> } />
				<Route path='/todos' element={ <TodosPage /> } />

				<Route path='*' element={ <HomePage /> } />
			</Routes>
	)
}

export default RoutesApp;