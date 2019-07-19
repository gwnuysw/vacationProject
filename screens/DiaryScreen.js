import React from 'react';
import { Image, StyleSheet, View, TouchableHighlight } from 'react-native';
import { Container, Header, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body, Right } from 'native-base';
import DiaryList from '../components/DiaryList.js';
import addicon from '../assets/images/addicon.png';
export default class DiaryScreen extends React.Component {
  render(){
    return (
      <Content >
        <DiaryList />
        <View style={{position: 'absolute', bottom:0, right:0}}>
          <TouchableHighlight onPress={() => this.props.navigation.navigate("NewDiary")}>
            <Image
             style={styles.addIcon}
             source={addicon}/>
          </TouchableHighlight>
        </View>
      </Content>
    );
  }
}
DiaryScreen.navigationOptions = {
  title: 'My Diaries',
};
const styles = StyleSheet.create({
  addIcon:{
    width:50,
    height:50
  }
})
