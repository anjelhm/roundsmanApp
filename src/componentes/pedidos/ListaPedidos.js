import React, { Component } from 'react';
import { View, ListView } from 'react-native';

//importar la clase TarjetaPedido
import TarjetaPedido from './TarjetaPedido';

class ListaPedidos extends Component {

constructor() {
  super();

  const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2});

  this.state = {
    dataSource: ds.cloneWithRows(data)
  };

}
/**
 * enviar nombre y ubicacion al TarjetaPedido
*/
  render() {
    return (
      <View>
        <ListView
          dataSource = { this.state.dataSource }
          renderRow = { (rowData) => <TarjetaPedido nombre = { rowData.nombre } ubicacion = { rowData.ubicacion } /> }
        />
      </View>
    );
  }
}

  const data = [
    {
      nombre:"User 1",
      ubicacion:"tlaxiaco"
    },
    {
      nombre:"User 2",
      ubicacion:"tlaxiaco"
    },
    {
      nombre:"User 3",
      ubicacion:"tlaxiaco"
    },
    {
      nombre:"User 4",
      ubicacion:"tlaxiaco"
    },
    {
      nombre:"User 5",
      ubicacion:"tlaxiaco"
    },
    {
      nombre:"User 6",
      ubicacion:"tlaxiaco"
    },
    {
      nombre:"User 7",
      ubicacion:"tlaxiaco"
    },
    {
      nombre:"User 8",
      ubicacion:"tlaxiaco"
    }
  ]
export default ListaPedidos;
