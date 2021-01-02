import React from 'react';
import './person.css';
import Radium from 'radium';
function Person(props) {
	const style = {
		'@media (max-width: 500px)': {
			width: '450px',
		},
	};
	return (
		<div className="content" style={style}>
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

export default Radium(Person);
