import React from 'react';



const MovieCard = ({ data }) => {
	const { Title, Year, imdbID, Type, Poster } = data;
	
	return (
		<div className="card-item">
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
		</div>
	);
};



export default MovieCard


