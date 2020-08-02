import { combineReducers } from 'redux';
import libraryReducer from './libraryReducer';
import searchMovieReducer from './searchMovieReducer';
import formReducer from './formReducer';

const rootReducer = combineReducers({
  library: libraryReducer,
  movies: searchMovieReducer,
  form: formReducer,
});

export default rootReducer;
