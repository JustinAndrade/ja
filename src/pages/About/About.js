import React from 'react';

import './about.css';

const About = (props) => {
	return (
		<div>
			<a id='about' />
		<div className="about">
			<div className="page-header">
				<h2>About</h2>
			</div>
			<div className="about-container">
				<div className="about-info">
					<p>
						Greetings! My name is <span>Justin Andrade</span>.
					</p>
					<p>
						I currently reside in the Boston, Massachusetts area. I’m a team player who understands the
						importance of communcation as-well as succeeding together. My goal oriented mindset allows me to
						prioritize tasks and develop a strategic way of problem solving.
					</p>
					<p>
						My motivation derives from my pursuit of excellence and never settling. My years of experience
						in customer service, make me someone who understands customer and client satisfaction is the
						foundation of any business. My experience as a Team Leader has given me the skills I need to
						help my team maximize their potential, and work as a cohesive unit. I pride myself in my work
						ethic, and setting an example.
					</p>
				</div>
				<div className="about-technologies">
					<h3>Technologies</h3>
				</div>
			</div>
		</div>
		</div>
	);
};

export default About;
