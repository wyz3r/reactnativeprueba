import React, { Component } from 'react';
import { View, Text } from 'react-native';
import firebase from 'firebase';
import { Header, Button, CardSection, Spinner } from './component/commons';
import LoginForm from './component/LoginForm';


class App extends Component {
  state = {
    loggedIn: null
  }
    componentWillMount() {
      firebase.initializeApp({
        apiKey: 'AIzaSyByh7HX99xsFhRPMk96OBp_EDZDG5unANw',
        authDomain: 'auth-72e43.firebaseapp.com',
        databaseURL: 'https://auth-72e43.firebaseio.com',
        projectId: 'auth-72e43',
        storageBucket: 'auth-72e43.appspot.com',
        messagingSenderId: '373677998017'
      });
      firebase.auth().onAuthStateChanged((user) => {
        if (user) {
            this.setState({ loggedIn: true });
        }
        else {
          this.setState({ loggedIn: false });
        }
      });
    }
    renderContent() {
      const { loggedIn } = this.state;
      switch (loggedIn) {
        case true:
        return (
          <CardSection>
            <Button onPress={() => firebase.auth().signOut()} >
            !!  Log Out !!
            </Button>
          </CardSection>
        );
        case false:
          return <LoginForm />;
        case null:
          return (<CardSection><Spinner size="large" /></CardSection>);
        default:

      }
    }
    render() {
      return (
        <View>
          <Header headerText="Authentication" />
        { this.renderContent() }
        </View>
      );
    }
}

export default App;
