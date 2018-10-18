//import library for the header components
//Importing library to create components
import React from 'react';
import { Text, View } from 'react-native';

//creating the header component with specefic properties ( functional component)
const Header = ({props}) => {
  //Initilizing the style of the header component
  const { textStyle , viewStyle } = styles;

  return (
    <View style={viewStyle}>
      <Text style={textStyle}>{props.headerTitle}</Text>
    </View>
  );
};
//Style of the header component
const styles = {
  viewStyle: {
    backgroundColor: '#F8F8F8',
    justifyContent: 'center',
    alignItems: 'center',
    height: 60,
    paddingTop: 15,
    shadowColor: '#000',
    shadowOffSet: { width: 0, height: 2},
    shadowOpacity: 0.2,
    elevation: 2,
    position: 'relative'

  },
  textStyle: {
    fontSize: 20
  }
};

//making it available to other parts of the app
export default Header ;
