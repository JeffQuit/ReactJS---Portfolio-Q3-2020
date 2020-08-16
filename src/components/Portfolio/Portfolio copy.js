import React, { useEffect, useRef, useState } from 'react';
import { FeaturedProjects } from './FeaturedProjects';
import './Portfolio.css';

export default function Portfolio() {
	const [modalIsOpen, setModalIsOpen] = useState(false);
	const outside = useRef();
	const handleClick = (e) => {
		if (outside.current.contains(e.target)) {
			return;
		}
		setModalIsOpen(false);
	};

	useEffect(() => {
		const getClick = document.addEventListener('click', handleClick);
		return () => {
			getClick();
		};
	}, []);

	return (
		<div className="Portfolio Section" id="portfolio" ref={outside}>
			<h2 className="Section-Title">Featured Projects</h2>
			<div className="Portfolio-Container BD-Grid">
				{FeaturedProjects.map((item, index) => {
					return (
						<div>
							<div onClick={() => setModalIsOpen(!modalIsOpen)} key={index} className={item.cName}>
								<img src={item.src} alt={item.title} />
								<h3 className={item.tNailClass}>{item.tNailName}</h3>
							</div>
							<div>
								{modalIsOpen ? (
									<div className="Modal-CSS">
										<button onClick={() => setModalIsOpen(!modalIsOpen)} className="Modal-BTN">
											<i class="fas fa-times Modal-BTN-Icon"></i>
										</button>
										<h2 className="Modal-Title">{item.modalTitle}</h2>
										<img src={require('./imgs/FeaturedWorkContent/DubSchedulerGif.gif')} alt="DubsadoAppGif" className="Modal-GIF" />
										<p className="Modal-Description">
											Developed a new scheduling feature for Los Angeles based SAAS start-up Dubsado. Built on top of FullCalendar JS, allows users to schedule new appointments and receive an appointment confirmation email. Administrators with login profiles can view and adjust
											appointments.
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
								) : null}
							</div>
						</div>
					);
				})}
				{/* Modal has to be outside of the Map*/}
			</div>
		</div>
	);
}
