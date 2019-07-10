import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faReact, faJsSquare, faNode } from '@fortawesome/free-brands-svg-icons';

import portImg from '../img/portImg.jpg';
import MyConjugator from '../img/MyConjugator.png';

const Portfolio = () => {
	return (
		<div className="portfolio">
			<a name="portfolio" />
			<img className="portImg" src={portImg} />
			<div className="pageContainer">
				<div className="port" />
				<div className="portContainer">
					<div className="backdrops">
						<h2>My Recent Work</h2>
						<div className="backdrop">
							<img className="projectImg" src={MyConjugator} />
							<h3>MyConjugator</h3>
							<div className="description">
								<p>A spanish conjugator, that allows you to conjugate words.</p>
								<div className="projectButtons">
									<a target="#" href="http://myconjugator.com/">
										Live
									</a>
									<a target="#" href="https://github.com/conjugator/spanish-conjugator">
										<FontAwesomeIcon icon={faGithub} />
									</a>
								</div>
							</div>
							<div id="projectTools">
								<p>
									Built with: <FontAwesomeIcon color="#5FD4F4" size="lg" icon={faReact} />{' '}
									<FontAwesomeIcon icon={faJsSquare} color="#F0D91D" size="lg" />{' '}
									<FontAwesomeIcon icon={faNode} color="#87C000" size="lg" />
								</p>
							</div>
						</div>
						<div className="backdrop">
							<img className="projectImg" src={MyConjugator} />
							<h3>MyConjugator</h3>
							<div className="description">
								<p>A spanish conjugator, that allows you to conjugate words.</p>
								<div className="projectButtons">
									<a target="#" href="http://myconjugator.com/">
										Live
									</a>
									<a target="#" href="https://github.com/conjugator/spanish-conjugator">
										<FontAwesomeIcon icon={faGithub} />
									</a>
								</div>
							</div>
							<div id="projectTools">
								<p>
									Built with: <FontAwesomeIcon color="#5FD4F4" size="lg" icon={faReact} />{' '}
									<FontAwesomeIcon icon={faJsSquare} color="#F0D91D" size="lg" />{' '}
									<FontAwesomeIcon icon={faNode} color="#87C000" size="lg" />
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Portfolio;
