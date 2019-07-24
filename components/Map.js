import React from 'react';
import {
  StyleSheet,
  View,
  Dimensions,
} from 'react-native';

import MapView, { Marker, ProviderPropType } from 'react-native-maps';

const { width } = Dimensions.get('window');
const { height } = Dimensions.get('window');

const ASPECT_RATIO = width / height;
const LATITUDE = 37.78825;
const LONGITUDE = -122.4324;
const LATITUDE_DELTA = 0.03; // default : 0.0922;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;
let id = 0;

const DEFAULT_PADDING = { top: 40, right: 40, bottom: 40, left: 40 };

function randomColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

function createMarker(LATITUDE, LONGITUDE) {
  return {
    latitude: LATITUDE,
    longitude: LONGITUDE,
  };
}

class Map extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isMapReady: false,
      region: {
        latitude: 37.78825,
        longitude: -122.4324,
        latitudeDelta: 0.03,
        longitudeDelta: LONGITUDE_DELTA,
      },
      markers: [
        createMarker(37.78825, -122.4324),
        createMarker(37.77825, -122.4324),
        createMarker(37.76825, -122.4324),
        createMarker(37.75825, -122.4324),
        createMarker(37.65825, -122.4324),
        createMarker(37.63825, -122.4324),
      ],
    };
  }

  fitAllMarkers() {
    this.map.fitToCoordinates(this.state.markers, {
      edgePadding: DEFAULT_PADDING,
      animated: true,
    });
  }

  MapisReady() {
    this.setState({ isMapReady : true});
    this.fitAllMarkers();
  }

  render() {
    return (
      <View style={styles.container}>
        <MapView
          ref={ref => {
            this.map = ref;
          }}
          provider={this.props.provider}
          style={styles.map}
          initialRegion={this.state.region}
          onMapReady={() => this.MapisReady()}
        >
          {this.state.isMapReady && this.state.markers.map(marker => (
            <Marker
              /* key={marker.key}
              coordinate={marker.coordinate}
              pinColor={marker.color} */
              coordinate={marker}
            />
          ))}
        </MapView>
      </View>
    );
  }
}

Map.propTypes = {
  provider: ProviderPropType,
};

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
});

export default Map;