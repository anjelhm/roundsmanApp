import React, { Component } from 'react';
import {
  View,
  TouchableOpacity,
  Text,
  StyleSheet
 } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import Boton from '../Menu/Boton'

class ItemHistorial extends Component {

  haciaListaHistorial() {
    this.props.haciaListaHistorial(this.props.historial);
  }

  eliminarItem(){
    this.props.eliminarItem(this.props.historial, this.props.nombre);
  }

  render() {
    const { nombre, precio, ubicacion } = this.props;

    return(
      <View style = { estilo.contenedor } >
      <View>
          <TouchableOpacity style = {{ marginLeft: 5, justifyContent: 'center' }} onPress = { this.haciaListaHistorial.bind(this) }>
              <Text style = {{ fontSize: 18, color: '#607D8B',color: '#000000' }}>
                { nombre }
              </Text>
              <Text style = {{ fontSize: 18, color: '#607D8B', color: '#607D8B' }}>
                { "Precio: "+precio }
              </Text>
              <Text style = {{ fontSize: 18, color: '#607D8B',color: '#607D8B' }}>
                { "Lat:"+ubicacion.lat + " Long:"+ubicacion.long }
              </Text>
          </TouchableOpacity>
          </View>
          <View style={{ width: 50,  justifyContent:'center',alignItems: 'center'}}>

          <TouchableOpacity onPress = { this.eliminarItem.bind(this) }>
            <Icon name = { 'delete-forever' } size= { 40 } color= { '#CFD8DC' } />
          </TouchableOpacity>
          </View>

      </View>
    );

  }
}
const estilo = StyleSheet.create({
  contenedor: {
    height: 80,
    marginTop: 5,
    marginBottom: 5,
    marginLeft: 5,
    marginRight: 5,
    flexDirection:'row',
    justifyContent: 'space-between',
    backgroundColor: '#FFFFFF',
    elevation: 4
    }
});

ItemHistorial.defaultProps = {
  nombre: 'Desconocido',
  precio: 'Desconocido',
  ubicacion: 'Desconocido'
}

export default ItemHistorial;
