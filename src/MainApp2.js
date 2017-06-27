import React, { Component } from 'react';
import {Image, View, Text, TouchableHighlight, StyleSheet} from 'react-native';

const play = require('./Images/play.png');

class MainApp2 extends Component {
  state = {
  liked: false,
  };
  _onPressBtn = () => {
    this.setState({
    liked: !this.state.liked,
    });
  }
  render() {
    const likedStyle = this.state.liked ? styles.icon :styles.liked;
    return (
      <View style={styles.container}>
        <TouchableHighlight style={styles.btn} underlayColor="#fefefe" >
        < Image source={play} style={styles.icon, likedStyle} />
        </TouchableHighlight>
        <Text style={styles.text}>Do you like this app ? </Text>
    </View>
    );}
}

const styles = StyleSheet.create({
container: {
marginTop: 50,
alignItems: 'center',
},
btn: {
borderRadius: 5,
padding: 10,
},
icon: {
width: 180,
height: 180,
tintColor: '#f1f1f1',
},
liked: {
width: 180,
height: 180,
tintColor: '#e74c3c',
},
text: {
marginTop: 20,
},
});

export default MainApp2;
