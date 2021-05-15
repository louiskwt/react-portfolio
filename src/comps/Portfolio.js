import React from 'react';

const Portfolio = () => {
	return (
		<div className='section grey darken-4' id='portfolio'>
			<h3 className='col s12 white-text center'>Portfolio</h3>
			<div className='row'>
				<div className='col s6 m4'>
					<div className='card projects'>
						<div className='card-image'>
							<img
								className='project-img responsive-img'
								src='https://images.unsplash.com/photo-1592609931095-54a2168ae893?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2250&q=80'
								alt='app'
							/>
							<a class='btn-floating halfway-fab waves-effect waves-light red'>
								<i class='material-icons'>add</i>
							</a>
						</div>
						<div className='card-content'>
							<p>This is a project</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Portfolio;
