import { ADD_MOVIE, DELETE_MOVIE } from './types';

export const addMovie = (movie) => (dispatch) => {
  dispatch({
    type: ADD_MOVIE,
    payload: movie,
  });
};

export const deleteMovie = (index) => (dispatch) => {
  dispatch({
    type: DELETE_MOVIE,
    payload: index,
  });
};
