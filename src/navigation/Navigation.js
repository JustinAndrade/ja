import React from 'react';
import logo from '../img/logo.jpg';

import './navigation.css';

const Navigation = () => {
	return (
		<div className="navbar">
			<nav>
				<a href="_">Home</a>
				<a href="_">About</a>
				<a href="_">Portfolio</a>
				<a
					href="https://srv-file4.gofile.io/download/twDzCm/JustinAndradeResume.pdf"
					download="JustinAndradeResume.pdf"
				>
					Resume
				</a>
			</nav>
		</div>
	);
};

export default Navigation;
