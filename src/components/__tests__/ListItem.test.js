
import { shallow,configure,mount } from 'enzyme';
import React from 'react';
import configureStore from 'redux-mock-store';
import {connect} from 'react-redux';
import Adapter from 'enzyme-adapter-react-16';
import sinon from "sinon";
import ListItem from '../ListItem';
//Imports to get Enzyme to work if possible -> will work on later
configure({ adapter: new Adapter() });

test('1 equals 1', () => {
  expect(1).toEqual(1);
});
