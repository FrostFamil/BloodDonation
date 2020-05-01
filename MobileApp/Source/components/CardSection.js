/* eslint-disable linebreak-style */
/* eslint-disable react/destructuring-assignment */
import React from 'react';
import { View } from 'react-native';


const CardSection = (props) => (
  // eslint-disable-next-line linebreak-style
  <View style={[style.containerStyle, props.style]}>
    {props.children}
  </View>
);

const style = {
  containerStyle: {
    borderBottomWidth: 1,
    padding: 5,
    backgroundColor: '#fff',
    justifyContent: 'flex-start',
    flexDirection: 'row',
    borderColor: '#ddd',
    position: 'relative',
  }
};

export default CardSection;
