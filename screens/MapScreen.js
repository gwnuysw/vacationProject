import React from 'react';
import { StyleSheet, Text } from 'react-native';
import { Content, View, Container } from 'native-base';
import Map from '../components/Map'

export default class MapScreen extends React.Component {
    render() {
        return (
            <View style={{ flex: 1 }}>
                <View style={{ flex: 1 }}>
                    <Map />
                </View>
                <View style={{ flex: 2 }}>
                    <Text>테스트</Text>
                </View>
            </View>
        );
    }
}
