import React, { Component } from 'react';
import { Text, TouchableWithoutFeedback, View } from 'react-native' ;
import { Actions } from 'react-native-router-flux'
import { CardSectionStyle } from './common';

//Retrieves a list of items for a specefic user which is specefied
// through firebase and userId
class ListItem extends Component {

//If the row of the card is pressed then we pass over the props of that card
// to the showCard file which then is rendered due to our Router.js component navigating
// to that screen through the Action method
  onRowPress() {
    Actions.showCard({ myCards: this.props.myCards });
  }

//Render every card
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
