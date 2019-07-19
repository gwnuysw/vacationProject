import React, { Component } from 'react';
import {
  View,
  StyleSheet,
  TextInput
} from 'react-native';

import { BarPasswordStrengthDisplay } from 'react-native-password-strength-meter';

export default class BarComponent extends Component {
  state = {
    password: '',
  }

  onChange = password => this.setState({ password })

  render() {
    const { password } = this.state;
    return (
      <View style={styles.container}>
        <TextInput style={styles.textInput} onChangeText={this.onChange} />
        <BarPasswordStrengthDisplay
          password={password}
        />
      </View>
    );
  }
}