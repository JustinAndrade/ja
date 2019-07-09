import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faReact, faJsSquare, faNode } from '@fortawesome/free-brands-svg-icons';

import portImg from '../img/portImg.jpg';

const Portfolio = () => {
	return (
		<div className="portfolio">
			<a name="portfolio" />
			<img src={portImg} />
			<div className="pageContainer">
				<div className="port" />
				<div className="portContainer">
					<div className="backdrops">
						<h2>My Recent Work</h2>
						<div className="backdrop">
							<h3>MyConjugator</h3>
							<p>A spanish conjugator, that allows you to conjugate words.</p>
							<div className="projectButtons">
								<span>Live</span>
								<span>
									<FontAwesomeIcon icon={faGithub} />
								</span>
							</div>
							<div id="projectTools">
								<p>
									Built with: <FontAwesomeIcon color="#5FD4F4" size="lg" icon={faReact} />{' '}
									<FontAwesomeIcon icon={faJsSquare} color="#F0D91D" size="lg" />
									<FontAwesomeIcon icon={faNode} color="#87C000" size="lg" />
								</p>
							</div>
						</div>
						<div className="backdrop">
							<h3>MyConjugator</h3>
							<p>A spanish conjugator, that allows you to conjugate words.</p>
							<div className="projectButtons">
								<span>Live</span>
								<span>
									<FontAwesomeIcon icon={faGithub} />
								</span>
							</div>
							<div id="projectTools">
								<p>
									Built with: <FontAwesomeIcon color="#5FD4F4" size="lg" icon={faReact} />{' '}
									<FontAwesomeIcon icon={faJsSquare} size="lg" color="#F0D91D" />{' '}
									<FontAwesomeIcon icon={faNode} size="lg" color="#87C000" />
								</p>
							</div>
						</div>
						<div className="backdrop">
							<h3>MyConjugator</h3>
							<p>A spanish conjugator, that allows you to conjugate words.</p>
							<div className="projectButtons">
								<span>Live</span>
								<span>
									<FontAwesomeIcon icon={faGithub} />
								</span>
							</div>
							<div id="projectTools">
								<p>
									Built with: <FontAwesomeIcon color="#5FD4F4" size="lg" icon={faReact} />{' '}
									<FontAwesomeIcon icon={faJsSquare} size="lg" color="#F0D91D" />{' '}
									<FontAwesomeIcon icon={faNode} size="lg" color="#87C000" />
								</p>
							</div>
						</div>
						<div className="backdrop">
							<h3>MyConjugator</h3>
							<p>A spanish conjugator, that allows you to conjugate words.</p>
							<div className="projectButtons">
								<span>Live</span>
								<span>
									<FontAwesomeIcon icon={faGithub} />
								</span>
							</div>
							<div id="projectTools">
								<p>
									Built with: <FontAwesomeIcon color="#5FD4F4" size="lg" icon={faReact} />{' '}
									<FontAwesomeIcon icon={faJsSquare} size="lg" color="#F0D91D" />{' '}
									<FontAwesomeIcon icon={faNode} size="lg" color="#87C000" />
								</p>
							</div>
						</div>
						<div className="backdrop">
							<h3>MyConjugator</h3>
							<p>A spanish conjugator, that allows you to conjugate words.</p>
							<div className="projectButtons">
								<span>Live</span>
								<span>
									<FontAwesomeIcon icon={faGithub} />
								</span>
							</div>
							<div id="projectTools">
								<p>
									Built with: <FontAwesomeIcon color="#5FD4F4" size="lg" icon={faReact} />{' '}
									<FontAwesomeIcon icon={faJsSquare} size="lg" color="#F0D91D" />{' '}
									<FontAwesomeIcon icon={faNode} size="lg" color="#87C000" />
								</p>
							</div>
						</div>
						<div className="backdrop">
							<h3>MyConjugator</h3>
							<p>A spanish conjugator, that allows you to conjugate words.</p>
							<div className="projectButtons">
								<span>Live</span>
								<span>
									<FontAwesomeIcon icon={faGithub} />
								</span>
							</div>
							<div id="projectTools">
								<p>
									Built with: <FontAwesomeIcon color="#5FD4F4" size="lg" icon={faReact} />{' '}
									<FontAwesomeIcon icon={faJsSquare} size="lg" color="#F0D91D" />{' '}
									<FontAwesomeIcon icon={faNode} size="lg" color="#87C000" />
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
