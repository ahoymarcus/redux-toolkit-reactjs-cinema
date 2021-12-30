import { createSlice } from '@reduxjs/toolkit';


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
});



export const { addMovies } = movieSlice.actions;

export const getAllMovies = (state) => state.movies.movies;

export default movieSlice.reducer;



