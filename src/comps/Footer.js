import React from 'react';

const Footer = () => {
	return (
		<footer className='page-footer white center'>
			<div className='container'>
				<div className='row'>
					<div className='col s12'>
						<h3 className='grey-text text-darken-4'>
							Don't be a stranger!
						</h3>
						<div className='divider'></div>
						<div
							className='row grey-text text-darken-4'
							id='social-link'
						>
							<a
								className='grey-text text-darken-4'
								href='https://www.linkedin.com/in/ka-wing-tsang-689344153/'
								target='_blank'
								rel='noreferrer'
							>
								<i className='fab fa-linkedin fa-3x'></i>
							</a>
							<a
								className=' grey-text text-darken-4'
								href='https://www.facebook.com/louis.tsang.733/'
								target='_blank'
								rel='noreferrer'
							>
								<i className='fab fa-facebook fa-3x'></i>
							</a>
							<a
								className=' grey-text text-darken-4'
								href='https://www.instagram.com/wingdev12/'
								target='_blank'
								rel='noreferrer'
							>
								<i className='fab fa-instagram-square fa-3x'></i>
							</a>
						</div>
					</div>
				</div>
			</div>
			<div className='footer-copyright grey lighten-3'>
				<div className='container grey-text'>© 2021 Louis Tsang</div>
			</div>
		</footer>
	);
};

export default Footer;
