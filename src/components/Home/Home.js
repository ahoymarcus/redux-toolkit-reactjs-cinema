import React, { useEffect } from 'react';

// styles
import MovieList from '../MovieList/MovieList';

// components
import movieApi from '../../common/apis/movieApi';
import { APIKey } from '../../common/apis/MovieApiKey';



const Home = () => {
	const movieText = "Harry";
	
	
	useEffect(() => {
		const fetchMovies = async () => {
			const response = await movieApi.get(`?apiKey=${APIKey}&s=${movieText}&type=movie`)
				.catch((err) => {
					console.log('Err ', err);
				});
				
			console.log('API response = ', response);
		};
		
		fetchMovies();
	}, []);
	
	
	return (
		<div>
			<div className="banner-imag">
				Image
			</div>
			<MovieList />
		</div>
	);
};



export default Home;



