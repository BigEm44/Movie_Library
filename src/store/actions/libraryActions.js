import { ADD_MOVIE, DELETE_MOVIE, USER_MOVIE } from './types';

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

export const userMovie = (movie) => (dispatch) => {
  dispatch({
    type: USER_MOVIE,
    payload: movie,
  });
};
