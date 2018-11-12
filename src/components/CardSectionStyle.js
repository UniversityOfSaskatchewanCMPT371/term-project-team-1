import React from 'react';
import { View } from 'react-native';

//This component is used to stylize the different sections of the card no matter
//what is passed to it

const CardSectionStyle = (props) => {
  return (
  <View style={styles.containerStyle}>
    {props.children}
  </View>
  );
};

const styles = {
  containerStyle: {
      borderBottomWidth: 1,
      padding: 5,
      backgroundColor: '#fff',
      justifyContent: 'flex-start',
      flexDirection: 'row',
      borderColor: '#ddd',
      position: 'relative'
  }
};

export {CardSectionStyle};
