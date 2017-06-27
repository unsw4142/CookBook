import React, { Component } from 'react';
import {StyleSheet, Navigator,} from 'react-native';

// Using Navigator
import JokesHome from './Jokes/JokesHome';
//import JokesDetail from './Jokes/JokesDetail';


export default class Jokes extends Component {

  renderScene(route, navigation){
    if(route.joke){
      return(
        < JokesDetail joke = {route.song} navigator = {navigator} />
      );
    }
    // Otherwise
    return <JokesHome navigator = {navigator} />
  }

  render(){
    return(
      <Navigator
        ref = "navigator"
        style = {{flex: 1,}}
        configureScene = { (route) =>
          Navigator.SceneConfigs.FloatFromBottom }
        initialRoute = {{}}
        renderScene = {this.renderScene}
      />
    );
  }
}

const styles = StyleSheet.create({
  containes: {
    flex:1,
  },
})
