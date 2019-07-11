import React, { Component } from 'react';
import { Container, Header, Content, List, ListItem, Text, Left, Body, Right, Icon, Button } from 'native-base';
import { ScrollView, StyleSheet, View, Dimensions } from 'react-native';

import DiaryCard from './DiaryCard';

const { width } = Dimensions.get('window');

export default class DiaryList extends Component {
  onScreen = 0;
  render() {
    return (
      <View style={styles.container}>
        <ScrollView
          //ref={(scrollView) => {this.scrollView = scrollView;}}
          onScroll = {event => {
            this.onScreen = Math.round(event.nativeEvent.contentOffset.x / width);
          }}
          horizontal={true}
          decelerationRate={0}
          snapToInterval={width}
          snapToAlignment={'center'}
          contentInset = {{
            top : 0,
            bottom : 0,
            left : 30,
            right : 30,
          }}
          style={styles.container}
          showsHorizontalScrollIndicator = {false}
        >
          <View style={styles.item}><DiaryCard/></View>
          <View style={styles.item}><DiaryCard/></View>
          <View style={styles.item}><DiaryCard/></View>
          <View style={styles.item}><DiaryCard/></View>
        </ScrollView>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
   flex: 1,
  },
  item : {
    width : width - 60,
    margin : 30,
    flexGrow : 1,
  }
})
