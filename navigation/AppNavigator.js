import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import MainTabNavigator from './MainTabNavigator';
import StartScreen from '../screens/StartScreen';
import SignedOutScreen from '../screens/SignedOutScreen';
import SignUpScreen from '../screens/SignUpScreen';
import NewDiaryScreen from '../screens/NewDiaryScreen';
import ForgotpwScreen from '../screens/ForgotpwScreen';
export default createAppContainer(
  createSwitchNavigator({
    // You could add another route here for authentication.
    // Read more at https://reactnavigation.org/docs/en/auth-flow.html
    Start: StartScreen,
    SignedOut: SignedOutScreen,
    SignUp: SignUpScreen,
    NewDiary: NewDiaryScreen,
    Main: MainTabNavigator,
    Forgot : ForgotpwScreen,
  },
  {
      initialRouteName: 'Start'
  })
);
