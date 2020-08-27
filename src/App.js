import React from 'react';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import Portfolio from './components/Portfolio/Portfolio';
import AdditionalWork from './components/AdditionalWork/AdditionalProjects';
import Education from './components/Education/Education';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import './App.css';

function App() {
	return (
		<div className="App">
			<Navbar />
			<Home />
			<Portfolio />
			<AdditionalWork />
			<About />
			<Education />

			<Contact />
			<Footer />
		</div>
	);
}

export default App;
