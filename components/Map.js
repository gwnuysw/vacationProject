import React from 'react';
import { StyleSheet, Text } from 'react-native';
import { Content, View, Container } from 'native-base';
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps';

export default class Map extends React.Component {
  render() {
    return (
      <MapView
        provider={PROVIDER_GOOGLE}
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
        }}
        initialRegion={{
          latitude: 37.78825,
          longitude: -122.4324,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      >
        <Marker
          title="This is a title"
          description="This is a description"
          coordinate={{latitude: 37.78825,
            longitude: -122.4324,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,}}
        />
      </MapView>
    );
  }
}
