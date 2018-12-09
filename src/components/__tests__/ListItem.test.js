
import { shallow,configure,mount } from 'enzyme';
import React from 'react';
import configureStore from 'redux-mock-store';
import {connect} from 'react-redux';
import Adapter from 'enzyme-adapter-react-16';
import sinon from "sinon";
import ListItem from '../ListItem';
//Imports to get Enzyme to work if possible -> will work on later
configure({ adapter: new Adapter() });

test('renders correctly', () => {


  const wrapper = shallow(<ListItem myCards= {
    /*I've just created a const of all the values and called the card with these values.
    I have to call it */
  { name:'Test',
    bio:'I like Cats.',
    pro:"Doctor",
    image:"https://imgur.com/gallery/9vPpm4r"
  }
  }/>);
  expect(wrapper).toMatchSnapshot();
});

test('it puts each item in the list item correctly', () => {


  const wrapper = mount(<ListItem myCards= {
    /*I've just created a const of all the values and called the card with these values.
    I'm calling it like this for now as this works, but later I'd like to test and see if it works with putting them in one card and testing like that.
    --Jesse   */
  { name:'Steven',
    bio:'Fan of Matryoshka dolls and cicadas.',
    pro:"Physician",
    image:"https://imgur.com/gallery/9vPpm4r"
  }}/>);
  const myProps = wrapper.props();
  console.log(myProps);
  console.log('\n');
  const nameProp = myProps.myCards.name
  /*name Log*/
  console.log("Name =" + nameProp);

  const proProp = myProps.myCards.pro;
  /*profession log*/
  console.log("Profession =" + proProp);

  const imageProp = myProps.myCards.image;
  console.log("Image =" + imageProp);
  /*
  You have to get the props of whatever is mounted
  then you gotta call that prop even though you just got it
  then you gotta get the prop of that prop.
  Note: You have to do some 'deep diving' into each child to get the prop to compare to.
  I'll console.log() these to show it's actually pulling out what I need, and put them each in their own prop.
  T̶h̶e̶r̶e̶ ̶h̶a̶s̶ ̶t̶o̶ ̶b̶e̶ ̶a̶ ̶b̶e̶t̶t̶e̶r̶ ̶w̶a̶y̶ ̶t̶h̶e̶n̶ ̶j̶u̶s̶t̶ ̶d̶e̶e̶p̶ ̶r̶e̶a̶c̶h̶i̶n̶g̶ ̶i̶n̶t̶o̶ ̶e̶a̶c̶h̶ ̶o̶f̶ ̶t̶h̶e̶s̶e̶ ̶t̶o̶ ̶g̶e̶t̶ ̶o̶n̶e̶ ̶p̶r̶o̶p̶;̶ ̶I̶'̶l̶l̶ ̶i̶n̶v̶e̶s̶t̶i̶g̶a̶t̶e̶ ̶l̶a̶t̶e̶r̶ ̶i̶f̶ ̶I̶ ̶h̶a̶v̶e̶ ̶t̶i̶m̶e̶.
  EDIT:
  The better way is to just mount it like normal; it's a lot saner to call the props of the thing.
  Seems a little suspicious, I'll look at the snapshot later to make sure it's actually doing stuff.
  /*

  --Jesse*/

  expect(nameProp).toEqual('Steven');
  expect(proProp).toEqual("Physician");
  expect(imageProp).toEqual('https://imgur.com/gallery/9vPpm4r');

});
