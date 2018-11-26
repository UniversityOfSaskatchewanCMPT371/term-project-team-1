import {Input} from '../common/index.js';
import { shallow,configure,mount } from 'enzyme';
import React from 'react';
import configureStore from 'redux-mock-store';
import {connect} from 'react-redux';
import Adapter from 'enzyme-adapter-react-16';
import sinon from "sinon";
//Imports to get Enzyme to work if possible -> will work on later
configure({ adapter: new Adapter() });

test('renders correctly with some random test input', () => {


  const wrapper = shallow(<Input Input= {
    /*I've just created a const of all the values and called the card with these values.
    I have to call it */
  { value:'TestInput' }}/>);
  expect(wrapper).toMatchSnapshot();
});

test('renders correctly with some japanese character test input', () => {


  const wrapper = shallow(<Input Input= {
    /*just call the value out of the input; is the only seemingly important part of the test */
  { value:'ドラゴンツリー' }}/>);
  expect(wrapper).toMatchSnapshot();
});

test('renders correctly with some arabic character test input', () => {


  const wrapper = shallow(<Input Input= {
    /*just call the value out of the input; is the only seemingly important part of the test */
  { value:'البلوط العظيم' }}/>);
  expect(wrapper).toMatchSnapshot();
});

test('renders correctly with some character input with spaces', () => {


  const wrapper = shallow(<Input Input= {
      /*just call the value out of the input; is the only seemingly important part of the test */
  { value:'The Quick Brown Fox Jumped Over the Lazy Dog' }}/>);
  expect(wrapper).toMatchSnapshot();
});

test('renders correctly with some input with hypenated input', () => {


  const wrapper = shallow(<Input Input= {
      /*just call the value out of the input; is the only seemingly important part of the test */
  { value:'Anne-Marie' }}/>);
  expect(wrapper).toMatchSnapshot();
});

test('renders correctly with some input with symbol input', () => {

  const wrapper = shallow(<Input Input= {
      /*just call the value out of the input; is the only seemingly important part of the test */
  { value:'$$@!&*(^)%%' }}/>);
  expect(wrapper).toMatchSnapshot();
});
