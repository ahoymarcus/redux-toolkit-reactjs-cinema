import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

import movieApi from '../../common/apis/movieApi';
import { APIKey } from '../../common/apis/MovieApiKey';



export const fetchAsyncMovies = createAsyncThunk('movies/fetchAsyncMovies', async () => {
	const movieText = "Harry";
	
	const response = await movieApi.get(`?apiKey=${APIKey}&s=${movieText}&type=movie`);
	
	return response.data;
});

// params
// 1. slice name 2. initial state 
// 3. reducers 4. extra reducers (optional)
const initialState = {
	movies: {},
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
			console.log('Fetch pending.....');
		},
		[fetchAsyncMovies.fulfilled]: (state, { payload }) => {
			console.log('Fetched Successfully.....');
			
			return { ...state, movies: payload };
		},
		[fetchAsyncMovies.rejected]: () => {
			console.log('Fetch rejected.....')
		},
	},
});



export const { addMovies } = movieSlice.actions;

export const getAllMovies = (state) => state.movies.movies;

export default movieSlice.reducer;



