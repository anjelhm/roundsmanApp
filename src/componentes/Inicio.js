import React, { Component } from 'react';
import {
  View,
  Text
} from 'react-native';

class Inicio extends Component {

  static navigationOptions = {
    header: null
  };

  render() {
    return (
      <View style={{ flex: 1 }}>
        <Text>Inicio</Text>
      </View>
    );
  }
}

export default Inicio;
