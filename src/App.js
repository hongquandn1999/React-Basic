import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './persons/person';

class App extends Component {
	state = {
		persons: [
			{ name: 'Noelle', anime: 'Black Clover' },
			{ name: 'Nezuko', anime: 'Kimetsu no yaiba' },
			{ name: 'Hinata', anime: 'Naruto' },
		],
	};
	render() {
		return (
			<div className="App">
				<header className="App-header">
					<img src={logo} className="App-logo" alt="logo" />
					<Person
						name={this.state.persons[0].name}
						movie={this.state.persons[0].anime}
					/>
					<Person
						name={this.state.persons[1].name}
						movie={this.state.persons[1].anime}
					>
						This movie used to appear at movie theater
					</Person>
					<Person
						name={this.state.persons[2].name}
						movie={this.state.persons[2].anime}
					/>
					<p>
						Edit <code>src/App.js</code> and save to reload.
					</p>
					<a
						className="App-link"
						href="https://reactjs.org"
						target="_blank"
						rel="noopener noreferrer"
					>
						Learn React
					</a>
				</header>
			</div>
		);
	}
}

export default App;
