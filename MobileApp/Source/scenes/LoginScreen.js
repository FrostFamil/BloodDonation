/* eslint-disable react/state-in-constructor */
import React, { Component } from 'react';
import {
  View, Image, TextInput, Button
} from 'react-native';
import LoginRequest from '../Requests/LoginRequest';

const logoImage = require('../assets/icon.png');

class LoginScreen extends Component {
  state = {
    email: '',
    password: ''
  }

  onLoginButtonPressed = () => {
    const { navigation } = this.props;
    const { email, password } = this.state;

    LoginRequest(email, password).then((res) => {
      if (res) {
        global.userId = res.userId;
        navigation.navigate('Home');
      } else {
        alert("Email or password is wrong");
      }
    });
  };

  onRegisterButtonPressed = () => {
    const { navigation } = this.props;
    navigation.navigate('Register');
  };

  render() {
    const { email, password } = this.state;
    return (
      <View
        style={{
          backgroundColor: 'white',
          height: '100%',
          width: '100%',
          alignItems: 'center',
          justifyContent: 'flex-start',
        }}
      >
        <View
          style={{
            height: '60%',
            width: '100%',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          <Image
            style={{ width: '50%' }}
            resizeMode="contain"
            source={logoImage}
          />
          <View style={{ width: '80%', height: '13%', justifyContent: 'space-between' }}>
            <TextInput
              testID="email"
              placeholder="Email"
              style={{ borderBottomColor: 'black', borderBottomWidth: 0.5 }}
              value={email}
              onChangeText={(text) => this.setState({ email: text })}
            />
            <TextInput
              testID="password"
              placeholder="Password"
              secureTextEntry
              style={{ borderBottomColor: 'black', borderBottomWidth: 0.5 }}
              value={password}
              onChangeText={(text) => this.setState({ password: text })}
            />
          </View>
          <View style={{ width: '100%', alignItems: 'center' }}>
            <Button
              testID="loginButton"
              title="Log In"
              style={{
                borderRadius: 20,
                width: '50%',
                justifyContent: 'center',
              }}
              onPress={this.onLoginButtonPressed}
            >
              Login
            </Button>
            <Button
              title="Registration"
              onPress={this.onRegisterButtonPressed}
              style={{
                borderBottomColor: 'black',
                borderBottomWidth: 1,
                height: 35,
                marginTop: 10,
              }}
            >
              Registration
            </Button>
          </View>
        </View>
      </View>
    );
  }
}

export default LoginScreen;
