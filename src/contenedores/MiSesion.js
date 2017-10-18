import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View } from 'react-native';

import { lanzarRegistro, lanzarIniciaSesion } from '../acciones/navegador/actions';

import Sesion from '../componentes/Sesion';



class ContenedorMiSesion extends Component{


    static navigationOptions = {
      header: null
    };

  irARegistro() {
    this.props.lanzarRegistro();
  }

  irAIniciar() {
    this.props.lanzarIniciaSesion();
  }

  render(){
    return(
      <View style = {{ flex: 1 }}>
      <Sesion registrar = { this.irARegistro.bind( this ) } iniciar = { this.irAIniciar.bind(this) }/>
      </View>
    );
  }
}

const mapStateToProps = ( { navegador: nav } ) => ( {
  nav
} );

const MiSesion = connect(
  mapStateToProps,
  { lanzarRegistro, lanzarIniciaSesion }
)( ContenedorMiSesion );

export default MiSesion;
