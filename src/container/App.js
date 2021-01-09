import React, { Component } from 'react';
import './App.css';
import shortid from 'shortid';
import Persons from '../components/Persons/persons';
import Cockpit from '../components/Cockpit/cockpit';

class App extends Component {
	constructor(props) {
		super(props);
		console.log('[App.js] constructor');
	}

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
	// Life cycle update

	componentDidUpdate() {
		console.log('[App.js] componentDidUpdate');
	}

	shouldComponentUpdate() {
		console.log('[App.js] shouldComponentUpdate');
		return false;
	}

	// Create the first lifecycle
	componentDidMount() {
		console.log('[App.js] ComponentDidMount');
	}

	getDerivedStateAndProps(props, state) {
		return state;
	}

	render() {
		console.log('[App.js] rendering...');
		let persons = null;

		if (this.state.showPersons) {
			persons = (
				<div>
					<Persons
						persons={this.state.persons}
						clicked={this.deletePersonHandler}
						changed={this.nameChangeHandler}
					/>
				</div>
			);
		}

		return (
			<div className="App">
				<header className="App-header">
					<Cockpit
						persons={this.state.persons}
						status={this.state.showPersons}
						onClick={this.togglePersonHandler}
					/>
					{persons}
				</header>
			</div>
		);
	}
}

export default App;
