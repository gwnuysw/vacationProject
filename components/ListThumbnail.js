import React, { Component } from 'react';
import { Container, Header, Content, List, ListItem, Thumbnail, Text, Left, Body, Right, Button } from 'native-base';
export default class ListThumbnail extends Component {
  render() {
    return (
      <List>
        <ListItem thumbnail>
          <Left>
            <Thumbnail square source={require('../assets/images/download.jpeg')} />
          </Left>
          <Body>
            <Text>Sankhadeep</Text>
            <Text note numberOfLines={1}>Its time to build a difference . .</Text>
          </Body>
          <Right>
            <Button transparent>
              <Text>View</Text>
            </Button>
          </Right>
        </ListItem>
      </List>
    );
  }
}
