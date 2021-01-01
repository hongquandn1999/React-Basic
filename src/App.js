import React, { Component } from 'react';
import './App.css';
import shortid from 'shortid';
import Person from './persons/person';

class App extends Component {
	state = {
		persons: [
			{ id: shortid.generate(), name: 'Noelle', anime: 'Black Clover' },
			{ id: shortid.generate(), name: 'Nezuko', anime: 'Kimetsu no yaiba' },
			{ id: shortid.generate(), name: 'Hinata', anime: 'Naruto' },
		],
		showPersons: false,
	};

	switchNameHandler = (newCharacter) => {
		this.setState({
			persons: [
				{ name: newCharacter, anime: 'Black Clover' },
				{ name: 'Nezuko', anime: 'Kimetsu no yaiba' },
				{ name: 'Rengoku', anime: 'Naruto' },
			],
		});
	};

	nameChangeHandler = (event) => {
		this.setState({
			persons: [
				{ name: event.target.value, anime: 'Black Clover' },
				{ name: 'Nezuko', anime: 'Kimetsu no yaiba' },
				{ name: 'Rengoku', anime: 'Naruto' },
			],
		});
	};

	toggleBtnHandler = () => {
		const statusShow = this.state.showPersons;
		this.setState({ showPersons: !statusShow });
	};

	render() {
		let persons = null;

		if (this.state.showPersons) {
			persons = this.state.persons.map((person) => {
				return <Person name={person.name} movie={person.anime} />;
			});
		}

		return (
			<div className="App">
				<header className="App-header">
					<button className="btn" onClick={this.toggleBtnHandler}>
						Switch
					</button>
					{persons}
				</header>
			</div>
		);
	}
}

export default App;
