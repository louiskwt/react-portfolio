import React from 'react';
import useFirestore from '../hooks/useFirestore';

const Portfolio = () => {
	const { docs } = useFirestore('projects');

	return (
		<div className='section grey darken-4' id='portfolio'>
			<h3 className='col s12 white-text center'>Portfolio</h3>
			<div className='container'>
				<div className='row'>
					{docs &&
						docs.map((doc) => (
							<div className='col s6 m4' key={doc.id}>
								<div className='card hoverable projects'>
									<div className='card-image'>
										<img src={doc.img} alt='app' />
										<span className='btn-floating halfway-fab waves-effect waves-light activator red'>
											<i class='fas fa-ellipsis-h'></i>
										</span>
									</div>
									<div className='card-content center'>
										<a
											className='project-title grey-text text-darken-4'
											href={doc.link}
											target='_blank'
											rel='noreferrer'
										>
											<span className='code-block'>
												&lt;{' '}
											</span>
											{doc.name}
											<span className='code-block'>
												{' '}
												&gt;
											</span>
										</a>
									</div>
									<div className='card-reveal'>
										<span className='card-title grey-text text-darken-4'>
											{doc.name}{' '}
											<i class='fas fa-times right'></i>
										</span>
										<p className='project-description'>
											{doc.description}
										</p>
										<div className='row grey-text text-darken-4 project-link center'>
											<a
												className='grey-text text-darken-4'
												href={doc.link}
												target='_blank'
												rel='noreferrer'
											>
												<i className='fas fa-external-link-alt fa-2x'></i>
											</a>
											<a
												className='grey-text text-darken-4'
												href={doc.repo}
												target='_blank'
												rel='noreferrer'
											>
												<i className='fab fa-github fa-2x'></i>
											</a>
										</div>
									</div>
								</div>
							</div>
						))}
				</div>
			</div>
		</div>
	);
};

export default Portfolio;
