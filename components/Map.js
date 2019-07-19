import React from 'react';
import { Image, StyleSheet } from 'react-native';

import addicon from '../assets/images/addicon.png';
export default class Map extends React.Component {

  render(){
    return (
      <Image
       source={addicon}/>
    );
  }
}
