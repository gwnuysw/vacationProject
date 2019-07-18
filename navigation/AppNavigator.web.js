import { createBrowserApp } from '@react-navigation/web';
import { createSwitchNavigator } from 'react-navigation';

import MainTabNavigator from './MainTabNavigator';
import StartScreen from '../screens/StartScreen';
import SignedOutScreen from '../screens/SignedOutScreen';
import SignUpScreen from '../screens/SignUpScreen';
import ForgotpwScreen from '../screens/ForgotpwScreen';

const switchNavigator = createSwitchNavigator({
  // You could add another route here for authentication.
  // Read more at https://reactnavigation.org/docs/en/auth-flow.html
  Start: StartScreen,
  SignedOut: SignedOutScreen,
  SignUp: SignUpScreen,
  Main: MainTabNavigator
  Forgot : ForgotpwScreen,
},
{
    initialRouteName: 'Start'
});
switchNavigator.path = '';

export default createBrowserApp(switchNavigator, { history: 'hash' });
