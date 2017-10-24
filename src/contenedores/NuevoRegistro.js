import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';

import Registro from '../componentes/Registro';
import Barra_nav from '../comunes/Barra_nav';

class NuevoRegistro extends Component {

  static navigationOptions = {
    header: null
  };

  recibeDatos( nombre, apellidom, apellidop, date, sexo, correo,  clave1 ) {
      alert(nombre + apellidom + apellidop + date + sexo + correo + clave1);
  }

  render() {
    return (
      <View style = { estilo.contenedor }>
      <Barra_nav titulo = "Nuevo Registro"/>
        <Registro enviaDatos={ this.recibeDatos.bind(this) }/>
      </View>
    );
  }
}
const estilo = StyleSheet.create({
  contenedor: {
    flex: 1,
    backgroundColor: '#FFFFFF'
  }
});

export default NuevoRegistro;
