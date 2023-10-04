import React, { createContext, useContext, useState } from "react";

const AuthContext = createContext(undefined);

export const useAuth = () => {
	return useContext(AuthContext);
};

export const AuthProvider = ({ children }) => {
	const [user, setUser] = useState(null);

	const handleLogin = (userData) => {
		setUser(userData);
	};

	const handleLogout = () => {
		setUser(null);
	};

	return(
			<AuthContext.Provider value={{ user, handleLogin, handleLogout }}>
				{ children }
			</AuthContext.Provider>
	);
};
