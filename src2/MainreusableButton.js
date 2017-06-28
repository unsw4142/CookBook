import React from 'react';
import { Alert, StyleSheet, View } from 'react-native';

import ReusableButton from './reusableButton';

function onPressButton(){
  Alert.alert('LERT', 'CHANGE THIS MESSAGE');
}

const MainreusableButton = ()=> (
  <View>
    <ReusableButton style = {styles.btn}> First </ReusableButton>
    <ReusableButton success style = {styles.btn}> Success </ReusableButton>
    <ReusableButton info style = {styles.btn}> Info </ReusableButton>
    <ReusableButton danger rounded style = {styles.btn}
    onPress = {onPressButton}> Rounded </ReusableButton>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    },
  btn: {
    margin: 10,
    },
  });
export default MainreusableButton;
