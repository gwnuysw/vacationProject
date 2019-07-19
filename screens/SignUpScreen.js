import React from 'react';
import { Container, Header, Content, Form, Item, Input, Label, Text, View,  } from 'native-base';
import { Image, StyleSheet, TextInput,  TouchableHighlight, Alert } from 'react-native';
import RNPasswordStrengthMeter from 'react-native-password-strength-meter';
import Button from '../components/CustomButton';
import imageLogo from '../assets/images/footsteplogo.png';
import strings from '../constants/strings';
import colors from '../constants/Colors';

const authUrl = 'http://106.10.55.192:9080';
const Realm = require('realm');

class SignUpScreen extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      email: "",
      password: "",
      confirmation_token: "",
      confirm_flag: false,
    }
  }
  onChange = (password, score, { label, labelColor, activeBarColor }) => {
    console.log(password, score, { label, labelColor, activeBarColor });
  };
  handleRequestEmailPress = () => {
    const { email } = this.state;
    Realm.Sync.User.requestEmailConfirmation(authUrl, email).then(() => {
      // query sent successfully. 
      Alert.alert("Alert", "The authentication token was sent by mail.");
    }).catch((error) => {
      // an error has occurred
      Alert.alert("Alert", email);
    });
  };
  handleConfirmEmailPress = () => {
    const { confirmation_token } = this.state;
    Realm.Sync.User.confirmEmail(authUrl, confirmation_token).then(() => {
      // query sent successfully. 
      this.state.confirm_flag = true;
      Alert.alert("Alert", "Your email verification is complete.");
    }).catch((error) => {
      // an error has occurred
      Alert.alert("Alert", "The token is not correct.");
    });
  };
  handleSignUpPress = () => {
    const { email, password, confirm_flag } = this.state;
    if(confirm_flag == true){
      let creds = Realm.Sync.Credentials.usernamePassword(email, password, true);
      Alert.alert("Alert", "Complete signup");
    }
    else{
      Alert.alert("Alert", "Please first verify your email");
    }
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
        <TouchableHighlight style={[styles.buttonContainer, styles.requestButton]} onPress={() =>this.handleRequestEmailPress()}>
          <Text style={styles.requestText}>Request Email confirm</Text>
        </TouchableHighlight>
        <View style={styles.inputContainer}>
          <TextInput style={styles.inputs}
            placeholder="confirmation_token"
            UnderlineColorAndroid='transparent'
            onChangeText={(confirmation_token) => this.setState({confirmation_token})}
          />
        </View>
        <TouchableHighlight style={[styles.buttonContainer, styles.requestButton]} onPress={() => this.handleConfirmEmailPress()}>
            <Text style={styles.requestText}>Token authentication</Text>
        </TouchableHighlight>
        <View style={styles.inputContainer}>
          <RNPasswordStrengthMeter 
            onChangeText={this.onChange} 
            placeholderStyle="password"
            meterType="text"
            secureTextEntry={true}
            underlineColorAndroid='transparent'
          />
        </View>
        <TouchableHighlight style={[styles.buttonContainer, styles.requestButton]} onPress={() => this.handleSignUpPress()}>
            <Text style={styles.requestText}>Complete</Text>
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
  requestButton: {
    backgroundColor: "#00b5ec",
  },
  requestText: {
    color: 'white',
  },
});

export default SignUpScreen;