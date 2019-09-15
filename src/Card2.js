import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons';
import './Card2.css';

class Card2 extends Component {
	render() {
		return (
			<div>
				<img className="jpmobile" src="https://i.imgur.com/gACoce3.png" alt="Japanese Mobile" />
				<FontAwesomeIcon icon={faPlusCircle} size="1x" className="plusIcon2" />
			</div>
		);
	}
}

export default Card2;
