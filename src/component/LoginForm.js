import React, { Component } from 'react';
import { Text } from 'react-native';
import firebase from 'firebase';
import { Button, Card, CardSection, Input, Spinner } from './commons';

class LoginForm extends Component {
  state = { email: '', pass: '', error: '', loading: false }
    onButtonPress() {
      const { email, pass } = this.state;
      this.setState({ error: '', loading: true });
      firebase.auth().signInWithEmailAndPassword(email, pass)
      .then(this.onLoginSuccess.bind(this))
      .catch(() => {
        firebase.auth().createUserWithEmailAndPassword(email, pass)
        .then(this.onLoginSuccess.bind(this))
        .catch(() => {
          this.setState({ error: 'Authentication Failed.', loading: false });
        });
      });
    }
    onLoginFail() {
      this.setState({ error: 'Authentication Failed.', loading: false });
    }
    onLoginSuccess() {
      this.setState({
        email: '',
        pass: '',
        loading: false,
        error: ''
      });
    }
    renderButton() {
      const { loading } = this.state;
      if (loading) {
        return (<Spinner size='small' />);
      }
      return (
          <Button onPress={this.onButtonPress.bind(this)}>
            Log in !!
          </Button>
      );
    }
    render() {
      const { errorTextStyle } = styles;
      return (
        <Card>
          <CardSection >
            <Input
              placeholder="user@email.com"
              value={this.state.email}
              onChangeText={email => this.setState({ email })}
              label="Email"
              secureEntry={false}
            />
          </CardSection>
          <CardSection >
            <Input
              placeholder="Password "
              value={this.state.pass}
              onChangeText={pass => this.setState({ pass })}
              label="Password"
              secureEntry
            />
          </CardSection>
          <Text style={errorTextStyle}>
            {this.state.error}
          </Text>
          <CardSection>
            {this.renderButton()}
          </CardSection>

        </Card>
      );
    }
}
const styles = {
  errorTextStyle: {
    fontSize: 20,
    alignSelf: 'center',
    color: 'red'
  }
};
export default LoginForm;
