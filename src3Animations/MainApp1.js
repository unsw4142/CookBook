// Simple youtube icon motion
import React, { Component } from 'react';
import {
Animated,
Easing,
Dimensions,
StyleSheet,
} from 'react-native';

const { width, height } = Dimensions.get('window');
const youImage = require('../src/Images/001-youtube.png');
const imageWidth = 80;

export default class MainApp extends Component {
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
    this.animatedValue.setValue(width);
    Animated.timing(
      this.animatedValue,
      {
        toValue: -imageWidth,
        duration: 2000,
        easing: Easing.linear,
      }
    ).start(() => this.componentDidMount());
    // When finished, call the function itself
    // call either component Did Mount or startAnimation
  }
  render() {
    return(
      <Animated.Image
        style={[
        styles.image,
        { left: this.animatedValue },
        ]}
        source={youImage}
      />
      );
  }
}
const styles = StyleSheet.create({
image: {
height: imageWidth,
position: 'absolute',
// In the upper half
top: height/3,
width: imageWidth,
},
});
