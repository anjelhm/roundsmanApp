import React, { Component } from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';

import MiHistorial from '../componentes/Historial/MiHistorial';
import { historial } from '../acciones/historial/actions';

class ContenedorHistorial extends Component {
  render() {
    return(
      <View style = {{ flex: 1}}>
        <MiHistorial/>
      </View>
    );
  }
}
const mapStateToProps = ({ historial : {historial} }) => ({
  historial
});

const miHistorial = connect(
  mapStateToProps,
  { iniciaObtenerRepartidor }
)(ContenedorHistorial);

export default miHistorial;
