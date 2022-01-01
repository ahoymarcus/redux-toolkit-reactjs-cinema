import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

// actions
import { 
	fetchAsyncMovies,
	fetchAsyncShows
} from '../../features/movies/movieSlice';

// styles

// components
import MovieList from '../MovieList/MovieList';



const Home = () => {
	const dispatch = useDispatch();
	
	const movieSearch = 'Harry';
	const serieSearch = 'Friends';
	
	
	useEffect(() => {
		dispatch(fetchAsyncMovies(movieSearch));
		dispatch(fetchAsyncShows(serieSearch));
	}, [dispatch]);
	
	
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



