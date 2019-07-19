import React from 'react';
import { TouchableHighlight, StyleSheet, View, Image } from 'react-native';
import { Container, Header, Left, Body, Right, Button, Icon, Title, Text } from 'native-base';

import addicon from '../assets/images/addicon.png';
export default class NewDiaryScreen extends React.Component {
  render(){
    return (
      <Container>
        <Header>
          <Left>
            <Button transparent>
              <TouchableHighlight onPress={() => this.props.navigation.navigate("Main")}>
                <Icon name='arrow-back' />
              </TouchableHighlight>
            </Button>
          </Left>
          <Body>
            <Title>New Diary</Title>
          </Body>
          <Right>
            <Button transparent>
              <Text>
                등록
              </Text>
            </Button>
          </Right>
        </Header>
        <View   style={{flex:2, backgroundColor: 'green'}} >
        </View>
        <View style={{flex:3}} >
        </View>
        <View style={{ position: 'absolute', bottom:0, right:0}}>
          <TouchableHighlight onPress={() => this.props.navigation.navigate("NewDiary")}>
            <Image
             style={styles.addIcon}
             source={addicon}/>
          </TouchableHighlight>
        </View>
      </Container>

    );
  }
}
const styles = StyleSheet.create({
  addIcon:{
    width:50,
    height:50
  }
})
