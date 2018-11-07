//This reducer is in charge of anything to do with authentication,
// It has a case switch form login fail or success
//and for user input on the login screen
import {
  EMAIL_CHANGED,
  PASSWORD_CHANGED,
  LOGIN_USER_SUCCSS,
  LOGIN_USER_FAIL,
  LOGIN_USER_START
} from '../actions/types'

//The initial state of the login form is everything is empty and the loading attribute
// which is true to show the spinner component is false, this assumption is within the
// the initalState constant allowing me to reset the form depending on what actions have been performed
// depending on the type passed through our actions
const INITIAL_STATE = {
  email: '', password: '', user: null , error: '' , loading: false
 };

export default (state = INITIAL_STATE, action) => {
  console.log(action);

  switch (action.type){
    case EMAIL_CHANGED:
    //Take all props of exisiting state into this new object,
    //define email and add it to the state object so it overwrites what ever was in the current state
    // This is due react and state pointing to the same object so this way you trick it into checking
    // again and therefore updating our values
      return { ...state, email: action.payload };
    case PASSWORD_CHANGED:
      return { ...state, password: action.payload };
    case LOGIN_USER_SUCCSS:
      return { ...state, ...INITIAL_STATE, user: action.payload };
    case LOGIN_USER_FAIL:
      return { ...state, error: 'Login Failed', password: '', loading: false };
    case LOGIN_USER_START:
      return { ...state, loading: true, error: '' };
    default:
      return state;
  }
};
