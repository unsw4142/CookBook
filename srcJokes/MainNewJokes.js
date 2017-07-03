import React, {Component} from 'react';
import {StyleSheet, Text, View,
  Alert, TouchableOpacity, Button, ScrollView} from 'react-native';

const REQUEST_URL = 'https://api.icndb.com/jokes/random.json';
export default class MainNewJokes extends Component{
  state = {
    jokes: ['Joke_1','Joke-2','#3','No.-4','LastbutNotLeast'],
  };


  removeContent = (i) =>{
    var arr = this.state.jokes;
    arr.splice(i,1);
    this.setState({jokes: arr});
  }
  // Passing functions as well
  // Key is used by react, we use index
  eachJoke = (Num,i) =>{
    return (<Joke key = {i} index = {i} removeJoke = {this.removeContent}> {Num} </Joke>);
  };

  render(){
    return(
      <ScrollView>
        {this.state.jokes.map(this.eachJoke)}
      </ScrollView>
    );
  }
}


// 2nd Class for each Joke
class Joke extends Component{
  constructor(props){
    super(props);
    this.state = {
      remove: false,
      newJoke: false,
      joke :'',
    };
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
    // call from another function
    this.props.removeJoke(this.props.index);
  };
  newJoke = () =>{
    this.setState({newJoke: true,});
    this.fetchJoke();
  };

  render(){
    const {joke} = this.state;
    return(

      <View style = {styles.container}>
        <Text style = {styles.title}>{this.props.children}</Text>
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
  title:{
    paddingTop: 20,
    marginBottom: 3,
    color: 'brown',
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
