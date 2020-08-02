import { ADD_MOVIE, DELETE_MOVIE } from '../actions/types';

const initState = {
  title1: '',
  library: [],
};

const libraryReducer = (state = initState, action) => {
  switch (action.type) {
    case ADD_MOVIE:
      return {
        ...state,
        library: [...state.library, action.payload],
      };
    case DELETE_MOVIE:
      const index = action.payload;
      return {
        ...state,
        library: [
          ...state.library.slice(0, index),
          ...state.library.slice(index + 1),
        ],
      };
    default:
      return state;
  }
};

export default libraryReducer;
