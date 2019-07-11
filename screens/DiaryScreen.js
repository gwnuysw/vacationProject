import React from 'react';
import { Image } from 'react-native';
import { Container, Header, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body, Right } from 'native-base';
import DiaryList from '../components/DiaryList.js';
export default class DiaryScreen extends React.Component {
  render(){
    return (
      <Content >
        <DiaryList />
      </Content>
    );
  }
}
DiaryScreen.navigationOptions = {
  title: 'My Diaries',
};
