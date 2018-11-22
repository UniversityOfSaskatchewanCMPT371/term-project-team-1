import {Header} from '../common/index.js';
import { shallow,configure,mount } from 'enzyme';
import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });
// need the adapter for enzyme to work properly; without an adapter configured
// Enzyme WILL throw errors.


test('renders correctly', () => {
  const wrapper = shallow(<Header headerTitle="This is a title"/>);
  expect(wrapper).toMatchSnapshot();
  //expect(tree).toMatchSnapshot();
});
