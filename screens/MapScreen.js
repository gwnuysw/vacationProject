import React from 'react';
import { StyleSheet, Text } from 'react-native';
import { Content, View, Container } from 'native-base';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';
import Map from '../components/Map'

export default class MapScreen extends React.Component {
    render() {
        return (
            <Map />
        );
    }
}
