import { ADD_USERMOVIE } from './types';

export const addForm = (text) => (dispatch) => {
  dispatch({
    type: ADD_USERMOVIE,
    payload: text,
  });
};
