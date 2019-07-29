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
				<div className="portHeader">
					<h2>PROJECTS</h2>
					<p>Here's a selection of what I've worked on.</p>
				</div>
				<div className="portContainer">
					<div className="backdrops">
						<div className="projectDescription">
							<h3>MyConjugator</h3>
							<p>
								Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam egestas mauris quis cursus
								euismod. Mauris finibus dui porttitor felis feugiat, vitae posuere risus rhoncus.
								Maecenas sodales nisl et mauris ullamcorper, at pulvinar dolor malesuada. Praesent et
								tellus at neque efficitur bibendum a non dui. Proin at libero non quam feugiat gravida.
								Mauris rhoncus, odio ac tempor venenatis, tortor ante elementum arcu, non venenatis diam
								est rhoncus velit. Nam interdum vel diam a cursus. Curabitur id finibus tortor. Vivamus
								vitae ultricies felis, ut tempor sem. Morbi ut nisl vestibulum, maximus neque ac,
								accumsan tellus. Maecenas vel nisi nibh. Vivamus porttitor sem in velit laoreet
								faucibus. Nulla vitae vestibulum mauris. Sed sit amet consectetur ipsum.
							</p>
							<div id="projectTools">
								<div>
									<FontAwesomeIcon className="github" icon={faGithub} />
									<a target="#" href="http://myconjugator.com/">
										Live
									</a>
								</div>
							</div>
							<div className="divider" />
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
						</div>
					</div>
					<div className="backdrops">
						<div className="projectDescription">
							<h3>Bookr</h3>
							<p>
								Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam egestas mauris quis cursus
								euismod. Mauris finibus dui porttitor felis feugiat, vitae posuere risus rhoncus.
								Maecenas sodales nisl et mauris ullamcorper, at pulvinar dolor malesuada. Praesent et
								tellus at neque efficitur bibendum a non dui. Proin at libero non quam feugiat gravida.
								Mauris rhoncus, odio ac tempor venenatis, tortor ante elementum arcu, non venenatis diam
								est rhoncus velit. Nam interdum vel diam a cursus. Curabitur id finibus tortor. Vivamus
								vitae ultricies felis, ut tempor sem. Morbi ut nisl vestibulum, maximus neque ac,
								accumsan tellus. Maecenas vel nisi nibh. Vivamus porttitor sem in velit laoreet
								faucibus. Nulla vitae vestibulum mauris. Sed sit amet consectetur ipsum.
							</p>
						</div>
						<div className="backdrop">
							<img className="projectImg" src={MyConjugator} />
							<h3>Bookr</h3>
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
