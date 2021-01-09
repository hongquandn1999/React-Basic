import React, { Component } from 'react';
import Person from '../Persons/Person/person';
class Persons extends Component {
	static getDerivedStateFromProps(props, state) {
		return state;
	}
	shouldComponentUpdate() {
		console.log('[Persons.js] shouldComponentUpdate');
		return true;
	}
	getSnapshotBeforeUpdate(preProps, preState) {
		console.log('[persons.js] getSnapshotBeforeUpdate');
		return null;
	}
	componentDidUpdate(preProps, preState, snapShot) {
		console.log('[persons.js] componentDidUpdate');
		console.log(snapShot);
	}

	render() {
		console.log('[Persons.js] rendering');
		return this.props.persons.map((person, index) => {
			return (
				<Person
					name={person.name}
					movie={person.anime}
					click={() => this.props.clicked(index)}
					key={person.id}
					changed={(event) => this.props.changed(event, person.id)}
				/>
			);
		});
	}
}

export default Persons;
