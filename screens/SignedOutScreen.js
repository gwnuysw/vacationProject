import React from 'react';
import { Container, Header, Content, Form, Item, Input, Label, Text, View } from 'native-base';
import { Image, StyleSheet } from 'react-native';
import Button from '../components/CustomButton'
import FormTextInput from "../components/FormTextInput"
import imageLogo from "../assets/images/footsteplogo.png"
import strings from "../constants/strings"
import colors from "../constants/Colors"

const authUrl = 'http://106.10.55.192:9080';
const Realm = require('realm');
let creds;

interface State {
  email: String;
  password: String;
}

class SignedOutScreen extends React.Component<{}, State>{

  state: State = {
    email: "",
    password: ""
  };

  handleEmailChange = (email: string) => {
    this.setState({email: email});
  };
  handlePasswordChange = (password: string) => {
    this.setState({ password: password});
  };
  handleLoginPress = () => {
    creds = Realm.Sync.Credentials.usernamePassword(email, password,false);
    Realm.Sync.User.login(authUrl, creds).then(user => {
      // user is logged in
      // do stuff ...
      this.props.navigation.navigate("Main");
    }).catch(error => {
      // an auth error has occurred
    });
  };
  handleNaverLoginPress = () => {
    console.log("Naver button pressed");
  };
  handleSignupPress = () => {
    this.props.navigation.navigate("SignUp");
  };

  render(){
    return (
      <View style= {styles.container}>
        <Image source={imageLogo} style={{ alignItems:'center', width : null}} />
        <View style={styles.form}>
        <Form>
          <FormTextInput
            value={this.state.email}
            onChangeText={this.handleEmailChange}
            placeholder={strings.EMAIL_PLACEHOLDER}
          />
          <FormTextInput
            value={this.state.password}
            onChangeText={this.handlePasswordChange}
            placeholder={strings.PASSWORD_PLACEHOLDER}
          />
        </Form>
          <Button
            label = {'Bebop Sign In'}
            onPress={() => this.handleLoginPress()}
          />
          <Button
            buttonColor = {'green'}
            label = {'Naver Sign In'}
          />
          <Button
            label = {'Bebop Sign Up'}
            onPress={()=> this.handleSignupPress()}
          />
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.WHITE,
    alignItems: "center",
    justifyContent: "space-between"
  },
  logo: {
    flex: 1,
    width: "100%",
    resizeMode: "contain",
    alignSelf: "center"
  },
  form: {
    flex: 1,
    justifyContent: "center",
    width: "80%"
  }
});

export default SignedOutScreen;