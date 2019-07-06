import React from 'react';
import { Route } from 'react-router-dom';

import './App.css';

import { Contact, Home, Portfolio } from './pages/index.js';

import Navigation from './navigation/Navigation.js';

function App() {
	return (
		<div className="container">
			<Navigation />
			<main>
				<Route exact path="/" component={Home} />
				<Route exact path="/about" component={Contact} />
				<Route exact path="/portfolio" component={Portfolio} />
				<Route path="resume" component={Contact} />
			</main>
		</div>
	);
}

export default App;
