import React from 'react';
import { Container, Header, Content, Form, Item, Input, Label, Button } from 'native-base';
import { Text } from 'react-native';

export default class SignUpScreen extends React.Component{
  render(){
    return (
      <Container>
        <Header />
        <Content>
          <Form>
            <Item stackedLabel>
              <Label>Emain</Label>
              <Input />
            </Item>
            <Item stackedLabel last>
              <Label>Password</Label>
              <Input />
            </Item>
            <Item stackedLabel last>
              <Label>reEnter Password</Label>
              <Input />
            </Item>
          </Form>
          <Button block>
            <Text>Bebop Sign Up</Text>
          </Button>
        </Content>
      </Container>
    );
  }
}
