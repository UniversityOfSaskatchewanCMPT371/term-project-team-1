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


  const wrapper = shallow(<ShowCard myCards= {
    /*I've just created a const of all the values and called the card with these values.
    I have to call it */
  { name:'Test',
    bio:'I like Cats.',
    pro:"Doctor",
    image:"Not Yet Implemented.",
    link: 'google.ca'}}/>);
  expect(wrapper).toMatchSnapshot();
});

test('it puts each item in the card correctly', () => {


  const wrapper = shallow(<ShowCard myCards= {
    /*I've just created a const of all the values and called the card with these values.
    I'm calling it like this for now as this works, but later I'd like to test and see if it works with putting them in one card and testing like that.
    --Jesse   */
  { name:'Test',
    bio:'I like Cats.',
    pro:"Doctor",
    image:"Not Yet Implemented.",
    link: 'google.ca'}}/>);
  const myProps = wrapper.props();
  console.log(myProps.children);

  const nameProp = myProps.children[0].props.children.props.children[4];
  /*name Log*/
  console.log("Name =" + myProps.children[0].props.children.props.children[4]);

  const bioProp = myProps.children[1].props.children.props.children;
  /*bio Log*/
  console.log("Bio =" + myProps.children[1].props.children.props.children);

  const proProp = myProps.children[0].props.children.props.children[0];
  /*profession log*/
  console.log("Profession =" + myProps.children[0].props.children.props.children[0]);

  const imageProp = myProps.children[3].props.children.props.children;
  /*image log*/
  console.log("Image =" + myProps.children[3].props.children.props.children);

  const linkProp = myProps.children[2].props.children.props.children;
  /*image log*/
  console.log("Link =" + myProps.children[2].props.children.props.children);

  /*
  You have to get the props of whatever is mounted
  then you gotta call that prop even though you just got it
  then you gotta get the prop of that prop.
  Note: You have to do some 'deep diving' into each child to get the prop to compare to.
  I'll console.log() these to show it's actually pulling out what I need, and put them each in their own prop.
  There has to be a better way then just deep reaching into each of these to get one prop; I'll investigate later if I have time.
  /*

  --Jesse*/
  expect(nameProp).toEqual('Test');
  expect(bioProp).toEqual('I like Cats.');
  expect(proProp).toEqual("Doctor")
  expect(linkProp).toEqual('google.ca');
  /* This one should actually NOT equal what we give it as it's hard coded to say "Image should be displayed here having trouble importing it"
  no matter what you put in*/
  expect(imageProp).not.toEqual("Not Yet Implemented.");
  //expect(wrapper).toMatchSnapshot();
});





  //const wrapper = shallow(<ShowCard/>);

  //expect(wrapper.find('card')).toBeDefined();

  //expect(wrapper).toMatchSnapshot();

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
