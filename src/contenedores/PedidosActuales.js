import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';

import ListaActual from '../componentes/pedidosActuales/ListaActual';

import { iniciaObtenerPedidosAceptados } from '../acciones/pedidos/actions';
import { lanzarEstados } from '../acciones/navegador/actions';

class ContenedorPedidosActuales extends Component {

  componentDidMount() {
    this.props.iniciaObtenerPedidosAceptados(this.props.idRepartidor);
  }

  irAEstado(idPedido, idUsuario, idRepartidor, idPedidoAceptado, solicitud) {
    this.props.lanzarEstados(idPedido, idUsuario, idRepartidor, idPedidoAceptado, solicitud);
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
                  <Text>Descargando pedidos</Text>
                </View>
                : <View style = {{ flex: 1 }}>
                   {
                     aceptado.data === null
                     ? <View style = {{ flex: 1 }}>
                        <Text>No hay datos</Text>
                     </View>
                     : <ListaActual aceptado = { Object.keys(aceptado.data).map( x => aceptado.data[x] ) } irAEstado = { this.irAEstado.bind(this) }/>
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
   { iniciaObtenerPedidosAceptados, lanzarEstados }
 )( ContenedorPedidosActuales );

export default PedidosActuales;
