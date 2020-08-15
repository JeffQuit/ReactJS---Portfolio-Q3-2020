import React, { Component } from 'react';
import { AdditionalProjectsList } from './AdditionalProjectsList.js';
import './AdditionalProjects.css';

export default class AdditionalWork extends Component {
	render() {
		return (
			<div className="AdditionalWork Section" id="additionalwork">
				<h2 className="Section-Title">Additional Projects</h2>
				<div className="AdditionalWork-Container BD-Grid">
					{AdditionalProjectsList.map((item, index) => {
						return (
							<div key={index} className={item.cName}>
								<img src={item.src} alt={item.title} />
							</div>
						);
					})}
				</div>
			</div>
		);
	}
}
