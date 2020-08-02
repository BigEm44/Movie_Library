import { ADD_USERMOVIE } from '../actions/types';

const initState = {
  Title: '',
  Year: '',
  Director: '',
  Runtime: '',
  Actors: '',
  Plot: '',
};

const formReducer = (state = initState, action) => {
  switch (action.type) {
    case ADD_USERMOVIE:
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
};

export default formReducer;
