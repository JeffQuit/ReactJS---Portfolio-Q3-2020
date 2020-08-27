import React, { useState } from 'react';
import { AdditionalProjectsList } from './AdditionalProjectsList.js';
import './AdditionalProjects.css';

export default function AdditionalProjects() {
	const [modalADDIsOpen, setADDModalIsOpen] = useState(false);
	const [modalData, setModalData] = useState({
		id: 0,
		modalObj: [],
	});

	//let modalIndex;

	return (
		<div className="AdditionalWork Section" id="additionalwork">
			<h2 className="Section-Title">Personal Projects</h2>
			<div className="AdditionalWork-Container BD-Grid">
				{AdditionalProjectsList.map((item, index) => {
					return (
						<div
							onClick={(e) => {
								let modalDataIndex = parseInt(e.target.getAttribute('id'));
								setModalData({ ...modalData, id: modalDataIndex, modalObj: AdditionalProjectsList[modalDataIndex] });
								setADDModalIsOpen(!modalADDIsOpen);
								console.log(modalData);
							}}
							key={index}
							id={item.id}
							className={item.cName}
						>
							<img id={item.id} src={item.src} alt={item.title} className={item.imgClass} />

							<h3 className="Tnail-CSSADD" id={item.id}>
								{item.tNailName}
							</h3>
						</div>
					);
				})}
				{/* Modal has to be outside of the Map*/}
				<div>
					{modalADDIsOpen ? (
						<div className="ModalADD-CSS">
							<button onClick={() => setADDModalIsOpen(!modalADDIsOpen)} className="ModalADD-BTN">
								<i class="fas fa-times ModalADD-BTN-Icon"></i>
							</button>
							<h2 className="ModalADD-Title">{modalData.modalObj.modalTitle}</h2>
							{console.log(modalData.modalObj)}
							<img src={modalData.modalObj.modalGif} alt="DubsadoAppGif" className="ModalADD-GIF" />
							<p className="ModalADD-Description">{modalData.modalObj.modalDesc}</p>
							<br />
							<h3 className="ModalADD-Stack-Header">Built Using:</h3>
							<p className="ModalADD-Stack-List">{modalData.modalObj.modalBuiltWith}</p>
							<div className="ModalADD-App-Links">
								<a className="ModalADD-Github-Link" href={modalData.modalObj.githubLink}>
									<i className={modalData.modalObj.privateRepo ? 'fab fa-github ModalADD-Link-Icon PrivateRepoADD' : 'fab fa-github ModalADD-Link-Icon PublicRepoADD'}></i>
								</a>
								<a className="ModalADD-Deployed-Link" href={modalData.modalObj.deployedLink}>
									<i className={modalData.modalObj.delployed ? 'fas fa-external-link-alt ModalADD-Link-Icon PublicRepoADD' : 'fas fa-external-link-alt ModalADD-Link-Icon PrivateRepoADD'}></i>
								</a>

								<h4 className="ModalADD-Private-Note">{modalData.modalObj.privateRepo ? 'Note: Private Github Repo' : ''}</h4>
							</div>
						</div>
					) : null}
				</div>
			</div>
		</div>
	);
}
