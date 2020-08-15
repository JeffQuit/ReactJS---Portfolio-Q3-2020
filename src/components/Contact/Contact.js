import React, { Component } from 'react';
import './Contact.css';
import axios from 'axios';

export default class Contact extends Component {
	constructor() {
		super();

		this.state = {
			name: '',
			email: '',
			message: '',
		};

		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleChange.bind(this);
	}

	handleChange = (e) => {
		this.setState({
			[e.target.name]: e.target.value,
		});
	};

	async handleSubmit(e) {
		e.preventDefault();
		const { name, email, message } = this.state;

		const form = await axios.post('/api/form', {
			name,
			email,
			message,
		});
	}

	render() {
		return (
			<div>
				<section class="Contact Section" id="contact">
					<h2 class="Section-Title">Contact</h2>

					<div class="Contact-Container BD-Grid">
						<form onSubmit={this.handleSubmit} action="" class="Contact-Form">
							<input name="name" type="text" placeholder="Name" class="Contact-Input" onChange={this.handleChange} />
							<input name="email" type="email" placeholder="Email" class="Contact-Input" onChange={this.handleChange} />
							<textarea name="message" placeholder="Type Message Here" id="" cols="0" rows="10" class="Contact-Input" onChange={this.handleChange}></textarea>
							<input type="submit" value="Send" class="Contact-Button button" />
						</form>
					</div>
				</section>
			</div>
		);
	}
}
