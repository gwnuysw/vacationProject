import React from 'react';
import { ExpoConfigView } from '@expo/samples';
//<ExpoConfigView />

import SearchBar from '../components/SearchBar';
export default function SettingsScreen() {
  /**
   * Go ahead and delete ExpoConfigView and replace it with your content;
   * we just wanted to give you a quick view of your config.
   */
  return (
    <SearchBar/>
  );
}

SettingsScreen.navigationOptions = {
  header: null,
};
