import { ADD_MOVIE, DELETE_MOVIE, USER_MOVIE } from '../actions/types';

const initState = {
  library: [],
  // userMovie: {
  //   Title: '',
  //   Year: '',
  //   Director: '',
  //   Runtime: '',
  //   Actors: '',
  //   Plot: '',
  // },
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
    // case USER_MOVIE:
    //   return {
    //     ...state,
    //     userMovie: action.payload,
    //   };
    default:
      return state;
  }
};

export default libraryReducer;
