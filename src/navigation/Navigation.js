import React from 'react';
import logo from '../img/logo.jpg';

import './navigation.css';

const Navigation = () => {
	return (
		<div className="navbar">
			<nav>
				<a>Home</a>
				<a>About</a>
				<a>Portfolio</a>
				<a>Resume</a>
			</nav>
		</div>
	);
};

export default Navigation;
