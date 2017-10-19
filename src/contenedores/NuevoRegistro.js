import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';

import Registro from '../componentes/Registro';

class NuevoRegistro extends Component {

  static navigationOptions = {
    header: null
  };

  render() {
    return (
      <View style = { estilo.contenedor }>
        <Registro/>
      </View>
    );
  }
}
const estilo = StyleSheet.create({
  contenedor: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF'
  }
});


export default NuevoRegistro;
