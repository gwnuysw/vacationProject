import React from 'react';
import { Container, Header, Content, Form, Item, Input, Label, Text, View,  } from 'native-base';
import { Image, StyleSheet, TextInput,  TouchableHighlight, Alert } from 'react-native';
import Button from '../components/CustomButton';
import imageLogo from '../assets/images/footsteplogo.png';
import strings from '../constants/strings';
import colors from '../constants/Colors';
import OneSignal from 'react-native-onesignal';

const authUrl = 'http://106.10.55.192:9080';
const Realm = require('realm');

class ForgotpwScreen extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      email: "",
      reset_token:"",
      new_password:"",
    }
    OneSignal.setLogLevel(6, 0);

    OneSignal.init("016b93d7-f6e0-4e39-a29f-5fb3335a2dcf", {kOSSettingsKeyAutoPrompt : true});
  }
 
  handleSendTokenPress = () => {
    const {email, reset_token, new_password} = this.state;
    Realm.Sync.User.requestPasswordReset(authUrl, email).then(() => {
        // query sent successfully.
        Alert.alert("Alert", "Sending  successfully");
    }).catch((error) => {
        // an error has occurred
        Alert.alert("Alert", "Sending error, Please check your e-mail address");
    });
  };
  handleChangePWPress = () => {
    const {email, reset_token, new_password} = this.state;
    Realm.Sync.User.completePasswordReset(authUrl, reset_token, new_password).then(() => {
        // query sent successfully. 
        Alert.alert("Alert", "Password changed successfully.");
    }).catch((error) => {
        // an error has occurred
        Alert.alert("Alert", "Please check your token.");
    });
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
        <TouchableHighlight style={[styles.buttonContainer, styles.ChangePWButton]} onPress={() =>this.handleSendTokenPress()}>
            <Text style={styles.ChangePWText}>Send token</Text>
        </TouchableHighlight>
        <View style={styles.inputContainer}>
          <TextInput style={styles.inputs}
            placeholder="reset token here"
            secureTextEntry={true}
            underlineColorAndroid='transparent'
            onChangeText={(reset_token) => this.setState({reset_token})}
          />
        </View>
        <View style={styles.inputContainer}>
          <TextInput style={styles.inputs}
            placeholder="new password"
            secureTextEntry={true}
            underlineColorAndroid='transparent'
            onChangeText={(new_password) => this.setState({new_password})}
          />
        </View>
        <TouchableHighlight style={[styles.buttonContainer, styles.ChangePWButton]} onPress={() =>this.handleChangePWPress()}>
            <Text style={styles.ChangePWText}>Change password</Text>
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
  ChangePWButton: {
    backgroundColor: "#00b5ec",
  },
  ChangePWText: {
    color: 'white',
  },
});

export default ForgotpwScreen;