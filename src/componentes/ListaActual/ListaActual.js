import React, { Component } from 'react';
import {View, ListView} from 'react-native';
import Item from './Item';

class ListaActual extends Component {
constructor(){
  super();

const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1!==r2});
this.state={
  dataSource: ds.cloneWithRows(data)
};}
  render() {
    return (
      <View style={{flex:1,backgroundColor: '#F5F5F5'}}>
      <ListView
        dataSource={ this.state.dataSource }
        renderRow={ (rowData) => <Item cantidad={ rowData.cantidad } nombre={rowData.nombre } descripcion={rowData.descripcion }   />}
      />
      </View>
    );
  }
  }

    const data = [
      {
        cantidad:"1",
        nombre:"Coca Cola 600 ml",
        descripcion:"Una bien grande"
      },
      {
        cantidad:"2",
        nombre:"Fresca 1 lt",
        descripcion:"Una bien grande"
      },
      {
        cantidad:"3",
        nombre:"Fresca 1 lt",
        descripcion:"Una bien grande"
      },
      {
        cantidad:"4",
        nombre:"Fresca 1 lt",
        descripcion:"Una bien grande"
      },
      {
        cantidad:"5",
        nombre:"Fresca 1 lt",
        descripcion:"Una bien grande"
      },
      {
        cantidad:"6",
        nombre:"Fresca 1 lt",
        descripcion:"Una bien grande"
      },
      {
        cantidad:"7",
        nombre:"Fresca 1 lt",
        descripcion:"Una bien grande"
      },
      {
        cantidad:"8",
        nombre:"Fresca 1 lt",
        descripcion:"Una bien grande"
      },
      {
        cantidad:"9",
        nombre:"Fresca 1 lt",
        descripcion:"Una bien grande"
      },
      {
        cantidad:"10",
        nombre:"Mundet 1 lt",
        descripcion:"Una bien grande"
      }
    ]
    export default ListaActual;
