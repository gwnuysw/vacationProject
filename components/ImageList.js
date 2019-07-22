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
export default class ImageList extends Component {
  static defaultProps = {
    avatarSource: []
  }

  render() {
    const { avatarSource } = this.props;
    let data;
    const list = avatarSource.map((element) => {
      return (<Image style={styles.avatar} source={element} />);
    });

    return (
      <View style={{marginBottom: 20}}>
        {list}
        {data}
      </View>
    );
  }
}
const styles = StyleSheet.create({
  avatar: {
    width: 250,
    height: 250,
  },
})
