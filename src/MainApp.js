import React from 'react';
import {Image, View, StyleSheet} from 'react-native';

const playIcon = require('./Images/play.png');
const volumeIcon = require('./Images/button_kill.png');
const hdIcon = require('./Images/youtube.png');
const fullScreenIcon = require('./Images/plan.jpg');
const remoteImage = {uri:'https://s3.amazonaws.com/crysfel/public/book/new-york.jpg' };

const MainApp = () => {
  return(
    <View style = {styles.imageContainer}>
    <Image source = {remoteImage} style = {styles.fullscreen}>
      <View style = {styles.container}>
        <Image source = {playIcon} style = {styles.icon} />
        <Image source = {volumeIcon} style= {styles.icon} />
        <View style = {styles.progress}>
          <View style = {styles.progressBar} />
        </View>
        <Image source = {hdIcon} style = {styles.icon} />
        <Image source = {fullScreenIcon} style= {styles.icon} />
      </View>
    </Image>
    </View>
  );
};

const styles = StyleSheet.create({
imageContainer: {
  flex: 1,
},
fullscreen: {
flex: 1,
resizeMode: 'cover',
},
container: {
position: 'absolute',
backgroundColor: '#202020',
borderRadius: 5,
flexDirection: 'row',
height: 50,
padding: 5,
paddingTop: 16,
bottom: 30,
right: 10,
left: 10,
borderWidth: 1,
borderColor: '#303030',
},
icon: {
tintColor: '#fff',
height: 16,
width: 16,
marginLeft: 5,
marginRight: 5,
},
progress: {
backgroundColor: '#000',
borderRadius: 7,
flex: 1,
height: 14,
margin: 10,
marginTop: 2,
},
progressBar: {
backgroundColor: '#bf161c',
borderRadius: 5,
height: 10,
margin: 2,
width: 80,
},
});

export default MainApp;
