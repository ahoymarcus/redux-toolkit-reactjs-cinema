import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

import movieApi from '../../common/apis/movieApi';
import { APIKey } from '../../common/apis/MovieApiKey';



export const fetchAsyncMovies = createAsyncThunk(
	'movies/fetchAsyncMovies', 
	async () => {
	const movieText = "Harry";
	
	const response = await movieApi.get(`?apiKey=${APIKey}&s=${movieText}&type=movie`);
	
	return response.data;
});

export const fetchAsyncShows = createAsyncThunk(
	'movies/fetchAsyncShows',
	async () => {
		const serieText = 'Friends';
		
		const response = await movieApi.get(`?apiKey=${APIKey}&s=${serieText}&type=series`);
		
		return response.data;
});

// params
// 1. slice name 2. initial state 
// 3. reducers 4. extra reducers (optional)
const initialState = {
	movies: {},
	shows: {},
};


const movieSlice = createSlice({
	name: 'movies',
	initialState,
	reducers: {
		addMovies: (state, { payload }) => {
			state.movies = payload;
		},
	},
	extraReducers: {
		[fetchAsyncMovies.pending]: () => {
			console.log('Fetch movies pending.....');
		},
		[fetchAsyncMovies.fulfilled]: (state, { payload }) => {
			console.log('Fetched movies Successfully.....');
			
			return { ...state, movies: payload };
		},
		[fetchAsyncMovies.rejected]: () => {
			console.log('Fetch movies rejected.....');
		},
		[fetchAsyncShows.pending]: () => {
			console.log('Fetch shows pending.....');
		},
		[fetchAsyncShows.fulfilled]: (state, { payload }) => {
			console.log('Fetched shows Successfully.....');
			
			return { ...state, shows: payload };
		},
		[fetchAsyncShows.rejected]: () => {
			console.log('Fetch shows rejected.....');
		},
	},
});



export const { addMovies } = movieSlice.actions;

export const getAllMovies = (state) => state.movies.movies;
export const getAllShows = (state) => state.movies.shows;

export default movieSlice.reducer;



