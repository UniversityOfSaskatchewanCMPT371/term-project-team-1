import AuthReducer from '../AuthReducer'
import React from 'react';
import { Reducer } from 'redux-testkit';
import configureStore from 'redux-mock-store';
import {connect} from 'react-redux';
import * as actions from '../../actions/types'


/*Idea to test reducers in this way taken from
https://hackernoon.com/redux-testing-step-by-step-a-simple-methodology-for-testing-business-logic-8901670756ce

--Jesse */
const initState = {
  email:'',
  password:'',
  user: null,
  error:'',
  loading: false
};

  it('should have an initial state', () =>{
    expect(AuthReducer(undefined, {})).toEqual(initState);
});

  it('should not affect state', () => {
    Reducer(AuthReducer).expect({type: 'NOT-EXISTING'}).toReturnState(initState)
  });

  /*it('should store changed states', () =>{
    //const loginInfo = {email: 'blank@test.com', password: 'hunter2'};
    emailInfo = {email: 'blank@test.com'};
    const action = {type: actions.EMAIL_CHANGED, emailInfo};
    Reducer(AuthReducer).expect(action).toReturnState(emailInfo);
  });*/
