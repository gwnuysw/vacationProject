import React from 'react';
import {ImageBackground, TouchableHighlight, Alert} from 'react-native';
import backgroundImg from '../assets/images/footsteplogo.png';

export default class StartScreen extends React.Component {

  render() {

    return (
      <TouchableHighlight
      onPress={() => this.props.navigation.navigate("SignIn")}
      underlayColor="white">
        <ImageBackground
        source={backgroundImg}
        style={{width: '75%', height: '75%'}}>
        </ImageBackground>
      </TouchableHighlight>
    );
  }
}
