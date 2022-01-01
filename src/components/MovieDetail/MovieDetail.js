import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

// styles
import './MovieDetail.scss';

import { 
	fetchAsyncMovieOrShowDetail,
	getSelectedMovieOrShow 
} from '../../features/movies/movieSlice';



const MovieDetail = () => {
	const { imdbID } = useParams();
	const dispatch = useDispatch();
	
	const data = useSelector(getSelectedMovieOrShow);
	console.log('Details = ', data);
	
	const { Title, imdbRating, imdbVotes, Runtime, Year, Plot, Director, Actors, Genre, Language, Awards, Poster } = data;
	
	useEffect(() => {
		dispatch(fetchAsyncMovieOrShowDetail(imdbID));
	}, [dispatch, imdbID]);
	

	return (
		<div className="movie-detail-section">
			<div className="movie-detail-section-left">
				<div className="movie-detail-section-title">
					{Title}
				</div>
				<div className="movie-detail-rating">
					<span>
						IMDB Rating <i className="fa fa-star"></i> : {imdbRating}
					</span>
					<span>
						IMDB Votes <i className="fa fa-thumbs-up"></i> : {imdbVotes}
					</span>
					<span>
						IMDB Runtime <i className="fa fa-film"></i> : {Runtime}
					</span>
					<span>
						IMDB Year <i className="fa fa-calendar"></i> : {Year}
					</span>
				</div>
				<div className="movie-detail-plot">
					{Plot}
				</div>
				<div className="movie-detail-info">
					<div>
						<span>Directory</span>
						<span>{Director}</span>
					</div>
					<div>
						<span>Actors</span>
						<span>{Actors}</span>
					</div>
					<div>
						<span>Genres</span>
						<span>{Genre}</span>
					</div>
					<div>
						<span>Language</span>
						<span>{Language}</span>
					</div>
					<div>
						<span>Awards</span>
						<span>{Awards}</span>
					</div>
				</div>
			</div>
			<div className="movie-detail-section-right">
				<img src={Poster} alt={Title} />
			</div>
		</div>
	);
};



export default MovieDetail


