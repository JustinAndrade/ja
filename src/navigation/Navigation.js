import React from 'react';
import logo from '../img/logo.jpg';

import './navigation.css';

const Navigation = () => {
	return (
		<div className="navbar">
			<nav>
				<a href="#top">Home</a>
				<a href="#about">About</a>
				<a href="#projects">Portfolio</a>
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
