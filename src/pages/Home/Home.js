import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faJsSquare, faNode, faLinkedinIn, faTwitter } from '@fortawesome/free-brands-svg-icons';

import './home.css';

import homeImg from '../../img/home-background.jpeg';

const Home = () => {
	return (
		<div className="home-overlay">
			<div className="home">
				<div className="home-container">
					<h1>Justin Andrade</h1>
					<p>
						<span>Full Stack</span> Web & Software Developer
					</p>
					<button>Contact Me</button>
				</div>
				<div className="icons">
					<FontAwesomeIcon className="github" icon={faGithub} size="6x" />

					<FontAwesomeIcon className="linkedin" icon={faLinkedinIn} size="6x" />

					<FontAwesomeIcon className="twitter" icon={faTwitter} size="6x" />
				</div>
			</div>
		</div>
	);
};
export default Home;
