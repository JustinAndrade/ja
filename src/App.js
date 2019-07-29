import React from 'react';
import { Contact, Portfolio } from './pages/index';
import Home from './pages/Home/Home.js';
// import * as Scroll from 'react-scroll';
// import { Link, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll';

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
					<Portfolio name="portfolio" />
					<Contact />
				</div>
			</div>
		);
	}
}

export default App;
