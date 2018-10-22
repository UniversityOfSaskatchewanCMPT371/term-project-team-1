import Button from '../Button';
import { shallow,configure } from 'enzyme';
import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });
//Imports to get Enzyme to work if possible -> will work on later


test('renders correctly', () => {
  const wrapper = shallow(<Button text="Test"/>);
  expect(wrapper).toMatchSnapshot();
  //expect(tree).toMatchSnapshot();
});
