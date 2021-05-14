import React, { useEffect } from 'react';
import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css/dist/js/materialize.min.js';
import './App.css';
import Navbar from './comps/Navbar';
import Banner from './comps/Banner';

const App = () => {
	useEffect(() => {
		// Init Materialise
		M.AutoInit();
	});
	return (
		<div className='App'>
			<Navbar />
			<Banner />
		</div>
	);
};

export default App;
