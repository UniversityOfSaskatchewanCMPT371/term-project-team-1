import React, {Component} from 'react';
import { StyleSheet, Text, View, ActivityIndicator } from 'react-native';


function sum(a, b){
  const sumVal = a + b;
  return sumVal;
}
module.exports = sum;

export default class App extends Component {

  // constructor(props) {
  //   super(props);
  // }
  
  render() {
 	  return (
      <View style={styles.container}>
        <Text>{'sum of 3 and 2 = ' + this.sum(3,2)}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
});
