import React from 'react';
import './style.sass';
import {Navigate} from "react-router-dom";

import { useAuth } from '../../contexts/AuthContext';

const LoginPage = () => {
 const { user } = useAuth();

  if (user) {
    return <Navigate to="/" />;
  }

	return(
			<>
				<h2>Login Page</h2>
			</>
	)
}

export default LoginPage;