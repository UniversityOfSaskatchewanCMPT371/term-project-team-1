import React, { Component } from 'react';
import { Text, TouchableWithoutFeedback, View } from 'react-native' ;
import { Actions } from 'react-native-router-flux'
import { CardSectionStyle } from './common';


class ListItem extends Component {

  onRowPress() {
    Actions.showCard({ myCards: this.props.myCards });
  }

  render () {
    const { name, bio, pro } = this.props.myCards;

    return (
      <TouchableWithoutFeedback onPress={this.onRowPress.bind(this)}>
        <View>
          <CardSectionStyle>
            <Text style={styles.titleStyle}>
                {pro} {": "} {name}
            </Text>
          </CardSectionStyle>
        </View>
      </TouchableWithoutFeedback>
    );
  }

}

const styles = {
  titleStyle: {
    fontSize:18,
    paddingLeft:15
  }
}
export default ListItem;
