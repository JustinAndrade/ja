import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../img/logo.jpg';

import './navigation.css';

const Navigation = () => {
	return (
		<div className="navbar">
			<div className="logo">
				<a href="/" className="mainHeader">
					<img src={logo} alt="website logo" height="100px" />
					Justin
					<span>Andrade</span>
				</a>
			</div>
			<div className="navItems">
				<ul>
					<NavLink className="navItem" to="/">
						Home
					</NavLink>
					<NavLink className="navItem" to="/portfolio">
						Portfolio
					</NavLink>
					<NavLink className="navItem" to="/about">
						Contact
					</NavLink>
					<a
						href="https://srv-file4.gofile.io/download/twDzCm/JustinAndradeResume.pdf"
						download="JustinAndradeResume.pdf"
						className="navItem"
					>
						Resume
					</a>
				</ul>
			</div>
		</div>
	);
};

export default Navigation;
