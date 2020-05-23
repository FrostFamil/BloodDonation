/* eslint-disable no-console */
/* eslint-disable semi */
/* eslint-disable react/no-unused-state */
/* eslint-disable no-multi-spaces */
/* eslint-disable arrow-parens */
/* eslint-disable react/no-deprecated */
/* eslint-disable global-require */
import React, { Component } from 'react';
import {
  View, Image, Text, TouchableOpacity
} from 'react-native';
import { CardSection, SettingInput } from '../components';
import ProfileRequest from '../Requests/ProfileRequest';

export default class ProfileScreen extends Component {
  constructor(props) {
    super(props);

    this.state = {
      fName: '',
      lName: '',
      email: '',
      phone: '0'
    };
  }

  componentWillMount() {
    ProfileRequest(global.userId).then(res  => {
      console.log(res);
      this.setState({
        fName: res.result.first_name,
        lName: res.result.last_name,
        email: res.result.email,
        points: res.result.points
      })
    });
  }

  render() {
    const {
      fName, lName, email, points
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
            placeholder="0"
            label="Points:"
            value={points}
            onChangeText={(text) => this.setState({ points: text })}
          />
        </CardSection>

        <View style={styles.ButtonStyle}>
          <TouchableOpacity onPress={() => navigation.navigate('Home')}>
            <Text style={{ fontSize: 26, color: 'white' }}>Back</Text>
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
