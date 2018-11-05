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
});

/*
It's a little weird how we have to do this.
We have to mock the TouchableOpacity in this way, it's taken from jest and from these links:
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

  /* Then we DIRECTLY CALL the onPress function in the prop and see if it's been called
  Note: I've tried this with .simulate('click'), which simulates a click function
  For some reason this doesn't actually simulate properly or simulate a button Press
  calling the onPress() function seems to be the only reliable way to do this.

  --Jesse*/
    mockWrap.props().onPress();
    expect(mockFunc).toHaveBeenCalledTimes(1);

/* And then this works!
I'll have to go on and see if this is a good enough test soon but it is in working order.
This should be good enough for now, at least, and it at least gives me proof of concept
on how to test function calls.

--Jesse*/    

});
