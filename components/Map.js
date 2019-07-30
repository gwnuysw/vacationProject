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
        latitude: 37.7836,
        longitude: 127.0841,
        latitudeDelta: 0.03,
        longitudeDelta: LONGITUDE_DELTA,
      },
      markers: [createMarker(37.7841,127.0851)],
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
          {this.state.isMapReady && this.props.item && this.props.item.map((marker) => {
            console.warn('marker',marker.latitude);
            console.warn('marker',marker.longitude);
            return <Marker
              /* key={marker.key}
              coordinate={marker.coordinate}
              pinColor={marker.color} */
              coordinate={createMarker(marker.latitude, marker.longitude)}
            />
          })}
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
