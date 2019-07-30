import React from 'react';
import { Contact, Portfolio } from './pages/index';
import Home from './pages/Home/Home.js';
import About from './pages/About/About.js';

import './App.css';

import Navigation from './navigation/Navigation.js';

// const home = Scroll.Link;

class App extends React.Component {
	render() {
		return (
			<div className="container">
				<Navigation />
				<div>
					<Home />
					<About />
				</div>
			</div>
		);
	}
}

export default App;
