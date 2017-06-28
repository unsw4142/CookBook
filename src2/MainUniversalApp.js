import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';

import Dimensions from './DimensionsUniversalApp';

export default class MainUniversalApp extends Component{
  renderMaster(){
    return(<Text>Render on phone and tablets!!</Text>);
  }
  renderDetail(){
    if(Dimensions.isTablet()){
      return (
        <Text>  Render on tablets only!!</Text>
        );
    }
  }
  render(){
    return (
      <View style={styles.content}>
        {this.renderMaster()}
        {this.renderDetail()}
      </View>
    );
  }
}

const styles = StyleSheet.create({
content: {
  flex: 1,
  flexDirection: 'row',
  },
});
