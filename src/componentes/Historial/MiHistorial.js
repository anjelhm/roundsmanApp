import React, { Component } from 'react';
import { View, FlatList } from 'react-native';

import ItemHistorial from './ItemHistorial';

class MiHistorial extends Component {
  render() {
    return(
      <View style = {{ flex: 1 }}>
        <FlatList
          data = { ListData }
          renderItem = { ({ item }) => <ItemHistorial
                    nombre = { item.nombre }
                    precio = { item.precio }
                    ubicacion = { item.ubicacion }
                  /> }
        />
      </View>
    );
  }
}

const ListData = [{ nombre: 'Gerard', precio: '$500', ubicacion: 'San Pedro'},{ nombre: 'Oscar', precio: '$1500', ubicacion: 'San Pablo'}];

export default MiHistorial;
