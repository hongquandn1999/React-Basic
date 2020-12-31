import React from 'react';
import './person.css';

function Person(props) {
	return (
		<div className="content">
			<div className="sub">
				<p onClick={props.click}>
					Name character is {props.name} and The name anime's {props.movie}
				</p>
				<p>{props.children}</p>
				<input
					type="text"
					className="input"
					onChange={props.changed}
					value={props.name}
				/>
			</div>
		</div>
	);
}

export default Person;
