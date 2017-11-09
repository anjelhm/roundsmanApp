import React, { Component } from 'react';
import { View , Text } from 'react-native';
import { connect } from 'react-redux';

import MiHistorial from '../componentes/Historial/MiHistorial';
import { iniciaObtenerHistorial } from '../acciones/historial/actions';

class ContenedorHistorial extends Component {

  componentDidMount() {
    this.props.iniciaObtenerHistorial(this.props.idRepartidor);
  }
  render() {
    const { historial } = this.props;
    return(
      <View style = {{ flex: 1}}>
      {
        historial !== null && (
        <View style = {{ flex: 1}}>
            {
              historial.obteniendo
              ? <View style = {{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text>Descargando Historial</Text>
              </View>
              : <View style = {{ flex: 1 }}>
              {
                historial.data === null
                ? <View style = {{ flex: 1 }}>
                   <Text>No hay datos</Text>
                </View>
                : <MiHistorial historial = { Object.keys(historial.data).map( x => historial.data[x] )}/>
              }
              </View>
            }
          </View>
        )
      }
      </View>
    );
  }
}
const mapStateToProps = ({ historial : {historial} }) => ({
  historial
});

const miHistorial = connect(
  mapStateToProps,
  { iniciaObtenerHistorial }
)(ContenedorHistorial);

export default miHistorial;
