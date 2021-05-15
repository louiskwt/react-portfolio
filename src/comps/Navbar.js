import React, { useRef, useEffect } from 'react';
import Dropdown from './Dropdown';
import M from 'materialize-css/dist/js/materialize.min.js';

function Navbar() {
	const dropdown = useRef(null);

	useEffect(() => {
		// Init Materialise
		M.Dropdown.init(dropdown);
	});

	return (
		<div>
			<nav>
				<div className='nav-wrapper white'>
					<a href='#!' className='brand-logo black-text'>
						<i class='material-icons icon'>laptop</i>Louis Tsang
					</a>
					<ul id='nav-mobile' className='right hide-on-med-and-down'>
						<li>
							<a href='#!' className='black-text nav-link'>
								About
							</a>
						</li>
						<li>
							<a href='#!' className='black-text nav-link'>
								Portfolio
							</a>
						</li>
					</ul>
					<ul className='right show-on-medium-and-down hide-on-med-and-up'>
						<li>
							<a
								href='#!'
								className='dropdown-trigger black-text nav-link'
								data-target='dropdown1'
								ref={dropdown}
							>
								<i className='material-icons icon'>menu</i>
							</a>
						</li>
					</ul>
				</div>
			</nav>
			<Dropdown></Dropdown>
		</div>
	);
}

export default Navbar;
