import React from 'react';

const Banner = () => {
	return (
		<div className='parallax-container'>
			<div className='section no-pad-bot'>
				<div className='container'>
					<br />
					<br />
					<h1 className='header center white-text'>
						Welcome to my Portfolio
					</h1>
					<div className='row center'>
						<h5 className='header col s12 white-text'>
							This page showcases my web development projects
						</h5>
					</div>
					<div className='row center'>
						<a
							href='#about'
							className='btn-large waves-effect waves-light blue'
						>
							Learn more about Me
						</a>
					</div>
				</div>
			</div>
			<div className='parallax'>
				<img
					id='banner-img'
					src='https://images.unsplash.com/photo-1563121661-cd531f4fb8cb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80'
					alt='banner-with-a-laptop'
				/>
				<div id='shade'></div>
			</div>
		</div>
	);
};

export default Banner;
