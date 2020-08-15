import React, { Component, useEffect, useRef, useState } from 'react';
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
						<div onClick={() => setModalIsOpen(!modalIsOpen)} key={index} className={item.cName}>
							<img src={item.src} alt={item.title} />
						</div>
					);
				})}
				{modalIsOpen ? (
					<div className="Modal-CSS">
						<p>Modal is Open</p>
					</div>
				) : null}
			</div>
		</div>
	);
}
