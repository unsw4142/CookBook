
import React, { Component } from 'react';
import {Image, View, Text, TouchableHighlight,TabBarIOS,
   StyleSheet} from 'react-native';


const homeIcon = require('./Images/001-youtube.png');
const favIcon = require('./Images/002-whatsapp.png');
const blogIcon = require('./Images/003-facebook.png');
const profileIcon = require('./Images/004-microsoft.png');

class TabsComponent extends Component{
  state = {
    selected:'home',
  }
  selectTab(id){
    this.setState({selected: id,});
  }
  renderTab(options){
    return(
      <TabBarIOS.Item
        title = {options.title}
        selected = {this.state.selected ===  options.id}
        onPress= {() => this.selectTab(options.id)}
        icon = {options.icon}
        >
        <View style={styles.container}>
          <Image source={options.icon} style={styles.icon} />
          <Text style={styles.title}>{options.title}</Text>
        </View>
      </TabBarIOS.Item>
    );
  }
  render() {
    return(

      <TabBarIOS tintColor = "#42b49a">
        {this.renderTab({title: 'Home', id: 'home', icon: homeIcon})}
        {this.renderTab({title: 'Favorites', id: 'favorites', icon: favIcon})}
        {this.renderTab({title: 'Blog', id: 'blog', icon: blogIcon})}
        {this.renderTab({title: 'Profile', id: 'profile', icon: profileIcon})}
      </ TabBarIOS>

    );
  }
}


const styles = StyleSheet.create({
container: {
  flex:1,
  alignItems: 'center',
},
title: {
fontSize: 20,
marginTop: 20,
marginBottom: 30,
},
icon: {
flexDirection: 'row',
marginBottom: 30,
marginTop: 20,
width: 30,
height: 30,
tintColor: '#42b49a'
},
});

export default TabsComponent;
