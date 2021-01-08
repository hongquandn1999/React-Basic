import React from 'react';
import './person.css';
import styled from 'styled-components';

const StyleDiv = styled.div`
	border: 1px solid #726a6acc;
	width: 800px;
	margin: 30px auto;
	height: 130px;
	text-align: center;
	box-shadow: 0 2px 3px #ccc;

	@media (min-width: 500px) {
		width: 450px;
	}
`;
function Person(props) {
	console.log('[Person.js] rendering');
	return (
		<StyleDiv>
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
		</StyleDiv>
	);
}

export default Person;
