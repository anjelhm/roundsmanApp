import React, { Component } from 'react';
import { View, Text } from 'react-native';

class MiCuenta extends Component {

  static navigationOptions = {
    header: null
  };

  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Mi cuenta</Text>
      </View>
    );
  }
}

export default MiCuenta;
