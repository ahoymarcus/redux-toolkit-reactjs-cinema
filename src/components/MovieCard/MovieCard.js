import React from 'react';
import { Link } from 'react-router-dom';

// styles
import './MovieCard.scss';



const MovieCard = ({ data }) => {
	const { Title, Year, imdbID, Type, Poster } = data;
	
	return (
		<div className="card-item">
			<Link to={`/movie/${imdbID}`}>
				<div className="card-item-containter">
					<div className="card-item-top">
						<img src={Poster} alt={Title} /> 
					</div>
					<div className="card-item-bottom">
						<div className="card-item-info">
							<h4>{Title}</h4>
							<p>{Year}</p>
						</div>
					</div>
				</div>
			</Link>
		</div>
	);
};



export default MovieCard


