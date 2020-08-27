import React, { Component } from 'react';
import './About.css';

export default class About extends Component {
	render() {
		return (
			<div className="About-Container">
				<section className="About BD-Grid-About" id="about">
					<h2 className="Section-Title-About">About Jeff Quittman</h2>
					<div className="About-Center-Grid">
						<div className="About-Data">
							<p className="About-Text-Area">Welcome to my Portfolio! Im Jeff and leveredge software development to solve every day problems and make life easier!</p>
							<br />
							<p className="About-Text-Area">I dabble in graphic design, 3d design, CAD/CAM, and Videogame Design.</p>
							<br />
							<p className="About-Text-Area">When im not working on projects, I am an avid paintball player and enjoy restoring vintage paintball markers. Sometimes I even work at Ambush Paintball Park in Moorpark, CA. </p>
							<br />
							<p className="About-Text-Area">My current development toolbox includes:</p>
							<br />
							<p className="About-Text-Area">
								<b className="About-Skills">Languages: </b> JavaScript, TypeScript, CSS, HTML
							</p>
							<p className="About-Text-Area">
								<b className="About-Skills">Frameworks & Libraries:</b> JQuery, React, Node.js, Express
							</p>
							<p className="About-Text-Area">
								<b className="About-Skills">Databases:</b> MySQL, PostgreSQL, MongoDB
							</p>
							<p className="About-Text-Area">
								<b className="About-Skills">Tools & Platforms:</b> Git, Heroku, Firebase, JIRA, Trello
							</p>
							<p className="About-Text-Area">
								<b className="About-Skills">Design: </b> Photoshop, Illustrator, Maya, Fusion360, Solidworks
							</p>
						</div>
						<br />
						<div className="About-IMG">
							<img className="About-IMG-Tag" src="./imgs/JeffHeadshot1.png" alt="JQHeadshot" />
						</div>
					</div>
				</section>
			</div>
		);
	}
}
