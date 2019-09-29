import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons';
import './Card2.css';

class Card2 extends Component {
	render() {
		return (
			<div className="jpmobile" style={{ height: 480 }}>
				<h2>
					<img
						style={{ height: 300, width: 200 }}
						src="https://i.imgur.com/gACoce3.png"
						alt="Japanese Mobile"
					/>
				</h2>
				<span>
					<a href="">
						<FontAwesomeIcon icon={faPlusCircle} size="1x" className="plusIcon2" />
					</a>
				</span>
			</div>
		);
	}
}

export default Card2;
