import { CLICK_SQUARE, PLACE_FLAG } from '../actions/types';

const initialState = {
  squares: [],
  flags: [] 
}

export default (state = initialState, action) => {
  switch(action.type) {
    case CLICK_SQUARE:
      return {
        ...state,
        squares: action.payload
      }
    case PLACE_FLAG:
      return {
        ...state,
        flags: action.payload
      }
    default:
      return state;
  }
}