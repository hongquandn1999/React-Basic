import React from 'react';

function Person(props) {
	return (
		<div>
			<p onClick={props.click}>
				Name character is {props.name} and The name anime's {props.movie}
			</p>
			<p>{props.children}</p>
		</div>
	);
}

export default Person;
