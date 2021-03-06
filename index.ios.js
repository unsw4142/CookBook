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
import MainAppList from './src/MainAppList';
import TabsComponent from './src/tabsComponent';
import Jokes from './src/jokes';
import MainJoke from './srcJokes/MainJoke';
import MainUniversalApp from './src2/MainUniversalApp';
import MainApp1 from './src3Animations/MainApp1';
import MainApp2MultiAnm from './src3Animations/MainApp2MultiAnm';
import MainRemoveList from './src3Animations/MainRemoveList';
import MainStoreDataLocal from './src4/MainStoreDataLocal';
import MainRemoteApi from './src4/MainRemoteApi';
import MainSendData from './src4/MainSendData';
import MainNewJokes from './srcJokes/MainNewJokes';
export default class LoadingImages extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to React Native!
        </Text>
        <Text style={styles.instructions}>
          To get started, edit index.ios.js
        </Text>
        <Text style={styles.instructions}>
          Press Cmd+R to reload,{'\n'}
          Cmd+D or shake for dev menu
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
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('LoadingImages', () => MainNewJokes);
