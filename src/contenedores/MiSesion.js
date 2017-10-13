import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View } from 'react-native';

import { lanzarRegistro } from '../acciones/navegador/actions';

import Sesion from '../componentes/Sesion';



class ContenedorMiSesion extends Component{


    static navigationOptions = {
      header: null
    };

  irARegistro(){
    this.props.lanzarRegistro();
  }

  render(){
    return(
      <View style = {{ flex: 1 }}>
      <Sesion registrar = { this.irARegistro.bind( this ) }/>
      </View>
    );
  }
}

const mapStateToProps = ( { navegador: nav } ) => ( {
  nav
} );

const MiSesion = connect(
  mapStateToProps,
  { lanzarRegistro }
)( ContenedorMiSesion );

export default MiSesion;
