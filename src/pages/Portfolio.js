import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

const Portfolio = () => {
	return (
		<div>
			<h2>Portfolio</h2>
			<div className="portContainer">
				<div className="backdrop">
					<h3>Project 1</h3>
					<div className="projectButtons">
						<span>Live</span>
						<span>
							<FontAwesomeIcon icon={faGithub} />
						</span>
					</div>
				</div>
				<div className="backdrop">
					<h3>Project 1</h3>
					<div className="projectButtons">
						<span>Live</span>
						<span>
							<FontAwesomeIcon icon={faGithub} />
						</span>
					</div>
				</div>
				<div className="backdrop">
					<h3>Project 1</h3>
					<div className="projectButtons">
						<span>Live</span>
						<span>
							<FontAwesomeIcon icon={faGithub} />
						</span>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Portfolio;
