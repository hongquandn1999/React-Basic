import React, { Component } from 'react';
import './App.css';
import shortid from 'shortid';
import Person from './persons/person';
import Radium, { StyleRoot } from 'radium';

class App extends Component {
	state = {
		persons: [
			{ id: shortid.generate(), name: 'Noelle', anime: 'Black Clover' },
			{ id: shortid.generate(), name: 'Nezuko', anime: 'Kimetsu no yaiba' },
			{ id: shortid.generate(), name: 'Hinata', anime: 'Naruto' },
		],
		showPersons: false,
	};

	nameChangeHandler = (event, id) => {
		const indexPerson = this.state.persons.findIndex((p) => p.id === id);

		const person = {
			...this.state.persons[indexPerson],
		};

		person.name = event.target.value;

		const persons = [...this.state.persons];

		persons[indexPerson] = person;

		this.setState({
			persons: persons,
		});
	};

	togglePersonHandler = () => {
		const statusShow = this.state.showPersons;
		this.setState({ showPersons: !statusShow });
	};

	deletePersonHandler = (personIndex) => {
		const persons = [...this.state.persons];
		persons.splice(personIndex, 1);
		this.setState({ persons: persons });
		console.log(persons);
	};

	render() {
		const style = {
			width: '80px',
			height: '50px',
			backgroundColor: 'aqua',
			borderRadius: '20%',
			marginTop: '20px',
			':hover': {
				backgroundColor: 'yellowgreen',
				cursor: 'pointer',
			},
		};

		let persons = null;

		if (this.state.showPersons) {
			persons = this.state.persons.map((person, index) => {
				return (
					<Person
						name={person.name}
						movie={person.anime}
						click={this.deletePersonHandler.bind(index)}
						key={person.id}
						changed={(event) => this.nameChangeHandler(event, person.id)}
					/>
				);
			});

			style.backgroundColor = 'green';
		}

		// ----- Class Dynamic css -------
		const classes = [];
		if (this.state.persons.length <= 2) {
			classes.push('italic');
		}
		if (this.state.persons.length <= 1) {
			classes.push('orange');
		}
		//---------------------------------

		return (
			<StyleRoot>
				<div className="App">
					<header className="App-header">
						<h1>List Character Anime</h1>
						<p className={classes.join(' ')}>Sunshine</p>
						<button onClick={this.togglePersonHandler} style={style}>
							Switch
						</button>
						{persons}
					</header>
				</div>
			</StyleRoot>
		);
	}
}

export default Radium(App);
