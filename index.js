//Code for ios

//Importing library to create components
import React from 'react';
import { AppRegistry, View } from 'react-native';
//importing components we made
import Header from './src/components/Header';
import CardsList from './src/components/CardsList';

//Creating the components
const App = () => (
  <View style={{flex: 1 }}>
  {/*This is component nesting of header while passing a prop in order to keep resuing different components
    This is where components are called in the view in order for them to be rendered!*/}
      <Header headerTitle = {'Cards and Albums'} />
      <CardsList />
  </View>
);


//Rendering on device
AppRegistry.registerComponent('tutorial', () => App);
