import React from 'react';
import { Contact, Portfolio } from './pages/index';
import Home from './pages/Home/Home.js';
import About from './pages/About/About.js';
import Projects from './pages/Projects/Projects.js';

import './App.css';

import Navigation from './navigation/Navigation.js';

// const home = Scroll.Link;

class App extends React.Component {
	render() {
		return (
			<div className="container">
				<Navigation />
				<div>
					<div className="main-background">
						<Home />
						<About />
						<Projects />
					</div>
				</div>
			</div>
		);
	}
}

export default App;
