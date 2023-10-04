import React from 'react';
import {Navigate, Outlet } from 'react-router-dom';
import PropTypes from "prop-types";
import { useAuth } from '../contexts/AuthContext';

const PrivateRoute = ({ children }) => {
	const { user } = useAuth();

	return(
    <>
      {user ? (
        <Outlet />
      ) : (
        <Navigate to="/login" replace />
      )}
    </>
	);
};

PrivateRoute.propTypes = {
	children: PropTypes.node.isRequired,
}

export default PrivateRoute;
