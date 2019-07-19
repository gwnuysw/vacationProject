import React, { Component } from 'react';
import { Container, Header, Item, Input, Icon, Text, Button } from 'native-base';
import ListThumbnail from './ListThumbnail';
export default class SearchBar extends Component {
  render() {
    return (
      <Container>
        <Header searchBar rounded>
          <Item>
            <Icon name="ios-search" />
            <Input placeholder="#서울 #연인 #유럽 ..." />
          </Item>
          <Button transparent>
            <Text>Search</Text>
          </Button>
        </Header>
        <ListThumbnail/>
      </Container>
    );
  }
}
