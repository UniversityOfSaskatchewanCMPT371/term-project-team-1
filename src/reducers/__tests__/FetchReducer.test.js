import FetchReducer from '../FetchReducer'
import React from 'react';
import { Reducer } from 'redux-testkit';
import configureStore from 'redux-mock-store';
import {connect} from 'react-redux';
import * as actions from '../../actions/types'


/*Idea to test reducers in this way taken from
https://hackernoon.com/redux-testing-step-by-step-a-simple-methodology-for-testing-business-logic-8901670756ce

--Jesse */
const initState2 = {};

  it('should have an initial state', () =>{
    expect(FetchReducer(undefined, {})).toEqual(initState2);
});

  it('should not affect state', () => {
    Reducer(FetchReducer).expect({type: 'NOT-EXISTING'}).toReturnState(initState2);
  });
