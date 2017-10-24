import React, { Component } from 'react';
import { View, FlatList } from 'react-native';

import ItemPedido from './ItemPedido';

class ListaActual extends Component {

  render() {
    return(
      <View style = {{ flex: 1 }}>
        <FlatList
          keyExtractor = { item => item.nombre }
          data = { ListData }
          renderItem = {
            ({ item }) => <ItemPedido
                            nombre = { item.nombre }
                            estado = { item.estado }
                          />
          }
        />
      </View>
    );
  }
}

const ListData = [{ nombre: 'Gerard', estado: 'De compras'}, { nombre: 'Louis', estado: 'Caminando'}];

export default ListaActual;
