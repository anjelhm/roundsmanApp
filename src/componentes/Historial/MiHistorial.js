import React, { Component } from 'react';
import { View, FlatList } from 'react-native';

import ItemHistorial from './ItemHistorial';

class MiHistorial extends Component {
  render() {
    return(
      <View style = {{ flex: 1 }}>
        <FlatList
          keyExtractor = { item => item.nombre }
          data = { ListData }
          renderItem = {
            ({ item }) => <ItemHistorial
                            nombre = { item.nombre }
                            precio = { item.precio }
                            ubicacion = { item.ubicacion }
                          />
          }
        />
      </View>
    );
  }
}

const ListData = [{ nombre: 'Módulo en desarrollo ...', precio: '????', ubicacion: '????'}];

export default MiHistorial;
