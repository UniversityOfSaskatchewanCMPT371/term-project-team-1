// all reducers in an index.js file allowing me to access
// the reduces as this.props.nameOfReducerFile hence allowing
// me to import the properties of a file and perform actions on it

import { combineReducers } from 'redux';
import AuthReducer from './AuthReducer';
import CreationReducer from './CreationReducer'
import FetchReducer from './FetchReducer'

export default combineReducers({
  auth: AuthReducer,
  creationForm: CreationReducer,
  myCards: FetchReducer
});
