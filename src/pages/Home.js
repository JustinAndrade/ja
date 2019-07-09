import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact, faHtml5, faCss3Alt, faJsSquare, faNode, faLess } from '@fortawesome/free-brands-svg-icons';
import { faCode } from '@fortawesome/free-solid-svg-icons';

import './pages.css';

const Home = () => {
	return (
		<div className="homeContainer">
			<div>
				<FontAwesomeIcon icon={faCode} size="3x" />
			</div>
			<div className="aboutMe">
				<h2>About Me</h2>
				<p>
					A full stack developer ready to join your team! I'm strong in Javascript, React, Redux, HTML, CSS,
					Express, and RESTful APIs, with additional experience in Python, C, GraphQL, Prisma, Apollo Client,
					and graphql-yoga, but I'm constantly looking for ways to deepen my skills and new things to learn
				</p>
			</div>
			<div className="skills">
				<h2>Seasoned Developer</h2>
				<p>
					A full stack developer ready to join your team! I'm strong in Javascript, React, Redux, HTML, CSS,
					Express, and RESTful APIs, with additional experience in Python, C, GraphQL. A lifelong learner with
					a thirst for knowledge and continuously sharpening my skillset.
				</p>
				<div className="languages">
					<FontAwesomeIcon icon={faHtml5} size="6x" color="#EB6229" />
					<FontAwesomeIcon icon={faCss3Alt} size="6x" color="#1C70B5" />
					<FontAwesomeIcon icon={faLess} size="6x" color="#1D406C" />
					<FontAwesomeIcon icon={faJsSquare} size="6x" color="#F0D91D" />
					<FontAwesomeIcon icon={faReact} size="6x" color="#5FD4F4" />
					<FontAwesomeIcon icon={faNode} size="6x" color="#87C000" />
				</div>
			</div>
		</div>
	);
};
export default Home;
