import React, { Component } from 'react';

export default class PortfolioModal extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}
	render() {
		return (
			<div>
				<div {...this.props} className="Modal-CSS">
					<button onClick={this.props.onHide} className="Modal-BTN">
						<i class="fas fa-times Modal-BTN-Icon"></i>
					</button>
					<h2 className="Modal-Title">{this.props.data.title}</h2>
					<img src={require('./imgs/FeaturedWorkContent/DubSchedulerGif.gif')} alt="DubsadoAppGif" className="Modal-GIF" />
					<p className="Modal-Description">
						Developed a new scheduling feature for Los Angeles based SAAS start-up Dubsado. Built on top of FullCalendar JS, allows users to schedule new appointments and receive an appointment confirmation email. Administrators with login profiles can view and adjust appointments.
					</p>
					<br />
					<h3 className="Modal-Stack-Header">Built Using:</h3>
					<p className="Modal-Stack-List">Javascript, jQuery, Node.js, Express, Handlebars, MySQL, Microsoft Azure, HTML, CSS, uiKit, FullCalendar JS</p>
					<div className="Modal-App-Links">
						<a className="Modal-Github-Link" href="https://github.com/jonnikim/Project2Scheduler">
							<i className="fab fa-github Modal-Link-Icon"></i>
						</a>
						<a className="Modal-Deployed-Link" href="https://github.com/jonnikim/Project2Scheduler">
							<i className="fas fa-external-link-alt Modal-Link-Icon"></i>
						</a>

						<h4 className="Modal-Private-Note">Note: Private Github Repo</h4>
					</div>
				</div>
			</div>
		);
	}
}
