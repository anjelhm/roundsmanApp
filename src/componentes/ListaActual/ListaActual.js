import React, { Component } from 'react';
import { View, ScrollView, Text, FlatList } from 'react-native';

import Item from './Item';
import Mapa from '../Mapa/Mapa';

class ListaActual extends Component {

  render() {

    const { datos, nombre } = this.props;

    return(

      <View style = {{ flex: 1, backgroundColor: '#F5F5F5' }}>
          <View style={{ marginTop: 10, marginBottom: 10, alignItems:'center' }}>
            <Text style = {{ color: '#607D8B', fontSize: 18 }}>{ nombre }</Text>
          </View>
                  <View style={{ height: 235 }}>
                    <FlatList
                      data = { datos.lista }
                      renderItem = { ({ item }) => <Item
                                    cantidad = { item.cantidad }
                                    nombre = { item.nombre }
                                    descripcion = { item.descripcion }
                                        />}
                                  keyExtractor = { item => item.cantidad }
                              />
                      </View>

                      <View style = {{ flex: 1, elevation: 4, backgroundColor: '#FFFFFF' }}>
                        <View style={{ marginTop: 10, marginBottom: 10, alignItems:'center' }}>
                        <Text style = {{ color: '#607D8B', fontSize: 18 }}>Direccion</Text>
                        </View>

                        <View style={{flex: 1, width: '100%', height: 300}} >
                          <Mapa marcador = { [ { coordenadas: { latitude: datos.posicion.lat, longitude: datos.posicion.long, }, nombre : 'Nombre', descripcion: 'Direccion', color: '#F44336' } ]} />
                        </View>
                      </View>

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
