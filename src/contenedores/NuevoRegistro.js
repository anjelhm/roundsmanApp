import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import { connect } from 'react-redux';

import Registro from '../componentes/Registro';
import Barra_nav from '../comunes/Barra_nav';
import actions from '../acciones/repartidor/actions'

class contenedorNuevoRegistro extends Component {

  static navigationOptions = {
    header: null
  };

  recibeDatos( nombre, apellidom, apellidop, date, sexo, correo,  clave1 ) {

    const data = {
      nombre: nombre,
      paterno: apellidop,
      materno: apellidom,
      fecha: date.getTime(),
      sexo: sexo,
      correo: correo,
      clave: clave1
    };

     this.props.iniciaGuardarRepartidor(data);

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

const mapStateToProps = ({ repartidor: guardar }) => ({
   guardar
 });

 const NuevoRegistro = connect (
   mapStateToProps,
   { iniciaGuardarRepartidor }
  )( contenedorNuevoRegistro );

export default NuevoRegistro;
