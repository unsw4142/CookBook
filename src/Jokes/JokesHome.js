import React, { Component } from 'react';
import {
StyleSheet,
View,
Image,
Text,
ScrollView,
TouchableHighlight,
} from 'react-native';

class JokesHome extends Component {
  state = {
    Jokes_1 : {
      title: 'Jokes List One',
      uri: '',
      jokes: [],
    },
    Jokes_2 : {
      title: 'Jokes List Two',
      uri: '',
      jokes: [],
    },
    Jokes_3 : {
      title: 'Jokes List Three',
      uri: '',
      jokes: [],
    },
};
// pass the detail of the object to the navigator
onSelectJoke(joke){
  this.props.navigator.push({joke});
}

renderJoke(section,joke,i){
  // TouchableHighlight -- on touch
  return(
    <TouchableHighlight onPress = {() => this.onSelectJoke(joke)}
    style = {{}} key = {i}>
      <View>
        <Text style ={{}}> {joke.title} </Text>
      </View>
    </TouchableHighlight>
  );
}

renderSection(options){
  return(
    <View>
    <Text> {options.title.toUpperCase()} </Text>
    <ScrollView>
    {
      options.jokes.map((song,i)=>this.renderJoke(options, song, i))
    }
    </ScrollView>
    </View>
  );
}
// For ease of writing, define the state variable
render() {
  const { Jokes_1, Jokes_2, Jokes_3, } = this.state;
  return (
    <View>
      <Text style = {{}}> Home</Text>
      {this.renderSection(Joke_1)}
      {this.renderSection(Joke_2)}
      {this.renderSection(Joke_3)}
    </View>
  );
}
}
export default JokesHome;
