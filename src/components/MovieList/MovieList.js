import React from 'react';
import Slider from 'react-slick';
import { useSelector } from 'react-redux';

import { 
	getAllMovies, 
	getAllShows
} from '../../features/movies/movieSlice';

// styles
import './MovieList.scss';
import { Settings } from '../../common/settings';

// components
import MovieCard from '../MovieCard/MovieCard';




const MovieList = () => {
	const movies = useSelector(getAllMovies);
	console.log('MovieList = ', movies);
	
	const shows = useSelector(getAllShows);
	console.log('ShowList = ', shows);
	
	let renderMovies, renderShows = '';
	
	// Atenção: Response e 'True' são 
	// propriedade e valor presentes no Redux
	renderMovies = movies.Response === 'True' ? (
		movies.Search.map((movie, index) => (
			<MovieCard key={index} data={movie} />
		))
	) : (
		<div className="movies-error">
			<h3>{movies.Error}</h3>
		</div>
	);
	
	renderShows = shows.Response === 'True' ? (
		shows.Search.map((show, index) => (
			<MovieCard key={index} data={show} />
		))
	) : (
		<div className="shows-error">
			<h3>{shows.Error}</h3>
		</div>
	);
	
	// Slider settings
	// const settings = {
		// dots: false,
		// infinite: true,
		// speed: 500,
		// slidesToShow: 6,
		// slidesToScroll: 3
	// };
	
		
	return (
		<div className="movie-wrapper">
			<div className="movie-list">
				<h2>Movies</h2>
				<div className="movie-list-container">
					<Slider { ...Settings }>{renderMovies}</Slider>
				</div>
			</div>
			<div className="show-list">
				<h2>Shows</h2>
				<div className="shows-list-container">
					<Slider { ...Settings }>{renderShows}</Slider>
				</div>
			</div>
		</div>
	);
};



export default MovieList;



