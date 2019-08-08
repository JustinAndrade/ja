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
						A spanish conjugator, that allows you to conjugate words for studying purposes. This also
						includes a leveling system. Built with React, Redux, Javascript.
					</p>
					<div className="project-img" />
				</div>
				<div className="project2">
					<h3>Bookr</h3>
					<p>
						A spanish conjugator, that allows you to conjugate words for studying purposes. This also
						includes a leveling system. Built with React, Redux, Javascript.
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
						A spanish conjugator, that allows you to conjugate words for studying purposes. This also
						includes a leveling system. Built with React, Redux, Javascript.
					</p>
					<div className="project-img" />
				</div>
			</div>
		</div>
		</div>
	);
};

export default Projects;
