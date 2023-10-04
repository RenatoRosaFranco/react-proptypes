import React, { createContext, useContext, useState, useEffect } from "react";
import PropTypes from "prop-types";

import {storageService} from "../services/StorageService";

const AuthContext = createContext(undefined);

export const useAuth = () => {
	return useContext(AuthContext);
};

export const AuthProvider = ({ children }) => {
	const [user, setUser] = useState(null);

	useEffect(() => {
		const savedUser =  storageService.getItem('user');

		if (savedUser) {
			setUser(JSON.parse(savedUser));
		}
	}, []);

	const login = (userData) => {
		setUser(userData);
		storageService.setItem('user', JSON.stringify(userData));
	};

	const logout = () => {
		setUser(null);
		storageService.removeItem('user');
	};

	return(
			<AuthContext.Provider value={{ user, login, logout }}>
				{ children }
			</AuthContext.Provider>
	);
};

AuthProvider.propTypes = {
	children: PropTypes.node.isRequired,
};
