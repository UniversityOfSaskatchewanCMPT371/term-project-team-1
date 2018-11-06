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
    case CARD_UPDATE:
      return { ...state, [action.payload.prop]: action.payload.value }
    case CARD_CREATED:
      return INITIAL_STATE;
    default:
      return state;
  }
};
