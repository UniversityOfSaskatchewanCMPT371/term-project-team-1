import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';

import {
  CARD_UPDATE,
  CARD_CREATED,
  CARDS_FETCH_SUCCESS
} from './types'

//expected with an object with a prop and value key
export const cardUpdate = ( {prop, value }) => {
  return {
    type: CARD_UPDATE,
    payload: { prop, value }
  };
};

//This is the action that is supposed to occur when the
//user scans a QR scanner, this writes the information of that
// Physician onto that users id and therefore would be able
// to access the same cards with their login ID
export const cardCreate = ({ name, bio, pro, image, link }) => {
  //console.log({ name, bio, pro, image, link });
  const { currentUser } = firebase.auth();
  //This saves the information into the usersId
  return (dispatch) => {
  firebase.database().ref(`/users/${currentUser.uid}/myCards`)
    .push({name, bio, pro, image, link})
    .then(() => {
      dispatch({type: CARD_CREATED});
      Actions.pop()
    });
  };
};


export const fetchCard = ( id ) => {
  return (dispatch) => {
    const { currentUser } = firebase.auth();
    firebase.database().ref(`/data/Cards/{id}`)
      .on('value', snapshot => {
        dispatch( {type: CARDS_FETCH_SUCCESS, payload: snapshot.val()});
      });
  };
};


//Go grab the cards that we have in our specefic user if any new value has been added
//so if a user scans a new scanner their list of cards will update automatically
export const fetchMyCards = () => {
  return (dispatch) => {
    const { currentUser } = firebase.auth();
    firebase.database().ref(`/users/${currentUser.uid}/myCards`)
      .on('value', snapshot => {
        dispatch( {type: CARDS_FETCH_SUCCESS, payload: snapshot.val()});
      });
  };
};
