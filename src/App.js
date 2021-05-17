import React, { useEffect } from 'react';
import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css/dist/js/materialize.min.js';
import './App.css';
import Navbar from './comps/Navbar';
import Banner from './comps/Banner';
import About from './comps/About';
import Portfolio from './comps/Portfolio';
import Footer from './comps/Footer';
import ActionBtn from './comps/ActionBtn';

const App = () => {
	useEffect(() => {
		// Init Materialise
		M.AutoInit();
	});
	return (
		<div className='App'>
			<Navbar />
			<Banner />
			<About />
			<Portfolio />
			<Footer />
			<ActionBtn />
		</div>
	);
};

export default App;
