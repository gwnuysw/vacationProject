import React, { Component } from 'react';
import { Image, StyleSheet, TextInput } from 'react-native';
import { Container, Header, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body, Right } from 'native-base';
export default class ImageCard extends Component {

  render() {

    console.warn('item', this.props.item);
    return (
      <Container>
        <Image style={styles.avatar} source={this.props.item.avatarSource} />
        <TextInput style={styles.inputs}
          placeholder="설명을 남겨주세요!"
          UnderlineColorAndroid='transparent'
        />
      </Container>
    );
  }
}
const styles = StyleSheet.create({
  avatar: {
    width: 250,
    height: 250,
  },
  inputs:{
      height:45,
      marginLeft:16,
      borderBottomColor: '#FFFFFF',
      flex:1,
  }
})
