import React, { Component } from 'react';
import { Container, Header, Content, List, ListItem, Text, Left, Body, Right, Icon } from 'native-base';
import { FlatList, StyleSheet, View } from 'react-native';

import DiaryCard from './DiaryCard';
export default class DiaryList extends Component {
  render() {
    return (
      <View style={styles.container}>
        <FlatList
          data={[
            {key: '1'},
            {key: '2'},
            {key: '3'},
            {key: '4'},
            {key: '5'},
            {key: '6'},
            {key: '7'},
            {key: '8'},
          ]}
          renderItem={({item}) => <DiaryCard style={styles.item}/>}
        />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
   flex: 1,
   paddingTop: 22
  },
  item: {
    padding: 10
  }
})
