import React from 'react';
import { Image, StyleSheet } from 'react-native';
import { Container, Header, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body, Right } from 'native-base';
export default class DiaryCard extends React.Component {

  render(){
    return (
      <Content style={{flexGrow : 1, height : null}}>
        <Card>
          <CardItem cardBody>
            <Image source={require('../assets/images/download.jpeg')} style={{height: 200, width: null, flex: 1}}/>
          </CardItem>
          <CardItem style={{padding : 1,}}>
            <Left>
              <Text style={styles.title}>
                서울 여행기
              </Text>
            </Left>
          </CardItem>
          <CardItem>
            <Left>
              <Text style={styles.hashtag}>
                #서울 #한강
              </Text>
            </Left>
          </CardItem>
          <CardItem>
            <Left>
              <Text>
                2019년 7월 3일 ~ 2019년 7월 10일
              </Text>
            </Left>
          </CardItem>
        </Card>
      </Content>
    );
  }
}

const styles = StyleSheet.create({
  hashtag : {
    color : '#aaa',
    fontSize : 16,
  },
  title : {
    fontWeight : 'bold',
    fontSize : 25,
  }
})