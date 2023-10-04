	import React from 'react';
	import { Routes, Route } from 'react-router-dom';

	import HomePage from '../pages/Home/Index';
	import TodosPage from '../pages/Todos/Index';
	import LoginPage from "../pages/Login/Index";
	import UsersPage from "../pages/Users/Index";

	import AuthGuard from "./AuthGuard";

	const RoutesApp = () => {
		return(
				<Routes>
					<Route path='/' element={ <HomePage /> } />
					<Route path='/todos' element={ <AuthGuard> <TodosPage /> </AuthGuard> } />
					<Route path='/users' element={ <AuthGuard> <UsersPage /> </AuthGuard> } />
					<Route path='/login' element={ <LoginPage /> } />

					<Route path='*' element={ <HomePage /> } />
				</Routes>
		);
	};

	export default RoutesApp;