import { SEARCH_MOVIE, FETCH_MOVIES, LOADING } from '../actions/types';

const initState = {
  text: '',
  movies: [],
  loading: false,
};

const findMovieReducer = (state = initState, action) => {
  switch (action.type) {
    case SEARCH_MOVIE:
      return {
        ...state,
        text: action.payload,
        loading: false,
      };
    case FETCH_MOVIES:
      return {
        ...state,
        movies: action.payload,
        loading: false,
      };
    case LOADING:
      return {
        ...state,
        loading: true,
      };
    default:
      return state;
  }
};

export default findMovieReducer;
