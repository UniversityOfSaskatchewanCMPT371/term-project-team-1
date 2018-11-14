import React, {Component} from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import { emailChanged, passwordChanged, loginUser } from '../actions'
import { CardStyle, CardSectionStyle, Input,Button, Spinner } from './common';

//What the user sees when they first open the application,
//had to add some sort of authentication
// due to the seperation of the users info or else all users
//will retrieve all information from the database at all times
class LoginForm extends Component {
//Looks in the input field of the email and awaits any text to be written
  onEmailChange (text) {
    this.props.emailChanged(text);
  }
  //Looks in the input field of the password and awaits any text to be written
  onPasswordChange (text) {
    this.props.passwordChanged(text);
  }
//This is attached to the button login, once the user has input the correct information it attempts to login
  onButtonPress () {
    const { email , password } = this.props;

    this.props.loginUser ( {email, password }) ;
  }

  renderError() {
    //At default an error is false since its empty
    //if anything is added it will turn true and so it will render
    if (this.props.error) {
      return (
        <View style={{backgroundColor: 'white' }}>
          <Text style={styles.errorTextStyle}>
            {this.props.error}
          </Text>
        </View>
      );
    }
  }

  renderButton() {
    if (this.props.loading) {
      return <Spinner size="large" />;
    }
    return (
      <Button onPress={this.onButtonPress.bind(this)}>
        Login
      </Button>
    );
  }

  render (){
    return (
      <CardStyle>

      <CardSectionStyle>
      <Input
        label="Email"
        placeholder="user@gmail.com"
        onChangeText={this.onEmailChange.bind(this)}
        value={this.props.email}
      />
      </CardSectionStyle>

      <CardSectionStyle>
      <Input
        secureTextEntry
        label="Password"
        placeholder="password"
        onChangeText={this.onPasswordChange.bind(this)}
        value={this.props.password}
      />
      </CardSectionStyle>

      {this.renderError()}

      <CardSectionStyle>
        {this.renderButton()}
      </CardSectionStyle>

      </CardStyle>
    );
  }
}

const styles = {
  errorTextStyle: {
    fontSize: 20,
    alignSelf: 'center',
    color: 'red'
  }
}

//A function in which accesses all our reducers which modify our state
// and then we use the redux connect function to update that state
const mapStateToProps = ({auth}) => {
  const { email, password, error, loading } = auth;

  return { email, password, error, loading };
};

export default connect(mapStateToProps, {
  emailChanged, passwordChanged,loginUser
}) (LoginForm);
