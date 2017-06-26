import React, { Component } from 'react';
import {
StyleSheet,
View,
Image,
Text,
TabBarIOS
} from 'react-native';

const homeIcon = require('./images/button_kill.png');
const favIcon = require('./images/play.png');
const blogIcon = require('./images/youtube.png');
const profileIcon = require('./images/button_kill.png');

class tabComponent extends Components{
  state = {
    selected:'home',
  };
  selectTab(id){

  }
  renderTab(options){
    return(
      <TabBarIOS.item
        title = {options.title}
        selected = {this.state.selected ===  options.id}
        onPress= {() => this.selectTab}
        icon = {options.icon}

    );
  }
  render(){
    return(
      <TabBarIOS tintColor = "#42b49a">
        {this.renderTab({title: 'Home', id: 'home', icon: homeIcon})}
        {this.renderTab({title: 'Favorites', id: 'favorites', icon: favIcon})}
        {this.renderTab({title: 'Blog', id: 'blog', icon: blogIcon})}
        {this.renderTab({title: 'Profile', id: 'profile', icon: profileIcon})}
      </TabBarIOS>
    );
  }
}


const styles = StyleSheet.create({
container: {
flex: 1,
alignItems: 'center',
justifyContent: 'center',
},
title: {
fontSize: 20,
marginTop: 20,
},
icon: {
width: 30,
height: 30,
tintColor: '#42b49a'
},
});
export default MainApp;
