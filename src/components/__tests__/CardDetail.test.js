import CardDetail from '../CardDetail';
import { shallow,configure } from 'enzyme';
import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import Adapter from 'enzyme-adapter-react-16';
import sinon from "sinon";
configure({ adapter: new Adapter() });
//Imports to get Enzyme to work if possible -> will work on later
const spy = sinon.spy();

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


/* Test idea modified from
https://medium.com/@indvinoth/react-native-how-to-test-onpress-event-using-jest-1cb19115863e
thanks!
Note: Doesn't work.... I'll have to figure out how to test the button.
*/
/*test('Button Works Correctly', () => {
  const onPressEvent = jest.fn();
  onPressEvent.mockReturnValue('Link on press');
  const wrapper = shallow(<CardDetail card={"Test","Artist",null,null,"google.ca"} onPress={onPressEvent}/>);

  wrapper.find(Button).first().props().onPress();
  expect(onPressEvent.mock.calls.length).toBe(1);
});*/


//Alternate way to test; testing via mocking and sinon and Enzyme
  //This is a path I want to look at later as it seems like a much more solid way to show things have been tested
  //However, the issue is that it doesn't work, so I gotta go with a more suboptimal test.

 /*var mock = jest.mock('TouchableHighlight', () =>{
   const mockComponent = require('jest-react-native');
  return mockComponent('TouchableHighlight');
  });

   const spy = sinon.spy();
   const wrapper = shallow( <CardDetail card={"Test","Artist",null,null,"google.ca"}
                              onPress={spy}/>);
  find div and simulate click
    wrapper
     .find("Button")
        .simulate("press");
          expect(spy.calledOnce).toBe(true);
      expect(spy).to.have.property('callCount',1);
      expect(spy.calledWith(1)).to.equal(true);
      ensure it was clicked.
    /expect(spy.calledOnce).toBe(true);
  });*/
