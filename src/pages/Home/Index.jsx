import React from 'react';
import { useAuth } from "../../contexts/AuthContext";

const HomePage = () => {
	const { user, login, logout } = useAuth();

	const handleLogin = () => {
		login({ username: 'rrf', role: 'admin' });
	}

	const handleLogout = () => {
		logout();
	}

	return(
			<>
				{ user ? (
						<div>
							<p>Welcome, {user.username}</p>
							<button onClick={handleLogout}>Logout</button>
						</div>
				) : (
						<div>
							<p>Please Login</p>
							<button onClick={ handleLogin }>Login</button>
						</div>
				)}
			</>
	)
}

export default HomePage;