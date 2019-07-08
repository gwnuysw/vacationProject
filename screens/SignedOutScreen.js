import React from 'react';
import { Container, Header, Content, Form, Item, Input, Label, Button, Text } from 'native-base';
//import { Text } from 'react-native';

export default class SignedOut extends React.Component{
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
          </Form>
          <Button block>
            <Text>Bebop Sign In</Text>
          </Button>
          <Button block success>
            <Text>Naver Sign In</Text>
          </Button>
          <Button block onPress={()=>this.props.navigation.navigate("SignUp")}>
            <Text>Bebop Sign Up</Text>
          </Button>
        </Content>
      </Container>
    );
  }
}
