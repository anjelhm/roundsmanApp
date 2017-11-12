import React, { Component } from 'react';
import { View, Text, ActivityIndicator } from 'react-native';
import { connect } from 'react-redux';
import Icon from 'react-native-vector-icons/MaterialIcons';

import ListaActual from '../componentes/pedidosActuales/ListaActual';

import { iniciaObtenerPedidosAceptados } from '../acciones/pedidos/actions';
import { lanzarEstados, lanzarLista } from '../acciones/navegador/actions';

class ContenedorPedidosActuales extends Component {

  componentDidMount() {
    this.props.iniciaObtenerPedidosAceptados(this.props.idRepartidor);
  }

  irAEstado(idPedido, idUsuario, idRepartidor, idPedidoAceptado, solicitud) {
    this.props.lanzarEstados(idPedido, idUsuario, idRepartidor, idPedidoAceptado, solicitud);
  }

  irALista(idUsuario, solicitud) {
    this.props.lanzarLista(idUsuario, solicitud);
  }

  render() {

const { aceptado } = this.props;

    return(
      <View style = {{ flex: 1 }}>
      {
          aceptado !== null ? (
            <View style = {{ flex: 1 }}>
              {
                aceptado.obteniendo
                ? <View style = {{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                  <ActivityIndicator color = "#607D8B" size = { 140 }/>
                </View>
                : <View style = {{ flex: 1 }}>
                   {
                     aceptado.data === null
                     ? <View style = {{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                       <Icon name = "local-mall" size = { 140 } color = "#CFD8DC"/>
                       <Text style = {{ color: '#CFD8DC' }}>No hay datos</Text>
                     </View>
                     : <ListaActual aceptado = { Object.keys(aceptado.data).map( x => aceptado.data[x] ) } irAEstado = { this.irAEstado.bind(this) } irALista = { this.irALista.bind(this) }/>
                   }
                </View>
              }
            </View>
          )
          : <View style = {{ flex: 1 }}>
            <Text>Sin datos</Text>
          </View>
      }

      </View>
    );
  }
}

mapStateToProps = ({ pedidosaceptados: { aceptado } }) => ({
  aceptado
});

 const PedidosActuales = connect (
   mapStateToProps,
   { iniciaObtenerPedidosAceptados, lanzarEstados, lanzarLista }
 )( ContenedorPedidosActuales );

export default PedidosActuales;
