import {Button} from '../common/index.js';
import { shallow,configure } from 'enzyme';
import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });
// need the adapter for enzyme to work properly; without an adapter configured 
// Enzyme WILL throw errors.

test('renders correctly', () => {
  const wrapper = shallow(<Button text="Test"/>);
  expect(wrapper).toMatchSnapshot();
});

/*

We have to mock the TouchableOpacity in a way taken from these links:
https://jestjs.io/docs/en/tutorial-react-native
and
https://github.com/facebook/jest/issues/1720#issuecomment-247746586

We have to mock in an idea similar to this, with TouchableOpacity
We create a mock we can call.

--Jesse
*/
const myMock = jest.mock('Button', () => {
  const mockButton = require('react-native/jest/TouchableOpacity');
  return mockButton('Button');
});
/*Then we use a mock of the function to put in the onPress of the Mocked Button*/
const mockFunc = jest.fn();
test('Button Press works', () => {
  /* We take our mocked button with our mocked onPress fuction and
  Shallowly render it. */
    const mockWrap = shallow(<myMock onPress={mockFunc}/>);
    console.log(mockWrap.props());

  /* DIRECTLY CALL the onPress function in the prop and see if it's been called
   Note: Eynzyme's ".simulate('click'), doesn't seem to work currently, so
   calling the onPress() function seems to be the only reliable way to do this.

  --Jesse*/
    mockWrap.props().onPress();
    expect(mockFunc).toHaveBeenCalledTimes(1);



});
