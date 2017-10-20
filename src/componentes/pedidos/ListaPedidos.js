import React, { Component } from 'react';
import { View, ListView } from 'react-native';

import TarjetaPedido from './TarjetaPedido';

class ListaPedidos extends Component {

constructor() {
  super();

  const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2});

  this.state = {
    dataSource: ds.cloneWithRows(data)
  };

}

  render() {
    return (
      <View style = {{ flex: 1, backgroundColor: '#FFFFFF' }}>
        <ListView
          dataSource = { this.state.dataSource }
          renderRow = { (rowData) => <TarjetaPedido nombre = { rowData.nombre } ubicacion = { rowData.ubicacion }/>}
        />
      </View>
    );
  }
}  const data = [
    {
      nombre:"Oscar",
      ubicacion:"tlaxiaco"
    },
    {
      nombre:"Pheter",
      ubicacion:"tlaxiaco"
    }
  ]
export default ListaPedidos;
