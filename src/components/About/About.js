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
							<p className="About-Text-Area">Jeff Quittman is an emerging full stack software developer with a diverse background in Graphic Design, 3D CAD Modeling, Video-game Level Design, Photography, and much much more.</p>
							<br />
							<p className="About-Text-Area">
								Jeff is currently the Director of Program Success at Tuition.io, the innovator and industry leader in the student loan repayment employee benefit. As a natural problem solver and creator, Jeff approaches each problem with curiosity and multiple problem solving
								techniques that allow him to resolve any issue or overcome any obstacle in his path.
							</p>
							<br />
							<p className="About-Text-Area">In his free time, Jeff is an avid paintball player where he maintains a collection of vintage paintball markers. As a part-time job, he works at Ambush Paintball Park in Moorpark, CA.</p>
							<br />
							<p className="About-Text-Area">Jeff's development toolbox includes:</p>
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
