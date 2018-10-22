import CardDetail from '../CardDetail';
import { shallow,configure } from 'enzyme';
import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });
//Imports to get Enzyme to work if possible -> will work on later

test('renders correctly', () => {
  const wrapper = shallow(
    /*you can't write these out individually; you have to call
    the entire card structure and then destructure it, giving it
    each piece. Would be nice if we could call each piece separately
    (functions, whatever) because this kind of sucks.*/
    <CardDetail card={"Test","Artist",null,null,"google.ca"}/>

);
  expect(wrapper).toMatchSnapshot();
  //expect(tree).toMatchSnapshot();
});
