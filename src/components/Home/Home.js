import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

// actions
import { addMovies } from '../../features/movies/movieSlice';

// styles

// components
import MovieList from '../MovieList/MovieList';
import movieApi from '../../common/apis/movieApi';
import { APIKey } from '../../common/apis/MovieApiKey';




const Home = () => {
	const dispatch = useDispatch();
	
	
	
	const movieText = "Harry";
	
	useEffect(() => {
		const fetchMovies = async () => {
			const response = await movieApi.get(`?apiKey=${APIKey}&s=${movieText}&type=movie`)
				.catch((err) => {
					console.log('Err ', err);
				});
				
			console.log('API response = ', response);
			
			dispatch(addMovies(response.data));
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



