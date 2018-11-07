//This is the reducer component that deals with the
//Database to retrieve the information, due to the nature of
//redux it is not returned into an array but as an object
// hence I define the Initial state of the object as an empty object

import {
 CARDS_FETCH_SUCCESS
} from '../actions/types';

const INITIAL_STATE = {} ;

export default (state = INITIAL_STATE, action ) => {
  switch (action.type) {
    case CARDS_FETCH_SUCCESS:
      console.log(action);
      return action.payload;
    default:
      return state;
  }
}
