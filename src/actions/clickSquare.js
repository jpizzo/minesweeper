import { CLICK_SQUARE, PLACE_FLAG } from './types';

export const clickSquare = () => dispatch => {
  console.log('click square action');
  dispatch({
    type: CLICK_SQUARE,
    payload: [0,0]
  })
}; 