import React, { Component } from 'react';
import { MenuItems } from './MenuItems';
import './Navbar.css';

class Navbar extends Component {
	state = {
		clicked: false,
	};

	handleClick = () => {
		this.setState({ clicked: !this.state.clicked });
	};

	render() {
		return (
			<nav className="Navbar-Items">
				<h1 className="Navbar-Logo">
					<img alt="Logo" className="Navbar-Logo-Img" src={require('./imgs/JQlogo2.png')}></img>
				</h1>
				<div className="Menu-Icon" onClick={this.handleClick}>
					<i className={this.state.clicked ? 'fas fa-times' : 'fas fa-bars'}></i>
				</div>
				<ul className={this.state.clicked ? 'Nav-Menu active' : 'Nav-Menu'}>
					{MenuItems.map((item, index) => {
						return (
							<li key={index}>
								<a className={item.cName} href={item.url} target={item.target}>
									{item.title}
								</a>
							</li>
						);
					})}
				</ul>
			</nav>
		);
	}
}

export default Navbar;
