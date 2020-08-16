import React, { useEffect, useRef, useState } from 'react';
import { FeaturedProjects } from './FeaturedProjects';
import './Portfolio.css';

export default function Portfolio() {
	const [modalIsOpen, setModalIsOpen] = useState(false);
	const [modalData, setModalData] = useState({
		id: 0,
		modalObj: [],
	});

	//let modalIndex;

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
						<div key={index}>
							<div
								onClick={(e) => {
									let modalDataIndex = parseInt(e.target.getAttribute('id'));
									setModalData({ ...modalData, id: modalDataIndex, modalObj: FeaturedProjects[modalDataIndex] });
									setModalIsOpen(!modalIsOpen);
									console.log(modalData);
								}}
								key={index}
								id={item.id}
								className={item.cName}
							>
								<img id={item.id} src={item.src} alt={item.title} />
								<h3 className={item.tNailClass} id={item.id}>
									{item.tNailName}
								</h3>
							</div>
						</div>
					);
				})}
				{/* Modal has to be outside of the Map*/}
				<div>
					{modalIsOpen ? (
						<div className="Modal-CSS">
							<button onClick={() => setModalIsOpen(!modalIsOpen)} className="Modal-BTN">
								<i class="fas fa-times Modal-BTN-Icon"></i>
							</button>
							<h2 className="Modal-Title">{modalData.modalObj.modalTitle}</h2>
							{console.log(modalData.modalObj)}
							<img src={modalData.modalObj.modalGif} alt="DubsadoAppGif" className="Modal-GIF" />
							<p className="Modal-Description">{modalData.modalObj.modalDesc}</p>
							<br />
							<h3 className="Modal-Stack-Header">Built Using:</h3>
							<p className="Modal-Stack-List">{modalData.modalObj.modalBuiltWith}</p>
							<div className="Modal-App-Links">
								<a className="Modal-Github-Link" href={modalData.modalObj.githubLink}>
									<i className={modalData.modalObj.privateRepo ? 'fab fa-github Modal-Link-Icon PrivateRepo' : 'fab fa-github Modal-Link-Icon PublicRepo'}></i>
								</a>
								<a className="Modal-Deployed-Link" href={modalData.modalObj.deployedLink}>
									<i className={modalData.modalObj.delployed ? 'fas fa-external-link-alt Modal-Link-Icon PublicRepo' : 'fas fa-external-link-alt Modal-Link-Icon PrivateRepo'}></i>
								</a>

								<h4 className="Modal-Private-Note">{modalData.modalObj.privateRepo ? 'Note: Private Github Repo' : ''}</h4>
							</div>
						</div>
					) : null}
				</div>
			</div>
		</div>
	);
}
