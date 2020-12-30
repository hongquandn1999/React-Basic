import React, { Component } from 'react';

class Person extends Component {
	render() {
		return (
			<p>I'm a Person and I'm {Math.floor(Math.random() * 30)} years old</p>
		);
	}
}

export default Person;
