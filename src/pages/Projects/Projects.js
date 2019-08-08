import React from 'react';

import './projects.css';

const Projects = (props) => {
	return (
		<div>
			<a id='projects'/>
		<div className="projects">
			<div className="overlay" />
			<div className="page-header">
				<h2>Projects</h2>
			</div>
			<div className="projects-container">
				<div className="project1">
					<h3>MyConjugator</h3>
					<p>
						<i>MyConjugator</i> is a spanish conjugator, that allows users to conjugate words for studying purposes.  This application also includes a leveling system for a fun learning experience.  Users are able to register and authentication requires JSON Web Tokens.  Built with React, Redux, and Javascript.
					</p>
					<div className="project-img" />
				</div>
				<div className="project2">
					<h3>Bookr</h3>
					<p>
						Looking for your next book? Look no further! <i>Bookr</i> is a platform where users are able to search books leave reviews.  Created with React, Redux, Javascript, NodeJS, Jest.
					</p>
					<div className="project-img" />
				</div>
				<div className="project3">
					<h3>Props+</h3>
					<p>
						A spanish conjugator, that allows you to conjugate words for studying purposes. This also
						includes a leveling system. Built with React, Redux, Javascript.
					</p>
					<div className="project-img" />
				</div>
				<div className="project4">
					<h3>Justin's Notes</h3>
					<p>
						Simple and sleek note creating app that allows a user to track tasks as-well as mark tasks completed.  
					</p>
					<div className="project-img" />
				</div>
			</div>
		</div>
		</div>
	);
};

export default Projects;
