import React from 'react';
import { Container, Header, Content, Form, Item, Input, Label, Text, View } from 'native-base';
import { Image, StyleSheet } from 'react-native';
import Button from '../components/CustomButton'

export default class SignedOutScreen extends React.Component{
  render(){
    return (
      <Container style={{paddingTop: 24}}>
        <Image
        source={require('../assets/images/download.jpeg')}
        style={{ alignItems:'center', width : null}}
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
          <Button
            label = {'Bebop Sign In'}
            onPress={() => this.props.navigation.navigate("Main")}
            />
          <Button
            buttonColor = {'green'}
            label = {'Naver Sign In'}
            />
          <Button
            label = {'Bebop Sign Up'}
            onPress={()=>this.props.navigation.navigate("SignUp")}
            />
        </Content>
      </Container>
    );
  }
}
