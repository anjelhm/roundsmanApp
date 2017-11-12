import React, { Component } from 'react';
import { View, Text, ActivityIndicator, Alert } from 'react-native';
import { connect } from 'react-redux';
import Icon from 'react-native-vector-icons/MaterialIcons';

import MiHistorial from '../componentes/Historial/MiHistorial';
import { iniciaObtenerHistorial, iniciaEliminarItemHistorial } from '../acciones/historial/actions';
import { lanzarListaHistorial } from '../acciones/navegador/actions';

class ContenedorHistorial extends Component {

  componentDidMount() {
    this.props.iniciaObtenerHistorial(this.props.idRepartidor);
  }
  
  verListaHistorial(historial) {
    this.props.lanzarListaHistorial(this.props.idRepartidor, historial);
  }
  
  eliminar(historial, nombre) {
    Alert.alert(
      'CUIDADO!',
      '¿Estás seguro que deseas eliminar el pedido de ' + nombre + ' ?',
      [
        {text: 'Eliminar', onPress: () => this.props.iniciaEliminarItemHistorial(this.props.idRepartidor, historial)},
        {text: 'cancelar', onPress: () => {}, style: 'cancel'}
      ],
      { cancelable: false }
    )
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
                <ActivityIndicator color = "#607D8B" size = { 140 }/>
              </View>
              : <View style = {{ flex: 1 }}>
              {
                historial.data === null
                ? <View style = {{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                  <Icon name = "history" size = { 140 } color = "#CFD8DC"/>
                  <Text style = {{ color: '#CFD8DC' }}>No hay datos</Text>
                </View>
                : <MiHistorial historial = { Object.keys(historial.data).map( x => historial.data[x] )} verListaHistorial = { this.verListaHistorial.bind(this) } eliminar = { this.eliminar.bind(this) }/>
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
  { iniciaObtenerHistorial, lanzarListaHistorial, iniciaEliminarItemHistorial }
)(ContenedorHistorial);

export default miHistorial;
