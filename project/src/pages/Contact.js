import React from 'react';

const About = () => {
	return (
		<div>
			<h2>Contact Me</h2>
			<section className="contact">
				<form action="https://formspree.io/j.andrade.john@gmail.com" method="POST">
					<div className="">
						<div>
							<input class="topInput" type="text" name="name" placeholder="Name" />
							<input class="topInput" type="text" name="email" placeholder="Email" />
						</div>
						<div className="subjectInput">
							<input class="bottomInput" type="text" name="subject" placeholder="Subject" />
						</div>
						<div className="">
							<textarea class="messageInput" name="message" placeholder="Message" rows="7" />
						</div>
						<div className="">
							<input type="hidden" name="_next" value="index.html" />
							<button type="submit" value="Send Message">
								Send Message
							</button>
						</div>
					</div>
				</form>
			</section>
		</div>
	);
};

export default About;
