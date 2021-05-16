import React from 'react';

function Navbar() {
	return (
		<div>
			<nav>
				<div className='nav-wrapper white'>
					<a href='#!' className='brand-logo black-text'>
						<i className='material-icons icon'>laptop</i>Louis Tsang
					</a>
					<ul id='nav-mobile' className='right hide-on-small-only'>
						<li>
							<a href='#about' className='black-text nav-link'>
								About
							</a>
						</li>
						<li>
							<a
								href='#portfolio'
								className='black-text nav-link'
							>
								Portfolio
							</a>
						</li>
					</ul>
				</div>
			</nav>
		</div>
	);
}

export default Navbar;
