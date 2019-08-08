import React from 'react';
import './contact.css'

import contactImg from '../../img/contactImg.jpeg';

const Contact = () => {
	return (
		<div>
			<a id='contact' />
		<div className='contact-me'>
			<a name="contact" />
			<div className="page-header">
				<h2>Contact</h2>
			</div>
			<div className="pageContainer">
				<img className='contactImg' src={contactImg} />
				<div className="port" />
				<div className="skills">
					<section className="contact">
						<h3>Let's Connect</h3>
						<form action="https://formspree.io/j.andrade.john@gmail.com" method="POST">
							<div className="">
								<div>
									<input class="topInput" type="text" name="name" placeholder="Name" />
									<input class="topInput" type="text" name="email" placeholder="Email" />
								</div>
								<div className="subjectInput">
									<input class="bottomInput" type="text" name="subject" placeholder="Subject" />
								</div>
								<div>
									<textarea class="messageInput" name="message" placeholder="Message" rows="7" />
								</div>
								<div>
									<input type="hidden" name="_next" value="index.html" />
									<button type="submit" value="Send Message">
										Send Message
									</button>
								</div>
							</div>
						</form>
					</section>
					</div>
				</div>
		</div>
		</div>
	);
};

export default Contact;
