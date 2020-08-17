import React from 'react';
import emailjs from 'emailjs-com';
import './Contact.css';

export default function Contact() {
	function sendEmail(e) {
		e.preventDefault();

		emailjs.sendForm('gmail', 'jeffquittmanwebsitecontact', e.target, 'user_rcoWw7c44IgwuiOYNvtLb').then(
			(result) => {
				console.log(result.text);
			},
			(error) => {
				console.log(error.text);
			}
		);
		e.target.reset();
	}
	return (
		<div>
			<section className="Contact Section" id="contact">
				<h2 className="Section-Title">Contact</h2>

				<div className="Contact-Container BD-Grid">
					<form onSubmit={sendEmail} action="" className="contact_form_class Contact-Form">
						<input name="name" type="text" placeholder="Name" className="Contact-Input" />
						<input name="email" type="email" placeholder="Email" className="Contact-Input" />
						<textarea name="message" placeholder="Type Message Here" id="" cols="0" rows="10" className="Contact-Input"></textarea>
						<button type="submit" value="Send" className="Contact-Button button">
							Send
						</button>
					</form>
				</div>
			</section>
		</div>
	);
}
