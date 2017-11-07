import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';

import Perfil from '../componentes/Perfil';
import { iniciaObtenerRepartidor } from '../acciones/perfil/actions';

class ContenedorMiCuenta extends Component {

  static navigationOptions = {
    header: null
  };

  render() {
    return (
      <View style={{ flex: 1 }}>
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
  { iniciaObtenerRepartidor }
)(ContenedorMiCuenta);

export default ContenedorMiCuenta;
