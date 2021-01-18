import '../App.css';
import React from 'react';
import Navbar from './Navbar';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

function App() {
	return (
		<Router>
			<div className="App">
				<Navbar />
				<Switch>
					<Route path="/" exact />
				</Switch>
			</div>
		</Router>
	);
}

export default App;
