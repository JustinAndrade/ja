import React from 'react';
import logo from '../img/logo.jpg';

import './navigation.css';

const Navigation = () => {
	return (
		<div className="navbar">
			<div className="logo">
				<a href="#top" className="mainHeader">
					<img src={logo} alt="website logo" height="100px" />
					Justin
					<span>Andrade</span>
				</a>
			</div>
			<div className="navItems">
				<ul>
					<a className="navItem" href="#top">
						Home
					</a>

					<a className="navItem" href="#portfolio">
						Portfolio
					</a>
					{/* <NavLink className="navItem" to="portContainer">
						Portfolio
					</NavLink> */}
					<a className="navItem" href="#contact">
						Contact
					</a>
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
