import React, { Component } from 'react';
import { View, FlatList } from 'react-native';;

//importar la clase TarjetaPedido
import TarjetaPedido from './TarjetaPedido';

class ListaPedidos extends Component {
  render() {
    return(
      <View>
        <FlatList
          data = { data }
          renderItem = { ({ item }) => <TarjetaPedido
                    nombre = { item.nombre }
                    ubicacion = { item.ubicacion }
                        /> }
                    keyExtractor = { item => item.nombre }
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
