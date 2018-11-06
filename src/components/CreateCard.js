import React, { Component } from 'react' ;
import { Picker, Text } from 'react-native';
import { connect } from 'react-redux' ;
import { cardUpdate, cardCreate } from '../actions';
import { CardStyle, CardSectionStyle, Input, Button } from './common'

class CreateCard extends Component {

    onButtonPress () {
        const { name, bio, pro, image, link } = this.props;

        this.props.cardCreate({ name, bio, pro: pro || 'Doctor', image, link });
    }

  render () {
    console.log(this.props.myCards);
    return (
      <CardStyle>
        <CardSectionStyle>
        <Input
          label="Name"
          placeholder="Jane"
          value = {this.props.name}
          onChangeText={ value => this.props.cardUpdate({prop: 'name', value})}
        />
        </CardSectionStyle>

        <CardSectionStyle>
        <Input
          label="Bio"
          placeholder="I like cats."
          value= { this.props.bio}
          onChangeText={ value => this.props.cardUpdate({prop: 'bio', value})}
        />
        </CardSectionStyle>

        <CardSectionStyle>
          <Input
            label="Link"
            placeholder="web.com"
            value= { this.props.link}
            onChangeText={ value => this.props.cardUpdate({prop: 'link', value})}
          />
        </CardSectionStyle>

        <CardSectionStyle>
          <Text style= {styles.pickerTextStyle}> Select Profession</Text>
          <Picker
            style= {{ flex: 1 }}
            selectedValue={this.props.shift}
            onValueChange={value => this.props.cardUpdate({ prop: 'pro' , value })}
          >
            <Picker.Item label="Doctor" value="Doctor" />
            <Picker.Item label="Other" value="Other" />
          </Picker>
        </CardSectionStyle>



        <CardSectionStyle>
          <Button onPress= {this.onButtonPress.bind(this)}>
            Save
          </Button>
        </CardSectionStyle>

      </CardStyle>
    );
  }
}
const styles = {
  pickerTextStyle: {
    fontSize: 18,
    paddingLeft: 20
  }
};
const mapStateToProps = (state) => {
  const { name, bio, pro, image, link } = state.creationForm;

  return { name, bio, pro, image, link } ;
}
export default connect(mapStateToProps, {
  cardUpdate , cardCreate
}) (CreateCard);
