import React, { Component } from 'react' ;
import { Picker, Text, Image } from 'react-native';
import { connect } from 'react-redux' ;
import { cardUpdate, cardCreate } from '../actions';
import Hyperlink from 'react-native-hyperlink' ;
import { CardStyle, CardSectionStyle, Input, Button } from './common'

//Retrieve the properties of a single card as an object and
// display that specefic card onto a seperate screen which was required for "more info"
class ShowCard extends Component {

    onButtonPress () {
        const { name, bio, pro, image, link } = this.props;
    }

  render () {
  console.log(this.props.myCards);
  const { name, bio, pro, image, link } = this.props.myCards;

    return (
      <CardStyle>
        <CardSectionStyle>
          <Text style={styles.titleStyle}>
              {pro} {": "} {name}
          </Text>
        </CardSectionStyle>

        <CardSectionStyle>
          <Text style={styles.titleStyle}>
              {bio}
          </Text>
        </CardSectionStyle>

        <CardSectionStyle>
          <Text style={styles.titleStyle}>
              {link}
          </Text>
        </CardSectionStyle>

        <CardSectionStyle>
        <Image
         style ={styles.mainImageStyle}
         source= {{uri: image }}
         />
      </CardSectionStyle>

      </CardStyle>
    );
  }
}
const styles = {
  titleStyle: {
    fontSize:18,
    paddingLeft:15
  },
  mainImageStyle: {
    height: 300,
    flex: 1,
    width: null
  }
};
const mapStateToProps = (state) => {
  const { name, bio, pro, image, link } = state.myCards;

  return { name, bio, pro, image, link } ;
}
export default ShowCard;
