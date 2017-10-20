import React, { Component } from 'react';
import { View } from 'react-native';

import ListaActual from '../componentes/pedidosActuales/ListaActual';
import ItemPedido from './ItemPedido';

class PedidosActuales from Component {
  render() {
    return(
      <View>
        <FlatList
          data = {[ {key: 'a'}, {key: 'b'} ]}
          renderItem={({ItemPedido}) => <Text>{ item.key }</Text>}
        />
      </View>
    );
  }
}

export default PedidosActuales;
