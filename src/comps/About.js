import React from 'react';
import profile from '../profile.jpg';

const About = () => {
	return (
		<div className='section white center'>
			<h3 className='col s12'>About Me</h3>

			<div className='row valign-wrapper'>
				<div className='col s6 offset-s3 valign'>
					<div className='card blue-grey lighten-5'>
						<div className='card-img'>
							<img
								src={profile}
								alt='profile'
								className='circle responsive-img'
								id='profile'
							/>
						</div>
						<div className='card-content'>
							<h5>
								As an aspiring web developer, I'm proficient in
								Javascript and Python. Please take a look at my
								projects to learn more about what I can do.
							</h5>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default About;
