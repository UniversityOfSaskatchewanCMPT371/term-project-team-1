// all reducers in an index.js file

import { combineReducers } from 'redux';
import AuthReducer from './AuthReducer';
import CreationReducer from './CreationReducer'
import FetchReducer from './FetchReducer'

export default combineReducers({
  auth: AuthReducer,
  creationForm: CreationReducer,
  myCards: FetchReducer
});
