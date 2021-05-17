import React from 'react';
import profile from '../profile.jpg';

const About = () => {
	return (
		<div className='section blue-grey lighten-5' id='about'>
			<h3 className='col s12 grey-text text-darken-2 center'>About Me</h3>

			<div className='row valign-wrapper'>
				<div className='col s8 offset-s2 valign'>
					<div className='card white'>
						<div className='card-img center'>
							<img
								src={profile}
								alt='profile'
								className='circle responsive-img'
								id='profile'
							/>
						</div>
						<div className='card-content grey-text text-darken-2'>
							<h5>General Info</h5>
							<div className='divider'></div>
							<div className='row'>
								<p class='col s10 about-text'>
									Web Developer (React, NodeJS, Express,
									MongoDB, and Firebase)
									<br />
									<br />
									Based in Hong Kong 🇭🇰
									<br />
									Remote ✅
								</p>
							</div>
							<br />

							<h5>My story</h5>
							<div className='divider'></div>
							<div className='row'>
								<p class='col s10 about-text'>
									In order to help my students learn English
									and make my teaching more engaging, I taught
									myself how to code and create websites by
									using online resoureces.
									<br />
									<br />
									Now, I'm building web applications that can
									enrich students' learning experience and
									improve teachers' teaching experience.
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default About;
