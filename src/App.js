import React, { Component } from 'react';
import './App.css';
import Person from './persons/person';

class App extends Component {
	state = {
		persons: [
			{ name: 'Noelle', anime: 'Black Clover' },
			{ name: 'Nezuko', anime: 'Kimetsu no yaiba' },
			{ name: 'Hinata', anime: 'Naruto' },
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
			persons = (
				<div>
					<Person
						name={this.state.persons[0].name}
						movie={this.state.persons[0].anime}
						changed={this.nameChangeHandler}
					/>
					<Person
						name={this.state.persons[1].name}
						movie={this.state.persons[1].anime}
						click={() => this.switchNameHandler('Asta')}
					>
						This movie used to appear at movie theater
					</Person>
					<Person
						name={this.state.persons[2].name}
						movie={this.state.persons[2].anime}
					/>
				</div>
			);
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
