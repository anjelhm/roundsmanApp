import React, { Component } from 'react';
import { View } from 'react-native';

import ListaPedidos from '../componentes/pedidos/ListaPedidos';

/**
 * cargando componente ListaPedidos
*/

class Pedidos extends Component {

  render() {

    return(
      <View>
        <ListaPedidos/>
      </View>
    );

  }
}
export default Pedidos;
