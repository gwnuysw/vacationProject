import { createBrowserApp } from '@react-navigation/web';
import { createSwitchNavigator } from 'react-navigation';

import MainTabNavigator from './MainTabNavigator';
import StartScreen from '../screens/StartScreen';
const switchNavigator = createSwitchNavigator({
  // You could add another route here for authentication.
  // Read more at https://reactnavigation.org/docs/en/auth-flow.html
  Start: StartScreen,
  Main: MainTabNavigator
},
{
  initialRouteName: 'Start'
});
switchNavigator.path = '';

export default createBrowserApp(switchNavigator, { history: 'hash' });
