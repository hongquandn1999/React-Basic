import React from 'react';
import Person from '../Persons/Person/person';
const Persons = (props) => {
	console.log('[Persons.js] rendering');
	return props.persons.map((person, index) => {
		return (
			<Person
				name={person.name}
				movie={person.anime}
				click={() => props.clicked(index)}
				key={person.id}
				changed={(event) => props.changed(event, person.id)}
			/>
		);
	});
};

export default Persons;
