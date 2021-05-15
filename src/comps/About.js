import React from 'react';
import profile from '../profile.jpg';

const About = () => {
	return (
		<div className='section white center' id='about'>
			<h3 className='col s12'>About Me</h3>

			<div className='row valign-wrapper'>
				<div className='col s8 offset-s2 valign'>
					<div className='card grey lighten-5 '>
						<div className='card-img'>
							<img
								src={profile}
								alt='profile'
								className='circle responsive-img'
								id='profile'
							/>
						</div>
						<div className='card-content center'>
							<h5>
								I'm proficient in Javascript and Python and have
								experience in building small to mid scale web
								projects. Please take a look at my projects to
								learn more about what I can do.
							</h5>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default About;
