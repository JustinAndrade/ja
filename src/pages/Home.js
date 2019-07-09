import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact, faHtml5, faCss3Alt, faJsSquare, faNode, faLess } from '@fortawesome/free-brands-svg-icons';
import { faCode } from '@fortawesome/free-solid-svg-icons';

import './pages.css';

import header from '../img/header.jpg';

const Home = () => {
	return (
		<div>
			<a name="top" />
			<div className="pageContainer">
				<div className="codeBorder">
					<FontAwesomeIcon icon={faCode} size="2x" />
				</div>
				<img src={header} />
				<div className="skills">
					<div className="aboutMe">
						<h2>Get To Know Me</h2>
						<p>
							I currently reside in the Boston, Massachusetts area, however I'm willing to relocate. A
							team player who understands the importance of communcation as-well as succeeding together.
							My goal oriented mindset allows me to prioritize tasks and develop a strategic way of
							problem solving.
						</p>

						<p>
							My motivation derives from my pursuit of excellence and never settling. My years of
							experience in customer service, make me someone who understands customer and client
							satisfaction is the foundation of any business. My experience as a Team Leader has given me
							the skills I need to help my team maximize their potential, and work as a cohesive unit. I
							pride myself in my work ethic, and setting an example.
						</p>
						<span>Seasoned Developer</span>
						<p>
							A full stack developer ready to join your team! My strengths include Javascript, React,
							Redux, HTML, CSS, Express, and RESTful APIs, with additional experience in Python, C,
							GraphQL. A lifelong learner with a thirst for knowledge whom's main focus is consistency and
							growth.
						</p>
						<div className="languages">
							<div className="icon">
								<FontAwesomeIcon icon={faHtml5} size="3x" color="#EB6229" />
							</div>
							<div className="icon">
								<FontAwesomeIcon icon={faCss3Alt} size="3x" color="#1C70B5" />
							</div>
							<div className="icon">
								<FontAwesomeIcon icon={faLess} size="3x" color="#1D406C" />
							</div>
							<div className="icon">
								<FontAwesomeIcon icon={faJsSquare} size="3x" color="#F0D91D" />
							</div>
							<div className="icon">
								<FontAwesomeIcon icon={faReact} size="3x" color="#5FD4F4" />
							</div>
							<div className="icon">
								<FontAwesomeIcon icon={faNode} size="3x" color="#87C000" />
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
export default Home;
