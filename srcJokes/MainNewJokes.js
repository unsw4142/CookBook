import React, {Component} from 'react';
import {StyleSheet, Text, View,
  Alert, TouchableOpacity, Button, ScrollView} from 'react-native';

const REQUEST_URL = 'https://api.icndb.com/jokes/random.json';
export default class MainNewJokes extends Component{
  state = {
    jokes_id: [1,2,3,4,5],
  };
//  dothis(){

//  }
  //{this.state.jokes_id.map(dothis())}
  render(){
    return(
      <ScrollView>
        <Joke />
        <Joke />
        <Joke />
        <Joke />
        <Joke />
      </ScrollView>
    );
  }
}

class Joke extends Component{
  state = {
    remove: false,
    newJoke: false,
    joke :'',
  };

  alert(){
    Alert.alert('Joke', 'HI')
  };
  componentWillMount(){
    this.fetchJoke();
  }

  fetchJoke() {
    fetch(REQUEST_URL)
          .then((response) => response.json())
          .then((responseData) =>{
            this.setState({
              joke: responseData.value.joke,
            });
          }).done();
  }
  remove = () => {
    this.setState({remove: true,});
  };
  newJoke = () =>{
    this.setState({newJoke: true,});
  };

  render(){
    const {joke} = this.state;
    return(

      <View style = {styles.container}>
        <Text style = {styles.text}>{joke}</Text>
        <View style = {{flexDirection : 'row'}} >
          <Button style = {[{},styles.btn,styles.remove]} title = "Remove" onPress = {this.remove} />
          <Button style = {styles.btn} title = "NewJoke" onPress = {this.newJoke} />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    //backgroundColor: 'skyblue',
    },
  text: {
    padding: 10,
    marginTop: 20,
  },
  btn: {
    margin: 10,
    padding: 10,
    borderRadius: 3,
    },
  remove:{
    color : 'black',
    backgroundColor: 'red',
  },
});
