import React from 'react';
import styled from 'styled-components';
const Cockpit = (props) => {
	const StyleButton = styled.button`
		width: 80px;
		height: 50px;
		background-color: ${(props) => (props.status ? 'aqua' : 'pink')};
		border-radius: 20%;
		margin-top: 20px;

		&:hover {
			background-color: ${(props) => (props.status ? 'yellowgreen' : 'green')};
			cursor: pointer;
		}
	`;
	// ----- Class Dynamic css -------
	const classes = [];
	if (props.persons.length <= 2) {
		classes.push('italic');
	}
	if (props.persons.length <= 1) {
		classes.push('orange');
	}
	//---------------------------------
	return (
		<div>
			<h1>List Character Anime</h1>
			<p className={classes.join(' ')}>Sunshine</p>
			<StyleButton status={props.status} onClick={props.onClick}>
				Switch
			</StyleButton>
		</div>
	);
};

export default Cockpit;
