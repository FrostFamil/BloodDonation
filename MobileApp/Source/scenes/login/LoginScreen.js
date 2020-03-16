import React, {Component} from 'react';
import {View, Image, TextInput, Button, Text} from 'react-native';

const logoImage = require('../../assets/logoImage.png');

class LoginScreen extends Component {
  onLoginButtonPressed = () => {
    alert('Log In button pressed');
  };

  render() {
    return (
      <View
        style={{
          height: '100%',
          width: '100%',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <View
          style={{
            height: '60%',
            width: '100%',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}>
          <Image
            style={{width: '50%'}}
            resizeMode="contain"
            source={logoImage}
          />
          <View style={{width: '80%', height: '10%', justifyContent: 'space-between'}}>
              <TextInput placeholder="Email" style={{borderBottomColor: 'black', borderBottomWidth: 0.5}}/>
              <TextInput placeholder="Password" style={{borderBottomColor: 'black', borderBottomWidth: 0.5}}/>
          </View>
          <View style={{width: '100%', alignItems: 'center'}}>
            <Button
              title="Log In"
              style={{
                borderRadius: 20,
                width: '50%',
                justifyContent: 'center',
              }}
              onPress={this.onLoginButtonPressed}>
                Login
            </Button>
            <Button
              title="Registration"
              onPress={() => alert('Register button pressed')}
              style={{
                borderBottomColor: 'black',
                borderBottomWidth: 1,
                height: 35,
                marginTop: 10,
              }}>
                Registration
            </Button>
          </View>
        </View>
      </View>
    );
  }
}

export default LoginScreen;
