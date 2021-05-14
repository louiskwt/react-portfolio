import React from 'react';

function Navbar() {
	return (
		<nav>
			<div className='nav-wrapper  blue darken-2'>
				<a href='#!' className='brand-logo'>
					<i class='material-icons icon'>laptop</i>Louis Tsang
				</a>
				<ul id='nav-mobile' className='right hide-on-med-and-down'>
					<li>
						<a href='#!'>About</a>
					</li>
					<li>
						<a href='#!'>Portfolio</a>
					</li>
				</ul>
			</div>
		</nav>
	);
}

export default Navbar;
