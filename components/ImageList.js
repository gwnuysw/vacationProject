// src/components/PhoneInfoList.js
import React, { Component } from 'react';
import { TouchableHighlight,
  PixelRatio,
  TouchableOpacity,
  StyleSheet,
  View,
  Image,
  Text,
  NativeModules,
  Alert} from 'react-native';
import ImagePicker from 'react-native-image-picker';
import ImageCard from './ImageCard';
export default class ImageList extends Component {
  static defaultProps = {
    item: []
  }

  render() {
    const avatarSource = this.props.item;
    const list = avatarSource.map((element) => {
      console.warn('imagelist map',element)
      return (<ImageCard item={element} handleSetText={this.props.handleSetText}/>);
    });
    return (
      <View style={{marginBottom: 20}}>
        {list}
      </View>
    );
  }
}
