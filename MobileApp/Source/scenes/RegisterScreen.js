/* eslint-disable no-undef */
/* eslint-disable no-alert */
/* eslint-disable react/state-in-constructor */
import React, { Component } from 'react';
import {
  View, Image, Button, TextInput
} from 'react-native';
import RegisterRequest from '../Requests/RegisterRequest';

const logoImage = require('../assets/icon.png');

class RegistrationScreen extends Component {
    state = {
      firstName: '',
      lastName: '',
      email: '',
      password: ''
    };

    registerPressed = () => {
      const { navigation } = this.props;
      const {
        firstName, lastName, email, password
      } = this.state;

      RegisterRequest(firstName, lastName, email, password).then((res) => {
        if (res) {
          navigation.navigate('Login');
        } else {
          alert("Entered data is not in proper format");
        }
      });
    }

    render() {
      const { navigation } = this.props;
      const {
        firstName, lastName, email, password
      } = this.state;
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
              height: '70%',
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
            <View
              style={{
                height: '25%',
                width: '100%',
                paddingHorizontal: '10%',
                justifyContent: 'space-between',
              }}
            >
              <TextInput
                testID="firstName"
                placeholder="Frist Name"
                style={{ borderBottomColor: 'black', borderBottomWidth: 0.5 }}
                value={firstName}
                onChangeText={(text) => this.setState({ firstName: text })}
              />
              <TextInput
                testID="lastName"
                placeholder="Last Name"
                style={{ borderBottomColor: 'black', borderBottomWidth: 0.5 }}
                value={lastName}
                onChangeText={(text) => this.setState({ lastName: text })}
              />
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
                style={{ borderBottomColor: 'black', borderBottomWidth: 0.5 }}
                value={password}
                onChangeText={(text) => this.setState({ password: text })}
              />
            </View>
            <View style={{ width: '100%', alignItems: 'center' }}>
              <Button
                testID="registerButton"
                title="Register"
                style={{
                  borderRadius: 20,
                  width: '50%',
                  justifyContent: 'center',
                }}
                onPress={() => this.registerPressed()}
              >
                Register
              </Button>
              <Button
                testID="cancel"
                title="Cancel"
                onPress={() => navigation.navigate('Login')}
                style={{
                  borderBottomColor: 'black',
                  borderBottomWidth: 1,
                  height: 35,
                  marginTop: 10,
                }}
              >
                Cancel
              </Button>
            </View>
          </View>
        </View>
      );
    }
}

export default RegistrationScreen;
