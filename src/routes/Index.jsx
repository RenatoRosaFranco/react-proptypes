import React from 'react';
import { Routes, Route } from 'react-router-dom';

import HomePage from '../pages/Home/Index';
import TodosPage from '../pages/Todos/Index';
import LoginPage from "../pages/Login/Index";

const RoutesApp = () => {
	return(
			<Routes>
				<Route path='/' element={ <HomePage /> } />
				<Route path='/todos' element={ <TodosPage /> } />
				<Route path='/login' element={ <LoginPage /> } />

				<Route path='*' element={ <HomePage /> } />
			</Routes>
	)
}

export default RoutesApp;