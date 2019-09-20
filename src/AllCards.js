import React, { Component } from 'react';
import Card1 from './Card1';
import Card2 from './Card2';
import Card3 from './Card3';
import './AllCards.css';

class AllCards extends Component {
	render() {
		return (
			<div className="container mt-2 mainCards">
				<div
					className="row"
					style={{
						background: '#da3e19',
					}}
				>
					<div className="card-body p-0 col-md-3 border border-dark cardBg">
						<Card1 />
					</div>
					<div className="card-body p-0 col-md-3 border border-dark cardBg">
						<Card2 />
					</div>
					<div className="card-body p-0 col-md-3 border border-dark cardBg ">
						<Card3 />
					</div>
				</div>
			</div>
		);
	}
}

export default AllCards;
