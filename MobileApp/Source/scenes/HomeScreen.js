import React, {Component} from 'react';
import {View, Image, TextInput, Button, Text} from 'react-native';

const logoImage = require('../assets/logoImage.png');

class HomeScreen extends Component {
  onLoginButtonPressed = () => {
    alert('Log In button pressed');
  };

  render() {
    return (
    <View>
        <Text>sikim</Text>
    </View>
    );
  }
}

export default HomeScreen;
