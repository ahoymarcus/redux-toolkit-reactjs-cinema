import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

// actions
import { fetchAsyncMovies } from '../../features/movies/movieSlice';

// styles

// components
import MovieList from '../MovieList/MovieList';




const Home = () => {
	const dispatch = useDispatch();
	
	
	useEffect(() => {
		dispatch(fetchAsyncMovies());
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



