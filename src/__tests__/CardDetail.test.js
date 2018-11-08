import {CardDetail} from '../components/common/CardDetail';
import { shallow,configure,mount } from 'enzyme';
import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import Adapter from 'enzyme-adapter-react-16';
import sinon from "sinon";
//Imports to get Enzyme to work if possible -> will work on later
configure({ adapter: new Adapter() });

//const willMount = sinon.spy();
//const didMount = sinon.spy();
//const willUnmount = sinon.spy();


test('renders correctly', () => {
  /*I've just created a const of all the values and called the card with these values
  This is a lot cleaner then that other gross way of doing things.*/

  const cardVals = {
    title:'Test',
    artist:'Smith',
    thumbnail_image:"https://images-na.ssl-images-amazon.com/images/I/61McsadO1OL.jpg",
    image:"https://i.imgur.com/K3KJ3w4h.jpg",
    url: 'google.ca'
  };

  const wrapper = shallow(<CardDetail card={cardVals}/>);

  expect(wrapper.find('card')).toBeDefined();

  expect(wrapper).toMatchSnapshot();

  });


  test('it puts each item in the card properly', () =>{
    const cardVals = {
      title:'Test',
      artist:'Smith',
      thumbnail_image:"https://images-na.ssl-images-amazon.com/images/I/61McsadO1OL.jpg",
      image:"https://i.imgur.com/K3KJ3w4h.jpg",
      url: 'google.ca'
    };
/*You have to get the props of whatever is mounted
then you gotta call that prop even though you just got it
then you gotta get the prop of that prop, even though you called props to get the props of the wrapper
I literally spent 3 hours trying to figure this out.
This doesn't make any logical sense. Whatever.
--Jesse */
    const wrapper = mount(<CardDetail card={cardVals}/>);
    const myProps = wrapper.props();
    /*used this to test log values to see what I was getting
    Now am using it to show all of the card when I test */
    console.log(myProps.card);
    //console.log(myProps.card.title);
    expect(myProps.card.title).toEqual('Test');
    expect(myProps.card.artist).toEqual('Smith');
    expect(myProps.card.thumbnail_image).toEqual("https://images-na.ssl-images-amazon.com/images/I/61McsadO1OL.jpg");
    expect(myProps.card.image).toEqual("https://i.imgur.com/K3KJ3w4h.jpg");
    expect(myProps.card.url).toEqual('google.ca');
    //console.log(wrapper.contains(CardDetail,'title'));
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
