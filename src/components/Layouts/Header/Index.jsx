import React from 'react';
import {Link} from "react-router-dom";

const Header = () => {
	return(
			<header id='header'>
				<h5>Header</h5>

				<nav>
					<Link to='/'>Home</Link> /
					<Link to='/todos'>Todos</Link> /
					<Link to='/users'>Users</Link> /
					<Link to='/login'>Login</Link>
				</nav>
			</header>
	)
}

export default Header;