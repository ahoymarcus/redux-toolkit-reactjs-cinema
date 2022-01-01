import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import {
	fetchAsyncMovies,
	fetchAsyncShows
} from '../../features/movies/movieSlice';

// Style
import './Header.scss';

import user from '../../images/user.png';



const Header = () => {
	const [ search, setSearch ] = useState('');
	
	const dispatch = useDispatch();
	
	
	const submitHandler = (e) => {
		e.preventDefault();
		
		if (search !== '') {
			console.log('Search text = ', search);
		
			dispatch(fetchAsyncMovies(search));
			dispatch(fetchAsyncShows(search));
			
			setSearch('');
		}
	};
	
	
	return (
		<div className="header">
			<div className="logo">
				<Link to="/">Movie App</Link>
			</div>
			<div className="search-bar">
				<form onSubmit={submitHandler} >
					<input 
						type="text" 
						value={search} 
						placeholder="Search Movies and Series" 
						onChange={(e) => setSearch(e.target.value)} 
					/>
					<button type="submit" > 
						<i className="fa fa-search"></i>
					</button>
				</form>
			</div>
			<div className="user-image">
				<img src={user} alt="user" />
			</div>
		</div>
	);
};



export default Header


