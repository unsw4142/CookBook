import React, { Component, PropTypes } from 'react';
import {
StyleSheet,
View,
Image,
Text,
ScrollView,
TouchableHighlight,
TouchableOpacity,
} from 'react-native';

const {array, string, object, bool, func, any} = PropTypes;

import Base, { Default, Danger, Info, Success } from './StylereusableButton';

export default class ReusableButton extends Component {
  // Here we are goint to use PropTypes to check the input data

  static propTypes = {
    children: any,
    danger: bool,
    info: bool,
    style: View.propTypes.style,
    success: bool,
    onPress: func,
  }
  getTheme() {
    const { danger, info, success} = this.props;
    if(info){ return Info;}
    if(danger){return Danger;}
    if(success) {return Success;}
    return Default;
  }

  render(){
    const theme = this.getTheme();
    const {
      children,
      onPress,
      style,
      rounded,
    } = this.props;

    return(
      <TouchableOpacity style = {[Base.main, theme.main,
        rounded?Base.rounded:null, style,]}
        onPress = {onPress}
      >
        <Text style={[Base.label, theme.label]}>{children}</Text>
      </TouchableOpacity>
    );
  }
}
