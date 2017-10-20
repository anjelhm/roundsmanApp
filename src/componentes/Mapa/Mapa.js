import React, { Component } from 'react';
import {
  View,
  Text,
  StatusBar,
  StyleSheet
} from 'react-native';

import MapView from 'react-native-maps';

class Mapa extends Component {

  static navigationOptions = {
    header: null
  };

  constructor () {
    super();

    this.state = {
      markers: [
        {
          coordinate: {
            latitude: 17.266389,
            longitude: -97.677823,
          },
        }
      ]
    };
  }

  render() {
    return (
      <View style = {{ position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        justifyContent: 'flex-end',
        alignItems: 'center',
        borderColor: '#607D8B',
        borderWidth: 5 }}
      >
        <StatusBar hidden/>
        <MapView
          initialRegion={{
            latitude: 17.266389,
            longitude: -97.677823,
            latitudeDelta: 0.0099,
            longitudeDelta: 0.0199,
          }}
          style = {{ position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0 }}
        >
          <MapView.Marker
            coordinate={this.state.markers[0].coordinate}
            title="Centro"
            description="Centro de Tlaxiaco"
          />
        </MapView>
      </View>
    );
  }
}

const estilo = StyleSheet.create({
  mapa: {
    borderRadius: 5,
    borderColor: 'black',
    borderWidth: 1
  }
});

export default Mapa;
