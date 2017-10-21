import React, { Component } from 'react';
import {
  View,
   TouchableOpacity,
   Text,
   StyleSheet } from 'react-native';

   import Boton from '../Menu/Boton'

class ItemHistorial extends Component {

  render() {
    const { nombre, precio, ubicacion } = this.props;

    return(
      <View style = { estilo.contenedor } >
          <TouchableOpacity style={{ marginLeft: 5, justifyContent: 'center' }}>
              <Text style = {{ fontSize: 18, color: '#607D8B',color: '#000000' }}>
                { nombre }
              </Text>
              <Text style = {{ fontSize: 18, color: '#607D8B', color: '#607D8B' }}>
                { precio }
              </Text>
              <Text style = {{ fontSize: 18, color: '#607D8B',color: '#607D8B' }}>
                { ubicacion }
              </Text>
          </TouchableOpacity>

          <TouchableOpacity Style = { estilo.estilo }>
          </TouchableOpacity>
          <Boton
          icono = { "delete-forever" }
          style = {{ color: '#607D8B' }} />
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
  },
  estilo: {
    height: '60',
    width: '60',
    justifyContent: 'center',
     alignItems:'center'
  }
});
ItemHistorial.defaultProps = {
  nombre: 'Desconocido',
  precio: 'Desconocido',
  ubicacion: 'Desconocido'
}

export default ItemHistorial;
