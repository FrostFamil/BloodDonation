/* eslint-disable global-require */
import React, { Component } from 'react';
import {
  View, Image, Text, TouchableOpacity
} from 'react-native';
import { CardSection, SettingInput } from '../components';

export default class ProfileScreen extends Component {
  constructor(props) {
    super(props);

    this.state = {
      fName: 'Jon',
      lName: 'Snow',
      email: 'jon@snow.com',
      phone: '12345'
    };
  }

  render() {
    const {
      fName, lName, email, phone
    } = this.state;
    const { navigation } = this.props;
    return (
      <View style={{ top: 100, justifyContent: 'center', alignItems: 'center' }}>
        <CardSection style={{ borderRadius: 30 }}>
          <Image
            source={require('../assets/avatar.png')}
            style={styles.ImageIconStyle}
          />
        </CardSection>

        <CardSection>
          <SettingInput
            testID="fname"
            placeholder="First Name"
            label="First Name:"
            value={fName}
            style={{ height: 40, width: 100 }}
            onChangeText={(text) => this.setState({ fName: text })}
          />
        </CardSection>

        <CardSection>
          <SettingInput
            testID="lname"
            placeholder="Last Name"
            label="Last Name:"
            value={lName}
            style={{ height: 40, width: 100 }}
            onChangeText={(text) => this.setState({ lName: text })}
          />
        </CardSection>

        <CardSection>
          <SettingInput
            testID="email"
            placeholder="user@gmail.com"
            label="Email:"
            value={email}
            style={{ height: 40, width: 100 }}
            onChangeText={(text) => this.setState({ email: text })}
          />
        </CardSection>

        <CardSection>
          <SettingInput
            testID="phone"
            placeholder="+(Country code) 50-465-34-43"
            label="Phone:"
            value={phone}
            onChangeText={(text) => this.setState({ phone: text })}
          />
        </CardSection>

        <View style={styles.ButtonStyle}>
          <TouchableOpacity onPress={() => navigation.navigate('Home')}>
            <Text style={{ fontSize: 30 }}>Back</Text>
          </TouchableOpacity>
        </View>

      </View>
    );
  }
}


const styles = {
  ImageIconStyle: {
    padding: 0,
    margin: 5,
    height: 80,
    width: 80,
    borderRadius: 30,
    resizeMode: 'stretch',
  },
  ButtonStyle: {
    top: 20,
    backgroundColor: '#f72b2b',
    width: 100,
    height: 35,
    alignItems: 'center',
    borderRadius: 30
  }
};
