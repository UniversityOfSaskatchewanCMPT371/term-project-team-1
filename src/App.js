/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

 import React from 'react';
 import { StyleSheet, Text, View, ActivityIndicator } from 'react-native';

 export default class App extends React.Component {

      constructor(props) {
          super(props);
      }

    sum(a,b){
        const sumVal = a+b;
        return sumVal;
      }

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
