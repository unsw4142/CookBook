import React, { Component } from 'react';
import {
View,
Animated,
Image,
Easing,
Dimensions,
StyleSheet,
} from 'react-native';

const { width, height } = Dimensions.get('window');
const youImage = require('../src/Images/001-youtube.png');
const whatImage = require('../src/Images/002-whatsapp.png');
const fbImage = require('../src/Images/003-facebook.png');

const youWidth = 60;

export default class MainApp2MultiAnm extends Component {
  componentWillMount() {
    // Animated.Value is the class that handles the animation value for each frame
    // Create a instance of the class when it is created
    this.animatedValue = new Animated.Value();
    // Or Use Constuctor or default prop
  }
  componentDidMount() {
    // Run when it is fully rendered,
    // Now to start animation, call the start Animation from here
    this.startAnimation();
  }
  startAnimation () {
    // Create a loop, created the animated Value
    this.animatedValue.setValue(1);
    Animated.timing(
      this.animatedValue,
      {
        toValue: 0,
        duration: 4000,
        easing: Easing.linear,
      }
    ).start(() => this.startAnimation());
    // When finished, call the function itself
    // call either component Did Mount or startAnimation
  }
  render() {
    const left1 = this.animatedValue.interpolate({
      inputRange: [0, 1],
      outputRange: [-youWidth, width],
    });
    const left2 = this.animatedValue.interpolate({
      inputRange: [0, 1],
      outputRange: [-youWidth*5, width + youWidth*5],
    });
    return(
      <View>
        <Animated.Image
        style={[
        styles.cloud1,
        {left: left1},
        ]}
        source={youImage}
        />
        <Animated.Image
        style={[
        styles.cloud1,
        styles.cloud2,
        {left: left1},
        ]}
        source={whatImage}
        />
        <Image
        style={[
        styles.cloud1,
        styles.plane,
        ]}
        source={fbImage}
        />
        </View>
        );
  }
}
const styles = StyleSheet.create({
  cloud1: {
    position: 'absolute',
    width: youWidth,
    height: youWidth,
    top: height/3 - youWidth/2,
  },
  cloud2: {
    width: youWidth*1.5,
    height: youWidth*1.5,
    top: height/2,
  },
  plane: {
    width: youWidth*1.3,
    height: youWidth*1.3,
    top: height/2 - youWidth,
    left: width/2 - youWidth/2,
  }
  });
