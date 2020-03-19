import React, {Component} from 'react';
import {View, Image, TextInput, Button, Text} from 'react-native';

const logoImage = require('../assets/logoImage.png');

class LoginScreen extends Component {

  state = {
    email: '',
    password: ''
  }

  onLoginButtonPressed = () => {
    this.props.navigation.navigate('Home')
  };


  render() {
    return (
      <View
        style={{
          height: '80%',
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
          <View style={{width: '80%', height: '13%', justifyContent: 'space-between'}}>
              <TextInput 
                testID="email" 
                placeholder="Email" 
                style={{borderBottomColor: 'black', borderBottomWidth: 0.5}}
                value={this.state.email}
                onChangeText={text => this.setState({email: text})}
              />
              <TextInput 
                testID="password" 
                placeholder="Password" 
                secureTextEntry style={{borderBottomColor: 'black', borderBottomWidth: 0.5}}
                value={this.state.password}
                onChangeText={text => this.setState({password: text})}
              />
          </View>
          <View style={{width: '100%', alignItems: 'center'}}>
            <Button
              testID="loginButton"
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
