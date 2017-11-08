import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import { connect } from 'react-redux';

import Registro from '../componentes/Registro';
import Barra_nav from '../comunes/Barra_nav';

import { iniciaGuardarRepartidor } from '../acciones/repartidor/actions'
import { lanzarAnterior } from '../acciones/navegador/actions';

class contenedorNuevoRegistro extends Component {

  static navigationOptions = {
    header: null
  };

/**
* Función que recibe los datos para nuevo registro y los pasa a la acción para ingresarlos a la base de datos
*/
  recibeDatos( nombre, apellidom, apellidop, date, sexo, correo,  clave1 ) {


    const data = {
      nombre: nombre,
      paterno: apellidop,
      materno: apellidom,
      fecha: date,
      sexo: sexo,
      correo: correo,
      clave: clave1
    };

     this.props.iniciaGuardarRepartidor(data);

  }

  retroceder(){
    this.props.lanzarAnterior();
  }

  render() {
    return (
      <View style = { estilo.contenedor }>
      <Barra_nav titulo = "Nuevo Registro" retroceder = { this.retroceder.bind(this) }/>
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
   { iniciaGuardarRepartidor, lanzarAnterior }
  )( contenedorNuevoRegistro );

export default NuevoRegistro;
