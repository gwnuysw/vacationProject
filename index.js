/**
 * @format
 */
import {AppRegistry} from 'react-native';
import app from './App';
import {name as appName} from './app.json';

import React, { Component } from 'react';
import OneSignal from 'react-native-onesignal'; // Import package from node modules

export default class App extends Component {

constructor(properties) {
    super(properties);
    OneSignal.init("016b93d7-f6e0-4e39-a29f-5fb3335a2dcf");

    OneSignal.addEventListener('received', this.onReceived);
    OneSignal.addEventListener('opened', this.onOpened);
    OneSignal.addEventListener('ids', this.onIds);
    OneSignal.configure(); 	// triggers the ids event
  }

  componentWillUnmount() {
    OneSignal.removeEventListener('received', this.onReceived);
    OneSignal.removeEventListener('opened', this.onOpened);
    OneSignal.removeEventListener('ids', this.onIds);
  }

  onReceived(notification) {
    console.log("Notification received: ", notification);
  }

  onOpened(openResult) {
    console.log('Message: ', openResult.notification.payload.body);
    console.log('Data: ', openResult.notification.payload.additionalData);
    console.log('isActive: ', openResult.notification.isAppInFocus);
    console.log('openResult: ', openResult);
  }

  onIds(device) {
    console.log('Device info: ', device);
  }
}
AppRegistry.registerComponent(appName, () => app);
