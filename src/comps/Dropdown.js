import React from 'react';

const Dropdown = () => {
	return (
		<ul id='dropdown1' className='dropdown-content'>
			<li>
				<a href='#about' className='black-text nav-link'>
					About
				</a>
			</li>
			<li>
				<a href='#portfolio' className='black-text nav-link'>
					Portfolio
				</a>
			</li>
		</ul>
	);
};

export default Dropdown;
