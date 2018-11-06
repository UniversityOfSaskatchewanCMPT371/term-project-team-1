import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';
import {
  EMAIL_CHANGED,
  PASSWORD_CHANGED,
  LOGIN_USER_SUCCSS,
  LOGIN_USER_FAIL,
  LOGIN_USER_START
} from './types';

export const emailChanged = (text) => {
  return {
    type: EMAIL_CHANGED,
    payload: text
  };
};

// takes in a text object
export const passwordChanged = (text) => {
  return {
    type: PASSWORD_CHANGED,
    payload: text
  };
};

//takes in an object with two components of an email and a password
export const loginUser = ( {email,password }) => {
  //Due to async action we cant just run the auth function so we have to manually dispatch it after the user has
  //logged in so we use dispatch to manually do it
  return (dispatch) => {

    dispatch({type: LOGIN_USER_START});

    //If the user successfully logs in then we pass the type LOGIN_USER_SUCCSS and they user is in
    firebase.auth().signInWithEmailAndPassword(email,password)
      .then(user => loginUserSuccess(dispatch, user))
    //If the user is a new user and we dont have their email in our DB then we attempty to create a user
      .catch((error) => {
        console.log(error);
        firebase.auth().createUserWithEmailAndPassword(email, password)
        // then catches the success of the creation of the user and calls the helper method for successfull login
          .then (user => loginUserSuccess(dispatch, user))
          .catch(() => loginUserFail(dispatch));
      });
  };
};

const loginUserFail = (dispatch) => {
  dispatch({type: LOGIN_USER_FAIL});
}

//Helper method that handles the success of a logged in user
const loginUserSuccess = (dispatch, user) => {
  dispatch ({
    type: LOGIN_USER_SUCCSS,
    payload: user
  });
  Actions.main();
};
