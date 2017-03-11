/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

export default class tntMobileApp extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to our Cross Platfrom Mobile App! 
        </Text>
        <Text style={styles.instructions}>
          Tan and Tech Mobile App Under Construction...
        </Text>
        <Text style={styles.instructions}>
          @Tan&Tech
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 20,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 150,
  },
});

AppRegistry.registerComponent('tntMobileApp', () => tntMobileApp);
