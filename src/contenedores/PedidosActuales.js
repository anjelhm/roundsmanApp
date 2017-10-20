import React, { Component } from 'react';
import { View } from 'react-native';

import ListaActual from '../componentes/pedidosActuales/ListaActual';

class PedidosActuales extends Component {
  render() {
    return(
      <View style = {{ flex: 1 }}>
        <ListaActual/>
      </View>
    );
  }
}
export default PedidosActuales;
