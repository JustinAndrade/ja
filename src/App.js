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
				<Route exact path="/ja" component={Home} />
				<Route exact path="/ja/about" component={Contact} />
				<Route exact path="/ja/portfolio" component={Portfolio} />
				<Route path="/ja/resume" component={Contact} />
			</main>
		</div>
	);
}

export default App;
