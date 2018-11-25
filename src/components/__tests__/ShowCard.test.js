import { shallow,configure,mount } from 'enzyme';
import React from 'react';
import configureStore from 'redux-mock-store';
import {connect} from 'react-redux';
import Adapter from 'enzyme-adapter-react-16';
import sinon from "sinon";
import ShowCard from '../ShowCard';
//Imports to get Enzyme to work if possible -> will work on later
configure({ adapter: new Adapter() });

//const willMount = sinon.spy();
//const didMount = sinon.spy();
//const willUnmount = sinon.spy();


test('renders correctly', () => {
  const myCard = {
    name:'Test',
    bio:'Smith',
    pro:"https://images-na.ssl-images-amazon.com/images/I/61McsadO1OL.jpg",
    image:"https://i.imgur.com/K3KJ3w4h.jpg",
    link: 'google.ca'
  };

  const wrapper = shallow(<ShowCard myCards= {
  { name: "Smith",
    bio:'Smith',
    pro:"https://images-na.ssl-images-amazon.com/images/I/61McsadO1OL.jpg",
    image:"https://i.imgur.com/K3KJ3w4h.jpg",
    link: 'google.ca'}}/>);
  expect(wrapper).toMatchSnapshot();
  //expect(tree).toMatchSnapshot();
});

  /*I've just created a const of all the values and called the card with these values
  This is a lot cleaner then that other gross way of doing things.*/



  //const wrapper = shallow(<ShowCard/>);

  //expect(wrapper.find('card')).toBeDefined();

  //expect(wrapper).toMatchSnapshot();


  /*test('it puts each item in the card properly', () =>{
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
--Jesse
    const wrapper = mount(<CardDetail card={cardVals}/>);
    const myProps = wrapper.props();
    /*used this to test log values to see what I was getting
    Now am using it to show all of the card when I test
    console.log(myProps.card);
    //console.log(myProps.card.title);
    expect(myProps.card.title).toEqual('Test');
    expect(myProps.card.artist).toEqual('Smith');
    expect(myProps.card.thumbnail_image).toEqual("https://images-na.ssl-images-amazon.com/images/I/61McsadO1OL.jpg");
    expect(myProps.card.image).toEqual("https://i.imgur.com/K3KJ3w4h.jpg");
    expect(myProps.card.url).toEqual('google.ca');
    //console.log(wrapper.contains(CardDetail,'title'));
});
*/

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
