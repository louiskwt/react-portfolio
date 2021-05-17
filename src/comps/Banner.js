import React, { useState, useEffect, useRef } from 'react';
import M from 'materialize-css/dist/js/materialize.min.js';
const word = ['A web developer from Hong Kong '];

const Banner = () => {
	const parallex = useRef(null);
	useEffect(() => {
		M.Parallax.init(parallex);
	});
	// Typing effect
	const [index, setIndex] = useState(0);
	const [subIndex, setSubIndex] = useState(0);
	const [blink, setBlink] = useState(true);

	useEffect(() => {
		if (index === word.length) return;
		if (subIndex === word[index].length + 1 && index !== word.length - 1) {
			setIndex(0);
			return;
		}

		const timeout = setTimeout(() => {
			setSubIndex((prev) => prev + 1);
		}, 100);
		return () => clearTimeout(timeout);
	}, [subIndex, index]);

	// Blinker
	useEffect(() => {
		const timeout2 = setTimeout(() => {
			setBlink((prev) => !prev);
		}, 350);
		return () => clearTimeout(timeout2);
	}, [blink]);

	return (
		<div className='parallax-container'>
			<div className='section no-pad-bot'>
				<div className='container'>
					<br />
					<br />
					<h1 className='header center white-text'>Louis Tsang</h1>
					<div className='row center'>
						<h5 className='header col s12 white-text'>
							{`${word[index].substring(0, subIndex)}${
								blink ? '|' : ' '
							}`}
						</h5>
					</div>
					<div className='row center hide-on-med-and-up'>
						<a
							href='#about'
							className='btn waves-effect waves-light blue darken-1'
						>
							About Me
						</a>
						<br />
						<br />
						<a
							href='#portfolio'
							className='btn waves-effect waves-light blue darken-1'
						>
							Portfolio
						</a>
					</div>
				</div>
			</div>
			<div className='parallax' ref={parallex}>
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
