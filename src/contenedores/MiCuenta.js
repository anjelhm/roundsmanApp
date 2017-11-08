import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';

import Perfil from '../componentes/Perfil';
import Barra_nav from '../comunes/Barra_nav';

import { lanzarAnterior } from '../acciones/navegador/actions';

class ContenedorMiCuenta extends Component {

  static navigationOptions = {
    header: null
  };

  retroceder(){
    this.props.lanzarAnterior();
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <Barra_nav titulo = "Mi Perfil" retroceder = { this.retroceder.bind(this) }/>
        <Perfil/>
      </View>
    );
  }
}

const mapStateToProps = ({ repartidor: perfil }) => ({
  perfil
});

const IniciaSesion = connect(
  mapStateToProps,
  {  lanzarAnterior }
)(ContenedorMiCuenta);

export default IniciaSesion;
