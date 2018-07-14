import { CLICK_SQUARE, PLACE_FLAG } from './types';

export const placeFlag = () => dispatch => {
  console.log('place flag action');
  dispatch({
    type: PLACE_FLAG,
    payload: [0,0]
  })
}; 