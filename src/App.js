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

	render() {
		return (
			<div className="App">
				<header className="App-header">
					<Person
						name={this.state.persons[0].name}
						movie={this.state.persons[0].anime}
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
					<button
						className="btn"
						onClick={() => this.switchNameHandler('Mimosa')}
					>
						Switch
					</button>
				</header>
			</div>
		);
	}
}

export default App;
