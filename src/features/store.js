import { configureStore } from '@reduxjs/toolkit';

// reducers
import moviesReducer from './movies/movieSlice';



export const store = configureStore({
	reducer: moviesReducer,
});


