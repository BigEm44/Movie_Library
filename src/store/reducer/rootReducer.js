import libraryReducer from './libraryReducer';
import searchMovieReducer from './searchMovieReducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  library: libraryReducer,
  movies: searchMovieReducer,
});

export default rootReducer;
