import React, { Component } from 'react';
import { View } from 'react-native';

import ListaActual from '../componentes/pedidosActuales/ListaActual';

class PedidosActuales from Component {
  render() {
    return(
      <View>
        <FlatList
          data = {[ {key: 'a'}, {key: 'b'} ]}
          renderItem={({item}) => <Text>{item.key}</Text>}
        />
      </View>
    );
  }
}
