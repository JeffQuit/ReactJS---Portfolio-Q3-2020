import React, { Component } from 'react';
import { EducationList } from './EducationList.js';
import './Education.css';

export default class Education extends Component {
	render() {
		return (
			<div className="Education Section" id="education">
				<h2 className="Section-Title">Education</h2>
				<div className="Education-Container BD-Grid-Education">
					{EducationList.map((item, index) => {
						return (
							<div key={index} className={item.cName}>
								<img src={item.src} alt={item.title} />
								<h3 className={item.cH3Name}>{item.h3Title}</h3>
								<p className={item.cPName}>{item.timeEdu}</p>
							</div>
						);
					})}
				</div>
			</div>
		);
	}
}
