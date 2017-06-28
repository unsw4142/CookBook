import React from 'react';
import { Alert, StyleSheet, View } from 'react-native';

import Button from './Button';

function onPressButton(){
  fetch('https://api.icndb.com/jokes/random.json')
        // then this
        .then((response) => response.json())
        .then(resJSON => {
          Alert.alert('Joke', resJSON.value.joke);})
        .catch((error) => {
          console.error(error);
        });

}

const MainJoke = ()=> (
  <View>
    <Button style = {styles.btn} onPress = {onPressButton}> Joke- Click Me </Button>
    <Button success style = {styles.btn} onPress = {onPressButton}> BeTter JoKE </Button>
    <Button info style = {styles.btn} onPress = {onPressButton}> dead JOKE </Button>
    <Button danger rounded style = {styles.btn}
    onPress = {onPressButton}> Smart Jokes </Button>
    <Button rounded style = {styles.btn}
    onPress = {onPressButton}> Best Joke </Button>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    },
  btn: {
    margin: 20,
    },
  });
export default MainJoke;
