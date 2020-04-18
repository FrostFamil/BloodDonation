import React, {Component} from 'react';
import {View, Image, Button, TextInput, Text} from 'react-native';

const logoImage = require('../assets/icon.png');

class RegistrationScreen extends Component {
    state = {
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        confirmPassword: ''
    };

  render() {
    const {navigation} = this.props;
    return (
      <View
        style={{
          backgroundColor: 'white',
          height: '100%',
          width: '100%',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <View
          style={{
            height: '70%',
            width: '100%',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}>
          <Image
            style={{width: '50%'}}
            resizeMode="contain"
            source={logoImage}
          />
          <View 
            style={{
                height: '40%',
                width: '100%',
                paddingHorizontal: '10%',
                justifyContent: 'space-between',
            }}
          >
            <TextInput 
                testID="firstName" 
                placeholder="Frist Name" 
                style={{borderBottomColor: 'black', borderBottomWidth: 0.5}}
                value={this.state.firstName}
                onChangeText={text => this.setState({firstName: text})}
            />
            <TextInput 
                testID="lastName" 
                placeholder="Last Name" 
                style={{borderBottomColor: 'black', borderBottomWidth: 0.5}}
                value={this.state.lastName}
                onChangeText={text => this.setState({lastName: text})}
            />
            <TextInput 
                testID="lastName" 
                placeholder="Last Name" 
                style={{borderBottomColor: 'black', borderBottomWidth: 0.5}}
                value={this.state.lastName}
                onChangeText={text => this.setState({lastName: text})}
            />
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
                style={{borderBottomColor: 'black', borderBottomWidth: 0.5}}
                value={this.state.password}
                onChangeText={text => this.setState({password: text})}
            />
            <TextInput 
                testID="confirmPassword" 
                placeholder="Confirm Password" 
                style={{borderBottomColor: 'black', borderBottomWidth: 0.5}}
                value={this.state.confirmPassword}
                onChangeText={text => this.setState({confirmPassword: text})}
            />
          </View>
          <View style={{width: '100%', alignItems: 'center'}}>
            <Button
              testID="registerButton"
              title="Register"
              style={{
                borderRadius: 20,
                width: '50%',
                justifyContent: 'center',
              }}
              onPress={() => alert('Register button pressed')}>
                Register
            </Button>
            <Button
              testID='cancel'
              title="Cancel"
              onPress={() => navigation.navigate('Login')}
              style={{
                borderBottomColor: 'black',
                borderBottomWidth: 1,
                height: 35,
                marginTop: 10,
              }}>
                Cancel
            </Button>
          </View>
        </View>
      </View>
    );
  }
}

export default RegistrationScreen;
