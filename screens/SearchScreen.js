import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import SearchBar from '../components/SearchBar';
export default function SearchScreen() {
  return (
     <SearchBar />
  );
}

SearchScreen.navigationOptions = {
  header: null,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
  },
});
