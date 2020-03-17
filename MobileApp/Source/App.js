import React from 'react';
import { StyleSheet, View } from 'react-native';
import Navigator from './navigations';
import LoginScreen from './scenes/LoginScreen';

export default function App() {
  return (
    <View style={styles.container}>
      <Navigator />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
