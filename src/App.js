import React, { useState } from 'react';
import Review from './Review';


const App = () => {
	return (
		<main>
			<section className="container">
				<div className="title">
					<h2>my reviews (fake)</h2>
					<div className="underline"></div>
				</div>
				<Review />
			</section>
		</main>
	);
};

export default App;
