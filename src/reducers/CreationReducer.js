//This reducer is the reducer that deals with anything to do with
// Cards and the update of the cards, the update card handles any
// prop that has been updated and card created is what the QR scanner
// will everntually return as a type

import {
  CARD_UPDATE,
  CARD_CREATED
} from '../actions/types';

const INITIAL_STATE = {
  name: '',
  bio: '',
  pro: '',
  link: '',
  image: ''
};


export default ( state = INITIAL_STATE, action ) => {
  switch (action.type){
// For this case I can take any property that is defined hence I used
// an array which allows the user to specify which prop from our initialstate
// that they will like to alter, which allows me to not have lots of code for every prop
// for example a case for name change and another for bio and so on, this trick can delegate the choice of props
// change to the person who is called the action by specifying what they want to change in the prop
    case CARD_UPDATE:
      return { ...state, [action.payload.prop]: action.payload.value }
    case CARD_CREATED:
      return INITIAL_STATE;
    default:
      return state;
  }
};
