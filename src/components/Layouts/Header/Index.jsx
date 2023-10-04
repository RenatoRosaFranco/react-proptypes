import React from 'react';
import {Link} from "react-router-dom";
import { useAuth } from '../../../contexts/AuthContext';

const Header = () => {
	const { user } = useAuth();

	return(
			<header id='header'>
				<h5>Header</h5>

				<nav>
					<Link to='/'>Home</Link> /
					<Link to='/todos'>Todos</Link> /
					<Link to='/users'>Users</Link> /

					{ !user ? <Link to='/login'>Login</Link> : null }
				</nav>
			</header>
	)
}

export default Header;