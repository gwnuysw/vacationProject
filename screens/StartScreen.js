import React from 'react';
import {ImageBackground, TouchableHighlight, Alert} from 'react-native';
import backgroundImg from '../assets/images/download.jpeg';

export default class StartScreen extends React.Component {
  _onPressButton() {
    Alert.alert('You tapped the button!')
  }
  render() {
    return (
      <TouchableHighlight
      onPress={() => this.props.navigation.navigate("Main")} 
      underlayColor="white">
        <ImageBackground
        source={backgroundImg}
        style={{width: '100%', height: '100%'}}>
        </ImageBackground>
      </TouchableHighlight>
    );
  }
}
