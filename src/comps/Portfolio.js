import React from 'react';
import useFirestore from '../hooks/useFirestore';

const Portfolio = () => {
	const { docs } = useFirestore('projects');
	console.log(docs);
	return (
		<div className='section grey darken-4' id='portfolio'>
			<h3 className='col s12 white-text center'>Portfolio</h3>
			<div className='row'>
				{docs &&
					docs.map((doc) => (
						<div className='col s6 m4' key={doc.id}>
							<div className='card hoverable projects'>
								<div className='card-image'>
									<img
										className='project-img responsive-img'
										src={doc.img}
										alt='app'
									/>
									<a
										href={doc.link}
										className='btn-floating halfway-fab waves-effect waves-light red'
										target='_blank'
										rel='noreferrer'
									>
										<i className='material-icons'>code</i>
									</a>
								</div>
								<div className='card-content center'>
									<p className='project-title'>{doc.name}</p>
								</div>
							</div>
						</div>
					))}
			</div>
		</div>
	);
};

export default Portfolio;
