import React from 'react';
import {View} from 'react-native';

//Trying to have a reusable amount of code basically takes the place of css
//Where we will have a certain uniform style that we will apply on all the cards that we will display.
const CardStyle = (props) => {
  return(
    <View style={styles.containerStyle}>
      {props.children}
    </View>
  );
};

const styles = {
  containerStyle: {
    borderWidth: 1,
    borderRadius: 2 ,
    borderColor: '#ddd',
    borderBottomWidth: 0,
    shadowColor: '#000',
    shadowOffSet: { width:0 , height:2 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 1,
    marginLeft: 5,
    marginRight: 5,
    marginTop: 10
  }
};
export default CardStyle;
