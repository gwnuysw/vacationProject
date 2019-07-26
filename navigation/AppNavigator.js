import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import MainTabNavigator from './MainTabNavigator';
import StartScreen from '../screens/StartScreen';
import SignInScreen from '../screens/SignInScreen';
import SignUpScreen from '../screens/SignUpScreen';
import NewDiaryScreen from '../screens/NewDiaryScreen';
import ForgotpwScreen from '../screens/ForgotpwScreen';
import MapScreen from '../screens/MapScreen'
export default createAppContainer(
  createSwitchNavigator({
    // You could add another route here for authentication.
    // Read more at https://reactnavigation.org/docs/en/auth-flow.html
    Start: StartScreen,
    SignIn: SignInScreen,
    SignUp: SignUpScreen,
    NewDiary: NewDiaryScreen,
    Main: MainTabNavigator,
    Forgot : ForgotpwScreen,
    MapScreen : MapScreen,
  },
  {
      initialRouteName: 'Start'
  })
);
