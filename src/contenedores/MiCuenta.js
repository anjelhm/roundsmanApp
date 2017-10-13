import React, { Component } from 'react';
import { View, Text } from 'react-native';

import Perfil from '../componentes/Perfil';

class MiCuenta extends Component {

  static navigationOptions = {
    header: null
  };

  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Perfil/>
      </View>
    );
  }
}

export default MiCuenta;
