import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

import movieApi from '../../common/apis/movieApi';
import { APIKey } from '../../common/apis/MovieApiKey';



export const fetchAsyncMovies = createAsyncThunk(
	'movies/fetchAsyncMovies', 
	async (search) => {	
		const response = await movieApi.get(`?apiKey=${APIKey}&s=${search}&type=movie`);
		
		return response.data;
	}
);

export const fetchAsyncShows = createAsyncThunk(
	'movies/fetchAsyncShows',
	async (search) => {
		const response = await movieApi.get(`?apiKey=${APIKey}&s=${search}&type=series`);
		
		return response.data;
	}
);

export const fetchAsyncMovieOrShowDetail = createAsyncThunk(
	'movies/fetchAsyncMovieOrShowDetail',
	async (id) => {
		const response = await movieApi.get(`?apiKey=${APIKey}&i=${id}&Plot=full`);
		
		return response.data;
	}
);

// params
// 1. slice name 2. initial state 
// 3. reducers 4. extra reducers (optional)
const initialState = {
	movies: {},
	shows: {},
	selectedMovieOrShow: {},
};


const movieSlice = createSlice({
	name: 'movies',
	initialState,
	reducers: {
		removeSelectedMovieOrShow: (state) => {
			state.selectedMovieOrShow = {};
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
		[fetchAsyncMovieOrShowDetail.pending]: () => {
			console.log('Fetch details pending.....');
		},
		[fetchAsyncMovieOrShowDetail.fulfilled]: (state, { payload }) => {
			console.log('Fetched details Successfully.....');
			
			return { ...state, selectedMovieOrShow: payload };
		},
		[fetchAsyncMovieOrShowDetail.rejected]: () => {
			console.log('Fetch details rejected.....');
		},
	},
});



export const { removeSelectedMovieOrShow } = movieSlice.actions;

export const getAllMovies = (state) => state.movies.movies;
export const getAllShows = (state) => state.movies.shows;
export const getSelectedMovieOrShow = (state) => state.movies.selectedMovieOrShow;

export default movieSlice.reducer;



