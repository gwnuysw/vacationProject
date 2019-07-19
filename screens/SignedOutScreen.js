import React from 'react';
import { Container, Header, Content, Form, Item, Input, Label, Text, View,  } from 'native-base';
import { Image, StyleSheet, TextInput,  TouchableHighlight, Alert } from 'react-native';
import Button from '../components/CustomButton';
import imageLogo from '../assets/images/footsteplogo.png';
import strings from '../constants/strings';
import colors from '../constants/Colors';

const authUrl = 'http://106.10.55.192:9080';
const Realm = require('realm');

class SignedOutScreen extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      email: "",
      password: "",
    }
  }

  handleLoginPress = () => {
    const { email, password } = this.state;
    let creds = Realm.Sync.Credentials.usernamePassword(email, password, false);
    Realm.Sync.User.login(authUrl, creds).then(user => {
      this.props.navigation.navigate("Main");
      // user is logged in
      // do stuff ...
    }).catch(error => {
      // an auth error has occurred
      Alert.alert("Alert", "Invalid ID & Password");
    });
  };
  handleNaverLoginPress = () => {
    this.props.navigation.navigate("Main");
    Alert.alert("Alert", "preparing....");
  };
  handleSignupPress = () => {
    this.props.navigation.navigate("SignUp");
  };
  handleForgotPress = () => {
    this.props.navigation.navigate("Forgot");
  };

  render(){
    return (
      <View style= {styles.container}>
        <Image style={styles.mainIcon} source={imageLogo}/>
        <View style={styles.inputContainer}>
          <TextInput style={styles.inputs}
            placeholder="Email"
            keyboardType="email-address"
            UnderlineColorAndroid='transparent'
            onChangeText={(email) => this.setState({email})}
          />
        </View>

        <View style={styles.inputContainer}>
          <TextInput style={styles.inputs}
            placeholder="Password"
            secureTextEntry={true}
            underlineColorAndroid='transparent'
            onChangeText={(password) => this.setState({password})}
          />
        </View>
        <TouchableHighlight style={[styles.buttonContainer, styles.loginButton]} onPress={() =>this.handleLoginPress()}>
          <Text style={styles.loginText}>Sign In</Text>
        </TouchableHighlight>
        <TouchableHighlight style={[styles.buttonContainer, styles.naverloginButton]} onPress={() => this.handleNaverLoginPress()}>
            <Text style={styles.loginText}>Naver Sign In</Text>
        </TouchableHighlight>
        <TouchableHighlight style={[styles.buttonContainer, styles.loginButton]} onPress={() =>this.handleSignupPress()}>
            <Text style={styles.loginText}>Sign Up</Text>
        </TouchableHighlight>
        <TouchableHighlight style={[styles.buttonContainer, styles.loginButton]} onPress={() =>this.handleForgotPress()}>
            <Text style={styles.loginText}>Forgot my password</Text>
        </TouchableHighlight>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
  },
  inputContainer: {
      borderBottomColor: '#FFFFFF',
      backgroundColor: '#FFFFFF',
      borderRadius:30,
      borderBottomWidth: 1,
      width:250,
      height:45,
      marginBottom:20,
      flexDirection: 'row',
      alignItems:'center'
  },
  inputs:{
      height:45,
      marginLeft:16,
      borderBottomColor: '#FFFFFF',
      flex:1,
  },
  inputIcon:{
    width:30,
    height:30,
    marginLeft:15,
    justifyContent: 'center'
  },
  mainIcon:{
    width:100,
    height:100,
    justifyContent: 'center'
  },
  buttonContainer: {
    height:45,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom:20,
    width:250,
    borderRadius:30,
  },
  loginButton: {
    backgroundColor: "#00b5ec",
  },
  loginText: {
    color: 'white',
  },
  naverloginButton: {
    backgroundColor: 	'#228B22',
  },
});

export default SignedOutScreen;
