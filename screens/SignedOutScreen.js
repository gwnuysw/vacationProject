import React from 'react';
import { Container, Header, Content, Form, Item, Input, Label, Button, Text } from 'native-base';
import { Image } from 'react-native';

export default class SignedOut extends React.Component{
  render(){
    return (
      <Container>
        <Header>

        </Header>
        <Image
        source={require('../assets/images/download.jpeg')}
        style={{ alignItems:'center'}}
        />
        <Content>
          <Form>
            <Item stackedLabel>
              <Label>Email</Label>
              <Input />
            </Item>
            <Item stackedLabel last>
              <Label>Password</Label>
              <Input />
            </Item>
          </Form>
          <Button block onPress={() => this.props.navigation.navigate("Main")}>
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
