import React, { Component } from 'react';
import './Home.css';

export default class Home extends Component {
	render() {
		return (
			<div className="Home-Container">
				<div className="Bkg-IMG-Container">
					<img src="./imgs/Vect4Large3.png" alt="BKGimg" className="Bkg-IMG" />
				</div>
				<section className="Home BD-Grid" id="home">
					<div className="Home-Left-Content">
						<div className="Home-Data">
							<h1 className="Home-Title">
								<span className="Home-Title-Color">Jeff Quittman</span>
								<br />
							</h1>
							<p className="Home-Paragraph">Emerging full stack engineer with a background in functional and visual design. </p>
							<br />
							<a href="#contact" className="button">
								Contact
							</a>
						</div>
						<br />
						<div className="Home-Social">
							<a href="https://github.com/JeffQuit" className="Home-Social-Icon">
								<i className="fab fa-github fa-3x socialIcons" />
							</a>
							<a href="https://www.linkedin.com/in/jeffquittman/" className="Home-Social-Icon">
								<i className="fab fa-linkedin fa-3x socialIcons" />
							</a>
						</div>
					</div>
				</section>
			</div>
		);
	}
}
